var hi = Object.defineProperty;
var di = (n, e, t) => e in n ? hi(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var z = (n, e, t) => (di(n, typeof e != "symbol" ? e + "" : e, t), t);
import { SixDofDragBehavior as ci, ActionManager as nn, ExecuteCodeAction as li, StandardMaterial as rn, Color3 as xe, MeshBuilder as ae, DynamicTexture as an, CreateGreasedLine as He, Ray as pi, GreasedLineTools as gi, GreasedLineMeshWidthDistribution as vi, RawTexture as on, Engine as yt, GreasedLineMeshColorMode as yi, Observable as lt, Scene as bi, ArcRotateCamera as wi, Vector3 as sn, HemisphericLight as _i, PhotoDome as xi } from "@babylonjs/core";
const Nn = /* @__PURE__ */ new Map([
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
function me(n) {
  let e = Nn.get(n);
  return e || n;
}
const ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colorMap: Nn,
  colorNameToHex: me
}, Symbol.toStringTag, { value: "Module" })), fn = 1.618;
let Xe = class D {
  constructor(e, t, r = {}) {
    z(this, "parentGraph");
    z(this, "id");
    z(this, "metadata");
    z(this, "mesh");
    z(this, "label");
    z(this, "meshDragBehavior");
    z(this, "dragging", !1);
    z(this, "nodeMeshConfig");
    z(this, "pinOnDrag");
    if (this.parentGraph = e, this.id = t, this.metadata = r.metadata ?? {}, this.nodeMeshConfig = this.parentGraph.config.nodeMeshOpts, this.parentGraph.graphEngine.addNode(this), this.mesh = this.nodeMeshConfig.nodeMeshFactory(this, this.parentGraph, this.nodeMeshConfig), this.mesh.metadata = { parentNode: this }, this.nodeMeshConfig.label && (this.label = D.createLabel(this.id.toString(), this, this.parentGraph), this.label.parent = this.mesh, this.label.position.y += 1), this.pinOnDrag = r.pinOnDrag ?? !0, this.meshDragBehavior = new ci(), this.mesh.addBehavior(this.meshDragBehavior), this.meshDragBehavior.onDragStartObservable.add(() => {
      this.parentGraph.running = !0, this.dragging = !0;
    }), this.meshDragBehavior.onDragEndObservable.add(() => {
      this.parentGraph.running = !0, this.pinOnDrag && this.pin(), this.dragging = !1;
    }), this.meshDragBehavior.onPositionChangedObservable.add((i) => {
      this.parentGraph.running = !0, this.parentGraph.graphEngine.setNodePosition(this, i.position);
    }), this.mesh.actionManager = new nn(this.parentGraph.scene), this.parentGraph.fetchNodes && this.parentGraph.fetchEdges) {
      const { fetchNodes: i, fetchEdges: a } = this.parentGraph;
      this.mesh.actionManager.registerAction(
        new li(
          {
            trigger: nn.OnDoublePickTrigger
            // trigger: ActionManager.OnLongPressTrigger,
          },
          () => {
            this.parentGraph.running = !0;
            const f = a(this, this.parentGraph), d = /* @__PURE__ */ new Set();
            f.forEach((u) => {
              d.add(u.source), d.add(u.target);
            }), d.delete(this.id), i(d, this.parentGraph).forEach((u) => this.parentGraph.addNode(u.id, u.metadata)), f.forEach((u) => this.parentGraph.addEdge(u.source, u.target, u.metadata));
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
    return mi;
  }
  static create(e, t, r = {}) {
    const i = D.list.get(t);
    if (i)
      return i;
    const a = new D(e, t, r);
    return D.list.set(t, a), a;
  }
  static defaultNodeMeshFactory(e, t, r) {
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
    let a = new rn("defaultMaterial"), f = r.color;
    return a.diffuseColor = xe.FromHexString(me(f)), i.material = a, a.wireframe = r.wireframe, i.visibility = r.opacity, i;
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
    const a = "48px Verdana", s = 0.006944444444444444, l = new an("DynamicTexture", 64, r.scene).getContext();
    l.font = a;
    const g = l.measureText(e).width + 8, w = g * s, y = new an("DynamicTexture", { width: g, height: 72 }, r.scene, !1), v = new rn("mat", r.scene);
    v.specularColor = xe.Black(), y.hasAlpha = !0;
    const _ = y.getContext();
    _.fillStyle = "white", _.beginPath();
    const b = 0, c = 0, M = [20, 20, 20, 20], C = g, N = 72;
    _.moveTo(b + M[0], c), _.lineTo(b + C - M[1], c), _.arc(b + C - M[1], c + M[1], M[1], 3 * Math.PI / 2, Math.PI * 2), _.lineTo(b + C, c + N - M[2]), _.arc(b + C - M[2], c + N - M[2], M[2], 0, Math.PI / 2), _.lineTo(b + M[3], c + N), _.arc(b + M[3], c + N - M[3], M[3], Math.PI / 2, Math.PI), _.lineTo(b, c + M[0]), _.arc(b + M[0], c + M[0], M[0], Math.PI, 3 * Math.PI / 2), _.closePath(), _.fill(), y.drawText(e, null, null, a, "#000000", "transparent", !0), v.opacityTexture = y, v.emissiveTexture = y, v.disableLighting = !0;
    const m = ae.CreatePlane("plane", { width: w, height: 0.5 }, r.scene);
    return m.material = v, m.billboardMode = 7, m;
  }
};
const mi = /* @__PURE__ */ new Map();
class de {
  // ray: Ray;
  constructor(e, t, r, i = {}) {
    z(this, "parentGraph");
    z(this, "srcId");
    z(this, "dstId");
    z(this, "dstNode");
    z(this, "srcNode");
    z(this, "metadata");
    z(this, "mesh");
    z(this, "edgeMeshConfig");
    this.parentGraph = e, this.srcId = t, this.dstId = r, this.metadata = i.metadata ?? {};
    const a = Xe.list.get(t);
    if (!a)
      throw new Error(`Attempting to create edge '${t}->${r}', Node '${t}' hasn't been created yet.`);
    const f = Xe.list.get(r);
    if (!f)
      throw new Error(`Attempting to create edge '${t}->${r}', Node '${r}' hasn't been created yet.`);
    this.srcNode = a, this.dstNode = f, this.edgeMeshConfig = this.parentGraph.config.edgeMeshOpts, this.parentGraph.graphEngine.addEdge(this), this.mesh = this.edgeMeshConfig.edgeMeshFactory(this, this.parentGraph, this.edgeMeshConfig), this.mesh.metadata = {}, this.mesh.metadata.parentEdge = this;
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
    return Ni;
  }
  static create(e, t, r, i = {}) {
    const a = de.list.get(t, r);
    if (a)
      return a;
    const f = new de(e, t, r, i);
    return de.list.set(t, r, f), f;
  }
  static defaultEdgeMeshFactory(e, t, r) {
    switch (r.type) {
      case "plain":
        return de.createPlainLine(e, t, r);
      case "arrow":
        return de.createArrowLine(e, t, r);
      case "moving":
        return de.createMovingLine(e, t, r);
      default:
        throw new TypeError(`Unknown Edge type: '${r.type}'`);
    }
  }
  static createPlainLine(e, t, r) {
    return He(
      "edge-plain",
      { points: [0, 0, 0, 1, 1, 1] },
      { color: xe.FromHexString(me(r.color)) }
    );
  }
  static createArrowLine(e, t, r) {
    return e.parentGraph.edgeObservable.add((i) => {
      i.doUpdate = !1;
      const a = e.srcNode.mesh, f = e.dstNode.mesh, d = new pi(e.srcNode.mesh.position, e.dstNode.mesh.position);
      d.position = f.position, d.direction = f.position.subtract(a.position);
      const s = d.intersectsMeshes([f]), u = d.intersectsMeshes([a]);
      if (s.length && u.length) {
        const l = s[0].pickedPoint, g = u[0].pickedPoint, w = 0.1, y = 3, v = l.clone().normalize().multiplyByFloats(w * y, w * y, w * y), _ = l.subtract(v);
        e.mesh.setPoints([
          [_.x, _.y, _.z, g.x, g.y, g.z]
        ]);
        const b = gi.GetArrowCap(
          _,
          // position
          d.direction,
          // direction
          w / 3,
          // length
          4,
          // widthUp
          4
          // widthDown
        );
        He(
          "lines",
          {
            points: b.points,
            widths: b.widths,
            widthDistribution: vi.WIDTH_DISTRIBUTION_START,
            instance: e.mesh
          }
          // e.parentGraph.scene
        );
      }
    }), He(
      "edge-arrow",
      { points: [0, 0, 0, 1, 1, 1] },
      { color: xe.FromHexString(me(r.color)) }
    );
  }
  static createMovingLine(e, t, r) {
    const i = xe.FromHexString(me(r.movingLineOpts.baseColor)), a = xe.FromHexString(me(r.color)), f = Math.floor(i.r * 255), d = Math.floor(i.g * 255), s = Math.floor(i.b * 255), u = Math.floor(a.r * 255), l = Math.floor(a.g * 255), g = Math.floor(a.b * 255), w = new Uint8Array([f, d, s, u, l, g]), y = new on(
      w,
      // data
      w.length / 3,
      // width
      1,
      // height
      yt.TEXTUREFORMAT_RGB,
      // format
      t.scene,
      // sceneOrEngine
      !1,
      // generateMipMaps
      !0,
      // invertY
      yt.TEXTURE_NEAREST_NEAREST
      // samplingMode
      // samplingMode
      // type
      // creationFlags
      // useSRGBBuffer
    );
    y.wrapU = on.WRAP_ADDRESSMODE, y.name = "blue-white-texture";
    const v = He(
      "edge-moving",
      { points: [0, 0, 0, 1, 1, 1] },
      {
        // color: Color3.FromHexString(colorNameToHex(edgeColor))
        width: r.movingLineOpts.width,
        colorMode: yi.COLOR_MODE_MULTIPLY
      }
    );
    let _ = v.material;
    return _.emissiveTexture = y, _.disableLighting = !0, y.uScale = 5, t.scene.onBeforeRenderObservable.add(() => {
      y.uOffset += 0.04 * t.scene.getAnimationRatio();
    }), v;
  }
}
class Mi {
  constructor() {
    z(this, "map", /* @__PURE__ */ new Map());
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
}
const Ni = new Mi();
var Qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xt(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var mt = function(e) {
  Ci(e);
  var t = Ei(e);
  return e.on = t.on, e.off = t.off, e.fire = t.fire, e;
};
function Ei(n) {
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
          for (var f = e[t], d = 0; d < f.length; ++d)
            f[d].callback === r && f.splice(d, 1);
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
        var f = r[a];
        f.callback.apply(f.ctx, i);
      }
      return n;
    }
  };
}
function Ci(n) {
  if (!n)
    throw new Error("Eventify cannot use falsy object as events subject");
  for (var e = ["on", "fire", "off"], t = 0; t < e.length; ++t)
    if (n.hasOwnProperty(e[t]))
      throw new Error("Subject cannot be eventified, since it already has property '" + e[t] + "'");
}
var $i = Bi, Ti = mt;
function Bi(n) {
  if (n = n || {}, "uniqueLinkId" in n && (console.warn(
    "ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",
    `
`,
    `Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`
  ), n.multigraph = n.uniqueLinkId), n.multigraph === void 0 && (n.multigraph = !1), typeof Map != "function")
    throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), r = {}, i = 0, a = n.multigraph ? N : C, f = [], d = T, s = T, u = T, l = T, g = {
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
    addNode: _,
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
    getNode: b,
    /**
     * Gets number of nodes in this graph.
     *
     * @return number of nodes in the graph.
     */
    getNodeCount: m,
    /**
     * Gets total number of links in the graph.
     */
    getLinkCount: $,
    /**
     * Gets total number of links in the graph.
     */
    getEdgeCount: $,
    /**
     * Synonym for `getLinkCount()`
     */
    getLinksCount: $,
    /**
     * Synonym for `getNodeCount()`
     */
    getNodesCount: m,
    /**
     * Gets all links (inbound and outbound) from the node with given id.
     * If node with given id is not found null is returned.
     *
     * @param nodeId requested node identifier.
     *
     * @return Set of links from and to requested node if such node exists;
     *   otherwise null is returned.
     */
    getLinks: S,
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
    forEachLinkedNode: se,
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
    forEachLink: j,
    /**
     * Suspend all notifications about graph changes until
     * endUpdate is called.
     */
    beginUpdate: u,
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
    hasNode: b,
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
  return Ti(g), w(), g;
  function w() {
    var P = g.on;
    g.on = A;
    function A() {
      return g.beginUpdate = u = Q, g.endUpdate = l = re, d = y, s = v, g.on = P, P.apply(g, arguments);
    }
  }
  function y(P, A) {
    f.push({
      link: P,
      changeType: A
    });
  }
  function v(P, A) {
    f.push({
      node: P,
      changeType: A
    });
  }
  function _(P, A) {
    if (P === void 0)
      throw new Error("Invalid node identifier");
    u();
    var L = b(P);
    return L ? (L.data = A, s(L, "update")) : (L = new Pi(P, A), s(L, "add")), e.set(P, L), l(), L;
  }
  function b(P) {
    return e.get(P);
  }
  function c(P) {
    var A = b(P);
    if (!A)
      return !1;
    u();
    var L = A.links;
    return L && (L.forEach(G), A.links = null), e.delete(P), s(A, "remove"), l(), !0;
  }
  function M(P, A, L) {
    u();
    var I = b(P) || _(P), K = b(A) || _(A), X = a(P, A, L), Y = t.has(X.id);
    return t.set(X.id, X), un(I, X), P !== A && un(K, X), d(X, Y ? "update" : "add"), l(), X;
  }
  function C(P, A, L) {
    var I = Ve(P, A), K = t.get(I);
    return K ? (K.data = L, K) : new hn(P, A, L, I);
  }
  function N(P, A, L) {
    var I = Ve(P, A), K = r.hasOwnProperty(I);
    if (K || U(P, A)) {
      K || (r[I] = 0);
      var X = "@" + ++r[I];
      I = Ve(P + X, A + X);
    }
    return new hn(P, A, L, I);
  }
  function m() {
    return e.size;
  }
  function $() {
    return t.size;
  }
  function S(P) {
    var A = b(P);
    return A ? A.links : null;
  }
  function O(P, A) {
    return A !== void 0 && (P = U(P, A)), G(P);
  }
  function G(P) {
    if (!P || !t.get(P.id))
      return !1;
    u(), t.delete(P.id);
    var A = b(P.fromId), L = b(P.toId);
    return A && A.links.delete(P), L && L.links.delete(P), d(P, "remove"), l(), !0;
  }
  function U(P, A) {
    if (!(P === void 0 || A === void 0))
      return t.get(Ve(P, A));
  }
  function H() {
    u(), oe(function(P) {
      c(P.id);
    }), l();
  }
  function j(P) {
    if (typeof P == "function")
      for (var A = t.values(), L = A.next(); !L.done; ) {
        if (P(L.value))
          return !0;
        L = A.next();
      }
  }
  function se(P, A, L) {
    var I = b(P);
    if (I && I.links && typeof A == "function")
      return L ? x(I.links, P, A) : E(I.links, P, A);
  }
  function E(P, A, L) {
    for (var I, K = P.values(), X = K.next(); !X.done; ) {
      var Y = X.value, Le = Y.fromId === A ? Y.toId : Y.fromId;
      if (I = L(e.get(Le), Y), I)
        return !0;
      X = K.next();
    }
  }
  function x(P, A, L) {
    for (var I, K = P.values(), X = K.next(); !X.done; ) {
      var Y = X.value;
      if (Y.fromId === A && (I = L(e.get(Y.toId), Y), I))
        return !0;
      X = K.next();
    }
  }
  function T() {
  }
  function Q() {
    i += 1;
  }
  function re() {
    i -= 1, i === 0 && f.length > 0 && (g.fire("changed", f), f.length = 0);
  }
  function oe(P) {
    if (typeof P != "function")
      throw new Error("Function is expected to iterate over graph nodes. You passed " + P);
    for (var A = e.values(), L = A.next(); !L.done; ) {
      if (P(L.value))
        return !0;
      L = A.next();
    }
  }
}
function Pi(n, e) {
  this.id = n, this.links = null, this.data = e;
}
function un(n, e) {
  n.links ? n.links.add(e) : n.links = /* @__PURE__ */ new Set([e]);
}
function hn(n, e, t, r) {
  this.fromId = n, this.toId = e, this.data = t, this.id = r;
}
function Ve(n, e) {
  return n.toString() + "👉 " + e.toString();
}
const Ai = /* @__PURE__ */ xt($i);
var Mt = { exports: {} }, Oe = { exports: {} }, En = function(e) {
  return e === 0 ? "x" : e === 1 ? "y" : e === 2 ? "z" : "c" + (e + 1);
};
const Si = En;
var Ne = function(e) {
  return t;
  function t(r, i) {
    let a = i && i.indent || 0, f = i && i.join !== void 0 ? i.join : `
`, d = Array(a + 1).join(" "), s = [];
    for (let u = 0; u < e; ++u) {
      let l = Si(u), g = u === 0 ? "" : d;
      s.push(g + r.replace(/{var}/g, l));
    }
    return s.join(f);
  }
};
const Cn = Ne;
Oe.exports = zi;
Oe.exports.generateCreateBodyFunctionBody = $n;
Oe.exports.getVectorCode = Bn;
Oe.exports.getBodyCode = Tn;
function zi(n, e) {
  let t = $n(n, e), { Body: r } = new Function(t)();
  return r;
}
function $n(n, e) {
  return `
${Bn(n, e)}
${Tn(n)}
return {Body: Body, Vector: Vector};
`;
}
function Tn(n) {
  let e = Cn(n), t = e("{var}", { join: ", " });
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
function Bn(n, e) {
  let t = Cn(n), r = "";
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
var Ii = Oe.exports, ge = { exports: {} };
const Nt = Ne, pe = En;
ge.exports = Oi;
ge.exports.generateQuadTreeFunctionBody = Pn;
ge.exports.getInsertStackCode = On;
ge.exports.getQuadNodeCode = In;
ge.exports.isSamePosition = An;
ge.exports.getChildBodyCode = zn;
ge.exports.setChildBodyCode = Sn;
function Oi(n) {
  let e = Pn(n);
  return new Function(e)();
}
function Pn(n) {
  let e = Nt(n), t = Math.pow(2, n);
  return `
${On()}
${In(n)}
${An(n)}
${zn(n)}
${Sn(n)}

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
${f("      node.")}
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
    let s = [], u = Array(d + 1).join(" ");
    for (let l = 0; l < n; ++l)
      s.push(u + `if (${pe(l)} > max_${pe(l)}) {`), s.push(u + `  quadIdx = quadIdx + ${Math.pow(2, l)};`), s.push(u + `  min_${pe(l)} = max_${pe(l)};`), s.push(u + `  max_${pe(l)} = node.max_${pe(l)};`), s.push(u + "}");
    return s.join(`
`);
  }
  function a() {
    let d = Array(11).join(" "), s = [];
    for (let u = 0; u < t; ++u)
      s.push(d + `if (node.quad${u}) {`), s.push(d + `  queue[pushIdx] = node.quad${u};`), s.push(d + "  queueLength += 1;"), s.push(d + "  pushIdx += 1;"), s.push(d + "}");
    return s.join(`
`);
  }
  function f(d) {
    let s = [];
    for (let u = 0; u < t; ++u)
      s.push(`${d}quad${u} = null;`);
    return s.join(`
`);
  }
}
function An(n) {
  let e = Nt(n);
  return `
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});", { indent: 2 })}
  
    return ${e("d{var} < 1e-8", { join: " && " })};
  }  
`;
}
function Sn(n) {
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
function zn(n) {
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
function In(n) {
  let e = Nt(n), t = Math.pow(2, n);
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
    let f = [];
    for (let d = 0; d < t; ++d)
      f.push(`${a}quad${d} = null;`);
    return f.join(`
`);
  }
}
function On() {
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
var Li = ge.exports, Et = { exports: {} };
Et.exports = Fi;
Et.exports.generateFunctionBody = Ln;
const ki = Ne;
function Fi(n) {
  let e = Ln(n);
  return new Function("bodies", "settings", "random", e);
}
function Ln(n) {
  let e = ki(n);
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
var qi = Et.exports, Ct = { exports: {} };
const Di = Ne;
Ct.exports = ji;
Ct.exports.generateCreateDragForceFunctionBody = kn;
function ji(n) {
  let e = kn(n);
  return new Function("options", e);
}
function kn(n) {
  return `
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${Di(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};", { indent: 6 })}
    }
  };
`;
}
var Gi = Ct.exports, $t = { exports: {} };
const Ri = Ne;
$t.exports = Ui;
$t.exports.generateCreateSpringForceFunctionBody = Fn;
function Ui(n) {
  let e = Fn(n);
  return new Function("options", "random", e);
}
function Fn(n) {
  let e = Ri(n);
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
var Hi = $t.exports, Tt = { exports: {} };
const Qi = Ne;
Tt.exports = Vi;
Tt.exports.generateIntegratorFunctionBody = qn;
function Vi(n) {
  let e = qn(n);
  return new Function("bodies", "timeStep", "adaptiveTimeStepWeight", e);
}
function qn(n) {
  let e = Qi(n);
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
var Wi = Tt.exports, pt, dn;
function Xi() {
  if (dn)
    return pt;
  dn = 1, pt = n;
  function n(e, t, r, i) {
    this.from = e, this.to = t, this.length = r, this.coefficient = i;
  }
  return pt;
}
var gt, cn;
function Ki() {
  if (cn)
    return gt;
  cn = 1, gt = n;
  function n(e, t) {
    var r;
    if (e || (e = {}), t) {
      for (r in t)
        if (t.hasOwnProperty(r)) {
          var i = e.hasOwnProperty(r), a = typeof t[r], f = !i || typeof e[r] !== a;
          f ? e[r] = t[r] : a === "object" && (e[r] = n(e[r], t[r]));
        }
    }
    return e;
  }
  return gt;
}
var Be = { exports: {} }, ln;
function Yi() {
  if (ln)
    return Be.exports;
  ln = 1, Be.exports = n, Be.exports.random = n, Be.exports.randomIterator = d;
  function n(s) {
    var u = typeof s == "number" ? s : +/* @__PURE__ */ new Date();
    return new e(u);
  }
  function e(s) {
    this.seed = s;
  }
  e.prototype.next = f, e.prototype.nextDouble = a, e.prototype.uniform = a, e.prototype.gaussian = t;
  function t() {
    var s, u, l;
    do
      u = this.nextDouble() * 2 - 1, l = this.nextDouble() * 2 - 1, s = u * u + l * l;
    while (s >= 1 || s === 0);
    return u * Math.sqrt(-2 * Math.log(s) / s);
  }
  e.prototype.levy = r;
  function r() {
    var s = 1.5, u = Math.pow(
      i(1 + s) * Math.sin(Math.PI * s / 2) / (i((1 + s) / 2) * s * Math.pow(2, (s - 1) / 2)),
      1 / s
    );
    return this.gaussian() * u / Math.pow(Math.abs(this.gaussian()), 1 / s);
  }
  function i(s) {
    return Math.sqrt(2 * Math.PI / s) * Math.pow(1 / Math.E * (s + 1 / (12 * s - 1 / (10 * s))), s);
  }
  function a() {
    var s = this.seed;
    return s = s + 2127912214 + (s << 12) & 4294967295, s = (s ^ 3345072700 ^ s >>> 19) & 4294967295, s = s + 374761393 + (s << 5) & 4294967295, s = (s + 3550635116 ^ s << 9) & 4294967295, s = s + 4251993797 + (s << 3) & 4294967295, s = (s ^ 3042594569 ^ s >>> 16) & 4294967295, this.seed = s, (s & 268435455) / 268435456;
  }
  function f(s) {
    return Math.floor(this.nextDouble() * s);
  }
  function d(s, u) {
    var l = u || n();
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
      var y, v, _;
      for (y = s.length - 1; y > 0; --y)
        v = l.next(y + 1), _ = s[v], s[v] = s[y], s[y] = _;
      return s;
    }
    function w(y) {
      var v, _, b;
      for (v = s.length - 1; v > 0; --v)
        _ = l.next(v + 1), b = s[_], s[_] = s[v], s[v] = b, y(b);
      s.length && y(s[0]);
    }
  }
  return Be.exports;
}
var Dn = ia, Ji = Ii, Zi = Li, ea = qi, ta = Gi, na = Hi, ra = Wi, pn = {};
function ia(n) {
  var e = Xi(), t = Ki(), r = mt;
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
  var i = pn[n.dimensions];
  if (!i) {
    var a = n.dimensions;
    i = {
      Body: Ji(a, n.debug),
      createQuadTree: Zi(a),
      createBounds: ea(a),
      createDragForce: ta(a),
      createSpringForce: na(a),
      integrate: ra(a)
    }, pn[a] = i;
  }
  var f = i.Body, d = i.createQuadTree, s = i.createBounds, u = i.createDragForce, l = i.createSpringForce, g = i.integrate, w = (x) => new f(x), y = Yi().random(42), v = [], _ = [], b = d(n, y), c = s(v, n, y), M = l(n, y), C = u(n), N = 0, m = [], $ = /* @__PURE__ */ new Map(), S = 0;
  U("nbody", se), U("spring", E);
  var O = {
    /**
     * Array of bodies, registered with current simulator
     *
     * Note: To add new body, use addBody() method. This property is only
     * exposed for testing/performance purposes.
     */
    bodies: v,
    quadTree: b,
    /**
     * Array of springs, registered with current simulator
     *
     * Note: To add new spring, use addSpring() method. This property is only
     * exposed for testing/performance purposes.
     */
    springs: _,
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
    getForces: j,
    /**
     * Performs one step of force simulation.
     *
     * @returns {boolean} true if system is considered stable; False otherwise.
     */
    step: function() {
      for (var x = 0; x < m.length; ++x)
        m[x](S);
      var T = g(v, n.timeStep, n.adaptiveTimeStepWeight);
      return S += 1, T;
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
      var T = w(x);
      return v.push(T), T;
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
        var T = v.indexOf(x);
        if (!(T < 0))
          return v.splice(T, 1), v.length === 0 && c.reset(), !0;
      }
    },
    /**
     * Adds a spring to this simulation.
     *
     * @returns {Object} - a handle for a spring. If you want to later remove
     * spring pass it to removeSpring() method.
     */
    addSpring: function(x, T, Q, re) {
      if (!x || !T)
        throw new Error("Cannot add null spring to force simulator");
      typeof Q != "number" && (Q = -1);
      var oe = new e(x, T, Q, re >= 0 ? re : -1);
      return _.push(oe), oe;
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
        var T = _.indexOf(x);
        if (T > -1)
          return _.splice(T, 1), !0;
      }
    },
    getBestNewBodyPosition: function(x) {
      return c.getBestNewPosition(x);
    },
    /**
     * Returns bounding box which covers all bodies
     */
    getBBox: G,
    getBoundingBox: G,
    invalidateBBox: function() {
      console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call");
    },
    // TODO: Move the force specific stuff to force
    gravity: function(x) {
      return x !== void 0 ? (n.gravity = x, b.options({ gravity: x }), this) : n.gravity;
    },
    theta: function(x) {
      return x !== void 0 ? (n.theta = x, b.options({ theta: x }), this) : n.theta;
    },
    /**
     * Returns pseudo-random number generator instance.
     */
    random: y
  };
  return aa(n, O), r(O), O;
  function G() {
    return c.update(), c.box;
  }
  function U(x, T) {
    if ($.has(x))
      throw new Error("Force " + x + " is already added");
    $.set(x, T), m.push(T);
  }
  function H(x) {
    var T = m.indexOf($.get(x));
    T < 0 || (m.splice(T, 1), $.delete(x));
  }
  function j() {
    return $;
  }
  function se() {
    if (v.length !== 0) {
      b.insertBodies(v);
      for (var x = v.length; x--; ) {
        var T = v[x];
        T.isPinned || (T.reset(), b.updateBodyForce(T), C.update(T));
      }
    }
  }
  function E() {
    for (var x = _.length; x--; )
      M.update(_[x]);
  }
}
function aa(n, e) {
  for (var t in n)
    oa(n, e, t);
}
function oa(n, e, t) {
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
Mt.exports = fa;
Mt.exports.simulator = Dn;
var sa = mt;
function fa(n, e) {
  if (!n)
    throw new Error("Graph structure cannot be undefined");
  var t = e && e.createSimulator || Dn, r = t(e);
  if (Array.isArray(e))
    throw new Error("Physics settings is expected to be an object");
  var i = n.version > 19 ? se : j;
  e && typeof e.nodeMass == "function" && (i = e.nodeMass);
  var a = /* @__PURE__ */ new Map(), f = {}, d = 0, s = r.settings.springTransform || ua;
  C(), b();
  var u = !1, l = {
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
      var x = E / d, T = x <= 0.01;
      return g(T), T;
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
      var x = H(E);
      x.setPosition.apply(x, Array.prototype.slice.call(arguments, 1));
    },
    /**
     * @returns {Object} Link position by link id
     * @returns {Object.from} {x, y} coordinates of link start
     * @returns {Object.to} {x, y} coordinates of link end
     */
    getLinkPosition: function(E) {
      var x = f[E];
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
    forEachBody: w,
    /*
     * Requests layout algorithm to pin/unpin node to its current position
     * Pinned nodes should not be affected by layout algorithm and always
     * remain at their position
     */
    pinNode: function(E, x) {
      var T = H(E.id);
      T.isPinned = !!x;
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
    getBody: _,
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
  return sa(l), l;
  function g(E) {
    u !== E && (u = E, c(E));
  }
  function w(E) {
    a.forEach(E);
  }
  function y() {
    var E = 0, x = 0;
    return w(function(T) {
      E += Math.abs(T.force.x), x += Math.abs(T.force.y);
    }), Math.sqrt(E * E + x * x);
  }
  function v(E, x) {
    var T;
    if (x === void 0)
      typeof E != "object" ? T = E : T = E.id;
    else {
      var Q = n.hasLink(E, x);
      if (!Q)
        return;
      T = Q.id;
    }
    return f[T];
  }
  function _(E) {
    return a.get(E);
  }
  function b() {
    n.on("changed", M);
  }
  function c(E) {
    l.fire("stable", E);
  }
  function M(E) {
    for (var x = 0; x < E.length; ++x) {
      var T = E[x];
      T.changeType === "add" ? (T.node && N(T.node.id), T.link && $(T.link)) : T.changeType === "remove" && (T.node && m(T.node), T.link && S(T.link));
    }
    d = n.getNodesCount();
  }
  function C() {
    d = 0, n.forEachNode(function(E) {
      N(E.id), d += 1;
    }), n.forEachLink($);
  }
  function N(E) {
    var x = a.get(E);
    if (!x) {
      var T = n.getNode(E);
      if (!T)
        throw new Error("initBody() was called with unknown node id");
      var Q = T.position;
      if (!Q) {
        var re = O(T);
        Q = r.getBestNewBodyPosition(re);
      }
      x = r.addBodyAt(Q), x.id = E, a.set(E, x), G(E), U(T) && (x.isPinned = !0);
    }
  }
  function m(E) {
    var x = E.id, T = a.get(x);
    T && (a.delete(x), r.removeBody(T));
  }
  function $(E) {
    G(E.fromId), G(E.toId);
    var x = a.get(E.fromId), T = a.get(E.toId), Q = r.addSpring(x, T, E.length);
    s(E, Q), f[E.id] = Q;
  }
  function S(E) {
    var x = f[E.id];
    if (x) {
      var T = n.getNode(E.fromId), Q = n.getNode(E.toId);
      T && G(T.id), Q && G(Q.id), delete f[E.id], r.removeSpring(x);
    }
  }
  function O(E) {
    var x = [];
    if (!E.links)
      return x;
    for (var T = Math.min(E.links.length, 2), Q = 0; Q < T; ++Q) {
      var re = E.links[Q], oe = re.fromId !== E.id ? a.get(re.fromId) : a.get(re.toId);
      oe && oe.pos && x.push(oe);
    }
    return x;
  }
  function G(E) {
    var x = a.get(E);
    if (x.mass = i(E), Number.isNaN(x.mass))
      throw new Error("Node mass should be a number");
  }
  function U(E) {
    return E && (E.isPinned || E.data && E.data.isPinned);
  }
  function H(E) {
    var x = a.get(E);
    return x || (N(E), x = a.get(E)), x;
  }
  function j(E) {
    var x = n.getLinks(E);
    return x ? 1 + x.length / 3 : 1;
  }
  function se(E) {
    var x = n.getLinks(E);
    return x ? 1 + x.size / 3 : 1;
  }
}
function ua() {
}
var ha = Mt.exports;
const da = /* @__PURE__ */ xt(ha);
class ca {
  constructor() {
    z(this, "ngraph");
    z(this, "ngraphLayout");
    z(this, "nodeMapping", /* @__PURE__ */ new Map());
    z(this, "edgeMapping", /* @__PURE__ */ new Map());
    this.ngraph = Ai(), this.ngraphLayout = da(this.ngraph, { dimensions: 3 });
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
function la(n, e, t) {
  var r, i = 1;
  n == null && (n = 0), e == null && (e = 0), t == null && (t = 0);
  function a() {
    var f, d = r.length, s, u = 0, l = 0, g = 0;
    for (f = 0; f < d; ++f)
      s = r[f], u += s.x || 0, l += s.y || 0, g += s.z || 0;
    for (u = (u / d - n) * i, l = (l / d - e) * i, g = (g / d - t) * i, f = 0; f < d; ++f)
      s = r[f], u && (s.x -= u), l && (s.y -= l), g && (s.z -= g);
  }
  return a.initialize = function(f) {
    r = f;
  }, a.x = function(f) {
    return arguments.length ? (n = +f, a) : n;
  }, a.y = function(f) {
    return arguments.length ? (e = +f, a) : e;
  }, a.z = function(f) {
    return arguments.length ? (t = +f, a) : t;
  }, a.strength = function(f) {
    return arguments.length ? (i = +f, a) : i;
  }, a;
}
function pa(n) {
  const e = +this._x.call(null, n);
  return jn(this.cover(e), e, n);
}
function jn(n, e, t) {
  if (isNaN(e))
    return n;
  var r, i = n._root, a = { data: t }, f = n._x0, d = n._x1, s, u, l, g, w;
  if (!i)
    return n._root = a, n;
  for (; i.length; )
    if ((l = e >= (s = (f + d) / 2)) ? f = s : d = s, r = i, !(i = i[g = +l]))
      return r[g] = a, n;
  if (u = +n._x.call(null, i.data), e === u)
    return a.next = i, r ? r[g] = a : n._root = a, n;
  do
    r = r ? r[g] = new Array(2) : n._root = new Array(2), (l = e >= (s = (f + d) / 2)) ? f = s : d = s;
  while ((g = +l) == (w = +(u >= s)));
  return r[w] = i, r[g] = a, n;
}
function ga(n) {
  Array.isArray(n) || (n = Array.from(n));
  const e = n.length, t = new Float64Array(e);
  let r = 1 / 0, i = -1 / 0;
  for (let a = 0, f; a < e; ++a)
    isNaN(f = +this._x.call(null, n[a])) || (t[a] = f, f < r && (r = f), f > i && (i = f));
  if (r > i)
    return this;
  this.cover(r).cover(i);
  for (let a = 0; a < e; ++a)
    jn(this, t[a], n[a]);
  return this;
}
function va(n) {
  if (isNaN(n = +n))
    return this;
  var e = this._x0, t = this._x1;
  if (isNaN(e))
    t = (e = Math.floor(n)) + 1;
  else {
    for (var r = t - e || 1, i = this._root, a, f; e > n || n >= t; )
      switch (f = +(n < e), a = new Array(2), a[f] = i, i = a, r *= 2, f) {
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
function ya() {
  var n = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        n.push(e.data);
      while (e = e.next);
  }), n;
}
function ba(n) {
  return arguments.length ? this.cover(+n[0][0]).cover(+n[1][0]) : isNaN(this._x0) ? void 0 : [[this._x0], [this._x1]];
}
function le(n, e, t) {
  this.node = n, this.x0 = e, this.x1 = t;
}
function wa(n, e) {
  var t, r = this._x0, i, a, f = this._x1, d = [], s = this._root, u, l;
  for (s && d.push(new le(s, r, f)), e == null ? e = 1 / 0 : (r = n - e, f = n + e); u = d.pop(); )
    if (!(!(s = u.node) || (i = u.x0) > f || (a = u.x1) < r))
      if (s.length) {
        var g = (i + a) / 2;
        d.push(
          new le(s[1], g, a),
          new le(s[0], i, g)
        ), (l = +(n >= g)) && (u = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - l], d[d.length - 1 - l] = u);
      } else {
        var w = Math.abs(n - +this._x.call(null, s.data));
        w < e && (e = w, r = n - w, f = n + w, t = s.data);
      }
  return t;
}
function _a(n) {
  if (isNaN(s = +this._x.call(null, n)))
    return this;
  var e, t = this._root, r, i, a, f = this._x0, d = this._x1, s, u, l, g, w;
  if (!t)
    return this;
  if (t.length)
    for (; ; ) {
      if ((l = s >= (u = (f + d) / 2)) ? f = u : d = u, e = t, !(t = t[g = +l]))
        return this;
      if (!t.length)
        break;
      e[g + 1 & 1] && (r = e, w = g);
    }
  for (; t.data !== n; )
    if (i = t, !(t = t.next))
      return this;
  return (a = t.next) && delete t.next, i ? (a ? i.next = a : delete i.next, this) : e ? (a ? e[g] = a : delete e[g], (t = e[0] || e[1]) && t === (e[1] || e[0]) && !t.length && (r ? r[w] = t : this._root = t), this) : (this._root = a, this);
}
function xa(n) {
  for (var e = 0, t = n.length; e < t; ++e)
    this.remove(n[e]);
  return this;
}
function ma() {
  return this._root;
}
function Ma() {
  var n = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++n;
      while (e = e.next);
  }), n;
}
function Na(n) {
  var e = [], t, r = this._root, i, a, f;
  for (r && e.push(new le(r, this._x0, this._x1)); t = e.pop(); )
    if (!n(r = t.node, a = t.x0, f = t.x1) && r.length) {
      var d = (a + f) / 2;
      (i = r[1]) && e.push(new le(i, d, f)), (i = r[0]) && e.push(new le(i, a, d));
    }
  return this;
}
function Ea(n) {
  var e = [], t = [], r;
  for (this._root && e.push(new le(this._root, this._x0, this._x1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var a, f = r.x0, d = r.x1, s = (f + d) / 2;
      (a = i[0]) && e.push(new le(a, f, s)), (a = i[1]) && e.push(new le(a, s, d));
    }
    t.push(r);
  }
  for (; r = t.pop(); )
    n(r.node, r.x0, r.x1);
  return this;
}
function Ca(n) {
  return n[0];
}
function $a(n) {
  return arguments.length ? (this._x = n, this) : this._x;
}
function Gn(n, e) {
  var t = new Bt(e ?? Ca, NaN, NaN);
  return n == null ? t : t.addAll(n);
}
function Bt(n, e, t) {
  this._x = n, this._x0 = e, this._x1 = t, this._root = void 0;
}
function gn(n) {
  for (var e = { data: n.data }, t = e; n = n.next; )
    t = t.next = { data: n.data };
  return e;
}
var te = Gn.prototype = Bt.prototype;
te.copy = function() {
  var n = new Bt(this._x, this._x0, this._x1), e = this._root, t, r;
  if (!e)
    return n;
  if (!e.length)
    return n._root = gn(e), n;
  for (t = [{ source: e, target: n._root = new Array(2) }]; e = t.pop(); )
    for (var i = 0; i < 2; ++i)
      (r = e.source[i]) && (r.length ? t.push({ source: r, target: e.target[i] = new Array(2) }) : e.target[i] = gn(r));
  return n;
};
te.add = pa;
te.addAll = ga;
te.cover = va;
te.data = ya;
te.extent = ba;
te.find = wa;
te.remove = _a;
te.removeAll = xa;
te.root = ma;
te.size = Ma;
te.visit = Na;
te.visitAfter = Ea;
te.x = $a;
function Ta(n) {
  const e = +this._x.call(null, n), t = +this._y.call(null, n);
  return Rn(this.cover(e, t), e, t, n);
}
function Rn(n, e, t, r) {
  if (isNaN(e) || isNaN(t))
    return n;
  var i, a = n._root, f = { data: r }, d = n._x0, s = n._y0, u = n._x1, l = n._y1, g, w, y, v, _, b, c, M;
  if (!a)
    return n._root = f, n;
  for (; a.length; )
    if ((_ = e >= (g = (d + u) / 2)) ? d = g : u = g, (b = t >= (w = (s + l) / 2)) ? s = w : l = w, i = a, !(a = a[c = b << 1 | _]))
      return i[c] = f, n;
  if (y = +n._x.call(null, a.data), v = +n._y.call(null, a.data), e === y && t === v)
    return f.next = a, i ? i[c] = f : n._root = f, n;
  do
    i = i ? i[c] = new Array(4) : n._root = new Array(4), (_ = e >= (g = (d + u) / 2)) ? d = g : u = g, (b = t >= (w = (s + l) / 2)) ? s = w : l = w;
  while ((c = b << 1 | _) === (M = (v >= w) << 1 | y >= g));
  return i[M] = a, i[c] = f, n;
}
function Ba(n) {
  var e, t, r = n.length, i, a, f = new Array(r), d = new Array(r), s = 1 / 0, u = 1 / 0, l = -1 / 0, g = -1 / 0;
  for (t = 0; t < r; ++t)
    isNaN(i = +this._x.call(null, e = n[t])) || isNaN(a = +this._y.call(null, e)) || (f[t] = i, d[t] = a, i < s && (s = i), i > l && (l = i), a < u && (u = a), a > g && (g = a));
  if (s > l || u > g)
    return this;
  for (this.cover(s, u).cover(l, g), t = 0; t < r; ++t)
    Rn(this, f[t], d[t], n[t]);
  return this;
}
function Pa(n, e) {
  if (isNaN(n = +n) || isNaN(e = +e))
    return this;
  var t = this._x0, r = this._y0, i = this._x1, a = this._y1;
  if (isNaN(t))
    i = (t = Math.floor(n)) + 1, a = (r = Math.floor(e)) + 1;
  else {
    for (var f = i - t || 1, d = this._root, s, u; t > n || n >= i || r > e || e >= a; )
      switch (u = (e < r) << 1 | n < t, s = new Array(4), s[u] = d, d = s, f *= 2, u) {
        case 0:
          i = t + f, a = r + f;
          break;
        case 1:
          t = i - f, a = r + f;
          break;
        case 2:
          i = t + f, r = a - f;
          break;
        case 3:
          t = i - f, r = a - f;
          break;
      }
    this._root && this._root.length && (this._root = d);
  }
  return this._x0 = t, this._y0 = r, this._x1 = i, this._y1 = a, this;
}
function Aa() {
  var n = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        n.push(e.data);
      while (e = e.next);
  }), n;
}
function Sa(n) {
  return arguments.length ? this.cover(+n[0][0], +n[0][1]).cover(+n[1][0], +n[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function Z(n, e, t, r, i) {
  this.node = n, this.x0 = e, this.y0 = t, this.x1 = r, this.y1 = i;
}
function za(n, e, t) {
  var r, i = this._x0, a = this._y0, f, d, s, u, l = this._x1, g = this._y1, w = [], y = this._root, v, _;
  for (y && w.push(new Z(y, i, a, l, g)), t == null ? t = 1 / 0 : (i = n - t, a = e - t, l = n + t, g = e + t, t *= t); v = w.pop(); )
    if (!(!(y = v.node) || (f = v.x0) > l || (d = v.y0) > g || (s = v.x1) < i || (u = v.y1) < a))
      if (y.length) {
        var b = (f + s) / 2, c = (d + u) / 2;
        w.push(
          new Z(y[3], b, c, s, u),
          new Z(y[2], f, c, b, u),
          new Z(y[1], b, d, s, c),
          new Z(y[0], f, d, b, c)
        ), (_ = (e >= c) << 1 | n >= b) && (v = w[w.length - 1], w[w.length - 1] = w[w.length - 1 - _], w[w.length - 1 - _] = v);
      } else {
        var M = n - +this._x.call(null, y.data), C = e - +this._y.call(null, y.data), N = M * M + C * C;
        if (N < t) {
          var m = Math.sqrt(t = N);
          i = n - m, a = e - m, l = n + m, g = e + m, r = y.data;
        }
      }
  return r;
}
function Ia(n) {
  if (isNaN(l = +this._x.call(null, n)) || isNaN(g = +this._y.call(null, n)))
    return this;
  var e, t = this._root, r, i, a, f = this._x0, d = this._y0, s = this._x1, u = this._y1, l, g, w, y, v, _, b, c;
  if (!t)
    return this;
  if (t.length)
    for (; ; ) {
      if ((v = l >= (w = (f + s) / 2)) ? f = w : s = w, (_ = g >= (y = (d + u) / 2)) ? d = y : u = y, e = t, !(t = t[b = _ << 1 | v]))
        return this;
      if (!t.length)
        break;
      (e[b + 1 & 3] || e[b + 2 & 3] || e[b + 3 & 3]) && (r = e, c = b);
    }
  for (; t.data !== n; )
    if (i = t, !(t = t.next))
      return this;
  return (a = t.next) && delete t.next, i ? (a ? i.next = a : delete i.next, this) : e ? (a ? e[b] = a : delete e[b], (t = e[0] || e[1] || e[2] || e[3]) && t === (e[3] || e[2] || e[1] || e[0]) && !t.length && (r ? r[c] = t : this._root = t), this) : (this._root = a, this);
}
function Oa(n) {
  for (var e = 0, t = n.length; e < t; ++e)
    this.remove(n[e]);
  return this;
}
function La() {
  return this._root;
}
function ka() {
  var n = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++n;
      while (e = e.next);
  }), n;
}
function Fa(n) {
  var e = [], t, r = this._root, i, a, f, d, s;
  for (r && e.push(new Z(r, this._x0, this._y0, this._x1, this._y1)); t = e.pop(); )
    if (!n(r = t.node, a = t.x0, f = t.y0, d = t.x1, s = t.y1) && r.length) {
      var u = (a + d) / 2, l = (f + s) / 2;
      (i = r[3]) && e.push(new Z(i, u, l, d, s)), (i = r[2]) && e.push(new Z(i, a, l, u, s)), (i = r[1]) && e.push(new Z(i, u, f, d, l)), (i = r[0]) && e.push(new Z(i, a, f, u, l));
    }
  return this;
}
function qa(n) {
  var e = [], t = [], r;
  for (this._root && e.push(new Z(this._root, this._x0, this._y0, this._x1, this._y1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var a, f = r.x0, d = r.y0, s = r.x1, u = r.y1, l = (f + s) / 2, g = (d + u) / 2;
      (a = i[0]) && e.push(new Z(a, f, d, l, g)), (a = i[1]) && e.push(new Z(a, l, d, s, g)), (a = i[2]) && e.push(new Z(a, f, g, l, u)), (a = i[3]) && e.push(new Z(a, l, g, s, u));
    }
    t.push(r);
  }
  for (; r = t.pop(); )
    n(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function Da(n) {
  return n[0];
}
function ja(n) {
  return arguments.length ? (this._x = n, this) : this._x;
}
function Ga(n) {
  return n[1];
}
function Ra(n) {
  return arguments.length ? (this._y = n, this) : this._y;
}
function Un(n, e, t) {
  var r = new Pt(e ?? Da, t ?? Ga, NaN, NaN, NaN, NaN);
  return n == null ? r : r.addAll(n);
}
function Pt(n, e, t, r, i, a) {
  this._x = n, this._y = e, this._x0 = t, this._y0 = r, this._x1 = i, this._y1 = a, this._root = void 0;
}
function vn(n) {
  for (var e = { data: n.data }, t = e; n = n.next; )
    t = t.next = { data: n.data };
  return e;
}
var ee = Un.prototype = Pt.prototype;
ee.copy = function() {
  var n = new Pt(this._x, this._y, this._x0, this._y0, this._x1, this._y1), e = this._root, t, r;
  if (!e)
    return n;
  if (!e.length)
    return n._root = vn(e), n;
  for (t = [{ source: e, target: n._root = new Array(4) }]; e = t.pop(); )
    for (var i = 0; i < 4; ++i)
      (r = e.source[i]) && (r.length ? t.push({ source: r, target: e.target[i] = new Array(4) }) : e.target[i] = vn(r));
  return n;
};
ee.add = Ta;
ee.addAll = Ba;
ee.cover = Pa;
ee.data = Aa;
ee.extent = Sa;
ee.find = za;
ee.remove = Ia;
ee.removeAll = Oa;
ee.root = La;
ee.size = ka;
ee.visit = Fa;
ee.visitAfter = qa;
ee.x = ja;
ee.y = Ra;
function Ua(n) {
  const e = +this._x.call(null, n), t = +this._y.call(null, n), r = +this._z.call(null, n);
  return Hn(this.cover(e, t, r), e, t, r, n);
}
function Hn(n, e, t, r, i) {
  if (isNaN(e) || isNaN(t) || isNaN(r))
    return n;
  var a, f = n._root, d = { data: i }, s = n._x0, u = n._y0, l = n._z0, g = n._x1, w = n._y1, y = n._z1, v, _, b, c, M, C, N, m, $, S, O;
  if (!f)
    return n._root = d, n;
  for (; f.length; )
    if ((N = e >= (v = (s + g) / 2)) ? s = v : g = v, (m = t >= (_ = (u + w) / 2)) ? u = _ : w = _, ($ = r >= (b = (l + y) / 2)) ? l = b : y = b, a = f, !(f = f[S = $ << 2 | m << 1 | N]))
      return a[S] = d, n;
  if (c = +n._x.call(null, f.data), M = +n._y.call(null, f.data), C = +n._z.call(null, f.data), e === c && t === M && r === C)
    return d.next = f, a ? a[S] = d : n._root = d, n;
  do
    a = a ? a[S] = new Array(8) : n._root = new Array(8), (N = e >= (v = (s + g) / 2)) ? s = v : g = v, (m = t >= (_ = (u + w) / 2)) ? u = _ : w = _, ($ = r >= (b = (l + y) / 2)) ? l = b : y = b;
  while ((S = $ << 2 | m << 1 | N) === (O = (C >= b) << 2 | (M >= _) << 1 | c >= v));
  return a[O] = f, a[S] = d, n;
}
function Ha(n) {
  Array.isArray(n) || (n = Array.from(n));
  const e = n.length, t = new Float64Array(e), r = new Float64Array(e), i = new Float64Array(e);
  let a = 1 / 0, f = 1 / 0, d = 1 / 0, s = -1 / 0, u = -1 / 0, l = -1 / 0;
  for (let g = 0, w, y, v, _; g < e; ++g)
    isNaN(y = +this._x.call(null, w = n[g])) || isNaN(v = +this._y.call(null, w)) || isNaN(_ = +this._z.call(null, w)) || (t[g] = y, r[g] = v, i[g] = _, y < a && (a = y), y > s && (s = y), v < f && (f = v), v > u && (u = v), _ < d && (d = _), _ > l && (l = _));
  if (a > s || f > u || d > l)
    return this;
  this.cover(a, f, d).cover(s, u, l);
  for (let g = 0; g < e; ++g)
    Hn(this, t[g], r[g], i[g], n[g]);
  return this;
}
function Qa(n, e, t) {
  if (isNaN(n = +n) || isNaN(e = +e) || isNaN(t = +t))
    return this;
  var r = this._x0, i = this._y0, a = this._z0, f = this._x1, d = this._y1, s = this._z1;
  if (isNaN(r))
    f = (r = Math.floor(n)) + 1, d = (i = Math.floor(e)) + 1, s = (a = Math.floor(t)) + 1;
  else {
    for (var u = f - r || 1, l = this._root, g, w; r > n || n >= f || i > e || e >= d || a > t || t >= s; )
      switch (w = (t < a) << 2 | (e < i) << 1 | n < r, g = new Array(8), g[w] = l, l = g, u *= 2, w) {
        case 0:
          f = r + u, d = i + u, s = a + u;
          break;
        case 1:
          r = f - u, d = i + u, s = a + u;
          break;
        case 2:
          f = r + u, i = d - u, s = a + u;
          break;
        case 3:
          r = f - u, i = d - u, s = a + u;
          break;
        case 4:
          f = r + u, d = i + u, a = s - u;
          break;
        case 5:
          r = f - u, d = i + u, a = s - u;
          break;
        case 6:
          f = r + u, i = d - u, a = s - u;
          break;
        case 7:
          r = f - u, i = d - u, a = s - u;
          break;
      }
    this._root && this._root.length && (this._root = l);
  }
  return this._x0 = r, this._y0 = i, this._z0 = a, this._x1 = f, this._y1 = d, this._z1 = s, this;
}
function Va() {
  var n = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        n.push(e.data);
      while (e = e.next);
  }), n;
}
function Wa(n) {
  return arguments.length ? this.cover(+n[0][0], +n[0][1], +n[0][2]).cover(+n[1][0], +n[1][1], +n[1][2]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0, this._z0], [this._x1, this._y1, this._z1]];
}
function R(n, e, t, r, i, a, f) {
  this.node = n, this.x0 = e, this.y0 = t, this.z0 = r, this.x1 = i, this.y1 = a, this.z1 = f;
}
function Xa(n, e, t, r) {
  var i, a = this._x0, f = this._y0, d = this._z0, s, u, l, g, w, y, v = this._x1, _ = this._y1, b = this._z1, c = [], M = this._root, C, N;
  for (M && c.push(new R(M, a, f, d, v, _, b)), r == null ? r = 1 / 0 : (a = n - r, f = e - r, d = t - r, v = n + r, _ = e + r, b = t + r, r *= r); C = c.pop(); )
    if (!(!(M = C.node) || (s = C.x0) > v || (u = C.y0) > _ || (l = C.z0) > b || (g = C.x1) < a || (w = C.y1) < f || (y = C.z1) < d))
      if (M.length) {
        var m = (s + g) / 2, $ = (u + w) / 2, S = (l + y) / 2;
        c.push(
          new R(M[7], m, $, S, g, w, y),
          new R(M[6], s, $, S, m, w, y),
          new R(M[5], m, u, S, g, $, y),
          new R(M[4], s, u, S, m, $, y),
          new R(M[3], m, $, l, g, w, S),
          new R(M[2], s, $, l, m, w, S),
          new R(M[1], m, u, l, g, $, S),
          new R(M[0], s, u, l, m, $, S)
        ), (N = (t >= S) << 2 | (e >= $) << 1 | n >= m) && (C = c[c.length - 1], c[c.length - 1] = c[c.length - 1 - N], c[c.length - 1 - N] = C);
      } else {
        var O = n - +this._x.call(null, M.data), G = e - +this._y.call(null, M.data), U = t - +this._z.call(null, M.data), H = O * O + G * G + U * U;
        if (H < r) {
          var j = Math.sqrt(r = H);
          a = n - j, f = e - j, d = t - j, v = n + j, _ = e + j, b = t + j, i = M.data;
        }
      }
  return i;
}
function Ka(n) {
  if (isNaN(w = +this._x.call(null, n)) || isNaN(y = +this._y.call(null, n)) || isNaN(v = +this._z.call(null, n)))
    return this;
  var e, t = this._root, r, i, a, f = this._x0, d = this._y0, s = this._z0, u = this._x1, l = this._y1, g = this._z1, w, y, v, _, b, c, M, C, N, m, $;
  if (!t)
    return this;
  if (t.length)
    for (; ; ) {
      if ((M = w >= (_ = (f + u) / 2)) ? f = _ : u = _, (C = y >= (b = (d + l) / 2)) ? d = b : l = b, (N = v >= (c = (s + g) / 2)) ? s = c : g = c, e = t, !(t = t[m = N << 2 | C << 1 | M]))
        return this;
      if (!t.length)
        break;
      (e[m + 1 & 7] || e[m + 2 & 7] || e[m + 3 & 7] || e[m + 4 & 7] || e[m + 5 & 7] || e[m + 6 & 7] || e[m + 7 & 7]) && (r = e, $ = m);
    }
  for (; t.data !== n; )
    if (i = t, !(t = t.next))
      return this;
  return (a = t.next) && delete t.next, i ? (a ? i.next = a : delete i.next, this) : e ? (a ? e[m] = a : delete e[m], (t = e[0] || e[1] || e[2] || e[3] || e[4] || e[5] || e[6] || e[7]) && t === (e[7] || e[6] || e[5] || e[4] || e[3] || e[2] || e[1] || e[0]) && !t.length && (r ? r[$] = t : this._root = t), this) : (this._root = a, this);
}
function Ya(n) {
  for (var e = 0, t = n.length; e < t; ++e)
    this.remove(n[e]);
  return this;
}
function Ja() {
  return this._root;
}
function Za() {
  var n = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++n;
      while (e = e.next);
  }), n;
}
function eo(n) {
  var e = [], t, r = this._root, i, a, f, d, s, u, l;
  for (r && e.push(new R(r, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); t = e.pop(); )
    if (!n(r = t.node, a = t.x0, f = t.y0, d = t.z0, s = t.x1, u = t.y1, l = t.z1) && r.length) {
      var g = (a + s) / 2, w = (f + u) / 2, y = (d + l) / 2;
      (i = r[7]) && e.push(new R(i, g, w, y, s, u, l)), (i = r[6]) && e.push(new R(i, a, w, y, g, u, l)), (i = r[5]) && e.push(new R(i, g, f, y, s, w, l)), (i = r[4]) && e.push(new R(i, a, f, y, g, w, l)), (i = r[3]) && e.push(new R(i, g, w, d, s, u, y)), (i = r[2]) && e.push(new R(i, a, w, d, g, u, y)), (i = r[1]) && e.push(new R(i, g, f, d, s, w, y)), (i = r[0]) && e.push(new R(i, a, f, d, g, w, y));
    }
  return this;
}
function to(n) {
  var e = [], t = [], r;
  for (this._root && e.push(new R(this._root, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var a, f = r.x0, d = r.y0, s = r.z0, u = r.x1, l = r.y1, g = r.z1, w = (f + u) / 2, y = (d + l) / 2, v = (s + g) / 2;
      (a = i[0]) && e.push(new R(a, f, d, s, w, y, v)), (a = i[1]) && e.push(new R(a, w, d, s, u, y, v)), (a = i[2]) && e.push(new R(a, f, y, s, w, l, v)), (a = i[3]) && e.push(new R(a, w, y, s, u, l, v)), (a = i[4]) && e.push(new R(a, f, d, v, w, y, g)), (a = i[5]) && e.push(new R(a, w, d, v, u, y, g)), (a = i[6]) && e.push(new R(a, f, y, v, w, l, g)), (a = i[7]) && e.push(new R(a, w, y, v, u, l, g));
    }
    t.push(r);
  }
  for (; r = t.pop(); )
    n(r.node, r.x0, r.y0, r.z0, r.x1, r.y1, r.z1);
  return this;
}
function no(n) {
  return n[0];
}
function ro(n) {
  return arguments.length ? (this._x = n, this) : this._x;
}
function io(n) {
  return n[1];
}
function ao(n) {
  return arguments.length ? (this._y = n, this) : this._y;
}
function oo(n) {
  return n[2];
}
function so(n) {
  return arguments.length ? (this._z = n, this) : this._z;
}
function Qn(n, e, t, r) {
  var i = new At(e ?? no, t ?? io, r ?? oo, NaN, NaN, NaN, NaN, NaN, NaN);
  return n == null ? i : i.addAll(n);
}
function At(n, e, t, r, i, a, f, d, s) {
  this._x = n, this._y = e, this._z = t, this._x0 = r, this._y0 = i, this._z0 = a, this._x1 = f, this._y1 = d, this._z1 = s, this._root = void 0;
}
function yn(n) {
  for (var e = { data: n.data }, t = e; n = n.next; )
    t = t.next = { data: n.data };
  return e;
}
var J = Qn.prototype = At.prototype;
J.copy = function() {
  var n = new At(this._x, this._y, this._z, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1), e = this._root, t, r;
  if (!e)
    return n;
  if (!e.length)
    return n._root = yn(e), n;
  for (t = [{ source: e, target: n._root = new Array(8) }]; e = t.pop(); )
    for (var i = 0; i < 8; ++i)
      (r = e.source[i]) && (r.length ? t.push({ source: r, target: e.target[i] = new Array(8) }) : e.target[i] = yn(r));
  return n;
};
J.add = Ua;
J.addAll = Ha;
J.cover = Qa;
J.data = Va;
J.extent = Wa;
J.find = Xa;
J.remove = Ka;
J.removeAll = Ya;
J.root = Ja;
J.size = Za;
J.visit = eo;
J.visitAfter = to;
J.x = ro;
J.y = ao;
J.z = so;
function ze(n) {
  return function() {
    return n;
  };
}
function ce(n) {
  return (n() - 0.5) * 1e-6;
}
function fo(n) {
  return n.index;
}
function bn(n, e) {
  var t = n.get(e);
  if (!t)
    throw new Error("node not found: " + e);
  return t;
}
function uo(n) {
  var e = fo, t = w, r, i = ze(30), a, f, d, s, u, l, g = 1;
  n == null && (n = []);
  function w(c) {
    return 1 / Math.min(s[c.source.index], s[c.target.index]);
  }
  function y(c) {
    for (var M = 0, C = n.length; M < g; ++M)
      for (var N = 0, m, $, S, O = 0, G = 0, U = 0, H, j; N < C; ++N)
        m = n[N], $ = m.source, S = m.target, O = S.x + S.vx - $.x - $.vx || ce(l), d > 1 && (G = S.y + S.vy - $.y - $.vy || ce(l)), d > 2 && (U = S.z + S.vz - $.z - $.vz || ce(l)), H = Math.sqrt(O * O + G * G + U * U), H = (H - a[N]) / H * c * r[N], O *= H, G *= H, U *= H, S.vx -= O * (j = u[N]), d > 1 && (S.vy -= G * j), d > 2 && (S.vz -= U * j), $.vx += O * (j = 1 - j), d > 1 && ($.vy += G * j), d > 2 && ($.vz += U * j);
  }
  function v() {
    if (f) {
      var c, M = f.length, C = n.length, N = new Map(f.map(($, S) => [e($, S, f), $])), m;
      for (c = 0, s = new Array(M); c < C; ++c)
        m = n[c], m.index = c, typeof m.source != "object" && (m.source = bn(N, m.source)), typeof m.target != "object" && (m.target = bn(N, m.target)), s[m.source.index] = (s[m.source.index] || 0) + 1, s[m.target.index] = (s[m.target.index] || 0) + 1;
      for (c = 0, u = new Array(C); c < C; ++c)
        m = n[c], u[c] = s[m.source.index] / (s[m.source.index] + s[m.target.index]);
      r = new Array(C), _(), a = new Array(C), b();
    }
  }
  function _() {
    if (f)
      for (var c = 0, M = n.length; c < M; ++c)
        r[c] = +t(n[c], c, n);
  }
  function b() {
    if (f)
      for (var c = 0, M = n.length; c < M; ++c)
        a[c] = +i(n[c], c, n);
  }
  return y.initialize = function(c, ...M) {
    f = c, l = M.find((C) => typeof C == "function") || Math.random, d = M.find((C) => [1, 2, 3].includes(C)) || 2, v();
  }, y.links = function(c) {
    return arguments.length ? (n = c, v(), y) : n;
  }, y.id = function(c) {
    return arguments.length ? (e = c, y) : e;
  }, y.iterations = function(c) {
    return arguments.length ? (g = +c, y) : g;
  }, y.strength = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : ze(+c), _(), y) : t;
  }, y.distance = function(c) {
    return arguments.length ? (i = typeof c == "function" ? c : ze(+c), b(), y) : i;
  }, y;
}
var ho = { value: () => {
} };
function Vn() {
  for (var n = 0, e = arguments.length, t = {}, r; n < e; ++n) {
    if (!(r = arguments[n] + "") || r in t || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    t[r] = [];
  }
  return new We(t);
}
function We(n) {
  this._ = n;
}
function co(n, e) {
  return n.trim().split(/^|\s+/).map(function(t) {
    var r = "", i = t.indexOf(".");
    if (i >= 0 && (r = t.slice(i + 1), t = t.slice(0, i)), t && !e.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name: r };
  });
}
We.prototype = Vn.prototype = {
  constructor: We,
  on: function(n, e) {
    var t = this._, r = co(n + "", t), i, a = -1, f = r.length;
    if (arguments.length < 2) {
      for (; ++a < f; )
        if ((i = (n = r[a]).type) && (i = lo(t[i], n.name)))
          return i;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++a < f; )
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
    return new We(n);
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
function lo(n, e) {
  for (var t = 0, r = n.length, i; t < r; ++t)
    if ((i = n[t]).name === e)
      return i.value;
}
function wn(n, e, t) {
  for (var r = 0, i = n.length; r < i; ++r)
    if (n[r].name === e) {
      n[r] = ho, n = n.slice(0, r).concat(n.slice(r + 1));
      break;
    }
  return t != null && n.push({ name: e, value: t }), n;
}
var Me = 0, Ae = 0, Pe = 0, Wn = 1e3, Ke, Se, Ye = 0, be = 0, Ze = 0, Ie = typeof performance == "object" && performance.now ? performance : Date, Xn = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(n) {
  setTimeout(n, 17);
};
function Kn() {
  return be || (Xn(po), be = Ie.now() + Ze);
}
function po() {
  be = 0;
}
function bt() {
  this._call = this._time = this._next = null;
}
bt.prototype = Yn.prototype = {
  constructor: bt,
  restart: function(n, e, t) {
    if (typeof n != "function")
      throw new TypeError("callback is not a function");
    t = (t == null ? Kn() : +t) + (e == null ? 0 : +e), !this._next && Se !== this && (Se ? Se._next = this : Ke = this, Se = this), this._call = n, this._time = t, wt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, wt());
  }
};
function Yn(n, e, t) {
  var r = new bt();
  return r.restart(n, e, t), r;
}
function go() {
  Kn(), ++Me;
  for (var n = Ke, e; n; )
    (e = be - n._time) >= 0 && n._call.call(void 0, e), n = n._next;
  --Me;
}
function _n() {
  be = (Ye = Ie.now()) + Ze, Me = Ae = 0;
  try {
    go();
  } finally {
    Me = 0, yo(), be = 0;
  }
}
function vo() {
  var n = Ie.now(), e = n - Ye;
  e > Wn && (Ze -= e, Ye = n);
}
function yo() {
  for (var n, e = Ke, t, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), n = e, e = e._next) : (t = e._next, e._next = null, e = n ? n._next = t : Ke = t);
  Se = n, wt(r);
}
function wt(n) {
  if (!Me) {
    Ae && (Ae = clearTimeout(Ae));
    var e = n - be;
    e > 24 ? (n < 1 / 0 && (Ae = setTimeout(_n, n - Ie.now() - Ze)), Pe && (Pe = clearInterval(Pe))) : (Pe || (Ye = Ie.now(), Pe = setInterval(vo, Wn)), Me = 1, Xn(_n));
  }
}
const bo = 1664525, wo = 1013904223, xn = 4294967296;
function _o() {
  let n = 1;
  return () => (n = (bo * n + wo) % xn) / xn;
}
var mn = 3;
function vt(n) {
  return n.x;
}
function Mn(n) {
  return n.y;
}
function xo(n) {
  return n.z;
}
var mo = 10, Mo = Math.PI * (3 - Math.sqrt(5)), No = Math.PI * 20 / (9 + Math.sqrt(221));
function Eo(n, e) {
  e = e || 2;
  var t = Math.min(mn, Math.max(1, Math.round(e))), r, i = 1, a = 1e-3, f = 1 - Math.pow(a, 1 / 300), d = 0, s = 0.6, u = /* @__PURE__ */ new Map(), l = Yn(y), g = Vn("tick", "end"), w = _o();
  n == null && (n = []);
  function y() {
    v(), g.call("tick", r), i < a && (l.stop(), g.call("end", r));
  }
  function v(c) {
    var M, C = n.length, N;
    c === void 0 && (c = 1);
    for (var m = 0; m < c; ++m)
      for (i += (d - i) * f, u.forEach(function($) {
        $(i);
      }), M = 0; M < C; ++M)
        N = n[M], N.fx == null ? N.x += N.vx *= s : (N.x = N.fx, N.vx = 0), t > 1 && (N.fy == null ? N.y += N.vy *= s : (N.y = N.fy, N.vy = 0)), t > 2 && (N.fz == null ? N.z += N.vz *= s : (N.z = N.fz, N.vz = 0));
    return r;
  }
  function _() {
    for (var c = 0, M = n.length, C; c < M; ++c) {
      if (C = n[c], C.index = c, C.fx != null && (C.x = C.fx), C.fy != null && (C.y = C.fy), C.fz != null && (C.z = C.fz), isNaN(C.x) || t > 1 && isNaN(C.y) || t > 2 && isNaN(C.z)) {
        var N = mo * (t > 2 ? Math.cbrt(0.5 + c) : t > 1 ? Math.sqrt(0.5 + c) : c), m = c * Mo, $ = c * No;
        t === 1 ? C.x = N : t === 2 ? (C.x = N * Math.cos(m), C.y = N * Math.sin(m)) : (C.x = N * Math.sin(m) * Math.cos($), C.y = N * Math.cos(m), C.z = N * Math.sin(m) * Math.sin($));
      }
      (isNaN(C.vx) || t > 1 && isNaN(C.vy) || t > 2 && isNaN(C.vz)) && (C.vx = 0, t > 1 && (C.vy = 0), t > 2 && (C.vz = 0));
    }
  }
  function b(c) {
    return c.initialize && c.initialize(n, w, t), c;
  }
  return _(), r = {
    tick: v,
    restart: function() {
      return l.restart(y), r;
    },
    stop: function() {
      return l.stop(), r;
    },
    numDimensions: function(c) {
      return arguments.length ? (t = Math.min(mn, Math.max(1, Math.round(c))), u.forEach(b), r) : t;
    },
    nodes: function(c) {
      return arguments.length ? (n = c, _(), u.forEach(b), r) : n;
    },
    alpha: function(c) {
      return arguments.length ? (i = +c, r) : i;
    },
    alphaMin: function(c) {
      return arguments.length ? (a = +c, r) : a;
    },
    alphaDecay: function(c) {
      return arguments.length ? (f = +c, r) : +f;
    },
    alphaTarget: function(c) {
      return arguments.length ? (d = +c, r) : d;
    },
    velocityDecay: function(c) {
      return arguments.length ? (s = 1 - c, r) : 1 - s;
    },
    randomSource: function(c) {
      return arguments.length ? (w = c, u.forEach(b), r) : w;
    },
    force: function(c, M) {
      return arguments.length > 1 ? (M == null ? u.delete(c) : u.set(c, b(M)), r) : u.get(c);
    },
    find: function() {
      var c = Array.prototype.slice.call(arguments), M = c.shift() || 0, C = (t > 1 ? c.shift() : null) || 0, N = (t > 2 ? c.shift() : null) || 0, m = c.shift() || 1 / 0, $ = 0, S = n.length, O, G, U, H, j, se;
      for (m *= m, $ = 0; $ < S; ++$)
        j = n[$], O = M - j.x, G = C - (j.y || 0), U = N - (j.z || 0), H = O * O + G * G + U * U, H < m && (se = j, m = H);
      return se;
    },
    on: function(c, M) {
      return arguments.length > 1 ? (g.on(c, M), r) : g.on(c);
    }
  };
}
function Co() {
  var n, e, t, r, i, a = ze(-30), f, d = 1, s = 1 / 0, u = 0.81;
  function l(v) {
    var _, b = n.length, c = (e === 1 ? Gn(n, vt) : e === 2 ? Un(n, vt, Mn) : e === 3 ? Qn(n, vt, Mn, xo) : null).visitAfter(w);
    for (i = v, _ = 0; _ < b; ++_)
      t = n[_], c.visit(y);
  }
  function g() {
    if (n) {
      var v, _ = n.length, b;
      for (f = new Array(_), v = 0; v < _; ++v)
        b = n[v], f[b.index] = +a(b, v, n);
    }
  }
  function w(v) {
    var _ = 0, b, c, M = 0, C, N, m, $, S = v.length;
    if (S) {
      for (C = N = m = $ = 0; $ < S; ++$)
        (b = v[$]) && (c = Math.abs(b.value)) && (_ += b.value, M += c, C += c * (b.x || 0), N += c * (b.y || 0), m += c * (b.z || 0));
      _ *= Math.sqrt(4 / S), v.x = C / M, e > 1 && (v.y = N / M), e > 2 && (v.z = m / M);
    } else {
      b = v, b.x = b.data.x, e > 1 && (b.y = b.data.y), e > 2 && (b.z = b.data.z);
      do
        _ += f[b.data.index];
      while (b = b.next);
    }
    v.value = _;
  }
  function y(v, _, b, c, M) {
    if (!v.value)
      return !0;
    var C = [b, c, M][e - 1], N = v.x - t.x, m = e > 1 ? v.y - t.y : 0, $ = e > 2 ? v.z - t.z : 0, S = C - _, O = N * N + m * m + $ * $;
    if (S * S / u < O)
      return O < s && (N === 0 && (N = ce(r), O += N * N), e > 1 && m === 0 && (m = ce(r), O += m * m), e > 2 && $ === 0 && ($ = ce(r), O += $ * $), O < d && (O = Math.sqrt(d * O)), t.vx += N * v.value * i / O, e > 1 && (t.vy += m * v.value * i / O), e > 2 && (t.vz += $ * v.value * i / O)), !0;
    if (v.length || O >= s)
      return;
    (v.data !== t || v.next) && (N === 0 && (N = ce(r), O += N * N), e > 1 && m === 0 && (m = ce(r), O += m * m), e > 2 && $ === 0 && ($ = ce(r), O += $ * $), O < d && (O = Math.sqrt(d * O)));
    do
      v.data !== t && (S = f[v.data.index] * i / O, t.vx += N * S, e > 1 && (t.vy += m * S), e > 2 && (t.vz += $ * S));
    while (v = v.next);
  }
  return l.initialize = function(v, ..._) {
    n = v, r = _.find((b) => typeof b == "function") || Math.random, e = _.find((b) => [1, 2, 3].includes(b)) || 2, g();
  }, l.strength = function(v) {
    return arguments.length ? (a = typeof v == "function" ? v : ze(+v), g(), l) : a;
  }, l.distanceMin = function(v) {
    return arguments.length ? (d = v * v, l) : Math.sqrt(d);
  }, l.distanceMax = function(v) {
    return arguments.length ? (s = v * v, l) : Math.sqrt(s);
  }, l.theta = function(v) {
    return arguments.length ? (u = v * v, l) : Math.sqrt(u);
  }, l;
}
function _t(n) {
  return typeof n == "object" && typeof n.index == "number" && typeof n.x == "number" && typeof n.y == "number" && typeof n.z == "number" && typeof n.vx == "number" && typeof n.vy == "number" && typeof n.vz == "number";
}
function $o(n) {
  return !!(typeof n == "object" && typeof n.index == "number" && _t(n.source) && _t(n.target));
}
class To {
  constructor() {
    z(this, "d3ForceLayout");
    z(this, "d3AlphaMin", 0);
    z(this, "d3AlphaTarget", 0);
    z(this, "d3AlphaDecay", 0.0228);
    z(this, "d3VelocityDecay", 0.4);
    z(this, "nodeMapping", /* @__PURE__ */ new Map());
    z(this, "edgeMapping", /* @__PURE__ */ new Map());
    z(this, "newNodeMap", /* @__PURE__ */ new Map());
    z(this, "newEdgeMap", /* @__PURE__ */ new Map());
    z(this, "reheat", !1);
    this.d3ForceLayout = Eo().numDimensions(3).alpha(1).force("link", uo()).force("charge", Co()).force("center", la()).force("dagRadial", null).stop(), this.d3ForceLayout.force("link").id((e) => e.id);
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
        if (!_t(a))
          throw new Error("Internal error: Node is not settled as a complete D3 Node");
        this.nodeMapping.set(i, a);
      }
      this.newNodeMap.clear();
      let t = [...this.edgeMapping.values()];
      t = t.concat([...this.newEdgeMap.values()]), this.d3ForceLayout.force("link").links(t);
      for (let r of this.newEdgeMap.entries()) {
        let i = r[0], a = r[1];
        if (!$o(a))
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
var Je = { exports: {} };
Je.exports;
(function(n, e) {
  var t = 200, r = "__lodash_hash_undefined__", i = 800, a = 16, f = 9007199254740991, d = "[object Arguments]", s = "[object Array]", u = "[object AsyncFunction]", l = "[object Boolean]", g = "[object Date]", w = "[object Error]", y = "[object Function]", v = "[object GeneratorFunction]", _ = "[object Map]", b = "[object Number]", c = "[object Null]", M = "[object Object]", C = "[object Proxy]", N = "[object RegExp]", m = "[object Set]", $ = "[object String]", S = "[object Undefined]", O = "[object WeakMap]", G = "[object ArrayBuffer]", U = "[object DataView]", H = "[object Float32Array]", j = "[object Float64Array]", se = "[object Int8Array]", E = "[object Int16Array]", x = "[object Int32Array]", T = "[object Uint8Array]", Q = "[object Uint8ClampedArray]", re = "[object Uint16Array]", oe = "[object Uint32Array]", P = /[\\^$.*+?()[\]{}|]/g, A = /^\[object .+?Constructor\]$/, L = /^(?:0|[1-9]\d*)$/, I = {};
  I[H] = I[j] = I[se] = I[E] = I[x] = I[T] = I[Q] = I[re] = I[oe] = !0, I[d] = I[s] = I[G] = I[l] = I[U] = I[g] = I[w] = I[y] = I[_] = I[b] = I[M] = I[N] = I[m] = I[$] = I[O] = !1;
  var K = typeof Qe == "object" && Qe && Qe.Object === Object && Qe, X = typeof self == "object" && self && self.Object === Object && self, Y = K || X || Function("return this")(), Le = e && !e.nodeType && e, Ee = Le && !0 && n && !n.nodeType && n, St = Ee && Ee.exports === Le, et = St && K.process, zt = function() {
    try {
      var o = Ee && Ee.require && Ee.require("util").types;
      return o || et && et.binding && et.binding("util");
    } catch {
    }
  }(), It = zt && zt.isTypedArray;
  function Ot(o, h, p) {
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
  function Jn(o, h) {
    for (var p = -1, B = Array(o); ++p < o; )
      B[p] = h(p);
    return B;
  }
  function Zn(o) {
    return function(h) {
      return o(h);
    };
  }
  function er(o, h) {
    return o == null ? void 0 : o[h];
  }
  function tr(o, h) {
    return function(p) {
      return o(h(p));
    };
  }
  var nr = Array.prototype, rr = Function.prototype, ke = Object.prototype, tt = Y["__core-js_shared__"], Fe = rr.toString, fe = ke.hasOwnProperty, Lt = function() {
    var o = /[^.]+$/.exec(tt && tt.keys && tt.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), kt = ke.toString, ir = Fe.call(Object), ar = RegExp(
    "^" + Fe.call(fe).replace(P, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), qe = St ? Y.Buffer : void 0, Ft = Y.Symbol, qt = Y.Uint8Array, Dt = qe ? qe.allocUnsafe : void 0, jt = tr(Object.getPrototypeOf, Object), Gt = Object.create, or = ke.propertyIsEnumerable, sr = nr.splice, ve = Ft ? Ft.toStringTag : void 0, De = function() {
    try {
      var o = at(Object, "defineProperty");
      return o({}, "", {}), o;
    } catch {
    }
  }(), fr = qe ? qe.isBuffer : void 0, Rt = Math.max, ur = Date.now, Ut = at(Y, "Map"), Ce = at(Object, "create"), hr = /* @__PURE__ */ function() {
    function o() {
    }
    return function(h) {
      if (!he(h))
        return {};
      if (Gt)
        return Gt(h);
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
  function dr() {
    this.__data__ = Ce ? Ce(null) : {}, this.size = 0;
  }
  function cr(o) {
    var h = this.has(o) && delete this.__data__[o];
    return this.size -= h ? 1 : 0, h;
  }
  function lr(o) {
    var h = this.__data__;
    if (Ce) {
      var p = h[o];
      return p === r ? void 0 : p;
    }
    return fe.call(h, o) ? h[o] : void 0;
  }
  function pr(o) {
    var h = this.__data__;
    return Ce ? h[o] !== void 0 : fe.call(h, o);
  }
  function gr(o, h) {
    var p = this.__data__;
    return this.size += this.has(o) ? 0 : 1, p[o] = Ce && h === void 0 ? r : h, this;
  }
  ye.prototype.clear = dr, ye.prototype.delete = cr, ye.prototype.get = lr, ye.prototype.has = pr, ye.prototype.set = gr;
  function ue(o) {
    var h = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++h < p; ) {
      var B = o[h];
      this.set(B[0], B[1]);
    }
  }
  function vr() {
    this.__data__ = [], this.size = 0;
  }
  function yr(o) {
    var h = this.__data__, p = je(h, o);
    if (p < 0)
      return !1;
    var B = h.length - 1;
    return p == B ? h.pop() : sr.call(h, p, 1), --this.size, !0;
  }
  function br(o) {
    var h = this.__data__, p = je(h, o);
    return p < 0 ? void 0 : h[p][1];
  }
  function wr(o) {
    return je(this.__data__, o) > -1;
  }
  function _r(o, h) {
    var p = this.__data__, B = je(p, o);
    return B < 0 ? (++this.size, p.push([o, h])) : p[B][1] = h, this;
  }
  ue.prototype.clear = vr, ue.prototype.delete = yr, ue.prototype.get = br, ue.prototype.has = wr, ue.prototype.set = _r;
  function we(o) {
    var h = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++h < p; ) {
      var B = o[h];
      this.set(B[0], B[1]);
    }
  }
  function xr() {
    this.size = 0, this.__data__ = {
      hash: new ye(),
      map: new (Ut || ue)(),
      string: new ye()
    };
  }
  function mr(o) {
    var h = Re(this, o).delete(o);
    return this.size -= h ? 1 : 0, h;
  }
  function Mr(o) {
    return Re(this, o).get(o);
  }
  function Nr(o) {
    return Re(this, o).has(o);
  }
  function Er(o, h) {
    var p = Re(this, o), B = p.size;
    return p.set(o, h), this.size += p.size == B ? 0 : 1, this;
  }
  we.prototype.clear = xr, we.prototype.delete = mr, we.prototype.get = Mr, we.prototype.has = Nr, we.prototype.set = Er;
  function _e(o) {
    var h = this.__data__ = new ue(o);
    this.size = h.size;
  }
  function Cr() {
    this.__data__ = new ue(), this.size = 0;
  }
  function $r(o) {
    var h = this.__data__, p = h.delete(o);
    return this.size = h.size, p;
  }
  function Tr(o) {
    return this.__data__.get(o);
  }
  function Br(o) {
    return this.__data__.has(o);
  }
  function Pr(o, h) {
    var p = this.__data__;
    if (p instanceof ue) {
      var B = p.__data__;
      if (!Ut || B.length < t - 1)
        return B.push([o, h]), this.size = ++p.size, this;
      p = this.__data__ = new we(B);
    }
    return p.set(o, h), this.size = p.size, this;
  }
  _e.prototype.clear = Cr, _e.prototype.delete = $r, _e.prototype.get = Tr, _e.prototype.has = Br, _e.prototype.set = Pr;
  function Ar(o, h) {
    var p = ft(o), B = !p && st(o), k = !p && !B && Kt(o), q = !p && !B && !k && Jt(o), V = p || B || k || q, F = V ? Jn(o.length, String) : [], W = F.length;
    for (var ie in o)
      (h || fe.call(o, ie)) && !(V && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ie == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      k && (ie == "offset" || ie == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      q && (ie == "buffer" || ie == "byteLength" || ie == "byteOffset") || // Skip index properties.
      Wt(ie, W))) && F.push(ie);
    return F;
  }
  function nt(o, h, p) {
    (p !== void 0 && !Ue(o[h], p) || p === void 0 && !(h in o)) && rt(o, h, p);
  }
  function Sr(o, h, p) {
    var B = o[h];
    (!(fe.call(o, h) && Ue(B, p)) || p === void 0 && !(h in o)) && rt(o, h, p);
  }
  function je(o, h) {
    for (var p = o.length; p--; )
      if (Ue(o[p][0], h))
        return p;
    return -1;
  }
  function rt(o, h, p) {
    h == "__proto__" && De ? De(o, h, {
      configurable: !0,
      enumerable: !0,
      value: p,
      writable: !0
    }) : o[h] = p;
  }
  var zr = Hr();
  function Ge(o) {
    return o == null ? o === void 0 ? S : c : ve && ve in Object(o) ? Qr(o) : Jr(o);
  }
  function Ht(o) {
    return $e(o) && Ge(o) == d;
  }
  function Ir(o) {
    if (!he(o) || Kr(o))
      return !1;
    var h = ht(o) ? ar : A;
    return h.test(ni(o));
  }
  function Or(o) {
    return $e(o) && Yt(o.length) && !!I[Ge(o)];
  }
  function Lr(o) {
    if (!he(o))
      return Yr(o);
    var h = Xt(o), p = [];
    for (var B in o)
      B == "constructor" && (h || !fe.call(o, B)) || p.push(B);
    return p;
  }
  function it(o, h, p, B, k) {
    o !== h && zr(h, function(q, V) {
      if (k || (k = new _e()), he(q))
        kr(o, h, V, p, it, B, k);
      else {
        var F = B ? B(ot(o, V), q, V + "", o, h, k) : void 0;
        F === void 0 && (F = q), nt(o, V, F);
      }
    }, Zt);
  }
  function kr(o, h, p, B, k, q, V) {
    var F = ot(o, p), W = ot(h, p), ie = V.get(W);
    if (ie) {
      nt(o, p, ie);
      return;
    }
    var ne = q ? q(F, W, p + "", o, h, V) : void 0, Te = ne === void 0;
    if (Te) {
      var dt = ft(W), ct = !dt && Kt(W), tn = !dt && !ct && Jt(W);
      ne = W, dt || ct || tn ? ft(F) ? ne = F : ri(F) ? ne = Gr(F) : ct ? (Te = !1, ne = qr(W, !0)) : tn ? (Te = !1, ne = jr(W, !0)) : ne = [] : ii(W) || st(W) ? (ne = F, st(F) ? ne = ai(F) : (!he(F) || ht(F)) && (ne = Vr(W))) : Te = !1;
    }
    Te && (V.set(W, ne), k(ne, W, B, q, V), V.delete(W)), nt(o, p, ne);
  }
  function Qt(o, h) {
    return ei(Zr(o, h, en), o + "");
  }
  var Fr = De ? function(o, h) {
    return De(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: fi(h),
      writable: !0
    });
  } : en;
  function qr(o, h) {
    if (h)
      return o.slice();
    var p = o.length, B = Dt ? Dt(p) : new o.constructor(p);
    return o.copy(B), B;
  }
  function Dr(o) {
    var h = new o.constructor(o.byteLength);
    return new qt(h).set(new qt(o)), h;
  }
  function jr(o, h) {
    var p = h ? Dr(o.buffer) : o.buffer;
    return new o.constructor(p, o.byteOffset, o.length);
  }
  function Gr(o, h) {
    var p = -1, B = o.length;
    for (h || (h = Array(B)); ++p < B; )
      h[p] = o[p];
    return h;
  }
  function Rr(o, h, p, B) {
    var k = !p;
    p || (p = {});
    for (var q = -1, V = h.length; ++q < V; ) {
      var F = h[q], W = B ? B(p[F], o[F], F, p, o) : void 0;
      W === void 0 && (W = o[F]), k ? rt(p, F, W) : Sr(p, F, W);
    }
    return p;
  }
  function Ur(o) {
    return Qt(function(h, p) {
      var B = -1, k = p.length, q = k > 1 ? p[k - 1] : void 0, V = k > 2 ? p[2] : void 0;
      for (q = o.length > 3 && typeof q == "function" ? (k--, q) : void 0, V && Wr(p[0], p[1], V) && (q = k < 3 ? void 0 : q, k = 1), h = Object(h); ++B < k; ) {
        var F = p[B];
        F && o(h, F, B, q);
      }
      return h;
    });
  }
  function Hr(o) {
    return function(h, p, B) {
      for (var k = -1, q = Object(h), V = B(h), F = V.length; F--; ) {
        var W = V[o ? F : ++k];
        if (p(q[W], W, q) === !1)
          break;
      }
      return h;
    };
  }
  function Vt(o, h, p, B, k, q) {
    return he(o) && he(h) && (q.set(h, o), it(o, h, void 0, Vt, q), q.delete(h)), o;
  }
  function Re(o, h) {
    var p = o.__data__;
    return Xr(h) ? p[typeof h == "string" ? "string" : "hash"] : p.map;
  }
  function at(o, h) {
    var p = er(o, h);
    return Ir(p) ? p : void 0;
  }
  function Qr(o) {
    var h = fe.call(o, ve), p = o[ve];
    try {
      o[ve] = void 0;
      var B = !0;
    } catch {
    }
    var k = kt.call(o);
    return B && (h ? o[ve] = p : delete o[ve]), k;
  }
  function Vr(o) {
    return typeof o.constructor == "function" && !Xt(o) ? hr(jt(o)) : {};
  }
  function Wt(o, h) {
    var p = typeof o;
    return h = h ?? f, !!h && (p == "number" || p != "symbol" && L.test(o)) && o > -1 && o % 1 == 0 && o < h;
  }
  function Wr(o, h, p) {
    if (!he(p))
      return !1;
    var B = typeof h;
    return (B == "number" ? ut(p) && Wt(h, p.length) : B == "string" && h in p) ? Ue(p[h], o) : !1;
  }
  function Xr(o) {
    var h = typeof o;
    return h == "string" || h == "number" || h == "symbol" || h == "boolean" ? o !== "__proto__" : o === null;
  }
  function Kr(o) {
    return !!Lt && Lt in o;
  }
  function Xt(o) {
    var h = o && o.constructor, p = typeof h == "function" && h.prototype || ke;
    return o === p;
  }
  function Yr(o) {
    var h = [];
    if (o != null)
      for (var p in Object(o))
        h.push(p);
    return h;
  }
  function Jr(o) {
    return kt.call(o);
  }
  function Zr(o, h, p) {
    return h = Rt(h === void 0 ? o.length - 1 : h, 0), function() {
      for (var B = arguments, k = -1, q = Rt(B.length - h, 0), V = Array(q); ++k < q; )
        V[k] = B[h + k];
      k = -1;
      for (var F = Array(h + 1); ++k < h; )
        F[k] = B[k];
      return F[h] = p(V), Ot(o, this, F);
    };
  }
  function ot(o, h) {
    if (!(h === "constructor" && typeof o[h] == "function") && h != "__proto__")
      return o[h];
  }
  var ei = ti(Fr);
  function ti(o) {
    var h = 0, p = 0;
    return function() {
      var B = ur(), k = a - (B - p);
      if (p = B, k > 0) {
        if (++h >= i)
          return arguments[0];
      } else
        h = 0;
      return o.apply(void 0, arguments);
    };
  }
  function ni(o) {
    if (o != null) {
      try {
        return Fe.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function Ue(o, h) {
    return o === h || o !== o && h !== h;
  }
  var st = Ht(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Ht : function(o) {
    return $e(o) && fe.call(o, "callee") && !or.call(o, "callee");
  }, ft = Array.isArray;
  function ut(o) {
    return o != null && Yt(o.length) && !ht(o);
  }
  function ri(o) {
    return $e(o) && ut(o);
  }
  var Kt = fr || ui;
  function ht(o) {
    if (!he(o))
      return !1;
    var h = Ge(o);
    return h == y || h == v || h == u || h == C;
  }
  function Yt(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= f;
  }
  function he(o) {
    var h = typeof o;
    return o != null && (h == "object" || h == "function");
  }
  function $e(o) {
    return o != null && typeof o == "object";
  }
  function ii(o) {
    if (!$e(o) || Ge(o) != M)
      return !1;
    var h = jt(o);
    if (h === null)
      return !0;
    var p = fe.call(h, "constructor") && h.constructor;
    return typeof p == "function" && p instanceof p && Fe.call(p) == ir;
  }
  var Jt = It ? Zn(It) : Or;
  function ai(o) {
    return Rr(o, Zt(o));
  }
  var oi = Qt(function(o) {
    return o.push(void 0, Vt), Ot(si, void 0, o);
  });
  function Zt(o) {
    return ut(o) ? Ar(o, !0) : Lr(o);
  }
  var si = Ur(function(o, h, p, B) {
    it(o, h, p, B);
  });
  function fi(o) {
    return function() {
      return o;
    };
  }
  function en(o) {
    return o;
  }
  function ui() {
    return !1;
  }
  n.exports = oi;
})(Je, Je.exports);
var Bo = Je.exports;
const Po = /* @__PURE__ */ xt(Bo), Ao = {
  size: 1,
  opacity: 1,
  wireframe: !1,
  color: "lightgrey",
  shape: "icosphere",
  nodeMeshFactory: Xe.defaultNodeMeshFactory,
  label: !0
}, So = {
  type: "moving",
  color: "white",
  movingLineOpts: {
    baseColor: "lightgrey",
    width: 0.25
  },
  edgeMeshFactory: de.defaultEdgeMeshFactory
}, zo = {
  nodeMeshOpts: Ao,
  edgeMeshOpts: So,
  pinOnDrag: !0,
  graphEngineType: "ngraph"
};
function Io(n) {
  return Po({}, n, zo);
}
class Fo {
  constructor(e, t) {
    z(this, "config");
    // babylon
    z(this, "element");
    z(this, "canvas");
    z(this, "engine");
    z(this, "scene");
    z(this, "camera");
    z(this, "skybox");
    // graph engine
    z(this, "graphEngineType");
    z(this, "graphEngine");
    z(this, "running", !0);
    z(this, "pinOnDrag");
    // graph
    z(this, "fetchNodes");
    z(this, "fetchEdges");
    z(this, "minDelta", 0.2);
    // observeables
    z(this, "graphObservable", new lt());
    z(this, "nodeObservable", new lt());
    z(this, "edgeObservable", new lt());
    if (this.config = Io(t), this.fetchNodes = this.config.fetchNodes, this.fetchEdges = this.config.fetchEdges, typeof e == "string") {
      let r = document.getElementById(e);
      if (!r)
        throw new Error(`getElementById() could not find element '${e}'`);
      this.element = r;
    } else if (e instanceof HTMLElement)
      this.element = e;
    else
      throw new TypeError("Graph constructor requires 'element' argument that is either a string specifying the ID of the HTML element or an HTMLElement");
    if (this.element.innerHTML = "", this.canvas = document.createElement("canvas"), this.canvas.setAttribute("id", "babylonForceGraphRenderCanvas"), this.canvas.setAttribute("touch-action", "none"), this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.touchAction = "none", this.element.appendChild(this.canvas), this.engine = new yt(this.canvas, !0), this.scene = new bi(this.engine), this.camera = new wi("camera", -Math.PI / 2, Math.PI / 2.5, 15, new sn(0, 0, 0)), this.camera.attachControl(this.canvas, !0), new _i("light", new sn(1, 1, 0)), this.config.skybox && new xi(
      "testdome",
      this.config.skybox,
      {
        resolution: 32,
        size: 1e3
      },
      this.scene
    ), this.config.graphEngineType === "ngraph")
      this.graphEngine = new ca();
    else if (this.config.graphEngineType === "d3")
      this.graphEngine = new To();
    else
      throw new TypeError(`Unknown graph engine type: '${this.graphEngineType}'`);
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
    this.graphEngine.step();
    let e = 0;
    for (let t of this.graphEngine.nodes)
      e = Math.max(e, t.getDeltaPos()), t.update();
    for (let t of this.graphEngine.edges)
      t.update();
    e < this.minDelta && (this.graphObservable.notifyObservers({ type: "graph-settled", graph: this }), this.running = !1);
  }
  addNode(e, t = {}) {
    return this.nodeObservable.notifyObservers({ type: "node-add-before", nodeId: e, metadata: t }), Xe.create(this, e, {
      nodeMeshConfig: this.config.nodeMeshOpts,
      pinOnDrag: this.pinOnDrag,
      metadata: t
    });
  }
  addEdge(e, t, r = {}) {
    return this.edgeObservable.notifyObservers({ type: "edge-add-before", srcNodeId: e, dstNodeId: t, metadata: r }), de.create(this, e, t, {
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
    const r = t.nodeListProp ?? "nodes", i = t.edgeListProp ?? "links", a = t.nodeIdProp ?? "id", f = t.edgeSrcIdProp ?? "source", d = t.edgeDstIdProp ?? "target", u = await (await fetch(e, t.fetchOpts)).json();
    if (!Array.isArray(u[r]))
      throw TypeError(`when fetching JSON data: '${r}' was not an Array`);
    if (!Array.isArray(u[i]))
      throw TypeError(`when fetching JSON data: '${i}' was not an Array`);
    for (let l of u[r]) {
      let g = l[a], w = l;
      this.addNode(g, w);
    }
    for (let l of u[i]) {
      let g = l[f], w = l[d], y = l;
      this.addEdge(g, w, y);
    }
  }
}
export {
  de as Edge,
  Fo as Graph,
  Xe as Node,
  ko as util
};
