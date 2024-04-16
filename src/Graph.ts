import {
    ArcRotateCamera,
    Camera,
    Engine,
    HemisphericLight,
    Observable,
    PhotoDome,
    Scene,
    Vector3,
} from "@babylonjs/core";
import {EdgeEvent, EventCallbackType, EventType, GraphEvent, NodeEvent} from "./Events";
import {FetchEdges, FetchNodes, GraphConfig, GraphOpts, getConfig, getJsonDataOpts} from "./Config";
import {GraphEngine, GraphEngineNames} from "./engine/GraphEngine";
import {Node, NodeIdType} from "./Node";
import {D3GraphEngine} from "./engine/D3GraphEngine";
import {Edge} from "./Edge";
import {MeshCache} from "./MeshCache";
import {NGraphEngine} from "./engine/NGraphEngine";
import {Stats} from "./Stats";

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
        this.fetchNodes = this.config.behavior.fetchNodes;
        this.fetchEdges = this.config.behavior.fetchEdges;

        // get the element that we are going to use for placing our canvas
        if (typeof (element) === "string") {
            const e = document.getElementById(element);
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
        this.camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 30, new Vector3(0, 0, 0));
        this.camera.attachControl(this.canvas, true);
        new HemisphericLight("light", new Vector3(1, 1, 0));

        // setup PhotoDome Skybox
        if (this.config.style.skybox && this.config.style.skybox.length) {
            new PhotoDome(
                "testdome",
                this.config.style.skybox,
                {
                    resolution: 32,
                    size: 1000,
                },
                this.scene,
            );
        }

        // setup force directed graph engine
        if (this.config.engine.type === "ngraph") {
            this.graphEngine = new NGraphEngine();
        } else if (this.config.engine.type === "d3") {
            this.graphEngine = new D3GraphEngine();
        } else {
            throw new TypeError(`Unknown graph engine type: '${this.graphEngineType}'`);
        }

        // setup stats
        this.stats = new Stats(this);

        for (let i = 0; i < this.config.engine.preSteps; i++) {
            this.graphEngine.step();
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
        for (let i = 0; i < this.config.engine.stepMultiplier; i++) {
            this.graphEngine.step();
        }
        this.stats.graphStep.endMonitoring();

        this.stats.nodeUpdate.beginMonitoring();
        for (const n of this.graphEngine.nodes) {
            n.update();
        }
        this.stats.nodeUpdate.endMonitoring();

        this.stats.edgeUpdate.beginMonitoring();
        for (const e of this.graphEngine.edges) {
            e.update();
        }
        this.stats.edgeUpdate.endMonitoring();

        if (this.graphEngine.isSettled) {
            this.graphObservable.notifyObservers({type: "graph-settled", graph: this});
            this.running = false;
        }
    }

    addNode(nodeId: NodeIdType, metadata: object = {}): Node {
        this.nodeObservable.notifyObservers({type: "node-add-before", nodeId, metadata});
        return Node.create(this, nodeId, {
            nodeMeshConfig: this.config.style.node,
            pinOnDrag: this.pinOnDrag,
            metadata,
        });
    }

    addEdge(srcNodeId: NodeIdType, dstNodeId: NodeIdType, metadata: object = {}): Edge {
        this.edgeObservable.notifyObservers({type: "edge-add-before", srcNodeId, dstNodeId, metadata});
        return Edge.create(this, srcNodeId, dstNodeId, {
            edgeMeshConfig: this.config.style.edge,
            metadata,
        });
    }

    addListener(type: EventType, cb: EventCallbackType): void {
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
        const {nodeListProp, edgeListProp, nodeIdProp, edgeSrcIdProp, edgeDstIdProp} = getJsonDataOpts(opts);

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
        for (const n of data[nodeListProp]) {
            const id = n[nodeIdProp];
            const metadata = n;
            this.addNode(id, metadata);
        }

        // iterate edges adding data
        for (const e of data[edgeListProp]) {
            const srcId = e[edgeSrcIdProp];
            const dstId = e[edgeDstIdProp];
            const metadata = e;
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
