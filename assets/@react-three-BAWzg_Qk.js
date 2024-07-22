import{r as I,j as B}from"./react-BrYG2ukc.js";import{L as ue,T as Ze,R as et,U as tt,B as nt,M as rt,C as ot,a as it,O as st,P as at,S as Me,b as fe,N as lt,A as ct,W as ut,c as ft,d as dt,e as pt,V as vt,f as te,g as mt,h as ht,i as gt}from"./three-fo0PBQuo.js";import{u as yt}from"./react-use-measure-BxaOn8Cc.js";import{F as _t,u as bt}from"./its-fine-CJjG4mj_.js";import{R as wt,c as J}from"./react-reconciler-PI0iz4TX.js";import"./react-dom-Deq5q4uY.js";import{G as Ee,D as Ct,M as de,O as Et}from"./three-stdlib-Dem2NFcE.js";import{_ as Pt}from"./@babel-CF3RwP-h.js";import{c as St}from"./zustand-CdtLwxiR.js";import{s as Mt,p as Ot,c as jt}from"./suspend-react-BKIKQNXN.js";function un(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ie={exports:{}},Fe={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(h,S){var b=h.length;h.push(S);e:for(;0<b;){var M=b-1>>>1,L=h[M];if(0<c(L,S))h[M]=S,h[b]=L,b=M;else break e}}function o(h){return h.length===0?null:h[0]}function i(h){if(h.length===0)return null;var S=h[0],b=h.pop();if(b!==S){h[0]=b;e:for(var M=0,L=h.length,A=L>>>1;M<A;){var z=2*(M+1)-1,q=h[z],W=z+1,oe=h[W];if(0>c(q,b))W<L&&0>c(oe,q)?(h[M]=oe,h[W]=b,M=W):(h[M]=q,h[z]=b,M=z);else if(W<L&&0>c(oe,b))h[M]=oe,h[W]=b,M=W;else break e}}return S}function c(h,S){var b=h.sortIndex-S.sortIndex;return b!==0?b:h.id-S.id}if(typeof performance=="object"&&typeof performance.now=="function"){var v=performance;e.unstable_now=function(){return v.now()}}else{var w=Date,g=w.now();e.unstable_now=function(){return w.now()-g}}var l=[],m=[],n=1,r=null,s=3,d=!1,p=!1,y=!1,f=typeof setTimeout=="function"?setTimeout:null,a=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(h){for(var S=o(m);S!==null;){if(S.callback===null)i(m);else if(S.startTime<=h)i(m),S.sortIndex=S.expirationTime,t(l,S);else break;S=o(m)}}function O(h){if(y=!1,_(h),!p)if(o(l)!==null)p=!0,H(P);else{var S=o(m);S!==null&&G(O,S.startTime-h)}}function P(h,S){p=!1,y&&(y=!1,a(k),k=-1),d=!0;var b=s;try{for(_(S),r=o(l);r!==null&&(!(r.expirationTime>S)||h&&!E());){var M=r.callback;if(typeof M=="function"){r.callback=null,s=r.priorityLevel;var L=M(r.expirationTime<=S);S=e.unstable_now(),typeof L=="function"?r.callback=L:r===o(l)&&i(l),_(S)}else i(l);r=o(l)}if(r!==null)var A=!0;else{var z=o(m);z!==null&&G(O,z.startTime-S),A=!1}return A}finally{r=null,s=b,d=!1}}var C=!1,R=null,k=-1,j=5,x=-1;function E(){return!(e.unstable_now()-x<j)}function T(){if(R!==null){var h=e.unstable_now();x=h;var S=!0;try{S=R(!0,h)}finally{S?F():(C=!1,R=null)}}else C=!1}var F;if(typeof u=="function")F=function(){u(T)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,V=N.port2;N.port1.onmessage=T,F=function(){V.postMessage(null)}}else F=function(){f(T,0)};function H(h){R=h,C||(C=!0,F())}function G(h,S){k=f(function(){h(e.unstable_now())},S)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(h){h.callback=null},e.unstable_continueExecution=function(){p||d||(p=!0,H(P))},e.unstable_forceFrameRate=function(h){0>h||125<h?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<h?Math.floor(1e3/h):5},e.unstable_getCurrentPriorityLevel=function(){return s},e.unstable_getFirstCallbackNode=function(){return o(l)},e.unstable_next=function(h){switch(s){case 1:case 2:case 3:var S=3;break;default:S=s}var b=s;s=S;try{return h()}finally{s=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(h,S){switch(h){case 1:case 2:case 3:case 4:case 5:break;default:h=3}var b=s;s=h;try{return S()}finally{s=b}},e.unstable_scheduleCallback=function(h,S,b){var M=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?M+b:M):b=M,h){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=b+L,h={id:n++,callback:S,priorityLevel:h,startTime:b,expirationTime:L,sortIndex:-1},b>M?(h.sortIndex=b,t(m,h),o(l)===null&&h===o(m)&&(y?(a(k),k=-1):y=!0,G(O,b-M))):(h.sortIndex=L,t(l,h),p||d||(p=!0,H(P))),h},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(h){var S=s;return function(){var b=s;s=S;try{return h.apply(this,arguments)}finally{s=b}}}})(Fe);Ie.exports=Fe;var Oe=Ie.exports;const Pe={},Rt=e=>void Object.assign(Pe,e);function kt(e,t){function o(n,{args:r=[],attach:s,...d},p){let y=`${n[0].toUpperCase()}${n.slice(1)}`,f;if(n==="primitive"){if(d.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const a=d.object;f=Y(a,{type:n,root:p,attach:s,primitive:!0})}else{const a=Pe[y];if(!a)throw new Error(`R3F: ${y} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(r))throw new Error("R3F: The args prop must be an array!");f=Y(new a(...r),{type:n,root:p,attach:s,memoizedProps:{args:r}})}return f.__r3f.attach===void 0&&(f instanceof nt?f.__r3f.attach="geometry":f instanceof rt&&(f.__r3f.attach="material")),y!=="inject"&&me(f,d),f}function i(n,r){let s=!1;if(r){var d,p;(d=r.__r3f)!=null&&d.attach?ve(n,r,r.__r3f.attach):r.isObject3D&&n.isObject3D&&(n.add(r),s=!0),s||(p=n.__r3f)==null||p.objects.push(r),r.__r3f||Y(r,{}),r.__r3f.parent=n,Ce(r),K(r)}}function c(n,r,s){let d=!1;if(r){var p,y;if((p=r.__r3f)!=null&&p.attach)ve(n,r,r.__r3f.attach);else if(r.isObject3D&&n.isObject3D){r.parent=n,r.dispatchEvent({type:"added"}),n.dispatchEvent({type:"childadded",child:r});const f=n.children.filter(u=>u!==r),a=f.indexOf(s);n.children=[...f.slice(0,a),r,...f.slice(a)],d=!0}d||(y=n.__r3f)==null||y.objects.push(r),r.__r3f||Y(r,{}),r.__r3f.parent=n,Ce(r),K(r)}}function v(n,r,s=!1){n&&[...n].forEach(d=>w(r,d,s))}function w(n,r,s){if(r){var d,p,y;if(r.__r3f&&(r.__r3f.parent=null),(d=n.__r3f)!=null&&d.objects&&(n.__r3f.objects=n.__r3f.objects.filter(O=>O!==r)),(p=r.__r3f)!=null&&p.attach)xe(n,r,r.__r3f.attach);else if(r.isObject3D&&n.isObject3D){var f;n.remove(r),(f=r.__r3f)!=null&&f.root&&Bt(le(r),r)}const u=(y=r.__r3f)==null?void 0:y.primitive,_=!u&&(s===void 0?r.dispose!==null:s);if(!u){var a;v((a=r.__r3f)==null?void 0:a.objects,r,_),v(r.children,r,_)}if(delete r.__r3f,_&&r.dispose&&r.type!=="Scene"){const O=()=>{try{r.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?Oe.unstable_scheduleCallback(Oe.unstable_IdlePriority,O):O()}K(n)}}function g(n,r,s,d){var p;const y=(p=n.__r3f)==null?void 0:p.parent;if(!y)return;const f=o(r,s,n.__r3f.root);if(n.children){for(const a of n.children)a.__r3f&&i(f,a);n.children=n.children.filter(a=>!a.__r3f)}n.__r3f.objects.forEach(a=>i(f,a)),n.__r3f.objects=[],n.__r3f.autoRemovedBeforeAppend||w(y,n),f.parent&&(f.__r3f.autoRemovedBeforeAppend=!0),i(y,f),f.raycast&&f.__r3f.eventCount&&le(f).getState().internal.interaction.push(f),[d,d.alternate].forEach(a=>{a!==null&&(a.stateNode=f,a.ref&&(typeof a.ref=="function"?a.ref(f):a.ref.current=f))})}const l=()=>console.warn("Text is not allowed in the R3F tree! This could be stray whitespace or characters.");return{reconciler:wt({createInstance:o,removeChild:w,appendChild:i,appendInitialChild:i,insertBefore:c,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(n,r)=>{if(!r)return;const s=n.getState().scene;s.__r3f&&(s.__r3f.root=n,i(s,r))},removeChildFromContainer:(n,r)=>{r&&w(n.getState().scene,r)},insertInContainerBefore:(n,r,s)=>{if(!r||!s)return;const d=n.getState().scene;d.__r3f&&c(d,r,s)},getRootHostContext:()=>null,getChildHostContext:n=>n,finalizeInitialChildren(n){var r;return!!((r=n==null?void 0:n.__r3f)!=null?r:{}).handlers},prepareUpdate(n,r,s,d){var p;if(((p=n==null?void 0:n.__r3f)!=null?p:{}).primitive&&d.object&&d.object!==n)return[!0];{const{args:f=[],children:a,...u}=d,{args:_=[],children:O,...P}=s;if(!Array.isArray(f))throw new Error("R3F: the args prop must be an array!");if(f.some((R,k)=>R!==_[k]))return[!0];const C=Ue(n,u,P,!0);return C.changes.length?[!1,C]:null}},commitUpdate(n,[r,s],d,p,y,f){r?g(n,d,y,f):me(n,s)},commitMount(n,r,s,d){var p;const y=(p=n.__r3f)!=null?p:{};n.raycast&&y.handlers&&y.eventCount&&le(n).getState().internal.interaction.push(n)},getPublicInstance:n=>n,prepareForCommit:()=>null,preparePortalMount:n=>Y(n.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(n){var r;const{attach:s,parent:d}=(r=n.__r3f)!=null?r:{};s&&d&&xe(d,n,s),n.isObject3D&&(n.visible=!1),K(n)},unhideInstance(n,r){var s;const{attach:d,parent:p}=(s=n.__r3f)!=null?s:{};d&&p&&ve(p,n,d),(n.isObject3D&&r.visible==null||r.visible)&&(n.visible=!0),K(n)},createTextInstance:l,hideTextInstance:l,unhideTextInstance:l,getCurrentEventPriority:()=>t?t():J.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&D.fun(performance.now)?performance.now:D.fun(Date.now)?Date.now:()=>0,scheduleTimeout:D.fun(setTimeout)?setTimeout:void 0,cancelTimeout:D.fun(clearTimeout)?clearTimeout:void 0}),applyProps:me}}var je,Re;const pe=e=>"colorSpace"in e||"outputColorSpace"in e,ze=()=>{var e;return(e=Pe.ColorManagement)!=null?e:null},Be=e=>e&&e.isOrthographicCamera,Tt=e=>e&&e.hasOwnProperty("current"),ne=typeof window<"u"&&((je=window.document)!=null&&je.createElement||((Re=window.navigator)==null?void 0:Re.product)==="ReactNative")?I.useLayoutEffect:I.useEffect;function He(e){const t=I.useRef(e);return ne(()=>void(t.current=e),[e]),t}function xt({set:e}){return ne(()=>(e(new Promise(()=>null)),()=>e(!1)),[e]),null}class Ne extends I.Component{constructor(...t){super(...t),this.state={error:!1}}componentDidCatch(t){this.props.set(t)}render(){return this.state.error?null:this.props.children}}Ne.getDerivedStateFromError=()=>({error:!0});const Ge="__default",ke=new Map,Lt=e=>e&&!!e.memoized&&!!e.changes;function qe(e){var t;const o=typeof window<"u"?(t=window.devicePixelRatio)!=null?t:2:1;return Array.isArray(e)?Math.min(Math.max(e[0],o),e[1]):e}const Z=e=>{var t;return(t=e.__r3f)==null?void 0:t.root.getState()};function le(e){let t=e.__r3f.root;for(;t.getState().previousRoot;)t=t.getState().previousRoot;return t}const D={obj:e=>e===Object(e)&&!D.arr(e)&&typeof e!="function",fun:e=>typeof e=="function",str:e=>typeof e=="string",num:e=>typeof e=="number",boo:e=>typeof e=="boolean",und:e=>e===void 0,arr:e=>Array.isArray(e),equ(e,t,{arrays:o="shallow",objects:i="reference",strict:c=!0}={}){if(typeof e!=typeof t||!!e!=!!t)return!1;if(D.str(e)||D.num(e)||D.boo(e))return e===t;const v=D.obj(e);if(v&&i==="reference")return e===t;const w=D.arr(e);if(w&&o==="reference")return e===t;if((w||v)&&e===t)return!0;let g;for(g in e)if(!(g in t))return!1;if(v&&o==="shallow"&&i==="shallow"){for(g in c?t:e)if(!D.equ(e[g],t[g],{strict:c,objects:"reference"}))return!1}else for(g in c?t:e)if(e[g]!==t[g])return!1;if(D.und(g)){if(w&&e.length===0&&t.length===0||v&&Object.keys(e).length===0&&Object.keys(t).length===0)return!0;if(e!==t)return!1}return!0}};function At(e){const t={nodes:{},materials:{}};return e&&e.traverse(o=>{o.name&&(t.nodes[o.name]=o),o.material&&!t.materials[o.material.name]&&(t.materials[o.material.name]=o.material)}),t}function Dt(e){e.dispose&&e.type!=="Scene"&&e.dispose();for(const t in e)t.dispose==null||t.dispose(),delete e[t]}function Y(e,t){const o=e;return o.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...t},e}function we(e,t){let o=e;if(t.includes("-")){const i=t.split("-"),c=i.pop();return o=i.reduce((v,w)=>v[w],e),{target:o,key:c}}else return{target:o,key:t}}const Te=/-\d+$/;function ve(e,t,o){if(D.str(o)){if(Te.test(o)){const v=o.replace(Te,""),{target:w,key:g}=we(e,v);Array.isArray(w[g])||(w[g]=[])}const{target:i,key:c}=we(e,o);t.__r3f.previousAttach=i[c],i[c]=t}else t.__r3f.previousAttach=o(e,t)}function xe(e,t,o){var i,c;if(D.str(o)){const{target:v,key:w}=we(e,o),g=t.__r3f.previousAttach;g===void 0?delete v[w]:v[w]=g}else(i=t.__r3f)==null||i.previousAttach==null||i.previousAttach(e,t);(c=t.__r3f)==null||delete c.previousAttach}function Ue(e,{children:t,key:o,ref:i,...c},{children:v,key:w,ref:g,...l}={},m=!1){const n=e.__r3f,r=Object.entries(c),s=[];if(m){const p=Object.keys(l);for(let y=0;y<p.length;y++)c.hasOwnProperty(p[y])||r.unshift([p[y],Ge+"remove"])}r.forEach(([p,y])=>{var f;if((f=e.__r3f)!=null&&f.primitive&&p==="object"||D.equ(y,l[p]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(p))return s.push([p,y,!0,[]]);let a=[];p.includes("-")&&(a=p.split("-")),s.push([p,y,!1,a]);for(const u in c){const _=c[u];u.startsWith(`${p}-`)&&s.push([u,_,!1,u.split("-")])}});const d={...c};return n!=null&&n.memoizedProps&&n!=null&&n.memoizedProps.args&&(d.args=n.memoizedProps.args),n!=null&&n.memoizedProps&&n!=null&&n.memoizedProps.attach&&(d.attach=n.memoizedProps.attach),{memoized:d,changes:s}}const It=typeof process<"u"&&!1;function me(e,t){var o;const i=e.__r3f,c=i==null?void 0:i.root,v=c==null||c.getState==null?void 0:c.getState(),{memoized:w,changes:g}=Lt(t)?t:Ue(e,t),l=i==null?void 0:i.eventCount;e.__r3f&&(e.__r3f.memoizedProps=w);for(let n=0;n<g.length;n++){let[r,s,d,p]=g[n];if(pe(e)){const u="srgb",_="srgb-linear";r==="encoding"?(r="colorSpace",s=s===3001?u:_):r==="outputEncoding"&&(r="outputColorSpace",s=s===3001?u:_)}let y=e,f=y[r];if(p.length&&(f=p.reduce((a,u)=>a[u],e),!(f&&f.set))){const[a,...u]=p.reverse();y=u.reverse().reduce((_,O)=>_[O],e),r=a}if(s===Ge+"remove")if(y.constructor){let a=ke.get(y.constructor);a||(a=new y.constructor,ke.set(y.constructor,a)),s=a[r]}else s=0;if(d&&i)s?i.handlers[r]=s:delete i.handlers[r],i.eventCount=Object.keys(i.handlers).length;else if(f&&f.set&&(f.copy||f instanceof ue)){if(Array.isArray(s))f.fromArray?f.fromArray(s):f.set(...s);else if(f.copy&&s&&s.constructor&&(It?f.constructor.name===s.constructor.name:f.constructor===s.constructor))f.copy(s);else if(s!==void 0){const a=f instanceof ot;!a&&f.setScalar?f.setScalar(s):f instanceof ue&&s instanceof ue?f.mask=s.mask:f.set(s),!ze()&&v&&!v.linear&&a&&f.convertSRGBToLinear()}}else if(y[r]=s,y[r]instanceof Ze&&y[r].format===et&&y[r].type===tt&&v){const a=y[r];pe(a)&&pe(v.gl)?a.colorSpace=v.gl.outputColorSpace:a.encoding=v.gl.outputEncoding}K(e)}if(i&&i.parent&&e.raycast&&l!==i.eventCount){const n=le(e).getState().internal,r=n.interaction.indexOf(e);r>-1&&n.interaction.splice(r,1),i.eventCount&&n.interaction.push(e)}return!(g.length===1&&g[0][0]==="onUpdate")&&g.length&&(o=e.__r3f)!=null&&o.parent&&Ce(e),e}function K(e){var t,o;const i=(t=e.__r3f)==null||(o=t.root)==null||o.getState==null?void 0:o.getState();i&&i.internal.frames===0&&i.invalidate()}function Ce(e){e.onUpdate==null||e.onUpdate(e)}function Ft(e,t){e.manual||(Be(e)?(e.left=t.width/-2,e.right=t.width/2,e.top=t.height/2,e.bottom=t.height/-2):e.aspect=t.width/t.height,e.updateProjectionMatrix(),e.updateMatrixWorld())}function ie(e){return(e.eventObject||e.object).uuid+"/"+e.index+e.instanceId}function zt(){var e;const t=typeof self<"u"&&self||typeof window<"u"&&window;if(!t)return J.DefaultEventPriority;switch((e=t.event)==null?void 0:e.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return J.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return J.ContinuousEventPriority;default:return J.DefaultEventPriority}}function We(e,t,o,i){const c=o.get(t);c&&(o.delete(t),o.size===0&&(e.delete(i),c.target.releasePointerCapture(i)))}function Bt(e,t){const{internal:o}=e.getState();o.interaction=o.interaction.filter(i=>i!==t),o.initialHits=o.initialHits.filter(i=>i!==t),o.hovered.forEach((i,c)=>{(i.eventObject===t||i.object===t)&&o.hovered.delete(c)}),o.capturedMap.forEach((i,c)=>{We(o.capturedMap,t,i,c)})}function Ht(e){function t(l){const{internal:m}=e.getState(),n=l.offsetX-m.initialClick[0],r=l.offsetY-m.initialClick[1];return Math.round(Math.sqrt(n*n+r*r))}function o(l){return l.filter(m=>["Move","Over","Enter","Out","Leave"].some(n=>{var r;return(r=m.__r3f)==null?void 0:r.handlers["onPointer"+n]}))}function i(l,m){const n=e.getState(),r=new Set,s=[],d=m?m(n.internal.interaction):n.internal.interaction;for(let a=0;a<d.length;a++){const u=Z(d[a]);u&&(u.raycaster.camera=void 0)}n.previousRoot||n.events.compute==null||n.events.compute(l,n);function p(a){const u=Z(a);if(!u||!u.events.enabled||u.raycaster.camera===null)return[];if(u.raycaster.camera===void 0){var _;u.events.compute==null||u.events.compute(l,u,(_=u.previousRoot)==null?void 0:_.getState()),u.raycaster.camera===void 0&&(u.raycaster.camera=null)}return u.raycaster.camera?u.raycaster.intersectObject(a,!0):[]}let y=d.flatMap(p).sort((a,u)=>{const _=Z(a.object),O=Z(u.object);return!_||!O?a.distance-u.distance:O.events.priority-_.events.priority||a.distance-u.distance}).filter(a=>{const u=ie(a);return r.has(u)?!1:(r.add(u),!0)});n.events.filter&&(y=n.events.filter(y,n));for(const a of y){let u=a.object;for(;u;){var f;(f=u.__r3f)!=null&&f.eventCount&&s.push({...a,eventObject:u}),u=u.parent}}if("pointerId"in l&&n.internal.capturedMap.has(l.pointerId))for(let a of n.internal.capturedMap.get(l.pointerId).values())r.has(ie(a.intersection))||s.push(a.intersection);return s}function c(l,m,n,r){const s=e.getState();if(l.length){const d={stopped:!1};for(const p of l){const y=Z(p.object)||s,{raycaster:f,pointer:a,camera:u,internal:_}=y,O=new te(a.x,a.y,0).unproject(u),P=x=>{var E,T;return(E=(T=_.capturedMap.get(x))==null?void 0:T.has(p.eventObject))!=null?E:!1},C=x=>{const E={intersection:p,target:m.target};_.capturedMap.has(x)?_.capturedMap.get(x).set(p.eventObject,E):_.capturedMap.set(x,new Map([[p.eventObject,E]])),m.target.setPointerCapture(x)},R=x=>{const E=_.capturedMap.get(x);E&&We(_.capturedMap,p.eventObject,E,x)};let k={};for(let x in m){let E=m[x];typeof E!="function"&&(k[x]=E)}let j={...p,...k,pointer:a,intersections:l,stopped:d.stopped,delta:n,unprojectedPoint:O,ray:f.ray,camera:u,stopPropagation(){const x="pointerId"in m&&_.capturedMap.get(m.pointerId);if((!x||x.has(p.eventObject))&&(j.stopped=d.stopped=!0,_.hovered.size&&Array.from(_.hovered.values()).find(E=>E.eventObject===p.eventObject))){const E=l.slice(0,l.indexOf(p));v([...E,p])}},target:{hasPointerCapture:P,setPointerCapture:C,releasePointerCapture:R},currentTarget:{hasPointerCapture:P,setPointerCapture:C,releasePointerCapture:R},nativeEvent:m};if(r(j),d.stopped===!0)break}}return l}function v(l){const{internal:m}=e.getState();for(const n of m.hovered.values())if(!l.length||!l.find(r=>r.object===n.object&&r.index===n.index&&r.instanceId===n.instanceId)){const s=n.eventObject.__r3f,d=s==null?void 0:s.handlers;if(m.hovered.delete(ie(n)),s!=null&&s.eventCount){const p={...n,intersections:l};d.onPointerOut==null||d.onPointerOut(p),d.onPointerLeave==null||d.onPointerLeave(p)}}}function w(l,m){for(let n=0;n<m.length;n++){const r=m[n].__r3f;r==null||r.handlers.onPointerMissed==null||r.handlers.onPointerMissed(l)}}function g(l){switch(l){case"onPointerLeave":case"onPointerCancel":return()=>v([]);case"onLostPointerCapture":return m=>{const{internal:n}=e.getState();"pointerId"in m&&n.capturedMap.has(m.pointerId)&&requestAnimationFrame(()=>{n.capturedMap.has(m.pointerId)&&(n.capturedMap.delete(m.pointerId),v([]))})}}return function(n){const{onPointerMissed:r,internal:s}=e.getState();s.lastEvent.current=n;const d=l==="onPointerMove",p=l==="onClick"||l==="onContextMenu"||l==="onDoubleClick",f=i(n,d?o:void 0),a=p?t(n):0;l==="onPointerDown"&&(s.initialClick=[n.offsetX,n.offsetY],s.initialHits=f.map(_=>_.eventObject)),p&&!f.length&&a<=2&&(w(n,s.interaction),r&&r(n)),d&&v(f);function u(_){const O=_.eventObject,P=O.__r3f,C=P==null?void 0:P.handlers;if(P!=null&&P.eventCount)if(d){if(C.onPointerOver||C.onPointerEnter||C.onPointerOut||C.onPointerLeave){const R=ie(_),k=s.hovered.get(R);k?k.stopped&&_.stopPropagation():(s.hovered.set(R,_),C.onPointerOver==null||C.onPointerOver(_),C.onPointerEnter==null||C.onPointerEnter(_))}C.onPointerMove==null||C.onPointerMove(_)}else{const R=C[l];R?(!p||s.initialHits.includes(O))&&(w(n,s.interaction.filter(k=>!s.initialHits.includes(k))),R(_)):p&&s.initialHits.includes(O)&&w(n,s.interaction.filter(k=>!s.initialHits.includes(k)))}}c(f,n,a,u)}}return{handlePointer:g}}const Ve=e=>!!(e!=null&&e.render),$e=I.createContext(null),Nt=(e,t)=>{const o=St((g,l)=>{const m=new te,n=new te,r=new te;function s(a=l().camera,u=n,_=l().size){const{width:O,height:P,top:C,left:R}=_,k=O/P;u instanceof te?r.copy(u):r.set(...u);const j=a.getWorldPosition(m).distanceTo(r);if(Be(a))return{width:O/a.zoom,height:P/a.zoom,top:C,left:R,factor:1,distance:j,aspect:k};{const x=a.fov*Math.PI/180,E=2*Math.tan(x/2)*j,T=E*(O/P);return{width:T,height:E,top:C,left:R,factor:O/T,distance:j,aspect:k}}}let d;const p=a=>g(u=>({performance:{...u.performance,current:a}})),y=new mt;return{set:g,get:l,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(a=1)=>e(l(),a),advance:(a,u)=>t(a,u,l()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new ht,pointer:y,mouse:y,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const a=l();d&&clearTimeout(d),a.performance.current!==a.performance.min&&p(a.performance.min),d=setTimeout(()=>p(l().performance.max),a.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:s},setEvents:a=>g(u=>({...u,events:{...u.events,...a}})),setSize:(a,u,_,O,P)=>{const C=l().camera,R={width:a,height:u,top:O||0,left:P||0,updateStyle:_};g(k=>({size:R,viewport:{...k.viewport,...s(C,n,R)}}))},setDpr:a=>g(u=>{const _=qe(a);return{viewport:{...u.viewport,dpr:_,initialDpr:u.viewport.initialDpr||_}}}),setFrameloop:(a="always")=>{const u=l().clock;u.stop(),u.elapsedTime=0,a!=="never"&&(u.start(),u.elapsedTime=0),g(()=>({frameloop:a}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:I.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(a,u,_)=>{const O=l().internal;return O.priority=O.priority+(u>0?1:0),O.subscribers.push({ref:a,priority:u,store:_}),O.subscribers=O.subscribers.sort((P,C)=>P.priority-C.priority),()=>{const P=l().internal;P!=null&&P.subscribers&&(P.priority=P.priority-(u>0?1:0),P.subscribers=P.subscribers.filter(C=>C.ref!==a))}}}}}),i=o.getState();let c=i.size,v=i.viewport.dpr,w=i.camera;return o.subscribe(()=>{const{camera:g,size:l,viewport:m,gl:n,set:r}=o.getState();if(l.width!==c.width||l.height!==c.height||m.dpr!==v){var s;c=l,v=m.dpr,Ft(g,l),n.setPixelRatio(m.dpr);const d=(s=l.updateStyle)!=null?s:typeof HTMLCanvasElement<"u"&&n.domElement instanceof HTMLCanvasElement;n.setSize(l.width,l.height,d)}g!==w&&(w=g,r(d=>({viewport:{...d.viewport,...d.viewport.getCurrentViewport(g)}})))}),o.subscribe(g=>e(g)),o};let se,Gt=new Set,qt=new Set,Ut=new Set;function he(e,t){if(e.size)for(const{callback:o}of e.values())o(t)}function ee(e,t){switch(e){case"before":return he(Gt,t);case"after":return he(qt,t);case"tail":return he(Ut,t)}}let ge,ye;function _e(e,t,o){let i=t.clock.getDelta();for(t.frameloop==="never"&&typeof e=="number"&&(i=e-t.clock.elapsedTime,t.clock.oldTime=t.clock.elapsedTime,t.clock.elapsedTime=e),ge=t.internal.subscribers,se=0;se<ge.length;se++)ye=ge[se],ye.ref.current(ye.store.getState(),i,o);return!t.internal.priority&&t.gl.render&&t.gl.render(t.scene,t.camera),t.internal.frames=Math.max(0,t.internal.frames-1),t.frameloop==="always"?1:t.internal.frames}function Wt(e){let t=!1,o=!1,i,c,v;function w(m){c=requestAnimationFrame(w),t=!0,i=0,ee("before",m),o=!0;for(const r of e.values()){var n;v=r.store.getState(),v.internal.active&&(v.frameloop==="always"||v.internal.frames>0)&&!((n=v.gl.xr)!=null&&n.isPresenting)&&(i+=_e(m,v))}if(o=!1,ee("after",m),i===0)return ee("tail",m),t=!1,cancelAnimationFrame(c)}function g(m,n=1){var r;if(!m)return e.forEach(s=>g(s.store.getState(),n));(r=m.gl.xr)!=null&&r.isPresenting||!m.internal.active||m.frameloop==="never"||(n>1?m.internal.frames=Math.min(60,m.internal.frames+n):o?m.internal.frames=2:m.internal.frames=1,t||(t=!0,requestAnimationFrame(w)))}function l(m,n=!0,r,s){if(n&&ee("before",m),r)_e(m,r,s);else for(const d of e.values())_e(m,d.store.getState());n&&ee("after",m)}return{loop:w,invalidate:g,advance:l}}function Xe(){const e=I.useContext($e);if(!e)throw new Error("R3F: Hooks can only be used within the Canvas component!");return e}function U(e=o=>o,t){return Xe()(e,t)}function Vt(e,t=0){const o=Xe(),i=o.getState().internal.subscribe,c=He(e);return ne(()=>i(c,t,o),[t,i,o]),null}const Le=new WeakMap;function Ye(e,t){return function(o,...i){let c=Le.get(o);return c||(c=new o,Le.set(o,c)),e&&e(c),Promise.all(i.map(v=>new Promise((w,g)=>c.load(v,l=>{l.scene&&Object.assign(l,At(l.scene)),w(l)},t,l=>g(new Error(`Could not load ${v}: ${l==null?void 0:l.message}`))))))}}function re(e,t,o,i){const c=Array.isArray(t)?t:[t],v=Mt(Ye(o,i),[e,...c],{equal:D.equ});return Array.isArray(t)?v:v[0]}re.preload=function(e,t,o){const i=Array.isArray(t)?t:[t];return Ot(Ye(o),[e,...i])};re.clear=function(e,t){const o=Array.isArray(t)?t:[t];return jt([e,...o])};const Q=new Map,{invalidate:Ae,advance:De}=Wt(Q),{reconciler:ce,applyProps:$}=kt(Q,zt),X={objects:"shallow",strict:!1},$t=(e,t)=>{const o=typeof e=="function"?e(t):e;return Ve(o)?o:new ut({powerPreference:"high-performance",canvas:t,antialias:!0,alpha:!0,...e})};function Xt(e,t){const o=typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement;if(t){const{width:i,height:c,top:v,left:w,updateStyle:g=o}=t;return{width:i,height:c,top:v,left:w,updateStyle:g}}else if(typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement&&e.parentElement){const{width:i,height:c,top:v,left:w}=e.parentElement.getBoundingClientRect();return{width:i,height:c,top:v,left:w,updateStyle:o}}else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)return{width:e.width,height:e.height,top:0,left:0,updateStyle:o};return{width:0,height:0,top:0,left:0}}function Yt(e){const t=Q.get(e),o=t==null?void 0:t.fiber,i=t==null?void 0:t.store;t&&console.warn("R3F.createRoot should only be called once!");const c=typeof reportError=="function"?reportError:console.error,v=i||Nt(Ae,De),w=o||ce.createContainer(v,J.ConcurrentRoot,null,!1,null,"",c,null);t||Q.set(e,{fiber:w,store:v});let g,l=!1,m;return{configure(n={}){let{gl:r,size:s,scene:d,events:p,onCreated:y,shadows:f=!1,linear:a=!1,flat:u=!1,legacy:_=!1,orthographic:O=!1,frameloop:P="always",dpr:C=[1,2],performance:R,raycaster:k,camera:j,onPointerMissed:x}=n,E=v.getState(),T=E.gl;E.gl||E.set({gl:T=$t(r,e)});let F=E.raycaster;F||E.set({raycaster:F=new it});const{params:N,...V}=k||{};if(D.equ(V,F,X)||$(F,{...V}),D.equ(N,F.params,X)||$(F,{params:{...F.params,...N}}),!E.camera||E.camera===m&&!D.equ(m,j,X)){m=j;const b=j instanceof ft,M=b?j:O?new st(0,0,0,0,.1,1e3):new at(75,0,.1,1e3);b||(M.position.z=5,j&&($(M,j),("aspect"in j||"left"in j||"right"in j||"bottom"in j||"top"in j)&&(M.manual=!0,M.updateProjectionMatrix())),!E.camera&&!(j!=null&&j.rotation)&&M.lookAt(0,0,0)),E.set({camera:M}),F.camera=M}if(!E.scene){let b;d instanceof Me?b=d:(b=new Me,d&&$(b,d)),E.set({scene:Y(b)})}if(!E.xr){var H;const b=(A,z)=>{const q=v.getState();q.frameloop!=="never"&&De(A,!0,q,z)},M=()=>{const A=v.getState();A.gl.xr.enabled=A.gl.xr.isPresenting,A.gl.xr.setAnimationLoop(A.gl.xr.isPresenting?b:null),A.gl.xr.isPresenting||Ae(A)},L={connect(){const A=v.getState().gl;A.xr.addEventListener("sessionstart",M),A.xr.addEventListener("sessionend",M)},disconnect(){const A=v.getState().gl;A.xr.removeEventListener("sessionstart",M),A.xr.removeEventListener("sessionend",M)}};typeof((H=T.xr)==null?void 0:H.addEventListener)=="function"&&L.connect(),E.set({xr:L})}if(T.shadowMap){const b=T.shadowMap.enabled,M=T.shadowMap.type;if(T.shadowMap.enabled=!!f,D.boo(f))T.shadowMap.type=fe;else if(D.str(f)){var G;const L={basic:dt,percentage:pt,soft:fe,variance:vt};T.shadowMap.type=(G=L[f])!=null?G:fe}else D.obj(f)&&Object.assign(T.shadowMap,f);(b!==T.shadowMap.enabled||M!==T.shadowMap.type)&&(T.shadowMap.needsUpdate=!0)}const h=ze();h&&("enabled"in h?h.enabled=!_:"legacyMode"in h&&(h.legacyMode=_)),l||$(T,{outputEncoding:a?3e3:3001,toneMapping:u?lt:ct}),E.legacy!==_&&E.set(()=>({legacy:_})),E.linear!==a&&E.set(()=>({linear:a})),E.flat!==u&&E.set(()=>({flat:u})),r&&!D.fun(r)&&!Ve(r)&&!D.equ(r,T,X)&&$(T,r),p&&!E.events.handlers&&E.set({events:p(v)});const S=Xt(e,s);return D.equ(S,E.size,X)||E.setSize(S.width,S.height,S.updateStyle,S.top,S.left),C&&E.viewport.dpr!==qe(C)&&E.setDpr(C),E.frameloop!==P&&E.setFrameloop(P),E.onPointerMissed||E.set({onPointerMissed:x}),R&&!D.equ(R,E.performance,X)&&E.set(b=>({performance:{...b.performance,...R}})),g=y,l=!0,this},render(n){return l||this.configure(),ce.updateContainer(B.jsx(Kt,{store:v,children:n,onCreated:g,rootElement:e}),w,null,()=>{}),v},unmount(){Ke(e)}}}function Kt({store:e,children:t,onCreated:o,rootElement:i}){return ne(()=>{const c=e.getState();c.set(v=>({internal:{...v.internal,active:!0}})),o&&o(c),e.getState().events.connected||c.events.connect==null||c.events.connect(i)},[]),B.jsx($e.Provider,{value:e,children:t})}function Ke(e,t){const o=Q.get(e),i=o==null?void 0:o.fiber;if(i){const c=o==null?void 0:o.store.getState();c&&(c.internal.active=!1),ce.updateContainer(null,i,null,()=>{c&&setTimeout(()=>{try{var v,w,g,l;c.events.disconnect==null||c.events.disconnect(),(v=c.gl)==null||(w=v.renderLists)==null||w.dispose==null||w.dispose(),(g=c.gl)==null||g.forceContextLoss==null||g.forceContextLoss(),(l=c.gl)!=null&&l.xr&&c.xr.disconnect(),Dt(c),Q.delete(e)}catch{}},500)})}}ce.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:I.version});const be={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function Jt(e){const{handlePointer:t}=Ht(e);return{priority:1,enabled:!0,compute(o,i,c){i.pointer.set(o.offsetX/i.size.width*2-1,-(o.offsetY/i.size.height)*2+1),i.raycaster.setFromCamera(i.pointer,i.camera)},connected:void 0,handlers:Object.keys(be).reduce((o,i)=>({...o,[i]:t(i)}),{}),update:()=>{var o;const{events:i,internal:c}=e.getState();(o=c.lastEvent)!=null&&o.current&&i.handlers&&i.handlers.onPointerMove(c.lastEvent.current)},connect:o=>{var i;const{set:c,events:v}=e.getState();v.disconnect==null||v.disconnect(),c(w=>({events:{...w.events,connected:o}})),Object.entries((i=v.handlers)!=null?i:[]).forEach(([w,g])=>{const[l,m]=be[w];o.addEventListener(l,g,{passive:m})})},disconnect:()=>{const{set:o,events:i}=e.getState();if(i.connected){var c;Object.entries((c=i.handlers)!=null?c:[]).forEach(([v,w])=>{if(i&&i.connected instanceof HTMLElement){const[g]=be[v];i.connected.removeEventListener(g,w)}}),o(v=>({events:{...v.events,connected:void 0}}))}}}}const Qt=I.forwardRef(function({children:t,fallback:o,resize:i,style:c,gl:v,events:w=Jt,eventSource:g,eventPrefix:l,shadows:m,linear:n,flat:r,legacy:s,orthographic:d,frameloop:p,dpr:y,performance:f,raycaster:a,camera:u,scene:_,onPointerMissed:O,onCreated:P,...C},R){I.useMemo(()=>Rt(gt),[]);const k=bt(),[j,x]=yt({scroll:!0,debounce:{scroll:50,resize:0},...i}),E=I.useRef(null),T=I.useRef(null);I.useImperativeHandle(R,()=>E.current);const F=He(O),[N,V]=I.useState(!1),[H,G]=I.useState(!1);if(N)throw N;if(H)throw H;const h=I.useRef(null);ne(()=>{const b=E.current;x.width>0&&x.height>0&&b&&(h.current||(h.current=Yt(b)),h.current.configure({gl:v,events:w,shadows:m,linear:n,flat:r,legacy:s,orthographic:d,frameloop:p,dpr:y,performance:f,raycaster:a,camera:u,scene:_,size:x,onPointerMissed:(...M)=>F.current==null?void 0:F.current(...M),onCreated:M=>{M.events.connect==null||M.events.connect(g?Tt(g)?g.current:g:T.current),l&&M.setEvents({compute:(L,A)=>{const z=L[l+"X"],q=L[l+"Y"];A.pointer.set(z/A.size.width*2-1,-(q/A.size.height)*2+1),A.raycaster.setFromCamera(A.pointer,A.camera)}}),P==null||P(M)}}),h.current.render(B.jsx(k,{children:B.jsx(Ne,{set:G,children:B.jsx(I.Suspense,{fallback:B.jsx(xt,{set:V}),children:t})})})))}),I.useEffect(()=>{const b=E.current;if(b)return()=>Ke(b)},[]);const S=g?"none":"auto";return B.jsx("div",{ref:T,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:S,...c},...C,children:B.jsx("div",{ref:j,style:{width:"100%",height:"100%"},children:B.jsx("canvas",{ref:E,style:{display:"block"},children:o})})})}),fn=I.forwardRef(function(t,o){return B.jsx(_t,{children:B.jsx(Qt,{...t,ref:o})})});let ae=null,Je="https://www.gstatic.com/draco/versioned/decoders/1.5.5/";function Qe(e,t,o){return i=>{o&&o(i),e&&(ae||(ae=new Ct),ae.setDecoderPath(typeof e=="string"?e:Je),i.setDRACOLoader(ae)),t&&i.setMeshoptDecoder(typeof de=="function"?de():de)}}function Se(e,t=!0,o=!0,i){return re(Ee,e,Qe(t,o,i))}Se.preload=(e,t=!0,o=!0,i)=>re.preload(Ee,e,Qe(t,o,i));Se.clear=e=>re.clear(Ee,e);Se.setDecoderPath=e=>{Je=e};const dn=I.forwardRef(({makeDefault:e,camera:t,regress:o,domElement:i,enableDamping:c=!0,keyEvents:v=!1,onChange:w,onStart:g,onEnd:l,...m},n)=>{const r=U(C=>C.invalidate),s=U(C=>C.camera),d=U(C=>C.gl),p=U(C=>C.events),y=U(C=>C.setEvents),f=U(C=>C.set),a=U(C=>C.get),u=U(C=>C.performance),_=t||s,O=i||p.connected||d.domElement,P=I.useMemo(()=>new Et(_),[_]);return Vt(()=>{P.enabled&&P.update()},-1),I.useEffect(()=>(v&&P.connect(v===!0?O:v),P.connect(O),()=>void P.dispose()),[v,O,o,P,r]),I.useEffect(()=>{const C=j=>{r(),o&&u.regress(),w&&w(j)},R=j=>{g&&g(j)},k=j=>{l&&l(j)};return P.addEventListener("change",C),P.addEventListener("start",R),P.addEventListener("end",k),()=>{P.removeEventListener("start",R),P.removeEventListener("end",k),P.removeEventListener("change",C)}},[w,g,l,P,r,y]),I.useEffect(()=>{if(e){const C=a().controls;return f({controls:P}),()=>f({controls:C})}},[e,P]),I.createElement("primitive",Pt({ref:n,object:P,enableDamping:c},m))});export{fn as C,dn as O,un as g,Se as u};
