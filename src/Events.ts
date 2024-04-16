import type {Edge} from "./Edge";
import type {Graph} from "./Graph";
import type {Node} from "./Node";
import type {NodeIdType} from "./Config";

export type EventType =
    GraphEventType |
    NodeEventType |
    EdgeEventType;
export type EventCallbackType = (evt: GraphEvent | NodeAddEvent | EdgeEvent) => void | EventType;

export type GraphEventType = GraphEvent["type"];
export type NodeEventType = NodeEvent["type"];
export type EdgeEventType = EdgeEvent["type"];

// graph events
export interface GraphEvent {
    type: "graph-settled";
    graph: Graph;
}

// node events
export type NodeEvent = NodeGenericEvent | NodeBeforeUpdateEvent | NodeAddEvent;

export interface NodeGenericEvent {
    type: "node-update-after";
    node: Node;
}

export interface NodeBeforeUpdateEvent {
    type: "node-update-before";
    node: Node;
    doUpdate: boolean;
}

export interface NodeAddEvent {
    type: "node-add-before",
    nodeId: NodeIdType,
    metadata: object,
}

// edge events
export type EdgeEvent = EdgeGenericEvent | EdgeBeforeUpdateEvent | EdgeAddEvent;

export interface EdgeGenericEvent {
    type: "edge-update-after";
    edge: Edge;
}

export interface EdgeBeforeUpdateEvent {
    type: "edge-update-before";
    edge: Edge;
    doUpdate: boolean;
}

export interface EdgeAddEvent {
    type: "edge-add-before",
    srcNodeId: NodeIdType,
    dstNodeId: NodeIdType,
    metadata: object,
}
