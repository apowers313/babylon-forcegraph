import { GreasedLineBaseMesh, CreateGreasedLine, Color3 } from "@babylonjs/core";
import type { Graph } from "./Graph";
import { Node, NodeIdType } from "./Node";
import { colorNameToHex } from "./util"

export interface EdgeMeshOpts {
    color?: string;
    edgeMeshFactory?: EdgeMeshFactory;
}

const defaultEdgeMeshOpts: Required<EdgeMeshOpts> = {
    color: "white",
    edgeMeshFactory: defaultEdgeMeshFactory,
}

function defaultEdgeMeshFactory(_e: Edge, _g: Graph, o: EdgeMeshOpts): GreasedLineBaseMesh {
    let edgeColor = o.color ?? defaultEdgeMeshOpts.color;

    return CreateGreasedLine("edge",
        { points: [0, 0, 0, 1, 1, 1] },
        { color: Color3.FromHexString(colorNameToHex(edgeColor)) },
    );
}

export type EdgeMeshFactory = typeof defaultEdgeMeshFactory;

interface EdgeOpts {
    metadata?: object;
    edgeMeshOpts?: EdgeMeshOpts;
}

export class Edge {
    parentGraph: Graph;
    srcId: NodeIdType;
    dstId: NodeIdType;
    metadata: object;
    mesh: GreasedLineBaseMesh;
    edgeMeshOpts: Required<EdgeMeshOpts>;

    constructor(graph: Graph, srcNodeId: NodeIdType, dstNodeId: NodeIdType, opts: EdgeOpts = {}) {
        this.parentGraph = graph;
        this.srcId = srcNodeId;
        this.dstId = dstNodeId;
        this.metadata = opts.metadata ?? {};

        // make sure both srcNode and dstNode already exist
        if (!Node.list.has(srcNodeId)) {
            throw new Error(`Attempting to create edge '${srcNodeId}->${dstNodeId}', Node '${srcNodeId}' hasn't been created yet.`);
        }
        if (!Node.list.has(dstNodeId)) {
            throw new Error(`Attempting to create edge '${srcNodeId}->${dstNodeId}', Node '${dstNodeId}' hasn't been created yet.`);
        }

        // copy edgeMeshOpts
        let tmp = {};
        for (let k of Object.keys(defaultEdgeMeshOpts)) {
            // @ts-ignore
            tmp[k] = opts?.edgeMeshOpts?.[k] ?? defaultEdgeMeshOpts[k];
        }
        // @ts-ignore
        this.edgeMeshOpts = tmp;

        // create ngraph link
        this.parentGraph.graphEngine.addEdge(this);

        // create mesh
        this.mesh = this.edgeMeshOpts.edgeMeshFactory(this, this.parentGraph, this.edgeMeshOpts);
        this.mesh.metadata = {};
        this.mesh.metadata.parentEdge = this;
    }

    update(): void {
        this.parentGraph.graphEngine.refresh();
        let lnk = this.parentGraph.graphEngine.getEdgePosition(this);
        console.log("lnk", lnk);

        this.mesh.setPoints([
            [
                lnk.src.x, lnk.src.y, lnk.src.z ?? 0,
                lnk.dst.x, lnk.dst.y, lnk.dst.z ?? 0,
            ]
        ]);
    }

    static get list(): EdgeMap {
        return globalEdgeList;
    }

    static create(graph: Graph, srcNodeId: NodeIdType, dstNodeId: NodeIdType, opts: EdgeOpts = {}) {
        const existingEdge = Edge.list.get(srcNodeId, dstNodeId);
        if (existingEdge) {
            return existingEdge;
        }

        const e = new Edge(graph, srcNodeId, dstNodeId, opts);
        Edge.list.set(srcNodeId, dstNodeId, e);

        return e;
    }
}

class EdgeMap {
    map: Map<NodeIdType, Map<NodeIdType, Edge>> = new Map();

    has(srcId: NodeIdType, dstId: NodeIdType): boolean {
        const dstMap = this.map.get(srcId);
        if (!dstMap) {
            return false;
        }

        return dstMap.has(dstId);
    }

    set(srcId: NodeIdType, dstId: NodeIdType, e: Edge): void {
        let dstMap = this.map.get(srcId);
        if (!dstMap) {
            dstMap = new Map();
            this.map.set(srcId, dstMap);
        }

        if (dstMap.has(dstId)) {
            throw new Error("Attempting to create duplicate Edge");
        }

        dstMap.set(dstId, e);
    }

    get(srcId: NodeIdType, dstId: NodeIdType): Edge | undefined {
        let dstMap = this.map.get(srcId);
        if (!dstMap) {
            return undefined;
        }

        return dstMap.get(dstId);
    }
}

const globalEdgeList = new EdgeMap();