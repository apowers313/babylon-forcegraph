import type { Node } from "./Node";
import type { Edge } from "./Edge";

export interface Position {
    x: number,
    y: number,
    z?: number,
}

export interface EdgePosition {
    src: Position,
    dst: Position,
}

export interface GraphEngine {
    init: () => Promise<void>,
    step: () => void,
    addNode: (n: Node) => void,
    addEdge: (e: Edge) => void,
    get nodes(): Iterable<Node>,
    get edges(): Iterable<Edge>,
    getNodePosition(n: Node): Position,
    getEdgePosition(e: Edge): EdgePosition,
    pin(n: Node): void,
    unpin(n: Node): void,
}

