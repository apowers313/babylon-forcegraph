// import Ajv, { JSONSchemaType } from "ajv";
// @ts-ignore
import xtend from "xtend";
import type { Graph } from "./Graph";
import type { GraphEngineNames } from "./engine/GraphEngine";
import { Node } from "./Node";
import { Edge } from "./Edge";
import { DeepRequired } from "./util";

/*** DEFAULTS ***/

export const defaultNodeMeshOpts: NodeMeshConfig = {
    size: 1,
    opacity: 1,
    wireframe: false,
    color: "lightgrey",
    shape: "icosphere",
    nodeMeshFactory: Node.defaultNodeMeshFactory,
    label: true,
};

const defaultEdgeMeshOpts: EdgeMeshConfig = {
    type: "moving",
    color: "white",
    movingLineOpts: {
        baseColor: "lightgrey",
        width: 0.25,
    },
    edgeMeshFactory: Edge.defaultEdgeMeshFactory,
}

export const defaultGraphOpts: Omit<GraphOpts, "element"> = {
    nodeMeshOpts: defaultNodeMeshOpts,
    edgeMeshOpts: defaultEdgeMeshOpts,
    pinOnDrag: true,
    graphEngineType: "ngraph",
}

export function getConfig(o: GraphOpts): GraphConfig {
    return xtend(defaultGraphOpts, o);
}

/*** GRAPH TYPES ***/

export interface GraphOpts {
    element: string | HTMLElement;
    nodeMeshOpts?: NodeMeshOpts;
    edgeMeshOpts?: EdgeMeshOpts;
    skybox?: string;
    pinOnDrag?: boolean;
    fetchNodes?: FetchNodes;
    fetchEdges?: FetchEdges;
    graphEngineType?: GraphEngineNames;
    jsonDataOpts?: LoadJsonDataOpts;
}

export type GraphConfig = DeepRequired<GraphOpts>;

type FetchNodes = (nodeIds: Set<NodeIdType>, g: Graph) => Set<NodeObject>;
type FetchEdges = (node: Node, g: Graph) => Set<EdgeObject>;

export interface LoadJsonDataOpts {
    nodeListProp?: string;
    edgeListProp?: string;
    nodeIdProp?: string;
    edgeSrcIdProp?: string;
    edgeDstIdProp?: string;
    fetchOpts?: Parameters<typeof fetch>[1];
}

/*** NODE TYPES ***/

export interface NodeObject {
    id: NodeIdType,
    metadata: object,
}

export type NodeIdType = string | number;
export type NodeMeshFactory = typeof Node.defaultNodeMeshFactory;

export interface NodeMeshOpts {
    size?: number;
    opacity?: number;
    wireframe?: boolean;
    color?: string;
    shape?: "box" | "sphere" | "cylinder" | "cone" | "capsule" | "torus" | "torus-knot" | "tetrahedron" | "octahedron" | "dodecahedron" | "icosahedron" | "rhombicuboctahedron" | "triangular_prism" | "pentagonal_prism" | "hexagonal_prism" | "square_pyramid" | "pentagonal_pyramid" | "triangular_dipyramid" | "pentagonal_dipyramid" | "elongated_square_dypyramid" | "elongated_pentagonal_dipyramid" | "elongated_pentagonal_cupola" | "goldberg" | "icosphere" | "geodesic";
    nodeMeshFactory?: NodeMeshFactory;
    label?: boolean;
}

export type NodeMeshConfig = DeepRequired<NodeMeshOpts>;

/*** EDGE TYPES ***/
export interface EdgeObject {
    source: NodeIdType,
    target: NodeIdType,
    metadata: object,
}

export interface MovingLineOpts {
    baseColor?: string;
    width?: number;
}

export interface EdgeMeshOpts {
    type?: "plain" | "arrow" | "moving";
    color?: string;
    movingLineOpts?: MovingLineOpts;
    edgeMeshFactory?: EdgeMeshFactory;
}

export type EdgeMeshConfig = DeepRequired<EdgeMeshOpts>;
export type EdgeMeshFactory = typeof Edge.defaultEdgeMeshFactory;

// export const configSchema: JSONSchemaType<GraphOpts> = {
//     // const configSchema = {
//     type: "object",
//     properties: {
//         foo: {
//             type: "string",
//             default: "hi",
//             nullable: true,
//         },
//         bar: {
//             type: "number",
//             nullable: true,
//         }
//     },
//     // required: ["bar"],
//     additionalProperties: false,
// }

// export function getConfig(data: object): ConfigData {
//     const ajv = new Ajv({ useDefaults: true });
//     const validate = ajv.compile<ConfigData>(configSchema);
//     if (validate(data)) {
//         console.log(`foo: ${data.foo}`)
//         return data;
//     } else {
//         console.log(`Config validation error -- `, validate.errors);
//         throw new Error(`Config validation error -- ${validate.errors}`);
//     }
// }
