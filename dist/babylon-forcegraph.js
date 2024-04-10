var Tt = Object.defineProperty;
var Ft = (n, e, t) => e in n ? Tt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var C = (n, e, t) => (Ft(n, typeof e != "symbol" ? e + "" : e, t), t);
import { SixDofDragBehavior as Ot, ActionManager as Oe, ExecuteCodeAction as Dt, StandardMaterial as De, Color3 as re, MeshBuilder as H, DynamicTexture as Ge, CreateGreasedLine as me, RawTexture as je, Engine as Ee, GreasedLineMeshColorMode as Gt, Scene as jt, ArcRotateCamera as Rt, Vector3 as Re, HemisphericLight as Qt, PhotoDome as Vt } from "@babylonjs/core";
const st = /* @__PURE__ */ new Map([
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
function ie(n) {
  let e = st.get(n);
  return e || n;
}
const ti = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colorMap: st,
  colorNameToHex: ie
}, Symbol.toStringTag, { value: "Module" })), Qe = 1.618;
let ve = class L {
  constructor(e, t, r = {}) {
    C(this, "parentGraph");
    C(this, "id");
    C(this, "metadata");
    C(this, "mesh");
    C(this, "label");
    C(this, "meshDragBehavior");
    C(this, "dragging", !1);
    C(this, "nodeMeshOpts");
    C(this, "pinOnDrag");
    var a, s;
    this.parentGraph = e, this.id = t, this.metadata = r.metadata ?? {};
    let i = {};
    for (let u of Object.keys(be))
      i[u] = ((a = r == null ? void 0 : r.nodeMeshOpts) == null ? void 0 : a[u]) ?? be[u];
    if (this.nodeMeshOpts = i, this.parentGraph.graphEngine.addNode(this), this.mesh = this.nodeMeshOpts.nodeMeshFactory(this, this.parentGraph, this.nodeMeshOpts), this.mesh.metadata = { parentNode: this }, (s = r == null ? void 0 : r.nodeMeshOpts) != null && s.label && (this.label = L.createLabel(this.id.toString(), this, this.parentGraph), this.label.parent = this.mesh, this.label.position.y += 1), this.pinOnDrag = r.pinOnDrag ?? !0, this.meshDragBehavior = new Ot(), this.mesh.addBehavior(this.meshDragBehavior), this.meshDragBehavior.onDragStartObservable.add(() => {
      this.parentGraph.running = !0, this.dragging = !0;
    }), this.meshDragBehavior.onDragEndObservable.add(() => {
      this.parentGraph.running = !0, this.pinOnDrag && this.pin(), this.dragging = !1;
    }), this.meshDragBehavior.onPositionChangedObservable.add((u) => {
      this.parentGraph.running = !0, this.parentGraph.graphEngine.setNodePosition(this, u.position);
    }), this.mesh.actionManager = new Oe(this.parentGraph.scene), this.parentGraph.fetchNodes && this.parentGraph.fetchEdges) {
      const { fetchNodes: u, fetchEdges: o } = this.parentGraph;
      this.mesh.actionManager.registerAction(
        new Dt(
          {
            trigger: Oe.OnDoublePickTrigger
            // trigger: ActionManager.OnLongPressTrigger,
          },
          () => {
            this.parentGraph.running = !0;
            const h = o(this, this.parentGraph), f = /* @__PURE__ */ new Set();
            h.forEach((p) => {
              f.add(p.source), f.add(p.target);
            }), f.delete(this.id), u(f, this.parentGraph).forEach((p) => this.parentGraph.addNode(p.id, p.metadata)), h.forEach((p) => this.parentGraph.addEdge(p.source, p.target, p.metadata));
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
    let e = this.parentGraph.graphEngine.getNodePosition(this);
    this.mesh.position.x = e.x, this.mesh.position.y = e.y, e.z && (this.mesh.position.z = e.z);
  }
  pin() {
    this.parentGraph.graphEngine.pin(this);
  }
  unpin() {
    this.parentGraph.graphEngine.unpin(this);
  }
  static get list() {
    return Ht;
  }
  static create(e, t, r = {}) {
    const i = L.list.get(t);
    if (i)
      return i;
    const a = new L(e, t, r);
    return L.list.set(t, a), a;
  }
  static defaultNodeMeshFactory(e, t, r) {
    let i;
    switch (r.shape) {
      case "box":
        i = L.createBox(e, t, r);
        break;
      case "sphere":
        i = L.createSphere(e, t, r);
        break;
      case "cylinder":
        i = L.createCylinder(e, t, r);
        break;
      case "cone":
        i = L.createCone(e, t, r);
        break;
      case "capsule":
        i = L.createCapsule(e, t, r);
        break;
      case "torus":
        i = L.createTorus(e, t, r);
        break;
      case "torus-knot":
        i = L.createTorusKnot(e, t, r);
        break;
      case "tetrahedron":
        i = L.createPolyhedron(0, e, t, r);
        break;
      case "octahedron":
        i = L.createPolyhedron(1, e, t, r);
        break;
      case "dodecahedron":
        i = L.createPolyhedron(2, e, t, r);
        break;
      case "icosahedron":
        i = L.createPolyhedron(3, e, t, r);
        break;
      case "rhombicuboctahedron":
        i = L.createPolyhedron(4, e, t, r);
        break;
      case "triangular_prism":
        i = L.createPolyhedron(5, e, t, r);
        break;
      case "pentagonal_prism":
        i = L.createPolyhedron(6, e, t, r);
        break;
      case "hexagonal_prism":
        i = L.createPolyhedron(7, e, t, r);
        break;
      case "square_pyramid":
        i = L.createPolyhedron(8, e, t, r);
        break;
      case "pentagonal_pyramid":
        i = L.createPolyhedron(9, e, t, r);
        break;
      case "triangular_dipyramid":
        i = L.createPolyhedron(10, e, t, r);
        break;
      case "pentagonal_dipyramid":
        i = L.createPolyhedron(11, e, t, r);
        break;
      case "elongated_square_dypyramid":
        i = L.createPolyhedron(12, e, t, r);
        break;
      case "elongated_pentagonal_dipyramid":
        i = L.createPolyhedron(13, e, t, r);
        break;
      case "elongated_pentagonal_cupola":
        i = L.createPolyhedron(14, e, t, r);
        break;
      case "goldberg":
        i = L.createGoldberg(e, t, r);
        break;
      case "icosphere":
        i = L.createIcoSphere(e, t, r);
        break;
      case "geodesic":
        i = L.createGeodesic(e, t, r);
        break;
      default:
        throw new TypeError(`unknown shape: ${r.shape}`);
    }
    let a = new De("defaultMaterial"), s = r.color ?? be.color;
    return a.diffuseColor = re.FromHexString(ie(s)), i.material = a, a.wireframe = r.wireframe, i.visibility = r.opacity, i;
  }
  static createBox(e, t, r) {
    return H.CreateBox("box", { size: r.size });
  }
  static createSphere(e, t, r) {
    return H.CreateSphere("sphere", { diameter: r.size });
  }
  static createCylinder(e, t, r) {
    return H.CreateCylinder("cylinder", { height: r.size * Qe, diameter: r.size });
  }
  static createCone(e, t, r) {
    return H.CreateCylinder("cylinder", { height: r.size * Qe, diameterTop: 0, diameterBottom: r.size });
  }
  static createCapsule(e, t, r) {
    return H.CreateCapsule("capsule", {});
  }
  static createTorus(e, t, r) {
    return H.CreateTorus("torus", {});
  }
  static createTorusKnot(e, t, r) {
    return H.CreateTorusKnot("tk", { radius: r.size * 0.3, tube: r.size * 0.2, radialSegments: 128 });
  }
  static createPolyhedron(e, t, r, i) {
    return H.CreatePolyhedron("polyhedron", { size: i.size, type: e });
  }
  static createGoldberg(e, t, r) {
    return H.CreateGoldberg("goldberg", { size: r.size });
  }
  static createIcoSphere(e, t, r) {
    return H.CreateIcoSphere("icosphere", { radius: r.size });
  }
  static createGeodesic(e, t, r) {
    return H.CreateGeodesic("geodesic", { size: r.size });
  }
  static createLabel(e, t, r) {
    const a = "48px Verdana", o = 0.006944444444444444, f = new Ge("DynamicTexture", 64, r.scene).getContext();
    f.font = a;
    const c = f.measureText(e).width + 8, p = c * o, g = new Ge("DynamicTexture", { width: c, height: 72 }, r.scene, !1), l = new De("mat", r.scene);
    l.specularColor = re.Black(), g.hasAlpha = !0;
    const x = g.getContext();
    x.fillStyle = "white", x.beginPath();
    const v = 0, d = 0, m = [20, 20, 20, 20], M = c, b = 72;
    x.moveTo(v + m[0], d), x.lineTo(v + M - m[1], d), x.arc(v + M - m[1], d + m[1], m[1], 3 * Math.PI / 2, Math.PI * 2), x.lineTo(v + M, d + b - m[2]), x.arc(v + M - m[2], d + b - m[2], m[2], 0, Math.PI / 2), x.lineTo(v + m[3], d + b), x.arc(v + m[3], d + b - m[3], m[3], Math.PI / 2, Math.PI), x.lineTo(v, d + m[0]), x.arc(v + m[0], d + m[0], m[0], Math.PI, 3 * Math.PI / 2), x.closePath(), x.fill(), g.drawText(e, null, null, a, "#000000", "transparent", !0), l.opacityTexture = g, l.emissiveTexture = g, l.disableLighting = !0;
    const w = H.CreatePlane("plane", { width: p, height: 0.5 }, r.scene);
    return w.material = l, w.billboardMode = 7, w;
  }
};
const be = {
  size: 1,
  opacity: 1,
  wireframe: !1,
  color: "lightgrey",
  shape: "icosphere",
  nodeMeshFactory: ve.defaultNodeMeshFactory,
  label: !0
}, Ht = /* @__PURE__ */ new Map();
class Y {
  constructor(e, t, r, i = {}) {
    C(this, "parentGraph");
    C(this, "srcId");
    C(this, "dstId");
    C(this, "metadata");
    C(this, "mesh");
    C(this, "edgeMeshOpts");
    var s;
    if (this.parentGraph = e, this.srcId = t, this.dstId = r, this.metadata = i.metadata ?? {}, !ve.list.has(t))
      throw new Error(`Attempting to create edge '${t}->${r}', Node '${t}' hasn't been created yet.`);
    if (!ve.list.has(r))
      throw new Error(`Attempting to create edge '${t}->${r}', Node '${r}' hasn't been created yet.`);
    let a = {};
    for (let u of Object.keys(Ve))
      a[u] = ((s = i == null ? void 0 : i.edgeMeshOpts) == null ? void 0 : s[u]) ?? Ve[u];
    this.edgeMeshOpts = a, this.parentGraph.graphEngine.addEdge(this), this.mesh = this.edgeMeshOpts.edgeMeshFactory(this, this.parentGraph, this.edgeMeshOpts), this.mesh.metadata = {}, this.mesh.metadata.parentEdge = this;
  }
  update() {
    let e = this.parentGraph.graphEngine.getEdgePosition(this);
    this.mesh.setPoints([
      [
        e.src.x,
        e.src.y,
        e.src.z ?? 0,
        e.dst.x,
        e.dst.y,
        e.dst.z ?? 0
      ]
    ]);
  }
  static get list() {
    return Wt;
  }
  static create(e, t, r, i = {}) {
    const a = Y.list.get(t, r);
    if (a)
      return a;
    const s = new Y(e, t, r, i);
    return Y.list.set(t, r, s), s;
  }
  static defaultEdgeMeshFactory(e, t, r) {
    switch (r.type) {
      case "plain":
        return Y.createSimpleLine(e, t, r);
      case "arrow":
        return Y.createArrowLine(e, t, r);
      case "moving":
        return Y.createMovingLine(e, t, r);
      default:
        throw new TypeError(`Unknown Edge type: '${r.type}'`);
    }
  }
  static createSimpleLine(e, t, r) {
    return me(
      "edge",
      { points: [0, 0, 0, 1, 1, 1] },
      { color: re.FromHexString(ie(r.color)) }
    );
  }
  static createArrowLine(e, t, r) {
    return me(
      "edge",
      { points: [0, 0, 0, 1, 1, 1] },
      { color: re.FromHexString(ie(r.color)) }
    );
  }
  static createMovingLine(e, t, r) {
    const i = re.FromHexString(ie(r.movingLineOpts.baseColor)), a = re.FromHexString(ie(r.color)), s = Math.floor(i.r * 255), u = Math.floor(i.g * 255), o = Math.floor(i.b * 255), h = Math.floor(a.r * 255), f = Math.floor(a.g * 255), c = Math.floor(a.b * 255), p = new Uint8Array([s, u, o, h, f, c]), g = new je(
      p,
      // data
      p.length / 3,
      // width
      1,
      // height
      Ee.TEXTUREFORMAT_RGB,
      // format
      t.scene,
      // sceneOrEngine
      !1,
      // generateMipMaps
      !0,
      // invertY
      Ee.TEXTURE_NEAREST_NEAREST
      // samplingMode
      // samplingMode
      // type
      // creationFlags
      // useSRGBBuffer
    );
    g.wrapU = je.WRAP_ADDRESSMODE, g.name = "blue-white-texture";
    const l = me(
      "edge",
      { points: [0, 0, 0, 1, 1, 1] },
      {
        // color: Color3.FromHexString(colorNameToHex(edgeColor))
        width: r.movingLineOpts.width,
        colorMode: Gt.COLOR_MODE_MULTIPLY
      }
    );
    let x = l.material;
    return x.emissiveTexture = g, x.disableLighting = !0, g.uScale = 5, t.scene.onBeforeRenderObservable.add(() => {
      g.uOffset += 0.04 * t.scene.getAnimationRatio();
    }), l;
  }
}
const Ve = {
  type: "moving",
  color: "white",
  movingLineOpts: {
    baseColor: "lightgrey",
    width: 0.25
  },
  edgeMeshFactory: Y.defaultEdgeMeshFactory
};
class Ut {
  constructor() {
    C(this, "map", /* @__PURE__ */ new Map());
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
const Wt = new Ut();
function ht(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ce = function(e) {
  Yt(e);
  var t = Xt(e);
  return e.on = t.on, e.off = t.off, e.fire = t.fire, e;
};
function Xt(n) {
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
          for (var s = e[t], u = 0; u < s.length; ++u)
            s[u].callback === r && s.splice(u, 1);
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
        var s = r[a];
        s.callback.apply(s.ctx, i);
      }
      return n;
    }
  };
}
function Yt(n) {
  if (!n)
    throw new Error("Eventify cannot use falsy object as events subject");
  for (var e = ["on", "fire", "off"], t = 0; t < e.length; ++t)
    if (n.hasOwnProperty(e[t]))
      throw new Error("Subject cannot be eventified, since it already has property '" + e[t] + "'");
}
var Jt = Zt, Kt = Ce;
function Zt(n) {
  if (n = n || {}, "uniqueLinkId" in n && (console.warn(
    "ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",
    `
`,
    `Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`
  ), n.multigraph = n.uniqueLinkId), n.multigraph === void 0 && (n.multigraph = !1), typeof Map != "function")
    throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), r = {}, i = 0, a = n.multigraph ? b : M, s = [], u = E, o = E, h = E, f = E, c = {
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
    addLink: m,
    /**
     * Removes link from the graph. If link does not exist does nothing.
     *
     * @param link - object returned by addLink() or getLinks() methods.
     *
     * @returns true if link was removed; false otherwise.
     */
    removeLink: P,
    /**
     * Removes node with given id from the graph. If node does not exist in the graph
     * does nothing.
     *
     * @param nodeId node's identifier passed to addNode() function.
     *
     * @returns true if node was removed; false otherwise.
     */
    removeNode: d,
    /**
     * Gets node with given identifier. If node does not exist undefined value is returned.
     *
     * @param nodeId requested node identifier;
     *
     * @return {node} in with requested identifier or undefined if no such node exists.
     */
    getNode: v,
    /**
     * Gets number of nodes in this graph.
     *
     * @return number of nodes in the graph.
     */
    getNodeCount: w,
    /**
     * Gets total number of links in the graph.
     */
    getLinkCount: N,
    /**
     * Gets total number of links in the graph.
     */
    getEdgeCount: N,
    /**
     * Synonym for `getLinkCount()`
     */
    getLinksCount: N,
    /**
     * Synonym for `getNodeCount()`
     */
    getNodesCount: w,
    /**
     * Gets all links (inbound and outbound) from the node with given id.
     * If node with given id is not found null is returned.
     *
     * @param nodeId requested node identifier.
     *
     * @return Set of links from and to requested node if such node exists;
     *   otherwise null is returned.
     */
    getLinks: B,
    /**
     * Invokes callback on each node of the graph.
     *
     * @param {Function(node)} callback Function to be invoked. The function
     *   is passed one argument: visited node.
     */
    forEachNode: X,
    /**
     * Invokes callback on every linked (adjacent) node to the given one.
     *
     * @param nodeId Identifier of the requested node.
     * @param {Function(node, link)} callback Function to be called on all linked nodes.
     *   The function is passed two parameters: adjacent node and link object itself.
     * @param oriented if true graph treated as oriented.
     */
    forEachLinkedNode: Z,
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
    forEachLink: q,
    /**
     * Suspend all notifications about graph changes until
     * endUpdate is called.
     */
    beginUpdate: h,
    /**
     * Resumes all notifications about graph changes and fires
     * graph 'changed' event in case there are any pending changes.
     */
    endUpdate: f,
    /**
     * Removes all nodes and links from the graph.
     */
    clear: T,
    /**
     * Detects whether there is a link between two nodes.
     * Operation complexity is O(n) where n - number of links of a node.
     * NOTE: this function is synonym for getLink()
     *
     * @returns link if there is one. null otherwise.
     */
    hasLink: I,
    /**
     * Detects whether there is a node with given id
     * 
     * Operation complexity is O(1)
     * NOTE: this function is synonym for getNode()
     *
     * @returns node if there is one; Falsy value otherwise.
     */
    hasNode: v,
    /**
     * Gets an edge between two nodes.
     * Operation complexity is O(n) where n - number of links of a node.
     *
     * @param {string} fromId link start identifier
     * @param {string} toId link end identifier
     *
     * @returns link if there is one; undefined otherwise.
     */
    getLink: I
  };
  return Kt(c), p(), c;
  function p() {
    var $ = c.on;
    c.on = k;
    function k() {
      return c.beginUpdate = h = F, c.endUpdate = f = U, u = g, o = l, c.on = $, $.apply(c, arguments);
    }
  }
  function g($, k) {
    s.push({
      link: $,
      changeType: k
    });
  }
  function l($, k) {
    s.push({
      node: $,
      changeType: k
    });
  }
  function x($, k) {
    if ($ === void 0)
      throw new Error("Invalid node identifier");
    h();
    var z = v($);
    return z ? (z.data = k, o(z, "update")) : (z = new en($, k), o(z, "add")), e.set($, z), f(), z;
  }
  function v($) {
    return e.get($);
  }
  function d($) {
    var k = v($);
    if (!k)
      return !1;
    h();
    var z = k.links;
    return z && (z.forEach(A), k.links = null), e.delete($), o(k, "remove"), f(), !0;
  }
  function m($, k, z) {
    h();
    var O = v($) || x($), Q = v(k) || x(k), D = a($, k, z), W = t.has(D.id);
    return t.set(D.id, D), He(O, D), $ !== k && He(Q, D), u(D, W ? "update" : "add"), f(), D;
  }
  function M($, k, z) {
    var O = pe($, k), Q = t.get(O);
    return Q ? (Q.data = z, Q) : new Ue($, k, z, O);
  }
  function b($, k, z) {
    var O = pe($, k), Q = r.hasOwnProperty(O);
    if (Q || I($, k)) {
      Q || (r[O] = 0);
      var D = "@" + ++r[O];
      O = pe($ + D, k + D);
    }
    return new Ue($, k, z, O);
  }
  function w() {
    return e.size;
  }
  function N() {
    return t.size;
  }
  function B($) {
    var k = v($);
    return k ? k.links : null;
  }
  function P($, k) {
    return k !== void 0 && ($ = I($, k)), A($);
  }
  function A($) {
    if (!$ || !t.get($.id))
      return !1;
    h(), t.delete($.id);
    var k = v($.fromId), z = v($.toId);
    return k && k.links.delete($), z && z.links.delete($), u($, "remove"), f(), !0;
  }
  function I($, k) {
    if (!($ === void 0 || k === void 0))
      return t.get(pe($, k));
  }
  function T() {
    h(), X(function($) {
      d($.id);
    }), f();
  }
  function q($) {
    if (typeof $ == "function")
      for (var k = t.values(), z = k.next(); !z.done; ) {
        if ($(z.value))
          return !0;
        z = k.next();
      }
  }
  function Z($, k, z) {
    var O = v($);
    if (O && O.links && typeof k == "function")
      return z ? y(O.links, $, k) : _(O.links, $, k);
  }
  function _($, k, z) {
    for (var O, Q = $.values(), D = Q.next(); !D.done; ) {
      var W = D.value, It = W.fromId === k ? W.toId : W.fromId;
      if (O = z(e.get(It), W), O)
        return !0;
      D = Q.next();
    }
  }
  function y($, k, z) {
    for (var O, Q = $.values(), D = Q.next(); !D.done; ) {
      var W = D.value;
      if (W.fromId === k && (O = z(e.get(W.toId), W), O))
        return !0;
      D = Q.next();
    }
  }
  function E() {
  }
  function F() {
    i += 1;
  }
  function U() {
    i -= 1, i === 0 && s.length > 0 && (c.fire("changed", s), s.length = 0);
  }
  function X($) {
    if (typeof $ != "function")
      throw new Error("Function is expected to iterate over graph nodes. You passed " + $);
    for (var k = e.values(), z = k.next(); !z.done; ) {
      if ($(z.value))
        return !0;
      z = k.next();
    }
  }
}
function en(n, e) {
  this.id = n, this.links = null, this.data = e;
}
function He(n, e) {
  n.links ? n.links.add(e) : n.links = /* @__PURE__ */ new Set([e]);
}
function Ue(n, e, t, r) {
  this.fromId = n, this.toId = e, this.data = t, this.id = r;
}
function pe(n, e) {
  return n.toString() + "👉 " + e.toString();
}
const tn = /* @__PURE__ */ ht(Jt);
var Pe = { exports: {} }, le = { exports: {} }, ut = function(e) {
  return e === 0 ? "x" : e === 1 ? "y" : e === 2 ? "z" : "c" + (e + 1);
};
const nn = ut;
var oe = function(e) {
  return t;
  function t(r, i) {
    let a = i && i.indent || 0, s = i && i.join !== void 0 ? i.join : `
`, u = Array(a + 1).join(" "), o = [];
    for (let h = 0; h < e; ++h) {
      let f = nn(h), c = h === 0 ? "" : u;
      o.push(c + r.replace(/{var}/g, f));
    }
    return o.join(s);
  }
};
const ft = oe;
le.exports = rn;
le.exports.generateCreateBodyFunctionBody = dt;
le.exports.getVectorCode = lt;
le.exports.getBodyCode = ct;
function rn(n, e) {
  let t = dt(n, e), { Body: r } = new Function(t)();
  return r;
}
function dt(n, e) {
  return `
${lt(n, e)}
${ct(n)}
return {Body: Body, Vector: Vector};
`;
}
function ct(n) {
  let e = ft(n), t = e("{var}", { join: ", " });
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
function lt(n, e) {
  let t = ft(n), r = "";
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
var an = le.exports, te = { exports: {} };
const ze = oe, ee = ut;
te.exports = on;
te.exports.generateQuadTreeFunctionBody = pt;
te.exports.getInsertStackCode = xt;
te.exports.getQuadNodeCode = wt;
te.exports.isSamePosition = gt;
te.exports.getChildBodyCode = yt;
te.exports.setChildBodyCode = vt;
function on(n) {
  let e = pt(n);
  return new Function(e)();
}
function pt(n) {
  let e = ze(n), t = Math.pow(2, n);
  return `
${xt()}
${wt(n)}
${gt(n)}
${yt(n)}
${vt(n)}

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
${s("      node.")}
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
        if ((node.max_${ee(0)} - node.min_${ee(0)}) / r < theta) {
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
  function i(u) {
    let o = [], h = Array(u + 1).join(" ");
    for (let f = 0; f < n; ++f)
      o.push(h + `if (${ee(f)} > max_${ee(f)}) {`), o.push(h + `  quadIdx = quadIdx + ${Math.pow(2, f)};`), o.push(h + `  min_${ee(f)} = max_${ee(f)};`), o.push(h + `  max_${ee(f)} = node.max_${ee(f)};`), o.push(h + "}");
    return o.join(`
`);
  }
  function a() {
    let u = Array(11).join(" "), o = [];
    for (let h = 0; h < t; ++h)
      o.push(u + `if (node.quad${h}) {`), o.push(u + `  queue[pushIdx] = node.quad${h};`), o.push(u + "  queueLength += 1;"), o.push(u + "  pushIdx += 1;"), o.push(u + "}");
    return o.join(`
`);
  }
  function s(u) {
    let o = [];
    for (let h = 0; h < t; ++h)
      o.push(`${u}quad${h} = null;`);
    return o.join(`
`);
  }
}
function gt(n) {
  let e = ze(n);
  return `
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});", { indent: 2 })}
  
    return ${e("d{var} < 1e-8", { join: " && " })};
  }  
`;
}
function vt(n) {
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
function yt(n) {
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
function wt(n) {
  let e = ze(n), t = Math.pow(2, n);
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
    let s = [];
    for (let u = 0; u < t; ++u)
      s.push(`${a}quad${u} = null;`);
    return s.join(`
`);
  }
}
function xt() {
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
var sn = te.exports, Le = { exports: {} };
Le.exports = un;
Le.exports.generateFunctionBody = mt;
const hn = oe;
function un(n) {
  let e = mt(n);
  return new Function("bodies", "settings", "random", e);
}
function mt(n) {
  let e = hn(n);
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
var fn = Le.exports, Se = { exports: {} };
const dn = oe;
Se.exports = cn;
Se.exports.generateCreateDragForceFunctionBody = bt;
function cn(n) {
  let e = bt(n);
  return new Function("options", e);
}
function bt(n) {
  return `
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${dn(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};", { indent: 6 })}
    }
  };
`;
}
var ln = Se.exports, qe = { exports: {} };
const pn = oe;
qe.exports = gn;
qe.exports.generateCreateSpringForceFunctionBody = _t;
function gn(n) {
  let e = _t(n);
  return new Function("options", "random", e);
}
function _t(n) {
  let e = pn(n);
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
var vn = qe.exports, Ae = { exports: {} };
const yn = oe;
Ae.exports = wn;
Ae.exports.generateIntegratorFunctionBody = Mt;
function wn(n) {
  let e = Mt(n);
  return new Function("bodies", "timeStep", "adaptiveTimeStepWeight", e);
}
function Mt(n) {
  let e = yn(n);
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
var xn = Ae.exports, _e, We;
function mn() {
  if (We)
    return _e;
  We = 1, _e = n;
  function n(e, t, r, i) {
    this.from = e, this.to = t, this.length = r, this.coefficient = i;
  }
  return _e;
}
var Me, Xe;
function bn() {
  if (Xe)
    return Me;
  Xe = 1, Me = n;
  function n(e, t) {
    var r;
    if (e || (e = {}), t) {
      for (r in t)
        if (t.hasOwnProperty(r)) {
          var i = e.hasOwnProperty(r), a = typeof t[r], s = !i || typeof e[r] !== a;
          s ? e[r] = t[r] : a === "object" && (e[r] = n(e[r], t[r]));
        }
    }
    return e;
  }
  return Me;
}
var se = { exports: {} }, Ye;
function _n() {
  if (Ye)
    return se.exports;
  Ye = 1, se.exports = n, se.exports.random = n, se.exports.randomIterator = u;
  function n(o) {
    var h = typeof o == "number" ? o : +/* @__PURE__ */ new Date();
    return new e(h);
  }
  function e(o) {
    this.seed = o;
  }
  e.prototype.next = s, e.prototype.nextDouble = a, e.prototype.uniform = a, e.prototype.gaussian = t;
  function t() {
    var o, h, f;
    do
      h = this.nextDouble() * 2 - 1, f = this.nextDouble() * 2 - 1, o = h * h + f * f;
    while (o >= 1 || o === 0);
    return h * Math.sqrt(-2 * Math.log(o) / o);
  }
  e.prototype.levy = r;
  function r() {
    var o = 1.5, h = Math.pow(
      i(1 + o) * Math.sin(Math.PI * o / 2) / (i((1 + o) / 2) * o * Math.pow(2, (o - 1) / 2)),
      1 / o
    );
    return this.gaussian() * h / Math.pow(Math.abs(this.gaussian()), 1 / o);
  }
  function i(o) {
    return Math.sqrt(2 * Math.PI / o) * Math.pow(1 / Math.E * (o + 1 / (12 * o - 1 / (10 * o))), o);
  }
  function a() {
    var o = this.seed;
    return o = o + 2127912214 + (o << 12) & 4294967295, o = (o ^ 3345072700 ^ o >>> 19) & 4294967295, o = o + 374761393 + (o << 5) & 4294967295, o = (o + 3550635116 ^ o << 9) & 4294967295, o = o + 4251993797 + (o << 3) & 4294967295, o = (o ^ 3042594569 ^ o >>> 16) & 4294967295, this.seed = o, (o & 268435455) / 268435456;
  }
  function s(o) {
    return Math.floor(this.nextDouble() * o);
  }
  function u(o, h) {
    var f = h || n();
    if (typeof f.next != "function")
      throw new Error("customRandom does not match expected API: next() function is missing");
    return {
      forEach: p,
      /**
       * Shuffles array randomly, in place.
       */
      shuffle: c
    };
    function c() {
      var g, l, x;
      for (g = o.length - 1; g > 0; --g)
        l = f.next(g + 1), x = o[l], o[l] = o[g], o[g] = x;
      return o;
    }
    function p(g) {
      var l, x, v;
      for (l = o.length - 1; l > 0; --l)
        x = f.next(l + 1), v = o[x], o[x] = o[l], o[l] = v, g(v);
      o.length && g(o[0]);
    }
  }
  return se.exports;
}
var Nt = Cn, Mn = an, Nn = sn, En = fn, $n = ln, kn = vn, Bn = xn, Je = {};
function Cn(n) {
  var e = mn(), t = bn(), r = Ce;
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
  var i = Je[n.dimensions];
  if (!i) {
    var a = n.dimensions;
    i = {
      Body: Mn(a, n.debug),
      createQuadTree: Nn(a),
      createBounds: En(a),
      createDragForce: $n(a),
      createSpringForce: kn(a),
      integrate: Bn(a)
    }, Je[a] = i;
  }
  var s = i.Body, u = i.createQuadTree, o = i.createBounds, h = i.createDragForce, f = i.createSpringForce, c = i.integrate, p = (y) => new s(y), g = _n().random(42), l = [], x = [], v = u(n, g), d = o(l, n, g), m = f(n, g), M = h(n), b = 0, w = [], N = /* @__PURE__ */ new Map(), B = 0;
  I("nbody", Z), I("spring", _);
  var P = {
    /**
     * Array of bodies, registered with current simulator
     *
     * Note: To add new body, use addBody() method. This property is only
     * exposed for testing/performance purposes.
     */
    bodies: l,
    quadTree: v,
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
    addForce: I,
    /**
     * Removes a force from the simulation.
     */
    removeForce: T,
    /**
     * Returns a map of all registered forces.
     */
    getForces: q,
    /**
     * Performs one step of force simulation.
     *
     * @returns {boolean} true if system is considered stable; False otherwise.
     */
    step: function() {
      for (var y = 0; y < w.length; ++y)
        w[y](B);
      var E = c(l, n.timeStep, n.adaptiveTimeStepWeight);
      return B += 1, E;
    },
    /**
     * Adds body to the system
     *
     * @param {ngraph.physics.primitives.Body} body physical body
     *
     * @returns {ngraph.physics.primitives.Body} added body
     */
    addBody: function(y) {
      if (!y)
        throw new Error("Body is required");
      return l.push(y), y;
    },
    /**
     * Adds body to the system at given position
     *
     * @param {Object} pos position of a body
     *
     * @returns {ngraph.physics.primitives.Body} added body
     */
    addBodyAt: function(y) {
      if (!y)
        throw new Error("Body position is required");
      var E = p(y);
      return l.push(E), E;
    },
    /**
     * Removes body from the system
     *
     * @param {ngraph.physics.primitives.Body} body to remove
     *
     * @returns {Boolean} true if body found and removed. falsy otherwise;
     */
    removeBody: function(y) {
      if (y) {
        var E = l.indexOf(y);
        if (!(E < 0))
          return l.splice(E, 1), l.length === 0 && d.reset(), !0;
      }
    },
    /**
     * Adds a spring to this simulation.
     *
     * @returns {Object} - a handle for a spring. If you want to later remove
     * spring pass it to removeSpring() method.
     */
    addSpring: function(y, E, F, U) {
      if (!y || !E)
        throw new Error("Cannot add null spring to force simulator");
      typeof F != "number" && (F = -1);
      var X = new e(y, E, F, U >= 0 ? U : -1);
      return x.push(X), X;
    },
    /**
     * Returns amount of movement performed on last step() call
     */
    getTotalMovement: function() {
      return b;
    },
    /**
     * Removes spring from the system
     *
     * @param {Object} spring to remove. Spring is an object returned by addSpring
     *
     * @returns {Boolean} true if spring found and removed. falsy otherwise;
     */
    removeSpring: function(y) {
      if (y) {
        var E = x.indexOf(y);
        if (E > -1)
          return x.splice(E, 1), !0;
      }
    },
    getBestNewBodyPosition: function(y) {
      return d.getBestNewPosition(y);
    },
    /**
     * Returns bounding box which covers all bodies
     */
    getBBox: A,
    getBoundingBox: A,
    invalidateBBox: function() {
      console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call");
    },
    // TODO: Move the force specific stuff to force
    gravity: function(y) {
      return y !== void 0 ? (n.gravity = y, v.options({ gravity: y }), this) : n.gravity;
    },
    theta: function(y) {
      return y !== void 0 ? (n.theta = y, v.options({ theta: y }), this) : n.theta;
    },
    /**
     * Returns pseudo-random number generator instance.
     */
    random: g
  };
  return Pn(n, P), r(P), P;
  function A() {
    return d.update(), d.box;
  }
  function I(y, E) {
    if (N.has(y))
      throw new Error("Force " + y + " is already added");
    N.set(y, E), w.push(E);
  }
  function T(y) {
    var E = w.indexOf(N.get(y));
    E < 0 || (w.splice(E, 1), N.delete(y));
  }
  function q() {
    return N;
  }
  function Z() {
    if (l.length !== 0) {
      v.insertBodies(l);
      for (var y = l.length; y--; ) {
        var E = l[y];
        E.isPinned || (E.reset(), v.updateBodyForce(E), M.update(E));
      }
    }
  }
  function _() {
    for (var y = x.length; y--; )
      m.update(x[y]);
  }
}
function Pn(n, e) {
  for (var t in n)
    zn(n, e, t);
}
function zn(n, e, t) {
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
Pe.exports = Sn;
Pe.exports.simulator = Nt;
var Ln = Ce;
function Sn(n, e) {
  if (!n)
    throw new Error("Graph structure cannot be undefined");
  var t = e && e.createSimulator || Nt, r = t(e);
  if (Array.isArray(e))
    throw new Error("Physics settings is expected to be an object");
  var i = n.version > 19 ? Z : q;
  e && typeof e.nodeMass == "function" && (i = e.nodeMass);
  var a = /* @__PURE__ */ new Map(), s = {}, u = 0, o = r.settings.springTransform || qn;
  M(), v();
  var h = !1, f = {
    /**
     * Performs one step of iterative layout algorithm
     *
     * @returns {boolean} true if the system should be considered stable; False otherwise.
     * The system is stable if no further call to `step()` can improve the layout.
     */
    step: function() {
      if (u === 0)
        return c(!0), !0;
      var _ = r.step();
      f.lastMove = _, f.fire("step");
      var y = _ / u, E = y <= 0.01;
      return c(E), E;
    },
    /**
     * For a given `nodeId` returns position
     */
    getNodePosition: function(_) {
      return T(_).pos;
    },
    /**
     * Sets position of a node to a given coordinates
     * @param {string} nodeId node identifier
     * @param {number} x position of a node
     * @param {number} y position of a node
     * @param {number=} z position of node (only if applicable to body)
     */
    setNodePosition: function(_) {
      var y = T(_);
      y.setPosition.apply(y, Array.prototype.slice.call(arguments, 1));
    },
    /**
     * @returns {Object} Link position by link id
     * @returns {Object.from} {x, y} coordinates of link start
     * @returns {Object.to} {x, y} coordinates of link end
     */
    getLinkPosition: function(_) {
      var y = s[_];
      if (y)
        return {
          from: y.from.pos,
          to: y.to.pos
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
    forEachBody: p,
    /*
     * Requests layout algorithm to pin/unpin node to its current position
     * Pinned nodes should not be affected by layout algorithm and always
     * remain at their position
     */
    pinNode: function(_, y) {
      var E = T(_.id);
      E.isPinned = !!y;
    },
    /**
     * Checks whether given graph's node is currently pinned
     */
    isNodePinned: function(_) {
      return T(_.id).isPinned;
    },
    /**
     * Request to release all resources
     */
    dispose: function() {
      n.off("changed", m), f.fire("disposed");
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
    getSpring: l,
    /**
     * Returns length of cumulative force vector. The closer this to zero - the more stable the system is
     */
    getForceVectorLength: g,
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
  return Ln(f), f;
  function c(_) {
    h !== _ && (h = _, d(_));
  }
  function p(_) {
    a.forEach(_);
  }
  function g() {
    var _ = 0, y = 0;
    return p(function(E) {
      _ += Math.abs(E.force.x), y += Math.abs(E.force.y);
    }), Math.sqrt(_ * _ + y * y);
  }
  function l(_, y) {
    var E;
    if (y === void 0)
      typeof _ != "object" ? E = _ : E = _.id;
    else {
      var F = n.hasLink(_, y);
      if (!F)
        return;
      E = F.id;
    }
    return s[E];
  }
  function x(_) {
    return a.get(_);
  }
  function v() {
    n.on("changed", m);
  }
  function d(_) {
    f.fire("stable", _);
  }
  function m(_) {
    for (var y = 0; y < _.length; ++y) {
      var E = _[y];
      E.changeType === "add" ? (E.node && b(E.node.id), E.link && N(E.link)) : E.changeType === "remove" && (E.node && w(E.node), E.link && B(E.link));
    }
    u = n.getNodesCount();
  }
  function M() {
    u = 0, n.forEachNode(function(_) {
      b(_.id), u += 1;
    }), n.forEachLink(N);
  }
  function b(_) {
    var y = a.get(_);
    if (!y) {
      var E = n.getNode(_);
      if (!E)
        throw new Error("initBody() was called with unknown node id");
      var F = E.position;
      if (!F) {
        var U = P(E);
        F = r.getBestNewBodyPosition(U);
      }
      y = r.addBodyAt(F), y.id = _, a.set(_, y), A(_), I(E) && (y.isPinned = !0);
    }
  }
  function w(_) {
    var y = _.id, E = a.get(y);
    E && (a.delete(y), r.removeBody(E));
  }
  function N(_) {
    A(_.fromId), A(_.toId);
    var y = a.get(_.fromId), E = a.get(_.toId), F = r.addSpring(y, E, _.length);
    o(_, F), s[_.id] = F;
  }
  function B(_) {
    var y = s[_.id];
    if (y) {
      var E = n.getNode(_.fromId), F = n.getNode(_.toId);
      E && A(E.id), F && A(F.id), delete s[_.id], r.removeSpring(y);
    }
  }
  function P(_) {
    var y = [];
    if (!_.links)
      return y;
    for (var E = Math.min(_.links.length, 2), F = 0; F < E; ++F) {
      var U = _.links[F], X = U.fromId !== _.id ? a.get(U.fromId) : a.get(U.toId);
      X && X.pos && y.push(X);
    }
    return y;
  }
  function A(_) {
    var y = a.get(_);
    if (y.mass = i(_), Number.isNaN(y.mass))
      throw new Error("Node mass should be a number");
  }
  function I(_) {
    return _ && (_.isPinned || _.data && _.data.isPinned);
  }
  function T(_) {
    var y = a.get(_);
    return y || (b(_), y = a.get(_)), y;
  }
  function q(_) {
    var y = n.getLinks(_);
    return y ? 1 + y.length / 3 : 1;
  }
  function Z(_) {
    var y = n.getLinks(_);
    return y ? 1 + y.size / 3 : 1;
  }
}
function qn() {
}
var An = Pe.exports;
const In = /* @__PURE__ */ ht(An);
class Tn {
  constructor() {
    C(this, "ngraph");
    C(this, "ngraphLayout");
    C(this, "nodeMapping", /* @__PURE__ */ new Map());
    C(this, "edgeMapping", /* @__PURE__ */ new Map());
    this.ngraph = tn(), this.ngraphLayout = In(this.ngraph, { dimensions: 3 });
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
function Fn(n, e, t) {
  var r, i = 1;
  n == null && (n = 0), e == null && (e = 0), t == null && (t = 0);
  function a() {
    var s, u = r.length, o, h = 0, f = 0, c = 0;
    for (s = 0; s < u; ++s)
      o = r[s], h += o.x || 0, f += o.y || 0, c += o.z || 0;
    for (h = (h / u - n) * i, f = (f / u - e) * i, c = (c / u - t) * i, s = 0; s < u; ++s)
      o = r[s], h && (o.x -= h), f && (o.y -= f), c && (o.z -= c);
  }
  return a.initialize = function(s) {
    r = s;
  }, a.x = function(s) {
    return arguments.length ? (n = +s, a) : n;
  }, a.y = function(s) {
    return arguments.length ? (e = +s, a) : e;
  }, a.z = function(s) {
    return arguments.length ? (t = +s, a) : t;
  }, a.strength = function(s) {
    return arguments.length ? (i = +s, a) : i;
  }, a;
}
function On(n) {
  const e = +this._x.call(null, n);
  return Et(this.cover(e), e, n);
}
function Et(n, e, t) {
  if (isNaN(e))
    return n;
  var r, i = n._root, a = { data: t }, s = n._x0, u = n._x1, o, h, f, c, p;
  if (!i)
    return n._root = a, n;
  for (; i.length; )
    if ((f = e >= (o = (s + u) / 2)) ? s = o : u = o, r = i, !(i = i[c = +f]))
      return r[c] = a, n;
  if (h = +n._x.call(null, i.data), e === h)
    return a.next = i, r ? r[c] = a : n._root = a, n;
  do
    r = r ? r[c] = new Array(2) : n._root = new Array(2), (f = e >= (o = (s + u) / 2)) ? s = o : u = o;
  while ((c = +f) == (p = +(h >= o)));
  return r[p] = i, r[c] = a, n;
}
function Dn(n) {
  Array.isArray(n) || (n = Array.from(n));
  const e = n.length, t = new Float64Array(e);
  let r = 1 / 0, i = -1 / 0;
  for (let a = 0, s; a < e; ++a)
    isNaN(s = +this._x.call(null, n[a])) || (t[a] = s, s < r && (r = s), s > i && (i = s));
  if (r > i)
    return this;
  this.cover(r).cover(i);
  for (let a = 0; a < e; ++a)
    Et(this, t[a], n[a]);
  return this;
}
function Gn(n) {
  if (isNaN(n = +n))
    return this;
  var e = this._x0, t = this._x1;
  if (isNaN(e))
    t = (e = Math.floor(n)) + 1;
  else {
    for (var r = t - e || 1, i = this._root, a, s; e > n || n >= t; )
      switch (s = +(n < e), a = new Array(2), a[s] = i, i = a, r *= 2, s) {
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
function jn() {
  var n = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        n.push(e.data);
      while (e = e.next);
  }), n;
}
function Rn(n) {
  return arguments.length ? this.cover(+n[0][0]).cover(+n[1][0]) : isNaN(this._x0) ? void 0 : [[this._x0], [this._x1]];
}
function K(n, e, t) {
  this.node = n, this.x0 = e, this.x1 = t;
}
function Qn(n, e) {
  var t, r = this._x0, i, a, s = this._x1, u = [], o = this._root, h, f;
  for (o && u.push(new K(o, r, s)), e == null ? e = 1 / 0 : (r = n - e, s = n + e); h = u.pop(); )
    if (!(!(o = h.node) || (i = h.x0) > s || (a = h.x1) < r))
      if (o.length) {
        var c = (i + a) / 2;
        u.push(
          new K(o[1], c, a),
          new K(o[0], i, c)
        ), (f = +(n >= c)) && (h = u[u.length - 1], u[u.length - 1] = u[u.length - 1 - f], u[u.length - 1 - f] = h);
      } else {
        var p = Math.abs(n - +this._x.call(null, o.data));
        p < e && (e = p, r = n - p, s = n + p, t = o.data);
      }
  return t;
}
function Vn(n) {
  if (isNaN(o = +this._x.call(null, n)))
    return this;
  var e, t = this._root, r, i, a, s = this._x0, u = this._x1, o, h, f, c, p;
  if (!t)
    return this;
  if (t.length)
    for (; ; ) {
      if ((f = o >= (h = (s + u) / 2)) ? s = h : u = h, e = t, !(t = t[c = +f]))
        return this;
      if (!t.length)
        break;
      e[c + 1 & 1] && (r = e, p = c);
    }
  for (; t.data !== n; )
    if (i = t, !(t = t.next))
      return this;
  return (a = t.next) && delete t.next, i ? (a ? i.next = a : delete i.next, this) : e ? (a ? e[c] = a : delete e[c], (t = e[0] || e[1]) && t === (e[1] || e[0]) && !t.length && (r ? r[p] = t : this._root = t), this) : (this._root = a, this);
}
function Hn(n) {
  for (var e = 0, t = n.length; e < t; ++e)
    this.remove(n[e]);
  return this;
}
function Un() {
  return this._root;
}
function Wn() {
  var n = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++n;
      while (e = e.next);
  }), n;
}
function Xn(n) {
  var e = [], t, r = this._root, i, a, s;
  for (r && e.push(new K(r, this._x0, this._x1)); t = e.pop(); )
    if (!n(r = t.node, a = t.x0, s = t.x1) && r.length) {
      var u = (a + s) / 2;
      (i = r[1]) && e.push(new K(i, u, s)), (i = r[0]) && e.push(new K(i, a, u));
    }
  return this;
}
function Yn(n) {
  var e = [], t = [], r;
  for (this._root && e.push(new K(this._root, this._x0, this._x1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var a, s = r.x0, u = r.x1, o = (s + u) / 2;
      (a = i[0]) && e.push(new K(a, s, o)), (a = i[1]) && e.push(new K(a, o, u));
    }
    t.push(r);
  }
  for (; r = t.pop(); )
    n(r.node, r.x0, r.x1);
  return this;
}
function Jn(n) {
  return n[0];
}
function Kn(n) {
  return arguments.length ? (this._x = n, this) : this._x;
}
function $t(n, e) {
  var t = new Ie(e ?? Jn, NaN, NaN);
  return n == null ? t : t.addAll(n);
}
function Ie(n, e, t) {
  this._x = n, this._x0 = e, this._x1 = t, this._root = void 0;
}
function Ke(n) {
  for (var e = { data: n.data }, t = e; n = n.next; )
    t = t.next = { data: n.data };
  return e;
}
var V = $t.prototype = Ie.prototype;
V.copy = function() {
  var n = new Ie(this._x, this._x0, this._x1), e = this._root, t, r;
  if (!e)
    return n;
  if (!e.length)
    return n._root = Ke(e), n;
  for (t = [{ source: e, target: n._root = new Array(2) }]; e = t.pop(); )
    for (var i = 0; i < 2; ++i)
      (r = e.source[i]) && (r.length ? t.push({ source: r, target: e.target[i] = new Array(2) }) : e.target[i] = Ke(r));
  return n;
};
V.add = On;
V.addAll = Dn;
V.cover = Gn;
V.data = jn;
V.extent = Rn;
V.find = Qn;
V.remove = Vn;
V.removeAll = Hn;
V.root = Un;
V.size = Wn;
V.visit = Xn;
V.visitAfter = Yn;
V.x = Kn;
function Zn(n) {
  const e = +this._x.call(null, n), t = +this._y.call(null, n);
  return kt(this.cover(e, t), e, t, n);
}
function kt(n, e, t, r) {
  if (isNaN(e) || isNaN(t))
    return n;
  var i, a = n._root, s = { data: r }, u = n._x0, o = n._y0, h = n._x1, f = n._y1, c, p, g, l, x, v, d, m;
  if (!a)
    return n._root = s, n;
  for (; a.length; )
    if ((x = e >= (c = (u + h) / 2)) ? u = c : h = c, (v = t >= (p = (o + f) / 2)) ? o = p : f = p, i = a, !(a = a[d = v << 1 | x]))
      return i[d] = s, n;
  if (g = +n._x.call(null, a.data), l = +n._y.call(null, a.data), e === g && t === l)
    return s.next = a, i ? i[d] = s : n._root = s, n;
  do
    i = i ? i[d] = new Array(4) : n._root = new Array(4), (x = e >= (c = (u + h) / 2)) ? u = c : h = c, (v = t >= (p = (o + f) / 2)) ? o = p : f = p;
  while ((d = v << 1 | x) === (m = (l >= p) << 1 | g >= c));
  return i[m] = a, i[d] = s, n;
}
function er(n) {
  var e, t, r = n.length, i, a, s = new Array(r), u = new Array(r), o = 1 / 0, h = 1 / 0, f = -1 / 0, c = -1 / 0;
  for (t = 0; t < r; ++t)
    isNaN(i = +this._x.call(null, e = n[t])) || isNaN(a = +this._y.call(null, e)) || (s[t] = i, u[t] = a, i < o && (o = i), i > f && (f = i), a < h && (h = a), a > c && (c = a));
  if (o > f || h > c)
    return this;
  for (this.cover(o, h).cover(f, c), t = 0; t < r; ++t)
    kt(this, s[t], u[t], n[t]);
  return this;
}
function tr(n, e) {
  if (isNaN(n = +n) || isNaN(e = +e))
    return this;
  var t = this._x0, r = this._y0, i = this._x1, a = this._y1;
  if (isNaN(t))
    i = (t = Math.floor(n)) + 1, a = (r = Math.floor(e)) + 1;
  else {
    for (var s = i - t || 1, u = this._root, o, h; t > n || n >= i || r > e || e >= a; )
      switch (h = (e < r) << 1 | n < t, o = new Array(4), o[h] = u, u = o, s *= 2, h) {
        case 0:
          i = t + s, a = r + s;
          break;
        case 1:
          t = i - s, a = r + s;
          break;
        case 2:
          i = t + s, r = a - s;
          break;
        case 3:
          t = i - s, r = a - s;
          break;
      }
    this._root && this._root.length && (this._root = u);
  }
  return this._x0 = t, this._y0 = r, this._x1 = i, this._y1 = a, this;
}
function nr() {
  var n = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        n.push(e.data);
      while (e = e.next);
  }), n;
}
function rr(n) {
  return arguments.length ? this.cover(+n[0][0], +n[0][1]).cover(+n[1][0], +n[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function j(n, e, t, r, i) {
  this.node = n, this.x0 = e, this.y0 = t, this.x1 = r, this.y1 = i;
}
function ir(n, e, t) {
  var r, i = this._x0, a = this._y0, s, u, o, h, f = this._x1, c = this._y1, p = [], g = this._root, l, x;
  for (g && p.push(new j(g, i, a, f, c)), t == null ? t = 1 / 0 : (i = n - t, a = e - t, f = n + t, c = e + t, t *= t); l = p.pop(); )
    if (!(!(g = l.node) || (s = l.x0) > f || (u = l.y0) > c || (o = l.x1) < i || (h = l.y1) < a))
      if (g.length) {
        var v = (s + o) / 2, d = (u + h) / 2;
        p.push(
          new j(g[3], v, d, o, h),
          new j(g[2], s, d, v, h),
          new j(g[1], v, u, o, d),
          new j(g[0], s, u, v, d)
        ), (x = (e >= d) << 1 | n >= v) && (l = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - x], p[p.length - 1 - x] = l);
      } else {
        var m = n - +this._x.call(null, g.data), M = e - +this._y.call(null, g.data), b = m * m + M * M;
        if (b < t) {
          var w = Math.sqrt(t = b);
          i = n - w, a = e - w, f = n + w, c = e + w, r = g.data;
        }
      }
  return r;
}
function ar(n) {
  if (isNaN(f = +this._x.call(null, n)) || isNaN(c = +this._y.call(null, n)))
    return this;
  var e, t = this._root, r, i, a, s = this._x0, u = this._y0, o = this._x1, h = this._y1, f, c, p, g, l, x, v, d;
  if (!t)
    return this;
  if (t.length)
    for (; ; ) {
      if ((l = f >= (p = (s + o) / 2)) ? s = p : o = p, (x = c >= (g = (u + h) / 2)) ? u = g : h = g, e = t, !(t = t[v = x << 1 | l]))
        return this;
      if (!t.length)
        break;
      (e[v + 1 & 3] || e[v + 2 & 3] || e[v + 3 & 3]) && (r = e, d = v);
    }
  for (; t.data !== n; )
    if (i = t, !(t = t.next))
      return this;
  return (a = t.next) && delete t.next, i ? (a ? i.next = a : delete i.next, this) : e ? (a ? e[v] = a : delete e[v], (t = e[0] || e[1] || e[2] || e[3]) && t === (e[3] || e[2] || e[1] || e[0]) && !t.length && (r ? r[d] = t : this._root = t), this) : (this._root = a, this);
}
function or(n) {
  for (var e = 0, t = n.length; e < t; ++e)
    this.remove(n[e]);
  return this;
}
function sr() {
  return this._root;
}
function hr() {
  var n = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++n;
      while (e = e.next);
  }), n;
}
function ur(n) {
  var e = [], t, r = this._root, i, a, s, u, o;
  for (r && e.push(new j(r, this._x0, this._y0, this._x1, this._y1)); t = e.pop(); )
    if (!n(r = t.node, a = t.x0, s = t.y0, u = t.x1, o = t.y1) && r.length) {
      var h = (a + u) / 2, f = (s + o) / 2;
      (i = r[3]) && e.push(new j(i, h, f, u, o)), (i = r[2]) && e.push(new j(i, a, f, h, o)), (i = r[1]) && e.push(new j(i, h, s, u, f)), (i = r[0]) && e.push(new j(i, a, s, h, f));
    }
  return this;
}
function fr(n) {
  var e = [], t = [], r;
  for (this._root && e.push(new j(this._root, this._x0, this._y0, this._x1, this._y1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var a, s = r.x0, u = r.y0, o = r.x1, h = r.y1, f = (s + o) / 2, c = (u + h) / 2;
      (a = i[0]) && e.push(new j(a, s, u, f, c)), (a = i[1]) && e.push(new j(a, f, u, o, c)), (a = i[2]) && e.push(new j(a, s, c, f, h)), (a = i[3]) && e.push(new j(a, f, c, o, h));
    }
    t.push(r);
  }
  for (; r = t.pop(); )
    n(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function dr(n) {
  return n[0];
}
function cr(n) {
  return arguments.length ? (this._x = n, this) : this._x;
}
function lr(n) {
  return n[1];
}
function pr(n) {
  return arguments.length ? (this._y = n, this) : this._y;
}
function Bt(n, e, t) {
  var r = new Te(e ?? dr, t ?? lr, NaN, NaN, NaN, NaN);
  return n == null ? r : r.addAll(n);
}
function Te(n, e, t, r, i, a) {
  this._x = n, this._y = e, this._x0 = t, this._y0 = r, this._x1 = i, this._y1 = a, this._root = void 0;
}
function Ze(n) {
  for (var e = { data: n.data }, t = e; n = n.next; )
    t = t.next = { data: n.data };
  return e;
}
var R = Bt.prototype = Te.prototype;
R.copy = function() {
  var n = new Te(this._x, this._y, this._x0, this._y0, this._x1, this._y1), e = this._root, t, r;
  if (!e)
    return n;
  if (!e.length)
    return n._root = Ze(e), n;
  for (t = [{ source: e, target: n._root = new Array(4) }]; e = t.pop(); )
    for (var i = 0; i < 4; ++i)
      (r = e.source[i]) && (r.length ? t.push({ source: r, target: e.target[i] = new Array(4) }) : e.target[i] = Ze(r));
  return n;
};
R.add = Zn;
R.addAll = er;
R.cover = tr;
R.data = nr;
R.extent = rr;
R.find = ir;
R.remove = ar;
R.removeAll = or;
R.root = sr;
R.size = hr;
R.visit = ur;
R.visitAfter = fr;
R.x = cr;
R.y = pr;
function gr(n) {
  const e = +this._x.call(null, n), t = +this._y.call(null, n), r = +this._z.call(null, n);
  return Ct(this.cover(e, t, r), e, t, r, n);
}
function Ct(n, e, t, r, i) {
  if (isNaN(e) || isNaN(t) || isNaN(r))
    return n;
  var a, s = n._root, u = { data: i }, o = n._x0, h = n._y0, f = n._z0, c = n._x1, p = n._y1, g = n._z1, l, x, v, d, m, M, b, w, N, B, P;
  if (!s)
    return n._root = u, n;
  for (; s.length; )
    if ((b = e >= (l = (o + c) / 2)) ? o = l : c = l, (w = t >= (x = (h + p) / 2)) ? h = x : p = x, (N = r >= (v = (f + g) / 2)) ? f = v : g = v, a = s, !(s = s[B = N << 2 | w << 1 | b]))
      return a[B] = u, n;
  if (d = +n._x.call(null, s.data), m = +n._y.call(null, s.data), M = +n._z.call(null, s.data), e === d && t === m && r === M)
    return u.next = s, a ? a[B] = u : n._root = u, n;
  do
    a = a ? a[B] = new Array(8) : n._root = new Array(8), (b = e >= (l = (o + c) / 2)) ? o = l : c = l, (w = t >= (x = (h + p) / 2)) ? h = x : p = x, (N = r >= (v = (f + g) / 2)) ? f = v : g = v;
  while ((B = N << 2 | w << 1 | b) === (P = (M >= v) << 2 | (m >= x) << 1 | d >= l));
  return a[P] = s, a[B] = u, n;
}
function vr(n) {
  Array.isArray(n) || (n = Array.from(n));
  const e = n.length, t = new Float64Array(e), r = new Float64Array(e), i = new Float64Array(e);
  let a = 1 / 0, s = 1 / 0, u = 1 / 0, o = -1 / 0, h = -1 / 0, f = -1 / 0;
  for (let c = 0, p, g, l, x; c < e; ++c)
    isNaN(g = +this._x.call(null, p = n[c])) || isNaN(l = +this._y.call(null, p)) || isNaN(x = +this._z.call(null, p)) || (t[c] = g, r[c] = l, i[c] = x, g < a && (a = g), g > o && (o = g), l < s && (s = l), l > h && (h = l), x < u && (u = x), x > f && (f = x));
  if (a > o || s > h || u > f)
    return this;
  this.cover(a, s, u).cover(o, h, f);
  for (let c = 0; c < e; ++c)
    Ct(this, t[c], r[c], i[c], n[c]);
  return this;
}
function yr(n, e, t) {
  if (isNaN(n = +n) || isNaN(e = +e) || isNaN(t = +t))
    return this;
  var r = this._x0, i = this._y0, a = this._z0, s = this._x1, u = this._y1, o = this._z1;
  if (isNaN(r))
    s = (r = Math.floor(n)) + 1, u = (i = Math.floor(e)) + 1, o = (a = Math.floor(t)) + 1;
  else {
    for (var h = s - r || 1, f = this._root, c, p; r > n || n >= s || i > e || e >= u || a > t || t >= o; )
      switch (p = (t < a) << 2 | (e < i) << 1 | n < r, c = new Array(8), c[p] = f, f = c, h *= 2, p) {
        case 0:
          s = r + h, u = i + h, o = a + h;
          break;
        case 1:
          r = s - h, u = i + h, o = a + h;
          break;
        case 2:
          s = r + h, i = u - h, o = a + h;
          break;
        case 3:
          r = s - h, i = u - h, o = a + h;
          break;
        case 4:
          s = r + h, u = i + h, a = o - h;
          break;
        case 5:
          r = s - h, u = i + h, a = o - h;
          break;
        case 6:
          s = r + h, i = u - h, a = o - h;
          break;
        case 7:
          r = s - h, i = u - h, a = o - h;
          break;
      }
    this._root && this._root.length && (this._root = f);
  }
  return this._x0 = r, this._y0 = i, this._z0 = a, this._x1 = s, this._y1 = u, this._z1 = o, this;
}
function wr() {
  var n = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        n.push(e.data);
      while (e = e.next);
  }), n;
}
function xr(n) {
  return arguments.length ? this.cover(+n[0][0], +n[0][1], +n[0][2]).cover(+n[1][0], +n[1][1], +n[1][2]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0, this._z0], [this._x1, this._y1, this._z1]];
}
function S(n, e, t, r, i, a, s) {
  this.node = n, this.x0 = e, this.y0 = t, this.z0 = r, this.x1 = i, this.y1 = a, this.z1 = s;
}
function mr(n, e, t, r) {
  var i, a = this._x0, s = this._y0, u = this._z0, o, h, f, c, p, g, l = this._x1, x = this._y1, v = this._z1, d = [], m = this._root, M, b;
  for (m && d.push(new S(m, a, s, u, l, x, v)), r == null ? r = 1 / 0 : (a = n - r, s = e - r, u = t - r, l = n + r, x = e + r, v = t + r, r *= r); M = d.pop(); )
    if (!(!(m = M.node) || (o = M.x0) > l || (h = M.y0) > x || (f = M.z0) > v || (c = M.x1) < a || (p = M.y1) < s || (g = M.z1) < u))
      if (m.length) {
        var w = (o + c) / 2, N = (h + p) / 2, B = (f + g) / 2;
        d.push(
          new S(m[7], w, N, B, c, p, g),
          new S(m[6], o, N, B, w, p, g),
          new S(m[5], w, h, B, c, N, g),
          new S(m[4], o, h, B, w, N, g),
          new S(m[3], w, N, f, c, p, B),
          new S(m[2], o, N, f, w, p, B),
          new S(m[1], w, h, f, c, N, B),
          new S(m[0], o, h, f, w, N, B)
        ), (b = (t >= B) << 2 | (e >= N) << 1 | n >= w) && (M = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - b], d[d.length - 1 - b] = M);
      } else {
        var P = n - +this._x.call(null, m.data), A = e - +this._y.call(null, m.data), I = t - +this._z.call(null, m.data), T = P * P + A * A + I * I;
        if (T < r) {
          var q = Math.sqrt(r = T);
          a = n - q, s = e - q, u = t - q, l = n + q, x = e + q, v = t + q, i = m.data;
        }
      }
  return i;
}
function br(n) {
  if (isNaN(p = +this._x.call(null, n)) || isNaN(g = +this._y.call(null, n)) || isNaN(l = +this._z.call(null, n)))
    return this;
  var e, t = this._root, r, i, a, s = this._x0, u = this._y0, o = this._z0, h = this._x1, f = this._y1, c = this._z1, p, g, l, x, v, d, m, M, b, w, N;
  if (!t)
    return this;
  if (t.length)
    for (; ; ) {
      if ((m = p >= (x = (s + h) / 2)) ? s = x : h = x, (M = g >= (v = (u + f) / 2)) ? u = v : f = v, (b = l >= (d = (o + c) / 2)) ? o = d : c = d, e = t, !(t = t[w = b << 2 | M << 1 | m]))
        return this;
      if (!t.length)
        break;
      (e[w + 1 & 7] || e[w + 2 & 7] || e[w + 3 & 7] || e[w + 4 & 7] || e[w + 5 & 7] || e[w + 6 & 7] || e[w + 7 & 7]) && (r = e, N = w);
    }
  for (; t.data !== n; )
    if (i = t, !(t = t.next))
      return this;
  return (a = t.next) && delete t.next, i ? (a ? i.next = a : delete i.next, this) : e ? (a ? e[w] = a : delete e[w], (t = e[0] || e[1] || e[2] || e[3] || e[4] || e[5] || e[6] || e[7]) && t === (e[7] || e[6] || e[5] || e[4] || e[3] || e[2] || e[1] || e[0]) && !t.length && (r ? r[N] = t : this._root = t), this) : (this._root = a, this);
}
function _r(n) {
  for (var e = 0, t = n.length; e < t; ++e)
    this.remove(n[e]);
  return this;
}
function Mr() {
  return this._root;
}
function Nr() {
  var n = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++n;
      while (e = e.next);
  }), n;
}
function Er(n) {
  var e = [], t, r = this._root, i, a, s, u, o, h, f;
  for (r && e.push(new S(r, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); t = e.pop(); )
    if (!n(r = t.node, a = t.x0, s = t.y0, u = t.z0, o = t.x1, h = t.y1, f = t.z1) && r.length) {
      var c = (a + o) / 2, p = (s + h) / 2, g = (u + f) / 2;
      (i = r[7]) && e.push(new S(i, c, p, g, o, h, f)), (i = r[6]) && e.push(new S(i, a, p, g, c, h, f)), (i = r[5]) && e.push(new S(i, c, s, g, o, p, f)), (i = r[4]) && e.push(new S(i, a, s, g, c, p, f)), (i = r[3]) && e.push(new S(i, c, p, u, o, h, g)), (i = r[2]) && e.push(new S(i, a, p, u, c, h, g)), (i = r[1]) && e.push(new S(i, c, s, u, o, p, g)), (i = r[0]) && e.push(new S(i, a, s, u, c, p, g));
    }
  return this;
}
function $r(n) {
  var e = [], t = [], r;
  for (this._root && e.push(new S(this._root, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var a, s = r.x0, u = r.y0, o = r.z0, h = r.x1, f = r.y1, c = r.z1, p = (s + h) / 2, g = (u + f) / 2, l = (o + c) / 2;
      (a = i[0]) && e.push(new S(a, s, u, o, p, g, l)), (a = i[1]) && e.push(new S(a, p, u, o, h, g, l)), (a = i[2]) && e.push(new S(a, s, g, o, p, f, l)), (a = i[3]) && e.push(new S(a, p, g, o, h, f, l)), (a = i[4]) && e.push(new S(a, s, u, l, p, g, c)), (a = i[5]) && e.push(new S(a, p, u, l, h, g, c)), (a = i[6]) && e.push(new S(a, s, g, l, p, f, c)), (a = i[7]) && e.push(new S(a, p, g, l, h, f, c));
    }
    t.push(r);
  }
  for (; r = t.pop(); )
    n(r.node, r.x0, r.y0, r.z0, r.x1, r.y1, r.z1);
  return this;
}
function kr(n) {
  return n[0];
}
function Br(n) {
  return arguments.length ? (this._x = n, this) : this._x;
}
function Cr(n) {
  return n[1];
}
function Pr(n) {
  return arguments.length ? (this._y = n, this) : this._y;
}
function zr(n) {
  return n[2];
}
function Lr(n) {
  return arguments.length ? (this._z = n, this) : this._z;
}
function Pt(n, e, t, r) {
  var i = new Fe(e ?? kr, t ?? Cr, r ?? zr, NaN, NaN, NaN, NaN, NaN, NaN);
  return n == null ? i : i.addAll(n);
}
function Fe(n, e, t, r, i, a, s, u, o) {
  this._x = n, this._y = e, this._z = t, this._x0 = r, this._y0 = i, this._z0 = a, this._x1 = s, this._y1 = u, this._z1 = o, this._root = void 0;
}
function et(n) {
  for (var e = { data: n.data }, t = e; n = n.next; )
    t = t.next = { data: n.data };
  return e;
}
var G = Pt.prototype = Fe.prototype;
G.copy = function() {
  var n = new Fe(this._x, this._y, this._z, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1), e = this._root, t, r;
  if (!e)
    return n;
  if (!e.length)
    return n._root = et(e), n;
  for (t = [{ source: e, target: n._root = new Array(8) }]; e = t.pop(); )
    for (var i = 0; i < 8; ++i)
      (r = e.source[i]) && (r.length ? t.push({ source: r, target: e.target[i] = new Array(8) }) : e.target[i] = et(r));
  return n;
};
G.add = gr;
G.addAll = vr;
G.cover = yr;
G.data = wr;
G.extent = xr;
G.find = mr;
G.remove = br;
G.removeAll = _r;
G.root = Mr;
G.size = Nr;
G.visit = Er;
G.visitAfter = $r;
G.x = Br;
G.y = Pr;
G.z = Lr;
function de(n) {
  return function() {
    return n;
  };
}
function J(n) {
  return (n() - 0.5) * 1e-6;
}
function Sr(n) {
  return n.index;
}
function tt(n, e) {
  var t = n.get(e);
  if (!t)
    throw new Error("node not found: " + e);
  return t;
}
function qr(n) {
  var e = Sr, t = p, r, i = de(30), a, s, u, o, h, f, c = 1;
  n == null && (n = []);
  function p(d) {
    return 1 / Math.min(o[d.source.index], o[d.target.index]);
  }
  function g(d) {
    for (var m = 0, M = n.length; m < c; ++m)
      for (var b = 0, w, N, B, P = 0, A = 0, I = 0, T, q; b < M; ++b)
        w = n[b], N = w.source, B = w.target, P = B.x + B.vx - N.x - N.vx || J(f), u > 1 && (A = B.y + B.vy - N.y - N.vy || J(f)), u > 2 && (I = B.z + B.vz - N.z - N.vz || J(f)), T = Math.sqrt(P * P + A * A + I * I), T = (T - a[b]) / T * d * r[b], P *= T, A *= T, I *= T, B.vx -= P * (q = h[b]), u > 1 && (B.vy -= A * q), u > 2 && (B.vz -= I * q), N.vx += P * (q = 1 - q), u > 1 && (N.vy += A * q), u > 2 && (N.vz += I * q);
  }
  function l() {
    if (s) {
      var d, m = s.length, M = n.length, b = new Map(s.map((N, B) => [e(N, B, s), N])), w;
      for (d = 0, o = new Array(m); d < M; ++d)
        w = n[d], w.index = d, typeof w.source != "object" && (w.source = tt(b, w.source)), typeof w.target != "object" && (w.target = tt(b, w.target)), o[w.source.index] = (o[w.source.index] || 0) + 1, o[w.target.index] = (o[w.target.index] || 0) + 1;
      for (d = 0, h = new Array(M); d < M; ++d)
        w = n[d], h[d] = o[w.source.index] / (o[w.source.index] + o[w.target.index]);
      r = new Array(M), x(), a = new Array(M), v();
    }
  }
  function x() {
    if (s)
      for (var d = 0, m = n.length; d < m; ++d)
        r[d] = +t(n[d], d, n);
  }
  function v() {
    if (s)
      for (var d = 0, m = n.length; d < m; ++d)
        a[d] = +i(n[d], d, n);
  }
  return g.initialize = function(d, ...m) {
    s = d, f = m.find((M) => typeof M == "function") || Math.random, u = m.find((M) => [1, 2, 3].includes(M)) || 2, l();
  }, g.links = function(d) {
    return arguments.length ? (n = d, l(), g) : n;
  }, g.id = function(d) {
    return arguments.length ? (e = d, g) : e;
  }, g.iterations = function(d) {
    return arguments.length ? (c = +d, g) : c;
  }, g.strength = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : de(+d), x(), g) : t;
  }, g.distance = function(d) {
    return arguments.length ? (i = typeof d == "function" ? d : de(+d), v(), g) : i;
  }, g;
}
var Ar = { value: () => {
} };
function zt() {
  for (var n = 0, e = arguments.length, t = {}, r; n < e; ++n) {
    if (!(r = arguments[n] + "") || r in t || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    t[r] = [];
  }
  return new ge(t);
}
function ge(n) {
  this._ = n;
}
function Ir(n, e) {
  return n.trim().split(/^|\s+/).map(function(t) {
    var r = "", i = t.indexOf(".");
    if (i >= 0 && (r = t.slice(i + 1), t = t.slice(0, i)), t && !e.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name: r };
  });
}
ge.prototype = zt.prototype = {
  constructor: ge,
  on: function(n, e) {
    var t = this._, r = Ir(n + "", t), i, a = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++a < s; )
        if ((i = (n = r[a]).type) && (i = Tr(t[i], n.name)))
          return i;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++a < s; )
      if (i = (n = r[a]).type)
        t[i] = nt(t[i], n.name, e);
      else if (e == null)
        for (i in t)
          t[i] = nt(t[i], n.name, null);
    return this;
  },
  copy: function() {
    var n = {}, e = this._;
    for (var t in e)
      n[t] = e[t].slice();
    return new ge(n);
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
function Tr(n, e) {
  for (var t = 0, r = n.length, i; t < r; ++t)
    if ((i = n[t]).name === e)
      return i.value;
}
function nt(n, e, t) {
  for (var r = 0, i = n.length; r < i; ++r)
    if (n[r].name === e) {
      n[r] = Ar, n = n.slice(0, r).concat(n.slice(r + 1));
      break;
    }
  return t != null && n.push({ name: e, value: t }), n;
}
var ae = 0, ue = 0, he = 0, Lt = 1e3, ye, fe, we = 0, ne = 0, xe = 0, ce = typeof performance == "object" && performance.now ? performance : Date, St = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(n) {
  setTimeout(n, 17);
};
function qt() {
  return ne || (St(Fr), ne = ce.now() + xe);
}
function Fr() {
  ne = 0;
}
function $e() {
  this._call = this._time = this._next = null;
}
$e.prototype = At.prototype = {
  constructor: $e,
  restart: function(n, e, t) {
    if (typeof n != "function")
      throw new TypeError("callback is not a function");
    t = (t == null ? qt() : +t) + (e == null ? 0 : +e), !this._next && fe !== this && (fe ? fe._next = this : ye = this, fe = this), this._call = n, this._time = t, ke();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ke());
  }
};
function At(n, e, t) {
  var r = new $e();
  return r.restart(n, e, t), r;
}
function Or() {
  qt(), ++ae;
  for (var n = ye, e; n; )
    (e = ne - n._time) >= 0 && n._call.call(void 0, e), n = n._next;
  --ae;
}
function rt() {
  ne = (we = ce.now()) + xe, ae = ue = 0;
  try {
    Or();
  } finally {
    ae = 0, Gr(), ne = 0;
  }
}
function Dr() {
  var n = ce.now(), e = n - we;
  e > Lt && (xe -= e, we = n);
}
function Gr() {
  for (var n, e = ye, t, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), n = e, e = e._next) : (t = e._next, e._next = null, e = n ? n._next = t : ye = t);
  fe = n, ke(r);
}
function ke(n) {
  if (!ae) {
    ue && (ue = clearTimeout(ue));
    var e = n - ne;
    e > 24 ? (n < 1 / 0 && (ue = setTimeout(rt, n - ce.now() - xe)), he && (he = clearInterval(he))) : (he || (we = ce.now(), he = setInterval(Dr, Lt)), ae = 1, St(rt));
  }
}
const jr = 1664525, Rr = 1013904223, it = 4294967296;
function Qr() {
  let n = 1;
  return () => (n = (jr * n + Rr) % it) / it;
}
var at = 3;
function Ne(n) {
  return n.x;
}
function ot(n) {
  return n.y;
}
function Vr(n) {
  return n.z;
}
var Hr = 10, Ur = Math.PI * (3 - Math.sqrt(5)), Wr = Math.PI * 20 / (9 + Math.sqrt(221));
function Xr(n, e) {
  e = e || 2;
  var t = Math.min(at, Math.max(1, Math.round(e))), r, i = 1, a = 1e-3, s = 1 - Math.pow(a, 1 / 300), u = 0, o = 0.6, h = /* @__PURE__ */ new Map(), f = At(g), c = zt("tick", "end"), p = Qr();
  n == null && (n = []);
  function g() {
    l(), c.call("tick", r), i < a && (f.stop(), c.call("end", r));
  }
  function l(d) {
    var m, M = n.length, b;
    d === void 0 && (d = 1);
    for (var w = 0; w < d; ++w)
      for (i += (u - i) * s, h.forEach(function(N) {
        N(i);
      }), m = 0; m < M; ++m)
        b = n[m], b.fx == null ? b.x += b.vx *= o : (b.x = b.fx, b.vx = 0), t > 1 && (b.fy == null ? b.y += b.vy *= o : (b.y = b.fy, b.vy = 0)), t > 2 && (b.fz == null ? b.z += b.vz *= o : (b.z = b.fz, b.vz = 0));
    return r;
  }
  function x() {
    for (var d = 0, m = n.length, M; d < m; ++d) {
      if (M = n[d], M.index = d, M.fx != null && (M.x = M.fx), M.fy != null && (M.y = M.fy), M.fz != null && (M.z = M.fz), isNaN(M.x) || t > 1 && isNaN(M.y) || t > 2 && isNaN(M.z)) {
        var b = Hr * (t > 2 ? Math.cbrt(0.5 + d) : t > 1 ? Math.sqrt(0.5 + d) : d), w = d * Ur, N = d * Wr;
        t === 1 ? M.x = b : t === 2 ? (M.x = b * Math.cos(w), M.y = b * Math.sin(w)) : (M.x = b * Math.sin(w) * Math.cos(N), M.y = b * Math.cos(w), M.z = b * Math.sin(w) * Math.sin(N));
      }
      (isNaN(M.vx) || t > 1 && isNaN(M.vy) || t > 2 && isNaN(M.vz)) && (M.vx = 0, t > 1 && (M.vy = 0), t > 2 && (M.vz = 0));
    }
  }
  function v(d) {
    return d.initialize && d.initialize(n, p, t), d;
  }
  return x(), r = {
    tick: l,
    restart: function() {
      return f.restart(g), r;
    },
    stop: function() {
      return f.stop(), r;
    },
    numDimensions: function(d) {
      return arguments.length ? (t = Math.min(at, Math.max(1, Math.round(d))), h.forEach(v), r) : t;
    },
    nodes: function(d) {
      return arguments.length ? (n = d, x(), h.forEach(v), r) : n;
    },
    alpha: function(d) {
      return arguments.length ? (i = +d, r) : i;
    },
    alphaMin: function(d) {
      return arguments.length ? (a = +d, r) : a;
    },
    alphaDecay: function(d) {
      return arguments.length ? (s = +d, r) : +s;
    },
    alphaTarget: function(d) {
      return arguments.length ? (u = +d, r) : u;
    },
    velocityDecay: function(d) {
      return arguments.length ? (o = 1 - d, r) : 1 - o;
    },
    randomSource: function(d) {
      return arguments.length ? (p = d, h.forEach(v), r) : p;
    },
    force: function(d, m) {
      return arguments.length > 1 ? (m == null ? h.delete(d) : h.set(d, v(m)), r) : h.get(d);
    },
    find: function() {
      var d = Array.prototype.slice.call(arguments), m = d.shift() || 0, M = (t > 1 ? d.shift() : null) || 0, b = (t > 2 ? d.shift() : null) || 0, w = d.shift() || 1 / 0, N = 0, B = n.length, P, A, I, T, q, Z;
      for (w *= w, N = 0; N < B; ++N)
        q = n[N], P = m - q.x, A = M - (q.y || 0), I = b - (q.z || 0), T = P * P + A * A + I * I, T < w && (Z = q, w = T);
      return Z;
    },
    on: function(d, m) {
      return arguments.length > 1 ? (c.on(d, m), r) : c.on(d);
    }
  };
}
function Yr() {
  var n, e, t, r, i, a = de(-30), s, u = 1, o = 1 / 0, h = 0.81;
  function f(l) {
    var x, v = n.length, d = (e === 1 ? $t(n, Ne) : e === 2 ? Bt(n, Ne, ot) : e === 3 ? Pt(n, Ne, ot, Vr) : null).visitAfter(p);
    for (i = l, x = 0; x < v; ++x)
      t = n[x], d.visit(g);
  }
  function c() {
    if (n) {
      var l, x = n.length, v;
      for (s = new Array(x), l = 0; l < x; ++l)
        v = n[l], s[v.index] = +a(v, l, n);
    }
  }
  function p(l) {
    var x = 0, v, d, m = 0, M, b, w, N, B = l.length;
    if (B) {
      for (M = b = w = N = 0; N < B; ++N)
        (v = l[N]) && (d = Math.abs(v.value)) && (x += v.value, m += d, M += d * (v.x || 0), b += d * (v.y || 0), w += d * (v.z || 0));
      x *= Math.sqrt(4 / B), l.x = M / m, e > 1 && (l.y = b / m), e > 2 && (l.z = w / m);
    } else {
      v = l, v.x = v.data.x, e > 1 && (v.y = v.data.y), e > 2 && (v.z = v.data.z);
      do
        x += s[v.data.index];
      while (v = v.next);
    }
    l.value = x;
  }
  function g(l, x, v, d, m) {
    if (!l.value)
      return !0;
    var M = [v, d, m][e - 1], b = l.x - t.x, w = e > 1 ? l.y - t.y : 0, N = e > 2 ? l.z - t.z : 0, B = M - x, P = b * b + w * w + N * N;
    if (B * B / h < P)
      return P < o && (b === 0 && (b = J(r), P += b * b), e > 1 && w === 0 && (w = J(r), P += w * w), e > 2 && N === 0 && (N = J(r), P += N * N), P < u && (P = Math.sqrt(u * P)), t.vx += b * l.value * i / P, e > 1 && (t.vy += w * l.value * i / P), e > 2 && (t.vz += N * l.value * i / P)), !0;
    if (l.length || P >= o)
      return;
    (l.data !== t || l.next) && (b === 0 && (b = J(r), P += b * b), e > 1 && w === 0 && (w = J(r), P += w * w), e > 2 && N === 0 && (N = J(r), P += N * N), P < u && (P = Math.sqrt(u * P)));
    do
      l.data !== t && (B = s[l.data.index] * i / P, t.vx += b * B, e > 1 && (t.vy += w * B), e > 2 && (t.vz += N * B));
    while (l = l.next);
  }
  return f.initialize = function(l, ...x) {
    n = l, r = x.find((v) => typeof v == "function") || Math.random, e = x.find((v) => [1, 2, 3].includes(v)) || 2, c();
  }, f.strength = function(l) {
    return arguments.length ? (a = typeof l == "function" ? l : de(+l), c(), f) : a;
  }, f.distanceMin = function(l) {
    return arguments.length ? (u = l * l, f) : Math.sqrt(u);
  }, f.distanceMax = function(l) {
    return arguments.length ? (o = l * l, f) : Math.sqrt(o);
  }, f.theta = function(l) {
    return arguments.length ? (h = l * l, f) : Math.sqrt(h);
  }, f;
}
function Be(n) {
  return typeof n == "object" && typeof n.index == "number" && typeof n.x == "number" && typeof n.y == "number" && typeof n.z == "number" && typeof n.vx == "number" && typeof n.vy == "number" && typeof n.vz == "number";
}
function Jr(n) {
  return !!(typeof n == "object" && typeof n.index == "number" && Be(n.source) && Be(n.target));
}
class Kr {
  constructor() {
    C(this, "d3ForceLayout");
    C(this, "d3AlphaMin", 0);
    C(this, "d3AlphaTarget", 0);
    C(this, "d3AlphaDecay", 0.0228);
    C(this, "d3VelocityDecay", 0.4);
    C(this, "nodeMapping", /* @__PURE__ */ new Map());
    C(this, "edgeMapping", /* @__PURE__ */ new Map());
    C(this, "newNodeMap", /* @__PURE__ */ new Map());
    C(this, "newEdgeMap", /* @__PURE__ */ new Map());
    C(this, "reheat", !1);
    this.d3ForceLayout = Xr().numDimensions(3).alpha(1).force("link", qr()).force("charge", Yr()).force("center", Fn()).force("dagRadial", null).stop(), this.d3ForceLayout.force("link").id((e) => e.id);
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
        if (!Be(a))
          throw new Error("Internal error: Node is not settled as a complete D3 Node");
        this.nodeMapping.set(i, a);
      }
      this.newNodeMap.clear();
      let t = [...this.edgeMapping.values()];
      t = t.concat([...this.newEdgeMap.values()]), this.d3ForceLayout.force("link").links(t);
      for (let r of this.newEdgeMap.entries()) {
        let i = r[0], a = r[1];
        if (!Jr(a))
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
class ni {
  constructor(e) {
    C(this, "element");
    C(this, "canvas");
    C(this, "engine");
    C(this, "scene");
    C(this, "camera");
    C(this, "graphEngine");
    C(this, "nodeMeshOpts");
    C(this, "edgeMeshOpts");
    C(this, "running", !0);
    C(this, "skybox");
    C(this, "pinOnDrag");
    C(this, "fetchNodes");
    C(this, "fetchEdges");
    C(this, "graphEngineType");
    C(this, "minDelta", 0.02);
    if (this.pinOnDrag = e.pinOnDrag ?? !0, this.fetchNodes = e.fetchNodes, this.fetchEdges = e.fetchEdges, this.graphEngineType = e.graphEngineType ?? "ngraph", typeof e.element == "string") {
      let t = document.getElementById(e.element);
      if (!t)
        throw new Error(`getElementById() could not find element '${e.element}'`);
      this.element = t;
    } else if (e.element instanceof HTMLElement)
      this.element = e.element;
    else
      throw new TypeError("Graph constructor requires 'element' argument that is either a string specifying the ID of the HTML element or an HTMLElement");
    if (this.element.innerHTML = "", this.canvas = document.createElement("canvas"), this.canvas.setAttribute("id", "babylonForceGraphRenderCanvas"), this.canvas.setAttribute("touch-action", "none"), this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.touchAction = "none", this.element.appendChild(this.canvas), this.engine = new Ee(this.canvas, !0), this.scene = new jt(this.engine), this.camera = new Rt("camera", -Math.PI / 2, Math.PI / 2.5, 15, new Re(0, 0, 0)), this.camera.attachControl(this.canvas, !0), new Qt("light", new Re(1, 1, 0)), e.skybox && new Vt(
      "testdome",
      e.skybox,
      {
        resolution: 32,
        size: 1e3
      },
      this.scene
    ), this.graphEngineType === "ngraph")
      this.graphEngine = new Tn();
    else if (this.graphEngineType === "d3")
      this.graphEngine = new Kr();
    else
      throw new TypeError(`Unknown graph engine type: '${this.graphEngineType}'`);
    this.nodeMeshOpts = e.nodeMeshOpts ?? {}, this.edgeMeshOpts = e.edgeMeshOpts ?? {};
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
    e < this.minDelta && (console.log("graph engine settled, stopping"), this.running = !1);
  }
  addNode(e, t = {}) {
    return ve.create(this, e, {
      nodeMeshOpts: this.nodeMeshOpts,
      pinOnDrag: this.pinOnDrag,
      metadata: t
    });
  }
  addEdge(e, t, r = {}) {
    return Y.create(this, e, t, {
      edgeMeshOpts: this.edgeMeshOpts,
      metadata: r
    });
  }
  async loadJsonData(e, t = {}) {
    const r = t.nodeListProp ?? "nodes", i = t.edgeListProp ?? "links", a = t.nodeIdProp ?? "id", s = t.edgeSrcIdProp ?? "source", u = t.edgeDstIdProp ?? "target", h = await (await fetch(e, t.fetchOpts)).json();
    if (!Array.isArray(h[r]))
      throw TypeError(`when fetching JSON data: '${r}' was not an Array`);
    if (!Array.isArray(h[i]))
      throw TypeError(`when fetching JSON data: '${i}' was not an Array`);
    for (let f of h[r]) {
      let c = f[a], p = f;
      this.addNode(c, p);
    }
    for (let f of h[i]) {
      let c = f[s], p = f[u], g = f;
      this.addEdge(c, p, g);
    }
  }
}
export {
  Y as Edge,
  ni as Graph,
  ve as Node,
  ti as util
};
