(function(j,B){typeof exports=="object"&&typeof module<"u"?B(exports,require("@babylonjs/core")):typeof define=="function"&&define.amd?define(["exports","@babylonjs/core"],B):(j=typeof globalThis<"u"?globalThis:j||self,B(j.HtmlMesh={},j.BABYLON))})(this,function(j,B){"use strict";var Or=Object.defineProperty;var Dr=(j,B,ee)=>B in j?Or(j,B,{enumerable:!0,configurable:!0,writable:!0,value:ee}):j[B]=ee;var P=(j,B,ee)=>(Dr(j,typeof B!="symbol"?B+"":B,ee),ee);const ee=new Map([["aliceblue","#f0f8ff"],["antiquewhite","#faebd7"],["aqua","#00ffff"],["aquamarine","#7fffd4"],["azure","#f0ffff"],["beige","#f5f5dc"],["bisque","#ffe4c4"],["black","#000000"],["blanchedalmond","#ffebcd"],["blue","#0000ff"],["blueviolet","#8a2be2"],["brown","#a52a2a"],["burlywood","#deb887"],["cadetblue","#5f9ea0"],["chartreuse","#7fff00"],["chocolate","#d2691e"],["coral","#ff7f50"],["cornflowerblue","#6495ed"],["cornsilk","#fff8dc"],["crimson","#dc143c"],["cyan","#00ffff"],["darkblue","#00008b"],["darkcyan","#008b8b"],["darkgoldenrod","#b8860b"],["darkgray","#a9a9a9"],["darkgreen","#006400"],["darkkhaki","#bdb76b"],["darkmagenta","#8b008b"],["darkolivegreen","#556b2f"],["darkorange","#ff8c00"],["darkorchid","#9932cc"],["darkred","#8b0000"],["darksalmon","#e9967a"],["darkseagreen","#8fbc8f"],["darkslateblue","#483d8b"],["darkslategray","#2f4f4f"],["darkturquoise","#00ced1"],["darkviolet","#9400d3"],["deeppink","#ff1493"],["deepskyblue","#00bfff"],["dimgray","#696969"],["dodgerblue","#1e90ff"],["firebrick","#b22222"],["floralwhite","#fffaf0"],["forestgreen","#228b22"],["fuchsia","#ff00ff"],["gainsboro","#dcdcdc"],["ghostwhite","#f8f8ff"],["gold","#ffd700"],["goldenrod","#daa520"],["gray","#808080"],["green","#008000"],["greenyellow","#adff2f"],["honeydew","#f0fff0"],["hotpink","#ff69b4"],["indianred ","#cd5c5c"],["indigo","#4b0082"],["ivory","#fffff0"],["khaki","#f0e68c"],["lavender","#e6e6fa"],["lavenderblush","#fff0f5"],["lawngreen","#7cfc00"],["lemonchiffon","#fffacd"],["lightblue","#add8e6"],["lightcoral","#f08080"],["lightcyan","#e0ffff"],["lightgoldenrodyellow","#fafad2"],["lightgrey","#d3d3d3"],["lightgreen","#90ee90"],["lightpink","#ffb6c1"],["lightsalmon","#ffa07a"],["lightseagreen","#20b2aa"],["lightskyblue","#87cefa"],["lightslategray","#778899"],["lightsteelblue","#b0c4de"],["lightyellow","#ffffe0"],["lime","#00ff00"],["limegreen","#32cd32"],["linen","#faf0e6"],["magenta","#ff00ff"],["maroon","#800000"],["mediumaquamarine","#66cdaa"],["mediumblue","#0000cd"],["mediumorchid","#ba55d3"],["mediumpurple","#9370d8"],["mediumseagreen","#3cb371"],["mediumslateblue","#7b68ee"],["mediumspringgreen","#00fa9a"],["mediumturquoise","#48d1cc"],["mediumvioletred","#c71585"],["midnightblue","#191970"],["mintcream","#f5fffa"],["mistyrose","#ffe4e1"],["moccasin","#ffe4b5"],["navajowhite","#ffdead"],["navy","#000080"],["oldlace","#fdf5e6"],["olive","#808000"],["olivedrab","#6b8e23"],["orange","#ffa500"],["orangered","#ff4500"],["orchid","#da70d6"],["palegoldenrod","#eee8aa"],["palegreen","#98fb98"],["paleturquoise","#afeeee"],["palevioletred","#d87093"],["papayawhip","#ffefd5"],["peachpuff","#ffdab9"],["peru","#cd853f"],["pink","#ffc0cb"],["plum","#dda0dd"],["powderblue","#b0e0e6"],["purple","#800080"],["rebeccapurple","#663399"],["red","#ff0000"],["rosybrown","#bc8f8f"],["royalblue","#4169e1"],["saddlebrown","#8b4513"],["salmon","#fa8072"],["sandybrown","#f4a460"],["seagreen","#2e8b57"],["seashell","#fff5ee"],["sienna","#a0522d"],["silver","#c0c0c0"],["skyblue","#87ceeb"],["slateblue","#6a5acd"],["slategray","#708090"],["snow","#fffafa"],["springgreen","#00ff7f"],["steelblue","#4682b4"],["tan","#d2b48c"],["teal","#008080"],["thistle","#d8bfd8"],["tomato","#ff6347"],["turquoise","#40e0d0"],["violet","#ee82ee"],["wheat","#f5deb3"],["white","#ffffff"],["whitesmoke","#f5f5f5"],["yellow","#ffff00"],["yellowgreen","#9acd32"]]);function ae(n){let e=ee.get(n);return e||n}const Ct=Object.freeze(Object.defineProperty({__proto__:null,colorMap:ee,colorNameToHex:ae},Symbol.toStringTag,{value:"Module"})),Fe=1.618;let he=class S{constructor(e,t,r={}){P(this,"parentGraph");P(this,"id");P(this,"metadata");P(this,"mesh");P(this,"label");P(this,"meshDragBehavior");P(this,"dragging",!1);P(this,"nodeMeshOpts");P(this,"pinOnDrag");var a,s;this.parentGraph=e,this.id=t,this.metadata=r.metadata??{};let i={};for(let u of Object.keys(be))i[u]=((a=r==null?void 0:r.nodeMeshOpts)==null?void 0:a[u])??be[u];if(this.nodeMeshOpts=i,this.parentGraph.graphEngine.addNode(this),this.mesh=this.nodeMeshOpts.nodeMeshFactory(this,this.parentGraph,this.nodeMeshOpts),this.mesh.metadata={parentNode:this},(s=r==null?void 0:r.nodeMeshOpts)!=null&&s.label&&(this.label=S.createLabel(this.id.toString(),this,this.parentGraph),this.label.parent=this.mesh,this.label.position.y+=1),this.pinOnDrag=r.pinOnDrag??!0,this.meshDragBehavior=new B.SixDofDragBehavior,this.mesh.addBehavior(this.meshDragBehavior),this.meshDragBehavior.onDragStartObservable.add(()=>{this.parentGraph.running=!0,this.dragging=!0}),this.meshDragBehavior.onDragEndObservable.add(()=>{this.parentGraph.running=!0,this.pinOnDrag&&this.pin(),this.dragging=!1}),this.meshDragBehavior.onPositionChangedObservable.add(u=>{this.parentGraph.running=!0,this.parentGraph.graphEngine.setNodePosition(this,u.position)}),this.mesh.actionManager=new B.ActionManager(this.parentGraph.scene),this.parentGraph.fetchNodes&&this.parentGraph.fetchEdges){const{fetchNodes:u,fetchEdges:o}=this.parentGraph;this.mesh.actionManager.registerAction(new B.ExecuteCodeAction({trigger:B.ActionManager.OnDoublePickTrigger},()=>{this.parentGraph.running=!0;const h=o(this,this.parentGraph),f=new Set;h.forEach(p=>{f.add(p.source),f.add(p.target)}),f.delete(this.id),u(f,this.parentGraph).forEach(p=>this.parentGraph.addNode(p.id,p.metadata)),h.forEach(p=>this.parentGraph.addEdge(p.source,p.target,p.metadata))}))}}getDeltaPos(){let e=this.parentGraph.graphEngine.getNodePosition(this);const t=Math.abs(this.mesh.position.x-e.x),r=Math.abs(this.mesh.position.y-e.y),i=Math.abs(this.mesh.position.z-(e.z??0));return Math.sqrt(t*t+r*r+i*i)}update(){if(this.dragging)return;let e=this.parentGraph.graphEngine.getNodePosition(this);this.mesh.position.x=e.x,this.mesh.position.y=e.y,e.z&&(this.mesh.position.z=e.z)}pin(){this.parentGraph.graphEngine.pin(this)}unpin(){this.parentGraph.graphEngine.unpin(this)}static get list(){return Pt}static create(e,t,r={}){const i=S.list.get(t);if(i)return i;const a=new S(e,t,r);return S.list.set(t,a),a}static defaultNodeMeshFactory(e,t,r){let i;switch(r.shape){case"box":i=S.createBox(e,t,r);break;case"sphere":i=S.createSphere(e,t,r);break;case"cylinder":i=S.createCylinder(e,t,r);break;case"cone":i=S.createCone(e,t,r);break;case"capsule":i=S.createCapsule(e,t,r);break;case"torus":i=S.createTorus(e,t,r);break;case"torus-knot":i=S.createTorusKnot(e,t,r);break;case"tetrahedron":i=S.createPolyhedron(0,e,t,r);break;case"octahedron":i=S.createPolyhedron(1,e,t,r);break;case"dodecahedron":i=S.createPolyhedron(2,e,t,r);break;case"icosahedron":i=S.createPolyhedron(3,e,t,r);break;case"rhombicuboctahedron":i=S.createPolyhedron(4,e,t,r);break;case"triangular_prism":i=S.createPolyhedron(5,e,t,r);break;case"pentagonal_prism":i=S.createPolyhedron(6,e,t,r);break;case"hexagonal_prism":i=S.createPolyhedron(7,e,t,r);break;case"square_pyramid":i=S.createPolyhedron(8,e,t,r);break;case"pentagonal_pyramid":i=S.createPolyhedron(9,e,t,r);break;case"triangular_dipyramid":i=S.createPolyhedron(10,e,t,r);break;case"pentagonal_dipyramid":i=S.createPolyhedron(11,e,t,r);break;case"elongated_square_dypyramid":i=S.createPolyhedron(12,e,t,r);break;case"elongated_pentagonal_dipyramid":i=S.createPolyhedron(13,e,t,r);break;case"elongated_pentagonal_cupola":i=S.createPolyhedron(14,e,t,r);break;case"goldberg":i=S.createGoldberg(e,t,r);break;case"icosphere":i=S.createIcoSphere(e,t,r);break;case"geodesic":i=S.createGeodesic(e,t,r);break;default:throw new TypeError(`unknown shape: ${r.shape}`)}let a=new B.StandardMaterial("defaultMaterial"),s=r.color??be.color;return a.diffuseColor=B.Color3.FromHexString(ae(s)),i.material=a,a.wireframe=r.wireframe,i.visibility=r.opacity,i}static createBox(e,t,r){return B.MeshBuilder.CreateBox("box",{size:r.size})}static createSphere(e,t,r){return B.MeshBuilder.CreateSphere("sphere",{diameter:r.size})}static createCylinder(e,t,r){return B.MeshBuilder.CreateCylinder("cylinder",{height:r.size*Fe,diameter:r.size})}static createCone(e,t,r){return B.MeshBuilder.CreateCylinder("cylinder",{height:r.size*Fe,diameterTop:0,diameterBottom:r.size})}static createCapsule(e,t,r){return B.MeshBuilder.CreateCapsule("capsule",{})}static createTorus(e,t,r){return B.MeshBuilder.CreateTorus("torus",{})}static createTorusKnot(e,t,r){return B.MeshBuilder.CreateTorusKnot("tk",{radius:r.size*.3,tube:r.size*.2,radialSegments:128})}static createPolyhedron(e,t,r,i){return B.MeshBuilder.CreatePolyhedron("polyhedron",{size:i.size,type:e})}static createGoldberg(e,t,r){return B.MeshBuilder.CreateGoldberg("goldberg",{size:r.size})}static createIcoSphere(e,t,r){return B.MeshBuilder.CreateIcoSphere("icosphere",{radius:r.size})}static createGeodesic(e,t,r){return B.MeshBuilder.CreateGeodesic("geodesic",{size:r.size})}static createLabel(e,t,r){const a="48px Verdana",o=.006944444444444444,f=new B.DynamicTexture("DynamicTexture",64,r.scene).getContext();f.font=a;const l=f.measureText(e).width+8,p=l*o,g=new B.DynamicTexture("DynamicTexture",{width:l,height:72},r.scene,!1),c=new B.StandardMaterial("mat",r.scene);c.specularColor=B.Color3.Black(),g.hasAlpha=!0;const x=g.getContext();x.fillStyle="white",x.beginPath();const v=0,d=0,m=[20,20,20,20],M=l,b=72;x.moveTo(v+m[0],d),x.lineTo(v+M-m[1],d),x.arc(v+M-m[1],d+m[1],m[1],3*Math.PI/2,Math.PI*2),x.lineTo(v+M,d+b-m[2]),x.arc(v+M-m[2],d+b-m[2],m[2],0,Math.PI/2),x.lineTo(v+m[3],d+b),x.arc(v+m[3],d+b-m[3],m[3],Math.PI/2,Math.PI),x.lineTo(v,d+m[0]),x.arc(v+m[0],d+m[0],m[0],Math.PI,3*Math.PI/2),x.closePath(),x.fill(),g.drawText(e,null,null,a,"#000000","transparent",!0),c.opacityTexture=g,c.emissiveTexture=g,c.disableLighting=!0;const w=B.MeshBuilder.CreatePlane("plane",{width:p,height:.5},r.scene);return w.material=c,w.billboardMode=7,w}};const be={size:1,opacity:1,wireframe:!1,color:"lightgrey",shape:"icosphere",nodeMeshFactory:he.defaultNodeMeshFactory,label:!0},Pt=new Map;class W{constructor(e,t,r,i={}){P(this,"parentGraph");P(this,"srcId");P(this,"dstId");P(this,"metadata");P(this,"mesh");P(this,"edgeMeshOpts");var s;if(this.parentGraph=e,this.srcId=t,this.dstId=r,this.metadata=i.metadata??{},!he.list.has(t))throw new Error(`Attempting to create edge '${t}->${r}', Node '${t}' hasn't been created yet.`);if(!he.list.has(r))throw new Error(`Attempting to create edge '${t}->${r}', Node '${r}' hasn't been created yet.`);let a={};for(let u of Object.keys(Oe))a[u]=((s=i==null?void 0:i.edgeMeshOpts)==null?void 0:s[u])??Oe[u];this.edgeMeshOpts=a,this.parentGraph.graphEngine.addEdge(this),this.mesh=this.edgeMeshOpts.edgeMeshFactory(this,this.parentGraph,this.edgeMeshOpts),this.mesh.metadata={},this.mesh.metadata.parentEdge=this}update(){let e=this.parentGraph.graphEngine.getEdgePosition(this);this.mesh.setPoints([[e.src.x,e.src.y,e.src.z??0,e.dst.x,e.dst.y,e.dst.z??0]])}static get list(){return Lt}static create(e,t,r,i={}){const a=W.list.get(t,r);if(a)return a;const s=new W(e,t,r,i);return W.list.set(t,r,s),s}static defaultEdgeMeshFactory(e,t,r){switch(r.type){case"plain":return W.createSimpleLine(e,t,r);case"arrow":return W.createArrowLine(e,t,r);case"moving":return W.createMovingLine(e,t,r);default:throw new TypeError(`Unknown Edge type: '${r.type}'`)}}static createSimpleLine(e,t,r){return B.CreateGreasedLine("edge",{points:[0,0,0,1,1,1]},{color:B.Color3.FromHexString(ae(r.color))})}static createArrowLine(e,t,r){return B.CreateGreasedLine("edge",{points:[0,0,0,1,1,1]},{color:B.Color3.FromHexString(ae(r.color))})}static createMovingLine(e,t,r){const i=B.Color3.FromHexString(ae(r.movingLineOpts.baseColor)),a=B.Color3.FromHexString(ae(r.color)),s=Math.floor(i.r*255),u=Math.floor(i.g*255),o=Math.floor(i.b*255),h=Math.floor(a.r*255),f=Math.floor(a.g*255),l=Math.floor(a.b*255),p=new Uint8Array([s,u,o,h,f,l]),g=new B.RawTexture(p,p.length/3,1,B.Engine.TEXTUREFORMAT_RGB,t.scene,!1,!0,B.Engine.TEXTURE_NEAREST_NEAREST);g.wrapU=B.RawTexture.WRAP_ADDRESSMODE,g.name="blue-white-texture";const c=B.CreateGreasedLine("edge",{points:[0,0,0,1,1,1]},{width:r.movingLineOpts.width,colorMode:B.GreasedLineMeshColorMode.COLOR_MODE_MULTIPLY});let x=c.material;return x.emissiveTexture=g,x.disableLighting=!0,g.uScale=5,t.scene.onBeforeRenderObservable.add(()=>{g.uOffset+=.04*t.scene.getAnimationRatio()}),c}}const Oe={type:"moving",color:"white",movingLineOpts:{baseColor:"lightgrey",width:.25},edgeMeshFactory:W.defaultEdgeMeshFactory};class zt{constructor(){P(this,"map",new Map)}has(e,t){const r=this.map.get(e);return r?r.has(t):!1}set(e,t,r){let i=this.map.get(e);if(i||(i=new Map,this.map.set(e,i)),i.has(t))throw new Error("Attempting to create duplicate Edge");i.set(t,r)}get(e,t){let r=this.map.get(e);if(r)return r.get(t)}}const Lt=new zt;function De(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var _e=function(e){qt(e);var t=St(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e};function St(n){var e=Object.create(null);return{on:function(t,r,i){if(typeof r!="function")throw new Error("callback is expected to be a function");var a=e[t];return a||(a=e[t]=[]),a.push({callback:r,ctx:i}),n},off:function(t,r){var i=typeof t>"u";if(i)return e=Object.create(null),n;if(e[t]){var a=typeof r!="function";if(a)delete e[t];else for(var s=e[t],u=0;u<s.length;++u)s[u].callback===r&&s.splice(u,1)}return n},fire:function(t){var r=e[t];if(!r)return n;var i;arguments.length>1&&(i=Array.prototype.splice.call(arguments,1));for(var a=0;a<r.length;++a){var s=r[a];s.callback.apply(s.ctx,i)}return n}}}function qt(n){if(!n)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],t=0;t<e.length;++t)if(n.hasOwnProperty(e[t]))throw new Error("Subject cannot be eventified, since it already has property '"+e[t]+"'")}var Tt=It,At=_e;function It(n){if(n=n||{},"uniqueLinkId"in n&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),n.multigraph=n.uniqueLinkId),n.multigraph===void 0&&(n.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,t=new Map,r={},i=0,a=n.multigraph?b:M,s=[],u=E,o=E,h=E,f=E,l={version:20,addNode:x,addLink:m,removeLink:z,removeNode:d,getNode:v,getNodeCount:w,getLinkCount:N,getEdgeCount:N,getLinksCount:N,getNodesCount:w,getLinks:C,forEachNode:Z,forEachLinkedNode:re,forEachLink:T,beginUpdate:h,endUpdate:f,clear:F,hasLink:I,hasNode:v,getLink:I};return At(l),p(),l;function p(){var $=l.on;l.on=k;function k(){return l.beginUpdate=h=O,l.endUpdate=f=X,u=g,o=c,l.on=$,$.apply(l,arguments)}}function g($,k){s.push({link:$,changeType:k})}function c($,k){s.push({node:$,changeType:k})}function x($,k){if($===void 0)throw new Error("Invalid node identifier");h();var L=v($);return L?(L.data=k,o(L,"update")):(L=new Ft($,k),o(L,"add")),e.set($,L),f(),L}function v($){return e.get($)}function d($){var k=v($);if(!k)return!1;h();var L=k.links;return L&&(L.forEach(A),k.links=null),e.delete($),o(k,"remove"),f(),!0}function m($,k,L){h();var D=v($)||x($),U=v(k)||x(k),G=a($,k,L),Y=t.has(G.id);return t.set(G.id,G),Ge(D,G),$!==k&&Ge(U,G),u(G,Y?"update":"add"),f(),G}function M($,k,L){var D=ve($,k),U=t.get(D);return U?(U.data=L,U):new je($,k,L,D)}function b($,k,L){var D=ve($,k),U=r.hasOwnProperty(D);if(U||I($,k)){U||(r[D]=0);var G="@"+ ++r[D];D=ve($+G,k+G)}return new je($,k,L,D)}function w(){return e.size}function N(){return t.size}function C($){var k=v($);return k?k.links:null}function z($,k){return k!==void 0&&($=I($,k)),A($)}function A($){if(!$||!t.get($.id))return!1;h(),t.delete($.id);var k=v($.fromId),L=v($.toId);return k&&k.links.delete($),L&&L.links.delete($),u($,"remove"),f(),!0}function I($,k){if(!($===void 0||k===void 0))return t.get(ve($,k))}function F(){h(),Z(function($){d($.id)}),f()}function T($){if(typeof $=="function")for(var k=t.values(),L=k.next();!L.done;){if($(L.value))return!0;L=k.next()}}function re($,k,L){var D=v($);if(D&&D.links&&typeof k=="function")return L?y(D.links,$,k):_(D.links,$,k)}function _($,k,L){for(var D,U=$.values(),G=U.next();!G.done;){var Y=G.value,Fr=Y.fromId===k?Y.toId:Y.fromId;if(D=L(e.get(Fr),Y),D)return!0;G=U.next()}}function y($,k,L){for(var D,U=$.values(),G=U.next();!G.done;){var Y=G.value;if(Y.fromId===k&&(D=L(e.get(Y.toId),Y),D))return!0;G=U.next()}}function E(){}function O(){i+=1}function X(){i-=1,i===0&&s.length>0&&(l.fire("changed",s),s.length=0)}function Z($){if(typeof $!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+$);for(var k=e.values(),L=k.next();!L.done;){if($(L.value))return!0;L=k.next()}}}function Ft(n,e){this.id=n,this.links=null,this.data=e}function Ge(n,e){n.links?n.links.add(e):n.links=new Set([e])}function je(n,e,t,r){this.fromId=n,this.toId=e,this.data=t,this.id=r}function ve(n,e){return n.toString()+"👉 "+e.toString()}const Ot=De(Tt);var Me={exports:{}},ue={exports:{}},Re=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const Dt=Re;var oe=function(e){return t;function t(r,i){let a=i&&i.indent||0,s=i&&i.join!==void 0?i.join:`
`,u=Array(a+1).join(" "),o=[];for(let h=0;h<e;++h){let f=Dt(h),l=h===0?"":u;o.push(l+r.replace(/{var}/g,f))}return o.join(s)}};const Qe=oe;ue.exports=Gt,ue.exports.generateCreateBodyFunctionBody=Ve,ue.exports.getVectorCode=Ue,ue.exports.getBodyCode=He;function Gt(n,e){let t=Ve(n,e),{Body:r}=new Function(t)();return r}function Ve(n,e){return`
${Ue(n,e)}
${He(n)}
return {Body: Body, Vector: Vector};
`}function He(n){let e=Qe(n),t=e("{var}",{join:", "});return`
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
  ${e("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function Ue(n,e){let t=Qe(n),r="";return e&&(r=`${t(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`),`function Vector(${t("{var}",{join:", "})}) {
  ${r}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${t('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${t("this.{var} = v.{var};",{indent:4})}
    } else {
      ${t('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${t("this.{var} = ",{join:""})}0;
  };`}var jt=ue.exports,te={exports:{}};const Ne=oe,ne=Re;te.exports=Rt,te.exports.generateQuadTreeFunctionBody=We,te.exports.getInsertStackCode=Ze,te.exports.getQuadNodeCode=Ke,te.exports.isSamePosition=Xe,te.exports.getChildBodyCode=Je,te.exports.setChildBodyCode=Ye;function Rt(n){let e=We(n);return new Function(e)()}function We(n){let e=Ne(n),t=Math.pow(2,n);return`
${Ze()}
${Ke(n)}
${Xe(n)}
${Je(n)}
${Ye(n)}

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
        if ((node.max_${ne(0)} - node.min_${ne(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${a()}
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

`;function i(u){let o=[],h=Array(u+1).join(" ");for(let f=0;f<n;++f)o.push(h+`if (${ne(f)} > max_${ne(f)}) {`),o.push(h+`  quadIdx = quadIdx + ${Math.pow(2,f)};`),o.push(h+`  min_${ne(f)} = max_${ne(f)};`),o.push(h+`  max_${ne(f)} = node.max_${ne(f)};`),o.push(h+"}");return o.join(`
`)}function a(){let u=Array(11).join(" "),o=[];for(let h=0;h<t;++h)o.push(u+`if (node.quad${h}) {`),o.push(u+`  queue[pushIdx] = node.quad${h};`),o.push(u+"  queueLength += 1;"),o.push(u+"  pushIdx += 1;"),o.push(u+"}");return o.join(`
`)}function s(u){let o=[];for(let h=0;h<t;++h)o.push(`${u}quad${h} = null;`);return o.join(`
`)}}function Xe(n){let e=Ne(n);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function Ye(n){var e=Math.pow(2,n);return`
function setChild(node, idx, child) {
  ${t()}
}`;function t(){let r=[];for(let i=0;i<e;++i){let a=i===0?"  ":"  else ";r.push(`${a}if (idx === ${i}) node.quad${i} = child;`)}return r.join(`
`)}}function Je(n){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let t=[],r=Math.pow(2,n);for(let i=0;i<r;++i)t.push(`  if (idx === ${i}) return node.quad${i};`);return t.join(`
`)}}function Ke(n){let e=Ne(n),t=Math.pow(2,n);var r=`
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
`;return r;function i(a){let s=[];for(let u=0;u<t;++u)s.push(`${a}quad${u} = null;`);return s.join(`
`)}}function Ze(){return`
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
`}var Qt=te.exports,Ee={exports:{}};Ee.exports=Ht,Ee.exports.generateFunctionBody=et;const Vt=oe;function Ht(n){let e=et(n);return new Function("bodies","settings","random",e)}function et(n){let e=Vt(n);return`
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
`}var Ut=Ee.exports,$e={exports:{}};const Wt=oe;$e.exports=Xt,$e.exports.generateCreateDragForceFunctionBody=tt;function Xt(n){let e=tt(n);return new Function("options",e)}function tt(n){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${Wt(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var Yt=$e.exports,Be={exports:{}};const Jt=oe;Be.exports=Kt,Be.exports.generateCreateSpringForceFunctionBody=nt;function Kt(n){let e=nt(n);return new Function("options","random",e)}function nt(n){let e=Jt(n);return`
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
`}var Zt=Be.exports,ke={exports:{}};const en=oe;ke.exports=tn,ke.exports.generateIntegratorFunctionBody=rt;function tn(n){let e=rt(n);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function rt(n){let e=en(n);return`
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
`}var nn=ke.exports,Ce,it;function rn(){if(it)return Ce;it=1,Ce=n;function n(e,t,r,i){this.from=e,this.to=t,this.length=r,this.coefficient=i}return Ce}var Pe,at;function an(){if(at)return Pe;at=1,Pe=n;function n(e,t){var r;if(e||(e={}),t){for(r in t)if(t.hasOwnProperty(r)){var i=e.hasOwnProperty(r),a=typeof t[r],s=!i||typeof e[r]!==a;s?e[r]=t[r]:a==="object"&&(e[r]=n(e[r],t[r]))}}return e}return Pe}var fe={exports:{}},ot;function on(){if(ot)return fe.exports;ot=1,fe.exports=n,fe.exports.random=n,fe.exports.randomIterator=u;function n(o){var h=typeof o=="number"?o:+new Date;return new e(h)}function e(o){this.seed=o}e.prototype.next=s,e.prototype.nextDouble=a,e.prototype.uniform=a,e.prototype.gaussian=t;function t(){var o,h,f;do h=this.nextDouble()*2-1,f=this.nextDouble()*2-1,o=h*h+f*f;while(o>=1||o===0);return h*Math.sqrt(-2*Math.log(o)/o)}e.prototype.levy=r;function r(){var o=1.5,h=Math.pow(i(1+o)*Math.sin(Math.PI*o/2)/(i((1+o)/2)*o*Math.pow(2,(o-1)/2)),1/o);return this.gaussian()*h/Math.pow(Math.abs(this.gaussian()),1/o)}function i(o){return Math.sqrt(2*Math.PI/o)*Math.pow(1/Math.E*(o+1/(12*o-1/(10*o))),o)}function a(){var o=this.seed;return o=o+2127912214+(o<<12)&4294967295,o=(o^3345072700^o>>>19)&4294967295,o=o+374761393+(o<<5)&4294967295,o=(o+3550635116^o<<9)&4294967295,o=o+4251993797+(o<<3)&4294967295,o=(o^3042594569^o>>>16)&4294967295,this.seed=o,(o&268435455)/268435456}function s(o){return Math.floor(this.nextDouble()*o)}function u(o,h){var f=h||n();if(typeof f.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:p,shuffle:l};function l(){var g,c,x;for(g=o.length-1;g>0;--g)c=f.next(g+1),x=o[c],o[c]=o[g],o[g]=x;return o}function p(g){var c,x,v;for(c=o.length-1;c>0;--c)x=f.next(c+1),v=o[x],o[x]=o[c],o[c]=v,g(v);o.length&&g(o[0])}}return fe.exports}var st=cn,sn=jt,hn=Qt,un=Ut,fn=Yt,dn=Zt,ln=nn,ht={};function cn(n){var e=rn(),t=an(),r=_e;if(n){if(n.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(n.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}n=t(n,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var i=ht[n.dimensions];if(!i){var a=n.dimensions;i={Body:sn(a,n.debug),createQuadTree:hn(a),createBounds:un(a),createDragForce:fn(a),createSpringForce:dn(a),integrate:ln(a)},ht[a]=i}var s=i.Body,u=i.createQuadTree,o=i.createBounds,h=i.createDragForce,f=i.createSpringForce,l=i.integrate,p=y=>new s(y),g=on().random(42),c=[],x=[],v=u(n,g),d=o(c,n,g),m=f(n,g),M=h(n),b=0,w=[],N=new Map,C=0;I("nbody",re),I("spring",_);var z={bodies:c,quadTree:v,springs:x,settings:n,addForce:I,removeForce:F,getForces:T,step:function(){for(var y=0;y<w.length;++y)w[y](C);var E=l(c,n.timeStep,n.adaptiveTimeStepWeight);return C+=1,E},addBody:function(y){if(!y)throw new Error("Body is required");return c.push(y),y},addBodyAt:function(y){if(!y)throw new Error("Body position is required");var E=p(y);return c.push(E),E},removeBody:function(y){if(y){var E=c.indexOf(y);if(!(E<0))return c.splice(E,1),c.length===0&&d.reset(),!0}},addSpring:function(y,E,O,X){if(!y||!E)throw new Error("Cannot add null spring to force simulator");typeof O!="number"&&(O=-1);var Z=new e(y,E,O,X>=0?X:-1);return x.push(Z),Z},getTotalMovement:function(){return b},removeSpring:function(y){if(y){var E=x.indexOf(y);if(E>-1)return x.splice(E,1),!0}},getBestNewBodyPosition:function(y){return d.getBestNewPosition(y)},getBBox:A,getBoundingBox:A,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(y){return y!==void 0?(n.gravity=y,v.options({gravity:y}),this):n.gravity},theta:function(y){return y!==void 0?(n.theta=y,v.options({theta:y}),this):n.theta},random:g};return pn(n,z),r(z),z;function A(){return d.update(),d.box}function I(y,E){if(N.has(y))throw new Error("Force "+y+" is already added");N.set(y,E),w.push(E)}function F(y){var E=w.indexOf(N.get(y));E<0||(w.splice(E,1),N.delete(y))}function T(){return N}function re(){if(c.length!==0){v.insertBodies(c);for(var y=c.length;y--;){var E=c[y];E.isPinned||(E.reset(),v.updateBodyForce(E),M.update(E))}}}function _(){for(var y=x.length;y--;)m.update(x[y])}}function pn(n,e){for(var t in n)gn(n,e,t)}function gn(n,e,t){if(n.hasOwnProperty(t)&&typeof e[t]!="function"){var r=Number.isFinite(n[t]);r?e[t]=function(i){if(i!==void 0){if(!Number.isFinite(i))throw new Error("Value of "+t+" should be a valid number.");return n[t]=i,e}return n[t]}:e[t]=function(i){return i!==void 0?(n[t]=i,e):n[t]}}}Me.exports=yn,Me.exports.simulator=st;var vn=_e;function yn(n,e){if(!n)throw new Error("Graph structure cannot be undefined");var t=e&&e.createSimulator||st,r=t(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var i=n.version>19?re:T;e&&typeof e.nodeMass=="function"&&(i=e.nodeMass);var a=new Map,s={},u=0,o=r.settings.springTransform||wn;M(),v();var h=!1,f={step:function(){if(u===0)return l(!0),!0;var _=r.step();f.lastMove=_,f.fire("step");var y=_/u,E=y<=.01;return l(E),E},getNodePosition:function(_){return F(_).pos},setNodePosition:function(_){var y=F(_);y.setPosition.apply(y,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(_){var y=s[_];if(y)return{from:y.from.pos,to:y.to.pos}},getGraphRect:function(){return r.getBBox()},forEachBody:p,pinNode:function(_,y){var E=F(_.id);E.isPinned=!!y},isNodePinned:function(_){return F(_.id).isPinned},dispose:function(){n.off("changed",m),f.fire("disposed")},getBody:x,getSpring:c,getForceVectorLength:g,simulator:r,graph:n,lastMove:0};return vn(f),f;function l(_){h!==_&&(h=_,d(_))}function p(_){a.forEach(_)}function g(){var _=0,y=0;return p(function(E){_+=Math.abs(E.force.x),y+=Math.abs(E.force.y)}),Math.sqrt(_*_+y*y)}function c(_,y){var E;if(y===void 0)typeof _!="object"?E=_:E=_.id;else{var O=n.hasLink(_,y);if(!O)return;E=O.id}return s[E]}function x(_){return a.get(_)}function v(){n.on("changed",m)}function d(_){f.fire("stable",_)}function m(_){for(var y=0;y<_.length;++y){var E=_[y];E.changeType==="add"?(E.node&&b(E.node.id),E.link&&N(E.link)):E.changeType==="remove"&&(E.node&&w(E.node),E.link&&C(E.link))}u=n.getNodesCount()}function M(){u=0,n.forEachNode(function(_){b(_.id),u+=1}),n.forEachLink(N)}function b(_){var y=a.get(_);if(!y){var E=n.getNode(_);if(!E)throw new Error("initBody() was called with unknown node id");var O=E.position;if(!O){var X=z(E);O=r.getBestNewBodyPosition(X)}y=r.addBodyAt(O),y.id=_,a.set(_,y),A(_),I(E)&&(y.isPinned=!0)}}function w(_){var y=_.id,E=a.get(y);E&&(a.delete(y),r.removeBody(E))}function N(_){A(_.fromId),A(_.toId);var y=a.get(_.fromId),E=a.get(_.toId),O=r.addSpring(y,E,_.length);o(_,O),s[_.id]=O}function C(_){var y=s[_.id];if(y){var E=n.getNode(_.fromId),O=n.getNode(_.toId);E&&A(E.id),O&&A(O.id),delete s[_.id],r.removeSpring(y)}}function z(_){var y=[];if(!_.links)return y;for(var E=Math.min(_.links.length,2),O=0;O<E;++O){var X=_.links[O],Z=X.fromId!==_.id?a.get(X.fromId):a.get(X.toId);Z&&Z.pos&&y.push(Z)}return y}function A(_){var y=a.get(_);if(y.mass=i(_),Number.isNaN(y.mass))throw new Error("Node mass should be a number")}function I(_){return _&&(_.isPinned||_.data&&_.data.isPinned)}function F(_){var y=a.get(_);return y||(b(_),y=a.get(_)),y}function T(_){var y=n.getLinks(_);return y?1+y.length/3:1}function re(_){var y=n.getLinks(_);return y?1+y.size/3:1}}function wn(){}var xn=Me.exports;const mn=De(xn);class bn{constructor(){P(this,"ngraph");P(this,"ngraphLayout");P(this,"nodeMapping",new Map);P(this,"edgeMapping",new Map);this.ngraph=Ot(),this.ngraphLayout=mn(this.ngraph,{dimensions:3})}async init(){}step(){this.ngraphLayout.step()}addNode(e){const t=this.ngraph.addNode(e.id,{parentNode:e});this.nodeMapping.set(e,t)}addEdge(e){const t=this.ngraph.addLink(e.srcId,e.dstId,{parentEdge:this});this.edgeMapping.set(e,t)}getNodePosition(e){const t=this._getMappedNode(e);return this.ngraphLayout.getNodePosition(t.id)}setNodePosition(e,t){const r=this._getMappedNode(e),i=this.ngraphLayout.getNodePosition(r.id);i.x=t.x,i.y=t.y,i.z=t.z}getEdgePosition(e){const t=this._getMappedEdge(e),r=this.ngraphLayout.getLinkPosition(t.id);return{src:{x:r.from.x,y:r.from.y,z:r.from.z},dst:{x:r.to.x,y:r.to.y,z:r.to.z}}}get nodes(){return this.nodeMapping.keys()}get edges(){return this.edgeMapping.keys()}pin(e){const t=this._getMappedNode(e);this.ngraphLayout.pinNode(t,!0)}unpin(e){const t=this._getMappedNode(e);this.ngraphLayout.pinNode(t,!1)}_getMappedNode(e){const t=this.nodeMapping.get(e);if(!t)throw new Error("Internal error: Node not found in NGraphEngine");return t}_getMappedEdge(e){const t=this.edgeMapping.get(e);if(!t)throw new Error("Internal error: Edge not found in NGraphEngine");return t}}function _n(n,e,t){var r,i=1;n==null&&(n=0),e==null&&(e=0),t==null&&(t=0);function a(){var s,u=r.length,o,h=0,f=0,l=0;for(s=0;s<u;++s)o=r[s],h+=o.x||0,f+=o.y||0,l+=o.z||0;for(h=(h/u-n)*i,f=(f/u-e)*i,l=(l/u-t)*i,s=0;s<u;++s)o=r[s],h&&(o.x-=h),f&&(o.y-=f),l&&(o.z-=l)}return a.initialize=function(s){r=s},a.x=function(s){return arguments.length?(n=+s,a):n},a.y=function(s){return arguments.length?(e=+s,a):e},a.z=function(s){return arguments.length?(t=+s,a):t},a.strength=function(s){return arguments.length?(i=+s,a):i},a}function Mn(n){const e=+this._x.call(null,n);return ut(this.cover(e),e,n)}function ut(n,e,t){if(isNaN(e))return n;var r,i=n._root,a={data:t},s=n._x0,u=n._x1,o,h,f,l,p;if(!i)return n._root=a,n;for(;i.length;)if((f=e>=(o=(s+u)/2))?s=o:u=o,r=i,!(i=i[l=+f]))return r[l]=a,n;if(h=+n._x.call(null,i.data),e===h)return a.next=i,r?r[l]=a:n._root=a,n;do r=r?r[l]=new Array(2):n._root=new Array(2),(f=e>=(o=(s+u)/2))?s=o:u=o;while((l=+f)==(p=+(h>=o)));return r[p]=i,r[l]=a,n}function Nn(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e);let r=1/0,i=-1/0;for(let a=0,s;a<e;++a)isNaN(s=+this._x.call(null,n[a]))||(t[a]=s,s<r&&(r=s),s>i&&(i=s));if(r>i)return this;this.cover(r).cover(i);for(let a=0;a<e;++a)ut(this,t[a],n[a]);return this}function En(n){if(isNaN(n=+n))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(n))+1;else{for(var r=t-e||1,i=this._root,a,s;e>n||n>=t;)switch(s=+(n<e),a=new Array(2),a[s]=i,i=a,r*=2,s){case 0:t=e+r;break;case 1:e=t-r;break}this._root&&this._root.length&&(this._root=i)}return this._x0=e,this._x1=t,this}function $n(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function Bn(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function J(n,e,t){this.node=n,this.x0=e,this.x1=t}function kn(n,e){var t,r=this._x0,i,a,s=this._x1,u=[],o=this._root,h,f;for(o&&u.push(new J(o,r,s)),e==null?e=1/0:(r=n-e,s=n+e);h=u.pop();)if(!(!(o=h.node)||(i=h.x0)>s||(a=h.x1)<r))if(o.length){var l=(i+a)/2;u.push(new J(o[1],l,a),new J(o[0],i,l)),(f=+(n>=l))&&(h=u[u.length-1],u[u.length-1]=u[u.length-1-f],u[u.length-1-f]=h)}else{var p=Math.abs(n-+this._x.call(null,o.data));p<e&&(e=p,r=n-p,s=n+p,t=o.data)}return t}function Cn(n){if(isNaN(o=+this._x.call(null,n)))return this;var e,t=this._root,r,i,a,s=this._x0,u=this._x1,o,h,f,l,p;if(!t)return this;if(t.length)for(;;){if((f=o>=(h=(s+u)/2))?s=h:u=h,e=t,!(t=t[l=+f]))return this;if(!t.length)break;e[l+1&1]&&(r=e,p=l)}for(;t.data!==n;)if(i=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,i?(a?i.next=a:delete i.next,this):e?(a?e[l]=a:delete e[l],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(r?r[p]=t:this._root=t),this):(this._root=a,this)}function Pn(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function zn(){return this._root}function Ln(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function Sn(n){var e=[],t,r=this._root,i,a,s;for(r&&e.push(new J(r,this._x0,this._x1));t=e.pop();)if(!n(r=t.node,a=t.x0,s=t.x1)&&r.length){var u=(a+s)/2;(i=r[1])&&e.push(new J(i,u,s)),(i=r[0])&&e.push(new J(i,a,u))}return this}function qn(n){var e=[],t=[],r;for(this._root&&e.push(new J(this._root,this._x0,this._x1));r=e.pop();){var i=r.node;if(i.length){var a,s=r.x0,u=r.x1,o=(s+u)/2;(a=i[0])&&e.push(new J(a,s,o)),(a=i[1])&&e.push(new J(a,o,u))}t.push(r)}for(;r=t.pop();)n(r.node,r.x0,r.x1);return this}function Tn(n){return n[0]}function An(n){return arguments.length?(this._x=n,this):this._x}function ft(n,e){var t=new ze(e??Tn,NaN,NaN);return n==null?t:t.addAll(n)}function ze(n,e,t){this._x=n,this._x0=e,this._x1=t,this._root=void 0}function dt(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var H=ft.prototype=ze.prototype;H.copy=function(){var n=new ze(this._x,this._x0,this._x1),e=this._root,t,r;if(!e)return n;if(!e.length)return n._root=dt(e),n;for(t=[{source:e,target:n._root=new Array(2)}];e=t.pop();)for(var i=0;i<2;++i)(r=e.source[i])&&(r.length?t.push({source:r,target:e.target[i]=new Array(2)}):e.target[i]=dt(r));return n},H.add=Mn,H.addAll=Nn,H.cover=En,H.data=$n,H.extent=Bn,H.find=kn,H.remove=Cn,H.removeAll=Pn,H.root=zn,H.size=Ln,H.visit=Sn,H.visitAfter=qn,H.x=An;function In(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return lt(this.cover(e,t),e,t,n)}function lt(n,e,t,r){if(isNaN(e)||isNaN(t))return n;var i,a=n._root,s={data:r},u=n._x0,o=n._y0,h=n._x1,f=n._y1,l,p,g,c,x,v,d,m;if(!a)return n._root=s,n;for(;a.length;)if((x=e>=(l=(u+h)/2))?u=l:h=l,(v=t>=(p=(o+f)/2))?o=p:f=p,i=a,!(a=a[d=v<<1|x]))return i[d]=s,n;if(g=+n._x.call(null,a.data),c=+n._y.call(null,a.data),e===g&&t===c)return s.next=a,i?i[d]=s:n._root=s,n;do i=i?i[d]=new Array(4):n._root=new Array(4),(x=e>=(l=(u+h)/2))?u=l:h=l,(v=t>=(p=(o+f)/2))?o=p:f=p;while((d=v<<1|x)===(m=(c>=p)<<1|g>=l));return i[m]=a,i[d]=s,n}function Fn(n){var e,t,r=n.length,i,a,s=new Array(r),u=new Array(r),o=1/0,h=1/0,f=-1/0,l=-1/0;for(t=0;t<r;++t)isNaN(i=+this._x.call(null,e=n[t]))||isNaN(a=+this._y.call(null,e))||(s[t]=i,u[t]=a,i<o&&(o=i),i>f&&(f=i),a<h&&(h=a),a>l&&(l=a));if(o>f||h>l)return this;for(this.cover(o,h).cover(f,l),t=0;t<r;++t)lt(this,s[t],u[t],n[t]);return this}function On(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,r=this._y0,i=this._x1,a=this._y1;if(isNaN(t))i=(t=Math.floor(n))+1,a=(r=Math.floor(e))+1;else{for(var s=i-t||1,u=this._root,o,h;t>n||n>=i||r>e||e>=a;)switch(h=(e<r)<<1|n<t,o=new Array(4),o[h]=u,u=o,s*=2,h){case 0:i=t+s,a=r+s;break;case 1:t=i-s,a=r+s;break;case 2:i=t+s,r=a-s;break;case 3:t=i-s,r=a-s;break}this._root&&this._root.length&&(this._root=u)}return this._x0=t,this._y0=r,this._x1=i,this._y1=a,this}function Dn(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function Gn(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Q(n,e,t,r,i){this.node=n,this.x0=e,this.y0=t,this.x1=r,this.y1=i}function jn(n,e,t){var r,i=this._x0,a=this._y0,s,u,o,h,f=this._x1,l=this._y1,p=[],g=this._root,c,x;for(g&&p.push(new Q(g,i,a,f,l)),t==null?t=1/0:(i=n-t,a=e-t,f=n+t,l=e+t,t*=t);c=p.pop();)if(!(!(g=c.node)||(s=c.x0)>f||(u=c.y0)>l||(o=c.x1)<i||(h=c.y1)<a))if(g.length){var v=(s+o)/2,d=(u+h)/2;p.push(new Q(g[3],v,d,o,h),new Q(g[2],s,d,v,h),new Q(g[1],v,u,o,d),new Q(g[0],s,u,v,d)),(x=(e>=d)<<1|n>=v)&&(c=p[p.length-1],p[p.length-1]=p[p.length-1-x],p[p.length-1-x]=c)}else{var m=n-+this._x.call(null,g.data),M=e-+this._y.call(null,g.data),b=m*m+M*M;if(b<t){var w=Math.sqrt(t=b);i=n-w,a=e-w,f=n+w,l=e+w,r=g.data}}return r}function Rn(n){if(isNaN(f=+this._x.call(null,n))||isNaN(l=+this._y.call(null,n)))return this;var e,t=this._root,r,i,a,s=this._x0,u=this._y0,o=this._x1,h=this._y1,f,l,p,g,c,x,v,d;if(!t)return this;if(t.length)for(;;){if((c=f>=(p=(s+o)/2))?s=p:o=p,(x=l>=(g=(u+h)/2))?u=g:h=g,e=t,!(t=t[v=x<<1|c]))return this;if(!t.length)break;(e[v+1&3]||e[v+2&3]||e[v+3&3])&&(r=e,d=v)}for(;t.data!==n;)if(i=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,i?(a?i.next=a:delete i.next,this):e?(a?e[v]=a:delete e[v],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(r?r[d]=t:this._root=t),this):(this._root=a,this)}function Qn(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function Vn(){return this._root}function Hn(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function Un(n){var e=[],t,r=this._root,i,a,s,u,o;for(r&&e.push(new Q(r,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(r=t.node,a=t.x0,s=t.y0,u=t.x1,o=t.y1)&&r.length){var h=(a+u)/2,f=(s+o)/2;(i=r[3])&&e.push(new Q(i,h,f,u,o)),(i=r[2])&&e.push(new Q(i,a,f,h,o)),(i=r[1])&&e.push(new Q(i,h,s,u,f)),(i=r[0])&&e.push(new Q(i,a,s,h,f))}return this}function Wn(n){var e=[],t=[],r;for(this._root&&e.push(new Q(this._root,this._x0,this._y0,this._x1,this._y1));r=e.pop();){var i=r.node;if(i.length){var a,s=r.x0,u=r.y0,o=r.x1,h=r.y1,f=(s+o)/2,l=(u+h)/2;(a=i[0])&&e.push(new Q(a,s,u,f,l)),(a=i[1])&&e.push(new Q(a,f,u,o,l)),(a=i[2])&&e.push(new Q(a,s,l,f,h)),(a=i[3])&&e.push(new Q(a,f,l,o,h))}t.push(r)}for(;r=t.pop();)n(r.node,r.x0,r.y0,r.x1,r.y1);return this}function Xn(n){return n[0]}function Yn(n){return arguments.length?(this._x=n,this):this._x}function Jn(n){return n[1]}function Kn(n){return arguments.length?(this._y=n,this):this._y}function ct(n,e,t){var r=new Le(e??Xn,t??Jn,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function Le(n,e,t,r,i,a){this._x=n,this._y=e,this._x0=t,this._y0=r,this._x1=i,this._y1=a,this._root=void 0}function pt(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var V=ct.prototype=Le.prototype;V.copy=function(){var n=new Le(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,r;if(!e)return n;if(!e.length)return n._root=pt(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var i=0;i<4;++i)(r=e.source[i])&&(r.length?t.push({source:r,target:e.target[i]=new Array(4)}):e.target[i]=pt(r));return n},V.add=In,V.addAll=Fn,V.cover=On,V.data=Dn,V.extent=Gn,V.find=jn,V.remove=Rn,V.removeAll=Qn,V.root=Vn,V.size=Hn,V.visit=Un,V.visitAfter=Wn,V.x=Yn,V.y=Kn;function Zn(n){const e=+this._x.call(null,n),t=+this._y.call(null,n),r=+this._z.call(null,n);return gt(this.cover(e,t,r),e,t,r,n)}function gt(n,e,t,r,i){if(isNaN(e)||isNaN(t)||isNaN(r))return n;var a,s=n._root,u={data:i},o=n._x0,h=n._y0,f=n._z0,l=n._x1,p=n._y1,g=n._z1,c,x,v,d,m,M,b,w,N,C,z;if(!s)return n._root=u,n;for(;s.length;)if((b=e>=(c=(o+l)/2))?o=c:l=c,(w=t>=(x=(h+p)/2))?h=x:p=x,(N=r>=(v=(f+g)/2))?f=v:g=v,a=s,!(s=s[C=N<<2|w<<1|b]))return a[C]=u,n;if(d=+n._x.call(null,s.data),m=+n._y.call(null,s.data),M=+n._z.call(null,s.data),e===d&&t===m&&r===M)return u.next=s,a?a[C]=u:n._root=u,n;do a=a?a[C]=new Array(8):n._root=new Array(8),(b=e>=(c=(o+l)/2))?o=c:l=c,(w=t>=(x=(h+p)/2))?h=x:p=x,(N=r>=(v=(f+g)/2))?f=v:g=v;while((C=N<<2|w<<1|b)===(z=(M>=v)<<2|(m>=x)<<1|d>=c));return a[z]=s,a[C]=u,n}function er(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e),r=new Float64Array(e),i=new Float64Array(e);let a=1/0,s=1/0,u=1/0,o=-1/0,h=-1/0,f=-1/0;for(let l=0,p,g,c,x;l<e;++l)isNaN(g=+this._x.call(null,p=n[l]))||isNaN(c=+this._y.call(null,p))||isNaN(x=+this._z.call(null,p))||(t[l]=g,r[l]=c,i[l]=x,g<a&&(a=g),g>o&&(o=g),c<s&&(s=c),c>h&&(h=c),x<u&&(u=x),x>f&&(f=x));if(a>o||s>h||u>f)return this;this.cover(a,s,u).cover(o,h,f);for(let l=0;l<e;++l)gt(this,t[l],r[l],i[l],n[l]);return this}function tr(n,e,t){if(isNaN(n=+n)||isNaN(e=+e)||isNaN(t=+t))return this;var r=this._x0,i=this._y0,a=this._z0,s=this._x1,u=this._y1,o=this._z1;if(isNaN(r))s=(r=Math.floor(n))+1,u=(i=Math.floor(e))+1,o=(a=Math.floor(t))+1;else{for(var h=s-r||1,f=this._root,l,p;r>n||n>=s||i>e||e>=u||a>t||t>=o;)switch(p=(t<a)<<2|(e<i)<<1|n<r,l=new Array(8),l[p]=f,f=l,h*=2,p){case 0:s=r+h,u=i+h,o=a+h;break;case 1:r=s-h,u=i+h,o=a+h;break;case 2:s=r+h,i=u-h,o=a+h;break;case 3:r=s-h,i=u-h,o=a+h;break;case 4:s=r+h,u=i+h,a=o-h;break;case 5:r=s-h,u=i+h,a=o-h;break;case 6:s=r+h,i=u-h,a=o-h;break;case 7:r=s-h,i=u-h,a=o-h;break}this._root&&this._root.length&&(this._root=f)}return this._x0=r,this._y0=i,this._z0=a,this._x1=s,this._y1=u,this._z1=o,this}function nr(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function rr(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function q(n,e,t,r,i,a,s){this.node=n,this.x0=e,this.y0=t,this.z0=r,this.x1=i,this.y1=a,this.z1=s}function ir(n,e,t,r){var i,a=this._x0,s=this._y0,u=this._z0,o,h,f,l,p,g,c=this._x1,x=this._y1,v=this._z1,d=[],m=this._root,M,b;for(m&&d.push(new q(m,a,s,u,c,x,v)),r==null?r=1/0:(a=n-r,s=e-r,u=t-r,c=n+r,x=e+r,v=t+r,r*=r);M=d.pop();)if(!(!(m=M.node)||(o=M.x0)>c||(h=M.y0)>x||(f=M.z0)>v||(l=M.x1)<a||(p=M.y1)<s||(g=M.z1)<u))if(m.length){var w=(o+l)/2,N=(h+p)/2,C=(f+g)/2;d.push(new q(m[7],w,N,C,l,p,g),new q(m[6],o,N,C,w,p,g),new q(m[5],w,h,C,l,N,g),new q(m[4],o,h,C,w,N,g),new q(m[3],w,N,f,l,p,C),new q(m[2],o,N,f,w,p,C),new q(m[1],w,h,f,l,N,C),new q(m[0],o,h,f,w,N,C)),(b=(t>=C)<<2|(e>=N)<<1|n>=w)&&(M=d[d.length-1],d[d.length-1]=d[d.length-1-b],d[d.length-1-b]=M)}else{var z=n-+this._x.call(null,m.data),A=e-+this._y.call(null,m.data),I=t-+this._z.call(null,m.data),F=z*z+A*A+I*I;if(F<r){var T=Math.sqrt(r=F);a=n-T,s=e-T,u=t-T,c=n+T,x=e+T,v=t+T,i=m.data}}return i}function ar(n){if(isNaN(p=+this._x.call(null,n))||isNaN(g=+this._y.call(null,n))||isNaN(c=+this._z.call(null,n)))return this;var e,t=this._root,r,i,a,s=this._x0,u=this._y0,o=this._z0,h=this._x1,f=this._y1,l=this._z1,p,g,c,x,v,d,m,M,b,w,N;if(!t)return this;if(t.length)for(;;){if((m=p>=(x=(s+h)/2))?s=x:h=x,(M=g>=(v=(u+f)/2))?u=v:f=v,(b=c>=(d=(o+l)/2))?o=d:l=d,e=t,!(t=t[w=b<<2|M<<1|m]))return this;if(!t.length)break;(e[w+1&7]||e[w+2&7]||e[w+3&7]||e[w+4&7]||e[w+5&7]||e[w+6&7]||e[w+7&7])&&(r=e,N=w)}for(;t.data!==n;)if(i=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,i?(a?i.next=a:delete i.next,this):e?(a?e[w]=a:delete e[w],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(r?r[N]=t:this._root=t),this):(this._root=a,this)}function or(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function sr(){return this._root}function hr(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function ur(n){var e=[],t,r=this._root,i,a,s,u,o,h,f;for(r&&e.push(new q(r,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!n(r=t.node,a=t.x0,s=t.y0,u=t.z0,o=t.x1,h=t.y1,f=t.z1)&&r.length){var l=(a+o)/2,p=(s+h)/2,g=(u+f)/2;(i=r[7])&&e.push(new q(i,l,p,g,o,h,f)),(i=r[6])&&e.push(new q(i,a,p,g,l,h,f)),(i=r[5])&&e.push(new q(i,l,s,g,o,p,f)),(i=r[4])&&e.push(new q(i,a,s,g,l,p,f)),(i=r[3])&&e.push(new q(i,l,p,u,o,h,g)),(i=r[2])&&e.push(new q(i,a,p,u,l,h,g)),(i=r[1])&&e.push(new q(i,l,s,u,o,p,g)),(i=r[0])&&e.push(new q(i,a,s,u,l,p,g))}return this}function fr(n){var e=[],t=[],r;for(this._root&&e.push(new q(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));r=e.pop();){var i=r.node;if(i.length){var a,s=r.x0,u=r.y0,o=r.z0,h=r.x1,f=r.y1,l=r.z1,p=(s+h)/2,g=(u+f)/2,c=(o+l)/2;(a=i[0])&&e.push(new q(a,s,u,o,p,g,c)),(a=i[1])&&e.push(new q(a,p,u,o,h,g,c)),(a=i[2])&&e.push(new q(a,s,g,o,p,f,c)),(a=i[3])&&e.push(new q(a,p,g,o,h,f,c)),(a=i[4])&&e.push(new q(a,s,u,c,p,g,l)),(a=i[5])&&e.push(new q(a,p,u,c,h,g,l)),(a=i[6])&&e.push(new q(a,s,g,c,p,f,l)),(a=i[7])&&e.push(new q(a,p,g,c,h,f,l))}t.push(r)}for(;r=t.pop();)n(r.node,r.x0,r.y0,r.z0,r.x1,r.y1,r.z1);return this}function dr(n){return n[0]}function lr(n){return arguments.length?(this._x=n,this):this._x}function cr(n){return n[1]}function pr(n){return arguments.length?(this._y=n,this):this._y}function gr(n){return n[2]}function vr(n){return arguments.length?(this._z=n,this):this._z}function vt(n,e,t,r){var i=new Se(e??dr,t??cr,r??gr,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function Se(n,e,t,r,i,a,s,u,o){this._x=n,this._y=e,this._z=t,this._x0=r,this._y0=i,this._z0=a,this._x1=s,this._y1=u,this._z1=o,this._root=void 0}function yt(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var R=vt.prototype=Se.prototype;R.copy=function(){var n=new Se(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,r;if(!e)return n;if(!e.length)return n._root=yt(e),n;for(t=[{source:e,target:n._root=new Array(8)}];e=t.pop();)for(var i=0;i<8;++i)(r=e.source[i])&&(r.length?t.push({source:r,target:e.target[i]=new Array(8)}):e.target[i]=yt(r));return n},R.add=Zn,R.addAll=er,R.cover=tr,R.data=nr,R.extent=rr,R.find=ir,R.remove=ar,R.removeAll=or,R.root=sr,R.size=hr,R.visit=ur,R.visitAfter=fr,R.x=lr,R.y=pr,R.z=vr;function de(n){return function(){return n}}function K(n){return(n()-.5)*1e-6}function yr(n){return n.index}function wt(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function wr(n){var e=yr,t=p,r,i=de(30),a,s,u,o,h,f,l=1;n==null&&(n=[]);function p(d){return 1/Math.min(o[d.source.index],o[d.target.index])}function g(d){for(var m=0,M=n.length;m<l;++m)for(var b=0,w,N,C,z=0,A=0,I=0,F,T;b<M;++b)w=n[b],N=w.source,C=w.target,z=C.x+C.vx-N.x-N.vx||K(f),u>1&&(A=C.y+C.vy-N.y-N.vy||K(f)),u>2&&(I=C.z+C.vz-N.z-N.vz||K(f)),F=Math.sqrt(z*z+A*A+I*I),F=(F-a[b])/F*d*r[b],z*=F,A*=F,I*=F,C.vx-=z*(T=h[b]),u>1&&(C.vy-=A*T),u>2&&(C.vz-=I*T),N.vx+=z*(T=1-T),u>1&&(N.vy+=A*T),u>2&&(N.vz+=I*T)}function c(){if(s){var d,m=s.length,M=n.length,b=new Map(s.map((N,C)=>[e(N,C,s),N])),w;for(d=0,o=new Array(m);d<M;++d)w=n[d],w.index=d,typeof w.source!="object"&&(w.source=wt(b,w.source)),typeof w.target!="object"&&(w.target=wt(b,w.target)),o[w.source.index]=(o[w.source.index]||0)+1,o[w.target.index]=(o[w.target.index]||0)+1;for(d=0,h=new Array(M);d<M;++d)w=n[d],h[d]=o[w.source.index]/(o[w.source.index]+o[w.target.index]);r=new Array(M),x(),a=new Array(M),v()}}function x(){if(s)for(var d=0,m=n.length;d<m;++d)r[d]=+t(n[d],d,n)}function v(){if(s)for(var d=0,m=n.length;d<m;++d)a[d]=+i(n[d],d,n)}return g.initialize=function(d,...m){s=d,f=m.find(M=>typeof M=="function")||Math.random,u=m.find(M=>[1,2,3].includes(M))||2,c()},g.links=function(d){return arguments.length?(n=d,c(),g):n},g.id=function(d){return arguments.length?(e=d,g):e},g.iterations=function(d){return arguments.length?(l=+d,g):l},g.strength=function(d){return arguments.length?(t=typeof d=="function"?d:de(+d),x(),g):t},g.distance=function(d){return arguments.length?(i=typeof d=="function"?d:de(+d),v(),g):i},g}var xr={value:()=>{}};function xt(){for(var n=0,e=arguments.length,t={},r;n<e;++n){if(!(r=arguments[n]+"")||r in t||/[\s.]/.test(r))throw new Error("illegal type: "+r);t[r]=[]}return new ye(t)}function ye(n){this._=n}function mr(n,e){return n.trim().split(/^|\s+/).map(function(t){var r="",i=t.indexOf(".");if(i>=0&&(r=t.slice(i+1),t=t.slice(0,i)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}})}ye.prototype=xt.prototype={constructor:ye,on:function(n,e){var t=this._,r=mr(n+"",t),i,a=-1,s=r.length;if(arguments.length<2){for(;++a<s;)if((i=(n=r[a]).type)&&(i=br(t[i],n.name)))return i;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++a<s;)if(i=(n=r[a]).type)t[i]=mt(t[i],n.name,e);else if(e==null)for(i in t)t[i]=mt(t[i],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new ye(n)},call:function(n,e){if((i=arguments.length-2)>0)for(var t=new Array(i),r=0,i,a;r<i;++r)t[r]=arguments[r+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(a=this._[n],r=0,i=a.length;r<i;++r)a[r].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var r=this._[n],i=0,a=r.length;i<a;++i)r[i].value.apply(e,t)}};function br(n,e){for(var t=0,r=n.length,i;t<r;++t)if((i=n[t]).name===e)return i.value}function mt(n,e,t){for(var r=0,i=n.length;r<i;++r)if(n[r].name===e){n[r]=xr,n=n.slice(0,r).concat(n.slice(r+1));break}return t!=null&&n.push({name:e,value:t}),n}var se=0,le=0,ce=0,bt=1e3,we,pe,xe=0,ie=0,me=0,ge=typeof performance=="object"&&performance.now?performance:Date,_t=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Mt(){return ie||(_t(_r),ie=ge.now()+me)}function _r(){ie=0}function qe(){this._call=this._time=this._next=null}qe.prototype=Nt.prototype={constructor:qe,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?Mt():+t)+(e==null?0:+e),!this._next&&pe!==this&&(pe?pe._next=this:we=this,pe=this),this._call=n,this._time=t,Te()},stop:function(){this._call&&(this._call=null,this._time=1/0,Te())}};function Nt(n,e,t){var r=new qe;return r.restart(n,e,t),r}function Mr(){Mt(),++se;for(var n=we,e;n;)(e=ie-n._time)>=0&&n._call.call(void 0,e),n=n._next;--se}function Et(){ie=(xe=ge.now())+me,se=le=0;try{Mr()}finally{se=0,Er(),ie=0}}function Nr(){var n=ge.now(),e=n-xe;e>bt&&(me-=e,xe=n)}function Er(){for(var n,e=we,t,r=1/0;e;)e._call?(r>e._time&&(r=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:we=t);pe=n,Te(r)}function Te(n){if(!se){le&&(le=clearTimeout(le));var e=n-ie;e>24?(n<1/0&&(le=setTimeout(Et,n-ge.now()-me)),ce&&(ce=clearInterval(ce))):(ce||(xe=ge.now(),ce=setInterval(Nr,bt)),se=1,_t(Et))}}const $r=1664525,Br=1013904223,$t=4294967296;function kr(){let n=1;return()=>(n=($r*n+Br)%$t)/$t}var Bt=3;function Ae(n){return n.x}function kt(n){return n.y}function Cr(n){return n.z}var Pr=10,zr=Math.PI*(3-Math.sqrt(5)),Lr=Math.PI*20/(9+Math.sqrt(221));function Sr(n,e){e=e||2;var t=Math.min(Bt,Math.max(1,Math.round(e))),r,i=1,a=.001,s=1-Math.pow(a,1/300),u=0,o=.6,h=new Map,f=Nt(g),l=xt("tick","end"),p=kr();n==null&&(n=[]);function g(){c(),l.call("tick",r),i<a&&(f.stop(),l.call("end",r))}function c(d){var m,M=n.length,b;d===void 0&&(d=1);for(var w=0;w<d;++w)for(i+=(u-i)*s,h.forEach(function(N){N(i)}),m=0;m<M;++m)b=n[m],b.fx==null?b.x+=b.vx*=o:(b.x=b.fx,b.vx=0),t>1&&(b.fy==null?b.y+=b.vy*=o:(b.y=b.fy,b.vy=0)),t>2&&(b.fz==null?b.z+=b.vz*=o:(b.z=b.fz,b.vz=0));return r}function x(){for(var d=0,m=n.length,M;d<m;++d){if(M=n[d],M.index=d,M.fx!=null&&(M.x=M.fx),M.fy!=null&&(M.y=M.fy),M.fz!=null&&(M.z=M.fz),isNaN(M.x)||t>1&&isNaN(M.y)||t>2&&isNaN(M.z)){var b=Pr*(t>2?Math.cbrt(.5+d):t>1?Math.sqrt(.5+d):d),w=d*zr,N=d*Lr;t===1?M.x=b:t===2?(M.x=b*Math.cos(w),M.y=b*Math.sin(w)):(M.x=b*Math.sin(w)*Math.cos(N),M.y=b*Math.cos(w),M.z=b*Math.sin(w)*Math.sin(N))}(isNaN(M.vx)||t>1&&isNaN(M.vy)||t>2&&isNaN(M.vz))&&(M.vx=0,t>1&&(M.vy=0),t>2&&(M.vz=0))}}function v(d){return d.initialize&&d.initialize(n,p,t),d}return x(),r={tick:c,restart:function(){return f.restart(g),r},stop:function(){return f.stop(),r},numDimensions:function(d){return arguments.length?(t=Math.min(Bt,Math.max(1,Math.round(d))),h.forEach(v),r):t},nodes:function(d){return arguments.length?(n=d,x(),h.forEach(v),r):n},alpha:function(d){return arguments.length?(i=+d,r):i},alphaMin:function(d){return arguments.length?(a=+d,r):a},alphaDecay:function(d){return arguments.length?(s=+d,r):+s},alphaTarget:function(d){return arguments.length?(u=+d,r):u},velocityDecay:function(d){return arguments.length?(o=1-d,r):1-o},randomSource:function(d){return arguments.length?(p=d,h.forEach(v),r):p},force:function(d,m){return arguments.length>1?(m==null?h.delete(d):h.set(d,v(m)),r):h.get(d)},find:function(){var d=Array.prototype.slice.call(arguments),m=d.shift()||0,M=(t>1?d.shift():null)||0,b=(t>2?d.shift():null)||0,w=d.shift()||1/0,N=0,C=n.length,z,A,I,F,T,re;for(w*=w,N=0;N<C;++N)T=n[N],z=m-T.x,A=M-(T.y||0),I=b-(T.z||0),F=z*z+A*A+I*I,F<w&&(re=T,w=F);return re},on:function(d,m){return arguments.length>1?(l.on(d,m),r):l.on(d)}}}function qr(){var n,e,t,r,i,a=de(-30),s,u=1,o=1/0,h=.81;function f(c){var x,v=n.length,d=(e===1?ft(n,Ae):e===2?ct(n,Ae,kt):e===3?vt(n,Ae,kt,Cr):null).visitAfter(p);for(i=c,x=0;x<v;++x)t=n[x],d.visit(g)}function l(){if(n){var c,x=n.length,v;for(s=new Array(x),c=0;c<x;++c)v=n[c],s[v.index]=+a(v,c,n)}}function p(c){var x=0,v,d,m=0,M,b,w,N,C=c.length;if(C){for(M=b=w=N=0;N<C;++N)(v=c[N])&&(d=Math.abs(v.value))&&(x+=v.value,m+=d,M+=d*(v.x||0),b+=d*(v.y||0),w+=d*(v.z||0));x*=Math.sqrt(4/C),c.x=M/m,e>1&&(c.y=b/m),e>2&&(c.z=w/m)}else{v=c,v.x=v.data.x,e>1&&(v.y=v.data.y),e>2&&(v.z=v.data.z);do x+=s[v.data.index];while(v=v.next)}c.value=x}function g(c,x,v,d,m){if(!c.value)return!0;var M=[v,d,m][e-1],b=c.x-t.x,w=e>1?c.y-t.y:0,N=e>2?c.z-t.z:0,C=M-x,z=b*b+w*w+N*N;if(C*C/h<z)return z<o&&(b===0&&(b=K(r),z+=b*b),e>1&&w===0&&(w=K(r),z+=w*w),e>2&&N===0&&(N=K(r),z+=N*N),z<u&&(z=Math.sqrt(u*z)),t.vx+=b*c.value*i/z,e>1&&(t.vy+=w*c.value*i/z),e>2&&(t.vz+=N*c.value*i/z)),!0;if(c.length||z>=o)return;(c.data!==t||c.next)&&(b===0&&(b=K(r),z+=b*b),e>1&&w===0&&(w=K(r),z+=w*w),e>2&&N===0&&(N=K(r),z+=N*N),z<u&&(z=Math.sqrt(u*z)));do c.data!==t&&(C=s[c.data.index]*i/z,t.vx+=b*C,e>1&&(t.vy+=w*C),e>2&&(t.vz+=N*C));while(c=c.next)}return f.initialize=function(c,...x){n=c,r=x.find(v=>typeof v=="function")||Math.random,e=x.find(v=>[1,2,3].includes(v))||2,l()},f.strength=function(c){return arguments.length?(a=typeof c=="function"?c:de(+c),l(),f):a},f.distanceMin=function(c){return arguments.length?(u=c*c,f):Math.sqrt(u)},f.distanceMax=function(c){return arguments.length?(o=c*c,f):Math.sqrt(o)},f.theta=function(c){return arguments.length?(h=c*c,f):Math.sqrt(h)},f}function Ie(n){return typeof n=="object"&&typeof n.index=="number"&&typeof n.x=="number"&&typeof n.y=="number"&&typeof n.z=="number"&&typeof n.vx=="number"&&typeof n.vy=="number"&&typeof n.vz=="number"}function Tr(n){return!!(typeof n=="object"&&typeof n.index=="number"&&Ie(n.source)&&Ie(n.target))}class Ar{constructor(){P(this,"d3ForceLayout");P(this,"d3AlphaMin",0);P(this,"d3AlphaTarget",0);P(this,"d3AlphaDecay",.0228);P(this,"d3VelocityDecay",.4);P(this,"nodeMapping",new Map);P(this,"edgeMapping",new Map);P(this,"newNodeMap",new Map);P(this,"newEdgeMap",new Map);P(this,"reheat",!1);this.d3ForceLayout=Sr().numDimensions(3).alpha(1).force("link",wr()).force("charge",qr()).force("center",_n()).force("dagRadial",null).stop(),this.d3ForceLayout.force("link").id(e=>e.id)}get graphNeedsRefresh(){return!!this.newNodeMap.size||!!this.newEdgeMap.size}async init(){}refresh(){if(this.graphNeedsRefresh||this.reheat){let e=[...this.nodeMapping.values()];e=e.concat([...this.newNodeMap.values()]),this.d3ForceLayout.alpha(1).nodes(e).stop();for(let r of this.newNodeMap.entries()){let i=r[0],a=r[1];if(!Ie(a))throw new Error("Internal error: Node is not settled as a complete D3 Node");this.nodeMapping.set(i,a)}this.newNodeMap.clear();let t=[...this.edgeMapping.values()];t=t.concat([...this.newEdgeMap.values()]),this.d3ForceLayout.force("link").links(t);for(let r of this.newEdgeMap.entries()){let i=r[0],a=r[1];if(!Tr(a))throw new Error("Internal error: Edge is not settled as a complete D3 Edge");this.edgeMapping.set(i,a)}this.newEdgeMap.clear()}}step(){this.refresh(),this.d3ForceLayout.tick()}addNode(e){this.newNodeMap.set(e,{id:e.id})}addEdge(e){this.newEdgeMap.set(e,{source:e.srcId,target:e.dstId})}get nodes(){return this.nodeMapping.keys()}get edges(){return this.edgeMapping.keys()}getNodePosition(e){const t=this._getMappedNode(e);if(t.x===void 0||t.y===void 0||t.z===void 0)throw new Error("Internal error: Node not initialized in D3GraphEngine");return{x:t.x,y:t.y,z:t.z}}setNodePosition(e,t){const r=this._getMappedNode(e);r.x=t.x,r.y=t.y,r.z=t.z??0,this.reheat=!0}getEdgePosition(e){let t=this._getMappedEdge(e);return{src:{x:t.source.x,y:t.source.y,z:t.source.z},dst:{x:t.target.x,y:t.target.y,z:t.target.z}}}pin(e){const t=this._getMappedNode(e);t.fx=t.x,t.fy=t.y,t.fz=t.z,this.reheat=!0}unpin(e){const t=this._getMappedNode(e);t.fx=void 0,t.fy=void 0,t.fz=void 0,this.reheat=!0}_getMappedNode(e){this.refresh();const t=this.nodeMapping.get(e);if(!t)throw new Error("Internal error: Node not found in D3GraphEngine");return t}_getMappedEdge(e){this.refresh();let t=this.edgeMapping.get(e);if(!t)throw new Error("Internal error: Edge not found in D3GraphEngine");return t}}class Ir{constructor(e){P(this,"element");P(this,"canvas");P(this,"engine");P(this,"scene");P(this,"camera");P(this,"graphEngine");P(this,"nodeMeshOpts");P(this,"edgeMeshOpts");P(this,"running",!0);P(this,"skybox");P(this,"pinOnDrag");P(this,"fetchNodes");P(this,"fetchEdges");P(this,"graphEngineType");P(this,"minDelta",.02);if(this.pinOnDrag=e.pinOnDrag??!0,this.fetchNodes=e.fetchNodes,this.fetchEdges=e.fetchEdges,this.graphEngineType=e.graphEngineType??"ngraph",typeof e.element=="string"){let t=document.getElementById(e.element);if(!t)throw new Error(`getElementById() could not find element '${e.element}'`);this.element=t}else if(e.element instanceof HTMLElement)this.element=e.element;else throw new TypeError("Graph constructor requires 'element' argument that is either a string specifying the ID of the HTML element or an HTMLElement");if(this.element.innerHTML="",this.canvas=document.createElement("canvas"),this.canvas.setAttribute("id","babylonForceGraphRenderCanvas"),this.canvas.setAttribute("touch-action","none"),this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.touchAction="none",this.element.appendChild(this.canvas),this.engine=new B.Engine(this.canvas,!0),this.scene=new B.Scene(this.engine),this.camera=new B.ArcRotateCamera("camera",-Math.PI/2,Math.PI/2.5,15,new B.Vector3(0,0,0)),this.camera.attachControl(this.canvas,!0),new B.HemisphericLight("light",new B.Vector3(1,1,0)),e.skybox&&new B.PhotoDome("testdome",e.skybox,{resolution:32,size:1e3},this.scene),this.graphEngineType==="ngraph")this.graphEngine=new bn;else if(this.graphEngineType==="d3")this.graphEngine=new Ar;else throw new TypeError(`Unknown graph engine type: '${this.graphEngineType}'`);this.nodeMeshOpts=e.nodeMeshOpts??{},this.edgeMeshOpts=e.edgeMeshOpts??{}}async init(){this.engine.runRenderLoop(()=>{this.update(),this.scene.render()}),navigator.xr&&await this.scene.createDefaultXRExperienceAsync({disableTeleportation:!0}),window.addEventListener("resize",()=>{this.engine.resize()})}update(){if(!this.running)return;this.graphEngine.step();let e=0;for(let t of this.graphEngine.nodes)e=Math.max(e,t.getDeltaPos()),t.update();for(let t of this.graphEngine.edges)t.update();e<this.minDelta&&(console.log("graph engine settled, stopping"),this.running=!1)}addNode(e,t={}){return he.create(this,e,{nodeMeshOpts:this.nodeMeshOpts,pinOnDrag:this.pinOnDrag,metadata:t})}addEdge(e,t,r={}){return W.create(this,e,t,{edgeMeshOpts:this.edgeMeshOpts,metadata:r})}async loadJsonData(e,t={}){const r=t.nodeListProp??"nodes",i=t.edgeListProp??"links",a=t.nodeIdProp??"id",s=t.edgeSrcIdProp??"source",u=t.edgeDstIdProp??"target",h=await(await fetch(e,t.fetchOpts)).json();if(!Array.isArray(h[r]))throw TypeError(`when fetching JSON data: '${r}' was not an Array`);if(!Array.isArray(h[i]))throw TypeError(`when fetching JSON data: '${i}' was not an Array`);for(let f of h[r]){let l=f[a],p=f;this.addNode(l,p)}for(let f of h[i]){let l=f[s],p=f[u],g=f;this.addEdge(l,p,g)}}}j.Edge=W,j.Graph=Ir,j.Node=he,j.util=Ct,Object.defineProperty(j,Symbol.toStringTag,{value:"Module"})});
