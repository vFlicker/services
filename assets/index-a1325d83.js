function Jh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Id(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dd={exports:{}},Bi={},Fd={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po=Symbol.for("react.element"),eg=Symbol.for("react.portal"),tg=Symbol.for("react.fragment"),ng=Symbol.for("react.strict_mode"),rg=Symbol.for("react.profiler"),og=Symbol.for("react.provider"),ig=Symbol.for("react.context"),lg=Symbol.for("react.forward_ref"),ag=Symbol.for("react.suspense"),sg=Symbol.for("react.memo"),ug=Symbol.for("react.lazy"),Uu=Symbol.iterator;function cg(e){return e===null||typeof e!="object"?null:(e=Uu&&e[Uu]||e["@@iterator"],typeof e=="function"?e:null)}var Bd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$d=Object.assign,Ud={};function ar(e,t,n){this.props=e,this.context=t,this.refs=Ud,this.updater=n||Bd}ar.prototype.isReactComponent={};ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wd(){}Wd.prototype=ar.prototype;function _s(e,t,n){this.props=e,this.context=t,this.refs=Ud,this.updater=n||Bd}var Ls=_s.prototype=new Wd;Ls.constructor=_s;$d(Ls,ar.prototype);Ls.isPureReactComponent=!0;var Wu=Array.isArray,Hd=Object.prototype.hasOwnProperty,Ns={current:null},Vd={key:!0,ref:!0,__self:!0,__source:!0};function Qd(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Hd.call(t,r)&&!Vd.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:po,type:e,key:i,ref:l,props:o,_owner:Ns.current}}function dg(e,t){return{$$typeof:po,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function js(e){return typeof e=="object"&&e!==null&&e.$$typeof===po}function fg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hu=/\/+/g;function Ol(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fg(""+e.key):t.toString(36)}function Ho(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case po:case eg:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ol(l,0):r,Wu(o)?(n="",e!=null&&(n=e.replace(Hu,"$&/")+"/"),Ho(o,t,n,"",function(u){return u})):o!=null&&(js(o)&&(o=dg(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Hu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Wu(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Ol(i,a);l+=Ho(i,t,n,s,o)}else if(s=cg(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Ol(i,a++),l+=Ho(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function wo(e,t,n){if(e==null)return e;var r=[],o=0;return Ho(e,r,"","",function(i){return t.call(n,i,o++)}),r}function pg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Vo={transition:null},hg={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Vo,ReactCurrentOwner:Ns};F.Children={map:wo,forEach:function(e,t,n){wo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wo(e,function(){t++}),t},toArray:function(e){return wo(e,function(t){return t})||[]},only:function(e){if(!js(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=ar;F.Fragment=tg;F.Profiler=rg;F.PureComponent=_s;F.StrictMode=ng;F.Suspense=ag;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hg;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$d({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ns.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Hd.call(t,s)&&!Vd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:po,type:e.type,key:o,ref:i,props:r,_owner:l}};F.createContext=function(e){return e={$$typeof:ig,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:og,_context:e},e.Consumer=e};F.createElement=Qd;F.createFactory=function(e){var t=Qd.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:lg,render:e}};F.isValidElement=js;F.lazy=function(e){return{$$typeof:ug,_payload:{_status:-1,_result:e},_init:pg}};F.memo=function(e,t){return{$$typeof:sg,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Vo.transition;Vo.transition={};try{e()}finally{Vo.transition=t}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(e,t){return Se.current.useCallback(e,t)};F.useContext=function(e){return Se.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};F.useEffect=function(e,t){return Se.current.useEffect(e,t)};F.useId=function(){return Se.current.useId()};F.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Se.current.useMemo(e,t)};F.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};F.useRef=function(e){return Se.current.useRef(e)};F.useState=function(e){return Se.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return Se.current.useTransition()};F.version="18.2.0";Fd.exports=F;var E=Fd.exports;const D=Id(E),gg=Jh({__proto__:null,default:D},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg=E,vg=Symbol.for("react.element"),Ag=Symbol.for("react.fragment"),yg=Object.prototype.hasOwnProperty,bg=mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wg={key:!0,ref:!0,__self:!0,__source:!0};function Gd(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)yg.call(t,r)&&!wg.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:vg,type:e,key:i,ref:l,props:o,_owner:bg.current}}Bi.Fragment=Ag;Bi.jsx=Gd;Bi.jsxs=Gd;Dd.exports=Bi;var k=Dd.exports,Xd={exports:{}},De={},Kd={exports:{}},qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,R){var z=L.length;L.push(R);e:for(;0<z;){var X=z-1>>>1,oe=L[X];if(0<o(oe,R))L[X]=R,L[z]=oe,z=X;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var R=L[0],z=L.pop();if(z!==R){L[0]=z;e:for(var X=0,oe=L.length,Pn=oe>>>1;X<Pn;){var nn=2*(X+1)-1,Pl=L[nn],rn=nn+1,bo=L[rn];if(0>o(Pl,z))rn<oe&&0>o(bo,Pl)?(L[X]=bo,L[rn]=z,X=rn):(L[X]=Pl,L[nn]=z,X=nn);else if(rn<oe&&0>o(bo,z))L[X]=bo,L[rn]=z,X=rn;else break e}}return R}function o(L,R){var z=L.sortIndex-R.sortIndex;return z!==0?z:L.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],f=1,p=null,h=3,g=!1,v=!1,A=!1,b=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=L)r(u),R.sortIndex=R.expirationTime,t(s,R);else break;R=n(u)}}function y(L){if(A=!1,m(L),!v)if(n(s)!==null)v=!0,te(w);else{var R=n(u);R!==null&&fe(y,R.startTime-L)}}function w(L,R){v=!1,A&&(A=!1,c(x),x=-1),g=!0;var z=h;try{for(m(R),p=n(s);p!==null&&(!(p.expirationTime>R)||L&&!T());){var X=p.callback;if(typeof X=="function"){p.callback=null,h=p.priorityLevel;var oe=X(p.expirationTime<=R);R=e.unstable_now(),typeof oe=="function"?p.callback=oe:p===n(s)&&r(s),m(R)}else r(s);p=n(s)}if(p!==null)var Pn=!0;else{var nn=n(u);nn!==null&&fe(y,nn.startTime-R),Pn=!1}return Pn}finally{p=null,h=z,g=!1}}var S=!1,C=null,x=-1,N=5,_=-1;function T(){return!(e.unstable_now()-_<N)}function O(){if(C!==null){var L=e.unstable_now();_=L;var R=!0;try{R=C(!0,L)}finally{R?j():(S=!1,C=null)}}else S=!1}var j;if(typeof d=="function")j=function(){d(O)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Y=I.port2;I.port1.onmessage=O,j=function(){Y.postMessage(null)}}else j=function(){b(O,0)};function te(L){C=L,S||(S=!0,j())}function fe(L,R){x=b(function(){L(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,te(w))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var z=h;h=R;try{return L()}finally{h=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,R){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var z=h;h=L;try{return R()}finally{h=z}},e.unstable_scheduleCallback=function(L,R,z){var X=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?X+z:X):z=X,L){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=z+oe,L={id:f++,callback:R,priorityLevel:L,startTime:z,expirationTime:oe,sortIndex:-1},z>X?(L.sortIndex=z,t(u,L),n(s)===null&&L===n(u)&&(A?(c(x),x=-1):A=!0,fe(y,z-X))):(L.sortIndex=oe,t(s,L),v||g||(v=!0,te(w))),L},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(L){var R=h;return function(){var z=h;h=R;try{return L.apply(this,arguments)}finally{h=z}}}})(qd);Kd.exports=qd;var xg=Kd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=E,ze=xg;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zd=new Set,Wr={};function kn(e,t){Zn(e,t),Zn(e+"Capture",t)}function Zn(e,t){for(Wr[e]=t,e=0;e<t.length;e++)Zd.add(t[e])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wa=Object.prototype.hasOwnProperty,Sg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vu={},Qu={};function Eg(e){return wa.call(Qu,e)?!0:wa.call(Vu,e)?!1:Sg.test(e)?Qu[e]=!0:(Vu[e]=!0,!1)}function kg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cg(e,t,n,r){if(t===null||typeof t>"u"||kg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ms=/[\-:]([a-z])/g;function Rs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ms,Rs);ge[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ms,Rs);ge[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ms,Rs);ge[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function zs(e,t,n,r){var o=ge.hasOwnProperty(t)?ge[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cg(t,n,o,r)&&(n=null),r||o===null?Eg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=Yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xo=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),Is=Symbol.for("react.strict_mode"),xa=Symbol.for("react.profiler"),Jd=Symbol.for("react.provider"),ef=Symbol.for("react.context"),Ds=Symbol.for("react.forward_ref"),Sa=Symbol.for("react.suspense"),Ea=Symbol.for("react.suspense_list"),Fs=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),tf=Symbol.for("react.offscreen"),Gu=Symbol.iterator;function pr(e){return e===null||typeof e!="object"?null:(e=Gu&&e[Gu]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,_l;function Er(e){if(_l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_l=t&&t[1]||""}return`
`+_l+e}var Ll=!1;function Nl(e,t){if(!e||Ll)return"";Ll=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Ll=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Er(e):""}function Tg(e){switch(e.tag){case 5:return Er(e.type);case 16:return Er("Lazy");case 13:return Er("Suspense");case 19:return Er("SuspenseList");case 0:case 2:case 15:return e=Nl(e.type,!1),e;case 11:return e=Nl(e.type.render,!1),e;case 1:return e=Nl(e.type,!0),e;default:return""}}function ka(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nn:return"Fragment";case Ln:return"Portal";case xa:return"Profiler";case Is:return"StrictMode";case Sa:return"Suspense";case Ea:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ef:return(e.displayName||"Context")+".Consumer";case Jd:return(e._context.displayName||"Context")+".Provider";case Ds:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fs:return t=e.displayName||null,t!==null?t:ka(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return ka(e(t))}catch{}}return null}function Pg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ka(t);case 8:return t===Is?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Og(e){var t=nf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function So(e){e._valueTracker||(e._valueTracker=Og(e))}function rf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=nf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ca(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function of(e,t){t=t.checked,t!=null&&zs(e,"checked",t,!1)}function Ta(e,t){of(e,t);var n=Xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pa(e,t.type,Xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ku(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pa(e,t,n){(t!=="number"||oi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kr=Array.isArray;function Hn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Oa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(kr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xt(n)}}function lf(e,t){var n=Xt(t.value),r=Xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Yu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function af(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _a(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?af(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Eo,sf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Eo=Eo||document.createElement("div"),Eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_g=["Webkit","ms","Moz","O"];Object.keys(Lr).forEach(function(e){_g.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lr[t]=Lr[e]})});function uf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Lr.hasOwnProperty(e)&&Lr[e]?(""+t).trim():t+"px"}function cf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=uf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Lg=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function La(e,t){if(t){if(Lg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Na(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ja=null;function Bs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ma=null,Vn=null,Qn=null;function Zu(e){if(e=mo(e)){if(typeof Ma!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Vi(t),Ma(e.stateNode,e.type,t))}}function df(e){Vn?Qn?Qn.push(e):Qn=[e]:Vn=e}function ff(){if(Vn){var e=Vn,t=Qn;if(Qn=Vn=null,Zu(e),t)for(e=0;e<t.length;e++)Zu(t[e])}}function pf(e,t){return e(t)}function hf(){}var jl=!1;function gf(e,t,n){if(jl)return e(t,n);jl=!0;try{return pf(e,t,n)}finally{jl=!1,(Vn!==null||Qn!==null)&&(hf(),ff())}}function Vr(e,t){var n=e.stateNode;if(n===null)return null;var r=Vi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Ra=!1;if(At)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){Ra=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{Ra=!1}function Ng(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Nr=!1,ii=null,li=!1,za=null,jg={onError:function(e){Nr=!0,ii=e}};function Mg(e,t,n,r,o,i,l,a,s){Nr=!1,ii=null,Ng.apply(jg,arguments)}function Rg(e,t,n,r,o,i,l,a,s){if(Mg.apply(this,arguments),Nr){if(Nr){var u=ii;Nr=!1,ii=null}else throw Error(P(198));li||(li=!0,za=u)}}function Cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function mf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ju(e){if(Cn(e)!==e)throw Error(P(188))}function zg(e){var t=e.alternate;if(!t){if(t=Cn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ju(o),e;if(i===r)return Ju(o),t;i=i.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function vf(e){return e=zg(e),e!==null?Af(e):null}function Af(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Af(e);if(t!==null)return t;e=e.sibling}return null}var yf=ze.unstable_scheduleCallback,ec=ze.unstable_cancelCallback,Ig=ze.unstable_shouldYield,Dg=ze.unstable_requestPaint,re=ze.unstable_now,Fg=ze.unstable_getCurrentPriorityLevel,$s=ze.unstable_ImmediatePriority,bf=ze.unstable_UserBlockingPriority,ai=ze.unstable_NormalPriority,Bg=ze.unstable_LowPriority,wf=ze.unstable_IdlePriority,$i=null,st=null;function $g(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot($i,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:Hg,Ug=Math.log,Wg=Math.LN2;function Hg(e){return e>>>=0,e===0?32:31-(Ug(e)/Wg|0)|0}var ko=64,Co=4194304;function Cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function si(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Cr(a):(i&=l,i!==0&&(r=Cr(i)))}else l=n&~o,l!==0?r=Cr(l):i!==0&&(r=Cr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),o=1<<n,r|=e[n],t&=~o;return r}function Vg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-et(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=Vg(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Ia(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xf(){var e=ko;return ko<<=1,!(ko&4194240)&&(ko=64),e}function Ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ho(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function Gg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-et(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Us(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var $=0;function Sf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ef,Ws,kf,Cf,Tf,Da=!1,To=[],It=null,Dt=null,Ft=null,Qr=new Map,Gr=new Map,Pt=[],Xg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tc(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":Qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gr.delete(t.pointerId)}}function gr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=mo(t),t!==null&&Ws(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Kg(e,t,n,r,o){switch(t){case"focusin":return It=gr(It,e,t,n,r,o),!0;case"dragenter":return Dt=gr(Dt,e,t,n,r,o),!0;case"mouseover":return Ft=gr(Ft,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Qr.set(i,gr(Qr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Gr.set(i,gr(Gr.get(i)||null,e,t,n,r,o)),!0}return!1}function Pf(e){var t=dn(e.target);if(t!==null){var n=Cn(t);if(n!==null){if(t=n.tag,t===13){if(t=mf(n),t!==null){e.blockedOn=t,Tf(e.priority,function(){kf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ja=r,n.target.dispatchEvent(r),ja=null}else return t=mo(n),t!==null&&Ws(t),e.blockedOn=n,!1;t.shift()}return!0}function nc(e,t,n){Qo(e)&&n.delete(t)}function qg(){Da=!1,It!==null&&Qo(It)&&(It=null),Dt!==null&&Qo(Dt)&&(Dt=null),Ft!==null&&Qo(Ft)&&(Ft=null),Qr.forEach(nc),Gr.forEach(nc)}function mr(e,t){e.blockedOn===t&&(e.blockedOn=null,Da||(Da=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,qg)))}function Xr(e){function t(o){return mr(o,e)}if(0<To.length){mr(To[0],e);for(var n=1;n<To.length;n++){var r=To[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&mr(It,e),Dt!==null&&mr(Dt,e),Ft!==null&&mr(Ft,e),Qr.forEach(t),Gr.forEach(t),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)Pf(n),n.blockedOn===null&&Pt.shift()}var Gn=St.ReactCurrentBatchConfig,ui=!0;function Yg(e,t,n,r){var o=$,i=Gn.transition;Gn.transition=null;try{$=1,Hs(e,t,n,r)}finally{$=o,Gn.transition=i}}function Zg(e,t,n,r){var o=$,i=Gn.transition;Gn.transition=null;try{$=4,Hs(e,t,n,r)}finally{$=o,Gn.transition=i}}function Hs(e,t,n,r){if(ui){var o=Fa(e,t,n,r);if(o===null)Hl(e,t,r,ci,n),tc(e,r);else if(Kg(o,e,t,n,r))r.stopPropagation();else if(tc(e,r),t&4&&-1<Xg.indexOf(e)){for(;o!==null;){var i=mo(o);if(i!==null&&Ef(i),i=Fa(e,t,n,r),i===null&&Hl(e,t,r,ci,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Hl(e,t,r,null,n)}}var ci=null;function Fa(e,t,n,r){if(ci=null,e=Bs(r),e=dn(e),e!==null)if(t=Cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=mf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ci=e,null}function Of(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fg()){case $s:return 1;case bf:return 4;case ai:case Bg:return 16;case wf:return 536870912;default:return 16}default:return 16}}var Lt=null,Vs=null,Go=null;function _f(){if(Go)return Go;var e,t=Vs,n=t.length,r,o="value"in Lt?Lt.value:Lt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Go=o.slice(e,1<r?1-r:void 0)}function Xo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Po(){return!0}function rc(){return!1}function Fe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Po:rc,this.isPropagationStopped=rc,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),t}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qs=Fe(sr),go=ee({},sr,{view:0,detail:0}),Jg=Fe(go),Rl,zl,vr,Ui=ee({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vr&&(vr&&e.type==="mousemove"?(Rl=e.screenX-vr.screenX,zl=e.screenY-vr.screenY):zl=Rl=0,vr=e),Rl)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),oc=Fe(Ui),em=ee({},Ui,{dataTransfer:0}),tm=Fe(em),nm=ee({},go,{relatedTarget:0}),Il=Fe(nm),rm=ee({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),om=Fe(rm),im=ee({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lm=Fe(im),am=ee({},sr,{data:0}),ic=Fe(am),sm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},um={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cm[e])?!!t[e]:!1}function Gs(){return dm}var fm=ee({},go,{key:function(e){if(e.key){var t=sm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?um[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gs,charCode:function(e){return e.type==="keypress"?Xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pm=Fe(fm),hm=ee({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lc=Fe(hm),gm=ee({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gs}),mm=Fe(gm),vm=ee({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Am=Fe(vm),ym=ee({},Ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bm=Fe(ym),wm=[9,13,27,32],Xs=At&&"CompositionEvent"in window,jr=null;At&&"documentMode"in document&&(jr=document.documentMode);var xm=At&&"TextEvent"in window&&!jr,Lf=At&&(!Xs||jr&&8<jr&&11>=jr),ac=String.fromCharCode(32),sc=!1;function Nf(e,t){switch(e){case"keyup":return wm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function Sm(e,t){switch(e){case"compositionend":return jf(t);case"keypress":return t.which!==32?null:(sc=!0,ac);case"textInput":return e=t.data,e===ac&&sc?null:e;default:return null}}function Em(e,t){if(jn)return e==="compositionend"||!Xs&&Nf(e,t)?(e=_f(),Go=Vs=Lt=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lf&&t.locale!=="ko"?null:t.data;default:return null}}var km={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!km[e.type]:t==="textarea"}function Mf(e,t,n,r){df(r),t=di(t,"onChange"),0<t.length&&(n=new Qs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mr=null,Kr=null;function Cm(e){Vf(e,0)}function Wi(e){var t=zn(e);if(rf(t))return e}function Tm(e,t){if(e==="change")return t}var Rf=!1;if(At){var Dl;if(At){var Fl="oninput"in document;if(!Fl){var cc=document.createElement("div");cc.setAttribute("oninput","return;"),Fl=typeof cc.oninput=="function"}Dl=Fl}else Dl=!1;Rf=Dl&&(!document.documentMode||9<document.documentMode)}function dc(){Mr&&(Mr.detachEvent("onpropertychange",zf),Kr=Mr=null)}function zf(e){if(e.propertyName==="value"&&Wi(Kr)){var t=[];Mf(t,Kr,e,Bs(e)),gf(Cm,t)}}function Pm(e,t,n){e==="focusin"?(dc(),Mr=t,Kr=n,Mr.attachEvent("onpropertychange",zf)):e==="focusout"&&dc()}function Om(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wi(Kr)}function _m(e,t){if(e==="click")return Wi(t)}function Lm(e,t){if(e==="input"||e==="change")return Wi(t)}function Nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Nm;function qr(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!wa.call(t,o)||!nt(e[o],t[o]))return!1}return!0}function fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pc(e,t){var n=fc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fc(n)}}function If(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?If(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Df(){for(var e=window,t=oi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oi(e.document)}return t}function Ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jm(e){var t=Df(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&If(n.ownerDocument.documentElement,n)){if(r!==null&&Ks(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=pc(n,i);var l=pc(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mm=At&&"documentMode"in document&&11>=document.documentMode,Mn=null,Ba=null,Rr=null,$a=!1;function hc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$a||Mn==null||Mn!==oi(r)||(r=Mn,"selectionStart"in r&&Ks(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&qr(Rr,r)||(Rr=r,r=di(Ba,"onSelect"),0<r.length&&(t=new Qs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mn)))}function Oo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rn={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},Bl={},Ff={};At&&(Ff=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function Hi(e){if(Bl[e])return Bl[e];if(!Rn[e])return e;var t=Rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ff)return Bl[e]=t[n];return e}var Bf=Hi("animationend"),$f=Hi("animationiteration"),Uf=Hi("animationstart"),Wf=Hi("transitionend"),Hf=new Map,gc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zt(e,t){Hf.set(e,t),kn(t,[e])}for(var $l=0;$l<gc.length;$l++){var Ul=gc[$l],Rm=Ul.toLowerCase(),zm=Ul[0].toUpperCase()+Ul.slice(1);Zt(Rm,"on"+zm)}Zt(Bf,"onAnimationEnd");Zt($f,"onAnimationIteration");Zt(Uf,"onAnimationStart");Zt("dblclick","onDoubleClick");Zt("focusin","onFocus");Zt("focusout","onBlur");Zt(Wf,"onTransitionEnd");Zn("onMouseEnter",["mouseout","mouseover"]);Zn("onMouseLeave",["mouseout","mouseover"]);Zn("onPointerEnter",["pointerout","pointerover"]);Zn("onPointerLeave",["pointerout","pointerover"]);kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Im=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));function mc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Rg(r,t,void 0,e),e.currentTarget=null}function Vf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;mc(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;mc(o,a,u),i=s}}}if(li)throw e=za,li=!1,za=null,e}function Q(e,t){var n=t[Qa];n===void 0&&(n=t[Qa]=new Set);var r=e+"__bubble";n.has(r)||(Qf(t,e,2,!1),n.add(r))}function Wl(e,t,n){var r=0;t&&(r|=4),Qf(n,e,r,t)}var _o="_reactListening"+Math.random().toString(36).slice(2);function Yr(e){if(!e[_o]){e[_o]=!0,Zd.forEach(function(n){n!=="selectionchange"&&(Im.has(n)||Wl(n,!1,e),Wl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_o]||(t[_o]=!0,Wl("selectionchange",!1,t))}}function Qf(e,t,n,r){switch(Of(t)){case 1:var o=Yg;break;case 4:o=Zg;break;default:o=Hs}n=o.bind(null,t,n,e),o=void 0,!Ra||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Hl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=dn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}gf(function(){var u=i,f=Bs(n),p=[];e:{var h=Hf.get(e);if(h!==void 0){var g=Qs,v=e;switch(e){case"keypress":if(Xo(n)===0)break e;case"keydown":case"keyup":g=pm;break;case"focusin":v="focus",g=Il;break;case"focusout":v="blur",g=Il;break;case"beforeblur":case"afterblur":g=Il;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=tm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=mm;break;case Bf:case $f:case Uf:g=om;break;case Wf:g=Am;break;case"scroll":g=Jg;break;case"wheel":g=bm;break;case"copy":case"cut":case"paste":g=lm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=lc}var A=(t&4)!==0,b=!A&&e==="scroll",c=A?h!==null?h+"Capture":null:h;A=[];for(var d=u,m;d!==null;){m=d;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,c!==null&&(y=Vr(d,c),y!=null&&A.push(Zr(d,y,m)))),b)break;d=d.return}0<A.length&&(h=new g(h,v,null,n,f),p.push({event:h,listeners:A}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==ja&&(v=n.relatedTarget||n.fromElement)&&(dn(v)||v[yt]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?dn(v):null,v!==null&&(b=Cn(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(A=oc,y="onMouseLeave",c="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(A=lc,y="onPointerLeave",c="onPointerEnter",d="pointer"),b=g==null?h:zn(g),m=v==null?h:zn(v),h=new A(y,d+"leave",g,n,f),h.target=b,h.relatedTarget=m,y=null,dn(f)===u&&(A=new A(c,d+"enter",v,n,f),A.target=m,A.relatedTarget=b,y=A),b=y,g&&v)t:{for(A=g,c=v,d=0,m=A;m;m=On(m))d++;for(m=0,y=c;y;y=On(y))m++;for(;0<d-m;)A=On(A),d--;for(;0<m-d;)c=On(c),m--;for(;d--;){if(A===c||c!==null&&A===c.alternate)break t;A=On(A),c=On(c)}A=null}else A=null;g!==null&&vc(p,h,g,A,!1),v!==null&&b!==null&&vc(p,b,v,A,!0)}}e:{if(h=u?zn(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var w=Tm;else if(uc(h))if(Rf)w=Lm;else{w=Om;var S=Pm}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=_m);if(w&&(w=w(e,u))){Mf(p,w,n,f);break e}S&&S(e,h,u),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&Pa(h,"number",h.value)}switch(S=u?zn(u):window,e){case"focusin":(uc(S)||S.contentEditable==="true")&&(Mn=S,Ba=u,Rr=null);break;case"focusout":Rr=Ba=Mn=null;break;case"mousedown":$a=!0;break;case"contextmenu":case"mouseup":case"dragend":$a=!1,hc(p,n,f);break;case"selectionchange":if(Mm)break;case"keydown":case"keyup":hc(p,n,f)}var C;if(Xs)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else jn?Nf(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Lf&&n.locale!=="ko"&&(jn||x!=="onCompositionStart"?x==="onCompositionEnd"&&jn&&(C=_f()):(Lt=f,Vs="value"in Lt?Lt.value:Lt.textContent,jn=!0)),S=di(u,x),0<S.length&&(x=new ic(x,e,null,n,f),p.push({event:x,listeners:S}),C?x.data=C:(C=jf(n),C!==null&&(x.data=C)))),(C=xm?Sm(e,n):Em(e,n))&&(u=di(u,"onBeforeInput"),0<u.length&&(f=new ic("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=C))}Vf(p,t)})}function Zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function di(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Vr(e,n),i!=null&&r.unshift(Zr(e,i,o)),i=Vr(e,t),i!=null&&r.push(Zr(e,i,o))),e=e.return}return r}function On(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vc(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Vr(n,i),s!=null&&l.unshift(Zr(n,s,a))):o||(s=Vr(n,i),s!=null&&l.push(Zr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Dm=/\r\n?/g,Fm=/\u0000|\uFFFD/g;function Ac(e){return(typeof e=="string"?e:""+e).replace(Dm,`
`).replace(Fm,"")}function Lo(e,t,n){if(t=Ac(t),Ac(e)!==t&&n)throw Error(P(425))}function fi(){}var Ua=null,Wa=null;function Ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Va=typeof setTimeout=="function"?setTimeout:void 0,Bm=typeof clearTimeout=="function"?clearTimeout:void 0,yc=typeof Promise=="function"?Promise:void 0,$m=typeof queueMicrotask=="function"?queueMicrotask:typeof yc<"u"?function(e){return yc.resolve(null).then(e).catch(Um)}:Va;function Um(e){setTimeout(function(){throw e})}function Vl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Xr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Xr(t)}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ur=Math.random().toString(36).slice(2),lt="__reactFiber$"+ur,Jr="__reactProps$"+ur,yt="__reactContainer$"+ur,Qa="__reactEvents$"+ur,Wm="__reactListeners$"+ur,Hm="__reactHandles$"+ur;function dn(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bc(e);e!==null;){if(n=e[lt])return n;e=bc(e)}return t}e=n,n=e.parentNode}return null}function mo(e){return e=e[lt]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Vi(e){return e[Jr]||null}var Ga=[],In=-1;function Jt(e){return{current:e}}function G(e){0>In||(e.current=Ga[In],Ga[In]=null,In--)}function V(e,t){In++,Ga[In]=e.current,e.current=t}var Kt={},be=Jt(Kt),Oe=Jt(!1),vn=Kt;function Jn(e,t){var n=e.type.contextTypes;if(!n)return Kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function _e(e){return e=e.childContextTypes,e!=null}function pi(){G(Oe),G(be)}function wc(e,t,n){if(be.current!==Kt)throw Error(P(168));V(be,t),V(Oe,n)}function Gf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,Pg(e)||"Unknown",o));return ee({},n,r)}function hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,vn=be.current,V(be,e),V(Oe,Oe.current),!0}function xc(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Gf(e,t,vn),r.__reactInternalMemoizedMergedChildContext=e,G(Oe),G(be),V(be,e)):G(Oe),V(Oe,n)}var ht=null,Qi=!1,Ql=!1;function Xf(e){ht===null?ht=[e]:ht.push(e)}function Vm(e){Qi=!0,Xf(e)}function en(){if(!Ql&&ht!==null){Ql=!0;var e=0,t=$;try{var n=ht;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,Qi=!1}catch(o){throw ht!==null&&(ht=ht.slice(e+1)),yf($s,en),o}finally{$=t,Ql=!1}}return null}var Dn=[],Fn=0,gi=null,mi=0,Ue=[],We=0,An=null,gt=1,mt="";function an(e,t){Dn[Fn++]=mi,Dn[Fn++]=gi,gi=e,mi=t}function Kf(e,t,n){Ue[We++]=gt,Ue[We++]=mt,Ue[We++]=An,An=e;var r=gt;e=mt;var o=32-et(r)-1;r&=~(1<<o),n+=1;var i=32-et(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,gt=1<<32-et(t)+o|n<<o|r,mt=i+e}else gt=1<<i|n<<o|r,mt=e}function qs(e){e.return!==null&&(an(e,1),Kf(e,1,0))}function Ys(e){for(;e===gi;)gi=Dn[--Fn],Dn[Fn]=null,mi=Dn[--Fn],Dn[Fn]=null;for(;e===An;)An=Ue[--We],Ue[We]=null,mt=Ue[--We],Ue[We]=null,gt=Ue[--We],Ue[We]=null}var Re=null,Me=null,q=!1,Ze=null;function qf(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Me=Bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:gt,overflow:mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Me=null,!0):!1;default:return!1}}function Xa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ka(e){if(q){var t=Me;if(t){var n=t;if(!Sc(e,t)){if(Xa(e))throw Error(P(418));t=Bt(n.nextSibling);var r=Re;t&&Sc(e,t)?qf(r,n):(e.flags=e.flags&-4097|2,q=!1,Re=e)}}else{if(Xa(e))throw Error(P(418));e.flags=e.flags&-4097|2,q=!1,Re=e}}}function Ec(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function No(e){if(e!==Re)return!1;if(!q)return Ec(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ha(e.type,e.memoizedProps)),t&&(t=Me)){if(Xa(e))throw Yf(),Error(P(418));for(;t;)qf(e,t),t=Bt(t.nextSibling)}if(Ec(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=Re?Bt(e.stateNode.nextSibling):null;return!0}function Yf(){for(var e=Me;e;)e=Bt(e.nextSibling)}function er(){Me=Re=null,q=!1}function Zs(e){Ze===null?Ze=[e]:Ze.push(e)}var Qm=St.ReactCurrentBatchConfig;function qe(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var vi=Jt(null),Ai=null,Bn=null,Js=null;function eu(){Js=Bn=Ai=null}function tu(e){var t=vi.current;G(vi),e._currentValue=t}function qa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){Ai=e,Js=Bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function Qe(e){var t=e._currentValue;if(Js!==e)if(e={context:e,memoizedValue:t,next:null},Bn===null){if(Ai===null)throw Error(P(308));Bn=e,Ai.dependencies={lanes:0,firstContext:e}}else Bn=Bn.next=e;return t}var fn=null;function nu(e){fn===null?fn=[e]:fn.push(e)}function Zf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,nu(t)):(n.next=o.next,o.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tt=!1;function ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,bt(e,n)}return o=r.interleaved,o===null?(t.next=t,nu(r)):(t.next=o.next,o.next=t),r.interleaved=t,bt(e,n)}function Ko(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Us(e,n)}}function kc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function yi(e,t,n,r){var o=e.updateQueue;Tt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;l=0,f=u=s=null,a=i;do{var h=a.lane,g=a.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,A=a;switch(h=t,g=n,A.tag){case 1:if(v=A.payload,typeof v=="function"){p=v.call(g,p,h);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=A.payload,h=typeof v=="function"?v.call(g,p,h):v,h==null)break e;p=ee({},p,h);break e;case 2:Tt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,s=p):f=f.next=g,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(f===null&&(s=p),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);bn|=l,e.lanes=l,e.memoizedState=p}}function Cc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var ep=new Yd.Component().refs;function Ya(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gi={isMounted:function(e){return(e=e._reactInternals)?Cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),o=Wt(e),i=vt(r,o);i.payload=t,n!=null&&(i.callback=n),t=$t(e,i,o),t!==null&&(tt(t,e,o,r),Ko(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),o=Wt(e),i=vt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=$t(e,i,o),t!==null&&(tt(t,e,o,r),Ko(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=Wt(e),o=vt(n,r);o.tag=2,t!=null&&(o.callback=t),t=$t(e,o,r),t!==null&&(tt(t,e,r,n),Ko(t,e,r))}};function Tc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!qr(n,r)||!qr(o,i):!0}function tp(e,t,n){var r=!1,o=Kt,i=t.contextType;return typeof i=="object"&&i!==null?i=Qe(i):(o=_e(t)?vn:be.current,r=t.contextTypes,i=(r=r!=null)?Jn(e,o):Kt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Gi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Pc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gi.enqueueReplaceState(t,t.state,null)}function Za(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=ep,ru(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Qe(i):(i=_e(t)?vn:be.current,o.context=Jn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ya(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Gi.enqueueReplaceState(o,o.state,null),yi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===ep&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function jo(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oc(e){var t=e._init;return t(e._payload)}function np(e){function t(c,d){if(e){var m=c.deletions;m===null?(c.deletions=[d],c.flags|=16):m.push(d)}}function n(c,d){if(!e)return null;for(;d!==null;)t(c,d),d=d.sibling;return null}function r(c,d){for(c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function o(c,d){return c=Ht(c,d),c.index=0,c.sibling=null,c}function i(c,d,m){return c.index=m,e?(m=c.alternate,m!==null?(m=m.index,m<d?(c.flags|=2,d):m):(c.flags|=2,d)):(c.flags|=1048576,d)}function l(c){return e&&c.alternate===null&&(c.flags|=2),c}function a(c,d,m,y){return d===null||d.tag!==6?(d=Jl(m,c.mode,y),d.return=c,d):(d=o(d,m),d.return=c,d)}function s(c,d,m,y){var w=m.type;return w===Nn?f(c,d,m.props.children,y,m.key):d!==null&&(d.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ct&&Oc(w)===d.type)?(y=o(d,m.props),y.ref=Ar(c,d,m),y.return=c,y):(y=ti(m.type,m.key,m.props,null,c.mode,y),y.ref=Ar(c,d,m),y.return=c,y)}function u(c,d,m,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=ea(m,c.mode,y),d.return=c,d):(d=o(d,m.children||[]),d.return=c,d)}function f(c,d,m,y,w){return d===null||d.tag!==7?(d=gn(m,c.mode,y,w),d.return=c,d):(d=o(d,m),d.return=c,d)}function p(c,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Jl(""+d,c.mode,m),d.return=c,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case xo:return m=ti(d.type,d.key,d.props,null,c.mode,m),m.ref=Ar(c,null,d),m.return=c,m;case Ln:return d=ea(d,c.mode,m),d.return=c,d;case Ct:var y=d._init;return p(c,y(d._payload),m)}if(kr(d)||pr(d))return d=gn(d,c.mode,m,null),d.return=c,d;jo(c,d)}return null}function h(c,d,m,y){var w=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return w!==null?null:a(c,d,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xo:return m.key===w?s(c,d,m,y):null;case Ln:return m.key===w?u(c,d,m,y):null;case Ct:return w=m._init,h(c,d,w(m._payload),y)}if(kr(m)||pr(m))return w!==null?null:f(c,d,m,y,null);jo(c,m)}return null}function g(c,d,m,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(m)||null,a(d,c,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xo:return c=c.get(y.key===null?m:y.key)||null,s(d,c,y,w);case Ln:return c=c.get(y.key===null?m:y.key)||null,u(d,c,y,w);case Ct:var S=y._init;return g(c,d,m,S(y._payload),w)}if(kr(y)||pr(y))return c=c.get(m)||null,f(d,c,y,w,null);jo(d,y)}return null}function v(c,d,m,y){for(var w=null,S=null,C=d,x=d=0,N=null;C!==null&&x<m.length;x++){C.index>x?(N=C,C=null):N=C.sibling;var _=h(c,C,m[x],y);if(_===null){C===null&&(C=N);break}e&&C&&_.alternate===null&&t(c,C),d=i(_,d,x),S===null?w=_:S.sibling=_,S=_,C=N}if(x===m.length)return n(c,C),q&&an(c,x),w;if(C===null){for(;x<m.length;x++)C=p(c,m[x],y),C!==null&&(d=i(C,d,x),S===null?w=C:S.sibling=C,S=C);return q&&an(c,x),w}for(C=r(c,C);x<m.length;x++)N=g(C,c,x,m[x],y),N!==null&&(e&&N.alternate!==null&&C.delete(N.key===null?x:N.key),d=i(N,d,x),S===null?w=N:S.sibling=N,S=N);return e&&C.forEach(function(T){return t(c,T)}),q&&an(c,x),w}function A(c,d,m,y){var w=pr(m);if(typeof w!="function")throw Error(P(150));if(m=w.call(m),m==null)throw Error(P(151));for(var S=w=null,C=d,x=d=0,N=null,_=m.next();C!==null&&!_.done;x++,_=m.next()){C.index>x?(N=C,C=null):N=C.sibling;var T=h(c,C,_.value,y);if(T===null){C===null&&(C=N);break}e&&C&&T.alternate===null&&t(c,C),d=i(T,d,x),S===null?w=T:S.sibling=T,S=T,C=N}if(_.done)return n(c,C),q&&an(c,x),w;if(C===null){for(;!_.done;x++,_=m.next())_=p(c,_.value,y),_!==null&&(d=i(_,d,x),S===null?w=_:S.sibling=_,S=_);return q&&an(c,x),w}for(C=r(c,C);!_.done;x++,_=m.next())_=g(C,c,x,_.value,y),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?x:_.key),d=i(_,d,x),S===null?w=_:S.sibling=_,S=_);return e&&C.forEach(function(O){return t(c,O)}),q&&an(c,x),w}function b(c,d,m,y){if(typeof m=="object"&&m!==null&&m.type===Nn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case xo:e:{for(var w=m.key,S=d;S!==null;){if(S.key===w){if(w=m.type,w===Nn){if(S.tag===7){n(c,S.sibling),d=o(S,m.props.children),d.return=c,c=d;break e}}else if(S.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ct&&Oc(w)===S.type){n(c,S.sibling),d=o(S,m.props),d.ref=Ar(c,S,m),d.return=c,c=d;break e}n(c,S);break}else t(c,S);S=S.sibling}m.type===Nn?(d=gn(m.props.children,c.mode,y,m.key),d.return=c,c=d):(y=ti(m.type,m.key,m.props,null,c.mode,y),y.ref=Ar(c,d,m),y.return=c,c=y)}return l(c);case Ln:e:{for(S=m.key;d!==null;){if(d.key===S)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(c,d.sibling),d=o(d,m.children||[]),d.return=c,c=d;break e}else{n(c,d);break}else t(c,d);d=d.sibling}d=ea(m,c.mode,y),d.return=c,c=d}return l(c);case Ct:return S=m._init,b(c,d,S(m._payload),y)}if(kr(m))return v(c,d,m,y);if(pr(m))return A(c,d,m,y);jo(c,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(c,d.sibling),d=o(d,m),d.return=c,c=d):(n(c,d),d=Jl(m,c.mode,y),d.return=c,c=d),l(c)):n(c,d)}return b}var tr=np(!0),rp=np(!1),vo={},ut=Jt(vo),eo=Jt(vo),to=Jt(vo);function pn(e){if(e===vo)throw Error(P(174));return e}function ou(e,t){switch(V(to,t),V(eo,e),V(ut,vo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_a(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_a(t,e)}G(ut),V(ut,t)}function nr(){G(ut),G(eo),G(to)}function op(e){pn(to.current);var t=pn(ut.current),n=_a(t,e.type);t!==n&&(V(eo,e),V(ut,n))}function iu(e){eo.current===e&&(G(ut),G(eo))}var Z=Jt(0);function bi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gl=[];function lu(){for(var e=0;e<Gl.length;e++)Gl[e]._workInProgressVersionPrimary=null;Gl.length=0}var qo=St.ReactCurrentDispatcher,Xl=St.ReactCurrentBatchConfig,yn=0,J=null,ae=null,ue=null,wi=!1,zr=!1,no=0,Gm=0;function me(){throw Error(P(321))}function au(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function su(e,t,n,r,o,i){if(yn=i,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qo.current=e===null||e.memoizedState===null?Ym:Zm,e=n(r,o),zr){i=0;do{if(zr=!1,no=0,25<=i)throw Error(P(301));i+=1,ue=ae=null,t.updateQueue=null,qo.current=Jm,e=n(r,o)}while(zr)}if(qo.current=xi,t=ae!==null&&ae.next!==null,yn=0,ue=ae=J=null,wi=!1,t)throw Error(P(300));return e}function uu(){var e=no!==0;return no=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?J.memoizedState=ue=e:ue=ue.next=e,ue}function Ge(){if(ae===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ue===null?J.memoizedState:ue.next;if(t!==null)ue=t,ae=e;else{if(e===null)throw Error(P(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ue===null?J.memoizedState=ue=e:ue=ue.next=e}return ue}function ro(e,t){return typeof t=="function"?t(e):t}function Kl(e){var t=Ge(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ae,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var f=u.lane;if((yn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=p,l=r):s=s.next=p,J.lanes|=f,bn|=f}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,nt(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,J.lanes|=i,bn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ql(e){var t=Ge(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);nt(i,t.memoizedState)||(Te=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ip(){}function lp(e,t){var n=J,r=Ge(),o=t(),i=!nt(r.memoizedState,o);if(i&&(r.memoizedState=o,Te=!0),r=r.queue,cu(up.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,oo(9,sp.bind(null,n,r,o,t),void 0,null),ce===null)throw Error(P(349));yn&30||ap(n,t,o)}return o}function ap(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sp(e,t,n,r){t.value=n,t.getSnapshot=r,cp(t)&&dp(e)}function up(e,t,n){return n(function(){cp(t)&&dp(e)})}function cp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function dp(e){var t=bt(e,1);t!==null&&tt(t,e,1,-1)}function _c(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},t.queue=e,e=e.dispatch=qm.bind(null,J,e),[t.memoizedState,e]}function oo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fp(){return Ge().memoizedState}function Yo(e,t,n,r){var o=it();J.flags|=e,o.memoizedState=oo(1|t,n,void 0,r===void 0?null:r)}function Xi(e,t,n,r){var o=Ge();r=r===void 0?null:r;var i=void 0;if(ae!==null){var l=ae.memoizedState;if(i=l.destroy,r!==null&&au(r,l.deps)){o.memoizedState=oo(t,n,i,r);return}}J.flags|=e,o.memoizedState=oo(1|t,n,i,r)}function Lc(e,t){return Yo(8390656,8,e,t)}function cu(e,t){return Xi(2048,8,e,t)}function pp(e,t){return Xi(4,2,e,t)}function hp(e,t){return Xi(4,4,e,t)}function gp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mp(e,t,n){return n=n!=null?n.concat([e]):null,Xi(4,4,gp.bind(null,t,e),n)}function du(){}function vp(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&au(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ap(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&au(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yp(e,t,n){return yn&21?(nt(n,t)||(n=xf(),J.lanes|=n,bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n)}function Xm(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=Xl.transition;Xl.transition={};try{e(!1),t()}finally{$=n,Xl.transition=r}}function bp(){return Ge().memoizedState}function Km(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wp(e))xp(t,n);else if(n=Zf(e,t,n,r),n!==null){var o=xe();tt(n,e,r,o),Sp(n,t,r)}}function qm(e,t,n){var r=Wt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wp(e))xp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,nt(a,l)){var s=t.interleaved;s===null?(o.next=o,nu(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Zf(e,t,o,r),n!==null&&(o=xe(),tt(n,e,r,o),Sp(n,t,r))}}function wp(e){var t=e.alternate;return e===J||t!==null&&t===J}function xp(e,t){zr=wi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Us(e,n)}}var xi={readContext:Qe,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Ym={readContext:Qe,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:Lc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Yo(4194308,4,gp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yo(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Km.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:_c,useDebugValue:du,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=_c(!1),t=e[0];return e=Xm.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,o=it();if(q){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ce===null)throw Error(P(349));yn&30||ap(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Lc(up.bind(null,r,i,e),[e]),r.flags|=2048,oo(9,sp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=it(),t=ce.identifierPrefix;if(q){var n=mt,r=gt;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=no++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Gm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zm={readContext:Qe,useCallback:vp,useContext:Qe,useEffect:cu,useImperativeHandle:mp,useInsertionEffect:pp,useLayoutEffect:hp,useMemo:Ap,useReducer:Kl,useRef:fp,useState:function(){return Kl(ro)},useDebugValue:du,useDeferredValue:function(e){var t=Ge();return yp(t,ae.memoizedState,e)},useTransition:function(){var e=Kl(ro)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:ip,useSyncExternalStore:lp,useId:bp,unstable_isNewReconciler:!1},Jm={readContext:Qe,useCallback:vp,useContext:Qe,useEffect:cu,useImperativeHandle:mp,useInsertionEffect:pp,useLayoutEffect:hp,useMemo:Ap,useReducer:ql,useRef:fp,useState:function(){return ql(ro)},useDebugValue:du,useDeferredValue:function(e){var t=Ge();return ae===null?t.memoizedState=e:yp(t,ae.memoizedState,e)},useTransition:function(){var e=ql(ro)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:ip,useSyncExternalStore:lp,useId:bp,unstable_isNewReconciler:!1};function rr(e,t){try{var n="",r=t;do n+=Tg(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Yl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ja(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ev=typeof WeakMap=="function"?WeakMap:Map;function Ep(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ei||(Ei=!0,us=r),Ja(e,t)},n}function kp(e,t,n){n=vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ja(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ja(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Nc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ev;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=hv.bind(null,e,t,n),t.then(e,e))}function jc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,$t(n,t,1))),n.lanes|=1),e)}var tv=St.ReactCurrentOwner,Te=!1;function we(e,t,n,r){t.child=e===null?rp(t,null,n,r):tr(t,e.child,n,r)}function Rc(e,t,n,r,o){n=n.render;var i=t.ref;return Xn(t,o),r=su(e,t,n,r,i,o),n=uu(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wt(e,t,o)):(q&&n&&qs(t),t.flags|=1,we(e,t,r,o),t.child)}function zc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!yu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Cp(e,t,i,r,o)):(e=ti(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:qr,n(l,r)&&e.ref===t.ref)return wt(e,t,o)}return t.flags|=1,e=Ht(i,r),e.ref=t.ref,e.return=t,t.child=e}function Cp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(qr(i,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,wt(e,t,o)}return es(e,t,n,r,o)}function Tp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Un,Ne),Ne|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(Un,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(Un,Ne),Ne|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(Un,Ne),Ne|=r;return we(e,t,o,n),t.child}function Pp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function es(e,t,n,r,o){var i=_e(n)?vn:be.current;return i=Jn(t,i),Xn(t,o),n=su(e,t,n,r,i,o),r=uu(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wt(e,t,o)):(q&&r&&qs(t),t.flags|=1,we(e,t,n,o),t.child)}function Ic(e,t,n,r,o){if(_e(n)){var i=!0;hi(t)}else i=!1;if(Xn(t,o),t.stateNode===null)Zo(e,t),tp(t,n,r),Za(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qe(u):(u=_e(n)?vn:be.current,u=Jn(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Pc(t,l,r,u),Tt=!1;var h=t.memoizedState;l.state=h,yi(t,r,l,o),s=t.memoizedState,a!==r||h!==s||Oe.current||Tt?(typeof f=="function"&&(Ya(t,n,f,r),s=t.memoizedState),(a=Tt||Tc(t,n,a,r,h,s,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Jf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:qe(t.type,a),l.props=u,p=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Qe(s):(s=_e(n)?vn:be.current,s=Jn(t,s));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||h!==s)&&Pc(t,l,r,s),Tt=!1,h=t.memoizedState,l.state=h,yi(t,r,l,o);var v=t.memoizedState;a!==p||h!==v||Oe.current||Tt?(typeof g=="function"&&(Ya(t,n,g,r),v=t.memoizedState),(u=Tt||Tc(t,n,u,r,h,v,s)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ts(e,t,n,r,i,o)}function ts(e,t,n,r,o,i){Pp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&xc(t,n,!1),wt(e,t,i);r=t.stateNode,tv.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=tr(t,e.child,null,i),t.child=tr(t,null,a,i)):we(e,t,a,i),t.memoizedState=r.state,o&&xc(t,n,!0),t.child}function Op(e){var t=e.stateNode;t.pendingContext?wc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wc(e,t.context,!1),ou(e,t.containerInfo)}function Dc(e,t,n,r,o){return er(),Zs(o),t.flags|=256,we(e,t,n,r),t.child}var ns={dehydrated:null,treeContext:null,retryLane:0};function rs(e){return{baseLanes:e,cachePool:null,transitions:null}}function _p(e,t,n){var r=t.pendingProps,o=Z.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(Z,o&1),e===null)return Ka(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Yi(l,r,0,null),e=gn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=rs(n),t.memoizedState=ns,e):fu(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return nv(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Ht(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Ht(a,i):(i=gn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?rs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ns,r}return i=e.child,e=i.sibling,r=Ht(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function fu(e,t){return t=Yi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mo(e,t,n,r){return r!==null&&Zs(r),tr(t,e.child,null,n),e=fu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nv(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Yl(Error(P(422))),Mo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Yi({mode:"visible",children:r.children},o,0,null),i=gn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&tr(t,e.child,null,l),t.child.memoizedState=rs(l),t.memoizedState=ns,i);if(!(t.mode&1))return Mo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(P(419)),r=Yl(i,r,void 0),Mo(e,t,l,r)}if(a=(l&e.childLanes)!==0,Te||a){if(r=ce,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,bt(e,o),tt(r,e,o,-1))}return Au(),r=Yl(Error(P(421))),Mo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=gv.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Me=Bt(o.nextSibling),Re=t,q=!0,Ze=null,e!==null&&(Ue[We++]=gt,Ue[We++]=mt,Ue[We++]=An,gt=e.id,mt=e.overflow,An=t),t=fu(t,r.children),t.flags|=4096,t)}function Fc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qa(e.return,t,n)}function Zl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Lp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(we(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fc(e,n,t);else if(e.tag===19)Fc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Z,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&bi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Zl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&bi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Zl(t,!0,n,null,i);break;case"together":Zl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rv(e,t,n){switch(t.tag){case 3:Op(t),er();break;case 5:op(t);break;case 1:_e(t.type)&&hi(t);break;case 4:ou(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;V(vi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?_p(e,t,n):(V(Z,Z.current&1),e=wt(e,t,n),e!==null?e.sibling:null);V(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,Tp(e,t,n)}return wt(e,t,n)}var Np,os,jp,Mp;Np=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};os=function(){};jp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,pn(ut.current);var i=null;switch(n){case"input":o=Ca(e,o),r=Ca(e,r),i=[];break;case"select":o=ee({},o,{value:void 0}),r=ee({},r,{value:void 0}),i=[];break;case"textarea":o=Oa(e,o),r=Oa(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fi)}La(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Q("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Mp=function(e,t,n,r){n!==r&&(t.flags|=4)};function yr(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ov(e,t,n){var r=t.pendingProps;switch(Ys(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return _e(t.type)&&pi(),ve(t),null;case 3:return r=t.stateNode,nr(),G(Oe),G(be),lu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(No(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(fs(Ze),Ze=null))),os(e,t),ve(t),null;case 5:iu(t);var o=pn(to.current);if(n=t.type,e!==null&&t.stateNode!=null)jp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return ve(t),null}if(e=pn(ut.current),No(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[lt]=t,r[Jr]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<Tr.length;o++)Q(Tr[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Xu(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":qu(r,i),Q("invalid",r)}La(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Lo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Lo(r.textContent,a,e),o=["children",""+a]):Wr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Q("scroll",r)}switch(n){case"input":So(r),Ku(r,i,!0);break;case"textarea":So(r),Yu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=fi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=af(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[lt]=t,e[Jr]=r,Np(e,t,!1,!1),t.stateNode=e;e:{switch(l=Na(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Tr.length;o++)Q(Tr[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":Xu(e,r),o=Ca(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ee({},r,{value:void 0}),Q("invalid",e);break;case"textarea":qu(e,r),o=Oa(e,r),Q("invalid",e);break;default:o=r}La(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?cf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&sf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Hr(e,s):typeof s=="number"&&Hr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Wr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&Q("scroll",e):s!=null&&zs(e,i,s,l))}switch(n){case"input":So(e),Ku(e,r,!1);break;case"textarea":So(e),Yu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Hn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=fi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Mp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=pn(to.current),pn(ut.current),No(t)){if(r=t.stateNode,n=t.memoizedProps,r[lt]=t,(i=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:Lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lt]=t,t.stateNode=r}return ve(t),null;case 13:if(G(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Me!==null&&t.mode&1&&!(t.flags&128))Yf(),er(),t.flags|=98560,i=!1;else if(i=No(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[lt]=t}else er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else Ze!==null&&(fs(Ze),Ze=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?se===0&&(se=3):Au())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return nr(),os(e,t),e===null&&Yr(t.stateNode.containerInfo),ve(t),null;case 10:return tu(t.type._context),ve(t),null;case 17:return _e(t.type)&&pi(),ve(t),null;case 19:if(G(Z),i=t.memoizedState,i===null)return ve(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)yr(i,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=bi(e),l!==null){for(t.flags|=128,yr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Z,Z.current&1|2),t.child}e=e.sibling}i.tail!==null&&re()>or&&(t.flags|=128,r=!0,yr(i,!1),t.lanes=4194304)}else{if(!r)if(e=bi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!q)return ve(t),null}else 2*re()-i.renderingStartTime>or&&n!==1073741824&&(t.flags|=128,r=!0,yr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=re(),t.sibling=null,n=Z.current,V(Z,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return vu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function iv(e,t){switch(Ys(t),t.tag){case 1:return _e(t.type)&&pi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nr(),G(Oe),G(be),lu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return iu(t),null;case 13:if(G(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Z),null;case 4:return nr(),null;case 10:return tu(t.type._context),null;case 22:case 23:return vu(),null;case 24:return null;default:return null}}var Ro=!1,ye=!1,lv=typeof WeakSet=="function"?WeakSet:Set,M=null;function $n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function is(e,t,n){try{n()}catch(r){ne(e,t,r)}}var Bc=!1;function av(e,t){if(Ua=ui,e=Df(),Ks(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,f=0,p=e,h=null;t:for(;;){for(var g;p!==n||o!==0&&p.nodeType!==3||(a=l+o),p!==i||r!==0&&p.nodeType!==3||(s=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===e)break t;if(h===n&&++u===o&&(a=l),h===i&&++f===r&&(s=l),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wa={focusedElem:e,selectionRange:n},ui=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var A=v.memoizedProps,b=v.memoizedState,c=t.stateNode,d=c.getSnapshotBeforeUpdate(t.elementType===t.type?A:qe(t.type,A),b);c.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(y){ne(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return v=Bc,Bc=!1,v}function Ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&is(t,n,i)}o=o.next}while(o!==r)}}function Ki(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ls(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rp(e){var t=e.alternate;t!==null&&(e.alternate=null,Rp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lt],delete t[Jr],delete t[Qa],delete t[Wm],delete t[Hm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zp(e){return e.tag===5||e.tag===3||e.tag===4}function $c(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function as(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fi));else if(r!==4&&(e=e.child,e!==null))for(as(e,t,n),e=e.sibling;e!==null;)as(e,t,n),e=e.sibling}function ss(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ss(e,t,n),e=e.sibling;e!==null;)ss(e,t,n),e=e.sibling}var pe=null,Ye=!1;function kt(e,t,n){for(n=n.child;n!==null;)Ip(e,t,n),n=n.sibling}function Ip(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount($i,n)}catch{}switch(n.tag){case 5:ye||$n(n,t);case 6:var r=pe,o=Ye;pe=null,kt(e,t,n),pe=r,Ye=o,pe!==null&&(Ye?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(Ye?(e=pe,n=n.stateNode,e.nodeType===8?Vl(e.parentNode,n):e.nodeType===1&&Vl(e,n),Xr(e)):Vl(pe,n.stateNode));break;case 4:r=pe,o=Ye,pe=n.stateNode.containerInfo,Ye=!0,kt(e,t,n),pe=r,Ye=o;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&is(n,t,l),o=o.next}while(o!==r)}kt(e,t,n);break;case 1:if(!ye&&($n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ne(n,t,a)}kt(e,t,n);break;case 21:kt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,kt(e,t,n),ye=r):kt(e,t,n);break;default:kt(e,t,n)}}function Uc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lv),t.forEach(function(r){var o=mv.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:pe=a.stateNode,Ye=!1;break e;case 3:pe=a.stateNode.containerInfo,Ye=!0;break e;case 4:pe=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(pe===null)throw Error(P(160));Ip(i,l,o),pe=null,Ye=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ne(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dp(t,e),t=t.sibling}function Dp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),rt(e),r&4){try{Ir(3,e,e.return),Ki(3,e)}catch(A){ne(e,e.return,A)}try{Ir(5,e,e.return)}catch(A){ne(e,e.return,A)}}break;case 1:Ke(t,e),rt(e),r&512&&n!==null&&$n(n,n.return);break;case 5:if(Ke(t,e),rt(e),r&512&&n!==null&&$n(n,n.return),e.flags&32){var o=e.stateNode;try{Hr(o,"")}catch(A){ne(e,e.return,A)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&of(o,i),Na(a,l);var u=Na(a,i);for(l=0;l<s.length;l+=2){var f=s[l],p=s[l+1];f==="style"?cf(o,p):f==="dangerouslySetInnerHTML"?sf(o,p):f==="children"?Hr(o,p):zs(o,f,p,u)}switch(a){case"input":Ta(o,i);break;case"textarea":lf(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Hn(o,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?Hn(o,!!i.multiple,i.defaultValue,!0):Hn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Jr]=i}catch(A){ne(e,e.return,A)}}break;case 6:if(Ke(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(A){ne(e,e.return,A)}}break;case 3:if(Ke(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xr(t.containerInfo)}catch(A){ne(e,e.return,A)}break;case 4:Ke(t,e),rt(e);break;case 13:Ke(t,e),rt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(gu=re())),r&4&&Uc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||f,Ke(t,e),ye=u):Ke(t,e),rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(M=e,f=e.child;f!==null;){for(p=M=f;M!==null;){switch(h=M,g=h.child,h.tag){case 0:case 11:case 14:case 15:Ir(4,h,h.return);break;case 1:$n(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(A){ne(r,n,A)}}break;case 5:$n(h,h.return);break;case 22:if(h.memoizedState!==null){Hc(p);continue}}g!==null?(g.return=h,M=g):Hc(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,s=p.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=uf("display",l))}catch(A){ne(e,e.return,A)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(A){ne(e,e.return,A)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ke(t,e),rt(e),r&4&&Uc(e);break;case 21:break;default:Ke(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zp(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Hr(o,""),r.flags&=-33);var i=$c(e);ss(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=$c(e);as(e,a,l);break;default:throw Error(P(161))}}catch(s){ne(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sv(e,t,n){M=e,Fp(e)}function Fp(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var o=M,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Ro;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ye;a=Ro;var u=ye;if(Ro=l,(ye=s)&&!u)for(M=o;M!==null;)l=M,s=l.child,l.tag===22&&l.memoizedState!==null?Vc(o):s!==null?(s.return=l,M=s):Vc(o);for(;i!==null;)M=i,Fp(i),i=i.sibling;M=o,Ro=a,ye=u}Wc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,M=i):Wc(e)}}function Wc(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Ki(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Cc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Xr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ye||t.flags&512&&ls(t)}catch(h){ne(t,t.return,h)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Hc(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Vc(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ki(4,t)}catch(s){ne(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ne(t,o,s)}}var i=t.return;try{ls(t)}catch(s){ne(t,i,s)}break;case 5:var l=t.return;try{ls(t)}catch(s){ne(t,l,s)}}}catch(s){ne(t,t.return,s)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var uv=Math.ceil,Si=St.ReactCurrentDispatcher,pu=St.ReactCurrentOwner,Ve=St.ReactCurrentBatchConfig,B=0,ce=null,ie=null,he=0,Ne=0,Un=Jt(0),se=0,io=null,bn=0,qi=0,hu=0,Dr=null,Ce=null,gu=0,or=1/0,pt=null,Ei=!1,us=null,Ut=null,zo=!1,Nt=null,ki=0,Fr=0,cs=null,Jo=-1,ei=0;function xe(){return B&6?re():Jo!==-1?Jo:Jo=re()}function Wt(e){return e.mode&1?B&2&&he!==0?he&-he:Qm.transition!==null?(ei===0&&(ei=xf()),ei):(e=$,e!==0||(e=window.event,e=e===void 0?16:Of(e.type)),e):1}function tt(e,t,n,r){if(50<Fr)throw Fr=0,cs=null,Error(P(185));ho(e,n,r),(!(B&2)||e!==ce)&&(e===ce&&(!(B&2)&&(qi|=n),se===4&&Ot(e,he)),Le(e,r),n===1&&B===0&&!(t.mode&1)&&(or=re()+500,Qi&&en()))}function Le(e,t){var n=e.callbackNode;Qg(e,t);var r=si(e,e===ce?he:0);if(r===0)n!==null&&ec(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ec(n),t===1)e.tag===0?Vm(Qc.bind(null,e)):Xf(Qc.bind(null,e)),$m(function(){!(B&6)&&en()}),n=null;else{switch(Sf(r)){case 1:n=$s;break;case 4:n=bf;break;case 16:n=ai;break;case 536870912:n=wf;break;default:n=ai}n=Gp(n,Bp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Bp(e,t){if(Jo=-1,ei=0,B&6)throw Error(P(327));var n=e.callbackNode;if(Kn()&&e.callbackNode!==n)return null;var r=si(e,e===ce?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ci(e,r);else{t=r;var o=B;B|=2;var i=Up();(ce!==e||he!==t)&&(pt=null,or=re()+500,hn(e,t));do try{fv();break}catch(a){$p(e,a)}while(1);eu(),Si.current=i,B=o,ie!==null?t=0:(ce=null,he=0,t=se)}if(t!==0){if(t===2&&(o=Ia(e),o!==0&&(r=o,t=ds(e,o))),t===1)throw n=io,hn(e,0),Ot(e,r),Le(e,re()),n;if(t===6)Ot(e,r);else{if(o=e.current.alternate,!(r&30)&&!cv(o)&&(t=Ci(e,r),t===2&&(i=Ia(e),i!==0&&(r=i,t=ds(e,i))),t===1))throw n=io,hn(e,0),Ot(e,r),Le(e,re()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:sn(e,Ce,pt);break;case 3:if(Ot(e,r),(r&130023424)===r&&(t=gu+500-re(),10<t)){if(si(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Va(sn.bind(null,e,Ce,pt),t);break}sn(e,Ce,pt);break;case 4:if(Ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-et(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uv(r/1960))-r,10<r){e.timeoutHandle=Va(sn.bind(null,e,Ce,pt),r);break}sn(e,Ce,pt);break;case 5:sn(e,Ce,pt);break;default:throw Error(P(329))}}}return Le(e,re()),e.callbackNode===n?Bp.bind(null,e):null}function ds(e,t){var n=Dr;return e.current.memoizedState.isDehydrated&&(hn(e,t).flags|=256),e=Ci(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&fs(t)),e}function fs(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function cv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!nt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ot(e,t){for(t&=~hu,t&=~qi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function Qc(e){if(B&6)throw Error(P(327));Kn();var t=si(e,0);if(!(t&1))return Le(e,re()),null;var n=Ci(e,t);if(e.tag!==0&&n===2){var r=Ia(e);r!==0&&(t=r,n=ds(e,r))}if(n===1)throw n=io,hn(e,0),Ot(e,t),Le(e,re()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,Ce,pt),Le(e,re()),null}function mu(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(or=re()+500,Qi&&en())}}function wn(e){Nt!==null&&Nt.tag===0&&!(B&6)&&Kn();var t=B;B|=1;var n=Ve.transition,r=$;try{if(Ve.transition=null,$=1,e)return e()}finally{$=r,Ve.transition=n,B=t,!(B&6)&&en()}}function vu(){Ne=Un.current,G(Un)}function hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bm(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Ys(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pi();break;case 3:nr(),G(Oe),G(be),lu();break;case 5:iu(r);break;case 4:nr();break;case 13:G(Z);break;case 19:G(Z);break;case 10:tu(r.type._context);break;case 22:case 23:vu()}n=n.return}if(ce=e,ie=e=Ht(e.current,null),he=Ne=t,se=0,io=null,hu=qi=bn=0,Ce=Dr=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}fn=null}return e}function $p(e,t){do{var n=ie;try{if(eu(),qo.current=xi,wi){for(var r=J.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}wi=!1}if(yn=0,ue=ae=J=null,zr=!1,no=0,pu.current=null,n===null||n.return===null){se=1,io=t,ie=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=he,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=jc(l);if(g!==null){g.flags&=-257,Mc(g,l,a,i,t),g.mode&1&&Nc(i,u,t),t=g,s=u;var v=t.updateQueue;if(v===null){var A=new Set;A.add(s),t.updateQueue=A}else v.add(s);break e}else{if(!(t&1)){Nc(i,u,t),Au();break e}s=Error(P(426))}}else if(q&&a.mode&1){var b=jc(l);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Mc(b,l,a,i,t),Zs(rr(s,a));break e}}i=s=rr(s,a),se!==4&&(se=2),Dr===null?Dr=[i]:Dr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var c=Ep(i,s,t);kc(i,c);break e;case 1:a=s;var d=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ut===null||!Ut.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=kp(i,a,t);kc(i,y);break e}}i=i.return}while(i!==null)}Hp(n)}catch(w){t=w,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(1)}function Up(){var e=Si.current;return Si.current=xi,e===null?xi:e}function Au(){(se===0||se===3||se===2)&&(se=4),ce===null||!(bn&268435455)&&!(qi&268435455)||Ot(ce,he)}function Ci(e,t){var n=B;B|=2;var r=Up();(ce!==e||he!==t)&&(pt=null,hn(e,t));do try{dv();break}catch(o){$p(e,o)}while(1);if(eu(),B=n,Si.current=r,ie!==null)throw Error(P(261));return ce=null,he=0,se}function dv(){for(;ie!==null;)Wp(ie)}function fv(){for(;ie!==null&&!Ig();)Wp(ie)}function Wp(e){var t=Qp(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Hp(e):ie=t,pu.current=null}function Hp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=iv(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ie=null;return}}else if(n=ov(n,t,Ne),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);se===0&&(se=5)}function sn(e,t,n){var r=$,o=Ve.transition;try{Ve.transition=null,$=1,pv(e,t,n,r)}finally{Ve.transition=o,$=r}return null}function pv(e,t,n,r){do Kn();while(Nt!==null);if(B&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Gg(e,i),e===ce&&(ie=ce=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zo||(zo=!0,Gp(ai,function(){return Kn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ve.transition,Ve.transition=null;var l=$;$=1;var a=B;B|=4,pu.current=null,av(e,n),Dp(n,e),jm(Wa),ui=!!Ua,Wa=Ua=null,e.current=n,sv(n),Dg(),B=a,$=l,Ve.transition=i}else e.current=n;if(zo&&(zo=!1,Nt=e,ki=o),i=e.pendingLanes,i===0&&(Ut=null),$g(n.stateNode),Le(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ei)throw Ei=!1,e=us,us=null,e;return ki&1&&e.tag!==0&&Kn(),i=e.pendingLanes,i&1?e===cs?Fr++:(Fr=0,cs=e):Fr=0,en(),null}function Kn(){if(Nt!==null){var e=Sf(ki),t=Ve.transition,n=$;try{if(Ve.transition=null,$=16>e?16:e,Nt===null)var r=!1;else{if(e=Nt,Nt=null,ki=0,B&6)throw Error(P(331));var o=B;for(B|=4,M=e.current;M!==null;){var i=M,l=i.child;if(M.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(M=u;M!==null;){var f=M;switch(f.tag){case 0:case 11:case 15:Ir(8,f,i)}var p=f.child;if(p!==null)p.return=f,M=p;else for(;M!==null;){f=M;var h=f.sibling,g=f.return;if(Rp(f),f===u){M=null;break}if(h!==null){h.return=g,M=h;break}M=g}}}var v=i.alternate;if(v!==null){var A=v.child;if(A!==null){v.child=null;do{var b=A.sibling;A.sibling=null,A=b}while(A!==null)}}M=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,M=l;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ir(9,i,i.return)}var c=i.sibling;if(c!==null){c.return=i.return,M=c;break e}M=i.return}}var d=e.current;for(M=d;M!==null;){l=M;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,M=m;else e:for(l=d;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ki(9,a)}}catch(w){ne(a,a.return,w)}if(a===l){M=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,M=y;break e}M=a.return}}if(B=o,en(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot($i,e)}catch{}r=!0}return r}finally{$=n,Ve.transition=t}}return!1}function Gc(e,t,n){t=rr(n,t),t=Ep(e,t,1),e=$t(e,t,1),t=xe(),e!==null&&(ho(e,1,t),Le(e,t))}function ne(e,t,n){if(e.tag===3)Gc(e,e,n);else for(;t!==null;){if(t.tag===3){Gc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=rr(n,e),e=kp(t,e,1),t=$t(t,e,1),e=xe(),t!==null&&(ho(t,1,e),Le(t,e));break}}t=t.return}}function hv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(he&n)===n&&(se===4||se===3&&(he&130023424)===he&&500>re()-gu?hn(e,0):hu|=n),Le(e,t)}function Vp(e,t){t===0&&(e.mode&1?(t=Co,Co<<=1,!(Co&130023424)&&(Co=4194304)):t=1);var n=xe();e=bt(e,t),e!==null&&(ho(e,t,n),Le(e,n))}function gv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vp(e,n)}function mv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Vp(e,n)}var Qp;Qp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)Te=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Te=!1,rv(e,t,n);Te=!!(e.flags&131072)}else Te=!1,q&&t.flags&1048576&&Kf(t,mi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zo(e,t),e=t.pendingProps;var o=Jn(t,be.current);Xn(t,n),o=su(null,t,r,e,o,n);var i=uu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(i=!0,hi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ru(t),o.updater=Gi,t.stateNode=o,o._reactInternals=t,Za(t,r,e,n),t=ts(null,t,r,!0,i,n)):(t.tag=0,q&&i&&qs(t),we(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Av(r),e=qe(r,e),o){case 0:t=es(null,t,r,e,n);break e;case 1:t=Ic(null,t,r,e,n);break e;case 11:t=Rc(null,t,r,e,n);break e;case 14:t=zc(null,t,r,qe(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),es(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Ic(e,t,r,o,n);case 3:e:{if(Op(t),e===null)throw Error(P(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Jf(e,t),yi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=rr(Error(P(423)),t),t=Dc(e,t,r,n,o);break e}else if(r!==o){o=rr(Error(P(424)),t),t=Dc(e,t,r,n,o);break e}else for(Me=Bt(t.stateNode.containerInfo.firstChild),Re=t,q=!0,Ze=null,n=rp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(er(),r===o){t=wt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return op(t),e===null&&Ka(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ha(r,o)?l=null:i!==null&&Ha(r,i)&&(t.flags|=32),Pp(e,t),we(e,t,l,n),t.child;case 6:return e===null&&Ka(t),null;case 13:return _p(e,t,n);case 4:return ou(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tr(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Rc(e,t,r,o,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,V(vi,r._currentValue),r._currentValue=l,i!==null)if(nt(i.value,l)){if(i.children===o.children&&!Oe.current){t=wt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=vt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),qa(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(P(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),qa(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}we(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Xn(t,n),o=Qe(o),r=r(o),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,o=qe(r,t.pendingProps),o=qe(r.type,o),zc(e,t,r,o,n);case 15:return Cp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Zo(e,t),t.tag=1,_e(r)?(e=!0,hi(t)):e=!1,Xn(t,n),tp(t,r,o),Za(t,r,o,n),ts(null,t,r,!0,e,n);case 19:return Lp(e,t,n);case 22:return Tp(e,t,n)}throw Error(P(156,t.tag))};function Gp(e,t){return yf(e,t)}function vv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new vv(e,t,n,r)}function yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Av(e){if(typeof e=="function")return yu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ds)return 11;if(e===Fs)return 14}return 2}function Ht(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ti(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")yu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Nn:return gn(n.children,o,i,t);case Is:l=8,o|=8;break;case xa:return e=He(12,n,t,o|2),e.elementType=xa,e.lanes=i,e;case Sa:return e=He(13,n,t,o),e.elementType=Sa,e.lanes=i,e;case Ea:return e=He(19,n,t,o),e.elementType=Ea,e.lanes=i,e;case tf:return Yi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jd:l=10;break e;case ef:l=9;break e;case Ds:l=11;break e;case Fs:l=14;break e;case Ct:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=He(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function gn(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function Yi(e,t,n,r){return e=He(22,e,r,t),e.elementType=tf,e.lanes=n,e.stateNode={isHidden:!1},e}function Jl(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function ea(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yv(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function bu(e,t,n,r,o,i,l,a,s){return e=new yv(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=He(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ru(i),e}function bv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xp(e){if(!e)return Kt;e=e._reactInternals;e:{if(Cn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(_e(n))return Gf(e,n,t)}return t}function Kp(e,t,n,r,o,i,l,a,s){return e=bu(n,r,!0,e,o,i,l,a,s),e.context=Xp(null),n=e.current,r=xe(),o=Wt(n),i=vt(r,o),i.callback=t??null,$t(n,i,o),e.current.lanes=o,ho(e,o,r),Le(e,r),e}function Zi(e,t,n,r){var o=t.current,i=xe(),l=Wt(o);return n=Xp(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$t(o,t,l),e!==null&&(tt(e,o,l,i),Ko(e,o,l)),l}function Ti(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wu(e,t){Xc(e,t),(e=e.alternate)&&Xc(e,t)}function wv(){return null}var qp=typeof reportError=="function"?reportError:function(e){console.error(e)};function xu(e){this._internalRoot=e}Ji.prototype.render=xu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Zi(e,t,null,null)};Ji.prototype.unmount=xu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){Zi(null,e,null,null)}),t[yt]=null}};function Ji(e){this._internalRoot=e}Ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&Pf(e)}};function Su(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function el(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kc(){}function xv(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ti(l);i.call(u)}}var l=Kp(t,r,e,0,null,!1,!1,"",Kc);return e._reactRootContainer=l,e[yt]=l.current,Yr(e.nodeType===8?e.parentNode:e),wn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Ti(s);a.call(u)}}var s=bu(e,0,!1,null,null,!1,!1,"",Kc);return e._reactRootContainer=s,e[yt]=s.current,Yr(e.nodeType===8?e.parentNode:e),wn(function(){Zi(t,s,n,r)}),s}function tl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Ti(l);a.call(s)}}Zi(t,l,e,o)}else l=xv(n,t,e,o,r);return Ti(l)}Ef=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cr(t.pendingLanes);n!==0&&(Us(t,n|1),Le(t,re()),!(B&6)&&(or=re()+500,en()))}break;case 13:wn(function(){var r=bt(e,1);if(r!==null){var o=xe();tt(r,e,1,o)}}),wu(e,1)}};Ws=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=xe();tt(t,e,134217728,n)}wu(e,134217728)}};kf=function(e){if(e.tag===13){var t=Wt(e),n=bt(e,t);if(n!==null){var r=xe();tt(n,e,t,r)}wu(e,t)}};Cf=function(){return $};Tf=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};Ma=function(e,t,n){switch(t){case"input":if(Ta(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Vi(r);if(!o)throw Error(P(90));rf(r),Ta(r,o)}}}break;case"textarea":lf(e,n);break;case"select":t=n.value,t!=null&&Hn(e,!!n.multiple,t,!1)}};pf=mu;hf=wn;var Sv={usingClientEntryPoint:!1,Events:[mo,zn,Vi,df,ff,mu]},br={findFiberByHostInstance:dn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ev={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vf(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||wv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{$i=Io.inject(Ev),st=Io}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sv;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Su(t))throw Error(P(200));return bv(e,t,null,n)};De.createRoot=function(e,t){if(!Su(e))throw Error(P(299));var n=!1,r="",o=qp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=bu(e,1,!1,null,null,n,!1,r,o),e[yt]=t.current,Yr(e.nodeType===8?e.parentNode:e),new xu(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=vf(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return wn(e)};De.hydrate=function(e,t,n){if(!el(t))throw Error(P(200));return tl(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!Su(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=qp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Kp(t,null,e,1,n??null,o,!1,i,l),e[yt]=t.current,Yr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ji(t)};De.render=function(e,t,n){if(!el(t))throw Error(P(200));return tl(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!el(e))throw Error(P(40));return e._reactRootContainer?(wn(function(){tl(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};De.unstable_batchedUpdates=mu;De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!el(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return tl(e,t,n,!1,r)};De.version="18.2.0-next-9e3b772b8-20220608";function Yp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yp)}catch(e){console.error(e)}}Yp(),Xd.exports=De;var Zp=Xd.exports,Jp,qc=Zp;Jp=qc.createRoot,qc.hydrateRoot;var eh={exports:{}},th={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=E;function kv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Cv=typeof Object.is=="function"?Object.is:kv,Tv=ir.useState,Pv=ir.useEffect,Ov=ir.useLayoutEffect,_v=ir.useDebugValue;function Lv(e,t){var n=t(),r=Tv({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return Ov(function(){o.value=n,o.getSnapshot=t,ta(o)&&i({inst:o})},[e,n,t]),Pv(function(){return ta(o)&&i({inst:o}),e(function(){ta(o)&&i({inst:o})})},[e]),_v(n),n}function ta(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Cv(e,n)}catch{return!0}}function Nv(e,t){return t()}var jv=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Nv:Lv;th.useSyncExternalStore=ir.useSyncExternalStore!==void 0?ir.useSyncExternalStore:jv;eh.exports=th;var Mv=eh.exports,nh={exports:{}},rh={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nl=E,Rv=Mv;function zv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Iv=typeof Object.is=="function"?Object.is:zv,Dv=Rv.useSyncExternalStore,Fv=nl.useRef,Bv=nl.useEffect,$v=nl.useMemo,Uv=nl.useDebugValue;rh.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=Fv(null);if(i.current===null){var l={hasValue:!1,value:null};i.current=l}else l=i.current;i=$v(function(){function s(g){if(!u){if(u=!0,f=g,g=r(g),o!==void 0&&l.hasValue){var v=l.value;if(o(v,g))return p=v}return p=g}if(v=p,Iv(f,g))return v;var A=r(g);return o!==void 0&&o(v,A)?v:(f=g,p=A)}var u=!1,f,p,h=n===void 0?null:n;return[function(){return s(t())},h===null?void 0:function(){return s(h())}]},[t,n,r,o]);var a=Dv(e,i[0],i[1]);return Bv(function(){l.hasValue=!0,l.value=a},[a]),Uv(a),a};nh.exports=rh;var Wv=nh.exports;function Hv(e){e()}let oh=Hv;const Vv=e=>oh=e,Qv=()=>oh,Yc=Symbol.for("react-redux-context"),Zc=typeof globalThis<"u"?globalThis:{};function Gv(){var e;if(!E.createContext)return{};const t=(e=Zc[Yc])!=null?e:Zc[Yc]=new Map;let n=t.get(E.createContext);return n||(n=E.createContext(null),t.set(E.createContext,n)),n}const qt=Gv();function Eu(e=qt){return function(){return E.useContext(e)}}const ih=Eu(),Xv=()=>{throw new Error("uSES not initialized!")};let lh=Xv;const Kv=e=>{lh=e},qv=(e,t)=>e===t;function Yv(e=qt){const t=e===qt?ih:Eu(e);return function(r,o={}){const{equalityFn:i=qv,stabilityCheck:l=void 0,noopCheck:a=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:s,subscription:u,getServerState:f,stabilityCheck:p,noopCheck:h}=t();E.useRef(!0);const g=E.useCallback({[r.name](A){return r(A)}}[r.name],[r,p,l]),v=lh(u.addNestedSub,s.getState,f||s.getState,g,i);return E.useDebugValue(v),v}}const Zv=Yv();var ah={exports:{}},U={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var de=typeof Symbol=="function"&&Symbol.for,ku=de?Symbol.for("react.element"):60103,Cu=de?Symbol.for("react.portal"):60106,rl=de?Symbol.for("react.fragment"):60107,ol=de?Symbol.for("react.strict_mode"):60108,il=de?Symbol.for("react.profiler"):60114,ll=de?Symbol.for("react.provider"):60109,al=de?Symbol.for("react.context"):60110,Tu=de?Symbol.for("react.async_mode"):60111,sl=de?Symbol.for("react.concurrent_mode"):60111,ul=de?Symbol.for("react.forward_ref"):60112,cl=de?Symbol.for("react.suspense"):60113,Jv=de?Symbol.for("react.suspense_list"):60120,dl=de?Symbol.for("react.memo"):60115,fl=de?Symbol.for("react.lazy"):60116,e0=de?Symbol.for("react.block"):60121,t0=de?Symbol.for("react.fundamental"):60117,n0=de?Symbol.for("react.responder"):60118,r0=de?Symbol.for("react.scope"):60119;function Be(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ku:switch(e=e.type,e){case Tu:case sl:case rl:case il:case ol:case cl:return e;default:switch(e=e&&e.$$typeof,e){case al:case ul:case fl:case dl:case ll:return e;default:return t}}case Cu:return t}}}function sh(e){return Be(e)===sl}U.AsyncMode=Tu;U.ConcurrentMode=sl;U.ContextConsumer=al;U.ContextProvider=ll;U.Element=ku;U.ForwardRef=ul;U.Fragment=rl;U.Lazy=fl;U.Memo=dl;U.Portal=Cu;U.Profiler=il;U.StrictMode=ol;U.Suspense=cl;U.isAsyncMode=function(e){return sh(e)||Be(e)===Tu};U.isConcurrentMode=sh;U.isContextConsumer=function(e){return Be(e)===al};U.isContextProvider=function(e){return Be(e)===ll};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ku};U.isForwardRef=function(e){return Be(e)===ul};U.isFragment=function(e){return Be(e)===rl};U.isLazy=function(e){return Be(e)===fl};U.isMemo=function(e){return Be(e)===dl};U.isPortal=function(e){return Be(e)===Cu};U.isProfiler=function(e){return Be(e)===il};U.isStrictMode=function(e){return Be(e)===ol};U.isSuspense=function(e){return Be(e)===cl};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===rl||e===sl||e===il||e===ol||e===cl||e===Jv||typeof e=="object"&&e!==null&&(e.$$typeof===fl||e.$$typeof===dl||e.$$typeof===ll||e.$$typeof===al||e.$$typeof===ul||e.$$typeof===t0||e.$$typeof===n0||e.$$typeof===r0||e.$$typeof===e0)};U.typeOf=Be;ah.exports=U;var o0=ah.exports,uh=o0,i0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ch={};ch[uh.ForwardRef]=i0;ch[uh.Memo]=l0;var W={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu=Symbol.for("react.element"),Ou=Symbol.for("react.portal"),pl=Symbol.for("react.fragment"),hl=Symbol.for("react.strict_mode"),gl=Symbol.for("react.profiler"),ml=Symbol.for("react.provider"),vl=Symbol.for("react.context"),a0=Symbol.for("react.server_context"),Al=Symbol.for("react.forward_ref"),yl=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),wl=Symbol.for("react.memo"),xl=Symbol.for("react.lazy"),s0=Symbol.for("react.offscreen"),dh;dh=Symbol.for("react.module.reference");function Xe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Pu:switch(e=e.type,e){case pl:case gl:case hl:case yl:case bl:return e;default:switch(e=e&&e.$$typeof,e){case a0:case vl:case Al:case xl:case wl:case ml:return e;default:return t}}case Ou:return t}}}W.ContextConsumer=vl;W.ContextProvider=ml;W.Element=Pu;W.ForwardRef=Al;W.Fragment=pl;W.Lazy=xl;W.Memo=wl;W.Portal=Ou;W.Profiler=gl;W.StrictMode=hl;W.Suspense=yl;W.SuspenseList=bl;W.isAsyncMode=function(){return!1};W.isConcurrentMode=function(){return!1};W.isContextConsumer=function(e){return Xe(e)===vl};W.isContextProvider=function(e){return Xe(e)===ml};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pu};W.isForwardRef=function(e){return Xe(e)===Al};W.isFragment=function(e){return Xe(e)===pl};W.isLazy=function(e){return Xe(e)===xl};W.isMemo=function(e){return Xe(e)===wl};W.isPortal=function(e){return Xe(e)===Ou};W.isProfiler=function(e){return Xe(e)===gl};W.isStrictMode=function(e){return Xe(e)===hl};W.isSuspense=function(e){return Xe(e)===yl};W.isSuspenseList=function(e){return Xe(e)===bl};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===pl||e===gl||e===hl||e===yl||e===bl||e===s0||typeof e=="object"&&e!==null&&(e.$$typeof===xl||e.$$typeof===wl||e.$$typeof===ml||e.$$typeof===vl||e.$$typeof===Al||e.$$typeof===dh||e.getModuleId!==void 0)};W.typeOf=Xe;function u0(){const e=Qv();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=t;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,i=n={callback:r,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const Jc={notify(){},get:()=>[]};function c0(e,t){let n,r=Jc;function o(p){return s(),r.subscribe(p)}function i(){r.notify()}function l(){f.onStateChange&&f.onStateChange()}function a(){return!!n}function s(){n||(n=t?t.addNestedSub(l):e.subscribe(l),r=u0())}function u(){n&&(n(),n=void 0,r.clear(),r=Jc)}const f={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:l,isSubscribed:a,trySubscribe:s,tryUnsubscribe:u,getListeners:()=>r};return f}const d0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",f0=d0?E.useLayoutEffect:E.useEffect;function p0({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",noopCheck:i="once"}){const l=E.useMemo(()=>{const u=c0(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:o,noopCheck:i}},[e,r,o,i]),a=E.useMemo(()=>e.getState(),[e]);f0(()=>{const{subscription:u}=l;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[l,a]);const s=t||qt;return E.createElement(s.Provider,{value:l},n)}function fh(e=qt){const t=e===qt?ih:Eu(e);return function(){const{store:r}=t();return r}}const h0=fh();function g0(e=qt){const t=e===qt?h0:fh(e);return function(){return t().dispatch}}const m0=g0();Kv(Wv.useSyncExternalStoreWithSelector);Vv(Zp.unstable_batchedUpdates);/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lo(){return lo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lo.apply(this,arguments)}var jt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jt||(jt={}));const ed="popstate";function v0(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return ps("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Pi(o)}return y0(t,n,null,e)}function le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function _u(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function A0(){return Math.random().toString(36).substr(2,8)}function td(e,t){return{usr:e.state,key:e.key,idx:t}}function ps(e,t,n,r){return n===void 0&&(n=null),lo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?cr(t):t,{state:n,key:t&&t.key||r||A0()})}function Pi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function cr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function y0(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=jt.Pop,s=null,u=f();u==null&&(u=0,l.replaceState(lo({},l.state,{idx:u}),""));function f(){return(l.state||{idx:null}).idx}function p(){a=jt.Pop;let b=f(),c=b==null?null:b-u;u=b,s&&s({action:a,location:A.location,delta:c})}function h(b,c){a=jt.Push;let d=ps(A.location,b,c);n&&n(d,b),u=f()+1;let m=td(d,u),y=A.createHref(d);try{l.pushState(m,"",y)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;o.location.assign(y)}i&&s&&s({action:a,location:A.location,delta:1})}function g(b,c){a=jt.Replace;let d=ps(A.location,b,c);n&&n(d,b),u=f();let m=td(d,u),y=A.createHref(d);l.replaceState(m,"",y),i&&s&&s({action:a,location:A.location,delta:0})}function v(b){let c=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof b=="string"?b:Pi(b);return le(c,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,c)}let A={get action(){return a},get location(){return e(o,l)},listen(b){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(ed,p),s=b,()=>{o.removeEventListener(ed,p),s=null}},createHref(b){return t(o,b)},createURL:v,encodeLocation(b){let c=v(b);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:h,replace:g,go(b){return l.go(b)}};return A}var nd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(nd||(nd={}));function b0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?cr(t):t,o=Lu(r.pathname||"/",n);if(o==null)return null;let i=ph(e);w0(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=_0(i[a],j0(o));return l}function ph(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(le(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Vt([r,s.relativePath]),f=n.concat(s);i.children&&i.children.length>0&&(le(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ph(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:P0(u,i.index),routesMeta:f})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let s of hh(i.path))o(i,l,s)}),t}function hh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=hh(r.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function w0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:O0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const x0=/^:\w+$/,S0=3,E0=2,k0=1,C0=10,T0=-2,rd=e=>e==="*";function P0(e,t){let n=e.split("/"),r=n.length;return n.some(rd)&&(r+=T0),t&&(r+=E0),n.filter(o=>!rd(o)).reduce((o,i)=>o+(x0.test(i)?S0:i===""?k0:C0),r)}function O0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function _0(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",f=L0({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let p=a.route;i.push({params:r,pathname:Vt([o,f.pathname]),pathnameBase:I0(Vt([o,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(o=Vt([o,f.pathnameBase]))}return i}function L0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=N0(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,f,p)=>{if(f==="*"){let h=a[p]||"";l=i.slice(0,i.length-h.length).replace(/(.)\/+$/,"$1")}return u[f]=M0(a[p]||"",f),u},{}),pathname:i,pathnameBase:l,pattern:e}}function N0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),_u(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function j0(e){try{return decodeURI(e)}catch(t){return _u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function M0(e,t){try{return decodeURIComponent(e)}catch(n){return _u(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Lu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function R0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?cr(e):e;return{pathname:n?n.startsWith("/")?n:z0(n,t):t,search:D0(r),hash:F0(o)}}function z0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function na(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function mh(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=cr(e):(o=lo({},e),le(!o.pathname||!o.pathname.includes("?"),na("?","pathname","search",o)),le(!o.pathname||!o.pathname.includes("#"),na("#","pathname","hash",o)),le(!o.search||!o.search.includes("#"),na("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(r||l==null)a=n;else{let p=t.length-1;if(l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),p-=1;o.pathname=h.join("/")}a=p>=0?t[p]:"/"}let s=R0(o,a),u=l&&l!=="/"&&l.endsWith("/"),f=(i||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const Vt=e=>e.join("/").replace(/\/\/+/g,"/"),I0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),D0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,F0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function B0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vh=["post","put","patch","delete"];new Set(vh);const $0=["get",...vh];new Set($0);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oi(){return Oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oi.apply(this,arguments)}const Nu=E.createContext(null),U0=E.createContext(null),dr=E.createContext(null),Sl=E.createContext(null),Tn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Ah=E.createContext(null);function W0(e,t){let{relative:n}=t===void 0?{}:t;Ao()||le(!1);let{basename:r,navigator:o}=E.useContext(dr),{hash:i,pathname:l,search:a}=wh(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:Vt([r,l])),o.createHref({pathname:s,search:a,hash:i})}function Ao(){return E.useContext(Sl)!=null}function El(){return Ao()||le(!1),E.useContext(Sl).location}function yh(e){E.useContext(dr).static||E.useLayoutEffect(e)}function bh(){let{isDataRoute:e}=E.useContext(Tn);return e?nA():H0()}function H0(){Ao()||le(!1);let e=E.useContext(Nu),{basename:t,navigator:n}=E.useContext(dr),{matches:r}=E.useContext(Tn),{pathname:o}=El(),i=JSON.stringify(gh(r).map(s=>s.pathnameBase)),l=E.useRef(!1);return yh(()=>{l.current=!0}),E.useCallback(function(s,u){if(u===void 0&&(u={}),!l.current)return;if(typeof s=="number"){n.go(s);return}let f=mh(s,JSON.parse(i),o,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Vt([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,i,o,e])}function wh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=E.useContext(Tn),{pathname:o}=El(),i=JSON.stringify(gh(r).map(l=>l.pathnameBase));return E.useMemo(()=>mh(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function V0(e,t){return Q0(e,t)}function Q0(e,t,n){Ao()||le(!1);let{navigator:r}=E.useContext(dr),{matches:o}=E.useContext(Tn),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let s=El(),u;if(t){var f;let A=typeof t=="string"?cr(t):t;a==="/"||(f=A.pathname)!=null&&f.startsWith(a)||le(!1),u=A}else u=s;let p=u.pathname||"/",h=a==="/"?p:p.slice(a.length)||"/",g=b0(e,{pathname:h}),v=Y0(g&&g.map(A=>Object.assign({},A,{params:Object.assign({},l,A.params),pathname:Vt([a,r.encodeLocation?r.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?a:Vt([a,r.encodeLocation?r.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),o,n);return t&&v?E.createElement(Sl.Provider,{value:{location:Oi({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:jt.Pop}},v):v}function G0(){let e=tA(),t=B0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:o},n):null,i)}const X0=E.createElement(G0,null);class K0 extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?E.createElement(Tn.Provider,{value:this.props.routeContext},E.createElement(Ah.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function q0(e){let{routeContext:t,match:n,children:r}=e,o=E.useContext(Nu);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Tn.Provider,{value:t},r)}function Y0(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let i=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let a=i.findIndex(s=>s.route.id&&(l==null?void 0:l[s.route.id]));a>=0||le(!1),i=i.slice(0,Math.min(i.length,a+1))}return i.reduceRight((a,s,u)=>{let f=s.route.id?l==null?void 0:l[s.route.id]:null,p=null;n&&(p=s.route.errorElement||X0);let h=t.concat(i.slice(0,u+1)),g=()=>{let v;return f?v=p:s.route.Component?v=E.createElement(s.route.Component,null):s.route.element?v=s.route.element:v=a,E.createElement(q0,{match:s,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:v})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?E.createElement(K0,{location:n.location,revalidation:n.revalidation,component:p,error:f,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var hs;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(hs||(hs={}));var ao;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(ao||(ao={}));function Z0(e){let t=E.useContext(Nu);return t||le(!1),t}function J0(e){let t=E.useContext(U0);return t||le(!1),t}function eA(e){let t=E.useContext(Tn);return t||le(!1),t}function xh(e){let t=eA(),n=t.matches[t.matches.length-1];return n.route.id||le(!1),n.route.id}function tA(){var e;let t=E.useContext(Ah),n=J0(ao.UseRouteError),r=xh(ao.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function nA(){let{router:e}=Z0(hs.UseNavigateStable),t=xh(ao.UseNavigateStable),n=E.useRef(!1);return yh(()=>{n.current=!0}),E.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Oi({fromRouteId:t},i)))},[e,t])}function gs(e){le(!1)}function rA(e){let{basename:t="/",children:n=null,location:r,navigationType:o=jt.Pop,navigator:i,static:l=!1}=e;Ao()&&le(!1);let a=t.replace(/^\/*/,"/"),s=E.useMemo(()=>({basename:a,navigator:i,static:l}),[a,i,l]);typeof r=="string"&&(r=cr(r));let{pathname:u="/",search:f="",hash:p="",state:h=null,key:g="default"}=r,v=E.useMemo(()=>{let A=Lu(u,a);return A==null?null:{location:{pathname:A,search:f,hash:p,state:h,key:g},navigationType:o}},[a,u,f,p,h,g,o]);return v==null?null:E.createElement(dr.Provider,{value:s},E.createElement(Sl.Provider,{children:n,value:v}))}function oA(e){let{children:t,location:n}=e;return V0(ms(t),n)}var od;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(od||(od={}));new Promise(()=>{});function ms(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,o)=>{if(!E.isValidElement(r))return;let i=[...t,o];if(r.type===E.Fragment){n.push.apply(n,ms(r.props.children,i));return}r.type!==gs&&le(!1),!r.props.index||!r.props.children||le(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ms(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vs(){return vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vs.apply(this,arguments)}function iA(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function lA(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function aA(e,t){return e.button===0&&(!t||t==="_self")&&!lA(e)}const sA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],uA="startTransition",id=gg[uA];function cA(e){let{basename:t,children:n,future:r,window:o}=e,i=E.useRef();i.current==null&&(i.current=v0({window:o,v5Compat:!0}));let l=i.current,[a,s]=E.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},f=E.useCallback(p=>{u&&id?id(()=>s(p)):s(p)},[s,u]);return E.useLayoutEffect(()=>l.listen(f),[l,f]),E.createElement(rA,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l})}const dA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pA=E.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:s,to:u,preventScrollReset:f}=t,p=iA(t,sA),{basename:h}=E.useContext(dr),g,v=!1;if(typeof u=="string"&&fA.test(u)&&(g=u,dA))try{let d=new URL(window.location.href),m=u.startsWith("//")?new URL(d.protocol+u):new URL(u),y=Lu(m.pathname,h);m.origin===d.origin&&y!=null?u=y+m.search+m.hash:v=!0}catch{}let A=W0(u,{relative:o}),b=hA(u,{replace:l,state:a,target:s,preventScrollReset:f,relative:o});function c(d){r&&r(d),d.defaultPrevented||b(d)}return E.createElement("a",vs({},p,{href:g||A,onClick:v||i?r:c,ref:n,target:s}))});var ld;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(ld||(ld={}));var ad;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ad||(ad={}));function hA(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l}=t===void 0?{}:t,a=bh(),s=El(),u=wh(e,{relative:l});return E.useCallback(f=>{if(aA(f,n)){f.preventDefault();let p=r!==void 0?r:Pi(s)===Pi(u);a(e,{replace:p,state:o,preventScrollReset:i,relative:l})}},[s,a,u,r,o,n,e,i,l])}function Sh(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Sh(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Mt(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Sh(e))&&(r&&(r+=" "),r+=t);return r}const Br=e=>typeof e=="number"&&!isNaN(e),xn=e=>typeof e=="string",Pe=e=>typeof e=="function",ni=e=>xn(e)||Pe(e)?e:null,ra=e=>E.isValidElement(e)||xn(e)||Pe(e)||Br(e);function gA(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function kl(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(l){let{children:a,position:s,preventExitTransition:u,done:f,nodeRef:p,isIn:h}=l;const g=r?`${t}--${s}`:t,v=r?`${n}--${s}`:n,A=E.useRef(0);return E.useLayoutEffect(()=>{const b=p.current,c=g.split(" "),d=m=>{m.target===p.current&&(b.dispatchEvent(new Event("d")),b.removeEventListener("animationend",d),b.removeEventListener("animationcancel",d),A.current===0&&m.type!=="animationcancel"&&b.classList.remove(...c))};b.classList.add(...c),b.addEventListener("animationend",d),b.addEventListener("animationcancel",d)},[]),E.useEffect(()=>{const b=p.current,c=()=>{b.removeEventListener("animationend",c),o?gA(b,f,i):f()};h||(u?c():(A.current=1,b.className+=` ${v}`,b.addEventListener("animationend",c)))},[h]),D.createElement(D.Fragment,null,a)}}function sd(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const $e={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},Do=e=>{let{theme:t,type:n,...r}=e;return D.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},oa={info:function(e){return D.createElement(Do,{...e},D.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return D.createElement(Do,{...e},D.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return D.createElement(Do,{...e},D.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return D.createElement(Do,{...e},D.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return D.createElement("div",{className:"Toastify__spinner"})}};function mA(e){const[,t]=E.useReducer(g=>g+1,0),[n,r]=E.useState([]),o=E.useRef(null),i=E.useRef(new Map).current,l=g=>n.indexOf(g)!==-1,a=E.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:l,getToast:g=>i.get(g)}).current;function s(g){let{containerId:v}=g;const{limit:A}=a.props;!A||v&&a.containerId!==v||(a.count-=a.queue.length,a.queue=[])}function u(g){r(v=>g==null?[]:v.filter(A=>A!==g))}function f(){const{toastContent:g,toastProps:v,staleId:A}=a.queue.shift();h(g,v,A)}function p(g,v){let{delay:A,staleId:b,...c}=v;if(!ra(g)||function(O){return!o.current||a.props.enableMultiContainer&&O.containerId!==a.props.containerId||i.has(O.toastId)&&O.updateId==null}(c))return;const{toastId:d,updateId:m,data:y}=c,{props:w}=a,S=()=>u(d),C=m==null;C&&a.count++;const x={...w,style:w.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(c).filter(O=>{let[j,I]=O;return I!=null})),toastId:d,updateId:m,data:y,closeToast:S,isIn:!1,className:ni(c.className||w.toastClassName),bodyClassName:ni(c.bodyClassName||w.bodyClassName),progressClassName:ni(c.progressClassName||w.progressClassName),autoClose:!c.isLoading&&(N=c.autoClose,_=w.autoClose,N===!1||Br(N)&&N>0?N:_),deleteToast(){const O=sd(i.get(d),"removed");i.delete(d),$e.emit(4,O);const j=a.queue.length;if(a.count=d==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),j>0){const I=d==null?a.props.limit:1;if(j===1||I===1)a.displayedToast++,f();else{const Y=I>j?j:I;a.displayedToast=Y;for(let te=0;te<Y;te++)f()}}else t()}};var N,_;x.iconOut=function(O){let{theme:j,type:I,isLoading:Y,icon:te}=O,fe=null;const L={theme:j,type:I};return te===!1||(Pe(te)?fe=te(L):E.isValidElement(te)?fe=E.cloneElement(te,L):xn(te)||Br(te)?fe=te:Y?fe=oa.spinner():(R=>R in oa)(I)&&(fe=oa[I](L))),fe}(x),Pe(c.onOpen)&&(x.onOpen=c.onOpen),Pe(c.onClose)&&(x.onClose=c.onClose),x.closeButton=w.closeButton,c.closeButton===!1||ra(c.closeButton)?x.closeButton=c.closeButton:c.closeButton===!0&&(x.closeButton=!ra(w.closeButton)||w.closeButton);let T=g;E.isValidElement(g)&&!xn(g.type)?T=E.cloneElement(g,{closeToast:S,toastProps:x,data:y}):Pe(g)&&(T=g({closeToast:S,toastProps:x,data:y})),w.limit&&w.limit>0&&a.count>w.limit&&C?a.queue.push({toastContent:T,toastProps:x,staleId:b}):Br(A)?setTimeout(()=>{h(T,x,b)},A):h(T,x,b)}function h(g,v,A){const{toastId:b}=v;A&&i.delete(A);const c={content:g,props:v};i.set(b,c),r(d=>[...d,b].filter(m=>m!==A)),$e.emit(4,sd(c,c.props.updateId==null?"added":"updated"))}return E.useEffect(()=>(a.containerId=e.containerId,$e.cancelEmit(3).on(0,p).on(1,g=>o.current&&u(g)).on(5,s).emit(2,a),()=>{i.clear(),$e.emit(3,a)}),[]),E.useEffect(()=>{a.props=e,a.isToastActive=l,a.displayedToast=n.length}),{getToastToRender:function(g){const v=new Map,A=Array.from(i.values());return e.newestOnTop&&A.reverse(),A.forEach(b=>{const{position:c}=b.props;v.has(c)||v.set(c,[]),v.get(c).push(b)}),Array.from(v,b=>g(b[0],b[1]))},containerRef:o,isToastActive:l}}function ud(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function cd(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function vA(e){const[t,n]=E.useState(!1),[r,o]=E.useState(!1),i=E.useRef(null),l=E.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=E.useRef(e),{autoClose:s,pauseOnHover:u,closeToast:f,onClick:p,closeOnClick:h}=e;function g(y){if(e.draggable){y.nativeEvent.type==="touchstart"&&y.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",c),document.addEventListener("mouseup",d),document.addEventListener("touchmove",c),document.addEventListener("touchend",d);const w=i.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=w.getBoundingClientRect(),w.style.transition="",l.x=ud(y.nativeEvent),l.y=cd(y.nativeEvent),e.draggableDirection==="x"?(l.start=l.x,l.removalDistance=w.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=w.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function v(y){if(l.boundingRect){const{top:w,bottom:S,left:C,right:x}=l.boundingRect;y.nativeEvent.type!=="touchend"&&e.pauseOnHover&&l.x>=C&&l.x<=x&&l.y>=w&&l.y<=S?b():A()}}function A(){n(!0)}function b(){n(!1)}function c(y){const w=i.current;l.canDrag&&w&&(l.didMove=!0,t&&b(),l.x=ud(y),l.y=cd(y),l.delta=e.draggableDirection==="x"?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),w.style.transform=`translate${e.draggableDirection}(${l.delta}px)`,w.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function d(){document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",d),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",d);const y=i.current;if(l.canDrag&&l.didMove&&y){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return o(!0),void e.closeToast();y.style.transition="transform 0.2s, opacity 0.2s",y.style.transform=`translate${e.draggableDirection}(0)`,y.style.opacity="1"}}E.useEffect(()=>{a.current=e}),E.useEffect(()=>(i.current&&i.current.addEventListener("d",A,{once:!0}),Pe(e.onOpen)&&e.onOpen(E.isValidElement(e.children)&&e.children.props),()=>{const y=a.current;Pe(y.onClose)&&y.onClose(E.isValidElement(y.children)&&y.children.props)}),[]),E.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||b(),window.addEventListener("focus",A),window.addEventListener("blur",b)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",A),window.removeEventListener("blur",b))}),[e.pauseOnFocusLoss]);const m={onMouseDown:g,onTouchStart:g,onMouseUp:v,onTouchEnd:v};return s&&u&&(m.onMouseEnter=b,m.onMouseLeave=A),h&&(m.onClick=y=>{p&&p(y),l.canCloseOnClick&&f()}),{playToast:A,pauseToast:b,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:m}}function Eh(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return D.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:o=>{o.stopPropagation(),t(o)},"aria-label":r},D.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},D.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function AA(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:l,style:a,controlledProgress:s,progress:u,rtl:f,isIn:p,theme:h}=e;const g=i||s&&u===0,v={...a,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};s&&(v.transform=`scaleX(${u})`);const A=Mt("Toastify__progress-bar",s?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":f}),b=Pe(l)?l({rtl:f,type:o,defaultClassName:A}):Mt(A,l);return D.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:b,style:v,[s&&u>=1?"onTransitionEnd":"onAnimationEnd"]:s&&u<1?null:()=>{p&&r()}})}const yA=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o}=vA(e),{closeButton:i,children:l,autoClose:a,onClick:s,type:u,hideProgressBar:f,closeToast:p,transition:h,position:g,className:v,style:A,bodyClassName:b,bodyStyle:c,progressClassName:d,progressStyle:m,updateId:y,role:w,progress:S,rtl:C,toastId:x,deleteToast:N,isIn:_,isLoading:T,iconOut:O,closeOnClick:j,theme:I}=e,Y=Mt("Toastify__toast",`Toastify__toast-theme--${I}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":j}),te=Pe(v)?v({rtl:C,position:g,type:u,defaultClassName:Y}):Mt(Y,v),fe=!!S||!a,L={closeToast:p,type:u,theme:I};let R=null;return i===!1||(R=Pe(i)?i(L):E.isValidElement(i)?E.cloneElement(i,L):Eh(L)),D.createElement(h,{isIn:_,done:N,position:g,preventExitTransition:n,nodeRef:r},D.createElement("div",{id:x,onClick:s,className:te,...o,style:A,ref:r},D.createElement("div",{..._&&{role:w},className:Pe(b)?b({type:u}):Mt("Toastify__toast-body",b),style:c},O!=null&&D.createElement("div",{className:Mt("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!T})},O),D.createElement("div",null,l)),R,D.createElement(AA,{...y&&!fe?{key:`pb-${y}`}:{},rtl:C,theme:I,delay:a,isRunning:t,isIn:_,closeToast:p,hide:f,type:u,style:m,className:d,controlledProgress:fe,progress:S||0})))},Cl=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},bA=kl(Cl("bounce",!0));kl(Cl("slide",!0));kl(Cl("zoom"));kl(Cl("flip"));const As=E.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:o}=mA(e),{className:i,style:l,rtl:a,containerId:s}=e;function u(f){const p=Mt("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":a});return Pe(i)?i({position:f,rtl:a,defaultClassName:p}):Mt(p,ni(i))}return E.useEffect(()=>{t&&(t.current=r.current)},[]),D.createElement("div",{ref:r,className:"Toastify",id:s},n((f,p)=>{const h=p.length?{...l}:{...l,pointerEvents:"none"};return D.createElement("div",{className:u(f),style:h,key:`container-${f}`},p.map((g,v)=>{let{content:A,props:b}=g;return D.createElement(yA,{...b,isIn:o(b.toastId),style:{...b.style,"--nth":v+1,"--len":p.length},key:`toast-${b.key}`},A)}))}))});As.displayName="ToastContainer",As.defaultProps={position:"top-right",transition:bA,autoClose:5e3,closeButton:Eh,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let ia,un=new Map,Pr=[],wA=1;function kh(){return""+wA++}function xA(e){return e&&(xn(e.toastId)||Br(e.toastId))?e.toastId:kh()}function $r(e,t){return un.size>0?$e.emit(0,e,t):Pr.push({content:e,options:t}),t.toastId}function _i(e,t){return{...t,type:t&&t.type||e,toastId:xA(t)}}function Fo(e){return(t,n)=>$r(t,_i(e,n))}function H(e,t){return $r(e,_i("default",t))}H.loading=(e,t)=>$r(e,_i("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),H.promise=function(e,t,n){let r,{pending:o,error:i,success:l}=t;o&&(r=xn(o)?H.loading(o,n):H.loading(o.render,{...n,...o}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(f,p,h)=>{if(p==null)return void H.dismiss(r);const g={type:f,...a,...n,data:h},v=xn(p)?{render:p}:p;return r?H.update(r,{...g,...v}):H(v.render,{...g,...v}),h},u=Pe(e)?e():e;return u.then(f=>s("success",l,f)).catch(f=>s("error",i,f)),u},H.success=Fo("success"),H.info=Fo("info"),H.error=Fo("error"),H.warning=Fo("warning"),H.warn=H.warning,H.dark=(e,t)=>$r(e,_i("default",{theme:"dark",...t})),H.dismiss=e=>{un.size>0?$e.emit(1,e):Pr=Pr.filter(t=>e!=null&&t.options.toastId!==e)},H.clearWaitingQueue=function(e){return e===void 0&&(e={}),$e.emit(5,e)},H.isActive=e=>{let t=!1;return un.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},H.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(r,o){let{containerId:i}=o;const l=un.get(i||ia);return l&&l.getToast(r)}(e,t);if(n){const{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:kh()};i.toastId!==e&&(i.staleId=e);const l=i.render||o;delete i.render,$r(l,i)}},0)},H.done=e=>{H.update(e,{progress:1})},H.onChange=e=>($e.on(4,e),()=>{$e.off(4,e)}),H.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},H.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},$e.on(2,e=>{ia=e.containerId||e,un.set(ia,e),Pr.forEach(t=>{$e.emit(0,t.content,t.options)}),Pr=[]}).on(3,e=>{un.delete(e.containerId||e),un.size===0&&$e.off(0).off(1).off(5)});const SA="_footer_xb596_1",EA="_link_xb596_16",dd={footer:SA,link:EA};function kA(){return k.jsxs("footer",{className:dd.footer,children:[k.jsx("p",{children:"Этот бесплатный шаблон создан для легкого базового оформления тренингов на GetCourse."}),k.jsxs("p",{children:["Еще больше интересного дизайна GetCourse ",k.jsx("br",{}),k.jsx("a",{href:"/",className:dd.link,children:"у нас на воркшопах"})]})]})}const CA="/free-template/assets/logo-d7207705.svg",TA="_header_1rsjr_1",PA="_logo_1rsjr_10",la={header:TA,logo:PA};function OA(){return k.jsxs("header",{className:la.header,children:[k.jsx("img",{className:la.logo,src:CA,alt:"humans",width:"149",height:"33"}),k.jsx("h1",{className:la.h1,children:"Шаблон оформления тренингов"})]})}var Ch={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var l=typeof i;if(l==="string"||l==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var a=n.apply(null,i);a&&r.push(a)}}else if(l==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var s in i)t.call(i,s)&&i[s]&&r.push(s)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Ch);var _A=Ch.exports;const dt=Id(_A),ju=()=>m0(),tn=Zv;function Je(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Yt(e){return!!e&&!!e[K]}function xt(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===FA}(e)||Array.isArray(e)||!!e[Ad]||!!(!((t=e.constructor)===null||t===void 0)&&t[Ad])||Mu(e)||Ru(e))}function Sn(e,t,n){n===void 0&&(n=!1),fr(e)===0?(n?Object.keys:Yn)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function fr(e){var t=e[K];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Mu(e)?2:Ru(e)?3:0}function qn(e,t){return fr(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function LA(e,t){return fr(e)===2?e.get(t):e[t]}function Th(e,t,n){var r=fr(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Ph(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Mu(e){return IA&&e instanceof Map}function Ru(e){return DA&&e instanceof Set}function cn(e){return e.o||e.t}function zu(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=_h(e);delete t[K];for(var n=Yn(t),r=0;r<n.length;r++){var o=n[r],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function Iu(e,t){return t===void 0&&(t=!1),Du(e)||Yt(e)||!xt(e)||(fr(e)>1&&(e.set=e.add=e.clear=e.delete=NA),Object.freeze(e),t&&Sn(e,function(n,r){return Iu(r,!0)},!0)),e}function NA(){Je(2)}function Du(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function ct(e){var t=xs[e];return t||Je(18,e),t}function jA(e,t){xs[e]||(xs[e]=t)}function ys(){return so}function aa(e,t){t&&(ct("Patches"),e.u=[],e.s=[],e.v=t)}function Li(e){bs(e),e.p.forEach(MA),e.p=null}function bs(e){e===so&&(so=e.l)}function fd(e){return so={p:[],l:so,h:e,m:!0,_:0}}function MA(e){var t=e[K];t.i===0||t.i===1?t.j():t.g=!0}function sa(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||ct("ES5").S(t,e,r),r?(n[K].P&&(Li(t),Je(4)),xt(e)&&(e=Ni(t,e),t.l||ji(t,e)),t.u&&ct("Patches").M(n[K].t,e,t.u,t.s)):e=Ni(t,n,[]),Li(t),t.u&&t.v(t.u,t.s),e!==Oh?e:void 0}function Ni(e,t,n){if(Du(t))return t;var r=t[K];if(!r)return Sn(t,function(a,s){return pd(e,r,t,a,s,n)},!0),t;if(r.A!==e)return t;if(!r.P)return ji(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=zu(r.k):r.o,i=o,l=!1;r.i===3&&(i=new Set(o),o.clear(),l=!0),Sn(i,function(a,s){return pd(e,r,o,a,s,n,l)}),ji(e,o,!1),n&&e.u&&ct("Patches").N(r,n,e.u,e.s)}return r.o}function pd(e,t,n,r,o,i,l){if(Yt(o)){var a=Ni(e,o,i&&t&&t.i!==3&&!qn(t.R,r)?i.concat(r):void 0);if(Th(n,r,a),!Yt(a))return;e.m=!1}else l&&n.add(o);if(xt(o)&&!Du(o)){if(!e.h.D&&e._<1)return;Ni(e,o),t&&t.A.l||ji(e,o)}}function ji(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Iu(t,n)}function ua(e,t){var n=e[K];return(n?cn(n):e)[t]}function hd(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function _t(e){e.P||(e.P=!0,e.l&&_t(e.l))}function ca(e){e.o||(e.o=zu(e.t))}function ws(e,t,n){var r=Mu(t)?ct("MapSet").F(t,n):Ru(t)?ct("MapSet").T(t,n):e.O?function(o,i){var l=Array.isArray(o),a={i:l?1:0,A:i?i.A:ys(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},s=a,u=uo;l&&(s=[a],u=Or);var f=Proxy.revocable(s,u),p=f.revoke,h=f.proxy;return a.k=h,a.j=p,h}(t,n):ct("ES5").J(t,n);return(n?n.A:ys()).p.push(r),r}function RA(e){return Yt(e)||Je(22,e),function t(n){if(!xt(n))return n;var r,o=n[K],i=fr(n);if(o){if(!o.P&&(o.i<4||!ct("ES5").K(o)))return o.t;o.I=!0,r=gd(n,i),o.I=!1}else r=gd(n,i);return Sn(r,function(l,a){o&&LA(o.t,l)===a||Th(r,l,t(a))}),i===3?new Set(r):r}(e)}function gd(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return zu(e)}function zA(){function e(i,l){var a=o[i];return a?a.enumerable=l:o[i]=a={configurable:!0,enumerable:l,get:function(){var s=this[K];return uo.get(s,i)},set:function(s){var u=this[K];uo.set(u,i,s)}},a}function t(i){for(var l=i.length-1;l>=0;l--){var a=i[l][K];if(!a.P)switch(a.i){case 5:r(a)&&_t(a);break;case 4:n(a)&&_t(a)}}}function n(i){for(var l=i.t,a=i.k,s=Yn(a),u=s.length-1;u>=0;u--){var f=s[u];if(f!==K){var p=l[f];if(p===void 0&&!qn(l,f))return!0;var h=a[f],g=h&&h[K];if(g?g.t!==p:!Ph(h,p))return!0}}var v=!!l[K];return s.length!==Yn(l).length+(v?0:1)}function r(i){var l=i.k;if(l.length!==i.t.length)return!0;var a=Object.getOwnPropertyDescriptor(l,l.length-1);if(a&&!a.get)return!0;for(var s=0;s<l.length;s++)if(!l.hasOwnProperty(s))return!0;return!1}var o={};jA("ES5",{J:function(i,l){var a=Array.isArray(i),s=function(f,p){if(f){for(var h=Array(p.length),g=0;g<p.length;g++)Object.defineProperty(h,""+g,e(g,!0));return h}var v=_h(p);delete v[K];for(var A=Yn(v),b=0;b<A.length;b++){var c=A[b];v[c]=e(c,f||!!v[c].enumerable)}return Object.create(Object.getPrototypeOf(p),v)}(a,i),u={i:a?5:4,A:l?l.A:ys(),P:!1,I:!1,R:{},l,t:i,k:s,o:null,g:!1,C:!1};return Object.defineProperty(s,K,{value:u,writable:!0}),s},S:function(i,l,a){a?Yt(l)&&l[K].A===i&&t(i.p):(i.u&&function s(u){if(u&&typeof u=="object"){var f=u[K];if(f){var p=f.t,h=f.k,g=f.R,v=f.i;if(v===4)Sn(h,function(m){m!==K&&(p[m]!==void 0||qn(p,m)?g[m]||s(h[m]):(g[m]=!0,_t(f)))}),Sn(p,function(m){h[m]!==void 0||qn(h,m)||(g[m]=!1,_t(f))});else if(v===5){if(r(f)&&(_t(f),g.length=!0),h.length<p.length)for(var A=h.length;A<p.length;A++)g[A]=!1;else for(var b=p.length;b<h.length;b++)g[b]=!0;for(var c=Math.min(h.length,p.length),d=0;d<c;d++)h.hasOwnProperty(d)||(g[d]=!0),g[d]===void 0&&s(h[d])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?n(i):r(i)}})}var md,so,Fu=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",IA=typeof Map<"u",DA=typeof Set<"u",vd=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Oh=Fu?Symbol.for("immer-nothing"):((md={})["immer-nothing"]=!0,md),Ad=Fu?Symbol.for("immer-draftable"):"__$immer_draftable",K=Fu?Symbol.for("immer-state"):"__$immer_state",FA=""+Object.prototype.constructor,Yn=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,_h=Object.getOwnPropertyDescriptors||function(e){var t={};return Yn(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},xs={},uo={get:function(e,t){if(t===K)return e;var n=cn(e);if(!qn(n,t))return function(o,i,l){var a,s=hd(i,l);return s?"value"in s?s.value:(a=s.get)===null||a===void 0?void 0:a.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!xt(r)?r:r===ua(e.t,t)?(ca(e),e.o[t]=ws(e.A.h,r,e)):r},has:function(e,t){return t in cn(e)},ownKeys:function(e){return Reflect.ownKeys(cn(e))},set:function(e,t,n){var r=hd(cn(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=ua(cn(e),t),i=o==null?void 0:o[K];if(i&&i.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Ph(n,o)&&(n!==void 0||qn(e.t,t)))return!0;ca(e),_t(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return ua(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,ca(e),_t(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=cn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Je(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Je(12)}},Or={};Sn(uo,function(e,t){Or[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Or.deleteProperty=function(e,t){return Or.set.call(this,e,t,void 0)},Or.set=function(e,t,n){return uo.set.call(this,e[0],t,n,e[0])};var BA=function(){function e(n){var r=this;this.O=vd,this.D=!0,this.produce=function(o,i,l){if(typeof o=="function"&&typeof i!="function"){var a=i;i=o;var s=r;return function(A){var b=this;A===void 0&&(A=a);for(var c=arguments.length,d=Array(c>1?c-1:0),m=1;m<c;m++)d[m-1]=arguments[m];return s.produce(A,function(y){var w;return(w=i).call.apply(w,[b,y].concat(d))})}}var u;if(typeof i!="function"&&Je(6),l!==void 0&&typeof l!="function"&&Je(7),xt(o)){var f=fd(r),p=ws(r,o,void 0),h=!0;try{u=i(p),h=!1}finally{h?Li(f):bs(f)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(A){return aa(f,l),sa(A,f)},function(A){throw Li(f),A}):(aa(f,l),sa(u,f))}if(!o||typeof o!="object"){if((u=i(o))===void 0&&(u=o),u===Oh&&(u=void 0),r.D&&Iu(u,!0),l){var g=[],v=[];ct("Patches").M(o,u,g,v),l(g,v)}return u}Je(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(u){for(var f=arguments.length,p=Array(f>1?f-1:0),h=1;h<f;h++)p[h-1]=arguments[h];return r.produceWithPatches(u,function(g){return o.apply(void 0,[g].concat(p))})};var l,a,s=r.produce(o,i,function(u,f){l=u,a=f});return typeof Promise<"u"&&s instanceof Promise?s.then(function(u){return[u,l,a]}):[s,l,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){xt(n)||Je(8),Yt(n)&&(n=RA(n));var r=fd(this),o=ws(this,n,void 0);return o[K].C=!0,bs(r),o},t.finishDraft=function(n,r){var o=n&&n[K],i=o.A;return aa(i,r),sa(void 0,i)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!vd&&Je(20),this.O=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var i=r[o];if(i.path.length===0&&i.op==="replace"){n=i.value;break}}o>-1&&(r=r.slice(o+1));var l=ct("Patches").$;return Yt(n)?l(n,r):this.produce(n,function(a){return l(a,r)})},e}(),Ie=new BA,Lh=Ie.produce;Ie.produceWithPatches.bind(Ie);Ie.setAutoFreeze.bind(Ie);Ie.setUseProxies.bind(Ie);Ie.applyPatches.bind(Ie);Ie.createDraft.bind(Ie);Ie.finishDraft.bind(Ie);function co(e){"@babel/helpers - typeof";return co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},co(e)}function $A(e,t){if(co(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(co(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function UA(e){var t=$A(e,"string");return co(t)==="symbol"?t:String(t)}function WA(e,t,n){return t=UA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function bd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yd(Object(n),!0).forEach(function(r){WA(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ae(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var wd=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),da=function(){return Math.random().toString(36).substring(7).split("").join(".")},Mi={INIT:"@@redux/INIT"+da(),REPLACE:"@@redux/REPLACE"+da(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+da()}};function HA(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Nh(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ae(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ae(1));return n(Nh)(e,t)}if(typeof e!="function")throw new Error(Ae(2));var o=e,i=t,l=[],a=l,s=!1;function u(){a===l&&(a=l.slice())}function f(){if(s)throw new Error(Ae(3));return i}function p(A){if(typeof A!="function")throw new Error(Ae(4));if(s)throw new Error(Ae(5));var b=!0;return u(),a.push(A),function(){if(b){if(s)throw new Error(Ae(6));b=!1,u();var d=a.indexOf(A);a.splice(d,1),l=null}}}function h(A){if(!HA(A))throw new Error(Ae(7));if(typeof A.type>"u")throw new Error(Ae(8));if(s)throw new Error(Ae(9));try{s=!0,i=o(i,A)}finally{s=!1}for(var b=l=a,c=0;c<b.length;c++){var d=b[c];d()}return A}function g(A){if(typeof A!="function")throw new Error(Ae(10));o=A,h({type:Mi.REPLACE})}function v(){var A,b=p;return A={subscribe:function(d){if(typeof d!="object"||d===null)throw new Error(Ae(11));function m(){d.next&&d.next(f())}m();var y=b(m);return{unsubscribe:y}}},A[wd]=function(){return this},A}return h({type:Mi.INIT}),r={dispatch:h,subscribe:p,getState:f,replaceReducer:g},r[wd]=v,r}function VA(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Mi.INIT});if(typeof r>"u")throw new Error(Ae(12));if(typeof n(void 0,{type:Mi.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ae(13))})}function QA(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var i=Object.keys(n),l;try{VA(n)}catch(a){l=a}return function(s,u){if(s===void 0&&(s={}),l)throw l;for(var f=!1,p={},h=0;h<i.length;h++){var g=i[h],v=n[g],A=s[g],b=v(A,u);if(typeof b>"u")throw u&&u.type,new Error(Ae(14));p[g]=b,f=f||b!==A}return f=f||i.length!==Object.keys(s).length,f?p:s}}function Ri(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function GA(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(Ae(15))},l={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},a=t.map(function(s){return s(l)});return i=Ri.apply(void 0,a)(o.dispatch),bd(bd({},o),{},{dispatch:i})}}}function jh(e){var t=function(r){var o=r.dispatch,i=r.getState;return function(l){return function(a){return typeof a=="function"?a(o,i,e):l(a)}}};return t}var Mh=jh();Mh.withExtraArgument=jh;const xd=Mh;var Rh=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),XA=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,l;return l={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function a(u){return function(f){return s([u,f])}}function s(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(f){u=[6,f],o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},lr=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},KA=Object.defineProperty,qA=Object.defineProperties,YA=Object.getOwnPropertyDescriptors,Sd=Object.getOwnPropertySymbols,ZA=Object.prototype.hasOwnProperty,JA=Object.prototype.propertyIsEnumerable,Ed=function(e,t,n){return t in e?KA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Qt=function(e,t){for(var n in t||(t={}))ZA.call(t,n)&&Ed(e,n,t[n]);if(Sd)for(var r=0,o=Sd(t);r<o.length;r++){var n=o[r];JA.call(t,n)&&Ed(e,n,t[n])}return e},fa=function(e,t){return qA(e,YA(t))},ey=function(e,t,n){return new Promise(function(r,o){var i=function(s){try{a(n.next(s))}catch(u){o(u)}},l=function(s){try{a(n.throw(s))}catch(u){o(u)}},a=function(s){return s.done?r(s.value):Promise.resolve(s.value).then(i,l)};a((n=n.apply(e,t)).next())})},ty=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ri:Ri.apply(null,arguments)};function ny(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var ry=function(e){Rh(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,lr([void 0],n[0].concat(this)))):new(t.bind.apply(t,lr([void 0],n.concat(this))))},t}(Array),oy=function(e){Rh(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,lr([void 0],n[0].concat(this)))):new(t.bind.apply(t,lr([void 0],n.concat(this))))},t}(Array);function Ss(e){return xt(e)?Lh(e,function(){}):e}function iy(e){return typeof e=="boolean"}function ly(){return function(t){return ay(t)}}function ay(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new ry;return n&&(iy(n)?r.push(xd):r.push(xd.withExtraArgument(n.extraArgument))),r}var sy=!0;function uy(e){var t=ly(),n=e||{},r=n.reducer,o=r===void 0?void 0:r,i=n.middleware,l=i===void 0?t():i,a=n.devTools,s=a===void 0?!0:a,u=n.preloadedState,f=u===void 0?void 0:u,p=n.enhancers,h=p===void 0?void 0:p,g;if(typeof o=="function")g=o;else if(ny(o))g=QA(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=l;typeof v=="function"&&(v=v(t));var A=GA.apply(void 0,v),b=Ri;s&&(b=ty(Qt({trace:!sy},typeof s=="object"&&s)));var c=new oy(A),d=c;Array.isArray(h)?d=lr([A],h):typeof h=="function"&&(d=h(c));var m=b.apply(void 0,d);return Nh(g,f,m)}function Gt(e,t){function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(t){var i=t.apply(void 0,r);if(!i)throw new Error("prepareAction did not return an object");return Qt(Qt({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function zh(e){var t={},n=[],r,o={addCase:function(i,l){var a=typeof i=="string"?i:i.type;if(a in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[a]=l,o},addMatcher:function(i,l){return n.push({matcher:i,reducer:l}),o},addDefaultCase:function(i){return r=i,o}};return e(o),[t,n,r]}function cy(e){return typeof e=="function"}function dy(e,t,n,r){n===void 0&&(n=[]);var o=typeof t=="function"?zh(t):[t,n,r],i=o[0],l=o[1],a=o[2],s;if(cy(e))s=function(){return Ss(e())};else{var u=Ss(e);s=function(){return u}}function f(p,h){p===void 0&&(p=s());var g=lr([i[h.type]],l.filter(function(v){var A=v.matcher;return A(h)}).map(function(v){var A=v.reducer;return A}));return g.filter(function(v){return!!v}).length===0&&(g=[a]),g.reduce(function(v,A){if(A)if(Yt(v)){var b=v,c=A(b,h);return c===void 0?v:c}else{if(xt(v))return Lh(v,function(d){return A(d,h)});var c=A(v,h);if(c===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return c}return v},p)}return f.getInitialState=s,f}function fy(e,t){return e+"/"+t}function py(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Ss(e.initialState),r=e.reducers||{},o=Object.keys(r),i={},l={},a={};o.forEach(function(f){var p=r[f],h=fy(t,f),g,v;"reducer"in p?(g=p.reducer,v=p.prepare):g=p,i[f]=g,l[h]=g,a[f]=v?Gt(h,v):Gt(h)});function s(){var f=typeof e.extraReducers=="function"?zh(e.extraReducers):[e.extraReducers],p=f[0],h=p===void 0?{}:p,g=f[1],v=g===void 0?[]:g,A=f[2],b=A===void 0?void 0:A,c=Qt(Qt({},h),l);return dy(n,function(d){for(var m in c)d.addCase(m,c[m]);for(var y=0,w=v;y<w.length;y++){var S=w[y];d.addMatcher(S.matcher,S.reducer)}b&&d.addDefaultCase(b)})}var u;return{name:t,reducer:function(f,p){return u||(u=s()),u(f,p)},actions:a,caseReducers:i,getInitialState:function(){return u||(u=s()),u.getInitialState()}}}var hy="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",gy=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=hy[Math.random()*64|0];return t},my=["name","message","stack","code"],pa=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),kd=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),vy=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=my;n<r.length;n++){var o=r[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,n,r){var o=Gt(t+"/fulfilled",function(u,f,p,h){return{payload:u,meta:fa(Qt({},h||{}),{arg:p,requestId:f,requestStatus:"fulfilled"})}}),i=Gt(t+"/pending",function(u,f,p){return{payload:void 0,meta:fa(Qt({},p||{}),{arg:f,requestId:u,requestStatus:"pending"})}}),l=Gt(t+"/rejected",function(u,f,p,h,g){return{payload:h,error:(r&&r.serializeError||vy)(u||"Rejected"),meta:fa(Qt({},g||{}),{arg:p,requestId:f,rejectedWithValue:!!h,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function s(u){return function(f,p,h){var g=r!=null&&r.idGenerator?r.idGenerator(u):gy(),v=new a,A;function b(d){A=d,v.abort()}var c=function(){return ey(this,null,function(){var d,m,y,w,S,C,x;return XA(this,function(N){switch(N.label){case 0:return N.trys.push([0,4,,5]),w=(d=r==null?void 0:r.condition)==null?void 0:d.call(r,u,{getState:p,extra:h}),yy(w)?[4,w]:[3,2];case 1:w=N.sent(),N.label=2;case 2:if(w===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return S=new Promise(function(_,T){return v.signal.addEventListener("abort",function(){return T({name:"AbortError",message:A||"Aborted"})})}),f(i(g,u,(m=r==null?void 0:r.getPendingMeta)==null?void 0:m.call(r,{requestId:g,arg:u},{getState:p,extra:h}))),[4,Promise.race([S,Promise.resolve(n(u,{dispatch:f,getState:p,extra:h,requestId:g,signal:v.signal,abort:b,rejectWithValue:function(_,T){return new pa(_,T)},fulfillWithValue:function(_,T){return new kd(_,T)}})).then(function(_){if(_ instanceof pa)throw _;return _ instanceof kd?o(_.payload,g,u,_.meta):o(_,g,u)})])];case 3:return y=N.sent(),[3,5];case 4:return C=N.sent(),y=C instanceof pa?l(null,g,u,C.payload,C.meta):l(C,g,u),[3,5];case 5:return x=r&&!r.dispatchConditionRejection&&l.match(y)&&y.meta.condition,x||f(y),[2,y]}})})}();return Object.assign(c,{abort:b,requestId:g,arg:u,unwrap:function(){return c.then(Ay)}})}}return Object.assign(s,{pending:i,rejected:l,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function Ay(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function yy(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Bu="listenerMiddleware";Gt(Bu+"/add");Gt(Bu+"/removeAll");Gt(Bu+"/remove");var Cd;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);zA();const by={cardType:"rectangular",hasDescription:!0,hasButton:!0,hasButtonText:!0,buttonSize:"small",buttonPosition:"left",hasIcon:!0,iconPosition:"left",hasBackground:!1,hasImage:!0},Es=py({name:"FORM_DATA",initialState:by,reducers:{changeCardType:(e,{payload:t})=>{e.cardType=t,(e.hasBackground===!0||e.cardType==="square")&&(e.hasImage=!1),e.cardType==="narrow"&&(e.hasBackground=!1),e.hasButtonText===!1&&(e.hasIcon=!0)},changeCheckboxProperty:(e,{payload:t})=>{e[t]=!e[t],(e.hasBackground===!0||e.cardType==="square")&&(e.hasImage=!1),e.cardType==="narrow"&&(e.hasBackground=!1),e.hasButtonText===!1&&(e.hasIcon=!0)},changeRadioProperty:(e,{payload:t})=>({...e,...t})}}),{changeCardType:wy,changeCheckboxProperty:Ih,changeRadioProperty:xy}=Es.actions,yo=e=>e.FORM_DATA,Sy="_card_16qsi_1",Ey="_background_16qsi_12",ky="_description_16qsi_30",Cy="_title_16qsi_34",Ty="_rectangular_16qsi_40",Py="_wrapper_16qsi_49",Oy="_image_16qsi_55",_y="_button_16qsi_74",Ly="_square_16qsi_80",Ny="_narrow_16qsi_114",jy="_wide_16qsi_150",My="_buttonLeft_16qsi_197",Ry="_buttonRight_16qsi_201",ot={card:Sy,background:Ey,description:ky,title:Cy,rectangular:Ty,wrapper:Py,image:Oy,button:_y,square:Ly,narrow:Ny,wide:jy,buttonLeft:My,buttonRight:Ry},zy="_button_3ps3z_1",Iy="_small_3ps3z_23",Dy="_large_3ps3z_33",Fy="_icon_3ps3z_38",By="_iconLeft_3ps3z_38",$y="_iconRight_3ps3z_39",on={button:zy,small:Iy,default:"_default_3ps3z_28",large:Dy,icon:Fy,iconLeft:By,iconRight:$y};function Uy({className:e,children:t,...n}){const{hasButton:r,hasButtonText:o,buttonSize:i,hasIcon:l,iconPosition:a}=tn(yo);if(!r)return null;const s=dt(on.button,{[on.small]:!o,[on.default]:o&&i==="small",[on.large]:o&&i==="big",[on.icon]:l||!o,[on.iconLeft]:l&&a==="left",[on.iconRight]:l&&a==="right"},e);return k.jsx("button",{className:s,...n,children:o&&t})}const Wy="_description_4gevf_1",Hy={description:Wy};function Vy({className:e,children:t,...n}){const{hasDescription:r}=tn(yo);if(!r)return null;const o=dt(Hy.description,e);return k.jsx("p",{className:o,...n,children:t})}const Qy="/free-template/assets/card-picture-40f23472.jpg",Gy={};function Xy({className:e}){const{hasBackground:t,hasImage:n}=tn(yo);if(t||!n)return null;const r=dt(Gy.image,e);return k.jsx("img",{src:Qy,className:r,alt:"Пример изображения"})}const Ky="_title_1m020_1",qy={title:Ky};function Yy({className:e,children:t,...n}){const r=dt(qy.title,e);return k.jsx("h3",{className:r,...n,children:t})}function _n(){const{cardType:e,hasBackground:t,buttonPosition:n}=tn(yo),r=ot[e],o=dt(ot.card,r,{[ot.background]:e!=="narrow"&&t,[ot.buttonLeft]:n==="left",[ot.buttonRight]:n==="right"});return k.jsxs("article",{className:o,children:[k.jsx(Xy,{className:ot.image}),k.jsxs("div",{className:ot.wrapper,children:[k.jsx(Yy,{className:ot.title,children:"Заголовок модуля в пару строк"}),k.jsx(Vy,{className:ot.description,children:"Corem ipsum dolor sit amet, consectetur adipiscing elit."}),k.jsx(Uy,{className:ot.button,children:"Перейти"})]})]})}const Zy="_controlPanel_yci7j_1",Jy={controlPanel:Zy},e1="_checkbox_1v5fj_1",t1="_input_1v5fj_12",n1="_slider_1v5fj_22",r1="_text_1v5fj_48",Bo={checkbox:e1,input:t1,slider:n1,text:r1};function Wn({children:e,...t}){return k.jsxs("label",{className:Bo.checkbox,children:[k.jsx("input",{type:"checkbox",className:Bo.input,...t}),k.jsx("div",{className:Bo.slider}),e&&k.jsx("span",{className:Bo.text,children:e})]})}const o1="_wrapper_1pr71_1",i1="_radio_1pr71_6",l1="_radios_1pr71_18",a1="_text_1pr71_25",s1="_input_1pr71_31",u1="_box_1pr71_41",mn={wrapper:o1,radio:i1,radios:l1,text:a1,input:s1,box:u1};function c1({name:e,value:t,leftValue:n,rightValue:r,leftText:o,rightText:i,onChange:l}){return k.jsxs("div",{className:mn.wrapper,children:[k.jsxs("div",{className:mn.radios,children:[k.jsx(Td,{name:e,label:o,value:n,checked:n===t,element:k.jsx(d1,{}),onChange:l}),k.jsx(Td,{name:e,label:i,value:r,checked:r===t,element:k.jsx(f1,{}),onChange:l})]}),k.jsx("span",{className:mn.text,children:"Расположение кнопки"})]})}function Td({element:e,label:t,...n}){return k.jsxs("label",{className:mn.radio,children:[k.jsx("input",{type:"radio",className:mn.input,...n}),e,k.jsx("span",{className:"visually-hidden",children:t})]})}function d1(){return k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:mn.box,width:"24",height:"24",fill:"none",children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m12 8-4 4m0 0 4 4m-4-4h8m-8.2 9h8.4c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17V7.8c0-1.68 0-2.52-.33-3.16a3 3 0 0 0-1.3-1.31C18.71 3 17.87 3 16.2 3H7.8c-1.68 0-2.52 0-3.16.33a3 3 0 0 0-1.31 1.3C3 5.29 3 6.13 3 7.8v8.4c0 1.68 0 2.52.33 3.16a3 3 0 0 0 1.3 1.31c.65.33 1.49.33 3.17.33Z"})})}function f1(){return k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:mn.box,width:"24",height:"24",fill:"none",children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m12 16 4-4m0 0-4-4m4 4H8m-.2 9h8.4c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17V7.8c0-1.68 0-2.52-.33-3.16a3 3 0 0 0-1.3-1.31C18.71 3 17.87 3 16.2 3H7.8c-1.68 0-2.52 0-3.16.33a3 3 0 0 0-1.31 1.3C3 5.29 3 6.13 3 7.8v8.4c0 1.68 0 2.52.33 3.16a3 3 0 0 0 1.3 1.31c.65.33 1.49.33 3.17.33Z"})})}const p1="_wrapper_dfncv_1",h1="_radio_dfncv_8",g1="_input_dfncv_20",m1="_box_dfncv_30",v1="_text_dfncv_44",_r={wrapper:p1,radio:h1,input:g1,box:m1,text:v1};function Pd({name:e,leftValue:t,rightValue:n,value:r,leftText:o,rightText:i,className:l,onChange:a}){const s=dt(_r.wrapper,l);return k.jsxs("div",{className:s,children:[k.jsx(Od,{name:e,value:t,label:o,checked:r===t,onChange:a}),k.jsx(Od,{name:e,value:n,label:i,checked:r===n,onChange:a})]})}function Od({label:e,...t}){return k.jsxs("label",{className:_r.radio,children:[k.jsx("input",{type:"radio",className:_r.input,...t}),k.jsx("span",{className:_r.box}),k.jsx("span",{className:_r.text,children:e})]})}const A1="_wrapper_74j6e_1",y1="_title_74j6e_9",b1="_row_74j6e_13",wr={wrapper:A1,title:y1,row:b1};function w1(){const e=ju(),t=tn(h=>h.FORM_DATA),{cardType:n,hasButton:r,hasIcon:o,hasButtonText:i,buttonSize:l,iconPosition:a,buttonPosition:s,hasBackground:u}=t;if(r===!1)return null;const f=h=>{const g=h.target.value;e(Ih(g))},p=h=>{const{name:g,value:v}=h.target;e(xy({[g]:v}))};return k.jsxs("div",{className:wr.wrapper,children:[k.jsxs("div",{className:wr.row,children:[k.jsx("h3",{className:wr.title,children:"Вид кнопки"}),i&&k.jsx(Pd,{onChange:p,name:"buttonSize",value:l,leftValue:"big",rightValue:"small",leftText:"Большая",rightText:"Маленькая"})]}),k.jsxs("div",{className:wr.row,children:[k.jsx(Wn,{value:"hasIcon",checked:o,onChange:f,children:"Иконка"}),o&&i&&k.jsx(Pd,{onChange:p,name:"iconPosition",value:a,leftValue:"left",rightValue:"right",leftText:"Слева",rightText:"Справа"})]}),k.jsx("div",{className:wr.row,children:k.jsx(Wn,{value:"hasButtonText",checked:i,onChange:f,children:"Текст"})}),n==="wide"&&u&&k.jsx(c1,{name:"buttonPosition",value:s,leftValue:"left",rightValue:"right",leftText:"Слева",rightText:"Справа",onChange:p})]})}const x1="_title_1yw2b_1",S1="_list_1yw2b_5",ha={title:x1,list:S1};function E1(){const e=ju(),t=tn(s=>s.FORM_DATA),{cardType:n,hasBackground:r,hasButton:o,hasDescription:i,hasImage:l}=t,a=s=>{const u=s.target.value;e(Ih(u))};return k.jsxs("div",{className:ha.wrapper,children:[k.jsx("h3",{className:ha.title,children:"Настройки карточки"}),k.jsxs("div",{className:ha.list,children:[n!=="narrow"&&k.jsx(Wn,{value:"hasBackground",checked:r,onChange:a,children:"Фоновое изображение"}),n!=="square"&&k.jsx(Wn,{value:"hasImage",checked:l,onChange:a,children:"Изображение в карточке"}),k.jsx(Wn,{value:"hasDescription",checked:i,onChange:a,children:"Описание"}),k.jsx(Wn,{value:"hasButton",checked:o,onChange:a,children:"Кнопка"})]})]})}const Tl=e=>{const{hasBackground:t,cardType:n}=e;let r="#ffffff",o="#323232",i="#777777";return t===!0&&(r=n==="wide"?"url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/246/h/4eb5388ec0affb1a8192f36e52547f4a.png)":"url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/41/h/dd3c72505a70573840f84a7305a8b2f0.png)",o="#ffffff",i="#ffffff"),{cardBg:r,titleColor:o,descriptionColor:i}},k1=e=>{const{cardBg:t,descriptionColor:n,titleColor:r}=Tl(e);return`
#heavy-cards {
  --font-family: sans-serif;
  --color-list-bg: transparent;
  --card-bg: ${t};
  --color-title: ${r};
  --color-description: ${n};
  --color-button-bg: rgba(131, 136, 255, 1);
  --color-button-text: #ffffff;
  --color-button-hover-bg: rgba(97, 102, 237, 1);
  --color-button-disable-bg: #2f2f2f;
  --color-button-disable-text: #ffffff;

  --card-radius: 0px;
  --button-radius: 0px;
  --image-radius: 0px;

  --shadow-card: 0px 0px 10px rgba(0,0,0, 0.3);
  --shadow-card-hover: 0px 0px 15px rgba(0,0,0, 0.2);  

  --small-button-icon: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg);
  --small-button-icon-disable: url();

  --url-button-icon-left: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg);
  --url-button-icon-left-disable: url();
  --url-button-icon-right: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg);
  --url-button-icon-right-disable: url();

  --url-all-trainings-image: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/41/h/dd3c72505a70573840f84a7305a8b2f0.png);
}
#heavy-cards * {
  font-family: var(--font-family);
}
#heavy-cards .stream-table {
  width: 100%;
  margin-bottom: 0px;
  margin-left: 0px;
  background: var(--color-list-bg);
}
#heavy-cards .stream-table tbody {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
#heavy-cards .stream-table tr {
  width: 100%;
  display: block;
}
#heavy-cards .stream-table tr td {
  padding: 0px;
  width: 100%;
  display: block;
  height: 100%;
  min-height: 280px;
  opacity: 1;
}
#heavy-cards .stream-table tr td:hover {
  background: transparent;
}
#heavy-cards .stream-table tr td a {
  height: 100%;
  min-height: 280px;
  border-radius: var(--card-radius);
  background: var(--card-bg) no-repeat center / cover;
  padding: 24px;
  padding-right: 304px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  box-shadow: var(--shadow-card);
}
#heavy-cards .stream-table tr td a:hover {
  box-shadow: var(--shadow-card-hover);
}
/* different bg, need to change training's id */
/*
#heavy-cards .stream-table tr[data-training-id={ID}] td a {
    background-image: url({LINK});
}
*/
#heavy-cards .stream-title {
  color: var(--color-title);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 16px;
}
#heavy-cards .stream-table tr td a > div {
  color: var(--color-description);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 24px;
}

/* background-image */
#heavy-cards .stream-table tr.background-image td a {
  padding-right: 24px;
}

/* hide description */
.no-description td a > div {
  display: none;
}

/* add image */
.add-image a::before {
  content: '';
  width: 280px;
  height: 100%;
  border-radius: var(--image-radius);
  background: no-repeat center / cover;
  flex-shrink: 0;
  position: absolute;
  top: 0px;
  right: 0px;
}
/* one image for all trainings */
.add-image a::before {
  background-image: var(--url-all-trainings-image);
}

/* different images, need to change training's id */
.add-image[data-training-id='777477771'] a::before {
  background-image: url(https://images.unsplash.com/photo-1687253363472-cfd93fdb2580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80);
}

@media (max-width: 600px) {
  .add-image a::before {
    width: 140px;
  }
  #heavy-cards .stream-table tr.add-image td a {
    padding-right: 164px;
  }
}
@media (max-width: 480px) {
  .add-image a::before {
    width: 100%;
    height: 280px;
  }
  #heavy-cards .stream-table tr.add-image td a {
    padding-right: 24px;
    padding-top: 304px;
  }
}

/* hide button */
.no-button button {
  display: none;
}

/* buttons */
/* button large */
.button-large button {
  border-radius: var(--button-radius);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 220px;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-large button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-large button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}

/* button large with left icon */
.button-large-left-icon button {
  border-radius: var(--button-radius);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-large-left-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}
.button-large-left-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-large-left-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disabled-text);
}
.noaccess-mode-show.button-large-right-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}

/* button large with right icon */
.button-large-right-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-large-right-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}
.button-large-right-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-large-right-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-large-right-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button-large-both-icon */
.button-large-both-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-large-both-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}
.button-large-both-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}
.button-large-both-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-large-both-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-large-both-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}
.noaccess-mode-show.button-large-both-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button standart */
/* button-standart */
.button-standart button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-standart button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-standart button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}

/* button-standart-left-icon */
.button-standart-left-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-standart-left-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}
.button-standart-left-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-standart-left-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-standart-left-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}

/* button-standart-right-icon */
.button-standart-right-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-standart-right-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}
.button-standart-right-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-standart-right-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-standart-right-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button-standart-both-icon */
.button-standart-both-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-standart-both-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}
.button-standart-both-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}
.button-standart-both-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-standart-both-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-standart-both-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}
.noaccess-mode-show.button-standart-both-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button small */
.button-small button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg) var(--small-button-icon) no-repeat center;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 48px;
  height: 48px;
  margin-top: auto;
  font-size: 0px;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-small button:hover {
  background-color: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-small button {
  background: var(--color-button-disable-bg) var(--small-button-icon-disable)
    no-repeat center;
}

/* button right */
.button-right button {
  align-self: flex-end;
}`},C1=e=>{const{cardBg:t,descriptionColor:n,titleColor:r}=Tl(e);return`
#narrow-cards {
  --font-family: sans-serif;
  --color-list-bg: transparent;
  --card-bg: ${t};
  --color-title: ${r};
  --color-description: ${n};
  --color-button-bg: rgba(131, 136, 255, 1);
  --color-button-text: #ffffff;
  --color-button-hover-bg: rgba(97, 102, 237, 1);
  --color-button-disable-bg: #2f2f2f;
  --color-button-disable-text: #ffffff;

  --card-radius: 0px;
  --button-radius: 0px;
  --image-radius: 0px;

  --shadow-card: 0px 0px 10px rgba(0,0,0, 0.3);
  --shadow-card-hover: 0px 0px 15px rgba(0,0,0, 0.2);

  --small-button-icon: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg);
  --small-button-icon-disable: url();

  --url-button-icon-left: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg);
  --url-button-icon-left-disable: url();
  --url-button-icon-right: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg);
  --url-button-icon-right-disable: url();

  --url-all-trainings-image: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/41/h/dd3c72505a70573840f84a7305a8b2f0.png);
}
#narrow-cards * {
  font-family: var(--font-family);
}
#narrow-cards .stream-table {
  width: 100%;
  margin-bottom: 0px;
  margin-left: 0px;
  background: var(--color-list-bg);
}
#narrow-cards .stream-table tbody {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
#narrow-cards .stream-table tr {
  width: 100%;
  display: block;
}
#narrow-cards .stream-table tr td {
  padding: 0px;
  width: 100%;
  display: block;
  height: 100%;
  min-height: 148px;
  opacity: 1;
}
#narrow-cards .stream-table tr td:hover {
  background: transparent;
}
#narrow-cards .stream-table tr td a {
  height: 100%;
  min-height: 148px;
  border-radius: var(--card-radius);
  background: var(--card-bg);
  padding: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  box-shadow: var(--shadow-card);
}
#narrow-cards .stream-table tr td a:hover {
  box-shadow: var(--shadow-card-hover);
}
#narrow-cards .stream-title {
  color: var(--color-title);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 32px;
}
#narrow-cards .stream-table tr td a > div {
  color: var(--color-description);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 24px;
}

@media (max-width: 1260px) {
  #narrow-cards .stream-table tr td a {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
  #narrow-cards .stream-table tbody {
    grid-template-columns: repeat(2, 1fr);
  }
  #narrow-cards .stream-table tr td {
    height: 100%;
  }
  #narrow-cards button {
    margin-top: auto;
  }
}
@media (max-width: 660px) {
  #narrow-cards .stream-table tbody {
    grid-template-columns: 1fr;
  }
}

/* hide description */
.no-description td a > div {
  display: none;
}

/* add image */
.add-image a::before {
  content: '';
  width: 100px;
  height: 100px;
  border-radius: var(--image-radius);
  background: no-repeat center / cover;
  flex-shrink: 0;
  margin-right: 24px;
}
/* one image for all trainings */
.add-image a::before {
  background-image: var(--url-all-trainings-image);
}

/* different images, need to change training's id */
.add-image[data-training-id='777477771'] a::before {
  background-image: url(https://images.unsplash.com/photo-1646343588889-07753bb55abf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80);
}

/* hide button */
.no-button button {
  display: none;
}

/* buttons */
/* button large */
.button-large button {
  border-radius: var(--button-radius);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 220px;
  margin-left: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-large button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-large button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}

/* button large with left icon */
.button-large-left-icon button {
  border-radius: var(--button-radius);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-left: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-large-left-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}
.button-large-left-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-large-left-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disabled-text);
}
.noaccess-mode-show.button-large-right-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}

/* button large with right icon */
.button-large-right-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-left: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-large-right-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}
.button-large-right-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-large-right-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-large-right-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button-large-both-icon */
.button-large-both-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-left: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-large-both-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}
.button-large-both-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}
.button-large-both-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-large-both-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-large-both-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}
.noaccess-mode-show.button-large-both-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button standart */
/* button-standart */
.button-standart button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-left: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-standart button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-standart button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}

/* button-standart-left-icon */
.button-standart-left-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-left: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-standart-left-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}
.button-standart-left-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-standart-left-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-standart-left-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}

/* button-standart-right-icon */
.button-standart-right-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-left: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-standart-right-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}
.button-standart-right-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-standart-right-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-standart-right-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button-standart-both-icon */
.button-standart-both-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  margin-left: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-standart-both-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}
.button-standart-both-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}
.button-standart-both-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-standart-both-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-standart-both-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}
.noaccess-mode-show.button-standart-both-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button small */
.button-small button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg) var(--small-button-icon) no-repeat center;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 48px;
  height: 48px;
  margin-left: auto;
  font-size: 0px;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-small button:hover {
  background-color: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-small button {
  background: var(--color-button-disable-bg) var(--small-button-icon-disable)
    no-repeat center;
}`},T1=e=>{const{cardBg:t,descriptionColor:n,titleColor:r}=Tl(e);return`
#square-cards {
  --font-family: sans-serif;
  --color-list-bg: transparent;
  /* --card-bg: ${t} */
  --card-bg: #ffffff;
  --color-title: ${r};
  --color-description: ${n};
  --color-button-bg: rgba(131, 136, 255, 1);
  --color-button-text: #ffffff;
  --color-button-hover-bg: rgba(97, 102, 237, 1);
  --color-button-disable-bg: #2f2f2f;
  --color-button-disable-text: #ffffff;

  --card-radius: 0px;
  --button-radius: 0px;
  --image-radius: 0px;

  --shadow-card: 0px 0px 10px rgba(0,0,0, 0.3);
  --shadow-card-hover: 0px 0px 15px rgba(0,0,0, 0.2);

  --small-button-icon: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg);
  --small-button-icon-disable: url();

  --url-button-icon-left: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg);
  --url-button-icon-left-disable: url();
  --url-button-icon-right: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg);
  --url-button-icon-right-disable: url();

  --url-all-trainings-image: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/41/h/dd3c72505a70573840f84a7305a8b2f0.png);
}
#square-cards * {
  font-family: var(--font-family);
}
#square-cards .stream-table {
  width: 100%;
  margin-bottom: 0px;
  margin-left: 0px;
  background: var(--color-list-bg);
}
#square-cards .stream-table tbody {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 1200px) {
  #square-cards .stream-table tbody {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  #square-cards .stream-table tbody {
    grid-template-columns: repeat(1, 1fr);
  }
}
#square-cards .stream-table tr {
  width: 100%;
  display: block;
}
#square-cards .stream-table tr td {
  padding: 0px;
  width: 100%;
  display: block;
  height: 100%;
  min-height: 268px;
  opacity: 1;
}
#square-cards .stream-table tr td:hover {
  background: transparent;
}
#square-cards .stream-table tr td a {
  height: 100%;
  min-height: 268px;
  border-radius: var(--card-radius);
  background: var(--card-bg) no-repeat center / cover;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  box-shadow: var(--shadow-card);
}
#square-cards .stream-table tr td a:hover {
  box-shadow: var(--shadow-card-hover);
}
/* different bg, need to change training's id */
#square-cards .stream-table tr[data-training-id='{ID}'] td a {
  background-image: url({LINK});
}
#square-cards .stream-title {
  color: var(--color-title);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 16px;
}
#square-cards .stream-table tr td a > div {
  color: var(--color-description);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 24px;
}

/* hide description */
.no-description td a > div {
  display: none;
}

/* hide button */
.no-button button {
  display: none;
}

/* buttons */

/* button top */
#square-cards .button-top button {
  order: -1;
  margin-top: 0;
  margin-bottom: auto;
}
/* button right */
#square-cards .button-right button {
  align-self: flex-end;
}
/* button large */
.button-large button {
  border-radius: var(--button-radius);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 220px;
  width: 100%;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-large button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-large button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}

/* button large with left icon */
.button-large-left-icon button {
  border-radius: var(--button-radius);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 220px;
  width: 100%;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-large-left-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}
.button-large-left-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-large-left-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disabled-text);
}
.noaccess-mode-show.button-large-right-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}

/* button large with right icon */
.button-large-right-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 220px;
  width: 100%;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-large-right-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}
.button-large-right-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-large-right-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-large-right-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button-large-both-icon */
.button-large-both-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 220px;
  width: 100%;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-large-both-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}
.button-large-both-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}
.button-large-both-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-large-both-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-large-both-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}
.noaccess-mode-show.button-large-both-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button standart */
/* button-standart */
.button-standart button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 220px;
  width: 100%;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-standart button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-standart button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}

/* button-standart-left-icon */
.button-standart-left-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 220px;
  width: 100%;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-standart-left-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}
.button-standart-left-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-standart-left-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-standart-left-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}

/* button-standart-right-icon */
.button-standart-right-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 220px;
  width: 100%;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-standart-right-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}
.button-standart-right-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-standart-right-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-standart-right-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button-standart-both-icon */
.button-standart-both-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 220px;
  width: 100%;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-standart-both-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}
.button-standart-both-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}
.button-standart-both-icon button:hover {
  background: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-standart-both-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}
.noaccess-mode-show.button-standart-both-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}
.noaccess-mode-show.button-standart-both-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button small */
.button-small button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg) var(--small-button-icon) no-repeat center;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 48px;
  height: 48px;
  margin-top: auto;
  font-size: 0px;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}
.button-small button:hover {
  background-color: var(--color-button-hover-bg);
}
.noaccess-mode-show.button-small button {
  background: var(--color-button-disable-bg) var(--small-button-icon-disable)
    no-repeat center;
}`},P1=e=>{const{cardBg:t,descriptionColor:n,titleColor:r}=Tl(e);return`
#vertical-cards {
  --font-family: sans-serif;
  --color-list-bg: transparent;
  --card-bg: ${t};
  --color-title: ${r};
  --color-description: ${n};
  --color-button-bg: rgba(131, 136, 255, 1);
  --color-button-text: #ffffff;
  --color-button-hover-bg: rgba(97, 102, 237, 1);
  --color-button-disable-bg: #2f2f2f;
  --color-button-disable-text: #ffffff;

  --card-radius: 0px;
  --button-radius: 0px;
  --image-radius: 0px;

  --shadow-card: 0px 0px 10px rgba(0,0,0, 0.3);
  --shadow-card-hover: 0px 0px 15px rgba(0,0,0, 0.2);

  --small-button-icon: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg);
  --small-button-icon-disable: url();

  --url-button-icon-left: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg);
  --url-button-icon-left-disable: url();
  --url-button-icon-right: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/157/h/18ce640b30ec15abdcf214112e150e04.svg);
  --url-button-icon-right-disable: url();

  --url-all-trainings-image: url(https://fs.getcourse.ru/fileservice/file/download/a/600892/sc/41/h/dd3c72505a70573840f84a7305a8b2f0.png);
}

#vertical-cards * {
  font-family: var(--font-family);
}

#vertical-cards .stream-table {
  width: 100%;
  margin-bottom: 0px;
  margin-left: 0px;
  background: var(--color-list-bg);
}

#vertical-cards .stream-table tbody {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1200px) {
  #vertical-cards .stream-table tbody {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  #vertical-cards .stream-table tbody {
    grid-template-columns: repeat(1, 1fr);
  }
}

#vertical-cards .stream-table tr {
  width: 100%;
  display: block;
}

#vertical-cards .stream-table tr td {
  padding: 0px;
  width: 100%;
  display: block;
  height: 100%;
  min-height: 310px;
  opacity: 1;
}

#vertical-cards .stream-table tr td:hover {
  background: transparent;
}

#vertical-cards .stream-table tr td a {
  height: 100%;
  min-height: 310px;
  border-radius: var(--card-radius);
  background: var(--card-bg) no-repeat center / cover;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  box-shadow: var(--shadow-card);
}
#vertical-cards .stream-table tr td a:hover {
  box-shadow: var(--shadow-card-hover);
}
/* different bg, need to change training's id */
/*
#vertical-cards .stream-table tr[data-training-id='{ID}'] td a {
  background-image: url({LINK});
}
*/
#vertical-cards .stream-title {
  color: var(--color-title);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 16px;
}

#vertical-cards .stream-table tr td a>div {
  color: var(--color-description);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 24px;
}

/* hide description */
.no-description td a>div {
  display: none;
}

/* add image */
.add-image a::before {
  content: '';
  width: 100%;
  height: 140px;
  border-radius: var(--image-radius);
  background: no-repeat center / cover;
  flex-shrink: 0;
  margin-bottom: 16px;
}

/* one image for all trainings */
.add-image a::before {
  background-image: var(--url-all-trainings-image);
}

/* different images, need to change training's id */
.add-image[data-training-id='777477771'] a::before {
  background-image: url(https://images.unsplash.com/photo-1687253363472-cfd93fdb2580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80);
}

/* hide button */
.no-button button {
  display: none;
}

/* buttons */

/* button right */
#square-cards .button-right button {
  align-self: flex-end;
}

/* button large */
.button-large button {
  border-radius: var(--button-radius);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 220px;
  width: 100%;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}

.button-large button:hover {
  background: var(--color-button-hover-bg);
}

.noaccess-mode-show.button-large button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}

/* button large with left icon */
.button-large-left-icon button {
  border-radius: var(--button-radius);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 220px;
  width: 100%;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}

.button-large-left-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}

.button-large-left-icon button:hover {
  background: var(--color-button-hover-bg);
}

.noaccess-mode-show.button-large-left-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disabled-text);
}

.noaccess-mode-show.button-large-right-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}

/* button large with right icon */
.button-large-right-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 220px;
  width: 100%;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}

.button-large-right-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}

.button-large-right-icon button:hover {
  background: var(--color-button-hover-bg);
}

.noaccess-mode-show.button-large-right-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}

.noaccess-mode-show.button-large-right-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button-large-both-icon */
.button-large-both-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 220px;
  width: 100%;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}

.button-large-both-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}

.button-large-both-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}

.button-large-both-icon button:hover {
  background: var(--color-button-hover-bg);
}

.noaccess-mode-show.button-large-both-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}

.noaccess-mode-show.button-large-both-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}

.noaccess-mode-show.button-large-both-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button standart */
/* button-standart */
.button-standart button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 220px;
  width: 100%;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}

.button-standart button:hover {
  background: var(--color-button-hover-bg);
}

.noaccess-mode-show.button-standart button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}

/* button-standart-left-icon */
.button-standart-left-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 220px;
  width: 100%;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}

.button-standart-left-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}

.button-standart-left-icon button:hover {
  background: var(--color-button-hover-bg);
}

.noaccess-mode-show.button-standart-left-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}

.noaccess-mode-show.button-standart-left-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}

/* button-standart-right-icon */
.button-standart-right-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 220px;
  width: 100%;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}

.button-standart-right-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}

.button-standart-right-icon button:hover {
  background: var(--color-button-hover-bg);
}

.noaccess-mode-show.button-standart-right-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}

.noaccess-mode-show.button-standart-right-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button-standart-both-icon */
.button-standart-both-icon button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 220px;
  width: 100%;
  margin-top: auto;
  color: var(--color-button-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}

.button-standart-both-icon button::before {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-left);
}

.button-standart-both-icon button::after {
  content: '';
  width: 16px;
  height: 16px;
  background: no-repeat center / contain;
  background-image: var(--url-button-icon-right);
}

.button-standart-both-icon button:hover {
  background: var(--color-button-hover-bg);
}

.noaccess-mode-show.button-standart-both-icon button {
  background: var(--color-button-disable-bg);
  color: var(--color-button-disable-text);
}

.noaccess-mode-show.button-standart-both-icon button::before {
  background-image: var(--url-button-icon-left-disable);
}

.noaccess-mode-show.button-standart-both-icon button::after {
  background-image: var(--url-button-icon-right-disable);
}

/* button small */
.button-small button {
  border-radius: var(--button-radius, 8px);
  background: var(--color-button-bg) var(--small-button-icon) no-repeat center;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 48px;
  height: 48px;
  margin-top: auto;
  font-size: 0px;
  cursor: pointer;
  border: none;
  transition: background 0.5s;
}

.button-small button:hover {
  background-color: var(--color-button-hover-bg);
}

.noaccess-mode-show.button-small button {
  background: var(--color-button-disable-bg) var(--small-button-icon-disable) no-repeat center;
}`},O1={wide:k1,narrow:C1,square:T1,rectangular:P1},_1=e=>O1[e.cardType](e),L1={rectangular:"vertical-cards",narrow:"narrow-cards",square:"square-cards",wide:"heavy-cards"},N1=({cardType:e,hasBackground:t,hasDescription:n,hasImage:r,hasButton:o,hasButtonText:i,buttonSize:l,buttonPosition:a,hasIcon:s,iconPosition:u})=>{const f=[];return e!=="square"&&t===!1&&r===!0&&f.push("add-image"),t===!0&&f.push("background-image"),n===!1&&f.push("no-description"),o===!1&&f.push("no-button"),e==="wide"&&a==="right"&&f.push("button-right"),i===!0&&l==="big"&&s===!1&&f.push("button-large"),i===!0&&l==="big"&&s===!0&&u==="left"&&f.push("button-large-left-icon"),i===!0&&l==="big"&&s===!0&&u==="right"&&f.push("button-large-right-icon"),i===!0&&l==="small"&&s===!1&&f.push("button-standart"),i===!0&&l==="small"&&s===!0&&u==="left"&&f.push("button-standart-left-icon"),i===!0&&l==="small"&&s===!0&&u==="right"&&f.push("button-standart-right-icon"),i===!1&&f.push("button-small"),f.join(" ")},j1=e=>{const t=L1[e.cardType],n=N1(e);return`// search all trainings on page
const trainings = document.querySelectorAll('#${t} .stream-table tr');

// add classes
const classesString = ' ${n}';
for (let training of trainings) {
  training.className += classesString;
}

// add button
for (let training of trainings) {
  training.querySelector('a').insertAdjacentHTML(
    'beforeend',
    \`
        <button>\${
          training.classList.contains('noaccess-mode-show')
            ? 'Недоступно'
            : 'Перейти'
        }</button>
    \`
  );
}`},M1="/free-template/assets/check-heart-e370f87b.svg",R1={position:H.POSITION.BOTTOM_RIGHT,className:"toast-message",autoClose:5e3,closeButton:!1,hideProgressBar:!0,icon:()=>k.jsx("img",{src:M1,alt:""})},z1={position:H.POSITION.BOTTOM_RIGHT,className:"toast-message",autoClose:5e3,hideProgressBar:!0},I1="_wrapper_h935c_1",D1="_buttonWrapper_h935c_9",F1="_css_h935c_21",B1="_js_h935c_25",$1="_button_h935c_9",ln={wrapper:I1,buttonWrapper:D1,css:F1,js:B1,button:$1};function U1(){const e=tn(n=>n.FORM_DATA),t=n=>async()=>{try{await navigator.clipboard.writeText(n),H.success("Скопировано в буфер обмена",R1)}catch(r){H.error("Ошибка",z1),console.log("Ошибка",r)}};return k.jsxs("div",{className:ln.wrapper,children:[k.jsx("div",{className:dt(ln.buttonWrapper,ln.css),children:k.jsx("button",{className:ln.button,onClick:t(_1(e)),children:"Копировать"})}),k.jsx("div",{className:dt(ln.buttonWrapper,ln.js),children:k.jsx("button",{className:ln.button,onClick:t(j1(e)),children:"Копировать"})})]})}function W1(){return k.jsxs("div",{className:Jy.controlPanel,children:[k.jsx(E1,{}),k.jsx(w1,{}),k.jsx(U1,{})]})}const zi={ROOT:"/free-template/",CONSTRUCTOR:"/free-template/constructor/"},H1={rectangular:"Прямоугольные вертикальные карточки",narrow:"Узкие горизонтальные карточки",square:"Квадратные карточки",wide:"Широкие горизонтальные карточки"},V1="_main_w3cl1_1",Q1="_back_w3cl1_8",G1="_wrapper_w3cl1_21",X1="_list_w3cl1_26",K1="_item_w3cl1_46",xr={main:V1,back:Q1,wrapper:G1,list:X1,item:K1};function q1(){const{cardType:e}=tn(yo),t=xr[e],n=dt(xr.list,t);return k.jsxs("main",{className:dt(xr.main,"container"),children:[k.jsx(pA,{to:zi.ROOT,className:xr.back,children:H1[e]}),k.jsxs("div",{className:xr.wrapper,children:[k.jsxs("div",{className:n,children:[k.jsx(_n,{}),k.jsx(_n,{}),k.jsx(_n,{}),k.jsx(_n,{}),k.jsx(_n,{}),k.jsx(_n,{})]}),k.jsx(W1,{})]})]})}function _d(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function $u(e={},t={}){Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:_d(t[n])&&_d(e[n])&&Object.keys(t[n]).length>0&&$u(e[n],t[n])})}const Dh={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Et(){const e=typeof document<"u"?document:{};return $u(e,Dh),e}const Y1={document:Dh,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function ke(){const e=typeof window<"u"?window:{};return $u(e,Y1),e}function Z1(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function ks(e,t=0){return setTimeout(e,t)}function Ii(){return Date.now()}function J1(e){const t=ke();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function eb(e,t="x"){const n=ke();let r,o,i;const l=J1(e);return n.WebKitCSSMatrix?(o=l.transform||l.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(a=>a.replace(",",".")).join(", ")),i=new n.WebKitCSSMatrix(o==="none"?"":o)):(i=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=i.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?o=i.m41:r.length===16?o=parseFloat(r[12]):o=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?o=i.m42:r.length===16?o=parseFloat(r[13]):o=parseFloat(r[5])),o||0}function $o(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function tb(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function je(...e){const t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let r=1;r<e.length;r+=1){const o=e[r];if(o!=null&&!tb(o)){const i=Object.keys(Object(o)).filter(l=>n.indexOf(l)<0);for(let l=0,a=i.length;l<a;l+=1){const s=i[l],u=Object.getOwnPropertyDescriptor(o,s);u!==void 0&&u.enumerable&&($o(t[s])&&$o(o[s])?o[s].__swiper__?t[s]=o[s]:je(t[s],o[s]):!$o(t[s])&&$o(o[s])?(t[s]={},o[s].__swiper__?t[s]=o[s]:je(t[s],o[s])):t[s]=o[s])}}}return t}function Uo(e,t,n){e.style.setProperty(t,n)}function Fh({swiper:e,targetPosition:t,side:n}){const r=ke(),o=-e.translate;let i=null,l;const a=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>o?"next":"prev",u=(p,h)=>s==="next"&&p>=h||s==="prev"&&p<=h,f=()=>{l=new Date().getTime(),i===null&&(i=l);const p=Math.max(Math.min((l-i)/a,1),0),h=.5-Math.cos(p*Math.PI)/2;let g=o+h*(t-o);if(u(g,t)&&(g=t),e.wrapperEl.scrollTo({[n]:g}),u(g,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:g})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(f)};f()}function at(e,t=""){return[...e.children].filter(n=>n.matches(t))}function Bh(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:[t]),n}function nb(e){const t=ke(),n=Et(),r=e.getBoundingClientRect(),o=n.body,i=e.clientTop||o.clientTop||0,l=e.clientLeft||o.clientLeft||0,a=e===t?t.scrollY:e.scrollTop,s=e===t?t.scrollX:e.scrollLeft;return{top:r.top+a-i,left:r.left+s-l}}function rb(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function ob(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Rt(e,t){return ke().getComputedStyle(e,null).getPropertyValue(t)}function Di(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Fi(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Cs(e,t,n){const r=ke();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}let ga;function ib(){const e=ke(),t=Et();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function $h(){return ga||(ga=ib()),ga}let ma;function lb({userAgent:e}={}){const t=$h(),n=ke(),r=n.navigator.platform,o=e||n.navigator.userAgent,i={ios:!1,android:!1},l=n.screen.width,a=n.screen.height,s=o.match(/(Android);?[\s\/]+([\d.]+)?/);let u=o.match(/(iPad).*OS\s([\d_]+)/);const f=o.match(/(iPod)(.*OS\s([\d_]+))?/),p=!u&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=r==="Win32";let g=r==="MacIntel";const v=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&g&&t.touch&&v.indexOf(`${l}x${a}`)>=0&&(u=o.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),g=!1),s&&!h&&(i.os="android",i.android=!0),(u||p||f)&&(i.os="ios",i.ios=!0),i}function ab(e={}){return ma||(ma=lb(e)),ma}let va;function sb(){const e=ke();let t=!1;function n(){const r=e.navigator.userAgent.toLowerCase();return r.indexOf("safari")>=0&&r.indexOf("chrome")<0&&r.indexOf("android")<0}if(n()){const r=String(e.navigator.userAgent);if(r.includes("Version/")){const[o,i]=r.split("Version/")[1].split(" ")[0].split(".").map(l=>Number(l));t=o<16||o===16&&i<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function ub(){return va||(va=sb()),va}function cb({swiper:e,on:t,emit:n}){const r=ke();let o=null,i=null;const l=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},a=()=>{!e||e.destroyed||!e.initialized||(o=new ResizeObserver(f=>{i=r.requestAnimationFrame(()=>{const{width:p,height:h}=e;let g=p,v=h;f.forEach(({contentBoxSize:A,contentRect:b,target:c})=>{c&&c!==e.el||(g=b?b.width:(A[0]||A).inlineSize,v=b?b.height:(A[0]||A).blockSize)}),(g!==p||v!==h)&&l()})}),o.observe(e.el))},s=()=>{i&&r.cancelAnimationFrame(i),o&&o.unobserve&&e.el&&(o.unobserve(e.el),o=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){a();return}r.addEventListener("resize",l),r.addEventListener("orientationchange",u)}),t("destroy",()=>{s(),r.removeEventListener("resize",l),r.removeEventListener("orientationchange",u)})}function db({swiper:e,extendParams:t,on:n,emit:r}){const o=[],i=ke(),l=(u,f={})=>{const p=i.MutationObserver||i.WebkitMutationObserver,h=new p(g=>{if(e.__preventObserver__)return;if(g.length===1){r("observerUpdate",g[0]);return}const v=function(){r("observerUpdate",g[0])};i.requestAnimationFrame?i.requestAnimationFrame(v):i.setTimeout(v,0)});h.observe(u,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:typeof f.childList>"u"?!0:f.childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),o.push(h)},a=()=>{if(e.params.observer){if(e.params.observeParents){const u=Fi(e.el);for(let f=0;f<u.length;f+=1)l(u[f])}l(e.el,{childList:e.params.observeSlideChildren}),l(e.wrapperEl,{attributes:!1})}},s=()=>{o.forEach(u=>{u.disconnect()}),o.splice(0,o.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",a),n("destroy",s)}const fb={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const o=n?"unshift":"push";return e.split(" ").forEach(i=>{r.eventsListeners[i]||(r.eventsListeners[i]=[]),r.eventsListeners[i][o](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function o(...i){r.off(e,o),o.__emitterProxy&&delete o.__emitterProxy,t.apply(r,i)}return o.__emitterProxy=t,r.on(e,o,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((o,i)=>{(o===t||o.__emitterProxy&&o.__emitterProxy===t)&&n.eventsListeners[r].splice(i,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,o;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),o=t):(n=e[0].events,r=e[0].data,o=e[0].context||t),r.unshift(o),(Array.isArray(n)?n:n.split(" ")).forEach(l=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(a=>{a.apply(o,[l,...r])}),t.eventsListeners&&t.eventsListeners[l]&&t.eventsListeners[l].forEach(a=>{a.apply(o,r)})}),t}};function pb(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Rt(r,"padding-left")||0,10)-parseInt(Rt(r,"padding-right")||0,10),n=n-parseInt(Rt(r,"padding-top")||0,10)-parseInt(Rt(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function hb(){const e=this;function t(T){return e.isHorizontal()?T:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[T]}function n(T,O){return parseFloat(T.getPropertyValue(t(O))||0)}const r=e.params,{wrapperEl:o,slidesEl:i,size:l,rtlTranslate:a,wrongRTL:s}=e,u=e.virtual&&r.virtual.enabled,f=u?e.virtual.slides.length:e.slides.length,p=at(i,`.${e.params.slideClass}, swiper-slide`),h=u?e.virtual.slides.length:p.length;let g=[];const v=[],A=[];let b=r.slidesOffsetBefore;typeof b=="function"&&(b=r.slidesOffsetBefore.call(e));let c=r.slidesOffsetAfter;typeof c=="function"&&(c=r.slidesOffsetAfter.call(e));const d=e.snapGrid.length,m=e.slidesGrid.length;let y=r.spaceBetween,w=-b,S=0,C=0;if(typeof l>"u")return;typeof y=="string"&&y.indexOf("%")>=0?y=parseFloat(y.replace("%",""))/100*l:typeof y=="string"&&(y=parseFloat(y)),e.virtualSize=-y,p.forEach(T=>{a?T.style.marginLeft="":T.style.marginRight="",T.style.marginBottom="",T.style.marginTop=""}),r.centeredSlides&&r.cssMode&&(Uo(o,"--swiper-centered-offset-before",""),Uo(o,"--swiper-centered-offset-after",""));const x=r.grid&&r.grid.rows>1&&e.grid;x&&e.grid.initSlides(h);let N;const _=r.slidesPerView==="auto"&&r.breakpoints&&Object.keys(r.breakpoints).filter(T=>typeof r.breakpoints[T].slidesPerView<"u").length>0;for(let T=0;T<h;T+=1){N=0;let O;if(p[T]&&(O=p[T]),x&&e.grid.updateSlide(T,O,h,t),!(p[T]&&Rt(O,"display")==="none")){if(r.slidesPerView==="auto"){_&&(p[T].style[t("width")]="");const j=getComputedStyle(O),I=O.style.transform,Y=O.style.webkitTransform;if(I&&(O.style.transform="none"),Y&&(O.style.webkitTransform="none"),r.roundLengths)N=e.isHorizontal()?Cs(O,"width",!0):Cs(O,"height",!0);else{const te=n(j,"width"),fe=n(j,"padding-left"),L=n(j,"padding-right"),R=n(j,"margin-left"),z=n(j,"margin-right"),X=j.getPropertyValue("box-sizing");if(X&&X==="border-box")N=te+R+z;else{const{clientWidth:oe,offsetWidth:Pn}=O;N=te+fe+L+R+z+(Pn-oe)}}I&&(O.style.transform=I),Y&&(O.style.webkitTransform=Y),r.roundLengths&&(N=Math.floor(N))}else N=(l-(r.slidesPerView-1)*y)/r.slidesPerView,r.roundLengths&&(N=Math.floor(N)),p[T]&&(p[T].style[t("width")]=`${N}px`);p[T]&&(p[T].swiperSlideSize=N),A.push(N),r.centeredSlides?(w=w+N/2+S/2+y,S===0&&T!==0&&(w=w-l/2-y),T===0&&(w=w-l/2-y),Math.abs(w)<1/1e3&&(w=0),r.roundLengths&&(w=Math.floor(w)),C%r.slidesPerGroup===0&&g.push(w),v.push(w)):(r.roundLengths&&(w=Math.floor(w)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup===0&&g.push(w),v.push(w),w=w+N+y),e.virtualSize+=N+y,S=N,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,l)+c,a&&s&&(r.effect==="slide"||r.effect==="coverflow")&&(o.style.width=`${e.virtualSize+y}px`),r.setWrapperSize&&(o.style[t("width")]=`${e.virtualSize+y}px`),x&&e.grid.updateWrapperSize(N,g,t),!r.centeredSlides){const T=[];for(let O=0;O<g.length;O+=1){let j=g[O];r.roundLengths&&(j=Math.floor(j)),g[O]<=e.virtualSize-l&&T.push(j)}g=T,Math.floor(e.virtualSize-l)-Math.floor(g[g.length-1])>1&&g.push(e.virtualSize-l)}if(u&&r.loop){const T=A[0]+y;if(r.slidesPerGroup>1){const O=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/r.slidesPerGroup),j=T*r.slidesPerGroup;for(let I=0;I<O;I+=1)g.push(g[g.length-1]+j)}for(let O=0;O<e.virtual.slidesBefore+e.virtual.slidesAfter;O+=1)r.slidesPerGroup===1&&g.push(g[g.length-1]+T),v.push(v[v.length-1]+T),e.virtualSize+=T}if(g.length===0&&(g=[0]),y!==0){const T=e.isHorizontal()&&a?"marginLeft":t("marginRight");p.filter((O,j)=>!r.cssMode||r.loop?!0:j!==p.length-1).forEach(O=>{O.style[T]=`${y}px`})}if(r.centeredSlides&&r.centeredSlidesBounds){let T=0;A.forEach(j=>{T+=j+(y||0)}),T-=y;const O=T-l;g=g.map(j=>j<=0?-b:j>O?O+c:j)}if(r.centerInsufficientSlides){let T=0;if(A.forEach(O=>{T+=O+(y||0)}),T-=y,T<l){const O=(l-T)/2;g.forEach((j,I)=>{g[I]=j-O}),v.forEach((j,I)=>{v[I]=j+O})}}if(Object.assign(e,{slides:p,snapGrid:g,slidesGrid:v,slidesSizesGrid:A}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){Uo(o,"--swiper-centered-offset-before",`${-g[0]}px`),Uo(o,"--swiper-centered-offset-after",`${e.size/2-A[A.length-1]/2}px`);const T=-e.snapGrid[0],O=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(j=>j+T),e.slidesGrid=e.slidesGrid.map(j=>j+O)}if(h!==f&&e.emit("slidesLengthChange"),g.length!==d&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==m&&e.emit("slidesGridLengthChange"),r.watchSlidesProgress&&e.updateSlidesOffset(),!u&&!r.cssMode&&(r.effect==="slide"||r.effect==="fade")){const T=`${r.containerModifierClass}backface-hidden`,O=e.el.classList.contains(T);h<=r.maxBackfaceHiddenSlides?O||e.el.classList.add(T):O&&e.el.classList.remove(T)}}function gb(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let o=0,i;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const l=a=>r?t.slides[t.getSlideIndexByData(a)]:t.slides[a];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(a=>{n.push(a)});else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const a=t.activeIndex+i;if(a>t.slides.length&&!r)break;n.push(l(a))}else n.push(l(t.activeIndex));for(i=0;i<n.length;i+=1)if(typeof n[i]<"u"){const a=n[i].offsetHeight;o=a>o?a:o}(o||o===0)&&(t.wrapperEl.style.height=`${o}px`)}function mb(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}function vb(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:o,snapGrid:i}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let l=-e;o&&(l=e),r.forEach(s=>{s.classList.remove(n.slideVisibleClass)}),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:typeof a=="string"&&(a=parseFloat(a));for(let s=0;s<r.length;s+=1){const u=r[s];let f=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(f-=r[0].swiperSlideOffset);const p=(l+(n.centeredSlides?t.minTranslate():0)-f)/(u.swiperSlideSize+a),h=(l-i[0]+(n.centeredSlides?t.minTranslate():0)-f)/(u.swiperSlideSize+a),g=-(l-f),v=g+t.slidesSizesGrid[s];(g>=0&&g<t.size-1||v>1&&v<=t.size||g<=0&&v>=t.size)&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(s),r[s].classList.add(n.slideVisibleClass)),u.progress=o?-p:p,u.originalProgress=o?-h:h}}function Ab(e){const t=this;if(typeof e>"u"){const f=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*f||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:o,isBeginning:i,isEnd:l,progressLoop:a}=t;const s=i,u=l;if(r===0)o=0,i=!0,l=!0;else{o=(e-t.minTranslate())/r;const f=Math.abs(e-t.minTranslate())<1,p=Math.abs(e-t.maxTranslate())<1;i=f||o<=0,l=p||o>=1,f&&(o=0),p&&(o=1)}if(n.loop){const f=t.getSlideIndexByData(0),p=t.getSlideIndexByData(t.slides.length-1),h=t.slidesGrid[f],g=t.slidesGrid[p],v=t.slidesGrid[t.slidesGrid.length-1],A=Math.abs(e);A>=h?a=(A-h)/v:a=(A+v-g)/v,a>1&&(a-=1)}Object.assign(t,{progress:o,progressLoop:a,isBeginning:i,isEnd:l}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),i&&!s&&t.emit("reachBeginning toEdge"),l&&!u&&t.emit("reachEnd toEdge"),(s&&!i||u&&!l)&&t.emit("fromEdge"),t.emit("progress",o)}function yb(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:o}=e,i=e.virtual&&n.virtual.enabled,l=s=>at(r,`.${n.slideClass}${s}, swiper-slide${s}`)[0];t.forEach(s=>{s.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)});let a;if(i)if(n.loop){let s=o-e.virtual.slidesBefore;s<0&&(s=e.virtual.slides.length+s),s>=e.virtual.slides.length&&(s-=e.virtual.slides.length),a=l(`[data-swiper-slide-index="${s}"]`)}else a=l(`[data-swiper-slide-index="${o}"]`);else a=t[o];if(a){a.classList.add(n.slideActiveClass);let s=ob(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!s&&(s=t[0]),s&&s.classList.add(n.slideNextClass);let u=rb(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!u===0&&(u=t[t.length-1]),u&&u.classList.add(n.slidePrevClass)}e.emitSlidesClasses()}const ri=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){const o=r.querySelector(`.${e.params.lazyPreloaderClass}`);o&&o.remove()}},Aa=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Ts=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),o=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const l=o,a=[l-t];a.push(...Array.from({length:t}).map((s,u)=>l+r+u)),e.slides.forEach((s,u)=>{a.includes(s.column)&&Aa(e,u)});return}const i=o+r-1;if(e.params.rewind||e.params.loop)for(let l=o-t;l<=i+t;l+=1){const a=(l%n+n)%n;(a<o||a>i)&&Aa(e,a)}else for(let l=Math.max(o-t,0);l<=Math.min(i+t,n-1);l+=1)l!==o&&(l>i||l<o)&&Aa(e,l)};function bb(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let o;for(let i=0;i<t.length;i+=1)typeof t[i+1]<"u"?r>=t[i]&&r<t[i+1]-(t[i+1]-t[i])/2?o=i:r>=t[i]&&r<t[i+1]&&(o=i+1):r>=t[i]&&(o=i);return n.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function wb(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:o,activeIndex:i,realIndex:l,snapIndex:a}=t;let s=e,u;const f=h=>{let g=h-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof s>"u"&&(s=bb(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const h=Math.min(o.slidesPerGroupSkip,s);u=h+Math.floor((s-h)/o.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),s===i){u!==a&&(t.snapIndex=u,t.emit("snapIndexChange")),t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=f(s));return}let p;t.virtual&&o.virtual.enabled&&o.loop?p=f(s):t.slides[s]?p=parseInt(t.slides[s].getAttribute("data-swiper-slide-index")||s,10):p=s,Object.assign(t,{previousSnapIndex:a,snapIndex:u,previousRealIndex:l,realIndex:p,previousIndex:i,activeIndex:s}),t.initialized&&Ts(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==p&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function xb(e){const t=this,n=t.params,r=e.closest(`.${n.slideClass}, swiper-slide`);let o=!1,i;if(r){for(let l=0;l<t.slides.length;l+=1)if(t.slides[l]===r){o=!0,i=l;break}}if(r&&o)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=i;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}const Sb={updateSize:pb,updateSlides:hb,updateAutoHeight:gb,updateSlidesOffset:mb,updateSlidesProgress:vb,updateProgress:Ab,updateSlidesClasses:yb,updateActiveIndex:wb,updateClickedSlide:xb};function Eb(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:o,wrapperEl:i}=t;if(n.virtualTranslate)return r?-o:o;if(n.cssMode)return o;let l=eb(i,e);return l+=t.cssOverflowAdjustment(),r&&(l=-l),l||0}function kb(e,t){const n=this,{rtlTranslate:r,params:o,wrapperEl:i,progress:l}=n;let a=0,s=0;const u=0;n.isHorizontal()?a=r?-e:e:s=e,o.roundLengths&&(a=Math.floor(a),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:s,o.cssMode?i[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-s:o.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),i.style.transform=`translate3d(${a}px, ${s}px, ${u}px)`);let f;const p=n.maxTranslate()-n.minTranslate();p===0?f=0:f=(e-n.minTranslate())/p,f!==l&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function Cb(){return-this.snapGrid[0]}function Tb(){return-this.snapGrid[this.snapGrid.length-1]}function Pb(e=0,t=this.params.speed,n=!0,r=!0,o){const i=this,{params:l,wrapperEl:a}=i;if(i.animating&&l.preventInteractionOnTransition)return!1;const s=i.minTranslate(),u=i.maxTranslate();let f;if(r&&e>s?f=s:r&&e<u?f=u:f=e,i.updateProgress(f),l.cssMode){const p=i.isHorizontal();if(t===0)a[p?"scrollLeft":"scrollTop"]=-f;else{if(!i.support.smoothScroll)return Fh({swiper:i,targetPosition:-f,side:p?"left":"top"}),!0;a.scrollTo({[p?"left":"top"]:-f,behavior:"smooth"})}return!0}return t===0?(i.setTransition(0),i.setTranslate(f),n&&(i.emit("beforeTransitionStart",t,o),i.emit("transitionEnd"))):(i.setTransition(t),i.setTranslate(f),n&&(i.emit("beforeTransitionStart",t,o),i.emit("transitionStart")),i.animating||(i.animating=!0,i.onTranslateToWrapperTransitionEnd||(i.onTranslateToWrapperTransitionEnd=function(h){!i||i.destroyed||h.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onTranslateToWrapperTransitionEnd),i.onTranslateToWrapperTransitionEnd=null,delete i.onTranslateToWrapperTransitionEnd,n&&i.emit("transitionEnd"))}),i.wrapperEl.addEventListener("transitionend",i.onTranslateToWrapperTransitionEnd))),!0}const Ob={getTranslate:Eb,setTranslate:kb,minTranslate:Cb,maxTranslate:Tb,translateTo:Pb};function _b(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`),n.emit("setTransition",e,t)}function Uh({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:o,previousIndex:i}=e;let l=n;if(l||(o>i?l="next":o<i?l="prev":l="reset"),e.emit(`transition${r}`),t&&o!==i){if(l==="reset"){e.emit(`slideResetTransition${r}`);return}e.emit(`slideChangeTransition${r}`),l==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function Lb(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Uh({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function Nb(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Uh({swiper:n,runCallbacks:e,direction:t,step:"End"}))}const jb={setTransition:_b,transitionStart:Lb,transitionEnd:Nb};function Mb(e=0,t=this.params.speed,n=!0,r,o){typeof e=="string"&&(e=parseInt(e,10));const i=this;let l=e;l<0&&(l=0);const{params:a,snapGrid:s,slidesGrid:u,previousIndex:f,activeIndex:p,rtlTranslate:h,wrapperEl:g,enabled:v}=i;if(i.animating&&a.preventInteractionOnTransition||!v&&!r&&!o)return!1;const A=Math.min(i.params.slidesPerGroupSkip,l);let b=A+Math.floor((l-A)/i.params.slidesPerGroup);b>=s.length&&(b=s.length-1);const c=-s[b];if(a.normalizeSlideIndex)for(let m=0;m<u.length;m+=1){const y=-Math.floor(c*100),w=Math.floor(u[m]*100),S=Math.floor(u[m+1]*100);typeof u[m+1]<"u"?y>=w&&y<S-(S-w)/2?l=m:y>=w&&y<S&&(l=m+1):y>=w&&(l=m)}if(i.initialized&&l!==p&&(!i.allowSlideNext&&(h?c>i.translate&&c>i.minTranslate():c<i.translate&&c<i.minTranslate())||!i.allowSlidePrev&&c>i.translate&&c>i.maxTranslate()&&(p||0)!==l))return!1;l!==(f||0)&&n&&i.emit("beforeSlideChangeStart"),i.updateProgress(c);let d;if(l>p?d="next":l<p?d="prev":d="reset",h&&-c===i.translate||!h&&c===i.translate)return i.updateActiveIndex(l),a.autoHeight&&i.updateAutoHeight(),i.updateSlidesClasses(),a.effect!=="slide"&&i.setTranslate(c),d!=="reset"&&(i.transitionStart(n,d),i.transitionEnd(n,d)),!1;if(a.cssMode){const m=i.isHorizontal(),y=h?c:-c;if(t===0){const w=i.virtual&&i.params.virtual.enabled;w&&(i.wrapperEl.style.scrollSnapType="none",i._immediateVirtual=!0),w&&!i._cssModeVirtualInitialSet&&i.params.initialSlide>0?(i._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[m?"scrollLeft":"scrollTop"]=y})):g[m?"scrollLeft":"scrollTop"]=y,w&&requestAnimationFrame(()=>{i.wrapperEl.style.scrollSnapType="",i._immediateVirtual=!1})}else{if(!i.support.smoothScroll)return Fh({swiper:i,targetPosition:y,side:m?"left":"top"}),!0;g.scrollTo({[m?"left":"top"]:y,behavior:"smooth"})}return!0}return i.setTransition(t),i.setTranslate(c),i.updateActiveIndex(l),i.updateSlidesClasses(),i.emit("beforeTransitionStart",t,r),i.transitionStart(n,d),t===0?i.transitionEnd(n,d):i.animating||(i.animating=!0,i.onSlideToWrapperTransitionEnd||(i.onSlideToWrapperTransitionEnd=function(y){!i||i.destroyed||y.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onSlideToWrapperTransitionEnd),i.onSlideToWrapperTransitionEnd=null,delete i.onSlideToWrapperTransitionEnd,i.transitionEnd(n,d))}),i.wrapperEl.addEventListener("transitionend",i.onSlideToWrapperTransitionEnd)),!0}function Rb(e=0,t=this.params.speed,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const o=this;let i=e;return o.params.loop&&(o.virtual&&o.params.virtual.enabled?i=i+o.virtual.slidesBefore:i=o.getSlideIndexByData(i)),o.slideTo(i,t,n,r)}function zb(e=this.params.speed,t=!0,n){const r=this,{enabled:o,params:i,animating:l}=r;if(!o)return r;let a=i.slidesPerGroup;i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<i.slidesPerGroupSkip?1:a,u=r.virtual&&i.virtual.enabled;if(i.loop){if(l&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft}return i.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function Ib(e=this.params.speed,t=!0,n){const r=this,{params:o,snapGrid:i,slidesGrid:l,rtlTranslate:a,enabled:s,animating:u}=r;if(!s)return r;const f=r.virtual&&o.virtual.enabled;if(o.loop){if(u&&!f&&o.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=a?r.translate:-r.translate;function h(c){return c<0?-Math.floor(Math.abs(c)):Math.floor(c)}const g=h(p),v=i.map(c=>h(c));let A=i[v.indexOf(g)-1];if(typeof A>"u"&&o.cssMode){let c;i.forEach((d,m)=>{g>=d&&(c=m)}),typeof c<"u"&&(A=i[c>0?c-1:c])}let b=0;if(typeof A<"u"&&(b=l.indexOf(A),b<0&&(b=r.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(b=b-r.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),o.rewind&&r.isBeginning){const c=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(c,e,t,n)}return r.slideTo(b,e,t,n)}function Db(e=this.params.speed,t=!0,n){const r=this;return r.slideTo(r.activeIndex,e,t,n)}function Fb(e=this.params.speed,t=!0,n,r=.5){const o=this;let i=o.activeIndex;const l=Math.min(o.params.slidesPerGroupSkip,i),a=l+Math.floor((i-l)/o.params.slidesPerGroup),s=o.rtlTranslate?o.translate:-o.translate;if(s>=o.snapGrid[a]){const u=o.snapGrid[a],f=o.snapGrid[a+1];s-u>(f-u)*r&&(i+=o.params.slidesPerGroup)}else{const u=o.snapGrid[a-1],f=o.snapGrid[a];s-u<=(f-u)*r&&(i-=o.params.slidesPerGroup)}return i=Math.max(i,0),i=Math.min(i,o.slidesGrid.length-1),o.slideTo(i,e,t,n)}function Bb(){const e=this,{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let o=e.clickedIndex,i;const l=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;i=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?o<e.loopedSlides-r/2||o>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),o=e.getSlideIndex(at(n,`${l}[data-swiper-slide-index="${i}"]`)[0]),ks(()=>{e.slideTo(o)})):e.slideTo(o):o>e.slides.length-r?(e.loopFix(),o=e.getSlideIndex(at(n,`${l}[data-swiper-slide-index="${i}"]`)[0]),ks(()=>{e.slideTo(o)})):e.slideTo(o)}else e.slideTo(o)}const $b={slideTo:Mb,slideToLoop:Rb,slideNext:zb,slidePrev:Ib,slideReset:Db,slideToClosest:Fb,slideToClickedSlide:Bb};function Ub(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;at(r,`.${n.slideClass}, swiper-slide`).forEach((i,l)=>{i.setAttribute("data-swiper-slide-index",l)}),t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function Wb({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:o,byController:i,byMousewheel:l}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:s,allowSlidePrev:u,allowSlideNext:f,slidesEl:p,params:h}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&h.virtual.enabled){t&&(!h.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):h.centeredSlides&&a.snapIndex<h.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=u,a.allowSlideNext=f,a.emit("loopFix");return}const g=h.slidesPerView==="auto"?a.slidesPerViewDynamic():Math.ceil(parseFloat(h.slidesPerView,10));let v=h.loopedSlides||g;v%h.slidesPerGroup!==0&&(v+=h.slidesPerGroup-v%h.slidesPerGroup),a.loopedSlides=v;const A=[],b=[];let c=a.activeIndex;typeof o>"u"?o=a.getSlideIndex(a.slides.filter(S=>S.classList.contains(h.slideActiveClass))[0]):c=o;const d=n==="next"||!n,m=n==="prev"||!n;let y=0,w=0;if(o<v){y=Math.max(v-o,h.slidesPerGroup);for(let S=0;S<v-o;S+=1){const C=S-Math.floor(S/s.length)*s.length;A.push(s.length-C-1)}}else if(o>a.slides.length-v*2){w=Math.max(o-(a.slides.length-v*2),h.slidesPerGroup);for(let S=0;S<w;S+=1){const C=S-Math.floor(S/s.length)*s.length;b.push(C)}}if(m&&A.forEach(S=>{a.slides[S].swiperLoopMoveDOM=!0,p.prepend(a.slides[S]),a.slides[S].swiperLoopMoveDOM=!1}),d&&b.forEach(S=>{a.slides[S].swiperLoopMoveDOM=!0,p.append(a.slides[S]),a.slides[S].swiperLoopMoveDOM=!1}),a.recalcSlides(),h.slidesPerView==="auto"&&a.updateSlides(),h.watchSlidesProgress&&a.updateSlidesOffset(),t){if(A.length>0&&m)if(typeof e>"u"){const S=a.slidesGrid[c],x=a.slidesGrid[c+y]-S;l?a.setTranslate(a.translate-x):(a.slideTo(c+y,0,!1,!0),r&&(a.touches[a.isHorizontal()?"startX":"startY"]+=x))}else r&&a.slideToLoop(e,0,!1,!0);else if(b.length>0&&d)if(typeof e>"u"){const S=a.slidesGrid[c],x=a.slidesGrid[c-w]-S;l?a.setTranslate(a.translate-x):(a.slideTo(c-w,0,!1,!0),r&&(a.touches[a.isHorizontal()?"startX":"startY"]+=x))}else a.slideToLoop(e,0,!1,!0)}if(a.allowSlidePrev=u,a.allowSlideNext=f,a.controller&&a.controller.control&&!i){const S={slideRealIndex:e,slideTo:!1,direction:n,setTranslate:r,activeSlideIndex:o,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(C=>{!C.destroyed&&C.params.loop&&C.loopFix(S)}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix(S)}a.emit("loopFix")}function Hb(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(o=>{const i=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;r[i]=o}),e.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),r.forEach(o=>{n.append(o)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}const Vb={loopCreate:Ub,loopFix:Wb,loopDestroy:Hb};function Qb(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function Gb(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}const Xb={setGrabCursor:Qb,unsetGrabCursor:Gb};function Kb(e,t=this){function n(r){if(!r||r===Et()||r===ke())return null;r.assignedSlot&&(r=r.assignedSlot);const o=r.closest(e);return!o&&!r.getRootNode?null:o||n(r.getRootNode().host)}return n(t)}function qb(e){const t=this,n=Et(),r=ke(),o=t.touchEventsData;o.evCache.push(e);const{params:i,touches:l,enabled:a}=t;if(!a||!i.simulateTouch&&e.pointerType==="mouse"||t.animating&&i.preventInteractionOnTransition)return;!t.animating&&i.cssMode&&i.loop&&t.loopFix();let s=e;s.originalEvent&&(s=s.originalEvent);let u=s.target;if(i.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(u)||"which"in s&&s.which===3||"button"in s&&s.button>0||o.isTouched&&o.isMoved)return;const f=!!i.noSwipingClass&&i.noSwipingClass!=="",p=e.composedPath?e.composedPath():e.path;f&&s.target&&s.target.shadowRoot&&p&&(u=p[0]);const h=i.noSwipingSelector?i.noSwipingSelector:`.${i.noSwipingClass}`,g=!!(s.target&&s.target.shadowRoot);if(i.noSwiping&&(g?Kb(h,u):u.closest(h))){t.allowClick=!0;return}if(i.swipeHandler&&!u.closest(i.swipeHandler))return;l.currentX=s.pageX,l.currentY=s.pageY;const v=l.currentX,A=l.currentY,b=i.edgeSwipeDetection||i.iOSEdgeSwipeDetection,c=i.edgeSwipeThreshold||i.iOSEdgeSwipeThreshold;if(b&&(v<=c||v>=r.innerWidth-c))if(b==="prevent")e.preventDefault();else return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),l.startX=v,l.startY=A,o.touchStartTime=Ii(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,i.threshold>0&&(o.allowThresholdMove=!1);let d=!0;u.matches(o.focusableElements)&&(d=!1,u.nodeName==="SELECT"&&(o.isTouched=!1)),n.activeElement&&n.activeElement.matches(o.focusableElements)&&n.activeElement!==u&&n.activeElement.blur();const m=d&&t.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||m)&&!u.isContentEditable&&s.preventDefault(),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.animating&&!i.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",s)}function Yb(e){const t=Et(),n=this,r=n.touchEventsData,{params:o,touches:i,rtlTranslate:l,enabled:a}=n;if(!a||!o.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const u=r.evCache.findIndex(S=>S.pointerId===s.pointerId);u>=0&&(r.evCache[u]=s);const f=r.evCache.length>1?r.evCache[0]:s,p=f.pageX,h=f.pageY;if(s.preventedByNestedSwiper){i.startX=p,i.startY=h;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(i,{startX:p,startY:h,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:p,currentY:h}),r.touchStartTime=Ii());return}if(o.touchReleaseOnEdges&&!o.loop){if(n.isVertical()){if(h<i.startY&&n.translate<=n.maxTranslate()||h>i.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(p<i.startX&&n.translate<=n.maxTranslate()||p>i.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}if(r.allowTouchCallbacks&&n.emit("touchMove",s),s.targetTouches&&s.targetTouches.length>1)return;i.currentX=p,i.currentY=h;const g=i.currentX-i.startX,v=i.currentY-i.startY;if(n.params.threshold&&Math.sqrt(g**2+v**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let S;n.isHorizontal()&&i.currentY===i.startY||n.isVertical()&&i.currentX===i.startX?r.isScrolling=!1:g*g+v*v>=25&&(S=Math.atan2(Math.abs(v),Math.abs(g))*180/Math.PI,r.isScrolling=n.isHorizontal()?S>o.touchAngle:90-S>o.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(i.currentX!==i.startX||i.currentY!==i.startY)&&(r.startMoving=!0),r.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&r.evCache.length>1){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!o.cssMode&&s.cancelable&&s.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&s.stopPropagation();let A=n.isHorizontal()?g:v,b=n.isHorizontal()?i.currentX-i.previousX:i.currentY-i.previousY;o.oneWayMovement&&(A=Math.abs(A)*(l?1:-1),b=Math.abs(b)*(l?1:-1)),i.diff=A,A*=o.touchRatio,l&&(A=-A,b=-b);const c=n.touchesDirection;n.swipeDirection=A>0?"prev":"next",n.touchesDirection=b>0?"prev":"next";const d=n.params.loop&&!o.cssMode;if(!r.isMoved){if(d&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const S=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(S)}r.allowMomentumBounce=!1,o.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let m;r.isMoved&&c!==n.touchesDirection&&d&&Math.abs(A)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),m=!0),n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=A+r.startTranslate;let y=!0,w=o.resistanceRatio;if(o.touchReleaseOnEdges&&(w=0),A>0?(d&&!m&&r.currentTranslate>(o.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(y=!1,o.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+A)**w))):A<0&&(d&&!m&&r.currentTranslate<(o.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(o.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(y=!1,o.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-A)**w))),y&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),o.threshold>0)if(Math.abs(A)>o.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,i.startX=i.currentX,i.startY=i.currentY,r.currentTranslate=r.startTranslate,i.diff=n.isHorizontal()?i.currentX-i.startX:i.currentY-i.startY;return}}else{r.currentTranslate=r.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&n.freeMode||o.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function Zb(e){const t=this,n=t.touchEventsData,r=n.evCache.findIndex(m=>m.pointerId===e.pointerId);if(r>=0&&n.evCache.splice(r,1),["pointercancel","pointerout","pointerleave"].includes(e.type)&&!(e.type==="pointercancel"&&(t.browser.isSafari||t.browser.isWebView)))return;const{params:o,touches:i,rtlTranslate:l,slidesGrid:a,enabled:s}=t;if(!s||!o.simulateTouch&&e.pointerType==="mouse")return;let u=e;if(u.originalEvent&&(u=u.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",u),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const f=Ii(),p=f-n.touchStartTime;if(t.allowClick){const m=u.path||u.composedPath&&u.composedPath();t.updateClickedSlide(m&&m[0]||u.target),t.emit("tap click",u),p<300&&f-n.lastClickTime<300&&t.emit("doubleTap doubleClick",u)}if(n.lastClickTime=Ii(),ks(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||i.diff===0||n.currentTranslate===n.startTranslate){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let h;if(o.followFinger?h=l?t.translate:-t.translate:h=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:h});return}let g=0,v=t.slidesSizesGrid[0];for(let m=0;m<a.length;m+=m<o.slidesPerGroupSkip?1:o.slidesPerGroup){const y=m<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof a[m+y]<"u"?h>=a[m]&&h<a[m+y]&&(g=m,v=a[m+y]-a[m]):h>=a[m]&&(g=m,v=a[a.length-1]-a[a.length-2])}let A=null,b=null;o.rewind&&(t.isBeginning?b=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(A=0));const c=(h-a[g])/v,d=g<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(c>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?A:g+d):t.slideTo(g)),t.swipeDirection==="prev"&&(c>1-o.longSwipesRatio?t.slideTo(g+d):b!==null&&c<0&&Math.abs(c)>o.longSwipesRatio?t.slideTo(b):t.slideTo(g))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(u.target===t.navigation.nextEl||u.target===t.navigation.prevEl)?u.target===t.navigation.nextEl?t.slideTo(g+d):t.slideTo(g):(t.swipeDirection==="next"&&t.slideTo(A!==null?A:g+d),t.swipeDirection==="prev"&&t.slideTo(b!==null?b:g))}}function Ld(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:o,snapGrid:i}=e,l=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=l&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!a?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!l?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=o,e.allowSlideNext=r,e.params.watchOverflow&&i!==e.snapGrid&&e.checkOverflow()}function Jb(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function ew(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let o;const i=e.maxTranslate()-e.minTranslate();i===0?o=0:o=(e.translate-e.minTranslate())/i,o!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function tw(e){const t=this;ri(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}let Nd=!1;function nw(){}const Wh=(e,t)=>{const n=Et(),{params:r,el:o,wrapperEl:i,device:l}=e,a=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",u=t;o[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:a}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&o[s]("click",e.onClick,!0),r.cssMode&&i[s]("scroll",e.onScroll),r.updateOnWindowResize?e[u](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",Ld,!0):e[u]("observerUpdate",Ld,!0),o[s]("load",e.onLoad,{capture:!0})};function rw(){const e=this,t=Et(),{params:n}=e;e.onTouchStart=qb.bind(e),e.onTouchMove=Yb.bind(e),e.onTouchEnd=Zb.bind(e),n.cssMode&&(e.onScroll=ew.bind(e)),e.onClick=Jb.bind(e),e.onLoad=tw.bind(e),Nd||(t.addEventListener("touchstart",nw),Nd=!0),Wh(e,"on")}function ow(){Wh(this,"off")}const iw={attachEvents:rw,detachEvents:ow},jd=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function lw(){const e=this,{realIndex:t,initialized:n,params:r,el:o}=e,i=r.breakpoints;if(!i||i&&Object.keys(i).length===0)return;const l=e.getBreakpoint(i,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const s=(l in i?i[l]:void 0)||e.originalParams,u=jd(e,r),f=jd(e,s),p=r.enabled;u&&!f?(o.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!u&&f&&(o.classList.add(`${r.containerModifierClass}grid`),(s.grid.fill&&s.grid.fill==="column"||!s.grid.fill&&r.grid.fill==="column")&&o.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(A=>{if(typeof s[A]>"u")return;const b=r[A]&&r[A].enabled,c=s[A]&&s[A].enabled;b&&!c&&e[A].disable(),!b&&c&&e[A].enable()});const h=s.direction&&s.direction!==r.direction,g=r.loop&&(s.slidesPerView!==r.slidesPerView||h);h&&n&&e.changeDirection(),je(e.params,s);const v=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!v?e.disable():!p&&v&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",s),g&&n&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",s)}function aw(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const o=ke(),i=t==="window"?o.innerHeight:n.clientHeight,l=Object.keys(e).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const s=parseFloat(a.substr(1));return{value:i*s,point:a}}return{value:a,point:a}});l.sort((a,s)=>parseInt(a.value,10)-parseInt(s.value,10));for(let a=0;a<l.length;a+=1){const{point:s,value:u}=l[a];t==="window"?o.matchMedia(`(min-width: ${u}px)`).matches&&(r=s):u<=n.clientWidth&&(r=s)}return r||"max"}const sw={setBreakpoint:lw,getBreakpoint:aw};function uw(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(o=>{r[o]&&n.push(t+o)}):typeof r=="string"&&n.push(t+r)}),n}function cw(){const e=this,{classNames:t,params:n,rtl:r,el:o,device:i}=e,l=uw(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:i.android},{ios:i.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...l),o.classList.add(...t),e.emitContainerClasses()}function dw(){const e=this,{el:t,classNames:n}=e;t.classList.remove(...n),e.emitContainerClasses()}const fw={addClasses:cw,removeClasses:dw};function pw(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const o=e.slides.length-1,i=e.slidesGrid[o]+e.slidesSizesGrid[o]+r*2;e.isLocked=e.size>i}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}const hw={checkOverflow:pw},Md={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function gw(e,t){return function(r={}){const o=Object.keys(r)[0],i=r[o];if(typeof i!="object"||i===null){je(t,r);return}if(["navigation","pagination","scrollbar"].indexOf(o)>=0&&e[o]===!0&&(e[o]={auto:!0}),!(o in e&&"enabled"in i)){je(t,r);return}e[o]===!0&&(e[o]={enabled:!0}),typeof e[o]=="object"&&!("enabled"in e[o])&&(e[o].enabled=!0),e[o]||(e[o]={enabled:!1}),je(t,r)}}const ya={eventsEmitter:fb,update:Sb,translate:Ob,transition:jb,slide:$b,loop:Vb,grabCursor:Xb,events:iw,breakpoints:sw,checkOverflow:hw,classes:fw},ba={};let fo=class ft{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=je({},r),n&&!r.el&&(r.el=n);const o=Et();if(r.el&&typeof r.el=="string"&&o.querySelectorAll(r.el).length>1){const s=[];return o.querySelectorAll(r.el).forEach(u=>{const f=je({},r,{el:u});s.push(new ft(f))}),s}const i=this;i.__swiper__=!0,i.support=$h(),i.device=ab({userAgent:r.userAgent}),i.browser=ub(),i.eventsListeners={},i.eventsAnyListeners=[],i.modules=[...i.__modules__],r.modules&&Array.isArray(r.modules)&&i.modules.push(...r.modules);const l={};i.modules.forEach(s=>{s({params:r,swiper:i,extendParams:gw(r,l),on:i.on.bind(i),once:i.once.bind(i),off:i.off.bind(i),emit:i.emit.bind(i)})});const a=je({},Md,l);return i.params=je({},a,ba,r),i.originalParams=je({},i.params),i.passedParams=je({},r),i.params&&i.params.on&&Object.keys(i.params.on).forEach(s=>{i.on(s,i.params.on[s])}),i.params&&i.params.onAny&&i.onAny(i.params.onAny),Object.assign(i,{enabled:i.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return i.params.direction==="horizontal"},isVertical(){return i.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:i.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:i.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),i.emit("_swiper"),i.params.init&&i.init(),i}getSlideIndex(t){const{slidesEl:n,params:r}=this,o=at(n,`.${r.slideClass}, swiper-slide`),i=Di(o[0]);return Di(t)-i}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=at(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const o=r.minTranslate(),l=(r.maxTranslate()-o)*t+o;r.translateTo(l,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const o=t.getSlideClasses(r);n.push({slideEl:r,classNames:o}),t.emit("_slideClass",r,o)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:o,slides:i,slidesGrid:l,slidesSizesGrid:a,size:s,activeIndex:u}=r;let f=1;if(o.centeredSlides){let p=i[u]?i[u].swiperSlideSize:0,h;for(let g=u+1;g<i.length;g+=1)i[g]&&!h&&(p+=i[g].swiperSlideSize,f+=1,p>s&&(h=!0));for(let g=u-1;g>=0;g-=1)i[g]&&!h&&(p+=i[g].swiperSlideSize,f+=1,p>s&&(h=!0))}else if(t==="current")for(let p=u+1;p<i.length;p+=1)(n?l[p]+a[p]-l[u]<s:l[p]-l[u]<s)&&(f+=1);else for(let p=u-1;p>=0;p-=1)l[u]-l[p]<s&&(f+=1);return f}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(l=>{l.complete&&ri(t,l)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function o(){const l=t.rtlTranslate?t.translate*-1:t.translate,a=Math.min(Math.max(l,t.maxTranslate()),t.minTranslate());t.setTranslate(a),t.updateActiveIndex(),t.updateSlidesClasses()}let i;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)o(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const l=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;i=t.slideTo(l.length-1,0,!1,!0)}else i=t.slideTo(t.activeIndex,0,!1,!0);i||o()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,o=r.params.direction;return t||(t=o==="horizontal"?"vertical":"horizontal"),t===o||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${o}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(i=>{t==="vertical"?i.style.width="":i.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.shadowEl&&(n.isElement=!0);const o=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let l=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(o()):at(r,o())[0])();return!l&&n.params.createElements&&(l=Bh("div",n.params.wrapperClass),r.append(l),at(r,`.${n.params.slideClass}`).forEach(a=>{l.append(a)})),Object.assign(n,{el:r,wrapperEl:l,slidesEl:n.isElement?r:l,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Rt(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Rt(r,"direction")==="rtl"),wrongRTL:Rt(l,"display")==="-webkit-box"}),!0}init(t){const n=this;return n.initialized||n.mount(t)===!1||(n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents(),[...n.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete?ri(n,o):o.addEventListener("load",i=>{ri(n,i.target)})}),Ts(n),n.initialized=!0,Ts(n),n.emit("init"),n.emit("afterInit")),n}destroy(t=!0,n=!0){const r=this,{params:o,el:i,wrapperEl:l,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),o.loop&&r.loopDestroy(),n&&(r.removeClasses(),i.removeAttribute("style"),l.removeAttribute("style"),a&&a.length&&a.forEach(s=>{s.classList.remove(o.slideVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el.swiper=null,Z1(r)),r.destroyed=!0),null}static extendDefaults(t){je(ba,t)}static get extendedDefaults(){return ba}static get defaults(){return Md}static installModule(t){ft.prototype.__modules__||(ft.prototype.__modules__=[]);const n=ft.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>ft.installModule(n)),ft):(ft.installModule(t),ft)}};Object.keys(ya).forEach(e=>{Object.keys(ya[e]).forEach(t=>{fo.prototype[t]=ya[e][t]})});fo.use([cb,db]);function mw({swiper:e,extendParams:t,on:n,emit:r}){const o=Et(),i=ke();e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function l(u){if(!e.enabled)return;const{rtlTranslate:f}=e;let p=u;p.originalEvent&&(p=p.originalEvent);const h=p.keyCode||p.charCode,g=e.params.keyboard.pageUpDown,v=g&&h===33,A=g&&h===34,b=h===37,c=h===39,d=h===38,m=h===40;if(!e.allowSlideNext&&(e.isHorizontal()&&c||e.isVertical()&&m||A)||!e.allowSlidePrev&&(e.isHorizontal()&&b||e.isVertical()&&d||v))return!1;if(!(p.shiftKey||p.altKey||p.ctrlKey||p.metaKey)&&!(o.activeElement&&o.activeElement.nodeName&&(o.activeElement.nodeName.toLowerCase()==="input"||o.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(v||A||b||c||d||m)){let y=!1;if(Fi(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&Fi(e.el,`.${e.params.slideActiveClass}`).length===0)return;const w=e.el,S=w.clientWidth,C=w.clientHeight,x=i.innerWidth,N=i.innerHeight,_=nb(w);f&&(_.left-=w.scrollLeft);const T=[[_.left,_.top],[_.left+S,_.top],[_.left,_.top+C],[_.left+S,_.top+C]];for(let O=0;O<T.length;O+=1){const j=T[O];if(j[0]>=0&&j[0]<=x&&j[1]>=0&&j[1]<=N){if(j[0]===0&&j[1]===0)continue;y=!0}}if(!y)return}e.isHorizontal()?((v||A||b||c)&&(p.preventDefault?p.preventDefault():p.returnValue=!1),((A||c)&&!f||(v||b)&&f)&&e.slideNext(),((v||b)&&!f||(A||c)&&f)&&e.slidePrev()):((v||A||d||m)&&(p.preventDefault?p.preventDefault():p.returnValue=!1),(A||m)&&e.slideNext(),(v||d)&&e.slidePrev()),r("keyPress",h)}}function a(){e.keyboard.enabled||(o.addEventListener("keydown",l),e.keyboard.enabled=!0)}function s(){e.keyboard.enabled&&(o.removeEventListener("keydown",l),e.keyboard.enabled=!1)}n("init",()=>{e.params.keyboard.enabled&&a()}),n("destroy",()=>{e.keyboard.enabled&&s()}),Object.assign(e.keyboard,{enable:a,disable:s})}function vw(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(o=>{if(!n[o]&&n.auto===!0){let i=at(e.el,`.${r[o]}`)[0];i||(i=Bh("div",r[o]),i.className=r[o],e.el.append(i)),n[o]=i,t[o]=i}}),n}function Sr(e=""){return`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Aw({swiper:e,extendParams:t,on:n,emit:r}){const o="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:c=>c,formatFractionTotal:c=>c,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),e.pagination={el:null,bullets:[]};let i,l=0;const a=c=>(Array.isArray(c)||(c=[c].filter(d=>!!d)),c);function s(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function u(c,d){const{bulletActiveClass:m}=e.params.pagination;c&&(c=c[`${d==="prev"?"previous":"next"}ElementSibling`],c&&(c.classList.add(`${m}-${d}`),c=c[`${d==="prev"?"previous":"next"}ElementSibling`],c&&c.classList.add(`${m}-${d}-${d}`)))}function f(c){const d=c.target.closest(Sr(e.params.pagination.bulletClass));if(!d)return;c.preventDefault();const m=Di(d)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===m)return;const y=e.getSlideIndexByData(m),w=e.getSlideIndexByData(e.realIndex);y>e.slides.length-e.loopedSlides&&e.loopFix({direction:y>w?"next":"prev",activeSlideIndex:y,slideTo:!1}),e.slideToLoop(m)}else e.slideTo(m)}function p(){const c=e.rtl,d=e.params.pagination;if(s())return;let m=e.pagination.el;m=a(m);let y,w;const S=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,C=e.params.loop?Math.ceil(S/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(w=e.previousRealIndex||0,y=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(y=e.snapIndex,w=e.previousSnapIndex):(w=e.previousIndex||0,y=e.activeIndex||0),d.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const x=e.pagination.bullets;let N,_,T;if(d.dynamicBullets&&(i=Cs(x[0],e.isHorizontal()?"width":"height",!0),m.forEach(O=>{O.style[e.isHorizontal()?"width":"height"]=`${i*(d.dynamicMainBullets+4)}px`}),d.dynamicMainBullets>1&&w!==void 0&&(l+=y-(w||0),l>d.dynamicMainBullets-1?l=d.dynamicMainBullets-1:l<0&&(l=0)),N=Math.max(y-l,0),_=N+(Math.min(x.length,d.dynamicMainBullets)-1),T=(_+N)/2),x.forEach(O=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(I=>`${d.bulletActiveClass}${I}`)].map(I=>typeof I=="string"&&I.includes(" ")?I.split(" "):I).flat();O.classList.remove(...j)}),m.length>1)x.forEach(O=>{const j=Di(O);j===y?O.classList.add(...d.bulletActiveClass.split(" ")):e.isElement&&O.setAttribute("part","bullet"),d.dynamicBullets&&(j>=N&&j<=_&&O.classList.add(...`${d.bulletActiveClass}-main`.split(" ")),j===N&&u(O,"prev"),j===_&&u(O,"next"))});else{const O=x[y];if(O&&O.classList.add(...d.bulletActiveClass.split(" ")),e.isElement&&x.forEach((j,I)=>{j.setAttribute("part",I===y?"bullet-active":"bullet")}),d.dynamicBullets){const j=x[N],I=x[_];for(let Y=N;Y<=_;Y+=1)x[Y]&&x[Y].classList.add(...`${d.bulletActiveClass}-main`.split(" "));u(j,"prev"),u(I,"next")}}if(d.dynamicBullets){const O=Math.min(x.length,d.dynamicMainBullets+4),j=(i*O-i)/2-T*i,I=c?"right":"left";x.forEach(Y=>{Y.style[e.isHorizontal()?I:"top"]=`${j}px`})}}m.forEach((x,N)=>{if(d.type==="fraction"&&(x.querySelectorAll(Sr(d.currentClass)).forEach(_=>{_.textContent=d.formatFractionCurrent(y+1)}),x.querySelectorAll(Sr(d.totalClass)).forEach(_=>{_.textContent=d.formatFractionTotal(C)})),d.type==="progressbar"){let _;d.progressbarOpposite?_=e.isHorizontal()?"vertical":"horizontal":_=e.isHorizontal()?"horizontal":"vertical";const T=(y+1)/C;let O=1,j=1;_==="horizontal"?O=T:j=T,x.querySelectorAll(Sr(d.progressbarFillClass)).forEach(I=>{I.style.transform=`translate3d(0,0,0) scaleX(${O}) scaleY(${j})`,I.style.transitionDuration=`${e.params.speed}ms`})}d.type==="custom"&&d.renderCustom?(x.innerHTML=d.renderCustom(e,y+1,C),N===0&&r("paginationRender",x)):(N===0&&r("paginationRender",x),r("paginationUpdate",x)),e.params.watchOverflow&&e.enabled&&x.classList[e.isLocked?"add":"remove"](d.lockClass)})}function h(){const c=e.params.pagination;if(s())return;const d=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;let m=e.pagination.el;m=a(m);let y="";if(c.type==="bullets"){let w=e.params.loop?Math.ceil(d/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&w>d&&(w=d);for(let S=0;S<w;S+=1)c.renderBullet?y+=c.renderBullet.call(e,S,c.bulletClass):y+=`<${c.bulletElement} ${e.isElement?'part="bullet"':""} class="${c.bulletClass}"></${c.bulletElement}>`}c.type==="fraction"&&(c.renderFraction?y=c.renderFraction.call(e,c.currentClass,c.totalClass):y=`<span class="${c.currentClass}"></span> / <span class="${c.totalClass}"></span>`),c.type==="progressbar"&&(c.renderProgressbar?y=c.renderProgressbar.call(e,c.progressbarFillClass):y=`<span class="${c.progressbarFillClass}"></span>`),e.pagination.bullets=[],m.forEach(w=>{c.type!=="custom"&&(w.innerHTML=y||""),c.type==="bullets"&&e.pagination.bullets.push(...w.querySelectorAll(Sr(c.bulletClass)))}),c.type!=="custom"&&r("paginationRender",m[0])}function g(){e.params.pagination=vw(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const c=e.params.pagination;if(!c.el)return;let d;typeof c.el=="string"&&e.isElement&&(d=e.el.shadowRoot.querySelector(c.el)),!d&&typeof c.el=="string"&&(d=[...document.querySelectorAll(c.el)]),d||(d=c.el),!(!d||d.length===0)&&(e.params.uniqueNavElements&&typeof c.el=="string"&&Array.isArray(d)&&d.length>1&&(d=[...e.el.querySelectorAll(c.el)],d.length>1&&(d=d.filter(m=>Fi(m,".swiper")[0]===e.el)[0])),Array.isArray(d)&&d.length===1&&(d=d[0]),Object.assign(e.pagination,{el:d}),d=a(d),d.forEach(m=>{c.type==="bullets"&&c.clickable&&m.classList.add(c.clickableClass),m.classList.add(c.modifierClass+c.type),m.classList.add(e.isHorizontal()?c.horizontalClass:c.verticalClass),c.type==="bullets"&&c.dynamicBullets&&(m.classList.add(`${c.modifierClass}${c.type}-dynamic`),l=0,c.dynamicMainBullets<1&&(c.dynamicMainBullets=1)),c.type==="progressbar"&&c.progressbarOpposite&&m.classList.add(c.progressbarOppositeClass),c.clickable&&m.addEventListener("click",f),e.enabled||m.classList.add(c.lockClass)}))}function v(){const c=e.params.pagination;if(s())return;let d=e.pagination.el;d&&(d=a(d),d.forEach(m=>{m.classList.remove(c.hiddenClass),m.classList.remove(c.modifierClass+c.type),m.classList.remove(e.isHorizontal()?c.horizontalClass:c.verticalClass),c.clickable&&m.removeEventListener("click",f)})),e.pagination.bullets&&e.pagination.bullets.forEach(m=>m.classList.remove(...c.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const c=e.params.pagination;let{el:d}=e.pagination;d=a(d),d.forEach(m=>{m.classList.remove(c.horizontalClass,c.verticalClass),m.classList.add(e.isHorizontal()?c.horizontalClass:c.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?b():(g(),h(),p())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&p()}),n("snapIndexChange",()=>{p()}),n("snapGridLengthChange",()=>{h(),p()}),n("destroy",()=>{v()}),n("enable disable",()=>{let{el:c}=e.pagination;c&&(c=a(c),c.forEach(d=>d.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{p()}),n("click",(c,d)=>{const m=d.target;let{el:y}=e.pagination;if(Array.isArray(y)||(y=[y].filter(w=>!!w)),e.params.pagination.el&&e.params.pagination.hideOnClick&&y&&y.length>0&&!m.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&m===e.navigation.nextEl||e.navigation.prevEl&&m===e.navigation.prevEl))return;const w=y[0].classList.contains(e.params.pagination.hiddenClass);r(w===!0?"paginationShow":"paginationHide"),y.forEach(S=>S.classList.toggle(e.params.pagination.hiddenClass))}});const A=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:c}=e.pagination;c&&(c=a(c),c.forEach(d=>d.classList.remove(e.params.pagination.paginationDisabledClass))),g(),h(),p()},b=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:c}=e.pagination;c&&(c=a(c),c.forEach(d=>d.classList.add(e.params.pagination.paginationDisabledClass))),v()};Object.assign(e.pagination,{enable:A,disable:b,render:h,update:p,init:g,destroy:v})}function En(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function zt(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:En(t[r])&&En(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:zt(e[r],t[r]):e[r]=t[r]})}function Hh(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Vh(e={}){return e.pagination&&typeof e.pagination.el>"u"}function Qh(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function Gh(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function yw(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}const Xh=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function bw(e={},t=!0){const n={on:{}},r={},o={};zt(n,fo.defaults),zt(n,fo.extendedDefaults),n._emitClasses=!0,n.init=!1;const i={},l=Xh.map(s=>s.replace(/_/,"")),a=Object.assign({},e);return Object.keys(a).forEach(s=>{typeof e[s]>"u"||(l.indexOf(s)>=0?En(e[s])?(n[s]={},o[s]={},zt(n[s],e[s]),zt(o[s],e[s])):(n[s]=e[s],o[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:i[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:o,rest:i,events:r}}function ww({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:o,swiper:i},l){Hh(l)&&t&&n&&(i.params.navigation.nextEl=t,i.originalParams.navigation.nextEl=t,i.params.navigation.prevEl=n,i.originalParams.navigation.prevEl=n),Vh(l)&&r&&(i.params.pagination.el=r,i.originalParams.pagination.el=r),Qh(l)&&o&&(i.params.scrollbar.el=o,i.originalParams.scrollbar.el=o),i.init(e)}function xw(e,t,n,r,o){const i=[];if(!t)return i;const l=s=>{i.indexOf(s)<0&&i.push(s)};if(n&&r){const s=r.map(o),u=n.map(o);s.join("")!==u.join("")&&l("children"),r.length!==n.length&&l("children")}return Xh.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(En(e[s])&&En(t[s])){const u=Object.keys(e[s]),f=Object.keys(t[s]);u.length!==f.length?l(s):(u.forEach(p=>{e[s][p]!==t[s][p]&&l(s)}),f.forEach(p=>{e[s][p]!==t[s][p]&&l(s)}))}else e[s]!==t[s]&&l(s)}),i}function Kh(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function qh(e){const t=[];return D.Children.toArray(e).forEach(n=>{Kh(n)?t.push(n):n.props&&n.props.children&&qh(n.props.children).forEach(r=>t.push(r))}),t}function Sw(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return D.Children.toArray(e).forEach(r=>{if(Kh(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const o=qh(r.props.children);o.length>0?o.forEach(i=>t.push(i)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function Ew({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:o,prevEl:i,scrollbarEl:l,paginationEl:a}){const s=r.filter(x=>x!=="children"&&x!=="direction"&&x!=="wrapperClass"),{params:u,pagination:f,navigation:p,scrollbar:h,virtual:g,thumbs:v}=e;let A,b,c,d,m,y,w,S;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&u.thumbs&&!u.thumbs.swiper&&(A=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(b=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||a)&&(u.pagination||u.pagination===!1)&&f&&!f.el&&(c=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||l)&&(u.scrollbar||u.scrollbar===!1)&&h&&!h.el&&(d=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||i)&&(n.navigation.nextEl||o)&&(u.navigation||u.navigation===!1)&&p&&!p.prevEl&&!p.nextEl&&(m=!0);const C=x=>{e[x]&&(e[x].destroy(),x==="navigation"?(e.isElement&&(e[x].prevEl.remove(),e[x].nextEl.remove()),u[x].prevEl=void 0,u[x].nextEl=void 0,e[x].prevEl=void 0,e[x].nextEl=void 0):(e.isElement&&e[x].el.remove(),u[x].el=void 0,e[x].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!n.loop?y=!0:!u.loop&&n.loop?w=!0:S=!0),s.forEach(x=>{if(En(u[x])&&En(n[x]))zt(u[x],n[x]),(x==="navigation"||x==="pagination"||x==="scrollbar")&&"enabled"in n[x]&&!n[x].enabled&&C(x);else{const N=n[x];(N===!0||N===!1)&&(x==="navigation"||x==="pagination"||x==="scrollbar")?N===!1&&C(x):u[x]=n[x]}}),s.includes("controller")&&!b&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&g&&u.virtual.enabled&&(g.slides=t,g.update(!0)),r.includes("children")&&t&&u.loop&&(S=!0),A&&v.init()&&v.update(!0),b&&(e.controller.control=u.controller.control),c&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-pagination"),e.el.shadowEl.appendChild(a)),a&&(u.pagination.el=a),f.init(),f.render(),f.update()),d&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-scrollbar"),e.el.shadowEl.appendChild(l)),l&&(u.scrollbar.el=l),h.init(),h.updateSize(),h.setTranslate()),m&&(e.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),e.el.shadowEl.appendChild(o)),(!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-prev"),e.el.shadowEl.appendChild(i))),o&&(u.navigation.nextEl=o),i&&(u.navigation.prevEl=i),p.init(),p.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(y||S)&&e.loopDestroy(),(w||S)&&e.loopCreate(),e.update()}function kw(e,t,n){if(!n)return null;const r=f=>{let p=f;return f<0?p=t.length+f:p>=t.length&&(p=p-t.length),p},o=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:i,to:l}=n,a=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,u=[];for(let f=a;f<s;f+=1)f>=i&&f<=l&&u.push(t[r(f)]);return u.map((f,p)=>D.cloneElement(f,{swiper:e,style:o,key:`slide-${p}`}))}const Cw=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Ur(e,t){return typeof window>"u"?E.useEffect(e,t):E.useLayoutEffect(e,t)}const Rd=E.createContext(null),Tw=E.createContext(null);function Ps(){return Ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ps.apply(this,arguments)}const Yh=E.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:o="div",children:i,onSwiper:l,...a}=e===void 0?{}:e,s=!1;const[u,f]=E.useState("swiper"),[p,h]=E.useState(null),[g,v]=E.useState(!1),A=E.useRef(!1),b=E.useRef(null),c=E.useRef(null),d=E.useRef(null),m=E.useRef(null),y=E.useRef(null),w=E.useRef(null),S=E.useRef(null),C=E.useRef(null),{params:x,passedParams:N,rest:_,events:T}=bw(a),{slides:O,slots:j}=Sw(i),I=()=>{v(!g)};Object.assign(x.on,{_containerClasses(R,z){f(z)}});const Y=()=>{Object.assign(x.on,T),s=!0;const R={...x};if(delete R.wrapperClass,c.current=new fo(R),c.current.virtual&&c.current.params.virtual.enabled){c.current.virtual.slides=O;const z={cache:!1,slides:O,renderExternal:h,renderExternalUpdate:!1};zt(c.current.params.virtual,z),zt(c.current.originalParams.virtual,z)}};b.current||Y(),c.current&&c.current.on("_beforeBreakpoint",I);const te=()=>{s||!T||!c.current||Object.keys(T).forEach(R=>{c.current.on(R,T[R])})},fe=()=>{!T||!c.current||Object.keys(T).forEach(R=>{c.current.off(R,T[R])})};E.useEffect(()=>()=>{c.current&&c.current.off("_beforeBreakpoint",I)}),E.useEffect(()=>{!A.current&&c.current&&(c.current.emitSlidesClasses(),A.current=!0)}),Ur(()=>{if(t&&(t.current=b.current),!!b.current)return c.current.destroyed&&Y(),ww({el:b.current,nextEl:y.current,prevEl:w.current,paginationEl:S.current,scrollbarEl:C.current,swiper:c.current},x),l&&l(c.current),()=>{c.current&&!c.current.destroyed&&c.current.destroy(!0,!1)}},[]),Ur(()=>{te();const R=xw(N,d.current,O,m.current,z=>z.key);return d.current=N,m.current=O,R.length&&c.current&&!c.current.destroyed&&Ew({swiper:c.current,slides:O,passedParams:N,changedParams:R,nextEl:y.current,prevEl:w.current,scrollbarEl:C.current,paginationEl:S.current}),()=>{fe()}}),Ur(()=>{Cw(c.current)},[p]);function L(){return x.virtual?kw(c.current,O,p):O.map((R,z)=>D.cloneElement(R,{swiper:c.current,swiperSlideIndex:z}))}return D.createElement(r,Ps({ref:b,className:Gh(`${u}${n?` ${n}`:""}`)},_),D.createElement(Tw.Provider,{value:c.current},j["container-start"],D.createElement(o,{className:yw(x.wrapperClass)},j["wrapper-start"],L(),j["wrapper-end"]),Hh(x)&&D.createElement(D.Fragment,null,D.createElement("div",{ref:w,className:"swiper-button-prev"}),D.createElement("div",{ref:y,className:"swiper-button-next"})),Qh(x)&&D.createElement("div",{ref:C,className:"swiper-scrollbar"}),Vh(x)&&D.createElement("div",{ref:S,className:"swiper-pagination"}),j["container-end"]))});Yh.displayName="Swiper";function Os(){return Os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Os.apply(this,arguments)}const Zh=E.forwardRef(function(e,t){let{tag:n="div",children:r,className:o="",swiper:i,zoom:l,lazy:a,virtualIndex:s,swiperSlideIndex:u,...f}=e===void 0?{}:e;const p=E.useRef(null),[h,g]=E.useState("swiper-slide"),[v,A]=E.useState(!1);function b(y,w,S){w===p.current&&g(S)}Ur(()=>{if(typeof u<"u"&&(p.current.swiperSlideIndex=u),t&&(t.current=p.current),!(!p.current||!i)){if(i.destroyed){h!=="swiper-slide"&&g("swiper-slide");return}return i.on("_slideClass",b),()=>{i&&i.off("_slideClass",b)}}}),Ur(()=>{i&&p.current&&!i.destroyed&&g(i.getSlideClasses(p.current))},[i]);const c={isActive:h.indexOf("swiper-slide-active")>=0,isVisible:h.indexOf("swiper-slide-visible")>=0,isPrev:h.indexOf("swiper-slide-prev")>=0,isNext:h.indexOf("swiper-slide-next")>=0},d=()=>typeof r=="function"?r(c):r,m=()=>{A(!0)};return D.createElement(n,Os({ref:p,className:Gh(`${h}${o?` ${o}`:""}`),"data-swiper-slide-index":s,onLoad:m},f),l&&D.createElement(Rd.Provider,{value:c},D.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof l=="number"?l:void 0},d(),a&&!v&&D.createElement("div",{className:"swiper-lazy-preloader"}))),!l&&D.createElement(Rd.Provider,{value:c},d(),a&&!v&&D.createElement("div",{className:"swiper-lazy-preloader"})))});Zh.displayName="SwiperSlide";const Pw="_screen_1g2id_1",Ow="_wrapper_1g2id_15",_w="_image_1g2id_22",Lw="_button_1g2id_27",Wo={screen:Pw,wrapper:Ow,image:_w,button:Lw};function Nw({type:e,imageSrc:t,title:n}){const r=ju(),o=bh(),i=()=>{r(wy(e)),o(zi.CONSTRUCTOR)};return k.jsxs("div",{className:Wo.screen,children:[k.jsx("img",{src:t,alt:"",className:Wo.image}),k.jsxs("div",{className:Wo.wrapper,children:[k.jsx("h2",{children:n}),k.jsx("button",{className:Wo.button,onClick:i,children:"Выбрать"})]})]})}const jw="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAXsBegMBIgACEQEDEQH/xAAuAAEAAwEBAQEAAAAAAAAAAAAAAwQFAgEGBwEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAP2HPcrCrEszUL6gAAAAAAAAAAAAAAAAAAPfBfsZF1I3Q5dDl0OXQ5dDl0OXQ5dDl0OXQ5dDl0OXQ5dDl0OXQ5dDl0OXQ5dDl0OXQ5dDl0ABXJvM/wANFnDRZw0WcNFnDRZw0WcNFnDRZw0WcNFnDRZw0WcNFnDRZw0WcNFnDRZw0WcNP3NukoAAGZp5YAAAAAAAAAAAAAAAAAAAmhlL4AAGXqZYAAAAAAAAAAAAAAAAAAAlilL4AAGXqZYAAAAAAAAAAAAAAAAAAAlilL4AAGbpQlF1yAAAAAAAAAAAAAAAAAAJ+Lp2AAAcnSp4XFMXFMXFMXFMXFMXFMXFMXFMXFMXFMXFMXFMXFMXFMXFMXFMXFMXFMXFawegAAUL+WAAAAAAAAAAAAAAAAAAALVWUvgAAZeplgAAAAAAAAAAAAAAAAAACWKUvgAAZeplgAAAAAAAAAAAAAAAAAACWKUvkB3J8l9aAMzTokIAAAAAAAAAAAAAAAAAAEsVss17ER8t9dgb4A89Ffmx4QJxAnECcQJxAnECcQJxAnECcQJxAnECcQJxAnECcQJxAnECcRz+egAACvYzB4AAAAAAAAAAAAAAAAAAHV2hMXgAAMvUywAAAAAAAAAAAAAAAAAABLFKXwAAMvUywAAAAAAAAAAAAAAAAAABLFKXwAAMvUzTkAAAAAAAAAAAAAAAAAACWKcugAAQzDN51BltQZbUGW1BltQZbUGW1BltQZbUGW1BltQZbUGW1BltQZbUGW1BltQZbUGW1Bn3ewAAA56oEnlcWFcWFcWFcWFcWFcWFcWFcWFcWFcWFcWFcWFcWFcWFcWFcWFcWFcWFcW7GZaLQAAGXqZYAAAAAAAAAAAAAAAAAAAlilL4AAGXqZYAAAAAAAAAAAAAAAAAAAlilL4AAGXqZh4AAAAAAAAAAAAAAAAAABLFKXwAAKN7wzFzkqrQqrQqrQqrQqrQqrQqrQqrQqrQqrQqrQqrQqrQqrQqrQqrQqrQqrQq2+pwAeksNuEiAAAAAAAAAAAAAAAAAAAAAOhZen//xAAoEAACAgIBBAEEAgMAAAAAAAAAAhIUAQNQBBExMzAFEBMgISI0QlL/2gAIAQEAAQgA3b8asRVnZvKdRp2PnWtjT+X8Q/UaNbrrbiMZzjx0/VZw2F2DtJs5+2j6emjd+XFBLP5zf9PTfu/LnisdU0VwRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIryuWxjzNCaE0JoTQmhNCaE0JoTQmhNCaE0JoTQmhNCaE0JoTQmhNCaE0JoTQmhNCaE0JoTQmhNDGcZ8fBu2x/qvnhlbK57417J4+DOe+c54jRntsxjkNPsXkNPsXkNPsXkNPsXkNPsX4GxFs44jRju/f4Nuqf84yrL54Vdbv4RMIvbHLs2Ex3znqM/wCthyw5YcsOWHLDlhyw5YcsOWHLDlhyw5YcsOWHLDlhyw5YcsOWHLDlhyw5YcsOWHLDlhyw5YcsOWHLDlhxeo/6+Da83zxHTv5XkNPsXkNPsXkNPsXkNPsX7rt1vnOE4zT7F+3VZzjpt+cfS85vauN0+xft1f8Ai9QfTP8AO0/ruTKt34jQmcd2ybk/Lq2IdB9O6jT1S7Nn6ZxjOO2c9OufFYrFYrFYrFYrFYrFYrFYrFYrFYrFYrFYrFYrFYrFYrFYrFYrFYrFYrFYXQi+fhy2MeZoTQmhNCaE0JoTQmhNCaE0JoTQmhNCaE0JoTQmhNCaE0JoTQmhNCaE0JoTQmhNCaE0JoYzjPj4N22P9V88MrZXPfGvZPHwZz3znPEaM9tmMchp9i8hp9i8hp9i8hp9i8hp9i/A2ItnHEaMd37/AAbdU/5xlWXzwq63fwiYRe2OXZsJjvnPUZ/1sOWHLDlhyw5YcsOWHLDlhyw5YcsOWHLDlhyw5YcsOWHLDlhyw5YcsOWHLDlhyw5YcsOWHLDlhyw5YcsOL1H/AF8G15vniOnfyvIafYvIafYvIafYvIafYvIafYvIafYvwbkyrd+I0JnHds/vnGM47Zz0658VisVisVisVisVisVisVisVisVisVisVisVisVisVisVisVisVisVisVhdCL5/SOTdryuZccq5bP32quM/xxaYxnJjGMfb/8QALRAAAwACAQIDBwMFAAAAAAAAAAECkaFQMUEDMFEQEiAhgIGxETJCUlNhYnD/2gAIAQEACT8A/cNs8ROl2PEXv+h4iVPtxLPmvX2d37Lb/pXoW/3e97v+S2vVevF9kJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQlyrSLnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnI/J68OzquQ7/AEQdvI6ia4Zc1ORSKRSKRSKRSKRSKRSKRSKRSKRSKRSKRSKRSKRSKRSKRSKRSKRSKRSKRSLyei4j7f8AQ7mmuqT/AF4/qvCr8Hf3vxx/9q/wf7fh/D0fEfb2fyhzlCSmP179fhQ2i9F6L0XovRei9F6L0XovRei9F6L0XovRei9F6L0XovRei9F6L0XovRei9F6L0XovRei9Hz8ppFzkuclzkuclzkuclzkuclzkuclzkuclzkuclzkuclzkuclzkuclzkuclzkuclzkuclzkuclzkuclzkuclzkuclzkuclzkfk9eHZ1XId/og7eR1E1wy5qcikUikUikUikUikUikUikUikUikUikUikUikUikUikUikUikUikUikUikXk9FxH2+ijo+I+3kIbRei9F6L0XovRei9F6L0XovRei9F6L0XovRei9F6L0XovRei9F6L0XovRei9F6L0XovRej5/Evk+RXH//xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAECAQE/ABA//8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAwEBPwAQP//Z",Mw="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAXsBegMBIgACEQEDEQH/xAAuAAEBAQEBAQEBAAAAAAAAAAAABAUCAwEGBwEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAP7DnuV8UxKfaC9QAAAAAAAAAAAAAAAAAAH34L6Mi1PN0OXQ5dDl0OXQ5dDl0OXQ5dDl0OXQ5dDl0OXQ5dDl0OXQ5dDl0OXQ5dDl0OXQ5dAATnt8z/hos4aLOGizhos4ajPuOiUo+Zw0WcNFnDRZw0fuaNRBcfSIr+Zw0WcNFnDRZw0fuaNRFaAAAMzTywAAAABXJUUZujnAAAAAC2Kw9M++AAAAAAaGfeeoAAGXqZYAAAAAqlqPfO0c4AAAAAWR2HcF8AAAAAAvgvPUAADL1MsAAAAAVS1HvnaOcAAAAALI7DuC+AAAAAAXwXnqAABl6mWAAAAAKpaj3ztHOAAAAAFkdh3BfAAAAAAL4Lz1AAAy9TLAAAAAFUtR752jnAAAAACyOw7gvgAAAAAF8F56gAAZeplgAAAACqWo987RzgAAAABZHYdwXwAAAAAC+C89QAAMvUzjgAAAACqWw9c7TzT4AAAABZHeINHOAAAAAF8GidgAAeXqM/5ojOaIzmiM5ojOaIkq+h4+wz/miM5ojOaIzmiM5oiWoE9AzmiM5ojOaIzmiM5oiegB4Hfp+S/WgDjvPO+fIeryHq8h6vIeryFdOXae/l6Zx6fPIeryHq8h6vIev3xFvvl6B6ePpnHr88h6vIeryHq8h6/fEXe2ZonU9Hkflv12BvgDL1MsAAAAAVS1HvnaOcAAAAALI7DuC+AAAAAAXwXnqAABl6mWAAAAAKpaj3ztHOAAAAAFkdh3BfAAAAAAL4Lz1AAAy9TLAAAAAFUtR752jnAAAAACyOw7gvgAAAAAF8F56gAAZeplgAAAACqWo987RzgAAAABZHYdwXwAAAAAC+C89QAAMvUywAAAABVLUe+do5wAAAAAsjsO4L4AAAAABfBeeoAAGXqZYAAAAAqlqPfO0c4AAAAAWR2HcF8AAAAAAvgvPUAADM05SUAAAACua8+5upEeAAAAAFs155wacJ5AAAAAXy3H0AAA+HHz5yduB24HbgduPp7feOwfDj5z8O3A7cDtwO3H09vvPQ+ffh5ufh24HbgduB24+nt9+fQAABHZmHwAAAAH3QzqiqC3NAAAAAOtDNtPaCuAAAAAA9L8y89QAAMvUywAAAABVLUe+do5wAAAAAsjsO4L4AAAAABfBeeoAAGXqZYAAAAAqlqPfO0c4AAAAAWR2HcF8AAAAAAvgvPUA+nr41+J5ZeplgAAAACqWo987RzgAAAABZHYdwXwAAAAAC+C89ToUvp//8QANBAAAQICCAUEAQMEAwAAAAAAAgABAxIEEzAyM1FSchEUQoGRECExQCBQYbEFNEFxInOC/9oACAEBAAE/AI0doTSjeRGRfLu6CkQYhvDGIzk3yy5iDW1VY0+SOkQIZtDKIzE/+P0lndvh3ZUelOzsMT3bP0N5id839IFACBGrWN30tkuQDma+d700v7qPQAjxq1zdtTZ8P0tqUUotkylHJlKOTKUcmUo5MpRyZSjkylHJlKOTKUcmUo5MpRyZSjkylHJlKOTKUcmUo5MpRyZSjkylHJlKOTKUcmUo5MpRyZSjkylHJlKOTKUcmUo5MpRyZSjkylHJlKOTKUcmUo5MpRyZSjkylHJlKOTKUcmUo5MpRyZSjkylHJlKOTKUcmUo5MpRyZSjk36q5M3y7Mpw1j5U4ax8qcNY+VOGsfKnDWPlThrHypw1j5U4ax8qcNTefxchb5dmU4ax8qcNY+VOGsfKnDWPlThrHypw1j5U4ax8qcNY+VOD9Tefxchb5JlOGsfKnDWPlThrHypw1j5U4ax8qcNY+VOGsfKnDWPlMQv8E1lGiy/8R+U78bIIhA/t8ZISYmZ29IsV+LiPd7OHFcHzZM7OzO3pFjOT8Bfg1nCjOL8Cfi1i78Xd7Sjv7EyJ+Au+TWsB+MP/AE6ivwhlawn4wxf6lG6+yO4e17Wj3H3KNhlawcMfqUbr7I7h7XtaPcfco2GVrBwx+pRuvsjuHte1o9x9yjYZWsHDH6lG6+yO4e17Wj3H3KNhlawcMfqUbr7I7h7XtaPcfco2GVrBwx+pRuvsjuHte1o9x9yjYZWsHDH6lG6+yO4e17Wj3H3KNhlawcMfqUbr7I7h7XtaPcfco2GVrBwx+pRuvsjuHte1o9x9yjYZWsHDH6lG6+yO4e17Wj3H3KNhlawcMfqUbr7I7h7XtaPcfco2GVrBwx+pRuvsjuHte1o9x9yjYZWsHDGwMZSdrSjjwF3zTtxZ2Ts7O7PaQRlBvKMZgJrUBlAWsIkNjbJ08KI3T4Uh6C8KQ9BeFIegvCkPQXhSHoLwpD0F4Uh6C8KQ9BeFIeh/CCA7vxL2bL1iQmP3b2dPCiN0upD0F4Uh6C8KQ9BeFIegvCkPQXhSHoLwpD0F4Uh6C8KrPS6hwOD8T8esSDM/EflPDNul1IegvCkPQXhSHoLwpD0F4Uh6C8KQ9BeFIegvCkPQXhNDN+l1DgyvxL5/AYsM3dgMSdvlmdn/AE+lO7UaO7fLQi/hf0t3anQv3m/j8TNgbi6eOb/HBlXRNSrompV0TUq6JqVdE1KuialXRNSrompV0TUgj8X4F59YkRgbN8k8eI/w7Mq6JqVdE1KuialXRNSrompV0TUq6JqVdE1KuialDjMT8H9n9YkVg9vl08eJmq6JqVdE1KuialXRNSrompV0TUq6JqVdE1Jo8TNQ4rH7fD+tL/taR/1H/C/pn99B/wDX8P8AjEKc3e0gFMHDJO/BndETk7u9pCKYGdGUou6d+Nmz8EBTCz+kYK2FEh6gcfLKgf06kQaUMSIzMIcf88ePFuH0aN19kdw9r2tHuPuUbDK1g4Y/Uo3X2R3D2va0e4+5RsMrWDhj9SjdfZHcPa9rR7j7lGwytYOGP1KN19kdw9r2tHuPuUbDK1g4Y/Uo3X2R3D2va0e4+5RsMrWDhj9SjdfZHcPa9rR7j7lGwytYOGP1KN19kdw9r2tHuPuUbDK1g4Y/Uo3X2R3D2va0e4+5RsMrWDhj9SjdfZHcPa9rR7j7lGwytYOGP1KN19kdw9r2tHuPuUbDK1g4Y/Uo3X2R3D2va0e4+5RsMrWDhj9SjdfZHcPa9rR7j7lGwytYOGNg7cHdrSjt7E6JuIk2bPawG4B3UVuMMrWE3CGNhGhPxmbvZiLm/BmQCwCzN6RoTi7k3xZgDm/BkzMLMzekSG4P+1nDhub/ALWTwwL5FlUw9KqYelVMPSqmHpVTD0qph6VUw9KqYelVMPSmZmbgzfg8KG/SqmHpVTD0qph6VUw9KqYelVMPSqmHpVTD0qph6UzM34PChv0qph6VUw9KqYelVMPSqmHpVTD0qph6VUw9KaFDbps3jw2zdcwGRLmAyJcwGRLmAyJcwGRLmAyJcwGRLmAyJcwGToTE/h/V3Zvd3Tx4bZuuYDIlzAZEuYDIlzAZEuYDIlzAZEuYDIlzAZEuYDJ0JCTcWf1d2FuLunjg2brmAyJcwGRLmAyJcwGRLmAyJcwGRLmAyJcwGRJo4PmyZ2JuLPYxoju7i3w1mzuz8WUM5xZ/SLEc3/ZrMScH4shJiFnZO/BndGbm/F7MDcH4smfizP8AUo3X2R+wF/p7Wj3O6jYZWsHDH6lG6+yO4e17Wj3H3KNhlawcMfqUbr7I7h7XtaPcfco2GVrBwx+pRuvsjuHte1o9x9yjYZWsHDH6lG6+yO4e17Wj3H3KNhlawcMfwldRobi83D2e3o3X2R3D2va0e4+5RsMrWDhj6iLk/rFEWf2a2o3X2R3D2va0e4+5RsMrWDhj6AzO6Zmb0//EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQIBAT8AED//xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/ABA//9k=",Rw="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAXsBegMBIgACEQEDEQH/xAAuAAEBAQEBAQEBAAAAAAAAAAAABAUCAQMGBwEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAP7DnuV+KYlP2gvUAAAAAAAAAAAAAAAAAAB74L6Mi1Pm6HLocuhy6HLocuhy6HLocuhy6HLocuhy6HLocuhy6HLocuhy6HLocuhy6HLocugAJz7eZ/hos4aLOGizhos4ajPuOiUo8zhos4aLOGizho+5o1EFx6RFfmcNFnDRZw0WcNH3NGoitAAAGZp5YAAAAArkqKM3RzgAAAABbFYfTPvgAAAAAGhn3n1AAAy9TLAAAAAFUtR987RzgAAAABZHYdwXwAAAAAC+C8+oAAGXqZYAAAAAqlqPvnaOcAAAAALI7DuC+AAAAAAXwXn1AAAy9TLAAAAAFUtR987RzgAAAABZHYdwXwAAAAAC+C8+oAAGXqZh4AAAABVLUffO0s0AAAAAWR2nUF8AAAAAAvgvPqAABHZ4Zi7kjWCNYI1gjWekd/vYgv8ADMW+EawRrBGsEaz0k0HR5BoeGYt8I1gjWCNYI1npNe9AAABKfbyAXoBegF6AXoBp+5t52RFPkAvQC9AL0AvQDT9z7z3xCVIBegF6AXoBegGn7BcegAAZmnlgAAAACuSoozdHOAAAAAFsVh3BfAAAAAAL4Lz6nwO/p+S/WgDL1MsAAAAAVS1H3ztHOAAAAAFkdh3BfAAAAAAL4Lz6z0fI/LfrsDfAGXqZYAAAAAqlqPvnaOcAAAAALI7DuC+AAAAAAXwXn1AAAy9TLAAAAAFUtR987RzgAAAABZHYdwXwAAAAAC+C8+oAAGXqZh4AAAABVLWfbO0s0AAAAAWR2nUF8AAAAAAvgvPqAABLUMtoeEC8QLxAvEC8RX9eiK0ZbQ8IF4gXiBeIF4kvenkN/hmLxAvEC8QLxAvEtz0AAAeexn25jFiMWIxYjFnsQ0e8zQO/PYCjyMWIxYjFiMWexDS6zdA68QFPkYsRixGLEYs9iGn7n3noAAGZp5YAAAAAqlqKM3RzgAAAABbFYdwXwAAAAAC+C8+oAAGXqZYAAAAAqlqPvnaOcAAAAALI7DuC+AAAAAAXwXn1AAAy9TLAAAAAFUtR987RzgAAAABZHYdwXwAAAAAC+C8+oAAGXqZYAAAAAqlqPvnaOcAAAAALI7DuC+AAAAAAXwXn1AAAy9TMPAAAAAKpaz7Z2lmgAAAACyO49g0M8AAAAAXwaB9AAAJ6BmeaXhnNEZzRGc0RnNERXdBLUMtpeGc0RnNEZzRGc0fSK70IrRltLwzmiM5ojOaIzmj6SWgAPT6/Gv4ny89kO+ZRUlFSUVJRUlF/1zNE656hPr5KKkoqSipKKko0e8zTHHeeffyUVJRUlFSUVeyDR7z9AHQpen//xAA2EAACAQEEBwgBAwQDAQAAAAABAgADEjBRUgQRExQyM5EQMUBCYnKBoSEgQWEFUHGxIjRzgv/aAAgBAQABPwCtXFIWV4ozs3eSYmkUajmmtQFh3ibxR2uy2gt4R9IoU3FNqgDH9v7SCR3EiaPpRBC1PyP2PY5tMTieyh/T0oVtqHJyjCbgm87e2eK1Z/mV/wCnpXrbUuRmGOr+1jSmsqMBLK4CWVwEsrgJZXASyuAllcBLK4CWVwEsrgJZXASyuAllcBLK4CWVwEsrgJZXASyuAllcBLK4CWVwEsrgJZXASyuAllcBLK4CWVwEsrgJZXASyuAllcBLK4CWVwEsrgJZXASyuAllcBLK4CWVwEsrgJZXASyuAllcBLK4CWVwEsrgJZXASyuAllcB/dSwHeQJbTOvWW0zr1ltM69ZbTOvWW0zr1ltM69ZbTOvWW0zr1ltMw6/pLKO8gS2mdestpnXrLaZ16y2mdestpnXrLaZ16y2mdestpnXrLaZh1/SWUd7CW0zr1ltM69ZbTOvWW0zr1ltM69ZbTOvWW0zr1ltM69YGU9zC6rVbP8AxXvnfdJUZD+O7CKwYAjsq1TrKqbunVKHEQEEAjsq1ix1KdQu6VYqdTHWLknWSbzRz+GEY6lJwF7QOun/AIMqnVTa9pHXTU+E0bz/ABH4H9pvdH4D7pW5bXtHlr4TRvP8R+B/ab3R+A+6VuW17R5a+E0bz/Efgf2m90fgPulblte0eWvhNG8/xH4H9pvdH4D7pW5bXtHlr4TRvP8AEfgf2m90fgPulblte0eWvhNG8/xH4H9pvdH4D7pW5bXtHlr4TRvP8R+B/ab3R+A+6VuW17R5a+E0bz/Efgf2m90fgPulblte0eWvhNG8/wAR/wAo3+De6PwfMrctr2jy1uK1Mglh3G7AJOoSmlhQOyrTKH+Ddqpc6hFUKoAhGsER0KHUbtELnUIBqAFyaFM4ibumLTd0xabumLTd0xabumLTd0xabumLTd0xabumJioqdw7SAfwRDQpnETd0xabumLTd0xabumLTd0xabumLTd0xabumLTd0xMVVUagO0gMNRENBDiJu6YtN3TFpu6YtN3TFpu6YtN3TFpu6YtN3TFoKCDEwAKNQF0aiL3tNtTzTbU8021PNNtTzTbU8021PNNtTzTbU8021PNAQfyD+g1aY72m2p5ptqeabanmm2p5ptqeabanmm2p5ptqeabanmgIPd+g1aY8021PNNtTzTbU8021PNNtTzTbU8021PNNtTzQVaZ811WqnXZHzdqxQ6wYjB1BHZWqliVHddo5Q6xAQwBHZUqFz/F3TqFD/ABck6yTeaMfwwjHUrHAG9oHWnzKp1U2vaR1017Vq03JCOrEd4BB8Do3n+I/A/tN7o/AfdK3La9o8tezSiRo1cjvFJv8AU/pZI06l/Nr/AF4HRvP8R+B/ab3R+A+6VuW17R5a9ml/9XSP/J/9T+mf96j/APX+j4HRvP8AEfgf2m90fgPulblte0eWvZWTa0qlPMhXqJoH9O0ijpS1KgAVNf79+savA6N5/iPwP7Te6PwH3Sty2vaPLXwmjef4j8D+03uj8B90rctr2jy18Jo3n+I/A/tN7o/AfdK3La9o8tfCaN5/iPwP7Te6PwH3Sty2vaPLXwmjef4j8D+03uj8B90rctr2jy1uCNRIvNHH4YxhrVhiDe0BqT5lUa6bXtIaqa3FakddofN2qlzqAiKEUAdlakVJYd12iFzqEACgAdlSmUP8XdOmXP8AF0aaN3qJsaeWbGnlmxp5ZsaeWbGnlmxp5ZsaeWbGnlmxp5YAANQH6DSpnyzY08s2NPLNjTyzY08s2NPLNjTyzY08s2NPLNjTywADu/QaVM+WbGnlmxp5ZsaeWbGnlmxp5ZsaeWbGnlmxp5YKVMeW7NemMTN4TBpvCYNN4TBpvCYNN4TBpvCYNN4TBpvCYNN4TAxXV+49pIH5Jhr0xiZvCYNN4TBpvCYNN4TBpvCYNN4TBpvCYNN4TBpvCYGKysNYPaSFGsmGugxM3hMGm8Jg03hMGm8Jg03hMGm8Jg03hMGm8Jg0FdDiICGGsG5rVCSVHcLsEg6xKb21B7KtQuf4F2rFDrEVgygiE6gTHcudZu0codYgOsA+E0bz/Ef8I3+De6PwfMrctr2jy18Jo3n+I/A/tN7o/AfdK3La9o8tfCaN5/iPwP7Te6PwH3Sty2vaPLXwmjef4j8D+03uj8B90rctr2jy18Jo3n+I/A/tN7o/AfdK3La9o8tfCaN5/iPwP7Te6PwH3Sty2vaPLXwmjef4j8D+03uj8B90rctr2jy18Jo3n+I/A/tN7o/AfdK3La9o8tfCaN5/iPwP7Te6PwH3Sty2vaPLW4I1Ei80cfhjGGtSMRe0Bqp/5MqjXTYXtIaqa3Fala/5L3zuukps5/HdjFUKAB2VaR1llF3TpFzgIAAAB2VaJU61GsXdKiWOthqF0VB7wDLCZF6SwmReksJkXpLCZF6SwmReksJkXpLCZF6SwmReksJlHT9JVT3gGWEyL0lhMi9JYTIvSWEyL0lhMi9JYTIvSWEyL0lhMi9JYTKOn6SqnvUSwmReksJkXpLCZF6SwmReksJkXpLCZF6SwmReksJkXpAqjuUfqsmVqZU2tX4PaSANZMOkKO4EzefR9zefR9zefR9zefR9zefR9zefR9zefR9zefR9zefR9xKqP3d/azBRrJh0gfss3n0fc3n0fc3n0fc3n0fc3n0fc3n0fc3n0fc3n0fc3n0fcSor9x7WdUGsmHSR+yzefR9zefR9zefR9zefR9zefR9zefR9zefR9zefR9waSP3WK6uNYP6FUse2qqg/gdmkE2gP21XiHWqk4dlckuRhdgkEEdtQku2vG7pkh11Y9qAEwADu7P/EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQIBAT8AED//xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/ABA//9k=",zw="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAXsBegMBIgACEQEDEQH/xAAuAAEAAwEBAQEAAAAAAAAAAAAAAgQFAwEGBwEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAP2HPRXirEs9qF9QAAAAAAAAAAAAAAAAAAHvgv2Mi6nNIRSEUhFIRSEUhFIRSEUhFIRSEUhFIRSEUhFIRSEUhFIRSEUhFIRSEUgAK528z/DRZw0WcNFnDRZw0WcNFnDRZw0WcNFnDRZw0WcNFnDRZw0WcNFnDRZw0WcNFnDT9zbp1AAAzNPLAAAAAAAAAAAAAAAAAAAHbj1L4AAGXqZYAAAAAAAAAAAAAAAAAAA68upfAAAy9TLAAAAAAAAAAAAAAAAAAAHXl1L4AAGXqZYAAAAAAAAAAAAAAAAAAA68upfAAAy9TLAAAAAAAAAAAAAAAAAAAHXl1L4AAGXqZ5zAAAAAAAAAAAAAAAAAAA68rBcAAAhMUo3xQXxQXxQXxQXxQXxQXxQXxQXxQXxQXxQXxQXxQXxQXxQXxQXxQXxQXxTt+gAABy65x75ATQE0BNATQE0BNATQE0BNATQE0BNATQE0BNATQE0BNAdrmbYLhwJ9PkvrQBl6mWAAAAAAAAAAAAAAAAAAAOvLqX69jkfLfXYG+AMvUywAAAAAAAAAAAAAAAAAAB15dS+AABl6mWAAAAAAAAAAAAAAAAAAAOvLqXwAAMvUywAAAAAAAAAAAAAAAAAAB15dS+AABl6mWAAAAAAAAAAAAAAAAAAAOvLqXwAAM3S4lFKIAAAAAAAAAAAAAAAAAA7wukwAACJJU8LimLimLimLimLimLimLimLimLimLimLimLimLimLimLimLimLimLimLitYPQAAKF/LAAAAAAAAAAAAAAAAAAAFqr1L4AAGXqZYAAAAAAAAAAAAAAAAAAA68upfAAAy9TLAAAAAAAAAAAAAAAAAAAHXl1L4AAGXqZYAAAAAAAAAAAAAAAAAAA68upfAAAy9TLAAAAAAAAAAAAAAAAAAAHXl1L4B6deNvicsvUywAAAAAAAAAAAAAAAAAAB15dS+SFl6f//EADAQAAECBQMDAgQGAwAAAAAAAAIAAQMSUVKRExRQBBEzEDEFITCxIDI0QUJhInOC/9oACAEBAAE/AI0doTSj+ZEZF7u7oOogxDeGMRnJv2W4g6ulqNPRH1ECGYwyiMxP+3Es7t7Oun6p2JhifNq+hlMTvV/SB8PCBG1WN3tai2AbnXnf800v9qP8PCPG1XN2uavFt1RSi1GUo0ZSjRlKNGUo0ZSjRlKNGUo0ZSjRlKNGUo0ZSjRlKNGUo0ZSjRlKNGUo0ZSjRlKNGUo0ZSjRlKNGUo0ZSjRlKNGUo0ZSjRlKNGUo0ZSjRlKNGUo0ZSjRlKNGUo0ZSjRlKNGUo0ZSjRlKNGUo0ZSjRlKNGUo0ZSjRlKNGUo0ZSjRlKNG5VyZvd2ZTheOVOF45U4XjlTheOVOF45U4XjlTheOVOF45U4XjlTheOVOF45U4XjlTheOVOF45U4XjlTheOVOF45U4XjlTheOVOF45U4XjlTheOVOF45U4XjlTheOVOF45U4XjlTheOVOF45U4XjlTheOVOF45U4XjlTheOVOF45U4XjlTheOUzs/s/wBGNFl/xH3Xvwwk4v3Z1DiTt/bfQd+7u/EQH7RGavIQfIPIQfIPIQfIPIQfIPIQfIPIQfIPIQfIPIQfIPIQfIPIQfIP0IgyG7cR049ycqfQMGNuzp4Bt7dnWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtWjEtQ9OT/mfsmZhZmbmIkRgarp4sR/5YU53llTneWVOd5ZU53llTneWVOd5ZU53llTneWVOd5ZU53llTneWVOd5ZU53llTneWVOd5ZU53llTneWVOd5ZU53llTneWVOd5ZU53llTneWVOd5ZU53llTneWVOd5ZU53llTneWVOd5ZU53llTneWVOd5ZU53llTneWVOd5ZU53llDGMfd+7ISY27t6jFhm7sBiTt7sz9/wmUxO/EQC7HLX06p3bpo7t7tCL7L4W7t10L+5vtxsHyD6dX+l6j/Uf2Xwz9dB/6+z8bB8g+kYNWFEC4HHLLoPh3UQeqGJEZmEO/wC/vxsHyDyEHyDyEHyDyEHyDyEHyDyEHyDyEHyDyEHyD9AmlJ24iA3c+9PoRYU/zb3TiQ+7O3DDDM/ZkAMA9m5giYG7un6h/wCI5W4OgrcHQVuDoK3B0Fbg6CtwdBW4OgrcHQVuDoK3B0Fbg6CtwdBW4OgrcHQVuDoK3B0Fbg6CtwdBW4OgrcHQVuDoK3B0Fbg6CtwdBW4OgrcHQVuDoK3B0Fbg6CtwdBW4OgrcHQVuDoK3B0Fbg6CtwdBW4Ogoeoub6MU5zejcR05+445CD5B5CD5B5CD5B5CD5B5CD5B5CD5B5CD5B5CD5B5CD5B/BK6jQ3F5u3yfi4PkH1EXJ/WKIs/ybioPkH0Bmd0zM3p//8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAgEBPwAQP//EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQMBAT8AED//2Q==",Iw=[{type:"rectangular",title:"Прямоугольные вертикальные карточки",imageSrc:Mw},{type:"square",title:"Квадратные карточки",imageSrc:Rw},{type:"narrow",title:"Узкие горизонтальные карточки",imageSrc:jw},{type:"wide",title:"Широкие горизонтальные карточки",imageSrc:zw}];function Dw(){const[e,t]=E.useState(!0),[n,r]=E.useState(!1),[o,i]=E.useState(null),l=()=>{o==null||o.slidePrev(),o!=null&&o.isBeginning&&t(!0),r(!1)},a=()=>{o==null||o.slideNext(),o!=null&&o.isEnd&&r(!0),t(!1)};return k.jsxs(k.Fragment,{children:[k.jsx(Yh,{modules:[Aw,mw],slidesPerView:1,centeredSlides:!0,pagination:{clickable:!0},keyboard:{enabled:!0},breakpoints:{1620:{slidesPerView:2,spaceBetween:30}},onSwiper:s=>i(s),children:Iw.map(s=>k.jsx(Zh,{children:k.jsx(Nw,{...s})},s.type))}),k.jsxs("div",{className:"swiper-buttons-wrapper",children:[k.jsx("button",{disabled:e,className:"swiper-prev-button",onClick:l,children:k.jsx("span",{className:"visually-hidden",children:"Предыдущий"})}),k.jsx("button",{disabled:n,className:"swiper-next-button",onClick:a,children:k.jsx("span",{className:"visually-hidden",children:"Следующий"})})]})]})}const Fw="_main_wr8kl_1",Bw="_title_wr8kl_5",zd={main:Fw,title:Bw};function $w(){return k.jsxs("main",{className:zd.main,children:[k.jsx("h3",{className:zd.title,children:"Выберите стиль карточек"}),k.jsx(Dw,{})]})}const Uw=uy({reducer:{[Es.name]:Es.reducer},middleware:e=>e()});function Ww(){return k.jsxs(p0,{store:Uw,children:[k.jsx(As,{}),k.jsxs(cA,{children:[k.jsx(OA,{}),k.jsxs(oA,{children:[k.jsx(gs,{path:zi.ROOT,element:k.jsx($w,{})}),k.jsx(gs,{path:zi.CONSTRUCTOR,element:k.jsx(q1,{})})]}),k.jsx(kA,{})]})]})}const Hw=document.getElementById("app");Jp(Hw).render(k.jsx(Ww,{}));
