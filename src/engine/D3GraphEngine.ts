import {
    forceSimulation,
    forceLink,
    forceManyBody,
    forceCenter,
    Node as D3Node,
    Edge as D3Edge,
    InputEdge as D3InputEdge,
} from "d3-force-3d";

import type { NodeIdType } from "../Node";

interface D3InputNode extends Partial<D3Node> {
    id: NodeIdType;
}

import type { GraphEngine, Position, EdgePosition } from "./GraphEngine";
import type { Node } from "../Node";
import type { Edge } from "../Edge";

function isD3Node(n: any): n is D3Node {
    if (typeof n === "object" &&
        typeof n.index === "number" &&
        typeof n.x === "number" &&
        typeof n.y === "number" &&
        typeof n.z === "number" &&
        typeof n.vx === "number" &&
        typeof n.vy === "number" &&
        typeof n.nz === "number") {
        return true;
    }

    return false
}

function isD3Edge(e: any): e is D3Edge {
    if (typeof e === "object" &&
        typeof e.index === "number" &&
        isD3Node(e.source) &&
        isD3Node(e.target)) {
        return true;
    }

    return false
}

export class D3GraphEngine implements GraphEngine {
    d3ForceLayout: ReturnType<typeof forceSimulation>;
    d3AlphaMin = 0;
    d3AlphaTarget = 0;
    d3AlphaDecay = 0.0228;
    d3VelocityDecay = 0.4;
    nodeMapping: Map<Node, D3Node> = new Map();
    edgeMapping: Map<Edge, D3Edge> = new Map();
    newNodeMap: Map<Node, D3InputNode> = new Map();
    newEdgeMap: Map<Edge, D3InputEdge> = new Map();
    reheat = false;

    get graphNeedsRefresh(): boolean {
        return !!this.newNodeMap.size || !!this.newEdgeMap.size;
    }

    constructor() {
        this.d3ForceLayout = forceSimulation()
            .numDimensions(3)
            .alpha(1)
            .force("link", forceLink())
            .force("charge", forceManyBody())
            .force("center", forceCenter())
            .force("dagRadial", null)
            .stop();
        this.d3ForceLayout.force("link").id((d) => (d as D3InputNode).id);
    }

    async init(): Promise<void> { }

    refresh(): void {
        if (this.graphNeedsRefresh || this.reheat) {
            console.log("doing D3 refresh...");

            // update nodes
            const nodeList: Array<D3Node | D3InputNode> = [...this.nodeMapping.values()];
            nodeList.concat([...this.newNodeMap.values()]);
            this.d3ForceLayout
                .alpha(1) // re-heat the simulation
                .stop()

            // copy over new nodes
            for (let entry of this.newNodeMap.entries()) {
                let n = entry[0];
                let d3node = entry[1];
                if (!isD3Node(d3node)) {
                    throw new Error("Internal error: Node is not settled as a complete D3 Node");
                }
                this.nodeMapping.set(n, d3node);
            }
            this.newNodeMap.clear();

            // update edges
            console.log("nodes", this.d3ForceLayout.nodes());
            const linkList: Array<D3Edge | D3InputEdge> = [...this.edgeMapping.values()];
            linkList.concat([...this.newEdgeMap.values()]);
            console.log("link list", linkList);
            console.log("links before", this.d3ForceLayout.force("link").links())
            this.d3ForceLayout
                .force("link")
                .links(linkList);
            console.log("links after", this.d3ForceLayout.force("link").links())
            console.log("link list after", linkList);
            console.log("edgeMapping after", this.edgeMapping);

            // copy over new edges
            for (let entry of this.newEdgeMap.entries()) {
                let e = entry[0];
                let d3edge = entry[1];
                if (!isD3Edge(d3edge)) {
                    throw new Error("Internal error: Edge is not settled as a complete D3 Edge");
                }
                this.edgeMapping.set(e, d3edge);
            }
            this.newEdgeMap.clear();

            // throw new Error("stopping")
            console.log("D3 refresh done");
        }
    }

    step(): void {
        this.refresh();
        this.d3ForceLayout.tick();
    }

    addNode(n: Node): void {
        this.newNodeMap.set(n, { id: n.id });
    }

    addEdge(e: Edge): void {
        this.newEdgeMap.set(e, {
            source: e.srcId,
            target: e.dstId,
        });
    }

    get nodes(): Iterable<Node> {
        return this.nodeMapping.keys();
    }

    get edges(): Iterable<Edge> {
        return this.edgeMapping.keys();
    }

    getNodePosition(n: Node): Position {
        const d3node = this._getMappedNode(n);
        if (d3node.x === undefined || d3node.y === undefined || d3node.z === undefined) {
            throw new Error("Internal error: Node not initialized in D3GraphEngine");
        }

        return {
            x: d3node.x,
            y: d3node.y,
            z: d3node.z,
        };
    }

    setNodePosition(n: Node, newPos: Position): void {
        const d3node = this._getMappedNode(n);
        d3node.x = newPos.x;
        d3node.y = newPos.y;
        d3node.z = newPos.z ?? 0;
        this.reheat = true; // TODO: is this necessary?
    }

    getEdgePosition(e: Edge): EdgePosition {
        let d3edge = this._getMappedEdge(e);

        return {
            src: {
                x: d3edge.source.x,
                y: d3edge.source.y,
                z: d3edge.source.z,
            },
            dst: {
                x: d3edge.target.x,
                y: d3edge.target.y,
                z: d3edge.target.z,
            }
        }
    }

    pin(n: Node): void {
        const d3node = this._getMappedNode(n);

        d3node.fx = d3node.x;
        d3node.fy = d3node.y;
        d3node.fz = d3node.z;
        this.reheat = true; // TODO: is this necessary?
    }

    unpin(n: Node): void {
        const d3node = this._getMappedNode(n);

        d3node.fx = undefined;
        d3node.fy = undefined;
        d3node.fz = undefined;
        this.reheat = true; // TODO: is this necessary?
    }

    private _getMappedNode(n: Node): D3Node {
        this.refresh(); // ensure consistent state

        const d3node = this.nodeMapping.get(n);
        if (!d3node) {
            throw new Error("Internal error: Node not found in D3GraphEngine");
        }

        return d3node;
    }

    private _getMappedEdge(e: Edge): D3Edge {
        this.refresh(); // ensure consistent state

        let d3edge = this.edgeMapping.get(e);
        if (!d3edge) {
            throw new Error("Internal error: Edge not found in D3GraphEngine");
        }

        console.log("getMappedEdge returning:", d3edge);
        return d3edge;
    }
}
