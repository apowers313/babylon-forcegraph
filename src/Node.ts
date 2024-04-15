import {
    AbstractMesh,
    ActionManager,
    Color3,
    DynamicTexture,
    ExecuteCodeAction,
    Mesh,
    MeshBuilder,
    SixDofDragBehavior,
    StandardMaterial,
} from "@babylonjs/core";
import type {Graph, NodeBeforeUpdateEvent} from "./Graph";
import type {NodeMeshConfig} from "./Config";
import {colorNameToHex} from "./util";

const GOLDEN_RATIO = 1.618;

export type NodeIdType = string | number;

interface NodeOpts {
    metadata?: object;
    nodeMeshConfig?: NodeMeshConfig;
    pinOnDrag?: boolean;
}

export class Node {
    parentGraph: Graph;
    id: NodeIdType;
    metadata: object;
    mesh: AbstractMesh;
    label?: Mesh;
    meshDragBehavior: SixDofDragBehavior;
    dragging = false;
    nodeMeshConfig: NodeMeshConfig;
    pinOnDrag: boolean;

    constructor(graph: Graph, nodeId: NodeIdType, opts: NodeOpts = {}) {
        this.parentGraph = graph;
        this.id = nodeId;
        this.metadata = opts.metadata ?? {};

        // copy nodeMeshOpts
        this.nodeMeshConfig = this.parentGraph.config.nodeMeshOpts;

        // create graph node
        this.parentGraph.graphEngine.addNode(this);

        // create mesh
        this.mesh = this.nodeMeshConfig.nodeMeshFactory(this, this.parentGraph, this.nodeMeshConfig);
        this.mesh.metadata = {parentNode: this};

        // create label
        if (this.nodeMeshConfig.label) {
            this.label = Node.createLabel(this.id.toString(), this, this.parentGraph);
            this.label.parent = this.mesh;
            this.label.position.y += 1;
        }

        // drag behavior
        this.pinOnDrag = opts.pinOnDrag ?? true;
        this.meshDragBehavior = new SixDofDragBehavior();
        this.mesh.addBehavior(this.meshDragBehavior);
        // drag started
        this.meshDragBehavior.onDragStartObservable.add(() => {
            // make sure the graph is running
            this.parentGraph.running = true;

            // don't let the graph engine update the node -- we are controlling it
            this.dragging = true;
        });
        // drag ended
        this.meshDragBehavior.onDragEndObservable.add(() => {
            // make sure the graph is running
            this.parentGraph.running = true;

            // pin after dragging is node
            if (this.pinOnDrag) {
                this.pin();
            }

            // the graph engine can have control of the node again
            this.dragging = false;
        });
        // position changed
        this.meshDragBehavior.onPositionChangedObservable.add((event) => {
            // make sure the graph is running
            this.parentGraph.running = true;

            // update the node position
            this.parentGraph.graphEngine.setNodePosition(this, event.position);
        });

        // TODO: this apparently updates dragging objects faster and more fluidly
        // https://playground.babylonjs.com/#YEZPVT%23840
        // https://forum.babylonjs.com/t/expandable-lines/24681/12

        // click behavior
        this.mesh.actionManager = new ActionManager(this.parentGraph.scene);
        // ActionManager.OnDoublePickTrigger
        // ActionManager.OnRightPickTrigger
        // ActionManager.OnCenterPickTrigger
        // ActionManager.OnLongPressTrigger
        if (this.parentGraph.fetchNodes && this.parentGraph.fetchEdges) {
            const {fetchNodes, fetchEdges} = this.parentGraph;
            this.mesh.actionManager.registerAction(
                new ExecuteCodeAction(
                    {
                        trigger: ActionManager.OnDoublePickTrigger,
                        // trigger: ActionManager.OnLongPressTrigger,
                    },
                    () => {
                        // make sure the graph is running
                        this.parentGraph.running = true;

                        // fetch all edges for current node
                        const edges = fetchEdges(this, this.parentGraph);

                        // create set of unique node ids
                        const nodeIds: Set<NodeIdType> = new Set();
                        edges.forEach((e) => {
                            nodeIds.add(e.source);
                            nodeIds.add(e.target);
                        });
                        nodeIds.delete(this.id);

                        // fetch all nodes from associated edges
                        const nodes = fetchNodes(nodeIds, this.parentGraph);

                        // add all the nodes and edges we collected
                        nodes.forEach((n) => this.parentGraph.addNode(n.id, n.metadata));
                        edges.forEach((e) => this.parentGraph.addEdge(e.source, e.target, e.metadata));

                        // TODO: fetch and add secondary edges
                    },
                ),
            );
        }
    }

    getDeltaPos(): number {
        const pos = this.parentGraph.graphEngine.getNodePosition(this);
        const deltaX = Math.abs(this.mesh.position.x - pos.x);
        const deltaY = Math.abs(this.mesh.position.y - pos.y);
        const deltaZ = Math.abs(this.mesh.position.z - (pos.z ?? 0));

        return Math.sqrt((deltaX * deltaX) + (deltaY * deltaY) + (deltaZ * deltaZ));
    }

    update(): void {
        if (this.dragging) {
            return;
        }

        const evt: NodeBeforeUpdateEvent = {type: "node-update-before", node: this, doUpdate: true};
        this.parentGraph.nodeObservable.notifyObservers(evt);

        if (evt.doUpdate) {
            const pos = this.parentGraph.graphEngine.getNodePosition(this);
            this.mesh.position.x = pos.x;
            this.mesh.position.y = pos.y;
            if (pos.z) {
                this.mesh.position.z = pos.z;
            }
        }

        this.parentGraph.nodeObservable.notifyObservers({type: "node-update-after", node: this});
    }

    pin(): void {
        this.parentGraph.graphEngine.pin(this);
    }

    unpin(): void {
        this.parentGraph.graphEngine.unpin(this);
    }

    static get list(): NodeListType {
        return globalNodeList;
    }

    static create(graph: Graph, nodeId: NodeIdType, opts: NodeOpts = {}): Node {
        // don't create duplicates
        const existingNode = Node.list.get(nodeId);
        if (existingNode) {
            return existingNode;
        }

        const n = new Node(graph, nodeId, opts);
        Node.list.set(nodeId, n);

        return n;
    }

    static defaultNodeMeshFactory(n: Node, g: Graph, o: NodeMeshConfig): AbstractMesh {
        return g.meshCache.get("default-mesh", () => {
            let mesh: Mesh;

            // create mesh shape
            switch (o.shape) {
            case "box":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set/box
                mesh = Node.createBox(n, g, o);
                break;
            case "sphere":
                mesh = Node.createSphere(n, g, o);
                break;
            case "cylinder":
                mesh = Node.createCylinder(n, g, o);
                break;
            case "cone":
                mesh = Node.createCone(n, g, o);
                break;
            case "capsule":
                mesh = Node.createCapsule(n, g, o);
                break;
            case "torus":
                mesh = Node.createTorus(n, g, o);
                break;
            case "torus-knot":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set/torus_knot
                mesh = Node.createTorusKnot(n, g, o);
                break;
            case "tetrahedron":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/polyhedra_by_numbers
                mesh = Node.createPolyhedron(0, n, g, o);
                break;
            case "octahedron":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/polyhedra_by_numbers
                mesh = Node.createPolyhedron(1, n, g, o);
                break;
            case "dodecahedron":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/polyhedra_by_numbers
                mesh = Node.createPolyhedron(2, n, g, o);
                break;
            case "icosahedron":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/polyhedra_by_numbers
                mesh = Node.createPolyhedron(3, n, g, o);
                break;
            case "rhombicuboctahedron":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/polyhedra_by_numbers
                mesh = Node.createPolyhedron(4, n, g, o);
                break;
            case "triangular_prism":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/polyhedra_by_numbers
                mesh = Node.createPolyhedron(5, n, g, o);
                break;
            case "pentagonal_prism":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/polyhedra_by_numbers
                mesh = Node.createPolyhedron(6, n, g, o);
                break;
            case "hexagonal_prism":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/polyhedra_by_numbers
                mesh = Node.createPolyhedron(7, n, g, o);
                break;
            case "square_pyramid":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/polyhedra_by_numbers
                mesh = Node.createPolyhedron(8, n, g, o);
                break;
            case "pentagonal_pyramid":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/polyhedra_by_numbers
                mesh = Node.createPolyhedron(9, n, g, o);
                break;
            case "triangular_dipyramid":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/polyhedra_by_numbers
                mesh = Node.createPolyhedron(10, n, g, o);
                break;
            case "pentagonal_dipyramid":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/polyhedra_by_numbers
                mesh = Node.createPolyhedron(11, n, g, o);
                break;
            case "elongated_square_dypyramid":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/polyhedra_by_numbers
                mesh = Node.createPolyhedron(12, n, g, o);
                break;
            case "elongated_pentagonal_dipyramid":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/polyhedra_by_numbers
                mesh = Node.createPolyhedron(13, n, g, o);
                break;
            case "elongated_pentagonal_cupola":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/polyhedra_by_numbers
                mesh = Node.createPolyhedron(14, n, g, o);
                break;
            case "goldberg":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/goldberg_poly
                mesh = Node.createGoldberg(n, g, o);
                break;
            case "icosphere":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/icosphere
                mesh = Node.createIcoSphere(n, g, o);
                break;
            case "geodesic":
                // https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/geodesic_poly
                mesh = Node.createGeodesic(n, g, o);
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
            const mat = new StandardMaterial("defaultMaterial");
            const nodeColor = o.color;
            mat.diffuseColor = Color3.FromHexString(colorNameToHex(nodeColor));
            mat.wireframe = o.wireframe;
            mat.freeze();

            mesh.visibility = o.opacity;
            mesh.material = mat;

            return mesh;
        });
    }

    static createBox(_n: Node, _g: Graph, o: NodeMeshConfig): Mesh {
        return MeshBuilder.CreateBox("box", {size: o.size});
    }

    static createSphere(_n: Node, _g: Graph, o: NodeMeshConfig): Mesh {
        return MeshBuilder.CreateSphere("sphere", {diameter: o.size});
    }

    static createCylinder(_n: Node, _g: Graph, o: NodeMeshConfig): Mesh {
        return MeshBuilder.CreateCylinder("cylinder", {height: o.size * GOLDEN_RATIO, diameter: o.size});
    }

    static createCone(_n: Node, _g: Graph, o: NodeMeshConfig): Mesh {
        return MeshBuilder.CreateCylinder("cylinder", {height: o.size * GOLDEN_RATIO, diameterTop: 0, diameterBottom: o.size});
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static createCapsule(_n: Node, _g: Graph, _o: NodeMeshConfig): Mesh {
        return MeshBuilder.CreateCapsule("capsule", {});
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static createTorus(_n: Node, _g: Graph, _o: NodeMeshConfig): Mesh {
        return MeshBuilder.CreateTorus("torus", {});
    }

    static createTorusKnot(_n: Node, _g: Graph, o: NodeMeshConfig): Mesh {
        return MeshBuilder.CreateTorusKnot("tk", {radius: o.size * 0.3, tube: o.size * 0.2, radialSegments: 128});
    }

    static createPolyhedron(type: number, _n: Node, _g: Graph, o: NodeMeshConfig): Mesh {
        return MeshBuilder.CreatePolyhedron("polyhedron", {size: o.size, type});
    }

    static createGoldberg(_n: Node, _g: Graph, o: NodeMeshConfig): Mesh {
        return MeshBuilder.CreateGoldberg("goldberg", {size: o.size});
    }

    static createIcoSphere(_n: Node, _g: Graph, o: NodeMeshConfig): Mesh {
        return MeshBuilder.CreateIcoSphere("icosphere", {radius: o.size * 0.75});
    }

    static createGeodesic(_n: Node, _g: Graph, o: NodeMeshConfig): Mesh {
        return MeshBuilder.CreateGeodesic("geodesic", {size: o.size});
    }

    static createLabel(text: string, _n: Node, g: Graph): Mesh {
        // adapted from: https://playground.babylonjs.com/#TMHF80

        // Set font
        const fontSize = 48;
        // var font = "bold " + font_size + "px Arial";
        const font = `${fontSize}px Verdana`;

        // Set height for plane
        const planeHeight = 0.5;

        // Set height for dynamic texture
        const DTHeight = 1.5 * fontSize; // or set as wished

        // Calcultae ratio
        const ratio = planeHeight / DTHeight;

        // Use a temporay dynamic texture to calculate the length of the text on the dynamic texture canvas
        const temp = new DynamicTexture("DynamicTexture", 64, g.scene);
        const tmpctx = temp.getContext();
        tmpctx.font = font;
        const DTWidth = tmpctx.measureText(text).width + 8;

        // Calculate width the plane has to be
        const planeWidth = DTWidth * ratio;

        // Create dynamic texture and write the text
        const dynamicTexture = new DynamicTexture("DynamicTexture", {width: DTWidth, height: DTHeight}, g.scene, false);
        const mat = new StandardMaterial("mat", g.scene);
        mat.specularColor = Color3.Black();
        dynamicTexture.hasAlpha = true;

        // draw rounded rectangle for background
        // borrowed from https://github.com/BabylonJS/Babylon.js/blob/2a7bd37ec899846b7a02c0507b1b9e27e4293180/packages/dev/gui/src/2D/controls/rectangle.ts#L209
        const context = dynamicTexture.getContext();
        context.fillStyle = "white";
        context.beginPath();
        const x = 0;
        const y = 0;
        const radiusList = [20, 20, 20, 20];
        const width = DTWidth;
        const height = DTHeight;
        context.moveTo(x + radiusList[0], y);
        context.lineTo(x + width - radiusList[1], y);
        context.arc(x + width - radiusList[1], y + radiusList[1], radiusList[1], (3 * Math.PI) / 2, Math.PI * 2);
        context.lineTo(x + width, y + height - radiusList[2]);
        context.arc(x + width - radiusList[2], y + height - radiusList[2], radiusList[2], 0, Math.PI / 2);
        context.lineTo(x + radiusList[3], y + height);
        context.arc(x + radiusList[3], y + height - radiusList[3], radiusList[3], Math.PI / 2, Math.PI);
        context.lineTo(x, y + radiusList[0]);
        context.arc(x + radiusList[0], y + radiusList[0], radiusList[0], Math.PI, (3 * Math.PI) / 2);
        context.closePath();
        context.fill();

        // draw label text
        dynamicTexture.drawText(text, null, null, font, "#000000", "transparent", true);
        mat.opacityTexture = dynamicTexture; // TODO: might be able to just use a rounded rectangle as the opacity layer rather than a colored background?
        mat.emissiveTexture = dynamicTexture;
        mat.disableLighting = true;

        // Create plane and set dynamic texture as material
        const plane = MeshBuilder.CreatePlane("plane", {width: planeWidth, height: planeHeight}, g.scene);
        plane.material = mat;

        // make text always face the camera
        plane.billboardMode = 7;

        return plane;
    }
}

type NodeListType = Map<NodeIdType, Node>;
const globalNodeList: NodeListType = new Map();
