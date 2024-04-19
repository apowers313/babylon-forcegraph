(function(Y,$){typeof exports=="object"&&typeof module<"u"?$(exports,require("@babylonjs/core")):typeof define=="function"&&define.amd?define(["exports","@babylonjs/core"],$):(Y=typeof globalThis<"u"?globalThis:Y||self,$(Y.HtmlMesh={},Y.BABYLON))})(this,function(Y,$){"use strict";var Co=Object.defineProperty;var No=(Y,$,ge)=>$ in Y?Co(Y,$,{enumerable:!0,configurable:!0,writable:!0,value:ge}):Y[$]=ge;var I=(Y,$,ge)=>(No(Y,typeof $!="symbol"?$+"":$,ge),ge);const ge=new Map([["aliceblue","#f0f8ff"],["antiquewhite","#faebd7"],["aqua","#00ffff"],["aquamarine","#7fffd4"],["azure","#f0ffff"],["beige","#f5f5dc"],["bisque","#ffe4c4"],["black","#000000"],["blanchedalmond","#ffebcd"],["blue","#0000ff"],["blueviolet","#8a2be2"],["brown","#a52a2a"],["burlywood","#deb887"],["cadetblue","#5f9ea0"],["chartreuse","#7fff00"],["chocolate","#d2691e"],["coral","#ff7f50"],["cornflowerblue","#6495ed"],["cornsilk","#fff8dc"],["crimson","#dc143c"],["cyan","#00ffff"],["darkblue","#00008b"],["darkcyan","#008b8b"],["darkgoldenrod","#b8860b"],["darkgray","#a9a9a9"],["darkgreen","#006400"],["darkkhaki","#bdb76b"],["darkmagenta","#8b008b"],["darkolivegreen","#556b2f"],["darkorange","#ff8c00"],["darkorchid","#9932cc"],["darkred","#8b0000"],["darksalmon","#e9967a"],["darkseagreen","#8fbc8f"],["darkslateblue","#483d8b"],["darkslategray","#2f4f4f"],["darkturquoise","#00ced1"],["darkviolet","#9400d3"],["deeppink","#ff1493"],["deepskyblue","#00bfff"],["dimgray","#696969"],["dodgerblue","#1e90ff"],["firebrick","#b22222"],["floralwhite","#fffaf0"],["forestgreen","#228b22"],["fuchsia","#ff00ff"],["gainsboro","#dcdcdc"],["ghostwhite","#f8f8ff"],["gold","#ffd700"],["goldenrod","#daa520"],["gray","#808080"],["green","#008000"],["greenyellow","#adff2f"],["honeydew","#f0fff0"],["hotpink","#ff69b4"],["indianred ","#cd5c5c"],["indigo","#4b0082"],["ivory","#fffff0"],["khaki","#f0e68c"],["lavender","#e6e6fa"],["lavenderblush","#fff0f5"],["lawngreen","#7cfc00"],["lemonchiffon","#fffacd"],["lightblue","#add8e6"],["lightcoral","#f08080"],["lightcyan","#e0ffff"],["lightgoldenrodyellow","#fafad2"],["lightgrey","#d3d3d3"],["lightgreen","#90ee90"],["lightpink","#ffb6c1"],["lightsalmon","#ffa07a"],["lightseagreen","#20b2aa"],["lightskyblue","#87cefa"],["lightslategray","#778899"],["lightsteelblue","#b0c4de"],["lightyellow","#ffffe0"],["lime","#00ff00"],["limegreen","#32cd32"],["linen","#faf0e6"],["magenta","#ff00ff"],["maroon","#800000"],["mediumaquamarine","#66cdaa"],["mediumblue","#0000cd"],["mediumorchid","#ba55d3"],["mediumpurple","#9370d8"],["mediumseagreen","#3cb371"],["mediumslateblue","#7b68ee"],["mediumspringgreen","#00fa9a"],["mediumturquoise","#48d1cc"],["mediumvioletred","#c71585"],["midnightblue","#191970"],["mintcream","#f5fffa"],["mistyrose","#ffe4e1"],["moccasin","#ffe4b5"],["navajowhite","#ffdead"],["navy","#000080"],["oldlace","#fdf5e6"],["olive","#808000"],["olivedrab","#6b8e23"],["orange","#ffa500"],["orangered","#ff4500"],["orchid","#da70d6"],["palegoldenrod","#eee8aa"],["palegreen","#98fb98"],["paleturquoise","#afeeee"],["palevioletred","#d87093"],["papayawhip","#ffefd5"],["peachpuff","#ffdab9"],["peru","#cd853f"],["pink","#ffc0cb"],["plum","#dda0dd"],["powderblue","#b0e0e6"],["purple","#800080"],["rebeccapurple","#663399"],["red","#ff0000"],["rosybrown","#bc8f8f"],["royalblue","#4169e1"],["saddlebrown","#8b4513"],["salmon","#fa8072"],["sandybrown","#f4a460"],["seagreen","#2e8b57"],["seashell","#fff5ee"],["sienna","#a0522d"],["silver","#c0c0c0"],["skyblue","#87ceeb"],["slateblue","#6a5acd"],["slategray","#708090"],["snow","#fffafa"],["springgreen","#00ff7f"],["steelblue","#4682b4"],["tan","#d2b48c"],["teal","#008080"],["thistle","#d8bfd8"],["tomato","#ff6347"],["turquoise","#40e0d0"],["violet","#ee82ee"],["wheat","#f5deb3"],["white","#ffffff"],["whitesmoke","#f5f5f5"],["yellow","#ffff00"],["yellowgreen","#9acd32"]]);function xe(t){const e=ge.get(t);return e||t}const Qn=Object.freeze(Object.defineProperty({__proto__:null,colorMap:ge,colorNameToHex:xe},Symbol.toStringTag,{value:"Module"})),St=1.618;let _e=class G{constructor(e,n,r={}){I(this,"parentGraph");I(this,"id");I(this,"metadata");I(this,"mesh");I(this,"label");I(this,"meshDragBehavior");I(this,"dragging",!1);I(this,"nodeMeshConfig");I(this,"pinOnDrag");if(this.parentGraph=e,this.id=n,this.metadata=r.metadata??{},this.nodeMeshConfig=this.parentGraph.config.style.node,this.parentGraph.graphEngine.addNode(this),this.mesh=this.nodeMeshConfig.nodeMeshFactory(this,this.parentGraph,this.nodeMeshConfig),this.mesh.isPickable=!0,this.mesh.metadata={parentNode:this},this.nodeMeshConfig.label&&(this.label=G.createLabel(this.id.toString(),this,this.parentGraph),this.label.parent=this.mesh,this.label.position.y+=1),this.pinOnDrag=r.pinOnDrag??!0,this.meshDragBehavior=new $.SixDofDragBehavior,this.mesh.addBehavior(this.meshDragBehavior),this.meshDragBehavior.onDragStartObservable.add(()=>{this.parentGraph.running=!0,this.dragging=!0}),this.meshDragBehavior.onDragEndObservable.add(()=>{this.parentGraph.running=!0,this.pinOnDrag&&this.pin(),this.dragging=!1}),this.meshDragBehavior.onPositionChangedObservable.add(i=>{this.parentGraph.running=!0,this.parentGraph.graphEngine.setNodePosition(this,i.position)}),this.mesh.actionManager=this.mesh.actionManager??new $.ActionManager(this.parentGraph.scene),this.parentGraph.fetchNodes&&this.parentGraph.fetchEdges){const{fetchNodes:i,fetchEdges:a}=this.parentGraph;this.mesh.actionManager.registerAction(new $.ExecuteCodeAction({trigger:$.ActionManager.OnDoublePickTrigger},()=>{this.parentGraph.running=!0;const u=a(this,this.parentGraph),d=new Set;u.forEach(h=>{d.add(h.src),d.add(h.dst)}),d.delete(this.id),i(d,this.parentGraph).forEach(h=>this.parentGraph.addNode(h.id,h.metadata)),u.forEach(h=>this.parentGraph.addEdge(h.src,h.dst,h.metadata))}))}}update(){if(this.dragging)return;this.parentGraph.nodeObservable.notifyObservers({type:"node-update-before",node:this});const e=this.parentGraph.graphEngine.getNodePosition(this);this.mesh.position.x=e.x,this.mesh.position.y=e.y,e.z&&(this.mesh.position.z=e.z),this.parentGraph.nodeObservable.notifyObservers({type:"node-update-after",node:this})}pin(){this.parentGraph.graphEngine.pin(this)}unpin(){this.parentGraph.graphEngine.unpin(this)}static get list(){return Wn}static create(e,n,r={}){const i=G.list.get(n);if(i)return i;const a=new G(e,n,r);return G.list.set(n,a),a}static defaultNodeMeshFactory(e,n,r){return n.meshCache.get("default-mesh",()=>{let i;switch(r.shape){case"box":i=G.createBox(e,n,r);break;case"sphere":i=G.createSphere(e,n,r);break;case"cylinder":i=G.createCylinder(e,n,r);break;case"cone":i=G.createCone(e,n,r);break;case"capsule":i=G.createCapsule(e,n,r);break;case"torus-knot":i=G.createTorusKnot(e,n,r);break;case"tetrahedron":i=G.createPolyhedron(0,e,n,r);break;case"octahedron":i=G.createPolyhedron(1,e,n,r);break;case"dodecahedron":i=G.createPolyhedron(2,e,n,r);break;case"icosahedron":i=G.createPolyhedron(3,e,n,r);break;case"rhombicuboctahedron":i=G.createPolyhedron(4,e,n,r);break;case"triangular_prism":i=G.createPolyhedron(5,e,n,r);break;case"pentagonal_prism":i=G.createPolyhedron(6,e,n,r);break;case"hexagonal_prism":i=G.createPolyhedron(7,e,n,r);break;case"square_pyramid":i=G.createPolyhedron(8,e,n,r);break;case"pentagonal_pyramid":i=G.createPolyhedron(9,e,n,r);break;case"triangular_dipyramid":i=G.createPolyhedron(10,e,n,r);break;case"pentagonal_dipyramid":i=G.createPolyhedron(11,e,n,r);break;case"elongated_square_dypyramid":i=G.createPolyhedron(12,e,n,r);break;case"elongated_pentagonal_dipyramid":i=G.createPolyhedron(13,e,n,r);break;case"elongated_pentagonal_cupola":i=G.createPolyhedron(14,e,n,r);break;case"goldberg":i=G.createGoldberg(e,n,r);break;case"icosphere":i=G.createIcoSphere(e,n,r);break;case"geodesic":i=G.createGeodesic(e,n,r);break;default:throw new TypeError(`unknown shape: ${r.shape}`)}const a=new $.StandardMaterial("defaultMaterial"),u=r.color;return a.diffuseColor=$.Color3.FromHexString(xe(u)),a.wireframe=r.wireframe,a.freeze(),i.visibility=r.opacity,i.material=a,i})}static createBox(e,n,r){return $.MeshBuilder.CreateBox("box",{size:r.size})}static createSphere(e,n,r){return $.MeshBuilder.CreateSphere("sphere",{diameter:r.size})}static createCylinder(e,n,r){return $.MeshBuilder.CreateCylinder("cylinder",{height:r.size*St,diameter:r.size})}static createCone(e,n,r){return $.MeshBuilder.CreateCylinder("cylinder",{height:r.size*St,diameterTop:0,diameterBottom:r.size})}static createCapsule(e,n,r){return $.MeshBuilder.CreateCapsule("capsule",{})}static createTorus(e,n,r){return $.MeshBuilder.CreateTorus("torus",{})}static createTorusKnot(e,n,r){return $.MeshBuilder.CreateTorusKnot("tk",{radius:r.size*.3,tube:r.size*.2,radialSegments:128})}static createPolyhedron(e,n,r,i){return $.MeshBuilder.CreatePolyhedron("polyhedron",{size:i.size,type:e})}static createGoldberg(e,n,r){return $.MeshBuilder.CreateGoldberg("goldberg",{size:r.size})}static createIcoSphere(e,n,r){return $.MeshBuilder.CreateIcoSphere("icosphere",{radius:r.size*.75})}static createGeodesic(e,n,r){return $.MeshBuilder.CreateGeodesic("geodesic",{size:r.size})}static createLabel(e,n,r){const a="48px Verdana",s=.006944444444444444,l=new $.DynamicTexture("DynamicTexture",64,r.scene).getContext();l.font=a;const g=l.measureText(e).width+8,w=g*s,y=new $.DynamicTexture("DynamicTexture",{width:g,height:72},r.scene,!1),v=new $.StandardMaterial("mat",r.scene);v.specularColor=$.Color3.Black(),y.hasAlpha=!0;const x=y.getContext();x.fillStyle="white",x.beginPath();const m=0,c=0,M=[20,20,20,20],N=g,C=72;x.moveTo(m+M[0],c),x.lineTo(m+N-M[1],c),x.arc(m+N-M[1],c+M[1],M[1],3*Math.PI/2,Math.PI*2),x.lineTo(m+N,c+C-M[2]),x.arc(m+N-M[2],c+C-M[2],M[2],0,Math.PI/2),x.lineTo(m+M[3],c+C),x.arc(m+M[3],c+C-M[3],M[3],Math.PI/2,Math.PI),x.lineTo(m,c+M[0]),x.arc(m+M[0],c+M[0],M[0],Math.PI,3*Math.PI/2),x.closePath(),x.fill(),y.drawText(e,null,null,a,"#000000","transparent",!0),v.opacityTexture=y,v.emissiveTexture=y,v.disableLighting=!0;const _=$.MeshBuilder.CreatePlane("plane",{width:w,height:.5},r.scene);return _.material=v,_.billboardMode=7,_}};const Wn=new Map;class ie{constructor(e,n,r,i={}){I(this,"parentGraph");I(this,"srcId");I(this,"dstId");I(this,"dstNode");I(this,"srcNode");I(this,"metadata");I(this,"mesh");I(this,"arrowMesh",null);I(this,"edgeStyleConfig");I(this,"ray");this.parentGraph=e,this.srcId=n,this.dstId=r,this.metadata=i.metadata??{};const a=_e.list.get(n);if(!a)throw new Error(`Attempting to create edge '${n}->${r}', Node '${n}' hasn't been created yet.`);const u=_e.list.get(r);if(!u)throw new Error(`Attempting to create edge '${n}->${r}', Node '${r}' hasn't been created yet.`);this.srcNode=a,this.dstNode=u,this.ray=new $.Ray(this.srcNode.mesh.position,this.dstNode.mesh.position),this.edgeStyleConfig=this.parentGraph.config.style.edge,this.parentGraph.graphEngine.addEdge(this),this.mesh=this.edgeStyleConfig.edgeMeshFactory(this,this.parentGraph,this.edgeStyleConfig),this.mesh.isPickable=!1,this.mesh.metadata={},this.mesh.metadata.parentEdge=this}update(){const e=this.parentGraph.graphEngine.getEdgePosition(this);this.parentGraph.edgeObservable.notifyObservers({type:"edge-update-before",edge:this});const{srcPoint:n,dstPoint:r}=this.transformArrowCap();n&&r?this.transformEdgeMesh(n,r):this.transformEdgeMesh(new $.Vector3(e.src.x,e.src.y,e.src.z),new $.Vector3(e.dst.x,e.dst.y,e.dst.z)),this.parentGraph.edgeObservable.notifyObservers({type:"edge-update-after",edge:this})}static updateRays(e){if(e.config.style.edge.arrowCap){for(const n of e.graphEngine.edges){const r=n.srcNode.mesh,i=n.dstNode.mesh;n.ray.position=i.position,n.ray.direction=i.position.subtract(r.position)}e.scene.render()}}static get list(){return Kn}static create(e,n,r,i={}){const a=ie.list.get(n,r);if(a)return a;const u=new ie(e,n,r,i);return ie.list.set(n,r,u),u}static defaultEdgeMeshFactory(e,n,r){return r.arrowCap&&(e.arrowMesh=n.meshCache.get("default-arrow-cap",()=>{const i=Jn(r.width),a=Pt(r.width),u=$.GreasedLineTools.GetArrowCap(new $.Vector3(0,0,-a),new $.Vector3(0,0,1),a,i,i);return $.CreateGreasedLine("lines",{points:u.points,widths:u.widths,widthDistribution:$.GreasedLineMeshWidthDistribution.WIDTH_DISTRIBUTION_START},{color:$.Color3.FromHexString(xe(r.color))})})),n.meshCache.get("default-edge",()=>{switch(r.type){case"plain":return ie.createPlainLine(e,n,r);case"moving":return ie.createMovingLine(e,n,r);default:throw new TypeError(`Unknown Edge type: '${r.type}'`)}})}static createPlainLine(e,n,r){return $.CreateGreasedLine("edge-plain",{points:ie.unitVectorPoints},{color:$.Color3.FromHexString(xe(r.color)),width:r.width})}static createMovingLine(e,n,r){const i=$.Color3.FromHexString(xe(r.movingLineOpts.baseColor)),a=$.Color3.FromHexString(xe(r.color)),u=Math.floor(i.r*255),d=Math.floor(i.g*255),s=Math.floor(i.b*255),h=Math.floor(a.r*255),l=Math.floor(a.g*255),g=Math.floor(a.b*255),w=new Uint8Array([u,d,s,h,l,g]),y=new $.RawTexture(w,w.length/3,1,$.Engine.TEXTUREFORMAT_RGB,n.scene,!1,!0,$.Engine.TEXTURE_NEAREST_NEAREST);y.wrapU=$.RawTexture.WRAP_ADDRESSMODE,y.name="moving-texture";const v=$.CreateGreasedLine("edge-moving",{points:ie.unitVectorPoints},{width:r.width,colorMode:$.GreasedLineMeshColorMode.COLOR_MODE_MULTIPLY}),x=v.material;return x.emissiveTexture=y,x.disableLighting=!0,y.uScale=5,n.scene.onBeforeRenderObservable.add(()=>{y.uOffset-=.04*n.scene.getAnimationRatio()}),v}transformEdgeMesh(e,n){const r=n.subtract(e),i=new $.Vector3(e.x+r.x/2,e.y+r.y/2,e.z+r.z/2),a=r.length();this.mesh.position=i,this.mesh.lookAt(n),this.mesh.scaling.z=a}transformArrowCap(){if(this.arrowMesh){this.parentGraph.stats.arrowCapUpdate.beginMonitoring();const{srcPoint:e,dstPoint:n,newEndPoint:r}=this.getInterceptPoints();if(!e||!n||!r)throw new Error("Internal Error: mesh intercept points not found");return this.arrowMesh.position=n,this.arrowMesh.lookAt(this.dstNode.mesh.position),this.parentGraph.stats.arrowCapUpdate.endMonitoring(),{srcPoint:e,dstPoint:r}}return{srcPoint:null,dstPoint:null}}getInterceptPoints(){const e=this.srcNode.mesh,n=this.dstNode.mesh;this.parentGraph.stats.intersectCalc.beginMonitoring();const r=this.ray.intersectsMeshes([n]),i=this.ray.intersectsMeshes([e]);this.parentGraph.stats.intersectCalc.endMonitoring();let a=null,u=null,d=null;if(r.length&&i.length){const s=Pt(this.edgeStyleConfig.width);u=r[0].pickedPoint,a=i[0].pickedPoint;const h=a.subtract(u).length(),l=h-s,{x:g,y:w,z:y}=a,{x:v,y:x,z:m}=u,c=g+l/h*(v-g),M=w+l/h*(x-w),N=y+l/h*(m-y);d=new $.Vector3(c,M,N)}return{srcPoint:a,dstPoint:u,newEndPoint:d}}static get unitVectorPoints(){return[0,0,-.5,0,0,.5]}}function Jn(t){return Math.max(20*t,4)}function Pt(t){return Math.max(t,.5)}class Xn{constructor(){I(this,"map",new Map)}has(e,n){const r=this.map.get(e);return r?r.has(n):!1}set(e,n,r){let i=this.map.get(e);if(i||(i=new Map,this.map.set(e,i)),i.has(n))throw new Error("Attempting to create duplicate Edge");i.set(n,r)}get(e,n){const r=this.map.get(e);if(r)return r.get(n)}get size(){let e=0;for(const n of this.map.values())e+=n.size;return e}}const Kn=new Xn;var ke=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function et(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qe={exports:{}};qe.exports,function(t,e){var n=200,r="__lodash_hash_undefined__",i=800,a=16,u=9007199254740991,d="[object Arguments]",s="[object Array]",h="[object AsyncFunction]",l="[object Boolean]",g="[object Date]",w="[object Error]",y="[object Function]",v="[object GeneratorFunction]",x="[object Map]",m="[object Number]",c="[object Null]",M="[object Object]",N="[object Proxy]",C="[object RegExp]",_="[object Set]",T="[object String]",z="[object Undefined]",O="[object WeakMap]",U="[object ArrayBuffer]",H="[object DataView]",V="[object Float32Array]",j="[object Float64Array]",he="[object Int8Array]",E="[object Int16Array]",b="[object Int32Array]",B="[object Uint8Array]",Q="[object Uint8ClampedArray]",oe="[object Uint16Array]",ue="[object Uint32Array]",P=/[\\^$.*+?()[\]{}|]/g,A=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,L={};L[V]=L[j]=L[he]=L[E]=L[b]=L[B]=L[Q]=L[oe]=L[ue]=!0,L[d]=L[s]=L[U]=L[l]=L[H]=L[g]=L[w]=L[y]=L[x]=L[m]=L[M]=L[C]=L[_]=L[T]=L[O]=!1;var K=typeof ke=="object"&&ke&&ke.Object===Object&&ke,X=typeof self=="object"&&self&&self.Object===Object&&self,ee=K||X||Function("return this")(),He=e&&!e.nodeType&&e,ze=He&&!0&&t&&!t.nodeType&&t,Mn=ze&&ze.exports===He,yt=Mn&&K.process,Cn=function(){try{var o=ze&&ze.require&&ze.require("util").types;return o||yt&&yt.binding&&yt.binding("util")}catch{}}(),Nn=Cn&&Cn.isTypedArray;function En(o,f,p){switch(p.length){case 0:return o.call(f);case 1:return o.call(f,p[0]);case 2:return o.call(f,p[0],p[1]);case 3:return o.call(f,p[0],p[1],p[2])}return o.apply(f,p)}function da(o,f){for(var p=-1,S=Array(o);++p<o;)S[p]=f(p);return S}function ca(o){return function(f){return o(f)}}function la(o,f){return o==null?void 0:o[f]}function pa(o,f){return function(p){return o(f(p))}}var ga=Array.prototype,va=Function.prototype,Ve=Object.prototype,mt=ee["__core-js_shared__"],Qe=va.toString,ce=Ve.hasOwnProperty,Tn=function(){var o=/[^.]+$/.exec(mt&&mt.keys&&mt.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),$n=Ve.toString,ya=Qe.call(Object),ma=RegExp("^"+Qe.call(ce).replace(P,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),We=Mn?ee.Buffer:void 0,Bn=ee.Symbol,Sn=ee.Uint8Array,Pn=We?We.allocUnsafe:void 0,In=pa(Object.getPrototypeOf,Object),An=Object.create,wa=Ve.propertyIsEnumerable,ba=ga.splice,we=Bn?Bn.toStringTag:void 0,Je=function(){try{var o=_t(Object,"defineProperty");return o({},"",{}),o}catch{}}(),xa=We?We.isBuffer:void 0,zn=Math.max,_a=Date.now,Ln=_t(ee,"Map"),Le=_t(Object,"create"),Ma=function(){function o(){}return function(f){if(!pe(f))return{};if(An)return An(f);o.prototype=f;var p=new o;return o.prototype=void 0,p}}();function be(o){var f=-1,p=o==null?0:o.length;for(this.clear();++f<p;){var S=o[f];this.set(S[0],S[1])}}function Ca(){this.__data__=Le?Le(null):{},this.size=0}function Na(o){var f=this.has(o)&&delete this.__data__[o];return this.size-=f?1:0,f}function Ea(o){var f=this.__data__;if(Le){var p=f[o];return p===r?void 0:p}return ce.call(f,o)?f[o]:void 0}function Ta(o){var f=this.__data__;return Le?f[o]!==void 0:ce.call(f,o)}function $a(o,f){var p=this.__data__;return this.size+=this.has(o)?0:1,p[o]=Le&&f===void 0?r:f,this}be.prototype.clear=Ca,be.prototype.delete=Na,be.prototype.get=Ea,be.prototype.has=Ta,be.prototype.set=$a;function le(o){var f=-1,p=o==null?0:o.length;for(this.clear();++f<p;){var S=o[f];this.set(S[0],S[1])}}function Ba(){this.__data__=[],this.size=0}function Sa(o){var f=this.__data__,p=Xe(f,o);if(p<0)return!1;var S=f.length-1;return p==S?f.pop():ba.call(f,p,1),--this.size,!0}function Pa(o){var f=this.__data__,p=Xe(f,o);return p<0?void 0:f[p][1]}function Ia(o){return Xe(this.__data__,o)>-1}function Aa(o,f){var p=this.__data__,S=Xe(p,o);return S<0?(++this.size,p.push([o,f])):p[S][1]=f,this}le.prototype.clear=Ba,le.prototype.delete=Sa,le.prototype.get=Pa,le.prototype.has=Ia,le.prototype.set=Aa;function Ne(o){var f=-1,p=o==null?0:o.length;for(this.clear();++f<p;){var S=o[f];this.set(S[0],S[1])}}function za(){this.size=0,this.__data__={hash:new be,map:new(Ln||le),string:new be}}function La(o){var f=Ye(this,o).delete(o);return this.size-=f?1:0,f}function Oa(o){return Ye(this,o).get(o)}function Fa(o){return Ye(this,o).has(o)}function ka(o,f){var p=Ye(this,o),S=p.size;return p.set(o,f),this.size+=p.size==S?0:1,this}Ne.prototype.clear=za,Ne.prototype.delete=La,Ne.prototype.get=Oa,Ne.prototype.has=Fa,Ne.prototype.set=ka;function Ee(o){var f=this.__data__=new le(o);this.size=f.size}function qa(){this.__data__=new le,this.size=0}function Da(o){var f=this.__data__,p=f.delete(o);return this.size=f.size,p}function Ga(o){return this.__data__.get(o)}function ja(o){return this.__data__.has(o)}function Ra(o,f){var p=this.__data__;if(p instanceof le){var S=p.__data__;if(!Ln||S.length<n-1)return S.push([o,f]),this.size=++p.size,this;p=this.__data__=new Ne(S)}return p.set(o,f),this.size=p.size,this}Ee.prototype.clear=qa,Ee.prototype.delete=Da,Ee.prototype.get=Ga,Ee.prototype.has=ja,Ee.prototype.set=Ra;function Ua(o,f){var p=Nt(o),S=!p&&Ct(o),k=!p&&!S&&Gn(o),D=!p&&!S&&!k&&Rn(o),W=p||S||k||D,q=W?da(o.length,String):[],J=q.length;for(var se in o)(f||ce.call(o,se))&&!(W&&(se=="length"||k&&(se=="offset"||se=="parent")||D&&(se=="buffer"||se=="byteLength"||se=="byteOffset")||qn(se,J)))&&q.push(se);return q}function wt(o,f,p){(p!==void 0&&!Ze(o[f],p)||p===void 0&&!(f in o))&&bt(o,f,p)}function Ha(o,f,p){var S=o[f];(!(ce.call(o,f)&&Ze(S,p))||p===void 0&&!(f in o))&&bt(o,f,p)}function Xe(o,f){for(var p=o.length;p--;)if(Ze(o[p][0],f))return p;return-1}function bt(o,f,p){f=="__proto__"&&Je?Je(o,f,{configurable:!0,enumerable:!0,value:p,writable:!0}):o[f]=p}var Va=io();function Ke(o){return o==null?o===void 0?z:c:we&&we in Object(o)?ao(o):co(o)}function On(o){return Oe(o)&&Ke(o)==d}function Qa(o){if(!pe(o)||ho(o))return!1;var f=Tt(o)?ma:A;return f.test(vo(o))}function Wa(o){return Oe(o)&&jn(o.length)&&!!L[Ke(o)]}function Ja(o){if(!pe(o))return fo(o);var f=Dn(o),p=[];for(var S in o)S=="constructor"&&(f||!ce.call(o,S))||p.push(S);return p}function xt(o,f,p,S,k){o!==f&&Va(f,function(D,W){if(k||(k=new Ee),pe(D))Xa(o,f,W,p,xt,S,k);else{var q=S?S(Mt(o,W),D,W+"",o,f,k):void 0;q===void 0&&(q=D),wt(o,W,q)}},Un)}function Xa(o,f,p,S,k,D,W){var q=Mt(o,p),J=Mt(f,p),se=W.get(J);if(se){wt(o,p,se);return}var ae=D?D(q,J,p+"",o,f,W):void 0,Fe=ae===void 0;if(Fe){var $t=Nt(J),Bt=!$t&&Gn(J),Vn=!$t&&!Bt&&Rn(J);ae=J,$t||Bt||Vn?Nt(q)?ae=q:yo(q)?ae=to(q):Bt?(Fe=!1,ae=Ya(J,!0)):Vn?(Fe=!1,ae=eo(J,!0)):ae=[]:mo(J)||Ct(J)?(ae=q,Ct(q)?ae=wo(q):(!pe(q)||Tt(q))&&(ae=oo(J))):Fe=!1}Fe&&(W.set(J,ae),k(ae,J,S,D,W),W.delete(J)),wt(o,p,ae)}function Fn(o,f){return po(lo(o,f,Hn),o+"")}var Ka=Je?function(o,f){return Je(o,"toString",{configurable:!0,enumerable:!1,value:_o(f),writable:!0})}:Hn;function Ya(o,f){if(f)return o.slice();var p=o.length,S=Pn?Pn(p):new o.constructor(p);return o.copy(S),S}function Za(o){var f=new o.constructor(o.byteLength);return new Sn(f).set(new Sn(o)),f}function eo(o,f){var p=f?Za(o.buffer):o.buffer;return new o.constructor(p,o.byteOffset,o.length)}function to(o,f){var p=-1,S=o.length;for(f||(f=Array(S));++p<S;)f[p]=o[p];return f}function no(o,f,p,S){var k=!p;p||(p={});for(var D=-1,W=f.length;++D<W;){var q=f[D],J=S?S(p[q],o[q],q,p,o):void 0;J===void 0&&(J=o[q]),k?bt(p,q,J):Ha(p,q,J)}return p}function ro(o){return Fn(function(f,p){var S=-1,k=p.length,D=k>1?p[k-1]:void 0,W=k>2?p[2]:void 0;for(D=o.length>3&&typeof D=="function"?(k--,D):void 0,W&&so(p[0],p[1],W)&&(D=k<3?void 0:D,k=1),f=Object(f);++S<k;){var q=p[S];q&&o(f,q,S,D)}return f})}function io(o){return function(f,p,S){for(var k=-1,D=Object(f),W=S(f),q=W.length;q--;){var J=W[o?q:++k];if(p(D[J],J,D)===!1)break}return f}}function kn(o,f,p,S,k,D){return pe(o)&&pe(f)&&(D.set(f,o),xt(o,f,void 0,kn,D),D.delete(f)),o}function Ye(o,f){var p=o.__data__;return uo(f)?p[typeof f=="string"?"string":"hash"]:p.map}function _t(o,f){var p=la(o,f);return Qa(p)?p:void 0}function ao(o){var f=ce.call(o,we),p=o[we];try{o[we]=void 0;var S=!0}catch{}var k=$n.call(o);return S&&(f?o[we]=p:delete o[we]),k}function oo(o){return typeof o.constructor=="function"&&!Dn(o)?Ma(In(o)):{}}function qn(o,f){var p=typeof o;return f=f??u,!!f&&(p=="number"||p!="symbol"&&F.test(o))&&o>-1&&o%1==0&&o<f}function so(o,f,p){if(!pe(p))return!1;var S=typeof f;return(S=="number"?Et(p)&&qn(f,p.length):S=="string"&&f in p)?Ze(p[f],o):!1}function uo(o){var f=typeof o;return f=="string"||f=="number"||f=="symbol"||f=="boolean"?o!=="__proto__":o===null}function ho(o){return!!Tn&&Tn in o}function Dn(o){var f=o&&o.constructor,p=typeof f=="function"&&f.prototype||Ve;return o===p}function fo(o){var f=[];if(o!=null)for(var p in Object(o))f.push(p);return f}function co(o){return $n.call(o)}function lo(o,f,p){return f=zn(f===void 0?o.length-1:f,0),function(){for(var S=arguments,k=-1,D=zn(S.length-f,0),W=Array(D);++k<D;)W[k]=S[f+k];k=-1;for(var q=Array(f+1);++k<f;)q[k]=S[k];return q[f]=p(W),En(o,this,q)}}function Mt(o,f){if(!(f==="constructor"&&typeof o[f]=="function")&&f!="__proto__")return o[f]}var po=go(Ka);function go(o){var f=0,p=0;return function(){var S=_a(),k=a-(S-p);if(p=S,k>0){if(++f>=i)return arguments[0]}else f=0;return o.apply(void 0,arguments)}}function vo(o){if(o!=null){try{return Qe.call(o)}catch{}try{return o+""}catch{}}return""}function Ze(o,f){return o===f||o!==o&&f!==f}var Ct=On(function(){return arguments}())?On:function(o){return Oe(o)&&ce.call(o,"callee")&&!wa.call(o,"callee")},Nt=Array.isArray;function Et(o){return o!=null&&jn(o.length)&&!Tt(o)}function yo(o){return Oe(o)&&Et(o)}var Gn=xa||Mo;function Tt(o){if(!pe(o))return!1;var f=Ke(o);return f==y||f==v||f==h||f==N}function jn(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=u}function pe(o){var f=typeof o;return o!=null&&(f=="object"||f=="function")}function Oe(o){return o!=null&&typeof o=="object"}function mo(o){if(!Oe(o)||Ke(o)!=M)return!1;var f=In(o);if(f===null)return!0;var p=ce.call(f,"constructor")&&f.constructor;return typeof p=="function"&&p instanceof p&&Qe.call(p)==ya}var Rn=Nn?ca(Nn):Wa;function wo(o){return no(o,Un(o))}var bo=Fn(function(o){return o.push(void 0,kn),En(xo,void 0,o)});function Un(o){return Et(o)?Ua(o,!0):Ja(o)}var xo=ro(function(o,f,p,S){xt(o,f,p,S)});function _o(o){return function(){return o}}function Hn(o){return o}function Mo(){return!1}t.exports=bo}(qe,qe.exports);var Yn=qe.exports;const It=et(Yn),Zn={size:1,opacity:1,wireframe:!1,color:"lightgrey",shape:"icosphere",nodeMeshFactory:_e.defaultNodeMeshFactory,label:!1},er={type:"moving",color:"white",width:.25,arrowCap:!1,movingLineOpts:{baseColor:"lightgrey"},edgeMeshFactory:ie.defaultEdgeMeshFactory},tr={style:{node:Zn,edge:er,skybox:"",startingCameraDistance:30},behavior:{node:{pinOnDrag:!0},fetchNodes:()=>new Set,fetchEdges:()=>new Set},engine:{type:"ngraph",stepMultiplier:1,preSteps:0,minDelta:0}};function nr(t){return It({},t,tr)}const rr={nodeListProp:"nodes",edgeListProp:"edges",nodeIdProp:"id",edgeSrcIdProp:"src",edgeDstIdProp:"dst"};function ir(t){return It({},t,rr)}function ar(t,e,n){var r,i=1;t==null&&(t=0),e==null&&(e=0),n==null&&(n=0);function a(){var u,d=r.length,s,h=0,l=0,g=0;for(u=0;u<d;++u)s=r[u],h+=s.x||0,l+=s.y||0,g+=s.z||0;for(h=(h/d-t)*i,l=(l/d-e)*i,g=(g/d-n)*i,u=0;u<d;++u)s=r[u],h&&(s.x-=h),l&&(s.y-=l),g&&(s.z-=g)}return a.initialize=function(u){r=u},a.x=function(u){return arguments.length?(t=+u,a):t},a.y=function(u){return arguments.length?(e=+u,a):e},a.z=function(u){return arguments.length?(n=+u,a):n},a.strength=function(u){return arguments.length?(i=+u,a):i},a}function or(t){const e=+this._x.call(null,t);return At(this.cover(e),e,t)}function At(t,e,n){if(isNaN(e))return t;var r,i=t._root,a={data:n},u=t._x0,d=t._x1,s,h,l,g,w;if(!i)return t._root=a,t;for(;i.length;)if((l=e>=(s=(u+d)/2))?u=s:d=s,r=i,!(i=i[g=+l]))return r[g]=a,t;if(h=+t._x.call(null,i.data),e===h)return a.next=i,r?r[g]=a:t._root=a,t;do r=r?r[g]=new Array(2):t._root=new Array(2),(l=e>=(s=(u+d)/2))?u=s:d=s;while((g=+l)==(w=+(h>=s)));return r[w]=i,r[g]=a,t}function sr(t){Array.isArray(t)||(t=Array.from(t));const e=t.length,n=new Float64Array(e);let r=1/0,i=-1/0;for(let a=0,u;a<e;++a)isNaN(u=+this._x.call(null,t[a]))||(n[a]=u,u<r&&(r=u),u>i&&(i=u));if(r>i)return this;this.cover(r).cover(i);for(let a=0;a<e;++a)At(this,n[a],t[a]);return this}function ur(t){if(isNaN(t=+t))return this;var e=this._x0,n=this._x1;if(isNaN(e))n=(e=Math.floor(t))+1;else{for(var r=n-e||1,i=this._root,a,u;e>t||t>=n;)switch(u=+(t<e),a=new Array(2),a[u]=i,i=a,r*=2,u){case 0:n=e+r;break;case 1:e=n-r;break}this._root&&this._root.length&&(this._root=i)}return this._x0=e,this._x1=n,this}function hr(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function fr(t){return arguments.length?this.cover(+t[0][0]).cover(+t[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function fe(t,e,n){this.node=t,this.x0=e,this.x1=n}function dr(t,e){var n,r=this._x0,i,a,u=this._x1,d=[],s=this._root,h,l;for(s&&d.push(new fe(s,r,u)),e==null?e=1/0:(r=t-e,u=t+e);h=d.pop();)if(!(!(s=h.node)||(i=h.x0)>u||(a=h.x1)<r))if(s.length){var g=(i+a)/2;d.push(new fe(s[1],g,a),new fe(s[0],i,g)),(l=+(t>=g))&&(h=d[d.length-1],d[d.length-1]=d[d.length-1-l],d[d.length-1-l]=h)}else{var w=Math.abs(t-+this._x.call(null,s.data));w<e&&(e=w,r=t-w,u=t+w,n=s.data)}return n}function cr(t){if(isNaN(s=+this._x.call(null,t)))return this;var e,n=this._root,r,i,a,u=this._x0,d=this._x1,s,h,l,g,w;if(!n)return this;if(n.length)for(;;){if((l=s>=(h=(u+d)/2))?u=h:d=h,e=n,!(n=n[g=+l]))return this;if(!n.length)break;e[g+1&1]&&(r=e,w=g)}for(;n.data!==t;)if(i=n,!(n=n.next))return this;return(a=n.next)&&delete n.next,i?(a?i.next=a:delete i.next,this):e?(a?e[g]=a:delete e[g],(n=e[0]||e[1])&&n===(e[1]||e[0])&&!n.length&&(r?r[w]=n:this._root=n),this):(this._root=a,this)}function lr(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function pr(){return this._root}function gr(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function vr(t){var e=[],n,r=this._root,i,a,u;for(r&&e.push(new fe(r,this._x0,this._x1));n=e.pop();)if(!t(r=n.node,a=n.x0,u=n.x1)&&r.length){var d=(a+u)/2;(i=r[1])&&e.push(new fe(i,d,u)),(i=r[0])&&e.push(new fe(i,a,d))}return this}function yr(t){var e=[],n=[],r;for(this._root&&e.push(new fe(this._root,this._x0,this._x1));r=e.pop();){var i=r.node;if(i.length){var a,u=r.x0,d=r.x1,s=(u+d)/2;(a=i[0])&&e.push(new fe(a,u,s)),(a=i[1])&&e.push(new fe(a,s,d))}n.push(r)}for(;r=n.pop();)t(r.node,r.x0,r.x1);return this}function mr(t){return t[0]}function wr(t){return arguments.length?(this._x=t,this):this._x}function zt(t,e){var n=new tt(e??mr,NaN,NaN);return t==null?n:n.addAll(t)}function tt(t,e,n){this._x=t,this._x0=e,this._x1=n,this._root=void 0}function Lt(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var re=zt.prototype=tt.prototype;re.copy=function(){var t=new tt(this._x,this._x0,this._x1),e=this._root,n,r;if(!e)return t;if(!e.length)return t._root=Lt(e),t;for(n=[{source:e,target:t._root=new Array(2)}];e=n.pop();)for(var i=0;i<2;++i)(r=e.source[i])&&(r.length?n.push({source:r,target:e.target[i]=new Array(2)}):e.target[i]=Lt(r));return t},re.add=or,re.addAll=sr,re.cover=ur,re.data=hr,re.extent=fr,re.find=dr,re.remove=cr,re.removeAll=lr,re.root=pr,re.size=gr,re.visit=vr,re.visitAfter=yr,re.x=wr;function br(t){const e=+this._x.call(null,t),n=+this._y.call(null,t);return Ot(this.cover(e,n),e,n,t)}function Ot(t,e,n,r){if(isNaN(e)||isNaN(n))return t;var i,a=t._root,u={data:r},d=t._x0,s=t._y0,h=t._x1,l=t._y1,g,w,y,v,x,m,c,M;if(!a)return t._root=u,t;for(;a.length;)if((x=e>=(g=(d+h)/2))?d=g:h=g,(m=n>=(w=(s+l)/2))?s=w:l=w,i=a,!(a=a[c=m<<1|x]))return i[c]=u,t;if(y=+t._x.call(null,a.data),v=+t._y.call(null,a.data),e===y&&n===v)return u.next=a,i?i[c]=u:t._root=u,t;do i=i?i[c]=new Array(4):t._root=new Array(4),(x=e>=(g=(d+h)/2))?d=g:h=g,(m=n>=(w=(s+l)/2))?s=w:l=w;while((c=m<<1|x)===(M=(v>=w)<<1|y>=g));return i[M]=a,i[c]=u,t}function xr(t){var e,n,r=t.length,i,a,u=new Array(r),d=new Array(r),s=1/0,h=1/0,l=-1/0,g=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,e=t[n]))||isNaN(a=+this._y.call(null,e))||(u[n]=i,d[n]=a,i<s&&(s=i),i>l&&(l=i),a<h&&(h=a),a>g&&(g=a));if(s>l||h>g)return this;for(this.cover(s,h).cover(l,g),n=0;n<r;++n)Ot(this,u[n],d[n],t[n]);return this}function _r(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,r=this._y0,i=this._x1,a=this._y1;if(isNaN(n))i=(n=Math.floor(t))+1,a=(r=Math.floor(e))+1;else{for(var u=i-n||1,d=this._root,s,h;n>t||t>=i||r>e||e>=a;)switch(h=(e<r)<<1|t<n,s=new Array(4),s[h]=d,d=s,u*=2,h){case 0:i=n+u,a=r+u;break;case 1:n=i-u,a=r+u;break;case 2:i=n+u,r=a-u;break;case 3:n=i-u,r=a-u;break}this._root&&this._root.length&&(this._root=d)}return this._x0=n,this._y0=r,this._x1=i,this._y1=a,this}function Mr(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function Cr(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function te(t,e,n,r,i){this.node=t,this.x0=e,this.y0=n,this.x1=r,this.y1=i}function Nr(t,e,n){var r,i=this._x0,a=this._y0,u,d,s,h,l=this._x1,g=this._y1,w=[],y=this._root,v,x;for(y&&w.push(new te(y,i,a,l,g)),n==null?n=1/0:(i=t-n,a=e-n,l=t+n,g=e+n,n*=n);v=w.pop();)if(!(!(y=v.node)||(u=v.x0)>l||(d=v.y0)>g||(s=v.x1)<i||(h=v.y1)<a))if(y.length){var m=(u+s)/2,c=(d+h)/2;w.push(new te(y[3],m,c,s,h),new te(y[2],u,c,m,h),new te(y[1],m,d,s,c),new te(y[0],u,d,m,c)),(x=(e>=c)<<1|t>=m)&&(v=w[w.length-1],w[w.length-1]=w[w.length-1-x],w[w.length-1-x]=v)}else{var M=t-+this._x.call(null,y.data),N=e-+this._y.call(null,y.data),C=M*M+N*N;if(C<n){var _=Math.sqrt(n=C);i=t-_,a=e-_,l=t+_,g=e+_,r=y.data}}return r}function Er(t){if(isNaN(l=+this._x.call(null,t))||isNaN(g=+this._y.call(null,t)))return this;var e,n=this._root,r,i,a,u=this._x0,d=this._y0,s=this._x1,h=this._y1,l,g,w,y,v,x,m,c;if(!n)return this;if(n.length)for(;;){if((v=l>=(w=(u+s)/2))?u=w:s=w,(x=g>=(y=(d+h)/2))?d=y:h=y,e=n,!(n=n[m=x<<1|v]))return this;if(!n.length)break;(e[m+1&3]||e[m+2&3]||e[m+3&3])&&(r=e,c=m)}for(;n.data!==t;)if(i=n,!(n=n.next))return this;return(a=n.next)&&delete n.next,i?(a?i.next=a:delete i.next,this):e?(a?e[m]=a:delete e[m],(n=e[0]||e[1]||e[2]||e[3])&&n===(e[3]||e[2]||e[1]||e[0])&&!n.length&&(r?r[c]=n:this._root=n),this):(this._root=a,this)}function Tr(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function $r(){return this._root}function Br(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function Sr(t){var e=[],n,r=this._root,i,a,u,d,s;for(r&&e.push(new te(r,this._x0,this._y0,this._x1,this._y1));n=e.pop();)if(!t(r=n.node,a=n.x0,u=n.y0,d=n.x1,s=n.y1)&&r.length){var h=(a+d)/2,l=(u+s)/2;(i=r[3])&&e.push(new te(i,h,l,d,s)),(i=r[2])&&e.push(new te(i,a,l,h,s)),(i=r[1])&&e.push(new te(i,h,u,d,l)),(i=r[0])&&e.push(new te(i,a,u,h,l))}return this}function Pr(t){var e=[],n=[],r;for(this._root&&e.push(new te(this._root,this._x0,this._y0,this._x1,this._y1));r=e.pop();){var i=r.node;if(i.length){var a,u=r.x0,d=r.y0,s=r.x1,h=r.y1,l=(u+s)/2,g=(d+h)/2;(a=i[0])&&e.push(new te(a,u,d,l,g)),(a=i[1])&&e.push(new te(a,l,d,s,g)),(a=i[2])&&e.push(new te(a,u,g,l,h)),(a=i[3])&&e.push(new te(a,l,g,s,h))}n.push(r)}for(;r=n.pop();)t(r.node,r.x0,r.y0,r.x1,r.y1);return this}function Ir(t){return t[0]}function Ar(t){return arguments.length?(this._x=t,this):this._x}function zr(t){return t[1]}function Lr(t){return arguments.length?(this._y=t,this):this._y}function Ft(t,e,n){var r=new nt(e??Ir,n??zr,NaN,NaN,NaN,NaN);return t==null?r:r.addAll(t)}function nt(t,e,n,r,i,a){this._x=t,this._y=e,this._x0=n,this._y0=r,this._x1=i,this._y1=a,this._root=void 0}function kt(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var ne=Ft.prototype=nt.prototype;ne.copy=function(){var t=new nt(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,n,r;if(!e)return t;if(!e.length)return t._root=kt(e),t;for(n=[{source:e,target:t._root=new Array(4)}];e=n.pop();)for(var i=0;i<4;++i)(r=e.source[i])&&(r.length?n.push({source:r,target:e.target[i]=new Array(4)}):e.target[i]=kt(r));return t},ne.add=br,ne.addAll=xr,ne.cover=_r,ne.data=Mr,ne.extent=Cr,ne.find=Nr,ne.remove=Er,ne.removeAll=Tr,ne.root=$r,ne.size=Br,ne.visit=Sr,ne.visitAfter=Pr,ne.x=Ar,ne.y=Lr;function Or(t){const e=+this._x.call(null,t),n=+this._y.call(null,t),r=+this._z.call(null,t);return qt(this.cover(e,n,r),e,n,r,t)}function qt(t,e,n,r,i){if(isNaN(e)||isNaN(n)||isNaN(r))return t;var a,u=t._root,d={data:i},s=t._x0,h=t._y0,l=t._z0,g=t._x1,w=t._y1,y=t._z1,v,x,m,c,M,N,C,_,T,z,O;if(!u)return t._root=d,t;for(;u.length;)if((C=e>=(v=(s+g)/2))?s=v:g=v,(_=n>=(x=(h+w)/2))?h=x:w=x,(T=r>=(m=(l+y)/2))?l=m:y=m,a=u,!(u=u[z=T<<2|_<<1|C]))return a[z]=d,t;if(c=+t._x.call(null,u.data),M=+t._y.call(null,u.data),N=+t._z.call(null,u.data),e===c&&n===M&&r===N)return d.next=u,a?a[z]=d:t._root=d,t;do a=a?a[z]=new Array(8):t._root=new Array(8),(C=e>=(v=(s+g)/2))?s=v:g=v,(_=n>=(x=(h+w)/2))?h=x:w=x,(T=r>=(m=(l+y)/2))?l=m:y=m;while((z=T<<2|_<<1|C)===(O=(N>=m)<<2|(M>=x)<<1|c>=v));return a[O]=u,a[z]=d,t}function Fr(t){Array.isArray(t)||(t=Array.from(t));const e=t.length,n=new Float64Array(e),r=new Float64Array(e),i=new Float64Array(e);let a=1/0,u=1/0,d=1/0,s=-1/0,h=-1/0,l=-1/0;for(let g=0,w,y,v,x;g<e;++g)isNaN(y=+this._x.call(null,w=t[g]))||isNaN(v=+this._y.call(null,w))||isNaN(x=+this._z.call(null,w))||(n[g]=y,r[g]=v,i[g]=x,y<a&&(a=y),y>s&&(s=y),v<u&&(u=v),v>h&&(h=v),x<d&&(d=x),x>l&&(l=x));if(a>s||u>h||d>l)return this;this.cover(a,u,d).cover(s,h,l);for(let g=0;g<e;++g)qt(this,n[g],r[g],i[g],t[g]);return this}function kr(t,e,n){if(isNaN(t=+t)||isNaN(e=+e)||isNaN(n=+n))return this;var r=this._x0,i=this._y0,a=this._z0,u=this._x1,d=this._y1,s=this._z1;if(isNaN(r))u=(r=Math.floor(t))+1,d=(i=Math.floor(e))+1,s=(a=Math.floor(n))+1;else{for(var h=u-r||1,l=this._root,g,w;r>t||t>=u||i>e||e>=d||a>n||n>=s;)switch(w=(n<a)<<2|(e<i)<<1|t<r,g=new Array(8),g[w]=l,l=g,h*=2,w){case 0:u=r+h,d=i+h,s=a+h;break;case 1:r=u-h,d=i+h,s=a+h;break;case 2:u=r+h,i=d-h,s=a+h;break;case 3:r=u-h,i=d-h,s=a+h;break;case 4:u=r+h,d=i+h,a=s-h;break;case 5:r=u-h,d=i+h,a=s-h;break;case 6:u=r+h,i=d-h,a=s-h;break;case 7:r=u-h,i=d-h,a=s-h;break}this._root&&this._root.length&&(this._root=l)}return this._x0=r,this._y0=i,this._z0=a,this._x1=u,this._y1=d,this._z1=s,this}function qr(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function Dr(t){return arguments.length?this.cover(+t[0][0],+t[0][1],+t[0][2]).cover(+t[1][0],+t[1][1],+t[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function R(t,e,n,r,i,a,u){this.node=t,this.x0=e,this.y0=n,this.z0=r,this.x1=i,this.y1=a,this.z1=u}function Gr(t,e,n,r){var i,a=this._x0,u=this._y0,d=this._z0,s,h,l,g,w,y,v=this._x1,x=this._y1,m=this._z1,c=[],M=this._root,N,C;for(M&&c.push(new R(M,a,u,d,v,x,m)),r==null?r=1/0:(a=t-r,u=e-r,d=n-r,v=t+r,x=e+r,m=n+r,r*=r);N=c.pop();)if(!(!(M=N.node)||(s=N.x0)>v||(h=N.y0)>x||(l=N.z0)>m||(g=N.x1)<a||(w=N.y1)<u||(y=N.z1)<d))if(M.length){var _=(s+g)/2,T=(h+w)/2,z=(l+y)/2;c.push(new R(M[7],_,T,z,g,w,y),new R(M[6],s,T,z,_,w,y),new R(M[5],_,h,z,g,T,y),new R(M[4],s,h,z,_,T,y),new R(M[3],_,T,l,g,w,z),new R(M[2],s,T,l,_,w,z),new R(M[1],_,h,l,g,T,z),new R(M[0],s,h,l,_,T,z)),(C=(n>=z)<<2|(e>=T)<<1|t>=_)&&(N=c[c.length-1],c[c.length-1]=c[c.length-1-C],c[c.length-1-C]=N)}else{var O=t-+this._x.call(null,M.data),U=e-+this._y.call(null,M.data),H=n-+this._z.call(null,M.data),V=O*O+U*U+H*H;if(V<r){var j=Math.sqrt(r=V);a=t-j,u=e-j,d=n-j,v=t+j,x=e+j,m=n+j,i=M.data}}return i}function jr(t){if(isNaN(w=+this._x.call(null,t))||isNaN(y=+this._y.call(null,t))||isNaN(v=+this._z.call(null,t)))return this;var e,n=this._root,r,i,a,u=this._x0,d=this._y0,s=this._z0,h=this._x1,l=this._y1,g=this._z1,w,y,v,x,m,c,M,N,C,_,T;if(!n)return this;if(n.length)for(;;){if((M=w>=(x=(u+h)/2))?u=x:h=x,(N=y>=(m=(d+l)/2))?d=m:l=m,(C=v>=(c=(s+g)/2))?s=c:g=c,e=n,!(n=n[_=C<<2|N<<1|M]))return this;if(!n.length)break;(e[_+1&7]||e[_+2&7]||e[_+3&7]||e[_+4&7]||e[_+5&7]||e[_+6&7]||e[_+7&7])&&(r=e,T=_)}for(;n.data!==t;)if(i=n,!(n=n.next))return this;return(a=n.next)&&delete n.next,i?(a?i.next=a:delete i.next,this):e?(a?e[_]=a:delete e[_],(n=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&n===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!n.length&&(r?r[T]=n:this._root=n),this):(this._root=a,this)}function Rr(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function Ur(){return this._root}function Hr(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function Vr(t){var e=[],n,r=this._root,i,a,u,d,s,h,l;for(r&&e.push(new R(r,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));n=e.pop();)if(!t(r=n.node,a=n.x0,u=n.y0,d=n.z0,s=n.x1,h=n.y1,l=n.z1)&&r.length){var g=(a+s)/2,w=(u+h)/2,y=(d+l)/2;(i=r[7])&&e.push(new R(i,g,w,y,s,h,l)),(i=r[6])&&e.push(new R(i,a,w,y,g,h,l)),(i=r[5])&&e.push(new R(i,g,u,y,s,w,l)),(i=r[4])&&e.push(new R(i,a,u,y,g,w,l)),(i=r[3])&&e.push(new R(i,g,w,d,s,h,y)),(i=r[2])&&e.push(new R(i,a,w,d,g,h,y)),(i=r[1])&&e.push(new R(i,g,u,d,s,w,y)),(i=r[0])&&e.push(new R(i,a,u,d,g,w,y))}return this}function Qr(t){var e=[],n=[],r;for(this._root&&e.push(new R(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));r=e.pop();){var i=r.node;if(i.length){var a,u=r.x0,d=r.y0,s=r.z0,h=r.x1,l=r.y1,g=r.z1,w=(u+h)/2,y=(d+l)/2,v=(s+g)/2;(a=i[0])&&e.push(new R(a,u,d,s,w,y,v)),(a=i[1])&&e.push(new R(a,w,d,s,h,y,v)),(a=i[2])&&e.push(new R(a,u,y,s,w,l,v)),(a=i[3])&&e.push(new R(a,w,y,s,h,l,v)),(a=i[4])&&e.push(new R(a,u,d,v,w,y,g)),(a=i[5])&&e.push(new R(a,w,d,v,h,y,g)),(a=i[6])&&e.push(new R(a,u,y,v,w,l,g)),(a=i[7])&&e.push(new R(a,w,y,v,h,l,g))}n.push(r)}for(;r=n.pop();)t(r.node,r.x0,r.y0,r.z0,r.x1,r.y1,r.z1);return this}function Wr(t){return t[0]}function Jr(t){return arguments.length?(this._x=t,this):this._x}function Xr(t){return t[1]}function Kr(t){return arguments.length?(this._y=t,this):this._y}function Yr(t){return t[2]}function Zr(t){return arguments.length?(this._z=t,this):this._z}function Dt(t,e,n,r){var i=new rt(e??Wr,n??Xr,r??Yr,NaN,NaN,NaN,NaN,NaN,NaN);return t==null?i:i.addAll(t)}function rt(t,e,n,r,i,a,u,d,s){this._x=t,this._y=e,this._z=n,this._x0=r,this._y0=i,this._z0=a,this._x1=u,this._y1=d,this._z1=s,this._root=void 0}function Gt(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var Z=Dt.prototype=rt.prototype;Z.copy=function(){var t=new rt(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,n,r;if(!e)return t;if(!e.length)return t._root=Gt(e),t;for(n=[{source:e,target:t._root=new Array(8)}];e=n.pop();)for(var i=0;i<8;++i)(r=e.source[i])&&(r.length?n.push({source:r,target:e.target[i]=new Array(8)}):e.target[i]=Gt(r));return t},Z.add=Or,Z.addAll=Fr,Z.cover=kr,Z.data=qr,Z.extent=Dr,Z.find=Gr,Z.remove=jr,Z.removeAll=Rr,Z.root=Ur,Z.size=Hr,Z.visit=Vr,Z.visitAfter=Qr,Z.x=Jr,Z.y=Kr,Z.z=Zr;function Te(t){return function(){return t}}function de(t){return(t()-.5)*1e-6}function ei(t){return t.index}function jt(t,e){var n=t.get(e);if(!n)throw new Error("node not found: "+e);return n}function ti(t){var e=ei,n=w,r,i=Te(30),a,u,d,s,h,l,g=1;t==null&&(t=[]);function w(c){return 1/Math.min(s[c.source.index],s[c.target.index])}function y(c){for(var M=0,N=t.length;M<g;++M)for(var C=0,_,T,z,O=0,U=0,H=0,V,j;C<N;++C)_=t[C],T=_.source,z=_.target,O=z.x+z.vx-T.x-T.vx||de(l),d>1&&(U=z.y+z.vy-T.y-T.vy||de(l)),d>2&&(H=z.z+z.vz-T.z-T.vz||de(l)),V=Math.sqrt(O*O+U*U+H*H),V=(V-a[C])/V*c*r[C],O*=V,U*=V,H*=V,z.vx-=O*(j=h[C]),d>1&&(z.vy-=U*j),d>2&&(z.vz-=H*j),T.vx+=O*(j=1-j),d>1&&(T.vy+=U*j),d>2&&(T.vz+=H*j)}function v(){if(u){var c,M=u.length,N=t.length,C=new Map(u.map((T,z)=>[e(T,z,u),T])),_;for(c=0,s=new Array(M);c<N;++c)_=t[c],_.index=c,typeof _.source!="object"&&(_.source=jt(C,_.source)),typeof _.target!="object"&&(_.target=jt(C,_.target)),s[_.source.index]=(s[_.source.index]||0)+1,s[_.target.index]=(s[_.target.index]||0)+1;for(c=0,h=new Array(N);c<N;++c)_=t[c],h[c]=s[_.source.index]/(s[_.source.index]+s[_.target.index]);r=new Array(N),x(),a=new Array(N),m()}}function x(){if(u)for(var c=0,M=t.length;c<M;++c)r[c]=+n(t[c],c,t)}function m(){if(u)for(var c=0,M=t.length;c<M;++c)a[c]=+i(t[c],c,t)}return y.initialize=function(c,...M){u=c,l=M.find(N=>typeof N=="function")||Math.random,d=M.find(N=>[1,2,3].includes(N))||2,v()},y.links=function(c){return arguments.length?(t=c,v(),y):t},y.id=function(c){return arguments.length?(e=c,y):e},y.iterations=function(c){return arguments.length?(g=+c,y):g},y.strength=function(c){return arguments.length?(n=typeof c=="function"?c:Te(+c),x(),y):n},y.distance=function(c){return arguments.length?(i=typeof c=="function"?c:Te(+c),m(),y):i},y}var ni={value:()=>{}};function Rt(){for(var t=0,e=arguments.length,n={},r;t<e;++t){if(!(r=arguments[t]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new De(n)}function De(t){this._=t}function ri(t,e){return t.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}De.prototype=Rt.prototype={constructor:De,on:function(t,e){var n=this._,r=ri(t+"",n),i,a=-1,u=r.length;if(arguments.length<2){for(;++a<u;)if((i=(t=r[a]).type)&&(i=ii(n[i],t.name)))return i;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++a<u;)if(i=(t=r[a]).type)n[i]=Ut(n[i],t.name,e);else if(e==null)for(i in n)n[i]=Ut(n[i],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new De(t)},call:function(t,e){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,a;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(a=this._[t],r=0,i=a.length;r<i;++r)a[r].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,a=r.length;i<a;++i)r[i].value.apply(e,n)}};function ii(t,e){for(var n=0,r=t.length,i;n<r;++n)if((i=t[n]).name===e)return i.value}function Ut(t,e,n){for(var r=0,i=t.length;r<i;++r)if(t[r].name===e){t[r]=ni,t=t.slice(0,r).concat(t.slice(r+1));break}return n!=null&&t.push({name:e,value:n}),t}var Me=0,$e=0,Be=0,Ht=1e3,Ge,Se,je=0,me=0,Re=0,Pe=typeof performance=="object"&&performance.now?performance:Date,Vt=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Qt(){return me||(Vt(ai),me=Pe.now()+Re)}function ai(){me=0}function it(){this._call=this._time=this._next=null}it.prototype=Wt.prototype={constructor:it,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?Qt():+n)+(e==null?0:+e),!this._next&&Se!==this&&(Se?Se._next=this:Ge=this,Se=this),this._call=t,this._time=n,at()},stop:function(){this._call&&(this._call=null,this._time=1/0,at())}};function Wt(t,e,n){var r=new it;return r.restart(t,e,n),r}function oi(){Qt(),++Me;for(var t=Ge,e;t;)(e=me-t._time)>=0&&t._call.call(void 0,e),t=t._next;--Me}function Jt(){me=(je=Pe.now())+Re,Me=$e=0;try{oi()}finally{Me=0,ui(),me=0}}function si(){var t=Pe.now(),e=t-je;e>Ht&&(Re-=e,je=t)}function ui(){for(var t,e=Ge,n,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Ge=n);Se=t,at(r)}function at(t){if(!Me){$e&&($e=clearTimeout($e));var e=t-me;e>24?(t<1/0&&($e=setTimeout(Jt,t-Pe.now()-Re)),Be&&(Be=clearInterval(Be))):(Be||(je=Pe.now(),Be=setInterval(si,Ht)),Me=1,Vt(Jt))}}const hi=1664525,fi=1013904223,Xt=4294967296;function di(){let t=1;return()=>(t=(hi*t+fi)%Xt)/Xt}var Kt=3;function ot(t){return t.x}function Yt(t){return t.y}function ci(t){return t.z}var li=10,pi=Math.PI*(3-Math.sqrt(5)),gi=Math.PI*20/(9+Math.sqrt(221));function vi(t,e){e=e||2;var n=Math.min(Kt,Math.max(1,Math.round(e))),r,i=1,a=.001,u=1-Math.pow(a,1/300),d=0,s=.6,h=new Map,l=Wt(y),g=Rt("tick","end"),w=di();t==null&&(t=[]);function y(){v(),g.call("tick",r),i<a&&(l.stop(),g.call("end",r))}function v(c){var M,N=t.length,C;c===void 0&&(c=1);for(var _=0;_<c;++_)for(i+=(d-i)*u,h.forEach(function(T){T(i)}),M=0;M<N;++M)C=t[M],C.fx==null?C.x+=C.vx*=s:(C.x=C.fx,C.vx=0),n>1&&(C.fy==null?C.y+=C.vy*=s:(C.y=C.fy,C.vy=0)),n>2&&(C.fz==null?C.z+=C.vz*=s:(C.z=C.fz,C.vz=0));return r}function x(){for(var c=0,M=t.length,N;c<M;++c){if(N=t[c],N.index=c,N.fx!=null&&(N.x=N.fx),N.fy!=null&&(N.y=N.fy),N.fz!=null&&(N.z=N.fz),isNaN(N.x)||n>1&&isNaN(N.y)||n>2&&isNaN(N.z)){var C=li*(n>2?Math.cbrt(.5+c):n>1?Math.sqrt(.5+c):c),_=c*pi,T=c*gi;n===1?N.x=C:n===2?(N.x=C*Math.cos(_),N.y=C*Math.sin(_)):(N.x=C*Math.sin(_)*Math.cos(T),N.y=C*Math.cos(_),N.z=C*Math.sin(_)*Math.sin(T))}(isNaN(N.vx)||n>1&&isNaN(N.vy)||n>2&&isNaN(N.vz))&&(N.vx=0,n>1&&(N.vy=0),n>2&&(N.vz=0))}}function m(c){return c.initialize&&c.initialize(t,w,n),c}return x(),r={tick:v,restart:function(){return l.restart(y),r},stop:function(){return l.stop(),r},numDimensions:function(c){return arguments.length?(n=Math.min(Kt,Math.max(1,Math.round(c))),h.forEach(m),r):n},nodes:function(c){return arguments.length?(t=c,x(),h.forEach(m),r):t},alpha:function(c){return arguments.length?(i=+c,r):i},alphaMin:function(c){return arguments.length?(a=+c,r):a},alphaDecay:function(c){return arguments.length?(u=+c,r):+u},alphaTarget:function(c){return arguments.length?(d=+c,r):d},velocityDecay:function(c){return arguments.length?(s=1-c,r):1-s},randomSource:function(c){return arguments.length?(w=c,h.forEach(m),r):w},force:function(c,M){return arguments.length>1?(M==null?h.delete(c):h.set(c,m(M)),r):h.get(c)},find:function(){var c=Array.prototype.slice.call(arguments),M=c.shift()||0,N=(n>1?c.shift():null)||0,C=(n>2?c.shift():null)||0,_=c.shift()||1/0,T=0,z=t.length,O,U,H,V,j,he;for(_*=_,T=0;T<z;++T)j=t[T],O=M-j.x,U=N-(j.y||0),H=C-(j.z||0),V=O*O+U*U+H*H,V<_&&(he=j,_=V);return he},on:function(c,M){return arguments.length>1?(g.on(c,M),r):g.on(c)}}}function yi(){var t,e,n,r,i,a=Te(-30),u,d=1,s=1/0,h=.81;function l(v){var x,m=t.length,c=(e===1?zt(t,ot):e===2?Ft(t,ot,Yt):e===3?Dt(t,ot,Yt,ci):null).visitAfter(w);for(i=v,x=0;x<m;++x)n=t[x],c.visit(y)}function g(){if(t){var v,x=t.length,m;for(u=new Array(x),v=0;v<x;++v)m=t[v],u[m.index]=+a(m,v,t)}}function w(v){var x=0,m,c,M=0,N,C,_,T,z=v.length;if(z){for(N=C=_=T=0;T<z;++T)(m=v[T])&&(c=Math.abs(m.value))&&(x+=m.value,M+=c,N+=c*(m.x||0),C+=c*(m.y||0),_+=c*(m.z||0));x*=Math.sqrt(4/z),v.x=N/M,e>1&&(v.y=C/M),e>2&&(v.z=_/M)}else{m=v,m.x=m.data.x,e>1&&(m.y=m.data.y),e>2&&(m.z=m.data.z);do x+=u[m.data.index];while(m=m.next)}v.value=x}function y(v,x,m,c,M){if(!v.value)return!0;var N=[m,c,M][e-1],C=v.x-n.x,_=e>1?v.y-n.y:0,T=e>2?v.z-n.z:0,z=N-x,O=C*C+_*_+T*T;if(z*z/h<O)return O<s&&(C===0&&(C=de(r),O+=C*C),e>1&&_===0&&(_=de(r),O+=_*_),e>2&&T===0&&(T=de(r),O+=T*T),O<d&&(O=Math.sqrt(d*O)),n.vx+=C*v.value*i/O,e>1&&(n.vy+=_*v.value*i/O),e>2&&(n.vz+=T*v.value*i/O)),!0;if(v.length||O>=s)return;(v.data!==n||v.next)&&(C===0&&(C=de(r),O+=C*C),e>1&&_===0&&(_=de(r),O+=_*_),e>2&&T===0&&(T=de(r),O+=T*T),O<d&&(O=Math.sqrt(d*O)));do v.data!==n&&(z=u[v.data.index]*i/O,n.vx+=C*z,e>1&&(n.vy+=_*z),e>2&&(n.vz+=T*z));while(v=v.next)}return l.initialize=function(v,...x){t=v,r=x.find(m=>typeof m=="function")||Math.random,e=x.find(m=>[1,2,3].includes(m))||2,g()},l.strength=function(v){return arguments.length?(a=typeof v=="function"?v:Te(+v),g(),l):a},l.distanceMin=function(v){return arguments.length?(d=v*v,l):Math.sqrt(d)},l.distanceMax=function(v){return arguments.length?(s=v*v,l):Math.sqrt(s)},l.theta=function(v){return arguments.length?(h=v*v,l):Math.sqrt(h)},l}function st(t){return typeof t=="object"&&t!==null&&"index"in t&&typeof t.index=="number"&&"x"in t&&typeof t.x=="number"&&"y"in t&&typeof t.y=="number"&&"z"in t&&typeof t.z=="number"&&"vx"in t&&typeof t.vx=="number"&&"vy"in t&&typeof t.vy=="number"&&"vz"in t&&typeof t.vz=="number"}function mi(t){return!!(typeof t=="object"&&t!==null&&Object.hasOwn(t,"index")&&"index"in t&&typeof t.index=="number"&&"source"in t&&st(t.source)&&"target"in t&&st(t.target))}class wi{constructor(){I(this,"d3ForceLayout");I(this,"d3AlphaMin",.1);I(this,"d3AlphaTarget",0);I(this,"d3AlphaDecay",.0228);I(this,"d3VelocityDecay",.4);I(this,"nodeMapping",new Map);I(this,"edgeMapping",new Map);I(this,"newNodeMap",new Map);I(this,"newEdgeMap",new Map);I(this,"reheat",!1);this.d3ForceLayout=vi().numDimensions(3).alpha(1).force("link",ti()).force("charge",yi()).force("center",ar()).force("dagRadial",null).stop(),this.d3ForceLayout.force("link").id(e=>e.id)}get graphNeedsRefresh(){return!!this.newNodeMap.size||!!this.newEdgeMap.size}async init(){}refresh(){if(this.graphNeedsRefresh||this.reheat){let e=[...this.nodeMapping.values()];e=e.concat([...this.newNodeMap.values()]),this.d3ForceLayout.alpha(1).nodes(e).stop();for(const r of this.newNodeMap.entries()){const i=r[0],a=r[1];if(!st(a))throw new Error("Internal error: Node is not settled as a complete D3 Node");this.nodeMapping.set(i,a)}this.newNodeMap.clear();let n=[...this.edgeMapping.values()];n=n.concat([...this.newEdgeMap.values()]),this.d3ForceLayout.force("link").links(n);for(const r of this.newEdgeMap.entries()){const i=r[0],a=r[1];if(!mi(a))throw new Error("Internal error: Edge is not settled as a complete D3 Edge");this.edgeMapping.set(i,a)}this.newEdgeMap.clear()}}step(){this.refresh(),this.d3ForceLayout.tick()}get isSettled(){return console.log(`this.d3ForceLayout.alpha() ${this.d3ForceLayout.alpha()}`),this.d3ForceLayout.alpha()<this.d3AlphaMin}addNode(e){this.newNodeMap.set(e,{id:e.id})}addEdge(e){this.newEdgeMap.set(e,{source:e.srcId,target:e.dstId})}get nodes(){return this.nodeMapping.keys()}get edges(){return this.edgeMapping.keys()}getNodePosition(e){const n=this._getMappedNode(e);if(n.x===void 0||n.y===void 0||n.z===void 0)throw new Error("Internal error: Node not initialized in D3GraphEngine");return{x:n.x,y:n.y,z:n.z}}setNodePosition(e,n){const r=this._getMappedNode(e);r.x=n.x,r.y=n.y,r.z=n.z??0,this.reheat=!0}getEdgePosition(e){const n=this._getMappedEdge(e);return{src:{x:n.source.x,y:n.source.y,z:n.source.z},dst:{x:n.target.x,y:n.target.y,z:n.target.z}}}pin(e){const n=this._getMappedNode(e);n.fx=n.x,n.fy=n.y,n.fz=n.z,this.reheat=!0}unpin(e){const n=this._getMappedNode(e);n.fx=void 0,n.fy=void 0,n.fz=void 0,this.reheat=!0}_getMappedNode(e){this.refresh();const n=this.nodeMapping.get(e);if(!n)throw new Error("Internal error: Node not found in D3GraphEngine");return n}_getMappedEdge(e){this.refresh();const n=this.edgeMapping.get(e);if(!n)throw new Error("Internal error: Edge not found in D3GraphEngine");return n}}const Zt=new Map;class bi{constructor(){I(this,"hits",0);I(this,"misses",0)}get(e,n){let r=Zt.get(e);return r?(this.hits++,r.createInstance(e)):(this.misses++,r=n(),r.isVisible=!1,Zt.set(e,r),r.createInstance(e))}reset(){this.hits=0,this.misses=0}}var ut=function(e){_i(e);var n=xi(e);return e.on=n.on,e.off=n.off,e.fire=n.fire,e};function xi(t){var e=Object.create(null);return{on:function(n,r,i){if(typeof r!="function")throw new Error("callback is expected to be a function");var a=e[n];return a||(a=e[n]=[]),a.push({callback:r,ctx:i}),t},off:function(n,r){var i=typeof n>"u";if(i)return e=Object.create(null),t;if(e[n]){var a=typeof r!="function";if(a)delete e[n];else for(var u=e[n],d=0;d<u.length;++d)u[d].callback===r&&u.splice(d,1)}return t},fire:function(n){var r=e[n];if(!r)return t;var i;arguments.length>1&&(i=Array.prototype.splice.call(arguments,1));for(var a=0;a<r.length;++a){var u=r[a];u.callback.apply(u.ctx,i)}return t}}}function _i(t){if(!t)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],n=0;n<e.length;++n)if(t.hasOwnProperty(e[n]))throw new Error("Subject cannot be eventified, since it already has property '"+e[n]+"'")}var Mi=Ni,Ci=ut;function Ni(t){if(t=t||{},"uniqueLinkId"in t&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),t.multigraph=t.uniqueLinkId),t.multigraph===void 0&&(t.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,n=new Map,r={},i=0,a=t.multigraph?C:N,u=[],d=B,s=B,h=B,l=B,g={version:20,addNode:x,addLink:M,removeLink:O,removeNode:c,getNode:m,getNodeCount:_,getLinkCount:T,getEdgeCount:T,getLinksCount:T,getNodesCount:_,getLinks:z,forEachNode:ue,forEachLinkedNode:he,forEachLink:j,beginUpdate:h,endUpdate:l,clear:V,hasLink:H,hasNode:m,getLink:H};return Ci(g),w(),g;function w(){var P=g.on;g.on=A;function A(){return g.beginUpdate=h=Q,g.endUpdate=l=oe,d=y,s=v,g.on=P,P.apply(g,arguments)}}function y(P,A){u.push({link:P,changeType:A})}function v(P,A){u.push({node:P,changeType:A})}function x(P,A){if(P===void 0)throw new Error("Invalid node identifier");h();var F=m(P);return F?(F.data=A,s(F,"update")):(F=new Ei(P,A),s(F,"add")),e.set(P,F),l(),F}function m(P){return e.get(P)}function c(P){var A=m(P);if(!A)return!1;h();var F=A.links;return F&&(F.forEach(U),A.links=null),e.delete(P),s(A,"remove"),l(),!0}function M(P,A,F){h();var L=m(P)||x(P),K=m(A)||x(A),X=a(P,A,F),ee=n.has(X.id);return n.set(X.id,X),en(L,X),P!==A&&en(K,X),d(X,ee?"update":"add"),l(),X}function N(P,A,F){var L=Ue(P,A),K=n.get(L);return K?(K.data=F,K):new tn(P,A,F,L)}function C(P,A,F){var L=Ue(P,A),K=r.hasOwnProperty(L);if(K||H(P,A)){K||(r[L]=0);var X="@"+ ++r[L];L=Ue(P+X,A+X)}return new tn(P,A,F,L)}function _(){return e.size}function T(){return n.size}function z(P){var A=m(P);return A?A.links:null}function O(P,A){return A!==void 0&&(P=H(P,A)),U(P)}function U(P){if(!P||!n.get(P.id))return!1;h(),n.delete(P.id);var A=m(P.fromId),F=m(P.toId);return A&&A.links.delete(P),F&&F.links.delete(P),d(P,"remove"),l(),!0}function H(P,A){if(!(P===void 0||A===void 0))return n.get(Ue(P,A))}function V(){h(),ue(function(P){c(P.id)}),l()}function j(P){if(typeof P=="function")for(var A=n.values(),F=A.next();!F.done;){if(P(F.value))return!0;F=A.next()}}function he(P,A,F){var L=m(P);if(L&&L.links&&typeof A=="function")return F?b(L.links,P,A):E(L.links,P,A)}function E(P,A,F){for(var L,K=P.values(),X=K.next();!X.done;){var ee=X.value,He=ee.fromId===A?ee.toId:ee.fromId;if(L=F(e.get(He),ee),L)return!0;X=K.next()}}function b(P,A,F){for(var L,K=P.values(),X=K.next();!X.done;){var ee=X.value;if(ee.fromId===A&&(L=F(e.get(ee.toId),ee),L))return!0;X=K.next()}}function B(){}function Q(){i+=1}function oe(){i-=1,i===0&&u.length>0&&(g.fire("changed",u),u.length=0)}function ue(P){if(typeof P!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+P);for(var A=e.values(),F=A.next();!F.done;){if(P(F.value))return!0;F=A.next()}}}function Ei(t,e){this.id=t,this.links=null,this.data=e}function en(t,e){t.links?t.links.add(e):t.links=new Set([e])}function tn(t,e,n,r){this.fromId=t,this.toId=e,this.data=n,this.id=r}function Ue(t,e){return t.toString()+"👉 "+e.toString()}const Ti=et(Mi);var ht={exports:{}},Ie={exports:{}},nn=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const $i=nn;var Ce=function(e){return n;function n(r,i){let a=i&&i.indent||0,u=i&&i.join!==void 0?i.join:`
`,d=Array(a+1).join(" "),s=[];for(let h=0;h<e;++h){let l=$i(h),g=h===0?"":d;s.push(g+r.replace(/{var}/g,l))}return s.join(u)}};const rn=Ce;Ie.exports=Bi,Ie.exports.generateCreateBodyFunctionBody=an,Ie.exports.getVectorCode=sn,Ie.exports.getBodyCode=on;function Bi(t,e){let n=an(t,e),{Body:r}=new Function(n)();return r}function an(t,e){return`
${sn(t,e)}
${on(t)}
return {Body: Body, Vector: Vector};
`}function on(t){let e=rn(t),n=e("{var}",{join:", "});return`
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
};`}function sn(t,e){let n=rn(t),r="";return e&&(r=`${n(`
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
  };`}var Si=Ie.exports,ve={exports:{}};const ft=Ce,ye=nn;ve.exports=Pi,ve.exports.generateQuadTreeFunctionBody=un,ve.exports.getInsertStackCode=ln,ve.exports.getQuadNodeCode=cn,ve.exports.isSamePosition=hn,ve.exports.getChildBodyCode=dn,ve.exports.setChildBodyCode=fn;function Pi(t){let e=un(t);return new Function(e)()}function un(t){let e=ft(t),n=Math.pow(2,t);return`
${ln()}
${cn(t)}
${hn(t)}
${dn(t)}
${fn(t)}

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

`;function i(d){let s=[],h=Array(d+1).join(" ");for(let l=0;l<t;++l)s.push(h+`if (${ye(l)} > max_${ye(l)}) {`),s.push(h+`  quadIdx = quadIdx + ${Math.pow(2,l)};`),s.push(h+`  min_${ye(l)} = max_${ye(l)};`),s.push(h+`  max_${ye(l)} = node.max_${ye(l)};`),s.push(h+"}");return s.join(`
`)}function a(){let d=Array(11).join(" "),s=[];for(let h=0;h<n;++h)s.push(d+`if (node.quad${h}) {`),s.push(d+`  queue[pushIdx] = node.quad${h};`),s.push(d+"  queueLength += 1;"),s.push(d+"  pushIdx += 1;"),s.push(d+"}");return s.join(`
`)}function u(d){let s=[];for(let h=0;h<n;++h)s.push(`${d}quad${h} = null;`);return s.join(`
`)}}function hn(t){let e=ft(t);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function fn(t){var e=Math.pow(2,t);return`
function setChild(node, idx, child) {
  ${n()}
}`;function n(){let r=[];for(let i=0;i<e;++i){let a=i===0?"  ":"  else ";r.push(`${a}if (idx === ${i}) node.quad${i} = child;`)}return r.join(`
`)}}function dn(t){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let n=[],r=Math.pow(2,t);for(let i=0;i<r;++i)n.push(`  if (idx === ${i}) return node.quad${i};`);return n.join(`
`)}}function cn(t){let e=ft(t),n=Math.pow(2,t);var r=`
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
`;return r;function i(a){let u=[];for(let d=0;d<n;++d)u.push(`${a}quad${d} = null;`);return u.join(`
`)}}function ln(){return`
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
`}var Ii=ve.exports,dt={exports:{}};dt.exports=zi,dt.exports.generateFunctionBody=pn;const Ai=Ce;function zi(t){let e=pn(t);return new Function("bodies","settings","random",e)}function pn(t){let e=Ai(t);return`
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
`}var Li=dt.exports,ct={exports:{}};const Oi=Ce;ct.exports=Fi,ct.exports.generateCreateDragForceFunctionBody=gn;function Fi(t){let e=gn(t);return new Function("options",e)}function gn(t){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${Oi(t)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var ki=ct.exports,lt={exports:{}};const qi=Ce;lt.exports=Di,lt.exports.generateCreateSpringForceFunctionBody=vn;function Di(t){let e=vn(t);return new Function("options","random",e)}function vn(t){let e=qi(t);return`
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
`}var Gi=lt.exports,pt={exports:{}};const ji=Ce;pt.exports=Ri,pt.exports.generateIntegratorFunctionBody=yn;function Ri(t){let e=yn(t);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function yn(t){let e=ji(t);return`
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
`}var Ui=pt.exports,gt,mn;function Hi(){if(mn)return gt;mn=1,gt=t;function t(e,n,r,i){this.from=e,this.to=n,this.length=r,this.coefficient=i}return gt}var vt,wn;function Vi(){if(wn)return vt;wn=1,vt=t;function t(e,n){var r;if(e||(e={}),n){for(r in n)if(n.hasOwnProperty(r)){var i=e.hasOwnProperty(r),a=typeof n[r],u=!i||typeof e[r]!==a;u?e[r]=n[r]:a==="object"&&(e[r]=t(e[r],n[r]))}}return e}return vt}var Ae={exports:{}},bn;function Qi(){if(bn)return Ae.exports;bn=1,Ae.exports=t,Ae.exports.random=t,Ae.exports.randomIterator=d;function t(s){var h=typeof s=="number"?s:+new Date;return new e(h)}function e(s){this.seed=s}e.prototype.next=u,e.prototype.nextDouble=a,e.prototype.uniform=a,e.prototype.gaussian=n;function n(){var s,h,l;do h=this.nextDouble()*2-1,l=this.nextDouble()*2-1,s=h*h+l*l;while(s>=1||s===0);return h*Math.sqrt(-2*Math.log(s)/s)}e.prototype.levy=r;function r(){var s=1.5,h=Math.pow(i(1+s)*Math.sin(Math.PI*s/2)/(i((1+s)/2)*s*Math.pow(2,(s-1)/2)),1/s);return this.gaussian()*h/Math.pow(Math.abs(this.gaussian()),1/s)}function i(s){return Math.sqrt(2*Math.PI/s)*Math.pow(1/Math.E*(s+1/(12*s-1/(10*s))),s)}function a(){var s=this.seed;return s=s+2127912214+(s<<12)&4294967295,s=(s^3345072700^s>>>19)&4294967295,s=s+374761393+(s<<5)&4294967295,s=(s+3550635116^s<<9)&4294967295,s=s+4251993797+(s<<3)&4294967295,s=(s^3042594569^s>>>16)&4294967295,this.seed=s,(s&268435455)/268435456}function u(s){return Math.floor(this.nextDouble()*s)}function d(s,h){var l=h||t();if(typeof l.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:w,shuffle:g};function g(){var y,v,x;for(y=s.length-1;y>0;--y)v=l.next(y+1),x=s[v],s[v]=s[y],s[y]=x;return s}function w(y){var v,x,m;for(v=s.length-1;v>0;--v)x=l.next(v+1),m=s[x],s[x]=s[v],s[v]=m,y(m);s.length&&y(s[0])}}return Ae.exports}var xn=ea,Wi=Si,Ji=Ii,Xi=Li,Ki=ki,Yi=Gi,Zi=Ui,_n={};function ea(t){var e=Hi(),n=Vi(),r=ut;if(t){if(t.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(t.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}t=n(t,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var i=_n[t.dimensions];if(!i){var a=t.dimensions;i={Body:Wi(a,t.debug),createQuadTree:Ji(a),createBounds:Xi(a),createDragForce:Ki(a),createSpringForce:Yi(a),integrate:Zi(a)},_n[a]=i}var u=i.Body,d=i.createQuadTree,s=i.createBounds,h=i.createDragForce,l=i.createSpringForce,g=i.integrate,w=b=>new u(b),y=Qi().random(42),v=[],x=[],m=d(t,y),c=s(v,t,y),M=l(t,y),N=h(t),C=0,_=[],T=new Map,z=0;H("nbody",he),H("spring",E);var O={bodies:v,quadTree:m,springs:x,settings:t,addForce:H,removeForce:V,getForces:j,step:function(){for(var b=0;b<_.length;++b)_[b](z);var B=g(v,t.timeStep,t.adaptiveTimeStepWeight);return z+=1,B},addBody:function(b){if(!b)throw new Error("Body is required");return v.push(b),b},addBodyAt:function(b){if(!b)throw new Error("Body position is required");var B=w(b);return v.push(B),B},removeBody:function(b){if(b){var B=v.indexOf(b);if(!(B<0))return v.splice(B,1),v.length===0&&c.reset(),!0}},addSpring:function(b,B,Q,oe){if(!b||!B)throw new Error("Cannot add null spring to force simulator");typeof Q!="number"&&(Q=-1);var ue=new e(b,B,Q,oe>=0?oe:-1);return x.push(ue),ue},getTotalMovement:function(){return C},removeSpring:function(b){if(b){var B=x.indexOf(b);if(B>-1)return x.splice(B,1),!0}},getBestNewBodyPosition:function(b){return c.getBestNewPosition(b)},getBBox:U,getBoundingBox:U,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(b){return b!==void 0?(t.gravity=b,m.options({gravity:b}),this):t.gravity},theta:function(b){return b!==void 0?(t.theta=b,m.options({theta:b}),this):t.theta},random:y};return ta(t,O),r(O),O;function U(){return c.update(),c.box}function H(b,B){if(T.has(b))throw new Error("Force "+b+" is already added");T.set(b,B),_.push(B)}function V(b){var B=_.indexOf(T.get(b));B<0||(_.splice(B,1),T.delete(b))}function j(){return T}function he(){if(v.length!==0){m.insertBodies(v);for(var b=v.length;b--;){var B=v[b];B.isPinned||(B.reset(),m.updateBodyForce(B),N.update(B))}}}function E(){for(var b=x.length;b--;)M.update(x[b])}}function ta(t,e){for(var n in t)na(t,e,n)}function na(t,e,n){if(t.hasOwnProperty(n)&&typeof e[n]!="function"){var r=Number.isFinite(t[n]);r?e[n]=function(i){if(i!==void 0){if(!Number.isFinite(i))throw new Error("Value of "+n+" should be a valid number.");return t[n]=i,e}return t[n]}:e[n]=function(i){return i!==void 0?(t[n]=i,e):t[n]}}}ht.exports=ia,ht.exports.simulator=xn;var ra=ut;function ia(t,e){if(!t)throw new Error("Graph structure cannot be undefined");var n=e&&e.createSimulator||xn,r=n(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var i=t.version>19?he:j;e&&typeof e.nodeMass=="function"&&(i=e.nodeMass);var a=new Map,u={},d=0,s=r.settings.springTransform||aa;N(),m();var h=!1,l={step:function(){if(d===0)return g(!0),!0;var E=r.step();l.lastMove=E,l.fire("step");var b=E/d,B=b<=.01;return g(B),B},getNodePosition:function(E){return V(E).pos},setNodePosition:function(E){var b=V(E);b.setPosition.apply(b,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(E){var b=u[E];if(b)return{from:b.from.pos,to:b.to.pos}},getGraphRect:function(){return r.getBBox()},forEachBody:w,pinNode:function(E,b){var B=V(E.id);B.isPinned=!!b},isNodePinned:function(E){return V(E.id).isPinned},dispose:function(){t.off("changed",M),l.fire("disposed")},getBody:x,getSpring:v,getForceVectorLength:y,simulator:r,graph:t,lastMove:0};return ra(l),l;function g(E){h!==E&&(h=E,c(E))}function w(E){a.forEach(E)}function y(){var E=0,b=0;return w(function(B){E+=Math.abs(B.force.x),b+=Math.abs(B.force.y)}),Math.sqrt(E*E+b*b)}function v(E,b){var B;if(b===void 0)typeof E!="object"?B=E:B=E.id;else{var Q=t.hasLink(E,b);if(!Q)return;B=Q.id}return u[B]}function x(E){return a.get(E)}function m(){t.on("changed",M)}function c(E){l.fire("stable",E)}function M(E){for(var b=0;b<E.length;++b){var B=E[b];B.changeType==="add"?(B.node&&C(B.node.id),B.link&&T(B.link)):B.changeType==="remove"&&(B.node&&_(B.node),B.link&&z(B.link))}d=t.getNodesCount()}function N(){d=0,t.forEachNode(function(E){C(E.id),d+=1}),t.forEachLink(T)}function C(E){var b=a.get(E);if(!b){var B=t.getNode(E);if(!B)throw new Error("initBody() was called with unknown node id");var Q=B.position;if(!Q){var oe=O(B);Q=r.getBestNewBodyPosition(oe)}b=r.addBodyAt(Q),b.id=E,a.set(E,b),U(E),H(B)&&(b.isPinned=!0)}}function _(E){var b=E.id,B=a.get(b);B&&(a.delete(b),r.removeBody(B))}function T(E){U(E.fromId),U(E.toId);var b=a.get(E.fromId),B=a.get(E.toId),Q=r.addSpring(b,B,E.length);s(E,Q),u[E.id]=Q}function z(E){var b=u[E.id];if(b){var B=t.getNode(E.fromId),Q=t.getNode(E.toId);B&&U(B.id),Q&&U(Q.id),delete u[E.id],r.removeSpring(b)}}function O(E){var b=[];if(!E.links)return b;for(var B=Math.min(E.links.length,2),Q=0;Q<B;++Q){var oe=E.links[Q],ue=oe.fromId!==E.id?a.get(oe.fromId):a.get(oe.toId);ue&&ue.pos&&b.push(ue)}return b}function U(E){var b=a.get(E);if(b.mass=i(E),Number.isNaN(b.mass))throw new Error("Node mass should be a number")}function H(E){return E&&(E.isPinned||E.data&&E.data.isPinned)}function V(E){var b=a.get(E);return b||(C(E),b=a.get(E)),b}function j(E){var b=t.getLinks(E);return b?1+b.length/3:1}function he(E){var b=t.getLinks(E);return b?1+b.size/3:1}}function aa(){}var oa=ht.exports;const sa=et(oa);class ua{constructor(){I(this,"ngraph");I(this,"ngraphLayout");I(this,"nodeMapping",new Map);I(this,"edgeMapping",new Map);I(this,"_settled",!0);this.ngraph=Ti(),this.ngraphLayout=sa(this.ngraph,{dimensions:3})}async init(){}step(){this._settled=this.ngraphLayout.step()}get isSettled(){return this._settled}addNode(e){const n=this.ngraph.addNode(e.id,{parentNode:e});this.nodeMapping.set(e,n),this._settled=!1}addEdge(e){const n=this.ngraph.addLink(e.srcId,e.dstId,{parentEdge:this});this.edgeMapping.set(e,n),this._settled=!1}getNodePosition(e){const n=this._getMappedNode(e);return this.ngraphLayout.getNodePosition(n.id)}setNodePosition(e,n){const r=this._getMappedNode(e),i=this.ngraphLayout.getNodePosition(r.id);i.x=n.x,i.y=n.y,i.z=n.z}getEdgePosition(e){const n=this._getMappedEdge(e),r=this.ngraphLayout.getLinkPosition(n.id);return{src:{x:r.from.x,y:r.from.y,z:r.from.z},dst:{x:r.to.x,y:r.to.y,z:r.to.z}}}get nodes(){return this.nodeMapping.keys()}get edges(){return this.edgeMapping.keys()}pin(e){const n=this._getMappedNode(e);this.ngraphLayout.pinNode(n,!0)}unpin(e){const n=this._getMappedNode(e);this.ngraphLayout.pinNode(n,!1)}_getMappedNode(e){const n=this.nodeMapping.get(e);if(!n)throw new Error("Internal error: Node not found in NGraphEngine");return n}_getMappedEdge(e){const n=this.edgeMapping.get(e);if(!n)throw new Error("Internal error: Edge not found in NGraphEngine");return n}}class ha{constructor(e){I(this,"graph");I(this,"sceneInstrumentation");I(this,"babylonInstrumentation");I(this,"graphStep",new $.PerfCounter);I(this,"nodeUpdate",new $.PerfCounter);I(this,"edgeUpdate",new $.PerfCounter);I(this,"arrowCapUpdate",new $.PerfCounter);I(this,"intersectCalc",new $.PerfCounter);I(this,"loadTime",new $.PerfCounter);I(this,"totalUpdates",0);this.graph=e,this.sceneInstrumentation=new $.SceneInstrumentation(e.scene),this.sceneInstrumentation.captureFrameTime=!0,this.sceneInstrumentation.captureRenderTime=!0,this.sceneInstrumentation.captureInterFrameTime=!0,this.sceneInstrumentation.captureCameraRenderTime=!0,this.sceneInstrumentation.captureActiveMeshesEvaluationTime=!0,this.sceneInstrumentation.captureRenderTargetsRenderTime=!0,this.babylonInstrumentation=new $.EngineInstrumentation(e.engine),this.babylonInstrumentation.captureGPUFrameTime=!0,this.babylonInstrumentation.captureShaderCompilationTime=!0}toString(){let e="";function n(a,u,d=""){e+=`${a}: ${u}${d}
`}function r(a){e+=`
${a}
`;for(let u=0;u<a.length;u++)e+="-";e+=`
`}function i(a,u,d=1){e+=`${a} (min/avg/last sec/max [total]): `,e+=`${(u.min*d).toFixed(2)} / `,e+=`${(u.average*d).toFixed(2)} / `,e+=`${(u.lastSecAverage*d).toFixed(2)} / `,e+=`${(u.max*d).toFixed(2)} `,e+=`[${(u.total*d).toFixed(2)}] ms
`}return r("Graph"),n("Num Nodes",this.numNodes),n("Num Edges",this.numEdges),n("Total Updates",this.totalUpdates),n("Mesh Cache Hits",this.meshCacheHits),n("Mesh Cache Misses",this.meshCacheMisses),n("Number of Node Updates",this.nodeUpdate.count),n("Number of Edge Updates",this.edgeUpdate.count),n("Number of ArrowCap Updates",this.arrowCapUpdate.count),r("Graph Engine Performance"),i("JSON Load Time",this.loadTime),i("Graph Physics Engine Time",this.graphStep),i("Node Update Time",this.nodeUpdate),i("Edge Update Time",this.edgeUpdate),i("Arrow Cap Update Time",this.arrowCapUpdate),i("Ray Intersect Calculation Time",this.intersectCalc),r("BabylonJS Performance"),n("Draw Calls",this.sceneInstrumentation.drawCallsCounter.count),i("GPU Time",this.babylonInstrumentation.gpuFrameTimeCounter,1e-6),i("Shader Time",this.babylonInstrumentation.shaderCompilationTimeCounter),i("Mesh Evaluation Time",this.sceneInstrumentation.activeMeshesEvaluationTimeCounter),i("Render Targets Time",this.sceneInstrumentation.renderTargetsRenderTimeCounter),i("Draw Calls Time",this.sceneInstrumentation.drawCallsCounter),i("Frame Time",this.sceneInstrumentation.frameTimeCounter),i("Render Time",this.sceneInstrumentation.renderTimeCounter),i("Time Between Frames",this.sceneInstrumentation.interFrameTimeCounter),i("Camera Render Time",this.sceneInstrumentation.cameraRenderTimeCounter),e}step(){this.totalUpdates++}reset(){this.totalUpdates=0}get numNodes(){return _e.list.size}get numEdges(){return ie.list.size}get meshCacheHits(){return this.graph.meshCache.hits}get meshCacheMisses(){return this.graph.meshCache.misses}}class fa{constructor(e,n){I(this,"config");I(this,"stats");I(this,"element");I(this,"canvas");I(this,"engine");I(this,"scene");I(this,"camera");I(this,"skybox");I(this,"meshCache");I(this,"graphEngineType");I(this,"graphEngine");I(this,"running",!0);I(this,"pinOnDrag");I(this,"fetchNodes");I(this,"fetchEdges");I(this,"graphObservable",new $.Observable);I(this,"nodeObservable",new $.Observable);I(this,"edgeObservable",new $.Observable);if(this.config=nr(n),this.meshCache=new bi,this.fetchNodes=this.config.behavior.fetchNodes,this.fetchEdges=this.config.behavior.fetchEdges,typeof e=="string"){const r=document.getElementById(e);if(!r)throw new Error(`getElementById() could not find element '${e}'`);this.element=r}else if(e instanceof HTMLElement)this.element=e;else throw new TypeError("Graph constructor requires 'element' argument that is either a string specifying the ID of the HTML element or an HTMLElement");if(this.element.innerHTML="",this.canvas=document.createElement("canvas"),this.canvas.setAttribute("id","babylonForceGraphRenderCanvas"),this.canvas.setAttribute("touch-action","none"),this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.touchAction="none",this.element.appendChild(this.canvas),this.engine=new $.Engine(this.canvas,!0),this.scene=new $.Scene(this.engine),this.camera=new $.ArcRotateCamera("camera",-Math.PI/2,Math.PI/2.5,this.config.style.startingCameraDistance,new $.Vector3(0,0,0)),delete this.camera.lowerBetaLimit,delete this.camera.upperBetaLimit,this.camera.attachControl(this.canvas,!0),new $.HemisphericLight("light",new $.Vector3(1,1,0)),this.config.style.skybox&&this.config.style.skybox.length&&new $.PhotoDome("testdome",this.config.style.skybox,{resolution:32,size:1e3},this.scene),this.config.engine.type==="ngraph")this.graphEngine=new ua;else if(this.config.engine.type==="d3")this.graphEngine=new wi;else throw new TypeError(`Unknown graph engine type: '${this.graphEngineType}'`);this.stats=new ha(this);for(let r=0;r<this.config.engine.preSteps;r++)this.graphEngine.step()}async init(){this.engine.runRenderLoop(()=>{this.update(),this.scene.render()}),navigator.xr&&await this.scene.createDefaultXRExperienceAsync({disableTeleportation:!0}),window.addEventListener("resize",()=>{this.engine.resize()})}update(){if(this.running){this.stats.step(),this.stats.graphStep.beginMonitoring();for(let e=0;e<this.config.engine.stepMultiplier;e++)this.graphEngine.step();this.stats.graphStep.endMonitoring(),this.stats.nodeUpdate.beginMonitoring();for(const e of this.graphEngine.nodes)e.update();this.stats.nodeUpdate.endMonitoring(),this.stats.edgeUpdate.beginMonitoring(),ie.updateRays(this);for(const e of this.graphEngine.edges)e.update();this.stats.edgeUpdate.endMonitoring(),this.graphEngine.isSettled&&(this.graphObservable.notifyObservers({type:"graph-settled",graph:this}),this.running=!1)}}addNode(e,n={}){return this.nodeObservable.notifyObservers({type:"node-add-before",nodeId:e,metadata:n}),_e.create(this,e,{nodeMeshConfig:this.config.style.node,pinOnDrag:this.pinOnDrag,metadata:n})}addEdge(e,n,r={}){return this.edgeObservable.notifyObservers({type:"edge-add-before",srcNodeId:e,dstNodeId:n,metadata:r}),ie.create(this,e,n,{edgeMeshConfig:this.config.style.edge,metadata:r})}addListener(e,n){switch(e){case"graph-settled":this.graphObservable.add(r=>{r.type===e&&n(r)});break;case"node-add-before":this.nodeObservable.add(r=>{r.type===e&&n(r)});break;case"edge-add-before":this.edgeObservable.add(r=>{r.type===e&&n(r)});break;default:throw new TypeError(`Unknown listener type in addListener: ${e}`)}}async loadJsonData(e,n={}){this.stats.loadTime.beginMonitoring();const{nodeListProp:r,edgeListProp:i,nodeIdProp:a,edgeSrcIdProp:u,edgeDstIdProp:d}=ir(n),h=await(await fetch(e,n.fetchOpts)).json();if(!Array.isArray(h[r]))throw TypeError(`when fetching JSON data: '${r}' was not an Array`);if(!Array.isArray(h[i]))throw TypeError(`when fetching JSON data: '${i}' was not an Array`);for(const l of h[r]){const g=l[a],w=l;this.addNode(g,w)}for(const l of h[i]){const g=l[u],w=l[d],y=l;this.addEdge(g,w,y)}this.stats.loadTime.endMonitoring()}}Y.Edge=ie,Y.Graph=fa,Y.Node=_e,Y.util=Qn,Object.defineProperty(Y,Symbol.toStringTag,{value:"Module"})});
