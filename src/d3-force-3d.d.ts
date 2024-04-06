declare module "d3-force-3d" {
    type NodeId = number | string;
    interface Node {
        id: NodeId;
        index?: number;
        x?: number;
        y?: number;
        z?: number;
        vx?: number;
        vy?: number;
        vz?: number;
        fx?: number;
        fy?: number;
        fz?: number;
    }
    type InitializedNode = Required<Node>;
    type Nodes = Array<Node>;

    interface Edge {
        source: Node | NodeId;
        target: Node | NodeId;
        index?: number;
    }
    interface InitializedEdge {
        source: Node;
        target: Node;
        index: number;
    }
    type Edges = Array<Edge>

    export interface Force {
        (alpha?: number): void,
        initialize(nodes: Nodes, ...args: unknown): unknown,
        links(x: unknown): unknown,
        id(x: unknown): unknown,
        iterations(x: unknown): unknown,
        strength(x: unknown): unknown,
        distance(x: unknown): unknown,
    }

    export interface Simulation {
        tick(n?: number): Simulation,
        restart(): void,
        stop(): Simulation,
        numDimensions(n: number): Simulation,
        numDimensions(): number,
        nodes(nodes: Nodes): Simulation,
        nodes(): Nodes,
        alpha(n: number): Simulation,
        alpha(): number,
        alphaMin(n: number): Simulation,
        alphaMin(): number,
        alphaDecay(n: number): Simulation,
        alphaDecay(): number,
        alphaTarget(n: number): Simulation,
        alphaTarget(): number,
        velocityDecay(n: number): Simulation,
        velocityDecay(): number,
        randomSource(fn: () => number): Simulation,
        randomSource(): number,
        force(name: string, force: Force | null): Simulation,
        force(name: string): Force,
        find(): Node,
        on(name: string, args: unknown): unknown,
    };

    export function forceSimulation(nodes?: Nodes, numDimensions?: number): Simulation;
    export function forceLink(links?: unknown): Force;
    export function forceManyBody(): Force;
    export function forceCenter(x?: number, y?: number, z?: number): Force;
}