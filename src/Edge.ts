import { GreasedLineBaseMesh, CreateGreasedLine, Color3, RawTexture, Engine, GreasedLineMeshColorMode, StandardMaterial } from "@babylonjs/core";
import type { Graph } from "./Graph";
import { Node, NodeIdType } from "./Node";
import { colorNameToHex, DeepRequired } from "./util"

export type EdgeMeshFactory = typeof Edge.defaultEdgeMeshFactory;

interface EdgeOpts {
    metadata?: object;
    edgeMeshOpts?: EdgeMeshOpts;
}

export class Edge {
    parentGraph: Graph;
    srcId: NodeIdType;
    dstId: NodeIdType;
    metadata: object;
    mesh: GreasedLineBaseMesh;
    edgeMeshOpts: DeepRequired<EdgeMeshOpts>;

    constructor(graph: Graph, srcNodeId: NodeIdType, dstNodeId: NodeIdType, opts: EdgeOpts = {}) {
        this.parentGraph = graph;
        this.srcId = srcNodeId;
        this.dstId = dstNodeId;
        this.metadata = opts.metadata ?? {};

        // make sure both srcNode and dstNode already exist
        if (!Node.list.has(srcNodeId)) {
            throw new Error(`Attempting to create edge '${srcNodeId}->${dstNodeId}', Node '${srcNodeId}' hasn't been created yet.`);
        }
        if (!Node.list.has(dstNodeId)) {
            throw new Error(`Attempting to create edge '${srcNodeId}->${dstNodeId}', Node '${dstNodeId}' hasn't been created yet.`);
        }

        // copy edgeMeshOpts
        let tmp = {};
        for (let k of Object.keys(defaultEdgeMeshOpts)) {
            // @ts-ignore
            tmp[k] = opts?.edgeMeshOpts?.[k] ?? defaultEdgeMeshOpts[k];
        }
        // @ts-ignore
        this.edgeMeshOpts = tmp;

        // create ngraph link
        this.parentGraph.graphEngine.addEdge(this);

        // create mesh
        this.mesh = this.edgeMeshOpts.edgeMeshFactory(this, this.parentGraph, this.edgeMeshOpts);
        this.mesh.metadata = {};
        this.mesh.metadata.parentEdge = this;
    }

    update(): void {
        let lnk = this.parentGraph.graphEngine.getEdgePosition(this);

        this.mesh.setPoints([
            [
                lnk.src.x, lnk.src.y, lnk.src.z ?? 0,
                lnk.dst.x, lnk.dst.y, lnk.dst.z ?? 0,
            ]
        ]);
    }

    static get list(): EdgeMap {
        return globalEdgeList;
    }

    static create(graph: Graph, srcNodeId: NodeIdType, dstNodeId: NodeIdType, opts: EdgeOpts = {}) {
        const existingEdge = Edge.list.get(srcNodeId, dstNodeId);
        if (existingEdge) {
            return existingEdge;
        }

        const e = new Edge(graph, srcNodeId, dstNodeId, opts);
        Edge.list.set(srcNodeId, dstNodeId, e);

        return e;
    }

    static defaultEdgeMeshFactory(e: Edge, g: Graph, o: DeepRequired<EdgeMeshOpts>): GreasedLineBaseMesh {
        switch (o.type) {
            case "plain":
                return Edge.createSimpleLine(e, g, o);
            case "arrow":
                return Edge.createArrowLine(e, g, o);
            case "moving":
                return Edge.createMovingLine(e, g, o);
            default:
                throw new TypeError(`Unknown Edge type: '${o.type}'`)
        }
    }

    static createSimpleLine(_e: Edge, _g: Graph, o: DeepRequired<EdgeMeshOpts>): GreasedLineBaseMesh {
        return CreateGreasedLine("edge",
            { points: [0, 0, 0, 1, 1, 1] },
            { color: Color3.FromHexString(colorNameToHex(o.color)) },
        );
    }

    static createArrowLine(_e: Edge, _g: Graph, o: DeepRequired<EdgeMeshOpts>): GreasedLineBaseMesh {
        return CreateGreasedLine("edge",
            { points: [0, 0, 0, 1, 1, 1] },
            { color: Color3.FromHexString(colorNameToHex(o.color)) },
        );
    }

    static createMovingLine(_e: Edge, g: Graph, o: DeepRequired<EdgeMeshOpts>): GreasedLineBaseMesh {
        const baseColor = Color3.FromHexString(colorNameToHex(o.movingLineOpts.baseColor));
        const movingColor = Color3.FromHexString(colorNameToHex(o.color));
        const r1 = Math.floor(baseColor.r * 255);
        const g1 = Math.floor(baseColor.g * 255);
        const b1 = Math.floor(baseColor.b * 255);
        const r2 = Math.floor(movingColor.r * 255);
        const g2 = Math.floor(movingColor.g * 255);
        const b2 = Math.floor(movingColor.b * 255);

        const textureColors = new Uint8Array([r1, g1, b1, r2, g2, b2])
        const texture = new RawTexture(
            textureColors, // data
            textureColors.length / 3, // width
            1, // height
            Engine.TEXTUREFORMAT_RGB, // format
            g.scene, // sceneOrEngine
            false, // generateMipMaps
            true, // invertY
            Engine.TEXTURE_NEAREST_NEAREST, // samplingMode
            // samplingMode
            // type
            // creationFlags
            // useSRGBBuffer
        );
        texture.wrapU = RawTexture.WRAP_ADDRESSMODE;
        texture.name = 'blue-white-texture';

        const mesh = CreateGreasedLine("edge",
            { points: [0, 0, 0, 1, 1, 1] },
            {
                // color: Color3.FromHexString(colorNameToHex(edgeColor))
                width: o.movingLineOpts.width,
                colorMode: GreasedLineMeshColorMode.COLOR_MODE_MULTIPLY,
            },
        );

        let material = mesh.material as StandardMaterial;
        material.emissiveTexture = texture;
        material.disableLighting = true;
        texture.uScale = 5;

        g.scene.onBeforeRenderObservable.add(() => {
            texture.uOffset += 0.04 * g.scene.getAnimationRatio()
        })

        return mesh;
    }
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

const defaultEdgeMeshOpts: Required<EdgeMeshOpts> = {
    type: "moving",
    color: "white",
    movingLineOpts: {
        baseColor: "lightgrey",
        width: 0.25,
    },
    edgeMeshFactory: Edge.defaultEdgeMeshFactory,
}

class EdgeMap {
    map: Map<NodeIdType, Map<NodeIdType, Edge>> = new Map();

    has(srcId: NodeIdType, dstId: NodeIdType): boolean {
        const dstMap = this.map.get(srcId);
        if (!dstMap) {
            return false;
        }

        return dstMap.has(dstId);
    }

    set(srcId: NodeIdType, dstId: NodeIdType, e: Edge): void {
        let dstMap = this.map.get(srcId);
        if (!dstMap) {
            dstMap = new Map();
            this.map.set(srcId, dstMap);
        }

        if (dstMap.has(dstId)) {
            throw new Error("Attempting to create duplicate Edge");
        }

        dstMap.set(dstId, e);
    }

    get(srcId: NodeIdType, dstId: NodeIdType): Edge | undefined {
        let dstMap = this.map.get(srcId);
        if (!dstMap) {
            return undefined;
        }

        return dstMap.get(dstId);
    }
}

const globalEdgeList = new EdgeMap();