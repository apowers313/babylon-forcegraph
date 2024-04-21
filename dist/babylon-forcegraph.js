var gi = Object.defineProperty;
var vi = (n, e, t) => e in n ? gi(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var B = (n, e, t) => (vi(n, typeof e != "symbol" ? e + "" : e, t), t);
import { SixDofDragBehavior as yi, ActionManager as an, ExecuteCodeAction as mi, StandardMaterial as on, Color3 as Me, MeshBuilder as ae, DynamicTexture as sn, Ray as bi, Vector3 as ge, GreasedLineTools as wi, CreateGreasedLine as pt, GreasedLineMeshWidthDistribution as xi, RawTexture as un, Engine as bt, GreasedLineMeshColorMode as _i, PerfCounter as _e, SceneInstrumentation as Mi, EngineInstrumentation as Ni, Observable as gt, Scene as Ci, ArcRotateCamera as Ei, HemisphericLight as Ti, PhotoDome as $i, WebXREnterExitUIButton as Si } from "@babylonjs/core";
const $n = /* @__PURE__ */ new Map([
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
function Ne(n) {
  const e = $n.get(n);
  return e || n;
}
const Ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colorMap: $n,
  colorNameToHex: Ne
}, Symbol.toStringTag, { value: "Module" })), hn = 1.618;
let ke = class D {
  constructor(e, t, r = {}) {
    B(this, "parentGraph");
    B(this, "id");
    B(this, "metadata");
    B(this, "mesh");
    B(this, "label");
    B(this, "meshDragBehavior");
    B(this, "dragging", !1);
    B(this, "nodeMeshConfig");
    B(this, "pinOnDrag");
    if (this.parentGraph = e, this.id = t, this.metadata = r.metadata ?? {}, this.nodeMeshConfig = this.parentGraph.config.style.node, this.parentGraph.graphEngine.addNode(this), this.mesh = this.nodeMeshConfig.nodeMeshFactory(this, this.parentGraph, this.nodeMeshConfig), this.mesh.isPickable = !0, this.mesh.metadata = { parentNode: this }, this.nodeMeshConfig.label && (this.label = D.createLabel(this.id.toString(), this, this.parentGraph), this.label.parent = this.mesh, this.label.position.y += 1), this.pinOnDrag = r.pinOnDrag ?? !0, this.meshDragBehavior = new yi(), this.mesh.addBehavior(this.meshDragBehavior), this.meshDragBehavior.onDragStartObservable.add(() => {
      this.parentGraph.running = !0, this.dragging = !0;
    }), this.meshDragBehavior.onDragEndObservable.add(() => {
      this.parentGraph.running = !0, this.pinOnDrag && this.pin(), this.dragging = !1;
    }), this.meshDragBehavior.onPositionChangedObservable.add((i) => {
      this.parentGraph.running = !0, this.parentGraph.graphEngine.setNodePosition(this, i.position);
    }), this.mesh.actionManager = this.mesh.actionManager ?? new an(this.parentGraph.scene), this.parentGraph.fetchNodes && this.parentGraph.fetchEdges) {
      const { fetchNodes: i, fetchEdges: a } = this.parentGraph;
      this.mesh.actionManager.registerAction(
        new mi(
          {
            trigger: an.OnDoublePickTrigger
            // trigger: ActionManager.OnLongPressTrigger,
          },
          () => {
            this.parentGraph.running = !0;
            const u = a(this, this.parentGraph), f = /* @__PURE__ */ new Set();
            u.forEach((h) => {
              f.add(h.src), f.add(h.dst);
            }), f.delete(this.id), i(f, this.parentGraph).forEach((h) => this.parentGraph.addNode(h.id, h.metadata)), u.forEach((h) => this.parentGraph.addEdge(h.src, h.dst, h.metadata));
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
    return Bi;
  }
  static create(e, t, r = {}) {
    const i = D.list.get(t);
    if (i)
      return i;
    const a = new D(e, t, r);
    return D.list.set(t, a), a;
  }
  static defaultNodeMeshFactory(e, t, r) {
    return t.meshCache.get("default-mesh", () => {
      let i;
      switch (r.shape) {
        case "box":
          i = D.createBox(e, t, r);
          break;
        case "sphere":
          i = D.createSphere(e, t, r);
          break;
        case "cylinder":
          i = D.createCylinder(e, t, r);
          break;
        case "cone":
          i = D.createCone(e, t, r);
          break;
        case "capsule":
          i = D.createCapsule(e, t, r);
          break;
        case "torus-knot":
          i = D.createTorusKnot(e, t, r);
          break;
        case "tetrahedron":
          i = D.createPolyhedron(0, e, t, r);
          break;
        case "octahedron":
          i = D.createPolyhedron(1, e, t, r);
          break;
        case "dodecahedron":
          i = D.createPolyhedron(2, e, t, r);
          break;
        case "icosahedron":
          i = D.createPolyhedron(3, e, t, r);
          break;
        case "rhombicuboctahedron":
          i = D.createPolyhedron(4, e, t, r);
          break;
        case "triangular_prism":
          i = D.createPolyhedron(5, e, t, r);
          break;
        case "pentagonal_prism":
          i = D.createPolyhedron(6, e, t, r);
          break;
        case "hexagonal_prism":
          i = D.createPolyhedron(7, e, t, r);
          break;
        case "square_pyramid":
          i = D.createPolyhedron(8, e, t, r);
          break;
        case "pentagonal_pyramid":
          i = D.createPolyhedron(9, e, t, r);
          break;
        case "triangular_dipyramid":
          i = D.createPolyhedron(10, e, t, r);
          break;
        case "pentagonal_dipyramid":
          i = D.createPolyhedron(11, e, t, r);
          break;
        case "elongated_square_dypyramid":
          i = D.createPolyhedron(12, e, t, r);
          break;
        case "elongated_pentagonal_dipyramid":
          i = D.createPolyhedron(13, e, t, r);
          break;
        case "elongated_pentagonal_cupola":
          i = D.createPolyhedron(14, e, t, r);
          break;
        case "goldberg":
          i = D.createGoldberg(e, t, r);
          break;
        case "icosphere":
          i = D.createIcoSphere(e, t, r);
          break;
        case "geodesic":
          i = D.createGeodesic(e, t, r);
          break;
        default:
          throw new TypeError(`unknown shape: ${r.shape}`);
      }
      const a = new on("defaultMaterial"), u = r.color;
      return a.diffuseColor = Me.FromHexString(Ne(u)), a.wireframe = r.wireframe, a.freeze(), i.visibility = r.opacity, i.material = a, i;
    });
  }
  static createBox(e, t, r) {
    return ae.CreateBox("box", { size: r.size });
  }
  static createSphere(e, t, r) {
    return ae.CreateSphere("sphere", { diameter: r.size });
  }
  static createCylinder(e, t, r) {
    return ae.CreateCylinder("cylinder", { height: r.size * hn, diameter: r.size });
  }
  static createCone(e, t, r) {
    return ae.CreateCylinder("cylinder", { height: r.size * hn, diameterTop: 0, diameterBottom: r.size });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static createCapsule(e, t, r) {
    return ae.CreateCapsule("capsule", {});
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static createTorus(e, t, r) {
    return ae.CreateTorus("torus", {});
  }
  static createTorusKnot(e, t, r) {
    return ae.CreateTorusKnot("tk", { radius: r.size * 0.3, tube: r.size * 0.2, radialSegments: 128 });
  }
  static createPolyhedron(e, t, r, i) {
    return ae.CreatePolyhedron("polyhedron", { size: i.size, type: e });
  }
  static createGoldberg(e, t, r) {
    return ae.CreateGoldberg("goldberg", { size: r.size });
  }
  static createIcoSphere(e, t, r) {
    return ae.CreateIcoSphere("icosphere", { radius: r.size * 0.75 });
  }
  static createGeodesic(e, t, r) {
    return ae.CreateGeodesic("geodesic", { size: r.size });
  }
  static createLabel(e, t, r) {
    const a = "48px Verdana", s = 0.006944444444444444, l = new sn("DynamicTexture", 64, r.scene).getContext();
    l.font = a;
    const g = l.measureText(e).width + 8, b = g * s, y = new sn("DynamicTexture", { width: g, height: 72 }, r.scene, !1), v = new on("mat", r.scene);
    v.specularColor = Me.Black(), y.hasAlpha = !0;
    const x = y.getContext();
    x.fillStyle = "white", x.beginPath();
    const m = 0, c = 0, M = [20, 20, 20, 20], C = g, N = 72;
    x.moveTo(m + M[0], c), x.lineTo(m + C - M[1], c), x.arc(m + C - M[1], c + M[1], M[1], 3 * Math.PI / 2, Math.PI * 2), x.lineTo(m + C, c + N - M[2]), x.arc(m + C - M[2], c + N - M[2], M[2], 0, Math.PI / 2), x.lineTo(m + M[3], c + N), x.arc(m + M[3], c + N - M[3], M[3], Math.PI / 2, Math.PI), x.lineTo(m, c + M[0]), x.arc(m + M[0], c + M[0], M[0], Math.PI, 3 * Math.PI / 2), x.closePath(), x.fill(), y.drawText(e, null, null, a, "#000000", "transparent", !0), v.opacityTexture = y, v.emissiveTexture = y, v.disableLighting = !0;
    const _ = ae.CreatePlane("plane", { width: b, height: 0.5 }, r.scene);
    return _.material = v, _.billboardMode = 7, _;
  }
};
const Bi = /* @__PURE__ */ new Map();
class oe {
  constructor(e, t, r, i = {}) {
    B(this, "parentGraph");
    B(this, "srcId");
    B(this, "dstId");
    B(this, "dstNode");
    B(this, "srcNode");
    B(this, "metadata");
    B(this, "mesh");
    B(this, "arrowMesh", null);
    B(this, "edgeStyleConfig");
    // XXX: performance impact when not needed?
    B(this, "ray");
    this.parentGraph = e, this.srcId = t, this.dstId = r, this.metadata = i.metadata ?? {};
    const a = ke.list.get(t);
    if (!a)
      throw new Error(`Attempting to create edge '${t}->${r}', Node '${t}' hasn't been created yet.`);
    const u = ke.list.get(r);
    if (!u)
      throw new Error(`Attempting to create edge '${t}->${r}', Node '${r}' hasn't been created yet.`);
    this.srcNode = a, this.dstNode = u, this.ray = new bi(this.srcNode.mesh.position, this.dstNode.mesh.position), this.edgeStyleConfig = this.parentGraph.config.style.edge, this.parentGraph.graphEngine.addEdge(this), this.mesh = this.edgeStyleConfig.edgeMeshFactory(this, this.parentGraph, this.edgeStyleConfig), this.mesh.isPickable = !1, this.mesh.metadata = {}, this.mesh.metadata.parentEdge = this;
  }
  update() {
    const e = this.parentGraph.graphEngine.getEdgePosition(this);
    this.parentGraph.edgeObservable.notifyObservers({ type: "edge-update-before", edge: this });
    const { srcPoint: t, dstPoint: r } = this.transformArrowCap();
    t && r ? this.transformEdgeMesh(
      t,
      r
    ) : this.transformEdgeMesh(
      new ge(e.src.x, e.src.y, e.src.z),
      new ge(e.dst.x, e.dst.y, e.dst.z)
    ), this.parentGraph.edgeObservable.notifyObservers({ type: "edge-update-after", edge: this });
  }
  static updateRays(e) {
    if (e.config.style.edge.arrowCap) {
      for (const t of e.graphEngine.edges) {
        const r = t.srcNode.mesh, i = t.dstNode.mesh;
        t.ray.position = i.position, t.ray.direction = i.position.subtract(r.position);
      }
      e.scene.render();
    }
  }
  static get list() {
    return Ai;
  }
  static create(e, t, r, i = {}) {
    const a = oe.list.get(t, r);
    if (a)
      return a;
    const u = new oe(e, t, r, i);
    return oe.list.set(t, r, u), u;
  }
  static defaultEdgeMeshFactory(e, t, r) {
    return r.arrowCap && (e.arrowMesh = t.meshCache.get("default-arrow-cap", () => {
      const i = Ii(r.width), a = dn(r.width), u = wi.GetArrowCap(
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
          widthDistribution: xi.WIDTH_DISTRIBUTION_START
          // instance: line,
        },
        {
          color: Me.FromHexString(Ne(r.color))
        }
        // e.parentGraph.scene
      );
    })), t.meshCache.get("default-edge", () => {
      switch (r.type) {
        case "plain":
          return oe.createPlainLine(e, t, r);
        case "moving":
          return oe.createMovingLine(e, t, r);
        default:
          throw new TypeError(`Unknown Edge type: '${r.type}'`);
      }
    });
  }
  static createPlainLine(e, t, r) {
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
  static createMovingLine(e, t, r) {
    const i = Me.FromHexString(Ne(r.movingLineOpts.baseColor)), a = Me.FromHexString(Ne(r.color)), u = Math.floor(i.r * 255), f = Math.floor(i.g * 255), s = Math.floor(i.b * 255), h = Math.floor(a.r * 255), l = Math.floor(a.g * 255), g = Math.floor(a.b * 255), b = new Uint8Array([u, f, s, h, l, g]), y = new un(
      b,
      // data
      b.length / 3,
      // width
      1,
      // height
      bt.TEXTUREFORMAT_RGB,
      // format
      t.scene,
      // sceneOrEngine
      !1,
      // generateMipMaps
      !0,
      // invertY
      bt.TEXTURE_NEAREST_NEAREST
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
        colorMode: _i.COLOR_MODE_MULTIPLY
      }
    ), x = v.material;
    return x.emissiveTexture = y, x.disableLighting = !0, y.uScale = 5, t.scene.onBeforeRenderObservable.add(() => {
      y.uOffset -= 0.04 * t.scene.getAnimationRatio();
    }), v;
  }
  transformEdgeMesh(e, t) {
    const r = t.subtract(e), i = new ge(
      e.x + r.x / 2,
      e.y + r.y / 2,
      e.z + r.z / 2
    ), a = r.length();
    this.mesh.position = i, this.mesh.lookAt(t), this.mesh.scaling.z = a;
  }
  transformArrowCap() {
    if (this.arrowMesh) {
      this.parentGraph.stats.arrowCapUpdate.beginMonitoring();
      const { srcPoint: e, dstPoint: t, newEndPoint: r } = this.getInterceptPoints();
      if (!e || !t || !r)
        throw new Error("Internal Error: mesh intercept points not found");
      return this.arrowMesh.position = t, this.arrowMesh.lookAt(this.dstNode.mesh.position), this.parentGraph.stats.arrowCapUpdate.endMonitoring(), {
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
    const e = this.srcNode.mesh, t = this.dstNode.mesh;
    this.parentGraph.stats.intersectCalc.beginMonitoring();
    const r = this.ray.intersectsMeshes([t]), i = this.ray.intersectsMeshes([e]);
    this.parentGraph.stats.intersectCalc.endMonitoring();
    let a = null, u = null, f = null;
    if (r.length && i.length) {
      const s = dn(this.edgeStyleConfig.width);
      u = r[0].pickedPoint, a = i[0].pickedPoint;
      const h = a.subtract(u).length(), l = h - s, { x: g, y: b, z: y } = a, { x: v, y: x, z: m } = u, c = g + l / h * (v - g), M = b + l / h * (x - b), C = y + l / h * (m - y);
      f = new ge(c, M, C);
    }
    return {
      srcPoint: a,
      dstPoint: u,
      newEndPoint: f
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
function Ii(n) {
  return Math.max(20 * n, 4);
}
function dn(n) {
  return Math.max(n, 0.5);
}
class Pi {
  constructor() {
    B(this, "map", /* @__PURE__ */ new Map());
  }
  has(e, t) {
    const r = this.map.get(e);
    return r ? r.has(t) : !1;
  }
  set(e, t, r) {
    let i = this.map.get(e);
    if (i || (i = /* @__PURE__ */ new Map(), this.map.set(e, i)), i.has(t))
      throw new Error("Attempting to create duplicate Edge");
    i.set(t, r);
  }
  get(e, t) {
    const r = this.map.get(e);
    if (r)
      return r.get(t);
  }
  get size() {
    let e = 0;
    for (const t of this.map.values())
      e += t.size;
    return e;
  }
}
const Ai = new Pi();
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mt(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ke = { exports: {} };
Ke.exports;
(function(n, e) {
  var t = 200, r = "__lodash_hash_undefined__", i = 800, a = 16, u = 9007199254740991, f = "[object Arguments]", s = "[object Array]", h = "[object AsyncFunction]", l = "[object Boolean]", g = "[object Date]", b = "[object Error]", y = "[object Function]", v = "[object GeneratorFunction]", x = "[object Map]", m = "[object Number]", c = "[object Null]", M = "[object Object]", C = "[object Proxy]", N = "[object RegExp]", _ = "[object Set]", T = "[object String]", A = "[object Undefined]", L = "[object WeakMap]", j = "[object ArrayBuffer]", U = "[object DataView]", H = "[object Float32Array]", G = "[object Float64Array]", ue = "[object Int8Array]", E = "[object Int16Array]", w = "[object Int32Array]", $ = "[object Uint8Array]", V = "[object Uint8ClampedArray]", re = "[object Uint16Array]", se = "[object Uint32Array]", I = /[\\^$.*+?()[\]{}|]/g, P = /^\[object .+?Constructor\]$/, k = /^(?:0|[1-9]\d*)$/, z = {};
  z[H] = z[G] = z[ue] = z[E] = z[w] = z[$] = z[V] = z[re] = z[se] = !0, z[f] = z[s] = z[j] = z[l] = z[U] = z[g] = z[b] = z[y] = z[x] = z[m] = z[M] = z[N] = z[_] = z[T] = z[L] = !1;
  var J = typeof We == "object" && We && We.Object === Object && We, X = typeof self == "object" && self && self.Object === Object && self, K = J || X || Function("return this")(), qe = e && !e.nodeType && e, Te = qe && !0 && n && !n.nodeType && n, zt = Te && Te.exports === qe, tt = zt && J.process, Lt = function() {
    try {
      var o = Te && Te.require && Te.require("util").types;
      return o || tt && tt.binding && tt.binding("util");
    } catch {
    }
  }(), kt = Lt && Lt.isTypedArray;
  function Ot(o, d, p) {
    switch (p.length) {
      case 0:
        return o.call(d);
      case 1:
        return o.call(d, p[0]);
      case 2:
        return o.call(d, p[0], p[1]);
      case 3:
        return o.call(d, p[0], p[1], p[2]);
    }
    return o.apply(d, p);
  }
  function rr(o, d) {
    for (var p = -1, S = Array(o); ++p < o; )
      S[p] = d(p);
    return S;
  }
  function ir(o) {
    return function(d) {
      return o(d);
    };
  }
  function ar(o, d) {
    return o == null ? void 0 : o[d];
  }
  function or(o, d) {
    return function(p) {
      return o(d(p));
    };
  }
  var sr = Array.prototype, ur = Function.prototype, De = Object.prototype, nt = K["__core-js_shared__"], Ge = ur.toString, he = De.hasOwnProperty, Ft = function() {
    var o = /[^.]+$/.exec(nt && nt.keys && nt.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), qt = De.toString, hr = Ge.call(Object), dr = RegExp(
    "^" + Ge.call(he).replace(I, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), je = zt ? K.Buffer : void 0, Dt = K.Symbol, Gt = K.Uint8Array, jt = je ? je.allocUnsafe : void 0, Rt = or(Object.getPrototypeOf, Object), Ut = Object.create, fr = De.propertyIsEnumerable, cr = sr.splice, ye = Dt ? Dt.toStringTag : void 0, Re = function() {
    try {
      var o = ot(Object, "defineProperty");
      return o({}, "", {}), o;
    } catch {
    }
  }(), lr = je ? je.isBuffer : void 0, Ht = Math.max, pr = Date.now, Vt = ot(K, "Map"), $e = ot(Object, "create"), gr = /* @__PURE__ */ function() {
    function o() {
    }
    return function(d) {
      if (!fe(d))
        return {};
      if (Ut)
        return Ut(d);
      o.prototype = d;
      var p = new o();
      return o.prototype = void 0, p;
    };
  }();
  function me(o) {
    var d = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++d < p; ) {
      var S = o[d];
      this.set(S[0], S[1]);
    }
  }
  function vr() {
    this.__data__ = $e ? $e(null) : {}, this.size = 0;
  }
  function yr(o) {
    var d = this.has(o) && delete this.__data__[o];
    return this.size -= d ? 1 : 0, d;
  }
  function mr(o) {
    var d = this.__data__;
    if ($e) {
      var p = d[o];
      return p === r ? void 0 : p;
    }
    return he.call(d, o) ? d[o] : void 0;
  }
  function br(o) {
    var d = this.__data__;
    return $e ? d[o] !== void 0 : he.call(d, o);
  }
  function wr(o, d) {
    var p = this.__data__;
    return this.size += this.has(o) ? 0 : 1, p[o] = $e && d === void 0 ? r : d, this;
  }
  me.prototype.clear = vr, me.prototype.delete = yr, me.prototype.get = mr, me.prototype.has = br, me.prototype.set = wr;
  function de(o) {
    var d = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++d < p; ) {
      var S = o[d];
      this.set(S[0], S[1]);
    }
  }
  function xr() {
    this.__data__ = [], this.size = 0;
  }
  function _r(o) {
    var d = this.__data__, p = Ue(d, o);
    if (p < 0)
      return !1;
    var S = d.length - 1;
    return p == S ? d.pop() : cr.call(d, p, 1), --this.size, !0;
  }
  function Mr(o) {
    var d = this.__data__, p = Ue(d, o);
    return p < 0 ? void 0 : d[p][1];
  }
  function Nr(o) {
    return Ue(this.__data__, o) > -1;
  }
  function Cr(o, d) {
    var p = this.__data__, S = Ue(p, o);
    return S < 0 ? (++this.size, p.push([o, d])) : p[S][1] = d, this;
  }
  de.prototype.clear = xr, de.prototype.delete = _r, de.prototype.get = Mr, de.prototype.has = Nr, de.prototype.set = Cr;
  function we(o) {
    var d = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++d < p; ) {
      var S = o[d];
      this.set(S[0], S[1]);
    }
  }
  function Er() {
    this.size = 0, this.__data__ = {
      hash: new me(),
      map: new (Vt || de)(),
      string: new me()
    };
  }
  function Tr(o) {
    var d = Ve(this, o).delete(o);
    return this.size -= d ? 1 : 0, d;
  }
  function $r(o) {
    return Ve(this, o).get(o);
  }
  function Sr(o) {
    return Ve(this, o).has(o);
  }
  function Br(o, d) {
    var p = Ve(this, o), S = p.size;
    return p.set(o, d), this.size += p.size == S ? 0 : 1, this;
  }
  we.prototype.clear = Er, we.prototype.delete = Tr, we.prototype.get = $r, we.prototype.has = Sr, we.prototype.set = Br;
  function xe(o) {
    var d = this.__data__ = new de(o);
    this.size = d.size;
  }
  function Ir() {
    this.__data__ = new de(), this.size = 0;
  }
  function Pr(o) {
    var d = this.__data__, p = d.delete(o);
    return this.size = d.size, p;
  }
  function Ar(o) {
    return this.__data__.get(o);
  }
  function zr(o) {
    return this.__data__.has(o);
  }
  function Lr(o, d) {
    var p = this.__data__;
    if (p instanceof de) {
      var S = p.__data__;
      if (!Vt || S.length < t - 1)
        return S.push([o, d]), this.size = ++p.size, this;
      p = this.__data__ = new we(S);
    }
    return p.set(o, d), this.size = p.size, this;
  }
  xe.prototype.clear = Ir, xe.prototype.delete = Pr, xe.prototype.get = Ar, xe.prototype.has = zr, xe.prototype.set = Lr;
  function kr(o, d) {
    var p = ht(o), S = !p && ut(o), O = !p && !S && Yt(o), q = !p && !S && !O && en(o), Q = p || S || O || q, F = Q ? rr(o.length, String) : [], W = F.length;
    for (var ie in o)
      (d || he.call(o, ie)) && !(Q && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ie == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      O && (ie == "offset" || ie == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      q && (ie == "buffer" || ie == "byteLength" || ie == "byteOffset") || // Skip index properties.
      Jt(ie, W))) && F.push(ie);
    return F;
  }
  function rt(o, d, p) {
    (p !== void 0 && !Qe(o[d], p) || p === void 0 && !(d in o)) && it(o, d, p);
  }
  function Or(o, d, p) {
    var S = o[d];
    (!(he.call(o, d) && Qe(S, p)) || p === void 0 && !(d in o)) && it(o, d, p);
  }
  function Ue(o, d) {
    for (var p = o.length; p--; )
      if (Qe(o[p][0], d))
        return p;
    return -1;
  }
  function it(o, d, p) {
    d == "__proto__" && Re ? Re(o, d, {
      configurable: !0,
      enumerable: !0,
      value: p,
      writable: !0
    }) : o[d] = p;
  }
  var Fr = Jr();
  function He(o) {
    return o == null ? o === void 0 ? A : c : ye && ye in Object(o) ? Kr(o) : ri(o);
  }
  function Qt(o) {
    return Se(o) && He(o) == f;
  }
  function qr(o) {
    if (!fe(o) || ti(o))
      return !1;
    var d = ft(o) ? dr : P;
    return d.test(si(o));
  }
  function Dr(o) {
    return Se(o) && Zt(o.length) && !!z[He(o)];
  }
  function Gr(o) {
    if (!fe(o))
      return ni(o);
    var d = Kt(o), p = [];
    for (var S in o)
      S == "constructor" && (d || !he.call(o, S)) || p.push(S);
    return p;
  }
  function at(o, d, p, S, O) {
    o !== d && Fr(d, function(q, Q) {
      if (O || (O = new xe()), fe(q))
        jr(o, d, Q, p, at, S, O);
      else {
        var F = S ? S(st(o, Q), q, Q + "", o, d, O) : void 0;
        F === void 0 && (F = q), rt(o, Q, F);
      }
    }, tn);
  }
  function jr(o, d, p, S, O, q, Q) {
    var F = st(o, p), W = st(d, p), ie = Q.get(W);
    if (ie) {
      rt(o, p, ie);
      return;
    }
    var ne = q ? q(F, W, p + "", o, d, Q) : void 0, Be = ne === void 0;
    if (Be) {
      var ct = ht(W), lt = !ct && Yt(W), rn = !ct && !lt && en(W);
      ne = W, ct || lt || rn ? ht(F) ? ne = F : ui(F) ? ne = Qr(F) : lt ? (Be = !1, ne = Ur(W, !0)) : rn ? (Be = !1, ne = Vr(W, !0)) : ne = [] : hi(W) || ut(W) ? (ne = F, ut(F) ? ne = di(F) : (!fe(F) || ft(F)) && (ne = Yr(W))) : Be = !1;
    }
    Be && (Q.set(W, ne), O(ne, W, S, q, Q), Q.delete(W)), rt(o, p, ne);
  }
  function Wt(o, d) {
    return ai(ii(o, d, nn), o + "");
  }
  var Rr = Re ? function(o, d) {
    return Re(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: li(d),
      writable: !0
    });
  } : nn;
  function Ur(o, d) {
    if (d)
      return o.slice();
    var p = o.length, S = jt ? jt(p) : new o.constructor(p);
    return o.copy(S), S;
  }
  function Hr(o) {
    var d = new o.constructor(o.byteLength);
    return new Gt(d).set(new Gt(o)), d;
  }
  function Vr(o, d) {
    var p = d ? Hr(o.buffer) : o.buffer;
    return new o.constructor(p, o.byteOffset, o.length);
  }
  function Qr(o, d) {
    var p = -1, S = o.length;
    for (d || (d = Array(S)); ++p < S; )
      d[p] = o[p];
    return d;
  }
  function Wr(o, d, p, S) {
    var O = !p;
    p || (p = {});
    for (var q = -1, Q = d.length; ++q < Q; ) {
      var F = d[q], W = S ? S(p[F], o[F], F, p, o) : void 0;
      W === void 0 && (W = o[F]), O ? it(p, F, W) : Or(p, F, W);
    }
    return p;
  }
  function Xr(o) {
    return Wt(function(d, p) {
      var S = -1, O = p.length, q = O > 1 ? p[O - 1] : void 0, Q = O > 2 ? p[2] : void 0;
      for (q = o.length > 3 && typeof q == "function" ? (O--, q) : void 0, Q && Zr(p[0], p[1], Q) && (q = O < 3 ? void 0 : q, O = 1), d = Object(d); ++S < O; ) {
        var F = p[S];
        F && o(d, F, S, q);
      }
      return d;
    });
  }
  function Jr(o) {
    return function(d, p, S) {
      for (var O = -1, q = Object(d), Q = S(d), F = Q.length; F--; ) {
        var W = Q[o ? F : ++O];
        if (p(q[W], W, q) === !1)
          break;
      }
      return d;
    };
  }
  function Xt(o, d, p, S, O, q) {
    return fe(o) && fe(d) && (q.set(d, o), at(o, d, void 0, Xt, q), q.delete(d)), o;
  }
  function Ve(o, d) {
    var p = o.__data__;
    return ei(d) ? p[typeof d == "string" ? "string" : "hash"] : p.map;
  }
  function ot(o, d) {
    var p = ar(o, d);
    return qr(p) ? p : void 0;
  }
  function Kr(o) {
    var d = he.call(o, ye), p = o[ye];
    try {
      o[ye] = void 0;
      var S = !0;
    } catch {
    }
    var O = qt.call(o);
    return S && (d ? o[ye] = p : delete o[ye]), O;
  }
  function Yr(o) {
    return typeof o.constructor == "function" && !Kt(o) ? gr(Rt(o)) : {};
  }
  function Jt(o, d) {
    var p = typeof o;
    return d = d ?? u, !!d && (p == "number" || p != "symbol" && k.test(o)) && o > -1 && o % 1 == 0 && o < d;
  }
  function Zr(o, d, p) {
    if (!fe(p))
      return !1;
    var S = typeof d;
    return (S == "number" ? dt(p) && Jt(d, p.length) : S == "string" && d in p) ? Qe(p[d], o) : !1;
  }
  function ei(o) {
    var d = typeof o;
    return d == "string" || d == "number" || d == "symbol" || d == "boolean" ? o !== "__proto__" : o === null;
  }
  function ti(o) {
    return !!Ft && Ft in o;
  }
  function Kt(o) {
    var d = o && o.constructor, p = typeof d == "function" && d.prototype || De;
    return o === p;
  }
  function ni(o) {
    var d = [];
    if (o != null)
      for (var p in Object(o))
        d.push(p);
    return d;
  }
  function ri(o) {
    return qt.call(o);
  }
  function ii(o, d, p) {
    return d = Ht(d === void 0 ? o.length - 1 : d, 0), function() {
      for (var S = arguments, O = -1, q = Ht(S.length - d, 0), Q = Array(q); ++O < q; )
        Q[O] = S[d + O];
      O = -1;
      for (var F = Array(d + 1); ++O < d; )
        F[O] = S[O];
      return F[d] = p(Q), Ot(o, this, F);
    };
  }
  function st(o, d) {
    if (!(d === "constructor" && typeof o[d] == "function") && d != "__proto__")
      return o[d];
  }
  var ai = oi(Rr);
  function oi(o) {
    var d = 0, p = 0;
    return function() {
      var S = pr(), O = a - (S - p);
      if (p = S, O > 0) {
        if (++d >= i)
          return arguments[0];
      } else
        d = 0;
      return o.apply(void 0, arguments);
    };
  }
  function si(o) {
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
  function Qe(o, d) {
    return o === d || o !== o && d !== d;
  }
  var ut = Qt(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Qt : function(o) {
    return Se(o) && he.call(o, "callee") && !fr.call(o, "callee");
  }, ht = Array.isArray;
  function dt(o) {
    return o != null && Zt(o.length) && !ft(o);
  }
  function ui(o) {
    return Se(o) && dt(o);
  }
  var Yt = lr || pi;
  function ft(o) {
    if (!fe(o))
      return !1;
    var d = He(o);
    return d == y || d == v || d == h || d == C;
  }
  function Zt(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= u;
  }
  function fe(o) {
    var d = typeof o;
    return o != null && (d == "object" || d == "function");
  }
  function Se(o) {
    return o != null && typeof o == "object";
  }
  function hi(o) {
    if (!Se(o) || He(o) != M)
      return !1;
    var d = Rt(o);
    if (d === null)
      return !0;
    var p = he.call(d, "constructor") && d.constructor;
    return typeof p == "function" && p instanceof p && Ge.call(p) == hr;
  }
  var en = kt ? ir(kt) : Dr;
  function di(o) {
    return Wr(o, tn(o));
  }
  var fi = Wt(function(o) {
    return o.push(void 0, Xt), Ot(ci, void 0, o);
  });
  function tn(o) {
    return dt(o) ? kr(o, !0) : Gr(o);
  }
  var ci = Xr(function(o, d, p, S) {
    at(o, d, p, S);
  });
  function li(o) {
    return function() {
      return o;
    };
  }
  function nn(o) {
    return o;
  }
  function pi() {
    return !1;
  }
  n.exports = fi;
})(Ke, Ke.exports);
var zi = Ke.exports;
const Sn = /* @__PURE__ */ Mt(zi), Li = {
  size: 1,
  opacity: 1,
  wireframe: !1,
  color: "lightgrey",
  shape: "icosphere",
  nodeMeshFactory: ke.defaultNodeMeshFactory,
  label: !1
}, ki = {
  type: "moving",
  color: "white",
  width: 0.25,
  arrowCap: !1,
  movingLineOpts: {
    baseColor: "lightgrey"
  },
  edgeMeshFactory: oe.defaultEdgeMeshFactory
}, Oi = {
  style: {
    node: Li,
    edge: ki,
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
function Fi(n) {
  return Sn({}, n, Oi);
}
const qi = {
  nodeListProp: "nodes",
  edgeListProp: "edges",
  nodeIdProp: "id",
  edgeSrcIdProp: "src",
  edgeDstIdProp: "dst"
};
function Di(n) {
  return Sn({}, n, qi);
}
function Gi(n, e, t) {
  var r, i = 1;
  n == null && (n = 0), e == null && (e = 0), t == null && (t = 0);
  function a() {
    var u, f = r.length, s, h = 0, l = 0, g = 0;
    for (u = 0; u < f; ++u)
      s = r[u], h += s.x || 0, l += s.y || 0, g += s.z || 0;
    for (h = (h / f - n) * i, l = (l / f - e) * i, g = (g / f - t) * i, u = 0; u < f; ++u)
      s = r[u], h && (s.x -= h), l && (s.y -= l), g && (s.z -= g);
  }
  return a.initialize = function(u) {
    r = u;
  }, a.x = function(u) {
    return arguments.length ? (n = +u, a) : n;
  }, a.y = function(u) {
    return arguments.length ? (e = +u, a) : e;
  }, a.z = function(u) {
    return arguments.length ? (t = +u, a) : t;
  }, a.strength = function(u) {
    return arguments.length ? (i = +u, a) : i;
  }, a;
}
function ji(n) {
  const e = +this._x.call(null, n);
  return Bn(this.cover(e), e, n);
}
function Bn(n, e, t) {
  if (isNaN(e))
    return n;
  var r, i = n._root, a = { data: t }, u = n._x0, f = n._x1, s, h, l, g, b;
  if (!i)
    return n._root = a, n;
  for (; i.length; )
    if ((l = e >= (s = (u + f) / 2)) ? u = s : f = s, r = i, !(i = i[g = +l]))
      return r[g] = a, n;
  if (h = +n._x.call(null, i.data), e === h)
    return a.next = i, r ? r[g] = a : n._root = a, n;
  do
    r = r ? r[g] = new Array(2) : n._root = new Array(2), (l = e >= (s = (u + f) / 2)) ? u = s : f = s;
  while ((g = +l) == (b = +(h >= s)));
  return r[b] = i, r[g] = a, n;
}
function Ri(n) {
  Array.isArray(n) || (n = Array.from(n));
  const e = n.length, t = new Float64Array(e);
  let r = 1 / 0, i = -1 / 0;
  for (let a = 0, u; a < e; ++a)
    isNaN(u = +this._x.call(null, n[a])) || (t[a] = u, u < r && (r = u), u > i && (i = u));
  if (r > i)
    return this;
  this.cover(r).cover(i);
  for (let a = 0; a < e; ++a)
    Bn(this, t[a], n[a]);
  return this;
}
function Ui(n) {
  if (isNaN(n = +n))
    return this;
  var e = this._x0, t = this._x1;
  if (isNaN(e))
    t = (e = Math.floor(n)) + 1;
  else {
    for (var r = t - e || 1, i = this._root, a, u; e > n || n >= t; )
      switch (u = +(n < e), a = new Array(2), a[u] = i, i = a, r *= 2, u) {
        case 0:
          t = e + r;
          break;
        case 1:
          e = t - r;
          break;
      }
    this._root && this._root.length && (this._root = i);
  }
  return this._x0 = e, this._x1 = t, this;
}
function Hi() {
  var n = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        n.push(e.data);
      while (e = e.next);
  }), n;
}
function Vi(n) {
  return arguments.length ? this.cover(+n[0][0]).cover(+n[1][0]) : isNaN(this._x0) ? void 0 : [[this._x0], [this._x1]];
}
function le(n, e, t) {
  this.node = n, this.x0 = e, this.x1 = t;
}
function Qi(n, e) {
  var t, r = this._x0, i, a, u = this._x1, f = [], s = this._root, h, l;
  for (s && f.push(new le(s, r, u)), e == null ? e = 1 / 0 : (r = n - e, u = n + e); h = f.pop(); )
    if (!(!(s = h.node) || (i = h.x0) > u || (a = h.x1) < r))
      if (s.length) {
        var g = (i + a) / 2;
        f.push(
          new le(s[1], g, a),
          new le(s[0], i, g)
        ), (l = +(n >= g)) && (h = f[f.length - 1], f[f.length - 1] = f[f.length - 1 - l], f[f.length - 1 - l] = h);
      } else {
        var b = Math.abs(n - +this._x.call(null, s.data));
        b < e && (e = b, r = n - b, u = n + b, t = s.data);
      }
  return t;
}
function Wi(n) {
  if (isNaN(s = +this._x.call(null, n)))
    return this;
  var e, t = this._root, r, i, a, u = this._x0, f = this._x1, s, h, l, g, b;
  if (!t)
    return this;
  if (t.length)
    for (; ; ) {
      if ((l = s >= (h = (u + f) / 2)) ? u = h : f = h, e = t, !(t = t[g = +l]))
        return this;
      if (!t.length)
        break;
      e[g + 1 & 1] && (r = e, b = g);
    }
  for (; t.data !== n; )
    if (i = t, !(t = t.next))
      return this;
  return (a = t.next) && delete t.next, i ? (a ? i.next = a : delete i.next, this) : e ? (a ? e[g] = a : delete e[g], (t = e[0] || e[1]) && t === (e[1] || e[0]) && !t.length && (r ? r[b] = t : this._root = t), this) : (this._root = a, this);
}
function Xi(n) {
  for (var e = 0, t = n.length; e < t; ++e)
    this.remove(n[e]);
  return this;
}
function Ji() {
  return this._root;
}
function Ki() {
  var n = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++n;
      while (e = e.next);
  }), n;
}
function Yi(n) {
  var e = [], t, r = this._root, i, a, u;
  for (r && e.push(new le(r, this._x0, this._x1)); t = e.pop(); )
    if (!n(r = t.node, a = t.x0, u = t.x1) && r.length) {
      var f = (a + u) / 2;
      (i = r[1]) && e.push(new le(i, f, u)), (i = r[0]) && e.push(new le(i, a, f));
    }
  return this;
}
function Zi(n) {
  var e = [], t = [], r;
  for (this._root && e.push(new le(this._root, this._x0, this._x1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var a, u = r.x0, f = r.x1, s = (u + f) / 2;
      (a = i[0]) && e.push(new le(a, u, s)), (a = i[1]) && e.push(new le(a, s, f));
    }
    t.push(r);
  }
  for (; r = t.pop(); )
    n(r.node, r.x0, r.x1);
  return this;
}
function ea(n) {
  return n[0];
}
function ta(n) {
  return arguments.length ? (this._x = n, this) : this._x;
}
function In(n, e) {
  var t = new Nt(e ?? ea, NaN, NaN);
  return n == null ? t : t.addAll(n);
}
function Nt(n, e, t) {
  this._x = n, this._x0 = e, this._x1 = t, this._root = void 0;
}
function fn(n) {
  for (var e = { data: n.data }, t = e; n = n.next; )
    t = t.next = { data: n.data };
  return e;
}
var te = In.prototype = Nt.prototype;
te.copy = function() {
  var n = new Nt(this._x, this._x0, this._x1), e = this._root, t, r;
  if (!e)
    return n;
  if (!e.length)
    return n._root = fn(e), n;
  for (t = [{ source: e, target: n._root = new Array(2) }]; e = t.pop(); )
    for (var i = 0; i < 2; ++i)
      (r = e.source[i]) && (r.length ? t.push({ source: r, target: e.target[i] = new Array(2) }) : e.target[i] = fn(r));
  return n;
};
te.add = ji;
te.addAll = Ri;
te.cover = Ui;
te.data = Hi;
te.extent = Vi;
te.find = Qi;
te.remove = Wi;
te.removeAll = Xi;
te.root = Ji;
te.size = Ki;
te.visit = Yi;
te.visitAfter = Zi;
te.x = ta;
function na(n) {
  const e = +this._x.call(null, n), t = +this._y.call(null, n);
  return Pn(this.cover(e, t), e, t, n);
}
function Pn(n, e, t, r) {
  if (isNaN(e) || isNaN(t))
    return n;
  var i, a = n._root, u = { data: r }, f = n._x0, s = n._y0, h = n._x1, l = n._y1, g, b, y, v, x, m, c, M;
  if (!a)
    return n._root = u, n;
  for (; a.length; )
    if ((x = e >= (g = (f + h) / 2)) ? f = g : h = g, (m = t >= (b = (s + l) / 2)) ? s = b : l = b, i = a, !(a = a[c = m << 1 | x]))
      return i[c] = u, n;
  if (y = +n._x.call(null, a.data), v = +n._y.call(null, a.data), e === y && t === v)
    return u.next = a, i ? i[c] = u : n._root = u, n;
  do
    i = i ? i[c] = new Array(4) : n._root = new Array(4), (x = e >= (g = (f + h) / 2)) ? f = g : h = g, (m = t >= (b = (s + l) / 2)) ? s = b : l = b;
  while ((c = m << 1 | x) === (M = (v >= b) << 1 | y >= g));
  return i[M] = a, i[c] = u, n;
}
function ra(n) {
  var e, t, r = n.length, i, a, u = new Array(r), f = new Array(r), s = 1 / 0, h = 1 / 0, l = -1 / 0, g = -1 / 0;
  for (t = 0; t < r; ++t)
    isNaN(i = +this._x.call(null, e = n[t])) || isNaN(a = +this._y.call(null, e)) || (u[t] = i, f[t] = a, i < s && (s = i), i > l && (l = i), a < h && (h = a), a > g && (g = a));
  if (s > l || h > g)
    return this;
  for (this.cover(s, h).cover(l, g), t = 0; t < r; ++t)
    Pn(this, u[t], f[t], n[t]);
  return this;
}
function ia(n, e) {
  if (isNaN(n = +n) || isNaN(e = +e))
    return this;
  var t = this._x0, r = this._y0, i = this._x1, a = this._y1;
  if (isNaN(t))
    i = (t = Math.floor(n)) + 1, a = (r = Math.floor(e)) + 1;
  else {
    for (var u = i - t || 1, f = this._root, s, h; t > n || n >= i || r > e || e >= a; )
      switch (h = (e < r) << 1 | n < t, s = new Array(4), s[h] = f, f = s, u *= 2, h) {
        case 0:
          i = t + u, a = r + u;
          break;
        case 1:
          t = i - u, a = r + u;
          break;
        case 2:
          i = t + u, r = a - u;
          break;
        case 3:
          t = i - u, r = a - u;
          break;
      }
    this._root && this._root.length && (this._root = f);
  }
  return this._x0 = t, this._y0 = r, this._x1 = i, this._y1 = a, this;
}
function aa() {
  var n = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        n.push(e.data);
      while (e = e.next);
  }), n;
}
function oa(n) {
  return arguments.length ? this.cover(+n[0][0], +n[0][1]).cover(+n[1][0], +n[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function Z(n, e, t, r, i) {
  this.node = n, this.x0 = e, this.y0 = t, this.x1 = r, this.y1 = i;
}
function sa(n, e, t) {
  var r, i = this._x0, a = this._y0, u, f, s, h, l = this._x1, g = this._y1, b = [], y = this._root, v, x;
  for (y && b.push(new Z(y, i, a, l, g)), t == null ? t = 1 / 0 : (i = n - t, a = e - t, l = n + t, g = e + t, t *= t); v = b.pop(); )
    if (!(!(y = v.node) || (u = v.x0) > l || (f = v.y0) > g || (s = v.x1) < i || (h = v.y1) < a))
      if (y.length) {
        var m = (u + s) / 2, c = (f + h) / 2;
        b.push(
          new Z(y[3], m, c, s, h),
          new Z(y[2], u, c, m, h),
          new Z(y[1], m, f, s, c),
          new Z(y[0], u, f, m, c)
        ), (x = (e >= c) << 1 | n >= m) && (v = b[b.length - 1], b[b.length - 1] = b[b.length - 1 - x], b[b.length - 1 - x] = v);
      } else {
        var M = n - +this._x.call(null, y.data), C = e - +this._y.call(null, y.data), N = M * M + C * C;
        if (N < t) {
          var _ = Math.sqrt(t = N);
          i = n - _, a = e - _, l = n + _, g = e + _, r = y.data;
        }
      }
  return r;
}
function ua(n) {
  if (isNaN(l = +this._x.call(null, n)) || isNaN(g = +this._y.call(null, n)))
    return this;
  var e, t = this._root, r, i, a, u = this._x0, f = this._y0, s = this._x1, h = this._y1, l, g, b, y, v, x, m, c;
  if (!t)
    return this;
  if (t.length)
    for (; ; ) {
      if ((v = l >= (b = (u + s) / 2)) ? u = b : s = b, (x = g >= (y = (f + h) / 2)) ? f = y : h = y, e = t, !(t = t[m = x << 1 | v]))
        return this;
      if (!t.length)
        break;
      (e[m + 1 & 3] || e[m + 2 & 3] || e[m + 3 & 3]) && (r = e, c = m);
    }
  for (; t.data !== n; )
    if (i = t, !(t = t.next))
      return this;
  return (a = t.next) && delete t.next, i ? (a ? i.next = a : delete i.next, this) : e ? (a ? e[m] = a : delete e[m], (t = e[0] || e[1] || e[2] || e[3]) && t === (e[3] || e[2] || e[1] || e[0]) && !t.length && (r ? r[c] = t : this._root = t), this) : (this._root = a, this);
}
function ha(n) {
  for (var e = 0, t = n.length; e < t; ++e)
    this.remove(n[e]);
  return this;
}
function da() {
  return this._root;
}
function fa() {
  var n = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++n;
      while (e = e.next);
  }), n;
}
function ca(n) {
  var e = [], t, r = this._root, i, a, u, f, s;
  for (r && e.push(new Z(r, this._x0, this._y0, this._x1, this._y1)); t = e.pop(); )
    if (!n(r = t.node, a = t.x0, u = t.y0, f = t.x1, s = t.y1) && r.length) {
      var h = (a + f) / 2, l = (u + s) / 2;
      (i = r[3]) && e.push(new Z(i, h, l, f, s)), (i = r[2]) && e.push(new Z(i, a, l, h, s)), (i = r[1]) && e.push(new Z(i, h, u, f, l)), (i = r[0]) && e.push(new Z(i, a, u, h, l));
    }
  return this;
}
function la(n) {
  var e = [], t = [], r;
  for (this._root && e.push(new Z(this._root, this._x0, this._y0, this._x1, this._y1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var a, u = r.x0, f = r.y0, s = r.x1, h = r.y1, l = (u + s) / 2, g = (f + h) / 2;
      (a = i[0]) && e.push(new Z(a, u, f, l, g)), (a = i[1]) && e.push(new Z(a, l, f, s, g)), (a = i[2]) && e.push(new Z(a, u, g, l, h)), (a = i[3]) && e.push(new Z(a, l, g, s, h));
    }
    t.push(r);
  }
  for (; r = t.pop(); )
    n(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function pa(n) {
  return n[0];
}
function ga(n) {
  return arguments.length ? (this._x = n, this) : this._x;
}
function va(n) {
  return n[1];
}
function ya(n) {
  return arguments.length ? (this._y = n, this) : this._y;
}
function An(n, e, t) {
  var r = new Ct(e ?? pa, t ?? va, NaN, NaN, NaN, NaN);
  return n == null ? r : r.addAll(n);
}
function Ct(n, e, t, r, i, a) {
  this._x = n, this._y = e, this._x0 = t, this._y0 = r, this._x1 = i, this._y1 = a, this._root = void 0;
}
function cn(n) {
  for (var e = { data: n.data }, t = e; n = n.next; )
    t = t.next = { data: n.data };
  return e;
}
var ee = An.prototype = Ct.prototype;
ee.copy = function() {
  var n = new Ct(this._x, this._y, this._x0, this._y0, this._x1, this._y1), e = this._root, t, r;
  if (!e)
    return n;
  if (!e.length)
    return n._root = cn(e), n;
  for (t = [{ source: e, target: n._root = new Array(4) }]; e = t.pop(); )
    for (var i = 0; i < 4; ++i)
      (r = e.source[i]) && (r.length ? t.push({ source: r, target: e.target[i] = new Array(4) }) : e.target[i] = cn(r));
  return n;
};
ee.add = na;
ee.addAll = ra;
ee.cover = ia;
ee.data = aa;
ee.extent = oa;
ee.find = sa;
ee.remove = ua;
ee.removeAll = ha;
ee.root = da;
ee.size = fa;
ee.visit = ca;
ee.visitAfter = la;
ee.x = ga;
ee.y = ya;
function ma(n) {
  const e = +this._x.call(null, n), t = +this._y.call(null, n), r = +this._z.call(null, n);
  return zn(this.cover(e, t, r), e, t, r, n);
}
function zn(n, e, t, r, i) {
  if (isNaN(e) || isNaN(t) || isNaN(r))
    return n;
  var a, u = n._root, f = { data: i }, s = n._x0, h = n._y0, l = n._z0, g = n._x1, b = n._y1, y = n._z1, v, x, m, c, M, C, N, _, T, A, L;
  if (!u)
    return n._root = f, n;
  for (; u.length; )
    if ((N = e >= (v = (s + g) / 2)) ? s = v : g = v, (_ = t >= (x = (h + b) / 2)) ? h = x : b = x, (T = r >= (m = (l + y) / 2)) ? l = m : y = m, a = u, !(u = u[A = T << 2 | _ << 1 | N]))
      return a[A] = f, n;
  if (c = +n._x.call(null, u.data), M = +n._y.call(null, u.data), C = +n._z.call(null, u.data), e === c && t === M && r === C)
    return f.next = u, a ? a[A] = f : n._root = f, n;
  do
    a = a ? a[A] = new Array(8) : n._root = new Array(8), (N = e >= (v = (s + g) / 2)) ? s = v : g = v, (_ = t >= (x = (h + b) / 2)) ? h = x : b = x, (T = r >= (m = (l + y) / 2)) ? l = m : y = m;
  while ((A = T << 2 | _ << 1 | N) === (L = (C >= m) << 2 | (M >= x) << 1 | c >= v));
  return a[L] = u, a[A] = f, n;
}
function ba(n) {
  Array.isArray(n) || (n = Array.from(n));
  const e = n.length, t = new Float64Array(e), r = new Float64Array(e), i = new Float64Array(e);
  let a = 1 / 0, u = 1 / 0, f = 1 / 0, s = -1 / 0, h = -1 / 0, l = -1 / 0;
  for (let g = 0, b, y, v, x; g < e; ++g)
    isNaN(y = +this._x.call(null, b = n[g])) || isNaN(v = +this._y.call(null, b)) || isNaN(x = +this._z.call(null, b)) || (t[g] = y, r[g] = v, i[g] = x, y < a && (a = y), y > s && (s = y), v < u && (u = v), v > h && (h = v), x < f && (f = x), x > l && (l = x));
  if (a > s || u > h || f > l)
    return this;
  this.cover(a, u, f).cover(s, h, l);
  for (let g = 0; g < e; ++g)
    zn(this, t[g], r[g], i[g], n[g]);
  return this;
}
function wa(n, e, t) {
  if (isNaN(n = +n) || isNaN(e = +e) || isNaN(t = +t))
    return this;
  var r = this._x0, i = this._y0, a = this._z0, u = this._x1, f = this._y1, s = this._z1;
  if (isNaN(r))
    u = (r = Math.floor(n)) + 1, f = (i = Math.floor(e)) + 1, s = (a = Math.floor(t)) + 1;
  else {
    for (var h = u - r || 1, l = this._root, g, b; r > n || n >= u || i > e || e >= f || a > t || t >= s; )
      switch (b = (t < a) << 2 | (e < i) << 1 | n < r, g = new Array(8), g[b] = l, l = g, h *= 2, b) {
        case 0:
          u = r + h, f = i + h, s = a + h;
          break;
        case 1:
          r = u - h, f = i + h, s = a + h;
          break;
        case 2:
          u = r + h, i = f - h, s = a + h;
          break;
        case 3:
          r = u - h, i = f - h, s = a + h;
          break;
        case 4:
          u = r + h, f = i + h, a = s - h;
          break;
        case 5:
          r = u - h, f = i + h, a = s - h;
          break;
        case 6:
          u = r + h, i = f - h, a = s - h;
          break;
        case 7:
          r = u - h, i = f - h, a = s - h;
          break;
      }
    this._root && this._root.length && (this._root = l);
  }
  return this._x0 = r, this._y0 = i, this._z0 = a, this._x1 = u, this._y1 = f, this._z1 = s, this;
}
function xa() {
  var n = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        n.push(e.data);
      while (e = e.next);
  }), n;
}
function _a(n) {
  return arguments.length ? this.cover(+n[0][0], +n[0][1], +n[0][2]).cover(+n[1][0], +n[1][1], +n[1][2]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0, this._z0], [this._x1, this._y1, this._z1]];
}
function R(n, e, t, r, i, a, u) {
  this.node = n, this.x0 = e, this.y0 = t, this.z0 = r, this.x1 = i, this.y1 = a, this.z1 = u;
}
function Ma(n, e, t, r) {
  var i, a = this._x0, u = this._y0, f = this._z0, s, h, l, g, b, y, v = this._x1, x = this._y1, m = this._z1, c = [], M = this._root, C, N;
  for (M && c.push(new R(M, a, u, f, v, x, m)), r == null ? r = 1 / 0 : (a = n - r, u = e - r, f = t - r, v = n + r, x = e + r, m = t + r, r *= r); C = c.pop(); )
    if (!(!(M = C.node) || (s = C.x0) > v || (h = C.y0) > x || (l = C.z0) > m || (g = C.x1) < a || (b = C.y1) < u || (y = C.z1) < f))
      if (M.length) {
        var _ = (s + g) / 2, T = (h + b) / 2, A = (l + y) / 2;
        c.push(
          new R(M[7], _, T, A, g, b, y),
          new R(M[6], s, T, A, _, b, y),
          new R(M[5], _, h, A, g, T, y),
          new R(M[4], s, h, A, _, T, y),
          new R(M[3], _, T, l, g, b, A),
          new R(M[2], s, T, l, _, b, A),
          new R(M[1], _, h, l, g, T, A),
          new R(M[0], s, h, l, _, T, A)
        ), (N = (t >= A) << 2 | (e >= T) << 1 | n >= _) && (C = c[c.length - 1], c[c.length - 1] = c[c.length - 1 - N], c[c.length - 1 - N] = C);
      } else {
        var L = n - +this._x.call(null, M.data), j = e - +this._y.call(null, M.data), U = t - +this._z.call(null, M.data), H = L * L + j * j + U * U;
        if (H < r) {
          var G = Math.sqrt(r = H);
          a = n - G, u = e - G, f = t - G, v = n + G, x = e + G, m = t + G, i = M.data;
        }
      }
  return i;
}
function Na(n) {
  if (isNaN(b = +this._x.call(null, n)) || isNaN(y = +this._y.call(null, n)) || isNaN(v = +this._z.call(null, n)))
    return this;
  var e, t = this._root, r, i, a, u = this._x0, f = this._y0, s = this._z0, h = this._x1, l = this._y1, g = this._z1, b, y, v, x, m, c, M, C, N, _, T;
  if (!t)
    return this;
  if (t.length)
    for (; ; ) {
      if ((M = b >= (x = (u + h) / 2)) ? u = x : h = x, (C = y >= (m = (f + l) / 2)) ? f = m : l = m, (N = v >= (c = (s + g) / 2)) ? s = c : g = c, e = t, !(t = t[_ = N << 2 | C << 1 | M]))
        return this;
      if (!t.length)
        break;
      (e[_ + 1 & 7] || e[_ + 2 & 7] || e[_ + 3 & 7] || e[_ + 4 & 7] || e[_ + 5 & 7] || e[_ + 6 & 7] || e[_ + 7 & 7]) && (r = e, T = _);
    }
  for (; t.data !== n; )
    if (i = t, !(t = t.next))
      return this;
  return (a = t.next) && delete t.next, i ? (a ? i.next = a : delete i.next, this) : e ? (a ? e[_] = a : delete e[_], (t = e[0] || e[1] || e[2] || e[3] || e[4] || e[5] || e[6] || e[7]) && t === (e[7] || e[6] || e[5] || e[4] || e[3] || e[2] || e[1] || e[0]) && !t.length && (r ? r[T] = t : this._root = t), this) : (this._root = a, this);
}
function Ca(n) {
  for (var e = 0, t = n.length; e < t; ++e)
    this.remove(n[e]);
  return this;
}
function Ea() {
  return this._root;
}
function Ta() {
  var n = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++n;
      while (e = e.next);
  }), n;
}
function $a(n) {
  var e = [], t, r = this._root, i, a, u, f, s, h, l;
  for (r && e.push(new R(r, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); t = e.pop(); )
    if (!n(r = t.node, a = t.x0, u = t.y0, f = t.z0, s = t.x1, h = t.y1, l = t.z1) && r.length) {
      var g = (a + s) / 2, b = (u + h) / 2, y = (f + l) / 2;
      (i = r[7]) && e.push(new R(i, g, b, y, s, h, l)), (i = r[6]) && e.push(new R(i, a, b, y, g, h, l)), (i = r[5]) && e.push(new R(i, g, u, y, s, b, l)), (i = r[4]) && e.push(new R(i, a, u, y, g, b, l)), (i = r[3]) && e.push(new R(i, g, b, f, s, h, y)), (i = r[2]) && e.push(new R(i, a, b, f, g, h, y)), (i = r[1]) && e.push(new R(i, g, u, f, s, b, y)), (i = r[0]) && e.push(new R(i, a, u, f, g, b, y));
    }
  return this;
}
function Sa(n) {
  var e = [], t = [], r;
  for (this._root && e.push(new R(this._root, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var a, u = r.x0, f = r.y0, s = r.z0, h = r.x1, l = r.y1, g = r.z1, b = (u + h) / 2, y = (f + l) / 2, v = (s + g) / 2;
      (a = i[0]) && e.push(new R(a, u, f, s, b, y, v)), (a = i[1]) && e.push(new R(a, b, f, s, h, y, v)), (a = i[2]) && e.push(new R(a, u, y, s, b, l, v)), (a = i[3]) && e.push(new R(a, b, y, s, h, l, v)), (a = i[4]) && e.push(new R(a, u, f, v, b, y, g)), (a = i[5]) && e.push(new R(a, b, f, v, h, y, g)), (a = i[6]) && e.push(new R(a, u, y, v, b, l, g)), (a = i[7]) && e.push(new R(a, b, y, v, h, l, g));
    }
    t.push(r);
  }
  for (; r = t.pop(); )
    n(r.node, r.x0, r.y0, r.z0, r.x1, r.y1, r.z1);
  return this;
}
function Ba(n) {
  return n[0];
}
function Ia(n) {
  return arguments.length ? (this._x = n, this) : this._x;
}
function Pa(n) {
  return n[1];
}
function Aa(n) {
  return arguments.length ? (this._y = n, this) : this._y;
}
function za(n) {
  return n[2];
}
function La(n) {
  return arguments.length ? (this._z = n, this) : this._z;
}
function Ln(n, e, t, r) {
  var i = new Et(e ?? Ba, t ?? Pa, r ?? za, NaN, NaN, NaN, NaN, NaN, NaN);
  return n == null ? i : i.addAll(n);
}
function Et(n, e, t, r, i, a, u, f, s) {
  this._x = n, this._y = e, this._z = t, this._x0 = r, this._y0 = i, this._z0 = a, this._x1 = u, this._y1 = f, this._z1 = s, this._root = void 0;
}
function ln(n) {
  for (var e = { data: n.data }, t = e; n = n.next; )
    t = t.next = { data: n.data };
  return e;
}
var Y = Ln.prototype = Et.prototype;
Y.copy = function() {
  var n = new Et(this._x, this._y, this._z, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1), e = this._root, t, r;
  if (!e)
    return n;
  if (!e.length)
    return n._root = ln(e), n;
  for (t = [{ source: e, target: n._root = new Array(8) }]; e = t.pop(); )
    for (var i = 0; i < 8; ++i)
      (r = e.source[i]) && (r.length ? t.push({ source: r, target: e.target[i] = new Array(8) }) : e.target[i] = ln(r));
  return n;
};
Y.add = ma;
Y.addAll = ba;
Y.cover = wa;
Y.data = xa;
Y.extent = _a;
Y.find = Ma;
Y.remove = Na;
Y.removeAll = Ca;
Y.root = Ea;
Y.size = Ta;
Y.visit = $a;
Y.visitAfter = Sa;
Y.x = Ia;
Y.y = Aa;
Y.z = La;
function Le(n) {
  return function() {
    return n;
  };
}
function ce(n) {
  return (n() - 0.5) * 1e-6;
}
function ka(n) {
  return n.index;
}
function pn(n, e) {
  var t = n.get(e);
  if (!t)
    throw new Error("node not found: " + e);
  return t;
}
function Oa(n) {
  var e = ka, t = b, r, i = Le(30), a, u, f, s, h, l, g = 1;
  n == null && (n = []);
  function b(c) {
    return 1 / Math.min(s[c.source.index], s[c.target.index]);
  }
  function y(c) {
    for (var M = 0, C = n.length; M < g; ++M)
      for (var N = 0, _, T, A, L = 0, j = 0, U = 0, H, G; N < C; ++N)
        _ = n[N], T = _.source, A = _.target, L = A.x + A.vx - T.x - T.vx || ce(l), f > 1 && (j = A.y + A.vy - T.y - T.vy || ce(l)), f > 2 && (U = A.z + A.vz - T.z - T.vz || ce(l)), H = Math.sqrt(L * L + j * j + U * U), H = (H - a[N]) / H * c * r[N], L *= H, j *= H, U *= H, A.vx -= L * (G = h[N]), f > 1 && (A.vy -= j * G), f > 2 && (A.vz -= U * G), T.vx += L * (G = 1 - G), f > 1 && (T.vy += j * G), f > 2 && (T.vz += U * G);
  }
  function v() {
    if (u) {
      var c, M = u.length, C = n.length, N = new Map(u.map((T, A) => [e(T, A, u), T])), _;
      for (c = 0, s = new Array(M); c < C; ++c)
        _ = n[c], _.index = c, typeof _.source != "object" && (_.source = pn(N, _.source)), typeof _.target != "object" && (_.target = pn(N, _.target)), s[_.source.index] = (s[_.source.index] || 0) + 1, s[_.target.index] = (s[_.target.index] || 0) + 1;
      for (c = 0, h = new Array(C); c < C; ++c)
        _ = n[c], h[c] = s[_.source.index] / (s[_.source.index] + s[_.target.index]);
      r = new Array(C), x(), a = new Array(C), m();
    }
  }
  function x() {
    if (u)
      for (var c = 0, M = n.length; c < M; ++c)
        r[c] = +t(n[c], c, n);
  }
  function m() {
    if (u)
      for (var c = 0, M = n.length; c < M; ++c)
        a[c] = +i(n[c], c, n);
  }
  return y.initialize = function(c, ...M) {
    u = c, l = M.find((C) => typeof C == "function") || Math.random, f = M.find((C) => [1, 2, 3].includes(C)) || 2, v();
  }, y.links = function(c) {
    return arguments.length ? (n = c, v(), y) : n;
  }, y.id = function(c) {
    return arguments.length ? (e = c, y) : e;
  }, y.iterations = function(c) {
    return arguments.length ? (g = +c, y) : g;
  }, y.strength = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : Le(+c), x(), y) : t;
  }, y.distance = function(c) {
    return arguments.length ? (i = typeof c == "function" ? c : Le(+c), m(), y) : i;
  }, y;
}
var Fa = { value: () => {
} };
function kn() {
  for (var n = 0, e = arguments.length, t = {}, r; n < e; ++n) {
    if (!(r = arguments[n] + "") || r in t || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    t[r] = [];
  }
  return new Je(t);
}
function Je(n) {
  this._ = n;
}
function qa(n, e) {
  return n.trim().split(/^|\s+/).map(function(t) {
    var r = "", i = t.indexOf(".");
    if (i >= 0 && (r = t.slice(i + 1), t = t.slice(0, i)), t && !e.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name: r };
  });
}
Je.prototype = kn.prototype = {
  constructor: Je,
  on: function(n, e) {
    var t = this._, r = qa(n + "", t), i, a = -1, u = r.length;
    if (arguments.length < 2) {
      for (; ++a < u; )
        if ((i = (n = r[a]).type) && (i = Da(t[i], n.name)))
          return i;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++a < u; )
      if (i = (n = r[a]).type)
        t[i] = gn(t[i], n.name, e);
      else if (e == null)
        for (i in t)
          t[i] = gn(t[i], n.name, null);
    return this;
  },
  copy: function() {
    var n = {}, e = this._;
    for (var t in e)
      n[t] = e[t].slice();
    return new Je(n);
  },
  call: function(n, e) {
    if ((i = arguments.length - 2) > 0)
      for (var t = new Array(i), r = 0, i, a; r < i; ++r)
        t[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    for (a = this._[n], r = 0, i = a.length; r < i; ++r)
      a[r].value.apply(e, t);
  },
  apply: function(n, e, t) {
    if (!this._.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    for (var r = this._[n], i = 0, a = r.length; i < a; ++i)
      r[i].value.apply(e, t);
  }
};
function Da(n, e) {
  for (var t = 0, r = n.length, i; t < r; ++t)
    if ((i = n[t]).name === e)
      return i.value;
}
function gn(n, e, t) {
  for (var r = 0, i = n.length; r < i; ++r)
    if (n[r].name === e) {
      n[r] = Fa, n = n.slice(0, r).concat(n.slice(r + 1));
      break;
    }
  return t != null && n.push({ name: e, value: t }), n;
}
var Ce = 0, Ae = 0, Ie = 0, On = 1e3, Ye, ze, Ze = 0, be = 0, et = 0, Oe = typeof performance == "object" && performance.now ? performance : Date, Fn = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(n) {
  setTimeout(n, 17);
};
function qn() {
  return be || (Fn(Ga), be = Oe.now() + et);
}
function Ga() {
  be = 0;
}
function wt() {
  this._call = this._time = this._next = null;
}
wt.prototype = Dn.prototype = {
  constructor: wt,
  restart: function(n, e, t) {
    if (typeof n != "function")
      throw new TypeError("callback is not a function");
    t = (t == null ? qn() : +t) + (e == null ? 0 : +e), !this._next && ze !== this && (ze ? ze._next = this : Ye = this, ze = this), this._call = n, this._time = t, xt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, xt());
  }
};
function Dn(n, e, t) {
  var r = new wt();
  return r.restart(n, e, t), r;
}
function ja() {
  qn(), ++Ce;
  for (var n = Ye, e; n; )
    (e = be - n._time) >= 0 && n._call.call(void 0, e), n = n._next;
  --Ce;
}
function vn() {
  be = (Ze = Oe.now()) + et, Ce = Ae = 0;
  try {
    ja();
  } finally {
    Ce = 0, Ua(), be = 0;
  }
}
function Ra() {
  var n = Oe.now(), e = n - Ze;
  e > On && (et -= e, Ze = n);
}
function Ua() {
  for (var n, e = Ye, t, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), n = e, e = e._next) : (t = e._next, e._next = null, e = n ? n._next = t : Ye = t);
  ze = n, xt(r);
}
function xt(n) {
  if (!Ce) {
    Ae && (Ae = clearTimeout(Ae));
    var e = n - be;
    e > 24 ? (n < 1 / 0 && (Ae = setTimeout(vn, n - Oe.now() - et)), Ie && (Ie = clearInterval(Ie))) : (Ie || (Ze = Oe.now(), Ie = setInterval(Ra, On)), Ce = 1, Fn(vn));
  }
}
const Ha = 1664525, Va = 1013904223, yn = 4294967296;
function Qa() {
  let n = 1;
  return () => (n = (Ha * n + Va) % yn) / yn;
}
var mn = 3;
function vt(n) {
  return n.x;
}
function bn(n) {
  return n.y;
}
function Wa(n) {
  return n.z;
}
var Xa = 10, Ja = Math.PI * (3 - Math.sqrt(5)), Ka = Math.PI * 20 / (9 + Math.sqrt(221));
function Ya(n, e) {
  e = e || 2;
  var t = Math.min(mn, Math.max(1, Math.round(e))), r, i = 1, a = 1e-3, u = 1 - Math.pow(a, 1 / 300), f = 0, s = 0.6, h = /* @__PURE__ */ new Map(), l = Dn(y), g = kn("tick", "end"), b = Qa();
  n == null && (n = []);
  function y() {
    v(), g.call("tick", r), i < a && (l.stop(), g.call("end", r));
  }
  function v(c) {
    var M, C = n.length, N;
    c === void 0 && (c = 1);
    for (var _ = 0; _ < c; ++_)
      for (i += (f - i) * u, h.forEach(function(T) {
        T(i);
      }), M = 0; M < C; ++M)
        N = n[M], N.fx == null ? N.x += N.vx *= s : (N.x = N.fx, N.vx = 0), t > 1 && (N.fy == null ? N.y += N.vy *= s : (N.y = N.fy, N.vy = 0)), t > 2 && (N.fz == null ? N.z += N.vz *= s : (N.z = N.fz, N.vz = 0));
    return r;
  }
  function x() {
    for (var c = 0, M = n.length, C; c < M; ++c) {
      if (C = n[c], C.index = c, C.fx != null && (C.x = C.fx), C.fy != null && (C.y = C.fy), C.fz != null && (C.z = C.fz), isNaN(C.x) || t > 1 && isNaN(C.y) || t > 2 && isNaN(C.z)) {
        var N = Xa * (t > 2 ? Math.cbrt(0.5 + c) : t > 1 ? Math.sqrt(0.5 + c) : c), _ = c * Ja, T = c * Ka;
        t === 1 ? C.x = N : t === 2 ? (C.x = N * Math.cos(_), C.y = N * Math.sin(_)) : (C.x = N * Math.sin(_) * Math.cos(T), C.y = N * Math.cos(_), C.z = N * Math.sin(_) * Math.sin(T));
      }
      (isNaN(C.vx) || t > 1 && isNaN(C.vy) || t > 2 && isNaN(C.vz)) && (C.vx = 0, t > 1 && (C.vy = 0), t > 2 && (C.vz = 0));
    }
  }
  function m(c) {
    return c.initialize && c.initialize(n, b, t), c;
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
      return arguments.length ? (t = Math.min(mn, Math.max(1, Math.round(c))), h.forEach(m), r) : t;
    },
    nodes: function(c) {
      return arguments.length ? (n = c, x(), h.forEach(m), r) : n;
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
      return arguments.length ? (f = +c, r) : f;
    },
    velocityDecay: function(c) {
      return arguments.length ? (s = 1 - c, r) : 1 - s;
    },
    randomSource: function(c) {
      return arguments.length ? (b = c, h.forEach(m), r) : b;
    },
    force: function(c, M) {
      return arguments.length > 1 ? (M == null ? h.delete(c) : h.set(c, m(M)), r) : h.get(c);
    },
    find: function() {
      var c = Array.prototype.slice.call(arguments), M = c.shift() || 0, C = (t > 1 ? c.shift() : null) || 0, N = (t > 2 ? c.shift() : null) || 0, _ = c.shift() || 1 / 0, T = 0, A = n.length, L, j, U, H, G, ue;
      for (_ *= _, T = 0; T < A; ++T)
        G = n[T], L = M - G.x, j = C - (G.y || 0), U = N - (G.z || 0), H = L * L + j * j + U * U, H < _ && (ue = G, _ = H);
      return ue;
    },
    on: function(c, M) {
      return arguments.length > 1 ? (g.on(c, M), r) : g.on(c);
    }
  };
}
function Za() {
  var n, e, t, r, i, a = Le(-30), u, f = 1, s = 1 / 0, h = 0.81;
  function l(v) {
    var x, m = n.length, c = (e === 1 ? In(n, vt) : e === 2 ? An(n, vt, bn) : e === 3 ? Ln(n, vt, bn, Wa) : null).visitAfter(b);
    for (i = v, x = 0; x < m; ++x)
      t = n[x], c.visit(y);
  }
  function g() {
    if (n) {
      var v, x = n.length, m;
      for (u = new Array(x), v = 0; v < x; ++v)
        m = n[v], u[m.index] = +a(m, v, n);
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
    var C = [m, c, M][e - 1], N = v.x - t.x, _ = e > 1 ? v.y - t.y : 0, T = e > 2 ? v.z - t.z : 0, A = C - x, L = N * N + _ * _ + T * T;
    if (A * A / h < L)
      return L < s && (N === 0 && (N = ce(r), L += N * N), e > 1 && _ === 0 && (_ = ce(r), L += _ * _), e > 2 && T === 0 && (T = ce(r), L += T * T), L < f && (L = Math.sqrt(f * L)), t.vx += N * v.value * i / L, e > 1 && (t.vy += _ * v.value * i / L), e > 2 && (t.vz += T * v.value * i / L)), !0;
    if (v.length || L >= s)
      return;
    (v.data !== t || v.next) && (N === 0 && (N = ce(r), L += N * N), e > 1 && _ === 0 && (_ = ce(r), L += _ * _), e > 2 && T === 0 && (T = ce(r), L += T * T), L < f && (L = Math.sqrt(f * L)));
    do
      v.data !== t && (A = u[v.data.index] * i / L, t.vx += N * A, e > 1 && (t.vy += _ * A), e > 2 && (t.vz += T * A));
    while (v = v.next);
  }
  return l.initialize = function(v, ...x) {
    n = v, r = x.find((m) => typeof m == "function") || Math.random, e = x.find((m) => [1, 2, 3].includes(m)) || 2, g();
  }, l.strength = function(v) {
    return arguments.length ? (a = typeof v == "function" ? v : Le(+v), g(), l) : a;
  }, l.distanceMin = function(v) {
    return arguments.length ? (f = v * v, l) : Math.sqrt(f);
  }, l.distanceMax = function(v) {
    return arguments.length ? (s = v * v, l) : Math.sqrt(s);
  }, l.theta = function(v) {
    return arguments.length ? (h = v * v, l) : Math.sqrt(h);
  }, l;
}
function _t(n) {
  return typeof n == "object" && n !== null && "index" in n && typeof n.index == "number" && "x" in n && typeof n.x == "number" && "y" in n && typeof n.y == "number" && "z" in n && typeof n.z == "number" && "vx" in n && typeof n.vx == "number" && "vy" in n && typeof n.vy == "number" && "vz" in n && typeof n.vz == "number";
}
function eo(n) {
  return !!(typeof n == "object" && n !== null && Object.hasOwn(n, "index") && "index" in n && typeof n.index == "number" && "source" in n && _t(n.source) && "target" in n && _t(n.target));
}
class to {
  constructor() {
    B(this, "d3ForceLayout");
    B(this, "d3AlphaMin", 0.1);
    B(this, "d3AlphaTarget", 0);
    B(this, "d3AlphaDecay", 0.0228);
    B(this, "d3VelocityDecay", 0.4);
    B(this, "nodeMapping", /* @__PURE__ */ new Map());
    B(this, "edgeMapping", /* @__PURE__ */ new Map());
    B(this, "newNodeMap", /* @__PURE__ */ new Map());
    B(this, "newEdgeMap", /* @__PURE__ */ new Map());
    B(this, "reheat", !1);
    this.d3ForceLayout = Ya().numDimensions(3).alpha(1).force("link", Oa()).force("charge", Za()).force("center", Gi()).force("dagRadial", null).stop(), this.d3ForceLayout.force("link").id((e) => e.id);
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
      let t = [...this.edgeMapping.values()];
      t = t.concat([...this.newEdgeMap.values()]), this.d3ForceLayout.force("link").links(t);
      for (const r of this.newEdgeMap.entries()) {
        const i = r[0], a = r[1];
        if (!eo(a))
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
    const t = this._getMappedNode(e);
    if (t.x === void 0 || t.y === void 0 || t.z === void 0)
      throw new Error("Internal error: Node not initialized in D3GraphEngine");
    return {
      x: t.x,
      y: t.y,
      z: t.z
    };
  }
  setNodePosition(e, t) {
    const r = this._getMappedNode(e);
    r.x = t.x, r.y = t.y, r.z = t.z ?? 0, this.reheat = !0;
  }
  getEdgePosition(e) {
    const t = this._getMappedEdge(e);
    return {
      src: {
        x: t.source.x,
        y: t.source.y,
        z: t.source.z
      },
      dst: {
        x: t.target.x,
        y: t.target.y,
        z: t.target.z
      }
    };
  }
  pin(e) {
    const t = this._getMappedNode(e);
    t.fx = t.x, t.fy = t.y, t.fz = t.z, this.reheat = !0;
  }
  unpin(e) {
    const t = this._getMappedNode(e);
    t.fx = void 0, t.fy = void 0, t.fz = void 0, this.reheat = !0;
  }
  _getMappedNode(e) {
    this.refresh();
    const t = this.nodeMapping.get(e);
    if (!t)
      throw new Error("Internal error: Node not found in D3GraphEngine");
    return t;
  }
  _getMappedEdge(e) {
    this.refresh();
    const t = this.edgeMapping.get(e);
    if (!t)
      throw new Error("Internal error: Edge not found in D3GraphEngine");
    return t;
  }
}
const wn = /* @__PURE__ */ new Map();
class no {
  constructor() {
    B(this, "hits", 0);
    B(this, "misses", 0);
  }
  get(e, t) {
    let r = wn.get(e);
    return r ? (this.hits++, r.createInstance(e)) : (this.misses++, r = t(), r.isVisible = !1, wn.set(e, r), r.createInstance(e));
  }
  reset() {
    this.hits = 0, this.misses = 0;
  }
}
var Tt = function(e) {
  io(e);
  var t = ro(e);
  return e.on = t.on, e.off = t.off, e.fire = t.fire, e;
};
function ro(n) {
  var e = /* @__PURE__ */ Object.create(null);
  return {
    on: function(t, r, i) {
      if (typeof r != "function")
        throw new Error("callback is expected to be a function");
      var a = e[t];
      return a || (a = e[t] = []), a.push({ callback: r, ctx: i }), n;
    },
    off: function(t, r) {
      var i = typeof t > "u";
      if (i)
        return e = /* @__PURE__ */ Object.create(null), n;
      if (e[t]) {
        var a = typeof r != "function";
        if (a)
          delete e[t];
        else
          for (var u = e[t], f = 0; f < u.length; ++f)
            u[f].callback === r && u.splice(f, 1);
      }
      return n;
    },
    fire: function(t) {
      var r = e[t];
      if (!r)
        return n;
      var i;
      arguments.length > 1 && (i = Array.prototype.splice.call(arguments, 1));
      for (var a = 0; a < r.length; ++a) {
        var u = r[a];
        u.callback.apply(u.ctx, i);
      }
      return n;
    }
  };
}
function io(n) {
  if (!n)
    throw new Error("Eventify cannot use falsy object as events subject");
  for (var e = ["on", "fire", "off"], t = 0; t < e.length; ++t)
    if (n.hasOwnProperty(e[t]))
      throw new Error("Subject cannot be eventified, since it already has property '" + e[t] + "'");
}
var ao = so, oo = Tt;
function so(n) {
  if (n = n || {}, "uniqueLinkId" in n && (console.warn(
    "ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",
    `
`,
    `Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`
  ), n.multigraph = n.uniqueLinkId), n.multigraph === void 0 && (n.multigraph = !1), typeof Map != "function")
    throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), r = {}, i = 0, a = n.multigraph ? N : C, u = [], f = $, s = $, h = $, l = $, g = {
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
  return oo(g), b(), g;
  function b() {
    var I = g.on;
    g.on = P;
    function P() {
      return g.beginUpdate = h = V, g.endUpdate = l = re, f = y, s = v, g.on = I, I.apply(g, arguments);
    }
  }
  function y(I, P) {
    u.push({
      link: I,
      changeType: P
    });
  }
  function v(I, P) {
    u.push({
      node: I,
      changeType: P
    });
  }
  function x(I, P) {
    if (I === void 0)
      throw new Error("Invalid node identifier");
    h();
    var k = m(I);
    return k ? (k.data = P, s(k, "update")) : (k = new uo(I, P), s(k, "add")), e.set(I, k), l(), k;
  }
  function m(I) {
    return e.get(I);
  }
  function c(I) {
    var P = m(I);
    if (!P)
      return !1;
    h();
    var k = P.links;
    return k && (k.forEach(j), P.links = null), e.delete(I), s(P, "remove"), l(), !0;
  }
  function M(I, P, k) {
    h();
    var z = m(I) || x(I), J = m(P) || x(P), X = a(I, P, k), K = t.has(X.id);
    return t.set(X.id, X), xn(z, X), I !== P && xn(J, X), f(X, K ? "update" : "add"), l(), X;
  }
  function C(I, P, k) {
    var z = Xe(I, P), J = t.get(z);
    return J ? (J.data = k, J) : new _n(I, P, k, z);
  }
  function N(I, P, k) {
    var z = Xe(I, P), J = r.hasOwnProperty(z);
    if (J || U(I, P)) {
      J || (r[z] = 0);
      var X = "@" + ++r[z];
      z = Xe(I + X, P + X);
    }
    return new _n(I, P, k, z);
  }
  function _() {
    return e.size;
  }
  function T() {
    return t.size;
  }
  function A(I) {
    var P = m(I);
    return P ? P.links : null;
  }
  function L(I, P) {
    return P !== void 0 && (I = U(I, P)), j(I);
  }
  function j(I) {
    if (!I || !t.get(I.id))
      return !1;
    h(), t.delete(I.id);
    var P = m(I.fromId), k = m(I.toId);
    return P && P.links.delete(I), k && k.links.delete(I), f(I, "remove"), l(), !0;
  }
  function U(I, P) {
    if (!(I === void 0 || P === void 0))
      return t.get(Xe(I, P));
  }
  function H() {
    h(), se(function(I) {
      c(I.id);
    }), l();
  }
  function G(I) {
    if (typeof I == "function")
      for (var P = t.values(), k = P.next(); !k.done; ) {
        if (I(k.value))
          return !0;
        k = P.next();
      }
  }
  function ue(I, P, k) {
    var z = m(I);
    if (z && z.links && typeof P == "function")
      return k ? w(z.links, I, P) : E(z.links, I, P);
  }
  function E(I, P, k) {
    for (var z, J = I.values(), X = J.next(); !X.done; ) {
      var K = X.value, qe = K.fromId === P ? K.toId : K.fromId;
      if (z = k(e.get(qe), K), z)
        return !0;
      X = J.next();
    }
  }
  function w(I, P, k) {
    for (var z, J = I.values(), X = J.next(); !X.done; ) {
      var K = X.value;
      if (K.fromId === P && (z = k(e.get(K.toId), K), z))
        return !0;
      X = J.next();
    }
  }
  function $() {
  }
  function V() {
    i += 1;
  }
  function re() {
    i -= 1, i === 0 && u.length > 0 && (g.fire("changed", u), u.length = 0);
  }
  function se(I) {
    if (typeof I != "function")
      throw new Error("Function is expected to iterate over graph nodes. You passed " + I);
    for (var P = e.values(), k = P.next(); !k.done; ) {
      if (I(k.value))
        return !0;
      k = P.next();
    }
  }
}
function uo(n, e) {
  this.id = n, this.links = null, this.data = e;
}
function xn(n, e) {
  n.links ? n.links.add(e) : n.links = /* @__PURE__ */ new Set([e]);
}
function _n(n, e, t, r) {
  this.fromId = n, this.toId = e, this.data = t, this.id = r;
}
function Xe(n, e) {
  return n.toString() + "👉 " + e.toString();
}
const ho = /* @__PURE__ */ Mt(ao);
var $t = { exports: {} }, Fe = { exports: {} }, Gn = function(e) {
  return e === 0 ? "x" : e === 1 ? "y" : e === 2 ? "z" : "c" + (e + 1);
};
const fo = Gn;
var Ee = function(e) {
  return t;
  function t(r, i) {
    let a = i && i.indent || 0, u = i && i.join !== void 0 ? i.join : `
`, f = Array(a + 1).join(" "), s = [];
    for (let h = 0; h < e; ++h) {
      let l = fo(h), g = h === 0 ? "" : f;
      s.push(g + r.replace(/{var}/g, l));
    }
    return s.join(u);
  }
};
const jn = Ee;
Fe.exports = co;
Fe.exports.generateCreateBodyFunctionBody = Rn;
Fe.exports.getVectorCode = Hn;
Fe.exports.getBodyCode = Un;
function co(n, e) {
  let t = Rn(n, e), { Body: r } = new Function(t)();
  return r;
}
function Rn(n, e) {
  return `
${Hn(n, e)}
${Un(n)}
return {Body: Body, Vector: Vector};
`;
}
function Un(n) {
  let e = jn(n), t = e("{var}", { join: ", " });
  return `
function Body(${t}) {
  this.isPinned = false;
  this.pos = new Vector(${t});
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

Body.prototype.setPosition = function (${t}) {
  ${e("this.pos.{var} = {var} || 0;", { indent: 2 })}
};`;
}
function Hn(n, e) {
  let t = jn(n), r = "";
  return e && (r = `${t(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`), `function Vector(${t("{var}", { join: ", " })}) {
  ${r}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${t('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");', { indent: 4 })}
      ${t("this.{var} = v.{var};", { indent: 4 })}
    } else {
      ${t('this.{var} = typeof {var} === "number" ? {var} : 0;', { indent: 4 })}
    }
  }
  
  Vector.prototype.reset = function () {
    ${t("this.{var} = ", { join: "" })}0;
  };`;
}
var lo = Fe.exports, ve = { exports: {} };
const St = Ee, pe = Gn;
ve.exports = po;
ve.exports.generateQuadTreeFunctionBody = Vn;
ve.exports.getInsertStackCode = Kn;
ve.exports.getQuadNodeCode = Jn;
ve.exports.isSamePosition = Qn;
ve.exports.getChildBodyCode = Xn;
ve.exports.setChildBodyCode = Wn;
function po(n) {
  let e = Vn(n);
  return new Function(e)();
}
function Vn(n) {
  let e = St(n), t = Math.pow(2, n);
  return `
${Kn()}
${Jn(n)}
${Qn(n)}
${Xn(n)}
${Wn(n)}

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
  function i(f) {
    let s = [], h = Array(f + 1).join(" ");
    for (let l = 0; l < n; ++l)
      s.push(h + `if (${pe(l)} > max_${pe(l)}) {`), s.push(h + `  quadIdx = quadIdx + ${Math.pow(2, l)};`), s.push(h + `  min_${pe(l)} = max_${pe(l)};`), s.push(h + `  max_${pe(l)} = node.max_${pe(l)};`), s.push(h + "}");
    return s.join(`
`);
  }
  function a() {
    let f = Array(11).join(" "), s = [];
    for (let h = 0; h < t; ++h)
      s.push(f + `if (node.quad${h}) {`), s.push(f + `  queue[pushIdx] = node.quad${h};`), s.push(f + "  queueLength += 1;"), s.push(f + "  pushIdx += 1;"), s.push(f + "}");
    return s.join(`
`);
  }
  function u(f) {
    let s = [];
    for (let h = 0; h < t; ++h)
      s.push(`${f}quad${h} = null;`);
    return s.join(`
`);
  }
}
function Qn(n) {
  let e = St(n);
  return `
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});", { indent: 2 })}
  
    return ${e("d{var} < 1e-8", { join: " && " })};
  }  
`;
}
function Wn(n) {
  var e = Math.pow(2, n);
  return `
function setChild(node, idx, child) {
  ${t()}
}`;
  function t() {
    let r = [];
    for (let i = 0; i < e; ++i) {
      let a = i === 0 ? "  " : "  else ";
      r.push(`${a}if (idx === ${i}) node.quad${i} = child;`);
    }
    return r.join(`
`);
  }
}
function Xn(n) {
  return `function getChild(node, idx) {
${e()}
  return null;
}`;
  function e() {
    let t = [], r = Math.pow(2, n);
    for (let i = 0; i < r; ++i)
      t.push(`  if (idx === ${i}) return node.quad${i};`);
    return t.join(`
`);
  }
}
function Jn(n) {
  let e = St(n), t = Math.pow(2, n);
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
    for (let f = 0; f < t; ++f)
      u.push(`${a}quad${f} = null;`);
    return u.join(`
`);
  }
}
function Kn() {
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
var go = ve.exports, Bt = { exports: {} };
Bt.exports = yo;
Bt.exports.generateFunctionBody = Yn;
const vo = Ee;
function yo(n) {
  let e = Yn(n);
  return new Function("bodies", "settings", "random", e);
}
function Yn(n) {
  let e = vo(n);
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
var mo = Bt.exports, It = { exports: {} };
const bo = Ee;
It.exports = wo;
It.exports.generateCreateDragForceFunctionBody = Zn;
function wo(n) {
  let e = Zn(n);
  return new Function("options", e);
}
function Zn(n) {
  return `
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${bo(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};", { indent: 6 })}
    }
  };
`;
}
var xo = It.exports, Pt = { exports: {} };
const _o = Ee;
Pt.exports = Mo;
Pt.exports.generateCreateSpringForceFunctionBody = er;
function Mo(n) {
  let e = er(n);
  return new Function("options", "random", e);
}
function er(n) {
  let e = _o(n);
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
var No = Pt.exports, At = { exports: {} };
const Co = Ee;
At.exports = Eo;
At.exports.generateIntegratorFunctionBody = tr;
function Eo(n) {
  let e = tr(n);
  return new Function("bodies", "timeStep", "adaptiveTimeStepWeight", e);
}
function tr(n) {
  let e = Co(n);
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
var To = At.exports, yt, Mn;
function $o() {
  if (Mn)
    return yt;
  Mn = 1, yt = n;
  function n(e, t, r, i) {
    this.from = e, this.to = t, this.length = r, this.coefficient = i;
  }
  return yt;
}
var mt, Nn;
function So() {
  if (Nn)
    return mt;
  Nn = 1, mt = n;
  function n(e, t) {
    var r;
    if (e || (e = {}), t) {
      for (r in t)
        if (t.hasOwnProperty(r)) {
          var i = e.hasOwnProperty(r), a = typeof t[r], u = !i || typeof e[r] !== a;
          u ? e[r] = t[r] : a === "object" && (e[r] = n(e[r], t[r]));
        }
    }
    return e;
  }
  return mt;
}
var Pe = { exports: {} }, Cn;
function Bo() {
  if (Cn)
    return Pe.exports;
  Cn = 1, Pe.exports = n, Pe.exports.random = n, Pe.exports.randomIterator = f;
  function n(s) {
    var h = typeof s == "number" ? s : +/* @__PURE__ */ new Date();
    return new e(h);
  }
  function e(s) {
    this.seed = s;
  }
  e.prototype.next = u, e.prototype.nextDouble = a, e.prototype.uniform = a, e.prototype.gaussian = t;
  function t() {
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
  function f(s, h) {
    var l = h || n();
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
var nr = Oo, Io = lo, Po = go, Ao = mo, zo = xo, Lo = No, ko = To, En = {};
function Oo(n) {
  var e = $o(), t = So(), r = Tt;
  if (n) {
    if (n.springCoeff !== void 0)
      throw new Error("springCoeff was renamed to springCoefficient");
    if (n.dragCoeff !== void 0)
      throw new Error("dragCoeff was renamed to dragCoefficient");
  }
  n = t(n, {
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
  var i = En[n.dimensions];
  if (!i) {
    var a = n.dimensions;
    i = {
      Body: Io(a, n.debug),
      createQuadTree: Po(a),
      createBounds: Ao(a),
      createDragForce: zo(a),
      createSpringForce: Lo(a),
      integrate: ko(a)
    }, En[a] = i;
  }
  var u = i.Body, f = i.createQuadTree, s = i.createBounds, h = i.createDragForce, l = i.createSpringForce, g = i.integrate, b = (w) => new u(w), y = Bo().random(42), v = [], x = [], m = f(n, y), c = s(v, n, y), M = l(n, y), C = h(n), N = 0, _ = [], T = /* @__PURE__ */ new Map(), A = 0;
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
    settings: n,
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
      var $ = g(v, n.timeStep, n.adaptiveTimeStepWeight);
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
    addSpring: function(w, $, V, re) {
      if (!w || !$)
        throw new Error("Cannot add null spring to force simulator");
      typeof V != "number" && (V = -1);
      var se = new e(w, $, V, re >= 0 ? re : -1);
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
      return w !== void 0 ? (n.gravity = w, m.options({ gravity: w }), this) : n.gravity;
    },
    theta: function(w) {
      return w !== void 0 ? (n.theta = w, m.options({ theta: w }), this) : n.theta;
    },
    /**
     * Returns pseudo-random number generator instance.
     */
    random: y
  };
  return Fo(n, L), r(L), L;
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
function Fo(n, e) {
  for (var t in n)
    qo(n, e, t);
}
function qo(n, e, t) {
  if (n.hasOwnProperty(t) && typeof e[t] != "function") {
    var r = Number.isFinite(n[t]);
    r ? e[t] = function(i) {
      if (i !== void 0) {
        if (!Number.isFinite(i))
          throw new Error("Value of " + t + " should be a valid number.");
        return n[t] = i, e;
      }
      return n[t];
    } : e[t] = function(i) {
      return i !== void 0 ? (n[t] = i, e) : n[t];
    };
  }
}
$t.exports = Go;
$t.exports.simulator = nr;
var Do = Tt;
function Go(n, e) {
  if (!n)
    throw new Error("Graph structure cannot be undefined");
  var t = e && e.createSimulator || nr, r = t(e);
  if (Array.isArray(e))
    throw new Error("Physics settings is expected to be an object");
  var i = n.version > 19 ? ue : G;
  e && typeof e.nodeMass == "function" && (i = e.nodeMass);
  var a = /* @__PURE__ */ new Map(), u = {}, f = 0, s = r.settings.springTransform || jo;
  C(), m();
  var h = !1, l = {
    /**
     * Performs one step of iterative layout algorithm
     *
     * @returns {boolean} true if the system should be considered stable; False otherwise.
     * The system is stable if no further call to `step()` can improve the layout.
     */
    step: function() {
      if (f === 0)
        return g(!0), !0;
      var E = r.step();
      l.lastMove = E, l.fire("step");
      var w = E / f, $ = w <= 0.01;
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
      n.off("changed", M), l.fire("disposed");
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
    graph: n,
    /**
     * Gets amount of movement performed during last step operation
     */
    lastMove: 0
  };
  return Do(l), l;
  function g(E) {
    h !== E && (h = E, c(E));
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
      var V = n.hasLink(E, w);
      if (!V)
        return;
      $ = V.id;
    }
    return u[$];
  }
  function x(E) {
    return a.get(E);
  }
  function m() {
    n.on("changed", M);
  }
  function c(E) {
    l.fire("stable", E);
  }
  function M(E) {
    for (var w = 0; w < E.length; ++w) {
      var $ = E[w];
      $.changeType === "add" ? ($.node && N($.node.id), $.link && T($.link)) : $.changeType === "remove" && ($.node && _($.node), $.link && A($.link));
    }
    f = n.getNodesCount();
  }
  function C() {
    f = 0, n.forEachNode(function(E) {
      N(E.id), f += 1;
    }), n.forEachLink(T);
  }
  function N(E) {
    var w = a.get(E);
    if (!w) {
      var $ = n.getNode(E);
      if (!$)
        throw new Error("initBody() was called with unknown node id");
      var V = $.position;
      if (!V) {
        var re = L($);
        V = r.getBestNewBodyPosition(re);
      }
      w = r.addBodyAt(V), w.id = E, a.set(E, w), j(E), U($) && (w.isPinned = !0);
    }
  }
  function _(E) {
    var w = E.id, $ = a.get(w);
    $ && (a.delete(w), r.removeBody($));
  }
  function T(E) {
    j(E.fromId), j(E.toId);
    var w = a.get(E.fromId), $ = a.get(E.toId), V = r.addSpring(w, $, E.length);
    s(E, V), u[E.id] = V;
  }
  function A(E) {
    var w = u[E.id];
    if (w) {
      var $ = n.getNode(E.fromId), V = n.getNode(E.toId);
      $ && j($.id), V && j(V.id), delete u[E.id], r.removeSpring(w);
    }
  }
  function L(E) {
    var w = [];
    if (!E.links)
      return w;
    for (var $ = Math.min(E.links.length, 2), V = 0; V < $; ++V) {
      var re = E.links[V], se = re.fromId !== E.id ? a.get(re.fromId) : a.get(re.toId);
      se && se.pos && w.push(se);
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
    var w = n.getLinks(E);
    return w ? 1 + w.length / 3 : 1;
  }
  function ue(E) {
    var w = n.getLinks(E);
    return w ? 1 + w.size / 3 : 1;
  }
}
function jo() {
}
var Ro = $t.exports;
const Uo = /* @__PURE__ */ Mt(Ro);
class Ho {
  constructor() {
    B(this, "ngraph");
    B(this, "ngraphLayout");
    B(this, "nodeMapping", /* @__PURE__ */ new Map());
    B(this, "edgeMapping", /* @__PURE__ */ new Map());
    B(this, "_settled", !0);
    this.ngraph = ho(), this.ngraphLayout = Uo(this.ngraph, { dimensions: 3 });
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
    const t = this.ngraph.addNode(e.id, { parentNode: e });
    this.nodeMapping.set(e, t), this._settled = !1;
  }
  addEdge(e) {
    const t = this.ngraph.addLink(e.srcId, e.dstId, { parentEdge: this });
    this.edgeMapping.set(e, t), this._settled = !1;
  }
  getNodePosition(e) {
    const t = this._getMappedNode(e);
    return this.ngraphLayout.getNodePosition(t.id);
  }
  setNodePosition(e, t) {
    const r = this._getMappedNode(e), i = this.ngraphLayout.getNodePosition(r.id);
    i.x = t.x, i.y = t.y, i.z = t.z;
  }
  getEdgePosition(e) {
    const t = this._getMappedEdge(e), r = this.ngraphLayout.getLinkPosition(t.id);
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
    const t = this._getMappedNode(e);
    this.ngraphLayout.pinNode(t, !0);
  }
  unpin(e) {
    const t = this._getMappedNode(e);
    this.ngraphLayout.pinNode(t, !1);
  }
  _getMappedNode(e) {
    const t = this.nodeMapping.get(e);
    if (!t)
      throw new Error("Internal error: Node not found in NGraphEngine");
    return t;
  }
  _getMappedEdge(e) {
    const t = this.edgeMapping.get(e);
    if (!t)
      throw new Error("Internal error: Edge not found in NGraphEngine");
    return t;
  }
}
class Vo {
  constructor(e) {
    B(this, "graph");
    B(this, "sceneInstrumentation");
    B(this, "babylonInstrumentation");
    B(this, "graphStep", new _e());
    B(this, "nodeUpdate", new _e());
    B(this, "edgeUpdate", new _e());
    B(this, "arrowCapUpdate", new _e());
    B(this, "intersectCalc", new _e());
    B(this, "loadTime", new _e());
    B(this, "totalUpdates", 0);
    this.graph = e, this.sceneInstrumentation = new Mi(e.scene), this.sceneInstrumentation.captureFrameTime = !0, this.sceneInstrumentation.captureRenderTime = !0, this.sceneInstrumentation.captureInterFrameTime = !0, this.sceneInstrumentation.captureCameraRenderTime = !0, this.sceneInstrumentation.captureActiveMeshesEvaluationTime = !0, this.sceneInstrumentation.captureRenderTargetsRenderTime = !0, this.babylonInstrumentation = new Ni(e.engine), this.babylonInstrumentation.captureGPUFrameTime = !0, this.babylonInstrumentation.captureShaderCompilationTime = !0;
  }
  toString() {
    let e = "";
    function t(a, u, f = "") {
      e += `${a}: ${u}${f}
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
    function i(a, u, f = 1) {
      e += `${a} (min/avg/last sec/max [total]): `, e += `${(u.min * f).toFixed(2)} / `, e += `${(u.average * f).toFixed(2)} / `, e += `${(u.lastSecAverage * f).toFixed(2)} / `, e += `${(u.max * f).toFixed(2)} `, e += `[${(u.total * f).toFixed(2)}] ms
`;
    }
    return r("Graph"), t("Num Nodes", this.numNodes), t("Num Edges", this.numEdges), t("Total Updates", this.totalUpdates), t("Mesh Cache Hits", this.meshCacheHits), t("Mesh Cache Misses", this.meshCacheMisses), t("Number of Node Updates", this.nodeUpdate.count), t("Number of Edge Updates", this.edgeUpdate.count), t("Number of ArrowCap Updates", this.arrowCapUpdate.count), r("Graph Engine Performance"), i("JSON Load Time", this.loadTime), i("Graph Physics Engine Time", this.graphStep), i("Node Update Time", this.nodeUpdate), i("Edge Update Time", this.edgeUpdate), i("Arrow Cap Update Time", this.arrowCapUpdate), i("Ray Intersect Calculation Time", this.intersectCalc), r("BabylonJS Performance"), t("Draw Calls", this.sceneInstrumentation.drawCallsCounter.count), i("GPU Time", this.babylonInstrumentation.gpuFrameTimeCounter, 1e-6), i("Shader Time", this.babylonInstrumentation.shaderCompilationTimeCounter), i("Mesh Evaluation Time", this.sceneInstrumentation.activeMeshesEvaluationTimeCounter), i("Render Targets Time", this.sceneInstrumentation.renderTargetsRenderTimeCounter), i("Draw Calls Time", this.sceneInstrumentation.drawCallsCounter), i("Frame Time", this.sceneInstrumentation.frameTimeCounter), i("Render Time", this.sceneInstrumentation.renderTimeCounter), i("Time Between Frames", this.sceneInstrumentation.interFrameTimeCounter), i("Camera Render Time", this.sceneInstrumentation.cameraRenderTimeCounter), e;
  }
  step() {
    this.totalUpdates++;
  }
  reset() {
    this.totalUpdates = 0;
  }
  get numNodes() {
    return ke.list.size;
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
class Yo {
  constructor(e, t) {
    B(this, "config");
    B(this, "stats");
    // babylon
    B(this, "element");
    B(this, "canvas");
    B(this, "engine");
    B(this, "scene");
    B(this, "camera");
    B(this, "skybox");
    B(this, "xrHelper");
    B(this, "meshCache");
    // graph engine
    B(this, "graphEngineType");
    B(this, "graphEngine");
    B(this, "running", !0);
    B(this, "pinOnDrag");
    // graph
    B(this, "fetchNodes");
    B(this, "fetchEdges");
    // observeables
    B(this, "graphObservable", new gt());
    B(this, "nodeObservable", new gt());
    B(this, "edgeObservable", new gt());
    if (this.config = Fi(t), this.meshCache = new no(), this.fetchNodes = this.config.behavior.fetchNodes, this.fetchEdges = this.config.behavior.fetchEdges, typeof e == "string") {
      const r = document.getElementById(e);
      if (!r)
        throw new Error(`getElementById() could not find element '${e}'`);
      this.element = r;
    } else if (e instanceof HTMLElement)
      this.element = e;
    else
      throw new TypeError("Graph constructor requires 'element' argument that is either a string specifying the ID of the HTML element or an HTMLElement");
    if (this.element.innerHTML = "", this.canvas = document.createElement("canvas"), this.canvas.setAttribute("id", "babylonForceGraphRenderCanvas"), this.canvas.setAttribute("touch-action", "none"), this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.touchAction = "none", this.element.appendChild(this.canvas), this.engine = new bt(this.canvas, !0), this.scene = new Ci(this.engine), this.camera = new Ei(
      "camera",
      -Math.PI / 2,
      Math.PI / 2.5,
      this.config.style.startingCameraDistance,
      new ge(0, 0, 0)
    ), delete this.camera.lowerBetaLimit, delete this.camera.upperBetaLimit, this.camera.attachControl(this.canvas, !0), new Ti("light", new ge(1, 1, 0)), this.config.style.skybox && this.config.style.skybox.length && new $i(
      "testdome",
      this.config.style.skybox,
      {
        resolution: 32,
        size: 1e3
      },
      this.scene
    ), this.config.engine.type === "ngraph")
      this.graphEngine = new Ho();
    else if (this.config.engine.type === "d3")
      this.graphEngine = new to();
    else
      throw new TypeError(`Unknown graph engine type: '${this.graphEngineType}'`);
    this.stats = new Vo(this);
    for (let r = 0; r < this.config.engine.preSteps; r++)
      this.graphEngine.step();
  }
  async init() {
    this.engine.runRenderLoop(() => {
      this.update(), this.scene.render();
    }), Qo();
    const e = [
      Tn("VR", "immersive-vr", "local-floor"),
      Tn("AR", "immersive-ar", "local-floor")
    ];
    if (navigator.xr) {
      this.xrHelper = await this.scene.createDefaultXRExperienceAsync({
        uiOptions: {
          customButtons: e
        },
        disableTeleportation: !0
        // optionalFeatures: true,
        // outputCanvasOptions: {
        //     canvasOptions: {
        //         framebufferScaleFactor: 0.5,
        //     },
        // },
      }), this.xrHelper.baseExperience.onInitialXRPoseSetObservable.add((r) => {
        var i;
        ((i = this.xrHelper) == null ? void 0 : i.baseExperience.sessionManager.sessionMode) === "immersive-ar" && r.setTransformationFromNonVRCamera(this.camera);
      });
      const t = document.querySelector(".xr-button-overlay");
      t && (t.style.cssText = "z-index:11;position: absolute; right: 20px;bottom: 50px;");
    } else {
      const t = Wo(this), r = document.createElement("button");
      r.classList.add("webxr-button"), r.classList.add("webxr-not-available"), r.innerHTML = "VR / AR NOT AVAILABLE", t.appendChild(r), setTimeout(() => {
        t.remove();
      }, 5e3);
    }
    window.addEventListener("resize", () => {
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
  addNode(e, t = {}) {
    return this.nodeObservable.notifyObservers({ type: "node-add-before", nodeId: e, metadata: t }), ke.create(this, e, {
      nodeMeshConfig: this.config.style.node,
      pinOnDrag: this.pinOnDrag,
      metadata: t
    });
  }
  addEdge(e, t, r = {}) {
    return this.edgeObservable.notifyObservers({ type: "edge-add-before", srcNodeId: e, dstNodeId: t, metadata: r }), oe.create(this, e, t, {
      edgeMeshConfig: this.config.style.edge,
      metadata: r
    });
  }
  addListener(e, t) {
    switch (e) {
      case "graph-settled":
        this.graphObservable.add((r) => {
          r.type === e && t(r);
        });
        break;
      case "node-add-before":
        this.nodeObservable.add((r) => {
          r.type === e && t(r);
        });
        break;
      case "edge-add-before":
        this.edgeObservable.add((r) => {
          r.type === e && t(r);
        });
        break;
      default:
        throw new TypeError(`Unknown listener type in addListener: ${e}`);
    }
  }
  async loadJsonData(e, t = {}) {
    this.stats.loadTime.beginMonitoring();
    const { nodeListProp: r, edgeListProp: i, nodeIdProp: a, edgeSrcIdProp: u, edgeDstIdProp: f } = Di(t), h = await (await fetch(e, t.fetchOpts)).json();
    if (!Array.isArray(h[r]))
      throw TypeError(`when fetching JSON data: '${r}' was not an Array`);
    if (!Array.isArray(h[i]))
      throw TypeError(`when fetching JSON data: '${i}' was not an Array`);
    for (const l of h[r]) {
      const g = l[a], b = l;
      this.addNode(g, b);
    }
    for (const l of h[i]) {
      const g = l[u], b = l[f], y = l;
      this.addEdge(g, b, y);
    }
    this.stats.loadTime.endMonitoring();
  }
}
function Tn(n, e, t) {
  e = e || "immersive-vr", t = t || "local-floor";
  const r = document.createElement("button");
  r.classList.add("webxr-button"), r.classList.add("webxr-available"), r.innerHTML = n;
  const i = new Si(r, e, t);
  return i.update = function(a) {
    this.element.style.display = a === null || a === this ? "" : "none", r.className = `babylonVRicon${a === this ? " vrdisplaypresenting" : ""}`;
  }, i;
}
function Qo() {
  const n = `
    .webxr-button {
        font-family: 'Verdana', sans-serif;
        font-size: 1em;
        font-weight: bold;
        color: white;
        border: 2px solid white;
        padding: 4px 16px 4px 16px;
        margin-left: 10px;
        border-radius: 8px;
    }

    .webxr-available {
        background: black;
        box-shadow:0 0 0 0px white, 0 0 0 2px black;
    }

    .webxr-not-available {
        background: grey;
        box-shadow:0 0 0 0px white, 0 0 0 2px grey;
    }

    .webxr-available:hover {
        transform: scale(1.05);
    } 

    .webxr-available:active {
        background-color: rgba(51,51,51,1);
    } 
    
    .webxr-available:focus {
        background-color: rgba(51,51,51,1);
    }
    
    canvas {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        outline: none;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0); /* mobile webkit */
    }`, e = document.createElement("style");
  e.appendChild(document.createTextNode(n)), document.getElementsByTagName("head")[0].appendChild(e);
}
function Wo(n) {
  const e = document.createElement("div");
  e.classList.add("xr-button-overlay"), e.style.cssText = "z-index:11;position: absolute; right: 20px;bottom: 50px;";
  const t = n.scene.getEngine().getInputElement();
  return t && t.parentNode && t.parentNode.appendChild(e), e;
}
export {
  oe as Edge,
  Yo as Graph,
  ke as Node,
  Ko as util
};
