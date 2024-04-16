var pi = Object.defineProperty;
var gi = (t, e, n) => e in t ? pi(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var P = (t, e, n) => (gi(t, typeof e != "symbol" ? e + "" : e, n), n);
import { SixDofDragBehavior as vi, ActionManager as on, ExecuteCodeAction as yi, StandardMaterial as sn, Color3 as _e, MeshBuilder as ae, DynamicTexture as un, Vector3 as ge, GreasedLineTools as mi, CreateGreasedLine as pt, GreasedLineMeshWidthDistribution as bi, RawTexture as fn, Engine as wt, GreasedLineMeshColorMode as wi, Ray as xi, SceneInstrumentation as _i, EngineInstrumentation as Mi, PerfCounter as Ve, Observable as gt, Scene as Ni, ArcRotateCamera as Ci, HemisphericLight as Ei, PhotoDome as Ti } from "@babylonjs/core";
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
function Me(t) {
  const e = Tn.get(t);
  return e || t;
}
const Qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colorMap: Tn,
  colorNameToHex: Me
}, Symbol.toStringTag, { value: "Module" })), hn = 1.618;
let Le = class D {
  constructor(e, n, r = {}) {
    P(this, "parentGraph");
    P(this, "id");
    P(this, "metadata");
    P(this, "mesh");
    P(this, "label");
    P(this, "meshDragBehavior");
    P(this, "dragging", !1);
    P(this, "nodeMeshConfig");
    P(this, "pinOnDrag");
    if (this.parentGraph = e, this.id = n, this.metadata = r.metadata ?? {}, this.nodeMeshConfig = this.parentGraph.config.style.node, this.parentGraph.graphEngine.addNode(this), this.mesh = this.nodeMeshConfig.nodeMeshFactory(this, this.parentGraph, this.nodeMeshConfig), this.mesh.metadata = { parentNode: this }, this.nodeMeshConfig.label && (this.label = D.createLabel(this.id.toString(), this, this.parentGraph), this.label.parent = this.mesh, this.label.position.y += 1), this.pinOnDrag = r.pinOnDrag ?? !0, this.meshDragBehavior = new vi(), this.mesh.addBehavior(this.meshDragBehavior), this.meshDragBehavior.onDragStartObservable.add(() => {
      this.parentGraph.running = !0, this.dragging = !0;
    }), this.meshDragBehavior.onDragEndObservable.add(() => {
      this.parentGraph.running = !0, this.pinOnDrag && this.pin(), this.dragging = !1;
    }), this.meshDragBehavior.onPositionChangedObservable.add((i) => {
      this.parentGraph.running = !0, this.parentGraph.graphEngine.setNodePosition(this, i.position);
    }), this.mesh.actionManager = this.mesh.actionManager ?? new on(this.parentGraph.scene), this.parentGraph.fetchNodes && this.parentGraph.fetchEdges) {
      const { fetchNodes: i, fetchEdges: a } = this.parentGraph;
      this.mesh.actionManager.registerAction(
        new yi(
          {
            trigger: on.OnDoublePickTrigger
            // trigger: ActionManager.OnLongPressTrigger,
          },
          () => {
            this.parentGraph.running = !0;
            const u = a(this, this.parentGraph), d = /* @__PURE__ */ new Set();
            u.forEach((f) => {
              d.add(f.src), d.add(f.dst);
            }), d.delete(this.id), i(d, this.parentGraph).forEach((f) => this.parentGraph.addNode(f.id, f.metadata)), u.forEach((f) => this.parentGraph.addEdge(f.src, f.dst, f.metadata));
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
        case "torus":
          i = D.createTorus(e, n, r);
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
      const a = new sn("defaultMaterial"), u = r.color;
      return a.diffuseColor = _e.FromHexString(Me(u)), a.wireframe = r.wireframe, a.freeze(), i.visibility = r.opacity, i.material = a, i;
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
    const a = "48px Verdana", s = 0.006944444444444444, l = new un("DynamicTexture", 64, r.scene).getContext();
    l.font = a;
    const g = l.measureText(e).width + 8, b = g * s, y = new un("DynamicTexture", { width: g, height: 72 }, r.scene, !1), v = new sn("mat", r.scene);
    v.specularColor = _e.Black(), y.hasAlpha = !0;
    const x = y.getContext();
    x.fillStyle = "white", x.beginPath();
    const m = 0, c = 0, M = [20, 20, 20, 20], C = g, N = 72;
    x.moveTo(m + M[0], c), x.lineTo(m + C - M[1], c), x.arc(m + C - M[1], c + M[1], M[1], 3 * Math.PI / 2, Math.PI * 2), x.lineTo(m + C, c + N - M[2]), x.arc(m + C - M[2], c + N - M[2], M[2], 0, Math.PI / 2), x.lineTo(m + M[3], c + N), x.arc(m + M[3], c + N - M[3], M[3], Math.PI / 2, Math.PI), x.lineTo(m, c + M[0]), x.arc(m + M[0], c + M[0], M[0], Math.PI, 3 * Math.PI / 2), x.closePath(), x.fill(), y.drawText(e, null, null, a, "#000000", "transparent", !0), v.opacityTexture = y, v.emissiveTexture = y, v.disableLighting = !0;
    const _ = ae.CreatePlane("plane", { width: b, height: 0.5 }, r.scene);
    return _.material = v, _.billboardMode = 7, _;
  }
};
const $i = /* @__PURE__ */ new Map(), vt = 0.5;
class se {
  constructor(e, n, r, i = {}) {
    P(this, "parentGraph");
    P(this, "srcId");
    P(this, "dstId");
    P(this, "dstNode");
    P(this, "srcNode");
    P(this, "metadata");
    P(this, "mesh");
    P(this, "arrowMesh", null);
    P(this, "edgeMeshConfig");
    this.parentGraph = e, this.srcId = n, this.dstId = r, this.metadata = i.metadata ?? {};
    const a = Le.list.get(n);
    if (!a)
      throw new Error(`Attempting to create edge '${n}->${r}', Node '${n}' hasn't been created yet.`);
    const u = Le.list.get(r);
    if (!u)
      throw new Error(`Attempting to create edge '${n}->${r}', Node '${r}' hasn't been created yet.`);
    this.srcNode = a, this.dstNode = u, this.edgeMeshConfig = this.parentGraph.config.style.edge, this.parentGraph.graphEngine.addEdge(this), this.mesh = this.edgeMeshConfig.edgeMeshFactory(this, this.parentGraph, this.edgeMeshConfig), this.mesh.metadata = {}, this.mesh.metadata.parentEdge = this;
  }
  update() {
    const e = this.parentGraph.graphEngine.getEdgePosition(this);
    this.parentGraph.edgeObservable.notifyObservers({ type: "edge-update-before", edge: this });
    const { srcPoint: n, dstPoint: r } = this.transformArrowCap();
    n && r ? this.transformEdgeMesh(
      n,
      r
    ) : this.transformEdgeMesh(
      // TODO: not sure about the performance impact of converting
      // this to vectors rather than just passing an array of points
      new ge(e.src.x, e.src.y, e.src.z),
      new ge(e.dst.x, e.dst.y, e.dst.z)
    ), this.parentGraph.edgeObservable.notifyObservers({ type: "edge-update-after", edge: this });
  }
  static get list() {
    return Bi;
  }
  static create(e, n, r, i = {}) {
    const a = se.list.get(n, r);
    if (a)
      return a;
    const u = new se(e, n, r, i);
    return se.list.set(n, r, u), u;
  }
  static defaultEdgeMeshFactory(e, n, r) {
    return r.arrowCap && (e.arrowMesh = n.meshCache.get("default-arrow-cap", () => {
      const i = mi.GetArrowCap(
        new ge(0, 0, -vt),
        // position
        new ge(0, 0, 1),
        // direction
        vt,
        // length
        4,
        // widthUp
        4
        // widthDown
      );
      return pt(
        "lines",
        {
          points: i.points,
          widths: i.widths,
          widthDistribution: bi.WIDTH_DISTRIBUTION_START
          // instance: line,
        },
        {
          color: _e.FromHexString(Me(r.color))
        }
        // e.parentGraph.scene
      );
    })), n.meshCache.get("default-edge", () => {
      switch (r.type) {
        case "plain":
          return se.createPlainLine(e, n, r);
        case "moving":
          return se.createMovingLine(e, n, r);
        default:
          throw new TypeError(`Unknown Edge type: '${r.type}'`);
      }
    });
  }
  static createPlainLine(e, n, r) {
    return pt(
      "edge-plain",
      { points: se.unitVectorPoints },
      { color: _e.FromHexString(Me(r.color)) }
    );
  }
  static createMovingLine(e, n, r) {
    const i = _e.FromHexString(Me(r.movingLineOpts.baseColor)), a = _e.FromHexString(Me(r.color)), u = Math.floor(i.r * 255), d = Math.floor(i.g * 255), s = Math.floor(i.b * 255), f = Math.floor(a.r * 255), l = Math.floor(a.g * 255), g = Math.floor(a.b * 255), b = new Uint8Array([u, d, s, f, l, g]), y = new fn(
      b,
      // data
      b.length / 3,
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
    y.wrapU = fn.WRAP_ADDRESSMODE, y.name = "moving-texture";
    const v = pt(
      "edge-moving",
      { points: se.unitVectorPoints },
      {
        // color: Color3.FromHexString(colorNameToHex(edgeColor))
        width: r.movingLineOpts.width,
        colorMode: wi.COLOR_MODE_MULTIPLY
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
      const { srcPoint: e, dstPoint: n, newEndPoint: r } = this.getInterceptPoints();
      if (!e || !n || !r)
        throw new Error("Internal Error: mesh intercept points not found");
      return this.arrowMesh.position = n, this.arrowMesh.lookAt(this.dstNode.mesh.position), {
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
    const e = this.srcNode.mesh, n = this.dstNode.mesh, r = new xi(this.srcNode.mesh.position, this.dstNode.mesh.position);
    r.position = n.position, r.direction = n.position.subtract(e.position);
    const i = r.intersectsMeshes([n]), a = r.intersectsMeshes([e]);
    let u = null, d = null, s = null;
    if (i.length && a.length) {
      d = i[0].pickedPoint, u = a[0].pickedPoint;
      const f = u.subtract(d).length(), l = f - vt, { x: g, y: b, z: y } = u, { x: v, y: x, z: m } = d, c = g + l / f * (v - g), M = b + l / f * (x - b), C = y + l / f * (m - y);
      s = new ge(c, M, C);
    }
    return {
      srcPoint: u,
      dstPoint: d,
      newEndPoint: s
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
class Si {
  constructor() {
    P(this, "map", /* @__PURE__ */ new Map());
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
const Bi = new Si();
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ke = { exports: {} };
Ke.exports;
(function(t, e) {
  var n = 200, r = "__lodash_hash_undefined__", i = 800, a = 16, u = 9007199254740991, d = "[object Arguments]", s = "[object Array]", f = "[object AsyncFunction]", l = "[object Boolean]", g = "[object Date]", b = "[object Error]", y = "[object Function]", v = "[object GeneratorFunction]", x = "[object Map]", m = "[object Number]", c = "[object Null]", M = "[object Object]", C = "[object Proxy]", N = "[object RegExp]", _ = "[object Set]", T = "[object String]", A = "[object Undefined]", L = "[object WeakMap]", j = "[object ArrayBuffer]", U = "[object DataView]", H = "[object Float32Array]", G = "[object Float64Array]", ue = "[object Int8Array]", E = "[object Int16Array]", w = "[object Int32Array]", $ = "[object Uint8Array]", Q = "[object Uint8ClampedArray]", re = "[object Uint16Array]", oe = "[object Uint32Array]", B = /[\\^$.*+?()[\]{}|]/g, I = /^\[object .+?Constructor\]$/, O = /^(?:0|[1-9]\d*)$/, z = {};
  z[H] = z[G] = z[ue] = z[E] = z[w] = z[$] = z[Q] = z[re] = z[oe] = !0, z[d] = z[s] = z[j] = z[l] = z[U] = z[g] = z[b] = z[y] = z[x] = z[m] = z[M] = z[N] = z[_] = z[T] = z[L] = !1;
  var X = typeof We == "object" && We && We.Object === Object && We, J = typeof self == "object" && self && self.Object === Object && self, K = X || J || Function("return this")(), ke = e && !e.nodeType && e, Ee = ke && !0 && t && !t.nodeType && t, Lt = Ee && Ee.exports === ke, tt = Lt && X.process, Ot = function() {
    try {
      var o = Ee && Ee.require && Ee.require("util").types;
      return o || tt && tt.binding && tt.binding("util");
    } catch {
    }
  }(), Ft = Ot && Ot.isTypedArray;
  function kt(o, h, p) {
    switch (p.length) {
      case 0:
        return o.call(h);
      case 1:
        return o.call(h, p[0]);
      case 2:
        return o.call(h, p[0], p[1]);
      case 3:
        return o.call(h, p[0], p[1], p[2]);
    }
    return o.apply(h, p);
  }
  function nr(o, h) {
    for (var p = -1, S = Array(o); ++p < o; )
      S[p] = h(p);
    return S;
  }
  function rr(o) {
    return function(h) {
      return o(h);
    };
  }
  function ir(o, h) {
    return o == null ? void 0 : o[h];
  }
  function ar(o, h) {
    return function(p) {
      return o(h(p));
    };
  }
  var or = Array.prototype, sr = Function.prototype, qe = Object.prototype, nt = K["__core-js_shared__"], De = sr.toString, fe = qe.hasOwnProperty, qt = function() {
    var o = /[^.]+$/.exec(nt && nt.keys && nt.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), Dt = qe.toString, ur = De.call(Object), fr = RegExp(
    "^" + De.call(fe).replace(B, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ge = Lt ? K.Buffer : void 0, Gt = K.Symbol, jt = K.Uint8Array, Rt = Ge ? Ge.allocUnsafe : void 0, Ut = ar(Object.getPrototypeOf, Object), Ht = Object.create, hr = qe.propertyIsEnumerable, dr = or.splice, ye = Gt ? Gt.toStringTag : void 0, je = function() {
    try {
      var o = ot(Object, "defineProperty");
      return o({}, "", {}), o;
    } catch {
    }
  }(), cr = Ge ? Ge.isBuffer : void 0, Qt = Math.max, lr = Date.now, Vt = ot(K, "Map"), Te = ot(Object, "create"), pr = /* @__PURE__ */ function() {
    function o() {
    }
    return function(h) {
      if (!de(h))
        return {};
      if (Ht)
        return Ht(h);
      o.prototype = h;
      var p = new o();
      return o.prototype = void 0, p;
    };
  }();
  function me(o) {
    var h = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++h < p; ) {
      var S = o[h];
      this.set(S[0], S[1]);
    }
  }
  function gr() {
    this.__data__ = Te ? Te(null) : {}, this.size = 0;
  }
  function vr(o) {
    var h = this.has(o) && delete this.__data__[o];
    return this.size -= h ? 1 : 0, h;
  }
  function yr(o) {
    var h = this.__data__;
    if (Te) {
      var p = h[o];
      return p === r ? void 0 : p;
    }
    return fe.call(h, o) ? h[o] : void 0;
  }
  function mr(o) {
    var h = this.__data__;
    return Te ? h[o] !== void 0 : fe.call(h, o);
  }
  function br(o, h) {
    var p = this.__data__;
    return this.size += this.has(o) ? 0 : 1, p[o] = Te && h === void 0 ? r : h, this;
  }
  me.prototype.clear = gr, me.prototype.delete = vr, me.prototype.get = yr, me.prototype.has = mr, me.prototype.set = br;
  function he(o) {
    var h = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++h < p; ) {
      var S = o[h];
      this.set(S[0], S[1]);
    }
  }
  function wr() {
    this.__data__ = [], this.size = 0;
  }
  function xr(o) {
    var h = this.__data__, p = Re(h, o);
    if (p < 0)
      return !1;
    var S = h.length - 1;
    return p == S ? h.pop() : dr.call(h, p, 1), --this.size, !0;
  }
  function _r(o) {
    var h = this.__data__, p = Re(h, o);
    return p < 0 ? void 0 : h[p][1];
  }
  function Mr(o) {
    return Re(this.__data__, o) > -1;
  }
  function Nr(o, h) {
    var p = this.__data__, S = Re(p, o);
    return S < 0 ? (++this.size, p.push([o, h])) : p[S][1] = h, this;
  }
  he.prototype.clear = wr, he.prototype.delete = xr, he.prototype.get = _r, he.prototype.has = Mr, he.prototype.set = Nr;
  function we(o) {
    var h = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++h < p; ) {
      var S = o[h];
      this.set(S[0], S[1]);
    }
  }
  function Cr() {
    this.size = 0, this.__data__ = {
      hash: new me(),
      map: new (Vt || he)(),
      string: new me()
    };
  }
  function Er(o) {
    var h = He(this, o).delete(o);
    return this.size -= h ? 1 : 0, h;
  }
  function Tr(o) {
    return He(this, o).get(o);
  }
  function $r(o) {
    return He(this, o).has(o);
  }
  function Sr(o, h) {
    var p = He(this, o), S = p.size;
    return p.set(o, h), this.size += p.size == S ? 0 : 1, this;
  }
  we.prototype.clear = Cr, we.prototype.delete = Er, we.prototype.get = Tr, we.prototype.has = $r, we.prototype.set = Sr;
  function xe(o) {
    var h = this.__data__ = new he(o);
    this.size = h.size;
  }
  function Br() {
    this.__data__ = new he(), this.size = 0;
  }
  function Pr(o) {
    var h = this.__data__, p = h.delete(o);
    return this.size = h.size, p;
  }
  function Ir(o) {
    return this.__data__.get(o);
  }
  function Ar(o) {
    return this.__data__.has(o);
  }
  function zr(o, h) {
    var p = this.__data__;
    if (p instanceof he) {
      var S = p.__data__;
      if (!Vt || S.length < n - 1)
        return S.push([o, h]), this.size = ++p.size, this;
      p = this.__data__ = new we(S);
    }
    return p.set(o, h), this.size = p.size, this;
  }
  xe.prototype.clear = Br, xe.prototype.delete = Pr, xe.prototype.get = Ir, xe.prototype.has = Ar, xe.prototype.set = zr;
  function Lr(o, h) {
    var p = ft(o), S = !p && ut(o), F = !p && !S && Zt(o), q = !p && !S && !F && tn(o), V = p || S || F || q, k = V ? nr(o.length, String) : [], W = k.length;
    for (var ie in o)
      (h || fe.call(o, ie)) && !(V && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ie == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      F && (ie == "offset" || ie == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      q && (ie == "buffer" || ie == "byteLength" || ie == "byteOffset") || // Skip index properties.
      Kt(ie, W))) && k.push(ie);
    return k;
  }
  function rt(o, h, p) {
    (p !== void 0 && !Qe(o[h], p) || p === void 0 && !(h in o)) && it(o, h, p);
  }
  function Or(o, h, p) {
    var S = o[h];
    (!(fe.call(o, h) && Qe(S, p)) || p === void 0 && !(h in o)) && it(o, h, p);
  }
  function Re(o, h) {
    for (var p = o.length; p--; )
      if (Qe(o[p][0], h))
        return p;
    return -1;
  }
  function it(o, h, p) {
    h == "__proto__" && je ? je(o, h, {
      configurable: !0,
      enumerable: !0,
      value: p,
      writable: !0
    }) : o[h] = p;
  }
  var Fr = Jr();
  function Ue(o) {
    return o == null ? o === void 0 ? A : c : ye && ye in Object(o) ? Xr(o) : ni(o);
  }
  function Wt(o) {
    return $e(o) && Ue(o) == d;
  }
  function kr(o) {
    if (!de(o) || ei(o))
      return !1;
    var h = dt(o) ? fr : I;
    return h.test(oi(o));
  }
  function qr(o) {
    return $e(o) && en(o.length) && !!z[Ue(o)];
  }
  function Dr(o) {
    if (!de(o))
      return ti(o);
    var h = Yt(o), p = [];
    for (var S in o)
      S == "constructor" && (h || !fe.call(o, S)) || p.push(S);
    return p;
  }
  function at(o, h, p, S, F) {
    o !== h && Fr(h, function(q, V) {
      if (F || (F = new xe()), de(q))
        Gr(o, h, V, p, at, S, F);
      else {
        var k = S ? S(st(o, V), q, V + "", o, h, F) : void 0;
        k === void 0 && (k = q), rt(o, V, k);
      }
    }, nn);
  }
  function Gr(o, h, p, S, F, q, V) {
    var k = st(o, p), W = st(h, p), ie = V.get(W);
    if (ie) {
      rt(o, p, ie);
      return;
    }
    var ne = q ? q(k, W, p + "", o, h, V) : void 0, Se = ne === void 0;
    if (Se) {
      var ct = ft(W), lt = !ct && Zt(W), an = !ct && !lt && tn(W);
      ne = W, ct || lt || an ? ft(k) ? ne = k : si(k) ? ne = Qr(k) : lt ? (Se = !1, ne = Rr(W, !0)) : an ? (Se = !1, ne = Hr(W, !0)) : ne = [] : ui(W) || ut(W) ? (ne = k, ut(k) ? ne = fi(k) : (!de(k) || dt(k)) && (ne = Kr(W))) : Se = !1;
    }
    Se && (V.set(W, ne), F(ne, W, S, q, V), V.delete(W)), rt(o, p, ne);
  }
  function Jt(o, h) {
    return ii(ri(o, h, rn), o + "");
  }
  var jr = je ? function(o, h) {
    return je(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: ci(h),
      writable: !0
    });
  } : rn;
  function Rr(o, h) {
    if (h)
      return o.slice();
    var p = o.length, S = Rt ? Rt(p) : new o.constructor(p);
    return o.copy(S), S;
  }
  function Ur(o) {
    var h = new o.constructor(o.byteLength);
    return new jt(h).set(new jt(o)), h;
  }
  function Hr(o, h) {
    var p = h ? Ur(o.buffer) : o.buffer;
    return new o.constructor(p, o.byteOffset, o.length);
  }
  function Qr(o, h) {
    var p = -1, S = o.length;
    for (h || (h = Array(S)); ++p < S; )
      h[p] = o[p];
    return h;
  }
  function Vr(o, h, p, S) {
    var F = !p;
    p || (p = {});
    for (var q = -1, V = h.length; ++q < V; ) {
      var k = h[q], W = S ? S(p[k], o[k], k, p, o) : void 0;
      W === void 0 && (W = o[k]), F ? it(p, k, W) : Or(p, k, W);
    }
    return p;
  }
  function Wr(o) {
    return Jt(function(h, p) {
      var S = -1, F = p.length, q = F > 1 ? p[F - 1] : void 0, V = F > 2 ? p[2] : void 0;
      for (q = o.length > 3 && typeof q == "function" ? (F--, q) : void 0, V && Yr(p[0], p[1], V) && (q = F < 3 ? void 0 : q, F = 1), h = Object(h); ++S < F; ) {
        var k = p[S];
        k && o(h, k, S, q);
      }
      return h;
    });
  }
  function Jr(o) {
    return function(h, p, S) {
      for (var F = -1, q = Object(h), V = S(h), k = V.length; k--; ) {
        var W = V[o ? k : ++F];
        if (p(q[W], W, q) === !1)
          break;
      }
      return h;
    };
  }
  function Xt(o, h, p, S, F, q) {
    return de(o) && de(h) && (q.set(h, o), at(o, h, void 0, Xt, q), q.delete(h)), o;
  }
  function He(o, h) {
    var p = o.__data__;
    return Zr(h) ? p[typeof h == "string" ? "string" : "hash"] : p.map;
  }
  function ot(o, h) {
    var p = ir(o, h);
    return kr(p) ? p : void 0;
  }
  function Xr(o) {
    var h = fe.call(o, ye), p = o[ye];
    try {
      o[ye] = void 0;
      var S = !0;
    } catch {
    }
    var F = Dt.call(o);
    return S && (h ? o[ye] = p : delete o[ye]), F;
  }
  function Kr(o) {
    return typeof o.constructor == "function" && !Yt(o) ? pr(Ut(o)) : {};
  }
  function Kt(o, h) {
    var p = typeof o;
    return h = h ?? u, !!h && (p == "number" || p != "symbol" && O.test(o)) && o > -1 && o % 1 == 0 && o < h;
  }
  function Yr(o, h, p) {
    if (!de(p))
      return !1;
    var S = typeof h;
    return (S == "number" ? ht(p) && Kt(h, p.length) : S == "string" && h in p) ? Qe(p[h], o) : !1;
  }
  function Zr(o) {
    var h = typeof o;
    return h == "string" || h == "number" || h == "symbol" || h == "boolean" ? o !== "__proto__" : o === null;
  }
  function ei(o) {
    return !!qt && qt in o;
  }
  function Yt(o) {
    var h = o && o.constructor, p = typeof h == "function" && h.prototype || qe;
    return o === p;
  }
  function ti(o) {
    var h = [];
    if (o != null)
      for (var p in Object(o))
        h.push(p);
    return h;
  }
  function ni(o) {
    return Dt.call(o);
  }
  function ri(o, h, p) {
    return h = Qt(h === void 0 ? o.length - 1 : h, 0), function() {
      for (var S = arguments, F = -1, q = Qt(S.length - h, 0), V = Array(q); ++F < q; )
        V[F] = S[h + F];
      F = -1;
      for (var k = Array(h + 1); ++F < h; )
        k[F] = S[F];
      return k[h] = p(V), kt(o, this, k);
    };
  }
  function st(o, h) {
    if (!(h === "constructor" && typeof o[h] == "function") && h != "__proto__")
      return o[h];
  }
  var ii = ai(jr);
  function ai(o) {
    var h = 0, p = 0;
    return function() {
      var S = lr(), F = a - (S - p);
      if (p = S, F > 0) {
        if (++h >= i)
          return arguments[0];
      } else
        h = 0;
      return o.apply(void 0, arguments);
    };
  }
  function oi(o) {
    if (o != null) {
      try {
        return De.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function Qe(o, h) {
    return o === h || o !== o && h !== h;
  }
  var ut = Wt(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Wt : function(o) {
    return $e(o) && fe.call(o, "callee") && !hr.call(o, "callee");
  }, ft = Array.isArray;
  function ht(o) {
    return o != null && en(o.length) && !dt(o);
  }
  function si(o) {
    return $e(o) && ht(o);
  }
  var Zt = cr || li;
  function dt(o) {
    if (!de(o))
      return !1;
    var h = Ue(o);
    return h == y || h == v || h == f || h == C;
  }
  function en(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= u;
  }
  function de(o) {
    var h = typeof o;
    return o != null && (h == "object" || h == "function");
  }
  function $e(o) {
    return o != null && typeof o == "object";
  }
  function ui(o) {
    if (!$e(o) || Ue(o) != M)
      return !1;
    var h = Ut(o);
    if (h === null)
      return !0;
    var p = fe.call(h, "constructor") && h.constructor;
    return typeof p == "function" && p instanceof p && De.call(p) == ur;
  }
  var tn = Ft ? rr(Ft) : qr;
  function fi(o) {
    return Vr(o, nn(o));
  }
  var hi = Jt(function(o) {
    return o.push(void 0, Xt), kt(di, void 0, o);
  });
  function nn(o) {
    return ht(o) ? Lr(o, !0) : Dr(o);
  }
  var di = Wr(function(o, h, p, S) {
    at(o, h, p, S);
  });
  function ci(o) {
    return function() {
      return o;
    };
  }
  function rn(o) {
    return o;
  }
  function li() {
    return !1;
  }
  t.exports = hi;
})(Ke, Ke.exports);
var Pi = Ke.exports;
const $n = /* @__PURE__ */ Nt(Pi), Ii = {
  size: 1,
  opacity: 1,
  wireframe: !1,
  color: "lightgrey",
  shape: "icosphere",
  nodeMeshFactory: Le.defaultNodeMeshFactory,
  label: !1
}, Ai = {
  type: "moving",
  color: "white",
  arrowCap: !1,
  movingLineOpts: {
    baseColor: "lightgrey",
    width: 0.25
  },
  edgeMeshFactory: se.defaultEdgeMeshFactory
}, zi = {
  style: {
    node: Ii,
    edge: Ai,
    skybox: ""
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
function Li(t) {
  return $n({}, t, zi);
}
const Oi = {
  nodeListProp: "nodes",
  edgeListProp: "edges",
  nodeIdProp: "id",
  edgeSrcIdProp: "src",
  edgeDstIdProp: "dst"
};
function Fi(t) {
  return $n({}, t, Oi);
}
function ki(t, e, n) {
  var r, i = 1;
  t == null && (t = 0), e == null && (e = 0), n == null && (n = 0);
  function a() {
    var u, d = r.length, s, f = 0, l = 0, g = 0;
    for (u = 0; u < d; ++u)
      s = r[u], f += s.x || 0, l += s.y || 0, g += s.z || 0;
    for (f = (f / d - t) * i, l = (l / d - e) * i, g = (g / d - n) * i, u = 0; u < d; ++u)
      s = r[u], f && (s.x -= f), l && (s.y -= l), g && (s.z -= g);
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
function qi(t) {
  const e = +this._x.call(null, t);
  return Sn(this.cover(e), e, t);
}
function Sn(t, e, n) {
  if (isNaN(e))
    return t;
  var r, i = t._root, a = { data: n }, u = t._x0, d = t._x1, s, f, l, g, b;
  if (!i)
    return t._root = a, t;
  for (; i.length; )
    if ((l = e >= (s = (u + d) / 2)) ? u = s : d = s, r = i, !(i = i[g = +l]))
      return r[g] = a, t;
  if (f = +t._x.call(null, i.data), e === f)
    return a.next = i, r ? r[g] = a : t._root = a, t;
  do
    r = r ? r[g] = new Array(2) : t._root = new Array(2), (l = e >= (s = (u + d) / 2)) ? u = s : d = s;
  while ((g = +l) == (b = +(f >= s)));
  return r[b] = i, r[g] = a, t;
}
function Di(t) {
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
function Gi(t) {
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
function ji() {
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
function Ui(t, e) {
  var n, r = this._x0, i, a, u = this._x1, d = [], s = this._root, f, l;
  for (s && d.push(new le(s, r, u)), e == null ? e = 1 / 0 : (r = t - e, u = t + e); f = d.pop(); )
    if (!(!(s = f.node) || (i = f.x0) > u || (a = f.x1) < r))
      if (s.length) {
        var g = (i + a) / 2;
        d.push(
          new le(s[1], g, a),
          new le(s[0], i, g)
        ), (l = +(t >= g)) && (f = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - l], d[d.length - 1 - l] = f);
      } else {
        var b = Math.abs(t - +this._x.call(null, s.data));
        b < e && (e = b, r = t - b, u = t + b, n = s.data);
      }
  return n;
}
function Hi(t) {
  if (isNaN(s = +this._x.call(null, t)))
    return this;
  var e, n = this._root, r, i, a, u = this._x0, d = this._x1, s, f, l, g, b;
  if (!n)
    return this;
  if (n.length)
    for (; ; ) {
      if ((l = s >= (f = (u + d) / 2)) ? u = f : d = f, e = n, !(n = n[g = +l]))
        return this;
      if (!n.length)
        break;
      e[g + 1 & 1] && (r = e, b = g);
    }
  for (; n.data !== t; )
    if (i = n, !(n = n.next))
      return this;
  return (a = n.next) && delete n.next, i ? (a ? i.next = a : delete i.next, this) : e ? (a ? e[g] = a : delete e[g], (n = e[0] || e[1]) && n === (e[1] || e[0]) && !n.length && (r ? r[b] = n : this._root = n), this) : (this._root = a, this);
}
function Qi(t) {
  for (var e = 0, n = t.length; e < n; ++e)
    this.remove(t[e]);
  return this;
}
function Vi() {
  return this._root;
}
function Wi() {
  var t = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++t;
      while (e = e.next);
  }), t;
}
function Ji(t) {
  var e = [], n, r = this._root, i, a, u;
  for (r && e.push(new le(r, this._x0, this._x1)); n = e.pop(); )
    if (!t(r = n.node, a = n.x0, u = n.x1) && r.length) {
      var d = (a + u) / 2;
      (i = r[1]) && e.push(new le(i, d, u)), (i = r[0]) && e.push(new le(i, a, d));
    }
  return this;
}
function Xi(t) {
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
function Ki(t) {
  return t[0];
}
function Yi(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function Bn(t, e) {
  var n = new Ct(e ?? Ki, NaN, NaN);
  return t == null ? n : n.addAll(t);
}
function Ct(t, e, n) {
  this._x = t, this._x0 = e, this._x1 = n, this._root = void 0;
}
function dn(t) {
  for (var e = { data: t.data }, n = e; t = t.next; )
    n = n.next = { data: t.data };
  return e;
}
var te = Bn.prototype = Ct.prototype;
te.copy = function() {
  var t = new Ct(this._x, this._x0, this._x1), e = this._root, n, r;
  if (!e)
    return t;
  if (!e.length)
    return t._root = dn(e), t;
  for (n = [{ source: e, target: t._root = new Array(2) }]; e = n.pop(); )
    for (var i = 0; i < 2; ++i)
      (r = e.source[i]) && (r.length ? n.push({ source: r, target: e.target[i] = new Array(2) }) : e.target[i] = dn(r));
  return t;
};
te.add = qi;
te.addAll = Di;
te.cover = Gi;
te.data = ji;
te.extent = Ri;
te.find = Ui;
te.remove = Hi;
te.removeAll = Qi;
te.root = Vi;
te.size = Wi;
te.visit = Ji;
te.visitAfter = Xi;
te.x = Yi;
function Zi(t) {
  const e = +this._x.call(null, t), n = +this._y.call(null, t);
  return Pn(this.cover(e, n), e, n, t);
}
function Pn(t, e, n, r) {
  if (isNaN(e) || isNaN(n))
    return t;
  var i, a = t._root, u = { data: r }, d = t._x0, s = t._y0, f = t._x1, l = t._y1, g, b, y, v, x, m, c, M;
  if (!a)
    return t._root = u, t;
  for (; a.length; )
    if ((x = e >= (g = (d + f) / 2)) ? d = g : f = g, (m = n >= (b = (s + l) / 2)) ? s = b : l = b, i = a, !(a = a[c = m << 1 | x]))
      return i[c] = u, t;
  if (y = +t._x.call(null, a.data), v = +t._y.call(null, a.data), e === y && n === v)
    return u.next = a, i ? i[c] = u : t._root = u, t;
  do
    i = i ? i[c] = new Array(4) : t._root = new Array(4), (x = e >= (g = (d + f) / 2)) ? d = g : f = g, (m = n >= (b = (s + l) / 2)) ? s = b : l = b;
  while ((c = m << 1 | x) === (M = (v >= b) << 1 | y >= g));
  return i[M] = a, i[c] = u, t;
}
function ea(t) {
  var e, n, r = t.length, i, a, u = new Array(r), d = new Array(r), s = 1 / 0, f = 1 / 0, l = -1 / 0, g = -1 / 0;
  for (n = 0; n < r; ++n)
    isNaN(i = +this._x.call(null, e = t[n])) || isNaN(a = +this._y.call(null, e)) || (u[n] = i, d[n] = a, i < s && (s = i), i > l && (l = i), a < f && (f = a), a > g && (g = a));
  if (s > l || f > g)
    return this;
  for (this.cover(s, f).cover(l, g), n = 0; n < r; ++n)
    Pn(this, u[n], d[n], t[n]);
  return this;
}
function ta(t, e) {
  if (isNaN(t = +t) || isNaN(e = +e))
    return this;
  var n = this._x0, r = this._y0, i = this._x1, a = this._y1;
  if (isNaN(n))
    i = (n = Math.floor(t)) + 1, a = (r = Math.floor(e)) + 1;
  else {
    for (var u = i - n || 1, d = this._root, s, f; n > t || t >= i || r > e || e >= a; )
      switch (f = (e < r) << 1 | t < n, s = new Array(4), s[f] = d, d = s, u *= 2, f) {
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
function na() {
  var t = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        t.push(e.data);
      while (e = e.next);
  }), t;
}
function ra(t) {
  return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function Z(t, e, n, r, i) {
  this.node = t, this.x0 = e, this.y0 = n, this.x1 = r, this.y1 = i;
}
function ia(t, e, n) {
  var r, i = this._x0, a = this._y0, u, d, s, f, l = this._x1, g = this._y1, b = [], y = this._root, v, x;
  for (y && b.push(new Z(y, i, a, l, g)), n == null ? n = 1 / 0 : (i = t - n, a = e - n, l = t + n, g = e + n, n *= n); v = b.pop(); )
    if (!(!(y = v.node) || (u = v.x0) > l || (d = v.y0) > g || (s = v.x1) < i || (f = v.y1) < a))
      if (y.length) {
        var m = (u + s) / 2, c = (d + f) / 2;
        b.push(
          new Z(y[3], m, c, s, f),
          new Z(y[2], u, c, m, f),
          new Z(y[1], m, d, s, c),
          new Z(y[0], u, d, m, c)
        ), (x = (e >= c) << 1 | t >= m) && (v = b[b.length - 1], b[b.length - 1] = b[b.length - 1 - x], b[b.length - 1 - x] = v);
      } else {
        var M = t - +this._x.call(null, y.data), C = e - +this._y.call(null, y.data), N = M * M + C * C;
        if (N < n) {
          var _ = Math.sqrt(n = N);
          i = t - _, a = e - _, l = t + _, g = e + _, r = y.data;
        }
      }
  return r;
}
function aa(t) {
  if (isNaN(l = +this._x.call(null, t)) || isNaN(g = +this._y.call(null, t)))
    return this;
  var e, n = this._root, r, i, a, u = this._x0, d = this._y0, s = this._x1, f = this._y1, l, g, b, y, v, x, m, c;
  if (!n)
    return this;
  if (n.length)
    for (; ; ) {
      if ((v = l >= (b = (u + s) / 2)) ? u = b : s = b, (x = g >= (y = (d + f) / 2)) ? d = y : f = y, e = n, !(n = n[m = x << 1 | v]))
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
function oa(t) {
  for (var e = 0, n = t.length; e < n; ++e)
    this.remove(t[e]);
  return this;
}
function sa() {
  return this._root;
}
function ua() {
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
      var f = (a + d) / 2, l = (u + s) / 2;
      (i = r[3]) && e.push(new Z(i, f, l, d, s)), (i = r[2]) && e.push(new Z(i, a, l, f, s)), (i = r[1]) && e.push(new Z(i, f, u, d, l)), (i = r[0]) && e.push(new Z(i, a, u, f, l));
    }
  return this;
}
function ha(t) {
  var e = [], n = [], r;
  for (this._root && e.push(new Z(this._root, this._x0, this._y0, this._x1, this._y1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var a, u = r.x0, d = r.y0, s = r.x1, f = r.y1, l = (u + s) / 2, g = (d + f) / 2;
      (a = i[0]) && e.push(new Z(a, u, d, l, g)), (a = i[1]) && e.push(new Z(a, l, d, s, g)), (a = i[2]) && e.push(new Z(a, u, g, l, f)), (a = i[3]) && e.push(new Z(a, l, g, s, f));
    }
    n.push(r);
  }
  for (; r = n.pop(); )
    t(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function da(t) {
  return t[0];
}
function ca(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function la(t) {
  return t[1];
}
function pa(t) {
  return arguments.length ? (this._y = t, this) : this._y;
}
function In(t, e, n) {
  var r = new Et(e ?? da, n ?? la, NaN, NaN, NaN, NaN);
  return t == null ? r : r.addAll(t);
}
function Et(t, e, n, r, i, a) {
  this._x = t, this._y = e, this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = a, this._root = void 0;
}
function cn(t) {
  for (var e = { data: t.data }, n = e; t = t.next; )
    n = n.next = { data: t.data };
  return e;
}
var ee = In.prototype = Et.prototype;
ee.copy = function() {
  var t = new Et(this._x, this._y, this._x0, this._y0, this._x1, this._y1), e = this._root, n, r;
  if (!e)
    return t;
  if (!e.length)
    return t._root = cn(e), t;
  for (n = [{ source: e, target: t._root = new Array(4) }]; e = n.pop(); )
    for (var i = 0; i < 4; ++i)
      (r = e.source[i]) && (r.length ? n.push({ source: r, target: e.target[i] = new Array(4) }) : e.target[i] = cn(r));
  return t;
};
ee.add = Zi;
ee.addAll = ea;
ee.cover = ta;
ee.data = na;
ee.extent = ra;
ee.find = ia;
ee.remove = aa;
ee.removeAll = oa;
ee.root = sa;
ee.size = ua;
ee.visit = fa;
ee.visitAfter = ha;
ee.x = ca;
ee.y = pa;
function ga(t) {
  const e = +this._x.call(null, t), n = +this._y.call(null, t), r = +this._z.call(null, t);
  return An(this.cover(e, n, r), e, n, r, t);
}
function An(t, e, n, r, i) {
  if (isNaN(e) || isNaN(n) || isNaN(r))
    return t;
  var a, u = t._root, d = { data: i }, s = t._x0, f = t._y0, l = t._z0, g = t._x1, b = t._y1, y = t._z1, v, x, m, c, M, C, N, _, T, A, L;
  if (!u)
    return t._root = d, t;
  for (; u.length; )
    if ((N = e >= (v = (s + g) / 2)) ? s = v : g = v, (_ = n >= (x = (f + b) / 2)) ? f = x : b = x, (T = r >= (m = (l + y) / 2)) ? l = m : y = m, a = u, !(u = u[A = T << 2 | _ << 1 | N]))
      return a[A] = d, t;
  if (c = +t._x.call(null, u.data), M = +t._y.call(null, u.data), C = +t._z.call(null, u.data), e === c && n === M && r === C)
    return d.next = u, a ? a[A] = d : t._root = d, t;
  do
    a = a ? a[A] = new Array(8) : t._root = new Array(8), (N = e >= (v = (s + g) / 2)) ? s = v : g = v, (_ = n >= (x = (f + b) / 2)) ? f = x : b = x, (T = r >= (m = (l + y) / 2)) ? l = m : y = m;
  while ((A = T << 2 | _ << 1 | N) === (L = (C >= m) << 2 | (M >= x) << 1 | c >= v));
  return a[L] = u, a[A] = d, t;
}
function va(t) {
  Array.isArray(t) || (t = Array.from(t));
  const e = t.length, n = new Float64Array(e), r = new Float64Array(e), i = new Float64Array(e);
  let a = 1 / 0, u = 1 / 0, d = 1 / 0, s = -1 / 0, f = -1 / 0, l = -1 / 0;
  for (let g = 0, b, y, v, x; g < e; ++g)
    isNaN(y = +this._x.call(null, b = t[g])) || isNaN(v = +this._y.call(null, b)) || isNaN(x = +this._z.call(null, b)) || (n[g] = y, r[g] = v, i[g] = x, y < a && (a = y), y > s && (s = y), v < u && (u = v), v > f && (f = v), x < d && (d = x), x > l && (l = x));
  if (a > s || u > f || d > l)
    return this;
  this.cover(a, u, d).cover(s, f, l);
  for (let g = 0; g < e; ++g)
    An(this, n[g], r[g], i[g], t[g]);
  return this;
}
function ya(t, e, n) {
  if (isNaN(t = +t) || isNaN(e = +e) || isNaN(n = +n))
    return this;
  var r = this._x0, i = this._y0, a = this._z0, u = this._x1, d = this._y1, s = this._z1;
  if (isNaN(r))
    u = (r = Math.floor(t)) + 1, d = (i = Math.floor(e)) + 1, s = (a = Math.floor(n)) + 1;
  else {
    for (var f = u - r || 1, l = this._root, g, b; r > t || t >= u || i > e || e >= d || a > n || n >= s; )
      switch (b = (n < a) << 2 | (e < i) << 1 | t < r, g = new Array(8), g[b] = l, l = g, f *= 2, b) {
        case 0:
          u = r + f, d = i + f, s = a + f;
          break;
        case 1:
          r = u - f, d = i + f, s = a + f;
          break;
        case 2:
          u = r + f, i = d - f, s = a + f;
          break;
        case 3:
          r = u - f, i = d - f, s = a + f;
          break;
        case 4:
          u = r + f, d = i + f, a = s - f;
          break;
        case 5:
          r = u - f, d = i + f, a = s - f;
          break;
        case 6:
          u = r + f, i = d - f, a = s - f;
          break;
        case 7:
          r = u - f, i = d - f, a = s - f;
          break;
      }
    this._root && this._root.length && (this._root = l);
  }
  return this._x0 = r, this._y0 = i, this._z0 = a, this._x1 = u, this._y1 = d, this._z1 = s, this;
}
function ma() {
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
function R(t, e, n, r, i, a, u) {
  this.node = t, this.x0 = e, this.y0 = n, this.z0 = r, this.x1 = i, this.y1 = a, this.z1 = u;
}
function wa(t, e, n, r) {
  var i, a = this._x0, u = this._y0, d = this._z0, s, f, l, g, b, y, v = this._x1, x = this._y1, m = this._z1, c = [], M = this._root, C, N;
  for (M && c.push(new R(M, a, u, d, v, x, m)), r == null ? r = 1 / 0 : (a = t - r, u = e - r, d = n - r, v = t + r, x = e + r, m = n + r, r *= r); C = c.pop(); )
    if (!(!(M = C.node) || (s = C.x0) > v || (f = C.y0) > x || (l = C.z0) > m || (g = C.x1) < a || (b = C.y1) < u || (y = C.z1) < d))
      if (M.length) {
        var _ = (s + g) / 2, T = (f + b) / 2, A = (l + y) / 2;
        c.push(
          new R(M[7], _, T, A, g, b, y),
          new R(M[6], s, T, A, _, b, y),
          new R(M[5], _, f, A, g, T, y),
          new R(M[4], s, f, A, _, T, y),
          new R(M[3], _, T, l, g, b, A),
          new R(M[2], s, T, l, _, b, A),
          new R(M[1], _, f, l, g, T, A),
          new R(M[0], s, f, l, _, T, A)
        ), (N = (n >= A) << 2 | (e >= T) << 1 | t >= _) && (C = c[c.length - 1], c[c.length - 1] = c[c.length - 1 - N], c[c.length - 1 - N] = C);
      } else {
        var L = t - +this._x.call(null, M.data), j = e - +this._y.call(null, M.data), U = n - +this._z.call(null, M.data), H = L * L + j * j + U * U;
        if (H < r) {
          var G = Math.sqrt(r = H);
          a = t - G, u = e - G, d = n - G, v = t + G, x = e + G, m = n + G, i = M.data;
        }
      }
  return i;
}
function xa(t) {
  if (isNaN(b = +this._x.call(null, t)) || isNaN(y = +this._y.call(null, t)) || isNaN(v = +this._z.call(null, t)))
    return this;
  var e, n = this._root, r, i, a, u = this._x0, d = this._y0, s = this._z0, f = this._x1, l = this._y1, g = this._z1, b, y, v, x, m, c, M, C, N, _, T;
  if (!n)
    return this;
  if (n.length)
    for (; ; ) {
      if ((M = b >= (x = (u + f) / 2)) ? u = x : f = x, (C = y >= (m = (d + l) / 2)) ? d = m : l = m, (N = v >= (c = (s + g) / 2)) ? s = c : g = c, e = n, !(n = n[_ = N << 2 | C << 1 | M]))
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
function _a(t) {
  for (var e = 0, n = t.length; e < n; ++e)
    this.remove(t[e]);
  return this;
}
function Ma() {
  return this._root;
}
function Na() {
  var t = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++t;
      while (e = e.next);
  }), t;
}
function Ca(t) {
  var e = [], n, r = this._root, i, a, u, d, s, f, l;
  for (r && e.push(new R(r, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); n = e.pop(); )
    if (!t(r = n.node, a = n.x0, u = n.y0, d = n.z0, s = n.x1, f = n.y1, l = n.z1) && r.length) {
      var g = (a + s) / 2, b = (u + f) / 2, y = (d + l) / 2;
      (i = r[7]) && e.push(new R(i, g, b, y, s, f, l)), (i = r[6]) && e.push(new R(i, a, b, y, g, f, l)), (i = r[5]) && e.push(new R(i, g, u, y, s, b, l)), (i = r[4]) && e.push(new R(i, a, u, y, g, b, l)), (i = r[3]) && e.push(new R(i, g, b, d, s, f, y)), (i = r[2]) && e.push(new R(i, a, b, d, g, f, y)), (i = r[1]) && e.push(new R(i, g, u, d, s, b, y)), (i = r[0]) && e.push(new R(i, a, u, d, g, b, y));
    }
  return this;
}
function Ea(t) {
  var e = [], n = [], r;
  for (this._root && e.push(new R(this._root, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var a, u = r.x0, d = r.y0, s = r.z0, f = r.x1, l = r.y1, g = r.z1, b = (u + f) / 2, y = (d + l) / 2, v = (s + g) / 2;
      (a = i[0]) && e.push(new R(a, u, d, s, b, y, v)), (a = i[1]) && e.push(new R(a, b, d, s, f, y, v)), (a = i[2]) && e.push(new R(a, u, y, s, b, l, v)), (a = i[3]) && e.push(new R(a, b, y, s, f, l, v)), (a = i[4]) && e.push(new R(a, u, d, v, b, y, g)), (a = i[5]) && e.push(new R(a, b, d, v, f, y, g)), (a = i[6]) && e.push(new R(a, u, y, v, b, l, g)), (a = i[7]) && e.push(new R(a, b, y, v, f, l, g));
    }
    n.push(r);
  }
  for (; r = n.pop(); )
    t(r.node, r.x0, r.y0, r.z0, r.x1, r.y1, r.z1);
  return this;
}
function Ta(t) {
  return t[0];
}
function $a(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function Sa(t) {
  return t[1];
}
function Ba(t) {
  return arguments.length ? (this._y = t, this) : this._y;
}
function Pa(t) {
  return t[2];
}
function Ia(t) {
  return arguments.length ? (this._z = t, this) : this._z;
}
function zn(t, e, n, r) {
  var i = new Tt(e ?? Ta, n ?? Sa, r ?? Pa, NaN, NaN, NaN, NaN, NaN, NaN);
  return t == null ? i : i.addAll(t);
}
function Tt(t, e, n, r, i, a, u, d, s) {
  this._x = t, this._y = e, this._z = n, this._x0 = r, this._y0 = i, this._z0 = a, this._x1 = u, this._y1 = d, this._z1 = s, this._root = void 0;
}
function ln(t) {
  for (var e = { data: t.data }, n = e; t = t.next; )
    n = n.next = { data: t.data };
  return e;
}
var Y = zn.prototype = Tt.prototype;
Y.copy = function() {
  var t = new Tt(this._x, this._y, this._z, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1), e = this._root, n, r;
  if (!e)
    return t;
  if (!e.length)
    return t._root = ln(e), t;
  for (n = [{ source: e, target: t._root = new Array(8) }]; e = n.pop(); )
    for (var i = 0; i < 8; ++i)
      (r = e.source[i]) && (r.length ? n.push({ source: r, target: e.target[i] = new Array(8) }) : e.target[i] = ln(r));
  return t;
};
Y.add = ga;
Y.addAll = va;
Y.cover = ya;
Y.data = ma;
Y.extent = ba;
Y.find = wa;
Y.remove = xa;
Y.removeAll = _a;
Y.root = Ma;
Y.size = Na;
Y.visit = Ca;
Y.visitAfter = Ea;
Y.x = $a;
Y.y = Ba;
Y.z = Ia;
function ze(t) {
  return function() {
    return t;
  };
}
function ce(t) {
  return (t() - 0.5) * 1e-6;
}
function Aa(t) {
  return t.index;
}
function pn(t, e) {
  var n = t.get(e);
  if (!n)
    throw new Error("node not found: " + e);
  return n;
}
function za(t) {
  var e = Aa, n = b, r, i = ze(30), a, u, d, s, f, l, g = 1;
  t == null && (t = []);
  function b(c) {
    return 1 / Math.min(s[c.source.index], s[c.target.index]);
  }
  function y(c) {
    for (var M = 0, C = t.length; M < g; ++M)
      for (var N = 0, _, T, A, L = 0, j = 0, U = 0, H, G; N < C; ++N)
        _ = t[N], T = _.source, A = _.target, L = A.x + A.vx - T.x - T.vx || ce(l), d > 1 && (j = A.y + A.vy - T.y - T.vy || ce(l)), d > 2 && (U = A.z + A.vz - T.z - T.vz || ce(l)), H = Math.sqrt(L * L + j * j + U * U), H = (H - a[N]) / H * c * r[N], L *= H, j *= H, U *= H, A.vx -= L * (G = f[N]), d > 1 && (A.vy -= j * G), d > 2 && (A.vz -= U * G), T.vx += L * (G = 1 - G), d > 1 && (T.vy += j * G), d > 2 && (T.vz += U * G);
  }
  function v() {
    if (u) {
      var c, M = u.length, C = t.length, N = new Map(u.map((T, A) => [e(T, A, u), T])), _;
      for (c = 0, s = new Array(M); c < C; ++c)
        _ = t[c], _.index = c, typeof _.source != "object" && (_.source = pn(N, _.source)), typeof _.target != "object" && (_.target = pn(N, _.target)), s[_.source.index] = (s[_.source.index] || 0) + 1, s[_.target.index] = (s[_.target.index] || 0) + 1;
      for (c = 0, f = new Array(C); c < C; ++c)
        _ = t[c], f[c] = s[_.source.index] / (s[_.source.index] + s[_.target.index]);
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
    return arguments.length ? (n = typeof c == "function" ? c : ze(+c), x(), y) : n;
  }, y.distance = function(c) {
    return arguments.length ? (i = typeof c == "function" ? c : ze(+c), m(), y) : i;
  }, y;
}
var La = { value: () => {
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
        if ((i = (t = r[a]).type) && (i = Fa(n[i], t.name)))
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
function Fa(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function gn(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = La, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Ne = 0, Ie = 0, Be = 0, On = 1e3, Ye, Ae, Ze = 0, be = 0, et = 0, Oe = typeof performance == "object" && performance.now ? performance : Date, Fn = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function kn() {
  return be || (Fn(ka), be = Oe.now() + et);
}
function ka() {
  be = 0;
}
function xt() {
  this._call = this._time = this._next = null;
}
xt.prototype = qn.prototype = {
  constructor: xt,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? kn() : +n) + (e == null ? 0 : +e), !this._next && Ae !== this && (Ae ? Ae._next = this : Ye = this, Ae = this), this._call = t, this._time = n, _t();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, _t());
  }
};
function qn(t, e, n) {
  var r = new xt();
  return r.restart(t, e, n), r;
}
function qa() {
  kn(), ++Ne;
  for (var t = Ye, e; t; )
    (e = be - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Ne;
}
function vn() {
  be = (Ze = Oe.now()) + et, Ne = Ie = 0;
  try {
    qa();
  } finally {
    Ne = 0, Ga(), be = 0;
  }
}
function Da() {
  var t = Oe.now(), e = t - Ze;
  e > On && (et -= e, Ze = t);
}
function Ga() {
  for (var t, e = Ye, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Ye = n);
  Ae = t, _t(r);
}
function _t(t) {
  if (!Ne) {
    Ie && (Ie = clearTimeout(Ie));
    var e = t - be;
    e > 24 ? (t < 1 / 0 && (Ie = setTimeout(vn, t - Oe.now() - et)), Be && (Be = clearInterval(Be))) : (Be || (Ze = Oe.now(), Be = setInterval(Da, On)), Ne = 1, Fn(vn));
  }
}
const ja = 1664525, Ra = 1013904223, yn = 4294967296;
function Ua() {
  let t = 1;
  return () => (t = (ja * t + Ra) % yn) / yn;
}
var mn = 3;
function yt(t) {
  return t.x;
}
function bn(t) {
  return t.y;
}
function Ha(t) {
  return t.z;
}
var Qa = 10, Va = Math.PI * (3 - Math.sqrt(5)), Wa = Math.PI * 20 / (9 + Math.sqrt(221));
function Ja(t, e) {
  e = e || 2;
  var n = Math.min(mn, Math.max(1, Math.round(e))), r, i = 1, a = 1e-3, u = 1 - Math.pow(a, 1 / 300), d = 0, s = 0.6, f = /* @__PURE__ */ new Map(), l = qn(y), g = Ln("tick", "end"), b = Ua();
  t == null && (t = []);
  function y() {
    v(), g.call("tick", r), i < a && (l.stop(), g.call("end", r));
  }
  function v(c) {
    var M, C = t.length, N;
    c === void 0 && (c = 1);
    for (var _ = 0; _ < c; ++_)
      for (i += (d - i) * u, f.forEach(function(T) {
        T(i);
      }), M = 0; M < C; ++M)
        N = t[M], N.fx == null ? N.x += N.vx *= s : (N.x = N.fx, N.vx = 0), n > 1 && (N.fy == null ? N.y += N.vy *= s : (N.y = N.fy, N.vy = 0)), n > 2 && (N.fz == null ? N.z += N.vz *= s : (N.z = N.fz, N.vz = 0));
    return r;
  }
  function x() {
    for (var c = 0, M = t.length, C; c < M; ++c) {
      if (C = t[c], C.index = c, C.fx != null && (C.x = C.fx), C.fy != null && (C.y = C.fy), C.fz != null && (C.z = C.fz), isNaN(C.x) || n > 1 && isNaN(C.y) || n > 2 && isNaN(C.z)) {
        var N = Qa * (n > 2 ? Math.cbrt(0.5 + c) : n > 1 ? Math.sqrt(0.5 + c) : c), _ = c * Va, T = c * Wa;
        n === 1 ? C.x = N : n === 2 ? (C.x = N * Math.cos(_), C.y = N * Math.sin(_)) : (C.x = N * Math.sin(_) * Math.cos(T), C.y = N * Math.cos(_), C.z = N * Math.sin(_) * Math.sin(T));
      }
      (isNaN(C.vx) || n > 1 && isNaN(C.vy) || n > 2 && isNaN(C.vz)) && (C.vx = 0, n > 1 && (C.vy = 0), n > 2 && (C.vz = 0));
    }
  }
  function m(c) {
    return c.initialize && c.initialize(t, b, n), c;
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
      return arguments.length ? (n = Math.min(mn, Math.max(1, Math.round(c))), f.forEach(m), r) : n;
    },
    nodes: function(c) {
      return arguments.length ? (t = c, x(), f.forEach(m), r) : t;
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
      return arguments.length ? (b = c, f.forEach(m), r) : b;
    },
    force: function(c, M) {
      return arguments.length > 1 ? (M == null ? f.delete(c) : f.set(c, m(M)), r) : f.get(c);
    },
    find: function() {
      var c = Array.prototype.slice.call(arguments), M = c.shift() || 0, C = (n > 1 ? c.shift() : null) || 0, N = (n > 2 ? c.shift() : null) || 0, _ = c.shift() || 1 / 0, T = 0, A = t.length, L, j, U, H, G, ue;
      for (_ *= _, T = 0; T < A; ++T)
        G = t[T], L = M - G.x, j = C - (G.y || 0), U = N - (G.z || 0), H = L * L + j * j + U * U, H < _ && (ue = G, _ = H);
      return ue;
    },
    on: function(c, M) {
      return arguments.length > 1 ? (g.on(c, M), r) : g.on(c);
    }
  };
}
function Xa() {
  var t, e, n, r, i, a = ze(-30), u, d = 1, s = 1 / 0, f = 0.81;
  function l(v) {
    var x, m = t.length, c = (e === 1 ? Bn(t, yt) : e === 2 ? In(t, yt, bn) : e === 3 ? zn(t, yt, bn, Ha) : null).visitAfter(b);
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
  function b(v) {
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
    if (A * A / f < L)
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
    return arguments.length ? (a = typeof v == "function" ? v : ze(+v), g(), l) : a;
  }, l.distanceMin = function(v) {
    return arguments.length ? (d = v * v, l) : Math.sqrt(d);
  }, l.distanceMax = function(v) {
    return arguments.length ? (s = v * v, l) : Math.sqrt(s);
  }, l.theta = function(v) {
    return arguments.length ? (f = v * v, l) : Math.sqrt(f);
  }, l;
}
function Mt(t) {
  return typeof t == "object" && t !== null && "index" in t && typeof t.index == "number" && "x" in t && typeof t.x == "number" && "y" in t && typeof t.y == "number" && "z" in t && typeof t.z == "number" && "vx" in t && typeof t.vx == "number" && "vy" in t && typeof t.vy == "number" && "vz" in t && typeof t.vz == "number";
}
function Ka(t) {
  return !!(typeof t == "object" && t !== null && Object.hasOwn(t, "index") && "index" in t && typeof t.index == "number" && "source" in t && Mt(t.source) && "target" in t && Mt(t.target));
}
class Ya {
  constructor() {
    P(this, "d3ForceLayout");
    P(this, "d3AlphaMin", 0.1);
    P(this, "d3AlphaTarget", 0);
    P(this, "d3AlphaDecay", 0.0228);
    P(this, "d3VelocityDecay", 0.4);
    P(this, "nodeMapping", /* @__PURE__ */ new Map());
    P(this, "edgeMapping", /* @__PURE__ */ new Map());
    P(this, "newNodeMap", /* @__PURE__ */ new Map());
    P(this, "newEdgeMap", /* @__PURE__ */ new Map());
    P(this, "reheat", !1);
    this.d3ForceLayout = Ja().numDimensions(3).alpha(1).force("link", za()).force("charge", Xa()).force("center", ki()).force("dagRadial", null).stop(), this.d3ForceLayout.force("link").id((e) => e.id);
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
        if (!Mt(a))
          throw new Error("Internal error: Node is not settled as a complete D3 Node");
        this.nodeMapping.set(i, a);
      }
      this.newNodeMap.clear();
      let n = [...this.edgeMapping.values()];
      n = n.concat([...this.newEdgeMap.values()]), this.d3ForceLayout.force("link").links(n);
      for (const r of this.newEdgeMap.entries()) {
        const i = r[0], a = r[1];
        if (!Ka(a))
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
const wn = /* @__PURE__ */ new Map();
class Za {
  constructor() {
    P(this, "hits", 0);
    P(this, "misses", 0);
  }
  get(e, n) {
    let r = wn.get(e);
    return r ? (this.hits++, r.createInstance(e)) : (this.misses++, r = n(), r.isVisible = !1, wn.set(e, r), r.createInstance(e));
  }
  reset() {
    this.hits = 0, this.misses = 0;
  }
}
var $t = function(e) {
  to(e);
  var n = eo(e);
  return e.on = n.on, e.off = n.off, e.fire = n.fire, e;
};
function eo(t) {
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
function to(t) {
  if (!t)
    throw new Error("Eventify cannot use falsy object as events subject");
  for (var e = ["on", "fire", "off"], n = 0; n < e.length; ++n)
    if (t.hasOwnProperty(e[n]))
      throw new Error("Subject cannot be eventified, since it already has property '" + e[n] + "'");
}
var no = io, ro = $t;
function io(t) {
  if (t = t || {}, "uniqueLinkId" in t && (console.warn(
    "ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",
    `
`,
    `Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`
  ), t.multigraph = t.uniqueLinkId), t.multigraph === void 0 && (t.multigraph = !1), typeof Map != "function")
    throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = {}, i = 0, a = t.multigraph ? N : C, u = [], d = $, s = $, f = $, l = $, g = {
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
    forEachNode: oe,
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
    beginUpdate: f,
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
    hasLink: U,
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
    getLink: U
  };
  return ro(g), b(), g;
  function b() {
    var B = g.on;
    g.on = I;
    function I() {
      return g.beginUpdate = f = Q, g.endUpdate = l = re, d = y, s = v, g.on = B, B.apply(g, arguments);
    }
  }
  function y(B, I) {
    u.push({
      link: B,
      changeType: I
    });
  }
  function v(B, I) {
    u.push({
      node: B,
      changeType: I
    });
  }
  function x(B, I) {
    if (B === void 0)
      throw new Error("Invalid node identifier");
    f();
    var O = m(B);
    return O ? (O.data = I, s(O, "update")) : (O = new ao(B, I), s(O, "add")), e.set(B, O), l(), O;
  }
  function m(B) {
    return e.get(B);
  }
  function c(B) {
    var I = m(B);
    if (!I)
      return !1;
    f();
    var O = I.links;
    return O && (O.forEach(j), I.links = null), e.delete(B), s(I, "remove"), l(), !0;
  }
  function M(B, I, O) {
    f();
    var z = m(B) || x(B), X = m(I) || x(I), J = a(B, I, O), K = n.has(J.id);
    return n.set(J.id, J), xn(z, J), B !== I && xn(X, J), d(J, K ? "update" : "add"), l(), J;
  }
  function C(B, I, O) {
    var z = Je(B, I), X = n.get(z);
    return X ? (X.data = O, X) : new _n(B, I, O, z);
  }
  function N(B, I, O) {
    var z = Je(B, I), X = r.hasOwnProperty(z);
    if (X || U(B, I)) {
      X || (r[z] = 0);
      var J = "@" + ++r[z];
      z = Je(B + J, I + J);
    }
    return new _n(B, I, O, z);
  }
  function _() {
    return e.size;
  }
  function T() {
    return n.size;
  }
  function A(B) {
    var I = m(B);
    return I ? I.links : null;
  }
  function L(B, I) {
    return I !== void 0 && (B = U(B, I)), j(B);
  }
  function j(B) {
    if (!B || !n.get(B.id))
      return !1;
    f(), n.delete(B.id);
    var I = m(B.fromId), O = m(B.toId);
    return I && I.links.delete(B), O && O.links.delete(B), d(B, "remove"), l(), !0;
  }
  function U(B, I) {
    if (!(B === void 0 || I === void 0))
      return n.get(Je(B, I));
  }
  function H() {
    f(), oe(function(B) {
      c(B.id);
    }), l();
  }
  function G(B) {
    if (typeof B == "function")
      for (var I = n.values(), O = I.next(); !O.done; ) {
        if (B(O.value))
          return !0;
        O = I.next();
      }
  }
  function ue(B, I, O) {
    var z = m(B);
    if (z && z.links && typeof I == "function")
      return O ? w(z.links, B, I) : E(z.links, B, I);
  }
  function E(B, I, O) {
    for (var z, X = B.values(), J = X.next(); !J.done; ) {
      var K = J.value, ke = K.fromId === I ? K.toId : K.fromId;
      if (z = O(e.get(ke), K), z)
        return !0;
      J = X.next();
    }
  }
  function w(B, I, O) {
    for (var z, X = B.values(), J = X.next(); !J.done; ) {
      var K = J.value;
      if (K.fromId === I && (z = O(e.get(K.toId), K), z))
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
  function oe(B) {
    if (typeof B != "function")
      throw new Error("Function is expected to iterate over graph nodes. You passed " + B);
    for (var I = e.values(), O = I.next(); !O.done; ) {
      if (B(O.value))
        return !0;
      O = I.next();
    }
  }
}
function ao(t, e) {
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
const oo = /* @__PURE__ */ Nt(no);
var St = { exports: {} }, Fe = { exports: {} }, Dn = function(e) {
  return e === 0 ? "x" : e === 1 ? "y" : e === 2 ? "z" : "c" + (e + 1);
};
const so = Dn;
var Ce = function(e) {
  return n;
  function n(r, i) {
    let a = i && i.indent || 0, u = i && i.join !== void 0 ? i.join : `
`, d = Array(a + 1).join(" "), s = [];
    for (let f = 0; f < e; ++f) {
      let l = so(f), g = f === 0 ? "" : d;
      s.push(g + r.replace(/{var}/g, l));
    }
    return s.join(u);
  }
};
const Gn = Ce;
Fe.exports = uo;
Fe.exports.generateCreateBodyFunctionBody = jn;
Fe.exports.getVectorCode = Un;
Fe.exports.getBodyCode = Rn;
function uo(t, e) {
  let n = jn(t, e), { Body: r } = new Function(n)();
  return r;
}
function jn(t, e) {
  return `
${Un(t, e)}
${Rn(t)}
return {Body: Body, Vector: Vector};
`;
}
function Rn(t) {
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
function Un(t, e) {
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
var fo = Fe.exports, ve = { exports: {} };
const Bt = Ce, pe = Dn;
ve.exports = ho;
ve.exports.generateQuadTreeFunctionBody = Hn;
ve.exports.getInsertStackCode = Xn;
ve.exports.getQuadNodeCode = Jn;
ve.exports.isSamePosition = Qn;
ve.exports.getChildBodyCode = Wn;
ve.exports.setChildBodyCode = Vn;
function ho(t) {
  let e = Hn(t);
  return new Function(e)();
}
function Hn(t) {
  let e = Bt(t), n = Math.pow(2, t);
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
    let s = [], f = Array(d + 1).join(" ");
    for (let l = 0; l < t; ++l)
      s.push(f + `if (${pe(l)} > max_${pe(l)}) {`), s.push(f + `  quadIdx = quadIdx + ${Math.pow(2, l)};`), s.push(f + `  min_${pe(l)} = max_${pe(l)};`), s.push(f + `  max_${pe(l)} = node.max_${pe(l)};`), s.push(f + "}");
    return s.join(`
`);
  }
  function a() {
    let d = Array(11).join(" "), s = [];
    for (let f = 0; f < n; ++f)
      s.push(d + `if (node.quad${f}) {`), s.push(d + `  queue[pushIdx] = node.quad${f};`), s.push(d + "  queueLength += 1;"), s.push(d + "  pushIdx += 1;"), s.push(d + "}");
    return s.join(`
`);
  }
  function u(d) {
    let s = [];
    for (let f = 0; f < n; ++f)
      s.push(`${d}quad${f} = null;`);
    return s.join(`
`);
  }
}
function Qn(t) {
  let e = Bt(t);
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
  let e = Bt(t), n = Math.pow(2, t);
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
var co = ve.exports, Pt = { exports: {} };
Pt.exports = po;
Pt.exports.generateFunctionBody = Kn;
const lo = Ce;
function po(t) {
  let e = Kn(t);
  return new Function("bodies", "settings", "random", e);
}
function Kn(t) {
  let e = lo(t);
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
var go = Pt.exports, It = { exports: {} };
const vo = Ce;
It.exports = yo;
It.exports.generateCreateDragForceFunctionBody = Yn;
function yo(t) {
  let e = Yn(t);
  return new Function("options", e);
}
function Yn(t) {
  return `
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${vo(t)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};", { indent: 6 })}
    }
  };
`;
}
var mo = It.exports, At = { exports: {} };
const bo = Ce;
At.exports = wo;
At.exports.generateCreateSpringForceFunctionBody = Zn;
function wo(t) {
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
var xo = At.exports, zt = { exports: {} };
const _o = Ce;
zt.exports = Mo;
zt.exports.generateIntegratorFunctionBody = er;
function Mo(t) {
  let e = er(t);
  return new Function("bodies", "timeStep", "adaptiveTimeStepWeight", e);
}
function er(t) {
  let e = _o(t);
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
var No = zt.exports, mt, Mn;
function Co() {
  if (Mn)
    return mt;
  Mn = 1, mt = t;
  function t(e, n, r, i) {
    this.from = e, this.to = n, this.length = r, this.coefficient = i;
  }
  return mt;
}
var bt, Nn;
function Eo() {
  if (Nn)
    return bt;
  Nn = 1, bt = t;
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
  return bt;
}
var Pe = { exports: {} }, Cn;
function To() {
  if (Cn)
    return Pe.exports;
  Cn = 1, Pe.exports = t, Pe.exports.random = t, Pe.exports.randomIterator = d;
  function t(s) {
    var f = typeof s == "number" ? s : +/* @__PURE__ */ new Date();
    return new e(f);
  }
  function e(s) {
    this.seed = s;
  }
  e.prototype.next = u, e.prototype.nextDouble = a, e.prototype.uniform = a, e.prototype.gaussian = n;
  function n() {
    var s, f, l;
    do
      f = this.nextDouble() * 2 - 1, l = this.nextDouble() * 2 - 1, s = f * f + l * l;
    while (s >= 1 || s === 0);
    return f * Math.sqrt(-2 * Math.log(s) / s);
  }
  e.prototype.levy = r;
  function r() {
    var s = 1.5, f = Math.pow(
      i(1 + s) * Math.sin(Math.PI * s / 2) / (i((1 + s) / 2) * s * Math.pow(2, (s - 1) / 2)),
      1 / s
    );
    return this.gaussian() * f / Math.pow(Math.abs(this.gaussian()), 1 / s);
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
  function d(s, f) {
    var l = f || t();
    if (typeof l.next != "function")
      throw new Error("customRandom does not match expected API: next() function is missing");
    return {
      forEach: b,
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
    function b(y) {
      var v, x, m;
      for (v = s.length - 1; v > 0; --v)
        x = l.next(v + 1), m = s[x], s[x] = s[v], s[v] = m, y(m);
      s.length && y(s[0]);
    }
  }
  return Pe.exports;
}
var tr = zo, $o = fo, So = co, Bo = go, Po = mo, Io = xo, Ao = No, En = {};
function zo(t) {
  var e = Co(), n = Eo(), r = $t;
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
      Body: $o(a, t.debug),
      createQuadTree: So(a),
      createBounds: Bo(a),
      createDragForce: Po(a),
      createSpringForce: Io(a),
      integrate: Ao(a)
    }, En[a] = i;
  }
  var u = i.Body, d = i.createQuadTree, s = i.createBounds, f = i.createDragForce, l = i.createSpringForce, g = i.integrate, b = (w) => new u(w), y = To().random(42), v = [], x = [], m = d(t, y), c = s(v, t, y), M = l(t, y), C = f(t), N = 0, _ = [], T = /* @__PURE__ */ new Map(), A = 0;
  U("nbody", ue), U("spring", E);
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
    addForce: U,
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
      for (var w = 0; w < _.length; ++w)
        _[w](A);
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
    addBody: function(w) {
      if (!w)
        throw new Error("Body is required");
      return v.push(w), w;
    },
    /**
     * Adds body to the system at given position
     *
     * @param {Object} pos position of a body
     *
     * @returns {ngraph.physics.primitives.Body} added body
     */
    addBodyAt: function(w) {
      if (!w)
        throw new Error("Body position is required");
      var $ = b(w);
      return v.push($), $;
    },
    /**
     * Removes body from the system
     *
     * @param {ngraph.physics.primitives.Body} body to remove
     *
     * @returns {Boolean} true if body found and removed. falsy otherwise;
     */
    removeBody: function(w) {
      if (w) {
        var $ = v.indexOf(w);
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
    addSpring: function(w, $, Q, re) {
      if (!w || !$)
        throw new Error("Cannot add null spring to force simulator");
      typeof Q != "number" && (Q = -1);
      var oe = new e(w, $, Q, re >= 0 ? re : -1);
      return x.push(oe), oe;
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
    removeSpring: function(w) {
      if (w) {
        var $ = x.indexOf(w);
        if ($ > -1)
          return x.splice($, 1), !0;
      }
    },
    getBestNewBodyPosition: function(w) {
      return c.getBestNewPosition(w);
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
    gravity: function(w) {
      return w !== void 0 ? (t.gravity = w, m.options({ gravity: w }), this) : t.gravity;
    },
    theta: function(w) {
      return w !== void 0 ? (t.theta = w, m.options({ theta: w }), this) : t.theta;
    },
    /**
     * Returns pseudo-random number generator instance.
     */
    random: y
  };
  return Lo(t, L), r(L), L;
  function j() {
    return c.update(), c.box;
  }
  function U(w, $) {
    if (T.has(w))
      throw new Error("Force " + w + " is already added");
    T.set(w, $), _.push($);
  }
  function H(w) {
    var $ = _.indexOf(T.get(w));
    $ < 0 || (_.splice($, 1), T.delete(w));
  }
  function G() {
    return T;
  }
  function ue() {
    if (v.length !== 0) {
      m.insertBodies(v);
      for (var w = v.length; w--; ) {
        var $ = v[w];
        $.isPinned || ($.reset(), m.updateBodyForce($), C.update($));
      }
    }
  }
  function E() {
    for (var w = x.length; w--; )
      M.update(x[w]);
  }
}
function Lo(t, e) {
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
St.exports = ko;
St.exports.simulator = tr;
var Fo = $t;
function ko(t, e) {
  if (!t)
    throw new Error("Graph structure cannot be undefined");
  var n = e && e.createSimulator || tr, r = n(e);
  if (Array.isArray(e))
    throw new Error("Physics settings is expected to be an object");
  var i = t.version > 19 ? ue : G;
  e && typeof e.nodeMass == "function" && (i = e.nodeMass);
  var a = /* @__PURE__ */ new Map(), u = {}, d = 0, s = r.settings.springTransform || qo;
  C(), m();
  var f = !1, l = {
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
      var w = E / d, $ = w <= 0.01;
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
      var w = H(E);
      w.setPosition.apply(w, Array.prototype.slice.call(arguments, 1));
    },
    /**
     * @returns {Object} Link position by link id
     * @returns {Object.from} {x, y} coordinates of link start
     * @returns {Object.to} {x, y} coordinates of link end
     */
    getLinkPosition: function(E) {
      var w = u[E];
      if (w)
        return {
          from: w.from.pos,
          to: w.to.pos
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
    forEachBody: b,
    /*
     * Requests layout algorithm to pin/unpin node to its current position
     * Pinned nodes should not be affected by layout algorithm and always
     * remain at their position
     */
    pinNode: function(E, w) {
      var $ = H(E.id);
      $.isPinned = !!w;
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
  return Fo(l), l;
  function g(E) {
    f !== E && (f = E, c(E));
  }
  function b(E) {
    a.forEach(E);
  }
  function y() {
    var E = 0, w = 0;
    return b(function($) {
      E += Math.abs($.force.x), w += Math.abs($.force.y);
    }), Math.sqrt(E * E + w * w);
  }
  function v(E, w) {
    var $;
    if (w === void 0)
      typeof E != "object" ? $ = E : $ = E.id;
    else {
      var Q = t.hasLink(E, w);
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
    for (var w = 0; w < E.length; ++w) {
      var $ = E[w];
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
    var w = a.get(E);
    if (!w) {
      var $ = t.getNode(E);
      if (!$)
        throw new Error("initBody() was called with unknown node id");
      var Q = $.position;
      if (!Q) {
        var re = L($);
        Q = r.getBestNewBodyPosition(re);
      }
      w = r.addBodyAt(Q), w.id = E, a.set(E, w), j(E), U($) && (w.isPinned = !0);
    }
  }
  function _(E) {
    var w = E.id, $ = a.get(w);
    $ && (a.delete(w), r.removeBody($));
  }
  function T(E) {
    j(E.fromId), j(E.toId);
    var w = a.get(E.fromId), $ = a.get(E.toId), Q = r.addSpring(w, $, E.length);
    s(E, Q), u[E.id] = Q;
  }
  function A(E) {
    var w = u[E.id];
    if (w) {
      var $ = t.getNode(E.fromId), Q = t.getNode(E.toId);
      $ && j($.id), Q && j(Q.id), delete u[E.id], r.removeSpring(w);
    }
  }
  function L(E) {
    var w = [];
    if (!E.links)
      return w;
    for (var $ = Math.min(E.links.length, 2), Q = 0; Q < $; ++Q) {
      var re = E.links[Q], oe = re.fromId !== E.id ? a.get(re.fromId) : a.get(re.toId);
      oe && oe.pos && w.push(oe);
    }
    return w;
  }
  function j(E) {
    var w = a.get(E);
    if (w.mass = i(E), Number.isNaN(w.mass))
      throw new Error("Node mass should be a number");
  }
  function U(E) {
    return E && (E.isPinned || E.data && E.data.isPinned);
  }
  function H(E) {
    var w = a.get(E);
    return w || (N(E), w = a.get(E)), w;
  }
  function G(E) {
    var w = t.getLinks(E);
    return w ? 1 + w.length / 3 : 1;
  }
  function ue(E) {
    var w = t.getLinks(E);
    return w ? 1 + w.size / 3 : 1;
  }
}
function qo() {
}
var Do = St.exports;
const Go = /* @__PURE__ */ Nt(Do);
class jo {
  constructor() {
    P(this, "ngraph");
    P(this, "ngraphLayout");
    P(this, "nodeMapping", /* @__PURE__ */ new Map());
    P(this, "edgeMapping", /* @__PURE__ */ new Map());
    P(this, "_settled", !0);
    this.ngraph = oo(), this.ngraphLayout = Go(this.ngraph, { dimensions: 3 });
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
    P(this, "graph");
    P(this, "sceneInstrumentation");
    P(this, "babylonInstrumentation");
    P(this, "graphStep");
    P(this, "nodeUpdate");
    P(this, "edgeUpdate");
    P(this, "loadTime");
    P(this, "totalUpdates", 0);
    this.graph = e, this.sceneInstrumentation = new _i(e.scene), this.sceneInstrumentation.captureFrameTime = !0, this.sceneInstrumentation.captureRenderTime = !0, this.sceneInstrumentation.captureInterFrameTime = !0, this.sceneInstrumentation.captureCameraRenderTime = !0, this.sceneInstrumentation.captureActiveMeshesEvaluationTime = !0, this.sceneInstrumentation.captureRenderTargetsRenderTime = !0, this.babylonInstrumentation = new Mi(e.engine), this.babylonInstrumentation.captureGPUFrameTime = !0, this.babylonInstrumentation.captureShaderCompilationTime = !0, this.graphStep = new Ve(), this.nodeUpdate = new Ve(), this.edgeUpdate = new Ve(), this.loadTime = new Ve();
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
    return r("Graph"), n("Num Nodes", this.numNodes), n("Num Edges", this.numEdges), n("Total Updates", this.totalUpdates), n("Mesh Cache Hits", this.meshCacheHits), n("Mesh Cache Misses", this.meshCacheMisses), r("Graph Engine Performance"), i("JSON Load Time", this.loadTime), i("Graph Physics Engine Time", this.graphStep), i("Node Update Time", this.nodeUpdate), i("Edge Update Time", this.edgeUpdate), r("BabylonJS Performance"), i("GPU Time", this.babylonInstrumentation.gpuFrameTimeCounter, 1e-6), i("Shader Time", this.babylonInstrumentation.shaderCompilationTimeCounter), i("Mesh Evaluation Time", this.sceneInstrumentation.activeMeshesEvaluationTimeCounter), i("Render Targets Time", this.sceneInstrumentation.renderTargetsRenderTimeCounter), i("Draw Calls Time", this.sceneInstrumentation.drawCallsCounter), i("Frame Time", this.sceneInstrumentation.frameTimeCounter), i("Render Time", this.sceneInstrumentation.renderTimeCounter), i("Time Between Frames", this.sceneInstrumentation.interFrameTimeCounter), i("Camera Render Time", this.sceneInstrumentation.cameraRenderTimeCounter), e;
  }
  step() {
    this.totalUpdates++;
  }
  reset() {
    this.totalUpdates = 0;
  }
  get numNodes() {
    return Le.list.size;
  }
  get numEdges() {
    return se.list.size;
  }
  get meshCacheHits() {
    return this.graph.meshCache.hits;
  }
  get meshCacheMisses() {
    return this.graph.meshCache.misses;
  }
}
class Vo {
  constructor(e, n) {
    P(this, "config");
    P(this, "stats");
    // babylon
    P(this, "element");
    P(this, "canvas");
    P(this, "engine");
    P(this, "scene");
    P(this, "camera");
    P(this, "skybox");
    P(this, "meshCache");
    // graph engine
    P(this, "graphEngineType");
    P(this, "graphEngine");
    P(this, "running", !0);
    P(this, "pinOnDrag");
    // graph
    P(this, "fetchNodes");
    P(this, "fetchEdges");
    // observeables
    P(this, "graphObservable", new gt());
    P(this, "nodeObservable", new gt());
    P(this, "edgeObservable", new gt());
    if (this.config = Li(n), this.meshCache = new Za(), this.fetchNodes = this.config.behavior.fetchNodes, this.fetchEdges = this.config.behavior.fetchEdges, typeof e == "string") {
      const r = document.getElementById(e);
      if (!r)
        throw new Error(`getElementById() could not find element '${e}'`);
      this.element = r;
    } else if (e instanceof HTMLElement)
      this.element = e;
    else
      throw new TypeError("Graph constructor requires 'element' argument that is either a string specifying the ID of the HTML element or an HTMLElement");
    if (this.element.innerHTML = "", this.canvas = document.createElement("canvas"), this.canvas.setAttribute("id", "babylonForceGraphRenderCanvas"), this.canvas.setAttribute("touch-action", "none"), this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.touchAction = "none", this.element.appendChild(this.canvas), this.engine = new wt(this.canvas, !0), this.scene = new Ni(this.engine), this.camera = new Ci("camera", -Math.PI / 2, Math.PI / 2.5, 30, new ge(0, 0, 0)), this.camera.attachControl(this.canvas, !0), new Ei("light", new ge(1, 1, 0)), this.config.style.skybox && this.config.style.skybox.length && new Ti(
      "testdome",
      this.config.style.skybox,
      {
        resolution: 32,
        size: 1e3
      },
      this.scene
    ), this.config.engine.type === "ngraph")
      this.graphEngine = new jo();
    else if (this.config.engine.type === "d3")
      this.graphEngine = new Ya();
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
      // floorMeshes: [ground]
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
      this.stats.nodeUpdate.endMonitoring(), this.stats.edgeUpdate.beginMonitoring();
      for (const e of this.graphEngine.edges)
        e.update();
      this.stats.edgeUpdate.endMonitoring(), this.graphEngine.isSettled && (this.graphObservable.notifyObservers({ type: "graph-settled", graph: this }), this.running = !1);
    }
  }
  addNode(e, n = {}) {
    return this.nodeObservable.notifyObservers({ type: "node-add-before", nodeId: e, metadata: n }), Le.create(this, e, {
      nodeMeshConfig: this.config.style.node,
      pinOnDrag: this.pinOnDrag,
      metadata: n
    });
  }
  addEdge(e, n, r = {}) {
    return this.edgeObservable.notifyObservers({ type: "edge-add-before", srcNodeId: e, dstNodeId: n, metadata: r }), se.create(this, e, n, {
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
    const { nodeListProp: r, edgeListProp: i, nodeIdProp: a, edgeSrcIdProp: u, edgeDstIdProp: d } = Fi(n), f = await (await fetch(e, n.fetchOpts)).json();
    if (!Array.isArray(f[r]))
      throw TypeError(`when fetching JSON data: '${r}' was not an Array`);
    if (!Array.isArray(f[i]))
      throw TypeError(`when fetching JSON data: '${i}' was not an Array`);
    for (const l of f[r]) {
      const g = l[a], b = l;
      this.addNode(g, b);
    }
    for (const l of f[i]) {
      const g = l[u], b = l[d], y = l;
      this.addEdge(g, b, y);
    }
    this.stats.loadTime.endMonitoring();
  }
}
export {
  se as Edge,
  Vo as Graph,
  Le as Node,
  Qo as util
};
