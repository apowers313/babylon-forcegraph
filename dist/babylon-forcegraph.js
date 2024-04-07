var Lt = Object.defineProperty;
var Pt = (t, e, n) => e in t ? Lt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var q = (t, e, n) => (Pt(t, typeof e != "symbol" ? e + "" : e, n), n);
import { SixDofDragBehavior as It, ActionManager as Se, ExecuteCodeAction as Ft, DynamicTexture as Te, StandardMaterial as tt, Color3 as Ee, MeshBuilder as K, CreateGreasedLine as At, Engine as St, Scene as Tt, ArcRotateCamera as Dt, Vector3 as De, HemisphericLight as Ot, PhotoDome as jt } from "@babylonjs/core";
function nt(t) {
  let n = (/* @__PURE__ */ new Map([
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
  ])).get(t);
  return n || t;
}
const me = {
  color: "gold",
  shape: "sphere",
  nodeMeshFactory: Gt
};
function Gt(t, e, n) {
  let r;
  switch (n.shape) {
    case "box":
      r = K.CreateBox("box", {});
      break;
    case "sphere":
      r = K.CreateSphere("sphere", {});
      break;
    case "cylinder":
      r = K.CreateCylinder("cylinder", {});
      break;
    case "cone":
      r = K.CreateCylinder("cylinder", { diameterTop: 0 });
      break;
    case "capsule":
      r = K.CreateCapsule("capsule", {});
      break;
    case "torus":
      r = K.CreateTorus("torus", {});
      break;
    case "torus-knot":
      r = K.CreateTorusKnot("tk", { tube: 1, radialSegments: 128 });
      break;
    default:
      throw new TypeError(`unknown shape: ${n.shape}`);
  }
  let i = new tt("defaultMaterial"), o = n.color ?? me.color;
  return i.diffuseColor = Ee.FromHexString(nt(o)), r.material = i, r;
}
let be = class ce {
  constructor(e, n, r = {}) {
    q(this, "parentGraph");
    q(this, "id");
    q(this, "metadata");
    q(this, "mesh");
    q(this, "label");
    q(this, "meshDragBehavior");
    q(this, "dragging", !1);
    q(this, "nodeMeshOpts");
    q(this, "pinOnDrag");
    var o;
    this.parentGraph = e, this.id = n, this.metadata = r.metadata ?? {};
    let i = {};
    for (let s of Object.keys(me))
      i[s] = ((o = r == null ? void 0 : r.nodeMeshOpts) == null ? void 0 : o[s]) ?? me[s];
    if (this.nodeMeshOpts = i, this.parentGraph.graphEngine.addNode(this), this.mesh = this.nodeMeshOpts.nodeMeshFactory(this, this.parentGraph, this.nodeMeshOpts), this.mesh.metadata = { parentNode: this }, this.label = this.createLabel(this.id.toString()), this.label.parent = this.mesh, this.label.position.y += 1, this.pinOnDrag = r.pinOnDrag ?? !0, this.meshDragBehavior = new It(), this.mesh.addBehavior(this.meshDragBehavior), this.meshDragBehavior.onDragStartObservable.add(() => {
      this.dragging = !0;
    }), this.meshDragBehavior.onDragEndObservable.add(() => {
      this.pinOnDrag && this.pin(), this.dragging = !1;
    }), this.meshDragBehavior.onPositionChangedObservable.add((s) => {
      this.parentGraph.graphEngine.setNodePosition(this, s.position);
    }), this.mesh.actionManager = new Se(this.parentGraph.scene), this.parentGraph.fetchNodes && this.parentGraph.fetchEdges) {
      const { fetchNodes: s, fetchEdges: u } = this.parentGraph;
      this.mesh.actionManager.registerAction(
        new Ft(
          {
            trigger: Se.OnDoublePickTrigger
            // trigger: ActionManager.OnLongPressTrigger,
          },
          () => {
            const a = u(this, this.parentGraph), f = /* @__PURE__ */ new Set();
            a.forEach((c) => {
              f.add(c.source), f.add(c.target);
            }), f.delete(this.id), s(f, this.parentGraph).forEach((c) => this.parentGraph.addNode(c.id, c.metadata)), a.forEach((c) => this.parentGraph.addEdge(c.source, c.target, c.metadata));
          }
        )
      );
    }
  }
  createLabel(e) {
    const r = "48px Verdana", s = 0.006944444444444444, a = new Te("DynamicTexture", 64, this.parentGraph.scene).getContext();
    a.font = r;
    const f = a.measureText(e).width + 8, d = f * s, c = new Te("DynamicTexture", { width: f, height: 72 }, this.parentGraph.scene, !1), v = new tt("mat", this.parentGraph.scene);
    v.specularColor = Ee.Black(), c.hasAlpha = !0;
    const g = c.getContext();
    g.fillStyle = "white", g.beginPath();
    const l = 0, x = 0, p = [20, 20, 20, 20], h = f, M = 72;
    g.moveTo(l + p[0], x), g.lineTo(l + h - p[1], x), g.arc(l + h - p[1], x + p[1], p[1], 3 * Math.PI / 2, Math.PI * 2), g.lineTo(l + h, x + M - p[2]), g.arc(l + h - p[2], x + M - p[2], p[2], 0, Math.PI / 2), g.lineTo(l + p[3], x + M), g.arc(l + p[3], x + M - p[3], p[3], Math.PI / 2, Math.PI), g.lineTo(l, x + p[0]), g.arc(l + p[0], x + p[0], p[0], Math.PI, 3 * Math.PI / 2), g.closePath(), g.fill(), c.drawText(e, null, null, r, "#000000", "transparent", !0), v.opacityTexture = c, v.emissiveTexture = c, v.disableLighting = !0;
    const b = K.CreatePlane("plane", { width: d, height: 0.5 }, this.parentGraph.scene);
    return b.material = v, b.billboardMode = 7, b;
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
  static create(e, n, r = {}) {
    const i = ce.list.get(n);
    if (i)
      return i;
    const o = new ce(e, n, r);
    return ce.list.set(n, o), o;
  }
};
const Qt = /* @__PURE__ */ new Map(), _e = {
  color: "white",
  edgeMeshFactory: Rt
};
function Rt(t, e, n) {
  let r = n.color ?? _e.color;
  return At(
    "edge",
    { points: [0, 0, 0, 1, 1, 1] },
    { color: Ee.FromHexString(nt(r)) }
  );
}
class se {
  constructor(e, n, r, i = {}) {
    q(this, "parentGraph");
    q(this, "srcId");
    q(this, "dstId");
    q(this, "metadata");
    q(this, "mesh");
    q(this, "edgeMeshOpts");
    var s;
    if (this.parentGraph = e, this.srcId = n, this.dstId = r, this.metadata = i.metadata ?? {}, !be.list.has(n))
      throw new Error(`Attempting to create edge '${n}->${r}', Node '${n}' hasn't been created yet.`);
    if (!be.list.has(r))
      throw new Error(`Attempting to create edge '${n}->${r}', Node '${r}' hasn't been created yet.`);
    let o = {};
    for (let u of Object.keys(_e))
      o[u] = ((s = i == null ? void 0 : i.edgeMeshOpts) == null ? void 0 : s[u]) ?? _e[u];
    this.edgeMeshOpts = o, this.parentGraph.graphEngine.addEdge(this), this.mesh = this.edgeMeshOpts.edgeMeshFactory(this, this.parentGraph, this.edgeMeshOpts), this.mesh.metadata = {}, this.mesh.metadata.parentEdge = this;
  }
  update() {
    this.parentGraph.graphEngine.refresh();
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
  static create(e, n, r, i = {}) {
    const o = se.list.get(n, r);
    if (o)
      return o;
    const s = new se(e, n, r, i);
    return se.list.set(n, r, s), s;
  }
}
class Vt {
  constructor() {
    q(this, "map", /* @__PURE__ */ new Map());
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
    let r = this.map.get(e);
    if (r)
      return r.get(n);
  }
}
const Ht = new Vt();
function rt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Be = function(e) {
  Wt(e);
  var n = Ut(e);
  return e.on = n.on, e.off = n.off, e.fire = n.fire, e;
};
function Ut(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return {
    on: function(n, r, i) {
      if (typeof r != "function")
        throw new Error("callback is expected to be a function");
      var o = e[n];
      return o || (o = e[n] = []), o.push({ callback: r, ctx: i }), t;
    },
    off: function(n, r) {
      var i = typeof n > "u";
      if (i)
        return e = /* @__PURE__ */ Object.create(null), t;
      if (e[n]) {
        var o = typeof r != "function";
        if (o)
          delete e[n];
        else
          for (var s = e[n], u = 0; u < s.length; ++u)
            s[u].callback === r && s.splice(u, 1);
      }
      return t;
    },
    fire: function(n) {
      var r = e[n];
      if (!r)
        return t;
      var i;
      arguments.length > 1 && (i = Array.prototype.splice.call(arguments, 1));
      for (var o = 0; o < r.length; ++o) {
        var s = r[o];
        s.callback.apply(s.ctx, i);
      }
      return t;
    }
  };
}
function Wt(t) {
  if (!t)
    throw new Error("Eventify cannot use falsy object as events subject");
  for (var e = ["on", "fire", "off"], n = 0; n < e.length; ++n)
    if (t.hasOwnProperty(e[n]))
      throw new Error("Subject cannot be eventified, since it already has property '" + e[n] + "'");
}
var Xt = Yt, Jt = Be;
function Yt(t) {
  if (t = t || {}, "uniqueLinkId" in t && (console.warn(
    "ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",
    `
`,
    `Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`
  ), t.multigraph = t.uniqueLinkId), t.multigraph === void 0 && (t.multigraph = !1), typeof Map != "function")
    throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = {}, i = 0, o = t.multigraph ? _ : b, s = [], u = $, a = $, f = $, d = $, c = {
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
    removeLink: C,
    /**
     * Removes node with given id from the graph. If node does not exist in the graph
     * does nothing.
     *
     * @param nodeId node's identifier passed to addNode() function.
     *
     * @returns true if node was removed; false otherwise.
     */
    removeNode: h,
    /**
     * Gets node with given identifier. If node does not exist undefined value is returned.
     *
     * @param nodeId requested node identifier;
     *
     * @return {node} in with requested identifier or undefined if no such node exists.
     */
    getNode: p,
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
    getLinks: k,
    /**
     * Invokes callback on each node of the graph.
     *
     * @param {Function(node)} callback Function to be invoked. The function
     *   is passed one argument: visited node.
     */
    forEachNode: U,
    /**
     * Invokes callback on every linked (adjacent) node to the given one.
     *
     * @param nodeId Identifier of the requested node.
     * @param {Function(node, link)} callback Function to be called on all linked nodes.
     *   The function is passed two parameters: adjacent node and link object itself.
     * @param oriented if true graph treated as oriented.
     */
    forEachLinkedNode: J,
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
    forEachLink: P,
    /**
     * Suspend all notifications about graph changes until
     * endUpdate is called.
     */
    beginUpdate: f,
    /**
     * Resumes all notifications about graph changes and fires
     * graph 'changed' event in case there are any pending changes.
     */
    endUpdate: d,
    /**
     * Removes all nodes and links from the graph.
     */
    clear: A,
    /**
     * Detects whether there is a link between two nodes.
     * Operation complexity is O(n) where n - number of links of a node.
     * NOTE: this function is synonym for getLink()
     *
     * @returns link if there is one. null otherwise.
     */
    hasLink: F,
    /**
     * Detects whether there is a node with given id
     * 
     * Operation complexity is O(1)
     * NOTE: this function is synonym for getNode()
     *
     * @returns node if there is one; Falsy value otherwise.
     */
    hasNode: p,
    /**
     * Gets an edge between two nodes.
     * Operation complexity is O(n) where n - number of links of a node.
     *
     * @param {string} fromId link start identifier
     * @param {string} toId link end identifier
     *
     * @returns link if there is one; undefined otherwise.
     */
    getLink: F
  };
  return Jt(c), v(), c;
  function v() {
    var E = c.on;
    c.on = B;
    function B() {
      return c.beginUpdate = f = S, c.endUpdate = d = V, u = g, a = l, c.on = E, E.apply(c, arguments);
    }
  }
  function g(E, B) {
    s.push({
      link: E,
      changeType: B
    });
  }
  function l(E, B) {
    s.push({
      node: E,
      changeType: B
    });
  }
  function x(E, B) {
    if (E === void 0)
      throw new Error("Invalid node identifier");
    f();
    var z = p(E);
    return z ? (z.data = B, a(z, "update")) : (z = new Kt(E, B), a(z, "add")), e.set(E, z), d(), z;
  }
  function p(E) {
    return e.get(E);
  }
  function h(E) {
    var B = p(E);
    if (!B)
      return !1;
    f();
    var z = B.links;
    return z && (z.forEach(I), B.links = null), e.delete(E), a(B, "remove"), d(), !0;
  }
  function M(E, B, z) {
    f();
    var T = p(E) || x(E), Q = p(B) || x(B), D = o(E, B, z), H = n.has(D.id);
    return n.set(D.id, D), Oe(T, D), E !== B && Oe(Q, D), u(D, H ? "update" : "add"), d(), D;
  }
  function b(E, B, z) {
    var T = de(E, B), Q = n.get(T);
    return Q ? (Q.data = z, Q) : new je(E, B, z, T);
  }
  function _(E, B, z) {
    var T = de(E, B), Q = r.hasOwnProperty(T);
    if (Q || F(E, B)) {
      Q || (r[T] = 0);
      var D = "@" + ++r[T];
      T = de(E + D, B + D);
    }
    return new je(E, B, z, T);
  }
  function w() {
    return e.size;
  }
  function N() {
    return n.size;
  }
  function k(E) {
    var B = p(E);
    return B ? B.links : null;
  }
  function C(E, B) {
    return B !== void 0 && (E = F(E, B)), I(E);
  }
  function I(E) {
    if (!E || !n.get(E.id))
      return !1;
    f(), n.delete(E.id);
    var B = p(E.fromId), z = p(E.toId);
    return B && B.links.delete(E), z && z.links.delete(E), u(E, "remove"), d(), !0;
  }
  function F(E, B) {
    if (!(E === void 0 || B === void 0))
      return n.get(de(E, B));
  }
  function A() {
    f(), U(function(E) {
      h(E.id);
    }), d();
  }
  function P(E) {
    if (typeof E == "function")
      for (var B = n.values(), z = B.next(); !z.done; ) {
        if (E(z.value))
          return !0;
        z = B.next();
      }
  }
  function J(E, B, z) {
    var T = p(E);
    if (T && T.links && typeof B == "function")
      return z ? y(T.links, E, B) : m(T.links, E, B);
  }
  function m(E, B, z) {
    for (var T, Q = E.values(), D = Q.next(); !D.done; ) {
      var H = D.value, zt = H.fromId === B ? H.toId : H.fromId;
      if (T = z(e.get(zt), H), T)
        return !0;
      D = Q.next();
    }
  }
  function y(E, B, z) {
    for (var T, Q = E.values(), D = Q.next(); !D.done; ) {
      var H = D.value;
      if (H.fromId === B && (T = z(e.get(H.toId), H), T))
        return !0;
      D = Q.next();
    }
  }
  function $() {
  }
  function S() {
    i += 1;
  }
  function V() {
    i -= 1, i === 0 && s.length > 0 && (c.fire("changed", s), s.length = 0);
  }
  function U(E) {
    if (typeof E != "function")
      throw new Error("Function is expected to iterate over graph nodes. You passed " + E);
    for (var B = e.values(), z = B.next(); !z.done; ) {
      if (E(z.value))
        return !0;
      z = B.next();
    }
  }
}
function Kt(t, e) {
  this.id = t, this.links = null, this.data = e;
}
function Oe(t, e) {
  t.links ? t.links.add(e) : t.links = /* @__PURE__ */ new Set([e]);
}
function je(t, e, n, r) {
  this.fromId = t, this.toId = e, this.data = n, this.id = r;
}
function de(t, e) {
  return t.toString() + "👉 " + e.toString();
}
const Zt = /* @__PURE__ */ rt(Xt);
var ke = { exports: {} }, he = { exports: {} }, it = function(e) {
  return e === 0 ? "x" : e === 1 ? "y" : e === 2 ? "z" : "c" + (e + 1);
};
const en = it;
var ne = function(e) {
  return n;
  function n(r, i) {
    let o = i && i.indent || 0, s = i && i.join !== void 0 ? i.join : `
`, u = Array(o + 1).join(" "), a = [];
    for (let f = 0; f < e; ++f) {
      let d = en(f), c = f === 0 ? "" : u;
      a.push(c + r.replace(/{var}/g, d));
    }
    return a.join(s);
  }
};
const ot = ne;
he.exports = tn;
he.exports.generateCreateBodyFunctionBody = at;
he.exports.getVectorCode = ft;
he.exports.getBodyCode = st;
function tn(t, e) {
  let n = at(t, e), { Body: r } = new Function(n)();
  return r;
}
function at(t, e) {
  return `
${ft(t, e)}
${st(t)}
return {Body: Body, Vector: Vector};
`;
}
function st(t) {
  let e = ot(t), n = e("{var}", { join: ", " });
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
function ft(t, e) {
  let n = ot(t), r = "";
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
var nn = he.exports, Z = { exports: {} };
const Ce = ne, Y = it;
Z.exports = rn;
Z.exports.generateQuadTreeFunctionBody = ut;
Z.exports.getInsertStackCode = pt;
Z.exports.getQuadNodeCode = lt;
Z.exports.isSamePosition = ht;
Z.exports.getChildBodyCode = ct;
Z.exports.setChildBodyCode = dt;
function rn(t) {
  let e = ut(t);
  return new Function(e)();
}
function ut(t) {
  let e = Ce(t), n = Math.pow(2, t);
  return `
${pt()}
${lt(t)}
${ht(t)}
${ct(t)}
${dt(t)}

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
        if ((node.max_${Y(0)} - node.min_${Y(0)}) / r < theta) {
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
  function i(u) {
    let a = [], f = Array(u + 1).join(" ");
    for (let d = 0; d < t; ++d)
      a.push(f + `if (${Y(d)} > max_${Y(d)}) {`), a.push(f + `  quadIdx = quadIdx + ${Math.pow(2, d)};`), a.push(f + `  min_${Y(d)} = max_${Y(d)};`), a.push(f + `  max_${Y(d)} = node.max_${Y(d)};`), a.push(f + "}");
    return a.join(`
`);
  }
  function o() {
    let u = Array(11).join(" "), a = [];
    for (let f = 0; f < n; ++f)
      a.push(u + `if (node.quad${f}) {`), a.push(u + `  queue[pushIdx] = node.quad${f};`), a.push(u + "  queueLength += 1;"), a.push(u + "  pushIdx += 1;"), a.push(u + "}");
    return a.join(`
`);
  }
  function s(u) {
    let a = [];
    for (let f = 0; f < n; ++f)
      a.push(`${u}quad${f} = null;`);
    return a.join(`
`);
  }
}
function ht(t) {
  let e = Ce(t);
  return `
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});", { indent: 2 })}
  
    return ${e("d{var} < 1e-8", { join: " && " })};
  }  
`;
}
function dt(t) {
  var e = Math.pow(2, t);
  return `
function setChild(node, idx, child) {
  ${n()}
}`;
  function n() {
    let r = [];
    for (let i = 0; i < e; ++i) {
      let o = i === 0 ? "  " : "  else ";
      r.push(`${o}if (idx === ${i}) node.quad${i} = child;`);
    }
    return r.join(`
`);
  }
}
function ct(t) {
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
function lt(t) {
  let e = Ce(t), n = Math.pow(2, t);
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
    for (let u = 0; u < n; ++u)
      s.push(`${o}quad${u} = null;`);
    return s.join(`
`);
  }
}
function pt() {
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
var on = Z.exports, qe = { exports: {} };
qe.exports = sn;
qe.exports.generateFunctionBody = gt;
const an = ne;
function sn(t) {
  let e = gt(t);
  return new Function("bodies", "settings", "random", e);
}
function gt(t) {
  let e = an(t);
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
var fn = qe.exports, ze = { exports: {} };
const un = ne;
ze.exports = hn;
ze.exports.generateCreateDragForceFunctionBody = vt;
function hn(t) {
  let e = vt(t);
  return new Function("options", e);
}
function vt(t) {
  return `
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${un(t)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};", { indent: 6 })}
    }
  };
`;
}
var dn = ze.exports, Le = { exports: {} };
const cn = ne;
Le.exports = ln;
Le.exports.generateCreateSpringForceFunctionBody = yt;
function ln(t) {
  let e = yt(t);
  return new Function("options", "random", e);
}
function yt(t) {
  let e = cn(t);
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
var pn = Le.exports, Pe = { exports: {} };
const gn = ne;
Pe.exports = vn;
Pe.exports.generateIntegratorFunctionBody = wt;
function vn(t) {
  let e = wt(t);
  return new Function("bodies", "timeStep", "adaptiveTimeStepWeight", e);
}
function wt(t) {
  let e = gn(t);
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
var yn = Pe.exports, ye, Ge;
function wn() {
  if (Ge)
    return ye;
  Ge = 1, ye = t;
  function t(e, n, r, i) {
    this.from = e, this.to = n, this.length = r, this.coefficient = i;
  }
  return ye;
}
var we, Qe;
function xn() {
  if (Qe)
    return we;
  Qe = 1, we = t;
  function t(e, n) {
    var r;
    if (e || (e = {}), n) {
      for (r in n)
        if (n.hasOwnProperty(r)) {
          var i = e.hasOwnProperty(r), o = typeof n[r], s = !i || typeof e[r] !== o;
          s ? e[r] = n[r] : o === "object" && (e[r] = t(e[r], n[r]));
        }
    }
    return e;
  }
  return we;
}
var re = { exports: {} }, Re;
function mn() {
  if (Re)
    return re.exports;
  Re = 1, re.exports = t, re.exports.random = t, re.exports.randomIterator = u;
  function t(a) {
    var f = typeof a == "number" ? a : +/* @__PURE__ */ new Date();
    return new e(f);
  }
  function e(a) {
    this.seed = a;
  }
  e.prototype.next = s, e.prototype.nextDouble = o, e.prototype.uniform = o, e.prototype.gaussian = n;
  function n() {
    var a, f, d;
    do
      f = this.nextDouble() * 2 - 1, d = this.nextDouble() * 2 - 1, a = f * f + d * d;
    while (a >= 1 || a === 0);
    return f * Math.sqrt(-2 * Math.log(a) / a);
  }
  e.prototype.levy = r;
  function r() {
    var a = 1.5, f = Math.pow(
      i(1 + a) * Math.sin(Math.PI * a / 2) / (i((1 + a) / 2) * a * Math.pow(2, (a - 1) / 2)),
      1 / a
    );
    return this.gaussian() * f / Math.pow(Math.abs(this.gaussian()), 1 / a);
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
  function u(a, f) {
    var d = f || t();
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
      var g, l, x;
      for (g = a.length - 1; g > 0; --g)
        l = d.next(g + 1), x = a[l], a[l] = a[g], a[g] = x;
      return a;
    }
    function v(g) {
      var l, x, p;
      for (l = a.length - 1; l > 0; --l)
        x = d.next(l + 1), p = a[x], a[x] = a[l], a[l] = p, g(p);
      a.length && g(a[0]);
    }
  }
  return re.exports;
}
var xt = Bn, bn = nn, _n = on, Mn = fn, Nn = dn, $n = pn, En = yn, Ve = {};
function Bn(t) {
  var e = wn(), n = xn(), r = Be;
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
  var i = Ve[t.dimensions];
  if (!i) {
    var o = t.dimensions;
    i = {
      Body: bn(o, t.debug),
      createQuadTree: _n(o),
      createBounds: Mn(o),
      createDragForce: Nn(o),
      createSpringForce: $n(o),
      integrate: En(o)
    }, Ve[o] = i;
  }
  var s = i.Body, u = i.createQuadTree, a = i.createBounds, f = i.createDragForce, d = i.createSpringForce, c = i.integrate, v = (y) => new s(y), g = mn().random(42), l = [], x = [], p = u(t, g), h = a(l, t, g), M = d(t, g), b = f(t), _ = 0, w = [], N = /* @__PURE__ */ new Map(), k = 0;
  F("nbody", J), F("spring", m);
  var C = {
    /**
     * Array of bodies, registered with current simulator
     *
     * Note: To add new body, use addBody() method. This property is only
     * exposed for testing/performance purposes.
     */
    bodies: l,
    quadTree: p,
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
    addForce: F,
    /**
     * Removes a force from the simulation.
     */
    removeForce: A,
    /**
     * Returns a map of all registered forces.
     */
    getForces: P,
    /**
     * Performs one step of force simulation.
     *
     * @returns {boolean} true if system is considered stable; False otherwise.
     */
    step: function() {
      for (var y = 0; y < w.length; ++y)
        w[y](k);
      var $ = c(l, t.timeStep, t.adaptiveTimeStepWeight);
      return k += 1, $;
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
      var $ = v(y);
      return l.push($), $;
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
        var $ = l.indexOf(y);
        if (!($ < 0))
          return l.splice($, 1), l.length === 0 && h.reset(), !0;
      }
    },
    /**
     * Adds a spring to this simulation.
     *
     * @returns {Object} - a handle for a spring. If you want to later remove
     * spring pass it to removeSpring() method.
     */
    addSpring: function(y, $, S, V) {
      if (!y || !$)
        throw new Error("Cannot add null spring to force simulator");
      typeof S != "number" && (S = -1);
      var U = new e(y, $, S, V >= 0 ? V : -1);
      return x.push(U), U;
    },
    /**
     * Returns amount of movement performed on last step() call
     */
    getTotalMovement: function() {
      return _;
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
        var $ = x.indexOf(y);
        if ($ > -1)
          return x.splice($, 1), !0;
      }
    },
    getBestNewBodyPosition: function(y) {
      return h.getBestNewPosition(y);
    },
    /**
     * Returns bounding box which covers all bodies
     */
    getBBox: I,
    getBoundingBox: I,
    invalidateBBox: function() {
      console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call");
    },
    // TODO: Move the force specific stuff to force
    gravity: function(y) {
      return y !== void 0 ? (t.gravity = y, p.options({ gravity: y }), this) : t.gravity;
    },
    theta: function(y) {
      return y !== void 0 ? (t.theta = y, p.options({ theta: y }), this) : t.theta;
    },
    /**
     * Returns pseudo-random number generator instance.
     */
    random: g
  };
  return kn(t, C), r(C), C;
  function I() {
    return h.update(), h.box;
  }
  function F(y, $) {
    if (N.has(y))
      throw new Error("Force " + y + " is already added");
    N.set(y, $), w.push($);
  }
  function A(y) {
    var $ = w.indexOf(N.get(y));
    $ < 0 || (w.splice($, 1), N.delete(y));
  }
  function P() {
    return N;
  }
  function J() {
    if (l.length !== 0) {
      p.insertBodies(l);
      for (var y = l.length; y--; ) {
        var $ = l[y];
        $.isPinned || ($.reset(), p.updateBodyForce($), b.update($));
      }
    }
  }
  function m() {
    for (var y = x.length; y--; )
      M.update(x[y]);
  }
}
function kn(t, e) {
  for (var n in t)
    Cn(t, e, n);
}
function Cn(t, e, n) {
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
ke.exports = zn;
ke.exports.simulator = xt;
var qn = Be;
function zn(t, e) {
  if (!t)
    throw new Error("Graph structure cannot be undefined");
  var n = e && e.createSimulator || xt, r = n(e);
  if (Array.isArray(e))
    throw new Error("Physics settings is expected to be an object");
  var i = t.version > 19 ? J : P;
  e && typeof e.nodeMass == "function" && (i = e.nodeMass);
  var o = /* @__PURE__ */ new Map(), s = {}, u = 0, a = r.settings.springTransform || Ln;
  b(), p();
  var f = !1, d = {
    /**
     * Performs one step of iterative layout algorithm
     *
     * @returns {boolean} true if the system should be considered stable; False otherwise.
     * The system is stable if no further call to `step()` can improve the layout.
     */
    step: function() {
      if (u === 0)
        return c(!0), !0;
      var m = r.step();
      d.lastMove = m, d.fire("step");
      var y = m / u, $ = y <= 0.01;
      return c($), $;
    },
    /**
     * For a given `nodeId` returns position
     */
    getNodePosition: function(m) {
      return A(m).pos;
    },
    /**
     * Sets position of a node to a given coordinates
     * @param {string} nodeId node identifier
     * @param {number} x position of a node
     * @param {number} y position of a node
     * @param {number=} z position of node (only if applicable to body)
     */
    setNodePosition: function(m) {
      var y = A(m);
      y.setPosition.apply(y, Array.prototype.slice.call(arguments, 1));
    },
    /**
     * @returns {Object} Link position by link id
     * @returns {Object.from} {x, y} coordinates of link start
     * @returns {Object.to} {x, y} coordinates of link end
     */
    getLinkPosition: function(m) {
      var y = s[m];
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
    pinNode: function(m, y) {
      var $ = A(m.id);
      $.isPinned = !!y;
    },
    /**
     * Checks whether given graph's node is currently pinned
     */
    isNodePinned: function(m) {
      return A(m.id).isPinned;
    },
    /**
     * Request to release all resources
     */
    dispose: function() {
      t.off("changed", M), d.fire("disposed");
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
    graph: t,
    /**
     * Gets amount of movement performed during last step operation
     */
    lastMove: 0
  };
  return qn(d), d;
  function c(m) {
    f !== m && (f = m, h(m));
  }
  function v(m) {
    o.forEach(m);
  }
  function g() {
    var m = 0, y = 0;
    return v(function($) {
      m += Math.abs($.force.x), y += Math.abs($.force.y);
    }), Math.sqrt(m * m + y * y);
  }
  function l(m, y) {
    var $;
    if (y === void 0)
      typeof m != "object" ? $ = m : $ = m.id;
    else {
      var S = t.hasLink(m, y);
      if (!S)
        return;
      $ = S.id;
    }
    return s[$];
  }
  function x(m) {
    return o.get(m);
  }
  function p() {
    t.on("changed", M);
  }
  function h(m) {
    d.fire("stable", m);
  }
  function M(m) {
    for (var y = 0; y < m.length; ++y) {
      var $ = m[y];
      $.changeType === "add" ? ($.node && _($.node.id), $.link && N($.link)) : $.changeType === "remove" && ($.node && w($.node), $.link && k($.link));
    }
    u = t.getNodesCount();
  }
  function b() {
    u = 0, t.forEachNode(function(m) {
      _(m.id), u += 1;
    }), t.forEachLink(N);
  }
  function _(m) {
    var y = o.get(m);
    if (!y) {
      var $ = t.getNode(m);
      if (!$)
        throw new Error("initBody() was called with unknown node id");
      var S = $.position;
      if (!S) {
        var V = C($);
        S = r.getBestNewBodyPosition(V);
      }
      y = r.addBodyAt(S), y.id = m, o.set(m, y), I(m), F($) && (y.isPinned = !0);
    }
  }
  function w(m) {
    var y = m.id, $ = o.get(y);
    $ && (o.delete(y), r.removeBody($));
  }
  function N(m) {
    I(m.fromId), I(m.toId);
    var y = o.get(m.fromId), $ = o.get(m.toId), S = r.addSpring(y, $, m.length);
    a(m, S), s[m.id] = S;
  }
  function k(m) {
    var y = s[m.id];
    if (y) {
      var $ = t.getNode(m.fromId), S = t.getNode(m.toId);
      $ && I($.id), S && I(S.id), delete s[m.id], r.removeSpring(y);
    }
  }
  function C(m) {
    var y = [];
    if (!m.links)
      return y;
    for (var $ = Math.min(m.links.length, 2), S = 0; S < $; ++S) {
      var V = m.links[S], U = V.fromId !== m.id ? o.get(V.fromId) : o.get(V.toId);
      U && U.pos && y.push(U);
    }
    return y;
  }
  function I(m) {
    var y = o.get(m);
    if (y.mass = i(m), Number.isNaN(y.mass))
      throw new Error("Node mass should be a number");
  }
  function F(m) {
    return m && (m.isPinned || m.data && m.data.isPinned);
  }
  function A(m) {
    var y = o.get(m);
    return y || (_(m), y = o.get(m)), y;
  }
  function P(m) {
    var y = t.getLinks(m);
    return y ? 1 + y.length / 3 : 1;
  }
  function J(m) {
    var y = t.getLinks(m);
    return y ? 1 + y.size / 3 : 1;
  }
}
function Ln() {
}
var Pn = ke.exports;
const In = /* @__PURE__ */ rt(Pn);
class Fn {
  constructor() {
    q(this, "ngraph");
    q(this, "ngraphLayout");
    q(this, "nodeMapping", /* @__PURE__ */ new Map());
    q(this, "edgeMapping", /* @__PURE__ */ new Map());
    this.ngraph = Zt(), this.ngraphLayout = In(this.ngraph, { dimensions: 3 });
  }
  async init() {
  }
  refresh() {
  }
  step() {
    this.ngraphLayout.step();
  }
  addNode(e) {
    const n = this.ngraph.addNode(e.id, { parentNode: e });
    this.nodeMapping.set(e, n);
  }
  addEdge(e) {
    const n = this.ngraph.addLink(e.srcId, e.dstId, { parentEdge: this });
    this.edgeMapping.set(e, n);
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
function An(t, e, n) {
  var r, i = 1;
  t == null && (t = 0), e == null && (e = 0), n == null && (n = 0);
  function o() {
    var s, u = r.length, a, f = 0, d = 0, c = 0;
    for (s = 0; s < u; ++s)
      a = r[s], f += a.x || 0, d += a.y || 0, c += a.z || 0;
    for (f = (f / u - t) * i, d = (d / u - e) * i, c = (c / u - n) * i, s = 0; s < u; ++s)
      a = r[s], f && (a.x -= f), d && (a.y -= d), c && (a.z -= c);
  }
  return o.initialize = function(s) {
    r = s;
  }, o.x = function(s) {
    return arguments.length ? (t = +s, o) : t;
  }, o.y = function(s) {
    return arguments.length ? (e = +s, o) : e;
  }, o.z = function(s) {
    return arguments.length ? (n = +s, o) : n;
  }, o.strength = function(s) {
    return arguments.length ? (i = +s, o) : i;
  }, o;
}
function Sn(t) {
  const e = +this._x.call(null, t);
  return mt(this.cover(e), e, t);
}
function mt(t, e, n) {
  if (isNaN(e))
    return t;
  var r, i = t._root, o = { data: n }, s = t._x0, u = t._x1, a, f, d, c, v;
  if (!i)
    return t._root = o, t;
  for (; i.length; )
    if ((d = e >= (a = (s + u) / 2)) ? s = a : u = a, r = i, !(i = i[c = +d]))
      return r[c] = o, t;
  if (f = +t._x.call(null, i.data), e === f)
    return o.next = i, r ? r[c] = o : t._root = o, t;
  do
    r = r ? r[c] = new Array(2) : t._root = new Array(2), (d = e >= (a = (s + u) / 2)) ? s = a : u = a;
  while ((c = +d) == (v = +(f >= a)));
  return r[v] = i, r[c] = o, t;
}
function Tn(t) {
  Array.isArray(t) || (t = Array.from(t));
  const e = t.length, n = new Float64Array(e);
  let r = 1 / 0, i = -1 / 0;
  for (let o = 0, s; o < e; ++o)
    isNaN(s = +this._x.call(null, t[o])) || (n[o] = s, s < r && (r = s), s > i && (i = s));
  if (r > i)
    return this;
  this.cover(r).cover(i);
  for (let o = 0; o < e; ++o)
    mt(this, n[o], t[o]);
  return this;
}
function Dn(t) {
  if (isNaN(t = +t))
    return this;
  var e = this._x0, n = this._x1;
  if (isNaN(e))
    n = (e = Math.floor(t)) + 1;
  else {
    for (var r = n - e || 1, i = this._root, o, s; e > t || t >= n; )
      switch (s = +(t < e), o = new Array(2), o[s] = i, i = o, r *= 2, s) {
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
function On() {
  var t = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        t.push(e.data);
      while (e = e.next);
  }), t;
}
function jn(t) {
  return arguments.length ? this.cover(+t[0][0]).cover(+t[1][0]) : isNaN(this._x0) ? void 0 : [[this._x0], [this._x1]];
}
function X(t, e, n) {
  this.node = t, this.x0 = e, this.x1 = n;
}
function Gn(t, e) {
  var n, r = this._x0, i, o, s = this._x1, u = [], a = this._root, f, d;
  for (a && u.push(new X(a, r, s)), e == null ? e = 1 / 0 : (r = t - e, s = t + e); f = u.pop(); )
    if (!(!(a = f.node) || (i = f.x0) > s || (o = f.x1) < r))
      if (a.length) {
        var c = (i + o) / 2;
        u.push(
          new X(a[1], c, o),
          new X(a[0], i, c)
        ), (d = +(t >= c)) && (f = u[u.length - 1], u[u.length - 1] = u[u.length - 1 - d], u[u.length - 1 - d] = f);
      } else {
        var v = Math.abs(t - +this._x.call(null, a.data));
        v < e && (e = v, r = t - v, s = t + v, n = a.data);
      }
  return n;
}
function Qn(t) {
  if (isNaN(a = +this._x.call(null, t)))
    return this;
  var e, n = this._root, r, i, o, s = this._x0, u = this._x1, a, f, d, c, v;
  if (!n)
    return this;
  if (n.length)
    for (; ; ) {
      if ((d = a >= (f = (s + u) / 2)) ? s = f : u = f, e = n, !(n = n[c = +d]))
        return this;
      if (!n.length)
        break;
      e[c + 1 & 1] && (r = e, v = c);
    }
  for (; n.data !== t; )
    if (i = n, !(n = n.next))
      return this;
  return (o = n.next) && delete n.next, i ? (o ? i.next = o : delete i.next, this) : e ? (o ? e[c] = o : delete e[c], (n = e[0] || e[1]) && n === (e[1] || e[0]) && !n.length && (r ? r[v] = n : this._root = n), this) : (this._root = o, this);
}
function Rn(t) {
  for (var e = 0, n = t.length; e < n; ++e)
    this.remove(t[e]);
  return this;
}
function Vn() {
  return this._root;
}
function Hn() {
  var t = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++t;
      while (e = e.next);
  }), t;
}
function Un(t) {
  var e = [], n, r = this._root, i, o, s;
  for (r && e.push(new X(r, this._x0, this._x1)); n = e.pop(); )
    if (!t(r = n.node, o = n.x0, s = n.x1) && r.length) {
      var u = (o + s) / 2;
      (i = r[1]) && e.push(new X(i, u, s)), (i = r[0]) && e.push(new X(i, o, u));
    }
  return this;
}
function Wn(t) {
  var e = [], n = [], r;
  for (this._root && e.push(new X(this._root, this._x0, this._x1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var o, s = r.x0, u = r.x1, a = (s + u) / 2;
      (o = i[0]) && e.push(new X(o, s, a)), (o = i[1]) && e.push(new X(o, a, u));
    }
    n.push(r);
  }
  for (; r = n.pop(); )
    t(r.node, r.x0, r.x1);
  return this;
}
function Xn(t) {
  return t[0];
}
function Jn(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function bt(t, e) {
  var n = new Ie(e ?? Xn, NaN, NaN);
  return t == null ? n : n.addAll(t);
}
function Ie(t, e, n) {
  this._x = t, this._x0 = e, this._x1 = n, this._root = void 0;
}
function He(t) {
  for (var e = { data: t.data }, n = e; t = t.next; )
    n = n.next = { data: t.data };
  return e;
}
var R = bt.prototype = Ie.prototype;
R.copy = function() {
  var t = new Ie(this._x, this._x0, this._x1), e = this._root, n, r;
  if (!e)
    return t;
  if (!e.length)
    return t._root = He(e), t;
  for (n = [{ source: e, target: t._root = new Array(2) }]; e = n.pop(); )
    for (var i = 0; i < 2; ++i)
      (r = e.source[i]) && (r.length ? n.push({ source: r, target: e.target[i] = new Array(2) }) : e.target[i] = He(r));
  return t;
};
R.add = Sn;
R.addAll = Tn;
R.cover = Dn;
R.data = On;
R.extent = jn;
R.find = Gn;
R.remove = Qn;
R.removeAll = Rn;
R.root = Vn;
R.size = Hn;
R.visit = Un;
R.visitAfter = Wn;
R.x = Jn;
function Yn(t) {
  const e = +this._x.call(null, t), n = +this._y.call(null, t);
  return _t(this.cover(e, n), e, n, t);
}
function _t(t, e, n, r) {
  if (isNaN(e) || isNaN(n))
    return t;
  var i, o = t._root, s = { data: r }, u = t._x0, a = t._y0, f = t._x1, d = t._y1, c, v, g, l, x, p, h, M;
  if (!o)
    return t._root = s, t;
  for (; o.length; )
    if ((x = e >= (c = (u + f) / 2)) ? u = c : f = c, (p = n >= (v = (a + d) / 2)) ? a = v : d = v, i = o, !(o = o[h = p << 1 | x]))
      return i[h] = s, t;
  if (g = +t._x.call(null, o.data), l = +t._y.call(null, o.data), e === g && n === l)
    return s.next = o, i ? i[h] = s : t._root = s, t;
  do
    i = i ? i[h] = new Array(4) : t._root = new Array(4), (x = e >= (c = (u + f) / 2)) ? u = c : f = c, (p = n >= (v = (a + d) / 2)) ? a = v : d = v;
  while ((h = p << 1 | x) === (M = (l >= v) << 1 | g >= c));
  return i[M] = o, i[h] = s, t;
}
function Kn(t) {
  var e, n, r = t.length, i, o, s = new Array(r), u = new Array(r), a = 1 / 0, f = 1 / 0, d = -1 / 0, c = -1 / 0;
  for (n = 0; n < r; ++n)
    isNaN(i = +this._x.call(null, e = t[n])) || isNaN(o = +this._y.call(null, e)) || (s[n] = i, u[n] = o, i < a && (a = i), i > d && (d = i), o < f && (f = o), o > c && (c = o));
  if (a > d || f > c)
    return this;
  for (this.cover(a, f).cover(d, c), n = 0; n < r; ++n)
    _t(this, s[n], u[n], t[n]);
  return this;
}
function Zn(t, e) {
  if (isNaN(t = +t) || isNaN(e = +e))
    return this;
  var n = this._x0, r = this._y0, i = this._x1, o = this._y1;
  if (isNaN(n))
    i = (n = Math.floor(t)) + 1, o = (r = Math.floor(e)) + 1;
  else {
    for (var s = i - n || 1, u = this._root, a, f; n > t || t >= i || r > e || e >= o; )
      switch (f = (e < r) << 1 | t < n, a = new Array(4), a[f] = u, u = a, s *= 2, f) {
        case 0:
          i = n + s, o = r + s;
          break;
        case 1:
          n = i - s, o = r + s;
          break;
        case 2:
          i = n + s, r = o - s;
          break;
        case 3:
          n = i - s, r = o - s;
          break;
      }
    this._root && this._root.length && (this._root = u);
  }
  return this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = o, this;
}
function er() {
  var t = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        t.push(e.data);
      while (e = e.next);
  }), t;
}
function tr(t) {
  return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function j(t, e, n, r, i) {
  this.node = t, this.x0 = e, this.y0 = n, this.x1 = r, this.y1 = i;
}
function nr(t, e, n) {
  var r, i = this._x0, o = this._y0, s, u, a, f, d = this._x1, c = this._y1, v = [], g = this._root, l, x;
  for (g && v.push(new j(g, i, o, d, c)), n == null ? n = 1 / 0 : (i = t - n, o = e - n, d = t + n, c = e + n, n *= n); l = v.pop(); )
    if (!(!(g = l.node) || (s = l.x0) > d || (u = l.y0) > c || (a = l.x1) < i || (f = l.y1) < o))
      if (g.length) {
        var p = (s + a) / 2, h = (u + f) / 2;
        v.push(
          new j(g[3], p, h, a, f),
          new j(g[2], s, h, p, f),
          new j(g[1], p, u, a, h),
          new j(g[0], s, u, p, h)
        ), (x = (e >= h) << 1 | t >= p) && (l = v[v.length - 1], v[v.length - 1] = v[v.length - 1 - x], v[v.length - 1 - x] = l);
      } else {
        var M = t - +this._x.call(null, g.data), b = e - +this._y.call(null, g.data), _ = M * M + b * b;
        if (_ < n) {
          var w = Math.sqrt(n = _);
          i = t - w, o = e - w, d = t + w, c = e + w, r = g.data;
        }
      }
  return r;
}
function rr(t) {
  if (isNaN(d = +this._x.call(null, t)) || isNaN(c = +this._y.call(null, t)))
    return this;
  var e, n = this._root, r, i, o, s = this._x0, u = this._y0, a = this._x1, f = this._y1, d, c, v, g, l, x, p, h;
  if (!n)
    return this;
  if (n.length)
    for (; ; ) {
      if ((l = d >= (v = (s + a) / 2)) ? s = v : a = v, (x = c >= (g = (u + f) / 2)) ? u = g : f = g, e = n, !(n = n[p = x << 1 | l]))
        return this;
      if (!n.length)
        break;
      (e[p + 1 & 3] || e[p + 2 & 3] || e[p + 3 & 3]) && (r = e, h = p);
    }
  for (; n.data !== t; )
    if (i = n, !(n = n.next))
      return this;
  return (o = n.next) && delete n.next, i ? (o ? i.next = o : delete i.next, this) : e ? (o ? e[p] = o : delete e[p], (n = e[0] || e[1] || e[2] || e[3]) && n === (e[3] || e[2] || e[1] || e[0]) && !n.length && (r ? r[h] = n : this._root = n), this) : (this._root = o, this);
}
function ir(t) {
  for (var e = 0, n = t.length; e < n; ++e)
    this.remove(t[e]);
  return this;
}
function or() {
  return this._root;
}
function ar() {
  var t = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++t;
      while (e = e.next);
  }), t;
}
function sr(t) {
  var e = [], n, r = this._root, i, o, s, u, a;
  for (r && e.push(new j(r, this._x0, this._y0, this._x1, this._y1)); n = e.pop(); )
    if (!t(r = n.node, o = n.x0, s = n.y0, u = n.x1, a = n.y1) && r.length) {
      var f = (o + u) / 2, d = (s + a) / 2;
      (i = r[3]) && e.push(new j(i, f, d, u, a)), (i = r[2]) && e.push(new j(i, o, d, f, a)), (i = r[1]) && e.push(new j(i, f, s, u, d)), (i = r[0]) && e.push(new j(i, o, s, f, d));
    }
  return this;
}
function fr(t) {
  var e = [], n = [], r;
  for (this._root && e.push(new j(this._root, this._x0, this._y0, this._x1, this._y1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var o, s = r.x0, u = r.y0, a = r.x1, f = r.y1, d = (s + a) / 2, c = (u + f) / 2;
      (o = i[0]) && e.push(new j(o, s, u, d, c)), (o = i[1]) && e.push(new j(o, d, u, a, c)), (o = i[2]) && e.push(new j(o, s, c, d, f)), (o = i[3]) && e.push(new j(o, d, c, a, f));
    }
    n.push(r);
  }
  for (; r = n.pop(); )
    t(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function ur(t) {
  return t[0];
}
function hr(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function dr(t) {
  return t[1];
}
function cr(t) {
  return arguments.length ? (this._y = t, this) : this._y;
}
function Mt(t, e, n) {
  var r = new Fe(e ?? ur, n ?? dr, NaN, NaN, NaN, NaN);
  return t == null ? r : r.addAll(t);
}
function Fe(t, e, n, r, i, o) {
  this._x = t, this._y = e, this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0;
}
function Ue(t) {
  for (var e = { data: t.data }, n = e; t = t.next; )
    n = n.next = { data: t.data };
  return e;
}
var G = Mt.prototype = Fe.prototype;
G.copy = function() {
  var t = new Fe(this._x, this._y, this._x0, this._y0, this._x1, this._y1), e = this._root, n, r;
  if (!e)
    return t;
  if (!e.length)
    return t._root = Ue(e), t;
  for (n = [{ source: e, target: t._root = new Array(4) }]; e = n.pop(); )
    for (var i = 0; i < 4; ++i)
      (r = e.source[i]) && (r.length ? n.push({ source: r, target: e.target[i] = new Array(4) }) : e.target[i] = Ue(r));
  return t;
};
G.add = Yn;
G.addAll = Kn;
G.cover = Zn;
G.data = er;
G.extent = tr;
G.find = nr;
G.remove = rr;
G.removeAll = ir;
G.root = or;
G.size = ar;
G.visit = sr;
G.visitAfter = fr;
G.x = hr;
G.y = cr;
function lr(t) {
  const e = +this._x.call(null, t), n = +this._y.call(null, t), r = +this._z.call(null, t);
  return Nt(this.cover(e, n, r), e, n, r, t);
}
function Nt(t, e, n, r, i) {
  if (isNaN(e) || isNaN(n) || isNaN(r))
    return t;
  var o, s = t._root, u = { data: i }, a = t._x0, f = t._y0, d = t._z0, c = t._x1, v = t._y1, g = t._z1, l, x, p, h, M, b, _, w, N, k, C;
  if (!s)
    return t._root = u, t;
  for (; s.length; )
    if ((_ = e >= (l = (a + c) / 2)) ? a = l : c = l, (w = n >= (x = (f + v) / 2)) ? f = x : v = x, (N = r >= (p = (d + g) / 2)) ? d = p : g = p, o = s, !(s = s[k = N << 2 | w << 1 | _]))
      return o[k] = u, t;
  if (h = +t._x.call(null, s.data), M = +t._y.call(null, s.data), b = +t._z.call(null, s.data), e === h && n === M && r === b)
    return u.next = s, o ? o[k] = u : t._root = u, t;
  do
    o = o ? o[k] = new Array(8) : t._root = new Array(8), (_ = e >= (l = (a + c) / 2)) ? a = l : c = l, (w = n >= (x = (f + v) / 2)) ? f = x : v = x, (N = r >= (p = (d + g) / 2)) ? d = p : g = p;
  while ((k = N << 2 | w << 1 | _) === (C = (b >= p) << 2 | (M >= x) << 1 | h >= l));
  return o[C] = s, o[k] = u, t;
}
function pr(t) {
  Array.isArray(t) || (t = Array.from(t));
  const e = t.length, n = new Float64Array(e), r = new Float64Array(e), i = new Float64Array(e);
  let o = 1 / 0, s = 1 / 0, u = 1 / 0, a = -1 / 0, f = -1 / 0, d = -1 / 0;
  for (let c = 0, v, g, l, x; c < e; ++c)
    isNaN(g = +this._x.call(null, v = t[c])) || isNaN(l = +this._y.call(null, v)) || isNaN(x = +this._z.call(null, v)) || (n[c] = g, r[c] = l, i[c] = x, g < o && (o = g), g > a && (a = g), l < s && (s = l), l > f && (f = l), x < u && (u = x), x > d && (d = x));
  if (o > a || s > f || u > d)
    return this;
  this.cover(o, s, u).cover(a, f, d);
  for (let c = 0; c < e; ++c)
    Nt(this, n[c], r[c], i[c], t[c]);
  return this;
}
function gr(t, e, n) {
  if (isNaN(t = +t) || isNaN(e = +e) || isNaN(n = +n))
    return this;
  var r = this._x0, i = this._y0, o = this._z0, s = this._x1, u = this._y1, a = this._z1;
  if (isNaN(r))
    s = (r = Math.floor(t)) + 1, u = (i = Math.floor(e)) + 1, a = (o = Math.floor(n)) + 1;
  else {
    for (var f = s - r || 1, d = this._root, c, v; r > t || t >= s || i > e || e >= u || o > n || n >= a; )
      switch (v = (n < o) << 2 | (e < i) << 1 | t < r, c = new Array(8), c[v] = d, d = c, f *= 2, v) {
        case 0:
          s = r + f, u = i + f, a = o + f;
          break;
        case 1:
          r = s - f, u = i + f, a = o + f;
          break;
        case 2:
          s = r + f, i = u - f, a = o + f;
          break;
        case 3:
          r = s - f, i = u - f, a = o + f;
          break;
        case 4:
          s = r + f, u = i + f, o = a - f;
          break;
        case 5:
          r = s - f, u = i + f, o = a - f;
          break;
        case 6:
          s = r + f, i = u - f, o = a - f;
          break;
        case 7:
          r = s - f, i = u - f, o = a - f;
          break;
      }
    this._root && this._root.length && (this._root = d);
  }
  return this._x0 = r, this._y0 = i, this._z0 = o, this._x1 = s, this._y1 = u, this._z1 = a, this;
}
function vr() {
  var t = [];
  return this.visit(function(e) {
    if (!e.length)
      do
        t.push(e.data);
      while (e = e.next);
  }), t;
}
function yr(t) {
  return arguments.length ? this.cover(+t[0][0], +t[0][1], +t[0][2]).cover(+t[1][0], +t[1][1], +t[1][2]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0, this._z0], [this._x1, this._y1, this._z1]];
}
function L(t, e, n, r, i, o, s) {
  this.node = t, this.x0 = e, this.y0 = n, this.z0 = r, this.x1 = i, this.y1 = o, this.z1 = s;
}
function wr(t, e, n, r) {
  var i, o = this._x0, s = this._y0, u = this._z0, a, f, d, c, v, g, l = this._x1, x = this._y1, p = this._z1, h = [], M = this._root, b, _;
  for (M && h.push(new L(M, o, s, u, l, x, p)), r == null ? r = 1 / 0 : (o = t - r, s = e - r, u = n - r, l = t + r, x = e + r, p = n + r, r *= r); b = h.pop(); )
    if (!(!(M = b.node) || (a = b.x0) > l || (f = b.y0) > x || (d = b.z0) > p || (c = b.x1) < o || (v = b.y1) < s || (g = b.z1) < u))
      if (M.length) {
        var w = (a + c) / 2, N = (f + v) / 2, k = (d + g) / 2;
        h.push(
          new L(M[7], w, N, k, c, v, g),
          new L(M[6], a, N, k, w, v, g),
          new L(M[5], w, f, k, c, N, g),
          new L(M[4], a, f, k, w, N, g),
          new L(M[3], w, N, d, c, v, k),
          new L(M[2], a, N, d, w, v, k),
          new L(M[1], w, f, d, c, N, k),
          new L(M[0], a, f, d, w, N, k)
        ), (_ = (n >= k) << 2 | (e >= N) << 1 | t >= w) && (b = h[h.length - 1], h[h.length - 1] = h[h.length - 1 - _], h[h.length - 1 - _] = b);
      } else {
        var C = t - +this._x.call(null, M.data), I = e - +this._y.call(null, M.data), F = n - +this._z.call(null, M.data), A = C * C + I * I + F * F;
        if (A < r) {
          var P = Math.sqrt(r = A);
          o = t - P, s = e - P, u = n - P, l = t + P, x = e + P, p = n + P, i = M.data;
        }
      }
  return i;
}
function xr(t) {
  if (isNaN(v = +this._x.call(null, t)) || isNaN(g = +this._y.call(null, t)) || isNaN(l = +this._z.call(null, t)))
    return this;
  var e, n = this._root, r, i, o, s = this._x0, u = this._y0, a = this._z0, f = this._x1, d = this._y1, c = this._z1, v, g, l, x, p, h, M, b, _, w, N;
  if (!n)
    return this;
  if (n.length)
    for (; ; ) {
      if ((M = v >= (x = (s + f) / 2)) ? s = x : f = x, (b = g >= (p = (u + d) / 2)) ? u = p : d = p, (_ = l >= (h = (a + c) / 2)) ? a = h : c = h, e = n, !(n = n[w = _ << 2 | b << 1 | M]))
        return this;
      if (!n.length)
        break;
      (e[w + 1 & 7] || e[w + 2 & 7] || e[w + 3 & 7] || e[w + 4 & 7] || e[w + 5 & 7] || e[w + 6 & 7] || e[w + 7 & 7]) && (r = e, N = w);
    }
  for (; n.data !== t; )
    if (i = n, !(n = n.next))
      return this;
  return (o = n.next) && delete n.next, i ? (o ? i.next = o : delete i.next, this) : e ? (o ? e[w] = o : delete e[w], (n = e[0] || e[1] || e[2] || e[3] || e[4] || e[5] || e[6] || e[7]) && n === (e[7] || e[6] || e[5] || e[4] || e[3] || e[2] || e[1] || e[0]) && !n.length && (r ? r[N] = n : this._root = n), this) : (this._root = o, this);
}
function mr(t) {
  for (var e = 0, n = t.length; e < n; ++e)
    this.remove(t[e]);
  return this;
}
function br() {
  return this._root;
}
function _r() {
  var t = 0;
  return this.visit(function(e) {
    if (!e.length)
      do
        ++t;
      while (e = e.next);
  }), t;
}
function Mr(t) {
  var e = [], n, r = this._root, i, o, s, u, a, f, d;
  for (r && e.push(new L(r, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); n = e.pop(); )
    if (!t(r = n.node, o = n.x0, s = n.y0, u = n.z0, a = n.x1, f = n.y1, d = n.z1) && r.length) {
      var c = (o + a) / 2, v = (s + f) / 2, g = (u + d) / 2;
      (i = r[7]) && e.push(new L(i, c, v, g, a, f, d)), (i = r[6]) && e.push(new L(i, o, v, g, c, f, d)), (i = r[5]) && e.push(new L(i, c, s, g, a, v, d)), (i = r[4]) && e.push(new L(i, o, s, g, c, v, d)), (i = r[3]) && e.push(new L(i, c, v, u, a, f, g)), (i = r[2]) && e.push(new L(i, o, v, u, c, f, g)), (i = r[1]) && e.push(new L(i, c, s, u, a, v, g)), (i = r[0]) && e.push(new L(i, o, s, u, c, v, g));
    }
  return this;
}
function Nr(t) {
  var e = [], n = [], r;
  for (this._root && e.push(new L(this._root, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); r = e.pop(); ) {
    var i = r.node;
    if (i.length) {
      var o, s = r.x0, u = r.y0, a = r.z0, f = r.x1, d = r.y1, c = r.z1, v = (s + f) / 2, g = (u + d) / 2, l = (a + c) / 2;
      (o = i[0]) && e.push(new L(o, s, u, a, v, g, l)), (o = i[1]) && e.push(new L(o, v, u, a, f, g, l)), (o = i[2]) && e.push(new L(o, s, g, a, v, d, l)), (o = i[3]) && e.push(new L(o, v, g, a, f, d, l)), (o = i[4]) && e.push(new L(o, s, u, l, v, g, c)), (o = i[5]) && e.push(new L(o, v, u, l, f, g, c)), (o = i[6]) && e.push(new L(o, s, g, l, v, d, c)), (o = i[7]) && e.push(new L(o, v, g, l, f, d, c));
    }
    n.push(r);
  }
  for (; r = n.pop(); )
    t(r.node, r.x0, r.y0, r.z0, r.x1, r.y1, r.z1);
  return this;
}
function $r(t) {
  return t[0];
}
function Er(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function Br(t) {
  return t[1];
}
function kr(t) {
  return arguments.length ? (this._y = t, this) : this._y;
}
function Cr(t) {
  return t[2];
}
function qr(t) {
  return arguments.length ? (this._z = t, this) : this._z;
}
function $t(t, e, n, r) {
  var i = new Ae(e ?? $r, n ?? Br, r ?? Cr, NaN, NaN, NaN, NaN, NaN, NaN);
  return t == null ? i : i.addAll(t);
}
function Ae(t, e, n, r, i, o, s, u, a) {
  this._x = t, this._y = e, this._z = n, this._x0 = r, this._y0 = i, this._z0 = o, this._x1 = s, this._y1 = u, this._z1 = a, this._root = void 0;
}
function We(t) {
  for (var e = { data: t.data }, n = e; t = t.next; )
    n = n.next = { data: t.data };
  return e;
}
var O = $t.prototype = Ae.prototype;
O.copy = function() {
  var t = new Ae(this._x, this._y, this._z, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1), e = this._root, n, r;
  if (!e)
    return t;
  if (!e.length)
    return t._root = We(e), t;
  for (n = [{ source: e, target: t._root = new Array(8) }]; e = n.pop(); )
    for (var i = 0; i < 8; ++i)
      (r = e.source[i]) && (r.length ? n.push({ source: r, target: e.target[i] = new Array(8) }) : e.target[i] = We(r));
  return t;
};
O.add = lr;
O.addAll = pr;
O.cover = gr;
O.data = vr;
O.extent = yr;
O.find = wr;
O.remove = xr;
O.removeAll = mr;
O.root = br;
O.size = _r;
O.visit = Mr;
O.visitAfter = Nr;
O.x = Er;
O.y = kr;
O.z = qr;
function fe(t) {
  return function() {
    return t;
  };
}
function W(t) {
  return (t() - 0.5) * 1e-6;
}
function zr(t) {
  return t.index;
}
function Xe(t, e) {
  var n = t.get(e);
  if (console.log("nodeById size", t.size), console.log("nodeById", t), console.log("nodeId", e), !n)
    throw new Error("node not found: " + e);
  return n;
}
function Lr(t) {
  var e = zr, n = v, r, i = fe(30), o, s, u, a, f, d, c = 1;
  t == null && (t = []);
  function v(h) {
    return 1 / Math.min(a[h.source.index], a[h.target.index]);
  }
  function g(h) {
    for (var M = 0, b = t.length; M < c; ++M)
      for (var _ = 0, w, N, k, C = 0, I = 0, F = 0, A, P; _ < b; ++_)
        w = t[_], N = w.source, k = w.target, C = k.x + k.vx - N.x - N.vx || W(d), u > 1 && (I = k.y + k.vy - N.y - N.vy || W(d)), u > 2 && (F = k.z + k.vz - N.z - N.vz || W(d)), A = Math.sqrt(C * C + I * I + F * F), A = (A - o[_]) / A * h * r[_], C *= A, I *= A, F *= A, k.vx -= C * (P = f[_]), u > 1 && (k.vy -= I * P), u > 2 && (k.vz -= F * P), N.vx += C * (P = 1 - P), u > 1 && (N.vy += I * P), u > 2 && (N.vz += F * P);
  }
  function l() {
    if (console.log("links initialize..."), !!s) {
      var h, M = s.length, b = t.length, _ = new Map(s.map((N, k) => [e(N, k, s), N])), w;
      for (h = 0, a = new Array(M); h < b; ++h)
        console.log("setting index", h), w = t[h], w.index = h, typeof w.source != "object" && (w.source = Xe(_, w.source)), typeof w.target != "object" && (w.target = Xe(_, w.target)), a[w.source.index] = (a[w.source.index] || 0) + 1, a[w.target.index] = (a[w.target.index] || 0) + 1;
      for (h = 0, f = new Array(b); h < b; ++h)
        w = t[h], f[h] = a[w.source.index] / (a[w.source.index] + a[w.target.index]);
      r = new Array(b), x(), o = new Array(b), p();
    }
  }
  function x() {
    if (s)
      for (var h = 0, M = t.length; h < M; ++h)
        r[h] = +n(t[h], h, t);
  }
  function p() {
    if (s)
      for (var h = 0, M = t.length; h < M; ++h)
        o[h] = +i(t[h], h, t);
  }
  return g.initialize = function(h, ...M) {
    s = h, d = M.find((b) => typeof b == "function") || Math.random, u = M.find((b) => [1, 2, 3].includes(b)) || 2, l();
  }, g.links = function(h) {
    return arguments.length ? (t = h, l(), g) : t;
  }, g.id = function(h) {
    return arguments.length ? (e = h, g) : e;
  }, g.iterations = function(h) {
    return arguments.length ? (c = +h, g) : c;
  }, g.strength = function(h) {
    return arguments.length ? (n = typeof h == "function" ? h : fe(+h), x(), g) : n;
  }, g.distance = function(h) {
    return arguments.length ? (i = typeof h == "function" ? h : fe(+h), p(), g) : i;
  }, g;
}
var Pr = { value: () => {
} };
function Et() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new le(n);
}
function le(t) {
  this._ = t;
}
function Ir(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
le.prototype = Et.prototype = {
  constructor: le,
  on: function(t, e) {
    var n = this._, r = Ir(t + "", n), i, o = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++o < s; )
        if ((i = (t = r[o]).type) && (i = Fr(n[i], t.name)))
          return i;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++o < s; )
      if (i = (t = r[o]).type)
        n[i] = Je(n[i], t.name, e);
      else if (e == null)
        for (i in n)
          n[i] = Je(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e)
      t[n] = e[n].slice();
    return new le(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), r = 0, i, o; r < i; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r)
      o[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(e, n);
  }
};
function Fr(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Je(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Pr, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var te = 0, oe = 0, ie = 0, Bt = 1e3, pe, ae, ge = 0, ee = 0, ve = 0, ue = typeof performance == "object" && performance.now ? performance : Date, kt = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ct() {
  return ee || (kt(Ar), ee = ue.now() + ve);
}
function Ar() {
  ee = 0;
}
function Me() {
  this._call = this._time = this._next = null;
}
Me.prototype = qt.prototype = {
  constructor: Me,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? Ct() : +n) + (e == null ? 0 : +e), !this._next && ae !== this && (ae ? ae._next = this : pe = this, ae = this), this._call = t, this._time = n, Ne();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ne());
  }
};
function qt(t, e, n) {
  var r = new Me();
  return r.restart(t, e, n), r;
}
function Sr() {
  Ct(), ++te;
  for (var t = pe, e; t; )
    (e = ee - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --te;
}
function Ye() {
  ee = (ge = ue.now()) + ve, te = oe = 0;
  try {
    Sr();
  } finally {
    te = 0, Dr(), ee = 0;
  }
}
function Tr() {
  var t = ue.now(), e = t - ge;
  e > Bt && (ve -= e, ge = t);
}
function Dr() {
  for (var t, e = pe, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : pe = n);
  ae = t, Ne(r);
}
function Ne(t) {
  if (!te) {
    oe && (oe = clearTimeout(oe));
    var e = t - ee;
    e > 24 ? (t < 1 / 0 && (oe = setTimeout(Ye, t - ue.now() - ve)), ie && (ie = clearInterval(ie))) : (ie || (ge = ue.now(), ie = setInterval(Tr, Bt)), te = 1, kt(Ye));
  }
}
const Or = 1664525, jr = 1013904223, Ke = 4294967296;
function Gr() {
  let t = 1;
  return () => (t = (Or * t + jr) % Ke) / Ke;
}
var Ze = 3;
function xe(t) {
  return t.x;
}
function et(t) {
  return t.y;
}
function Qr(t) {
  return t.z;
}
var Rr = 10, Vr = Math.PI * (3 - Math.sqrt(5)), Hr = Math.PI * 20 / (9 + Math.sqrt(221));
function Ur(t, e) {
  e = e || 2;
  var n = Math.min(Ze, Math.max(1, Math.round(e))), r, i = 1, o = 1e-3, s = 1 - Math.pow(o, 1 / 300), u = 0, a = 0.6, f = /* @__PURE__ */ new Map(), d = qt(g), c = Et("tick", "end"), v = Gr();
  t == null && (t = []);
  function g() {
    l(), c.call("tick", r), i < o && (d.stop(), c.call("end", r));
  }
  function l(h) {
    var M, b = t.length, _;
    h === void 0 && (h = 1);
    for (var w = 0; w < h; ++w)
      for (i += (u - i) * s, f.forEach(function(N) {
        N(i);
      }), M = 0; M < b; ++M)
        _ = t[M], _.fx == null ? _.x += _.vx *= a : (_.x = _.fx, _.vx = 0), n > 1 && (_.fy == null ? _.y += _.vy *= a : (_.y = _.fy, _.vy = 0)), n > 2 && (_.fz == null ? _.z += _.vz *= a : (_.z = _.fz, _.vz = 0));
    return r;
  }
  function x() {
    for (var h = 0, M = t.length, b; h < M; ++h) {
      if (b = t[h], b.index = h, b.fx != null && (b.x = b.fx), b.fy != null && (b.y = b.fy), b.fz != null && (b.z = b.fz), isNaN(b.x) || n > 1 && isNaN(b.y) || n > 2 && isNaN(b.z)) {
        var _ = Rr * (n > 2 ? Math.cbrt(0.5 + h) : n > 1 ? Math.sqrt(0.5 + h) : h), w = h * Vr, N = h * Hr;
        n === 1 ? b.x = _ : n === 2 ? (b.x = _ * Math.cos(w), b.y = _ * Math.sin(w)) : (b.x = _ * Math.sin(w) * Math.cos(N), b.y = _ * Math.cos(w), b.z = _ * Math.sin(w) * Math.sin(N));
      }
      (isNaN(b.vx) || n > 1 && isNaN(b.vy) || n > 2 && isNaN(b.vz)) && (b.vx = 0, n > 1 && (b.vy = 0), n > 2 && (b.vz = 0));
    }
  }
  function p(h) {
    return h.initialize && h.initialize(t, v, n), h;
  }
  return x(), r = {
    tick: l,
    restart: function() {
      return d.restart(g), r;
    },
    stop: function() {
      return d.stop(), r;
    },
    numDimensions: function(h) {
      return arguments.length ? (n = Math.min(Ze, Math.max(1, Math.round(h))), f.forEach(p), r) : n;
    },
    nodes: function(h) {
      return arguments.length ? (t = h, x(), f.forEach(p), r) : t;
    },
    alpha: function(h) {
      return arguments.length ? (i = +h, r) : i;
    },
    alphaMin: function(h) {
      return arguments.length ? (o = +h, r) : o;
    },
    alphaDecay: function(h) {
      return arguments.length ? (s = +h, r) : +s;
    },
    alphaTarget: function(h) {
      return arguments.length ? (u = +h, r) : u;
    },
    velocityDecay: function(h) {
      return arguments.length ? (a = 1 - h, r) : 1 - a;
    },
    randomSource: function(h) {
      return arguments.length ? (v = h, f.forEach(p), r) : v;
    },
    force: function(h, M) {
      return arguments.length > 1 ? (M == null ? f.delete(h) : f.set(h, p(M)), r) : f.get(h);
    },
    find: function() {
      var h = Array.prototype.slice.call(arguments), M = h.shift() || 0, b = (n > 1 ? h.shift() : null) || 0, _ = (n > 2 ? h.shift() : null) || 0, w = h.shift() || 1 / 0, N = 0, k = t.length, C, I, F, A, P, J;
      for (w *= w, N = 0; N < k; ++N)
        P = t[N], C = M - P.x, I = b - (P.y || 0), F = _ - (P.z || 0), A = C * C + I * I + F * F, A < w && (J = P, w = A);
      return J;
    },
    on: function(h, M) {
      return arguments.length > 1 ? (c.on(h, M), r) : c.on(h);
    }
  };
}
function Wr() {
  var t, e, n, r, i, o = fe(-30), s, u = 1, a = 1 / 0, f = 0.81;
  function d(l) {
    var x, p = t.length, h = (e === 1 ? bt(t, xe) : e === 2 ? Mt(t, xe, et) : e === 3 ? $t(t, xe, et, Qr) : null).visitAfter(v);
    for (i = l, x = 0; x < p; ++x)
      n = t[x], h.visit(g);
  }
  function c() {
    if (t) {
      var l, x = t.length, p;
      for (s = new Array(x), l = 0; l < x; ++l)
        p = t[l], s[p.index] = +o(p, l, t);
    }
  }
  function v(l) {
    var x = 0, p, h, M = 0, b, _, w, N, k = l.length;
    if (k) {
      for (b = _ = w = N = 0; N < k; ++N)
        (p = l[N]) && (h = Math.abs(p.value)) && (x += p.value, M += h, b += h * (p.x || 0), _ += h * (p.y || 0), w += h * (p.z || 0));
      x *= Math.sqrt(4 / k), l.x = b / M, e > 1 && (l.y = _ / M), e > 2 && (l.z = w / M);
    } else {
      p = l, p.x = p.data.x, e > 1 && (p.y = p.data.y), e > 2 && (p.z = p.data.z);
      do
        x += s[p.data.index];
      while (p = p.next);
    }
    l.value = x;
  }
  function g(l, x, p, h, M) {
    if (!l.value)
      return !0;
    var b = [p, h, M][e - 1], _ = l.x - n.x, w = e > 1 ? l.y - n.y : 0, N = e > 2 ? l.z - n.z : 0, k = b - x, C = _ * _ + w * w + N * N;
    if (k * k / f < C)
      return C < a && (_ === 0 && (_ = W(r), C += _ * _), e > 1 && w === 0 && (w = W(r), C += w * w), e > 2 && N === 0 && (N = W(r), C += N * N), C < u && (C = Math.sqrt(u * C)), n.vx += _ * l.value * i / C, e > 1 && (n.vy += w * l.value * i / C), e > 2 && (n.vz += N * l.value * i / C)), !0;
    if (l.length || C >= a)
      return;
    (l.data !== n || l.next) && (_ === 0 && (_ = W(r), C += _ * _), e > 1 && w === 0 && (w = W(r), C += w * w), e > 2 && N === 0 && (N = W(r), C += N * N), C < u && (C = Math.sqrt(u * C)));
    do
      l.data !== n && (k = s[l.data.index] * i / C, n.vx += _ * k, e > 1 && (n.vy += w * k), e > 2 && (n.vz += N * k));
    while (l = l.next);
  }
  return d.initialize = function(l, ...x) {
    t = l, r = x.find((p) => typeof p == "function") || Math.random, e = x.find((p) => [1, 2, 3].includes(p)) || 2, c();
  }, d.strength = function(l) {
    return arguments.length ? (o = typeof l == "function" ? l : fe(+l), c(), d) : o;
  }, d.distanceMin = function(l) {
    return arguments.length ? (u = l * l, d) : Math.sqrt(u);
  }, d.distanceMax = function(l) {
    return arguments.length ? (a = l * l, d) : Math.sqrt(a);
  }, d.theta = function(l) {
    return arguments.length ? (f = l * l, d) : Math.sqrt(f);
  }, d;
}
function $e(t) {
  return typeof t == "object" && typeof t.index == "number" && typeof t.x == "number" && typeof t.y == "number" && typeof t.z == "number" && typeof t.vx == "number" && typeof t.vy == "number" && typeof t.nz == "number";
}
function Xr(t) {
  return !!(typeof t == "object" && typeof t.index == "number" && $e(t.source) && $e(t.target));
}
class Jr {
  constructor() {
    q(this, "d3ForceLayout");
    q(this, "d3AlphaMin", 0);
    q(this, "d3AlphaTarget", 0);
    q(this, "d3AlphaDecay", 0.0228);
    q(this, "d3VelocityDecay", 0.4);
    q(this, "nodeMapping", /* @__PURE__ */ new Map());
    q(this, "edgeMapping", /* @__PURE__ */ new Map());
    q(this, "newNodeMap", /* @__PURE__ */ new Map());
    q(this, "newEdgeMap", /* @__PURE__ */ new Map());
    q(this, "reheat", !1);
    this.d3ForceLayout = Ur().numDimensions(3).alpha(1).force("link", Lr()).force("charge", Wr()).force("center", An()).force("dagRadial", null).stop(), this.d3ForceLayout.force("link").id((e) => e.id);
  }
  get graphNeedsRefresh() {
    return !!this.newNodeMap.size || !!this.newEdgeMap.size;
  }
  async init() {
  }
  refresh() {
    if (this.graphNeedsRefresh || this.reheat) {
      [...this.nodeMapping.values()].concat([...this.newNodeMap.values()]), this.d3ForceLayout.alpha(1).stop();
      for (let r of this.newNodeMap.entries()) {
        let i = r[0], o = r[1];
        if (!$e(o))
          throw new Error("Internal error: Node is not settled as a complete D3 Node");
        this.nodeMapping.set(i, o);
      }
      this.newNodeMap.clear();
      const n = [...this.edgeMapping.values()];
      n.concat([...this.newEdgeMap.values()]), this.d3ForceLayout.force("link").links(n);
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
    let n = this._getMappedEdge(e);
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
    let n = this.edgeMapping.get(e);
    if (!n)
      throw new Error("Internal error: Edge not found in D3GraphEngine");
    return n;
  }
}
class Zr {
  constructor(e) {
    q(this, "element");
    q(this, "canvas");
    q(this, "engine");
    q(this, "scene");
    q(this, "camera");
    q(this, "graphEngine");
    q(this, "nodeMeshOpts");
    q(this, "edgeMeshOpts");
    q(this, "skybox");
    q(this, "pinOnDrag");
    q(this, "fetchNodes");
    q(this, "fetchEdges");
    q(this, "graphEngineType");
    if (this.pinOnDrag = e.pinOnDrag ?? !0, this.fetchNodes = e.fetchNodes, this.fetchEdges = e.fetchEdges, this.graphEngineType = e.graphEngineType ?? "ngraph", typeof e.element == "string") {
      let n = document.getElementById(e.element);
      if (!n)
        throw new Error(`getElementById() could not find element '${e.element}'`);
      this.element = n;
    } else if (e.element instanceof HTMLElement)
      this.element = e.element;
    else
      throw new TypeError("Graph constructor requires 'element' argument that is either a string specifying the ID of the HTML element or an HTMLElement");
    if (this.element.innerHTML = "", this.canvas = document.createElement("canvas"), this.canvas.setAttribute("id", "babylonForceGraphRenderCanvas"), this.canvas.setAttribute("touch-action", "none"), this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.touchAction = "none", this.element.appendChild(this.canvas), this.engine = new St(this.canvas, !0), this.scene = new Tt(this.engine), this.camera = new Dt("camera", -Math.PI / 2, Math.PI / 2.5, 15, new De(0, 0, 0)), this.camera.attachControl(this.canvas, !0), new Ot("light", new De(1, 1, 0)), e.skybox && new jt(
      "testdome",
      e.skybox,
      {
        resolution: 32,
        size: 1e3
      },
      this.scene
    ), this.graphEngineType === "ngraph")
      this.graphEngine = new Fn();
    else if (this.graphEngineType === "d3")
      this.graphEngine = new Jr();
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
    this.graphEngine.step();
    for (let e of this.graphEngine.nodes)
      e.update();
    for (let e of this.graphEngine.edges)
      e.update();
  }
  addNode(e, n = {}) {
    return be.create(this, e, {
      nodeMeshOpts: this.nodeMeshOpts,
      pinOnDrag: this.pinOnDrag,
      metadata: n
    });
  }
  addEdge(e, n, r = {}) {
    return se.create(this, e, n, {
      edgeMeshOpts: this.edgeMeshOpts,
      metadata: r
    });
  }
  async loadJsonData(e, n = {}) {
    const r = n.nodeListProp ?? "nodes", i = n.edgeListProp ?? "links", o = n.nodeIdProp ?? "id", s = n.edgeSrcIdProp ?? "source", u = n.edgeDstIdProp ?? "target", f = await (await fetch(e, n.fetchOpts)).json();
    if (!Array.isArray(f[r]))
      throw TypeError(`when fetching JSON data: '${r}' was not an Array`);
    if (!Array.isArray(f[i]))
      throw TypeError(`when fetching JSON data: '${i}' was not an Array`);
    for (let d of f[r]) {
      let c = d[o], v = d;
      this.addNode(c, v);
    }
    for (let d of f[i]) {
      let c = d[s], v = d[u], g = d;
      this.addEdge(c, v, g);
    }
    this.graphEngine.refresh();
  }
}
export {
  se as Edge,
  Zr as Graph,
  be as Node
};
