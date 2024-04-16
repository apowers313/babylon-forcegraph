import {
    AbstractMesh,
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
    Vector3,
} from "@babylonjs/core";
import {Node, NodeIdType} from "./Node";
import type {EdgeBeforeUpdateEvent} from "./Events";
import type {EdgeStyleConfig} from "./Config";
import type {Graph} from "./Graph";
import {colorNameToHex} from "./util";

const ARROW_CAP_LEN = 0.5;

interface EdgeOpts {
    metadata?: object;
    edgeMeshConfig?: EdgeStyleConfig;
}

export class Edge {
    parentGraph: Graph;
    srcId: NodeIdType;
    dstId: NodeIdType;
    dstNode: Node;
    srcNode: Node;
    metadata: object;
    mesh: AbstractMesh;
    arrowMesh: AbstractMesh | null = null;
    edgeMeshConfig: EdgeStyleConfig;

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
        this.edgeMeshConfig = this.parentGraph.config.style.edge;

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

        const {srcPoint, dstPoint} = this.transformArrowCap();
        if (srcPoint && dstPoint) {
            this.transformEdgeMesh(
                srcPoint,
                dstPoint,
            );
        } else {
            this.transformEdgeMesh(
                // TODO: not sure about the performance impact of converting
                // this to vectors rather than just passing an array of points
                new Vector3(lnk.src.x, lnk.src.y, lnk.src.z),
                new Vector3(lnk.dst.x, lnk.dst.y, lnk.dst.z),
            );
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

    static defaultEdgeMeshFactory(e: Edge, g: Graph, o: EdgeStyleConfig): AbstractMesh {
        if (o.arrowCap) {
            e.arrowMesh = g.meshCache.get("default-arrow-cap", () => {
                const cap1 = GreasedLineTools.GetArrowCap(
                    new Vector3(0, 0, -ARROW_CAP_LEN), // position
                    new Vector3(0, 0, 1), // direction
                    ARROW_CAP_LEN, // length
                    4, // widthUp
                    4, // widthDown
                );
                return CreateGreasedLine(
                    "lines",
                    {
                        points: cap1.points,
                        widths: cap1.widths,
                        widthDistribution: GreasedLineMeshWidthDistribution.WIDTH_DISTRIBUTION_START,
                        // instance: line,
                    },
                    {
                        color: Color3.FromHexString(colorNameToHex(o.color)),
                    },
                    // e.parentGraph.scene
                );
            });
        }

        return g.meshCache.get("default-edge", () => {
            switch (o.type) {
            case "plain":
                return Edge.createPlainLine(e, g, o);
            case "moving":
                return Edge.createMovingLine(e, g, o);
            default:
                throw new TypeError(`Unknown Edge type: '${o.type}'`);
            }
        });
    }

    static createPlainLine(_e: Edge, _g: Graph, o: EdgeStyleConfig): GreasedLineBaseMesh {
        return CreateGreasedLine("edge-plain",
            {points: Edge.unitVectorPoints},
            {color: Color3.FromHexString(colorNameToHex(o.color))},
        );
    }

    static createMovingLine(_e: Edge, g: Graph, o: EdgeStyleConfig): GreasedLineBaseMesh {
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
        texture.name = "moving-texture";

        const mesh = CreateGreasedLine("edge-moving",
            {points: Edge.unitVectorPoints},
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
            texture.uOffset -= 0.04 * g.scene.getAnimationRatio();
        });

        return mesh;
    }

    transformEdgeMesh(srcPoint: Vector3, dstPoint: Vector3) {
        const delta = dstPoint.subtract(srcPoint);
        const midPoint = new Vector3(
            srcPoint.x + (delta.x / 2),
            srcPoint.y + (delta.y / 2),
            srcPoint.z + (delta.z / 2),
        );
        const len = delta.length();

        this.mesh.position = midPoint;
        this.mesh.lookAt(dstPoint);
        this.mesh.scaling.z = len;
    }

    transformArrowCap() {
        if (this.arrowMesh) {
            const {srcPoint, dstPoint, newEndPoint} = this.getInterceptPoints();
            if (!srcPoint || !dstPoint || !newEndPoint) {
                throw new Error("Internal Error: mesh intercept points not found");
            }

            this.arrowMesh.position = dstPoint;
            this.arrowMesh.lookAt(this.dstNode.mesh.position);

            return {
                srcPoint,
                dstPoint: newEndPoint,
                // dstPoint,
            };
        }

        return {
            srcPoint: null,
            dstPoint: null,
        };
    }

    getInterceptPoints() {
        const srcMesh = this.srcNode.mesh;
        const dstMesh = this.dstNode.mesh;
        // create ray for direction / intercept finding
        const ray = new Ray(this.srcNode.mesh.position, this.dstNode.mesh.position);
        // RayHelper.CreateAndShow(ray, e.parentGraph.scene, Color3.Red());

        // XXX: position is missing from Ray TypeScript definition
        /* eslint-disable  @typescript-eslint/no-explicit-any */
        (ray as any).position = dstMesh.position;
        ray.direction = dstMesh.position.subtract(srcMesh.position);

        const dstHitInfo = ray.intersectsMeshes([dstMesh]);
        const srcHitInfo = ray.intersectsMeshes([srcMesh]);

        let srcPoint: Vector3 | null = null;
        let dstPoint: Vector3 | null = null;
        let newEndPoint: Vector3 | null = null;
        if (dstHitInfo.length && srcHitInfo.length) {
            dstPoint = dstHitInfo[0].pickedPoint!;
            srcPoint = srcHitInfo[0].pickedPoint!;
            const distance = srcPoint.subtract(dstPoint).length();
            const adjDistance = distance - ARROW_CAP_LEN;
            const {x: x1, y: y1, z: z1} = srcPoint;
            const {x: x2, y: y2, z: z2} = dstPoint;
            // calculate new point along line
            const x3 = x1 + ((adjDistance / distance) * (x2 - x1));
            const y3 = y1 + ((adjDistance / distance) * (y2 - y1));
            const z3 = z1 + ((adjDistance / distance) * (z2 - z1));
            newEndPoint = new Vector3(x3, y3, z3);
        }

        return {
            srcPoint,
            dstPoint,
            newEndPoint,
        };
    }

    static get unitVectorPoints(): Array<number> {
        return [
            // start point
            0,
            0,
            -0.5,
            // end point
            0,
            0,
            0.5,
        ];
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
