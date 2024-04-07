import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Camera, PhotoDome } from "@babylonjs/core";
import { NodeIdType, Node, NodeMeshOpts } from "./Node";
import { Edge, EdgeMeshOpts } from "./Edge";
import { GraphEngine, GraphEngineNames } from "./engine/GraphEngine";
import { NGraphEngine } from "./engine/NGraphEngine";
import { D3GraphEngine } from "./engine/D3GraphEngine";

interface GraphOpts {
    element: string | HTMLElement;
    nodeMeshOpts?: NodeMeshOpts;
    edgeMeshOpts?: EdgeMeshOpts;
    skybox?: string;
    pinOnDrag?: boolean;
    fetchNodes?: FetchNodes;
    fetchEdges?: FetchEdges;
    graphEngineType?: GraphEngineNames;
}

interface NodeObject {
    id: NodeIdType,
    metadata: object,
}
interface EdgeObject {
    source: NodeIdType,
    target: NodeIdType,
    metadata: object,
}
type FetchNodes = (nodeIds: Set<NodeIdType>, g: Graph) => Set<NodeObject>;
type FetchEdges = (node: Node, g: Graph) => Set<EdgeObject>;

export class Graph {
    element: HTMLElement;
    canvas: HTMLCanvasElement;
    engine: Engine;
    scene: Scene;
    camera: Camera;
    graphEngine: GraphEngine;
    nodeMeshOpts: NodeMeshOpts;
    edgeMeshOpts: EdgeMeshOpts;
    skybox?: string;
    pinOnDrag?: boolean;
    fetchNodes?: FetchNodes;
    fetchEdges?: FetchEdges;
    graphEngineType?: GraphEngineNames;

    constructor(opts: GraphOpts) {
        // configure graph
        this.pinOnDrag = opts.pinOnDrag ?? true;
        this.fetchNodes = opts.fetchNodes;
        this.fetchEdges = opts.fetchEdges;
        this.graphEngineType = opts.graphEngineType ?? "ngraph";

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
        if (this.graphEngineType === "ngraph") {
            this.graphEngine = new NGraphEngine();
        } else if (this.graphEngineType === "d3") {
            this.graphEngine = new D3GraphEngine();
        } else {
            throw new TypeError(`Unknown graph engine type: '${this.graphEngineType}'`);
        }

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
            // const ground = MeshBuilder.CreateGround("ground", { width: 8, height: 8 });
            await this.scene.createDefaultXRExperienceAsync({
                // floorMeshes: [ground]
                disableTeleportation: true,
            });
        }

        // Watch for browser/canvas resize events
        window.addEventListener("resize", () => {
            this.engine.resize();
        });
    }

    update() {
        this.graphEngine.step();
        for (let n of this.graphEngine.nodes) {
            n.update();
        }

        for (let e of this.graphEngine.edges) {
            e.update();
        }
    }

    addNode(nodeId: NodeIdType, metadata: object = {}): Node {
        // console.log(`adding node: ${nodeId}`);
        return Node.create(this, nodeId, {
            nodeMeshOpts: this.nodeMeshOpts,
            pinOnDrag: this.pinOnDrag,
            metadata,
        });
    }

    addEdge(srcNodeId: NodeIdType, dstNodeId: NodeIdType, metadata: object = {}): Edge {
        // console.log(`adding edge: ${srcNodeId} -> ${dstNodeId}`);
        return Edge.create(this, srcNodeId, dstNodeId, {
            edgeMeshOpts: this.edgeMeshOpts,
            metadata,
        });
    }

    async loadJsonData(url: string, opts: LoadJsonDataOpts = {}): Promise<void> {
        const nodeListProp = opts.nodeListProp ?? "nodes";
        const edgeListProp = opts.edgeListProp ?? "links";
        const nodeIdProp = opts.nodeIdProp ?? "id";
        const edgeSrcIdProp = opts.edgeSrcIdProp ?? "source";
        const edgeDstIdProp = opts.edgeDstIdProp ?? "target";

        // fetch data from URL
        const response = await fetch(url, opts.fetchOpts);
        const data = await response.json();

        // check data
        if (!Array.isArray(data[nodeListProp])) {
            throw TypeError(`when fetching JSON data: '${nodeListProp}' was not an Array`);
        }

        if (!Array.isArray(data[edgeListProp])) {
            throw TypeError(`when fetching JSON data: '${edgeListProp}' was not an Array`);
        }

        // iterate nodes adding data
        for (let n of data[nodeListProp]) {
            let id = n[nodeIdProp];
            let metadata = n;
            this.addNode(id, metadata);
        }

        // iterate edges adding data
        for (let e of data[edgeListProp]) {
            let srcId = e[edgeSrcIdProp];
            let dstId = e[edgeDstIdProp];
            let metadata = e
            this.addEdge(srcId, dstId, metadata);
        }

        this.graphEngine.refresh();
    }

}

interface LoadJsonDataOpts {
    nodeListProp?: string;
    edgeListProp?: string;
    nodeIdProp?: string;
    edgeSrcIdProp?: string;
    edgeDstIdProp?: string;
    fetchOpts?: Parameters<typeof fetch>[1];
}