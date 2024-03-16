import { Vector3, LinesMesh, MeshBuilder } from "@babylonjs/core";
import type { Graph } from "./Graph";
import type { NodeIdType } from "./Node";
import { Link as NGraphLink } from "ngraph.graph";

export class Edge {
    parentGraph: Graph;
    src: NodeIdType;
    dst: NodeIdType;
    metadata: object;
    ngraphEdge: NGraphLink;
    mesh: LinesMesh;

    constructor(graph: Graph, srcNodeId: NodeIdType, dstNodeId: NodeIdType, metadata: object = {}) {
        this.parentGraph = graph;
        this.src = srcNodeId;
        this.dst = dstNodeId;
        this.metadata = metadata;

        // TODO: make sure both srcNode and dstNode already exist

        // create ngraph link
        this.ngraphEdge = this.parentGraph.ngraph.addLink(srcNodeId, dstNodeId, {});
        this.ngraphEdge.data.parentEdge = this;

        // create mesh
        this.mesh = this.update();
        this.mesh.metadata = {};
        this.mesh.metadata.parentEdge = this;
    }

    update(): LinesMesh {
        let lnk = this.parentGraph.ngraphLayout.getLinkPosition(this.ngraphEdge.id);

        type CreateLineArgs = Parameters<typeof MeshBuilder.CreateLines>;
        const options: CreateLineArgs[1] = {
            points: [
                new Vector3(lnk.from.x, lnk.from.y, lnk.from.z),
                new Vector3(lnk.to.x, lnk.to.y, lnk.to.z),
            ],
            updatable: true,
        };
        const instance = this.mesh ?? null;
        if (instance) {
            options.instance = instance;
        }
        // create or update the line (depending on whether `instance`
        // already exists)
        this.mesh = MeshBuilder.CreateLines("lines", options);
        return this.mesh;
    }
}
