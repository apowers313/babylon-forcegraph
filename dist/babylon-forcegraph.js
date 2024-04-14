var li = Object.defineProperty;
var pi = (n, e, t) => e in n ? li(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var I = (n, e, t) => (pi(n, typeof e != "symbol" ? e + "" : e, t), t);
import { SixDofDragBehavior as gi, ActionManager as rn, ExecuteCodeAction as vi, StandardMaterial as an, Color3 as xe, MeshBuilder as ae, DynamicTexture as on, CreateGreasedLine as Qe, Ray as yi, GreasedLineTools as mi, GreasedLineMeshWidthDistribution as bi, RawTexture as sn, Engine as mt, GreasedLineMeshColorMode as wi, Observable as pt, Scene as xi, ArcRotateCamera as _i, Vector3 as un, HemisphericLight as Mi, PhotoDome as Ni, SceneInstrumentation as Ci, EngineInstrumentation as Ei, PerfCounter as Ve } from "@babylonjs/core";
const En = /* @__PURE__ */ new Map([
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
function _e(n) {
  let e = En.get(n);
  return e || n;
}
function Tn(n, e) {
  return 1 / (1 + Math.exp(-n / e));
}
const Uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colorMap: En,
  colorNameToHex: _e,
  sigmoid: Tn
}, Symbol.toStringTag, { value: "Module" })), fn = 1.618;
let Me = class D {
  constructor(e, t, r = {}) {
    I(this, "parentGraph");
    I(this, "id");
    I(this, "metadata");
    I(this, "mesh");
    I(this, "label");
    I(this, "meshDragBehavior");
    I(this, "dragging", !1);
    I(this, "nodeMeshConfig");
    I(this, "pinOnDrag");
    if (this.parentGraph = e, this.id = t, this.metadata = r.metadata ?? {}, this.nodeMeshConfig = this.parentGraph.config.nodeMeshOpts, this.parentGraph.graphEngine.addNode(this), this.mesh = this.nodeMeshConfig.nodeMeshFactory(this, this.parentGraph, this.nodeMeshConfig), this.mesh.metadata = { parentNode: this }, this.nodeMeshConfig.label && (this.label = D.createLabel(this.id.toString(), this, this.parentGraph), this.label.parent = this.mesh, this.label.position.y += 1), this.pinOnDrag = r.pinOnDrag ?? !0, this.meshDragBehavior = new gi(), this.mesh.addBehavior(this.meshDragBehavior), this.meshDragBehavior.onDragStartObservable.add(() => {
      this.parentGraph.running = !0, this.dragging = !0;
    }), this.meshDragBehavior.onDragEndObservable.add(() => {
      this.parentGraph.running = !0, this.pinOnDrag && this.pin(), this.dragging = !1;
    }), this.meshDragBehavior.onPositionChangedObservable.add((i) => {
      this.parentGraph.running = !0, this.parentGraph.graphEngine.setNodePosition(this, i.position);
    }), this.mesh.actionManager = new rn(this.parentGraph.scene), this.parentGraph.fetchNodes && this.parentGraph.fetchEdges) {
      const { fetchNodes: i, fetchEdges: a } = this.parentGraph;
      this.mesh.actionManager.registerAction(
        new vi(
          {
            trigger: rn.OnDoublePickTrigger
            // trigger: ActionManager.OnLongPressTrigger,
          },
          () => {
            this.parentGraph.running = !0;
            const u = a(this, this.parentGraph), d = /* @__PURE__ */ new Set();
            u.forEach((f) => {
              d.add(f.source), d.add(f.target);
            }), d.delete(this.id), i(d, this.parentGraph).forEach((f) => this.parentGraph.addNode(f.id, f.metadata)), u.forEach((f) => this.parentGraph.addEdge(f.source, f.target, f.metadata));
          }
        )
      );
    }
  }
  getDeltaPos() {
    let e = this.parentGraph.graphEngine.getNodePosition(this);
    const t = Math.abs(this.mesh.position.x - e.x), r = Math.abs(this.mesh.position.y - e.y), i = Math.abs(this.mesh.position.z - (e.z ?? 0));
    return Math.sqrt(t * t + r * r + i * i);
  }
  update() {
    if (this.dragging)
      return;
    const e = { type: "node-update-before", node: this, doUpdate: !0 };
    if (this.parentGraph.nodeObservable.notifyObservers(e), e.doUpdate) {
      let t = this.parentGraph.graphEngine.getNodePosition(this);
      this.mesh.position.x = t.x, this.mesh.position.y = t.y, t.z && (this.mesh.position.z = t.z);
    }
    this.parentGraph.nodeObservable.notifyObservers({ type: "node-update-after", node: this });
  }
  pin() {
    this.parentGraph.graphEngine.pin(this);
  }
  unpin() {
    this.parentGraph.graphEngine.unpin(this);
  }
  static get list() {
    return Ti;
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
        case "torus":
          i = D.createTorus(e, t, r);
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
      let a = new an("defaultMaterial"), u = r.color;
      return a.diffuseColor = xe.FromHexString(_e(u)), a.wireframe = r.wireframe, a.freeze(), i.visibility = r.opacity, i.material = a, i;
    });
  }
  static createBox(e, t, r) {
    return ae.CreateBox("box", { size: r.size });
  }
  static createSphere(e, t, r) {
    return ae.CreateSphere("sphere", { diameter: r.size });
  }
  static createCylinder(e, t, r) {
    return ae.CreateCylinder("cylinder", { height: r.size * fn, diameter: r.size });
  }
  static createCone(e, t, r) {
    return ae.CreateCylinder("cylinder", { height: r.size * fn, diameterTop: 0, diameterBottom: r.size });
  }
  static createCapsule(e, t, r) {
    return ae.CreateCapsule("capsule", {});
  }
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
    const a = "48px Verdana", s = 0.006944444444444444, l = new on("DynamicTexture", 64, r.scene).getContext();
    l.font = a;
    const g = l.measureText(e).width + 8, b = g * s, y = new on("DynamicTexture", { width: g, height: 72 }, r.scene, !1), v = new an("mat", r.scene);
    v.specularColor = xe.Black(), y.hasAlpha = !0;
    const w = y.getContext();
    w.fillStyle = "white", w.beginPath();
    const m = 0, c = 0, M = [20, 20, 20, 20], E = g, N = 72;
    w.moveTo(m + M[0], c), w.lineTo(m + E - M[1], c), w.arc(m + E - M[1], c + M[1], M[1], 3 * Math.PI / 2, Math.PI * 2), w.lineTo(m + E, c + N - M[2]), w.arc(m + E - M[2], c + N - M[2], M[2], 0, Math.PI / 2), w.lineTo(m + M[3], c + N), w.arc(m + M[3], c + N - M[3], M[3], Math.PI / 2, Math.PI), w.lineTo(m, c + M[0]), w.arc(m + M[0], c + M[0], M[0], Math.PI, 3 * Math.PI / 2), w.closePath(), w.fill(), y.drawText(e, null, null, a, "#000000", "transparent", !0), v.opacityTexture = y, v.emissiveTexture = y, v.disableLighting = !0;
    const _ = ae.CreatePlane("plane", { width: b, height: 0.5 }, r.scene);
    return _.material = v, _.billboardMode = 7, _;
  }
};
const Ti = /* @__PURE__ */ new Map();
class se {
  // ray: Ray;
  constructor(e, t, r, i = {}) {
    I(this, "parentGraph");
    I(this, "srcId");
    I(this, "dstId");
    I(this, "dstNode");
    I(this, "srcNode");
    I(this, "metadata");
    I(this, "mesh");
    I(this, "edgeMeshConfig");
    this.parentGraph = e, this.srcId = t, this.dstId = r, this.metadata = i.metadata ?? {};
    const a = Me.list.get(t);
    if (!a)
      throw new Error(`Attempting to create edge '${t}->${r}', Node '${t}' hasn't been created yet.`);
    const u = Me.list.get(r);
    if (!u)
      throw new Error(`Attempting to create edge '${t}->${r}', Node '${r}' hasn't been created yet.`);
    this.srcNode = a, this.dstNode = u, this.edgeMeshConfig = this.parentGraph.config.edgeMeshOpts, this.parentGraph.graphEngine.addEdge(this), this.mesh = this.edgeMeshConfig.edgeMeshFactory(this, this.parentGraph, this.edgeMeshConfig), this.mesh.metadata = {}, this.mesh.metadata.parentEdge = this;
  }
  update() {
    let e = this.parentGraph.graphEngine.getEdgePosition(this);
    const t = { type: "edge-update-before", edge: this, doUpdate: !0 };
    this.parentGraph.edgeObservable.notifyObservers(t), t.doUpdate && this.mesh.setPoints([
      [
        e.src.x,
        e.src.y,
        e.src.z ?? 0,
        e.dst.x,
        e.dst.y,
        e.dst.z ?? 0
      ]
    ]), this.parentGraph.edgeObservable.notifyObservers({ type: "edge-update-after", edge: this });
  }
  static get list() {
    return Bi;
  }
  static create(e, t, r, i = {}) {
    const a = se.list.get(t, r);
    if (a)
      return a;
    const u = new se(e, t, r, i);
    return se.list.set(t, r, u), u;
  }
  static defaultEdgeMeshFactory(e, t, r) {
    switch (r.type) {
      case "plain":
        return se.createPlainLine(e, t, r);
      case "arrow":
        return se.createArrowLine(e, t, r);
      case "moving":
        return se.createMovingLine(e, t, r);
      default:
        throw new TypeError(`Unknown Edge type: '${r.type}'`);
    }
  }
  static createPlainLine(e, t, r) {
    return Qe(
      "edge-plain",
      { points: [0, 0, 0, 1, 1, 1] },
      { color: xe.FromHexString(_e(r.color)) }
    );
  }
  static createArrowLine(e, t, r) {
    return e.parentGraph.edgeObservable.add((i) => {
      i.doUpdate = !1;
      const a = e.srcNode.mesh, u = e.dstNode.mesh, d = new yi(e.srcNode.mesh.position, e.dstNode.mesh.position);
      d.position = u.position, d.direction = u.position.subtract(a.position);
      const s = d.intersectsMeshes([u]), f = d.intersectsMeshes([a]);
      if (s.length && f.length) {
        const l = s[0].pickedPoint, g = f[0].pickedPoint, b = 0.1, y = 3, v = l.clone().normalize().multiplyByFloats(b * y, b * y, b * y), w = l.subtract(v);
        e.mesh.setPoints([
          [w.x, w.y, w.z, g.x, g.y, g.z]
        ]);
        const m = mi.GetArrowCap(
          w,
          // position
          d.direction,
          // direction
          b / 3,
          // length
          4,
          // widthUp
          4
          // widthDown
        );
        Qe(
          "lines",
          {
            points: m.points,
            widths: m.widths,
            widthDistribution: bi.WIDTH_DISTRIBUTION_START,
            instance: e.mesh
          }
          // e.parentGraph.scene
        );
      }
    }), Qe(
      "edge-arrow",
      { points: [0, 0, 0, 1, 1, 1] },
      { color: xe.FromHexString(_e(r.color)) }
    );
  }
  static createMovingLine(e, t, r) {
    const i = xe.FromHexString(_e(r.movingLineOpts.baseColor)), a = xe.FromHexString(_e(r.color)), u = Math.floor(i.r * 255), d = Math.floor(i.g * 255), s = Math.floor(i.b * 255), f = Math.floor(a.r * 255), l = Math.floor(a.g * 255), g = Math.floor(a.b * 255), b = new Uint8Array([u, d, s, f, l, g]), y = new sn(
      b,
      // data
      b.length / 3,
      // width
      1,
      // height
      mt.TEXTUREFORMAT_RGB,
      // format
      t.scene,
      // sceneOrEngine
      !1,
      // generateMipMaps
      !0,
      // invertY
      mt.TEXTURE_NEAREST_NEAREST
      // samplingMode
      // samplingMode
      // type
      // creationFlags
      // useSRGBBuffer
    );
    y.wrapU = sn.WRAP_ADDRESSMODE, y.name = "blue-white-texture";
    const v = Qe(
      "edge-moving",
      { points: [0, 0, 0, 1, 1, 1] },
      {
        // color: Color3.FromHexString(colorNameToHex(edgeColor))
        width: r.movingLineOpts.width,
        colorMode: wi.COLOR_MODE_MULTIPLY
      }
    );
    let w = v.material;
    return w.emissiveTexture = y, w.disableLighting = !0, y.uScale = 5, t.scene.onBeforeRenderObservable.add(() => {
      y.uOffset += 0.04 * t.scene.getAnimationRatio();
    }), v;
  }
}
class $i {
  constructor() {
    I(this, "map", /* @__PURE__ */ new Map());
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
    let r = this.map.get(e);
    if (r)
      return r.get(t);
  }
  get size() {
    let e = 0;
    for (let t of this.map.values())
      e += t.size;
    return e;
  }
}
const Bi = new $i();
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _t(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Mt = function(e) {
  Ii(e);
  var t = Si(e);
  return e.on = t.on, e.off = t.off, e.fire = t.fire, e;
};
function Si(n) {
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
          for (var u = e[t], d = 0; d < u.length; ++d)
            u[d].callback === r && u.splice(d, 1);
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
function Ii(n) {
  if (!n)
    throw new Error("Eventify cannot use falsy object as events subject");
  for (var e = ["on", "fire", "off"], t = 0; t < e.length; ++t)
    if (n.hasOwnProperty(e[t]))
      throw new Error("Subject cannot be eventified, since it already has property '" + e[t] + "'");
}
var Pi = Ai, zi = Mt;
function Ai(n) {
  if (n = n || {}, "uniqueLinkId" in n && (console.warn(
    "ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",
    `
`,
    `Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`
  ), n.multigraph = n.uniqueLinkId), n.multigraph === void 0 && (n.multigraph = !1), typeof Map != "function")
    throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), r = {}, i = 0, a = n.multigraph ? N : E, u = [], d = $, s = $, f = $, l = $, g = {
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
    addNode: w,
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
    removeLink: O,
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
    getLinks: z,
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
  return zi(g), b(), g;
  function b() {
    var S = g.on;
    g.on = P;
    function P() {
      return g.beginUpdate = f = Q, g.endUpdate = l = re, d = y, s = v, g.on = S, S.apply(g, arguments);
    }
  }
  function y(S, P) {
    u.push({
      link: S,
      changeType: P
    });
  }
  function v(S, P) {
    u.push({
      node: S,
      changeType: P
    });
  }
  function w(S, P) {
    if (S === void 0)
      throw new Error("Invalid node identifier");
    f();
    var L = m(S);
    return L ? (L.data = P, s(L, "update")) : (L = new Oi(S, P), s(L, "add")), e.set(S, L), l(), L;
  }
  function m(S) {
    return e.get(S);
  }
  function c(S) {
    var P = m(S);
    if (!P)
      return !1;
    f();
    var L = P.links;
    return L && (L.forEach(j), P.links = null), e.delete(S), s(P, "remove"), l(), !0;
  }
  function M(S, P, L) {
    f();
    var A = m(S) || w(S), K = m(P) || w(P), X = a(S, P, L), J = t.has(X.id);
    return t.set(X.id, X), hn(A, X), S !== P && hn(K, X), d(X, J ? "update" : "add"), l(), X;
  }
  function E(S, P, L) {
    var A = Xe(S, P), K = t.get(A);
    return K ? (K.data = L, K) : new dn(S, P, L, A);
  }
  function N(S, P, L) {
    var A = Xe(S, P), K = r.hasOwnProperty(A);
    if (K || U(S, P)) {
      K || (r[A] = 0);
      var X = "@" + ++r[A];
      A = Xe(S + X, P + X);
    }
    return new dn(S, P, L, A);
  }
  function _() {
    return e.size;
  }
  function T() {
    return t.size;
  }
  function z(S) {
    var P = m(S);
    return P ? P.links : null;
  }
  function O(S, P) {
    return P !== void 0 && (S = U(S, P)), j(S);
  }
  function j(S) {
    if (!S || !t.get(S.id))
      return !1;
    f(), t.delete(S.id);
    var P = m(S.fromId), L = m(S.toId);
    return P && P.links.delete(S), L && L.links.delete(S), d(S, "remove"), l(), !0;
  }
  function U(S, P) {
    if (!(S === void 0 || P === void 0))
      return t.get(Xe(S, P));
  }
  function H() {
    f(), oe(function(S) {
      c(S.id);
    }), l();
  }
  function G(S) {
    if (typeof S == "function")
      for (var P = t.values(), L = P.next(); !L.done; ) {
        if (S(L.value))
          return !0;
        L = P.next();
      }
  }
  function ue(S, P, L) {
    var A = m(S);
    if (A && A.links && typeof P == "function")
      return L ? x(A.links, S, P) : C(A.links, S, P);
  }
  function C(S, P, L) {
    for (var A, K = S.values(), X = K.next(); !X.done; ) {
      var J = X.value, Fe = J.fromId === P ? J.toId : J.fromId;
      if (A = L(e.get(Fe), J), A)
        return !0;
      X = K.next();
    }
  }
  function x(S, P, L) {
    for (var A, K = S.values(), X = K.next(); !X.done; ) {
      var J = X.value;
      if (J.fromId === P && (A = L(e.get(J.toId), J), A))
        return !0;
      X = K.next();
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
  function oe(S) {
    if (typeof S != "function")
      throw new Error("Function is expected to iterate over graph nodes. You passed " + S);
    for (var P = e.values(), L = P.next(); !L.done; ) {
      if (S(L.value))
        return !0;
      L = P.next();
    }
  }
}
function Oi(n, e) {
  this.id = n, this.links = null, this.data = e;
}
function hn(n, e) {
  n.links ? n.links.add(e) : n.links = /* @__PURE__ */ new Set([e]);
}
function dn(n, e, t, r) {
  this.fromId = n, this.toId = e, this.data = t, this.id = r;
}
function Xe(n, e) {
  return n.toString() + "👉 " + e.toString();
}
const Li = /* @__PURE__ */ _t(Pi);
var Nt = { exports: {} }, Le = { exports: {} }, $n = function(e) {
  return e === 0 ? "x" : e === 1 ? "y" : e === 2 ? "z" : "c" + (e + 1);
};
const Fi = $n;
var Ce = function(e) {
  return t;
  function t(r, i) {
    let a = i && i.indent || 0, u = i && i.join !== void 0 ? i.join : `
`, d = Array(a + 1).join(" "), s = [];
    for (let f = 0; f < e; ++f) {
      let l = Fi(f), g = f === 0 ? "" : d;
      s.push(g + r.replace(/{var}/g, l));
    }
    return s.join(u);
  }
};
const Bn = Ce;
Le.exports = ki;
Le.exports.generateCreateBodyFunctionBody = Sn;
Le.exports.getVectorCode = Pn;
Le.exports.getBodyCode = In;
function ki(n, e) {
  let t = Sn(n, e), { Body: r } = new Function(t)();
  return r;
}
function Sn(n, e) {
  return `
${Pn(n, e)}
${In(n)}
return {Body: Body, Vector: Vector};
`;
}
function In(n) {
  let e = Bn(n), t = e("{var}", { join: ", " });
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
function Pn(n, e) {
  let t = Bn(n), r = "";
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
var qi = Le.exports, ge = { exports: {} };
const Ct = Ce, pe = $n;
ge.exports = Di;
ge.exports.generateQuadTreeFunctionBody = zn;
ge.exports.getInsertStackCode = kn;
ge.exports.getQuadNodeCode = Fn;
ge.exports.isSamePosition = An;
ge.exports.getChildBodyCode = Ln;
ge.exports.setChildBodyCode = On;
function Di(n) {
  let e = zn(n);
  return new Function(e)();
}
function zn(n) {
  let e = Ct(n), t = Math.pow(2, n);
  return `
${kn()}
${Fn(n)}
${An(n)}
${Ln(n)}
${On(n)}

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
    for (let l = 0; l < n; ++l)
      s.push(f + `if (${pe(l)} > max_${pe(l)}) {`), s.push(f + `  quadIdx = quadIdx + ${Math.pow(2, l)};`), s.push(f + `  min_${pe(l)} = max_${pe(l)};`), s.push(f + `  max_${pe(l)} = node.max_${pe(l)};`), s.push(f + "}");
    return s.join(`
`);
  }
  function a() {
    let d = Array(11).join(" "), s = [];
    for (let f = 0; f < t; ++f)
      s.push(d + `if (node.quad${f}) {`), s.push(d + `  queue[pushIdx] = node.quad${f};`), s.push(d + "  queueLength += 1;"), s.push(d + "  pushIdx += 1;"), s.push(d + "}");
    return s.join(`
`);
  }
  function u(d) {
    let s = [];
    for (let f = 0; f < t; ++f)
      s.push(`${d}quad${f} = null;`);
    return s.join(`
`);
  }
}
function An(n) {
  let e = Ct(n);
  return `
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});", { indent: 2 })}
  
    return ${e("d{var} < 1e-8", { join: " && " })};
  }  
`;
}
function On(n) {
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
function Ln(n) {
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
function Fn(n) {
  let e = Ct(n), t = Math.pow(2, n);
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
    for (let d = 0; d < t; ++d)
      u.push(`${a}quad${d} = null;`);
    return u.join(`
`);
  }
}
function kn() {
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
var Gi = ge.exports, Et = { exports: {} };
Et.exports = Ri;
Et.exports.generateFunctionBody = qn;
const ji = Ce;
function Ri(n) {
  let e = qn(n);
  return new Function("bodies", "settings", "random", e);
}
function qn(n) {
  let e = ji(n);
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
var Ui = Et.exports, Tt = { exports: {} };
const Hi = Ce;
Tt.exports = Qi;
Tt.exports.generateCreateDragForceFunctionBody = Dn;
function Qi(n) {
  let e = Dn(n);
  return new Function("options", e);
}
function Dn(n) {
  return `
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${Hi(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};", { indent: 6 })}
    }
  };
`;
}
var Vi = Tt.exports, $t = { exports: {} };
const Wi = Ce;
$t.exports = Xi;
$t.exports.generateCreateSpringForceFunctionBody = Gn;
function Xi(n) {
  let e = Gn(n);
  return new Function("options", "random", e);
}
function Gn(n) {
  let e = Wi(n);
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
var Ki = $t.exports, Bt = { exports: {} };
const Ji = Ce;
Bt.exports = Yi;
Bt.exports.generateIntegratorFunctionBody = jn;
function Yi(n) {
  let e = jn(n);
  return new Function("bodies", "timeStep", "adaptiveTimeStepWeight", e);
}
function jn(n) {
  let e = Ji(n);
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
var Zi = Bt.exports, gt, cn;
function ea() {
  if (cn)
    return gt;
  cn = 1, gt = n;
  function n(e, t, r, i) {
    this.from = e, this.to = t, this.length = r, this.coefficient = i;
  }
  return gt;
}
var vt, ln;
function ta() {
  if (ln)
    return vt;
  ln = 1, vt = n;
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
  return vt;
}
var Se = { exports: {} }, pn;
function na() {
  if (pn)
    return Se.exports;
  pn = 1, Se.exports = n, Se.exports.random = n, Se.exports.randomIterator = d;
  function n(s) {
    var f = typeof s == "number" ? s : +/* @__PURE__ */ new Date();
    return new e(f);
  }
  function e(s) {
    this.seed = s;
  }
  e.prototype.next = u, e.prototype.nextDouble = a, e.prototype.uniform = a, e.prototype.gaussian = t;
  function t() {
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
    var l = f || n();
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
      var y, v, w;
      for (y = s.length - 1; y > 0; --y)
        v = l.next(y + 1), w = s[v], s[v] = s[y], s[y] = w;
      return s;
    }
    function b(y) {
      var v, w, m;
      for (v = s.length - 1; v > 0; --v)
        w = l.next(v + 1), m = s[w], s[w] = s[v], s[v] = m, y(m);
      s.length && y(s[0]);
    }
  }
  return Se.exports;
}
var Rn = fa, ra = qi, ia = Gi, aa = Ui, oa = Vi, sa = Ki, ua = Zi, gn = {};
function fa(n) {
  var e = ea(), t = ta(), r = Mt;
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
  var i = gn[n.dimensions];
  if (!i) {
    var a = n.dimensions;
    i = {
      Body: ra(a, n.debug),
      createQuadTree: ia(a),
      createBounds: aa(a),
      createDragForce: oa(a),
      createSpringForce: sa(a),
      integrate: ua(a)
    }, gn[a] = i;
  }
  var u = i.Body, d = i.createQuadTree, s = i.createBounds, f = i.createDragForce, l = i.createSpringForce, g = i.integrate, b = (x) => new u(x), y = na().random(42), v = [], w = [], m = d(n, y), c = s(v, n, y), M = l(n, y), E = f(n), N = 0, _ = [], T = /* @__PURE__ */ new Map(), z = 0;
  U("nbody", ue), U("spring", C);
  var O = {
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
    springs: w,
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
      for (var x = 0; x < _.length; ++x)
        _[x](z);
      var $ = g(v, n.timeStep, n.adaptiveTimeStepWeight);
      return z += 1, $;
    },
    /**
     * Adds body to the system
     *
     * @param {ngraph.physics.primitives.Body} body physical body
     *
     * @returns {ngraph.physics.primitives.Body} added body
     */
    addBody: function(x) {
      if (!x)
        throw new Error("Body is required");
      return v.push(x), x;
    },
    /**
     * Adds body to the system at given position
     *
     * @param {Object} pos position of a body
     *
     * @returns {ngraph.physics.primitives.Body} added body
     */
    addBodyAt: function(x) {
      if (!x)
        throw new Error("Body position is required");
      var $ = b(x);
      return v.push($), $;
    },
    /**
     * Removes body from the system
     *
     * @param {ngraph.physics.primitives.Body} body to remove
     *
     * @returns {Boolean} true if body found and removed. falsy otherwise;
     */
    removeBody: function(x) {
      if (x) {
        var $ = v.indexOf(x);
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
    addSpring: function(x, $, Q, re) {
      if (!x || !$)
        throw new Error("Cannot add null spring to force simulator");
      typeof Q != "number" && (Q = -1);
      var oe = new e(x, $, Q, re >= 0 ? re : -1);
      return w.push(oe), oe;
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
    removeSpring: function(x) {
      if (x) {
        var $ = w.indexOf(x);
        if ($ > -1)
          return w.splice($, 1), !0;
      }
    },
    getBestNewBodyPosition: function(x) {
      return c.getBestNewPosition(x);
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
    gravity: function(x) {
      return x !== void 0 ? (n.gravity = x, m.options({ gravity: x }), this) : n.gravity;
    },
    theta: function(x) {
      return x !== void 0 ? (n.theta = x, m.options({ theta: x }), this) : n.theta;
    },
    /**
     * Returns pseudo-random number generator instance.
     */
    random: y
  };
  return ha(n, O), r(O), O;
  function j() {
    return c.update(), c.box;
  }
  function U(x, $) {
    if (T.has(x))
      throw new Error("Force " + x + " is already added");
    T.set(x, $), _.push($);
  }
  function H(x) {
    var $ = _.indexOf(T.get(x));
    $ < 0 || (_.splice($, 1), T.delete(x));
  }
  function G() {
    return T;
  }
  function ue() {
    if (v.length !== 0) {
      m.insertBodies(v);
      for (var x = v.length; x--; ) {
        var $ = v[x];
        $.isPinned || ($.reset(), m.updateBodyForce($), E.update($));
      }
    }
  }
  function C() {
    for (var x = w.length; x--; )
      M.update(w[x]);
  }
}
function ha(n, e) {
  for (var t in n)
    da(n, e, t);
}
function da(n, e, t) {
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
Nt.exports = la;
Nt.exports.simulator = Rn;
var ca = Mt;
function la(n, e) {
  if (!n)
    throw new Error("Graph structure cannot be undefined");
  var t = e && e.createSimulator || Rn, r = t(e);
  if (Array.isArray(e))
    throw new Error("Physics settings is expected to be an object");
  var i = n.version > 19 ? ue : G;
  e && typeof e.nodeMass == "function" && (i = e.nodeMass);
  var a = /* @__PURE__ */ new Map(), u = {}, d = 0, s = r.settings.springTransform || pa;
  E(), m();
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
      var C = r.step();
      l.lastMove = C, l.fire("step");
      var x = C / d, $ = x <= 0.01;
      return g($), $;
    },
    /**
     * For a given `nodeId` returns position
     */
    getNodePosition: function(C) {
      return H(C).pos;
    },
    /**
     * Sets position of a node to a given coordinates
     * @param {string} nodeId node identifier
     * @param {number} x position of a node
     * @param {number} y position of a node
     * @param {number=} z position of node (only if applicable to body)
     */
    setNodePosition: function(C) {
      var x = H(C);
      x.setPosition.apply(x, Array.prototype.slice.call(arguments, 1));
    },
    /**
     * @returns {Object} Link position by link id
     * @returns {Object.from} {x, y} coordinates of link start
     * @returns {Object.to} {x, y} coordinates of link end
     */
    getLinkPosition: function(C) {
      var x = u[C];
      if (x)
        return {
          from: x.from.pos,
          to: x.to.pos
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
    pinNode: function(C, x) {
      var $ = H(C.id);
      $.isPinned = !!x;
    },
    /**
     * Checks whether given graph's node is currently pinned
     */
    isNodePinned: function(C) {
      return H(C.id).isPinned;
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
    getBody: w,
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
  return ca(l), l;
  function g(C) {
    f !== C && (f = C, c(C));
  }
  function b(C) {
    a.forEach(C);
  }
  function y() {
    var C = 0, x = 0;
    return b(function($) {
      C += Math.abs($.force.x), x += Math.abs($.force.y);
    }), Math.sqrt(C * C + x * x);
  }
  function v(C, x) {
    var $;
    if (x === void 0)
      typeof C != "object" ? $ = C : $ = C.id;
    else {
      var Q = n.hasLink(C, x);
      if (!Q)
        return;
      $ = Q.id;
    }
    return u[$];
  }
  function w(C) {
    return a.get(C);
  }
  function m() {
    n.on("changed", M);
  }
  function c(C) {
    l.fire("stable", C);
  }
  function M(C) {
    for (var x = 0; x < C.length; ++x) {
      var $ = C[x];
      $.changeType === "add" ? ($.node && N($.node.id), $.link && T($.link)) : $.changeType === "remove" && ($.node && _($.node), $.link && z($.link));
    }
    d = n.getNodesCount();
  }
  function E() {
    d = 0, n.forEachNode(function(C) {
      N(C.id), d += 1;
    }), n.forEachLink(T);
  }
  function N(C) {
    var x = a.get(C);
    if (!x) {
      var $ = n.getNode(C);
      if (!$)
        throw new Error("initBody() was called with unknown node id");
      var Q = $.position;
      if (!Q) {
        var re = O($);
        Q = r.getBestNewBodyPosition(re);
      }
      x = r.addBodyAt(Q), x.id = C, a.set(C, x), j(C), U($) && (x.isPinned = !0);
    }
  }
  function _(C) {
    var x = C.id, $ = a.get(x);
    $ && (a.delete(x), r.removeBody($));
  }
  function T(C) {
    j(C.fromId), j(C.toId);
    var x = a.get(C.fromId), $ = a.get(C.toId), Q = r.addSpring(x, $, C.length);
    s(C, Q), u[C.id] = Q;
  }
  function z(C) {
    var x = u[C.id];
    if (x) {
      var $ = n.getNode(C.fromId), Q = n.getNode(C.toId);
      $ && j($.id), Q && j(Q.id), delete u[C.id], r.removeSpring(x);
    }
  }
  function O(C) {
    var x = [];
    if (!C.links)
      return x;
    for (var $ = Math.min(C.links.length, 2), Q = 0; Q < $; ++Q) {
      var re = C.links[Q], oe = re.fromId !== C.id ? a.get(re.fromId) : a.get(re.toId);
      oe && oe.pos && x.push(oe);
    }
    return x;
  }
  function j(C) {
    var x = a.get(C);
    if (x.mass = i(C), Number.isNaN(x.mass))
      throw new Error("Node mass should be a number");
  }
  function U(C) {
    return C && (C.isPinned || C.data && C.data.isPinned);
  }
  function H(C) {
    var x = a.get(C);
    return x || (N(C), x = a.get(C)), x;
  }
  function G(C) {
    var x = n.getLinks(C);
    return x ? 1 + x.length / 3 : 1;
  }
  function ue(C) {
    var x = n.getLinks(C);
    return x ? 1 + x.size / 3 : 1;
  }
}
function pa() {
}
var ga = Nt.exports;
const va = /* @__PURE__ */ _t(ga);
class ya {
  constructor() {
    I(this, "ngraph");
    I(this, "ngraphLayout");
    I(this, "nodeMapping", /* @__PURE__ */ new Map());
    I(this, "edgeMapping", /* @__PURE__ */ new Map());
    this.ngraph = Li(), this.ngraphLayout = va(this.ngraph, { dimensions: 3 });
  }
  async init() {
  }
  step() {
    this.ngraphLayout.step();
  }
  addNode(e) {
    const t = this.ngraph.addNode(e.id, { parentNode: e });
    this.nodeMapping.set(e, t);
  }
  addEdge(e) {
    const t = this.ngraph.addLink(e.srcId, e.dstId, { parentEdge: this });
    this.edgeMapping.set(e, t);
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
function ma(n, e, t) {
  var r, i = 1;
  n == null && (n = 0), e == null && (e = 0), t == null && (t = 0);
  function a() {
    var u, d = r.length, s, f = 0, l = 0, g = 0;
    for (u = 0; u < d; ++u)
      s = r[u], f += s.x || 0, l += s.y || 0, g += s.z || 0;
    for (f = (f / d - n) * i, l = (l / d - e) * i, g = (g / d - t) * i, u = 0; u < d; ++u)
      s = r[u], f && (s.x -= f), l && (s.y -= l), g && (s.z -= g);
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
function ba(n) {
  const e = +this._x.call(null, n);
  return Un(this.cover(e), e, n);
}
function Un(n, e, t) {
  if (isNaN(e))
    return n;
  var r, i = n._root, a = { data: t }, u = n._x0, d = n._x1, s, f, l, g, b;
  if (!i)
    return n._root = a, n;
  for (; i.length; )
    if ((l = e >= (s = (u + d) / 2)) ? u = s : d = s, r = i, !(i = i[g = +l]))
      return r[g] = a, n;
  if (f = +n._x.call(null, i.data), e === f)
    return a.next = i, r ? r[g] = a : n._root = a, n;
  do
    r = r ? r[g] = new Array(2) : n._root = new Array(2), (l = e >= (s = (u + d) / 2)) ? u = s : d = s;
  while ((g = +l) == (b = +(f >= s)));
  return r[b] = i, r[g] = a, n;
}
function wa(n) {
  Array.isArray(n) || (n = Array.from(n));
  const e = n.length, t = new Float64Array(e);
  let r = 1 / 0, i = -1 / 0;
  for (let a = 0, u; a < e; ++a)
    isNaN(u = +this._x.call(null, n[a])) || (t[a] = u, u < r && (r = u), u > i && (i = u));
  if (r > i)
    return this;
  this.cover(r).cover(i);
  for (let a = 0; a < e; ++a)
    Un(this, t[a], n[a]);
  return this;
}
function xa(n) {
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
function _a() {
  var n = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        n.push(e.data);
      while (e = e.next);
  }), n;
}
function Ma(n) {
  return arguments.length ? this.cover(+n[0][0]).cover(+n[1][0]) : isNaN(this._x0) ? void 0 : [[this._x0], [this._x1]];
}
function le(n, e, t) {
  this.node = n, this.x0 = e, this.x1 = t;
}
function Na(n, e) {
  var t, r = this._x0, i, a, u = this._x1, d = [], s = this._root, f, l;
  for (s && d.push(new le(s, r, u)), e == null ? e = 1 / 0 : (r = n - e, u = n + e); f = d.pop(); )
    if (!(!(s = f.node) || (i = f.x0) > u || (a = f.x1) < r))
      if (s.length) {
        var g = (i + a) / 2;
        d.push(
          new le(s[1], g, a),
          new le(s[0], i, g)
        ), (l = +(n >= g)) && (f = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - l], d[d.length - 1 - l] = f);
      } else {
        var b = Math.abs(n - +this._x.call(null, s.data));
        b < e && (e = b, r = n - b, u = n + b, t = s.data);
      }
  return t;
}
function Ca(n) {
  if (isNaN(s = +this._x.call(null, n)))
    return this;
  var e, t = this._root, r, i, a, u = this._x0, d = this._x1, s, f, l, g, b;
  if (!t)
    return this;
  if (t.length)
    for (; ; ) {
      if ((l = s >= (f = (u + d) / 2)) ? u = f : d = f, e = t, !(t = t[g = +l]))
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
function Ea(n) {
  for (var e = 0, t = n.length; e < t; ++e)
    this.remove(n[e]);
  return this;
}
function Ta() {
  return this._root;
}
function $a() {
  var n = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++n;
      while (e = e.next);
  }), n;
}
function Ba(n) {
  var e = [], t, r = this._root, i, a, u;
  for (r && e.push(new le(r, this._x0, this._x1)); t = e.pop(); )
    if (!n(r = t.node, a = t.x0, u = t.x1) && r.length) {
      var d = (a + u) / 2;
      (i = r[1]) && e.push(new le(i, d, u)), (i = r[0]) && e.push(new le(i, a, d));
    }
  return this;
}
function Sa(n) {
  var e = [], t = [], r;
  for (this._root && e.push(new le(this._root, this._x0, this._x1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var a, u = r.x0, d = r.x1, s = (u + d) / 2;
      (a = i[0]) && e.push(new le(a, u, s)), (a = i[1]) && e.push(new le(a, s, d));
    }
    t.push(r);
  }
  for (; r = t.pop(); )
    n(r.node, r.x0, r.x1);
  return this;
}
function Ia(n) {
  return n[0];
}
function Pa(n) {
  return arguments.length ? (this._x = n, this) : this._x;
}
function Hn(n, e) {
  var t = new St(e ?? Ia, NaN, NaN);
  return n == null ? t : t.addAll(n);
}
function St(n, e, t) {
  this._x = n, this._x0 = e, this._x1 = t, this._root = void 0;
}
function vn(n) {
  for (var e = { data: n.data }, t = e; n = n.next; )
    t = t.next = { data: n.data };
  return e;
}
var te = Hn.prototype = St.prototype;
te.copy = function() {
  var n = new St(this._x, this._x0, this._x1), e = this._root, t, r;
  if (!e)
    return n;
  if (!e.length)
    return n._root = vn(e), n;
  for (t = [{ source: e, target: n._root = new Array(2) }]; e = t.pop(); )
    for (var i = 0; i < 2; ++i)
      (r = e.source[i]) && (r.length ? t.push({ source: r, target: e.target[i] = new Array(2) }) : e.target[i] = vn(r));
  return n;
};
te.add = ba;
te.addAll = wa;
te.cover = xa;
te.data = _a;
te.extent = Ma;
te.find = Na;
te.remove = Ca;
te.removeAll = Ea;
te.root = Ta;
te.size = $a;
te.visit = Ba;
te.visitAfter = Sa;
te.x = Pa;
function za(n) {
  const e = +this._x.call(null, n), t = +this._y.call(null, n);
  return Qn(this.cover(e, t), e, t, n);
}
function Qn(n, e, t, r) {
  if (isNaN(e) || isNaN(t))
    return n;
  var i, a = n._root, u = { data: r }, d = n._x0, s = n._y0, f = n._x1, l = n._y1, g, b, y, v, w, m, c, M;
  if (!a)
    return n._root = u, n;
  for (; a.length; )
    if ((w = e >= (g = (d + f) / 2)) ? d = g : f = g, (m = t >= (b = (s + l) / 2)) ? s = b : l = b, i = a, !(a = a[c = m << 1 | w]))
      return i[c] = u, n;
  if (y = +n._x.call(null, a.data), v = +n._y.call(null, a.data), e === y && t === v)
    return u.next = a, i ? i[c] = u : n._root = u, n;
  do
    i = i ? i[c] = new Array(4) : n._root = new Array(4), (w = e >= (g = (d + f) / 2)) ? d = g : f = g, (m = t >= (b = (s + l) / 2)) ? s = b : l = b;
  while ((c = m << 1 | w) === (M = (v >= b) << 1 | y >= g));
  return i[M] = a, i[c] = u, n;
}
function Aa(n) {
  var e, t, r = n.length, i, a, u = new Array(r), d = new Array(r), s = 1 / 0, f = 1 / 0, l = -1 / 0, g = -1 / 0;
  for (t = 0; t < r; ++t)
    isNaN(i = +this._x.call(null, e = n[t])) || isNaN(a = +this._y.call(null, e)) || (u[t] = i, d[t] = a, i < s && (s = i), i > l && (l = i), a < f && (f = a), a > g && (g = a));
  if (s > l || f > g)
    return this;
  for (this.cover(s, f).cover(l, g), t = 0; t < r; ++t)
    Qn(this, u[t], d[t], n[t]);
  return this;
}
function Oa(n, e) {
  if (isNaN(n = +n) || isNaN(e = +e))
    return this;
  var t = this._x0, r = this._y0, i = this._x1, a = this._y1;
  if (isNaN(t))
    i = (t = Math.floor(n)) + 1, a = (r = Math.floor(e)) + 1;
  else {
    for (var u = i - t || 1, d = this._root, s, f; t > n || n >= i || r > e || e >= a; )
      switch (f = (e < r) << 1 | n < t, s = new Array(4), s[f] = d, d = s, u *= 2, f) {
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
    this._root && this._root.length && (this._root = d);
  }
  return this._x0 = t, this._y0 = r, this._x1 = i, this._y1 = a, this;
}
function La() {
  var n = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        n.push(e.data);
      while (e = e.next);
  }), n;
}
function Fa(n) {
  return arguments.length ? this.cover(+n[0][0], +n[0][1]).cover(+n[1][0], +n[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function Z(n, e, t, r, i) {
  this.node = n, this.x0 = e, this.y0 = t, this.x1 = r, this.y1 = i;
}
function ka(n, e, t) {
  var r, i = this._x0, a = this._y0, u, d, s, f, l = this._x1, g = this._y1, b = [], y = this._root, v, w;
  for (y && b.push(new Z(y, i, a, l, g)), t == null ? t = 1 / 0 : (i = n - t, a = e - t, l = n + t, g = e + t, t *= t); v = b.pop(); )
    if (!(!(y = v.node) || (u = v.x0) > l || (d = v.y0) > g || (s = v.x1) < i || (f = v.y1) < a))
      if (y.length) {
        var m = (u + s) / 2, c = (d + f) / 2;
        b.push(
          new Z(y[3], m, c, s, f),
          new Z(y[2], u, c, m, f),
          new Z(y[1], m, d, s, c),
          new Z(y[0], u, d, m, c)
        ), (w = (e >= c) << 1 | n >= m) && (v = b[b.length - 1], b[b.length - 1] = b[b.length - 1 - w], b[b.length - 1 - w] = v);
      } else {
        var M = n - +this._x.call(null, y.data), E = e - +this._y.call(null, y.data), N = M * M + E * E;
        if (N < t) {
          var _ = Math.sqrt(t = N);
          i = n - _, a = e - _, l = n + _, g = e + _, r = y.data;
        }
      }
  return r;
}
function qa(n) {
  if (isNaN(l = +this._x.call(null, n)) || isNaN(g = +this._y.call(null, n)))
    return this;
  var e, t = this._root, r, i, a, u = this._x0, d = this._y0, s = this._x1, f = this._y1, l, g, b, y, v, w, m, c;
  if (!t)
    return this;
  if (t.length)
    for (; ; ) {
      if ((v = l >= (b = (u + s) / 2)) ? u = b : s = b, (w = g >= (y = (d + f) / 2)) ? d = y : f = y, e = t, !(t = t[m = w << 1 | v]))
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
function Da(n) {
  for (var e = 0, t = n.length; e < t; ++e)
    this.remove(n[e]);
  return this;
}
function Ga() {
  return this._root;
}
function ja() {
  var n = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++n;
      while (e = e.next);
  }), n;
}
function Ra(n) {
  var e = [], t, r = this._root, i, a, u, d, s;
  for (r && e.push(new Z(r, this._x0, this._y0, this._x1, this._y1)); t = e.pop(); )
    if (!n(r = t.node, a = t.x0, u = t.y0, d = t.x1, s = t.y1) && r.length) {
      var f = (a + d) / 2, l = (u + s) / 2;
      (i = r[3]) && e.push(new Z(i, f, l, d, s)), (i = r[2]) && e.push(new Z(i, a, l, f, s)), (i = r[1]) && e.push(new Z(i, f, u, d, l)), (i = r[0]) && e.push(new Z(i, a, u, f, l));
    }
  return this;
}
function Ua(n) {
  var e = [], t = [], r;
  for (this._root && e.push(new Z(this._root, this._x0, this._y0, this._x1, this._y1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var a, u = r.x0, d = r.y0, s = r.x1, f = r.y1, l = (u + s) / 2, g = (d + f) / 2;
      (a = i[0]) && e.push(new Z(a, u, d, l, g)), (a = i[1]) && e.push(new Z(a, l, d, s, g)), (a = i[2]) && e.push(new Z(a, u, g, l, f)), (a = i[3]) && e.push(new Z(a, l, g, s, f));
    }
    t.push(r);
  }
  for (; r = t.pop(); )
    n(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function Ha(n) {
  return n[0];
}
function Qa(n) {
  return arguments.length ? (this._x = n, this) : this._x;
}
function Va(n) {
  return n[1];
}
function Wa(n) {
  return arguments.length ? (this._y = n, this) : this._y;
}
function Vn(n, e, t) {
  var r = new It(e ?? Ha, t ?? Va, NaN, NaN, NaN, NaN);
  return n == null ? r : r.addAll(n);
}
function It(n, e, t, r, i, a) {
  this._x = n, this._y = e, this._x0 = t, this._y0 = r, this._x1 = i, this._y1 = a, this._root = void 0;
}
function yn(n) {
  for (var e = { data: n.data }, t = e; n = n.next; )
    t = t.next = { data: n.data };
  return e;
}
var ee = Vn.prototype = It.prototype;
ee.copy = function() {
  var n = new It(this._x, this._y, this._x0, this._y0, this._x1, this._y1), e = this._root, t, r;
  if (!e)
    return n;
  if (!e.length)
    return n._root = yn(e), n;
  for (t = [{ source: e, target: n._root = new Array(4) }]; e = t.pop(); )
    for (var i = 0; i < 4; ++i)
      (r = e.source[i]) && (r.length ? t.push({ source: r, target: e.target[i] = new Array(4) }) : e.target[i] = yn(r));
  return n;
};
ee.add = za;
ee.addAll = Aa;
ee.cover = Oa;
ee.data = La;
ee.extent = Fa;
ee.find = ka;
ee.remove = qa;
ee.removeAll = Da;
ee.root = Ga;
ee.size = ja;
ee.visit = Ra;
ee.visitAfter = Ua;
ee.x = Qa;
ee.y = Wa;
function Xa(n) {
  const e = +this._x.call(null, n), t = +this._y.call(null, n), r = +this._z.call(null, n);
  return Wn(this.cover(e, t, r), e, t, r, n);
}
function Wn(n, e, t, r, i) {
  if (isNaN(e) || isNaN(t) || isNaN(r))
    return n;
  var a, u = n._root, d = { data: i }, s = n._x0, f = n._y0, l = n._z0, g = n._x1, b = n._y1, y = n._z1, v, w, m, c, M, E, N, _, T, z, O;
  if (!u)
    return n._root = d, n;
  for (; u.length; )
    if ((N = e >= (v = (s + g) / 2)) ? s = v : g = v, (_ = t >= (w = (f + b) / 2)) ? f = w : b = w, (T = r >= (m = (l + y) / 2)) ? l = m : y = m, a = u, !(u = u[z = T << 2 | _ << 1 | N]))
      return a[z] = d, n;
  if (c = +n._x.call(null, u.data), M = +n._y.call(null, u.data), E = +n._z.call(null, u.data), e === c && t === M && r === E)
    return d.next = u, a ? a[z] = d : n._root = d, n;
  do
    a = a ? a[z] = new Array(8) : n._root = new Array(8), (N = e >= (v = (s + g) / 2)) ? s = v : g = v, (_ = t >= (w = (f + b) / 2)) ? f = w : b = w, (T = r >= (m = (l + y) / 2)) ? l = m : y = m;
  while ((z = T << 2 | _ << 1 | N) === (O = (E >= m) << 2 | (M >= w) << 1 | c >= v));
  return a[O] = u, a[z] = d, n;
}
function Ka(n) {
  Array.isArray(n) || (n = Array.from(n));
  const e = n.length, t = new Float64Array(e), r = new Float64Array(e), i = new Float64Array(e);
  let a = 1 / 0, u = 1 / 0, d = 1 / 0, s = -1 / 0, f = -1 / 0, l = -1 / 0;
  for (let g = 0, b, y, v, w; g < e; ++g)
    isNaN(y = +this._x.call(null, b = n[g])) || isNaN(v = +this._y.call(null, b)) || isNaN(w = +this._z.call(null, b)) || (t[g] = y, r[g] = v, i[g] = w, y < a && (a = y), y > s && (s = y), v < u && (u = v), v > f && (f = v), w < d && (d = w), w > l && (l = w));
  if (a > s || u > f || d > l)
    return this;
  this.cover(a, u, d).cover(s, f, l);
  for (let g = 0; g < e; ++g)
    Wn(this, t[g], r[g], i[g], n[g]);
  return this;
}
function Ja(n, e, t) {
  if (isNaN(n = +n) || isNaN(e = +e) || isNaN(t = +t))
    return this;
  var r = this._x0, i = this._y0, a = this._z0, u = this._x1, d = this._y1, s = this._z1;
  if (isNaN(r))
    u = (r = Math.floor(n)) + 1, d = (i = Math.floor(e)) + 1, s = (a = Math.floor(t)) + 1;
  else {
    for (var f = u - r || 1, l = this._root, g, b; r > n || n >= u || i > e || e >= d || a > t || t >= s; )
      switch (b = (t < a) << 2 | (e < i) << 1 | n < r, g = new Array(8), g[b] = l, l = g, f *= 2, b) {
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
function Ya() {
  var n = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        n.push(e.data);
      while (e = e.next);
  }), n;
}
function Za(n) {
  return arguments.length ? this.cover(+n[0][0], +n[0][1], +n[0][2]).cover(+n[1][0], +n[1][1], +n[1][2]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0, this._z0], [this._x1, this._y1, this._z1]];
}
function R(n, e, t, r, i, a, u) {
  this.node = n, this.x0 = e, this.y0 = t, this.z0 = r, this.x1 = i, this.y1 = a, this.z1 = u;
}
function eo(n, e, t, r) {
  var i, a = this._x0, u = this._y0, d = this._z0, s, f, l, g, b, y, v = this._x1, w = this._y1, m = this._z1, c = [], M = this._root, E, N;
  for (M && c.push(new R(M, a, u, d, v, w, m)), r == null ? r = 1 / 0 : (a = n - r, u = e - r, d = t - r, v = n + r, w = e + r, m = t + r, r *= r); E = c.pop(); )
    if (!(!(M = E.node) || (s = E.x0) > v || (f = E.y0) > w || (l = E.z0) > m || (g = E.x1) < a || (b = E.y1) < u || (y = E.z1) < d))
      if (M.length) {
        var _ = (s + g) / 2, T = (f + b) / 2, z = (l + y) / 2;
        c.push(
          new R(M[7], _, T, z, g, b, y),
          new R(M[6], s, T, z, _, b, y),
          new R(M[5], _, f, z, g, T, y),
          new R(M[4], s, f, z, _, T, y),
          new R(M[3], _, T, l, g, b, z),
          new R(M[2], s, T, l, _, b, z),
          new R(M[1], _, f, l, g, T, z),
          new R(M[0], s, f, l, _, T, z)
        ), (N = (t >= z) << 2 | (e >= T) << 1 | n >= _) && (E = c[c.length - 1], c[c.length - 1] = c[c.length - 1 - N], c[c.length - 1 - N] = E);
      } else {
        var O = n - +this._x.call(null, M.data), j = e - +this._y.call(null, M.data), U = t - +this._z.call(null, M.data), H = O * O + j * j + U * U;
        if (H < r) {
          var G = Math.sqrt(r = H);
          a = n - G, u = e - G, d = t - G, v = n + G, w = e + G, m = t + G, i = M.data;
        }
      }
  return i;
}
function to(n) {
  if (isNaN(b = +this._x.call(null, n)) || isNaN(y = +this._y.call(null, n)) || isNaN(v = +this._z.call(null, n)))
    return this;
  var e, t = this._root, r, i, a, u = this._x0, d = this._y0, s = this._z0, f = this._x1, l = this._y1, g = this._z1, b, y, v, w, m, c, M, E, N, _, T;
  if (!t)
    return this;
  if (t.length)
    for (; ; ) {
      if ((M = b >= (w = (u + f) / 2)) ? u = w : f = w, (E = y >= (m = (d + l) / 2)) ? d = m : l = m, (N = v >= (c = (s + g) / 2)) ? s = c : g = c, e = t, !(t = t[_ = N << 2 | E << 1 | M]))
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
function no(n) {
  for (var e = 0, t = n.length; e < t; ++e)
    this.remove(n[e]);
  return this;
}
function ro() {
  return this._root;
}
function io() {
  var n = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++n;
      while (e = e.next);
  }), n;
}
function ao(n) {
  var e = [], t, r = this._root, i, a, u, d, s, f, l;
  for (r && e.push(new R(r, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); t = e.pop(); )
    if (!n(r = t.node, a = t.x0, u = t.y0, d = t.z0, s = t.x1, f = t.y1, l = t.z1) && r.length) {
      var g = (a + s) / 2, b = (u + f) / 2, y = (d + l) / 2;
      (i = r[7]) && e.push(new R(i, g, b, y, s, f, l)), (i = r[6]) && e.push(new R(i, a, b, y, g, f, l)), (i = r[5]) && e.push(new R(i, g, u, y, s, b, l)), (i = r[4]) && e.push(new R(i, a, u, y, g, b, l)), (i = r[3]) && e.push(new R(i, g, b, d, s, f, y)), (i = r[2]) && e.push(new R(i, a, b, d, g, f, y)), (i = r[1]) && e.push(new R(i, g, u, d, s, b, y)), (i = r[0]) && e.push(new R(i, a, u, d, g, b, y));
    }
  return this;
}
function oo(n) {
  var e = [], t = [], r;
  for (this._root && e.push(new R(this._root, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var a, u = r.x0, d = r.y0, s = r.z0, f = r.x1, l = r.y1, g = r.z1, b = (u + f) / 2, y = (d + l) / 2, v = (s + g) / 2;
      (a = i[0]) && e.push(new R(a, u, d, s, b, y, v)), (a = i[1]) && e.push(new R(a, b, d, s, f, y, v)), (a = i[2]) && e.push(new R(a, u, y, s, b, l, v)), (a = i[3]) && e.push(new R(a, b, y, s, f, l, v)), (a = i[4]) && e.push(new R(a, u, d, v, b, y, g)), (a = i[5]) && e.push(new R(a, b, d, v, f, y, g)), (a = i[6]) && e.push(new R(a, u, y, v, b, l, g)), (a = i[7]) && e.push(new R(a, b, y, v, f, l, g));
    }
    t.push(r);
  }
  for (; r = t.pop(); )
    n(r.node, r.x0, r.y0, r.z0, r.x1, r.y1, r.z1);
  return this;
}
function so(n) {
  return n[0];
}
function uo(n) {
  return arguments.length ? (this._x = n, this) : this._x;
}
function fo(n) {
  return n[1];
}
function ho(n) {
  return arguments.length ? (this._y = n, this) : this._y;
}
function co(n) {
  return n[2];
}
function lo(n) {
  return arguments.length ? (this._z = n, this) : this._z;
}
function Xn(n, e, t, r) {
  var i = new Pt(e ?? so, t ?? fo, r ?? co, NaN, NaN, NaN, NaN, NaN, NaN);
  return n == null ? i : i.addAll(n);
}
function Pt(n, e, t, r, i, a, u, d, s) {
  this._x = n, this._y = e, this._z = t, this._x0 = r, this._y0 = i, this._z0 = a, this._x1 = u, this._y1 = d, this._z1 = s, this._root = void 0;
}
function mn(n) {
  for (var e = { data: n.data }, t = e; n = n.next; )
    t = t.next = { data: n.data };
  return e;
}
var Y = Xn.prototype = Pt.prototype;
Y.copy = function() {
  var n = new Pt(this._x, this._y, this._z, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1), e = this._root, t, r;
  if (!e)
    return n;
  if (!e.length)
    return n._root = mn(e), n;
  for (t = [{ source: e, target: n._root = new Array(8) }]; e = t.pop(); )
    for (var i = 0; i < 8; ++i)
      (r = e.source[i]) && (r.length ? t.push({ source: r, target: e.target[i] = new Array(8) }) : e.target[i] = mn(r));
  return n;
};
Y.add = Xa;
Y.addAll = Ka;
Y.cover = Ja;
Y.data = Ya;
Y.extent = Za;
Y.find = eo;
Y.remove = to;
Y.removeAll = no;
Y.root = ro;
Y.size = io;
Y.visit = ao;
Y.visitAfter = oo;
Y.x = uo;
Y.y = ho;
Y.z = lo;
function Ae(n) {
  return function() {
    return n;
  };
}
function ce(n) {
  return (n() - 0.5) * 1e-6;
}
function po(n) {
  return n.index;
}
function bn(n, e) {
  var t = n.get(e);
  if (!t)
    throw new Error("node not found: " + e);
  return t;
}
function go(n) {
  var e = po, t = b, r, i = Ae(30), a, u, d, s, f, l, g = 1;
  n == null && (n = []);
  function b(c) {
    return 1 / Math.min(s[c.source.index], s[c.target.index]);
  }
  function y(c) {
    for (var M = 0, E = n.length; M < g; ++M)
      for (var N = 0, _, T, z, O = 0, j = 0, U = 0, H, G; N < E; ++N)
        _ = n[N], T = _.source, z = _.target, O = z.x + z.vx - T.x - T.vx || ce(l), d > 1 && (j = z.y + z.vy - T.y - T.vy || ce(l)), d > 2 && (U = z.z + z.vz - T.z - T.vz || ce(l)), H = Math.sqrt(O * O + j * j + U * U), H = (H - a[N]) / H * c * r[N], O *= H, j *= H, U *= H, z.vx -= O * (G = f[N]), d > 1 && (z.vy -= j * G), d > 2 && (z.vz -= U * G), T.vx += O * (G = 1 - G), d > 1 && (T.vy += j * G), d > 2 && (T.vz += U * G);
  }
  function v() {
    if (u) {
      var c, M = u.length, E = n.length, N = new Map(u.map((T, z) => [e(T, z, u), T])), _;
      for (c = 0, s = new Array(M); c < E; ++c)
        _ = n[c], _.index = c, typeof _.source != "object" && (_.source = bn(N, _.source)), typeof _.target != "object" && (_.target = bn(N, _.target)), s[_.source.index] = (s[_.source.index] || 0) + 1, s[_.target.index] = (s[_.target.index] || 0) + 1;
      for (c = 0, f = new Array(E); c < E; ++c)
        _ = n[c], f[c] = s[_.source.index] / (s[_.source.index] + s[_.target.index]);
      r = new Array(E), w(), a = new Array(E), m();
    }
  }
  function w() {
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
    u = c, l = M.find((E) => typeof E == "function") || Math.random, d = M.find((E) => [1, 2, 3].includes(E)) || 2, v();
  }, y.links = function(c) {
    return arguments.length ? (n = c, v(), y) : n;
  }, y.id = function(c) {
    return arguments.length ? (e = c, y) : e;
  }, y.iterations = function(c) {
    return arguments.length ? (g = +c, y) : g;
  }, y.strength = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : Ae(+c), w(), y) : t;
  }, y.distance = function(c) {
    return arguments.length ? (i = typeof c == "function" ? c : Ae(+c), m(), y) : i;
  }, y;
}
var vo = { value: () => {
} };
function Kn() {
  for (var n = 0, e = arguments.length, t = {}, r; n < e; ++n) {
    if (!(r = arguments[n] + "") || r in t || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    t[r] = [];
  }
  return new Ke(t);
}
function Ke(n) {
  this._ = n;
}
function yo(n, e) {
  return n.trim().split(/^|\s+/).map(function(t) {
    var r = "", i = t.indexOf(".");
    if (i >= 0 && (r = t.slice(i + 1), t = t.slice(0, i)), t && !e.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name: r };
  });
}
Ke.prototype = Kn.prototype = {
  constructor: Ke,
  on: function(n, e) {
    var t = this._, r = yo(n + "", t), i, a = -1, u = r.length;
    if (arguments.length < 2) {
      for (; ++a < u; )
        if ((i = (n = r[a]).type) && (i = mo(t[i], n.name)))
          return i;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++a < u; )
      if (i = (n = r[a]).type)
        t[i] = wn(t[i], n.name, e);
      else if (e == null)
        for (i in t)
          t[i] = wn(t[i], n.name, null);
    return this;
  },
  copy: function() {
    var n = {}, e = this._;
    for (var t in e)
      n[t] = e[t].slice();
    return new Ke(n);
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
function mo(n, e) {
  for (var t = 0, r = n.length, i; t < r; ++t)
    if ((i = n[t]).name === e)
      return i.value;
}
function wn(n, e, t) {
  for (var r = 0, i = n.length; r < i; ++r)
    if (n[r].name === e) {
      n[r] = vo, n = n.slice(0, r).concat(n.slice(r + 1));
      break;
    }
  return t != null && n.push({ name: e, value: t }), n;
}
var Ne = 0, Pe = 0, Ie = 0, Jn = 1e3, Je, ze, Ye = 0, me = 0, et = 0, Oe = typeof performance == "object" && performance.now ? performance : Date, Yn = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(n) {
  setTimeout(n, 17);
};
function Zn() {
  return me || (Yn(bo), me = Oe.now() + et);
}
function bo() {
  me = 0;
}
function bt() {
  this._call = this._time = this._next = null;
}
bt.prototype = er.prototype = {
  constructor: bt,
  restart: function(n, e, t) {
    if (typeof n != "function")
      throw new TypeError("callback is not a function");
    t = (t == null ? Zn() : +t) + (e == null ? 0 : +e), !this._next && ze !== this && (ze ? ze._next = this : Je = this, ze = this), this._call = n, this._time = t, wt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, wt());
  }
};
function er(n, e, t) {
  var r = new bt();
  return r.restart(n, e, t), r;
}
function wo() {
  Zn(), ++Ne;
  for (var n = Je, e; n; )
    (e = me - n._time) >= 0 && n._call.call(void 0, e), n = n._next;
  --Ne;
}
function xn() {
  me = (Ye = Oe.now()) + et, Ne = Pe = 0;
  try {
    wo();
  } finally {
    Ne = 0, _o(), me = 0;
  }
}
function xo() {
  var n = Oe.now(), e = n - Ye;
  e > Jn && (et -= e, Ye = n);
}
function _o() {
  for (var n, e = Je, t, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), n = e, e = e._next) : (t = e._next, e._next = null, e = n ? n._next = t : Je = t);
  ze = n, wt(r);
}
function wt(n) {
  if (!Ne) {
    Pe && (Pe = clearTimeout(Pe));
    var e = n - me;
    e > 24 ? (n < 1 / 0 && (Pe = setTimeout(xn, n - Oe.now() - et)), Ie && (Ie = clearInterval(Ie))) : (Ie || (Ye = Oe.now(), Ie = setInterval(xo, Jn)), Ne = 1, Yn(xn));
  }
}
const Mo = 1664525, No = 1013904223, _n = 4294967296;
function Co() {
  let n = 1;
  return () => (n = (Mo * n + No) % _n) / _n;
}
var Mn = 3;
function yt(n) {
  return n.x;
}
function Nn(n) {
  return n.y;
}
function Eo(n) {
  return n.z;
}
var To = 10, $o = Math.PI * (3 - Math.sqrt(5)), Bo = Math.PI * 20 / (9 + Math.sqrt(221));
function So(n, e) {
  e = e || 2;
  var t = Math.min(Mn, Math.max(1, Math.round(e))), r, i = 1, a = 1e-3, u = 1 - Math.pow(a, 1 / 300), d = 0, s = 0.6, f = /* @__PURE__ */ new Map(), l = er(y), g = Kn("tick", "end"), b = Co();
  n == null && (n = []);
  function y() {
    v(), g.call("tick", r), i < a && (l.stop(), g.call("end", r));
  }
  function v(c) {
    var M, E = n.length, N;
    c === void 0 && (c = 1);
    for (var _ = 0; _ < c; ++_)
      for (i += (d - i) * u, f.forEach(function(T) {
        T(i);
      }), M = 0; M < E; ++M)
        N = n[M], N.fx == null ? N.x += N.vx *= s : (N.x = N.fx, N.vx = 0), t > 1 && (N.fy == null ? N.y += N.vy *= s : (N.y = N.fy, N.vy = 0)), t > 2 && (N.fz == null ? N.z += N.vz *= s : (N.z = N.fz, N.vz = 0));
    return r;
  }
  function w() {
    for (var c = 0, M = n.length, E; c < M; ++c) {
      if (E = n[c], E.index = c, E.fx != null && (E.x = E.fx), E.fy != null && (E.y = E.fy), E.fz != null && (E.z = E.fz), isNaN(E.x) || t > 1 && isNaN(E.y) || t > 2 && isNaN(E.z)) {
        var N = To * (t > 2 ? Math.cbrt(0.5 + c) : t > 1 ? Math.sqrt(0.5 + c) : c), _ = c * $o, T = c * Bo;
        t === 1 ? E.x = N : t === 2 ? (E.x = N * Math.cos(_), E.y = N * Math.sin(_)) : (E.x = N * Math.sin(_) * Math.cos(T), E.y = N * Math.cos(_), E.z = N * Math.sin(_) * Math.sin(T));
      }
      (isNaN(E.vx) || t > 1 && isNaN(E.vy) || t > 2 && isNaN(E.vz)) && (E.vx = 0, t > 1 && (E.vy = 0), t > 2 && (E.vz = 0));
    }
  }
  function m(c) {
    return c.initialize && c.initialize(n, b, t), c;
  }
  return w(), r = {
    tick: v,
    restart: function() {
      return l.restart(y), r;
    },
    stop: function() {
      return l.stop(), r;
    },
    numDimensions: function(c) {
      return arguments.length ? (t = Math.min(Mn, Math.max(1, Math.round(c))), f.forEach(m), r) : t;
    },
    nodes: function(c) {
      return arguments.length ? (n = c, w(), f.forEach(m), r) : n;
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
      var c = Array.prototype.slice.call(arguments), M = c.shift() || 0, E = (t > 1 ? c.shift() : null) || 0, N = (t > 2 ? c.shift() : null) || 0, _ = c.shift() || 1 / 0, T = 0, z = n.length, O, j, U, H, G, ue;
      for (_ *= _, T = 0; T < z; ++T)
        G = n[T], O = M - G.x, j = E - (G.y || 0), U = N - (G.z || 0), H = O * O + j * j + U * U, H < _ && (ue = G, _ = H);
      return ue;
    },
    on: function(c, M) {
      return arguments.length > 1 ? (g.on(c, M), r) : g.on(c);
    }
  };
}
function Io() {
  var n, e, t, r, i, a = Ae(-30), u, d = 1, s = 1 / 0, f = 0.81;
  function l(v) {
    var w, m = n.length, c = (e === 1 ? Hn(n, yt) : e === 2 ? Vn(n, yt, Nn) : e === 3 ? Xn(n, yt, Nn, Eo) : null).visitAfter(b);
    for (i = v, w = 0; w < m; ++w)
      t = n[w], c.visit(y);
  }
  function g() {
    if (n) {
      var v, w = n.length, m;
      for (u = new Array(w), v = 0; v < w; ++v)
        m = n[v], u[m.index] = +a(m, v, n);
    }
  }
  function b(v) {
    var w = 0, m, c, M = 0, E, N, _, T, z = v.length;
    if (z) {
      for (E = N = _ = T = 0; T < z; ++T)
        (m = v[T]) && (c = Math.abs(m.value)) && (w += m.value, M += c, E += c * (m.x || 0), N += c * (m.y || 0), _ += c * (m.z || 0));
      w *= Math.sqrt(4 / z), v.x = E / M, e > 1 && (v.y = N / M), e > 2 && (v.z = _ / M);
    } else {
      m = v, m.x = m.data.x, e > 1 && (m.y = m.data.y), e > 2 && (m.z = m.data.z);
      do
        w += u[m.data.index];
      while (m = m.next);
    }
    v.value = w;
  }
  function y(v, w, m, c, M) {
    if (!v.value)
      return !0;
    var E = [m, c, M][e - 1], N = v.x - t.x, _ = e > 1 ? v.y - t.y : 0, T = e > 2 ? v.z - t.z : 0, z = E - w, O = N * N + _ * _ + T * T;
    if (z * z / f < O)
      return O < s && (N === 0 && (N = ce(r), O += N * N), e > 1 && _ === 0 && (_ = ce(r), O += _ * _), e > 2 && T === 0 && (T = ce(r), O += T * T), O < d && (O = Math.sqrt(d * O)), t.vx += N * v.value * i / O, e > 1 && (t.vy += _ * v.value * i / O), e > 2 && (t.vz += T * v.value * i / O)), !0;
    if (v.length || O >= s)
      return;
    (v.data !== t || v.next) && (N === 0 && (N = ce(r), O += N * N), e > 1 && _ === 0 && (_ = ce(r), O += _ * _), e > 2 && T === 0 && (T = ce(r), O += T * T), O < d && (O = Math.sqrt(d * O)));
    do
      v.data !== t && (z = u[v.data.index] * i / O, t.vx += N * z, e > 1 && (t.vy += _ * z), e > 2 && (t.vz += T * z));
    while (v = v.next);
  }
  return l.initialize = function(v, ...w) {
    n = v, r = w.find((m) => typeof m == "function") || Math.random, e = w.find((m) => [1, 2, 3].includes(m)) || 2, g();
  }, l.strength = function(v) {
    return arguments.length ? (a = typeof v == "function" ? v : Ae(+v), g(), l) : a;
  }, l.distanceMin = function(v) {
    return arguments.length ? (d = v * v, l) : Math.sqrt(d);
  }, l.distanceMax = function(v) {
    return arguments.length ? (s = v * v, l) : Math.sqrt(s);
  }, l.theta = function(v) {
    return arguments.length ? (f = v * v, l) : Math.sqrt(f);
  }, l;
}
function xt(n) {
  return typeof n == "object" && typeof n.index == "number" && typeof n.x == "number" && typeof n.y == "number" && typeof n.z == "number" && typeof n.vx == "number" && typeof n.vy == "number" && typeof n.vz == "number";
}
function Po(n) {
  return !!(typeof n == "object" && typeof n.index == "number" && xt(n.source) && xt(n.target));
}
class zo {
  constructor() {
    I(this, "d3ForceLayout");
    I(this, "d3AlphaMin", 0);
    I(this, "d3AlphaTarget", 0);
    I(this, "d3AlphaDecay", 0.0228);
    I(this, "d3VelocityDecay", 0.4);
    I(this, "nodeMapping", /* @__PURE__ */ new Map());
    I(this, "edgeMapping", /* @__PURE__ */ new Map());
    I(this, "newNodeMap", /* @__PURE__ */ new Map());
    I(this, "newEdgeMap", /* @__PURE__ */ new Map());
    I(this, "reheat", !1);
    this.d3ForceLayout = So().numDimensions(3).alpha(1).force("link", go()).force("charge", Io()).force("center", ma()).force("dagRadial", null).stop(), this.d3ForceLayout.force("link").id((e) => e.id);
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
      for (let r of this.newNodeMap.entries()) {
        let i = r[0], a = r[1];
        if (!xt(a))
          throw new Error("Internal error: Node is not settled as a complete D3 Node");
        this.nodeMapping.set(i, a);
      }
      this.newNodeMap.clear();
      let t = [...this.edgeMapping.values()];
      t = t.concat([...this.newEdgeMap.values()]), this.d3ForceLayout.force("link").links(t);
      for (let r of this.newEdgeMap.entries()) {
        let i = r[0], a = r[1];
        if (!Po(a))
          throw new Error("Internal error: Edge is not settled as a complete D3 Edge");
        this.edgeMapping.set(i, a);
      }
      this.newEdgeMap.clear();
    }
  }
  step() {
    this.refresh(), this.d3ForceLayout.tick();
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
    let t = this._getMappedEdge(e);
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
    let t = this.edgeMapping.get(e);
    if (!t)
      throw new Error("Internal error: Edge not found in D3GraphEngine");
    return t;
  }
}
var Ze = { exports: {} };
Ze.exports;
(function(n, e) {
  var t = 200, r = "__lodash_hash_undefined__", i = 800, a = 16, u = 9007199254740991, d = "[object Arguments]", s = "[object Array]", f = "[object AsyncFunction]", l = "[object Boolean]", g = "[object Date]", b = "[object Error]", y = "[object Function]", v = "[object GeneratorFunction]", w = "[object Map]", m = "[object Number]", c = "[object Null]", M = "[object Object]", E = "[object Proxy]", N = "[object RegExp]", _ = "[object Set]", T = "[object String]", z = "[object Undefined]", O = "[object WeakMap]", j = "[object ArrayBuffer]", U = "[object DataView]", H = "[object Float32Array]", G = "[object Float64Array]", ue = "[object Int8Array]", C = "[object Int16Array]", x = "[object Int32Array]", $ = "[object Uint8Array]", Q = "[object Uint8ClampedArray]", re = "[object Uint16Array]", oe = "[object Uint32Array]", S = /[\\^$.*+?()[\]{}|]/g, P = /^\[object .+?Constructor\]$/, L = /^(?:0|[1-9]\d*)$/, A = {};
  A[H] = A[G] = A[ue] = A[C] = A[x] = A[$] = A[Q] = A[re] = A[oe] = !0, A[d] = A[s] = A[j] = A[l] = A[U] = A[g] = A[b] = A[y] = A[w] = A[m] = A[M] = A[N] = A[_] = A[T] = A[O] = !1;
  var K = typeof We == "object" && We && We.Object === Object && We, X = typeof self == "object" && self && self.Object === Object && self, J = K || X || Function("return this")(), Fe = e && !e.nodeType && e, Ee = Fe && !0 && n && !n.nodeType && n, zt = Ee && Ee.exports === Fe, tt = zt && K.process, At = function() {
    try {
      var o = Ee && Ee.require && Ee.require("util").types;
      return o || tt && tt.binding && tt.binding("util");
    } catch {
    }
  }(), Ot = At && At.isTypedArray;
  function Lt(o, h, p) {
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
  function tr(o, h) {
    for (var p = -1, B = Array(o); ++p < o; )
      B[p] = h(p);
    return B;
  }
  function nr(o) {
    return function(h) {
      return o(h);
    };
  }
  function rr(o, h) {
    return o == null ? void 0 : o[h];
  }
  function ir(o, h) {
    return function(p) {
      return o(h(p));
    };
  }
  var ar = Array.prototype, or = Function.prototype, ke = Object.prototype, nt = J["__core-js_shared__"], qe = or.toString, fe = ke.hasOwnProperty, Ft = function() {
    var o = /[^.]+$/.exec(nt && nt.keys && nt.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), kt = ke.toString, sr = qe.call(Object), ur = RegExp(
    "^" + qe.call(fe).replace(S, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), De = zt ? J.Buffer : void 0, qt = J.Symbol, Dt = J.Uint8Array, Gt = De ? De.allocUnsafe : void 0, jt = ir(Object.getPrototypeOf, Object), Rt = Object.create, fr = ke.propertyIsEnumerable, hr = ar.splice, ve = qt ? qt.toStringTag : void 0, Ge = function() {
    try {
      var o = ot(Object, "defineProperty");
      return o({}, "", {}), o;
    } catch {
    }
  }(), dr = De ? De.isBuffer : void 0, Ut = Math.max, cr = Date.now, Ht = ot(J, "Map"), Te = ot(Object, "create"), lr = /* @__PURE__ */ function() {
    function o() {
    }
    return function(h) {
      if (!de(h))
        return {};
      if (Rt)
        return Rt(h);
      o.prototype = h;
      var p = new o();
      return o.prototype = void 0, p;
    };
  }();
  function ye(o) {
    var h = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++h < p; ) {
      var B = o[h];
      this.set(B[0], B[1]);
    }
  }
  function pr() {
    this.__data__ = Te ? Te(null) : {}, this.size = 0;
  }
  function gr(o) {
    var h = this.has(o) && delete this.__data__[o];
    return this.size -= h ? 1 : 0, h;
  }
  function vr(o) {
    var h = this.__data__;
    if (Te) {
      var p = h[o];
      return p === r ? void 0 : p;
    }
    return fe.call(h, o) ? h[o] : void 0;
  }
  function yr(o) {
    var h = this.__data__;
    return Te ? h[o] !== void 0 : fe.call(h, o);
  }
  function mr(o, h) {
    var p = this.__data__;
    return this.size += this.has(o) ? 0 : 1, p[o] = Te && h === void 0 ? r : h, this;
  }
  ye.prototype.clear = pr, ye.prototype.delete = gr, ye.prototype.get = vr, ye.prototype.has = yr, ye.prototype.set = mr;
  function he(o) {
    var h = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++h < p; ) {
      var B = o[h];
      this.set(B[0], B[1]);
    }
  }
  function br() {
    this.__data__ = [], this.size = 0;
  }
  function wr(o) {
    var h = this.__data__, p = je(h, o);
    if (p < 0)
      return !1;
    var B = h.length - 1;
    return p == B ? h.pop() : hr.call(h, p, 1), --this.size, !0;
  }
  function xr(o) {
    var h = this.__data__, p = je(h, o);
    return p < 0 ? void 0 : h[p][1];
  }
  function _r(o) {
    return je(this.__data__, o) > -1;
  }
  function Mr(o, h) {
    var p = this.__data__, B = je(p, o);
    return B < 0 ? (++this.size, p.push([o, h])) : p[B][1] = h, this;
  }
  he.prototype.clear = br, he.prototype.delete = wr, he.prototype.get = xr, he.prototype.has = _r, he.prototype.set = Mr;
  function be(o) {
    var h = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++h < p; ) {
      var B = o[h];
      this.set(B[0], B[1]);
    }
  }
  function Nr() {
    this.size = 0, this.__data__ = {
      hash: new ye(),
      map: new (Ht || he)(),
      string: new ye()
    };
  }
  function Cr(o) {
    var h = Ue(this, o).delete(o);
    return this.size -= h ? 1 : 0, h;
  }
  function Er(o) {
    return Ue(this, o).get(o);
  }
  function Tr(o) {
    return Ue(this, o).has(o);
  }
  function $r(o, h) {
    var p = Ue(this, o), B = p.size;
    return p.set(o, h), this.size += p.size == B ? 0 : 1, this;
  }
  be.prototype.clear = Nr, be.prototype.delete = Cr, be.prototype.get = Er, be.prototype.has = Tr, be.prototype.set = $r;
  function we(o) {
    var h = this.__data__ = new he(o);
    this.size = h.size;
  }
  function Br() {
    this.__data__ = new he(), this.size = 0;
  }
  function Sr(o) {
    var h = this.__data__, p = h.delete(o);
    return this.size = h.size, p;
  }
  function Ir(o) {
    return this.__data__.get(o);
  }
  function Pr(o) {
    return this.__data__.has(o);
  }
  function zr(o, h) {
    var p = this.__data__;
    if (p instanceof he) {
      var B = p.__data__;
      if (!Ht || B.length < t - 1)
        return B.push([o, h]), this.size = ++p.size, this;
      p = this.__data__ = new be(B);
    }
    return p.set(o, h), this.size = p.size, this;
  }
  we.prototype.clear = Br, we.prototype.delete = Sr, we.prototype.get = Ir, we.prototype.has = Pr, we.prototype.set = zr;
  function Ar(o, h) {
    var p = ft(o), B = !p && ut(o), F = !p && !B && Jt(o), q = !p && !B && !F && Zt(o), V = p || B || F || q, k = V ? tr(o.length, String) : [], W = k.length;
    for (var ie in o)
      (h || fe.call(o, ie)) && !(V && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ie == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      F && (ie == "offset" || ie == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      q && (ie == "buffer" || ie == "byteLength" || ie == "byteOffset") || // Skip index properties.
      Xt(ie, W))) && k.push(ie);
    return k;
  }
  function rt(o, h, p) {
    (p !== void 0 && !He(o[h], p) || p === void 0 && !(h in o)) && it(o, h, p);
  }
  function Or(o, h, p) {
    var B = o[h];
    (!(fe.call(o, h) && He(B, p)) || p === void 0 && !(h in o)) && it(o, h, p);
  }
  function je(o, h) {
    for (var p = o.length; p--; )
      if (He(o[p][0], h))
        return p;
    return -1;
  }
  function it(o, h, p) {
    h == "__proto__" && Ge ? Ge(o, h, {
      configurable: !0,
      enumerable: !0,
      value: p,
      writable: !0
    }) : o[h] = p;
  }
  var Lr = Wr();
  function Re(o) {
    return o == null ? o === void 0 ? z : c : ve && ve in Object(o) ? Xr(o) : ti(o);
  }
  function Qt(o) {
    return $e(o) && Re(o) == d;
  }
  function Fr(o) {
    if (!de(o) || Zr(o))
      return !1;
    var h = dt(o) ? ur : P;
    return h.test(ai(o));
  }
  function kr(o) {
    return $e(o) && Yt(o.length) && !!A[Re(o)];
  }
  function qr(o) {
    if (!de(o))
      return ei(o);
    var h = Kt(o), p = [];
    for (var B in o)
      B == "constructor" && (h || !fe.call(o, B)) || p.push(B);
    return p;
  }
  function at(o, h, p, B, F) {
    o !== h && Lr(h, function(q, V) {
      if (F || (F = new we()), de(q))
        Dr(o, h, V, p, at, B, F);
      else {
        var k = B ? B(st(o, V), q, V + "", o, h, F) : void 0;
        k === void 0 && (k = q), rt(o, V, k);
      }
    }, en);
  }
  function Dr(o, h, p, B, F, q, V) {
    var k = st(o, p), W = st(h, p), ie = V.get(W);
    if (ie) {
      rt(o, p, ie);
      return;
    }
    var ne = q ? q(k, W, p + "", o, h, V) : void 0, Be = ne === void 0;
    if (Be) {
      var ct = ft(W), lt = !ct && Jt(W), nn = !ct && !lt && Zt(W);
      ne = W, ct || lt || nn ? ft(k) ? ne = k : oi(k) ? ne = Hr(k) : lt ? (Be = !1, ne = jr(W, !0)) : nn ? (Be = !1, ne = Ur(W, !0)) : ne = [] : si(W) || ut(W) ? (ne = k, ut(k) ? ne = ui(k) : (!de(k) || dt(k)) && (ne = Kr(W))) : Be = !1;
    }
    Be && (V.set(W, ne), F(ne, W, B, q, V), V.delete(W)), rt(o, p, ne);
  }
  function Vt(o, h) {
    return ri(ni(o, h, tn), o + "");
  }
  var Gr = Ge ? function(o, h) {
    return Ge(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: di(h),
      writable: !0
    });
  } : tn;
  function jr(o, h) {
    if (h)
      return o.slice();
    var p = o.length, B = Gt ? Gt(p) : new o.constructor(p);
    return o.copy(B), B;
  }
  function Rr(o) {
    var h = new o.constructor(o.byteLength);
    return new Dt(h).set(new Dt(o)), h;
  }
  function Ur(o, h) {
    var p = h ? Rr(o.buffer) : o.buffer;
    return new o.constructor(p, o.byteOffset, o.length);
  }
  function Hr(o, h) {
    var p = -1, B = o.length;
    for (h || (h = Array(B)); ++p < B; )
      h[p] = o[p];
    return h;
  }
  function Qr(o, h, p, B) {
    var F = !p;
    p || (p = {});
    for (var q = -1, V = h.length; ++q < V; ) {
      var k = h[q], W = B ? B(p[k], o[k], k, p, o) : void 0;
      W === void 0 && (W = o[k]), F ? it(p, k, W) : Or(p, k, W);
    }
    return p;
  }
  function Vr(o) {
    return Vt(function(h, p) {
      var B = -1, F = p.length, q = F > 1 ? p[F - 1] : void 0, V = F > 2 ? p[2] : void 0;
      for (q = o.length > 3 && typeof q == "function" ? (F--, q) : void 0, V && Jr(p[0], p[1], V) && (q = F < 3 ? void 0 : q, F = 1), h = Object(h); ++B < F; ) {
        var k = p[B];
        k && o(h, k, B, q);
      }
      return h;
    });
  }
  function Wr(o) {
    return function(h, p, B) {
      for (var F = -1, q = Object(h), V = B(h), k = V.length; k--; ) {
        var W = V[o ? k : ++F];
        if (p(q[W], W, q) === !1)
          break;
      }
      return h;
    };
  }
  function Wt(o, h, p, B, F, q) {
    return de(o) && de(h) && (q.set(h, o), at(o, h, void 0, Wt, q), q.delete(h)), o;
  }
  function Ue(o, h) {
    var p = o.__data__;
    return Yr(h) ? p[typeof h == "string" ? "string" : "hash"] : p.map;
  }
  function ot(o, h) {
    var p = rr(o, h);
    return Fr(p) ? p : void 0;
  }
  function Xr(o) {
    var h = fe.call(o, ve), p = o[ve];
    try {
      o[ve] = void 0;
      var B = !0;
    } catch {
    }
    var F = kt.call(o);
    return B && (h ? o[ve] = p : delete o[ve]), F;
  }
  function Kr(o) {
    return typeof o.constructor == "function" && !Kt(o) ? lr(jt(o)) : {};
  }
  function Xt(o, h) {
    var p = typeof o;
    return h = h ?? u, !!h && (p == "number" || p != "symbol" && L.test(o)) && o > -1 && o % 1 == 0 && o < h;
  }
  function Jr(o, h, p) {
    if (!de(p))
      return !1;
    var B = typeof h;
    return (B == "number" ? ht(p) && Xt(h, p.length) : B == "string" && h in p) ? He(p[h], o) : !1;
  }
  function Yr(o) {
    var h = typeof o;
    return h == "string" || h == "number" || h == "symbol" || h == "boolean" ? o !== "__proto__" : o === null;
  }
  function Zr(o) {
    return !!Ft && Ft in o;
  }
  function Kt(o) {
    var h = o && o.constructor, p = typeof h == "function" && h.prototype || ke;
    return o === p;
  }
  function ei(o) {
    var h = [];
    if (o != null)
      for (var p in Object(o))
        h.push(p);
    return h;
  }
  function ti(o) {
    return kt.call(o);
  }
  function ni(o, h, p) {
    return h = Ut(h === void 0 ? o.length - 1 : h, 0), function() {
      for (var B = arguments, F = -1, q = Ut(B.length - h, 0), V = Array(q); ++F < q; )
        V[F] = B[h + F];
      F = -1;
      for (var k = Array(h + 1); ++F < h; )
        k[F] = B[F];
      return k[h] = p(V), Lt(o, this, k);
    };
  }
  function st(o, h) {
    if (!(h === "constructor" && typeof o[h] == "function") && h != "__proto__")
      return o[h];
  }
  var ri = ii(Gr);
  function ii(o) {
    var h = 0, p = 0;
    return function() {
      var B = cr(), F = a - (B - p);
      if (p = B, F > 0) {
        if (++h >= i)
          return arguments[0];
      } else
        h = 0;
      return o.apply(void 0, arguments);
    };
  }
  function ai(o) {
    if (o != null) {
      try {
        return qe.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function He(o, h) {
    return o === h || o !== o && h !== h;
  }
  var ut = Qt(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Qt : function(o) {
    return $e(o) && fe.call(o, "callee") && !fr.call(o, "callee");
  }, ft = Array.isArray;
  function ht(o) {
    return o != null && Yt(o.length) && !dt(o);
  }
  function oi(o) {
    return $e(o) && ht(o);
  }
  var Jt = dr || ci;
  function dt(o) {
    if (!de(o))
      return !1;
    var h = Re(o);
    return h == y || h == v || h == f || h == E;
  }
  function Yt(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= u;
  }
  function de(o) {
    var h = typeof o;
    return o != null && (h == "object" || h == "function");
  }
  function $e(o) {
    return o != null && typeof o == "object";
  }
  function si(o) {
    if (!$e(o) || Re(o) != M)
      return !1;
    var h = jt(o);
    if (h === null)
      return !0;
    var p = fe.call(h, "constructor") && h.constructor;
    return typeof p == "function" && p instanceof p && qe.call(p) == sr;
  }
  var Zt = Ot ? nr(Ot) : kr;
  function ui(o) {
    return Qr(o, en(o));
  }
  var fi = Vt(function(o) {
    return o.push(void 0, Wt), Lt(hi, void 0, o);
  });
  function en(o) {
    return ht(o) ? Ar(o, !0) : qr(o);
  }
  var hi = Vr(function(o, h, p, B) {
    at(o, h, p, B);
  });
  function di(o) {
    return function() {
      return o;
    };
  }
  function tn(o) {
    return o;
  }
  function ci() {
    return !1;
  }
  n.exports = fi;
})(Ze, Ze.exports);
var Ao = Ze.exports;
const Oo = /* @__PURE__ */ _t(Ao), Lo = {
  size: 1,
  opacity: 1,
  wireframe: !1,
  color: "lightgrey",
  shape: "icosphere",
  nodeMeshFactory: Me.defaultNodeMeshFactory,
  label: !1
}, Fo = {
  type: "moving",
  color: "white",
  movingLineOpts: {
    baseColor: "lightgrey",
    width: 0.25
  },
  edgeMeshFactory: se.defaultEdgeMeshFactory
}, ko = {
  nodeMeshOpts: Lo,
  edgeMeshOpts: Fo,
  pinOnDrag: !0,
  graphEngineType: "ngraph",
  stepMultiplier: 1
};
function qo(n) {
  return Oo({}, n, ko);
}
class Ho {
  constructor(e, t) {
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
    I(this, "graphObservable", new pt());
    I(this, "nodeObservable", new pt());
    I(this, "edgeObservable", new pt());
    if (this.config = qo(t), this.meshCache = new Do(), this.fetchNodes = this.config.fetchNodes, this.fetchEdges = this.config.fetchEdges, typeof e == "string") {
      let r = document.getElementById(e);
      if (!r)
        throw new Error(`getElementById() could not find element '${e}'`);
      this.element = r;
    } else if (e instanceof HTMLElement)
      this.element = e;
    else
      throw new TypeError("Graph constructor requires 'element' argument that is either a string specifying the ID of the HTML element or an HTMLElement");
    if (this.element.innerHTML = "", this.canvas = document.createElement("canvas"), this.canvas.setAttribute("id", "babylonForceGraphRenderCanvas"), this.canvas.setAttribute("touch-action", "none"), this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.touchAction = "none", this.element.appendChild(this.canvas), this.engine = new mt(this.canvas, !0), this.scene = new xi(this.engine), this.camera = new _i("camera", -Math.PI / 2, Math.PI / 2.5, 15, new un(0, 0, 0)), this.camera.attachControl(this.canvas, !0), new Mi("light", new un(1, 1, 0)), this.config.skybox && new Ni(
      "testdome",
      this.config.skybox,
      {
        resolution: 32,
        size: 1e3
      },
      this.scene
    ), this.config.graphEngineType === "ngraph")
      this.graphEngine = new ya();
    else if (this.config.graphEngineType === "d3")
      this.graphEngine = new zo();
    else
      throw new TypeError(`Unknown graph engine type: '${this.graphEngineType}'`);
    if (this.stats = new Go(this), this.config.preSteps)
      for (let r = 0; r < this.config.preSteps; r++)
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
    if (!this.running)
      return;
    this.stats.step(), this.stats.graphStep.beginMonitoring();
    for (let t = 0; t < this.config.stepMultiplier; t++)
      this.graphEngine.step();
    this.stats.graphStep.endMonitoring();
    let e = 0;
    this.stats.nodeUpdate.beginMonitoring();
    for (let t of this.graphEngine.nodes)
      e = Math.max(e, t.getDeltaPos()), t.update();
    this.stats.nodeUpdate.endMonitoring(), this.stats.edgeUpdate.beginMonitoring();
    for (let t of this.graphEngine.edges)
      t.update();
    this.stats.edgeUpdate.endMonitoring(), e < this.minDelta * this.config.stepMultiplier && (console.log("Graph Settled"), console.log(this.stats.toString()), this.graphObservable.notifyObservers({ type: "graph-settled", graph: this }), this.running = !1);
  }
  get minDelta() {
    const e = Me.list.size + se.list.size;
    return (Tn(e, 100) - 0.5) * 0.5;
  }
  addNode(e, t = {}) {
    return this.nodeObservable.notifyObservers({ type: "node-add-before", nodeId: e, metadata: t }), Me.create(this, e, {
      nodeMeshConfig: this.config.nodeMeshOpts,
      pinOnDrag: this.pinOnDrag,
      metadata: t
    });
  }
  addEdge(e, t, r = {}) {
    return this.edgeObservable.notifyObservers({ type: "edge-add-before", srcNodeId: e, dstNodeId: t, metadata: r }), se.create(this, e, t, {
      edgeMeshConfig: this.config.edgeMeshOpts,
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
    const r = t.nodeListProp ?? "nodes", i = t.edgeListProp ?? "links", a = t.nodeIdProp ?? "id", u = t.edgeSrcIdProp ?? "source", d = t.edgeDstIdProp ?? "target", f = await (await fetch(e, t.fetchOpts)).json();
    if (!Array.isArray(f[r]))
      throw TypeError(`when fetching JSON data: '${r}' was not an Array`);
    if (!Array.isArray(f[i]))
      throw TypeError(`when fetching JSON data: '${i}' was not an Array`);
    for (let l of f[r]) {
      let g = l[a], b = l;
      this.addNode(g, b);
    }
    for (let l of f[i]) {
      let g = l[u], b = l[d], y = l;
      this.addEdge(g, b, y);
    }
    this.stats.loadTime.endMonitoring();
  }
}
const Cn = /* @__PURE__ */ new Map();
class Do {
  constructor() {
    I(this, "hits", 0);
    I(this, "misses", 0);
  }
  get(e, t) {
    let r = Cn.get(e);
    return r ? (this.hits++, r.createInstance(e)) : (this.misses++, r = t(), r.isVisible = !1, Cn.set(e, r), r.createInstance(e));
  }
  reset() {
    this.hits = 0, this.misses = 0;
  }
}
class Go {
  constructor(e) {
    I(this, "graph");
    I(this, "sceneInstrumentation");
    I(this, "babylonInstrumentation");
    I(this, "graphStep");
    I(this, "nodeUpdate");
    I(this, "edgeUpdate");
    I(this, "loadTime");
    I(this, "totalUpdates", 0);
    this.graph = e, this.sceneInstrumentation = new Ci(e.scene), this.sceneInstrumentation.captureFrameTime = !0, this.sceneInstrumentation.captureRenderTime = !0, this.sceneInstrumentation.captureInterFrameTime = !0, this.sceneInstrumentation.captureCameraRenderTime = !0, this.sceneInstrumentation.captureActiveMeshesEvaluationTime = !0, this.sceneInstrumentation.captureRenderTargetsRenderTime = !0, this.babylonInstrumentation = new Ei(e.engine), this.babylonInstrumentation.captureGPUFrameTime = !0, this.babylonInstrumentation.captureShaderCompilationTime = !0, this.graphStep = new Ve(), this.nodeUpdate = new Ve(), this.edgeUpdate = new Ve(), this.loadTime = new Ve();
  }
  toString() {
    let e = "";
    function t(a, u, d = "") {
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
    function i(a, u) {
      e += `${a} (min/avg/last sec/max [total]): ${u.min.toFixed(2)} / ${u.average.toFixed(2)} / ${u.lastSecAverage.toFixed(2)} / ${u.max.toFixed(2)} [${u.max.toFixed(2)}] ms
`;
    }
    return r("Graph"), t("Num Nodes", this.numNodes), t("Num Edges", this.numEdges), t("Total Updates", this.totalUpdates), r("Graph Engine Performance"), i("JSON Load Time", this.loadTime), i("Graph Physics Engine Time", this.graphStep), i("Node Update Time", this.nodeUpdate), i("Edge Update Time", this.edgeUpdate), r("BabylonJS Performance"), i("GPU Time", this.babylonInstrumentation.gpuFrameTimeCounter), i("Shader Time", this.babylonInstrumentation.shaderCompilationTimeCounter), i("Mesh Evaluation Time", this.sceneInstrumentation.activeMeshesEvaluationTimeCounter), i("Render Targets Time", this.sceneInstrumentation.renderTargetsRenderTimeCounter), i("Draw Calls Time", this.sceneInstrumentation.drawCallsCounter), i("Frame Time", this.sceneInstrumentation.frameTimeCounter), i("Render Time", this.sceneInstrumentation.renderTimeCounter), i("Time Between Frames", this.sceneInstrumentation.interFrameTimeCounter), i("Camera Render Time", this.sceneInstrumentation.cameraRenderTimeCounter), r("Mesh Cache"), t("Mesh Cache Hits", this.meshCacheHits), t("Mesh Cache Misses", this.meshCacheMisses), e;
  }
  step() {
    this.totalUpdates++;
  }
  reset() {
    this.totalUpdates = 0;
  }
  get numNodes() {
    return Me.list.size;
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
export {
  se as Edge,
  Ho as Graph,
  Me as Node,
  Uo as util
};
