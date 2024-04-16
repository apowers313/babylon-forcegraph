import type {Edge} from "../Edge";
import type {Node} from "../Node";

export type GraphEngineNames = "ngraph" | "d3";

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
    init(): Promise<void>,
    step(): void,
    get isSettled(): boolean;
    addNode(n: Node): void,
    addEdge(e: Edge): void,
    get nodes(): Iterable<Node>,
    get edges(): Iterable<Edge>,
    getNodePosition(n: Node): Position,
    setNodePosition(n: Node, p: Position): void,
    getEdgePosition(e: Edge): EdgePosition,
    pin(n: Node): void,
    unpin(n: Node): void,
}

