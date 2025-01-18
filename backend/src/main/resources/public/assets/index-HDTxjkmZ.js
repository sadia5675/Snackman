(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ih(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ct={},Er=[],hi=()=>{},T_=()=>!1,_l=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),sh=n=>n.startsWith("onUpdate:"),Lt=Object.assign,rh=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},A_=Object.prototype.hasOwnProperty,mt=(n,e)=>A_.call(n,e),ze=Array.isArray,Tr=n=>qo(n)==="[object Map]",Kr=n=>qo(n)==="[object Set]",Kh=n=>qo(n)==="[object Date]",qe=n=>typeof n=="function",It=n=>typeof n=="string",Jn=n=>typeof n=="symbol",St=n=>n!==null&&typeof n=="object",Dp=n=>(St(n)||qe(n))&&qe(n.then)&&qe(n.catch),Np=Object.prototype.toString,qo=n=>Np.call(n),w_=n=>qo(n).slice(8,-1),Up=n=>qo(n)==="[object Object]",oh=n=>It(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,So=ih(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vl=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},R_=/-(\w)/g,Cn=vl(n=>n.replace(R_,(e,t)=>t?t.toUpperCase():"")),C_=/\B([A-Z])/g,_s=vl(n=>n.replace(C_,"-$1").toLowerCase()),xl=vl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ha=vl(n=>n?`on${xl(n)}`:""),vn=(n,e)=>!Object.is(n,e),Va=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Op=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},el=n=>{const e=parseFloat(n);return isNaN(e)?n:e},P_=n=>{const e=It(n)?Number(n):NaN;return isNaN(e)?n:e};let Yh;const yl=()=>Yh||(Yh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yr(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=It(i)?N_(i):Yr(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(It(n)||St(n))return n}const L_=/;(?![^(]*\))/g,I_=/:([^]+)/,D_=/\/\*[^]*?\*\//g;function N_(n){const e={};return n.replace(D_,"").split(L_).forEach(t=>{if(t){const i=t.split(I_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Tn(n){let e="";if(It(n))e=n;else if(ze(n))for(let t=0;t<n.length;t++){const i=Tn(n[t]);i&&(e+=i+" ")}else if(St(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const U_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",O_=ih(U_);function Fp(n){return!!n||n===""}function F_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Ko(n[i],e[i]);return t}function Ko(n,e){if(n===e)return!0;let t=Kh(n),i=Kh(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Jn(n),i=Jn(e),t||i)return n===e;if(t=ze(n),i=ze(e),t||i)return t&&i?F_(n,e):!1;if(t=St(n),i=St(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ko(n[o],e[o]))return!1}}return String(n)===String(e)}function ah(n,e){return n.findIndex(t=>Ko(t,e))}const kp=n=>!!(n&&n.__v_isRef===!0),lt=n=>It(n)?n:n==null?"":ze(n)||St(n)&&(n.toString===Np||!qe(n.toString))?kp(n)?lt(n.value):JSON.stringify(n,Bp,2):String(n),Bp=(n,e)=>kp(e)?Bp(n,e.value):Tr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Wl(i,r)+" =>"]=s,t),{})}:Kr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Wl(t))}:Jn(e)?Wl(e):St(e)&&!ze(e)&&!Up(e)?String(e):e,Wl=(n,e="")=>{var t;return Jn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ln;class Hp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ln,!e&&ln&&(this.index=(ln.scopes||(ln.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=ln;try{return ln=this,e()}finally{ln=t}}}on(){ln=this}off(){ln=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Vp(n){return new Hp(n)}function zp(){return ln}function k_(n,e=!1){ln&&ln.cleanups.push(n)}let Et;const Xl=new WeakSet;class Gp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ln&&ln.active&&ln.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xl.has(this)&&(Xl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zh(this),$p(this);const e=Et,t=Yn;Et=this,Yn=!0;try{return this.fn()}finally{jp(this),Et=e,Yn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)uh(e);this.deps=this.depsTail=void 0,Zh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$c(this)&&this.run()}get dirty(){return $c(this)}}let Wp=0,bo,Mo;function Xp(n,e=!1){if(n.flags|=8,e){n.next=Mo,Mo=n;return}n.next=bo,bo=n}function lh(){Wp++}function ch(){if(--Wp>0)return;if(Mo){let e=Mo;for(Mo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;bo;){let e=bo;for(bo=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function $p(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function jp(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),uh(i),B_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function $c(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(qp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function qp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Do))return;n.globalVersion=Do;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!$c(n)){n.flags&=-3;return}const t=Et,i=Yn;Et=n,Yn=!0;try{$p(n);const s=n.fn(n._value);(e.version===0||vn(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Et=t,Yn=i,jp(n),n.flags&=-3}}function uh(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)uh(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function B_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Yn=!0;const Kp=[];function vs(){Kp.push(Yn),Yn=!1}function xs(){const n=Kp.pop();Yn=n===void 0?!0:n}function Zh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let Do=0;class H_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Sl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Et||!Yn||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new H_(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,Yp(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=i)}return t}trigger(e){this.version++,Do++,this.notify(e)}notify(e){lh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ch()}}}function Yp(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Yp(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const tl=new WeakMap,zs=Symbol(""),jc=Symbol(""),No=Symbol("");function en(n,e,t){if(Yn&&Et){let i=tl.get(n);i||tl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Sl),s.map=i,s.key=t),s.track()}}function Pi(n,e,t,i,s,r){const o=tl.get(n);if(!o){Do++;return}const a=l=>{l&&l.trigger()};if(lh(),e==="clear")o.forEach(a);else{const l=ze(n),c=l&&oh(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===No||!Jn(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(No)),e){case"add":l?c&&a(o.get("length")):(a(o.get(zs)),Tr(n)&&a(o.get(jc)));break;case"delete":l||(a(o.get(zs)),Tr(n)&&a(o.get(jc)));break;case"set":Tr(n)&&a(o.get(zs));break}}ch()}function V_(n,e){const t=tl.get(n);return t&&t.get(e)}function er(n){const e=nt(n);return e===n?e:(en(e,"iterate",No),Fn(n)?e:e.map(tn))}function bl(n){return en(n=nt(n),"iterate",No),n}const z_={__proto__:null,[Symbol.iterator](){return $l(this,Symbol.iterator,tn)},concat(...n){return er(this).concat(...n.map(e=>ze(e)?er(e):e))},entries(){return $l(this,"entries",n=>(n[1]=tn(n[1]),n))},every(n,e){return xi(this,"every",n,e,void 0,arguments)},filter(n,e){return xi(this,"filter",n,e,t=>t.map(tn),arguments)},find(n,e){return xi(this,"find",n,e,tn,arguments)},findIndex(n,e){return xi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return xi(this,"findLast",n,e,tn,arguments)},findLastIndex(n,e){return xi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return xi(this,"forEach",n,e,void 0,arguments)},includes(...n){return jl(this,"includes",n)},indexOf(...n){return jl(this,"indexOf",n)},join(n){return er(this).join(n)},lastIndexOf(...n){return jl(this,"lastIndexOf",n)},map(n,e){return xi(this,"map",n,e,void 0,arguments)},pop(){return io(this,"pop")},push(...n){return io(this,"push",n)},reduce(n,...e){return Jh(this,"reduce",n,e)},reduceRight(n,...e){return Jh(this,"reduceRight",n,e)},shift(){return io(this,"shift")},some(n,e){return xi(this,"some",n,e,void 0,arguments)},splice(...n){return io(this,"splice",n)},toReversed(){return er(this).toReversed()},toSorted(n){return er(this).toSorted(n)},toSpliced(...n){return er(this).toSpliced(...n)},unshift(...n){return io(this,"unshift",n)},values(){return $l(this,"values",tn)}};function $l(n,e,t){const i=bl(n),s=i[e]();return i!==n&&!Fn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const G_=Array.prototype;function xi(n,e,t,i,s,r){const o=bl(n),a=o!==n&&!Fn(n),l=o[e];if(l!==G_[e]){const h=l.apply(n,r);return a?tn(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,tn(h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Jh(n,e,t,i){const s=bl(n);let r=t;return s!==n&&(Fn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,tn(a),l,n)}),s[e](r,...i)}function jl(n,e,t){const i=nt(n);en(i,"iterate",No);const s=i[e](...t);return(s===-1||s===!1)&&dh(t[0])?(t[0]=nt(t[0]),i[e](...t)):s}function io(n,e,t=[]){vs(),lh();const i=nt(n)[e].apply(n,t);return ch(),xs(),i}const W_=ih("__proto__,__v_isRef,__isVue"),Zp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Jn));function X_(n){Jn(n)||(n=String(n));const e=nt(this);return en(e,"has",n),e.hasOwnProperty(n)}class Jp{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?t0:nm:r?tm:em).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ze(e);if(!s){let l;if(o&&(l=z_[t]))return l;if(t==="hasOwnProperty")return X_}const a=Reflect.get(e,t,Ct(e)?e:i);return(Jn(t)?Zp.has(t):W_(t))||(s||en(e,"get",t),r)?a:Ct(a)?o&&oh(t)?a:a.value:St(a)?s?sm(a):ys(a):a}}class Qp extends Jp{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=Xs(r);if(!Fn(i)&&!Xs(i)&&(r=nt(r),i=nt(i)),!ze(e)&&Ct(r)&&!Ct(i))return l?!1:(r.value=i,!0)}const o=ze(e)&&oh(t)?Number(t)<e.length:mt(e,t),a=Reflect.set(e,t,i,Ct(e)?e:s);return e===nt(s)&&(o?vn(i,r)&&Pi(e,"set",t,i):Pi(e,"add",t,i)),a}deleteProperty(e,t){const i=mt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Pi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Jn(t)||!Zp.has(t))&&en(e,"has",t),i}ownKeys(e){return en(e,"iterate",ze(e)?"length":zs),Reflect.ownKeys(e)}}class $_ extends Jp{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const j_=new Qp,q_=new $_,K_=new Qp(!0);const qc=n=>n,oa=n=>Reflect.getPrototypeOf(n);function Y_(n,e,t){return function(...i){const s=this.__v_raw,r=nt(s),o=Tr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?qc:e?Kc:tn;return!e&&en(r,"iterate",l?jc:zs),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function aa(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Z_(n,e){const t={get(s){const r=this.__v_raw,o=nt(r),a=nt(s);n||(vn(s,a)&&en(o,"get",s),en(o,"get",a));const{has:l}=oa(o),c=e?qc:n?Kc:tn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&en(nt(s),"iterate",zs),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=nt(r),a=nt(s);return n||(vn(s,a)&&en(o,"has",s),en(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=nt(a),c=e?qc:n?Kc:tn;return!n&&en(l,"iterate",zs),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Lt(t,n?{add:aa("add"),set:aa("set"),delete:aa("delete"),clear:aa("clear")}:{add(s){!e&&!Fn(s)&&!Xs(s)&&(s=nt(s));const r=nt(this);return oa(r).has.call(r,s)||(r.add(s),Pi(r,"add",s,s)),this},set(s,r){!e&&!Fn(r)&&!Xs(r)&&(r=nt(r));const o=nt(this),{has:a,get:l}=oa(o);let c=a.call(o,s);c||(s=nt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?vn(r,u)&&Pi(o,"set",s,r):Pi(o,"add",s,r),this},delete(s){const r=nt(this),{has:o,get:a}=oa(r);let l=o.call(r,s);l||(s=nt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Pi(r,"delete",s,void 0),c},clear(){const s=nt(this),r=s.size!==0,o=s.clear();return r&&Pi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Y_(s,n,e)}),t}function hh(n,e){const t=Z_(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(mt(t,s)&&s in i?t:i,s,r)}const J_={get:hh(!1,!1)},Q_={get:hh(!1,!0)},e0={get:hh(!0,!1)};const em=new WeakMap,tm=new WeakMap,nm=new WeakMap,t0=new WeakMap;function n0(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function i0(n){return n.__v_skip||!Object.isExtensible(n)?0:n0(w_(n))}function ys(n){return Xs(n)?n:fh(n,!1,j_,J_,em)}function im(n){return fh(n,!1,K_,Q_,tm)}function sm(n){return fh(n,!0,q_,e0,nm)}function fh(n,e,t,i,s){if(!St(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=i0(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Ui(n){return Xs(n)?Ui(n.__v_raw):!!(n&&n.__v_isReactive)}function Xs(n){return!!(n&&n.__v_isReadonly)}function Fn(n){return!!(n&&n.__v_isShallow)}function dh(n){return n?!!n.__v_raw:!1}function nt(n){const e=n&&n.__v_raw;return e?nt(e):n}function ph(n){return!mt(n,"__v_skip")&&Object.isExtensible(n)&&Op(n,"__v_skip",!0),n}const tn=n=>St(n)?ys(n):n,Kc=n=>St(n)?sm(n):n;function Ct(n){return n?n.__v_isRef===!0:!1}function Qe(n){return rm(n,!1)}function s0(n){return rm(n,!0)}function rm(n,e){return Ct(n)?n:new r0(n,e)}class r0{constructor(e,t){this.dep=new Sl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:nt(e),this._value=t?e:tn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Fn(e)||Xs(e);e=i?e:nt(e),vn(e,t)&&(this._rawValue=e,this._value=i?e:tn(e),this.dep.trigger())}}function Te(n){return Ct(n)?n.value:n}const o0={get:(n,e,t)=>e==="__v_raw"?n:Te(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Ct(s)&&!Ct(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function om(n){return Ui(n)?n:new Proxy(n,o0)}class a0{constructor(e){this.__v_isRef=!0,this._value=void 0;const t=this.dep=new Sl,{get:i,set:s}=e(t.track.bind(t),t.trigger.bind(t));this._get=i,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function l0(n){return new a0(n)}function c0(n){const e=ze(n)?new Array(n.length):{};for(const t in n)e[t]=am(n,t);return e}class u0{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return V_(nt(this._object),this._key)}}class h0{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function f0(n,e,t){return Ct(n)?n:qe(n)?new h0(n):St(n)&&arguments.length>1?am(n,e,t):Qe(n)}function am(n,e,t){const i=n[e];return Ct(i)?i:new u0(n,e,t)}class d0{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Sl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Do-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return Xp(this,!0),!0}get value(){const e=this.dep.track();return qp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function p0(n,e,t=!1){let i,s;return qe(n)?i=n:(i=n.get,s=n.set),new d0(i,s,t)}const la={},nl=new WeakMap;let Ns;function m0(n,e=!1,t=Ns){if(t){let i=nl.get(t);i||nl.set(t,i=[]),i.push(n)}}function g0(n,e,t=ct){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=S=>s?S:Fn(S)||s===!1||s===0?Li(S,1):Li(S);let u,h,f,d,g=!1,_=!1;if(Ct(n)?(h=()=>n.value,g=Fn(n)):Ui(n)?(h=()=>c(n),g=!0):ze(n)?(_=!0,g=n.some(S=>Ui(S)||Fn(S)),h=()=>n.map(S=>{if(Ct(S))return S.value;if(Ui(S))return c(S);if(qe(S))return l?l(S,2):S()})):qe(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){vs();try{f()}finally{xs()}}const S=Ns;Ns=u;try{return l?l(n,3,[d]):n(d)}finally{Ns=S}}:h=hi,e&&s){const S=h,N=s===!0?1/0:s;h=()=>Li(S(),N)}const m=zp(),p=()=>{u.stop(),m&&m.active&&rh(m.effects,u)};if(r&&e){const S=e;e=(...N)=>{S(...N),p()}}let M=_?new Array(n.length).fill(la):la;const T=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const N=u.run();if(s||g||(_?N.some((I,L)=>vn(I,M[L])):vn(N,M))){f&&f();const I=Ns;Ns=u;try{const L=[N,M===la?void 0:_&&M[0]===la?[]:M,d];l?l(e,3,L):e(...L),M=N}finally{Ns=I}}}else u.run()};return a&&a(T),u=new Gp(h),u.scheduler=o?()=>o(T,!1):T,d=S=>m0(S,!1,u),f=u.onStop=()=>{const S=nl.get(u);if(S){if(l)l(S,4);else for(const N of S)N();nl.delete(u)}},e?i?T(!0):M=u.run():o?o(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Li(n,e=1/0,t){if(e<=0||!St(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ct(n))Li(n.value,e,t);else if(ze(n))for(let i=0;i<n.length;i++)Li(n[i],e,t);else if(Kr(n)||Tr(n))n.forEach(i=>{Li(i,e,t)});else if(Up(n)){for(const i in n)Li(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Li(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yo(n,e,t,i){try{return i?n(...i):n()}catch(s){Ml(s,e,t)}}function Qn(n,e,t,i){if(qe(n)){const s=Yo(n,e,t,i);return s&&Dp(s)&&s.catch(r=>{Ml(r,e,t)}),s}if(ze(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Qn(n[r],e,t,i));return s}}function Ml(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ct;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){vs(),Yo(r,null,10,[n,l,c]),xs();return}}_0(n,t,s,i,o)}function _0(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const cn=[];let ai=-1;const Ar=[];let ss=null,yr=0;const lm=Promise.resolve();let il=null;function Zr(n){const e=il||lm;return n?e.then(this?n.bind(this):n):e}function v0(n){let e=ai+1,t=cn.length;for(;e<t;){const i=e+t>>>1,s=cn[i],r=Uo(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function mh(n){if(!(n.flags&1)){const e=Uo(n),t=cn[cn.length-1];!t||!(n.flags&2)&&e>=Uo(t)?cn.push(n):cn.splice(v0(e),0,n),n.flags|=1,cm()}}function cm(){il||(il=lm.then(hm))}function x0(n){ze(n)?Ar.push(...n):ss&&n.id===-1?ss.splice(yr+1,0,n):n.flags&1||(Ar.push(n),n.flags|=1),cm()}function Qh(n,e,t=ai+1){for(;t<cn.length;t++){const i=cn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;cn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function um(n){if(Ar.length){const e=[...new Set(Ar)].sort((t,i)=>Uo(t)-Uo(i));if(Ar.length=0,ss){ss.push(...e);return}for(ss=e,yr=0;yr<ss.length;yr++){const t=ss[yr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ss=null,yr=0}}const Uo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function hm(n){try{for(ai=0;ai<cn.length;ai++){const e=cn[ai];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Yo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ai<cn.length;ai++){const e=cn[ai];e&&(e.flags&=-2)}ai=-1,cn.length=0,um(),il=null,(cn.length||Ar.length)&&hm()}}let Bt=null,fm=null;function sl(n){const e=Bt;return Bt=n,fm=n&&n.type.__scopeId||null,e}function ei(n,e=Bt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&lf(-1);const r=sl(e);let o;try{o=n(...s)}finally{sl(r),i._d&&lf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function qt(n,e){if(Bt===null)return n;const t=Rl(Bt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ct]=e[s];r&&(qe(r)&&(r={mounted:r,updated:r}),r.deep&&Li(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function bs(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(vs(),Qn(l,t,8,[n.el,a,n,e]),xs())}}const y0=Symbol("_vte"),S0=n=>n.__isTeleport,tr=Symbol("_leaveCb"),ca=Symbol("_enterCb");function b0(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Un(()=>{n.isMounted=!0}),vm(()=>{n.isUnmounting=!0}),n}const Ln=[Function,Array],M0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ln,onEnter:Ln,onAfterEnter:Ln,onEnterCancelled:Ln,onBeforeLeave:Ln,onLeave:Ln,onAfterLeave:Ln,onLeaveCancelled:Ln,onBeforeAppear:Ln,onAppear:Ln,onAfterAppear:Ln,onAppearCancelled:Ln};function E0(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Yc(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:M,onAppearCancelled:T}=e,S=String(n.key),N=E0(t,n),I=(b,x)=>{b&&Qn(b,i,9,x)},L=(b,x)=>{const C=x[1];I(b,x),ze(b)?b.every(D=>D.length<=1)&&C():b.length<=1&&C()},U={mode:o,persisted:a,beforeEnter(b){let x=l;if(!t.isMounted)if(r)x=m||l;else return;b[tr]&&b[tr](!0);const C=N[S];C&&Sr(n,C)&&C.el[tr]&&C.el[tr](),I(x,[b])},enter(b){let x=c,C=u,D=h;if(!t.isMounted)if(r)x=p||c,C=M||u,D=T||h;else return;let w=!1;const P=b[ca]=ee=>{w||(w=!0,ee?I(D,[b]):I(C,[b]),U.delayedLeave&&U.delayedLeave(),b[ca]=void 0)};x?L(x,[b,P]):P()},leave(b,x){const C=String(n.key);if(b[ca]&&b[ca](!0),t.isUnmounting)return x();I(f,[b]);let D=!1;const w=b[tr]=P=>{D||(D=!0,x(),P?I(_,[b]):I(g,[b]),b[tr]=void 0,N[C]===n&&delete N[C])};N[C]=n,d?L(d,[b,w]):w()},clone(b){return Yc(b,e,t,i)}};return U}function Oo(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Oo(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function dm(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===st?(o.patchFlag&128&&s++,i=i.concat(dm(o.children,e,a))):(e||o.type!==Bi)&&i.push(a!=null?$s(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Ft(n,e){return qe(n)?Lt({name:n.name},e,{setup:n}):n}function pm(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function rl(n,e,t,i,s=!1){if(ze(n)){n.forEach((g,_)=>rl(g,e&&(ze(e)?e[_]:e),t,i,s));return}if(wr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&rl(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Rl(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ct?a.refs={}:a.refs,h=a.setupState,f=nt(h),d=h===ct?()=>!1:g=>mt(f,g);if(c!=null&&c!==l&&(It(c)?(u[c]=null,d(c)&&(h[c]=null)):Ct(c)&&(c.value=null)),qe(l))Yo(l,a,12,[o,u]);else{const g=It(l),_=Ct(l);if(g||_){const m=()=>{if(n.f){const p=g?d(l)?h[l]:u[l]:l.value;s?ze(p)&&rh(p,r):ze(p)?p.includes(r)||p.push(r):g?(u[l]=[r],d(l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,d(l)&&(h[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,bn(m,t)):m()}}}yl().requestIdleCallback;yl().cancelIdleCallback;const wr=n=>!!n.type.__asyncLoader,mm=n=>n.type.__isKeepAlive;function T0(n,e){gm(n,"a",e)}function A0(n,e){gm(n,"da",e)}function gm(n,e,t=Xt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(El(e,i,t),t){let s=t.parent;for(;s&&s.parent;)mm(s.parent.vnode)&&w0(i,e,t,s),s=s.parent}}function w0(n,e,t,i){const s=El(e,n,i,!0);xm(()=>{rh(i[e],s)},t)}function El(n,e,t=Xt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{vs();const a=Zo(t),l=Qn(e,t,n,o);return a(),xs(),l});return i?s.unshift(r):s.push(r),r}}const zi=n=>(e,t=Xt)=>{(!Bo||n==="sp")&&El(n,(...i)=>e(...i),t)},R0=zi("bm"),Un=zi("m"),C0=zi("bu"),_m=zi("u"),vm=zi("bum"),xm=zi("um"),P0=zi("sp"),L0=zi("rtg"),I0=zi("rtc");function D0(n,e=Xt){El("ec",n,e)}const ym="components";function Eo(n,e){return bm(ym,n,!0,e)||n}const Sm=Symbol.for("v-ndc");function gh(n){return It(n)?bm(ym,n,!1)||n:n||Sm}function bm(n,e,t=!0,i=!1){const s=Bt||Xt;if(s){const r=s.type;{const a=Mv(r,!1);if(a&&(a===e||a===Cn(e)||a===xl(Cn(e))))return r}const o=ef(s[n]||r[n],e)||ef(s.appContext[n],e);return!o&&i?r:o}}function ef(n,e){return n&&(n[e]||n[Cn(e)]||n[xl(Cn(e))])}function jn(n,e,t,i){let s;const r=t,o=ze(n);if(o||It(n)){const a=o&&Ui(n);let l=!1;a&&(l=!Fn(n),n=bl(n)),s=new Array(n.length);for(let c=0,u=n.length;c<u;c++)s[c]=e(l?tn(n[c]):n[c],c,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(St(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function Zc(n,e,t={},i,s){if(Bt.ce||Bt.parent&&wr(Bt.parent)&&Bt.parent.ce)return e!=="default"&&(t.name=e),Me(),wn(st,null,[Nt("slot",t,i)],64);let r=n[e];r&&r._c&&(r._d=!1),Me();const o=r&&Mm(r(t)),a=t.key||o&&o.key,l=wn(st,{key:(a&&!Jn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function Mm(n){return n.some(e=>ko(e)?!(e.type===Bi||e.type===st&&!Mm(e.children)):!0)?n:null}function N0(n,e){const t={};for(const i in n)t[Ha(i)]=n[i];return t}const Jc=n=>n?Wm(n)?Rl(n):Jc(n.parent):null,To=Lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Jc(n.parent),$root:n=>Jc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>_h(n),$forceUpdate:n=>n.f||(n.f=()=>{mh(n.update)}),$nextTick:n=>n.n||(n.n=Zr.bind(n.proxy)),$watch:n=>sv.bind(n)}),ql=(n,e)=>n!==ct&&!n.__isScriptSetup&&mt(n,e),U0={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ql(i,e))return o[e]=1,i[e];if(s!==ct&&mt(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&mt(c,e))return o[e]=3,r[e];if(t!==ct&&mt(t,e))return o[e]=4,t[e];Qc&&(o[e]=0)}}const u=To[e];let h,f;if(u)return e==="$attrs"&&en(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==ct&&mt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,mt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ql(s,e)?(s[e]=t,!0):i!==ct&&mt(i,e)?(i[e]=t,!0):mt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==ct&&mt(n,o)||ql(e,o)||(a=r[0])&&mt(a,o)||mt(i,o)||mt(To,o)||mt(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:mt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ol(n){return ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}function O0(n,e){return!n||!e?n||e:ze(n)&&ze(e)?n.concat(e):Lt({},ol(n),ol(e))}let Qc=!0;function F0(n){const e=_h(n),t=n.proxy,i=n.ctx;Qc=!1,e.beforeCreate&&tf(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:T,unmounted:S,render:N,renderTracked:I,renderTriggered:L,errorCaptured:U,serverPrefetch:b,expose:x,inheritAttrs:C,components:D,directives:w,filters:P}=e;if(c&&k0(c,i,null),o)for(const Y in o){const X=o[Y];qe(X)&&(i[Y]=X.bind(t))}if(s){const Y=s.call(t,t);St(Y)&&(n.data=ys(Y))}if(Qc=!0,r)for(const Y in r){const X=r[Y],_e=qe(X)?X.bind(t,t):qe(X.get)?X.get.bind(t,t):hi,Ae=!qe(X)&&qe(X.set)?X.set.bind(t):hi,Ie=_t({get:_e,set:Ae});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>Ie.value,set:De=>Ie.value=De})}if(a)for(const Y in a)Em(a[Y],i,t,Y);if(l){const Y=qe(l)?l.call(t):l;Reflect.ownKeys(Y).forEach(X=>{za(X,Y[X])})}u&&tf(u,n,"c");function $(Y,X){ze(X)?X.forEach(_e=>Y(_e.bind(t))):X&&Y(X.bind(t))}if($(R0,h),$(Un,f),$(C0,d),$(_m,g),$(T0,_),$(A0,m),$(D0,U),$(I0,I),$(L0,L),$(vm,M),$(xm,S),$(P0,b),ze(x))if(x.length){const Y=n.exposed||(n.exposed={});x.forEach(X=>{Object.defineProperty(Y,X,{get:()=>t[X],set:_e=>t[X]=_e})})}else n.exposed||(n.exposed={});N&&n.render===hi&&(n.render=N),C!=null&&(n.inheritAttrs=C),D&&(n.components=D),w&&(n.directives=w),b&&pm(n)}function k0(n,e,t=hi){ze(n)&&(n=eu(n));for(const i in n){const s=n[i];let r;St(s)?"default"in s?r=kn(s.from||i,s.default,!0):r=kn(s.from||i):r=kn(s),Ct(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function tf(n,e,t){Qn(ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Em(n,e,t,i){let s=i.includes(".")?Fm(t,i):()=>t[i];if(It(n)){const r=e[n];qe(r)&&Qt(s,r)}else if(qe(n))Qt(s,n.bind(t));else if(St(n))if(ze(n))n.forEach(r=>Em(r,e,t,i));else{const r=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(r)&&Qt(s,r,n)}}function _h(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>al(l,c,o,!0)),al(l,e,o)),St(e)&&r.set(e,l),l}function al(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&al(n,r,t,!0),s&&s.forEach(o=>al(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=B0[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const B0={data:nf,props:sf,emits:sf,methods:go,computed:go,beforeCreate:on,created:on,beforeMount:on,mounted:on,beforeUpdate:on,updated:on,beforeDestroy:on,beforeUnmount:on,destroyed:on,unmounted:on,activated:on,deactivated:on,errorCaptured:on,serverPrefetch:on,components:go,directives:go,watch:V0,provide:nf,inject:H0};function nf(n,e){return e?n?function(){return Lt(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function H0(n,e){return go(eu(n),eu(e))}function eu(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function on(n,e){return n?[...new Set([].concat(n,e))]:e}function go(n,e){return n?Lt(Object.create(null),n,e):e}function sf(n,e){return n?ze(n)&&ze(e)?[...new Set([...n,...e])]:Lt(Object.create(null),ol(n),ol(e??{})):e}function V0(n,e){if(!n)return e;if(!e)return n;const t=Lt(Object.create(null),n);for(const i in e)t[i]=on(n[i],e[i]);return t}function Tm(){return{app:null,config:{isNativeTag:T_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let z0=0;function G0(n,e){return function(i,s=null){qe(i)||(i=Lt({},i)),s!=null&&!St(s)&&(s=null);const r=Tm(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:z0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Tv,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...h)):qe(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||Nt(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(d,u):n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Rl(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Qn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Gs;Gs=c;try{return u()}finally{Gs=h}}};return c}}let Gs=null;function za(n,e){if(Xt){let t=Xt.provides;const i=Xt.parent&&Xt.parent.provides;i===t&&(t=Xt.provides=Object.create(i)),t[n]=e}}function kn(n,e,t=!1){const i=Xt||Bt;if(i||Gs){const s=Gs?Gs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}function W0(){return!!(Xt||Bt||Gs)}const Am={},wm=()=>Object.create(Am),Rm=n=>Object.getPrototypeOf(n)===Am;function X0(n,e,t,i=!1){const s={},r=wm();n.propsDefaults=Object.create(null),Cm(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:im(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function $0(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=nt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Tl(n.emitsOptions,f))continue;const d=e[f];if(l)if(mt(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=Cn(f);s[g]=tu(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Cm(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!mt(e,h)&&((u=_s(h))===h||!mt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=tu(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!mt(e,h))&&(delete r[h],c=!0)}c&&Pi(n.attrs,"set","")}function Cm(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(So(l))continue;const c=e[l];let u;s&&mt(s,u=Cn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Tl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=nt(t),c=a||ct;for(let u=0;u<r.length;u++){const h=r[u];t[h]=tu(s,l,h,c[h],n,!mt(c,h))}}return o}function tu(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=mt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Zo(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===_s(t))&&(i=!0))}return i}const j0=new WeakMap;function Pm(n,e,t=!1){const i=t?j0:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!qe(n)){const u=h=>{l=!0;const[f,d]=Pm(h,e,!0);Lt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return St(n)&&i.set(n,Er),Er;if(ze(r))for(let u=0;u<r.length;u++){const h=Cn(r[u]);rf(h)&&(o[h]=ct)}else if(r)for(const u in r){const h=Cn(u);if(rf(h)){const f=r[u],d=o[h]=ze(f)||qe(f)?{type:f}:Lt({},f),g=d.type;let _=!1,m=!0;if(ze(g))for(let p=0;p<g.length;++p){const M=g[p],T=qe(M)&&M.name;if(T==="Boolean"){_=!0;break}else T==="String"&&(m=!1)}else _=qe(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||mt(d,"default"))&&a.push(h)}}const c=[o,a];return St(n)&&i.set(n,c),c}function rf(n){return n[0]!=="$"&&!So(n)}const Lm=n=>n[0]==="_"||n==="$stable",vh=n=>ze(n)?n.map(li):[li(n)],q0=(n,e,t)=>{if(e._n)return e;const i=ei((...s)=>vh(e(...s)),t);return i._c=!1,i},Im=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Lm(s))continue;const r=n[s];if(qe(r))e[s]=q0(s,r,i);else if(r!=null){const o=vh(r);e[s]=()=>o}}},Dm=(n,e)=>{const t=vh(e);n.slots.default=()=>t},Nm=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},K0=(n,e,t)=>{const i=n.slots=wm();if(n.vnode.shapeFlag&32){const s=e._;s?(Nm(i,e,t),t&&Op(i,"_",s,!0)):Im(e,i)}else e&&Dm(n,e)},Y0=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ct;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Nm(s,e,t):(r=!e.$stable,Im(e,s)),o=e}else e&&(Dm(n,e),o={default:1});if(r)for(const a in s)!Lm(a)&&o[a]==null&&delete s[a]},bn=hv;function Z0(n){return J0(n)}function J0(n,e){const t=yl();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=hi,insertStaticContent:g}=n,_=(R,y,q,se=null,J=null,Q=null,fe=void 0,ae=null,E=!!y.dynamicChildren)=>{if(R===y)return;R&&!Sr(R,y)&&(se=B(R),De(R,J,Q,!0),R=null),y.patchFlag===-2&&(E=!1,y.dynamicChildren=null);const{type:v,ref:O,shapeFlag:z}=y;switch(v){case Al:m(R,y,q,se);break;case Bi:p(R,y,q,se);break;case Ga:R==null&&M(y,q,se,fe);break;case st:D(R,y,q,se,J,Q,fe,ae,E);break;default:z&1?N(R,y,q,se,J,Q,fe,ae,E):z&6?w(R,y,q,se,J,Q,fe,ae,E):(z&64||z&128)&&v.process(R,y,q,se,J,Q,fe,ae,E,ge)}O!=null&&J&&rl(O,R&&R.ref,Q,y||R,!y)},m=(R,y,q,se)=>{if(R==null)i(y.el=a(y.children),q,se);else{const J=y.el=R.el;y.children!==R.children&&c(J,y.children)}},p=(R,y,q,se)=>{R==null?i(y.el=l(y.children||""),q,se):y.el=R.el},M=(R,y,q,se)=>{[R.el,R.anchor]=g(R.children,y,q,se,R.el,R.anchor)},T=({el:R,anchor:y},q,se)=>{let J;for(;R&&R!==y;)J=f(R),i(R,q,se),R=J;i(y,q,se)},S=({el:R,anchor:y})=>{let q;for(;R&&R!==y;)q=f(R),s(R),R=q;s(y)},N=(R,y,q,se,J,Q,fe,ae,E)=>{y.type==="svg"?fe="svg":y.type==="math"&&(fe="mathml"),R==null?I(y,q,se,J,Q,fe,ae,E):b(R,y,J,Q,fe,ae,E)},I=(R,y,q,se,J,Q,fe,ae)=>{let E,v;const{props:O,shapeFlag:z,transition:Z,dirs:K}=R;if(E=R.el=o(R.type,Q,O&&O.is,O),z&8?u(E,R.children):z&16&&U(R.children,E,null,se,J,Kl(R,Q),fe,ae),K&&bs(R,null,se,"created"),L(E,R,R.scopeId,fe,se),O){for(const de in O)de!=="value"&&!So(de)&&r(E,de,null,O[de],Q,se);"value"in O&&r(E,"value",null,O.value,Q),(v=O.onVnodeBeforeMount)&&ri(v,se,R)}K&&bs(R,null,se,"beforeMount");const ve=Q0(J,Z);ve&&Z.beforeEnter(E),i(E,y,q),((v=O&&O.onVnodeMounted)||ve||K)&&bn(()=>{v&&ri(v,se,R),ve&&Z.enter(E),K&&bs(R,null,se,"mounted")},J)},L=(R,y,q,se,J)=>{if(q&&d(R,q),se)for(let Q=0;Q<se.length;Q++)d(R,se[Q]);if(J){let Q=J.subTree;if(y===Q||Hm(Q.type)&&(Q.ssContent===y||Q.ssFallback===y)){const fe=J.vnode;L(R,fe,fe.scopeId,fe.slotScopeIds,J.parent)}}},U=(R,y,q,se,J,Q,fe,ae,E=0)=>{for(let v=E;v<R.length;v++){const O=R[v]=ae?rs(R[v]):li(R[v]);_(null,O,y,q,se,J,Q,fe,ae)}},b=(R,y,q,se,J,Q,fe)=>{const ae=y.el=R.el;let{patchFlag:E,dynamicChildren:v,dirs:O}=y;E|=R.patchFlag&16;const z=R.props||ct,Z=y.props||ct;let K;if(q&&Ms(q,!1),(K=Z.onVnodeBeforeUpdate)&&ri(K,q,y,R),O&&bs(y,R,q,"beforeUpdate"),q&&Ms(q,!0),(z.innerHTML&&Z.innerHTML==null||z.textContent&&Z.textContent==null)&&u(ae,""),v?x(R.dynamicChildren,v,ae,q,se,Kl(y,J),Q):fe||X(R,y,ae,null,q,se,Kl(y,J),Q,!1),E>0){if(E&16)C(ae,z,Z,q,J);else if(E&2&&z.class!==Z.class&&r(ae,"class",null,Z.class,J),E&4&&r(ae,"style",z.style,Z.style,J),E&8){const ve=y.dynamicProps;for(let de=0;de<ve.length;de++){const pe=ve[de],We=z[pe],he=Z[pe];(he!==We||pe==="value")&&r(ae,pe,We,he,J,q)}}E&1&&R.children!==y.children&&u(ae,y.children)}else!fe&&v==null&&C(ae,z,Z,q,J);((K=Z.onVnodeUpdated)||O)&&bn(()=>{K&&ri(K,q,y,R),O&&bs(y,R,q,"updated")},se)},x=(R,y,q,se,J,Q,fe)=>{for(let ae=0;ae<y.length;ae++){const E=R[ae],v=y[ae],O=E.el&&(E.type===st||!Sr(E,v)||E.shapeFlag&70)?h(E.el):q;_(E,v,O,null,se,J,Q,fe,!0)}},C=(R,y,q,se,J)=>{if(y!==q){if(y!==ct)for(const Q in y)!So(Q)&&!(Q in q)&&r(R,Q,y[Q],null,J,se);for(const Q in q){if(So(Q))continue;const fe=q[Q],ae=y[Q];fe!==ae&&Q!=="value"&&r(R,Q,ae,fe,J,se)}"value"in q&&r(R,"value",y.value,q.value,J)}},D=(R,y,q,se,J,Q,fe,ae,E)=>{const v=y.el=R?R.el:a(""),O=y.anchor=R?R.anchor:a("");let{patchFlag:z,dynamicChildren:Z,slotScopeIds:K}=y;K&&(ae=ae?ae.concat(K):K),R==null?(i(v,q,se),i(O,q,se),U(y.children||[],q,O,J,Q,fe,ae,E)):z>0&&z&64&&Z&&R.dynamicChildren?(x(R.dynamicChildren,Z,q,J,Q,fe,ae),(y.key!=null||J&&y===J.subTree)&&Um(R,y,!0)):X(R,y,q,O,J,Q,fe,ae,E)},w=(R,y,q,se,J,Q,fe,ae,E)=>{y.slotScopeIds=ae,R==null?y.shapeFlag&512?J.ctx.activate(y,q,se,fe,E):P(y,q,se,J,Q,fe,E):ee(R,y,E)},P=(R,y,q,se,J,Q,fe)=>{const ae=R.component=vv(R,se,J);if(mm(R)&&(ae.ctx.renderer=ge),xv(ae,!1,fe),ae.asyncDep){if(J&&J.registerDep(ae,$,fe),!R.el){const E=ae.subTree=Nt(Bi);p(null,E,y,q)}}else $(ae,R,y,q,J,Q,fe)},ee=(R,y,q)=>{const se=y.component=R.component;if(cv(R,y,q))if(se.asyncDep&&!se.asyncResolved){Y(se,y,q);return}else se.next=y,se.update();else y.el=R.el,se.vnode=y},$=(R,y,q,se,J,Q,fe)=>{const ae=()=>{if(R.isMounted){let{next:z,bu:Z,u:K,parent:ve,vnode:de}=R;{const Ne=Om(R);if(Ne){z&&(z.el=de.el,Y(R,z,fe)),Ne.asyncDep.then(()=>{R.isUnmounted||ae()});return}}let pe=z,We;Ms(R,!1),z?(z.el=de.el,Y(R,z,fe)):z=de,Z&&Va(Z),(We=z.props&&z.props.onVnodeBeforeUpdate)&&ri(We,ve,z,de),Ms(R,!0);const he=Yl(R),we=R.subTree;R.subTree=he,_(we,he,h(we.el),B(we),R,J,Q),z.el=he.el,pe===null&&uv(R,he.el),K&&bn(K,J),(We=z.props&&z.props.onVnodeUpdated)&&bn(()=>ri(We,ve,z,de),J)}else{let z;const{el:Z,props:K}=y,{bm:ve,m:de,parent:pe,root:We,type:he}=R,we=wr(y);if(Ms(R,!1),ve&&Va(ve),!we&&(z=K&&K.onVnodeBeforeMount)&&ri(z,pe,y),Ms(R,!0),Z&&Oe){const Ne=()=>{R.subTree=Yl(R),Oe(Z,R.subTree,R,J,null)};we&&he.__asyncHydrate?he.__asyncHydrate(Z,R,Ne):Ne()}else{We.ce&&We.ce._injectChildStyle(he);const Ne=R.subTree=Yl(R);_(null,Ne,q,se,R,J,Q),y.el=Ne.el}if(de&&bn(de,J),!we&&(z=K&&K.onVnodeMounted)){const Ne=y;bn(()=>ri(z,pe,Ne),J)}(y.shapeFlag&256||pe&&wr(pe.vnode)&&pe.vnode.shapeFlag&256)&&R.a&&bn(R.a,J),R.isMounted=!0,y=q=se=null}};R.scope.on();const E=R.effect=new Gp(ae);R.scope.off();const v=R.update=E.run.bind(E),O=R.job=E.runIfDirty.bind(E);O.i=R,O.id=R.uid,E.scheduler=()=>mh(O),Ms(R,!0),v()},Y=(R,y,q)=>{y.component=R;const se=R.vnode.props;R.vnode=y,R.next=null,$0(R,y.props,se,q),Y0(R,y.children,q),vs(),Qh(R),xs()},X=(R,y,q,se,J,Q,fe,ae,E=!1)=>{const v=R&&R.children,O=R?R.shapeFlag:0,z=y.children,{patchFlag:Z,shapeFlag:K}=y;if(Z>0){if(Z&128){Ae(v,z,q,se,J,Q,fe,ae,E);return}else if(Z&256){_e(v,z,q,se,J,Q,fe,ae,E);return}}K&8?(O&16&&Ce(v,J,Q),z!==v&&u(q,z)):O&16?K&16?Ae(v,z,q,se,J,Q,fe,ae,E):Ce(v,J,Q,!0):(O&8&&u(q,""),K&16&&U(z,q,se,J,Q,fe,ae,E))},_e=(R,y,q,se,J,Q,fe,ae,E)=>{R=R||Er,y=y||Er;const v=R.length,O=y.length,z=Math.min(v,O);let Z;for(Z=0;Z<z;Z++){const K=y[Z]=E?rs(y[Z]):li(y[Z]);_(R[Z],K,q,null,J,Q,fe,ae,E)}v>O?Ce(R,J,Q,!0,!1,z):U(y,q,se,J,Q,fe,ae,E,z)},Ae=(R,y,q,se,J,Q,fe,ae,E)=>{let v=0;const O=y.length;let z=R.length-1,Z=O-1;for(;v<=z&&v<=Z;){const K=R[v],ve=y[v]=E?rs(y[v]):li(y[v]);if(Sr(K,ve))_(K,ve,q,null,J,Q,fe,ae,E);else break;v++}for(;v<=z&&v<=Z;){const K=R[z],ve=y[Z]=E?rs(y[Z]):li(y[Z]);if(Sr(K,ve))_(K,ve,q,null,J,Q,fe,ae,E);else break;z--,Z--}if(v>z){if(v<=Z){const K=Z+1,ve=K<O?y[K].el:se;for(;v<=Z;)_(null,y[v]=E?rs(y[v]):li(y[v]),q,ve,J,Q,fe,ae,E),v++}}else if(v>Z)for(;v<=z;)De(R[v],J,Q,!0),v++;else{const K=v,ve=v,de=new Map;for(v=ve;v<=Z;v++){const ie=y[v]=E?rs(y[v]):li(y[v]);ie.key!=null&&de.set(ie.key,v)}let pe,We=0;const he=Z-ve+1;let we=!1,Ne=0;const j=new Array(he);for(v=0;v<he;v++)j[v]=0;for(v=K;v<=z;v++){const ie=R[v];if(We>=he){De(ie,J,Q,!0);continue}let me;if(ie.key!=null)me=de.get(ie.key);else for(pe=ve;pe<=Z;pe++)if(j[pe-ve]===0&&Sr(ie,y[pe])){me=pe;break}me===void 0?De(ie,J,Q,!0):(j[me-ve]=v+1,me>=Ne?Ne=me:we=!0,_(ie,y[me],q,null,J,Q,fe,ae,E),We++)}const F=we?ev(j):Er;for(pe=F.length-1,v=he-1;v>=0;v--){const ie=ve+v,me=y[ie],Ue=ie+1<O?y[ie+1].el:se;j[v]===0?_(null,me,q,Ue,J,Q,fe,ae,E):we&&(pe<0||v!==F[pe]?Ie(me,q,Ue,2):pe--)}}},Ie=(R,y,q,se,J=null)=>{const{el:Q,type:fe,transition:ae,children:E,shapeFlag:v}=R;if(v&6){Ie(R.component.subTree,y,q,se);return}if(v&128){R.suspense.move(y,q,se);return}if(v&64){fe.move(R,y,q,ge);return}if(fe===st){i(Q,y,q);for(let z=0;z<E.length;z++)Ie(E[z],y,q,se);i(R.anchor,y,q);return}if(fe===Ga){T(R,y,q);return}if(se!==2&&v&1&&ae)if(se===0)ae.beforeEnter(Q),i(Q,y,q),bn(()=>ae.enter(Q),J);else{const{leave:z,delayLeave:Z,afterLeave:K}=ae,ve=()=>i(Q,y,q),de=()=>{z(Q,()=>{ve(),K&&K()})};Z?Z(Q,ve,de):de()}else i(Q,y,q)},De=(R,y,q,se=!1,J=!1)=>{const{type:Q,props:fe,ref:ae,children:E,dynamicChildren:v,shapeFlag:O,patchFlag:z,dirs:Z,cacheIndex:K}=R;if(z===-2&&(J=!1),ae!=null&&rl(ae,null,q,R,!0),K!=null&&(y.renderCache[K]=void 0),O&256){y.ctx.deactivate(R);return}const ve=O&1&&Z,de=!wr(R);let pe;if(de&&(pe=fe&&fe.onVnodeBeforeUnmount)&&ri(pe,y,R),O&6)xe(R.component,q,se);else{if(O&128){R.suspense.unmount(q,se);return}ve&&bs(R,null,y,"beforeUnmount"),O&64?R.type.remove(R,y,q,ge,se):v&&!v.hasOnce&&(Q!==st||z>0&&z&64)?Ce(v,y,q,!1,!0):(Q===st&&z&384||!J&&O&16)&&Ce(E,y,q),se&&Xe(R)}(de&&(pe=fe&&fe.onVnodeUnmounted)||ve)&&bn(()=>{pe&&ri(pe,y,R),ve&&bs(R,null,y,"unmounted")},q)},Xe=R=>{const{type:y,el:q,anchor:se,transition:J}=R;if(y===st){le(q,se);return}if(y===Ga){S(R);return}const Q=()=>{s(q),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(R.shapeFlag&1&&J&&!J.persisted){const{leave:fe,delayLeave:ae}=J,E=()=>fe(q,Q);ae?ae(R.el,Q,E):E()}else Q()},le=(R,y)=>{let q;for(;R!==y;)q=f(R),s(R),R=q;s(y)},xe=(R,y,q)=>{const{bum:se,scope:J,job:Q,subTree:fe,um:ae,m:E,a:v}=R;of(E),of(v),se&&Va(se),J.stop(),Q&&(Q.flags|=8,De(fe,R,y,q)),ae&&bn(ae,y),bn(()=>{R.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},Ce=(R,y,q,se=!1,J=!1,Q=0)=>{for(let fe=Q;fe<R.length;fe++)De(R[fe],y,q,se,J)},B=R=>{if(R.shapeFlag&6)return B(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const y=f(R.anchor||R.el),q=y&&y[y0];return q?f(q):y};let ue=!1;const ce=(R,y,q)=>{R==null?y._vnode&&De(y._vnode,null,null,!0):_(y._vnode||null,R,y,null,null,null,q),y._vnode=R,ue||(ue=!0,Qh(),um(),ue=!1)},ge={p:_,um:De,m:Ie,r:Xe,mt:P,mc:U,pc:X,pbc:x,n:B,o:n};let He,Oe;return{render:ce,hydrate:He,createApp:G0(ce,He)}}function Kl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ms({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Q0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Um(n,e,t=!1){const i=n.children,s=e.children;if(ze(i)&&ze(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=rs(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Um(o,a)),a.type===Al&&(a.el=o.el)}}function ev(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Om(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Om(e)}function of(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const tv=Symbol.for("v-scx"),nv=()=>kn(tv);function iv(n,e){return xh(n,null,{flush:"sync"})}function Qt(n,e,t){return xh(n,e,t)}function xh(n,e,t=ct){const{immediate:i,deep:s,flush:r,once:o}=t,a=Lt({},t),l=e&&i||!e&&r!=="post";let c;if(Bo){if(r==="sync"){const d=nv();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=hi,d.resume=hi,d.pause=hi,d}}const u=Xt;a.call=(d,g,_)=>Qn(d,u,g,_);let h=!1;r==="post"?a.scheduler=d=>{bn(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():mh(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=g0(n,e,a);return Bo&&(c?c.push(f):l&&f()),f}function sv(n,e,t){const i=this.proxy,s=It(n)?n.includes(".")?Fm(i,n):()=>i[n]:n.bind(i,i);let r;qe(e)?r=e:(r=e.handler,t=e);const o=Zo(this),a=xh(s,r.bind(i),t);return o(),a}function Fm(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function rv(n,e,t=ct){const i=Gm(),s=Cn(e),r=_s(e),o=km(n,s),a=l0((l,c)=>{let u,h=ct,f;return iv(()=>{const d=n[s];vn(u,d)&&(u=d,c())}),{get(){return l(),t.get?t.get(u):u},set(d){const g=t.set?t.set(d):d;if(!vn(g,u)&&!(h!==ct&&vn(d,h)))return;const _=i.vnode.props;_&&(e in _||s in _||r in _)&&(`onUpdate:${e}`in _||`onUpdate:${s}`in _||`onUpdate:${r}`in _)||(u=d,c()),i.emit(`update:${e}`,g),vn(d,g)&&vn(d,h)&&!vn(g,f)&&c(),h=d,f=g}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||ct:a,done:!1}:{done:!0}}}},a}const km=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Cn(e)}Modifiers`]||n[`${_s(e)}Modifiers`];function ov(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ct;let s=t;const r=e.startsWith("update:"),o=r&&km(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>It(u)?u.trim():u)),o.number&&(s=t.map(el)));let a,l=i[a=Ha(e)]||i[a=Ha(Cn(e))];!l&&r&&(l=i[a=Ha(_s(e))]),l&&Qn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Qn(c,n,6,s)}}function Bm(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!qe(n)){const l=c=>{const u=Bm(c,e,!0);u&&(a=!0,Lt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(St(n)&&i.set(n,null),null):(ze(r)?r.forEach(l=>o[l]=null):Lt(o,r),St(n)&&i.set(n,o),o)}function Tl(n,e){return!n||!_l(e)?!1:(e=e.slice(2).replace(/Once$/,""),mt(n,e[0].toLowerCase()+e.slice(1))||mt(n,_s(e))||mt(n,e))}function Yl(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=n,m=sl(n);let p,M;try{if(t.shapeFlag&4){const S=s||i,N=S;p=li(c.call(N,S,u,h,d,f,g)),M=a}else{const S=e;p=li(S.length>1?S(h,{attrs:a,slots:o,emit:l}):S(h,null)),M=e.props?a:av(a)}}catch(S){Ao.length=0,Ml(S,n,1),p=Nt(Bi)}let T=p;if(M&&_!==!1){const S=Object.keys(M),{shapeFlag:N}=T;S.length&&N&7&&(r&&S.some(sh)&&(M=lv(M,r)),T=$s(T,M,!1,!0))}return t.dirs&&(T=$s(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&Oo(T,t.transition),p=T,sl(m),p}const av=n=>{let e;for(const t in n)(t==="class"||t==="style"||_l(t))&&((e||(e={}))[t]=n[t]);return e},lv=(n,e)=>{const t={};for(const i in n)(!sh(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function cv(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?af(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Tl(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?af(i,o,c):!0:!!o;return!1}function af(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Tl(t,r))return!0}return!1}function uv({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Hm=n=>n.__isSuspense;function hv(n,e){e&&e.pendingBranch?ze(n)?e.effects.push(...n):e.effects.push(n):x0(n)}const st=Symbol.for("v-fgt"),Al=Symbol.for("v-txt"),Bi=Symbol.for("v-cmt"),Ga=Symbol.for("v-stc"),Ao=[];let An=null;function Me(n=!1){Ao.push(An=n?null:[])}function fv(){Ao.pop(),An=Ao[Ao.length-1]||null}let Fo=1;function lf(n,e=!1){Fo+=n,n<0&&An&&e&&(An.hasOnce=!0)}function Vm(n){return n.dynamicChildren=Fo>0?An||Er:null,fv(),Fo>0&&An&&An.push(n),n}function Pe(n,e,t,i,s,r){return Vm(H(n,e,t,i,s,r,!0))}function wn(n,e,t,i,s){return Vm(Nt(n,e,t,i,s,!0))}function ko(n){return n?n.__v_isVNode===!0:!1}function Sr(n,e){return n.type===e.type&&n.key===e.key}const zm=({key:n})=>n??null,Wa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?It(n)||Ct(n)||qe(n)?{i:Bt,r:n,k:e,f:!!t}:n:null);function H(n,e=null,t=null,i=0,s=null,r=n===st?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&zm(e),ref:e&&Wa(e),scopeId:fm,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Bt};return a?(yh(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=It(t)?8:16),Fo>0&&!o&&An&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&An.push(l),l}const Nt=dv;function dv(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Sm)&&(n=Bi),ko(n)){const a=$s(n,e,!0);return t&&yh(a,t),Fo>0&&!r&&An&&(a.shapeFlag&6?An[An.indexOf(n)]=a:An.push(a)),a.patchFlag=-2,a}if(Ev(n)&&(n=n.__vccOpts),e){e=pv(e);let{class:a,style:l}=e;a&&!It(a)&&(e.class=Tn(a)),St(l)&&(dh(l)&&!ze(l)&&(l=Lt({},l)),e.style=Yr(l))}const o=It(n)?1:Hm(n)?128:S0(n)?64:St(n)?4:qe(n)?2:0;return H(n,e,t,i,s,o,r,!0)}function pv(n){return n?dh(n)||Rm(n)?Lt({},n):n:null}function $s(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?wl(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&zm(c),ref:e&&e.ref?t&&r?ze(r)?r.concat(Wa(e)):[r,Wa(e)]:Wa(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==st?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&$s(n.ssContent),ssFallback:n.ssFallback&&$s(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Oo(u,l.clone(u)),u}function Wt(n=" ",e=0){return Nt(Al,null,n,e)}function mv(n,e){const t=Nt(Ga,null,n);return t.staticCount=e,t}function gt(n="",e=!1){return e?(Me(),wn(Bi,null,n)):Nt(Bi,null,n)}function li(n){return n==null||typeof n=="boolean"?Nt(Bi):ze(n)?Nt(st,null,n.slice()):ko(n)?rs(n):Nt(Al,null,String(n))}function rs(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:$s(n)}function yh(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),yh(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Rm(e)?e._ctx=Bt:s===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:Bt},t=32):(e=String(e),i&64?(t=16,e=[Wt(e)]):t=8);n.children=e,n.shapeFlag|=t}function wl(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Tn([e.class,i.class]));else if(s==="style")e.style=Yr([e.style,i.style]);else if(_l(s)){const r=e[s],o=i[s];o&&r!==o&&!(ze(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ri(n,e,t,i=null){Qn(n,e,7,[t,i])}const gv=Tm();let _v=0;function vv(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||gv,r={uid:_v++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Hp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pm(i,s),emitsOptions:Bm(i,s),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ov.bind(null,r),n.ce&&n.ce(r),r}let Xt=null;const Gm=()=>Xt||Bt;let ll,nu;{const n=yl(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ll=e("__VUE_INSTANCE_SETTERS__",t=>Xt=t),nu=e("__VUE_SSR_SETTERS__",t=>Bo=t)}const Zo=n=>{const e=Xt;return ll(n),n.scope.on(),()=>{n.scope.off(),ll(e)}},cf=()=>{Xt&&Xt.scope.off(),ll(null)};function Wm(n){return n.vnode.shapeFlag&4}let Bo=!1;function xv(n,e=!1,t=!1){e&&nu(e);const{props:i,children:s}=n.vnode,r=Wm(n);X0(n,i,r,e),K0(n,s,t);const o=r?yv(n,e):void 0;return e&&nu(!1),o}function yv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,U0);const{setup:i}=t;if(i){vs();const s=n.setupContext=i.length>1?bv(n):null,r=Zo(n),o=Yo(i,n,0,[n.props,s]),a=Dp(o);if(xs(),r(),(a||n.sp)&&!wr(n)&&pm(n),a){if(o.then(cf,cf),e)return o.then(l=>{uf(n,l,e)}).catch(l=>{Ml(l,n,0)});n.asyncDep=o}else uf(n,o,e)}else Xm(n,e)}function uf(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:St(e)&&(n.setupState=om(e)),Xm(n,t)}let hf;function Xm(n,e,t){const i=n.type;if(!n.render){if(!e&&hf&&!i.render){const s=i.template||_h(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Lt(Lt({isCustomElement:r,delimiters:a},o),l);i.render=hf(s,c)}}n.render=i.render||hi}{const s=Zo(n);vs();try{F0(n)}finally{xs(),s()}}}const Sv={get(n,e){return en(n,"get",""),n[e]}};function bv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Sv),slots:n.slots,emit:n.emit,expose:e}}function Rl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(om(ph(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in To)return To[t](n)},has(e,t){return t in e||t in To}})):n.proxy}function Mv(n,e=!0){return qe(n)?n.displayName||n.name:n.name||e&&n.__name}function Ev(n){return qe(n)&&"__vccOpts"in n}const _t=(n,e)=>p0(n,e,Bo);function $m(n,e,t){const i=arguments.length;return i===2?St(e)&&!ze(e)?ko(e)?Nt(n,null,[e]):Nt(n,e):Nt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ko(t)&&(t=[t]),Nt(n,e,t))}const Tv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let iu;const ff=typeof window<"u"&&window.trustedTypes;if(ff)try{iu=ff.createPolicy("vue",{createHTML:n=>n})}catch{}const jm=iu?n=>iu.createHTML(n):n=>n,Av="http://www.w3.org/2000/svg",wv="http://www.w3.org/1998/Math/MathML",Ri=typeof document<"u"?document:null,df=Ri&&Ri.createElement("template"),Rv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Ri.createElementNS(Av,n):e==="mathml"?Ri.createElementNS(wv,n):t?Ri.createElement(n,{is:t}):Ri.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ri.createTextNode(n),createComment:n=>Ri.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ri.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{df.innerHTML=jm(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=df.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ji="transition",so="animation",Dr=Symbol("_vtc"),qm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Cv=Lt({},M0,qm),Es=(n,e=[])=>{ze(n)?n.forEach(t=>t(...e)):n&&n(...e)},pf=n=>n?ze(n)?n.some(e=>e.length>1):n.length>1:!1;function Pv(n){const e={};for(const D in n)D in qm||(e[D]=n[D]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,g=Lv(s),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:M,onEnterCancelled:T,onLeave:S,onLeaveCancelled:N,onBeforeAppear:I=p,onAppear:L=M,onAppearCancelled:U=T}=e,b=(D,w,P,ee)=>{D._enterCancelled=ee,ns(D,w?u:a),ns(D,w?c:o),P&&P()},x=(D,w)=>{D._isLeaving=!1,ns(D,h),ns(D,d),ns(D,f),w&&w()},C=D=>(w,P)=>{const ee=D?L:M,$=()=>b(w,D,P);Es(ee,[w,$]),mf(()=>{ns(w,D?l:r),oi(w,D?u:a),pf(ee)||gf(w,i,_,$)})};return Lt(e,{onBeforeEnter(D){Es(p,[D]),oi(D,r),oi(D,o)},onBeforeAppear(D){Es(I,[D]),oi(D,l),oi(D,c)},onEnter:C(!1),onAppear:C(!0),onLeave(D,w){D._isLeaving=!0;const P=()=>x(D,w);oi(D,h),D._enterCancelled?(oi(D,f),su()):(su(),oi(D,f)),mf(()=>{D._isLeaving&&(ns(D,h),oi(D,d),pf(S)||gf(D,i,m,P))}),Es(S,[D,P])},onEnterCancelled(D){b(D,!1,void 0,!0),Es(T,[D])},onAppearCancelled(D){b(D,!0,void 0,!0),Es(U,[D])},onLeaveCancelled(D){x(D),Es(N,[D])}})}function Lv(n){if(n==null)return null;if(St(n))return[Zl(n.enter),Zl(n.leave)];{const e=Zl(n);return[e,e]}}function Zl(n){return P_(n)}function oi(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Dr]||(n[Dr]=new Set)).add(e)}function ns(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Dr];t&&(t.delete(e),t.size||(n[Dr]=void 0))}function mf(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Iv=0;function gf(n,e,t,i){const s=n._endId=++Iv,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=Km(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=d=>{d.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function Km(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${ji}Delay`),r=i(`${ji}Duration`),o=_f(s,r),a=i(`${so}Delay`),l=i(`${so}Duration`),c=_f(a,l);let u=null,h=0,f=0;e===ji?o>0&&(u=ji,h=o,f=r.length):e===so?c>0&&(u=so,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?ji:so:null,f=u?u===ji?r.length:l.length:0);const d=u===ji&&/\b(transform|all)(,|$)/.test(i(`${ji}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function _f(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>vf(t)+vf(n[i])))}function vf(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function su(){return document.body.offsetHeight}function Dv(n,e,t){const i=n[Dr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const xf=Symbol("_vod"),Nv=Symbol("_vsh"),Uv=Symbol(""),Ov=/(^|;)\s*display\s*:/;function Fv(n,e,t){const i=n.style,s=It(t);let r=!1;if(t&&!s){if(e)if(It(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Xa(i,a,"")}else for(const o in e)t[o]==null&&Xa(i,o,"");for(const o in t)o==="display"&&(r=!0),Xa(i,o,t[o])}else if(s){if(e!==t){const o=i[Uv];o&&(t+=";"+o),i.cssText=t,r=Ov.test(t)}}else e&&n.removeAttribute("style");xf in n&&(n[xf]=r?i.display:"",n[Nv]&&(i.display="none"))}const yf=/\s*!important$/;function Xa(n,e,t){if(ze(t))t.forEach(i=>Xa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=kv(n,e);yf.test(t)?n.setProperty(_s(i),t.replace(yf,""),"important"):n[i]=t}}const Sf=["Webkit","Moz","ms"],Jl={};function kv(n,e){const t=Jl[e];if(t)return t;let i=Cn(e);if(i!=="filter"&&i in n)return Jl[e]=i;i=xl(i);for(let s=0;s<Sf.length;s++){const r=Sf[s]+i;if(r in n)return Jl[e]=r}return e}const bf="http://www.w3.org/1999/xlink";function Mf(n,e,t,i,s,r=O_(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(bf,e.slice(6,e.length)):n.setAttributeNS(bf,e,t):t==null||r&&!Fp(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Jn(t)?String(t):t)}function Ef(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?jm(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Fp(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function as(n,e,t,i){n.addEventListener(e,t,i)}function Bv(n,e,t,i){n.removeEventListener(e,t,i)}const Tf=Symbol("_vei");function Hv(n,e,t,i,s=null){const r=n[Tf]||(n[Tf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Vv(e);if(i){const c=r[e]=Wv(i,s);as(n,a,c,l)}else o&&(Bv(n,a,o,l),r[e]=void 0)}}const Af=/(?:Once|Passive|Capture)$/;function Vv(n){let e;if(Af.test(n)){e={};let i;for(;i=n.match(Af);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):_s(n.slice(2)),e]}let Ql=0;const zv=Promise.resolve(),Gv=()=>Ql||(zv.then(()=>Ql=0),Ql=Date.now());function Wv(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Qn(Xv(i,t.value),e,5,[i])};return t.value=n,t.attached=Gv(),t}function Xv(n,e){if(ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const wf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,$v=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Dv(n,i,o):e==="style"?Fv(n,t,i):_l(e)?sh(e)||Hv(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jv(n,e,i,o))?(Ef(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mf(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!It(i))?Ef(n,Cn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Mf(n,e,i,o))};function jv(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&wf(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return wf(e)&&It(t)?!1:e in n}const Ym=new WeakMap,Zm=new WeakMap,cl=Symbol("_moveCb"),Rf=Symbol("_enterCb"),qv=n=>(delete n.props.mode,n),Kv=qv({name:"TransitionGroup",props:Lt({},Cv,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=Gm(),i=b0();let s,r;return _m(()=>{if(!s.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!ex(s[0].el,t.vnode.el,o))return;s.forEach(Zv),s.forEach(Jv);const a=s.filter(Qv);su(),a.forEach(l=>{const c=l.el,u=c.style;oi(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c[cl]=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",h),c[cl]=null,ns(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=nt(n),a=Pv(o);let l=o.tag||st;if(s=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&(s.push(u),Oo(u,Yc(u,a,i,t)),Ym.set(u,u.el.getBoundingClientRect()))}r=e.default?dm(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Oo(u,Yc(u,a,i,t))}return Nt(l,null,r)}}}),Yv=Kv;function Zv(n){const e=n.el;e[cl]&&e[cl](),e[Rf]&&e[Rf]()}function Jv(n){Zm.set(n,n.el.getBoundingClientRect())}function Qv(n){const e=Ym.get(n),t=Zm.get(n),i=e.left-t.left,s=e.top-t.top;if(i||s){const r=n.el.style;return r.transform=r.webkitTransform=`translate(${i}px,${s}px)`,r.transitionDuration="0s",n}}function ex(n,e,t){const i=n.cloneNode(),s=n[Dr];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),t.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:o}=Km(i);return r.removeChild(i),o}const Nr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ze(e)?t=>Va(e,t):e};function tx(n){n.target.composing=!0}function Cf(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Oi=Symbol("_assign"),fn={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Oi]=Nr(s);const r=i||s.props&&s.props.type==="number";as(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=el(a)),n[Oi](a)}),t&&as(n,"change",()=>{n.value=n.value.trim()}),e||(as(n,"compositionstart",tx),as(n,"compositionend",Cf),as(n,"change",Cf))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Oi]=Nr(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?el(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},nx={deep:!0,created(n,e,t){n[Oi]=Nr(t),as(n,"change",()=>{const i=n._modelValue,s=Ho(n),r=n.checked,o=n[Oi];if(ze(i)){const a=ah(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Kr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Jm(n,r))})},mounted:Pf,beforeUpdate(n,e,t){n[Oi]=Nr(t),Pf(n,e,t)}};function Pf(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(ze(e))s=ah(e,i.props.value)>-1;else if(Kr(e))s=e.has(i.props.value);else{if(e===t)return;s=Ko(e,Jm(n,!0))}n.checked!==s&&(n.checked=s)}const ix={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=Kr(e);as(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?el(Ho(o)):Ho(o));n[Oi](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,Zr(()=>{n._assigning=!1})}),n[Oi]=Nr(i)},mounted(n,{value:e}){Lf(n,e)},beforeUpdate(n,e,t){n[Oi]=Nr(t)},updated(n,{value:e}){n._assigning||Lf(n,e)}};function Lf(n,e){const t=n.multiple,i=ze(e);if(!(t&&!i&&!Kr(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Ho(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=ah(e,a)>-1}else o.selected=e.has(a);else if(Ko(Ho(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Ho(n){return"_value"in n?n._value:n.value}function Jm(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const sx=["ctrl","shift","alt","meta"],rx={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>sx.some(t=>n[`${t}Key`]&&!e.includes(t))},ox=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=rx[e[o]];if(a&&a(s,e))return}return n(s,...r)})},ax=Lt({patchProp:$v},Rv);let If;function lx(){return If||(If=Z0(ax))}const Qm=(...n)=>{const e=lx().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=ux(i);if(!s)return;const r=e._component;!qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,cx(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function cx(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function ux(n){return It(n)?document.querySelector(n):n}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const br=typeof document<"u";function eg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function hx(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&eg(n.default)}const pt=Object.assign;function ec(n,e){const t={};for(const i in e){const s=e[i];t[i]=ti(s)?s.map(n):n(s)}return t}const wo=()=>{},ti=Array.isArray,tg=/#/g,fx=/&/g,dx=/\//g,px=/=/g,mx=/\?/g,ng=/\+/g,gx=/%5B/g,_x=/%5D/g,ig=/%5E/g,vx=/%60/g,sg=/%7B/g,xx=/%7C/g,rg=/%7D/g,yx=/%20/g;function Sh(n){return encodeURI(""+n).replace(xx,"|").replace(gx,"[").replace(_x,"]")}function Sx(n){return Sh(n).replace(sg,"{").replace(rg,"}").replace(ig,"^")}function ru(n){return Sh(n).replace(ng,"%2B").replace(yx,"+").replace(tg,"%23").replace(fx,"%26").replace(vx,"`").replace(sg,"{").replace(rg,"}").replace(ig,"^")}function bx(n){return ru(n).replace(px,"%3D")}function Mx(n){return Sh(n).replace(tg,"%23").replace(mx,"%3F")}function Ex(n){return n==null?"":Mx(n).replace(dx,"%2F")}function Vo(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Tx=/\/$/,Ax=n=>n.replace(Tx,"");function tc(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Px(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Vo(o)}}function wx(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Df(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Rx(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Ur(e.matched[i],t.matched[s])&&og(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ur(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function og(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Cx(n[t],e[t]))return!1;return!0}function Cx(n,e){return ti(n)?Nf(n,e):ti(e)?Nf(e,n):n===e}function Nf(n,e){return ti(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Px(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const qi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var zo;(function(n){n.pop="pop",n.push="push"})(zo||(zo={}));var Ro;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ro||(Ro={}));function Lx(n){if(!n)if(br){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Ax(n)}const Ix=/^[^#]+#/;function Dx(n,e){return n.replace(Ix,"#")+e}function Nx(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Cl=()=>({left:window.scrollX,top:window.scrollY});function Ux(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Nx(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Uf(n,e){return(history.state?history.state.position-e:-1)+n}const ou=new Map;function Ox(n,e){ou.set(n,e)}function Fx(n){const e=ou.get(n);return ou.delete(n),e}let kx=()=>location.protocol+"//"+location.host;function ag(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Df(l,"")}return Df(t,n)+i+s}function Bx(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=ag(n,location),g=t.value,_=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===g){o=null;return}m=_?f.position-_.position:0}else i(d);s.forEach(p=>{p(t.value,g,{delta:m,type:zo.pop,direction:m?m>0?Ro.forward:Ro.back:Ro.unknown})})};function l(){o=t.value}function c(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(pt({},f.state,{scroll:Cl()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Of(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Cl():null}}function Hx(n){const{history:e,location:t}=window,i={value:ag(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:kx()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=pt({},e.state,Of(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=pt({},s.value,e.state,{forward:l,scroll:Cl()});r(u.current,u,!0);const h=pt({},Of(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Vx(n){n=Lx(n);const e=Hx(n),t=Bx(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=pt({location:"",base:n,go:i,createHref:Dx.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function zx(n){return typeof n=="string"||n&&typeof n=="object"}function lg(n){return typeof n=="string"||typeof n=="symbol"}const cg=Symbol("");var Ff;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Ff||(Ff={}));function Or(n,e){return pt(new Error,{type:n,[cg]:!0},e)}function yi(n,e){return n instanceof Error&&cg in n&&(e==null||!!(n.type&e))}const kf="[^/]+?",Gx={sensitive:!1,strict:!1,start:!0,end:!0},Wx=/[.+*?^${}()[\]/\\]/g;function Xx(n,e){const t=pt({},Gx,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(Wx,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=f;r.push({name:g,repeatable:_,optional:m});const M=p||kf;if(M!==kf){d+=10;try{new RegExp(`(${M})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+S.message)}}let T=_?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(T=m&&c.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),s+=T,d+=20,m&&(d+=-8),_&&(d+=-20),M===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(ti(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=ti(p)?p.join("/"):p;if(!M)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function $x(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ug(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=$x(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Bf(i))return 1;if(Bf(s))return-1}return s.length-i.length}function Bf(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const jx={type:0,value:""},qx=/[a-zA-Z0-9_]/;function Kx(n){if(!n)return[[]];if(n==="/")return[[jx]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:qx.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function Yx(n,e,t){const i=Xx(Kx(n.path),t),s=pt(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Zx(n,e){const t=[],i=new Map;e=Gf({strict:!1,end:!0,sensitive:!1},e);function s(h){return i.get(h)}function r(h,f,d){const g=!d,_=Vf(h);_.aliasOf=d&&d.record;const m=Gf(e,h),p=[_];if("alias"in h){const S=typeof h.alias=="string"?[h.alias]:h.alias;for(const N of S)p.push(Vf(pt({},_,{components:d?d.record.components:_.components,path:N,aliasOf:d?d.record:_})))}let M,T;for(const S of p){const{path:N}=S;if(f&&N[0]!=="/"){const I=f.record.path,L=I[I.length-1]==="/"?"":"/";S.path=f.record.path+(N&&L+N)}if(M=Yx(S,f,m),d?d.alias.push(M):(T=T||M,T!==M&&T.alias.push(M),g&&h.name&&!zf(M)&&o(h.name)),hg(M)&&l(M),_.children){const I=_.children;for(let L=0;L<I.length;L++)r(I[L],M,d&&d.children[L])}d=d||M}return T?()=>{o(T)}:wo}function o(h){if(lg(h)){const f=i.get(h);f&&(i.delete(h),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(h);f>-1&&(t.splice(f,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return t}function l(h){const f=ey(h,t);t.splice(f,0,h),h.record.name&&!zf(h)&&i.set(h.record.name,h)}function c(h,f){let d,g={},_,m;if("name"in h&&h.name){if(d=i.get(h.name),!d)throw Or(1,{location:h});m=d.record.name,g=pt(Hf(f.params,d.keys.filter(T=>!T.optional).concat(d.parent?d.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),h.params&&Hf(h.params,d.keys.map(T=>T.name))),_=d.stringify(g)}else if(h.path!=null)_=h.path,d=t.find(T=>T.re.test(_)),d&&(g=d.parse(_),m=d.record.name);else{if(d=f.name?i.get(f.name):t.find(T=>T.re.test(f.path)),!d)throw Or(1,{location:h,currentLocation:f});m=d.record.name,g=pt({},f.params,h.params),_=d.stringify(g)}const p=[];let M=d;for(;M;)p.unshift(M.record),M=M.parent;return{name:m,path:_,params:g,matched:p,meta:Qx(p)}}n.forEach(h=>r(h));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Hf(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Vf(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Jx(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Jx(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function zf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Qx(n){return n.reduce((e,t)=>pt(e,t.meta),{})}function Gf(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function ey(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;ug(n,e[r])<0?i=r:t=r+1}const s=ty(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function ty(n){let e=n;for(;e=e.parent;)if(hg(e)&&ug(n,e)===0)return e}function hg({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function ny(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(ng," "),o=r.indexOf("="),a=Vo(o<0?r:r.slice(0,o)),l=o<0?null:Vo(r.slice(o+1));if(a in e){let c=e[a];ti(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Wf(n){let e="";for(let t in n){const i=n[t];if(t=bx(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(ti(i)?i.map(r=>r&&ru(r)):[i&&ru(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function iy(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=ti(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const sy=Symbol(""),Xf=Symbol(""),Pl=Symbol(""),bh=Symbol(""),au=Symbol("");function ro(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function os(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Or(4,{from:t,to:e})):f instanceof Error?l(f):zx(f)?l(Or(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function nc(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(eg(l)){const u=(l.__vccOpts||l)[e];u&&r.push(os(u,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=hx(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&os(d,t,i,o,a,s)()}))}}return r}function $f(n){const e=kn(Pl),t=kn(bh),i=_t(()=>{const l=Te(n.to);return e.resolve(l)}),s=_t(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ur.bind(null,u));if(f>-1)return f;const d=jf(l[c-2]);return c>1&&jf(u)===d&&h[h.length-1].path!==d?h.findIndex(Ur.bind(null,l[c-2])):f}),r=_t(()=>s.value>-1&&cy(t.params,i.value.params)),o=_t(()=>s.value>-1&&s.value===t.matched.length-1&&og(t.params,i.value.params));function a(l={}){if(ly(l)){const c=e[Te(n.replace)?"replace":"push"](Te(n.to)).catch(wo);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:_t(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function ry(n){return n.length===1?n[0]:n}const oy=Ft({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$f,setup(n,{slots:e}){const t=ys($f(n)),{options:i}=kn(Pl),s=_t(()=>({[qf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[qf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&ry(e.default(t));return n.custom?r:$m("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),ay=oy;function ly(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function cy(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!ti(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function jf(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const qf=(n,e,t)=>n??e??t,uy=Ft({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=kn(au),s=_t(()=>n.route||i.value),r=kn(Xf,0),o=_t(()=>{let c=Te(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=_t(()=>s.value.matched[o.value]);za(Xf,_t(()=>o.value+1)),za(sy,a),za(au,s);const l=Qe();return Qt(()=>[l.value,a.value,n.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Ur(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return Kf(t.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=$m(f,pt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Kf(t.default,{Component:m,route:c})||m}}});function Kf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const fg=uy;function hy(n){const e=Zx(n.routes,n),t=n.parseQuery||ny,i=n.stringifyQuery||Wf,s=n.history,r=ro(),o=ro(),a=ro(),l=s0(qi);let c=qi;br&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ec.bind(null,B=>""+B),h=ec.bind(null,Ex),f=ec.bind(null,Vo);function d(B,ue){let ce,ge;return lg(B)?(ce=e.getRecordMatcher(B),ge=ue):ge=B,e.addRoute(ge,ce)}function g(B){const ue=e.getRecordMatcher(B);ue&&e.removeRoute(ue)}function _(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function p(B,ue){if(ue=pt({},ue||l.value),typeof B=="string"){const y=tc(t,B,ue.path),q=e.resolve({path:y.path},ue),se=s.createHref(y.fullPath);return pt(y,q,{params:f(q.params),hash:Vo(y.hash),redirectedFrom:void 0,href:se})}let ce;if(B.path!=null)ce=pt({},B,{path:tc(t,B.path,ue.path).path});else{const y=pt({},B.params);for(const q in y)y[q]==null&&delete y[q];ce=pt({},B,{params:h(y)}),ue.params=h(ue.params)}const ge=e.resolve(ce,ue),He=B.hash||"";ge.params=u(f(ge.params));const Oe=wx(i,pt({},B,{hash:Sx(He),path:ge.path})),R=s.createHref(Oe);return pt({fullPath:Oe,hash:He,query:i===Wf?iy(B.query):B.query||{}},ge,{redirectedFrom:void 0,href:R})}function M(B){return typeof B=="string"?tc(t,B,l.value.path):pt({},B)}function T(B,ue){if(c!==B)return Or(8,{from:ue,to:B})}function S(B){return L(B)}function N(B){return S(pt(M(B),{replace:!0}))}function I(B){const ue=B.matched[B.matched.length-1];if(ue&&ue.redirect){const{redirect:ce}=ue;let ge=typeof ce=="function"?ce(B):ce;return typeof ge=="string"&&(ge=ge.includes("?")||ge.includes("#")?ge=M(ge):{path:ge},ge.params={}),pt({query:B.query,hash:B.hash,params:ge.path!=null?{}:B.params},ge)}}function L(B,ue){const ce=c=p(B),ge=l.value,He=B.state,Oe=B.force,R=B.replace===!0,y=I(ce);if(y)return L(pt(M(y),{state:typeof y=="object"?pt({},He,y.state):He,force:Oe,replace:R}),ue||ce);const q=ce;q.redirectedFrom=ue;let se;return!Oe&&Rx(i,ge,ce)&&(se=Or(16,{to:q,from:ge}),Ie(ge,ge,!0,!1)),(se?Promise.resolve(se):x(q,ge)).catch(J=>yi(J)?yi(J,2)?J:Ae(J):X(J,q,ge)).then(J=>{if(J){if(yi(J,2))return L(pt({replace:R},M(J.to),{state:typeof J.to=="object"?pt({},He,J.to.state):He,force:Oe}),ue||q)}else J=D(q,ge,!0,R,He);return C(q,ge,J),J})}function U(B,ue){const ce=T(B,ue);return ce?Promise.reject(ce):Promise.resolve()}function b(B){const ue=le.values().next().value;return ue&&typeof ue.runWithContext=="function"?ue.runWithContext(B):B()}function x(B,ue){let ce;const[ge,He,Oe]=fy(B,ue);ce=nc(ge.reverse(),"beforeRouteLeave",B,ue);for(const y of ge)y.leaveGuards.forEach(q=>{ce.push(os(q,B,ue))});const R=U.bind(null,B,ue);return ce.push(R),Ce(ce).then(()=>{ce=[];for(const y of r.list())ce.push(os(y,B,ue));return ce.push(R),Ce(ce)}).then(()=>{ce=nc(He,"beforeRouteUpdate",B,ue);for(const y of He)y.updateGuards.forEach(q=>{ce.push(os(q,B,ue))});return ce.push(R),Ce(ce)}).then(()=>{ce=[];for(const y of Oe)if(y.beforeEnter)if(ti(y.beforeEnter))for(const q of y.beforeEnter)ce.push(os(q,B,ue));else ce.push(os(y.beforeEnter,B,ue));return ce.push(R),Ce(ce)}).then(()=>(B.matched.forEach(y=>y.enterCallbacks={}),ce=nc(Oe,"beforeRouteEnter",B,ue,b),ce.push(R),Ce(ce))).then(()=>{ce=[];for(const y of o.list())ce.push(os(y,B,ue));return ce.push(R),Ce(ce)}).catch(y=>yi(y,8)?y:Promise.reject(y))}function C(B,ue,ce){a.list().forEach(ge=>b(()=>ge(B,ue,ce)))}function D(B,ue,ce,ge,He){const Oe=T(B,ue);if(Oe)return Oe;const R=ue===qi,y=br?history.state:{};ce&&(ge||R?s.replace(B.fullPath,pt({scroll:R&&y&&y.scroll},He)):s.push(B.fullPath,He)),l.value=B,Ie(B,ue,ce,R),Ae()}let w;function P(){w||(w=s.listen((B,ue,ce)=>{if(!xe.listening)return;const ge=p(B),He=I(ge);if(He){L(pt(He,{replace:!0,force:!0}),ge).catch(wo);return}c=ge;const Oe=l.value;br&&Ox(Uf(Oe.fullPath,ce.delta),Cl()),x(ge,Oe).catch(R=>yi(R,12)?R:yi(R,2)?(L(pt(M(R.to),{force:!0}),ge).then(y=>{yi(y,20)&&!ce.delta&&ce.type===zo.pop&&s.go(-1,!1)}).catch(wo),Promise.reject()):(ce.delta&&s.go(-ce.delta,!1),X(R,ge,Oe))).then(R=>{R=R||D(ge,Oe,!1),R&&(ce.delta&&!yi(R,8)?s.go(-ce.delta,!1):ce.type===zo.pop&&yi(R,20)&&s.go(-1,!1)),C(ge,Oe,R)}).catch(wo)}))}let ee=ro(),$=ro(),Y;function X(B,ue,ce){Ae(B);const ge=$.list();return ge.length?ge.forEach(He=>He(B,ue,ce)):console.error(B),Promise.reject(B)}function _e(){return Y&&l.value!==qi?Promise.resolve():new Promise((B,ue)=>{ee.add([B,ue])})}function Ae(B){return Y||(Y=!B,P(),ee.list().forEach(([ue,ce])=>B?ce(B):ue()),ee.reset()),B}function Ie(B,ue,ce,ge){const{scrollBehavior:He}=n;if(!br||!He)return Promise.resolve();const Oe=!ce&&Fx(Uf(B.fullPath,0))||(ge||!ce)&&history.state&&history.state.scroll||null;return Zr().then(()=>He(B,ue,Oe)).then(R=>R&&Ux(R)).catch(R=>X(R,B,ue))}const De=B=>s.go(B);let Xe;const le=new Set,xe={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:S,replace:N,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:$.add,isReady:_e,install(B){const ue=this;B.component("RouterLink",ay),B.component("RouterView",fg),B.config.globalProperties.$router=ue,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Te(l)}),br&&!Xe&&l.value===qi&&(Xe=!0,S(s.location).catch(He=>{}));const ce={};for(const He in qi)Object.defineProperty(ce,He,{get:()=>l.value[He],enumerable:!0});B.provide(Pl,ue),B.provide(bh,im(ce)),B.provide(au,l);const ge=B.unmount;le.add(B),B.unmount=function(){le.delete(B),le.size<1&&(c=qi,w&&w(),w=null,l.value=qi,Xe=!1,Y=!1),ge()}}};function Ce(B){return B.reduce((ue,ce)=>ue.then(()=>b(ce)),Promise.resolve())}return xe}function fy(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>Ur(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Ur(c,l))||s.push(l))}return[t,i,s]}function Mh(){return kn(Pl)}function Eh(n){return kn(bh)}const dy=Ft({__name:"App",setup(n){return(e,t)=>(Me(),Pe(st,null,[t[0]||(t[0]=H("header",null,[H("div",{class:"wrapper"})],-1)),Nt(Te(fg))],64))}}),ul="/assets/BackgroundVideo-CO4KmXC1.mp4",py="/assets/snackmanlogo-2-AQA8cd6s.png";var my=!1;/*!
 * pinia v2.2.8
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let dg;const Ll=n=>dg=n,pg=Symbol();function lu(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Co;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Co||(Co={}));function gy(){const n=Vp(!0),e=n.run(()=>Qe({}));let t=[],i=[];const s=ph({install(r){Ll(s),s._a=r,r.provide(pg,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return!this._a&&!my?i.push(r):t.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const mg=()=>{};function Yf(n,e,t,i=mg){n.push(e);const s=()=>{const r=n.indexOf(e);r>-1&&(n.splice(r,1),i())};return!t&&zp()&&k_(s),s}function nr(n,...e){n.slice().forEach(t=>{t(...e)})}const _y=n=>n(),Zf=Symbol(),ic=Symbol();function cu(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],s=n[t];lu(s)&&lu(i)&&n.hasOwnProperty(t)&&!Ct(i)&&!Ui(i)?n[t]=cu(s,i):n[t]=i}return n}const vy=Symbol();function xy(n){return!lu(n)||!n.hasOwnProperty(vy)}const{assign:is}=Object;function yy(n){return!!(Ct(n)&&n.effect)}function Sy(n,e,t,i){const{state:s,actions:r,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=s?s():{});const u=c0(t.state.value[n]);return is(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=ph(_t(()=>{Ll(t);const d=t._s.get(n);return o[f].call(d,d)})),h),{}))}return l=gg(n,c,e,t,i,!0),l}function gg(n,e,t={},i,s,r){let o;const a=is({actions:{}},t),l={deep:!0};let c,u,h=[],f=[],d;const g=i.state.value[n];!r&&!g&&(i.state.value[n]={}),Qe({});let _;function m(U){let b;c=u=!1,typeof U=="function"?(U(i.state.value[n]),b={type:Co.patchFunction,storeId:n,events:d}):(cu(i.state.value[n],U),b={type:Co.patchObject,payload:U,storeId:n,events:d});const x=_=Symbol();Zr().then(()=>{_===x&&(c=!0)}),u=!0,nr(h,b,i.state.value[n])}const p=r?function(){const{state:b}=t,x=b?b():{};this.$patch(C=>{is(C,x)})}:mg;function M(){o.stop(),h=[],f=[],i._s.delete(n)}const T=(U,b="")=>{if(Zf in U)return U[ic]=b,U;const x=function(){Ll(i);const C=Array.from(arguments),D=[],w=[];function P(Y){D.push(Y)}function ee(Y){w.push(Y)}nr(f,{args:C,name:x[ic],store:N,after:P,onError:ee});let $;try{$=U.apply(this&&this.$id===n?this:N,C)}catch(Y){throw nr(w,Y),Y}return $ instanceof Promise?$.then(Y=>(nr(D,Y),Y)).catch(Y=>(nr(w,Y),Promise.reject(Y))):(nr(D,$),$)};return x[Zf]=!0,x[ic]=b,x},S={_p:i,$id:n,$onAction:Yf.bind(null,f),$patch:m,$reset:p,$subscribe(U,b={}){const x=Yf(h,U,b.detached,()=>C()),C=o.run(()=>Qt(()=>i.state.value[n],D=>{(b.flush==="sync"?u:c)&&U({storeId:n,type:Co.direct,events:d},D)},is({},l,b)));return x},$dispose:M},N=ys(S);i._s.set(n,N);const L=(i._a&&i._a.runWithContext||_y)(()=>i._e.run(()=>(o=Vp()).run(()=>e({action:T}))));for(const U in L){const b=L[U];if(Ct(b)&&!yy(b)||Ui(b))r||(g&&xy(b)&&(Ct(b)?b.value=g[U]:cu(b,g[U])),i.state.value[n][U]=b);else if(typeof b=="function"){const x=T(b,U);L[U]=x,a.actions[U]=b}}return is(N,L),is(nt(N),L),Object.defineProperty(N,"$state",{get:()=>i.state.value[n],set:U=>{m(b=>{is(b,U)})}}),i._p.forEach(U=>{is(N,o.run(()=>U({store:N,app:i._a,pinia:i,options:a})))}),g&&r&&t.hydrate&&t.hydrate(N.$state,g),c=!0,u=!0,N}/*! #__NO_SIDE_EFFECTS__ */function Il(n,e,t){let i,s;const r=typeof e=="function";typeof n=="string"?(i=n,s=r?t:e):(s=n,i=n.id);function o(a,l){const c=W0();return a=a||(c?kn(pg,null):null),a&&Ll(a),a=dg,a._s.has(i)||(r?gg(i,e,s,a):Sy(i,s,a)),a._s.get(i)}return o.$id=i,o}function by(n){{const e=nt(n),t={};for(const i in e){const s=e[i];s.effect?t[i]=_t({get:()=>n[i],set(r){n[i]=r}}):(Ct(s)||Ui(s))&&(t[i]=f0(n,i))}return t}}var ls=(n=>(n[n.NEW_GAME=0]="NEW_GAME",n[n.JOIN_GAME=1]="JOIN_GAME",n[n.SELECT_MAP=2]="SELECT_MAP",n))(ls||{});const _o={LF:`
`,NULL:"\0"};class cs{constructor(e){const{command:t,headers:i,body:s,binaryBody:r,escapeHeaderValues:o,skipContentLengthHeader:a}=e;this.command=t,this.headers=Object.assign({},i||{}),r?(this._binaryBody=r,this.isBinaryBody=!0):(this._body=s||"",this.isBinaryBody=!1),this.escapeHeaderValues=o||!1,this.skipContentLengthHeader=a||!1}get body(){return!this._body&&this.isBinaryBody&&(this._body=new TextDecoder().decode(this._binaryBody)),this._body||""}get binaryBody(){return!this._binaryBody&&!this.isBinaryBody&&(this._binaryBody=new TextEncoder().encode(this._body)),this._binaryBody}static fromRawFrame(e,t){const i={},s=r=>r.replace(/^\s+|\s+$/g,"");for(const r of e.headers.reverse()){r.indexOf(":");const o=s(r[0]);let a=s(r[1]);t&&e.command!=="CONNECT"&&e.command!=="CONNECTED"&&(a=cs.hdrValueUnEscape(a)),i[o]=a}return new cs({command:e.command,headers:i,binaryBody:e.binaryBody,escapeHeaderValues:t})}toString(){return this.serializeCmdAndHeaders()}serialize(){const e=this.serializeCmdAndHeaders();return this.isBinaryBody?cs.toUnit8Array(e,this._binaryBody).buffer:e+this._body+_o.NULL}serializeCmdAndHeaders(){const e=[this.command];this.skipContentLengthHeader&&delete this.headers["content-length"];for(const t of Object.keys(this.headers||{})){const i=this.headers[t];this.escapeHeaderValues&&this.command!=="CONNECT"&&this.command!=="CONNECTED"?e.push(`${t}:${cs.hdrValueEscape(`${i}`)}`):e.push(`${t}:${i}`)}return(this.isBinaryBody||!this.isBodyEmpty()&&!this.skipContentLengthHeader)&&e.push(`content-length:${this.bodyLength()}`),e.join(_o.LF)+_o.LF+_o.LF}isBodyEmpty(){return this.bodyLength()===0}bodyLength(){const e=this.binaryBody;return e?e.length:0}static sizeOfUTF8(e){return e?new TextEncoder().encode(e).length:0}static toUnit8Array(e,t){const i=new TextEncoder().encode(e),s=new Uint8Array([0]),r=new Uint8Array(i.length+t.length+s.length);return r.set(i),r.set(t,i.length),r.set(s,i.length+t.length),r}static marshall(e){return new cs(e).serialize()}static hdrValueEscape(e){return e.replace(/\\/g,"\\\\").replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/:/g,"\\c")}static hdrValueUnEscape(e){return e.replace(/\\r/g,"\r").replace(/\\n/g,`
`).replace(/\\c/g,":").replace(/\\\\/g,"\\")}}const Jf=0,ua=10,ha=13,My=58;class Ey{constructor(e,t){this.onFrame=e,this.onIncomingPing=t,this._encoder=new TextEncoder,this._decoder=new TextDecoder,this._token=[],this._initState()}parseChunk(e,t=!1){let i;if(typeof e=="string"?i=this._encoder.encode(e):i=new Uint8Array(e),t&&i[i.length-1]!==0){const s=new Uint8Array(i.length+1);s.set(i,0),s[i.length]=0,i=s}for(let s=0;s<i.length;s++){const r=i[s];this._onByte(r)}}_collectFrame(e){if(e!==Jf&&e!==ha){if(e===ua){this.onIncomingPing();return}this._onByte=this._collectCommand,this._reinjectByte(e)}}_collectCommand(e){if(e!==ha){if(e===ua){this._results.command=this._consumeTokenAsUTF8(),this._onByte=this._collectHeaders;return}this._consumeByte(e)}}_collectHeaders(e){if(e!==ha){if(e===ua){this._setupCollectBody();return}this._onByte=this._collectHeaderKey,this._reinjectByte(e)}}_reinjectByte(e){this._onByte(e)}_collectHeaderKey(e){if(e===My){this._headerKey=this._consumeTokenAsUTF8(),this._onByte=this._collectHeaderValue;return}this._consumeByte(e)}_collectHeaderValue(e){if(e!==ha){if(e===ua){this._results.headers.push([this._headerKey,this._consumeTokenAsUTF8()]),this._headerKey=void 0,this._onByte=this._collectHeaders;return}this._consumeByte(e)}}_setupCollectBody(){const e=this._results.headers.filter(t=>t[0]==="content-length")[0];e?(this._bodyBytesRemaining=parseInt(e[1],10),this._onByte=this._collectBodyFixedSize):this._onByte=this._collectBodyNullTerminated}_collectBodyNullTerminated(e){if(e===Jf){this._retrievedBody();return}this._consumeByte(e)}_collectBodyFixedSize(e){if(this._bodyBytesRemaining--===0){this._retrievedBody();return}this._consumeByte(e)}_retrievedBody(){this._results.binaryBody=this._consumeTokenAsRaw();try{this.onFrame(this._results)}catch(e){console.log("Ignoring an exception thrown by a frame handler. Original exception: ",e)}this._initState()}_consumeByte(e){this._token.push(e)}_consumeTokenAsUTF8(){return this._decoder.decode(this._consumeTokenAsRaw())}_consumeTokenAsRaw(){const e=new Uint8Array(this._token);return this._token=[],e}_initState(){this._results={command:void 0,headers:[],binaryBody:void 0},this._token=[],this._headerKey=void 0,this._onByte=this._collectFrame}}var Ii;(function(n){n[n.CONNECTING=0]="CONNECTING",n[n.OPEN=1]="OPEN",n[n.CLOSING=2]="CLOSING",n[n.CLOSED=3]="CLOSED"})(Ii=Ii||(Ii={}));var Dn;(function(n){n[n.ACTIVE=0]="ACTIVE",n[n.DEACTIVATING=1]="DEACTIVATING",n[n.INACTIVE=2]="INACTIVE"})(Dn=Dn||(Dn={}));class un{constructor(e){this.versions=e}supportedVersions(){return this.versions.join(",")}protocolVersions(){return this.versions.map(e=>`v${e.replace(".","")}.stomp`)}}un.V1_0="1.0";un.V1_1="1.1";un.V1_2="1.2";un.default=new un([un.V1_2,un.V1_1,un.V1_0]);function Ty(n,e){n.terminate=function(){const t=()=>{};this.onerror=t,this.onmessage=t,this.onopen=t;const i=new Date,s=Math.random().toString().substring(2,8),r=this.onclose;this.onclose=o=>{const a=new Date().getTime()-i.getTime();e(`Discarded socket (#${s})  closed after ${a}ms, with code/reason: ${o.code}/${o.reason}`)},this.close(),r==null||r.call(n,{code:4001,reason:`Quick discarding socket (#${s}) without waiting for the shutdown sequence.`,wasClean:!1})}}class Ay{constructor(e,t,i){this._client=e,this._webSocket=t,this._connected=!1,this._serverFrameHandlers={CONNECTED:s=>{this.debug(`connected to server ${s.headers.server}`),this._connected=!0,this._connectedVersion=s.headers.version,this._connectedVersion===un.V1_2&&(this._escapeHeaderValues=!0),this._setupHeartbeat(s.headers),this.onConnect(s)},MESSAGE:s=>{const r=s.headers.subscription,o=this._subscriptions[r]||this.onUnhandledMessage,a=s,l=this,c=this._connectedVersion===un.V1_2?a.headers.ack:a.headers["message-id"];a.ack=(u={})=>l.ack(c,r,u),a.nack=(u={})=>l.nack(c,r,u),o(a)},RECEIPT:s=>{const r=this._receiptWatchers[s.headers["receipt-id"]];r?(r(s),delete this._receiptWatchers[s.headers["receipt-id"]]):this.onUnhandledReceipt(s)},ERROR:s=>{this.onStompError(s)}},this._counter=0,this._subscriptions={},this._receiptWatchers={},this._partialData="",this._escapeHeaderValues=!1,this._lastServerActivityTS=Date.now(),this.debug=i.debug,this.stompVersions=i.stompVersions,this.connectHeaders=i.connectHeaders,this.disconnectHeaders=i.disconnectHeaders,this.heartbeatIncoming=i.heartbeatIncoming,this.heartbeatOutgoing=i.heartbeatOutgoing,this.splitLargeFrames=i.splitLargeFrames,this.maxWebSocketChunkSize=i.maxWebSocketChunkSize,this.forceBinaryWSFrames=i.forceBinaryWSFrames,this.logRawCommunication=i.logRawCommunication,this.appendMissingNULLonIncoming=i.appendMissingNULLonIncoming,this.discardWebsocketOnCommFailure=i.discardWebsocketOnCommFailure,this.onConnect=i.onConnect,this.onDisconnect=i.onDisconnect,this.onStompError=i.onStompError,this.onWebSocketClose=i.onWebSocketClose,this.onWebSocketError=i.onWebSocketError,this.onUnhandledMessage=i.onUnhandledMessage,this.onUnhandledReceipt=i.onUnhandledReceipt,this.onUnhandledFrame=i.onUnhandledFrame}get connectedVersion(){return this._connectedVersion}get connected(){return this._connected}start(){const e=new Ey(t=>{const i=cs.fromRawFrame(t,this._escapeHeaderValues);this.logRawCommunication||this.debug(`<<< ${i}`),(this._serverFrameHandlers[i.command]||this.onUnhandledFrame)(i)},()=>{this.debug("<<< PONG")});this._webSocket.onmessage=t=>{if(this.debug("Received data"),this._lastServerActivityTS=Date.now(),this.logRawCommunication){const i=t.data instanceof ArrayBuffer?new TextDecoder().decode(t.data):t.data;this.debug(`<<< ${i}`)}e.parseChunk(t.data,this.appendMissingNULLonIncoming)},this._webSocket.onclose=t=>{this.debug(`Connection closed to ${this._webSocket.url}`),this._cleanUp(),this.onWebSocketClose(t)},this._webSocket.onerror=t=>{this.onWebSocketError(t)},this._webSocket.onopen=()=>{const t=Object.assign({},this.connectHeaders);this.debug("Web Socket Opened..."),t["accept-version"]=this.stompVersions.supportedVersions(),t["heart-beat"]=[this.heartbeatOutgoing,this.heartbeatIncoming].join(","),this._transmit({command:"CONNECT",headers:t})}}_setupHeartbeat(e){if(e.version!==un.V1_1&&e.version!==un.V1_2||!e["heart-beat"])return;const[t,i]=e["heart-beat"].split(",").map(s=>parseInt(s,10));if(this.heartbeatOutgoing!==0&&i!==0){const s=Math.max(this.heartbeatOutgoing,i);this.debug(`send PING every ${s}ms`),this._pinger=setInterval(()=>{this._webSocket.readyState===Ii.OPEN&&(this._webSocket.send(_o.LF),this.debug(">>> PING"))},s)}if(this.heartbeatIncoming!==0&&t!==0){const s=Math.max(this.heartbeatIncoming,t);this.debug(`check PONG every ${s}ms`),this._ponger=setInterval(()=>{const r=Date.now()-this._lastServerActivityTS;r>s*2&&(this.debug(`did not receive server activity for the last ${r}ms`),this._closeOrDiscardWebsocket())},s)}}_closeOrDiscardWebsocket(){this.discardWebsocketOnCommFailure?(this.debug("Discarding websocket, the underlying socket may linger for a while"),this.discardWebsocket()):(this.debug("Issuing close on the websocket"),this._closeWebsocket())}forceDisconnect(){this._webSocket&&(this._webSocket.readyState===Ii.CONNECTING||this._webSocket.readyState===Ii.OPEN)&&this._closeOrDiscardWebsocket()}_closeWebsocket(){this._webSocket.onmessage=()=>{},this._webSocket.close()}discardWebsocket(){typeof this._webSocket.terminate!="function"&&Ty(this._webSocket,e=>this.debug(e)),this._webSocket.terminate()}_transmit(e){const{command:t,headers:i,body:s,binaryBody:r,skipContentLengthHeader:o}=e,a=new cs({command:t,headers:i,body:s,binaryBody:r,escapeHeaderValues:this._escapeHeaderValues,skipContentLengthHeader:o});let l=a.serialize();if(this.logRawCommunication?this.debug(`>>> ${l}`):this.debug(`>>> ${a}`),this.forceBinaryWSFrames&&typeof l=="string"&&(l=new TextEncoder().encode(l)),typeof l!="string"||!this.splitLargeFrames)this._webSocket.send(l);else{let c=l;for(;c.length>0;){const u=c.substring(0,this.maxWebSocketChunkSize);c=c.substring(this.maxWebSocketChunkSize),this._webSocket.send(u),this.debug(`chunk sent = ${u.length}, remaining = ${c.length}`)}}}dispose(){if(this.connected)try{const e=Object.assign({},this.disconnectHeaders);e.receipt||(e.receipt=`close-${this._counter++}`),this.watchForReceipt(e.receipt,t=>{this._closeWebsocket(),this._cleanUp(),this.onDisconnect(t)}),this._transmit({command:"DISCONNECT",headers:e})}catch(e){this.debug(`Ignoring error during disconnect ${e}`)}else(this._webSocket.readyState===Ii.CONNECTING||this._webSocket.readyState===Ii.OPEN)&&this._closeWebsocket()}_cleanUp(){this._connected=!1,this._pinger&&(clearInterval(this._pinger),this._pinger=void 0),this._ponger&&(clearInterval(this._ponger),this._ponger=void 0)}publish(e){const{destination:t,headers:i,body:s,binaryBody:r,skipContentLengthHeader:o}=e,a=Object.assign({destination:t},i);this._transmit({command:"SEND",headers:a,body:s,binaryBody:r,skipContentLengthHeader:o})}watchForReceipt(e,t){this._receiptWatchers[e]=t}subscribe(e,t,i={}){i=Object.assign({},i),i.id||(i.id=`sub-${this._counter++}`),i.destination=e,this._subscriptions[i.id]=t,this._transmit({command:"SUBSCRIBE",headers:i});const s=this;return{id:i.id,unsubscribe(r){return s.unsubscribe(i.id,r)}}}unsubscribe(e,t={}){t=Object.assign({},t),delete this._subscriptions[e],t.id=e,this._transmit({command:"UNSUBSCRIBE",headers:t})}begin(e){const t=e||`tx-${this._counter++}`;this._transmit({command:"BEGIN",headers:{transaction:t}});const i=this;return{id:t,commit(){i.commit(t)},abort(){i.abort(t)}}}commit(e){this._transmit({command:"COMMIT",headers:{transaction:e}})}abort(e){this._transmit({command:"ABORT",headers:{transaction:e}})}ack(e,t,i={}){i=Object.assign({},i),this._connectedVersion===un.V1_2?i.id=e:i["message-id"]=e,i.subscription=t,this._transmit({command:"ACK",headers:i})}nack(e,t,i={}){return i=Object.assign({},i),this._connectedVersion===un.V1_2?i.id=e:i["message-id"]=e,i.subscription=t,this._transmit({command:"NACK",headers:i})}}class wy{constructor(e={}){this.stompVersions=un.default,this.connectionTimeout=0,this.reconnectDelay=5e3,this.heartbeatIncoming=1e4,this.heartbeatOutgoing=1e4,this.splitLargeFrames=!1,this.maxWebSocketChunkSize=8*1024,this.forceBinaryWSFrames=!1,this.appendMissingNULLonIncoming=!1,this.discardWebsocketOnCommFailure=!1,this.state=Dn.INACTIVE;const t=()=>{};this.debug=t,this.beforeConnect=t,this.onConnect=t,this.onDisconnect=t,this.onUnhandledMessage=t,this.onUnhandledReceipt=t,this.onUnhandledFrame=t,this.onStompError=t,this.onWebSocketClose=t,this.onWebSocketError=t,this.logRawCommunication=!1,this.onChangeState=t,this.connectHeaders={},this._disconnectHeaders={},this.configure(e)}get webSocket(){var e;return(e=this._stompHandler)==null?void 0:e._webSocket}get disconnectHeaders(){return this._disconnectHeaders}set disconnectHeaders(e){this._disconnectHeaders=e,this._stompHandler&&(this._stompHandler.disconnectHeaders=this._disconnectHeaders)}get connected(){return!!this._stompHandler&&this._stompHandler.connected}get connectedVersion(){return this._stompHandler?this._stompHandler.connectedVersion:void 0}get active(){return this.state===Dn.ACTIVE}_changeState(e){this.state=e,this.onChangeState(e)}configure(e){Object.assign(this,e)}activate(){const e=()=>{if(this.active){this.debug("Already ACTIVE, ignoring request to activate");return}this._changeState(Dn.ACTIVE),this._connect()};this.state===Dn.DEACTIVATING?(this.debug("Waiting for deactivation to finish before activating"),this.deactivate().then(()=>{e()})):e()}async _connect(){if(await this.beforeConnect(),this._stompHandler){this.debug("There is already a stompHandler, skipping the call to connect");return}if(!this.active){this.debug("Client has been marked inactive, will not attempt to connect");return}this.connectionTimeout>0&&(this._connectionWatcher&&clearTimeout(this._connectionWatcher),this._connectionWatcher=setTimeout(()=>{this.connected||(this.debug(`Connection not established in ${this.connectionTimeout}ms, closing socket`),this.forceDisconnect())},this.connectionTimeout)),this.debug("Opening Web Socket...");const e=this._createWebSocket();this._stompHandler=new Ay(this,e,{debug:this.debug,stompVersions:this.stompVersions,connectHeaders:this.connectHeaders,disconnectHeaders:this._disconnectHeaders,heartbeatIncoming:this.heartbeatIncoming,heartbeatOutgoing:this.heartbeatOutgoing,splitLargeFrames:this.splitLargeFrames,maxWebSocketChunkSize:this.maxWebSocketChunkSize,forceBinaryWSFrames:this.forceBinaryWSFrames,logRawCommunication:this.logRawCommunication,appendMissingNULLonIncoming:this.appendMissingNULLonIncoming,discardWebsocketOnCommFailure:this.discardWebsocketOnCommFailure,onConnect:t=>{if(this._connectionWatcher&&(clearTimeout(this._connectionWatcher),this._connectionWatcher=void 0),!this.active){this.debug("STOMP got connected while deactivate was issued, will disconnect now"),this._disposeStompHandler();return}this.onConnect(t)},onDisconnect:t=>{this.onDisconnect(t)},onStompError:t=>{this.onStompError(t)},onWebSocketClose:t=>{this._stompHandler=void 0,this.state===Dn.DEACTIVATING&&this._changeState(Dn.INACTIVE),this.onWebSocketClose(t),this.active&&this._schedule_reconnect()},onWebSocketError:t=>{this.onWebSocketError(t)},onUnhandledMessage:t=>{this.onUnhandledMessage(t)},onUnhandledReceipt:t=>{this.onUnhandledReceipt(t)},onUnhandledFrame:t=>{this.onUnhandledFrame(t)}}),this._stompHandler.start()}_createWebSocket(){let e;if(this.webSocketFactory)e=this.webSocketFactory();else if(this.brokerURL)e=new WebSocket(this.brokerURL,this.stompVersions.protocolVersions());else throw new Error("Either brokerURL or webSocketFactory must be provided");return e.binaryType="arraybuffer",e}_schedule_reconnect(){this.reconnectDelay>0&&(this.debug(`STOMP: scheduling reconnection in ${this.reconnectDelay}ms`),this._reconnector=setTimeout(()=>{this._connect()},this.reconnectDelay))}async deactivate(e={}){var r;const t=e.force||!1,i=this.active;let s;if(this.state===Dn.INACTIVE)return this.debug("Already INACTIVE, nothing more to do"),Promise.resolve();if(this._changeState(Dn.DEACTIVATING),this._reconnector&&(clearTimeout(this._reconnector),this._reconnector=void 0),this._stompHandler&&this.webSocket.readyState!==Ii.CLOSED){const o=this._stompHandler.onWebSocketClose;s=new Promise((a,l)=>{this._stompHandler.onWebSocketClose=c=>{o(c),a()}})}else return this._changeState(Dn.INACTIVE),Promise.resolve();return t?(r=this._stompHandler)==null||r.discardWebsocket():i&&this._disposeStompHandler(),s}forceDisconnect(){this._stompHandler&&this._stompHandler.forceDisconnect()}_disposeStompHandler(){this._stompHandler&&this._stompHandler.dispose()}publish(e){this._checkConnection(),this._stompHandler.publish(e)}_checkConnection(){if(!this.connected)throw new TypeError("There is no underlying STOMP connection")}watchForReceipt(e,t){this._checkConnection(),this._stompHandler.watchForReceipt(e,t)}subscribe(e,t,i={}){return this._checkConnection(),this._stompHandler.subscribe(e,t,i)}unsubscribe(e,t={}){this._checkConnection(),this._stompHandler.unsubscribe(e,t)}begin(e){return this._checkConnection(),this._stompHandler.begin(e)}commit(e){this._checkConnection(),this._stompHandler.commit(e)}abort(e){this._checkConnection(),this._stompHandler.abort(e)}ack(e,t,i={}){this._checkConnection(),this._stompHandler.ack(e,t,i)}nack(e,t,i={}){this._checkConnection(),this._stompHandler.nack(e,t,i)}}const Ry=window.location.protocol==="http:"?"ws":"wss",wt=new wy({brokerURL:`${Ry}://${window.location.host}/ws`,connectHeaders:{},onConnect:()=>{console.log("Connected to STOMP")},onDisconnect:()=>{console.log("Disconnected from STOMP")},debug:n=>console.log(n)});function Ws(n,e){if(!n){console.error("Lobby ID is required to subscribe.");return}wt.subscribe(`/topic${n}`,t=>{const i=JSON.parse(t.body);switch(i.type){default:e(i)}})}function Bs(n,e){wt.connected?wt.publish({destination:n,body:JSON.stringify(e)}):console.error("WebSocket is not connected")}var Dl=(n=>(n.REGISTERED="REGISTERED",n.GUEST="GUEST",n))(Dl||{});const sc={ok:!1,gamedata:{id:"",players:[],chickens:[],gamemaster:null,started:!1,playmap:void 0,password:null,characters:{},spawnPoints:[]}};var sn=(n=>(n.SNACKMAN="SNACKMAN",n.GHOST="GHOST",n))(sn||{});const Th=Il("theme",()=>{const n=Qe({christmas:{ground:new URL("/assets/schneeboden-Ld-tX-GP.png",import.meta.url).href,wall:new URL("/assets/ChristmasWall-J7Z1sDjk.png",import.meta.url).href,skybox:new URL("/assets/skywinter-BDygCaF8.png",import.meta.url).href,character:{snackman:new URL("/assets/chrismasSnackman-Dzg4_IfP.glb",import.meta.url).href,ghost:new URL("/assets/ghost-DtZ-_6EW.glb",import.meta.url).href}},realistic:{ground:new URL("/assets/ground-4ICvYzm_.png",import.meta.url).href,wall:new URL("/assets/wall-Dsmy-Flm.png",import.meta.url).href,skybox:new URL("/assets/reasky-DT8MkXfH.png",import.meta.url).href,character:{snackman:new URL("/assets/reasnackman-Dgzq9xDk.glb",import.meta.url).href,ghost:new URL("/assets/ghostRea-deeC5kBa.glb",import.meta.url).href}},retro:{ground:new URL("/assets/grass_1-B8t5F2WK.png",import.meta.url).href,wall:new URL("/assets/cobblestone_2-plYCzG0I.png",import.meta.url).href,skybox:new URL("/assets/sky052k-O2y7nsrW.png",import.meta.url).href,character:{snackman:new URL("/assets/snackmanretro-vIvBLZeG.glb",import.meta.url).href,ghost:{path:new URL("/assets/retroGhost-Bn8H0fLC.glb",import.meta.url).href,scale:.2}}},sweetWorld:{ground:new URL("/assets/schocko-CIvztYPY.png",import.meta.url).href,wall:new URL("/assets/sweetWorldWall-B31FDMhN.png",import.meta.url).href,skybox:new URL("/assets/kugelsky-BFk1HAIu.png",import.meta.url).href,character:{snackman:new URL("/assets/sweetWorldPinkSnackman-DuSw7suG.glb",import.meta.url).href,ghost:new URL("/assets/sweetWorldGhost-DsLIuu-o.glb",import.meta.url).href}}}),e=Qe("realistic");function t(l,c){n.value[l]?(e.value=l,console.log(`Theme: ${l} set successfully.`),s(l,c)):console.log("Fehlgeschlagen, ungültiger Theme:",l)}const i=_t(()=>n.value[e.value]);function s(l,c){c?(Bs(`/topic/game/${c}/setTheme`,{themeName:l}),console.log(`Theme update sent for lobbyId: ${c}`)):console.error("Lobby ID not provided.")}async function r(l){const u=await(await fetch(`/api/game/${l}/selectedTheme`,{method:"POST"})).json();e.value=u.selectedTheme}function o(l){return new Promise(c=>{wt.connected?(a(l),c(!0)):(wt.activate(),wt.onConnect=()=>{a(l),c(!0)})})}function a(l){Ws(`/game/${l}`,c=>{if(c.type==="themeUpdate"&&c.status==="ok"){const u=c.feedback;n.value[u]?(e.value=u,console.log(`Theme updated to: ${u}`)):console.error("Received invalid theme:",u)}})}return{themes:n,selectedTheme:e,setSelectedTheme:t,currentTheme:i,subscribeToThemeUpdates:o,fetchSelectedTheme:r}}),Nl=Il("map",()=>{const n=Qe(0),e=Qe(0),t=Qe([]),i=Qe(""),s=Qe(0),r=Qe(0),o=Qe({maps:[],selectedMap:null});async function a(){try{const m=await(await fetch("/api/maps")).json();if(m.feedback&&typeof m.feedback=="object")o.value.maps=Object.keys(m.feedback).map((p,M)=>({id:M+1,name:p,map:m.feedback[p]}));else throw new Error("Invalid data format");console.log("Fetched Maps:",o.value.maps)}catch(_){console.error("Error fetching maps:",_)}}async function l(){try{const m=await(await fetch("/api/maps/grid-limits")).json();s.value=m.min,r.value=m.max}catch(_){console.error("Error fetching grid limits:",_)}}function c(){if(n.value<=0||e.value<=0){alert("Bitte gültige Werte für Reihen und Spalten eingeben.");return}t.value=Array.from({length:n.value},()=>Array.from({length:e.value},()=>"weg"));for(let _=0;_<n.value;_++)for(let m=0;m<e.value;m++)(_===0||_===n.value-1||m===0||m===e.value-1)&&(t.value[_][m]="wall");console.log(`Erstelle ein Spielfeld mit ${n.value} Reihen und ${e.value} Spalten.`)}function u(_,m){_===0||_===n.value-1||m===0||m===e.value-1||(t.value[_][m]=t.value[_][m]==="wall"?"weg":"wall")}async function h(){if(!i.value.trim()){alert("Please Enter the a name for the Map!");return}//!rows.value||!cols.value|| !grid.value.length
let _=!1;for(let M of t.value){for(let T of M)if(T=="null"){_=!0;break}if(_)break}if(_){alert("Pleas fill the Map at first!");return}await a();let m=!1;for(let M of o.value.maps)M.name.trim().toLowerCase()===i.value.trim().toLowerCase()&&(m=!0);if(m){alert("The name is not available, please choose a different name.");return}const p={name:i.value,tiles:t.value.map(M=>M.join(""))};try{const M=await fetch("/api/maps",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)});if(!M.ok)throw new Error(await M.text());alert("Map erfolgreich gespeichert!"),await a()}catch(M){console.error("Somethink went Wrong :( ",M),alert("Somethink went Wrong :( ")}}function f(_,m){m?(Bs(`/topic/game/${m}/setMap`,{mapName:_}),console.log(`Map update sent for lobbyId: ${m}, Map: ${_}`)):console.error("Lobby ID not provided.")}function d(_){return new Promise(m=>{wt.connected?(g(_),m(!0)):(wt.activate(),wt.onConnect=()=>{g(_),m(!0)})})}function g(_){Ws(`/game/${_}`,m=>{if(m.type==="mapUpdate"&&m.status==="ok"){const p=m.feedback,M=o.value.maps.find(T=>T.name===p);M?(o.value.selectedMap=M,console.log(`Map updated to: ${p}`)):console.error("Received invalid map:",p)}})}return{mapName:i,rows:n,cols:e,grid:t,minGridSize:s,maxGridSize:r,mapsDTD:o,fetchMaps:a,saveMap:h,fetchGridLimits:l,createGrid:c,updateCell:u,sendMapUpdateToBackend:f,subscribeToMapUpdates:d,subscribeToMapUpdatesHandler:g}}),js=Il("gameStore",()=>{const n="/api/game",e="/topic/game",t=ys(sc),i=Ah(),s=Qe(!1),r=Mh();function o(){l()}async function a(x,C){sessionStorage.getItem("myName");const w=await(await fetch(`${n}/${C}/jumpAllowed`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:x})})).json();s.value=w.jumpAllowed}function l(){t.ok=sc.ok,t.gamedata=sc.gamedata}function c(x){t.ok=!0,t.gamedata=x.feedback}async function u(x){if(!x.ok)throw new Error(`Error while fetching data with status: ${x.status}`);const C=await x.json();if(C.status==="error")throw new Error(C.feedback);return C}async function h(x){try{x.playerrole=sn.SNACKMAN,console.log("Erstelle Spiel mit: ",x);const C=await fetch(`${n}/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)}),D=await u(C);c(D),x.password&&(t.gamedata.password=x.password),wt.onConnect=()=>{var w;(w=t.gamedata)!=null&&w.players&&Ws(`/game/${t.gamedata.id}`,P=>{U(P,()=>{})})},wt.connected||wt.activate(),sessionStorage.setItem("myName",x.name),sessionStorage.setItem("playerInfo",JSON.stringify(x)),x.password&&sessionStorage.setItem("password",x.password)}catch(C){o(),console.error("Error creating game:",C)}}function f(x,C){return new Promise(D=>{wt.onConnect=()=>{var w;wt.unsubscribe(`${e}/${x}`),(w=t.gamedata)!=null&&w.players&&(Ws(`/game/${x}`,P=>{U(P,D)}),Bs(`${e}/${x}/join`,C),sessionStorage.setItem("myName",C.name))},wt.connected||wt.activate()})}async function d(x){const C=I();return C?new Promise(D=>{wt.connected?(Bs(`${e}/${t.gamedata.id}/start/${x}`,C),D({ok:!0,message:"Game started",data:null})):D({ok:!1,message:"WebSocket is not connected",data:null})}):new Promise(D=>D({ok:!1,message:"No acting player found",data:null}))}async function g(){try{const x=await fetch(`${n}/end/${t.gamedata.id}`,{method:"POST"}),C=await u(x);c(C)}catch(x){o(),console.error("Error ending game:",x)}}async function _(x,C,D){try{const w=await fetch(`${n}/move/${t.gamedata.id}/${x}/${C}/${D}`,{method:"POST"}),P=await u(w);return c(P),!0}catch(w){return console.error("Error moving player:",w),!1}}function m(x,C){return new Promise(D=>{try{let w=function(){console.log("Sending leave message for:",C.name),Bs(`/topic/game/${x}/leave`,{name:C.name}),Ws(`/game/${x}`,P=>{if(P.status==="ok"){console.log(`${C.name} erfolgreich verlassen.`);const ee=P.feedback;t.gamedata.players.splice(0,t.gamedata.players.length,...ee),sessionStorage.getItem("myName")===C.name&&(sessionStorage.removeItem("myName"),r.push({name:"index"})),D(!0)}else console.error("Leave error:",P.feedback),D(!1)})};wt.connected?w():(wt.activate(),wt.onConnect=()=>{w()})}catch(w){console.error("Error in leaveGame:",w)}})}async function p(){wt.onDisconnect=()=>{window.closed&&wt.connected&&(console.log("ich wurde gelöscht"),wt.deactivate)}}async function M(x,C){try{const D=await fetch(`${n}/kick/${t.gamedata.id}/${x.name}/${C.name}`,{method:"POST"}),w=await u(D);c(w),await m(t.gamedata.id,C),console.log("User {} got kicked from {}",C,x)}catch(D){o(),console.error("Error kicking user:",D)}}async function T(x){try{const C=await fetch(`${n}/setChicken/${t.gamedata.id}/${x}`,{method:"POST"}),D=await u(C);c(D)}catch(C){o(),console.error("Error setting chicken count:",C)}}async function S(){try{const x=await fetch(`${n}/status/${t.gamedata.id}`),C=await u(x);c(C)}catch(x){o(),console.error("Error fetching game status:",x)}}async function N(x,C){try{const D=await fetch(`${n}/setRole/${t.gamedata.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:x,role:C})}),w=await u(D);c(w)}catch(D){o(),console.error("Error set user role:",D)}}function I(){var C,D;const x=sessionStorage.getItem("myName");return(D=(C=t.gamedata)==null?void 0:C.players)==null?void 0:D.find(w=>w.name===x)}function L(x,C,D){const w=I();return w?(console.log("Setting role of "+x+" to "+sn[C]),new Promise(P=>{wt.connected?(Bs(`${e}/${D}/setRole/${x}/${sn[C]}`,w),P({ok:!0,message:"Role set",data:null})):P({ok:!1,message:"WebSocket is not connected",data:null})})):new Promise(P=>P({ok:!1,message:"No acting player found",data:null}))}function U(x,C){if(console.log(x.feedback),x.status==="ok"){switch(i.setErrorMessage(""),x.type){case"playerJoin":t.gamedata.players=x.feedback;break;case"playerRole":t.gamedata.players=x.feedback;break;case"gameStart":t.gamedata=x.feedback,console.log(t);break;case"themeUpdate":const D=Th(),w=x.feedback;D.themes[w]?(D.selectedTheme=w,console.log(`Theme updated to: ${w}`)):console.error("Received invalid theme:",w);break;case"mapUpdate":const P=Nl(),ee=x.feedback,$=P.mapsDTD.maps.find(Y=>Y.name===ee);$?(P.mapsDTD.selectedMap=$,console.log(`Map updated to: ${$.name}`)):console.error("Received invalid map:",ee);break;case"playerMoveValidation":console.log("test");default:console.error("Unknown message type:",x.type)}C(!0)}else i.setErrorMessage(x.feedback),wt.deactivate().then(D=>console.log("Deactivated stompClient:",D)),C(!1)}async function b(x){try{const D=await(await fetch(`${n}/${x}/isPrivate`)).json();if(D.status==="ok")return D.isPrivate;throw new Error(D.message)}catch(C){return console.error("Fehler beim Überprüfen, ob das Spiel privat ist:",C),!1}}return{gameState:t,jumpAllowed:s,createGame:h,startGameViaStomp:d,endGame:g,movePlayer:_,leaveGame:m,kickUser:M,joinLobby:f,setChickenCount:T,fetchGameStatus:S,setPlayerRole:N,setPlayerRoleViaStomp:L,closeTab:p,isGamePrivate:b,getJumpAllowed:a}}),Ah=Il("modal",()=>{const n=Qe(!1),e=Qe(),t=Qe(),i=Qe(""),s=js(),r=Mh(),o=Qe(!1),a=Qe(!1);function l(g,_,m){n.value=!0,e.value=g,t.value=_,a.value=m}function c(){n.value=!1}async function u(g){g.name?(await s.createGame(g),r.push(`/lobby/${s.gameState.gamedata.id}`)):i.value="Bitte einen Usernamen eingeben"}async function h(g){if(!g.name)i.value="Bitte einen Username eingeben";else{if(await s.joinLobby(t.value,g)){s.gameState.gamedata.id,r.push(`/lobby/${t.value}`);return}return}}function f(g){i.value=g}async function d(g){try{const _=await s.isGamePrivate(g);a.value=_,l(ls.JOIN_GAME,g,_)}catch(_){console.error("Fehler beim Überprüfen des privaten Status:",_),i.value="Lobby konnte nicht überprüft werden."}}return{isModalOpen:n,openModal:l,closeModal:c,modalType:e,newGame:u,joinGame:h,setErrorMessage:f,inputErrorMessage:i,requirePassword:o,isGamePrivate:a,checkPrivateGame:d}}),Cy={class:"layout-modal"},Py={class:"bg-black/70 backdrop-blur p-4 rounded-xl w-1/4"},Ly={class:"space-y-4"},wh=Ft({__name:"Modal",setup(n){return(e,t)=>(Me(),Pe("div",Cy,[H("div",Py,[H("div",null,[Zc(e.$slots,"titel")]),H("div",Ly,[Zc(e.$slots,"content")])])]))}}),Iy={class:"text-lg text-white text-semibold mb-4"},Dy={class:"flex flex-col gap-3"},Ny={key:0,class:"input-error-message text-red-600"},Uy={key:1},Oy={class:"mt-4 mb-4 mflex itmes-center space-x-2"},Fy={key:0},ky={class:"flex space-x-4"},By={class:"layout-main"},Hy={class:"flex flex-col gap-3"},Vy=Ft({__name:"Index",setup(n){const e=Ah();js();const t=Qe("");Qe("");const i=ys({name:"",email:"",password:"",playertype:Dl.GUEST,playerrole:sn.GHOST});function s(){qr.push({name:"createmap"})}return(r,o)=>(Me(),Pe(st,null,[Te(e).isModalOpen?(Me(),wn(wh,{key:0},{titel:ei(()=>[H("h2",Iy,lt(Te(e).modalType===Te(ls).JOIN_GAME?"Join Game":"Create a new Game"),1)]),content:ei(()=>[H("div",Dy,[qt(H("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>i.name=a),type:"text",name:"name",id:"name",class:"block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",placeholder:"Username eingeben"},null,512),[[fn,i.name]]),Te(e).inputErrorMessage?(Me(),Pe("div",Ny,lt(Te(e).inputErrorMessage),1)):gt("",!0),Te(e).modalType===Te(ls).NEW_GAME?(Me(),Pe("div",Uy,[H("label",Oy,[qt(H("input",{type:"checkbox","onUpdate:modelValue":o[1]||(o[1]=a=>Te(e).requirePassword=a),id:"requirePassword",class:"form-checkbox rounded shadow-sm hover:shadow-md transition-shadow duration-300"},null,512),[[nx,Te(e).requirePassword]]),o[10]||(o[10]=H("span",{class:"text-white"},"Private Game",-1))]),Te(e).requirePassword?qt((Me(),Pe("input",{key:0,"onUpdate:modelValue":o[2]||(o[2]=a=>i.password=a),type:"text",id:"password",class:"block w-full rounded-md mt-2 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",placeholder:"Passwort eingeben"},null,512)),[[fn,i.password]]):gt("",!0)])):gt("",!0)]),Te(e).modalType===Te(ls).JOIN_GAME?(Me(),Pe("div",Fy,[Te(e).isGamePrivate?qt((Me(),Pe("input",{key:0,"onUpdate:modelValue":o[3]||(o[3]=a=>i.password=a),type:"text",id:"password",class:"block w-full rounded-md mt-2 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",placeholder:"Passwort eingeben"},null,512)),[[fn,i.password]]):gt("",!0)])):gt("",!0),H("div",ky,[H("button",{class:"font-semibold text-zinc-800 p-3 rounded-md bg-gray-200",onClick:o[4]||(o[4]=a=>Te(e).modalType===Te(ls).NEW_GAME?Te(e).newGame(i):Te(e).joinGame(i))},"Weiter"),H("button",{class:"font-semibold text-zinc-800 p-3 rounded-md bg-gray-200",onClick:o[5]||(o[5]=a=>Te(e).closeModal())},"Schließen")])]),_:1})):gt("",!0),H("div",By,[o[11]||(o[11]=H("video",{autoplay:"",loop:"",muted:"",class:"absolute blur-sm top-0 left-0 w-full h-full object-cover -z-10"},[H("source",{src:ul,type:"video/webm"})],-1)),o[12]||(o[12]=H("div",null,[H("img",{src:py,class:"-mb-4"})],-1)),H("div",Hy,[H("button",{class:"btn-new",onClick:o[6]||(o[6]=a=>Te(e).openModal(Te(ls).NEW_GAME,"",!1))},"New Game"),H("div",null,[qt(H("input",{type:"text","onUpdate:modelValue":o[7]||(o[7]=a=>t.value=a),placeholder:"Game Id eingeben",class:"p-3 bg-white/70 backdrop-blur-lg placeholder:text-zinc-700 rounded-l"},null,512),[[fn,t.value]]),H("button",{class:"bg-white/40 text-black p-3 font-semibold hover:bg-gray-100 backdrop-blur-lg shadow-sm rounded-r text-black",onClick:o[8]||(o[8]=a=>Te(e).checkPrivateGame(t.value))},"Join")]),H("button",{class:"btn-new",onClick:o[9]||(o[9]=a=>Te(qr).push("/lobby"))},"Find Lobbies/Games"),H("button",{class:"btn-new",onClick:s},"Map Creator")])])],64))}}),zy={class:"px-6 py-3 text-gray-600"},Gy={class:"px-6 py-3 text-gray-600"},Wy={class:"px-6 py-3"},Xy=Ft({__name:"LobbyTabellenZeile",props:{game:{}},setup(n){return js(),(e,t)=>{var i;return Me(),Pe(st,null,[H("td",zy,[t[1]||(t[1]=H("span",{class:"font-medium px-6 py-3"},null,-1)),Wt(" "+lt(e.game.id),1)]),H("td",Gy,[t[2]||(t[2]=H("span",{class:"font-medium px-6 py-3"},null,-1)),Wt(" "+lt(((i=e.game.gamemaster)==null?void 0:i.name)||"Unknown"),1)]),H("td",Wy,[H("button",{onClick:t[0]||(t[0]=s=>e.$emit("open-modal",Te(ls).JOIN_GAME,e.game.id)),class:"rounded-lg bg-gray-300 opacity-50 hover:bg-gray-400 p-3 px-6 py-3 card"}," Join ")])],64)}}}),$y={class:"flex flex-col gap-3"},jy={key:0,class:"input-error-message"},qy={class:"flex space-x-4"},Ky={class:"flex items-center justify-center min-h-screen"},Yy={class:"card-adventure max-w-4xl"},Zy={class:"table-auto w-full border-rounded-lg border-collapse border border-gray-300"},Jy=["game"],Qy="/api/game",eS=Ft({__name:"LobbyList",setup(n){const e=Ah(),t=Qe([]),i=ys({name:"",email:"",password:"",playertype:Dl.GUEST,playerrole:sn.GHOST});async function s(){try{const o=await(await fetch(`${Qy}/games`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();if(o.status=="ok")t.value=o.feedback;else throw new Error("Something went wrong, while receiving Games!")}catch{console.error("Error getting Games!")}}return Un(()=>{s()}),(r,o)=>(Me(),Pe(st,null,[Te(e).isModalOpen?(Me(),wn(wh,{key:0},{titel:ei(()=>o[5]||(o[5]=[H("h2",{class:"text-lg text-white text-semibold mb-4"},"Join Game",-1)])),content:ei(()=>[H("div",$y,[qt(H("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>i.name=a),type:"text",name:"name",id:"name",class:"block w-full rounded-md mt-2 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",placeholder:"Username eingeben"},null,512),[[fn,i.name]]),Te(e).inputErrorMessage?(Me(),Pe("div",jy,lt(Te(e).inputErrorMessage),1)):gt("",!0)]),Te(e).isGamePrivate?qt((Me(),Pe("input",{key:0,"onUpdate:modelValue":o[1]||(o[1]=a=>i.password=a),type:"text",id:"password",class:"block w-full rounded-md mt-2 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",placeholder:"Passwort eingeben"},null,512)),[[fn,i.password]]):gt("",!0),H("div",qy,[H("button",{class:"font-semibold text-zinc-800 p-3 rounded-md bg-gray-200",onClick:o[2]||(o[2]=a=>Te(e).joinGame(i))},"Weiter"),H("button",{class:"font-semibold text-zinc-800 p-3 rounded-md bg-gray-200",onClick:o[3]||(o[3]=a=>Te(e).closeModal())},"Schließen")])]),_:1})):gt("",!0),H("div",Ky,[o[7]||(o[7]=H("video",{autoplay:"",loop:"",muted:"",class:"absolute blur-sm top-0 left-0 w-full h-full object-cover -z-10"},[H("source",{src:ul,type:"video/webm"}),H("source",{src:ul,type:"video/mp4"})],-1)),H("div",Yy,[H("table",Zy,[o[6]||(o[6]=H("thead",null,[H("tr",{class:"bg-gray-100 opacity-60"},[H("th",{class:"px-6 py-3 text-gray-700"},"Lobby"),H("th",{class:"px-6 py-3 text-gray-700"},"Host"),H("th",{class:"px-6 py-3 text-gray-700"},"Action")])],-1)),H("tbody",null,[(Me(!0),Pe(st,null,jn(t.value,a=>(Me(),Pe("tr",{key:a.id,game:a},[Nt(Xy,{game:a,onOpenModal:l=>Te(e).checkPrivateGame(a.id)},null,8,["game","onOpenModal"])],8,Jy))),128))])]),H("button",{class:"mt-4 w-full p-3 font-semibold text-zinc-800 rounded-md bg-gray-200 hover:bg-gray-100 backdrop-blur-lg shadow-sm",onClick:o[4]||(o[4]=a=>Te(qr).push("/index"))}," Back ")])])],64))}}),tS={class:"flex flex-col flex-grow"},nS={class:"text-lg font-semibold text-blue-600"},iS={class:"flex items-center space-x-2"},sS=["value"],rS=["value"],oS=Ft({__name:"PlayerTile",props:O0({lobbyId:{type:String,required:!0}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const e=n,t=rv(n,"modelValue"),i=js(),{setPlayerRoleViaStomp:s,kickUser:r}=i;async function o(u){await s(u.name,u.playerrole,e.lobbyId).then(h=>{console.log(h)})}const a=js(),l=_t(()=>{var f;const u=sessionStorage.getItem("myName"),h=(f=a.gameState.gamedata)==null?void 0:f.gamemaster;return(h==null?void 0:h.name)===u&&(h==null?void 0:h.playertype)});async function c(u){var f;const h=(f=i.gameState.gamedata)==null?void 0:f.gamemaster;if(!h){console.log("Gamemaster nicht gefunden!");return}try{await r(h,u)}catch(d){console.log(d)}}return(u,h)=>(Me(),Pe(st,null,[H("p",{class:Tn([{"text-gray-500 bg-darkgray border bg-red-500":!1,"text-green-500 bg-darkgray border bg-green-500":!0},"transition text-center w-4 h-4 rounded-full"])}),H("div",tS,[H("p",nS,lt(t.value.name),1)]),H("div",iS,[qt(H("select",{"onUpdate:modelValue":h[0]||(h[0]=f=>t.value.playerrole=f),onChange:h[1]||(h[1]=f=>o(t.value)),class:"w-28 h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[H("option",{value:Te(sn).SNACKMAN},"Snackman",8,sS),H("option",{value:Te(sn).GHOST},"Ghost",8,rS)],544),[[ix,t.value.playerrole]]),l.value?(Me(),Pe("button",{key:0,class:"px-2 py-1 text-sm font-small text-white bg-red-500 rounded hover:bg-red-600 transition",onClick:h[2]||(h[2]=f=>c(t.value))}," Kick ")):gt("",!0)])],64))}}),aS={class:"flex gap-12 mx-auto max-w-7xl justify-center h-auto mt-24 py-4 items-center"},lS={class:"flex-1 h-max self-start"},cS={class:"space-x-2 bg-black/70 border-2 h-max border-yellow-400 backdrop-blur rounded-xl h-full p-2 w-full divide-y divide-gray-300/30"},uS={class:"pr-4 pl-4 p-2 text-gray-200/40 flex items-center justify-between transition-colors"},hS={class:"flex-1 h-full"},fS={class:"max-w-lg bg-black/70 border-yellow-400 backdrop-blur rounded-xl border-2 p-4"},dS={class:"text-2xl font-semibold text-zinc-200"},pS={class:"flex gap-2"},mS={class:"text-white flex gap-2 p-2"},gS={class:"text-white flex gap-2 p-2"},_S={class:"mb-4"},vS={class:"flex items-center space-x-2"},xS={key:0,class:"mb-4 max-w-lg"},yS={class:"flex items-center space-x-2"},SS=["value"],bS={class:"flex w-full gap-2 mt-2"},MS={class:"flex flex-col flex-1"},ES={class:"flex gap-2"},TS=["disabled"],AS={key:0,class:"fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"},wS={class:"bg-zinc-800 p-6 rounded-lg shadow-lg max-w-4xl w-full"},RS={class:"grid grid-cols-2 gap-4"},CS=["onClick"],PS=["id"],LS={class:"text-center text-zinc-200 font-semibold"},IS={class:"flex justify-between mt-4"},DS={key:0,class:"fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"},NS={class:"bg-zinc-800 p-6 rounded-lg shadow-lg max-w-lg w-full"},US={class:"grid grid-cols-2 gap-4 mt-4"},OS=["onClick"],FS={class:"flex justify-end mt-4"},kS=7,BS=Ft({__name:"GameLobbyView",setup(n){const e=Th(),t=Qe(!1),i=js(),{setPlayerRoleViaStomp:s}=i,r=Eh(),o=Mh(),a=Nl(),l=Qe(!1),c=Qe(null),u=Qe(!0);Qe(!1);const h=r.params.id.toString(),f=_t(()=>{var w;return((w=i.gameState.gamedata)==null?void 0:w.players)||[]}),d=_t(()=>kS-f.value.length),g=_t(()=>{var w;return((w=i.gameState.gamedata)==null?void 0:w.password)||null}),_=_t({get:()=>{var w;return((w=i.gameState.gamedata)==null?void 0:w.chickens.length)||0},set:async w=>{await i.setChickenCount(w)}}),m=_t(()=>{var ee;const w=sessionStorage.getItem("myName"),P=(ee=i.gameState.gamedata)==null?void 0:ee.gamemaster;return(P==null?void 0:P.name)===w&&(P==null?void 0:P.name)});Qt(()=>{var w;return(w=i.gameState.gamedata)==null?void 0:w.started},w=>{w&&o.push({name:"game"})});async function p(){const w=[sn.SNACKMAN,sn.GHOST];for(const P of f.value){const ee=w[Math.floor(Math.random()*w.length)];P.playerrole=ee,console.log(`Assigning random role ${ee} to player ${P.name}`),await s(P.name,ee,h).then($=>{console.log($)})}}async function M(){var w,P;try{if(!((w=a.mapsDTD.selectedMap)!=null&&w.map))throw new Error("No map selected!");await i.startGameViaStomp((P=a.mapsDTD.selectedMap)==null?void 0:P.name),console.log(i.gameState),console.log("playMap: ",i.gameState.gamedata.playmap)}catch(ee){console.log(ee)}}function T(){alert("Copied to Clipboard!"),navigator.clipboard.writeText(h)}async function S(w){try{const P=sessionStorage.getItem("myName");if(!P){console.error("nicht gefunden");return}const ee=f.value.find(Y=>Y.name===P);if(!ee){console.error("Spieler nicht in der Liste gefunden!");return}console.log("Lobby-Daten vor leaveGame:",f.value);const $=await i.leaveGame(w,ee);console.log("Leaving Game succeeded:",$),console.log("Lobby-Daten nach leaveGame:",f.value)}catch(P){console.log("Fehler beim ausfueren des leaven",P)}}Un(async()=>{var w;try{await i.fetchGameStatus(),await e.fetchSelectedTheme(h),console.log("Passwort von gamestate",(w=i.gameState.gamedata)==null?void 0:w.password)}catch(P){console.error("Error fetching game status:",P)}}),Un(async()=>{try{await a.fetchMaps(),a.mapsDTD.maps.length>0&&(a.mapsDTD.selectedMap=a.mapsDTD.maps[0],c.value=a.mapsDTD.selectedMap,console.log("Default:",c.value.name))}catch(w){console.error("Error during setup:",w)}}),Qt(()=>l.value,async w=>{w&&(console.log("Popup is now visible. Drawing maps..."),await Zr(),N())});async function N(){a.mapsDTD.maps.forEach(w=>{console.log(`Drawing map with ID: ${w.id}`),x(w)})}function I(){l.value=!0}function L(){l.value=!1}window.addEventListener("beforeunload",w=>{w.preventDefault();const P=sessionStorage.getItem("myName");P&&f.value.find($=>$.name===P)&&S(h)}),Un(async()=>{const w=localStorage.getItem(`gameState-${h}`);if(w)try{const P=JSON.parse(w);(P==null?void 0:P.id)===h&&(i.gameState.gamedata=P)}catch(P){console.error("Error parsing stored game state:",P)}try{await i.fetchGameStatus()}catch(P){console.error("Error fetching game status:",P)}}),Qt(()=>i.gameState.gamedata,w=>{w!=null&&w.id&&localStorage.setItem(`gameState-${w.id}`,JSON.stringify(w))},{deep:!0}),Qt(()=>a.mapsDTD,w=>{var P;((P=w==null?void 0:w.maps)==null?void 0:P.length)>0&&(localStorage.setItem(`maps-${h}`,JSON.stringify(w.maps)),w.selectedMap&&localStorage.setItem(`selectedMap-${h}`,JSON.stringify(w.selectedMap)))},{deep:!0}),Un(async()=>{try{const w=localStorage.getItem(`maps-${h}`),P=localStorage.getItem(`selectedMap-${h}`);w&&(a.mapsDTD.maps=JSON.parse(w)),P&&(a.mapsDTD.selectedMap=JSON.parse(P),c.value=a.mapsDTD.selectedMap),w||await a.fetchMaps(),!P&&a.mapsDTD.maps.length>0&&(a.mapsDTD.selectedMap=a.mapsDTD.maps[0],c.value=a.mapsDTD.selectedMap)}catch(w){console.error("Error during map setup:",w)}}),Un(async()=>{try{await i.fetchGameStatus()}catch(w){console.error("Error fetching game status:",w)}});function U(){const w=a.mapsDTD.maps;if(w.length>0){const P=Math.floor(Math.random()*w.length),ee=w[P];c.value=ee,a.mapsDTD.selectedMap=ee,console.log("Randomly selected map:",ee.name)}else alert("No maps available to select.")}function b(w){c.value=w,a.mapsDTD.selectedMap=w,a.sendMapUpdateToBackend(w.name,h),localStorage.setItem(`map-${h}`,JSON.stringify(w))}function x(w){const P=document.getElementById("mapCanvas-"+w.id);if(!P){console.error(`Canvas with ID 'mapCanvas-${w.id}' not found in the DOM.`);return}const ee=P.getContext("2d");if(!ee){console.error(`2D context for canvas 'mapCanvas-${w.id}' not available.`);return}const $=20,Y=w.map.length,X=w.map[0].length;P.width=X*$,P.height=Y*$;for(let _e=0;_e<Y;_e++)for(let Ae=0;Ae<X;Ae++){const Ie=w.map[_e][Ae];ee.fillStyle=Ie==="*"?"black":"blue",ee.fillRect(Ae*$,_e*$,$,$),ee.strokeStyle="black",ee.strokeRect(Ae*$,_e*$,$,$)}console.log(`Map ${w.id} drawn successfully.`)}function C(){t.value=!0}function D(){const w=e.selectedTheme;w?(console.log("Selected theme:",w),e.subscribeToThemeUpdates(h).then(()=>{console.log("Successfully subscribed to theme updates.")})):console.error("no theme selected!"),t.value=!1}return(w,P)=>{var ee,$;return Me(),Pe(st,null,[P[22]||(P[22]=H("video",{autoplay:"",loop:"",muted:"",class:"absolute blur-sm top-0 left-0 w-full h-full object-cover -z-10"},[H("source",{src:ul,type:"video/webm"})],-1)),H("div",aS,[H("div",lS,[H("ul",cS,[(Me(!0),Pe(st,null,jn(f.value,(Y,X)=>(Me(),Pe("li",{key:Y.name,class:"pr-4 pl-4 p-2 flex items-center space-x-4 text-white"},[Nt(oS,{modelValue:f.value[X],"onUpdate:modelValue":_e=>f.value[X]=_e,"lobby-id":Te(h)},null,8,["modelValue","onUpdate:modelValue","lobby-id"])]))),128)),(Me(!0),Pe(st,null,jn(d.value,Y=>(Me(),Pe("li",uS," Empty "))),256))]),m.value?(Me(),Pe("button",{key:0,class:"w-full mt-2 flex gap-2 px-4 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 font-semibold text-black p-3 rounded-lg hover:bg-yellow-600 transition",onClick:P[0]||(P[0]=Y=>p())},P[11]||(P[11]=[mv('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dices"><rect width="12" height="12" x="2" y="10" rx="2" ry="2"></rect><path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"></path><path d="M6 18h.01"></path><path d="M10 14h.01"></path><path d="M15 6h.01"></path><path d="M18 9h.01"></path></svg> Randomize Roles ',2)]))):gt("",!0)]),H("div",hS,[H("div",fS,[H("h1",dS,lt((ee=Te(i).gameState.gamedata.gamemaster)==null?void 0:ee.name)+"'s Game",1),P[17]||(P[17]=H("hr",{class:"my-4 border-white/20"},null,-1)),H("div",pS,[H("div",mS,[P[12]||(P[12]=H("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-map"},[H("path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}),H("path",{d:"M15 5.764v15"}),H("path",{d:"M9 3.236v15"})],-1)),H("p",null,lt((($=Te(a).mapsDTD.selectedMap)==null?void 0:$.name)||"None"),1)]),H("div",gS,[P[13]||(P[13]=H("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-paintbrush"},[H("path",{d:"m14.622 17.897-10.68-2.913"}),H("path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"}),H("path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"})],-1)),H("p",null,lt(Te(e).selectedTheme||"None"),1)])]),P[18]||(P[18]=H("hr",{class:"my-4 border-white/20"},null,-1)),H("div",_S,[P[14]||(P[14]=H("p",{class:"text-lg font-semibold text-zinc-200"},"Lobby Code",-1)),H("div",vS,[qt(H("input",{type:"text",class:"w-full p-3 bg-black backdrop-blur border-b border-yellow-400 rounded-lg text-zinc-300",disabled:"true","onUpdate:modelValue":P[1]||(P[1]=Y=>Ct(h)?h.value=Y:null)},null,512),[[fn,Te(h)]]),H("button",{class:"bg-gradient-to-r from-yellow-400 to-amber-500 font-semibold text-black p-3 rounded-lg hover:bg-yellow-600 transition",onClick:P[2]||(P[2]=Y=>T())}," Copy ")])]),m.value&&g.value?(Me(),Pe("div",xS,[P[15]||(P[15]=H("p",{class:"text-lg font-semibold text-zinc-200"},"Lobby Passwort",-1)),H("div",yS,[H("input",{type:"text",class:"w-full p-3 bg-black backdrop-blur border-b border-yellow-400 rounded-lg text-zinc-300",value:g.value,disabled:"true"},null,8,SS)])])):gt("",!0),H("div",bS,[m.value?(Me(),Pe("button",{key:0,class:"bg-gradient-to-r flex-1 from-yellow-400 to-amber-500 font-semibold text-black p-3 rounded-lg hover:bg-yellow-600 transition",onClick:P[3]||(P[3]=Y=>I())}," Select Map ")):gt("",!0),m.value?(Me(),Pe("button",{key:1,class:"bg-gradient-to-r flex-1 from-yellow-400 to-amber-500 font-semibold text-black p-3 rounded-lg hover:bg-yellow-600 transition",onClick:P[4]||(P[4]=Y=>C())}," Select Themes ")):gt("",!0),H("div",MS,[P[16]||(P[16]=H("p",{class:"text-lg w-50 font-semibold text-zinc-200"}," Chickens: ",-1)),qt(H("input",{type:"number","onUpdate:modelValue":P[5]||(P[5]=Y=>_.value=Y),class:"p-3 bg-black backdrop-blur border-b border-yellow-400 rounded-lg text-zinc-300"},null,512),[[fn,_.value]])])]),H("div",ES,[H("button",{class:Tn([{"bg-green-700 hover:bg-green-800 text-zinc-200":u.value,"bg-gray-600":!u.value},"w-full mt-5 px-6 py-3 text-lg font-semibold rounded-lg transition"]),disabled:!u.value,onClick:P[6]||(P[6]=Y=>M())},lt(u.value?"Start Game":"---"),11,TS),H("button",{class:Tn([{"bg-red-700 hover:bg-red-800 text-zinc-200":u.value,"bg-gray-600":!u.value},"w-full mt-5 px-6 py-3 text-lg font-semibold rounded-lg transition"]),onClick:P[7]||(P[7]=Y=>S(Te(h)))}," Leave ",2)])]),l.value?(Me(),Pe("div",AS,[H("div",wS,[P[19]||(P[19]=H("h2",{class:"text-lg font-semibold text-zinc-200 mb-4"},"Select a Map",-1)),H("div",RS,[(Me(!0),Pe(st,null,jn(Te(a).mapsDTD.maps,Y=>{var X;return Me(),Pe("div",{key:Y.id,class:Tn(["p-4 rounded-lg shadow-lg transition cursor-pointer",Y.id===((X=c.value)==null?void 0:X.id)?"bg-blue-700 border-blue-400":"bg-gray-800 hover:bg-gray-700"]),onClick:_e=>b(Y)},[H("canvas",{id:"mapCanvas-"+Y.id,class:"w-full h-40 border border-zinc-500 bg-blue-600"},null,8,PS),H("p",LS,lt(Y.name),1)],10,CS)}),128))]),H("div",IS,[H("button",{class:"bg-blue-600 hover:bg-blue-700 text-zinc-200 py-1 px-4 rounded-lg transition",onClick:P[8]||(P[8]=Y=>U())}," Random Map "),H("button",{class:"bg-red-600 hover:bg-red-700 text-zinc-200 py-1 px-4 rounded-lg transition",onClick:P[9]||(P[9]=Y=>L())}," OK ")])])])):gt("",!0)]),t.value?(Me(),Pe("div",DS,[H("div",NS,[P[20]||(P[20]=H("h2",{class:"text-lg font-semibold text-zinc-200 mb-4"},"Select a Theme",-1)),P[21]||(P[21]=H("p",{class:"text-zinc-300"},"Choose a Theme for the game.",-1)),H("div",US,[(Me(!0),Pe(st,null,jn(Te(e).themes,(Y,X)=>(Me(),Pe("button",{key:X,class:Tn(["p-4 rounded-lg shadow-lg transition font-semibold",X===Te(e).selectedTheme?"bg-blue-700 text-white border-blue-400":"bg-gray-800 text-zinc-200 hover:bg-gray-700"]),onClick:_e=>Te(e).setSelectedTheme(X,Te(h))},lt(X),11,OS))),128))]),H("div",FS,[H("button",{class:"bg-blue-600 hover:bg-blue-700 text-zinc-200 py-1 px-4 rounded-lg transition",onClick:P[10]||(P[10]=Y=>D())}," OK ")])])])):gt("",!0)])],64)}}}),HS="/assets/herz-BDr62fbB.png",VS="/assets/emptyHerz-Nnh5wdS8.png";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rh="170",zS=0,Qf=1,GS=2,_g=1,WS=2,wi=3,Hi=0,Dt=1,ui=2,ds=0,Rr=1,ed=2,td=3,nd=4,XS=5,Fs=100,$S=101,jS=102,qS=103,KS=104,YS=200,ZS=201,JS=202,QS=203,uu=204,hu=205,eb=206,tb=207,nb=208,ib=209,sb=210,rb=211,ob=212,ab=213,lb=214,fu=0,du=1,pu=2,Fr=3,mu=4,gu=5,_u=6,vu=7,vg=0,cb=1,ub=2,ps=0,hb=1,fb=2,db=3,pb=4,mb=5,gb=6,_b=7,id="attached",vb="detached",xg=300,kr=301,Br=302,xu=303,yu=304,Ul=306,Hr=1e3,hs=1001,hl=1002,dn=1003,yg=1004,vo=1005,Rn=1006,$a=1007,Di=1008,Vi=1009,Sg=1010,bg=1011,Go=1012,Ch=1013,qs=1014,qn=1015,Jo=1016,Ph=1017,Lh=1018,Vr=1020,Mg=35902,Eg=1021,Tg=1022,On=1023,Ag=1024,wg=1025,Cr=1026,zr=1027,Ih=1028,Dh=1029,Rg=1030,Nh=1031,Uh=1033,ja=33776,qa=33777,Ka=33778,Ya=33779,Su=35840,bu=35841,Mu=35842,Eu=35843,Tu=36196,Au=37492,wu=37496,Ru=37808,Cu=37809,Pu=37810,Lu=37811,Iu=37812,Du=37813,Nu=37814,Uu=37815,Ou=37816,Fu=37817,ku=37818,Bu=37819,Hu=37820,Vu=37821,Za=36492,zu=36494,Gu=36495,Cg=36283,Wu=36284,Xu=36285,$u=36286,Wo=2300,Xo=2301,rc=2302,sd=2400,rd=2401,od=2402,xb=2500,yb=0,Pg=1,ju=2,Sb=3200,bb=3201,Lg=0,Mb=1,us="",jt="srgb",mn="srgb-linear",Ol="linear",yt="srgb",ir=7680,ad=519,Eb=512,Tb=513,Ab=514,Ig=515,wb=516,Rb=517,Cb=518,Pb=519,qu=35044,ld="300 es",Ni=2e3,fl=2001;class Ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cd=1234567;const Po=Math.PI/180,Gr=180/Math.PI;function Zn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function nn(n,e,t){return Math.max(e,Math.min(t,n))}function Oh(n,e){return(n%e+e)%e}function Lb(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Ib(n,e,t){return n!==e?(t-n)/(e-n):0}function Lo(n,e,t){return(1-t)*n+t*e}function Db(n,e,t,i){return Lo(n,e,1-Math.exp(-t*i))}function Nb(n,e=1){return e-Math.abs(Oh(n,e*2)-e)}function Ub(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ob(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Fb(n,e){return n+Math.floor(Math.random()*(e-n+1))}function kb(n,e){return n+Math.random()*(e-n)}function Bb(n){return n*(.5-Math.random())}function Hb(n){n!==void 0&&(cd=n);let e=cd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vb(n){return n*Po}function zb(n){return n*Gr}function Gb(n){return(n&n-1)===0&&n!==0}function Wb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xb(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $b(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const jb={DEG2RAD:Po,RAD2DEG:Gr,generateUUID:Zn,clamp:nn,euclideanModulo:Oh,mapLinear:Lb,inverseLerp:Ib,lerp:Lo,damp:Db,pingpong:Nb,smoothstep:Ub,smootherstep:Ob,randInt:Fb,randFloat:kb,randFloatSpread:Bb,seededRandom:Hb,degToRad:Vb,radToDeg:zb,isPowerOfTwo:Gb,ceilPowerOfTwo:Wb,floorPowerOfTwo:Xb,setQuaternionFromProperEuler:$b,normalize:vt,denormalize:Xn};class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,s,r,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],M=s[1],T=s[4],S=s[7],N=s[2],I=s[5],L=s[8];return r[0]=o*_+a*M+l*N,r[3]=o*m+a*T+l*I,r[6]=o*p+a*S+l*L,r[1]=c*_+u*M+h*N,r[4]=c*m+u*T+h*I,r[7]=c*p+u*S+h*L,r[2]=f*_+d*M+g*N,r[5]=f*m+d*T+g*I,r[8]=f*p+d*S+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oc.makeScale(e,t)),this}rotate(e){return this.premultiply(oc.makeRotation(-e)),this}translate(e,t){return this.premultiply(oc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oc=new Ze;function Dg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qb(){const n=$o("canvas");return n.style.display="block",n}const ud={};function xo(n){n in ud||(ud[n]=!0,console.warn(n))}function Kb(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Yb(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zb(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const it={enabled:!0,workingColorSpace:mn,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===yt&&(n.r=Fi(n.r),n.g=Fi(n.g),n.b=Fi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===yt&&(n.r=Pr(n.r),n.g=Pr(n.g),n.b=Pr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===us?Ol:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const hd=[.64,.33,.3,.6,.15,.06],fd=[.2126,.7152,.0722],dd=[.3127,.329],pd=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),md=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);it.define({[mn]:{primaries:hd,whitePoint:dd,transfer:Ol,toXYZ:pd,fromXYZ:md,luminanceCoefficients:fd,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:hd,whitePoint:dd,transfer:yt,toXYZ:pd,fromXYZ:md,luminanceCoefficients:fd,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}});let sr;class Jb{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sr===void 0&&(sr=$o("canvas")),sr.width=e.width,sr.height=e.height;const i=sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$o("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fi(t[i]/255)*255):t[i]=Fi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qb=0;class Ng{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qb++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ac(s[o].image)):r.push(ac(s[o]))}else r=ac(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ac(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jb.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eM=0;class $t extends Ys{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=hs,s=hs,r=Rn,o=Di,a=On,l=Vi,c=$t.DEFAULT_ANISOTROPY,u=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Zn(),this.name="",this.source=new Ng(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hr:e.x=e.x-Math.floor(e.x);break;case hs:e.x=e.x<0?0:1;break;case hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hr:e.y=e.y-Math.floor(e.y);break;case hs:e.y=e.y<0?0:1;break;case hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=xg;$t.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,S=(d+1)/2,N=(p+1)/2,I=(u+f)/4,L=(h+_)/4,U=(g+m)/4;return T>S&&T>N?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=I/i,r=L/i):S>N?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=I/s,r=U/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=L/r,s=U/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tM extends Ys{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new $t(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ng(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ks extends tM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ug extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nM extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,M=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const N=Math.sqrt(T),I=Math.atan2(N,p*M);m=Math.sin(m*I)/N,a=Math.sin(a*I)/N}const S=a*M;if(l=l*m+f*S,c=c*m+d*S,u=u*m+g*S,h=h*m+_*S,m===1-a){const N=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=N,c*=N,u*=N,h*=N}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lc.copy(this).projectOnVector(e),this.sub(lc)}reflect(e){return this.sub(lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lc=new V,gd=new Gi;class pi{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fa.copy(i.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),da.subVectors(this.max,oo),rr.subVectors(e.a,oo),or.subVectors(e.b,oo),ar.subVectors(e.c,oo),Ki.subVectors(or,rr),Yi.subVectors(ar,or),Ts.subVectors(rr,ar);let t=[0,-Ki.z,Ki.y,0,-Yi.z,Yi.y,0,-Ts.z,Ts.y,Ki.z,0,-Ki.x,Yi.z,0,-Yi.x,Ts.z,0,-Ts.x,-Ki.y,Ki.x,0,-Yi.y,Yi.x,0,-Ts.y,Ts.x,0];return!cc(t,rr,or,ar,da)||(t=[1,0,0,0,1,0,0,0,1],!cc(t,rr,or,ar,da))?!1:(pa.crossVectors(Ki,Yi),t=[pa.x,pa.y,pa.z],cc(t,rr,or,ar,da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new V,new V,new V,new V,new V,new V,new V,new V],Vn=new V,fa=new pi,rr=new V,or=new V,ar=new V,Ki=new V,Yi=new V,Ts=new V,oo=new V,da=new V,pa=new V,As=new V;function cc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){As.fromArray(n,r);const a=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),l=e.dot(As),c=t.dot(As),u=i.dot(As);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const iM=new pi,ao=new V,uc=new V;class mi{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):iM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);const t=ao.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ao,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(uc)),this.expandByPoint(ao.copy(e.center).sub(uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new V,hc=new V,ma=new V,Zi=new V,fc=new V,ga=new V,dc=new V;class Fl{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){hc.copy(e).add(t).multiplyScalar(.5),ma.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(hc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ma),a=Zi.dot(this.direction),l=-Zi.dot(ma),c=Zi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(hc).addScaledVector(ma,f),d}intersectSphere(e,t){bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),s=bi.dot(bi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,i,s,r){fc.subVectors(t,e),ga.subVectors(i,e),dc.crossVectors(fc,ga);let o=this.direction.dot(dc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,e);const l=a*this.direction.dot(ga.crossVectors(Zi,ga));if(l<0)return null;const c=a*this.direction.dot(fc.cross(Zi));if(c<0||l+c>o)return null;const u=-a*Zi.dot(dc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/lr.setFromMatrixColumn(e,0).length(),r=1/lr.setFromMatrixColumn(e,1).length(),o=1/lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sM,e,rM)}lookAt(e,t,i){const s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ji.crossVectors(i,yn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ji.crossVectors(i,yn)),Ji.normalize(),_a.crossVectors(yn,Ji),s[0]=Ji.x,s[4]=_a.x,s[8]=yn.x,s[1]=Ji.y,s[5]=_a.y,s[9]=yn.y,s[2]=Ji.z,s[6]=_a.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],T=i[7],S=i[11],N=i[15],I=s[0],L=s[4],U=s[8],b=s[12],x=s[1],C=s[5],D=s[9],w=s[13],P=s[2],ee=s[6],$=s[10],Y=s[14],X=s[3],_e=s[7],Ae=s[11],Ie=s[15];return r[0]=o*I+a*x+l*P+c*X,r[4]=o*L+a*C+l*ee+c*_e,r[8]=o*U+a*D+l*$+c*Ae,r[12]=o*b+a*w+l*Y+c*Ie,r[1]=u*I+h*x+f*P+d*X,r[5]=u*L+h*C+f*ee+d*_e,r[9]=u*U+h*D+f*$+d*Ae,r[13]=u*b+h*w+f*Y+d*Ie,r[2]=g*I+_*x+m*P+p*X,r[6]=g*L+_*C+m*ee+p*_e,r[10]=g*U+_*D+m*$+p*Ae,r[14]=g*b+_*w+m*Y+p*Ie,r[3]=M*I+T*x+S*P+N*X,r[7]=M*L+T*C+S*ee+N*_e,r[11]=M*U+T*D+S*$+N*Ae,r[15]=M*b+T*w+S*Y+N*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,T=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,S=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,N=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,I=t*M+i*T+s*S+r*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/I;return e[0]=M*L,e[1]=(_*f*r-h*m*r-_*s*d+i*m*d+h*s*p-i*f*p)*L,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*L,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*L,e[4]=T*L,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*L,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*L,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*L,e[8]=S*L,e[9]=(g*h*r-u*_*r-g*i*d+t*_*d+u*i*p-t*h*p)*L,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*p+t*a*p)*L,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*L,e[12]=N*L,e[13]=(u*_*s-g*h*s+g*i*f-t*_*f-u*i*m+t*h*m)*L,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*L,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,M=l*c,T=l*u,S=l*h,N=i.x,I=i.y,L=i.z;return s[0]=(1-(_+p))*N,s[1]=(d+S)*N,s[2]=(g-T)*N,s[3]=0,s[4]=(d-S)*I,s[5]=(1-(f+p))*I,s[6]=(m+M)*I,s[7]=0,s[8]=(g+T)*L,s[9]=(m-M)*L,s[10]=(1-(f+_))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=lr.set(s[0],s[1],s[2]).length();const o=lr.set(s[4],s[5],s[6]).length(),a=lr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],zn.copy(this);const c=1/r,u=1/o,h=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=h,zn.elements[9]*=h,zn.elements[10]*=h,t.setFromRotationMatrix(zn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ni){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let d,g;if(a===Ni)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===fl)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ni){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,d=(i+s)*u;let g,_;if(a===Ni)g=(o+r)*h,_=-2*h;else if(a===fl)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const lr=new V,zn=new $e,sM=new V(0,0,0),rM=new V(1,1,1),Ji=new V,_a=new V,yn=new V,_d=new $e,vd=new Gi;class ni{constructor(e=0,t=0,i=0,s=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _d.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_d,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vd.setFromEuler(this),this.setFromQuaternion(vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class Og{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oM=0;const xd=new V,cr=new Gi,Mi=new $e,va=new V,lo=new V,aM=new V,lM=new Gi,yd=new V(1,0,0),Sd=new V(0,1,0),bd=new V(0,0,1),Md={type:"added"},cM={type:"removed"},ur={type:"childadded",child:null},pc={type:"childremoved",child:null};class Rt extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new V,t=new ni,i=new Gi,s=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new Ze}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Og,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(yd,e)}rotateY(e){return this.rotateOnAxis(Sd,e)}rotateZ(e){return this.rotateOnAxis(bd,e)}translateOnAxis(e,t){return xd.copy(e).applyQuaternion(this.quaternion),this.position.add(xd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yd,e)}translateY(e){return this.translateOnAxis(Sd,e)}translateZ(e){return this.translateOnAxis(bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?va.copy(e):va.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(lo,va,this.up):Mi.lookAt(va,lo,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(Mi),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Md),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cM),pc.child=e,this.dispatchEvent(pc),pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Md),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,aM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,lM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Rt.DEFAULT_UP=new V(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new V,Ei=new V,mc=new V,Ti=new V,hr=new V,fr=new V,Ed=new V,gc=new V,_c=new V,vc=new V,xc=new ut,yc=new ut,Sc=new ut;class $n{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Gn.subVectors(e,t),s.cross(Gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Gn.subVectors(s,t),Ei.subVectors(i,t),mc.subVectors(e,t);const o=Gn.dot(Gn),a=Gn.dot(Ei),l=Gn.dot(mc),c=Ei.dot(Ei),u=Ei.dot(mc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return xc.setScalar(0),yc.setScalar(0),Sc.setScalar(0),xc.fromBufferAttribute(e,t),yc.fromBufferAttribute(e,i),Sc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(xc,r.x),o.addScaledVector(yc,r.y),o.addScaledVector(Sc,r.z),o}static isFrontFacing(e,t,i,s){return Gn.subVectors(i,t),Ei.subVectors(e,t),Gn.cross(Ei).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Gn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return $n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;hr.subVectors(s,i),fr.subVectors(r,i),gc.subVectors(e,i);const l=hr.dot(gc),c=fr.dot(gc);if(l<=0&&c<=0)return t.copy(i);_c.subVectors(e,s);const u=hr.dot(_c),h=fr.dot(_c);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(hr,o);vc.subVectors(e,r);const d=hr.dot(vc),g=fr.dot(vc);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(fr,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Ed.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Ed,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(hr,o).addScaledVector(fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},xa={h:0,s:0,l:0};function bc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=Oh(e,1),t=nn(t,0,1),i=nn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=bc(o,r,e+1/3),this.g=bc(o,r,e),this.b=bc(o,r,e-1/3)}return it.toWorkingColorSpace(this,s),this}setStyle(e,t=jt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const i=Fg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return it.fromWorkingColorSpace(Jt.copy(this),e),Math.round(nn(Jt.r*255,0,255))*65536+Math.round(nn(Jt.g*255,0,255))*256+Math.round(nn(Jt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Jt.copy(this),t);const i=Jt.r,s=Jt.g,r=Jt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=jt){it.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,s=Jt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(xa);const i=Lo(Qi.h,xa.h,t),s=Lo(Qi.s,xa.s,t),r=Lo(Qi.l,xa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ke;Ke.NAMES=Fg;let uM=0;class fi extends Ys{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Zn(),this.name="",this.blending=Rr,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uu,this.blendDst=hu,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uu&&(i.blendSrc=this.blendSrc),this.blendDst!==hu&&(i.blendDst=this.blendDst),this.blendEquation!==Fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ad&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _n extends fi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new V,ya=new rt;class pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qu,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qu&&(e.usage=this.usage),e}}class kg extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bg extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Bn extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let hM=0;const In=new $e,Mc=new Rt,dr=new V,Sn=new pi,co=new pi,Gt=new V;class ii extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dg(e)?Bg:kg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,i){return In.makeTranslation(e,t,i),this.applyMatrix4(In),this}scale(e,t,i){return In.makeScale(e,t,i),this.applyMatrix4(In),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bn(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];co.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Sn.min,co.min),Sn.expandByPoint(Gt),Gt.addVectors(Sn.max,co.max),Sn.expandByPoint(Gt)):(Sn.expandByPoint(co.min),Sn.expandByPoint(co.max))}Sn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(dr.fromBufferAttribute(e,c),Gt.add(dr)),s=Math.max(s,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new V,l[U]=new V;const c=new V,u=new V,h=new V,f=new rt,d=new rt,g=new rt,_=new V,m=new V;function p(U,b,x){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,x),f.fromBufferAttribute(r,U),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,x),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),a[U].add(_),a[b].add(_),a[x].add(_),l[U].add(m),l[b].add(m),l[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let U=0,b=M.length;U<b;++U){const x=M[U],C=x.start,D=x.count;for(let w=C,P=C+D;w<P;w+=3)p(e.getX(w+0),e.getX(w+1),e.getX(w+2))}const T=new V,S=new V,N=new V,I=new V;function L(U){N.fromBufferAttribute(s,U),I.copy(N);const b=a[U];T.copy(b),T.sub(N.multiplyScalar(N.dot(b))).normalize(),S.crossVectors(I,b);const C=S.dot(l[U])<0?-1:1;o.setXYZW(U,T.x,T.y,T.z,C)}for(let U=0,b=M.length;U<b;++U){const x=M[U],C=x.start,D=x.count;for(let w=C,P=C+D;w<P;w+=3)L(e.getX(w+0)),L(e.getX(w+1)),L(e.getX(w+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new pn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ii,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Td=new $e,ws=new Fl,Sa=new mi,Ad=new V,ba=new V,Ma=new V,Ea=new V,Ec=new V,Ta=new V,wd=new V,Aa=new V;class Kt extends Rt{constructor(e=new ii,t=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Ec.fromBufferAttribute(h,e),o?Ta.addScaledVector(Ec,u):Ta.addScaledVector(Ec.sub(t),u))}t.add(Ta)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(r),ws.copy(e.ray).recast(e.near),!(Sa.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Sa,Ad)===null||ws.origin.distanceToSquared(Ad)>(e.far-e.near)**2))&&(Td.copy(r).invert(),ws.copy(e.ray).applyMatrix4(Td),!(i.boundingBox!==null&&ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,N=T;S<N;S+=3){const I=a.getX(S),L=a.getX(S+1),U=a.getX(S+2);s=wa(this,p,e,i,c,u,h,I,L,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),T=a.getX(m+1),S=a.getX(m+2);s=wa(this,o,e,i,c,u,h,M,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,N=T;S<N;S+=3){const I=S,L=S+1,U=S+2;s=wa(this,p,e,i,c,u,h,I,L,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,T=m+1,S=m+2;s=wa(this,o,e,i,c,u,h,M,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function fM(n,e,t,i,s,r,o,a){let l;if(e.side===Dt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Hi,a),l===null)return null;Aa.copy(a),Aa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Aa);return c<t.near||c>t.far?null:{distance:c,point:Aa.clone(),object:n}}function wa(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ba),n.getVertexPosition(l,Ma),n.getVertexPosition(c,Ea);const u=fM(n,e,t,i,ba,Ma,Ea,wd);if(u){const h=new V;$n.getBarycoord(wd,ba,Ma,Ea,h),s&&(u.uv=$n.getInterpolatedAttribute(s,a,l,c,h,new rt)),r&&(u.uv1=$n.getInterpolatedAttribute(r,a,l,c,h,new rt)),o&&(u.normal=$n.getInterpolatedAttribute(o,a,l,c,h,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new V,materialIndex:0};$n.getNormal(ba,Ma,Ea,f.normal),u.face=f,u.barycoord=h}return u}class ms extends ii{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(u,3)),this.setAttribute("uv",new Bn(h,2));function g(_,m,p,M,T,S,N,I,L,U,b){const x=S/L,C=N/U,D=S/2,w=N/2,P=I/2,ee=L+1,$=U+1;let Y=0,X=0;const _e=new V;for(let Ae=0;Ae<$;Ae++){const Ie=Ae*C-w;for(let De=0;De<ee;De++){const Xe=De*x-D;_e[_]=Xe*M,_e[m]=Ie*T,_e[p]=P,c.push(_e.x,_e.y,_e.z),_e[_]=0,_e[m]=0,_e[p]=I>0?1:-1,u.push(_e.x,_e.y,_e.z),h.push(De/L),h.push(1-Ae/U),Y+=1}}for(let Ae=0;Ae<U;Ae++)for(let Ie=0;Ie<L;Ie++){const De=f+Ie+ee*Ae,Xe=f+Ie+ee*(Ae+1),le=f+(Ie+1)+ee*(Ae+1),xe=f+(Ie+1)+ee*Ae;l.push(De,Xe,xe),l.push(Xe,le,xe),X+=6}a.addGroup(d,X,b),d+=X,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function an(n){const e={};for(let t=0;t<n.length;t++){const i=Wr(n[t]);for(const s in i)e[s]=i[s]}return e}function dM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hg(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const pM={clone:Wr,merge:an};var mM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gs extends fi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mM,this.fragmentShader=gM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=dM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vg extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new V,Rd=new rt,Cd=new rt;class hn extends Vg{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,Rd,Cd),t.subVectors(Cd,Rd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Po*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pr=-90,mr=1;class _M extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(pr,mr,e,t);s.layers=this.layers,this.add(s);const r=new hn(pr,mr,e,t);r.layers=this.layers,this.add(r);const o=new hn(pr,mr,e,t);o.layers=this.layers,this.add(o);const a=new hn(pr,mr,e,t);a.layers=this.layers,this.add(a);const l=new hn(pr,mr,e,t);l.layers=this.layers,this.add(l);const c=new hn(pr,mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class zg extends $t{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:kr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vM extends Ks{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new zg(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ms(5,5,5),r=new gs({name:"CubemapFromEquirect",uniforms:Wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:ds});r.uniforms.tEquirect.value=t;const o=new Kt(s,r),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=Rn),new _M(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Tc=new V,xM=new V,yM=new Ze;class Us{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Tc.subVectors(i,t).cross(xM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Tc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yM.getNormalMatrix(e),s=this.coplanarPoint(Tc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new mi,Ra=new V;class Fh{constructor(e=new Us,t=new Us,i=new Us,s=new Us,r=new Us,o=new Us){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ni){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],M=s[13],T=s[14],S=s[15];if(i[0].setComponents(l-r,f-c,m-d,S-p).normalize(),i[1].setComponents(l+r,f+c,m+d,S+p).normalize(),i[2].setComponents(l+o,f+u,m+g,S+M).normalize(),i[3].setComponents(l-o,f-u,m-g,S-M).normalize(),i[4].setComponents(l-a,f-h,m-_,S-T).normalize(),t===Ni)i[5].setComponents(l+a,f+h,m+_,S+T).normalize();else if(t===fl)i[5].setComponents(a,h,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ra.x=s.normal.x>0?e.max.x:e.min.x,Ra.y=s.normal.y>0?e.max.y:e.min.y,Ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gg(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function SM(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class kl extends ii{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*f-o;for(let T=0;T<c;T++){const S=T*h-r;g.push(S,-M,0),_.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const T=M+c*p,S=M+c*(p+1),N=M+1+c*(p+1),I=M+1+c*p;d.push(T,S,I),d.push(S,N,I)}this.setIndex(d),this.setAttribute("position",new Bn(g,3)),this.setAttribute("normal",new Bn(_,3)),this.setAttribute("uv",new Bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var bM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MM=`#ifdef USE_ALPHAHASH
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
#endif`,EM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RM=`#ifdef USE_AOMAP
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
#endif`,CM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PM=`#ifdef USE_BATCHING
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
#endif`,LM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,UM=`#ifdef USE_IRIDESCENCE
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
#endif`,OM=`#ifdef USE_BUMPMAP
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
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,XM=`#define PI 3.141592653589793
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
} // validated`,$M=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jM=`vec3 transformedNormal = objectNormal;
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
#endif`,qM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JM="gl_FragColor = linearToOutputTexel( gl_FragColor );",QM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eE=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nE=`#ifdef USE_ENVMAP
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
#endif`,iE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sE=`#ifdef USE_ENVMAP
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
#endif`,rE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cE=`#ifdef USE_GRADIENTMAP
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
}`,uE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dE=`uniform bool receiveShadow;
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
#endif`,pE=`#ifdef USE_ENVMAP
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
#endif`,mE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_E=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xE=`PhysicalMaterial material;
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
#endif`,yE=`struct PhysicalMaterial {
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
}`,SE=`
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
#endif`,bE=`#if defined( RE_IndirectDiffuse )
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
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LE=`#if defined( USE_POINTS_UV )
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
#endif`,IE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FE=`#ifdef USE_MORPHTARGETS
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
#endif`,kE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,HE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WE=`#ifdef USE_NORMALMAP
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
#endif`,XE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oT=`float getShadowMask() {
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
}`,aT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lT=`#ifdef USE_SKINNING
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
#endif`,cT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uT=`#ifdef USE_SKINNING
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
#endif`,hT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mT=`#ifdef USE_TRANSMISSION
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
#endif`,gT=`#ifdef USE_TRANSMISSION
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
#endif`,_T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ST=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bT=`uniform sampler2D t2D;
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
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ET=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wT=`#include <common>
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
}`,RT=`#if DEPTH_PACKING == 3200
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
}`,CT=`#define DISTANCE
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
}`,PT=`#define DISTANCE
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
}`,LT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DT=`uniform float scale;
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
}`,NT=`uniform vec3 diffuse;
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
}`,UT=`#include <common>
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
}`,OT=`uniform vec3 diffuse;
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
}`,FT=`#define LAMBERT
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
}`,kT=`#define LAMBERT
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
}`,BT=`#define MATCAP
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
}`,HT=`#define MATCAP
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
}`,VT=`#define NORMAL
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
}`,zT=`#define NORMAL
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
}`,GT=`#define PHONG
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
}`,WT=`#define PHONG
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
}`,XT=`#define STANDARD
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
}`,$T=`#define STANDARD
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
}`,jT=`#define TOON
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
}`,qT=`#define TOON
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
}`,KT=`uniform float size;
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
}`,YT=`uniform vec3 diffuse;
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
}`,ZT=`#include <common>
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
}`,JT=`uniform vec3 color;
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
}`,QT=`uniform float rotation;
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
}`,eA=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:bM,alphahash_pars_fragment:MM,alphamap_fragment:EM,alphamap_pars_fragment:TM,alphatest_fragment:AM,alphatest_pars_fragment:wM,aomap_fragment:RM,aomap_pars_fragment:CM,batching_pars_vertex:PM,batching_vertex:LM,begin_vertex:IM,beginnormal_vertex:DM,bsdfs:NM,iridescence_fragment:UM,bumpmap_pars_fragment:OM,clipping_planes_fragment:FM,clipping_planes_pars_fragment:kM,clipping_planes_pars_vertex:BM,clipping_planes_vertex:HM,color_fragment:VM,color_pars_fragment:zM,color_pars_vertex:GM,color_vertex:WM,common:XM,cube_uv_reflection_fragment:$M,defaultnormal_vertex:jM,displacementmap_pars_vertex:qM,displacementmap_vertex:KM,emissivemap_fragment:YM,emissivemap_pars_fragment:ZM,colorspace_fragment:JM,colorspace_pars_fragment:QM,envmap_fragment:eE,envmap_common_pars_fragment:tE,envmap_pars_fragment:nE,envmap_pars_vertex:iE,envmap_physical_pars_fragment:pE,envmap_vertex:sE,fog_vertex:rE,fog_pars_vertex:oE,fog_fragment:aE,fog_pars_fragment:lE,gradientmap_pars_fragment:cE,lightmap_pars_fragment:uE,lights_lambert_fragment:hE,lights_lambert_pars_fragment:fE,lights_pars_begin:dE,lights_toon_fragment:mE,lights_toon_pars_fragment:gE,lights_phong_fragment:_E,lights_phong_pars_fragment:vE,lights_physical_fragment:xE,lights_physical_pars_fragment:yE,lights_fragment_begin:SE,lights_fragment_maps:bE,lights_fragment_end:ME,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:TE,logdepthbuf_pars_vertex:AE,logdepthbuf_vertex:wE,map_fragment:RE,map_pars_fragment:CE,map_particle_fragment:PE,map_particle_pars_fragment:LE,metalnessmap_fragment:IE,metalnessmap_pars_fragment:DE,morphinstance_vertex:NE,morphcolor_vertex:UE,morphnormal_vertex:OE,morphtarget_pars_vertex:FE,morphtarget_vertex:kE,normal_fragment_begin:BE,normal_fragment_maps:HE,normal_pars_fragment:VE,normal_pars_vertex:zE,normal_vertex:GE,normalmap_pars_fragment:WE,clearcoat_normal_fragment_begin:XE,clearcoat_normal_fragment_maps:$E,clearcoat_pars_fragment:jE,iridescence_pars_fragment:qE,opaque_fragment:KE,packing:YE,premultiplied_alpha_fragment:ZE,project_vertex:JE,dithering_fragment:QE,dithering_pars_fragment:eT,roughnessmap_fragment:tT,roughnessmap_pars_fragment:nT,shadowmap_pars_fragment:iT,shadowmap_pars_vertex:sT,shadowmap_vertex:rT,shadowmask_pars_fragment:oT,skinbase_vertex:aT,skinning_pars_vertex:lT,skinning_vertex:cT,skinnormal_vertex:uT,specularmap_fragment:hT,specularmap_pars_fragment:fT,tonemapping_fragment:dT,tonemapping_pars_fragment:pT,transmission_fragment:mT,transmission_pars_fragment:gT,uv_pars_fragment:_T,uv_pars_vertex:vT,uv_vertex:xT,worldpos_vertex:yT,background_vert:ST,background_frag:bT,backgroundCube_vert:MT,backgroundCube_frag:ET,cube_vert:TT,cube_frag:AT,depth_vert:wT,depth_frag:RT,distanceRGBA_vert:CT,distanceRGBA_frag:PT,equirect_vert:LT,equirect_frag:IT,linedashed_vert:DT,linedashed_frag:NT,meshbasic_vert:UT,meshbasic_frag:OT,meshlambert_vert:FT,meshlambert_frag:kT,meshmatcap_vert:BT,meshmatcap_frag:HT,meshnormal_vert:VT,meshnormal_frag:zT,meshphong_vert:GT,meshphong_frag:WT,meshphysical_vert:XT,meshphysical_frag:$T,meshtoon_vert:jT,meshtoon_frag:qT,points_vert:KT,points_frag:YT,shadow_vert:ZT,shadow_frag:JT,sprite_vert:QT,sprite_frag:eA},Re={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ci={basic:{uniforms:an([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:an([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:an([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:an([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:an([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:an([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:an([Re.points,Re.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:an([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:an([Re.common,Re.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:an([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:an([Re.sprite,Re.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:an([Re.common,Re.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:an([Re.lights,Re.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};ci.physical={uniforms:an([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Ca={r:0,b:0,g:0},Cs=new ni,tA=new $e;function nA(n,e,t,i,s,r,o){const a=new Ke(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(M){let T=M.isScene===!0?M.background:null;return T&&T.isTexture&&(T=(M.backgroundBlurriness>0?t:e).get(T)),T}function _(M){let T=!1;const S=g(M);S===null?p(a,l):S&&S.isColor&&(p(S,1),T=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,T){const S=g(T);S&&(S.isCubeTexture||S.mapping===Ul)?(u===void 0&&(u=new Kt(new ms(1,1,1),new gs({name:"BackgroundCubeMaterial",uniforms:Wr(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Cs.copy(T.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tA.makeRotationFromEuler(Cs)),u.material.toneMapped=it.getTransfer(S.colorSpace)!==yt,(h!==S||f!==S.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Kt(new kl(2,2),new gs({name:"BackgroundMaterial",uniforms:Wr(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=it.getTransfer(S.colorSpace)!==yt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,T){M.getRGB(Ca,Hg(n)),i.buffers.color.setClear(Ca.r,Ca.g,Ca.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),l=T,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m}}function iA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(x,C,D,w,P){let ee=!1;const $=h(w,D,C);r!==$&&(r=$,c(r.object)),ee=d(x,w,D,P),ee&&g(x,w,D,P),P!==null&&e.update(P,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,S(x,C,D,w),P!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,C,D){const w=D.wireframe===!0;let P=i[x.id];P===void 0&&(P={},i[x.id]=P);let ee=P[C.id];ee===void 0&&(ee={},P[C.id]=ee);let $=ee[w];return $===void 0&&($=f(l()),ee[w]=$),$}function f(x){const C=[],D=[],w=[];for(let P=0;P<t;P++)C[P]=0,D[P]=0,w[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:w,object:x,attributes:{},index:null}}function d(x,C,D,w){const P=r.attributes,ee=C.attributes;let $=0;const Y=D.getAttributes();for(const X in Y)if(Y[X].location>=0){const Ae=P[X];let Ie=ee[X];if(Ie===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(Ie=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(Ie=x.instanceColor)),Ae===void 0||Ae.attribute!==Ie||Ie&&Ae.data!==Ie.data)return!0;$++}return r.attributesNum!==$||r.index!==w}function g(x,C,D,w){const P={},ee=C.attributes;let $=0;const Y=D.getAttributes();for(const X in Y)if(Y[X].location>=0){let Ae=ee[X];Ae===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(Ae=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(Ae=x.instanceColor));const Ie={};Ie.attribute=Ae,Ae&&Ae.data&&(Ie.data=Ae.data),P[X]=Ie,$++}r.attributes=P,r.attributesNum=$,r.index=w}function _(){const x=r.newAttributes;for(let C=0,D=x.length;C<D;C++)x[C]=0}function m(x){p(x,0)}function p(x,C){const D=r.newAttributes,w=r.enabledAttributes,P=r.attributeDivisors;D[x]=1,w[x]===0&&(n.enableVertexAttribArray(x),w[x]=1),P[x]!==C&&(n.vertexAttribDivisor(x,C),P[x]=C)}function M(){const x=r.newAttributes,C=r.enabledAttributes;for(let D=0,w=C.length;D<w;D++)C[D]!==x[D]&&(n.disableVertexAttribArray(D),C[D]=0)}function T(x,C,D,w,P,ee,$){$===!0?n.vertexAttribIPointer(x,C,D,P,ee):n.vertexAttribPointer(x,C,D,w,P,ee)}function S(x,C,D,w){_();const P=w.attributes,ee=D.getAttributes(),$=C.defaultAttributeValues;for(const Y in ee){const X=ee[Y];if(X.location>=0){let _e=P[Y];if(_e===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(_e=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(_e=x.instanceColor)),_e!==void 0){const Ae=_e.normalized,Ie=_e.itemSize,De=e.get(_e);if(De===void 0)continue;const Xe=De.buffer,le=De.type,xe=De.bytesPerElement,Ce=le===n.INT||le===n.UNSIGNED_INT||_e.gpuType===Ch;if(_e.isInterleavedBufferAttribute){const B=_e.data,ue=B.stride,ce=_e.offset;if(B.isInstancedInterleavedBuffer){for(let ge=0;ge<X.locationSize;ge++)p(X.location+ge,B.meshPerAttribute);x.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ge=0;ge<X.locationSize;ge++)m(X.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let ge=0;ge<X.locationSize;ge++)T(X.location+ge,Ie/X.locationSize,le,Ae,ue*xe,(ce+Ie/X.locationSize*ge)*xe,Ce)}else{if(_e.isInstancedBufferAttribute){for(let B=0;B<X.locationSize;B++)p(X.location+B,_e.meshPerAttribute);x.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let B=0;B<X.locationSize;B++)m(X.location+B);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let B=0;B<X.locationSize;B++)T(X.location+B,Ie/X.locationSize,le,Ae,Ie*xe,Ie/X.locationSize*B*xe,Ce)}}else if($!==void 0){const Ae=$[Y];if(Ae!==void 0)switch(Ae.length){case 2:n.vertexAttrib2fv(X.location,Ae);break;case 3:n.vertexAttrib3fv(X.location,Ae);break;case 4:n.vertexAttrib4fv(X.location,Ae);break;default:n.vertexAttrib1fv(X.location,Ae)}}}}M()}function N(){U();for(const x in i){const C=i[x];for(const D in C){const w=C[D];for(const P in w)u(w[P].object),delete w[P];delete C[D]}delete i[x]}}function I(x){if(i[x.id]===void 0)return;const C=i[x.id];for(const D in C){const w=C[D];for(const P in w)u(w[P].object),delete w[P];delete C[D]}delete i[x.id]}function L(x){for(const C in i){const D=i[C];if(D[x.id]===void 0)continue;const w=D[x.id];for(const P in w)u(w[P].object),delete w[P];delete D[x.id]}}function U(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:b,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function sA(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function rA(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==On&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const U=L===Jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Vi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==qn&&!U)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:N,maxSamples:I}}function oA(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Us,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,T=M*4;let S=p.clippingState||null;l.value=S,S=u(g,f,T,d);for(let N=0;N!==T;++N)S[N]=t[N];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,S=d;T!==_;++T,S+=4)o.copy(h[T]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function aA(n){let e=new WeakMap;function t(o,a){return a===xu?o.mapping=kr:a===yu&&(o.mapping=Br),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===xu||a===yu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vM(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class kh extends Vg{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mr=4,Pd=[.125,.215,.35,.446,.526,.582],ks=20,Ac=new kh,Ld=new Ke;let wc=null,Rc=0,Cc=0,Pc=!1;const Os=(1+Math.sqrt(5))/2,gr=1/Os,Id=[new V(-Os,gr,0),new V(Os,gr,0),new V(-gr,0,Os),new V(gr,0,Os),new V(0,Os,-gr),new V(0,Os,gr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Dd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){wc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wc,Rc,Cc),this._renderer.xr.enabled=Pc,e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===kr||e.mapping===Br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Jo,format:On,colorSpace:mn,depthBuffer:!1},s=Nd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nd(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lA(r)),this._blurMaterial=cA(r,e,t)}return s}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,Ac)}_sceneToCubeUV(e,t,i,s){const a=new hn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ld),u.toneMapping=ps,u.autoClear=!1;const d=new _n({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new Kt(new ms,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Ld),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const T=this._cubeSize;Pa(s,M*T,p>2?T:0,T,T),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===kr||e.mapping===Br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ud());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Pa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ac)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Id[(s-r-1)%Id.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Kt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ks-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ks;m>ks&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ks}`);const p=[];let M=0;for(let L=0;L<ks;++L){const U=L/_,b=Math.exp(-U*U/2);p.push(b),L===0?M+=b:L<m&&(M+=2*b)}for(let L=0;L<p.length;L++)p[L]=p[L]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-i;const S=this._sizeLods[s],N=3*S*(s>T-Mr?s-T+Mr:0),I=4*(this._cubeSize-S);Pa(t,N,I,3*S,2*S),l.setRenderTarget(t),l.render(h,Ac)}}function lA(n){const e=[],t=[],i=[];let s=n;const r=n-Mr+1+Pd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Mr?l=Pd[o-n+Mr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),T=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let I=0;I<d;I++){const L=I%3*2/3-1,U=I>2?0:-1,b=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];M.set(b,_*g*I),T.set(f,m*g*I);const x=[I,I,I,I,I,I];S.set(x,p*g*I)}const N=new ii;N.setAttribute("position",new pn(M,_)),N.setAttribute("uv",new pn(T,m)),N.setAttribute("faceIndex",new pn(S,p)),e.push(N),s>Mr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Nd(n,e,t){const i=new Ks(n,e,t);return i.texture.mapping=Ul,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function cA(n,e,t){const i=new Float32Array(ks),s=new V(0,1,0);return new gs({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function Ud(){return new gs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function Od(){return new gs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function Bh(){return`

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
	`}function uA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===xu||l===yu,u=l===kr||l===Br;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Dd(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Dd(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function hA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&xo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function fA(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let T=0,S=M.length;T<S;T+=3){const N=M[T+0],I=M[T+1],L=M[T+2];f.push(N,I,I,L,L,N)}}else if(g!==void 0){const M=g.array;_=g.version;for(let T=0,S=M.length/3-1;T<S;T+=3){const N=T+0,I=T+1,L=T+2;f.push(N,I,I,L,L,N)}}else return;const m=new(Dg(f)?Bg:kg)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function dA(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function pA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function mA(n,e,t){const i=new WeakMap,s=new ut;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let b=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let T=0;d===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let S=a.attributes.position.count*T,N=1;S>e.maxTextureSize&&(N=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const I=new Float32Array(S*N*4*h),L=new Ug(I,S,N,h);L.type=qn,L.needsUpdate=!0;const U=T*4;for(let x=0;x<h;x++){const C=m[x],D=p[x],w=M[x],P=S*N*4*x;for(let ee=0;ee<C.count;ee++){const $=ee*U;d===!0&&(s.fromBufferAttribute(C,ee),I[P+$+0]=s.x,I[P+$+1]=s.y,I[P+$+2]=s.z,I[P+$+3]=0),g===!0&&(s.fromBufferAttribute(D,ee),I[P+$+4]=s.x,I[P+$+5]=s.y,I[P+$+6]=s.z,I[P+$+7]=0),_===!0&&(s.fromBufferAttribute(w,ee),I[P+$+8]=s.x,I[P+$+9]=s.y,I[P+$+10]=s.z,I[P+$+11]=w.itemSize===4?s.w:1)}}f={count:h,texture:L,size:new rt(S,N)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function gA(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Wg extends $t{constructor(e,t,i,s,r,o,a,l,c,u=Cr){if(u!==Cr&&u!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Cr&&(i=qs),i===void 0&&u===zr&&(i=Vr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xg=new $t,Fd=new Wg(1,1),$g=new Ug,jg=new nM,qg=new zg,kd=[],Bd=[],Hd=new Float32Array(16),Vd=new Float32Array(9),zd=new Float32Array(4);function Jr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=kd[s];if(r===void 0&&(r=new Float32Array(s),kd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Bl(n,e){let t=Bd[e];t===void 0&&(t=new Int32Array(e),Bd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _A(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function xA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function yA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function SA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;zd.set(i),n.uniformMatrix2fv(this.addr,!1,zd),Vt(t,i)}}function bA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Vd.set(i),n.uniformMatrix3fv(this.addr,!1,Vd),Vt(t,i)}}function MA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Hd.set(i),n.uniformMatrix4fv(this.addr,!1,Hd),Vt(t,i)}}function EA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function TA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function AA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function wA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function RA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function CA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function PA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function LA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function IA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Fd.compareFunction=Ig,r=Fd):r=Xg,t.setTexture2D(e||r,s)}function DA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||jg,s)}function NA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||qg,s)}function UA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||$g,s)}function OA(n){switch(n){case 5126:return _A;case 35664:return vA;case 35665:return xA;case 35666:return yA;case 35674:return SA;case 35675:return bA;case 35676:return MA;case 5124:case 35670:return EA;case 35667:case 35671:return TA;case 35668:case 35672:return AA;case 35669:case 35673:return wA;case 5125:return RA;case 36294:return CA;case 36295:return PA;case 36296:return LA;case 35678:case 36198:case 36298:case 36306:case 35682:return IA;case 35679:case 36299:case 36307:return DA;case 35680:case 36300:case 36308:case 36293:return NA;case 36289:case 36303:case 36311:case 36292:return UA}}function FA(n,e){n.uniform1fv(this.addr,e)}function kA(n,e){const t=Jr(e,this.size,2);n.uniform2fv(this.addr,t)}function BA(n,e){const t=Jr(e,this.size,3);n.uniform3fv(this.addr,t)}function HA(n,e){const t=Jr(e,this.size,4);n.uniform4fv(this.addr,t)}function VA(n,e){const t=Jr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zA(n,e){const t=Jr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function GA(n,e){const t=Jr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function WA(n,e){n.uniform1iv(this.addr,e)}function XA(n,e){n.uniform2iv(this.addr,e)}function $A(n,e){n.uniform3iv(this.addr,e)}function jA(n,e){n.uniform4iv(this.addr,e)}function qA(n,e){n.uniform1uiv(this.addr,e)}function KA(n,e){n.uniform2uiv(this.addr,e)}function YA(n,e){n.uniform3uiv(this.addr,e)}function ZA(n,e){n.uniform4uiv(this.addr,e)}function JA(n,e,t){const i=this.cache,s=e.length,r=Bl(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Xg,r[o])}function QA(n,e,t){const i=this.cache,s=e.length,r=Bl(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||jg,r[o])}function ew(n,e,t){const i=this.cache,s=e.length,r=Bl(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||qg,r[o])}function tw(n,e,t){const i=this.cache,s=e.length,r=Bl(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||$g,r[o])}function nw(n){switch(n){case 5126:return FA;case 35664:return kA;case 35665:return BA;case 35666:return HA;case 35674:return VA;case 35675:return zA;case 35676:return GA;case 5124:case 35670:return WA;case 35667:case 35671:return XA;case 35668:case 35672:return $A;case 35669:case 35673:return jA;case 5125:return qA;case 36294:return KA;case 36295:return YA;case 36296:return ZA;case 35678:case 36198:case 36298:case 36306:case 35682:return JA;case 35679:case 36299:case 36307:return QA;case 35680:case 36300:case 36308:case 36293:return ew;case 36289:case 36303:case 36311:case 36292:return tw}}class iw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=OA(t.type)}}class sw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nw(t.type)}}class rw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Lc=/(\w+)(\])?(\[|\.)?/g;function Gd(n,e){n.seq.push(e),n.map[e.id]=e}function ow(n,e,t){const i=n.name,s=i.length;for(Lc.lastIndex=0;;){const r=Lc.exec(i),o=Lc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Gd(t,c===void 0?new iw(a,n,e):new sw(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new rw(a),Gd(t,h)),t=h}}}class Ja{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ow(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Wd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const aw=37297;let lw=0;function cw(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Xd=new Ze;function uw(n){it._getMatrix(Xd,it.workingColorSpace,n);const e=`mat3( ${Xd.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case Ol:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $d(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+cw(n.getShaderSource(e),o)}else return s}function hw(n,e){const t=uw(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fw(n,e){let t;switch(e){case hb:t="Linear";break;case fb:t="Reinhard";break;case db:t="Cineon";break;case pb:t="ACESFilmic";break;case gb:t="AgX";break;case _b:t="Neutral";break;case mb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const La=new V;function dw(){it.getLuminanceCoefficients(La);const n=La.x.toFixed(4),e=La.y.toFixed(4),t=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function mw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function yo(n){return n!==""}function jd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _w=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ku(n){return n.replace(_w,xw)}const vw=new Map;function xw(n,e){let t=Je[e];if(t===void 0){const i=vw.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ku(t)}const yw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kd(n){return n.replace(yw,Sw)}function Sw(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function bw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_g?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===WS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function Mw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case kr:case Br:e="ENVMAP_TYPE_CUBE";break;case Ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ew(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Br:e="ENVMAP_MODE_REFRACTION";break}return e}function Tw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vg:e="ENVMAP_BLENDING_MULTIPLY";break;case cb:e="ENVMAP_BLENDING_MIX";break;case ub:e="ENVMAP_BLENDING_ADD";break}return e}function Aw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ww(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=bw(t),c=Mw(t),u=Ew(t),h=Tw(t),f=Aw(t),d=pw(t),g=mw(r),_=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yo).join(`
`),p.length>0&&(p+=`
`)):(m=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),p=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ps?"#define TONE_MAPPING":"",t.toneMapping!==ps?Je.tonemapping_pars_fragment:"",t.toneMapping!==ps?fw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,hw("linearToOutputTexel",t.outputColorSpace),dw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yo).join(`
`)),o=Ku(o),o=jd(o,t),o=qd(o,t),a=Ku(a),a=jd(a,t),a=qd(a,t),o=Kd(o),a=Kd(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=M+m+o,S=M+p+a,N=Wd(s,s.VERTEX_SHADER,T),I=Wd(s,s.FRAGMENT_SHADER,S);s.attachShader(_,N),s.attachShader(_,I),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(C){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(_).trim(),w=s.getShaderInfoLog(N).trim(),P=s.getShaderInfoLog(I).trim();let ee=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,N,I);else{const Y=$d(s,N,"vertex"),X=$d(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+Y+`
`+X)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(w===""||P==="")&&($=!1);$&&(C.diagnostics={runnable:ee,programLog:D,vertexShader:{log:w,prefix:m},fragmentShader:{log:P,prefix:p}})}s.deleteShader(N),s.deleteShader(I),U=new Ja(s,_),b=gw(s,_)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,aw)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=I,this}let Rw=0;class Cw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Pw(e),t.set(e,i)),i}}class Pw{constructor(e){this.id=Rw++,this.code=e,this.usedTimes=0}}function Lw(n,e,t,i,s,r,o){const a=new Og,l=new Cw,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,x,C,D,w){const P=D.fog,ee=w.geometry,$=b.isMeshStandardMaterial?D.environment:null,Y=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),X=Y&&Y.mapping===Ul?Y.image.height:null,_e=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const Ae=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ie=Ae!==void 0?Ae.length:0;let De=0;ee.morphAttributes.position!==void 0&&(De=1),ee.morphAttributes.normal!==void 0&&(De=2),ee.morphAttributes.color!==void 0&&(De=3);let Xe,le,xe,Ce;if(_e){const et=ci[_e];Xe=et.vertexShader,le=et.fragmentShader}else Xe=b.vertexShader,le=b.fragmentShader,l.update(b),xe=l.getVertexShaderID(b),Ce=l.getFragmentShaderID(b);const B=n.getRenderTarget(),ue=n.state.buffers.depth.getReversed(),ce=w.isInstancedMesh===!0,ge=w.isBatchedMesh===!0,He=!!b.map,Oe=!!b.matcap,R=!!Y,y=!!b.aoMap,q=!!b.lightMap,se=!!b.bumpMap,J=!!b.normalMap,Q=!!b.displacementMap,fe=!!b.emissiveMap,ae=!!b.metalnessMap,E=!!b.roughnessMap,v=b.anisotropy>0,O=b.clearcoat>0,z=b.dispersion>0,Z=b.iridescence>0,K=b.sheen>0,ve=b.transmission>0,de=v&&!!b.anisotropyMap,pe=O&&!!b.clearcoatMap,We=O&&!!b.clearcoatNormalMap,he=O&&!!b.clearcoatRoughnessMap,we=Z&&!!b.iridescenceMap,Ne=Z&&!!b.iridescenceThicknessMap,j=K&&!!b.sheenColorMap,F=K&&!!b.sheenRoughnessMap,ie=!!b.specularMap,me=!!b.specularColorMap,Ue=!!b.specularIntensityMap,k=ve&&!!b.transmissionMap,be=ve&&!!b.thicknessMap,oe=!!b.gradientMap,re=!!b.alphaMap,Ee=b.alphaTest>0,ye=!!b.alphaHash,Ge=!!b.extensions;let ot=ps;b.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ot=n.toneMapping);const ht={shaderID:_e,shaderType:b.type,shaderName:b.name,vertexShader:Xe,fragmentShader:le,defines:b.defines,customVertexShaderID:xe,customFragmentShaderID:Ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ge,batchingColor:ge&&w._colorsTexture!==null,instancing:ce,instancingColor:ce&&w.instanceColor!==null,instancingMorph:ce&&w.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:B===null?n.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:mn,alphaToCoverage:!!b.alphaToCoverage,map:He,matcap:Oe,envMap:R,envMapMode:R&&Y.mapping,envMapCubeUVHeight:X,aoMap:y,lightMap:q,bumpMap:se,normalMap:J,displacementMap:f&&Q,emissiveMap:fe,normalMapObjectSpace:J&&b.normalMapType===Mb,normalMapTangentSpace:J&&b.normalMapType===Lg,metalnessMap:ae,roughnessMap:E,anisotropy:v,anisotropyMap:de,clearcoat:O,clearcoatMap:pe,clearcoatNormalMap:We,clearcoatRoughnessMap:he,dispersion:z,iridescence:Z,iridescenceMap:we,iridescenceThicknessMap:Ne,sheen:K,sheenColorMap:j,sheenRoughnessMap:F,specularMap:ie,specularColorMap:me,specularIntensityMap:Ue,transmission:ve,transmissionMap:k,thicknessMap:be,gradientMap:oe,opaque:b.transparent===!1&&b.blending===Rr&&b.alphaToCoverage===!1,alphaMap:re,alphaTest:Ee,alphaHash:ye,combine:b.combine,mapUv:He&&_(b.map.channel),aoMapUv:y&&_(b.aoMap.channel),lightMapUv:q&&_(b.lightMap.channel),bumpMapUv:se&&_(b.bumpMap.channel),normalMapUv:J&&_(b.normalMap.channel),displacementMapUv:Q&&_(b.displacementMap.channel),emissiveMapUv:fe&&_(b.emissiveMap.channel),metalnessMapUv:ae&&_(b.metalnessMap.channel),roughnessMapUv:E&&_(b.roughnessMap.channel),anisotropyMapUv:de&&_(b.anisotropyMap.channel),clearcoatMapUv:pe&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:We&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:j&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:F&&_(b.sheenRoughnessMap.channel),specularMapUv:ie&&_(b.specularMap.channel),specularColorMapUv:me&&_(b.specularColorMap.channel),specularIntensityMapUv:Ue&&_(b.specularIntensityMap.channel),transmissionMapUv:k&&_(b.transmissionMap.channel),thicknessMapUv:be&&_(b.thicknessMap.channel),alphaMapUv:re&&_(b.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(J||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!ee.attributes.uv&&(He||re),fog:!!P,useFog:b.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ue,skinning:w.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:De,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,decodeVideoTexture:He&&b.map.isVideoTexture===!0&&it.getTransfer(b.map.colorSpace)===yt,decodeVideoTextureEmissive:fe&&b.emissiveMap.isVideoTexture===!0&&it.getTransfer(b.emissiveMap.colorSpace)===yt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ui,flipSided:b.side===Dt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ge&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&b.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)x.push(C),x.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(M(x,b),T(x,b),x.push(n.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function M(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function T(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),b.push(a.mask)}function S(b){const x=g[b.type];let C;if(x){const D=ci[x];C=pM.clone(D.uniforms)}else C=b.uniforms;return C}function N(b,x){let C;for(let D=0,w=u.length;D<w;D++){const P=u[D];if(P.cacheKey===x){C=P,++C.usedTimes;break}}return C===void 0&&(C=new ww(n,x,b,r),u.push(C)),C}function I(b){if(--b.usedTimes===0){const x=u.indexOf(b);u[x]=u[u.length-1],u.pop(),b.destroy()}}function L(b){l.remove(b)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:N,releaseProgram:I,releaseShaderCache:L,programs:u,dispose:U}}function Iw(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Dw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Zd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Dw),i.length>1&&i.sort(f||Zd),s.length>1&&s.sort(f||Zd)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Nw(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Jd,n.set(i,[o])):s>=r.length?(o=new Jd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Uw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Ke};break;case"SpotLight":t={position:new V,direction:new V,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function Ow(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Fw=0;function kw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Bw(n){const e=new Uw,t=Ow(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,r=new $e,o=new $e;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,T=0,S=0,N=0,I=0,L=0;c.sort(kw);for(let b=0,x=c.length;b<x;b++){const C=c[b],D=C.color,w=C.intensity,P=C.distance,ee=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=D.r*w,h+=D.g*w,f+=D.b*w;else if(C.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(C.sh.coefficients[$],w);L++}else if(C.isDirectionalLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,X=t.get(C);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=ee,i.directionalShadowMatrix[d]=C.shadow.matrix,M++}i.directional[d]=$,d++}else if(C.isSpotLight){const $=e.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(D).multiplyScalar(w),$.distance=P,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,i.spot[_]=$;const Y=C.shadow;if(C.map&&(i.spotLightMap[N]=C.map,N++,Y.updateMatrices(C),C.castShadow&&I++),i.spotLightMatrix[_]=Y.matrix,C.castShadow){const X=t.get(C);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=ee,S++}_++}else if(C.isRectAreaLight){const $=e.get(C);$.color.copy(D).multiplyScalar(w),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=$,m++}else if(C.isPointLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),$.distance=C.distance,$.decay=C.decay,C.castShadow){const Y=C.shadow,X=t.get(C);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=C.shadow.matrix,T++}i.point[g]=$,g++}else if(C.isHemisphereLight){const $=e.get(C);$.skyColor.copy(C.color).multiplyScalar(w),$.groundColor.copy(C.groundColor).multiplyScalar(w),i.hemi[p]=$,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==d||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==M||U.numPointShadows!==T||U.numSpotShadows!==S||U.numSpotMaps!==N||U.numLightProbes!==L)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+N-I,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=L,U.directionalLength=d,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=M,U.numPointShadows=T,U.numSpotShadows=S,U.numSpotMaps=N,U.numLightProbes=L,i.version=Fw++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const T=c[p];if(T.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(T.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Qd(n){const e=new Bw(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Hw(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Qd(n),e.set(s,[a])):r>=o.length?(a=new Qd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Vw extends fi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Sb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zw extends fi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ww=`uniform sampler2D shadow_pass;
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
}`;function Xw(n,e,t){let i=new Fh;const s=new rt,r=new rt,o=new ut,a=new Vw({depthPacking:bb}),l=new zw,c={},u=t.maxTextureSize,h={[Hi]:Dt,[Dt]:Hi,[ui]:ui},f=new gs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Gw,fragmentShader:Ww}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ii;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Kt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_g;let p=this.type;this.render=function(I,L,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const b=n.getRenderTarget(),x=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ds),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const w=p!==wi&&this.type===wi,P=p===wi&&this.type!==wi;for(let ee=0,$=I.length;ee<$;ee++){const Y=I[ee],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const _e=X.getFrameExtents();if(s.multiply(_e),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/_e.x),s.x=r.x*_e.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/_e.y),s.y=r.y*_e.y,X.mapSize.y=r.y)),X.map===null||w===!0||P===!0){const Ie=this.type!==wi?{minFilter:dn,magFilter:dn}:{};X.map!==null&&X.map.dispose(),X.map=new Ks(s.x,s.y,Ie),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const Ae=X.getViewportCount();for(let Ie=0;Ie<Ae;Ie++){const De=X.getViewport(Ie);o.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),D.viewport(o),X.updateMatrices(Y,Ie),i=X.getFrustum(),S(L,U,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===wi&&M(X,U),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,x,C)};function M(I,L){const U=e.update(_);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ks(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(L,null,U,f,_,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(L,null,U,d,_,null)}function T(I,L,U,b){let x=null;const C=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(C!==void 0)x=C;else if(x=U.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const D=x.uuid,w=L.uuid;let P=c[D];P===void 0&&(P={},c[D]=P);let ee=P[w];ee===void 0&&(ee=x.clone(),P[w]=ee,L.addEventListener("dispose",N)),x=ee}if(x.visible=L.visible,x.wireframe=L.wireframe,b===wi?x.side=L.shadowSide!==null?L.shadowSide:L.side:x.side=L.shadowSide!==null?L.shadowSide:h[L.side],x.alphaMap=L.alphaMap,x.alphaTest=L.alphaTest,x.map=L.map,x.clipShadows=L.clipShadows,x.clippingPlanes=L.clippingPlanes,x.clipIntersection=L.clipIntersection,x.displacementMap=L.displacementMap,x.displacementScale=L.displacementScale,x.displacementBias=L.displacementBias,x.wireframeLinewidth=L.wireframeLinewidth,x.linewidth=L.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const D=n.properties.get(x);D.light=U}return x}function S(I,L,U,b,x){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&x===wi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);const w=e.update(I),P=I.material;if(Array.isArray(P)){const ee=w.groups;for(let $=0,Y=ee.length;$<Y;$++){const X=ee[$],_e=P[X.materialIndex];if(_e&&_e.visible){const Ae=T(I,_e,b,x);I.onBeforeShadow(n,I,L,U,w,Ae,X),n.renderBufferDirect(U,null,w,Ae,I,X),I.onAfterShadow(n,I,L,U,w,Ae,X)}}}else if(P.visible){const ee=T(I,P,b,x);I.onBeforeShadow(n,I,L,U,w,ee,null),n.renderBufferDirect(U,null,w,ee,I,null),I.onAfterShadow(n,I,L,U,w,ee,null)}}const D=I.children;for(let w=0,P=D.length;w<P;w++)S(D[w],L,U,b,x)}function N(I){I.target.removeEventListener("dispose",N);for(const U in c){const b=c[U],x=I.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}const $w={[fu]:du,[pu]:_u,[mu]:vu,[Fr]:gu,[du]:fu,[_u]:pu,[vu]:mu,[gu]:Fr};function jw(n,e){function t(){let k=!1;const be=new ut;let oe=null;const re=new ut(0,0,0,0);return{setMask:function(Ee){oe!==Ee&&!k&&(n.colorMask(Ee,Ee,Ee,Ee),oe=Ee)},setLocked:function(Ee){k=Ee},setClear:function(Ee,ye,Ge,ot,ht){ht===!0&&(Ee*=ot,ye*=ot,Ge*=ot),be.set(Ee,ye,Ge,ot),re.equals(be)===!1&&(n.clearColor(Ee,ye,Ge,ot),re.copy(be))},reset:function(){k=!1,oe=null,re.set(-1,0,0,0)}}}function i(){let k=!1,be=!1,oe=null,re=null,Ee=null;return{setReversed:function(ye){if(be!==ye){const Ge=e.get("EXT_clip_control");be?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const ot=Ee;Ee=null,this.setClear(ot)}be=ye},getReversed:function(){return be},setTest:function(ye){ye?B(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(ye){oe!==ye&&!k&&(n.depthMask(ye),oe=ye)},setFunc:function(ye){if(be&&(ye=$w[ye]),re!==ye){switch(ye){case fu:n.depthFunc(n.NEVER);break;case du:n.depthFunc(n.ALWAYS);break;case pu:n.depthFunc(n.LESS);break;case Fr:n.depthFunc(n.LEQUAL);break;case mu:n.depthFunc(n.EQUAL);break;case gu:n.depthFunc(n.GEQUAL);break;case _u:n.depthFunc(n.GREATER);break;case vu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}re=ye}},setLocked:function(ye){k=ye},setClear:function(ye){Ee!==ye&&(be&&(ye=1-ye),n.clearDepth(ye),Ee=ye)},reset:function(){k=!1,oe=null,re=null,Ee=null,be=!1}}}function s(){let k=!1,be=null,oe=null,re=null,Ee=null,ye=null,Ge=null,ot=null,ht=null;return{setTest:function(et){k||(et?B(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(et){be!==et&&!k&&(n.stencilMask(et),be=et)},setFunc:function(et,Ut,kt){(oe!==et||re!==Ut||Ee!==kt)&&(n.stencilFunc(et,Ut,kt),oe=et,re=Ut,Ee=kt)},setOp:function(et,Ut,kt){(ye!==et||Ge!==Ut||ot!==kt)&&(n.stencilOp(et,Ut,kt),ye=et,Ge=Ut,ot=kt)},setLocked:function(et){k=et},setClear:function(et){ht!==et&&(n.clearStencil(et),ht=et)},reset:function(){k=!1,be=null,oe=null,re=null,Ee=null,ye=null,Ge=null,ot=null,ht=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,T=null,S=null,N=null,I=null,L=new Ke(0,0,0),U=0,b=!1,x=null,C=null,D=null,w=null,P=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Y=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=Y>=2);let _e=null,Ae={};const Ie=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),Xe=new ut().fromArray(Ie),le=new ut().fromArray(De);function xe(k,be,oe,re){const Ee=new Uint8Array(4),ye=n.createTexture();n.bindTexture(k,ye),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<oe;Ge++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,re,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(be+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return ye}const Ce={};Ce[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(n.DEPTH_TEST),o.setFunc(Fr),se(!1),J(Qf),B(n.CULL_FACE),y(ds);function B(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function ue(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function ce(k,be){return h[k]!==be?(n.bindFramebuffer(k,be),h[k]=be,k===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=be),k===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=be),!0):!1}function ge(k,be){let oe=d,re=!1;if(k){oe=f.get(be),oe===void 0&&(oe=[],f.set(be,oe));const Ee=k.textures;if(oe.length!==Ee.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,Ge=Ee.length;ye<Ge;ye++)oe[ye]=n.COLOR_ATTACHMENT0+ye;oe.length=Ee.length,re=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,re=!0);re&&n.drawBuffers(oe)}function He(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const Oe={[Fs]:n.FUNC_ADD,[$S]:n.FUNC_SUBTRACT,[jS]:n.FUNC_REVERSE_SUBTRACT};Oe[qS]=n.MIN,Oe[KS]=n.MAX;const R={[YS]:n.ZERO,[ZS]:n.ONE,[JS]:n.SRC_COLOR,[uu]:n.SRC_ALPHA,[sb]:n.SRC_ALPHA_SATURATE,[nb]:n.DST_COLOR,[eb]:n.DST_ALPHA,[QS]:n.ONE_MINUS_SRC_COLOR,[hu]:n.ONE_MINUS_SRC_ALPHA,[ib]:n.ONE_MINUS_DST_COLOR,[tb]:n.ONE_MINUS_DST_ALPHA,[rb]:n.CONSTANT_COLOR,[ob]:n.ONE_MINUS_CONSTANT_COLOR,[ab]:n.CONSTANT_ALPHA,[lb]:n.ONE_MINUS_CONSTANT_ALPHA};function y(k,be,oe,re,Ee,ye,Ge,ot,ht,et){if(k===ds){_===!0&&(ue(n.BLEND),_=!1);return}if(_===!1&&(B(n.BLEND),_=!0),k!==XS){if(k!==m||et!==b){if((p!==Fs||S!==Fs)&&(n.blendEquation(n.FUNC_ADD),p=Fs,S=Fs),et)switch(k){case Rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ed:n.blendFunc(n.ONE,n.ONE);break;case td:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ed:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case td:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,T=null,N=null,I=null,L.set(0,0,0),U=0,m=k,b=et}return}Ee=Ee||be,ye=ye||oe,Ge=Ge||re,(be!==p||Ee!==S)&&(n.blendEquationSeparate(Oe[be],Oe[Ee]),p=be,S=Ee),(oe!==M||re!==T||ye!==N||Ge!==I)&&(n.blendFuncSeparate(R[oe],R[re],R[ye],R[Ge]),M=oe,T=re,N=ye,I=Ge),(ot.equals(L)===!1||ht!==U)&&(n.blendColor(ot.r,ot.g,ot.b,ht),L.copy(ot),U=ht),m=k,b=!1}function q(k,be){k.side===ui?ue(n.CULL_FACE):B(n.CULL_FACE);let oe=k.side===Dt;be&&(oe=!oe),se(oe),k.blending===Rr&&k.transparent===!1?y(ds):y(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const re=k.stencilWrite;a.setTest(re),re&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),fe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?B(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(k){x!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),x=k)}function J(k){k!==zS?(B(n.CULL_FACE),k!==C&&(k===Qf?n.cullFace(n.BACK):k===GS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),C=k}function Q(k){k!==D&&($&&n.lineWidth(k),D=k)}function fe(k,be,oe){k?(B(n.POLYGON_OFFSET_FILL),(w!==be||P!==oe)&&(n.polygonOffset(be,oe),w=be,P=oe)):ue(n.POLYGON_OFFSET_FILL)}function ae(k){k?B(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function E(k){k===void 0&&(k=n.TEXTURE0+ee-1),_e!==k&&(n.activeTexture(k),_e=k)}function v(k,be,oe){oe===void 0&&(_e===null?oe=n.TEXTURE0+ee-1:oe=_e);let re=Ae[oe];re===void 0&&(re={type:void 0,texture:void 0},Ae[oe]=re),(re.type!==k||re.texture!==be)&&(_e!==oe&&(n.activeTexture(oe),_e=oe),n.bindTexture(k,be||Ce[k]),re.type=k,re.texture=be)}function O(){const k=Ae[_e];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(k){Xe.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Xe.copy(k))}function F(k){le.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),le.copy(k))}function ie(k,be){let oe=c.get(be);oe===void 0&&(oe=new WeakMap,c.set(be,oe));let re=oe.get(k);re===void 0&&(re=n.getUniformBlockIndex(be,k.name),oe.set(k,re))}function me(k,be){const re=c.get(be).get(k);l.get(be)!==re&&(n.uniformBlockBinding(be,re,k.__bindingPointIndex),l.set(be,re))}function Ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},_e=null,Ae={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,T=null,S=null,N=null,I=null,L=new Ke(0,0,0),U=0,b=!1,x=null,C=null,D=null,w=null,P=null,Xe.set(0,0,n.canvas.width,n.canvas.height),le.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:B,disable:ue,bindFramebuffer:ce,drawBuffers:ge,useProgram:He,setBlending:y,setMaterial:q,setFlipSided:se,setCullFace:J,setLineWidth:Q,setPolygonOffset:fe,setScissorTest:ae,activeTexture:E,bindTexture:v,unbindTexture:O,compressedTexImage2D:z,compressedTexImage3D:Z,texImage2D:we,texImage3D:Ne,updateUBOMapping:ie,uniformBlockBinding:me,texStorage2D:We,texStorage3D:he,texSubImage2D:K,texSubImage3D:ve,compressedTexSubImage2D:de,compressedTexSubImage3D:pe,scissor:j,viewport:F,reset:Ue}}function ep(n,e,t,i){const s=qw(i);switch(t){case Eg:return n*e;case Ag:return n*e;case wg:return n*e*2;case Ih:return n*e/s.components*s.byteLength;case Dh:return n*e/s.components*s.byteLength;case Rg:return n*e*2/s.components*s.byteLength;case Nh:return n*e*2/s.components*s.byteLength;case Tg:return n*e*3/s.components*s.byteLength;case On:return n*e*4/s.components*s.byteLength;case Uh:return n*e*4/s.components*s.byteLength;case ja:case qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ka:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bu:case Eu:return Math.max(n,16)*Math.max(e,8)/4;case Su:case Mu:return Math.max(n,8)*Math.max(e,8)/2;case Tu:case Au:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ru:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Du:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ou:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ku:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Bu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Hu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Vu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Za:case zu:case Gu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Cg:case Wu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xu:case $u:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qw(n){switch(n){case Vi:case Sg:return{byteLength:1,components:1};case Go:case bg:case Jo:return{byteLength:2,components:1};case Ph:case Lh:return{byteLength:2,components:4};case qs:case Ch:case qn:return{byteLength:4,components:1};case Mg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Kw(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return d?new OffscreenCanvas(E,v):$o("canvas")}function _(E,v,O){let z=1;const Z=ae(E);if((Z.width>O||Z.height>O)&&(z=O/Math.max(Z.width,Z.height)),z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const K=Math.floor(z*Z.width),ve=Math.floor(z*Z.height);h===void 0&&(h=g(K,ve));const de=v?g(K,ve):h;return de.width=K,de.height=ve,de.getContext("2d").drawImage(E,0,0,K,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+K+"x"+ve+")."),de}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(E,v,O,z,Z=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let K=v;if(v===n.RED&&(O===n.FLOAT&&(K=n.R32F),O===n.HALF_FLOAT&&(K=n.R16F),O===n.UNSIGNED_BYTE&&(K=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.R8UI),O===n.UNSIGNED_SHORT&&(K=n.R16UI),O===n.UNSIGNED_INT&&(K=n.R32UI),O===n.BYTE&&(K=n.R8I),O===n.SHORT&&(K=n.R16I),O===n.INT&&(K=n.R32I)),v===n.RG&&(O===n.FLOAT&&(K=n.RG32F),O===n.HALF_FLOAT&&(K=n.RG16F),O===n.UNSIGNED_BYTE&&(K=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RG8UI),O===n.UNSIGNED_SHORT&&(K=n.RG16UI),O===n.UNSIGNED_INT&&(K=n.RG32UI),O===n.BYTE&&(K=n.RG8I),O===n.SHORT&&(K=n.RG16I),O===n.INT&&(K=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGB8UI),O===n.UNSIGNED_SHORT&&(K=n.RGB16UI),O===n.UNSIGNED_INT&&(K=n.RGB32UI),O===n.BYTE&&(K=n.RGB8I),O===n.SHORT&&(K=n.RGB16I),O===n.INT&&(K=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),O===n.UNSIGNED_INT&&(K=n.RGBA32UI),O===n.BYTE&&(K=n.RGBA8I),O===n.SHORT&&(K=n.RGBA16I),O===n.INT&&(K=n.RGBA32I)),v===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),v===n.RGBA){const ve=Z?Ol:it.getTransfer(z);O===n.FLOAT&&(K=n.RGBA32F),O===n.HALF_FLOAT&&(K=n.RGBA16F),O===n.UNSIGNED_BYTE&&(K=ve===yt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(E,v){let O;return E?v===null||v===qs||v===Vr?O=n.DEPTH24_STENCIL8:v===qn?O=n.DEPTH32F_STENCIL8:v===Go&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===qs||v===Vr?O=n.DEPTH_COMPONENT24:v===qn?O=n.DEPTH_COMPONENT32F:v===Go&&(O=n.DEPTH_COMPONENT16),O}function N(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==dn&&E.minFilter!==Rn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function I(E){const v=E.target;v.removeEventListener("dispose",I),U(v),v.isVideoTexture&&u.delete(v)}function L(E){const v=E.target;v.removeEventListener("dispose",L),x(v)}function U(E){const v=i.get(E);if(v.__webglInit===void 0)return;const O=E.source,z=f.get(O);if(z){const Z=z[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(E),Object.keys(z).length===0&&f.delete(O)}i.remove(E)}function b(E){const v=i.get(E);n.deleteTexture(v.__webglTexture);const O=E.source,z=f.get(O);delete z[v.__cacheKey],o.memory.textures--}function x(E){const v=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(v.__webglFramebuffer[z]))for(let Z=0;Z<v.__webglFramebuffer[z].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[z][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[z])}else{if(Array.isArray(v.__webglFramebuffer))for(let z=0;z<v.__webglFramebuffer.length;z++)n.deleteFramebuffer(v.__webglFramebuffer[z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let z=0;z<v.__webglColorRenderbuffer.length;z++)v.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=E.textures;for(let z=0,Z=O.length;z<Z;z++){const K=i.get(O[z]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(O[z])}i.remove(E)}let C=0;function D(){C=0}function w(){const E=C;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),C+=1,E}function P(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function ee(E,v){const O=i.get(E);if(E.isVideoTexture&&Q(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const z=E.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(O,E,v);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function $(E,v){const O=i.get(E);if(E.version>0&&O.__version!==E.version){le(O,E,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function Y(E,v){const O=i.get(E);if(E.version>0&&O.__version!==E.version){le(O,E,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function X(E,v){const O=i.get(E);if(E.version>0&&O.__version!==E.version){xe(O,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const _e={[Hr]:n.REPEAT,[hs]:n.CLAMP_TO_EDGE,[hl]:n.MIRRORED_REPEAT},Ae={[dn]:n.NEAREST,[yg]:n.NEAREST_MIPMAP_NEAREST,[vo]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[$a]:n.LINEAR_MIPMAP_NEAREST,[Di]:n.LINEAR_MIPMAP_LINEAR},Ie={[Eb]:n.NEVER,[Pb]:n.ALWAYS,[Tb]:n.LESS,[Ig]:n.LEQUAL,[Ab]:n.EQUAL,[Cb]:n.GEQUAL,[wb]:n.GREATER,[Rb]:n.NOTEQUAL};function De(E,v){if(v.type===qn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Rn||v.magFilter===$a||v.magFilter===vo||v.magFilter===Di||v.minFilter===Rn||v.minFilter===$a||v.minFilter===vo||v.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,_e[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,_e[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,_e[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Ae[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Ae[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ie[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===dn||v.minFilter!==vo&&v.minFilter!==Di||v.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Xe(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",I));const z=v.source;let Z=f.get(z);Z===void 0&&(Z={},f.set(z,Z));const K=P(v);if(K!==E.__cacheKey){Z[K]===void 0&&(Z[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[K].usedTimes++;const ve=Z[E.__cacheKey];ve!==void 0&&(Z[E.__cacheKey].usedTimes--,ve.usedTimes===0&&b(v)),E.__cacheKey=K,E.__webglTexture=Z[K].texture}return O}function le(E,v,O){let z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(z=n.TEXTURE_3D);const Z=Xe(E,v),K=v.source;t.bindTexture(z,E.__webglTexture,n.TEXTURE0+O);const ve=i.get(K);if(K.version!==ve.__version||Z===!0){t.activeTexture(n.TEXTURE0+O);const de=it.getPrimaries(it.workingColorSpace),pe=v.colorSpace===us?null:it.getPrimaries(v.colorSpace),We=v.colorSpace===us||de===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let he=_(v.image,!1,s.maxTextureSize);he=fe(v,he);const we=r.convert(v.format,v.colorSpace),Ne=r.convert(v.type);let j=T(v.internalFormat,we,Ne,v.colorSpace,v.isVideoTexture);De(z,v);let F;const ie=v.mipmaps,me=v.isVideoTexture!==!0,Ue=ve.__version===void 0||Z===!0,k=K.dataReady,be=N(v,he);if(v.isDepthTexture)j=S(v.format===zr,v.type),Ue&&(me?t.texStorage2D(n.TEXTURE_2D,1,j,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,j,he.width,he.height,0,we,Ne,null));else if(v.isDataTexture)if(ie.length>0){me&&Ue&&t.texStorage2D(n.TEXTURE_2D,be,j,ie[0].width,ie[0].height);for(let oe=0,re=ie.length;oe<re;oe++)F=ie[oe],me?k&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,F.width,F.height,we,Ne,F.data):t.texImage2D(n.TEXTURE_2D,oe,j,F.width,F.height,0,we,Ne,F.data);v.generateMipmaps=!1}else me?(Ue&&t.texStorage2D(n.TEXTURE_2D,be,j,he.width,he.height),k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,we,Ne,he.data)):t.texImage2D(n.TEXTURE_2D,0,j,he.width,he.height,0,we,Ne,he.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){me&&Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,j,ie[0].width,ie[0].height,he.depth);for(let oe=0,re=ie.length;oe<re;oe++)if(F=ie[oe],v.format!==On)if(we!==null)if(me){if(k)if(v.layerUpdates.size>0){const Ee=ep(F.width,F.height,v.format,v.type);for(const ye of v.layerUpdates){const Ge=F.data.subarray(ye*Ee/F.data.BYTES_PER_ELEMENT,(ye+1)*Ee/F.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,ye,F.width,F.height,1,we,Ge)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,F.width,F.height,he.depth,we,F.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,j,F.width,F.height,he.depth,0,F.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,F.width,F.height,he.depth,we,Ne,F.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,j,F.width,F.height,he.depth,0,we,Ne,F.data)}else{me&&Ue&&t.texStorage2D(n.TEXTURE_2D,be,j,ie[0].width,ie[0].height);for(let oe=0,re=ie.length;oe<re;oe++)F=ie[oe],v.format!==On?we!==null?me?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,F.width,F.height,we,F.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,j,F.width,F.height,0,F.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?k&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,F.width,F.height,we,Ne,F.data):t.texImage2D(n.TEXTURE_2D,oe,j,F.width,F.height,0,we,Ne,F.data)}else if(v.isDataArrayTexture)if(me){if(Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,j,he.width,he.height,he.depth),k)if(v.layerUpdates.size>0){const oe=ep(he.width,he.height,v.format,v.type);for(const re of v.layerUpdates){const Ee=he.data.subarray(re*oe/he.data.BYTES_PER_ELEMENT,(re+1)*oe/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,he.width,he.height,1,we,Ne,Ee)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,we,Ne,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,j,he.width,he.height,he.depth,0,we,Ne,he.data);else if(v.isData3DTexture)me?(Ue&&t.texStorage3D(n.TEXTURE_3D,be,j,he.width,he.height,he.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,we,Ne,he.data)):t.texImage3D(n.TEXTURE_3D,0,j,he.width,he.height,he.depth,0,we,Ne,he.data);else if(v.isFramebufferTexture){if(Ue)if(me)t.texStorage2D(n.TEXTURE_2D,be,j,he.width,he.height);else{let oe=he.width,re=he.height;for(let Ee=0;Ee<be;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,j,oe,re,0,we,Ne,null),oe>>=1,re>>=1}}else if(ie.length>0){if(me&&Ue){const oe=ae(ie[0]);t.texStorage2D(n.TEXTURE_2D,be,j,oe.width,oe.height)}for(let oe=0,re=ie.length;oe<re;oe++)F=ie[oe],me?k&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,we,Ne,F):t.texImage2D(n.TEXTURE_2D,oe,j,we,Ne,F);v.generateMipmaps=!1}else if(me){if(Ue){const oe=ae(he);t.texStorage2D(n.TEXTURE_2D,be,j,oe.width,oe.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Ne,he)}else t.texImage2D(n.TEXTURE_2D,0,j,we,Ne,he);m(v)&&p(z),ve.__version=K.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function xe(E,v,O){if(v.image.length!==6)return;const z=Xe(E,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+O);const K=i.get(Z);if(Z.version!==K.__version||z===!0){t.activeTexture(n.TEXTURE0+O);const ve=it.getPrimaries(it.workingColorSpace),de=v.colorSpace===us?null:it.getPrimaries(v.colorSpace),pe=v.colorSpace===us||ve===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const We=v.isCompressedTexture||v.image[0].isCompressedTexture,he=v.image[0]&&v.image[0].isDataTexture,we=[];for(let re=0;re<6;re++)!We&&!he?we[re]=_(v.image[re],!0,s.maxCubemapSize):we[re]=he?v.image[re].image:v.image[re],we[re]=fe(v,we[re]);const Ne=we[0],j=r.convert(v.format,v.colorSpace),F=r.convert(v.type),ie=T(v.internalFormat,j,F,v.colorSpace),me=v.isVideoTexture!==!0,Ue=K.__version===void 0||z===!0,k=Z.dataReady;let be=N(v,Ne);De(n.TEXTURE_CUBE_MAP,v);let oe;if(We){me&&Ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,ie,Ne.width,Ne.height);for(let re=0;re<6;re++){oe=we[re].mipmaps;for(let Ee=0;Ee<oe.length;Ee++){const ye=oe[Ee];v.format!==On?j!==null?me?k&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,0,0,ye.width,ye.height,j,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,ie,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,0,0,ye.width,ye.height,j,F,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,ie,ye.width,ye.height,0,j,F,ye.data)}}}else{if(oe=v.mipmaps,me&&Ue){oe.length>0&&be++;const re=ae(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,ie,re.width,re.height)}for(let re=0;re<6;re++)if(he){me?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,we[re].width,we[re].height,j,F,we[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ie,we[re].width,we[re].height,0,j,F,we[re].data);for(let Ee=0;Ee<oe.length;Ee++){const Ge=oe[Ee].image[re].image;me?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,0,0,Ge.width,Ge.height,j,F,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,ie,Ge.width,Ge.height,0,j,F,Ge.data)}}else{me?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,j,F,we[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ie,j,F,we[re]);for(let Ee=0;Ee<oe.length;Ee++){const ye=oe[Ee];me?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,0,0,j,F,ye.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,ie,j,F,ye.image[re])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),K.__version=Z.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Ce(E,v,O,z,Z,K){const ve=r.convert(O.format,O.colorSpace),de=r.convert(O.type),pe=T(O.internalFormat,ve,de,O.colorSpace),We=i.get(v),he=i.get(O);if(he.__renderTarget=v,!We.__hasExternalTextures){const we=Math.max(1,v.width>>K),Ne=Math.max(1,v.height>>K);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,K,pe,we,Ne,v.depth,0,ve,de,null):t.texImage2D(Z,K,pe,we,Ne,0,ve,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),J(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,Z,he.__webglTexture,0,se(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,Z,he.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function B(E,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer){const z=v.depthTexture,Z=z&&z.isDepthTexture?z.type:null,K=S(v.stencilBuffer,Z),ve=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=se(v);J(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,K,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,K,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,E)}else{const z=v.textures;for(let Z=0;Z<z.length;Z++){const K=z[Z],ve=r.convert(K.format,K.colorSpace),de=r.convert(K.type),pe=T(K.internalFormat,ve,de,K.colorSpace),We=se(v);O&&J(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,pe,v.width,v.height):J(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,pe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(v.depthTexture);z.__renderTarget=v,(!z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ee(v.depthTexture,0);const Z=z.__webglTexture,K=se(v);if(v.depthTexture.format===Cr)J(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(v.depthTexture.format===zr)J(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ce(E){const v=i.get(E),O=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const z=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),z){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,z.removeEventListener("dispose",Z)};z.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=z}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ue(v.__webglFramebuffer,E)}else if(O){v.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[z]),v.__webglDepthbuffer[z]===void 0)v.__webglDepthbuffer[z]=n.createRenderbuffer(),B(v.__webglDepthbuffer[z],E,!1);else{const Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,K)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),B(v.__webglDepthbuffer,E,!1);else{const z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,Z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(E,v,O){const z=i.get(E);v!==void 0&&Ce(z.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ce(E)}function He(E){const v=E.texture,O=i.get(E),z=i.get(v);E.addEventListener("dispose",L);const Z=E.textures,K=E.isWebGLCubeRenderTarget===!0,ve=Z.length>1;if(ve||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=v.version,o.memory.textures++),K){O.__webglFramebuffer=[];for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[de]=[];for(let pe=0;pe<v.mipmaps.length;pe++)O.__webglFramebuffer[de][pe]=n.createFramebuffer()}else O.__webglFramebuffer[de]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let de=0;de<v.mipmaps.length;de++)O.__webglFramebuffer[de]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ve)for(let de=0,pe=Z.length;de<pe;de++){const We=i.get(Z[de]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&J(E)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<Z.length;de++){const pe=Z[de];O.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[de]);const We=r.convert(pe.format,pe.colorSpace),he=r.convert(pe.type),we=T(pe.internalFormat,We,he,pe.colorSpace,E.isXRRenderTarget===!0),Ne=se(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,we,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,O.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),B(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),De(n.TEXTURE_CUBE_MAP,v);for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)Ce(O.__webglFramebuffer[de][pe],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else Ce(O.__webglFramebuffer[de],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let de=0,pe=Z.length;de<pe;de++){const We=Z[de],he=i.get(We);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),De(n.TEXTURE_2D,We),Ce(O.__webglFramebuffer,E,We,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),m(We)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(de=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,z.__webglTexture),De(de,v),v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)Ce(O.__webglFramebuffer[pe],E,v,n.COLOR_ATTACHMENT0,de,pe);else Ce(O.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,de,0);m(v)&&p(de),t.unbindTexture()}E.depthBuffer&&ce(E)}function Oe(E){const v=E.textures;for(let O=0,z=v.length;O<z;O++){const Z=v[O];if(m(Z)){const K=M(E),ve=i.get(Z).__webglTexture;t.bindTexture(K,ve),p(K),t.unbindTexture()}}}const R=[],y=[];function q(E){if(E.samples>0){if(J(E)===!1){const v=E.textures,O=E.width,z=E.height;let Z=n.COLOR_BUFFER_BIT;const K=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(E),de=v.length>1;if(de)for(let pe=0;pe<v.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[pe]);const We=i.get(v[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,We,0)}n.blitFramebuffer(0,0,O,z,0,0,O,z,Z,n.NEAREST),l===!0&&(R.length=0,y.length=0,R.push(n.COLOR_ATTACHMENT0+pe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(R.push(K),y.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let pe=0;pe<v.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,ve.__webglColorRenderbuffer[pe]);const We=i.get(v[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function se(E){return Math.min(s.maxSamples,E.samples)}function J(E){const v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Q(E){const v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function fe(E,v){const O=E.colorSpace,z=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==mn&&O!==us&&(it.getTransfer(O)===yt?(z!==On||Z!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function ae(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=w,this.resetTextureUnits=D,this.setTexture2D=ee,this.setTexture2DArray=$,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=ge,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=J}function Yw(n,e){function t(i,s=us){let r;const o=it.getTransfer(s);if(i===Vi)return n.UNSIGNED_BYTE;if(i===Ph)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Sg)return n.BYTE;if(i===bg)return n.SHORT;if(i===Go)return n.UNSIGNED_SHORT;if(i===Ch)return n.INT;if(i===qs)return n.UNSIGNED_INT;if(i===qn)return n.FLOAT;if(i===Jo)return n.HALF_FLOAT;if(i===Eg)return n.ALPHA;if(i===Tg)return n.RGB;if(i===On)return n.RGBA;if(i===Ag)return n.LUMINANCE;if(i===wg)return n.LUMINANCE_ALPHA;if(i===Cr)return n.DEPTH_COMPONENT;if(i===zr)return n.DEPTH_STENCIL;if(i===Ih)return n.RED;if(i===Dh)return n.RED_INTEGER;if(i===Rg)return n.RG;if(i===Nh)return n.RG_INTEGER;if(i===Uh)return n.RGBA_INTEGER;if(i===ja||i===qa||i===Ka||i===Ya)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Su||i===bu||i===Mu||i===Eu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Su)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Eu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tu||i===Au||i===wu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Tu||i===Au)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ru||i===Cu||i===Pu||i===Lu||i===Iu||i===Du||i===Nu||i===Uu||i===Ou||i===Fu||i===ku||i===Bu||i===Hu||i===Vu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ru)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Iu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Du)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ou)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ku)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Za||i===zu||i===Gu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Za)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cg||i===Wu||i===Xu||i===$u)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Za)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$u)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Zw extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hs extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jw={type:"move"};class Ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Hs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Qw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e1=`
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

}`;class t1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new $t,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new gs({vertexShader:Qw,fragmentShader:e1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new kl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n1 extends Ys{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new t1,m=t.getContextAttributes();let p=null,M=null;const T=[],S=[],N=new rt;let I=null;const L=new hn;L.viewport=new ut;const U=new hn;U.viewport=new ut;const b=[L,U],x=new Zw;let C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let xe=T[le];return xe===void 0&&(xe=new Ic,T[le]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(le){let xe=T[le];return xe===void 0&&(xe=new Ic,T[le]=xe),xe.getGripSpace()},this.getHand=function(le){let xe=T[le];return xe===void 0&&(xe=new Ic,T[le]=xe),xe.getHandSpace()};function w(le){const xe=S.indexOf(le.inputSource);if(xe===-1)return;const Ce=T[xe];Ce!==void 0&&(Ce.update(le.inputSource,le.frame,c||o),Ce.dispatchEvent({type:le.type,data:le.inputSource}))}function P(){s.removeEventListener("select",w),s.removeEventListener("selectstart",w),s.removeEventListener("selectend",w),s.removeEventListener("squeeze",w),s.removeEventListener("squeezestart",w),s.removeEventListener("squeezeend",w),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",ee);for(let le=0;le<T.length;le++){const xe=S[le];xe!==null&&(S[le]=null,T[le].disconnect(xe))}C=null,D=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,M=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",w),s.addEventListener("selectstart",w),s.addEventListener("selectend",w),s.addEventListener("squeeze",w),s.addEventListener("squeezestart",w),s.addEventListener("squeezeend",w),s.addEventListener("end",P),s.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(N),s.renderState.layers===void 0){const xe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ks(d.framebufferWidth,d.framebufferHeight,{format:On,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let xe=null,Ce=null,B=null;m.depth&&(B=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=m.stencil?zr:Cr,Ce=m.stencil?Vr:qs);const ue={colorFormat:t.RGBA8,depthFormat:B,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(ue),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Ks(f.textureWidth,f.textureHeight,{format:On,type:Vi,depthTexture:new Wg(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xe.setContext(s),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ee(le){for(let xe=0;xe<le.removed.length;xe++){const Ce=le.removed[xe],B=S.indexOf(Ce);B>=0&&(S[B]=null,T[B].disconnect(Ce))}for(let xe=0;xe<le.added.length;xe++){const Ce=le.added[xe];let B=S.indexOf(Ce);if(B===-1){for(let ce=0;ce<T.length;ce++)if(ce>=S.length){S.push(Ce),B=ce;break}else if(S[ce]===null){S[ce]=Ce,B=ce;break}if(B===-1)break}const ue=T[B];ue&&ue.connect(Ce)}}const $=new V,Y=new V;function X(le,xe,Ce){$.setFromMatrixPosition(xe.matrixWorld),Y.setFromMatrixPosition(Ce.matrixWorld);const B=$.distanceTo(Y),ue=xe.projectionMatrix.elements,ce=Ce.projectionMatrix.elements,ge=ue[14]/(ue[10]-1),He=ue[14]/(ue[10]+1),Oe=(ue[9]+1)/ue[5],R=(ue[9]-1)/ue[5],y=(ue[8]-1)/ue[0],q=(ce[8]+1)/ce[0],se=ge*y,J=ge*q,Q=B/(-y+q),fe=Q*-y;if(xe.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(fe),le.translateZ(Q),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),ue[10]===-1)le.projectionMatrix.copy(xe.projectionMatrix),le.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const ae=ge+Q,E=He+Q,v=se-fe,O=J+(B-fe),z=Oe*He/E*ae,Z=R*He/E*ae;le.projectionMatrix.makePerspective(v,O,z,Z,ae,E),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function _e(le,xe){xe===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(xe.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let xe=le.near,Ce=le.far;_.texture!==null&&(_.depthNear>0&&(xe=_.depthNear),_.depthFar>0&&(Ce=_.depthFar)),x.near=U.near=L.near=xe,x.far=U.far=L.far=Ce,(C!==x.near||D!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,D=x.far),L.layers.mask=le.layers.mask|2,U.layers.mask=le.layers.mask|4,x.layers.mask=L.layers.mask|U.layers.mask;const B=le.parent,ue=x.cameras;_e(x,B);for(let ce=0;ce<ue.length;ce++)_e(ue[ce],B);ue.length===2?X(x,L,U):x.projectionMatrix.copy(L.projectionMatrix),Ae(le,x,B)};function Ae(le,xe,Ce){Ce===null?le.matrix.copy(xe.matrixWorld):(le.matrix.copy(Ce.matrixWorld),le.matrix.invert(),le.matrix.multiply(xe.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(xe.projectionMatrix),le.projectionMatrixInverse.copy(xe.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Gr*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(le){l=le,f!==null&&(f.fixedFoveation=le),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=le)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Ie=null;function De(le,xe){if(u=xe.getViewerPose(c||o),g=xe,u!==null){const Ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let B=!1;Ce.length!==x.cameras.length&&(x.cameras.length=0,B=!0);for(let ce=0;ce<Ce.length;ce++){const ge=Ce[ce];let He=null;if(d!==null)He=d.getViewport(ge);else{const R=h.getViewSubImage(f,ge);He=R.viewport,ce===0&&(e.setRenderTargetTextures(M,R.colorTexture,f.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(M))}let Oe=b[ce];Oe===void 0&&(Oe=new hn,Oe.layers.enable(ce),Oe.viewport=new ut,b[ce]=Oe),Oe.matrix.fromArray(ge.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(ge.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(He.x,He.y,He.width,He.height),ce===0&&(x.matrix.copy(Oe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),B===!0&&x.cameras.push(Oe)}const ue=s.enabledFeatures;if(ue&&ue.includes("depth-sensing")){const ce=h.getDepthInformation(Ce[0]);ce&&ce.isValid&&ce.texture&&_.init(e,ce,s.renderState)}}for(let Ce=0;Ce<T.length;Ce++){const B=S[Ce],ue=T[Ce];B!==null&&ue!==void 0&&ue.update(B,xe,c||o)}Ie&&Ie(le,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),g=null}const Xe=new Gg;Xe.setAnimationLoop(De),this.setAnimationLoop=function(le){Ie=le},this.dispose=function(){}}}const Ps=new ni,i1=new $e;function s1(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Hg(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,T,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Dt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Dt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),T=M.envMap,S=M.envMapRotation;T&&(m.envMap.value=T,Ps.copy(S),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),m.envMapRotation.value.setFromMatrix4(i1.makeRotationFromEuler(Ps)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function r1(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const S=T.program;i.uniformBlockBinding(M,S)}function c(M,T){let S=s[M.id];S===void 0&&(g(M),S=u(M),s[M.id]=S,M.addEventListener("dispose",m));const N=T.program;i.updateUBOMapping(M,N);const I=e.render.frame;r[M.id]!==I&&(f(M),r[M.id]=I)}function u(M){const T=h();M.__bindingPointIndex=T;const S=n.createBuffer(),N=M.__size,I=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,N,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const T=s[M.id],S=M.uniforms,N=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let I=0,L=S.length;I<L;I++){const U=Array.isArray(S[I])?S[I]:[S[I]];for(let b=0,x=U.length;b<x;b++){const C=U[b];if(d(C,I,b,N)===!0){const D=C.__offset,w=Array.isArray(C.value)?C.value:[C.value];let P=0;for(let ee=0;ee<w.length;ee++){const $=w[ee],Y=_($);typeof $=="number"||typeof $=="boolean"?(C.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,D+P,C.__data)):$.isMatrix3?(C.__data[0]=$.elements[0],C.__data[1]=$.elements[1],C.__data[2]=$.elements[2],C.__data[3]=0,C.__data[4]=$.elements[3],C.__data[5]=$.elements[4],C.__data[6]=$.elements[5],C.__data[7]=0,C.__data[8]=$.elements[6],C.__data[9]=$.elements[7],C.__data[10]=$.elements[8],C.__data[11]=0):($.toArray(C.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,T,S,N){const I=M.value,L=T+"_"+S;if(N[L]===void 0)return typeof I=="number"||typeof I=="boolean"?N[L]=I:N[L]=I.clone(),!0;{const U=N[L];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return N[L]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function g(M){const T=M.uniforms;let S=0;const N=16;for(let L=0,U=T.length;L<U;L++){const b=Array.isArray(T[L])?T[L]:[T[L]];for(let x=0,C=b.length;x<C;x++){const D=b[x],w=Array.isArray(D.value)?D.value:[D.value];for(let P=0,ee=w.length;P<ee;P++){const $=w[P],Y=_($),X=S%N,_e=X%Y.boundary,Ae=X+_e;S+=_e,Ae!==0&&N-Ae<Y.storage&&(S+=N-Ae),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=Y.storage}}}const I=S%N;return I>0&&(S+=N-I),M.__size=S,M.__cache={},this}function _(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),T}function m(M){const T=M.target;T.removeEventListener("dispose",m);const S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class o1{constructor(e={}){const{canvas:t=qb(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this.toneMapping=ps,this.toneMappingExposure=1;const S=this;let N=!1,I=0,L=0,U=null,b=-1,x=null;const C=new ut,D=new ut;let w=null;const P=new Ke(0);let ee=0,$=t.width,Y=t.height,X=1,_e=null,Ae=null;const Ie=new ut(0,0,$,Y),De=new ut(0,0,$,Y);let Xe=!1;const le=new Fh;let xe=!1,Ce=!1;const B=new $e,ue=new $e,ce=new V,ge=new ut,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function R(){return U===null?X:1}let y=i;function q(A,G){return t.getContext(A,G)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rh}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",ye,!1),y===null){const G="webgl2";if(y=q(G,A),y===null)throw q(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let se,J,Q,fe,ae,E,v,O,z,Z,K,ve,de,pe,We,he,we,Ne,j,F,ie,me,Ue,k;function be(){se=new hA(y),se.init(),me=new Yw(y,se),J=new rA(y,se,e,me),Q=new jw(y,se),J.reverseDepthBuffer&&f&&Q.buffers.depth.setReversed(!0),fe=new pA(y),ae=new Iw,E=new Kw(y,se,Q,ae,J,me,fe),v=new aA(S),O=new uA(S),z=new SM(y),Ue=new iA(y,z),Z=new fA(y,z,fe,Ue),K=new gA(y,Z,z,fe),j=new mA(y,J,E),he=new oA(ae),ve=new Lw(S,v,O,se,J,Ue,he),de=new s1(S,ae),pe=new Nw,We=new Hw(se),Ne=new nA(S,v,O,Q,K,d,l),we=new Xw(S,K,J),k=new r1(y,fe,J,Q),F=new sA(y,se,fe),ie=new dA(y,se,fe),fe.programs=ve.programs,S.capabilities=J,S.extensions=se,S.properties=ae,S.renderLists=pe,S.shadowMap=we,S.state=Q,S.info=fe}be();const oe=new n1(S,y);this.xr=oe,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const A=se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize($,Y,!1))},this.getSize=function(A){return A.set($,Y)},this.setSize=function(A,G,te=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,Y=G,t.width=Math.floor(A*X),t.height=Math.floor(G*X),te===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set($*X,Y*X).floor()},this.setDrawingBufferSize=function(A,G,te){$=A,Y=G,X=te,t.width=Math.floor(A*te),t.height=Math.floor(G*te),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(Ie)},this.setViewport=function(A,G,te,ne){A.isVector4?Ie.set(A.x,A.y,A.z,A.w):Ie.set(A,G,te,ne),Q.viewport(C.copy(Ie).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(De)},this.setScissor=function(A,G,te,ne){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,G,te,ne),Q.scissor(D.copy(De).multiplyScalar(X).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(A){Q.setScissorTest(Xe=A)},this.setOpaqueSort=function(A){_e=A},this.setTransparentSort=function(A){Ae=A},this.getClearColor=function(A){return A.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(A=!0,G=!0,te=!0){let ne=0;if(A){let W=!1;if(U!==null){const Se=U.texture.format;W=Se===Uh||Se===Nh||Se===Dh}if(W){const Se=U.texture.type,Le=Se===Vi||Se===qs||Se===Go||Se===Vr||Se===Ph||Se===Lh,Fe=Ne.getClearColor(),ke=Ne.getClearAlpha(),je=Fe.r,Ye=Fe.g,Be=Fe.b;Le?(g[0]=je,g[1]=Ye,g[2]=Be,g[3]=ke,y.clearBufferuiv(y.COLOR,0,g)):(_[0]=je,_[1]=Ye,_[2]=Be,_[3]=ke,y.clearBufferiv(y.COLOR,0,_))}else ne|=y.COLOR_BUFFER_BIT}G&&(ne|=y.DEPTH_BUFFER_BIT),te&&(ne|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),pe.dispose(),We.dispose(),ae.dispose(),v.dispose(),O.dispose(),K.dispose(),Ue.dispose(),k.dispose(),ve.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Ss),oe.removeEventListener("sessionend",Wi),Pt.stop()};function re(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const A=fe.autoReset,G=we.enabled,te=we.autoUpdate,ne=we.needsUpdate,W=we.type;be(),fe.autoReset=A,we.enabled=G,we.autoUpdate=te,we.needsUpdate=ne,we.type=W}function ye(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ge(A){const G=A.target;G.removeEventListener("dispose",Ge),ot(G)}function ot(A){ht(A),ae.remove(A)}function ht(A){const G=ae.get(A).programs;G!==void 0&&(G.forEach(function(te){ve.releaseProgram(te)}),A.isShaderMaterial&&ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,te,ne,W,Se){G===null&&(G=He);const Le=W.isMesh&&W.matrixWorld.determinant()<0,Fe=bt(A,G,te,ne,W);Q.setMaterial(ne,Le);let ke=te.index,je=1;if(ne.wireframe===!0){if(ke=Z.getWireframeAttribute(te),ke===void 0)return;je=2}const Ye=te.drawRange,Be=te.attributes.position;let at=Ye.start*je,Mt=(Ye.start+Ye.count)*je;Se!==null&&(at=Math.max(at,Se.start*je),Mt=Math.min(Mt,(Se.start+Se.count)*je)),ke!==null?(at=Math.max(at,0),Mt=Math.min(Mt,ke.count)):Be!=null&&(at=Math.max(at,0),Mt=Math.min(Mt,Be.count));const Tt=Mt-at;if(Tt<0||Tt===1/0)return;Ue.setup(W,ne,Fe,te,ke);let gn,ft=F;if(ke!==null&&(gn=z.get(ke),ft=ie,ft.setIndex(gn)),W.isMesh)ne.wireframe===!0?(Q.setLineWidth(ne.wireframeLinewidth*R()),ft.setMode(y.LINES)):ft.setMode(y.TRIANGLES);else if(W.isLine){let Ve=ne.linewidth;Ve===void 0&&(Ve=1),Q.setLineWidth(Ve*R()),W.isLineSegments?ft.setMode(y.LINES):W.isLineLoop?ft.setMode(y.LINE_LOOP):ft.setMode(y.LINE_STRIP)}else W.isPoints?ft.setMode(y.POINTS):W.isSprite&&ft.setMode(y.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ft.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ft.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ve=W._multiDrawStarts,vi=W._multiDrawCounts,dt=W._multiDrawCount,Hn=ke?z.get(ke).bytesPerElement:1,Qs=ae.get(ne).currentProgram.getUniforms();for(let xn=0;xn<dt;xn++)Qs.setValue(y,"_gl_DrawID",xn),ft.render(Ve[xn]/Hn,vi[xn])}else if(W.isInstancedMesh)ft.renderInstances(at,Tt,W.count);else if(te.isInstancedBufferGeometry){const Ve=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,vi=Math.min(te.instanceCount,Ve);ft.renderInstances(at,Tt,vi)}else ft.render(at,Tt)};function et(A,G,te){A.transparent===!0&&A.side===ui&&A.forceSinglePass===!1?(A.side=Dt,A.needsUpdate=!0,Yt(A,G,te),A.side=Hi,A.needsUpdate=!0,Yt(A,G,te),A.side=ui):Yt(A,G,te)}this.compile=function(A,G,te=null){te===null&&(te=A),p=We.get(te),p.init(G),T.push(p),te.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),A!==te&&A.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const ne=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Se=W.material;if(Se)if(Array.isArray(Se))for(let Le=0;Le<Se.length;Le++){const Fe=Se[Le];et(Fe,te,W),ne.add(Fe)}else et(Se,te,W),ne.add(Se)}),T.pop(),p=null,ne},this.compileAsync=function(A,G,te=null){const ne=this.compile(A,G,te);return new Promise(W=>{function Se(){if(ne.forEach(function(Le){ae.get(Le).currentProgram.isReady()&&ne.delete(Le)}),ne.size===0){W(A);return}setTimeout(Se,10)}se.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ut=null;function kt(A){Ut&&Ut(A)}function Ss(){Pt.stop()}function Wi(){Pt.start()}const Pt=new Gg;Pt.setAnimationLoop(kt),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(A){Ut=A,oe.setAnimationLoop(A),A===null?Pt.stop():Pt.start()},oe.addEventListener("sessionstart",Ss),oe.addEventListener("sessionend",Wi),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(G),G=oe.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,G,U),p=We.get(A,T.length),p.init(G),T.push(p),ue.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),le.setFromProjectionMatrix(ue),Ce=this.localClippingEnabled,xe=he.init(this.clippingPlanes,Ce),m=pe.get(A,M.length),m.init(),M.push(m),oe.enabled===!0&&oe.isPresenting===!0){const Se=S.xr.getDepthSensingMesh();Se!==null&&zt(Se,G,-1/0,S.sortObjects)}zt(A,G,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(_e,Ae),Oe=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Oe&&Ne.addToRenderList(m,A),this.info.render.frame++,xe===!0&&he.beginShadows();const te=p.state.shadowsArray;we.render(te,A,G),xe===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=m.opaque,W=m.transmissive;if(p.setupLights(),G.isArrayCamera){const Se=G.cameras;if(W.length>0)for(let Le=0,Fe=Se.length;Le<Fe;Le++){const ke=Se[Le];na(ne,W,A,ke)}Oe&&Ne.render(A);for(let Le=0,Fe=Se.length;Le<Fe;Le++){const ke=Se[Le];ta(m,A,ke,ke.viewport)}}else W.length>0&&na(ne,W,A,G),Oe&&Ne.render(A),ta(m,A,G);U!==null&&(E.updateMultisampleRenderTarget(U),E.updateRenderTargetMipmap(U)),A.isScene===!0&&A.onAfterRender(S,A,G),Ue.resetDefaultState(),b=-1,x=null,T.pop(),T.length>0?(p=T[T.length-1],xe===!0&&he.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function zt(A,G,te,ne){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||le.intersectsSprite(A)){ne&&ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);const Le=K.update(A),Fe=A.material;Fe.visible&&m.push(A,Le,Fe,te,ge.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||le.intersectsObject(A))){const Le=K.update(A),Fe=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ge.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ge.copy(Le.boundingSphere.center)),ge.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(Fe)){const ke=Le.groups;for(let je=0,Ye=ke.length;je<Ye;je++){const Be=ke[je],at=Fe[Be.materialIndex];at&&at.visible&&m.push(A,Le,at,te,ge.z,Be)}}else Fe.visible&&m.push(A,Le,Fe,te,ge.z,null)}}const Se=A.children;for(let Le=0,Fe=Se.length;Le<Fe;Le++)zt(Se[Le],G,te,ne)}function ta(A,G,te,ne){const W=A.opaque,Se=A.transmissive,Le=A.transparent;p.setupLightsView(te),xe===!0&&he.setGlobalState(S.clippingPlanes,te),ne&&Q.viewport(C.copy(ne)),W.length>0&&Js(W,G,te),Se.length>0&&Js(Se,G,te),Le.length>0&&Js(Le,G,te),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function na(A,G,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ne.id]===void 0&&(p.state.transmissionRenderTarget[ne.id]=new Ks(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Jo:Vi,minFilter:Di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const Se=p.state.transmissionRenderTarget[ne.id],Le=ne.viewport||C;Se.setSize(Le.z,Le.w);const Fe=S.getRenderTarget();S.setRenderTarget(Se),S.getClearColor(P),ee=S.getClearAlpha(),ee<1&&S.setClearColor(16777215,.5),S.clear(),Oe&&Ne.render(te);const ke=S.toneMapping;S.toneMapping=ps;const je=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),p.setupLightsView(ne),xe===!0&&he.setGlobalState(S.clippingPlanes,ne),Js(A,te,ne),E.updateMultisampleRenderTarget(Se),E.updateRenderTargetMipmap(Se),se.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Be=0,at=G.length;Be<at;Be++){const Mt=G[Be],Tt=Mt.object,gn=Mt.geometry,ft=Mt.material,Ve=Mt.group;if(ft.side===ui&&Tt.layers.test(ne.layers)){const vi=ft.side;ft.side=Dt,ft.needsUpdate=!0,ia(Tt,te,ne,gn,ft,Ve),ft.side=vi,ft.needsUpdate=!0,Ye=!0}}Ye===!0&&(E.updateMultisampleRenderTarget(Se),E.updateRenderTargetMipmap(Se))}S.setRenderTarget(Fe),S.setClearColor(P,ee),je!==void 0&&(ne.viewport=je),S.toneMapping=ke}function Js(A,G,te){const ne=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Se=A.length;W<Se;W++){const Le=A[W],Fe=Le.object,ke=Le.geometry,je=ne===null?Le.material:ne,Ye=Le.group;Fe.layers.test(te.layers)&&ia(Fe,G,te,ke,je,Ye)}}function ia(A,G,te,ne,W,Se){A.onBeforeRender(S,G,te,ne,W,Se),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(S,G,te,ne,A,Se),W.transparent===!0&&W.side===ui&&W.forceSinglePass===!1?(W.side=Dt,W.needsUpdate=!0,S.renderBufferDirect(te,G,ne,W,A,Se),W.side=Hi,W.needsUpdate=!0,S.renderBufferDirect(te,G,ne,W,A,Se),W.side=ui):S.renderBufferDirect(te,G,ne,W,A,Se),A.onAfterRender(S,G,te,ne,W,Se)}function Yt(A,G,te){G.isScene!==!0&&(G=He);const ne=ae.get(A),W=p.state.lights,Se=p.state.shadowsArray,Le=W.state.version,Fe=ve.getParameters(A,W.state,Se,G,te),ke=ve.getProgramCacheKey(Fe);let je=ne.programs;ne.environment=A.isMeshStandardMaterial?G.environment:null,ne.fog=G.fog,ne.envMap=(A.isMeshStandardMaterial?O:v).get(A.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,je===void 0&&(A.addEventListener("dispose",Ge),je=new Map,ne.programs=je);let Ye=je.get(ke);if(Ye!==void 0){if(ne.currentProgram===Ye&&ne.lightsStateVersion===Le)return ra(A,Fe),Ye}else Fe.uniforms=ve.getUniforms(A),A.onBeforeCompile(Fe,S),Ye=ve.acquireProgram(Fe,ke),je.set(ke,Ye),ne.uniforms=Fe.uniforms;const Be=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=he.uniform),ra(A,Fe),ne.needsLights=E_(A),ne.lightsStateVersion=Le,ne.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMap.value=W.state.directionalShadowMap,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotShadowMap.value=W.state.spotShadowMap,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMap.value=W.state.pointShadowMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix),ne.currentProgram=Ye,ne.uniformsList=null,Ye}function sa(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=Ja.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function ra(A,G){const te=ae.get(A);te.outputColorSpace=G.outputColorSpace,te.batching=G.batching,te.batchingColor=G.batchingColor,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.instancingMorph=G.instancingMorph,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function bt(A,G,te,ne,W){G.isScene!==!0&&(G=He),E.resetTextureUnits();const Se=G.fog,Le=ne.isMeshStandardMaterial?G.environment:null,Fe=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:mn,ke=(ne.isMeshStandardMaterial?O:v).get(ne.envMap||Le),je=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ye=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Be=!!te.morphAttributes.position,at=!!te.morphAttributes.normal,Mt=!!te.morphAttributes.color;let Tt=ps;ne.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Tt=S.toneMapping);const gn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ft=gn!==void 0?gn.length:0,Ve=ae.get(ne),vi=p.state.lights;if(xe===!0&&(Ce===!0||A!==x)){const Pn=A===x&&ne.id===b;he.setState(ne,A,Pn)}let dt=!1;ne.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==vi.state.version||Ve.outputColorSpace!==Fe||W.isBatchedMesh&&Ve.batching===!1||!W.isBatchedMesh&&Ve.batching===!0||W.isBatchedMesh&&Ve.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ve.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ve.instancing===!1||!W.isInstancedMesh&&Ve.instancing===!0||W.isSkinnedMesh&&Ve.skinning===!1||!W.isSkinnedMesh&&Ve.skinning===!0||W.isInstancedMesh&&Ve.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ve.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ve.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ve.instancingMorph===!1&&W.morphTexture!==null||Ve.envMap!==ke||ne.fog===!0&&Ve.fog!==Se||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==he.numPlanes||Ve.numIntersection!==he.numIntersection)||Ve.vertexAlphas!==je||Ve.vertexTangents!==Ye||Ve.morphTargets!==Be||Ve.morphNormals!==at||Ve.morphColors!==Mt||Ve.toneMapping!==Tt||Ve.morphTargetsCount!==ft)&&(dt=!0):(dt=!0,Ve.__version=ne.version);let Hn=Ve.currentProgram;dt===!0&&(Hn=Yt(ne,G,W));let Qs=!1,xn=!1,to=!1;const At=Hn.getUniforms(),si=Ve.uniforms;if(Q.useProgram(Hn.program)&&(Qs=!0,xn=!0,to=!0),ne.id!==b&&(b=ne.id,xn=!0),Qs||x!==A){Q.buffers.depth.getReversed()?(B.copy(A.projectionMatrix),Yb(B),Zb(B),At.setValue(y,"projectionMatrix",B)):At.setValue(y,"projectionMatrix",A.projectionMatrix),At.setValue(y,"viewMatrix",A.matrixWorldInverse);const Xi=At.map.cameraPosition;Xi!==void 0&&Xi.setValue(y,ce.setFromMatrixPosition(A.matrixWorld)),J.logarithmicDepthBuffer&&At.setValue(y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&At.setValue(y,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,xn=!0,to=!0)}if(W.isSkinnedMesh){At.setOptional(y,W,"bindMatrix"),At.setOptional(y,W,"bindMatrixInverse");const Pn=W.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),At.setValue(y,"boneTexture",Pn.boneTexture,E))}W.isBatchedMesh&&(At.setOptional(y,W,"batchingTexture"),At.setValue(y,"batchingTexture",W._matricesTexture,E),At.setOptional(y,W,"batchingIdTexture"),At.setValue(y,"batchingIdTexture",W._indirectTexture,E),At.setOptional(y,W,"batchingColorTexture"),W._colorsTexture!==null&&At.setValue(y,"batchingColorTexture",W._colorsTexture,E));const no=te.morphAttributes;if((no.position!==void 0||no.normal!==void 0||no.color!==void 0)&&j.update(W,te,Hn),(xn||Ve.receiveShadow!==W.receiveShadow)&&(Ve.receiveShadow=W.receiveShadow,At.setValue(y,"receiveShadow",W.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(si.envMap.value=ke,si.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&G.environment!==null&&(si.envMapIntensity.value=G.environmentIntensity),xn&&(At.setValue(y,"toneMappingExposure",S.toneMappingExposure),Ve.needsLights&&M_(si,to),Se&&ne.fog===!0&&de.refreshFogUniforms(si,Se),de.refreshMaterialUniforms(si,ne,X,Y,p.state.transmissionRenderTarget[A.id]),Ja.upload(y,sa(Ve),si,E)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ja.upload(y,sa(Ve),si,E),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&At.setValue(y,"center",W.center),At.setValue(y,"modelViewMatrix",W.modelViewMatrix),At.setValue(y,"normalMatrix",W.normalMatrix),At.setValue(y,"modelMatrix",W.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Pn=ne.uniformsGroups;for(let Xi=0,$i=Pn.length;Xi<$i;Xi++){const qh=Pn[Xi];k.update(qh,Hn),k.bind(qh,Hn)}}return Hn}function M_(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function E_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,G,te){ae.get(A.texture).__webglTexture=G,ae.get(A.depthTexture).__webglTexture=te;const ne=ae.get(A);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,G){const te=ae.get(A);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,te=0){U=A,I=G,L=te;let ne=!0,W=null,Se=!1,Le=!1;if(A){const ke=ae.get(A);if(ke.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(y.FRAMEBUFFER,null),ne=!1;else if(ke.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(ke.__hasExternalTextures)E.rebindTextures(A,ae.get(A.texture).__webglTexture,ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Be=A.depthTexture;if(ke.__boundDepthTexture!==Be){if(Be!==null&&ae.has(Be)&&(A.width!==Be.image.width||A.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Le=!0);const Ye=ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ye[G])?W=Ye[G][te]:W=Ye[G],Se=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?W=ae.get(A).__webglMultisampledFramebuffer:Array.isArray(Ye)?W=Ye[te]:W=Ye,C.copy(A.viewport),D.copy(A.scissor),w=A.scissorTest}else C.copy(Ie).multiplyScalar(X).floor(),D.copy(De).multiplyScalar(X).floor(),w=Xe;if(Q.bindFramebuffer(y.FRAMEBUFFER,W)&&ne&&Q.drawBuffers(A,W),Q.viewport(C),Q.scissor(D),Q.setScissorTest(w),Se){const ke=ae.get(A.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+G,ke.__webglTexture,te)}else if(Le){const ke=ae.get(A.texture),je=G||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,ke.__webglTexture,te||0,je)}b=-1},this.readRenderTargetPixels=function(A,G,te,ne,W,Se,Le){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){Q.bindFramebuffer(y.FRAMEBUFFER,Fe);try{const ke=A.texture,je=ke.format,Ye=ke.type;if(!J.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-ne&&te>=0&&te<=A.height-W&&y.readPixels(G,te,ne,W,me.convert(je),me.convert(Ye),Se)}finally{const ke=U!==null?ae.get(U).__webglFramebuffer:null;Q.bindFramebuffer(y.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,G,te,ne,W,Se,Le){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){const ke=A.texture,je=ke.format,Ye=ke.type;if(!J.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=A.width-ne&&te>=0&&te<=A.height-W){Q.bindFramebuffer(y.FRAMEBUFFER,Fe);const Be=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Be),y.bufferData(y.PIXEL_PACK_BUFFER,Se.byteLength,y.STREAM_READ),y.readPixels(G,te,ne,W,me.convert(je),me.convert(Ye),0);const at=U!==null?ae.get(U).__webglFramebuffer:null;Q.bindFramebuffer(y.FRAMEBUFFER,at);const Mt=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await Kb(y,Mt,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Be),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,Se),y.deleteBuffer(Be),y.deleteSync(Mt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,G=null,te=0){A.isTexture!==!0&&(xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1]);const ne=Math.pow(2,-te),W=Math.floor(A.image.width*ne),Se=Math.floor(A.image.height*ne),Le=G!==null?G.x:0,Fe=G!==null?G.y:0;E.setTexture2D(A,0),y.copyTexSubImage2D(y.TEXTURE_2D,te,0,0,Le,Fe,W,Se),Q.unbindTexture()},this.copyTextureToTexture=function(A,G,te=null,ne=null,W=0){A.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,A=arguments[1],G=arguments[2],W=arguments[3]||0,te=null);let Se,Le,Fe,ke,je,Ye,Be,at,Mt;const Tt=A.isCompressedTexture?A.mipmaps[W]:A.image;te!==null?(Se=te.max.x-te.min.x,Le=te.max.y-te.min.y,Fe=te.isBox3?te.max.z-te.min.z:1,ke=te.min.x,je=te.min.y,Ye=te.isBox3?te.min.z:0):(Se=Tt.width,Le=Tt.height,Fe=Tt.depth||1,ke=0,je=0,Ye=0),ne!==null?(Be=ne.x,at=ne.y,Mt=ne.z):(Be=0,at=0,Mt=0);const gn=me.convert(G.format),ft=me.convert(G.type);let Ve;G.isData3DTexture?(E.setTexture3D(G,0),Ve=y.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(E.setTexture2DArray(G,0),Ve=y.TEXTURE_2D_ARRAY):(E.setTexture2D(G,0),Ve=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,G.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,G.unpackAlignment);const vi=y.getParameter(y.UNPACK_ROW_LENGTH),dt=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Hn=y.getParameter(y.UNPACK_SKIP_PIXELS),Qs=y.getParameter(y.UNPACK_SKIP_ROWS),xn=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,Tt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Tt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,ke),y.pixelStorei(y.UNPACK_SKIP_ROWS,je),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ye);const to=A.isDataArrayTexture||A.isData3DTexture,At=G.isDataArrayTexture||G.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const si=ae.get(A),no=ae.get(G),Pn=ae.get(si.__renderTarget),Xi=ae.get(no.__renderTarget);Q.bindFramebuffer(y.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Q.bindFramebuffer(y.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let $i=0;$i<Fe;$i++)to&&y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,ae.get(A).__webglTexture,W,Ye+$i),A.isDepthTexture?(At&&y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,ae.get(G).__webglTexture,W,Mt+$i),y.blitFramebuffer(ke,je,Se,Le,Be,at,Se,Le,y.DEPTH_BUFFER_BIT,y.NEAREST)):At?y.copyTexSubImage3D(Ve,W,Be,at,Mt+$i,ke,je,Se,Le):y.copyTexSubImage2D(Ve,W,Be,at,Mt+$i,ke,je,Se,Le);Q.bindFramebuffer(y.READ_FRAMEBUFFER,null),Q.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else At?A.isDataTexture||A.isData3DTexture?y.texSubImage3D(Ve,W,Be,at,Mt,Se,Le,Fe,gn,ft,Tt.data):G.isCompressedArrayTexture?y.compressedTexSubImage3D(Ve,W,Be,at,Mt,Se,Le,Fe,gn,Tt.data):y.texSubImage3D(Ve,W,Be,at,Mt,Se,Le,Fe,gn,ft,Tt):A.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,W,Be,at,Se,Le,gn,ft,Tt.data):A.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,W,Be,at,Tt.width,Tt.height,gn,Tt.data):y.texSubImage2D(y.TEXTURE_2D,W,Be,at,Se,Le,gn,ft,Tt);y.pixelStorei(y.UNPACK_ROW_LENGTH,vi),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,dt),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Hn),y.pixelStorei(y.UNPACK_SKIP_ROWS,Qs),y.pixelStorei(y.UNPACK_SKIP_IMAGES,xn),W===0&&G.generateMipmaps&&y.generateMipmap(Ve),Q.unbindTexture()},this.copyTextureToTexture3D=function(A,G,te=null,ne=null,W=0){return A.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,A=arguments[2],G=arguments[3],W=arguments[4]||0),xo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,G,te,ne,W)},this.initRenderTarget=function(A){ae.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),Q.unbindTexture()},this.resetState=function(){I=0,L=0,U=null,Q.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}class a1 extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class l1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qu,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new V;class Hh{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const tp=new V,np=new ut,ip=new ut,c1=new V,sp=new $e,Ia=new V,Dc=new mi,rp=new $e,Nc=new Fl;class u1 extends Kt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=id,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ia),this.boundingBox.expandByPoint(Ia)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ia),this.boundingSphere.expandByPoint(Ia)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dc.copy(this.boundingSphere),Dc.applyMatrix4(s),e.ray.intersectsSphere(Dc)!==!1&&(rp.copy(s).invert(),Nc.copy(e.ray).applyMatrix4(rp),!(this.boundingBox!==null&&Nc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Nc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===id?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vb?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;np.fromBufferAttribute(s.attributes.skinIndex,e),ip.fromBufferAttribute(s.attributes.skinWeight,e),tp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=ip.getComponent(r);if(o!==0){const a=np.getComponent(r);sp.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(c1.copy(tp).applyMatrix4(sp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Kg extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yg extends $t{constructor(e=null,t=1,i=1,s,r,o,a,l,c=dn,u=dn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const op=new $e,h1=new $e;class Vh{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new $e;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:h1;op.multiplyMatrices(a,t[r]),op.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Vh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Yg(t,e,e,On,qn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Kg),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Yu extends pn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _r=new $e,ap=new $e,Da=[],lp=new pi,f1=new $e,uo=new Kt,ho=new mi;class Zu extends Kt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,f1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_r),lp.copy(e.boundingBox).applyMatrix4(_r),this.boundingBox.union(lp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_r),ho.copy(e.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(ho)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(uo.geometry=this.geometry,uo.material=this.material,uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ho.copy(this.boundingSphere),ho.applyMatrix4(i),e.ray.intersectsSphere(ho)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_r),ap.multiplyMatrices(i,_r),uo.matrixWorld=ap,uo.raycast(e,Da);for(let o=0,a=Da.length;o<a;o++){const l=Da[o];l.instanceId=r,l.object=this,t.push(l)}Da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Yg(new Float32Array(s*this.count),s,this.count,Ih,qn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Zg extends fi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dl=new V,pl=new V,cp=new $e,fo=new Fl,Na=new mi,Uc=new V,up=new V;class zh extends Rt{constructor(e=new ii,t=new Zg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)dl.fromBufferAttribute(t,s-1),pl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=dl.distanceTo(pl);e.setAttribute("lineDistance",new Bn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(s),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;cp.copy(s).invert(),fo.copy(e.ray).applyMatrix4(cp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),M=u.getX(_+1),T=Ua(this,e,fo,l,p,M);T&&t.push(T)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Ua(this,e,fo,l,_,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=Ua(this,e,fo,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Ua(this,e,fo,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ua(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(dl.fromBufferAttribute(o,s),pl.fromBufferAttribute(o,r),t.distanceSqToSegment(dl,pl,Uc,up)>i)return;Uc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Uc);if(!(l<e.near||l>e.far))return{distance:l,point:up.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const hp=new V,fp=new V;class d1 extends zh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)hp.fromBufferAttribute(t,s),fp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+hp.distanceTo(fp);e.setAttribute("lineDistance",new Bn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class p1 extends zh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Jg extends fi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dp=new $e,Ju=new Fl,Oa=new mi,Fa=new V;class m1 extends Rt{constructor(e=new ii,t=new Jg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),Oa.radius+=r,e.ray.intersectsSphere(Oa)===!1)return;dp.copy(s).invert(),Ju.copy(e.ray).applyMatrix4(dp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Fa.fromBufferAttribute(h,m),pp(Fa,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Fa.fromBufferAttribute(h,g),pp(Fa,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function pp(n,e,t,i,s,r,o){const a=Ju.distanceSqToPoint(n);if(a<t){const l=new V;Ju.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ml extends ii{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new V,f=new V,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const M=[],T=p/i;let S=0;p===0&&o===0?S=.5/t:p===i&&l===Math.PI&&(S=-.5/t);for(let N=0;N<=t;N++){const I=N/t;h.x=-e*Math.cos(s+I*r)*Math.sin(o+T*a),h.y=e*Math.cos(o+T*a),h.z=e*Math.sin(s+I*r)*Math.sin(o+T*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(I+S,1-T),M.push(c++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){const T=u[p][M+1],S=u[p][M],N=u[p+1][M],I=u[p+1][M+1];(p!==0||o>0)&&d.push(T,S,I),(p!==i-1||l<Math.PI)&&d.push(S,N,I)}this.setIndex(d),this.setAttribute("position",new Bn(g,3)),this.setAttribute("normal",new Bn(_,3)),this.setAttribute("uv",new Bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lr extends fi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lg,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gi extends Lr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ka(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function g1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function _1(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function mp(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Qg(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Qo{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class v1 extends Qo{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sd,endingEnd:sd}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case rd:r=e,a=2*t-i;break;case od:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case rd:o=e,l=2*i-t;break;case od:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,M=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,T=(-1-d)*m+(1.5+d)*_+.5*g,S=d*m-d*_;for(let N=0;N!==a;++N)r[N]=p*o[u+N]+M*o[c+N]+T*o[l+N]+S*o[h+N];return r}}class x1 extends Qo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class y1 extends Qo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class _i{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ka(t,this.TimeBufferType),this.values=ka(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ka(e.times,Array),values:ka(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new y1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new x1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new v1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wo:t=this.InterpolantFactoryMethodDiscrete;break;case Xo:t=this.InterpolantFactoryMethodLinear;break;case rc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wo;case this.InterpolantFactoryMethodLinear:return Xo;case this.InterpolantFactoryMethodSmooth:return rc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&g1(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===rc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=Xo;class Qr extends _i{constructor(e,t,i){super(e,t,i)}}Qr.prototype.ValueTypeName="bool";Qr.prototype.ValueBufferType=Array;Qr.prototype.DefaultInterpolation=Wo;Qr.prototype.InterpolantFactoryMethodLinear=void 0;Qr.prototype.InterpolantFactoryMethodSmooth=void 0;class e_ extends _i{}e_.prototype.ValueTypeName="color";class Xr extends _i{}Xr.prototype.ValueTypeName="number";class S1 extends Qo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Gi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class $r extends _i{InterpolantFactoryMethodLinear(e){return new S1(this.times,this.values,this.getValueSize(),e)}}$r.prototype.ValueTypeName="quaternion";$r.prototype.InterpolantFactoryMethodSmooth=void 0;class eo extends _i{constructor(e,t,i){super(e,t,i)}}eo.prototype.ValueTypeName="string";eo.prototype.ValueBufferType=Array;eo.prototype.DefaultInterpolation=Wo;eo.prototype.InterpolantFactoryMethodLinear=void 0;eo.prototype.InterpolantFactoryMethodSmooth=void 0;class jr extends _i{}jr.prototype.ValueTypeName="vector";class b1{constructor(e="",t=-1,i=[],s=xb){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Zn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(E1(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(_i.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=_1(l);l=mp(l,1,u),c=mp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Xr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];Qg(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let M=0;M!==f[g].morphTargets.length;++M){const T=f[g];m.push(T.time),p.push(T.morphTarget===_?1:0)}s.push(new Xr(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";i(jr,d+".position",f,"pos",s),i($r,d+".quaternion",f,"rot",s),i(jr,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function M1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xr;case"vector":case"vector2":case"vector3":case"vector4":return jr;case"color":return e_;case"quaternion":return $r;case"bool":case"boolean":return Qr;case"string":return eo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function E1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=M1(n.type);if(n.times===void 0){const t=[],i=[];Qg(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const fs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class T1{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const A1=new T1;class Zs{constructor(e){this.manager=e!==void 0?e:A1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Zs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ai={};class w1 extends Error{constructor(e,t){super(e),this.response=t}}class Gh extends Zs{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=fs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:i,onError:s});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ai[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){h.read().then(({done:T,value:S})=>{if(T)p.close();else{_+=S.byteLength;const N=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let I=0,L=u.length;I<L;I++){const U=u[I];U.onProgress&&U.onProgress(N)}p.enqueue(S),M()}},T=>{p.error(T)})}}});return new Response(m)}else throw new w1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{fs.add(e,c);const u=Ai[e];delete Ai[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ai[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ai[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class R1 extends Zs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=fs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=$o("img");function l(){u(),fs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Qu extends Zs{constructor(e){super(e)}load(e,t,i,s){const r=new $t,o=new R1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Hl extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Oc=new $e,gp=new V,_p=new V;class Wh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fh,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;gp.setFromMatrixPosition(e.matrixWorld),t.position.copy(gp),_p.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_p),t.updateMatrixWorld(),Oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class C1 extends Wh{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Gr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class P1 extends Hl{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new C1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vp=new $e,po=new V,Fc=new V;class L1 extends Wh{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),po.setFromMatrixPosition(e.matrixWorld),i.position.copy(po),Fc.copy(i.position),Fc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Fc),i.updateMatrixWorld(),s.makeTranslation(-po.x,-po.y,-po.z),vp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vp)}}class t_ extends Hl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new L1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class I1 extends Wh{constructor(){super(new kh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class D1 extends Hl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new I1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class N1 extends Hl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Io{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class U1 extends Zs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=fs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return fs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),fs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});fs.add(e,l),r.manager.itemStart(e)}}let Ba;class n_{static getContext(){return Ba===void 0&&(Ba=new(window.AudioContext||window.webkitAudioContext)),Ba}static setContext(e){Ba=e}}class O1 extends Zs{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new Gh(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);n_.getContext().decodeAudioData(c,function(h){t(h)}).catch(a)}catch(c){a(c)}},i,s);function a(l){s?s(l):console.error(l),r.manager.itemError(e)}}}class i_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=xp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xp(){return performance.now()}const Ls=new V,yp=new Gi,F1=new V,Is=new V;class k1 extends Rt{constructor(){super(),this.type="AudioListener",this.context=n_.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new i_}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ls,yp,F1),Is.set(0,0,-1).applyQuaternion(yp),t.positionX){const s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ls.x,s),t.positionY.linearRampToValueAtTime(Ls.y,s),t.positionZ.linearRampToValueAtTime(Ls.z,s),t.forwardX.linearRampToValueAtTime(Is.x,s),t.forwardY.linearRampToValueAtTime(Is.y,s),t.forwardZ.linearRampToValueAtTime(Is.z,s),t.upX.linearRampToValueAtTime(i.x,s),t.upY.linearRampToValueAtTime(i.y,s),t.upZ.linearRampToValueAtTime(i.z,s)}else t.setPosition(Ls.x,Ls.y,Ls.z),t.setOrientation(Is.x,Is.y,Is.z,i.x,i.y,i.z)}}class kc extends Rt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Xh="\\[\\]\\.:\\/",B1=new RegExp("["+Xh+"]","g"),$h="[^"+Xh+"]",H1="[^"+Xh.replace("\\.","")+"]",V1=/((?:WC+[\/:])*)/.source.replace("WC",$h),z1=/(WCOD+)?/.source.replace("WCOD",H1),G1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),W1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),X1=new RegExp("^"+V1+z1+G1+W1+"$"),$1=["material","materials","bones","map"];class j1{constructor(e,t,i){const s=i||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class xt{constructor(e,t,i){this.path=t,this.parsedPath=i||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,i):new xt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(B1,"")}static parseTrackName(e){const t=X1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);$1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=j1;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class q1 extends Ys{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rh);const vr=new ni(0,0,0,"YXZ"),xr=new V,K1={type:"change"},Y1={type:"lock"},Z1={type:"unlock"},Sp=Math.PI/2;class J1 extends q1{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Q1.bind(this),this._onPointerlockChange=eR.bind(this),this._onPointerlockError=tR.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;xr.setFromMatrixColumn(t.matrix,0),xr.crossVectors(t.up,xr),t.position.addScaledVector(xr,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;xr.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(xr,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Q1(n){if(this.enabled===!1||this.isLocked===!1)return;const e=n.movementX||n.mozMovementX||n.webkitMovementX||0,t=n.movementY||n.mozMovementY||n.webkitMovementY||0,i=this.object;vr.setFromQuaternion(i.quaternion),vr.y-=e*.002*this.pointerSpeed,vr.x-=t*.002*this.pointerSpeed,vr.x=Math.max(Sp-this.maxPolarAngle,Math.min(Sp-this.minPolarAngle,vr.x)),i.quaternion.setFromEuler(vr),this.dispatchEvent(K1)}function eR(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Y1),this.isLocked=!0):(this.dispatchEvent(Z1),this.isLocked=!1)}function tR(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}function bp(n,e){if(e===yb)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===ju||e===Pg){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===ju)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class Bc extends Zs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new oR(t)}),this.register(function(t){return new aR(t)}),this.register(function(t){return new gR(t)}),this.register(function(t){return new _R(t)}),this.register(function(t){return new vR(t)}),this.register(function(t){return new cR(t)}),this.register(function(t){return new uR(t)}),this.register(function(t){return new hR(t)}),this.register(function(t){return new fR(t)}),this.register(function(t){return new rR(t)}),this.register(function(t){return new dR(t)}),this.register(function(t){return new lR(t)}),this.register(function(t){return new mR(t)}),this.register(function(t){return new pR(t)}),this.register(function(t){return new iR(t)}),this.register(function(t){return new xR(t)}),this.register(function(t){return new yR(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Io.extractUrlBase(e);o=Io.resolveURL(c,this.path)}else o=Io.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Gh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===s_){try{o[tt.KHR_BINARY_GLTF]=new SR(e)}catch(h){s&&s(h);return}r=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new NR(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case tt.KHR_MATERIALS_UNLIT:o[h]=new sR;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[h]=new bR(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[h]=new MR;break;case tt.KHR_MESH_QUANTIZATION:o[h]=new ER;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function nR(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class iR{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ke(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],mn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new D1(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new t_(u),c.distance=h;break;case"spot":c=new P1(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class sR{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return _n}extendParams(e,t,i){const s=[];e.color=new Ke(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],mn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,jt))}return Promise.all(s)}}class rR{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class oR{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new rt(a,a)}return Promise.all(r)}}class aR{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class lR{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class cR{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],mn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,jt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class uR{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class hR{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ke().setRGB(a[0],a[1],a[2],mn),Promise.all(r)}}class fR{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class dR{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ke().setRGB(a[0],a[1],a[2],mn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,jt)),Promise.all(r)}}class pR{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class mR{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class gR{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class _R{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class vR{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class xR{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class yR{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==Nn.TRIANGLES&&c.mode!==Nn.TRIANGLE_STRIP&&c.mode!==Nn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new $e,m=new V,p=new Gi,M=new V(1,1,1),T=new Zu(g.geometry,g.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&M.fromBufferAttribute(l.SCALE,S),T.setMatrixAt(S,_.compose(m,p,M));for(const S in l)if(S==="_COLOR_0"){const N=l[S];T.instanceColor=new Yu(N.array,N.itemSize,N.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);Rt.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),d.push(T)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const s_="glTF",mo=12,Mp={JSON:1313821514,BIN:5130562};class SR{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,mo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==s_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-mo,r=new DataView(e,mo);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Mp.JSON){const c=new Uint8Array(e,mo+o,a);this.content=i.decode(c)}else if(l===Mp.BIN){const c=mo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class bR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=eh[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=eh[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],d=Ir[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,mn,f)})})}}class MR{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ER{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class r_ extends Qo{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,M=1-m,T=p-f+h;for(let S=0;S!==a;S++){const N=o[_+S+a],I=o[_+S+l]*u,L=o[g+S+a],U=o[g+S]*u;r[S]=M*N+T*I+m*L+p*U}return r}}const TR=new Gi;class AR extends r_{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return TR.fromArray(r).normalize().toArray(r),r}}const Nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ep={9728:dn,9729:Rn,9984:yg,9985:$a,9986:vo,9987:Di},Tp={33071:hs,33648:hl,10497:Hr},Hc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},eh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wR={CUBICSPLINE:void 0,LINEAR:Xo,STEP:Wo},Vc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function RR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Lr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hi})),n.DefaultMaterial}function Ds(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ci(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function CR(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function PR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function LR(n){let e;const t=n.extensions&&n.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+zc(t.attributes):e=n.indices+":"+zc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+zc(n.targets[i]);return e}function zc(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function th(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function IR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const DR=new $e;class NR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new nR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new Qu(this.options.manager):this.textureLoader=new U1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Ds(r,a,s),Ci(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Io.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Hc[s.type],a=Ir[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new pn(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Hc[s.type],c=Ir[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let T=t.cache.get(M);T||(_=new c(a,p*d,s.count*d/u),T=new l1(_,d/u),t.cache.add(M,T)),m=new Hh(T,l,f%d/u,g)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),m=new pn(_,l,g);if(s.sparse!==void 0){const p=Hc.SCALAR,M=Ir[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,N=new M(o[1],T,s.sparse.count*p),I=new c(o[2],S,s.sparse.count*l);a!==null&&(m=new pn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let L=0,U=N.length;L<U;L++){const b=N[L];if(m.setX(b,I[L*l]),l>=2&&m.setY(b,I[L*l+1]),l>=3&&m.setZ(b,I[L*l+2]),l>=4&&m.setW(b,I[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Ep[f.magFilter]||Rn,u.minFilter=Ep[f.minFilter]||Di,u.wrapS=Tp[f.wrapS]||Hr,u.wrapT=Tp[f.wrapT]||Hr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==dn&&u.minFilter!==Rn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new $t(_);m.needsUpdate=!0,f(m)}),t.load(Io.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Ci(h,o),h.userData.mimeType=o.mimeType||IR(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Jg,fi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Zg,fi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Lr}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){const h=s[tt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ke(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],mn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,jt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ui);const u=r.alphaMode||Vc.OPAQUE;if(u===Vc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Vc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==_n&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new rt(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==_n&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==_n){const h=r.emissiveFactor;a.emissive=new Ke().setRGB(h[0],h[1],h[2],mn)}return r.emissiveTexture!==void 0&&o!==_n&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,jt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Ci(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ds(s,h,r),h})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ap(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=LR(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Ap(new ii,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?RR(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const M=c[d];if(m.mode===Nn.TRIANGLES||m.mode===Nn.TRIANGLE_STRIP||m.mode===Nn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new u1(_,M):new Kt(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Nn.TRIANGLE_STRIP?p.geometry=bp(p.geometry,Pg):m.mode===Nn.TRIANGLE_FAN&&(p.geometry=bp(p.geometry,ju));else if(m.mode===Nn.LINES)p=new d1(_,M);else if(m.mode===Nn.LINE_STRIP)p=new zh(_,M);else if(m.mode===Nn.LINE_LOOP)p=new p1(_,M);else if(m.mode===Nn.POINTS)p=new m1(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&PR(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ci(p,r),m.extensions&&Ds(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Ds(s,h[0],r),h[0];const f=new Hs;r.extensions&&Ds(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new hn(jb.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new kh(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ci(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new $e;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Vh(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let M=0,T=f.length;M<T;M++){const S=f[M],N=d[M],I=g[M],L=_[M],U=m[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const b=i._createAnimationTracks(S,N,I,L,U);if(b)for(let x=0;x<b.length;x++)p.push(b[x])}return new b1(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,DR)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Kg:c.length>1?u=new Hs:c.length===1?u=c[0]:u=new Rt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ci(u,r),r.extensions&&Ds(i,u,r),r.matrix!==void 0){const h=new $e;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Hs;i.name&&(r.name=s.createUniqueName(i.name)),Ci(r,i),i.extensions&&Ds(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof fi||f instanceof $t)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];ts[r.path]===ts.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ts[r.path]){case ts.weights:c=Xr;break;case ts.rotation:c=$r;break;case ts.position:case ts.scale:c=jr;break;default:switch(i.itemSize){case 1:c=Xr;break;case 2:case 3:default:c=jr;break}break}const u=s.interpolation!==void 0?wR[s.interpolation]:Xo,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+ts[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=th(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof $r?AR:r_;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function UR(n,e,t){const i=e.attributes,s=new pi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new V(l[0],l[1],l[2]),new V(c[0],c[1],c[2])),a.normalized){const u=th(Ir[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new V,l=new V;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=th(Ir[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new mi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Ap(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=eh[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return it.workingColorSpace!==mn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),Ci(n,e),UR(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?CR(n,e.targets,t):n})}const OR={class:"absolute z-50 top-0 flex justify-between w-full items-center p-8"},FR={id:"items",class:"ml-4 p-8 bg-black text-white border-2 border-white rounded-lg shadow-lg z-20 w-45 h-45"},kR={key:0},BR={key:1},HR={id:"hud",class:"hud absoute text-white font-bold"},VR={key:0,class:"flex gap-2"},zR={key:0,src:HS,alt:"Full Heart",width:"40",height:"40"},GR={key:1,src:VS,alt:"Empty Heart",width:"40",height:"40"},WR={key:1,class:"points text-lg mt-2"},XR={key:0,class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"},$R={class:"bg-white p-6 rounded-lg shadow-lg w-96"},jR={class:"text-2xl font-bold mb-4"},qR={flex:"","flex-col":"","gap-3":""},KR={class:"text-2xl font-bold mb-4"},Gc=2,YR=4,Wc=1.5,ZR=-9.8,JR=6,QR=15,eC=Ft({__name:"Game",setup(n){const e=Th(),t=js(),s=Eh().params.id.toString();let r,o=0;const a=new Map,l=new Map,c=[],u=Qe(void 0);let h,f,d,g=!1,_=Gc;const m=Qe(!1),p=Qe(50),M=Qe(50);let T=Qe(1),S=Qe(2),N=0,I=!1,L=!1,U=!1,b=0;function x(){xe.lock(),xe.isLocked=!0}const C=_t(()=>{var F;const j=sessionStorage.getItem("myName");return(F=t.gameState.gamedata)==null?void 0:F.players.find(ie=>ie.name===j)}),D=_t(()=>{var ie;const j=sessionStorage.getItem("myName")||"";return j&&((ie=t.gameState.gamedata)==null?void 0:ie.characters[j])||null}),w=_t(()=>{var j;return((j=D.value)==null?void 0:j.life)??0});Qt(()=>{var j;return(j=D.value)==null?void 0:j.life},(j,F)=>{j!==F&&console.log(`Life changed from ${F} to ${j}`)});const P=_t(()=>{var j;return((j=D.value)==null?void 0:j.maxLife)??0}),ee=Qe([]),$=_t(()=>t.gameState.gamedata.maxPointsSnackman),Y=_t(()=>{var j;return((j=D.value)==null?void 0:j.currentPoints)??0});Qt(()=>{var j;return(j=D.value)==null?void 0:j.currentPoints},(j,F)=>{j!==F&&console.log(`Points changed from ${F} to ${j}`)});const X=Qe([]);function _e(){const j=new a1,F=new hn(75,window.innerWidth/window.outerWidth,.001,1e3);F.position.set(1,1,2),F.rotation.order="YXZ";const ie=new k1;F.add(ie);const me=new o1;me.setPixelRatio(window.devicePixelRatio),me.setSize(window.innerWidth,window.innerHeight),me.shadowMap.enabled=!0;const Ue=new J1(F,me.domElement);Ue.pointerSpeed=1;const k=new i_;return{scene:j,camera:F,renderer:me,pointerLockControls:Ue,clock:k,listener:ie}}function Ae(j,F){F.domElement.addEventListener("click",ie=>{F.domElement.requestPointerLock()}),j.addEventListener("resize",ie=>{F.setPixelRatio(j.devicePixelRatio),F.setSize(j.innerWidth,j.innerHeight),Xe.aspect=j.innerWidth/j.innerHeight,Xe.updateProjectionMatrix()}),document.addEventListener("pointerlockchange",ie=>{document.pointerLockElement?m.value=!1:m.value=!0}),j.addEventListener("keydown",ie=>{switch(ie.code){case"ShiftLeft":_===Gc?_=YR:_=Gc;break;case"KeyW":h=!0;break;case"KeyA":d=!0;break;case"KeyS":f=!0;break;case"KeyD":g=!0;break;case"Space":t.jumpAllowed&&(I=!0);break}}),j.addEventListener("keyup",ie=>{switch(ie.code){case"KeyW":h=!1;break;case"KeyA":d=!1;break;case"KeyS":f=!1;break;case"KeyD":g=!1;break;case"Space":I=!1;break}})}function Ie(){const j=new O1,F=[],ie=new kc(B),me=new URL("/assets/bg-music-CQGKg28I.mp3",import.meta.url).href;j.load(me,function(re){ie.setBuffer(re),ie.setLoop(!0),ie.setVolume(p.value/100),ie.play()}),F.push(ie);const Ue=new kc(B),k=new URL("/assets/walking-B-GBr6tw.mp3",import.meta.url).href;j.load(k,function(re){Ue.setBuffer(re),Ue.setLoop(!0),Ue.setVolume(M.value/100)}),F.push(Ue);const be=new kc(B),oe=new URL("/assets/hit-DR3qCVkF.mp3",import.meta.url).href;return j.load(oe,function(re){be.setBuffer(re),be.setLoop(!0),be.setVolume(M.value/100)}),F.push(be),F}const{scene:De,camera:Xe,renderer:le,pointerLockControls:xe,clock:Ce,listener:B}=_e();Qt(xe,async(j,F)=>{console.log("CHANGE"),F.isLocked}),Ae(window,le);const[ue,ce,ge]=Ie();Qt(p,j=>ue.setVolume(j/100)),Qt(M,j=>{ce.setVolume(j/100),ge.setVolume(j/100)});const He=Qe(null),Oe=new ml(1,30,30),R=new Lr({color:16776960,metalness:0,roughness:0}),y=new Kt(Oe,R);y.position.y=2,y.position.x=3,y.position.z=-4,De.add(y);const q=new N1(4210752,10);De.add(q);const se=new t_(16777215,1e3,10);se.position.set(10,20,10),De.add(se);function J(){setTimeout(function(){requestAnimationFrame(J)},1e3/60),c.forEach(F=>{F.rotation.y+=.01}),le.render(De,Xe);const j=Ce.getDelta();O(j)}async function Q(){var ie;const j="/api/game",F=((ie=C.value)==null?void 0:ie.name)??"";if(F==="")return console.error("Error: Unable to validate charging jump, player ID is missing"),!1;try{const me=await fetch(`${j}/ingame/${s}/${F}/isValidChargeJump`);if(!me.ok)return console.error("Error: Unable to validate charging jump",me.statusText),!1;const Ue=await me.json();return console.log("Charging jump backend validation:",Ue),Ue}catch(me){return console.error("Error while validating charging jump:",me),!1}}function fe(j){if(I){if(U)return;N+=j;const F=document.getElementById("jumpBarContainer");F!=null&&F.classList.contains("hidden")&&(F==null||F.classList.remove("hidden")),N>=Wc&&(U=!0,Q().then(ie=>{N=0,I=!1,ie&&(b=QR,L=!0,console.log(" Großer Sprung ausgelöst mit Geschwindigkeit:",b)),U=!1}))}else N>0&&N<Wc&&!L&&(N=0,b=JR,L=!0,console.log("Kleiner Sprung ausgelöst mit Geschwindigkeit:",b));E()}function ae(j,F,ie){const me=new V;return h&&!f?g&&!d?me.addScaledVector(j.clone().applyAxisAngle(F,7*Math.PI/4),_*ie):d&&!g?me.addScaledVector(j.clone().applyAxisAngle(F,Math.PI/4),_*ie):me.addScaledVector(j.clone().applyAxisAngle(F,2*Math.PI),_*ie):f&&!h?g&&!d?me.addScaledVector(j.clone().applyAxisAngle(F,5*Math.PI/4),_*ie):d&&!g?me.addScaledVector(j.clone().applyAxisAngle(F,3*Math.PI/4),_*ie):me.addScaledVector(j.clone().applyAxisAngle(F,Math.PI),_*ie):g&&!d?me.addScaledVector(j.clone().applyAxisAngle(F,3*Math.PI/2),_*ie):d&&!g&&me.addScaledVector(j.clone().applyAxisAngle(F,Math.PI/2),_*ie),me}function E(){const j=document.getElementById("jumpBar"),F=Math.min(N/Wc*100,100);if(j&&(j.style.width=`${F}%`),F===0){const ie=document.getElementById("jumpBarContainer");ie!=null&&ie.classList.contains("hidden")||ie==null||ie.classList.add("hidden")}}function v(j,F){L?(b+=ZR*j,F.y+=b*j,F.y<=1&&(F.y=1,b=0,L=!1,N=0)):fe(j)}function O(j){const F=new V;Xe.getWorldDirection(F),F.y=0,F.normalize();const ie=new V(0,1,0);r=Xe.position.clone(),v(j,r);const me=ae(F,ie,j);r.add(me),z(r),Xe.position.copy(r),me.length()>0?ce.isPlaying||ce.play():ce.isPlaying&&ce.pause()}function z(j){const F=Date.now();if(F-o>10){const ie=Xe.rotation.y;Bs(`/topic/ingame/${s}/playerPosition`,{playerName:sessionStorage.getItem("myName"),posX:j.x,posY:j.z,posZ:j.y,angle:ie}),o=F}}function Z(){Xe.position.copy(r)}function K(j){j.traverse(F=>{F instanceof Kt&&(F.geometry&&F.geometry.dispose(),F.material&&(Array.isArray(F.material)?F.material.forEach(ie=>ie.dispose()):F.material.dispose()))}),De.remove(j)}function ve(j){var be,oe;const F=new Bc,ie=Math.PI,me=Array.from(a.keys()).filter(re=>!j.map(Ee=>Ee.playerName).includes(re)),Ue=(be=e.currentTheme)==null?void 0:be.character.snackman,k=(oe=e.currentTheme)==null?void 0:oe.character.ghost;me.forEach(re=>{const Ee=a.get(re);if(Ee){const ye=De.getObjectById(Ee);a.delete(re),ye&&K(ye)}}),j.forEach(async re=>{var Ee;if(!a.has(re.playerName)&&!l.get(re.playerName)){l.set(re.playerName,!0);let ye;const Ge=(Ee=t.gameState.gamedata)==null?void 0:Ee.players;let ot;if(Ge){for(const ht of Ge)if(ht.name==re.playerName){ot=ht;break}}if((ot==null?void 0:ot.playerrole)==sn.SNACKMAN?ye=Ue:ye=k,ye){let ht,et;typeof ye=="string"?(ht=ye,et=.5):(ht=ye.path,et=ye.scale),F.load(ht,Ut=>{const kt=Ut.scene;kt.scale.set(et,et,et),a.set(re.playerName,kt.id),De.add(kt),kt.position.set(re.x,1,re.y),kt.rotation.y=re.angle*Math.PI*2+ie,l.delete(re.playerName)})}else console.error("Kein Modell gefunden für",re.playerName)}else{const ye=a.get(re.playerName);if(ye){const Ge=De.getObjectById(ye);if(Ge){const ot=new pi,ht=new V;ot.getSize(ht),ot.expandByObject(Ge),Ge.position.set(re.x-ht.x/2,re.z,re.y),Ge.rotation.y=re.angle+ie}}}})}function de(j){const F=new Bc;new URL("/assets/chicken-DERX-iI9.gltf",import.meta.url).href,j.forEach(ie=>{F.load("@/assets/game/realistic/chicken/chicken.gltf",me=>{const Ue=me.scene;Ue.position.set(ie.x,1,ie.y),Ue.scale.set(.03,.03,.03),Ue.rotateY(ie.angle),De.add(Ue)})})}const pe=new Map;function We(j){if(pe.has(j))return pe.get(j);const F=new Qu().load(j);return pe.set(j,F),F}function he(j,F){const ie=new ms(1,1,1),me=new ms(1,1,1),Ue=We(F.ground),k=We(F.wall),be=new Lr({map:Ue}),oe=new Lr({map:k}),re=.5,Ee=new Zu(ie,be,j.length*j[0].length),ye=new Zu(me,oe,j.length*j[0].length);let Ge=0,ot=0;const ht=new Map;function et(Ut){return ht.has(Ut)||ht.set(Ut,new Promise((kt,Ss)=>{new Bc().load(Ut,Wi=>kt(Wi.scene),void 0,Wi=>Ss(Wi))})),ht.get(Ut)}j.forEach((Ut,kt)=>{[...Ut].forEach((Ss,Wi)=>{const Pt=kt+re,zt=Wi+re;switch(Ss){case"*":const ta=new $e().makeTranslation(Pt,1,zt);ye.setMatrixAt(ot++,ta);break;case" ":const na=new $e().makeTranslation(Pt,0,zt);Ee.setMatrixAt(Ge++,na);break;case"E":case"D":case"C":case"B":case"A":const Js=new $e().makeTranslation(Pt,0,zt);Ee.setMatrixAt(Ge++,Js);const ia={E:[new URL("/assets/strawberry_shortcake-CRiMLrd4.glb",import.meta.url),new URL("/assets/chocolate_bar-D_tfyEao.glb",import.meta.url)],D:[new URL("/assets/cottoncandy-CsV13UEF.glb",import.meta.url),new URL("/assets/popcorn-CskqXeha.glb",import.meta.url)],C:[new URL("/assets/candycane-CrPeXEn-.glb",import.meta.url),new URL("/assets/chips-6HuXgoW5.glb",import.meta.url)],B:[new URL("/assets/apple-CGoB8D_3.glb",import.meta.url),new URL("/assets/banana-C7BRwFBb.glb",import.meta.url)],A:[new URL("/assets/ginger_fixed-BtxAjIMb.glb",import.meta.url),new URL("/assets/lemon_remake-BvTXj1CQ.glb",import.meta.url)]},Yt=new URL(ia[Ss][Math.random()>.5?0:1],import.meta.url).href;et(Yt).then(ra=>{const bt=ra.clone();Yt.includes("chocolate_bar")?(bt.position.set(Pt,.75,zt),bt.scale.set(.2,.2,.2)):Yt.includes("strawberry_shortcake")?(bt.position.set(Pt,.5,zt),bt.scale.set(.5,.5,.5)):Yt.includes("cotton_candy")?(bt.position.set(Pt,.5,zt),bt.scale.set(.2,.2,.2)):Yt.includes("popcorn")?(bt.position.set(Pt,.5,zt),bt.scale.set(.5,.5,.5)):Yt.includes("candy_cane")?(bt.position.set(Pt,.8,zt),bt.scale.set(.07,.07,.07)):Yt.includes("chips")?(bt.position.set(Pt,.8,zt),bt.scale.set(.1,.1,.1)):Yt.includes("apple")?(bt.position.set(Pt,.75,zt),bt.scale.set(.0015,.0015,.0015)):Yt.includes("banana")?(bt.position.set(Pt,.75,zt),bt.scale.set(.07,.07,.07)):Yt.includes("ginger_fixed")?(bt.position.set(Pt,.75,zt),bt.scale.set(.1,.1,.1),bt.rotateZ(Math.PI/1.5)):Yt.includes("lemon_remake")&&(bt.position.set(Pt,.75,zt),bt.scale.set(.09,.09,.09),bt.rotateZ(Math.PI/1.5)),De.add(bt),c.push(bt)});break;default:const sa=new $e().makeTranslation(Pt,0,zt);Ee.setMatrixAt(Ge++,sa)}})}),localStorage.setItem("gameMap-${lobbyId}",JSON.stringify(j)),Ee.instanceMatrix.needsUpdate=!0,ye.instanceMatrix.needsUpdate=!0,De.add(Ee),De.add(ye)}function we(j,F){const ie=new Qu;if(typeof F=="string")ie.load(F,me=>{const Ue=new ml(500,64,64),k=new _n({map:me,side:Dt}),be=new Kt(Ue,k);j.add(be),console.log("SkySphere erfolgreich hinzugefügt!")},void 0,me=>{console.error("Fehler beim Laden der SkySphere-Textur:",me)});else{const me=[new _n({map:ie.load(F.right),side:Dt}),new _n({map:ie.load(F.left),side:Dt}),new _n({map:ie.load(F.top),side:Dt}),new _n({map:ie.load(F.bottom),side:Dt}),new _n({map:ie.load(F.front),side:Dt}),new _n({map:ie.load(F.back),side:Dt})],Ue=new ms(500,500,500),k=new Kt(Ue,me);k.position.set(0,0,0),j.add(k)}}async function Ne(j){let F=[];j.forEach(ie=>{sessionStorage.getItem("myName")!==ie.name&&F.push({playerName:ie.name,x:ie.posX,y:ie.posY,z:ie.posZ,angle:ie.angleInDegrees})}),ve(F)}return Qt([T,S],([j,F])=>{Xe&&(Xe.position.z=F,Xe.position.x=j)}),Un(async()=>{var F;try{await t.fetchGameStatus();const ie=sessionStorage.getItem("myName");ie&&(console.log(ie),await t.getJumpAllowed(ie,s))}catch(ie){console.error("Error fetching game status:",ie)}const j=t.gameState.gamedata.spawnPoints;console.log("SPAWNS: ",j),t.gameState.gamedata.chickens===null?(X.value=[],console.log("Keine Positionsdaten weil Chicken Array leer")):(X.value=t.gameState.gamedata.chickens,console.log("Chickens-Positionsdaten: "+X.value)),Ws(`/ingame/playerPositions/${s}`,async ie=>{switch(ie.type){case"playerPosition":await Ne(ie.feedback);break}}),Ws(`/ingame/${s}`,async ie=>{switch(ie.type){case"playerMoveValidation":const me=ie.feedback;me.playerName===sessionStorage.getItem("myName")&&(r.set(me.posX,me.posZ,me.posY),Z());break}}),He.value&&He.value.appendChild(le.domElement),u.value=(F=t.gameState.gamedata.playmap)==null?void 0:F.map,u.value&&e.currentTheme?he(u.value,{ground:e.currentTheme.ground,wall:e.currentTheme.wall}):console.error("No map found"),e.currentTheme.skybox?(we(De,e.currentTheme.skybox),console.log("Skybox-Pfade:",e.currentTheme.skybox)):console.error("Keine Skybox-Daten im aktuellen Theme gefunden"),de(X.value),J(),j!==null&&j.forEach(ie=>{sessionStorage.getItem("myName")==ie.playerName&&(T.value=Number(ie.x),S.value=Number(ie.y))})}),Qt(()=>e.selectedTheme,j=>{if(j){console.log(`Theme geändert zu: ${j}`);const F=e.currentTheme;u.value&&F?he(u.value,{ground:F.ground,wall:F.wall}):console.error("Keine Map oder kein aktuelles Theme gefunden"),e.currentTheme.skybox?we(De,e.currentTheme.skybox):console.error("Keine Skybox-Daten im aktuellen Theme gefunden")}}),(j,F)=>{var ie,me;return Me(),Pe(st,null,[H("div",{ref_key:"threeContainer",ref:He,id:"app",class:"gameContainer relative z-20"},null,512),H("div",OR,[H("div",FR,[ee.value.length>0?(Me(),Pe("div",kR,lt(ee.value.join(", ")),1)):(Me(),Pe("div",BR))]),H("div",HR,[((ie=C.value)==null?void 0:ie.playerrole)===Te(sn).SNACKMAN?(Me(),Pe("div",VR,[(Me(!0),Pe(st,null,jn(P.value,Ue=>(Me(),Pe("div",{key:Ue},[Ue<=w.value?(Me(),Pe("img",zR)):(Me(),Pe("img",GR))]))),128))])):gt("",!0),((me=C.value)==null?void 0:me.playerrole)===Te(sn).SNACKMAN?(Me(),Pe("div",WR,[H("p",null,"Points: "+lt(Y.value)+" / "+lt($.value),1)])):gt("",!0)])]),F[14]||(F[14]=H("div",{id:"jumpBarContainer",class:"fixed z-50 bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center w-full max-w-[600px] hidden"},[H("div",{class:"w-full bg-gray-700 rounded-full h-6 overflow-hidden"},[H("div",{id:"jumpBar",class:"bg-red-500 h-full transition-all duration-100 ease-in-out",style:{width:"0%"}})])],-1)),m.value?(Me(),Pe("div",XR,[H("div",$R,[F[4]||(F[4]=H("h3",{class:"text-2xl font-bold mb-4"},"Lautstärke",-1)),F[5]||(F[5]=Wt(" Musik ")),qt(H("input",{type:"range",class:"form-control-range",id:"formControlRange","onUpdate:modelValue":F[0]||(F[0]=Ue=>p.value=Ue)},null,512),[[fn,p.value]]),Wt(" "+lt(p.value)+"% ",1),F[6]||(F[6]=H("br",null,null,-1)),F[7]||(F[7]=Wt(" Effekte ")),qt(H("input",{type:"range",class:"form-control-range",id:"formControlRange","onUpdate:modelValue":F[1]||(F[1]=Ue=>M.value=Ue)},null,512),[[fn,M.value]]),Wt(" "+lt(M.value)+"% ",1),F[8]||(F[8]=H("br",null,null,-1)),H("h2",jR,"Adjust Settings "+lt(m.value),1),H("button",{onClick:x,class:"mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"}," Close ")])])):gt("",!0),Nt(wh,null,{titel:ei(()=>F[9]||(F[9]=[H("h3",{class:"header-modal-adventure"},"Lautstärke",-1)])),content:ei(()=>[H("div",qR,[F[10]||(F[10]=Wt(" Musik ")),qt(H("input",{type:"range",class:"form-control-range",id:"formControlRange","onUpdate:modelValue":F[2]||(F[2]=Ue=>p.value=Ue)},null,512),[[fn,p.value]]),Wt(" "+lt(p.value)+"% ",1),F[11]||(F[11]=H("br",null,null,-1)),F[12]||(F[12]=Wt(" Effekte ")),qt(H("input",{type:"range",class:"form-control-range",id:"formControlRange","onUpdate:modelValue":F[3]||(F[3]=Ue=>M.value=Ue)},null,512),[[fn,M.value]]),Wt(" "+lt(M.value)+"% ",1),F[13]||(F[13]=H("br",null,null,-1)),H("h2",KR,"Adjust Settings "+lt(m.value),1),H("button",{onClick:x,class:"button-small-adventure"}," Close ")])]),_:1})],64)}}}),tC={class:"p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg"},nC={class:"space-y-4"},iC=["min","max"],sC={class:"mt-4"},rC=["min","max"],oC={class:"mx-auto w-max"},aC=["onClick","data-value"],lC={class:"p-6 max-w-lg mx-auto"},cC=Ft({__name:"MapCreator",setup(n){const e=Nl();return Un(async()=>{await e.fetchMaps(),console.log("Aktuelle Maps:",e.mapsDTD.maps)}),Un(async()=>{await e.fetchGridLimits(),console.log("grid min:",e.minGridSize),console.log("grid max:",e.maxGridSize)}),(t,i)=>(Me(),Pe(st,null,[H("div",tC,[i[10]||(i[10]=H("h1",{class:"text-2xl font-semibold mb-4 text-center"},"Map Creator",-1)),H("div",nC,[H("div",null,[i[6]||(i[6]=H("label",{for:"mapName",class:"block text-sm font-medium text-gray-700"},"Gib einen Namen für die Map ein:",-1)),qt(H("input",{id:"mapName",type:"text","onUpdate:modelValue":i[0]||(i[0]=s=>Te(e).mapName=s),placeholder:"Map Name",class:"mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"},null,512),[[fn,Te(e).mapName]])]),H("div",null,[i[9]||(i[9]=H("label",{for:"rows",class:"block text-sm font-medium text-gray-700"},"Definiere die Größe des Spielfelds:",-1)),H("div",null,[i[7]||(i[7]=H("label",{for:"rows",class:"block text-sm font-medium text-gray-700"},"Zeilen:",-1)),qt(H("input",{id:"rows",type:"number","onUpdate:modelValue":i[1]||(i[1]=s=>Te(e).rows=s),placeholder:"Anzahl der Reihen",min:Te(e).minGridSize,max:Te(e).maxGridSize,class:"mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"},null,8,iC),[[fn,Te(e).rows]])]),H("div",sC,[i[8]||(i[8]=H("label",{for:"cols",class:"block text-sm font-medium text-gray-700"},"Spalten:",-1)),qt(H("input",{id:"cols",type:"number","onUpdate:modelValue":i[2]||(i[2]=s=>Te(e).cols=s),placeholder:"Anzahl der Spalten",min:Te(e).minGridSize,max:Te(e).maxGridSize,class:"mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"},null,8,rC),[[fn,Te(e).cols]])])]),H("button",{class:"w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",onClick:i[3]||(i[3]=(...s)=>Te(e).createGrid&&Te(e).createGrid(...s))}," Spielfeld erstellen ")])]),H("div",oC,[Te(e).grid.length>0?(Me(),Pe("div",{key:0,class:"grid-container mt-8 grid gap-0.5",style:Yr({gridTemplateColumns:`repeat(${Te(e).cols}, 50px)`,gridTemplateRows:`repeat(${Te(e).rows}, 50px)`})},[(Me(!0),Pe(st,null,jn(Te(e).grid.flat(),(s,r)=>(Me(),Pe("div",{key:"cell-"+r,class:"grid-cell w-12 h-12 border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-200",onClick:o=>Te(e).updateCell(Math.floor(r/Te(e).cols),r%Te(e).cols),"data-value":s},lt(s),9,aC))),128))],4)):gt("",!0),i[11]||(i[11]=H("br",null,null,-1)),Te(e).grid.length>0?(Me(),Pe("button",{key:1,class:"w-full py-2 mt-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500",onClick:i[4]||(i[4]=(...s)=>Te(e).saveMap&&Te(e).saveMap(...s))}," Create ")):gt("",!0)]),H("div",lC,[H("button",{class:"w-full p-3 font-semibold text-zinc-800 rounded-md bg-red-600 hover:bg-red-400 backdrop-blur-lg shadow-sm",onClick:i[5]||(i[5]=s=>Te(qr).push("/index"))}," Back ")])],64))}}),uC=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},hC=uC(cC,[["__scopeId","data-v-ab52faf1"]]),fC={key:0},dC={key:0,class:"h-screen bg-green-800 flex flex-col items-center justify-center"},pC={class:"text-3xl text-zinc-300 mb-8"},mC={class:"font-bold"},gC={key:1,class:"h-screen bg-red-800 flex flex-col items-center justify-center"},_C={class:"text-3xl text-zinc-300 mb-8"},vC={class:"font-bold"},xC={key:1},yC={key:0,class:"h-screen bg-green-800 flex flex-col items-center justify-center"},SC={class:"text-3xl text-zinc-300 mb-8"},bC={class:"font-bold"},MC={key:1,class:"h-screen bg-red-800 flex flex-col items-center justify-center"},EC={class:"text-3xl text-zinc-300 mb-8"},TC={class:"font-bold"},AC=Ft({__name:"GameEnd",setup(n){const e=Eh(),t=Qe({name:"TestPlayer",email:"test@example.com",password:"testpassword123",playertype:Dl.GUEST,playerrole:sn.SNACKMAN}),i=Qe({snackman:{life:0,nutriscore:100},ghost:{touchcount:0}});function s(){const c=e.params.id;c?qr.push({name:"lobbyWithId",params:{id:c}}):console.error("Lobby ID not found")}const r=_t(()=>i.value.snackman.life>0||i.value.snackman.nutriscore>=100),o=_t(()=>i.value.snackman.life<=0&&i.value.snackman.nutriscore<100),a=_t(()=>o.value),l=_t(()=>r.value);return(c,u)=>(Me(),Pe(st,null,[t.value.playerrole===Te(sn).GHOST?(Me(),Pe("div",fC,[a.value?(Me(),Pe("div",dC,[u[1]||(u[1]=H("h1",{class:"text-4xl font-bold text-white mb-6"},"Victory!",-1)),u[2]||(u[2]=H("p",{class:"text-3xl text-zinc-300 mb-4"}," As the Ghost, you won! The Snackman has no lives left. ",-1)),H("p",pC,[u[0]||(u[0]=Wt(" Touchcount: ")),H("span",mC,lt(i.value.ghost.touchcount),1)]),H("button",{class:"bg-yellow-500 text-zinc-900 px-6 py-3 rounded-lg hover:bg-yellow-600 transition",onClick:s}," Back to lobby ")])):gt("",!0),l.value?(Me(),Pe("div",gC,[u[4]||(u[4]=H("h1",{class:"text-4xl font-bold text-white mb-6"},"Defeat!",-1)),u[5]||(u[5]=H("p",{class:"text-3xl text-zinc-300 mb-4"}," As the Ghost, you lost! ",-1)),H("p",_C,[u[3]||(u[3]=Wt(" Touchcount: ")),H("span",vC,lt(i.value.ghost.touchcount),1)]),H("button",{class:"bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition",onClick:s}," Back to lobby ")])):gt("",!0)])):gt("",!0),t.value.playerrole===Te(sn).SNACKMAN?(Me(),Pe("div",xC,[r.value?(Me(),Pe("div",yC,[u[7]||(u[7]=H("h1",{class:"text-4xl font-bold text-white mb-6"},"Victory!",-1)),u[8]||(u[8]=H("p",{class:"text-3xl text-zinc-300 mb-4"}," As the Snackman, you won! ",-1)),H("p",SC,[u[6]||(u[6]=Wt(" Nutriscore: ")),H("span",bC,lt(i.value.snackman.nutriscore),1)]),H("button",{class:"bg-yellow-500 text-zinc-900 px-6 py-3 rounded-lg hover:bg-yellow-600 transition",onClick:s}," Back to lobby ")])):gt("",!0),o.value?(Me(),Pe("div",MC,[u[10]||(u[10]=H("h1",{class:"text-4xl font-bold text-white mb-6"},"Defeat!",-1)),u[11]||(u[11]=H("p",{class:"text-3xl text-zinc-300 mb-4"}," As the Snackman, you lost! Your lives have dropped to 0. ",-1)),H("p",EC,[u[9]||(u[9]=Wt(" Nutriscore: ")),H("span",TC,lt(i.value.snackman.nutriscore),1)]),H("button",{class:"bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition",onClick:s}," Back to lobby ")])):gt("",!0)])):gt("",!0)],64))}}),wC={key:0},RC={key:1},CC=Ft({__name:"TestView",setup(n){const e=Nl(),{mapsDTD:t}=by(e);return Un(async()=>{console.log("Selected Map at Mount:",e.mapsDTD.selectedMap),e.mapsDTD.selectedMap?(await e.fetchMaps(),console.log("Map Data Fetched:",t.value)):console.error("No selected map.")}),(i,s)=>{var r;return Me(),Pe("div",null,[H("h1",null,"Selected Map: "+lt(Te(e).mapsDTD.selectedMap),1),Te(e).mapsDTD.maps.length>0?(Me(),Pe("div",wC,[s[0]||(s[0]=H("p",null,"Map Data:",-1)),H("ul",null,[(Me(!0),Pe(st,null,jn((r=Te(t).selectedMap)==null?void 0:r.map,(o,a)=>(Me(),Pe("li",{key:a},[(Me(!0),Pe(st,null,jn(o,(l,c)=>(Me(),Pe("div",{key:c},lt(l),1))),128))]))),128))])])):(Me(),Pe("p",RC,"No map data available"))])}}}),qr=hy({history:Vx("/"),routes:[{path:"/",redirect:"/index"},{path:"/index",name:"index",component:Vy},{path:"/lobby/:id",name:"lobbyWithId",component:BS},{path:"/lobby",name:"lobbyList",component:eS},{path:"/lobby/:id/ingame",name:"game",component:eC},{path:"/createmap",name:"createmap",component:hC},{path:"/:id/GameEnd",name:"GameEnd",component:AC},{path:"/test-view",name:"test-view",component:CC}]});var PC=Object.defineProperty,wp=Object.getOwnPropertySymbols,LC=Object.prototype.hasOwnProperty,IC=Object.prototype.propertyIsEnumerable,Rp=(n,e,t)=>e in n?PC(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,o_=(n,e)=>{for(var t in e||(e={}))LC.call(e,t)&&Rp(n,t,e[t]);if(wp)for(var t of wp(e))IC.call(e,t)&&Rp(n,t,e[t]);return n},Vl=n=>typeof n=="function",zl=n=>typeof n=="string",a_=n=>zl(n)&&n.trim().length>0,DC=n=>typeof n=="number",Vs=n=>typeof n>"u",jo=n=>typeof n=="object"&&n!==null,NC=n=>di(n,"tag")&&a_(n.tag),l_=n=>window.TouchEvent&&n instanceof TouchEvent,c_=n=>di(n,"component")&&u_(n.component),UC=n=>Vl(n)||jo(n),u_=n=>!Vs(n)&&(zl(n)||UC(n)||c_(n)),Cp=n=>jo(n)&&["height","width","right","left","top","bottom"].every(e=>DC(n[e])),di=(n,e)=>(jo(n)||Vl(n))&&e in n,OC=(n=>()=>n++)(0);function Xc(n){return l_(n)?n.targetTouches[0].clientX:n.clientX}function Pp(n){return l_(n)?n.targetTouches[0].clientY:n.clientY}var FC=n=>{Vs(n.remove)?n.parentNode&&n.parentNode.removeChild(n):n.remove()},ea=n=>c_(n)?ea(n.component):NC(n)?Ft({render(){return n}}):typeof n=="string"?n:nt(Te(n)),kC=n=>{if(typeof n=="string")return n;const e=di(n,"props")&&jo(n.props)?n.props:{},t=di(n,"listeners")&&jo(n.listeners)?n.listeners:{};return{component:ea(n),props:e,listeners:t}},BC=()=>typeof window<"u",jh=class{constructor(){this.allHandlers={}}getHandlers(n){return this.allHandlers[n]||[]}on(n,e){const t=this.getHandlers(n);t.push(e),this.allHandlers[n]=t}off(n,e){const t=this.getHandlers(n);t.splice(t.indexOf(e)>>>0,1)}emit(n,e){this.getHandlers(n).forEach(i=>i(e))}},HC=n=>["on","off","emit"].every(e=>di(n,e)&&Vl(n[e])),Mn;(function(n){n.SUCCESS="success",n.ERROR="error",n.WARNING="warning",n.INFO="info",n.DEFAULT="default"})(Mn||(Mn={}));var gl;(function(n){n.TOP_LEFT="top-left",n.TOP_CENTER="top-center",n.TOP_RIGHT="top-right",n.BOTTOM_LEFT="bottom-left",n.BOTTOM_CENTER="bottom-center",n.BOTTOM_RIGHT="bottom-right"})(gl||(gl={}));var En;(function(n){n.ADD="add",n.DISMISS="dismiss",n.UPDATE="update",n.CLEAR="clear",n.UPDATE_DEFAULTS="update_defaults"})(En||(En={}));var Kn="Vue-Toastification",Wn={type:{type:String,default:Mn.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},h_={type:Wn.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},Qa={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:Wn.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},nh={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},f_={transition:{type:[Object,String],default:`${Kn}__bounce`}},VC={position:{type:String,default:gl.TOP_RIGHT},draggable:Wn.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:Wn.trueBoolean,pauseOnHover:Wn.trueBoolean,closeOnClick:Wn.trueBoolean,timeout:nh.timeout,hideProgressBar:nh.hideProgressBar,toastClassName:Wn.classNames,bodyClassName:Wn.classNames,icon:h_.customIcon,closeButton:Qa.component,closeButtonClassName:Qa.classNames,showCloseButtonOnHover:Qa.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new jh}},zC={id:{type:[String,Number],required:!0,default:0},type:Wn.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},GC={container:{type:[Object,Function],default:()=>document.body},newestOnTop:Wn.trueBoolean,maxToasts:{type:Number,default:20},transition:f_.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:n=>n},filterToasts:{type:Function,default:n=>n},containerClassName:Wn.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},ki={CORE_TOAST:VC,TOAST:zC,CONTAINER:GC,PROGRESS_BAR:nh,ICON:h_,TRANSITION:f_,CLOSE_BUTTON:Qa},d_=Ft({name:"VtProgressBar",props:ki.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${Kn}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function WC(n,e){return Me(),Pe("div",{style:Yr(n.style),class:Tn(n.cpClass)},null,6)}d_.render=WC;var XC=d_,p_=Ft({name:"VtCloseButton",props:ki.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?ea(this.component):"button"},classes(){const n=[`${Kn}__close-button`];return this.showOnHover&&n.push("show-on-hover"),n.concat(this.classNames)}}}),$C=Wt(" × ");function jC(n,e){return Me(),wn(gh(n.buttonComponent),wl({"aria-label":n.ariaLabel,class:n.classes},n.$attrs),{default:ei(()=>[$C]),_:1},16,["aria-label","class"])}p_.render=jC;var qC=p_,m_={},KC={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},YC=H("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),ZC=[YC];function JC(n,e){return Me(),Pe("svg",KC,ZC)}m_.render=JC;var QC=m_,g_={},eP={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},tP=H("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),nP=[tP];function iP(n,e){return Me(),Pe("svg",eP,nP)}g_.render=iP;var Lp=g_,__={},sP={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},rP=H("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),oP=[rP];function aP(n,e){return Me(),Pe("svg",sP,oP)}__.render=aP;var lP=__,v_={},cP={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},uP=H("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),hP=[uP];function fP(n,e){return Me(),Pe("svg",cP,hP)}v_.render=fP;var dP=v_,x_=Ft({name:"VtIcon",props:ki.ICON,computed:{customIconChildren(){return di(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return zl(this.customIcon)?this.trimValue(this.customIcon):di(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return di(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:u_(this.customIcon)?ea(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Mn.DEFAULT]:Lp,[Mn.INFO]:Lp,[Mn.SUCCESS]:QC,[Mn.ERROR]:dP,[Mn.WARNING]:lP}[this.type]},iconClasses(){const n=[`${Kn}__icon`];return this.hasCustomIcon?n.concat(this.customIconClass):n}},methods:{trimValue(n,e=""){return a_(n)?n.trim():e}}});function pP(n,e){return Me(),wn(gh(n.component),{class:Tn(n.iconClasses)},{default:ei(()=>[Wt(lt(n.customIconChildren),1)]),_:1},8,["class"])}x_.render=pP;var mP=x_,y_=Ft({name:"VtToast",components:{ProgressBar:XC,CloseButton:qC,Icon:mP},inheritAttrs:!1,props:Object.assign({},ki.CORE_TOAST,ki.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const n=[`${Kn}__toast`,`${Kn}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&n.push("disable-transition"),this.rtl&&n.push(`${Kn}__toast--rtl`),n},bodyClasses(){return[`${Kn}__toast-${zl(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return Cp(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:di,getVueComponentFromObj:ea,closeToast(){this.eventBus.emit(En.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const n=this.$el;n.addEventListener("touchstart",this.onDragStart,{passive:!0}),n.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const n=this.$el;n.removeEventListener("touchstart",this.onDragStart),n.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(n){this.beingDragged=!0,this.dragPos={x:Xc(n),y:Pp(n)},this.dragStart=Xc(n),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(n){this.beingDragged&&(n.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:Xc(n),y:Pp(n)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,Cp(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),gP=["role"];function _P(n,e){const t=Eo("Icon"),i=Eo("CloseButton"),s=Eo("ProgressBar");return Me(),Pe("div",{class:Tn(n.classes),style:Yr(n.draggableStyle),onClick:e[0]||(e[0]=(...r)=>n.clickHandler&&n.clickHandler(...r)),onMouseenter:e[1]||(e[1]=(...r)=>n.hoverPause&&n.hoverPause(...r)),onMouseleave:e[2]||(e[2]=(...r)=>n.hoverPlay&&n.hoverPlay(...r))},[n.icon?(Me(),wn(t,{key:0,"custom-icon":n.icon,type:n.type},null,8,["custom-icon","type"])):gt("v-if",!0),H("div",{role:n.accessibility.toastRole||"alert",class:Tn(n.bodyClasses)},[typeof n.content=="string"?(Me(),Pe(st,{key:0},[Wt(lt(n.content),1)],2112)):(Me(),wn(gh(n.getVueComponentFromObj(n.content)),wl({key:1,"toast-id":n.id},n.hasProp(n.content,"props")?n.content.props:{},N0(n.hasProp(n.content,"listeners")?n.content.listeners:{}),{onCloseToast:n.closeToast}),null,16,["toast-id","onCloseToast"]))],10,gP),n.closeButton?(Me(),wn(i,{key:1,component:n.closeButton,"class-names":n.closeButtonClassName,"show-on-hover":n.showCloseButtonOnHover,"aria-label":n.accessibility.closeButtonLabel,onClick:ox(n.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):gt("v-if",!0),n.timeout?(Me(),wn(s,{key:2,"is-running":n.isRunning,"hide-progress-bar":n.hideProgressBar,timeout:n.timeout,onCloseToast:n.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):gt("v-if",!0)],38)}y_.render=_P;var vP=y_,S_=Ft({name:"VtTransition",props:ki.TRANSITION,emits:["leave"],methods:{hasProp:di,leave(n){n instanceof HTMLElement&&(n.style.left=n.offsetLeft+"px",n.style.top=n.offsetTop+"px",n.style.width=getComputedStyle(n).width,n.style.position="absolute")}}});function xP(n,e){return Me(),wn(Yv,{tag:"div","enter-active-class":n.transition.enter?n.transition.enter:`${n.transition}-enter-active`,"move-class":n.transition.move?n.transition.move:`${n.transition}-move`,"leave-active-class":n.transition.leave?n.transition.leave:`${n.transition}-leave-active`,onLeave:n.leave},{default:ei(()=>[Zc(n.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}S_.render=xP;var yP=S_,b_=Ft({name:"VueToastification",devtools:{hide:!0},components:{Toast:vP,VtTransition:yP},props:Object.assign({},ki.CORE_TOAST,ki.CONTAINER,ki.TRANSITION),data(){return{count:0,positions:Object.values(gl),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const n=this.eventBus;n.on(En.ADD,this.addToast),n.on(En.CLEAR,this.clearToasts),n.on(En.DISMISS,this.dismissToast),n.on(En.UPDATE,this.updateToast),n.on(En.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(n){Vl(n)&&(n=await n()),FC(this.$el),n.appendChild(this.$el)},setToast(n){Vs(n.id)||(this.toasts[n.id]=n)},addToast(n){n.content=kC(n.content);const e=Object.assign({},this.defaults,n.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[n.type],n),t=this.defaults.filterBeforeCreate(e,this.toastArray);t&&this.setToast(t)},dismissToast(n){const e=this.toasts[n];!Vs(e)&&!Vs(e.onClose)&&e.onClose(),delete this.toasts[n]},clearToasts(){Object.keys(this.toasts).forEach(n=>{this.dismissToast(n)})},getPositionToasts(n){const e=this.filteredToasts.filter(t=>t.position===n).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(n){Vs(n.container)||this.setup(n.container),this.defaults=Object.assign({},this.defaults,n)},updateToast({id:n,options:e,create:t}){this.toasts[n]?(e.timeout&&e.timeout===this.toasts[n].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[n],e))):t&&this.addToast(Object.assign({},{id:n},e))},getClasses(n){return[`${Kn}__container`,n].concat(this.defaults.containerClassName)}}});function SP(n,e){const t=Eo("Toast"),i=Eo("VtTransition");return Me(),Pe("div",null,[(Me(!0),Pe(st,null,jn(n.positions,s=>(Me(),Pe("div",{key:s},[Nt(i,{transition:n.defaults.transition,class:Tn(n.getClasses(s))},{default:ei(()=>[(Me(!0),Pe(st,null,jn(n.getPositionToasts(s),r=>(Me(),wn(t,wl({key:r.id},r),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}b_.render=SP;var bP=b_,Ip=(n={},e=!0)=>{const t=n.eventBus=n.eventBus||new jh;e&&Zr(()=>{const r=Qm(bP,o_({},n)),o=r.mount(document.createElement("div")),a=n.onMounted;if(Vs(a)||a(o,r),n.shareAppContext){const l=n.shareAppContext;l===!0?console.warn(`[${Kn}] App to share context with was not provided.`):(r._context.components=l._context.components,r._context.directives=l._context.directives,r._context.mixins=l._context.mixins,r._context.provides=l._context.provides,r.config.globalProperties=l.config.globalProperties)}});const i=(r,o)=>{const a=Object.assign({},{id:OC(),type:Mn.DEFAULT},o,{content:r});return t.emit(En.ADD,a),a.id};i.clear=()=>t.emit(En.CLEAR,void 0),i.updateDefaults=r=>{t.emit(En.UPDATE_DEFAULTS,r)},i.dismiss=r=>{t.emit(En.DISMISS,r)};function s(r,{content:o,options:a},l=!1){const c=Object.assign({},a,{content:o});t.emit(En.UPDATE,{id:r,options:c,create:l})}return i.update=s,i.success=(r,o)=>i(r,Object.assign({},o,{type:Mn.SUCCESS})),i.info=(r,o)=>i(r,Object.assign({},o,{type:Mn.INFO})),i.error=(r,o)=>i(r,Object.assign({},o,{type:Mn.ERROR})),i.warning=(r,o)=>i(r,Object.assign({},o,{type:Mn.WARNING})),i},MP=()=>{const n=()=>console.warn(`[${Kn}] This plugin does not support SSR!`);return new Proxy(n,{get(){return n}})};function EP(n){return BC()?HC(n)?Ip({eventBus:n},!1):Ip(n,!0):MP()}var TP=Symbol("VueToastification"),AP=new jh,wP=(n,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=n);const t=EP(o_({eventBus:AP},e));n.provide(TP,t)},RP=wP;const CP=gy(),Gl=Qm(dy);Gl.use(CP);Gl.use(qr);Gl.use(RP);Gl.mount("#app");
