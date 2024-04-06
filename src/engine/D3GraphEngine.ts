import {
    forceSimulation,
    forceLink,
    forceManyBody,
    forceCenter,
    Node as D3Node,
    Edge as D3Edge,
    InitializedEdge as D3EdgeInitialized,
} from "d3-force-3d";

import type { GraphEngine, Position, EdgePosition } from "./GraphEngine";
import type { Node } from "../Node";
import type { Edge } from "../Edge";

export class D3GraphEngine implements GraphEngine {
    d3ForceLayout: ReturnType<typeof forceSimulation>;
    d3AlphaMin = 0;
    d3AlphaTarget = 0;
    d3AlphaDecay = 0.0228;
    d3VelocityDecay = 0.4;
    nodeMapping: Map<Node, D3Node> = new Map();
    edgeMapping: Map<Edge, D3Edge> = new Map();
    graphNeedsRefresh = false;

    constructor() {
        this.d3ForceLayout = forceSimulation()
            .numDimensions(3)
            .alpha(1)
            .force("link", forceLink())
            .force("charge", forceManyBody())
            .force("center", forceCenter())
            .force("dagRadial", null)
            .stop();
    }

    async init(): Promise<void> { }

    refresh(): void {
        if (this.graphNeedsRefresh) {
            console.log("doing D3 refresh...");

            // update nodes
            this.d3ForceLayout
                .nodes([...this.nodeMapping.values()])
                .alpha(1); // re-heat the simulation

            // update edges
            this.d3ForceLayout.force("link")
                .links(this.edgeMapping.values());

            this.graphNeedsRefresh = false;
        }
    }

    step(): void {
        this.refresh();
        this.d3ForceLayout.tick();
    }

    addNode(n: Node): void {
        const newNode = { id: n.id };
        this.nodeMapping.set(n, newNode);
        this.graphNeedsRefresh = true;
    }

    addEdge(e: Edge): void {
        this.edgeMapping.set(e, {
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
        d3node.z = newPos.z;
        this.graphNeedsRefresh = true; // TODO: is this necessary?
    }

    getEdgePosition(e: Edge): EdgePosition {
        let d3edge = this._getMappedEdge(e);

        return {
            src: {
                x: d3edge.source.x!,
                y: d3edge.source.y!,
                z: d3edge.source.z,
            },
            dst: {
                x: d3edge.target.x!,
                y: d3edge.target.y!,
                z: d3edge.target.z,
            }
        }
    }

    pin(n: Node): void {
        const d3node = this._getMappedNode(n);

        d3node.fx = d3node.x;
        d3node.fy = d3node.y;
        d3node.fz = d3node.z;
        this.graphNeedsRefresh = true; // TODO: is this necessary?
    }

    unpin(n: Node): void {
        const d3node = this._getMappedNode(n);

        d3node.fx = undefined;
        d3node.fy = undefined;
        d3node.fz = undefined;
        this.graphNeedsRefresh = true; // TODO: is this necessary?
    }

    private _getMappedNode(n: Node): D3Node {
        const d3node = this.nodeMapping.get(n);
        if (!d3node) {
            throw new Error("Internal error: Node not found in D3GraphEngine");
        }

        return d3node;
    }

    private _getMappedEdge(e: Edge): D3EdgeInitialized {
        let d3edge = this.edgeMapping.get(e);
        if (!d3edge) {
            throw new Error("Internal error: Edge not found in D3GraphEngine");
        }

        if (typeof (d3edge.source) !== "object" ||
            typeof (d3edge.target) !== "object") {
            this.refresh();
            d3edge = this.edgeMapping.get(e);
        }

        return d3edge as D3EdgeInitialized;
    }
}
