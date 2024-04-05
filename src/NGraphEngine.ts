import createGraph, { Graph as NGraph, Node as NGraphNode, Link as NGraphLink } from "ngraph.graph";
import ngraphCreateLayout, { Layout as NGraphLayout } from "ngraph.forcelayout";

import type { GraphEngine, Position, EdgePosition } from "./GraphEngine"
import type { Node } from "./Node";
import type { Edge } from "./Edge";

const nodeMapping: Map<Node, NGraphNode> = new Map();
const edgeMapping: Map<Edge, NGraphLink> = new Map();

export class NGraphEngine implements GraphEngine {
    ngraph: NGraph;
    ngraphLayout: NGraphLayout<NGraph>;

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
        nodeMapping.set(n, ngraphNode);
    }

    addEdge(e: Edge) {
        const ngraphEdge = this.ngraph.addLink(e.srcId, e.dstId, { parentEdge: this });
        edgeMapping.set(e, ngraphEdge);
    }

    getNodePosition(n: Node): Position {
        const ngraphNode = nodeMapping.get(n);
        if (!ngraphNode) {
            throw new Error("Internal error: Node not found in NGraphEngine");
        }
        return this.ngraphLayout.getNodePosition(ngraphNode.id);
    }

    getEdgePosition(e: Edge): EdgePosition {
        const ngraphEdge = edgeMapping.get(e);
        if (!ngraphEdge) {
            throw new Error("Internal error: Edge not found in NGraphEngine");
        }
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
        // const ngraph = this.ngraph;
        // function* nodeGenerator() {
        //     ngraph.forEachNode((n) => yield n.data.parentNode);
        // }

        // return nodeGenerator();


        // const ret: Array<Node> = [];
        // this.ngraph.forEachNode((n) => {
        //     ret.push(n.data.parentNode);
        // });

        return nodeMapping.keys();
    }

    get edges(): Iterable<Edge> {
        // const ngraph = this.ngraph;
        // function* edgeGenerator() {
        //     ngraph.forEachLink((e) => yield e.data.parentNode);
        // }

        // return edgeGenerator();


        // const ret: Array<Edge> = [];
        // this.ngraph.forEachLink((e) => {
        //     ret.push(e.data.parentEdge);
        // });
        // return ret;

        return edgeMapping.keys();
    }

    pin(n: Node): void {
        const ngraphNode = nodeMapping.get(n);
        if (!ngraphNode) {
            throw new Error("Internal error: Node not found in NGraphEngine");
        }
        this.ngraphLayout.pinNode(ngraphNode, true);
    }

    unpin(n: Node): void {
        const ngraphNode = nodeMapping.get(n);
        if (!ngraphNode) {
            throw new Error("Internal error: Node not found in NGraphEngine");
        }
        this.ngraphLayout.pinNode(ngraphNode, false);
    }
}