import {
    Edge as D3Edge,
    InputEdge as D3InputEdge,
    Node as D3Node,
    forceCenter,
    forceLink,
    forceManyBody,
    forceSimulation,
} from "d3-force-3d";
import type {EdgePosition, GraphEngine, Position} from "./GraphEngine";
import type {Node, NodeIdType} from "../Node";
import type {Edge} from "../Edge";

interface D3InputNode extends Partial<D3Node> {
    id: NodeIdType;
}

function isD3Node(n: unknown): n is D3Node {
    if (typeof n === "object" &&
        n !== null &&
        "index" in n &&
        typeof n.index === "number" &&
        "x" in n &&
        typeof n.x === "number" &&
        "y" in n &&
        typeof n.y === "number" &&
        "z" in n &&
        typeof n.z === "number" &&
        "vx" in n &&
        typeof n.vx === "number" &&
        "vy" in n &&
        typeof n.vy === "number" &&
        "vz" in n &&
        typeof n.vz === "number") {
        return true;
    }

    return false;
}

function isD3Edge(e: unknown): e is D3Edge {
    if (typeof e === "object" &&
        e !== null &&
        Object.hasOwn(e, "index") &&
        "index" in e &&
        typeof e.index === "number" &&
        "source" in e &&
        isD3Node(e.source) &&
        "target" in e &&
        isD3Node(e.target)) {
        return true;
    }

    return false;
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
            // update nodes
            let nodeList: Array<D3Node | D3InputNode> = [... this.nodeMapping.values()];
            nodeList = nodeList.concat([... this.newNodeMap.values()]);
            this.d3ForceLayout
                .alpha(1) // re-heat the simulation
                .nodes(nodeList)
                .stop();

            // copy over new nodes
            for (const entry of this.newNodeMap.entries()) {
                const n = entry[0];
                const d3node = entry[1];
                if (!isD3Node(d3node)) {
                    throw new Error("Internal error: Node is not settled as a complete D3 Node");
                }

                this.nodeMapping.set(n, d3node);
            }
            this.newNodeMap.clear();

            // update edges
            let linkList: Array<D3Edge | D3InputEdge> = [... this.edgeMapping.values()];
            linkList = linkList.concat([... this.newEdgeMap.values()]);
            this.d3ForceLayout
                .force("link")
                .links(linkList);

            // copy over new edges
            for (const entry of this.newEdgeMap.entries()) {
                const e = entry[0];
                const d3edge = entry[1];
                if (!isD3Edge(d3edge)) {
                    throw new Error("Internal error: Edge is not settled as a complete D3 Edge");
                }

                this.edgeMapping.set(e, d3edge);
            }
            this.newEdgeMap.clear();
        }
    }

    step(): void {
        this.refresh();
        this.d3ForceLayout.tick();
    }

    addNode(n: Node): void {
        this.newNodeMap.set(n, {id: n.id});
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
        const d3edge = this._getMappedEdge(e);

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
            },
        };
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

        const d3edge = this.edgeMapping.get(e);
        if (!d3edge) {
            throw new Error("Internal error: Edge not found in D3GraphEngine");
        }

        return d3edge;
    }
}
