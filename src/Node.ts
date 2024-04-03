import { Color3, Mesh, StandardMaterial, MeshBuilder, SixDofDragBehavior, ActionManager, ExecuteCodeAction, DynamicTexture } from "@babylonjs/core";
// import { AdvancedDynamicTexture } from "@babylonjs/gui";
import type { Graph } from "./Graph";
import { colorNameToHex } from "./util"
import { Node as NGraphNode } from "ngraph.graph";

export type NodeIdType = string | number;

export interface NodeMeshOpts {
    color?: string
    shape?: "box" | "sphere" | "cylinder" | "cone" | "capsule" | "torus" | "torus-knot";
    nodeMeshFactory?: NodeMeshFactory;
}

const defaultNodeMeshOpts: Required<NodeMeshOpts> = {
    color: "gold",
    shape: "sphere",
    nodeMeshFactory: defaultNodeMeshFactory,
};

function defaultNodeMeshFactory(_n: Node, _g: Graph, o: NodeMeshOpts): Mesh {
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
            mesh = MeshBuilder.CreateTorusKnot("tk", { tube: 1, radialSegments: 128 });
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
    let nodeColor = o.color ?? defaultNodeMeshOpts.color;
    mat.diffuseColor = Color3.FromHexString(colorNameToHex(nodeColor));
    mesh.material = mat;
    return mesh;
}

export type NodeMeshFactory = typeof defaultNodeMeshFactory;

interface NodeOpts {
    metadata?: object;
    nodeMeshOpts?: NodeMeshOpts;
    pinOnDrag?: boolean;
}

export class Node {
    parentGraph: Graph;
    id: NodeIdType;
    metadata: object;
    ngraphNode: NGraphNode;
    mesh: Mesh;
    label: Mesh;
    meshDragBehavior: SixDofDragBehavior;
    dragging = false;
    nodeMeshOpts: Required<NodeMeshOpts>;
    pinOnDrag: boolean;

    constructor(graph: Graph, nodeId: NodeIdType, opts: NodeOpts = {}) {
        this.parentGraph = graph;
        this.id = nodeId;
        this.metadata = opts.metadata ?? {};

        // copy nodeMeshOpts
        let tmp = {};
        for (let k of Object.keys(defaultNodeMeshOpts)) {
            // @ts-ignore
            tmp[k] = opts?.nodeMeshOpts?.[k] ?? defaultNodeMeshOpts[k];
        }
        // @ts-ignore
        this.nodeMeshOpts = tmp;

        // create graph node
        this.ngraphNode = this.parentGraph.ngraph.addNode(nodeId, {});
        this.ngraphNode.data.parentNode = this;

        // create mesh
        this.mesh = this.nodeMeshOpts.nodeMeshFactory(this, this.parentGraph, this.nodeMeshOpts);
        this.mesh.metadata = { parentNode: this };

        // create label
        this.label = this.createLabel(this.id.toString());
        // const bb = this.mesh.getBoundingInfo().boundingBox;
        // this.label.position.x = this.mesh.position.x;
        // this.label.position.y = this.mesh.position.y + bb.maximum.y + 0.5;
        // this.label.position.z = this.mesh.position.z;
        this.label.parent = this.mesh;
        this.label.position.y += 1;

        // drag behavior
        this.pinOnDrag = opts.pinOnDrag ?? true;
        this.meshDragBehavior = new SixDofDragBehavior();
        this.mesh.addBehavior(this.meshDragBehavior);
        // drag started
        this.meshDragBehavior.onDragStartObservable.add(() => {
            this.dragging = true;
        });
        // drag ended
        this.meshDragBehavior.onDragEndObservable.add(() => {
            if (this.pinOnDrag) {
                this.pin();
            }
            this.dragging = false;
        });
        // position changed
        this.meshDragBehavior.onPositionChangedObservable.add((event) => {
            let pos = this.parentGraph.ngraphLayout.getNodePosition(this.ngraphNode.id);
            pos.x = event.position.x;
            pos.y = event.position.y;
            if (pos.z) {
                pos.z = event.position.z;
            }
        });

        // click behavior
        this.mesh.actionManager = new ActionManager(this.parentGraph.scene);
        // ActionManager.OnDoublePickTrigger
        // ActionManager.OnRightPickTrigger
        // ActionManager.OnCenterPickTrigger
        // ActionManager.OnLongPressTrigger
        this.mesh.actionManager.registerAction(
            new ExecuteCodeAction(
                {
                    trigger: ActionManager.OnDoublePickTrigger,
                    // trigger: ActionManager.OnLongPressTrigger,
                },
                () => {
                    console.log("loading peers...");
                    this.parentGraph?.loadNodePeers?.(this, this.parentGraph);
                },
            ),
        );
    }

    // createLabel2(text: string): Mesh {
    // }

    createLabel(text: string): Mesh {
        // borrowed from: https://playground.babylonjs.com/#TMHF80

        //Set font
        var font_size = 48;
        // var font = "bold " + font_size + "px Arial";
        var font = font_size + "px Verdana";

        //Set height for plane
        var planeHeight = 0.5;

        //Set height for dynamic texture
        var DTHeight = 1.5 * font_size; //or set as wished

        //Calcultae ratio
        var ratio = planeHeight / DTHeight;

        //Use a temporay dynamic texture to calculate the length of the text on the dynamic texture canvas
        var temp = new DynamicTexture("DynamicTexture", 64, this.parentGraph.scene);
        var tmpctx = temp.getContext();
        tmpctx.font = font;
        var DTWidth = tmpctx.measureText(text).width + 8;

        //Calculate width the plane has to be 
        var planeWidth = DTWidth * ratio;

        //Create dynamic texture and write the text
        var dynamicTexture = new DynamicTexture("DynamicTexture", { width: DTWidth, height: DTHeight }, this.parentGraph.scene, false);
        // dynamicTexture.getContext().clearColor(0, 0, 0, 0)
        var mat = new StandardMaterial("mat", this.parentGraph.scene);
        mat.specularColor = Color3.Black();
        // mat.specularTexture = null;
        dynamicTexture.hasAlpha = true;

        dynamicTexture.clear("transparent");
        const context = dynamicTexture.getContext();

        // https://github.com/BabylonJS/Babylon.js/blob/2a7bd37ec899846b7a02c0507b1b9e27e4293180/packages/dev/gui/src/2D/controls/rectangle.ts#L209

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

        dynamicTexture.drawText(text, null, null, font, "#000000", "transparent", true);
        mat.diffuseTexture = dynamicTexture;
        mat.emissiveTexture = dynamicTexture;
        mat.disableLighting = true;

        //Create plane and set dynamic texture as material
        var plane = MeshBuilder.CreatePlane("plane", { width: planeWidth, height: planeHeight }, this.parentGraph.scene);
        plane.material = mat;

        // make text always face the camera
        plane.billboardMode = 7;

        return plane;
    }

    update(): void {
        if (this.dragging) {
            return;
        }

        let pos = this.parentGraph.ngraphLayout.getNodePosition(this.ngraphNode.id);
        this.mesh.position.x = pos.x;
        this.mesh.position.y = pos.y;
        if (pos.z) {
            this.mesh.position.z = pos.z;
        }

        // const bb = this.mesh.getBoundingInfo().boundingBox;
        // this.label.position.x = this.mesh.position.x;
        // this.label.position.y = this.mesh.position.y + bb.maximum.y + 0.5;
        // this.label.position.z = this.mesh.position.z;
    }

    pin(): void {
        this.parentGraph.ngraphLayout.pinNode(this.ngraphNode, true)
    }

    unpin(): void {
        this.parentGraph.ngraphLayout.pinNode(this.ngraphNode, false)
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
}

type NodeListType = Map<NodeIdType, Node>;
const globalNodeList: NodeListType = new Map();