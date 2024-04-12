(function(J,A){typeof exports=="object"&&typeof module<"u"?A(exports,require("@babylonjs/core")):typeof define=="function"&&define.amd?define(["exports","@babylonjs/core"],A):(J=typeof globalThis<"u"?globalThis:J||self,A(J.HtmlMesh={},J.BABYLON))})(this,function(J,A){"use strict";var yo=Object.defineProperty;var bo=(J,A,ge)=>A in J?yo(J,A,{enumerable:!0,configurable:!0,writable:!0,value:ge}):J[A]=ge;var O=(J,A,ge)=>(bo(J,typeof A!="symbol"?A+"":A,ge),ge);const ge=new Map([["aliceblue","#f0f8ff"],["antiquewhite","#faebd7"],["aqua","#00ffff"],["aquamarine","#7fffd4"],["azure","#f0ffff"],["beige","#f5f5dc"],["bisque","#ffe4c4"],["black","#000000"],["blanchedalmond","#ffebcd"],["blue","#0000ff"],["blueviolet","#8a2be2"],["brown","#a52a2a"],["burlywood","#deb887"],["cadetblue","#5f9ea0"],["chartreuse","#7fff00"],["chocolate","#d2691e"],["coral","#ff7f50"],["cornflowerblue","#6495ed"],["cornsilk","#fff8dc"],["crimson","#dc143c"],["cyan","#00ffff"],["darkblue","#00008b"],["darkcyan","#008b8b"],["darkgoldenrod","#b8860b"],["darkgray","#a9a9a9"],["darkgreen","#006400"],["darkkhaki","#bdb76b"],["darkmagenta","#8b008b"],["darkolivegreen","#556b2f"],["darkorange","#ff8c00"],["darkorchid","#9932cc"],["darkred","#8b0000"],["darksalmon","#e9967a"],["darkseagreen","#8fbc8f"],["darkslateblue","#483d8b"],["darkslategray","#2f4f4f"],["darkturquoise","#00ced1"],["darkviolet","#9400d3"],["deeppink","#ff1493"],["deepskyblue","#00bfff"],["dimgray","#696969"],["dodgerblue","#1e90ff"],["firebrick","#b22222"],["floralwhite","#fffaf0"],["forestgreen","#228b22"],["fuchsia","#ff00ff"],["gainsboro","#dcdcdc"],["ghostwhite","#f8f8ff"],["gold","#ffd700"],["goldenrod","#daa520"],["gray","#808080"],["green","#008000"],["greenyellow","#adff2f"],["honeydew","#f0fff0"],["hotpink","#ff69b4"],["indianred ","#cd5c5c"],["indigo","#4b0082"],["ivory","#fffff0"],["khaki","#f0e68c"],["lavender","#e6e6fa"],["lavenderblush","#fff0f5"],["lawngreen","#7cfc00"],["lemonchiffon","#fffacd"],["lightblue","#add8e6"],["lightcoral","#f08080"],["lightcyan","#e0ffff"],["lightgoldenrodyellow","#fafad2"],["lightgrey","#d3d3d3"],["lightgreen","#90ee90"],["lightpink","#ffb6c1"],["lightsalmon","#ffa07a"],["lightseagreen","#20b2aa"],["lightskyblue","#87cefa"],["lightslategray","#778899"],["lightsteelblue","#b0c4de"],["lightyellow","#ffffe0"],["lime","#00ff00"],["limegreen","#32cd32"],["linen","#faf0e6"],["magenta","#ff00ff"],["maroon","#800000"],["mediumaquamarine","#66cdaa"],["mediumblue","#0000cd"],["mediumorchid","#ba55d3"],["mediumpurple","#9370d8"],["mediumseagreen","#3cb371"],["mediumslateblue","#7b68ee"],["mediumspringgreen","#00fa9a"],["mediumturquoise","#48d1cc"],["mediumvioletred","#c71585"],["midnightblue","#191970"],["mintcream","#f5fffa"],["mistyrose","#ffe4e1"],["moccasin","#ffe4b5"],["navajowhite","#ffdead"],["navy","#000080"],["oldlace","#fdf5e6"],["olive","#808000"],["olivedrab","#6b8e23"],["orange","#ffa500"],["orangered","#ff4500"],["orchid","#da70d6"],["palegoldenrod","#eee8aa"],["palegreen","#98fb98"],["paleturquoise","#afeeee"],["palevioletred","#d87093"],["papayawhip","#ffefd5"],["peachpuff","#ffdab9"],["peru","#cd853f"],["pink","#ffc0cb"],["plum","#dda0dd"],["powderblue","#b0e0e6"],["purple","#800080"],["rebeccapurple","#663399"],["red","#ff0000"],["rosybrown","#bc8f8f"],["royalblue","#4169e1"],["saddlebrown","#8b4513"],["salmon","#fa8072"],["sandybrown","#f4a460"],["seagreen","#2e8b57"],["seashell","#fff5ee"],["sienna","#a0522d"],["silver","#c0c0c0"],["skyblue","#87ceeb"],["slateblue","#6a5acd"],["slategray","#708090"],["snow","#fffafa"],["springgreen","#00ff7f"],["steelblue","#4682b4"],["tan","#d2b48c"],["teal","#008080"],["thistle","#d8bfd8"],["tomato","#ff6347"],["turquoise","#40e0d0"],["violet","#ee82ee"],["wheat","#f5deb3"],["white","#ffffff"],["whitesmoke","#f5f5f5"],["yellow","#ffff00"],["yellowgreen","#9acd32"]]);function xe(n){let e=ge.get(n);return e||n}const Un=Object.freeze(Object.defineProperty({__proto__:null,colorMap:ge,colorNameToHex:xe},Symbol.toStringTag,{value:"Module"})),Pt=1.618;let Ce=class j{constructor(e,t,r={}){O(this,"parentGraph");O(this,"id");O(this,"metadata");O(this,"mesh");O(this,"label");O(this,"meshDragBehavior");O(this,"dragging",!1);O(this,"nodeMeshConfig");O(this,"pinOnDrag");if(this.parentGraph=e,this.id=t,this.metadata=r.metadata??{},this.nodeMeshConfig=this.parentGraph.config.nodeMeshOpts,this.parentGraph.graphEngine.addNode(this),this.mesh=this.nodeMeshConfig.nodeMeshFactory(this,this.parentGraph,this.nodeMeshConfig),this.mesh.metadata={parentNode:this},this.nodeMeshConfig.label&&(this.label=j.createLabel(this.id.toString(),this,this.parentGraph),this.label.parent=this.mesh,this.label.position.y+=1),this.pinOnDrag=r.pinOnDrag??!0,this.meshDragBehavior=new A.SixDofDragBehavior,this.mesh.addBehavior(this.meshDragBehavior),this.meshDragBehavior.onDragStartObservable.add(()=>{this.parentGraph.running=!0,this.dragging=!0}),this.meshDragBehavior.onDragEndObservable.add(()=>{this.parentGraph.running=!0,this.pinOnDrag&&this.pin(),this.dragging=!1}),this.meshDragBehavior.onPositionChangedObservable.add(i=>{this.parentGraph.running=!0,this.parentGraph.graphEngine.setNodePosition(this,i.position)}),this.mesh.actionManager=new A.ActionManager(this.parentGraph.scene),this.parentGraph.fetchNodes&&this.parentGraph.fetchEdges){const{fetchNodes:i,fetchEdges:a}=this.parentGraph;this.mesh.actionManager.registerAction(new A.ExecuteCodeAction({trigger:A.ActionManager.OnDoublePickTrigger},()=>{this.parentGraph.running=!0;const f=a(this,this.parentGraph),h=new Set;f.forEach(u=>{h.add(u.source),h.add(u.target)}),h.delete(this.id),i(h,this.parentGraph).forEach(u=>this.parentGraph.addNode(u.id,u.metadata)),f.forEach(u=>this.parentGraph.addEdge(u.source,u.target,u.metadata))}))}}getDeltaPos(){let e=this.parentGraph.graphEngine.getNodePosition(this);const t=Math.abs(this.mesh.position.x-e.x),r=Math.abs(this.mesh.position.y-e.y),i=Math.abs(this.mesh.position.z-(e.z??0));return Math.sqrt(t*t+r*r+i*i)}update(){if(this.dragging)return;const e={type:"node-update-before",node:this,doUpdate:!0};if(this.parentGraph.nodeObservable.notifyObservers(e),e.doUpdate){let t=this.parentGraph.graphEngine.getNodePosition(this);this.mesh.position.x=t.x,this.mesh.position.y=t.y,t.z&&(this.mesh.position.z=t.z)}this.parentGraph.nodeObservable.notifyObservers({type:"node-update-after",node:this})}pin(){this.parentGraph.graphEngine.pin(this)}unpin(){this.parentGraph.graphEngine.unpin(this)}static get list(){return Hn}static create(e,t,r={}){const i=j.list.get(t);if(i)return i;const a=new j(e,t,r);return j.list.set(t,a),a}static defaultNodeMeshFactory(e,t,r){let i;switch(r.shape){case"box":i=j.createBox(e,t,r);break;case"sphere":i=j.createSphere(e,t,r);break;case"cylinder":i=j.createCylinder(e,t,r);break;case"cone":i=j.createCone(e,t,r);break;case"capsule":i=j.createCapsule(e,t,r);break;case"torus":i=j.createTorus(e,t,r);break;case"torus-knot":i=j.createTorusKnot(e,t,r);break;case"tetrahedron":i=j.createPolyhedron(0,e,t,r);break;case"octahedron":i=j.createPolyhedron(1,e,t,r);break;case"dodecahedron":i=j.createPolyhedron(2,e,t,r);break;case"icosahedron":i=j.createPolyhedron(3,e,t,r);break;case"rhombicuboctahedron":i=j.createPolyhedron(4,e,t,r);break;case"triangular_prism":i=j.createPolyhedron(5,e,t,r);break;case"pentagonal_prism":i=j.createPolyhedron(6,e,t,r);break;case"hexagonal_prism":i=j.createPolyhedron(7,e,t,r);break;case"square_pyramid":i=j.createPolyhedron(8,e,t,r);break;case"pentagonal_pyramid":i=j.createPolyhedron(9,e,t,r);break;case"triangular_dipyramid":i=j.createPolyhedron(10,e,t,r);break;case"pentagonal_dipyramid":i=j.createPolyhedron(11,e,t,r);break;case"elongated_square_dypyramid":i=j.createPolyhedron(12,e,t,r);break;case"elongated_pentagonal_dipyramid":i=j.createPolyhedron(13,e,t,r);break;case"elongated_pentagonal_cupola":i=j.createPolyhedron(14,e,t,r);break;case"goldberg":i=j.createGoldberg(e,t,r);break;case"icosphere":i=j.createIcoSphere(e,t,r);break;case"geodesic":i=j.createGeodesic(e,t,r);break;default:throw new TypeError(`unknown shape: ${r.shape}`)}let a=new A.StandardMaterial("defaultMaterial"),f=r.color;return a.diffuseColor=A.Color3.FromHexString(xe(f)),i.material=a,a.wireframe=r.wireframe,i.visibility=r.opacity,i}static createBox(e,t,r){return A.MeshBuilder.CreateBox("box",{size:r.size})}static createSphere(e,t,r){return A.MeshBuilder.CreateSphere("sphere",{diameter:r.size})}static createCylinder(e,t,r){return A.MeshBuilder.CreateCylinder("cylinder",{height:r.size*Pt,diameter:r.size})}static createCone(e,t,r){return A.MeshBuilder.CreateCylinder("cylinder",{height:r.size*Pt,diameterTop:0,diameterBottom:r.size})}static createCapsule(e,t,r){return A.MeshBuilder.CreateCapsule("capsule",{})}static createTorus(e,t,r){return A.MeshBuilder.CreateTorus("torus",{})}static createTorusKnot(e,t,r){return A.MeshBuilder.CreateTorusKnot("tk",{radius:r.size*.3,tube:r.size*.2,radialSegments:128})}static createPolyhedron(e,t,r,i){return A.MeshBuilder.CreatePolyhedron("polyhedron",{size:i.size,type:e})}static createGoldberg(e,t,r){return A.MeshBuilder.CreateGoldberg("goldberg",{size:r.size})}static createIcoSphere(e,t,r){return A.MeshBuilder.CreateIcoSphere("icosphere",{radius:r.size*.75})}static createGeodesic(e,t,r){return A.MeshBuilder.CreateGeodesic("geodesic",{size:r.size})}static createLabel(e,t,r){const a="48px Verdana",s=.006944444444444444,l=new A.DynamicTexture("DynamicTexture",64,r.scene).getContext();l.font=a;const g=l.measureText(e).width+8,w=g*s,y=new A.DynamicTexture("DynamicTexture",{width:g,height:72},r.scene,!1),v=new A.StandardMaterial("mat",r.scene);v.specularColor=A.Color3.Black(),y.hasAlpha=!0;const _=y.getContext();_.fillStyle="white",_.beginPath();const b=0,c=0,M=[20,20,20,20],C=g,N=72;_.moveTo(b+M[0],c),_.lineTo(b+C-M[1],c),_.arc(b+C-M[1],c+M[1],M[1],3*Math.PI/2,Math.PI*2),_.lineTo(b+C,c+N-M[2]),_.arc(b+C-M[2],c+N-M[2],M[2],0,Math.PI/2),_.lineTo(b+M[3],c+N),_.arc(b+M[3],c+N-M[3],M[3],Math.PI/2,Math.PI),_.lineTo(b,c+M[0]),_.arc(b+M[0],c+M[0],M[0],Math.PI,3*Math.PI/2),_.closePath(),_.fill(),y.drawText(e,null,null,a,"#000000","transparent",!0),v.opacityTexture=y,v.emissiveTexture=y,v.disableLighting=!0;const m=A.MeshBuilder.CreatePlane("plane",{width:w,height:.5},r.scene);return m.material=v,m.billboardMode=7,m}};const Hn=new Map;class fe{constructor(e,t,r,i={}){O(this,"parentGraph");O(this,"srcId");O(this,"dstId");O(this,"dstNode");O(this,"srcNode");O(this,"metadata");O(this,"mesh");O(this,"edgeMeshConfig");this.parentGraph=e,this.srcId=t,this.dstId=r,this.metadata=i.metadata??{};const a=Ce.list.get(t);if(!a)throw new Error(`Attempting to create edge '${t}->${r}', Node '${t}' hasn't been created yet.`);const f=Ce.list.get(r);if(!f)throw new Error(`Attempting to create edge '${t}->${r}', Node '${r}' hasn't been created yet.`);this.srcNode=a,this.dstNode=f,this.edgeMeshConfig=this.parentGraph.config.edgeMeshOpts,this.parentGraph.graphEngine.addEdge(this),this.mesh=this.edgeMeshConfig.edgeMeshFactory(this,this.parentGraph,this.edgeMeshConfig),this.mesh.metadata={},this.mesh.metadata.parentEdge=this}update(){let e=this.parentGraph.graphEngine.getEdgePosition(this);const t={type:"edge-update-before",edge:this,doUpdate:!0};this.parentGraph.edgeObservable.notifyObservers(t),t.doUpdate&&this.mesh.setPoints([[e.src.x,e.src.y,e.src.z??0,e.dst.x,e.dst.y,e.dst.z??0]]),this.parentGraph.edgeObservable.notifyObservers({type:"edge-update-after",edge:this})}static get list(){return Vn}static create(e,t,r,i={}){const a=fe.list.get(t,r);if(a)return a;const f=new fe(e,t,r,i);return fe.list.set(t,r,f),f}static defaultEdgeMeshFactory(e,t,r){switch(r.type){case"plain":return fe.createPlainLine(e,t,r);case"arrow":return fe.createArrowLine(e,t,r);case"moving":return fe.createMovingLine(e,t,r);default:throw new TypeError(`Unknown Edge type: '${r.type}'`)}}static createPlainLine(e,t,r){return A.CreateGreasedLine("edge-plain",{points:[0,0,0,1,1,1]},{color:A.Color3.FromHexString(xe(r.color))})}static createArrowLine(e,t,r){return e.parentGraph.edgeObservable.add(i=>{i.doUpdate=!1;const a=e.srcNode.mesh,f=e.dstNode.mesh,h=new A.Ray(e.srcNode.mesh.position,e.dstNode.mesh.position);h.position=f.position,h.direction=f.position.subtract(a.position);const s=h.intersectsMeshes([f]),u=h.intersectsMeshes([a]);if(s.length&&u.length){const l=s[0].pickedPoint,g=u[0].pickedPoint,w=.1,y=3,v=l.clone().normalize().multiplyByFloats(w*y,w*y,w*y),_=l.subtract(v);e.mesh.setPoints([[_.x,_.y,_.z,g.x,g.y,g.z]]);const b=A.GreasedLineTools.GetArrowCap(_,h.direction,w/3,4,4);A.CreateGreasedLine("lines",{points:b.points,widths:b.widths,widthDistribution:A.GreasedLineMeshWidthDistribution.WIDTH_DISTRIBUTION_START,instance:e.mesh})}}),A.CreateGreasedLine("edge-arrow",{points:[0,0,0,1,1,1]},{color:A.Color3.FromHexString(xe(r.color))})}static createMovingLine(e,t,r){const i=A.Color3.FromHexString(xe(r.movingLineOpts.baseColor)),a=A.Color3.FromHexString(xe(r.color)),f=Math.floor(i.r*255),h=Math.floor(i.g*255),s=Math.floor(i.b*255),u=Math.floor(a.r*255),l=Math.floor(a.g*255),g=Math.floor(a.b*255),w=new Uint8Array([f,h,s,u,l,g]),y=new A.RawTexture(w,w.length/3,1,A.Engine.TEXTUREFORMAT_RGB,t.scene,!1,!0,A.Engine.TEXTURE_NEAREST_NEAREST);y.wrapU=A.RawTexture.WRAP_ADDRESSMODE,y.name="blue-white-texture";const v=A.CreateGreasedLine("edge-moving",{points:[0,0,0,1,1,1]},{width:r.movingLineOpts.width,colorMode:A.GreasedLineMeshColorMode.COLOR_MODE_MULTIPLY});let _=v.material;return _.emissiveTexture=y,_.disableLighting=!0,y.uScale=5,t.scene.onBeforeRenderObservable.add(()=>{y.uOffset+=.04*t.scene.getAnimationRatio()}),v}}class Qn{constructor(){O(this,"map",new Map)}has(e,t){const r=this.map.get(e);return r?r.has(t):!1}set(e,t,r){let i=this.map.get(e);if(i||(i=new Map,this.map.set(e,i)),i.has(t))throw new Error("Attempting to create duplicate Edge");i.set(t,r)}get(e,t){let r=this.map.get(e);if(r)return r.get(t)}}const Vn=new Qn;var Fe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function et(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var tt=function(e){Xn(e);var t=Wn(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e};function Wn(n){var e=Object.create(null);return{on:function(t,r,i){if(typeof r!="function")throw new Error("callback is expected to be a function");var a=e[t];return a||(a=e[t]=[]),a.push({callback:r,ctx:i}),n},off:function(t,r){var i=typeof t>"u";if(i)return e=Object.create(null),n;if(e[t]){var a=typeof r!="function";if(a)delete e[t];else for(var f=e[t],h=0;h<f.length;++h)f[h].callback===r&&f.splice(h,1)}return n},fire:function(t){var r=e[t];if(!r)return n;var i;arguments.length>1&&(i=Array.prototype.splice.call(arguments,1));for(var a=0;a<r.length;++a){var f=r[a];f.callback.apply(f.ctx,i)}return n}}}function Xn(n){if(!n)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],t=0;t<e.length;++t)if(n.hasOwnProperty(e[t]))throw new Error("Subject cannot be eventified, since it already has property '"+e[t]+"'")}var Kn=Jn,Yn=tt;function Jn(n){if(n=n||{},"uniqueLinkId"in n&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),n.multigraph=n.uniqueLinkId),n.multigraph===void 0&&(n.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,t=new Map,r={},i=0,a=n.multigraph?N:C,f=[],h=B,s=B,u=B,l=B,g={version:20,addNode:_,addLink:M,removeLink:I,removeNode:c,getNode:b,getNodeCount:m,getLinkCount:$,getEdgeCount:$,getLinksCount:$,getNodesCount:m,getLinks:z,forEachNode:se,forEachLinkedNode:ue,forEachLink:G,beginUpdate:u,endUpdate:l,clear:Q,hasLink:H,hasNode:b,getLink:H};return Yn(g),w(),g;function w(){var P=g.on;g.on=S;function S(){return g.beginUpdate=u=V,g.endUpdate=l=ae,h=y,s=v,g.on=P,P.apply(g,arguments)}}function y(P,S){f.push({link:P,changeType:S})}function v(P,S){f.push({node:P,changeType:S})}function _(P,S){if(P===void 0)throw new Error("Invalid node identifier");u();var k=b(P);return k?(k.data=S,s(k,"update")):(k=new Zn(P,S),s(k,"add")),e.set(P,k),l(),k}function b(P){return e.get(P)}function c(P){var S=b(P);if(!S)return!1;u();var k=S.links;return k&&(k.forEach(U),S.links=null),e.delete(P),s(S,"remove"),l(),!0}function M(P,S,k){u();var L=b(P)||_(P),Y=b(S)||_(S),K=a(P,S,k),ee=t.has(K.id);return t.set(K.id,K),At(L,K),P!==S&&At(Y,K),h(K,ee?"update":"add"),l(),K}function C(P,S,k){var L=qe(P,S),Y=t.get(L);return Y?(Y.data=k,Y):new St(P,S,k,L)}function N(P,S,k){var L=qe(P,S),Y=r.hasOwnProperty(L);if(Y||H(P,S)){Y||(r[L]=0);var K="@"+ ++r[L];L=qe(P+K,S+K)}return new St(P,S,k,L)}function m(){return e.size}function $(){return t.size}function z(P){var S=b(P);return S?S.links:null}function I(P,S){return S!==void 0&&(P=H(P,S)),U(P)}function U(P){if(!P||!t.get(P.id))return!1;u(),t.delete(P.id);var S=b(P.fromId),k=b(P.toId);return S&&S.links.delete(P),k&&k.links.delete(P),h(P,"remove"),l(),!0}function H(P,S){if(!(P===void 0||S===void 0))return t.get(qe(P,S))}function Q(){u(),se(function(P){c(P.id)}),l()}function G(P){if(typeof P=="function")for(var S=t.values(),k=S.next();!k.done;){if(P(k.value))return!0;k=S.next()}}function ue(P,S,k){var L=b(P);if(L&&L.links&&typeof S=="function")return k?x(L.links,P,S):E(L.links,P,S)}function E(P,S,k){for(var L,Y=P.values(),K=Y.next();!K.done;){var ee=K.value,He=ee.fromId===S?ee.toId:ee.fromId;if(L=k(e.get(He),ee),L)return!0;K=Y.next()}}function x(P,S,k){for(var L,Y=P.values(),K=Y.next();!K.done;){var ee=K.value;if(ee.fromId===S&&(L=k(e.get(ee.toId),ee),L))return!0;K=Y.next()}}function B(){}function V(){i+=1}function ae(){i-=1,i===0&&f.length>0&&(g.fire("changed",f),f.length=0)}function se(P){if(typeof P!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+P);for(var S=e.values(),k=S.next();!k.done;){if(P(k.value))return!0;k=S.next()}}}function Zn(n,e){this.id=n,this.links=null,this.data=e}function At(n,e){n.links?n.links.add(e):n.links=new Set([e])}function St(n,e,t,r){this.fromId=n,this.toId=e,this.data=t,this.id=r}function qe(n,e){return n.toString()+"👉 "+e.toString()}const er=et(Kn);var nt={exports:{}},$e={exports:{}},zt=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const tr=zt;var me=function(e){return t;function t(r,i){let a=i&&i.indent||0,f=i&&i.join!==void 0?i.join:`
`,h=Array(a+1).join(" "),s=[];for(let u=0;u<e;++u){let l=tr(u),g=u===0?"":h;s.push(g+r.replace(/{var}/g,l))}return s.join(f)}};const Ot=me;$e.exports=nr,$e.exports.generateCreateBodyFunctionBody=Lt,$e.exports.getVectorCode=kt,$e.exports.getBodyCode=It;function nr(n,e){let t=Lt(n,e),{Body:r}=new Function(t)();return r}function Lt(n,e){return`
${kt(n,e)}
${It(n)}
return {Body: Body, Vector: Vector};
`}function It(n){let e=Ot(n),t=e("{var}",{join:", "});return`
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
};`}function kt(n,e){let t=Ot(n),r="";return e&&(r=`${t(`
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
  };`}var rr=$e.exports,ve={exports:{}};const rt=me,ye=zt;ve.exports=ir,ve.exports.generateQuadTreeFunctionBody=Ft,ve.exports.getInsertStackCode=Rt,ve.exports.getQuadNodeCode=Gt,ve.exports.isSamePosition=qt,ve.exports.getChildBodyCode=jt,ve.exports.setChildBodyCode=Dt;function ir(n){let e=Ft(n);return new Function(e)()}function Ft(n){let e=rt(n),t=Math.pow(2,n);return`
${Rt()}
${Gt(n)}
${qt(n)}
${jt(n)}
${Dt(n)}

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
        if ((node.max_${ye(0)} - node.min_${ye(0)}) / r < theta) {
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

`;function i(h){let s=[],u=Array(h+1).join(" ");for(let l=0;l<n;++l)s.push(u+`if (${ye(l)} > max_${ye(l)}) {`),s.push(u+`  quadIdx = quadIdx + ${Math.pow(2,l)};`),s.push(u+`  min_${ye(l)} = max_${ye(l)};`),s.push(u+`  max_${ye(l)} = node.max_${ye(l)};`),s.push(u+"}");return s.join(`
`)}function a(){let h=Array(11).join(" "),s=[];for(let u=0;u<t;++u)s.push(h+`if (node.quad${u}) {`),s.push(h+`  queue[pushIdx] = node.quad${u};`),s.push(h+"  queueLength += 1;"),s.push(h+"  pushIdx += 1;"),s.push(h+"}");return s.join(`
`)}function f(h){let s=[];for(let u=0;u<t;++u)s.push(`${h}quad${u} = null;`);return s.join(`
`)}}function qt(n){let e=rt(n);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function Dt(n){var e=Math.pow(2,n);return`
function setChild(node, idx, child) {
  ${t()}
}`;function t(){let r=[];for(let i=0;i<e;++i){let a=i===0?"  ":"  else ";r.push(`${a}if (idx === ${i}) node.quad${i} = child;`)}return r.join(`
`)}}function jt(n){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let t=[],r=Math.pow(2,n);for(let i=0;i<r;++i)t.push(`  if (idx === ${i}) return node.quad${i};`);return t.join(`
`)}}function Gt(n){let e=rt(n),t=Math.pow(2,n);var r=`
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
`;return r;function i(a){let f=[];for(let h=0;h<t;++h)f.push(`${a}quad${h} = null;`);return f.join(`
`)}}function Rt(){return`
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
`}var ar=ve.exports,it={exports:{}};it.exports=sr,it.exports.generateFunctionBody=Ut;const or=me;function sr(n){let e=Ut(n);return new Function("bodies","settings","random",e)}function Ut(n){let e=or(n);return`
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
`}var fr=it.exports,at={exports:{}};const ur=me;at.exports=dr,at.exports.generateCreateDragForceFunctionBody=Ht;function dr(n){let e=Ht(n);return new Function("options",e)}function Ht(n){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${ur(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var hr=at.exports,ot={exports:{}};const cr=me;ot.exports=lr,ot.exports.generateCreateSpringForceFunctionBody=Qt;function lr(n){let e=Qt(n);return new Function("options","random",e)}function Qt(n){let e=cr(n);return`
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
`}var pr=ot.exports,st={exports:{}};const gr=me;st.exports=vr,st.exports.generateIntegratorFunctionBody=Vt;function vr(n){let e=Vt(n);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function Vt(n){let e=gr(n);return`
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
`}var yr=st.exports,ft,Wt;function br(){if(Wt)return ft;Wt=1,ft=n;function n(e,t,r,i){this.from=e,this.to=t,this.length=r,this.coefficient=i}return ft}var ut,Xt;function wr(){if(Xt)return ut;Xt=1,ut=n;function n(e,t){var r;if(e||(e={}),t){for(r in t)if(t.hasOwnProperty(r)){var i=e.hasOwnProperty(r),a=typeof t[r],f=!i||typeof e[r]!==a;f?e[r]=t[r]:a==="object"&&(e[r]=n(e[r],t[r]))}}return e}return ut}var Be={exports:{}},Kt;function _r(){if(Kt)return Be.exports;Kt=1,Be.exports=n,Be.exports.random=n,Be.exports.randomIterator=h;function n(s){var u=typeof s=="number"?s:+new Date;return new e(u)}function e(s){this.seed=s}e.prototype.next=f,e.prototype.nextDouble=a,e.prototype.uniform=a,e.prototype.gaussian=t;function t(){var s,u,l;do u=this.nextDouble()*2-1,l=this.nextDouble()*2-1,s=u*u+l*l;while(s>=1||s===0);return u*Math.sqrt(-2*Math.log(s)/s)}e.prototype.levy=r;function r(){var s=1.5,u=Math.pow(i(1+s)*Math.sin(Math.PI*s/2)/(i((1+s)/2)*s*Math.pow(2,(s-1)/2)),1/s);return this.gaussian()*u/Math.pow(Math.abs(this.gaussian()),1/s)}function i(s){return Math.sqrt(2*Math.PI/s)*Math.pow(1/Math.E*(s+1/(12*s-1/(10*s))),s)}function a(){var s=this.seed;return s=s+2127912214+(s<<12)&4294967295,s=(s^3345072700^s>>>19)&4294967295,s=s+374761393+(s<<5)&4294967295,s=(s+3550635116^s<<9)&4294967295,s=s+4251993797+(s<<3)&4294967295,s=(s^3042594569^s>>>16)&4294967295,this.seed=s,(s&268435455)/268435456}function f(s){return Math.floor(this.nextDouble()*s)}function h(s,u){var l=u||n();if(typeof l.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:w,shuffle:g};function g(){var y,v,_;for(y=s.length-1;y>0;--y)v=l.next(y+1),_=s[v],s[v]=s[y],s[y]=_;return s}function w(y){var v,_,b;for(v=s.length-1;v>0;--v)_=l.next(v+1),b=s[_],s[_]=s[v],s[v]=b,y(b);s.length&&y(s[0])}}return Be.exports}var Yt=$r,xr=rr,mr=ar,Mr=fr,Nr=hr,Er=pr,Cr=yr,Jt={};function $r(n){var e=br(),t=wr(),r=tt;if(n){if(n.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(n.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}n=t(n,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var i=Jt[n.dimensions];if(!i){var a=n.dimensions;i={Body:xr(a,n.debug),createQuadTree:mr(a),createBounds:Mr(a),createDragForce:Nr(a),createSpringForce:Er(a),integrate:Cr(a)},Jt[a]=i}var f=i.Body,h=i.createQuadTree,s=i.createBounds,u=i.createDragForce,l=i.createSpringForce,g=i.integrate,w=x=>new f(x),y=_r().random(42),v=[],_=[],b=h(n,y),c=s(v,n,y),M=l(n,y),C=u(n),N=0,m=[],$=new Map,z=0;H("nbody",ue),H("spring",E);var I={bodies:v,quadTree:b,springs:_,settings:n,addForce:H,removeForce:Q,getForces:G,step:function(){for(var x=0;x<m.length;++x)m[x](z);var B=g(v,n.timeStep,n.adaptiveTimeStepWeight);return z+=1,B},addBody:function(x){if(!x)throw new Error("Body is required");return v.push(x),x},addBodyAt:function(x){if(!x)throw new Error("Body position is required");var B=w(x);return v.push(B),B},removeBody:function(x){if(x){var B=v.indexOf(x);if(!(B<0))return v.splice(B,1),v.length===0&&c.reset(),!0}},addSpring:function(x,B,V,ae){if(!x||!B)throw new Error("Cannot add null spring to force simulator");typeof V!="number"&&(V=-1);var se=new e(x,B,V,ae>=0?ae:-1);return _.push(se),se},getTotalMovement:function(){return N},removeSpring:function(x){if(x){var B=_.indexOf(x);if(B>-1)return _.splice(B,1),!0}},getBestNewBodyPosition:function(x){return c.getBestNewPosition(x)},getBBox:U,getBoundingBox:U,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(x){return x!==void 0?(n.gravity=x,b.options({gravity:x}),this):n.gravity},theta:function(x){return x!==void 0?(n.theta=x,b.options({theta:x}),this):n.theta},random:y};return Br(n,I),r(I),I;function U(){return c.update(),c.box}function H(x,B){if($.has(x))throw new Error("Force "+x+" is already added");$.set(x,B),m.push(B)}function Q(x){var B=m.indexOf($.get(x));B<0||(m.splice(B,1),$.delete(x))}function G(){return $}function ue(){if(v.length!==0){b.insertBodies(v);for(var x=v.length;x--;){var B=v[x];B.isPinned||(B.reset(),b.updateBodyForce(B),C.update(B))}}}function E(){for(var x=_.length;x--;)M.update(_[x])}}function Br(n,e){for(var t in n)Tr(n,e,t)}function Tr(n,e,t){if(n.hasOwnProperty(t)&&typeof e[t]!="function"){var r=Number.isFinite(n[t]);r?e[t]=function(i){if(i!==void 0){if(!Number.isFinite(i))throw new Error("Value of "+t+" should be a valid number.");return n[t]=i,e}return n[t]}:e[t]=function(i){return i!==void 0?(n[t]=i,e):n[t]}}}nt.exports=Ar,nt.exports.simulator=Yt;var Pr=tt;function Ar(n,e){if(!n)throw new Error("Graph structure cannot be undefined");var t=e&&e.createSimulator||Yt,r=t(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var i=n.version>19?ue:G;e&&typeof e.nodeMass=="function"&&(i=e.nodeMass);var a=new Map,f={},h=0,s=r.settings.springTransform||Sr;C(),b();var u=!1,l={step:function(){if(h===0)return g(!0),!0;var E=r.step();l.lastMove=E,l.fire("step");var x=E/h,B=x<=.01;return g(B),B},getNodePosition:function(E){return Q(E).pos},setNodePosition:function(E){var x=Q(E);x.setPosition.apply(x,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(E){var x=f[E];if(x)return{from:x.from.pos,to:x.to.pos}},getGraphRect:function(){return r.getBBox()},forEachBody:w,pinNode:function(E,x){var B=Q(E.id);B.isPinned=!!x},isNodePinned:function(E){return Q(E.id).isPinned},dispose:function(){n.off("changed",M),l.fire("disposed")},getBody:_,getSpring:v,getForceVectorLength:y,simulator:r,graph:n,lastMove:0};return Pr(l),l;function g(E){u!==E&&(u=E,c(E))}function w(E){a.forEach(E)}function y(){var E=0,x=0;return w(function(B){E+=Math.abs(B.force.x),x+=Math.abs(B.force.y)}),Math.sqrt(E*E+x*x)}function v(E,x){var B;if(x===void 0)typeof E!="object"?B=E:B=E.id;else{var V=n.hasLink(E,x);if(!V)return;B=V.id}return f[B]}function _(E){return a.get(E)}function b(){n.on("changed",M)}function c(E){l.fire("stable",E)}function M(E){for(var x=0;x<E.length;++x){var B=E[x];B.changeType==="add"?(B.node&&N(B.node.id),B.link&&$(B.link)):B.changeType==="remove"&&(B.node&&m(B.node),B.link&&z(B.link))}h=n.getNodesCount()}function C(){h=0,n.forEachNode(function(E){N(E.id),h+=1}),n.forEachLink($)}function N(E){var x=a.get(E);if(!x){var B=n.getNode(E);if(!B)throw new Error("initBody() was called with unknown node id");var V=B.position;if(!V){var ae=I(B);V=r.getBestNewBodyPosition(ae)}x=r.addBodyAt(V),x.id=E,a.set(E,x),U(E),H(B)&&(x.isPinned=!0)}}function m(E){var x=E.id,B=a.get(x);B&&(a.delete(x),r.removeBody(B))}function $(E){U(E.fromId),U(E.toId);var x=a.get(E.fromId),B=a.get(E.toId),V=r.addSpring(x,B,E.length);s(E,V),f[E.id]=V}function z(E){var x=f[E.id];if(x){var B=n.getNode(E.fromId),V=n.getNode(E.toId);B&&U(B.id),V&&U(V.id),delete f[E.id],r.removeSpring(x)}}function I(E){var x=[];if(!E.links)return x;for(var B=Math.min(E.links.length,2),V=0;V<B;++V){var ae=E.links[V],se=ae.fromId!==E.id?a.get(ae.fromId):a.get(ae.toId);se&&se.pos&&x.push(se)}return x}function U(E){var x=a.get(E);if(x.mass=i(E),Number.isNaN(x.mass))throw new Error("Node mass should be a number")}function H(E){return E&&(E.isPinned||E.data&&E.data.isPinned)}function Q(E){var x=a.get(E);return x||(N(E),x=a.get(E)),x}function G(E){var x=n.getLinks(E);return x?1+x.length/3:1}function ue(E){var x=n.getLinks(E);return x?1+x.size/3:1}}function Sr(){}var zr=nt.exports;const Or=et(zr);class Lr{constructor(){O(this,"ngraph");O(this,"ngraphLayout");O(this,"nodeMapping",new Map);O(this,"edgeMapping",new Map);this.ngraph=er(),this.ngraphLayout=Or(this.ngraph,{dimensions:3})}async init(){}step(){this.ngraphLayout.step()}addNode(e){const t=this.ngraph.addNode(e.id,{parentNode:e});this.nodeMapping.set(e,t)}addEdge(e){const t=this.ngraph.addLink(e.srcId,e.dstId,{parentEdge:this});this.edgeMapping.set(e,t)}getNodePosition(e){const t=this._getMappedNode(e);return this.ngraphLayout.getNodePosition(t.id)}setNodePosition(e,t){const r=this._getMappedNode(e),i=this.ngraphLayout.getNodePosition(r.id);i.x=t.x,i.y=t.y,i.z=t.z}getEdgePosition(e){const t=this._getMappedEdge(e),r=this.ngraphLayout.getLinkPosition(t.id);return{src:{x:r.from.x,y:r.from.y,z:r.from.z},dst:{x:r.to.x,y:r.to.y,z:r.to.z}}}get nodes(){return this.nodeMapping.keys()}get edges(){return this.edgeMapping.keys()}pin(e){const t=this._getMappedNode(e);this.ngraphLayout.pinNode(t,!0)}unpin(e){const t=this._getMappedNode(e);this.ngraphLayout.pinNode(t,!1)}_getMappedNode(e){const t=this.nodeMapping.get(e);if(!t)throw new Error("Internal error: Node not found in NGraphEngine");return t}_getMappedEdge(e){const t=this.edgeMapping.get(e);if(!t)throw new Error("Internal error: Edge not found in NGraphEngine");return t}}function Ir(n,e,t){var r,i=1;n==null&&(n=0),e==null&&(e=0),t==null&&(t=0);function a(){var f,h=r.length,s,u=0,l=0,g=0;for(f=0;f<h;++f)s=r[f],u+=s.x||0,l+=s.y||0,g+=s.z||0;for(u=(u/h-n)*i,l=(l/h-e)*i,g=(g/h-t)*i,f=0;f<h;++f)s=r[f],u&&(s.x-=u),l&&(s.y-=l),g&&(s.z-=g)}return a.initialize=function(f){r=f},a.x=function(f){return arguments.length?(n=+f,a):n},a.y=function(f){return arguments.length?(e=+f,a):e},a.z=function(f){return arguments.length?(t=+f,a):t},a.strength=function(f){return arguments.length?(i=+f,a):i},a}function kr(n){const e=+this._x.call(null,n);return Zt(this.cover(e),e,n)}function Zt(n,e,t){if(isNaN(e))return n;var r,i=n._root,a={data:t},f=n._x0,h=n._x1,s,u,l,g,w;if(!i)return n._root=a,n;for(;i.length;)if((l=e>=(s=(f+h)/2))?f=s:h=s,r=i,!(i=i[g=+l]))return r[g]=a,n;if(u=+n._x.call(null,i.data),e===u)return a.next=i,r?r[g]=a:n._root=a,n;do r=r?r[g]=new Array(2):n._root=new Array(2),(l=e>=(s=(f+h)/2))?f=s:h=s;while((g=+l)==(w=+(u>=s)));return r[w]=i,r[g]=a,n}function Fr(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e);let r=1/0,i=-1/0;for(let a=0,f;a<e;++a)isNaN(f=+this._x.call(null,n[a]))||(t[a]=f,f<r&&(r=f),f>i&&(i=f));if(r>i)return this;this.cover(r).cover(i);for(let a=0;a<e;++a)Zt(this,t[a],n[a]);return this}function qr(n){if(isNaN(n=+n))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(n))+1;else{for(var r=t-e||1,i=this._root,a,f;e>n||n>=t;)switch(f=+(n<e),a=new Array(2),a[f]=i,i=a,r*=2,f){case 0:t=e+r;break;case 1:e=t-r;break}this._root&&this._root.length&&(this._root=i)}return this._x0=e,this._x1=t,this}function Dr(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function jr(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function de(n,e,t){this.node=n,this.x0=e,this.x1=t}function Gr(n,e){var t,r=this._x0,i,a,f=this._x1,h=[],s=this._root,u,l;for(s&&h.push(new de(s,r,f)),e==null?e=1/0:(r=n-e,f=n+e);u=h.pop();)if(!(!(s=u.node)||(i=u.x0)>f||(a=u.x1)<r))if(s.length){var g=(i+a)/2;h.push(new de(s[1],g,a),new de(s[0],i,g)),(l=+(n>=g))&&(u=h[h.length-1],h[h.length-1]=h[h.length-1-l],h[h.length-1-l]=u)}else{var w=Math.abs(n-+this._x.call(null,s.data));w<e&&(e=w,r=n-w,f=n+w,t=s.data)}return t}function Rr(n){if(isNaN(s=+this._x.call(null,n)))return this;var e,t=this._root,r,i,a,f=this._x0,h=this._x1,s,u,l,g,w;if(!t)return this;if(t.length)for(;;){if((l=s>=(u=(f+h)/2))?f=u:h=u,e=t,!(t=t[g=+l]))return this;if(!t.length)break;e[g+1&1]&&(r=e,w=g)}for(;t.data!==n;)if(i=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,i?(a?i.next=a:delete i.next,this):e?(a?e[g]=a:delete e[g],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(r?r[w]=t:this._root=t),this):(this._root=a,this)}function Ur(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function Hr(){return this._root}function Qr(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function Vr(n){var e=[],t,r=this._root,i,a,f;for(r&&e.push(new de(r,this._x0,this._x1));t=e.pop();)if(!n(r=t.node,a=t.x0,f=t.x1)&&r.length){var h=(a+f)/2;(i=r[1])&&e.push(new de(i,h,f)),(i=r[0])&&e.push(new de(i,a,h))}return this}function Wr(n){var e=[],t=[],r;for(this._root&&e.push(new de(this._root,this._x0,this._x1));r=e.pop();){var i=r.node;if(i.length){var a,f=r.x0,h=r.x1,s=(f+h)/2;(a=i[0])&&e.push(new de(a,f,s)),(a=i[1])&&e.push(new de(a,s,h))}t.push(r)}for(;r=t.pop();)n(r.node,r.x0,r.x1);return this}function Xr(n){return n[0]}function Kr(n){return arguments.length?(this._x=n,this):this._x}function en(n,e){var t=new dt(e??Xr,NaN,NaN);return n==null?t:t.addAll(n)}function dt(n,e,t){this._x=n,this._x0=e,this._x1=t,this._root=void 0}function tn(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var re=en.prototype=dt.prototype;re.copy=function(){var n=new dt(this._x,this._x0,this._x1),e=this._root,t,r;if(!e)return n;if(!e.length)return n._root=tn(e),n;for(t=[{source:e,target:n._root=new Array(2)}];e=t.pop();)for(var i=0;i<2;++i)(r=e.source[i])&&(r.length?t.push({source:r,target:e.target[i]=new Array(2)}):e.target[i]=tn(r));return n},re.add=kr,re.addAll=Fr,re.cover=qr,re.data=Dr,re.extent=jr,re.find=Gr,re.remove=Rr,re.removeAll=Ur,re.root=Hr,re.size=Qr,re.visit=Vr,re.visitAfter=Wr,re.x=Kr;function Yr(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return nn(this.cover(e,t),e,t,n)}function nn(n,e,t,r){if(isNaN(e)||isNaN(t))return n;var i,a=n._root,f={data:r},h=n._x0,s=n._y0,u=n._x1,l=n._y1,g,w,y,v,_,b,c,M;if(!a)return n._root=f,n;for(;a.length;)if((_=e>=(g=(h+u)/2))?h=g:u=g,(b=t>=(w=(s+l)/2))?s=w:l=w,i=a,!(a=a[c=b<<1|_]))return i[c]=f,n;if(y=+n._x.call(null,a.data),v=+n._y.call(null,a.data),e===y&&t===v)return f.next=a,i?i[c]=f:n._root=f,n;do i=i?i[c]=new Array(4):n._root=new Array(4),(_=e>=(g=(h+u)/2))?h=g:u=g,(b=t>=(w=(s+l)/2))?s=w:l=w;while((c=b<<1|_)===(M=(v>=w)<<1|y>=g));return i[M]=a,i[c]=f,n}function Jr(n){var e,t,r=n.length,i,a,f=new Array(r),h=new Array(r),s=1/0,u=1/0,l=-1/0,g=-1/0;for(t=0;t<r;++t)isNaN(i=+this._x.call(null,e=n[t]))||isNaN(a=+this._y.call(null,e))||(f[t]=i,h[t]=a,i<s&&(s=i),i>l&&(l=i),a<u&&(u=a),a>g&&(g=a));if(s>l||u>g)return this;for(this.cover(s,u).cover(l,g),t=0;t<r;++t)nn(this,f[t],h[t],n[t]);return this}function Zr(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,r=this._y0,i=this._x1,a=this._y1;if(isNaN(t))i=(t=Math.floor(n))+1,a=(r=Math.floor(e))+1;else{for(var f=i-t||1,h=this._root,s,u;t>n||n>=i||r>e||e>=a;)switch(u=(e<r)<<1|n<t,s=new Array(4),s[u]=h,h=s,f*=2,u){case 0:i=t+f,a=r+f;break;case 1:t=i-f,a=r+f;break;case 2:i=t+f,r=a-f;break;case 3:t=i-f,r=a-f;break}this._root&&this._root.length&&(this._root=h)}return this._x0=t,this._y0=r,this._x1=i,this._y1=a,this}function ei(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function ti(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function te(n,e,t,r,i){this.node=n,this.x0=e,this.y0=t,this.x1=r,this.y1=i}function ni(n,e,t){var r,i=this._x0,a=this._y0,f,h,s,u,l=this._x1,g=this._y1,w=[],y=this._root,v,_;for(y&&w.push(new te(y,i,a,l,g)),t==null?t=1/0:(i=n-t,a=e-t,l=n+t,g=e+t,t*=t);v=w.pop();)if(!(!(y=v.node)||(f=v.x0)>l||(h=v.y0)>g||(s=v.x1)<i||(u=v.y1)<a))if(y.length){var b=(f+s)/2,c=(h+u)/2;w.push(new te(y[3],b,c,s,u),new te(y[2],f,c,b,u),new te(y[1],b,h,s,c),new te(y[0],f,h,b,c)),(_=(e>=c)<<1|n>=b)&&(v=w[w.length-1],w[w.length-1]=w[w.length-1-_],w[w.length-1-_]=v)}else{var M=n-+this._x.call(null,y.data),C=e-+this._y.call(null,y.data),N=M*M+C*C;if(N<t){var m=Math.sqrt(t=N);i=n-m,a=e-m,l=n+m,g=e+m,r=y.data}}return r}function ri(n){if(isNaN(l=+this._x.call(null,n))||isNaN(g=+this._y.call(null,n)))return this;var e,t=this._root,r,i,a,f=this._x0,h=this._y0,s=this._x1,u=this._y1,l,g,w,y,v,_,b,c;if(!t)return this;if(t.length)for(;;){if((v=l>=(w=(f+s)/2))?f=w:s=w,(_=g>=(y=(h+u)/2))?h=y:u=y,e=t,!(t=t[b=_<<1|v]))return this;if(!t.length)break;(e[b+1&3]||e[b+2&3]||e[b+3&3])&&(r=e,c=b)}for(;t.data!==n;)if(i=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,i?(a?i.next=a:delete i.next,this):e?(a?e[b]=a:delete e[b],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(r?r[c]=t:this._root=t),this):(this._root=a,this)}function ii(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function ai(){return this._root}function oi(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function si(n){var e=[],t,r=this._root,i,a,f,h,s;for(r&&e.push(new te(r,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(r=t.node,a=t.x0,f=t.y0,h=t.x1,s=t.y1)&&r.length){var u=(a+h)/2,l=(f+s)/2;(i=r[3])&&e.push(new te(i,u,l,h,s)),(i=r[2])&&e.push(new te(i,a,l,u,s)),(i=r[1])&&e.push(new te(i,u,f,h,l)),(i=r[0])&&e.push(new te(i,a,f,u,l))}return this}function fi(n){var e=[],t=[],r;for(this._root&&e.push(new te(this._root,this._x0,this._y0,this._x1,this._y1));r=e.pop();){var i=r.node;if(i.length){var a,f=r.x0,h=r.y0,s=r.x1,u=r.y1,l=(f+s)/2,g=(h+u)/2;(a=i[0])&&e.push(new te(a,f,h,l,g)),(a=i[1])&&e.push(new te(a,l,h,s,g)),(a=i[2])&&e.push(new te(a,f,g,l,u)),(a=i[3])&&e.push(new te(a,l,g,s,u))}t.push(r)}for(;r=t.pop();)n(r.node,r.x0,r.y0,r.x1,r.y1);return this}function ui(n){return n[0]}function di(n){return arguments.length?(this._x=n,this):this._x}function hi(n){return n[1]}function ci(n){return arguments.length?(this._y=n,this):this._y}function rn(n,e,t){var r=new ht(e??ui,t??hi,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function ht(n,e,t,r,i,a){this._x=n,this._y=e,this._x0=t,this._y0=r,this._x1=i,this._y1=a,this._root=void 0}function an(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var ne=rn.prototype=ht.prototype;ne.copy=function(){var n=new ht(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,r;if(!e)return n;if(!e.length)return n._root=an(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var i=0;i<4;++i)(r=e.source[i])&&(r.length?t.push({source:r,target:e.target[i]=new Array(4)}):e.target[i]=an(r));return n},ne.add=Yr,ne.addAll=Jr,ne.cover=Zr,ne.data=ei,ne.extent=ti,ne.find=ni,ne.remove=ri,ne.removeAll=ii,ne.root=ai,ne.size=oi,ne.visit=si,ne.visitAfter=fi,ne.x=di,ne.y=ci;function li(n){const e=+this._x.call(null,n),t=+this._y.call(null,n),r=+this._z.call(null,n);return on(this.cover(e,t,r),e,t,r,n)}function on(n,e,t,r,i){if(isNaN(e)||isNaN(t)||isNaN(r))return n;var a,f=n._root,h={data:i},s=n._x0,u=n._y0,l=n._z0,g=n._x1,w=n._y1,y=n._z1,v,_,b,c,M,C,N,m,$,z,I;if(!f)return n._root=h,n;for(;f.length;)if((N=e>=(v=(s+g)/2))?s=v:g=v,(m=t>=(_=(u+w)/2))?u=_:w=_,($=r>=(b=(l+y)/2))?l=b:y=b,a=f,!(f=f[z=$<<2|m<<1|N]))return a[z]=h,n;if(c=+n._x.call(null,f.data),M=+n._y.call(null,f.data),C=+n._z.call(null,f.data),e===c&&t===M&&r===C)return h.next=f,a?a[z]=h:n._root=h,n;do a=a?a[z]=new Array(8):n._root=new Array(8),(N=e>=(v=(s+g)/2))?s=v:g=v,(m=t>=(_=(u+w)/2))?u=_:w=_,($=r>=(b=(l+y)/2))?l=b:y=b;while((z=$<<2|m<<1|N)===(I=(C>=b)<<2|(M>=_)<<1|c>=v));return a[I]=f,a[z]=h,n}function pi(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e),r=new Float64Array(e),i=new Float64Array(e);let a=1/0,f=1/0,h=1/0,s=-1/0,u=-1/0,l=-1/0;for(let g=0,w,y,v,_;g<e;++g)isNaN(y=+this._x.call(null,w=n[g]))||isNaN(v=+this._y.call(null,w))||isNaN(_=+this._z.call(null,w))||(t[g]=y,r[g]=v,i[g]=_,y<a&&(a=y),y>s&&(s=y),v<f&&(f=v),v>u&&(u=v),_<h&&(h=_),_>l&&(l=_));if(a>s||f>u||h>l)return this;this.cover(a,f,h).cover(s,u,l);for(let g=0;g<e;++g)on(this,t[g],r[g],i[g],n[g]);return this}function gi(n,e,t){if(isNaN(n=+n)||isNaN(e=+e)||isNaN(t=+t))return this;var r=this._x0,i=this._y0,a=this._z0,f=this._x1,h=this._y1,s=this._z1;if(isNaN(r))f=(r=Math.floor(n))+1,h=(i=Math.floor(e))+1,s=(a=Math.floor(t))+1;else{for(var u=f-r||1,l=this._root,g,w;r>n||n>=f||i>e||e>=h||a>t||t>=s;)switch(w=(t<a)<<2|(e<i)<<1|n<r,g=new Array(8),g[w]=l,l=g,u*=2,w){case 0:f=r+u,h=i+u,s=a+u;break;case 1:r=f-u,h=i+u,s=a+u;break;case 2:f=r+u,i=h-u,s=a+u;break;case 3:r=f-u,i=h-u,s=a+u;break;case 4:f=r+u,h=i+u,a=s-u;break;case 5:r=f-u,h=i+u,a=s-u;break;case 6:f=r+u,i=h-u,a=s-u;break;case 7:r=f-u,i=h-u,a=s-u;break}this._root&&this._root.length&&(this._root=l)}return this._x0=r,this._y0=i,this._z0=a,this._x1=f,this._y1=h,this._z1=s,this}function vi(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function yi(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function R(n,e,t,r,i,a,f){this.node=n,this.x0=e,this.y0=t,this.z0=r,this.x1=i,this.y1=a,this.z1=f}function bi(n,e,t,r){var i,a=this._x0,f=this._y0,h=this._z0,s,u,l,g,w,y,v=this._x1,_=this._y1,b=this._z1,c=[],M=this._root,C,N;for(M&&c.push(new R(M,a,f,h,v,_,b)),r==null?r=1/0:(a=n-r,f=e-r,h=t-r,v=n+r,_=e+r,b=t+r,r*=r);C=c.pop();)if(!(!(M=C.node)||(s=C.x0)>v||(u=C.y0)>_||(l=C.z0)>b||(g=C.x1)<a||(w=C.y1)<f||(y=C.z1)<h))if(M.length){var m=(s+g)/2,$=(u+w)/2,z=(l+y)/2;c.push(new R(M[7],m,$,z,g,w,y),new R(M[6],s,$,z,m,w,y),new R(M[5],m,u,z,g,$,y),new R(M[4],s,u,z,m,$,y),new R(M[3],m,$,l,g,w,z),new R(M[2],s,$,l,m,w,z),new R(M[1],m,u,l,g,$,z),new R(M[0],s,u,l,m,$,z)),(N=(t>=z)<<2|(e>=$)<<1|n>=m)&&(C=c[c.length-1],c[c.length-1]=c[c.length-1-N],c[c.length-1-N]=C)}else{var I=n-+this._x.call(null,M.data),U=e-+this._y.call(null,M.data),H=t-+this._z.call(null,M.data),Q=I*I+U*U+H*H;if(Q<r){var G=Math.sqrt(r=Q);a=n-G,f=e-G,h=t-G,v=n+G,_=e+G,b=t+G,i=M.data}}return i}function wi(n){if(isNaN(w=+this._x.call(null,n))||isNaN(y=+this._y.call(null,n))||isNaN(v=+this._z.call(null,n)))return this;var e,t=this._root,r,i,a,f=this._x0,h=this._y0,s=this._z0,u=this._x1,l=this._y1,g=this._z1,w,y,v,_,b,c,M,C,N,m,$;if(!t)return this;if(t.length)for(;;){if((M=w>=(_=(f+u)/2))?f=_:u=_,(C=y>=(b=(h+l)/2))?h=b:l=b,(N=v>=(c=(s+g)/2))?s=c:g=c,e=t,!(t=t[m=N<<2|C<<1|M]))return this;if(!t.length)break;(e[m+1&7]||e[m+2&7]||e[m+3&7]||e[m+4&7]||e[m+5&7]||e[m+6&7]||e[m+7&7])&&(r=e,$=m)}for(;t.data!==n;)if(i=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,i?(a?i.next=a:delete i.next,this):e?(a?e[m]=a:delete e[m],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(r?r[$]=t:this._root=t),this):(this._root=a,this)}function _i(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function xi(){return this._root}function mi(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function Mi(n){var e=[],t,r=this._root,i,a,f,h,s,u,l;for(r&&e.push(new R(r,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!n(r=t.node,a=t.x0,f=t.y0,h=t.z0,s=t.x1,u=t.y1,l=t.z1)&&r.length){var g=(a+s)/2,w=(f+u)/2,y=(h+l)/2;(i=r[7])&&e.push(new R(i,g,w,y,s,u,l)),(i=r[6])&&e.push(new R(i,a,w,y,g,u,l)),(i=r[5])&&e.push(new R(i,g,f,y,s,w,l)),(i=r[4])&&e.push(new R(i,a,f,y,g,w,l)),(i=r[3])&&e.push(new R(i,g,w,h,s,u,y)),(i=r[2])&&e.push(new R(i,a,w,h,g,u,y)),(i=r[1])&&e.push(new R(i,g,f,h,s,w,y)),(i=r[0])&&e.push(new R(i,a,f,h,g,w,y))}return this}function Ni(n){var e=[],t=[],r;for(this._root&&e.push(new R(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));r=e.pop();){var i=r.node;if(i.length){var a,f=r.x0,h=r.y0,s=r.z0,u=r.x1,l=r.y1,g=r.z1,w=(f+u)/2,y=(h+l)/2,v=(s+g)/2;(a=i[0])&&e.push(new R(a,f,h,s,w,y,v)),(a=i[1])&&e.push(new R(a,w,h,s,u,y,v)),(a=i[2])&&e.push(new R(a,f,y,s,w,l,v)),(a=i[3])&&e.push(new R(a,w,y,s,u,l,v)),(a=i[4])&&e.push(new R(a,f,h,v,w,y,g)),(a=i[5])&&e.push(new R(a,w,h,v,u,y,g)),(a=i[6])&&e.push(new R(a,f,y,v,w,l,g)),(a=i[7])&&e.push(new R(a,w,y,v,u,l,g))}t.push(r)}for(;r=t.pop();)n(r.node,r.x0,r.y0,r.z0,r.x1,r.y1,r.z1);return this}function Ei(n){return n[0]}function Ci(n){return arguments.length?(this._x=n,this):this._x}function $i(n){return n[1]}function Bi(n){return arguments.length?(this._y=n,this):this._y}function Ti(n){return n[2]}function Pi(n){return arguments.length?(this._z=n,this):this._z}function sn(n,e,t,r){var i=new ct(e??Ei,t??$i,r??Ti,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function ct(n,e,t,r,i,a,f,h,s){this._x=n,this._y=e,this._z=t,this._x0=r,this._y0=i,this._z0=a,this._x1=f,this._y1=h,this._z1=s,this._root=void 0}function fn(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Z=sn.prototype=ct.prototype;Z.copy=function(){var n=new ct(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,r;if(!e)return n;if(!e.length)return n._root=fn(e),n;for(t=[{source:e,target:n._root=new Array(8)}];e=t.pop();)for(var i=0;i<8;++i)(r=e.source[i])&&(r.length?t.push({source:r,target:e.target[i]=new Array(8)}):e.target[i]=fn(r));return n},Z.add=li,Z.addAll=pi,Z.cover=gi,Z.data=vi,Z.extent=yi,Z.find=bi,Z.remove=wi,Z.removeAll=_i,Z.root=xi,Z.size=mi,Z.visit=Mi,Z.visitAfter=Ni,Z.x=Ci,Z.y=Bi,Z.z=Pi;function Te(n){return function(){return n}}function he(n){return(n()-.5)*1e-6}function Ai(n){return n.index}function un(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function Si(n){var e=Ai,t=w,r,i=Te(30),a,f,h,s,u,l,g=1;n==null&&(n=[]);function w(c){return 1/Math.min(s[c.source.index],s[c.target.index])}function y(c){for(var M=0,C=n.length;M<g;++M)for(var N=0,m,$,z,I=0,U=0,H=0,Q,G;N<C;++N)m=n[N],$=m.source,z=m.target,I=z.x+z.vx-$.x-$.vx||he(l),h>1&&(U=z.y+z.vy-$.y-$.vy||he(l)),h>2&&(H=z.z+z.vz-$.z-$.vz||he(l)),Q=Math.sqrt(I*I+U*U+H*H),Q=(Q-a[N])/Q*c*r[N],I*=Q,U*=Q,H*=Q,z.vx-=I*(G=u[N]),h>1&&(z.vy-=U*G),h>2&&(z.vz-=H*G),$.vx+=I*(G=1-G),h>1&&($.vy+=U*G),h>2&&($.vz+=H*G)}function v(){if(f){var c,M=f.length,C=n.length,N=new Map(f.map(($,z)=>[e($,z,f),$])),m;for(c=0,s=new Array(M);c<C;++c)m=n[c],m.index=c,typeof m.source!="object"&&(m.source=un(N,m.source)),typeof m.target!="object"&&(m.target=un(N,m.target)),s[m.source.index]=(s[m.source.index]||0)+1,s[m.target.index]=(s[m.target.index]||0)+1;for(c=0,u=new Array(C);c<C;++c)m=n[c],u[c]=s[m.source.index]/(s[m.source.index]+s[m.target.index]);r=new Array(C),_(),a=new Array(C),b()}}function _(){if(f)for(var c=0,M=n.length;c<M;++c)r[c]=+t(n[c],c,n)}function b(){if(f)for(var c=0,M=n.length;c<M;++c)a[c]=+i(n[c],c,n)}return y.initialize=function(c,...M){f=c,l=M.find(C=>typeof C=="function")||Math.random,h=M.find(C=>[1,2,3].includes(C))||2,v()},y.links=function(c){return arguments.length?(n=c,v(),y):n},y.id=function(c){return arguments.length?(e=c,y):e},y.iterations=function(c){return arguments.length?(g=+c,y):g},y.strength=function(c){return arguments.length?(t=typeof c=="function"?c:Te(+c),_(),y):t},y.distance=function(c){return arguments.length?(i=typeof c=="function"?c:Te(+c),b(),y):i},y}var zi={value:()=>{}};function dn(){for(var n=0,e=arguments.length,t={},r;n<e;++n){if(!(r=arguments[n]+"")||r in t||/[\s.]/.test(r))throw new Error("illegal type: "+r);t[r]=[]}return new De(t)}function De(n){this._=n}function Oi(n,e){return n.trim().split(/^|\s+/).map(function(t){var r="",i=t.indexOf(".");if(i>=0&&(r=t.slice(i+1),t=t.slice(0,i)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}})}De.prototype=dn.prototype={constructor:De,on:function(n,e){var t=this._,r=Oi(n+"",t),i,a=-1,f=r.length;if(arguments.length<2){for(;++a<f;)if((i=(n=r[a]).type)&&(i=Li(t[i],n.name)))return i;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++a<f;)if(i=(n=r[a]).type)t[i]=hn(t[i],n.name,e);else if(e==null)for(i in t)t[i]=hn(t[i],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new De(n)},call:function(n,e){if((i=arguments.length-2)>0)for(var t=new Array(i),r=0,i,a;r<i;++r)t[r]=arguments[r+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(a=this._[n],r=0,i=a.length;r<i;++r)a[r].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var r=this._[n],i=0,a=r.length;i<a;++i)r[i].value.apply(e,t)}};function Li(n,e){for(var t=0,r=n.length,i;t<r;++t)if((i=n[t]).name===e)return i.value}function hn(n,e,t){for(var r=0,i=n.length;r<i;++r)if(n[r].name===e){n[r]=zi,n=n.slice(0,r).concat(n.slice(r+1));break}return t!=null&&n.push({name:e,value:t}),n}var Me=0,Pe=0,Ae=0,cn=1e3,je,Se,Ge=0,be=0,Re=0,ze=typeof performance=="object"&&performance.now?performance:Date,ln=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function pn(){return be||(ln(Ii),be=ze.now()+Re)}function Ii(){be=0}function lt(){this._call=this._time=this._next=null}lt.prototype=gn.prototype={constructor:lt,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?pn():+t)+(e==null?0:+e),!this._next&&Se!==this&&(Se?Se._next=this:je=this,Se=this),this._call=n,this._time=t,pt()},stop:function(){this._call&&(this._call=null,this._time=1/0,pt())}};function gn(n,e,t){var r=new lt;return r.restart(n,e,t),r}function ki(){pn(),++Me;for(var n=je,e;n;)(e=be-n._time)>=0&&n._call.call(void 0,e),n=n._next;--Me}function vn(){be=(Ge=ze.now())+Re,Me=Pe=0;try{ki()}finally{Me=0,qi(),be=0}}function Fi(){var n=ze.now(),e=n-Ge;e>cn&&(Re-=e,Ge=n)}function qi(){for(var n,e=je,t,r=1/0;e;)e._call?(r>e._time&&(r=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:je=t);Se=n,pt(r)}function pt(n){if(!Me){Pe&&(Pe=clearTimeout(Pe));var e=n-be;e>24?(n<1/0&&(Pe=setTimeout(vn,n-ze.now()-Re)),Ae&&(Ae=clearInterval(Ae))):(Ae||(Ge=ze.now(),Ae=setInterval(Fi,cn)),Me=1,ln(vn))}}const Di=1664525,ji=1013904223,yn=4294967296;function Gi(){let n=1;return()=>(n=(Di*n+ji)%yn)/yn}var bn=3;function gt(n){return n.x}function wn(n){return n.y}function Ri(n){return n.z}var Ui=10,Hi=Math.PI*(3-Math.sqrt(5)),Qi=Math.PI*20/(9+Math.sqrt(221));function Vi(n,e){e=e||2;var t=Math.min(bn,Math.max(1,Math.round(e))),r,i=1,a=.001,f=1-Math.pow(a,1/300),h=0,s=.6,u=new Map,l=gn(y),g=dn("tick","end"),w=Gi();n==null&&(n=[]);function y(){v(),g.call("tick",r),i<a&&(l.stop(),g.call("end",r))}function v(c){var M,C=n.length,N;c===void 0&&(c=1);for(var m=0;m<c;++m)for(i+=(h-i)*f,u.forEach(function($){$(i)}),M=0;M<C;++M)N=n[M],N.fx==null?N.x+=N.vx*=s:(N.x=N.fx,N.vx=0),t>1&&(N.fy==null?N.y+=N.vy*=s:(N.y=N.fy,N.vy=0)),t>2&&(N.fz==null?N.z+=N.vz*=s:(N.z=N.fz,N.vz=0));return r}function _(){for(var c=0,M=n.length,C;c<M;++c){if(C=n[c],C.index=c,C.fx!=null&&(C.x=C.fx),C.fy!=null&&(C.y=C.fy),C.fz!=null&&(C.z=C.fz),isNaN(C.x)||t>1&&isNaN(C.y)||t>2&&isNaN(C.z)){var N=Ui*(t>2?Math.cbrt(.5+c):t>1?Math.sqrt(.5+c):c),m=c*Hi,$=c*Qi;t===1?C.x=N:t===2?(C.x=N*Math.cos(m),C.y=N*Math.sin(m)):(C.x=N*Math.sin(m)*Math.cos($),C.y=N*Math.cos(m),C.z=N*Math.sin(m)*Math.sin($))}(isNaN(C.vx)||t>1&&isNaN(C.vy)||t>2&&isNaN(C.vz))&&(C.vx=0,t>1&&(C.vy=0),t>2&&(C.vz=0))}}function b(c){return c.initialize&&c.initialize(n,w,t),c}return _(),r={tick:v,restart:function(){return l.restart(y),r},stop:function(){return l.stop(),r},numDimensions:function(c){return arguments.length?(t=Math.min(bn,Math.max(1,Math.round(c))),u.forEach(b),r):t},nodes:function(c){return arguments.length?(n=c,_(),u.forEach(b),r):n},alpha:function(c){return arguments.length?(i=+c,r):i},alphaMin:function(c){return arguments.length?(a=+c,r):a},alphaDecay:function(c){return arguments.length?(f=+c,r):+f},alphaTarget:function(c){return arguments.length?(h=+c,r):h},velocityDecay:function(c){return arguments.length?(s=1-c,r):1-s},randomSource:function(c){return arguments.length?(w=c,u.forEach(b),r):w},force:function(c,M){return arguments.length>1?(M==null?u.delete(c):u.set(c,b(M)),r):u.get(c)},find:function(){var c=Array.prototype.slice.call(arguments),M=c.shift()||0,C=(t>1?c.shift():null)||0,N=(t>2?c.shift():null)||0,m=c.shift()||1/0,$=0,z=n.length,I,U,H,Q,G,ue;for(m*=m,$=0;$<z;++$)G=n[$],I=M-G.x,U=C-(G.y||0),H=N-(G.z||0),Q=I*I+U*U+H*H,Q<m&&(ue=G,m=Q);return ue},on:function(c,M){return arguments.length>1?(g.on(c,M),r):g.on(c)}}}function Wi(){var n,e,t,r,i,a=Te(-30),f,h=1,s=1/0,u=.81;function l(v){var _,b=n.length,c=(e===1?en(n,gt):e===2?rn(n,gt,wn):e===3?sn(n,gt,wn,Ri):null).visitAfter(w);for(i=v,_=0;_<b;++_)t=n[_],c.visit(y)}function g(){if(n){var v,_=n.length,b;for(f=new Array(_),v=0;v<_;++v)b=n[v],f[b.index]=+a(b,v,n)}}function w(v){var _=0,b,c,M=0,C,N,m,$,z=v.length;if(z){for(C=N=m=$=0;$<z;++$)(b=v[$])&&(c=Math.abs(b.value))&&(_+=b.value,M+=c,C+=c*(b.x||0),N+=c*(b.y||0),m+=c*(b.z||0));_*=Math.sqrt(4/z),v.x=C/M,e>1&&(v.y=N/M),e>2&&(v.z=m/M)}else{b=v,b.x=b.data.x,e>1&&(b.y=b.data.y),e>2&&(b.z=b.data.z);do _+=f[b.data.index];while(b=b.next)}v.value=_}function y(v,_,b,c,M){if(!v.value)return!0;var C=[b,c,M][e-1],N=v.x-t.x,m=e>1?v.y-t.y:0,$=e>2?v.z-t.z:0,z=C-_,I=N*N+m*m+$*$;if(z*z/u<I)return I<s&&(N===0&&(N=he(r),I+=N*N),e>1&&m===0&&(m=he(r),I+=m*m),e>2&&$===0&&($=he(r),I+=$*$),I<h&&(I=Math.sqrt(h*I)),t.vx+=N*v.value*i/I,e>1&&(t.vy+=m*v.value*i/I),e>2&&(t.vz+=$*v.value*i/I)),!0;if(v.length||I>=s)return;(v.data!==t||v.next)&&(N===0&&(N=he(r),I+=N*N),e>1&&m===0&&(m=he(r),I+=m*m),e>2&&$===0&&($=he(r),I+=$*$),I<h&&(I=Math.sqrt(h*I)));do v.data!==t&&(z=f[v.data.index]*i/I,t.vx+=N*z,e>1&&(t.vy+=m*z),e>2&&(t.vz+=$*z));while(v=v.next)}return l.initialize=function(v,..._){n=v,r=_.find(b=>typeof b=="function")||Math.random,e=_.find(b=>[1,2,3].includes(b))||2,g()},l.strength=function(v){return arguments.length?(a=typeof v=="function"?v:Te(+v),g(),l):a},l.distanceMin=function(v){return arguments.length?(h=v*v,l):Math.sqrt(h)},l.distanceMax=function(v){return arguments.length?(s=v*v,l):Math.sqrt(s)},l.theta=function(v){return arguments.length?(u=v*v,l):Math.sqrt(u)},l}function vt(n){return typeof n=="object"&&typeof n.index=="number"&&typeof n.x=="number"&&typeof n.y=="number"&&typeof n.z=="number"&&typeof n.vx=="number"&&typeof n.vy=="number"&&typeof n.vz=="number"}function Xi(n){return!!(typeof n=="object"&&typeof n.index=="number"&&vt(n.source)&&vt(n.target))}class Ki{constructor(){O(this,"d3ForceLayout");O(this,"d3AlphaMin",0);O(this,"d3AlphaTarget",0);O(this,"d3AlphaDecay",.0228);O(this,"d3VelocityDecay",.4);O(this,"nodeMapping",new Map);O(this,"edgeMapping",new Map);O(this,"newNodeMap",new Map);O(this,"newEdgeMap",new Map);O(this,"reheat",!1);this.d3ForceLayout=Vi().numDimensions(3).alpha(1).force("link",Si()).force("charge",Wi()).force("center",Ir()).force("dagRadial",null).stop(),this.d3ForceLayout.force("link").id(e=>e.id)}get graphNeedsRefresh(){return!!this.newNodeMap.size||!!this.newEdgeMap.size}async init(){}refresh(){if(this.graphNeedsRefresh||this.reheat){let e=[...this.nodeMapping.values()];e=e.concat([...this.newNodeMap.values()]),this.d3ForceLayout.alpha(1).nodes(e).stop();for(let r of this.newNodeMap.entries()){let i=r[0],a=r[1];if(!vt(a))throw new Error("Internal error: Node is not settled as a complete D3 Node");this.nodeMapping.set(i,a)}this.newNodeMap.clear();let t=[...this.edgeMapping.values()];t=t.concat([...this.newEdgeMap.values()]),this.d3ForceLayout.force("link").links(t);for(let r of this.newEdgeMap.entries()){let i=r[0],a=r[1];if(!Xi(a))throw new Error("Internal error: Edge is not settled as a complete D3 Edge");this.edgeMapping.set(i,a)}this.newEdgeMap.clear()}}step(){this.refresh(),this.d3ForceLayout.tick()}addNode(e){this.newNodeMap.set(e,{id:e.id})}addEdge(e){this.newEdgeMap.set(e,{source:e.srcId,target:e.dstId})}get nodes(){return this.nodeMapping.keys()}get edges(){return this.edgeMapping.keys()}getNodePosition(e){const t=this._getMappedNode(e);if(t.x===void 0||t.y===void 0||t.z===void 0)throw new Error("Internal error: Node not initialized in D3GraphEngine");return{x:t.x,y:t.y,z:t.z}}setNodePosition(e,t){const r=this._getMappedNode(e);r.x=t.x,r.y=t.y,r.z=t.z??0,this.reheat=!0}getEdgePosition(e){let t=this._getMappedEdge(e);return{src:{x:t.source.x,y:t.source.y,z:t.source.z},dst:{x:t.target.x,y:t.target.y,z:t.target.z}}}pin(e){const t=this._getMappedNode(e);t.fx=t.x,t.fy=t.y,t.fz=t.z,this.reheat=!0}unpin(e){const t=this._getMappedNode(e);t.fx=void 0,t.fy=void 0,t.fz=void 0,this.reheat=!0}_getMappedNode(e){this.refresh();const t=this.nodeMapping.get(e);if(!t)throw new Error("Internal error: Node not found in D3GraphEngine");return t}_getMappedEdge(e){this.refresh();let t=this.edgeMapping.get(e);if(!t)throw new Error("Internal error: Edge not found in D3GraphEngine");return t}}var Ue={exports:{}};Ue.exports,function(n,e){var t=200,r="__lodash_hash_undefined__",i=800,a=16,f=9007199254740991,h="[object Arguments]",s="[object Array]",u="[object AsyncFunction]",l="[object Boolean]",g="[object Date]",w="[object Error]",y="[object Function]",v="[object GeneratorFunction]",_="[object Map]",b="[object Number]",c="[object Null]",M="[object Object]",C="[object Proxy]",N="[object RegExp]",m="[object Set]",$="[object String]",z="[object Undefined]",I="[object WeakMap]",U="[object ArrayBuffer]",H="[object DataView]",Q="[object Float32Array]",G="[object Float64Array]",ue="[object Int8Array]",E="[object Int16Array]",x="[object Int32Array]",B="[object Uint8Array]",V="[object Uint8ClampedArray]",ae="[object Uint16Array]",se="[object Uint32Array]",P=/[\\^$.*+?()[\]{}|]/g,S=/^\[object .+?Constructor\]$/,k=/^(?:0|[1-9]\d*)$/,L={};L[Q]=L[G]=L[ue]=L[E]=L[x]=L[B]=L[V]=L[ae]=L[se]=!0,L[h]=L[s]=L[U]=L[l]=L[H]=L[g]=L[w]=L[y]=L[_]=L[b]=L[M]=L[N]=L[m]=L[$]=L[I]=!1;var Y=typeof Fe=="object"&&Fe&&Fe.Object===Object&&Fe,K=typeof self=="object"&&self&&self.Object===Object&&self,ee=Y||K||Function("return this")(),He=e&&!e.nodeType&&e,Oe=He&&!0&&n&&!n.nodeType&&n,_n=Oe&&Oe.exports===He,yt=_n&&Y.process,xn=function(){try{var o=Oe&&Oe.require&&Oe.require("util").types;return o||yt&&yt.binding&&yt.binding("util")}catch{}}(),mn=xn&&xn.isTypedArray;function Mn(o,d,p){switch(p.length){case 0:return o.call(d);case 1:return o.call(d,p[0]);case 2:return o.call(d,p[0],p[1]);case 3:return o.call(d,p[0],p[1],p[2])}return o.apply(d,p)}function ia(o,d){for(var p=-1,T=Array(o);++p<o;)T[p]=d(p);return T}function aa(o){return function(d){return o(d)}}function oa(o,d){return o==null?void 0:o[d]}function sa(o,d){return function(p){return o(d(p))}}var fa=Array.prototype,ua=Function.prototype,Qe=Object.prototype,bt=ee["__core-js_shared__"],Ve=ua.toString,ce=Qe.hasOwnProperty,Nn=function(){var o=/[^.]+$/.exec(bt&&bt.keys&&bt.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),En=Qe.toString,da=Ve.call(Object),ha=RegExp("^"+Ve.call(ce).replace(P,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),We=_n?ee.Buffer:void 0,Cn=ee.Symbol,$n=ee.Uint8Array,Bn=We?We.allocUnsafe:void 0,Tn=sa(Object.getPrototypeOf,Object),Pn=Object.create,ca=Qe.propertyIsEnumerable,la=fa.splice,we=Cn?Cn.toStringTag:void 0,Xe=function(){try{var o=mt(Object,"defineProperty");return o({},"",{}),o}catch{}}(),pa=We?We.isBuffer:void 0,An=Math.max,ga=Date.now,Sn=mt(ee,"Map"),Le=mt(Object,"create"),va=function(){function o(){}return function(d){if(!pe(d))return{};if(Pn)return Pn(d);o.prototype=d;var p=new o;return o.prototype=void 0,p}}();function _e(o){var d=-1,p=o==null?0:o.length;for(this.clear();++d<p;){var T=o[d];this.set(T[0],T[1])}}function ya(){this.__data__=Le?Le(null):{},this.size=0}function ba(o){var d=this.has(o)&&delete this.__data__[o];return this.size-=d?1:0,d}function wa(o){var d=this.__data__;if(Le){var p=d[o];return p===r?void 0:p}return ce.call(d,o)?d[o]:void 0}function _a(o){var d=this.__data__;return Le?d[o]!==void 0:ce.call(d,o)}function xa(o,d){var p=this.__data__;return this.size+=this.has(o)?0:1,p[o]=Le&&d===void 0?r:d,this}_e.prototype.clear=ya,_e.prototype.delete=ba,_e.prototype.get=wa,_e.prototype.has=_a,_e.prototype.set=xa;function le(o){var d=-1,p=o==null?0:o.length;for(this.clear();++d<p;){var T=o[d];this.set(T[0],T[1])}}function ma(){this.__data__=[],this.size=0}function Ma(o){var d=this.__data__,p=Ke(d,o);if(p<0)return!1;var T=d.length-1;return p==T?d.pop():la.call(d,p,1),--this.size,!0}function Na(o){var d=this.__data__,p=Ke(d,o);return p<0?void 0:d[p][1]}function Ea(o){return Ke(this.__data__,o)>-1}function Ca(o,d){var p=this.__data__,T=Ke(p,o);return T<0?(++this.size,p.push([o,d])):p[T][1]=d,this}le.prototype.clear=ma,le.prototype.delete=Ma,le.prototype.get=Na,le.prototype.has=Ea,le.prototype.set=Ca;function Ne(o){var d=-1,p=o==null?0:o.length;for(this.clear();++d<p;){var T=o[d];this.set(T[0],T[1])}}function $a(){this.size=0,this.__data__={hash:new _e,map:new(Sn||le),string:new _e}}function Ba(o){var d=Je(this,o).delete(o);return this.size-=d?1:0,d}function Ta(o){return Je(this,o).get(o)}function Pa(o){return Je(this,o).has(o)}function Aa(o,d){var p=Je(this,o),T=p.size;return p.set(o,d),this.size+=p.size==T?0:1,this}Ne.prototype.clear=$a,Ne.prototype.delete=Ba,Ne.prototype.get=Ta,Ne.prototype.has=Pa,Ne.prototype.set=Aa;function Ee(o){var d=this.__data__=new le(o);this.size=d.size}function Sa(){this.__data__=new le,this.size=0}function za(o){var d=this.__data__,p=d.delete(o);return this.size=d.size,p}function Oa(o){return this.__data__.get(o)}function La(o){return this.__data__.has(o)}function Ia(o,d){var p=this.__data__;if(p instanceof le){var T=p.__data__;if(!Sn||T.length<t-1)return T.push([o,d]),this.size=++p.size,this;p=this.__data__=new Ne(T)}return p.set(o,d),this.size=p.size,this}Ee.prototype.clear=Sa,Ee.prototype.delete=za,Ee.prototype.get=Oa,Ee.prototype.has=La,Ee.prototype.set=Ia;function ka(o,d){var p=Et(o),T=!p&&Nt(o),F=!p&&!T&&Fn(o),D=!p&&!T&&!F&&Dn(o),W=p||T||F||D,q=W?ia(o.length,String):[],X=q.length;for(var oe in o)(d||ce.call(o,oe))&&!(W&&(oe=="length"||F&&(oe=="offset"||oe=="parent")||D&&(oe=="buffer"||oe=="byteLength"||oe=="byteOffset")||In(oe,X)))&&q.push(oe);return q}function wt(o,d,p){(p!==void 0&&!Ze(o[d],p)||p===void 0&&!(d in o))&&_t(o,d,p)}function Fa(o,d,p){var T=o[d];(!(ce.call(o,d)&&Ze(T,p))||p===void 0&&!(d in o))&&_t(o,d,p)}function Ke(o,d){for(var p=o.length;p--;)if(Ze(o[p][0],d))return p;return-1}function _t(o,d,p){d=="__proto__"&&Xe?Xe(o,d,{configurable:!0,enumerable:!0,value:p,writable:!0}):o[d]=p}var qa=Ya();function Ye(o){return o==null?o===void 0?z:c:we&&we in Object(o)?Ja(o):io(o)}function zn(o){return Ie(o)&&Ye(o)==h}function Da(o){if(!pe(o)||no(o))return!1;var d=$t(o)?ha:S;return d.test(fo(o))}function ja(o){return Ie(o)&&qn(o.length)&&!!L[Ye(o)]}function Ga(o){if(!pe(o))return ro(o);var d=kn(o),p=[];for(var T in o)T=="constructor"&&(d||!ce.call(o,T))||p.push(T);return p}function xt(o,d,p,T,F){o!==d&&qa(d,function(D,W){if(F||(F=new Ee),pe(D))Ra(o,d,W,p,xt,T,F);else{var q=T?T(Mt(o,W),D,W+"",o,d,F):void 0;q===void 0&&(q=D),wt(o,W,q)}},jn)}function Ra(o,d,p,T,F,D,W){var q=Mt(o,p),X=Mt(d,p),oe=W.get(X);if(oe){wt(o,p,oe);return}var ie=D?D(q,X,p+"",o,d,W):void 0,ke=ie===void 0;if(ke){var Bt=Et(X),Tt=!Bt&&Fn(X),Rn=!Bt&&!Tt&&Dn(X);ie=X,Bt||Tt||Rn?Et(q)?ie=q:uo(q)?ie=Wa(q):Tt?(ke=!1,ie=Ha(X,!0)):Rn?(ke=!1,ie=Va(X,!0)):ie=[]:ho(X)||Nt(X)?(ie=q,Nt(q)?ie=co(q):(!pe(q)||$t(q))&&(ie=Za(X))):ke=!1}ke&&(W.set(X,ie),F(ie,X,T,D,W),W.delete(X)),wt(o,p,ie)}function On(o,d){return oo(ao(o,d,Gn),o+"")}var Ua=Xe?function(o,d){return Xe(o,"toString",{configurable:!0,enumerable:!1,value:go(d),writable:!0})}:Gn;function Ha(o,d){if(d)return o.slice();var p=o.length,T=Bn?Bn(p):new o.constructor(p);return o.copy(T),T}function Qa(o){var d=new o.constructor(o.byteLength);return new $n(d).set(new $n(o)),d}function Va(o,d){var p=d?Qa(o.buffer):o.buffer;return new o.constructor(p,o.byteOffset,o.length)}function Wa(o,d){var p=-1,T=o.length;for(d||(d=Array(T));++p<T;)d[p]=o[p];return d}function Xa(o,d,p,T){var F=!p;p||(p={});for(var D=-1,W=d.length;++D<W;){var q=d[D],X=T?T(p[q],o[q],q,p,o):void 0;X===void 0&&(X=o[q]),F?_t(p,q,X):Fa(p,q,X)}return p}function Ka(o){return On(function(d,p){var T=-1,F=p.length,D=F>1?p[F-1]:void 0,W=F>2?p[2]:void 0;for(D=o.length>3&&typeof D=="function"?(F--,D):void 0,W&&eo(p[0],p[1],W)&&(D=F<3?void 0:D,F=1),d=Object(d);++T<F;){var q=p[T];q&&o(d,q,T,D)}return d})}function Ya(o){return function(d,p,T){for(var F=-1,D=Object(d),W=T(d),q=W.length;q--;){var X=W[o?q:++F];if(p(D[X],X,D)===!1)break}return d}}function Ln(o,d,p,T,F,D){return pe(o)&&pe(d)&&(D.set(d,o),xt(o,d,void 0,Ln,D),D.delete(d)),o}function Je(o,d){var p=o.__data__;return to(d)?p[typeof d=="string"?"string":"hash"]:p.map}function mt(o,d){var p=oa(o,d);return Da(p)?p:void 0}function Ja(o){var d=ce.call(o,we),p=o[we];try{o[we]=void 0;var T=!0}catch{}var F=En.call(o);return T&&(d?o[we]=p:delete o[we]),F}function Za(o){return typeof o.constructor=="function"&&!kn(o)?va(Tn(o)):{}}function In(o,d){var p=typeof o;return d=d??f,!!d&&(p=="number"||p!="symbol"&&k.test(o))&&o>-1&&o%1==0&&o<d}function eo(o,d,p){if(!pe(p))return!1;var T=typeof d;return(T=="number"?Ct(p)&&In(d,p.length):T=="string"&&d in p)?Ze(p[d],o):!1}function to(o){var d=typeof o;return d=="string"||d=="number"||d=="symbol"||d=="boolean"?o!=="__proto__":o===null}function no(o){return!!Nn&&Nn in o}function kn(o){var d=o&&o.constructor,p=typeof d=="function"&&d.prototype||Qe;return o===p}function ro(o){var d=[];if(o!=null)for(var p in Object(o))d.push(p);return d}function io(o){return En.call(o)}function ao(o,d,p){return d=An(d===void 0?o.length-1:d,0),function(){for(var T=arguments,F=-1,D=An(T.length-d,0),W=Array(D);++F<D;)W[F]=T[d+F];F=-1;for(var q=Array(d+1);++F<d;)q[F]=T[F];return q[d]=p(W),Mn(o,this,q)}}function Mt(o,d){if(!(d==="constructor"&&typeof o[d]=="function")&&d!="__proto__")return o[d]}var oo=so(Ua);function so(o){var d=0,p=0;return function(){var T=ga(),F=a-(T-p);if(p=T,F>0){if(++d>=i)return arguments[0]}else d=0;return o.apply(void 0,arguments)}}function fo(o){if(o!=null){try{return Ve.call(o)}catch{}try{return o+""}catch{}}return""}function Ze(o,d){return o===d||o!==o&&d!==d}var Nt=zn(function(){return arguments}())?zn:function(o){return Ie(o)&&ce.call(o,"callee")&&!ca.call(o,"callee")},Et=Array.isArray;function Ct(o){return o!=null&&qn(o.length)&&!$t(o)}function uo(o){return Ie(o)&&Ct(o)}var Fn=pa||vo;function $t(o){if(!pe(o))return!1;var d=Ye(o);return d==y||d==v||d==u||d==C}function qn(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=f}function pe(o){var d=typeof o;return o!=null&&(d=="object"||d=="function")}function Ie(o){return o!=null&&typeof o=="object"}function ho(o){if(!Ie(o)||Ye(o)!=M)return!1;var d=Tn(o);if(d===null)return!0;var p=ce.call(d,"constructor")&&d.constructor;return typeof p=="function"&&p instanceof p&&Ve.call(p)==da}var Dn=mn?aa(mn):ja;function co(o){return Xa(o,jn(o))}var lo=On(function(o){return o.push(void 0,Ln),Mn(po,void 0,o)});function jn(o){return Ct(o)?ka(o,!0):Ga(o)}var po=Ka(function(o,d,p,T){xt(o,d,p,T)});function go(o){return function(){return o}}function Gn(o){return o}function vo(){return!1}n.exports=lo}(Ue,Ue.exports);var Yi=Ue.exports;const Ji=et(Yi),Zi={size:1,opacity:1,wireframe:!1,color:"lightgrey",shape:"icosphere",nodeMeshFactory:Ce.defaultNodeMeshFactory,label:!0},ea={type:"moving",color:"white",movingLineOpts:{baseColor:"lightgrey",width:.25},edgeMeshFactory:fe.defaultEdgeMeshFactory},ta={nodeMeshOpts:Zi,edgeMeshOpts:ea,pinOnDrag:!0,graphEngineType:"ngraph"};function na(n){return Ji({},n,ta)}class ra{constructor(e,t){O(this,"config");O(this,"element");O(this,"canvas");O(this,"engine");O(this,"scene");O(this,"camera");O(this,"skybox");O(this,"graphEngineType");O(this,"graphEngine");O(this,"running",!0);O(this,"pinOnDrag");O(this,"fetchNodes");O(this,"fetchEdges");O(this,"minDelta",.2);O(this,"graphObservable",new A.Observable);O(this,"nodeObservable",new A.Observable);O(this,"edgeObservable",new A.Observable);if(this.config=na(t),this.fetchNodes=this.config.fetchNodes,this.fetchEdges=this.config.fetchEdges,typeof e=="string"){let r=document.getElementById(e);if(!r)throw new Error(`getElementById() could not find element '${e}'`);this.element=r}else if(e instanceof HTMLElement)this.element=e;else throw new TypeError("Graph constructor requires 'element' argument that is either a string specifying the ID of the HTML element or an HTMLElement");if(this.element.innerHTML="",this.canvas=document.createElement("canvas"),this.canvas.setAttribute("id","babylonForceGraphRenderCanvas"),this.canvas.setAttribute("touch-action","none"),this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.touchAction="none",this.element.appendChild(this.canvas),this.engine=new A.Engine(this.canvas,!0),this.scene=new A.Scene(this.engine),this.camera=new A.ArcRotateCamera("camera",-Math.PI/2,Math.PI/2.5,15,new A.Vector3(0,0,0)),this.camera.attachControl(this.canvas,!0),new A.HemisphericLight("light",new A.Vector3(1,1,0)),this.config.skybox&&new A.PhotoDome("testdome",this.config.skybox,{resolution:32,size:1e3},this.scene),this.config.graphEngineType==="ngraph")this.graphEngine=new Lr;else if(this.config.graphEngineType==="d3")this.graphEngine=new Ki;else throw new TypeError(`Unknown graph engine type: '${this.graphEngineType}'`)}async init(){this.engine.runRenderLoop(()=>{this.update(),this.scene.render()}),navigator.xr&&await this.scene.createDefaultXRExperienceAsync({disableTeleportation:!0}),window.addEventListener("resize",()=>{this.engine.resize()})}update(){if(!this.running)return;this.graphEngine.step();let e=0;for(let t of this.graphEngine.nodes)e=Math.max(e,t.getDeltaPos()),t.update();for(let t of this.graphEngine.edges)t.update();e<this.minDelta&&(this.graphObservable.notifyObservers({type:"graph-settled",graph:this}),this.running=!1)}addNode(e,t={}){return this.nodeObservable.notifyObservers({type:"node-add-before",nodeId:e,metadata:t}),Ce.create(this,e,{nodeMeshConfig:this.config.nodeMeshOpts,pinOnDrag:this.pinOnDrag,metadata:t})}addEdge(e,t,r={}){return this.edgeObservable.notifyObservers({type:"edge-add-before",srcNodeId:e,dstNodeId:t,metadata:r}),fe.create(this,e,t,{edgeMeshConfig:this.config.edgeMeshOpts,metadata:r})}addListener(e,t){switch(e){case"graph-settled":this.graphObservable.add(r=>{r.type===e&&t(r)});break;case"node-add-before":this.nodeObservable.add(r=>{r.type===e&&t(r)});break;case"edge-add-before":this.edgeObservable.add(r=>{r.type===e&&t(r)});break;default:throw new TypeError(`Unknown listener type in addListener: ${e}`)}}async loadJsonData(e,t={}){const r=t.nodeListProp??"nodes",i=t.edgeListProp??"links",a=t.nodeIdProp??"id",f=t.edgeSrcIdProp??"source",h=t.edgeDstIdProp??"target",u=await(await fetch(e,t.fetchOpts)).json();if(!Array.isArray(u[r]))throw TypeError(`when fetching JSON data: '${r}' was not an Array`);if(!Array.isArray(u[i]))throw TypeError(`when fetching JSON data: '${i}' was not an Array`);for(let l of u[r]){let g=l[a],w=l;this.addNode(g,w)}for(let l of u[i]){let g=l[f],w=l[h],y=l;this.addEdge(g,w,y)}}}J.Edge=fe,J.Graph=ra,J.Node=Ce,J.util=Un,Object.defineProperty(J,Symbol.toStringTag,{value:"Module"})});
