(function(Y,$){typeof exports=="object"&&typeof module<"u"?$(exports,require("@babylonjs/core")):typeof define=="function"&&define.amd?define(["exports","@babylonjs/core"],$):(Y=typeof globalThis<"u"?globalThis:Y||self,$(Y.HtmlMesh={},Y.BABYLON))})(this,function(Y,$){"use strict";var No=Object.defineProperty;var Co=(Y,$,ge)=>$ in Y?No(Y,$,{enumerable:!0,configurable:!0,writable:!0,value:ge}):Y[$]=ge;var I=(Y,$,ge)=>(Co(Y,typeof $!="symbol"?$+"":$,ge),ge);const ge=new Map([["aliceblue","#f0f8ff"],["antiquewhite","#faebd7"],["aqua","#00ffff"],["aquamarine","#7fffd4"],["azure","#f0ffff"],["beige","#f5f5dc"],["bisque","#ffe4c4"],["black","#000000"],["blanchedalmond","#ffebcd"],["blue","#0000ff"],["blueviolet","#8a2be2"],["brown","#a52a2a"],["burlywood","#deb887"],["cadetblue","#5f9ea0"],["chartreuse","#7fff00"],["chocolate","#d2691e"],["coral","#ff7f50"],["cornflowerblue","#6495ed"],["cornsilk","#fff8dc"],["crimson","#dc143c"],["cyan","#00ffff"],["darkblue","#00008b"],["darkcyan","#008b8b"],["darkgoldenrod","#b8860b"],["darkgray","#a9a9a9"],["darkgreen","#006400"],["darkkhaki","#bdb76b"],["darkmagenta","#8b008b"],["darkolivegreen","#556b2f"],["darkorange","#ff8c00"],["darkorchid","#9932cc"],["darkred","#8b0000"],["darksalmon","#e9967a"],["darkseagreen","#8fbc8f"],["darkslateblue","#483d8b"],["darkslategray","#2f4f4f"],["darkturquoise","#00ced1"],["darkviolet","#9400d3"],["deeppink","#ff1493"],["deepskyblue","#00bfff"],["dimgray","#696969"],["dodgerblue","#1e90ff"],["firebrick","#b22222"],["floralwhite","#fffaf0"],["forestgreen","#228b22"],["fuchsia","#ff00ff"],["gainsboro","#dcdcdc"],["ghostwhite","#f8f8ff"],["gold","#ffd700"],["goldenrod","#daa520"],["gray","#808080"],["green","#008000"],["greenyellow","#adff2f"],["honeydew","#f0fff0"],["hotpink","#ff69b4"],["indianred ","#cd5c5c"],["indigo","#4b0082"],["ivory","#fffff0"],["khaki","#f0e68c"],["lavender","#e6e6fa"],["lavenderblush","#fff0f5"],["lawngreen","#7cfc00"],["lemonchiffon","#fffacd"],["lightblue","#add8e6"],["lightcoral","#f08080"],["lightcyan","#e0ffff"],["lightgoldenrodyellow","#fafad2"],["lightgrey","#d3d3d3"],["lightgreen","#90ee90"],["lightpink","#ffb6c1"],["lightsalmon","#ffa07a"],["lightseagreen","#20b2aa"],["lightskyblue","#87cefa"],["lightslategray","#778899"],["lightsteelblue","#b0c4de"],["lightyellow","#ffffe0"],["lime","#00ff00"],["limegreen","#32cd32"],["linen","#faf0e6"],["magenta","#ff00ff"],["maroon","#800000"],["mediumaquamarine","#66cdaa"],["mediumblue","#0000cd"],["mediumorchid","#ba55d3"],["mediumpurple","#9370d8"],["mediumseagreen","#3cb371"],["mediumslateblue","#7b68ee"],["mediumspringgreen","#00fa9a"],["mediumturquoise","#48d1cc"],["mediumvioletred","#c71585"],["midnightblue","#191970"],["mintcream","#f5fffa"],["mistyrose","#ffe4e1"],["moccasin","#ffe4b5"],["navajowhite","#ffdead"],["navy","#000080"],["oldlace","#fdf5e6"],["olive","#808000"],["olivedrab","#6b8e23"],["orange","#ffa500"],["orangered","#ff4500"],["orchid","#da70d6"],["palegoldenrod","#eee8aa"],["palegreen","#98fb98"],["paleturquoise","#afeeee"],["palevioletred","#d87093"],["papayawhip","#ffefd5"],["peachpuff","#ffdab9"],["peru","#cd853f"],["pink","#ffc0cb"],["plum","#dda0dd"],["powderblue","#b0e0e6"],["purple","#800080"],["rebeccapurple","#663399"],["red","#ff0000"],["rosybrown","#bc8f8f"],["royalblue","#4169e1"],["saddlebrown","#8b4513"],["salmon","#fa8072"],["sandybrown","#f4a460"],["seagreen","#2e8b57"],["seashell","#fff5ee"],["sienna","#a0522d"],["silver","#c0c0c0"],["skyblue","#87ceeb"],["slateblue","#6a5acd"],["slategray","#708090"],["snow","#fffafa"],["springgreen","#00ff7f"],["steelblue","#4682b4"],["tan","#d2b48c"],["teal","#008080"],["thistle","#d8bfd8"],["tomato","#ff6347"],["turquoise","#40e0d0"],["violet","#ee82ee"],["wheat","#f5deb3"],["white","#ffffff"],["whitesmoke","#f5f5f5"],["yellow","#ffff00"],["yellowgreen","#9acd32"]]);function _e(n){const e=ge.get(n);return e||n}function Pt(n,e){return 1/(1+Math.exp(-n/e))}const Wn=Object.freeze(Object.defineProperty({__proto__:null,colorMap:ge,colorNameToHex:_e,sigmoid:Pt},Symbol.toStringTag,{value:"Module"})),It=1.618;let me=class G{constructor(e,t,r={}){I(this,"parentGraph");I(this,"id");I(this,"metadata");I(this,"mesh");I(this,"label");I(this,"meshDragBehavior");I(this,"dragging",!1);I(this,"nodeMeshConfig");I(this,"pinOnDrag");if(this.parentGraph=e,this.id=t,this.metadata=r.metadata??{},this.nodeMeshConfig=this.parentGraph.config.style.node,this.parentGraph.graphEngine.addNode(this),this.mesh=this.nodeMeshConfig.nodeMeshFactory(this,this.parentGraph,this.nodeMeshConfig),this.mesh.metadata={parentNode:this},this.nodeMeshConfig.label&&(this.label=G.createLabel(this.id.toString(),this,this.parentGraph),this.label.parent=this.mesh,this.label.position.y+=1),this.pinOnDrag=r.pinOnDrag??!0,this.meshDragBehavior=new $.SixDofDragBehavior,this.mesh.addBehavior(this.meshDragBehavior),this.meshDragBehavior.onDragStartObservable.add(()=>{this.parentGraph.running=!0,this.dragging=!0}),this.meshDragBehavior.onDragEndObservable.add(()=>{this.parentGraph.running=!0,this.pinOnDrag&&this.pin(),this.dragging=!1}),this.meshDragBehavior.onPositionChangedObservable.add(i=>{this.parentGraph.running=!0,this.parentGraph.graphEngine.setNodePosition(this,i.position)}),this.mesh.actionManager=this.mesh.actionManager??new $.ActionManager(this.parentGraph.scene),this.parentGraph.fetchNodes&&this.parentGraph.fetchEdges){const{fetchNodes:i,fetchEdges:a}=this.parentGraph;this.mesh.actionManager.registerAction(new $.ExecuteCodeAction({trigger:$.ActionManager.OnDoublePickTrigger},()=>{this.parentGraph.running=!0;const u=a(this,this.parentGraph),d=new Set;u.forEach(h=>{d.add(h.src),d.add(h.dst)}),d.delete(this.id),i(d,this.parentGraph).forEach(h=>this.parentGraph.addNode(h.id,h.metadata)),u.forEach(h=>this.parentGraph.addEdge(h.src,h.dst,h.metadata))}))}}getDeltaPos(){const e=this.parentGraph.graphEngine.getNodePosition(this),t=Math.abs(this.mesh.position.x-e.x),r=Math.abs(this.mesh.position.y-e.y),i=Math.abs(this.mesh.position.z-(e.z??0));return Math.sqrt(t*t+r*r+i*i)}update(){if(this.dragging)return;this.parentGraph.nodeObservable.notifyObservers({type:"node-update-before",node:this});const e=this.parentGraph.graphEngine.getNodePosition(this);this.mesh.position.x=e.x,this.mesh.position.y=e.y,e.z&&(this.mesh.position.z=e.z),this.parentGraph.nodeObservable.notifyObservers({type:"node-update-after",node:this})}pin(){this.parentGraph.graphEngine.pin(this)}unpin(){this.parentGraph.graphEngine.unpin(this)}static get list(){return Xn}static create(e,t,r={}){const i=G.list.get(t);if(i)return i;const a=new G(e,t,r);return G.list.set(t,a),a}static defaultNodeMeshFactory(e,t,r){return t.meshCache.get("default-mesh",()=>{let i;switch(r.shape){case"box":i=G.createBox(e,t,r);break;case"sphere":i=G.createSphere(e,t,r);break;case"cylinder":i=G.createCylinder(e,t,r);break;case"cone":i=G.createCone(e,t,r);break;case"capsule":i=G.createCapsule(e,t,r);break;case"torus":i=G.createTorus(e,t,r);break;case"torus-knot":i=G.createTorusKnot(e,t,r);break;case"tetrahedron":i=G.createPolyhedron(0,e,t,r);break;case"octahedron":i=G.createPolyhedron(1,e,t,r);break;case"dodecahedron":i=G.createPolyhedron(2,e,t,r);break;case"icosahedron":i=G.createPolyhedron(3,e,t,r);break;case"rhombicuboctahedron":i=G.createPolyhedron(4,e,t,r);break;case"triangular_prism":i=G.createPolyhedron(5,e,t,r);break;case"pentagonal_prism":i=G.createPolyhedron(6,e,t,r);break;case"hexagonal_prism":i=G.createPolyhedron(7,e,t,r);break;case"square_pyramid":i=G.createPolyhedron(8,e,t,r);break;case"pentagonal_pyramid":i=G.createPolyhedron(9,e,t,r);break;case"triangular_dipyramid":i=G.createPolyhedron(10,e,t,r);break;case"pentagonal_dipyramid":i=G.createPolyhedron(11,e,t,r);break;case"elongated_square_dypyramid":i=G.createPolyhedron(12,e,t,r);break;case"elongated_pentagonal_dipyramid":i=G.createPolyhedron(13,e,t,r);break;case"elongated_pentagonal_cupola":i=G.createPolyhedron(14,e,t,r);break;case"goldberg":i=G.createGoldberg(e,t,r);break;case"icosphere":i=G.createIcoSphere(e,t,r);break;case"geodesic":i=G.createGeodesic(e,t,r);break;default:throw new TypeError(`unknown shape: ${r.shape}`)}const a=new $.StandardMaterial("defaultMaterial"),u=r.color;return a.diffuseColor=$.Color3.FromHexString(_e(u)),a.wireframe=r.wireframe,a.freeze(),i.visibility=r.opacity,i.material=a,i})}static createBox(e,t,r){return $.MeshBuilder.CreateBox("box",{size:r.size})}static createSphere(e,t,r){return $.MeshBuilder.CreateSphere("sphere",{diameter:r.size})}static createCylinder(e,t,r){return $.MeshBuilder.CreateCylinder("cylinder",{height:r.size*It,diameter:r.size})}static createCone(e,t,r){return $.MeshBuilder.CreateCylinder("cylinder",{height:r.size*It,diameterTop:0,diameterBottom:r.size})}static createCapsule(e,t,r){return $.MeshBuilder.CreateCapsule("capsule",{})}static createTorus(e,t,r){return $.MeshBuilder.CreateTorus("torus",{})}static createTorusKnot(e,t,r){return $.MeshBuilder.CreateTorusKnot("tk",{radius:r.size*.3,tube:r.size*.2,radialSegments:128})}static createPolyhedron(e,t,r,i){return $.MeshBuilder.CreatePolyhedron("polyhedron",{size:i.size,type:e})}static createGoldberg(e,t,r){return $.MeshBuilder.CreateGoldberg("goldberg",{size:r.size})}static createIcoSphere(e,t,r){return $.MeshBuilder.CreateIcoSphere("icosphere",{radius:r.size*.75})}static createGeodesic(e,t,r){return $.MeshBuilder.CreateGeodesic("geodesic",{size:r.size})}static createLabel(e,t,r){const a="48px Verdana",s=.006944444444444444,l=new $.DynamicTexture("DynamicTexture",64,r.scene).getContext();l.font=a;const g=l.measureText(e).width+8,b=g*s,y=new $.DynamicTexture("DynamicTexture",{width:g,height:72},r.scene,!1),v=new $.StandardMaterial("mat",r.scene);v.specularColor=$.Color3.Black(),y.hasAlpha=!0;const x=y.getContext();x.fillStyle="white",x.beginPath();const m=0,c=0,M=[20,20,20,20],C=g,N=72;x.moveTo(m+M[0],c),x.lineTo(m+C-M[1],c),x.arc(m+C-M[1],c+M[1],M[1],3*Math.PI/2,Math.PI*2),x.lineTo(m+C,c+N-M[2]),x.arc(m+C-M[2],c+N-M[2],M[2],0,Math.PI/2),x.lineTo(m+M[3],c+N),x.arc(m+M[3],c+N-M[3],M[3],Math.PI/2,Math.PI),x.lineTo(m,c+M[0]),x.arc(m+M[0],c+M[0],M[0],Math.PI,3*Math.PI/2),x.closePath(),x.fill(),y.drawText(e,null,null,a,"#000000","transparent",!0),v.opacityTexture=y,v.emissiveTexture=y,v.disableLighting=!0;const _=$.MeshBuilder.CreatePlane("plane",{width:b,height:.5},r.scene);return _.material=v,_.billboardMode=7,_}};const Xn=new Map,et=.5;class ie{constructor(e,t,r,i={}){I(this,"parentGraph");I(this,"srcId");I(this,"dstId");I(this,"dstNode");I(this,"srcNode");I(this,"metadata");I(this,"mesh");I(this,"arrowMesh",null);I(this,"edgeMeshConfig");this.parentGraph=e,this.srcId=t,this.dstId=r,this.metadata=i.metadata??{};const a=me.list.get(t);if(!a)throw new Error(`Attempting to create edge '${t}->${r}', Node '${t}' hasn't been created yet.`);const u=me.list.get(r);if(!u)throw new Error(`Attempting to create edge '${t}->${r}', Node '${r}' hasn't been created yet.`);this.srcNode=a,this.dstNode=u,this.edgeMeshConfig=this.parentGraph.config.style.edge,this.parentGraph.graphEngine.addEdge(this),this.mesh=this.edgeMeshConfig.edgeMeshFactory(this,this.parentGraph,this.edgeMeshConfig),this.mesh.metadata={},this.mesh.metadata.parentEdge=this}update(){const e=this.parentGraph.graphEngine.getEdgePosition(this);this.parentGraph.edgeObservable.notifyObservers({type:"edge-update-before",edge:this});const{srcPoint:t,dstPoint:r}=this.transformArrowCap();t&&r?this.transformEdgeMesh(t,r):this.transformEdgeMesh(new $.Vector3(e.src.x,e.src.y,e.src.z),new $.Vector3(e.dst.x,e.dst.y,e.dst.z)),this.parentGraph.edgeObservable.notifyObservers({type:"edge-update-after",edge:this})}static get list(){return Kn}static create(e,t,r,i={}){const a=ie.list.get(t,r);if(a)return a;const u=new ie(e,t,r,i);return ie.list.set(t,r,u),u}static defaultEdgeMeshFactory(e,t,r){return r.arrowCap&&(e.arrowMesh=t.meshCache.get("default-arrow-cap",()=>{const i=$.GreasedLineTools.GetArrowCap(new $.Vector3(0,0,-et),new $.Vector3(0,0,1),et,4,4);return $.CreateGreasedLine("lines",{points:i.points,widths:i.widths,widthDistribution:$.GreasedLineMeshWidthDistribution.WIDTH_DISTRIBUTION_START},{color:$.Color3.FromHexString(_e(r.color))})})),t.meshCache.get("default-edge",()=>{switch(r.type){case"plain":return ie.createPlainLine(e,t,r);case"moving":return ie.createMovingLine(e,t,r);default:throw new TypeError(`Unknown Edge type: '${r.type}'`)}})}static createPlainLine(e,t,r){return $.CreateGreasedLine("edge-plain",{points:ie.unitVectorPoints},{color:$.Color3.FromHexString(_e(r.color))})}static createMovingLine(e,t,r){const i=$.Color3.FromHexString(_e(r.movingLineOpts.baseColor)),a=$.Color3.FromHexString(_e(r.color)),u=Math.floor(i.r*255),d=Math.floor(i.g*255),s=Math.floor(i.b*255),h=Math.floor(a.r*255),l=Math.floor(a.g*255),g=Math.floor(a.b*255),b=new Uint8Array([u,d,s,h,l,g]),y=new $.RawTexture(b,b.length/3,1,$.Engine.TEXTUREFORMAT_RGB,t.scene,!1,!0,$.Engine.TEXTURE_NEAREST_NEAREST);y.wrapU=$.RawTexture.WRAP_ADDRESSMODE,y.name="moving-texture";const v=$.CreateGreasedLine("edge-moving",{points:ie.unitVectorPoints},{width:r.movingLineOpts.width,colorMode:$.GreasedLineMeshColorMode.COLOR_MODE_MULTIPLY}),x=v.material;return x.emissiveTexture=y,x.disableLighting=!0,y.uScale=5,t.scene.onBeforeRenderObservable.add(()=>{y.uOffset-=.04*t.scene.getAnimationRatio()}),v}transformEdgeMesh(e,t){const r=t.subtract(e),i=new $.Vector3(e.x+r.x/2,e.y+r.y/2,e.z+r.z/2),a=r.length();this.mesh.position=i,this.mesh.lookAt(t),this.mesh.scaling.z=a}transformArrowCap(){if(this.arrowMesh){const{srcPoint:e,dstPoint:t,newEndPoint:r}=this.getInterceptPoints();if(!e||!t||!r)throw new Error("Internal Error: mesh intercept points not found");return this.arrowMesh.position=t,this.arrowMesh.lookAt(this.dstNode.mesh.position),{srcPoint:e,dstPoint:r}}return{srcPoint:null,dstPoint:null}}getInterceptPoints(){const e=this.srcNode.mesh,t=this.dstNode.mesh,r=new $.Ray(this.srcNode.mesh.position,this.dstNode.mesh.position);r.position=t.position,r.direction=t.position.subtract(e.position);const i=r.intersectsMeshes([t]),a=r.intersectsMeshes([e]);let u=null,d=null,s=null;if(i.length&&a.length){d=i[0].pickedPoint,u=a[0].pickedPoint;const h=u.subtract(d).length(),l=h-et,{x:g,y:b,z:y}=u,{x:v,y:x,z:m}=d,c=g+l/h*(v-g),M=b+l/h*(x-b),C=y+l/h*(m-y);s=new $.Vector3(c,M,C)}return{srcPoint:u,dstPoint:d,newEndPoint:s}}static get unitVectorPoints(){return[0,0,-.5,0,0,.5]}}class Jn{constructor(){I(this,"map",new Map)}has(e,t){const r=this.map.get(e);return r?r.has(t):!1}set(e,t,r){let i=this.map.get(e);if(i||(i=new Map,this.map.set(e,i)),i.has(t))throw new Error("Attempting to create duplicate Edge");i.set(t,r)}get(e,t){const r=this.map.get(e);if(r)return r.get(t)}get size(){let e=0;for(const t of this.map.values())e+=t.size;return e}}const Kn=new Jn;var ke=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tt(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var qe={exports:{}};qe.exports,function(n,e){var t=200,r="__lodash_hash_undefined__",i=800,a=16,u=9007199254740991,d="[object Arguments]",s="[object Array]",h="[object AsyncFunction]",l="[object Boolean]",g="[object Date]",b="[object Error]",y="[object Function]",v="[object GeneratorFunction]",x="[object Map]",m="[object Number]",c="[object Null]",M="[object Object]",C="[object Proxy]",N="[object RegExp]",_="[object Set]",T="[object String]",A="[object Undefined]",L="[object WeakMap]",U="[object ArrayBuffer]",H="[object DataView]",V="[object Float32Array]",j="[object Float64Array]",he="[object Int8Array]",E="[object Int16Array]",w="[object Int32Array]",B="[object Uint8Array]",Q="[object Uint8ClampedArray]",oe="[object Uint16Array]",ue="[object Uint32Array]",P=/[\\^$.*+?()[\]{}|]/g,z=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,O={};O[V]=O[j]=O[he]=O[E]=O[w]=O[B]=O[Q]=O[oe]=O[ue]=!0,O[d]=O[s]=O[U]=O[l]=O[H]=O[g]=O[b]=O[y]=O[x]=O[m]=O[M]=O[N]=O[_]=O[T]=O[L]=!1;var K=typeof ke=="object"&&ke&&ke.Object===Object&&ke,J=typeof self=="object"&&self&&self.Object===Object&&self,ee=K||J||Function("return this")(),He=e&&!e.nodeType&&e,Ae=He&&!0&&n&&!n.nodeType&&n,Nn=Ae&&Ae.exports===He,mt=Nn&&K.process,Cn=function(){try{var o=Ae&&Ae.require&&Ae.require("util").types;return o||mt&&mt.binding&&mt.binding("util")}catch{}}(),En=Cn&&Cn.isTypedArray;function Tn(o,f,p){switch(p.length){case 0:return o.call(f);case 1:return o.call(f,p[0]);case 2:return o.call(f,p[0],p[1]);case 3:return o.call(f,p[0],p[1],p[2])}return o.apply(f,p)}function da(o,f){for(var p=-1,S=Array(o);++p<o;)S[p]=f(p);return S}function ca(o){return function(f){return o(f)}}function la(o,f){return o==null?void 0:o[f]}function pa(o,f){return function(p){return o(f(p))}}var ga=Array.prototype,va=Function.prototype,Ve=Object.prototype,bt=ee["__core-js_shared__"],Qe=va.toString,ce=Ve.hasOwnProperty,$n=function(){var o=/[^.]+$/.exec(bt&&bt.keys&&bt.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),Bn=Ve.toString,ya=Qe.call(Object),ma=RegExp("^"+Qe.call(ce).replace(P,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),We=Nn?ee.Buffer:void 0,Sn=ee.Symbol,Pn=ee.Uint8Array,In=We?We.allocUnsafe:void 0,zn=pa(Object.getPrototypeOf,Object),An=Object.create,ba=Ve.propertyIsEnumerable,wa=ga.splice,we=Sn?Sn.toStringTag:void 0,Xe=function(){try{var o=Mt(Object,"defineProperty");return o({},"",{}),o}catch{}}(),xa=We?We.isBuffer:void 0,On=Math.max,_a=Date.now,Ln=Mt(ee,"Map"),Oe=Mt(Object,"create"),Ma=function(){function o(){}return function(f){if(!pe(f))return{};if(An)return An(f);o.prototype=f;var p=new o;return o.prototype=void 0,p}}();function xe(o){var f=-1,p=o==null?0:o.length;for(this.clear();++f<p;){var S=o[f];this.set(S[0],S[1])}}function Na(){this.__data__=Oe?Oe(null):{},this.size=0}function Ca(o){var f=this.has(o)&&delete this.__data__[o];return this.size-=f?1:0,f}function Ea(o){var f=this.__data__;if(Oe){var p=f[o];return p===r?void 0:p}return ce.call(f,o)?f[o]:void 0}function Ta(o){var f=this.__data__;return Oe?f[o]!==void 0:ce.call(f,o)}function $a(o,f){var p=this.__data__;return this.size+=this.has(o)?0:1,p[o]=Oe&&f===void 0?r:f,this}xe.prototype.clear=Na,xe.prototype.delete=Ca,xe.prototype.get=Ea,xe.prototype.has=Ta,xe.prototype.set=$a;function le(o){var f=-1,p=o==null?0:o.length;for(this.clear();++f<p;){var S=o[f];this.set(S[0],S[1])}}function Ba(){this.__data__=[],this.size=0}function Sa(o){var f=this.__data__,p=Je(f,o);if(p<0)return!1;var S=f.length-1;return p==S?f.pop():wa.call(f,p,1),--this.size,!0}function Pa(o){var f=this.__data__,p=Je(f,o);return p<0?void 0:f[p][1]}function Ia(o){return Je(this.__data__,o)>-1}function za(o,f){var p=this.__data__,S=Je(p,o);return S<0?(++this.size,p.push([o,f])):p[S][1]=f,this}le.prototype.clear=Ba,le.prototype.delete=Sa,le.prototype.get=Pa,le.prototype.has=Ia,le.prototype.set=za;function Ce(o){var f=-1,p=o==null?0:o.length;for(this.clear();++f<p;){var S=o[f];this.set(S[0],S[1])}}function Aa(){this.size=0,this.__data__={hash:new xe,map:new(Ln||le),string:new xe}}function Oa(o){var f=Ye(this,o).delete(o);return this.size-=f?1:0,f}function La(o){return Ye(this,o).get(o)}function Fa(o){return Ye(this,o).has(o)}function ka(o,f){var p=Ye(this,o),S=p.size;return p.set(o,f),this.size+=p.size==S?0:1,this}Ce.prototype.clear=Aa,Ce.prototype.delete=Oa,Ce.prototype.get=La,Ce.prototype.has=Fa,Ce.prototype.set=ka;function Ee(o){var f=this.__data__=new le(o);this.size=f.size}function qa(){this.__data__=new le,this.size=0}function Da(o){var f=this.__data__,p=f.delete(o);return this.size=f.size,p}function Ga(o){return this.__data__.get(o)}function ja(o){return this.__data__.has(o)}function Ra(o,f){var p=this.__data__;if(p instanceof le){var S=p.__data__;if(!Ln||S.length<t-1)return S.push([o,f]),this.size=++p.size,this;p=this.__data__=new Ce(S)}return p.set(o,f),this.size=p.size,this}Ee.prototype.clear=qa,Ee.prototype.delete=Da,Ee.prototype.get=Ga,Ee.prototype.has=ja,Ee.prototype.set=Ra;function Ua(o,f){var p=Et(o),S=!p&&Ct(o),k=!p&&!S&&jn(o),D=!p&&!S&&!k&&Un(o),W=p||S||k||D,q=W?da(o.length,String):[],X=q.length;for(var se in o)(f||ce.call(o,se))&&!(W&&(se=="length"||k&&(se=="offset"||se=="parent")||D&&(se=="buffer"||se=="byteLength"||se=="byteOffset")||Dn(se,X)))&&q.push(se);return q}function wt(o,f,p){(p!==void 0&&!Ze(o[f],p)||p===void 0&&!(f in o))&&xt(o,f,p)}function Ha(o,f,p){var S=o[f];(!(ce.call(o,f)&&Ze(S,p))||p===void 0&&!(f in o))&&xt(o,f,p)}function Je(o,f){for(var p=o.length;p--;)if(Ze(o[p][0],f))return p;return-1}function xt(o,f,p){f=="__proto__"&&Xe?Xe(o,f,{configurable:!0,enumerable:!0,value:p,writable:!0}):o[f]=p}var Va=io();function Ke(o){return o==null?o===void 0?A:c:we&&we in Object(o)?ao(o):co(o)}function Fn(o){return Le(o)&&Ke(o)==d}function Qa(o){if(!pe(o)||ho(o))return!1;var f=$t(o)?ma:z;return f.test(vo(o))}function Wa(o){return Le(o)&&Rn(o.length)&&!!O[Ke(o)]}function Xa(o){if(!pe(o))return fo(o);var f=Gn(o),p=[];for(var S in o)S=="constructor"&&(f||!ce.call(o,S))||p.push(S);return p}function _t(o,f,p,S,k){o!==f&&Va(f,function(D,W){if(k||(k=new Ee),pe(D))Ja(o,f,W,p,_t,S,k);else{var q=S?S(Nt(o,W),D,W+"",o,f,k):void 0;q===void 0&&(q=D),wt(o,W,q)}},Hn)}function Ja(o,f,p,S,k,D,W){var q=Nt(o,p),X=Nt(f,p),se=W.get(X);if(se){wt(o,p,se);return}var ae=D?D(q,X,p+"",o,f,W):void 0,Fe=ae===void 0;if(Fe){var Bt=Et(X),St=!Bt&&jn(X),Qn=!Bt&&!St&&Un(X);ae=X,Bt||St||Qn?Et(q)?ae=q:yo(q)?ae=to(q):St?(Fe=!1,ae=Ya(X,!0)):Qn?(Fe=!1,ae=eo(X,!0)):ae=[]:mo(X)||Ct(X)?(ae=q,Ct(q)?ae=bo(q):(!pe(q)||$t(q))&&(ae=oo(X))):Fe=!1}Fe&&(W.set(X,ae),k(ae,X,S,D,W),W.delete(X)),wt(o,p,ae)}function kn(o,f){return po(lo(o,f,Vn),o+"")}var Ka=Xe?function(o,f){return Xe(o,"toString",{configurable:!0,enumerable:!1,value:_o(f),writable:!0})}:Vn;function Ya(o,f){if(f)return o.slice();var p=o.length,S=In?In(p):new o.constructor(p);return o.copy(S),S}function Za(o){var f=new o.constructor(o.byteLength);return new Pn(f).set(new Pn(o)),f}function eo(o,f){var p=f?Za(o.buffer):o.buffer;return new o.constructor(p,o.byteOffset,o.length)}function to(o,f){var p=-1,S=o.length;for(f||(f=Array(S));++p<S;)f[p]=o[p];return f}function no(o,f,p,S){var k=!p;p||(p={});for(var D=-1,W=f.length;++D<W;){var q=f[D],X=S?S(p[q],o[q],q,p,o):void 0;X===void 0&&(X=o[q]),k?xt(p,q,X):Ha(p,q,X)}return p}function ro(o){return kn(function(f,p){var S=-1,k=p.length,D=k>1?p[k-1]:void 0,W=k>2?p[2]:void 0;for(D=o.length>3&&typeof D=="function"?(k--,D):void 0,W&&so(p[0],p[1],W)&&(D=k<3?void 0:D,k=1),f=Object(f);++S<k;){var q=p[S];q&&o(f,q,S,D)}return f})}function io(o){return function(f,p,S){for(var k=-1,D=Object(f),W=S(f),q=W.length;q--;){var X=W[o?q:++k];if(p(D[X],X,D)===!1)break}return f}}function qn(o,f,p,S,k,D){return pe(o)&&pe(f)&&(D.set(f,o),_t(o,f,void 0,qn,D),D.delete(f)),o}function Ye(o,f){var p=o.__data__;return uo(f)?p[typeof f=="string"?"string":"hash"]:p.map}function Mt(o,f){var p=la(o,f);return Qa(p)?p:void 0}function ao(o){var f=ce.call(o,we),p=o[we];try{o[we]=void 0;var S=!0}catch{}var k=Bn.call(o);return S&&(f?o[we]=p:delete o[we]),k}function oo(o){return typeof o.constructor=="function"&&!Gn(o)?Ma(zn(o)):{}}function Dn(o,f){var p=typeof o;return f=f??u,!!f&&(p=="number"||p!="symbol"&&F.test(o))&&o>-1&&o%1==0&&o<f}function so(o,f,p){if(!pe(p))return!1;var S=typeof f;return(S=="number"?Tt(p)&&Dn(f,p.length):S=="string"&&f in p)?Ze(p[f],o):!1}function uo(o){var f=typeof o;return f=="string"||f=="number"||f=="symbol"||f=="boolean"?o!=="__proto__":o===null}function ho(o){return!!$n&&$n in o}function Gn(o){var f=o&&o.constructor,p=typeof f=="function"&&f.prototype||Ve;return o===p}function fo(o){var f=[];if(o!=null)for(var p in Object(o))f.push(p);return f}function co(o){return Bn.call(o)}function lo(o,f,p){return f=On(f===void 0?o.length-1:f,0),function(){for(var S=arguments,k=-1,D=On(S.length-f,0),W=Array(D);++k<D;)W[k]=S[f+k];k=-1;for(var q=Array(f+1);++k<f;)q[k]=S[k];return q[f]=p(W),Tn(o,this,q)}}function Nt(o,f){if(!(f==="constructor"&&typeof o[f]=="function")&&f!="__proto__")return o[f]}var po=go(Ka);function go(o){var f=0,p=0;return function(){var S=_a(),k=a-(S-p);if(p=S,k>0){if(++f>=i)return arguments[0]}else f=0;return o.apply(void 0,arguments)}}function vo(o){if(o!=null){try{return Qe.call(o)}catch{}try{return o+""}catch{}}return""}function Ze(o,f){return o===f||o!==o&&f!==f}var Ct=Fn(function(){return arguments}())?Fn:function(o){return Le(o)&&ce.call(o,"callee")&&!ba.call(o,"callee")},Et=Array.isArray;function Tt(o){return o!=null&&Rn(o.length)&&!$t(o)}function yo(o){return Le(o)&&Tt(o)}var jn=xa||Mo;function $t(o){if(!pe(o))return!1;var f=Ke(o);return f==y||f==v||f==h||f==C}function Rn(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=u}function pe(o){var f=typeof o;return o!=null&&(f=="object"||f=="function")}function Le(o){return o!=null&&typeof o=="object"}function mo(o){if(!Le(o)||Ke(o)!=M)return!1;var f=zn(o);if(f===null)return!0;var p=ce.call(f,"constructor")&&f.constructor;return typeof p=="function"&&p instanceof p&&Qe.call(p)==ya}var Un=En?ca(En):Wa;function bo(o){return no(o,Hn(o))}var wo=kn(function(o){return o.push(void 0,qn),Tn(xo,void 0,o)});function Hn(o){return Tt(o)?Ua(o,!0):Xa(o)}var xo=ro(function(o,f,p,S){_t(o,f,p,S)});function _o(o){return function(){return o}}function Vn(o){return o}function Mo(){return!1}n.exports=wo}(qe,qe.exports);var Yn=qe.exports;const zt=tt(Yn),Zn={size:1,opacity:1,wireframe:!1,color:"lightgrey",shape:"icosphere",nodeMeshFactory:me.defaultNodeMeshFactory,label:!1},er={type:"moving",color:"white",arrowCap:!1,movingLineOpts:{baseColor:"lightgrey",width:.25},edgeMeshFactory:ie.defaultEdgeMeshFactory},tr={style:{node:Zn,edge:er,skybox:""},behavior:{node:{pinOnDrag:!0},fetchNodes:()=>new Set,fetchEdges:()=>new Set},engine:{type:"ngraph",stepMultiplier:1,preSteps:0,minDelta:0}};function nr(n){return zt({},n,tr)}const rr={nodeListProp:"nodes",edgeListProp:"edges",nodeIdProp:"id",edgeSrcIdProp:"src",edgeDstIdProp:"dst"};function ir(n){return zt({},n,rr)}function ar(n,e,t){var r,i=1;n==null&&(n=0),e==null&&(e=0),t==null&&(t=0);function a(){var u,d=r.length,s,h=0,l=0,g=0;for(u=0;u<d;++u)s=r[u],h+=s.x||0,l+=s.y||0,g+=s.z||0;for(h=(h/d-n)*i,l=(l/d-e)*i,g=(g/d-t)*i,u=0;u<d;++u)s=r[u],h&&(s.x-=h),l&&(s.y-=l),g&&(s.z-=g)}return a.initialize=function(u){r=u},a.x=function(u){return arguments.length?(n=+u,a):n},a.y=function(u){return arguments.length?(e=+u,a):e},a.z=function(u){return arguments.length?(t=+u,a):t},a.strength=function(u){return arguments.length?(i=+u,a):i},a}function or(n){const e=+this._x.call(null,n);return At(this.cover(e),e,n)}function At(n,e,t){if(isNaN(e))return n;var r,i=n._root,a={data:t},u=n._x0,d=n._x1,s,h,l,g,b;if(!i)return n._root=a,n;for(;i.length;)if((l=e>=(s=(u+d)/2))?u=s:d=s,r=i,!(i=i[g=+l]))return r[g]=a,n;if(h=+n._x.call(null,i.data),e===h)return a.next=i,r?r[g]=a:n._root=a,n;do r=r?r[g]=new Array(2):n._root=new Array(2),(l=e>=(s=(u+d)/2))?u=s:d=s;while((g=+l)==(b=+(h>=s)));return r[b]=i,r[g]=a,n}function sr(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e);let r=1/0,i=-1/0;for(let a=0,u;a<e;++a)isNaN(u=+this._x.call(null,n[a]))||(t[a]=u,u<r&&(r=u),u>i&&(i=u));if(r>i)return this;this.cover(r).cover(i);for(let a=0;a<e;++a)At(this,t[a],n[a]);return this}function ur(n){if(isNaN(n=+n))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(n))+1;else{for(var r=t-e||1,i=this._root,a,u;e>n||n>=t;)switch(u=+(n<e),a=new Array(2),a[u]=i,i=a,r*=2,u){case 0:t=e+r;break;case 1:e=t-r;break}this._root&&this._root.length&&(this._root=i)}return this._x0=e,this._x1=t,this}function hr(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function fr(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function fe(n,e,t){this.node=n,this.x0=e,this.x1=t}function dr(n,e){var t,r=this._x0,i,a,u=this._x1,d=[],s=this._root,h,l;for(s&&d.push(new fe(s,r,u)),e==null?e=1/0:(r=n-e,u=n+e);h=d.pop();)if(!(!(s=h.node)||(i=h.x0)>u||(a=h.x1)<r))if(s.length){var g=(i+a)/2;d.push(new fe(s[1],g,a),new fe(s[0],i,g)),(l=+(n>=g))&&(h=d[d.length-1],d[d.length-1]=d[d.length-1-l],d[d.length-1-l]=h)}else{var b=Math.abs(n-+this._x.call(null,s.data));b<e&&(e=b,r=n-b,u=n+b,t=s.data)}return t}function cr(n){if(isNaN(s=+this._x.call(null,n)))return this;var e,t=this._root,r,i,a,u=this._x0,d=this._x1,s,h,l,g,b;if(!t)return this;if(t.length)for(;;){if((l=s>=(h=(u+d)/2))?u=h:d=h,e=t,!(t=t[g=+l]))return this;if(!t.length)break;e[g+1&1]&&(r=e,b=g)}for(;t.data!==n;)if(i=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,i?(a?i.next=a:delete i.next,this):e?(a?e[g]=a:delete e[g],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(r?r[b]=t:this._root=t),this):(this._root=a,this)}function lr(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function pr(){return this._root}function gr(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function vr(n){var e=[],t,r=this._root,i,a,u;for(r&&e.push(new fe(r,this._x0,this._x1));t=e.pop();)if(!n(r=t.node,a=t.x0,u=t.x1)&&r.length){var d=(a+u)/2;(i=r[1])&&e.push(new fe(i,d,u)),(i=r[0])&&e.push(new fe(i,a,d))}return this}function yr(n){var e=[],t=[],r;for(this._root&&e.push(new fe(this._root,this._x0,this._x1));r=e.pop();){var i=r.node;if(i.length){var a,u=r.x0,d=r.x1,s=(u+d)/2;(a=i[0])&&e.push(new fe(a,u,s)),(a=i[1])&&e.push(new fe(a,s,d))}t.push(r)}for(;r=t.pop();)n(r.node,r.x0,r.x1);return this}function mr(n){return n[0]}function br(n){return arguments.length?(this._x=n,this):this._x}function Ot(n,e){var t=new nt(e??mr,NaN,NaN);return n==null?t:t.addAll(n)}function nt(n,e,t){this._x=n,this._x0=e,this._x1=t,this._root=void 0}function Lt(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var re=Ot.prototype=nt.prototype;re.copy=function(){var n=new nt(this._x,this._x0,this._x1),e=this._root,t,r;if(!e)return n;if(!e.length)return n._root=Lt(e),n;for(t=[{source:e,target:n._root=new Array(2)}];e=t.pop();)for(var i=0;i<2;++i)(r=e.source[i])&&(r.length?t.push({source:r,target:e.target[i]=new Array(2)}):e.target[i]=Lt(r));return n},re.add=or,re.addAll=sr,re.cover=ur,re.data=hr,re.extent=fr,re.find=dr,re.remove=cr,re.removeAll=lr,re.root=pr,re.size=gr,re.visit=vr,re.visitAfter=yr,re.x=br;function wr(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return Ft(this.cover(e,t),e,t,n)}function Ft(n,e,t,r){if(isNaN(e)||isNaN(t))return n;var i,a=n._root,u={data:r},d=n._x0,s=n._y0,h=n._x1,l=n._y1,g,b,y,v,x,m,c,M;if(!a)return n._root=u,n;for(;a.length;)if((x=e>=(g=(d+h)/2))?d=g:h=g,(m=t>=(b=(s+l)/2))?s=b:l=b,i=a,!(a=a[c=m<<1|x]))return i[c]=u,n;if(y=+n._x.call(null,a.data),v=+n._y.call(null,a.data),e===y&&t===v)return u.next=a,i?i[c]=u:n._root=u,n;do i=i?i[c]=new Array(4):n._root=new Array(4),(x=e>=(g=(d+h)/2))?d=g:h=g,(m=t>=(b=(s+l)/2))?s=b:l=b;while((c=m<<1|x)===(M=(v>=b)<<1|y>=g));return i[M]=a,i[c]=u,n}function xr(n){var e,t,r=n.length,i,a,u=new Array(r),d=new Array(r),s=1/0,h=1/0,l=-1/0,g=-1/0;for(t=0;t<r;++t)isNaN(i=+this._x.call(null,e=n[t]))||isNaN(a=+this._y.call(null,e))||(u[t]=i,d[t]=a,i<s&&(s=i),i>l&&(l=i),a<h&&(h=a),a>g&&(g=a));if(s>l||h>g)return this;for(this.cover(s,h).cover(l,g),t=0;t<r;++t)Ft(this,u[t],d[t],n[t]);return this}function _r(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,r=this._y0,i=this._x1,a=this._y1;if(isNaN(t))i=(t=Math.floor(n))+1,a=(r=Math.floor(e))+1;else{for(var u=i-t||1,d=this._root,s,h;t>n||n>=i||r>e||e>=a;)switch(h=(e<r)<<1|n<t,s=new Array(4),s[h]=d,d=s,u*=2,h){case 0:i=t+u,a=r+u;break;case 1:t=i-u,a=r+u;break;case 2:i=t+u,r=a-u;break;case 3:t=i-u,r=a-u;break}this._root&&this._root.length&&(this._root=d)}return this._x0=t,this._y0=r,this._x1=i,this._y1=a,this}function Mr(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function Nr(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function te(n,e,t,r,i){this.node=n,this.x0=e,this.y0=t,this.x1=r,this.y1=i}function Cr(n,e,t){var r,i=this._x0,a=this._y0,u,d,s,h,l=this._x1,g=this._y1,b=[],y=this._root,v,x;for(y&&b.push(new te(y,i,a,l,g)),t==null?t=1/0:(i=n-t,a=e-t,l=n+t,g=e+t,t*=t);v=b.pop();)if(!(!(y=v.node)||(u=v.x0)>l||(d=v.y0)>g||(s=v.x1)<i||(h=v.y1)<a))if(y.length){var m=(u+s)/2,c=(d+h)/2;b.push(new te(y[3],m,c,s,h),new te(y[2],u,c,m,h),new te(y[1],m,d,s,c),new te(y[0],u,d,m,c)),(x=(e>=c)<<1|n>=m)&&(v=b[b.length-1],b[b.length-1]=b[b.length-1-x],b[b.length-1-x]=v)}else{var M=n-+this._x.call(null,y.data),C=e-+this._y.call(null,y.data),N=M*M+C*C;if(N<t){var _=Math.sqrt(t=N);i=n-_,a=e-_,l=n+_,g=e+_,r=y.data}}return r}function Er(n){if(isNaN(l=+this._x.call(null,n))||isNaN(g=+this._y.call(null,n)))return this;var e,t=this._root,r,i,a,u=this._x0,d=this._y0,s=this._x1,h=this._y1,l,g,b,y,v,x,m,c;if(!t)return this;if(t.length)for(;;){if((v=l>=(b=(u+s)/2))?u=b:s=b,(x=g>=(y=(d+h)/2))?d=y:h=y,e=t,!(t=t[m=x<<1|v]))return this;if(!t.length)break;(e[m+1&3]||e[m+2&3]||e[m+3&3])&&(r=e,c=m)}for(;t.data!==n;)if(i=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,i?(a?i.next=a:delete i.next,this):e?(a?e[m]=a:delete e[m],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(r?r[c]=t:this._root=t),this):(this._root=a,this)}function Tr(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function $r(){return this._root}function Br(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function Sr(n){var e=[],t,r=this._root,i,a,u,d,s;for(r&&e.push(new te(r,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(r=t.node,a=t.x0,u=t.y0,d=t.x1,s=t.y1)&&r.length){var h=(a+d)/2,l=(u+s)/2;(i=r[3])&&e.push(new te(i,h,l,d,s)),(i=r[2])&&e.push(new te(i,a,l,h,s)),(i=r[1])&&e.push(new te(i,h,u,d,l)),(i=r[0])&&e.push(new te(i,a,u,h,l))}return this}function Pr(n){var e=[],t=[],r;for(this._root&&e.push(new te(this._root,this._x0,this._y0,this._x1,this._y1));r=e.pop();){var i=r.node;if(i.length){var a,u=r.x0,d=r.y0,s=r.x1,h=r.y1,l=(u+s)/2,g=(d+h)/2;(a=i[0])&&e.push(new te(a,u,d,l,g)),(a=i[1])&&e.push(new te(a,l,d,s,g)),(a=i[2])&&e.push(new te(a,u,g,l,h)),(a=i[3])&&e.push(new te(a,l,g,s,h))}t.push(r)}for(;r=t.pop();)n(r.node,r.x0,r.y0,r.x1,r.y1);return this}function Ir(n){return n[0]}function zr(n){return arguments.length?(this._x=n,this):this._x}function Ar(n){return n[1]}function Or(n){return arguments.length?(this._y=n,this):this._y}function kt(n,e,t){var r=new rt(e??Ir,t??Ar,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function rt(n,e,t,r,i,a){this._x=n,this._y=e,this._x0=t,this._y0=r,this._x1=i,this._y1=a,this._root=void 0}function qt(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var ne=kt.prototype=rt.prototype;ne.copy=function(){var n=new rt(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,r;if(!e)return n;if(!e.length)return n._root=qt(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var i=0;i<4;++i)(r=e.source[i])&&(r.length?t.push({source:r,target:e.target[i]=new Array(4)}):e.target[i]=qt(r));return n},ne.add=wr,ne.addAll=xr,ne.cover=_r,ne.data=Mr,ne.extent=Nr,ne.find=Cr,ne.remove=Er,ne.removeAll=Tr,ne.root=$r,ne.size=Br,ne.visit=Sr,ne.visitAfter=Pr,ne.x=zr,ne.y=Or;function Lr(n){const e=+this._x.call(null,n),t=+this._y.call(null,n),r=+this._z.call(null,n);return Dt(this.cover(e,t,r),e,t,r,n)}function Dt(n,e,t,r,i){if(isNaN(e)||isNaN(t)||isNaN(r))return n;var a,u=n._root,d={data:i},s=n._x0,h=n._y0,l=n._z0,g=n._x1,b=n._y1,y=n._z1,v,x,m,c,M,C,N,_,T,A,L;if(!u)return n._root=d,n;for(;u.length;)if((N=e>=(v=(s+g)/2))?s=v:g=v,(_=t>=(x=(h+b)/2))?h=x:b=x,(T=r>=(m=(l+y)/2))?l=m:y=m,a=u,!(u=u[A=T<<2|_<<1|N]))return a[A]=d,n;if(c=+n._x.call(null,u.data),M=+n._y.call(null,u.data),C=+n._z.call(null,u.data),e===c&&t===M&&r===C)return d.next=u,a?a[A]=d:n._root=d,n;do a=a?a[A]=new Array(8):n._root=new Array(8),(N=e>=(v=(s+g)/2))?s=v:g=v,(_=t>=(x=(h+b)/2))?h=x:b=x,(T=r>=(m=(l+y)/2))?l=m:y=m;while((A=T<<2|_<<1|N)===(L=(C>=m)<<2|(M>=x)<<1|c>=v));return a[L]=u,a[A]=d,n}function Fr(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e),r=new Float64Array(e),i=new Float64Array(e);let a=1/0,u=1/0,d=1/0,s=-1/0,h=-1/0,l=-1/0;for(let g=0,b,y,v,x;g<e;++g)isNaN(y=+this._x.call(null,b=n[g]))||isNaN(v=+this._y.call(null,b))||isNaN(x=+this._z.call(null,b))||(t[g]=y,r[g]=v,i[g]=x,y<a&&(a=y),y>s&&(s=y),v<u&&(u=v),v>h&&(h=v),x<d&&(d=x),x>l&&(l=x));if(a>s||u>h||d>l)return this;this.cover(a,u,d).cover(s,h,l);for(let g=0;g<e;++g)Dt(this,t[g],r[g],i[g],n[g]);return this}function kr(n,e,t){if(isNaN(n=+n)||isNaN(e=+e)||isNaN(t=+t))return this;var r=this._x0,i=this._y0,a=this._z0,u=this._x1,d=this._y1,s=this._z1;if(isNaN(r))u=(r=Math.floor(n))+1,d=(i=Math.floor(e))+1,s=(a=Math.floor(t))+1;else{for(var h=u-r||1,l=this._root,g,b;r>n||n>=u||i>e||e>=d||a>t||t>=s;)switch(b=(t<a)<<2|(e<i)<<1|n<r,g=new Array(8),g[b]=l,l=g,h*=2,b){case 0:u=r+h,d=i+h,s=a+h;break;case 1:r=u-h,d=i+h,s=a+h;break;case 2:u=r+h,i=d-h,s=a+h;break;case 3:r=u-h,i=d-h,s=a+h;break;case 4:u=r+h,d=i+h,a=s-h;break;case 5:r=u-h,d=i+h,a=s-h;break;case 6:u=r+h,i=d-h,a=s-h;break;case 7:r=u-h,i=d-h,a=s-h;break}this._root&&this._root.length&&(this._root=l)}return this._x0=r,this._y0=i,this._z0=a,this._x1=u,this._y1=d,this._z1=s,this}function qr(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function Dr(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function R(n,e,t,r,i,a,u){this.node=n,this.x0=e,this.y0=t,this.z0=r,this.x1=i,this.y1=a,this.z1=u}function Gr(n,e,t,r){var i,a=this._x0,u=this._y0,d=this._z0,s,h,l,g,b,y,v=this._x1,x=this._y1,m=this._z1,c=[],M=this._root,C,N;for(M&&c.push(new R(M,a,u,d,v,x,m)),r==null?r=1/0:(a=n-r,u=e-r,d=t-r,v=n+r,x=e+r,m=t+r,r*=r);C=c.pop();)if(!(!(M=C.node)||(s=C.x0)>v||(h=C.y0)>x||(l=C.z0)>m||(g=C.x1)<a||(b=C.y1)<u||(y=C.z1)<d))if(M.length){var _=(s+g)/2,T=(h+b)/2,A=(l+y)/2;c.push(new R(M[7],_,T,A,g,b,y),new R(M[6],s,T,A,_,b,y),new R(M[5],_,h,A,g,T,y),new R(M[4],s,h,A,_,T,y),new R(M[3],_,T,l,g,b,A),new R(M[2],s,T,l,_,b,A),new R(M[1],_,h,l,g,T,A),new R(M[0],s,h,l,_,T,A)),(N=(t>=A)<<2|(e>=T)<<1|n>=_)&&(C=c[c.length-1],c[c.length-1]=c[c.length-1-N],c[c.length-1-N]=C)}else{var L=n-+this._x.call(null,M.data),U=e-+this._y.call(null,M.data),H=t-+this._z.call(null,M.data),V=L*L+U*U+H*H;if(V<r){var j=Math.sqrt(r=V);a=n-j,u=e-j,d=t-j,v=n+j,x=e+j,m=t+j,i=M.data}}return i}function jr(n){if(isNaN(b=+this._x.call(null,n))||isNaN(y=+this._y.call(null,n))||isNaN(v=+this._z.call(null,n)))return this;var e,t=this._root,r,i,a,u=this._x0,d=this._y0,s=this._z0,h=this._x1,l=this._y1,g=this._z1,b,y,v,x,m,c,M,C,N,_,T;if(!t)return this;if(t.length)for(;;){if((M=b>=(x=(u+h)/2))?u=x:h=x,(C=y>=(m=(d+l)/2))?d=m:l=m,(N=v>=(c=(s+g)/2))?s=c:g=c,e=t,!(t=t[_=N<<2|C<<1|M]))return this;if(!t.length)break;(e[_+1&7]||e[_+2&7]||e[_+3&7]||e[_+4&7]||e[_+5&7]||e[_+6&7]||e[_+7&7])&&(r=e,T=_)}for(;t.data!==n;)if(i=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,i?(a?i.next=a:delete i.next,this):e?(a?e[_]=a:delete e[_],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(r?r[T]=t:this._root=t),this):(this._root=a,this)}function Rr(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function Ur(){return this._root}function Hr(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function Vr(n){var e=[],t,r=this._root,i,a,u,d,s,h,l;for(r&&e.push(new R(r,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!n(r=t.node,a=t.x0,u=t.y0,d=t.z0,s=t.x1,h=t.y1,l=t.z1)&&r.length){var g=(a+s)/2,b=(u+h)/2,y=(d+l)/2;(i=r[7])&&e.push(new R(i,g,b,y,s,h,l)),(i=r[6])&&e.push(new R(i,a,b,y,g,h,l)),(i=r[5])&&e.push(new R(i,g,u,y,s,b,l)),(i=r[4])&&e.push(new R(i,a,u,y,g,b,l)),(i=r[3])&&e.push(new R(i,g,b,d,s,h,y)),(i=r[2])&&e.push(new R(i,a,b,d,g,h,y)),(i=r[1])&&e.push(new R(i,g,u,d,s,b,y)),(i=r[0])&&e.push(new R(i,a,u,d,g,b,y))}return this}function Qr(n){var e=[],t=[],r;for(this._root&&e.push(new R(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));r=e.pop();){var i=r.node;if(i.length){var a,u=r.x0,d=r.y0,s=r.z0,h=r.x1,l=r.y1,g=r.z1,b=(u+h)/2,y=(d+l)/2,v=(s+g)/2;(a=i[0])&&e.push(new R(a,u,d,s,b,y,v)),(a=i[1])&&e.push(new R(a,b,d,s,h,y,v)),(a=i[2])&&e.push(new R(a,u,y,s,b,l,v)),(a=i[3])&&e.push(new R(a,b,y,s,h,l,v)),(a=i[4])&&e.push(new R(a,u,d,v,b,y,g)),(a=i[5])&&e.push(new R(a,b,d,v,h,y,g)),(a=i[6])&&e.push(new R(a,u,y,v,b,l,g)),(a=i[7])&&e.push(new R(a,b,y,v,h,l,g))}t.push(r)}for(;r=t.pop();)n(r.node,r.x0,r.y0,r.z0,r.x1,r.y1,r.z1);return this}function Wr(n){return n[0]}function Xr(n){return arguments.length?(this._x=n,this):this._x}function Jr(n){return n[1]}function Kr(n){return arguments.length?(this._y=n,this):this._y}function Yr(n){return n[2]}function Zr(n){return arguments.length?(this._z=n,this):this._z}function Gt(n,e,t,r){var i=new it(e??Wr,t??Jr,r??Yr,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function it(n,e,t,r,i,a,u,d,s){this._x=n,this._y=e,this._z=t,this._x0=r,this._y0=i,this._z0=a,this._x1=u,this._y1=d,this._z1=s,this._root=void 0}function jt(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Z=Gt.prototype=it.prototype;Z.copy=function(){var n=new it(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,r;if(!e)return n;if(!e.length)return n._root=jt(e),n;for(t=[{source:e,target:n._root=new Array(8)}];e=t.pop();)for(var i=0;i<8;++i)(r=e.source[i])&&(r.length?t.push({source:r,target:e.target[i]=new Array(8)}):e.target[i]=jt(r));return n},Z.add=Lr,Z.addAll=Fr,Z.cover=kr,Z.data=qr,Z.extent=Dr,Z.find=Gr,Z.remove=jr,Z.removeAll=Rr,Z.root=Ur,Z.size=Hr,Z.visit=Vr,Z.visitAfter=Qr,Z.x=Xr,Z.y=Kr,Z.z=Zr;function Te(n){return function(){return n}}function de(n){return(n()-.5)*1e-6}function ei(n){return n.index}function Rt(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function ti(n){var e=ei,t=b,r,i=Te(30),a,u,d,s,h,l,g=1;n==null&&(n=[]);function b(c){return 1/Math.min(s[c.source.index],s[c.target.index])}function y(c){for(var M=0,C=n.length;M<g;++M)for(var N=0,_,T,A,L=0,U=0,H=0,V,j;N<C;++N)_=n[N],T=_.source,A=_.target,L=A.x+A.vx-T.x-T.vx||de(l),d>1&&(U=A.y+A.vy-T.y-T.vy||de(l)),d>2&&(H=A.z+A.vz-T.z-T.vz||de(l)),V=Math.sqrt(L*L+U*U+H*H),V=(V-a[N])/V*c*r[N],L*=V,U*=V,H*=V,A.vx-=L*(j=h[N]),d>1&&(A.vy-=U*j),d>2&&(A.vz-=H*j),T.vx+=L*(j=1-j),d>1&&(T.vy+=U*j),d>2&&(T.vz+=H*j)}function v(){if(u){var c,M=u.length,C=n.length,N=new Map(u.map((T,A)=>[e(T,A,u),T])),_;for(c=0,s=new Array(M);c<C;++c)_=n[c],_.index=c,typeof _.source!="object"&&(_.source=Rt(N,_.source)),typeof _.target!="object"&&(_.target=Rt(N,_.target)),s[_.source.index]=(s[_.source.index]||0)+1,s[_.target.index]=(s[_.target.index]||0)+1;for(c=0,h=new Array(C);c<C;++c)_=n[c],h[c]=s[_.source.index]/(s[_.source.index]+s[_.target.index]);r=new Array(C),x(),a=new Array(C),m()}}function x(){if(u)for(var c=0,M=n.length;c<M;++c)r[c]=+t(n[c],c,n)}function m(){if(u)for(var c=0,M=n.length;c<M;++c)a[c]=+i(n[c],c,n)}return y.initialize=function(c,...M){u=c,l=M.find(C=>typeof C=="function")||Math.random,d=M.find(C=>[1,2,3].includes(C))||2,v()},y.links=function(c){return arguments.length?(n=c,v(),y):n},y.id=function(c){return arguments.length?(e=c,y):e},y.iterations=function(c){return arguments.length?(g=+c,y):g},y.strength=function(c){return arguments.length?(t=typeof c=="function"?c:Te(+c),x(),y):t},y.distance=function(c){return arguments.length?(i=typeof c=="function"?c:Te(+c),m(),y):i},y}var ni={value:()=>{}};function Ut(){for(var n=0,e=arguments.length,t={},r;n<e;++n){if(!(r=arguments[n]+"")||r in t||/[\s.]/.test(r))throw new Error("illegal type: "+r);t[r]=[]}return new De(t)}function De(n){this._=n}function ri(n,e){return n.trim().split(/^|\s+/).map(function(t){var r="",i=t.indexOf(".");if(i>=0&&(r=t.slice(i+1),t=t.slice(0,i)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}})}De.prototype=Ut.prototype={constructor:De,on:function(n,e){var t=this._,r=ri(n+"",t),i,a=-1,u=r.length;if(arguments.length<2){for(;++a<u;)if((i=(n=r[a]).type)&&(i=ii(t[i],n.name)))return i;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++a<u;)if(i=(n=r[a]).type)t[i]=Ht(t[i],n.name,e);else if(e==null)for(i in t)t[i]=Ht(t[i],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new De(n)},call:function(n,e){if((i=arguments.length-2)>0)for(var t=new Array(i),r=0,i,a;r<i;++r)t[r]=arguments[r+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(a=this._[n],r=0,i=a.length;r<i;++r)a[r].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var r=this._[n],i=0,a=r.length;i<a;++i)r[i].value.apply(e,t)}};function ii(n,e){for(var t=0,r=n.length,i;t<r;++t)if((i=n[t]).name===e)return i.value}function Ht(n,e,t){for(var r=0,i=n.length;r<i;++r)if(n[r].name===e){n[r]=ni,n=n.slice(0,r).concat(n.slice(r+1));break}return t!=null&&n.push({name:e,value:t}),n}var Me=0,$e=0,Be=0,Vt=1e3,Ge,Se,je=0,be=0,Re=0,Pe=typeof performance=="object"&&performance.now?performance:Date,Qt=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Wt(){return be||(Qt(ai),be=Pe.now()+Re)}function ai(){be=0}function at(){this._call=this._time=this._next=null}at.prototype=Xt.prototype={constructor:at,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?Wt():+t)+(e==null?0:+e),!this._next&&Se!==this&&(Se?Se._next=this:Ge=this,Se=this),this._call=n,this._time=t,ot()},stop:function(){this._call&&(this._call=null,this._time=1/0,ot())}};function Xt(n,e,t){var r=new at;return r.restart(n,e,t),r}function oi(){Wt(),++Me;for(var n=Ge,e;n;)(e=be-n._time)>=0&&n._call.call(void 0,e),n=n._next;--Me}function Jt(){be=(je=Pe.now())+Re,Me=$e=0;try{oi()}finally{Me=0,ui(),be=0}}function si(){var n=Pe.now(),e=n-je;e>Vt&&(Re-=e,je=n)}function ui(){for(var n,e=Ge,t,r=1/0;e;)e._call?(r>e._time&&(r=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:Ge=t);Se=n,ot(r)}function ot(n){if(!Me){$e&&($e=clearTimeout($e));var e=n-be;e>24?(n<1/0&&($e=setTimeout(Jt,n-Pe.now()-Re)),Be&&(Be=clearInterval(Be))):(Be||(je=Pe.now(),Be=setInterval(si,Vt)),Me=1,Qt(Jt))}}const hi=1664525,fi=1013904223,Kt=4294967296;function di(){let n=1;return()=>(n=(hi*n+fi)%Kt)/Kt}var Yt=3;function st(n){return n.x}function Zt(n){return n.y}function ci(n){return n.z}var li=10,pi=Math.PI*(3-Math.sqrt(5)),gi=Math.PI*20/(9+Math.sqrt(221));function vi(n,e){e=e||2;var t=Math.min(Yt,Math.max(1,Math.round(e))),r,i=1,a=.001,u=1-Math.pow(a,1/300),d=0,s=.6,h=new Map,l=Xt(y),g=Ut("tick","end"),b=di();n==null&&(n=[]);function y(){v(),g.call("tick",r),i<a&&(l.stop(),g.call("end",r))}function v(c){var M,C=n.length,N;c===void 0&&(c=1);for(var _=0;_<c;++_)for(i+=(d-i)*u,h.forEach(function(T){T(i)}),M=0;M<C;++M)N=n[M],N.fx==null?N.x+=N.vx*=s:(N.x=N.fx,N.vx=0),t>1&&(N.fy==null?N.y+=N.vy*=s:(N.y=N.fy,N.vy=0)),t>2&&(N.fz==null?N.z+=N.vz*=s:(N.z=N.fz,N.vz=0));return r}function x(){for(var c=0,M=n.length,C;c<M;++c){if(C=n[c],C.index=c,C.fx!=null&&(C.x=C.fx),C.fy!=null&&(C.y=C.fy),C.fz!=null&&(C.z=C.fz),isNaN(C.x)||t>1&&isNaN(C.y)||t>2&&isNaN(C.z)){var N=li*(t>2?Math.cbrt(.5+c):t>1?Math.sqrt(.5+c):c),_=c*pi,T=c*gi;t===1?C.x=N:t===2?(C.x=N*Math.cos(_),C.y=N*Math.sin(_)):(C.x=N*Math.sin(_)*Math.cos(T),C.y=N*Math.cos(_),C.z=N*Math.sin(_)*Math.sin(T))}(isNaN(C.vx)||t>1&&isNaN(C.vy)||t>2&&isNaN(C.vz))&&(C.vx=0,t>1&&(C.vy=0),t>2&&(C.vz=0))}}function m(c){return c.initialize&&c.initialize(n,b,t),c}return x(),r={tick:v,restart:function(){return l.restart(y),r},stop:function(){return l.stop(),r},numDimensions:function(c){return arguments.length?(t=Math.min(Yt,Math.max(1,Math.round(c))),h.forEach(m),r):t},nodes:function(c){return arguments.length?(n=c,x(),h.forEach(m),r):n},alpha:function(c){return arguments.length?(i=+c,r):i},alphaMin:function(c){return arguments.length?(a=+c,r):a},alphaDecay:function(c){return arguments.length?(u=+c,r):+u},alphaTarget:function(c){return arguments.length?(d=+c,r):d},velocityDecay:function(c){return arguments.length?(s=1-c,r):1-s},randomSource:function(c){return arguments.length?(b=c,h.forEach(m),r):b},force:function(c,M){return arguments.length>1?(M==null?h.delete(c):h.set(c,m(M)),r):h.get(c)},find:function(){var c=Array.prototype.slice.call(arguments),M=c.shift()||0,C=(t>1?c.shift():null)||0,N=(t>2?c.shift():null)||0,_=c.shift()||1/0,T=0,A=n.length,L,U,H,V,j,he;for(_*=_,T=0;T<A;++T)j=n[T],L=M-j.x,U=C-(j.y||0),H=N-(j.z||0),V=L*L+U*U+H*H,V<_&&(he=j,_=V);return he},on:function(c,M){return arguments.length>1?(g.on(c,M),r):g.on(c)}}}function yi(){var n,e,t,r,i,a=Te(-30),u,d=1,s=1/0,h=.81;function l(v){var x,m=n.length,c=(e===1?Ot(n,st):e===2?kt(n,st,Zt):e===3?Gt(n,st,Zt,ci):null).visitAfter(b);for(i=v,x=0;x<m;++x)t=n[x],c.visit(y)}function g(){if(n){var v,x=n.length,m;for(u=new Array(x),v=0;v<x;++v)m=n[v],u[m.index]=+a(m,v,n)}}function b(v){var x=0,m,c,M=0,C,N,_,T,A=v.length;if(A){for(C=N=_=T=0;T<A;++T)(m=v[T])&&(c=Math.abs(m.value))&&(x+=m.value,M+=c,C+=c*(m.x||0),N+=c*(m.y||0),_+=c*(m.z||0));x*=Math.sqrt(4/A),v.x=C/M,e>1&&(v.y=N/M),e>2&&(v.z=_/M)}else{m=v,m.x=m.data.x,e>1&&(m.y=m.data.y),e>2&&(m.z=m.data.z);do x+=u[m.data.index];while(m=m.next)}v.value=x}function y(v,x,m,c,M){if(!v.value)return!0;var C=[m,c,M][e-1],N=v.x-t.x,_=e>1?v.y-t.y:0,T=e>2?v.z-t.z:0,A=C-x,L=N*N+_*_+T*T;if(A*A/h<L)return L<s&&(N===0&&(N=de(r),L+=N*N),e>1&&_===0&&(_=de(r),L+=_*_),e>2&&T===0&&(T=de(r),L+=T*T),L<d&&(L=Math.sqrt(d*L)),t.vx+=N*v.value*i/L,e>1&&(t.vy+=_*v.value*i/L),e>2&&(t.vz+=T*v.value*i/L)),!0;if(v.length||L>=s)return;(v.data!==t||v.next)&&(N===0&&(N=de(r),L+=N*N),e>1&&_===0&&(_=de(r),L+=_*_),e>2&&T===0&&(T=de(r),L+=T*T),L<d&&(L=Math.sqrt(d*L)));do v.data!==t&&(A=u[v.data.index]*i/L,t.vx+=N*A,e>1&&(t.vy+=_*A),e>2&&(t.vz+=T*A));while(v=v.next)}return l.initialize=function(v,...x){n=v,r=x.find(m=>typeof m=="function")||Math.random,e=x.find(m=>[1,2,3].includes(m))||2,g()},l.strength=function(v){return arguments.length?(a=typeof v=="function"?v:Te(+v),g(),l):a},l.distanceMin=function(v){return arguments.length?(d=v*v,l):Math.sqrt(d)},l.distanceMax=function(v){return arguments.length?(s=v*v,l):Math.sqrt(s)},l.theta=function(v){return arguments.length?(h=v*v,l):Math.sqrt(h)},l}function ut(n){return typeof n=="object"&&n!==null&&"index"in n&&typeof n.index=="number"&&"x"in n&&typeof n.x=="number"&&"y"in n&&typeof n.y=="number"&&"z"in n&&typeof n.z=="number"&&"vx"in n&&typeof n.vx=="number"&&"vy"in n&&typeof n.vy=="number"&&"vz"in n&&typeof n.vz=="number"}function mi(n){return!!(typeof n=="object"&&n!==null&&Object.hasOwn(n,"index")&&"index"in n&&typeof n.index=="number"&&"source"in n&&ut(n.source)&&"target"in n&&ut(n.target))}class bi{constructor(){I(this,"d3ForceLayout");I(this,"d3AlphaMin",0);I(this,"d3AlphaTarget",0);I(this,"d3AlphaDecay",.0228);I(this,"d3VelocityDecay",.4);I(this,"nodeMapping",new Map);I(this,"edgeMapping",new Map);I(this,"newNodeMap",new Map);I(this,"newEdgeMap",new Map);I(this,"reheat",!1);this.d3ForceLayout=vi().numDimensions(3).alpha(1).force("link",ti()).force("charge",yi()).force("center",ar()).force("dagRadial",null).stop(),this.d3ForceLayout.force("link").id(e=>e.id)}get graphNeedsRefresh(){return!!this.newNodeMap.size||!!this.newEdgeMap.size}async init(){}refresh(){if(this.graphNeedsRefresh||this.reheat){let e=[...this.nodeMapping.values()];e=e.concat([...this.newNodeMap.values()]),this.d3ForceLayout.alpha(1).nodes(e).stop();for(const r of this.newNodeMap.entries()){const i=r[0],a=r[1];if(!ut(a))throw new Error("Internal error: Node is not settled as a complete D3 Node");this.nodeMapping.set(i,a)}this.newNodeMap.clear();let t=[...this.edgeMapping.values()];t=t.concat([...this.newEdgeMap.values()]),this.d3ForceLayout.force("link").links(t);for(const r of this.newEdgeMap.entries()){const i=r[0],a=r[1];if(!mi(a))throw new Error("Internal error: Edge is not settled as a complete D3 Edge");this.edgeMapping.set(i,a)}this.newEdgeMap.clear()}}step(){this.refresh(),this.d3ForceLayout.tick()}addNode(e){this.newNodeMap.set(e,{id:e.id})}addEdge(e){this.newEdgeMap.set(e,{source:e.srcId,target:e.dstId})}get nodes(){return this.nodeMapping.keys()}get edges(){return this.edgeMapping.keys()}getNodePosition(e){const t=this._getMappedNode(e);if(t.x===void 0||t.y===void 0||t.z===void 0)throw new Error("Internal error: Node not initialized in D3GraphEngine");return{x:t.x,y:t.y,z:t.z}}setNodePosition(e,t){const r=this._getMappedNode(e);r.x=t.x,r.y=t.y,r.z=t.z??0,this.reheat=!0}getEdgePosition(e){const t=this._getMappedEdge(e);return{src:{x:t.source.x,y:t.source.y,z:t.source.z},dst:{x:t.target.x,y:t.target.y,z:t.target.z}}}pin(e){const t=this._getMappedNode(e);t.fx=t.x,t.fy=t.y,t.fz=t.z,this.reheat=!0}unpin(e){const t=this._getMappedNode(e);t.fx=void 0,t.fy=void 0,t.fz=void 0,this.reheat=!0}_getMappedNode(e){this.refresh();const t=this.nodeMapping.get(e);if(!t)throw new Error("Internal error: Node not found in D3GraphEngine");return t}_getMappedEdge(e){this.refresh();const t=this.edgeMapping.get(e);if(!t)throw new Error("Internal error: Edge not found in D3GraphEngine");return t}}const en=new Map;class wi{constructor(){I(this,"hits",0);I(this,"misses",0)}get(e,t){let r=en.get(e);return r?(this.hits++,r.createInstance(e)):(this.misses++,r=t(),r.isVisible=!1,en.set(e,r),r.createInstance(e))}reset(){this.hits=0,this.misses=0}}var ht=function(e){_i(e);var t=xi(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e};function xi(n){var e=Object.create(null);return{on:function(t,r,i){if(typeof r!="function")throw new Error("callback is expected to be a function");var a=e[t];return a||(a=e[t]=[]),a.push({callback:r,ctx:i}),n},off:function(t,r){var i=typeof t>"u";if(i)return e=Object.create(null),n;if(e[t]){var a=typeof r!="function";if(a)delete e[t];else for(var u=e[t],d=0;d<u.length;++d)u[d].callback===r&&u.splice(d,1)}return n},fire:function(t){var r=e[t];if(!r)return n;var i;arguments.length>1&&(i=Array.prototype.splice.call(arguments,1));for(var a=0;a<r.length;++a){var u=r[a];u.callback.apply(u.ctx,i)}return n}}}function _i(n){if(!n)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],t=0;t<e.length;++t)if(n.hasOwnProperty(e[t]))throw new Error("Subject cannot be eventified, since it already has property '"+e[t]+"'")}var Mi=Ci,Ni=ht;function Ci(n){if(n=n||{},"uniqueLinkId"in n&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),n.multigraph=n.uniqueLinkId),n.multigraph===void 0&&(n.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,t=new Map,r={},i=0,a=n.multigraph?N:C,u=[],d=B,s=B,h=B,l=B,g={version:20,addNode:x,addLink:M,removeLink:L,removeNode:c,getNode:m,getNodeCount:_,getLinkCount:T,getEdgeCount:T,getLinksCount:T,getNodesCount:_,getLinks:A,forEachNode:ue,forEachLinkedNode:he,forEachLink:j,beginUpdate:h,endUpdate:l,clear:V,hasLink:H,hasNode:m,getLink:H};return Ni(g),b(),g;function b(){var P=g.on;g.on=z;function z(){return g.beginUpdate=h=Q,g.endUpdate=l=oe,d=y,s=v,g.on=P,P.apply(g,arguments)}}function y(P,z){u.push({link:P,changeType:z})}function v(P,z){u.push({node:P,changeType:z})}function x(P,z){if(P===void 0)throw new Error("Invalid node identifier");h();var F=m(P);return F?(F.data=z,s(F,"update")):(F=new Ei(P,z),s(F,"add")),e.set(P,F),l(),F}function m(P){return e.get(P)}function c(P){var z=m(P);if(!z)return!1;h();var F=z.links;return F&&(F.forEach(U),z.links=null),e.delete(P),s(z,"remove"),l(),!0}function M(P,z,F){h();var O=m(P)||x(P),K=m(z)||x(z),J=a(P,z,F),ee=t.has(J.id);return t.set(J.id,J),tn(O,J),P!==z&&tn(K,J),d(J,ee?"update":"add"),l(),J}function C(P,z,F){var O=Ue(P,z),K=t.get(O);return K?(K.data=F,K):new nn(P,z,F,O)}function N(P,z,F){var O=Ue(P,z),K=r.hasOwnProperty(O);if(K||H(P,z)){K||(r[O]=0);var J="@"+ ++r[O];O=Ue(P+J,z+J)}return new nn(P,z,F,O)}function _(){return e.size}function T(){return t.size}function A(P){var z=m(P);return z?z.links:null}function L(P,z){return z!==void 0&&(P=H(P,z)),U(P)}function U(P){if(!P||!t.get(P.id))return!1;h(),t.delete(P.id);var z=m(P.fromId),F=m(P.toId);return z&&z.links.delete(P),F&&F.links.delete(P),d(P,"remove"),l(),!0}function H(P,z){if(!(P===void 0||z===void 0))return t.get(Ue(P,z))}function V(){h(),ue(function(P){c(P.id)}),l()}function j(P){if(typeof P=="function")for(var z=t.values(),F=z.next();!F.done;){if(P(F.value))return!0;F=z.next()}}function he(P,z,F){var O=m(P);if(O&&O.links&&typeof z=="function")return F?w(O.links,P,z):E(O.links,P,z)}function E(P,z,F){for(var O,K=P.values(),J=K.next();!J.done;){var ee=J.value,He=ee.fromId===z?ee.toId:ee.fromId;if(O=F(e.get(He),ee),O)return!0;J=K.next()}}function w(P,z,F){for(var O,K=P.values(),J=K.next();!J.done;){var ee=J.value;if(ee.fromId===z&&(O=F(e.get(ee.toId),ee),O))return!0;J=K.next()}}function B(){}function Q(){i+=1}function oe(){i-=1,i===0&&u.length>0&&(g.fire("changed",u),u.length=0)}function ue(P){if(typeof P!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+P);for(var z=e.values(),F=z.next();!F.done;){if(P(F.value))return!0;F=z.next()}}}function Ei(n,e){this.id=n,this.links=null,this.data=e}function tn(n,e){n.links?n.links.add(e):n.links=new Set([e])}function nn(n,e,t,r){this.fromId=n,this.toId=e,this.data=t,this.id=r}function Ue(n,e){return n.toString()+"👉 "+e.toString()}const Ti=tt(Mi);var ft={exports:{}},Ie={exports:{}},rn=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const $i=rn;var Ne=function(e){return t;function t(r,i){let a=i&&i.indent||0,u=i&&i.join!==void 0?i.join:`
`,d=Array(a+1).join(" "),s=[];for(let h=0;h<e;++h){let l=$i(h),g=h===0?"":d;s.push(g+r.replace(/{var}/g,l))}return s.join(u)}};const an=Ne;Ie.exports=Bi,Ie.exports.generateCreateBodyFunctionBody=on,Ie.exports.getVectorCode=un,Ie.exports.getBodyCode=sn;function Bi(n,e){let t=on(n,e),{Body:r}=new Function(t)();return r}function on(n,e){return`
${un(n,e)}
${sn(n)}
return {Body: Body, Vector: Vector};
`}function sn(n){let e=an(n),t=e("{var}",{join:", "});return`
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
};`}function un(n,e){let t=an(n),r="";return e&&(r=`${t(`
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
  };`}var Si=Ie.exports,ve={exports:{}};const dt=Ne,ye=rn;ve.exports=Pi,ve.exports.generateQuadTreeFunctionBody=hn,ve.exports.getInsertStackCode=pn,ve.exports.getQuadNodeCode=ln,ve.exports.isSamePosition=fn,ve.exports.getChildBodyCode=cn,ve.exports.setChildBodyCode=dn;function Pi(n){let e=hn(n);return new Function(e)()}function hn(n){let e=dt(n),t=Math.pow(2,n);return`
${pn()}
${ln(n)}
${fn(n)}
${cn(n)}
${dn(n)}

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

`;function i(d){let s=[],h=Array(d+1).join(" ");for(let l=0;l<n;++l)s.push(h+`if (${ye(l)} > max_${ye(l)}) {`),s.push(h+`  quadIdx = quadIdx + ${Math.pow(2,l)};`),s.push(h+`  min_${ye(l)} = max_${ye(l)};`),s.push(h+`  max_${ye(l)} = node.max_${ye(l)};`),s.push(h+"}");return s.join(`
`)}function a(){let d=Array(11).join(" "),s=[];for(let h=0;h<t;++h)s.push(d+`if (node.quad${h}) {`),s.push(d+`  queue[pushIdx] = node.quad${h};`),s.push(d+"  queueLength += 1;"),s.push(d+"  pushIdx += 1;"),s.push(d+"}");return s.join(`
`)}function u(d){let s=[];for(let h=0;h<t;++h)s.push(`${d}quad${h} = null;`);return s.join(`
`)}}function fn(n){let e=dt(n);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function dn(n){var e=Math.pow(2,n);return`
function setChild(node, idx, child) {
  ${t()}
}`;function t(){let r=[];for(let i=0;i<e;++i){let a=i===0?"  ":"  else ";r.push(`${a}if (idx === ${i}) node.quad${i} = child;`)}return r.join(`
`)}}function cn(n){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let t=[],r=Math.pow(2,n);for(let i=0;i<r;++i)t.push(`  if (idx === ${i}) return node.quad${i};`);return t.join(`
`)}}function ln(n){let e=dt(n),t=Math.pow(2,n);var r=`
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
`)}}function pn(){return`
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
`}var Ii=ve.exports,ct={exports:{}};ct.exports=Ai,ct.exports.generateFunctionBody=gn;const zi=Ne;function Ai(n){let e=gn(n);return new Function("bodies","settings","random",e)}function gn(n){let e=zi(n);return`
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
`}var Oi=ct.exports,lt={exports:{}};const Li=Ne;lt.exports=Fi,lt.exports.generateCreateDragForceFunctionBody=vn;function Fi(n){let e=vn(n);return new Function("options",e)}function vn(n){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${Li(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var ki=lt.exports,pt={exports:{}};const qi=Ne;pt.exports=Di,pt.exports.generateCreateSpringForceFunctionBody=yn;function Di(n){let e=yn(n);return new Function("options","random",e)}function yn(n){let e=qi(n);return`
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
`}var Gi=pt.exports,gt={exports:{}};const ji=Ne;gt.exports=Ri,gt.exports.generateIntegratorFunctionBody=mn;function Ri(n){let e=mn(n);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function mn(n){let e=ji(n);return`
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
`}var Ui=gt.exports,vt,bn;function Hi(){if(bn)return vt;bn=1,vt=n;function n(e,t,r,i){this.from=e,this.to=t,this.length=r,this.coefficient=i}return vt}var yt,wn;function Vi(){if(wn)return yt;wn=1,yt=n;function n(e,t){var r;if(e||(e={}),t){for(r in t)if(t.hasOwnProperty(r)){var i=e.hasOwnProperty(r),a=typeof t[r],u=!i||typeof e[r]!==a;u?e[r]=t[r]:a==="object"&&(e[r]=n(e[r],t[r]))}}return e}return yt}var ze={exports:{}},xn;function Qi(){if(xn)return ze.exports;xn=1,ze.exports=n,ze.exports.random=n,ze.exports.randomIterator=d;function n(s){var h=typeof s=="number"?s:+new Date;return new e(h)}function e(s){this.seed=s}e.prototype.next=u,e.prototype.nextDouble=a,e.prototype.uniform=a,e.prototype.gaussian=t;function t(){var s,h,l;do h=this.nextDouble()*2-1,l=this.nextDouble()*2-1,s=h*h+l*l;while(s>=1||s===0);return h*Math.sqrt(-2*Math.log(s)/s)}e.prototype.levy=r;function r(){var s=1.5,h=Math.pow(i(1+s)*Math.sin(Math.PI*s/2)/(i((1+s)/2)*s*Math.pow(2,(s-1)/2)),1/s);return this.gaussian()*h/Math.pow(Math.abs(this.gaussian()),1/s)}function i(s){return Math.sqrt(2*Math.PI/s)*Math.pow(1/Math.E*(s+1/(12*s-1/(10*s))),s)}function a(){var s=this.seed;return s=s+2127912214+(s<<12)&4294967295,s=(s^3345072700^s>>>19)&4294967295,s=s+374761393+(s<<5)&4294967295,s=(s+3550635116^s<<9)&4294967295,s=s+4251993797+(s<<3)&4294967295,s=(s^3042594569^s>>>16)&4294967295,this.seed=s,(s&268435455)/268435456}function u(s){return Math.floor(this.nextDouble()*s)}function d(s,h){var l=h||n();if(typeof l.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:b,shuffle:g};function g(){var y,v,x;for(y=s.length-1;y>0;--y)v=l.next(y+1),x=s[v],s[v]=s[y],s[y]=x;return s}function b(y){var v,x,m;for(v=s.length-1;v>0;--v)x=l.next(v+1),m=s[x],s[x]=s[v],s[v]=m,y(m);s.length&&y(s[0])}}return ze.exports}var _n=ea,Wi=Si,Xi=Ii,Ji=Oi,Ki=ki,Yi=Gi,Zi=Ui,Mn={};function ea(n){var e=Hi(),t=Vi(),r=ht;if(n){if(n.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(n.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}n=t(n,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var i=Mn[n.dimensions];if(!i){var a=n.dimensions;i={Body:Wi(a,n.debug),createQuadTree:Xi(a),createBounds:Ji(a),createDragForce:Ki(a),createSpringForce:Yi(a),integrate:Zi(a)},Mn[a]=i}var u=i.Body,d=i.createQuadTree,s=i.createBounds,h=i.createDragForce,l=i.createSpringForce,g=i.integrate,b=w=>new u(w),y=Qi().random(42),v=[],x=[],m=d(n,y),c=s(v,n,y),M=l(n,y),C=h(n),N=0,_=[],T=new Map,A=0;H("nbody",he),H("spring",E);var L={bodies:v,quadTree:m,springs:x,settings:n,addForce:H,removeForce:V,getForces:j,step:function(){for(var w=0;w<_.length;++w)_[w](A);var B=g(v,n.timeStep,n.adaptiveTimeStepWeight);return A+=1,B},addBody:function(w){if(!w)throw new Error("Body is required");return v.push(w),w},addBodyAt:function(w){if(!w)throw new Error("Body position is required");var B=b(w);return v.push(B),B},removeBody:function(w){if(w){var B=v.indexOf(w);if(!(B<0))return v.splice(B,1),v.length===0&&c.reset(),!0}},addSpring:function(w,B,Q,oe){if(!w||!B)throw new Error("Cannot add null spring to force simulator");typeof Q!="number"&&(Q=-1);var ue=new e(w,B,Q,oe>=0?oe:-1);return x.push(ue),ue},getTotalMovement:function(){return N},removeSpring:function(w){if(w){var B=x.indexOf(w);if(B>-1)return x.splice(B,1),!0}},getBestNewBodyPosition:function(w){return c.getBestNewPosition(w)},getBBox:U,getBoundingBox:U,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(w){return w!==void 0?(n.gravity=w,m.options({gravity:w}),this):n.gravity},theta:function(w){return w!==void 0?(n.theta=w,m.options({theta:w}),this):n.theta},random:y};return ta(n,L),r(L),L;function U(){return c.update(),c.box}function H(w,B){if(T.has(w))throw new Error("Force "+w+" is already added");T.set(w,B),_.push(B)}function V(w){var B=_.indexOf(T.get(w));B<0||(_.splice(B,1),T.delete(w))}function j(){return T}function he(){if(v.length!==0){m.insertBodies(v);for(var w=v.length;w--;){var B=v[w];B.isPinned||(B.reset(),m.updateBodyForce(B),C.update(B))}}}function E(){for(var w=x.length;w--;)M.update(x[w])}}function ta(n,e){for(var t in n)na(n,e,t)}function na(n,e,t){if(n.hasOwnProperty(t)&&typeof e[t]!="function"){var r=Number.isFinite(n[t]);r?e[t]=function(i){if(i!==void 0){if(!Number.isFinite(i))throw new Error("Value of "+t+" should be a valid number.");return n[t]=i,e}return n[t]}:e[t]=function(i){return i!==void 0?(n[t]=i,e):n[t]}}}ft.exports=ia,ft.exports.simulator=_n;var ra=ht;function ia(n,e){if(!n)throw new Error("Graph structure cannot be undefined");var t=e&&e.createSimulator||_n,r=t(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var i=n.version>19?he:j;e&&typeof e.nodeMass=="function"&&(i=e.nodeMass);var a=new Map,u={},d=0,s=r.settings.springTransform||aa;C(),m();var h=!1,l={step:function(){if(d===0)return g(!0),!0;var E=r.step();l.lastMove=E,l.fire("step");var w=E/d,B=w<=.01;return g(B),B},getNodePosition:function(E){return V(E).pos},setNodePosition:function(E){var w=V(E);w.setPosition.apply(w,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(E){var w=u[E];if(w)return{from:w.from.pos,to:w.to.pos}},getGraphRect:function(){return r.getBBox()},forEachBody:b,pinNode:function(E,w){var B=V(E.id);B.isPinned=!!w},isNodePinned:function(E){return V(E.id).isPinned},dispose:function(){n.off("changed",M),l.fire("disposed")},getBody:x,getSpring:v,getForceVectorLength:y,simulator:r,graph:n,lastMove:0};return ra(l),l;function g(E){h!==E&&(h=E,c(E))}function b(E){a.forEach(E)}function y(){var E=0,w=0;return b(function(B){E+=Math.abs(B.force.x),w+=Math.abs(B.force.y)}),Math.sqrt(E*E+w*w)}function v(E,w){var B;if(w===void 0)typeof E!="object"?B=E:B=E.id;else{var Q=n.hasLink(E,w);if(!Q)return;B=Q.id}return u[B]}function x(E){return a.get(E)}function m(){n.on("changed",M)}function c(E){l.fire("stable",E)}function M(E){for(var w=0;w<E.length;++w){var B=E[w];B.changeType==="add"?(B.node&&N(B.node.id),B.link&&T(B.link)):B.changeType==="remove"&&(B.node&&_(B.node),B.link&&A(B.link))}d=n.getNodesCount()}function C(){d=0,n.forEachNode(function(E){N(E.id),d+=1}),n.forEachLink(T)}function N(E){var w=a.get(E);if(!w){var B=n.getNode(E);if(!B)throw new Error("initBody() was called with unknown node id");var Q=B.position;if(!Q){var oe=L(B);Q=r.getBestNewBodyPosition(oe)}w=r.addBodyAt(Q),w.id=E,a.set(E,w),U(E),H(B)&&(w.isPinned=!0)}}function _(E){var w=E.id,B=a.get(w);B&&(a.delete(w),r.removeBody(B))}function T(E){U(E.fromId),U(E.toId);var w=a.get(E.fromId),B=a.get(E.toId),Q=r.addSpring(w,B,E.length);s(E,Q),u[E.id]=Q}function A(E){var w=u[E.id];if(w){var B=n.getNode(E.fromId),Q=n.getNode(E.toId);B&&U(B.id),Q&&U(Q.id),delete u[E.id],r.removeSpring(w)}}function L(E){var w=[];if(!E.links)return w;for(var B=Math.min(E.links.length,2),Q=0;Q<B;++Q){var oe=E.links[Q],ue=oe.fromId!==E.id?a.get(oe.fromId):a.get(oe.toId);ue&&ue.pos&&w.push(ue)}return w}function U(E){var w=a.get(E);if(w.mass=i(E),Number.isNaN(w.mass))throw new Error("Node mass should be a number")}function H(E){return E&&(E.isPinned||E.data&&E.data.isPinned)}function V(E){var w=a.get(E);return w||(N(E),w=a.get(E)),w}function j(E){var w=n.getLinks(E);return w?1+w.length/3:1}function he(E){var w=n.getLinks(E);return w?1+w.size/3:1}}function aa(){}var oa=ft.exports;const sa=tt(oa);class ua{constructor(){I(this,"ngraph");I(this,"ngraphLayout");I(this,"nodeMapping",new Map);I(this,"edgeMapping",new Map);this.ngraph=Ti(),this.ngraphLayout=sa(this.ngraph,{dimensions:3})}async init(){}step(){this.ngraphLayout.step()}addNode(e){const t=this.ngraph.addNode(e.id,{parentNode:e});this.nodeMapping.set(e,t)}addEdge(e){const t=this.ngraph.addLink(e.srcId,e.dstId,{parentEdge:this});this.edgeMapping.set(e,t)}getNodePosition(e){const t=this._getMappedNode(e);return this.ngraphLayout.getNodePosition(t.id)}setNodePosition(e,t){const r=this._getMappedNode(e),i=this.ngraphLayout.getNodePosition(r.id);i.x=t.x,i.y=t.y,i.z=t.z}getEdgePosition(e){const t=this._getMappedEdge(e),r=this.ngraphLayout.getLinkPosition(t.id);return{src:{x:r.from.x,y:r.from.y,z:r.from.z},dst:{x:r.to.x,y:r.to.y,z:r.to.z}}}get nodes(){return this.nodeMapping.keys()}get edges(){return this.edgeMapping.keys()}pin(e){const t=this._getMappedNode(e);this.ngraphLayout.pinNode(t,!0)}unpin(e){const t=this._getMappedNode(e);this.ngraphLayout.pinNode(t,!1)}_getMappedNode(e){const t=this.nodeMapping.get(e);if(!t)throw new Error("Internal error: Node not found in NGraphEngine");return t}_getMappedEdge(e){const t=this.edgeMapping.get(e);if(!t)throw new Error("Internal error: Edge not found in NGraphEngine");return t}}class ha{constructor(e){I(this,"graph");I(this,"sceneInstrumentation");I(this,"babylonInstrumentation");I(this,"graphStep");I(this,"nodeUpdate");I(this,"edgeUpdate");I(this,"loadTime");I(this,"totalUpdates",0);this.graph=e,this.sceneInstrumentation=new $.SceneInstrumentation(e.scene),this.sceneInstrumentation.captureFrameTime=!0,this.sceneInstrumentation.captureRenderTime=!0,this.sceneInstrumentation.captureInterFrameTime=!0,this.sceneInstrumentation.captureCameraRenderTime=!0,this.sceneInstrumentation.captureActiveMeshesEvaluationTime=!0,this.sceneInstrumentation.captureRenderTargetsRenderTime=!0,this.babylonInstrumentation=new $.EngineInstrumentation(e.engine),this.babylonInstrumentation.captureGPUFrameTime=!0,this.babylonInstrumentation.captureShaderCompilationTime=!0,this.graphStep=new $.PerfCounter,this.nodeUpdate=new $.PerfCounter,this.edgeUpdate=new $.PerfCounter,this.loadTime=new $.PerfCounter}toString(){let e="";function t(a,u,d=""){e+=`${a}: ${u}${d}
`}function r(a){e+=`
${a}
`;for(let u=0;u<a.length;u++)e+="-";e+=`
`}function i(a,u,d=1){e+=`${a} (min/avg/last sec/max [total]): `,e+=`${(u.min*d).toFixed(2)} / `,e+=`${(u.average*d).toFixed(2)} / `,e+=`${(u.lastSecAverage*d).toFixed(2)} / `,e+=`${(u.max*d).toFixed(2)} `,e+=`[${(u.total*d).toFixed(2)}] ms
`}return r("Graph"),t("Num Nodes",this.numNodes),t("Num Edges",this.numEdges),t("Total Updates",this.totalUpdates),t("Mesh Cache Hits",this.meshCacheHits),t("Mesh Cache Misses",this.meshCacheMisses),r("Graph Engine Performance"),i("JSON Load Time",this.loadTime),i("Graph Physics Engine Time",this.graphStep),i("Node Update Time",this.nodeUpdate),i("Edge Update Time",this.edgeUpdate),r("BabylonJS Performance"),i("GPU Time",this.babylonInstrumentation.gpuFrameTimeCounter,1e-6),i("Shader Time",this.babylonInstrumentation.shaderCompilationTimeCounter),i("Mesh Evaluation Time",this.sceneInstrumentation.activeMeshesEvaluationTimeCounter),i("Render Targets Time",this.sceneInstrumentation.renderTargetsRenderTimeCounter),i("Draw Calls Time",this.sceneInstrumentation.drawCallsCounter),i("Frame Time",this.sceneInstrumentation.frameTimeCounter),i("Render Time",this.sceneInstrumentation.renderTimeCounter),i("Time Between Frames",this.sceneInstrumentation.interFrameTimeCounter),i("Camera Render Time",this.sceneInstrumentation.cameraRenderTimeCounter),e}step(){this.totalUpdates++}reset(){this.totalUpdates=0}get numNodes(){return me.list.size}get numEdges(){return ie.list.size}get meshCacheHits(){return this.graph.meshCache.hits}get meshCacheMisses(){return this.graph.meshCache.misses}}class fa{constructor(e,t){I(this,"config");I(this,"stats");I(this,"element");I(this,"canvas");I(this,"engine");I(this,"scene");I(this,"camera");I(this,"skybox");I(this,"meshCache");I(this,"graphEngineType");I(this,"graphEngine");I(this,"running",!0);I(this,"pinOnDrag");I(this,"fetchNodes");I(this,"fetchEdges");I(this,"graphObservable",new $.Observable);I(this,"nodeObservable",new $.Observable);I(this,"edgeObservable",new $.Observable);if(this.config=nr(t),this.meshCache=new wi,this.fetchNodes=this.config.behavior.fetchNodes,this.fetchEdges=this.config.behavior.fetchEdges,typeof e=="string"){const r=document.getElementById(e);if(!r)throw new Error(`getElementById() could not find element '${e}'`);this.element=r}else if(e instanceof HTMLElement)this.element=e;else throw new TypeError("Graph constructor requires 'element' argument that is either a string specifying the ID of the HTML element or an HTMLElement");if(this.element.innerHTML="",this.canvas=document.createElement("canvas"),this.canvas.setAttribute("id","babylonForceGraphRenderCanvas"),this.canvas.setAttribute("touch-action","none"),this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.touchAction="none",this.element.appendChild(this.canvas),this.engine=new $.Engine(this.canvas,!0),this.scene=new $.Scene(this.engine),this.camera=new $.ArcRotateCamera("camera",-Math.PI/2,Math.PI/2.5,30,new $.Vector3(0,0,0)),this.camera.attachControl(this.canvas,!0),new $.HemisphericLight("light",new $.Vector3(1,1,0)),this.config.style.skybox&&this.config.style.skybox.length&&new $.PhotoDome("testdome",this.config.style.skybox,{resolution:32,size:1e3},this.scene),this.config.engine.type==="ngraph")this.graphEngine=new ua;else if(this.config.engine.type==="d3")this.graphEngine=new bi;else throw new TypeError(`Unknown graph engine type: '${this.graphEngineType}'`);this.stats=new ha(this);for(let r=0;r<this.config.engine.preSteps;r++)this.graphEngine.step()}async init(){this.engine.runRenderLoop(()=>{this.update(),this.scene.render()}),navigator.xr&&await this.scene.createDefaultXRExperienceAsync({disableTeleportation:!0}),window.addEventListener("resize",()=>{this.engine.resize()})}update(){if(!this.running)return;this.stats.step(),this.stats.graphStep.beginMonitoring();for(let t=0;t<this.config.engine.stepMultiplier;t++)this.graphEngine.step();this.stats.graphStep.endMonitoring();let e=0;this.stats.nodeUpdate.beginMonitoring();for(const t of this.graphEngine.nodes)e=Math.max(e,t.getDeltaPos()),t.update();this.stats.nodeUpdate.endMonitoring(),this.stats.edgeUpdate.beginMonitoring();for(const t of this.graphEngine.edges)t.update();this.stats.edgeUpdate.endMonitoring(),this.running&&e<this.minDelta&&(console.log("Graph Settled"),console.log(this.stats.toString()),this.graphObservable.notifyObservers({type:"graph-settled",graph:this}),this.running=!1)}get minDelta(){if(this.config.engine.minDelta)return this.config.engine.minDelta;const e=me.list.size+ie.list.size;let t=(Pt(e,100)-.5)*.5;return t*=this.config.engine.stepMultiplier,t}addNode(e,t={}){return this.nodeObservable.notifyObservers({type:"node-add-before",nodeId:e,metadata:t}),me.create(this,e,{nodeMeshConfig:this.config.style.node,pinOnDrag:this.pinOnDrag,metadata:t})}addEdge(e,t,r={}){return this.edgeObservable.notifyObservers({type:"edge-add-before",srcNodeId:e,dstNodeId:t,metadata:r}),ie.create(this,e,t,{edgeMeshConfig:this.config.style.edge,metadata:r})}addListener(e,t){switch(e){case"graph-settled":this.graphObservable.add(r=>{r.type===e&&t(r)});break;case"node-add-before":this.nodeObservable.add(r=>{r.type===e&&t(r)});break;case"edge-add-before":this.edgeObservable.add(r=>{r.type===e&&t(r)});break;default:throw new TypeError(`Unknown listener type in addListener: ${e}`)}}async loadJsonData(e,t={}){this.stats.loadTime.beginMonitoring();const{nodeListProp:r,edgeListProp:i,nodeIdProp:a,edgeSrcIdProp:u,edgeDstIdProp:d}=ir(t),h=await(await fetch(e,t.fetchOpts)).json();if(!Array.isArray(h[r]))throw TypeError(`when fetching JSON data: '${r}' was not an Array`);if(!Array.isArray(h[i]))throw TypeError(`when fetching JSON data: '${i}' was not an Array`);for(const l of h[r]){const g=l[a],b=l;this.addNode(g,b)}for(const l of h[i]){const g=l[u],b=l[d],y=l;this.addEdge(g,b,y)}this.stats.loadTime.endMonitoring()}}Y.Edge=ie,Y.Graph=fa,Y.Node=me,Y.util=Wn,Object.defineProperty(Y,Symbol.toStringTag,{value:"Module"})});
