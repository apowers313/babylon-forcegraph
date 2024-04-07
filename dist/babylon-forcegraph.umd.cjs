(function(G,L){typeof exports=="object"&&typeof module<"u"?L(exports,require("@babylonjs/core")):typeof define=="function"&&define.amd?define(["exports","@babylonjs/core"],L):(G=typeof globalThis<"u"?globalThis:G||self,L(G.HtmlMesh={},G.BABYLON))})(this,function(G,L){"use strict";var Tr=Object.defineProperty;var Dr=(G,L,K)=>L in G?Tr(G,L,{enumerable:!0,configurable:!0,writable:!0,value:K}):G[L]=K;var q=(G,L,K)=>(Dr(G,typeof L!="symbol"?L+"":L,K),K);function K(t){let n=new Map([["aliceblue","#f0f8ff"],["antiquewhite","#faebd7"],["aqua","#00ffff"],["aquamarine","#7fffd4"],["azure","#f0ffff"],["beige","#f5f5dc"],["bisque","#ffe4c4"],["black","#000000"],["blanchedalmond","#ffebcd"],["blue","#0000ff"],["blueviolet","#8a2be2"],["brown","#a52a2a"],["burlywood","#deb887"],["cadetblue","#5f9ea0"],["chartreuse","#7fff00"],["chocolate","#d2691e"],["coral","#ff7f50"],["cornflowerblue","#6495ed"],["cornsilk","#fff8dc"],["crimson","#dc143c"],["cyan","#00ffff"],["darkblue","#00008b"],["darkcyan","#008b8b"],["darkgoldenrod","#b8860b"],["darkgray","#a9a9a9"],["darkgreen","#006400"],["darkkhaki","#bdb76b"],["darkmagenta","#8b008b"],["darkolivegreen","#556b2f"],["darkorange","#ff8c00"],["darkorchid","#9932cc"],["darkred","#8b0000"],["darksalmon","#e9967a"],["darkseagreen","#8fbc8f"],["darkslateblue","#483d8b"],["darkslategray","#2f4f4f"],["darkturquoise","#00ced1"],["darkviolet","#9400d3"],["deeppink","#ff1493"],["deepskyblue","#00bfff"],["dimgray","#696969"],["dodgerblue","#1e90ff"],["firebrick","#b22222"],["floralwhite","#fffaf0"],["forestgreen","#228b22"],["fuchsia","#ff00ff"],["gainsboro","#dcdcdc"],["ghostwhite","#f8f8ff"],["gold","#ffd700"],["goldenrod","#daa520"],["gray","#808080"],["green","#008000"],["greenyellow","#adff2f"],["honeydew","#f0fff0"],["hotpink","#ff69b4"],["indianred ","#cd5c5c"],["indigo","#4b0082"],["ivory","#fffff0"],["khaki","#f0e68c"],["lavender","#e6e6fa"],["lavenderblush","#fff0f5"],["lawngreen","#7cfc00"],["lemonchiffon","#fffacd"],["lightblue","#add8e6"],["lightcoral","#f08080"],["lightcyan","#e0ffff"],["lightgoldenrodyellow","#fafad2"],["lightgrey","#d3d3d3"],["lightgreen","#90ee90"],["lightpink","#ffb6c1"],["lightsalmon","#ffa07a"],["lightseagreen","#20b2aa"],["lightskyblue","#87cefa"],["lightslategray","#778899"],["lightsteelblue","#b0c4de"],["lightyellow","#ffffe0"],["lime","#00ff00"],["limegreen","#32cd32"],["linen","#faf0e6"],["magenta","#ff00ff"],["maroon","#800000"],["mediumaquamarine","#66cdaa"],["mediumblue","#0000cd"],["mediumorchid","#ba55d3"],["mediumpurple","#9370d8"],["mediumseagreen","#3cb371"],["mediumslateblue","#7b68ee"],["mediumspringgreen","#00fa9a"],["mediumturquoise","#48d1cc"],["mediumvioletred","#c71585"],["midnightblue","#191970"],["mintcream","#f5fffa"],["mistyrose","#ffe4e1"],["moccasin","#ffe4b5"],["navajowhite","#ffdead"],["navy","#000080"],["oldlace","#fdf5e6"],["olive","#808000"],["olivedrab","#6b8e23"],["orange","#ffa500"],["orangered","#ff4500"],["orchid","#da70d6"],["palegoldenrod","#eee8aa"],["palegreen","#98fb98"],["paleturquoise","#afeeee"],["palevioletred","#d87093"],["papayawhip","#ffefd5"],["peachpuff","#ffdab9"],["peru","#cd853f"],["pink","#ffc0cb"],["plum","#dda0dd"],["powderblue","#b0e0e6"],["purple","#800080"],["rebeccapurple","#663399"],["red","#ff0000"],["rosybrown","#bc8f8f"],["royalblue","#4169e1"],["saddlebrown","#8b4513"],["salmon","#fa8072"],["sandybrown","#f4a460"],["seagreen","#2e8b57"],["seashell","#fff5ee"],["sienna","#a0522d"],["silver","#c0c0c0"],["skyblue","#87ceeb"],["slateblue","#6a5acd"],["slategray","#708090"],["snow","#fffafa"],["springgreen","#00ff7f"],["steelblue","#4682b4"],["tan","#d2b48c"],["teal","#008080"],["thistle","#d8bfd8"],["tomato","#ff6347"],["turquoise","#40e0d0"],["violet","#ee82ee"],["wheat","#f5deb3"],["white","#ffffff"],["whitesmoke","#f5f5f5"],["yellow","#ffff00"],["yellowgreen","#9acd32"]]).get(t);return n||t}const me={color:"gold",shape:"sphere",nodeMeshFactory:Bt};function Bt(t,e,n){let r;switch(n.shape){case"box":r=L.MeshBuilder.CreateBox("box",{});break;case"sphere":r=L.MeshBuilder.CreateSphere("sphere",{});break;case"cylinder":r=L.MeshBuilder.CreateCylinder("cylinder",{});break;case"cone":r=L.MeshBuilder.CreateCylinder("cylinder",{diameterTop:0});break;case"capsule":r=L.MeshBuilder.CreateCapsule("capsule",{});break;case"torus":r=L.MeshBuilder.CreateTorus("torus",{});break;case"torus-knot":r=L.MeshBuilder.CreateTorusKnot("tk",{tube:1,radialSegments:128});break;default:throw new TypeError(`unknown shape: ${n.shape}`)}let i=new L.StandardMaterial("defaultMaterial"),o=n.color??me.color;return i.diffuseColor=L.Color3.FromHexString(K(o)),r.material=i,r}let ce=class xe{constructor(e,n,r={}){q(this,"parentGraph");q(this,"id");q(this,"metadata");q(this,"mesh");q(this,"label");q(this,"meshDragBehavior");q(this,"dragging",!1);q(this,"nodeMeshOpts");q(this,"pinOnDrag");var o;this.parentGraph=e,this.id=n,this.metadata=r.metadata??{};let i={};for(let s of Object.keys(me))i[s]=((o=r==null?void 0:r.nodeMeshOpts)==null?void 0:o[s])??me[s];if(this.nodeMeshOpts=i,this.parentGraph.graphEngine.addNode(this),this.mesh=this.nodeMeshOpts.nodeMeshFactory(this,this.parentGraph,this.nodeMeshOpts),this.mesh.metadata={parentNode:this},this.label=this.createLabel(this.id.toString()),this.label.parent=this.mesh,this.label.position.y+=1,this.pinOnDrag=r.pinOnDrag??!0,this.meshDragBehavior=new L.SixDofDragBehavior,this.mesh.addBehavior(this.meshDragBehavior),this.meshDragBehavior.onDragStartObservable.add(()=>{this.dragging=!0}),this.meshDragBehavior.onDragEndObservable.add(()=>{this.pinOnDrag&&this.pin(),this.dragging=!1}),this.meshDragBehavior.onPositionChangedObservable.add(s=>{this.parentGraph.graphEngine.setNodePosition(this,s.position)}),this.mesh.actionManager=new L.ActionManager(this.parentGraph.scene),this.parentGraph.fetchNodes&&this.parentGraph.fetchEdges){const{fetchNodes:s,fetchEdges:u}=this.parentGraph;this.mesh.actionManager.registerAction(new L.ExecuteCodeAction({trigger:L.ActionManager.OnDoublePickTrigger},()=>{const a=u(this,this.parentGraph),f=new Set;a.forEach(l=>{f.add(l.source),f.add(l.target)}),f.delete(this.id),s(f,this.parentGraph).forEach(l=>this.parentGraph.addNode(l.id,l.metadata)),a.forEach(l=>this.parentGraph.addEdge(l.source,l.target,l.metadata))}))}}createLabel(e){const r="48px Verdana",s=.006944444444444444,a=new L.DynamicTexture("DynamicTexture",64,this.parentGraph.scene).getContext();a.font=r;const f=a.measureText(e).width+8,d=f*s,l=new L.DynamicTexture("DynamicTexture",{width:f,height:72},this.parentGraph.scene,!1),v=new L.StandardMaterial("mat",this.parentGraph.scene);v.specularColor=L.Color3.Black(),l.hasAlpha=!0;const g=l.getContext();g.fillStyle="white",g.beginPath();const c=0,x=0,p=[20,20,20,20],h=f,M=72;g.moveTo(c+p[0],x),g.lineTo(c+h-p[1],x),g.arc(c+h-p[1],x+p[1],p[1],3*Math.PI/2,Math.PI*2),g.lineTo(c+h,x+M-p[2]),g.arc(c+h-p[2],x+M-p[2],p[2],0,Math.PI/2),g.lineTo(c+p[3],x+M),g.arc(c+p[3],x+M-p[3],p[3],Math.PI/2,Math.PI),g.lineTo(c,x+p[0]),g.arc(c+p[0],x+p[0],p[0],Math.PI,3*Math.PI/2),g.closePath(),g.fill(),l.drawText(e,null,null,r,"#000000","transparent",!0),v.opacityTexture=l,v.emissiveTexture=l,v.disableLighting=!0;const b=L.MeshBuilder.CreatePlane("plane",{width:d,height:.5},this.parentGraph.scene);return b.material=v,b.billboardMode=7,b}update(){if(this.dragging)return;let e=this.parentGraph.graphEngine.getNodePosition(this);this.mesh.position.x=e.x,this.mesh.position.y=e.y,e.z&&(this.mesh.position.z=e.z)}pin(){this.parentGraph.graphEngine.pin(this)}unpin(){this.parentGraph.graphEngine.unpin(this)}static get list(){return kt}static create(e,n,r={}){const i=xe.list.get(n);if(i)return i;const o=new xe(e,n,r);return xe.list.set(n,o),o}};const kt=new Map,be={color:"white",edgeMeshFactory:Ct};function Ct(t,e,n){let r=n.color??be.color;return L.CreateGreasedLine("edge",{points:[0,0,0,1,1,1]},{color:L.Color3.FromHexString(K(r))})}class re{constructor(e,n,r,i={}){q(this,"parentGraph");q(this,"srcId");q(this,"dstId");q(this,"metadata");q(this,"mesh");q(this,"edgeMeshOpts");var s;if(this.parentGraph=e,this.srcId=n,this.dstId=r,this.metadata=i.metadata??{},!ce.list.has(n))throw new Error(`Attempting to create edge '${n}->${r}', Node '${n}' hasn't been created yet.`);if(!ce.list.has(r))throw new Error(`Attempting to create edge '${n}->${r}', Node '${r}' hasn't been created yet.`);let o={};for(let u of Object.keys(be))o[u]=((s=i==null?void 0:i.edgeMeshOpts)==null?void 0:s[u])??be[u];this.edgeMeshOpts=o,this.parentGraph.graphEngine.addEdge(this),this.mesh=this.edgeMeshOpts.edgeMeshFactory(this,this.parentGraph,this.edgeMeshOpts),this.mesh.metadata={},this.mesh.metadata.parentEdge=this}update(){this.parentGraph.graphEngine.refresh();let e=this.parentGraph.graphEngine.getEdgePosition(this);this.mesh.setPoints([[e.src.x,e.src.y,e.src.z??0,e.dst.x,e.dst.y,e.dst.z??0]])}static get list(){return Lt}static create(e,n,r,i={}){const o=re.list.get(n,r);if(o)return o;const s=new re(e,n,r,i);return re.list.set(n,r,s),s}}class qt{constructor(){q(this,"map",new Map)}has(e,n){const r=this.map.get(e);return r?r.has(n):!1}set(e,n,r){let i=this.map.get(e);if(i||(i=new Map,this.map.set(e,i)),i.has(n))throw new Error("Attempting to create duplicate Edge");i.set(n,r)}get(e,n){let r=this.map.get(e);if(r)return r.get(n)}}const Lt=new qt;function Te(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _e=function(e){Pt(e);var n=zt(e);return e.on=n.on,e.off=n.off,e.fire=n.fire,e};function zt(t){var e=Object.create(null);return{on:function(n,r,i){if(typeof r!="function")throw new Error("callback is expected to be a function");var o=e[n];return o||(o=e[n]=[]),o.push({callback:r,ctx:i}),t},off:function(n,r){var i=typeof n>"u";if(i)return e=Object.create(null),t;if(e[n]){var o=typeof r!="function";if(o)delete e[n];else for(var s=e[n],u=0;u<s.length;++u)s[u].callback===r&&s.splice(u,1)}return t},fire:function(n){var r=e[n];if(!r)return t;var i;arguments.length>1&&(i=Array.prototype.splice.call(arguments,1));for(var o=0;o<r.length;++o){var s=r[o];s.callback.apply(s.ctx,i)}return t}}}function Pt(t){if(!t)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],n=0;n<e.length;++n)if(t.hasOwnProperty(e[n]))throw new Error("Subject cannot be eventified, since it already has property '"+e[n]+"'")}var It=At,St=_e;function At(t){if(t=t||{},"uniqueLinkId"in t&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),t.multigraph=t.uniqueLinkId),t.multigraph===void 0&&(t.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,n=new Map,r={},i=0,o=t.multigraph?_:b,s=[],u=$,a=$,f=$,d=$,l={version:20,addNode:x,addLink:M,removeLink:C,removeNode:h,getNode:p,getNodeCount:w,getLinkCount:N,getEdgeCount:N,getLinksCount:N,getNodesCount:w,getLinks:k,forEachNode:J,forEachLinkedNode:te,forEachLink:I,beginUpdate:f,endUpdate:d,clear:F,hasLink:A,hasNode:p,getLink:A};return St(l),v(),l;function v(){var E=l.on;l.on=B;function B(){return l.beginUpdate=f=T,l.endUpdate=d=U,u=g,a=c,l.on=E,E.apply(l,arguments)}}function g(E,B){s.push({link:E,changeType:B})}function c(E,B){s.push({node:E,changeType:B})}function x(E,B){if(E===void 0)throw new Error("Invalid node identifier");f();var z=p(E);return z?(z.data=B,a(z,"update")):(z=new Ft(E,B),a(z,"add")),e.set(E,z),d(),z}function p(E){return e.get(E)}function h(E){var B=p(E);if(!B)return!1;f();var z=B.links;return z&&(z.forEach(S),B.links=null),e.delete(E),a(B,"remove"),d(),!0}function M(E,B,z){f();var D=p(E)||x(E),H=p(B)||x(B),O=o(E,B,z),W=n.has(O.id);return n.set(O.id,O),De(D,O),E!==B&&De(H,O),u(O,W?"update":"add"),d(),O}function b(E,B,z){var D=pe(E,B),H=n.get(D);return H?(H.data=z,H):new Oe(E,B,z,D)}function _(E,B,z){var D=pe(E,B),H=r.hasOwnProperty(D);if(H||A(E,B)){H||(r[D]=0);var O="@"+ ++r[D];D=pe(E+O,B+O)}return new Oe(E,B,z,D)}function w(){return e.size}function N(){return n.size}function k(E){var B=p(E);return B?B.links:null}function C(E,B){return B!==void 0&&(E=A(E,B)),S(E)}function S(E){if(!E||!n.get(E.id))return!1;f(),n.delete(E.id);var B=p(E.fromId),z=p(E.toId);return B&&B.links.delete(E),z&&z.links.delete(E),u(E,"remove"),d(),!0}function A(E,B){if(!(E===void 0||B===void 0))return n.get(pe(E,B))}function F(){f(),J(function(E){h(E.id)}),d()}function I(E){if(typeof E=="function")for(var B=n.values(),z=B.next();!z.done;){if(E(z.value))return!0;z=B.next()}}function te(E,B,z){var D=p(E);if(D&&D.links&&typeof B=="function")return z?y(D.links,E,B):m(D.links,E,B)}function m(E,B,z){for(var D,H=E.values(),O=H.next();!O.done;){var W=O.value,Fr=W.fromId===B?W.toId:W.fromId;if(D=z(e.get(Fr),W),D)return!0;O=H.next()}}function y(E,B,z){for(var D,H=E.values(),O=H.next();!O.done;){var W=O.value;if(W.fromId===B&&(D=z(e.get(W.toId),W),D))return!0;O=H.next()}}function $(){}function T(){i+=1}function U(){i-=1,i===0&&s.length>0&&(l.fire("changed",s),s.length=0)}function J(E){if(typeof E!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+E);for(var B=e.values(),z=B.next();!z.done;){if(E(z.value))return!0;z=B.next()}}}function Ft(t,e){this.id=t,this.links=null,this.data=e}function De(t,e){t.links?t.links.add(e):t.links=new Set([e])}function Oe(t,e,n,r){this.fromId=t,this.toId=e,this.data=n,this.id=r}function pe(t,e){return t.toString()+"👉 "+e.toString()}const Tt=Te(It);var Me={exports:{}},ae={exports:{}},je=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const Dt=je;var ie=function(e){return n;function n(r,i){let o=i&&i.indent||0,s=i&&i.join!==void 0?i.join:`
`,u=Array(o+1).join(" "),a=[];for(let f=0;f<e;++f){let d=Dt(f),l=f===0?"":u;a.push(l+r.replace(/{var}/g,d))}return a.join(s)}};const Ge=ie;ae.exports=Ot,ae.exports.generateCreateBodyFunctionBody=Qe,ae.exports.getVectorCode=Ve,ae.exports.getBodyCode=Re;function Ot(t,e){let n=Qe(t,e),{Body:r}=new Function(n)();return r}function Qe(t,e){return`
${Ve(t,e)}
${Re(t)}
return {Body: Body, Vector: Vector};
`}function Re(t){let e=Ge(t),n=e("{var}",{join:", "});return`
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
  ${e("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function Ve(t,e){let n=Ge(t),r="";return e&&(r=`${n(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`),`function Vector(${n("{var}",{join:", "})}) {
  ${r}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${n('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${n("this.{var} = v.{var};",{indent:4})}
    } else {
      ${n('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${n("this.{var} = ",{join:""})}0;
  };`}var jt=ae.exports,Z={exports:{}};const Ne=ie,ee=je;Z.exports=Gt,Z.exports.generateQuadTreeFunctionBody=He,Z.exports.getInsertStackCode=Je,Z.exports.getQuadNodeCode=Ye,Z.exports.isSamePosition=Ue,Z.exports.getChildBodyCode=Xe,Z.exports.setChildBodyCode=We;function Gt(t){let e=He(t);return new Function(e)()}function He(t){let e=Ne(t),n=Math.pow(2,t);return`
${Je()}
${Ye(t)}
${Ue(t)}
${Xe(t)}
${We(t)}

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
      node.mass = ${e("node.mass_{var} = ",{join:""})}0;
      ${e("node.min_{var} = node.max_{var} = ",{join:""})}0;
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
    ${e("var d{var};",{indent:4})}
    var r; 
    ${e("var f{var} = 0;",{indent:4})}
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
        ${e("d{var} = body.pos.{var} - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${e("f{var} += v * d{var};",{indent:8})}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${e("d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }
        // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${ee(0)} - node.min_${ee(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${o()}
        }
      }
    }

    ${e("sourceBody.force.{var} += f{var};",{indent:4})}
  }

  function insertBodies(bodies) {
    ${e("var {var}min = Number.MAX_VALUE;",{indent:4})}
    ${e("var {var}max = Number.MIN_VALUE;",{indent:4})}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${e("if (pos.{var} < {var}min) {var}min = pos.{var};",{indent:6})}
      ${e("if (pos.{var} > {var}max) {var}max = pos.{var};",{indent:6})}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${e("if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;",{indent:4})}

    currentInCache = 0;
    root = newNode();
    ${e("root.min_{var} = {var}min;",{indent:4})}
    ${e("root.max_{var} = {var}min + maxSideLength;",{indent:4})}

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
        ${e("var {var} = body.pos.{var};",{indent:8})}
        node.mass += body.mass;
        ${e("node.mass_{var} += body.mass * {var};",{indent:8})}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${e("var min_{var} = node.min_{var};",{indent:8})}
        ${e("var max_{var} = (min_{var} + node.max_{var}) / 2;",{indent:8})}

${i(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${e("child.min_{var} = min_{var};",{indent:10})}
          ${e("child.max_{var} = max_{var};",{indent:10})}
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
            ${e("var d{var} = (node.max_{var} - node.min_{var}) * offset;",{indent:12})}

            ${e("oldBody.pos.{var} = node.min_{var} + d{var};",{indent:12})}
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

`;function i(u){let a=[],f=Array(u+1).join(" ");for(let d=0;d<t;++d)a.push(f+`if (${ee(d)} > max_${ee(d)}) {`),a.push(f+`  quadIdx = quadIdx + ${Math.pow(2,d)};`),a.push(f+`  min_${ee(d)} = max_${ee(d)};`),a.push(f+`  max_${ee(d)} = node.max_${ee(d)};`),a.push(f+"}");return a.join(`
`)}function o(){let u=Array(11).join(" "),a=[];for(let f=0;f<n;++f)a.push(u+`if (node.quad${f}) {`),a.push(u+`  queue[pushIdx] = node.quad${f};`),a.push(u+"  queueLength += 1;"),a.push(u+"  pushIdx += 1;"),a.push(u+"}");return a.join(`
`)}function s(u){let a=[];for(let f=0;f<n;++f)a.push(`${u}quad${f} = null;`);return a.join(`
`)}}function Ue(t){let e=Ne(t);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function We(t){var e=Math.pow(2,t);return`
function setChild(node, idx, child) {
  ${n()}
}`;function n(){let r=[];for(let i=0;i<e;++i){let o=i===0?"  ":"  else ";r.push(`${o}if (idx === ${i}) node.quad${i} = child;`)}return r.join(`
`)}}function Xe(t){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let n=[],r=Math.pow(2,t);for(let i=0;i<r;++i)n.push(`  if (idx === ${i}) return node.quad${i};`);return n.join(`
`)}}function Ye(t){let e=Ne(t),n=Math.pow(2,t);var r=`
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
  ${e("this.mass_{var} = 0;",{indent:2})}

  // bounding box coordinates
  ${e("this.min_{var} = 0;",{indent:2})}
  ${e("this.max_{var} = 0;",{indent:2})}
}
`;return r;function i(o){let s=[];for(let u=0;u<n;++u)s.push(`${o}quad${u} = null;`);return s.join(`
`)}}function Je(){return`
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
`}var Qt=Z.exports,$e={exports:{}};$e.exports=Vt,$e.exports.generateFunctionBody=Ke;const Rt=ie;function Vt(t){let e=Ke(t);return new Function("bodies","settings","random",e)}function Ke(t){let e=Rt(t);return`
  var boundingBox = {
    ${e("min_{var}: 0, max_{var}: 0,",{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${e("base_{var} = 0",{join:", "})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${e("base_{var} += neighborPos.{var};",{indent:10})}
        }

        ${e("base_{var} /= neighbors.length;",{indent:8})}
      } else {
        ${e("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;",{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${e("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,",{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${e("var max_{var} = -Infinity;",{indent:4})}
    ${e("var min_{var} = Infinity;",{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${e("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};",{indent:6})}
      ${e("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};",{indent:6})}
    }

    ${e("boundingBox.min_{var} = min_{var};",{indent:4})}
    ${e("boundingBox.max_{var} = max_{var};",{indent:4})}
  }

  function resetBoundingBox() {
    ${e("boundingBox.min_{var} = boundingBox.max_{var} = 0;",{indent:4})}
  }
`}var Ht=$e.exports,Ee={exports:{}};const Ut=ie;Ee.exports=Wt,Ee.exports.generateCreateDragForceFunctionBody=Ze;function Wt(t){let e=Ze(t);return new Function("options",e)}function Ze(t){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${Ut(t)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var Xt=Ee.exports,Be={exports:{}};const Yt=ie;Be.exports=Jt,Be.exports.generateCreateSpringForceFunctionBody=et;function Jt(t){let e=et(t);return new Function("options","random",e)}function et(t){let e=Yt(t);return`
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
      ${e("var d{var} = body2.pos.{var} - body1.pos.{var};",{indent:6})}
      var r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

      if (r === 0) {
        ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${e("body1.force.{var} += coefficient * d{var}",{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${e("body2.force.{var} -= coefficient * d{var}",{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}var Kt=Be.exports,ke={exports:{}};const Zt=ie;ke.exports=en,ke.exports.generateIntegratorFunctionBody=tt;function en(t){let e=tt(t);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function tt(t){let e=Zt(t);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${e("var d{var} = 0, t{var} = 0;",{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${e("body.velocity.{var} += coeff * body.force.{var};",{indent:4})}
    ${e("var v{var} = body.velocity.{var};",{indent:4})}
    var v = Math.sqrt(${e("v{var} * v{var}",{join:" + "})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${e("body.velocity.{var} = v{var} / v;",{indent:6})}
    }

    ${e("d{var} = timeStep * body.velocity.{var};",{indent:4})}

    ${e("body.pos.{var} += d{var};",{indent:4})}

    ${e("t{var} += Math.abs(d{var});",{indent:4})}
  }

  return (${e("t{var} * t{var}",{join:" + "})})/length;
`}var tn=ke.exports,Ce,nt;function nn(){if(nt)return Ce;nt=1,Ce=t;function t(e,n,r,i){this.from=e,this.to=n,this.length=r,this.coefficient=i}return Ce}var qe,rt;function rn(){if(rt)return qe;rt=1,qe=t;function t(e,n){var r;if(e||(e={}),n){for(r in n)if(n.hasOwnProperty(r)){var i=e.hasOwnProperty(r),o=typeof n[r],s=!i||typeof e[r]!==o;s?e[r]=n[r]:o==="object"&&(e[r]=t(e[r],n[r]))}}return e}return qe}var se={exports:{}},it;function on(){if(it)return se.exports;it=1,se.exports=t,se.exports.random=t,se.exports.randomIterator=u;function t(a){var f=typeof a=="number"?a:+new Date;return new e(f)}function e(a){this.seed=a}e.prototype.next=s,e.prototype.nextDouble=o,e.prototype.uniform=o,e.prototype.gaussian=n;function n(){var a,f,d;do f=this.nextDouble()*2-1,d=this.nextDouble()*2-1,a=f*f+d*d;while(a>=1||a===0);return f*Math.sqrt(-2*Math.log(a)/a)}e.prototype.levy=r;function r(){var a=1.5,f=Math.pow(i(1+a)*Math.sin(Math.PI*a/2)/(i((1+a)/2)*a*Math.pow(2,(a-1)/2)),1/a);return this.gaussian()*f/Math.pow(Math.abs(this.gaussian()),1/a)}function i(a){return Math.sqrt(2*Math.PI/a)*Math.pow(1/Math.E*(a+1/(12*a-1/(10*a))),a)}function o(){var a=this.seed;return a=a+2127912214+(a<<12)&4294967295,a=(a^3345072700^a>>>19)&4294967295,a=a+374761393+(a<<5)&4294967295,a=(a+3550635116^a<<9)&4294967295,a=a+4251993797+(a<<3)&4294967295,a=(a^3042594569^a>>>16)&4294967295,this.seed=a,(a&268435455)/268435456}function s(a){return Math.floor(this.nextDouble()*a)}function u(a,f){var d=f||t();if(typeof d.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:v,shuffle:l};function l(){var g,c,x;for(g=a.length-1;g>0;--g)c=d.next(g+1),x=a[c],a[c]=a[g],a[g]=x;return a}function v(g){var c,x,p;for(c=a.length-1;c>0;--c)x=d.next(c+1),p=a[x],a[x]=a[c],a[c]=p,g(p);a.length&&g(a[0])}}return se.exports}var ot=ln,an=jt,sn=Qt,fn=Ht,un=Xt,hn=Kt,dn=tn,at={};function ln(t){var e=nn(),n=rn(),r=_e;if(t){if(t.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(t.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}t=n(t,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var i=at[t.dimensions];if(!i){var o=t.dimensions;i={Body:an(o,t.debug),createQuadTree:sn(o),createBounds:fn(o),createDragForce:un(o),createSpringForce:hn(o),integrate:dn(o)},at[o]=i}var s=i.Body,u=i.createQuadTree,a=i.createBounds,f=i.createDragForce,d=i.createSpringForce,l=i.integrate,v=y=>new s(y),g=on().random(42),c=[],x=[],p=u(t,g),h=a(c,t,g),M=d(t,g),b=f(t),_=0,w=[],N=new Map,k=0;A("nbody",te),A("spring",m);var C={bodies:c,quadTree:p,springs:x,settings:t,addForce:A,removeForce:F,getForces:I,step:function(){for(var y=0;y<w.length;++y)w[y](k);var $=l(c,t.timeStep,t.adaptiveTimeStepWeight);return k+=1,$},addBody:function(y){if(!y)throw new Error("Body is required");return c.push(y),y},addBodyAt:function(y){if(!y)throw new Error("Body position is required");var $=v(y);return c.push($),$},removeBody:function(y){if(y){var $=c.indexOf(y);if(!($<0))return c.splice($,1),c.length===0&&h.reset(),!0}},addSpring:function(y,$,T,U){if(!y||!$)throw new Error("Cannot add null spring to force simulator");typeof T!="number"&&(T=-1);var J=new e(y,$,T,U>=0?U:-1);return x.push(J),J},getTotalMovement:function(){return _},removeSpring:function(y){if(y){var $=x.indexOf(y);if($>-1)return x.splice($,1),!0}},getBestNewBodyPosition:function(y){return h.getBestNewPosition(y)},getBBox:S,getBoundingBox:S,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(y){return y!==void 0?(t.gravity=y,p.options({gravity:y}),this):t.gravity},theta:function(y){return y!==void 0?(t.theta=y,p.options({theta:y}),this):t.theta},random:g};return cn(t,C),r(C),C;function S(){return h.update(),h.box}function A(y,$){if(N.has(y))throw new Error("Force "+y+" is already added");N.set(y,$),w.push($)}function F(y){var $=w.indexOf(N.get(y));$<0||(w.splice($,1),N.delete(y))}function I(){return N}function te(){if(c.length!==0){p.insertBodies(c);for(var y=c.length;y--;){var $=c[y];$.isPinned||($.reset(),p.updateBodyForce($),b.update($))}}}function m(){for(var y=x.length;y--;)M.update(x[y])}}function cn(t,e){for(var n in t)pn(t,e,n)}function pn(t,e,n){if(t.hasOwnProperty(n)&&typeof e[n]!="function"){var r=Number.isFinite(t[n]);r?e[n]=function(i){if(i!==void 0){if(!Number.isFinite(i))throw new Error("Value of "+n+" should be a valid number.");return t[n]=i,e}return t[n]}:e[n]=function(i){return i!==void 0?(t[n]=i,e):t[n]}}}Me.exports=vn,Me.exports.simulator=ot;var gn=_e;function vn(t,e){if(!t)throw new Error("Graph structure cannot be undefined");var n=e&&e.createSimulator||ot,r=n(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var i=t.version>19?te:I;e&&typeof e.nodeMass=="function"&&(i=e.nodeMass);var o=new Map,s={},u=0,a=r.settings.springTransform||yn;b(),p();var f=!1,d={step:function(){if(u===0)return l(!0),!0;var m=r.step();d.lastMove=m,d.fire("step");var y=m/u,$=y<=.01;return l($),$},getNodePosition:function(m){return F(m).pos},setNodePosition:function(m){var y=F(m);y.setPosition.apply(y,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(m){var y=s[m];if(y)return{from:y.from.pos,to:y.to.pos}},getGraphRect:function(){return r.getBBox()},forEachBody:v,pinNode:function(m,y){var $=F(m.id);$.isPinned=!!y},isNodePinned:function(m){return F(m.id).isPinned},dispose:function(){t.off("changed",M),d.fire("disposed")},getBody:x,getSpring:c,getForceVectorLength:g,simulator:r,graph:t,lastMove:0};return gn(d),d;function l(m){f!==m&&(f=m,h(m))}function v(m){o.forEach(m)}function g(){var m=0,y=0;return v(function($){m+=Math.abs($.force.x),y+=Math.abs($.force.y)}),Math.sqrt(m*m+y*y)}function c(m,y){var $;if(y===void 0)typeof m!="object"?$=m:$=m.id;else{var T=t.hasLink(m,y);if(!T)return;$=T.id}return s[$]}function x(m){return o.get(m)}function p(){t.on("changed",M)}function h(m){d.fire("stable",m)}function M(m){for(var y=0;y<m.length;++y){var $=m[y];$.changeType==="add"?($.node&&_($.node.id),$.link&&N($.link)):$.changeType==="remove"&&($.node&&w($.node),$.link&&k($.link))}u=t.getNodesCount()}function b(){u=0,t.forEachNode(function(m){_(m.id),u+=1}),t.forEachLink(N)}function _(m){var y=o.get(m);if(!y){var $=t.getNode(m);if(!$)throw new Error("initBody() was called with unknown node id");var T=$.position;if(!T){var U=C($);T=r.getBestNewBodyPosition(U)}y=r.addBodyAt(T),y.id=m,o.set(m,y),S(m),A($)&&(y.isPinned=!0)}}function w(m){var y=m.id,$=o.get(y);$&&(o.delete(y),r.removeBody($))}function N(m){S(m.fromId),S(m.toId);var y=o.get(m.fromId),$=o.get(m.toId),T=r.addSpring(y,$,m.length);a(m,T),s[m.id]=T}function k(m){var y=s[m.id];if(y){var $=t.getNode(m.fromId),T=t.getNode(m.toId);$&&S($.id),T&&S(T.id),delete s[m.id],r.removeSpring(y)}}function C(m){var y=[];if(!m.links)return y;for(var $=Math.min(m.links.length,2),T=0;T<$;++T){var U=m.links[T],J=U.fromId!==m.id?o.get(U.fromId):o.get(U.toId);J&&J.pos&&y.push(J)}return y}function S(m){var y=o.get(m);if(y.mass=i(m),Number.isNaN(y.mass))throw new Error("Node mass should be a number")}function A(m){return m&&(m.isPinned||m.data&&m.data.isPinned)}function F(m){var y=o.get(m);return y||(_(m),y=o.get(m)),y}function I(m){var y=t.getLinks(m);return y?1+y.length/3:1}function te(m){var y=t.getLinks(m);return y?1+y.size/3:1}}function yn(){}var wn=Me.exports;const xn=Te(wn);class mn{constructor(){q(this,"ngraph");q(this,"ngraphLayout");q(this,"nodeMapping",new Map);q(this,"edgeMapping",new Map);this.ngraph=Tt(),this.ngraphLayout=xn(this.ngraph,{dimensions:3})}async init(){}refresh(){}step(){this.ngraphLayout.step()}addNode(e){const n=this.ngraph.addNode(e.id,{parentNode:e});this.nodeMapping.set(e,n)}addEdge(e){const n=this.ngraph.addLink(e.srcId,e.dstId,{parentEdge:this});this.edgeMapping.set(e,n)}getNodePosition(e){const n=this._getMappedNode(e);return this.ngraphLayout.getNodePosition(n.id)}setNodePosition(e,n){const r=this._getMappedNode(e),i=this.ngraphLayout.getNodePosition(r.id);i.x=n.x,i.y=n.y,i.z=n.z}getEdgePosition(e){const n=this._getMappedEdge(e),r=this.ngraphLayout.getLinkPosition(n.id);return{src:{x:r.from.x,y:r.from.y,z:r.from.z},dst:{x:r.to.x,y:r.to.y,z:r.to.z}}}get nodes(){return this.nodeMapping.keys()}get edges(){return this.edgeMapping.keys()}pin(e){const n=this._getMappedNode(e);this.ngraphLayout.pinNode(n,!0)}unpin(e){const n=this._getMappedNode(e);this.ngraphLayout.pinNode(n,!1)}_getMappedNode(e){const n=this.nodeMapping.get(e);if(!n)throw new Error("Internal error: Node not found in NGraphEngine");return n}_getMappedEdge(e){const n=this.edgeMapping.get(e);if(!n)throw new Error("Internal error: Edge not found in NGraphEngine");return n}}function bn(t,e,n){var r,i=1;t==null&&(t=0),e==null&&(e=0),n==null&&(n=0);function o(){var s,u=r.length,a,f=0,d=0,l=0;for(s=0;s<u;++s)a=r[s],f+=a.x||0,d+=a.y||0,l+=a.z||0;for(f=(f/u-t)*i,d=(d/u-e)*i,l=(l/u-n)*i,s=0;s<u;++s)a=r[s],f&&(a.x-=f),d&&(a.y-=d),l&&(a.z-=l)}return o.initialize=function(s){r=s},o.x=function(s){return arguments.length?(t=+s,o):t},o.y=function(s){return arguments.length?(e=+s,o):e},o.z=function(s){return arguments.length?(n=+s,o):n},o.strength=function(s){return arguments.length?(i=+s,o):i},o}function _n(t){const e=+this._x.call(null,t);return st(this.cover(e),e,t)}function st(t,e,n){if(isNaN(e))return t;var r,i=t._root,o={data:n},s=t._x0,u=t._x1,a,f,d,l,v;if(!i)return t._root=o,t;for(;i.length;)if((d=e>=(a=(s+u)/2))?s=a:u=a,r=i,!(i=i[l=+d]))return r[l]=o,t;if(f=+t._x.call(null,i.data),e===f)return o.next=i,r?r[l]=o:t._root=o,t;do r=r?r[l]=new Array(2):t._root=new Array(2),(d=e>=(a=(s+u)/2))?s=a:u=a;while((l=+d)==(v=+(f>=a)));return r[v]=i,r[l]=o,t}function Mn(t){Array.isArray(t)||(t=Array.from(t));const e=t.length,n=new Float64Array(e);let r=1/0,i=-1/0;for(let o=0,s;o<e;++o)isNaN(s=+this._x.call(null,t[o]))||(n[o]=s,s<r&&(r=s),s>i&&(i=s));if(r>i)return this;this.cover(r).cover(i);for(let o=0;o<e;++o)st(this,n[o],t[o]);return this}function Nn(t){if(isNaN(t=+t))return this;var e=this._x0,n=this._x1;if(isNaN(e))n=(e=Math.floor(t))+1;else{for(var r=n-e||1,i=this._root,o,s;e>t||t>=n;)switch(s=+(t<e),o=new Array(2),o[s]=i,i=o,r*=2,s){case 0:n=e+r;break;case 1:e=n-r;break}this._root&&this._root.length&&(this._root=i)}return this._x0=e,this._x1=n,this}function $n(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function En(t){return arguments.length?this.cover(+t[0][0]).cover(+t[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function X(t,e,n){this.node=t,this.x0=e,this.x1=n}function Bn(t,e){var n,r=this._x0,i,o,s=this._x1,u=[],a=this._root,f,d;for(a&&u.push(new X(a,r,s)),e==null?e=1/0:(r=t-e,s=t+e);f=u.pop();)if(!(!(a=f.node)||(i=f.x0)>s||(o=f.x1)<r))if(a.length){var l=(i+o)/2;u.push(new X(a[1],l,o),new X(a[0],i,l)),(d=+(t>=l))&&(f=u[u.length-1],u[u.length-1]=u[u.length-1-d],u[u.length-1-d]=f)}else{var v=Math.abs(t-+this._x.call(null,a.data));v<e&&(e=v,r=t-v,s=t+v,n=a.data)}return n}function kn(t){if(isNaN(a=+this._x.call(null,t)))return this;var e,n=this._root,r,i,o,s=this._x0,u=this._x1,a,f,d,l,v;if(!n)return this;if(n.length)for(;;){if((d=a>=(f=(s+u)/2))?s=f:u=f,e=n,!(n=n[l=+d]))return this;if(!n.length)break;e[l+1&1]&&(r=e,v=l)}for(;n.data!==t;)if(i=n,!(n=n.next))return this;return(o=n.next)&&delete n.next,i?(o?i.next=o:delete i.next,this):e?(o?e[l]=o:delete e[l],(n=e[0]||e[1])&&n===(e[1]||e[0])&&!n.length&&(r?r[v]=n:this._root=n),this):(this._root=o,this)}function Cn(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function qn(){return this._root}function Ln(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function zn(t){var e=[],n,r=this._root,i,o,s;for(r&&e.push(new X(r,this._x0,this._x1));n=e.pop();)if(!t(r=n.node,o=n.x0,s=n.x1)&&r.length){var u=(o+s)/2;(i=r[1])&&e.push(new X(i,u,s)),(i=r[0])&&e.push(new X(i,o,u))}return this}function Pn(t){var e=[],n=[],r;for(this._root&&e.push(new X(this._root,this._x0,this._x1));r=e.pop();){var i=r.node;if(i.length){var o,s=r.x0,u=r.x1,a=(s+u)/2;(o=i[0])&&e.push(new X(o,s,a)),(o=i[1])&&e.push(new X(o,a,u))}n.push(r)}for(;r=n.pop();)t(r.node,r.x0,r.x1);return this}function In(t){return t[0]}function Sn(t){return arguments.length?(this._x=t,this):this._x}function ft(t,e){var n=new Le(e??In,NaN,NaN);return t==null?n:n.addAll(t)}function Le(t,e,n){this._x=t,this._x0=e,this._x1=n,this._root=void 0}function ut(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var V=ft.prototype=Le.prototype;V.copy=function(){var t=new Le(this._x,this._x0,this._x1),e=this._root,n,r;if(!e)return t;if(!e.length)return t._root=ut(e),t;for(n=[{source:e,target:t._root=new Array(2)}];e=n.pop();)for(var i=0;i<2;++i)(r=e.source[i])&&(r.length?n.push({source:r,target:e.target[i]=new Array(2)}):e.target[i]=ut(r));return t},V.add=_n,V.addAll=Mn,V.cover=Nn,V.data=$n,V.extent=En,V.find=Bn,V.remove=kn,V.removeAll=Cn,V.root=qn,V.size=Ln,V.visit=zn,V.visitAfter=Pn,V.x=Sn;function An(t){const e=+this._x.call(null,t),n=+this._y.call(null,t);return ht(this.cover(e,n),e,n,t)}function ht(t,e,n,r){if(isNaN(e)||isNaN(n))return t;var i,o=t._root,s={data:r},u=t._x0,a=t._y0,f=t._x1,d=t._y1,l,v,g,c,x,p,h,M;if(!o)return t._root=s,t;for(;o.length;)if((x=e>=(l=(u+f)/2))?u=l:f=l,(p=n>=(v=(a+d)/2))?a=v:d=v,i=o,!(o=o[h=p<<1|x]))return i[h]=s,t;if(g=+t._x.call(null,o.data),c=+t._y.call(null,o.data),e===g&&n===c)return s.next=o,i?i[h]=s:t._root=s,t;do i=i?i[h]=new Array(4):t._root=new Array(4),(x=e>=(l=(u+f)/2))?u=l:f=l,(p=n>=(v=(a+d)/2))?a=v:d=v;while((h=p<<1|x)===(M=(c>=v)<<1|g>=l));return i[M]=o,i[h]=s,t}function Fn(t){var e,n,r=t.length,i,o,s=new Array(r),u=new Array(r),a=1/0,f=1/0,d=-1/0,l=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,e=t[n]))||isNaN(o=+this._y.call(null,e))||(s[n]=i,u[n]=o,i<a&&(a=i),i>d&&(d=i),o<f&&(f=o),o>l&&(l=o));if(a>d||f>l)return this;for(this.cover(a,f).cover(d,l),n=0;n<r;++n)ht(this,s[n],u[n],t[n]);return this}function Tn(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(n))i=(n=Math.floor(t))+1,o=(r=Math.floor(e))+1;else{for(var s=i-n||1,u=this._root,a,f;n>t||t>=i||r>e||e>=o;)switch(f=(e<r)<<1|t<n,a=new Array(4),a[f]=u,u=a,s*=2,f){case 0:i=n+s,o=r+s;break;case 1:n=i-s,o=r+s;break;case 2:i=n+s,r=o-s;break;case 3:n=i-s,r=o-s;break}this._root&&this._root.length&&(this._root=u)}return this._x0=n,this._y0=r,this._x1=i,this._y1=o,this}function Dn(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function On(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Q(t,e,n,r,i){this.node=t,this.x0=e,this.y0=n,this.x1=r,this.y1=i}function jn(t,e,n){var r,i=this._x0,o=this._y0,s,u,a,f,d=this._x1,l=this._y1,v=[],g=this._root,c,x;for(g&&v.push(new Q(g,i,o,d,l)),n==null?n=1/0:(i=t-n,o=e-n,d=t+n,l=e+n,n*=n);c=v.pop();)if(!(!(g=c.node)||(s=c.x0)>d||(u=c.y0)>l||(a=c.x1)<i||(f=c.y1)<o))if(g.length){var p=(s+a)/2,h=(u+f)/2;v.push(new Q(g[3],p,h,a,f),new Q(g[2],s,h,p,f),new Q(g[1],p,u,a,h),new Q(g[0],s,u,p,h)),(x=(e>=h)<<1|t>=p)&&(c=v[v.length-1],v[v.length-1]=v[v.length-1-x],v[v.length-1-x]=c)}else{var M=t-+this._x.call(null,g.data),b=e-+this._y.call(null,g.data),_=M*M+b*b;if(_<n){var w=Math.sqrt(n=_);i=t-w,o=e-w,d=t+w,l=e+w,r=g.data}}return r}function Gn(t){if(isNaN(d=+this._x.call(null,t))||isNaN(l=+this._y.call(null,t)))return this;var e,n=this._root,r,i,o,s=this._x0,u=this._y0,a=this._x1,f=this._y1,d,l,v,g,c,x,p,h;if(!n)return this;if(n.length)for(;;){if((c=d>=(v=(s+a)/2))?s=v:a=v,(x=l>=(g=(u+f)/2))?u=g:f=g,e=n,!(n=n[p=x<<1|c]))return this;if(!n.length)break;(e[p+1&3]||e[p+2&3]||e[p+3&3])&&(r=e,h=p)}for(;n.data!==t;)if(i=n,!(n=n.next))return this;return(o=n.next)&&delete n.next,i?(o?i.next=o:delete i.next,this):e?(o?e[p]=o:delete e[p],(n=e[0]||e[1]||e[2]||e[3])&&n===(e[3]||e[2]||e[1]||e[0])&&!n.length&&(r?r[h]=n:this._root=n),this):(this._root=o,this)}function Qn(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function Rn(){return this._root}function Vn(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function Hn(t){var e=[],n,r=this._root,i,o,s,u,a;for(r&&e.push(new Q(r,this._x0,this._y0,this._x1,this._y1));n=e.pop();)if(!t(r=n.node,o=n.x0,s=n.y0,u=n.x1,a=n.y1)&&r.length){var f=(o+u)/2,d=(s+a)/2;(i=r[3])&&e.push(new Q(i,f,d,u,a)),(i=r[2])&&e.push(new Q(i,o,d,f,a)),(i=r[1])&&e.push(new Q(i,f,s,u,d)),(i=r[0])&&e.push(new Q(i,o,s,f,d))}return this}function Un(t){var e=[],n=[],r;for(this._root&&e.push(new Q(this._root,this._x0,this._y0,this._x1,this._y1));r=e.pop();){var i=r.node;if(i.length){var o,s=r.x0,u=r.y0,a=r.x1,f=r.y1,d=(s+a)/2,l=(u+f)/2;(o=i[0])&&e.push(new Q(o,s,u,d,l)),(o=i[1])&&e.push(new Q(o,d,u,a,l)),(o=i[2])&&e.push(new Q(o,s,l,d,f)),(o=i[3])&&e.push(new Q(o,d,l,a,f))}n.push(r)}for(;r=n.pop();)t(r.node,r.x0,r.y0,r.x1,r.y1);return this}function Wn(t){return t[0]}function Xn(t){return arguments.length?(this._x=t,this):this._x}function Yn(t){return t[1]}function Jn(t){return arguments.length?(this._y=t,this):this._y}function dt(t,e,n){var r=new ze(e??Wn,n??Yn,NaN,NaN,NaN,NaN);return t==null?r:r.addAll(t)}function ze(t,e,n,r,i,o){this._x=t,this._y=e,this._x0=n,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function lt(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var R=dt.prototype=ze.prototype;R.copy=function(){var t=new ze(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,n,r;if(!e)return t;if(!e.length)return t._root=lt(e),t;for(n=[{source:e,target:t._root=new Array(4)}];e=n.pop();)for(var i=0;i<4;++i)(r=e.source[i])&&(r.length?n.push({source:r,target:e.target[i]=new Array(4)}):e.target[i]=lt(r));return t},R.add=An,R.addAll=Fn,R.cover=Tn,R.data=Dn,R.extent=On,R.find=jn,R.remove=Gn,R.removeAll=Qn,R.root=Rn,R.size=Vn,R.visit=Hn,R.visitAfter=Un,R.x=Xn,R.y=Jn;function Kn(t){const e=+this._x.call(null,t),n=+this._y.call(null,t),r=+this._z.call(null,t);return ct(this.cover(e,n,r),e,n,r,t)}function ct(t,e,n,r,i){if(isNaN(e)||isNaN(n)||isNaN(r))return t;var o,s=t._root,u={data:i},a=t._x0,f=t._y0,d=t._z0,l=t._x1,v=t._y1,g=t._z1,c,x,p,h,M,b,_,w,N,k,C;if(!s)return t._root=u,t;for(;s.length;)if((_=e>=(c=(a+l)/2))?a=c:l=c,(w=n>=(x=(f+v)/2))?f=x:v=x,(N=r>=(p=(d+g)/2))?d=p:g=p,o=s,!(s=s[k=N<<2|w<<1|_]))return o[k]=u,t;if(h=+t._x.call(null,s.data),M=+t._y.call(null,s.data),b=+t._z.call(null,s.data),e===h&&n===M&&r===b)return u.next=s,o?o[k]=u:t._root=u,t;do o=o?o[k]=new Array(8):t._root=new Array(8),(_=e>=(c=(a+l)/2))?a=c:l=c,(w=n>=(x=(f+v)/2))?f=x:v=x,(N=r>=(p=(d+g)/2))?d=p:g=p;while((k=N<<2|w<<1|_)===(C=(b>=p)<<2|(M>=x)<<1|h>=c));return o[C]=s,o[k]=u,t}function Zn(t){Array.isArray(t)||(t=Array.from(t));const e=t.length,n=new Float64Array(e),r=new Float64Array(e),i=new Float64Array(e);let o=1/0,s=1/0,u=1/0,a=-1/0,f=-1/0,d=-1/0;for(let l=0,v,g,c,x;l<e;++l)isNaN(g=+this._x.call(null,v=t[l]))||isNaN(c=+this._y.call(null,v))||isNaN(x=+this._z.call(null,v))||(n[l]=g,r[l]=c,i[l]=x,g<o&&(o=g),g>a&&(a=g),c<s&&(s=c),c>f&&(f=c),x<u&&(u=x),x>d&&(d=x));if(o>a||s>f||u>d)return this;this.cover(o,s,u).cover(a,f,d);for(let l=0;l<e;++l)ct(this,n[l],r[l],i[l],t[l]);return this}function er(t,e,n){if(isNaN(t=+t)||isNaN(e=+e)||isNaN(n=+n))return this;var r=this._x0,i=this._y0,o=this._z0,s=this._x1,u=this._y1,a=this._z1;if(isNaN(r))s=(r=Math.floor(t))+1,u=(i=Math.floor(e))+1,a=(o=Math.floor(n))+1;else{for(var f=s-r||1,d=this._root,l,v;r>t||t>=s||i>e||e>=u||o>n||n>=a;)switch(v=(n<o)<<2|(e<i)<<1|t<r,l=new Array(8),l[v]=d,d=l,f*=2,v){case 0:s=r+f,u=i+f,a=o+f;break;case 1:r=s-f,u=i+f,a=o+f;break;case 2:s=r+f,i=u-f,a=o+f;break;case 3:r=s-f,i=u-f,a=o+f;break;case 4:s=r+f,u=i+f,o=a-f;break;case 5:r=s-f,u=i+f,o=a-f;break;case 6:s=r+f,i=u-f,o=a-f;break;case 7:r=s-f,i=u-f,o=a-f;break}this._root&&this._root.length&&(this._root=d)}return this._x0=r,this._y0=i,this._z0=o,this._x1=s,this._y1=u,this._z1=a,this}function tr(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function nr(t){return arguments.length?this.cover(+t[0][0],+t[0][1],+t[0][2]).cover(+t[1][0],+t[1][1],+t[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function P(t,e,n,r,i,o,s){this.node=t,this.x0=e,this.y0=n,this.z0=r,this.x1=i,this.y1=o,this.z1=s}function rr(t,e,n,r){var i,o=this._x0,s=this._y0,u=this._z0,a,f,d,l,v,g,c=this._x1,x=this._y1,p=this._z1,h=[],M=this._root,b,_;for(M&&h.push(new P(M,o,s,u,c,x,p)),r==null?r=1/0:(o=t-r,s=e-r,u=n-r,c=t+r,x=e+r,p=n+r,r*=r);b=h.pop();)if(!(!(M=b.node)||(a=b.x0)>c||(f=b.y0)>x||(d=b.z0)>p||(l=b.x1)<o||(v=b.y1)<s||(g=b.z1)<u))if(M.length){var w=(a+l)/2,N=(f+v)/2,k=(d+g)/2;h.push(new P(M[7],w,N,k,l,v,g),new P(M[6],a,N,k,w,v,g),new P(M[5],w,f,k,l,N,g),new P(M[4],a,f,k,w,N,g),new P(M[3],w,N,d,l,v,k),new P(M[2],a,N,d,w,v,k),new P(M[1],w,f,d,l,N,k),new P(M[0],a,f,d,w,N,k)),(_=(n>=k)<<2|(e>=N)<<1|t>=w)&&(b=h[h.length-1],h[h.length-1]=h[h.length-1-_],h[h.length-1-_]=b)}else{var C=t-+this._x.call(null,M.data),S=e-+this._y.call(null,M.data),A=n-+this._z.call(null,M.data),F=C*C+S*S+A*A;if(F<r){var I=Math.sqrt(r=F);o=t-I,s=e-I,u=n-I,c=t+I,x=e+I,p=n+I,i=M.data}}return i}function ir(t){if(isNaN(v=+this._x.call(null,t))||isNaN(g=+this._y.call(null,t))||isNaN(c=+this._z.call(null,t)))return this;var e,n=this._root,r,i,o,s=this._x0,u=this._y0,a=this._z0,f=this._x1,d=this._y1,l=this._z1,v,g,c,x,p,h,M,b,_,w,N;if(!n)return this;if(n.length)for(;;){if((M=v>=(x=(s+f)/2))?s=x:f=x,(b=g>=(p=(u+d)/2))?u=p:d=p,(_=c>=(h=(a+l)/2))?a=h:l=h,e=n,!(n=n[w=_<<2|b<<1|M]))return this;if(!n.length)break;(e[w+1&7]||e[w+2&7]||e[w+3&7]||e[w+4&7]||e[w+5&7]||e[w+6&7]||e[w+7&7])&&(r=e,N=w)}for(;n.data!==t;)if(i=n,!(n=n.next))return this;return(o=n.next)&&delete n.next,i?(o?i.next=o:delete i.next,this):e?(o?e[w]=o:delete e[w],(n=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&n===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!n.length&&(r?r[N]=n:this._root=n),this):(this._root=o,this)}function or(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function ar(){return this._root}function sr(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function fr(t){var e=[],n,r=this._root,i,o,s,u,a,f,d;for(r&&e.push(new P(r,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));n=e.pop();)if(!t(r=n.node,o=n.x0,s=n.y0,u=n.z0,a=n.x1,f=n.y1,d=n.z1)&&r.length){var l=(o+a)/2,v=(s+f)/2,g=(u+d)/2;(i=r[7])&&e.push(new P(i,l,v,g,a,f,d)),(i=r[6])&&e.push(new P(i,o,v,g,l,f,d)),(i=r[5])&&e.push(new P(i,l,s,g,a,v,d)),(i=r[4])&&e.push(new P(i,o,s,g,l,v,d)),(i=r[3])&&e.push(new P(i,l,v,u,a,f,g)),(i=r[2])&&e.push(new P(i,o,v,u,l,f,g)),(i=r[1])&&e.push(new P(i,l,s,u,a,v,g)),(i=r[0])&&e.push(new P(i,o,s,u,l,v,g))}return this}function ur(t){var e=[],n=[],r;for(this._root&&e.push(new P(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));r=e.pop();){var i=r.node;if(i.length){var o,s=r.x0,u=r.y0,a=r.z0,f=r.x1,d=r.y1,l=r.z1,v=(s+f)/2,g=(u+d)/2,c=(a+l)/2;(o=i[0])&&e.push(new P(o,s,u,a,v,g,c)),(o=i[1])&&e.push(new P(o,v,u,a,f,g,c)),(o=i[2])&&e.push(new P(o,s,g,a,v,d,c)),(o=i[3])&&e.push(new P(o,v,g,a,f,d,c)),(o=i[4])&&e.push(new P(o,s,u,c,v,g,l)),(o=i[5])&&e.push(new P(o,v,u,c,f,g,l)),(o=i[6])&&e.push(new P(o,s,g,c,v,d,l)),(o=i[7])&&e.push(new P(o,v,g,c,f,d,l))}n.push(r)}for(;r=n.pop();)t(r.node,r.x0,r.y0,r.z0,r.x1,r.y1,r.z1);return this}function hr(t){return t[0]}function dr(t){return arguments.length?(this._x=t,this):this._x}function lr(t){return t[1]}function cr(t){return arguments.length?(this._y=t,this):this._y}function pr(t){return t[2]}function gr(t){return arguments.length?(this._z=t,this):this._z}function pt(t,e,n,r){var i=new Pe(e??hr,n??lr,r??pr,NaN,NaN,NaN,NaN,NaN,NaN);return t==null?i:i.addAll(t)}function Pe(t,e,n,r,i,o,s,u,a){this._x=t,this._y=e,this._z=n,this._x0=r,this._y0=i,this._z0=o,this._x1=s,this._y1=u,this._z1=a,this._root=void 0}function gt(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var j=pt.prototype=Pe.prototype;j.copy=function(){var t=new Pe(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,n,r;if(!e)return t;if(!e.length)return t._root=gt(e),t;for(n=[{source:e,target:t._root=new Array(8)}];e=n.pop();)for(var i=0;i<8;++i)(r=e.source[i])&&(r.length?n.push({source:r,target:e.target[i]=new Array(8)}):e.target[i]=gt(r));return t},j.add=Kn,j.addAll=Zn,j.cover=er,j.data=tr,j.extent=nr,j.find=rr,j.remove=ir,j.removeAll=or,j.root=ar,j.size=sr,j.visit=fr,j.visitAfter=ur,j.x=dr,j.y=cr,j.z=gr;function fe(t){return function(){return t}}function Y(t){return(t()-.5)*1e-6}function vr(t){return t.index}function vt(t,e){var n=t.get(e);if(console.log("nodeById size",t.size),console.log("nodeById",t),console.log("nodeId",e),!n)throw new Error("node not found: "+e);return n}function yr(t){var e=vr,n=v,r,i=fe(30),o,s,u,a,f,d,l=1;t==null&&(t=[]);function v(h){return 1/Math.min(a[h.source.index],a[h.target.index])}function g(h){for(var M=0,b=t.length;M<l;++M)for(var _=0,w,N,k,C=0,S=0,A=0,F,I;_<b;++_)w=t[_],N=w.source,k=w.target,C=k.x+k.vx-N.x-N.vx||Y(d),u>1&&(S=k.y+k.vy-N.y-N.vy||Y(d)),u>2&&(A=k.z+k.vz-N.z-N.vz||Y(d)),F=Math.sqrt(C*C+S*S+A*A),F=(F-o[_])/F*h*r[_],C*=F,S*=F,A*=F,k.vx-=C*(I=f[_]),u>1&&(k.vy-=S*I),u>2&&(k.vz-=A*I),N.vx+=C*(I=1-I),u>1&&(N.vy+=S*I),u>2&&(N.vz+=A*I)}function c(){if(console.log("links initialize..."),!!s){var h,M=s.length,b=t.length,_=new Map(s.map((N,k)=>[e(N,k,s),N])),w;for(h=0,a=new Array(M);h<b;++h)console.log("setting index",h),w=t[h],w.index=h,typeof w.source!="object"&&(w.source=vt(_,w.source)),typeof w.target!="object"&&(w.target=vt(_,w.target)),a[w.source.index]=(a[w.source.index]||0)+1,a[w.target.index]=(a[w.target.index]||0)+1;for(h=0,f=new Array(b);h<b;++h)w=t[h],f[h]=a[w.source.index]/(a[w.source.index]+a[w.target.index]);r=new Array(b),x(),o=new Array(b),p()}}function x(){if(s)for(var h=0,M=t.length;h<M;++h)r[h]=+n(t[h],h,t)}function p(){if(s)for(var h=0,M=t.length;h<M;++h)o[h]=+i(t[h],h,t)}return g.initialize=function(h,...M){s=h,d=M.find(b=>typeof b=="function")||Math.random,u=M.find(b=>[1,2,3].includes(b))||2,c()},g.links=function(h){return arguments.length?(t=h,c(),g):t},g.id=function(h){return arguments.length?(e=h,g):e},g.iterations=function(h){return arguments.length?(l=+h,g):l},g.strength=function(h){return arguments.length?(n=typeof h=="function"?h:fe(+h),x(),g):n},g.distance=function(h){return arguments.length?(i=typeof h=="function"?h:fe(+h),p(),g):i},g}var wr={value:()=>{}};function yt(){for(var t=0,e=arguments.length,n={},r;t<e;++t){if(!(r=arguments[t]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new ge(n)}function ge(t){this._=t}function xr(t,e){return t.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}ge.prototype=yt.prototype={constructor:ge,on:function(t,e){var n=this._,r=xr(t+"",n),i,o=-1,s=r.length;if(arguments.length<2){for(;++o<s;)if((i=(t=r[o]).type)&&(i=mr(n[i],t.name)))return i;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(i=(t=r[o]).type)n[i]=wt(n[i],t.name,e);else if(e==null)for(i in n)n[i]=wt(n[i],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new ge(t)},call:function(t,e){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,o;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],r=0,i=o.length;r<i;++r)o[r].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(e,n)}};function mr(t,e){for(var n=0,r=t.length,i;n<r;++n)if((i=t[n]).name===e)return i.value}function wt(t,e,n){for(var r=0,i=t.length;r<i;++r)if(t[r].name===e){t[r]=wr,t=t.slice(0,r).concat(t.slice(r+1));break}return n!=null&&t.push({name:e,value:n}),t}var oe=0,ue=0,he=0,xt=1e3,ve,de,ye=0,ne=0,we=0,le=typeof performance=="object"&&performance.now?performance:Date,mt=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function bt(){return ne||(mt(br),ne=le.now()+we)}function br(){ne=0}function Ie(){this._call=this._time=this._next=null}Ie.prototype=_t.prototype={constructor:Ie,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?bt():+n)+(e==null?0:+e),!this._next&&de!==this&&(de?de._next=this:ve=this,de=this),this._call=t,this._time=n,Se()},stop:function(){this._call&&(this._call=null,this._time=1/0,Se())}};function _t(t,e,n){var r=new Ie;return r.restart(t,e,n),r}function _r(){bt(),++oe;for(var t=ve,e;t;)(e=ne-t._time)>=0&&t._call.call(void 0,e),t=t._next;--oe}function Mt(){ne=(ye=le.now())+we,oe=ue=0;try{_r()}finally{oe=0,Nr(),ne=0}}function Mr(){var t=le.now(),e=t-ye;e>xt&&(we-=e,ye=t)}function Nr(){for(var t,e=ve,n,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:ve=n);de=t,Se(r)}function Se(t){if(!oe){ue&&(ue=clearTimeout(ue));var e=t-ne;e>24?(t<1/0&&(ue=setTimeout(Mt,t-le.now()-we)),he&&(he=clearInterval(he))):(he||(ye=le.now(),he=setInterval(Mr,xt)),oe=1,mt(Mt))}}const $r=1664525,Er=1013904223,Nt=4294967296;function Br(){let t=1;return()=>(t=($r*t+Er)%Nt)/Nt}var $t=3;function Ae(t){return t.x}function Et(t){return t.y}function kr(t){return t.z}var Cr=10,qr=Math.PI*(3-Math.sqrt(5)),Lr=Math.PI*20/(9+Math.sqrt(221));function zr(t,e){e=e||2;var n=Math.min($t,Math.max(1,Math.round(e))),r,i=1,o=.001,s=1-Math.pow(o,1/300),u=0,a=.6,f=new Map,d=_t(g),l=yt("tick","end"),v=Br();t==null&&(t=[]);function g(){c(),l.call("tick",r),i<o&&(d.stop(),l.call("end",r))}function c(h){var M,b=t.length,_;h===void 0&&(h=1);for(var w=0;w<h;++w)for(i+=(u-i)*s,f.forEach(function(N){N(i)}),M=0;M<b;++M)_=t[M],_.fx==null?_.x+=_.vx*=a:(_.x=_.fx,_.vx=0),n>1&&(_.fy==null?_.y+=_.vy*=a:(_.y=_.fy,_.vy=0)),n>2&&(_.fz==null?_.z+=_.vz*=a:(_.z=_.fz,_.vz=0));return r}function x(){for(var h=0,M=t.length,b;h<M;++h){if(b=t[h],b.index=h,b.fx!=null&&(b.x=b.fx),b.fy!=null&&(b.y=b.fy),b.fz!=null&&(b.z=b.fz),isNaN(b.x)||n>1&&isNaN(b.y)||n>2&&isNaN(b.z)){var _=Cr*(n>2?Math.cbrt(.5+h):n>1?Math.sqrt(.5+h):h),w=h*qr,N=h*Lr;n===1?b.x=_:n===2?(b.x=_*Math.cos(w),b.y=_*Math.sin(w)):(b.x=_*Math.sin(w)*Math.cos(N),b.y=_*Math.cos(w),b.z=_*Math.sin(w)*Math.sin(N))}(isNaN(b.vx)||n>1&&isNaN(b.vy)||n>2&&isNaN(b.vz))&&(b.vx=0,n>1&&(b.vy=0),n>2&&(b.vz=0))}}function p(h){return h.initialize&&h.initialize(t,v,n),h}return x(),r={tick:c,restart:function(){return d.restart(g),r},stop:function(){return d.stop(),r},numDimensions:function(h){return arguments.length?(n=Math.min($t,Math.max(1,Math.round(h))),f.forEach(p),r):n},nodes:function(h){return arguments.length?(t=h,x(),f.forEach(p),r):t},alpha:function(h){return arguments.length?(i=+h,r):i},alphaMin:function(h){return arguments.length?(o=+h,r):o},alphaDecay:function(h){return arguments.length?(s=+h,r):+s},alphaTarget:function(h){return arguments.length?(u=+h,r):u},velocityDecay:function(h){return arguments.length?(a=1-h,r):1-a},randomSource:function(h){return arguments.length?(v=h,f.forEach(p),r):v},force:function(h,M){return arguments.length>1?(M==null?f.delete(h):f.set(h,p(M)),r):f.get(h)},find:function(){var h=Array.prototype.slice.call(arguments),M=h.shift()||0,b=(n>1?h.shift():null)||0,_=(n>2?h.shift():null)||0,w=h.shift()||1/0,N=0,k=t.length,C,S,A,F,I,te;for(w*=w,N=0;N<k;++N)I=t[N],C=M-I.x,S=b-(I.y||0),A=_-(I.z||0),F=C*C+S*S+A*A,F<w&&(te=I,w=F);return te},on:function(h,M){return arguments.length>1?(l.on(h,M),r):l.on(h)}}}function Pr(){var t,e,n,r,i,o=fe(-30),s,u=1,a=1/0,f=.81;function d(c){var x,p=t.length,h=(e===1?ft(t,Ae):e===2?dt(t,Ae,Et):e===3?pt(t,Ae,Et,kr):null).visitAfter(v);for(i=c,x=0;x<p;++x)n=t[x],h.visit(g)}function l(){if(t){var c,x=t.length,p;for(s=new Array(x),c=0;c<x;++c)p=t[c],s[p.index]=+o(p,c,t)}}function v(c){var x=0,p,h,M=0,b,_,w,N,k=c.length;if(k){for(b=_=w=N=0;N<k;++N)(p=c[N])&&(h=Math.abs(p.value))&&(x+=p.value,M+=h,b+=h*(p.x||0),_+=h*(p.y||0),w+=h*(p.z||0));x*=Math.sqrt(4/k),c.x=b/M,e>1&&(c.y=_/M),e>2&&(c.z=w/M)}else{p=c,p.x=p.data.x,e>1&&(p.y=p.data.y),e>2&&(p.z=p.data.z);do x+=s[p.data.index];while(p=p.next)}c.value=x}function g(c,x,p,h,M){if(!c.value)return!0;var b=[p,h,M][e-1],_=c.x-n.x,w=e>1?c.y-n.y:0,N=e>2?c.z-n.z:0,k=b-x,C=_*_+w*w+N*N;if(k*k/f<C)return C<a&&(_===0&&(_=Y(r),C+=_*_),e>1&&w===0&&(w=Y(r),C+=w*w),e>2&&N===0&&(N=Y(r),C+=N*N),C<u&&(C=Math.sqrt(u*C)),n.vx+=_*c.value*i/C,e>1&&(n.vy+=w*c.value*i/C),e>2&&(n.vz+=N*c.value*i/C)),!0;if(c.length||C>=a)return;(c.data!==n||c.next)&&(_===0&&(_=Y(r),C+=_*_),e>1&&w===0&&(w=Y(r),C+=w*w),e>2&&N===0&&(N=Y(r),C+=N*N),C<u&&(C=Math.sqrt(u*C)));do c.data!==n&&(k=s[c.data.index]*i/C,n.vx+=_*k,e>1&&(n.vy+=w*k),e>2&&(n.vz+=N*k));while(c=c.next)}return d.initialize=function(c,...x){t=c,r=x.find(p=>typeof p=="function")||Math.random,e=x.find(p=>[1,2,3].includes(p))||2,l()},d.strength=function(c){return arguments.length?(o=typeof c=="function"?c:fe(+c),l(),d):o},d.distanceMin=function(c){return arguments.length?(u=c*c,d):Math.sqrt(u)},d.distanceMax=function(c){return arguments.length?(a=c*c,d):Math.sqrt(a)},d.theta=function(c){return arguments.length?(f=c*c,d):Math.sqrt(f)},d}function Fe(t){return typeof t=="object"&&typeof t.index=="number"&&typeof t.x=="number"&&typeof t.y=="number"&&typeof t.z=="number"&&typeof t.vx=="number"&&typeof t.vy=="number"&&typeof t.nz=="number"}function Ir(t){return!!(typeof t=="object"&&typeof t.index=="number"&&Fe(t.source)&&Fe(t.target))}class Sr{constructor(){q(this,"d3ForceLayout");q(this,"d3AlphaMin",0);q(this,"d3AlphaTarget",0);q(this,"d3AlphaDecay",.0228);q(this,"d3VelocityDecay",.4);q(this,"nodeMapping",new Map);q(this,"edgeMapping",new Map);q(this,"newNodeMap",new Map);q(this,"newEdgeMap",new Map);q(this,"reheat",!1);this.d3ForceLayout=zr().numDimensions(3).alpha(1).force("link",yr()).force("charge",Pr()).force("center",bn()).force("dagRadial",null).stop(),this.d3ForceLayout.force("link").id(e=>e.id)}get graphNeedsRefresh(){return!!this.newNodeMap.size||!!this.newEdgeMap.size}async init(){}refresh(){if(this.graphNeedsRefresh||this.reheat){[...this.nodeMapping.values()].concat([...this.newNodeMap.values()]),this.d3ForceLayout.alpha(1).stop();for(let r of this.newNodeMap.entries()){let i=r[0],o=r[1];if(!Fe(o))throw new Error("Internal error: Node is not settled as a complete D3 Node");this.nodeMapping.set(i,o)}this.newNodeMap.clear();const n=[...this.edgeMapping.values()];n.concat([...this.newEdgeMap.values()]),this.d3ForceLayout.force("link").links(n);for(let r of this.newEdgeMap.entries()){let i=r[0],o=r[1];if(!Ir(o))throw new Error("Internal error: Edge is not settled as a complete D3 Edge");this.edgeMapping.set(i,o)}this.newEdgeMap.clear()}}step(){this.refresh(),this.d3ForceLayout.tick()}addNode(e){this.newNodeMap.set(e,{id:e.id})}addEdge(e){this.newEdgeMap.set(e,{source:e.srcId,target:e.dstId})}get nodes(){return this.nodeMapping.keys()}get edges(){return this.edgeMapping.keys()}getNodePosition(e){const n=this._getMappedNode(e);if(n.x===void 0||n.y===void 0||n.z===void 0)throw new Error("Internal error: Node not initialized in D3GraphEngine");return{x:n.x,y:n.y,z:n.z}}setNodePosition(e,n){const r=this._getMappedNode(e);r.x=n.x,r.y=n.y,r.z=n.z??0,this.reheat=!0}getEdgePosition(e){let n=this._getMappedEdge(e);return{src:{x:n.source.x,y:n.source.y,z:n.source.z},dst:{x:n.target.x,y:n.target.y,z:n.target.z}}}pin(e){const n=this._getMappedNode(e);n.fx=n.x,n.fy=n.y,n.fz=n.z,this.reheat=!0}unpin(e){const n=this._getMappedNode(e);n.fx=void 0,n.fy=void 0,n.fz=void 0,this.reheat=!0}_getMappedNode(e){this.refresh();const n=this.nodeMapping.get(e);if(!n)throw new Error("Internal error: Node not found in D3GraphEngine");return n}_getMappedEdge(e){this.refresh();let n=this.edgeMapping.get(e);if(!n)throw new Error("Internal error: Edge not found in D3GraphEngine");return n}}class Ar{constructor(e){q(this,"element");q(this,"canvas");q(this,"engine");q(this,"scene");q(this,"camera");q(this,"graphEngine");q(this,"nodeMeshOpts");q(this,"edgeMeshOpts");q(this,"skybox");q(this,"pinOnDrag");q(this,"fetchNodes");q(this,"fetchEdges");q(this,"graphEngineType");if(this.pinOnDrag=e.pinOnDrag??!0,this.fetchNodes=e.fetchNodes,this.fetchEdges=e.fetchEdges,this.graphEngineType=e.graphEngineType??"ngraph",typeof e.element=="string"){let n=document.getElementById(e.element);if(!n)throw new Error(`getElementById() could not find element '${e.element}'`);this.element=n}else if(e.element instanceof HTMLElement)this.element=e.element;else throw new TypeError("Graph constructor requires 'element' argument that is either a string specifying the ID of the HTML element or an HTMLElement");if(this.element.innerHTML="",this.canvas=document.createElement("canvas"),this.canvas.setAttribute("id","babylonForceGraphRenderCanvas"),this.canvas.setAttribute("touch-action","none"),this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.touchAction="none",this.element.appendChild(this.canvas),this.engine=new L.Engine(this.canvas,!0),this.scene=new L.Scene(this.engine),this.camera=new L.ArcRotateCamera("camera",-Math.PI/2,Math.PI/2.5,15,new L.Vector3(0,0,0)),this.camera.attachControl(this.canvas,!0),new L.HemisphericLight("light",new L.Vector3(1,1,0)),e.skybox&&new L.PhotoDome("testdome",e.skybox,{resolution:32,size:1e3},this.scene),this.graphEngineType==="ngraph")this.graphEngine=new mn;else if(this.graphEngineType==="d3")this.graphEngine=new Sr;else throw new TypeError(`Unknown graph engine type: '${this.graphEngineType}'`);this.nodeMeshOpts=e.nodeMeshOpts??{},this.edgeMeshOpts=e.edgeMeshOpts??{}}async init(){this.engine.runRenderLoop(()=>{this.update(),this.scene.render()}),navigator.xr&&await this.scene.createDefaultXRExperienceAsync({disableTeleportation:!0}),window.addEventListener("resize",()=>{this.engine.resize()})}update(){this.graphEngine.step();for(let e of this.graphEngine.nodes)e.update();for(let e of this.graphEngine.edges)e.update()}addNode(e,n={}){return ce.create(this,e,{nodeMeshOpts:this.nodeMeshOpts,pinOnDrag:this.pinOnDrag,metadata:n})}addEdge(e,n,r={}){return re.create(this,e,n,{edgeMeshOpts:this.edgeMeshOpts,metadata:r})}async loadJsonData(e,n={}){const r=n.nodeListProp??"nodes",i=n.edgeListProp??"links",o=n.nodeIdProp??"id",s=n.edgeSrcIdProp??"source",u=n.edgeDstIdProp??"target",f=await(await fetch(e,n.fetchOpts)).json();if(!Array.isArray(f[r]))throw TypeError(`when fetching JSON data: '${r}' was not an Array`);if(!Array.isArray(f[i]))throw TypeError(`when fetching JSON data: '${i}' was not an Array`);for(let d of f[r]){let l=d[o],v=d;this.addNode(l,v)}for(let d of f[i]){let l=d[s],v=d[u],g=d;this.addEdge(l,v,g)}this.graphEngine.refresh()}}G.Edge=re,G.Graph=Ar,G.Node=ce,Object.defineProperty(G,Symbol.toStringTag,{value:"Module"})});
