import { Engine, Scene, Color3, ArcRotateCamera, Vector3, HemisphericLight, Mesh, StandardMaterial, LinesMesh, MeshBuilder, Camera, SixDofDragBehavior } from "@babylonjs/core";
// const createGraph = require('ngraph.graph');
import createGraph, { Graph as NGraph, Node as NGraphNode, Link as NGraphLink } from "ngraph.graph";
import ngraphCreateLayout, { Layout as NGraphLayout } from "ngraph.forcelayout";
import { colorNameToHex } from "./util"

interface GraphOpts {
    element: string | HTMLElement;
}

export class Graph {
    element: HTMLElement;
    canvas: HTMLCanvasElement;
    engine: Engine;
    scene: Scene;
    camera: Camera;
    ngraph: NGraph;
    ngraphLayout: NGraphLayout<NGraph>;

    constructor(opts: GraphOpts) {
        // get the element that we are going to use for placing our canvas
        if (typeof (opts.element) == "string") {
            let e = document.getElementById(opts.element);
            if (!e) {
                throw new Error(`getElementById() could not find element '${opts.element}'`);
            }
            this.element = e;
        } else if (opts.element instanceof HTMLElement) {
            this.element = opts.element;
        } else {
            throw new TypeError("Graph constructor requires 'element' argument that is either a string specifying the ID of the HTML element or an HTMLElement");
        }
        this.element.innerHTML = "";

        // get a canvas element for rendering
        this.canvas = document.createElement("canvas");
        this.canvas.setAttribute("id", "babylonForceGraphRenderCanvas");
        this.canvas.setAttribute("touch-action", "none");
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        this.canvas.style.touchAction = "none";
        this.element.appendChild(this.canvas);

        // setup babylonjs
        this.engine = new Engine(this.canvas, true); // Generate the BABYLON 3D engine
        this.scene = new Scene(this.engine);
        this.camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new Vector3(0, 0, 0));
        this.camera.attachControl(this.canvas, true);
        new HemisphericLight("light", new Vector3(1, 1, 0));

        // setup force directed graph engine
        this.ngraph = createGraph();
        this.ngraphLayout = ngraphCreateLayout(this.ngraph, { dimensions: 3 })
    }

    async init() {
        // Register a render loop to repeatedly render the scene
        this.engine.runRenderLoop(() => {
            this.update();
            this.scene.render();
        });

        // WebXR setup
        if (navigator.xr) {
            const ground = MeshBuilder.CreateGround("ground", { width: 8, height: 8 });
            await this.scene.createDefaultXRExperienceAsync({
                floorMeshes: [ground]
            });
        }

        // Watch for browser/canvas resize events
        window.addEventListener("resize", () => {
            this.engine.resize();
        });
    }

    update() {
        this.ngraphLayout.step();
        this.ngraph.forEachLink((e) => e.data.parentEdge.update());
        this.ngraph.forEachNode((n) => n.data.parentNode.update());
    }

    addNode(nodeId: NodeIdType, metadata: object = {}): Node {
        return new Node(this, nodeId, metadata);
    }

    addEdge(srcNodeId: NodeIdType, dstNodeId: NodeIdType, metadata: object = {}): Edge {
        return new Edge(this, srcNodeId, dstNodeId, metadata);
    }
}

type NodeIdType = string | number;

let defaultNodeMeshOpts = {
    color: "yellow",
    shape: "capsule", // TODO: Type with enumerated options?
};

function defaultNodeMeshFactory(n: Node, g: Graph, o: typeof defaultNodeMeshOpts): Mesh {
    let mesh: Mesh

    // create mesh shape
    switch (o.shape) {
        case "box":
            mesh = MeshBuilder.CreateBox("box", {});
            break;
        case "sphere":
            mesh = MeshBuilder.CreateSphere("sphere", {});
            break;
        case "cylinder":
            mesh = MeshBuilder.CreateCylinder("cylinder", {});
            break;
        case "cone":
            mesh = MeshBuilder.CreateCylinder("cylinder", { diameterTop: 0 });
            break;
        case "capsule":
            mesh = MeshBuilder.CreateCapsule("capsule", {});
            break;
        case "torus":
            mesh = MeshBuilder.CreateTorus("torus", {});
            break;
        case "torus-knot":
            mesh = MeshBuilder.CreateTorusKnot("tk", { tube: 0.1, radialSegments: 128 });
            break;
        // case "text":
        //     var fontData = await (await fetch("https://assets.babylonjs.com/fonts/Droid Sans_Regular.json")).json();
        //     mesh = MeshBuilder.CreateText("text", n.id, fontData, {
        //         size: 16,
        //         resolution: 64,
        //         depth: 10
        //     });
        default:
            throw new TypeError(`unknown shape: ${o.shape}`);
    }

    // create mesh texture
    let mat = new StandardMaterial('defaultMaterial');
    mat.diffuseColor = Color3.FromHexString(colorNameToHex(o.color));
    mesh.material = mat;
    return mesh;
}

export type NodeMeshFactory = typeof defaultNodeMeshFactory;
let globalMeshFactory: NodeMeshFactory = defaultNodeMeshFactory;

export class Node {
    parentGraph: Graph;
    id: NodeIdType;
    metadata: object;
    ngraphNode: NGraphNode;
    mesh: Mesh;
    meshDragBehavior: SixDofDragBehavior;
    dragging = false;

    constructor(graph: Graph, nodeId: NodeIdType, metadata: object = {}) {
        this.parentGraph = graph;
        this.id = nodeId;
        this.metadata = metadata;

        // create graph node
        this.ngraphNode = this.parentGraph.ngraph.addNode(nodeId, {});
        this.ngraphNode.data.parentNode = this;

        // create mesh
        this.mesh = globalMeshFactory(this, this.parentGraph, defaultNodeMeshOpts);
        this.mesh.metadata = {};
        this.mesh.metadata.parentNode = this;

        // drag behavior
        this.meshDragBehavior = new SixDofDragBehavior();
        this.mesh.addBehavior(this.meshDragBehavior);
        this.meshDragBehavior.onDragStartObservable.add(() => {
            this.dragging = true;
        });
        this.meshDragBehavior.onDragEndObservable.add(() => {
            this.dragging = false;
        });
        // onDragObservable.add
        this.meshDragBehavior.onPositionChangedObservable.add((event) => {
            let pos = this.parentGraph.ngraphLayout.getNodePosition(this.ngraphNode.id);
            pos.x = event.position.x;
            pos.y = event.position.y;
            if (pos.z) {
                pos.z = event.position.z;
            }
        });
    }

    update(): void {
        if (this.dragging) {
            return
        }

        let pos = this.parentGraph.ngraphLayout.getNodePosition(this.ngraphNode.id);
        this.mesh.position.x = pos.x;
        this.mesh.position.y = pos.y;
        if (pos.z) {
            this.mesh.position.z = pos.z;
        }
    }
}

export class Edge {
    parentGraph: Graph;
    src: NodeIdType;
    dst: NodeIdType;
    metadata: object;
    ngraphEdge: NGraphLink;
    mesh: LinesMesh;

    constructor(graph: Graph, srcNodeId: NodeIdType, dstNodeId: NodeIdType, metadata: object = {}) {
        this.parentGraph = graph;
        this.src = srcNodeId;
        this.dst = dstNodeId;
        this.metadata = metadata;

        // TODO: make sure both srcNode and dstNode already exist

        // create ngraph link
        this.ngraphEdge = this.parentGraph.ngraph.addLink(srcNodeId, dstNodeId, {});
        this.ngraphEdge.data.parentEdge = this;

        // create mesh
        this.mesh = this.update();
        this.mesh.metadata = {};
        this.mesh.metadata.parentEdge = this;
    }

    update(): LinesMesh {
        let lnk = this.parentGraph.ngraphLayout.getLinkPosition(this.ngraphEdge.id);

        type CreateLineArgs = Parameters<typeof MeshBuilder.CreateLines>;
        const options: CreateLineArgs[1] = {
            points: [
                new Vector3(lnk.from.x, lnk.from.y, lnk.from.z),
                new Vector3(lnk.to.x, lnk.to.y, lnk.to.z),
            ],
            updatable: true,
        };
        const instance = this.mesh ?? null;
        if (instance) {
            options.instance = instance;
        }
        // create or update the line (depending on whether `instance`
        // already exists)
        this.mesh = MeshBuilder.CreateLines("lines", options);
        return this.mesh;
    }

    static get meshFactory(): NodeMeshFactory {
        return globalMeshFactory;
    }

    static set meshFactory(factory: NodeMeshFactory) {
        globalMeshFactory = factory;
    }
}
