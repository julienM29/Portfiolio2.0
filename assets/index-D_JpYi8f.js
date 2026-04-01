const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomePage-B0Qjt19X.js","./Footer-L16_0X7b.js","./ProjetKerisnel-C_jTntss.js","./index-OdWDYTDw.js","./use-in-view-DLF0_Y5E.js","./index-XlhrNRKN.css","./ProjetEvenementiel-2nSGECdp.js","./ProjetPizzeria-CkjApo9B.js","./ProjetDashboard-CI77EbIh.js"])))=>i.map(i=>d[i]);
(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(c){if(c.ep)return;c.ep=!0;const f=o(c);fetch(c.href,f)}})();function X1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var dc={exports:{}},Or={};var jp;function Z1(){if(jp)return Or;jp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(l,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var m in c)m!=="key"&&(f[m]=c[m])}else f=c;return c=f.ref,{$$typeof:n,type:l,key:d,ref:c!==void 0?c:null,props:f}}return Or.Fragment=i,Or.jsx=o,Or.jsxs=o,Or}var Hp;function K1(){return Hp||(Hp=1,dc.exports=Z1()),dc.exports}var mt=K1(),hc={exports:{}},lt={};var qp;function Q1(){if(qp)return lt;qp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=b&&O[b]||O["@@iterator"],typeof O=="function"?O:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function _(O,q,Q){this.props=O,this.context=q,this.refs=T,this.updater=Q||A}_.prototype.isReactComponent={},_.prototype.setState=function(O,q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,q,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function U(){}U.prototype=_.prototype;function V(O,q,Q){this.props=O,this.context=q,this.refs=T,this.updater=Q||A}var N=V.prototype=new U;N.constructor=V,E(N,_.prototype),N.isPureReactComponent=!0;var X=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},K=Object.prototype.hasOwnProperty;function J(O,q,Q,G,tt,gt){return Q=gt.ref,{$$typeof:n,type:O,key:q,ref:Q!==void 0?Q:null,props:gt}}function Z(O,q){return J(O.type,q,void 0,void 0,void 0,O.props)}function at(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function St(O){var q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Q){return q[Q]})}var Jt=/\/+/g;function Gt(O,q){return typeof O=="object"&&O!==null&&O.key!=null?St(""+O.key):q.toString(36)}function an(){}function Ze(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(an,an):(O.status="pending",O.then(function(q){O.status==="pending"&&(O.status="fulfilled",O.value=q)},function(q){O.status==="pending"&&(O.status="rejected",O.reason=q)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function Xt(O,q,Q,G,tt){var gt=typeof O;(gt==="undefined"||gt==="boolean")&&(O=null);var ot=!1;if(O===null)ot=!0;else switch(gt){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(O.$$typeof){case n:case i:ot=!0;break;case g:return ot=O._init,Xt(ot(O._payload),q,Q,G,tt)}}if(ot)return tt=tt(O),ot=G===""?"."+Gt(O,0):G,X(tt)?(Q="",ot!=null&&(Q=ot.replace(Jt,"$&/")+"/"),Xt(tt,q,Q,"",function(Mn){return Mn})):tt!=null&&(at(tt)&&(tt=Z(tt,Q+(tt.key==null||O&&O.key===tt.key?"":(""+tt.key).replace(Jt,"$&/")+"/")+ot)),q.push(tt)),1;ot=0;var ge=G===""?".":G+":";if(X(O))for(var Rt=0;Rt<O.length;Rt++)G=O[Rt],gt=ge+Gt(G,Rt),ot+=Xt(G,q,Q,gt,tt);else if(Rt=x(O),typeof Rt=="function")for(O=Rt.call(O),Rt=0;!(G=O.next()).done;)G=G.value,gt=ge+Gt(G,Rt++),ot+=Xt(G,q,Q,gt,tt);else if(gt==="object"){if(typeof O.then=="function")return Xt(Ze(O),q,Q,G,tt);throw q=String(O),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ot}function P(O,q,Q){if(O==null)return O;var G=[],tt=0;return Xt(O,G,"","",function(gt){return q.call(Q,gt,tt++)}),G}function Y(O){if(O._status===-1){var q=O._result;q=q(),q.then(function(Q){(O._status===0||O._status===-1)&&(O._status=1,O._result=Q)},function(Q){(O._status===0||O._status===-1)&&(O._status=2,O._result=Q)}),O._status===-1&&(O._status=0,O._result=q)}if(O._status===1)return O._result.default;throw O._result}var $=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function ht(){}return lt.Children={map:P,forEach:function(O,q,Q){P(O,function(){q.apply(this,arguments)},Q)},count:function(O){var q=0;return P(O,function(){q++}),q},toArray:function(O){return P(O,function(q){return q})||[]},only:function(O){if(!at(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},lt.Component=_,lt.Fragment=o,lt.Profiler=c,lt.PureComponent=V,lt.StrictMode=l,lt.Suspense=p,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,lt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return H.H.useMemoCache(O)}},lt.cache=function(O){return function(){return O.apply(null,arguments)}},lt.cloneElement=function(O,q,Q){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var G=E({},O.props),tt=O.key,gt=void 0;if(q!=null)for(ot in q.ref!==void 0&&(gt=void 0),q.key!==void 0&&(tt=""+q.key),q)!K.call(q,ot)||ot==="key"||ot==="__self"||ot==="__source"||ot==="ref"&&q.ref===void 0||(G[ot]=q[ot]);var ot=arguments.length-2;if(ot===1)G.children=Q;else if(1<ot){for(var ge=Array(ot),Rt=0;Rt<ot;Rt++)ge[Rt]=arguments[Rt+2];G.children=ge}return J(O.type,tt,void 0,void 0,gt,G)},lt.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:f,_context:O},O},lt.createElement=function(O,q,Q){var G,tt={},gt=null;if(q!=null)for(G in q.key!==void 0&&(gt=""+q.key),q)K.call(q,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(tt[G]=q[G]);var ot=arguments.length-2;if(ot===1)tt.children=Q;else if(1<ot){for(var ge=Array(ot),Rt=0;Rt<ot;Rt++)ge[Rt]=arguments[Rt+2];tt.children=ge}if(O&&O.defaultProps)for(G in ot=O.defaultProps,ot)tt[G]===void 0&&(tt[G]=ot[G]);return J(O,gt,void 0,void 0,null,tt)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(O){return{$$typeof:m,render:O}},lt.isValidElement=at,lt.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:Y}},lt.memo=function(O,q){return{$$typeof:h,type:O,compare:q===void 0?null:q}},lt.startTransition=function(O){var q=H.T,Q={};H.T=Q;try{var G=O(),tt=H.S;tt!==null&&tt(Q,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(ht,$)}catch(gt){$(gt)}finally{H.T=q}},lt.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},lt.use=function(O){return H.H.use(O)},lt.useActionState=function(O,q,Q){return H.H.useActionState(O,q,Q)},lt.useCallback=function(O,q){return H.H.useCallback(O,q)},lt.useContext=function(O){return H.H.useContext(O)},lt.useDebugValue=function(){},lt.useDeferredValue=function(O,q){return H.H.useDeferredValue(O,q)},lt.useEffect=function(O,q,Q){var G=H.H;if(typeof Q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return G.useEffect(O,q)},lt.useId=function(){return H.H.useId()},lt.useImperativeHandle=function(O,q,Q){return H.H.useImperativeHandle(O,q,Q)},lt.useInsertionEffect=function(O,q){return H.H.useInsertionEffect(O,q)},lt.useLayoutEffect=function(O,q){return H.H.useLayoutEffect(O,q)},lt.useMemo=function(O,q){return H.H.useMemo(O,q)},lt.useOptimistic=function(O,q){return H.H.useOptimistic(O,q)},lt.useReducer=function(O,q,Q){return H.H.useReducer(O,q,Q)},lt.useRef=function(O){return H.H.useRef(O)},lt.useState=function(O){return H.H.useState(O)},lt.useSyncExternalStore=function(O,q,Q){return H.H.useSyncExternalStore(O,q,Q)},lt.useTransition=function(){return H.H.useTransition()},lt.version="19.1.0",lt}var Yp;function sf(){return Yp||(Yp=1,hc.exports=Q1()),hc.exports}var M=sf();const Ot=X1(M);var mc={exports:{}},Dr={},pc={exports:{}},gc={};var Gp;function J1(){return Gp||(Gp=1,(function(n){function i(P,Y){var $=P.length;P.push(Y);t:for(;0<$;){var ht=$-1>>>1,O=P[ht];if(0<c(O,Y))P[ht]=Y,P[$]=O,$=ht;else break t}}function o(P){return P.length===0?null:P[0]}function l(P){if(P.length===0)return null;var Y=P[0],$=P.pop();if($!==Y){P[0]=$;t:for(var ht=0,O=P.length,q=O>>>1;ht<q;){var Q=2*(ht+1)-1,G=P[Q],tt=Q+1,gt=P[tt];if(0>c(G,$))tt<O&&0>c(gt,G)?(P[ht]=gt,P[tt]=$,ht=tt):(P[ht]=G,P[Q]=$,ht=Q);else if(tt<O&&0>c(gt,$))P[ht]=gt,P[tt]=$,ht=tt;else break t}}return Y}function c(P,Y){var $=P.sortIndex-Y.sortIndex;return $!==0?$:P.id-Y.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,m=d.now();n.unstable_now=function(){return d.now()-m}}var p=[],h=[],g=1,b=null,x=3,A=!1,E=!1,T=!1,_=!1,U=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function X(P){for(var Y=o(h);Y!==null;){if(Y.callback===null)l(h);else if(Y.startTime<=P)l(h),Y.sortIndex=Y.expirationTime,i(p,Y);else break;Y=o(h)}}function H(P){if(T=!1,X(P),!E)if(o(p)!==null)E=!0,K||(K=!0,Gt());else{var Y=o(h);Y!==null&&Xt(H,Y.startTime-P)}}var K=!1,J=-1,Z=5,at=-1;function St(){return _?!0:!(n.unstable_now()-at<Z)}function Jt(){if(_=!1,K){var P=n.unstable_now();at=P;var Y=!0;try{t:{E=!1,T&&(T=!1,V(J),J=-1),A=!0;var $=x;try{e:{for(X(P),b=o(p);b!==null&&!(b.expirationTime>P&&St());){var ht=b.callback;if(typeof ht=="function"){b.callback=null,x=b.priorityLevel;var O=ht(b.expirationTime<=P);if(P=n.unstable_now(),typeof O=="function"){b.callback=O,X(P),Y=!0;break e}b===o(p)&&l(p),X(P)}else l(p);b=o(p)}if(b!==null)Y=!0;else{var q=o(h);q!==null&&Xt(H,q.startTime-P),Y=!1}}break t}finally{b=null,x=$,A=!1}Y=void 0}}finally{Y?Gt():K=!1}}}var Gt;if(typeof N=="function")Gt=function(){N(Jt)};else if(typeof MessageChannel<"u"){var an=new MessageChannel,Ze=an.port2;an.port1.onmessage=Jt,Gt=function(){Ze.postMessage(null)}}else Gt=function(){U(Jt,0)};function Xt(P,Y){J=U(function(){P(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(P){P.callback=null},n.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_next=function(P){switch(x){case 1:case 2:case 3:var Y=3;break;default:Y=x}var $=x;x=Y;try{return P()}finally{x=$}},n.unstable_requestPaint=function(){_=!0},n.unstable_runWithPriority=function(P,Y){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var $=x;x=P;try{return Y()}finally{x=$}},n.unstable_scheduleCallback=function(P,Y,$){var ht=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ht+$:ht):$=ht,P){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=$+O,P={id:g++,callback:Y,priorityLevel:P,startTime:$,expirationTime:O,sortIndex:-1},$>ht?(P.sortIndex=$,i(h,P),o(p)===null&&P===o(h)&&(T?(V(J),J=-1):T=!0,Xt(H,$-ht))):(P.sortIndex=O,i(p,P),E||A||(E=!0,K||(K=!0,Gt()))),P},n.unstable_shouldYield=St,n.unstable_wrapCallback=function(P){var Y=x;return function(){var $=x;x=Y;try{return P.apply(this,arguments)}finally{x=$}}}})(gc)),gc}var Xp;function F1(){return Xp||(Xp=1,pc.exports=J1()),pc.exports}var yc={exports:{}},oe={};var Zp;function $1(){if(Zp)return oe;Zp=1;var n=sf();function i(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(p,h,g){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:p,containerInfo:h,implementation:g}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return oe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,oe.createPortal=function(p,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(i(299));return f(p,h,null,g)},oe.flushSync=function(p){var h=d.T,g=l.p;try{if(d.T=null,l.p=2,p)return p()}finally{d.T=h,l.p=g,l.d.f()}},oe.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,l.d.C(p,h))},oe.prefetchDNS=function(p){typeof p=="string"&&l.d.D(p)},oe.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var g=h.as,b=m(g,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,A=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?l.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:b,integrity:x,fetchPriority:A}):g==="script"&&l.d.X(p,{crossOrigin:b,integrity:x,fetchPriority:A,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},oe.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=m(h.as,h.crossOrigin);l.d.M(p,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&l.d.M(p)},oe.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,b=m(g,h.crossOrigin);l.d.L(p,g,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},oe.preloadModule=function(p,h){if(typeof p=="string")if(h){var g=m(h.as,h.crossOrigin);l.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else l.d.m(p)},oe.requestFormReset=function(p){l.d.r(p)},oe.unstable_batchedUpdates=function(p,h){return p(h)},oe.useFormState=function(p,h,g){return d.H.useFormState(p,h,g)},oe.useFormStatus=function(){return d.H.useHostTransitionStatus()},oe.version="19.1.0",oe}var Kp;function W1(){if(Kp)return yc.exports;Kp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),yc.exports=$1(),yc.exports}var Qp;function I1(){if(Qp)return Dr;Qp=1;var n=F1(),i=sf(),o=W1();function l(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function d(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m(t){if(f(t)!==t)throw Error(l(188))}function p(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(l(188));return e!==t?null:t}for(var a=t,r=e;;){var s=a.return;if(s===null)break;var u=s.alternate;if(u===null){if(r=s.return,r!==null){a=r;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===a)return m(s),t;if(u===r)return m(s),e;u=u.sibling}throw Error(l(188))}if(a.return!==r.return)a=s,r=u;else{for(var y=!1,v=s.child;v;){if(v===a){y=!0,a=s,r=u;break}if(v===r){y=!0,r=s,a=u;break}v=v.sibling}if(!y){for(v=u.child;v;){if(v===a){y=!0,a=u,r=s;break}if(v===r){y=!0,r=u,a=s;break}v=v.sibling}if(!y)throw Error(l(189))}}if(a.alternate!==r)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?t:e}function h(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=h(t),e!==null)return e;t=t.sibling}return null}var g=Object.assign,b=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),N=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),at=Symbol.for("react.activity"),St=Symbol.for("react.memo_cache_sentinel"),Jt=Symbol.iterator;function Gt(t){return t===null||typeof t!="object"?null:(t=Jt&&t[Jt]||t["@@iterator"],typeof t=="function"?t:null)}var an=Symbol.for("react.client.reference");function Ze(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===an?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case _:return"Profiler";case T:return"StrictMode";case H:return"Suspense";case K:return"SuspenseList";case at:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case N:return(t.displayName||"Context")+".Provider";case V:return(t._context.displayName||"Context")+".Consumer";case X:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case J:return e=t.displayName||null,e!==null?e:Ze(t.type)||"Memo";case Z:e=t._payload,t=t._init;try{return Ze(t(e))}catch{}}return null}var Xt=Array.isArray,P=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ht=[],O=-1;function q(t){return{current:t}}function Q(t){0>O||(t.current=ht[O],ht[O]=null,O--)}function G(t,e){O++,ht[O]=t.current,t.current=e}var tt=q(null),gt=q(null),ot=q(null),ge=q(null);function Rt(t,e){switch(G(ot,e),G(gt,t),G(tt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?mp(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=mp(e),t=pp(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(tt),G(tt,t)}function Mn(){Q(tt),Q(gt),Q(ot)}function $l(t){t.memoizedState!==null&&G(ge,t);var e=tt.current,a=pp(e,t.type);e!==a&&(G(gt,t),G(tt,a))}function ao(t){gt.current===t&&(Q(tt),Q(gt)),ge.current===t&&(Q(ge),xr._currentValue=$)}var Wl=Object.prototype.hasOwnProperty,Il=n.unstable_scheduleCallback,ts=n.unstable_cancelCallback,Ev=n.unstable_shouldYield,Av=n.unstable_requestPaint,Ke=n.unstable_now,Ov=n.unstable_getCurrentPriorityLevel,Qf=n.unstable_ImmediatePriority,Jf=n.unstable_UserBlockingPriority,io=n.unstable_NormalPriority,Dv=n.unstable_LowPriority,Ff=n.unstable_IdlePriority,Mv=n.log,Rv=n.unstable_setDisableYieldValue,Ri=null,ye=null;function Rn(t){if(typeof Mv=="function"&&Rv(t),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(Ri,t)}catch{}}var ve=Math.clz32?Math.clz32:_v,wv=Math.log,Cv=Math.LN2;function _v(t){return t>>>=0,t===0?32:31-(wv(t)/Cv|0)|0}var ro=256,oo=4194304;function ia(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function lo(t,e,a){var r=t.pendingLanes;if(r===0)return 0;var s=0,u=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var v=r&134217727;return v!==0?(r=v&~u,r!==0?s=ia(r):(y&=v,y!==0?s=ia(y):a||(a=v&~t,a!==0&&(s=ia(a))))):(v=r&~u,v!==0?s=ia(v):y!==0?s=ia(y):a||(a=r&~t,a!==0&&(s=ia(a)))),s===0?0:e!==0&&e!==s&&(e&u)===0&&(u=s&-s,a=e&-e,u>=a||u===32&&(a&4194048)!==0)?e:s}function wi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function zv(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $f(){var t=ro;return ro<<=1,(ro&4194048)===0&&(ro=256),t}function Wf(){var t=oo;return oo<<=1,(oo&62914560)===0&&(oo=4194304),t}function es(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Ci(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function kv(t,e,a,r,s,u){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var v=t.entanglements,S=t.expirationTimes,C=t.hiddenUpdates;for(a=y&~a;0<a;){var L=31-ve(a),j=1<<L;v[L]=0,S[L]=-1;var z=C[L];if(z!==null)for(C[L]=null,L=0;L<z.length;L++){var k=z[L];k!==null&&(k.lane&=-536870913)}a&=~j}r!==0&&If(t,r,0),u!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=u&~(y&~e))}function If(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-ve(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|a&4194090}function td(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var r=31-ve(a),s=1<<r;s&e|t[r]&e&&(t[r]|=e),a&=~s}}function ns(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function as(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ed(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:Vp(t.type))}function Vv(t,e){var a=Y.p;try{return Y.p=t,e()}finally{Y.p=a}}var wn=Math.random().toString(36).slice(2),ie="__reactFiber$"+wn,ce="__reactProps$"+wn,Ra="__reactContainer$"+wn,is="__reactEvents$"+wn,Uv="__reactListeners$"+wn,Nv="__reactHandles$"+wn,nd="__reactResources$"+wn,_i="__reactMarker$"+wn;function rs(t){delete t[ie],delete t[ce],delete t[is],delete t[Uv],delete t[Nv]}function wa(t){var e=t[ie];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Ra]||a[ie]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=bp(t);t!==null;){if(a=t[ie])return a;t=bp(t)}return e}t=a,a=t.parentNode}return null}function Ca(t){if(t=t[ie]||t[Ra]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function zi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(l(33))}function _a(t){var e=t[nd];return e||(e=t[nd]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ft(t){t[_i]=!0}var ad=new Set,id={};function ra(t,e){za(t,e),za(t+"Capture",e)}function za(t,e){for(id[t]=e,t=0;t<e.length;t++)ad.add(e[t])}var Lv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rd={},od={};function Pv(t){return Wl.call(od,t)?!0:Wl.call(rd,t)?!1:Lv.test(t)?od[t]=!0:(rd[t]=!0,!1)}function so(t,e,a){if(Pv(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function uo(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function rn(t,e,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+r)}}var os,ld;function ka(t){if(os===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);os=e&&e[1]||"",ld=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+os+t+ld}var ls=!1;function ss(t,e){if(!t||ls)return"";ls=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(k){var z=k}Reflect.construct(t,[],j)}else{try{j.call()}catch(k){z=k}t.call(j.prototype)}}else{try{throw Error()}catch(k){z=k}(j=t())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(k){if(k&&z&&typeof k.stack=="string")return[k.stack,z.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),y=u[0],v=u[1];if(y&&v){var S=y.split(`
`),C=v.split(`
`);for(s=r=0;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;for(;s<C.length&&!C[s].includes("DetermineComponentFrameRoot");)s++;if(r===S.length||s===C.length)for(r=S.length-1,s=C.length-1;1<=r&&0<=s&&S[r]!==C[s];)s--;for(;1<=r&&0<=s;r--,s--)if(S[r]!==C[s]){if(r!==1||s!==1)do if(r--,s--,0>s||S[r]!==C[s]){var L=`
`+S[r].replace(" at new "," at ");return t.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",t.displayName)),L}while(1<=r&&0<=s);break}}}finally{ls=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ka(a):""}function Bv(t){switch(t.tag){case 26:case 27:case 5:return ka(t.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 15:return ss(t.type,!1);case 11:return ss(t.type.render,!1);case 1:return ss(t.type,!0);case 31:return ka("Activity");default:return""}}function sd(t){try{var e="";do e+=Bv(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Me(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ud(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jv(t){var e=ud(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var s=a.get,u=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(y){r=""+y,u.call(this,y)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(y){r=""+y},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function co(t){t._valueTracker||(t._valueTracker=jv(t))}function cd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),r="";return t&&(r=ud(t)?t.checked?"true":"false":t.value),t=r,t!==a?(e.setValue(t),!0):!1}function fo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Hv=/[\n"\\]/g;function Re(t){return t.replace(Hv,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function us(t,e,a,r,s,u,y,v){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),e!=null?y==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Me(e)):t.value!==""+Me(e)&&(t.value=""+Me(e)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),e!=null?cs(t,y,Me(e)):a!=null?cs(t,y,Me(a)):r!=null&&t.removeAttribute("value"),s==null&&u!=null&&(t.defaultChecked=!!u),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.name=""+Me(v):t.removeAttribute("name")}function fd(t,e,a,r,s,u,y,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;a=a!=null?""+Me(a):"",e=e!=null?""+Me(e):a,v||e===t.value||(t.value=e),t.defaultValue=e}r=r??s,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=v?t.checked:!!r,t.defaultChecked=!!r,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y)}function cs(t,e,a){e==="number"&&fo(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Va(t,e,a,r){if(t=t.options,e){e={};for(var s=0;s<a.length;s++)e["$"+a[s]]=!0;for(a=0;a<t.length;a++)s=e.hasOwnProperty("$"+t[a].value),t[a].selected!==s&&(t[a].selected=s),s&&r&&(t[a].defaultSelected=!0)}else{for(a=""+Me(a),e=null,s=0;s<t.length;s++){if(t[s].value===a){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function dd(t,e,a){if(e!=null&&(e=""+Me(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Me(a):""}function hd(t,e,a,r){if(e==null){if(r!=null){if(a!=null)throw Error(l(92));if(Xt(r)){if(1<r.length)throw Error(l(93));r=r[0]}a=r}a==null&&(a=""),e=a}a=Me(e),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r)}function Ua(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var qv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function md(t,e,a){var r=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,a):typeof a!="number"||a===0||qv.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function pd(t,e,a){if(e!=null&&typeof e!="object")throw Error(l(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var s in e)r=e[s],e.hasOwnProperty(s)&&a[s]!==r&&md(t,s,r)}else for(var u in e)e.hasOwnProperty(u)&&md(t,u,e[u])}function fs(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ho(t){return Gv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ds=null;function hs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Na=null,La=null;function gd(t){var e=Ca(t);if(e&&(t=e.stateNode)){var a=t[ce]||null;t:switch(t=e.stateNode,e.type){case"input":if(us(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Re(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var r=a[e];if(r!==t&&r.form===t.form){var s=r[ce]||null;if(!s)throw Error(l(90));us(r,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<a.length;e++)r=a[e],r.form===t.form&&cd(r)}break t;case"textarea":dd(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Va(t,!!a.multiple,e,!1)}}}var ms=!1;function yd(t,e,a){if(ms)return t(e,a);ms=!0;try{var r=t(e);return r}finally{if(ms=!1,(Na!==null||La!==null)&&(Wo(),Na&&(e=Na,t=La,La=Na=null,gd(e),t)))for(e=0;e<t.length;e++)gd(t[e])}}function ki(t,e){var a=t.stateNode;if(a===null)return null;var r=a[ce]||null;if(r===null)return null;a=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(l(231,e,typeof a));return a}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ps=!1;if(on)try{var Vi={};Object.defineProperty(Vi,"passive",{get:function(){ps=!0}}),window.addEventListener("test",Vi,Vi),window.removeEventListener("test",Vi,Vi)}catch{ps=!1}var Cn=null,gs=null,mo=null;function vd(){if(mo)return mo;var t,e=gs,a=e.length,r,s="value"in Cn?Cn.value:Cn.textContent,u=s.length;for(t=0;t<a&&e[t]===s[t];t++);var y=a-t;for(r=1;r<=y&&e[a-r]===s[u-r];r++);return mo=s.slice(t,1<r?1-r:void 0)}function po(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function go(){return!0}function bd(){return!1}function fe(t){function e(a,r,s,u,y){this._reactName=a,this._targetInst=s,this.type=r,this.nativeEvent=u,this.target=y,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(a=t[v],this[v]=a?a(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?go:bd,this.isPropagationStopped=bd,this}return g(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),e}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yo=fe(oa),Ui=g({},oa,{view:0,detail:0}),Xv=fe(Ui),ys,vs,Ni,vo=g({},Ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ni&&(Ni&&t.type==="mousemove"?(ys=t.screenX-Ni.screenX,vs=t.screenY-Ni.screenY):vs=ys=0,Ni=t),ys)},movementY:function(t){return"movementY"in t?t.movementY:vs}}),xd=fe(vo),Zv=g({},vo,{dataTransfer:0}),Kv=fe(Zv),Qv=g({},Ui,{relatedTarget:0}),bs=fe(Qv),Jv=g({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),Fv=fe(Jv),$v=g({},oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wv=fe($v),Iv=g({},oa,{data:0}),Sd=fe(Iv),tb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ab(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nb[t])?!!e[t]:!1}function xs(){return ab}var ib=g({},Ui,{key:function(t){if(t.key){var e=tb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=po(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xs,charCode:function(t){return t.type==="keypress"?po(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?po(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rb=fe(ib),ob=g({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=fe(ob),lb=g({},Ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xs}),sb=fe(lb),ub=g({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),cb=fe(ub),fb=g({},vo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),db=fe(fb),hb=g({},oa,{newState:0,oldState:0}),mb=fe(hb),pb=[9,13,27,32],Ss=on&&"CompositionEvent"in window,Li=null;on&&"documentMode"in document&&(Li=document.documentMode);var gb=on&&"TextEvent"in window&&!Li,Ed=on&&(!Ss||Li&&8<Li&&11>=Li),Ad=" ",Od=!1;function Dd(t,e){switch(t){case"keyup":return pb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Md(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pa=!1;function yb(t,e){switch(t){case"compositionend":return Md(e);case"keypress":return e.which!==32?null:(Od=!0,Ad);case"textInput":return t=e.data,t===Ad&&Od?null:t;default:return null}}function vb(t,e){if(Pa)return t==="compositionend"||!Ss&&Dd(t,e)?(t=vd(),mo=gs=Cn=null,Pa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ed&&e.locale!=="ko"?null:e.data;default:return null}}var bb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bb[t.type]:e==="textarea"}function wd(t,e,a,r){Na?La?La.push(r):La=[r]:Na=r,e=il(e,"onChange"),0<e.length&&(a=new yo("onChange","change",null,a,r),t.push({event:a,listeners:e}))}var Pi=null,Bi=null;function xb(t){up(t,0)}function bo(t){var e=zi(t);if(cd(e))return t}function Cd(t,e){if(t==="change")return e}var _d=!1;if(on){var Ts;if(on){var Es="oninput"in document;if(!Es){var zd=document.createElement("div");zd.setAttribute("oninput","return;"),Es=typeof zd.oninput=="function"}Ts=Es}else Ts=!1;_d=Ts&&(!document.documentMode||9<document.documentMode)}function kd(){Pi&&(Pi.detachEvent("onpropertychange",Vd),Bi=Pi=null)}function Vd(t){if(t.propertyName==="value"&&bo(Bi)){var e=[];wd(e,Bi,t,hs(t)),yd(xb,e)}}function Sb(t,e,a){t==="focusin"?(kd(),Pi=e,Bi=a,Pi.attachEvent("onpropertychange",Vd)):t==="focusout"&&kd()}function Tb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bo(Bi)}function Eb(t,e){if(t==="click")return bo(e)}function Ab(t,e){if(t==="input"||t==="change")return bo(e)}function Ob(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var be=typeof Object.is=="function"?Object.is:Ob;function ji(t,e){if(be(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),r=Object.keys(e);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var s=a[r];if(!Wl.call(e,s)||!be(t[s],e[s]))return!1}return!0}function Ud(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nd(t,e){var a=Ud(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=e&&r>=e)return{node:a,offset:e-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ud(a)}}function Ld(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ld(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=fo(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=fo(t.document)}return e}function As(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Db=on&&"documentMode"in document&&11>=document.documentMode,Ba=null,Os=null,Hi=null,Ds=!1;function Bd(t,e,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ds||Ba==null||Ba!==fo(r)||(r=Ba,"selectionStart"in r&&As(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hi&&ji(Hi,r)||(Hi=r,r=il(Os,"onSelect"),0<r.length&&(e=new yo("onSelect","select",null,e,a),t.push({event:e,listeners:r}),e.target=Ba)))}function la(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var ja={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionrun:la("Transition","TransitionRun"),transitionstart:la("Transition","TransitionStart"),transitioncancel:la("Transition","TransitionCancel"),transitionend:la("Transition","TransitionEnd")},Ms={},jd={};on&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete ja.animationend.animation,delete ja.animationiteration.animation,delete ja.animationstart.animation),"TransitionEvent"in window||delete ja.transitionend.transition);function sa(t){if(Ms[t])return Ms[t];if(!ja[t])return t;var e=ja[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in jd)return Ms[t]=e[a];return t}var Hd=sa("animationend"),qd=sa("animationiteration"),Yd=sa("animationstart"),Mb=sa("transitionrun"),Rb=sa("transitionstart"),wb=sa("transitioncancel"),Gd=sa("transitionend"),Xd=new Map,Rs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rs.push("scrollEnd");function je(t,e){Xd.set(t,e),ra(e,[t])}var Zd=new WeakMap;function we(t,e){if(typeof t=="object"&&t!==null){var a=Zd.get(t);return a!==void 0?a:(e={value:t,source:e,stack:sd(e)},Zd.set(t,e),e)}return{value:t,source:e,stack:sd(e)}}var Ce=[],Ha=0,ws=0;function xo(){for(var t=Ha,e=ws=Ha=0;e<t;){var a=Ce[e];Ce[e++]=null;var r=Ce[e];Ce[e++]=null;var s=Ce[e];Ce[e++]=null;var u=Ce[e];if(Ce[e++]=null,r!==null&&s!==null){var y=r.pending;y===null?s.next=s:(s.next=y.next,y.next=s),r.pending=s}u!==0&&Kd(a,s,u)}}function So(t,e,a,r){Ce[Ha++]=t,Ce[Ha++]=e,Ce[Ha++]=a,Ce[Ha++]=r,ws|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Cs(t,e,a,r){return So(t,e,a,r),To(t)}function qa(t,e){return So(t,null,null,e),To(t)}function Kd(t,e,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var s=!1,u=t.return;u!==null;)u.childLanes|=a,r=u.alternate,r!==null&&(r.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(s=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,s&&e!==null&&(s=31-ve(a),t=u.hiddenUpdates,r=t[s],r===null?t[s]=[e]:r.push(e),e.lane=a|536870912),u):null}function To(t){if(50<dr)throw dr=0,Nu=null,Error(l(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ya={};function Cb(t,e,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(t,e,a,r){return new Cb(t,e,a,r)}function _s(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ln(t,e){var a=t.alternate;return a===null?(a=xe(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Qd(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Eo(t,e,a,r,s,u){var y=0;if(r=t,typeof t=="function")_s(t)&&(y=1);else if(typeof t=="string")y=z1(t,a,tt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case at:return t=xe(31,a,e,s),t.elementType=at,t.lanes=u,t;case E:return ua(a.children,s,u,e);case T:y=8,s|=24;break;case _:return t=xe(12,a,e,s|2),t.elementType=_,t.lanes=u,t;case H:return t=xe(13,a,e,s),t.elementType=H,t.lanes=u,t;case K:return t=xe(19,a,e,s),t.elementType=K,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:case N:y=10;break t;case V:y=9;break t;case X:y=11;break t;case J:y=14;break t;case Z:y=16,r=null;break t}y=29,a=Error(l(130,t===null?"null":typeof t,"")),r=null}return e=xe(y,a,e,s),e.elementType=t,e.type=r,e.lanes=u,e}function ua(t,e,a,r){return t=xe(7,t,r,e),t.lanes=a,t}function zs(t,e,a){return t=xe(6,t,null,e),t.lanes=a,t}function ks(t,e,a){return e=xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ga=[],Xa=0,Ao=null,Oo=0,_e=[],ze=0,ca=null,sn=1,un="";function fa(t,e){Ga[Xa++]=Oo,Ga[Xa++]=Ao,Ao=t,Oo=e}function Jd(t,e,a){_e[ze++]=sn,_e[ze++]=un,_e[ze++]=ca,ca=t;var r=sn;t=un;var s=32-ve(r)-1;r&=~(1<<s),a+=1;var u=32-ve(e)+s;if(30<u){var y=s-s%5;u=(r&(1<<y)-1).toString(32),r>>=y,s-=y,sn=1<<32-ve(e)+s|a<<s|r,un=u+t}else sn=1<<u|a<<s|r,un=t}function Vs(t){t.return!==null&&(fa(t,1),Jd(t,1,0))}function Us(t){for(;t===Ao;)Ao=Ga[--Xa],Ga[Xa]=null,Oo=Ga[--Xa],Ga[Xa]=null;for(;t===ca;)ca=_e[--ze],_e[ze]=null,un=_e[--ze],_e[ze]=null,sn=_e[--ze],_e[ze]=null}var se=null,Ut=null,vt=!1,da=null,Qe=!1,Ns=Error(l(519));function ha(t){var e=Error(l(418,""));throw Gi(we(e,t)),Ns}function Fd(t){var e=t.stateNode,a=t.type,r=t.memoizedProps;switch(e[ie]=t,e[ce]=r,a){case"dialog":ft("cancel",e),ft("close",e);break;case"iframe":case"object":case"embed":ft("load",e);break;case"video":case"audio":for(a=0;a<mr.length;a++)ft(mr[a],e);break;case"source":ft("error",e);break;case"img":case"image":case"link":ft("error",e),ft("load",e);break;case"details":ft("toggle",e);break;case"input":ft("invalid",e),fd(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),co(e);break;case"select":ft("invalid",e);break;case"textarea":ft("invalid",e),hd(e,r.value,r.defaultValue,r.children),co(e)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||r.suppressHydrationWarning===!0||hp(e.textContent,a)?(r.popover!=null&&(ft("beforetoggle",e),ft("toggle",e)),r.onScroll!=null&&ft("scroll",e),r.onScrollEnd!=null&&ft("scrollend",e),r.onClick!=null&&(e.onclick=rl),e=!0):e=!1,e||ha(t)}function $d(t){for(se=t.return;se;)switch(se.tag){case 5:case 13:Qe=!1;return;case 27:case 3:Qe=!0;return;default:se=se.return}}function qi(t){if(t!==se)return!1;if(!vt)return $d(t),vt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Wu(t.type,t.memoizedProps)),a=!a),a&&Ut&&ha(t),$d(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){Ut=qe(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}Ut=null}}else e===27?(e=Ut,Zn(t.type)?(t=nc,nc=null,Ut=t):Ut=e):Ut=se?qe(t.stateNode.nextSibling):null;return!0}function Yi(){Ut=se=null,vt=!1}function Wd(){var t=da;return t!==null&&(me===null?me=t:me.push.apply(me,t),da=null),t}function Gi(t){da===null?da=[t]:da.push(t)}var Ls=q(null),ma=null,cn=null;function _n(t,e,a){G(Ls,e._currentValue),e._currentValue=a}function fn(t){t._currentValue=Ls.current,Q(Ls)}function Ps(t,e,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===a)break;t=t.return}}function Bs(t,e,a,r){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var u=s.dependencies;if(u!==null){var y=s.child;u=u.firstContext;t:for(;u!==null;){var v=u;u=s;for(var S=0;S<e.length;S++)if(v.context===e[S]){u.lanes|=a,v=u.alternate,v!==null&&(v.lanes|=a),Ps(u.return,a,t),r||(y=null);break t}u=v.next}}else if(s.tag===18){if(y=s.return,y===null)throw Error(l(341));y.lanes|=a,u=y.alternate,u!==null&&(u.lanes|=a),Ps(y,a,t),y=null}else y=s.child;if(y!==null)y.return=s;else for(y=s;y!==null;){if(y===t){y=null;break}if(s=y.sibling,s!==null){s.return=y.return,y=s;break}y=y.return}s=y}}function Xi(t,e,a,r){t=null;for(var s=e,u=!1;s!==null;){if(!u){if((s.flags&524288)!==0)u=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var y=s.alternate;if(y===null)throw Error(l(387));if(y=y.memoizedProps,y!==null){var v=s.type;be(s.pendingProps.value,y.value)||(t!==null?t.push(v):t=[v])}}else if(s===ge.current){if(y=s.alternate,y===null)throw Error(l(387));y.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(xr):t=[xr])}s=s.return}t!==null&&Bs(e,t,a,r),e.flags|=262144}function Do(t){for(t=t.firstContext;t!==null;){if(!be(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function pa(t){ma=t,cn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function re(t){return Id(ma,t)}function Mo(t,e){return ma===null&&pa(t),Id(t,e)}function Id(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},cn===null){if(t===null)throw Error(l(308));cn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else cn=cn.next=e;return a}var _b=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},zb=n.unstable_scheduleCallback,kb=n.unstable_NormalPriority,Zt={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function js(){return{controller:new _b,data:new Map,refCount:0}}function Zi(t){t.refCount--,t.refCount===0&&zb(kb,function(){t.controller.abort()})}var Ki=null,Hs=0,Za=0,Ka=null;function Vb(t,e){if(Ki===null){var a=Ki=[];Hs=0,Za=Yu(),Ka={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Hs++,e.then(th,th),e}function th(){if(--Hs===0&&Ki!==null){Ka!==null&&(Ka.status="fulfilled");var t=Ki;Ki=null,Za=0,Ka=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Ub(t,e){var a=[],r={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var s=0;s<a.length;s++)(0,a[s])(e)},function(s){for(r.status="rejected",r.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),r}var eh=P.S;P.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Vb(t,e),eh!==null&&eh(t,e)};var ga=q(null);function qs(){var t=ga.current;return t!==null?t:Mt.pooledCache}function Ro(t,e){e===null?G(ga,ga.current):G(ga,e.pool)}function nh(){var t=qs();return t===null?null:{parent:Zt._currentValue,pool:t}}var Qi=Error(l(460)),ah=Error(l(474)),wo=Error(l(542)),Ys={then:function(){}};function ih(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Co(){}function rh(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Co,Co),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,lh(t),t;default:if(typeof e.status=="string")e.then(Co,Co);else{if(t=Mt,t!==null&&100<t.shellSuspendCounter)throw Error(l(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=r}},function(r){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,lh(t),t}throw Ji=e,Qi}}var Ji=null;function oh(){if(Ji===null)throw Error(l(459));var t=Ji;return Ji=null,t}function lh(t){if(t===Qi||t===wo)throw Error(l(483))}var zn=!1;function Gs(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xs(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function kn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Vn(t,e,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(bt&2)!==0){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,e=To(t),Kd(t,null,a),e}return So(t,r,e,a),To(t)}function Fi(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,td(t,a)}}function Zs(t,e){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var s=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?s=u=y:u=u.next=y,a=a.next}while(a!==null);u===null?s=u=e:u=u.next=e}else s=u=e;a={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Ks=!1;function $i(){if(Ks){var t=Ka;if(t!==null)throw t}}function Wi(t,e,a,r){Ks=!1;var s=t.updateQueue;zn=!1;var u=s.firstBaseUpdate,y=s.lastBaseUpdate,v=s.shared.pending;if(v!==null){s.shared.pending=null;var S=v,C=S.next;S.next=null,y===null?u=C:y.next=C,y=S;var L=t.alternate;L!==null&&(L=L.updateQueue,v=L.lastBaseUpdate,v!==y&&(v===null?L.firstBaseUpdate=C:v.next=C,L.lastBaseUpdate=S))}if(u!==null){var j=s.baseState;y=0,L=C=S=null,v=u;do{var z=v.lane&-536870913,k=z!==v.lane;if(k?(pt&z)===z:(r&z)===z){z!==0&&z===Za&&(Ks=!0),L!==null&&(L=L.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});t:{var it=t,et=v;z=e;var At=a;switch(et.tag){case 1:if(it=et.payload,typeof it=="function"){j=it.call(At,j,z);break t}j=it;break t;case 3:it.flags=it.flags&-65537|128;case 0:if(it=et.payload,z=typeof it=="function"?it.call(At,j,z):it,z==null)break t;j=g({},j,z);break t;case 2:zn=!0}}z=v.callback,z!==null&&(t.flags|=64,k&&(t.flags|=8192),k=s.callbacks,k===null?s.callbacks=[z]:k.push(z))}else k={lane:z,tag:v.tag,payload:v.payload,callback:v.callback,next:null},L===null?(C=L=k,S=j):L=L.next=k,y|=z;if(v=v.next,v===null){if(v=s.shared.pending,v===null)break;k=v,v=k.next,k.next=null,s.lastBaseUpdate=k,s.shared.pending=null}}while(!0);L===null&&(S=j),s.baseState=S,s.firstBaseUpdate=C,s.lastBaseUpdate=L,u===null&&(s.shared.lanes=0),qn|=y,t.lanes=y,t.memoizedState=j}}function sh(t,e){if(typeof t!="function")throw Error(l(191,t));t.call(e)}function uh(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)sh(a[t],e)}var Qa=q(null),_o=q(0);function ch(t,e){t=vn,G(_o,t),G(Qa,e),vn=t|e.baseLanes}function Qs(){G(_o,vn),G(Qa,Qa.current)}function Js(){vn=_o.current,Q(Qa),Q(_o)}var Un=0,st=null,Tt=null,Ht=null,zo=!1,Ja=!1,ya=!1,ko=0,Ii=0,Fa=null,Nb=0;function Pt(){throw Error(l(321))}function Fs(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!be(t[a],e[a]))return!1;return!0}function $s(t,e,a,r,s,u){return Un=u,st=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,P.H=t===null||t.memoizedState===null?Kh:Qh,ya=!1,u=a(r,s),ya=!1,Ja&&(u=dh(e,a,r,s)),fh(t),u}function fh(t){P.H=Bo;var e=Tt!==null&&Tt.next!==null;if(Un=0,Ht=Tt=st=null,zo=!1,Ii=0,Fa=null,e)throw Error(l(300));t===null||$t||(t=t.dependencies,t!==null&&Do(t)&&($t=!0))}function dh(t,e,a,r){st=t;var s=0;do{if(Ja&&(Fa=null),Ii=0,Ja=!1,25<=s)throw Error(l(301));if(s+=1,Ht=Tt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}P.H=Yb,u=e(a,r)}while(Ja);return u}function Lb(){var t=P.H,e=t.useState()[0];return e=typeof e.then=="function"?tr(e):e,t=t.useState()[0],(Tt!==null?Tt.memoizedState:null)!==t&&(st.flags|=1024),e}function Ws(){var t=ko!==0;return ko=0,t}function Is(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function tu(t){if(zo){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}zo=!1}Un=0,Ht=Tt=st=null,Ja=!1,Ii=ko=0,Fa=null}function de(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?st.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function qt(){if(Tt===null){var t=st.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Ht===null?st.memoizedState:Ht.next;if(e!==null)Ht=e,Tt=t;else{if(t===null)throw st.alternate===null?Error(l(467)):Error(l(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Ht===null?st.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function eu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tr(t){var e=Ii;return Ii+=1,Fa===null&&(Fa=[]),t=rh(Fa,t,e),e=st,(Ht===null?e.memoizedState:Ht.next)===null&&(e=e.alternate,P.H=e===null||e.memoizedState===null?Kh:Qh),t}function Vo(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return tr(t);if(t.$$typeof===N)return re(t)}throw Error(l(438,String(t)))}function nu(t){var e=null,a=st.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var r=st.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=eu(),st.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),r=0;r<t;r++)a[r]=St;return e.index++,a}function dn(t,e){return typeof e=="function"?e(t):e}function Uo(t){var e=qt();return au(e,Tt,t)}function au(t,e,a){var r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=a;var s=t.baseQueue,u=r.pending;if(u!==null){if(s!==null){var y=s.next;s.next=u.next,u.next=y}e.baseQueue=s=u,r.pending=null}if(u=t.baseState,s===null)t.memoizedState=u;else{e=s.next;var v=y=null,S=null,C=e,L=!1;do{var j=C.lane&-536870913;if(j!==C.lane?(pt&j)===j:(Un&j)===j){var z=C.revertLane;if(z===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),j===Za&&(L=!0);else if((Un&z)===z){C=C.next,z===Za&&(L=!0);continue}else j={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(v=S=j,y=u):S=S.next=j,st.lanes|=z,qn|=z;j=C.action,ya&&a(u,j),u=C.hasEagerState?C.eagerState:a(u,j)}else z={lane:j,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(v=S=z,y=u):S=S.next=z,st.lanes|=j,qn|=j;C=C.next}while(C!==null&&C!==e);if(S===null?y=u:S.next=v,!be(u,t.memoizedState)&&($t=!0,L&&(a=Ka,a!==null)))throw a;t.memoizedState=u,t.baseState=y,t.baseQueue=S,r.lastRenderedState=u}return s===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function iu(t){var e=qt(),a=e.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=t;var r=a.dispatch,s=a.pending,u=e.memoizedState;if(s!==null){a.pending=null;var y=s=s.next;do u=t(u,y.action),y=y.next;while(y!==s);be(u,e.memoizedState)||($t=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),a.lastRenderedState=u}return[u,r]}function hh(t,e,a){var r=st,s=qt(),u=vt;if(u){if(a===void 0)throw Error(l(407));a=a()}else a=e();var y=!be((Tt||s).memoizedState,a);y&&(s.memoizedState=a,$t=!0),s=s.queue;var v=gh.bind(null,r,s,t);if(er(2048,8,v,[t]),s.getSnapshot!==e||y||Ht!==null&&Ht.memoizedState.tag&1){if(r.flags|=2048,$a(9,No(),ph.bind(null,r,s,a,e),null),Mt===null)throw Error(l(349));u||(Un&124)!==0||mh(r,e,a)}return a}function mh(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=st.updateQueue,e===null?(e=eu(),st.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function ph(t,e,a,r){e.value=a,e.getSnapshot=r,yh(e)&&vh(t)}function gh(t,e,a){return a(function(){yh(e)&&vh(t)})}function yh(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!be(t,a)}catch{return!0}}function vh(t){var e=qa(t,2);e!==null&&Oe(e,t,2)}function ru(t){var e=de();if(typeof t=="function"){var a=t;if(t=a(),ya){Rn(!0);try{a()}finally{Rn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:t},e}function bh(t,e,a,r){return t.baseState=a,au(t,Tt,typeof r=="function"?r:dn)}function Pb(t,e,a,r,s){if(Po(t))throw Error(l(485));if(t=e.action,t!==null){var u={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){u.listeners.push(y)}};P.T!==null?a(!0):u.isTransition=!1,r(u),a=e.pending,a===null?(u.next=e.pending=u,xh(e,u)):(u.next=a.next,e.pending=a.next=u)}}function xh(t,e){var a=e.action,r=e.payload,s=t.state;if(e.isTransition){var u=P.T,y={};P.T=y;try{var v=a(s,r),S=P.S;S!==null&&S(y,v),Sh(t,e,v)}catch(C){ou(t,e,C)}finally{P.T=u}}else try{u=a(s,r),Sh(t,e,u)}catch(C){ou(t,e,C)}}function Sh(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Th(t,e,r)},function(r){return ou(t,e,r)}):Th(t,e,a)}function Th(t,e,a){e.status="fulfilled",e.value=a,Eh(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,xh(t,a)))}function ou(t,e,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=a,Eh(e),e=e.next;while(e!==r)}t.action=null}function Eh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ah(t,e){return e}function Oh(t,e){if(vt){var a=Mt.formState;if(a!==null){t:{var r=st;if(vt){if(Ut){e:{for(var s=Ut,u=Qe;s.nodeType!==8;){if(!u){s=null;break e}if(s=qe(s.nextSibling),s===null){s=null;break e}}u=s.data,s=u==="F!"||u==="F"?s:null}if(s){Ut=qe(s.nextSibling),r=s.data==="F!";break t}}ha(r)}r=!1}r&&(e=a[0])}}return a=de(),a.memoizedState=a.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ah,lastRenderedState:e},a.queue=r,a=Gh.bind(null,st,r),r.dispatch=a,r=ru(!1),u=fu.bind(null,st,!1,r.queue),r=de(),s={state:e,dispatch:null,action:t,pending:null},r.queue=s,a=Pb.bind(null,st,s,u,a),s.dispatch=a,r.memoizedState=t,[e,a,!1]}function Dh(t){var e=qt();return Mh(e,Tt,t)}function Mh(t,e,a){if(e=au(t,e,Ah)[0],t=Uo(dn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=tr(e)}catch(y){throw y===Qi?wo:y}else r=e;e=qt();var s=e.queue,u=s.dispatch;return a!==e.memoizedState&&(st.flags|=2048,$a(9,No(),Bb.bind(null,s,a),null)),[r,u,t]}function Bb(t,e){t.action=e}function Rh(t){var e=qt(),a=Tt;if(a!==null)return Mh(e,a,t);qt(),e=e.memoizedState,a=qt();var r=a.queue.dispatch;return a.memoizedState=t,[e,r,!1]}function $a(t,e,a,r){return t={tag:t,create:a,deps:r,inst:e,next:null},e=st.updateQueue,e===null&&(e=eu(),st.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,e.lastEffect=t),t}function No(){return{destroy:void 0,resource:void 0}}function wh(){return qt().memoizedState}function Lo(t,e,a,r){var s=de();r=r===void 0?null:r,st.flags|=t,s.memoizedState=$a(1|e,No(),a,r)}function er(t,e,a,r){var s=qt();r=r===void 0?null:r;var u=s.memoizedState.inst;Tt!==null&&r!==null&&Fs(r,Tt.memoizedState.deps)?s.memoizedState=$a(e,u,a,r):(st.flags|=t,s.memoizedState=$a(1|e,u,a,r))}function Ch(t,e){Lo(8390656,8,t,e)}function _h(t,e){er(2048,8,t,e)}function zh(t,e){return er(4,2,t,e)}function kh(t,e){return er(4,4,t,e)}function Vh(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Uh(t,e,a){a=a!=null?a.concat([t]):null,er(4,4,Vh.bind(null,e,t),a)}function lu(){}function Nh(t,e){var a=qt();e=e===void 0?null:e;var r=a.memoizedState;return e!==null&&Fs(e,r[1])?r[0]:(a.memoizedState=[t,e],t)}function Lh(t,e){var a=qt();e=e===void 0?null:e;var r=a.memoizedState;if(e!==null&&Fs(e,r[1]))return r[0];if(r=t(),ya){Rn(!0);try{t()}finally{Rn(!1)}}return a.memoizedState=[r,e],r}function su(t,e,a){return a===void 0||(Un&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=jm(),st.lanes|=t,qn|=t,a)}function Ph(t,e,a,r){return be(a,e)?a:Qa.current!==null?(t=su(t,a,r),be(t,e)||($t=!0),t):(Un&42)===0?($t=!0,t.memoizedState=a):(t=jm(),st.lanes|=t,qn|=t,e)}function Bh(t,e,a,r,s){var u=Y.p;Y.p=u!==0&&8>u?u:8;var y=P.T,v={};P.T=v,fu(t,!1,e,a);try{var S=s(),C=P.S;if(C!==null&&C(v,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var L=Ub(S,r);nr(t,e,L,Ae(t))}else nr(t,e,r,Ae(t))}catch(j){nr(t,e,{then:function(){},status:"rejected",reason:j},Ae())}finally{Y.p=u,P.T=y}}function jb(){}function uu(t,e,a,r){if(t.tag!==5)throw Error(l(476));var s=jh(t).queue;Bh(t,s,e,$,a===null?jb:function(){return Hh(t),a(r)})}function jh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:$},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Hh(t){var e=jh(t).next.queue;nr(t,e,{},Ae())}function cu(){return re(xr)}function qh(){return qt().memoizedState}function Yh(){return qt().memoizedState}function Hb(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Ae();t=kn(a);var r=Vn(e,t,a);r!==null&&(Oe(r,e,a),Fi(r,e,a)),e={cache:js()},t.payload=e;return}e=e.return}}function qb(t,e,a){var r=Ae();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Po(t)?Xh(e,a):(a=Cs(t,e,a,r),a!==null&&(Oe(a,t,r),Zh(a,e,r)))}function Gh(t,e,a){var r=Ae();nr(t,e,a,r)}function nr(t,e,a,r){var s={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Po(t))Xh(e,s);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var y=e.lastRenderedState,v=u(y,a);if(s.hasEagerState=!0,s.eagerState=v,be(v,y))return So(t,e,s,0),Mt===null&&xo(),!1}catch{}if(a=Cs(t,e,s,r),a!==null)return Oe(a,t,r),Zh(a,e,r),!0}return!1}function fu(t,e,a,r){if(r={lane:2,revertLane:Yu(),action:r,hasEagerState:!1,eagerState:null,next:null},Po(t)){if(e)throw Error(l(479))}else e=Cs(t,a,r,2),e!==null&&Oe(e,t,2)}function Po(t){var e=t.alternate;return t===st||e!==null&&e===st}function Xh(t,e){Ja=zo=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Zh(t,e,a){if((a&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,td(t,a)}}var Bo={readContext:re,use:Vo,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useLayoutEffect:Pt,useInsertionEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useSyncExternalStore:Pt,useId:Pt,useHostTransitionStatus:Pt,useFormState:Pt,useActionState:Pt,useOptimistic:Pt,useMemoCache:Pt,useCacheRefresh:Pt},Kh={readContext:re,use:Vo,useCallback:function(t,e){return de().memoizedState=[t,e===void 0?null:e],t},useContext:re,useEffect:Ch,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Lo(4194308,4,Vh.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Lo(4194308,4,t,e)},useInsertionEffect:function(t,e){Lo(4,2,t,e)},useMemo:function(t,e){var a=de();e=e===void 0?null:e;var r=t();if(ya){Rn(!0);try{t()}finally{Rn(!1)}}return a.memoizedState=[r,e],r},useReducer:function(t,e,a){var r=de();if(a!==void 0){var s=a(e);if(ya){Rn(!0);try{a(e)}finally{Rn(!1)}}}else s=e;return r.memoizedState=r.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},r.queue=t,t=t.dispatch=qb.bind(null,st,t),[r.memoizedState,t]},useRef:function(t){var e=de();return t={current:t},e.memoizedState=t},useState:function(t){t=ru(t);var e=t.queue,a=Gh.bind(null,st,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:lu,useDeferredValue:function(t,e){var a=de();return su(a,t,e)},useTransition:function(){var t=ru(!1);return t=Bh.bind(null,st,t.queue,!0,!1),de().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var r=st,s=de();if(vt){if(a===void 0)throw Error(l(407));a=a()}else{if(a=e(),Mt===null)throw Error(l(349));(pt&124)!==0||mh(r,e,a)}s.memoizedState=a;var u={value:a,getSnapshot:e};return s.queue=u,Ch(gh.bind(null,r,u,t),[t]),r.flags|=2048,$a(9,No(),ph.bind(null,r,u,a,e),null),a},useId:function(){var t=de(),e=Mt.identifierPrefix;if(vt){var a=un,r=sn;a=(r&~(1<<32-ve(r)-1)).toString(32)+a,e="«"+e+"R"+a,a=ko++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=Nb++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:cu,useFormState:Oh,useActionState:Oh,useOptimistic:function(t){var e=de();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=fu.bind(null,st,!0,a),a.dispatch=e,[t,e]},useMemoCache:nu,useCacheRefresh:function(){return de().memoizedState=Hb.bind(null,st)}},Qh={readContext:re,use:Vo,useCallback:Nh,useContext:re,useEffect:_h,useImperativeHandle:Uh,useInsertionEffect:zh,useLayoutEffect:kh,useMemo:Lh,useReducer:Uo,useRef:wh,useState:function(){return Uo(dn)},useDebugValue:lu,useDeferredValue:function(t,e){var a=qt();return Ph(a,Tt.memoizedState,t,e)},useTransition:function(){var t=Uo(dn)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:tr(t),e]},useSyncExternalStore:hh,useId:qh,useHostTransitionStatus:cu,useFormState:Dh,useActionState:Dh,useOptimistic:function(t,e){var a=qt();return bh(a,Tt,t,e)},useMemoCache:nu,useCacheRefresh:Yh},Yb={readContext:re,use:Vo,useCallback:Nh,useContext:re,useEffect:_h,useImperativeHandle:Uh,useInsertionEffect:zh,useLayoutEffect:kh,useMemo:Lh,useReducer:iu,useRef:wh,useState:function(){return iu(dn)},useDebugValue:lu,useDeferredValue:function(t,e){var a=qt();return Tt===null?su(a,t,e):Ph(a,Tt.memoizedState,t,e)},useTransition:function(){var t=iu(dn)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:tr(t),e]},useSyncExternalStore:hh,useId:qh,useHostTransitionStatus:cu,useFormState:Rh,useActionState:Rh,useOptimistic:function(t,e){var a=qt();return Tt!==null?bh(a,Tt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:nu,useCacheRefresh:Yh},Wa=null,ar=0;function jo(t){var e=ar;return ar+=1,Wa===null&&(Wa=[]),rh(Wa,t,e)}function ir(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Ho(t,e){throw e.$$typeof===b?Error(l(525)):(t=Object.prototype.toString.call(e),Error(l(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Jh(t){var e=t._init;return e(t._payload)}function Fh(t){function e(R,D){if(t){var w=R.deletions;w===null?(R.deletions=[D],R.flags|=16):w.push(D)}}function a(R,D){if(!t)return null;for(;D!==null;)e(R,D),D=D.sibling;return null}function r(R){for(var D=new Map;R!==null;)R.key!==null?D.set(R.key,R):D.set(R.index,R),R=R.sibling;return D}function s(R,D){return R=ln(R,D),R.index=0,R.sibling=null,R}function u(R,D,w){return R.index=w,t?(w=R.alternate,w!==null?(w=w.index,w<D?(R.flags|=67108866,D):w):(R.flags|=67108866,D)):(R.flags|=1048576,D)}function y(R){return t&&R.alternate===null&&(R.flags|=67108866),R}function v(R,D,w,B){return D===null||D.tag!==6?(D=zs(w,R.mode,B),D.return=R,D):(D=s(D,w),D.return=R,D)}function S(R,D,w,B){var F=w.type;return F===E?L(R,D,w.props.children,B,w.key):D!==null&&(D.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Z&&Jh(F)===D.type)?(D=s(D,w.props),ir(D,w),D.return=R,D):(D=Eo(w.type,w.key,w.props,null,R.mode,B),ir(D,w),D.return=R,D)}function C(R,D,w,B){return D===null||D.tag!==4||D.stateNode.containerInfo!==w.containerInfo||D.stateNode.implementation!==w.implementation?(D=ks(w,R.mode,B),D.return=R,D):(D=s(D,w.children||[]),D.return=R,D)}function L(R,D,w,B,F){return D===null||D.tag!==7?(D=ua(w,R.mode,B,F),D.return=R,D):(D=s(D,w),D.return=R,D)}function j(R,D,w){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=zs(""+D,R.mode,w),D.return=R,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case x:return w=Eo(D.type,D.key,D.props,null,R.mode,w),ir(w,D),w.return=R,w;case A:return D=ks(D,R.mode,w),D.return=R,D;case Z:var B=D._init;return D=B(D._payload),j(R,D,w)}if(Xt(D)||Gt(D))return D=ua(D,R.mode,w,null),D.return=R,D;if(typeof D.then=="function")return j(R,jo(D),w);if(D.$$typeof===N)return j(R,Mo(R,D),w);Ho(R,D)}return null}function z(R,D,w,B){var F=D!==null?D.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return F!==null?null:v(R,D,""+w,B);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case x:return w.key===F?S(R,D,w,B):null;case A:return w.key===F?C(R,D,w,B):null;case Z:return F=w._init,w=F(w._payload),z(R,D,w,B)}if(Xt(w)||Gt(w))return F!==null?null:L(R,D,w,B,null);if(typeof w.then=="function")return z(R,D,jo(w),B);if(w.$$typeof===N)return z(R,D,Mo(R,w),B);Ho(R,w)}return null}function k(R,D,w,B,F){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return R=R.get(w)||null,v(D,R,""+B,F);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case x:return R=R.get(B.key===null?w:B.key)||null,S(D,R,B,F);case A:return R=R.get(B.key===null?w:B.key)||null,C(D,R,B,F);case Z:var ut=B._init;return B=ut(B._payload),k(R,D,w,B,F)}if(Xt(B)||Gt(B))return R=R.get(w)||null,L(D,R,B,F,null);if(typeof B.then=="function")return k(R,D,w,jo(B),F);if(B.$$typeof===N)return k(R,D,w,Mo(D,B),F);Ho(D,B)}return null}function it(R,D,w,B){for(var F=null,ut=null,I=D,nt=D=0,It=null;I!==null&&nt<w.length;nt++){I.index>nt?(It=I,I=null):It=I.sibling;var yt=z(R,I,w[nt],B);if(yt===null){I===null&&(I=It);break}t&&I&&yt.alternate===null&&e(R,I),D=u(yt,D,nt),ut===null?F=yt:ut.sibling=yt,ut=yt,I=It}if(nt===w.length)return a(R,I),vt&&fa(R,nt),F;if(I===null){for(;nt<w.length;nt++)I=j(R,w[nt],B),I!==null&&(D=u(I,D,nt),ut===null?F=I:ut.sibling=I,ut=I);return vt&&fa(R,nt),F}for(I=r(I);nt<w.length;nt++)It=k(I,R,nt,w[nt],B),It!==null&&(t&&It.alternate!==null&&I.delete(It.key===null?nt:It.key),D=u(It,D,nt),ut===null?F=It:ut.sibling=It,ut=It);return t&&I.forEach(function($n){return e(R,$n)}),vt&&fa(R,nt),F}function et(R,D,w,B){if(w==null)throw Error(l(151));for(var F=null,ut=null,I=D,nt=D=0,It=null,yt=w.next();I!==null&&!yt.done;nt++,yt=w.next()){I.index>nt?(It=I,I=null):It=I.sibling;var $n=z(R,I,yt.value,B);if($n===null){I===null&&(I=It);break}t&&I&&$n.alternate===null&&e(R,I),D=u($n,D,nt),ut===null?F=$n:ut.sibling=$n,ut=$n,I=It}if(yt.done)return a(R,I),vt&&fa(R,nt),F;if(I===null){for(;!yt.done;nt++,yt=w.next())yt=j(R,yt.value,B),yt!==null&&(D=u(yt,D,nt),ut===null?F=yt:ut.sibling=yt,ut=yt);return vt&&fa(R,nt),F}for(I=r(I);!yt.done;nt++,yt=w.next())yt=k(I,R,nt,yt.value,B),yt!==null&&(t&&yt.alternate!==null&&I.delete(yt.key===null?nt:yt.key),D=u(yt,D,nt),ut===null?F=yt:ut.sibling=yt,ut=yt);return t&&I.forEach(function(G1){return e(R,G1)}),vt&&fa(R,nt),F}function At(R,D,w,B){if(typeof w=="object"&&w!==null&&w.type===E&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case x:t:{for(var F=w.key;D!==null;){if(D.key===F){if(F=w.type,F===E){if(D.tag===7){a(R,D.sibling),B=s(D,w.props.children),B.return=R,R=B;break t}}else if(D.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Z&&Jh(F)===D.type){a(R,D.sibling),B=s(D,w.props),ir(B,w),B.return=R,R=B;break t}a(R,D);break}else e(R,D);D=D.sibling}w.type===E?(B=ua(w.props.children,R.mode,B,w.key),B.return=R,R=B):(B=Eo(w.type,w.key,w.props,null,R.mode,B),ir(B,w),B.return=R,R=B)}return y(R);case A:t:{for(F=w.key;D!==null;){if(D.key===F)if(D.tag===4&&D.stateNode.containerInfo===w.containerInfo&&D.stateNode.implementation===w.implementation){a(R,D.sibling),B=s(D,w.children||[]),B.return=R,R=B;break t}else{a(R,D);break}else e(R,D);D=D.sibling}B=ks(w,R.mode,B),B.return=R,R=B}return y(R);case Z:return F=w._init,w=F(w._payload),At(R,D,w,B)}if(Xt(w))return it(R,D,w,B);if(Gt(w)){if(F=Gt(w),typeof F!="function")throw Error(l(150));return w=F.call(w),et(R,D,w,B)}if(typeof w.then=="function")return At(R,D,jo(w),B);if(w.$$typeof===N)return At(R,D,Mo(R,w),B);Ho(R,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,D!==null&&D.tag===6?(a(R,D.sibling),B=s(D,w),B.return=R,R=B):(a(R,D),B=zs(w,R.mode,B),B.return=R,R=B),y(R)):a(R,D)}return function(R,D,w,B){try{ar=0;var F=At(R,D,w,B);return Wa=null,F}catch(I){if(I===Qi||I===wo)throw I;var ut=xe(29,I,null,R.mode);return ut.lanes=B,ut.return=R,ut}}}var Ia=Fh(!0),$h=Fh(!1),ke=q(null),Je=null;function Nn(t){var e=t.alternate;G(Kt,Kt.current&1),G(ke,t),Je===null&&(e===null||Qa.current!==null||e.memoizedState!==null)&&(Je=t)}function Wh(t){if(t.tag===22){if(G(Kt,Kt.current),G(ke,t),Je===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Je=t)}}else Ln()}function Ln(){G(Kt,Kt.current),G(ke,ke.current)}function hn(t){Q(ke),Je===t&&(Je=null),Q(Kt)}var Kt=q(0);function qo(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ec(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function du(t,e,a,r){e=t.memoizedState,a=a(r,e),a=a==null?e:g({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var hu={enqueueSetState:function(t,e,a){t=t._reactInternals;var r=Ae(),s=kn(r);s.payload=e,a!=null&&(s.callback=a),e=Vn(t,s,r),e!==null&&(Oe(e,t,r),Fi(e,t,r))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var r=Ae(),s=kn(r);s.tag=1,s.payload=e,a!=null&&(s.callback=a),e=Vn(t,s,r),e!==null&&(Oe(e,t,r),Fi(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Ae(),r=kn(a);r.tag=2,e!=null&&(r.callback=e),e=Vn(t,r,a),e!==null&&(Oe(e,t,a),Fi(e,t,a))}};function Ih(t,e,a,r,s,u,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,u,y):e.prototype&&e.prototype.isPureReactComponent?!ji(a,r)||!ji(s,u):!0}function tm(t,e,a,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,r),e.state!==t&&hu.enqueueReplaceState(e,e.state,null)}function va(t,e){var a=e;if("ref"in e){a={};for(var r in e)r!=="ref"&&(a[r]=e[r])}if(t=t.defaultProps){a===e&&(a=g({},a));for(var s in t)a[s]===void 0&&(a[s]=t[s])}return a}var Yo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function em(t){Yo(t)}function nm(t){console.error(t)}function am(t){Yo(t)}function Go(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function im(t,e,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function mu(t,e,a){return a=kn(a),a.tag=3,a.payload={element:null},a.callback=function(){Go(t,e)},a}function rm(t){return t=kn(t),t.tag=3,t}function om(t,e,a,r){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var u=r.value;t.payload=function(){return s(u)},t.callback=function(){im(e,a,r)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){im(e,a,r),typeof s!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})})}function Gb(t,e,a,r,s){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=a.alternate,e!==null&&Xi(e,a,s,!0),a=ke.current,a!==null){switch(a.tag){case 13:return Je===null?Pu():a.alternate===null&&Nt===0&&(Nt=3),a.flags&=-257,a.flags|=65536,a.lanes=s,r===Ys?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([r]):e.add(r),ju(t,r,s)),!1;case 22:return a.flags|=65536,r===Ys?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([r]):a.add(r)),ju(t,r,s)),!1}throw Error(l(435,a.tag))}return ju(t,r,s),Pu(),!1}if(vt)return e=ke.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=s,r!==Ns&&(t=Error(l(422),{cause:r}),Gi(we(t,a)))):(r!==Ns&&(e=Error(l(423),{cause:r}),Gi(we(e,a))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,r=we(r,a),s=mu(t.stateNode,r,s),Zs(t,s),Nt!==4&&(Nt=2)),!1;var u=Error(l(520),{cause:r});if(u=we(u,a),fr===null?fr=[u]:fr.push(u),Nt!==4&&(Nt=2),e===null)return!0;r=we(r,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=s&-s,a.lanes|=t,t=mu(a.stateNode,r,t),Zs(a,t),!1;case 1:if(e=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Yn===null||!Yn.has(u))))return a.flags|=65536,s&=-s,a.lanes|=s,s=rm(s),om(s,t,a,r),Zs(a,s),!1}a=a.return}while(a!==null);return!1}var lm=Error(l(461)),$t=!1;function te(t,e,a,r){e.child=t===null?$h(e,null,a,r):Ia(e,t.child,a,r)}function sm(t,e,a,r,s){a=a.render;var u=e.ref;if("ref"in r){var y={};for(var v in r)v!=="ref"&&(y[v]=r[v])}else y=r;return pa(e),r=$s(t,e,a,y,u,s),v=Ws(),t!==null&&!$t?(Is(t,e,s),mn(t,e,s)):(vt&&v&&Vs(e),e.flags|=1,te(t,e,r,s),e.child)}function um(t,e,a,r,s){if(t===null){var u=a.type;return typeof u=="function"&&!_s(u)&&u.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=u,cm(t,e,u,r,s)):(t=Eo(a.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Tu(t,s)){var y=u.memoizedProps;if(a=a.compare,a=a!==null?a:ji,a(y,r)&&t.ref===e.ref)return mn(t,e,s)}return e.flags|=1,t=ln(u,r),t.ref=e.ref,t.return=e,e.child=t}function cm(t,e,a,r,s){if(t!==null){var u=t.memoizedProps;if(ji(u,r)&&t.ref===e.ref)if($t=!1,e.pendingProps=r=u,Tu(t,s))(t.flags&131072)!==0&&($t=!0);else return e.lanes=t.lanes,mn(t,e,s)}return pu(t,e,a,r,s)}function fm(t,e,a){var r=e.pendingProps,s=r.children,u=t!==null?t.memoizedState:null;if(r.mode==="hidden"){if((e.flags&128)!==0){if(r=u!==null?u.baseLanes|a:a,t!==null){for(s=e.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;e.childLanes=u&~r}else e.childLanes=0,e.child=null;return dm(t,e,r,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ro(e,u!==null?u.cachePool:null),u!==null?ch(e,u):Qs(),Wh(e);else return e.lanes=e.childLanes=536870912,dm(t,e,u!==null?u.baseLanes|a:a,a)}else u!==null?(Ro(e,u.cachePool),ch(e,u),Ln(),e.memoizedState=null):(t!==null&&Ro(e,null),Qs(),Ln());return te(t,e,s,a),e.child}function dm(t,e,a,r){var s=qs();return s=s===null?null:{parent:Zt._currentValue,pool:s},e.memoizedState={baseLanes:a,cachePool:s},t!==null&&Ro(e,null),Qs(),Wh(e),t!==null&&Xi(t,e,r,!0),null}function Xo(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function pu(t,e,a,r,s){return pa(e),a=$s(t,e,a,r,void 0,s),r=Ws(),t!==null&&!$t?(Is(t,e,s),mn(t,e,s)):(vt&&r&&Vs(e),e.flags|=1,te(t,e,a,s),e.child)}function hm(t,e,a,r,s,u){return pa(e),e.updateQueue=null,a=dh(e,r,a,s),fh(t),r=Ws(),t!==null&&!$t?(Is(t,e,u),mn(t,e,u)):(vt&&r&&Vs(e),e.flags|=1,te(t,e,a,u),e.child)}function mm(t,e,a,r,s){if(pa(e),e.stateNode===null){var u=Ya,y=a.contextType;typeof y=="object"&&y!==null&&(u=re(y)),u=new a(r,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=hu,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=r,u.state=e.memoizedState,u.refs={},Gs(e),y=a.contextType,u.context=typeof y=="object"&&y!==null?re(y):Ya,u.state=e.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(du(e,a,y,r),u.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(y=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),y!==u.state&&hu.enqueueReplaceState(u,u.state,null),Wi(e,r,u,s),$i(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){u=e.stateNode;var v=e.memoizedProps,S=va(a,v);u.props=S;var C=u.context,L=a.contextType;y=Ya,typeof L=="object"&&L!==null&&(y=re(L));var j=a.getDerivedStateFromProps;L=typeof j=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=e.pendingProps!==v,L||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||C!==y)&&tm(e,u,r,y),zn=!1;var z=e.memoizedState;u.state=z,Wi(e,r,u,s),$i(),C=e.memoizedState,v||z!==C||zn?(typeof j=="function"&&(du(e,a,j,r),C=e.memoizedState),(S=zn||Ih(e,a,S,r,z,C,y))?(L||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=C),u.props=r,u.state=C,u.context=y,r=S):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{u=e.stateNode,Xs(t,e),y=e.memoizedProps,L=va(a,y),u.props=L,j=e.pendingProps,z=u.context,C=a.contextType,S=Ya,typeof C=="object"&&C!==null&&(S=re(C)),v=a.getDerivedStateFromProps,(C=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(y!==j||z!==S)&&tm(e,u,r,S),zn=!1,z=e.memoizedState,u.state=z,Wi(e,r,u,s),$i();var k=e.memoizedState;y!==j||z!==k||zn||t!==null&&t.dependencies!==null&&Do(t.dependencies)?(typeof v=="function"&&(du(e,a,v,r),k=e.memoizedState),(L=zn||Ih(e,a,L,r,z,k,S)||t!==null&&t.dependencies!==null&&Do(t.dependencies))?(C||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,k,S),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,k,S)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),u.props=r,u.state=k,u.context=S,r=L):(typeof u.componentDidUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),r=!1)}return u=r,Xo(t,e),r=(e.flags&128)!==0,u||r?(u=e.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&r?(e.child=Ia(e,t.child,null,s),e.child=Ia(e,null,a,s)):te(t,e,a,s),e.memoizedState=u.state,t=e.child):t=mn(t,e,s),t}function pm(t,e,a,r){return Yi(),e.flags|=256,te(t,e,a,r),e.child}var gu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yu(t){return{baseLanes:t,cachePool:nh()}}function vu(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Ve),t}function gm(t,e,a){var r=e.pendingProps,s=!1,u=(e.flags&128)!==0,y;if((y=u)||(y=t!==null&&t.memoizedState===null?!1:(Kt.current&2)!==0),y&&(s=!0,e.flags&=-129),y=(e.flags&32)!==0,e.flags&=-33,t===null){if(vt){if(s?Nn(e):Ln(),vt){var v=Ut,S;if(S=v){t:{for(S=v,v=Qe;S.nodeType!==8;){if(!v){v=null;break t}if(S=qe(S.nextSibling),S===null){v=null;break t}}v=S}v!==null?(e.memoizedState={dehydrated:v,treeContext:ca!==null?{id:sn,overflow:un}:null,retryLane:536870912,hydrationErrors:null},S=xe(18,null,null,0),S.stateNode=v,S.return=e,e.child=S,se=e,Ut=null,S=!0):S=!1}S||ha(e)}if(v=e.memoizedState,v!==null&&(v=v.dehydrated,v!==null))return ec(v)?e.lanes=32:e.lanes=536870912,null;hn(e)}return v=r.children,r=r.fallback,s?(Ln(),s=e.mode,v=Zo({mode:"hidden",children:v},s),r=ua(r,s,a,null),v.return=e,r.return=e,v.sibling=r,e.child=v,s=e.child,s.memoizedState=yu(a),s.childLanes=vu(t,y,a),e.memoizedState=gu,r):(Nn(e),bu(e,v))}if(S=t.memoizedState,S!==null&&(v=S.dehydrated,v!==null)){if(u)e.flags&256?(Nn(e),e.flags&=-257,e=xu(t,e,a)):e.memoizedState!==null?(Ln(),e.child=t.child,e.flags|=128,e=null):(Ln(),s=r.fallback,v=e.mode,r=Zo({mode:"visible",children:r.children},v),s=ua(s,v,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,Ia(e,t.child,null,a),r=e.child,r.memoizedState=yu(a),r.childLanes=vu(t,y,a),e.memoizedState=gu,e=s);else if(Nn(e),ec(v)){if(y=v.nextSibling&&v.nextSibling.dataset,y)var C=y.dgst;y=C,r=Error(l(419)),r.stack="",r.digest=y,Gi({value:r,source:null,stack:null}),e=xu(t,e,a)}else if($t||Xi(t,e,a,!1),y=(a&t.childLanes)!==0,$t||y){if(y=Mt,y!==null&&(r=a&-a,r=(r&42)!==0?1:ns(r),r=(r&(y.suspendedLanes|a))!==0?0:r,r!==0&&r!==S.retryLane))throw S.retryLane=r,qa(t,r),Oe(y,t,r),lm;v.data==="$?"||Pu(),e=xu(t,e,a)}else v.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=S.treeContext,Ut=qe(v.nextSibling),se=e,vt=!0,da=null,Qe=!1,t!==null&&(_e[ze++]=sn,_e[ze++]=un,_e[ze++]=ca,sn=t.id,un=t.overflow,ca=e),e=bu(e,r.children),e.flags|=4096);return e}return s?(Ln(),s=r.fallback,v=e.mode,S=t.child,C=S.sibling,r=ln(S,{mode:"hidden",children:r.children}),r.subtreeFlags=S.subtreeFlags&65011712,C!==null?s=ln(C,s):(s=ua(s,v,a,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,v=t.child.memoizedState,v===null?v=yu(a):(S=v.cachePool,S!==null?(C=Zt._currentValue,S=S.parent!==C?{parent:C,pool:C}:S):S=nh(),v={baseLanes:v.baseLanes|a,cachePool:S}),s.memoizedState=v,s.childLanes=vu(t,y,a),e.memoizedState=gu,r):(Nn(e),a=t.child,t=a.sibling,a=ln(a,{mode:"visible",children:r.children}),a.return=e,a.sibling=null,t!==null&&(y=e.deletions,y===null?(e.deletions=[t],e.flags|=16):y.push(t)),e.child=a,e.memoizedState=null,a)}function bu(t,e){return e=Zo({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Zo(t,e){return t=xe(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function xu(t,e,a){return Ia(e,t.child,null,a),t=bu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ym(t,e,a){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ps(t.return,e,a)}function Su(t,e,a,r,s){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:s}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=a,u.tailMode=s)}function vm(t,e,a){var r=e.pendingProps,s=r.revealOrder,u=r.tail;if(te(t,e,r.children,a),r=Kt.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ym(t,a,e);else if(t.tag===19)ym(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(G(Kt,r),s){case"forwards":for(a=e.child,s=null;a!==null;)t=a.alternate,t!==null&&qo(t)===null&&(s=a),a=a.sibling;a=s,a===null?(s=e.child,e.child=null):(s=a.sibling,a.sibling=null),Su(e,!1,s,a,u);break;case"backwards":for(a=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&qo(t)===null){e.child=s;break}t=s.sibling,s.sibling=a,a=s,s=t}Su(e,!0,a,null,u);break;case"together":Su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mn(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),qn|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Xi(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(l(153));if(e.child!==null){for(t=e.child,a=ln(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=ln(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Tu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Do(t)))}function Xb(t,e,a){switch(e.tag){case 3:Rt(e,e.stateNode.containerInfo),_n(e,Zt,t.memoizedState.cache),Yi();break;case 27:case 5:$l(e);break;case 4:Rt(e,e.stateNode.containerInfo);break;case 10:_n(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(Nn(e),e.flags|=128,null):(a&e.child.childLanes)!==0?gm(t,e,a):(Nn(e),t=mn(t,e,a),t!==null?t.sibling:null);Nn(e);break;case 19:var s=(t.flags&128)!==0;if(r=(a&e.childLanes)!==0,r||(Xi(t,e,a,!1),r=(a&e.childLanes)!==0),s){if(r)return vm(t,e,a);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),G(Kt,Kt.current),r)break;return null;case 22:case 23:return e.lanes=0,fm(t,e,a);case 24:_n(e,Zt,t.memoizedState.cache)}return mn(t,e,a)}function bm(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)$t=!0;else{if(!Tu(t,a)&&(e.flags&128)===0)return $t=!1,Xb(t,e,a);$t=(t.flags&131072)!==0}else $t=!1,vt&&(e.flags&1048576)!==0&&Jd(e,Oo,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var r=e.elementType,s=r._init;if(r=s(r._payload),e.type=r,typeof r=="function")_s(r)?(t=va(r,t),e.tag=1,e=mm(null,e,r,t,a)):(e.tag=0,e=pu(null,e,r,t,a));else{if(r!=null){if(s=r.$$typeof,s===X){e.tag=11,e=sm(null,e,r,t,a);break t}else if(s===J){e.tag=14,e=um(null,e,r,t,a);break t}}throw e=Ze(r)||r,Error(l(306,e,""))}}return e;case 0:return pu(t,e,e.type,e.pendingProps,a);case 1:return r=e.type,s=va(r,e.pendingProps),mm(t,e,r,s,a);case 3:t:{if(Rt(e,e.stateNode.containerInfo),t===null)throw Error(l(387));r=e.pendingProps;var u=e.memoizedState;s=u.element,Xs(t,e),Wi(e,r,null,a);var y=e.memoizedState;if(r=y.cache,_n(e,Zt,r),r!==u.cache&&Bs(e,[Zt],a,!0),$i(),r=y.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:y.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=pm(t,e,r,a);break t}else if(r!==s){s=we(Error(l(424)),e),Gi(s),e=pm(t,e,r,a);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ut=qe(t.firstChild),se=e,vt=!0,da=null,Qe=!0,a=$h(e,null,r,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Yi(),r===s){e=mn(t,e,a);break t}te(t,e,r,a)}e=e.child}return e;case 26:return Xo(t,e),t===null?(a=Ep(e.type,null,e.pendingProps,null))?e.memoizedState=a:vt||(a=e.type,t=e.pendingProps,r=ol(ot.current).createElement(a),r[ie]=e,r[ce]=t,ne(r,a,t),Ft(r),e.stateNode=r):e.memoizedState=Ep(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return $l(e),t===null&&vt&&(r=e.stateNode=xp(e.type,e.pendingProps,ot.current),se=e,Qe=!0,s=Ut,Zn(e.type)?(nc=s,Ut=qe(r.firstChild)):Ut=s),te(t,e,e.pendingProps.children,a),Xo(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&vt&&((s=r=Ut)&&(r=b1(r,e.type,e.pendingProps,Qe),r!==null?(e.stateNode=r,se=e,Ut=qe(r.firstChild),Qe=!1,s=!0):s=!1),s||ha(e)),$l(e),s=e.type,u=e.pendingProps,y=t!==null?t.memoizedProps:null,r=u.children,Wu(s,u)?r=null:y!==null&&Wu(s,y)&&(e.flags|=32),e.memoizedState!==null&&(s=$s(t,e,Lb,null,null,a),xr._currentValue=s),Xo(t,e),te(t,e,r,a),e.child;case 6:return t===null&&vt&&((t=a=Ut)&&(a=x1(a,e.pendingProps,Qe),a!==null?(e.stateNode=a,se=e,Ut=null,t=!0):t=!1),t||ha(e)),null;case 13:return gm(t,e,a);case 4:return Rt(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ia(e,null,r,a):te(t,e,r,a),e.child;case 11:return sm(t,e,e.type,e.pendingProps,a);case 7:return te(t,e,e.pendingProps,a),e.child;case 8:return te(t,e,e.pendingProps.children,a),e.child;case 12:return te(t,e,e.pendingProps.children,a),e.child;case 10:return r=e.pendingProps,_n(e,e.type,r.value),te(t,e,r.children,a),e.child;case 9:return s=e.type._context,r=e.pendingProps.children,pa(e),s=re(s),r=r(s),e.flags|=1,te(t,e,r,a),e.child;case 14:return um(t,e,e.type,e.pendingProps,a);case 15:return cm(t,e,e.type,e.pendingProps,a);case 19:return vm(t,e,a);case 31:return r=e.pendingProps,a=e.mode,r={mode:r.mode,children:r.children},t===null?(a=Zo(r,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=ln(t.child,r),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return fm(t,e,a);case 24:return pa(e),r=re(Zt),t===null?(s=qs(),s===null&&(s=Mt,u=js(),s.pooledCache=u,u.refCount++,u!==null&&(s.pooledCacheLanes|=a),s=u),e.memoizedState={parent:r,cache:s},Gs(e),_n(e,Zt,s)):((t.lanes&a)!==0&&(Xs(t,e),Wi(e,null,null,a),$i()),s=t.memoizedState,u=e.memoizedState,s.parent!==r?(s={parent:r,cache:r},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),_n(e,Zt,r)):(r=u.cache,_n(e,Zt,r),r!==s.cache&&Bs(e,[Zt],a,!0))),te(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(l(156,e.tag))}function pn(t){t.flags|=4}function xm(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Rp(e)){if(e=ke.current,e!==null&&((pt&4194048)===pt?Je!==null:(pt&62914560)!==pt&&(pt&536870912)===0||e!==Je))throw Ji=Ys,ah;t.flags|=8192}}function Ko(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Wf():536870912,t.lanes|=e,ai|=e)}function rr(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(e)for(var s=t.child;s!==null;)a|=s.lanes|s.childLanes,r|=s.subtreeFlags&65011712,r|=s.flags&65011712,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)a|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=a,e}function Zb(t,e,a){var r=e.pendingProps;switch(Us(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return zt(e),null;case 3:return a=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),fn(Zt),Mn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(qi(e)?pn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Wd())),zt(e),null;case 26:return a=e.memoizedState,t===null?(pn(e),a!==null?(zt(e),xm(e,a)):(zt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(pn(e),zt(e),xm(e,a)):(zt(e),e.flags&=-16777217):(t.memoizedProps!==r&&pn(e),zt(e),e.flags&=-16777217),null;case 27:ao(e),a=ot.current;var s=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==r&&pn(e);else{if(!r){if(e.stateNode===null)throw Error(l(166));return zt(e),null}t=tt.current,qi(e)?Fd(e):(t=xp(s,r,a),e.stateNode=t,pn(e))}return zt(e),null;case 5:if(ao(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&pn(e);else{if(!r){if(e.stateNode===null)throw Error(l(166));return zt(e),null}if(t=tt.current,qi(e))Fd(e);else{switch(s=ol(ot.current),t){case 1:t=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?s.createElement("select",{is:r.is}):s.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?s.createElement(a,{is:r.is}):s.createElement(a)}}t[ie]=e,t[ce]=r;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=t;t:switch(ne(t,a,r),a){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&pn(e)}}return zt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&pn(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(l(166));if(t=ot.current,qi(e)){if(t=e.stateNode,a=e.memoizedProps,r=null,s=se,s!==null)switch(s.tag){case 27:case 5:r=s.memoizedProps}t[ie]=e,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||hp(t.nodeValue,a)),t||ha(e)}else t=ol(t).createTextNode(r),t[ie]=e,e.stateNode=t}return zt(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=qi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(l(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[ie]=e}else Yi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else s=Wd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),s=!0;if(!s)return e.flags&256?(hn(e),e):(hn(e),null)}if(hn(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=r!==null,t=t!==null&&t.memoizedState!==null,a){r=e.child,s=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(s=r.alternate.memoizedState.cachePool.pool);var u=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==s&&(r.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Ko(e,e.updateQueue),zt(e),null;case 4:return Mn(),t===null&&Ku(e.stateNode.containerInfo),zt(e),null;case 10:return fn(e.type),zt(e),null;case 19:if(Q(Kt),s=e.memoizedState,s===null)return zt(e),null;if(r=(e.flags&128)!==0,u=s.rendering,u===null)if(r)rr(s,!1);else{if(Nt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=qo(t),u!==null){for(e.flags|=128,rr(s,!1),t=u.updateQueue,e.updateQueue=t,Ko(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Qd(a,t),a=a.sibling;return G(Kt,Kt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ke()>Fo&&(e.flags|=128,r=!0,rr(s,!1),e.lanes=4194304)}else{if(!r)if(t=qo(u),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,Ko(e,t),rr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!u.alternate&&!vt)return zt(e),null}else 2*Ke()-s.renderingStartTime>Fo&&a!==536870912&&(e.flags|=128,r=!0,rr(s,!1),e.lanes=4194304);s.isBackwards?(u.sibling=e.child,e.child=u):(t=s.last,t!==null?t.sibling=u:e.child=u,s.last=u)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ke(),e.sibling=null,t=Kt.current,G(Kt,r?t&1|2:t&1),e):(zt(e),null);case 22:case 23:return hn(e),Js(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(a&536870912)!==0&&(e.flags&128)===0&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),a=e.updateQueue,a!==null&&Ko(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==a&&(e.flags|=2048),t!==null&&Q(ga),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),fn(Zt),zt(e),null;case 25:return null;case 30:return null}throw Error(l(156,e.tag))}function Kb(t,e){switch(Us(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fn(Zt),Mn(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ao(e),null;case 13:if(hn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(l(340));Yi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(Kt),null;case 4:return Mn(),null;case 10:return fn(e.type),null;case 22:case 23:return hn(e),Js(),t!==null&&Q(ga),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return fn(Zt),null;case 25:return null;default:return null}}function Sm(t,e){switch(Us(e),e.tag){case 3:fn(Zt),Mn();break;case 26:case 27:case 5:ao(e);break;case 4:Mn();break;case 13:hn(e);break;case 19:Q(Kt);break;case 10:fn(e.type);break;case 22:case 23:hn(e),Js(),t!==null&&Q(ga);break;case 24:fn(Zt)}}function or(t,e){try{var a=e.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var s=r.next;a=s;do{if((a.tag&t)===t){r=void 0;var u=a.create,y=a.inst;r=u(),y.destroy=r}a=a.next}while(a!==s)}}catch(v){Dt(e,e.return,v)}}function Pn(t,e,a){try{var r=e.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var u=s.next;r=u;do{if((r.tag&t)===t){var y=r.inst,v=y.destroy;if(v!==void 0){y.destroy=void 0,s=e;var S=a,C=v;try{C()}catch(L){Dt(s,S,L)}}}r=r.next}while(r!==u)}}catch(L){Dt(e,e.return,L)}}function Tm(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{uh(e,a)}catch(r){Dt(t,t.return,r)}}}function Em(t,e,a){a.props=va(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Dt(t,e,r)}}function lr(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(s){Dt(t,e,s)}}function Fe(t,e){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(s){Dt(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){Dt(t,e,s)}else a.current=null}function Am(t){var e=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(s){Dt(t,t.return,s)}}function Eu(t,e,a){try{var r=t.stateNode;m1(r,t.type,a,e),r[ce]=e}catch(s){Dt(t,t.return,s)}}function Om(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Zn(t.type)||t.tag===4}function Au(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Om(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Zn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ou(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=rl));else if(r!==4&&(r===27&&Zn(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Ou(t,e,a),t=t.sibling;t!==null;)Ou(t,e,a),t=t.sibling}function Qo(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(r!==4&&(r===27&&Zn(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Qo(t,e,a),t=t.sibling;t!==null;)Qo(t,e,a),t=t.sibling}function Dm(t){var e=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ne(e,r,a),e[ie]=t,e[ce]=a}catch(u){Dt(t,t.return,u)}}var gn=!1,Bt=!1,Du=!1,Mm=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function Qb(t,e){if(t=t.containerInfo,Fu=dl,t=Pd(t),As(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var s=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break t}var y=0,v=-1,S=-1,C=0,L=0,j=t,z=null;e:for(;;){for(var k;j!==a||s!==0&&j.nodeType!==3||(v=y+s),j!==u||r!==0&&j.nodeType!==3||(S=y+r),j.nodeType===3&&(y+=j.nodeValue.length),(k=j.firstChild)!==null;)z=j,j=k;for(;;){if(j===t)break e;if(z===a&&++C===s&&(v=y),z===u&&++L===r&&(S=y),(k=j.nextSibling)!==null)break;j=z,z=j.parentNode}j=k}a=v===-1||S===-1?null:{start:v,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for($u={focusedElem:t,selectionRange:a},dl=!1,Wt=e;Wt!==null;)if(e=Wt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Wt=t;else for(;Wt!==null;){switch(e=Wt,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,a=e,s=u.memoizedProps,u=u.memoizedState,r=a.stateNode;try{var it=va(a.type,s,a.elementType===a.type);t=r.getSnapshotBeforeUpdate(it,u),r.__reactInternalSnapshotBeforeUpdate=t}catch(et){Dt(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)tc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":tc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(l(163))}if(t=e.sibling,t!==null){t.return=e.return,Wt=t;break}Wt=e.return}}function Rm(t,e,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Bn(t,a),r&4&&or(5,a);break;case 1:if(Bn(t,a),r&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(y){Dt(a,a.return,y)}else{var s=va(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Dt(a,a.return,y)}}r&64&&Tm(a),r&512&&lr(a,a.return);break;case 3:if(Bn(t,a),r&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{uh(t,e)}catch(y){Dt(a,a.return,y)}}break;case 27:e===null&&r&4&&Dm(a);case 26:case 5:Bn(t,a),e===null&&r&4&&Am(a),r&512&&lr(a,a.return);break;case 12:Bn(t,a);break;case 13:Bn(t,a),r&4&&_m(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=a1.bind(null,a),S1(t,a))));break;case 22:if(r=a.memoizedState!==null||gn,!r){e=e!==null&&e.memoizedState!==null||Bt,s=gn;var u=Bt;gn=r,(Bt=e)&&!u?jn(t,a,(a.subtreeFlags&8772)!==0):Bn(t,a),gn=s,Bt=u}break;case 30:break;default:Bn(t,a)}}function wm(t){var e=t.alternate;e!==null&&(t.alternate=null,wm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&rs(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var wt=null,he=!1;function yn(t,e,a){for(a=a.child;a!==null;)Cm(t,e,a),a=a.sibling}function Cm(t,e,a){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(Ri,a)}catch{}switch(a.tag){case 26:Bt||Fe(a,e),yn(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Bt||Fe(a,e);var r=wt,s=he;Zn(a.type)&&(wt=a.stateNode,he=!1),yn(t,e,a),gr(a.stateNode),wt=r,he=s;break;case 5:Bt||Fe(a,e);case 6:if(r=wt,s=he,wt=null,yn(t,e,a),wt=r,he=s,wt!==null)if(he)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(a.stateNode)}catch(u){Dt(a,e,u)}else try{wt.removeChild(a.stateNode)}catch(u){Dt(a,e,u)}break;case 18:wt!==null&&(he?(t=wt,vp(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ar(t)):vp(wt,a.stateNode));break;case 4:r=wt,s=he,wt=a.stateNode.containerInfo,he=!0,yn(t,e,a),wt=r,he=s;break;case 0:case 11:case 14:case 15:Bt||Pn(2,a,e),Bt||Pn(4,a,e),yn(t,e,a);break;case 1:Bt||(Fe(a,e),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Em(a,e,r)),yn(t,e,a);break;case 21:yn(t,e,a);break;case 22:Bt=(r=Bt)||a.memoizedState!==null,yn(t,e,a),Bt=r;break;default:yn(t,e,a)}}function _m(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ar(t)}catch(a){Dt(e,e.return,a)}}function Jb(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Mm),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Mm),e;default:throw Error(l(435,t.tag))}}function Mu(t,e){var a=Jb(t);e.forEach(function(r){var s=i1.bind(null,t,r);a.has(r)||(a.add(r),r.then(s,s))})}function Se(t,e){var a=e.deletions;if(a!==null)for(var r=0;r<a.length;r++){var s=a[r],u=t,y=e,v=y;t:for(;v!==null;){switch(v.tag){case 27:if(Zn(v.type)){wt=v.stateNode,he=!1;break t}break;case 5:wt=v.stateNode,he=!1;break t;case 3:case 4:wt=v.stateNode.containerInfo,he=!0;break t}v=v.return}if(wt===null)throw Error(l(160));Cm(u,y,s),wt=null,he=!1,u=s.alternate,u!==null&&(u.return=null),s.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)zm(e,t),e=e.sibling}var He=null;function zm(t,e){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Se(e,t),Te(t),r&4&&(Pn(3,t,t.return),or(3,t),Pn(5,t,t.return));break;case 1:Se(e,t),Te(t),r&512&&(Bt||a===null||Fe(a,a.return)),r&64&&gn&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var s=He;if(Se(e,t),Te(t),r&512&&(Bt||a===null||Fe(a,a.return)),r&4){var u=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,s=s.ownerDocument||s;e:switch(r){case"title":u=s.getElementsByTagName("title")[0],(!u||u[_i]||u[ie]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=s.createElement(r),s.head.insertBefore(u,s.querySelector("head > title"))),ne(u,r,a),u[ie]=t,Ft(u),r=u;break t;case"link":var y=Dp("link","href",s).get(r+(a.href||""));if(y){for(var v=0;v<y.length;v++)if(u=y[v],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(v,1);break e}}u=s.createElement(r),ne(u,r,a),s.head.appendChild(u);break;case"meta":if(y=Dp("meta","content",s).get(r+(a.content||""))){for(v=0;v<y.length;v++)if(u=y[v],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(v,1);break e}}u=s.createElement(r),ne(u,r,a),s.head.appendChild(u);break;default:throw Error(l(468,r))}u[ie]=t,Ft(u),r=u}t.stateNode=r}else Mp(s,t.type,t.stateNode);else t.stateNode=Op(s,r,t.memoizedProps);else u!==r?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,r===null?Mp(s,t.type,t.stateNode):Op(s,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Eu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Se(e,t),Te(t),r&512&&(Bt||a===null||Fe(a,a.return)),a!==null&&r&4&&Eu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Se(e,t),Te(t),r&512&&(Bt||a===null||Fe(a,a.return)),t.flags&32){s=t.stateNode;try{Ua(s,"")}catch(k){Dt(t,t.return,k)}}r&4&&t.stateNode!=null&&(s=t.memoizedProps,Eu(t,s,a!==null?a.memoizedProps:s)),r&1024&&(Du=!0);break;case 6:if(Se(e,t),Te(t),r&4){if(t.stateNode===null)throw Error(l(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(k){Dt(t,t.return,k)}}break;case 3:if(ul=null,s=He,He=ll(e.containerInfo),Se(e,t),He=s,Te(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Ar(e.containerInfo)}catch(k){Dt(t,t.return,k)}Du&&(Du=!1,km(t));break;case 4:r=He,He=ll(t.stateNode.containerInfo),Se(e,t),Te(t),He=r;break;case 12:Se(e,t),Te(t);break;case 13:Se(e,t),Te(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ku=Ke()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Mu(t,r)));break;case 22:s=t.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,C=gn,L=Bt;if(gn=C||s,Bt=L||S,Se(e,t),Bt=L,gn=C,Te(t),r&8192)t:for(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,s&&(a===null||S||gn||Bt||ba(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){S=a=e;try{if(u=S.stateNode,s)y=u.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{v=S.stateNode;var j=S.memoizedProps.style,z=j!=null&&j.hasOwnProperty("display")?j.display:null;v.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(k){Dt(S,S.return,k)}}}else if(e.tag===6){if(a===null){S=e;try{S.stateNode.nodeValue=s?"":S.memoizedProps}catch(k){Dt(S,S.return,k)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Mu(t,a))));break;case 19:Se(e,t),Te(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Mu(t,r)));break;case 30:break;case 21:break;default:Se(e,t),Te(t)}}function Te(t){var e=t.flags;if(e&2){try{for(var a,r=t.return;r!==null;){if(Om(r)){a=r;break}r=r.return}if(a==null)throw Error(l(160));switch(a.tag){case 27:var s=a.stateNode,u=Au(t);Qo(t,u,s);break;case 5:var y=a.stateNode;a.flags&32&&(Ua(y,""),a.flags&=-33);var v=Au(t);Qo(t,v,y);break;case 3:case 4:var S=a.stateNode.containerInfo,C=Au(t);Ou(t,C,S);break;default:throw Error(l(161))}}catch(L){Dt(t,t.return,L)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function km(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;km(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Bn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Rm(t,e.alternate,e),e=e.sibling}function ba(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Pn(4,e,e.return),ba(e);break;case 1:Fe(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Em(e,e.return,a),ba(e);break;case 27:gr(e.stateNode);case 26:case 5:Fe(e,e.return),ba(e);break;case 22:e.memoizedState===null&&ba(e);break;case 30:ba(e);break;default:ba(e)}t=t.sibling}}function jn(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,s=t,u=e,y=u.flags;switch(u.tag){case 0:case 11:case 15:jn(s,u,a),or(4,u);break;case 1:if(jn(s,u,a),r=u,s=r.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(C){Dt(r,r.return,C)}if(r=u,s=r.updateQueue,s!==null){var v=r.stateNode;try{var S=s.shared.hiddenCallbacks;if(S!==null)for(s.shared.hiddenCallbacks=null,s=0;s<S.length;s++)sh(S[s],v)}catch(C){Dt(r,r.return,C)}}a&&y&64&&Tm(u),lr(u,u.return);break;case 27:Dm(u);case 26:case 5:jn(s,u,a),a&&r===null&&y&4&&Am(u),lr(u,u.return);break;case 12:jn(s,u,a);break;case 13:jn(s,u,a),a&&y&4&&_m(s,u);break;case 22:u.memoizedState===null&&jn(s,u,a),lr(u,u.return);break;case 30:break;default:jn(s,u,a)}e=e.sibling}}function Ru(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Zi(a))}function wu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Zi(t))}function $e(t,e,a,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vm(t,e,a,r),e=e.sibling}function Vm(t,e,a,r){var s=e.flags;switch(e.tag){case 0:case 11:case 15:$e(t,e,a,r),s&2048&&or(9,e);break;case 1:$e(t,e,a,r);break;case 3:$e(t,e,a,r),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Zi(t)));break;case 12:if(s&2048){$e(t,e,a,r),t=e.stateNode;try{var u=e.memoizedProps,y=u.id,v=u.onPostCommit;typeof v=="function"&&v(y,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Dt(e,e.return,S)}}else $e(t,e,a,r);break;case 13:$e(t,e,a,r);break;case 23:break;case 22:u=e.stateNode,y=e.alternate,e.memoizedState!==null?u._visibility&2?$e(t,e,a,r):sr(t,e):u._visibility&2?$e(t,e,a,r):(u._visibility|=2,ti(t,e,a,r,(e.subtreeFlags&10256)!==0)),s&2048&&Ru(y,e);break;case 24:$e(t,e,a,r),s&2048&&wu(e.alternate,e);break;default:$e(t,e,a,r)}}function ti(t,e,a,r,s){for(s=s&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,y=e,v=a,S=r,C=y.flags;switch(y.tag){case 0:case 11:case 15:ti(u,y,v,S,s),or(8,y);break;case 23:break;case 22:var L=y.stateNode;y.memoizedState!==null?L._visibility&2?ti(u,y,v,S,s):sr(u,y):(L._visibility|=2,ti(u,y,v,S,s)),s&&C&2048&&Ru(y.alternate,y);break;case 24:ti(u,y,v,S,s),s&&C&2048&&wu(y.alternate,y);break;default:ti(u,y,v,S,s)}e=e.sibling}}function sr(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,r=e,s=r.flags;switch(r.tag){case 22:sr(a,r),s&2048&&Ru(r.alternate,r);break;case 24:sr(a,r),s&2048&&wu(r.alternate,r);break;default:sr(a,r)}e=e.sibling}}var ur=8192;function ei(t){if(t.subtreeFlags&ur)for(t=t.child;t!==null;)Um(t),t=t.sibling}function Um(t){switch(t.tag){case 26:ei(t),t.flags&ur&&t.memoizedState!==null&&V1(He,t.memoizedState,t.memoizedProps);break;case 5:ei(t);break;case 3:case 4:var e=He;He=ll(t.stateNode.containerInfo),ei(t),He=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=ur,ur=16777216,ei(t),ur=e):ei(t));break;default:ei(t)}}function Nm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function cr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];Wt=r,Pm(r,t)}Nm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lm(t),t=t.sibling}function Lm(t){switch(t.tag){case 0:case 11:case 15:cr(t),t.flags&2048&&Pn(9,t,t.return);break;case 3:cr(t);break;case 12:cr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Jo(t)):cr(t);break;default:cr(t)}}function Jo(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];Wt=r,Pm(r,t)}Nm(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Pn(8,e,e.return),Jo(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Jo(e));break;default:Jo(e)}t=t.sibling}}function Pm(t,e){for(;Wt!==null;){var a=Wt;switch(a.tag){case 0:case 11:case 15:Pn(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Zi(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Wt=r;else t:for(a=t;Wt!==null;){r=Wt;var s=r.sibling,u=r.return;if(wm(r),r===a){Wt=null;break t}if(s!==null){s.return=u,Wt=s;break t}Wt=u}}}var Fb={getCacheForType:function(t){var e=re(Zt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},$b=typeof WeakMap=="function"?WeakMap:Map,bt=0,Mt=null,ct=null,pt=0,xt=0,Ee=null,Hn=!1,ni=!1,Cu=!1,vn=0,Nt=0,qn=0,xa=0,_u=0,Ve=0,ai=0,fr=null,me=null,zu=!1,ku=0,Fo=1/0,$o=null,Yn=null,ee=0,Gn=null,ii=null,ri=0,Vu=0,Uu=null,Bm=null,dr=0,Nu=null;function Ae(){if((bt&2)!==0&&pt!==0)return pt&-pt;if(P.T!==null){var t=Za;return t!==0?t:Yu()}return ed()}function jm(){Ve===0&&(Ve=(pt&536870912)===0||vt?$f():536870912);var t=ke.current;return t!==null&&(t.flags|=32),Ve}function Oe(t,e,a){(t===Mt&&(xt===2||xt===9)||t.cancelPendingCommit!==null)&&(oi(t,0),Xn(t,pt,Ve,!1)),Ci(t,a),((bt&2)===0||t!==Mt)&&(t===Mt&&((bt&2)===0&&(xa|=a),Nt===4&&Xn(t,pt,Ve,!1)),We(t))}function Hm(t,e,a){if((bt&6)!==0)throw Error(l(327));var r=!a&&(e&124)===0&&(e&t.expiredLanes)===0||wi(t,e),s=r?t1(t,e):Bu(t,e,!0),u=r;do{if(s===0){ni&&!r&&Xn(t,e,0,!1);break}else{if(a=t.current.alternate,u&&!Wb(a)){s=Bu(t,e,!1),u=!1;continue}if(s===2){if(u=e,t.errorRecoveryDisabledLanes&u)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){e=y;t:{var v=t;s=fr;var S=v.current.memoizedState.isDehydrated;if(S&&(oi(v,y).flags|=256),y=Bu(v,y,!1),y!==2){if(Cu&&!S){v.errorRecoveryDisabledLanes|=u,xa|=u,s=4;break t}u=me,me=s,u!==null&&(me===null?me=u:me.push.apply(me,u))}s=y}if(u=!1,s!==2)continue}}if(s===1){oi(t,0),Xn(t,e,0,!0);break}t:{switch(r=t,u=s,u){case 0:case 1:throw Error(l(345));case 4:if((e&4194048)!==e)break;case 6:Xn(r,e,Ve,!Hn);break t;case 2:me=null;break;case 3:case 5:break;default:throw Error(l(329))}if((e&62914560)===e&&(s=ku+300-Ke(),10<s)){if(Xn(r,e,Ve,!Hn),lo(r,0,!0)!==0)break t;r.timeoutHandle=gp(qm.bind(null,r,a,me,$o,zu,e,Ve,xa,ai,Hn,u,2,-0,0),s);break t}qm(r,a,me,$o,zu,e,Ve,xa,ai,Hn,u,0,-0,0)}}break}while(!0);We(t)}function qm(t,e,a,r,s,u,y,v,S,C,L,j,z,k){if(t.timeoutHandle=-1,j=e.subtreeFlags,(j&8192||(j&16785408)===16785408)&&(br={stylesheets:null,count:0,unsuspend:k1},Um(e),j=U1(),j!==null)){t.cancelPendingCommit=j(Jm.bind(null,t,e,u,a,r,s,y,v,S,L,1,z,k)),Xn(t,u,y,!C);return}Jm(t,e,u,a,r,s,y,v,S)}function Wb(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var s=a[r],u=s.getSnapshot;s=s.value;try{if(!be(u(),s))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xn(t,e,a,r){e&=~_u,e&=~xa,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var s=e;0<s;){var u=31-ve(s),y=1<<u;r[u]=-1,s&=~y}a!==0&&If(t,a,e)}function Wo(){return(bt&6)===0?(hr(0),!1):!0}function Lu(){if(ct!==null){if(xt===0)var t=ct.return;else t=ct,cn=ma=null,tu(t),Wa=null,ar=0,t=ct;for(;t!==null;)Sm(t.alternate,t),t=t.return;ct=null}}function oi(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,g1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Lu(),Mt=t,ct=a=ln(t.current,null),pt=e,xt=0,Ee=null,Hn=!1,ni=wi(t,e),Cu=!1,ai=Ve=_u=xa=qn=Nt=0,me=fr=null,zu=!1,(e&8)!==0&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var s=31-ve(r),u=1<<s;e|=t[s],r&=~u}return vn=e,xo(),a}function Ym(t,e){st=null,P.H=Bo,e===Qi||e===wo?(e=oh(),xt=3):e===ah?(e=oh(),xt=4):xt=e===lm?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ee=e,ct===null&&(Nt=1,Go(t,we(e,t.current)))}function Gm(){var t=P.H;return P.H=Bo,t===null?Bo:t}function Xm(){var t=P.A;return P.A=Fb,t}function Pu(){Nt=4,Hn||(pt&4194048)!==pt&&ke.current!==null||(ni=!0),(qn&134217727)===0&&(xa&134217727)===0||Mt===null||Xn(Mt,pt,Ve,!1)}function Bu(t,e,a){var r=bt;bt|=2;var s=Gm(),u=Xm();(Mt!==t||pt!==e)&&($o=null,oi(t,e)),e=!1;var y=Nt;t:do try{if(xt!==0&&ct!==null){var v=ct,S=Ee;switch(xt){case 8:Lu(),y=6;break t;case 3:case 2:case 9:case 6:ke.current===null&&(e=!0);var C=xt;if(xt=0,Ee=null,li(t,v,S,C),a&&ni){y=0;break t}break;default:C=xt,xt=0,Ee=null,li(t,v,S,C)}}Ib(),y=Nt;break}catch(L){Ym(t,L)}while(!0);return e&&t.shellSuspendCounter++,cn=ma=null,bt=r,P.H=s,P.A=u,ct===null&&(Mt=null,pt=0,xo()),y}function Ib(){for(;ct!==null;)Zm(ct)}function t1(t,e){var a=bt;bt|=2;var r=Gm(),s=Xm();Mt!==t||pt!==e?($o=null,Fo=Ke()+500,oi(t,e)):ni=wi(t,e);t:do try{if(xt!==0&&ct!==null){e=ct;var u=Ee;e:switch(xt){case 1:xt=0,Ee=null,li(t,e,u,1);break;case 2:case 9:if(ih(u)){xt=0,Ee=null,Km(e);break}e=function(){xt!==2&&xt!==9||Mt!==t||(xt=7),We(t)},u.then(e,e);break t;case 3:xt=7;break t;case 4:xt=5;break t;case 7:ih(u)?(xt=0,Ee=null,Km(e)):(xt=0,Ee=null,li(t,e,u,7));break;case 5:var y=null;switch(ct.tag){case 26:y=ct.memoizedState;case 5:case 27:var v=ct;if(!y||Rp(y)){xt=0,Ee=null;var S=v.sibling;if(S!==null)ct=S;else{var C=v.return;C!==null?(ct=C,Io(C)):ct=null}break e}}xt=0,Ee=null,li(t,e,u,5);break;case 6:xt=0,Ee=null,li(t,e,u,6);break;case 8:Lu(),Nt=6;break t;default:throw Error(l(462))}}e1();break}catch(L){Ym(t,L)}while(!0);return cn=ma=null,P.H=r,P.A=s,bt=a,ct!==null?0:(Mt=null,pt=0,xo(),Nt)}function e1(){for(;ct!==null&&!Ev();)Zm(ct)}function Zm(t){var e=bm(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?Io(t):ct=e}function Km(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=hm(a,e,e.pendingProps,e.type,void 0,pt);break;case 11:e=hm(a,e,e.pendingProps,e.type.render,e.ref,pt);break;case 5:tu(e);default:Sm(a,e),e=ct=Qd(e,vn),e=bm(a,e,vn)}t.memoizedProps=t.pendingProps,e===null?Io(t):ct=e}function li(t,e,a,r){cn=ma=null,tu(e),Wa=null,ar=0;var s=e.return;try{if(Gb(t,s,e,a,pt)){Nt=1,Go(t,we(a,t.current)),ct=null;return}}catch(u){if(s!==null)throw ct=s,u;Nt=1,Go(t,we(a,t.current)),ct=null;return}e.flags&32768?(vt||r===1?t=!0:ni||(pt&536870912)!==0?t=!1:(Hn=t=!0,(r===2||r===9||r===3||r===6)&&(r=ke.current,r!==null&&r.tag===13&&(r.flags|=16384))),Qm(e,t)):Io(e)}function Io(t){var e=t;do{if((e.flags&32768)!==0){Qm(e,Hn);return}t=e.return;var a=Zb(e.alternate,e,vn);if(a!==null){ct=a;return}if(e=e.sibling,e!==null){ct=e;return}ct=e=t}while(e!==null);Nt===0&&(Nt=5)}function Qm(t,e){do{var a=Kb(t.alternate,t);if(a!==null){a.flags&=32767,ct=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){ct=t;return}ct=t=a}while(t!==null);Nt=6,ct=null}function Jm(t,e,a,r,s,u,y,v,S){t.cancelPendingCommit=null;do tl();while(ee!==0);if((bt&6)!==0)throw Error(l(327));if(e!==null){if(e===t.current)throw Error(l(177));if(u=e.lanes|e.childLanes,u|=ws,kv(t,a,u,y,v,S),t===Mt&&(ct=Mt=null,pt=0),ii=e,Gn=t,ri=a,Vu=u,Uu=s,Bm=r,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,r1(io,function(){return tp(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,s=Y.p,Y.p=2,y=bt,bt|=4;try{Qb(t,e,a)}finally{bt=y,Y.p=s,P.T=r}}ee=1,Fm(),$m(),Wm()}}function Fm(){if(ee===1){ee=0;var t=Gn,e=ii,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=Y.p;Y.p=2;var s=bt;bt|=4;try{zm(e,t);var u=$u,y=Pd(t.containerInfo),v=u.focusedElem,S=u.selectionRange;if(y!==v&&v&&v.ownerDocument&&Ld(v.ownerDocument.documentElement,v)){if(S!==null&&As(v)){var C=S.start,L=S.end;if(L===void 0&&(L=C),"selectionStart"in v)v.selectionStart=C,v.selectionEnd=Math.min(L,v.value.length);else{var j=v.ownerDocument||document,z=j&&j.defaultView||window;if(z.getSelection){var k=z.getSelection(),it=v.textContent.length,et=Math.min(S.start,it),At=S.end===void 0?et:Math.min(S.end,it);!k.extend&&et>At&&(y=At,At=et,et=y);var R=Nd(v,et),D=Nd(v,At);if(R&&D&&(k.rangeCount!==1||k.anchorNode!==R.node||k.anchorOffset!==R.offset||k.focusNode!==D.node||k.focusOffset!==D.offset)){var w=j.createRange();w.setStart(R.node,R.offset),k.removeAllRanges(),et>At?(k.addRange(w),k.extend(D.node,D.offset)):(w.setEnd(D.node,D.offset),k.addRange(w))}}}}for(j=[],k=v;k=k.parentNode;)k.nodeType===1&&j.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<j.length;v++){var B=j[v];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}dl=!!Fu,$u=Fu=null}finally{bt=s,Y.p=r,P.T=a}}t.current=e,ee=2}}function $m(){if(ee===2){ee=0;var t=Gn,e=ii,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=Y.p;Y.p=2;var s=bt;bt|=4;try{Rm(t,e.alternate,e)}finally{bt=s,Y.p=r,P.T=a}}ee=3}}function Wm(){if(ee===4||ee===3){ee=0,Av();var t=Gn,e=ii,a=ri,r=Bm;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ee=5:(ee=0,ii=Gn=null,Im(t,t.pendingLanes));var s=t.pendingLanes;if(s===0&&(Yn=null),as(a),e=e.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(Ri,e,void 0,(e.current.flags&128)===128)}catch{}if(r!==null){e=P.T,s=Y.p,Y.p=2,P.T=null;try{for(var u=t.onRecoverableError,y=0;y<r.length;y++){var v=r[y];u(v.value,{componentStack:v.stack})}}finally{P.T=e,Y.p=s}}(ri&3)!==0&&tl(),We(t),s=t.pendingLanes,(a&4194090)!==0&&(s&42)!==0?t===Nu?dr++:(dr=0,Nu=t):dr=0,hr(0)}}function Im(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Zi(e)))}function tl(t){return Fm(),$m(),Wm(),tp()}function tp(){if(ee!==5)return!1;var t=Gn,e=Vu;Vu=0;var a=as(ri),r=P.T,s=Y.p;try{Y.p=32>a?32:a,P.T=null,a=Uu,Uu=null;var u=Gn,y=ri;if(ee=0,ii=Gn=null,ri=0,(bt&6)!==0)throw Error(l(331));var v=bt;if(bt|=4,Lm(u.current),Vm(u,u.current,y,a),bt=v,hr(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(Ri,u)}catch{}return!0}finally{Y.p=s,P.T=r,Im(t,e)}}function ep(t,e,a){e=we(a,e),e=mu(t.stateNode,e,2),t=Vn(t,e,2),t!==null&&(Ci(t,2),We(t))}function Dt(t,e,a){if(t.tag===3)ep(t,t,a);else for(;e!==null;){if(e.tag===3){ep(e,t,a);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){t=we(a,t),a=rm(2),r=Vn(e,a,2),r!==null&&(om(a,r,e,t),Ci(r,2),We(r));break}}e=e.return}}function ju(t,e,a){var r=t.pingCache;if(r===null){r=t.pingCache=new $b;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(a)||(Cu=!0,s.add(a),t=n1.bind(null,t,e,a),e.then(t,t))}function n1(t,e,a){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Mt===t&&(pt&a)===a&&(Nt===4||Nt===3&&(pt&62914560)===pt&&300>Ke()-ku?(bt&2)===0&&oi(t,0):_u|=a,ai===pt&&(ai=0)),We(t)}function np(t,e){e===0&&(e=Wf()),t=qa(t,e),t!==null&&(Ci(t,e),We(t))}function a1(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),np(t,a)}function i1(t,e){var a=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(a=s.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(l(314))}r!==null&&r.delete(e),np(t,a)}function r1(t,e){return Il(t,e)}var el=null,si=null,Hu=!1,nl=!1,qu=!1,Sa=0;function We(t){t!==si&&t.next===null&&(si===null?el=si=t:si=si.next=t),nl=!0,Hu||(Hu=!0,l1())}function hr(t,e){if(!qu&&nl){qu=!0;do for(var a=!1,r=el;r!==null;){if(t!==0){var s=r.pendingLanes;if(s===0)var u=0;else{var y=r.suspendedLanes,v=r.pingedLanes;u=(1<<31-ve(42|t)+1)-1,u&=s&~(y&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,op(r,u))}else u=pt,u=lo(r,r===Mt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||wi(r,u)||(a=!0,op(r,u));r=r.next}while(a);qu=!1}}function o1(){ap()}function ap(){nl=Hu=!1;var t=0;Sa!==0&&(p1()&&(t=Sa),Sa=0);for(var e=Ke(),a=null,r=el;r!==null;){var s=r.next,u=ip(r,e);u===0?(r.next=null,a===null?el=s:a.next=s,s===null&&(si=a)):(a=r,(t!==0||(u&3)!==0)&&(nl=!0)),r=s}hr(t)}function ip(t,e){for(var a=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var y=31-ve(u),v=1<<y,S=s[y];S===-1?((v&a)===0||(v&r)!==0)&&(s[y]=zv(v,e)):S<=e&&(t.expiredLanes|=v),u&=~v}if(e=Mt,a=pt,a=lo(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===e&&(xt===2||xt===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&ts(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||wi(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(r!==null&&ts(r),as(a)){case 2:case 8:a=Jf;break;case 32:a=io;break;case 268435456:a=Ff;break;default:a=io}return r=rp.bind(null,t),a=Il(a,r),t.callbackPriority=e,t.callbackNode=a,e}return r!==null&&r!==null&&ts(r),t.callbackPriority=2,t.callbackNode=null,2}function rp(t,e){if(ee!==0&&ee!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(tl()&&t.callbackNode!==a)return null;var r=pt;return r=lo(t,t===Mt?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Hm(t,r,e),ip(t,Ke()),t.callbackNode!=null&&t.callbackNode===a?rp.bind(null,t):null)}function op(t,e){if(tl())return null;Hm(t,e,!0)}function l1(){y1(function(){(bt&6)!==0?Il(Qf,o1):ap()})}function Yu(){return Sa===0&&(Sa=$f()),Sa}function lp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ho(""+t)}function sp(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function s1(t,e,a,r,s){if(e==="submit"&&a&&a.stateNode===s){var u=lp((s[ce]||null).action),y=r.submitter;y&&(e=(e=y[ce]||null)?lp(e.formAction):y.getAttribute("formAction"),e!==null&&(u=e,y=null));var v=new yo("action","action",null,r,s);t.push({event:v,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Sa!==0){var S=y?sp(s,y):new FormData(s);uu(a,{pending:!0,data:S,method:s.method,action:u},null,S)}}else typeof u=="function"&&(v.preventDefault(),S=y?sp(s,y):new FormData(s),uu(a,{pending:!0,data:S,method:s.method,action:u},u,S))},currentTarget:s}]})}}for(var Gu=0;Gu<Rs.length;Gu++){var Xu=Rs[Gu],u1=Xu.toLowerCase(),c1=Xu[0].toUpperCase()+Xu.slice(1);je(u1,"on"+c1)}je(Hd,"onAnimationEnd"),je(qd,"onAnimationIteration"),je(Yd,"onAnimationStart"),je("dblclick","onDoubleClick"),je("focusin","onFocus"),je("focusout","onBlur"),je(Mb,"onTransitionRun"),je(Rb,"onTransitionStart"),je(wb,"onTransitionCancel"),je(Gd,"onTransitionEnd"),za("onMouseEnter",["mouseout","mouseover"]),za("onMouseLeave",["mouseout","mouseover"]),za("onPointerEnter",["pointerout","pointerover"]),za("onPointerLeave",["pointerout","pointerover"]),ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ra("onBeforeInput",["compositionend","keypress","textInput","paste"]),ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mr));function up(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],s=r.event;r=r.listeners;t:{var u=void 0;if(e)for(var y=r.length-1;0<=y;y--){var v=r[y],S=v.instance,C=v.currentTarget;if(v=v.listener,S!==u&&s.isPropagationStopped())break t;u=v,s.currentTarget=C;try{u(s)}catch(L){Yo(L)}s.currentTarget=null,u=S}else for(y=0;y<r.length;y++){if(v=r[y],S=v.instance,C=v.currentTarget,v=v.listener,S!==u&&s.isPropagationStopped())break t;u=v,s.currentTarget=C;try{u(s)}catch(L){Yo(L)}s.currentTarget=null,u=S}}}}function ft(t,e){var a=e[is];a===void 0&&(a=e[is]=new Set);var r=t+"__bubble";a.has(r)||(cp(e,t,2,!1),a.add(r))}function Zu(t,e,a){var r=0;e&&(r|=4),cp(a,t,r,e)}var al="_reactListening"+Math.random().toString(36).slice(2);function Ku(t){if(!t[al]){t[al]=!0,ad.forEach(function(a){a!=="selectionchange"&&(f1.has(a)||Zu(a,!1,t),Zu(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[al]||(e[al]=!0,Zu("selectionchange",!1,e))}}function cp(t,e,a,r){switch(Vp(e)){case 2:var s=P1;break;case 8:s=B1;break;default:s=lc}a=s.bind(null,e,a,t),s=void 0,!ps||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,a,{capture:!0,passive:s}):t.addEventListener(e,a,!0):s!==void 0?t.addEventListener(e,a,{passive:s}):t.addEventListener(e,a,!1)}function Qu(t,e,a,r,s){var u=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var y=r.tag;if(y===3||y===4){var v=r.stateNode.containerInfo;if(v===s)break;if(y===4)for(y=r.return;y!==null;){var S=y.tag;if((S===3||S===4)&&y.stateNode.containerInfo===s)return;y=y.return}for(;v!==null;){if(y=wa(v),y===null)return;if(S=y.tag,S===5||S===6||S===26||S===27){r=u=y;continue t}v=v.parentNode}}r=r.return}yd(function(){var C=u,L=hs(a),j=[];t:{var z=Xd.get(t);if(z!==void 0){var k=yo,it=t;switch(t){case"keypress":if(po(a)===0)break t;case"keydown":case"keyup":k=rb;break;case"focusin":it="focus",k=bs;break;case"focusout":it="blur",k=bs;break;case"beforeblur":case"afterblur":k=bs;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=sb;break;case Hd:case qd:case Yd:k=Fv;break;case Gd:k=cb;break;case"scroll":case"scrollend":k=Xv;break;case"wheel":k=db;break;case"copy":case"cut":case"paste":k=Wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Td;break;case"toggle":case"beforetoggle":k=mb}var et=(e&4)!==0,At=!et&&(t==="scroll"||t==="scrollend"),R=et?z!==null?z+"Capture":null:z;et=[];for(var D=C,w;D!==null;){var B=D;if(w=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||w===null||R===null||(B=ki(D,R),B!=null&&et.push(pr(D,B,w))),At)break;D=D.return}0<et.length&&(z=new k(z,it,null,a,L),j.push({event:z,listeners:et}))}}if((e&7)===0){t:{if(z=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",z&&a!==ds&&(it=a.relatedTarget||a.fromElement)&&(wa(it)||it[Ra]))break t;if((k||z)&&(z=L.window===L?L:(z=L.ownerDocument)?z.defaultView||z.parentWindow:window,k?(it=a.relatedTarget||a.toElement,k=C,it=it?wa(it):null,it!==null&&(At=f(it),et=it.tag,it!==At||et!==5&&et!==27&&et!==6)&&(it=null)):(k=null,it=C),k!==it)){if(et=xd,B="onMouseLeave",R="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(et=Td,B="onPointerLeave",R="onPointerEnter",D="pointer"),At=k==null?z:zi(k),w=it==null?z:zi(it),z=new et(B,D+"leave",k,a,L),z.target=At,z.relatedTarget=w,B=null,wa(L)===C&&(et=new et(R,D+"enter",it,a,L),et.target=w,et.relatedTarget=At,B=et),At=B,k&&it)e:{for(et=k,R=it,D=0,w=et;w;w=ui(w))D++;for(w=0,B=R;B;B=ui(B))w++;for(;0<D-w;)et=ui(et),D--;for(;0<w-D;)R=ui(R),w--;for(;D--;){if(et===R||R!==null&&et===R.alternate)break e;et=ui(et),R=ui(R)}et=null}else et=null;k!==null&&fp(j,z,k,et,!1),it!==null&&At!==null&&fp(j,At,it,et,!0)}}t:{if(z=C?zi(C):window,k=z.nodeName&&z.nodeName.toLowerCase(),k==="select"||k==="input"&&z.type==="file")var F=Cd;else if(Rd(z))if(_d)F=Ab;else{F=Tb;var ut=Sb}else k=z.nodeName,!k||k.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?C&&fs(C.elementType)&&(F=Cd):F=Eb;if(F&&(F=F(t,C))){wd(j,F,a,L);break t}ut&&ut(t,z,C),t==="focusout"&&C&&z.type==="number"&&C.memoizedProps.value!=null&&cs(z,"number",z.value)}switch(ut=C?zi(C):window,t){case"focusin":(Rd(ut)||ut.contentEditable==="true")&&(Ba=ut,Os=C,Hi=null);break;case"focusout":Hi=Os=Ba=null;break;case"mousedown":Ds=!0;break;case"contextmenu":case"mouseup":case"dragend":Ds=!1,Bd(j,a,L);break;case"selectionchange":if(Db)break;case"keydown":case"keyup":Bd(j,a,L)}var I;if(Ss)t:{switch(t){case"compositionstart":var nt="onCompositionStart";break t;case"compositionend":nt="onCompositionEnd";break t;case"compositionupdate":nt="onCompositionUpdate";break t}nt=void 0}else Pa?Dd(t,a)&&(nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(Ed&&a.locale!=="ko"&&(Pa||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Pa&&(I=vd()):(Cn=L,gs="value"in Cn?Cn.value:Cn.textContent,Pa=!0)),ut=il(C,nt),0<ut.length&&(nt=new Sd(nt,t,null,a,L),j.push({event:nt,listeners:ut}),I?nt.data=I:(I=Md(a),I!==null&&(nt.data=I)))),(I=gb?yb(t,a):vb(t,a))&&(nt=il(C,"onBeforeInput"),0<nt.length&&(ut=new Sd("onBeforeInput","beforeinput",null,a,L),j.push({event:ut,listeners:nt}),ut.data=I)),s1(j,t,C,a,L)}up(j,e)})}function pr(t,e,a){return{instance:t,listener:e,currentTarget:a}}function il(t,e){for(var a=e+"Capture",r=[];t!==null;){var s=t,u=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||u===null||(s=ki(t,a),s!=null&&r.unshift(pr(t,s,u)),s=ki(t,e),s!=null&&r.push(pr(t,s,u))),t.tag===3)return r;t=t.return}return[]}function ui(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function fp(t,e,a,r,s){for(var u=e._reactName,y=[];a!==null&&a!==r;){var v=a,S=v.alternate,C=v.stateNode;if(v=v.tag,S!==null&&S===r)break;v!==5&&v!==26&&v!==27||C===null||(S=C,s?(C=ki(a,u),C!=null&&y.unshift(pr(a,C,S))):s||(C=ki(a,u),C!=null&&y.push(pr(a,C,S)))),a=a.return}y.length!==0&&t.push({event:e,listeners:y})}var d1=/\r\n?/g,h1=/\u0000|\uFFFD/g;function dp(t){return(typeof t=="string"?t:""+t).replace(d1,`
`).replace(h1,"")}function hp(t,e){return e=dp(e),dp(t)===e}function rl(){}function Et(t,e,a,r,s,u){switch(a){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||Ua(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&Ua(t,""+r);break;case"className":uo(t,"class",r);break;case"tabIndex":uo(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":uo(t,a,r);break;case"style":pd(t,r,u);break;case"data":if(e!=="object"){uo(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ho(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(e!=="input"&&Et(t,e,"name",s.name,s,null),Et(t,e,"formEncType",s.formEncType,s,null),Et(t,e,"formMethod",s.formMethod,s,null),Et(t,e,"formTarget",s.formTarget,s,null)):(Et(t,e,"encType",s.encType,s,null),Et(t,e,"method",s.method,s,null),Et(t,e,"target",s.target,s,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ho(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=rl);break;case"onScroll":r!=null&&ft("scroll",t);break;case"onScrollEnd":r!=null&&ft("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(a=r.__html,a!=null){if(s.children!=null)throw Error(l(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=ho(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":ft("beforetoggle",t),ft("toggle",t),so(t,"popover",r);break;case"xlinkActuate":rn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":so(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Yv.get(a)||a,so(t,a,r))}}function Ju(t,e,a,r,s,u){switch(a){case"style":pd(t,r,u);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(a=r.__html,a!=null){if(s.children!=null)throw Error(l(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Ua(t,r):(typeof r=="number"||typeof r=="bigint")&&Ua(t,""+r);break;case"onScroll":r!=null&&ft("scroll",t);break;case"onScrollEnd":r!=null&&ft("scrollend",t);break;case"onClick":r!=null&&(t.onclick=rl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!id.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),e=a.slice(2,s?a.length-7:void 0),u=t[ce]||null,u=u!=null?u[a]:null,typeof u=="function"&&t.removeEventListener(e,u,s),typeof r=="function")){typeof u!="function"&&u!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,r,s);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):so(t,a,r)}}}function ne(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ft("error",t),ft("load",t);var r=!1,s=!1,u;for(u in a)if(a.hasOwnProperty(u)){var y=a[u];if(y!=null)switch(u){case"src":r=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Et(t,e,u,y,a,null)}}s&&Et(t,e,"srcSet",a.srcSet,a,null),r&&Et(t,e,"src",a.src,a,null);return;case"input":ft("invalid",t);var v=u=y=s=null,S=null,C=null;for(r in a)if(a.hasOwnProperty(r)){var L=a[r];if(L!=null)switch(r){case"name":s=L;break;case"type":y=L;break;case"checked":S=L;break;case"defaultChecked":C=L;break;case"value":u=L;break;case"defaultValue":v=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(l(137,e));break;default:Et(t,e,r,L,a,null)}}fd(t,u,v,S,C,y,s,!1),co(t);return;case"select":ft("invalid",t),r=y=u=null;for(s in a)if(a.hasOwnProperty(s)&&(v=a[s],v!=null))switch(s){case"value":u=v;break;case"defaultValue":y=v;break;case"multiple":r=v;default:Et(t,e,s,v,a,null)}e=u,a=y,t.multiple=!!r,e!=null?Va(t,!!r,e,!1):a!=null&&Va(t,!!r,a,!0);return;case"textarea":ft("invalid",t),u=s=r=null;for(y in a)if(a.hasOwnProperty(y)&&(v=a[y],v!=null))switch(y){case"value":r=v;break;case"defaultValue":s=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(l(91));break;default:Et(t,e,y,v,a,null)}hd(t,r,s,u),co(t);return;case"option":for(S in a)a.hasOwnProperty(S)&&(r=a[S],r!=null)&&(S==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Et(t,e,S,r,a,null));return;case"dialog":ft("beforetoggle",t),ft("toggle",t),ft("cancel",t),ft("close",t);break;case"iframe":case"object":ft("load",t);break;case"video":case"audio":for(r=0;r<mr.length;r++)ft(mr[r],t);break;case"image":ft("error",t),ft("load",t);break;case"details":ft("toggle",t);break;case"embed":case"source":case"link":ft("error",t),ft("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(r=a[C],r!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Et(t,e,C,r,a,null)}return;default:if(fs(e)){for(L in a)a.hasOwnProperty(L)&&(r=a[L],r!==void 0&&Ju(t,e,L,r,a,void 0));return}}for(v in a)a.hasOwnProperty(v)&&(r=a[v],r!=null&&Et(t,e,v,r,a,null))}function m1(t,e,a,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,u=null,y=null,v=null,S=null,C=null,L=null;for(k in a){var j=a[k];if(a.hasOwnProperty(k)&&j!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":S=j;default:r.hasOwnProperty(k)||Et(t,e,k,null,r,j)}}for(var z in r){var k=r[z];if(j=a[z],r.hasOwnProperty(z)&&(k!=null||j!=null))switch(z){case"type":u=k;break;case"name":s=k;break;case"checked":C=k;break;case"defaultChecked":L=k;break;case"value":y=k;break;case"defaultValue":v=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(l(137,e));break;default:k!==j&&Et(t,e,z,k,r,j)}}us(t,y,v,S,C,L,u,s);return;case"select":k=y=v=z=null;for(u in a)if(S=a[u],a.hasOwnProperty(u)&&S!=null)switch(u){case"value":break;case"multiple":k=S;default:r.hasOwnProperty(u)||Et(t,e,u,null,r,S)}for(s in r)if(u=r[s],S=a[s],r.hasOwnProperty(s)&&(u!=null||S!=null))switch(s){case"value":z=u;break;case"defaultValue":v=u;break;case"multiple":y=u;default:u!==S&&Et(t,e,s,u,r,S)}e=v,a=y,r=k,z!=null?Va(t,!!a,z,!1):!!r!=!!a&&(e!=null?Va(t,!!a,e,!0):Va(t,!!a,a?[]:"",!1));return;case"textarea":k=z=null;for(v in a)if(s=a[v],a.hasOwnProperty(v)&&s!=null&&!r.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Et(t,e,v,null,r,s)}for(y in r)if(s=r[y],u=a[y],r.hasOwnProperty(y)&&(s!=null||u!=null))switch(y){case"value":z=s;break;case"defaultValue":k=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(l(91));break;default:s!==u&&Et(t,e,y,s,r,u)}dd(t,z,k);return;case"option":for(var it in a)z=a[it],a.hasOwnProperty(it)&&z!=null&&!r.hasOwnProperty(it)&&(it==="selected"?t.selected=!1:Et(t,e,it,null,r,z));for(S in r)z=r[S],k=a[S],r.hasOwnProperty(S)&&z!==k&&(z!=null||k!=null)&&(S==="selected"?t.selected=z&&typeof z!="function"&&typeof z!="symbol":Et(t,e,S,z,r,k));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)z=a[et],a.hasOwnProperty(et)&&z!=null&&!r.hasOwnProperty(et)&&Et(t,e,et,null,r,z);for(C in r)if(z=r[C],k=a[C],r.hasOwnProperty(C)&&z!==k&&(z!=null||k!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(l(137,e));break;default:Et(t,e,C,z,r,k)}return;default:if(fs(e)){for(var At in a)z=a[At],a.hasOwnProperty(At)&&z!==void 0&&!r.hasOwnProperty(At)&&Ju(t,e,At,void 0,r,z);for(L in r)z=r[L],k=a[L],!r.hasOwnProperty(L)||z===k||z===void 0&&k===void 0||Ju(t,e,L,z,r,k);return}}for(var R in a)z=a[R],a.hasOwnProperty(R)&&z!=null&&!r.hasOwnProperty(R)&&Et(t,e,R,null,r,z);for(j in r)z=r[j],k=a[j],!r.hasOwnProperty(j)||z===k||z==null&&k==null||Et(t,e,j,z,r,k)}var Fu=null,$u=null;function ol(t){return t.nodeType===9?t:t.ownerDocument}function mp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pp(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Wu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Iu=null;function p1(){var t=window.event;return t&&t.type==="popstate"?t===Iu?!1:(Iu=t,!0):(Iu=null,!1)}var gp=typeof setTimeout=="function"?setTimeout:void 0,g1=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,y1=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(t){return yp.resolve(null).then(t).catch(v1)}:gp;function v1(t){setTimeout(function(){throw t})}function Zn(t){return t==="head"}function vp(t,e){var a=e,r=0,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(0<r&&8>r){a=r;var y=t.ownerDocument;if(a&1&&gr(y.documentElement),a&2&&gr(y.body),a&4)for(a=y.head,gr(a),y=a.firstChild;y;){var v=y.nextSibling,S=y.nodeName;y[_i]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=v}}if(s===0){t.removeChild(u),Ar(e);return}s--}else a==="$"||a==="$?"||a==="$!"?s++:r=a.charCodeAt(0)-48;else r=0;a=u}while(a);Ar(e)}function tc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":tc(a),rs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function b1(t,e,a,r){for(;t.nodeType===1;){var s=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[_i])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==s.rel||t.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=qe(t.nextSibling),t===null)break}return null}function x1(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=qe(t.nextSibling),t===null))return null;return t}function ec(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function S1(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var r=function(){e(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function qe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var nc=null;function bp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function xp(t,e,a){switch(e=ol(a),t){case"html":if(t=e.documentElement,!t)throw Error(l(452));return t;case"head":if(t=e.head,!t)throw Error(l(453));return t;case"body":if(t=e.body,!t)throw Error(l(454));return t;default:throw Error(l(451))}}function gr(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);rs(t)}var Ue=new Map,Sp=new Set;function ll(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var bn=Y.d;Y.d={f:T1,r:E1,D:A1,C:O1,L:D1,m:M1,X:w1,S:R1,M:C1};function T1(){var t=bn.f(),e=Wo();return t||e}function E1(t){var e=Ca(t);e!==null&&e.tag===5&&e.type==="form"?Hh(e):bn.r(t)}var ci=typeof document>"u"?null:document;function Tp(t,e,a){var r=ci;if(r&&typeof e=="string"&&e){var s=Re(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),Sp.has(s)||(Sp.add(s),t={rel:t,crossOrigin:a,href:e},r.querySelector(s)===null&&(e=r.createElement("link"),ne(e,"link",t),Ft(e),r.head.appendChild(e)))}}function A1(t){bn.D(t),Tp("dns-prefetch",t,null)}function O1(t,e){bn.C(t,e),Tp("preconnect",t,e)}function D1(t,e,a){bn.L(t,e,a);var r=ci;if(r&&t&&e){var s='link[rel="preload"][as="'+Re(e)+'"]';e==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+Re(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+Re(a.imageSizes)+'"]')):s+='[href="'+Re(t)+'"]';var u=s;switch(e){case"style":u=fi(t);break;case"script":u=di(t)}Ue.has(u)||(t=g({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Ue.set(u,t),r.querySelector(s)!==null||e==="style"&&r.querySelector(yr(u))||e==="script"&&r.querySelector(vr(u))||(e=r.createElement("link"),ne(e,"link",t),Ft(e),r.head.appendChild(e)))}}function M1(t,e){bn.m(t,e);var a=ci;if(a&&t){var r=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+Re(r)+'"][href="'+Re(t)+'"]',u=s;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=di(t)}if(!Ue.has(u)&&(t=g({rel:"modulepreload",href:t},e),Ue.set(u,t),a.querySelector(s)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vr(u)))return}r=a.createElement("link"),ne(r,"link",t),Ft(r),a.head.appendChild(r)}}}function R1(t,e,a){bn.S(t,e,a);var r=ci;if(r&&t){var s=_a(r).hoistableStyles,u=fi(t);e=e||"default";var y=s.get(u);if(!y){var v={loading:0,preload:null};if(y=r.querySelector(yr(u)))v.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Ue.get(u))&&ac(t,a);var S=y=r.createElement("link");Ft(S),ne(S,"link",t),S._p=new Promise(function(C,L){S.onload=C,S.onerror=L}),S.addEventListener("load",function(){v.loading|=1}),S.addEventListener("error",function(){v.loading|=2}),v.loading|=4,sl(y,e,r)}y={type:"stylesheet",instance:y,count:1,state:v},s.set(u,y)}}}function w1(t,e){bn.X(t,e);var a=ci;if(a&&t){var r=_a(a).hoistableScripts,s=di(t),u=r.get(s);u||(u=a.querySelector(vr(s)),u||(t=g({src:t,async:!0},e),(e=Ue.get(s))&&ic(t,e),u=a.createElement("script"),Ft(u),ne(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(s,u))}}function C1(t,e){bn.M(t,e);var a=ci;if(a&&t){var r=_a(a).hoistableScripts,s=di(t),u=r.get(s);u||(u=a.querySelector(vr(s)),u||(t=g({src:t,async:!0,type:"module"},e),(e=Ue.get(s))&&ic(t,e),u=a.createElement("script"),Ft(u),ne(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(s,u))}}function Ep(t,e,a,r){var s=(s=ot.current)?ll(s):null;if(!s)throw Error(l(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=fi(a.href),a=_a(s).hoistableStyles,r=a.get(e),r||(r={type:"style",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=fi(a.href);var u=_a(s).hoistableStyles,y=u.get(t);if(y||(s=s.ownerDocument||s,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,y),(u=s.querySelector(yr(t)))&&!u._p&&(y.instance=u,y.state.loading=5),Ue.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ue.set(t,a),u||_1(s,t,a,y.state))),e&&r===null)throw Error(l(528,""));return y}if(e&&r!==null)throw Error(l(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=di(a),a=_a(s).hoistableScripts,r=a.get(e),r||(r={type:"script",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,t))}}function fi(t){return'href="'+Re(t)+'"'}function yr(t){return'link[rel="stylesheet"]['+t+"]"}function Ap(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function _1(t,e,a,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),ne(e,"link",a),Ft(e),t.head.appendChild(e))}function di(t){return'[src="'+Re(t)+'"]'}function vr(t){return"script[async]"+t}function Op(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+Re(a.href)+'"]');if(r)return e.instance=r,Ft(r),r;var s=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ft(r),ne(r,"style",s),sl(r,a.precedence,t),e.instance=r;case"stylesheet":s=fi(a.href);var u=t.querySelector(yr(s));if(u)return e.state.loading|=4,e.instance=u,Ft(u),u;r=Ap(a),(s=Ue.get(s))&&ac(r,s),u=(t.ownerDocument||t).createElement("link"),Ft(u);var y=u;return y._p=new Promise(function(v,S){y.onload=v,y.onerror=S}),ne(u,"link",r),e.state.loading|=4,sl(u,a.precedence,t),e.instance=u;case"script":return u=di(a.src),(s=t.querySelector(vr(u)))?(e.instance=s,Ft(s),s):(r=a,(s=Ue.get(u))&&(r=g({},a),ic(r,s)),t=t.ownerDocument||t,s=t.createElement("script"),Ft(s),ne(s,"link",r),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(l(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,sl(r,a.precedence,t));return e.instance}function sl(t,e,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=r.length?r[r.length-1]:null,u=s,y=0;y<r.length;y++){var v=r[y];if(v.dataset.precedence===e)u=v;else if(u!==s)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function ac(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ic(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ul=null;function Dp(t,e,a){if(ul===null){var r=new Map,s=ul=new Map;s.set(a,r)}else s=ul,r=s.get(a),r||(r=new Map,s.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),s=0;s<a.length;s++){var u=a[s];if(!(u[_i]||u[ie]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var y=u.getAttribute(e)||"";y=t+y;var v=r.get(y);v?v.push(u):r.set(y,[u])}}return r}function Mp(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function z1(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Rp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var br=null;function k1(){}function V1(t,e,a){if(br===null)throw Error(l(475));var r=br;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var s=fi(a.href),u=t.querySelector(yr(s));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=cl.bind(r),t.then(r,r)),e.state.loading|=4,e.instance=u,Ft(u);return}u=t.ownerDocument||t,a=Ap(a),(s=Ue.get(s))&&ac(a,s),u=u.createElement("link"),Ft(u);var y=u;y._p=new Promise(function(v,S){y.onload=v,y.onerror=S}),ne(u,"link",a),e.instance=u}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(r.count++,e=cl.bind(r),t.addEventListener("load",e),t.addEventListener("error",e))}}function U1(){if(br===null)throw Error(l(475));var t=br;return t.stylesheets&&t.count===0&&rc(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&rc(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function cl(){if(this.count--,this.count===0){if(this.stylesheets)rc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var fl=null;function rc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,fl=new Map,e.forEach(N1,t),fl=null,cl.call(t))}function N1(t,e){if(!(e.state.loading&4)){var a=fl.get(t);if(a)var r=a.get(null);else{a=new Map,fl.set(t,a);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<s.length;u++){var y=s[u];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),r=y)}r&&a.set(null,r)}s=e.instance,y=s.getAttribute("data-precedence"),u=a.get(y)||r,u===r&&a.set(null,s),a.set(y,s),this.count++,r=cl.bind(this),s.addEventListener("load",r),s.addEventListener("error",r),u?u.parentNode.insertBefore(s,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var xr={$$typeof:N,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function L1(t,e,a,r,s,u,y,v){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=es(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=es(0),this.hiddenUpdates=es(null),this.identifierPrefix=r,this.onUncaughtError=s,this.onCaughtError=u,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function wp(t,e,a,r,s,u,y,v,S,C,L,j){return t=new L1(t,e,a,y,v,S,C,j),e=1,u===!0&&(e|=24),u=xe(3,null,null,e),t.current=u,u.stateNode=t,e=js(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:r,isDehydrated:a,cache:e},Gs(u),t}function Cp(t){return t?(t=Ya,t):Ya}function _p(t,e,a,r,s,u){s=Cp(s),r.context===null?r.context=s:r.pendingContext=s,r=kn(e),r.payload={element:a},u=u===void 0?null:u,u!==null&&(r.callback=u),a=Vn(t,r,e),a!==null&&(Oe(a,t,e),Fi(a,t,e))}function zp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function oc(t,e){zp(t,e),(t=t.alternate)&&zp(t,e)}function kp(t){if(t.tag===13){var e=qa(t,67108864);e!==null&&Oe(e,t,67108864),oc(t,67108864)}}var dl=!0;function P1(t,e,a,r){var s=P.T;P.T=null;var u=Y.p;try{Y.p=2,lc(t,e,a,r)}finally{Y.p=u,P.T=s}}function B1(t,e,a,r){var s=P.T;P.T=null;var u=Y.p;try{Y.p=8,lc(t,e,a,r)}finally{Y.p=u,P.T=s}}function lc(t,e,a,r){if(dl){var s=sc(r);if(s===null)Qu(t,e,r,hl,a),Up(t,r);else if(H1(s,t,e,a,r))r.stopPropagation();else if(Up(t,r),e&4&&-1<j1.indexOf(t)){for(;s!==null;){var u=Ca(s);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var y=ia(u.pendingLanes);if(y!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;y;){var S=1<<31-ve(y);v.entanglements[1]|=S,y&=~S}We(u),(bt&6)===0&&(Fo=Ke()+500,hr(0))}}break;case 13:v=qa(u,2),v!==null&&Oe(v,u,2),Wo(),oc(u,2)}if(u=sc(r),u===null&&Qu(t,e,r,hl,a),u===s)break;s=u}s!==null&&r.stopPropagation()}else Qu(t,e,r,null,a)}}function sc(t){return t=hs(t),uc(t)}var hl=null;function uc(t){if(hl=null,t=wa(t),t!==null){var e=f(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=d(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return hl=t,null}function Vp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ov()){case Qf:return 2;case Jf:return 8;case io:case Dv:return 32;case Ff:return 268435456;default:return 32}default:return 32}}var cc=!1,Kn=null,Qn=null,Jn=null,Sr=new Map,Tr=new Map,Fn=[],j1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Up(t,e){switch(t){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":Sr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tr.delete(e.pointerId)}}function Er(t,e,a,r,s,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:a,eventSystemFlags:r,nativeEvent:u,targetContainers:[s]},e!==null&&(e=Ca(e),e!==null&&kp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function H1(t,e,a,r,s){switch(e){case"focusin":return Kn=Er(Kn,t,e,a,r,s),!0;case"dragenter":return Qn=Er(Qn,t,e,a,r,s),!0;case"mouseover":return Jn=Er(Jn,t,e,a,r,s),!0;case"pointerover":var u=s.pointerId;return Sr.set(u,Er(Sr.get(u)||null,t,e,a,r,s)),!0;case"gotpointercapture":return u=s.pointerId,Tr.set(u,Er(Tr.get(u)||null,t,e,a,r,s)),!0}return!1}function Np(t){var e=wa(t.target);if(e!==null){var a=f(e);if(a!==null){if(e=a.tag,e===13){if(e=d(a),e!==null){t.blockedOn=e,Vv(t.priority,function(){if(a.tag===13){var r=Ae();r=ns(r);var s=qa(a,r);s!==null&&Oe(s,a,r),oc(a,r)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=sc(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);ds=r,a.target.dispatchEvent(r),ds=null}else return e=Ca(a),e!==null&&kp(e),t.blockedOn=a,!1;e.shift()}return!0}function Lp(t,e,a){ml(t)&&a.delete(e)}function q1(){cc=!1,Kn!==null&&ml(Kn)&&(Kn=null),Qn!==null&&ml(Qn)&&(Qn=null),Jn!==null&&ml(Jn)&&(Jn=null),Sr.forEach(Lp),Tr.forEach(Lp)}function pl(t,e){t.blockedOn===e&&(t.blockedOn=null,cc||(cc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,q1)))}var gl=null;function Pp(t){gl!==t&&(gl=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){gl===t&&(gl=null);for(var e=0;e<t.length;e+=3){var a=t[e],r=t[e+1],s=t[e+2];if(typeof r!="function"){if(uc(r||a)===null)continue;break}var u=Ca(a);u!==null&&(t.splice(e,3),e-=3,uu(u,{pending:!0,data:s,method:a.method,action:r},r,s))}}))}function Ar(t){function e(S){return pl(S,t)}Kn!==null&&pl(Kn,t),Qn!==null&&pl(Qn,t),Jn!==null&&pl(Jn,t),Sr.forEach(e),Tr.forEach(e);for(var a=0;a<Fn.length;a++){var r=Fn[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Fn.length&&(a=Fn[0],a.blockedOn===null);)Np(a),a.blockedOn===null&&Fn.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var s=a[r],u=a[r+1],y=s[ce]||null;if(typeof u=="function")y||Pp(a);else if(y){var v=null;if(u&&u.hasAttribute("formAction")){if(s=u,y=u[ce]||null)v=y.formAction;else if(uc(s)!==null)continue}else v=y.action;typeof v=="function"?a[r+1]=v:(a.splice(r,3),r-=3),Pp(a)}}}function fc(t){this._internalRoot=t}yl.prototype.render=fc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(l(409));var a=e.current,r=Ae();_p(a,r,t,e,null,null)},yl.prototype.unmount=fc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_p(t.current,2,null,t,null,null),Wo(),e[Ra]=null}};function yl(t){this._internalRoot=t}yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=ed();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Fn.length&&e!==0&&e<Fn[a].priority;a++);Fn.splice(a,0,t),a===0&&Np(t)}};var Bp=i.version;if(Bp!=="19.1.0")throw Error(l(527,Bp,"19.1.0"));Y.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(l(188)):(t=Object.keys(t).join(","),Error(l(268,t)));return t=p(e),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var Y1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{Ri=vl.inject(Y1),ye=vl}catch{}}return Dr.createRoot=function(t,e){if(!c(t))throw Error(l(299));var a=!1,r="",s=em,u=nm,y=am,v=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(y=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(v=e.unstable_transitionCallbacks)),e=wp(t,1,!1,null,null,a,r,s,u,y,v,null),t[Ra]=e.current,Ku(t),new fc(e)},Dr.hydrateRoot=function(t,e,a){if(!c(t))throw Error(l(299));var r=!1,s="",u=em,y=nm,v=am,S=null,C=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(S=a.unstable_transitionCallbacks),a.formState!==void 0&&(C=a.formState)),e=wp(t,1,!0,e,a??null,r,s,u,y,v,S,C),e.context=Cp(null),a=e.current,r=Ae(),r=ns(r),s=kn(r),s.callback=null,Vn(a,s,r),a=r,e.current.lanes=a,Ci(e,a),We(e),t[Ra]=e.current,Ku(t),new yl(e)},Dr.version="19.1.0",Dr}var Jp;function tx(){if(Jp)return mc.exports;Jp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),mc.exports=I1(),mc.exports}var ex=tx();var Fp="popstate";function nx(n={}){function i(l,c){let{pathname:f,search:d,hash:m}=l.location;return Lc("",{pathname:f,search:d,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function o(l,c){return typeof c=="string"?c:Pr(c)}return ix(i,o,null,n)}function Vt(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function nn(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function ax(){return Math.random().toString(36).substring(2,10)}function $p(n,i){return{usr:n.state,key:n.key,idx:i}}function Lc(n,i,o=null,l){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?Ei(i):i,state:o,key:i&&i.key||l||ax()}}function Pr({pathname:n="/",search:i="",hash:o=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Ei(n){let i={};if(n){let o=n.indexOf("#");o>=0&&(i.hash=n.substring(o),n=n.substring(0,o));let l=n.indexOf("?");l>=0&&(i.search=n.substring(l),n=n.substring(0,l)),n&&(i.pathname=n)}return i}function ix(n,i,o,l={}){let{window:c=document.defaultView,v5Compat:f=!1}=l,d=c.history,m="POP",p=null,h=g();h==null&&(h=0,d.replaceState({...d.state,idx:h},""));function g(){return(d.state||{idx:null}).idx}function b(){m="POP";let _=g(),U=_==null?null:_-h;h=_,p&&p({action:m,location:T.location,delta:U})}function x(_,U){m="PUSH";let V=Lc(T.location,_,U);h=g()+1;let N=$p(V,h),X=T.createHref(V);try{d.pushState(N,"",X)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;c.location.assign(X)}f&&p&&p({action:m,location:T.location,delta:1})}function A(_,U){m="REPLACE";let V=Lc(T.location,_,U);h=g();let N=$p(V,h),X=T.createHref(V);d.replaceState(N,"",X),f&&p&&p({action:m,location:T.location,delta:0})}function E(_){return rx(_)}let T={get action(){return m},get location(){return n(c,d)},listen(_){if(p)throw new Error("A history only accepts one active listener");return c.addEventListener(Fp,b),p=_,()=>{c.removeEventListener(Fp,b),p=null}},createHref(_){return i(c,_)},createURL:E,encodeLocation(_){let U=E(_);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:x,replace:A,go(_){return d.go(_)}};return T}function rx(n,i=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Vt(o,"No window.location.(origin|href) available to create URL");let l=typeof n=="string"?n:Pr(n);return l=l.replace(/ $/,"%20"),!i&&l.startsWith("//")&&(l=o+l),new URL(l,o)}function Sg(n,i,o="/"){return ox(n,i,o,!1)}function ox(n,i,o,l){let c=typeof i=="string"?Ei(i):i,f=En(c.pathname||"/",o);if(f==null)return null;let d=Tg(n);lx(d);let m=null;for(let p=0;m==null&&p<d.length;++p){let h=vx(f);m=gx(d[p],h,l)}return m}function Tg(n,i=[],o=[],l="",c=!1){let f=(d,m,p=c,h)=>{let g={relativePath:h===void 0?d.path||"":h,caseSensitive:d.caseSensitive===!0,childrenIndex:m,route:d};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(l)&&p)return;Vt(g.relativePath.startsWith(l),`Absolute route path "${g.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(l.length)}let b=Tn([l,g.relativePath]),x=o.concat(g);d.children&&d.children.length>0&&(Vt(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),Tg(d.children,i,x,b,p)),!(d.path==null&&!d.index)&&i.push({path:b,score:mx(b,d.index),routesMeta:x})};return n.forEach((d,m)=>{if(d.path===""||!d.path?.includes("?"))f(d,m);else for(let p of Eg(d.path))f(d,m,!0,p)}),i}function Eg(n){let i=n.split("/");if(i.length===0)return[];let[o,...l]=i,c=o.endsWith("?"),f=o.replace(/\?$/,"");if(l.length===0)return c?[f,""]:[f];let d=Eg(l.join("/")),m=[];return m.push(...d.map(p=>p===""?f:[f,p].join("/"))),c&&m.push(...d),m.map(p=>n.startsWith("/")&&p===""?"/":p)}function lx(n){n.sort((i,o)=>i.score!==o.score?o.score-i.score:px(i.routesMeta.map(l=>l.childrenIndex),o.routesMeta.map(l=>l.childrenIndex)))}var sx=/^:[\w-]+$/,ux=3,cx=2,fx=1,dx=10,hx=-2,Wp=n=>n==="*";function mx(n,i){let o=n.split("/"),l=o.length;return o.some(Wp)&&(l+=hx),i&&(l+=cx),o.filter(c=>!Wp(c)).reduce((c,f)=>c+(sx.test(f)?ux:f===""?fx:dx),l)}function px(n,i){return n.length===i.length&&n.slice(0,-1).every((l,c)=>l===i[c])?n[n.length-1]-i[i.length-1]:0}function gx(n,i,o=!1){let{routesMeta:l}=n,c={},f="/",d=[];for(let m=0;m<l.length;++m){let p=l[m],h=m===l.length-1,g=f==="/"?i:i.slice(f.length)||"/",b=Ll({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},g),x=p.route;if(!b&&h&&o&&!l[l.length-1].route.index&&(b=Ll({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!b)return null;Object.assign(c,b.params),d.push({params:c,pathname:Tn([f,b.pathname]),pathnameBase:Tx(Tn([f,b.pathnameBase])),route:x}),b.pathnameBase!=="/"&&(f=Tn([f,b.pathnameBase]))}return d}function Ll(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,l]=yx(n.path,n.caseSensitive,n.end),c=i.match(o);if(!c)return null;let f=c[0],d=f.replace(/(.)\/+$/,"$1"),m=c.slice(1);return{params:l.reduce((h,{paramName:g,isOptional:b},x)=>{if(g==="*"){let E=m[x]||"";d=f.slice(0,f.length-E.length).replace(/(.)\/+$/,"$1")}const A=m[x];return b&&!A?h[g]=void 0:h[g]=(A||"").replace(/%2F/g,"/"),h},{}),pathname:f,pathnameBase:d,pattern:n}}function yx(n,i=!1,o=!0){nn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let l=[],c="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,m,p)=>(l.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(l.push({paramName:"*"}),c+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":n!==""&&n!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,i?void 0:"i"),l]}function vx(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return nn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function En(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,l=n.charAt(o);return l&&l!=="/"?null:n.slice(o)||"/"}var bx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function xx(n,i="/"){let{pathname:o,search:l="",hash:c=""}=typeof n=="string"?Ei(n):n,f;return o?(o=o.replace(/\/\/+/g,"/"),o.startsWith("/")?f=Ip(o.substring(1),"/"):f=Ip(o,i)):f=i,{pathname:f,search:Ex(l),hash:Ax(c)}}function Ip(n,i){let o=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function vc(n,i,o,l){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Sx(n){return n.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function Ag(n){let i=Sx(n);return i.map((o,l)=>l===i.length-1?o.pathname:o.pathnameBase)}function Og(n,i,o,l=!1){let c;typeof n=="string"?c=Ei(n):(c={...n},Vt(!c.pathname||!c.pathname.includes("?"),vc("?","pathname","search",c)),Vt(!c.pathname||!c.pathname.includes("#"),vc("#","pathname","hash",c)),Vt(!c.search||!c.search.includes("#"),vc("#","search","hash",c)));let f=n===""||c.pathname==="",d=f?"/":c.pathname,m;if(d==null)m=o;else{let b=i.length-1;if(!l&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),b-=1;c.pathname=x.join("/")}m=b>=0?i[b]:"/"}let p=xx(c,m),h=d&&d!=="/"&&d.endsWith("/"),g=(f||d===".")&&o.endsWith("/");return!p.pathname.endsWith("/")&&(h||g)&&(p.pathname+="/"),p}var Tn=n=>n.join("/").replace(/\/\/+/g,"/"),Tx=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Ex=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Ax=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,Ox=class{constructor(n,i,o,l=!1){this.status=n,this.statusText=i||"",this.internal=l,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function Dx(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function Mx(n){return n.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Dg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Mg(n,i){let o=n;if(typeof o!="string"||!bx.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let l=o,c=!1;if(Dg)try{let f=new URL(window.location.href),d=o.startsWith("//")?new URL(f.protocol+o):new URL(o),m=En(d.pathname,i);d.origin===f.origin&&m!=null?o=m+d.search+d.hash:c=!0}catch{nn(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:l,isExternal:c,to:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Rg=["POST","PUT","PATCH","DELETE"];new Set(Rg);var Rx=["GET",...Rg];new Set(Rx);var Ai=M.createContext(null);Ai.displayName="DataRouter";var Gl=M.createContext(null);Gl.displayName="DataRouterState";var wx=M.createContext(!1),wg=M.createContext({isTransitioning:!1});wg.displayName="ViewTransition";var Cx=M.createContext(new Map);Cx.displayName="Fetchers";var _x=M.createContext(null);_x.displayName="Await";var Be=M.createContext(null);Be.displayName="Navigation";var Xr=M.createContext(null);Xr.displayName="Location";var Dn=M.createContext({outlet:null,matches:[],isDataRoute:!1});Dn.displayName="Route";var uf=M.createContext(null);uf.displayName="RouteError";var Cg="REACT_ROUTER_ERROR",zx="REDIRECT",kx="ROUTE_ERROR_RESPONSE";function Vx(n){if(n.startsWith(`${Cg}:${zx}:{`))try{let i=JSON.parse(n.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function Ux(n){if(n.startsWith(`${Cg}:${kx}:{`))try{let i=JSON.parse(n.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new Ox(i.status,i.statusText,i.data)}catch{}}function Nx(n,{relative:i}={}){Vt(Zr(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:l}=M.useContext(Be),{hash:c,pathname:f,search:d}=Kr(n,{relative:i}),m=f;return o!=="/"&&(m=f==="/"?o:Tn([o,f])),l.createHref({pathname:m,search:d,hash:c})}function Zr(){return M.useContext(Xr)!=null}function na(){return Vt(Zr(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Xr).location}var _g="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zg(n){M.useContext(Be).static||M.useLayoutEffect(n)}function Lx(){let{isDataRoute:n}=M.useContext(Dn);return n?Fx():Px()}function Px(){Vt(Zr(),"useNavigate() may be used only in the context of a <Router> component.");let n=M.useContext(Ai),{basename:i,navigator:o}=M.useContext(Be),{matches:l}=M.useContext(Dn),{pathname:c}=na(),f=JSON.stringify(Ag(l)),d=M.useRef(!1);return zg(()=>{d.current=!0}),M.useCallback((p,h={})=>{if(nn(d.current,_g),!d.current)return;if(typeof p=="number"){o.go(p);return}let g=Og(p,JSON.parse(f),c,h.relative==="path");n==null&&i!=="/"&&(g.pathname=g.pathname==="/"?i:Tn([i,g.pathname])),(h.replace?o.replace:o.push)(g,h.state,h)},[i,o,f,c,n])}M.createContext(null);function Kr(n,{relative:i}={}){let{matches:o}=M.useContext(Dn),{pathname:l}=na(),c=JSON.stringify(Ag(o));return M.useMemo(()=>Og(n,JSON.parse(c),l,i==="path"),[n,c,l,i])}function Bx(n,i){return kg(n,i)}function kg(n,i,o,l,c){Vt(Zr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=M.useContext(Be),{matches:d}=M.useContext(Dn),m=d[d.length-1],p=m?m.params:{},h=m?m.pathname:"/",g=m?m.pathnameBase:"/",b=m&&m.route;{let V=b&&b.path||"";Ug(h,!b||V.endsWith("*")||V.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V==="/"?"*":`${V}/*`}">.`)}let x=na(),A;if(i){let V=typeof i=="string"?Ei(i):i;Vt(g==="/"||V.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${V.pathname}" was given in the \`location\` prop.`),A=V}else A=x;let E=A.pathname||"/",T=E;if(g!=="/"){let V=g.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(V.length).join("/")}let _=Sg(n,{pathname:T});nn(b||_!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),nn(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let U=Gx(_&&_.map(V=>Object.assign({},V,{params:Object.assign({},p,V.params),pathname:Tn([g,f.encodeLocation?f.encodeLocation(V.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?g:Tn([g,f.encodeLocation?f.encodeLocation(V.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:V.pathnameBase])})),d,o,l,c);return i&&U?M.createElement(Xr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},U):U}function jx(){let n=Jx(),i=Dx(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,l="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:l},f={padding:"2px 4px",backgroundColor:l},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:f},"ErrorBoundary")," or"," ",M.createElement("code",{style:f},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},i),o?M.createElement("pre",{style:c},o):null,d)}var Hx=M.createElement(jx,null),Vg=class extends M.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){this.props.onError?this.props.onError(n,i):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const o=Ux(n.digest);o&&(n=o)}let i=n!==void 0?M.createElement(Dn.Provider,{value:this.props.routeContext},M.createElement(uf.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?M.createElement(qx,{error:n},i):i}};Vg.contextType=wx;var bc=new WeakMap;function qx({children:n,error:i}){let{basename:o}=M.useContext(Be);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let l=Vx(i.digest);if(l){let c=bc.get(i);if(c)throw c;let f=Mg(l.location,o);if(Dg&&!bc.get(i))if(f.isExternal||l.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:l.replace}));throw bc.set(i,d),d}return M.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return n}function Yx({routeContext:n,match:i,children:o}){let l=M.useContext(Ai);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),M.createElement(Dn.Provider,{value:n},o)}function Gx(n,i=[],o=null,l=null,c=null){if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let f=n,d=o?.errors;if(d!=null){let g=f.findIndex(b=>b.route.id&&d?.[b.route.id]!==void 0);Vt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),f=f.slice(0,Math.min(f.length,g+1))}let m=!1,p=-1;if(o)for(let g=0;g<f.length;g++){let b=f[g];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(p=g),b.route.id){let{loaderData:x,errors:A}=o,E=b.route.loader&&!x.hasOwnProperty(b.route.id)&&(!A||A[b.route.id]===void 0);if(b.route.lazy||E){m=!0,p>=0?f=f.slice(0,p+1):f=[f[0]];break}}}let h=o&&l?(g,b)=>{l(g,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:Mx(o.matches),errorInfo:b})}:void 0;return f.reduceRight((g,b,x)=>{let A,E=!1,T=null,_=null;o&&(A=d&&b.route.id?d[b.route.id]:void 0,T=b.route.errorElement||Hx,m&&(p<0&&x===0?(Ug("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,_=null):p===x&&(E=!0,_=b.route.hydrateFallbackElement||null)));let U=i.concat(f.slice(0,x+1)),V=()=>{let N;return A?N=T:E?N=_:b.route.Component?N=M.createElement(b.route.Component,null):b.route.element?N=b.route.element:N=g,M.createElement(Yx,{match:b,routeContext:{outlet:g,matches:U,isDataRoute:o!=null},children:N})};return o&&(b.route.ErrorBoundary||b.route.errorElement||x===0)?M.createElement(Vg,{location:o.location,revalidation:o.revalidation,component:T,error:A,children:V(),routeContext:{outlet:null,matches:U,isDataRoute:!0},onError:h}):V()},null)}function cf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xx(n){let i=M.useContext(Ai);return Vt(i,cf(n)),i}function Zx(n){let i=M.useContext(Gl);return Vt(i,cf(n)),i}function Kx(n){let i=M.useContext(Dn);return Vt(i,cf(n)),i}function ff(n){let i=Kx(n),o=i.matches[i.matches.length-1];return Vt(o.route.id,`${n} can only be used on routes that contain a unique "id"`),o.route.id}function Qx(){return ff("useRouteId")}function Jx(){let n=M.useContext(uf),i=Zx("useRouteError"),o=ff("useRouteError");return n!==void 0?n:i.errors?.[o]}function Fx(){let{router:n}=Xx("useNavigate"),i=ff("useNavigate"),o=M.useRef(!1);return zg(()=>{o.current=!0}),M.useCallback(async(c,f={})=>{nn(o.current,_g),o.current&&(typeof c=="number"?await n.navigate(c):await n.navigate(c,{fromRouteId:i,...f}))},[n,i])}var t0={};function Ug(n,i,o){!i&&!t0[n]&&(t0[n]=!0,nn(!1,o))}M.memo($x);function $x({routes:n,future:i,state:o,onError:l}){return kg(n,void 0,o,l,i)}function mi(n){Vt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Wx({basename:n="/",children:i=null,location:o,navigationType:l="POP",navigator:c,static:f=!1,unstable_useTransitions:d}){Vt(!Zr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=n.replace(/^\/*/,"/"),p=M.useMemo(()=>({basename:m,navigator:c,static:f,unstable_useTransitions:d,future:{}}),[m,c,f,d]);typeof o=="string"&&(o=Ei(o));let{pathname:h="/",search:g="",hash:b="",state:x=null,key:A="default"}=o,E=M.useMemo(()=>{let T=En(h,m);return T==null?null:{location:{pathname:T,search:g,hash:b,state:x,key:A},navigationType:l}},[m,h,g,b,x,A,l]);return nn(E!=null,`<Router basename="${m}"> is not able to match the URL "${h}${g}${b}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:M.createElement(Be.Provider,{value:p},M.createElement(Xr.Provider,{children:i,value:E}))}function Ix({children:n,location:i}){return Bx(Pc(n),i)}function Pc(n,i=[]){let o=[];return M.Children.forEach(n,(l,c)=>{if(!M.isValidElement(l))return;let f=[...i,c];if(l.type===M.Fragment){o.push.apply(o,Pc(l.props.children,f));return}Vt(l.type===mi,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Vt(!l.props.index||!l.props.children,"An index route cannot have child routes.");let d={id:l.props.id||f.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(d.children=Pc(l.props.children,f)),o.push(d)}),o}var _l="get",zl="application/x-www-form-urlencoded";function Xl(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function tS(n){return Xl(n)&&n.tagName.toLowerCase()==="button"}function eS(n){return Xl(n)&&n.tagName.toLowerCase()==="form"}function nS(n){return Xl(n)&&n.tagName.toLowerCase()==="input"}function aS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function iS(n,i){return n.button===0&&(!i||i==="_self")&&!aS(n)}var bl=null;function rS(){if(bl===null)try{new FormData(document.createElement("form"),0),bl=!1}catch{bl=!0}return bl}var oS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function xc(n){return n!=null&&!oS.has(n)?(nn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zl}"`),null):n}function lS(n,i){let o,l,c,f,d;if(eS(n)){let m=n.getAttribute("action");l=m?En(m,i):null,o=n.getAttribute("method")||_l,c=xc(n.getAttribute("enctype"))||zl,f=new FormData(n)}else if(tS(n)||nS(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||m.getAttribute("action");if(l=p?En(p,i):null,o=n.getAttribute("formmethod")||m.getAttribute("method")||_l,c=xc(n.getAttribute("formenctype"))||xc(m.getAttribute("enctype"))||zl,f=new FormData(m,n),!rS()){let{name:h,type:g,value:b}=n;if(g==="image"){let x=h?`${h}.`:"";f.append(`${x}x`,"0"),f.append(`${x}y`,"0")}else h&&f.append(h,b)}}else{if(Xl(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=_l,l=null,c=zl,d=n}return f&&c==="text/plain"&&(d=f,f=void 0),{action:l,method:o.toLowerCase(),encType:c,formData:f,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function df(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function sS(n,i,o,l){let c=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${l}`:c.pathname=`${c.pathname}.${l}`:c.pathname==="/"?c.pathname=`_root.${l}`:i&&En(c.pathname,i)==="/"?c.pathname=`${i.replace(/\/$/,"")}/_root.${l}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${l}`,c}async function uS(n,i){if(n.id in i)return i[n.id];try{let o=await import(n.module);return i[n.id]=o,o}catch(o){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cS(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function fS(n,i,o){let l=await Promise.all(n.map(async c=>{let f=i.routes[c.route.id];if(f){let d=await uS(f,o);return d.links?d.links():[]}return[]}));return pS(l.flat(1).filter(cS).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function e0(n,i,o,l,c,f){let d=(p,h)=>o[h]?p.route.id!==o[h].route.id:!0,m=(p,h)=>o[h].pathname!==p.pathname||o[h].route.path?.endsWith("*")&&o[h].params["*"]!==p.params["*"];return f==="assets"?i.filter((p,h)=>d(p,h)||m(p,h)):f==="data"?i.filter((p,h)=>{let g=l.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(d(p,h)||m(p,h))return!0;if(p.route.shouldRevalidate){let b=p.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function dS(n,i,{includeHydrateFallback:o}={}){return hS(n.map(l=>{let c=i.routes[l.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),o&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function hS(n){return[...new Set(n)]}function mS(n){let i={},o=Object.keys(n).sort();for(let l of o)i[l]=n[l];return i}function pS(n,i){let o=new Set;return new Set(i),n.reduce((l,c)=>{let f=JSON.stringify(mS(c));return o.has(f)||(o.add(f),l.push({key:f,link:c})),l},[])}function Ng(){let n=M.useContext(Ai);return df(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function gS(){let n=M.useContext(Gl);return df(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var hf=M.createContext(void 0);hf.displayName="FrameworkContext";function Lg(){let n=M.useContext(hf);return df(n,"You must render this element inside a <HydratedRouter> element"),n}function yS(n,i){let o=M.useContext(hf),[l,c]=M.useState(!1),[f,d]=M.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:h,onMouseLeave:g,onTouchStart:b}=i,x=M.useRef(null);M.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let T=U=>{U.forEach(V=>{d(V.isIntersecting)})},_=new IntersectionObserver(T,{threshold:.5});return x.current&&_.observe(x.current),()=>{_.disconnect()}}},[n]),M.useEffect(()=>{if(l){let T=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(T)}}},[l]);let A=()=>{c(!0)},E=()=>{c(!1),d(!1)};return o?n!=="intent"?[f,x,{}]:[f,x,{onFocus:Mr(m,A),onBlur:Mr(p,E),onMouseEnter:Mr(h,A),onMouseLeave:Mr(g,E),onTouchStart:Mr(b,A)}]:[!1,x,{}]}function Mr(n,i){return o=>{n&&n(o),o.defaultPrevented||i(o)}}function vS({page:n,...i}){let{router:o}=Ng(),l=M.useMemo(()=>Sg(o.routes,n,o.basename),[o.routes,n,o.basename]);return l?M.createElement(xS,{page:n,matches:l,...i}):null}function bS(n){let{manifest:i,routeModules:o}=Lg(),[l,c]=M.useState([]);return M.useEffect(()=>{let f=!1;return fS(n,i,o).then(d=>{f||c(d)}),()=>{f=!0}},[n,i,o]),l}function xS({page:n,matches:i,...o}){let l=na(),{future:c,manifest:f,routeModules:d}=Lg(),{basename:m}=Ng(),{loaderData:p,matches:h}=gS(),g=M.useMemo(()=>e0(n,i,h,f,l,"data"),[n,i,h,f,l]),b=M.useMemo(()=>e0(n,i,h,f,l,"assets"),[n,i,h,f,l]),x=M.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let T=new Set,_=!1;if(i.forEach(V=>{let N=f.routes[V.route.id];!N||!N.hasLoader||(!g.some(X=>X.route.id===V.route.id)&&V.route.id in p&&d[V.route.id]?.shouldRevalidate||N.hasClientLoader?_=!0:T.add(V.route.id))}),T.size===0)return[];let U=sS(n,m,c.unstable_trailingSlashAwareDataRequests,"data");return _&&T.size>0&&U.searchParams.set("_routes",i.filter(V=>T.has(V.route.id)).map(V=>V.route.id).join(",")),[U.pathname+U.search]},[m,c.unstable_trailingSlashAwareDataRequests,p,l,f,g,i,n,d]),A=M.useMemo(()=>dS(b,f),[b,f]),E=bS(b);return M.createElement(M.Fragment,null,x.map(T=>M.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...o})),A.map(T=>M.createElement("link",{key:T,rel:"modulepreload",href:T,...o})),E.map(({key:T,link:_})=>M.createElement("link",{key:T,nonce:o.nonce,..._,crossOrigin:_.crossOrigin??o.crossOrigin})))}function SS(...n){return i=>{n.forEach(o=>{typeof o=="function"?o(i):o!=null&&(o.current=i)})}}var TS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{TS&&(window.__reactRouterVersion="7.13.0")}catch{}function ES({basename:n,children:i,unstable_useTransitions:o,window:l}){let c=M.useRef();c.current==null&&(c.current=nx({window:l,v5Compat:!0}));let f=c.current,[d,m]=M.useState({action:f.action,location:f.location}),p=M.useCallback(h=>{o===!1?m(h):M.startTransition(()=>m(h))},[o]);return M.useLayoutEffect(()=>f.listen(p),[f,p]),M.createElement(Wx,{basename:n,children:i,location:d.location,navigationType:d.action,navigator:f,unstable_useTransitions:o})}var Pg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bg=M.forwardRef(function({onClick:i,discover:o="render",prefetch:l="none",relative:c,reloadDocument:f,replace:d,state:m,target:p,to:h,preventScrollReset:g,viewTransition:b,unstable_defaultShouldRevalidate:x,...A},E){let{basename:T,unstable_useTransitions:_}=M.useContext(Be),U=typeof h=="string"&&Pg.test(h),V=Mg(h,T);h=V.to;let N=Nx(h,{relative:c}),[X,H,K]=yS(l,A),J=MS(h,{replace:d,state:m,target:p,preventScrollReset:g,relative:c,viewTransition:b,unstable_defaultShouldRevalidate:x,unstable_useTransitions:_});function Z(St){i&&i(St),St.defaultPrevented||J(St)}let at=M.createElement("a",{...A,...K,href:V.absoluteURL||N,onClick:V.isExternal||f?i:Z,ref:SS(E,H),target:p,"data-discover":!U&&o==="render"?"true":void 0});return X&&!U?M.createElement(M.Fragment,null,at,M.createElement(vS,{page:N})):at});Bg.displayName="Link";var AS=M.forwardRef(function({"aria-current":i="page",caseSensitive:o=!1,className:l="",end:c=!1,style:f,to:d,viewTransition:m,children:p,...h},g){let b=Kr(d,{relative:h.relative}),x=na(),A=M.useContext(Gl),{navigator:E,basename:T}=M.useContext(Be),_=A!=null&&zS(b)&&m===!0,U=E.encodeLocation?E.encodeLocation(b).pathname:b.pathname,V=x.pathname,N=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;o||(V=V.toLowerCase(),N=N?N.toLowerCase():null,U=U.toLowerCase()),N&&T&&(N=En(N,T)||N);const X=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let H=V===U||!c&&V.startsWith(U)&&V.charAt(X)==="/",K=N!=null&&(N===U||!c&&N.startsWith(U)&&N.charAt(U.length)==="/"),J={isActive:H,isPending:K,isTransitioning:_},Z=H?i:void 0,at;typeof l=="function"?at=l(J):at=[l,H?"active":null,K?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let St=typeof f=="function"?f(J):f;return M.createElement(Bg,{...h,"aria-current":Z,className:at,ref:g,style:St,to:d,viewTransition:m},typeof p=="function"?p(J):p)});AS.displayName="NavLink";var OS=M.forwardRef(({discover:n="render",fetcherKey:i,navigate:o,reloadDocument:l,replace:c,state:f,method:d=_l,action:m,onSubmit:p,relative:h,preventScrollReset:g,viewTransition:b,unstable_defaultShouldRevalidate:x,...A},E)=>{let{unstable_useTransitions:T}=M.useContext(Be),_=CS(),U=_S(m,{relative:h}),V=d.toLowerCase()==="get"?"get":"post",N=typeof m=="string"&&Pg.test(m),X=H=>{if(p&&p(H),H.defaultPrevented)return;H.preventDefault();let K=H.nativeEvent.submitter,J=K?.getAttribute("formmethod")||d,Z=()=>_(K||H.currentTarget,{fetcherKey:i,method:J,navigate:o,replace:c,state:f,relative:h,preventScrollReset:g,viewTransition:b,unstable_defaultShouldRevalidate:x});T&&o!==!1?M.startTransition(()=>Z()):Z()};return M.createElement("form",{ref:E,method:V,action:U,onSubmit:l?p:X,...A,"data-discover":!N&&n==="render"?"true":void 0})});OS.displayName="Form";function DS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jg(n){let i=M.useContext(Ai);return Vt(i,DS(n)),i}function MS(n,{target:i,replace:o,state:l,preventScrollReset:c,relative:f,viewTransition:d,unstable_defaultShouldRevalidate:m,unstable_useTransitions:p}={}){let h=Lx(),g=na(),b=Kr(n,{relative:f});return M.useCallback(x=>{if(iS(x,i)){x.preventDefault();let A=o!==void 0?o:Pr(g)===Pr(b),E=()=>h(n,{replace:A,state:l,preventScrollReset:c,relative:f,viewTransition:d,unstable_defaultShouldRevalidate:m});p?M.startTransition(()=>E()):E()}},[g,h,b,o,l,i,n,c,f,d,m,p])}var RS=0,wS=()=>`__${String(++RS)}__`;function CS(){let{router:n}=jg("useSubmit"),{basename:i}=M.useContext(Be),o=Qx(),l=n.fetch,c=n.navigate;return M.useCallback(async(f,d={})=>{let{action:m,method:p,encType:h,formData:g,body:b}=lS(f,i);if(d.navigate===!1){let x=d.fetcherKey||wS();await l(x,o,d.action||m,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:g,body:b,formMethod:d.method||p,formEncType:d.encType||h,flushSync:d.flushSync})}else await c(d.action||m,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:g,body:b,formMethod:d.method||p,formEncType:d.encType||h,replace:d.replace,state:d.state,fromRouteId:o,flushSync:d.flushSync,viewTransition:d.viewTransition})},[l,c,i,o])}function _S(n,{relative:i}={}){let{basename:o}=M.useContext(Be),l=M.useContext(Dn);Vt(l,"useFormAction must be used inside a RouteContext");let[c]=l.matches.slice(-1),f={...Kr(n||".",{relative:i})},d=na();if(n==null){f.search=d.search;let m=new URLSearchParams(f.search),p=m.getAll("index");if(p.some(g=>g==="")){m.delete("index"),p.filter(b=>b).forEach(b=>m.append("index",b));let g=m.toString();f.search=g?`?${g}`:""}}return(!n||n===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(f.pathname=f.pathname==="/"?o:Tn([o,f.pathname])),Pr(f)}function zS(n,{relative:i}={}){let o=M.useContext(wg);Vt(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=jg("useViewTransitionState"),c=Kr(n,{relative:i});if(!o.isTransitioning)return!1;let f=En(o.currentLocation.pathname,l)||o.currentLocation.pathname,d=En(o.nextLocation.pathname,l)||o.nextLocation.pathname;return Ll(c.pathname,d)!=null||Ll(c.pathname,f)!=null}const Hg=M.createContext(),kS=({children:n})=>{const[i,o]=M.useState(!0);return M.useEffect(()=>{const l=document.body;i?l.classList.remove("dark"):l.classList.add("dark")},[i]),mt.jsx(Hg.Provider,{value:{isLight:i,setIsLight:o},children:n})},VS=()=>M.useContext(Hg),US="modulepreload",NS=function(n,i){return new URL(n,i).href},n0={},Qr=function(i,o,l){let c=Promise.resolve();if(o&&o.length>0){let h=function(g){return Promise.all(g.map(b=>Promise.resolve(b).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};const d=document.getElementsByTagName("link"),m=document.querySelector("meta[property=csp-nonce]"),p=m?.nonce||m?.getAttribute("nonce");c=h(o.map(g=>{if(g=NS(g,l),g in n0)return;n0[g]=!0;const b=g.endsWith(".css"),x=b?'[rel="stylesheet"]':"";if(l)for(let E=d.length-1;E>=0;E--){const T=d[E];if(T.href===g&&(!b||T.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${g}"]${x}`))return;const A=document.createElement("link");if(A.rel=b?"stylesheet":US,b||(A.as="script"),A.crossOrigin="",A.href=g,p&&A.setAttribute("nonce",p),document.head.appendChild(A),b)return new Promise((E,T)=>{A.addEventListener("load",E),A.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${g}`)))})}))}function f(d){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=d,window.dispatchEvent(m),!m.defaultPrevented)throw d}return c.then(d=>{for(const m of d||[])m.status==="rejected"&&f(m.reason);return i().catch(f)})},mf=M.createContext({});function pf(n){const i=M.useRef(null);return i.current===null&&(i.current=n()),i.current}const gf=typeof window<"u",qg=gf?M.useLayoutEffect:M.useEffect,Zl=M.createContext(null);function yf(n,i){n.indexOf(i)===-1&&n.push(i)}function vf(n,i){const o=n.indexOf(i);o>-1&&n.splice(o,1)}const An=(n,i,o)=>o>i?i:o<n?n:o;let bf=()=>{};const On={},Yg=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Gg(n){return typeof n=="object"&&n!==null}const Xg=n=>/^0[^.\s]+$/u.test(n);function xf(n){let i;return()=>(i===void 0&&(i=n()),i)}const Pe=n=>n,LS=(n,i)=>o=>i(n(o)),Jr=(...n)=>n.reduce(LS),Br=(n,i,o)=>{const l=i-n;return l===0?1:(o-n)/l};class Sf{constructor(){this.subscriptions=[]}add(i){return yf(this.subscriptions,i),()=>vf(this.subscriptions,i)}notify(i,o,l){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,o,l);else for(let f=0;f<c;f++){const d=this.subscriptions[f];d&&d(i,o,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ie=n=>n*1e3,tn=n=>n/1e3;function Zg(n,i){return i?n*(1e3/i):0}const Kg=(n,i,o)=>(((1-3*o+3*i)*n+(3*o-6*i))*n+3*i)*n,PS=1e-7,BS=12;function jS(n,i,o,l,c){let f,d,m=0;do d=i+(o-i)/2,f=Kg(d,l,c)-n,f>0?o=d:i=d;while(Math.abs(f)>PS&&++m<BS);return d}function Fr(n,i,o,l){if(n===i&&o===l)return Pe;const c=f=>jS(f,0,1,n,o);return f=>f===0||f===1?f:Kg(c(f),i,l)}const Qg=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,Jg=n=>i=>1-n(1-i),Fg=Fr(.33,1.53,.69,.99),Tf=Jg(Fg),$g=Qg(Tf),Wg=n=>(n*=2)<1?.5*Tf(n):.5*(2-Math.pow(2,-10*(n-1))),Ef=n=>1-Math.sin(Math.acos(n)),Ig=Jg(Ef),ty=Qg(Ef),HS=Fr(.42,0,1,1),qS=Fr(0,0,.58,1),ey=Fr(.42,0,.58,1),YS=n=>Array.isArray(n)&&typeof n[0]!="number",ny=n=>Array.isArray(n)&&typeof n[0]=="number",GS={linear:Pe,easeIn:HS,easeInOut:ey,easeOut:qS,circIn:Ef,circInOut:ty,circOut:Ig,backIn:Tf,backInOut:$g,backOut:Fg,anticipate:Wg},XS=n=>typeof n=="string",a0=n=>{if(ny(n)){bf(n.length===4);const[i,o,l,c]=n;return Fr(i,o,l,c)}else if(XS(n))return GS[n];return n},xl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function ZS(n,i){let o=new Set,l=new Set,c=!1,f=!1;const d=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function p(g){d.has(g)&&(h.schedule(g),n()),g(m)}const h={schedule:(g,b=!1,x=!1)=>{const E=x&&c?o:l;return b&&d.add(g),E.has(g)||E.add(g),g},cancel:g=>{l.delete(g),d.delete(g)},process:g=>{if(m=g,c){f=!0;return}c=!0,[o,l]=[l,o],o.forEach(p),o.clear(),c=!1,f&&(f=!1,h.process(g))}};return h}const KS=40;function ay(n,i){let o=!1,l=!0;const c={delta:0,timestamp:0,isProcessing:!1},f=()=>o=!0,d=xl.reduce((N,X)=>(N[X]=ZS(f),N),{}),{setup:m,read:p,resolveKeyframes:h,preUpdate:g,update:b,preRender:x,render:A,postRender:E}=d,T=()=>{const N=On.useManualTiming?c.timestamp:performance.now();o=!1,On.useManualTiming||(c.delta=l?1e3/60:Math.max(Math.min(N-c.timestamp,KS),1)),c.timestamp=N,c.isProcessing=!0,m.process(c),p.process(c),h.process(c),g.process(c),b.process(c),x.process(c),A.process(c),E.process(c),c.isProcessing=!1,o&&i&&(l=!1,n(T))},_=()=>{o=!0,l=!0,c.isProcessing||n(T)};return{schedule:xl.reduce((N,X)=>{const H=d[X];return N[X]=(K,J=!1,Z=!1)=>(o||_(),H.schedule(K,J,Z)),N},{}),cancel:N=>{for(let X=0;X<xl.length;X++)d[xl[X]].cancel(N)},state:c,steps:d}}const{schedule:_t,cancel:ta,state:ae,steps:Sc}=ay(typeof requestAnimationFrame<"u"?requestAnimationFrame:Pe,!0);let kl;function QS(){kl=void 0}const pe={now:()=>(kl===void 0&&pe.set(ae.isProcessing||On.useManualTiming?ae.timestamp:performance.now()),kl),set:n=>{kl=n,queueMicrotask(QS)}},iy=n=>i=>typeof i=="string"&&i.startsWith(n),Af=iy("--"),JS=iy("var(--"),Of=n=>JS(n)?FS.test(n.split("/*")[0].trim()):!1,FS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Oi={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},jr={...Oi,transform:n=>An(0,1,n)},Sl={...Oi,default:1},kr=n=>Math.round(n*1e5)/1e5,Df=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function $S(n){return n==null}const WS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Mf=(n,i)=>o=>!!(typeof o=="string"&&WS.test(o)&&o.startsWith(n)||i&&!$S(o)&&Object.prototype.hasOwnProperty.call(o,i)),ry=(n,i,o)=>l=>{if(typeof l!="string")return l;const[c,f,d,m]=l.match(Df);return{[n]:parseFloat(c),[i]:parseFloat(f),[o]:parseFloat(d),alpha:m!==void 0?parseFloat(m):1}},IS=n=>An(0,255,n),Tc={...Oi,transform:n=>Math.round(IS(n))},Aa={test:Mf("rgb","red"),parse:ry("red","green","blue"),transform:({red:n,green:i,blue:o,alpha:l=1})=>"rgba("+Tc.transform(n)+", "+Tc.transform(i)+", "+Tc.transform(o)+", "+kr(jr.transform(l))+")"};function t5(n){let i="",o="",l="",c="";return n.length>5?(i=n.substring(1,3),o=n.substring(3,5),l=n.substring(5,7),c=n.substring(7,9)):(i=n.substring(1,2),o=n.substring(2,3),l=n.substring(3,4),c=n.substring(4,5),i+=i,o+=o,l+=l,c+=c),{red:parseInt(i,16),green:parseInt(o,16),blue:parseInt(l,16),alpha:c?parseInt(c,16)/255:1}}const Bc={test:Mf("#"),parse:t5,transform:Aa.transform},$r=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),In=$r("deg"),en=$r("%"),rt=$r("px"),e5=$r("vh"),n5=$r("vw"),i0={...en,parse:n=>en.parse(n)/100,transform:n=>en.transform(n*100)},pi={test:Mf("hsl","hue"),parse:ry("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:o,alpha:l=1})=>"hsla("+Math.round(n)+", "+en.transform(kr(i))+", "+en.transform(kr(o))+", "+kr(jr.transform(l))+")"},Yt={test:n=>Aa.test(n)||Bc.test(n)||pi.test(n),parse:n=>Aa.test(n)?Aa.parse(n):pi.test(n)?pi.parse(n):Bc.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Aa.transform(n):pi.transform(n),getAnimatableNone:n=>{const i=Yt.parse(n);return i.alpha=0,Yt.transform(i)}},a5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function i5(n){return isNaN(n)&&typeof n=="string"&&(n.match(Df)?.length||0)+(n.match(a5)?.length||0)>0}const oy="number",ly="color",r5="var",o5="var(",r0="${}",l5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Hr(n){const i=n.toString(),o=[],l={color:[],number:[],var:[]},c=[];let f=0;const m=i.replace(l5,p=>(Yt.test(p)?(l.color.push(f),c.push(ly),o.push(Yt.parse(p))):p.startsWith(o5)?(l.var.push(f),c.push(r5),o.push(p)):(l.number.push(f),c.push(oy),o.push(parseFloat(p))),++f,r0)).split(r0);return{values:o,split:m,indexes:l,types:c}}function sy(n){return Hr(n).values}function uy(n){const{split:i,types:o}=Hr(n),l=i.length;return c=>{let f="";for(let d=0;d<l;d++)if(f+=i[d],c[d]!==void 0){const m=o[d];m===oy?f+=kr(c[d]):m===ly?f+=Yt.transform(c[d]):f+=c[d]}return f}}const s5=n=>typeof n=="number"?0:Yt.test(n)?Yt.getAnimatableNone(n):n;function u5(n){const i=sy(n);return uy(n)(i.map(s5))}const ea={test:i5,parse:sy,createTransformer:uy,getAnimatableNone:u5};function Ec(n,i,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(i-n)*6*o:o<1/2?i:o<2/3?n+(i-n)*(2/3-o)*6:n}function c5({hue:n,saturation:i,lightness:o,alpha:l}){n/=360,i/=100,o/=100;let c=0,f=0,d=0;if(!i)c=f=d=o;else{const m=o<.5?o*(1+i):o+i-o*i,p=2*o-m;c=Ec(p,m,n+1/3),f=Ec(p,m,n),d=Ec(p,m,n-1/3)}return{red:Math.round(c*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:l}}function Pl(n,i){return o=>o>0?i:n}const kt=(n,i,o)=>n+(i-n)*o,Ac=(n,i,o)=>{const l=n*n,c=o*(i*i-l)+l;return c<0?0:Math.sqrt(c)},f5=[Bc,Aa,pi],d5=n=>f5.find(i=>i.test(n));function o0(n){const i=d5(n);if(!i)return!1;let o=i.parse(n);return i===pi&&(o=c5(o)),o}const l0=(n,i)=>{const o=o0(n),l=o0(i);if(!o||!l)return Pl(n,i);const c={...o};return f=>(c.red=Ac(o.red,l.red,f),c.green=Ac(o.green,l.green,f),c.blue=Ac(o.blue,l.blue,f),c.alpha=kt(o.alpha,l.alpha,f),Aa.transform(c))},jc=new Set(["none","hidden"]);function h5(n,i){return jc.has(n)?o=>o<=0?n:i:o=>o>=1?i:n}function m5(n,i){return o=>kt(n,i,o)}function Rf(n){return typeof n=="number"?m5:typeof n=="string"?Of(n)?Pl:Yt.test(n)?l0:y5:Array.isArray(n)?cy:typeof n=="object"?Yt.test(n)?l0:p5:Pl}function cy(n,i){const o=[...n],l=o.length,c=n.map((f,d)=>Rf(f)(f,i[d]));return f=>{for(let d=0;d<l;d++)o[d]=c[d](f);return o}}function p5(n,i){const o={...n,...i},l={};for(const c in o)n[c]!==void 0&&i[c]!==void 0&&(l[c]=Rf(n[c])(n[c],i[c]));return c=>{for(const f in l)o[f]=l[f](c);return o}}function g5(n,i){const o=[],l={color:0,var:0,number:0};for(let c=0;c<i.values.length;c++){const f=i.types[c],d=n.indexes[f][l[f]],m=n.values[d]??0;o[c]=m,l[f]++}return o}const y5=(n,i)=>{const o=ea.createTransformer(i),l=Hr(n),c=Hr(i);return l.indexes.var.length===c.indexes.var.length&&l.indexes.color.length===c.indexes.color.length&&l.indexes.number.length>=c.indexes.number.length?jc.has(n)&&!c.values.length||jc.has(i)&&!l.values.length?h5(n,i):Jr(cy(g5(l,c),c.values),o):Pl(n,i)};function fy(n,i,o){return typeof n=="number"&&typeof i=="number"&&typeof o=="number"?kt(n,i,o):Rf(n)(n,i)}const v5=n=>{const i=({timestamp:o})=>n(o);return{start:(o=!0)=>_t.update(i,o),stop:()=>ta(i),now:()=>ae.isProcessing?ae.timestamp:pe.now()}},dy=(n,i,o=10)=>{let l="";const c=Math.max(Math.round(i/o),2);for(let f=0;f<c;f++)l+=Math.round(n(f/(c-1))*1e4)/1e4+", ";return`linear(${l.substring(0,l.length-2)})`},Bl=2e4;function wf(n){let i=0;const o=50;let l=n.next(i);for(;!l.done&&i<Bl;)i+=o,l=n.next(i);return i>=Bl?1/0:i}function b5(n,i=100,o){const l=o({...n,keyframes:[0,i]}),c=Math.min(wf(l),Bl);return{type:"keyframes",ease:f=>l.next(c*f).value/i,duration:tn(c)}}const x5=5;function hy(n,i,o){const l=Math.max(i-x5,0);return Zg(o-n(l),i-l)}const Lt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Oc=.001;function S5({duration:n=Lt.duration,bounce:i=Lt.bounce,velocity:o=Lt.velocity,mass:l=Lt.mass}){let c,f,d=1-i;d=An(Lt.minDamping,Lt.maxDamping,d),n=An(Lt.minDuration,Lt.maxDuration,tn(n)),d<1?(c=h=>{const g=h*d,b=g*n,x=g-o,A=Hc(h,d),E=Math.exp(-b);return Oc-x/A*E},f=h=>{const b=h*d*n,x=b*o+o,A=Math.pow(d,2)*Math.pow(h,2)*n,E=Math.exp(-b),T=Hc(Math.pow(h,2),d);return(-c(h)+Oc>0?-1:1)*((x-A)*E)/T}):(c=h=>{const g=Math.exp(-h*n),b=(h-o)*n+1;return-Oc+g*b},f=h=>{const g=Math.exp(-h*n),b=(o-h)*(n*n);return g*b});const m=5/n,p=E5(c,f,m);if(n=Ie(n),isNaN(p))return{stiffness:Lt.stiffness,damping:Lt.damping,duration:n};{const h=Math.pow(p,2)*l;return{stiffness:h,damping:d*2*Math.sqrt(l*h),duration:n}}}const T5=12;function E5(n,i,o){let l=o;for(let c=1;c<T5;c++)l=l-n(l)/i(l);return l}function Hc(n,i){return n*Math.sqrt(1-i*i)}const A5=["duration","bounce"],O5=["stiffness","damping","mass"];function s0(n,i){return i.some(o=>n[o]!==void 0)}function D5(n){let i={velocity:Lt.velocity,stiffness:Lt.stiffness,damping:Lt.damping,mass:Lt.mass,isResolvedFromDuration:!1,...n};if(!s0(n,O5)&&s0(n,A5))if(n.visualDuration){const o=n.visualDuration,l=2*Math.PI/(o*1.2),c=l*l,f=2*An(.05,1,1-(n.bounce||0))*Math.sqrt(c);i={...i,mass:Lt.mass,stiffness:c,damping:f}}else{const o=S5(n);i={...i,...o,mass:Lt.mass},i.isResolvedFromDuration=!0}return i}function jl(n=Lt.visualDuration,i=Lt.bounce){const o=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:l,restDelta:c}=o;const f=o.keyframes[0],d=o.keyframes[o.keyframes.length-1],m={done:!1,value:f},{stiffness:p,damping:h,mass:g,duration:b,velocity:x,isResolvedFromDuration:A}=D5({...o,velocity:-tn(o.velocity||0)}),E=x||0,T=h/(2*Math.sqrt(p*g)),_=d-f,U=tn(Math.sqrt(p/g)),V=Math.abs(_)<5;l||(l=V?Lt.restSpeed.granular:Lt.restSpeed.default),c||(c=V?Lt.restDelta.granular:Lt.restDelta.default);let N;if(T<1){const H=Hc(U,T);N=K=>{const J=Math.exp(-T*U*K);return d-J*((E+T*U*_)/H*Math.sin(H*K)+_*Math.cos(H*K))}}else if(T===1)N=H=>d-Math.exp(-U*H)*(_+(E+U*_)*H);else{const H=U*Math.sqrt(T*T-1);N=K=>{const J=Math.exp(-T*U*K),Z=Math.min(H*K,300);return d-J*((E+T*U*_)*Math.sinh(Z)+H*_*Math.cosh(Z))/H}}const X={calculatedDuration:A&&b||null,next:H=>{const K=N(H);if(A)m.done=H>=b;else{let J=H===0?E:0;T<1&&(J=H===0?Ie(E):hy(N,H,K));const Z=Math.abs(J)<=l,at=Math.abs(d-K)<=c;m.done=Z&&at}return m.value=m.done?d:K,m},toString:()=>{const H=Math.min(wf(X),Bl),K=dy(J=>X.next(H*J).value,H,30);return H+"ms "+K},toTransition:()=>{}};return X}jl.applyToOptions=n=>{const i=b5(n,100,jl);return n.ease=i.ease,n.duration=Ie(i.duration),n.type="keyframes",n};function qc({keyframes:n,velocity:i=0,power:o=.8,timeConstant:l=325,bounceDamping:c=10,bounceStiffness:f=500,modifyTarget:d,min:m,max:p,restDelta:h=.5,restSpeed:g}){const b=n[0],x={done:!1,value:b},A=Z=>m!==void 0&&Z<m||p!==void 0&&Z>p,E=Z=>m===void 0?p:p===void 0||Math.abs(m-Z)<Math.abs(p-Z)?m:p;let T=o*i;const _=b+T,U=d===void 0?_:d(_);U!==_&&(T=U-b);const V=Z=>-T*Math.exp(-Z/l),N=Z=>U+V(Z),X=Z=>{const at=V(Z),St=N(Z);x.done=Math.abs(at)<=h,x.value=x.done?U:St};let H,K;const J=Z=>{A(x.value)&&(H=Z,K=jl({keyframes:[x.value,E(x.value)],velocity:hy(N,Z,x.value),damping:c,stiffness:f,restDelta:h,restSpeed:g}))};return J(0),{calculatedDuration:null,next:Z=>{let at=!1;return!K&&H===void 0&&(at=!0,X(Z),J(Z)),H!==void 0&&Z>=H?K.next(Z-H):(!at&&X(Z),x)}}}function M5(n,i,o){const l=[],c=o||On.mix||fy,f=n.length-1;for(let d=0;d<f;d++){let m=c(n[d],n[d+1]);if(i){const p=Array.isArray(i)?i[d]||Pe:i;m=Jr(p,m)}l.push(m)}return l}function R5(n,i,{clamp:o=!0,ease:l,mixer:c}={}){const f=n.length;if(bf(f===i.length),f===1)return()=>i[0];if(f===2&&i[0]===i[1])return()=>i[1];const d=n[0]===n[1];n[0]>n[f-1]&&(n=[...n].reverse(),i=[...i].reverse());const m=M5(i,l,c),p=m.length,h=g=>{if(d&&g<n[0])return i[0];let b=0;if(p>1)for(;b<n.length-2&&!(g<n[b+1]);b++);const x=Br(n[b],n[b+1],g);return m[b](x)};return o?g=>h(An(n[0],n[f-1],g)):h}function w5(n,i){const o=n[n.length-1];for(let l=1;l<=i;l++){const c=Br(0,i,l);n.push(kt(o,1,c))}}function C5(n){const i=[0];return w5(i,n.length-1),i}function _5(n,i){return n.map(o=>o*i)}function z5(n,i){return n.map(()=>i||ey).splice(0,n.length-1)}function Vr({duration:n=300,keyframes:i,times:o,ease:l="easeInOut"}){const c=YS(l)?l.map(a0):a0(l),f={done:!1,value:i[0]},d=_5(o&&o.length===i.length?o:C5(i),n),m=R5(d,i,{ease:Array.isArray(c)?c:z5(i,c)});return{calculatedDuration:n,next:p=>(f.value=m(p),f.done=p>=n,f)}}const k5=n=>n!==null;function Cf(n,{repeat:i,repeatType:o="loop"},l,c=1){const f=n.filter(k5),m=c<0||i&&o!=="loop"&&i%2===1?0:f.length-1;return!m||l===void 0?f[m]:l}const V5={decay:qc,inertia:qc,tween:Vr,keyframes:Vr,spring:jl};function my(n){typeof n.type=="string"&&(n.type=V5[n.type])}class _f{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,o){return this.finished.then(i,o)}}const U5=n=>n/100;class zf extends _f{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:o}=this.options;o&&o.updatedAt!==pe.now()&&this.tick(pe.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;my(i);const{type:o=Vr,repeat:l=0,repeatDelay:c=0,repeatType:f,velocity:d=0}=i;let{keyframes:m}=i;const p=o||Vr;p!==Vr&&typeof m[0]!="number"&&(this.mixKeyframes=Jr(U5,fy(m[0],m[1])),m=[0,100]);const h=p({...i,keyframes:m});f==="mirror"&&(this.mirroredGenerator=p({...i,keyframes:[...m].reverse(),velocity:-d})),h.calculatedDuration===null&&(h.calculatedDuration=wf(h));const{calculatedDuration:g}=h;this.calculatedDuration=g,this.resolvedDuration=g+c,this.totalDuration=this.resolvedDuration*(l+1)-c,this.generator=h}updateTime(i){const o=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(i,o=!1){const{generator:l,totalDuration:c,mixKeyframes:f,mirroredGenerator:d,resolvedDuration:m,calculatedDuration:p}=this;if(this.startTime===null)return l.next(0);const{delay:h=0,keyframes:g,repeat:b,repeatType:x,repeatDelay:A,type:E,onUpdate:T,finalKeyframe:_}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-c/this.speed,this.startTime)),o?this.currentTime=i:this.updateTime(i);const U=this.currentTime-h*(this.playbackSpeed>=0?1:-1),V=this.playbackSpeed>=0?U<0:U>c;this.currentTime=Math.max(U,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let N=this.currentTime,X=l;if(b){const Z=Math.min(this.currentTime,c)/m;let at=Math.floor(Z),St=Z%1;!St&&Z>=1&&(St=1),St===1&&at--,at=Math.min(at,b+1),at%2&&(x==="reverse"?(St=1-St,A&&(St-=A/m)):x==="mirror"&&(X=d)),N=An(0,1,St)*m}const H=V?{done:!1,value:g[0]}:X.next(N);f&&(H.value=f(H.value));let{done:K}=H;!V&&p!==null&&(K=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const J=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&K);return J&&E!==qc&&(H.value=Cf(g,this.options,_,this.speed)),T&&T(H.value),J&&this.finish(),H}then(i,o){return this.finished.then(i,o)}get duration(){return tn(this.calculatedDuration)}get time(){return tn(this.currentTime)}set time(i){i=Ie(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(pe.now());const o=this.playbackSpeed!==i;this.playbackSpeed=i,o&&(this.time=tn(this.currentTime))}play(){if(this.isStopped)return;const{driver:i=v5,startTime:o}=this.options;this.driver||(this.driver=i(c=>this.tick(c))),this.options.onPlay?.();const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=o??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(pe.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),i.observe(this)}}function N5(n){for(let i=1;i<n.length;i++)n[i]??(n[i]=n[i-1])}const Oa=n=>n*180/Math.PI,Yc=n=>{const i=Oa(Math.atan2(n[1],n[0]));return Gc(i)},L5={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Yc,rotateZ:Yc,skewX:n=>Oa(Math.atan(n[1])),skewY:n=>Oa(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Gc=n=>(n=n%360,n<0&&(n+=360),n),u0=Yc,c0=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),f0=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),P5={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:c0,scaleY:f0,scale:n=>(c0(n)+f0(n))/2,rotateX:n=>Gc(Oa(Math.atan2(n[6],n[5]))),rotateY:n=>Gc(Oa(Math.atan2(-n[2],n[0]))),rotateZ:u0,rotate:u0,skewX:n=>Oa(Math.atan(n[4])),skewY:n=>Oa(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Xc(n){return n.includes("scale")?1:0}function Zc(n,i){if(!n||n==="none")return Xc(i);const o=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,c;if(o)l=P5,c=o;else{const m=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=L5,c=m}if(!c)return Xc(i);const f=l[i],d=c[1].split(",").map(j5);return typeof f=="function"?f(d):d[f]}const B5=(n,i)=>{const{transform:o="none"}=getComputedStyle(n);return Zc(o,i)};function j5(n){return parseFloat(n.trim())}const Di=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Mi=new Set(Di),d0=n=>n===Oi||n===rt,H5=new Set(["x","y","z"]),q5=Di.filter(n=>!H5.has(n));function Y5(n){const i=[];return q5.forEach(o=>{const l=n.getValue(o);l!==void 0&&(i.push([o,l.get()]),l.set(o.startsWith("scale")?1:0))}),i}const Da={width:({x:n},{paddingLeft:i="0",paddingRight:o="0"})=>n.max-n.min-parseFloat(i)-parseFloat(o),height:({y:n},{paddingTop:i="0",paddingBottom:o="0"})=>n.max-n.min-parseFloat(i)-parseFloat(o),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>Zc(i,"x"),y:(n,{transform:i})=>Zc(i,"y")};Da.translateX=Da.x;Da.translateY=Da.y;const Ma=new Set;let Kc=!1,Qc=!1,Jc=!1;function py(){if(Qc){const n=Array.from(Ma).filter(l=>l.needsMeasurement),i=new Set(n.map(l=>l.element)),o=new Map;i.forEach(l=>{const c=Y5(l);c.length&&(o.set(l,c),l.render())}),n.forEach(l=>l.measureInitialState()),i.forEach(l=>{l.render();const c=o.get(l);c&&c.forEach(([f,d])=>{l.getValue(f)?.set(d)})}),n.forEach(l=>l.measureEndState()),n.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}Qc=!1,Kc=!1,Ma.forEach(n=>n.complete(Jc)),Ma.clear()}function gy(){Ma.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Qc=!0)})}function G5(){Jc=!0,gy(),py(),Jc=!1}class kf{constructor(i,o,l,c,f,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=o,this.name=l,this.motionValue=c,this.element=f,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Ma.add(this),Kc||(Kc=!0,_t.read(gy),_t.resolveKeyframes(py))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:o,element:l,motionValue:c}=this;if(i[0]===null){const f=c?.get(),d=i[i.length-1];if(f!==void 0)i[0]=f;else if(l&&o){const m=l.readValue(o,d);m!=null&&(i[0]=m)}i[0]===void 0&&(i[0]=d),c&&f===void 0&&c.set(i[0])}N5(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),Ma.delete(this)}cancel(){this.state==="scheduled"&&(Ma.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const X5=n=>n.startsWith("--");function Z5(n,i,o){X5(i)?n.style.setProperty(i,o):n.style[i]=o}const K5=xf(()=>window.ScrollTimeline!==void 0),Q5={};function J5(n,i){const o=xf(n);return()=>Q5[i]??o()}const yy=J5(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),_r=([n,i,o,l])=>`cubic-bezier(${n}, ${i}, ${o}, ${l})`,h0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:_r([0,.65,.55,1]),circOut:_r([.55,0,1,.45]),backIn:_r([.31,.01,.66,-.59]),backOut:_r([.33,1.53,.69,.99])};function vy(n,i){if(n)return typeof n=="function"?yy()?dy(n,i):"ease-out":ny(n)?_r(n):Array.isArray(n)?n.map(o=>vy(o,i)||h0.easeOut):h0[n]}function F5(n,i,o,{delay:l=0,duration:c=300,repeat:f=0,repeatType:d="loop",ease:m="easeOut",times:p}={},h=void 0){const g={[i]:o};p&&(g.offset=p);const b=vy(m,c);Array.isArray(b)&&(g.easing=b);const x={delay:l,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"};return h&&(x.pseudoElement=h),n.animate(g,x)}function by(n){return typeof n=="function"&&"applyToOptions"in n}function $5({type:n,...i}){return by(n)&&yy()?n.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class W5 extends _f{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,!i)return;const{element:o,name:l,keyframes:c,pseudoElement:f,allowFlatten:d=!1,finalKeyframe:m,onComplete:p}=i;this.isPseudoElement=!!f,this.allowFlatten=d,this.options=i,bf(typeof i.type!="string");const h=$5(i);this.animation=F5(o,l,c,h,f),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const g=Cf(c,this.options,m,this.speed);this.updateMotionValue?this.updateMotionValue(g):Z5(o,l,g),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const i=this.animation.effect?.getComputedTiming?.().duration||0;return tn(Number(i))}get time(){return tn(Number(this.animation.currentTime)||0)}set time(i){this.finishedTime=null,this.animation.currentTime=Ie(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(i){this.animation.startTime=i}attachTimeline({timeline:i,observe:o}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,i&&K5()?(this.animation.timeline=i,Pe):o(this)}}const xy={anticipate:Wg,backInOut:$g,circInOut:ty};function I5(n){return n in xy}function t2(n){typeof n.ease=="string"&&I5(n.ease)&&(n.ease=xy[n.ease])}const m0=10;class e2 extends W5{constructor(i){t2(i),my(i),super(i),i.startTime&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:o,onUpdate:l,onComplete:c,element:f,...d}=this.options;if(!o)return;if(i!==void 0){o.set(i);return}const m=new zf({...d,autoplay:!1}),p=Ie(this.finishedTime??this.time);o.setWithVelocity(m.sample(p-m0).value,m.sample(p).value,m0),m.stop()}}const p0=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ea.test(n)||n==="0")&&!n.startsWith("url("));function n2(n){const i=n[0];if(n.length===1)return!0;for(let o=0;o<n.length;o++)if(n[o]!==i)return!0}function a2(n,i,o,l){const c=n[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const f=n[n.length-1],d=p0(c,i),m=p0(f,i);return!d||!m?!1:n2(n)||(o==="spring"||by(o))&&l}function Fc(n){n.duration=0,n.type}const i2=new Set(["opacity","clipPath","filter","transform"]),r2=xf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function o2(n){const{motionValue:i,name:o,repeatDelay:l,repeatType:c,damping:f,type:d}=n;if(!(i?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:h}=i.owner.getProps();return r2()&&o&&i2.has(o)&&(o!=="transform"||!h)&&!p&&!l&&c!=="mirror"&&f!==0&&d!=="inertia"}const l2=40;class s2 extends _f{constructor({autoplay:i=!0,delay:o=0,type:l="keyframes",repeat:c=0,repeatDelay:f=0,repeatType:d="loop",keyframes:m,name:p,motionValue:h,element:g,...b}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=pe.now();const x={autoplay:i,delay:o,type:l,repeat:c,repeatDelay:f,repeatType:d,name:p,motionValue:h,element:g,...b},A=g?.KeyframeResolver||kf;this.keyframeResolver=new A(m,(E,T,_)=>this.onKeyframesResolved(E,T,x,!_),p,h,g),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(i,o,l,c){this.keyframeResolver=void 0;const{name:f,type:d,velocity:m,delay:p,isHandoff:h,onUpdate:g}=l;this.resolvedAt=pe.now(),a2(i,f,d,m)||((On.instantAnimations||!p)&&g?.(Cf(i,l,o)),i[0]=i[i.length-1],Fc(l),l.repeat=0);const x={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>l2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...l,keyframes:i},A=!h&&o2(x)?new e2({...x,element:x.motionValue.owner.current}):new zf(x);A.finished.then(()=>this.notifyFinished()).catch(Pe),this.pendingTimeline&&(this.stopTimeline=A.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=A}get finished(){return this._animation?this.animation.finished:this._finished}then(i,o){return this.finished.finally(i).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),G5()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const u2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function c2(n){const i=u2.exec(n);if(!i)return[,];const[,o,l,c]=i;return[`--${o??l}`,c]}function Sy(n,i,o=1){const[l,c]=c2(n);if(!l)return;const f=window.getComputedStyle(i).getPropertyValue(l);if(f){const d=f.trim();return Yg(d)?parseFloat(d):d}return Of(c)?Sy(c,i,o+1):c}function Vf(n,i){return n?.[i]??n?.default??n}const Ty=new Set(["width","height","top","left","right","bottom",...Di]),f2={test:n=>n==="auto",parse:n=>n},Ey=n=>i=>i.test(n),Ay=[Oi,rt,en,In,n5,e5,f2],g0=n=>Ay.find(Ey(n));function d2(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Xg(n):!0}const h2=new Set(["brightness","contrast","saturate","opacity"]);function m2(n){const[i,o]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[l]=o.match(Df)||[];if(!l)return n;const c=o.replace(l,"");let f=h2.has(i)?1:0;return l!==o&&(f*=100),i+"("+f+c+")"}const p2=/\b([a-z-]*)\(.*?\)/gu,$c={...ea,getAnimatableNone:n=>{const i=n.match(p2);return i?i.map(m2).join(" "):n}},y0={...Oi,transform:Math.round},g2={rotate:In,rotateX:In,rotateY:In,rotateZ:In,scale:Sl,scaleX:Sl,scaleY:Sl,scaleZ:Sl,skew:In,skewX:In,skewY:In,distance:rt,translateX:rt,translateY:rt,translateZ:rt,x:rt,y:rt,z:rt,perspective:rt,transformPerspective:rt,opacity:jr,originX:i0,originY:i0,originZ:rt},Uf={borderWidth:rt,borderTopWidth:rt,borderRightWidth:rt,borderBottomWidth:rt,borderLeftWidth:rt,borderRadius:rt,radius:rt,borderTopLeftRadius:rt,borderTopRightRadius:rt,borderBottomRightRadius:rt,borderBottomLeftRadius:rt,width:rt,maxWidth:rt,height:rt,maxHeight:rt,top:rt,right:rt,bottom:rt,left:rt,padding:rt,paddingTop:rt,paddingRight:rt,paddingBottom:rt,paddingLeft:rt,margin:rt,marginTop:rt,marginRight:rt,marginBottom:rt,marginLeft:rt,backgroundPositionX:rt,backgroundPositionY:rt,...g2,zIndex:y0,fillOpacity:jr,strokeOpacity:jr,numOctaves:y0},y2={...Uf,color:Yt,backgroundColor:Yt,outlineColor:Yt,fill:Yt,stroke:Yt,borderColor:Yt,borderTopColor:Yt,borderRightColor:Yt,borderBottomColor:Yt,borderLeftColor:Yt,filter:$c,WebkitFilter:$c},Oy=n=>y2[n];function Dy(n,i){let o=Oy(n);return o!==$c&&(o=ea),o.getAnimatableNone?o.getAnimatableNone(i):void 0}const v2=new Set(["auto","none","0"]);function b2(n,i,o){let l=0,c;for(;l<n.length&&!c;){const f=n[l];typeof f=="string"&&!v2.has(f)&&Hr(f).values.length&&(c=n[l]),l++}if(c&&o)for(const f of i)n[f]=Dy(o,c)}class x2 extends kf{constructor(i,o,l,c,f){super(i,o,l,c,f,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:o,name:l}=this;if(!o||!o.current)return;super.readKeyframes();for(let p=0;p<i.length;p++){let h=i[p];if(typeof h=="string"&&(h=h.trim(),Of(h))){const g=Sy(h,o.current);g!==void 0&&(i[p]=g),p===i.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Ty.has(l)||i.length!==2)return;const[c,f]=i,d=g0(c),m=g0(f);if(d!==m)if(d0(d)&&d0(m))for(let p=0;p<i.length;p++){const h=i[p];typeof h=="string"&&(i[p]=parseFloat(h))}else Da[l]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:o}=this,l=[];for(let c=0;c<i.length;c++)(i[c]===null||d2(i[c]))&&l.push(c);l.length&&b2(i,l,o)}measureInitialState(){const{element:i,unresolvedKeyframes:o,name:l}=this;if(!i||!i.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Da[l](i.measureViewportBox(),window.getComputedStyle(i.current)),o[0]=this.measuredOrigin;const c=o[o.length-1];c!==void 0&&i.getValue(l,c).jump(c,!1)}measureEndState(){const{element:i,name:o,unresolvedKeyframes:l}=this;if(!i||!i.current)return;const c=i.getValue(o);c&&c.jump(this.measuredOrigin,!1);const f=l.length-1,d=l[f];l[f]=Da[o](i.measureViewportBox(),window.getComputedStyle(i.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),this.removedTransforms?.length&&this.removedTransforms.forEach(([m,p])=>{i.getValue(m).set(p)}),this.resolveNoneKeyframes()}}function S2(n,i,o){if(n instanceof EventTarget)return[n];if(typeof n=="string"){const c=document.querySelectorAll(n);return c?Array.from(c):[]}return Array.from(n)}const My=(n,i)=>i&&typeof n=="number"?i.transform(n):n;function Ry(n){return Gg(n)&&"offsetHeight"in n}const v0=30,T2=n=>!isNaN(parseFloat(n));class E2{constructor(i,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=l=>{const c=pe.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=o.owner}setCurrent(i){this.current=i,this.updatedAt=pe.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=T2(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,o){this.events[i]||(this.events[i]=new Sf);const l=this.events[i].add(o);return i==="change"?()=>{l(),_t.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,o){this.passiveEffect=i,this.stopPassiveEffect=o}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,o,l){this.set(o),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-l}jump(i,o=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=pe.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>v0)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,v0);return Zg(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(i){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=i(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Si(n,i){return new E2(n,i)}const{schedule:Nf}=ay(queueMicrotask,!1),Ge={x:!1,y:!1};function wy(){return Ge.x||Ge.y}function A2(n){return n==="x"||n==="y"?Ge[n]?null:(Ge[n]=!0,()=>{Ge[n]=!1}):Ge.x||Ge.y?null:(Ge.x=Ge.y=!0,()=>{Ge.x=Ge.y=!1})}function Cy(n,i){const o=S2(n),l=new AbortController,c={passive:!0,...i,signal:l.signal};return[o,c,()=>l.abort()]}function b0(n){return!(n.pointerType==="touch"||wy())}function O2(n,i,o={}){const[l,c,f]=Cy(n,o),d=m=>{if(!b0(m))return;const{target:p}=m,h=i(p,m);if(typeof h!="function"||!p)return;const g=b=>{b0(b)&&(h(b),p.removeEventListener("pointerleave",g))};p.addEventListener("pointerleave",g,c)};return l.forEach(m=>{m.addEventListener("pointerenter",d,c)}),f}const _y=(n,i)=>i?n===i?!0:_y(n,i.parentElement):!1,Lf=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,D2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function M2(n){return D2.has(n.tagName)||n.tabIndex!==-1}const Vl=new WeakSet;function x0(n){return i=>{i.key==="Enter"&&n(i)}}function Dc(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const R2=(n,i)=>{const o=n.currentTarget;if(!o)return;const l=x0(()=>{if(Vl.has(o))return;Dc(o,"down");const c=x0(()=>{Dc(o,"up")}),f=()=>Dc(o,"cancel");o.addEventListener("keyup",c,i),o.addEventListener("blur",f,i)});o.addEventListener("keydown",l,i),o.addEventListener("blur",()=>o.removeEventListener("keydown",l),i)};function S0(n){return Lf(n)&&!wy()}function w2(n,i,o={}){const[l,c,f]=Cy(n,o),d=m=>{const p=m.currentTarget;if(!S0(m))return;Vl.add(p);const h=i(p,m),g=(A,E)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",x),Vl.has(p)&&Vl.delete(p),S0(A)&&typeof h=="function"&&h(A,{success:E})},b=A=>{g(A,p===window||p===document||o.useGlobalTarget||_y(p,A.target))},x=A=>{g(A,!1)};window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",x,c)};return l.forEach(m=>{(o.useGlobalTarget?window:m).addEventListener("pointerdown",d,c),Ry(m)&&(m.addEventListener("focus",h=>R2(h,c)),!M2(m)&&!m.hasAttribute("tabindex")&&(m.tabIndex=0))}),f}function zy(n){return Gg(n)&&"ownerSVGElement"in n}function C2(n){return zy(n)&&n.tagName==="svg"}const le=n=>!!(n&&n.getVelocity),_2=[...Ay,Yt,ea],z2=n=>_2.find(Ey(n)),Pf=M.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class k2 extends M.Component{getSnapshotBeforeUpdate(i){const o=this.props.childRef.current;if(o&&i.isPresent&&!this.props.isPresent){const l=o.offsetParent,c=Ry(l)&&l.offsetWidth||0,f=this.props.sizeRef.current;f.height=o.offsetHeight||0,f.width=o.offsetWidth||0,f.top=o.offsetTop,f.left=o.offsetLeft,f.right=c-f.width-f.left}return null}componentDidUpdate(){}render(){return this.props.children}}function V2({children:n,isPresent:i,anchorX:o,root:l}){const c=M.useId(),f=M.useRef(null),d=M.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:m}=M.useContext(Pf);return M.useInsertionEffect(()=>{const{width:p,height:h,top:g,left:b,right:x}=d.current;if(i||!f.current||!p||!h)return;const A=o==="left"?`left: ${b}`:`right: ${x}`;f.current.dataset.motionPopId=c;const E=document.createElement("style");m&&(E.nonce=m);const T=l??document.head;return T.appendChild(E),E.sheet&&E.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${h}px !important;
            ${A}px !important;
            top: ${g}px !important;
          }
        `),()=>{T.contains(E)&&T.removeChild(E)}},[i]),mt.jsx(k2,{isPresent:i,childRef:f,sizeRef:d,children:M.cloneElement(n,{ref:f})})}const U2=({children:n,initial:i,isPresent:o,onExitComplete:l,custom:c,presenceAffectsLayout:f,mode:d,anchorX:m,root:p})=>{const h=pf(N2),g=M.useId();let b=!0,x=M.useMemo(()=>(b=!1,{id:g,initial:i,isPresent:o,custom:c,onExitComplete:A=>{h.set(A,!0);for(const E of h.values())if(!E)return;l&&l()},register:A=>(h.set(A,!1),()=>h.delete(A))}),[o,h,l]);return f&&b&&(x={...x}),M.useMemo(()=>{h.forEach((A,E)=>h.set(E,!1))},[o]),M.useEffect(()=>{!o&&!h.size&&l&&l()},[o]),d==="popLayout"&&(n=mt.jsx(V2,{isPresent:o,anchorX:m,root:p,children:n})),mt.jsx(Zl.Provider,{value:x,children:n})};function N2(){return new Map}function ky(n=!0){const i=M.useContext(Zl);if(i===null)return[!0,null];const{isPresent:o,onExitComplete:l,register:c}=i,f=M.useId();M.useEffect(()=>{if(n)return c(f)},[n]);const d=M.useCallback(()=>n&&l&&l(f),[f,l,n]);return!o&&l?[!1,d]:[!0]}const Tl=n=>n.key||"";function T0(n){const i=[];return M.Children.forEach(n,o=>{M.isValidElement(o)&&i.push(o)}),i}const L2=({children:n,custom:i,initial:o=!0,onExitComplete:l,presenceAffectsLayout:c=!0,mode:f="sync",propagate:d=!1,anchorX:m="left",root:p})=>{const[h,g]=ky(d),b=M.useMemo(()=>T0(n),[n]),x=d&&!h?[]:b.map(Tl),A=M.useRef(!0),E=M.useRef(b),T=pf(()=>new Map),[_,U]=M.useState(b),[V,N]=M.useState(b);qg(()=>{A.current=!1,E.current=b;for(let K=0;K<V.length;K++){const J=Tl(V[K]);x.includes(J)?T.delete(J):T.get(J)!==!0&&T.set(J,!1)}},[V,x.length,x.join("-")]);const X=[];if(b!==_){let K=[...b];for(let J=0;J<V.length;J++){const Z=V[J],at=Tl(Z);x.includes(at)||(K.splice(J,0,Z),X.push(Z))}return f==="wait"&&X.length&&(K=X),N(T0(K)),U(b),null}const{forceRender:H}=M.useContext(mf);return mt.jsx(mt.Fragment,{children:V.map(K=>{const J=Tl(K),Z=d&&!h?!1:b===V||x.includes(J),at=()=>{if(T.has(J))T.set(J,!0);else return;let St=!0;T.forEach(Jt=>{Jt||(St=!1)}),St&&(H?.(),N(E.current),d&&g?.(),l&&l())};return mt.jsx(U2,{isPresent:Z,initial:!A.current||o?void 0:!1,custom:i,presenceAffectsLayout:c,mode:f,root:p,onExitComplete:Z?void 0:at,anchorX:m,children:K},J)})})},Vy=M.createContext({strict:!1}),E0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ti={};for(const n in E0)Ti[n]={isEnabled:i=>E0[n].some(o=>!!i[o])};function P2(n){for(const i in n)Ti[i]={...Ti[i],...n[i]}}const B2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Hl(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||B2.has(n)}let Uy=n=>!Hl(n);function j2(n){typeof n=="function"&&(Uy=i=>i.startsWith("on")?!Hl(i):n(i))}try{j2(require("@emotion/is-prop-valid").default)}catch{}function H2(n,i,o){const l={};for(const c in n)c==="values"&&typeof n.values=="object"||(Uy(c)||o===!0&&Hl(c)||!i&&!Hl(c)||n.draggable&&c.startsWith("onDrag"))&&(l[c]=n[c]);return l}const Kl=M.createContext({});function Ql(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function qr(n){return typeof n=="string"||Array.isArray(n)}const Bf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],jf=["initial",...Bf];function Jl(n){return Ql(n.animate)||jf.some(i=>qr(n[i]))}function Ny(n){return!!(Jl(n)||n.variants)}function q2(n,i){if(Jl(n)){const{initial:o,animate:l}=n;return{initial:o===!1||qr(o)?o:void 0,animate:qr(l)?l:void 0}}return n.inherit!==!1?i:{}}function Y2(n){const{initial:i,animate:o}=q2(n,M.useContext(Kl));return M.useMemo(()=>({initial:i,animate:o}),[A0(i),A0(o)])}function A0(n){return Array.isArray(n)?n.join(" "):n}const Yr={};function G2(n){for(const i in n)Yr[i]=n[i],Af(i)&&(Yr[i].isCSSVariable=!0)}function Ly(n,{layout:i,layoutId:o}){return Mi.has(n)||n.startsWith("origin")||(i||o!==void 0)&&(!!Yr[n]||n==="opacity")}const X2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Z2=Di.length;function K2(n,i,o){let l="",c=!0;for(let f=0;f<Z2;f++){const d=Di[f],m=n[d];if(m===void 0)continue;let p=!0;if(typeof m=="number"?p=m===(d.startsWith("scale")?1:0):p=parseFloat(m)===0,!p||o){const h=My(m,Uf[d]);if(!p){c=!1;const g=X2[d]||d;l+=`${g}(${h}) `}o&&(i[d]=h)}}return l=l.trim(),o?l=o(i,c?"":l):c&&(l="none"),l}function Hf(n,i,o){const{style:l,vars:c,transformOrigin:f}=n;let d=!1,m=!1;for(const p in i){const h=i[p];if(Mi.has(p)){d=!0;continue}else if(Af(p)){c[p]=h;continue}else{const g=My(h,Uf[p]);p.startsWith("origin")?(m=!0,f[p]=g):l[p]=g}}if(i.transform||(d||o?l.transform=K2(i,n.transform,o):l.transform&&(l.transform="none")),m){const{originX:p="50%",originY:h="50%",originZ:g=0}=f;l.transformOrigin=`${p} ${h} ${g}`}}const qf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Py(n,i,o){for(const l in i)!le(i[l])&&!Ly(l,o)&&(n[l]=i[l])}function Q2({transformTemplate:n},i){return M.useMemo(()=>{const o=qf();return Hf(o,i,n),Object.assign({},o.vars,o.style)},[i])}function J2(n,i){const o=n.style||{},l={};return Py(l,o,n),Object.assign(l,Q2(n,i)),l}function F2(n,i){const o={},l=J2(n,i);return n.drag&&n.dragListener!==!1&&(o.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(o.tabIndex=0),o.style=l,o}const $2={offset:"stroke-dashoffset",array:"stroke-dasharray"},W2={offset:"strokeDashoffset",array:"strokeDasharray"};function I2(n,i,o=1,l=0,c=!0){n.pathLength=1;const f=c?$2:W2;n[f.offset]=rt.transform(-l);const d=rt.transform(i),m=rt.transform(o);n[f.array]=`${d} ${m}`}function By(n,{attrX:i,attrY:o,attrScale:l,pathLength:c,pathSpacing:f=1,pathOffset:d=0,...m},p,h,g){if(Hf(n,m,h),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:b,style:x}=n;b.transform&&(x.transform=b.transform,delete b.transform),(x.transform||b.transformOrigin)&&(x.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),x.transform&&(x.transformBox=g?.transformBox??"fill-box",delete b.transformBox),i!==void 0&&(b.x=i),o!==void 0&&(b.y=o),l!==void 0&&(b.scale=l),c!==void 0&&I2(b,c,f,d,!1)}const jy=()=>({...qf(),attrs:{}}),Hy=n=>typeof n=="string"&&n.toLowerCase()==="svg";function tT(n,i,o,l){const c=M.useMemo(()=>{const f=jy();return By(f,i,Hy(l),n.transformTemplate,n.style),{...f.attrs,style:{...f.style}}},[i]);if(n.style){const f={};Py(f,n.style,n),c.style={...f,...c.style}}return c}const eT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Yf(n){return typeof n!="string"||n.includes("-")?!1:!!(eT.indexOf(n)>-1||/[A-Z]/u.test(n))}function nT(n,i,o,{latestValues:l},c,f=!1){const m=(Yf(n)?tT:F2)(i,l,c,n),p=H2(i,typeof n=="string",f),h=n!==M.Fragment?{...p,...m,ref:o}:{},{children:g}=i,b=M.useMemo(()=>le(g)?g.get():g,[g]);return M.createElement(n,{...h,children:b})}function O0(n){const i=[{},{}];return n?.values.forEach((o,l)=>{i[0][l]=o.get(),i[1][l]=o.getVelocity()}),i}function Gf(n,i,o,l){if(typeof i=="function"){const[c,f]=O0(l);i=i(o!==void 0?o:n.custom,c,f)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[c,f]=O0(l);i=i(o!==void 0?o:n.custom,c,f)}return i}function Ul(n){return le(n)?n.get():n}function aT({scrapeMotionValuesFromProps:n,createRenderState:i},o,l,c){return{latestValues:iT(o,l,c,n),renderState:i()}}function iT(n,i,o,l){const c={},f=l(n,{});for(const x in f)c[x]=Ul(f[x]);let{initial:d,animate:m}=n;const p=Jl(n),h=Ny(n);i&&h&&!p&&n.inherit!==!1&&(d===void 0&&(d=i.initial),m===void 0&&(m=i.animate));let g=o?o.initial===!1:!1;g=g||d===!1;const b=g?m:d;if(b&&typeof b!="boolean"&&!Ql(b)){const x=Array.isArray(b)?b:[b];for(let A=0;A<x.length;A++){const E=Gf(n,x[A]);if(E){const{transitionEnd:T,transition:_,...U}=E;for(const V in U){let N=U[V];if(Array.isArray(N)){const X=g?N.length-1:0;N=N[X]}N!==null&&(c[V]=N)}for(const V in T)c[V]=T[V]}}}return c}const qy=n=>(i,o)=>{const l=M.useContext(Kl),c=M.useContext(Zl),f=()=>aT(n,i,l,c);return o?f():pf(f)};function Xf(n,i,o){const{style:l}=n,c={};for(const f in l)(le(l[f])||i.style&&le(i.style[f])||Ly(f,n)||o?.getValue(f)?.liveStyle!==void 0)&&(c[f]=l[f]);return c}const rT=qy({scrapeMotionValuesFromProps:Xf,createRenderState:qf});function Yy(n,i,o){const l=Xf(n,i,o);for(const c in n)if(le(n[c])||le(i[c])){const f=Di.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;l[f]=n[c]}return l}const oT=qy({scrapeMotionValuesFromProps:Yy,createRenderState:jy}),lT=Symbol.for("motionComponentSymbol");function gi(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function sT(n,i,o){return M.useCallback(l=>{l&&n.onMount&&n.onMount(l),i&&(l?i.mount(l):i.unmount()),o&&(typeof o=="function"?o(l):gi(o)&&(o.current=l))},[i])}const Zf=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),uT="framerAppearId",Gy="data-"+Zf(uT),Xy=M.createContext({});function cT(n,i,o,l,c){const{visualElement:f}=M.useContext(Kl),d=M.useContext(Vy),m=M.useContext(Zl),p=M.useContext(Pf).reducedMotion,h=M.useRef(null);l=l||d.renderer,!h.current&&l&&(h.current=l(n,{visualState:i,parent:f,props:o,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:p}));const g=h.current,b=M.useContext(Xy);g&&!g.projection&&c&&(g.type==="html"||g.type==="svg")&&fT(h.current,o,c,b);const x=M.useRef(!1);M.useInsertionEffect(()=>{g&&x.current&&g.update(o,m)});const A=o[Gy],E=M.useRef(!!A&&!window.MotionHandoffIsComplete?.(A)&&window.MotionHasOptimisedAnimation?.(A));return qg(()=>{g&&(x.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),E.current&&g.animationState&&g.animationState.animateChanges())}),M.useEffect(()=>{g&&(!E.current&&g.animationState&&g.animationState.animateChanges(),E.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(A)}),E.current=!1),g.enteringChildren=void 0)}),g}function fT(n,i,o,l){const{layoutId:c,layout:f,drag:d,dragConstraints:m,layoutScroll:p,layoutRoot:h,layoutCrossfade:g}=i;n.projection=new o(n.latestValues,i["data-framer-portal-id"]?void 0:Zy(n.parent)),n.projection.setOptions({layoutId:c,layout:f,alwaysMeasureLayout:!!d||m&&gi(m),visualElement:n,animationType:typeof f=="string"?f:"both",initialPromotionConfig:l,crossfade:g,layoutScroll:p,layoutRoot:h})}function Zy(n){if(n)return n.options.allowProjection!==!1?n.projection:Zy(n.parent)}function Mc(n,{forwardMotionProps:i=!1}={},o,l){o&&P2(o);const c=Yf(n)?oT:rT;function f(m,p){let h;const g={...M.useContext(Pf),...m,layoutId:dT(m)},{isStatic:b}=g,x=Y2(m),A=c(m,b);if(!b&&gf){hT();const E=mT(g);h=E.MeasureLayout,x.visualElement=cT(n,A,g,l,E.ProjectionNode)}return mt.jsxs(Kl.Provider,{value:x,children:[h&&x.visualElement?mt.jsx(h,{visualElement:x.visualElement,...g}):null,nT(n,m,sT(A,x.visualElement,p),A,b,i)]})}f.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const d=M.forwardRef(f);return d[lT]=n,d}function dT({layoutId:n}){const i=M.useContext(mf).id;return i&&n!==void 0?i+"-"+n:n}function hT(n,i){M.useContext(Vy).strict}function mT(n){const{drag:i,layout:o}=Ti;if(!i&&!o)return{};const l={...i,...o};return{MeasureLayout:i?.isEnabled(n)||o?.isEnabled(n)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}function pT(n,i){if(typeof Proxy>"u")return Mc;const o=new Map,l=(f,d)=>Mc(f,d,n,i),c=(f,d)=>l(f,d);return new Proxy(c,{get:(f,d)=>d==="create"?l:(o.has(d)||o.set(d,Mc(d,void 0,n,i)),o.get(d))})}function Ky({top:n,left:i,right:o,bottom:l}){return{x:{min:i,max:o},y:{min:n,max:l}}}function gT({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function yT(n,i){if(!i)return n;const o=i({x:n.left,y:n.top}),l=i({x:n.right,y:n.bottom});return{top:o.y,left:o.x,bottom:l.y,right:l.x}}function Rc(n){return n===void 0||n===1}function Wc({scale:n,scaleX:i,scaleY:o}){return!Rc(n)||!Rc(i)||!Rc(o)}function Ea(n){return Wc(n)||Qy(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Qy(n){return D0(n.x)||D0(n.y)}function D0(n){return n&&n!=="0%"}function ql(n,i,o){const l=n-o,c=i*l;return o+c}function M0(n,i,o,l,c){return c!==void 0&&(n=ql(n,c,l)),ql(n,o,l)+i}function Ic(n,i=0,o=1,l,c){n.min=M0(n.min,i,o,l,c),n.max=M0(n.max,i,o,l,c)}function Jy(n,{x:i,y:o}){Ic(n.x,i.translate,i.scale,i.originPoint),Ic(n.y,o.translate,o.scale,o.originPoint)}const R0=.999999999999,w0=1.0000000000001;function vT(n,i,o,l=!1){const c=o.length;if(!c)return;i.x=i.y=1;let f,d;for(let m=0;m<c;m++){f=o[m],d=f.projectionDelta;const{visualElement:p}=f.options;p&&p.props.style&&p.props.style.display==="contents"||(l&&f.options.layoutScroll&&f.scroll&&f!==f.root&&vi(n,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,Jy(n,d)),l&&Ea(f.latestValues)&&vi(n,f.latestValues))}i.x<w0&&i.x>R0&&(i.x=1),i.y<w0&&i.y>R0&&(i.y=1)}function yi(n,i){n.min=n.min+i,n.max=n.max+i}function C0(n,i,o,l,c=.5){const f=kt(n.min,n.max,c);Ic(n,i,o,f,l)}function vi(n,i){C0(n.x,i.x,i.scaleX,i.scale,i.originX),C0(n.y,i.y,i.scaleY,i.scale,i.originY)}function Fy(n,i){return Ky(yT(n.getBoundingClientRect(),i))}function bT(n,i,o){const l=Fy(n,o),{scroll:c}=i;return c&&(yi(l.x,c.offset.x),yi(l.y,c.offset.y)),l}const _0=()=>({translate:0,scale:1,origin:0,originPoint:0}),bi=()=>({x:_0(),y:_0()}),z0=()=>({min:0,max:0}),jt=()=>({x:z0(),y:z0()}),tf={current:null},$y={current:!1};function xT(){if($y.current=!0,!!gf)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>tf.current=n.matches;n.addEventListener("change",i),i()}else tf.current=!1}const ST=new WeakMap;function TT(n,i,o){for(const l in i){const c=i[l],f=o[l];if(le(c))n.addValue(l,c);else if(le(f))n.addValue(l,Si(c,{owner:n}));else if(f!==c)if(n.hasValue(l)){const d=n.getValue(l);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=n.getStaticValue(l);n.addValue(l,Si(d!==void 0?d:c,{owner:n}))}}for(const l in o)i[l]===void 0&&n.removeValue(l);return i}const k0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class ET{scrapeMotionValuesFromProps(i,o,l){return{}}constructor({parent:i,props:o,presenceContext:l,reducedMotionConfig:c,blockInitialAnimation:f,visualState:d},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=kf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=pe.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,_t.render(this.render,!1,!0))};const{latestValues:p,renderState:h}=d;this.latestValues=p,this.baseTarget={...p},this.initialValues=o.initial?{...p}:{},this.renderState=h,this.parent=i,this.props=o,this.presenceContext=l,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.options=m,this.blockInitialAnimation=!!f,this.isControllingVariants=Jl(o),this.isVariantNode=Ny(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:g,...b}=this.scrapeMotionValuesFromProps(o,{},this);for(const x in b){const A=b[x];p[x]!==void 0&&le(A)&&A.set(p[x])}}mount(i){this.current=i,ST.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,l)=>this.bindToMotionValue(l,o)),$y.current||xT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:tf.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),ta(this.notifyUpdate),ta(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const o=this.features[i];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,o){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const l=Mi.has(i);l&&this.onBindTransform&&this.onBindTransform();const c=o.on("change",d=>{this.latestValues[i]=d,this.props.onUpdate&&_t.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,o)),this.valueSubscriptions.set(i,()=>{c(),f&&f(),o.owner&&o.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in Ti){const o=Ti[i];if(!o)continue;const{isEnabled:l,Feature:c}=o;if(!this.features[i]&&c&&l(this.props)&&(this.features[i]=new c(this)),this.features[i]){const f=this.features[i];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):jt()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,o){this.latestValues[i]=o}update(i,o){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let l=0;l<k0.length;l++){const c=k0[l];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const f="on"+c,d=i[f];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=TT(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(i),()=>o.variantChildren.delete(i)}addValue(i,o){const l=this.values.get(i);o!==l&&(l&&this.removeValue(i),this.bindToMotionValue(i,o),this.values.set(i,o),this.latestValues[i]=o.get())}removeValue(i){this.values.delete(i);const o=this.valueSubscriptions.get(i);o&&(o(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,o){if(this.props.values&&this.props.values[i])return this.props.values[i];let l=this.values.get(i);return l===void 0&&o!==void 0&&(l=Si(o===null?void 0:o,{owner:this}),this.addValue(i,l)),l}readValue(i,o){let l=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return l!=null&&(typeof l=="string"&&(Yg(l)||Xg(l))?l=parseFloat(l):!z2(l)&&ea.test(o)&&(l=Dy(i,o)),this.setBaseTarget(i,le(l)?l.get():l)),le(l)?l.get():l}setBaseTarget(i,o){this.baseTarget[i]=o}getBaseTarget(i){const{initial:o}=this.props;let l;if(typeof o=="string"||typeof o=="object"){const f=Gf(this.props,o,this.presenceContext?.custom);f&&(l=f[i])}if(o&&l!==void 0)return l;const c=this.getBaseTargetFromProps(this.props,i);return c!==void 0&&!le(c)?c:this.initialValues[i]!==void 0&&l===void 0?void 0:this.baseTarget[i]}on(i,o){return this.events[i]||(this.events[i]=new Sf),this.events[i].add(o)}notify(i,...o){this.events[i]&&this.events[i].notify(...o)}scheduleRenderMicrotask(){Nf.render(this.render)}}class Wy extends ET{constructor(){super(...arguments),this.KeyframeResolver=x2}sortInstanceNodePosition(i,o){return i.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(i,o){return i.style?i.style[o]:void 0}removeValueFromRenderState(i,{vars:o,style:l}){delete o[i],delete l[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;le(i)&&(this.childSubscription=i.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function Iy(n,{style:i,vars:o},l,c){const f=n.style;let d;for(d in i)f[d]=i[d];c?.applyProjectionStyles(f,l);for(d in o)f.setProperty(d,o[d])}function AT(n){return window.getComputedStyle(n)}class OT extends Wy{constructor(){super(...arguments),this.type="html",this.renderInstance=Iy}readValueFromInstance(i,o){if(Mi.has(o))return this.projection?.isProjecting?Xc(o):B5(i,o);{const l=AT(i),c=(Af(o)?l.getPropertyValue(o):l[o])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(i,{transformPagePoint:o}){return Fy(i,o)}build(i,o,l){Hf(i,o,l.transformTemplate)}scrapeMotionValuesFromProps(i,o,l){return Xf(i,o,l)}}const tv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function DT(n,i,o,l){Iy(n,i,void 0,l);for(const c in i.attrs)n.setAttribute(tv.has(c)?c:Zf(c),i.attrs[c])}class MT extends Wy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=jt}getBaseTargetFromProps(i,o){return i[o]}readValueFromInstance(i,o){if(Mi.has(o)){const l=Oy(o);return l&&l.default||0}return o=tv.has(o)?o:Zf(o),i.getAttribute(o)}scrapeMotionValuesFromProps(i,o,l){return Yy(i,o,l)}build(i,o,l){By(i,o,this.isSVGTag,l.transformTemplate,l.style)}renderInstance(i,o,l,c){DT(i,o,l,c)}mount(i){this.isSVGTag=Hy(i.tagName),super.mount(i)}}const RT=(n,i)=>Yf(n)?new MT(i):new OT(i,{allowProjection:n!==M.Fragment});function xi(n,i,o){const l=n.getProps();return Gf(l,i,o!==void 0?o:l.custom,n)}const ef=n=>Array.isArray(n);function wT(n,i,o){n.hasValue(i)?n.getValue(i).set(o):n.addValue(i,Si(o))}function CT(n){return ef(n)?n[n.length-1]||0:n}function _T(n,i){const o=xi(n,i);let{transitionEnd:l={},transition:c={},...f}=o||{};f={...f,...l};for(const d in f){const m=CT(f[d]);wT(n,d,m)}}function zT(n){return!!(le(n)&&n.add)}function nf(n,i){const o=n.getValue("willChange");if(zT(o))return o.add(i);if(!o&&On.WillChange){const l=new On.WillChange("auto");n.addValue("willChange",l),l.add(i)}}function ev(n){return n.props[Gy]}const kT=n=>n!==null;function VT(n,{repeat:i,repeatType:o="loop"},l){const c=n.filter(kT),f=i&&o!=="loop"&&i%2===1?0:c.length-1;return c[f]}const UT={type:"spring",stiffness:500,damping:25,restSpeed:10},NT=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),LT={type:"keyframes",duration:.8},PT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},BT=(n,{keyframes:i})=>i.length>2?LT:Mi.has(n)?n.startsWith("scale")?NT(i[1]):UT:PT;function jT({when:n,delay:i,delayChildren:o,staggerChildren:l,staggerDirection:c,repeat:f,repeatType:d,repeatDelay:m,from:p,elapsed:h,...g}){return!!Object.keys(g).length}const Kf=(n,i,o,l={},c,f)=>d=>{const m=Vf(l,n)||{},p=m.delay||l.delay||0;let{elapsed:h=0}=l;h=h-Ie(p);const g={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:i.getVelocity(),...m,delay:-h,onUpdate:x=>{i.set(x),m.onUpdate&&m.onUpdate(x)},onComplete:()=>{d(),m.onComplete&&m.onComplete()},name:n,motionValue:i,element:f?void 0:c};jT(m)||Object.assign(g,BT(n,g)),g.duration&&(g.duration=Ie(g.duration)),g.repeatDelay&&(g.repeatDelay=Ie(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let b=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Fc(g),g.delay===0&&(b=!0)),(On.instantAnimations||On.skipAnimations)&&(b=!0,Fc(g),g.delay=0),g.allowFlatten=!m.type&&!m.ease,b&&!f&&i.get()!==void 0){const x=VT(g.keyframes,m);if(x!==void 0){_t.update(()=>{g.onUpdate(x),g.onComplete()});return}}return m.isSync?new zf(g):new s2(g)};function HT({protectedKeys:n,needsAnimating:i},o){const l=n.hasOwnProperty(o)&&i[o]!==!0;return i[o]=!1,l}function nv(n,i,{delay:o=0,transitionOverride:l,type:c}={}){let{transition:f=n.getDefaultTransition(),transitionEnd:d,...m}=i;l&&(f=l);const p=[],h=c&&n.animationState&&n.animationState.getState()[c];for(const g in m){const b=n.getValue(g,n.latestValues[g]??null),x=m[g];if(x===void 0||h&&HT(h,g))continue;const A={delay:o,...Vf(f||{},g)},E=b.get();if(E!==void 0&&!b.isAnimating&&!Array.isArray(x)&&x===E&&!A.velocity)continue;let T=!1;if(window.MotionHandoffAnimation){const U=ev(n);if(U){const V=window.MotionHandoffAnimation(U,g,_t);V!==null&&(A.startTime=V,T=!0)}}nf(n,g),b.start(Kf(g,b,x,n.shouldReduceMotion&&Ty.has(g)?{type:!1}:A,n,T));const _=b.animation;_&&p.push(_)}return d&&Promise.all(p).then(()=>{_t.update(()=>{d&&_T(n,d)})}),p}function av(n,i,o,l=0,c=1){const f=Array.from(n).sort((h,g)=>h.sortNodePosition(g)).indexOf(i),d=n.size,m=(d-1)*l;return typeof o=="function"?o(f,d):c===1?f*l:m-f*l}function af(n,i,o={}){const l=xi(n,i,o.type==="exit"?n.presenceContext?.custom:void 0);let{transition:c=n.getDefaultTransition()||{}}=l||{};o.transitionOverride&&(c=o.transitionOverride);const f=l?()=>Promise.all(nv(n,l,o)):()=>Promise.resolve(),d=n.variantChildren&&n.variantChildren.size?(p=0)=>{const{delayChildren:h=0,staggerChildren:g,staggerDirection:b}=c;return qT(n,i,p,h,g,b,o)}:()=>Promise.resolve(),{when:m}=c;if(m){const[p,h]=m==="beforeChildren"?[f,d]:[d,f];return p().then(()=>h())}else return Promise.all([f(),d(o.delay)])}function qT(n,i,o=0,l=0,c=0,f=1,d){const m=[];for(const p of n.variantChildren)p.notify("AnimationStart",i),m.push(af(p,i,{...d,delay:o+(typeof l=="function"?0:l)+av(n.variantChildren,p,l,c,f)}).then(()=>p.notify("AnimationComplete",i)));return Promise.all(m)}function YT(n,i,o={}){n.notify("AnimationStart",i);let l;if(Array.isArray(i)){const c=i.map(f=>af(n,f,o));l=Promise.all(c)}else if(typeof i=="string")l=af(n,i,o);else{const c=typeof i=="function"?xi(n,i,o.custom):i;l=Promise.all(nv(n,c,o))}return l.then(()=>{n.notify("AnimationComplete",i)})}function iv(n,i){if(!Array.isArray(i))return!1;const o=i.length;if(o!==n.length)return!1;for(let l=0;l<o;l++)if(i[l]!==n[l])return!1;return!0}const GT=jf.length;function rv(n){if(!n)return;if(!n.isControllingVariants){const o=n.parent?rv(n.parent)||{}:{};return n.props.initial!==void 0&&(o.initial=n.props.initial),o}const i={};for(let o=0;o<GT;o++){const l=jf[o],c=n.props[l];(qr(c)||c===!1)&&(i[l]=c)}return i}const XT=[...Bf].reverse(),ZT=Bf.length;function KT(n){return i=>Promise.all(i.map(({animation:o,options:l})=>YT(n,o,l)))}function QT(n){let i=KT(n),o=V0(),l=!0;const c=p=>(h,g)=>{const b=xi(n,g,p==="exit"?n.presenceContext?.custom:void 0);if(b){const{transition:x,transitionEnd:A,...E}=b;h={...h,...E,...A}}return h};function f(p){i=p(n)}function d(p){const{props:h}=n,g=rv(n.parent)||{},b=[],x=new Set;let A={},E=1/0;for(let _=0;_<ZT;_++){const U=XT[_],V=o[U],N=h[U]!==void 0?h[U]:g[U],X=qr(N),H=U===p?V.isActive:null;H===!1&&(E=_);let K=N===g[U]&&N!==h[U]&&X;if(K&&l&&n.manuallyAnimateOnMount&&(K=!1),V.protectedKeys={...A},!V.isActive&&H===null||!N&&!V.prevProp||Ql(N)||typeof N=="boolean")continue;const J=JT(V.prevProp,N);let Z=J||U===p&&V.isActive&&!K&&X||_>E&&X,at=!1;const St=Array.isArray(N)?N:[N];let Jt=St.reduce(c(U),{});H===!1&&(Jt={});const{prevResolvedValues:Gt={}}=V,an={...Gt,...Jt},Ze=Y=>{Z=!0,x.has(Y)&&(at=!0,x.delete(Y)),V.needsAnimating[Y]=!0;const $=n.getValue(Y);$&&($.liveStyle=!1)};for(const Y in an){const $=Jt[Y],ht=Gt[Y];if(A.hasOwnProperty(Y))continue;let O=!1;ef($)&&ef(ht)?O=!iv($,ht):O=$!==ht,O?$!=null?Ze(Y):x.add(Y):$!==void 0&&x.has(Y)?Ze(Y):V.protectedKeys[Y]=!0}V.prevProp=N,V.prevResolvedValues=Jt,V.isActive&&(A={...A,...Jt}),l&&n.blockInitialAnimation&&(Z=!1);const Xt=K&&J;Z&&(!Xt||at)&&b.push(...St.map(Y=>{const $={type:U};if(typeof Y=="string"&&l&&!Xt&&n.manuallyAnimateOnMount&&n.parent){const{parent:ht}=n,O=xi(ht,Y);if(ht.enteringChildren&&O){const{delayChildren:q}=O.transition||{};$.delay=av(ht.enteringChildren,n,q)}}return{animation:Y,options:$}}))}if(x.size){const _={};if(typeof h.initial!="boolean"){const U=xi(n,Array.isArray(h.initial)?h.initial[0]:h.initial);U&&U.transition&&(_.transition=U.transition)}x.forEach(U=>{const V=n.getBaseTarget(U),N=n.getValue(U);N&&(N.liveStyle=!0),_[U]=V??null}),b.push({animation:_})}let T=!!b.length;return l&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(T=!1),l=!1,T?i(b):Promise.resolve()}function m(p,h){if(o[p].isActive===h)return Promise.resolve();n.variantChildren?.forEach(b=>b.animationState?.setActive(p,h)),o[p].isActive=h;const g=d(p);for(const b in o)o[b].protectedKeys={};return g}return{animateChanges:d,setActive:m,setAnimateFunction:f,getState:()=>o,reset:()=>{o=V0(),l=!0}}}function JT(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!iv(i,n):!1}function Ta(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function V0(){return{animate:Ta(!0),whileInView:Ta(),whileHover:Ta(),whileTap:Ta(),whileDrag:Ta(),whileFocus:Ta(),exit:Ta()}}class aa{constructor(i){this.isMounted=!1,this.node=i}update(){}}class FT extends aa{constructor(i){super(i),i.animationState||(i.animationState=QT(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Ql(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:o}=this.node.prevProps||{};i!==o&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let $T=0;class WT extends aa{constructor(){super(...arguments),this.id=$T++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:o}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===l)return;const c=this.node.animationState.setActive("exit",!i);o&&!i&&c.then(()=>{o(this.id)})}mount(){const{register:i,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const IT={animation:{Feature:FT},exit:{Feature:WT}};function Gr(n,i,o,l={passive:!0}){return n.addEventListener(i,o,l),()=>n.removeEventListener(i,o)}function Wr(n){return{point:{x:n.pageX,y:n.pageY}}}const tE=n=>i=>Lf(i)&&n(i,Wr(i));function Ur(n,i,o,l){return Gr(n,i,tE(o),l)}const ov=1e-4,eE=1-ov,nE=1+ov,lv=.01,aE=0-lv,iE=0+lv;function ue(n){return n.max-n.min}function rE(n,i,o){return Math.abs(n-i)<=o}function U0(n,i,o,l=.5){n.origin=l,n.originPoint=kt(i.min,i.max,n.origin),n.scale=ue(o)/ue(i),n.translate=kt(o.min,o.max,n.origin)-n.originPoint,(n.scale>=eE&&n.scale<=nE||isNaN(n.scale))&&(n.scale=1),(n.translate>=aE&&n.translate<=iE||isNaN(n.translate))&&(n.translate=0)}function Nr(n,i,o,l){U0(n.x,i.x,o.x,l?l.originX:void 0),U0(n.y,i.y,o.y,l?l.originY:void 0)}function N0(n,i,o){n.min=o.min+i.min,n.max=n.min+ue(i)}function oE(n,i,o){N0(n.x,i.x,o.x),N0(n.y,i.y,o.y)}function L0(n,i,o){n.min=i.min-o.min,n.max=n.min+ue(i)}function Lr(n,i,o){L0(n.x,i.x,o.x),L0(n.y,i.y,o.y)}function Le(n){return[n("x"),n("y")]}const sv=({current:n})=>n?n.ownerDocument.defaultView:null,P0=(n,i)=>Math.abs(n-i);function lE(n,i){const o=P0(n.x,i.x),l=P0(n.y,i.y);return Math.sqrt(o**2+l**2)}class uv{constructor(i,o,{transformPagePoint:l,contextWindow:c=window,dragSnapToOrigin:f=!1,distanceThreshold:d=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Cc(this.lastMoveEventInfo,this.history),A=this.startEvent!==null,E=lE(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!A&&!E)return;const{point:T}=x,{timestamp:_}=ae;this.history.push({...T,timestamp:_});const{onStart:U,onMove:V}=this.handlers;A||(U&&U(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),V&&V(this.lastMoveEvent,x)},this.handlePointerMove=(x,A)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=wc(A,this.transformPagePoint),_t.update(this.updatePoint,!0)},this.handlePointerUp=(x,A)=>{this.end();const{onEnd:E,onSessionEnd:T,resumeAnimation:_}=this.handlers;if(this.dragSnapToOrigin&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const U=Cc(x.type==="pointercancel"?this.lastMoveEventInfo:wc(A,this.transformPagePoint),this.history);this.startEvent&&E&&E(x,U),T&&T(x,U)},!Lf(i))return;this.dragSnapToOrigin=f,this.handlers=o,this.transformPagePoint=l,this.distanceThreshold=d,this.contextWindow=c||window;const m=Wr(i),p=wc(m,this.transformPagePoint),{point:h}=p,{timestamp:g}=ae;this.history=[{...h,timestamp:g}];const{onSessionStart:b}=o;b&&b(i,Cc(p,this.history)),this.removeListeners=Jr(Ur(this.contextWindow,"pointermove",this.handlePointerMove),Ur(this.contextWindow,"pointerup",this.handlePointerUp),Ur(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),ta(this.updatePoint)}}function wc(n,i){return i?{point:i(n.point)}:n}function B0(n,i){return{x:n.x-i.x,y:n.y-i.y}}function Cc({point:n},i){return{point:n,delta:B0(n,cv(i)),offset:B0(n,sE(i)),velocity:uE(i,.1)}}function sE(n){return n[0]}function cv(n){return n[n.length-1]}function uE(n,i){if(n.length<2)return{x:0,y:0};let o=n.length-1,l=null;const c=cv(n);for(;o>=0&&(l=n[o],!(c.timestamp-l.timestamp>Ie(i)));)o--;if(!l)return{x:0,y:0};const f=tn(c.timestamp-l.timestamp);if(f===0)return{x:0,y:0};const d={x:(c.x-l.x)/f,y:(c.y-l.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function cE(n,{min:i,max:o},l){return i!==void 0&&n<i?n=l?kt(i,n,l.min):Math.max(n,i):o!==void 0&&n>o&&(n=l?kt(o,n,l.max):Math.min(n,o)),n}function j0(n,i,o){return{min:i!==void 0?n.min+i:void 0,max:o!==void 0?n.max+o-(n.max-n.min):void 0}}function fE(n,{top:i,left:o,bottom:l,right:c}){return{x:j0(n.x,o,c),y:j0(n.y,i,l)}}function H0(n,i){let o=i.min-n.min,l=i.max-n.max;return i.max-i.min<n.max-n.min&&([o,l]=[l,o]),{min:o,max:l}}function dE(n,i){return{x:H0(n.x,i.x),y:H0(n.y,i.y)}}function hE(n,i){let o=.5;const l=ue(n),c=ue(i);return c>l?o=Br(i.min,i.max-l,n.min):l>c&&(o=Br(n.min,n.max-c,i.min)),An(0,1,o)}function mE(n,i){const o={};return i.min!==void 0&&(o.min=i.min-n.min),i.max!==void 0&&(o.max=i.max-n.min),o}const rf=.35;function pE(n=rf){return n===!1?n=0:n===!0&&(n=rf),{x:q0(n,"left","right"),y:q0(n,"top","bottom")}}function q0(n,i,o){return{min:Y0(n,i),max:Y0(n,o)}}function Y0(n,i){return typeof n=="number"?n:n[i]||0}const gE=new WeakMap;class yE{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=jt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:o=!1,distanceThreshold:l}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const f=b=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(Wr(b).point)},d=(b,x)=>{const{drag:A,dragPropagation:E,onDragStart:T}=this.getProps();if(A&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=A2(A),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Le(U=>{let V=this.getAxisMotionValue(U).get()||0;if(en.test(V)){const{projection:N}=this.visualElement;if(N&&N.layout){const X=N.layout.layoutBox[U];X&&(V=ue(X)*(parseFloat(V)/100))}}this.originPoint[U]=V}),T&&_t.postRender(()=>T(b,x)),nf(this.visualElement,"transform");const{animationState:_}=this.visualElement;_&&_.setActive("whileDrag",!0)},m=(b,x)=>{this.latestPointerEvent=b,this.latestPanInfo=x;const{dragPropagation:A,dragDirectionLock:E,onDirectionLock:T,onDrag:_}=this.getProps();if(!A&&!this.openDragLock)return;const{offset:U}=x;if(E&&this.currentDirection===null){this.currentDirection=vE(U),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",x.point,U),this.updateAxis("y",x.point,U),this.visualElement.render(),_&&_(b,x)},p=(b,x)=>{this.latestPointerEvent=b,this.latestPanInfo=x,this.stop(b,x),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>Le(b=>this.getAnimationState(b)==="paused"&&this.getAxisMotionValue(b).animation?.play()),{dragSnapToOrigin:g}=this.getProps();this.panSession=new uv(i,{onSessionStart:f,onStart:d,onMove:m,onSessionEnd:p,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:l,contextWindow:sv(this.visualElement)})}stop(i,o){const l=i||this.latestPointerEvent,c=o||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!c||!l)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:m}=this.getProps();m&&_t.postRender(()=>m(l,c))}cancel(){this.isDragging=!1;const{projection:i,animationState:o}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(i,o,l){const{drag:c}=this.getProps();if(!l||!El(i,c,this.currentDirection))return;const f=this.getAxisMotionValue(i);let d=this.originPoint[i]+l[i];this.constraints&&this.constraints[i]&&(d=cE(d,this.constraints[i],this.elastic[i])),f.set(d)}resolveConstraints(){const{dragConstraints:i,dragElastic:o}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;i&&gi(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&l?this.constraints=fE(l.layoutBox,i):this.constraints=!1,this.elastic=pE(o),c!==this.constraints&&l&&this.constraints&&!this.hasMutatedConstraints&&Le(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=mE(l.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:o}=this.getProps();if(!i||!gi(i))return!1;const l=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const f=bT(l,c.root,this.visualElement.getTransformPagePoint());let d=dE(c.layout.layoutBox,f);if(o){const m=o(gT(d));this.hasMutatedConstraints=!!m,m&&(d=Ky(m))}return d}startAnimation(i){const{drag:o,dragMomentum:l,dragElastic:c,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:m}=this.getProps(),p=this.constraints||{},h=Le(g=>{if(!El(g,o,this.currentDirection))return;let b=p&&p[g]||{};d&&(b={min:0,max:0});const x=c?200:1e6,A=c?40:1e7,E={type:"inertia",velocity:l?i[g]:0,bounceStiffness:x,bounceDamping:A,timeConstant:750,restDelta:1,restSpeed:10,...f,...b};return this.startAxisValueAnimation(g,E)});return Promise.all(h).then(m)}startAxisValueAnimation(i,o){const l=this.getAxisMotionValue(i);return nf(this.visualElement,i),l.start(Kf(i,l,0,o,this.visualElement,!1))}stopAnimation(){Le(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){Le(i=>this.getAxisMotionValue(i).animation?.pause())}getAnimationState(i){return this.getAxisMotionValue(i).animation?.state}getAxisMotionValue(i){const o=`_drag${i.toUpperCase()}`,l=this.visualElement.getProps(),c=l[o];return c||this.visualElement.getValue(i,(l.initial?l.initial[i]:void 0)||0)}snapToCursor(i){Le(o=>{const{drag:l}=this.getProps();if(!El(o,l,this.currentDirection))return;const{projection:c}=this.visualElement,f=this.getAxisMotionValue(o);if(c&&c.layout){const{min:d,max:m}=c.layout.layoutBox[o];f.set(i[o]-kt(d,m,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:o}=this.getProps(),{projection:l}=this.visualElement;if(!gi(o)||!l||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Le(d=>{const m=this.getAxisMotionValue(d);if(m&&this.constraints!==!1){const p=m.get();c[d]=hE({min:p,max:p},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.resolveConstraints(),Le(d=>{if(!El(d,i,null))return;const m=this.getAxisMotionValue(d),{min:p,max:h}=this.constraints[d];m.set(kt(p,h,c[d]))})}addListeners(){if(!this.visualElement.current)return;gE.set(this.visualElement,this);const i=this.visualElement.current,o=Ur(i,"pointerdown",p=>{const{drag:h,dragListener:g=!0}=this.getProps();h&&g&&this.start(p)}),l=()=>{const{dragConstraints:p}=this.getProps();gi(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,f=c.addEventListener("measure",l);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),_t.read(l);const d=Gr(window,"resize",()=>this.scalePositionWithinConstraints()),m=c.addEventListener("didUpdate",(({delta:p,hasLayoutChanged:h})=>{this.isDragging&&h&&(Le(g=>{const b=this.getAxisMotionValue(g);b&&(this.originPoint[g]+=p[g].translate,b.set(b.get()+p[g].translate))}),this.visualElement.render())}));return()=>{d(),o(),f(),m&&m()}}getProps(){const i=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:l=!1,dragPropagation:c=!1,dragConstraints:f=!1,dragElastic:d=rf,dragMomentum:m=!0}=i;return{...i,drag:o,dragDirectionLock:l,dragPropagation:c,dragConstraints:f,dragElastic:d,dragMomentum:m}}}function El(n,i,o){return(i===!0||i===n)&&(o===null||o===n)}function vE(n,i=10){let o=null;return Math.abs(n.y)>i?o="y":Math.abs(n.x)>i&&(o="x"),o}class bE extends aa{constructor(i){super(i),this.removeGroupControls=Pe,this.removeListeners=Pe,this.controls=new yE(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Pe}unmount(){this.removeGroupControls(),this.removeListeners()}}const G0=n=>(i,o)=>{n&&_t.postRender(()=>n(i,o))};class xE extends aa{constructor(){super(...arguments),this.removePointerDownListener=Pe}onPointerDown(i){this.session=new uv(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:sv(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:o,onPan:l,onPanEnd:c}=this.node.getProps();return{onSessionStart:G0(i),onStart:G0(o),onMove:l,onEnd:(f,d)=>{delete this.session,c&&_t.postRender(()=>c(f,d))}}}mount(){this.removePointerDownListener=Ur(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Nl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function X0(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const Rr={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(rt.test(n))n=parseFloat(n);else return n;const o=X0(n,i.target.x),l=X0(n,i.target.y);return`${o}% ${l}%`}},SE={correct:(n,{treeScale:i,projectionDelta:o})=>{const l=n,c=ea.parse(n);if(c.length>5)return l;const f=ea.createTransformer(n),d=typeof c[0]!="number"?1:0,m=o.x.scale*i.x,p=o.y.scale*i.y;c[0+d]/=m,c[1+d]/=p;const h=kt(m,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=h),typeof c[3+d]=="number"&&(c[3+d]/=h),f(c)}};let _c=!1;class TE extends M.Component{componentDidMount(){const{visualElement:i,layoutGroup:o,switchLayoutGroup:l,layoutId:c}=this.props,{projection:f}=i;G2(EE),f&&(o.group&&o.group.add(f),l&&l.register&&c&&l.register(f),_c&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,onExitComplete:()=>this.safeToRemove()})),Nl.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:o,visualElement:l,drag:c,isPresent:f}=this.props,{projection:d}=l;return d&&(d.isPresent=f,_c=!0,c||i.layoutDependency!==o||o===void 0||i.isPresent!==f?d.willUpdate():this.safeToRemove(),i.isPresent!==f&&(f?d.promote():d.relegate()||_t.postRender(()=>{const m=d.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),Nf.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:o,switchLayoutGroup:l}=this.props,{projection:c}=i;_c=!0,c&&(c.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(c),l&&l.deregister&&l.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function fv(n){const[i,o]=ky(),l=M.useContext(mf);return mt.jsx(TE,{...n,layoutGroup:l,switchLayoutGroup:M.useContext(Xy),isPresent:i,safeToRemove:o})}const EE={borderRadius:{...Rr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Rr,borderTopRightRadius:Rr,borderBottomLeftRadius:Rr,borderBottomRightRadius:Rr,boxShadow:SE};function AE(n,i,o){const l=le(n)?n:Si(n);return l.start(Kf("",l,i,o)),l.animation}const OE=(n,i)=>n.depth-i.depth;class DE{constructor(){this.children=[],this.isDirty=!1}add(i){yf(this.children,i),this.isDirty=!0}remove(i){vf(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(OE),this.isDirty=!1,this.children.forEach(i)}}function ME(n,i){const o=pe.now(),l=({timestamp:c})=>{const f=c-o;f>=i&&(ta(l),n(f-i))};return _t.setup(l,!0),()=>ta(l)}const dv=["TopLeft","TopRight","BottomLeft","BottomRight"],RE=dv.length,Z0=n=>typeof n=="string"?parseFloat(n):n,K0=n=>typeof n=="number"||rt.test(n);function wE(n,i,o,l,c,f){c?(n.opacity=kt(0,o.opacity??1,CE(l)),n.opacityExit=kt(i.opacity??1,0,_E(l))):f&&(n.opacity=kt(i.opacity??1,o.opacity??1,l));for(let d=0;d<RE;d++){const m=`border${dv[d]}Radius`;let p=Q0(i,m),h=Q0(o,m);if(p===void 0&&h===void 0)continue;p||(p=0),h||(h=0),p===0||h===0||K0(p)===K0(h)?(n[m]=Math.max(kt(Z0(p),Z0(h),l),0),(en.test(h)||en.test(p))&&(n[m]+="%")):n[m]=h}(i.rotate||o.rotate)&&(n.rotate=kt(i.rotate||0,o.rotate||0,l))}function Q0(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const CE=hv(0,.5,Ig),_E=hv(.5,.95,Pe);function hv(n,i,o){return l=>l<n?0:l>i?1:o(Br(n,i,l))}function J0(n,i){n.min=i.min,n.max=i.max}function Ne(n,i){J0(n.x,i.x),J0(n.y,i.y)}function F0(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}function $0(n,i,o,l,c){return n-=i,n=ql(n,1/o,l),c!==void 0&&(n=ql(n,1/c,l)),n}function zE(n,i=0,o=1,l=.5,c,f=n,d=n){if(en.test(i)&&(i=parseFloat(i),i=kt(d.min,d.max,i/100)-d.min),typeof i!="number")return;let m=kt(f.min,f.max,l);n===f&&(m-=i),n.min=$0(n.min,i,o,m,c),n.max=$0(n.max,i,o,m,c)}function W0(n,i,[o,l,c],f,d){zE(n,i[o],i[l],i[c],i.scale,f,d)}const kE=["x","scaleX","originX"],VE=["y","scaleY","originY"];function I0(n,i,o,l){W0(n.x,i,kE,o?o.x:void 0,l?l.x:void 0),W0(n.y,i,VE,o?o.y:void 0,l?l.y:void 0)}function tg(n){return n.translate===0&&n.scale===1}function mv(n){return tg(n.x)&&tg(n.y)}function eg(n,i){return n.min===i.min&&n.max===i.max}function UE(n,i){return eg(n.x,i.x)&&eg(n.y,i.y)}function ng(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function pv(n,i){return ng(n.x,i.x)&&ng(n.y,i.y)}function ag(n){return ue(n.x)/ue(n.y)}function ig(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}class NE{constructor(){this.members=[]}add(i){yf(this.members,i),i.scheduleRender()}remove(i){if(vf(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(i){const o=this.members.findIndex(c=>i===c);if(o===0)return!1;let l;for(let c=o;c>=0;c--){const f=this.members[c];if(f.isPresent!==!1){l=f;break}}return l?(this.promote(l),!0):!1}promote(i,o){const l=this.lead;if(i!==l&&(this.prevLead=l,this.lead=i,i.show(),l)){l.instance&&l.scheduleRender(),i.scheduleRender(),i.resumeFrom=l,o&&(i.resumeFrom.preserveOpacity=!0),l.snapshot&&(i.snapshot=l.snapshot,i.snapshot.latestValues=l.animationValues||l.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:c}=i.options;c===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:o,resumingFrom:l}=i;o.onExitComplete&&o.onExitComplete(),l&&l.options.onExitComplete&&l.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function LE(n,i,o){let l="";const c=n.x.translate/i.x,f=n.y.translate/i.y,d=o?.z||0;if((c||f||d)&&(l=`translate3d(${c}px, ${f}px, ${d}px) `),(i.x!==1||i.y!==1)&&(l+=`scale(${1/i.x}, ${1/i.y}) `),o){const{transformPerspective:h,rotate:g,rotateX:b,rotateY:x,skewX:A,skewY:E}=o;h&&(l=`perspective(${h}px) ${l}`),g&&(l+=`rotate(${g}deg) `),b&&(l+=`rotateX(${b}deg) `),x&&(l+=`rotateY(${x}deg) `),A&&(l+=`skewX(${A}deg) `),E&&(l+=`skewY(${E}deg) `)}const m=n.x.scale*i.x,p=n.y.scale*i.y;return(m!==1||p!==1)&&(l+=`scale(${m}, ${p})`),l||"none"}const zc=["","X","Y","Z"],PE=1e3;let BE=0;function kc(n,i,o,l){const{latestValues:c}=i;c[n]&&(o[n]=c[n],i.setStaticValue(n,0),l&&(l[n]=0))}function gv(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const o=ev(i);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:c,layoutId:f}=n.options;window.MotionCancelOptimisedAnimation(o,"transform",_t,!(c||f))}const{parent:l}=n;l&&!l.hasCheckedOptimisedAppear&&gv(l)}function yv({attachResizeListener:n,defaultParent:i,measureScroll:o,checkIsScrollRoot:l,resetTransform:c}){return class{constructor(d={},m=i?.()){this.id=BE++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(qE),this.nodes.forEach(ZE),this.nodes.forEach(KE),this.nodes.forEach(YE)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new DE)}addEventListener(d,m){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Sf),this.eventHandlers.get(d).add(m)}notifyListeners(d,...m){const p=this.eventHandlers.get(d);p&&p.notify(...m)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=zy(d)&&!C2(d),this.instance=d;const{layoutId:m,layout:p,visualElement:h}=this.options;if(h&&!h.current&&h.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||m)&&(this.isLayoutDirty=!0),n){let g,b=0;const x=()=>this.root.updateBlockedByResize=!1;_t.read(()=>{b=window.innerWidth}),n(d,()=>{const A=window.innerWidth;A!==b&&(b=A,this.root.updateBlockedByResize=!0,g&&g(),g=ME(x,250),Nl.hasAnimatedSinceResize&&(Nl.hasAnimatedSinceResize=!1,this.nodes.forEach(lg)))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&h&&(m||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:b,hasRelativeLayoutChanged:x,layout:A})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||h.getDefaultTransition()||WE,{onLayoutAnimationStart:T,onLayoutAnimationComplete:_}=h.getProps(),U=!this.targetLayout||!pv(this.targetLayout,A),V=!b&&x;if(this.options.layoutRoot||this.resumeFrom||V||b&&(U||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const N={...Vf(E,"layout"),onPlay:T,onComplete:_};(h.shouldReduceMotion||this.options.layoutRoot)&&(N.delay=0,N.type=!1),this.startAnimation(N),this.setAnimationOrigin(g,V)}else b||lg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=A})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ta(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(QE),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&gv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const b=this.path[g];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:m,layout:p}=this.options;if(m===void 0&&!p)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(rg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(og);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(XE),this.nodes.forEach(jE),this.nodes.forEach(HE)):this.nodes.forEach(og),this.clearAllSnapshots();const m=pe.now();ae.delta=An(0,1e3/60,m-ae.timestamp),ae.timestamp=m,ae.isProcessing=!0,Sc.update.process(ae),Sc.preRender.process(ae),Sc.render.process(ae),ae.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Nf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(GE),this.sharedNodes.forEach(JE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,_t.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){_t.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ue(this.snapshot.measuredBox.x)&&!ue(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=jt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(m=!1),m&&this.instance){const p=l(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!mv(this.projectionDelta),p=this.getTransformTemplate(),h=p?p(this.latestValues,""):void 0,g=h!==this.prevTransformTemplateValue;d&&this.instance&&(m||Ea(this.latestValues)||g)&&(c(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const m=this.measurePageBox();let p=this.removeElementScroll(m);return d&&(p=this.removeTransform(p)),IE(p),{animationId:this.root.animationId,measuredBox:m,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:d}=this.options;if(!d)return jt();const m=d.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(tA))){const{scroll:h}=this.root;h&&(yi(m.x,h.offset.x),yi(m.y,h.offset.y))}return m}removeElementScroll(d){const m=jt();if(Ne(m,d),this.scroll?.wasRoot)return m;for(let p=0;p<this.path.length;p++){const h=this.path[p],{scroll:g,options:b}=h;h!==this.root&&g&&b.layoutScroll&&(g.wasRoot&&Ne(m,d),yi(m.x,g.offset.x),yi(m.y,g.offset.y))}return m}applyTransform(d,m=!1){const p=jt();Ne(p,d);for(let h=0;h<this.path.length;h++){const g=this.path[h];!m&&g.options.layoutScroll&&g.scroll&&g!==g.root&&vi(p,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Ea(g.latestValues)&&vi(p,g.latestValues)}return Ea(this.latestValues)&&vi(p,this.latestValues),p}removeTransform(d){const m=jt();Ne(m,d);for(let p=0;p<this.path.length;p++){const h=this.path[p];if(!h.instance||!Ea(h.latestValues))continue;Wc(h.latestValues)&&h.updateSnapshot();const g=jt(),b=h.measurePageBox();Ne(g,b),I0(m,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,g)}return Ea(this.latestValues)&&I0(m,this.latestValues),m}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ae.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==m;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:b}=this.options;if(!(!this.layout||!(g||b))){if(this.resolvedRelativeTargetAt=ae.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=jt(),this.relativeTargetOrigin=jt(),Lr(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),Ne(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=jt(),this.targetWithTransforms=jt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),oE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ne(this.target,this.layout.layoutBox),Jy(this.target,this.targetDelta)):Ne(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=jt(),this.relativeTargetOrigin=jt(),Lr(this.relativeTargetOrigin,this.target,x.target),Ne(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Wc(this.parent.latestValues)||Qy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const d=this.getLead(),m=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===ae.timestamp&&(p=!1),p)return;const{layout:h,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||g))return;Ne(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,x=this.treeScale.y;vT(this.layoutCorrected,this.treeScale,this.path,m),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=jt());const{target:A}=d;if(!A){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(F0(this.prevProjectionDelta.x,this.projectionDelta.x),F0(this.prevProjectionDelta.y,this.projectionDelta.y)),Nr(this.projectionDelta,this.layoutCorrected,A,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==x||!ig(this.projectionDelta.x,this.prevProjectionDelta.x)||!ig(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",A))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){if(this.options.visualElement?.scheduleRender(),d){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=bi(),this.projectionDelta=bi(),this.projectionDeltaWithTransform=bi()}setAnimationOrigin(d,m=!1){const p=this.snapshot,h=p?p.latestValues:{},g={...this.latestValues},b=bi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const x=jt(),A=p?p.source:void 0,E=this.layout?this.layout.source:void 0,T=A!==E,_=this.getStack(),U=!_||_.members.length<=1,V=!!(T&&!U&&this.options.crossfade===!0&&!this.path.some($E));this.animationProgress=0;let N;this.mixTargetDelta=X=>{const H=X/1e3;sg(b.x,d.x,H),sg(b.y,d.y,H),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Lr(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),FE(this.relativeTarget,this.relativeTargetOrigin,x,H),N&&UE(this.relativeTarget,N)&&(this.isProjectionDirty=!1),N||(N=jt()),Ne(N,this.relativeTarget)),T&&(this.animationValues=g,wE(g,h,this.latestValues,H,V,U)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=H},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(ta(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=_t.update(()=>{Nl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Si(0)),this.currentAnimation=AE(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),d.onUpdate&&d.onUpdate(m)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(PE),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:m,target:p,layout:h,latestValues:g}=d;if(!(!m||!p||!h)){if(this!==d&&this.layout&&h&&vv(this.options.animationType,this.layout.layoutBox,h.layoutBox)){p=this.target||jt();const b=ue(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+b;const x=ue(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+x}Ne(m,p),vi(m,g),Nr(this.projectionDeltaWithTransform,this.layoutCorrected,m,g)}}registerSharedNode(d,m){this.sharedNodes.has(d)||this.sharedNodes.set(d,new NE),this.sharedNodes.get(d).add(m);const h=m.options.initialPromotionConfig;m.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(m):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){const{layoutId:d}=this.options;return d?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:d}=this.options;return d?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:m,preserveFollowOpacity:p}={}){const h=this.getStack();h&&h.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let m=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(m=!0),!m)return;const h={};p.z&&kc("z",d,h,this.animationValues);for(let g=0;g<zc.length;g++)kc(`rotate${zc[g]}`,d,h,this.animationValues),kc(`skew${zc[g]}`,d,h,this.animationValues);d.render();for(const g in h)d.setStaticValue(g,h[g]),this.animationValues&&(this.animationValues[g]=h[g]);d.scheduleRender()}applyProjectionStyles(d,m){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=Ul(m?.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=Ul(m?.pointerEvents)||""),this.hasProjected&&!Ea(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=h.animationValues||h.latestValues;this.applyTransformsToTarget();let b=LE(this.projectionDeltaWithTransform,this.treeScale,g);p&&(b=p(g,b)),d.transform=b;const{x,y:A}=this.projectionDelta;d.transformOrigin=`${x.origin*100}% ${A.origin*100}% 0`,h.animationValues?d.opacity=h===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=h===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const E in Yr){if(g[E]===void 0)continue;const{correct:T,applyTo:_,isCSSVariable:U}=Yr[E],V=b==="none"?g[E]:T(g[E],h);if(_){const N=_.length;for(let X=0;X<N;X++)d[_[X]]=V}else U?this.options.visualElement.renderState.vars[E]=V:d[E]=V}this.options.layoutId&&(d.pointerEvents=h===this?Ul(m?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>d.currentAnimation?.stop()),this.root.nodes.forEach(rg),this.root.sharedNodes.clear()}}}function jE(n){n.updateLayout()}function HE(n){const i=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&i&&n.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:l}=n.layout,{animationType:c}=n.options,f=i.source!==n.layout.source;c==="size"?Le(g=>{const b=f?i.measuredBox[g]:i.layoutBox[g],x=ue(b);b.min=o[g].min,b.max=b.min+x}):vv(c,i.layoutBox,o)&&Le(g=>{const b=f?i.measuredBox[g]:i.layoutBox[g],x=ue(o[g]);b.max=b.min+x,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+x)});const d=bi();Nr(d,o,i.layoutBox);const m=bi();f?Nr(m,n.applyTransform(l,!0),i.measuredBox):Nr(m,o,i.layoutBox);const p=!mv(d);let h=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:b,layout:x}=g;if(b&&x){const A=jt();Lr(A,i.layoutBox,b.layoutBox);const E=jt();Lr(E,o,x.layoutBox),pv(A,E)||(h=!0),g.options.layoutRoot&&(n.relativeTarget=E,n.relativeTargetOrigin=A,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:o,snapshot:i,delta:m,layoutDelta:d,hasLayoutChanged:p,hasRelativeLayoutChanged:h})}else if(n.isLead()){const{onExitComplete:o}=n.options;o&&o()}n.options.transition=void 0}function qE(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function YE(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function GE(n){n.clearSnapshot()}function rg(n){n.clearMeasurements()}function og(n){n.isLayoutDirty=!1}function XE(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function lg(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function ZE(n){n.resolveTargetDelta()}function KE(n){n.calcProjection()}function QE(n){n.resetSkewAndRotation()}function JE(n){n.removeLeadSnapshot()}function sg(n,i,o){n.translate=kt(i.translate,0,o),n.scale=kt(i.scale,1,o),n.origin=i.origin,n.originPoint=i.originPoint}function ug(n,i,o,l){n.min=kt(i.min,o.min,l),n.max=kt(i.max,o.max,l)}function FE(n,i,o,l){ug(n.x,i.x,o.x,l),ug(n.y,i.y,o.y,l)}function $E(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const WE={duration:.45,ease:[.4,0,.1,1]},cg=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),fg=cg("applewebkit/")&&!cg("chrome/")?Math.round:Pe;function dg(n){n.min=fg(n.min),n.max=fg(n.max)}function IE(n){dg(n.x),dg(n.y)}function vv(n,i,o){return n==="position"||n==="preserve-aspect"&&!rE(ag(i),ag(o),.2)}function tA(n){return n!==n.root&&n.scroll?.wasRoot}const eA=yv({attachResizeListener:(n,i)=>Gr(n,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Vc={current:void 0},bv=yv({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Vc.current){const n=new eA({});n.mount(window),n.setOptions({layoutScroll:!0}),Vc.current=n}return Vc.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),nA={pan:{Feature:xE},drag:{Feature:bE,ProjectionNode:bv,MeasureLayout:fv}};function hg(n,i,o){const{props:l}=n;n.animationState&&l.whileHover&&n.animationState.setActive("whileHover",o==="Start");const c="onHover"+o,f=l[c];f&&_t.postRender(()=>f(i,Wr(i)))}class aA extends aa{mount(){const{current:i}=this.node;i&&(this.unmount=O2(i,(o,l)=>(hg(this.node,l,"Start"),c=>hg(this.node,c,"End"))))}unmount(){}}class iA extends aa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Jr(Gr(this.node.current,"focus",()=>this.onFocus()),Gr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function mg(n,i,o){const{props:l}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&l.whileTap&&n.animationState.setActive("whileTap",o==="Start");const c="onTap"+(o==="End"?"":o),f=l[c];f&&_t.postRender(()=>f(i,Wr(i)))}class rA extends aa{mount(){const{current:i}=this.node;i&&(this.unmount=w2(i,(o,l)=>(mg(this.node,l,"Start"),(c,{success:f})=>mg(this.node,c,f?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const of=new WeakMap,Uc=new WeakMap,oA=n=>{const i=of.get(n.target);i&&i(n)},lA=n=>{n.forEach(oA)};function sA({root:n,...i}){const o=n||document;Uc.has(o)||Uc.set(o,{});const l=Uc.get(o),c=JSON.stringify(i);return l[c]||(l[c]=new IntersectionObserver(lA,{root:n,...i})),l[c]}function uA(n,i,o){const l=sA(i);return of.set(n,o),l.observe(n),()=>{of.delete(n),l.unobserve(n)}}const cA={some:0,all:1};class fA extends aa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:o,margin:l,amount:c="some",once:f}=i,d={root:o?o.current:void 0,rootMargin:l,threshold:typeof c=="number"?c:cA[c]},m=p=>{const{isIntersecting:h}=p;if(this.isInView===h||(this.isInView=h,f&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:g,onViewportLeave:b}=this.node.getProps(),x=h?g:b;x&&x(p)};return uA(this.node.current,d,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:o}=this.node;["amount","margin","root"].some(dA(i,o))&&this.startObserver()}unmount(){}}function dA({viewport:n={}},{viewport:i={}}={}){return o=>n[o]!==i[o]}const hA={inView:{Feature:fA},tap:{Feature:rA},focus:{Feature:iA},hover:{Feature:aA}},mA={layout:{ProjectionNode:bv,MeasureLayout:fv}},pA={...IT,...hA,...nA,...mA},gA=pT(pA,RT),yA={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},vA={duration:.5,ease:"easeInOut"};function wr({children:n}){const{isLight:i}=VS();return M.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[]),mt.jsx(gA.div,{variants:yA,initial:"initial",animate:"animate",exit:"exit",transition:vA,className:"min-h-screen",children:n})}function Qt(n,i){i===void 0&&(i={});var o=i.insertAt;if(n&&typeof document<"u"){var l=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",o==="top"&&l.firstChild?l.insertBefore(c,l.firstChild):l.appendChild(c),c.styleSheet?c.styleSheet.cssText=n:c.appendChild(document.createTextNode(n))}}Qt(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var dt=function(){return dt=Object.assign||function(n){for(var i,o=1,l=arguments.length;o<l;o++)for(var c in i=arguments[o])Object.prototype.hasOwnProperty.call(i,c)&&(n[c]=i[c]);return n},dt.apply(this,arguments)};function Yl(n){return Yl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Yl(n)}var bA=/^\s+/,xA=/\s+$/;function W(n,i){if(i=i||{},(n=n||"")instanceof W)return n;if(!(this instanceof W))return new W(n,i);var o=(function(l){var c={r:0,g:0,b:0},f=1,d=null,m=null,p=null,h=!1,g=!1;typeof l=="string"&&(l=(function(E){E=E.replace(bA,"").replace(xA,"").toLowerCase();var T,_=!1;if(lf[E])E=lf[E],_=!0;else if(E=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(T=Ye.rgb.exec(E))?{r:T[1],g:T[2],b:T[3]}:(T=Ye.rgba.exec(E))?{r:T[1],g:T[2],b:T[3],a:T[4]}:(T=Ye.hsl.exec(E))?{h:T[1],s:T[2],l:T[3]}:(T=Ye.hsla.exec(E))?{h:T[1],s:T[2],l:T[3],a:T[4]}:(T=Ye.hsv.exec(E))?{h:T[1],s:T[2],v:T[3]}:(T=Ye.hsva.exec(E))?{h:T[1],s:T[2],v:T[3],a:T[4]}:(T=Ye.hex8.exec(E))?{r:De(T[1]),g:De(T[2]),b:De(T[3]),a:xg(T[4]),format:_?"name":"hex8"}:(T=Ye.hex6.exec(E))?{r:De(T[1]),g:De(T[2]),b:De(T[3]),format:_?"name":"hex"}:(T=Ye.hex4.exec(E))?{r:De(T[1]+""+T[1]),g:De(T[2]+""+T[2]),b:De(T[3]+""+T[3]),a:xg(T[4]+""+T[4]),format:_?"name":"hex8"}:(T=Ye.hex3.exec(E))?{r:De(T[1]+""+T[1]),g:De(T[2]+""+T[2]),b:De(T[3]+""+T[3]),format:_?"name":"hex"}:!1})(l)),Yl(l)=="object"&&(xn(l.r)&&xn(l.g)&&xn(l.b)?(b=l.r,x=l.g,A=l.b,c={r:255*Ct(b,255),g:255*Ct(x,255),b:255*Ct(A,255)},h=!0,g=String(l.r).substr(-1)==="%"?"prgb":"rgb"):xn(l.h)&&xn(l.s)&&xn(l.v)?(d=zr(l.s),m=zr(l.v),c=(function(E,T,_){E=6*Ct(E,360),T=Ct(T,100),_=Ct(_,100);var U=Math.floor(E),V=E-U,N=_*(1-T),X=_*(1-V*T),H=_*(1-(1-V)*T),K=U%6,J=[_,X,N,N,H,_][K],Z=[H,_,_,X,N,N][K],at=[N,N,H,_,_,X][K];return{r:255*J,g:255*Z,b:255*at}})(l.h,d,m),h=!0,g="hsv"):xn(l.h)&&xn(l.s)&&xn(l.l)&&(d=zr(l.s),p=zr(l.l),c=(function(E,T,_){var U,V,N;function X(J,Z,at){return at<0&&(at+=1),at>1&&(at-=1),at<1/6?J+6*(Z-J)*at:at<.5?Z:at<2/3?J+(Z-J)*(2/3-at)*6:J}if(E=Ct(E,360),T=Ct(T,100),_=Ct(_,100),T===0)U=V=N=_;else{var H=_<.5?_*(1+T):_+T-_*T,K=2*_-H;U=X(K,H,E+1/3),V=X(K,H,E),N=X(K,H,E-1/3)}return{r:255*U,g:255*V,b:255*N}})(l.h,d,p),h=!0,g="hsl"),l.hasOwnProperty("a")&&(f=l.a));var b,x,A;return f=xv(f),{ok:h,format:l.format||g,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:f}})(n);this._originalInput=n,this._r=o.r,this._g=o.g,this._b=o.b,this._a=o.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||o.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=o.ok}function pg(n,i,o){n=Ct(n,255),i=Ct(i,255),o=Ct(o,255);var l,c,f=Math.max(n,i,o),d=Math.min(n,i,o),m=(f+d)/2;if(f==d)l=c=0;else{var p=f-d;switch(c=m>.5?p/(2-f-d):p/(f+d),f){case n:l=(i-o)/p+(i<o?6:0);break;case i:l=(o-n)/p+2;break;case o:l=(n-i)/p+4}l/=6}return{h:l,s:c,l:m}}function gg(n,i,o){n=Ct(n,255),i=Ct(i,255),o=Ct(o,255);var l,c,f=Math.max(n,i,o),d=Math.min(n,i,o),m=f,p=f-d;if(c=f===0?0:p/f,f==d)l=0;else{switch(f){case n:l=(i-o)/p+(i<o?6:0);break;case i:l=(o-n)/p+2;break;case o:l=(n-i)/p+4}l/=6}return{h:l,s:c,v:m}}function yg(n,i,o,l){var c=[Xe(Math.round(n).toString(16)),Xe(Math.round(i).toString(16)),Xe(Math.round(o).toString(16))];return l&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function vg(n,i,o,l){return[Xe(Sv(l)),Xe(Math.round(n).toString(16)),Xe(Math.round(i).toString(16)),Xe(Math.round(o).toString(16))].join("")}function SA(n,i){i=i===0?0:i||10;var o=W(n).toHsl();return o.s-=i/100,o.s=Fl(o.s),W(o)}function TA(n,i){i=i===0?0:i||10;var o=W(n).toHsl();return o.s+=i/100,o.s=Fl(o.s),W(o)}function EA(n){return W(n).desaturate(100)}function AA(n,i){i=i===0?0:i||10;var o=W(n).toHsl();return o.l+=i/100,o.l=Fl(o.l),W(o)}function OA(n,i){i=i===0?0:i||10;var o=W(n).toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(-i/100*255))),o.g=Math.max(0,Math.min(255,o.g-Math.round(-i/100*255))),o.b=Math.max(0,Math.min(255,o.b-Math.round(-i/100*255))),W(o)}function DA(n,i){i=i===0?0:i||10;var o=W(n).toHsl();return o.l-=i/100,o.l=Fl(o.l),W(o)}function MA(n,i){var o=W(n).toHsl(),l=(o.h+i)%360;return o.h=l<0?360+l:l,W(o)}function RA(n){var i=W(n).toHsl();return i.h=(i.h+180)%360,W(i)}function bg(n,i){if(isNaN(i)||i<=0)throw new Error("Argument to polyad must be a positive number");for(var o=W(n).toHsl(),l=[W(n)],c=360/i,f=1;f<i;f++)l.push(W({h:(o.h+f*c)%360,s:o.s,l:o.l}));return l}function wA(n){var i=W(n).toHsl(),o=i.h;return[W(n),W({h:(o+72)%360,s:i.s,l:i.l}),W({h:(o+216)%360,s:i.s,l:i.l})]}function CA(n,i,o){i=i||6,o=o||30;var l=W(n).toHsl(),c=360/o,f=[W(n)];for(l.h=(l.h-(c*i>>1)+720)%360;--i;)l.h=(l.h+c)%360,f.push(W(l));return f}function _A(n,i){i=i||6;for(var o=W(n).toHsv(),l=o.h,c=o.s,f=o.v,d=[],m=1/i;i--;)d.push(W({h:l,s:c,v:f})),f=(f+m)%1;return d}W.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var n=this.toRgb();return(299*n.r+587*n.g+114*n.b)/1e3},getLuminance:function(){var n,i,o,l=this.toRgb();return n=l.r/255,i=l.g/255,o=l.b/255,.2126*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))},setAlpha:function(n){return this._a=xv(n),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var n=gg(this._r,this._g,this._b);return{h:360*n.h,s:n.s,v:n.v,a:this._a}},toHsvString:function(){var n=gg(this._r,this._g,this._b),i=Math.round(360*n.h),o=Math.round(100*n.s),l=Math.round(100*n.v);return this._a==1?"hsv("+i+", "+o+"%, "+l+"%)":"hsva("+i+", "+o+"%, "+l+"%, "+this._roundA+")"},toHsl:function(){var n=pg(this._r,this._g,this._b);return{h:360*n.h,s:n.s,l:n.l,a:this._a}},toHslString:function(){var n=pg(this._r,this._g,this._b),i=Math.round(360*n.h),o=Math.round(100*n.s),l=Math.round(100*n.l);return this._a==1?"hsl("+i+", "+o+"%, "+l+"%)":"hsla("+i+", "+o+"%, "+l+"%, "+this._roundA+")"},toHex:function(n){return yg(this._r,this._g,this._b,n)},toHexString:function(n){return"#"+this.toHex(n)},toHex8:function(n){return(function(i,o,l,c,f){var d=[Xe(Math.round(i).toString(16)),Xe(Math.round(o).toString(16)),Xe(Math.round(l).toString(16)),Xe(Sv(c))];return f&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)&&d[3].charAt(0)==d[3].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0)+d[3].charAt(0):d.join("")})(this._r,this._g,this._b,this._a,n)},toHex8String:function(n){return"#"+this.toHex8(n)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ct(this._r,255))+"%",g:Math.round(100*Ct(this._g,255))+"%",b:Math.round(100*Ct(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ct(this._r,255))+"%, "+Math.round(100*Ct(this._g,255))+"%, "+Math.round(100*Ct(this._b,255))+"%)":"rgba("+Math.round(100*Ct(this._r,255))+"%, "+Math.round(100*Ct(this._g,255))+"%, "+Math.round(100*Ct(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(zA[yg(this._r,this._g,this._b,!0)]||!1)},toFilter:function(n){var i="#"+vg(this._r,this._g,this._b,this._a),o=i,l=this._gradientType?"GradientType = 1, ":"";if(n){var c=W(n);o="#"+vg(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+l+"startColorstr="+i+",endColorstr="+o+")"},toString:function(n){var i=!!n;n=n||this._format;var o=!1,l=this._a<1&&this._a>=0;return i||!l||n!=="hex"&&n!=="hex6"&&n!=="hex3"&&n!=="hex4"&&n!=="hex8"&&n!=="name"?(n==="rgb"&&(o=this.toRgbString()),n==="prgb"&&(o=this.toPercentageRgbString()),n!=="hex"&&n!=="hex6"||(o=this.toHexString()),n==="hex3"&&(o=this.toHexString(!0)),n==="hex4"&&(o=this.toHex8String(!0)),n==="hex8"&&(o=this.toHex8String()),n==="name"&&(o=this.toName()),n==="hsl"&&(o=this.toHslString()),n==="hsv"&&(o=this.toHsvString()),o||this.toHexString()):n==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return W(this.toString())},_applyModification:function(n,i){var o=n.apply(null,[this].concat([].slice.call(i)));return this._r=o._r,this._g=o._g,this._b=o._b,this.setAlpha(o._a),this},lighten:function(){return this._applyModification(AA,arguments)},brighten:function(){return this._applyModification(OA,arguments)},darken:function(){return this._applyModification(DA,arguments)},desaturate:function(){return this._applyModification(SA,arguments)},saturate:function(){return this._applyModification(TA,arguments)},greyscale:function(){return this._applyModification(EA,arguments)},spin:function(){return this._applyModification(MA,arguments)},_applyCombination:function(n,i){return n.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(CA,arguments)},complement:function(){return this._applyCombination(RA,arguments)},monochromatic:function(){return this._applyCombination(_A,arguments)},splitcomplement:function(){return this._applyCombination(wA,arguments)},triad:function(){return this._applyCombination(bg,[3])},tetrad:function(){return this._applyCombination(bg,[4])}},W.fromRatio=function(n,i){if(Yl(n)=="object"){var o={};for(var l in n)n.hasOwnProperty(l)&&(o[l]=l==="a"?n[l]:zr(n[l]));n=o}return W(n,i)},W.equals=function(n,i){return!(!n||!i)&&W(n).toRgbString()==W(i).toRgbString()},W.random=function(){return W.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},W.mix=function(n,i,o){o=o===0?0:o||50;var l=W(n).toRgb(),c=W(i).toRgb(),f=o/100;return W({r:(c.r-l.r)*f+l.r,g:(c.g-l.g)*f+l.g,b:(c.b-l.b)*f+l.b,a:(c.a-l.a)*f+l.a})},W.readability=function(n,i){var o=W(n),l=W(i);return(Math.max(o.getLuminance(),l.getLuminance())+.05)/(Math.min(o.getLuminance(),l.getLuminance())+.05)},W.isReadable=function(n,i,o){var l,c,f=W.readability(n,i);switch(c=!1,(l=(function(d){var m,p;return m=((d=d||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(d.size||"small").toLowerCase(),m!=="AA"&&m!=="AAA"&&(m="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:m,size:p}})(o)).level+l.size){case"AAsmall":case"AAAlarge":c=f>=4.5;break;case"AAlarge":c=f>=3;break;case"AAAsmall":c=f>=7}return c},W.mostReadable=function(n,i,o){var l,c,f,d,m=null,p=0;c=(o=o||{}).includeFallbackColors,f=o.level,d=o.size;for(var h=0;h<i.length;h++)(l=W.readability(n,i[h]))>p&&(p=l,m=W(i[h]));return W.isReadable(n,m,{level:f,size:d})||!c?m:(o.includeFallbackColors=!1,W.mostReadable(n,["#fff","#000"],o))};var lf=W.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},zA=W.hexNames=(function(n){var i={};for(var o in n)n.hasOwnProperty(o)&&(i[n[o]]=o);return i})(lf);function xv(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function Ct(n,i){(function(l){return typeof l=="string"&&l.indexOf(".")!=-1&&parseFloat(l)===1})(n)&&(n="100%");var o=(function(l){return typeof l=="string"&&l.indexOf("%")!=-1})(n);return n=Math.min(i,Math.max(0,parseFloat(n))),o&&(n=parseInt(n*i,10)/100),Math.abs(n-i)<1e-6?1:n%i/parseFloat(i)}function Fl(n){return Math.min(1,Math.max(0,n))}function De(n){return parseInt(n,16)}function Xe(n){return n.length==1?"0"+n:""+n}function zr(n){return n<=1&&(n=100*n+"%"),n}function Sv(n){return Math.round(255*parseFloat(n)).toString(16)}function xg(n){return De(n)/255}var Wn,Al,Ol,Ye=(Al="[\\s|\\(]+("+(Wn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Wn+")[,|\\s]+("+Wn+")\\s*\\)?",Ol="[\\s|\\(]+("+Wn+")[,|\\s]+("+Wn+")[,|\\s]+("+Wn+")[,|\\s]+("+Wn+")\\s*\\)?",{CSS_UNIT:new RegExp(Wn),rgb:new RegExp("rgb"+Al),rgba:new RegExp("rgba"+Ol),hsl:new RegExp("hsl"+Al),hsla:new RegExp("hsla"+Ol),hsv:new RegExp("hsv"+Al),hsva:new RegExp("hsva"+Ol),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function xn(n){return!!Ye.CSS_UNIT.exec(n)}var Ir=function(n,i){var o=(typeof n=="string"?parseInt(n):n)||0;if(o>=-5&&o<=5){var l=o,c=parseFloat(i),f=c+l*(c/5)*-1;return(f==0||f<=Number.EPSILON)&&(f=.1),{animationPeriod:f+"s"}}return{animationPeriod:i}},to=function(n,i){var o=n||{},l="";switch(i){case"small":l="12px";break;case"medium":l="16px";break;case"large":l="20px";break;default:l=void 0}var c={};if(o.fontSize){var f=o.fontSize;c=(function(d,m){var p={};for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&m.indexOf(h)<0&&(p[h]=d[h]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function"){var g=0;for(h=Object.getOwnPropertySymbols(d);g<h.length;g++)m.indexOf(h[g])<0&&Object.prototype.propertyIsEnumerable.call(d,h[g])&&(p[h[g]]=d[h[g]])}return p})(o,["fontSize"]),l=f}return{fontSize:l,styles:c}},kA={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},eo=function(n){var i=n.className,o=n.text,l=n.textColor,c=n.staticText,f=n.style;return o?Ot.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(i||"").trim(),style:dt(dt(dt({},c&&kA),l&&{color:l,mixBlendMode:"unset"}),f&&f)},typeof o=="string"&&o.length?o:"loading"):null},Sn="rgb(50, 205, 50)";function no(n,i){if(i===void 0&&(i=0),n.length===0)throw new Error("Input array cannot be empty!");var o=[];return(function l(c,f){return f===void 0&&(f=0),o.push.apply(o,c),o.length<f&&l(o,f),o.slice(0,f)})(n,i)}Qt(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);W(Sn).toRgb();Array.from({length:4},(function(n,i){return"--atom-phase".concat(i+1,"-rgb")}));Qt(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},(function(n,i){return"--commet-phase".concat(i+1,"-color")}));Qt(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var Dl=Array.from({length:4},(function(n,i){return"--OP-annulus-phase".concat(i+1,"-color")})),VA=function(n){var i,o=to(n?.style,n?.size),l=o.styles,c=o.fontSize,f=n?.easing,d=Ir(n?.speedPlus,"1.5s").animationPeriod,m=(function(h){var g={},b=Dl.length;if(h instanceof Array){for(var x=no(h,b),A=0;A<x.length&&!(A>=4);A++)g[Dl[A]]=x[A];return g}try{if(typeof h!="string")throw new Error("Color String expected");for(var E=0;E<b;E++)g[Dl[E]]=h}catch(T){for(T instanceof Error?console.warn("[".concat(T.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),E=0;E<b;E++)g[Dl[E]]=Sn}return g})((i=n?.color)!==null&&i!==void 0?i:""),p=n?.dense?4.3:2.9;return Ot.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:dt(dt(dt(dt(dt({},c&&{fontSize:c}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),m),l),role:"status","aria-live":"polite","aria-label":"Loading"},Ot.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},Ot.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},Ot.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:p,strokeMiterlimit:"10"})),Ot.createElement(eo,{className:"OP-annulus-text",text:n?.text,textColor:n?.textColor})))};function Nc(n){return n&&n.Math===Math&&n}Qt(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var hi=Nc(typeof window=="object"&&window)||Nc(typeof self=="object"&&self)||Nc(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();function Tv(){var n,i;return!((n=hi?.crypto)===null||n===void 0)&&n.randomUUID?hi.crypto.randomUUID():!((i=hi?.btoa)===null||i===void 0)&&i.name?hi.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var Ml=Array.from({length:4},(function(n,i){return"--OP-dotted-phase".concat(i+1,"-color")})),UA=function(n){var i,o=to(n?.style,n?.size),l=o.styles,c=o.fontSize,f=n?.easing,d=Ir(n?.speedPlus,"1.2s").animationPeriod,m=(function(h){var g={},b=Ml.length;if(h instanceof Array){for(var x=no(h,b),A=0;A<x.length&&!(A>=4);A++)g[Ml[A]]=x[A];return g}try{if(typeof h!="string")throw new Error("Color String expected");for(var E=0;E<b;E++)g[Ml[E]]=h}catch(T){for(T instanceof Error?console.warn("[".concat(T.message,']: Received "').concat(typeof h,'" with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),E=0;E<b;E++)g[Ml[E]]=Sn}return g})((i=n?.color)!==null&&i!==void 0?i:""),p=n?.dense?16:12;return Ot.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:dt(dt(dt(dt(dt({},c&&{fontSize:c}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),m),l),role:"status","aria-live":"polite","aria-label":"Loading"},Ot.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:p}).map((function(h,g){var b=(function(E,T,_){if(T===16){var U=360*E/T,V=T-E,N=Number.parseFloat(_)/T*V*-1;return{transform:"rotate(".concat(U,"deg)"),animationDelay:"".concat(N,"s")}}return{transform:"",animationDelay:""}})(g,p,d),x=b.animationDelay,A=b.transform;return Ot.createElement("span",{key:Tv(),className:"rli-d-i-b dot-shape-holder",style:A?{transform:A}:void 0},Ot.createElement("span",{className:"dot",style:x?{animationDelay:x}:void 0}))})),Ot.createElement(eo,{className:"OP-dotted-text",text:n?.text,textColor:n?.textColor})))};Qt(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var Rl=Array.from({length:4},(function(n,i){return"--OP-spokes-phase".concat(i+1,"-color")})),NA=function(n){var i,o=to(n?.style,n?.size),l=o.styles,c=o.fontSize,f=n?.easing,d=Ir(n?.speedPlus,"1.2s").animationPeriod,m=(function(h){var g={},b=Rl.length;if(h instanceof Array){for(var x=no(h,b),A=0;A<x.length&&!(A>=4);A++)g[Rl[A]]=x[A];return g}try{if(typeof h!="string")throw new Error("Color String expected");for(var E=0;E<b;E++)g[Rl[E]]=h}catch(T){for(T instanceof Error?console.warn("[".concat(T.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),E=0;E<b;E++)g[Rl[E]]=Sn}return g})((i=n?.color)!==null&&i!==void 0?i:""),p=n?.dense?16:12;return Ot.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:dt(dt(dt(dt(dt({},c&&{fontSize:c}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),m),l),role:"status","aria-live":"polite","aria-label":"Loading"},Ot.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:p},(function(h,g){return Ot.createElement("span",{key:Tv(),className:"rli-d-i-b spoke",style:LA(g,p,d)})}))),Ot.createElement(eo,{text:n?.text,textColor:n?.textColor}))};function LA(n,i,o){if(i===16){var l=i-n,c=Number.parseFloat(o)/i;return{transform:"rotate(".concat(360*n/i,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((l-1)*c*-1,"s")}}}Qt(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var wl=Array.from({length:4},(function(n,i){return"--OP-annulus-dual-sectors-phase".concat(i+1,"-color")})),PA=function(n){var i,o=to(n?.style,n?.size),l=o.styles,c=o.fontSize,f=n?.easing,d=Ir(n?.speedPlus,"1.2s").animationPeriod,m=(function(h){var g={},b=wl.length;if(h instanceof Array){for(var x=no(h,b),A=0;A<x.length&&!(A>=4);A++)g[wl[A]]=x[A];return g}try{if(typeof h!="string")throw new Error("Color String expected");for(var E=0;E<b;E++)g[wl[E]]=h}catch(T){for(T instanceof Error?console.warn("[".concat(T.message,']: Received "').concat(typeof h,'" with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),E=0;E<b;E++)g[wl[E]]=Sn}return g})((i=n?.color)!==null&&i!==void 0?i:""),p=n.dense?"0.45em":"";return Ot.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:dt(dt(dt(dt(dt({},c&&{fontSize:c}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),m),l),role:"status","aria-live":"polite","aria-label":"Loading"},Ot.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},Ot.createElement("span",{className:"rli-d-i-b annulus-sectors",style:dt({},p&&{borderWidth:p})}),Ot.createElement(eo,{className:"OP-annulus-dual-sectors-text",text:n?.text,textColor:n?.textColor})))};Qt(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var Cr=Array.from({length:4},(function(n,i){return["--OP-annulus-track-phase".concat(i+1,"-color"),"--OP-annulus-sector-phase".concat(i+1,"-color")]})),Cl=function(n){return n===void 0&&(n=1),.25*n},BA=function(n){var i,o=to(n?.style,n?.size),l=o.styles,c=o.fontSize,f=n?.easing,d=Ir(n?.speedPlus,"1s").animationPeriod,m=(function(h){var g={},b=Cr.length;if(h instanceof Array){for(var x=no(h,b),A=0;A<x.length&&!(A>=4);A++){var E=Cr[A];try{if(!(U=W(x[A])).isValid())throw new Error("Invalid Color: ".concat(U.getOriginalInput()));var T=U.setAlpha(Cl(U.getAlpha())).toRgbString(),_=x[A];g[E[0]]=T,g[E[1]]=_}catch{_=Sn,T=(U=W(Sn)).setAlpha(Cl(U.getAlpha())).toRgbString(),g[E[0]]=T,g[E[1]]=_}}return g}try{var U=W(h);if(typeof h!="string")throw new Error("Color String expected");if(!U.isValid())throw new Error("Invalid Color: ".concat(U.getOriginalInput()));_=h,T=U.setAlpha(Cl(U.getAlpha())).toRgbString();for(var V=0;V<b;V++)g[(E=Cr[V])[0]]=T,g[E[1]]=_}catch(N){for(N instanceof Error?console.warn("[".concat(N.message,']: Received "').concat(typeof h,'" with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),_=Sn,T=(U=W(Sn)).setAlpha(Cl(U.getAlpha())).toRgbString(),V=0;V<Cr.length;V++)g[(E=Cr[V])[0]]=T,g[E[1]]=_}return g})((i=n?.color)!==null&&i!==void 0?i:""),p=n.dense?"0.45em":"";return Ot.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:dt(dt(dt(dt(dt({},c&&{fontSize:c}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),m),l),role:"status","aria-live":"polite","aria-label":"Loading"},Ot.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},Ot.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:dt({},p&&{borderWidth:p})}),Ot.createElement(eo,{className:"OP-annulus-sector-text",text:n?.text,textColor:n?.textColor})))},jA=function(n){var i=Object(n).variant,o=i===void 0?"disc":i;return o==="dotted"?Ot.createElement(UA,dt({},n)):o==="spokes"?Ot.createElement(NA,dt({},n)):o==="disc"?Ot.createElement(VA,dt({},n)):o==="split-disc"?Ot.createElement(PA,dt({},n)):o==="track-disc"?Ot.createElement(BA,dt({},n)):null};Qt(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},(function(n,i){return"--four-square-phase".concat(i+1,"-color")}));Qt(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},(function(n,i){return"--mosaic-phase".concat(i+1,"-color")}));Qt(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},(function(n,i){return"--riple-phase".concat(i+1,"-color")}));Qt(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},(function(n,i){return"--TD-pulsate-phase".concat(i+1,"-color")}));Qt(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},(function(n,i){return"--TD-brick-stack-phase".concat(i+1,"-color")}));Qt(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},(function(n,i){return"--TD-bob-phase".concat(i+1,"-color")}));Qt(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},(function(n,i){return"--TD-bounce-phase".concat(i+1,"-color")}));Qt(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},(function(n,i){return"--shape-phase".concat(i+1,"-color")}));Qt(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},(function(n,i){return"--trophySpin-phase".concat(i+1,"-color")}));Qt(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},(function(n,i){return"--slab-phase".concat(i+1,"-color")}));Qt(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},(function(n,i){return"--life-line-phase".concat(i+1,"-color")}));const HA=M.lazy(()=>Qr(()=>import("./HomePage-B0Qjt19X.js").then(n=>n.H),__vite__mapDeps([0,1]),import.meta.url)),qA=M.lazy(()=>Qr(()=>import("./ProjetKerisnel-C_jTntss.js"),__vite__mapDeps([2,1,3,4,5]),import.meta.url)),YA=M.lazy(()=>Qr(()=>import("./ProjetEvenementiel-2nSGECdp.js"),__vite__mapDeps([6,1,3,4,5]),import.meta.url)),GA=M.lazy(()=>Qr(()=>import("./ProjetPizzeria-CkjApo9B.js"),__vite__mapDeps([7,1,3,4,5]),import.meta.url)),XA=M.lazy(()=>Qr(()=>import("./ProjetDashboard-CI77EbIh.js"),__vite__mapDeps([8,1,3,4,5]),import.meta.url));function ZA(){const n=na();return mt.jsx(L2,{mode:"wait",children:mt.jsx(M.Suspense,{fallback:mt.jsx("div",{className:"flex items-center justify-center h-screen",children:mt.jsx(jA,{color:"#ac7b38",size:"large",text:"",textColor:""})}),children:mt.jsxs(Ix,{location:n,children:[mt.jsx(mi,{path:"/",element:mt.jsx(wr,{children:mt.jsx(HA,{})})}),mt.jsx(mi,{path:"/projet-E-Commerce",element:mt.jsx(wr,{children:mt.jsx(qA,{})})}),mt.jsx(mi,{path:"/projet-Evenementiel",element:mt.jsx(wr,{children:mt.jsx(YA,{})})}),mt.jsx(mi,{path:"/projet-Pizzeria",element:mt.jsx(wr,{children:mt.jsx(GA,{})})}),mt.jsx(mi,{path:"/projet-Dashboard",element:mt.jsx(wr,{children:mt.jsx(XA,{})})})]},n.pathname)})})}ex.createRoot(document.getElementById("root")).render(mt.jsx(M.StrictMode,{children:mt.jsx(kS,{children:mt.jsx(ES,{children:mt.jsx(ZA,{})})})}));export{Bg as L,Qr as _,W1 as a,Lx as b,Ot as c,na as d,S2 as e,X1 as g,mt as j,gA as m,M as r,VS as u};
