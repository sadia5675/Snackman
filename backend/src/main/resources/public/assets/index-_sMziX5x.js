(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Hu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const st={},dr=[],ti=()=>{},m_=()=>!1,il=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Vu=n=>n.startsWith("onUpdate:"),wt=Object.assign,zu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},g_=Object.prototype.hasOwnProperty,ut=(n,e)=>g_.call(n,e),ke=Array.isArray,pr=n=>ko(n)==="[object Map]",Fr=n=>ko(n)==="[object Set]",kh=n=>ko(n)==="[object Date]",Xe=n=>typeof n=="function",Rt=n=>typeof n=="string",Vn=n=>typeof n=="symbol",gt=n=>n!==null&&typeof n=="object",Mp=n=>(gt(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),bp=Object.prototype.toString,ko=n=>bp.call(n),__=n=>ko(n).slice(8,-1),Ep=n=>ko(n)==="[object Object]",Gu=n=>Rt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,uo=Hu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sl=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},v_=/-(\w)/g,_n=sl(n=>n.replace(v_,(e,t)=>t?t.toUpperCase():"")),x_=/\B([A-Z])/g,ls=sl(n=>n.replace(x_,"-$1").toLowerCase()),rl=sl(n=>n.charAt(0).toUpperCase()+n.slice(1)),wa=sl(n=>n?`on${rl(n)}`:""),rn=(n,e)=>!Object.is(n,e),Ra=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Tp=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ha=n=>{const e=parseFloat(n);return isNaN(e)?n:e},y_=n=>{const e=Rt(n)?Number(n):NaN;return isNaN(e)?n:e};let Hh;const ol=()=>Hh||(Hh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Br(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Rt(i)?E_(i):Br(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Rt(n)||gt(n))return n}const S_=/;(?![^(]*\))/g,M_=/:([^]+)/,b_=/\/\*[^]*?\*\//g;function E_(n){const e={};return n.replace(b_,"").split(S_).forEach(t=>{if(t){const i=t.split(M_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Tn(n){let e="";if(Rt(n))e=n;else if(ke(n))for(let t=0;t<n.length;t++){const i=Tn(n[t]);i&&(e+=i+" ")}else if(gt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const T_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",A_=Hu(T_);function Ap(n){return!!n||n===""}function w_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Ho(n[i],e[i]);return t}function Ho(n,e){if(n===e)return!0;let t=kh(n),i=kh(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Vn(n),i=Vn(e),t||i)return n===e;if(t=ke(n),i=ke(e),t||i)return t&&i?w_(n,e):!1;if(t=gt(n),i=gt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ho(n[o],e[o]))return!1}}return String(n)===String(e)}function Wu(n,e){return n.findIndex(t=>Ho(t,e))}const wp=n=>!!(n&&n.__v_isRef===!0),Pt=n=>Rt(n)?n:n==null?"":ke(n)||gt(n)&&(n.toString===bp||!Xe(n.toString))?wp(n)?Pt(n.value):JSON.stringify(n,Rp,2):String(n),Rp=(n,e)=>wp(e)?Rp(n,e.value):pr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Cl(i,r)+" =>"]=s,t),{})}:Fr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Cl(t))}:Vn(e)?Cl(e):gt(e)&&!ke(e)&&!Ep(e)?String(e):e,Cl=(n,e="")=>{var t;return Vn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yt;class Cp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Yt,!e&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Yt;try{return Yt=this,e()}finally{Yt=t}}}on(){Yt=this}off(){Yt=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Pp(n){return new Cp(n)}function Lp(){return Yt}function R_(n,e=!1){Yt&&Yt.cleanups.push(n)}let vt;const Pl=new WeakSet;class Ip{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Yt&&Yt.active&&Yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pl.has(this)&&(Pl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Np(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Vh(this),Up(this);const e=vt,t=kn;vt=this,kn=!0;try{return this.fn()}finally{Op(this),vt=e,kn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ju(e);this.deps=this.depsTail=void 0,Vh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pc(this)&&this.run()}get dirty(){return Pc(this)}}let Dp=0,ho,fo;function Np(n,e=!1){if(n.flags|=8,e){n.next=fo,fo=n;return}n.next=ho,ho=n}function Xu(){Dp++}function $u(){if(--Dp>0)return;if(fo){let e=fo;for(fo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ho;){let e=ho;for(ho=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Up(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Op(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),ju(i),C_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Pc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Fp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Fp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Eo))return;n.globalVersion=Eo;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Pc(n)){n.flags&=-3;return}const t=vt,i=kn;vt=n,kn=!0;try{Up(n);const s=n.fn(n._value);(e.version===0||rn(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{vt=t,kn=i,Op(n),n.flags&=-3}}function ju(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)ju(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function C_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let kn=!0;const Bp=[];function cs(){Bp.push(kn),kn=!1}function us(){const n=Bp.pop();kn=n===void 0?!0:n}function Vh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=vt;vt=void 0;try{e()}finally{vt=t}}}let Eo=0;class P_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class al{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!vt||!kn||vt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==vt)t=this.activeLink=new P_(vt,this),vt.deps?(t.prevDep=vt.depsTail,vt.depsTail.nextDep=t,vt.depsTail=t):vt.deps=vt.depsTail=t,kp(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=vt.depsTail,t.nextDep=void 0,vt.depsTail.nextDep=t,vt.depsTail=t,vt.deps===t&&(vt.deps=i)}return t}trigger(e){this.version++,Eo++,this.notify(e)}notify(e){Xu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{$u()}}}function kp(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)kp(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Va=new WeakMap,Is=Symbol(""),Lc=Symbol(""),To=Symbol("");function Wt(n,e,t){if(kn&&vt){let i=Va.get(n);i||Va.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new al),s.map=i,s.key=t),s.track()}}function bi(n,e,t,i,s,r){const o=Va.get(n);if(!o){Eo++;return}const a=l=>{l&&l.trigger()};if(Xu(),e==="clear")o.forEach(a);else{const l=ke(n),c=l&&Gu(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===To||!Vn(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(To)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Is)),pr(n)&&a(o.get(Lc)));break;case"delete":l||(a(o.get(Is)),pr(n)&&a(o.get(Lc)));break;case"set":pr(n)&&a(o.get(Is));break}}$u()}function L_(n,e){const t=Va.get(n);return t&&t.get(e)}function Gs(n){const e=Qe(n);return e===n?e:(Wt(e,"iterate",To),An(n)?e:e.map(Xt))}function ll(n){return Wt(n=Qe(n),"iterate",To),n}const I_={__proto__:null,[Symbol.iterator](){return Ll(this,Symbol.iterator,Xt)},concat(...n){return Gs(this).concat(...n.map(e=>ke(e)?Gs(e):e))},entries(){return Ll(this,"entries",n=>(n[1]=Xt(n[1]),n))},every(n,e){return fi(this,"every",n,e,void 0,arguments)},filter(n,e){return fi(this,"filter",n,e,t=>t.map(Xt),arguments)},find(n,e){return fi(this,"find",n,e,Xt,arguments)},findIndex(n,e){return fi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return fi(this,"findLast",n,e,Xt,arguments)},findLastIndex(n,e){return fi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return fi(this,"forEach",n,e,void 0,arguments)},includes(...n){return Il(this,"includes",n)},indexOf(...n){return Il(this,"indexOf",n)},join(n){return Gs(this).join(n)},lastIndexOf(...n){return Il(this,"lastIndexOf",n)},map(n,e){return fi(this,"map",n,e,void 0,arguments)},pop(){return $r(this,"pop")},push(...n){return $r(this,"push",n)},reduce(n,...e){return zh(this,"reduce",n,e)},reduceRight(n,...e){return zh(this,"reduceRight",n,e)},shift(){return $r(this,"shift")},some(n,e){return fi(this,"some",n,e,void 0,arguments)},splice(...n){return $r(this,"splice",n)},toReversed(){return Gs(this).toReversed()},toSorted(n){return Gs(this).toSorted(n)},toSpliced(...n){return Gs(this).toSpliced(...n)},unshift(...n){return $r(this,"unshift",n)},values(){return Ll(this,"values",Xt)}};function Ll(n,e,t){const i=ll(n),s=i[e]();return i!==n&&!An(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const D_=Array.prototype;function fi(n,e,t,i,s,r){const o=ll(n),a=o!==n&&!An(n),l=o[e];if(l!==D_[e]){const h=l.apply(n,r);return a?Xt(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,Xt(h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function zh(n,e,t,i){const s=ll(n);let r=t;return s!==n&&(An(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Xt(a),l,n)}),s[e](r,...i)}function Il(n,e,t){const i=Qe(n);Wt(i,"iterate",To);const s=i[e](...t);return(s===-1||s===!1)&&Yu(t[0])?(t[0]=Qe(t[0]),i[e](...t)):s}function $r(n,e,t=[]){cs(),Xu();const i=Qe(n)[e].apply(n,t);return $u(),us(),i}const N_=Hu("__proto__,__v_isRef,__isVue"),Hp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Vn));function U_(n){Vn(n)||(n=String(n));const e=Qe(this);return Wt(e,"has",n),e.hasOwnProperty(n)}class Vp{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?X_:Xp:r?Wp:Gp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ke(e);if(!s){let l;if(o&&(l=I_[t]))return l;if(t==="hasOwnProperty")return U_}const a=Reflect.get(e,t,St(e)?e:i);return(Vn(t)?Hp.has(t):N_(t))||(s||Wt(e,"get",t),r)?a:St(a)?o&&Gu(t)?a:a.value:gt(a)?s?jp(a):hs(a):a}}class zp extends Vp{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=Us(r);if(!An(i)&&!Us(i)&&(r=Qe(r),i=Qe(i)),!ke(e)&&St(r)&&!St(i))return l?!1:(r.value=i,!0)}const o=ke(e)&&Gu(t)?Number(t)<e.length:ut(e,t),a=Reflect.set(e,t,i,St(e)?e:s);return e===Qe(s)&&(o?rn(i,r)&&bi(e,"set",t,i):bi(e,"add",t,i)),a}deleteProperty(e,t){const i=ut(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&bi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Vn(t)||!Hp.has(t))&&Wt(e,"has",t),i}ownKeys(e){return Wt(e,"iterate",ke(e)?"length":Is),Reflect.ownKeys(e)}}class O_ extends Vp{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const F_=new zp,B_=new O_,k_=new zp(!0);const Ic=n=>n,qo=n=>Reflect.getPrototypeOf(n);function H_(n,e,t){return function(...i){const s=this.__v_raw,r=Qe(s),o=pr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Ic:e?Dc:Xt;return!e&&Wt(r,"iterate",l?Lc:Is),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Ko(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function V_(n,e){const t={get(s){const r=this.__v_raw,o=Qe(r),a=Qe(s);n||(rn(s,a)&&Wt(o,"get",s),Wt(o,"get",a));const{has:l}=qo(o),c=e?Ic:n?Dc:Xt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Wt(Qe(s),"iterate",Is),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=Qe(r),a=Qe(s);return n||(rn(s,a)&&Wt(o,"has",s),Wt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Qe(a),c=e?Ic:n?Dc:Xt;return!n&&Wt(l,"iterate",Is),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return wt(t,n?{add:Ko("add"),set:Ko("set"),delete:Ko("delete"),clear:Ko("clear")}:{add(s){!e&&!An(s)&&!Us(s)&&(s=Qe(s));const r=Qe(this);return qo(r).has.call(r,s)||(r.add(s),bi(r,"add",s,s)),this},set(s,r){!e&&!An(r)&&!Us(r)&&(r=Qe(r));const o=Qe(this),{has:a,get:l}=qo(o);let c=a.call(o,s);c||(s=Qe(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?rn(r,u)&&bi(o,"set",s,r):bi(o,"add",s,r),this},delete(s){const r=Qe(this),{has:o,get:a}=qo(r);let l=o.call(r,s);l||(s=Qe(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&bi(r,"delete",s,void 0),c},clear(){const s=Qe(this),r=s.size!==0,o=s.clear();return r&&bi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=H_(s,n,e)}),t}function qu(n,e){const t=V_(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ut(t,s)&&s in i?t:i,s,r)}const z_={get:qu(!1,!1)},G_={get:qu(!1,!0)},W_={get:qu(!0,!1)};const Gp=new WeakMap,Wp=new WeakMap,Xp=new WeakMap,X_=new WeakMap;function $_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function j_(n){return n.__v_skip||!Object.isExtensible(n)?0:$_(__(n))}function hs(n){return Us(n)?n:Ku(n,!1,F_,z_,Gp)}function $p(n){return Ku(n,!1,k_,G_,Wp)}function jp(n){return Ku(n,!0,B_,W_,Xp)}function Ku(n,e,t,i,s){if(!gt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=j_(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Ri(n){return Us(n)?Ri(n.__v_raw):!!(n&&n.__v_isReactive)}function Us(n){return!!(n&&n.__v_isReadonly)}function An(n){return!!(n&&n.__v_isShallow)}function Yu(n){return n?!!n.__v_raw:!1}function Qe(n){const e=n&&n.__v_raw;return e?Qe(e):n}function Zu(n){return!ut(n,"__v_skip")&&Object.isExtensible(n)&&Tp(n,"__v_skip",!0),n}const Xt=n=>gt(n)?hs(n):n,Dc=n=>gt(n)?jp(n):n;function St(n){return n?n.__v_isRef===!0:!1}function rt(n){return qp(n,!1)}function q_(n){return qp(n,!0)}function qp(n,e){return St(n)?n:new K_(n,e)}class K_{constructor(e,t){this.dep=new al,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Qe(e),this._value=t?e:Xt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||An(e)||Us(e);e=i?e:Qe(e),rn(e,t)&&(this._rawValue=e,this._value=i?e:Xt(e),this.dep.trigger())}}function Ce(n){return St(n)?n.value:n}const Y_={get:(n,e,t)=>e==="__v_raw"?n:Ce(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return St(s)&&!St(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Kp(n){return Ri(n)?n:new Proxy(n,Y_)}class Z_{constructor(e){this.__v_isRef=!0,this._value=void 0;const t=this.dep=new al,{get:i,set:s}=e(t.track.bind(t),t.trigger.bind(t));this._get=i,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function J_(n){return new Z_(n)}function Q_(n){const e=ke(n)?new Array(n.length):{};for(const t in n)e[t]=Yp(n,t);return e}class ev{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return L_(Qe(this._object),this._key)}}class tv{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function nv(n,e,t){return St(n)?n:Xe(n)?new tv(n):gt(n)&&arguments.length>1?Yp(n,e,t):rt(n)}function Yp(n,e,t){const i=n[e];return St(i)?i:new ev(n,e,t)}class iv{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new al(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Eo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&vt!==this)return Np(this,!0),!0}get value(){const e=this.dep.track();return Fp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function sv(n,e,t=!1){let i,s;return Xe(n)?i=n:(i=n.get,s=n.set),new iv(i,s,t)}const Yo={},za=new WeakMap;let Es;function rv(n,e=!1,t=Es){if(t){let i=za.get(t);i||za.set(t,i=[]),i.push(n)}}function ov(n,e,t=st){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=M=>s?M:An(M)||s===!1||s===0?Ei(M,1):Ei(M);let u,h,f,d,g=!1,_=!1;if(St(n)?(h=()=>n.value,g=An(n)):Ri(n)?(h=()=>c(n),g=!0):ke(n)?(_=!0,g=n.some(M=>Ri(M)||An(M)),h=()=>n.map(M=>{if(St(M))return M.value;if(Ri(M))return c(M);if(Xe(M))return l?l(M,2):M()})):Xe(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){cs();try{f()}finally{us()}}const M=Es;Es=u;try{return l?l(n,3,[d]):n(d)}finally{Es=M}}:h=ti,e&&s){const M=h,D=s===!0?1/0:s;h=()=>Ei(M(),D)}const m=Lp(),p=()=>{u.stop(),m&&m.active&&zu(m.effects,u)};if(r&&e){const M=e;e=(...D)=>{M(...D),p()}}let T=_?new Array(n.length).fill(Yo):Yo;const b=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const D=u.run();if(s||g||(_?D.some((L,P)=>rn(L,T[P])):rn(D,T))){f&&f();const L=Es;Es=u;try{const P=[D,T===Yo?void 0:_&&T[0]===Yo?[]:T,d];l?l(e,3,P):e(...P),T=D}finally{Es=L}}}else u.run()};return a&&a(b),u=new Ip(h),u.scheduler=o?()=>o(b,!1):b,d=M=>rv(M,!1,u),f=u.onStop=()=>{const M=za.get(u);if(M){if(l)l(M,4);else for(const D of M)D();za.delete(u)}},e?i?b(!0):T=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ei(n,e=1/0,t){if(e<=0||!gt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,St(n))Ei(n.value,e,t);else if(ke(n))for(let i=0;i<n.length;i++)Ei(n[i],e,t);else if(Fr(n)||pr(n))n.forEach(i=>{Ei(i,e,t)});else if(Ep(n)){for(const i in n)Ei(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ei(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vo(n,e,t,i){try{return i?n(...i):n()}catch(s){cl(s,e,t)}}function zn(n,e,t,i){if(Xe(n)){const s=Vo(n,e,t,i);return s&&Mp(s)&&s.catch(r=>{cl(r,e,t)}),s}if(ke(n)){const s=[];for(let r=0;r<n.length;r++)s.push(zn(n[r],e,t,i));return s}}function cl(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||st;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){cs(),Vo(r,null,10,[n,l,c]),us();return}}av(n,t,s,i,o)}function av(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Zt=[];let Kn=-1;const mr=[];let Yi=null,cr=0;const Zp=Promise.resolve();let Ga=null;function kr(n){const e=Ga||Zp;return n?e.then(this?n.bind(this):n):e}function lv(n){let e=Kn+1,t=Zt.length;for(;e<t;){const i=e+t>>>1,s=Zt[i],r=Ao(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Ju(n){if(!(n.flags&1)){const e=Ao(n),t=Zt[Zt.length-1];!t||!(n.flags&2)&&e>=Ao(t)?Zt.push(n):Zt.splice(lv(e),0,n),n.flags|=1,Jp()}}function Jp(){Ga||(Ga=Zp.then(em))}function cv(n){ke(n)?mr.push(...n):Yi&&n.id===-1?Yi.splice(cr+1,0,n):n.flags&1||(mr.push(n),n.flags|=1),Jp()}function Gh(n,e,t=Kn+1){for(;t<Zt.length;t++){const i=Zt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Zt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Qp(n){if(mr.length){const e=[...new Set(mr)].sort((t,i)=>Ao(t)-Ao(i));if(mr.length=0,Yi){Yi.push(...e);return}for(Yi=e,cr=0;cr<Yi.length;cr++){const t=Yi[cr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Yi=null,cr=0}}const Ao=n=>n.id==null?n.flags&2?-1:1/0:n.id;function em(n){try{for(Kn=0;Kn<Zt.length;Kn++){const e=Zt[Kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Kn<Zt.length;Kn++){const e=Zt[Kn];e&&(e.flags&=-2)}Kn=-1,Zt.length=0,Qp(),Ga=null,(Zt.length||mr.length)&&em()}}let Dt=null,tm=null;function Wa(n){const e=Dt;return Dt=n,tm=n&&n.type.__scopeId||null,e}function Ii(n,e=Dt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Zh(-1);const r=Wa(e);let o;try{o=n(...s)}finally{Wa(r),i._d&&Zh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function bn(n,e){if(Dt===null)return n;const t=pl(Dt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=st]=e[s];r&&(Xe(r)&&(r={mounted:r,updated:r}),r.deep&&Ei(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ps(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(cs(),zn(l,t,8,[n.el,a,n,e]),us())}}const uv=Symbol("_vte"),hv=n=>n.__isTeleport,Ws=Symbol("_leaveCb"),Zo=Symbol("_enterCb");function fv(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ni(()=>{n.isMounted=!0}),am(()=>{n.isUnmounting=!0}),n}const xn=[Function,Array],dv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xn,onEnter:xn,onAfterEnter:xn,onEnterCancelled:xn,onBeforeLeave:xn,onLeave:xn,onAfterLeave:xn,onLeaveCancelled:xn,onBeforeAppear:xn,onAppear:xn,onAfterAppear:xn,onAppearCancelled:xn};function pv(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Nc(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:T,onAppearCancelled:b}=e,M=String(n.key),D=pv(t,n),L=(v,x)=>{v&&zn(v,i,9,x)},P=(v,x)=>{const R=x[1];L(v,x),ke(v)?v.every(I=>I.length<=1)&&R():v.length<=1&&R()},C={mode:o,persisted:a,beforeEnter(v){let x=l;if(!t.isMounted)if(r)x=m||l;else return;v[Ws]&&v[Ws](!0);const R=D[M];R&&ur(n,R)&&R.el[Ws]&&R.el[Ws](),L(x,[v])},enter(v){let x=c,R=u,I=h;if(!t.isMounted)if(r)x=p||c,R=T||u,I=b||h;else return;let F=!1;const J=v[Zo]=ae=>{F||(F=!0,ae?L(I,[v]):L(R,[v]),C.delayedLeave&&C.delayedLeave(),v[Zo]=void 0)};x?P(x,[v,J]):J()},leave(v,x){const R=String(n.key);if(v[Zo]&&v[Zo](!0),t.isUnmounting)return x();L(f,[v]);let I=!1;const F=v[Ws]=J=>{I||(I=!0,x(),J?L(_,[v]):L(g,[v]),v[Ws]=void 0,D[R]===n&&delete D[R])};D[R]=n,d?P(d,[v,F]):F()},clone(v){return Nc(v,e,t,i)}};return C}function wo(n,e){n.shapeFlag&6&&n.component?(n.transition=e,wo(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function nm(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===nt?(o.patchFlag&128&&s++,i=i.concat(nm(o.children,e,a))):(e||o.type!==Di)&&i.push(a!=null?Os(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Lt(n,e){return Xe(n)?wt({name:n.name},e,{setup:n}):n}function im(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Xa(n,e,t,i,s=!1){if(ke(n)){n.forEach((g,_)=>Xa(g,e&&(ke(e)?e[_]:e),t,i,s));return}if(gr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Xa(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?pl(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===st?a.refs={}:a.refs,h=a.setupState,f=Qe(h),d=h===st?()=>!1:g=>ut(f,g);if(c!=null&&c!==l&&(Rt(c)?(u[c]=null,d(c)&&(h[c]=null)):St(c)&&(c.value=null)),Xe(l))Vo(l,a,12,[o,u]);else{const g=Rt(l),_=St(l);if(g||_){const m=()=>{if(n.f){const p=g?d(l)?h[l]:u[l]:l.value;s?ke(p)&&zu(p,r):ke(p)?p.includes(r)||p.push(r):g?(u[l]=[r],d(l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,d(l)&&(h[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,un(m,t)):m()}}}ol().requestIdleCallback;ol().cancelIdleCallback;const gr=n=>!!n.type.__asyncLoader,sm=n=>n.type.__isKeepAlive;function mv(n,e){rm(n,"a",e)}function gv(n,e){rm(n,"da",e)}function rm(n,e,t=Bt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ul(e,i,t),t){let s=t.parent;for(;s&&s.parent;)sm(s.parent.vnode)&&_v(i,e,t,s),s=s.parent}}function _v(n,e,t,i){const s=ul(e,n,i,!0);lm(()=>{zu(i[e],s)},t)}function ul(n,e,t=Bt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{cs();const a=zo(t),l=zn(e,t,n,o);return a(),us(),l});return i?s.unshift(r):s.push(r),r}}const Oi=n=>(e,t=Bt)=>{(!Po||n==="sp")&&ul(n,(...i)=>e(...i),t)},vv=Oi("bm"),ni=Oi("m"),xv=Oi("bu"),om=Oi("u"),am=Oi("bum"),lm=Oi("um"),yv=Oi("sp"),Sv=Oi("rtg"),Mv=Oi("rtc");function bv(n,e=Bt){ul("ec",n,e)}const cm="components";function po(n,e){return hm(cm,n,!0,e)||n}const um=Symbol.for("v-ndc");function Qu(n){return Rt(n)?hm(cm,n,!1)||n:n||um}function hm(n,e,t=!0,i=!1){const s=Dt||Bt;if(s){const r=s.type;{const a=f0(r,!1);if(a&&(a===e||a===_n(e)||a===rl(_n(e))))return r}const o=Wh(s[n]||r[n],e)||Wh(s.appContext[n],e);return!o&&i?r:o}}function Wh(n,e){return n&&(n[e]||n[_n(e)]||n[rl(_n(e))])}function ii(n,e,t,i){let s;const r=t,o=ke(n);if(o||Rt(n)){const a=o&&Ri(n);let l=!1;a&&(l=!An(n),n=ll(n)),s=new Array(n.length);for(let c=0,u=n.length;c<u;c++)s[c]=e(l?Xt(n[c]):n[c],c,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(gt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function Uc(n,e,t={},i,s){if(Dt.ce||Dt.parent&&gr(Dt.parent)&&Dt.parent.ce)return e!=="default"&&(t.name=e),be(),pn(nt,null,[Nt("slot",t,i)],64);let r=n[e];r&&r._c&&(r._d=!1),be();const o=r&&fm(r(t)),a=t.key||o&&o.key,l=pn(nt,{key:(a&&!Vn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function fm(n){return n.some(e=>Co(e)?!(e.type===Di||e.type===nt&&!fm(e.children)):!0)?n:null}function Ev(n,e){const t={};for(const i in n)t[wa(i)]=n[i];return t}const Oc=n=>n?Dm(n)?pl(n):Oc(n.parent):null,mo=wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Oc(n.parent),$root:n=>Oc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>eh(n),$forceUpdate:n=>n.f||(n.f=()=>{Ju(n.update)}),$nextTick:n=>n.n||(n.n=kr.bind(n.proxy)),$watch:n=>qv.bind(n)}),Dl=(n,e)=>n!==st&&!n.__isScriptSetup&&ut(n,e),Tv={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Dl(i,e))return o[e]=1,i[e];if(s!==st&&ut(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&ut(c,e))return o[e]=3,r[e];if(t!==st&&ut(t,e))return o[e]=4,t[e];Fc&&(o[e]=0)}}const u=mo[e];let h,f;if(u)return e==="$attrs"&&Wt(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==st&&ut(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,ut(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Dl(s,e)?(s[e]=t,!0):i!==st&&ut(i,e)?(i[e]=t,!0):ut(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==st&&ut(n,o)||Dl(e,o)||(a=r[0])&&ut(a,o)||ut(i,o)||ut(mo,o)||ut(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ut(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function $a(n){return ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}function Av(n,e){return!n||!e?n||e:ke(n)&&ke(e)?n.concat(e):wt({},$a(n),$a(e))}let Fc=!0;function wv(n){const e=eh(n),t=n.proxy,i=n.ctx;Fc=!1,e.beforeCreate&&Xh(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:b,unmounted:M,render:D,renderTracked:L,renderTriggered:P,errorCaptured:C,serverPrefetch:v,expose:x,inheritAttrs:R,components:I,directives:F,filters:J}=e;if(c&&Rv(c,i,null),o)for(const se in o){const j=o[se];Xe(j)&&(i[se]=j.bind(t))}if(s){const se=s.call(t,t);gt(se)&&(n.data=hs(se))}if(Fc=!0,r)for(const se in r){const j=r[se],ve=Xe(j)?j.bind(t,t):Xe(j.get)?j.get.bind(t,t):ti,ye=!Xe(j)&&Xe(j.set)?j.set.bind(t):ti,Pe=bt({get:ve,set:ye});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>Pe.value,set:ge=>Pe.value=ge})}if(a)for(const se in a)dm(a[se],i,t,se);if(l){const se=Xe(l)?l.call(t):l;Reflect.ownKeys(se).forEach(j=>{Ca(j,se[j])})}u&&Xh(u,n,"c");function K(se,j){ke(j)?j.forEach(ve=>se(ve.bind(t))):j&&se(j.bind(t))}if(K(vv,h),K(ni,f),K(xv,d),K(om,g),K(mv,_),K(gv,m),K(bv,C),K(Mv,L),K(Sv,P),K(am,T),K(lm,M),K(yv,v),ke(x))if(x.length){const se=n.exposed||(n.exposed={});x.forEach(j=>{Object.defineProperty(se,j,{get:()=>t[j],set:ve=>t[j]=ve})})}else n.exposed||(n.exposed={});D&&n.render===ti&&(n.render=D),R!=null&&(n.inheritAttrs=R),I&&(n.components=I),F&&(n.directives=F),v&&im(n)}function Rv(n,e,t=ti){ke(n)&&(n=Bc(n));for(const i in n){const s=n[i];let r;gt(s)?"default"in s?r=wn(s.from||i,s.default,!0):r=wn(s.from||i):r=wn(s),St(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Xh(n,e,t){zn(ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function dm(n,e,t,i){let s=i.includes(".")?Am(t,i):()=>t[i];if(Rt(n)){const r=e[n];Xe(r)&&Ns(s,r)}else if(Xe(n))Ns(s,n.bind(t));else if(gt(n))if(ke(n))n.forEach(r=>dm(r,e,t,i));else{const r=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(r)&&Ns(s,r,n)}}function eh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>ja(l,c,o,!0)),ja(l,e,o)),gt(e)&&r.set(e,l),l}function ja(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&ja(n,r,t,!0),s&&s.forEach(o=>ja(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Cv[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Cv={data:$h,props:jh,emits:jh,methods:so,computed:so,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:so,directives:so,watch:Lv,provide:$h,inject:Pv};function $h(n,e){return e?n?function(){return wt(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function Pv(n,e){return so(Bc(n),Bc(e))}function Bc(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function qt(n,e){return n?[...new Set([].concat(n,e))]:e}function so(n,e){return n?wt(Object.create(null),n,e):e}function jh(n,e){return n?ke(n)&&ke(e)?[...new Set([...n,...e])]:wt(Object.create(null),$a(n),$a(e??{})):e}function Lv(n,e){if(!n)return e;if(!e)return n;const t=wt(Object.create(null),n);for(const i in e)t[i]=qt(n[i],e[i]);return t}function pm(){return{app:null,config:{isNativeTag:m_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Iv=0;function Dv(n,e){return function(i,s=null){Xe(i)||(i=wt({},i)),s!=null&&!gt(s)&&(s=null);const r=pm(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Iv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:p0,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Xe(u.install)?(o.add(u),u.install(c,...h)):Xe(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||Nt(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(d,u):n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,pl(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(zn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Ds;Ds=c;try{return u()}finally{Ds=h}}};return c}}let Ds=null;function Ca(n,e){if(Bt){let t=Bt.provides;const i=Bt.parent&&Bt.parent.provides;i===t&&(t=Bt.provides=Object.create(i)),t[n]=e}}function wn(n,e,t=!1){const i=Bt||Dt;if(i||Ds){const s=Ds?Ds._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}function Nv(){return!!(Bt||Dt||Ds)}const mm={},gm=()=>Object.create(mm),_m=n=>Object.getPrototypeOf(n)===mm;function Uv(n,e,t,i=!1){const s={},r=gm();n.propsDefaults=Object.create(null),vm(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:$p(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Ov(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Qe(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(hl(n.emitsOptions,f))continue;const d=e[f];if(l)if(ut(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=_n(f);s[g]=kc(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{vm(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!ut(e,h)&&((u=ls(h))===h||!ut(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=kc(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!ut(e,h))&&(delete r[h],c=!0)}c&&bi(n.attrs,"set","")}function vm(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(uo(l))continue;const c=e[l];let u;s&&ut(s,u=_n(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:hl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Qe(t),c=a||st;for(let u=0;u<r.length;u++){const h=r[u];t[h]=kc(s,l,h,c[h],n,!ut(c,h))}}return o}function kc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=ut(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=zo(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ls(t))&&(i=!0))}return i}const Fv=new WeakMap;function xm(n,e,t=!1){const i=t?Fv:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Xe(n)){const u=h=>{l=!0;const[f,d]=xm(h,e,!0);wt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return gt(n)&&i.set(n,dr),dr;if(ke(r))for(let u=0;u<r.length;u++){const h=_n(r[u]);qh(h)&&(o[h]=st)}else if(r)for(const u in r){const h=_n(u);if(qh(h)){const f=r[u],d=o[h]=ke(f)||Xe(f)?{type:f}:wt({},f),g=d.type;let _=!1,m=!0;if(ke(g))for(let p=0;p<g.length;++p){const T=g[p],b=Xe(T)&&T.name;if(b==="Boolean"){_=!0;break}else b==="String"&&(m=!1)}else _=Xe(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||ut(d,"default"))&&a.push(h)}}const c=[o,a];return gt(n)&&i.set(n,c),c}function qh(n){return n[0]!=="$"&&!uo(n)}const ym=n=>n[0]==="_"||n==="$stable",th=n=>ke(n)?n.map(Yn):[Yn(n)],Bv=(n,e,t)=>{if(e._n)return e;const i=Ii((...s)=>th(e(...s)),t);return i._c=!1,i},Sm=(n,e,t)=>{const i=n._ctx;for(const s in n){if(ym(s))continue;const r=n[s];if(Xe(r))e[s]=Bv(s,r,i);else if(r!=null){const o=th(r);e[s]=()=>o}}},Mm=(n,e)=>{const t=th(e);n.slots.default=()=>t},bm=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},kv=(n,e,t)=>{const i=n.slots=gm();if(n.vnode.shapeFlag&32){const s=e._;s?(bm(i,e,t),t&&Tp(i,"_",s,!0)):Sm(e,i)}else e&&Mm(n,e)},Hv=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=st;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:bm(s,e,t):(r=!e.$stable,Sm(e,s)),o=e}else e&&(Mm(n,e),o={default:1});if(r)for(const a in s)!ym(a)&&o[a]==null&&delete s[a]},un=t0;function Vv(n){return zv(n)}function zv(n,e){const t=ol();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=ti,insertStaticContent:g}=n,_=(w,S,W,te=null,q=null,Y=null,he=void 0,ie=null,E=!!S.dynamicChildren)=>{if(w===S)return;w&&!ur(w,S)&&(te=U(w),ge(w,q,Y,!0),w=null),S.patchFlag===-2&&(E=!1,S.dynamicChildren=null);const{type:y,ref:N,shapeFlag:B}=S;switch(y){case fl:m(w,S,W,te);break;case Di:p(w,S,W,te);break;case Ol:w==null&&T(S,W,te,he);break;case nt:I(w,S,W,te,q,Y,he,ie,E);break;default:B&1?D(w,S,W,te,q,Y,he,ie,E):B&6?F(w,S,W,te,q,Y,he,ie,E):(B&64||B&128)&&y.process(w,S,W,te,q,Y,he,ie,E,ue)}N!=null&&q&&Xa(N,w&&w.ref,Y,S||w,!S)},m=(w,S,W,te)=>{if(w==null)i(S.el=a(S.children),W,te);else{const q=S.el=w.el;S.children!==w.children&&c(q,S.children)}},p=(w,S,W,te)=>{w==null?i(S.el=l(S.children||""),W,te):S.el=w.el},T=(w,S,W,te)=>{[w.el,w.anchor]=g(w.children,S,W,te,w.el,w.anchor)},b=({el:w,anchor:S},W,te)=>{let q;for(;w&&w!==S;)q=f(w),i(w,W,te),w=q;i(S,W,te)},M=({el:w,anchor:S})=>{let W;for(;w&&w!==S;)W=f(w),s(w),w=W;s(S)},D=(w,S,W,te,q,Y,he,ie,E)=>{S.type==="svg"?he="svg":S.type==="math"&&(he="mathml"),w==null?L(S,W,te,q,Y,he,ie,E):v(w,S,q,Y,he,ie,E)},L=(w,S,W,te,q,Y,he,ie)=>{let E,y;const{props:N,shapeFlag:B,transition:$,dirs:X}=w;if(E=w.el=o(w.type,Y,N&&N.is,N),B&8?u(E,w.children):B&16&&C(w.children,E,null,te,q,Nl(w,Y),he,ie),X&&ps(w,null,te,"created"),P(E,w,w.scopeId,he,te),N){for(const Z in N)Z!=="value"&&!uo(Z)&&r(E,Z,null,N[Z],Y,te);"value"in N&&r(E,"value",null,N.value,Y),(y=N.onVnodeBeforeMount)&&jn(y,te,w)}X&&ps(w,null,te,"beforeMount");const le=Gv(q,$);le&&$.beforeEnter(E),i(E,S,W),((y=N&&N.onVnodeMounted)||le||X)&&un(()=>{y&&jn(y,te,w),le&&$.enter(E),X&&ps(w,null,te,"mounted")},q)},P=(w,S,W,te,q)=>{if(W&&d(w,W),te)for(let Y=0;Y<te.length;Y++)d(w,te[Y]);if(q){let Y=q.subTree;if(S===Y||Cm(Y.type)&&(Y.ssContent===S||Y.ssFallback===S)){const he=q.vnode;P(w,he,he.scopeId,he.slotScopeIds,q.parent)}}},C=(w,S,W,te,q,Y,he,ie,E=0)=>{for(let y=E;y<w.length;y++){const N=w[y]=ie?Zi(w[y]):Yn(w[y]);_(null,N,S,W,te,q,Y,he,ie)}},v=(w,S,W,te,q,Y,he)=>{const ie=S.el=w.el;let{patchFlag:E,dynamicChildren:y,dirs:N}=S;E|=w.patchFlag&16;const B=w.props||st,$=S.props||st;let X;if(W&&ms(W,!1),(X=$.onVnodeBeforeUpdate)&&jn(X,W,S,w),N&&ps(S,w,W,"beforeUpdate"),W&&ms(W,!0),(B.innerHTML&&$.innerHTML==null||B.textContent&&$.textContent==null)&&u(ie,""),y?x(w.dynamicChildren,y,ie,W,te,Nl(S,q),Y):he||j(w,S,ie,null,W,te,Nl(S,q),Y,!1),E>0){if(E&16)R(ie,B,$,W,q);else if(E&2&&B.class!==$.class&&r(ie,"class",null,$.class,q),E&4&&r(ie,"style",B.style,$.style,q),E&8){const le=S.dynamicProps;for(let Z=0;Z<le.length;Z++){const me=le[Z],Ge=B[me],fe=$[me];(fe!==Ge||me==="value")&&r(ie,me,Ge,fe,q,W)}}E&1&&w.children!==S.children&&u(ie,S.children)}else!he&&y==null&&R(ie,B,$,W,q);((X=$.onVnodeUpdated)||N)&&un(()=>{X&&jn(X,W,S,w),N&&ps(S,w,W,"updated")},te)},x=(w,S,W,te,q,Y,he)=>{for(let ie=0;ie<S.length;ie++){const E=w[ie],y=S[ie],N=E.el&&(E.type===nt||!ur(E,y)||E.shapeFlag&70)?h(E.el):W;_(E,y,N,null,te,q,Y,he,!0)}},R=(w,S,W,te,q)=>{if(S!==W){if(S!==st)for(const Y in S)!uo(Y)&&!(Y in W)&&r(w,Y,S[Y],null,q,te);for(const Y in W){if(uo(Y))continue;const he=W[Y],ie=S[Y];he!==ie&&Y!=="value"&&r(w,Y,ie,he,q,te)}"value"in W&&r(w,"value",S.value,W.value,q)}},I=(w,S,W,te,q,Y,he,ie,E)=>{const y=S.el=w?w.el:a(""),N=S.anchor=w?w.anchor:a("");let{patchFlag:B,dynamicChildren:$,slotScopeIds:X}=S;X&&(ie=ie?ie.concat(X):X),w==null?(i(y,W,te),i(N,W,te),C(S.children||[],W,N,q,Y,he,ie,E)):B>0&&B&64&&$&&w.dynamicChildren?(x(w.dynamicChildren,$,W,q,Y,he,ie),(S.key!=null||q&&S===q.subTree)&&Em(w,S,!0)):j(w,S,W,N,q,Y,he,ie,E)},F=(w,S,W,te,q,Y,he,ie,E)=>{S.slotScopeIds=ie,w==null?S.shapeFlag&512?q.ctx.activate(S,W,te,he,E):J(S,W,te,q,Y,he,E):ae(w,S,E)},J=(w,S,W,te,q,Y,he)=>{const ie=w.component=a0(w,te,q);if(sm(w)&&(ie.ctx.renderer=ue),l0(ie,!1,he),ie.asyncDep){if(q&&q.registerDep(ie,K,he),!w.el){const E=ie.subTree=Nt(Di);p(null,E,S,W)}}else K(ie,w,S,W,q,Y,he)},ae=(w,S,W)=>{const te=S.component=w.component;if(Qv(w,S,W))if(te.asyncDep&&!te.asyncResolved){se(te,S,W);return}else te.next=S,te.update();else S.el=w.el,te.vnode=S},K=(w,S,W,te,q,Y,he)=>{const ie=()=>{if(w.isMounted){let{next:B,bu:$,u:X,parent:le,vnode:Z}=w;{const Ie=Tm(w);if(Ie){B&&(B.el=Z.el,se(w,B,he)),Ie.asyncDep.then(()=>{w.isUnmounted||ie()});return}}let me=B,Ge;ms(w,!1),B?(B.el=Z.el,se(w,B,he)):B=Z,$&&Ra($),(Ge=B.props&&B.props.onVnodeBeforeUpdate)&&jn(Ge,le,B,Z),ms(w,!0);const fe=Ul(w),Se=w.subTree;w.subTree=fe,_(Se,fe,h(Se.el),U(Se),w,q,Y),B.el=fe.el,me===null&&e0(w,fe.el),X&&un(X,q),(Ge=B.props&&B.props.onVnodeUpdated)&&un(()=>jn(Ge,le,B,Z),q)}else{let B;const{el:$,props:X}=S,{bm:le,m:Z,parent:me,root:Ge,type:fe}=w,Se=gr(S);if(ms(w,!1),le&&Ra(le),!Se&&(B=X&&X.onVnodeBeforeMount)&&jn(B,me,S),ms(w,!0),$&&Ne){const Ie=()=>{w.subTree=Ul(w),Ne($,w.subTree,w,q,null)};Se&&fe.__asyncHydrate?fe.__asyncHydrate($,w,Ie):Ie()}else{Ge.ce&&Ge.ce._injectChildStyle(fe);const Ie=w.subTree=Ul(w);_(null,Ie,W,te,w,q,Y),S.el=Ie.el}if(Z&&un(Z,q),!Se&&(B=X&&X.onVnodeMounted)){const Ie=S;un(()=>jn(B,me,Ie),q)}(S.shapeFlag&256||me&&gr(me.vnode)&&me.vnode.shapeFlag&256)&&w.a&&un(w.a,q),w.isMounted=!0,S=W=te=null}};w.scope.on();const E=w.effect=new Ip(ie);w.scope.off();const y=w.update=E.run.bind(E),N=w.job=E.runIfDirty.bind(E);N.i=w,N.id=w.uid,E.scheduler=()=>Ju(N),ms(w,!0),y()},se=(w,S,W)=>{S.component=w;const te=w.vnode.props;w.vnode=S,w.next=null,Ov(w,S.props,te,W),Hv(w,S.children,W),cs(),Gh(w),us()},j=(w,S,W,te,q,Y,he,ie,E=!1)=>{const y=w&&w.children,N=w?w.shapeFlag:0,B=S.children,{patchFlag:$,shapeFlag:X}=S;if($>0){if($&128){ye(y,B,W,te,q,Y,he,ie,E);return}else if($&256){ve(y,B,W,te,q,Y,he,ie,E);return}}X&8?(N&16&&pe(y,q,Y),B!==y&&u(W,B)):N&16?X&16?ye(y,B,W,te,q,Y,he,ie,E):pe(y,q,Y,!0):(N&8&&u(W,""),X&16&&C(B,W,te,q,Y,he,ie,E))},ve=(w,S,W,te,q,Y,he,ie,E)=>{w=w||dr,S=S||dr;const y=w.length,N=S.length,B=Math.min(y,N);let $;for($=0;$<B;$++){const X=S[$]=E?Zi(S[$]):Yn(S[$]);_(w[$],X,W,null,q,Y,he,ie,E)}y>N?pe(w,q,Y,!0,!1,B):C(S,W,te,q,Y,he,ie,E,B)},ye=(w,S,W,te,q,Y,he,ie,E)=>{let y=0;const N=S.length;let B=w.length-1,$=N-1;for(;y<=B&&y<=$;){const X=w[y],le=S[y]=E?Zi(S[y]):Yn(S[y]);if(ur(X,le))_(X,le,W,null,q,Y,he,ie,E);else break;y++}for(;y<=B&&y<=$;){const X=w[B],le=S[$]=E?Zi(S[$]):Yn(S[$]);if(ur(X,le))_(X,le,W,null,q,Y,he,ie,E);else break;B--,$--}if(y>B){if(y<=$){const X=$+1,le=X<N?S[X].el:te;for(;y<=$;)_(null,S[y]=E?Zi(S[y]):Yn(S[y]),W,le,q,Y,he,ie,E),y++}}else if(y>$)for(;y<=B;)ge(w[y],q,Y,!0),y++;else{const X=y,le=y,Z=new Map;for(y=le;y<=$;y++){const ze=S[y]=E?Zi(S[y]):Yn(S[y]);ze.key!=null&&Z.set(ze.key,y)}let me,Ge=0;const fe=$-le+1;let Se=!1,Ie=0;const He=new Array(fe);for(y=0;y<fe;y++)He[y]=0;for(y=X;y<=B;y++){const ze=w[y];if(Ge>=fe){ge(ze,q,Y,!0);continue}let Ve;if(ze.key!=null)Ve=Z.get(ze.key);else for(me=le;me<=$;me++)if(He[me-le]===0&&ur(ze,S[me])){Ve=me;break}Ve===void 0?ge(ze,q,Y,!0):(He[Ve-le]=y+1,Ve>=Ie?Ie=Ve:Se=!0,_(ze,S[Ve],W,null,q,Y,he,ie,E),Ge++)}const Le=Se?Wv(He):dr;for(me=Le.length-1,y=fe-1;y>=0;y--){const ze=le+y,Ve=S[ze],ht=ze+1<N?S[ze+1].el:te;He[y]===0?_(null,Ve,W,ht,q,Y,he,ie,E):Se&&(me<0||y!==Le[me]?Pe(Ve,W,ht,2):me--)}}},Pe=(w,S,W,te,q=null)=>{const{el:Y,type:he,transition:ie,children:E,shapeFlag:y}=w;if(y&6){Pe(w.component.subTree,S,W,te);return}if(y&128){w.suspense.move(S,W,te);return}if(y&64){he.move(w,S,W,ue);return}if(he===nt){i(Y,S,W);for(let B=0;B<E.length;B++)Pe(E[B],S,W,te);i(w.anchor,S,W);return}if(he===Ol){b(w,S,W);return}if(te!==2&&y&1&&ie)if(te===0)ie.beforeEnter(Y),i(Y,S,W),un(()=>ie.enter(Y),q);else{const{leave:B,delayLeave:$,afterLeave:X}=ie,le=()=>i(Y,S,W),Z=()=>{B(Y,()=>{le(),X&&X()})};$?$(Y,le,Z):Z()}else i(Y,S,W)},ge=(w,S,W,te=!1,q=!1)=>{const{type:Y,props:he,ref:ie,children:E,dynamicChildren:y,shapeFlag:N,patchFlag:B,dirs:$,cacheIndex:X}=w;if(B===-2&&(q=!1),ie!=null&&Xa(ie,null,W,w,!0),X!=null&&(S.renderCache[X]=void 0),N&256){S.ctx.deactivate(w);return}const le=N&1&&$,Z=!gr(w);let me;if(Z&&(me=he&&he.onVnodeBeforeUnmount)&&jn(me,S,w),N&6)de(w.component,W,te);else{if(N&128){w.suspense.unmount(W,te);return}le&&ps(w,null,S,"beforeUnmount"),N&64?w.type.remove(w,S,W,ue,te):y&&!y.hasOnce&&(Y!==nt||B>0&&B&64)?pe(y,S,W,!1,!0):(Y===nt&&B&384||!q&&N&16)&&pe(E,S,W),te&&xe(w)}(Z&&(me=he&&he.onVnodeUnmounted)||le)&&un(()=>{me&&jn(me,S,w),le&&ps(w,null,S,"unmounted")},W)},xe=w=>{const{type:S,el:W,anchor:te,transition:q}=w;if(S===nt){z(W,te);return}if(S===Ol){M(w);return}const Y=()=>{s(W),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(w.shapeFlag&1&&q&&!q.persisted){const{leave:he,delayLeave:ie}=q,E=()=>he(W,Y);ie?ie(w.el,Y,E):E()}else Y()},z=(w,S)=>{let W;for(;w!==S;)W=f(w),s(w),w=W;s(S)},de=(w,S,W)=>{const{bum:te,scope:q,job:Y,subTree:he,um:ie,m:E,a:y}=w;Kh(E),Kh(y),te&&Ra(te),q.stop(),Y&&(Y.flags|=8,ge(he,w,S,W)),ie&&un(ie,S),un(()=>{w.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},pe=(w,S,W,te=!1,q=!1,Y=0)=>{for(let he=Y;he<w.length;he++)ge(w[he],S,W,te,q)},U=w=>{if(w.shapeFlag&6)return U(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const S=f(w.anchor||w.el),W=S&&S[uv];return W?f(W):S};let re=!1;const G=(w,S,W)=>{w==null?S._vnode&&ge(S._vnode,null,null,!0):_(S._vnode||null,w,S,null,null,null,W),S._vnode=w,re||(re=!0,Gh(),Qp(),re=!1)},ue={p:_,um:ge,m:Pe,r:xe,mt:J,mc:C,pc:j,pbc:x,n:U,o:n};let Ee,Ne;return{render:G,hydrate:Ee,createApp:Dv(G,Ee)}}function Nl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ms({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Gv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Em(n,e,t=!1){const i=n.children,s=e.children;if(ke(i)&&ke(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Zi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Em(o,a)),a.type===fl&&(a.el=o.el)}}function Wv(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Tm(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Tm(e)}function Kh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Xv=Symbol.for("v-scx"),$v=()=>wn(Xv);function jv(n,e){return nh(n,null,{flush:"sync"})}function Ns(n,e,t){return nh(n,e,t)}function nh(n,e,t=st){const{immediate:i,deep:s,flush:r,once:o}=t,a=wt({},t),l=e&&i||!e&&r!=="post";let c;if(Po){if(r==="sync"){const d=$v();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=ti,d.resume=ti,d.pause=ti,d}}const u=Bt;a.call=(d,g,_)=>zn(d,u,g,_);let h=!1;r==="post"?a.scheduler=d=>{un(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():Ju(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=ov(n,e,a);return Po&&(c?c.push(f):l&&f()),f}function qv(n,e,t){const i=this.proxy,s=Rt(n)?n.includes(".")?Am(i,n):()=>i[n]:n.bind(i,i);let r;Xe(e)?r=e:(r=e.handler,t=e);const o=zo(this),a=nh(s,r.bind(i),t);return o(),a}function Am(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function Kv(n,e,t=st){const i=Im(),s=_n(e),r=ls(e),o=wm(n,s),a=J_((l,c)=>{let u,h=st,f;return jv(()=>{const d=n[s];rn(u,d)&&(u=d,c())}),{get(){return l(),t.get?t.get(u):u},set(d){const g=t.set?t.set(d):d;if(!rn(g,u)&&!(h!==st&&rn(d,h)))return;const _=i.vnode.props;_&&(e in _||s in _||r in _)&&(`onUpdate:${e}`in _||`onUpdate:${s}`in _||`onUpdate:${r}`in _)||(u=d,c()),i.emit(`update:${e}`,g),rn(d,g)&&rn(d,h)&&!rn(g,f)&&c(),h=d,f=g}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||st:a,done:!1}:{done:!0}}}},a}const wm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${_n(e)}Modifiers`]||n[`${ls(e)}Modifiers`];function Yv(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||st;let s=t;const r=e.startsWith("update:"),o=r&&wm(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Rt(u)?u.trim():u)),o.number&&(s=t.map(Ha)));let a,l=i[a=wa(e)]||i[a=wa(_n(e))];!l&&r&&(l=i[a=wa(ls(e))]),l&&zn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,zn(c,n,6,s)}}function Rm(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Xe(n)){const l=c=>{const u=Rm(c,e,!0);u&&(a=!0,wt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(gt(n)&&i.set(n,null),null):(ke(r)?r.forEach(l=>o[l]=null):wt(o,r),gt(n)&&i.set(n,o),o)}function hl(n,e){return!n||!il(e)?!1:(e=e.slice(2).replace(/Once$/,""),ut(n,e[0].toLowerCase()+e.slice(1))||ut(n,ls(e))||ut(n,e))}function Ul(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=n,m=Wa(n);let p,T;try{if(t.shapeFlag&4){const M=s||i,D=M;p=Yn(c.call(D,M,u,h,d,f,g)),T=a}else{const M=e;p=Yn(M.length>1?M(h,{attrs:a,slots:o,emit:l}):M(h,null)),T=e.props?a:Zv(a)}}catch(M){go.length=0,cl(M,n,1),p=Nt(Di)}let b=p;if(T&&_!==!1){const M=Object.keys(T),{shapeFlag:D}=b;M.length&&D&7&&(r&&M.some(Vu)&&(T=Jv(T,r)),b=Os(b,T,!1,!0))}return t.dirs&&(b=Os(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&wo(b,t.transition),p=b,Wa(m),p}const Zv=n=>{let e;for(const t in n)(t==="class"||t==="style"||il(t))&&((e||(e={}))[t]=n[t]);return e},Jv=(n,e)=>{const t={};for(const i in n)(!Vu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Qv(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Yh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!hl(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Yh(i,o,c):!0:!!o;return!1}function Yh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!hl(t,r))return!0}return!1}function e0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Cm=n=>n.__isSuspense;function t0(n,e){e&&e.pendingBranch?ke(n)?e.effects.push(...n):e.effects.push(n):cv(n)}const nt=Symbol.for("v-fgt"),fl=Symbol.for("v-txt"),Di=Symbol.for("v-cmt"),Ol=Symbol.for("v-stc"),go=[];let dn=null;function be(n=!1){go.push(dn=n?null:[])}function n0(){go.pop(),dn=go[go.length-1]||null}let Ro=1;function Zh(n,e=!1){Ro+=n,n<0&&dn&&e&&(dn.hasOnce=!0)}function Pm(n){return n.dynamicChildren=Ro>0?dn||dr:null,n0(),Ro>0&&dn&&dn.push(n),n}function De(n,e,t,i,s,r){return Pm(ne(n,e,t,i,s,r,!0))}function pn(n,e,t,i,s){return Pm(Nt(n,e,t,i,s,!0))}function Co(n){return n?n.__v_isVNode===!0:!1}function ur(n,e){return n.type===e.type&&n.key===e.key}const Lm=({key:n})=>n??null,Pa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Rt(n)||St(n)||Xe(n)?{i:Dt,r:n,k:e,f:!!t}:n:null);function ne(n,e=null,t=null,i=0,s=null,r=n===nt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Lm(e),ref:e&&Pa(e),scopeId:tm,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Dt};return a?(ih(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Rt(t)?8:16),Ro>0&&!o&&dn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&dn.push(l),l}const Nt=i0;function i0(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===um)&&(n=Di),Co(n)){const a=Os(n,e,!0);return t&&ih(a,t),Ro>0&&!r&&dn&&(a.shapeFlag&6?dn[dn.indexOf(n)]=a:dn.push(a)),a.patchFlag=-2,a}if(d0(n)&&(n=n.__vccOpts),e){e=s0(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=Tn(a)),gt(l)&&(Yu(l)&&!ke(l)&&(l=wt({},l)),e.style=Br(l))}const o=Rt(n)?1:Cm(n)?128:hv(n)?64:gt(n)?4:Xe(n)?2:0;return ne(n,e,t,i,s,o,r,!0)}function s0(n){return n?Yu(n)||_m(n)?wt({},n):n:null}function Os(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?dl(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Lm(c),ref:e&&e.ref?t&&r?ke(r)?r.concat(Pa(e)):[r,Pa(e)]:Pa(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==nt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Os(n.ssContent),ssFallback:n.ssFallback&&Os(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&wo(u,l.clone(u)),u}function Qn(n=" ",e=0){return Nt(fl,null,n,e)}function Mt(n="",e=!1){return e?(be(),pn(Di,null,n)):Nt(Di,null,n)}function Yn(n){return n==null||typeof n=="boolean"?Nt(Di):ke(n)?Nt(nt,null,n.slice()):Co(n)?Zi(n):Nt(fl,null,String(n))}function Zi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Os(n)}function ih(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ke(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ih(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!_m(e)?e._ctx=Dt:s===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:Dt},t=32):(e=String(e),i&64?(t=16,e=[Qn(e)]):t=8);n.children=e,n.shapeFlag|=t}function dl(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Tn([e.class,i.class]));else if(s==="style")e.style=Br([e.style,i.style]);else if(il(s)){const r=e[s],o=i[s];o&&r!==o&&!(ke(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function jn(n,e,t,i=null){zn(n,e,7,[t,i])}const r0=pm();let o0=0;function a0(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||r0,r={uid:o0++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xm(i,s),emitsOptions:Rm(i,s),emit:null,emitted:null,propsDefaults:st,inheritAttrs:i.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Yv.bind(null,r),n.ce&&n.ce(r),r}let Bt=null;const Im=()=>Bt||Dt;let qa,Hc;{const n=ol(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};qa=e("__VUE_INSTANCE_SETTERS__",t=>Bt=t),Hc=e("__VUE_SSR_SETTERS__",t=>Po=t)}const zo=n=>{const e=Bt;return qa(n),n.scope.on(),()=>{n.scope.off(),qa(e)}},Jh=()=>{Bt&&Bt.scope.off(),qa(null)};function Dm(n){return n.vnode.shapeFlag&4}let Po=!1;function l0(n,e=!1,t=!1){e&&Hc(e);const{props:i,children:s}=n.vnode,r=Dm(n);Uv(n,i,r,e),kv(n,s,t);const o=r?c0(n,e):void 0;return e&&Hc(!1),o}function c0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Tv);const{setup:i}=t;if(i){cs();const s=n.setupContext=i.length>1?h0(n):null,r=zo(n),o=Vo(i,n,0,[n.props,s]),a=Mp(o);if(us(),r(),(a||n.sp)&&!gr(n)&&im(n),a){if(o.then(Jh,Jh),e)return o.then(l=>{Qh(n,l,e)}).catch(l=>{cl(l,n,0)});n.asyncDep=o}else Qh(n,o,e)}else Nm(n,e)}function Qh(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:gt(e)&&(n.setupState=Kp(e)),Nm(n,t)}let ef;function Nm(n,e,t){const i=n.type;if(!n.render){if(!e&&ef&&!i.render){const s=i.template||eh(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=wt(wt({isCustomElement:r,delimiters:a},o),l);i.render=ef(s,c)}}n.render=i.render||ti}{const s=zo(n);cs();try{wv(n)}finally{us(),s()}}}const u0={get(n,e){return Wt(n,"get",""),n[e]}};function h0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,u0),slots:n.slots,emit:n.emit,expose:e}}function pl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Kp(Zu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in mo)return mo[t](n)},has(e,t){return t in e||t in mo}})):n.proxy}function f0(n,e=!0){return Xe(n)?n.displayName||n.name:n.name||e&&n.__name}function d0(n){return Xe(n)&&"__vccOpts"in n}const bt=(n,e)=>sv(n,e,Po);function Um(n,e,t){const i=arguments.length;return i===2?gt(e)&&!ke(e)?Co(e)?Nt(n,null,[e]):Nt(n,e):Nt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Co(t)&&(t=[t]),Nt(n,e,t))}const p0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vc;const tf=typeof window<"u"&&window.trustedTypes;if(tf)try{Vc=tf.createPolicy("vue",{createHTML:n=>n})}catch{}const Om=Vc?n=>Vc.createHTML(n):n=>n,m0="http://www.w3.org/2000/svg",g0="http://www.w3.org/1998/Math/MathML",Si=typeof document<"u"?document:null,nf=Si&&Si.createElement("template"),_0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Si.createElementNS(m0,n):e==="mathml"?Si.createElementNS(g0,n):t?Si.createElement(n,{is:t}):Si.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Si.createTextNode(n),createComment:n=>Si.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Si.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{nf.innerHTML=Om(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=nf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ki="transition",jr="animation",Mr=Symbol("_vtc"),Fm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},v0=wt({},dv,Fm),gs=(n,e=[])=>{ke(n)?n.forEach(t=>t(...e)):n&&n(...e)},sf=n=>n?ke(n)?n.some(e=>e.length>1):n.length>1:!1;function x0(n){const e={};for(const I in n)I in Fm||(e[I]=n[I]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,g=y0(s),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:T,onEnterCancelled:b,onLeave:M,onLeaveCancelled:D,onBeforeAppear:L=p,onAppear:P=T,onAppearCancelled:C=b}=e,v=(I,F,J,ae)=>{I._enterCancelled=ae,qi(I,F?u:a),qi(I,F?c:o),J&&J()},x=(I,F)=>{I._isLeaving=!1,qi(I,h),qi(I,d),qi(I,f),F&&F()},R=I=>(F,J)=>{const ae=I?P:T,K=()=>v(F,I,J);gs(ae,[F,K]),rf(()=>{qi(F,I?l:r),qn(F,I?u:a),sf(ae)||of(F,i,_,K)})};return wt(e,{onBeforeEnter(I){gs(p,[I]),qn(I,r),qn(I,o)},onBeforeAppear(I){gs(L,[I]),qn(I,l),qn(I,c)},onEnter:R(!1),onAppear:R(!0),onLeave(I,F){I._isLeaving=!0;const J=()=>x(I,F);qn(I,h),I._enterCancelled?(qn(I,f),zc()):(zc(),qn(I,f)),rf(()=>{I._isLeaving&&(qi(I,h),qn(I,d),sf(M)||of(I,i,m,J))}),gs(M,[I,J])},onEnterCancelled(I){v(I,!1,void 0,!0),gs(b,[I])},onAppearCancelled(I){v(I,!0,void 0,!0),gs(C,[I])},onLeaveCancelled(I){x(I),gs(D,[I])}})}function y0(n){if(n==null)return null;if(gt(n))return[Fl(n.enter),Fl(n.leave)];{const e=Fl(n);return[e,e]}}function Fl(n){return y_(n)}function qn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Mr]||(n[Mr]=new Set)).add(e)}function qi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Mr];t&&(t.delete(e),t.size||(n[Mr]=void 0))}function rf(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let S0=0;function of(n,e,t,i){const s=n._endId=++S0,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=Bm(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=d=>{d.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function Bm(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${ki}Delay`),r=i(`${ki}Duration`),o=af(s,r),a=i(`${jr}Delay`),l=i(`${jr}Duration`),c=af(a,l);let u=null,h=0,f=0;e===ki?o>0&&(u=ki,h=o,f=r.length):e===jr?c>0&&(u=jr,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?ki:jr:null,f=u?u===ki?r.length:l.length:0);const d=u===ki&&/\b(transform|all)(,|$)/.test(i(`${ki}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function af(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>lf(t)+lf(n[i])))}function lf(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function zc(){return document.body.offsetHeight}function M0(n,e,t){const i=n[Mr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const cf=Symbol("_vod"),b0=Symbol("_vsh"),E0=Symbol(""),T0=/(^|;)\s*display\s*:/;function A0(n,e,t){const i=n.style,s=Rt(t);let r=!1;if(t&&!s){if(e)if(Rt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&La(i,a,"")}else for(const o in e)t[o]==null&&La(i,o,"");for(const o in t)o==="display"&&(r=!0),La(i,o,t[o])}else if(s){if(e!==t){const o=i[E0];o&&(t+=";"+o),i.cssText=t,r=T0.test(t)}}else e&&n.removeAttribute("style");cf in n&&(n[cf]=r?i.display:"",n[b0]&&(i.display="none"))}const uf=/\s*!important$/;function La(n,e,t){if(ke(t))t.forEach(i=>La(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=w0(n,e);uf.test(t)?n.setProperty(ls(i),t.replace(uf,""),"important"):n[i]=t}}const hf=["Webkit","Moz","ms"],Bl={};function w0(n,e){const t=Bl[e];if(t)return t;let i=_n(e);if(i!=="filter"&&i in n)return Bl[e]=i;i=rl(i);for(let s=0;s<hf.length;s++){const r=hf[s]+i;if(r in n)return Bl[e]=r}return e}const ff="http://www.w3.org/1999/xlink";function df(n,e,t,i,s,r=A_(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ff,e.slice(6,e.length)):n.setAttributeNS(ff,e,t):t==null||r&&!Ap(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Vn(t)?String(t):t)}function pf(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Om(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Ap(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Qi(n,e,t,i){n.addEventListener(e,t,i)}function R0(n,e,t,i){n.removeEventListener(e,t,i)}const mf=Symbol("_vei");function C0(n,e,t,i,s=null){const r=n[mf]||(n[mf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=P0(e);if(i){const c=r[e]=D0(i,s);Qi(n,a,c,l)}else o&&(R0(n,a,o,l),r[e]=void 0)}}const gf=/(?:Once|Passive|Capture)$/;function P0(n){let e;if(gf.test(n)){e={};let i;for(;i=n.match(gf);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ls(n.slice(2)),e]}let kl=0;const L0=Promise.resolve(),I0=()=>kl||(L0.then(()=>kl=0),kl=Date.now());function D0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;zn(N0(i,t.value),e,5,[i])};return t.value=n,t.attached=I0(),t}function N0(n,e){if(ke(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const _f=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,U0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?M0(n,i,o):e==="style"?A0(n,t,i):il(e)?Vu(e)||C0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):O0(n,e,i,o))?(pf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&df(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Rt(i))?pf(n,_n(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),df(n,e,i,o))};function O0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&_f(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return _f(e)&&Rt(t)?!1:e in n}const km=new WeakMap,Hm=new WeakMap,Ka=Symbol("_moveCb"),vf=Symbol("_enterCb"),F0=n=>(delete n.props.mode,n),B0=F0({name:"TransitionGroup",props:wt({},v0,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=Im(),i=fv();let s,r;return om(()=>{if(!s.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!G0(s[0].el,t.vnode.el,o))return;s.forEach(H0),s.forEach(V0);const a=s.filter(z0);zc(),a.forEach(l=>{const c=l.el,u=c.style;qn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c[Ka]=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",h),c[Ka]=null,qi(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=Qe(n),a=x0(o);let l=o.tag||nt;if(s=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&(s.push(u),wo(u,Nc(u,a,i,t)),km.set(u,u.el.getBoundingClientRect()))}r=e.default?nm(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&wo(u,Nc(u,a,i,t))}return Nt(l,null,r)}}}),k0=B0;function H0(n){const e=n.el;e[Ka]&&e[Ka](),e[vf]&&e[vf]()}function V0(n){Hm.set(n,n.el.getBoundingClientRect())}function z0(n){const e=km.get(n),t=Hm.get(n),i=e.left-t.left,s=e.top-t.top;if(i||s){const r=n.el.style;return r.transform=r.webkitTransform=`translate(${i}px,${s}px)`,r.transitionDuration="0s",n}}function G0(n,e,t){const i=n.cloneNode(),s=n[Mr];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),t.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:o}=Bm(i);return r.removeChild(i),o}const br=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ke(e)?t=>Ra(e,t):e};function W0(n){n.target.composing=!0}function xf(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ci=Symbol("_assign"),ei={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Ci]=br(s);const r=i||s.props&&s.props.type==="number";Qi(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=Ha(a)),n[Ci](a)}),t&&Qi(n,"change",()=>{n.value=n.value.trim()}),e||(Qi(n,"compositionstart",W0),Qi(n,"compositionend",xf),Qi(n,"change",xf))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Ci]=br(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Ha(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},X0={deep:!0,created(n,e,t){n[Ci]=br(t),Qi(n,"change",()=>{const i=n._modelValue,s=Lo(n),r=n.checked,o=n[Ci];if(ke(i)){const a=Wu(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Fr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Vm(n,r))})},mounted:yf,beforeUpdate(n,e,t){n[Ci]=br(t),yf(n,e,t)}};function yf(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(ke(e))s=Wu(e,i.props.value)>-1;else if(Fr(e))s=e.has(i.props.value);else{if(e===t)return;s=Ho(e,Vm(n,!0))}n.checked!==s&&(n.checked=s)}const $0={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=Fr(e);Qi(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Ha(Lo(o)):Lo(o));n[Ci](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,kr(()=>{n._assigning=!1})}),n[Ci]=br(i)},mounted(n,{value:e}){Sf(n,e)},beforeUpdate(n,e,t){n[Ci]=br(t)},updated(n,{value:e}){n._assigning||Sf(n,e)}};function Sf(n,e){const t=n.multiple,i=ke(e);if(!(t&&!i&&!Fr(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Lo(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Wu(e,a)>-1}else o.selected=e.has(a);else if(Ho(Lo(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Lo(n){return"_value"in n?n._value:n.value}function Vm(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const j0=["ctrl","shift","alt","meta"],q0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>j0.some(t=>n[`${t}Key`]&&!e.includes(t))},K0=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=q0[e[o]];if(a&&a(s,e))return}return n(s,...r)})},Y0=wt({patchProp:U0},_0);let Mf;function Z0(){return Mf||(Mf=Vv(Y0))}const zm=(...n)=>{const e=Z0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Q0(i);if(!s)return;const r=e._component;!Xe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,J0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function J0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Q0(n){return Rt(n)?document.querySelector(n):n}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const hr=typeof document<"u";function Gm(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function ex(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Gm(n.default)}const ct=Object.assign;function Hl(n,e){const t={};for(const i in e){const s=e[i];t[i]=Gn(s)?s.map(n):n(s)}return t}const _o=()=>{},Gn=Array.isArray,Wm=/#/g,tx=/&/g,nx=/\//g,ix=/=/g,sx=/\?/g,Xm=/\+/g,rx=/%5B/g,ox=/%5D/g,$m=/%5E/g,ax=/%60/g,jm=/%7B/g,lx=/%7C/g,qm=/%7D/g,cx=/%20/g;function sh(n){return encodeURI(""+n).replace(lx,"|").replace(rx,"[").replace(ox,"]")}function ux(n){return sh(n).replace(jm,"{").replace(qm,"}").replace($m,"^")}function Gc(n){return sh(n).replace(Xm,"%2B").replace(cx,"+").replace(Wm,"%23").replace(tx,"%26").replace(ax,"`").replace(jm,"{").replace(qm,"}").replace($m,"^")}function hx(n){return Gc(n).replace(ix,"%3D")}function fx(n){return sh(n).replace(Wm,"%23").replace(sx,"%3F")}function dx(n){return n==null?"":fx(n).replace(nx,"%2F")}function Io(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const px=/\/$/,mx=n=>n.replace(px,"");function Vl(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=xx(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Io(o)}}function gx(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function bf(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function _x(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Er(e.matched[i],t.matched[s])&&Km(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Er(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Km(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!vx(n[t],e[t]))return!1;return!0}function vx(n,e){return Gn(n)?Ef(n,e):Gn(e)?Ef(e,n):n===e}function Ef(n,e){return Gn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function xx(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Hi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Do;(function(n){n.pop="pop",n.push="push"})(Do||(Do={}));var vo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(vo||(vo={}));function yx(n){if(!n)if(hr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),mx(n)}const Sx=/^[^#]+#/;function Mx(n,e){return n.replace(Sx,"#")+e}function bx(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const ml=()=>({left:window.scrollX,top:window.scrollY});function Ex(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=bx(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Tf(n,e){return(history.state?history.state.position-e:-1)+n}const Wc=new Map;function Tx(n,e){Wc.set(n,e)}function Ax(n){const e=Wc.get(n);return Wc.delete(n),e}let wx=()=>location.protocol+"//"+location.host;function Ym(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),bf(l,"")}return bf(t,n)+i+s}function Rx(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=Ym(n,location),g=t.value,_=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===g){o=null;return}m=_?f.position-_.position:0}else i(d);s.forEach(p=>{p(t.value,g,{delta:m,type:Do.pop,direction:m?m>0?vo.forward:vo.back:vo.unknown})})};function l(){o=t.value}function c(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(ct({},f.state,{scroll:ml()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Af(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?ml():null}}function Cx(n){const{history:e,location:t}=window,i={value:Ym(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:wx()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=ct({},e.state,Af(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=ct({},s.value,e.state,{forward:l,scroll:ml()});r(u.current,u,!0);const h=ct({},Af(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Px(n){n=yx(n);const e=Cx(n),t=Rx(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=ct({location:"",base:n,go:i,createHref:Mx.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Lx(n){return typeof n=="string"||n&&typeof n=="object"}function Zm(n){return typeof n=="string"||typeof n=="symbol"}const Jm=Symbol("");var wf;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(wf||(wf={}));function Tr(n,e){return ct(new Error,{type:n,[Jm]:!0},e)}function di(n,e){return n instanceof Error&&Jm in n&&(e==null||!!(n.type&e))}const Rf="[^/]+?",Ix={sensitive:!1,strict:!1,start:!0,end:!0},Dx=/[.+*?^${}()[\]/\\]/g;function Nx(n,e){const t=ct({},Ix,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(Dx,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=f;r.push({name:g,repeatable:_,optional:m});const T=p||Rf;if(T!==Rf){d+=10;try{new RegExp(`(${T})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${g}" (${T}): `+M.message)}}let b=_?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;h||(b=m&&c.length<2?`(?:/${b})`:"/"+b),m&&(b+="?"),s+=b,d+=20,m&&(d+=-8),_&&(d+=-20),T===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(Gn(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const T=Gn(p)?p.join("/"):p;if(!T)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=T}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Ux(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Qm(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=Ux(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Cf(i))return 1;if(Cf(s))return-1}return s.length-i.length}function Cf(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Ox={type:0,value:""},Fx=/[a-zA-Z0-9_]/;function Bx(n){if(!n)return[[]];if(n==="/")return[[Ox]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:Fx.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function kx(n,e,t){const i=Nx(Bx(n.path),t),s=ct(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Hx(n,e){const t=[],i=new Map;e=Df({strict:!1,end:!0,sensitive:!1},e);function s(h){return i.get(h)}function r(h,f,d){const g=!d,_=Lf(h);_.aliasOf=d&&d.record;const m=Df(e,h),p=[_];if("alias"in h){const M=typeof h.alias=="string"?[h.alias]:h.alias;for(const D of M)p.push(Lf(ct({},_,{components:d?d.record.components:_.components,path:D,aliasOf:d?d.record:_})))}let T,b;for(const M of p){const{path:D}=M;if(f&&D[0]!=="/"){const L=f.record.path,P=L[L.length-1]==="/"?"":"/";M.path=f.record.path+(D&&P+D)}if(T=kx(M,f,m),d?d.alias.push(T):(b=b||T,b!==T&&b.alias.push(T),g&&h.name&&!If(T)&&o(h.name)),eg(T)&&l(T),_.children){const L=_.children;for(let P=0;P<L.length;P++)r(L[P],T,d&&d.children[P])}d=d||T}return b?()=>{o(b)}:_o}function o(h){if(Zm(h)){const f=i.get(h);f&&(i.delete(h),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(h);f>-1&&(t.splice(f,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return t}function l(h){const f=Gx(h,t);t.splice(f,0,h),h.record.name&&!If(h)&&i.set(h.record.name,h)}function c(h,f){let d,g={},_,m;if("name"in h&&h.name){if(d=i.get(h.name),!d)throw Tr(1,{location:h});m=d.record.name,g=ct(Pf(f.params,d.keys.filter(b=>!b.optional).concat(d.parent?d.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),h.params&&Pf(h.params,d.keys.map(b=>b.name))),_=d.stringify(g)}else if(h.path!=null)_=h.path,d=t.find(b=>b.re.test(_)),d&&(g=d.parse(_),m=d.record.name);else{if(d=f.name?i.get(f.name):t.find(b=>b.re.test(f.path)),!d)throw Tr(1,{location:h,currentLocation:f});m=d.record.name,g=ct({},f.params,h.params),_=d.stringify(g)}const p=[];let T=d;for(;T;)p.unshift(T.record),T=T.parent;return{name:m,path:_,params:g,matched:p,meta:zx(p)}}n.forEach(h=>r(h));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Pf(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Lf(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Vx(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Vx(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function If(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function zx(n){return n.reduce((e,t)=>ct(e,t.meta),{})}function Df(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Gx(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;Qm(n,e[r])<0?i=r:t=r+1}const s=Wx(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function Wx(n){let e=n;for(;e=e.parent;)if(eg(e)&&Qm(n,e)===0)return e}function eg({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Xx(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Xm," "),o=r.indexOf("="),a=Io(o<0?r:r.slice(0,o)),l=o<0?null:Io(r.slice(o+1));if(a in e){let c=e[a];Gn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Nf(n){let e="";for(let t in n){const i=n[t];if(t=hx(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Gn(i)?i.map(r=>r&&Gc(r)):[i&&Gc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function $x(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Gn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const jx=Symbol(""),Uf=Symbol(""),gl=Symbol(""),rh=Symbol(""),Xc=Symbol("");function qr(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ji(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Tr(4,{from:t,to:e})):f instanceof Error?l(f):Lx(f)?l(Tr(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function zl(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Gm(l)){const u=(l.__vccOpts||l)[e];u&&r.push(Ji(u,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=ex(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&Ji(d,t,i,o,a,s)()}))}}return r}function Of(n){const e=wn(gl),t=wn(rh),i=bt(()=>{const l=Ce(n.to);return e.resolve(l)}),s=bt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(Er.bind(null,u));if(f>-1)return f;const d=Ff(l[c-2]);return c>1&&Ff(u)===d&&h[h.length-1].path!==d?h.findIndex(Er.bind(null,l[c-2])):f}),r=bt(()=>s.value>-1&&Jx(t.params,i.value.params)),o=bt(()=>s.value>-1&&s.value===t.matched.length-1&&Km(t.params,i.value.params));function a(l={}){if(Zx(l)){const c=e[Ce(n.replace)?"replace":"push"](Ce(n.to)).catch(_o);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:bt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function qx(n){return n.length===1?n[0]:n}const Kx=Lt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Of,setup(n,{slots:e}){const t=hs(Of(n)),{options:i}=wn(gl),s=bt(()=>({[Bf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Bf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&qx(e.default(t));return n.custom?r:Um("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Yx=Kx;function Zx(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Jx(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Gn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Ff(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Bf=(n,e,t)=>n??e??t,Qx=Lt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=wn(Xc),s=bt(()=>n.route||i.value),r=wn(Uf,0),o=bt(()=>{let c=Ce(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=bt(()=>s.value.matched[o.value]);Ca(Uf,bt(()=>o.value+1)),Ca(jx,a),Ca(Xc,s);const l=rt();return Ns(()=>[l.value,a.value,n.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Er(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return kf(t.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Um(f,ct({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return kf(t.default,{Component:m,route:c})||m}}});function kf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const tg=Qx;function ey(n){const e=Hx(n.routes,n),t=n.parseQuery||Xx,i=n.stringifyQuery||Nf,s=n.history,r=qr(),o=qr(),a=qr(),l=q_(Hi);let c=Hi;hr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Hl.bind(null,U=>""+U),h=Hl.bind(null,dx),f=Hl.bind(null,Io);function d(U,re){let G,ue;return Zm(U)?(G=e.getRecordMatcher(U),ue=re):ue=U,e.addRoute(ue,G)}function g(U){const re=e.getRecordMatcher(U);re&&e.removeRoute(re)}function _(){return e.getRoutes().map(U=>U.record)}function m(U){return!!e.getRecordMatcher(U)}function p(U,re){if(re=ct({},re||l.value),typeof U=="string"){const S=Vl(t,U,re.path),W=e.resolve({path:S.path},re),te=s.createHref(S.fullPath);return ct(S,W,{params:f(W.params),hash:Io(S.hash),redirectedFrom:void 0,href:te})}let G;if(U.path!=null)G=ct({},U,{path:Vl(t,U.path,re.path).path});else{const S=ct({},U.params);for(const W in S)S[W]==null&&delete S[W];G=ct({},U,{params:h(S)}),re.params=h(re.params)}const ue=e.resolve(G,re),Ee=U.hash||"";ue.params=u(f(ue.params));const Ne=gx(i,ct({},U,{hash:ux(Ee),path:ue.path})),w=s.createHref(Ne);return ct({fullPath:Ne,hash:Ee,query:i===Nf?$x(U.query):U.query||{}},ue,{redirectedFrom:void 0,href:w})}function T(U){return typeof U=="string"?Vl(t,U,l.value.path):ct({},U)}function b(U,re){if(c!==U)return Tr(8,{from:re,to:U})}function M(U){return P(U)}function D(U){return M(ct(T(U),{replace:!0}))}function L(U){const re=U.matched[U.matched.length-1];if(re&&re.redirect){const{redirect:G}=re;let ue=typeof G=="function"?G(U):G;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=T(ue):{path:ue},ue.params={}),ct({query:U.query,hash:U.hash,params:ue.path!=null?{}:U.params},ue)}}function P(U,re){const G=c=p(U),ue=l.value,Ee=U.state,Ne=U.force,w=U.replace===!0,S=L(G);if(S)return P(ct(T(S),{state:typeof S=="object"?ct({},Ee,S.state):Ee,force:Ne,replace:w}),re||G);const W=G;W.redirectedFrom=re;let te;return!Ne&&_x(i,ue,G)&&(te=Tr(16,{to:W,from:ue}),Pe(ue,ue,!0,!1)),(te?Promise.resolve(te):x(W,ue)).catch(q=>di(q)?di(q,2)?q:ye(q):j(q,W,ue)).then(q=>{if(q){if(di(q,2))return P(ct({replace:w},T(q.to),{state:typeof q.to=="object"?ct({},Ee,q.to.state):Ee,force:Ne}),re||W)}else q=I(W,ue,!0,w,Ee);return R(W,ue,q),q})}function C(U,re){const G=b(U,re);return G?Promise.reject(G):Promise.resolve()}function v(U){const re=z.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(U):U()}function x(U,re){let G;const[ue,Ee,Ne]=ty(U,re);G=zl(ue.reverse(),"beforeRouteLeave",U,re);for(const S of ue)S.leaveGuards.forEach(W=>{G.push(Ji(W,U,re))});const w=C.bind(null,U,re);return G.push(w),pe(G).then(()=>{G=[];for(const S of r.list())G.push(Ji(S,U,re));return G.push(w),pe(G)}).then(()=>{G=zl(Ee,"beforeRouteUpdate",U,re);for(const S of Ee)S.updateGuards.forEach(W=>{G.push(Ji(W,U,re))});return G.push(w),pe(G)}).then(()=>{G=[];for(const S of Ne)if(S.beforeEnter)if(Gn(S.beforeEnter))for(const W of S.beforeEnter)G.push(Ji(W,U,re));else G.push(Ji(S.beforeEnter,U,re));return G.push(w),pe(G)}).then(()=>(U.matched.forEach(S=>S.enterCallbacks={}),G=zl(Ne,"beforeRouteEnter",U,re,v),G.push(w),pe(G))).then(()=>{G=[];for(const S of o.list())G.push(Ji(S,U,re));return G.push(w),pe(G)}).catch(S=>di(S,8)?S:Promise.reject(S))}function R(U,re,G){a.list().forEach(ue=>v(()=>ue(U,re,G)))}function I(U,re,G,ue,Ee){const Ne=b(U,re);if(Ne)return Ne;const w=re===Hi,S=hr?history.state:{};G&&(ue||w?s.replace(U.fullPath,ct({scroll:w&&S&&S.scroll},Ee)):s.push(U.fullPath,Ee)),l.value=U,Pe(U,re,G,w),ye()}let F;function J(){F||(F=s.listen((U,re,G)=>{if(!de.listening)return;const ue=p(U),Ee=L(ue);if(Ee){P(ct(Ee,{replace:!0,force:!0}),ue).catch(_o);return}c=ue;const Ne=l.value;hr&&Tx(Tf(Ne.fullPath,G.delta),ml()),x(ue,Ne).catch(w=>di(w,12)?w:di(w,2)?(P(ct(T(w.to),{force:!0}),ue).then(S=>{di(S,20)&&!G.delta&&G.type===Do.pop&&s.go(-1,!1)}).catch(_o),Promise.reject()):(G.delta&&s.go(-G.delta,!1),j(w,ue,Ne))).then(w=>{w=w||I(ue,Ne,!1),w&&(G.delta&&!di(w,8)?s.go(-G.delta,!1):G.type===Do.pop&&di(w,20)&&s.go(-1,!1)),R(ue,Ne,w)}).catch(_o)}))}let ae=qr(),K=qr(),se;function j(U,re,G){ye(U);const ue=K.list();return ue.length?ue.forEach(Ee=>Ee(U,re,G)):console.error(U),Promise.reject(U)}function ve(){return se&&l.value!==Hi?Promise.resolve():new Promise((U,re)=>{ae.add([U,re])})}function ye(U){return se||(se=!U,J(),ae.list().forEach(([re,G])=>U?G(U):re()),ae.reset()),U}function Pe(U,re,G,ue){const{scrollBehavior:Ee}=n;if(!hr||!Ee)return Promise.resolve();const Ne=!G&&Ax(Tf(U.fullPath,0))||(ue||!G)&&history.state&&history.state.scroll||null;return kr().then(()=>Ee(U,re,Ne)).then(w=>w&&Ex(w)).catch(w=>j(w,U,re))}const ge=U=>s.go(U);let xe;const z=new Set,de={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:M,replace:D,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:K.add,isReady:ve,install(U){const re=this;U.component("RouterLink",Yx),U.component("RouterView",tg),U.config.globalProperties.$router=re,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Ce(l)}),hr&&!xe&&l.value===Hi&&(xe=!0,M(s.location).catch(Ee=>{}));const G={};for(const Ee in Hi)Object.defineProperty(G,Ee,{get:()=>l.value[Ee],enumerable:!0});U.provide(gl,re),U.provide(rh,$p(G)),U.provide(Xc,l);const ue=U.unmount;z.add(U),U.unmount=function(){z.delete(U),z.size<1&&(c=Hi,F&&F(),F=null,l.value=Hi,xe=!1,se=!1),ue()}}};function pe(U){return U.reduce((re,G)=>re.then(()=>v(G)),Promise.resolve())}return de}function ty(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>Er(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Er(c,l))||s.push(l))}return[t,i,s]}function oh(){return wn(gl)}function ah(n){return wn(rh)}const ny=Lt({__name:"App",setup(n){return(e,t)=>(be(),De(nt,null,[t[0]||(t[0]=ne("header",null,[ne("div",{class:"wrapper"})],-1)),Nt(Ce(tg))],64))}}),Ya="/assets/BackgroundVideo-CO4KmXC1.mp4";var iy=!1;/*!
 * pinia v2.2.8
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let ng;const _l=n=>ng=n,ig=Symbol();function $c(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var xo;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(xo||(xo={}));function sy(){const n=Pp(!0),e=n.run(()=>rt({}));let t=[],i=[];const s=Zu({install(r){_l(s),s._a=r,r.provide(ig,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return!this._a&&!iy?i.push(r):t.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const sg=()=>{};function Hf(n,e,t,i=sg){n.push(e);const s=()=>{const r=n.indexOf(e);r>-1&&(n.splice(r,1),i())};return!t&&Lp()&&R_(s),s}function Xs(n,...e){n.slice().forEach(t=>{t(...e)})}const ry=n=>n(),Vf=Symbol(),Gl=Symbol();function jc(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],s=n[t];$c(s)&&$c(i)&&n.hasOwnProperty(t)&&!St(i)&&!Ri(i)?n[t]=jc(s,i):n[t]=i}return n}const oy=Symbol();function ay(n){return!$c(n)||!n.hasOwnProperty(oy)}const{assign:Ki}=Object;function ly(n){return!!(St(n)&&n.effect)}function cy(n,e,t,i){const{state:s,actions:r,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=s?s():{});const u=Q_(t.state.value[n]);return Ki(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=Zu(bt(()=>{_l(t);const d=t._s.get(n);return o[f].call(d,d)})),h),{}))}return l=rg(n,c,e,t,i,!0),l}function rg(n,e,t={},i,s,r){let o;const a=Ki({actions:{}},t),l={deep:!0};let c,u,h=[],f=[],d;const g=i.state.value[n];!r&&!g&&(i.state.value[n]={}),rt({});let _;function m(C){let v;c=u=!1,typeof C=="function"?(C(i.state.value[n]),v={type:xo.patchFunction,storeId:n,events:d}):(jc(i.state.value[n],C),v={type:xo.patchObject,payload:C,storeId:n,events:d});const x=_=Symbol();kr().then(()=>{_===x&&(c=!0)}),u=!0,Xs(h,v,i.state.value[n])}const p=r?function(){const{state:v}=t,x=v?v():{};this.$patch(R=>{Ki(R,x)})}:sg;function T(){o.stop(),h=[],f=[],i._s.delete(n)}const b=(C,v="")=>{if(Vf in C)return C[Gl]=v,C;const x=function(){_l(i);const R=Array.from(arguments),I=[],F=[];function J(se){I.push(se)}function ae(se){F.push(se)}Xs(f,{args:R,name:x[Gl],store:D,after:J,onError:ae});let K;try{K=C.apply(this&&this.$id===n?this:D,R)}catch(se){throw Xs(F,se),se}return K instanceof Promise?K.then(se=>(Xs(I,se),se)).catch(se=>(Xs(F,se),Promise.reject(se))):(Xs(I,K),K)};return x[Vf]=!0,x[Gl]=v,x},M={_p:i,$id:n,$onAction:Hf.bind(null,f),$patch:m,$reset:p,$subscribe(C,v={}){const x=Hf(h,C,v.detached,()=>R()),R=o.run(()=>Ns(()=>i.state.value[n],I=>{(v.flush==="sync"?u:c)&&C({storeId:n,type:xo.direct,events:d},I)},Ki({},l,v)));return x},$dispose:T},D=hs(M);i._s.set(n,D);const P=(i._a&&i._a.runWithContext||ry)(()=>i._e.run(()=>(o=Pp()).run(()=>e({action:b}))));for(const C in P){const v=P[C];if(St(v)&&!ly(v)||Ri(v))r||(g&&ay(v)&&(St(v)?v.value=g[C]:jc(v,g[C])),i.state.value[n][C]=v);else if(typeof v=="function"){const x=b(v,C);P[C]=x,a.actions[C]=v}}return Ki(D,P),Ki(Qe(D),P),Object.defineProperty(D,"$state",{get:()=>i.state.value[n],set:C=>{m(v=>{Ki(v,C)})}}),i._p.forEach(C=>{Ki(D,o.run(()=>C({store:D,app:i._a,pinia:i,options:a})))}),g&&r&&t.hydrate&&t.hydrate(D.$state,g),c=!0,u=!0,D}/*! #__NO_SIDE_EFFECTS__ */function lh(n,e,t){let i,s;const r=typeof e=="function";typeof n=="string"?(i=n,s=r?t:e):(s=n,i=n.id);function o(a,l){const c=Nv();return a=a||(c?wn(ig,null):null),a&&_l(a),a=ng,a._s.has(i)||(r?rg(i,e,s,a):cy(i,s,a)),a._s.get(i)}return o.$id=i,o}function uy(n){{const e=Qe(n),t={};for(const i in e){const s=e[i];s.effect?t[i]=bt({get:()=>n[i],set(r){n[i]=r}}):(St(s)||Ri(s))&&(t[i]=nv(n,i))}return t}}var es=(n=>(n[n.NEW_GAME=0]="NEW_GAME",n[n.JOIN_GAME=1]="JOIN_GAME",n[n.SELECT_MAP=2]="SELECT_MAP",n))(es||{});const ro={LF:`
`,NULL:"\0"};class ts{constructor(e){const{command:t,headers:i,body:s,binaryBody:r,escapeHeaderValues:o,skipContentLengthHeader:a}=e;this.command=t,this.headers=Object.assign({},i||{}),r?(this._binaryBody=r,this.isBinaryBody=!0):(this._body=s||"",this.isBinaryBody=!1),this.escapeHeaderValues=o||!1,this.skipContentLengthHeader=a||!1}get body(){return!this._body&&this.isBinaryBody&&(this._body=new TextDecoder().decode(this._binaryBody)),this._body||""}get binaryBody(){return!this._binaryBody&&!this.isBinaryBody&&(this._binaryBody=new TextEncoder().encode(this._body)),this._binaryBody}static fromRawFrame(e,t){const i={},s=r=>r.replace(/^\s+|\s+$/g,"");for(const r of e.headers.reverse()){r.indexOf(":");const o=s(r[0]);let a=s(r[1]);t&&e.command!=="CONNECT"&&e.command!=="CONNECTED"&&(a=ts.hdrValueUnEscape(a)),i[o]=a}return new ts({command:e.command,headers:i,binaryBody:e.binaryBody,escapeHeaderValues:t})}toString(){return this.serializeCmdAndHeaders()}serialize(){const e=this.serializeCmdAndHeaders();return this.isBinaryBody?ts.toUnit8Array(e,this._binaryBody).buffer:e+this._body+ro.NULL}serializeCmdAndHeaders(){const e=[this.command];this.skipContentLengthHeader&&delete this.headers["content-length"];for(const t of Object.keys(this.headers||{})){const i=this.headers[t];this.escapeHeaderValues&&this.command!=="CONNECT"&&this.command!=="CONNECTED"?e.push(`${t}:${ts.hdrValueEscape(`${i}`)}`):e.push(`${t}:${i}`)}return(this.isBinaryBody||!this.isBodyEmpty()&&!this.skipContentLengthHeader)&&e.push(`content-length:${this.bodyLength()}`),e.join(ro.LF)+ro.LF+ro.LF}isBodyEmpty(){return this.bodyLength()===0}bodyLength(){const e=this.binaryBody;return e?e.length:0}static sizeOfUTF8(e){return e?new TextEncoder().encode(e).length:0}static toUnit8Array(e,t){const i=new TextEncoder().encode(e),s=new Uint8Array([0]),r=new Uint8Array(i.length+t.length+s.length);return r.set(i),r.set(t,i.length),r.set(s,i.length+t.length),r}static marshall(e){return new ts(e).serialize()}static hdrValueEscape(e){return e.replace(/\\/g,"\\\\").replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/:/g,"\\c")}static hdrValueUnEscape(e){return e.replace(/\\r/g,"\r").replace(/\\n/g,`
`).replace(/\\c/g,":").replace(/\\\\/g,"\\")}}const zf=0,Jo=10,Qo=13,hy=58;class fy{constructor(e,t){this.onFrame=e,this.onIncomingPing=t,this._encoder=new TextEncoder,this._decoder=new TextDecoder,this._token=[],this._initState()}parseChunk(e,t=!1){let i;if(typeof e=="string"?i=this._encoder.encode(e):i=new Uint8Array(e),t&&i[i.length-1]!==0){const s=new Uint8Array(i.length+1);s.set(i,0),s[i.length]=0,i=s}for(let s=0;s<i.length;s++){const r=i[s];this._onByte(r)}}_collectFrame(e){if(e!==zf&&e!==Qo){if(e===Jo){this.onIncomingPing();return}this._onByte=this._collectCommand,this._reinjectByte(e)}}_collectCommand(e){if(e!==Qo){if(e===Jo){this._results.command=this._consumeTokenAsUTF8(),this._onByte=this._collectHeaders;return}this._consumeByte(e)}}_collectHeaders(e){if(e!==Qo){if(e===Jo){this._setupCollectBody();return}this._onByte=this._collectHeaderKey,this._reinjectByte(e)}}_reinjectByte(e){this._onByte(e)}_collectHeaderKey(e){if(e===hy){this._headerKey=this._consumeTokenAsUTF8(),this._onByte=this._collectHeaderValue;return}this._consumeByte(e)}_collectHeaderValue(e){if(e!==Qo){if(e===Jo){this._results.headers.push([this._headerKey,this._consumeTokenAsUTF8()]),this._headerKey=void 0,this._onByte=this._collectHeaders;return}this._consumeByte(e)}}_setupCollectBody(){const e=this._results.headers.filter(t=>t[0]==="content-length")[0];e?(this._bodyBytesRemaining=parseInt(e[1],10),this._onByte=this._collectBodyFixedSize):this._onByte=this._collectBodyNullTerminated}_collectBodyNullTerminated(e){if(e===zf){this._retrievedBody();return}this._consumeByte(e)}_collectBodyFixedSize(e){if(this._bodyBytesRemaining--===0){this._retrievedBody();return}this._consumeByte(e)}_retrievedBody(){this._results.binaryBody=this._consumeTokenAsRaw();try{this.onFrame(this._results)}catch(e){console.log("Ignoring an exception thrown by a frame handler. Original exception: ",e)}this._initState()}_consumeByte(e){this._token.push(e)}_consumeTokenAsUTF8(){return this._decoder.decode(this._consumeTokenAsRaw())}_consumeTokenAsRaw(){const e=new Uint8Array(this._token);return this._token=[],e}_initState(){this._results={command:void 0,headers:[],binaryBody:void 0},this._token=[],this._headerKey=void 0,this._onByte=this._collectFrame}}var Ti;(function(n){n[n.CONNECTING=0]="CONNECTING",n[n.OPEN=1]="OPEN",n[n.CLOSING=2]="CLOSING",n[n.CLOSED=3]="CLOSED"})(Ti=Ti||(Ti={}));var Sn;(function(n){n[n.ACTIVE=0]="ACTIVE",n[n.DEACTIVATING=1]="DEACTIVATING",n[n.INACTIVE=2]="INACTIVE"})(Sn=Sn||(Sn={}));class Jt{constructor(e){this.versions=e}supportedVersions(){return this.versions.join(",")}protocolVersions(){return this.versions.map(e=>`v${e.replace(".","")}.stomp`)}}Jt.V1_0="1.0";Jt.V1_1="1.1";Jt.V1_2="1.2";Jt.default=new Jt([Jt.V1_2,Jt.V1_1,Jt.V1_0]);function dy(n,e){n.terminate=function(){const t=()=>{};this.onerror=t,this.onmessage=t,this.onopen=t;const i=new Date,s=Math.random().toString().substring(2,8),r=this.onclose;this.onclose=o=>{const a=new Date().getTime()-i.getTime();e(`Discarded socket (#${s})  closed after ${a}ms, with code/reason: ${o.code}/${o.reason}`)},this.close(),r==null||r.call(n,{code:4001,reason:`Quick discarding socket (#${s}) without waiting for the shutdown sequence.`,wasClean:!1})}}class py{constructor(e,t,i){this._client=e,this._webSocket=t,this._connected=!1,this._serverFrameHandlers={CONNECTED:s=>{this.debug(`connected to server ${s.headers.server}`),this._connected=!0,this._connectedVersion=s.headers.version,this._connectedVersion===Jt.V1_2&&(this._escapeHeaderValues=!0),this._setupHeartbeat(s.headers),this.onConnect(s)},MESSAGE:s=>{const r=s.headers.subscription,o=this._subscriptions[r]||this.onUnhandledMessage,a=s,l=this,c=this._connectedVersion===Jt.V1_2?a.headers.ack:a.headers["message-id"];a.ack=(u={})=>l.ack(c,r,u),a.nack=(u={})=>l.nack(c,r,u),o(a)},RECEIPT:s=>{const r=this._receiptWatchers[s.headers["receipt-id"]];r?(r(s),delete this._receiptWatchers[s.headers["receipt-id"]]):this.onUnhandledReceipt(s)},ERROR:s=>{this.onStompError(s)}},this._counter=0,this._subscriptions={},this._receiptWatchers={},this._partialData="",this._escapeHeaderValues=!1,this._lastServerActivityTS=Date.now(),this.debug=i.debug,this.stompVersions=i.stompVersions,this.connectHeaders=i.connectHeaders,this.disconnectHeaders=i.disconnectHeaders,this.heartbeatIncoming=i.heartbeatIncoming,this.heartbeatOutgoing=i.heartbeatOutgoing,this.splitLargeFrames=i.splitLargeFrames,this.maxWebSocketChunkSize=i.maxWebSocketChunkSize,this.forceBinaryWSFrames=i.forceBinaryWSFrames,this.logRawCommunication=i.logRawCommunication,this.appendMissingNULLonIncoming=i.appendMissingNULLonIncoming,this.discardWebsocketOnCommFailure=i.discardWebsocketOnCommFailure,this.onConnect=i.onConnect,this.onDisconnect=i.onDisconnect,this.onStompError=i.onStompError,this.onWebSocketClose=i.onWebSocketClose,this.onWebSocketError=i.onWebSocketError,this.onUnhandledMessage=i.onUnhandledMessage,this.onUnhandledReceipt=i.onUnhandledReceipt,this.onUnhandledFrame=i.onUnhandledFrame}get connectedVersion(){return this._connectedVersion}get connected(){return this._connected}start(){const e=new fy(t=>{const i=ts.fromRawFrame(t,this._escapeHeaderValues);this.logRawCommunication||this.debug(`<<< ${i}`),(this._serverFrameHandlers[i.command]||this.onUnhandledFrame)(i)},()=>{this.debug("<<< PONG")});this._webSocket.onmessage=t=>{if(this.debug("Received data"),this._lastServerActivityTS=Date.now(),this.logRawCommunication){const i=t.data instanceof ArrayBuffer?new TextDecoder().decode(t.data):t.data;this.debug(`<<< ${i}`)}e.parseChunk(t.data,this.appendMissingNULLonIncoming)},this._webSocket.onclose=t=>{this.debug(`Connection closed to ${this._webSocket.url}`),this._cleanUp(),this.onWebSocketClose(t)},this._webSocket.onerror=t=>{this.onWebSocketError(t)},this._webSocket.onopen=()=>{const t=Object.assign({},this.connectHeaders);this.debug("Web Socket Opened..."),t["accept-version"]=this.stompVersions.supportedVersions(),t["heart-beat"]=[this.heartbeatOutgoing,this.heartbeatIncoming].join(","),this._transmit({command:"CONNECT",headers:t})}}_setupHeartbeat(e){if(e.version!==Jt.V1_1&&e.version!==Jt.V1_2||!e["heart-beat"])return;const[t,i]=e["heart-beat"].split(",").map(s=>parseInt(s,10));if(this.heartbeatOutgoing!==0&&i!==0){const s=Math.max(this.heartbeatOutgoing,i);this.debug(`send PING every ${s}ms`),this._pinger=setInterval(()=>{this._webSocket.readyState===Ti.OPEN&&(this._webSocket.send(ro.LF),this.debug(">>> PING"))},s)}if(this.heartbeatIncoming!==0&&t!==0){const s=Math.max(this.heartbeatIncoming,t);this.debug(`check PONG every ${s}ms`),this._ponger=setInterval(()=>{const r=Date.now()-this._lastServerActivityTS;r>s*2&&(this.debug(`did not receive server activity for the last ${r}ms`),this._closeOrDiscardWebsocket())},s)}}_closeOrDiscardWebsocket(){this.discardWebsocketOnCommFailure?(this.debug("Discarding websocket, the underlying socket may linger for a while"),this.discardWebsocket()):(this.debug("Issuing close on the websocket"),this._closeWebsocket())}forceDisconnect(){this._webSocket&&(this._webSocket.readyState===Ti.CONNECTING||this._webSocket.readyState===Ti.OPEN)&&this._closeOrDiscardWebsocket()}_closeWebsocket(){this._webSocket.onmessage=()=>{},this._webSocket.close()}discardWebsocket(){typeof this._webSocket.terminate!="function"&&dy(this._webSocket,e=>this.debug(e)),this._webSocket.terminate()}_transmit(e){const{command:t,headers:i,body:s,binaryBody:r,skipContentLengthHeader:o}=e,a=new ts({command:t,headers:i,body:s,binaryBody:r,escapeHeaderValues:this._escapeHeaderValues,skipContentLengthHeader:o});let l=a.serialize();if(this.logRawCommunication?this.debug(`>>> ${l}`):this.debug(`>>> ${a}`),this.forceBinaryWSFrames&&typeof l=="string"&&(l=new TextEncoder().encode(l)),typeof l!="string"||!this.splitLargeFrames)this._webSocket.send(l);else{let c=l;for(;c.length>0;){const u=c.substring(0,this.maxWebSocketChunkSize);c=c.substring(this.maxWebSocketChunkSize),this._webSocket.send(u),this.debug(`chunk sent = ${u.length}, remaining = ${c.length}`)}}}dispose(){if(this.connected)try{const e=Object.assign({},this.disconnectHeaders);e.receipt||(e.receipt=`close-${this._counter++}`),this.watchForReceipt(e.receipt,t=>{this._closeWebsocket(),this._cleanUp(),this.onDisconnect(t)}),this._transmit({command:"DISCONNECT",headers:e})}catch(e){this.debug(`Ignoring error during disconnect ${e}`)}else(this._webSocket.readyState===Ti.CONNECTING||this._webSocket.readyState===Ti.OPEN)&&this._closeWebsocket()}_cleanUp(){this._connected=!1,this._pinger&&(clearInterval(this._pinger),this._pinger=void 0),this._ponger&&(clearInterval(this._ponger),this._ponger=void 0)}publish(e){const{destination:t,headers:i,body:s,binaryBody:r,skipContentLengthHeader:o}=e,a=Object.assign({destination:t},i);this._transmit({command:"SEND",headers:a,body:s,binaryBody:r,skipContentLengthHeader:o})}watchForReceipt(e,t){this._receiptWatchers[e]=t}subscribe(e,t,i={}){i=Object.assign({},i),i.id||(i.id=`sub-${this._counter++}`),i.destination=e,this._subscriptions[i.id]=t,this._transmit({command:"SUBSCRIBE",headers:i});const s=this;return{id:i.id,unsubscribe(r){return s.unsubscribe(i.id,r)}}}unsubscribe(e,t={}){t=Object.assign({},t),delete this._subscriptions[e],t.id=e,this._transmit({command:"UNSUBSCRIBE",headers:t})}begin(e){const t=e||`tx-${this._counter++}`;this._transmit({command:"BEGIN",headers:{transaction:t}});const i=this;return{id:t,commit(){i.commit(t)},abort(){i.abort(t)}}}commit(e){this._transmit({command:"COMMIT",headers:{transaction:e}})}abort(e){this._transmit({command:"ABORT",headers:{transaction:e}})}ack(e,t,i={}){i=Object.assign({},i),this._connectedVersion===Jt.V1_2?i.id=e:i["message-id"]=e,i.subscription=t,this._transmit({command:"ACK",headers:i})}nack(e,t,i={}){return i=Object.assign({},i),this._connectedVersion===Jt.V1_2?i.id=e:i["message-id"]=e,i.subscription=t,this._transmit({command:"NACK",headers:i})}}class my{constructor(e={}){this.stompVersions=Jt.default,this.connectionTimeout=0,this.reconnectDelay=5e3,this.heartbeatIncoming=1e4,this.heartbeatOutgoing=1e4,this.splitLargeFrames=!1,this.maxWebSocketChunkSize=8*1024,this.forceBinaryWSFrames=!1,this.appendMissingNULLonIncoming=!1,this.discardWebsocketOnCommFailure=!1,this.state=Sn.INACTIVE;const t=()=>{};this.debug=t,this.beforeConnect=t,this.onConnect=t,this.onDisconnect=t,this.onUnhandledMessage=t,this.onUnhandledReceipt=t,this.onUnhandledFrame=t,this.onStompError=t,this.onWebSocketClose=t,this.onWebSocketError=t,this.logRawCommunication=!1,this.onChangeState=t,this.connectHeaders={},this._disconnectHeaders={},this.configure(e)}get webSocket(){var e;return(e=this._stompHandler)==null?void 0:e._webSocket}get disconnectHeaders(){return this._disconnectHeaders}set disconnectHeaders(e){this._disconnectHeaders=e,this._stompHandler&&(this._stompHandler.disconnectHeaders=this._disconnectHeaders)}get connected(){return!!this._stompHandler&&this._stompHandler.connected}get connectedVersion(){return this._stompHandler?this._stompHandler.connectedVersion:void 0}get active(){return this.state===Sn.ACTIVE}_changeState(e){this.state=e,this.onChangeState(e)}configure(e){Object.assign(this,e)}activate(){const e=()=>{if(this.active){this.debug("Already ACTIVE, ignoring request to activate");return}this._changeState(Sn.ACTIVE),this._connect()};this.state===Sn.DEACTIVATING?(this.debug("Waiting for deactivation to finish before activating"),this.deactivate().then(()=>{e()})):e()}async _connect(){if(await this.beforeConnect(),this._stompHandler){this.debug("There is already a stompHandler, skipping the call to connect");return}if(!this.active){this.debug("Client has been marked inactive, will not attempt to connect");return}this.connectionTimeout>0&&(this._connectionWatcher&&clearTimeout(this._connectionWatcher),this._connectionWatcher=setTimeout(()=>{this.connected||(this.debug(`Connection not established in ${this.connectionTimeout}ms, closing socket`),this.forceDisconnect())},this.connectionTimeout)),this.debug("Opening Web Socket...");const e=this._createWebSocket();this._stompHandler=new py(this,e,{debug:this.debug,stompVersions:this.stompVersions,connectHeaders:this.connectHeaders,disconnectHeaders:this._disconnectHeaders,heartbeatIncoming:this.heartbeatIncoming,heartbeatOutgoing:this.heartbeatOutgoing,splitLargeFrames:this.splitLargeFrames,maxWebSocketChunkSize:this.maxWebSocketChunkSize,forceBinaryWSFrames:this.forceBinaryWSFrames,logRawCommunication:this.logRawCommunication,appendMissingNULLonIncoming:this.appendMissingNULLonIncoming,discardWebsocketOnCommFailure:this.discardWebsocketOnCommFailure,onConnect:t=>{if(this._connectionWatcher&&(clearTimeout(this._connectionWatcher),this._connectionWatcher=void 0),!this.active){this.debug("STOMP got connected while deactivate was issued, will disconnect now"),this._disposeStompHandler();return}this.onConnect(t)},onDisconnect:t=>{this.onDisconnect(t)},onStompError:t=>{this.onStompError(t)},onWebSocketClose:t=>{this._stompHandler=void 0,this.state===Sn.DEACTIVATING&&this._changeState(Sn.INACTIVE),this.onWebSocketClose(t),this.active&&this._schedule_reconnect()},onWebSocketError:t=>{this.onWebSocketError(t)},onUnhandledMessage:t=>{this.onUnhandledMessage(t)},onUnhandledReceipt:t=>{this.onUnhandledReceipt(t)},onUnhandledFrame:t=>{this.onUnhandledFrame(t)}}),this._stompHandler.start()}_createWebSocket(){let e;if(this.webSocketFactory)e=this.webSocketFactory();else if(this.brokerURL)e=new WebSocket(this.brokerURL,this.stompVersions.protocolVersions());else throw new Error("Either brokerURL or webSocketFactory must be provided");return e.binaryType="arraybuffer",e}_schedule_reconnect(){this.reconnectDelay>0&&(this.debug(`STOMP: scheduling reconnection in ${this.reconnectDelay}ms`),this._reconnector=setTimeout(()=>{this._connect()},this.reconnectDelay))}async deactivate(e={}){var r;const t=e.force||!1,i=this.active;let s;if(this.state===Sn.INACTIVE)return this.debug("Already INACTIVE, nothing more to do"),Promise.resolve();if(this._changeState(Sn.DEACTIVATING),this._reconnector&&(clearTimeout(this._reconnector),this._reconnector=void 0),this._stompHandler&&this.webSocket.readyState!==Ti.CLOSED){const o=this._stompHandler.onWebSocketClose;s=new Promise((a,l)=>{this._stompHandler.onWebSocketClose=c=>{o(c),a()}})}else return this._changeState(Sn.INACTIVE),Promise.resolve();return t?(r=this._stompHandler)==null||r.discardWebsocket():i&&this._disposeStompHandler(),s}forceDisconnect(){this._stompHandler&&this._stompHandler.forceDisconnect()}_disposeStompHandler(){this._stompHandler&&this._stompHandler.dispose()}publish(e){this._checkConnection(),this._stompHandler.publish(e)}_checkConnection(){if(!this.connected)throw new TypeError("There is no underlying STOMP connection")}watchForReceipt(e,t){this._checkConnection(),this._stompHandler.watchForReceipt(e,t)}subscribe(e,t,i={}){return this._checkConnection(),this._stompHandler.subscribe(e,t,i)}unsubscribe(e,t={}){this._checkConnection(),this._stompHandler.unsubscribe(e,t)}begin(e){return this._checkConnection(),this._stompHandler.begin(e)}commit(e){this._checkConnection(),this._stompHandler.commit(e)}abort(e){this._checkConnection(),this._stompHandler.abort(e)}ack(e,t,i={}){this._checkConnection(),this._stompHandler.ack(e,t,i)}nack(e,t,i={}){this._checkConnection(),this._stompHandler.nack(e,t,i)}}const gy=window.location.protocol==="http:"?"ws":"wss",It=new my({brokerURL:`${gy}://${window.location.host}/ws`,connectHeaders:{},onConnect:()=>{console.log("Connected to STOMP")},onDisconnect:()=>{console.log("Disconnected from STOMP")},debug:n=>console.log(n)});function yo(n,e){if(!n){console.error("Lobby ID is required to subscribe.");return}It.subscribe(`/topic${n}`,t=>{const i=JSON.parse(t.body);switch(i.type){default:e(i)}})}function oo(n,e){It.connected?It.publish({destination:n,body:JSON.stringify(e)}):console.error("WebSocket is not connected")}var vl=(n=>(n.REGISTERED="REGISTERED",n.GUEST="GUEST",n))(vl||{});const Wl={ok:!1,gamedata:{id:"",players:[],chickens:[],gamemaster:null,started:!1,playmap:void 0,password:null}};var gn=(n=>(n.SNACKMAN="SNACKMAN",n.GHOST="GHOST",n))(gn||{});const Fs=lh("gameStore",()=>{const n="/api/game",e="/topic/game",t=hs(Wl),i=ch(),s=oh();function r(){o()}function o(){t.ok=Wl.ok,t.gamedata=Wl.gamedata}function a(C){t.ok=!0,t.gamedata=C.feedback}async function l(C){if(!C.ok)throw new Error(`Error while fetching data with status: ${C.status}`);const v=await C.json();if(v.status==="error")throw new Error(v.feedback);return v}async function c(C){try{C.playerrole=gn.SNACKMAN,console.log("Erstelle Spiel mit: ",C);const v=await fetch(`${n}/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)}),x=await l(v);a(x),C.password&&(t.gamedata.password=C.password),It.onConnect=()=>{var R;(R=t.gamedata)!=null&&R.players&&yo(`/game/${t.gamedata.id}`,I=>{L(I,()=>{})})},It.connected||It.activate(),sessionStorage.setItem("myName",C.name),sessionStorage.setItem("playerInfo",JSON.stringify(C)),C.password&&sessionStorage.setItem("password",C.password)}catch(v){r(),console.error("Error creating game:",v)}}function u(C,v){return new Promise(x=>{It.onConnect=()=>{var R;It.unsubscribe(`${e}/${C}`),(R=t.gamedata)!=null&&R.players&&(yo(`/game/${C}`,I=>{L(I,x)}),oo(`${e}/${C}/join`,v),sessionStorage.setItem("myName",v.name))},It.connected||It.activate()})}async function h(C,v){const x=M();return x?new Promise(R=>{It.connected?(oo(`${e}/${t.gamedata.id}/start/${C}`,x),R({ok:!0,message:"Game started",data:null})):R({ok:!1,message:"WebSocket is not connected",data:null})}):new Promise(R=>R({ok:!1,message:"No acting player found",data:null}))}async function f(){try{const C=await fetch(`${n}/end/${t.gamedata.id}`,{method:"POST"}),v=await l(C);a(v)}catch(C){r(),console.error("Error ending game:",C)}}async function d(C,v,x){try{const R=await fetch(`${n}/move/${t.gamedata.id}/${C}/${v}/${x}`,{method:"POST"}),I=await l(R);return a(I),!0}catch(R){return console.error("Error moving player:",R),!1}}function g(C,v){return new Promise(x=>{try{let R=function(){console.log("Sending leave message for:",v.name),oo(`/topic/game/${C}/leave`,{name:v.name}),yo(`/game/${C}`,I=>{if(I.status==="ok"){console.log(`${v.name} erfolgreich verlassen.`);const F=I.feedback;t.gamedata.players.splice(0,t.gamedata.players.length,...F),sessionStorage.getItem("myName")===v.name&&(sessionStorage.removeItem("myName"),s.push({name:"index"})),x(!0)}else console.error("Leave error:",I.feedback),x(!1)})};It.connected?R():(It.activate(),It.onConnect=()=>{R()})}catch(R){console.error("Error in leaveGame:",R)}})}async function _(){It.onDisconnect=()=>{window.closed&&It.connected&&(console.log("ich wurde gelöscht"),It.deactivate)}}async function m(C,v){try{const x=await fetch(`${n}/kick/${t.gamedata.id}/${C.name}/${v.name}`,{method:"POST"}),R=await l(x);a(R),await g(t.gamedata.id,v),console.log("User {} got kicked from {}",v,C)}catch(x){r(),console.error("Error kicking user:",x)}}async function p(C){try{const v=await fetch(`${n}/setChicken/${t.gamedata.id}/${C}`,{method:"POST"}),x=await l(v);a(x)}catch(v){r(),console.error("Error setting chicken count:",v)}}async function T(){try{const C=await fetch(`${n}/status/${t.gamedata.id}`),v=await l(C);a(v)}catch(C){r(),console.error("Error fetching game status:",C)}}async function b(C,v){try{const x=await fetch(`${n}/setRole/${t.gamedata.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:C,role:v})}),R=await l(x);a(R)}catch(x){r(),console.error("Error set user role:",x)}}function M(){var v,x;const C=sessionStorage.getItem("myName");return(x=(v=t.gamedata)==null?void 0:v.players)==null?void 0:x.find(R=>R.name===C)}function D(C,v,x){const R=M();return R?(console.log("Setting role of "+C+" to "+gn[v]),new Promise(I=>{It.connected?(oo(`${e}/${x}/setRole/${C}/${gn[v]}`,R),I({ok:!0,message:"Role set",data:null})):I({ok:!1,message:"WebSocket is not connected",data:null})})):new Promise(I=>I({ok:!1,message:"No acting player found",data:null}))}function L(C,v){if(console.log(C.feedback),C.status==="ok"){switch(i.setErrorMessage(""),C.type){case"playerJoin":t.gamedata.players=C.feedback;break;case"playerRole":t.gamedata.players=C.feedback;break;case"gameStart":t.gamedata=C.feedback;break;case"playerMoveValidation":console.log("test");default:console.error("Unknown message type:",C.type)}v(!0)}else i.setErrorMessage(C.feedback),It.deactivate().then(x=>console.log("Deactivated stompClient:",x)),v(!1)}async function P(C){try{const x=await(await fetch(`${n}/${C}/isPrivate`)).json();if(x.status==="ok")return x.isPrivate;throw new Error(x.message)}catch(v){return console.error("Fehler beim Überprüfen, ob das Spiel privat ist:",v),!1}}return{gameState:t,createGame:c,startGameViaStomp:h,endGame:f,movePlayer:d,leaveGame:g,kickUser:m,joinLobby:u,setChickenCount:p,fetchGameStatus:T,setPlayerRole:b,setPlayerRoleViaStomp:D,closeTab:_,isGamePrivate:P}}),ch=lh("modal",()=>{const n=rt(!1),e=rt(),t=rt(),i=rt(""),s=Fs(),r=oh(),o=rt(!1),a=rt(!1);function l(g,_,m){n.value=!0,e.value=g,t.value=_,a.value=m}function c(){n.value=!1}async function u(g){g.name?(await s.createGame(g),r.push(`/lobby/${s.gameState.gamedata.id}`)):i.value="Bitte einen Usernamen eingeben"}async function h(g){if(!g.name)i.value="Bitte einen Username eingeben";else{if(await s.joinLobby(t.value,g)){s.gameState.gamedata.id,r.push(`/lobby/${t.value}`);return}return}}function f(g){i.value=g}async function d(g){try{const _=await s.isGamePrivate(g);a.value=_,l(es.JOIN_GAME,g,_)}catch(_){console.error("Fehler beim Überprüfen des privaten Status:",_),i.value="Lobby konnte nicht überprüft werden."}}return{isModalOpen:n,openModal:l,closeModal:c,modalType:e,newGame:u,joinGame:h,setErrorMessage:f,inputErrorMessage:i,requirePassword:o,isGamePrivate:a,checkPrivateGame:d}}),_y={class:"layout-modal"},vy={class:"space-y-4"},og=Lt({__name:"Modal",setup(n){return(e,t)=>(be(),De("div",_y,[ne("div",null,[ne("div",null,[Uc(e.$slots,"titel")]),ne("div",vy,[Uc(e.$slots,"content")])])]))}}),xy={class:"font-bold text-3xl text-center"},yy={class:"flex flex-col gap-3"},Sy={key:0,class:"input-error-message"},My={key:1},by={class:"mt-4 mb-4 mflex itmes-center space-x-2"},Ey={key:0},Ty={class:"flex space-x-4"},Ay={class:"layout-main"},wy={class:"flex flex-col gap-3"},Ry=Lt({__name:"Index",setup(n){const e=ch();Fs();const t=rt("");rt("");const i=hs({name:"",email:"",password:"",playertype:vl.GUEST,playerrole:gn.GHOST});function s(){tl.push({name:"createmap"})}return(r,o)=>(be(),De(nt,null,[Ce(e).isModalOpen?(be(),pn(og,{key:0},{titel:Ii(()=>[ne("h2",xy,Pt(Ce(e).modalType===Ce(es).JOIN_GAME?"Join Game":"New Game"),1)]),content:Ii(()=>[ne("div",yy,[bn(ne("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>i.name=a),type:"text",name:"name",id:"name",class:"block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",placeholder:"Username eingeben"},null,512),[[ei,i.name]]),Ce(e).inputErrorMessage?(be(),De("div",Sy,Pt(Ce(e).inputErrorMessage),1)):Mt("",!0),Ce(e).modalType===Ce(es).NEW_GAME?(be(),De("div",My,[ne("label",by,[bn(ne("input",{type:"checkbox","onUpdate:modelValue":o[1]||(o[1]=a=>Ce(e).requirePassword=a),id:"requirePassword",class:"form-checkbox rounded shadow-sm hover:shadow-md transition-shadow duration-300"},null,512),[[X0,Ce(e).requirePassword]]),o[10]||(o[10]=ne("span",null,"Privates Spiel",-1))]),Ce(e).requirePassword?bn((be(),De("input",{key:0,"onUpdate:modelValue":o[2]||(o[2]=a=>i.password=a),type:"text",id:"password",class:"block w-full rounded-md mt-2 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",placeholder:"Passwort eingeben"},null,512)),[[ei,i.password]]):Mt("",!0)])):Mt("",!0)]),Ce(e).modalType===Ce(es).JOIN_GAME?(be(),De("div",Ey,[Ce(e).isGamePrivate?bn((be(),De("input",{key:0,"onUpdate:modelValue":o[3]||(o[3]=a=>i.password=a),type:"text",id:"password",class:"block w-full rounded-md mt-2 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",placeholder:"Passwort eingeben"},null,512)),[[ei,i.password]]):Mt("",!0)])):Mt("",!0),ne("div",Ty,[ne("button",{class:"button-small-adventure",onClick:o[4]||(o[4]=a=>Ce(e).modalType===Ce(es).NEW_GAME?Ce(e).newGame(i):Ce(e).joinGame(i))},"Weiter"),ne("button",{class:"button-small-adventure",onClick:o[5]||(o[5]=a=>Ce(e).closeModal())},"Schließen")])]),_:1})):Mt("",!0),ne("div",Ay,[o[11]||(o[11]=ne("video",{autoplay:"",loop:"",muted:"",class:"absolute blur-sm top-0 left-0 w-full h-full object-cover -z-10"},[ne("source",{src:Ya,type:"video/webm"}),ne("source",{src:Ya,type:"video/mp4"})],-1)),o[12]||(o[12]=ne("h1",{class:"header-adventure"},"Snackman",-1)),ne("div",wy,[ne("button",{class:"buttons-top-bottom",onClick:o[6]||(o[6]=a=>Ce(e).openModal(Ce(es).NEW_GAME,"",!1))},"New Game"),ne("div",null,[bn(ne("input",{type:"text","onUpdate:modelValue":o[7]||(o[7]=a=>t.value=a),placeholder:"Game Id eingeben",class:"gameid-input-field"},null,512),[[ei,t.value]]),ne("button",{class:"button-middle",onClick:o[8]||(o[8]=a=>Ce(e).checkPrivateGame(t.value))},"Join")]),ne("button",{class:"buttons-top-bottom",onClick:o[9]||(o[9]=a=>Ce(tl).push("/lobby"))},"Find Lobbies/Games"),ne("button",{class:"buttons-top-bottom",onClick:s},"Map Creator")])])],64))}}),Cy={class:"px-6 py-3 text-gray-600"},Py={class:"px-6 py-3 text-gray-600"},Ly={class:"px-6 py-3"},Iy=Lt({__name:"LobbyTabellenZeile",props:{game:{}},setup(n){return Fs(),(e,t)=>{var i;return be(),De(nt,null,[ne("td",Cy,[t[1]||(t[1]=ne("span",{class:"font-medium px-6 py-3"},null,-1)),Qn(" "+Pt(e.game.id),1)]),ne("td",Py,[t[2]||(t[2]=ne("span",{class:"font-medium px-6 py-3"},null,-1)),Qn(" "+Pt(((i=e.game.gamemaster)==null?void 0:i.name)||"Unknown"),1)]),ne("td",Ly,[ne("button",{onClick:t[0]||(t[0]=s=>e.$emit("open-modal",Ce(es).JOIN_GAME,e.game.id)),class:"rounded-lg bg-gray-300 opacity-50 hover:bg-gray-400 p-3 px-6 py-3 card"}," Join ")])],64)}}}),Dy={class:"flex flex-col gap-3"},Ny={key:0,class:"input-error-message"},Uy={class:"flex space-x-4"},Oy={class:"flex items-center justify-center min-h-screen"},Fy={class:"card-adventure max-w-4xl"},By={class:"table-auto w-full border-rounded-lg border-collapse border border-gray-300"},ky=["game"],Hy="/api/game",Vy=Lt({__name:"LobbyList",setup(n){const e=ch(),t=rt([]),i=hs({name:"",email:"",password:"",playertype:vl.GUEST,playerrole:gn.GHOST});async function s(){try{const o=await(await fetch(`${Hy}/games`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();if(o.status=="ok")t.value=o.feedback;else throw new Error("Something went wrong, while receiving Games!")}catch{console.error("Error getting Games!")}}return ni(()=>{s()}),(r,o)=>(be(),De(nt,null,[Ce(e).isModalOpen?(be(),pn(og,{key:0},{titel:Ii(()=>o[3]||(o[3]=[ne("h2",{class:"header-modal-adventure"},"Join Game",-1)])),content:Ii(()=>[ne("div",Dy,[bn(ne("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>i.name=a),type:"text",name:"name",id:"name",class:"input-form",placeholder:"Username eingeben"},null,512),[[ei,i.name]]),Ce(e).inputErrorMessage?(be(),De("div",Ny,Pt(Ce(e).inputErrorMessage),1)):Mt("",!0)]),ne("div",Uy,[ne("button",{class:"button-small-adventure",onClick:o[1]||(o[1]=a=>Ce(e).joinGame(i))},"Weiter"),ne("button",{class:"button-small-adventure",onClick:o[2]||(o[2]=a=>Ce(e).closeModal())},"Schließen")])]),_:1})):Mt("",!0),ne("div",Oy,[o[5]||(o[5]=ne("video",{autoplay:"",loop:"",muted:"",class:"absolute blur-sm top-0 left-0 w-full h-full object-cover -z-10"},[ne("source",{src:Ya,type:"video/webm"}),ne("source",{src:Ya,type:"video/mp4"})],-1)),ne("div",Fy,[ne("table",By,[o[4]||(o[4]=ne("thead",null,[ne("tr",{class:"bg-gray-100 opacity-60"},[ne("th",{class:"px-6 py-3 text-gray-700"},"Lobby"),ne("th",{class:"px-6 py-3 text-gray-700"},"Host"),ne("th",{class:"px-6 py-3 text-gray-700"},"Action")])],-1)),ne("tbody",null,[(be(!0),De(nt,null,ii(t.value,a=>(be(),De("tr",{key:a.id,game:a},[Nt(Iy,{game:a,onOpenModal:Ce(e).openModal},null,8,["game","onOpenModal"])],8,ky))),128))])])])])],64))}}),zy={class:"flex flex-col flex-grow"},Gy={class:"text-lg font-semibold text-blue-600"},Wy={class:"flex items-center space-x-2"},Xy=["value"],$y=["value"],jy=Lt({__name:"PlayerTile",props:Av({lobbyId:{type:String,required:!0}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const e=n,t=Kv(n,"modelValue"),i=Fs(),{setPlayerRoleViaStomp:s,kickUser:r}=i;async function o(u){await s(u.name,u.playerrole,e.lobbyId).then(h=>{console.log(h)})}const a=Fs(),l=bt(()=>{var f;const u=sessionStorage.getItem("myName"),h=(f=a.gameState.gamedata)==null?void 0:f.gamemaster;return(h==null?void 0:h.name)===u&&(h==null?void 0:h.playertype)});async function c(u){var f;const h=(f=i.gameState.gamedata)==null?void 0:f.gamemaster;if(!h){console.log("Gamemaster nicht gefunden!");return}try{await r(h,u)}catch(d){console.log(d)}}return(u,h)=>(be(),De(nt,null,[ne("p",{class:Tn([{"text-gray-500 bg-darkgray border bg-red-500":!1,"text-green-500 bg-darkgray border bg-green-500":!0},"transition text-center w-4 h-4 rounded-full"])}),ne("div",zy,[ne("p",Gy,Pt(t.value.name),1)]),ne("div",Wy,[bn(ne("select",{"onUpdate:modelValue":h[0]||(h[0]=f=>t.value.playerrole=f),onChange:h[1]||(h[1]=f=>o(t.value)),class:"w-28 h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[ne("option",{value:Ce(gn).SNACKMAN},"Snackman",8,Xy),ne("option",{value:Ce(gn).GHOST},"Ghost",8,$y)],544),[[$0,t.value.playerrole]]),l.value?(be(),De("button",{key:0,class:"px-2 py-1 text-sm font-small text-white bg-red-500 rounded hover:bg-red-600 transition",onClick:h[2]||(h[2]=f=>c(t.value))}," Kick ")):Mt("",!0)])],64))}}),uh=lh("map",()=>{const n=rt(0),e=rt(0),t=rt([]),i=rt(""),s=rt(0),r=rt(0),o=rt({maps:[],selectedMap:null});async function a(){try{const d=await(await fetch("/api/maps")).json();if(d.feedback&&typeof d.feedback=="object")o.value.maps=Object.keys(d.feedback).map((g,_)=>({id:_+1,name:g,map:d.feedback[g]}));else throw new Error("Invalid data format");console.log("Fetched Maps:",o.value.maps)}catch(f){console.error("Error fetching maps:",f)}}async function l(){try{const d=await(await fetch("/api/maps/grid-limits")).json();s.value=d.min,r.value=d.max}catch(f){console.error("Error fetching grid limits:",f)}}function c(){if(n.value<=0||e.value<=0){alert("Bitte gültige Werte für Reihen und Spalten eingeben.");return}t.value=Array.from({length:n.value},()=>Array.from({length:e.value},()=>"null"));for(let f=0;f<n.value;f++)for(let d=0;d<e.value;d++)(f===0||f===n.value-1||d===0||d===e.value-1)&&(t.value[f][d]="wall");console.log(`Erstelle ein Spielfeld mit ${n.value} Reihen und ${e.value} Spalten.`)}function u(f,d){f===0||f===n.value-1||d===0||d===e.value-1||(t.value[f][d]=t.value[f][d]==="wall"?"weg":"wall")}async function h(){if(!i.value.trim()){alert("Please Enter the a name for the Map!");return}//!rows.value||!cols.value|| !grid.value.length
let f=!1;for(let _ of t.value){for(let m of _)if(m=="null"){f=!0;break}if(f)break}if(f){alert("Pleas fill the Map at first!");return}await a();let d=!1;for(let _ of o.value.maps)_.name.trim().toLowerCase()===i.value.trim().toLowerCase()&&(d=!0);if(d){alert("The name is not available, please choose a different name.");return}const g={name:i.value,tiles:t.value.map(_=>_.join(""))};try{const _=await fetch("/api/maps",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)});if(!_.ok)throw new Error(await _.text());alert("Map erfolgreich gespeichert!"),await a()}catch(_){console.error("Somethink went Wrong :( ",_),alert("Somethink went Wrong :( ")}}return{mapName:i,rows:n,cols:e,grid:t,minGridSize:s,maxGridSize:r,mapsDTD:o,fetchMaps:a,saveMap:h,fetchGridLimits:l,createGrid:c,updateCell:u}}),qy={class:"h-screen bg-zinc-900"},Ky={class:"max-w-lg mx-auto mt-0 px-4"},Yy={class:"mb-4"},Zy={class:"flex items-center space-x-2"},Jy={key:0,class:"mb-4 max-w-lg"},Qy={class:"flex items-center space-x-2"},eS=["value"],tS={class:"space-x-2 mt-3 bg-gray-800 shadow-lg rounded-lg divide-y divide-gray-900 max-w-lg mb-4"},nS={class:"pr-4 pl-4 p-2 text-gray-500 flex items-center justify-between transition-colors"},iS={class:"flex items-center space-x-2 mt-3"},sS={class:"flex items-center space-x-2 mt-3"},rS={class:"w-50 p-2 bg-gray-800 shadow-lg rounded-lg text-blue-600"},oS={class:"text-sm text-gray-400 mt-2"},aS=["disabled"],lS={key:0,class:"fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"},cS={class:"bg-zinc-800 p-6 rounded-lg shadow-lg max-w-4xl w-full"},uS={class:"grid grid-cols-2 gap-4"},hS=["onClick"],fS=["id"],dS={class:"text-center text-zinc-200 font-semibold"},pS={class:"flex justify-between mt-4"},mS=7,gS=Lt({__name:"GameLobbyView",setup(n){const e=Fs(),{setPlayerRoleViaStomp:t}=e,i=ah(),s=oh(),r=uh(),o=rt(!1),a=rt(null),l=rt(!0);rt(!1);const c=i.params.id.toString(),u=bt(()=>{var v;return((v=e.gameState.gamedata)==null?void 0:v.players)||[]}),h=bt(()=>mS-u.value.length),f=bt(()=>{var v;return((v=e.gameState.gamedata)==null?void 0:v.password)||null}),d=bt({get:()=>{var v;return((v=e.gameState.gamedata)==null?void 0:v.chickens.length)||0},set:async v=>{await e.setChickenCount(v)}}),g=bt(()=>{var R;const v=sessionStorage.getItem("myName"),x=(R=e.gameState.gamedata)==null?void 0:R.gamemaster;return(x==null?void 0:x.name)===v&&(x==null?void 0:x.name)});Ns(()=>{var v;return(v=e.gameState.gamedata)==null?void 0:v.started},v=>{v&&s.push({name:"game"})});async function _(){const v=[gn.SNACKMAN,gn.GHOST];for(const x of u.value){const R=v[Math.floor(Math.random()*v.length)];x.playerrole=R,console.log(`Assigning random role ${R} to player ${x.name}`),await t(x.name,R,c).then(I=>{console.log(I)})}}async function m(){var v,x;try{if(!((v=r.mapsDTD.selectedMap)!=null&&v.map))throw new Error("No map selected!");await e.startGameViaStomp((x=r.mapsDTD.selectedMap)==null?void 0:x.name,c),console.log(e.gameState),console.log("playMap: ",e.gameState.gamedata.playmap)}catch(R){console.log(R)}}function p(){alert("Copied to Clipboard!"),navigator.clipboard.writeText(c)}async function T(v){try{const x=sessionStorage.getItem("myName");if(!x){console.error("nicht gefunden");return}const R=u.value.find(F=>F.name===x);if(!R){console.error("Spieler nicht in der Liste gefunden!");return}console.log("Lobby-Daten vor leaveGame:",u.value);const I=await e.leaveGame(v,R);console.log("Leaving Game succeeded:",I),console.log("Lobby-Daten nach leaveGame:",u.value)}catch(x){console.log("Fehler beim ausfueren des leaven",x)}}ni(async()=>{var v;try{await e.fetchGameStatus(),console.log("Passwort von gamestate",(v=e.gameState.gamedata)==null?void 0:v.password)}catch(x){console.error("Error fetching game status:",x)}}),ni(async()=>{try{await r.fetchMaps(),r.mapsDTD.maps.length>0&&(r.mapsDTD.selectedMap=r.mapsDTD.maps[0],a.value=r.mapsDTD.selectedMap,console.log("Default:",a.value.name))}catch(v){console.error("Error during setup:",v)}}),Ns(()=>o.value,async v=>{v&&(console.log("Popup is now visible. Drawing maps..."),await kr(),b())});async function b(){r.mapsDTD.maps.forEach(v=>{console.log(`Drawing map with ID: ${v.id}`),C(v)})}function M(){o.value=!0}function D(){o.value=!1}window.addEventListener("beforeunload",v=>{v.preventDefault();const x=sessionStorage.getItem("myName");x&&u.value.find(I=>I.name===x)&&T(c)}),ni(async()=>{try{await e.fetchGameStatus()}catch(v){console.error("Error fetching game status:",v)}});function L(){const v=r.mapsDTD.maps;if(v.length>0){const x=Math.floor(Math.random()*v.length),R=v[x];a.value=R,r.mapsDTD.selectedMap=R,console.log("Randomly selected map:",R.name)}else alert("No maps available to select.")}function P(v){a.value=v,r.mapsDTD.selectedMap=v}function C(v){const x=document.getElementById("mapCanvas-"+v.id);if(!x){console.error(`Canvas with ID 'mapCanvas-${v.id}' not found in the DOM.`);return}const R=x.getContext("2d");if(!R){console.error(`2D context for canvas 'mapCanvas-${v.id}' not available.`);return}const I=20,F=v.map.length,J=v.map[0].length;x.width=J*I,x.height=F*I;for(let ae=0;ae<F;ae++)for(let K=0;K<J;K++){const se=v.map[ae][K];R.fillStyle=se==="*"?"black":"blue",R.fillRect(K*I,ae*I,I,I),R.strokeStyle="black",R.strokeRect(K*I,ae*I,I,I)}console.log(`Map ${v.id} drawn successfully.`)}return(v,x)=>{var R;return be(),De("div",qy,[ne("div",Ky,[x[12]||(x[12]=ne("h1",{class:"text-2xl font-semibold text-center text-zinc-200 mb-10"},"Game Lobby",-1)),ne("div",Yy,[x[9]||(x[9]=ne("p",{class:"text-lg font-semibold text-zinc-200"},"Lobby Code:",-1)),ne("div",Zy,[bn(ne("input",{type:"text",class:"w-full p-3 bg-gray-800 shadow-lg rounded-lg text-zinc-300",disabled:"true","onUpdate:modelValue":x[0]||(x[0]=I=>St(c)?c.value=I:null)},null,512),[[ei,Ce(c)]]),ne("button",{class:"bg-yellow-500 text-zinc-900 p-3 rounded-lg hover:bg-yellow-600 transition",onClick:x[1]||(x[1]=I=>p())}," Copy ")])]),g.value?(be(),De("div",Jy,[x[10]||(x[10]=ne("p",{class:"text-lg font-semibold text-zinc-200"},"Lobby Passwort:",-1)),ne("div",Qy,[ne("input",{type:"text",class:"w-full p-3 bg-gray-800 shadow-lg rounded-lg text-zinc-300",value:f.value,disabled:"true"},null,8,eS)])])):Mt("",!0),ne("ul",tS,[(be(!0),De(nt,null,ii(u.value,(I,F)=>(be(),De("li",{key:I.name,class:"pr-4 pl-4 p-2 flex items-center space-x-4 transition-colors"},[Nt(jy,{modelValue:u.value[F],"onUpdate:modelValue":J=>u.value[F]=J,"lobby-id":Ce(c)},null,8,["modelValue","onUpdate:modelValue","lobby-id"])]))),128)),(be(!0),De(nt,null,ii(h.value,I=>(be(),De("li",nS," Empty "))),256))]),ne("div",iS,[x[11]||(x[11]=ne("p",{class:"text-lg w-50 font-semibold text-zinc-200"}," Chickens: ",-1)),bn(ne("input",{type:"number","onUpdate:modelValue":x[2]||(x[2]=I=>d.value=I),class:"w-50 p-2 bg-gray-800 shadow-lg rounded-lg text-blue-600"},null,512),[[ei,d.value]]),g.value?(be(),De("button",{key:0,class:"w-80 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition",onClick:x[3]||(x[3]=I=>_())}," Randomize Roles ")):Mt("",!0)]),ne("div",sS,[g.value?(be(),De("button",{key:0,class:"w-50 p-2 bg-blue-800 shadow-lg rounded-lg text-white-600 hover:bg-gray-800",onClick:x[4]||(x[4]=I=>M())}," Select Map ")):Mt("",!0),ne("div",rS,[ne("p",oS,"Selected: "+Pt(((R=a.value)==null?void 0:R.name)||"None"),1)])]),ne("button",{class:Tn([{"bg-green-700 hover:bg-green-800 text-zinc-200":l.value,"bg-gray-600":!l.value},"w-full mt-5 px-6 py-3 text-lg font-semibold rounded-lg transition"]),disabled:!l.value,onClick:x[5]||(x[5]=I=>m())},Pt(l.value?"Start Game":"---"),11,aS),ne("button",{class:Tn([{"bg-red-700 hover:bg-red-800 text-zinc-200":l.value,"bg-gray-600":!l.value},"w-full mt-5 px-6 py-3 text-lg font-semibold rounded-lg transition"]),onClick:x[6]||(x[6]=I=>T(Ce(c)))}," leave ",2)]),o.value?(be(),De("div",lS,[ne("div",cS,[x[13]||(x[13]=ne("h2",{class:"text-lg font-semibold text-zinc-200 mb-4"},"Select a Map",-1)),ne("div",uS,[(be(!0),De(nt,null,ii(Ce(r).mapsDTD.maps,I=>{var F;return be(),De("div",{key:I.id,class:Tn(["p-4 rounded-lg shadow-lg transition cursor-pointer",I.id===((F=a.value)==null?void 0:F.id)?"bg-blue-700 border-blue-400":"bg-gray-800 hover:bg-gray-700"]),onClick:J=>P(I)},[ne("canvas",{id:"mapCanvas-"+I.id,class:"w-full h-40 border border-zinc-500 bg-blue-600"},null,8,fS),ne("p",dS,Pt(I.name),1)],10,hS)}),128))]),ne("div",pS,[ne("button",{class:"bg-blue-600 hover:bg-blue-700 text-zinc-200 py-1 px-4 rounded-lg transition",onClick:x[7]||(x[7]=I=>L())}," Random Map "),ne("button",{class:"bg-red-600 hover:bg-red-700 text-zinc-200 py-1 px-4 rounded-lg transition",onClick:x[8]||(x[8]=I=>D())}," OK ")])])])):Mt("",!0)])}}}),_S="/assets/herz-BDr62fbB.png",vS="/assets/emptyHerz-Nnh5wdS8.png";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hh="170",xS=0,Gf=1,yS=2,ag=1,SS=2,yi=3,Ni=0,on=1,Jn=2,rs=0,_r=1,Wf=2,Xf=3,$f=4,MS=5,ws=100,bS=101,ES=102,TS=103,AS=104,wS=200,RS=201,CS=202,PS=203,qc=204,Kc=205,LS=206,IS=207,DS=208,NS=209,US=210,OS=211,FS=212,BS=213,kS=214,Yc=0,Zc=1,Jc=2,Ar=3,Qc=4,eu=5,tu=6,nu=7,lg=0,HS=1,VS=2,os=0,zS=1,GS=2,WS=3,XS=4,$S=5,jS=6,qS=7,jf="attached",KS="detached",cg=300,wr=301,Rr=302,iu=303,su=304,xl=306,Cr=1e3,is=1001,Za=1002,en=1003,ug=1004,ao=1005,mn=1006,Ia=1007,Ai=1008,Ui=1009,hg=1010,fg=1011,No=1012,fh=1013,Bs=1014,Fn=1015,Go=1016,dh=1017,ph=1018,Pr=1020,dg=35902,pg=1021,mg=1022,En=1023,gg=1024,_g=1025,vr=1026,Lr=1027,mh=1028,gh=1029,vg=1030,_h=1031,vh=1033,Da=33776,Na=33777,Ua=33778,Oa=33779,ru=35840,ou=35841,au=35842,lu=35843,cu=36196,uu=37492,hu=37496,fu=37808,du=37809,pu=37810,mu=37811,gu=37812,_u=37813,vu=37814,xu=37815,yu=37816,Su=37817,Mu=37818,bu=37819,Eu=37820,Tu=37821,Fa=36492,Au=36494,wu=36495,xg=36283,Ru=36284,Cu=36285,Pu=36286,Uo=2300,Oo=2301,Xl=2302,qf=2400,Kf=2401,Yf=2402,YS=2500,ZS=0,yg=1,Lu=2,JS=3200,QS=3201,Sg=0,eM=1,ns="",Ht="srgb",nn="srgb-linear",yl="linear",mt="srgb",$s=7680,Zf=519,tM=512,nM=513,iM=514,Mg=515,sM=516,rM=517,oM=518,aM=519,Iu=35044,Jf="300 es",wi=2e3,Ja=2001;class Vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qf=1234567;const So=Math.PI/180,Ir=180/Math.PI;function Hn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function $t(n,e,t){return Math.max(e,Math.min(t,n))}function xh(n,e){return(n%e+e)%e}function lM(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function cM(n,e,t){return n!==e?(t-n)/(e-n):0}function Mo(n,e,t){return(1-t)*n+t*e}function uM(n,e,t,i){return Mo(n,e,1-Math.exp(-t*i))}function hM(n,e=1){return e-Math.abs(xh(n,e*2)-e)}function fM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function dM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function pM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function mM(n,e){return n+Math.random()*(e-n)}function gM(n){return n*(.5-Math.random())}function _M(n){n!==void 0&&(Qf=n);let e=Qf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vM(n){return n*So}function xM(n){return n*Ir}function yM(n){return(n&n-1)===0&&n!==0}function SM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function MM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function bM(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const EM={DEG2RAD:So,RAD2DEG:Ir,generateUUID:Hn,clamp:$t,euclideanModulo:xh,mapLinear:lM,inverseLerp:cM,lerp:Mo,damp:uM,pingpong:hM,smoothstep:fM,smootherstep:dM,randInt:pM,randFloat:mM,randFloatSpread:gM,seededRandom:_M,degToRad:vM,radToDeg:xM,isPowerOfTwo:yM,ceilPowerOfTwo:SM,floorPowerOfTwo:MM,setQuaternionFromProperEuler:bM,normalize:dt,denormalize:Un};class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,i,s,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],T=s[1],b=s[4],M=s[7],D=s[2],L=s[5],P=s[8];return r[0]=o*_+a*T+l*D,r[3]=o*m+a*b+l*L,r[6]=o*p+a*M+l*P,r[1]=c*_+u*T+h*D,r[4]=c*m+u*b+h*L,r[7]=c*p+u*M+h*P,r[2]=f*_+d*T+g*D,r[5]=f*m+d*b+g*L,r[8]=f*p+d*M+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($l.makeScale(e,t)),this}rotate(e){return this.premultiply($l.makeRotation(-e)),this}translate(e,t){return this.premultiply($l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $l=new Ke;function bg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function TM(){const n=Fo("canvas");return n.style.display="block",n}const ed={};function lo(n){n in ed||(ed[n]=!0,console.warn(n))}function AM(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function wM(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function RM(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const et={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===mt&&(n.r=Pi(n.r),n.g=Pi(n.g),n.b=Pi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===mt&&(n.r=xr(n.r),n.g=xr(n.g),n.b=xr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ns?yl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const td=[.64,.33,.3,.6,.15,.06],nd=[.2126,.7152,.0722],id=[.3127,.329],sd=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rd=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et.define({[nn]:{primaries:td,whitePoint:id,transfer:yl,toXYZ:sd,fromXYZ:rd,luminanceCoefficients:nd,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:td,whitePoint:id,transfer:mt,toXYZ:sd,fromXYZ:rd,luminanceCoefficients:nd,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}});let js;class CM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{js===void 0&&(js=Fo("canvas")),js.width=e.width,js.height=e.height;const i=js.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PM=0;class Eg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jl(s[o].image)):r.push(jl(s[o]))}else r=jl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function jl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?CM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let LM=0;class kt extends Vs{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=is,s=is,r=mn,o=Ai,a=En,l=Ui,c=kt.DEFAULT_ANISOTROPY,u=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Hn(),this.name="",this.source=new Eg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case is:e.x=e.x<0?0:1;break;case Za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case is:e.y=e.y<0?0:1;break;case Za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=cg;kt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,i=0,s=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(d+1)/2,D=(p+1)/2,L=(u+f)/4,P=(h+_)/4,C=(g+m)/4;return b>M&&b>D?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=L/i,r=P/i):M>D?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=L/s,r=C/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=P/r,s=C/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(f-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IM extends Vs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new kt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Eg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ks extends IM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Tg extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DM extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,T=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const D=Math.sqrt(b),L=Math.atan2(D,p*T);m=Math.sin(m*L)/D,a=Math.sin(a*L)/D}const M=a*T;if(l=l*m+f*M,c=c*m+d*M,u=u*m+g*M,h=h*m+_*M,m===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(od.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(od.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ql.copy(this).projectOnVector(e),this.sub(ql)}reflect(e){return this.sub(ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ql=new k,od=new fs;class oi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ea.copy(i.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),ta.subVectors(this.max,Kr),qs.subVectors(e.a,Kr),Ks.subVectors(e.b,Kr),Ys.subVectors(e.c,Kr),Vi.subVectors(Ks,qs),zi.subVectors(Ys,Ks),_s.subVectors(qs,Ys);let t=[0,-Vi.z,Vi.y,0,-zi.z,zi.y,0,-_s.z,_s.y,Vi.z,0,-Vi.x,zi.z,0,-zi.x,_s.z,0,-_s.x,-Vi.y,Vi.x,0,-zi.y,zi.x,0,-_s.y,_s.x,0];return!Kl(t,qs,Ks,Ys,ta)||(t=[1,0,0,0,1,0,0,0,1],!Kl(t,qs,Ks,Ys,ta))?!1:(na.crossVectors(Vi,zi),t=[na.x,na.y,na.z],Kl(t,qs,Ks,Ys,ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new k,new k,new k,new k,new k,new k,new k,new k],Ln=new k,ea=new oi,qs=new k,Ks=new k,Ys=new k,Vi=new k,zi=new k,_s=new k,Kr=new k,ta=new k,na=new k,vs=new k;function Kl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){vs.fromArray(n,r);const a=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),l=e.dot(vs),c=t.dot(vs),u=i.dot(vs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const NM=new oi,Yr=new k,Yl=new k;class ai{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):NM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);const t=Yr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Yr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(Yl)),this.expandByPoint(Yr.copy(e.center).sub(Yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new k,Zl=new k,ia=new k,Gi=new k,Jl=new k,sa=new k,Ql=new k;class Sl{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Zl.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(Zl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ia),a=Gi.dot(this.direction),l=-Gi.dot(ia),c=Gi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Zl).addScaledVector(ia,f),d}intersectSphere(e,t){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),s=mi.dot(mi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,s,r){Jl.subVectors(t,e),sa.subVectors(i,e),Ql.crossVectors(Jl,sa);let o=this.direction.dot(Ql),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);const l=a*this.direction.dot(sa.crossVectors(Gi,sa));if(l<0)return null;const c=a*this.direction.dot(Jl.cross(Gi));if(c<0||l+c>o)return null;const u=-a*Gi.dot(Ql);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),o=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UM,e,OM)}lookAt(e,t,i){const s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Wi.crossVectors(i,ln),Wi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Wi.crossVectors(i,ln)),Wi.normalize(),ra.crossVectors(ln,Wi),s[0]=Wi.x,s[4]=ra.x,s[8]=ln.x,s[1]=Wi.y,s[5]=ra.y,s[9]=ln.y,s[2]=Wi.z,s[6]=ra.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],T=i[3],b=i[7],M=i[11],D=i[15],L=s[0],P=s[4],C=s[8],v=s[12],x=s[1],R=s[5],I=s[9],F=s[13],J=s[2],ae=s[6],K=s[10],se=s[14],j=s[3],ve=s[7],ye=s[11],Pe=s[15];return r[0]=o*L+a*x+l*J+c*j,r[4]=o*P+a*R+l*ae+c*ve,r[8]=o*C+a*I+l*K+c*ye,r[12]=o*v+a*F+l*se+c*Pe,r[1]=u*L+h*x+f*J+d*j,r[5]=u*P+h*R+f*ae+d*ve,r[9]=u*C+h*I+f*K+d*ye,r[13]=u*v+h*F+f*se+d*Pe,r[2]=g*L+_*x+m*J+p*j,r[6]=g*P+_*R+m*ae+p*ve,r[10]=g*C+_*I+m*K+p*ye,r[14]=g*v+_*F+m*se+p*Pe,r[3]=T*L+b*x+M*J+D*j,r[7]=T*P+b*R+M*ae+D*ve,r[11]=T*C+b*I+M*K+D*ye,r[15]=T*v+b*F+M*se+D*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,b=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,M=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,D=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,L=t*T+i*b+s*M+r*D;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=T*P,e[1]=(_*f*r-h*m*r-_*s*d+i*m*d+h*s*p-i*f*p)*P,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*P,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*P,e[4]=b*P,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*P,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*P,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*P,e[8]=M*P,e[9]=(g*h*r-u*_*r-g*i*d+t*_*d+u*i*p-t*h*p)*P,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*p+t*a*p)*P,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*P,e[12]=D*P,e[13]=(u*_*s-g*h*s+g*i*f-t*_*f-u*i*m+t*h*m)*P,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*P,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,T=l*c,b=l*u,M=l*h,D=i.x,L=i.y,P=i.z;return s[0]=(1-(_+p))*D,s[1]=(d+M)*D,s[2]=(g-b)*D,s[3]=0,s[4]=(d-M)*L,s[5]=(1-(f+p))*L,s[6]=(m+T)*L,s[7]=0,s[8]=(g+b)*P,s[9]=(m-T)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Zs.set(s[0],s[1],s[2]).length();const o=Zs.set(s[4],s[5],s[6]).length(),a=Zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],In.copy(this);const c=1/r,u=1/o,h=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=wi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let d,g;if(a===wi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ja)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=wi){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,d=(i+s)*u;let g,_;if(a===wi)g=(o+r)*h,_=-2*h;else if(a===Ja)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Zs=new k,In=new Ye,UM=new k(0,0,0),OM=new k(1,1,1),Wi=new k,ra=new k,ln=new k,ad=new Ye,ld=new fs;class Wn{constructor(e=0,t=0,i=0,s=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ad.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ad,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ld.setFromEuler(this),this.setFromQuaternion(ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Ag{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FM=0;const cd=new k,Js=new fs,gi=new Ye,oa=new k,Zr=new k,BM=new k,kM=new fs,ud=new k(1,0,0),hd=new k(0,1,0),fd=new k(0,0,1),dd={type:"added"},HM={type:"removed"},Qs={type:"childadded",child:null},ec={type:"childremoved",child:null};class Et extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new k,t=new Wn,i=new fs,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Ke}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ag,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(ud,e)}rotateY(e){return this.rotateOnAxis(hd,e)}rotateZ(e){return this.rotateOnAxis(fd,e)}translateOnAxis(e,t){return cd.copy(e).applyQuaternion(this.quaternion),this.position.add(cd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ud,e)}translateY(e){return this.translateOnAxis(hd,e)}translateZ(e){return this.translateOnAxis(fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oa.copy(e):oa.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Zr,oa,this.up):gi.lookAt(oa,Zr,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(gi),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dd),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(HM),ec.child=e,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dd),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,BM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,kM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Et.DEFAULT_UP=new k(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new k,_i=new k,tc=new k,vi=new k,er=new k,tr=new k,pd=new k,nc=new k,ic=new k,sc=new k,rc=new ot,oc=new ot,ac=new ot;class On{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Dn.subVectors(e,t),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Dn.subVectors(s,t),_i.subVectors(i,t),tc.subVectors(e,t);const o=Dn.dot(Dn),a=Dn.dot(_i),l=Dn.dot(tc),c=_i.dot(_i),u=_i.dot(tc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return rc.setScalar(0),oc.setScalar(0),ac.setScalar(0),rc.fromBufferAttribute(e,t),oc.fromBufferAttribute(e,i),ac.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(rc,r.x),o.addScaledVector(oc,r.y),o.addScaledVector(ac,r.z),o}static isFrontFacing(e,t,i,s){return Dn.subVectors(i,t),_i.subVectors(e,t),Dn.cross(_i).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Dn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return On.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;er.subVectors(s,i),tr.subVectors(r,i),nc.subVectors(e,i);const l=er.dot(nc),c=tr.dot(nc);if(l<=0&&c<=0)return t.copy(i);ic.subVectors(e,s);const u=er.dot(ic),h=tr.dot(ic);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(er,o);sc.subVectors(e,r);const d=er.dot(sc),g=tr.dot(sc);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(tr,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return pd.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(pd,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(er,o).addScaledVector(tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},aa={h:0,s:0,l:0};function lc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=xh(e,1),t=$t(t,0,1),i=$t(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=lc(o,r,e+1/3),this.g=lc(o,r,e),this.b=lc(o,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=Ht){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const i=wg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return et.fromWorkingColorSpace(Gt.copy(this),e),Math.round($t(Gt.r*255,0,255))*65536+Math.round($t(Gt.g*255,0,255))*256+Math.round($t(Gt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Gt.copy(this),t);const i=Gt.r,s=Gt.g,r=Gt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Ht){et.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,s=Gt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(aa);const i=Mo(Xi.h,aa.h,t),s=Mo(Xi.s,aa.s,t),r=Mo(Xi.l,aa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new $e;$e.NAMES=wg;let VM=0;class si extends Vs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Hn(),this.name="",this.blending=_r,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=Kc,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qc&&(i.blendSrc=this.blendSrc),this.blendDst!==Kc&&(i.blendDst=this.blendDst),this.blendEquation!==ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cs extends si{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=lg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new k,la=new tt;class tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Iu,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)la.fromBufferAttribute(this,t),la.applyMatrix3(e),this.setXY(t,la.x,la.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Iu&&(e.usage=this.usage),e}}class Rg extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Cg extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Rn extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let zM=0;const yn=new Ye,cc=new Et,nr=new k,cn=new oi,Jr=new oi,Ft=new k;class Xn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bg(e)?Cg:Rg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return cc.lookAt(e),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rn(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(cn.min,Jr.min),cn.expandByPoint(Ft),Ft.addVectors(cn.max,Jr.max),cn.expandByPoint(Ft)):(cn.expandByPoint(Jr.min),cn.expandByPoint(Jr.max))}cn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ft.fromBufferAttribute(a,c),l&&(nr.fromBufferAttribute(e,c),Ft.add(nr)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new k,l[C]=new k;const c=new k,u=new k,h=new k,f=new tt,d=new tt,g=new tt,_=new k,m=new k;function p(C,v,x){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,x),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,v),g.fromBufferAttribute(r,x),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),a[C].add(_),a[v].add(_),a[x].add(_),l[C].add(m),l[v].add(m),l[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let C=0,v=T.length;C<v;++C){const x=T[C],R=x.start,I=x.count;for(let F=R,J=R+I;F<J;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const b=new k,M=new k,D=new k,L=new k;function P(C){D.fromBufferAttribute(s,C),L.copy(D);const v=a[C];b.copy(v),b.sub(D.multiplyScalar(D.dot(v))).normalize(),M.crossVectors(L,v);const R=M.dot(l[C])<0?-1:1;o.setXYZW(C,b.x,b.y,b.z,R)}for(let C=0,v=T.length;C<v;++C){const x=T[C],R=x.start,I=x.count;for(let F=R,J=R+I;F<J;F+=3)P(e.getX(F+0)),P(e.getX(F+1)),P(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new tn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const md=new Ye,xs=new Sl,ca=new ai,gd=new k,ua=new k,ha=new k,fa=new k,uc=new k,da=new k,_d=new k,pa=new k;class At extends Et{constructor(e=new Xn,t=new Cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){da.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(uc.fromBufferAttribute(h,e),o?da.addScaledVector(uc,u):da.addScaledVector(uc.sub(t),u))}t.add(da)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(r),xs.copy(e.ray).recast(e.near),!(ca.containsPoint(xs.origin)===!1&&(xs.intersectSphere(ca,gd)===null||xs.origin.distanceToSquared(gd)>(e.far-e.near)**2))&&(md.copy(r).invert(),xs.copy(e.ray).applyMatrix4(md),!(i.boundingBox!==null&&xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=T,D=b;M<D;M+=3){const L=a.getX(M),P=a.getX(M+1),C=a.getX(M+2);s=ma(this,p,e,i,c,u,h,L,P,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);s=ma(this,o,e,i,c,u,h,T,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=T,D=b;M<D;M+=3){const L=M,P=M+1,C=M+2;s=ma(this,p,e,i,c,u,h,L,P,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,b=m+1,M=m+2;s=ma(this,o,e,i,c,u,h,T,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function GM(n,e,t,i,s,r,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ni,a),l===null)return null;pa.copy(a),pa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(pa);return c<t.near||c>t.far?null:{distance:c,point:pa.clone(),object:n}}function ma(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ua),n.getVertexPosition(l,ha),n.getVertexPosition(c,fa);const u=GM(n,e,t,i,ua,ha,fa,_d);if(u){const h=new k;On.getBarycoord(_d,ua,ha,fa,h),s&&(u.uv=On.getInterpolatedAttribute(s,a,l,c,h,new tt)),r&&(u.uv1=On.getInterpolatedAttribute(r,a,l,c,h,new tt)),o&&(u.normal=On.getInterpolatedAttribute(o,a,l,c,h,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};On.getNormal(ua,ha,fa,f.normal),u.face=f,u.barycoord=h}return u}class Hs extends Xn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Rn(c,3)),this.setAttribute("normal",new Rn(u,3)),this.setAttribute("uv",new Rn(h,2));function g(_,m,p,T,b,M,D,L,P,C,v){const x=M/P,R=D/C,I=M/2,F=D/2,J=L/2,ae=P+1,K=C+1;let se=0,j=0;const ve=new k;for(let ye=0;ye<K;ye++){const Pe=ye*R-F;for(let ge=0;ge<ae;ge++){const xe=ge*x-I;ve[_]=xe*T,ve[m]=Pe*b,ve[p]=J,c.push(ve.x,ve.y,ve.z),ve[_]=0,ve[m]=0,ve[p]=L>0?1:-1,u.push(ve.x,ve.y,ve.z),h.push(ge/P),h.push(1-ye/C),se+=1}}for(let ye=0;ye<C;ye++)for(let Pe=0;Pe<P;Pe++){const ge=f+Pe+ae*ye,xe=f+Pe+ae*(ye+1),z=f+(Pe+1)+ae*(ye+1),de=f+(Pe+1)+ae*ye;l.push(ge,xe,de),l.push(xe,z,de),j+=6}a.addGroup(d,j,v),d+=j,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Dr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Kt(n){const e={};for(let t=0;t<n.length;t++){const i=Dr(n[t]);for(const s in i)e[s]=i[s]}return e}function WM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Pg(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const XM={clone:Dr,merge:Kt};var $M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class as extends si{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$M,this.fragmentShader=jM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=WM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Lg extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new k,vd=new tt,xd=new tt;class Qt extends Lg{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,vd,xd),t.subVectors(xd,vd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(So*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,sr=1;class qM extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qt(ir,sr,e,t);s.layers=this.layers,this.add(s);const r=new Qt(ir,sr,e,t);r.layers=this.layers,this.add(r);const o=new Qt(ir,sr,e,t);o.layers=this.layers,this.add(o);const a=new Qt(ir,sr,e,t);a.layers=this.layers,this.add(a);const l=new Qt(ir,sr,e,t);l.layers=this.layers,this.add(l);const c=new Qt(ir,sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ig extends kt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:wr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KM extends ks{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ig(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Hs(5,5,5),r=new as({name:"CubemapFromEquirect",uniforms:Dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:rs});r.uniforms.tEquirect.value=t;const o=new At(s,r),a=t.minFilter;return t.minFilter===Ai&&(t.minFilter=mn),new qM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const hc=new k,YM=new k,ZM=new Ke;class Ts{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=hc.subVectors(i,t).cross(YM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(hc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ZM.getNormalMatrix(e),s=this.coplanarPoint(hc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new ai,ga=new k;class yh{constructor(e=new Ts,t=new Ts,i=new Ts,s=new Ts,r=new Ts,o=new Ts){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],T=s[13],b=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,m-d,M-p).normalize(),i[1].setComponents(l+r,f+c,m+d,M+p).normalize(),i[2].setComponents(l+o,f+u,m+g,M+T).normalize(),i[3].setComponents(l-o,f-u,m-g,M-T).normalize(),i[4].setComponents(l-a,f-h,m-_,M-b).normalize(),t===wi)i[5].setComponents(l+a,f+h,m+_,M+b).normalize();else if(t===Ja)i[5].setComponents(a,h,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ga.x=s.normal.x>0?e.max.x:e.min.x,ga.y=s.normal.y>0?e.max.y:e.min.y,ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dg(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function JM(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ml extends Xn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const T=p*f-o;for(let b=0;b<c;b++){const M=b*h-r;g.push(M,-T,0),_.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const b=T+c*p,M=T+c*(p+1),D=T+1+c*(p+1),L=T+1+c*p;d.push(b,M,L),d.push(M,D,L)}this.setIndex(d),this.setAttribute("position",new Rn(g,3)),this.setAttribute("normal",new Rn(_,3)),this.setAttribute("uv",new Rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.width,e.height,e.widthSegments,e.heightSegments)}}var QM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ib=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ob=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ab=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ub=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,db=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Eb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ab=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Db=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ub=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ob=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$b=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_E=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ME=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,RE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,BE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$E=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_T=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ST=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,PT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:QM,alphahash_pars_fragment:eb,alphamap_fragment:tb,alphamap_pars_fragment:nb,alphatest_fragment:ib,alphatest_pars_fragment:sb,aomap_fragment:rb,aomap_pars_fragment:ob,batching_pars_vertex:ab,batching_vertex:lb,begin_vertex:cb,beginnormal_vertex:ub,bsdfs:hb,iridescence_fragment:fb,bumpmap_pars_fragment:db,clipping_planes_fragment:pb,clipping_planes_pars_fragment:mb,clipping_planes_pars_vertex:gb,clipping_planes_vertex:_b,color_fragment:vb,color_pars_fragment:xb,color_pars_vertex:yb,color_vertex:Sb,common:Mb,cube_uv_reflection_fragment:bb,defaultnormal_vertex:Eb,displacementmap_pars_vertex:Tb,displacementmap_vertex:Ab,emissivemap_fragment:wb,emissivemap_pars_fragment:Rb,colorspace_fragment:Cb,colorspace_pars_fragment:Pb,envmap_fragment:Lb,envmap_common_pars_fragment:Ib,envmap_pars_fragment:Db,envmap_pars_vertex:Nb,envmap_physical_pars_fragment:Xb,envmap_vertex:Ub,fog_vertex:Ob,fog_pars_vertex:Fb,fog_fragment:Bb,fog_pars_fragment:kb,gradientmap_pars_fragment:Hb,lightmap_pars_fragment:Vb,lights_lambert_fragment:zb,lights_lambert_pars_fragment:Gb,lights_pars_begin:Wb,lights_toon_fragment:$b,lights_toon_pars_fragment:jb,lights_phong_fragment:qb,lights_phong_pars_fragment:Kb,lights_physical_fragment:Yb,lights_physical_pars_fragment:Zb,lights_fragment_begin:Jb,lights_fragment_maps:Qb,lights_fragment_end:eE,logdepthbuf_fragment:tE,logdepthbuf_pars_fragment:nE,logdepthbuf_pars_vertex:iE,logdepthbuf_vertex:sE,map_fragment:rE,map_pars_fragment:oE,map_particle_fragment:aE,map_particle_pars_fragment:lE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:uE,morphinstance_vertex:hE,morphcolor_vertex:fE,morphnormal_vertex:dE,morphtarget_pars_vertex:pE,morphtarget_vertex:mE,normal_fragment_begin:gE,normal_fragment_maps:_E,normal_pars_fragment:vE,normal_pars_vertex:xE,normal_vertex:yE,normalmap_pars_fragment:SE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:bE,clearcoat_pars_fragment:EE,iridescence_pars_fragment:TE,opaque_fragment:AE,packing:wE,premultiplied_alpha_fragment:RE,project_vertex:CE,dithering_fragment:PE,dithering_pars_fragment:LE,roughnessmap_fragment:IE,roughnessmap_pars_fragment:DE,shadowmap_pars_fragment:NE,shadowmap_pars_vertex:UE,shadowmap_vertex:OE,shadowmask_pars_fragment:FE,skinbase_vertex:BE,skinning_pars_vertex:kE,skinning_vertex:HE,skinnormal_vertex:VE,specularmap_fragment:zE,specularmap_pars_fragment:GE,tonemapping_fragment:WE,tonemapping_pars_fragment:XE,transmission_fragment:$E,transmission_pars_fragment:jE,uv_pars_fragment:qE,uv_pars_vertex:KE,uv_vertex:YE,worldpos_vertex:ZE,background_vert:JE,background_frag:QE,backgroundCube_vert:eT,backgroundCube_frag:tT,cube_vert:nT,cube_frag:iT,depth_vert:sT,depth_frag:rT,distanceRGBA_vert:oT,distanceRGBA_frag:aT,equirect_vert:lT,equirect_frag:cT,linedashed_vert:uT,linedashed_frag:hT,meshbasic_vert:fT,meshbasic_frag:dT,meshlambert_vert:pT,meshlambert_frag:mT,meshmatcap_vert:gT,meshmatcap_frag:_T,meshnormal_vert:vT,meshnormal_frag:xT,meshphong_vert:yT,meshphong_frag:ST,meshphysical_vert:MT,meshphysical_frag:bT,meshtoon_vert:ET,meshtoon_frag:TT,points_vert:AT,points_frag:wT,shadow_vert:RT,shadow_frag:CT,sprite_vert:PT,sprite_frag:LT},Me={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Zn={basic:{uniforms:Kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Kt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Kt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Kt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Kt([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Kt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Kt([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Kt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Kt([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Kt([Me.common,Me.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Kt([Me.lights,Me.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Zn.physical={uniforms:Kt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const _a={r:0,b:0,g:0},Ss=new Wn,IT=new Ye;function DT(n,e,t,i,s,r,o){const a=new $e(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?t:e).get(b)),b}function _(T){let b=!1;const M=g(T);M===null?p(a,l):M&&M.isColor&&(p(M,1),b=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,b){const M=g(b);M&&(M.isCubeTexture||M.mapping===xl)?(u===void 0&&(u=new At(new Hs(1,1,1),new as({name:"BackgroundCubeMaterial",uniforms:Dr(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ss.copy(b.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(IT.makeRotationFromEuler(Ss)),u.material.toneMapped=et.getTransfer(M.colorSpace)!==mt,(h!==M||f!==M.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new At(new Ml(2,2),new as({name:"BackgroundMaterial",uniforms:Dr(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=et.getTransfer(M.colorSpace)!==mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,b){T.getRGB(_a,Pg(n)),i.buffers.color.setClear(_a.r,_a.g,_a.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(T,b=1){a.set(T),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:_,addToRenderList:m}}function NT(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(x,R,I,F,J){let ae=!1;const K=h(F,I,R);r!==K&&(r=K,c(r.object)),ae=d(x,F,I,J),ae&&g(x,F,I,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,M(x,R,I,F),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,R,I){const F=I.wireframe===!0;let J=i[x.id];J===void 0&&(J={},i[x.id]=J);let ae=J[R.id];ae===void 0&&(ae={},J[R.id]=ae);let K=ae[F];return K===void 0&&(K=f(l()),ae[F]=K),K}function f(x){const R=[],I=[],F=[];for(let J=0;J<t;J++)R[J]=0,I[J]=0,F[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:F,object:x,attributes:{},index:null}}function d(x,R,I,F){const J=r.attributes,ae=R.attributes;let K=0;const se=I.getAttributes();for(const j in se)if(se[j].location>=0){const ye=J[j];let Pe=ae[j];if(Pe===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(Pe=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(Pe=x.instanceColor)),ye===void 0||ye.attribute!==Pe||Pe&&ye.data!==Pe.data)return!0;K++}return r.attributesNum!==K||r.index!==F}function g(x,R,I,F){const J={},ae=R.attributes;let K=0;const se=I.getAttributes();for(const j in se)if(se[j].location>=0){let ye=ae[j];ye===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(ye=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(ye=x.instanceColor));const Pe={};Pe.attribute=ye,ye&&ye.data&&(Pe.data=ye.data),J[j]=Pe,K++}r.attributes=J,r.attributesNum=K,r.index=F}function _(){const x=r.newAttributes;for(let R=0,I=x.length;R<I;R++)x[R]=0}function m(x){p(x,0)}function p(x,R){const I=r.newAttributes,F=r.enabledAttributes,J=r.attributeDivisors;I[x]=1,F[x]===0&&(n.enableVertexAttribArray(x),F[x]=1),J[x]!==R&&(n.vertexAttribDivisor(x,R),J[x]=R)}function T(){const x=r.newAttributes,R=r.enabledAttributes;for(let I=0,F=R.length;I<F;I++)R[I]!==x[I]&&(n.disableVertexAttribArray(I),R[I]=0)}function b(x,R,I,F,J,ae,K){K===!0?n.vertexAttribIPointer(x,R,I,J,ae):n.vertexAttribPointer(x,R,I,F,J,ae)}function M(x,R,I,F){_();const J=F.attributes,ae=I.getAttributes(),K=R.defaultAttributeValues;for(const se in ae){const j=ae[se];if(j.location>=0){let ve=J[se];if(ve===void 0&&(se==="instanceMatrix"&&x.instanceMatrix&&(ve=x.instanceMatrix),se==="instanceColor"&&x.instanceColor&&(ve=x.instanceColor)),ve!==void 0){const ye=ve.normalized,Pe=ve.itemSize,ge=e.get(ve);if(ge===void 0)continue;const xe=ge.buffer,z=ge.type,de=ge.bytesPerElement,pe=z===n.INT||z===n.UNSIGNED_INT||ve.gpuType===fh;if(ve.isInterleavedBufferAttribute){const U=ve.data,re=U.stride,G=ve.offset;if(U.isInstancedInterleavedBuffer){for(let ue=0;ue<j.locationSize;ue++)p(j.location+ue,U.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ue=0;ue<j.locationSize;ue++)m(j.location+ue);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let ue=0;ue<j.locationSize;ue++)b(j.location+ue,Pe/j.locationSize,z,ye,re*de,(G+Pe/j.locationSize*ue)*de,pe)}else{if(ve.isInstancedBufferAttribute){for(let U=0;U<j.locationSize;U++)p(j.location+U,ve.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let U=0;U<j.locationSize;U++)m(j.location+U);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let U=0;U<j.locationSize;U++)b(j.location+U,Pe/j.locationSize,z,ye,Pe*de,Pe/j.locationSize*U*de,pe)}}else if(K!==void 0){const ye=K[se];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(j.location,ye);break;case 3:n.vertexAttrib3fv(j.location,ye);break;case 4:n.vertexAttrib4fv(j.location,ye);break;default:n.vertexAttrib1fv(j.location,ye)}}}}T()}function D(){C();for(const x in i){const R=i[x];for(const I in R){const F=R[I];for(const J in F)u(F[J].object),delete F[J];delete R[I]}delete i[x]}}function L(x){if(i[x.id]===void 0)return;const R=i[x.id];for(const I in R){const F=R[I];for(const J in F)u(F[J].object),delete F[J];delete R[I]}delete i[x.id]}function P(x){for(const R in i){const I=i[R];if(I[x.id]===void 0)continue;const F=I[x.id];for(const J in F)u(F[J].object),delete F[J];delete I[x.id]}}function C(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:v,dispose:D,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function UT(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function OT(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==En&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const C=P===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ui&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Fn&&!C)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:D,maxSamples:L}}function FT(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ts,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,b=T*4;let M=p.clippingState||null;l.value=M,M=u(g,f,b,d);for(let D=0;D!==b;++D)M[D]=t[D];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=d;b!==_;++b,M+=4)o.copy(h[b]).applyMatrix4(T,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function BT(n){let e=new WeakMap;function t(o,a){return a===iu?o.mapping=wr:a===su&&(o.mapping=Rr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===iu||a===su)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new KM(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Sh extends Lg{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fr=4,yd=[.125,.215,.35,.446,.526,.582],Rs=20,fc=new Sh,Sd=new $e;let dc=null,pc=0,mc=0,gc=!1;const As=(1+Math.sqrt(5))/2,rr=1/As,Md=[new k(-As,rr,0),new k(As,rr,0),new k(-rr,0,As),new k(rr,0,As),new k(0,As,-rr),new k(0,As,rr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class bd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){dc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dc,pc,mc),this._renderer.xr.enabled=gc,e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wr||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Go,format:En,colorSpace:nn,depthBuffer:!1},s=Ed(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ed(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kT(r)),this._blurMaterial=HT(r,e,t)}return s}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,fc)}_sceneToCubeUV(e,t,i,s){const a=new Qt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Sd),u.toneMapping=os,u.autoClear=!1;const d=new Cs({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new At(new Hs,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Sd),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const b=this._cubeSize;va(s,T*b,p>2?b:0,b,b),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===wr||e.mapping===Rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Td());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;va(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,fc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Md[(s-r-1)%Md.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new At(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Rs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Rs;m>Rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rs}`);const p=[];let T=0;for(let P=0;P<Rs;++P){const C=P/_,v=Math.exp(-C*C/2);p.push(v),P===0?T+=v:P<m&&(T+=2*v)}for(let P=0;P<p.length;P++)p[P]=p[P]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const M=this._sizeLods[s],D=3*M*(s>b-fr?s-b+fr:0),L=4*(this._cubeSize-M);va(t,D,L,3*M,2*M),l.setRenderTarget(t),l.render(h,fc)}}function kT(n){const e=[],t=[],i=[];let s=n;const r=n-fr+1+yd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-fr?l=yd[o-n+fr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),b=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let L=0;L<d;L++){const P=L%3*2/3-1,C=L>2?0:-1,v=[P,C,0,P+2/3,C,0,P+2/3,C+1,0,P,C,0,P+2/3,C+1,0,P,C+1,0];T.set(v,_*g*L),b.set(f,m*g*L);const x=[L,L,L,L,L,L];M.set(x,p*g*L)}const D=new Xn;D.setAttribute("position",new tn(T,_)),D.setAttribute("uv",new tn(b,m)),D.setAttribute("faceIndex",new tn(M,p)),e.push(D),s>fr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ed(n,e,t){const i=new ks(n,e,t);return i.texture.mapping=xl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function va(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function HT(n,e,t){const i=new Float32Array(Rs),s=new k(0,1,0);return new as({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Td(){return new as({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Ad(){return new as({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Mh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function VT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===iu||l===su,u=l===wr||l===Rr;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new bd(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new bd(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function zT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&lo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function GT(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let b=0,M=T.length;b<M;b+=3){const D=T[b+0],L=T[b+1],P=T[b+2];f.push(D,L,L,P,P,D)}}else if(g!==void 0){const T=g.array;_=g.version;for(let b=0,M=T.length/3-1;b<M;b+=3){const D=b+0,L=b+1,P=b+2;f.push(D,L,L,P,P,D)}}else return;const m=new(bg(f)?Cg:Rg)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function WT(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T]*_[T];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function XT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function $T(n,e,t){const i=new WeakMap,s=new ot;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let v=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let b=0;d===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let M=a.attributes.position.count*b,D=1;M>e.maxTextureSize&&(D=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const L=new Float32Array(M*D*4*h),P=new Tg(L,M,D,h);P.type=Fn,P.needsUpdate=!0;const C=b*4;for(let x=0;x<h;x++){const R=m[x],I=p[x],F=T[x],J=M*D*4*x;for(let ae=0;ae<R.count;ae++){const K=ae*C;d===!0&&(s.fromBufferAttribute(R,ae),L[J+K+0]=s.x,L[J+K+1]=s.y,L[J+K+2]=s.z,L[J+K+3]=0),g===!0&&(s.fromBufferAttribute(I,ae),L[J+K+4]=s.x,L[J+K+5]=s.y,L[J+K+6]=s.z,L[J+K+7]=0),_===!0&&(s.fromBufferAttribute(F,ae),L[J+K+8]=s.x,L[J+K+9]=s.y,L[J+K+10]=s.z,L[J+K+11]=F.itemSize===4?s.w:1)}}f={count:h,texture:P,size:new tt(M,D)},i.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function jT(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Ng extends kt{constructor(e,t,i,s,r,o,a,l,c,u=vr){if(u!==vr&&u!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===vr&&(i=Bs),i===void 0&&u===Lr&&(i=Pr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ug=new kt,wd=new Ng(1,1),Og=new Tg,Fg=new DM,Bg=new Ig,Rd=[],Cd=[],Pd=new Float32Array(16),Ld=new Float32Array(9),Id=new Float32Array(4);function Hr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Rd[s];if(r===void 0&&(r=new Float32Array(s),Rd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bl(n,e){let t=Cd[e];t===void 0&&(t=new Int32Array(e),Cd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function KT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function YT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function ZT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function JT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,i))return;Id.set(i),n.uniformMatrix2fv(this.addr,!1,Id),Ot(t,i)}}function QT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,i))return;Ld.set(i),n.uniformMatrix3fv(this.addr,!1,Ld),Ot(t,i)}}function eA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,i))return;Pd.set(i),n.uniformMatrix4fv(this.addr,!1,Pd),Ot(t,i)}}function tA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function nA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function iA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function sA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function rA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function oA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function aA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function lA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function cA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(wd.compareFunction=Mg,r=wd):r=Ug,t.setTexture2D(e||r,s)}function uA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Fg,s)}function hA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Bg,s)}function fA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Og,s)}function dA(n){switch(n){case 5126:return qT;case 35664:return KT;case 35665:return YT;case 35666:return ZT;case 35674:return JT;case 35675:return QT;case 35676:return eA;case 5124:case 35670:return tA;case 35667:case 35671:return nA;case 35668:case 35672:return iA;case 35669:case 35673:return sA;case 5125:return rA;case 36294:return oA;case 36295:return aA;case 36296:return lA;case 35678:case 36198:case 36298:case 36306:case 35682:return cA;case 35679:case 36299:case 36307:return uA;case 35680:case 36300:case 36308:case 36293:return hA;case 36289:case 36303:case 36311:case 36292:return fA}}function pA(n,e){n.uniform1fv(this.addr,e)}function mA(n,e){const t=Hr(e,this.size,2);n.uniform2fv(this.addr,t)}function gA(n,e){const t=Hr(e,this.size,3);n.uniform3fv(this.addr,t)}function _A(n,e){const t=Hr(e,this.size,4);n.uniform4fv(this.addr,t)}function vA(n,e){const t=Hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xA(n,e){const t=Hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yA(n,e){const t=Hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function SA(n,e){n.uniform1iv(this.addr,e)}function MA(n,e){n.uniform2iv(this.addr,e)}function bA(n,e){n.uniform3iv(this.addr,e)}function EA(n,e){n.uniform4iv(this.addr,e)}function TA(n,e){n.uniform1uiv(this.addr,e)}function AA(n,e){n.uniform2uiv(this.addr,e)}function wA(n,e){n.uniform3uiv(this.addr,e)}function RA(n,e){n.uniform4uiv(this.addr,e)}function CA(n,e,t){const i=this.cache,s=e.length,r=bl(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ug,r[o])}function PA(n,e,t){const i=this.cache,s=e.length,r=bl(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Fg,r[o])}function LA(n,e,t){const i=this.cache,s=e.length,r=bl(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Bg,r[o])}function IA(n,e,t){const i=this.cache,s=e.length,r=bl(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Og,r[o])}function DA(n){switch(n){case 5126:return pA;case 35664:return mA;case 35665:return gA;case 35666:return _A;case 35674:return vA;case 35675:return xA;case 35676:return yA;case 5124:case 35670:return SA;case 35667:case 35671:return MA;case 35668:case 35672:return bA;case 35669:case 35673:return EA;case 5125:return TA;case 36294:return AA;case 36295:return wA;case 36296:return RA;case 35678:case 36198:case 36298:case 36306:case 35682:return CA;case 35679:case 36299:case 36307:return PA;case 35680:case 36300:case 36308:case 36293:return LA;case 36289:case 36303:case 36311:case 36292:return IA}}class NA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=dA(t.type)}}class UA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DA(t.type)}}class OA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const _c=/(\w+)(\])?(\[|\.)?/g;function Dd(n,e){n.seq.push(e),n.map[e.id]=e}function FA(n,e,t){const i=n.name,s=i.length;for(_c.lastIndex=0;;){const r=_c.exec(i),o=_c.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Dd(t,c===void 0?new NA(a,n,e):new UA(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new OA(a),Dd(t,h)),t=h}}}class Ba{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);FA(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Nd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const BA=37297;let kA=0;function HA(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ud=new Ke;function VA(n){et._getMatrix(Ud,et.workingColorSpace,n);const e=`mat3( ${Ud.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case yl:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Od(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+HA(n.getShaderSource(e),o)}else return s}function zA(n,e){const t=VA(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function GA(n,e){let t;switch(e){case zS:t="Linear";break;case GS:t="Reinhard";break;case WS:t="Cineon";break;case XS:t="ACESFilmic";break;case jS:t="AgX";break;case qS:t="Neutral";break;case $S:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xa=new k;function WA(){et.getLuminanceCoefficients(xa);const n=xa.x.toFixed(4),e=xa.y.toFixed(4),t=xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function $A(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function co(n){return n!==""}function Fd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Du(n){return n.replace(qA,YA)}const KA=new Map;function YA(n,e){let t=Ze[e];if(t===void 0){const i=KA.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Du(t)}const ZA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kd(n){return n.replace(ZA,JA)}function JA(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function QA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ag?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===SS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function ew(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wr:case Rr:e="ENVMAP_TYPE_CUBE";break;case xl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Rr:e="ENVMAP_MODE_REFRACTION";break}return e}function nw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case lg:e="ENVMAP_BLENDING_MULTIPLY";break;case HS:e="ENVMAP_BLENDING_MIX";break;case VS:e="ENVMAP_BLENDING_ADD";break}return e}function iw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function sw(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=QA(t),c=ew(t),u=tw(t),h=nw(t),f=iw(t),d=XA(t),g=$A(r),_=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),p.length>0&&(p+=`
`)):(m=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),p=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==os?"#define TONE_MAPPING":"",t.toneMapping!==os?Ze.tonemapping_pars_fragment:"",t.toneMapping!==os?GA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,zA("linearToOutputTexel",t.outputColorSpace),WA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),o=Du(o),o=Fd(o,t),o=Bd(o,t),a=Du(a),a=Fd(a,t),a=Bd(a,t),o=kd(o),a=kd(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=T+m+o,M=T+p+a,D=Nd(s,s.VERTEX_SHADER,b),L=Nd(s,s.FRAGMENT_SHADER,M);s.attachShader(_,D),s.attachShader(_,L),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(R){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(D).trim(),J=s.getShaderInfoLog(L).trim();let ae=!0,K=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,D,L);else{const se=Od(s,D,"vertex"),j=Od(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+se+`
`+j)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||J==="")&&(K=!1);K&&(R.diagnostics={runnable:ae,programLog:I,vertexShader:{log:F,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(D),s.deleteShader(L),C=new Ba(s,_),v=jA(s,_)}let C;this.getUniforms=function(){return C===void 0&&P(this),C};let v;this.getAttributes=function(){return v===void 0&&P(this),v};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,BA)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=L,this}let rw=0;class ow{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new aw(e),t.set(e,i)),i}}class aw{constructor(e){this.id=rw++,this.code=e,this.usedTimes=0}}function lw(n,e,t,i,s,r,o){const a=new Ag,l=new ow,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,x,R,I,F){const J=I.fog,ae=F.geometry,K=v.isMeshStandardMaterial?I.environment:null,se=(v.isMeshStandardMaterial?t:e).get(v.envMap||K),j=se&&se.mapping===xl?se.image.height:null,ve=g[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const ye=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Pe=ye!==void 0?ye.length:0;let ge=0;ae.morphAttributes.position!==void 0&&(ge=1),ae.morphAttributes.normal!==void 0&&(ge=2),ae.morphAttributes.color!==void 0&&(ge=3);let xe,z,de,pe;if(ve){const ft=Zn[ve];xe=ft.vertexShader,z=ft.fragmentShader}else xe=v.vertexShader,z=v.fragmentShader,l.update(v),de=l.getVertexShaderID(v),pe=l.getFragmentShaderID(v);const U=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),G=F.isInstancedMesh===!0,ue=F.isBatchedMesh===!0,Ee=!!v.map,Ne=!!v.matcap,w=!!se,S=!!v.aoMap,W=!!v.lightMap,te=!!v.bumpMap,q=!!v.normalMap,Y=!!v.displacementMap,he=!!v.emissiveMap,ie=!!v.metalnessMap,E=!!v.roughnessMap,y=v.anisotropy>0,N=v.clearcoat>0,B=v.dispersion>0,$=v.iridescence>0,X=v.sheen>0,le=v.transmission>0,Z=y&&!!v.anisotropyMap,me=N&&!!v.clearcoatMap,Ge=N&&!!v.clearcoatNormalMap,fe=N&&!!v.clearcoatRoughnessMap,Se=$&&!!v.iridescenceMap,Ie=$&&!!v.iridescenceThicknessMap,He=X&&!!v.sheenColorMap,Le=X&&!!v.sheenRoughnessMap,ze=!!v.specularMap,Ve=!!v.specularColorMap,ht=!!v.specularIntensityMap,O=le&&!!v.transmissionMap,Te=le&&!!v.thicknessMap,oe=!!v.gradientMap,ce=!!v.alphaMap,Re=v.alphaTest>0,Ae=!!v.alphaHash,je=!!v.extensions;let Tt=os;v.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Tt=n.toneMapping);const Vt={shaderID:ve,shaderType:v.type,shaderName:v.name,vertexShader:xe,fragmentShader:z,defines:v.defines,customVertexShaderID:de,customFragmentShaderID:pe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:ue,batchingColor:ue&&F._colorsTexture!==null,instancing:G,instancingColor:G&&F.instanceColor!==null,instancingMorph:G&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:nn,alphaToCoverage:!!v.alphaToCoverage,map:Ee,matcap:Ne,envMap:w,envMapMode:w&&se.mapping,envMapCubeUVHeight:j,aoMap:S,lightMap:W,bumpMap:te,normalMap:q,displacementMap:f&&Y,emissiveMap:he,normalMapObjectSpace:q&&v.normalMapType===eM,normalMapTangentSpace:q&&v.normalMapType===Sg,metalnessMap:ie,roughnessMap:E,anisotropy:y,anisotropyMap:Z,clearcoat:N,clearcoatMap:me,clearcoatNormalMap:Ge,clearcoatRoughnessMap:fe,dispersion:B,iridescence:$,iridescenceMap:Se,iridescenceThicknessMap:Ie,sheen:X,sheenColorMap:He,sheenRoughnessMap:Le,specularMap:ze,specularColorMap:Ve,specularIntensityMap:ht,transmission:le,transmissionMap:O,thicknessMap:Te,gradientMap:oe,opaque:v.transparent===!1&&v.blending===_r&&v.alphaToCoverage===!1,alphaMap:ce,alphaTest:Re,alphaHash:Ae,combine:v.combine,mapUv:Ee&&_(v.map.channel),aoMapUv:S&&_(v.aoMap.channel),lightMapUv:W&&_(v.lightMap.channel),bumpMapUv:te&&_(v.bumpMap.channel),normalMapUv:q&&_(v.normalMap.channel),displacementMapUv:Y&&_(v.displacementMap.channel),emissiveMapUv:he&&_(v.emissiveMap.channel),metalnessMapUv:ie&&_(v.metalnessMap.channel),roughnessMapUv:E&&_(v.roughnessMap.channel),anisotropyMapUv:Z&&_(v.anisotropyMap.channel),clearcoatMapUv:me&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(v.sheenRoughnessMap.channel),specularMapUv:ze&&_(v.specularMap.channel),specularColorMapUv:Ve&&_(v.specularColorMap.channel),specularIntensityMapUv:ht&&_(v.specularIntensityMap.channel),transmissionMapUv:O&&_(v.transmissionMap.channel),thicknessMapUv:Te&&_(v.thicknessMap.channel),alphaMapUv:ce&&_(v.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(q||y),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!ae.attributes.uv&&(Ee||ce),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:re,skinning:F.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:ge,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Ee&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===mt,decodeVideoTextureEmissive:he&&v.emissiveMap.isVideoTexture===!0&&et.getTransfer(v.emissiveMap.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Jn,flipSided:v.side===on,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:je&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&v.extensions.multiDraw===!0||ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function p(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)x.push(R),x.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(T(x,v),b(x,v),x.push(n.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function T(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function b(v,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),v.push(a.mask)}function M(v){const x=g[v.type];let R;if(x){const I=Zn[x];R=XM.clone(I.uniforms)}else R=v.uniforms;return R}function D(v,x){let R;for(let I=0,F=u.length;I<F;I++){const J=u[I];if(J.cacheKey===x){R=J,++R.usedTimes;break}}return R===void 0&&(R=new sw(n,x,v,r),u.push(R)),R}function L(v){if(--v.usedTimes===0){const x=u.indexOf(v);u[x]=u[u.length-1],u.pop(),v.destroy()}}function P(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:D,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:C}}function cw(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function uw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||uw),i.length>1&&i.sort(f||Vd),s.length>1&&s.sort(f||Vd)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function hw(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new zd,n.set(i,[o])):s>=r.length?(o=new zd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function fw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new $e};break;case"SpotLight":t={position:new k,direction:new k,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function dw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pw=0;function mw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gw(n){const e=new fw,t=dw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new Ye,o=new Ye;function a(c){let u=0,h=0,f=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,b=0,M=0,D=0,L=0,P=0;c.sort(mw);for(let v=0,x=c.length;v<x;v++){const R=c[v],I=R.color,F=R.intensity,J=R.distance,ae=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=I.r*F,h+=I.g*F,f+=I.b*F;else if(R.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(R.sh.coefficients[K],F);P++}else if(R.isDirectionalLight){const K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const se=R.shadow,j=t.get(R);j.shadowIntensity=se.intensity,j.shadowBias=se.bias,j.shadowNormalBias=se.normalBias,j.shadowRadius=se.radius,j.shadowMapSize=se.mapSize,i.directionalShadow[d]=j,i.directionalShadowMap[d]=ae,i.directionalShadowMatrix[d]=R.shadow.matrix,T++}i.directional[d]=K,d++}else if(R.isSpotLight){const K=e.get(R);K.position.setFromMatrixPosition(R.matrixWorld),K.color.copy(I).multiplyScalar(F),K.distance=J,K.coneCos=Math.cos(R.angle),K.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),K.decay=R.decay,i.spot[_]=K;const se=R.shadow;if(R.map&&(i.spotLightMap[D]=R.map,D++,se.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[_]=se.matrix,R.castShadow){const j=t.get(R);j.shadowIntensity=se.intensity,j.shadowBias=se.bias,j.shadowNormalBias=se.normalBias,j.shadowRadius=se.radius,j.shadowMapSize=se.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=ae,M++}_++}else if(R.isRectAreaLight){const K=e.get(R);K.color.copy(I).multiplyScalar(F),K.halfWidth.set(R.width*.5,0,0),K.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=K,m++}else if(R.isPointLight){const K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity),K.distance=R.distance,K.decay=R.decay,R.castShadow){const se=R.shadow,j=t.get(R);j.shadowIntensity=se.intensity,j.shadowBias=se.bias,j.shadowNormalBias=se.normalBias,j.shadowRadius=se.radius,j.shadowMapSize=se.mapSize,j.shadowCameraNear=se.camera.near,j.shadowCameraFar=se.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=ae,i.pointShadowMatrix[g]=R.shadow.matrix,b++}i.point[g]=K,g++}else if(R.isHemisphereLight){const K=e.get(R);K.skyColor.copy(R.color).multiplyScalar(F),K.groundColor.copy(R.groundColor).multiplyScalar(F),i.hemi[p]=K,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==T||C.numPointShadows!==b||C.numSpotShadows!==M||C.numSpotMaps!==D||C.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+D-L,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=T,C.numPointShadows=b,C.numSpotShadows=M,C.numSpotMaps=D,C.numLightProbes=P,i.version=pw++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const b=c[p];if(b.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(b.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Gd(n){const e=new gw(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function _w(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Gd(n),e.set(s,[a])):r>=o.length?(a=new Gd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class vw extends si{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=JS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xw extends si{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mw(n,e,t){let i=new yh;const s=new tt,r=new tt,o=new ot,a=new vw({depthPacking:QS}),l=new xw,c={},u=t.maxTextureSize,h={[Ni]:on,[on]:Ni,[Jn]:Jn},f=new as({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:yw,fragmentShader:Sw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Xn;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new At(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ag;let p=this.type;this.render=function(L,P,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const v=n.getRenderTarget(),x=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),I=n.state;I.setBlending(rs),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==yi&&this.type===yi,J=p===yi&&this.type!==yi;for(let ae=0,K=L.length;ae<K;ae++){const se=L[ae],j=se.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const ve=j.getFrameExtents();if(s.multiply(ve),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ve.x),s.x=r.x*ve.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ve.y),s.y=r.y*ve.y,j.mapSize.y=r.y)),j.map===null||F===!0||J===!0){const Pe=this.type!==yi?{minFilter:en,magFilter:en}:{};j.map!==null&&j.map.dispose(),j.map=new ks(s.x,s.y,Pe),j.map.texture.name=se.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const ye=j.getViewportCount();for(let Pe=0;Pe<ye;Pe++){const ge=j.getViewport(Pe);o.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),I.viewport(o),j.updateMatrices(se,Pe),i=j.getFrustum(),M(P,C,j.camera,se,this.type)}j.isPointLightShadow!==!0&&this.type===yi&&T(j,C),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,x,R)};function T(L,P){const C=e.update(_);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ks(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(P,null,C,f,_,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(P,null,C,d,_,null)}function b(L,P,C,v){let x=null;const R=C.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(R!==void 0)x=R;else if(x=C.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const I=x.uuid,F=P.uuid;let J=c[I];J===void 0&&(J={},c[I]=J);let ae=J[F];ae===void 0&&(ae=x.clone(),J[F]=ae,P.addEventListener("dispose",D)),x=ae}if(x.visible=P.visible,x.wireframe=P.wireframe,v===yi?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:h[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=n.properties.get(x);I.light=C}return x}function M(L,P,C,v,x){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&x===yi)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,L.matrixWorld);const F=e.update(L),J=L.material;if(Array.isArray(J)){const ae=F.groups;for(let K=0,se=ae.length;K<se;K++){const j=ae[K],ve=J[j.materialIndex];if(ve&&ve.visible){const ye=b(L,ve,v,x);L.onBeforeShadow(n,L,P,C,F,ye,j),n.renderBufferDirect(C,null,F,ye,L,j),L.onAfterShadow(n,L,P,C,F,ye,j)}}}else if(J.visible){const ae=b(L,J,v,x);L.onBeforeShadow(n,L,P,C,F,ae,null),n.renderBufferDirect(C,null,F,ae,L,null),L.onAfterShadow(n,L,P,C,F,ae,null)}}const I=L.children;for(let F=0,J=I.length;F<J;F++)M(I[F],P,C,v,x)}function D(L){L.target.removeEventListener("dispose",D);for(const C in c){const v=c[C],x=L.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}const bw={[Yc]:Zc,[Jc]:tu,[Qc]:nu,[Ar]:eu,[Zc]:Yc,[tu]:Jc,[nu]:Qc,[eu]:Ar};function Ew(n,e){function t(){let O=!1;const Te=new ot;let oe=null;const ce=new ot(0,0,0,0);return{setMask:function(Re){oe!==Re&&!O&&(n.colorMask(Re,Re,Re,Re),oe=Re)},setLocked:function(Re){O=Re},setClear:function(Re,Ae,je,Tt,Vt){Vt===!0&&(Re*=Tt,Ae*=Tt,je*=Tt),Te.set(Re,Ae,je,Tt),ce.equals(Te)===!1&&(n.clearColor(Re,Ae,je,Tt),ce.copy(Te))},reset:function(){O=!1,oe=null,ce.set(-1,0,0,0)}}}function i(){let O=!1,Te=!1,oe=null,ce=null,Re=null;return{setReversed:function(Ae){if(Te!==Ae){const je=e.get("EXT_clip_control");Te?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);const Tt=Re;Re=null,this.setClear(Tt)}Te=Ae},getReversed:function(){return Te},setTest:function(Ae){Ae?U(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(Ae){oe!==Ae&&!O&&(n.depthMask(Ae),oe=Ae)},setFunc:function(Ae){if(Te&&(Ae=bw[Ae]),ce!==Ae){switch(Ae){case Yc:n.depthFunc(n.NEVER);break;case Zc:n.depthFunc(n.ALWAYS);break;case Jc:n.depthFunc(n.LESS);break;case Ar:n.depthFunc(n.LEQUAL);break;case Qc:n.depthFunc(n.EQUAL);break;case eu:n.depthFunc(n.GEQUAL);break;case tu:n.depthFunc(n.GREATER);break;case nu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Ae}},setLocked:function(Ae){O=Ae},setClear:function(Ae){Re!==Ae&&(Te&&(Ae=1-Ae),n.clearDepth(Ae),Re=Ae)},reset:function(){O=!1,oe=null,ce=null,Re=null,Te=!1}}}function s(){let O=!1,Te=null,oe=null,ce=null,Re=null,Ae=null,je=null,Tt=null,Vt=null;return{setTest:function(ft){O||(ft?U(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(ft){Te!==ft&&!O&&(n.stencilMask(ft),Te=ft)},setFunc:function(ft,Cn,ui){(oe!==ft||ce!==Cn||Re!==ui)&&(n.stencilFunc(ft,Cn,ui),oe=ft,ce=Cn,Re=ui)},setOp:function(ft,Cn,ui){(Ae!==ft||je!==Cn||Tt!==ui)&&(n.stencilOp(ft,Cn,ui),Ae=ft,je=Cn,Tt=ui)},setLocked:function(ft){O=ft},setClear:function(ft){Vt!==ft&&(n.clearStencil(ft),Vt=ft)},reset:function(){O=!1,Te=null,oe=null,ce=null,Re=null,Ae=null,je=null,Tt=null,Vt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,b=null,M=null,D=null,L=null,P=new $e(0,0,0),C=0,v=!1,x=null,R=null,I=null,F=null,J=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,se=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=se>=1):j.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=se>=2);let ve=null,ye={};const Pe=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),xe=new ot().fromArray(Pe),z=new ot().fromArray(ge);function de(O,Te,oe,ce){const Re=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(O,Ae),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<oe;je++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(Te+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return Ae}const pe={};pe[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),pe[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pe[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(n.DEPTH_TEST),o.setFunc(Ar),te(!1),q(Gf),U(n.CULL_FACE),S(rs);function U(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function re(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function G(O,Te){return h[O]!==Te?(n.bindFramebuffer(O,Te),h[O]=Te,O===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Te),O===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function ue(O,Te){let oe=d,ce=!1;if(O){oe=f.get(Te),oe===void 0&&(oe=[],f.set(Te,oe));const Re=O.textures;if(oe.length!==Re.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let Ae=0,je=Re.length;Ae<je;Ae++)oe[Ae]=n.COLOR_ATTACHMENT0+Ae;oe.length=Re.length,ce=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,ce=!0);ce&&n.drawBuffers(oe)}function Ee(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const Ne={[ws]:n.FUNC_ADD,[bS]:n.FUNC_SUBTRACT,[ES]:n.FUNC_REVERSE_SUBTRACT};Ne[TS]=n.MIN,Ne[AS]=n.MAX;const w={[wS]:n.ZERO,[RS]:n.ONE,[CS]:n.SRC_COLOR,[qc]:n.SRC_ALPHA,[US]:n.SRC_ALPHA_SATURATE,[DS]:n.DST_COLOR,[LS]:n.DST_ALPHA,[PS]:n.ONE_MINUS_SRC_COLOR,[Kc]:n.ONE_MINUS_SRC_ALPHA,[NS]:n.ONE_MINUS_DST_COLOR,[IS]:n.ONE_MINUS_DST_ALPHA,[OS]:n.CONSTANT_COLOR,[FS]:n.ONE_MINUS_CONSTANT_COLOR,[BS]:n.CONSTANT_ALPHA,[kS]:n.ONE_MINUS_CONSTANT_ALPHA};function S(O,Te,oe,ce,Re,Ae,je,Tt,Vt,ft){if(O===rs){_===!0&&(re(n.BLEND),_=!1);return}if(_===!1&&(U(n.BLEND),_=!0),O!==MS){if(O!==m||ft!==v){if((p!==ws||M!==ws)&&(n.blendEquation(n.FUNC_ADD),p=ws,M=ws),ft)switch(O){case _r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wf:n.blendFunc(n.ONE,n.ONE);break;case Xf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $f:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case _r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $f:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}T=null,b=null,D=null,L=null,P.set(0,0,0),C=0,m=O,v=ft}return}Re=Re||Te,Ae=Ae||oe,je=je||ce,(Te!==p||Re!==M)&&(n.blendEquationSeparate(Ne[Te],Ne[Re]),p=Te,M=Re),(oe!==T||ce!==b||Ae!==D||je!==L)&&(n.blendFuncSeparate(w[oe],w[ce],w[Ae],w[je]),T=oe,b=ce,D=Ae,L=je),(Tt.equals(P)===!1||Vt!==C)&&(n.blendColor(Tt.r,Tt.g,Tt.b,Vt),P.copy(Tt),C=Vt),m=O,v=!1}function W(O,Te){O.side===Jn?re(n.CULL_FACE):U(n.CULL_FACE);let oe=O.side===on;Te&&(oe=!oe),te(oe),O.blending===_r&&O.transparent===!1?S(rs):S(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const ce=O.stencilWrite;a.setTest(ce),ce&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),he(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(O){x!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),x=O)}function q(O){O!==xS?(U(n.CULL_FACE),O!==R&&(O===Gf?n.cullFace(n.BACK):O===yS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),R=O}function Y(O){O!==I&&(K&&n.lineWidth(O),I=O)}function he(O,Te,oe){O?(U(n.POLYGON_OFFSET_FILL),(F!==Te||J!==oe)&&(n.polygonOffset(Te,oe),F=Te,J=oe)):re(n.POLYGON_OFFSET_FILL)}function ie(O){O?U(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function E(O){O===void 0&&(O=n.TEXTURE0+ae-1),ve!==O&&(n.activeTexture(O),ve=O)}function y(O,Te,oe){oe===void 0&&(ve===null?oe=n.TEXTURE0+ae-1:oe=ve);let ce=ye[oe];ce===void 0&&(ce={type:void 0,texture:void 0},ye[oe]=ce),(ce.type!==O||ce.texture!==Te)&&(ve!==oe&&(n.activeTexture(oe),ve=oe),n.bindTexture(O,Te||pe[O]),ce.type=O,ce.texture=Te)}function N(){const O=ye[ve];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function B(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(O){xe.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),xe.copy(O))}function Le(O){z.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),z.copy(O))}function ze(O,Te){let oe=c.get(Te);oe===void 0&&(oe=new WeakMap,c.set(Te,oe));let ce=oe.get(O);ce===void 0&&(ce=n.getUniformBlockIndex(Te,O.name),oe.set(O,ce))}function Ve(O,Te){const ce=c.get(Te).get(O);l.get(Te)!==ce&&(n.uniformBlockBinding(Te,ce,O.__bindingPointIndex),l.set(Te,ce))}function ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ve=null,ye={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,b=null,M=null,D=null,L=null,P=new $e(0,0,0),C=0,v=!1,x=null,R=null,I=null,F=null,J=null,xe.set(0,0,n.canvas.width,n.canvas.height),z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:U,disable:re,bindFramebuffer:G,drawBuffers:ue,useProgram:Ee,setBlending:S,setMaterial:W,setFlipSided:te,setCullFace:q,setLineWidth:Y,setPolygonOffset:he,setScissorTest:ie,activeTexture:E,bindTexture:y,unbindTexture:N,compressedTexImage2D:B,compressedTexImage3D:$,texImage2D:Se,texImage3D:Ie,updateUBOMapping:ze,uniformBlockBinding:Ve,texStorage2D:Ge,texStorage3D:fe,texSubImage2D:X,texSubImage3D:le,compressedTexSubImage2D:Z,compressedTexSubImage3D:me,scissor:He,viewport:Le,reset:ht}}function Wd(n,e,t,i){const s=Tw(i);switch(t){case pg:return n*e;case gg:return n*e;case _g:return n*e*2;case mh:return n*e/s.components*s.byteLength;case gh:return n*e/s.components*s.byteLength;case vg:return n*e*2/s.components*s.byteLength;case _h:return n*e*2/s.components*s.byteLength;case mg:return n*e*3/s.components*s.byteLength;case En:return n*e*4/s.components*s.byteLength;case vh:return n*e*4/s.components*s.byteLength;case Da:case Na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ua:case Oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ou:case lu:return Math.max(n,16)*Math.max(e,8)/4;case ru:case au:return Math.max(n,8)*Math.max(e,8)/2;case cu:case uu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case du:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case pu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case mu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case gu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _u:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case vu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case xu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Su:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Eu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Tu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fa:case Au:case wu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xg:case Ru:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Cu:case Pu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tw(n){switch(n){case Ui:case hg:return{byteLength:1,components:1};case No:case fg:case Go:return{byteLength:2,components:1};case dh:case ph:return{byteLength:2,components:4};case Bs:case fh:case Fn:return{byteLength:4,components:1};case dg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Aw(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return d?new OffscreenCanvas(E,y):Fo("canvas")}function _(E,y,N){let B=1;const $=ie(E);if(($.width>N||$.height>N)&&(B=N/Math.max($.width,$.height)),B<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const X=Math.floor(B*$.width),le=Math.floor(B*$.height);h===void 0&&(h=g(X,le));const Z=y?g(X,le):h;return Z.width=X,Z.height=le,Z.getContext("2d").drawImage(E,0,0,X,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+le+")."),Z}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(E,y,N,B,$=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=y;if(y===n.RED&&(N===n.FLOAT&&(X=n.R32F),N===n.HALF_FLOAT&&(X=n.R16F),N===n.UNSIGNED_BYTE&&(X=n.R8)),y===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.R8UI),N===n.UNSIGNED_SHORT&&(X=n.R16UI),N===n.UNSIGNED_INT&&(X=n.R32UI),N===n.BYTE&&(X=n.R8I),N===n.SHORT&&(X=n.R16I),N===n.INT&&(X=n.R32I)),y===n.RG&&(N===n.FLOAT&&(X=n.RG32F),N===n.HALF_FLOAT&&(X=n.RG16F),N===n.UNSIGNED_BYTE&&(X=n.RG8)),y===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RG8UI),N===n.UNSIGNED_SHORT&&(X=n.RG16UI),N===n.UNSIGNED_INT&&(X=n.RG32UI),N===n.BYTE&&(X=n.RG8I),N===n.SHORT&&(X=n.RG16I),N===n.INT&&(X=n.RG32I)),y===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGB8UI),N===n.UNSIGNED_SHORT&&(X=n.RGB16UI),N===n.UNSIGNED_INT&&(X=n.RGB32UI),N===n.BYTE&&(X=n.RGB8I),N===n.SHORT&&(X=n.RGB16I),N===n.INT&&(X=n.RGB32I)),y===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),N===n.UNSIGNED_INT&&(X=n.RGBA32UI),N===n.BYTE&&(X=n.RGBA8I),N===n.SHORT&&(X=n.RGBA16I),N===n.INT&&(X=n.RGBA32I)),y===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),y===n.RGBA){const le=$?yl:et.getTransfer(B);N===n.FLOAT&&(X=n.RGBA32F),N===n.HALF_FLOAT&&(X=n.RGBA16F),N===n.UNSIGNED_BYTE&&(X=le===mt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(E,y){let N;return E?y===null||y===Bs||y===Pr?N=n.DEPTH24_STENCIL8:y===Fn?N=n.DEPTH32F_STENCIL8:y===No&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Bs||y===Pr?N=n.DEPTH_COMPONENT24:y===Fn?N=n.DEPTH_COMPONENT32F:y===No&&(N=n.DEPTH_COMPONENT16),N}function D(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==en&&E.minFilter!==mn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function L(E){const y=E.target;y.removeEventListener("dispose",L),C(y),y.isVideoTexture&&u.delete(y)}function P(E){const y=E.target;y.removeEventListener("dispose",P),x(y)}function C(E){const y=i.get(E);if(y.__webglInit===void 0)return;const N=E.source,B=f.get(N);if(B){const $=B[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&v(E),Object.keys(B).length===0&&f.delete(N)}i.remove(E)}function v(E){const y=i.get(E);n.deleteTexture(y.__webglTexture);const N=E.source,B=f.get(N);delete B[y.__cacheKey],o.memory.textures--}function x(E){const y=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(y.__webglFramebuffer[B]))for(let $=0;$<y.__webglFramebuffer[B].length;$++)n.deleteFramebuffer(y.__webglFramebuffer[B][$]);else n.deleteFramebuffer(y.__webglFramebuffer[B]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[B])}else{if(Array.isArray(y.__webglFramebuffer))for(let B=0;B<y.__webglFramebuffer.length;B++)n.deleteFramebuffer(y.__webglFramebuffer[B]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let B=0;B<y.__webglColorRenderbuffer.length;B++)y.__webglColorRenderbuffer[B]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[B]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const N=E.textures;for(let B=0,$=N.length;B<$;B++){const X=i.get(N[B]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(N[B])}i.remove(E)}let R=0;function I(){R=0}function F(){const E=R;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),R+=1,E}function J(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function ae(E,y){const N=i.get(E);if(E.isVideoTexture&&Y(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const B=E.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(N,E,y);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+y)}function K(E,y){const N=i.get(E);if(E.version>0&&N.__version!==E.version){z(N,E,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+y)}function se(E,y){const N=i.get(E);if(E.version>0&&N.__version!==E.version){z(N,E,y);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+y)}function j(E,y){const N=i.get(E);if(E.version>0&&N.__version!==E.version){de(N,E,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+y)}const ve={[Cr]:n.REPEAT,[is]:n.CLAMP_TO_EDGE,[Za]:n.MIRRORED_REPEAT},ye={[en]:n.NEAREST,[ug]:n.NEAREST_MIPMAP_NEAREST,[ao]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[Ia]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},Pe={[tM]:n.NEVER,[aM]:n.ALWAYS,[nM]:n.LESS,[Mg]:n.LEQUAL,[iM]:n.EQUAL,[oM]:n.GEQUAL,[sM]:n.GREATER,[rM]:n.NOTEQUAL};function ge(E,y){if(y.type===Fn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===mn||y.magFilter===Ia||y.magFilter===ao||y.magFilter===Ai||y.minFilter===mn||y.minFilter===Ia||y.minFilter===ao||y.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ve[y.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ve[y.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ve[y.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ye[y.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ye[y.minFilter]),y.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Pe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===en||y.minFilter!==ao&&y.minFilter!==Ai||y.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function xe(E,y){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",L));const B=y.source;let $=f.get(B);$===void 0&&($={},f.set(B,$));const X=J(y);if(X!==E.__cacheKey){$[X]===void 0&&($[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),$[X].usedTimes++;const le=$[E.__cacheKey];le!==void 0&&($[E.__cacheKey].usedTimes--,le.usedTimes===0&&v(y)),E.__cacheKey=X,E.__webglTexture=$[X].texture}return N}function z(E,y,N){let B=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(B=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(B=n.TEXTURE_3D);const $=xe(E,y),X=y.source;t.bindTexture(B,E.__webglTexture,n.TEXTURE0+N);const le=i.get(X);if(X.version!==le.__version||$===!0){t.activeTexture(n.TEXTURE0+N);const Z=et.getPrimaries(et.workingColorSpace),me=y.colorSpace===ns?null:et.getPrimaries(y.colorSpace),Ge=y.colorSpace===ns||Z===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let fe=_(y.image,!1,s.maxTextureSize);fe=he(y,fe);const Se=r.convert(y.format,y.colorSpace),Ie=r.convert(y.type);let He=b(y.internalFormat,Se,Ie,y.colorSpace,y.isVideoTexture);ge(B,y);let Le;const ze=y.mipmaps,Ve=y.isVideoTexture!==!0,ht=le.__version===void 0||$===!0,O=X.dataReady,Te=D(y,fe);if(y.isDepthTexture)He=M(y.format===Lr,y.type),ht&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,He,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,He,fe.width,fe.height,0,Se,Ie,null));else if(y.isDataTexture)if(ze.length>0){Ve&&ht&&t.texStorage2D(n.TEXTURE_2D,Te,He,ze[0].width,ze[0].height);for(let oe=0,ce=ze.length;oe<ce;oe++)Le=ze[oe],Ve?O&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Le.width,Le.height,Se,Ie,Le.data):t.texImage2D(n.TEXTURE_2D,oe,He,Le.width,Le.height,0,Se,Ie,Le.data);y.generateMipmaps=!1}else Ve?(ht&&t.texStorage2D(n.TEXTURE_2D,Te,He,fe.width,fe.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,Se,Ie,fe.data)):t.texImage2D(n.TEXTURE_2D,0,He,fe.width,fe.height,0,Se,Ie,fe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ve&&ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,He,ze[0].width,ze[0].height,fe.depth);for(let oe=0,ce=ze.length;oe<ce;oe++)if(Le=ze[oe],y.format!==En)if(Se!==null)if(Ve){if(O)if(y.layerUpdates.size>0){const Re=Wd(Le.width,Le.height,y.format,y.type);for(const Ae of y.layerUpdates){const je=Le.data.subarray(Ae*Re/Le.data.BYTES_PER_ELEMENT,(Ae+1)*Re/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,Ae,Le.width,Le.height,1,Se,je)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Le.width,Le.height,fe.depth,Se,Le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,He,Le.width,Le.height,fe.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Le.width,Le.height,fe.depth,Se,Ie,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,He,Le.width,Le.height,fe.depth,0,Se,Ie,Le.data)}else{Ve&&ht&&t.texStorage2D(n.TEXTURE_2D,Te,He,ze[0].width,ze[0].height);for(let oe=0,ce=ze.length;oe<ce;oe++)Le=ze[oe],y.format!==En?Se!==null?Ve?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,Le.width,Le.height,Se,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,He,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?O&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Le.width,Le.height,Se,Ie,Le.data):t.texImage2D(n.TEXTURE_2D,oe,He,Le.width,Le.height,0,Se,Ie,Le.data)}else if(y.isDataArrayTexture)if(Ve){if(ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,He,fe.width,fe.height,fe.depth),O)if(y.layerUpdates.size>0){const oe=Wd(fe.width,fe.height,y.format,y.type);for(const ce of y.layerUpdates){const Re=fe.data.subarray(ce*oe/fe.data.BYTES_PER_ELEMENT,(ce+1)*oe/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,fe.width,fe.height,1,Se,Ie,Re)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Se,Ie,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,fe.width,fe.height,fe.depth,0,Se,Ie,fe.data);else if(y.isData3DTexture)Ve?(ht&&t.texStorage3D(n.TEXTURE_3D,Te,He,fe.width,fe.height,fe.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Se,Ie,fe.data)):t.texImage3D(n.TEXTURE_3D,0,He,fe.width,fe.height,fe.depth,0,Se,Ie,fe.data);else if(y.isFramebufferTexture){if(ht)if(Ve)t.texStorage2D(n.TEXTURE_2D,Te,He,fe.width,fe.height);else{let oe=fe.width,ce=fe.height;for(let Re=0;Re<Te;Re++)t.texImage2D(n.TEXTURE_2D,Re,He,oe,ce,0,Se,Ie,null),oe>>=1,ce>>=1}}else if(ze.length>0){if(Ve&&ht){const oe=ie(ze[0]);t.texStorage2D(n.TEXTURE_2D,Te,He,oe.width,oe.height)}for(let oe=0,ce=ze.length;oe<ce;oe++)Le=ze[oe],Ve?O&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Se,Ie,Le):t.texImage2D(n.TEXTURE_2D,oe,He,Se,Ie,Le);y.generateMipmaps=!1}else if(Ve){if(ht){const oe=ie(fe);t.texStorage2D(n.TEXTURE_2D,Te,He,oe.width,oe.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Ie,fe)}else t.texImage2D(n.TEXTURE_2D,0,He,Se,Ie,fe);m(y)&&p(B),le.__version=X.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function de(E,y,N){if(y.image.length!==6)return;const B=xe(E,y),$=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+N);const X=i.get($);if($.version!==X.__version||B===!0){t.activeTexture(n.TEXTURE0+N);const le=et.getPrimaries(et.workingColorSpace),Z=y.colorSpace===ns?null:et.getPrimaries(y.colorSpace),me=y.colorSpace===ns||le===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ge=y.isCompressedTexture||y.image[0].isCompressedTexture,fe=y.image[0]&&y.image[0].isDataTexture,Se=[];for(let ce=0;ce<6;ce++)!Ge&&!fe?Se[ce]=_(y.image[ce],!0,s.maxCubemapSize):Se[ce]=fe?y.image[ce].image:y.image[ce],Se[ce]=he(y,Se[ce]);const Ie=Se[0],He=r.convert(y.format,y.colorSpace),Le=r.convert(y.type),ze=b(y.internalFormat,He,Le,y.colorSpace),Ve=y.isVideoTexture!==!0,ht=X.__version===void 0||B===!0,O=$.dataReady;let Te=D(y,Ie);ge(n.TEXTURE_CUBE_MAP,y);let oe;if(Ge){Ve&&ht&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,ze,Ie.width,Ie.height);for(let ce=0;ce<6;ce++){oe=Se[ce].mipmaps;for(let Re=0;Re<oe.length;Re++){const Ae=oe[Re];y.format!==En?He!==null?Ve?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,0,0,Ae.width,Ae.height,He,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,ze,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,0,0,Ae.width,Ae.height,He,Le,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,ze,Ae.width,Ae.height,0,He,Le,Ae.data)}}}else{if(oe=y.mipmaps,Ve&&ht){oe.length>0&&Te++;const ce=ie(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,ze,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(fe){Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Se[ce].width,Se[ce].height,He,Le,Se[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ze,Se[ce].width,Se[ce].height,0,He,Le,Se[ce].data);for(let Re=0;Re<oe.length;Re++){const je=oe[Re].image[ce].image;Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,0,0,je.width,je.height,He,Le,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,ze,je.width,je.height,0,He,Le,je.data)}}else{Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,He,Le,Se[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ze,He,Le,Se[ce]);for(let Re=0;Re<oe.length;Re++){const Ae=oe[Re];Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,0,0,He,Le,Ae.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,ze,He,Le,Ae.image[ce])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),X.__version=$.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function pe(E,y,N,B,$,X){const le=r.convert(N.format,N.colorSpace),Z=r.convert(N.type),me=b(N.internalFormat,le,Z,N.colorSpace),Ge=i.get(y),fe=i.get(N);if(fe.__renderTarget=y,!Ge.__hasExternalTextures){const Se=Math.max(1,y.width>>X),Ie=Math.max(1,y.height>>X);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,X,me,Se,Ie,y.depth,0,le,Z,null):t.texImage2D($,X,me,Se,Ie,0,le,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),q(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,$,fe.__webglTexture,0,te(y)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,B,$,fe.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(E,y,N){if(n.bindRenderbuffer(n.RENDERBUFFER,E),y.depthBuffer){const B=y.depthTexture,$=B&&B.isDepthTexture?B.type:null,X=M(y.stencilBuffer,$),le=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=te(y);q(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,X,y.width,y.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,X,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,X,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,E)}else{const B=y.textures;for(let $=0;$<B.length;$++){const X=B[$],le=r.convert(X.format,X.colorSpace),Z=r.convert(X.type),me=b(X.internalFormat,le,Z,X.colorSpace),Ge=te(y);N&&q(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,me,y.width,y.height):q(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,me,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,me,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=i.get(y.depthTexture);B.__renderTarget=y,(!B.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ae(y.depthTexture,0);const $=B.__webglTexture,X=te(y);if(y.depthTexture.format===vr)q(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(y.depthTexture.format===Lr)q(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function G(E){const y=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const B=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),B){const $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,B.removeEventListener("dispose",$)};B.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=B}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");re(y.__webglFramebuffer,E)}else if(N){y.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[B]),y.__webglDepthbuffer[B]===void 0)y.__webglDepthbuffer[B]=n.createRenderbuffer(),U(y.__webglDepthbuffer[B],E,!1);else{const $=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[B];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,X)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),U(y.__webglDepthbuffer,E,!1);else{const B=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,$)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(E,y,N){const B=i.get(E);y!==void 0&&pe(B.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&G(E)}function Ee(E){const y=E.texture,N=i.get(E),B=i.get(y);E.addEventListener("dispose",P);const $=E.textures,X=E.isWebGLCubeRenderTarget===!0,le=$.length>1;if(le||(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=y.version,o.memory.textures++),X){N.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[Z]=[];for(let me=0;me<y.mipmaps.length;me++)N.__webglFramebuffer[Z][me]=n.createFramebuffer()}else N.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)N.__webglFramebuffer[Z]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(le)for(let Z=0,me=$.length;Z<me;Z++){const Ge=i.get($[Z]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&q(E)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Z=0;Z<$.length;Z++){const me=$[Z];N.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[Z]);const Ge=r.convert(me.format,me.colorSpace),fe=r.convert(me.type),Se=b(me.internalFormat,Ge,fe,me.colorSpace,E.isXRRenderTarget===!0),Ie=te(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Se,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,N.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),U(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),ge(n.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)pe(N.__webglFramebuffer[Z][me],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me);else pe(N.__webglFramebuffer[Z],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let Z=0,me=$.length;Z<me;Z++){const Ge=$[Z],fe=i.get(Ge);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),ge(n.TEXTURE_2D,Ge),pe(N.__webglFramebuffer,E,Ge,n.COLOR_ATTACHMENT0+Z,n.TEXTURE_2D,0),m(Ge)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Z=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,B.__webglTexture),ge(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)pe(N.__webglFramebuffer[me],E,y,n.COLOR_ATTACHMENT0,Z,me);else pe(N.__webglFramebuffer,E,y,n.COLOR_ATTACHMENT0,Z,0);m(y)&&p(Z),t.unbindTexture()}E.depthBuffer&&G(E)}function Ne(E){const y=E.textures;for(let N=0,B=y.length;N<B;N++){const $=y[N];if(m($)){const X=T(E),le=i.get($).__webglTexture;t.bindTexture(X,le),p(X),t.unbindTexture()}}}const w=[],S=[];function W(E){if(E.samples>0){if(q(E)===!1){const y=E.textures,N=E.width,B=E.height;let $=n.COLOR_BUFFER_BIT;const X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(E),Z=y.length>1;if(Z)for(let me=0;me<y.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let me=0;me<y.length;me++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[me]);const Ge=i.get(y[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,N,B,0,0,N,B,$,n.NEAREST),l===!0&&(w.length=0,S.length=0,w.push(n.COLOR_ATTACHMENT0+me),E.depthBuffer&&E.resolveDepthBuffer===!1&&(w.push(X),S.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,S)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let me=0;me<y.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,le.__webglColorRenderbuffer[me]);const Ge=i.get(y[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function te(E){return Math.min(s.maxSamples,E.samples)}function q(E){const y=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Y(E){const y=o.render.frame;u.get(E)!==y&&(u.set(E,y),E.update())}function he(E,y){const N=E.colorSpace,B=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==nn&&N!==ns&&(et.getTransfer(N)===mt?(B!==En||$!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),y}function ie(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=ae,this.setTexture2DArray=K,this.setTexture3D=se,this.setTextureCube=j,this.rebindTextures=ue,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=q}function ww(n,e){function t(i,s=ns){let r;const o=et.getTransfer(s);if(i===Ui)return n.UNSIGNED_BYTE;if(i===dh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ph)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hg)return n.BYTE;if(i===fg)return n.SHORT;if(i===No)return n.UNSIGNED_SHORT;if(i===fh)return n.INT;if(i===Bs)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===Go)return n.HALF_FLOAT;if(i===pg)return n.ALPHA;if(i===mg)return n.RGB;if(i===En)return n.RGBA;if(i===gg)return n.LUMINANCE;if(i===_g)return n.LUMINANCE_ALPHA;if(i===vr)return n.DEPTH_COMPONENT;if(i===Lr)return n.DEPTH_STENCIL;if(i===mh)return n.RED;if(i===gh)return n.RED_INTEGER;if(i===vg)return n.RG;if(i===_h)return n.RG_INTEGER;if(i===vh)return n.RGBA_INTEGER;if(i===Da||i===Na||i===Ua||i===Oa)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ru||i===ou||i===au||i===lu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ru)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ou)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===au)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cu||i===uu||i===hu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cu||i===uu)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===hu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fu||i===du||i===pu||i===mu||i===gu||i===_u||i===vu||i===xu||i===yu||i===Su||i===Mu||i===bu||i===Eu||i===Tu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===du)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_u)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Su)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Eu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fa||i===Au||i===wu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Fa)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Au)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xg||i===Ru||i===Cu||i===Pu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ru)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Rw extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ps extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cw={type:"move"};class vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ps;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Pw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Iw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new kt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new as({vertexShader:Pw,fragmentShader:Lw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new Ml(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dw extends Vs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new Iw,m=t.getContextAttributes();let p=null,T=null;const b=[],M=[],D=new tt;let L=null;const P=new Qt;P.viewport=new ot;const C=new Qt;C.viewport=new ot;const v=[P,C],x=new Rw;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let de=b[z];return de===void 0&&(de=new vc,b[z]=de),de.getTargetRaySpace()},this.getControllerGrip=function(z){let de=b[z];return de===void 0&&(de=new vc,b[z]=de),de.getGripSpace()},this.getHand=function(z){let de=b[z];return de===void 0&&(de=new vc,b[z]=de),de.getHandSpace()};function F(z){const de=M.indexOf(z.inputSource);if(de===-1)return;const pe=b[de];pe!==void 0&&(pe.update(z.inputSource,z.frame,c||o),pe.dispatchEvent({type:z.type,data:z.inputSource}))}function J(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ae);for(let z=0;z<b.length;z++){const de=M[z];de!==null&&(M[z]=null,b[z].disconnect(de))}R=null,I=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,T=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ae),m.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new ks(d.framebufferWidth,d.framebufferHeight,{format:En,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,pe=null,U=null;m.depth&&(U=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?Lr:vr,pe=m.stencil?Pr:Bs);const re={colorFormat:t.RGBA8,depthFormat:U,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(re),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new ks(f.textureWidth,f.textureHeight,{format:En,type:Ui,depthTexture:new Ng(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),xe.setContext(s),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(z){for(let de=0;de<z.removed.length;de++){const pe=z.removed[de],U=M.indexOf(pe);U>=0&&(M[U]=null,b[U].disconnect(pe))}for(let de=0;de<z.added.length;de++){const pe=z.added[de];let U=M.indexOf(pe);if(U===-1){for(let G=0;G<b.length;G++)if(G>=M.length){M.push(pe),U=G;break}else if(M[G]===null){M[G]=pe,U=G;break}if(U===-1)break}const re=b[U];re&&re.connect(pe)}}const K=new k,se=new k;function j(z,de,pe){K.setFromMatrixPosition(de.matrixWorld),se.setFromMatrixPosition(pe.matrixWorld);const U=K.distanceTo(se),re=de.projectionMatrix.elements,G=pe.projectionMatrix.elements,ue=re[14]/(re[10]-1),Ee=re[14]/(re[10]+1),Ne=(re[9]+1)/re[5],w=(re[9]-1)/re[5],S=(re[8]-1)/re[0],W=(G[8]+1)/G[0],te=ue*S,q=ue*W,Y=U/(-S+W),he=Y*-S;if(de.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(he),z.translateZ(Y),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),re[10]===-1)z.projectionMatrix.copy(de.projectionMatrix),z.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const ie=ue+Y,E=Ee+Y,y=te-he,N=q+(U-he),B=Ne*Ee/E*ie,$=w*Ee/E*ie;z.projectionMatrix.makePerspective(y,N,B,$,ie,E),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function ve(z,de){de===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(de.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let de=z.near,pe=z.far;_.texture!==null&&(_.depthNear>0&&(de=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),x.near=C.near=P.near=de,x.far=C.far=P.far=pe,(R!==x.near||I!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,I=x.far),P.layers.mask=z.layers.mask|2,C.layers.mask=z.layers.mask|4,x.layers.mask=P.layers.mask|C.layers.mask;const U=z.parent,re=x.cameras;ve(x,U);for(let G=0;G<re.length;G++)ve(re[G],U);re.length===2?j(x,P,C):x.projectionMatrix.copy(P.projectionMatrix),ye(z,x,U)};function ye(z,de,pe){pe===null?z.matrix.copy(de.matrixWorld):(z.matrix.copy(pe.matrixWorld),z.matrix.invert(),z.matrix.multiply(de.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(de.projectionMatrix),z.projectionMatrixInverse.copy(de.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ir*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Pe=null;function ge(z,de){if(u=de.getViewerPose(c||o),g=de,u!==null){const pe=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let U=!1;pe.length!==x.cameras.length&&(x.cameras.length=0,U=!0);for(let G=0;G<pe.length;G++){const ue=pe[G];let Ee=null;if(d!==null)Ee=d.getViewport(ue);else{const w=h.getViewSubImage(f,ue);Ee=w.viewport,G===0&&(e.setRenderTargetTextures(T,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(T))}let Ne=v[G];Ne===void 0&&(Ne=new Qt,Ne.layers.enable(G),Ne.viewport=new ot,v[G]=Ne),Ne.matrix.fromArray(ue.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(ue.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),G===0&&(x.matrix.copy(Ne.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),U===!0&&x.cameras.push(Ne)}const re=s.enabledFeatures;if(re&&re.includes("depth-sensing")){const G=h.getDepthInformation(pe[0]);G&&G.isValid&&G.texture&&_.init(e,G,s.renderState)}}for(let pe=0;pe<b.length;pe++){const U=M[pe],re=b[pe];U!==null&&re!==void 0&&re.update(U,de,c||o)}Pe&&Pe(z,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const xe=new Dg;xe.setAnimationLoop(ge),this.setAnimationLoop=function(z){Pe=z},this.dispose=function(){}}}const Ms=new Wn,Nw=new Ye;function Uw(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Pg(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),b=T.envMap,M=T.envMapRotation;b&&(m.envMap.value=b,Ms.copy(M),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),m.envMapRotation.value.setFromMatrix4(Nw.makeRotationFromEuler(Ms)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ow(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const M=b.program;i.uniformBlockBinding(T,M)}function c(T,b){let M=s[T.id];M===void 0&&(g(T),M=u(T),s[T.id]=M,T.addEventListener("dispose",m));const D=b.program;i.updateUBOMapping(T,D);const L=e.render.frame;r[T.id]!==L&&(f(T),r[T.id]=L)}function u(T){const b=h();T.__bindingPointIndex=b;const M=n.createBuffer(),D=T.__size,L=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,D,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const b=s[T.id],M=T.uniforms,D=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let L=0,P=M.length;L<P;L++){const C=Array.isArray(M[L])?M[L]:[M[L]];for(let v=0,x=C.length;v<x;v++){const R=C[v];if(d(R,L,v,D)===!0){const I=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let J=0;for(let ae=0;ae<F.length;ae++){const K=F[ae],se=_(K);typeof K=="number"||typeof K=="boolean"?(R.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,I+J,R.__data)):K.isMatrix3?(R.__data[0]=K.elements[0],R.__data[1]=K.elements[1],R.__data[2]=K.elements[2],R.__data[3]=0,R.__data[4]=K.elements[3],R.__data[5]=K.elements[4],R.__data[6]=K.elements[5],R.__data[7]=0,R.__data[8]=K.elements[6],R.__data[9]=K.elements[7],R.__data[10]=K.elements[8],R.__data[11]=0):(K.toArray(R.__data,J),J+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,b,M,D){const L=T.value,P=b+"_"+M;if(D[P]===void 0)return typeof L=="number"||typeof L=="boolean"?D[P]=L:D[P]=L.clone(),!0;{const C=D[P];if(typeof L=="number"||typeof L=="boolean"){if(C!==L)return D[P]=L,!0}else if(C.equals(L)===!1)return C.copy(L),!0}return!1}function g(T){const b=T.uniforms;let M=0;const D=16;for(let P=0,C=b.length;P<C;P++){const v=Array.isArray(b[P])?b[P]:[b[P]];for(let x=0,R=v.length;x<R;x++){const I=v[x],F=Array.isArray(I.value)?I.value:[I.value];for(let J=0,ae=F.length;J<ae;J++){const K=F[J],se=_(K),j=M%D,ve=j%se.boundary,ye=j+ve;M+=ve,ye!==0&&D-ye<se.storage&&(M+=D-ye),I.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=se.storage}}}const L=M%D;return L>0&&(M+=D-L),T.__size=M,T.__cache={},this}function _(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){const b=T.target;b.removeEventListener("dispose",m);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Fw{constructor(e={}){const{canvas:t=TM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this.toneMapping=os,this.toneMappingExposure=1;const M=this;let D=!1,L=0,P=0,C=null,v=-1,x=null;const R=new ot,I=new ot;let F=null;const J=new $e(0);let ae=0,K=t.width,se=t.height,j=1,ve=null,ye=null;const Pe=new ot(0,0,K,se),ge=new ot(0,0,K,se);let xe=!1;const z=new yh;let de=!1,pe=!1;const U=new Ye,re=new Ye,G=new k,ue=new ot,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function w(){return C===null?j:1}let S=i;function W(A,H){return t.getContext(A,H)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hh}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),S===null){const H="webgl2";if(S=W(H,A),S===null)throw W(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let te,q,Y,he,ie,E,y,N,B,$,X,le,Z,me,Ge,fe,Se,Ie,He,Le,ze,Ve,ht,O;function Te(){te=new zT(S),te.init(),Ve=new ww(S,te),q=new OT(S,te,e,Ve),Y=new Ew(S,te),q.reverseDepthBuffer&&f&&Y.buffers.depth.setReversed(!0),he=new XT(S),ie=new cw,E=new Aw(S,te,Y,ie,q,Ve,he),y=new BT(M),N=new VT(M),B=new JM(S),ht=new NT(S,B),$=new GT(S,B,he,ht),X=new jT(S,$,B,he),He=new $T(S,q,E),fe=new FT(ie),le=new lw(M,y,N,te,q,ht,fe),Z=new Uw(M,ie),me=new hw,Ge=new _w(te),Ie=new DT(M,y,N,Y,X,d,l),Se=new Mw(M,X,q),O=new Ow(S,he,q,Y),Le=new UT(S,te,he),ze=new WT(S,te,he),he.programs=le.programs,M.capabilities=q,M.extensions=te,M.properties=ie,M.renderLists=me,M.shadowMap=Se,M.state=Y,M.info=he}Te();const oe=new Dw(M,S);this.xr=oe,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const A=te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(K,se,!1))},this.getSize=function(A){return A.set(K,se)},this.setSize=function(A,H,Q=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,se=H,t.width=Math.floor(A*j),t.height=Math.floor(H*j),Q===!0&&(t.style.width=A+"px",t.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(K*j,se*j).floor()},this.setDrawingBufferSize=function(A,H,Q){K=A,se=H,j=Q,t.width=Math.floor(A*Q),t.height=Math.floor(H*Q),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(Pe)},this.setViewport=function(A,H,Q,ee){A.isVector4?Pe.set(A.x,A.y,A.z,A.w):Pe.set(A,H,Q,ee),Y.viewport(R.copy(Pe).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(ge)},this.setScissor=function(A,H,Q,ee){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,H,Q,ee),Y.scissor(I.copy(ge).multiplyScalar(j).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(A){Y.setScissorTest(xe=A)},this.setOpaqueSort=function(A){ve=A},this.setTransparentSort=function(A){ye=A},this.getClearColor=function(A){return A.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(A=!0,H=!0,Q=!0){let ee=0;if(A){let V=!1;if(C!==null){const _e=C.texture.format;V=_e===vh||_e===_h||_e===gh}if(V){const _e=C.texture.type,we=_e===Ui||_e===Bs||_e===No||_e===Pr||_e===dh||_e===ph,Ue=Ie.getClearColor(),Oe=Ie.getClearAlpha(),We=Ue.r,qe=Ue.g,Fe=Ue.b;we?(g[0]=We,g[1]=qe,g[2]=Fe,g[3]=Oe,S.clearBufferuiv(S.COLOR,0,g)):(_[0]=We,_[1]=qe,_[2]=Fe,_[3]=Oe,S.clearBufferiv(S.COLOR,0,_))}else ee|=S.COLOR_BUFFER_BIT}H&&(ee|=S.DEPTH_BUFFER_BIT),Q&&(ee|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),me.dispose(),Ge.dispose(),ie.dispose(),y.dispose(),N.dispose(),X.dispose(),ht.dispose(),O.dispose(),le.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Lh),oe.removeEventListener("sessionend",Ih),ds.stop()};function ce(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const A=he.autoReset,H=Se.enabled,Q=Se.autoUpdate,ee=Se.needsUpdate,V=Se.type;Te(),he.autoReset=A,Se.enabled=H,Se.autoUpdate=Q,Se.needsUpdate=ee,Se.type=V}function Ae(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function je(A){const H=A.target;H.removeEventListener("dispose",je),Tt(H)}function Tt(A){Vt(A),ie.remove(A)}function Vt(A){const H=ie.get(A).programs;H!==void 0&&(H.forEach(function(Q){le.releaseProgram(Q)}),A.isShaderMaterial&&le.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,Q,ee,V,_e){H===null&&(H=Ee);const we=V.isMesh&&V.matrixWorld.determinant()<0,Ue=f_(A,H,Q,ee,V);Y.setMaterial(ee,we);let Oe=Q.index,We=1;if(ee.wireframe===!0){if(Oe=$.getWireframeAttribute(Q),Oe===void 0)return;We=2}const qe=Q.drawRange,Fe=Q.attributes.position;let it=qe.start*We,_t=(qe.start+qe.count)*We;_e!==null&&(it=Math.max(it,_e.start*We),_t=Math.min(_t,(_e.start+_e.count)*We)),Oe!==null?(it=Math.max(it,0),_t=Math.min(_t,Oe.count)):Fe!=null&&(it=Math.max(it,0),_t=Math.min(_t,Fe.count));const xt=_t-it;if(xt<0||xt===1/0)return;ht.setup(V,ee,Ue,Q,Oe);let sn,at=Le;if(Oe!==null&&(sn=B.get(Oe),at=ze,at.setIndex(sn)),V.isMesh)ee.wireframe===!0?(Y.setLineWidth(ee.wireframeLinewidth*w()),at.setMode(S.LINES)):at.setMode(S.TRIANGLES);else if(V.isLine){let Be=ee.linewidth;Be===void 0&&(Be=1),Y.setLineWidth(Be*w()),V.isLineSegments?at.setMode(S.LINES):V.isLineLoop?at.setMode(S.LINE_LOOP):at.setMode(S.LINE_STRIP)}else V.isPoints?at.setMode(S.POINTS):V.isSprite&&at.setMode(S.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)at.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))at.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Be=V._multiDrawStarts,hi=V._multiDrawCounts,lt=V._multiDrawCount,Pn=Oe?B.get(Oe).bytesPerElement:1,zs=ie.get(ee).currentProgram.getUniforms();for(let an=0;an<lt;an++)zs.setValue(S,"_gl_DrawID",an),at.render(Be[an]/Pn,hi[an])}else if(V.isInstancedMesh)at.renderInstances(it,xt,V.count);else if(Q.isInstancedBufferGeometry){const Be=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,hi=Math.min(Q.instanceCount,Be);at.renderInstances(it,xt,hi)}else at.render(it,xt)};function ft(A,H,Q){A.transparent===!0&&A.side===Jn&&A.forceSinglePass===!1?(A.side=on,A.needsUpdate=!0,jo(A,H,Q),A.side=Ni,A.needsUpdate=!0,jo(A,H,Q),A.side=Jn):jo(A,H,Q)}this.compile=function(A,H,Q=null){Q===null&&(Q=A),p=Ge.get(Q),p.init(H),b.push(p),Q.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==Q&&A.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const ee=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const _e=V.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){const Ue=_e[we];ft(Ue,Q,V),ee.add(Ue)}else ft(_e,Q,V),ee.add(_e)}),b.pop(),p=null,ee},this.compileAsync=function(A,H,Q=null){const ee=this.compile(A,H,Q);return new Promise(V=>{function _e(){if(ee.forEach(function(we){ie.get(we).currentProgram.isReady()&&ee.delete(we)}),ee.size===0){V(A);return}setTimeout(_e,10)}te.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Cn=null;function ui(A){Cn&&Cn(A)}function Lh(){ds.stop()}function Ih(){ds.start()}const ds=new Dg;ds.setAnimationLoop(ui),typeof self<"u"&&ds.setContext(self),this.setAnimationLoop=function(A){Cn=A,oe.setAnimationLoop(A),A===null?ds.stop():ds.start()},oe.addEventListener("sessionstart",Lh),oe.addEventListener("sessionend",Ih),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(H),H=oe.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,H,C),p=Ge.get(A,b.length),p.init(H),b.push(p),re.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),z.setFromProjectionMatrix(re),pe=this.localClippingEnabled,de=fe.init(this.clippingPlanes,pe),m=me.get(A,T.length),m.init(),T.push(m),oe.enabled===!0&&oe.isPresenting===!0){const _e=M.xr.getDepthSensingMesh();_e!==null&&Rl(_e,H,-1/0,M.sortObjects)}Rl(A,H,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ve,ye),Ne=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Ne&&Ie.addToRenderList(m,A),this.info.render.frame++,de===!0&&fe.beginShadows();const Q=p.state.shadowsArray;Se.render(Q,A,H),de===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const _e=H.cameras;if(V.length>0)for(let we=0,Ue=_e.length;we<Ue;we++){const Oe=_e[we];Nh(ee,V,A,Oe)}Ne&&Ie.render(A);for(let we=0,Ue=_e.length;we<Ue;we++){const Oe=_e[we];Dh(m,A,Oe,Oe.viewport)}}else V.length>0&&Nh(ee,V,A,H),Ne&&Ie.render(A),Dh(m,A,H);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(M,A,H),ht.resetDefaultState(),v=-1,x=null,b.pop(),b.length>0?(p=b[b.length-1],de===!0&&fe.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Rl(A,H,Q,ee){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||z.intersectsSprite(A)){ee&&ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(re);const we=X.update(A),Ue=A.material;Ue.visible&&m.push(A,we,Ue,Q,ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||z.intersectsObject(A))){const we=X.update(A),Ue=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ue.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ue.copy(we.boundingSphere.center)),ue.applyMatrix4(A.matrixWorld).applyMatrix4(re)),Array.isArray(Ue)){const Oe=we.groups;for(let We=0,qe=Oe.length;We<qe;We++){const Fe=Oe[We],it=Ue[Fe.materialIndex];it&&it.visible&&m.push(A,we,it,Q,ue.z,Fe)}}else Ue.visible&&m.push(A,we,Ue,Q,ue.z,null)}}const _e=A.children;for(let we=0,Ue=_e.length;we<Ue;we++)Rl(_e[we],H,Q,ee)}function Dh(A,H,Q,ee){const V=A.opaque,_e=A.transmissive,we=A.transparent;p.setupLightsView(Q),de===!0&&fe.setGlobalState(M.clippingPlanes,Q),ee&&Y.viewport(R.copy(ee)),V.length>0&&$o(V,H,Q),_e.length>0&&$o(_e,H,Q),we.length>0&&$o(we,H,Q),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Nh(A,H,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ee.id]===void 0&&(p.state.transmissionRenderTarget[ee.id]=new ks(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Go:Ui,minFilter:Ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const _e=p.state.transmissionRenderTarget[ee.id],we=ee.viewport||R;_e.setSize(we.z,we.w);const Ue=M.getRenderTarget();M.setRenderTarget(_e),M.getClearColor(J),ae=M.getClearAlpha(),ae<1&&M.setClearColor(16777215,.5),M.clear(),Ne&&Ie.render(Q);const Oe=M.toneMapping;M.toneMapping=os;const We=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),p.setupLightsView(ee),de===!0&&fe.setGlobalState(M.clippingPlanes,ee),$o(A,Q,ee),E.updateMultisampleRenderTarget(_e),E.updateRenderTargetMipmap(_e),te.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Fe=0,it=H.length;Fe<it;Fe++){const _t=H[Fe],xt=_t.object,sn=_t.geometry,at=_t.material,Be=_t.group;if(at.side===Jn&&xt.layers.test(ee.layers)){const hi=at.side;at.side=on,at.needsUpdate=!0,Uh(xt,Q,ee,sn,at,Be),at.side=hi,at.needsUpdate=!0,qe=!0}}qe===!0&&(E.updateMultisampleRenderTarget(_e),E.updateRenderTargetMipmap(_e))}M.setRenderTarget(Ue),M.setClearColor(J,ae),We!==void 0&&(ee.viewport=We),M.toneMapping=Oe}function $o(A,H,Q){const ee=H.isScene===!0?H.overrideMaterial:null;for(let V=0,_e=A.length;V<_e;V++){const we=A[V],Ue=we.object,Oe=we.geometry,We=ee===null?we.material:ee,qe=we.group;Ue.layers.test(Q.layers)&&Uh(Ue,H,Q,Oe,We,qe)}}function Uh(A,H,Q,ee,V,_e){A.onBeforeRender(M,H,Q,ee,V,_e),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(M,H,Q,ee,A,_e),V.transparent===!0&&V.side===Jn&&V.forceSinglePass===!1?(V.side=on,V.needsUpdate=!0,M.renderBufferDirect(Q,H,ee,V,A,_e),V.side=Ni,V.needsUpdate=!0,M.renderBufferDirect(Q,H,ee,V,A,_e),V.side=Jn):M.renderBufferDirect(Q,H,ee,V,A,_e),A.onAfterRender(M,H,Q,ee,V,_e)}function jo(A,H,Q){H.isScene!==!0&&(H=Ee);const ee=ie.get(A),V=p.state.lights,_e=p.state.shadowsArray,we=V.state.version,Ue=le.getParameters(A,V.state,_e,H,Q),Oe=le.getProgramCacheKey(Ue);let We=ee.programs;ee.environment=A.isMeshStandardMaterial?H.environment:null,ee.fog=H.fog,ee.envMap=(A.isMeshStandardMaterial?N:y).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",je),We=new Map,ee.programs=We);let qe=We.get(Oe);if(qe!==void 0){if(ee.currentProgram===qe&&ee.lightsStateVersion===we)return Fh(A,Ue),qe}else Ue.uniforms=le.getUniforms(A),A.onBeforeCompile(Ue,M),qe=le.acquireProgram(Ue,Oe),We.set(Oe,qe),ee.uniforms=Ue.uniforms;const Fe=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=fe.uniform),Fh(A,Ue),ee.needsLights=p_(A),ee.lightsStateVersion=we,ee.needsLights&&(Fe.ambientLightColor.value=V.state.ambient,Fe.lightProbe.value=V.state.probe,Fe.directionalLights.value=V.state.directional,Fe.directionalLightShadows.value=V.state.directionalShadow,Fe.spotLights.value=V.state.spot,Fe.spotLightShadows.value=V.state.spotShadow,Fe.rectAreaLights.value=V.state.rectArea,Fe.ltc_1.value=V.state.rectAreaLTC1,Fe.ltc_2.value=V.state.rectAreaLTC2,Fe.pointLights.value=V.state.point,Fe.pointLightShadows.value=V.state.pointShadow,Fe.hemisphereLights.value=V.state.hemi,Fe.directionalShadowMap.value=V.state.directionalShadowMap,Fe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Fe.spotShadowMap.value=V.state.spotShadowMap,Fe.spotLightMatrix.value=V.state.spotLightMatrix,Fe.spotLightMap.value=V.state.spotLightMap,Fe.pointShadowMap.value=V.state.pointShadowMap,Fe.pointShadowMatrix.value=V.state.pointShadowMatrix),ee.currentProgram=qe,ee.uniformsList=null,qe}function Oh(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Ba.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Fh(A,H){const Q=ie.get(A);Q.outputColorSpace=H.outputColorSpace,Q.batching=H.batching,Q.batchingColor=H.batchingColor,Q.instancing=H.instancing,Q.instancingColor=H.instancingColor,Q.instancingMorph=H.instancingMorph,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function f_(A,H,Q,ee,V){H.isScene!==!0&&(H=Ee),E.resetTextureUnits();const _e=H.fog,we=ee.isMeshStandardMaterial?H.environment:null,Ue=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:nn,Oe=(ee.isMeshStandardMaterial?N:y).get(ee.envMap||we),We=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,qe=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Fe=!!Q.morphAttributes.position,it=!!Q.morphAttributes.normal,_t=!!Q.morphAttributes.color;let xt=os;ee.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xt=M.toneMapping);const sn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,at=sn!==void 0?sn.length:0,Be=ie.get(ee),hi=p.state.lights;if(de===!0&&(pe===!0||A!==x)){const vn=A===x&&ee.id===v;fe.setState(ee,A,vn)}let lt=!1;ee.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==hi.state.version||Be.outputColorSpace!==Ue||V.isBatchedMesh&&Be.batching===!1||!V.isBatchedMesh&&Be.batching===!0||V.isBatchedMesh&&Be.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Be.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Be.instancing===!1||!V.isInstancedMesh&&Be.instancing===!0||V.isSkinnedMesh&&Be.skinning===!1||!V.isSkinnedMesh&&Be.skinning===!0||V.isInstancedMesh&&Be.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Be.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Be.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Be.instancingMorph===!1&&V.morphTexture!==null||Be.envMap!==Oe||ee.fog===!0&&Be.fog!==_e||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==fe.numPlanes||Be.numIntersection!==fe.numIntersection)||Be.vertexAlphas!==We||Be.vertexTangents!==qe||Be.morphTargets!==Fe||Be.morphNormals!==it||Be.morphColors!==_t||Be.toneMapping!==xt||Be.morphTargetsCount!==at)&&(lt=!0):(lt=!0,Be.__version=ee.version);let Pn=Be.currentProgram;lt===!0&&(Pn=jo(ee,H,V));let zs=!1,an=!1,Wr=!1;const yt=Pn.getUniforms(),$n=Be.uniforms;if(Y.useProgram(Pn.program)&&(zs=!0,an=!0,Wr=!0),ee.id!==v&&(v=ee.id,an=!0),zs||x!==A){Y.buffers.depth.getReversed()?(U.copy(A.projectionMatrix),wM(U),RM(U),yt.setValue(S,"projectionMatrix",U)):yt.setValue(S,"projectionMatrix",A.projectionMatrix),yt.setValue(S,"viewMatrix",A.matrixWorldInverse);const Fi=yt.map.cameraPosition;Fi!==void 0&&Fi.setValue(S,G.setFromMatrixPosition(A.matrixWorld)),q.logarithmicDepthBuffer&&yt.setValue(S,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&yt.setValue(S,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,an=!0,Wr=!0)}if(V.isSkinnedMesh){yt.setOptional(S,V,"bindMatrix"),yt.setOptional(S,V,"bindMatrixInverse");const vn=V.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),yt.setValue(S,"boneTexture",vn.boneTexture,E))}V.isBatchedMesh&&(yt.setOptional(S,V,"batchingTexture"),yt.setValue(S,"batchingTexture",V._matricesTexture,E),yt.setOptional(S,V,"batchingIdTexture"),yt.setValue(S,"batchingIdTexture",V._indirectTexture,E),yt.setOptional(S,V,"batchingColorTexture"),V._colorsTexture!==null&&yt.setValue(S,"batchingColorTexture",V._colorsTexture,E));const Xr=Q.morphAttributes;if((Xr.position!==void 0||Xr.normal!==void 0||Xr.color!==void 0)&&He.update(V,Q,Pn),(an||Be.receiveShadow!==V.receiveShadow)&&(Be.receiveShadow=V.receiveShadow,yt.setValue(S,"receiveShadow",V.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&($n.envMap.value=Oe,$n.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&H.environment!==null&&($n.envMapIntensity.value=H.environmentIntensity),an&&(yt.setValue(S,"toneMappingExposure",M.toneMappingExposure),Be.needsLights&&d_($n,Wr),_e&&ee.fog===!0&&Z.refreshFogUniforms($n,_e),Z.refreshMaterialUniforms($n,ee,j,se,p.state.transmissionRenderTarget[A.id]),Ba.upload(S,Oh(Be),$n,E)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ba.upload(S,Oh(Be),$n,E),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&yt.setValue(S,"center",V.center),yt.setValue(S,"modelViewMatrix",V.modelViewMatrix),yt.setValue(S,"normalMatrix",V.normalMatrix),yt.setValue(S,"modelMatrix",V.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const vn=ee.uniformsGroups;for(let Fi=0,Bi=vn.length;Fi<Bi;Fi++){const Bh=vn[Fi];O.update(Bh,Pn),O.bind(Bh,Pn)}}return Pn}function d_(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function p_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,H,Q){ie.get(A.texture).__webglTexture=H,ie.get(A.depthTexture).__webglTexture=Q;const ee=ie.get(A);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Q===void 0,ee.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){const Q=ie.get(A);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,Q=0){C=A,L=H,P=Q;let ee=!0,V=null,_e=!1,we=!1;if(A){const Oe=ie.get(A);if(Oe.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(S.FRAMEBUFFER,null),ee=!1;else if(Oe.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Oe.__hasExternalTextures)E.rebindTextures(A,ie.get(A.texture).__webglTexture,ie.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Fe=A.depthTexture;if(Oe.__boundDepthTexture!==Fe){if(Fe!==null&&ie.has(Fe)&&(A.width!==Fe.image.width||A.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const qe=ie.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[H])?V=qe[H][Q]:V=qe[H],_e=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?V=ie.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?V=qe[Q]:V=qe,R.copy(A.viewport),I.copy(A.scissor),F=A.scissorTest}else R.copy(Pe).multiplyScalar(j).floor(),I.copy(ge).multiplyScalar(j).floor(),F=xe;if(Y.bindFramebuffer(S.FRAMEBUFFER,V)&&ee&&Y.drawBuffers(A,V),Y.viewport(R),Y.scissor(I),Y.setScissorTest(F),_e){const Oe=ie.get(A.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+H,Oe.__webglTexture,Q)}else if(we){const Oe=ie.get(A.texture),We=H||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Oe.__webglTexture,Q||0,We)}v=-1},this.readRenderTargetPixels=function(A,H,Q,ee,V,_e,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Ue=Ue[we]),Ue){Y.bindFramebuffer(S.FRAMEBUFFER,Ue);try{const Oe=A.texture,We=Oe.format,qe=Oe.type;if(!q.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-ee&&Q>=0&&Q<=A.height-V&&S.readPixels(H,Q,ee,V,Ve.convert(We),Ve.convert(qe),_e)}finally{const Oe=C!==null?ie.get(C).__webglFramebuffer:null;Y.bindFramebuffer(S.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,H,Q,ee,V,_e,we){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Ue=Ue[we]),Ue){const Oe=A.texture,We=Oe.format,qe=Oe.type;if(!q.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=A.width-ee&&Q>=0&&Q<=A.height-V){Y.bindFramebuffer(S.FRAMEBUFFER,Ue);const Fe=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Fe),S.bufferData(S.PIXEL_PACK_BUFFER,_e.byteLength,S.STREAM_READ),S.readPixels(H,Q,ee,V,Ve.convert(We),Ve.convert(qe),0);const it=C!==null?ie.get(C).__webglFramebuffer:null;Y.bindFramebuffer(S.FRAMEBUFFER,it);const _t=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await AM(S,_t,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Fe),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,_e),S.deleteBuffer(Fe),S.deleteSync(_t),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,H=null,Q=0){A.isTexture!==!0&&(lo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1]);const ee=Math.pow(2,-Q),V=Math.floor(A.image.width*ee),_e=Math.floor(A.image.height*ee),we=H!==null?H.x:0,Ue=H!==null?H.y:0;E.setTexture2D(A,0),S.copyTexSubImage2D(S.TEXTURE_2D,Q,0,0,we,Ue,V,_e),Y.unbindTexture()},this.copyTextureToTexture=function(A,H,Q=null,ee=null,V=0){A.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,A=arguments[1],H=arguments[2],V=arguments[3]||0,Q=null);let _e,we,Ue,Oe,We,qe,Fe,it,_t;const xt=A.isCompressedTexture?A.mipmaps[V]:A.image;Q!==null?(_e=Q.max.x-Q.min.x,we=Q.max.y-Q.min.y,Ue=Q.isBox3?Q.max.z-Q.min.z:1,Oe=Q.min.x,We=Q.min.y,qe=Q.isBox3?Q.min.z:0):(_e=xt.width,we=xt.height,Ue=xt.depth||1,Oe=0,We=0,qe=0),ee!==null?(Fe=ee.x,it=ee.y,_t=ee.z):(Fe=0,it=0,_t=0);const sn=Ve.convert(H.format),at=Ve.convert(H.type);let Be;H.isData3DTexture?(E.setTexture3D(H,0),Be=S.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(E.setTexture2DArray(H,0),Be=S.TEXTURE_2D_ARRAY):(E.setTexture2D(H,0),Be=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,H.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,H.unpackAlignment);const hi=S.getParameter(S.UNPACK_ROW_LENGTH),lt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Pn=S.getParameter(S.UNPACK_SKIP_PIXELS),zs=S.getParameter(S.UNPACK_SKIP_ROWS),an=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,xt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,xt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Oe),S.pixelStorei(S.UNPACK_SKIP_ROWS,We),S.pixelStorei(S.UNPACK_SKIP_IMAGES,qe);const Wr=A.isDataArrayTexture||A.isData3DTexture,yt=H.isDataArrayTexture||H.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const $n=ie.get(A),Xr=ie.get(H),vn=ie.get($n.__renderTarget),Fi=ie.get(Xr.__renderTarget);Y.bindFramebuffer(S.READ_FRAMEBUFFER,vn.__webglFramebuffer),Y.bindFramebuffer(S.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Bi=0;Bi<Ue;Bi++)Wr&&S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,ie.get(A).__webglTexture,V,qe+Bi),A.isDepthTexture?(yt&&S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,ie.get(H).__webglTexture,V,_t+Bi),S.blitFramebuffer(Oe,We,_e,we,Fe,it,_e,we,S.DEPTH_BUFFER_BIT,S.NEAREST)):yt?S.copyTexSubImage3D(Be,V,Fe,it,_t+Bi,Oe,We,_e,we):S.copyTexSubImage2D(Be,V,Fe,it,_t+Bi,Oe,We,_e,we);Y.bindFramebuffer(S.READ_FRAMEBUFFER,null),Y.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else yt?A.isDataTexture||A.isData3DTexture?S.texSubImage3D(Be,V,Fe,it,_t,_e,we,Ue,sn,at,xt.data):H.isCompressedArrayTexture?S.compressedTexSubImage3D(Be,V,Fe,it,_t,_e,we,Ue,sn,xt.data):S.texSubImage3D(Be,V,Fe,it,_t,_e,we,Ue,sn,at,xt):A.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,V,Fe,it,_e,we,sn,at,xt.data):A.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,V,Fe,it,xt.width,xt.height,sn,xt.data):S.texSubImage2D(S.TEXTURE_2D,V,Fe,it,_e,we,sn,at,xt);S.pixelStorei(S.UNPACK_ROW_LENGTH,hi),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,lt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Pn),S.pixelStorei(S.UNPACK_SKIP_ROWS,zs),S.pixelStorei(S.UNPACK_SKIP_IMAGES,an),V===0&&H.generateMipmaps&&S.generateMipmap(Be),Y.unbindTexture()},this.copyTextureToTexture3D=function(A,H,Q=null,ee=null,V=0){return A.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,ee=arguments[1]||null,A=arguments[2],H=arguments[3],V=arguments[4]||0),lo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,H,Q,ee,V)},this.initRenderTarget=function(A){ie.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),Y.unbindTexture()},this.resetState=function(){L=0,P=0,C=null,Y.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}class Bw extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Iu,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new k;class bh{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Xd=new k,$d=new ot,jd=new ot,Hw=new k,qd=new Ye,ya=new k,xc=new ai,Kd=new Ye,yc=new Sl;class Vw extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jf,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new oi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ya),this.boundingBox.expandByPoint(ya)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ai),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ya),this.boundingSphere.expandByPoint(ya)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xc.copy(this.boundingSphere),xc.applyMatrix4(s),e.ray.intersectsSphere(xc)!==!1&&(Kd.copy(s).invert(),yc.copy(e.ray).applyMatrix4(Kd),!(this.boundingBox!==null&&yc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,yc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===KS?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;$d.fromBufferAttribute(s.attributes.skinIndex,e),jd.fromBufferAttribute(s.attributes.skinWeight,e),Xd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=jd.getComponent(r);if(o!==0){const a=$d.getComponent(r);qd.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Hw.copy(Xd).applyMatrix4(qd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class kg extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hg extends kt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=en,u=en,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yd=new Ye,zw=new Ye;class Eh{constructor(e=[],t=[]){this.uuid=Hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ye;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:zw;Yd.multiplyMatrices(a,t[r]),Yd.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Eh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Hg(t,e,e,En,Fn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new kg),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Nu extends tn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const or=new Ye,Zd=new Ye,Sa=[],Jd=new oi,Gw=new Ye,Qr=new At,eo=new ai;class Ww extends At{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Gw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),Jd.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(Jd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,or),eo.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(eo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Qr.geometry=this.geometry,Qr.material=this.material,Qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),eo.copy(this.boundingSphere),eo.applyMatrix4(i),e.ray.intersectsSphere(eo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),Zd.multiplyMatrices(i,or),Qr.matrixWorld=Zd,Qr.raycast(e,Sa);for(let o=0,a=Sa.length;o<a;o++){const l=Sa[o];l.instanceId=r,l.object=this,t.push(l)}Sa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Hg(new Float32Array(s*this.count),s,this.count,mh,Fn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Vg extends si{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qa=new k,el=new k,Qd=new Ye,to=new Sl,Ma=new ai,Sc=new k,ep=new k;class Th extends Et{constructor(e=new Xn,t=new Vg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Qa.fromBufferAttribute(t,s-1),el.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Qa.distanceTo(el);e.setAttribute("lineDistance",new Rn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(s),Ma.radius+=r,e.ray.intersectsSphere(Ma)===!1)return;Qd.copy(s).invert(),to.copy(e.ray).applyMatrix4(Qd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),T=u.getX(_+1),b=ba(this,e,to,l,p,T);b&&t.push(b)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=ba(this,e,to,l,_,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=ba(this,e,to,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=ba(this,e,to,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ba(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(Qa.fromBufferAttribute(o,s),el.fromBufferAttribute(o,r),t.distanceSqToSegment(Qa,el,Sc,ep)>i)return;Sc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Sc);if(!(l<e.near||l>e.far))return{distance:l,point:ep.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const tp=new k,np=new k;class Xw extends Th{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)tp.fromBufferAttribute(t,s),np.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+tp.distanceTo(np);e.setAttribute("lineDistance",new Rn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $w extends Th{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class zg extends si{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ip=new Ye,Uu=new Sl,Ea=new ai,Ta=new k;class jw extends Et{constructor(e=new Xn,t=new zg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;ip.copy(s).invert(),Uu.copy(e.ray).applyMatrix4(ip);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Ta.fromBufferAttribute(h,m),sp(Ta,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Ta.fromBufferAttribute(h,g),sp(Ta,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function sp(n,e,t,i,s,r,o){const a=Uu.distanceSqToPoint(n);if(a<t){const l=new k;Uu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ah extends Xn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new k,f=new k,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const T=[],b=p/i;let M=0;p===0&&o===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let D=0;D<=t;D++){const L=D/t;h.x=-e*Math.cos(s+L*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(s+L*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(L+M,1-b),T.push(c++)}u.push(T)}for(let p=0;p<i;p++)for(let T=0;T<t;T++){const b=u[p][T+1],M=u[p][T],D=u[p+1][T],L=u[p+1][T+1];(p!==0||o>0)&&d.push(b,M,L),(p!==i-1||l<Math.PI)&&d.push(M,D,L)}this.setIndex(d),this.setAttribute("position",new Rn(g,3)),this.setAttribute("normal",new Rn(_,3)),this.setAttribute("uv",new Rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ah(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yr extends si{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sg,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class li extends yr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Aa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function qw(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Kw(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function rp(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Gg(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Wo{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Yw extends Wo{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qf,endingEnd:qf}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kf:r=e,a=2*t-i;break;case Yf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Kf:o=e,l=2*i-t;break;case Yf:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,T=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,b=(-1-d)*m+(1.5+d)*_+.5*g,M=d*m-d*_;for(let D=0;D!==a;++D)r[D]=p*o[u+D]+T*o[c+D]+b*o[l+D]+M*o[h+D];return r}}class Zw extends Wo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class Jw extends Wo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ci{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Jw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Uo:t=this.InterpolantFactoryMethodDiscrete;break;case Oo:t=this.InterpolantFactoryMethodLinear;break;case Xl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uo;case this.InterpolantFactoryMethodLinear:return Oo;case this.InterpolantFactoryMethodSmooth:return Xl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&qw(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Xl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Oo;class Vr extends ci{constructor(e,t,i){super(e,t,i)}}Vr.prototype.ValueTypeName="bool";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=Uo;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;class Wg extends ci{}Wg.prototype.ValueTypeName="color";class Nr extends ci{}Nr.prototype.ValueTypeName="number";class Qw extends Wo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)fs.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ur extends ci{InterpolantFactoryMethodLinear(e){return new Qw(this.times,this.values,this.getValueSize(),e)}}Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class zr extends ci{constructor(e,t,i){super(e,t,i)}}zr.prototype.ValueTypeName="string";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=Uo;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Or extends ci{}Or.prototype.ValueTypeName="vector";class eR{constructor(e="",t=-1,i=[],s=YS){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Hn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(nR(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(ci.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Kw(l);l=rp(l,1,u),c=rp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Nr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];Gg(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let T=0;T!==f[g].morphTargets.length;++T){const b=f[g];m.push(b.time),p.push(b.morphTarget===_?1:0)}s.push(new Nr(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";i(Or,d+".position",f,"pos",s),i(Ur,d+".quaternion",f,"rot",s),i(Or,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function tR(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Nr;case"vector":case"vector2":case"vector3":case"vector4":return Or;case"color":return Wg;case"quaternion":return Ur;case"bool":case"boolean":return Vr;case"string":return zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function nR(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=tR(n.type);if(n.times===void 0){const t=[],i=[];Gg(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ss={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class iR{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const sR=new iR;class Gr{constructor(e){this.manager=e!==void 0?e:sR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gr.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi={};class rR extends Error{constructor(e,t){super(e),this.response=t}}class Xg extends Gr{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ss.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(xi[e]!==void 0){xi[e].push({onLoad:t,onProgress:i,onError:s});return}xi[e]=[],xi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=xi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){T();function T(){h.read().then(({done:b,value:M})=>{if(b)p.close();else{_+=M.byteLength;const D=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let L=0,P=u.length;L<P;L++){const C=u[L];C.onProgress&&C.onProgress(D)}p.enqueue(M),T()}},b=>{p.error(b)})}}});return new Response(m)}else throw new rR(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ss.add(e,c);const u=xi[e];delete xi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=xi[e];if(u===void 0)throw this.manager.itemError(e),c;delete xi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class oR extends Gr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ss.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Fo("img");function l(){u(),ss.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ou extends Gr{constructor(e){super(e)}load(e,t,i,s){const r=new kt,o=new oR(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class El extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Mc=new Ye,op=new k,ap=new k;class wh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yh,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;op.setFromMatrixPosition(e.matrixWorld),t.position.copy(op),ap.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ap),t.updateMatrixWorld(),Mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class aR extends wh{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ir*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class lR extends El{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new aR}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const lp=new Ye,no=new k,bc=new k;class cR extends wh{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),no.setFromMatrixPosition(e.matrixWorld),i.position.copy(no),bc.copy(i.position),bc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(bc),i.updateMatrixWorld(),s.makeTranslation(-no.x,-no.y,-no.z),lp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lp)}}class $g extends El{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new cR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class uR extends wh{constructor(){super(new Sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hR extends El{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new uR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fR extends El{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class dR extends Gr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ss.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ss.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ss.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ss.add(e,l),r.manager.itemStart(e)}}class pR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cp(){return performance.now()}const Rh="\\[\\]\\.:\\/",mR=new RegExp("["+Rh+"]","g"),Ch="[^"+Rh+"]",gR="[^"+Rh.replace("\\.","")+"]",_R=/((?:WC+[\/:])*)/.source.replace("WC",Ch),vR=/(WCOD+)?/.source.replace("WCOD",gR),xR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),yR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),SR=new RegExp("^"+_R+vR+xR+yR+"$"),MR=["material","materials","bones","map"];class bR{constructor(e,t,i){const s=i||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class pt{constructor(e,t,i){this.path=t,this.parsedPath=i||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,i):new pt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mR,"")}static parseTrackName(e){const t=SR.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);MR.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=bR;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ER extends Vs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);const ar=new Wn(0,0,0,"YXZ"),lr=new k,TR={type:"change"},AR={type:"lock"},wR={type:"unlock"},up=Math.PI/2;class RR extends ER{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=CR.bind(this),this._onPointerlockChange=PR.bind(this),this._onPointerlockError=LR.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;lr.setFromMatrixColumn(t.matrix,0),lr.crossVectors(t.up,lr),t.position.addScaledVector(lr,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;lr.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(lr,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function CR(n){if(this.enabled===!1||this.isLocked===!1)return;const e=n.movementX||n.mozMovementX||n.webkitMovementX||0,t=n.movementY||n.mozMovementY||n.webkitMovementY||0,i=this.object;ar.setFromQuaternion(i.quaternion),ar.y-=e*.002*this.pointerSpeed,ar.x-=t*.002*this.pointerSpeed,ar.x=Math.max(up-this.maxPolarAngle,Math.min(up-this.minPolarAngle,ar.x)),i.quaternion.setFromEuler(ar),this.dispatchEvent(TR)}function PR(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(AR),this.isLocked=!0):(this.dispatchEvent(wR),this.isLocked=!1)}function LR(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const IR="/assets/ground-4ICvYzm_.png",DR="/assets/wall-Dsmy-Flm.png";function hp(n,e){if(e===ZS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Lu||e===yg){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Lu)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class Ec extends Gr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new BR(t)}),this.register(function(t){return new kR(t)}),this.register(function(t){return new qR(t)}),this.register(function(t){return new KR(t)}),this.register(function(t){return new YR(t)}),this.register(function(t){return new VR(t)}),this.register(function(t){return new zR(t)}),this.register(function(t){return new GR(t)}),this.register(function(t){return new WR(t)}),this.register(function(t){return new FR(t)}),this.register(function(t){return new XR(t)}),this.register(function(t){return new HR(t)}),this.register(function(t){return new jR(t)}),this.register(function(t){return new $R(t)}),this.register(function(t){return new UR(t)}),this.register(function(t){return new ZR(t)}),this.register(function(t){return new JR(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=bo.extractUrlBase(e);o=bo.resolveURL(c,this.path)}else o=bo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Xg(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===jg){try{o[Je.KHR_BINARY_GLTF]=new QR(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new fC(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Je.KHR_MATERIALS_UNLIT:o[h]=new OR;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[h]=new eC(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[h]=new tC;break;case Je.KHR_MESH_QUANTIZATION:o[h]=new nC;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function NR(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class UR{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new $e(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],nn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new hR(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new $g(u),c.distance=h;break;case"spot":c=new lR(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Mi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class OR{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return Cs}extendParams(e,t,i){const s=[];e.color=new $e(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],nn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Ht))}return Promise.all(s)}}class FR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class BR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new tt(a,a)}return Promise.all(r)}}class kR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class HR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class VR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],nn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ht)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class zR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class GR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(a[0],a[1],a[2],nn),Promise.all(r)}}class WR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class XR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(a[0],a[1],a[2],nn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Ht)),Promise.all(r)}}class $R{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class jR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class qR{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class KR{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class YR{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ZR{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class JR{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==Mn.TRIANGLES&&c.mode!==Mn.TRIANGLE_STRIP&&c.mode!==Mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new Ye,m=new k,p=new fs,T=new k(1,1,1),b=new Ww(g.geometry,g.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&T.fromBufferAttribute(l.SCALE,M),b.setMatrixAt(M,_.compose(m,p,T));for(const M in l)if(M==="_COLOR_0"){const D=l[M];b.instanceColor=new Nu(D.array,D.itemSize,D.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);Et.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),d.push(b)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const jg="glTF",io=12,fp={JSON:1313821514,BIN:5130562};class QR{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,io),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-io,r=new DataView(e,io);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===fp.JSON){const c=new Uint8Array(e,io+o,a);this.content=i.decode(c)}else if(l===fp.BIN){const c=io+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class eC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Fu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Fu[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],d=Sr[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,nn,f)})})}}class tC{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class nC{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class qg extends Wo{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,T=1-m,b=p-f+h;for(let M=0;M!==a;M++){const D=o[_+M+a],L=o[_+M+l]*u,P=o[g+M+a],C=o[g+M]*u;r[M]=T*D+b*L+m*P+p*C}return r}}const iC=new fs;class sC extends qg{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return iC.fromArray(r).normalize().toArray(r),r}}const Mn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},dp={9728:en,9729:mn,9984:ug,9985:Ia,9986:ao,9987:Ai},pp={33071:is,33648:Za,10497:Cr},Tc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rC={CUBICSPLINE:void 0,LINEAR:Oo,STEP:Uo},Ac={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function oC(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new yr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ni})),n.DefaultMaterial}function bs(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Mi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function aC(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function lC(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cC(n){let e;const t=n.extensions&&n.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wc(t.attributes):e=n.indices+":"+wc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+wc(n.targets[i]);return e}function wc(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Bu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uC(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const hC=new Ye;class fC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new NR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new Ou(this.options.manager):this.textureLoader=new dR(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return bs(r,a,s),Mi(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(bo.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Tc[s.type],a=Sr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new tn(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Tc[s.type],c=Sr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let b=t.cache.get(T);b||(_=new c(a,p*d,s.count*d/u),b=new kw(_,d/u),t.cache.add(T,b)),m=new bh(b,l,f%d/u,g)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),m=new tn(_,l,g);if(s.sparse!==void 0){const p=Tc.SCALAR,T=Sr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,D=new T(o[1],b,s.sparse.count*p),L=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new tn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,C=D.length;P<C;P++){const v=D[P];if(m.setX(v,L[P*l]),l>=2&&m.setY(v,L[P*l+1]),l>=3&&m.setZ(v,L[P*l+2]),l>=4&&m.setW(v,L[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=dp[f.magFilter]||mn,u.minFilter=dp[f.minFilter]||Ai,u.wrapS=pp[f.wrapS]||Cr,u.wrapT=pp[f.wrapT]||Cr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==en&&u.minFilter!==mn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new kt(_);m.needsUpdate=!0,f(m)}),t.load(bo.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Mi(h,o),h.userData.mimeType=o.mimeType||uC(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new zg,si.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Vg,si.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return yr}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){const h=s[Je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new $e(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],nn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ht)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Jn);const u=r.alphaMode||Ac.OPAQUE;if(u===Ac.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ac.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Cs&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new tt(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Cs&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Cs){const h=r.emissiveFactor;a.emissive=new $e().setRGB(h[0],h[1],h[2],nn)}return r.emissiveTexture!==void 0&&o!==Cs&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ht)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Mi(h,r),t.associations.set(h,{materials:e}),r.extensions&&bs(s,h,r),h})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return mp(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=cC(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=mp(new Xn,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?oC(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const T=c[d];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Vw(_,T):new At(_,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?p.geometry=hp(p.geometry,yg):m.mode===Mn.TRIANGLE_FAN&&(p.geometry=hp(p.geometry,Lu));else if(m.mode===Mn.LINES)p=new Xw(_,T);else if(m.mode===Mn.LINE_STRIP)p=new Th(_,T);else if(m.mode===Mn.LINE_LOOP)p=new $w(_,T);else if(m.mode===Mn.POINTS)p=new jw(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&lC(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Mi(p,r),m.extensions&&bs(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&bs(s,h[0],r),h[0];const f=new Ps;r.extensions&&bs(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Qt(EM.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Sh(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Mi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Ye;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Eh(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,T=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",T)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let T=0,b=f.length;T<b;T++){const M=f[T],D=d[T],L=g[T],P=_[T],C=m[T];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const v=i._createAnimationTracks(M,D,L,P,C);if(v)for(let x=0;x<v.length;x++)p.push(v[x])}return new eR(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,hC)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new kg:c.length>1?u=new Ps:c.length===1?u=c[0]:u=new Et,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Mi(u,r),r.extensions&&bs(i,u,r),r.matrix!==void 0){const h=new Ye;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Ps;i.name&&(r.name=s.createUniqueName(i.name)),Mi(r,i),i.extensions&&bs(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof si||f instanceof kt)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];ji[r.path]===ji.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ji[r.path]){case ji.weights:c=Nr;break;case ji.rotation:c=Ur;break;case ji.position:case ji.scale:c=Or;break;default:switch(i.itemSize){case 1:c=Nr;break;case 2:case 3:default:c=Or;break}break}const u=s.interpolation!==void 0?rC[s.interpolation]:Oo,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+ji[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Bu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Ur?sC:qg;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function dC(n,e,t){const i=e.attributes,s=new oi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),a.normalized){const u=Bu(Sr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new k,l=new k;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=Bu(Sr[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new ai;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function mp(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Fu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return et.workingColorSpace!==nn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),Mi(n,e),dC(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?aC(n,e.targets,t):n})}const pC={class:"absolute z-50 top-0 flex justify-between w-full items-center p-8"},mC={id:"items",class:"ml-4 p-8 bg-black text-white border-2 border-white rounded-lg shadow-lg z-20 w-45 h-45"},gC={key:0},_C={key:1},vC={id:"hud",class:"hud absoute text-white font-bold"},xC={class:"flex gap-2"},yC={key:0,src:_S,alt:"Full Heart",width:"40",height:"40"},SC={key:1,src:vS,alt:"Empty Heart",width:"40",height:"40"},Rc=2,MC=4,bC=Lt({__name:"Game",setup(n){const e=Fs(),i=ah().params.id.toString();let s,r=0;const o=new Map,a=new Map;let l,c,u,h=!1,f=Rc;const d=rt(2),g=rt(3),_=rt([]);let m=rt([]);function p(){const ge=new Bw,xe=new Qt(75,window.innerWidth/window.outerWidth,.001,1e3);xe.position.set(1,1,2);const z=new Fw;z.setPixelRatio(window.devicePixelRatio),z.setSize(window.innerWidth,window.innerHeight),z.shadowMap.enabled=!0;const de=new RR(xe,z.domElement);de.pointerSpeed=1;const pe=new pR;return{scene:ge,camera:xe,renderer:z,pointerLockControls:de,clock:pe}}function T(ge,xe){xe.domElement.addEventListener("click",z=>{xe.domElement.requestPointerLock()}),ge.addEventListener("resize",z=>{xe.setPixelRatio(ge.devicePixelRatio),xe.setSize(ge.innerWidth,ge.innerHeight),M.aspect=ge.innerWidth/ge.innerHeight,M.updateProjectionMatrix()}),ge.addEventListener("keydown",z=>{switch(z.code){case"ShiftLeft":f===Rc?f=MC:f=Rc;break;case"KeyW":l=!0;break;case"KeyA":u=!0;break;case"KeyS":c=!0;break;case"KeyD":h=!0;break}}),ge.addEventListener("keyup",z=>{switch(console.log("Losgelasen: "+z.code),z.code){case"KeyW":l=!1;break;case"KeyA":u=!1;break;case"KeyS":c=!1;break;case"KeyD":h=!1;break}})}const{scene:b,camera:M,renderer:D,pointerLockControls:L,clock:P}=p();T(window,D);const C=rt(null),v=new Ah(1,30,30),x=new yr({color:16776960,metalness:0,roughness:0}),R=new At(v,x);R.position.y=2,R.position.x=3,R.position.z=-4,b.add(R);const I=new fR(4210752,10);b.add(I);const F=new $g(16777215,1e3,10);F.position.set(10,20,10),b.add(F);function J(){setTimeout(function(){requestAnimationFrame(J)},1e3/60),D.render(b,M);const ge=P.getDelta();ae(ge)}function ae(ge){const xe=new k;M.getWorldDirection(xe),xe.y=0,xe.normalize();const z=new k(0,1,0);s=M.position.clone(),(l||c||u||h)&&(l?h?s.addScaledVector(xe.applyAxisAngle(z,7*Math.PI/4),f*ge):u?s.addScaledVector(xe.applyAxisAngle(z,Math.PI/4),f*ge):c||s.addScaledVector(xe.applyAxisAngle(z,2*Math.PI),f*ge):c?h?s.addScaledVector(xe.applyAxisAngle(z,5*Math.PI/4),f*ge):u?s.addScaledVector(xe.applyAxisAngle(z,3*Math.PI/4),f*ge):s.addScaledVector(xe.applyAxisAngle(z,Math.PI),f*ge):h?u||s.addScaledVector(xe.applyAxisAngle(z,3*Math.PI/2),f*ge):u&&s.addScaledVector(xe.applyAxisAngle(z,Math.PI/2),f*ge),s.y=1,K(s),M.position.y=1)}function K(ge){const xe=Date.now();xe-r>50&&(oo(`/topic/ingame/${i}/playerPosition`,{playerName:sessionStorage.getItem("myName"),posX:ge.x,posY:ge.z,angle:M.rotation.z}),r=xe)}function se(){M.position.copy(s)}function j(ge){console.log("INSIDE RENDER: ",ge);const xe=new Ec,z=Math.PI;Array.from(o.keys()).filter(pe=>!ge.map(U=>U.playerName).includes(pe)).forEach(pe=>{const U=o.get(pe);if(U){const re=b.getObjectById(U);o.delete(pe),re&&b.remove(re)}}),ge.forEach(async pe=>{if(!o.has(pe.playerName)&&!a.get(pe.playerName)){const U=new URL("/assets/snackman-DBG9Bl-Z.glb",import.meta.url).href;a.set(pe.playerName,!0),xe.load(U,re=>{const G=re.scene;G.scale.set(.5,.5,.5),o.set(pe.playerName,G.id),b.add(G),G.position.set(pe.x,1,pe.y),G.rotation.y=pe.angle+z,a.delete(pe.playerName)})}else{const U=o.get(pe.playerName);if(U){const re=b.getObjectById(U);if(re){const G=new oi,ue=new k;G.getSize(ue),G.expandByObject(re),re.position.set(pe.x-ue.x/2,1,pe.y),re.rotation.y=pe.angle+z}}}})}function ve(ge){const xe=new Ec;ge.forEach(z=>{xe.load("/src/assets/game/realistic/chicken/chicken.gltf",de=>{const pe=de.scene;pe.position.set(z.x,1,z.y),pe.scale.set(.03,.03,.03),pe.rotateY(z.angle),b.add(pe)})})}function ye(ge){const xe=new Hs(1,1,1),z=new Hs(1,2,1),de=new Ou().load(IR),pe=new Ou().load(DR),U=new yr({map:de}),re=new yr({map:pe}),G=.5,ue=new Ec;let Ee=0;ge.forEach(Ne=>{for(let w=0;w<Ne.length;w++)switch(Ne[w]){case"*":const S=new At(z,re);S.position.set(Ee+G,1.5,w+G),b.add(S);break;case" ":const W=new At(xe,U);W.position.set(Ee+G,0,w+G),b.add(W);break;case"E":const te=new At(xe,U);te.position.set(Ee+G,0,w+G),b.add(te);const q=Math.random()>.5?new URL("/assets/strawberry_shortcake-CRiMLrd4.glb",import.meta.url).href:new URL("@/assets/game/items/E/strawberry_shortcake/chocolate_bar.glb",import.meta.url).href;ue.load(q,le=>{console.log("Model geladen:",q);const Z=le.scene;q.includes("chocolate_bar")?(Z.position.set(Ee-2+G,.75,w+G),Z.scale.set(.2,.2,.2)):(Z.position.set(Ee-2+G,.5,w+G),Z.scale.set(.5,.5,.5)),b.add(Z),console.log(`Modell (E) Position: x=${Z.position.x}, y=${Z.position.y}, z=${Z.position.z}`)},void 0,le=>{console.error("Fehler beim Laden des Modells:",le)});break;case"D":const Y=new At(xe,U);Y.position.set(Ee+G,0,w+G),b.add(Y);const he=Math.random()>.5?new URL("/assets/cottoncandy-CsV13UEF.glb",import.meta.url).href:new URL("/assets/popcorn-CskqXeha.glb",import.meta.url).href;ue.load(he,le=>{console.log("Model geladen:",he);const Z=le.scene;he.includes("popcorn")?(Z.position.set(Ee-2+G,.75,w+G),Z.scale.set(.2,.2,.2)):(Z.position.set(Ee-2+G,.5,w+G),Z.scale.set(.5,.5,.5)),b.add(Z),console.log(`Modell (D) Position: x=${Z.position.x}, y=${Z.position.y}, z=${Z.position.z}`)},void 0,le=>{console.error("Fehler beim Laden des Modells:",le)});break;case"C":const ie=new At(xe,U);ie.position.set(Ee+G,0,w+G),b.add(ie);const E=Math.random()>.5?"/src/assets/game/items/C/candy_cane/candycane.glb":"/src/assets/game/items/C/chips/chips.glb";ue.load(E,le=>{console.log("Model geladen:",E);const Z=le.scene;E.includes("candycane")?(Z.position.set(Ee-2+G,1,w+G),Z.scale.set(.1,.1,.1)):(Z.position.set(Ee-3+G,1,w+G),Z.scale.set(.5,.5,.3)),b.add(Z),console.log(`Modell (C) Position: x=${Z.position.x}, y=${Z.position.y}, z=${Z.position.z}`)},void 0,le=>{console.error("Fehler beim Laden des Modells:",le)});break;case"B":const y=new At(xe,U);y.position.set(Ee+G,0,w+G),b.add(y);const N=Math.random()>.5?"/src/assets/game/items/B/apple/apple.glb":"/src/assets/game/items/B/banana/banana.glb";ue.load(N,le=>{console.log("Model geladen:",N);const Z=le.scene;N.includes("apple")?(Z.position.set(Ee-3+G,.75,w+G),Z.scale.set(.005,.005,.005)):(Z.position.set(Ee-3+G,.5,w+G),Z.scale.set(.2,.2,.2)),b.add(Z),console.log(`Modell (B) Position: x=${Z.position.x}, y=${Z.position.y}, z=${Z.position.z}`)},void 0,le=>{console.error("Fehler beim Laden des Modells:",le)});break;case"A":const B=new At(xe,U);B.position.set(Ee+G,0,w+G),b.add(B);const $=Math.random()>.5?new URL("/assets/ginger-G1bYdpJo.glb",import.meta.url).href:new URL("/assets/lemon-BB0JWpls.glb",import.meta.url).href;ue.load($,le=>{console.log("Model geladen:",$);const Z=le.scene;$.includes("ginger")?(Z.position.set(Ee-3+G,1,w-1+G),Z.scale.set(.2,.2,.2)):(Z.position.set(Ee-3+G,1,w+G),Z.scale.set(.5,.5,.5)),b.add(Z),console.log(`Modell (A) Position: x=${Z.position.x}, y=${Z.position.y}, z=${Z.position.z}`)},void 0,le=>{console.error("Fehler beim Laden des Modells:",le)});break;default:const X=new At(xe,U);X.position.set(Ee+G,0,w+G),b.add(X)}Ee++})}async function Pe(ge){let xe=[];ge.forEach(z=>{sessionStorage.getItem("myName")!==z.name&&xe.push({playerName:z.name,x:z.posX,y:z.posY,angle:z.angleInDegrees})}),j(xe)}return ni(async()=>{var xe;try{await e.fetchGameStatus()}catch(z){console.error("Error fetching game status:",z)}e.gameState.gamedata.chickens===null?(m.value=[],console.log("Keine Positionsdaten weil Chicken Array leer")):(m.value=e.gameState.gamedata.chickens,console.log("Chickens-Positionsdaten: "+m.value)),yo(`/ingame/playerPositions/${i}`,async z=>{switch(z.type){case"playerPosition":console.log("FROM PLAYER POSITON: ",z.feedback),await Pe(z.feedback);break}}),yo(`/ingame/${i}`,async z=>{switch(console.log(z.type),z.type){case"playerMoveValidation":z.feedback.playerName===sessionStorage.getItem("myName")&&se();break}}),C.value&&C.value.appendChild(D.domElement);const ge=(xe=e.gameState.gamedata.playmap)==null?void 0:xe.map;ge?ye(ge):console.error("No map found"),ve(m.value),J()}),(ge,xe)=>(be(),De(nt,null,[ne("div",{ref_key:"threeContainer",ref:C,id:"app",class:"gameContainer relative z-20"},null,512),ne("div",pC,[ne("div",mC,[_.value.length>0?(be(),De("div",gC,Pt(_.value.join(", ")),1)):(be(),De("div",_C))]),ne("div",vC,[ne("div",xC,[(be(!0),De(nt,null,ii(g.value,z=>(be(),De("div",{key:z},[z<=d.value?(be(),De("img",yC)):(be(),De("img",SC))]))),128))])])])],64))}}),EC=["min","max"],TC=["min","max"],AC=["onClick","data-value"],wC=Lt({__name:"MapCreator",setup(n){const e=uh();return ni(async()=>{await e.fetchMaps(),console.log("Aktuelle Maps:",e.mapsDTD.maps)}),ni(async()=>{await e.fetchGridLimits(),console.log("grid min:",e.minGridSize),console.log("grid max:",e.maxGridSize)}),(t,i)=>(be(),De(nt,null,[ne("div",null,[i[5]||(i[5]=ne("h1",null,"Map Creator",-1)),i[6]||(i[6]=ne("p",null,"Gib einen Namen für die Map ein:",-1)),bn(ne("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=s=>Ce(e).mapName=s),placeholder:"Map Name"},null,512),[[ei,Ce(e).mapName]]),i[7]||(i[7]=ne("p",null,"Definiere die Größe des Spielfelds:",-1)),i[8]||(i[8]=ne("p",null," Zeilen:",-1)),bn(ne("input",{type:"number","onUpdate:modelValue":i[1]||(i[1]=s=>Ce(e).rows=s),placeholder:"Anzahl der Reihen",min:Ce(e).minGridSize,max:Ce(e).maxGridSize},null,8,EC),[[ei,Ce(e).rows]]),i[9]||(i[9]=ne("p",null,"Spalten:",-1)),bn(ne("input",{type:"number","onUpdate:modelValue":i[2]||(i[2]=s=>Ce(e).cols=s),placeholder:"Anzahl der Spalten",min:Ce(e).minGridSize,max:Ce(e).maxGridSize},null,8,TC),[[ei,Ce(e).cols]]),ne("button",{class:"buttons-top-bottom",onClick:i[3]||(i[3]=(...s)=>Ce(e).createGrid&&Ce(e).createGrid(...s))},"Spielfeld erstellen")]),i[10]||(i[10]=ne("br",null,null,-1)),i[11]||(i[11]=ne("br",null,null,-1)),Ce(e).grid.length>0?(be(),De("div",{key:0,class:"grid-container",style:Br({gridTemplateColumns:`repeat(${Ce(e).cols}, 50px)`,gridTemplateRows:`repeat(${Ce(e).rows}, 50px)`})},[(be(!0),De(nt,null,ii(Ce(e).grid.flat(),(s,r)=>(be(),De("div",{key:"cell-"+r,class:"grid-cell",onClick:o=>Ce(e).updateCell(Math.floor(r/Ce(e).cols),r%Ce(e).cols),"data-value":s},Pt(s),9,AC))),128))],4)):Mt("",!0),i[12]||(i[12]=ne("br",null,null,-1)),i[13]||(i[13]=ne("br",null,null,-1)),ne("button",{class:"buttons-top-bottom",onClick:i[4]||(i[4]=(...s)=>Ce(e).saveMap&&Ce(e).saveMap(...s))},"Create")],64))}}),RC=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},CC=RC(wC,[["__scopeId","data-v-5a962335"]]),PC={key:0},LC={key:0,class:"h-screen bg-green-800 flex flex-col items-center justify-center"},IC={class:"text-3xl text-zinc-300 mb-8"},DC={class:"font-bold"},NC={key:1,class:"h-screen bg-red-800 flex flex-col items-center justify-center"},UC={class:"text-3xl text-zinc-300 mb-8"},OC={class:"font-bold"},FC={key:1},BC={key:0,class:"h-screen bg-green-800 flex flex-col items-center justify-center"},kC={class:"text-3xl text-zinc-300 mb-8"},HC={class:"font-bold"},VC={key:1,class:"h-screen bg-red-800 flex flex-col items-center justify-center"},zC={class:"text-3xl text-zinc-300 mb-8"},GC={class:"font-bold"},WC=Lt({__name:"GameEnd",setup(n){const e=ah(),t=rt({name:"TestPlayer",email:"test@example.com",password:"testpassword123",playertype:vl.GUEST,playerrole:gn.SNACKMAN}),i=rt({snackman:{life:0,nutriscore:100},ghost:{touchcount:0}});function s(){const c=e.params.id;c?tl.push({name:"lobbyWithId",params:{id:c}}):console.error("Lobby ID not found")}const r=bt(()=>i.value.snackman.life>0||i.value.snackman.nutriscore>=100),o=bt(()=>i.value.snackman.life<=0&&i.value.snackman.nutriscore<100),a=bt(()=>o.value),l=bt(()=>r.value);return(c,u)=>(be(),De(nt,null,[t.value.playerrole===Ce(gn).GHOST?(be(),De("div",PC,[a.value?(be(),De("div",LC,[u[1]||(u[1]=ne("h1",{class:"text-4xl font-bold text-white mb-6"},"Victory!",-1)),u[2]||(u[2]=ne("p",{class:"text-3xl text-zinc-300 mb-4"}," As the Ghost, you won! The Snackman has no lives left. ",-1)),ne("p",IC,[u[0]||(u[0]=Qn(" Touchcount: ")),ne("span",DC,Pt(i.value.ghost.touchcount),1)]),ne("button",{class:"bg-yellow-500 text-zinc-900 px-6 py-3 rounded-lg hover:bg-yellow-600 transition",onClick:s}," Back to lobby ")])):Mt("",!0),l.value?(be(),De("div",NC,[u[4]||(u[4]=ne("h1",{class:"text-4xl font-bold text-white mb-6"},"Defeat!",-1)),u[5]||(u[5]=ne("p",{class:"text-3xl text-zinc-300 mb-4"}," As the Ghost, you lost! ",-1)),ne("p",UC,[u[3]||(u[3]=Qn(" Touchcount: ")),ne("span",OC,Pt(i.value.ghost.touchcount),1)]),ne("button",{class:"bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition",onClick:s}," Back to lobby ")])):Mt("",!0)])):Mt("",!0),t.value.playerrole===Ce(gn).SNACKMAN?(be(),De("div",FC,[r.value?(be(),De("div",BC,[u[7]||(u[7]=ne("h1",{class:"text-4xl font-bold text-white mb-6"},"Victory!",-1)),u[8]||(u[8]=ne("p",{class:"text-3xl text-zinc-300 mb-4"}," As the Snackman, you won! ",-1)),ne("p",kC,[u[6]||(u[6]=Qn(" Nutriscore: ")),ne("span",HC,Pt(i.value.snackman.nutriscore),1)]),ne("button",{class:"bg-yellow-500 text-zinc-900 px-6 py-3 rounded-lg hover:bg-yellow-600 transition",onClick:s}," Back to lobby ")])):Mt("",!0),o.value?(be(),De("div",VC,[u[10]||(u[10]=ne("h1",{class:"text-4xl font-bold text-white mb-6"},"Defeat!",-1)),u[11]||(u[11]=ne("p",{class:"text-3xl text-zinc-300 mb-4"}," As the Snackman, you lost! Your lives have dropped to 0. ",-1)),ne("p",zC,[u[9]||(u[9]=Qn(" Nutriscore: ")),ne("span",GC,Pt(i.value.snackman.nutriscore),1)]),ne("button",{class:"bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition",onClick:s}," Back to lobby ")])):Mt("",!0)])):Mt("",!0)],64))}}),XC={key:0},$C={key:1},jC=Lt({__name:"TestView",setup(n){const e=uh(),{mapsDTD:t}=uy(e);return ni(async()=>{console.log("Selected Map at Mount:",e.mapsDTD.selectedMap),e.mapsDTD.selectedMap?(await e.fetchMaps(),console.log("Map Data Fetched:",t.value)):console.error("No selected map.")}),(i,s)=>{var r;return be(),De("div",null,[ne("h1",null,"Selected Map: "+Pt(Ce(e).mapsDTD.selectedMap),1),Ce(e).mapsDTD.maps.length>0?(be(),De("div",XC,[s[0]||(s[0]=ne("p",null,"Map Data:",-1)),ne("ul",null,[(be(!0),De(nt,null,ii((r=Ce(t).selectedMap)==null?void 0:r.map,(o,a)=>(be(),De("li",{key:a},[(be(!0),De(nt,null,ii(o,(l,c)=>(be(),De("div",{key:c},Pt(l),1))),128))]))),128))])])):(be(),De("p",$C,"No map data available"))])}}}),tl=ey({history:Px("/"),routes:[{path:"/",redirect:"/index"},{path:"/index",name:"index",component:Ry},{path:"/lobby/:id",name:"lobbyWithId",component:gS},{path:"/lobby",name:"lobbyList",component:Vy},{path:"/lobby/:id/ingame",name:"game",component:bC},{path:"/createmap",name:"createmap",component:CC},{path:"/:id/GameEnd",name:"GameEnd",component:WC},{path:"/test-view",name:"test-view",component:jC}]});var qC=Object.defineProperty,gp=Object.getOwnPropertySymbols,KC=Object.prototype.hasOwnProperty,YC=Object.prototype.propertyIsEnumerable,_p=(n,e,t)=>e in n?qC(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Kg=(n,e)=>{for(var t in e||(e={}))KC.call(e,t)&&_p(n,t,e[t]);if(gp)for(var t of gp(e))YC.call(e,t)&&_p(n,t,e[t]);return n},Tl=n=>typeof n=="function",Al=n=>typeof n=="string",Yg=n=>Al(n)&&n.trim().length>0,ZC=n=>typeof n=="number",Ls=n=>typeof n>"u",Bo=n=>typeof n=="object"&&n!==null,JC=n=>ri(n,"tag")&&Yg(n.tag),Zg=n=>window.TouchEvent&&n instanceof TouchEvent,Jg=n=>ri(n,"component")&&Qg(n.component),QC=n=>Tl(n)||Bo(n),Qg=n=>!Ls(n)&&(Al(n)||QC(n)||Jg(n)),vp=n=>Bo(n)&&["height","width","right","left","top","bottom"].every(e=>ZC(n[e])),ri=(n,e)=>(Bo(n)||Tl(n))&&e in n,e1=(n=>()=>n++)(0);function Cc(n){return Zg(n)?n.targetTouches[0].clientX:n.clientX}function xp(n){return Zg(n)?n.targetTouches[0].clientY:n.clientY}var t1=n=>{Ls(n.remove)?n.parentNode&&n.parentNode.removeChild(n):n.remove()},Xo=n=>Jg(n)?Xo(n.component):JC(n)?Lt({render(){return n}}):typeof n=="string"?n:Qe(Ce(n)),n1=n=>{if(typeof n=="string")return n;const e=ri(n,"props")&&Bo(n.props)?n.props:{},t=ri(n,"listeners")&&Bo(n.listeners)?n.listeners:{};return{component:Xo(n),props:e,listeners:t}},i1=()=>typeof window<"u",Ph=class{constructor(){this.allHandlers={}}getHandlers(n){return this.allHandlers[n]||[]}on(n,e){const t=this.getHandlers(n);t.push(e),this.allHandlers[n]=t}off(n,e){const t=this.getHandlers(n);t.splice(t.indexOf(e)>>>0,1)}emit(n,e){this.getHandlers(n).forEach(i=>i(e))}},s1=n=>["on","off","emit"].every(e=>ri(n,e)&&Tl(n[e])),hn;(function(n){n.SUCCESS="success",n.ERROR="error",n.WARNING="warning",n.INFO="info",n.DEFAULT="default"})(hn||(hn={}));var nl;(function(n){n.TOP_LEFT="top-left",n.TOP_CENTER="top-center",n.TOP_RIGHT="top-right",n.BOTTOM_LEFT="bottom-left",n.BOTTOM_CENTER="bottom-center",n.BOTTOM_RIGHT="bottom-right"})(nl||(nl={}));var fn;(function(n){n.ADD="add",n.DISMISS="dismiss",n.UPDATE="update",n.CLEAR="clear",n.UPDATE_DEFAULTS="update_defaults"})(fn||(fn={}));var Bn="Vue-Toastification",Nn={type:{type:String,default:hn.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},e_={type:Nn.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},ka={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:Nn.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},ku={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},t_={transition:{type:[Object,String],default:`${Bn}__bounce`}},r1={position:{type:String,default:nl.TOP_RIGHT},draggable:Nn.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:Nn.trueBoolean,pauseOnHover:Nn.trueBoolean,closeOnClick:Nn.trueBoolean,timeout:ku.timeout,hideProgressBar:ku.hideProgressBar,toastClassName:Nn.classNames,bodyClassName:Nn.classNames,icon:e_.customIcon,closeButton:ka.component,closeButtonClassName:ka.classNames,showCloseButtonOnHover:ka.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new Ph}},o1={id:{type:[String,Number],required:!0,default:0},type:Nn.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},a1={container:{type:[Object,Function],default:()=>document.body},newestOnTop:Nn.trueBoolean,maxToasts:{type:Number,default:20},transition:t_.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:n=>n},filterToasts:{type:Function,default:n=>n},containerClassName:Nn.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},Li={CORE_TOAST:r1,TOAST:o1,CONTAINER:a1,PROGRESS_BAR:ku,ICON:e_,TRANSITION:t_,CLOSE_BUTTON:ka},n_=Lt({name:"VtProgressBar",props:Li.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${Bn}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function l1(n,e){return be(),De("div",{style:Br(n.style),class:Tn(n.cpClass)},null,6)}n_.render=l1;var c1=n_,i_=Lt({name:"VtCloseButton",props:Li.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?Xo(this.component):"button"},classes(){const n=[`${Bn}__close-button`];return this.showOnHover&&n.push("show-on-hover"),n.concat(this.classNames)}}}),u1=Qn(" × ");function h1(n,e){return be(),pn(Qu(n.buttonComponent),dl({"aria-label":n.ariaLabel,class:n.classes},n.$attrs),{default:Ii(()=>[u1]),_:1},16,["aria-label","class"])}i_.render=h1;var f1=i_,s_={},d1={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},p1=ne("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),m1=[p1];function g1(n,e){return be(),De("svg",d1,m1)}s_.render=g1;var _1=s_,r_={},v1={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},x1=ne("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),y1=[x1];function S1(n,e){return be(),De("svg",v1,y1)}r_.render=S1;var yp=r_,o_={},M1={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},b1=ne("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),E1=[b1];function T1(n,e){return be(),De("svg",M1,E1)}o_.render=T1;var A1=o_,a_={},w1={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},R1=ne("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),C1=[R1];function P1(n,e){return be(),De("svg",w1,C1)}a_.render=P1;var L1=a_,l_=Lt({name:"VtIcon",props:Li.ICON,computed:{customIconChildren(){return ri(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return Al(this.customIcon)?this.trimValue(this.customIcon):ri(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return ri(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:Qg(this.customIcon)?Xo(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[hn.DEFAULT]:yp,[hn.INFO]:yp,[hn.SUCCESS]:_1,[hn.ERROR]:L1,[hn.WARNING]:A1}[this.type]},iconClasses(){const n=[`${Bn}__icon`];return this.hasCustomIcon?n.concat(this.customIconClass):n}},methods:{trimValue(n,e=""){return Yg(n)?n.trim():e}}});function I1(n,e){return be(),pn(Qu(n.component),{class:Tn(n.iconClasses)},{default:Ii(()=>[Qn(Pt(n.customIconChildren),1)]),_:1},8,["class"])}l_.render=I1;var D1=l_,c_=Lt({name:"VtToast",components:{ProgressBar:c1,CloseButton:f1,Icon:D1},inheritAttrs:!1,props:Object.assign({},Li.CORE_TOAST,Li.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const n=[`${Bn}__toast`,`${Bn}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&n.push("disable-transition"),this.rtl&&n.push(`${Bn}__toast--rtl`),n},bodyClasses(){return[`${Bn}__toast-${Al(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return vp(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:ri,getVueComponentFromObj:Xo,closeToast(){this.eventBus.emit(fn.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const n=this.$el;n.addEventListener("touchstart",this.onDragStart,{passive:!0}),n.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const n=this.$el;n.removeEventListener("touchstart",this.onDragStart),n.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(n){this.beingDragged=!0,this.dragPos={x:Cc(n),y:xp(n)},this.dragStart=Cc(n),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(n){this.beingDragged&&(n.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:Cc(n),y:xp(n)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,vp(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),N1=["role"];function U1(n,e){const t=po("Icon"),i=po("CloseButton"),s=po("ProgressBar");return be(),De("div",{class:Tn(n.classes),style:Br(n.draggableStyle),onClick:e[0]||(e[0]=(...r)=>n.clickHandler&&n.clickHandler(...r)),onMouseenter:e[1]||(e[1]=(...r)=>n.hoverPause&&n.hoverPause(...r)),onMouseleave:e[2]||(e[2]=(...r)=>n.hoverPlay&&n.hoverPlay(...r))},[n.icon?(be(),pn(t,{key:0,"custom-icon":n.icon,type:n.type},null,8,["custom-icon","type"])):Mt("v-if",!0),ne("div",{role:n.accessibility.toastRole||"alert",class:Tn(n.bodyClasses)},[typeof n.content=="string"?(be(),De(nt,{key:0},[Qn(Pt(n.content),1)],2112)):(be(),pn(Qu(n.getVueComponentFromObj(n.content)),dl({key:1,"toast-id":n.id},n.hasProp(n.content,"props")?n.content.props:{},Ev(n.hasProp(n.content,"listeners")?n.content.listeners:{}),{onCloseToast:n.closeToast}),null,16,["toast-id","onCloseToast"]))],10,N1),n.closeButton?(be(),pn(i,{key:1,component:n.closeButton,"class-names":n.closeButtonClassName,"show-on-hover":n.showCloseButtonOnHover,"aria-label":n.accessibility.closeButtonLabel,onClick:K0(n.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):Mt("v-if",!0),n.timeout?(be(),pn(s,{key:2,"is-running":n.isRunning,"hide-progress-bar":n.hideProgressBar,timeout:n.timeout,onCloseToast:n.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):Mt("v-if",!0)],38)}c_.render=U1;var O1=c_,u_=Lt({name:"VtTransition",props:Li.TRANSITION,emits:["leave"],methods:{hasProp:ri,leave(n){n instanceof HTMLElement&&(n.style.left=n.offsetLeft+"px",n.style.top=n.offsetTop+"px",n.style.width=getComputedStyle(n).width,n.style.position="absolute")}}});function F1(n,e){return be(),pn(k0,{tag:"div","enter-active-class":n.transition.enter?n.transition.enter:`${n.transition}-enter-active`,"move-class":n.transition.move?n.transition.move:`${n.transition}-move`,"leave-active-class":n.transition.leave?n.transition.leave:`${n.transition}-leave-active`,onLeave:n.leave},{default:Ii(()=>[Uc(n.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}u_.render=F1;var B1=u_,h_=Lt({name:"VueToastification",devtools:{hide:!0},components:{Toast:O1,VtTransition:B1},props:Object.assign({},Li.CORE_TOAST,Li.CONTAINER,Li.TRANSITION),data(){return{count:0,positions:Object.values(nl),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const n=this.eventBus;n.on(fn.ADD,this.addToast),n.on(fn.CLEAR,this.clearToasts),n.on(fn.DISMISS,this.dismissToast),n.on(fn.UPDATE,this.updateToast),n.on(fn.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(n){Tl(n)&&(n=await n()),t1(this.$el),n.appendChild(this.$el)},setToast(n){Ls(n.id)||(this.toasts[n.id]=n)},addToast(n){n.content=n1(n.content);const e=Object.assign({},this.defaults,n.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[n.type],n),t=this.defaults.filterBeforeCreate(e,this.toastArray);t&&this.setToast(t)},dismissToast(n){const e=this.toasts[n];!Ls(e)&&!Ls(e.onClose)&&e.onClose(),delete this.toasts[n]},clearToasts(){Object.keys(this.toasts).forEach(n=>{this.dismissToast(n)})},getPositionToasts(n){const e=this.filteredToasts.filter(t=>t.position===n).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(n){Ls(n.container)||this.setup(n.container),this.defaults=Object.assign({},this.defaults,n)},updateToast({id:n,options:e,create:t}){this.toasts[n]?(e.timeout&&e.timeout===this.toasts[n].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[n],e))):t&&this.addToast(Object.assign({},{id:n},e))},getClasses(n){return[`${Bn}__container`,n].concat(this.defaults.containerClassName)}}});function k1(n,e){const t=po("Toast"),i=po("VtTransition");return be(),De("div",null,[(be(!0),De(nt,null,ii(n.positions,s=>(be(),De("div",{key:s},[Nt(i,{transition:n.defaults.transition,class:Tn(n.getClasses(s))},{default:Ii(()=>[(be(!0),De(nt,null,ii(n.getPositionToasts(s),r=>(be(),pn(t,dl({key:r.id},r),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}h_.render=k1;var H1=h_,Sp=(n={},e=!0)=>{const t=n.eventBus=n.eventBus||new Ph;e&&kr(()=>{const r=zm(H1,Kg({},n)),o=r.mount(document.createElement("div")),a=n.onMounted;if(Ls(a)||a(o,r),n.shareAppContext){const l=n.shareAppContext;l===!0?console.warn(`[${Bn}] App to share context with was not provided.`):(r._context.components=l._context.components,r._context.directives=l._context.directives,r._context.mixins=l._context.mixins,r._context.provides=l._context.provides,r.config.globalProperties=l.config.globalProperties)}});const i=(r,o)=>{const a=Object.assign({},{id:e1(),type:hn.DEFAULT},o,{content:r});return t.emit(fn.ADD,a),a.id};i.clear=()=>t.emit(fn.CLEAR,void 0),i.updateDefaults=r=>{t.emit(fn.UPDATE_DEFAULTS,r)},i.dismiss=r=>{t.emit(fn.DISMISS,r)};function s(r,{content:o,options:a},l=!1){const c=Object.assign({},a,{content:o});t.emit(fn.UPDATE,{id:r,options:c,create:l})}return i.update=s,i.success=(r,o)=>i(r,Object.assign({},o,{type:hn.SUCCESS})),i.info=(r,o)=>i(r,Object.assign({},o,{type:hn.INFO})),i.error=(r,o)=>i(r,Object.assign({},o,{type:hn.ERROR})),i.warning=(r,o)=>i(r,Object.assign({},o,{type:hn.WARNING})),i},V1=()=>{const n=()=>console.warn(`[${Bn}] This plugin does not support SSR!`);return new Proxy(n,{get(){return n}})};function z1(n){return i1()?s1(n)?Sp({eventBus:n},!1):Sp(n,!0):V1()}var G1=Symbol("VueToastification"),W1=new Ph,X1=(n,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=n);const t=z1(Kg({eventBus:W1},e));n.provide(G1,t)},$1=X1;const j1=sy(),wl=zm(ny);wl.use(j1);wl.use(tl);wl.use($1);wl.mount("#app");
