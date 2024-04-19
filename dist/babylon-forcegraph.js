var pi = Object.defineProperty;
var gi = (t, e, n) => e in t ? pi(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var I = (t, e, n) => (gi(t, typeof e != "symbol" ? e + "" : e, n), n);
import { SixDofDragBehavior as vi, ActionManager as an, ExecuteCodeAction as yi, StandardMaterial as on, Color3 as Me, MeshBuilder as ae, DynamicTexture as sn, Ray as mi, Vector3 as ge, GreasedLineTools as wi, CreateGreasedLine as pt, GreasedLineMeshWidthDistribution as bi, RawTexture as un, Engine as wt, GreasedLineMeshColorMode as xi, PerfCounter as _e, SceneInstrumentation as _i, EngineInstrumentation as Mi, Observable as gt, Scene as Ni, ArcRotateCamera as Ci, HemisphericLight as Ei, PhotoDome as Ti } from "@babylonjs/core";
const Tn = /* @__PURE__ */ new Map([
  ["aliceblue", "#f0f8ff"],
  ["antiquewhite", "#faebd7"],
  ["aqua", "#00ffff"],
  ["aquamarine", "#7fffd4"],
  ["azure", "#f0ffff"],
  ["beige", "#f5f5dc"],
  ["bisque", "#ffe4c4"],
  ["black", "#000000"],
  ["blanchedalmond", "#ffebcd"],
  ["blue", "#0000ff"],
  ["blueviolet", "#8a2be2"],
  ["brown", "#a52a2a"],
  ["burlywood", "#deb887"],
  ["cadetblue", "#5f9ea0"],
  ["chartreuse", "#7fff00"],
  ["chocolate", "#d2691e"],
  ["coral", "#ff7f50"],
  ["cornflowerblue", "#6495ed"],
  ["cornsilk", "#fff8dc"],
  ["crimson", "#dc143c"],
  ["cyan", "#00ffff"],
  ["darkblue", "#00008b"],
  ["darkcyan", "#008b8b"],
  ["darkgoldenrod", "#b8860b"],
  ["darkgray", "#a9a9a9"],
  ["darkgreen", "#006400"],
  ["darkkhaki", "#bdb76b"],
  ["darkmagenta", "#8b008b"],
  ["darkolivegreen", "#556b2f"],
  ["darkorange", "#ff8c00"],
  ["darkorchid", "#9932cc"],
  ["darkred", "#8b0000"],
  ["darksalmon", "#e9967a"],
  ["darkseagreen", "#8fbc8f"],
  ["darkslateblue", "#483d8b"],
  ["darkslategray", "#2f4f4f"],
  ["darkturquoise", "#00ced1"],
  ["darkviolet", "#9400d3"],
  ["deeppink", "#ff1493"],
  ["deepskyblue", "#00bfff"],
  ["dimgray", "#696969"],
  ["dodgerblue", "#1e90ff"],
  ["firebrick", "#b22222"],
  ["floralwhite", "#fffaf0"],
  ["forestgreen", "#228b22"],
  ["fuchsia", "#ff00ff"],
  ["gainsboro", "#dcdcdc"],
  ["ghostwhite", "#f8f8ff"],
  ["gold", "#ffd700"],
  ["goldenrod", "#daa520"],
  ["gray", "#808080"],
  ["green", "#008000"],
  ["greenyellow", "#adff2f"],
  ["honeydew", "#f0fff0"],
  ["hotpink", "#ff69b4"],
  ["indianred ", "#cd5c5c"],
  ["indigo", "#4b0082"],
  ["ivory", "#fffff0"],
  ["khaki", "#f0e68c"],
  ["lavender", "#e6e6fa"],
  ["lavenderblush", "#fff0f5"],
  ["lawngreen", "#7cfc00"],
  ["lemonchiffon", "#fffacd"],
  ["lightblue", "#add8e6"],
  ["lightcoral", "#f08080"],
  ["lightcyan", "#e0ffff"],
  ["lightgoldenrodyellow", "#fafad2"],
  ["lightgrey", "#d3d3d3"],
  ["lightgreen", "#90ee90"],
  ["lightpink", "#ffb6c1"],
  ["lightsalmon", "#ffa07a"],
  ["lightseagreen", "#20b2aa"],
  ["lightskyblue", "#87cefa"],
  ["lightslategray", "#778899"],
  ["lightsteelblue", "#b0c4de"],
  ["lightyellow", "#ffffe0"],
  ["lime", "#00ff00"],
  ["limegreen", "#32cd32"],
  ["linen", "#faf0e6"],
  ["magenta", "#ff00ff"],
  ["maroon", "#800000"],
  ["mediumaquamarine", "#66cdaa"],
  ["mediumblue", "#0000cd"],
  ["mediumorchid", "#ba55d3"],
  ["mediumpurple", "#9370d8"],
  ["mediumseagreen", "#3cb371"],
  ["mediumslateblue", "#7b68ee"],
  ["mediumspringgreen", "#00fa9a"],
  ["mediumturquoise", "#48d1cc"],
  ["mediumvioletred", "#c71585"],
  ["midnightblue", "#191970"],
  ["mintcream", "#f5fffa"],
  ["mistyrose", "#ffe4e1"],
  ["moccasin", "#ffe4b5"],
  ["navajowhite", "#ffdead"],
  ["navy", "#000080"],
  ["oldlace", "#fdf5e6"],
  ["olive", "#808000"],
  ["olivedrab", "#6b8e23"],
  ["orange", "#ffa500"],
  ["orangered", "#ff4500"],
  ["orchid", "#da70d6"],
  ["palegoldenrod", "#eee8aa"],
  ["palegreen", "#98fb98"],
  ["paleturquoise", "#afeeee"],
  ["palevioletred", "#d87093"],
  ["papayawhip", "#ffefd5"],
  ["peachpuff", "#ffdab9"],
  ["peru", "#cd853f"],
  ["pink", "#ffc0cb"],
  ["plum", "#dda0dd"],
  ["powderblue", "#b0e0e6"],
  ["purple", "#800080"],
  ["rebeccapurple", "#663399"],
  ["red", "#ff0000"],
  ["rosybrown", "#bc8f8f"],
  ["royalblue", "#4169e1"],
  ["saddlebrown", "#8b4513"],
  ["salmon", "#fa8072"],
  ["sandybrown", "#f4a460"],
  ["seagreen", "#2e8b57"],
  ["seashell", "#fff5ee"],
  ["sienna", "#a0522d"],
  ["silver", "#c0c0c0"],
  ["skyblue", "#87ceeb"],
  ["slateblue", "#6a5acd"],
  ["slategray", "#708090"],
  ["snow", "#fffafa"],
  ["springgreen", "#00ff7f"],
  ["steelblue", "#4682b4"],
  ["tan", "#d2b48c"],
  ["teal", "#008080"],
  ["thistle", "#d8bfd8"],
  ["tomato", "#ff6347"],
  ["turquoise", "#40e0d0"],
  ["violet", "#ee82ee"],
  ["wheat", "#f5deb3"],
  ["white", "#ffffff"],
  ["whitesmoke", "#f5f5f5"],
  ["yellow", "#ffff00"],
  ["yellowgreen", "#9acd32"]
]);
function Ne(t) {
  const e = Tn.get(t);
  return e || t;
}
const Vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colorMap: Tn,
  colorNameToHex: Ne
}, Symbol.toStringTag, { value: "Module" })), hn = 1.618;
let Fe = class D {
  constructor(e, n, r = {}) {
    I(this, "parentGraph");
    I(this, "id");
    I(this, "metadata");
    I(this, "mesh");
    I(this, "label");
    I(this, "meshDragBehavior");
    I(this, "dragging", !1);
    I(this, "nodeMeshConfig");
    I(this, "pinOnDrag");
    if (this.parentGraph = e, this.id = n, this.metadata = r.metadata ?? {}, this.nodeMeshConfig = this.parentGraph.config.style.node, this.parentGraph.graphEngine.addNode(this), this.mesh = this.nodeMeshConfig.nodeMeshFactory(this, this.parentGraph, this.nodeMeshConfig), this.mesh.isPickable = !0, this.mesh.metadata = { parentNode: this }, this.nodeMeshConfig.label && (this.label = D.createLabel(this.id.toString(), this, this.parentGraph), this.label.parent = this.mesh, this.label.position.y += 1), this.pinOnDrag = r.pinOnDrag ?? !0, this.meshDragBehavior = new vi(), this.mesh.addBehavior(this.meshDragBehavior), this.meshDragBehavior.onDragStartObservable.add(() => {
      this.parentGraph.running = !0, this.dragging = !0;
    }), this.meshDragBehavior.onDragEndObservable.add(() => {
      this.parentGraph.running = !0, this.pinOnDrag && this.pin(), this.dragging = !1;
    }), this.meshDragBehavior.onPositionChangedObservable.add((i) => {
      this.parentGraph.running = !0, this.parentGraph.graphEngine.setNodePosition(this, i.position);
    }), this.mesh.actionManager = this.mesh.actionManager ?? new an(this.parentGraph.scene), this.parentGraph.fetchNodes && this.parentGraph.fetchEdges) {
      const { fetchNodes: i, fetchEdges: a } = this.parentGraph;
      this.mesh.actionManager.registerAction(
        new yi(
          {
            trigger: an.OnDoublePickTrigger
            // trigger: ActionManager.OnLongPressTrigger,
          },
          () => {
            this.parentGraph.running = !0;
            const u = a(this, this.parentGraph), d = /* @__PURE__ */ new Set();
            u.forEach((h) => {
              d.add(h.src), d.add(h.dst);
            }), d.delete(this.id), i(d, this.parentGraph).forEach((h) => this.parentGraph.addNode(h.id, h.metadata)), u.forEach((h) => this.parentGraph.addEdge(h.src, h.dst, h.metadata));
          }
        )
      );
    }
  }
  update() {
    if (this.dragging)
      return;
    this.parentGraph.nodeObservable.notifyObservers({ type: "node-update-before", node: this });
    const e = this.parentGraph.graphEngine.getNodePosition(this);
    this.mesh.position.x = e.x, this.mesh.position.y = e.y, e.z && (this.mesh.position.z = e.z), this.parentGraph.nodeObservable.notifyObservers({ type: "node-update-after", node: this });
  }
  pin() {
    this.parentGraph.graphEngine.pin(this);
  }
  unpin() {
    this.parentGraph.graphEngine.unpin(this);
  }
  static get list() {
    return $i;
  }
  static create(e, n, r = {}) {
    const i = D.list.get(n);
    if (i)
      return i;
    const a = new D(e, n, r);
    return D.list.set(n, a), a;
  }
  static defaultNodeMeshFactory(e, n, r) {
    return n.meshCache.get("default-mesh", () => {
      let i;
      switch (r.shape) {
        case "box":
          i = D.createBox(e, n, r);
          break;
        case "sphere":
          i = D.createSphere(e, n, r);
          break;
        case "cylinder":
          i = D.createCylinder(e, n, r);
          break;
        case "cone":
          i = D.createCone(e, n, r);
          break;
        case "capsule":
          i = D.createCapsule(e, n, r);
          break;
        case "torus-knot":
          i = D.createTorusKnot(e, n, r);
          break;
        case "tetrahedron":
          i = D.createPolyhedron(0, e, n, r);
          break;
        case "octahedron":
          i = D.createPolyhedron(1, e, n, r);
          break;
        case "dodecahedron":
          i = D.createPolyhedron(2, e, n, r);
          break;
        case "icosahedron":
          i = D.createPolyhedron(3, e, n, r);
          break;
        case "rhombicuboctahedron":
          i = D.createPolyhedron(4, e, n, r);
          break;
        case "triangular_prism":
          i = D.createPolyhedron(5, e, n, r);
          break;
        case "pentagonal_prism":
          i = D.createPolyhedron(6, e, n, r);
          break;
        case "hexagonal_prism":
          i = D.createPolyhedron(7, e, n, r);
          break;
        case "square_pyramid":
          i = D.createPolyhedron(8, e, n, r);
          break;
        case "pentagonal_pyramid":
          i = D.createPolyhedron(9, e, n, r);
          break;
        case "triangular_dipyramid":
          i = D.createPolyhedron(10, e, n, r);
          break;
        case "pentagonal_dipyramid":
          i = D.createPolyhedron(11, e, n, r);
          break;
        case "elongated_square_dypyramid":
          i = D.createPolyhedron(12, e, n, r);
          break;
        case "elongated_pentagonal_dipyramid":
          i = D.createPolyhedron(13, e, n, r);
          break;
        case "elongated_pentagonal_cupola":
          i = D.createPolyhedron(14, e, n, r);
          break;
        case "goldberg":
          i = D.createGoldberg(e, n, r);
          break;
        case "icosphere":
          i = D.createIcoSphere(e, n, r);
          break;
        case "geodesic":
          i = D.createGeodesic(e, n, r);
          break;
        default:
          throw new TypeError(`unknown shape: ${r.shape}`);
      }
      const a = new on("defaultMaterial"), u = r.color;
      return a.diffuseColor = Me.FromHexString(Ne(u)), a.wireframe = r.wireframe, a.freeze(), i.visibility = r.opacity, i.material = a, i;
    });
  }
  static createBox(e, n, r) {
    return ae.CreateBox("box", { size: r.size });
  }
  static createSphere(e, n, r) {
    return ae.CreateSphere("sphere", { diameter: r.size });
  }
  static createCylinder(e, n, r) {
    return ae.CreateCylinder("cylinder", { height: r.size * hn, diameter: r.size });
  }
  static createCone(e, n, r) {
    return ae.CreateCylinder("cylinder", { height: r.size * hn, diameterTop: 0, diameterBottom: r.size });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static createCapsule(e, n, r) {
    return ae.CreateCapsule("capsule", {});
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static createTorus(e, n, r) {
    return ae.CreateTorus("torus", {});
  }
  static createTorusKnot(e, n, r) {
    return ae.CreateTorusKnot("tk", { radius: r.size * 0.3, tube: r.size * 0.2, radialSegments: 128 });
  }
  static createPolyhedron(e, n, r, i) {
    return ae.CreatePolyhedron("polyhedron", { size: i.size, type: e });
  }
  static createGoldberg(e, n, r) {
    return ae.CreateGoldberg("goldberg", { size: r.size });
  }
  static createIcoSphere(e, n, r) {
    return ae.CreateIcoSphere("icosphere", { radius: r.size * 0.75 });
  }
  static createGeodesic(e, n, r) {
    return ae.CreateGeodesic("geodesic", { size: r.size });
  }
  static createLabel(e, n, r) {
    const a = "48px Verdana", s = 0.006944444444444444, l = new sn("DynamicTexture", 64, r.scene).getContext();
    l.font = a;
    const g = l.measureText(e).width + 8, w = g * s, y = new sn("DynamicTexture", { width: g, height: 72 }, r.scene, !1), v = new on("mat", r.scene);
    v.specularColor = Me.Black(), y.hasAlpha = !0;
    const x = y.getContext();
    x.fillStyle = "white", x.beginPath();
    const m = 0, c = 0, M = [20, 20, 20, 20], C = g, N = 72;
    x.moveTo(m + M[0], c), x.lineTo(m + C - M[1], c), x.arc(m + C - M[1], c + M[1], M[1], 3 * Math.PI / 2, Math.PI * 2), x.lineTo(m + C, c + N - M[2]), x.arc(m + C - M[2], c + N - M[2], M[2], 0, Math.PI / 2), x.lineTo(m + M[3], c + N), x.arc(m + M[3], c + N - M[3], M[3], Math.PI / 2, Math.PI), x.lineTo(m, c + M[0]), x.arc(m + M[0], c + M[0], M[0], Math.PI, 3 * Math.PI / 2), x.closePath(), x.fill(), y.drawText(e, null, null, a, "#000000", "transparent", !0), v.opacityTexture = y, v.emissiveTexture = y, v.disableLighting = !0;
    const _ = ae.CreatePlane("plane", { width: w, height: 0.5 }, r.scene);
    return _.material = v, _.billboardMode = 7, _;
  }
};
const $i = /* @__PURE__ */ new Map();
class oe {
  constructor(e, n, r, i = {}) {
    I(this, "parentGraph");
    I(this, "srcId");
    I(this, "dstId");
    I(this, "dstNode");
    I(this, "srcNode");
    I(this, "metadata");
    I(this, "mesh");
    I(this, "arrowMesh", null);
    I(this, "edgeStyleConfig");
    // XXX: performance impact when not needed?
    I(this, "ray");
    this.parentGraph = e, this.srcId = n, this.dstId = r, this.metadata = i.metadata ?? {};
    const a = Fe.list.get(n);
    if (!a)
      throw new Error(`Attempting to create edge '${n}->${r}', Node '${n}' hasn't been created yet.`);
    const u = Fe.list.get(r);
    if (!u)
      throw new Error(`Attempting to create edge '${n}->${r}', Node '${r}' hasn't been created yet.`);
    this.srcNode = a, this.dstNode = u, this.ray = new mi(this.srcNode.mesh.position, this.dstNode.mesh.position), this.edgeStyleConfig = this.parentGraph.config.style.edge, this.parentGraph.graphEngine.addEdge(this), this.mesh = this.edgeStyleConfig.edgeMeshFactory(this, this.parentGraph, this.edgeStyleConfig), this.mesh.isPickable = !1, this.mesh.metadata = {}, this.mesh.metadata.parentEdge = this;
  }
  update() {
    const e = this.parentGraph.graphEngine.getEdgePosition(this);
    this.parentGraph.edgeObservable.notifyObservers({ type: "edge-update-before", edge: this });
    const { srcPoint: n, dstPoint: r } = this.transformArrowCap();
    n && r ? this.transformEdgeMesh(
      n,
      r
    ) : this.transformEdgeMesh(
      new ge(e.src.x, e.src.y, e.src.z),
      new ge(e.dst.x, e.dst.y, e.dst.z)
    ), this.parentGraph.edgeObservable.notifyObservers({ type: "edge-update-after", edge: this });
  }
  static updateRays(e) {
    if (e.config.style.edge.arrowCap) {
      for (const n of e.graphEngine.edges) {
        const r = n.srcNode.mesh, i = n.dstNode.mesh;
        n.ray.position = i.position, n.ray.direction = i.position.subtract(r.position);
      }
      e.scene.render();
    }
  }
  static get list() {
    return Ii;
  }
  static create(e, n, r, i = {}) {
    const a = oe.list.get(n, r);
    if (a)
      return a;
    const u = new oe(e, n, r, i);
    return oe.list.set(n, r, u), u;
  }
  static defaultEdgeMeshFactory(e, n, r) {
    return r.arrowCap && (e.arrowMesh = n.meshCache.get("default-arrow-cap", () => {
      const i = Si(r.width), a = fn(r.width), u = wi.GetArrowCap(
        new ge(0, 0, -a),
        // position
        new ge(0, 0, 1),
        // direction
        a,
        // length
        i,
        // widthUp
        i
        // widthDown
      );
      return pt(
        "lines",
        {
          points: u.points,
          widths: u.widths,
          widthDistribution: bi.WIDTH_DISTRIBUTION_START
          // instance: line,
        },
        {
          color: Me.FromHexString(Ne(r.color))
        }
        // e.parentGraph.scene
      );
    })), n.meshCache.get("default-edge", () => {
      switch (r.type) {
        case "plain":
          return oe.createPlainLine(e, n, r);
        case "moving":
          return oe.createMovingLine(e, n, r);
        default:
          throw new TypeError(`Unknown Edge type: '${r.type}'`);
      }
    });
  }
  static createPlainLine(e, n, r) {
    return pt(
      "edge-plain",
      {
        points: oe.unitVectorPoints
      },
      {
        color: Me.FromHexString(Ne(r.color)),
        width: r.width
      }
    );
  }
  static createMovingLine(e, n, r) {
    const i = Me.FromHexString(Ne(r.movingLineOpts.baseColor)), a = Me.FromHexString(Ne(r.color)), u = Math.floor(i.r * 255), d = Math.floor(i.g * 255), s = Math.floor(i.b * 255), h = Math.floor(a.r * 255), l = Math.floor(a.g * 255), g = Math.floor(a.b * 255), w = new Uint8Array([u, d, s, h, l, g]), y = new un(
      w,
      // data
      w.length / 3,
      // width
      1,
      // height
      wt.TEXTUREFORMAT_RGB,
      // format
      n.scene,
      // sceneOrEngine
      !1,
      // generateMipMaps
      !0,
      // invertY
      wt.TEXTURE_NEAREST_NEAREST
      // samplingMode
      // samplingMode
      // type
      // creationFlags
      // useSRGBBuffer
    );
    y.wrapU = un.WRAP_ADDRESSMODE, y.name = "moving-texture";
    const v = pt(
      "edge-moving",
      {
        points: oe.unitVectorPoints
      },
      {
        // color: Color3.FromHexString(colorNameToHex(edgeColor))
        width: r.width,
        colorMode: xi.COLOR_MODE_MULTIPLY
      }
    ), x = v.material;
    return x.emissiveTexture = y, x.disableLighting = !0, y.uScale = 5, n.scene.onBeforeRenderObservable.add(() => {
      y.uOffset -= 0.04 * n.scene.getAnimationRatio();
    }), v;
  }
  transformEdgeMesh(e, n) {
    const r = n.subtract(e), i = new ge(
      e.x + r.x / 2,
      e.y + r.y / 2,
      e.z + r.z / 2
    ), a = r.length();
    this.mesh.position = i, this.mesh.lookAt(n), this.mesh.scaling.z = a;
  }
  transformArrowCap() {
    if (this.arrowMesh) {
      this.parentGraph.stats.arrowCapUpdate.beginMonitoring();
      const { srcPoint: e, dstPoint: n, newEndPoint: r } = this.getInterceptPoints();
      if (!e || !n || !r)
        throw new Error("Internal Error: mesh intercept points not found");
      return this.arrowMesh.position = n, this.arrowMesh.lookAt(this.dstNode.mesh.position), this.parentGraph.stats.arrowCapUpdate.endMonitoring(), {
        srcPoint: e,
        dstPoint: r
        // dstPoint,
      };
    }
    return {
      srcPoint: null,
      dstPoint: null
    };
  }
  getInterceptPoints() {
    const e = this.srcNode.mesh, n = this.dstNode.mesh;
    this.parentGraph.stats.intersectCalc.beginMonitoring();
    const r = this.ray.intersectsMeshes([n]), i = this.ray.intersectsMeshes([e]);
    this.parentGraph.stats.intersectCalc.endMonitoring();
    let a = null, u = null, d = null;
    if (r.length && i.length) {
      const s = fn(this.edgeStyleConfig.width);
      u = r[0].pickedPoint, a = i[0].pickedPoint;
      const h = a.subtract(u).length(), l = h - s, { x: g, y: w, z: y } = a, { x: v, y: x, z: m } = u, c = g + l / h * (v - g), M = w + l / h * (x - w), C = y + l / h * (m - y);
      d = new ge(c, M, C);
    }
    return {
      srcPoint: a,
      dstPoint: u,
      newEndPoint: d
    };
  }
  static get unitVectorPoints() {
    return [
      // start point
      0,
      0,
      -0.5,
      // end point
      0,
      0,
      0.5
    ];
  }
}
function Si(t) {
  return Math.max(20 * t, 4);
}
function fn(t) {
  return Math.max(t, 0.5);
}
class Bi {
  constructor() {
    I(this, "map", /* @__PURE__ */ new Map());
  }
  has(e, n) {
    const r = this.map.get(e);
    return r ? r.has(n) : !1;
  }
  set(e, n, r) {
    let i = this.map.get(e);
    if (i || (i = /* @__PURE__ */ new Map(), this.map.set(e, i)), i.has(n))
      throw new Error("Attempting to create duplicate Edge");
    i.set(n, r);
  }
  get(e, n) {
    const r = this.map.get(e);
    if (r)
      return r.get(n);
  }
  get size() {
    let e = 0;
    for (const n of this.map.values())
      e += n.size;
    return e;
  }
}
const Ii = new Bi();
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ke = { exports: {} };
Ke.exports;
(function(t, e) {
  var n = 200, r = "__lodash_hash_undefined__", i = 800, a = 16, u = 9007199254740991, d = "[object Arguments]", s = "[object Array]", h = "[object AsyncFunction]", l = "[object Boolean]", g = "[object Date]", w = "[object Error]", y = "[object Function]", v = "[object GeneratorFunction]", x = "[object Map]", m = "[object Number]", c = "[object Null]", M = "[object Object]", C = "[object Proxy]", N = "[object RegExp]", _ = "[object Set]", T = "[object String]", A = "[object Undefined]", L = "[object WeakMap]", j = "[object ArrayBuffer]", R = "[object DataView]", H = "[object Float32Array]", G = "[object Float64Array]", ue = "[object Int8Array]", E = "[object Int16Array]", b = "[object Int32Array]", $ = "[object Uint8Array]", Q = "[object Uint8ClampedArray]", re = "[object Uint16Array]", se = "[object Uint32Array]", B = /[\\^$.*+?()[\]{}|]/g, P = /^\[object .+?Constructor\]$/, F = /^(?:0|[1-9]\d*)$/, z = {};
  z[H] = z[G] = z[ue] = z[E] = z[b] = z[$] = z[Q] = z[re] = z[se] = !0, z[d] = z[s] = z[j] = z[l] = z[R] = z[g] = z[w] = z[y] = z[x] = z[m] = z[M] = z[N] = z[_] = z[T] = z[L] = !1;
  var X = typeof We == "object" && We && We.Object === Object && We, J = typeof self == "object" && self && self.Object === Object && self, K = X || J || Function("return this")(), qe = e && !e.nodeType && e, Te = qe && !0 && t && !t.nodeType && t, zt = Te && Te.exports === qe, tt = zt && X.process, Lt = function() {
    try {
      var o = Te && Te.require && Te.require("util").types;
      return o || tt && tt.binding && tt.binding("util");
    } catch {
    }
  }(), Ft = Lt && Lt.isTypedArray;
  function Ot(o, f, p) {
    switch (p.length) {
      case 0:
        return o.call(f);
      case 1:
        return o.call(f, p[0]);
      case 2:
        return o.call(f, p[0], p[1]);
      case 3:
        return o.call(f, p[0], p[1], p[2]);
    }
    return o.apply(f, p);
  }
  function nr(o, f) {
    for (var p = -1, S = Array(o); ++p < o; )
      S[p] = f(p);
    return S;
  }
  function rr(o) {
    return function(f) {
      return o(f);
    };
  }
  function ir(o, f) {
    return o == null ? void 0 : o[f];
  }
  function ar(o, f) {
    return function(p) {
      return o(f(p));
    };
  }
  var or = Array.prototype, sr = Function.prototype, De = Object.prototype, nt = K["__core-js_shared__"], Ge = sr.toString, he = De.hasOwnProperty, kt = function() {
    var o = /[^.]+$/.exec(nt && nt.keys && nt.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), qt = De.toString, ur = Ge.call(Object), hr = RegExp(
    "^" + Ge.call(he).replace(B, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), je = zt ? K.Buffer : void 0, Dt = K.Symbol, Gt = K.Uint8Array, jt = je ? je.allocUnsafe : void 0, Ut = ar(Object.getPrototypeOf, Object), Rt = Object.create, fr = De.propertyIsEnumerable, dr = or.splice, ye = Dt ? Dt.toStringTag : void 0, Ue = function() {
    try {
      var o = ot(Object, "defineProperty");
      return o({}, "", {}), o;
    } catch {
    }
  }(), cr = je ? je.isBuffer : void 0, Ht = Math.max, lr = Date.now, Qt = ot(K, "Map"), $e = ot(Object, "create"), pr = /* @__PURE__ */ function() {
    function o() {
    }
    return function(f) {
      if (!de(f))
        return {};
      if (Rt)
        return Rt(f);
      o.prototype = f;
      var p = new o();
      return o.prototype = void 0, p;
    };
  }();
  function me(o) {
    var f = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++f < p; ) {
      var S = o[f];
      this.set(S[0], S[1]);
    }
  }
  function gr() {
    this.__data__ = $e ? $e(null) : {}, this.size = 0;
  }
  function vr(o) {
    var f = this.has(o) && delete this.__data__[o];
    return this.size -= f ? 1 : 0, f;
  }
  function yr(o) {
    var f = this.__data__;
    if ($e) {
      var p = f[o];
      return p === r ? void 0 : p;
    }
    return he.call(f, o) ? f[o] : void 0;
  }
  function mr(o) {
    var f = this.__data__;
    return $e ? f[o] !== void 0 : he.call(f, o);
  }
  function wr(o, f) {
    var p = this.__data__;
    return this.size += this.has(o) ? 0 : 1, p[o] = $e && f === void 0 ? r : f, this;
  }
  me.prototype.clear = gr, me.prototype.delete = vr, me.prototype.get = yr, me.prototype.has = mr, me.prototype.set = wr;
  function fe(o) {
    var f = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++f < p; ) {
      var S = o[f];
      this.set(S[0], S[1]);
    }
  }
  function br() {
    this.__data__ = [], this.size = 0;
  }
  function xr(o) {
    var f = this.__data__, p = Re(f, o);
    if (p < 0)
      return !1;
    var S = f.length - 1;
    return p == S ? f.pop() : dr.call(f, p, 1), --this.size, !0;
  }
  function _r(o) {
    var f = this.__data__, p = Re(f, o);
    return p < 0 ? void 0 : f[p][1];
  }
  function Mr(o) {
    return Re(this.__data__, o) > -1;
  }
  function Nr(o, f) {
    var p = this.__data__, S = Re(p, o);
    return S < 0 ? (++this.size, p.push([o, f])) : p[S][1] = f, this;
  }
  fe.prototype.clear = br, fe.prototype.delete = xr, fe.prototype.get = _r, fe.prototype.has = Mr, fe.prototype.set = Nr;
  function be(o) {
    var f = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++f < p; ) {
      var S = o[f];
      this.set(S[0], S[1]);
    }
  }
  function Cr() {
    this.size = 0, this.__data__ = {
      hash: new me(),
      map: new (Qt || fe)(),
      string: new me()
    };
  }
  function Er(o) {
    var f = Qe(this, o).delete(o);
    return this.size -= f ? 1 : 0, f;
  }
  function Tr(o) {
    return Qe(this, o).get(o);
  }
  function $r(o) {
    return Qe(this, o).has(o);
  }
  function Sr(o, f) {
    var p = Qe(this, o), S = p.size;
    return p.set(o, f), this.size += p.size == S ? 0 : 1, this;
  }
  be.prototype.clear = Cr, be.prototype.delete = Er, be.prototype.get = Tr, be.prototype.has = $r, be.prototype.set = Sr;
  function xe(o) {
    var f = this.__data__ = new fe(o);
    this.size = f.size;
  }
  function Br() {
    this.__data__ = new fe(), this.size = 0;
  }
  function Ir(o) {
    var f = this.__data__, p = f.delete(o);
    return this.size = f.size, p;
  }
  function Pr(o) {
    return this.__data__.get(o);
  }
  function Ar(o) {
    return this.__data__.has(o);
  }
  function zr(o, f) {
    var p = this.__data__;
    if (p instanceof fe) {
      var S = p.__data__;
      if (!Qt || S.length < n - 1)
        return S.push([o, f]), this.size = ++p.size, this;
      p = this.__data__ = new be(S);
    }
    return p.set(o, f), this.size = p.size, this;
  }
  xe.prototype.clear = Br, xe.prototype.delete = Ir, xe.prototype.get = Pr, xe.prototype.has = Ar, xe.prototype.set = zr;
  function Lr(o, f) {
    var p = ht(o), S = !p && ut(o), O = !p && !S && Yt(o), q = !p && !S && !O && en(o), V = p || S || O || q, k = V ? nr(o.length, String) : [], W = k.length;
    for (var ie in o)
      (f || he.call(o, ie)) && !(V && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ie == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      O && (ie == "offset" || ie == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      q && (ie == "buffer" || ie == "byteLength" || ie == "byteOffset") || // Skip index properties.
      Xt(ie, W))) && k.push(ie);
    return k;
  }
  function rt(o, f, p) {
    (p !== void 0 && !Ve(o[f], p) || p === void 0 && !(f in o)) && it(o, f, p);
  }
  function Fr(o, f, p) {
    var S = o[f];
    (!(he.call(o, f) && Ve(S, p)) || p === void 0 && !(f in o)) && it(o, f, p);
  }
  function Re(o, f) {
    for (var p = o.length; p--; )
      if (Ve(o[p][0], f))
        return p;
    return -1;
  }
  function it(o, f, p) {
    f == "__proto__" && Ue ? Ue(o, f, {
      configurable: !0,
      enumerable: !0,
      value: p,
      writable: !0
    }) : o[f] = p;
  }
  var Or = Jr();
  function He(o) {
    return o == null ? o === void 0 ? A : c : ye && ye in Object(o) ? Xr(o) : ni(o);
  }
  function Vt(o) {
    return Se(o) && He(o) == d;
  }
  function kr(o) {
    if (!de(o) || ei(o))
      return !1;
    var f = dt(o) ? hr : P;
    return f.test(oi(o));
  }
  function qr(o) {
    return Se(o) && Zt(o.length) && !!z[He(o)];
  }
  function Dr(o) {
    if (!de(o))
      return ti(o);
    var f = Kt(o), p = [];
    for (var S in o)
      S == "constructor" && (f || !he.call(o, S)) || p.push(S);
    return p;
  }
  function at(o, f, p, S, O) {
    o !== f && Or(f, function(q, V) {
      if (O || (O = new xe()), de(q))
        Gr(o, f, V, p, at, S, O);
      else {
        var k = S ? S(st(o, V), q, V + "", o, f, O) : void 0;
        k === void 0 && (k = q), rt(o, V, k);
      }
    }, tn);
  }
  function Gr(o, f, p, S, O, q, V) {
    var k = st(o, p), W = st(f, p), ie = V.get(W);
    if (ie) {
      rt(o, p, ie);
      return;
    }
    var ne = q ? q(k, W, p + "", o, f, V) : void 0, Be = ne === void 0;
    if (Be) {
      var ct = ht(W), lt = !ct && Yt(W), rn = !ct && !lt && en(W);
      ne = W, ct || lt || rn ? ht(k) ? ne = k : si(k) ? ne = Qr(k) : lt ? (Be = !1, ne = Ur(W, !0)) : rn ? (Be = !1, ne = Hr(W, !0)) : ne = [] : ui(W) || ut(W) ? (ne = k, ut(k) ? ne = hi(k) : (!de(k) || dt(k)) && (ne = Kr(W))) : Be = !1;
    }
    Be && (V.set(W, ne), O(ne, W, S, q, V), V.delete(W)), rt(o, p, ne);
  }
  function Wt(o, f) {
    return ii(ri(o, f, nn), o + "");
  }
  var jr = Ue ? function(o, f) {
    return Ue(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: ci(f),
      writable: !0
    });
  } : nn;
  function Ur(o, f) {
    if (f)
      return o.slice();
    var p = o.length, S = jt ? jt(p) : new o.constructor(p);
    return o.copy(S), S;
  }
  function Rr(o) {
    var f = new o.constructor(o.byteLength);
    return new Gt(f).set(new Gt(o)), f;
  }
  function Hr(o, f) {
    var p = f ? Rr(o.buffer) : o.buffer;
    return new o.constructor(p, o.byteOffset, o.length);
  }
  function Qr(o, f) {
    var p = -1, S = o.length;
    for (f || (f = Array(S)); ++p < S; )
      f[p] = o[p];
    return f;
  }
  function Vr(o, f, p, S) {
    var O = !p;
    p || (p = {});
    for (var q = -1, V = f.length; ++q < V; ) {
      var k = f[q], W = S ? S(p[k], o[k], k, p, o) : void 0;
      W === void 0 && (W = o[k]), O ? it(p, k, W) : Fr(p, k, W);
    }
    return p;
  }
  function Wr(o) {
    return Wt(function(f, p) {
      var S = -1, O = p.length, q = O > 1 ? p[O - 1] : void 0, V = O > 2 ? p[2] : void 0;
      for (q = o.length > 3 && typeof q == "function" ? (O--, q) : void 0, V && Yr(p[0], p[1], V) && (q = O < 3 ? void 0 : q, O = 1), f = Object(f); ++S < O; ) {
        var k = p[S];
        k && o(f, k, S, q);
      }
      return f;
    });
  }
  function Jr(o) {
    return function(f, p, S) {
      for (var O = -1, q = Object(f), V = S(f), k = V.length; k--; ) {
        var W = V[o ? k : ++O];
        if (p(q[W], W, q) === !1)
          break;
      }
      return f;
    };
  }
  function Jt(o, f, p, S, O, q) {
    return de(o) && de(f) && (q.set(f, o), at(o, f, void 0, Jt, q), q.delete(f)), o;
  }
  function Qe(o, f) {
    var p = o.__data__;
    return Zr(f) ? p[typeof f == "string" ? "string" : "hash"] : p.map;
  }
  function ot(o, f) {
    var p = ir(o, f);
    return kr(p) ? p : void 0;
  }
  function Xr(o) {
    var f = he.call(o, ye), p = o[ye];
    try {
      o[ye] = void 0;
      var S = !0;
    } catch {
    }
    var O = qt.call(o);
    return S && (f ? o[ye] = p : delete o[ye]), O;
  }
  function Kr(o) {
    return typeof o.constructor == "function" && !Kt(o) ? pr(Ut(o)) : {};
  }
  function Xt(o, f) {
    var p = typeof o;
    return f = f ?? u, !!f && (p == "number" || p != "symbol" && F.test(o)) && o > -1 && o % 1 == 0 && o < f;
  }
  function Yr(o, f, p) {
    if (!de(p))
      return !1;
    var S = typeof f;
    return (S == "number" ? ft(p) && Xt(f, p.length) : S == "string" && f in p) ? Ve(p[f], o) : !1;
  }
  function Zr(o) {
    var f = typeof o;
    return f == "string" || f == "number" || f == "symbol" || f == "boolean" ? o !== "__proto__" : o === null;
  }
  function ei(o) {
    return !!kt && kt in o;
  }
  function Kt(o) {
    var f = o && o.constructor, p = typeof f == "function" && f.prototype || De;
    return o === p;
  }
  function ti(o) {
    var f = [];
    if (o != null)
      for (var p in Object(o))
        f.push(p);
    return f;
  }
  function ni(o) {
    return qt.call(o);
  }
  function ri(o, f, p) {
    return f = Ht(f === void 0 ? o.length - 1 : f, 0), function() {
      for (var S = arguments, O = -1, q = Ht(S.length - f, 0), V = Array(q); ++O < q; )
        V[O] = S[f + O];
      O = -1;
      for (var k = Array(f + 1); ++O < f; )
        k[O] = S[O];
      return k[f] = p(V), Ot(o, this, k);
    };
  }
  function st(o, f) {
    if (!(f === "constructor" && typeof o[f] == "function") && f != "__proto__")
      return o[f];
  }
  var ii = ai(jr);
  function ai(o) {
    var f = 0, p = 0;
    return function() {
      var S = lr(), O = a - (S - p);
      if (p = S, O > 0) {
        if (++f >= i)
          return arguments[0];
      } else
        f = 0;
      return o.apply(void 0, arguments);
    };
  }
  function oi(o) {
    if (o != null) {
      try {
        return Ge.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function Ve(o, f) {
    return o === f || o !== o && f !== f;
  }
  var ut = Vt(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Vt : function(o) {
    return Se(o) && he.call(o, "callee") && !fr.call(o, "callee");
  }, ht = Array.isArray;
  function ft(o) {
    return o != null && Zt(o.length) && !dt(o);
  }
  function si(o) {
    return Se(o) && ft(o);
  }
  var Yt = cr || li;
  function dt(o) {
    if (!de(o))
      return !1;
    var f = He(o);
    return f == y || f == v || f == h || f == C;
  }
  function Zt(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= u;
  }
  function de(o) {
    var f = typeof o;
    return o != null && (f == "object" || f == "function");
  }
  function Se(o) {
    return o != null && typeof o == "object";
  }
  function ui(o) {
    if (!Se(o) || He(o) != M)
      return !1;
    var f = Ut(o);
    if (f === null)
      return !0;
    var p = he.call(f, "constructor") && f.constructor;
    return typeof p == "function" && p instanceof p && Ge.call(p) == ur;
  }
  var en = Ft ? rr(Ft) : qr;
  function hi(o) {
    return Vr(o, tn(o));
  }
  var fi = Wt(function(o) {
    return o.push(void 0, Jt), Ot(di, void 0, o);
  });
  function tn(o) {
    return ft(o) ? Lr(o, !0) : Dr(o);
  }
  var di = Wr(function(o, f, p, S) {
    at(o, f, p, S);
  });
  function ci(o) {
    return function() {
      return o;
    };
  }
  function nn(o) {
    return o;
  }
  function li() {
    return !1;
  }
  t.exports = fi;
})(Ke, Ke.exports);
var Pi = Ke.exports;
const $n = /* @__PURE__ */ Mt(Pi), Ai = {
  size: 1,
  opacity: 1,
  wireframe: !1,
  color: "lightgrey",
  shape: "icosphere",
  nodeMeshFactory: Fe.defaultNodeMeshFactory,
  label: !1
}, zi = {
  type: "moving",
  color: "white",
  width: 0.25,
  arrowCap: !1,
  movingLineOpts: {
    baseColor: "lightgrey"
  },
  edgeMeshFactory: oe.defaultEdgeMeshFactory
}, Li = {
  style: {
    node: Ai,
    edge: zi,
    skybox: "",
    startingCameraDistance: 30
  },
  behavior: {
    node: {
      pinOnDrag: !0
    },
    fetchNodes: () => /* @__PURE__ */ new Set(),
    fetchEdges: () => /* @__PURE__ */ new Set()
  },
  engine: {
    type: "ngraph",
    stepMultiplier: 1,
    preSteps: 0,
    minDelta: 0
  }
};
function Fi(t) {
  return $n({}, t, Li);
}
const Oi = {
  nodeListProp: "nodes",
  edgeListProp: "edges",
  nodeIdProp: "id",
  edgeSrcIdProp: "src",
  edgeDstIdProp: "dst"
};
function ki(t) {
  return $n({}, t, Oi);
}
function qi(t, e, n) {
  var r, i = 1;
  t == null && (t = 0), e == null && (e = 0), n == null && (n = 0);
  function a() {
    var u, d = r.length, s, h = 0, l = 0, g = 0;
    for (u = 0; u < d; ++u)
      s = r[u], h += s.x || 0, l += s.y || 0, g += s.z || 0;
    for (h = (h / d - t) * i, l = (l / d - e) * i, g = (g / d - n) * i, u = 0; u < d; ++u)
      s = r[u], h && (s.x -= h), l && (s.y -= l), g && (s.z -= g);
  }
  return a.initialize = function(u) {
    r = u;
  }, a.x = function(u) {
    return arguments.length ? (t = +u, a) : t;
  }, a.y = function(u) {
    return arguments.length ? (e = +u, a) : e;
  }, a.z = function(u) {
    return arguments.length ? (n = +u, a) : n;
  }, a.strength = function(u) {
    return arguments.length ? (i = +u, a) : i;
  }, a;
}
function Di(t) {
  const e = +this._x.call(null, t);
  return Sn(this.cover(e), e, t);
}
function Sn(t, e, n) {
  if (isNaN(e))
    return t;
  var r, i = t._root, a = { data: n }, u = t._x0, d = t._x1, s, h, l, g, w;
  if (!i)
    return t._root = a, t;
  for (; i.length; )
    if ((l = e >= (s = (u + d) / 2)) ? u = s : d = s, r = i, !(i = i[g = +l]))
      return r[g] = a, t;
  if (h = +t._x.call(null, i.data), e === h)
    return a.next = i, r ? r[g] = a : t._root = a, t;
  do
    r = r ? r[g] = new Array(2) : t._root = new Array(2), (l = e >= (s = (u + d) / 2)) ? u = s : d = s;
  while ((g = +l) == (w = +(h >= s)));
  return r[w] = i, r[g] = a, t;
}
function Gi(t) {
  Array.isArray(t) || (t = Array.from(t));
  const e = t.length, n = new Float64Array(e);
  let r = 1 / 0, i = -1 / 0;
  for (let a = 0, u; a < e; ++a)
    isNaN(u = +this._x.call(null, t[a])) || (n[a] = u, u < r && (r = u), u > i && (i = u));
  if (r > i)
    return this;
  this.cover(r).cover(i);
  for (let a = 0; a < e; ++a)
    Sn(this, n[a], t[a]);
  return this;
}
function ji(t) {
  if (isNaN(t = +t))
    return this;
  var e = this._x0, n = this._x1;
  if (isNaN(e))
    n = (e = Math.floor(t)) + 1;
  else {
    for (var r = n - e || 1, i = this._root, a, u; e > t || t >= n; )
      switch (u = +(t < e), a = new Array(2), a[u] = i, i = a, r *= 2, u) {
        case 0:
          n = e + r;
          break;
        case 1:
          e = n - r;
          break;
      }
    this._root && this._root.length && (this._root = i);
  }
  return this._x0 = e, this._x1 = n, this;
}
function Ui() {
  var t = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        t.push(e.data);
      while (e = e.next);
  }), t;
}
function Ri(t) {
  return arguments.length ? this.cover(+t[0][0]).cover(+t[1][0]) : isNaN(this._x0) ? void 0 : [[this._x0], [this._x1]];
}
function le(t, e, n) {
  this.node = t, this.x0 = e, this.x1 = n;
}
function Hi(t, e) {
  var n, r = this._x0, i, a, u = this._x1, d = [], s = this._root, h, l;
  for (s && d.push(new le(s, r, u)), e == null ? e = 1 / 0 : (r = t - e, u = t + e); h = d.pop(); )
    if (!(!(s = h.node) || (i = h.x0) > u || (a = h.x1) < r))
      if (s.length) {
        var g = (i + a) / 2;
        d.push(
          new le(s[1], g, a),
          new le(s[0], i, g)
        ), (l = +(t >= g)) && (h = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - l], d[d.length - 1 - l] = h);
      } else {
        var w = Math.abs(t - +this._x.call(null, s.data));
        w < e && (e = w, r = t - w, u = t + w, n = s.data);
      }
  return n;
}
function Qi(t) {
  if (isNaN(s = +this._x.call(null, t)))
    return this;
  var e, n = this._root, r, i, a, u = this._x0, d = this._x1, s, h, l, g, w;
  if (!n)
    return this;
  if (n.length)
    for (; ; ) {
      if ((l = s >= (h = (u + d) / 2)) ? u = h : d = h, e = n, !(n = n[g = +l]))
        return this;
      if (!n.length)
        break;
      e[g + 1 & 1] && (r = e, w = g);
    }
  for (; n.data !== t; )
    if (i = n, !(n = n.next))
      return this;
  return (a = n.next) && delete n.next, i ? (a ? i.next = a : delete i.next, this) : e ? (a ? e[g] = a : delete e[g], (n = e[0] || e[1]) && n === (e[1] || e[0]) && !n.length && (r ? r[w] = n : this._root = n), this) : (this._root = a, this);
}
function Vi(t) {
  for (var e = 0, n = t.length; e < n; ++e)
    this.remove(t[e]);
  return this;
}
function Wi() {
  return this._root;
}
function Ji() {
  var t = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++t;
      while (e = e.next);
  }), t;
}
function Xi(t) {
  var e = [], n, r = this._root, i, a, u;
  for (r && e.push(new le(r, this._x0, this._x1)); n = e.pop(); )
    if (!t(r = n.node, a = n.x0, u = n.x1) && r.length) {
      var d = (a + u) / 2;
      (i = r[1]) && e.push(new le(i, d, u)), (i = r[0]) && e.push(new le(i, a, d));
    }
  return this;
}
function Ki(t) {
  var e = [], n = [], r;
  for (this._root && e.push(new le(this._root, this._x0, this._x1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var a, u = r.x0, d = r.x1, s = (u + d) / 2;
      (a = i[0]) && e.push(new le(a, u, s)), (a = i[1]) && e.push(new le(a, s, d));
    }
    n.push(r);
  }
  for (; r = n.pop(); )
    t(r.node, r.x0, r.x1);
  return this;
}
function Yi(t) {
  return t[0];
}
function Zi(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function Bn(t, e) {
  var n = new Nt(e ?? Yi, NaN, NaN);
  return t == null ? n : n.addAll(t);
}
function Nt(t, e, n) {
  this._x = t, this._x0 = e, this._x1 = n, this._root = void 0;
}
function dn(t) {
  for (var e = { data: t.data }, n = e; t = t.next; )
    n = n.next = { data: t.data };
  return e;
}
var te = Bn.prototype = Nt.prototype;
te.copy = function() {
  var t = new Nt(this._x, this._x0, this._x1), e = this._root, n, r;
  if (!e)
    return t;
  if (!e.length)
    return t._root = dn(e), t;
  for (n = [{ source: e, target: t._root = new Array(2) }]; e = n.pop(); )
    for (var i = 0; i < 2; ++i)
      (r = e.source[i]) && (r.length ? n.push({ source: r, target: e.target[i] = new Array(2) }) : e.target[i] = dn(r));
  return t;
};
te.add = Di;
te.addAll = Gi;
te.cover = ji;
te.data = Ui;
te.extent = Ri;
te.find = Hi;
te.remove = Qi;
te.removeAll = Vi;
te.root = Wi;
te.size = Ji;
te.visit = Xi;
te.visitAfter = Ki;
te.x = Zi;
function ea(t) {
  const e = +this._x.call(null, t), n = +this._y.call(null, t);
  return In(this.cover(e, n), e, n, t);
}
function In(t, e, n, r) {
  if (isNaN(e) || isNaN(n))
    return t;
  var i, a = t._root, u = { data: r }, d = t._x0, s = t._y0, h = t._x1, l = t._y1, g, w, y, v, x, m, c, M;
  if (!a)
    return t._root = u, t;
  for (; a.length; )
    if ((x = e >= (g = (d + h) / 2)) ? d = g : h = g, (m = n >= (w = (s + l) / 2)) ? s = w : l = w, i = a, !(a = a[c = m << 1 | x]))
      return i[c] = u, t;
  if (y = +t._x.call(null, a.data), v = +t._y.call(null, a.data), e === y && n === v)
    return u.next = a, i ? i[c] = u : t._root = u, t;
  do
    i = i ? i[c] = new Array(4) : t._root = new Array(4), (x = e >= (g = (d + h) / 2)) ? d = g : h = g, (m = n >= (w = (s + l) / 2)) ? s = w : l = w;
  while ((c = m << 1 | x) === (M = (v >= w) << 1 | y >= g));
  return i[M] = a, i[c] = u, t;
}
function ta(t) {
  var e, n, r = t.length, i, a, u = new Array(r), d = new Array(r), s = 1 / 0, h = 1 / 0, l = -1 / 0, g = -1 / 0;
  for (n = 0; n < r; ++n)
    isNaN(i = +this._x.call(null, e = t[n])) || isNaN(a = +this._y.call(null, e)) || (u[n] = i, d[n] = a, i < s && (s = i), i > l && (l = i), a < h && (h = a), a > g && (g = a));
  if (s > l || h > g)
    return this;
  for (this.cover(s, h).cover(l, g), n = 0; n < r; ++n)
    In(this, u[n], d[n], t[n]);
  return this;
}
function na(t, e) {
  if (isNaN(t = +t) || isNaN(e = +e))
    return this;
  var n = this._x0, r = this._y0, i = this._x1, a = this._y1;
  if (isNaN(n))
    i = (n = Math.floor(t)) + 1, a = (r = Math.floor(e)) + 1;
  else {
    for (var u = i - n || 1, d = this._root, s, h; n > t || t >= i || r > e || e >= a; )
      switch (h = (e < r) << 1 | t < n, s = new Array(4), s[h] = d, d = s, u *= 2, h) {
        case 0:
          i = n + u, a = r + u;
          break;
        case 1:
          n = i - u, a = r + u;
          break;
        case 2:
          i = n + u, r = a - u;
          break;
        case 3:
          n = i - u, r = a - u;
          break;
      }
    this._root && this._root.length && (this._root = d);
  }
  return this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = a, this;
}
function ra() {
  var t = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        t.push(e.data);
      while (e = e.next);
  }), t;
}
function ia(t) {
  return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function Z(t, e, n, r, i) {
  this.node = t, this.x0 = e, this.y0 = n, this.x1 = r, this.y1 = i;
}
function aa(t, e, n) {
  var r, i = this._x0, a = this._y0, u, d, s, h, l = this._x1, g = this._y1, w = [], y = this._root, v, x;
  for (y && w.push(new Z(y, i, a, l, g)), n == null ? n = 1 / 0 : (i = t - n, a = e - n, l = t + n, g = e + n, n *= n); v = w.pop(); )
    if (!(!(y = v.node) || (u = v.x0) > l || (d = v.y0) > g || (s = v.x1) < i || (h = v.y1) < a))
      if (y.length) {
        var m = (u + s) / 2, c = (d + h) / 2;
        w.push(
          new Z(y[3], m, c, s, h),
          new Z(y[2], u, c, m, h),
          new Z(y[1], m, d, s, c),
          new Z(y[0], u, d, m, c)
        ), (x = (e >= c) << 1 | t >= m) && (v = w[w.length - 1], w[w.length - 1] = w[w.length - 1 - x], w[w.length - 1 - x] = v);
      } else {
        var M = t - +this._x.call(null, y.data), C = e - +this._y.call(null, y.data), N = M * M + C * C;
        if (N < n) {
          var _ = Math.sqrt(n = N);
          i = t - _, a = e - _, l = t + _, g = e + _, r = y.data;
        }
      }
  return r;
}
function oa(t) {
  if (isNaN(l = +this._x.call(null, t)) || isNaN(g = +this._y.call(null, t)))
    return this;
  var e, n = this._root, r, i, a, u = this._x0, d = this._y0, s = this._x1, h = this._y1, l, g, w, y, v, x, m, c;
  if (!n)
    return this;
  if (n.length)
    for (; ; ) {
      if ((v = l >= (w = (u + s) / 2)) ? u = w : s = w, (x = g >= (y = (d + h) / 2)) ? d = y : h = y, e = n, !(n = n[m = x << 1 | v]))
        return this;
      if (!n.length)
        break;
      (e[m + 1 & 3] || e[m + 2 & 3] || e[m + 3 & 3]) && (r = e, c = m);
    }
  for (; n.data !== t; )
    if (i = n, !(n = n.next))
      return this;
  return (a = n.next) && delete n.next, i ? (a ? i.next = a : delete i.next, this) : e ? (a ? e[m] = a : delete e[m], (n = e[0] || e[1] || e[2] || e[3]) && n === (e[3] || e[2] || e[1] || e[0]) && !n.length && (r ? r[c] = n : this._root = n), this) : (this._root = a, this);
}
function sa(t) {
  for (var e = 0, n = t.length; e < n; ++e)
    this.remove(t[e]);
  return this;
}
function ua() {
  return this._root;
}
function ha() {
  var t = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++t;
      while (e = e.next);
  }), t;
}
function fa(t) {
  var e = [], n, r = this._root, i, a, u, d, s;
  for (r && e.push(new Z(r, this._x0, this._y0, this._x1, this._y1)); n = e.pop(); )
    if (!t(r = n.node, a = n.x0, u = n.y0, d = n.x1, s = n.y1) && r.length) {
      var h = (a + d) / 2, l = (u + s) / 2;
      (i = r[3]) && e.push(new Z(i, h, l, d, s)), (i = r[2]) && e.push(new Z(i, a, l, h, s)), (i = r[1]) && e.push(new Z(i, h, u, d, l)), (i = r[0]) && e.push(new Z(i, a, u, h, l));
    }
  return this;
}
function da(t) {
  var e = [], n = [], r;
  for (this._root && e.push(new Z(this._root, this._x0, this._y0, this._x1, this._y1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var a, u = r.x0, d = r.y0, s = r.x1, h = r.y1, l = (u + s) / 2, g = (d + h) / 2;
      (a = i[0]) && e.push(new Z(a, u, d, l, g)), (a = i[1]) && e.push(new Z(a, l, d, s, g)), (a = i[2]) && e.push(new Z(a, u, g, l, h)), (a = i[3]) && e.push(new Z(a, l, g, s, h));
    }
    n.push(r);
  }
  for (; r = n.pop(); )
    t(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function ca(t) {
  return t[0];
}
function la(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function pa(t) {
  return t[1];
}
function ga(t) {
  return arguments.length ? (this._y = t, this) : this._y;
}
function Pn(t, e, n) {
  var r = new Ct(e ?? ca, n ?? pa, NaN, NaN, NaN, NaN);
  return t == null ? r : r.addAll(t);
}
function Ct(t, e, n, r, i, a) {
  this._x = t, this._y = e, this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = a, this._root = void 0;
}
function cn(t) {
  for (var e = { data: t.data }, n = e; t = t.next; )
    n = n.next = { data: t.data };
  return e;
}
var ee = Pn.prototype = Ct.prototype;
ee.copy = function() {
  var t = new Ct(this._x, this._y, this._x0, this._y0, this._x1, this._y1), e = this._root, n, r;
  if (!e)
    return t;
  if (!e.length)
    return t._root = cn(e), t;
  for (n = [{ source: e, target: t._root = new Array(4) }]; e = n.pop(); )
    for (var i = 0; i < 4; ++i)
      (r = e.source[i]) && (r.length ? n.push({ source: r, target: e.target[i] = new Array(4) }) : e.target[i] = cn(r));
  return t;
};
ee.add = ea;
ee.addAll = ta;
ee.cover = na;
ee.data = ra;
ee.extent = ia;
ee.find = aa;
ee.remove = oa;
ee.removeAll = sa;
ee.root = ua;
ee.size = ha;
ee.visit = fa;
ee.visitAfter = da;
ee.x = la;
ee.y = ga;
function va(t) {
  const e = +this._x.call(null, t), n = +this._y.call(null, t), r = +this._z.call(null, t);
  return An(this.cover(e, n, r), e, n, r, t);
}
function An(t, e, n, r, i) {
  if (isNaN(e) || isNaN(n) || isNaN(r))
    return t;
  var a, u = t._root, d = { data: i }, s = t._x0, h = t._y0, l = t._z0, g = t._x1, w = t._y1, y = t._z1, v, x, m, c, M, C, N, _, T, A, L;
  if (!u)
    return t._root = d, t;
  for (; u.length; )
    if ((N = e >= (v = (s + g) / 2)) ? s = v : g = v, (_ = n >= (x = (h + w) / 2)) ? h = x : w = x, (T = r >= (m = (l + y) / 2)) ? l = m : y = m, a = u, !(u = u[A = T << 2 | _ << 1 | N]))
      return a[A] = d, t;
  if (c = +t._x.call(null, u.data), M = +t._y.call(null, u.data), C = +t._z.call(null, u.data), e === c && n === M && r === C)
    return d.next = u, a ? a[A] = d : t._root = d, t;
  do
    a = a ? a[A] = new Array(8) : t._root = new Array(8), (N = e >= (v = (s + g) / 2)) ? s = v : g = v, (_ = n >= (x = (h + w) / 2)) ? h = x : w = x, (T = r >= (m = (l + y) / 2)) ? l = m : y = m;
  while ((A = T << 2 | _ << 1 | N) === (L = (C >= m) << 2 | (M >= x) << 1 | c >= v));
  return a[L] = u, a[A] = d, t;
}
function ya(t) {
  Array.isArray(t) || (t = Array.from(t));
  const e = t.length, n = new Float64Array(e), r = new Float64Array(e), i = new Float64Array(e);
  let a = 1 / 0, u = 1 / 0, d = 1 / 0, s = -1 / 0, h = -1 / 0, l = -1 / 0;
  for (let g = 0, w, y, v, x; g < e; ++g)
    isNaN(y = +this._x.call(null, w = t[g])) || isNaN(v = +this._y.call(null, w)) || isNaN(x = +this._z.call(null, w)) || (n[g] = y, r[g] = v, i[g] = x, y < a && (a = y), y > s && (s = y), v < u && (u = v), v > h && (h = v), x < d && (d = x), x > l && (l = x));
  if (a > s || u > h || d > l)
    return this;
  this.cover(a, u, d).cover(s, h, l);
  for (let g = 0; g < e; ++g)
    An(this, n[g], r[g], i[g], t[g]);
  return this;
}
function ma(t, e, n) {
  if (isNaN(t = +t) || isNaN(e = +e) || isNaN(n = +n))
    return this;
  var r = this._x0, i = this._y0, a = this._z0, u = this._x1, d = this._y1, s = this._z1;
  if (isNaN(r))
    u = (r = Math.floor(t)) + 1, d = (i = Math.floor(e)) + 1, s = (a = Math.floor(n)) + 1;
  else {
    for (var h = u - r || 1, l = this._root, g, w; r > t || t >= u || i > e || e >= d || a > n || n >= s; )
      switch (w = (n < a) << 2 | (e < i) << 1 | t < r, g = new Array(8), g[w] = l, l = g, h *= 2, w) {
        case 0:
          u = r + h, d = i + h, s = a + h;
          break;
        case 1:
          r = u - h, d = i + h, s = a + h;
          break;
        case 2:
          u = r + h, i = d - h, s = a + h;
          break;
        case 3:
          r = u - h, i = d - h, s = a + h;
          break;
        case 4:
          u = r + h, d = i + h, a = s - h;
          break;
        case 5:
          r = u - h, d = i + h, a = s - h;
          break;
        case 6:
          u = r + h, i = d - h, a = s - h;
          break;
        case 7:
          r = u - h, i = d - h, a = s - h;
          break;
      }
    this._root && this._root.length && (this._root = l);
  }
  return this._x0 = r, this._y0 = i, this._z0 = a, this._x1 = u, this._y1 = d, this._z1 = s, this;
}
function wa() {
  var t = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        t.push(e.data);
      while (e = e.next);
  }), t;
}
function ba(t) {
  return arguments.length ? this.cover(+t[0][0], +t[0][1], +t[0][2]).cover(+t[1][0], +t[1][1], +t[1][2]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0, this._z0], [this._x1, this._y1, this._z1]];
}
function U(t, e, n, r, i, a, u) {
  this.node = t, this.x0 = e, this.y0 = n, this.z0 = r, this.x1 = i, this.y1 = a, this.z1 = u;
}
function xa(t, e, n, r) {
  var i, a = this._x0, u = this._y0, d = this._z0, s, h, l, g, w, y, v = this._x1, x = this._y1, m = this._z1, c = [], M = this._root, C, N;
  for (M && c.push(new U(M, a, u, d, v, x, m)), r == null ? r = 1 / 0 : (a = t - r, u = e - r, d = n - r, v = t + r, x = e + r, m = n + r, r *= r); C = c.pop(); )
    if (!(!(M = C.node) || (s = C.x0) > v || (h = C.y0) > x || (l = C.z0) > m || (g = C.x1) < a || (w = C.y1) < u || (y = C.z1) < d))
      if (M.length) {
        var _ = (s + g) / 2, T = (h + w) / 2, A = (l + y) / 2;
        c.push(
          new U(M[7], _, T, A, g, w, y),
          new U(M[6], s, T, A, _, w, y),
          new U(M[5], _, h, A, g, T, y),
          new U(M[4], s, h, A, _, T, y),
          new U(M[3], _, T, l, g, w, A),
          new U(M[2], s, T, l, _, w, A),
          new U(M[1], _, h, l, g, T, A),
          new U(M[0], s, h, l, _, T, A)
        ), (N = (n >= A) << 2 | (e >= T) << 1 | t >= _) && (C = c[c.length - 1], c[c.length - 1] = c[c.length - 1 - N], c[c.length - 1 - N] = C);
      } else {
        var L = t - +this._x.call(null, M.data), j = e - +this._y.call(null, M.data), R = n - +this._z.call(null, M.data), H = L * L + j * j + R * R;
        if (H < r) {
          var G = Math.sqrt(r = H);
          a = t - G, u = e - G, d = n - G, v = t + G, x = e + G, m = n + G, i = M.data;
        }
      }
  return i;
}
function _a(t) {
  if (isNaN(w = +this._x.call(null, t)) || isNaN(y = +this._y.call(null, t)) || isNaN(v = +this._z.call(null, t)))
    return this;
  var e, n = this._root, r, i, a, u = this._x0, d = this._y0, s = this._z0, h = this._x1, l = this._y1, g = this._z1, w, y, v, x, m, c, M, C, N, _, T;
  if (!n)
    return this;
  if (n.length)
    for (; ; ) {
      if ((M = w >= (x = (u + h) / 2)) ? u = x : h = x, (C = y >= (m = (d + l) / 2)) ? d = m : l = m, (N = v >= (c = (s + g) / 2)) ? s = c : g = c, e = n, !(n = n[_ = N << 2 | C << 1 | M]))
        return this;
      if (!n.length)
        break;
      (e[_ + 1 & 7] || e[_ + 2 & 7] || e[_ + 3 & 7] || e[_ + 4 & 7] || e[_ + 5 & 7] || e[_ + 6 & 7] || e[_ + 7 & 7]) && (r = e, T = _);
    }
  for (; n.data !== t; )
    if (i = n, !(n = n.next))
      return this;
  return (a = n.next) && delete n.next, i ? (a ? i.next = a : delete i.next, this) : e ? (a ? e[_] = a : delete e[_], (n = e[0] || e[1] || e[2] || e[3] || e[4] || e[5] || e[6] || e[7]) && n === (e[7] || e[6] || e[5] || e[4] || e[3] || e[2] || e[1] || e[0]) && !n.length && (r ? r[T] = n : this._root = n), this) : (this._root = a, this);
}
function Ma(t) {
  for (var e = 0, n = t.length; e < n; ++e)
    this.remove(t[e]);
  return this;
}
function Na() {
  return this._root;
}
function Ca() {
  var t = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++t;
      while (e = e.next);
  }), t;
}
function Ea(t) {
  var e = [], n, r = this._root, i, a, u, d, s, h, l;
  for (r && e.push(new U(r, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); n = e.pop(); )
    if (!t(r = n.node, a = n.x0, u = n.y0, d = n.z0, s = n.x1, h = n.y1, l = n.z1) && r.length) {
      var g = (a + s) / 2, w = (u + h) / 2, y = (d + l) / 2;
      (i = r[7]) && e.push(new U(i, g, w, y, s, h, l)), (i = r[6]) && e.push(new U(i, a, w, y, g, h, l)), (i = r[5]) && e.push(new U(i, g, u, y, s, w, l)), (i = r[4]) && e.push(new U(i, a, u, y, g, w, l)), (i = r[3]) && e.push(new U(i, g, w, d, s, h, y)), (i = r[2]) && e.push(new U(i, a, w, d, g, h, y)), (i = r[1]) && e.push(new U(i, g, u, d, s, w, y)), (i = r[0]) && e.push(new U(i, a, u, d, g, w, y));
    }
  return this;
}
function Ta(t) {
  var e = [], n = [], r;
  for (this._root && e.push(new U(this._root, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var a, u = r.x0, d = r.y0, s = r.z0, h = r.x1, l = r.y1, g = r.z1, w = (u + h) / 2, y = (d + l) / 2, v = (s + g) / 2;
      (a = i[0]) && e.push(new U(a, u, d, s, w, y, v)), (a = i[1]) && e.push(new U(a, w, d, s, h, y, v)), (a = i[2]) && e.push(new U(a, u, y, s, w, l, v)), (a = i[3]) && e.push(new U(a, w, y, s, h, l, v)), (a = i[4]) && e.push(new U(a, u, d, v, w, y, g)), (a = i[5]) && e.push(new U(a, w, d, v, h, y, g)), (a = i[6]) && e.push(new U(a, u, y, v, w, l, g)), (a = i[7]) && e.push(new U(a, w, y, v, h, l, g));
    }
    n.push(r);
  }
  for (; r = n.pop(); )
    t(r.node, r.x0, r.y0, r.z0, r.x1, r.y1, r.z1);
  return this;
}
function $a(t) {
  return t[0];
}
function Sa(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function Ba(t) {
  return t[1];
}
function Ia(t) {
  return arguments.length ? (this._y = t, this) : this._y;
}
function Pa(t) {
  return t[2];
}
function Aa(t) {
  return arguments.length ? (this._z = t, this) : this._z;
}
function zn(t, e, n, r) {
  var i = new Et(e ?? $a, n ?? Ba, r ?? Pa, NaN, NaN, NaN, NaN, NaN, NaN);
  return t == null ? i : i.addAll(t);
}
function Et(t, e, n, r, i, a, u, d, s) {
  this._x = t, this._y = e, this._z = n, this._x0 = r, this._y0 = i, this._z0 = a, this._x1 = u, this._y1 = d, this._z1 = s, this._root = void 0;
}
function ln(t) {
  for (var e = { data: t.data }, n = e; t = t.next; )
    n = n.next = { data: t.data };
  return e;
}
var Y = zn.prototype = Et.prototype;
Y.copy = function() {
  var t = new Et(this._x, this._y, this._z, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1), e = this._root, n, r;
  if (!e)
    return t;
  if (!e.length)
    return t._root = ln(e), t;
  for (n = [{ source: e, target: t._root = new Array(8) }]; e = n.pop(); )
    for (var i = 0; i < 8; ++i)
      (r = e.source[i]) && (r.length ? n.push({ source: r, target: e.target[i] = new Array(8) }) : e.target[i] = ln(r));
  return t;
};
Y.add = va;
Y.addAll = ya;
Y.cover = ma;
Y.data = wa;
Y.extent = ba;
Y.find = xa;
Y.remove = _a;
Y.removeAll = Ma;
Y.root = Na;
Y.size = Ca;
Y.visit = Ea;
Y.visitAfter = Ta;
Y.x = Sa;
Y.y = Ia;
Y.z = Aa;
function Le(t) {
  return function() {
    return t;
  };
}
function ce(t) {
  return (t() - 0.5) * 1e-6;
}
function za(t) {
  return t.index;
}
function pn(t, e) {
  var n = t.get(e);
  if (!n)
    throw new Error("node not found: " + e);
  return n;
}
function La(t) {
  var e = za, n = w, r, i = Le(30), a, u, d, s, h, l, g = 1;
  t == null && (t = []);
  function w(c) {
    return 1 / Math.min(s[c.source.index], s[c.target.index]);
  }
  function y(c) {
    for (var M = 0, C = t.length; M < g; ++M)
      for (var N = 0, _, T, A, L = 0, j = 0, R = 0, H, G; N < C; ++N)
        _ = t[N], T = _.source, A = _.target, L = A.x + A.vx - T.x - T.vx || ce(l), d > 1 && (j = A.y + A.vy - T.y - T.vy || ce(l)), d > 2 && (R = A.z + A.vz - T.z - T.vz || ce(l)), H = Math.sqrt(L * L + j * j + R * R), H = (H - a[N]) / H * c * r[N], L *= H, j *= H, R *= H, A.vx -= L * (G = h[N]), d > 1 && (A.vy -= j * G), d > 2 && (A.vz -= R * G), T.vx += L * (G = 1 - G), d > 1 && (T.vy += j * G), d > 2 && (T.vz += R * G);
  }
  function v() {
    if (u) {
      var c, M = u.length, C = t.length, N = new Map(u.map((T, A) => [e(T, A, u), T])), _;
      for (c = 0, s = new Array(M); c < C; ++c)
        _ = t[c], _.index = c, typeof _.source != "object" && (_.source = pn(N, _.source)), typeof _.target != "object" && (_.target = pn(N, _.target)), s[_.source.index] = (s[_.source.index] || 0) + 1, s[_.target.index] = (s[_.target.index] || 0) + 1;
      for (c = 0, h = new Array(C); c < C; ++c)
        _ = t[c], h[c] = s[_.source.index] / (s[_.source.index] + s[_.target.index]);
      r = new Array(C), x(), a = new Array(C), m();
    }
  }
  function x() {
    if (u)
      for (var c = 0, M = t.length; c < M; ++c)
        r[c] = +n(t[c], c, t);
  }
  function m() {
    if (u)
      for (var c = 0, M = t.length; c < M; ++c)
        a[c] = +i(t[c], c, t);
  }
  return y.initialize = function(c, ...M) {
    u = c, l = M.find((C) => typeof C == "function") || Math.random, d = M.find((C) => [1, 2, 3].includes(C)) || 2, v();
  }, y.links = function(c) {
    return arguments.length ? (t = c, v(), y) : t;
  }, y.id = function(c) {
    return arguments.length ? (e = c, y) : e;
  }, y.iterations = function(c) {
    return arguments.length ? (g = +c, y) : g;
  }, y.strength = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : Le(+c), x(), y) : n;
  }, y.distance = function(c) {
    return arguments.length ? (i = typeof c == "function" ? c : Le(+c), m(), y) : i;
  }, y;
}
var Fa = { value: () => {
} };
function Ln() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Xe(n);
}
function Xe(t) {
  this._ = t;
}
function Oa(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Xe.prototype = Ln.prototype = {
  constructor: Xe,
  on: function(t, e) {
    var n = this._, r = Oa(t + "", n), i, a = -1, u = r.length;
    if (arguments.length < 2) {
      for (; ++a < u; )
        if ((i = (t = r[a]).type) && (i = ka(n[i], t.name)))
          return i;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++a < u; )
      if (i = (t = r[a]).type)
        n[i] = gn(n[i], t.name, e);
      else if (e == null)
        for (i in n)
          n[i] = gn(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e)
      t[n] = e[n].slice();
    return new Xe(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), r = 0, i, a; r < i; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r)
      a[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i)
      r[i].value.apply(e, n);
  }
};
function ka(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function gn(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Fa, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Ce = 0, Ae = 0, Ie = 0, Fn = 1e3, Ye, ze, Ze = 0, we = 0, et = 0, Oe = typeof performance == "object" && performance.now ? performance : Date, On = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function kn() {
  return we || (On(qa), we = Oe.now() + et);
}
function qa() {
  we = 0;
}
function bt() {
  this._call = this._time = this._next = null;
}
bt.prototype = qn.prototype = {
  constructor: bt,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? kn() : +n) + (e == null ? 0 : +e), !this._next && ze !== this && (ze ? ze._next = this : Ye = this, ze = this), this._call = t, this._time = n, xt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, xt());
  }
};
function qn(t, e, n) {
  var r = new bt();
  return r.restart(t, e, n), r;
}
function Da() {
  kn(), ++Ce;
  for (var t = Ye, e; t; )
    (e = we - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Ce;
}
function vn() {
  we = (Ze = Oe.now()) + et, Ce = Ae = 0;
  try {
    Da();
  } finally {
    Ce = 0, ja(), we = 0;
  }
}
function Ga() {
  var t = Oe.now(), e = t - Ze;
  e > Fn && (et -= e, Ze = t);
}
function ja() {
  for (var t, e = Ye, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Ye = n);
  ze = t, xt(r);
}
function xt(t) {
  if (!Ce) {
    Ae && (Ae = clearTimeout(Ae));
    var e = t - we;
    e > 24 ? (t < 1 / 0 && (Ae = setTimeout(vn, t - Oe.now() - et)), Ie && (Ie = clearInterval(Ie))) : (Ie || (Ze = Oe.now(), Ie = setInterval(Ga, Fn)), Ce = 1, On(vn));
  }
}
const Ua = 1664525, Ra = 1013904223, yn = 4294967296;
function Ha() {
  let t = 1;
  return () => (t = (Ua * t + Ra) % yn) / yn;
}
var mn = 3;
function vt(t) {
  return t.x;
}
function wn(t) {
  return t.y;
}
function Qa(t) {
  return t.z;
}
var Va = 10, Wa = Math.PI * (3 - Math.sqrt(5)), Ja = Math.PI * 20 / (9 + Math.sqrt(221));
function Xa(t, e) {
  e = e || 2;
  var n = Math.min(mn, Math.max(1, Math.round(e))), r, i = 1, a = 1e-3, u = 1 - Math.pow(a, 1 / 300), d = 0, s = 0.6, h = /* @__PURE__ */ new Map(), l = qn(y), g = Ln("tick", "end"), w = Ha();
  t == null && (t = []);
  function y() {
    v(), g.call("tick", r), i < a && (l.stop(), g.call("end", r));
  }
  function v(c) {
    var M, C = t.length, N;
    c === void 0 && (c = 1);
    for (var _ = 0; _ < c; ++_)
      for (i += (d - i) * u, h.forEach(function(T) {
        T(i);
      }), M = 0; M < C; ++M)
        N = t[M], N.fx == null ? N.x += N.vx *= s : (N.x = N.fx, N.vx = 0), n > 1 && (N.fy == null ? N.y += N.vy *= s : (N.y = N.fy, N.vy = 0)), n > 2 && (N.fz == null ? N.z += N.vz *= s : (N.z = N.fz, N.vz = 0));
    return r;
  }
  function x() {
    for (var c = 0, M = t.length, C; c < M; ++c) {
      if (C = t[c], C.index = c, C.fx != null && (C.x = C.fx), C.fy != null && (C.y = C.fy), C.fz != null && (C.z = C.fz), isNaN(C.x) || n > 1 && isNaN(C.y) || n > 2 && isNaN(C.z)) {
        var N = Va * (n > 2 ? Math.cbrt(0.5 + c) : n > 1 ? Math.sqrt(0.5 + c) : c), _ = c * Wa, T = c * Ja;
        n === 1 ? C.x = N : n === 2 ? (C.x = N * Math.cos(_), C.y = N * Math.sin(_)) : (C.x = N * Math.sin(_) * Math.cos(T), C.y = N * Math.cos(_), C.z = N * Math.sin(_) * Math.sin(T));
      }
      (isNaN(C.vx) || n > 1 && isNaN(C.vy) || n > 2 && isNaN(C.vz)) && (C.vx = 0, n > 1 && (C.vy = 0), n > 2 && (C.vz = 0));
    }
  }
  function m(c) {
    return c.initialize && c.initialize(t, w, n), c;
  }
  return x(), r = {
    tick: v,
    restart: function() {
      return l.restart(y), r;
    },
    stop: function() {
      return l.stop(), r;
    },
    numDimensions: function(c) {
      return arguments.length ? (n = Math.min(mn, Math.max(1, Math.round(c))), h.forEach(m), r) : n;
    },
    nodes: function(c) {
      return arguments.length ? (t = c, x(), h.forEach(m), r) : t;
    },
    alpha: function(c) {
      return arguments.length ? (i = +c, r) : i;
    },
    alphaMin: function(c) {
      return arguments.length ? (a = +c, r) : a;
    },
    alphaDecay: function(c) {
      return arguments.length ? (u = +c, r) : +u;
    },
    alphaTarget: function(c) {
      return arguments.length ? (d = +c, r) : d;
    },
    velocityDecay: function(c) {
      return arguments.length ? (s = 1 - c, r) : 1 - s;
    },
    randomSource: function(c) {
      return arguments.length ? (w = c, h.forEach(m), r) : w;
    },
    force: function(c, M) {
      return arguments.length > 1 ? (M == null ? h.delete(c) : h.set(c, m(M)), r) : h.get(c);
    },
    find: function() {
      var c = Array.prototype.slice.call(arguments), M = c.shift() || 0, C = (n > 1 ? c.shift() : null) || 0, N = (n > 2 ? c.shift() : null) || 0, _ = c.shift() || 1 / 0, T = 0, A = t.length, L, j, R, H, G, ue;
      for (_ *= _, T = 0; T < A; ++T)
        G = t[T], L = M - G.x, j = C - (G.y || 0), R = N - (G.z || 0), H = L * L + j * j + R * R, H < _ && (ue = G, _ = H);
      return ue;
    },
    on: function(c, M) {
      return arguments.length > 1 ? (g.on(c, M), r) : g.on(c);
    }
  };
}
function Ka() {
  var t, e, n, r, i, a = Le(-30), u, d = 1, s = 1 / 0, h = 0.81;
  function l(v) {
    var x, m = t.length, c = (e === 1 ? Bn(t, vt) : e === 2 ? Pn(t, vt, wn) : e === 3 ? zn(t, vt, wn, Qa) : null).visitAfter(w);
    for (i = v, x = 0; x < m; ++x)
      n = t[x], c.visit(y);
  }
  function g() {
    if (t) {
      var v, x = t.length, m;
      for (u = new Array(x), v = 0; v < x; ++v)
        m = t[v], u[m.index] = +a(m, v, t);
    }
  }
  function w(v) {
    var x = 0, m, c, M = 0, C, N, _, T, A = v.length;
    if (A) {
      for (C = N = _ = T = 0; T < A; ++T)
        (m = v[T]) && (c = Math.abs(m.value)) && (x += m.value, M += c, C += c * (m.x || 0), N += c * (m.y || 0), _ += c * (m.z || 0));
      x *= Math.sqrt(4 / A), v.x = C / M, e > 1 && (v.y = N / M), e > 2 && (v.z = _ / M);
    } else {
      m = v, m.x = m.data.x, e > 1 && (m.y = m.data.y), e > 2 && (m.z = m.data.z);
      do
        x += u[m.data.index];
      while (m = m.next);
    }
    v.value = x;
  }
  function y(v, x, m, c, M) {
    if (!v.value)
      return !0;
    var C = [m, c, M][e - 1], N = v.x - n.x, _ = e > 1 ? v.y - n.y : 0, T = e > 2 ? v.z - n.z : 0, A = C - x, L = N * N + _ * _ + T * T;
    if (A * A / h < L)
      return L < s && (N === 0 && (N = ce(r), L += N * N), e > 1 && _ === 0 && (_ = ce(r), L += _ * _), e > 2 && T === 0 && (T = ce(r), L += T * T), L < d && (L = Math.sqrt(d * L)), n.vx += N * v.value * i / L, e > 1 && (n.vy += _ * v.value * i / L), e > 2 && (n.vz += T * v.value * i / L)), !0;
    if (v.length || L >= s)
      return;
    (v.data !== n || v.next) && (N === 0 && (N = ce(r), L += N * N), e > 1 && _ === 0 && (_ = ce(r), L += _ * _), e > 2 && T === 0 && (T = ce(r), L += T * T), L < d && (L = Math.sqrt(d * L)));
    do
      v.data !== n && (A = u[v.data.index] * i / L, n.vx += N * A, e > 1 && (n.vy += _ * A), e > 2 && (n.vz += T * A));
    while (v = v.next);
  }
  return l.initialize = function(v, ...x) {
    t = v, r = x.find((m) => typeof m == "function") || Math.random, e = x.find((m) => [1, 2, 3].includes(m)) || 2, g();
  }, l.strength = function(v) {
    return arguments.length ? (a = typeof v == "function" ? v : Le(+v), g(), l) : a;
  }, l.distanceMin = function(v) {
    return arguments.length ? (d = v * v, l) : Math.sqrt(d);
  }, l.distanceMax = function(v) {
    return arguments.length ? (s = v * v, l) : Math.sqrt(s);
  }, l.theta = function(v) {
    return arguments.length ? (h = v * v, l) : Math.sqrt(h);
  }, l;
}
function _t(t) {
  return typeof t == "object" && t !== null && "index" in t && typeof t.index == "number" && "x" in t && typeof t.x == "number" && "y" in t && typeof t.y == "number" && "z" in t && typeof t.z == "number" && "vx" in t && typeof t.vx == "number" && "vy" in t && typeof t.vy == "number" && "vz" in t && typeof t.vz == "number";
}
function Ya(t) {
  return !!(typeof t == "object" && t !== null && Object.hasOwn(t, "index") && "index" in t && typeof t.index == "number" && "source" in t && _t(t.source) && "target" in t && _t(t.target));
}
class Za {
  constructor() {
    I(this, "d3ForceLayout");
    I(this, "d3AlphaMin", 0.1);
    I(this, "d3AlphaTarget", 0);
    I(this, "d3AlphaDecay", 0.0228);
    I(this, "d3VelocityDecay", 0.4);
    I(this, "nodeMapping", /* @__PURE__ */ new Map());
    I(this, "edgeMapping", /* @__PURE__ */ new Map());
    I(this, "newNodeMap", /* @__PURE__ */ new Map());
    I(this, "newEdgeMap", /* @__PURE__ */ new Map());
    I(this, "reheat", !1);
    this.d3ForceLayout = Xa().numDimensions(3).alpha(1).force("link", La()).force("charge", Ka()).force("center", qi()).force("dagRadial", null).stop(), this.d3ForceLayout.force("link").id((e) => e.id);
  }
  get graphNeedsRefresh() {
    return !!this.newNodeMap.size || !!this.newEdgeMap.size;
  }
  async init() {
  }
  refresh() {
    if (this.graphNeedsRefresh || this.reheat) {
      let e = [...this.nodeMapping.values()];
      e = e.concat([...this.newNodeMap.values()]), this.d3ForceLayout.alpha(1).nodes(e).stop();
      for (const r of this.newNodeMap.entries()) {
        const i = r[0], a = r[1];
        if (!_t(a))
          throw new Error("Internal error: Node is not settled as a complete D3 Node");
        this.nodeMapping.set(i, a);
      }
      this.newNodeMap.clear();
      let n = [...this.edgeMapping.values()];
      n = n.concat([...this.newEdgeMap.values()]), this.d3ForceLayout.force("link").links(n);
      for (const r of this.newEdgeMap.entries()) {
        const i = r[0], a = r[1];
        if (!Ya(a))
          throw new Error("Internal error: Edge is not settled as a complete D3 Edge");
        this.edgeMapping.set(i, a);
      }
      this.newEdgeMap.clear();
    }
  }
  step() {
    this.refresh(), this.d3ForceLayout.tick();
  }
  get isSettled() {
    return console.log(`this.d3ForceLayout.alpha() ${this.d3ForceLayout.alpha()}`), this.d3ForceLayout.alpha() < this.d3AlphaMin;
  }
  addNode(e) {
    this.newNodeMap.set(e, { id: e.id });
  }
  addEdge(e) {
    this.newEdgeMap.set(e, {
      source: e.srcId,
      target: e.dstId
    });
  }
  get nodes() {
    return this.nodeMapping.keys();
  }
  get edges() {
    return this.edgeMapping.keys();
  }
  getNodePosition(e) {
    const n = this._getMappedNode(e);
    if (n.x === void 0 || n.y === void 0 || n.z === void 0)
      throw new Error("Internal error: Node not initialized in D3GraphEngine");
    return {
      x: n.x,
      y: n.y,
      z: n.z
    };
  }
  setNodePosition(e, n) {
    const r = this._getMappedNode(e);
    r.x = n.x, r.y = n.y, r.z = n.z ?? 0, this.reheat = !0;
  }
  getEdgePosition(e) {
    const n = this._getMappedEdge(e);
    return {
      src: {
        x: n.source.x,
        y: n.source.y,
        z: n.source.z
      },
      dst: {
        x: n.target.x,
        y: n.target.y,
        z: n.target.z
      }
    };
  }
  pin(e) {
    const n = this._getMappedNode(e);
    n.fx = n.x, n.fy = n.y, n.fz = n.z, this.reheat = !0;
  }
  unpin(e) {
    const n = this._getMappedNode(e);
    n.fx = void 0, n.fy = void 0, n.fz = void 0, this.reheat = !0;
  }
  _getMappedNode(e) {
    this.refresh();
    const n = this.nodeMapping.get(e);
    if (!n)
      throw new Error("Internal error: Node not found in D3GraphEngine");
    return n;
  }
  _getMappedEdge(e) {
    this.refresh();
    const n = this.edgeMapping.get(e);
    if (!n)
      throw new Error("Internal error: Edge not found in D3GraphEngine");
    return n;
  }
}
const bn = /* @__PURE__ */ new Map();
class eo {
  constructor() {
    I(this, "hits", 0);
    I(this, "misses", 0);
  }
  get(e, n) {
    let r = bn.get(e);
    return r ? (this.hits++, r.createInstance(e)) : (this.misses++, r = n(), r.isVisible = !1, bn.set(e, r), r.createInstance(e));
  }
  reset() {
    this.hits = 0, this.misses = 0;
  }
}
var Tt = function(e) {
  no(e);
  var n = to(e);
  return e.on = n.on, e.off = n.off, e.fire = n.fire, e;
};
function to(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return {
    on: function(n, r, i) {
      if (typeof r != "function")
        throw new Error("callback is expected to be a function");
      var a = e[n];
      return a || (a = e[n] = []), a.push({ callback: r, ctx: i }), t;
    },
    off: function(n, r) {
      var i = typeof n > "u";
      if (i)
        return e = /* @__PURE__ */ Object.create(null), t;
      if (e[n]) {
        var a = typeof r != "function";
        if (a)
          delete e[n];
        else
          for (var u = e[n], d = 0; d < u.length; ++d)
            u[d].callback === r && u.splice(d, 1);
      }
      return t;
    },
    fire: function(n) {
      var r = e[n];
      if (!r)
        return t;
      var i;
      arguments.length > 1 && (i = Array.prototype.splice.call(arguments, 1));
      for (var a = 0; a < r.length; ++a) {
        var u = r[a];
        u.callback.apply(u.ctx, i);
      }
      return t;
    }
  };
}
function no(t) {
  if (!t)
    throw new Error("Eventify cannot use falsy object as events subject");
  for (var e = ["on", "fire", "off"], n = 0; n < e.length; ++n)
    if (t.hasOwnProperty(e[n]))
      throw new Error("Subject cannot be eventified, since it already has property '" + e[n] + "'");
}
var ro = ao, io = Tt;
function ao(t) {
  if (t = t || {}, "uniqueLinkId" in t && (console.warn(
    "ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",
    `
`,
    `Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`
  ), t.multigraph = t.uniqueLinkId), t.multigraph === void 0 && (t.multigraph = !1), typeof Map != "function")
    throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = {}, i = 0, a = t.multigraph ? N : C, u = [], d = $, s = $, h = $, l = $, g = {
    /**
     * Sometimes duck typing could be slow. Giving clients a hint about data structure
     * via explicit version number here:
     */
    version: 20,
    /**
     * Adds node to the graph. If node with given id already exists in the graph
     * its data is extended with whatever comes in 'data' argument.
     *
     * @param nodeId the node's identifier. A string or number is preferred.
     * @param [data] additional data for the node being added. If node already
     *   exists its data object is augmented with the new one.
     *
     * @return {node} The newly added node or node with given id if it already exists.
     */
    addNode: x,
    /**
     * Adds a link to the graph. The function always create a new
     * link between two nodes. If one of the nodes does not exists
     * a new node is created.
     *
     * @param fromId link start node id;
     * @param toId link end node id;
     * @param [data] additional data to be set on the new link;
     *
     * @return {link} The newly created link
     */
    addLink: M,
    /**
     * Removes link from the graph. If link does not exist does nothing.
     *
     * @param link - object returned by addLink() or getLinks() methods.
     *
     * @returns true if link was removed; false otherwise.
     */
    removeLink: L,
    /**
     * Removes node with given id from the graph. If node does not exist in the graph
     * does nothing.
     *
     * @param nodeId node's identifier passed to addNode() function.
     *
     * @returns true if node was removed; false otherwise.
     */
    removeNode: c,
    /**
     * Gets node with given identifier. If node does not exist undefined value is returned.
     *
     * @param nodeId requested node identifier;
     *
     * @return {node} in with requested identifier or undefined if no such node exists.
     */
    getNode: m,
    /**
     * Gets number of nodes in this graph.
     *
     * @return number of nodes in the graph.
     */
    getNodeCount: _,
    /**
     * Gets total number of links in the graph.
     */
    getLinkCount: T,
    /**
     * Gets total number of links in the graph.
     */
    getEdgeCount: T,
    /**
     * Synonym for `getLinkCount()`
     */
    getLinksCount: T,
    /**
     * Synonym for `getNodeCount()`
     */
    getNodesCount: _,
    /**
     * Gets all links (inbound and outbound) from the node with given id.
     * If node with given id is not found null is returned.
     *
     * @param nodeId requested node identifier.
     *
     * @return Set of links from and to requested node if such node exists;
     *   otherwise null is returned.
     */
    getLinks: A,
    /**
     * Invokes callback on each node of the graph.
     *
     * @param {Function(node)} callback Function to be invoked. The function
     *   is passed one argument: visited node.
     */
    forEachNode: se,
    /**
     * Invokes callback on every linked (adjacent) node to the given one.
     *
     * @param nodeId Identifier of the requested node.
     * @param {Function(node, link)} callback Function to be called on all linked nodes.
     *   The function is passed two parameters: adjacent node and link object itself.
     * @param oriented if true graph treated as oriented.
     */
    forEachLinkedNode: ue,
    /**
     * Enumerates all links in the graph
     *
     * @param {Function(link)} callback Function to be called on all links in the graph.
     *   The function is passed one parameter: graph's link object.
     *
     * Link object contains at least the following fields:
     *  fromId - node id where link starts;
     *  toId - node id where link ends,
     *  data - additional data passed to graph.addLink() method.
     */
    forEachLink: G,
    /**
     * Suspend all notifications about graph changes until
     * endUpdate is called.
     */
    beginUpdate: h,
    /**
     * Resumes all notifications about graph changes and fires
     * graph 'changed' event in case there are any pending changes.
     */
    endUpdate: l,
    /**
     * Removes all nodes and links from the graph.
     */
    clear: H,
    /**
     * Detects whether there is a link between two nodes.
     * Operation complexity is O(n) where n - number of links of a node.
     * NOTE: this function is synonym for getLink()
     *
     * @returns link if there is one. null otherwise.
     */
    hasLink: R,
    /**
     * Detects whether there is a node with given id
     * 
     * Operation complexity is O(1)
     * NOTE: this function is synonym for getNode()
     *
     * @returns node if there is one; Falsy value otherwise.
     */
    hasNode: m,
    /**
     * Gets an edge between two nodes.
     * Operation complexity is O(n) where n - number of links of a node.
     *
     * @param {string} fromId link start identifier
     * @param {string} toId link end identifier
     *
     * @returns link if there is one; undefined otherwise.
     */
    getLink: R
  };
  return io(g), w(), g;
  function w() {
    var B = g.on;
    g.on = P;
    function P() {
      return g.beginUpdate = h = Q, g.endUpdate = l = re, d = y, s = v, g.on = B, B.apply(g, arguments);
    }
  }
  function y(B, P) {
    u.push({
      link: B,
      changeType: P
    });
  }
  function v(B, P) {
    u.push({
      node: B,
      changeType: P
    });
  }
  function x(B, P) {
    if (B === void 0)
      throw new Error("Invalid node identifier");
    h();
    var F = m(B);
    return F ? (F.data = P, s(F, "update")) : (F = new oo(B, P), s(F, "add")), e.set(B, F), l(), F;
  }
  function m(B) {
    return e.get(B);
  }
  function c(B) {
    var P = m(B);
    if (!P)
      return !1;
    h();
    var F = P.links;
    return F && (F.forEach(j), P.links = null), e.delete(B), s(P, "remove"), l(), !0;
  }
  function M(B, P, F) {
    h();
    var z = m(B) || x(B), X = m(P) || x(P), J = a(B, P, F), K = n.has(J.id);
    return n.set(J.id, J), xn(z, J), B !== P && xn(X, J), d(J, K ? "update" : "add"), l(), J;
  }
  function C(B, P, F) {
    var z = Je(B, P), X = n.get(z);
    return X ? (X.data = F, X) : new _n(B, P, F, z);
  }
  function N(B, P, F) {
    var z = Je(B, P), X = r.hasOwnProperty(z);
    if (X || R(B, P)) {
      X || (r[z] = 0);
      var J = "@" + ++r[z];
      z = Je(B + J, P + J);
    }
    return new _n(B, P, F, z);
  }
  function _() {
    return e.size;
  }
  function T() {
    return n.size;
  }
  function A(B) {
    var P = m(B);
    return P ? P.links : null;
  }
  function L(B, P) {
    return P !== void 0 && (B = R(B, P)), j(B);
  }
  function j(B) {
    if (!B || !n.get(B.id))
      return !1;
    h(), n.delete(B.id);
    var P = m(B.fromId), F = m(B.toId);
    return P && P.links.delete(B), F && F.links.delete(B), d(B, "remove"), l(), !0;
  }
  function R(B, P) {
    if (!(B === void 0 || P === void 0))
      return n.get(Je(B, P));
  }
  function H() {
    h(), se(function(B) {
      c(B.id);
    }), l();
  }
  function G(B) {
    if (typeof B == "function")
      for (var P = n.values(), F = P.next(); !F.done; ) {
        if (B(F.value))
          return !0;
        F = P.next();
      }
  }
  function ue(B, P, F) {
    var z = m(B);
    if (z && z.links && typeof P == "function")
      return F ? b(z.links, B, P) : E(z.links, B, P);
  }
  function E(B, P, F) {
    for (var z, X = B.values(), J = X.next(); !J.done; ) {
      var K = J.value, qe = K.fromId === P ? K.toId : K.fromId;
      if (z = F(e.get(qe), K), z)
        return !0;
      J = X.next();
    }
  }
  function b(B, P, F) {
    for (var z, X = B.values(), J = X.next(); !J.done; ) {
      var K = J.value;
      if (K.fromId === P && (z = F(e.get(K.toId), K), z))
        return !0;
      J = X.next();
    }
  }
  function $() {
  }
  function Q() {
    i += 1;
  }
  function re() {
    i -= 1, i === 0 && u.length > 0 && (g.fire("changed", u), u.length = 0);
  }
  function se(B) {
    if (typeof B != "function")
      throw new Error("Function is expected to iterate over graph nodes. You passed " + B);
    for (var P = e.values(), F = P.next(); !F.done; ) {
      if (B(F.value))
        return !0;
      F = P.next();
    }
  }
}
function oo(t, e) {
  this.id = t, this.links = null, this.data = e;
}
function xn(t, e) {
  t.links ? t.links.add(e) : t.links = /* @__PURE__ */ new Set([e]);
}
function _n(t, e, n, r) {
  this.fromId = t, this.toId = e, this.data = n, this.id = r;
}
function Je(t, e) {
  return t.toString() + "👉 " + e.toString();
}
const so = /* @__PURE__ */ Mt(ro);
var $t = { exports: {} }, ke = { exports: {} }, Dn = function(e) {
  return e === 0 ? "x" : e === 1 ? "y" : e === 2 ? "z" : "c" + (e + 1);
};
const uo = Dn;
var Ee = function(e) {
  return n;
  function n(r, i) {
    let a = i && i.indent || 0, u = i && i.join !== void 0 ? i.join : `
`, d = Array(a + 1).join(" "), s = [];
    for (let h = 0; h < e; ++h) {
      let l = uo(h), g = h === 0 ? "" : d;
      s.push(g + r.replace(/{var}/g, l));
    }
    return s.join(u);
  }
};
const Gn = Ee;
ke.exports = ho;
ke.exports.generateCreateBodyFunctionBody = jn;
ke.exports.getVectorCode = Rn;
ke.exports.getBodyCode = Un;
function ho(t, e) {
  let n = jn(t, e), { Body: r } = new Function(n)();
  return r;
}
function jn(t, e) {
  return `
${Rn(t, e)}
${Un(t)}
return {Body: Body, Vector: Vector};
`;
}
function Un(t) {
  let e = Gn(t), n = e("{var}", { join: ", " });
  return `
function Body(${n}) {
  this.isPinned = false;
  this.pos = new Vector(${n});
  this.force = new Vector();
  this.velocity = new Vector();
  this.mass = 1;

  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.reset = function() {
  this.force.reset();
  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.setPosition = function (${n}) {
  ${e("this.pos.{var} = {var} || 0;", { indent: 2 })}
};`;
}
function Rn(t, e) {
  let n = Gn(t), r = "";
  return e && (r = `${n(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`), `function Vector(${n("{var}", { join: ", " })}) {
  ${r}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${n('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");', { indent: 4 })}
      ${n("this.{var} = v.{var};", { indent: 4 })}
    } else {
      ${n('this.{var} = typeof {var} === "number" ? {var} : 0;', { indent: 4 })}
    }
  }
  
  Vector.prototype.reset = function () {
    ${n("this.{var} = ", { join: "" })}0;
  };`;
}
var fo = ke.exports, ve = { exports: {} };
const St = Ee, pe = Dn;
ve.exports = co;
ve.exports.generateQuadTreeFunctionBody = Hn;
ve.exports.getInsertStackCode = Xn;
ve.exports.getQuadNodeCode = Jn;
ve.exports.isSamePosition = Qn;
ve.exports.getChildBodyCode = Wn;
ve.exports.setChildBodyCode = Vn;
function co(t) {
  let e = Hn(t);
  return new Function(e)();
}
function Hn(t) {
  let e = St(t), n = Math.pow(2, t);
  return `
${Xn()}
${Jn(t)}
${Qn(t)}
${Wn(t)}
${Vn(t)}

function createQuadTree(options, random) {
  options = options || {};
  options.gravity = typeof options.gravity === 'number' ? options.gravity : -1;
  options.theta = typeof options.theta === 'number' ? options.theta : 0.8;

  var gravity = options.gravity;
  var updateQueue = [];
  var insertStack = new InsertStack();
  var theta = options.theta;

  var nodesCache = [];
  var currentInCache = 0;
  var root = newNode();

  return {
    insertBodies: insertBodies,

    /**
     * Gets root node if it is present
     */
    getRoot: function() {
      return root;
    },

    updateBodyForce: update,

    options: function(newOptions) {
      if (newOptions) {
        if (typeof newOptions.gravity === 'number') {
          gravity = newOptions.gravity;
        }
        if (typeof newOptions.theta === 'number') {
          theta = newOptions.theta;
        }

        return this;
      }

      return {
        gravity: gravity,
        theta: theta
      };
    }
  };

  function newNode() {
    // To avoid pressure on GC we reuse nodes.
    var node = nodesCache[currentInCache];
    if (node) {
${u("      node.")}
      node.body = null;
      node.mass = ${e("node.mass_{var} = ", { join: "" })}0;
      ${e("node.min_{var} = node.max_{var} = ", { join: "" })}0;
    } else {
      node = new QuadNode();
      nodesCache[currentInCache] = node;
    }

    ++currentInCache;
    return node;
  }

  function update(sourceBody) {
    var queue = updateQueue;
    var v;
    ${e("var d{var};", { indent: 4 })}
    var r; 
    ${e("var f{var} = 0;", { indent: 4 })}
    var queueLength = 1;
    var shiftIdx = 0;
    var pushIdx = 1;

    queue[0] = root;

    while (queueLength) {
      var node = queue[shiftIdx];
      var body = node.body;

      queueLength -= 1;
      shiftIdx += 1;
      var differentBody = (body !== sourceBody);
      if (body && differentBody) {
        // If the current node is a leaf node (and it is not source body),
        // calculate the force exerted by the current node on body, and add this
        // amount to body's net force.
        ${e("d{var} = body.pos.{var} - sourceBody.pos.{var};", { indent: 8 })}
        r = Math.sqrt(${e("d{var} * d{var}", { join: " + " })});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;", { indent: 10 })}
          r = Math.sqrt(${e("d{var} * d{var}", { join: " + " })});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${e("f{var} += v * d{var};", { indent: 8 })}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${e("d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};", { indent: 8 })}
        r = Math.sqrt(${e("d{var} * d{var}", { join: " + " })});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;", { indent: 10 })}
          r = Math.sqrt(${e("d{var} * d{var}", { join: " + " })});
        }
        // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${pe(0)} - node.min_${pe(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};", { indent: 10 })}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${a()}
        }
      }
    }

    ${e("sourceBody.force.{var} += f{var};", { indent: 4 })}
  }

  function insertBodies(bodies) {
    ${e("var {var}min = Number.MAX_VALUE;", { indent: 4 })}
    ${e("var {var}max = Number.MIN_VALUE;", { indent: 4 })}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${e("if (pos.{var} < {var}min) {var}min = pos.{var};", { indent: 6 })}
      ${e("if (pos.{var} > {var}max) {var}max = pos.{var};", { indent: 6 })}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${e("if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;", { indent: 4 })}

    currentInCache = 0;
    root = newNode();
    ${e("root.min_{var} = {var}min;", { indent: 4 })}
    ${e("root.max_{var} = {var}min + maxSideLength;", { indent: 4 })}

    i = bodies.length - 1;
    if (i >= 0) {
      root.body = bodies[i];
    }
    while (i--) {
      insert(bodies[i], root);
    }
  }

  function insert(newBody) {
    insertStack.reset();
    insertStack.push(root, newBody);

    while (!insertStack.isEmpty()) {
      var stackItem = insertStack.pop();
      var node = stackItem.node;
      var body = stackItem.body;

      if (!node.body) {
        // This is internal node. Update the total mass of the node and center-of-mass.
        ${e("var {var} = body.pos.{var};", { indent: 8 })}
        node.mass += body.mass;
        ${e("node.mass_{var} += body.mass * {var};", { indent: 8 })}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${e("var min_{var} = node.min_{var};", { indent: 8 })}
        ${e("var max_{var} = (min_{var} + node.max_{var}) / 2;", { indent: 8 })}

${i(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${e("child.min_{var} = min_{var};", { indent: 10 })}
          ${e("child.max_{var} = max_{var};", { indent: 10 })}
          child.body = body;

          setChild(node, quadIdx, child);
        } else {
          // continue searching in this quadrant.
          insertStack.push(child, body);
        }
      } else {
        // We are trying to add to the leaf node.
        // We have to convert current leaf into internal node
        // and continue adding two nodes.
        var oldBody = node.body;
        node.body = null; // internal nodes do not cary bodies

        if (isSamePosition(oldBody.pos, body.pos)) {
          // Prevent infinite subdivision by bumping one node
          // anywhere in this quadrant
          var retriesCount = 3;
          do {
            var offset = random.nextDouble();
            ${e("var d{var} = (node.max_{var} - node.min_{var}) * offset;", { indent: 12 })}

            ${e("oldBody.pos.{var} = node.min_{var} + d{var};", { indent: 12 })}
            retriesCount -= 1;
            // Make sure we don't bump it out of the box. If we do, next iteration should fix it
          } while (retriesCount > 0 && isSamePosition(oldBody.pos, body.pos));

          if (retriesCount === 0 && isSamePosition(oldBody.pos, body.pos)) {
            // This is very bad, we ran out of precision.
            // if we do not return from the method we'll get into
            // infinite loop here. So we sacrifice correctness of layout, and keep the app running
            // Next layout iteration should get larger bounding box in the first step and fix this
            return;
          }
        }
        // Next iteration should subdivide node further.
        insertStack.push(node, oldBody);
        insertStack.push(node, body);
      }
    }
  }
}
return createQuadTree;

`;
  function i(d) {
    let s = [], h = Array(d + 1).join(" ");
    for (let l = 0; l < t; ++l)
      s.push(h + `if (${pe(l)} > max_${pe(l)}) {`), s.push(h + `  quadIdx = quadIdx + ${Math.pow(2, l)};`), s.push(h + `  min_${pe(l)} = max_${pe(l)};`), s.push(h + `  max_${pe(l)} = node.max_${pe(l)};`), s.push(h + "}");
    return s.join(`
`);
  }
  function a() {
    let d = Array(11).join(" "), s = [];
    for (let h = 0; h < n; ++h)
      s.push(d + `if (node.quad${h}) {`), s.push(d + `  queue[pushIdx] = node.quad${h};`), s.push(d + "  queueLength += 1;"), s.push(d + "  pushIdx += 1;"), s.push(d + "}");
    return s.join(`
`);
  }
  function u(d) {
    let s = [];
    for (let h = 0; h < n; ++h)
      s.push(`${d}quad${h} = null;`);
    return s.join(`
`);
  }
}
function Qn(t) {
  let e = St(t);
  return `
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});", { indent: 2 })}
  
    return ${e("d{var} < 1e-8", { join: " && " })};
  }  
`;
}
function Vn(t) {
  var e = Math.pow(2, t);
  return `
function setChild(node, idx, child) {
  ${n()}
}`;
  function n() {
    let r = [];
    for (let i = 0; i < e; ++i) {
      let a = i === 0 ? "  " : "  else ";
      r.push(`${a}if (idx === ${i}) node.quad${i} = child;`);
    }
    return r.join(`
`);
  }
}
function Wn(t) {
  return `function getChild(node, idx) {
${e()}
  return null;
}`;
  function e() {
    let n = [], r = Math.pow(2, t);
    for (let i = 0; i < r; ++i)
      n.push(`  if (idx === ${i}) return node.quad${i};`);
    return n.join(`
`);
  }
}
function Jn(t) {
  let e = St(t), n = Math.pow(2, t);
  var r = `
function QuadNode() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain bodies:
  this.body = null;

  // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3
${i("  this.")}

  // Total mass of current node
  this.mass = 0;

  // Center of mass coordinates
  ${e("this.mass_{var} = 0;", { indent: 2 })}

  // bounding box coordinates
  ${e("this.min_{var} = 0;", { indent: 2 })}
  ${e("this.max_{var} = 0;", { indent: 2 })}
}
`;
  return r;
  function i(a) {
    let u = [];
    for (let d = 0; d < n; ++d)
      u.push(`${a}quad${d} = null;`);
    return u.join(`
`);
  }
}
function Xn() {
  return `
/**
 * Our implementation of QuadTree is non-recursive to avoid GC hit
 * This data structure represent stack of elements
 * which we are trying to insert into quad tree.
 */
function InsertStack () {
    this.stack = [];
    this.popIdx = 0;
}

InsertStack.prototype = {
    isEmpty: function() {
        return this.popIdx === 0;
    },
    push: function (node, body) {
        var item = this.stack[this.popIdx];
        if (!item) {
            // we are trying to avoid memory pressure: create new element
            // only when absolutely necessary
            this.stack[this.popIdx] = new InsertStackElement(node, body);
        } else {
            item.node = node;
            item.body = body;
        }
        ++this.popIdx;
    },
    pop: function () {
        if (this.popIdx > 0) {
            return this.stack[--this.popIdx];
        }
    },
    reset: function () {
        this.popIdx = 0;
    }
};

function InsertStackElement(node, body) {
    this.node = node; // QuadTree node
    this.body = body; // physical body which needs to be inserted to node
}
`;
}
var lo = ve.exports, Bt = { exports: {} };
Bt.exports = go;
Bt.exports.generateFunctionBody = Kn;
const po = Ee;
function go(t) {
  let e = Kn(t);
  return new Function("bodies", "settings", "random", e);
}
function Kn(t) {
  let e = po(t);
  return `
  var boundingBox = {
    ${e("min_{var}: 0, max_{var}: 0,", { indent: 4 })}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${e("base_{var} = 0", { join: ", " })};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${e("base_{var} += neighborPos.{var};", { indent: 10 })}
        }

        ${e("base_{var} /= neighbors.length;", { indent: 8 })}
      } else {
        ${e("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;", { indent: 8 })}
      }

      var springLength = settings.springLength;
      return {
        ${e("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,", { indent: 8 })}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${e("var max_{var} = -Infinity;", { indent: 4 })}
    ${e("var min_{var} = Infinity;", { indent: 4 })}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${e("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};", { indent: 6 })}
      ${e("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};", { indent: 6 })}
    }

    ${e("boundingBox.min_{var} = min_{var};", { indent: 4 })}
    ${e("boundingBox.max_{var} = max_{var};", { indent: 4 })}
  }

  function resetBoundingBox() {
    ${e("boundingBox.min_{var} = boundingBox.max_{var} = 0;", { indent: 4 })}
  }
`;
}
var vo = Bt.exports, It = { exports: {} };
const yo = Ee;
It.exports = mo;
It.exports.generateCreateDragForceFunctionBody = Yn;
function mo(t) {
  let e = Yn(t);
  return new Function("options", e);
}
function Yn(t) {
  return `
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${yo(t)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};", { indent: 6 })}
    }
  };
`;
}
var wo = It.exports, Pt = { exports: {} };
const bo = Ee;
Pt.exports = xo;
Pt.exports.generateCreateSpringForceFunctionBody = Zn;
function xo(t) {
  let e = Zn(t);
  return new Function("options", "random", e);
}
function Zn(t) {
  let e = bo(t);
  return `
  if (!Number.isFinite(options.springCoefficient)) throw new Error('Spring coefficient is not a number');
  if (!Number.isFinite(options.springLength)) throw new Error('Spring length is not a number');

  return {
    /**
     * Updates forces acting on a spring
     */
    update: function (spring) {
      var body1 = spring.from;
      var body2 = spring.to;
      var length = spring.length < 0 ? options.springLength : spring.length;
      ${e("var d{var} = body2.pos.{var} - body1.pos.{var};", { indent: 6 })}
      var r = Math.sqrt(${e("d{var} * d{var}", { join: " + " })});

      if (r === 0) {
        ${e("d{var} = (random.nextDouble() - 0.5) / 50;", { indent: 8 })}
        r = Math.sqrt(${e("d{var} * d{var}", { join: " + " })});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${e("body1.force.{var} += coefficient * d{var}", { indent: 6 })};
      body1.springCount += 1;
      body1.springLength += r;

      ${e("body2.force.{var} -= coefficient * d{var}", { indent: 6 })};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`;
}
var _o = Pt.exports, At = { exports: {} };
const Mo = Ee;
At.exports = No;
At.exports.generateIntegratorFunctionBody = er;
function No(t) {
  let e = er(t);
  return new Function("bodies", "timeStep", "adaptiveTimeStepWeight", e);
}
function er(t) {
  let e = Mo(t);
  return `
  var length = bodies.length;
  if (length === 0) return 0;

  ${e("var d{var} = 0, t{var} = 0;", { indent: 2 })}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${e("body.velocity.{var} += coeff * body.force.{var};", { indent: 4 })}
    ${e("var v{var} = body.velocity.{var};", { indent: 4 })}
    var v = Math.sqrt(${e("v{var} * v{var}", { join: " + " })});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${e("body.velocity.{var} = v{var} / v;", { indent: 6 })}
    }

    ${e("d{var} = timeStep * body.velocity.{var};", { indent: 4 })}

    ${e("body.pos.{var} += d{var};", { indent: 4 })}

    ${e("t{var} += Math.abs(d{var});", { indent: 4 })}
  }

  return (${e("t{var} * t{var}", { join: " + " })})/length;
`;
}
var Co = At.exports, yt, Mn;
function Eo() {
  if (Mn)
    return yt;
  Mn = 1, yt = t;
  function t(e, n, r, i) {
    this.from = e, this.to = n, this.length = r, this.coefficient = i;
  }
  return yt;
}
var mt, Nn;
function To() {
  if (Nn)
    return mt;
  Nn = 1, mt = t;
  function t(e, n) {
    var r;
    if (e || (e = {}), n) {
      for (r in n)
        if (n.hasOwnProperty(r)) {
          var i = e.hasOwnProperty(r), a = typeof n[r], u = !i || typeof e[r] !== a;
          u ? e[r] = n[r] : a === "object" && (e[r] = t(e[r], n[r]));
        }
    }
    return e;
  }
  return mt;
}
var Pe = { exports: {} }, Cn;
function $o() {
  if (Cn)
    return Pe.exports;
  Cn = 1, Pe.exports = t, Pe.exports.random = t, Pe.exports.randomIterator = d;
  function t(s) {
    var h = typeof s == "number" ? s : +/* @__PURE__ */ new Date();
    return new e(h);
  }
  function e(s) {
    this.seed = s;
  }
  e.prototype.next = u, e.prototype.nextDouble = a, e.prototype.uniform = a, e.prototype.gaussian = n;
  function n() {
    var s, h, l;
    do
      h = this.nextDouble() * 2 - 1, l = this.nextDouble() * 2 - 1, s = h * h + l * l;
    while (s >= 1 || s === 0);
    return h * Math.sqrt(-2 * Math.log(s) / s);
  }
  e.prototype.levy = r;
  function r() {
    var s = 1.5, h = Math.pow(
      i(1 + s) * Math.sin(Math.PI * s / 2) / (i((1 + s) / 2) * s * Math.pow(2, (s - 1) / 2)),
      1 / s
    );
    return this.gaussian() * h / Math.pow(Math.abs(this.gaussian()), 1 / s);
  }
  function i(s) {
    return Math.sqrt(2 * Math.PI / s) * Math.pow(1 / Math.E * (s + 1 / (12 * s - 1 / (10 * s))), s);
  }
  function a() {
    var s = this.seed;
    return s = s + 2127912214 + (s << 12) & 4294967295, s = (s ^ 3345072700 ^ s >>> 19) & 4294967295, s = s + 374761393 + (s << 5) & 4294967295, s = (s + 3550635116 ^ s << 9) & 4294967295, s = s + 4251993797 + (s << 3) & 4294967295, s = (s ^ 3042594569 ^ s >>> 16) & 4294967295, this.seed = s, (s & 268435455) / 268435456;
  }
  function u(s) {
    return Math.floor(this.nextDouble() * s);
  }
  function d(s, h) {
    var l = h || t();
    if (typeof l.next != "function")
      throw new Error("customRandom does not match expected API: next() function is missing");
    return {
      forEach: w,
      /**
       * Shuffles array randomly, in place.
       */
      shuffle: g
    };
    function g() {
      var y, v, x;
      for (y = s.length - 1; y > 0; --y)
        v = l.next(y + 1), x = s[v], s[v] = s[y], s[y] = x;
      return s;
    }
    function w(y) {
      var v, x, m;
      for (v = s.length - 1; v > 0; --v)
        x = l.next(v + 1), m = s[x], s[x] = s[v], s[v] = m, y(m);
      s.length && y(s[0]);
    }
  }
  return Pe.exports;
}
var tr = Lo, So = fo, Bo = lo, Io = vo, Po = wo, Ao = _o, zo = Co, En = {};
function Lo(t) {
  var e = Eo(), n = To(), r = Tt;
  if (t) {
    if (t.springCoeff !== void 0)
      throw new Error("springCoeff was renamed to springCoefficient");
    if (t.dragCoeff !== void 0)
      throw new Error("dragCoeff was renamed to dragCoefficient");
  }
  t = n(t, {
    /**
     * Ideal length for links (springs in physical model).
     */
    springLength: 10,
    /**
     * Hook's law coefficient. 1 - solid spring.
     */
    springCoefficient: 0.8,
    /**
     * Coulomb's law coefficient. It's used to repel nodes thus should be negative
     * if you make it positive nodes start attract each other :).
     */
    gravity: -12,
    /**
     * Theta coefficient from Barnes Hut simulation. Ranged between (0, 1).
     * The closer it's to 1 the more nodes algorithm will have to go through.
     * Setting it to one makes Barnes Hut simulation no different from
     * brute-force forces calculation (each node is considered).
     */
    theta: 0.8,
    /**
     * Drag force coefficient. Used to slow down system, thus should be less than 1.
     * The closer it is to 0 the less tight system will be.
     */
    dragCoefficient: 0.9,
    // TODO: Need to rename this to something better. E.g. `dragCoefficient`
    /**
     * Default time step (dt) for forces integration
     */
    timeStep: 0.5,
    /**
     * Adaptive time step uses average spring length to compute actual time step:
     * See: https://twitter.com/anvaka/status/1293067160755957760
     */
    adaptiveTimeStepWeight: 0,
    /**
     * This parameter defines number of dimensions of the space where simulation
     * is performed. 
     */
    dimensions: 2,
    /**
     * In debug mode more checks are performed, this will help you catch errors
     * quickly, however for production build it is recommended to turn off this flag
     * to speed up computation.
     */
    debug: !1
  });
  var i = En[t.dimensions];
  if (!i) {
    var a = t.dimensions;
    i = {
      Body: So(a, t.debug),
      createQuadTree: Bo(a),
      createBounds: Io(a),
      createDragForce: Po(a),
      createSpringForce: Ao(a),
      integrate: zo(a)
    }, En[a] = i;
  }
  var u = i.Body, d = i.createQuadTree, s = i.createBounds, h = i.createDragForce, l = i.createSpringForce, g = i.integrate, w = (b) => new u(b), y = $o().random(42), v = [], x = [], m = d(t, y), c = s(v, t, y), M = l(t, y), C = h(t), N = 0, _ = [], T = /* @__PURE__ */ new Map(), A = 0;
  R("nbody", ue), R("spring", E);
  var L = {
    /**
     * Array of bodies, registered with current simulator
     *
     * Note: To add new body, use addBody() method. This property is only
     * exposed for testing/performance purposes.
     */
    bodies: v,
    quadTree: m,
    /**
     * Array of springs, registered with current simulator
     *
     * Note: To add new spring, use addSpring() method. This property is only
     * exposed for testing/performance purposes.
     */
    springs: x,
    /**
     * Returns settings with which current simulator was initialized
     */
    settings: t,
    /**
     * Adds a new force to simulation
     */
    addForce: R,
    /**
     * Removes a force from the simulation.
     */
    removeForce: H,
    /**
     * Returns a map of all registered forces.
     */
    getForces: G,
    /**
     * Performs one step of force simulation.
     *
     * @returns {boolean} true if system is considered stable; False otherwise.
     */
    step: function() {
      for (var b = 0; b < _.length; ++b)
        _[b](A);
      var $ = g(v, t.timeStep, t.adaptiveTimeStepWeight);
      return A += 1, $;
    },
    /**
     * Adds body to the system
     *
     * @param {ngraph.physics.primitives.Body} body physical body
     *
     * @returns {ngraph.physics.primitives.Body} added body
     */
    addBody: function(b) {
      if (!b)
        throw new Error("Body is required");
      return v.push(b), b;
    },
    /**
     * Adds body to the system at given position
     *
     * @param {Object} pos position of a body
     *
     * @returns {ngraph.physics.primitives.Body} added body
     */
    addBodyAt: function(b) {
      if (!b)
        throw new Error("Body position is required");
      var $ = w(b);
      return v.push($), $;
    },
    /**
     * Removes body from the system
     *
     * @param {ngraph.physics.primitives.Body} body to remove
     *
     * @returns {Boolean} true if body found and removed. falsy otherwise;
     */
    removeBody: function(b) {
      if (b) {
        var $ = v.indexOf(b);
        if (!($ < 0))
          return v.splice($, 1), v.length === 0 && c.reset(), !0;
      }
    },
    /**
     * Adds a spring to this simulation.
     *
     * @returns {Object} - a handle for a spring. If you want to later remove
     * spring pass it to removeSpring() method.
     */
    addSpring: function(b, $, Q, re) {
      if (!b || !$)
        throw new Error("Cannot add null spring to force simulator");
      typeof Q != "number" && (Q = -1);
      var se = new e(b, $, Q, re >= 0 ? re : -1);
      return x.push(se), se;
    },
    /**
     * Returns amount of movement performed on last step() call
     */
    getTotalMovement: function() {
      return N;
    },
    /**
     * Removes spring from the system
     *
     * @param {Object} spring to remove. Spring is an object returned by addSpring
     *
     * @returns {Boolean} true if spring found and removed. falsy otherwise;
     */
    removeSpring: function(b) {
      if (b) {
        var $ = x.indexOf(b);
        if ($ > -1)
          return x.splice($, 1), !0;
      }
    },
    getBestNewBodyPosition: function(b) {
      return c.getBestNewPosition(b);
    },
    /**
     * Returns bounding box which covers all bodies
     */
    getBBox: j,
    getBoundingBox: j,
    invalidateBBox: function() {
      console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call");
    },
    // TODO: Move the force specific stuff to force
    gravity: function(b) {
      return b !== void 0 ? (t.gravity = b, m.options({ gravity: b }), this) : t.gravity;
    },
    theta: function(b) {
      return b !== void 0 ? (t.theta = b, m.options({ theta: b }), this) : t.theta;
    },
    /**
     * Returns pseudo-random number generator instance.
     */
    random: y
  };
  return Fo(t, L), r(L), L;
  function j() {
    return c.update(), c.box;
  }
  function R(b, $) {
    if (T.has(b))
      throw new Error("Force " + b + " is already added");
    T.set(b, $), _.push($);
  }
  function H(b) {
    var $ = _.indexOf(T.get(b));
    $ < 0 || (_.splice($, 1), T.delete(b));
  }
  function G() {
    return T;
  }
  function ue() {
    if (v.length !== 0) {
      m.insertBodies(v);
      for (var b = v.length; b--; ) {
        var $ = v[b];
        $.isPinned || ($.reset(), m.updateBodyForce($), C.update($));
      }
    }
  }
  function E() {
    for (var b = x.length; b--; )
      M.update(x[b]);
  }
}
function Fo(t, e) {
  for (var n in t)
    Oo(t, e, n);
}
function Oo(t, e, n) {
  if (t.hasOwnProperty(n) && typeof e[n] != "function") {
    var r = Number.isFinite(t[n]);
    r ? e[n] = function(i) {
      if (i !== void 0) {
        if (!Number.isFinite(i))
          throw new Error("Value of " + n + " should be a valid number.");
        return t[n] = i, e;
      }
      return t[n];
    } : e[n] = function(i) {
      return i !== void 0 ? (t[n] = i, e) : t[n];
    };
  }
}
$t.exports = qo;
$t.exports.simulator = tr;
var ko = Tt;
function qo(t, e) {
  if (!t)
    throw new Error("Graph structure cannot be undefined");
  var n = e && e.createSimulator || tr, r = n(e);
  if (Array.isArray(e))
    throw new Error("Physics settings is expected to be an object");
  var i = t.version > 19 ? ue : G;
  e && typeof e.nodeMass == "function" && (i = e.nodeMass);
  var a = /* @__PURE__ */ new Map(), u = {}, d = 0, s = r.settings.springTransform || Do;
  C(), m();
  var h = !1, l = {
    /**
     * Performs one step of iterative layout algorithm
     *
     * @returns {boolean} true if the system should be considered stable; False otherwise.
     * The system is stable if no further call to `step()` can improve the layout.
     */
    step: function() {
      if (d === 0)
        return g(!0), !0;
      var E = r.step();
      l.lastMove = E, l.fire("step");
      var b = E / d, $ = b <= 0.01;
      return g($), $;
    },
    /**
     * For a given `nodeId` returns position
     */
    getNodePosition: function(E) {
      return H(E).pos;
    },
    /**
     * Sets position of a node to a given coordinates
     * @param {string} nodeId node identifier
     * @param {number} x position of a node
     * @param {number} y position of a node
     * @param {number=} z position of node (only if applicable to body)
     */
    setNodePosition: function(E) {
      var b = H(E);
      b.setPosition.apply(b, Array.prototype.slice.call(arguments, 1));
    },
    /**
     * @returns {Object} Link position by link id
     * @returns {Object.from} {x, y} coordinates of link start
     * @returns {Object.to} {x, y} coordinates of link end
     */
    getLinkPosition: function(E) {
      var b = u[E];
      if (b)
        return {
          from: b.from.pos,
          to: b.to.pos
        };
    },
    /**
     * @returns {Object} area required to fit in the graph. Object contains
     * `x1`, `y1` - top left coordinates
     * `x2`, `y2` - bottom right coordinates
     */
    getGraphRect: function() {
      return r.getBBox();
    },
    /**
     * Iterates over each body in the layout simulator and performs a callback(body, nodeId)
     */
    forEachBody: w,
    /*
     * Requests layout algorithm to pin/unpin node to its current position
     * Pinned nodes should not be affected by layout algorithm and always
     * remain at their position
     */
    pinNode: function(E, b) {
      var $ = H(E.id);
      $.isPinned = !!b;
    },
    /**
     * Checks whether given graph's node is currently pinned
     */
    isNodePinned: function(E) {
      return H(E.id).isPinned;
    },
    /**
     * Request to release all resources
     */
    dispose: function() {
      t.off("changed", M), l.fire("disposed");
    },
    /**
     * Gets physical body for a given node id. If node is not found undefined
     * value is returned.
     */
    getBody: x,
    /**
     * Gets spring for a given edge.
     *
     * @param {string} linkId link identifer. If two arguments are passed then
     * this argument is treated as formNodeId
     * @param {string=} toId when defined this parameter denotes head of the link
     * and first argument is treated as tail of the link (fromId)
     */
    getSpring: v,
    /**
     * Returns length of cumulative force vector. The closer this to zero - the more stable the system is
     */
    getForceVectorLength: y,
    /**
     * [Read only] Gets current physics simulator
     */
    simulator: r,
    /**
     * Gets the graph that was used for layout
     */
    graph: t,
    /**
     * Gets amount of movement performed during last step operation
     */
    lastMove: 0
  };
  return ko(l), l;
  function g(E) {
    h !== E && (h = E, c(E));
  }
  function w(E) {
    a.forEach(E);
  }
  function y() {
    var E = 0, b = 0;
    return w(function($) {
      E += Math.abs($.force.x), b += Math.abs($.force.y);
    }), Math.sqrt(E * E + b * b);
  }
  function v(E, b) {
    var $;
    if (b === void 0)
      typeof E != "object" ? $ = E : $ = E.id;
    else {
      var Q = t.hasLink(E, b);
      if (!Q)
        return;
      $ = Q.id;
    }
    return u[$];
  }
  function x(E) {
    return a.get(E);
  }
  function m() {
    t.on("changed", M);
  }
  function c(E) {
    l.fire("stable", E);
  }
  function M(E) {
    for (var b = 0; b < E.length; ++b) {
      var $ = E[b];
      $.changeType === "add" ? ($.node && N($.node.id), $.link && T($.link)) : $.changeType === "remove" && ($.node && _($.node), $.link && A($.link));
    }
    d = t.getNodesCount();
  }
  function C() {
    d = 0, t.forEachNode(function(E) {
      N(E.id), d += 1;
    }), t.forEachLink(T);
  }
  function N(E) {
    var b = a.get(E);
    if (!b) {
      var $ = t.getNode(E);
      if (!$)
        throw new Error("initBody() was called with unknown node id");
      var Q = $.position;
      if (!Q) {
        var re = L($);
        Q = r.getBestNewBodyPosition(re);
      }
      b = r.addBodyAt(Q), b.id = E, a.set(E, b), j(E), R($) && (b.isPinned = !0);
    }
  }
  function _(E) {
    var b = E.id, $ = a.get(b);
    $ && (a.delete(b), r.removeBody($));
  }
  function T(E) {
    j(E.fromId), j(E.toId);
    var b = a.get(E.fromId), $ = a.get(E.toId), Q = r.addSpring(b, $, E.length);
    s(E, Q), u[E.id] = Q;
  }
  function A(E) {
    var b = u[E.id];
    if (b) {
      var $ = t.getNode(E.fromId), Q = t.getNode(E.toId);
      $ && j($.id), Q && j(Q.id), delete u[E.id], r.removeSpring(b);
    }
  }
  function L(E) {
    var b = [];
    if (!E.links)
      return b;
    for (var $ = Math.min(E.links.length, 2), Q = 0; Q < $; ++Q) {
      var re = E.links[Q], se = re.fromId !== E.id ? a.get(re.fromId) : a.get(re.toId);
      se && se.pos && b.push(se);
    }
    return b;
  }
  function j(E) {
    var b = a.get(E);
    if (b.mass = i(E), Number.isNaN(b.mass))
      throw new Error("Node mass should be a number");
  }
  function R(E) {
    return E && (E.isPinned || E.data && E.data.isPinned);
  }
  function H(E) {
    var b = a.get(E);
    return b || (N(E), b = a.get(E)), b;
  }
  function G(E) {
    var b = t.getLinks(E);
    return b ? 1 + b.length / 3 : 1;
  }
  function ue(E) {
    var b = t.getLinks(E);
    return b ? 1 + b.size / 3 : 1;
  }
}
function Do() {
}
var Go = $t.exports;
const jo = /* @__PURE__ */ Mt(Go);
class Uo {
  constructor() {
    I(this, "ngraph");
    I(this, "ngraphLayout");
    I(this, "nodeMapping", /* @__PURE__ */ new Map());
    I(this, "edgeMapping", /* @__PURE__ */ new Map());
    I(this, "_settled", !0);
    this.ngraph = so(), this.ngraphLayout = jo(this.ngraph, { dimensions: 3 });
  }
  async init() {
  }
  step() {
    this._settled = this.ngraphLayout.step();
  }
  get isSettled() {
    return this._settled;
  }
  addNode(e) {
    const n = this.ngraph.addNode(e.id, { parentNode: e });
    this.nodeMapping.set(e, n), this._settled = !1;
  }
  addEdge(e) {
    const n = this.ngraph.addLink(e.srcId, e.dstId, { parentEdge: this });
    this.edgeMapping.set(e, n), this._settled = !1;
  }
  getNodePosition(e) {
    const n = this._getMappedNode(e);
    return this.ngraphLayout.getNodePosition(n.id);
  }
  setNodePosition(e, n) {
    const r = this._getMappedNode(e), i = this.ngraphLayout.getNodePosition(r.id);
    i.x = n.x, i.y = n.y, i.z = n.z;
  }
  getEdgePosition(e) {
    const n = this._getMappedEdge(e), r = this.ngraphLayout.getLinkPosition(n.id);
    return {
      src: {
        x: r.from.x,
        y: r.from.y,
        z: r.from.z
      },
      dst: {
        x: r.to.x,
        y: r.to.y,
        z: r.to.z
      }
    };
  }
  get nodes() {
    return this.nodeMapping.keys();
  }
  get edges() {
    return this.edgeMapping.keys();
  }
  pin(e) {
    const n = this._getMappedNode(e);
    this.ngraphLayout.pinNode(n, !0);
  }
  unpin(e) {
    const n = this._getMappedNode(e);
    this.ngraphLayout.pinNode(n, !1);
  }
  _getMappedNode(e) {
    const n = this.nodeMapping.get(e);
    if (!n)
      throw new Error("Internal error: Node not found in NGraphEngine");
    return n;
  }
  _getMappedEdge(e) {
    const n = this.edgeMapping.get(e);
    if (!n)
      throw new Error("Internal error: Edge not found in NGraphEngine");
    return n;
  }
}
class Ro {
  constructor(e) {
    I(this, "graph");
    I(this, "sceneInstrumentation");
    I(this, "babylonInstrumentation");
    I(this, "graphStep", new _e());
    I(this, "nodeUpdate", new _e());
    I(this, "edgeUpdate", new _e());
    I(this, "arrowCapUpdate", new _e());
    I(this, "intersectCalc", new _e());
    I(this, "loadTime", new _e());
    I(this, "totalUpdates", 0);
    this.graph = e, this.sceneInstrumentation = new _i(e.scene), this.sceneInstrumentation.captureFrameTime = !0, this.sceneInstrumentation.captureRenderTime = !0, this.sceneInstrumentation.captureInterFrameTime = !0, this.sceneInstrumentation.captureCameraRenderTime = !0, this.sceneInstrumentation.captureActiveMeshesEvaluationTime = !0, this.sceneInstrumentation.captureRenderTargetsRenderTime = !0, this.babylonInstrumentation = new Mi(e.engine), this.babylonInstrumentation.captureGPUFrameTime = !0, this.babylonInstrumentation.captureShaderCompilationTime = !0;
  }
  toString() {
    let e = "";
    function n(a, u, d = "") {
      e += `${a}: ${u}${d}
`;
    }
    function r(a) {
      e += `
${a}
`;
      for (let u = 0; u < a.length; u++)
        e += "-";
      e += `
`;
    }
    function i(a, u, d = 1) {
      e += `${a} (min/avg/last sec/max [total]): `, e += `${(u.min * d).toFixed(2)} / `, e += `${(u.average * d).toFixed(2)} / `, e += `${(u.lastSecAverage * d).toFixed(2)} / `, e += `${(u.max * d).toFixed(2)} `, e += `[${(u.total * d).toFixed(2)}] ms
`;
    }
    return r("Graph"), n("Num Nodes", this.numNodes), n("Num Edges", this.numEdges), n("Total Updates", this.totalUpdates), n("Mesh Cache Hits", this.meshCacheHits), n("Mesh Cache Misses", this.meshCacheMisses), n("Number of Node Updates", this.nodeUpdate.count), n("Number of Edge Updates", this.edgeUpdate.count), n("Number of ArrowCap Updates", this.arrowCapUpdate.count), r("Graph Engine Performance"), i("JSON Load Time", this.loadTime), i("Graph Physics Engine Time", this.graphStep), i("Node Update Time", this.nodeUpdate), i("Edge Update Time", this.edgeUpdate), i("Arrow Cap Update Time", this.arrowCapUpdate), i("Ray Intersect Calculation Time", this.intersectCalc), r("BabylonJS Performance"), n("Draw Calls", this.sceneInstrumentation.drawCallsCounter.count), i("GPU Time", this.babylonInstrumentation.gpuFrameTimeCounter, 1e-6), i("Shader Time", this.babylonInstrumentation.shaderCompilationTimeCounter), i("Mesh Evaluation Time", this.sceneInstrumentation.activeMeshesEvaluationTimeCounter), i("Render Targets Time", this.sceneInstrumentation.renderTargetsRenderTimeCounter), i("Draw Calls Time", this.sceneInstrumentation.drawCallsCounter), i("Frame Time", this.sceneInstrumentation.frameTimeCounter), i("Render Time", this.sceneInstrumentation.renderTimeCounter), i("Time Between Frames", this.sceneInstrumentation.interFrameTimeCounter), i("Camera Render Time", this.sceneInstrumentation.cameraRenderTimeCounter), e;
  }
  step() {
    this.totalUpdates++;
  }
  reset() {
    this.totalUpdates = 0;
  }
  get numNodes() {
    return Fe.list.size;
  }
  get numEdges() {
    return oe.list.size;
  }
  get meshCacheHits() {
    return this.graph.meshCache.hits;
  }
  get meshCacheMisses() {
    return this.graph.meshCache.misses;
  }
}
class Wo {
  constructor(e, n) {
    I(this, "config");
    I(this, "stats");
    // babylon
    I(this, "element");
    I(this, "canvas");
    I(this, "engine");
    I(this, "scene");
    I(this, "camera");
    I(this, "skybox");
    I(this, "meshCache");
    // graph engine
    I(this, "graphEngineType");
    I(this, "graphEngine");
    I(this, "running", !0);
    I(this, "pinOnDrag");
    // graph
    I(this, "fetchNodes");
    I(this, "fetchEdges");
    // observeables
    I(this, "graphObservable", new gt());
    I(this, "nodeObservable", new gt());
    I(this, "edgeObservable", new gt());
    if (this.config = Fi(n), this.meshCache = new eo(), this.fetchNodes = this.config.behavior.fetchNodes, this.fetchEdges = this.config.behavior.fetchEdges, typeof e == "string") {
      const r = document.getElementById(e);
      if (!r)
        throw new Error(`getElementById() could not find element '${e}'`);
      this.element = r;
    } else if (e instanceof HTMLElement)
      this.element = e;
    else
      throw new TypeError("Graph constructor requires 'element' argument that is either a string specifying the ID of the HTML element or an HTMLElement");
    if (this.element.innerHTML = "", this.canvas = document.createElement("canvas"), this.canvas.setAttribute("id", "babylonForceGraphRenderCanvas"), this.canvas.setAttribute("touch-action", "none"), this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.touchAction = "none", this.element.appendChild(this.canvas), this.engine = new wt(this.canvas, !0), this.scene = new Ni(this.engine), this.camera = new Ci(
      "camera",
      -Math.PI / 2,
      Math.PI / 2.5,
      this.config.style.startingCameraDistance,
      new ge(0, 0, 0)
    ), delete this.camera.lowerBetaLimit, delete this.camera.upperBetaLimit, this.camera.attachControl(this.canvas, !0), new Ei("light", new ge(1, 1, 0)), this.config.style.skybox && this.config.style.skybox.length && new Ti(
      "testdome",
      this.config.style.skybox,
      {
        resolution: 32,
        size: 1e3
      },
      this.scene
    ), this.config.engine.type === "ngraph")
      this.graphEngine = new Uo();
    else if (this.config.engine.type === "d3")
      this.graphEngine = new Za();
    else
      throw new TypeError(`Unknown graph engine type: '${this.graphEngineType}'`);
    this.stats = new Ro(this);
    for (let r = 0; r < this.config.engine.preSteps; r++)
      this.graphEngine.step();
  }
  async init() {
    this.engine.runRenderLoop(() => {
      this.update(), this.scene.render();
    }), navigator.xr && await this.scene.createDefaultXRExperienceAsync({
      disableTeleportation: !0
    }), window.addEventListener("resize", () => {
      this.engine.resize();
    });
  }
  update() {
    if (this.running) {
      this.stats.step(), this.stats.graphStep.beginMonitoring();
      for (let e = 0; e < this.config.engine.stepMultiplier; e++)
        this.graphEngine.step();
      this.stats.graphStep.endMonitoring(), this.stats.nodeUpdate.beginMonitoring();
      for (const e of this.graphEngine.nodes)
        e.update();
      this.stats.nodeUpdate.endMonitoring(), this.stats.edgeUpdate.beginMonitoring(), oe.updateRays(this);
      for (const e of this.graphEngine.edges)
        e.update();
      this.stats.edgeUpdate.endMonitoring(), this.graphEngine.isSettled && (this.graphObservable.notifyObservers({ type: "graph-settled", graph: this }), this.running = !1);
    }
  }
  addNode(e, n = {}) {
    return this.nodeObservable.notifyObservers({ type: "node-add-before", nodeId: e, metadata: n }), Fe.create(this, e, {
      nodeMeshConfig: this.config.style.node,
      pinOnDrag: this.pinOnDrag,
      metadata: n
    });
  }
  addEdge(e, n, r = {}) {
    return this.edgeObservable.notifyObservers({ type: "edge-add-before", srcNodeId: e, dstNodeId: n, metadata: r }), oe.create(this, e, n, {
      edgeMeshConfig: this.config.style.edge,
      metadata: r
    });
  }
  addListener(e, n) {
    switch (e) {
      case "graph-settled":
        this.graphObservable.add((r) => {
          r.type === e && n(r);
        });
        break;
      case "node-add-before":
        this.nodeObservable.add((r) => {
          r.type === e && n(r);
        });
        break;
      case "edge-add-before":
        this.edgeObservable.add((r) => {
          r.type === e && n(r);
        });
        break;
      default:
        throw new TypeError(`Unknown listener type in addListener: ${e}`);
    }
  }
  async loadJsonData(e, n = {}) {
    this.stats.loadTime.beginMonitoring();
    const { nodeListProp: r, edgeListProp: i, nodeIdProp: a, edgeSrcIdProp: u, edgeDstIdProp: d } = ki(n), h = await (await fetch(e, n.fetchOpts)).json();
    if (!Array.isArray(h[r]))
      throw TypeError(`when fetching JSON data: '${r}' was not an Array`);
    if (!Array.isArray(h[i]))
      throw TypeError(`when fetching JSON data: '${i}' was not an Array`);
    for (const l of h[r]) {
      const g = l[a], w = l;
      this.addNode(g, w);
    }
    for (const l of h[i]) {
      const g = l[u], w = l[d], y = l;
      this.addEdge(g, w, y);
    }
    this.stats.loadTime.endMonitoring();
  }
}
export {
  oe as Edge,
  Wo as Graph,
  Fe as Node,
  Vo as util
};
