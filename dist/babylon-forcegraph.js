var At = Object.defineProperty;
var It = (n, e, t) => e in n ? At(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var k = (n, e, t) => (It(n, typeof e != "symbol" ? e + "" : e, t), t);
import { SixDofDragBehavior as Ft, ActionManager as De, ExecuteCodeAction as Tt, StandardMaterial as Oe, Color3 as re, MeshBuilder as H, DynamicTexture as Ge, CreateGreasedLine as me, RawTexture as je, Engine as Ne, GreasedLineMeshColorMode as Dt, Scene as Ot, ArcRotateCamera as Gt, Vector3 as Re, HemisphericLight as jt, PhotoDome as Rt } from "@babylonjs/core";
const at = /* @__PURE__ */ new Map([
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
  let e = at.get(n);
  return e || n;
}
const si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colorMap: at,
  colorNameToHex: ie
}, Symbol.toStringTag, { value: "Module" })), Qe = 1.618;
let ve = class L {
  constructor(e, t, r = {}) {
    k(this, "parentGraph");
    k(this, "id");
    k(this, "metadata");
    k(this, "mesh");
    k(this, "label");
    k(this, "meshDragBehavior");
    k(this, "dragging", !1);
    k(this, "nodeMeshConfig");
    k(this, "pinOnDrag");
    if (this.parentGraph = e, this.id = t, this.metadata = r.metadata ?? {}, this.nodeMeshConfig = this.parentGraph.config.nodeMeshOpts, this.parentGraph.graphEngine.addNode(this), this.mesh = this.nodeMeshConfig.nodeMeshFactory(this, this.parentGraph, this.nodeMeshConfig), this.mesh.metadata = { parentNode: this }, this.nodeMeshConfig.label && (this.label = L.createLabel(this.id.toString(), this, this.parentGraph), this.label.parent = this.mesh, this.label.position.y += 1), this.pinOnDrag = r.pinOnDrag ?? !0, this.meshDragBehavior = new Ft(), this.mesh.addBehavior(this.meshDragBehavior), this.meshDragBehavior.onDragStartObservable.add(() => {
      this.parentGraph.running = !0, this.dragging = !0;
    }), this.meshDragBehavior.onDragEndObservable.add(() => {
      this.parentGraph.running = !0, this.pinOnDrag && this.pin(), this.dragging = !1;
    }), this.meshDragBehavior.onPositionChangedObservable.add((i) => {
      this.parentGraph.running = !0, this.parentGraph.graphEngine.setNodePosition(this, i.position);
    }), this.mesh.actionManager = new De(this.parentGraph.scene), this.parentGraph.fetchNodes && this.parentGraph.fetchEdges) {
      const { fetchNodes: i, fetchEdges: o } = this.parentGraph;
      this.mesh.actionManager.registerAction(
        new Tt(
          {
            trigger: De.OnDoublePickTrigger
            // trigger: ActionManager.OnLongPressTrigger,
          },
          () => {
            this.parentGraph.running = !0;
            const s = o(this, this.parentGraph), f = /* @__PURE__ */ new Set();
            s.forEach((h) => {
              f.add(h.source), f.add(h.target);
            }), f.delete(this.id), i(f, this.parentGraph).forEach((h) => this.parentGraph.addNode(h.id, h.metadata)), s.forEach((h) => this.parentGraph.addEdge(h.source, h.target, h.metadata));
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
    return Qt;
  }
  static create(e, t, r = {}) {
    const i = L.list.get(t);
    if (i)
      return i;
    const o = new L(e, t, r);
    return L.list.set(t, o), o;
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
    let o = new Oe("defaultMaterial"), s = r.color;
    return o.diffuseColor = re.FromHexString(ie(s)), i.material = o, o.wireframe = r.wireframe, i.visibility = r.opacity, i;
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
    const o = "48px Verdana", a = 0.006944444444444444, d = new Ge("DynamicTexture", 64, r.scene).getContext();
    d.font = o;
    const c = d.measureText(e).width + 8, v = c * a, p = new Ge("DynamicTexture", { width: c, height: 72 }, r.scene, !1), l = new Oe("mat", r.scene);
    l.specularColor = re.Black(), p.hasAlpha = !0;
    const x = p.getContext();
    x.fillStyle = "white", x.beginPath();
    const g = 0, u = 0, m = [20, 20, 20, 20], M = c, b = 72;
    x.moveTo(g + m[0], u), x.lineTo(g + M - m[1], u), x.arc(g + M - m[1], u + m[1], m[1], 3 * Math.PI / 2, Math.PI * 2), x.lineTo(g + M, u + b - m[2]), x.arc(g + M - m[2], u + b - m[2], m[2], 0, Math.PI / 2), x.lineTo(g + m[3], u + b), x.arc(g + m[3], u + b - m[3], m[3], Math.PI / 2, Math.PI), x.lineTo(g, u + m[0]), x.arc(g + m[0], u + m[0], m[0], Math.PI, 3 * Math.PI / 2), x.closePath(), x.fill(), p.drawText(e, null, null, o, "#000000", "transparent", !0), l.opacityTexture = p, l.emissiveTexture = p, l.disableLighting = !0;
    const w = H.CreatePlane("plane", { width: v, height: 0.5 }, r.scene);
    return w.material = l, w.billboardMode = 7, w;
  }
};
const Qt = /* @__PURE__ */ new Map();
class Y {
  constructor(e, t, r, i = {}) {
    k(this, "parentGraph");
    k(this, "srcId");
    k(this, "dstId");
    k(this, "metadata");
    k(this, "mesh");
    k(this, "edgeMeshConfig");
    if (this.parentGraph = e, this.srcId = t, this.dstId = r, this.metadata = i.metadata ?? {}, !ve.list.has(t))
      throw new Error(`Attempting to create edge '${t}->${r}', Node '${t}' hasn't been created yet.`);
    if (!ve.list.has(r))
      throw new Error(`Attempting to create edge '${t}->${r}', Node '${r}' hasn't been created yet.`);
    this.edgeMeshConfig = this.parentGraph.config.edgeMeshOpts, this.parentGraph.graphEngine.addEdge(this), this.mesh = this.edgeMeshConfig.edgeMeshFactory(this, this.parentGraph, this.edgeMeshConfig), this.mesh.metadata = {}, this.mesh.metadata.parentEdge = this;
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
    return Ht;
  }
  static create(e, t, r, i = {}) {
    const o = Y.list.get(t, r);
    if (o)
      return o;
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
    const i = re.FromHexString(ie(r.movingLineOpts.baseColor)), o = re.FromHexString(ie(r.color)), s = Math.floor(i.r * 255), f = Math.floor(i.g * 255), a = Math.floor(i.b * 255), h = Math.floor(o.r * 255), d = Math.floor(o.g * 255), c = Math.floor(o.b * 255), v = new Uint8Array([s, f, a, h, d, c]), p = new je(
      v,
      // data
      v.length / 3,
      // width
      1,
      // height
      Ne.TEXTUREFORMAT_RGB,
      // format
      t.scene,
      // sceneOrEngine
      !1,
      // generateMipMaps
      !0,
      // invertY
      Ne.TEXTURE_NEAREST_NEAREST
      // samplingMode
      // samplingMode
      // type
      // creationFlags
      // useSRGBBuffer
    );
    p.wrapU = je.WRAP_ADDRESSMODE, p.name = "blue-white-texture";
    const l = me(
      "edge",
      { points: [0, 0, 0, 1, 1, 1] },
      {
        // color: Color3.FromHexString(colorNameToHex(edgeColor))
        width: r.movingLineOpts.width,
        colorMode: Dt.COLOR_MODE_MULTIPLY
      }
    );
    let x = l.material;
    return x.emissiveTexture = p, x.disableLighting = !0, p.uScale = 5, t.scene.onBeforeRenderObservable.add(() => {
      p.uOffset += 0.04 * t.scene.getAnimationRatio();
    }), l;
  }
}
class Vt {
  constructor() {
    k(this, "map", /* @__PURE__ */ new Map());
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
const Ht = new Vt();
function Be(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var ke = function(e) {
  Wt(e);
  var t = Ut(e);
  return e.on = t.on, e.off = t.off, e.fire = t.fire, e;
};
function Ut(n) {
  var e = /* @__PURE__ */ Object.create(null);
  return {
    on: function(t, r, i) {
      if (typeof r != "function")
        throw new Error("callback is expected to be a function");
      var o = e[t];
      return o || (o = e[t] = []), o.push({ callback: r, ctx: i }), n;
    },
    off: function(t, r) {
      var i = typeof t > "u";
      if (i)
        return e = /* @__PURE__ */ Object.create(null), n;
      if (e[t]) {
        var o = typeof r != "function";
        if (o)
          delete e[t];
        else
          for (var s = e[t], f = 0; f < s.length; ++f)
            s[f].callback === r && s.splice(f, 1);
      }
      return n;
    },
    fire: function(t) {
      var r = e[t];
      if (!r)
        return n;
      var i;
      arguments.length > 1 && (i = Array.prototype.splice.call(arguments, 1));
      for (var o = 0; o < r.length; ++o) {
        var s = r[o];
        s.callback.apply(s.ctx, i);
      }
      return n;
    }
  };
}
function Wt(n) {
  if (!n)
    throw new Error("Eventify cannot use falsy object as events subject");
  for (var e = ["on", "fire", "off"], t = 0; t < e.length; ++t)
    if (n.hasOwnProperty(e[t]))
      throw new Error("Subject cannot be eventified, since it already has property '" + e[t] + "'");
}
var Xt = Jt, Yt = ke;
function Jt(n) {
  if (n = n || {}, "uniqueLinkId" in n && (console.warn(
    "ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",
    `
`,
    `Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`
  ), n.multigraph = n.uniqueLinkId), n.multigraph === void 0 && (n.multigraph = !1), typeof Map != "function")
    throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), r = {}, i = 0, o = n.multigraph ? b : M, s = [], f = E, a = E, h = E, d = E, c = {
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
    removeNode: u,
    /**
     * Gets node with given identifier. If node does not exist undefined value is returned.
     *
     * @param nodeId requested node identifier;
     *
     * @return {node} in with requested identifier or undefined if no such node exists.
     */
    getNode: g,
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
    endUpdate: d,
    /**
     * Removes all nodes and links from the graph.
     */
    clear: F,
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
    hasNode: g,
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
  return Yt(c), v(), c;
  function v() {
    var $ = c.on;
    c.on = C;
    function C() {
      return c.beginUpdate = h = T, c.endUpdate = d = U, f = p, a = l, c.on = $, $.apply(c, arguments);
    }
  }
  function p($, C) {
    s.push({
      link: $,
      changeType: C
    });
  }
  function l($, C) {
    s.push({
      node: $,
      changeType: C
    });
  }
  function x($, C) {
    if ($ === void 0)
      throw new Error("Invalid node identifier");
    h();
    var z = g($);
    return z ? (z.data = C, a(z, "update")) : (z = new Kt($, C), a(z, "add")), e.set($, z), d(), z;
  }
  function g($) {
    return e.get($);
  }
  function u($) {
    var C = g($);
    if (!C)
      return !1;
    h();
    var z = C.links;
    return z && (z.forEach(A), C.links = null), e.delete($), a(C, "remove"), d(), !0;
  }
  function m($, C, z) {
    h();
    var D = g($) || x($), Q = g(C) || x(C), O = o($, C, z), W = t.has(O.id);
    return t.set(O.id, O), Ve(D, O), $ !== C && Ve(Q, O), f(O, W ? "update" : "add"), d(), O;
  }
  function M($, C, z) {
    var D = pe($, C), Q = t.get(D);
    return Q ? (Q.data = z, Q) : new He($, C, z, D);
  }
  function b($, C, z) {
    var D = pe($, C), Q = r.hasOwnProperty(D);
    if (Q || I($, C)) {
      Q || (r[D] = 0);
      var O = "@" + ++r[D];
      D = pe($ + O, C + O);
    }
    return new He($, C, z, D);
  }
  function w() {
    return e.size;
  }
  function N() {
    return t.size;
  }
  function B($) {
    var C = g($);
    return C ? C.links : null;
  }
  function P($, C) {
    return C !== void 0 && ($ = I($, C)), A($);
  }
  function A($) {
    if (!$ || !t.get($.id))
      return !1;
    h(), t.delete($.id);
    var C = g($.fromId), z = g($.toId);
    return C && C.links.delete($), z && z.links.delete($), f($, "remove"), d(), !0;
  }
  function I($, C) {
    if (!($ === void 0 || C === void 0))
      return t.get(pe($, C));
  }
  function F() {
    h(), X(function($) {
      u($.id);
    }), d();
  }
  function q($) {
    if (typeof $ == "function")
      for (var C = t.values(), z = C.next(); !z.done; ) {
        if ($(z.value))
          return !0;
        z = C.next();
      }
  }
  function Z($, C, z) {
    var D = g($);
    if (D && D.links && typeof C == "function")
      return z ? y(D.links, $, C) : _(D.links, $, C);
  }
  function _($, C, z) {
    for (var D, Q = $.values(), O = Q.next(); !O.done; ) {
      var W = O.value, qt = W.fromId === C ? W.toId : W.fromId;
      if (D = z(e.get(qt), W), D)
        return !0;
      O = Q.next();
    }
  }
  function y($, C, z) {
    for (var D, Q = $.values(), O = Q.next(); !O.done; ) {
      var W = O.value;
      if (W.fromId === C && (D = z(e.get(W.toId), W), D))
        return !0;
      O = Q.next();
    }
  }
  function E() {
  }
  function T() {
    i += 1;
  }
  function U() {
    i -= 1, i === 0 && s.length > 0 && (c.fire("changed", s), s.length = 0);
  }
  function X($) {
    if (typeof $ != "function")
      throw new Error("Function is expected to iterate over graph nodes. You passed " + $);
    for (var C = e.values(), z = C.next(); !z.done; ) {
      if ($(z.value))
        return !0;
      z = C.next();
    }
  }
}
function Kt(n, e) {
  this.id = n, this.links = null, this.data = e;
}
function Ve(n, e) {
  n.links ? n.links.add(e) : n.links = /* @__PURE__ */ new Set([e]);
}
function He(n, e, t, r) {
  this.fromId = n, this.toId = e, this.data = t, this.id = r;
}
function pe(n, e) {
  return n.toString() + "👉 " + e.toString();
}
const Zt = /* @__PURE__ */ Be(Xt);
var Pe = { exports: {} }, le = { exports: {} }, st = function(e) {
  return e === 0 ? "x" : e === 1 ? "y" : e === 2 ? "z" : "c" + (e + 1);
};
const en = st;
var ae = function(e) {
  return t;
  function t(r, i) {
    let o = i && i.indent || 0, s = i && i.join !== void 0 ? i.join : `
`, f = Array(o + 1).join(" "), a = [];
    for (let h = 0; h < e; ++h) {
      let d = en(h), c = h === 0 ? "" : f;
      a.push(c + r.replace(/{var}/g, d));
    }
    return a.join(s);
  }
};
const ht = ae;
le.exports = tn;
le.exports.generateCreateBodyFunctionBody = ft;
le.exports.getVectorCode = dt;
le.exports.getBodyCode = ut;
function tn(n, e) {
  let t = ft(n, e), { Body: r } = new Function(t)();
  return r;
}
function ft(n, e) {
  return `
${dt(n, e)}
${ut(n)}
return {Body: Body, Vector: Vector};
`;
}
function ut(n) {
  let e = ht(n), t = e("{var}", { join: ", " });
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
function dt(n, e) {
  let t = ht(n), r = "";
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
var nn = le.exports, te = { exports: {} };
const ze = ae, ee = st;
te.exports = rn;
te.exports.generateQuadTreeFunctionBody = ct;
te.exports.getInsertStackCode = yt;
te.exports.getQuadNodeCode = vt;
te.exports.isSamePosition = lt;
te.exports.getChildBodyCode = gt;
te.exports.setChildBodyCode = pt;
function rn(n) {
  let e = ct(n);
  return new Function(e)();
}
function ct(n) {
  let e = ze(n), t = Math.pow(2, n);
  return `
${yt()}
${vt(n)}
${lt(n)}
${gt(n)}
${pt(n)}

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
${o()}
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
    let a = [], h = Array(f + 1).join(" ");
    for (let d = 0; d < n; ++d)
      a.push(h + `if (${ee(d)} > max_${ee(d)}) {`), a.push(h + `  quadIdx = quadIdx + ${Math.pow(2, d)};`), a.push(h + `  min_${ee(d)} = max_${ee(d)};`), a.push(h + `  max_${ee(d)} = node.max_${ee(d)};`), a.push(h + "}");
    return a.join(`
`);
  }
  function o() {
    let f = Array(11).join(" "), a = [];
    for (let h = 0; h < t; ++h)
      a.push(f + `if (node.quad${h}) {`), a.push(f + `  queue[pushIdx] = node.quad${h};`), a.push(f + "  queueLength += 1;"), a.push(f + "  pushIdx += 1;"), a.push(f + "}");
    return a.join(`
`);
  }
  function s(f) {
    let a = [];
    for (let h = 0; h < t; ++h)
      a.push(`${f}quad${h} = null;`);
    return a.join(`
`);
  }
}
function lt(n) {
  let e = ze(n);
  return `
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});", { indent: 2 })}
  
    return ${e("d{var} < 1e-8", { join: " && " })};
  }  
`;
}
function pt(n) {
  var e = Math.pow(2, n);
  return `
function setChild(node, idx, child) {
  ${t()}
}`;
  function t() {
    let r = [];
    for (let i = 0; i < e; ++i) {
      let o = i === 0 ? "  " : "  else ";
      r.push(`${o}if (idx === ${i}) node.quad${i} = child;`);
    }
    return r.join(`
`);
  }
}
function gt(n) {
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
function vt(n) {
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
  function i(o) {
    let s = [];
    for (let f = 0; f < t; ++f)
      s.push(`${o}quad${f} = null;`);
    return s.join(`
`);
  }
}
function yt() {
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
var on = te.exports, Le = { exports: {} };
Le.exports = sn;
Le.exports.generateFunctionBody = wt;
const an = ae;
function sn(n) {
  let e = wt(n);
  return new Function("bodies", "settings", "random", e);
}
function wt(n) {
  let e = an(n);
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
var hn = Le.exports, Se = { exports: {} };
const fn = ae;
Se.exports = un;
Se.exports.generateCreateDragForceFunctionBody = xt;
function un(n) {
  let e = xt(n);
  return new Function("options", e);
}
function xt(n) {
  return `
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${fn(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};", { indent: 6 })}
    }
  };
`;
}
var dn = Se.exports, qe = { exports: {} };
const cn = ae;
qe.exports = ln;
qe.exports.generateCreateSpringForceFunctionBody = mt;
function ln(n) {
  let e = mt(n);
  return new Function("options", "random", e);
}
function mt(n) {
  let e = cn(n);
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
var pn = qe.exports, Ae = { exports: {} };
const gn = ae;
Ae.exports = vn;
Ae.exports.generateIntegratorFunctionBody = bt;
function vn(n) {
  let e = bt(n);
  return new Function("bodies", "timeStep", "adaptiveTimeStepWeight", e);
}
function bt(n) {
  let e = gn(n);
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
var yn = Ae.exports, be, Ue;
function wn() {
  if (Ue)
    return be;
  Ue = 1, be = n;
  function n(e, t, r, i) {
    this.from = e, this.to = t, this.length = r, this.coefficient = i;
  }
  return be;
}
var _e, We;
function xn() {
  if (We)
    return _e;
  We = 1, _e = n;
  function n(e, t) {
    var r;
    if (e || (e = {}), t) {
      for (r in t)
        if (t.hasOwnProperty(r)) {
          var i = e.hasOwnProperty(r), o = typeof t[r], s = !i || typeof e[r] !== o;
          s ? e[r] = t[r] : o === "object" && (e[r] = n(e[r], t[r]));
        }
    }
    return e;
  }
  return _e;
}
var se = { exports: {} }, Xe;
function mn() {
  if (Xe)
    return se.exports;
  Xe = 1, se.exports = n, se.exports.random = n, se.exports.randomIterator = f;
  function n(a) {
    var h = typeof a == "number" ? a : +/* @__PURE__ */ new Date();
    return new e(h);
  }
  function e(a) {
    this.seed = a;
  }
  e.prototype.next = s, e.prototype.nextDouble = o, e.prototype.uniform = o, e.prototype.gaussian = t;
  function t() {
    var a, h, d;
    do
      h = this.nextDouble() * 2 - 1, d = this.nextDouble() * 2 - 1, a = h * h + d * d;
    while (a >= 1 || a === 0);
    return h * Math.sqrt(-2 * Math.log(a) / a);
  }
  e.prototype.levy = r;
  function r() {
    var a = 1.5, h = Math.pow(
      i(1 + a) * Math.sin(Math.PI * a / 2) / (i((1 + a) / 2) * a * Math.pow(2, (a - 1) / 2)),
      1 / a
    );
    return this.gaussian() * h / Math.pow(Math.abs(this.gaussian()), 1 / a);
  }
  function i(a) {
    return Math.sqrt(2 * Math.PI / a) * Math.pow(1 / Math.E * (a + 1 / (12 * a - 1 / (10 * a))), a);
  }
  function o() {
    var a = this.seed;
    return a = a + 2127912214 + (a << 12) & 4294967295, a = (a ^ 3345072700 ^ a >>> 19) & 4294967295, a = a + 374761393 + (a << 5) & 4294967295, a = (a + 3550635116 ^ a << 9) & 4294967295, a = a + 4251993797 + (a << 3) & 4294967295, a = (a ^ 3042594569 ^ a >>> 16) & 4294967295, this.seed = a, (a & 268435455) / 268435456;
  }
  function s(a) {
    return Math.floor(this.nextDouble() * a);
  }
  function f(a, h) {
    var d = h || n();
    if (typeof d.next != "function")
      throw new Error("customRandom does not match expected API: next() function is missing");
    return {
      forEach: v,
      /**
       * Shuffles array randomly, in place.
       */
      shuffle: c
    };
    function c() {
      var p, l, x;
      for (p = a.length - 1; p > 0; --p)
        l = d.next(p + 1), x = a[l], a[l] = a[p], a[p] = x;
      return a;
    }
    function v(p) {
      var l, x, g;
      for (l = a.length - 1; l > 0; --l)
        x = d.next(l + 1), g = a[x], a[x] = a[l], a[l] = g, p(g);
      a.length && p(a[0]);
    }
  }
  return se.exports;
}
var _t = Cn, bn = nn, _n = on, Mn = hn, Nn = dn, En = pn, $n = yn, Ye = {};
function Cn(n) {
  var e = wn(), t = xn(), r = ke;
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
  var i = Ye[n.dimensions];
  if (!i) {
    var o = n.dimensions;
    i = {
      Body: bn(o, n.debug),
      createQuadTree: _n(o),
      createBounds: Mn(o),
      createDragForce: Nn(o),
      createSpringForce: En(o),
      integrate: $n(o)
    }, Ye[o] = i;
  }
  var s = i.Body, f = i.createQuadTree, a = i.createBounds, h = i.createDragForce, d = i.createSpringForce, c = i.integrate, v = (y) => new s(y), p = mn().random(42), l = [], x = [], g = f(n, p), u = a(l, n, p), m = d(n, p), M = h(n), b = 0, w = [], N = /* @__PURE__ */ new Map(), B = 0;
  I("nbody", Z), I("spring", _);
  var P = {
    /**
     * Array of bodies, registered with current simulator
     *
     * Note: To add new body, use addBody() method. This property is only
     * exposed for testing/performance purposes.
     */
    bodies: l,
    quadTree: g,
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
    removeForce: F,
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
      var E = v(y);
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
          return l.splice(E, 1), l.length === 0 && u.reset(), !0;
      }
    },
    /**
     * Adds a spring to this simulation.
     *
     * @returns {Object} - a handle for a spring. If you want to later remove
     * spring pass it to removeSpring() method.
     */
    addSpring: function(y, E, T, U) {
      if (!y || !E)
        throw new Error("Cannot add null spring to force simulator");
      typeof T != "number" && (T = -1);
      var X = new e(y, E, T, U >= 0 ? U : -1);
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
      return u.getBestNewPosition(y);
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
      return y !== void 0 ? (n.gravity = y, g.options({ gravity: y }), this) : n.gravity;
    },
    theta: function(y) {
      return y !== void 0 ? (n.theta = y, g.options({ theta: y }), this) : n.theta;
    },
    /**
     * Returns pseudo-random number generator instance.
     */
    random: p
  };
  return Bn(n, P), r(P), P;
  function A() {
    return u.update(), u.box;
  }
  function I(y, E) {
    if (N.has(y))
      throw new Error("Force " + y + " is already added");
    N.set(y, E), w.push(E);
  }
  function F(y) {
    var E = w.indexOf(N.get(y));
    E < 0 || (w.splice(E, 1), N.delete(y));
  }
  function q() {
    return N;
  }
  function Z() {
    if (l.length !== 0) {
      g.insertBodies(l);
      for (var y = l.length; y--; ) {
        var E = l[y];
        E.isPinned || (E.reset(), g.updateBodyForce(E), M.update(E));
      }
    }
  }
  function _() {
    for (var y = x.length; y--; )
      m.update(x[y]);
  }
}
function Bn(n, e) {
  for (var t in n)
    kn(n, e, t);
}
function kn(n, e, t) {
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
Pe.exports = zn;
Pe.exports.simulator = _t;
var Pn = ke;
function zn(n, e) {
  if (!n)
    throw new Error("Graph structure cannot be undefined");
  var t = e && e.createSimulator || _t, r = t(e);
  if (Array.isArray(e))
    throw new Error("Physics settings is expected to be an object");
  var i = n.version > 19 ? Z : q;
  e && typeof e.nodeMass == "function" && (i = e.nodeMass);
  var o = /* @__PURE__ */ new Map(), s = {}, f = 0, a = r.settings.springTransform || Ln;
  M(), g();
  var h = !1, d = {
    /**
     * Performs one step of iterative layout algorithm
     *
     * @returns {boolean} true if the system should be considered stable; False otherwise.
     * The system is stable if no further call to `step()` can improve the layout.
     */
    step: function() {
      if (f === 0)
        return c(!0), !0;
      var _ = r.step();
      d.lastMove = _, d.fire("step");
      var y = _ / f, E = y <= 0.01;
      return c(E), E;
    },
    /**
     * For a given `nodeId` returns position
     */
    getNodePosition: function(_) {
      return F(_).pos;
    },
    /**
     * Sets position of a node to a given coordinates
     * @param {string} nodeId node identifier
     * @param {number} x position of a node
     * @param {number} y position of a node
     * @param {number=} z position of node (only if applicable to body)
     */
    setNodePosition: function(_) {
      var y = F(_);
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
    forEachBody: v,
    /*
     * Requests layout algorithm to pin/unpin node to its current position
     * Pinned nodes should not be affected by layout algorithm and always
     * remain at their position
     */
    pinNode: function(_, y) {
      var E = F(_.id);
      E.isPinned = !!y;
    },
    /**
     * Checks whether given graph's node is currently pinned
     */
    isNodePinned: function(_) {
      return F(_.id).isPinned;
    },
    /**
     * Request to release all resources
     */
    dispose: function() {
      n.off("changed", m), d.fire("disposed");
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
    getForceVectorLength: p,
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
  return Pn(d), d;
  function c(_) {
    h !== _ && (h = _, u(_));
  }
  function v(_) {
    o.forEach(_);
  }
  function p() {
    var _ = 0, y = 0;
    return v(function(E) {
      _ += Math.abs(E.force.x), y += Math.abs(E.force.y);
    }), Math.sqrt(_ * _ + y * y);
  }
  function l(_, y) {
    var E;
    if (y === void 0)
      typeof _ != "object" ? E = _ : E = _.id;
    else {
      var T = n.hasLink(_, y);
      if (!T)
        return;
      E = T.id;
    }
    return s[E];
  }
  function x(_) {
    return o.get(_);
  }
  function g() {
    n.on("changed", m);
  }
  function u(_) {
    d.fire("stable", _);
  }
  function m(_) {
    for (var y = 0; y < _.length; ++y) {
      var E = _[y];
      E.changeType === "add" ? (E.node && b(E.node.id), E.link && N(E.link)) : E.changeType === "remove" && (E.node && w(E.node), E.link && B(E.link));
    }
    f = n.getNodesCount();
  }
  function M() {
    f = 0, n.forEachNode(function(_) {
      b(_.id), f += 1;
    }), n.forEachLink(N);
  }
  function b(_) {
    var y = o.get(_);
    if (!y) {
      var E = n.getNode(_);
      if (!E)
        throw new Error("initBody() was called with unknown node id");
      var T = E.position;
      if (!T) {
        var U = P(E);
        T = r.getBestNewBodyPosition(U);
      }
      y = r.addBodyAt(T), y.id = _, o.set(_, y), A(_), I(E) && (y.isPinned = !0);
    }
  }
  function w(_) {
    var y = _.id, E = o.get(y);
    E && (o.delete(y), r.removeBody(E));
  }
  function N(_) {
    A(_.fromId), A(_.toId);
    var y = o.get(_.fromId), E = o.get(_.toId), T = r.addSpring(y, E, _.length);
    a(_, T), s[_.id] = T;
  }
  function B(_) {
    var y = s[_.id];
    if (y) {
      var E = n.getNode(_.fromId), T = n.getNode(_.toId);
      E && A(E.id), T && A(T.id), delete s[_.id], r.removeSpring(y);
    }
  }
  function P(_) {
    var y = [];
    if (!_.links)
      return y;
    for (var E = Math.min(_.links.length, 2), T = 0; T < E; ++T) {
      var U = _.links[T], X = U.fromId !== _.id ? o.get(U.fromId) : o.get(U.toId);
      X && X.pos && y.push(X);
    }
    return y;
  }
  function A(_) {
    var y = o.get(_);
    if (y.mass = i(_), Number.isNaN(y.mass))
      throw new Error("Node mass should be a number");
  }
  function I(_) {
    return _ && (_.isPinned || _.data && _.data.isPinned);
  }
  function F(_) {
    var y = o.get(_);
    return y || (b(_), y = o.get(_)), y;
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
function Ln() {
}
var Sn = Pe.exports;
const qn = /* @__PURE__ */ Be(Sn);
class An {
  constructor() {
    k(this, "ngraph");
    k(this, "ngraphLayout");
    k(this, "nodeMapping", /* @__PURE__ */ new Map());
    k(this, "edgeMapping", /* @__PURE__ */ new Map());
    this.ngraph = Zt(), this.ngraphLayout = qn(this.ngraph, { dimensions: 3 });
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
function In(n, e, t) {
  var r, i = 1;
  n == null && (n = 0), e == null && (e = 0), t == null && (t = 0);
  function o() {
    var s, f = r.length, a, h = 0, d = 0, c = 0;
    for (s = 0; s < f; ++s)
      a = r[s], h += a.x || 0, d += a.y || 0, c += a.z || 0;
    for (h = (h / f - n) * i, d = (d / f - e) * i, c = (c / f - t) * i, s = 0; s < f; ++s)
      a = r[s], h && (a.x -= h), d && (a.y -= d), c && (a.z -= c);
  }
  return o.initialize = function(s) {
    r = s;
  }, o.x = function(s) {
    return arguments.length ? (n = +s, o) : n;
  }, o.y = function(s) {
    return arguments.length ? (e = +s, o) : e;
  }, o.z = function(s) {
    return arguments.length ? (t = +s, o) : t;
  }, o.strength = function(s) {
    return arguments.length ? (i = +s, o) : i;
  }, o;
}
function Fn(n) {
  const e = +this._x.call(null, n);
  return Mt(this.cover(e), e, n);
}
function Mt(n, e, t) {
  if (isNaN(e))
    return n;
  var r, i = n._root, o = { data: t }, s = n._x0, f = n._x1, a, h, d, c, v;
  if (!i)
    return n._root = o, n;
  for (; i.length; )
    if ((d = e >= (a = (s + f) / 2)) ? s = a : f = a, r = i, !(i = i[c = +d]))
      return r[c] = o, n;
  if (h = +n._x.call(null, i.data), e === h)
    return o.next = i, r ? r[c] = o : n._root = o, n;
  do
    r = r ? r[c] = new Array(2) : n._root = new Array(2), (d = e >= (a = (s + f) / 2)) ? s = a : f = a;
  while ((c = +d) == (v = +(h >= a)));
  return r[v] = i, r[c] = o, n;
}
function Tn(n) {
  Array.isArray(n) || (n = Array.from(n));
  const e = n.length, t = new Float64Array(e);
  let r = 1 / 0, i = -1 / 0;
  for (let o = 0, s; o < e; ++o)
    isNaN(s = +this._x.call(null, n[o])) || (t[o] = s, s < r && (r = s), s > i && (i = s));
  if (r > i)
    return this;
  this.cover(r).cover(i);
  for (let o = 0; o < e; ++o)
    Mt(this, t[o], n[o]);
  return this;
}
function Dn(n) {
  if (isNaN(n = +n))
    return this;
  var e = this._x0, t = this._x1;
  if (isNaN(e))
    t = (e = Math.floor(n)) + 1;
  else {
    for (var r = t - e || 1, i = this._root, o, s; e > n || n >= t; )
      switch (s = +(n < e), o = new Array(2), o[s] = i, i = o, r *= 2, s) {
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
function On() {
  var n = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        n.push(e.data);
      while (e = e.next);
  }), n;
}
function Gn(n) {
  return arguments.length ? this.cover(+n[0][0]).cover(+n[1][0]) : isNaN(this._x0) ? void 0 : [[this._x0], [this._x1]];
}
function K(n, e, t) {
  this.node = n, this.x0 = e, this.x1 = t;
}
function jn(n, e) {
  var t, r = this._x0, i, o, s = this._x1, f = [], a = this._root, h, d;
  for (a && f.push(new K(a, r, s)), e == null ? e = 1 / 0 : (r = n - e, s = n + e); h = f.pop(); )
    if (!(!(a = h.node) || (i = h.x0) > s || (o = h.x1) < r))
      if (a.length) {
        var c = (i + o) / 2;
        f.push(
          new K(a[1], c, o),
          new K(a[0], i, c)
        ), (d = +(n >= c)) && (h = f[f.length - 1], f[f.length - 1] = f[f.length - 1 - d], f[f.length - 1 - d] = h);
      } else {
        var v = Math.abs(n - +this._x.call(null, a.data));
        v < e && (e = v, r = n - v, s = n + v, t = a.data);
      }
  return t;
}
function Rn(n) {
  if (isNaN(a = +this._x.call(null, n)))
    return this;
  var e, t = this._root, r, i, o, s = this._x0, f = this._x1, a, h, d, c, v;
  if (!t)
    return this;
  if (t.length)
    for (; ; ) {
      if ((d = a >= (h = (s + f) / 2)) ? s = h : f = h, e = t, !(t = t[c = +d]))
        return this;
      if (!t.length)
        break;
      e[c + 1 & 1] && (r = e, v = c);
    }
  for (; t.data !== n; )
    if (i = t, !(t = t.next))
      return this;
  return (o = t.next) && delete t.next, i ? (o ? i.next = o : delete i.next, this) : e ? (o ? e[c] = o : delete e[c], (t = e[0] || e[1]) && t === (e[1] || e[0]) && !t.length && (r ? r[v] = t : this._root = t), this) : (this._root = o, this);
}
function Qn(n) {
  for (var e = 0, t = n.length; e < t; ++e)
    this.remove(n[e]);
  return this;
}
function Vn() {
  return this._root;
}
function Hn() {
  var n = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++n;
      while (e = e.next);
  }), n;
}
function Un(n) {
  var e = [], t, r = this._root, i, o, s;
  for (r && e.push(new K(r, this._x0, this._x1)); t = e.pop(); )
    if (!n(r = t.node, o = t.x0, s = t.x1) && r.length) {
      var f = (o + s) / 2;
      (i = r[1]) && e.push(new K(i, f, s)), (i = r[0]) && e.push(new K(i, o, f));
    }
  return this;
}
function Wn(n) {
  var e = [], t = [], r;
  for (this._root && e.push(new K(this._root, this._x0, this._x1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var o, s = r.x0, f = r.x1, a = (s + f) / 2;
      (o = i[0]) && e.push(new K(o, s, a)), (o = i[1]) && e.push(new K(o, a, f));
    }
    t.push(r);
  }
  for (; r = t.pop(); )
    n(r.node, r.x0, r.x1);
  return this;
}
function Xn(n) {
  return n[0];
}
function Yn(n) {
  return arguments.length ? (this._x = n, this) : this._x;
}
function Nt(n, e) {
  var t = new Ie(e ?? Xn, NaN, NaN);
  return n == null ? t : t.addAll(n);
}
function Ie(n, e, t) {
  this._x = n, this._x0 = e, this._x1 = t, this._root = void 0;
}
function Je(n) {
  for (var e = { data: n.data }, t = e; n = n.next; )
    t = t.next = { data: n.data };
  return e;
}
var V = Nt.prototype = Ie.prototype;
V.copy = function() {
  var n = new Ie(this._x, this._x0, this._x1), e = this._root, t, r;
  if (!e)
    return n;
  if (!e.length)
    return n._root = Je(e), n;
  for (t = [{ source: e, target: n._root = new Array(2) }]; e = t.pop(); )
    for (var i = 0; i < 2; ++i)
      (r = e.source[i]) && (r.length ? t.push({ source: r, target: e.target[i] = new Array(2) }) : e.target[i] = Je(r));
  return n;
};
V.add = Fn;
V.addAll = Tn;
V.cover = Dn;
V.data = On;
V.extent = Gn;
V.find = jn;
V.remove = Rn;
V.removeAll = Qn;
V.root = Vn;
V.size = Hn;
V.visit = Un;
V.visitAfter = Wn;
V.x = Yn;
function Jn(n) {
  const e = +this._x.call(null, n), t = +this._y.call(null, n);
  return Et(this.cover(e, t), e, t, n);
}
function Et(n, e, t, r) {
  if (isNaN(e) || isNaN(t))
    return n;
  var i, o = n._root, s = { data: r }, f = n._x0, a = n._y0, h = n._x1, d = n._y1, c, v, p, l, x, g, u, m;
  if (!o)
    return n._root = s, n;
  for (; o.length; )
    if ((x = e >= (c = (f + h) / 2)) ? f = c : h = c, (g = t >= (v = (a + d) / 2)) ? a = v : d = v, i = o, !(o = o[u = g << 1 | x]))
      return i[u] = s, n;
  if (p = +n._x.call(null, o.data), l = +n._y.call(null, o.data), e === p && t === l)
    return s.next = o, i ? i[u] = s : n._root = s, n;
  do
    i = i ? i[u] = new Array(4) : n._root = new Array(4), (x = e >= (c = (f + h) / 2)) ? f = c : h = c, (g = t >= (v = (a + d) / 2)) ? a = v : d = v;
  while ((u = g << 1 | x) === (m = (l >= v) << 1 | p >= c));
  return i[m] = o, i[u] = s, n;
}
function Kn(n) {
  var e, t, r = n.length, i, o, s = new Array(r), f = new Array(r), a = 1 / 0, h = 1 / 0, d = -1 / 0, c = -1 / 0;
  for (t = 0; t < r; ++t)
    isNaN(i = +this._x.call(null, e = n[t])) || isNaN(o = +this._y.call(null, e)) || (s[t] = i, f[t] = o, i < a && (a = i), i > d && (d = i), o < h && (h = o), o > c && (c = o));
  if (a > d || h > c)
    return this;
  for (this.cover(a, h).cover(d, c), t = 0; t < r; ++t)
    Et(this, s[t], f[t], n[t]);
  return this;
}
function Zn(n, e) {
  if (isNaN(n = +n) || isNaN(e = +e))
    return this;
  var t = this._x0, r = this._y0, i = this._x1, o = this._y1;
  if (isNaN(t))
    i = (t = Math.floor(n)) + 1, o = (r = Math.floor(e)) + 1;
  else {
    for (var s = i - t || 1, f = this._root, a, h; t > n || n >= i || r > e || e >= o; )
      switch (h = (e < r) << 1 | n < t, a = new Array(4), a[h] = f, f = a, s *= 2, h) {
        case 0:
          i = t + s, o = r + s;
          break;
        case 1:
          t = i - s, o = r + s;
          break;
        case 2:
          i = t + s, r = o - s;
          break;
        case 3:
          t = i - s, r = o - s;
          break;
      }
    this._root && this._root.length && (this._root = f);
  }
  return this._x0 = t, this._y0 = r, this._x1 = i, this._y1 = o, this;
}
function er() {
  var n = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        n.push(e.data);
      while (e = e.next);
  }), n;
}
function tr(n) {
  return arguments.length ? this.cover(+n[0][0], +n[0][1]).cover(+n[1][0], +n[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function j(n, e, t, r, i) {
  this.node = n, this.x0 = e, this.y0 = t, this.x1 = r, this.y1 = i;
}
function nr(n, e, t) {
  var r, i = this._x0, o = this._y0, s, f, a, h, d = this._x1, c = this._y1, v = [], p = this._root, l, x;
  for (p && v.push(new j(p, i, o, d, c)), t == null ? t = 1 / 0 : (i = n - t, o = e - t, d = n + t, c = e + t, t *= t); l = v.pop(); )
    if (!(!(p = l.node) || (s = l.x0) > d || (f = l.y0) > c || (a = l.x1) < i || (h = l.y1) < o))
      if (p.length) {
        var g = (s + a) / 2, u = (f + h) / 2;
        v.push(
          new j(p[3], g, u, a, h),
          new j(p[2], s, u, g, h),
          new j(p[1], g, f, a, u),
          new j(p[0], s, f, g, u)
        ), (x = (e >= u) << 1 | n >= g) && (l = v[v.length - 1], v[v.length - 1] = v[v.length - 1 - x], v[v.length - 1 - x] = l);
      } else {
        var m = n - +this._x.call(null, p.data), M = e - +this._y.call(null, p.data), b = m * m + M * M;
        if (b < t) {
          var w = Math.sqrt(t = b);
          i = n - w, o = e - w, d = n + w, c = e + w, r = p.data;
        }
      }
  return r;
}
function rr(n) {
  if (isNaN(d = +this._x.call(null, n)) || isNaN(c = +this._y.call(null, n)))
    return this;
  var e, t = this._root, r, i, o, s = this._x0, f = this._y0, a = this._x1, h = this._y1, d, c, v, p, l, x, g, u;
  if (!t)
    return this;
  if (t.length)
    for (; ; ) {
      if ((l = d >= (v = (s + a) / 2)) ? s = v : a = v, (x = c >= (p = (f + h) / 2)) ? f = p : h = p, e = t, !(t = t[g = x << 1 | l]))
        return this;
      if (!t.length)
        break;
      (e[g + 1 & 3] || e[g + 2 & 3] || e[g + 3 & 3]) && (r = e, u = g);
    }
  for (; t.data !== n; )
    if (i = t, !(t = t.next))
      return this;
  return (o = t.next) && delete t.next, i ? (o ? i.next = o : delete i.next, this) : e ? (o ? e[g] = o : delete e[g], (t = e[0] || e[1] || e[2] || e[3]) && t === (e[3] || e[2] || e[1] || e[0]) && !t.length && (r ? r[u] = t : this._root = t), this) : (this._root = o, this);
}
function ir(n) {
  for (var e = 0, t = n.length; e < t; ++e)
    this.remove(n[e]);
  return this;
}
function or() {
  return this._root;
}
function ar() {
  var n = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++n;
      while (e = e.next);
  }), n;
}
function sr(n) {
  var e = [], t, r = this._root, i, o, s, f, a;
  for (r && e.push(new j(r, this._x0, this._y0, this._x1, this._y1)); t = e.pop(); )
    if (!n(r = t.node, o = t.x0, s = t.y0, f = t.x1, a = t.y1) && r.length) {
      var h = (o + f) / 2, d = (s + a) / 2;
      (i = r[3]) && e.push(new j(i, h, d, f, a)), (i = r[2]) && e.push(new j(i, o, d, h, a)), (i = r[1]) && e.push(new j(i, h, s, f, d)), (i = r[0]) && e.push(new j(i, o, s, h, d));
    }
  return this;
}
function hr(n) {
  var e = [], t = [], r;
  for (this._root && e.push(new j(this._root, this._x0, this._y0, this._x1, this._y1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var o, s = r.x0, f = r.y0, a = r.x1, h = r.y1, d = (s + a) / 2, c = (f + h) / 2;
      (o = i[0]) && e.push(new j(o, s, f, d, c)), (o = i[1]) && e.push(new j(o, d, f, a, c)), (o = i[2]) && e.push(new j(o, s, c, d, h)), (o = i[3]) && e.push(new j(o, d, c, a, h));
    }
    t.push(r);
  }
  for (; r = t.pop(); )
    n(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function fr(n) {
  return n[0];
}
function ur(n) {
  return arguments.length ? (this._x = n, this) : this._x;
}
function dr(n) {
  return n[1];
}
function cr(n) {
  return arguments.length ? (this._y = n, this) : this._y;
}
function $t(n, e, t) {
  var r = new Fe(e ?? fr, t ?? dr, NaN, NaN, NaN, NaN);
  return n == null ? r : r.addAll(n);
}
function Fe(n, e, t, r, i, o) {
  this._x = n, this._y = e, this._x0 = t, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0;
}
function Ke(n) {
  for (var e = { data: n.data }, t = e; n = n.next; )
    t = t.next = { data: n.data };
  return e;
}
var R = $t.prototype = Fe.prototype;
R.copy = function() {
  var n = new Fe(this._x, this._y, this._x0, this._y0, this._x1, this._y1), e = this._root, t, r;
  if (!e)
    return n;
  if (!e.length)
    return n._root = Ke(e), n;
  for (t = [{ source: e, target: n._root = new Array(4) }]; e = t.pop(); )
    for (var i = 0; i < 4; ++i)
      (r = e.source[i]) && (r.length ? t.push({ source: r, target: e.target[i] = new Array(4) }) : e.target[i] = Ke(r));
  return n;
};
R.add = Jn;
R.addAll = Kn;
R.cover = Zn;
R.data = er;
R.extent = tr;
R.find = nr;
R.remove = rr;
R.removeAll = ir;
R.root = or;
R.size = ar;
R.visit = sr;
R.visitAfter = hr;
R.x = ur;
R.y = cr;
function lr(n) {
  const e = +this._x.call(null, n), t = +this._y.call(null, n), r = +this._z.call(null, n);
  return Ct(this.cover(e, t, r), e, t, r, n);
}
function Ct(n, e, t, r, i) {
  if (isNaN(e) || isNaN(t) || isNaN(r))
    return n;
  var o, s = n._root, f = { data: i }, a = n._x0, h = n._y0, d = n._z0, c = n._x1, v = n._y1, p = n._z1, l, x, g, u, m, M, b, w, N, B, P;
  if (!s)
    return n._root = f, n;
  for (; s.length; )
    if ((b = e >= (l = (a + c) / 2)) ? a = l : c = l, (w = t >= (x = (h + v) / 2)) ? h = x : v = x, (N = r >= (g = (d + p) / 2)) ? d = g : p = g, o = s, !(s = s[B = N << 2 | w << 1 | b]))
      return o[B] = f, n;
  if (u = +n._x.call(null, s.data), m = +n._y.call(null, s.data), M = +n._z.call(null, s.data), e === u && t === m && r === M)
    return f.next = s, o ? o[B] = f : n._root = f, n;
  do
    o = o ? o[B] = new Array(8) : n._root = new Array(8), (b = e >= (l = (a + c) / 2)) ? a = l : c = l, (w = t >= (x = (h + v) / 2)) ? h = x : v = x, (N = r >= (g = (d + p) / 2)) ? d = g : p = g;
  while ((B = N << 2 | w << 1 | b) === (P = (M >= g) << 2 | (m >= x) << 1 | u >= l));
  return o[P] = s, o[B] = f, n;
}
function pr(n) {
  Array.isArray(n) || (n = Array.from(n));
  const e = n.length, t = new Float64Array(e), r = new Float64Array(e), i = new Float64Array(e);
  let o = 1 / 0, s = 1 / 0, f = 1 / 0, a = -1 / 0, h = -1 / 0, d = -1 / 0;
  for (let c = 0, v, p, l, x; c < e; ++c)
    isNaN(p = +this._x.call(null, v = n[c])) || isNaN(l = +this._y.call(null, v)) || isNaN(x = +this._z.call(null, v)) || (t[c] = p, r[c] = l, i[c] = x, p < o && (o = p), p > a && (a = p), l < s && (s = l), l > h && (h = l), x < f && (f = x), x > d && (d = x));
  if (o > a || s > h || f > d)
    return this;
  this.cover(o, s, f).cover(a, h, d);
  for (let c = 0; c < e; ++c)
    Ct(this, t[c], r[c], i[c], n[c]);
  return this;
}
function gr(n, e, t) {
  if (isNaN(n = +n) || isNaN(e = +e) || isNaN(t = +t))
    return this;
  var r = this._x0, i = this._y0, o = this._z0, s = this._x1, f = this._y1, a = this._z1;
  if (isNaN(r))
    s = (r = Math.floor(n)) + 1, f = (i = Math.floor(e)) + 1, a = (o = Math.floor(t)) + 1;
  else {
    for (var h = s - r || 1, d = this._root, c, v; r > n || n >= s || i > e || e >= f || o > t || t >= a; )
      switch (v = (t < o) << 2 | (e < i) << 1 | n < r, c = new Array(8), c[v] = d, d = c, h *= 2, v) {
        case 0:
          s = r + h, f = i + h, a = o + h;
          break;
        case 1:
          r = s - h, f = i + h, a = o + h;
          break;
        case 2:
          s = r + h, i = f - h, a = o + h;
          break;
        case 3:
          r = s - h, i = f - h, a = o + h;
          break;
        case 4:
          s = r + h, f = i + h, o = a - h;
          break;
        case 5:
          r = s - h, f = i + h, o = a - h;
          break;
        case 6:
          s = r + h, i = f - h, o = a - h;
          break;
        case 7:
          r = s - h, i = f - h, o = a - h;
          break;
      }
    this._root && this._root.length && (this._root = d);
  }
  return this._x0 = r, this._y0 = i, this._z0 = o, this._x1 = s, this._y1 = f, this._z1 = a, this;
}
function vr() {
  var n = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        n.push(e.data);
      while (e = e.next);
  }), n;
}
function yr(n) {
  return arguments.length ? this.cover(+n[0][0], +n[0][1], +n[0][2]).cover(+n[1][0], +n[1][1], +n[1][2]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0, this._z0], [this._x1, this._y1, this._z1]];
}
function S(n, e, t, r, i, o, s) {
  this.node = n, this.x0 = e, this.y0 = t, this.z0 = r, this.x1 = i, this.y1 = o, this.z1 = s;
}
function wr(n, e, t, r) {
  var i, o = this._x0, s = this._y0, f = this._z0, a, h, d, c, v, p, l = this._x1, x = this._y1, g = this._z1, u = [], m = this._root, M, b;
  for (m && u.push(new S(m, o, s, f, l, x, g)), r == null ? r = 1 / 0 : (o = n - r, s = e - r, f = t - r, l = n + r, x = e + r, g = t + r, r *= r); M = u.pop(); )
    if (!(!(m = M.node) || (a = M.x0) > l || (h = M.y0) > x || (d = M.z0) > g || (c = M.x1) < o || (v = M.y1) < s || (p = M.z1) < f))
      if (m.length) {
        var w = (a + c) / 2, N = (h + v) / 2, B = (d + p) / 2;
        u.push(
          new S(m[7], w, N, B, c, v, p),
          new S(m[6], a, N, B, w, v, p),
          new S(m[5], w, h, B, c, N, p),
          new S(m[4], a, h, B, w, N, p),
          new S(m[3], w, N, d, c, v, B),
          new S(m[2], a, N, d, w, v, B),
          new S(m[1], w, h, d, c, N, B),
          new S(m[0], a, h, d, w, N, B)
        ), (b = (t >= B) << 2 | (e >= N) << 1 | n >= w) && (M = u[u.length - 1], u[u.length - 1] = u[u.length - 1 - b], u[u.length - 1 - b] = M);
      } else {
        var P = n - +this._x.call(null, m.data), A = e - +this._y.call(null, m.data), I = t - +this._z.call(null, m.data), F = P * P + A * A + I * I;
        if (F < r) {
          var q = Math.sqrt(r = F);
          o = n - q, s = e - q, f = t - q, l = n + q, x = e + q, g = t + q, i = m.data;
        }
      }
  return i;
}
function xr(n) {
  if (isNaN(v = +this._x.call(null, n)) || isNaN(p = +this._y.call(null, n)) || isNaN(l = +this._z.call(null, n)))
    return this;
  var e, t = this._root, r, i, o, s = this._x0, f = this._y0, a = this._z0, h = this._x1, d = this._y1, c = this._z1, v, p, l, x, g, u, m, M, b, w, N;
  if (!t)
    return this;
  if (t.length)
    for (; ; ) {
      if ((m = v >= (x = (s + h) / 2)) ? s = x : h = x, (M = p >= (g = (f + d) / 2)) ? f = g : d = g, (b = l >= (u = (a + c) / 2)) ? a = u : c = u, e = t, !(t = t[w = b << 2 | M << 1 | m]))
        return this;
      if (!t.length)
        break;
      (e[w + 1 & 7] || e[w + 2 & 7] || e[w + 3 & 7] || e[w + 4 & 7] || e[w + 5 & 7] || e[w + 6 & 7] || e[w + 7 & 7]) && (r = e, N = w);
    }
  for (; t.data !== n; )
    if (i = t, !(t = t.next))
      return this;
  return (o = t.next) && delete t.next, i ? (o ? i.next = o : delete i.next, this) : e ? (o ? e[w] = o : delete e[w], (t = e[0] || e[1] || e[2] || e[3] || e[4] || e[5] || e[6] || e[7]) && t === (e[7] || e[6] || e[5] || e[4] || e[3] || e[2] || e[1] || e[0]) && !t.length && (r ? r[N] = t : this._root = t), this) : (this._root = o, this);
}
function mr(n) {
  for (var e = 0, t = n.length; e < t; ++e)
    this.remove(n[e]);
  return this;
}
function br() {
  return this._root;
}
function _r() {
  var n = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++n;
      while (e = e.next);
  }), n;
}
function Mr(n) {
  var e = [], t, r = this._root, i, o, s, f, a, h, d;
  for (r && e.push(new S(r, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); t = e.pop(); )
    if (!n(r = t.node, o = t.x0, s = t.y0, f = t.z0, a = t.x1, h = t.y1, d = t.z1) && r.length) {
      var c = (o + a) / 2, v = (s + h) / 2, p = (f + d) / 2;
      (i = r[7]) && e.push(new S(i, c, v, p, a, h, d)), (i = r[6]) && e.push(new S(i, o, v, p, c, h, d)), (i = r[5]) && e.push(new S(i, c, s, p, a, v, d)), (i = r[4]) && e.push(new S(i, o, s, p, c, v, d)), (i = r[3]) && e.push(new S(i, c, v, f, a, h, p)), (i = r[2]) && e.push(new S(i, o, v, f, c, h, p)), (i = r[1]) && e.push(new S(i, c, s, f, a, v, p)), (i = r[0]) && e.push(new S(i, o, s, f, c, v, p));
    }
  return this;
}
function Nr(n) {
  var e = [], t = [], r;
  for (this._root && e.push(new S(this._root, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var o, s = r.x0, f = r.y0, a = r.z0, h = r.x1, d = r.y1, c = r.z1, v = (s + h) / 2, p = (f + d) / 2, l = (a + c) / 2;
      (o = i[0]) && e.push(new S(o, s, f, a, v, p, l)), (o = i[1]) && e.push(new S(o, v, f, a, h, p, l)), (o = i[2]) && e.push(new S(o, s, p, a, v, d, l)), (o = i[3]) && e.push(new S(o, v, p, a, h, d, l)), (o = i[4]) && e.push(new S(o, s, f, l, v, p, c)), (o = i[5]) && e.push(new S(o, v, f, l, h, p, c)), (o = i[6]) && e.push(new S(o, s, p, l, v, d, c)), (o = i[7]) && e.push(new S(o, v, p, l, h, d, c));
    }
    t.push(r);
  }
  for (; r = t.pop(); )
    n(r.node, r.x0, r.y0, r.z0, r.x1, r.y1, r.z1);
  return this;
}
function Er(n) {
  return n[0];
}
function $r(n) {
  return arguments.length ? (this._x = n, this) : this._x;
}
function Cr(n) {
  return n[1];
}
function Br(n) {
  return arguments.length ? (this._y = n, this) : this._y;
}
function kr(n) {
  return n[2];
}
function Pr(n) {
  return arguments.length ? (this._z = n, this) : this._z;
}
function Bt(n, e, t, r) {
  var i = new Te(e ?? Er, t ?? Cr, r ?? kr, NaN, NaN, NaN, NaN, NaN, NaN);
  return n == null ? i : i.addAll(n);
}
function Te(n, e, t, r, i, o, s, f, a) {
  this._x = n, this._y = e, this._z = t, this._x0 = r, this._y0 = i, this._z0 = o, this._x1 = s, this._y1 = f, this._z1 = a, this._root = void 0;
}
function Ze(n) {
  for (var e = { data: n.data }, t = e; n = n.next; )
    t = t.next = { data: n.data };
  return e;
}
var G = Bt.prototype = Te.prototype;
G.copy = function() {
  var n = new Te(this._x, this._y, this._z, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1), e = this._root, t, r;
  if (!e)
    return n;
  if (!e.length)
    return n._root = Ze(e), n;
  for (t = [{ source: e, target: n._root = new Array(8) }]; e = t.pop(); )
    for (var i = 0; i < 8; ++i)
      (r = e.source[i]) && (r.length ? t.push({ source: r, target: e.target[i] = new Array(8) }) : e.target[i] = Ze(r));
  return n;
};
G.add = lr;
G.addAll = pr;
G.cover = gr;
G.data = vr;
G.extent = yr;
G.find = wr;
G.remove = xr;
G.removeAll = mr;
G.root = br;
G.size = _r;
G.visit = Mr;
G.visitAfter = Nr;
G.x = $r;
G.y = Br;
G.z = Pr;
function de(n) {
  return function() {
    return n;
  };
}
function J(n) {
  return (n() - 0.5) * 1e-6;
}
function zr(n) {
  return n.index;
}
function et(n, e) {
  var t = n.get(e);
  if (!t)
    throw new Error("node not found: " + e);
  return t;
}
function Lr(n) {
  var e = zr, t = v, r, i = de(30), o, s, f, a, h, d, c = 1;
  n == null && (n = []);
  function v(u) {
    return 1 / Math.min(a[u.source.index], a[u.target.index]);
  }
  function p(u) {
    for (var m = 0, M = n.length; m < c; ++m)
      for (var b = 0, w, N, B, P = 0, A = 0, I = 0, F, q; b < M; ++b)
        w = n[b], N = w.source, B = w.target, P = B.x + B.vx - N.x - N.vx || J(d), f > 1 && (A = B.y + B.vy - N.y - N.vy || J(d)), f > 2 && (I = B.z + B.vz - N.z - N.vz || J(d)), F = Math.sqrt(P * P + A * A + I * I), F = (F - o[b]) / F * u * r[b], P *= F, A *= F, I *= F, B.vx -= P * (q = h[b]), f > 1 && (B.vy -= A * q), f > 2 && (B.vz -= I * q), N.vx += P * (q = 1 - q), f > 1 && (N.vy += A * q), f > 2 && (N.vz += I * q);
  }
  function l() {
    if (s) {
      var u, m = s.length, M = n.length, b = new Map(s.map((N, B) => [e(N, B, s), N])), w;
      for (u = 0, a = new Array(m); u < M; ++u)
        w = n[u], w.index = u, typeof w.source != "object" && (w.source = et(b, w.source)), typeof w.target != "object" && (w.target = et(b, w.target)), a[w.source.index] = (a[w.source.index] || 0) + 1, a[w.target.index] = (a[w.target.index] || 0) + 1;
      for (u = 0, h = new Array(M); u < M; ++u)
        w = n[u], h[u] = a[w.source.index] / (a[w.source.index] + a[w.target.index]);
      r = new Array(M), x(), o = new Array(M), g();
    }
  }
  function x() {
    if (s)
      for (var u = 0, m = n.length; u < m; ++u)
        r[u] = +t(n[u], u, n);
  }
  function g() {
    if (s)
      for (var u = 0, m = n.length; u < m; ++u)
        o[u] = +i(n[u], u, n);
  }
  return p.initialize = function(u, ...m) {
    s = u, d = m.find((M) => typeof M == "function") || Math.random, f = m.find((M) => [1, 2, 3].includes(M)) || 2, l();
  }, p.links = function(u) {
    return arguments.length ? (n = u, l(), p) : n;
  }, p.id = function(u) {
    return arguments.length ? (e = u, p) : e;
  }, p.iterations = function(u) {
    return arguments.length ? (c = +u, p) : c;
  }, p.strength = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : de(+u), x(), p) : t;
  }, p.distance = function(u) {
    return arguments.length ? (i = typeof u == "function" ? u : de(+u), g(), p) : i;
  }, p;
}
var Sr = { value: () => {
} };
function kt() {
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
function qr(n, e) {
  return n.trim().split(/^|\s+/).map(function(t) {
    var r = "", i = t.indexOf(".");
    if (i >= 0 && (r = t.slice(i + 1), t = t.slice(0, i)), t && !e.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name: r };
  });
}
ge.prototype = kt.prototype = {
  constructor: ge,
  on: function(n, e) {
    var t = this._, r = qr(n + "", t), i, o = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++o < s; )
        if ((i = (n = r[o]).type) && (i = Ar(t[i], n.name)))
          return i;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++o < s; )
      if (i = (n = r[o]).type)
        t[i] = tt(t[i], n.name, e);
      else if (e == null)
        for (i in t)
          t[i] = tt(t[i], n.name, null);
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
      for (var t = new Array(i), r = 0, i, o; r < i; ++r)
        t[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    for (o = this._[n], r = 0, i = o.length; r < i; ++r)
      o[r].value.apply(e, t);
  },
  apply: function(n, e, t) {
    if (!this._.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    for (var r = this._[n], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(e, t);
  }
};
function Ar(n, e) {
  for (var t = 0, r = n.length, i; t < r; ++t)
    if ((i = n[t]).name === e)
      return i.value;
}
function tt(n, e, t) {
  for (var r = 0, i = n.length; r < i; ++r)
    if (n[r].name === e) {
      n[r] = Sr, n = n.slice(0, r).concat(n.slice(r + 1));
      break;
    }
  return t != null && n.push({ name: e, value: t }), n;
}
var oe = 0, fe = 0, he = 0, Pt = 1e3, ye, ue, we = 0, ne = 0, xe = 0, ce = typeof performance == "object" && performance.now ? performance : Date, zt = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(n) {
  setTimeout(n, 17);
};
function Lt() {
  return ne || (zt(Ir), ne = ce.now() + xe);
}
function Ir() {
  ne = 0;
}
function Ee() {
  this._call = this._time = this._next = null;
}
Ee.prototype = St.prototype = {
  constructor: Ee,
  restart: function(n, e, t) {
    if (typeof n != "function")
      throw new TypeError("callback is not a function");
    t = (t == null ? Lt() : +t) + (e == null ? 0 : +e), !this._next && ue !== this && (ue ? ue._next = this : ye = this, ue = this), this._call = n, this._time = t, $e();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, $e());
  }
};
function St(n, e, t) {
  var r = new Ee();
  return r.restart(n, e, t), r;
}
function Fr() {
  Lt(), ++oe;
  for (var n = ye, e; n; )
    (e = ne - n._time) >= 0 && n._call.call(void 0, e), n = n._next;
  --oe;
}
function nt() {
  ne = (we = ce.now()) + xe, oe = fe = 0;
  try {
    Fr();
  } finally {
    oe = 0, Dr(), ne = 0;
  }
}
function Tr() {
  var n = ce.now(), e = n - we;
  e > Pt && (xe -= e, we = n);
}
function Dr() {
  for (var n, e = ye, t, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), n = e, e = e._next) : (t = e._next, e._next = null, e = n ? n._next = t : ye = t);
  ue = n, $e(r);
}
function $e(n) {
  if (!oe) {
    fe && (fe = clearTimeout(fe));
    var e = n - ne;
    e > 24 ? (n < 1 / 0 && (fe = setTimeout(nt, n - ce.now() - xe)), he && (he = clearInterval(he))) : (he || (we = ce.now(), he = setInterval(Tr, Pt)), oe = 1, zt(nt));
  }
}
const Or = 1664525, Gr = 1013904223, rt = 4294967296;
function jr() {
  let n = 1;
  return () => (n = (Or * n + Gr) % rt) / rt;
}
var it = 3;
function Me(n) {
  return n.x;
}
function ot(n) {
  return n.y;
}
function Rr(n) {
  return n.z;
}
var Qr = 10, Vr = Math.PI * (3 - Math.sqrt(5)), Hr = Math.PI * 20 / (9 + Math.sqrt(221));
function Ur(n, e) {
  e = e || 2;
  var t = Math.min(it, Math.max(1, Math.round(e))), r, i = 1, o = 1e-3, s = 1 - Math.pow(o, 1 / 300), f = 0, a = 0.6, h = /* @__PURE__ */ new Map(), d = St(p), c = kt("tick", "end"), v = jr();
  n == null && (n = []);
  function p() {
    l(), c.call("tick", r), i < o && (d.stop(), c.call("end", r));
  }
  function l(u) {
    var m, M = n.length, b;
    u === void 0 && (u = 1);
    for (var w = 0; w < u; ++w)
      for (i += (f - i) * s, h.forEach(function(N) {
        N(i);
      }), m = 0; m < M; ++m)
        b = n[m], b.fx == null ? b.x += b.vx *= a : (b.x = b.fx, b.vx = 0), t > 1 && (b.fy == null ? b.y += b.vy *= a : (b.y = b.fy, b.vy = 0)), t > 2 && (b.fz == null ? b.z += b.vz *= a : (b.z = b.fz, b.vz = 0));
    return r;
  }
  function x() {
    for (var u = 0, m = n.length, M; u < m; ++u) {
      if (M = n[u], M.index = u, M.fx != null && (M.x = M.fx), M.fy != null && (M.y = M.fy), M.fz != null && (M.z = M.fz), isNaN(M.x) || t > 1 && isNaN(M.y) || t > 2 && isNaN(M.z)) {
        var b = Qr * (t > 2 ? Math.cbrt(0.5 + u) : t > 1 ? Math.sqrt(0.5 + u) : u), w = u * Vr, N = u * Hr;
        t === 1 ? M.x = b : t === 2 ? (M.x = b * Math.cos(w), M.y = b * Math.sin(w)) : (M.x = b * Math.sin(w) * Math.cos(N), M.y = b * Math.cos(w), M.z = b * Math.sin(w) * Math.sin(N));
      }
      (isNaN(M.vx) || t > 1 && isNaN(M.vy) || t > 2 && isNaN(M.vz)) && (M.vx = 0, t > 1 && (M.vy = 0), t > 2 && (M.vz = 0));
    }
  }
  function g(u) {
    return u.initialize && u.initialize(n, v, t), u;
  }
  return x(), r = {
    tick: l,
    restart: function() {
      return d.restart(p), r;
    },
    stop: function() {
      return d.stop(), r;
    },
    numDimensions: function(u) {
      return arguments.length ? (t = Math.min(it, Math.max(1, Math.round(u))), h.forEach(g), r) : t;
    },
    nodes: function(u) {
      return arguments.length ? (n = u, x(), h.forEach(g), r) : n;
    },
    alpha: function(u) {
      return arguments.length ? (i = +u, r) : i;
    },
    alphaMin: function(u) {
      return arguments.length ? (o = +u, r) : o;
    },
    alphaDecay: function(u) {
      return arguments.length ? (s = +u, r) : +s;
    },
    alphaTarget: function(u) {
      return arguments.length ? (f = +u, r) : f;
    },
    velocityDecay: function(u) {
      return arguments.length ? (a = 1 - u, r) : 1 - a;
    },
    randomSource: function(u) {
      return arguments.length ? (v = u, h.forEach(g), r) : v;
    },
    force: function(u, m) {
      return arguments.length > 1 ? (m == null ? h.delete(u) : h.set(u, g(m)), r) : h.get(u);
    },
    find: function() {
      var u = Array.prototype.slice.call(arguments), m = u.shift() || 0, M = (t > 1 ? u.shift() : null) || 0, b = (t > 2 ? u.shift() : null) || 0, w = u.shift() || 1 / 0, N = 0, B = n.length, P, A, I, F, q, Z;
      for (w *= w, N = 0; N < B; ++N)
        q = n[N], P = m - q.x, A = M - (q.y || 0), I = b - (q.z || 0), F = P * P + A * A + I * I, F < w && (Z = q, w = F);
      return Z;
    },
    on: function(u, m) {
      return arguments.length > 1 ? (c.on(u, m), r) : c.on(u);
    }
  };
}
function Wr() {
  var n, e, t, r, i, o = de(-30), s, f = 1, a = 1 / 0, h = 0.81;
  function d(l) {
    var x, g = n.length, u = (e === 1 ? Nt(n, Me) : e === 2 ? $t(n, Me, ot) : e === 3 ? Bt(n, Me, ot, Rr) : null).visitAfter(v);
    for (i = l, x = 0; x < g; ++x)
      t = n[x], u.visit(p);
  }
  function c() {
    if (n) {
      var l, x = n.length, g;
      for (s = new Array(x), l = 0; l < x; ++l)
        g = n[l], s[g.index] = +o(g, l, n);
    }
  }
  function v(l) {
    var x = 0, g, u, m = 0, M, b, w, N, B = l.length;
    if (B) {
      for (M = b = w = N = 0; N < B; ++N)
        (g = l[N]) && (u = Math.abs(g.value)) && (x += g.value, m += u, M += u * (g.x || 0), b += u * (g.y || 0), w += u * (g.z || 0));
      x *= Math.sqrt(4 / B), l.x = M / m, e > 1 && (l.y = b / m), e > 2 && (l.z = w / m);
    } else {
      g = l, g.x = g.data.x, e > 1 && (g.y = g.data.y), e > 2 && (g.z = g.data.z);
      do
        x += s[g.data.index];
      while (g = g.next);
    }
    l.value = x;
  }
  function p(l, x, g, u, m) {
    if (!l.value)
      return !0;
    var M = [g, u, m][e - 1], b = l.x - t.x, w = e > 1 ? l.y - t.y : 0, N = e > 2 ? l.z - t.z : 0, B = M - x, P = b * b + w * w + N * N;
    if (B * B / h < P)
      return P < a && (b === 0 && (b = J(r), P += b * b), e > 1 && w === 0 && (w = J(r), P += w * w), e > 2 && N === 0 && (N = J(r), P += N * N), P < f && (P = Math.sqrt(f * P)), t.vx += b * l.value * i / P, e > 1 && (t.vy += w * l.value * i / P), e > 2 && (t.vz += N * l.value * i / P)), !0;
    if (l.length || P >= a)
      return;
    (l.data !== t || l.next) && (b === 0 && (b = J(r), P += b * b), e > 1 && w === 0 && (w = J(r), P += w * w), e > 2 && N === 0 && (N = J(r), P += N * N), P < f && (P = Math.sqrt(f * P)));
    do
      l.data !== t && (B = s[l.data.index] * i / P, t.vx += b * B, e > 1 && (t.vy += w * B), e > 2 && (t.vz += N * B));
    while (l = l.next);
  }
  return d.initialize = function(l, ...x) {
    n = l, r = x.find((g) => typeof g == "function") || Math.random, e = x.find((g) => [1, 2, 3].includes(g)) || 2, c();
  }, d.strength = function(l) {
    return arguments.length ? (o = typeof l == "function" ? l : de(+l), c(), d) : o;
  }, d.distanceMin = function(l) {
    return arguments.length ? (f = l * l, d) : Math.sqrt(f);
  }, d.distanceMax = function(l) {
    return arguments.length ? (a = l * l, d) : Math.sqrt(a);
  }, d.theta = function(l) {
    return arguments.length ? (h = l * l, d) : Math.sqrt(h);
  }, d;
}
function Ce(n) {
  return typeof n == "object" && typeof n.index == "number" && typeof n.x == "number" && typeof n.y == "number" && typeof n.z == "number" && typeof n.vx == "number" && typeof n.vy == "number" && typeof n.vz == "number";
}
function Xr(n) {
  return !!(typeof n == "object" && typeof n.index == "number" && Ce(n.source) && Ce(n.target));
}
class Yr {
  constructor() {
    k(this, "d3ForceLayout");
    k(this, "d3AlphaMin", 0);
    k(this, "d3AlphaTarget", 0);
    k(this, "d3AlphaDecay", 0.0228);
    k(this, "d3VelocityDecay", 0.4);
    k(this, "nodeMapping", /* @__PURE__ */ new Map());
    k(this, "edgeMapping", /* @__PURE__ */ new Map());
    k(this, "newNodeMap", /* @__PURE__ */ new Map());
    k(this, "newEdgeMap", /* @__PURE__ */ new Map());
    k(this, "reheat", !1);
    this.d3ForceLayout = Ur().numDimensions(3).alpha(1).force("link", Lr()).force("charge", Wr()).force("center", In()).force("dagRadial", null).stop(), this.d3ForceLayout.force("link").id((e) => e.id);
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
        let i = r[0], o = r[1];
        if (!Ce(o))
          throw new Error("Internal error: Node is not settled as a complete D3 Node");
        this.nodeMapping.set(i, o);
      }
      this.newNodeMap.clear();
      let t = [...this.edgeMapping.values()];
      t = t.concat([...this.newEdgeMap.values()]), this.d3ForceLayout.force("link").links(t);
      for (let r of this.newEdgeMap.entries()) {
        let i = r[0], o = r[1];
        if (!Xr(o))
          throw new Error("Internal error: Edge is not settled as a complete D3 Edge");
        this.edgeMapping.set(i, o);
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
var Jr = Zr, Kr = Object.prototype.hasOwnProperty;
function Zr() {
  for (var n = {}, e = 0; e < arguments.length; e++) {
    var t = arguments[e];
    for (var r in t)
      Kr.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
const ei = /* @__PURE__ */ Be(Jr), ti = {
  size: 1,
  opacity: 1,
  wireframe: !1,
  color: "lightgrey",
  shape: "icosphere",
  nodeMeshFactory: ve.defaultNodeMeshFactory,
  label: !0
}, ni = {
  type: "moving",
  color: "white",
  movingLineOpts: {
    baseColor: "lightgrey",
    width: 0.25
  },
  edgeMeshFactory: Y.defaultEdgeMeshFactory
}, ri = {
  nodeMeshOpts: ti,
  edgeMeshOpts: ni,
  pinOnDrag: !0,
  graphEngineType: "ngraph"
};
function ii(n) {
  return ei(ri, n);
}
class hi {
  constructor(e) {
    k(this, "config");
    k(this, "element");
    k(this, "canvas");
    k(this, "engine");
    k(this, "scene");
    k(this, "camera");
    k(this, "graphEngine");
    k(this, "running", !0);
    k(this, "skybox");
    k(this, "pinOnDrag");
    k(this, "fetchNodes");
    k(this, "fetchEdges");
    k(this, "graphEngineType");
    k(this, "minDelta", 0.02);
    if (this.config = ii(e), this.fetchNodes = this.config.fetchNodes, this.fetchEdges = this.config.fetchEdges, typeof this.config.element == "string") {
      let t = document.getElementById(this.config.element);
      if (!t)
        throw new Error(`getElementById() could not find element '${this.config.element}'`);
      this.element = t;
    } else if (this.config.element instanceof HTMLElement)
      this.element = this.config.element;
    else
      throw new TypeError("Graph constructor requires 'element' argument that is either a string specifying the ID of the HTML element or an HTMLElement");
    if (this.element.innerHTML = "", this.canvas = document.createElement("canvas"), this.canvas.setAttribute("id", "babylonForceGraphRenderCanvas"), this.canvas.setAttribute("touch-action", "none"), this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.touchAction = "none", this.element.appendChild(this.canvas), this.engine = new Ne(this.canvas, !0), this.scene = new Ot(this.engine), this.camera = new Gt("camera", -Math.PI / 2, Math.PI / 2.5, 15, new Re(0, 0, 0)), this.camera.attachControl(this.canvas, !0), new jt("light", new Re(1, 1, 0)), this.config.skybox && new Rt(
      "testdome",
      this.config.skybox,
      {
        resolution: 32,
        size: 1e3
      },
      this.scene
    ), this.config.graphEngineType === "ngraph")
      this.graphEngine = new An();
    else if (this.config.graphEngineType === "d3")
      this.graphEngine = new Yr();
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
    e < this.minDelta && (console.log("Graph engine settled, stopping."), this.running = !1);
  }
  addNode(e, t = {}) {
    return ve.create(this, e, {
      nodeMeshConfig: this.config.nodeMeshOpts,
      pinOnDrag: this.pinOnDrag,
      metadata: t
    });
  }
  addEdge(e, t, r = {}) {
    return Y.create(this, e, t, {
      edgeMeshConfig: this.config.edgeMeshOpts,
      metadata: r
    });
  }
  async loadJsonData(e, t = {}) {
    const r = t.nodeListProp ?? "nodes", i = t.edgeListProp ?? "links", o = t.nodeIdProp ?? "id", s = t.edgeSrcIdProp ?? "source", f = t.edgeDstIdProp ?? "target", h = await (await fetch(e, t.fetchOpts)).json();
    if (!Array.isArray(h[r]))
      throw TypeError(`when fetching JSON data: '${r}' was not an Array`);
    if (!Array.isArray(h[i]))
      throw TypeError(`when fetching JSON data: '${i}' was not an Array`);
    for (let d of h[r]) {
      let c = d[o], v = d;
      this.addNode(c, v);
    }
    for (let d of h[i]) {
      let c = d[s], v = d[f], p = d;
      this.addEdge(c, v, p);
    }
  }
}
export {
  Y as Edge,
  hi as Graph,
  ve as Node,
  si as util
};
