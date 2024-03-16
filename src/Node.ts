import { Color3, Mesh, StandardMaterial, MeshBuilder, SixDofDragBehavior } from "@babylonjs/core";
import type { Graph } from "./Graph";
import { colorNameToHex } from "./util"
import { Node as NGraphNode } from "ngraph.graph";

export type NodeIdType = string | number;

export interface NodeMeshOpts {
    color?: string
    shape?: "box" | "sphere" | "cylinder" | "cone" | "capsule" | "torus" | "torus-knot";
    nodeMeshFactory?: NodeMeshFactory;
}

export const defaultNodeMeshOpts: Required<NodeMeshOpts> = {
    color: "gold",
    shape: "sphere",
    nodeMeshFactory: defaultNodeMeshFactory,
};

function defaultNodeMeshFactory(n: Node, g: Graph, o: NodeMeshOpts): Mesh {
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
}

export class Node {
    parentGraph: Graph;
    id: NodeIdType;
    metadata: object;
    ngraphNode: NGraphNode;
    mesh: Mesh;
    meshDragBehavior: SixDofDragBehavior;
    dragging = false;
    nodeMeshOpts: Required<NodeMeshOpts>;

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
