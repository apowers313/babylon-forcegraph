import * as babylon from "@babylonjs/core";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder, Camera, PhotoDome } from "@babylonjs/core";
import createGraph, { Graph as NGraph } from "ngraph.graph";
import ngraphCreateLayout, { Layout as NGraphLayout } from "ngraph.forcelayout";
import { NodeIdType, Node, NodeMeshOpts } from "./Node";
import { Edge, EdgeMeshOpts } from "./Edge";

interface GraphOpts {
    element: string | HTMLElement;
    nodeMeshOpts?: NodeMeshOpts;
    edgeMeshOpts?: EdgeMeshOpts;
    skybox?: string;
}

export class Graph {
    BABYLON: babylon;
    element: HTMLElement;
    canvas: HTMLCanvasElement;
    engine: Engine;
    scene: Scene;
    camera: Camera;
    ngraph: NGraph;
    ngraphLayout: NGraphLayout<NGraph>;
    nodeMeshOpts: NodeMeshOpts;
    edgeMeshOpts: EdgeMeshOpts;
    skybox?: string;

    constructor(opts: GraphOpts) {
        this.BABYLON = babylon;

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

        // setup PhotoDome Skybox
        if (opts.skybox) {
            new PhotoDome(
                "testdome",
                opts.skybox,
                {
                    resolution: 32,
                    size: 1000
                },
                this.scene
            );
        }

        // setup force directed graph engine
        this.ngraph = createGraph();
        this.ngraphLayout = ngraphCreateLayout(this.ngraph, { dimensions: 3 });

        // configure styling
        this.nodeMeshOpts = opts.nodeMeshOpts ?? {};
        this.edgeMeshOpts = opts.edgeMeshOpts ?? {};
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
        return new Node(this, nodeId, {
            nodeMeshOpts: this.nodeMeshOpts,
            metadata,
        });
    }

    addEdge(srcNodeId: NodeIdType, dstNodeId: NodeIdType, metadata: object = {}): Edge {
        return new Edge(this, srcNodeId, dstNodeId, metadata);
    }
}
