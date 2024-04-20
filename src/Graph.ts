import {
    ArcRotateCamera,
    Camera,
    Engine,
    HemisphericLight,
    Observable,
    PhotoDome,
    Scene,
    Vector3,
    WebXREnterExitUIButton,
} from "@babylonjs/core";
import {EdgeEvent, EventCallbackType, EventType, GraphEvent, NodeEvent} from "./Events";
import {FetchEdges, FetchNodes, GraphConfig, GraphOpts, LoadJsonDataOpts, getConfig, getJsonDataOpts} from "./Config";
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
        this.camera = new ArcRotateCamera(
            "camera",
            -Math.PI / 2,
            Math.PI / 2.5,
            this.config.style.startingCameraDistance,
            new Vector3(0, 0, 0),
        );
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        delete (this.camera as any).lowerBetaLimit;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        delete (this.camera as any).upperBetaLimit;
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

        // add enter vr / ar buttons
        addCss();
        const overlay = addButtonOverlay(this);
        const buttonsArray = [
            mkButton("VR", "immersive-vr", "unbounded"),
            mkButton("AR", "immersive-ar", "unbounded"),
        ];

        for (const btn of buttonsArray) {
            console.log("adding btn");
            overlay.appendChild(btn.element);
        }

        // WebXR setup
        if (navigator.xr) {
            await this.scene.createDefaultXRExperienceAsync({
                // uiOptions: {
                //     customButtons: buttonsArray,
                // },
                disableTeleportation: true,
                // optionalFeatures: true,
                // outputCanvasOptions: {
                //     canvasOptions: {
                //         framebufferScaleFactor: 0.5,
                //     },
                // },
            });
        } else {
            // create html button
            const noXrBtn = document.createElement("button");
            noXrBtn.classList.add("webxr-button");
            noXrBtn.classList.add("webxr-not-available");
            noXrBtn.innerHTML = "VR / AR NOT AVAILABLE";
            overlay.appendChild(noXrBtn);
            setTimeout(() => {
                noXrBtn.remove();
            }, 5000);
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

        // update graph engine
        this.stats.step();
        this.stats.graphStep.beginMonitoring();
        for (let i = 0; i < this.config.engine.stepMultiplier; i++) {
            this.graphEngine.step();
        }
        this.stats.graphStep.endMonitoring();

        // update nodes
        this.stats.nodeUpdate.beginMonitoring();
        for (const n of this.graphEngine.nodes) {
            n.update();
        }
        this.stats.nodeUpdate.endMonitoring();

        // update edges
        this.stats.edgeUpdate.beginMonitoring();
        Edge.updateRays(this);
        for (const e of this.graphEngine.edges) {
            e.update();
        }
        this.stats.edgeUpdate.endMonitoring();

        // check to see if we are done
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

function mkButton(text: string, sessionMode?: XRSessionMode, referenceSpaceType?: XRReferenceSpaceType): WebXREnterExitUIButton {
    sessionMode = sessionMode || "immersive-vr";
    referenceSpaceType = referenceSpaceType || "local-floor";

    // create html button
    const hmdBtn = document.createElement("button");
    // hmdBtn.className = "babylonVRicon";
    hmdBtn.classList.add("webxr-button");
    hmdBtn.classList.add("webxr-available");
    // hmdBtn.title = `${sessionMode} - ${referenceSpaceType}`;
    hmdBtn.innerHTML = text;

    // create babylon button
    const ret = new WebXREnterExitUIButton(hmdBtn, sessionMode, referenceSpaceType);
    ret.update = function(activeButton: WebXREnterExitUIButton) {
        this.element.style.display = activeButton === null || activeButton === this ? "" : "none";
        // TODO: update for new CSS classes
        hmdBtn.className = `babylonVRicon${activeButton === this ? " vrdisplaypresenting" : ""}`;
    };

    return ret;
}

function addCss() {
    const css = `
    .webxr-button {
        font-family: 'Verdana', sans-serif;
        font-size: 1em;
        font-weight: bold;
        color: white;
        border: 2px solid white;
        padding: 4px 16px 4px 16px;
        margin-left: 10px;
        border-radius: 8px;
    }

    .webxr-available {
        background: black;
        box-shadow:0 0 0 0px white, 0 0 0 2px black;
    }

    .webxr-not-available {
        background: grey;
        box-shadow:0 0 0 0px white, 0 0 0 2px grey;
    }

    .webxr-available:hover {
        transform: scale(1.05);
    } 

    .webxr-available:active {
        background-color: rgba(51,51,51,1);
    } 
    
    .webxr-available:focus {
        background-color: rgba(51,51,51,1);
    }`;
    // const url =
    // typeof SVGSVGElement === "undefined" ?
    //     "https://cdn.babylonjs.com/Assets/vrButton.png" :
    //     "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%222048%22%20height%3D%221152%22%20viewBox%3D%220%200%202048%201152%22%20version%3D%221.1%22%3E%3Cpath%20transform%3D%22rotate%28180%201024%2C576.0000000000001%29%22%20d%3D%22m1109%2C896q17%2C0%2030%2C-12t13%2C-30t-12.5%2C-30.5t-30.5%2C-12.5l-170%2C0q-18%2C0%20-30.5%2C12.5t-12.5%2C30.5t13%2C30t30%2C12l170%2C0zm-85%2C256q59%2C0%20132.5%2C-1.5t154.5%2C-5.5t164.5%2C-11.5t163%2C-20t150%2C-30t124.5%2C-41.5q23%2C-11%2042%2C-24t38%2C-30q27%2C-25%2041%2C-61.5t14%2C-72.5l0%2C-257q0%2C-123%20-47%2C-232t-128%2C-190t-190%2C-128t-232%2C-47l-81%2C0q-37%2C0%20-68.5%2C14t-60.5%2C34.5t-55.5%2C45t-53%2C45t-53%2C34.5t-55.5%2C14t-55.5%2C-14t-53%2C-34.5t-53%2C-45t-55.5%2C-45t-60.5%2C-34.5t-68.5%2C-14l-81%2C0q-123%2C0%20-232%2C47t-190%2C128t-128%2C190t-47%2C232l0%2C257q0%2C68%2038%2C115t97%2C73q54%2C24%20124.5%2C41.5t150%2C30t163%2C20t164.5%2C11.5t154.5%2C5.5t132.5%2C1.5zm939%2C-298q0%2C39%20-24.5%2C67t-58.5%2C42q-54%2C23%20-122%2C39.5t-143.5%2C28t-155.5%2C19t-157%2C11t-148.5%2C5t-129.5%2C1.5q-59%2C0%20-130%2C-1.5t-148%2C-5t-157%2C-11t-155.5%2C-19t-143.5%2C-28t-122%2C-39.5q-34%2C-14%20-58.5%2C-42t-24.5%2C-67l0%2C-257q0%2C-106%2040.5%2C-199t110%2C-162.5t162.5%2C-109.5t199%2C-40l81%2C0q27%2C0%2052%2C14t50%2C34.5t51%2C44.5t55.5%2C44.5t63.5%2C34.5t74%2C14t74%2C-14t63.5%2C-34.5t55.5%2C-44.5t51%2C-44.5t50%2C-34.5t52%2C-14l14%2C0q37%2C0%2070%2C0.5t64.5%2C4.5t63.5%2C12t68%2C23q71%2C30%20128.5%2C78.5t98.5%2C110t63.5%2C133.5t22.5%2C149l0%2C257z%22%20fill%3D%22white%22%20/%3E%3C/svg%3E%0A";
    // let css =
    // `.babylonVRicon { color: #868686; border-color: #868686; border-style: solid; margin-left: 10px; height: 50px; width: 80px; background-color: rgba(51,51,51,0.7); background-image: url(${
    //     url
    // }); background-size: 80%; background-repeat:no-repeat; background-position: center; border: none; outline: none; transition: transform 0.125s ease-out } .babylonVRicon:hover { transform: scale(1.05) } .babylonVRicon:active {background-color: rgba(51,51,51,1) } .babylonVRicon:focus {background-color: rgba(51,51,51,1) }`;
    // css += ".babylonVRicon.vrdisplaypresenting { background-image: none;} .vrdisplaypresenting::after { content: \"EXIT\"} .xr-error::after { content: \"ERROR\"}";
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    document.getElementsByTagName("head")[0].appendChild(style);
}

function addButtonOverlay(g: Graph): HTMLElement {
    const overlay = document.createElement("div");
    overlay.style.cssText = "z-index:11;position: absolute; right: 20px;bottom: 50px;";
    overlay.classList.add("xr-button-overlay");
    const renderCanvas = g.scene.getEngine().getInputElement();
    if (renderCanvas && renderCanvas.parentNode) {
        renderCanvas.parentNode.appendChild(overlay);
    }

    return overlay;
}
