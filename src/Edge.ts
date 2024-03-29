import { GreasedLineMesh, CreateGreasedLine } from "@babylonjs/core";
import type { Graph } from "./Graph";
import type { NodeIdType } from "./Node";
import { Link as NGraphLink } from "ngraph.graph";

export interface EdgeMeshOpts {
    edgeMeshFactory: EdgeMeshFactory;
}

const defaultEdgeMeshOpts: Required<EdgeMeshOpts> = {
    edgeMeshFactory: defaultEdgeMeshFactory,
}

function defaultEdgeMeshFactory(e: Edge, g: Graph, o: EdgeMeshOpts): GreasedLineMesh {
    return CreateGreasedLine("edge", { points: [0, 0, 0, 1, 1, 1] });
}

export type EdgeMeshFactory = typeof defaultEdgeMeshFactory;

interface EdgeOpts {
    metadata?: object;
    edgeMeshFactory?: EdgeMeshFactory;
}

export class Edge {
    parentGraph: Graph;
    src: NodeIdType;
    dst: NodeIdType;
    metadata: object;
    ngraphEdge: NGraphLink;
    mesh: GreasedLineMesh;
    edgeMeshOpts: EdgeMeshOpts;

    constructor(graph: Graph, srcNodeId: NodeIdType, dstNodeId: NodeIdType, opts: EdgeOpts = {}) {
        this.parentGraph = graph;
        this.src = srcNodeId;
        this.dst = dstNodeId;
        this.metadata = opts.metadata ?? {};

        // TODO: make sure both srcNode and dstNode already exist

        // copy edgeMeshOpts
        let tmp = {};
        for (let k of Object.keys(defaultEdgeMeshOpts)) {
            // @ts-ignore
            tmp[k] = opts?.edgeMeshOpts?.[k] ?? defaultEdgeMeshOpts[k];
        }
        // @ts-ignore
        this.edgeMeshOpts = tmp;

        // create ngraph link
        this.ngraphEdge = this.parentGraph.ngraph.addLink(srcNodeId, dstNodeId, {});
        this.ngraphEdge.data.parentEdge = this;

        // create mesh
        this.mesh = this.edgeMeshOpts.edgeMeshFactory(this, this.parentGraph, this.edgeMeshOpts);
        this.mesh.metadata = {};
        this.mesh.metadata.parentEdge = this;
    }

    update(): void {
        let lnk = this.parentGraph.ngraphLayout.getLinkPosition(this.ngraphEdge.id);

        this.mesh.setPoints([
            [
                lnk.from.x, lnk.from.y, lnk.from.z,
                lnk.to.x, lnk.to.y, lnk.to.z
            ]
        ]);
    }
}
