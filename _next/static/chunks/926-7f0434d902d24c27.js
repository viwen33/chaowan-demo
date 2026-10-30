(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[926],{8469:function(e,t,r){"use strict";r.d(t,{j:function(){return l}});var n=r(3608),i=r(8496),s=r(791),o=r(5612);let a={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},u={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},l=i.forwardRef(({scale:e=10,frames:t=1/0,opacity:r=1,width:l=1,height:c=1,blur:f=1,near:v=0,far:d=10,resolution:h=512,smooth:m=!0,color:p="#000000",depthWrite:g=!1,renderOrder:x,...y},D)=>{let M,b;let w=i.useRef(null),U=(0,o.D)(e=>e.scene),S=(0,o.D)(e=>e.gl),T=i.useRef(null);l*=Array.isArray(e)?e[0]:e||1,c*=Array.isArray(e)?e[1]:e||1;let[j,_,P,C,L,E,O]=i.useMemo(()=>{let e=new s.WebGLRenderTarget(h,h),t=new s.WebGLRenderTarget(h,h);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let r=new s.PlaneGeometry(l,c).rotateX(Math.PI/2),n=new s.Mesh(r),i=new s.MeshDepthMaterial;i.depthTest=i.depthWrite=!1,i.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new s.Color(p)}},e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};let o=new s.ShaderMaterial(a),f=new s.ShaderMaterial(u);return f.depthTest=o.depthTest=!1,[e,r,i,n,o,f,t]},[h,l,c,e,p]),R=e=>{C.visible=!0,C.material=L,L.uniforms.tDiffuse.value=j.texture,L.uniforms.h.value=1*e/256,S.setRenderTarget(O),S.render(C,T.current),C.material=E,E.uniforms.tDiffuse.value=O.texture,E.uniforms.v.value=1*e/256,S.setRenderTarget(j),S.render(C,T.current),C.visible=!1},k=0;return(0,o.F)(()=>{T.current&&(t===1/0||k<t)&&(k++,M=U.background,b=U.overrideMaterial,w.current.visible=!1,U.background=null,U.overrideMaterial=P,S.setRenderTarget(j),S.render(U,T.current),R(f),m&&R(.4*f),S.setRenderTarget(null),w.current.visible=!0,U.overrideMaterial=b,U.background=M)}),i.useImperativeHandle(D,()=>w.current,[]),i.createElement("group",(0,n.Z)({"rotation-x":Math.PI/2},y,{ref:w}),i.createElement("mesh",{renderOrder:x,geometry:_,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},i.createElement("meshBasicMaterial",{transparent:!0,map:j.texture,opacity:r,depthWrite:g})),i.createElement("orthographicCamera",{ref:T,args:[-l/2,l/2,c/2,-c/2,v,d]}))})},7006:function(e,t,r){"use strict";let n;r.d(t,{S:function(){return f}});var i=r(8496),s=r(791);let o=e=>{let t;let r=new Set,n=(e,n)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=n?n:"object"!=typeof i||null===i)?i:Object.assign({},t,i),r.forEach(r=>r(t,e))}},i=()=>t,s={setState:n,getState:i,getInitialState:()=>o,subscribe:e=>(r.add(e),()=>r.delete(e))},o=t=e(n,i,s);return s},a=e=>e?o(e):o,u=e=>e,l=e=>{let t=a(e),r=e=>(function(e,t=u){let r=i.useSyncExternalStore(e.subscribe,i.useCallback(()=>t(e.getState()),[e,t]),()=>t(e.getInitialState()));return i.useDebugValue(r),r})(t,e);return Object.assign(r,t),r},c=0,f=(n=e=>(s.DefaultLoadingManager.onStart=(t,r,n)=>{e({active:!0,item:t,loaded:r,total:n,progress:(r-c)/(n-c)*100})},s.DefaultLoadingManager.onLoad=()=>{e({active:!1})},s.DefaultLoadingManager.onError=t=>e(e=>({errors:[...e.errors,t]})),s.DefaultLoadingManager.onProgress=(t,r,n)=>{r===n&&(c=n),e({active:!0,item:t,loaded:r,total:n,progress:(r-c)/(n-c)*100||100})},{errors:[],active:!1,progress:0,item:"",loaded:0,total:0}))?l(n):l},8491:function(e,t,r){"use strict";r.d(t,{default:function(){return i.a}});var n=r(3548),i=r.n(n)},2555:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(4518)},4518:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var u=[],l=!1,c=-1;function f(){l&&n&&(l=!1,n.length?u=n.concat(u):c=-1,u.length&&v())}function v(){if(!l){var e=a(f);l=!0;for(var t=u.length;t;){for(n=u,u=[];++c<t;)n&&n[c].run();c=-1,t=u.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new d(e,t)),1!==u.length||l||a(v)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var s=r[e]={exports:{}},o=!0;try{t[e](s,s.exports,n),o=!1}finally{o&&delete r[e]}return s.exports}n.ab="//";var i=n(229);e.exports=i}()},3548:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(6651);r(3890),r(8496);let i=n._(r(3992));function s(e,t){var r;let n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};"function"==typeof e&&(n.loader=e);let s={...n,...t};return(0,i.default)({...s,modules:null==(r=s.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4377:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return i}});let n=r(4895);function i(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return r}},3992:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(3890),i=r(8496),s=r(4377),o=r(2992);function a(e){return{default:e&&"default"in e?e.default:e}}let u={loader:()=>Promise.resolve(a(()=>null)),loading:null,ssr:!0},l=function(e){let t={...u,...e},r=(0,i.lazy)(()=>t.loader().then(a)),l=t.loading;function c(e){let a=l?(0,n.jsx)(l,{isLoading:!0,pastDelay:!0,error:null}):null,u=t.ssr?(0,n.jsxs)(n.Fragment,{children:["undefined"==typeof window?(0,n.jsx)(o.PreloadCss,{moduleIds:t.modules}):null,(0,n.jsx)(r,{...e})]}):(0,n.jsx)(s.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(r,{...e})});return(0,n.jsx)(i.Suspense,{fallback:a,children:u})}return c.displayName="LoadableComponent",c}},2992:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return s}});let n=r(3890),i=r(5296);function s(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let r=(0,i.getExpectedRequestStore)("next/dynamic css"),s=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files.filter(e=>e.endsWith(".css"));s.push(...t)}}return 0===s.length?null:(0,n.jsx)(n.Fragment,{children:s.map(e=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:r.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},7347:function(e,t,r){"use strict";r.d(t,{C:function(){return i}});var n=r(791);class i extends n.Scene{constructor(){super();let e=new n.BoxGeometry;e.deleteAttribute("uv");let t=new n.MeshStandardMaterial({side:n.BackSide}),r=new n.MeshStandardMaterial,i=new n.PointLight(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let o=new n.Mesh(e,t);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let a=new n.Mesh(e,r);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let u=new n.Mesh(e,r);u.position.set(-5.607,-.754,-.758),u.rotation.set(0,.994,0),u.scale.set(1.97,1.534,3.955),this.add(u);let l=new n.Mesh(e,r);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new n.Mesh(e,r);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let f=new n.Mesh(e,r);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let v=new n.Mesh(e,r);v.position.set(-2.193,-.369,-5.547),v.rotation.set(0,.516,0),v.scale.set(3.875,3.487,2.986),this.add(v);let d=new n.Mesh(e,s(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let h=new n.Mesh(e,s(50));h.position.set(-16.109,18.021,-8.207),h.scale.set(.1,2.425,2.751),this.add(h);let m=new n.Mesh(e,s(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new n.Mesh(e,s(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let g=new n.Mesh(e,s(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let x=new n.Mesh(e,s(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){let e=new Set;for(let t of(this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))}),e))t.dispose()}}function s(e){let t=new n.MeshBasicMaterial;return t.color.setScalar(e),t}}}]);