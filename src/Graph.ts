import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Camera, PhotoDome, Observable } from "@babylonjs/core";
import { NodeIdType, Node } from "./Node";
import { Edge } from "./Edge";
import { GraphEngine, GraphEngineNames } from "./engine/GraphEngine";
import { NGraphEngine } from "./engine/NGraphEngine";
import { D3GraphEngine } from "./engine/D3GraphEngine";
import { getConfig, GraphConfig, NodeMeshOpts, EdgeMeshOpts } from "./Config";

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

export type EventType =
    GraphEventType |
    NodeEventType |
    EdgeEventType;

export type GraphEventType = GraphEvent["type"];
export type NodeEventType = NodeEvent["type"];
export type EdgeEventType = EdgeEvent["type"];

// graph events
export interface GraphEvent {
    type: "graph-settled";
    graph: Graph;
}

// node events
export type NodeEvent = NodeGenericEvent | NodeBeforeUpdateEvent | NodeAddEvent;

export interface NodeGenericEvent {
    type: "node-update-after";
    node: Node;
}

export interface NodeBeforeUpdateEvent {
    type: "node-update-before";
    node: Node;
    doUpdate: boolean;
}

export interface NodeAddEvent {
    type: "node-add-before",
    nodeId: NodeIdType,
    metadata: object,
}

// edge events
export type EdgeEvent = EdgeGenericEvent | EdgeBeforeUpdateEvent | EdgeAddEvent;

export interface EdgeGenericEvent {
    type: "edge-update-after";
    edge: Edge;
}

export interface EdgeBeforeUpdateEvent {
    type: "edge-update-before";
    edge: Edge;
    doUpdate: boolean;
}

export interface EdgeAddEvent {
    type: "edge-add-before",
    srcNodeId: NodeIdType,
    dstNodeId: NodeIdType,
    metadata: object,
}

export class Graph {
    config: GraphConfig;
    // babylon
    element: HTMLElement;
    canvas: HTMLCanvasElement;
    engine: Engine;
    scene: Scene;
    camera: Camera;
    skybox?: string;
    // graph engine
    graphEngineType?: GraphEngineNames;
    graphEngine: GraphEngine;
    running = true;
    pinOnDrag?: boolean;
    // graph
    fetchNodes?: FetchNodes;
    fetchEdges?: FetchEdges;
    minDelta = 0.2;
    // observeables
    graphObservable: Observable<GraphEvent> = new Observable();
    nodeObservable: Observable<NodeEvent> = new Observable();
    edgeObservable: Observable<EdgeEvent> = new Observable();

    constructor(element: HTMLCanvasElement | string, opts: GraphOpts) {
        this.config = getConfig(opts);

        // configure graph
        this.fetchNodes = this.config.fetchNodes;
        this.fetchEdges = this.config.fetchEdges;

        // get the element that we are going to use for placing our canvas
        if (typeof (element) == "string") {
            let e = document.getElementById(element);
            if (!e) {
                throw new Error(`getElementById() could not find element '${element}'`);
            }
            this.element = e;
        } else if (element instanceof HTMLElement) {
            this.element = element;
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
        if (this.config.skybox) {
            new PhotoDome(
                "testdome",
                this.config.skybox,
                {
                    resolution: 32,
                    size: 1000
                },
                this.scene
            );
        }

        // setup force directed graph engine
        if (this.config.graphEngineType === "ngraph") {
            this.graphEngine = new NGraphEngine();
        } else if (this.config.graphEngineType === "d3") {
            this.graphEngine = new D3GraphEngine();
        } else {
            throw new TypeError(`Unknown graph engine type: '${this.graphEngineType}'`);
        }
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
        if (!this.running) {
            return;
        }

        this.graphEngine.step();

        let maxDelta = 0;
        for (let n of this.graphEngine.nodes) {
            maxDelta = Math.max(maxDelta, n.getDeltaPos());
            n.update();
        }

        for (let e of this.graphEngine.edges) {
            e.update();
        }

        if (maxDelta < this.minDelta) {
            this.graphObservable.notifyObservers({ type: "graph-settled", graph: this })
            this.running = false;
        }
    }

    addNode(nodeId: NodeIdType, metadata: object = {}): Node {
        this.nodeObservable.notifyObservers({ type: "node-add-before", nodeId, metadata })
        return Node.create(this, nodeId, {
            nodeMeshConfig: this.config.nodeMeshOpts,
            pinOnDrag: this.pinOnDrag,
            metadata,
        });
    }

    addEdge(srcNodeId: NodeIdType, dstNodeId: NodeIdType, metadata: object = {}): Edge {
        this.edgeObservable.notifyObservers({ type: "edge-add-before", srcNodeId, dstNodeId, metadata })
        return Edge.create(this, srcNodeId, dstNodeId, {
            edgeMeshConfig: this.config.edgeMeshOpts,
            metadata,
        });
    }

    addListener(type: EventType, cb: Function): void {
        switch (type) {
            case "graph-settled":
                this.graphObservable.add((e) => {
                    if (e.type === type) {
                        cb(e);
                    }
                });
                break;
            case "node-add-before":
                this.nodeObservable.add((e) => {
                    if (e.type === type) {
                        cb(e);
                    }
                });
                break;
            case "edge-add-before":
                this.edgeObservable.add((e) => {
                    if (e.type === type) {
                        cb(e);
                    }
                });
                break;
            default:
                throw new TypeError(`Unknown listener type in addListener: ${type}`);
        }
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