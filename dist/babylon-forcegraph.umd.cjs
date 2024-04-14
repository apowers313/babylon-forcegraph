(function(J,S){typeof exports=="object"&&typeof module<"u"?S(exports,require("@babylonjs/core")):typeof define=="function"&&define.amd?define(["exports","@babylonjs/core"],S):(J=typeof globalThis<"u"?globalThis:J||self,S(J.HtmlMesh={},J.BABYLON))})(this,function(J,S){"use strict";var xo=Object.defineProperty;var _o=(J,S,ge)=>S in J?xo(J,S,{enumerable:!0,configurable:!0,writable:!0,value:ge}):J[S]=ge;var I=(J,S,ge)=>(_o(J,typeof S!="symbol"?S+"":S,ge),ge);const ge=new Map([["aliceblue","#f0f8ff"],["antiquewhite","#faebd7"],["aqua","#00ffff"],["aquamarine","#7fffd4"],["azure","#f0ffff"],["beige","#f5f5dc"],["bisque","#ffe4c4"],["black","#000000"],["blanchedalmond","#ffebcd"],["blue","#0000ff"],["blueviolet","#8a2be2"],["brown","#a52a2a"],["burlywood","#deb887"],["cadetblue","#5f9ea0"],["chartreuse","#7fff00"],["chocolate","#d2691e"],["coral","#ff7f50"],["cornflowerblue","#6495ed"],["cornsilk","#fff8dc"],["crimson","#dc143c"],["cyan","#00ffff"],["darkblue","#00008b"],["darkcyan","#008b8b"],["darkgoldenrod","#b8860b"],["darkgray","#a9a9a9"],["darkgreen","#006400"],["darkkhaki","#bdb76b"],["darkmagenta","#8b008b"],["darkolivegreen","#556b2f"],["darkorange","#ff8c00"],["darkorchid","#9932cc"],["darkred","#8b0000"],["darksalmon","#e9967a"],["darkseagreen","#8fbc8f"],["darkslateblue","#483d8b"],["darkslategray","#2f4f4f"],["darkturquoise","#00ced1"],["darkviolet","#9400d3"],["deeppink","#ff1493"],["deepskyblue","#00bfff"],["dimgray","#696969"],["dodgerblue","#1e90ff"],["firebrick","#b22222"],["floralwhite","#fffaf0"],["forestgreen","#228b22"],["fuchsia","#ff00ff"],["gainsboro","#dcdcdc"],["ghostwhite","#f8f8ff"],["gold","#ffd700"],["goldenrod","#daa520"],["gray","#808080"],["green","#008000"],["greenyellow","#adff2f"],["honeydew","#f0fff0"],["hotpink","#ff69b4"],["indianred ","#cd5c5c"],["indigo","#4b0082"],["ivory","#fffff0"],["khaki","#f0e68c"],["lavender","#e6e6fa"],["lavenderblush","#fff0f5"],["lawngreen","#7cfc00"],["lemonchiffon","#fffacd"],["lightblue","#add8e6"],["lightcoral","#f08080"],["lightcyan","#e0ffff"],["lightgoldenrodyellow","#fafad2"],["lightgrey","#d3d3d3"],["lightgreen","#90ee90"],["lightpink","#ffb6c1"],["lightsalmon","#ffa07a"],["lightseagreen","#20b2aa"],["lightskyblue","#87cefa"],["lightslategray","#778899"],["lightsteelblue","#b0c4de"],["lightyellow","#ffffe0"],["lime","#00ff00"],["limegreen","#32cd32"],["linen","#faf0e6"],["magenta","#ff00ff"],["maroon","#800000"],["mediumaquamarine","#66cdaa"],["mediumblue","#0000cd"],["mediumorchid","#ba55d3"],["mediumpurple","#9370d8"],["mediumseagreen","#3cb371"],["mediumslateblue","#7b68ee"],["mediumspringgreen","#00fa9a"],["mediumturquoise","#48d1cc"],["mediumvioletred","#c71585"],["midnightblue","#191970"],["mintcream","#f5fffa"],["mistyrose","#ffe4e1"],["moccasin","#ffe4b5"],["navajowhite","#ffdead"],["navy","#000080"],["oldlace","#fdf5e6"],["olive","#808000"],["olivedrab","#6b8e23"],["orange","#ffa500"],["orangered","#ff4500"],["orchid","#da70d6"],["palegoldenrod","#eee8aa"],["palegreen","#98fb98"],["paleturquoise","#afeeee"],["palevioletred","#d87093"],["papayawhip","#ffefd5"],["peachpuff","#ffdab9"],["peru","#cd853f"],["pink","#ffc0cb"],["plum","#dda0dd"],["powderblue","#b0e0e6"],["purple","#800080"],["rebeccapurple","#663399"],["red","#ff0000"],["rosybrown","#bc8f8f"],["royalblue","#4169e1"],["saddlebrown","#8b4513"],["salmon","#fa8072"],["sandybrown","#f4a460"],["seagreen","#2e8b57"],["seashell","#fff5ee"],["sienna","#a0522d"],["silver","#c0c0c0"],["skyblue","#87ceeb"],["slateblue","#6a5acd"],["slategray","#708090"],["snow","#fffafa"],["springgreen","#00ff7f"],["steelblue","#4682b4"],["tan","#d2b48c"],["teal","#008080"],["thistle","#d8bfd8"],["tomato","#ff6347"],["turquoise","#40e0d0"],["violet","#ee82ee"],["wheat","#f5deb3"],["white","#ffffff"],["whitesmoke","#f5f5f5"],["yellow","#ffff00"],["yellowgreen","#9acd32"]]);function _e(n){let e=ge.get(n);return e||n}function St(n,e){return 1/(1+Math.exp(-n/e))}const Qn=Object.freeze(Object.defineProperty({__proto__:null,colorMap:ge,colorNameToHex:_e,sigmoid:St},Symbol.toStringTag,{value:"Module"})),Pt=1.618;let me=class G{constructor(e,t,r={}){I(this,"parentGraph");I(this,"id");I(this,"metadata");I(this,"mesh");I(this,"label");I(this,"meshDragBehavior");I(this,"dragging",!1);I(this,"nodeMeshConfig");I(this,"pinOnDrag");if(this.parentGraph=e,this.id=t,this.metadata=r.metadata??{},this.nodeMeshConfig=this.parentGraph.config.nodeMeshOpts,this.parentGraph.graphEngine.addNode(this),this.mesh=this.nodeMeshConfig.nodeMeshFactory(this,this.parentGraph,this.nodeMeshConfig),this.mesh.metadata={parentNode:this},this.nodeMeshConfig.label&&(this.label=G.createLabel(this.id.toString(),this,this.parentGraph),this.label.parent=this.mesh,this.label.position.y+=1),this.pinOnDrag=r.pinOnDrag??!0,this.meshDragBehavior=new S.SixDofDragBehavior,this.mesh.addBehavior(this.meshDragBehavior),this.meshDragBehavior.onDragStartObservable.add(()=>{this.parentGraph.running=!0,this.dragging=!0}),this.meshDragBehavior.onDragEndObservable.add(()=>{this.parentGraph.running=!0,this.pinOnDrag&&this.pin(),this.dragging=!1}),this.meshDragBehavior.onPositionChangedObservable.add(i=>{this.parentGraph.running=!0,this.parentGraph.graphEngine.setNodePosition(this,i.position)}),this.mesh.actionManager=new S.ActionManager(this.parentGraph.scene),this.parentGraph.fetchNodes&&this.parentGraph.fetchEdges){const{fetchNodes:i,fetchEdges:a}=this.parentGraph;this.mesh.actionManager.registerAction(new S.ExecuteCodeAction({trigger:S.ActionManager.OnDoublePickTrigger},()=>{this.parentGraph.running=!0;const u=a(this,this.parentGraph),d=new Set;u.forEach(f=>{d.add(f.source),d.add(f.target)}),d.delete(this.id),i(d,this.parentGraph).forEach(f=>this.parentGraph.addNode(f.id,f.metadata)),u.forEach(f=>this.parentGraph.addEdge(f.source,f.target,f.metadata))}))}}getDeltaPos(){let e=this.parentGraph.graphEngine.getNodePosition(this);const t=Math.abs(this.mesh.position.x-e.x),r=Math.abs(this.mesh.position.y-e.y),i=Math.abs(this.mesh.position.z-(e.z??0));return Math.sqrt(t*t+r*r+i*i)}update(){if(this.dragging)return;const e={type:"node-update-before",node:this,doUpdate:!0};if(this.parentGraph.nodeObservable.notifyObservers(e),e.doUpdate){let t=this.parentGraph.graphEngine.getNodePosition(this);this.mesh.position.x=t.x,this.mesh.position.y=t.y,t.z&&(this.mesh.position.z=t.z)}this.parentGraph.nodeObservable.notifyObservers({type:"node-update-after",node:this})}pin(){this.parentGraph.graphEngine.pin(this)}unpin(){this.parentGraph.graphEngine.unpin(this)}static get list(){return Vn}static create(e,t,r={}){const i=G.list.get(t);if(i)return i;const a=new G(e,t,r);return G.list.set(t,a),a}static defaultNodeMeshFactory(e,t,r){return t.meshCache.get("default-mesh",()=>{let i;switch(r.shape){case"box":i=G.createBox(e,t,r);break;case"sphere":i=G.createSphere(e,t,r);break;case"cylinder":i=G.createCylinder(e,t,r);break;case"cone":i=G.createCone(e,t,r);break;case"capsule":i=G.createCapsule(e,t,r);break;case"torus":i=G.createTorus(e,t,r);break;case"torus-knot":i=G.createTorusKnot(e,t,r);break;case"tetrahedron":i=G.createPolyhedron(0,e,t,r);break;case"octahedron":i=G.createPolyhedron(1,e,t,r);break;case"dodecahedron":i=G.createPolyhedron(2,e,t,r);break;case"icosahedron":i=G.createPolyhedron(3,e,t,r);break;case"rhombicuboctahedron":i=G.createPolyhedron(4,e,t,r);break;case"triangular_prism":i=G.createPolyhedron(5,e,t,r);break;case"pentagonal_prism":i=G.createPolyhedron(6,e,t,r);break;case"hexagonal_prism":i=G.createPolyhedron(7,e,t,r);break;case"square_pyramid":i=G.createPolyhedron(8,e,t,r);break;case"pentagonal_pyramid":i=G.createPolyhedron(9,e,t,r);break;case"triangular_dipyramid":i=G.createPolyhedron(10,e,t,r);break;case"pentagonal_dipyramid":i=G.createPolyhedron(11,e,t,r);break;case"elongated_square_dypyramid":i=G.createPolyhedron(12,e,t,r);break;case"elongated_pentagonal_dipyramid":i=G.createPolyhedron(13,e,t,r);break;case"elongated_pentagonal_cupola":i=G.createPolyhedron(14,e,t,r);break;case"goldberg":i=G.createGoldberg(e,t,r);break;case"icosphere":i=G.createIcoSphere(e,t,r);break;case"geodesic":i=G.createGeodesic(e,t,r);break;default:throw new TypeError(`unknown shape: ${r.shape}`)}let a=new S.StandardMaterial("defaultMaterial"),u=r.color;return a.diffuseColor=S.Color3.FromHexString(_e(u)),a.wireframe=r.wireframe,a.freeze(),i.visibility=r.opacity,i.material=a,i})}static createBox(e,t,r){return S.MeshBuilder.CreateBox("box",{size:r.size})}static createSphere(e,t,r){return S.MeshBuilder.CreateSphere("sphere",{diameter:r.size})}static createCylinder(e,t,r){return S.MeshBuilder.CreateCylinder("cylinder",{height:r.size*Pt,diameter:r.size})}static createCone(e,t,r){return S.MeshBuilder.CreateCylinder("cylinder",{height:r.size*Pt,diameterTop:0,diameterBottom:r.size})}static createCapsule(e,t,r){return S.MeshBuilder.CreateCapsule("capsule",{})}static createTorus(e,t,r){return S.MeshBuilder.CreateTorus("torus",{})}static createTorusKnot(e,t,r){return S.MeshBuilder.CreateTorusKnot("tk",{radius:r.size*.3,tube:r.size*.2,radialSegments:128})}static createPolyhedron(e,t,r,i){return S.MeshBuilder.CreatePolyhedron("polyhedron",{size:i.size,type:e})}static createGoldberg(e,t,r){return S.MeshBuilder.CreateGoldberg("goldberg",{size:r.size})}static createIcoSphere(e,t,r){return S.MeshBuilder.CreateIcoSphere("icosphere",{radius:r.size*.75})}static createGeodesic(e,t,r){return S.MeshBuilder.CreateGeodesic("geodesic",{size:r.size})}static createLabel(e,t,r){const a="48px Verdana",s=.006944444444444444,l=new S.DynamicTexture("DynamicTexture",64,r.scene).getContext();l.font=a;const g=l.measureText(e).width+8,b=g*s,y=new S.DynamicTexture("DynamicTexture",{width:g,height:72},r.scene,!1),v=new S.StandardMaterial("mat",r.scene);v.specularColor=S.Color3.Black(),y.hasAlpha=!0;const w=y.getContext();w.fillStyle="white",w.beginPath();const m=0,c=0,M=[20,20,20,20],E=g,N=72;w.moveTo(m+M[0],c),w.lineTo(m+E-M[1],c),w.arc(m+E-M[1],c+M[1],M[1],3*Math.PI/2,Math.PI*2),w.lineTo(m+E,c+N-M[2]),w.arc(m+E-M[2],c+N-M[2],M[2],0,Math.PI/2),w.lineTo(m+M[3],c+N),w.arc(m+M[3],c+N-M[3],M[3],Math.PI/2,Math.PI),w.lineTo(m,c+M[0]),w.arc(m+M[0],c+M[0],M[0],Math.PI,3*Math.PI/2),w.closePath(),w.fill(),y.drawText(e,null,null,a,"#000000","transparent",!0),v.opacityTexture=y,v.emissiveTexture=y,v.disableLighting=!0;const _=S.MeshBuilder.CreatePlane("plane",{width:b,height:.5},r.scene);return _.material=v,_.billboardMode=7,_}};const Vn=new Map;class ae{constructor(e,t,r,i={}){I(this,"parentGraph");I(this,"srcId");I(this,"dstId");I(this,"dstNode");I(this,"srcNode");I(this,"metadata");I(this,"mesh");I(this,"edgeMeshConfig");this.parentGraph=e,this.srcId=t,this.dstId=r,this.metadata=i.metadata??{};const a=me.list.get(t);if(!a)throw new Error(`Attempting to create edge '${t}->${r}', Node '${t}' hasn't been created yet.`);const u=me.list.get(r);if(!u)throw new Error(`Attempting to create edge '${t}->${r}', Node '${r}' hasn't been created yet.`);this.srcNode=a,this.dstNode=u,this.edgeMeshConfig=this.parentGraph.config.edgeMeshOpts,this.parentGraph.graphEngine.addEdge(this),this.mesh=this.edgeMeshConfig.edgeMeshFactory(this,this.parentGraph,this.edgeMeshConfig),this.mesh.metadata={},this.mesh.metadata.parentEdge=this}update(){let e=this.parentGraph.graphEngine.getEdgePosition(this);const t={type:"edge-update-before",edge:this,doUpdate:!0};this.parentGraph.edgeObservable.notifyObservers(t),t.doUpdate&&this.mesh.setPoints([[e.src.x,e.src.y,e.src.z??0,e.dst.x,e.dst.y,e.dst.z??0]]),this.parentGraph.edgeObservable.notifyObservers({type:"edge-update-after",edge:this})}static get list(){return Xn}static create(e,t,r,i={}){const a=ae.list.get(t,r);if(a)return a;const u=new ae(e,t,r,i);return ae.list.set(t,r,u),u}static defaultEdgeMeshFactory(e,t,r){switch(r.type){case"plain":return ae.createPlainLine(e,t,r);case"arrow":return ae.createArrowLine(e,t,r);case"moving":return ae.createMovingLine(e,t,r);default:throw new TypeError(`Unknown Edge type: '${r.type}'`)}}static createPlainLine(e,t,r){return S.CreateGreasedLine("edge-plain",{points:[0,0,0,1,1,1]},{color:S.Color3.FromHexString(_e(r.color))})}static createArrowLine(e,t,r){return e.parentGraph.edgeObservable.add(i=>{i.doUpdate=!1;const a=e.srcNode.mesh,u=e.dstNode.mesh,d=new S.Ray(e.srcNode.mesh.position,e.dstNode.mesh.position);d.position=u.position,d.direction=u.position.subtract(a.position);const s=d.intersectsMeshes([u]),f=d.intersectsMeshes([a]);if(s.length&&f.length){const l=s[0].pickedPoint,g=f[0].pickedPoint,b=.1,y=3,v=l.clone().normalize().multiplyByFloats(b*y,b*y,b*y),w=l.subtract(v);e.mesh.setPoints([[w.x,w.y,w.z,g.x,g.y,g.z]]);const m=S.GreasedLineTools.GetArrowCap(w,d.direction,b/3,4,4);S.CreateGreasedLine("lines",{points:m.points,widths:m.widths,widthDistribution:S.GreasedLineMeshWidthDistribution.WIDTH_DISTRIBUTION_START,instance:e.mesh})}}),S.CreateGreasedLine("edge-arrow",{points:[0,0,0,1,1,1]},{color:S.Color3.FromHexString(_e(r.color))})}static createMovingLine(e,t,r){const i=S.Color3.FromHexString(_e(r.movingLineOpts.baseColor)),a=S.Color3.FromHexString(_e(r.color)),u=Math.floor(i.r*255),d=Math.floor(i.g*255),s=Math.floor(i.b*255),f=Math.floor(a.r*255),l=Math.floor(a.g*255),g=Math.floor(a.b*255),b=new Uint8Array([u,d,s,f,l,g]),y=new S.RawTexture(b,b.length/3,1,S.Engine.TEXTUREFORMAT_RGB,t.scene,!1,!0,S.Engine.TEXTURE_NEAREST_NEAREST);y.wrapU=S.RawTexture.WRAP_ADDRESSMODE,y.name="blue-white-texture";const v=S.CreateGreasedLine("edge-moving",{points:[0,0,0,1,1,1]},{width:r.movingLineOpts.width,colorMode:S.GreasedLineMeshColorMode.COLOR_MODE_MULTIPLY});let w=v.material;return w.emissiveTexture=y,w.disableLighting=!0,y.uScale=5,t.scene.onBeforeRenderObservable.add(()=>{y.uOffset+=.04*t.scene.getAnimationRatio()}),v}}class Wn{constructor(){I(this,"map",new Map)}has(e,t){const r=this.map.get(e);return r?r.has(t):!1}set(e,t,r){let i=this.map.get(e);if(i||(i=new Map,this.map.set(e,i)),i.has(t))throw new Error("Attempting to create duplicate Edge");i.set(t,r)}get(e,t){let r=this.map.get(e);if(r)return r.get(t)}get size(){let e=0;for(let t of this.map.values())e+=t.size;return e}}const Xn=new Wn;var ke=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function et(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var tt=function(e){Yn(e);var t=Kn(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e};function Kn(n){var e=Object.create(null);return{on:function(t,r,i){if(typeof r!="function")throw new Error("callback is expected to be a function");var a=e[t];return a||(a=e[t]=[]),a.push({callback:r,ctx:i}),n},off:function(t,r){var i=typeof t>"u";if(i)return e=Object.create(null),n;if(e[t]){var a=typeof r!="function";if(a)delete e[t];else for(var u=e[t],d=0;d<u.length;++d)u[d].callback===r&&u.splice(d,1)}return n},fire:function(t){var r=e[t];if(!r)return n;var i;arguments.length>1&&(i=Array.prototype.splice.call(arguments,1));for(var a=0;a<r.length;++a){var u=r[a];u.callback.apply(u.ctx,i)}return n}}}function Yn(n){if(!n)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],t=0;t<e.length;++t)if(n.hasOwnProperty(e[t]))throw new Error("Subject cannot be eventified, since it already has property '"+e[t]+"'")}var Jn=er,Zn=tt;function er(n){if(n=n||{},"uniqueLinkId"in n&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),n.multigraph=n.uniqueLinkId),n.multigraph===void 0&&(n.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,t=new Map,r={},i=0,a=n.multigraph?N:E,u=[],d=$,s=$,f=$,l=$,g={version:20,addNode:w,addLink:M,removeLink:L,removeNode:c,getNode:m,getNodeCount:_,getLinkCount:T,getEdgeCount:T,getLinksCount:T,getNodesCount:_,getLinks:A,forEachNode:ue,forEachLinkedNode:fe,forEachLink:j,beginUpdate:f,endUpdate:l,clear:Q,hasLink:H,hasNode:m,getLink:H};return Zn(g),b(),g;function b(){var P=g.on;g.on=z;function z(){return g.beginUpdate=f=V,g.endUpdate=l=oe,d=y,s=v,g.on=P,P.apply(g,arguments)}}function y(P,z){u.push({link:P,changeType:z})}function v(P,z){u.push({node:P,changeType:z})}function w(P,z){if(P===void 0)throw new Error("Invalid node identifier");f();var F=m(P);return F?(F.data=z,s(F,"update")):(F=new tr(P,z),s(F,"add")),e.set(P,F),l(),F}function m(P){return e.get(P)}function c(P){var z=m(P);if(!z)return!1;f();var F=z.links;return F&&(F.forEach(U),z.links=null),e.delete(P),s(z,"remove"),l(),!0}function M(P,z,F){f();var O=m(P)||w(P),Y=m(z)||w(z),K=a(P,z,F),ee=t.has(K.id);return t.set(K.id,K),It(O,K),P!==z&&It(Y,K),d(K,ee?"update":"add"),l(),K}function E(P,z,F){var O=qe(P,z),Y=t.get(O);return Y?(Y.data=F,Y):new zt(P,z,F,O)}function N(P,z,F){var O=qe(P,z),Y=r.hasOwnProperty(O);if(Y||H(P,z)){Y||(r[O]=0);var K="@"+ ++r[O];O=qe(P+K,z+K)}return new zt(P,z,F,O)}function _(){return e.size}function T(){return t.size}function A(P){var z=m(P);return z?z.links:null}function L(P,z){return z!==void 0&&(P=H(P,z)),U(P)}function U(P){if(!P||!t.get(P.id))return!1;f(),t.delete(P.id);var z=m(P.fromId),F=m(P.toId);return z&&z.links.delete(P),F&&F.links.delete(P),d(P,"remove"),l(),!0}function H(P,z){if(!(P===void 0||z===void 0))return t.get(qe(P,z))}function Q(){f(),ue(function(P){c(P.id)}),l()}function j(P){if(typeof P=="function")for(var z=t.values(),F=z.next();!F.done;){if(P(F.value))return!0;F=z.next()}}function fe(P,z,F){var O=m(P);if(O&&O.links&&typeof z=="function")return F?x(O.links,P,z):C(O.links,P,z)}function C(P,z,F){for(var O,Y=P.values(),K=Y.next();!K.done;){var ee=K.value,He=ee.fromId===z?ee.toId:ee.fromId;if(O=F(e.get(He),ee),O)return!0;K=Y.next()}}function x(P,z,F){for(var O,Y=P.values(),K=Y.next();!K.done;){var ee=K.value;if(ee.fromId===z&&(O=F(e.get(ee.toId),ee),O))return!0;K=Y.next()}}function $(){}function V(){i+=1}function oe(){i-=1,i===0&&u.length>0&&(g.fire("changed",u),u.length=0)}function ue(P){if(typeof P!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+P);for(var z=e.values(),F=z.next();!F.done;){if(P(F.value))return!0;F=z.next()}}}function tr(n,e){this.id=n,this.links=null,this.data=e}function It(n,e){n.links?n.links.add(e):n.links=new Set([e])}function zt(n,e,t,r){this.fromId=n,this.toId=e,this.data=t,this.id=r}function qe(n,e){return n.toString()+"👉 "+e.toString()}const nr=et(Jn);var nt={exports:{}},Te={exports:{}},At=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const rr=At;var Me=function(e){return t;function t(r,i){let a=i&&i.indent||0,u=i&&i.join!==void 0?i.join:`
`,d=Array(a+1).join(" "),s=[];for(let f=0;f<e;++f){let l=rr(f),g=f===0?"":d;s.push(g+r.replace(/{var}/g,l))}return s.join(u)}};const Ot=Me;Te.exports=ir,Te.exports.generateCreateBodyFunctionBody=Lt,Te.exports.getVectorCode=kt,Te.exports.getBodyCode=Ft;function ir(n,e){let t=Lt(n,e),{Body:r}=new Function(t)();return r}function Lt(n,e){return`
${kt(n,e)}
${Ft(n)}
return {Body: Body, Vector: Vector};
`}function Ft(n){let e=Ot(n),t=e("{var}",{join:", "});return`
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
  };`}var ar=Te.exports,ve={exports:{}};const rt=Me,ye=At;ve.exports=or,ve.exports.generateQuadTreeFunctionBody=qt,ve.exports.getInsertStackCode=Ut,ve.exports.getQuadNodeCode=Rt,ve.exports.isSamePosition=Dt,ve.exports.getChildBodyCode=jt,ve.exports.setChildBodyCode=Gt;function or(n){let e=qt(n);return new Function(e)()}function qt(n){let e=rt(n),t=Math.pow(2,n);return`
${Ut()}
${Rt(n)}
${Dt(n)}
${jt(n)}
${Gt(n)}

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

`;function i(d){let s=[],f=Array(d+1).join(" ");for(let l=0;l<n;++l)s.push(f+`if (${ye(l)} > max_${ye(l)}) {`),s.push(f+`  quadIdx = quadIdx + ${Math.pow(2,l)};`),s.push(f+`  min_${ye(l)} = max_${ye(l)};`),s.push(f+`  max_${ye(l)} = node.max_${ye(l)};`),s.push(f+"}");return s.join(`
`)}function a(){let d=Array(11).join(" "),s=[];for(let f=0;f<t;++f)s.push(d+`if (node.quad${f}) {`),s.push(d+`  queue[pushIdx] = node.quad${f};`),s.push(d+"  queueLength += 1;"),s.push(d+"  pushIdx += 1;"),s.push(d+"}");return s.join(`
`)}function u(d){let s=[];for(let f=0;f<t;++f)s.push(`${d}quad${f} = null;`);return s.join(`
`)}}function Dt(n){let e=rt(n);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function Gt(n){var e=Math.pow(2,n);return`
function setChild(node, idx, child) {
  ${t()}
}`;function t(){let r=[];for(let i=0;i<e;++i){let a=i===0?"  ":"  else ";r.push(`${a}if (idx === ${i}) node.quad${i} = child;`)}return r.join(`
`)}}function jt(n){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let t=[],r=Math.pow(2,n);for(let i=0;i<r;++i)t.push(`  if (idx === ${i}) return node.quad${i};`);return t.join(`
`)}}function Rt(n){let e=rt(n),t=Math.pow(2,n);var r=`
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
`;return r;function i(a){let u=[];for(let d=0;d<t;++d)u.push(`${a}quad${d} = null;`);return u.join(`
`)}}function Ut(){return`
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
`}var sr=ve.exports,it={exports:{}};it.exports=fr,it.exports.generateFunctionBody=Ht;const ur=Me;function fr(n){let e=Ht(n);return new Function("bodies","settings","random",e)}function Ht(n){let e=ur(n);return`
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
`}var hr=it.exports,at={exports:{}};const dr=Me;at.exports=cr,at.exports.generateCreateDragForceFunctionBody=Qt;function cr(n){let e=Qt(n);return new Function("options",e)}function Qt(n){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${dr(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var lr=at.exports,ot={exports:{}};const pr=Me;ot.exports=gr,ot.exports.generateCreateSpringForceFunctionBody=Vt;function gr(n){let e=Vt(n);return new Function("options","random",e)}function Vt(n){let e=pr(n);return`
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
`}var vr=ot.exports,st={exports:{}};const yr=Me;st.exports=mr,st.exports.generateIntegratorFunctionBody=Wt;function mr(n){let e=Wt(n);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function Wt(n){let e=yr(n);return`
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
`}var br=st.exports,ut,Xt;function wr(){if(Xt)return ut;Xt=1,ut=n;function n(e,t,r,i){this.from=e,this.to=t,this.length=r,this.coefficient=i}return ut}var ft,Kt;function xr(){if(Kt)return ft;Kt=1,ft=n;function n(e,t){var r;if(e||(e={}),t){for(r in t)if(t.hasOwnProperty(r)){var i=e.hasOwnProperty(r),a=typeof t[r],u=!i||typeof e[r]!==a;u?e[r]=t[r]:a==="object"&&(e[r]=n(e[r],t[r]))}}return e}return ft}var $e={exports:{}},Yt;function _r(){if(Yt)return $e.exports;Yt=1,$e.exports=n,$e.exports.random=n,$e.exports.randomIterator=d;function n(s){var f=typeof s=="number"?s:+new Date;return new e(f)}function e(s){this.seed=s}e.prototype.next=u,e.prototype.nextDouble=a,e.prototype.uniform=a,e.prototype.gaussian=t;function t(){var s,f,l;do f=this.nextDouble()*2-1,l=this.nextDouble()*2-1,s=f*f+l*l;while(s>=1||s===0);return f*Math.sqrt(-2*Math.log(s)/s)}e.prototype.levy=r;function r(){var s=1.5,f=Math.pow(i(1+s)*Math.sin(Math.PI*s/2)/(i((1+s)/2)*s*Math.pow(2,(s-1)/2)),1/s);return this.gaussian()*f/Math.pow(Math.abs(this.gaussian()),1/s)}function i(s){return Math.sqrt(2*Math.PI/s)*Math.pow(1/Math.E*(s+1/(12*s-1/(10*s))),s)}function a(){var s=this.seed;return s=s+2127912214+(s<<12)&4294967295,s=(s^3345072700^s>>>19)&4294967295,s=s+374761393+(s<<5)&4294967295,s=(s+3550635116^s<<9)&4294967295,s=s+4251993797+(s<<3)&4294967295,s=(s^3042594569^s>>>16)&4294967295,this.seed=s,(s&268435455)/268435456}function u(s){return Math.floor(this.nextDouble()*s)}function d(s,f){var l=f||n();if(typeof l.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:b,shuffle:g};function g(){var y,v,w;for(y=s.length-1;y>0;--y)v=l.next(y+1),w=s[v],s[v]=s[y],s[y]=w;return s}function b(y){var v,w,m;for(v=s.length-1;v>0;--v)w=l.next(v+1),m=s[w],s[w]=s[v],s[v]=m,y(m);s.length&&y(s[0])}}return $e.exports}var Jt=Br,Mr=ar,Nr=sr,Cr=hr,Er=lr,Tr=vr,$r=br,Zt={};function Br(n){var e=wr(),t=xr(),r=tt;if(n){if(n.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(n.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}n=t(n,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var i=Zt[n.dimensions];if(!i){var a=n.dimensions;i={Body:Mr(a,n.debug),createQuadTree:Nr(a),createBounds:Cr(a),createDragForce:Er(a),createSpringForce:Tr(a),integrate:$r(a)},Zt[a]=i}var u=i.Body,d=i.createQuadTree,s=i.createBounds,f=i.createDragForce,l=i.createSpringForce,g=i.integrate,b=x=>new u(x),y=_r().random(42),v=[],w=[],m=d(n,y),c=s(v,n,y),M=l(n,y),E=f(n),N=0,_=[],T=new Map,A=0;H("nbody",fe),H("spring",C);var L={bodies:v,quadTree:m,springs:w,settings:n,addForce:H,removeForce:Q,getForces:j,step:function(){for(var x=0;x<_.length;++x)_[x](A);var $=g(v,n.timeStep,n.adaptiveTimeStepWeight);return A+=1,$},addBody:function(x){if(!x)throw new Error("Body is required");return v.push(x),x},addBodyAt:function(x){if(!x)throw new Error("Body position is required");var $=b(x);return v.push($),$},removeBody:function(x){if(x){var $=v.indexOf(x);if(!($<0))return v.splice($,1),v.length===0&&c.reset(),!0}},addSpring:function(x,$,V,oe){if(!x||!$)throw new Error("Cannot add null spring to force simulator");typeof V!="number"&&(V=-1);var ue=new e(x,$,V,oe>=0?oe:-1);return w.push(ue),ue},getTotalMovement:function(){return N},removeSpring:function(x){if(x){var $=w.indexOf(x);if($>-1)return w.splice($,1),!0}},getBestNewBodyPosition:function(x){return c.getBestNewPosition(x)},getBBox:U,getBoundingBox:U,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(x){return x!==void 0?(n.gravity=x,m.options({gravity:x}),this):n.gravity},theta:function(x){return x!==void 0?(n.theta=x,m.options({theta:x}),this):n.theta},random:y};return Sr(n,L),r(L),L;function U(){return c.update(),c.box}function H(x,$){if(T.has(x))throw new Error("Force "+x+" is already added");T.set(x,$),_.push($)}function Q(x){var $=_.indexOf(T.get(x));$<0||(_.splice($,1),T.delete(x))}function j(){return T}function fe(){if(v.length!==0){m.insertBodies(v);for(var x=v.length;x--;){var $=v[x];$.isPinned||($.reset(),m.updateBodyForce($),E.update($))}}}function C(){for(var x=w.length;x--;)M.update(w[x])}}function Sr(n,e){for(var t in n)Pr(n,e,t)}function Pr(n,e,t){if(n.hasOwnProperty(t)&&typeof e[t]!="function"){var r=Number.isFinite(n[t]);r?e[t]=function(i){if(i!==void 0){if(!Number.isFinite(i))throw new Error("Value of "+t+" should be a valid number.");return n[t]=i,e}return n[t]}:e[t]=function(i){return i!==void 0?(n[t]=i,e):n[t]}}}nt.exports=zr,nt.exports.simulator=Jt;var Ir=tt;function zr(n,e){if(!n)throw new Error("Graph structure cannot be undefined");var t=e&&e.createSimulator||Jt,r=t(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var i=n.version>19?fe:j;e&&typeof e.nodeMass=="function"&&(i=e.nodeMass);var a=new Map,u={},d=0,s=r.settings.springTransform||Ar;E(),m();var f=!1,l={step:function(){if(d===0)return g(!0),!0;var C=r.step();l.lastMove=C,l.fire("step");var x=C/d,$=x<=.01;return g($),$},getNodePosition:function(C){return Q(C).pos},setNodePosition:function(C){var x=Q(C);x.setPosition.apply(x,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(C){var x=u[C];if(x)return{from:x.from.pos,to:x.to.pos}},getGraphRect:function(){return r.getBBox()},forEachBody:b,pinNode:function(C,x){var $=Q(C.id);$.isPinned=!!x},isNodePinned:function(C){return Q(C.id).isPinned},dispose:function(){n.off("changed",M),l.fire("disposed")},getBody:w,getSpring:v,getForceVectorLength:y,simulator:r,graph:n,lastMove:0};return Ir(l),l;function g(C){f!==C&&(f=C,c(C))}function b(C){a.forEach(C)}function y(){var C=0,x=0;return b(function($){C+=Math.abs($.force.x),x+=Math.abs($.force.y)}),Math.sqrt(C*C+x*x)}function v(C,x){var $;if(x===void 0)typeof C!="object"?$=C:$=C.id;else{var V=n.hasLink(C,x);if(!V)return;$=V.id}return u[$]}function w(C){return a.get(C)}function m(){n.on("changed",M)}function c(C){l.fire("stable",C)}function M(C){for(var x=0;x<C.length;++x){var $=C[x];$.changeType==="add"?($.node&&N($.node.id),$.link&&T($.link)):$.changeType==="remove"&&($.node&&_($.node),$.link&&A($.link))}d=n.getNodesCount()}function E(){d=0,n.forEachNode(function(C){N(C.id),d+=1}),n.forEachLink(T)}function N(C){var x=a.get(C);if(!x){var $=n.getNode(C);if(!$)throw new Error("initBody() was called with unknown node id");var V=$.position;if(!V){var oe=L($);V=r.getBestNewBodyPosition(oe)}x=r.addBodyAt(V),x.id=C,a.set(C,x),U(C),H($)&&(x.isPinned=!0)}}function _(C){var x=C.id,$=a.get(x);$&&(a.delete(x),r.removeBody($))}function T(C){U(C.fromId),U(C.toId);var x=a.get(C.fromId),$=a.get(C.toId),V=r.addSpring(x,$,C.length);s(C,V),u[C.id]=V}function A(C){var x=u[C.id];if(x){var $=n.getNode(C.fromId),V=n.getNode(C.toId);$&&U($.id),V&&U(V.id),delete u[C.id],r.removeSpring(x)}}function L(C){var x=[];if(!C.links)return x;for(var $=Math.min(C.links.length,2),V=0;V<$;++V){var oe=C.links[V],ue=oe.fromId!==C.id?a.get(oe.fromId):a.get(oe.toId);ue&&ue.pos&&x.push(ue)}return x}function U(C){var x=a.get(C);if(x.mass=i(C),Number.isNaN(x.mass))throw new Error("Node mass should be a number")}function H(C){return C&&(C.isPinned||C.data&&C.data.isPinned)}function Q(C){var x=a.get(C);return x||(N(C),x=a.get(C)),x}function j(C){var x=n.getLinks(C);return x?1+x.length/3:1}function fe(C){var x=n.getLinks(C);return x?1+x.size/3:1}}function Ar(){}var Or=nt.exports;const Lr=et(Or);class Fr{constructor(){I(this,"ngraph");I(this,"ngraphLayout");I(this,"nodeMapping",new Map);I(this,"edgeMapping",new Map);this.ngraph=nr(),this.ngraphLayout=Lr(this.ngraph,{dimensions:3})}async init(){}step(){this.ngraphLayout.step()}addNode(e){const t=this.ngraph.addNode(e.id,{parentNode:e});this.nodeMapping.set(e,t)}addEdge(e){const t=this.ngraph.addLink(e.srcId,e.dstId,{parentEdge:this});this.edgeMapping.set(e,t)}getNodePosition(e){const t=this._getMappedNode(e);return this.ngraphLayout.getNodePosition(t.id)}setNodePosition(e,t){const r=this._getMappedNode(e),i=this.ngraphLayout.getNodePosition(r.id);i.x=t.x,i.y=t.y,i.z=t.z}getEdgePosition(e){const t=this._getMappedEdge(e),r=this.ngraphLayout.getLinkPosition(t.id);return{src:{x:r.from.x,y:r.from.y,z:r.from.z},dst:{x:r.to.x,y:r.to.y,z:r.to.z}}}get nodes(){return this.nodeMapping.keys()}get edges(){return this.edgeMapping.keys()}pin(e){const t=this._getMappedNode(e);this.ngraphLayout.pinNode(t,!0)}unpin(e){const t=this._getMappedNode(e);this.ngraphLayout.pinNode(t,!1)}_getMappedNode(e){const t=this.nodeMapping.get(e);if(!t)throw new Error("Internal error: Node not found in NGraphEngine");return t}_getMappedEdge(e){const t=this.edgeMapping.get(e);if(!t)throw new Error("Internal error: Edge not found in NGraphEngine");return t}}function kr(n,e,t){var r,i=1;n==null&&(n=0),e==null&&(e=0),t==null&&(t=0);function a(){var u,d=r.length,s,f=0,l=0,g=0;for(u=0;u<d;++u)s=r[u],f+=s.x||0,l+=s.y||0,g+=s.z||0;for(f=(f/d-n)*i,l=(l/d-e)*i,g=(g/d-t)*i,u=0;u<d;++u)s=r[u],f&&(s.x-=f),l&&(s.y-=l),g&&(s.z-=g)}return a.initialize=function(u){r=u},a.x=function(u){return arguments.length?(n=+u,a):n},a.y=function(u){return arguments.length?(e=+u,a):e},a.z=function(u){return arguments.length?(t=+u,a):t},a.strength=function(u){return arguments.length?(i=+u,a):i},a}function qr(n){const e=+this._x.call(null,n);return en(this.cover(e),e,n)}function en(n,e,t){if(isNaN(e))return n;var r,i=n._root,a={data:t},u=n._x0,d=n._x1,s,f,l,g,b;if(!i)return n._root=a,n;for(;i.length;)if((l=e>=(s=(u+d)/2))?u=s:d=s,r=i,!(i=i[g=+l]))return r[g]=a,n;if(f=+n._x.call(null,i.data),e===f)return a.next=i,r?r[g]=a:n._root=a,n;do r=r?r[g]=new Array(2):n._root=new Array(2),(l=e>=(s=(u+d)/2))?u=s:d=s;while((g=+l)==(b=+(f>=s)));return r[b]=i,r[g]=a,n}function Dr(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e);let r=1/0,i=-1/0;for(let a=0,u;a<e;++a)isNaN(u=+this._x.call(null,n[a]))||(t[a]=u,u<r&&(r=u),u>i&&(i=u));if(r>i)return this;this.cover(r).cover(i);for(let a=0;a<e;++a)en(this,t[a],n[a]);return this}function Gr(n){if(isNaN(n=+n))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(n))+1;else{for(var r=t-e||1,i=this._root,a,u;e>n||n>=t;)switch(u=+(n<e),a=new Array(2),a[u]=i,i=a,r*=2,u){case 0:t=e+r;break;case 1:e=t-r;break}this._root&&this._root.length&&(this._root=i)}return this._x0=e,this._x1=t,this}function jr(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function Rr(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function he(n,e,t){this.node=n,this.x0=e,this.x1=t}function Ur(n,e){var t,r=this._x0,i,a,u=this._x1,d=[],s=this._root,f,l;for(s&&d.push(new he(s,r,u)),e==null?e=1/0:(r=n-e,u=n+e);f=d.pop();)if(!(!(s=f.node)||(i=f.x0)>u||(a=f.x1)<r))if(s.length){var g=(i+a)/2;d.push(new he(s[1],g,a),new he(s[0],i,g)),(l=+(n>=g))&&(f=d[d.length-1],d[d.length-1]=d[d.length-1-l],d[d.length-1-l]=f)}else{var b=Math.abs(n-+this._x.call(null,s.data));b<e&&(e=b,r=n-b,u=n+b,t=s.data)}return t}function Hr(n){if(isNaN(s=+this._x.call(null,n)))return this;var e,t=this._root,r,i,a,u=this._x0,d=this._x1,s,f,l,g,b;if(!t)return this;if(t.length)for(;;){if((l=s>=(f=(u+d)/2))?u=f:d=f,e=t,!(t=t[g=+l]))return this;if(!t.length)break;e[g+1&1]&&(r=e,b=g)}for(;t.data!==n;)if(i=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,i?(a?i.next=a:delete i.next,this):e?(a?e[g]=a:delete e[g],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(r?r[b]=t:this._root=t),this):(this._root=a,this)}function Qr(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function Vr(){return this._root}function Wr(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function Xr(n){var e=[],t,r=this._root,i,a,u;for(r&&e.push(new he(r,this._x0,this._x1));t=e.pop();)if(!n(r=t.node,a=t.x0,u=t.x1)&&r.length){var d=(a+u)/2;(i=r[1])&&e.push(new he(i,d,u)),(i=r[0])&&e.push(new he(i,a,d))}return this}function Kr(n){var e=[],t=[],r;for(this._root&&e.push(new he(this._root,this._x0,this._x1));r=e.pop();){var i=r.node;if(i.length){var a,u=r.x0,d=r.x1,s=(u+d)/2;(a=i[0])&&e.push(new he(a,u,s)),(a=i[1])&&e.push(new he(a,s,d))}t.push(r)}for(;r=t.pop();)n(r.node,r.x0,r.x1);return this}function Yr(n){return n[0]}function Jr(n){return arguments.length?(this._x=n,this):this._x}function tn(n,e){var t=new ht(e??Yr,NaN,NaN);return n==null?t:t.addAll(n)}function ht(n,e,t){this._x=n,this._x0=e,this._x1=t,this._root=void 0}function nn(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var re=tn.prototype=ht.prototype;re.copy=function(){var n=new ht(this._x,this._x0,this._x1),e=this._root,t,r;if(!e)return n;if(!e.length)return n._root=nn(e),n;for(t=[{source:e,target:n._root=new Array(2)}];e=t.pop();)for(var i=0;i<2;++i)(r=e.source[i])&&(r.length?t.push({source:r,target:e.target[i]=new Array(2)}):e.target[i]=nn(r));return n},re.add=qr,re.addAll=Dr,re.cover=Gr,re.data=jr,re.extent=Rr,re.find=Ur,re.remove=Hr,re.removeAll=Qr,re.root=Vr,re.size=Wr,re.visit=Xr,re.visitAfter=Kr,re.x=Jr;function Zr(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return rn(this.cover(e,t),e,t,n)}function rn(n,e,t,r){if(isNaN(e)||isNaN(t))return n;var i,a=n._root,u={data:r},d=n._x0,s=n._y0,f=n._x1,l=n._y1,g,b,y,v,w,m,c,M;if(!a)return n._root=u,n;for(;a.length;)if((w=e>=(g=(d+f)/2))?d=g:f=g,(m=t>=(b=(s+l)/2))?s=b:l=b,i=a,!(a=a[c=m<<1|w]))return i[c]=u,n;if(y=+n._x.call(null,a.data),v=+n._y.call(null,a.data),e===y&&t===v)return u.next=a,i?i[c]=u:n._root=u,n;do i=i?i[c]=new Array(4):n._root=new Array(4),(w=e>=(g=(d+f)/2))?d=g:f=g,(m=t>=(b=(s+l)/2))?s=b:l=b;while((c=m<<1|w)===(M=(v>=b)<<1|y>=g));return i[M]=a,i[c]=u,n}function ei(n){var e,t,r=n.length,i,a,u=new Array(r),d=new Array(r),s=1/0,f=1/0,l=-1/0,g=-1/0;for(t=0;t<r;++t)isNaN(i=+this._x.call(null,e=n[t]))||isNaN(a=+this._y.call(null,e))||(u[t]=i,d[t]=a,i<s&&(s=i),i>l&&(l=i),a<f&&(f=a),a>g&&(g=a));if(s>l||f>g)return this;for(this.cover(s,f).cover(l,g),t=0;t<r;++t)rn(this,u[t],d[t],n[t]);return this}function ti(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,r=this._y0,i=this._x1,a=this._y1;if(isNaN(t))i=(t=Math.floor(n))+1,a=(r=Math.floor(e))+1;else{for(var u=i-t||1,d=this._root,s,f;t>n||n>=i||r>e||e>=a;)switch(f=(e<r)<<1|n<t,s=new Array(4),s[f]=d,d=s,u*=2,f){case 0:i=t+u,a=r+u;break;case 1:t=i-u,a=r+u;break;case 2:i=t+u,r=a-u;break;case 3:t=i-u,r=a-u;break}this._root&&this._root.length&&(this._root=d)}return this._x0=t,this._y0=r,this._x1=i,this._y1=a,this}function ni(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function ri(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function te(n,e,t,r,i){this.node=n,this.x0=e,this.y0=t,this.x1=r,this.y1=i}function ii(n,e,t){var r,i=this._x0,a=this._y0,u,d,s,f,l=this._x1,g=this._y1,b=[],y=this._root,v,w;for(y&&b.push(new te(y,i,a,l,g)),t==null?t=1/0:(i=n-t,a=e-t,l=n+t,g=e+t,t*=t);v=b.pop();)if(!(!(y=v.node)||(u=v.x0)>l||(d=v.y0)>g||(s=v.x1)<i||(f=v.y1)<a))if(y.length){var m=(u+s)/2,c=(d+f)/2;b.push(new te(y[3],m,c,s,f),new te(y[2],u,c,m,f),new te(y[1],m,d,s,c),new te(y[0],u,d,m,c)),(w=(e>=c)<<1|n>=m)&&(v=b[b.length-1],b[b.length-1]=b[b.length-1-w],b[b.length-1-w]=v)}else{var M=n-+this._x.call(null,y.data),E=e-+this._y.call(null,y.data),N=M*M+E*E;if(N<t){var _=Math.sqrt(t=N);i=n-_,a=e-_,l=n+_,g=e+_,r=y.data}}return r}function ai(n){if(isNaN(l=+this._x.call(null,n))||isNaN(g=+this._y.call(null,n)))return this;var e,t=this._root,r,i,a,u=this._x0,d=this._y0,s=this._x1,f=this._y1,l,g,b,y,v,w,m,c;if(!t)return this;if(t.length)for(;;){if((v=l>=(b=(u+s)/2))?u=b:s=b,(w=g>=(y=(d+f)/2))?d=y:f=y,e=t,!(t=t[m=w<<1|v]))return this;if(!t.length)break;(e[m+1&3]||e[m+2&3]||e[m+3&3])&&(r=e,c=m)}for(;t.data!==n;)if(i=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,i?(a?i.next=a:delete i.next,this):e?(a?e[m]=a:delete e[m],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(r?r[c]=t:this._root=t),this):(this._root=a,this)}function oi(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function si(){return this._root}function ui(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function fi(n){var e=[],t,r=this._root,i,a,u,d,s;for(r&&e.push(new te(r,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(r=t.node,a=t.x0,u=t.y0,d=t.x1,s=t.y1)&&r.length){var f=(a+d)/2,l=(u+s)/2;(i=r[3])&&e.push(new te(i,f,l,d,s)),(i=r[2])&&e.push(new te(i,a,l,f,s)),(i=r[1])&&e.push(new te(i,f,u,d,l)),(i=r[0])&&e.push(new te(i,a,u,f,l))}return this}function hi(n){var e=[],t=[],r;for(this._root&&e.push(new te(this._root,this._x0,this._y0,this._x1,this._y1));r=e.pop();){var i=r.node;if(i.length){var a,u=r.x0,d=r.y0,s=r.x1,f=r.y1,l=(u+s)/2,g=(d+f)/2;(a=i[0])&&e.push(new te(a,u,d,l,g)),(a=i[1])&&e.push(new te(a,l,d,s,g)),(a=i[2])&&e.push(new te(a,u,g,l,f)),(a=i[3])&&e.push(new te(a,l,g,s,f))}t.push(r)}for(;r=t.pop();)n(r.node,r.x0,r.y0,r.x1,r.y1);return this}function di(n){return n[0]}function ci(n){return arguments.length?(this._x=n,this):this._x}function li(n){return n[1]}function pi(n){return arguments.length?(this._y=n,this):this._y}function an(n,e,t){var r=new dt(e??di,t??li,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function dt(n,e,t,r,i,a){this._x=n,this._y=e,this._x0=t,this._y0=r,this._x1=i,this._y1=a,this._root=void 0}function on(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var ne=an.prototype=dt.prototype;ne.copy=function(){var n=new dt(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,r;if(!e)return n;if(!e.length)return n._root=on(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var i=0;i<4;++i)(r=e.source[i])&&(r.length?t.push({source:r,target:e.target[i]=new Array(4)}):e.target[i]=on(r));return n},ne.add=Zr,ne.addAll=ei,ne.cover=ti,ne.data=ni,ne.extent=ri,ne.find=ii,ne.remove=ai,ne.removeAll=oi,ne.root=si,ne.size=ui,ne.visit=fi,ne.visitAfter=hi,ne.x=ci,ne.y=pi;function gi(n){const e=+this._x.call(null,n),t=+this._y.call(null,n),r=+this._z.call(null,n);return sn(this.cover(e,t,r),e,t,r,n)}function sn(n,e,t,r,i){if(isNaN(e)||isNaN(t)||isNaN(r))return n;var a,u=n._root,d={data:i},s=n._x0,f=n._y0,l=n._z0,g=n._x1,b=n._y1,y=n._z1,v,w,m,c,M,E,N,_,T,A,L;if(!u)return n._root=d,n;for(;u.length;)if((N=e>=(v=(s+g)/2))?s=v:g=v,(_=t>=(w=(f+b)/2))?f=w:b=w,(T=r>=(m=(l+y)/2))?l=m:y=m,a=u,!(u=u[A=T<<2|_<<1|N]))return a[A]=d,n;if(c=+n._x.call(null,u.data),M=+n._y.call(null,u.data),E=+n._z.call(null,u.data),e===c&&t===M&&r===E)return d.next=u,a?a[A]=d:n._root=d,n;do a=a?a[A]=new Array(8):n._root=new Array(8),(N=e>=(v=(s+g)/2))?s=v:g=v,(_=t>=(w=(f+b)/2))?f=w:b=w,(T=r>=(m=(l+y)/2))?l=m:y=m;while((A=T<<2|_<<1|N)===(L=(E>=m)<<2|(M>=w)<<1|c>=v));return a[L]=u,a[A]=d,n}function vi(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e),r=new Float64Array(e),i=new Float64Array(e);let a=1/0,u=1/0,d=1/0,s=-1/0,f=-1/0,l=-1/0;for(let g=0,b,y,v,w;g<e;++g)isNaN(y=+this._x.call(null,b=n[g]))||isNaN(v=+this._y.call(null,b))||isNaN(w=+this._z.call(null,b))||(t[g]=y,r[g]=v,i[g]=w,y<a&&(a=y),y>s&&(s=y),v<u&&(u=v),v>f&&(f=v),w<d&&(d=w),w>l&&(l=w));if(a>s||u>f||d>l)return this;this.cover(a,u,d).cover(s,f,l);for(let g=0;g<e;++g)sn(this,t[g],r[g],i[g],n[g]);return this}function yi(n,e,t){if(isNaN(n=+n)||isNaN(e=+e)||isNaN(t=+t))return this;var r=this._x0,i=this._y0,a=this._z0,u=this._x1,d=this._y1,s=this._z1;if(isNaN(r))u=(r=Math.floor(n))+1,d=(i=Math.floor(e))+1,s=(a=Math.floor(t))+1;else{for(var f=u-r||1,l=this._root,g,b;r>n||n>=u||i>e||e>=d||a>t||t>=s;)switch(b=(t<a)<<2|(e<i)<<1|n<r,g=new Array(8),g[b]=l,l=g,f*=2,b){case 0:u=r+f,d=i+f,s=a+f;break;case 1:r=u-f,d=i+f,s=a+f;break;case 2:u=r+f,i=d-f,s=a+f;break;case 3:r=u-f,i=d-f,s=a+f;break;case 4:u=r+f,d=i+f,a=s-f;break;case 5:r=u-f,d=i+f,a=s-f;break;case 6:u=r+f,i=d-f,a=s-f;break;case 7:r=u-f,i=d-f,a=s-f;break}this._root&&this._root.length&&(this._root=l)}return this._x0=r,this._y0=i,this._z0=a,this._x1=u,this._y1=d,this._z1=s,this}function mi(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function bi(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function R(n,e,t,r,i,a,u){this.node=n,this.x0=e,this.y0=t,this.z0=r,this.x1=i,this.y1=a,this.z1=u}function wi(n,e,t,r){var i,a=this._x0,u=this._y0,d=this._z0,s,f,l,g,b,y,v=this._x1,w=this._y1,m=this._z1,c=[],M=this._root,E,N;for(M&&c.push(new R(M,a,u,d,v,w,m)),r==null?r=1/0:(a=n-r,u=e-r,d=t-r,v=n+r,w=e+r,m=t+r,r*=r);E=c.pop();)if(!(!(M=E.node)||(s=E.x0)>v||(f=E.y0)>w||(l=E.z0)>m||(g=E.x1)<a||(b=E.y1)<u||(y=E.z1)<d))if(M.length){var _=(s+g)/2,T=(f+b)/2,A=(l+y)/2;c.push(new R(M[7],_,T,A,g,b,y),new R(M[6],s,T,A,_,b,y),new R(M[5],_,f,A,g,T,y),new R(M[4],s,f,A,_,T,y),new R(M[3],_,T,l,g,b,A),new R(M[2],s,T,l,_,b,A),new R(M[1],_,f,l,g,T,A),new R(M[0],s,f,l,_,T,A)),(N=(t>=A)<<2|(e>=T)<<1|n>=_)&&(E=c[c.length-1],c[c.length-1]=c[c.length-1-N],c[c.length-1-N]=E)}else{var L=n-+this._x.call(null,M.data),U=e-+this._y.call(null,M.data),H=t-+this._z.call(null,M.data),Q=L*L+U*U+H*H;if(Q<r){var j=Math.sqrt(r=Q);a=n-j,u=e-j,d=t-j,v=n+j,w=e+j,m=t+j,i=M.data}}return i}function xi(n){if(isNaN(b=+this._x.call(null,n))||isNaN(y=+this._y.call(null,n))||isNaN(v=+this._z.call(null,n)))return this;var e,t=this._root,r,i,a,u=this._x0,d=this._y0,s=this._z0,f=this._x1,l=this._y1,g=this._z1,b,y,v,w,m,c,M,E,N,_,T;if(!t)return this;if(t.length)for(;;){if((M=b>=(w=(u+f)/2))?u=w:f=w,(E=y>=(m=(d+l)/2))?d=m:l=m,(N=v>=(c=(s+g)/2))?s=c:g=c,e=t,!(t=t[_=N<<2|E<<1|M]))return this;if(!t.length)break;(e[_+1&7]||e[_+2&7]||e[_+3&7]||e[_+4&7]||e[_+5&7]||e[_+6&7]||e[_+7&7])&&(r=e,T=_)}for(;t.data!==n;)if(i=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,i?(a?i.next=a:delete i.next,this):e?(a?e[_]=a:delete e[_],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(r?r[T]=t:this._root=t),this):(this._root=a,this)}function _i(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function Mi(){return this._root}function Ni(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function Ci(n){var e=[],t,r=this._root,i,a,u,d,s,f,l;for(r&&e.push(new R(r,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!n(r=t.node,a=t.x0,u=t.y0,d=t.z0,s=t.x1,f=t.y1,l=t.z1)&&r.length){var g=(a+s)/2,b=(u+f)/2,y=(d+l)/2;(i=r[7])&&e.push(new R(i,g,b,y,s,f,l)),(i=r[6])&&e.push(new R(i,a,b,y,g,f,l)),(i=r[5])&&e.push(new R(i,g,u,y,s,b,l)),(i=r[4])&&e.push(new R(i,a,u,y,g,b,l)),(i=r[3])&&e.push(new R(i,g,b,d,s,f,y)),(i=r[2])&&e.push(new R(i,a,b,d,g,f,y)),(i=r[1])&&e.push(new R(i,g,u,d,s,b,y)),(i=r[0])&&e.push(new R(i,a,u,d,g,b,y))}return this}function Ei(n){var e=[],t=[],r;for(this._root&&e.push(new R(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));r=e.pop();){var i=r.node;if(i.length){var a,u=r.x0,d=r.y0,s=r.z0,f=r.x1,l=r.y1,g=r.z1,b=(u+f)/2,y=(d+l)/2,v=(s+g)/2;(a=i[0])&&e.push(new R(a,u,d,s,b,y,v)),(a=i[1])&&e.push(new R(a,b,d,s,f,y,v)),(a=i[2])&&e.push(new R(a,u,y,s,b,l,v)),(a=i[3])&&e.push(new R(a,b,y,s,f,l,v)),(a=i[4])&&e.push(new R(a,u,d,v,b,y,g)),(a=i[5])&&e.push(new R(a,b,d,v,f,y,g)),(a=i[6])&&e.push(new R(a,u,y,v,b,l,g)),(a=i[7])&&e.push(new R(a,b,y,v,f,l,g))}t.push(r)}for(;r=t.pop();)n(r.node,r.x0,r.y0,r.z0,r.x1,r.y1,r.z1);return this}function Ti(n){return n[0]}function $i(n){return arguments.length?(this._x=n,this):this._x}function Bi(n){return n[1]}function Si(n){return arguments.length?(this._y=n,this):this._y}function Pi(n){return n[2]}function Ii(n){return arguments.length?(this._z=n,this):this._z}function un(n,e,t,r){var i=new ct(e??Ti,t??Bi,r??Pi,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function ct(n,e,t,r,i,a,u,d,s){this._x=n,this._y=e,this._z=t,this._x0=r,this._y0=i,this._z0=a,this._x1=u,this._y1=d,this._z1=s,this._root=void 0}function fn(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Z=un.prototype=ct.prototype;Z.copy=function(){var n=new ct(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,r;if(!e)return n;if(!e.length)return n._root=fn(e),n;for(t=[{source:e,target:n._root=new Array(8)}];e=t.pop();)for(var i=0;i<8;++i)(r=e.source[i])&&(r.length?t.push({source:r,target:e.target[i]=new Array(8)}):e.target[i]=fn(r));return n},Z.add=gi,Z.addAll=vi,Z.cover=yi,Z.data=mi,Z.extent=bi,Z.find=wi,Z.remove=xi,Z.removeAll=_i,Z.root=Mi,Z.size=Ni,Z.visit=Ci,Z.visitAfter=Ei,Z.x=$i,Z.y=Si,Z.z=Ii;function Be(n){return function(){return n}}function de(n){return(n()-.5)*1e-6}function zi(n){return n.index}function hn(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function Ai(n){var e=zi,t=b,r,i=Be(30),a,u,d,s,f,l,g=1;n==null&&(n=[]);function b(c){return 1/Math.min(s[c.source.index],s[c.target.index])}function y(c){for(var M=0,E=n.length;M<g;++M)for(var N=0,_,T,A,L=0,U=0,H=0,Q,j;N<E;++N)_=n[N],T=_.source,A=_.target,L=A.x+A.vx-T.x-T.vx||de(l),d>1&&(U=A.y+A.vy-T.y-T.vy||de(l)),d>2&&(H=A.z+A.vz-T.z-T.vz||de(l)),Q=Math.sqrt(L*L+U*U+H*H),Q=(Q-a[N])/Q*c*r[N],L*=Q,U*=Q,H*=Q,A.vx-=L*(j=f[N]),d>1&&(A.vy-=U*j),d>2&&(A.vz-=H*j),T.vx+=L*(j=1-j),d>1&&(T.vy+=U*j),d>2&&(T.vz+=H*j)}function v(){if(u){var c,M=u.length,E=n.length,N=new Map(u.map((T,A)=>[e(T,A,u),T])),_;for(c=0,s=new Array(M);c<E;++c)_=n[c],_.index=c,typeof _.source!="object"&&(_.source=hn(N,_.source)),typeof _.target!="object"&&(_.target=hn(N,_.target)),s[_.source.index]=(s[_.source.index]||0)+1,s[_.target.index]=(s[_.target.index]||0)+1;for(c=0,f=new Array(E);c<E;++c)_=n[c],f[c]=s[_.source.index]/(s[_.source.index]+s[_.target.index]);r=new Array(E),w(),a=new Array(E),m()}}function w(){if(u)for(var c=0,M=n.length;c<M;++c)r[c]=+t(n[c],c,n)}function m(){if(u)for(var c=0,M=n.length;c<M;++c)a[c]=+i(n[c],c,n)}return y.initialize=function(c,...M){u=c,l=M.find(E=>typeof E=="function")||Math.random,d=M.find(E=>[1,2,3].includes(E))||2,v()},y.links=function(c){return arguments.length?(n=c,v(),y):n},y.id=function(c){return arguments.length?(e=c,y):e},y.iterations=function(c){return arguments.length?(g=+c,y):g},y.strength=function(c){return arguments.length?(t=typeof c=="function"?c:Be(+c),w(),y):t},y.distance=function(c){return arguments.length?(i=typeof c=="function"?c:Be(+c),m(),y):i},y}var Oi={value:()=>{}};function dn(){for(var n=0,e=arguments.length,t={},r;n<e;++n){if(!(r=arguments[n]+"")||r in t||/[\s.]/.test(r))throw new Error("illegal type: "+r);t[r]=[]}return new De(t)}function De(n){this._=n}function Li(n,e){return n.trim().split(/^|\s+/).map(function(t){var r="",i=t.indexOf(".");if(i>=0&&(r=t.slice(i+1),t=t.slice(0,i)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}})}De.prototype=dn.prototype={constructor:De,on:function(n,e){var t=this._,r=Li(n+"",t),i,a=-1,u=r.length;if(arguments.length<2){for(;++a<u;)if((i=(n=r[a]).type)&&(i=Fi(t[i],n.name)))return i;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++a<u;)if(i=(n=r[a]).type)t[i]=cn(t[i],n.name,e);else if(e==null)for(i in t)t[i]=cn(t[i],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new De(n)},call:function(n,e){if((i=arguments.length-2)>0)for(var t=new Array(i),r=0,i,a;r<i;++r)t[r]=arguments[r+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(a=this._[n],r=0,i=a.length;r<i;++r)a[r].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var r=this._[n],i=0,a=r.length;i<a;++i)r[i].value.apply(e,t)}};function Fi(n,e){for(var t=0,r=n.length,i;t<r;++t)if((i=n[t]).name===e)return i.value}function cn(n,e,t){for(var r=0,i=n.length;r<i;++r)if(n[r].name===e){n[r]=Oi,n=n.slice(0,r).concat(n.slice(r+1));break}return t!=null&&n.push({name:e,value:t}),n}var Ne=0,Se=0,Pe=0,ln=1e3,Ge,Ie,je=0,be=0,Re=0,ze=typeof performance=="object"&&performance.now?performance:Date,pn=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function gn(){return be||(pn(ki),be=ze.now()+Re)}function ki(){be=0}function lt(){this._call=this._time=this._next=null}lt.prototype=vn.prototype={constructor:lt,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?gn():+t)+(e==null?0:+e),!this._next&&Ie!==this&&(Ie?Ie._next=this:Ge=this,Ie=this),this._call=n,this._time=t,pt()},stop:function(){this._call&&(this._call=null,this._time=1/0,pt())}};function vn(n,e,t){var r=new lt;return r.restart(n,e,t),r}function qi(){gn(),++Ne;for(var n=Ge,e;n;)(e=be-n._time)>=0&&n._call.call(void 0,e),n=n._next;--Ne}function yn(){be=(je=ze.now())+Re,Ne=Se=0;try{qi()}finally{Ne=0,Gi(),be=0}}function Di(){var n=ze.now(),e=n-je;e>ln&&(Re-=e,je=n)}function Gi(){for(var n,e=Ge,t,r=1/0;e;)e._call?(r>e._time&&(r=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:Ge=t);Ie=n,pt(r)}function pt(n){if(!Ne){Se&&(Se=clearTimeout(Se));var e=n-be;e>24?(n<1/0&&(Se=setTimeout(yn,n-ze.now()-Re)),Pe&&(Pe=clearInterval(Pe))):(Pe||(je=ze.now(),Pe=setInterval(Di,ln)),Ne=1,pn(yn))}}const ji=1664525,Ri=1013904223,mn=4294967296;function Ui(){let n=1;return()=>(n=(ji*n+Ri)%mn)/mn}var bn=3;function gt(n){return n.x}function wn(n){return n.y}function Hi(n){return n.z}var Qi=10,Vi=Math.PI*(3-Math.sqrt(5)),Wi=Math.PI*20/(9+Math.sqrt(221));function Xi(n,e){e=e||2;var t=Math.min(bn,Math.max(1,Math.round(e))),r,i=1,a=.001,u=1-Math.pow(a,1/300),d=0,s=.6,f=new Map,l=vn(y),g=dn("tick","end"),b=Ui();n==null&&(n=[]);function y(){v(),g.call("tick",r),i<a&&(l.stop(),g.call("end",r))}function v(c){var M,E=n.length,N;c===void 0&&(c=1);for(var _=0;_<c;++_)for(i+=(d-i)*u,f.forEach(function(T){T(i)}),M=0;M<E;++M)N=n[M],N.fx==null?N.x+=N.vx*=s:(N.x=N.fx,N.vx=0),t>1&&(N.fy==null?N.y+=N.vy*=s:(N.y=N.fy,N.vy=0)),t>2&&(N.fz==null?N.z+=N.vz*=s:(N.z=N.fz,N.vz=0));return r}function w(){for(var c=0,M=n.length,E;c<M;++c){if(E=n[c],E.index=c,E.fx!=null&&(E.x=E.fx),E.fy!=null&&(E.y=E.fy),E.fz!=null&&(E.z=E.fz),isNaN(E.x)||t>1&&isNaN(E.y)||t>2&&isNaN(E.z)){var N=Qi*(t>2?Math.cbrt(.5+c):t>1?Math.sqrt(.5+c):c),_=c*Vi,T=c*Wi;t===1?E.x=N:t===2?(E.x=N*Math.cos(_),E.y=N*Math.sin(_)):(E.x=N*Math.sin(_)*Math.cos(T),E.y=N*Math.cos(_),E.z=N*Math.sin(_)*Math.sin(T))}(isNaN(E.vx)||t>1&&isNaN(E.vy)||t>2&&isNaN(E.vz))&&(E.vx=0,t>1&&(E.vy=0),t>2&&(E.vz=0))}}function m(c){return c.initialize&&c.initialize(n,b,t),c}return w(),r={tick:v,restart:function(){return l.restart(y),r},stop:function(){return l.stop(),r},numDimensions:function(c){return arguments.length?(t=Math.min(bn,Math.max(1,Math.round(c))),f.forEach(m),r):t},nodes:function(c){return arguments.length?(n=c,w(),f.forEach(m),r):n},alpha:function(c){return arguments.length?(i=+c,r):i},alphaMin:function(c){return arguments.length?(a=+c,r):a},alphaDecay:function(c){return arguments.length?(u=+c,r):+u},alphaTarget:function(c){return arguments.length?(d=+c,r):d},velocityDecay:function(c){return arguments.length?(s=1-c,r):1-s},randomSource:function(c){return arguments.length?(b=c,f.forEach(m),r):b},force:function(c,M){return arguments.length>1?(M==null?f.delete(c):f.set(c,m(M)),r):f.get(c)},find:function(){var c=Array.prototype.slice.call(arguments),M=c.shift()||0,E=(t>1?c.shift():null)||0,N=(t>2?c.shift():null)||0,_=c.shift()||1/0,T=0,A=n.length,L,U,H,Q,j,fe;for(_*=_,T=0;T<A;++T)j=n[T],L=M-j.x,U=E-(j.y||0),H=N-(j.z||0),Q=L*L+U*U+H*H,Q<_&&(fe=j,_=Q);return fe},on:function(c,M){return arguments.length>1?(g.on(c,M),r):g.on(c)}}}function Ki(){var n,e,t,r,i,a=Be(-30),u,d=1,s=1/0,f=.81;function l(v){var w,m=n.length,c=(e===1?tn(n,gt):e===2?an(n,gt,wn):e===3?un(n,gt,wn,Hi):null).visitAfter(b);for(i=v,w=0;w<m;++w)t=n[w],c.visit(y)}function g(){if(n){var v,w=n.length,m;for(u=new Array(w),v=0;v<w;++v)m=n[v],u[m.index]=+a(m,v,n)}}function b(v){var w=0,m,c,M=0,E,N,_,T,A=v.length;if(A){for(E=N=_=T=0;T<A;++T)(m=v[T])&&(c=Math.abs(m.value))&&(w+=m.value,M+=c,E+=c*(m.x||0),N+=c*(m.y||0),_+=c*(m.z||0));w*=Math.sqrt(4/A),v.x=E/M,e>1&&(v.y=N/M),e>2&&(v.z=_/M)}else{m=v,m.x=m.data.x,e>1&&(m.y=m.data.y),e>2&&(m.z=m.data.z);do w+=u[m.data.index];while(m=m.next)}v.value=w}function y(v,w,m,c,M){if(!v.value)return!0;var E=[m,c,M][e-1],N=v.x-t.x,_=e>1?v.y-t.y:0,T=e>2?v.z-t.z:0,A=E-w,L=N*N+_*_+T*T;if(A*A/f<L)return L<s&&(N===0&&(N=de(r),L+=N*N),e>1&&_===0&&(_=de(r),L+=_*_),e>2&&T===0&&(T=de(r),L+=T*T),L<d&&(L=Math.sqrt(d*L)),t.vx+=N*v.value*i/L,e>1&&(t.vy+=_*v.value*i/L),e>2&&(t.vz+=T*v.value*i/L)),!0;if(v.length||L>=s)return;(v.data!==t||v.next)&&(N===0&&(N=de(r),L+=N*N),e>1&&_===0&&(_=de(r),L+=_*_),e>2&&T===0&&(T=de(r),L+=T*T),L<d&&(L=Math.sqrt(d*L)));do v.data!==t&&(A=u[v.data.index]*i/L,t.vx+=N*A,e>1&&(t.vy+=_*A),e>2&&(t.vz+=T*A));while(v=v.next)}return l.initialize=function(v,...w){n=v,r=w.find(m=>typeof m=="function")||Math.random,e=w.find(m=>[1,2,3].includes(m))||2,g()},l.strength=function(v){return arguments.length?(a=typeof v=="function"?v:Be(+v),g(),l):a},l.distanceMin=function(v){return arguments.length?(d=v*v,l):Math.sqrt(d)},l.distanceMax=function(v){return arguments.length?(s=v*v,l):Math.sqrt(s)},l.theta=function(v){return arguments.length?(f=v*v,l):Math.sqrt(f)},l}function vt(n){return typeof n=="object"&&typeof n.index=="number"&&typeof n.x=="number"&&typeof n.y=="number"&&typeof n.z=="number"&&typeof n.vx=="number"&&typeof n.vy=="number"&&typeof n.vz=="number"}function Yi(n){return!!(typeof n=="object"&&typeof n.index=="number"&&vt(n.source)&&vt(n.target))}class Ji{constructor(){I(this,"d3ForceLayout");I(this,"d3AlphaMin",0);I(this,"d3AlphaTarget",0);I(this,"d3AlphaDecay",.0228);I(this,"d3VelocityDecay",.4);I(this,"nodeMapping",new Map);I(this,"edgeMapping",new Map);I(this,"newNodeMap",new Map);I(this,"newEdgeMap",new Map);I(this,"reheat",!1);this.d3ForceLayout=Xi().numDimensions(3).alpha(1).force("link",Ai()).force("charge",Ki()).force("center",kr()).force("dagRadial",null).stop(),this.d3ForceLayout.force("link").id(e=>e.id)}get graphNeedsRefresh(){return!!this.newNodeMap.size||!!this.newEdgeMap.size}async init(){}refresh(){if(this.graphNeedsRefresh||this.reheat){let e=[...this.nodeMapping.values()];e=e.concat([...this.newNodeMap.values()]),this.d3ForceLayout.alpha(1).nodes(e).stop();for(let r of this.newNodeMap.entries()){let i=r[0],a=r[1];if(!vt(a))throw new Error("Internal error: Node is not settled as a complete D3 Node");this.nodeMapping.set(i,a)}this.newNodeMap.clear();let t=[...this.edgeMapping.values()];t=t.concat([...this.newEdgeMap.values()]),this.d3ForceLayout.force("link").links(t);for(let r of this.newEdgeMap.entries()){let i=r[0],a=r[1];if(!Yi(a))throw new Error("Internal error: Edge is not settled as a complete D3 Edge");this.edgeMapping.set(i,a)}this.newEdgeMap.clear()}}step(){this.refresh(),this.d3ForceLayout.tick()}addNode(e){this.newNodeMap.set(e,{id:e.id})}addEdge(e){this.newEdgeMap.set(e,{source:e.srcId,target:e.dstId})}get nodes(){return this.nodeMapping.keys()}get edges(){return this.edgeMapping.keys()}getNodePosition(e){const t=this._getMappedNode(e);if(t.x===void 0||t.y===void 0||t.z===void 0)throw new Error("Internal error: Node not initialized in D3GraphEngine");return{x:t.x,y:t.y,z:t.z}}setNodePosition(e,t){const r=this._getMappedNode(e);r.x=t.x,r.y=t.y,r.z=t.z??0,this.reheat=!0}getEdgePosition(e){let t=this._getMappedEdge(e);return{src:{x:t.source.x,y:t.source.y,z:t.source.z},dst:{x:t.target.x,y:t.target.y,z:t.target.z}}}pin(e){const t=this._getMappedNode(e);t.fx=t.x,t.fy=t.y,t.fz=t.z,this.reheat=!0}unpin(e){const t=this._getMappedNode(e);t.fx=void 0,t.fy=void 0,t.fz=void 0,this.reheat=!0}_getMappedNode(e){this.refresh();const t=this.nodeMapping.get(e);if(!t)throw new Error("Internal error: Node not found in D3GraphEngine");return t}_getMappedEdge(e){this.refresh();let t=this.edgeMapping.get(e);if(!t)throw new Error("Internal error: Edge not found in D3GraphEngine");return t}}var Ue={exports:{}};Ue.exports,function(n,e){var t=200,r="__lodash_hash_undefined__",i=800,a=16,u=9007199254740991,d="[object Arguments]",s="[object Array]",f="[object AsyncFunction]",l="[object Boolean]",g="[object Date]",b="[object Error]",y="[object Function]",v="[object GeneratorFunction]",w="[object Map]",m="[object Number]",c="[object Null]",M="[object Object]",E="[object Proxy]",N="[object RegExp]",_="[object Set]",T="[object String]",A="[object Undefined]",L="[object WeakMap]",U="[object ArrayBuffer]",H="[object DataView]",Q="[object Float32Array]",j="[object Float64Array]",fe="[object Int8Array]",C="[object Int16Array]",x="[object Int32Array]",$="[object Uint8Array]",V="[object Uint8ClampedArray]",oe="[object Uint16Array]",ue="[object Uint32Array]",P=/[\\^$.*+?()[\]{}|]/g,z=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,O={};O[Q]=O[j]=O[fe]=O[C]=O[x]=O[$]=O[V]=O[oe]=O[ue]=!0,O[d]=O[s]=O[U]=O[l]=O[H]=O[g]=O[b]=O[y]=O[w]=O[m]=O[M]=O[N]=O[_]=O[T]=O[L]=!1;var Y=typeof ke=="object"&&ke&&ke.Object===Object&&ke,K=typeof self=="object"&&self&&self.Object===Object&&self,ee=Y||K||Function("return this")(),He=e&&!e.nodeType&&e,Ae=He&&!0&&n&&!n.nodeType&&n,_n=Ae&&Ae.exports===He,yt=_n&&Y.process,Mn=function(){try{var o=Ae&&Ae.require&&Ae.require("util").types;return o||yt&&yt.binding&&yt.binding("util")}catch{}}(),Nn=Mn&&Mn.isTypedArray;function Cn(o,h,p){switch(p.length){case 0:return o.call(h);case 1:return o.call(h,p[0]);case 2:return o.call(h,p[0],p[1]);case 3:return o.call(h,p[0],p[1],p[2])}return o.apply(h,p)}function ua(o,h){for(var p=-1,B=Array(o);++p<o;)B[p]=h(p);return B}function fa(o){return function(h){return o(h)}}function ha(o,h){return o==null?void 0:o[h]}function da(o,h){return function(p){return o(h(p))}}var ca=Array.prototype,la=Function.prototype,Qe=Object.prototype,mt=ee["__core-js_shared__"],Ve=la.toString,ce=Qe.hasOwnProperty,En=function(){var o=/[^.]+$/.exec(mt&&mt.keys&&mt.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),Tn=Qe.toString,pa=Ve.call(Object),ga=RegExp("^"+Ve.call(ce).replace(P,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),We=_n?ee.Buffer:void 0,$n=ee.Symbol,Bn=ee.Uint8Array,Sn=We?We.allocUnsafe:void 0,Pn=da(Object.getPrototypeOf,Object),In=Object.create,va=Qe.propertyIsEnumerable,ya=ca.splice,we=$n?$n.toStringTag:void 0,Xe=function(){try{var o=_t(Object,"defineProperty");return o({},"",{}),o}catch{}}(),ma=We?We.isBuffer:void 0,zn=Math.max,ba=Date.now,An=_t(ee,"Map"),Oe=_t(Object,"create"),wa=function(){function o(){}return function(h){if(!pe(h))return{};if(In)return In(h);o.prototype=h;var p=new o;return o.prototype=void 0,p}}();function xe(o){var h=-1,p=o==null?0:o.length;for(this.clear();++h<p;){var B=o[h];this.set(B[0],B[1])}}function xa(){this.__data__=Oe?Oe(null):{},this.size=0}function _a(o){var h=this.has(o)&&delete this.__data__[o];return this.size-=h?1:0,h}function Ma(o){var h=this.__data__;if(Oe){var p=h[o];return p===r?void 0:p}return ce.call(h,o)?h[o]:void 0}function Na(o){var h=this.__data__;return Oe?h[o]!==void 0:ce.call(h,o)}function Ca(o,h){var p=this.__data__;return this.size+=this.has(o)?0:1,p[o]=Oe&&h===void 0?r:h,this}xe.prototype.clear=xa,xe.prototype.delete=_a,xe.prototype.get=Ma,xe.prototype.has=Na,xe.prototype.set=Ca;function le(o){var h=-1,p=o==null?0:o.length;for(this.clear();++h<p;){var B=o[h];this.set(B[0],B[1])}}function Ea(){this.__data__=[],this.size=0}function Ta(o){var h=this.__data__,p=Ke(h,o);if(p<0)return!1;var B=h.length-1;return p==B?h.pop():ya.call(h,p,1),--this.size,!0}function $a(o){var h=this.__data__,p=Ke(h,o);return p<0?void 0:h[p][1]}function Ba(o){return Ke(this.__data__,o)>-1}function Sa(o,h){var p=this.__data__,B=Ke(p,o);return B<0?(++this.size,p.push([o,h])):p[B][1]=h,this}le.prototype.clear=Ea,le.prototype.delete=Ta,le.prototype.get=$a,le.prototype.has=Ba,le.prototype.set=Sa;function Ce(o){var h=-1,p=o==null?0:o.length;for(this.clear();++h<p;){var B=o[h];this.set(B[0],B[1])}}function Pa(){this.size=0,this.__data__={hash:new xe,map:new(An||le),string:new xe}}function Ia(o){var h=Je(this,o).delete(o);return this.size-=h?1:0,h}function za(o){return Je(this,o).get(o)}function Aa(o){return Je(this,o).has(o)}function Oa(o,h){var p=Je(this,o),B=p.size;return p.set(o,h),this.size+=p.size==B?0:1,this}Ce.prototype.clear=Pa,Ce.prototype.delete=Ia,Ce.prototype.get=za,Ce.prototype.has=Aa,Ce.prototype.set=Oa;function Ee(o){var h=this.__data__=new le(o);this.size=h.size}function La(){this.__data__=new le,this.size=0}function Fa(o){var h=this.__data__,p=h.delete(o);return this.size=h.size,p}function ka(o){return this.__data__.get(o)}function qa(o){return this.__data__.has(o)}function Da(o,h){var p=this.__data__;if(p instanceof le){var B=p.__data__;if(!An||B.length<t-1)return B.push([o,h]),this.size=++p.size,this;p=this.__data__=new Ce(B)}return p.set(o,h),this.size=p.size,this}Ee.prototype.clear=La,Ee.prototype.delete=Fa,Ee.prototype.get=ka,Ee.prototype.has=qa,Ee.prototype.set=Da;function Ga(o,h){var p=Ct(o),B=!p&&Nt(o),k=!p&&!B&&Dn(o),D=!p&&!B&&!k&&jn(o),W=p||B||k||D,q=W?ua(o.length,String):[],X=q.length;for(var se in o)(h||ce.call(o,se))&&!(W&&(se=="length"||k&&(se=="offset"||se=="parent")||D&&(se=="buffer"||se=="byteLength"||se=="byteOffset")||kn(se,X)))&&q.push(se);return q}function bt(o,h,p){(p!==void 0&&!Ze(o[h],p)||p===void 0&&!(h in o))&&wt(o,h,p)}function ja(o,h,p){var B=o[h];(!(ce.call(o,h)&&Ze(B,p))||p===void 0&&!(h in o))&&wt(o,h,p)}function Ke(o,h){for(var p=o.length;p--;)if(Ze(o[p][0],h))return p;return-1}function wt(o,h,p){h=="__proto__"&&Xe?Xe(o,h,{configurable:!0,enumerable:!0,value:p,writable:!0}):o[h]=p}var Ra=to();function Ye(o){return o==null?o===void 0?A:c:we&&we in Object(o)?no(o):uo(o)}function On(o){return Le(o)&&Ye(o)==d}function Ua(o){if(!pe(o)||oo(o))return!1;var h=Tt(o)?ga:z;return h.test(lo(o))}function Ha(o){return Le(o)&&Gn(o.length)&&!!O[Ye(o)]}function Qa(o){if(!pe(o))return so(o);var h=qn(o),p=[];for(var B in o)B=="constructor"&&(h||!ce.call(o,B))||p.push(B);return p}function xt(o,h,p,B,k){o!==h&&Ra(h,function(D,W){if(k||(k=new Ee),pe(D))Va(o,h,W,p,xt,B,k);else{var q=B?B(Mt(o,W),D,W+"",o,h,k):void 0;q===void 0&&(q=D),bt(o,W,q)}},Rn)}function Va(o,h,p,B,k,D,W){var q=Mt(o,p),X=Mt(h,p),se=W.get(X);if(se){bt(o,p,se);return}var ie=D?D(q,X,p+"",o,h,W):void 0,Fe=ie===void 0;if(Fe){var $t=Ct(X),Bt=!$t&&Dn(X),Hn=!$t&&!Bt&&jn(X);ie=X,$t||Bt||Hn?Ct(q)?ie=q:po(q)?ie=Ja(q):Bt?(Fe=!1,ie=Xa(X,!0)):Hn?(Fe=!1,ie=Ya(X,!0)):ie=[]:go(X)||Nt(X)?(ie=q,Nt(q)?ie=vo(q):(!pe(q)||Tt(q))&&(ie=ro(X))):Fe=!1}Fe&&(W.set(X,ie),k(ie,X,B,D,W),W.delete(X)),bt(o,p,ie)}function Ln(o,h){return ho(fo(o,h,Un),o+"")}var Wa=Xe?function(o,h){return Xe(o,"toString",{configurable:!0,enumerable:!1,value:bo(h),writable:!0})}:Un;function Xa(o,h){if(h)return o.slice();var p=o.length,B=Sn?Sn(p):new o.constructor(p);return o.copy(B),B}function Ka(o){var h=new o.constructor(o.byteLength);return new Bn(h).set(new Bn(o)),h}function Ya(o,h){var p=h?Ka(o.buffer):o.buffer;return new o.constructor(p,o.byteOffset,o.length)}function Ja(o,h){var p=-1,B=o.length;for(h||(h=Array(B));++p<B;)h[p]=o[p];return h}function Za(o,h,p,B){var k=!p;p||(p={});for(var D=-1,W=h.length;++D<W;){var q=h[D],X=B?B(p[q],o[q],q,p,o):void 0;X===void 0&&(X=o[q]),k?wt(p,q,X):ja(p,q,X)}return p}function eo(o){return Ln(function(h,p){var B=-1,k=p.length,D=k>1?p[k-1]:void 0,W=k>2?p[2]:void 0;for(D=o.length>3&&typeof D=="function"?(k--,D):void 0,W&&io(p[0],p[1],W)&&(D=k<3?void 0:D,k=1),h=Object(h);++B<k;){var q=p[B];q&&o(h,q,B,D)}return h})}function to(o){return function(h,p,B){for(var k=-1,D=Object(h),W=B(h),q=W.length;q--;){var X=W[o?q:++k];if(p(D[X],X,D)===!1)break}return h}}function Fn(o,h,p,B,k,D){return pe(o)&&pe(h)&&(D.set(h,o),xt(o,h,void 0,Fn,D),D.delete(h)),o}function Je(o,h){var p=o.__data__;return ao(h)?p[typeof h=="string"?"string":"hash"]:p.map}function _t(o,h){var p=ha(o,h);return Ua(p)?p:void 0}function no(o){var h=ce.call(o,we),p=o[we];try{o[we]=void 0;var B=!0}catch{}var k=Tn.call(o);return B&&(h?o[we]=p:delete o[we]),k}function ro(o){return typeof o.constructor=="function"&&!qn(o)?wa(Pn(o)):{}}function kn(o,h){var p=typeof o;return h=h??u,!!h&&(p=="number"||p!="symbol"&&F.test(o))&&o>-1&&o%1==0&&o<h}function io(o,h,p){if(!pe(p))return!1;var B=typeof h;return(B=="number"?Et(p)&&kn(h,p.length):B=="string"&&h in p)?Ze(p[h],o):!1}function ao(o){var h=typeof o;return h=="string"||h=="number"||h=="symbol"||h=="boolean"?o!=="__proto__":o===null}function oo(o){return!!En&&En in o}function qn(o){var h=o&&o.constructor,p=typeof h=="function"&&h.prototype||Qe;return o===p}function so(o){var h=[];if(o!=null)for(var p in Object(o))h.push(p);return h}function uo(o){return Tn.call(o)}function fo(o,h,p){return h=zn(h===void 0?o.length-1:h,0),function(){for(var B=arguments,k=-1,D=zn(B.length-h,0),W=Array(D);++k<D;)W[k]=B[h+k];k=-1;for(var q=Array(h+1);++k<h;)q[k]=B[k];return q[h]=p(W),Cn(o,this,q)}}function Mt(o,h){if(!(h==="constructor"&&typeof o[h]=="function")&&h!="__proto__")return o[h]}var ho=co(Wa);function co(o){var h=0,p=0;return function(){var B=ba(),k=a-(B-p);if(p=B,k>0){if(++h>=i)return arguments[0]}else h=0;return o.apply(void 0,arguments)}}function lo(o){if(o!=null){try{return Ve.call(o)}catch{}try{return o+""}catch{}}return""}function Ze(o,h){return o===h||o!==o&&h!==h}var Nt=On(function(){return arguments}())?On:function(o){return Le(o)&&ce.call(o,"callee")&&!va.call(o,"callee")},Ct=Array.isArray;function Et(o){return o!=null&&Gn(o.length)&&!Tt(o)}function po(o){return Le(o)&&Et(o)}var Dn=ma||wo;function Tt(o){if(!pe(o))return!1;var h=Ye(o);return h==y||h==v||h==f||h==E}function Gn(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=u}function pe(o){var h=typeof o;return o!=null&&(h=="object"||h=="function")}function Le(o){return o!=null&&typeof o=="object"}function go(o){if(!Le(o)||Ye(o)!=M)return!1;var h=Pn(o);if(h===null)return!0;var p=ce.call(h,"constructor")&&h.constructor;return typeof p=="function"&&p instanceof p&&Ve.call(p)==pa}var jn=Nn?fa(Nn):Ha;function vo(o){return Za(o,Rn(o))}var yo=Ln(function(o){return o.push(void 0,Fn),Cn(mo,void 0,o)});function Rn(o){return Et(o)?Ga(o,!0):Qa(o)}var mo=eo(function(o,h,p,B){xt(o,h,p,B)});function bo(o){return function(){return o}}function Un(o){return o}function wo(){return!1}n.exports=yo}(Ue,Ue.exports);var Zi=Ue.exports;const ea=et(Zi),ta={size:1,opacity:1,wireframe:!1,color:"lightgrey",shape:"icosphere",nodeMeshFactory:me.defaultNodeMeshFactory,label:!1},na={type:"moving",color:"white",movingLineOpts:{baseColor:"lightgrey",width:.25},edgeMeshFactory:ae.defaultEdgeMeshFactory},ra={nodeMeshOpts:ta,edgeMeshOpts:na,pinOnDrag:!0,graphEngineType:"ngraph",stepMultiplier:1};function ia(n){return ea({},n,ra)}class aa{constructor(e,t){I(this,"config");I(this,"stats");I(this,"element");I(this,"canvas");I(this,"engine");I(this,"scene");I(this,"camera");I(this,"skybox");I(this,"meshCache");I(this,"graphEngineType");I(this,"graphEngine");I(this,"running",!0);I(this,"pinOnDrag");I(this,"fetchNodes");I(this,"fetchEdges");I(this,"graphObservable",new S.Observable);I(this,"nodeObservable",new S.Observable);I(this,"edgeObservable",new S.Observable);if(this.config=ia(t),this.meshCache=new oa,this.fetchNodes=this.config.fetchNodes,this.fetchEdges=this.config.fetchEdges,typeof e=="string"){let r=document.getElementById(e);if(!r)throw new Error(`getElementById() could not find element '${e}'`);this.element=r}else if(e instanceof HTMLElement)this.element=e;else throw new TypeError("Graph constructor requires 'element' argument that is either a string specifying the ID of the HTML element or an HTMLElement");if(this.element.innerHTML="",this.canvas=document.createElement("canvas"),this.canvas.setAttribute("id","babylonForceGraphRenderCanvas"),this.canvas.setAttribute("touch-action","none"),this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.touchAction="none",this.element.appendChild(this.canvas),this.engine=new S.Engine(this.canvas,!0),this.scene=new S.Scene(this.engine),this.camera=new S.ArcRotateCamera("camera",-Math.PI/2,Math.PI/2.5,15,new S.Vector3(0,0,0)),this.camera.attachControl(this.canvas,!0),new S.HemisphericLight("light",new S.Vector3(1,1,0)),this.config.skybox&&new S.PhotoDome("testdome",this.config.skybox,{resolution:32,size:1e3},this.scene),this.config.graphEngineType==="ngraph")this.graphEngine=new Fr;else if(this.config.graphEngineType==="d3")this.graphEngine=new Ji;else throw new TypeError(`Unknown graph engine type: '${this.graphEngineType}'`);if(this.stats=new sa(this),this.config.preSteps)for(let r=0;r<this.config.preSteps;r++)this.graphEngine.step()}async init(){this.engine.runRenderLoop(()=>{this.update(),this.scene.render()}),navigator.xr&&await this.scene.createDefaultXRExperienceAsync({disableTeleportation:!0}),window.addEventListener("resize",()=>{this.engine.resize()})}update(){if(!this.running)return;this.stats.step(),this.stats.graphStep.beginMonitoring();for(let t=0;t<this.config.stepMultiplier;t++)this.graphEngine.step();this.stats.graphStep.endMonitoring();let e=0;this.stats.nodeUpdate.beginMonitoring();for(let t of this.graphEngine.nodes)e=Math.max(e,t.getDeltaPos()),t.update();this.stats.nodeUpdate.endMonitoring(),this.stats.edgeUpdate.beginMonitoring();for(let t of this.graphEngine.edges)t.update();this.stats.edgeUpdate.endMonitoring(),e<this.minDelta*this.config.stepMultiplier&&(console.log("Graph Settled"),console.log(this.stats.toString()),this.graphObservable.notifyObservers({type:"graph-settled",graph:this}),this.running=!1)}get minDelta(){const e=me.list.size+ae.list.size;return(St(e,100)-.5)*.5}addNode(e,t={}){return this.nodeObservable.notifyObservers({type:"node-add-before",nodeId:e,metadata:t}),me.create(this,e,{nodeMeshConfig:this.config.nodeMeshOpts,pinOnDrag:this.pinOnDrag,metadata:t})}addEdge(e,t,r={}){return this.edgeObservable.notifyObservers({type:"edge-add-before",srcNodeId:e,dstNodeId:t,metadata:r}),ae.create(this,e,t,{edgeMeshConfig:this.config.edgeMeshOpts,metadata:r})}addListener(e,t){switch(e){case"graph-settled":this.graphObservable.add(r=>{r.type===e&&t(r)});break;case"node-add-before":this.nodeObservable.add(r=>{r.type===e&&t(r)});break;case"edge-add-before":this.edgeObservable.add(r=>{r.type===e&&t(r)});break;default:throw new TypeError(`Unknown listener type in addListener: ${e}`)}}async loadJsonData(e,t={}){this.stats.loadTime.beginMonitoring();const r=t.nodeListProp??"nodes",i=t.edgeListProp??"links",a=t.nodeIdProp??"id",u=t.edgeSrcIdProp??"source",d=t.edgeDstIdProp??"target",f=await(await fetch(e,t.fetchOpts)).json();if(!Array.isArray(f[r]))throw TypeError(`when fetching JSON data: '${r}' was not an Array`);if(!Array.isArray(f[i]))throw TypeError(`when fetching JSON data: '${i}' was not an Array`);for(let l of f[r]){let g=l[a],b=l;this.addNode(g,b)}for(let l of f[i]){let g=l[u],b=l[d],y=l;this.addEdge(g,b,y)}this.stats.loadTime.endMonitoring()}}const xn=new Map;class oa{constructor(){I(this,"hits",0);I(this,"misses",0)}get(e,t){let r=xn.get(e);return r?(this.hits++,r.createInstance(e)):(this.misses++,r=t(),r.isVisible=!1,xn.set(e,r),r.createInstance(e))}reset(){this.hits=0,this.misses=0}}class sa{constructor(e){I(this,"graph");I(this,"sceneInstrumentation");I(this,"babylonInstrumentation");I(this,"graphStep");I(this,"nodeUpdate");I(this,"edgeUpdate");I(this,"loadTime");I(this,"totalUpdates",0);this.graph=e,this.sceneInstrumentation=new S.SceneInstrumentation(e.scene),this.sceneInstrumentation.captureFrameTime=!0,this.sceneInstrumentation.captureRenderTime=!0,this.sceneInstrumentation.captureInterFrameTime=!0,this.sceneInstrumentation.captureCameraRenderTime=!0,this.sceneInstrumentation.captureActiveMeshesEvaluationTime=!0,this.sceneInstrumentation.captureRenderTargetsRenderTime=!0,this.babylonInstrumentation=new S.EngineInstrumentation(e.engine),this.babylonInstrumentation.captureGPUFrameTime=!0,this.babylonInstrumentation.captureShaderCompilationTime=!0,this.graphStep=new S.PerfCounter,this.nodeUpdate=new S.PerfCounter,this.edgeUpdate=new S.PerfCounter,this.loadTime=new S.PerfCounter}toString(){let e="";function t(a,u,d=""){e+=`${a}: ${u}${d}
`}function r(a){e+=`
${a}
`;for(let u=0;u<a.length;u++)e+="-";e+=`
`}function i(a,u){e+=`${a} (min/avg/last sec/max [total]): ${u.min.toFixed(2)} / ${u.average.toFixed(2)} / ${u.lastSecAverage.toFixed(2)} / ${u.max.toFixed(2)} [${u.max.toFixed(2)}] ms
`}return r("Graph"),t("Num Nodes",this.numNodes),t("Num Edges",this.numEdges),t("Total Updates",this.totalUpdates),r("Graph Engine Performance"),i("JSON Load Time",this.loadTime),i("Graph Physics Engine Time",this.graphStep),i("Node Update Time",this.nodeUpdate),i("Edge Update Time",this.edgeUpdate),r("BabylonJS Performance"),i("GPU Time",this.babylonInstrumentation.gpuFrameTimeCounter),i("Shader Time",this.babylonInstrumentation.shaderCompilationTimeCounter),i("Mesh Evaluation Time",this.sceneInstrumentation.activeMeshesEvaluationTimeCounter),i("Render Targets Time",this.sceneInstrumentation.renderTargetsRenderTimeCounter),i("Draw Calls Time",this.sceneInstrumentation.drawCallsCounter),i("Frame Time",this.sceneInstrumentation.frameTimeCounter),i("Render Time",this.sceneInstrumentation.renderTimeCounter),i("Time Between Frames",this.sceneInstrumentation.interFrameTimeCounter),i("Camera Render Time",this.sceneInstrumentation.cameraRenderTimeCounter),r("Mesh Cache"),t("Mesh Cache Hits",this.meshCacheHits),t("Mesh Cache Misses",this.meshCacheMisses),e}step(){this.totalUpdates++}reset(){this.totalUpdates=0}get numNodes(){return me.list.size}get numEdges(){return ae.list.size}get meshCacheHits(){return this.graph.meshCache.hits}get meshCacheMisses(){return this.graph.meshCache.misses}}J.Edge=ae,J.Graph=aa,J.Node=me,J.util=Qn,Object.defineProperty(J,Symbol.toStringTag,{value:"Module"})});
