import {
    Engine,
    Scene,
    ArcRotateCamera,
    Vector3,
    HemisphericLight,
    Camera,
    PhotoDome,
    Observable,
    Mesh,
    InstancedMesh,
    SceneInstrumentation,
    EngineInstrumentation,
    PerfCounter,
} from "@babylonjs/core";

import { NodeIdType, Node } from "./Node";
import { Edge } from "./Edge";
import { GraphEngine, GraphEngineNames } from "./engine/GraphEngine";
import { NGraphEngine } from "./engine/NGraphEngine";
import { D3GraphEngine } from "./engine/D3GraphEngine";
import { getConfig, GraphConfig, NodeMeshOpts, EdgeMeshOpts } from "./Config";
import { sigmoid } from "./util";

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
    stats: Stats;
    // babylon
    element: HTMLElement;
    canvas: HTMLCanvasElement;
    engine: Engine;
    scene: Scene;
    camera: Camera;
    skybox?: string;
    meshCache: MeshCache;
    // graph engine
    graphEngineType?: GraphEngineNames;
    graphEngine: GraphEngine;
    running = true;
    pinOnDrag?: boolean;
    // graph
    fetchNodes?: FetchNodes;
    fetchEdges?: FetchEdges;
    // observeables
    graphObservable: Observable<GraphEvent> = new Observable();
    nodeObservable: Observable<NodeEvent> = new Observable();
    edgeObservable: Observable<EdgeEvent> = new Observable();

    constructor(element: HTMLCanvasElement | string, opts: GraphOpts) {
        this.config = getConfig(opts);
        this.meshCache = new MeshCache();

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

        // setup stats
        this.stats = new Stats(this);

        if (this.config.preSteps) {
            for (let i = 0; i < this.config.preSteps; i++) {
                this.graphEngine.step();
            }
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

        this.stats.step();
        this.stats.graphStep.beginMonitoring();
        for (let i = 0; i < this.config.stepMultiplier; i++) {
            this.graphEngine.step();
        }
        this.stats.graphStep.endMonitoring();

        let maxDelta = 0;
        this.stats.nodeUpdate.beginMonitoring();
        for (let n of this.graphEngine.nodes) {
            maxDelta = Math.max(maxDelta, n.getDeltaPos());
            n.update();
        }
        this.stats.nodeUpdate.endMonitoring();

        this.stats.edgeUpdate.beginMonitoring();
        for (let e of this.graphEngine.edges) {
            e.update();
        }
        this.stats.edgeUpdate.endMonitoring();

        if (maxDelta < (this.minDelta * this.config.stepMultiplier)) {
            console.log("Graph Settled");
            console.log(this.stats.toString());
            this.graphObservable.notifyObservers({ type: "graph-settled", graph: this })
            this.running = false;
        }
    }

    get minDelta(): number {
        const sz = Node.list.size + Edge.list.size;
        return (sigmoid(sz, 100) - 0.5) * 0.5;
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
        this.stats.loadTime.beginMonitoring();
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
        this.stats.loadTime.endMonitoring();
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

/*** Mesh Cache ***/
const meshCacheMap: Map<string, Mesh> = new Map();

type MeshCreatorFn = () => Mesh;

export class MeshCache {
    hits = 0;
    misses = 0;

    get(name: string, creator: MeshCreatorFn): InstancedMesh {
        let mesh = meshCacheMap.get(name);
        if (mesh) {
            this.hits++;
            return mesh.createInstance(name);
        }

        this.misses++;
        mesh = creator();
        mesh.isVisible = false;
        meshCacheMap.set(name, mesh);
        return mesh.createInstance(name);
    }

    reset(): void {
        this.hits = 0;
        this.misses = 0;
    }
}

/*** Statistics ***/
class Stats {
    graph: Graph;
    sceneInstrumentation: SceneInstrumentation;
    babylonInstrumentation: EngineInstrumentation;
    graphStep: PerfCounter;
    nodeUpdate: PerfCounter;
    edgeUpdate: PerfCounter;
    loadTime: PerfCounter;
    totalUpdates = 0;

    constructor(g: Graph) {
        this.graph = g;

        this.sceneInstrumentation = new SceneInstrumentation(g.scene);
        this.sceneInstrumentation.captureFrameTime = true;
        this.sceneInstrumentation.captureRenderTime = true;
        this.sceneInstrumentation.captureInterFrameTime = true;
        this.sceneInstrumentation.captureCameraRenderTime = true;
        this.sceneInstrumentation.captureActiveMeshesEvaluationTime = true;
        this.sceneInstrumentation.captureRenderTargetsRenderTime = true;

        this.babylonInstrumentation = new EngineInstrumentation(g.engine);
        this.babylonInstrumentation.captureGPUFrameTime = true;
        this.babylonInstrumentation.captureShaderCompilationTime = true;

        this.graphStep = new PerfCounter();
        this.nodeUpdate = new PerfCounter();
        this.edgeUpdate = new PerfCounter();
        this.loadTime = new PerfCounter();
    }

    toString(): string {
        let statsStr = "";
        function appendStat(name: string, stat: string | number, units: string = "") {
            statsStr += `${name}: ${stat}${units}\n`;
        }

        function statsSection(name: string) {
            statsStr += `\n${name}\n`;
            for (let i = 0; i < name.length; i++) {
                statsStr += "-";
            }
            statsStr += "\n";
        }

        function appendPerf(name: string, stat: PerfCounter) {
            statsStr += `${name} (min/avg/last sec/max [total]): ${stat.min.toFixed(2)} / ${stat.average.toFixed(2)} / ${stat.lastSecAverage.toFixed(2)} / ${stat.max.toFixed(2)} [${stat.max.toFixed(2)}] ms\n`;
        }


        statsSection("Graph");
        appendStat("Num Nodes", this.numNodes);
        appendStat("Num Edges", this.numEdges);
        appendStat("Total Updates", this.totalUpdates);

        statsSection("Graph Engine Performance");
        appendPerf("JSON Load Time", this.loadTime);
        appendPerf("Graph Physics Engine Time", this.graphStep);
        appendPerf("Node Update Time", this.nodeUpdate);
        appendPerf("Edge Update Time", this.edgeUpdate);

        statsSection("BabylonJS Performance");
        appendPerf("GPU Time", this.babylonInstrumentation.gpuFrameTimeCounter);
        appendPerf("Shader Time", this.babylonInstrumentation.shaderCompilationTimeCounter);
        appendPerf("Mesh Evaluation Time", this.sceneInstrumentation.activeMeshesEvaluationTimeCounter);
        appendPerf("Render Targets Time", this.sceneInstrumentation.renderTargetsRenderTimeCounter);
        appendPerf("Draw Calls Time", this.sceneInstrumentation.drawCallsCounter);
        appendPerf("Frame Time", this.sceneInstrumentation.frameTimeCounter);
        appendPerf("Render Time", this.sceneInstrumentation.renderTimeCounter);
        appendPerf("Time Between Frames", this.sceneInstrumentation.interFrameTimeCounter);
        appendPerf("Camera Render Time", this.sceneInstrumentation.cameraRenderTimeCounter);

        statsSection("Mesh Cache");
        appendStat("Mesh Cache Hits", this.meshCacheHits);
        appendStat("Mesh Cache Misses", this.meshCacheMisses);

        return statsStr;
    }

    step() {
        this.totalUpdates++;
    }

    reset() {
        this.totalUpdates = 0;
    }

    get numNodes(): number {
        return Node.list.size;
    }

    get numEdges(): number {
        return Edge.list.size;
    }

    get meshCacheHits(): number {
        return this.graph.meshCache.hits;
    }

    get meshCacheMisses(): number {
        return this.graph.meshCache.misses;
    }
}