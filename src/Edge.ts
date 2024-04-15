import {
    Color3,
    CreateGreasedLine,
    Engine,
    GreasedLineBaseMesh,
    GreasedLineMeshColorMode,
    GreasedLineMeshWidthDistribution,
    GreasedLineTools,
    RawTexture,
    Ray,
    StandardMaterial,
} from "@babylonjs/core";
import type {EdgeBeforeUpdateEvent, Graph} from "./Graph";
import {Node, NodeIdType} from "./Node";
import type {EdgeMeshConfig} from "./Config";
import {colorNameToHex} from "./util";

interface EdgeOpts {
    metadata?: object;
    edgeMeshConfig?: EdgeMeshConfig;
}

export class Edge {
    parentGraph: Graph;
    srcId: NodeIdType;
    dstId: NodeIdType;
    dstNode: Node;
    srcNode: Node;
    metadata: object;
    mesh: GreasedLineBaseMesh;
    edgeMeshConfig: EdgeMeshConfig;

    constructor(graph: Graph, srcNodeId: NodeIdType, dstNodeId: NodeIdType, opts: EdgeOpts = {}) {
        this.parentGraph = graph;
        this.srcId = srcNodeId;
        this.dstId = dstNodeId;
        this.metadata = opts.metadata ?? {};

        // make sure both srcNode and dstNode already exist
        const srcNode = Node.list.get(srcNodeId);
        if (!srcNode) {
            throw new Error(`Attempting to create edge '${srcNodeId}->${dstNodeId}', Node '${srcNodeId}' hasn't been created yet.`);
        }

        const dstNode = Node.list.get(dstNodeId);
        if (!dstNode) {
            throw new Error(`Attempting to create edge '${srcNodeId}->${dstNodeId}', Node '${dstNodeId}' hasn't been created yet.`);
        }

        this.srcNode = srcNode;
        this.dstNode = dstNode;

        // copy edgeMeshConfig
        this.edgeMeshConfig = this.parentGraph.config.edgeMeshOpts;

        // create ngraph link
        this.parentGraph.graphEngine.addEdge(this);

        // create mesh
        this.mesh = this.edgeMeshConfig.edgeMeshFactory(this, this.parentGraph, this.edgeMeshConfig);
        this.mesh.metadata = {};
        this.mesh.metadata.parentEdge = this;
    }

    update(): void {
        const lnk = this.parentGraph.graphEngine.getEdgePosition(this);

        const evt: EdgeBeforeUpdateEvent = {type: "edge-update-before", edge: this, doUpdate: true};
        this.parentGraph.edgeObservable.notifyObservers(evt);

        if (evt.doUpdate) {
            this.mesh.setPoints([
                [
                    lnk.src.x,
                    lnk.src.y,
                    lnk.src.z ?? 0,
                    lnk.dst.x,
                    lnk.dst.y,
                    lnk.dst.z ?? 0,
                ],
            ]);
        }

        this.parentGraph.edgeObservable.notifyObservers({type: "edge-update-after", edge: this});
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

    static defaultEdgeMeshFactory(e: Edge, g: Graph, o: EdgeMeshConfig): GreasedLineBaseMesh {
        switch (o.type) {
        case "plain":
            return Edge.createPlainLine(e, g, o);
        case "arrow":
            return Edge.createArrowLine(e, g, o);
        case "moving":
            return Edge.createMovingLine(e, g, o);
        default:
            throw new TypeError(`Unknown Edge type: '${o.type}'`);
        }
    }

    static createPlainLine(_e: Edge, _g: Graph, o: EdgeMeshConfig): GreasedLineBaseMesh {
        return CreateGreasedLine("edge-plain",
            {points: [0, 0, 0, 1, 1, 1]},
            {color: Color3.FromHexString(colorNameToHex(o.color))},
        );
    }

    static createArrowLine(e: Edge, _g: Graph, o: EdgeMeshConfig): GreasedLineBaseMesh {
        e.parentGraph.edgeObservable.add((evt) => {
            (evt as EdgeBeforeUpdateEvent).doUpdate = false;
            const srcMesh = e.srcNode.mesh;
            const dstMesh = e.dstNode.mesh;
            // create ray for direction / intercept finding
            const ray = new Ray(e.srcNode.mesh.position, e.dstNode.mesh.position);
            // RayHelper.CreateAndShow(ray, e.parentGraph.scene, Color3.Red());

            // XXX: position is missing from Ray TypeScript definition
            /* eslint-disable  @typescript-eslint/no-explicit-any */
            (ray as any).position = dstMesh.position;
            ray.direction = dstMesh.position.subtract(srcMesh.position);

            const dstHitInfo = ray.intersectsMeshes([dstMesh]);
            const srcHitInfo = ray.intersectsMeshes([srcMesh]);

            if (dstHitInfo.length && srcHitInfo.length) {
                const dstPoint = dstHitInfo[0].pickedPoint!;
                const srcPoint = srcHitInfo[0].pickedPoint!;
                const capLen = 0.1;
                const fudgeFactor = 3;
                const reductionVec = dstPoint.clone().normalize().multiplyByFloats(capLen * fudgeFactor, capLen * fudgeFactor, capLen * fudgeFactor);
                const lineEnd = dstPoint.subtract(reductionVec);

                e.mesh.setPoints([
                    [lineEnd.x, lineEnd.y, lineEnd.z, srcPoint.x, srcPoint.y, srcPoint.z],
                ]);

                const cap1 = GreasedLineTools.GetArrowCap(
                    lineEnd, // position
                    ray.direction, // direction
                    capLen / 3, // length
                    4, // widthUp
                    4, // widthDown
                );
                CreateGreasedLine(
                    "lines",
                    {
                        points: cap1.points,
                        widths: cap1.widths,
                        widthDistribution: GreasedLineMeshWidthDistribution.WIDTH_DISTRIBUTION_START,
                        instance: e.mesh,
                    },
                    // e.parentGraph.scene
                );
            }
        });

        return CreateGreasedLine("edge-arrow",
            {points: [0, 0, 0, 1, 1, 1]},
            {color: Color3.FromHexString(colorNameToHex(o.color))},
        );
    }

    static createMovingLine(_e: Edge, g: Graph, o: EdgeMeshConfig): GreasedLineBaseMesh {
        const baseColor = Color3.FromHexString(colorNameToHex(o.movingLineOpts.baseColor));
        const movingColor = Color3.FromHexString(colorNameToHex(o.color));
        const r1 = Math.floor(baseColor.r * 255);
        const g1 = Math.floor(baseColor.g * 255);
        const b1 = Math.floor(baseColor.b * 255);
        const r2 = Math.floor(movingColor.r * 255);
        const g2 = Math.floor(movingColor.g * 255);
        const b2 = Math.floor(movingColor.b * 255);

        const textureColors = new Uint8Array([r1, g1, b1, r2, g2, b2]);
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
        texture.name = "blue-white-texture";

        const mesh = CreateGreasedLine("edge-moving",
            {points: [0, 0, 0, 1, 1, 1]},
            {
                // color: Color3.FromHexString(colorNameToHex(edgeColor))
                width: o.movingLineOpts.width,
                colorMode: GreasedLineMeshColorMode.COLOR_MODE_MULTIPLY,
            },
        );

        const material = mesh.material as StandardMaterial;
        material.emissiveTexture = texture;
        material.disableLighting = true;
        texture.uScale = 5;

        g.scene.onBeforeRenderObservable.add(() => {
            texture.uOffset += 0.04 * g.scene.getAnimationRatio();
        });

        return mesh;
    }
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
        const dstMap = this.map.get(srcId);
        if (!dstMap) {
            return undefined;
        }

        return dstMap.get(dstId);
    }

    get size(): number {
        let sz = 0;
        for (const dstMap of this.map.values()) {
            sz += dstMap.size;
        }

        return sz;
    }
}

const globalEdgeList = new EdgeMap();
