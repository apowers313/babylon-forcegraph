import createGraph, { Graph as NGraph, Node as NGraphNode, Link as NGraphLink } from "ngraph.graph";
import ngraphCreateLayout, { Layout as NGraphLayout } from "ngraph.forcelayout";

import type { GraphEngine, Position, EdgePosition } from "./GraphEngine"
import type { Node } from "./Node";
import type { Edge } from "./Edge";

export class NGraphEngine implements GraphEngine {
    ngraph: NGraph;
    ngraphLayout: NGraphLayout<NGraph>;
    nodeMapping: Map<Node, NGraphNode> = new Map();
    edgeMapping: Map<Edge, NGraphLink> = new Map();

    constructor() {
        this.ngraph = createGraph();
        this.ngraphLayout = ngraphCreateLayout(this.ngraph, { dimensions: 3 });
    }

    async init(): Promise<void> { }

    step() {
        this.ngraphLayout.step();
    }

    addNode(n: Node) {
        const ngraphNode: NGraphNode = this.ngraph.addNode(n.id, { parentNode: n });
        this.nodeMapping.set(n, ngraphNode);
    }

    addEdge(e: Edge) {
        const ngraphEdge = this.ngraph.addLink(e.srcId, e.dstId, { parentEdge: this });
        this.edgeMapping.set(e, ngraphEdge);
    }

    getNodePosition(n: Node): Position {
        const ngraphNode = this._getMappedNode(n);
        return this.ngraphLayout.getNodePosition(ngraphNode.id);
    }

    setNodePosition(n: Node, newPos: Position): void {
        const ngraphNode = this._getMappedNode(n);
        const currPos = this.ngraphLayout.getNodePosition(ngraphNode.id);
        currPos.x = newPos.x;
        currPos.y = newPos.y;
        currPos.z = newPos.z;
    }

    getEdgePosition(e: Edge): EdgePosition {
        const ngraphEdge = this._getMappedEdge(e);
        const pos = this.ngraphLayout.getLinkPosition(ngraphEdge.id);
        return {
            src: {
                x: pos.from.x,
                y: pos.from.y,
                z: pos.from.z,
            },
            dst: {
                x: pos.to.x,
                y: pos.to.y,
                z: pos.to.z,
            }
        }
    }

    get nodes(): Iterable<Node> {
        // ...is this cheating?
        return this.nodeMapping.keys();
    }

    get edges(): Iterable<Edge> {
        return this.edgeMapping.keys();
    }

    pin(n: Node): void {
        const ngraphNode = this._getMappedNode(n);
        this.ngraphLayout.pinNode(ngraphNode, true);
    }

    unpin(n: Node): void {
        const ngraphNode = this._getMappedNode(n);
        this.ngraphLayout.pinNode(ngraphNode, false);
    }

    private _getMappedNode(n: Node): NGraphNode {
        const ngraphNode = this.nodeMapping.get(n);
        if (!ngraphNode) {
            throw new Error("Internal error: Node not found in NGraphEngine");
        }

        return ngraphNode;
    }

    private _getMappedEdge(e: Edge): NGraphLink {
        const ngraphNode = this.edgeMapping.get(e);
        if (!ngraphNode) {
            throw new Error("Internal error: Edge not found in NGraphEngine");
        }

        return ngraphNode;
    }
}