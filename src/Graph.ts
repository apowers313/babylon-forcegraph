import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, LinesMesh, MeshBuilder, Camera } from "@babylonjs/core";
// const createGraph = require('ngraph.graph');
import createGraph, { Graph as NGraph, Node as NGraphNode, Link as NGraphLink } from "ngraph.graph";
import ngraphCreateLayout, { Layout as NGraphLayout } from "ngraph.forcelayout";

interface GraphOpts {
    canvasElementId?: string;
    canvasElement?: HTMLCanvasElement;
}

export class Graph {
    canvas: HTMLCanvasElement;
    engine: Engine;
    scene: Scene;
    camera: Camera;
    ngraph: NGraph;
    ngraphLayout: NGraphLayout<NGraph>;

    constructor(opts: GraphOpts = {}) {
        // get a canvas element for rendering
        if (!opts.canvasElement && !opts.canvasElementId) {
            throw new TypeError("Graph constructor requires either `canvasElement` or `canvasElementId`");
        }

        if (opts.canvasElementId) {
            let c = document.getElementById(opts.canvasElementId);
            if (!(c instanceof HTMLCanvasElement)) {
                throw new TypeError(`Specified DOM element '${opts.canvasElementId}' is not a HTMLCanvasElement`);
            }
            this.canvas = c;
        } else {
            this.canvas = opts.canvasElement as HTMLCanvasElement;
        }

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

    async run() {
        const b1 = MeshBuilder.CreateBox("box", {});
        b1.position.x += 2;

        const b2 = MeshBuilder.CreateBox("box", {});
        b2.position.x -= 2;

        const options = {
            points: [
                new Vector3(-2, 0, 0),
                new Vector3(2, 0, 0),
            ],
            updatable: true,
        };
        MeshBuilder.CreateLines("lines", options);

        // Register a render loop to repeatedly render the scene
        this.engine.runRenderLoop(() => {
            this.update();
            this.scene.render();
        });

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

export class Node {
    parentGraph: Graph;
    id: NodeIdType;
    metadata: object;
    ngraphNode: NGraphNode;
    mesh: Mesh;

    constructor(graph: Graph, nodeId: NodeIdType, metadata: object = {}) {
        this.parentGraph = graph;
        this.id = nodeId;
        this.metadata = metadata;

        // create graph node
        this.ngraphNode = this.parentGraph.ngraph.addNode(nodeId, {});
        this.ngraphNode.data.parentNode = this;

        // create mesh
        this.mesh = MeshBuilder.CreateBox("box", {});
        this.mesh.metadata = {};
        this.mesh.metadata.parentNode = this;
    }

    update(): void {
        let n = this.parentGraph.ngraphLayout.getNodePosition(this.ngraphNode.id);
        this.mesh.position.x = n.x;
        this.mesh.position.y = n.y;
        if (n.z) {
            this.mesh.position.z = n.z;
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
}