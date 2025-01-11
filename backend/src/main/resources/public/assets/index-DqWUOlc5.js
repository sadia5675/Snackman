(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const at={},_r=[],ri=()=>{},E_=()=>!1,al=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),$u=n=>n.startsWith("onUpdate:"),Rt=Object.assign,ju=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},T_=Object.prototype.hasOwnProperty,ht=(n,e)=>T_.call(n,e),ke=Array.isArray,vr=n=>zo(n)==="[object Map]",Vr=n=>zo(n)==="[object Set]",Xh=n=>zo(n)==="[object Date]",Xe=n=>typeof n=="function",Ct=n=>typeof n=="string",$n=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",Pp=n=>(vt(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),Lp=Object.prototype.toString,zo=n=>Lp.call(n),A_=n=>zo(n).slice(8,-1),Ip=n=>zo(n)==="[object Object]",qu=n=>Ct(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,po=Xu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ll=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},w_=/-(\w)/g,Mn=ll(n=>n.replace(w_,(e,t)=>t?t.toUpperCase():"")),R_=/\B([A-Z])/g,hs=ll(n=>n.replace(R_,"-$1").toLowerCase()),cl=ll(n=>n.charAt(0).toUpperCase()+n.slice(1)),La=ll(n=>n?`on${cl(n)}`:""),un=(n,e)=>!Object.is(n,e),Ia=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Dp=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Wa=n=>{const e=parseFloat(n);return isNaN(e)?n:e},C_=n=>{const e=Ct(n)?Number(n):NaN;return isNaN(e)?n:e};let $h;const ul=()=>$h||($h=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zr(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ct(i)?D_(i):zr(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ct(n)||vt(n))return n}const P_=/;(?![^(]*\))/g,L_=/:([^]+)/,I_=/\/\*[^]*?\*\//g;function D_(n){const e={};return n.replace(I_,"").split(P_).forEach(t=>{if(t){const i=t.split(L_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Pn(n){let e="";if(Ct(n))e=n;else if(ke(n))for(let t=0;t<n.length;t++){const i=Pn(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const N_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",U_=Xu(N_);function Np(n){return!!n||n===""}function O_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Go(n[i],e[i]);return t}function Go(n,e){if(n===e)return!0;let t=Xh(n),i=Xh(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=$n(n),i=$n(e),t||i)return n===e;if(t=ke(n),i=ke(e),t||i)return t&&i?O_(n,e):!1;if(t=vt(n),i=vt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Go(n[o],e[o]))return!1}}return String(n)===String(e)}function Ku(n,e){return n.findIndex(t=>Go(t,e))}const Up=n=>!!(n&&n.__v_isRef===!0),gt=n=>Ct(n)?n:n==null?"":ke(n)||vt(n)&&(n.toString===Lp||!Xe(n.toString))?Up(n)?gt(n.value):JSON.stringify(n,Op,2):String(n),Op=(n,e)=>Up(e)?Op(n,e.value):vr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Dl(i,r)+" =>"]=s,t),{})}:Vr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Dl(t))}:$n(e)?Dl(e):vt(e)&&!ke(e)&&!Ip(e)?String(e):e,Dl=(n,e="")=>{var t;return $n(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jt;class Fp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Jt,!e&&Jt&&(this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Jt;try{return Jt=this,e()}finally{Jt=t}}}on(){Jt=this}off(){Jt=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Bp(n){return new Fp(n)}function kp(){return Jt}function F_(n,e=!1){Jt&&Jt.cleanups.push(n)}let Mt;const Nl=new WeakSet;class Hp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Jt&&Jt.active&&Jt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Nl.has(this)&&(Nl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,jh(this),Gp(this);const e=Mt,t=Wn;Mt=this,Wn=!0;try{return this.fn()}finally{Wp(this),Mt=e,Wn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ju(e);this.deps=this.depsTail=void 0,jh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Nl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Uc(this)&&this.run()}get dirty(){return Uc(this)}}let Vp=0,mo,go;function zp(n,e=!1){if(n.flags|=8,e){n.next=go,go=n;return}n.next=mo,mo=n}function Yu(){Vp++}function Zu(){if(--Vp>0)return;if(go){let e=go;for(go=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;mo;){let e=mo;for(mo=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Gp(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wp(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Ju(i),B_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Uc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Xp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===wo))return;n.globalVersion=wo;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Uc(n)){n.flags&=-3;return}const t=Mt,i=Wn;Mt=n,Wn=!0;try{Gp(n);const s=n.fn(n._value);(e.version===0||un(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Mt=t,Wn=i,Wp(n),n.flags&=-3}}function Ju(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Ju(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function B_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Wn=!0;const $p=[];function fs(){$p.push(Wn),Wn=!1}function ds(){const n=$p.pop();Wn=n===void 0?!0:n}function jh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Mt;Mt=void 0;try{e()}finally{Mt=t}}}let wo=0;class k_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Mt||!Wn||Mt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Mt)t=this.activeLink=new k_(Mt,this),Mt.deps?(t.prevDep=Mt.depsTail,Mt.depsTail.nextDep=t,Mt.depsTail=t):Mt.deps=Mt.depsTail=t,jp(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Mt.depsTail,t.nextDep=void 0,Mt.depsTail.nextDep=t,Mt.depsTail=t,Mt.deps===t&&(Mt.deps=i)}return t}trigger(e){this.version++,wo++,this.notify(e)}notify(e){Yu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Zu()}}}function jp(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)jp(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Xa=new WeakMap,Os=Symbol(""),Oc=Symbol(""),Ro=Symbol("");function $t(n,e,t){if(Wn&&Mt){let i=Xa.get(n);i||Xa.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new hl),s.map=i,s.key=t),s.track()}}function Ai(n,e,t,i,s,r){const o=Xa.get(n);if(!o){wo++;return}const a=l=>{l&&l.trigger()};if(Yu(),e==="clear")o.forEach(a);else{const l=ke(n),c=l&&qu(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Ro||!$n(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Ro)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Os)),vr(n)&&a(o.get(Oc)));break;case"delete":l||(a(o.get(Os)),vr(n)&&a(o.get(Oc)));break;case"set":vr(n)&&a(o.get(Os));break}}Zu()}function H_(n,e){const t=Xa.get(n);return t&&t.get(e)}function js(n){const e=tt(n);return e===n?e:($t(e,"iterate",Ro),Ln(n)?e:e.map(jt))}function fl(n){return $t(n=tt(n),"iterate",Ro),n}const V_={__proto__:null,[Symbol.iterator](){return Ul(this,Symbol.iterator,jt)},concat(...n){return js(this).concat(...n.map(e=>ke(e)?js(e):e))},entries(){return Ul(this,"entries",n=>(n[1]=jt(n[1]),n))},every(n,e){return mi(this,"every",n,e,void 0,arguments)},filter(n,e){return mi(this,"filter",n,e,t=>t.map(jt),arguments)},find(n,e){return mi(this,"find",n,e,jt,arguments)},findIndex(n,e){return mi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return mi(this,"findLast",n,e,jt,arguments)},findLastIndex(n,e){return mi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return mi(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ol(this,"includes",n)},indexOf(...n){return Ol(this,"indexOf",n)},join(n){return js(this).join(n)},lastIndexOf(...n){return Ol(this,"lastIndexOf",n)},map(n,e){return mi(this,"map",n,e,void 0,arguments)},pop(){return Kr(this,"pop")},push(...n){return Kr(this,"push",n)},reduce(n,...e){return qh(this,"reduce",n,e)},reduceRight(n,...e){return qh(this,"reduceRight",n,e)},shift(){return Kr(this,"shift")},some(n,e){return mi(this,"some",n,e,void 0,arguments)},splice(...n){return Kr(this,"splice",n)},toReversed(){return js(this).toReversed()},toSorted(n){return js(this).toSorted(n)},toSpliced(...n){return js(this).toSpliced(...n)},unshift(...n){return Kr(this,"unshift",n)},values(){return Ul(this,"values",jt)}};function Ul(n,e,t){const i=fl(n),s=i[e]();return i!==n&&!Ln(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const z_=Array.prototype;function mi(n,e,t,i,s,r){const o=fl(n),a=o!==n&&!Ln(n),l=o[e];if(l!==z_[e]){const h=l.apply(n,r);return a?jt(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,jt(h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function qh(n,e,t,i){const s=fl(n);let r=t;return s!==n&&(Ln(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,jt(a),l,n)}),s[e](r,...i)}function Ol(n,e,t){const i=tt(n);$t(i,"iterate",Ro);const s=i[e](...t);return(s===-1||s===!1)&&th(t[0])?(t[0]=tt(t[0]),i[e](...t)):s}function Kr(n,e,t=[]){fs(),Yu();const i=tt(n)[e].apply(n,t);return Zu(),ds(),i}const G_=Xu("__proto__,__v_isRef,__isVue"),qp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter($n));function W_(n){$n(n)||(n=String(n));const e=tt(this);return $t(e,"has",n),e.hasOwnProperty(n)}class Kp{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?ev:Qp:r?Jp:Zp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ke(e);if(!s){let l;if(o&&(l=V_[t]))return l;if(t==="hasOwnProperty")return W_}const a=Reflect.get(e,t,wt(e)?e:i);return($n(t)?qp.has(t):G_(t))||(s||$t(e,"get",t),r)?a:wt(a)?o&&qu(t)?a:a.value:vt(a)?s?tm(a):ps(a):a}}class Yp extends Kp{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=Bs(r);if(!Ln(i)&&!Bs(i)&&(r=tt(r),i=tt(i)),!ke(e)&&wt(r)&&!wt(i))return l?!1:(r.value=i,!0)}const o=ke(e)&&qu(t)?Number(t)<e.length:ht(e,t),a=Reflect.set(e,t,i,wt(e)?e:s);return e===tt(s)&&(o?un(i,r)&&Ai(e,"set",t,i):Ai(e,"add",t,i)),a}deleteProperty(e,t){const i=ht(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Ai(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!$n(t)||!qp.has(t))&&$t(e,"has",t),i}ownKeys(e){return $t(e,"iterate",ke(e)?"length":Os),Reflect.ownKeys(e)}}class X_ extends Kp{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const $_=new Yp,j_=new X_,q_=new Yp(!0);const Fc=n=>n,Zo=n=>Reflect.getPrototypeOf(n);function K_(n,e,t){return function(...i){const s=this.__v_raw,r=tt(s),o=vr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Fc:e?Bc:jt;return!e&&$t(r,"iterate",l?Oc:Os),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Jo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Y_(n,e){const t={get(s){const r=this.__v_raw,o=tt(r),a=tt(s);n||(un(s,a)&&$t(o,"get",s),$t(o,"get",a));const{has:l}=Zo(o),c=e?Fc:n?Bc:jt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&$t(tt(s),"iterate",Os),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=tt(r),a=tt(s);return n||(un(s,a)&&$t(o,"has",s),$t(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=tt(a),c=e?Fc:n?Bc:jt;return!n&&$t(l,"iterate",Os),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Rt(t,n?{add:Jo("add"),set:Jo("set"),delete:Jo("delete"),clear:Jo("clear")}:{add(s){!e&&!Ln(s)&&!Bs(s)&&(s=tt(s));const r=tt(this);return Zo(r).has.call(r,s)||(r.add(s),Ai(r,"add",s,s)),this},set(s,r){!e&&!Ln(r)&&!Bs(r)&&(r=tt(r));const o=tt(this),{has:a,get:l}=Zo(o);let c=a.call(o,s);c||(s=tt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?un(r,u)&&Ai(o,"set",s,r):Ai(o,"add",s,r),this},delete(s){const r=tt(this),{has:o,get:a}=Zo(r);let l=o.call(r,s);l||(s=tt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ai(r,"delete",s,void 0),c},clear(){const s=tt(this),r=s.size!==0,o=s.clear();return r&&Ai(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=K_(s,n,e)}),t}function Qu(n,e){const t=Y_(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ht(t,s)&&s in i?t:i,s,r)}const Z_={get:Qu(!1,!1)},J_={get:Qu(!1,!0)},Q_={get:Qu(!0,!1)};const Zp=new WeakMap,Jp=new WeakMap,Qp=new WeakMap,ev=new WeakMap;function tv(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nv(n){return n.__v_skip||!Object.isExtensible(n)?0:tv(A_(n))}function ps(n){return Bs(n)?n:eh(n,!1,$_,Z_,Zp)}function em(n){return eh(n,!1,q_,J_,Jp)}function tm(n){return eh(n,!0,j_,Q_,Qp)}function eh(n,e,t,i,s){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=nv(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Li(n){return Bs(n)?Li(n.__v_raw):!!(n&&n.__v_isReactive)}function Bs(n){return!!(n&&n.__v_isReadonly)}function Ln(n){return!!(n&&n.__v_isShallow)}function th(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function nh(n){return!ht(n,"__v_skip")&&Object.isExtensible(n)&&Dp(n,"__v_skip",!0),n}const jt=n=>vt(n)?ps(n):n,Bc=n=>vt(n)?tm(n):n;function wt(n){return n?n.__v_isRef===!0:!1}function ot(n){return nm(n,!1)}function iv(n){return nm(n,!0)}function nm(n,e){return wt(n)?n:new sv(n,e)}class sv{constructor(e,t){this.dep=new hl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:jt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Ln(e)||Bs(e);e=i?e:tt(e),un(e,t)&&(this._rawValue=e,this._value=i?e:jt(e),this.dep.trigger())}}function Te(n){return wt(n)?n.value:n}const rv={get:(n,e,t)=>e==="__v_raw"?n:Te(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return wt(s)&&!wt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function im(n){return Li(n)?n:new Proxy(n,rv)}class ov{constructor(e){this.__v_isRef=!0,this._value=void 0;const t=this.dep=new hl,{get:i,set:s}=e(t.track.bind(t),t.trigger.bind(t));this._get=i,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function av(n){return new ov(n)}function lv(n){const e=ke(n)?new Array(n.length):{};for(const t in n)e[t]=sm(n,t);return e}class cv{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return H_(tt(this._object),this._key)}}class uv{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function hv(n,e,t){return wt(n)?n:Xe(n)?new uv(n):vt(n)&&arguments.length>1?sm(n,e,t):ot(n)}function sm(n,e,t){const i=n[e];return wt(i)?i:new cv(n,e,t)}class fv{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new hl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Mt!==this)return zp(this,!0),!0}get value(){const e=this.dep.track();return Xp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function dv(n,e,t=!1){let i,s;return Xe(n)?i=n:(i=n.get,s=n.set),new fv(i,s,t)}const Qo={},$a=new WeakMap;let Rs;function pv(n,e=!1,t=Rs){if(t){let i=$a.get(t);i||$a.set(t,i=[]),i.push(n)}}function mv(n,e,t=at){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=M=>s?M:Ln(M)||s===!1||s===0?wi(M,1):wi(M);let u,h,f,d,g=!1,_=!1;if(wt(n)?(h=()=>n.value,g=Ln(n)):Li(n)?(h=()=>c(n),g=!0):ke(n)?(_=!0,g=n.some(M=>Li(M)||Ln(M)),h=()=>n.map(M=>{if(wt(M))return M.value;if(Li(M))return c(M);if(Xe(M))return l?l(M,2):M()})):Xe(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){fs();try{f()}finally{ds()}}const M=Rs;Rs=u;try{return l?l(n,3,[d]):n(d)}finally{Rs=M}}:h=ri,e&&s){const M=h,O=s===!0?1/0:s;h=()=>wi(M(),O)}const m=kp(),p=()=>{u.stop(),m&&m.active&&ju(m.effects,u)};if(r&&e){const M=e;e=(...O)=>{M(...O),p()}}let T=_?new Array(n.length).fill(Qo):Qo;const E=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const O=u.run();if(s||g||(_?O.some((D,I)=>un(D,T[I])):un(O,T))){f&&f();const D=Rs;Rs=u;try{const I=[O,T===Qo?void 0:_&&T[0]===Qo?[]:T,d];l?l(e,3,I):e(...I),T=O}finally{Rs=D}}}else u.run()};return a&&a(E),u=new Hp(h),u.scheduler=o?()=>o(E,!1):E,d=M=>pv(M,!1,u),f=u.onStop=()=>{const M=$a.get(u);if(M){if(l)l(M,4);else for(const O of M)O();$a.delete(u)}},e?i?E(!0):T=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function wi(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,wt(n))wi(n.value,e,t);else if(ke(n))for(let i=0;i<n.length;i++)wi(n[i],e,t);else if(Vr(n)||vr(n))n.forEach(i=>{wi(i,e,t)});else if(Ip(n)){for(const i in n)wi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&wi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wo(n,e,t,i){try{return i?n(...i):n()}catch(s){dl(s,e,t)}}function jn(n,e,t,i){if(Xe(n)){const s=Wo(n,e,t,i);return s&&Pp(s)&&s.catch(r=>{dl(r,e,t)}),s}if(ke(n)){const s=[];for(let r=0;r<n.length;r++)s.push(jn(n[r],e,t,i));return s}}function dl(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||at;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){fs(),Wo(r,null,10,[n,l,c]),ds();return}}gv(n,t,s,i,o)}function gv(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Qt=[];let ti=-1;const xr=[];let Qi=null,dr=0;const rm=Promise.resolve();let ja=null;function Gr(n){const e=ja||rm;return n?e.then(this?n.bind(this):n):e}function _v(n){let e=ti+1,t=Qt.length;for(;e<t;){const i=e+t>>>1,s=Qt[i],r=Co(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function ih(n){if(!(n.flags&1)){const e=Co(n),t=Qt[Qt.length-1];!t||!(n.flags&2)&&e>=Co(t)?Qt.push(n):Qt.splice(_v(e),0,n),n.flags|=1,om()}}function om(){ja||(ja=rm.then(lm))}function vv(n){ke(n)?xr.push(...n):Qi&&n.id===-1?Qi.splice(dr+1,0,n):n.flags&1||(xr.push(n),n.flags|=1),om()}function Kh(n,e,t=ti+1){for(;t<Qt.length;t++){const i=Qt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Qt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function am(n){if(xr.length){const e=[...new Set(xr)].sort((t,i)=>Co(t)-Co(i));if(xr.length=0,Qi){Qi.push(...e);return}for(Qi=e,dr=0;dr<Qi.length;dr++){const t=Qi[dr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Qi=null,dr=0}}const Co=n=>n.id==null?n.flags&2?-1:1/0:n.id;function lm(n){try{for(ti=0;ti<Qt.length;ti++){const e=Qt[ti];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Wo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ti<Qt.length;ti++){const e=Qt[ti];e&&(e.flags&=-2)}ti=-1,Qt.length=0,am(),ja=null,(Qt.length||xr.length)&&lm()}}let Nt=null,cm=null;function qa(n){const e=Nt;return Nt=n,cm=n&&n.type.__scopeId||null,e}function qn(n,e=Nt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&sf(-1);const r=qa(e);let o;try{o=n(...s)}finally{qa(r),i._d&&sf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Gt(n,e){if(Nt===null)return n;const t=vl(Nt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=at]=e[s];r&&(Xe(r)&&(r={mounted:r,updated:r}),r.deep&&wi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function gs(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(fs(),jn(l,t,8,[n.el,a,n,e]),ds())}}const xv=Symbol("_vte"),yv=n=>n.__isTeleport,qs=Symbol("_leaveCb"),ea=Symbol("_enterCb");function Sv(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return oi(()=>{n.isMounted=!0}),mm(()=>{n.isUnmounting=!0}),n}const En=[Function,Array],Mv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:En,onEnter:En,onAfterEnter:En,onEnterCancelled:En,onBeforeLeave:En,onLeave:En,onAfterLeave:En,onLeaveCancelled:En,onBeforeAppear:En,onAppear:En,onAfterAppear:En,onAppearCancelled:En};function bv(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function kc(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:T,onAppearCancelled:E}=e,M=String(n.key),O=bv(t,n),D=(v,x)=>{v&&jn(v,i,9,x)},I=(v,x)=>{const C=x[1];D(v,x),ke(v)?v.every(N=>N.length<=1)&&C():v.length<=1&&C()},P={mode:o,persisted:a,beforeEnter(v){let x=l;if(!t.isMounted)if(r)x=m||l;else return;v[qs]&&v[qs](!0);const C=O[M];C&&pr(n,C)&&C.el[qs]&&C.el[qs](),D(x,[v])},enter(v){let x=c,C=u,N=h;if(!t.isMounted)if(r)x=p||c,C=T||u,N=E||h;else return;let H=!1;const J=v[ea]=ae=>{H||(H=!0,ae?D(N,[v]):D(C,[v]),P.delayedLeave&&P.delayedLeave(),v[ea]=void 0)};x?I(x,[v,J]):J()},leave(v,x){const C=String(n.key);if(v[ea]&&v[ea](!0),t.isUnmounting)return x();D(f,[v]);let N=!1;const H=v[qs]=J=>{N||(N=!0,x(),J?D(_,[v]):D(g,[v]),v[qs]=void 0,O[C]===n&&delete O[C])};O[C]=n,d?I(d,[v,H]):H()},clone(v){return kc(v,e,t,i)}};return P}function Po(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Po(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function um(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===st?(o.patchFlag&128&&s++,i=i.concat(um(o.children,e,a))):(e||o.type!==Ui)&&i.push(a!=null?ks(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function It(n,e){return Xe(n)?Rt({name:n.name},e,{setup:n}):n}function hm(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ka(n,e,t,i,s=!1){if(ke(n)){n.forEach((g,_)=>Ka(g,e&&(ke(e)?e[_]:e),t,i,s));return}if(yr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ka(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?vl(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===at?a.refs={}:a.refs,h=a.setupState,f=tt(h),d=h===at?()=>!1:g=>ht(f,g);if(c!=null&&c!==l&&(Ct(c)?(u[c]=null,d(c)&&(h[c]=null)):wt(c)&&(c.value=null)),Xe(l))Wo(l,a,12,[o,u]);else{const g=Ct(l),_=wt(l);if(g||_){const m=()=>{if(n.f){const p=g?d(l)?h[l]:u[l]:l.value;s?ke(p)&&ju(p,r):ke(p)?p.includes(r)||p.push(r):g?(u[l]=[r],d(l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,d(l)&&(h[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,gn(m,t)):m()}}}ul().requestIdleCallback;ul().cancelIdleCallback;const yr=n=>!!n.type.__asyncLoader,fm=n=>n.type.__isKeepAlive;function Ev(n,e){dm(n,"a",e)}function Tv(n,e){dm(n,"da",e)}function dm(n,e,t=Ht){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(pl(e,i,t),t){let s=t.parent;for(;s&&s.parent;)fm(s.parent.vnode)&&Av(i,e,t,s),s=s.parent}}function Av(n,e,t,i){const s=pl(e,n,i,!0);gm(()=>{ju(i[e],s)},t)}function pl(n,e,t=Ht,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{fs();const a=Xo(t),l=jn(e,t,n,o);return a(),ds(),l});return i?s.unshift(r):s.push(r),r}}const Bi=n=>(e,t=Ht)=>{(!Do||n==="sp")&&pl(n,(...i)=>e(...i),t)},wv=Bi("bm"),oi=Bi("m"),Rv=Bi("bu"),pm=Bi("u"),mm=Bi("bum"),gm=Bi("um"),Cv=Bi("sp"),Pv=Bi("rtg"),Lv=Bi("rtc");function Iv(n,e=Ht){pl("ec",n,e)}const _m="components";function _o(n,e){return xm(_m,n,!0,e)||n}const vm=Symbol.for("v-ndc");function sh(n){return Ct(n)?xm(_m,n,!1)||n:n||vm}function xm(n,e,t=!0,i=!1){const s=Nt||Ht;if(s){const r=s.type;{const a=S0(r,!1);if(a&&(a===e||a===Mn(e)||a===cl(Mn(e))))return r}const o=Yh(s[n]||r[n],e)||Yh(s.appContext[n],e);return!o&&i?r:o}}function Yh(n,e){return n&&(n[e]||n[Mn(e)]||n[cl(Mn(e))])}function ai(n,e,t,i){let s;const r=t,o=ke(n);if(o||Ct(n)){const a=o&&Li(n);let l=!1;a&&(l=!Ln(n),n=fl(n)),s=new Array(n.length);for(let c=0,u=n.length;c<u;c++)s[c]=e(l?jt(n[c]):n[c],c,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(vt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function Hc(n,e,t={},i,s){if(Nt.ce||Nt.parent&&yr(Nt.parent)&&Nt.parent.ce)return e!=="default"&&(t.name=e),xe(),yn(st,null,[Lt("slot",t,i)],64);let r=n[e];r&&r._c&&(r._d=!1),xe();const o=r&&ym(r(t)),a=t.key||o&&o.key,l=yn(st,{key:(a&&!$n(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function ym(n){return n.some(e=>Io(e)?!(e.type===Ui||e.type===st&&!ym(e.children)):!0)?n:null}function Dv(n,e){const t={};for(const i in n)t[La(i)]=n[i];return t}const Vc=n=>n?Vm(n)?vl(n):Vc(n.parent):null,vo=Rt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Vc(n.parent),$root:n=>Vc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>rh(n),$forceUpdate:n=>n.f||(n.f=()=>{ih(n.update)}),$nextTick:n=>n.n||(n.n=Gr.bind(n.proxy)),$watch:n=>i0.bind(n)}),Fl=(n,e)=>n!==at&&!n.__isScriptSetup&&ht(n,e),Nv={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Fl(i,e))return o[e]=1,i[e];if(s!==at&&ht(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&ht(c,e))return o[e]=3,r[e];if(t!==at&&ht(t,e))return o[e]=4,t[e];zc&&(o[e]=0)}}const u=vo[e];let h,f;if(u)return e==="$attrs"&&$t(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==at&&ht(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,ht(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Fl(s,e)?(s[e]=t,!0):i!==at&&ht(i,e)?(i[e]=t,!0):ht(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==at&&ht(n,o)||Fl(e,o)||(a=r[0])&&ht(a,o)||ht(i,o)||ht(vo,o)||ht(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ht(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ya(n){return ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}function Uv(n,e){return!n||!e?n||e:ke(n)&&ke(e)?n.concat(e):Rt({},Ya(n),Ya(e))}let zc=!0;function Ov(n){const e=rh(n),t=n.proxy,i=n.ctx;zc=!1,e.beforeCreate&&Zh(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:E,unmounted:M,render:O,renderTracked:D,renderTriggered:I,errorCaptured:P,serverPrefetch:v,expose:x,inheritAttrs:C,components:N,directives:H,filters:J}=e;if(c&&Fv(c,i,null),o)for(const ee in o){const W=o[ee];Xe(W)&&(i[ee]=W.bind(t))}if(s){const ee=s.call(t,t);vt(ee)&&(n.data=ps(ee))}if(zc=!0,r)for(const ee in r){const W=r[ee],ge=Xe(W)?W.bind(t,t):Xe(W.get)?W.get.bind(t,t):ri,ye=!Xe(W)&&Xe(W.set)?W.set.bind(t):ri,Re=_t({get:ge,set:ye});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Oe=>Re.value=Oe})}if(a)for(const ee in a)Sm(a[ee],i,t,ee);if(l){const ee=Xe(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(W=>{Da(W,ee[W])})}u&&Zh(u,n,"c");function j(ee,W){ke(W)?W.forEach(ge=>ee(ge.bind(t))):W&&ee(W.bind(t))}if(j(wv,h),j(oi,f),j(Rv,d),j(pm,g),j(Ev,_),j(Tv,m),j(Iv,P),j(Lv,D),j(Pv,I),j(mm,T),j(gm,M),j(Cv,v),ke(x))if(x.length){const ee=n.exposed||(n.exposed={});x.forEach(W=>{Object.defineProperty(ee,W,{get:()=>t[W],set:ge=>t[W]=ge})})}else n.exposed||(n.exposed={});O&&n.render===ri&&(n.render=O),C!=null&&(n.inheritAttrs=C),N&&(n.components=N),H&&(n.directives=H),v&&hm(n)}function Fv(n,e,t=ri){ke(n)&&(n=Gc(n));for(const i in n){const s=n[i];let r;vt(s)?"default"in s?r=In(s.from||i,s.default,!0):r=In(s.from||i):r=In(s),wt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Zh(n,e,t){jn(ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Sm(n,e,t,i){let s=i.includes(".")?Nm(t,i):()=>t[i];if(Ct(n)){const r=e[n];Xe(r)&&Rn(s,r)}else if(Xe(n))Rn(s,n.bind(t));else if(vt(n))if(ke(n))n.forEach(r=>Sm(r,e,t,i));else{const r=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(r)&&Rn(s,r,n)}}function rh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Za(l,c,o,!0)),Za(l,e,o)),vt(e)&&r.set(e,l),l}function Za(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Za(n,r,t,!0),s&&s.forEach(o=>Za(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Bv[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Bv={data:Jh,props:Qh,emits:Qh,methods:ao,computed:ao,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:ao,directives:ao,watch:Hv,provide:Jh,inject:kv};function Jh(n,e){return e?n?function(){return Rt(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function kv(n,e){return ao(Gc(n),Gc(e))}function Gc(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Yt(n,e){return n?[...new Set([].concat(n,e))]:e}function ao(n,e){return n?Rt(Object.create(null),n,e):e}function Qh(n,e){return n?ke(n)&&ke(e)?[...new Set([...n,...e])]:Rt(Object.create(null),Ya(n),Ya(e??{})):e}function Hv(n,e){if(!n)return e;if(!e)return n;const t=Rt(Object.create(null),n);for(const i in e)t[i]=Yt(n[i],e[i]);return t}function Mm(){return{app:null,config:{isNativeTag:E_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vv=0;function zv(n,e){return function(i,s=null){Xe(i)||(i=Rt({},i)),s!=null&&!vt(s)&&(s=null);const r=Mm(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Vv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:b0,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Xe(u.install)?(o.add(u),u.install(c,...h)):Xe(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||Lt(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(d,u):n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,vl(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(jn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Fs;Fs=c;try{return u()}finally{Fs=h}}};return c}}let Fs=null;function Da(n,e){if(Ht){let t=Ht.provides;const i=Ht.parent&&Ht.parent.provides;i===t&&(t=Ht.provides=Object.create(i)),t[n]=e}}function In(n,e,t=!1){const i=Ht||Nt;if(i||Fs){const s=Fs?Fs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}function Gv(){return!!(Ht||Nt||Fs)}const bm={},Em=()=>Object.create(bm),Tm=n=>Object.getPrototypeOf(n)===bm;function Wv(n,e,t,i=!1){const s={},r=Em();n.propsDefaults=Object.create(null),Am(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:em(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Xv(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=tt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ml(n.emitsOptions,f))continue;const d=e[f];if(l)if(ht(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=Mn(f);s[g]=Wc(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Am(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!ht(e,h)&&((u=hs(h))===h||!ht(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Wc(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!ht(e,h))&&(delete r[h],c=!0)}c&&Ai(n.attrs,"set","")}function Am(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(po(l))continue;const c=e[l];let u;s&&ht(s,u=Mn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ml(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=tt(t),c=a||at;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Wc(s,l,h,c[h],n,!ht(c,h))}}return o}function Wc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=ht(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Xo(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===hs(t))&&(i=!0))}return i}const $v=new WeakMap;function wm(n,e,t=!1){const i=t?$v:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Xe(n)){const u=h=>{l=!0;const[f,d]=wm(h,e,!0);Rt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return vt(n)&&i.set(n,_r),_r;if(ke(r))for(let u=0;u<r.length;u++){const h=Mn(r[u]);ef(h)&&(o[h]=at)}else if(r)for(const u in r){const h=Mn(u);if(ef(h)){const f=r[u],d=o[h]=ke(f)||Xe(f)?{type:f}:Rt({},f),g=d.type;let _=!1,m=!0;if(ke(g))for(let p=0;p<g.length;++p){const T=g[p],E=Xe(T)&&T.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=Xe(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||ht(d,"default"))&&a.push(h)}}const c=[o,a];return vt(n)&&i.set(n,c),c}function ef(n){return n[0]!=="$"&&!po(n)}const Rm=n=>n[0]==="_"||n==="$stable",oh=n=>ke(n)?n.map(ni):[ni(n)],jv=(n,e,t)=>{if(e._n)return e;const i=qn((...s)=>oh(e(...s)),t);return i._c=!1,i},Cm=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Rm(s))continue;const r=n[s];if(Xe(r))e[s]=jv(s,r,i);else if(r!=null){const o=oh(r);e[s]=()=>o}}},Pm=(n,e)=>{const t=oh(e);n.slots.default=()=>t},Lm=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},qv=(n,e,t)=>{const i=n.slots=Em();if(n.vnode.shapeFlag&32){const s=e._;s?(Lm(i,e,t),t&&Dp(i,"_",s,!0)):Cm(e,i)}else e&&Pm(n,e)},Kv=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=at;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Lm(s,e,t):(r=!e.$stable,Cm(e,s)),o=e}else e&&(Pm(n,e),o={default:1});if(r)for(const a in s)!Rm(a)&&o[a]==null&&delete s[a]},gn=u0;function Yv(n){return Zv(n)}function Zv(n,e){const t=ul();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=ri,insertStaticContent:g}=n,_=(w,S,X,te=null,$=null,K=null,fe=void 0,ne=null,b=!!S.dynamicChildren)=>{if(w===S)return;w&&!pr(w,S)&&(te=k(w),Oe(w,$,K,!0),w=null),S.patchFlag===-2&&(b=!1,S.dynamicChildren=null);const{type:y,ref:F,shapeFlag:R}=S;switch(y){case gl:m(w,S,X,te);break;case Ui:p(w,S,X,te);break;case Hl:w==null&&T(S,X,te,fe);break;case st:N(w,S,X,te,$,K,fe,ne,b);break;default:R&1?O(w,S,X,te,$,K,fe,ne,b):R&6?H(w,S,X,te,$,K,fe,ne,b):(R&64||R&128)&&y.process(w,S,X,te,$,K,fe,ne,b,de)}F!=null&&$&&Ka(F,w&&w.ref,K,S||w,!S)},m=(w,S,X,te)=>{if(w==null)i(S.el=a(S.children),X,te);else{const $=S.el=w.el;S.children!==w.children&&c($,S.children)}},p=(w,S,X,te)=>{w==null?i(S.el=l(S.children||""),X,te):S.el=w.el},T=(w,S,X,te)=>{[w.el,w.anchor]=g(w.children,S,X,te,w.el,w.anchor)},E=({el:w,anchor:S},X,te)=>{let $;for(;w&&w!==S;)$=f(w),i(w,X,te),w=$;i(S,X,te)},M=({el:w,anchor:S})=>{let X;for(;w&&w!==S;)X=f(w),s(w),w=X;s(S)},O=(w,S,X,te,$,K,fe,ne,b)=>{S.type==="svg"?fe="svg":S.type==="math"&&(fe="mathml"),w==null?D(S,X,te,$,K,fe,ne,b):v(w,S,$,K,fe,ne,b)},D=(w,S,X,te,$,K,fe,ne)=>{let b,y;const{props:F,shapeFlag:R,transition:L,dirs:U}=w;if(b=w.el=o(w.type,K,F&&F.is,F),R&8?u(b,w.children):R&16&&P(w.children,b,null,te,$,Bl(w,K),fe,ne),U&&gs(w,null,te,"created"),I(b,w,w.scopeId,fe,te),F){for(const Y in F)Y!=="value"&&!po(Y)&&r(b,Y,null,F[Y],K,te);"value"in F&&r(b,"value",null,F.value,K),(y=F.onVnodeBeforeMount)&&Qn(y,te,w)}U&&gs(w,null,te,"beforeMount");const he=Jv($,L);he&&L.beforeEnter(b),i(b,S,X),((y=F&&F.onVnodeMounted)||he||U)&&gn(()=>{y&&Qn(y,te,w),he&&L.enter(b),U&&gs(w,null,te,"mounted")},$)},I=(w,S,X,te,$)=>{if(X&&d(w,X),te)for(let K=0;K<te.length;K++)d(w,te[K]);if($){let K=$.subTree;if(S===K||Fm(K.type)&&(K.ssContent===S||K.ssFallback===S)){const fe=$.vnode;I(w,fe,fe.scopeId,fe.slotScopeIds,$.parent)}}},P=(w,S,X,te,$,K,fe,ne,b=0)=>{for(let y=b;y<w.length;y++){const F=w[y]=ne?es(w[y]):ni(w[y]);_(null,F,S,X,te,$,K,fe,ne)}},v=(w,S,X,te,$,K,fe)=>{const ne=S.el=w.el;let{patchFlag:b,dynamicChildren:y,dirs:F}=S;b|=w.patchFlag&16;const R=w.props||at,L=S.props||at;let U;if(X&&_s(X,!1),(U=L.onVnodeBeforeUpdate)&&Qn(U,X,S,w),F&&gs(S,w,X,"beforeUpdate"),X&&_s(X,!0),(R.innerHTML&&L.innerHTML==null||R.textContent&&L.textContent==null)&&u(ne,""),y?x(w.dynamicChildren,y,ne,X,te,Bl(S,$),K):fe||W(w,S,ne,null,X,te,Bl(S,$),K,!1),b>0){if(b&16)C(ne,R,L,X,$);else if(b&2&&R.class!==L.class&&r(ne,"class",null,L.class,$),b&4&&r(ne,"style",R.style,L.style,$),b&8){const he=S.dynamicProps;for(let Y=0;Y<he.length;Y++){const ue=he[Y],Le=R[ue],le=L[ue];(le!==Le||ue==="value")&&r(ne,ue,Le,le,$,X)}}b&1&&w.children!==S.children&&u(ne,S.children)}else!fe&&y==null&&C(ne,R,L,X,$);((U=L.onVnodeUpdated)||F)&&gn(()=>{U&&Qn(U,X,S,w),F&&gs(S,w,X,"updated")},te)},x=(w,S,X,te,$,K,fe)=>{for(let ne=0;ne<S.length;ne++){const b=w[ne],y=S[ne],F=b.el&&(b.type===st||!pr(b,y)||b.shapeFlag&70)?h(b.el):X;_(b,y,F,null,te,$,K,fe,!0)}},C=(w,S,X,te,$)=>{if(S!==X){if(S!==at)for(const K in S)!po(K)&&!(K in X)&&r(w,K,S[K],null,$,te);for(const K in X){if(po(K))continue;const fe=X[K],ne=S[K];fe!==ne&&K!=="value"&&r(w,K,ne,fe,$,te)}"value"in X&&r(w,"value",S.value,X.value,$)}},N=(w,S,X,te,$,K,fe,ne,b)=>{const y=S.el=w?w.el:a(""),F=S.anchor=w?w.anchor:a("");let{patchFlag:R,dynamicChildren:L,slotScopeIds:U}=S;U&&(ne=ne?ne.concat(U):U),w==null?(i(y,X,te),i(F,X,te),P(S.children||[],X,F,$,K,fe,ne,b)):R>0&&R&64&&L&&w.dynamicChildren?(x(w.dynamicChildren,L,X,$,K,fe,ne),(S.key!=null||$&&S===$.subTree)&&Im(w,S,!0)):W(w,S,X,F,$,K,fe,ne,b)},H=(w,S,X,te,$,K,fe,ne,b)=>{S.slotScopeIds=ne,w==null?S.shapeFlag&512?$.ctx.activate(S,X,te,fe,b):J(S,X,te,$,K,fe,b):ae(w,S,b)},J=(w,S,X,te,$,K,fe)=>{const ne=w.component=g0(w,te,$);if(fm(w)&&(ne.ctx.renderer=de),_0(ne,!1,fe),ne.asyncDep){if($&&$.registerDep(ne,j,fe),!w.el){const b=ne.subTree=Lt(Ui);p(null,b,S,X)}}else j(ne,w,S,X,$,K,fe)},ae=(w,S,X)=>{const te=S.component=w.component;if(l0(w,S,X))if(te.asyncDep&&!te.asyncResolved){ee(te,S,X);return}else te.next=S,te.update();else S.el=w.el,te.vnode=S},j=(w,S,X,te,$,K,fe)=>{const ne=()=>{if(w.isMounted){let{next:R,bu:L,u:U,parent:he,vnode:Y}=w;{const Ce=Dm(w);if(Ce){R&&(R.el=Y.el,ee(w,R,fe)),Ce.asyncDep.then(()=>{w.isUnmounted||ne()});return}}let ue=R,Le;_s(w,!1),R?(R.el=Y.el,ee(w,R,fe)):R=Y,L&&Ia(L),(Le=R.props&&R.props.onVnodeBeforeUpdate)&&Qn(Le,he,R,Y),_s(w,!0);const le=kl(w),me=w.subTree;w.subTree=le,_(me,le,h(me.el),k(me),w,$,K),R.el=le.el,ue===null&&c0(w,le.el),U&&gn(U,$),(Le=R.props&&R.props.onVnodeUpdated)&&gn(()=>Qn(Le,he,R,Y),$)}else{let R;const{el:L,props:U}=S,{bm:he,m:Y,parent:ue,root:Le,type:le}=w,me=yr(S);if(_s(w,!1),he&&Ia(he),!me&&(R=U&&U.onVnodeBeforeMount)&&Qn(R,ue,S),_s(w,!0),L&&Ie){const Ce=()=>{w.subTree=kl(w),Ie(L,w.subTree,w,$,null)};me&&le.__asyncHydrate?le.__asyncHydrate(L,w,Ce):Ce()}else{Le.ce&&Le.ce._injectChildStyle(le);const Ce=w.subTree=kl(w);_(null,Ce,X,te,w,$,K),S.el=Ce.el}if(Y&&gn(Y,$),!me&&(R=U&&U.onVnodeMounted)){const Ce=S;gn(()=>Qn(R,ue,Ce),$)}(S.shapeFlag&256||ue&&yr(ue.vnode)&&ue.vnode.shapeFlag&256)&&w.a&&gn(w.a,$),w.isMounted=!0,S=X=te=null}};w.scope.on();const b=w.effect=new Hp(ne);w.scope.off();const y=w.update=b.run.bind(b),F=w.job=b.runIfDirty.bind(b);F.i=w,F.id=w.uid,b.scheduler=()=>ih(F),_s(w,!0),y()},ee=(w,S,X)=>{S.component=w;const te=w.vnode.props;w.vnode=S,w.next=null,Xv(w,S.props,te,X),Kv(w,S.children,X),fs(),Kh(w),ds()},W=(w,S,X,te,$,K,fe,ne,b=!1)=>{const y=w&&w.children,F=w?w.shapeFlag:0,R=S.children,{patchFlag:L,shapeFlag:U}=S;if(L>0){if(L&128){ye(y,R,X,te,$,K,fe,ne,b);return}else if(L&256){ge(y,R,X,te,$,K,fe,ne,b);return}}U&8?(F&16&&be(y,$,K),R!==y&&u(X,R)):F&16?U&16?ye(y,R,X,te,$,K,fe,ne,b):be(y,$,K,!0):(F&8&&u(X,""),U&16&&P(R,X,te,$,K,fe,ne,b))},ge=(w,S,X,te,$,K,fe,ne,b)=>{w=w||_r,S=S||_r;const y=w.length,F=S.length,R=Math.min(y,F);let L;for(L=0;L<R;L++){const U=S[L]=b?es(S[L]):ni(S[L]);_(w[L],U,X,null,$,K,fe,ne,b)}y>F?be(w,$,K,!0,!1,R):P(S,X,te,$,K,fe,ne,b,R)},ye=(w,S,X,te,$,K,fe,ne,b)=>{let y=0;const F=S.length;let R=w.length-1,L=F-1;for(;y<=R&&y<=L;){const U=w[y],he=S[y]=b?es(S[y]):ni(S[y]);if(pr(U,he))_(U,he,X,null,$,K,fe,ne,b);else break;y++}for(;y<=R&&y<=L;){const U=w[R],he=S[L]=b?es(S[L]):ni(S[L]);if(pr(U,he))_(U,he,X,null,$,K,fe,ne,b);else break;R--,L--}if(y>R){if(y<=L){const U=L+1,he=U<F?S[U].el:te;for(;y<=L;)_(null,S[y]=b?es(S[y]):ni(S[y]),X,he,$,K,fe,ne,b),y++}}else if(y>L)for(;y<=R;)Oe(w[y],$,K,!0),y++;else{const U=y,he=y,Y=new Map;for(y=he;y<=L;y++){const ze=S[y]=b?es(S[y]):ni(S[y]);ze.key!=null&&Y.set(ze.key,y)}let ue,Le=0;const le=L-he+1;let me=!1,Ce=0;const He=new Array(le);for(y=0;y<le;y++)He[y]=0;for(y=U;y<=R;y++){const ze=w[y];if(Le>=le){Oe(ze,$,K,!0);continue}let Ve;if(ze.key!=null)Ve=Y.get(ze.key);else for(ue=he;ue<=L;ue++)if(He[ue-he]===0&&pr(ze,S[ue])){Ve=ue;break}Ve===void 0?Oe(ze,$,K,!0):(He[Ve-he]=y+1,Ve>=Ce?Ce=Ve:me=!0,_(ze,S[Ve],X,null,$,K,fe,ne,b),Le++)}const we=me?Qv(He):_r;for(ue=we.length-1,y=le-1;y>=0;y--){const ze=he+y,Ve=S[ze],et=ze+1<F?S[ze+1].el:te;He[y]===0?_(null,Ve,X,et,$,K,fe,ne,b):me&&(ue<0||y!==we[ue]?Re(Ve,X,et,2):ue--)}}},Re=(w,S,X,te,$=null)=>{const{el:K,type:fe,transition:ne,children:b,shapeFlag:y}=w;if(y&6){Re(w.component.subTree,S,X,te);return}if(y&128){w.suspense.move(S,X,te);return}if(y&64){fe.move(w,S,X,de);return}if(fe===st){i(K,S,X);for(let R=0;R<b.length;R++)Re(b[R],S,X,te);i(w.anchor,S,X);return}if(fe===Hl){E(w,S,X);return}if(te!==2&&y&1&&ne)if(te===0)ne.beforeEnter(K),i(K,S,X),gn(()=>ne.enter(K),$);else{const{leave:R,delayLeave:L,afterLeave:U}=ne,he=()=>i(K,S,X),Y=()=>{R(K,()=>{he(),U&&U()})};L?L(K,he,Y):Y()}else i(K,S,X)},Oe=(w,S,X,te=!1,$=!1)=>{const{type:K,props:fe,ref:ne,children:b,dynamicChildren:y,shapeFlag:F,patchFlag:R,dirs:L,cacheIndex:U}=w;if(R===-2&&($=!1),ne!=null&&Ka(ne,null,X,w,!0),U!=null&&(S.renderCache[U]=void 0),F&256){S.ctx.deactivate(w);return}const he=F&1&&L,Y=!yr(w);let ue;if(Y&&(ue=fe&&fe.onVnodeBeforeUnmount)&&Qn(ue,S,w),F&6)pe(w.component,X,te);else{if(F&128){w.suspense.unmount(X,te);return}he&&gs(w,null,S,"beforeUnmount"),F&64?w.type.remove(w,S,X,de,te):y&&!y.hasOnce&&(K!==st||R>0&&R&64)?be(y,S,X,!1,!0):(K===st&&R&384||!$&&F&16)&&be(b,S,X),te&&Qe(w)}(Y&&(ue=fe&&fe.onVnodeUnmounted)||he)&&gn(()=>{ue&&Qn(ue,S,w),he&&gs(w,null,S,"unmounted")},X)},Qe=w=>{const{type:S,el:X,anchor:te,transition:$}=w;if(S===st){se(X,te);return}if(S===Hl){M(w);return}const K=()=>{s(X),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:fe,delayLeave:ne}=$,b=()=>fe(X,K);ne?ne(w.el,K,b):b()}else K()},se=(w,S)=>{let X;for(;w!==S;)X=f(w),s(w),w=X;s(S)},pe=(w,S,X)=>{const{bum:te,scope:$,job:K,subTree:fe,um:ne,m:b,a:y}=w;tf(b),tf(y),te&&Ia(te),$.stop(),K&&(K.flags|=8,Oe(fe,w,S,X)),ne&&gn(ne,S),gn(()=>{w.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},be=(w,S,X,te=!1,$=!1,K=0)=>{for(let fe=K;fe<w.length;fe++)Oe(w[fe],S,X,te,$)},k=w=>{if(w.shapeFlag&6)return k(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const S=f(w.anchor||w.el),X=S&&S[xv];return X?f(X):S};let ce=!1;const oe=(w,S,X)=>{w==null?S._vnode&&Oe(S._vnode,null,null,!0):_(S._vnode||null,w,S,null,null,null,X),S._vnode=w,ce||(ce=!0,Kh(),am(),ce=!1)},de={p:_,um:Oe,m:Re,r:Qe,mt:J,mc:P,pc:W,pbc:x,n:k,o:n};let Fe,Ie;return{render:oe,hydrate:Fe,createApp:zv(oe,Fe)}}function Bl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function _s({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Jv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Im(n,e,t=!1){const i=n.children,s=e.children;if(ke(i)&&ke(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=es(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Im(o,a)),a.type===gl&&(a.el=o.el)}}function Qv(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Dm(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dm(e)}function tf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const e0=Symbol.for("v-scx"),t0=()=>In(e0);function n0(n,e){return ah(n,null,{flush:"sync"})}function Rn(n,e,t){return ah(n,e,t)}function ah(n,e,t=at){const{immediate:i,deep:s,flush:r,once:o}=t,a=Rt({},t),l=e&&i||!e&&r!=="post";let c;if(Do){if(r==="sync"){const d=t0();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=ri,d.resume=ri,d.pause=ri,d}}const u=Ht;a.call=(d,g,_)=>jn(d,u,g,_);let h=!1;r==="post"?a.scheduler=d=>{gn(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():ih(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=mv(n,e,a);return Do&&(c?c.push(f):l&&f()),f}function i0(n,e,t){const i=this.proxy,s=Ct(n)?n.includes(".")?Nm(i,n):()=>i[n]:n.bind(i,i);let r;Xe(e)?r=e:(r=e.handler,t=e);const o=Xo(this),a=ah(s,r.bind(i),t);return o(),a}function Nm(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function s0(n,e,t=at){const i=Hm(),s=Mn(e),r=hs(e),o=Um(n,s),a=av((l,c)=>{let u,h=at,f;return n0(()=>{const d=n[s];un(u,d)&&(u=d,c())}),{get(){return l(),t.get?t.get(u):u},set(d){const g=t.set?t.set(d):d;if(!un(g,u)&&!(h!==at&&un(d,h)))return;const _=i.vnode.props;_&&(e in _||s in _||r in _)&&(`onUpdate:${e}`in _||`onUpdate:${s}`in _||`onUpdate:${r}`in _)||(u=d,c()),i.emit(`update:${e}`,g),un(d,g)&&un(d,h)&&!un(g,f)&&c(),h=d,f=g}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||at:a,done:!1}:{done:!0}}}},a}const Um=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Mn(e)}Modifiers`]||n[`${hs(e)}Modifiers`];function r0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||at;let s=t;const r=e.startsWith("update:"),o=r&&Um(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Ct(u)?u.trim():u)),o.number&&(s=t.map(Wa)));let a,l=i[a=La(e)]||i[a=La(Mn(e))];!l&&r&&(l=i[a=La(hs(e))]),l&&jn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,jn(c,n,6,s)}}function Om(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Xe(n)){const l=c=>{const u=Om(c,e,!0);u&&(a=!0,Rt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(vt(n)&&i.set(n,null),null):(ke(r)?r.forEach(l=>o[l]=null):Rt(o,r),vt(n)&&i.set(n,o),o)}function ml(n,e){return!n||!al(e)?!1:(e=e.slice(2).replace(/Once$/,""),ht(n,e[0].toLowerCase()+e.slice(1))||ht(n,hs(e))||ht(n,e))}function kl(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=n,m=qa(n);let p,T;try{if(t.shapeFlag&4){const M=s||i,O=M;p=ni(c.call(O,M,u,h,d,f,g)),T=a}else{const M=e;p=ni(M.length>1?M(h,{attrs:a,slots:o,emit:l}):M(h,null)),T=e.props?a:o0(a)}}catch(M){xo.length=0,dl(M,n,1),p=Lt(Ui)}let E=p;if(T&&_!==!1){const M=Object.keys(T),{shapeFlag:O}=E;M.length&&O&7&&(r&&M.some($u)&&(T=a0(T,r)),E=ks(E,T,!1,!0))}return t.dirs&&(E=ks(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&Po(E,t.transition),p=E,qa(m),p}const o0=n=>{let e;for(const t in n)(t==="class"||t==="style"||al(t))&&((e||(e={}))[t]=n[t]);return e},a0=(n,e)=>{const t={};for(const i in n)(!$u(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function l0(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?nf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!ml(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?nf(i,o,c):!0:!!o;return!1}function nf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!ml(t,r))return!0}return!1}function c0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Fm=n=>n.__isSuspense;function u0(n,e){e&&e.pendingBranch?ke(n)?e.effects.push(...n):e.effects.push(n):vv(n)}const st=Symbol.for("v-fgt"),gl=Symbol.for("v-txt"),Ui=Symbol.for("v-cmt"),Hl=Symbol.for("v-stc"),xo=[];let xn=null;function xe(n=!1){xo.push(xn=n?null:[])}function h0(){xo.pop(),xn=xo[xo.length-1]||null}let Lo=1;function sf(n,e=!1){Lo+=n,n<0&&xn&&e&&(xn.hasOnce=!0)}function Bm(n){return n.dynamicChildren=Lo>0?xn||_r:null,h0(),Lo>0&&xn&&xn.push(n),n}function Pe(n,e,t,i,s,r){return Bm(q(n,e,t,i,s,r,!0))}function yn(n,e,t,i,s){return Bm(Lt(n,e,t,i,s,!0))}function Io(n){return n?n.__v_isVNode===!0:!1}function pr(n,e){return n.type===e.type&&n.key===e.key}const km=({key:n})=>n??null,Na=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ct(n)||wt(n)||Xe(n)?{i:Nt,r:n,k:e,f:!!t}:n:null);function q(n,e=null,t=null,i=0,s=null,r=n===st?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&km(e),ref:e&&Na(e),scopeId:cm,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Nt};return a?(lh(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ct(t)?8:16),Lo>0&&!o&&xn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&xn.push(l),l}const Lt=f0;function f0(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===vm)&&(n=Ui),Io(n)){const a=ks(n,e,!0);return t&&lh(a,t),Lo>0&&!r&&xn&&(a.shapeFlag&6?xn[xn.indexOf(n)]=a:xn.push(a)),a.patchFlag=-2,a}if(M0(n)&&(n=n.__vccOpts),e){e=d0(e);let{class:a,style:l}=e;a&&!Ct(a)&&(e.class=Pn(a)),vt(l)&&(th(l)&&!ke(l)&&(l=Rt({},l)),e.style=zr(l))}const o=Ct(n)?1:Fm(n)?128:yv(n)?64:vt(n)?4:Xe(n)?2:0;return q(n,e,t,i,s,o,r,!0)}function d0(n){return n?th(n)||Tm(n)?Rt({},n):n:null}function ks(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?_l(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&km(c),ref:e&&e.ref?t&&r?ke(r)?r.concat(Na(e)):[r,Na(e)]:Na(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==st?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ks(n.ssContent),ssFallback:n.ssFallback&&ks(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Po(u,l.clone(u)),u}function kt(n=" ",e=0){return Lt(gl,null,n,e)}function yt(n="",e=!1){return e?(xe(),yn(Ui,null,n)):Lt(Ui,null,n)}function ni(n){return n==null||typeof n=="boolean"?Lt(Ui):ke(n)?Lt(st,null,n.slice()):Io(n)?es(n):Lt(gl,null,String(n))}function es(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ks(n)}function lh(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ke(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),lh(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Tm(e)?e._ctx=Nt:s===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:Nt},t=32):(e=String(e),i&64?(t=16,e=[kt(e)]):t=8);n.children=e,n.shapeFlag|=t}function _l(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Pn([e.class,i.class]));else if(s==="style")e.style=zr([e.style,i.style]);else if(al(s)){const r=e[s],o=i[s];o&&r!==o&&!(ke(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Qn(n,e,t,i=null){jn(n,e,7,[t,i])}const p0=Mm();let m0=0;function g0(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||p0,r={uid:m0++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wm(i,s),emitsOptions:Om(i,s),emit:null,emitted:null,propsDefaults:at,inheritAttrs:i.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=r0.bind(null,r),n.ce&&n.ce(r),r}let Ht=null;const Hm=()=>Ht||Nt;let Ja,Xc;{const n=ul(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ja=e("__VUE_INSTANCE_SETTERS__",t=>Ht=t),Xc=e("__VUE_SSR_SETTERS__",t=>Do=t)}const Xo=n=>{const e=Ht;return Ja(n),n.scope.on(),()=>{n.scope.off(),Ja(e)}},rf=()=>{Ht&&Ht.scope.off(),Ja(null)};function Vm(n){return n.vnode.shapeFlag&4}let Do=!1;function _0(n,e=!1,t=!1){e&&Xc(e);const{props:i,children:s}=n.vnode,r=Vm(n);Wv(n,i,r,e),qv(n,s,t);const o=r?v0(n,e):void 0;return e&&Xc(!1),o}function v0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Nv);const{setup:i}=t;if(i){fs();const s=n.setupContext=i.length>1?y0(n):null,r=Xo(n),o=Wo(i,n,0,[n.props,s]),a=Pp(o);if(ds(),r(),(a||n.sp)&&!yr(n)&&hm(n),a){if(o.then(rf,rf),e)return o.then(l=>{of(n,l,e)}).catch(l=>{dl(l,n,0)});n.asyncDep=o}else of(n,o,e)}else zm(n,e)}function of(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=im(e)),zm(n,t)}let af;function zm(n,e,t){const i=n.type;if(!n.render){if(!e&&af&&!i.render){const s=i.template||rh(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Rt(Rt({isCustomElement:r,delimiters:a},o),l);i.render=af(s,c)}}n.render=i.render||ri}{const s=Xo(n);fs();try{Ov(n)}finally{ds(),s()}}}const x0={get(n,e){return $t(n,"get",""),n[e]}};function y0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,x0),slots:n.slots,emit:n.emit,expose:e}}function vl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(im(nh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in vo)return vo[t](n)},has(e,t){return t in e||t in vo}})):n.proxy}function S0(n,e=!0){return Xe(n)?n.displayName||n.name:n.name||e&&n.__name}function M0(n){return Xe(n)&&"__vccOpts"in n}const _t=(n,e)=>dv(n,e,Do);function Gm(n,e,t){const i=arguments.length;return i===2?vt(e)&&!ke(e)?Io(e)?Lt(n,null,[e]):Lt(n,e):Lt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Io(t)&&(t=[t]),Lt(n,e,t))}const b0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $c;const lf=typeof window<"u"&&window.trustedTypes;if(lf)try{$c=lf.createPolicy("vue",{createHTML:n=>n})}catch{}const Wm=$c?n=>$c.createHTML(n):n=>n,E0="http://www.w3.org/2000/svg",T0="http://www.w3.org/1998/Math/MathML",Ei=typeof document<"u"?document:null,cf=Ei&&Ei.createElement("template"),A0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Ei.createElementNS(E0,n):e==="mathml"?Ei.createElementNS(T0,n):t?Ei.createElement(n,{is:t}):Ei.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ei.createTextNode(n),createComment:n=>Ei.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ei.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{cf.innerHTML=Wm(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=cf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},zi="transition",Yr="animation",Ar=Symbol("_vtc"),Xm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},w0=Rt({},Mv,Xm),vs=(n,e=[])=>{ke(n)?n.forEach(t=>t(...e)):n&&n(...e)},uf=n=>n?ke(n)?n.some(e=>e.length>1):n.length>1:!1;function R0(n){const e={};for(const N in n)N in Xm||(e[N]=n[N]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,g=C0(s),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:T,onEnterCancelled:E,onLeave:M,onLeaveCancelled:O,onBeforeAppear:D=p,onAppear:I=T,onAppearCancelled:P=E}=e,v=(N,H,J,ae)=>{N._enterCancelled=ae,Zi(N,H?u:a),Zi(N,H?c:o),J&&J()},x=(N,H)=>{N._isLeaving=!1,Zi(N,h),Zi(N,d),Zi(N,f),H&&H()},C=N=>(H,J)=>{const ae=N?I:T,j=()=>v(H,N,J);vs(ae,[H,j]),hf(()=>{Zi(H,N?l:r),ei(H,N?u:a),uf(ae)||ff(H,i,_,j)})};return Rt(e,{onBeforeEnter(N){vs(p,[N]),ei(N,r),ei(N,o)},onBeforeAppear(N){vs(D,[N]),ei(N,l),ei(N,c)},onEnter:C(!1),onAppear:C(!0),onLeave(N,H){N._isLeaving=!0;const J=()=>x(N,H);ei(N,h),N._enterCancelled?(ei(N,f),jc()):(jc(),ei(N,f)),hf(()=>{N._isLeaving&&(Zi(N,h),ei(N,d),uf(M)||ff(N,i,m,J))}),vs(M,[N,J])},onEnterCancelled(N){v(N,!1,void 0,!0),vs(E,[N])},onAppearCancelled(N){v(N,!0,void 0,!0),vs(P,[N])},onLeaveCancelled(N){x(N),vs(O,[N])}})}function C0(n){if(n==null)return null;if(vt(n))return[Vl(n.enter),Vl(n.leave)];{const e=Vl(n);return[e,e]}}function Vl(n){return C_(n)}function ei(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ar]||(n[Ar]=new Set)).add(e)}function Zi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Ar];t&&(t.delete(e),t.size||(n[Ar]=void 0))}function hf(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let P0=0;function ff(n,e,t,i){const s=n._endId=++P0,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=$m(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=d=>{d.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function $m(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${zi}Delay`),r=i(`${zi}Duration`),o=df(s,r),a=i(`${Yr}Delay`),l=i(`${Yr}Duration`),c=df(a,l);let u=null,h=0,f=0;e===zi?o>0&&(u=zi,h=o,f=r.length):e===Yr?c>0&&(u=Yr,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?zi:Yr:null,f=u?u===zi?r.length:l.length:0);const d=u===zi&&/\b(transform|all)(,|$)/.test(i(`${zi}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function df(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>pf(t)+pf(n[i])))}function pf(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function jc(){return document.body.offsetHeight}function L0(n,e,t){const i=n[Ar];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const mf=Symbol("_vod"),I0=Symbol("_vsh"),D0=Symbol(""),N0=/(^|;)\s*display\s*:/;function U0(n,e,t){const i=n.style,s=Ct(t);let r=!1;if(t&&!s){if(e)if(Ct(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ua(i,a,"")}else for(const o in e)t[o]==null&&Ua(i,o,"");for(const o in t)o==="display"&&(r=!0),Ua(i,o,t[o])}else if(s){if(e!==t){const o=i[D0];o&&(t+=";"+o),i.cssText=t,r=N0.test(t)}}else e&&n.removeAttribute("style");mf in n&&(n[mf]=r?i.display:"",n[I0]&&(i.display="none"))}const gf=/\s*!important$/;function Ua(n,e,t){if(ke(t))t.forEach(i=>Ua(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=O0(n,e);gf.test(t)?n.setProperty(hs(i),t.replace(gf,""),"important"):n[i]=t}}const _f=["Webkit","Moz","ms"],zl={};function O0(n,e){const t=zl[e];if(t)return t;let i=Mn(e);if(i!=="filter"&&i in n)return zl[e]=i;i=cl(i);for(let s=0;s<_f.length;s++){const r=_f[s]+i;if(r in n)return zl[e]=r}return e}const vf="http://www.w3.org/1999/xlink";function xf(n,e,t,i,s,r=U_(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(vf,e.slice(6,e.length)):n.setAttributeNS(vf,e,t):t==null||r&&!Np(t)?n.removeAttribute(e):n.setAttribute(e,r?"":$n(t)?String(t):t)}function yf(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Wm(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Np(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function ns(n,e,t,i){n.addEventListener(e,t,i)}function F0(n,e,t,i){n.removeEventListener(e,t,i)}const Sf=Symbol("_vei");function B0(n,e,t,i,s=null){const r=n[Sf]||(n[Sf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=k0(e);if(i){const c=r[e]=z0(i,s);ns(n,a,c,l)}else o&&(F0(n,a,o,l),r[e]=void 0)}}const Mf=/(?:Once|Passive|Capture)$/;function k0(n){let e;if(Mf.test(n)){e={};let i;for(;i=n.match(Mf);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):hs(n.slice(2)),e]}let Gl=0;const H0=Promise.resolve(),V0=()=>Gl||(H0.then(()=>Gl=0),Gl=Date.now());function z0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;jn(G0(i,t.value),e,5,[i])};return t.value=n,t.attached=V0(),t}function G0(n,e){if(ke(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const bf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,W0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?L0(n,i,o):e==="style"?U0(n,t,i):al(e)?$u(e)||B0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):X0(n,e,i,o))?(yf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xf(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ct(i))?yf(n,Mn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),xf(n,e,i,o))};function X0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&bf(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return bf(e)&&Ct(t)?!1:e in n}const jm=new WeakMap,qm=new WeakMap,Qa=Symbol("_moveCb"),Ef=Symbol("_enterCb"),$0=n=>(delete n.props.mode,n),j0=$0({name:"TransitionGroup",props:Rt({},w0,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=Hm(),i=Sv();let s,r;return pm(()=>{if(!s.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!J0(s[0].el,t.vnode.el,o))return;s.forEach(K0),s.forEach(Y0);const a=s.filter(Z0);jc(),a.forEach(l=>{const c=l.el,u=c.style;ei(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c[Qa]=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",h),c[Qa]=null,Zi(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=tt(n),a=R0(o);let l=o.tag||st;if(s=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&(s.push(u),Po(u,kc(u,a,i,t)),jm.set(u,u.el.getBoundingClientRect()))}r=e.default?um(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Po(u,kc(u,a,i,t))}return Lt(l,null,r)}}}),q0=j0;function K0(n){const e=n.el;e[Qa]&&e[Qa](),e[Ef]&&e[Ef]()}function Y0(n){qm.set(n,n.el.getBoundingClientRect())}function Z0(n){const e=jm.get(n),t=qm.get(n),i=e.left-t.left,s=e.top-t.top;if(i||s){const r=n.el.style;return r.transform=r.webkitTransform=`translate(${i}px,${s}px)`,r.transitionDuration="0s",n}}function J0(n,e,t){const i=n.cloneNode(),s=n[Ar];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),t.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:o}=$m(i);return r.removeChild(i),o}const wr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ke(e)?t=>Ia(e,t):e};function Q0(n){n.target.composing=!0}function Tf(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ii=Symbol("_assign"),nn={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Ii]=wr(s);const r=i||s.props&&s.props.type==="number";ns(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=Wa(a)),n[Ii](a)}),t&&ns(n,"change",()=>{n.value=n.value.trim()}),e||(ns(n,"compositionstart",Q0),ns(n,"compositionend",Tf),ns(n,"change",Tf))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Ii]=wr(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Wa(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},ex={deep:!0,created(n,e,t){n[Ii]=wr(t),ns(n,"change",()=>{const i=n._modelValue,s=No(n),r=n.checked,o=n[Ii];if(ke(i)){const a=Ku(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Vr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Km(n,r))})},mounted:Af,beforeUpdate(n,e,t){n[Ii]=wr(t),Af(n,e,t)}};function Af(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(ke(e))s=Ku(e,i.props.value)>-1;else if(Vr(e))s=e.has(i.props.value);else{if(e===t)return;s=Go(e,Km(n,!0))}n.checked!==s&&(n.checked=s)}const tx={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=Vr(e);ns(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Wa(No(o)):No(o));n[Ii](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,Gr(()=>{n._assigning=!1})}),n[Ii]=wr(i)},mounted(n,{value:e}){wf(n,e)},beforeUpdate(n,e,t){n[Ii]=wr(t)},updated(n,{value:e}){n._assigning||wf(n,e)}};function wf(n,e){const t=n.multiple,i=ke(e);if(!(t&&!i&&!Vr(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=No(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Ku(e,a)>-1}else o.selected=e.has(a);else if(Go(No(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function No(n){return"_value"in n?n._value:n.value}function Km(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const nx=["ctrl","shift","alt","meta"],ix={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>nx.some(t=>n[`${t}Key`]&&!e.includes(t))},sx=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=ix[e[o]];if(a&&a(s,e))return}return n(s,...r)})},rx=Rt({patchProp:W0},A0);let Rf;function ox(){return Rf||(Rf=Yv(rx))}const Ym=(...n)=>{const e=ox().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=lx(i);if(!s)return;const r=e._component;!Xe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,ax(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ax(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function lx(n){return Ct(n)?document.querySelector(n):n}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const mr=typeof document<"u";function Zm(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function cx(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Zm(n.default)}const ft=Object.assign;function Wl(n,e){const t={};for(const i in e){const s=e[i];t[i]=Kn(s)?s.map(n):n(s)}return t}const yo=()=>{},Kn=Array.isArray,Jm=/#/g,ux=/&/g,hx=/\//g,fx=/=/g,dx=/\?/g,Qm=/\+/g,px=/%5B/g,mx=/%5D/g,eg=/%5E/g,gx=/%60/g,tg=/%7B/g,_x=/%7C/g,ng=/%7D/g,vx=/%20/g;function ch(n){return encodeURI(""+n).replace(_x,"|").replace(px,"[").replace(mx,"]")}function xx(n){return ch(n).replace(tg,"{").replace(ng,"}").replace(eg,"^")}function qc(n){return ch(n).replace(Qm,"%2B").replace(vx,"+").replace(Jm,"%23").replace(ux,"%26").replace(gx,"`").replace(tg,"{").replace(ng,"}").replace(eg,"^")}function yx(n){return qc(n).replace(fx,"%3D")}function Sx(n){return ch(n).replace(Jm,"%23").replace(dx,"%3F")}function Mx(n){return n==null?"":Sx(n).replace(hx,"%2F")}function Uo(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const bx=/\/$/,Ex=n=>n.replace(bx,"");function Xl(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Rx(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Uo(o)}}function Tx(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Cf(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Ax(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Rr(e.matched[i],t.matched[s])&&ig(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Rr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function ig(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!wx(n[t],e[t]))return!1;return!0}function wx(n,e){return Kn(n)?Pf(n,e):Kn(e)?Pf(e,n):n===e}function Pf(n,e){return Kn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Rx(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Gi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Oo;(function(n){n.pop="pop",n.push="push"})(Oo||(Oo={}));var So;(function(n){n.back="back",n.forward="forward",n.unknown=""})(So||(So={}));function Cx(n){if(!n)if(mr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Ex(n)}const Px=/^[^#]+#/;function Lx(n,e){return n.replace(Px,"#")+e}function Ix(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const xl=()=>({left:window.scrollX,top:window.scrollY});function Dx(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Ix(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Lf(n,e){return(history.state?history.state.position-e:-1)+n}const Kc=new Map;function Nx(n,e){Kc.set(n,e)}function Ux(n){const e=Kc.get(n);return Kc.delete(n),e}let Ox=()=>location.protocol+"//"+location.host;function sg(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Cf(l,"")}return Cf(t,n)+i+s}function Fx(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=sg(n,location),g=t.value,_=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===g){o=null;return}m=_?f.position-_.position:0}else i(d);s.forEach(p=>{p(t.value,g,{delta:m,type:Oo.pop,direction:m?m>0?So.forward:So.back:So.unknown})})};function l(){o=t.value}function c(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(ft({},f.state,{scroll:xl()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function If(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?xl():null}}function Bx(n){const{history:e,location:t}=window,i={value:sg(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:Ox()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=ft({},e.state,If(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=ft({},s.value,e.state,{forward:l,scroll:xl()});r(u.current,u,!0);const h=ft({},If(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function kx(n){n=Cx(n);const e=Bx(n),t=Fx(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=ft({location:"",base:n,go:i,createHref:Lx.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Hx(n){return typeof n=="string"||n&&typeof n=="object"}function rg(n){return typeof n=="string"||typeof n=="symbol"}const og=Symbol("");var Df;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Df||(Df={}));function Cr(n,e){return ft(new Error,{type:n,[og]:!0},e)}function gi(n,e){return n instanceof Error&&og in n&&(e==null||!!(n.type&e))}const Nf="[^/]+?",Vx={sensitive:!1,strict:!1,start:!0,end:!0},zx=/[.+*?^${}()[\]/\\]/g;function Gx(n,e){const t=ft({},Vx,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(zx,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=f;r.push({name:g,repeatable:_,optional:m});const T=p||Nf;if(T!==Nf){d+=10;try{new RegExp(`(${T})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${g}" (${T}): `+M.message)}}let E=_?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;h||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),s+=E,d+=20,m&&(d+=-8),_&&(d+=-20),T===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(Kn(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const T=Kn(p)?p.join("/"):p;if(!T)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=T}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Wx(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ag(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=Wx(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Uf(i))return 1;if(Uf(s))return-1}return s.length-i.length}function Uf(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Xx={type:0,value:""},$x=/[a-zA-Z0-9_]/;function jx(n){if(!n)return[[]];if(n==="/")return[[Xx]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:$x.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function qx(n,e,t){const i=Gx(jx(n.path),t),s=ft(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Kx(n,e){const t=[],i=new Map;e=kf({strict:!1,end:!0,sensitive:!1},e);function s(h){return i.get(h)}function r(h,f,d){const g=!d,_=Ff(h);_.aliasOf=d&&d.record;const m=kf(e,h),p=[_];if("alias"in h){const M=typeof h.alias=="string"?[h.alias]:h.alias;for(const O of M)p.push(Ff(ft({},_,{components:d?d.record.components:_.components,path:O,aliasOf:d?d.record:_})))}let T,E;for(const M of p){const{path:O}=M;if(f&&O[0]!=="/"){const D=f.record.path,I=D[D.length-1]==="/"?"":"/";M.path=f.record.path+(O&&I+O)}if(T=qx(M,f,m),d?d.alias.push(T):(E=E||T,E!==T&&E.alias.push(T),g&&h.name&&!Bf(T)&&o(h.name)),lg(T)&&l(T),_.children){const D=_.children;for(let I=0;I<D.length;I++)r(D[I],T,d&&d.children[I])}d=d||T}return E?()=>{o(E)}:yo}function o(h){if(rg(h)){const f=i.get(h);f&&(i.delete(h),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(h);f>-1&&(t.splice(f,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return t}function l(h){const f=Jx(h,t);t.splice(f,0,h),h.record.name&&!Bf(h)&&i.set(h.record.name,h)}function c(h,f){let d,g={},_,m;if("name"in h&&h.name){if(d=i.get(h.name),!d)throw Cr(1,{location:h});m=d.record.name,g=ft(Of(f.params,d.keys.filter(E=>!E.optional).concat(d.parent?d.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),h.params&&Of(h.params,d.keys.map(E=>E.name))),_=d.stringify(g)}else if(h.path!=null)_=h.path,d=t.find(E=>E.re.test(_)),d&&(g=d.parse(_),m=d.record.name);else{if(d=f.name?i.get(f.name):t.find(E=>E.re.test(f.path)),!d)throw Cr(1,{location:h,currentLocation:f});m=d.record.name,g=ft({},f.params,h.params),_=d.stringify(g)}const p=[];let T=d;for(;T;)p.unshift(T.record),T=T.parent;return{name:m,path:_,params:g,matched:p,meta:Zx(p)}}n.forEach(h=>r(h));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Of(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Ff(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Yx(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Yx(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Bf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Zx(n){return n.reduce((e,t)=>ft(e,t.meta),{})}function kf(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Jx(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;ag(n,e[r])<0?i=r:t=r+1}const s=Qx(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function Qx(n){let e=n;for(;e=e.parent;)if(lg(e)&&ag(n,e)===0)return e}function lg({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function ey(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Qm," "),o=r.indexOf("="),a=Uo(o<0?r:r.slice(0,o)),l=o<0?null:Uo(r.slice(o+1));if(a in e){let c=e[a];Kn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Hf(n){let e="";for(let t in n){const i=n[t];if(t=yx(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Kn(i)?i.map(r=>r&&qc(r)):[i&&qc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function ty(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Kn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const ny=Symbol(""),Vf=Symbol(""),yl=Symbol(""),uh=Symbol(""),Yc=Symbol("");function Zr(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ts(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Cr(4,{from:t,to:e})):f instanceof Error?l(f):Hx(f)?l(Cr(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function $l(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Zm(l)){const u=(l.__vccOpts||l)[e];u&&r.push(ts(u,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=cx(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&ts(d,t,i,o,a,s)()}))}}return r}function zf(n){const e=In(yl),t=In(uh),i=_t(()=>{const l=Te(n.to);return e.resolve(l)}),s=_t(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(Rr.bind(null,u));if(f>-1)return f;const d=Gf(l[c-2]);return c>1&&Gf(u)===d&&h[h.length-1].path!==d?h.findIndex(Rr.bind(null,l[c-2])):f}),r=_t(()=>s.value>-1&&oy(t.params,i.value.params)),o=_t(()=>s.value>-1&&s.value===t.matched.length-1&&ig(t.params,i.value.params));function a(l={}){return ry(l)?e[Te(n.replace)?"replace":"push"](Te(n.to)).catch(yo):Promise.resolve()}return{route:i,href:_t(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const iy=It({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zf,setup(n,{slots:e}){const t=ps(zf(n)),{options:i}=In(yl),s=_t(()=>({[Wf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Wf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:Gm("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),sy=iy;function ry(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function oy(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Kn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Gf(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Wf=(n,e,t)=>n??e??t,ay=It({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=In(Yc),s=_t(()=>n.route||i.value),r=In(Vf,0),o=_t(()=>{let c=Te(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=_t(()=>s.value.matched[o.value]);Da(Vf,_t(()=>o.value+1)),Da(ny,a),Da(Yc,s);const l=ot();return Rn(()=>[l.value,a.value,n.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Rr(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return Xf(t.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Gm(f,ft({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Xf(t.default,{Component:m,route:c})||m}}});function Xf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const cg=ay;function ly(n){const e=Kx(n.routes,n),t=n.parseQuery||ey,i=n.stringifyQuery||Hf,s=n.history,r=Zr(),o=Zr(),a=Zr(),l=iv(Gi);let c=Gi;mr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Wl.bind(null,k=>""+k),h=Wl.bind(null,Mx),f=Wl.bind(null,Uo);function d(k,ce){let oe,de;return rg(k)?(oe=e.getRecordMatcher(k),de=ce):de=k,e.addRoute(de,oe)}function g(k){const ce=e.getRecordMatcher(k);ce&&e.removeRoute(ce)}function _(){return e.getRoutes().map(k=>k.record)}function m(k){return!!e.getRecordMatcher(k)}function p(k,ce){if(ce=ft({},ce||l.value),typeof k=="string"){const S=Xl(t,k,ce.path),X=e.resolve({path:S.path},ce),te=s.createHref(S.fullPath);return ft(S,X,{params:f(X.params),hash:Uo(S.hash),redirectedFrom:void 0,href:te})}let oe;if(k.path!=null)oe=ft({},k,{path:Xl(t,k.path,ce.path).path});else{const S=ft({},k.params);for(const X in S)S[X]==null&&delete S[X];oe=ft({},k,{params:h(S)}),ce.params=h(ce.params)}const de=e.resolve(oe,ce),Fe=k.hash||"";de.params=u(f(de.params));const Ie=Tx(i,ft({},k,{hash:xx(Fe),path:de.path})),w=s.createHref(Ie);return ft({fullPath:Ie,hash:Fe,query:i===Hf?ty(k.query):k.query||{}},de,{redirectedFrom:void 0,href:w})}function T(k){return typeof k=="string"?Xl(t,k,l.value.path):ft({},k)}function E(k,ce){if(c!==k)return Cr(8,{from:ce,to:k})}function M(k){return I(k)}function O(k){return M(ft(T(k),{replace:!0}))}function D(k){const ce=k.matched[k.matched.length-1];if(ce&&ce.redirect){const{redirect:oe}=ce;let de=typeof oe=="function"?oe(k):oe;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=T(de):{path:de},de.params={}),ft({query:k.query,hash:k.hash,params:de.path!=null?{}:k.params},de)}}function I(k,ce){const oe=c=p(k),de=l.value,Fe=k.state,Ie=k.force,w=k.replace===!0,S=D(oe);if(S)return I(ft(T(S),{state:typeof S=="object"?ft({},Fe,S.state):Fe,force:Ie,replace:w}),ce||oe);const X=oe;X.redirectedFrom=ce;let te;return!Ie&&Ax(i,de,oe)&&(te=Cr(16,{to:X,from:de}),Re(de,de,!0,!1)),(te?Promise.resolve(te):x(X,de)).catch($=>gi($)?gi($,2)?$:ye($):W($,X,de)).then($=>{if($){if(gi($,2))return I(ft({replace:w},T($.to),{state:typeof $.to=="object"?ft({},Fe,$.to.state):Fe,force:Ie}),ce||X)}else $=N(X,de,!0,w,Fe);return C(X,de,$),$})}function P(k,ce){const oe=E(k,ce);return oe?Promise.reject(oe):Promise.resolve()}function v(k){const ce=se.values().next().value;return ce&&typeof ce.runWithContext=="function"?ce.runWithContext(k):k()}function x(k,ce){let oe;const[de,Fe,Ie]=cy(k,ce);oe=$l(de.reverse(),"beforeRouteLeave",k,ce);for(const S of de)S.leaveGuards.forEach(X=>{oe.push(ts(X,k,ce))});const w=P.bind(null,k,ce);return oe.push(w),be(oe).then(()=>{oe=[];for(const S of r.list())oe.push(ts(S,k,ce));return oe.push(w),be(oe)}).then(()=>{oe=$l(Fe,"beforeRouteUpdate",k,ce);for(const S of Fe)S.updateGuards.forEach(X=>{oe.push(ts(X,k,ce))});return oe.push(w),be(oe)}).then(()=>{oe=[];for(const S of Ie)if(S.beforeEnter)if(Kn(S.beforeEnter))for(const X of S.beforeEnter)oe.push(ts(X,k,ce));else oe.push(ts(S.beforeEnter,k,ce));return oe.push(w),be(oe)}).then(()=>(k.matched.forEach(S=>S.enterCallbacks={}),oe=$l(Ie,"beforeRouteEnter",k,ce,v),oe.push(w),be(oe))).then(()=>{oe=[];for(const S of o.list())oe.push(ts(S,k,ce));return oe.push(w),be(oe)}).catch(S=>gi(S,8)?S:Promise.reject(S))}function C(k,ce,oe){a.list().forEach(de=>v(()=>de(k,ce,oe)))}function N(k,ce,oe,de,Fe){const Ie=E(k,ce);if(Ie)return Ie;const w=ce===Gi,S=mr?history.state:{};oe&&(de||w?s.replace(k.fullPath,ft({scroll:w&&S&&S.scroll},Fe)):s.push(k.fullPath,Fe)),l.value=k,Re(k,ce,oe,w),ye()}let H;function J(){H||(H=s.listen((k,ce,oe)=>{if(!pe.listening)return;const de=p(k),Fe=D(de);if(Fe){I(ft(Fe,{replace:!0}),de).catch(yo);return}c=de;const Ie=l.value;mr&&Nx(Lf(Ie.fullPath,oe.delta),xl()),x(de,Ie).catch(w=>gi(w,12)?w:gi(w,2)?(I(w.to,de).then(S=>{gi(S,20)&&!oe.delta&&oe.type===Oo.pop&&s.go(-1,!1)}).catch(yo),Promise.reject()):(oe.delta&&s.go(-oe.delta,!1),W(w,de,Ie))).then(w=>{w=w||N(de,Ie,!1),w&&(oe.delta&&!gi(w,8)?s.go(-oe.delta,!1):oe.type===Oo.pop&&gi(w,20)&&s.go(-1,!1)),C(de,Ie,w)}).catch(yo)}))}let ae=Zr(),j=Zr(),ee;function W(k,ce,oe){ye(k);const de=j.list();return de.length?de.forEach(Fe=>Fe(k,ce,oe)):console.error(k),Promise.reject(k)}function ge(){return ee&&l.value!==Gi?Promise.resolve():new Promise((k,ce)=>{ae.add([k,ce])})}function ye(k){return ee||(ee=!k,J(),ae.list().forEach(([ce,oe])=>k?oe(k):ce()),ae.reset()),k}function Re(k,ce,oe,de){const{scrollBehavior:Fe}=n;if(!mr||!Fe)return Promise.resolve();const Ie=!oe&&Ux(Lf(k.fullPath,0))||(de||!oe)&&history.state&&history.state.scroll||null;return Gr().then(()=>Fe(k,ce,Ie)).then(w=>w&&Dx(w)).catch(w=>W(w,k,ce))}const Oe=k=>s.go(k);let Qe;const se=new Set,pe={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:M,replace:O,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:j.add,isReady:ge,install(k){const ce=this;k.component("RouterLink",sy),k.component("RouterView",cg),k.config.globalProperties.$router=ce,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Te(l)}),mr&&!Qe&&l.value===Gi&&(Qe=!0,M(s.location).catch(Fe=>{}));const oe={};for(const Fe in Gi)Object.defineProperty(oe,Fe,{get:()=>l.value[Fe],enumerable:!0});k.provide(yl,ce),k.provide(uh,em(oe)),k.provide(Yc,l);const de=k.unmount;se.add(k),k.unmount=function(){se.delete(k),se.size<1&&(c=Gi,H&&H(),H=null,l.value=Gi,Qe=!1,ee=!1),de()}}};function be(k){return k.reduce((ce,oe)=>ce.then(()=>v(oe)),Promise.resolve())}return pe}function cy(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>Rr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Rr(c,l))||s.push(l))}return[t,i,s]}function hh(){return In(yl)}function fh(n){return In(uh)}const uy=It({__name:"App",setup(n){return(e,t)=>(xe(),Pe(st,null,[t[0]||(t[0]=q("header",null,[q("div",{class:"wrapper"})],-1)),Lt(Te(cg))],64))}}),el="/assets/BackgroundVideo-CO4KmXC1.mp4";var hy=!1;/*!
 * pinia v2.2.6
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let ug;const Sl=n=>ug=n,hg=Symbol();function Zc(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Mo;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Mo||(Mo={}));function fy(){const n=Bp(!0),e=n.run(()=>ot({}));let t=[],i=[];const s=nh({install(r){Sl(s),s._a=r,r.provide(hg,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return!this._a&&!hy?i.push(r):t.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const fg=()=>{};function $f(n,e,t,i=fg){n.push(e);const s=()=>{const r=n.indexOf(e);r>-1&&(n.splice(r,1),i())};return!t&&kp()&&F_(s),s}function Ks(n,...e){n.slice().forEach(t=>{t(...e)})}const dy=n=>n(),jf=Symbol(),jl=Symbol();function Jc(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],s=n[t];Zc(s)&&Zc(i)&&n.hasOwnProperty(t)&&!wt(i)&&!Li(i)?n[t]=Jc(s,i):n[t]=i}return n}const py=Symbol();function my(n){return!Zc(n)||!n.hasOwnProperty(py)}const{assign:Ji}=Object;function gy(n){return!!(wt(n)&&n.effect)}function _y(n,e,t,i){const{state:s,actions:r,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=s?s():{});const u=lv(t.state.value[n]);return Ji(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=nh(_t(()=>{Sl(t);const d=t._s.get(n);return o[f].call(d,d)})),h),{}))}return l=dg(n,c,e,t,i,!0),l}function dg(n,e,t={},i,s,r){let o;const a=Ji({actions:{}},t),l={deep:!0};let c,u,h=[],f=[],d;const g=i.state.value[n];!r&&!g&&(i.state.value[n]={}),ot({});let _;function m(P){let v;c=u=!1,typeof P=="function"?(P(i.state.value[n]),v={type:Mo.patchFunction,storeId:n,events:d}):(Jc(i.state.value[n],P),v={type:Mo.patchObject,payload:P,storeId:n,events:d});const x=_=Symbol();Gr().then(()=>{_===x&&(c=!0)}),u=!0,Ks(h,v,i.state.value[n])}const p=r?function(){const{state:v}=t,x=v?v():{};this.$patch(C=>{Ji(C,x)})}:fg;function T(){o.stop(),h=[],f=[],i._s.delete(n)}const E=(P,v="")=>{if(jf in P)return P[jl]=v,P;const x=function(){Sl(i);const C=Array.from(arguments),N=[],H=[];function J(ee){N.push(ee)}function ae(ee){H.push(ee)}Ks(f,{args:C,name:x[jl],store:O,after:J,onError:ae});let j;try{j=P.apply(this&&this.$id===n?this:O,C)}catch(ee){throw Ks(H,ee),ee}return j instanceof Promise?j.then(ee=>(Ks(N,ee),ee)).catch(ee=>(Ks(H,ee),Promise.reject(ee))):(Ks(N,j),j)};return x[jf]=!0,x[jl]=v,x},M={_p:i,$id:n,$onAction:$f.bind(null,f),$patch:m,$reset:p,$subscribe(P,v={}){const x=$f(h,P,v.detached,()=>C()),C=o.run(()=>Rn(()=>i.state.value[n],N=>{(v.flush==="sync"?u:c)&&P({storeId:n,type:Mo.direct,events:d},N)},Ji({},l,v)));return x},$dispose:T},O=ps(M);i._s.set(n,O);const I=(i._a&&i._a.runWithContext||dy)(()=>i._e.run(()=>(o=Bp()).run(()=>e({action:E}))));for(const P in I){const v=I[P];if(wt(v)&&!gy(v)||Li(v))r||(g&&my(v)&&(wt(v)?v.value=g[P]:Jc(v,g[P])),i.state.value[n][P]=v);else if(typeof v=="function"){const x=E(v,P);I[P]=x,a.actions[P]=v}}return Ji(O,I),Ji(tt(O),I),Object.defineProperty(O,"$state",{get:()=>i.state.value[n],set:P=>{m(v=>{Ji(v,P)})}}),i._p.forEach(P=>{Ji(O,o.run(()=>P({store:O,app:i._a,pinia:i,options:a})))}),g&&r&&t.hydrate&&t.hydrate(O.$state,g),c=!0,u=!0,O}/*! #__NO_SIDE_EFFECTS__ */function dh(n,e,t){let i,s;const r=typeof e=="function";typeof n=="string"?(i=n,s=r?t:e):(s=n,i=n.id);function o(a,l){const c=Gv();return a=a||(c?In(hg,null):null),a&&Sl(a),a=ug,a._s.has(i)||(r?dg(i,e,s,a):_y(i,s,a)),a._s.get(i)}return o.$id=i,o}function vy(n){{const e=tt(n),t={};for(const i in e){const s=e[i];(wt(s)||Li(s))&&(t[i]=hv(n,i))}return t}}var is=(n=>(n[n.NEW_GAME=0]="NEW_GAME",n[n.JOIN_GAME=1]="JOIN_GAME",n[n.SELECT_MAP=2]="SELECT_MAP",n))(is||{});const lo={LF:`
`,NULL:"\0"};class ss{constructor(e){const{command:t,headers:i,body:s,binaryBody:r,escapeHeaderValues:o,skipContentLengthHeader:a}=e;this.command=t,this.headers=Object.assign({},i||{}),r?(this._binaryBody=r,this.isBinaryBody=!0):(this._body=s||"",this.isBinaryBody=!1),this.escapeHeaderValues=o||!1,this.skipContentLengthHeader=a||!1}get body(){return!this._body&&this.isBinaryBody&&(this._body=new TextDecoder().decode(this._binaryBody)),this._body||""}get binaryBody(){return!this._binaryBody&&!this.isBinaryBody&&(this._binaryBody=new TextEncoder().encode(this._body)),this._binaryBody}static fromRawFrame(e,t){const i={},s=r=>r.replace(/^\s+|\s+$/g,"");for(const r of e.headers.reverse()){r.indexOf(":");const o=s(r[0]);let a=s(r[1]);t&&e.command!=="CONNECT"&&e.command!=="CONNECTED"&&(a=ss.hdrValueUnEscape(a)),i[o]=a}return new ss({command:e.command,headers:i,binaryBody:e.binaryBody,escapeHeaderValues:t})}toString(){return this.serializeCmdAndHeaders()}serialize(){const e=this.serializeCmdAndHeaders();return this.isBinaryBody?ss.toUnit8Array(e,this._binaryBody).buffer:e+this._body+lo.NULL}serializeCmdAndHeaders(){const e=[this.command];this.skipContentLengthHeader&&delete this.headers["content-length"];for(const t of Object.keys(this.headers||{})){const i=this.headers[t];this.escapeHeaderValues&&this.command!=="CONNECT"&&this.command!=="CONNECTED"?e.push(`${t}:${ss.hdrValueEscape(`${i}`)}`):e.push(`${t}:${i}`)}return(this.isBinaryBody||!this.isBodyEmpty()&&!this.skipContentLengthHeader)&&e.push(`content-length:${this.bodyLength()}`),e.join(lo.LF)+lo.LF+lo.LF}isBodyEmpty(){return this.bodyLength()===0}bodyLength(){const e=this.binaryBody;return e?e.length:0}static sizeOfUTF8(e){return e?new TextEncoder().encode(e).length:0}static toUnit8Array(e,t){const i=new TextEncoder().encode(e),s=new Uint8Array([0]),r=new Uint8Array(i.length+t.length+s.length);return r.set(i),r.set(t,i.length),r.set(s,i.length+t.length),r}static marshall(e){return new ss(e).serialize()}static hdrValueEscape(e){return e.replace(/\\/g,"\\\\").replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/:/g,"\\c")}static hdrValueUnEscape(e){return e.replace(/\\r/g,"\r").replace(/\\n/g,`
`).replace(/\\c/g,":").replace(/\\\\/g,"\\")}}const qf=0,ta=10,na=13,xy=58;class yy{constructor(e,t){this.onFrame=e,this.onIncomingPing=t,this._encoder=new TextEncoder,this._decoder=new TextDecoder,this._token=[],this._initState()}parseChunk(e,t=!1){let i;if(typeof e=="string"?i=this._encoder.encode(e):i=new Uint8Array(e),t&&i[i.length-1]!==0){const s=new Uint8Array(i.length+1);s.set(i,0),s[i.length]=0,i=s}for(let s=0;s<i.length;s++){const r=i[s];this._onByte(r)}}_collectFrame(e){if(e!==qf&&e!==na){if(e===ta){this.onIncomingPing();return}this._onByte=this._collectCommand,this._reinjectByte(e)}}_collectCommand(e){if(e!==na){if(e===ta){this._results.command=this._consumeTokenAsUTF8(),this._onByte=this._collectHeaders;return}this._consumeByte(e)}}_collectHeaders(e){if(e!==na){if(e===ta){this._setupCollectBody();return}this._onByte=this._collectHeaderKey,this._reinjectByte(e)}}_reinjectByte(e){this._onByte(e)}_collectHeaderKey(e){if(e===xy){this._headerKey=this._consumeTokenAsUTF8(),this._onByte=this._collectHeaderValue;return}this._consumeByte(e)}_collectHeaderValue(e){if(e!==na){if(e===ta){this._results.headers.push([this._headerKey,this._consumeTokenAsUTF8()]),this._headerKey=void 0,this._onByte=this._collectHeaders;return}this._consumeByte(e)}}_setupCollectBody(){const e=this._results.headers.filter(t=>t[0]==="content-length")[0];e?(this._bodyBytesRemaining=parseInt(e[1],10),this._onByte=this._collectBodyFixedSize):this._onByte=this._collectBodyNullTerminated}_collectBodyNullTerminated(e){if(e===qf){this._retrievedBody();return}this._consumeByte(e)}_collectBodyFixedSize(e){if(this._bodyBytesRemaining--===0){this._retrievedBody();return}this._consumeByte(e)}_retrievedBody(){this._results.binaryBody=this._consumeTokenAsRaw();try{this.onFrame(this._results)}catch(e){console.log("Ignoring an exception thrown by a frame handler. Original exception: ",e)}this._initState()}_consumeByte(e){this._token.push(e)}_consumeTokenAsUTF8(){return this._decoder.decode(this._consumeTokenAsRaw())}_consumeTokenAsRaw(){const e=new Uint8Array(this._token);return this._token=[],e}_initState(){this._results={command:void 0,headers:[],binaryBody:void 0},this._token=[],this._headerKey=void 0,this._onByte=this._collectFrame}}var Ri;(function(n){n[n.CONNECTING=0]="CONNECTING",n[n.OPEN=1]="OPEN",n[n.CLOSING=2]="CLOSING",n[n.CLOSED=3]="CLOSED"})(Ri=Ri||(Ri={}));var An;(function(n){n[n.ACTIVE=0]="ACTIVE",n[n.DEACTIVATING=1]="DEACTIVATING",n[n.INACTIVE=2]="INACTIVE"})(An=An||(An={}));class en{constructor(e){this.versions=e}supportedVersions(){return this.versions.join(",")}protocolVersions(){return this.versions.map(e=>`v${e.replace(".","")}.stomp`)}}en.V1_0="1.0";en.V1_1="1.1";en.V1_2="1.2";en.default=new en([en.V1_2,en.V1_1,en.V1_0]);function Sy(n,e){n.terminate=function(){const t=()=>{};this.onerror=t,this.onmessage=t,this.onopen=t;const i=new Date,s=Math.random().toString().substring(2,8),r=this.onclose;this.onclose=o=>{const a=new Date().getTime()-i.getTime();e(`Discarded socket (#${s})  closed after ${a}ms, with code/reason: ${o.code}/${o.reason}`)},this.close(),r==null||r.call(n,{code:4001,reason:`Quick discarding socket (#${s}) without waiting for the shutdown sequence.`,wasClean:!1})}}class My{constructor(e,t,i){this._client=e,this._webSocket=t,this._connected=!1,this._serverFrameHandlers={CONNECTED:s=>{this.debug(`connected to server ${s.headers.server}`),this._connected=!0,this._connectedVersion=s.headers.version,this._connectedVersion===en.V1_2&&(this._escapeHeaderValues=!0),this._setupHeartbeat(s.headers),this.onConnect(s)},MESSAGE:s=>{const r=s.headers.subscription,o=this._subscriptions[r]||this.onUnhandledMessage,a=s,l=this,c=this._connectedVersion===en.V1_2?a.headers.ack:a.headers["message-id"];a.ack=(u={})=>l.ack(c,r,u),a.nack=(u={})=>l.nack(c,r,u),o(a)},RECEIPT:s=>{const r=this._receiptWatchers[s.headers["receipt-id"]];r?(r(s),delete this._receiptWatchers[s.headers["receipt-id"]]):this.onUnhandledReceipt(s)},ERROR:s=>{this.onStompError(s)}},this._counter=0,this._subscriptions={},this._receiptWatchers={},this._partialData="",this._escapeHeaderValues=!1,this._lastServerActivityTS=Date.now(),this.debug=i.debug,this.stompVersions=i.stompVersions,this.connectHeaders=i.connectHeaders,this.disconnectHeaders=i.disconnectHeaders,this.heartbeatIncoming=i.heartbeatIncoming,this.heartbeatOutgoing=i.heartbeatOutgoing,this.splitLargeFrames=i.splitLargeFrames,this.maxWebSocketChunkSize=i.maxWebSocketChunkSize,this.forceBinaryWSFrames=i.forceBinaryWSFrames,this.logRawCommunication=i.logRawCommunication,this.appendMissingNULLonIncoming=i.appendMissingNULLonIncoming,this.discardWebsocketOnCommFailure=i.discardWebsocketOnCommFailure,this.onConnect=i.onConnect,this.onDisconnect=i.onDisconnect,this.onStompError=i.onStompError,this.onWebSocketClose=i.onWebSocketClose,this.onWebSocketError=i.onWebSocketError,this.onUnhandledMessage=i.onUnhandledMessage,this.onUnhandledReceipt=i.onUnhandledReceipt,this.onUnhandledFrame=i.onUnhandledFrame}get connectedVersion(){return this._connectedVersion}get connected(){return this._connected}start(){const e=new yy(t=>{const i=ss.fromRawFrame(t,this._escapeHeaderValues);this.logRawCommunication||this.debug(`<<< ${i}`),(this._serverFrameHandlers[i.command]||this.onUnhandledFrame)(i)},()=>{this.debug("<<< PONG")});this._webSocket.onmessage=t=>{if(this.debug("Received data"),this._lastServerActivityTS=Date.now(),this.logRawCommunication){const i=t.data instanceof ArrayBuffer?new TextDecoder().decode(t.data):t.data;this.debug(`<<< ${i}`)}e.parseChunk(t.data,this.appendMissingNULLonIncoming)},this._webSocket.onclose=t=>{this.debug(`Connection closed to ${this._webSocket.url}`),this._cleanUp(),this.onWebSocketClose(t)},this._webSocket.onerror=t=>{this.onWebSocketError(t)},this._webSocket.onopen=()=>{const t=Object.assign({},this.connectHeaders);this.debug("Web Socket Opened..."),t["accept-version"]=this.stompVersions.supportedVersions(),t["heart-beat"]=[this.heartbeatOutgoing,this.heartbeatIncoming].join(","),this._transmit({command:"CONNECT",headers:t})}}_setupHeartbeat(e){if(e.version!==en.V1_1&&e.version!==en.V1_2||!e["heart-beat"])return;const[t,i]=e["heart-beat"].split(",").map(s=>parseInt(s,10));if(this.heartbeatOutgoing!==0&&i!==0){const s=Math.max(this.heartbeatOutgoing,i);this.debug(`send PING every ${s}ms`),this._pinger=setInterval(()=>{this._webSocket.readyState===Ri.OPEN&&(this._webSocket.send(lo.LF),this.debug(">>> PING"))},s)}if(this.heartbeatIncoming!==0&&t!==0){const s=Math.max(this.heartbeatIncoming,t);this.debug(`check PONG every ${s}ms`),this._ponger=setInterval(()=>{const r=Date.now()-this._lastServerActivityTS;r>s*2&&(this.debug(`did not receive server activity for the last ${r}ms`),this._closeOrDiscardWebsocket())},s)}}_closeOrDiscardWebsocket(){this.discardWebsocketOnCommFailure?(this.debug("Discarding websocket, the underlying socket may linger for a while"),this.discardWebsocket()):(this.debug("Issuing close on the websocket"),this._closeWebsocket())}forceDisconnect(){this._webSocket&&(this._webSocket.readyState===Ri.CONNECTING||this._webSocket.readyState===Ri.OPEN)&&this._closeOrDiscardWebsocket()}_closeWebsocket(){this._webSocket.onmessage=()=>{},this._webSocket.close()}discardWebsocket(){typeof this._webSocket.terminate!="function"&&Sy(this._webSocket,e=>this.debug(e)),this._webSocket.terminate()}_transmit(e){const{command:t,headers:i,body:s,binaryBody:r,skipContentLengthHeader:o}=e,a=new ss({command:t,headers:i,body:s,binaryBody:r,escapeHeaderValues:this._escapeHeaderValues,skipContentLengthHeader:o});let l=a.serialize();if(this.logRawCommunication?this.debug(`>>> ${l}`):this.debug(`>>> ${a}`),this.forceBinaryWSFrames&&typeof l=="string"&&(l=new TextEncoder().encode(l)),typeof l!="string"||!this.splitLargeFrames)this._webSocket.send(l);else{let c=l;for(;c.length>0;){const u=c.substring(0,this.maxWebSocketChunkSize);c=c.substring(this.maxWebSocketChunkSize),this._webSocket.send(u),this.debug(`chunk sent = ${u.length}, remaining = ${c.length}`)}}}dispose(){if(this.connected)try{const e=Object.assign({},this.disconnectHeaders);e.receipt||(e.receipt=`close-${this._counter++}`),this.watchForReceipt(e.receipt,t=>{this._closeWebsocket(),this._cleanUp(),this.onDisconnect(t)}),this._transmit({command:"DISCONNECT",headers:e})}catch(e){this.debug(`Ignoring error during disconnect ${e}`)}else(this._webSocket.readyState===Ri.CONNECTING||this._webSocket.readyState===Ri.OPEN)&&this._closeWebsocket()}_cleanUp(){this._connected=!1,this._pinger&&(clearInterval(this._pinger),this._pinger=void 0),this._ponger&&(clearInterval(this._ponger),this._ponger=void 0)}publish(e){const{destination:t,headers:i,body:s,binaryBody:r,skipContentLengthHeader:o}=e,a=Object.assign({destination:t},i);this._transmit({command:"SEND",headers:a,body:s,binaryBody:r,skipContentLengthHeader:o})}watchForReceipt(e,t){this._receiptWatchers[e]=t}subscribe(e,t,i={}){i=Object.assign({},i),i.id||(i.id=`sub-${this._counter++}`),i.destination=e,this._subscriptions[i.id]=t,this._transmit({command:"SUBSCRIBE",headers:i});const s=this;return{id:i.id,unsubscribe(r){return s.unsubscribe(i.id,r)}}}unsubscribe(e,t={}){t=Object.assign({},t),delete this._subscriptions[e],t.id=e,this._transmit({command:"UNSUBSCRIBE",headers:t})}begin(e){const t=e||`tx-${this._counter++}`;this._transmit({command:"BEGIN",headers:{transaction:t}});const i=this;return{id:t,commit(){i.commit(t)},abort(){i.abort(t)}}}commit(e){this._transmit({command:"COMMIT",headers:{transaction:e}})}abort(e){this._transmit({command:"ABORT",headers:{transaction:e}})}ack(e,t,i={}){i=Object.assign({},i),this._connectedVersion===en.V1_2?i.id=e:i["message-id"]=e,i.subscription=t,this._transmit({command:"ACK",headers:i})}nack(e,t,i={}){return i=Object.assign({},i),this._connectedVersion===en.V1_2?i.id=e:i["message-id"]=e,i.subscription=t,this._transmit({command:"NACK",headers:i})}}class by{constructor(e={}){this.stompVersions=en.default,this.connectionTimeout=0,this.reconnectDelay=5e3,this.heartbeatIncoming=1e4,this.heartbeatOutgoing=1e4,this.splitLargeFrames=!1,this.maxWebSocketChunkSize=8*1024,this.forceBinaryWSFrames=!1,this.appendMissingNULLonIncoming=!1,this.discardWebsocketOnCommFailure=!1,this.state=An.INACTIVE;const t=()=>{};this.debug=t,this.beforeConnect=t,this.onConnect=t,this.onDisconnect=t,this.onUnhandledMessage=t,this.onUnhandledReceipt=t,this.onUnhandledFrame=t,this.onStompError=t,this.onWebSocketClose=t,this.onWebSocketError=t,this.logRawCommunication=!1,this.onChangeState=t,this.connectHeaders={},this._disconnectHeaders={},this.configure(e)}get webSocket(){var e;return(e=this._stompHandler)==null?void 0:e._webSocket}get disconnectHeaders(){return this._disconnectHeaders}set disconnectHeaders(e){this._disconnectHeaders=e,this._stompHandler&&(this._stompHandler.disconnectHeaders=this._disconnectHeaders)}get connected(){return!!this._stompHandler&&this._stompHandler.connected}get connectedVersion(){return this._stompHandler?this._stompHandler.connectedVersion:void 0}get active(){return this.state===An.ACTIVE}_changeState(e){this.state=e,this.onChangeState(e)}configure(e){Object.assign(this,e)}activate(){const e=()=>{if(this.active){this.debug("Already ACTIVE, ignoring request to activate");return}this._changeState(An.ACTIVE),this._connect()};this.state===An.DEACTIVATING?(this.debug("Waiting for deactivation to finish before activating"),this.deactivate().then(()=>{e()})):e()}async _connect(){if(await this.beforeConnect(),this._stompHandler){this.debug("There is already a stompHandler, skipping the call to connect");return}if(!this.active){this.debug("Client has been marked inactive, will not attempt to connect");return}this.connectionTimeout>0&&(this._connectionWatcher&&clearTimeout(this._connectionWatcher),this._connectionWatcher=setTimeout(()=>{this.connected||(this.debug(`Connection not established in ${this.connectionTimeout}ms, closing socket`),this.forceDisconnect())},this.connectionTimeout)),this.debug("Opening Web Socket...");const e=this._createWebSocket();this._stompHandler=new My(this,e,{debug:this.debug,stompVersions:this.stompVersions,connectHeaders:this.connectHeaders,disconnectHeaders:this._disconnectHeaders,heartbeatIncoming:this.heartbeatIncoming,heartbeatOutgoing:this.heartbeatOutgoing,splitLargeFrames:this.splitLargeFrames,maxWebSocketChunkSize:this.maxWebSocketChunkSize,forceBinaryWSFrames:this.forceBinaryWSFrames,logRawCommunication:this.logRawCommunication,appendMissingNULLonIncoming:this.appendMissingNULLonIncoming,discardWebsocketOnCommFailure:this.discardWebsocketOnCommFailure,onConnect:t=>{if(this._connectionWatcher&&(clearTimeout(this._connectionWatcher),this._connectionWatcher=void 0),!this.active){this.debug("STOMP got connected while deactivate was issued, will disconnect now"),this._disposeStompHandler();return}this.onConnect(t)},onDisconnect:t=>{this.onDisconnect(t)},onStompError:t=>{this.onStompError(t)},onWebSocketClose:t=>{this._stompHandler=void 0,this.state===An.DEACTIVATING&&this._changeState(An.INACTIVE),this.onWebSocketClose(t),this.active&&this._schedule_reconnect()},onWebSocketError:t=>{this.onWebSocketError(t)},onUnhandledMessage:t=>{this.onUnhandledMessage(t)},onUnhandledReceipt:t=>{this.onUnhandledReceipt(t)},onUnhandledFrame:t=>{this.onUnhandledFrame(t)}}),this._stompHandler.start()}_createWebSocket(){let e;if(this.webSocketFactory)e=this.webSocketFactory();else if(this.brokerURL)e=new WebSocket(this.brokerURL,this.stompVersions.protocolVersions());else throw new Error("Either brokerURL or webSocketFactory must be provided");return e.binaryType="arraybuffer",e}_schedule_reconnect(){this.reconnectDelay>0&&(this.debug(`STOMP: scheduling reconnection in ${this.reconnectDelay}ms`),this._reconnector=setTimeout(()=>{this._connect()},this.reconnectDelay))}async deactivate(e={}){var r;const t=e.force||!1,i=this.active;let s;if(this.state===An.INACTIVE)return this.debug("Already INACTIVE, nothing more to do"),Promise.resolve();if(this._changeState(An.DEACTIVATING),this._reconnector&&(clearTimeout(this._reconnector),this._reconnector=void 0),this._stompHandler&&this.webSocket.readyState!==Ri.CLOSED){const o=this._stompHandler.onWebSocketClose;s=new Promise((a,l)=>{this._stompHandler.onWebSocketClose=c=>{o(c),a()}})}else return this._changeState(An.INACTIVE),Promise.resolve();return t?(r=this._stompHandler)==null||r.discardWebsocket():i&&this._disposeStompHandler(),s}forceDisconnect(){this._stompHandler&&this._stompHandler.forceDisconnect()}_disposeStompHandler(){this._stompHandler&&this._stompHandler.dispose()}publish(e){this._checkConnection(),this._stompHandler.publish(e)}_checkConnection(){if(!this.connected)throw new TypeError("There is no underlying STOMP connection")}watchForReceipt(e,t){this._checkConnection(),this._stompHandler.watchForReceipt(e,t)}subscribe(e,t,i={}){return this._checkConnection(),this._stompHandler.subscribe(e,t,i)}unsubscribe(e,t={}){this._checkConnection(),this._stompHandler.unsubscribe(e,t)}begin(e){return this._checkConnection(),this._stompHandler.begin(e)}commit(e){this._checkConnection(),this._stompHandler.commit(e)}abort(e){this._checkConnection(),this._stompHandler.abort(e)}ack(e,t,i={}){this._checkConnection(),this._stompHandler.ack(e,t,i)}nack(e,t,i={}){this._checkConnection(),this._stompHandler.nack(e,t,i)}}const Ey=window.location.protocol==="http:"?"ws":"wss",Dt=new by({brokerURL:`${Ey}://${window.location.host}/ws`,connectHeaders:{},onConnect:()=>{console.log("Connected to STOMP")},onDisconnect:()=>{console.log("Disconnected from STOMP")},debug:n=>console.log(n)});function bo(n,e){if(!n){console.error("Lobby ID is required to subscribe.");return}Dt.subscribe(`/topic${n}`,t=>{const i=JSON.parse(t.body);switch(i.type){default:e(i)}})}function co(n,e){Dt.connected?Dt.publish({destination:n,body:JSON.stringify(e)}):console.error("WebSocket is not connected")}var Ml=(n=>(n.REGISTERED="REGISTERED",n.GUEST="GUEST",n))(Ml||{});const ql={ok:!1,gamedata:{id:"",players:[],chickens:[],gamemaster:null,started:!1,playmap:void 0,password:null,characters:{}}};var rn=(n=>(n.SNACKMAN="SNACKMAN",n.GHOST="GHOST",n))(rn||{});const Hs=dh("gameStore",()=>{const n="/api/game",e="/topic/game",t=ps(ql),i=ph(),s=hh();function r(){o()}function o(){t.ok=ql.ok,t.gamedata=ql.gamedata}function a(P){t.ok=!0,t.gamedata=P.feedback}async function l(P){if(!P.ok)throw new Error(`Error while fetching data with status: ${P.status}`);const v=await P.json();if(v.status==="error")throw new Error(v.feedback);return v}async function c(P){try{P.playerrole=rn.SNACKMAN,console.log("Erstelle Spiel mit: ",P);const v=await fetch(`${n}/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)}),x=await l(v);a(x),P.password&&(t.gamedata.password=P.password),Dt.onConnect=()=>{var C;(C=t.gamedata)!=null&&C.players&&bo(`/game/${t.gamedata.id}`,N=>{D(N,()=>{})})},Dt.connected||Dt.activate(),sessionStorage.setItem("myName",P.name),sessionStorage.setItem("playerInfo",JSON.stringify(P)),P.password&&sessionStorage.setItem("password",P.password)}catch(v){r(),console.error("Error creating game:",v)}}function u(P,v){return new Promise(x=>{Dt.onConnect=()=>{var C;Dt.unsubscribe(`${e}/${P}`),(C=t.gamedata)!=null&&C.players&&(bo(`/game/${P}`,N=>{D(N,x)}),co(`${e}/${P}/join`,v),sessionStorage.setItem("myName",v.name))},Dt.connected||Dt.activate()})}async function h(P){const v=M();return v?new Promise(x=>{Dt.connected?(co(`${e}/${t.gamedata.id}/start/${P}`,v),x({ok:!0,message:"Game started",data:null})):x({ok:!1,message:"WebSocket is not connected",data:null})}):new Promise(x=>x({ok:!1,message:"No acting player found",data:null}))}async function f(){try{const P=await fetch(`${n}/end/${t.gamedata.id}`,{method:"POST"}),v=await l(P);a(v)}catch(P){r(),console.error("Error ending game:",P)}}async function d(P,v,x){try{const C=await fetch(`${n}/move/${t.gamedata.id}/${P}/${v}/${x}`,{method:"POST"}),N=await l(C);return a(N),!0}catch(C){return console.error("Error moving player:",C),!1}}function g(P,v){return new Promise(x=>{try{let C=function(){console.log("Sending leave message for:",v.name),co(`/topic/game/${P}/leave`,{name:v.name}),bo(`/game/${P}`,N=>{if(N.status==="ok"){console.log(`${v.name} erfolgreich verlassen.`);const H=N.feedback;t.gamedata.players.splice(0,t.gamedata.players.length,...H),sessionStorage.getItem("myName")===v.name&&(sessionStorage.removeItem("myName"),s.push({name:"index"})),x(!0)}else console.error("Leave error:",N.feedback),x(!1)})};Dt.connected?C():(Dt.activate(),Dt.onConnect=()=>{C()})}catch(C){console.error("Error in leaveGame:",C)}})}async function _(){Dt.onDisconnect=()=>{window.closed&&Dt.connected&&(console.log("ich wurde gelöscht"),Dt.deactivate)}}async function m(P,v){try{const x=await fetch(`${n}/kick/${t.gamedata.id}/${P.name}/${v.name}`,{method:"POST"}),C=await l(x);a(C),await g(t.gamedata.id,v),console.log("User {} got kicked from {}",v,P)}catch(x){r(),console.error("Error kicking user:",x)}}async function p(P){try{const v=await fetch(`${n}/setChicken/${t.gamedata.id}/${P}`,{method:"POST"}),x=await l(v);a(x)}catch(v){r(),console.error("Error setting chicken count:",v)}}async function T(){try{const P=await fetch(`${n}/status/${t.gamedata.id}`),v=await l(P);a(v)}catch(P){r(),console.error("Error fetching game status:",P)}}async function E(P,v){try{const x=await fetch(`${n}/setRole/${t.gamedata.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:P,role:v})}),C=await l(x);a(C)}catch(x){r(),console.error("Error set user role:",x)}}function M(){var v,x;const P=sessionStorage.getItem("myName");return(x=(v=t.gamedata)==null?void 0:v.players)==null?void 0:x.find(C=>C.name===P)}function O(P,v,x){const C=M();return C?(console.log("Setting role of "+P+" to "+rn[v]),new Promise(N=>{Dt.connected?(co(`${e}/${x}/setRole/${P}/${rn[v]}`,C),N({ok:!0,message:"Role set",data:null})):N({ok:!1,message:"WebSocket is not connected",data:null})})):new Promise(N=>N({ok:!1,message:"No acting player found",data:null}))}function D(P,v){if(console.log(P.feedback),P.status==="ok"){switch(i.setErrorMessage(""),P.type){case"playerJoin":t.gamedata.players=P.feedback;break;case"playerRole":t.gamedata.players=P.feedback;break;case"gameStart":t.gamedata=P.feedback;break;case"playerMoveValidation":console.log("test");default:console.error("Unknown message type:",P.type)}v(!0)}else i.setErrorMessage(P.feedback),Dt.deactivate().then(x=>console.log("Deactivated stompClient:",x)),v(!1)}async function I(P){try{const x=await(await fetch(`${n}/${P}/isPrivate`)).json();if(x.status==="ok")return x.isPrivate;throw new Error(x.message)}catch(v){return console.error("Fehler beim Überprüfen, ob das Spiel privat ist:",v),!1}}return{gameState:t,createGame:c,startGameViaStomp:h,endGame:f,movePlayer:d,leaveGame:g,kickUser:m,joinLobby:u,setChickenCount:p,fetchGameStatus:T,setPlayerRole:E,setPlayerRoleViaStomp:O,closeTab:_,isGamePrivate:I}}),ph=dh("modal",()=>{const n=ot(!1),e=ot(),t=ot(),i=ot(""),s=Hs(),r=hh(),o=ot(!1),a=ot(!1);function l(g,_,m){n.value=!0,e.value=g,t.value=_,a.value=m}function c(){n.value=!1}async function u(g){g.name?(await s.createGame(g),r.push(`/lobby/${s.gameState.gamedata.id}`)):i.value="Bitte einen Usernamen eingeben"}async function h(g){if(!g.name)i.value="Bitte einen Username eingeben";else{if(await s.joinLobby(t.value,g)){s.gameState.gamedata.id,r.push(`/lobby/${t.value}`);return}return}}function f(g){i.value=g}async function d(g){try{const _=await s.isGamePrivate(g);a.value=_,l(is.JOIN_GAME,g,_)}catch(_){console.error("Fehler beim Überprüfen des privaten Status:",_),i.value="Lobby konnte nicht überprüft werden."}}return{isModalOpen:n,openModal:l,closeModal:c,modalType:e,newGame:u,joinGame:h,setErrorMessage:f,inputErrorMessage:i,requirePassword:o,isGamePrivate:a,checkPrivateGame:d}}),Ty={class:"layout-modal"},Ay={class:"space-y-4"},mh=It({__name:"Modal",setup(n){return(e,t)=>(xe(),Pe("div",Ty,[q("div",null,[q("div",null,[Hc(e.$slots,"titel")]),q("div",Ay,[Hc(e.$slots,"content")])])]))}}),wy={class:"font-bold text-3xl text-center"},Ry={class:"flex flex-col gap-3"},Cy={key:0,class:"input-error-message"},Py={key:1},Ly={class:"mt-4 mb-4 mflex itmes-center space-x-2"},Iy={key:0},Dy={class:"flex space-x-4"},Ny={class:"layout-main"},Uy={class:"flex flex-col gap-3"},Oy=It({__name:"Index",setup(n){const e=ph();Hs();const t=ot("");ot("");const i=ps({name:"",email:"",password:"",playertype:Ml.GUEST,playerrole:rn.GHOST});function s(){rl.push({name:"createmap"})}return(r,o)=>(xe(),Pe(st,null,[Te(e).isModalOpen?(xe(),yn(mh,{key:0},{titel:qn(()=>[q("h2",wy,gt(Te(e).modalType===Te(is).JOIN_GAME?"Join Game":"New Game"),1)]),content:qn(()=>[q("div",Ry,[Gt(q("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>i.name=a),type:"text",name:"name",id:"name",class:"block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",placeholder:"Username eingeben"},null,512),[[nn,i.name]]),Te(e).inputErrorMessage?(xe(),Pe("div",Cy,gt(Te(e).inputErrorMessage),1)):yt("",!0),Te(e).modalType===Te(is).NEW_GAME?(xe(),Pe("div",Py,[q("label",Ly,[Gt(q("input",{type:"checkbox","onUpdate:modelValue":o[1]||(o[1]=a=>Te(e).requirePassword=a),id:"requirePassword",class:"form-checkbox rounded shadow-sm hover:shadow-md transition-shadow duration-300"},null,512),[[ex,Te(e).requirePassword]]),o[10]||(o[10]=q("span",null,"Privates Spiel",-1))]),Te(e).requirePassword?Gt((xe(),Pe("input",{key:0,"onUpdate:modelValue":o[2]||(o[2]=a=>i.password=a),type:"text",id:"password",class:"block w-full rounded-md mt-2 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",placeholder:"Passwort eingeben"},null,512)),[[nn,i.password]]):yt("",!0)])):yt("",!0)]),Te(e).modalType===Te(is).JOIN_GAME?(xe(),Pe("div",Iy,[Te(e).isGamePrivate?Gt((xe(),Pe("input",{key:0,"onUpdate:modelValue":o[3]||(o[3]=a=>i.password=a),type:"text",id:"password",class:"block w-full rounded-md mt-2 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",placeholder:"Passwort eingeben"},null,512)),[[nn,i.password]]):yt("",!0)])):yt("",!0),q("div",Dy,[q("button",{class:"button-small-adventure",onClick:o[4]||(o[4]=a=>Te(e).modalType===Te(is).NEW_GAME?Te(e).newGame(i):Te(e).joinGame(i))},"Weiter"),q("button",{class:"button-small-adventure",onClick:o[5]||(o[5]=a=>Te(e).closeModal())},"Schließen")])]),_:1})):yt("",!0),q("div",Ny,[o[11]||(o[11]=q("video",{autoplay:"",loop:"",muted:"",class:"absolute blur-sm top-0 left-0 w-full h-full object-cover -z-10"},[q("source",{src:el,type:"video/webm"}),q("source",{src:el,type:"video/mp4"})],-1)),o[12]||(o[12]=q("h1",{class:"header-adventure"},"Snackman",-1)),q("div",Uy,[q("button",{class:"buttons-top-bottom",onClick:o[6]||(o[6]=a=>Te(e).openModal(Te(is).NEW_GAME,"",!1))},"New Game"),q("div",null,[Gt(q("input",{type:"text","onUpdate:modelValue":o[7]||(o[7]=a=>t.value=a),placeholder:"Game Id eingeben",class:"gameid-input-field"},null,512),[[nn,t.value]]),q("button",{class:"button-middle",onClick:o[8]||(o[8]=a=>Te(e).checkPrivateGame(t.value))},"Join")]),q("button",{class:"buttons-top-bottom",onClick:o[9]||(o[9]=a=>Te(rl).push("/lobby"))},"Find Lobbies/Games"),q("button",{class:"buttons-top-bottom",onClick:s},"Map Creator")])])],64))}}),Fy={class:"px-6 py-3 text-gray-600"},By={class:"px-6 py-3 text-gray-600"},ky={class:"px-6 py-3"},Hy=It({__name:"LobbyTabellenZeile",props:{game:{}},setup(n){return Hs(),(e,t)=>{var i;return xe(),Pe(st,null,[q("td",Fy,[t[1]||(t[1]=q("span",{class:"font-medium px-6 py-3"},null,-1)),kt(" "+gt(e.game.id),1)]),q("td",By,[t[2]||(t[2]=q("span",{class:"font-medium px-6 py-3"},null,-1)),kt(" "+gt(((i=e.game.gamemaster)==null?void 0:i.name)||"Unknown"),1)]),q("td",ky,[q("button",{onClick:t[0]||(t[0]=s=>e.$emit("open-modal",Te(is).JOIN_GAME,e.game.id)),class:"rounded-lg bg-gray-300 opacity-50 hover:bg-gray-400 p-3 px-6 py-3 card"}," Join ")])],64)}}}),Vy={class:"flex flex-col gap-3"},zy={key:0,class:"input-error-message"},Gy={class:"flex space-x-4"},Wy={class:"flex items-center justify-center min-h-screen"},Xy={class:"card-adventure max-w-4xl"},$y={class:"table-auto w-full border-rounded-lg border-collapse border border-gray-300"},jy=["game"],qy="/api/game",Ky=It({__name:"LobbyList",setup(n){const e=ph(),t=ot([]),i=ps({name:"",email:"",password:"",playertype:Ml.GUEST,playerrole:rn.GHOST});async function s(){try{const o=await(await fetch(`${qy}/games`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();if(o.status=="ok")t.value=o.feedback;else throw new Error("Something went wrong, while receiving Games!")}catch{console.error("Error getting Games!")}}return oi(()=>{s()}),(r,o)=>(xe(),Pe(st,null,[Te(e).isModalOpen?(xe(),yn(mh,{key:0},{titel:qn(()=>o[4]||(o[4]=[q("h2",{class:"header-modal-adventure"},"Join Game",-1)])),content:qn(()=>[q("div",Vy,[Gt(q("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>i.name=a),type:"text",name:"name",id:"name",class:"input-form",placeholder:"Username eingeben"},null,512),[[nn,i.name]]),Te(e).inputErrorMessage?(xe(),Pe("div",zy,gt(Te(e).inputErrorMessage),1)):yt("",!0)]),Te(e).isGamePrivate?Gt((xe(),Pe("input",{key:0,"onUpdate:modelValue":o[1]||(o[1]=a=>i.password=a),type:"text",id:"password",class:"block w-full rounded-md mt-2 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",placeholder:"Passwort eingeben"},null,512)),[[nn,i.password]]):yt("",!0),q("div",Gy,[q("button",{class:"button-small-adventure",onClick:o[2]||(o[2]=a=>Te(e).joinGame(i))},"Weiter"),q("button",{class:"button-small-adventure",onClick:o[3]||(o[3]=a=>Te(e).closeModal())},"Schließen")])]),_:1})):yt("",!0),q("div",Wy,[o[6]||(o[6]=q("video",{autoplay:"",loop:"",muted:"",class:"absolute blur-sm top-0 left-0 w-full h-full object-cover -z-10"},[q("source",{src:el,type:"video/webm"}),q("source",{src:el,type:"video/mp4"})],-1)),q("div",Xy,[q("table",$y,[o[5]||(o[5]=q("thead",null,[q("tr",{class:"bg-gray-100 opacity-60"},[q("th",{class:"px-6 py-3 text-gray-700"},"Lobby"),q("th",{class:"px-6 py-3 text-gray-700"},"Host"),q("th",{class:"px-6 py-3 text-gray-700"},"Action")])],-1)),q("tbody",null,[(xe(!0),Pe(st,null,ai(t.value,a=>(xe(),Pe("tr",{key:a.id,game:a},[Lt(Hy,{game:a,onOpenModal:l=>Te(e).checkPrivateGame(a.id)},null,8,["game","onOpenModal"])],8,jy))),128))])])])])],64))}}),Yy={class:"flex flex-col flex-grow"},Zy={class:"text-lg font-semibold text-blue-600"},Jy={class:"flex items-center space-x-2"},Qy=["value"],eS=["value"],tS=It({__name:"PlayerTile",props:Uv({lobbyId:{type:String,required:!0}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const e=n,t=s0(n,"modelValue"),i=Hs(),{setPlayerRoleViaStomp:s,kickUser:r}=i;async function o(u){await s(u.name,u.playerrole,e.lobbyId).then(h=>{console.log(h)})}const a=Hs(),l=_t(()=>{var f;const u=sessionStorage.getItem("myName"),h=(f=a.gameState.gamedata)==null?void 0:f.gamemaster;return(h==null?void 0:h.name)===u&&(h==null?void 0:h.playertype)});async function c(u){var f;const h=(f=i.gameState.gamedata)==null?void 0:f.gamemaster;if(!h){console.log("Gamemaster nicht gefunden!");return}try{await r(h,u)}catch(d){console.log(d)}}return(u,h)=>(xe(),Pe(st,null,[q("p",{class:Pn([{"text-gray-500 bg-darkgray border bg-red-500":!1,"text-green-500 bg-darkgray border bg-green-500":!0},"transition text-center w-4 h-4 rounded-full"])}),q("div",Yy,[q("p",Zy,gt(t.value.name),1)]),q("div",Jy,[Gt(q("select",{"onUpdate:modelValue":h[0]||(h[0]=f=>t.value.playerrole=f),onChange:h[1]||(h[1]=f=>o(t.value)),class:"w-28 h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[q("option",{value:Te(rn).SNACKMAN},"Snackman",8,Qy),q("option",{value:Te(rn).GHOST},"Ghost",8,eS)],544),[[tx,t.value.playerrole]]),l.value?(xe(),Pe("button",{key:0,class:"px-2 py-1 text-sm font-small text-white bg-red-500 rounded hover:bg-red-600 transition",onClick:h[2]||(h[2]=f=>c(t.value))}," Kick ")):yt("",!0)])],64))}}),gh=dh("map",()=>{const n=ot(0),e=ot(0),t=ot([]),i=ot(""),s=ot(0),r=ot(0),o=ot({maps:[],selectedMap:null});async function a(){try{const d=await(await fetch("/api/maps")).json();if(d.feedback&&typeof d.feedback=="object")o.value.maps=Object.keys(d.feedback).map((g,_)=>({id:_+1,name:g,map:d.feedback[g]}));else throw new Error("Invalid data format");console.log("Fetched Maps:",o.value.maps)}catch(f){console.error("Error fetching maps:",f)}}async function l(){try{const d=await(await fetch("/api/maps/grid-limits")).json();s.value=d.min,r.value=d.max}catch(f){console.error("Error fetching grid limits:",f)}}function c(){if(n.value<=0||e.value<=0){alert("Bitte gültige Werte für Reihen und Spalten eingeben.");return}t.value=Array.from({length:n.value},()=>Array.from({length:e.value},()=>"null"));for(let f=0;f<n.value;f++)for(let d=0;d<e.value;d++)(f===0||f===n.value-1||d===0||d===e.value-1)&&(t.value[f][d]="wall");console.log(`Erstelle ein Spielfeld mit ${n.value} Reihen und ${e.value} Spalten.`)}function u(f,d){f===0||f===n.value-1||d===0||d===e.value-1||(t.value[f][d]=t.value[f][d]==="wall"?"weg":"wall")}async function h(){if(!i.value.trim()){alert("Please Enter the a name for the Map!");return}//!rows.value||!cols.value|| !grid.value.length
let f=!1;for(let _ of t.value){for(let m of _)if(m=="null"){f=!0;break}if(f)break}if(f){alert("Pleas fill the Map at first!");return}await a();let d=!1;for(let _ of o.value.maps)_.name.trim().toLowerCase()===i.value.trim().toLowerCase()&&(d=!0);if(d){alert("The name is not available, please choose a different name.");return}const g={name:i.value,tiles:t.value.map(_=>_.join(""))};try{const _=await fetch("/api/maps",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)});if(!_.ok)throw new Error(await _.text());alert("Map erfolgreich gespeichert!"),await a()}catch(_){console.error("Somethink went Wrong :( ",_),alert("Somethink went Wrong :( ")}}return{mapName:i,rows:n,cols:e,grid:t,minGridSize:s,maxGridSize:r,mapsDTD:o,fetchMaps:a,saveMap:h,fetchGridLimits:l,createGrid:c,updateCell:u}}),nS={class:"h-screen bg-zinc-900"},iS={class:"max-w-lg mx-auto mt-0 px-4"},sS={class:"mb-4"},rS={class:"flex items-center space-x-2"},oS={key:0,class:"mb-4 max-w-lg"},aS={class:"flex items-center space-x-2"},lS=["value"],cS={class:"space-x-2 mt-3 bg-gray-800 shadow-lg rounded-lg divide-y divide-gray-900 max-w-lg mb-4"},uS={class:"pr-4 pl-4 p-2 text-gray-500 flex items-center justify-between transition-colors"},hS={class:"flex items-center space-x-2 mt-3"},fS={class:"flex items-center space-x-2 mt-3"},dS={class:"w-50 p-2 bg-gray-800 shadow-lg rounded-lg text-blue-600"},pS={class:"text-sm text-gray-400 mt-2"},mS=["disabled"],gS={key:0,class:"fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"},_S={class:"bg-zinc-800 p-6 rounded-lg shadow-lg max-w-4xl w-full"},vS={class:"grid grid-cols-2 gap-4"},xS=["onClick"],yS=["id"],SS={class:"text-center text-zinc-200 font-semibold"},MS={class:"flex justify-between mt-4"},bS=7,ES=It({__name:"GameLobbyView",setup(n){const e=Hs(),{setPlayerRoleViaStomp:t}=e,i=fh(),s=hh(),r=gh(),o=ot(!1),a=ot(null),l=ot(!0);ot(!1);const c=i.params.id.toString(),u=_t(()=>{var v;return((v=e.gameState.gamedata)==null?void 0:v.players)||[]}),h=_t(()=>bS-u.value.length),f=_t(()=>{var v;return((v=e.gameState.gamedata)==null?void 0:v.password)||null}),d=_t({get:()=>{var v;return((v=e.gameState.gamedata)==null?void 0:v.chickens.length)||0},set:async v=>{await e.setChickenCount(v)}}),g=_t(()=>{var C;const v=sessionStorage.getItem("myName"),x=(C=e.gameState.gamedata)==null?void 0:C.gamemaster;return(x==null?void 0:x.name)===v&&(x==null?void 0:x.name)});Rn(()=>{var v;return(v=e.gameState.gamedata)==null?void 0:v.started},v=>{v&&s.push({name:"game"})});async function _(){const v=[rn.SNACKMAN,rn.GHOST];for(const x of u.value){const C=v[Math.floor(Math.random()*v.length)];x.playerrole=C,console.log(`Assigning random role ${C} to player ${x.name}`),await t(x.name,C,c).then(N=>{console.log(N)})}}async function m(){var v,x;try{if(!((v=r.mapsDTD.selectedMap)!=null&&v.map))throw new Error("No map selected!");await e.startGameViaStomp((x=r.mapsDTD.selectedMap)==null?void 0:x.name),console.log(e.gameState),console.log("playMap: ",e.gameState.gamedata.playmap)}catch(C){console.log(C)}}function p(){alert("Copied to Clipboard!"),navigator.clipboard.writeText(c)}async function T(v){try{const x=sessionStorage.getItem("myName");if(!x){console.error("nicht gefunden");return}const C=u.value.find(H=>H.name===x);if(!C){console.error("Spieler nicht in der Liste gefunden!");return}console.log("Lobby-Daten vor leaveGame:",u.value);const N=await e.leaveGame(v,C);console.log("Leaving Game succeeded:",N),console.log("Lobby-Daten nach leaveGame:",u.value)}catch(x){console.log("Fehler beim ausfueren des leaven",x)}}oi(async()=>{var v;try{await e.fetchGameStatus(),console.log("Passwort von gamestate",(v=e.gameState.gamedata)==null?void 0:v.password)}catch(x){console.error("Error fetching game status:",x)}}),oi(async()=>{try{await r.fetchMaps(),r.mapsDTD.maps.length>0&&(r.mapsDTD.selectedMap=r.mapsDTD.maps[0],a.value=r.mapsDTD.selectedMap,console.log("Default:",a.value.name))}catch(v){console.error("Error during setup:",v)}}),Rn(()=>o.value,async v=>{v&&(console.log("Popup is now visible. Drawing maps..."),await Gr(),E())});async function E(){r.mapsDTD.maps.forEach(v=>{console.log(`Drawing map with ID: ${v.id}`),P(v)})}function M(){o.value=!0}function O(){o.value=!1}window.addEventListener("beforeunload",v=>{v.preventDefault();const x=sessionStorage.getItem("myName");x&&u.value.find(N=>N.name===x)&&T(c)}),oi(async()=>{try{await e.fetchGameStatus()}catch(v){console.error("Error fetching game status:",v)}});function D(){const v=r.mapsDTD.maps;if(v.length>0){const x=Math.floor(Math.random()*v.length),C=v[x];a.value=C,r.mapsDTD.selectedMap=C,console.log("Randomly selected map:",C.name)}else alert("No maps available to select.")}function I(v){a.value=v,r.mapsDTD.selectedMap=v}function P(v){const x=document.getElementById("mapCanvas-"+v.id);if(!x){console.error(`Canvas with ID 'mapCanvas-${v.id}' not found in the DOM.`);return}const C=x.getContext("2d");if(!C){console.error(`2D context for canvas 'mapCanvas-${v.id}' not available.`);return}const N=20,H=v.map.length,J=v.map[0].length;x.width=J*N,x.height=H*N;for(let ae=0;ae<H;ae++)for(let j=0;j<J;j++){const ee=v.map[ae][j];C.fillStyle=ee==="*"?"black":"blue",C.fillRect(j*N,ae*N,N,N),C.strokeStyle="black",C.strokeRect(j*N,ae*N,N,N)}console.log(`Map ${v.id} drawn successfully.`)}return(v,x)=>{var C;return xe(),Pe("div",nS,[q("div",iS,[x[12]||(x[12]=q("h1",{class:"text-2xl font-semibold text-center text-zinc-200 mb-10"},"Game Lobby",-1)),q("div",sS,[x[9]||(x[9]=q("p",{class:"text-lg font-semibold text-zinc-200"},"Lobby Code:",-1)),q("div",rS,[Gt(q("input",{type:"text",class:"w-full p-3 bg-gray-800 shadow-lg rounded-lg text-zinc-300",disabled:"true","onUpdate:modelValue":x[0]||(x[0]=N=>wt(c)?c.value=N:null)},null,512),[[nn,Te(c)]]),q("button",{class:"bg-yellow-500 text-zinc-900 p-3 rounded-lg hover:bg-yellow-600 transition",onClick:x[1]||(x[1]=N=>p())}," Copy ")])]),g.value?(xe(),Pe("div",oS,[x[10]||(x[10]=q("p",{class:"text-lg font-semibold text-zinc-200"},"Lobby Passwort:",-1)),q("div",aS,[q("input",{type:"text",class:"w-full p-3 bg-gray-800 shadow-lg rounded-lg text-zinc-300",value:f.value,disabled:"true"},null,8,lS)])])):yt("",!0),q("ul",cS,[(xe(!0),Pe(st,null,ai(u.value,(N,H)=>(xe(),Pe("li",{key:N.name,class:"pr-4 pl-4 p-2 flex items-center space-x-4 transition-colors"},[Lt(tS,{modelValue:u.value[H],"onUpdate:modelValue":J=>u.value[H]=J,"lobby-id":Te(c)},null,8,["modelValue","onUpdate:modelValue","lobby-id"])]))),128)),(xe(!0),Pe(st,null,ai(h.value,N=>(xe(),Pe("li",uS," Empty "))),256))]),q("div",hS,[x[11]||(x[11]=q("p",{class:"text-lg w-50 font-semibold text-zinc-200"}," Chickens: ",-1)),Gt(q("input",{type:"number","onUpdate:modelValue":x[2]||(x[2]=N=>d.value=N),class:"w-50 p-2 bg-gray-800 shadow-lg rounded-lg text-blue-600"},null,512),[[nn,d.value]]),g.value?(xe(),Pe("button",{key:0,class:"w-80 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition",onClick:x[3]||(x[3]=N=>_())}," Randomize Roles ")):yt("",!0)]),q("div",fS,[g.value?(xe(),Pe("button",{key:0,class:"w-50 p-2 bg-blue-800 shadow-lg rounded-lg text-white-600 hover:bg-gray-800",onClick:x[4]||(x[4]=N=>M())}," Select Map ")):yt("",!0),q("div",dS,[q("p",pS,"Selected: "+gt(((C=a.value)==null?void 0:C.name)||"None"),1)])]),q("button",{class:Pn([{"bg-green-700 hover:bg-green-800 text-zinc-200":l.value,"bg-gray-600":!l.value},"w-full mt-5 px-6 py-3 text-lg font-semibold rounded-lg transition"]),disabled:!l.value,onClick:x[5]||(x[5]=N=>m())},gt(l.value?"Start Game":"---"),11,mS),q("button",{class:Pn([{"bg-red-700 hover:bg-red-800 text-zinc-200":l.value,"bg-gray-600":!l.value},"w-full mt-5 px-6 py-3 text-lg font-semibold rounded-lg transition"]),onClick:x[6]||(x[6]=N=>T(Te(c)))}," leave ",2)]),o.value?(xe(),Pe("div",gS,[q("div",_S,[x[13]||(x[13]=q("h2",{class:"text-lg font-semibold text-zinc-200 mb-4"},"Select a Map",-1)),q("div",vS,[(xe(!0),Pe(st,null,ai(Te(r).mapsDTD.maps,N=>{var H;return xe(),Pe("div",{key:N.id,class:Pn(["p-4 rounded-lg shadow-lg transition cursor-pointer",N.id===((H=a.value)==null?void 0:H.id)?"bg-blue-700 border-blue-400":"bg-gray-800 hover:bg-gray-700"]),onClick:J=>I(N)},[q("canvas",{id:"mapCanvas-"+N.id,class:"w-full h-40 border border-zinc-500 bg-blue-600"},null,8,yS),q("p",SS,gt(N.name),1)],10,xS)}),128))]),q("div",MS,[q("button",{class:"bg-blue-600 hover:bg-blue-700 text-zinc-200 py-1 px-4 rounded-lg transition",onClick:x[7]||(x[7]=N=>D())}," Random Map "),q("button",{class:"bg-red-600 hover:bg-red-700 text-zinc-200 py-1 px-4 rounded-lg transition",onClick:x[8]||(x[8]=N=>O())}," OK ")])])])):yt("",!0)])}}}),TS="/assets/herz-BDr62fbB.png",AS="/assets/emptyHerz-Nnh5wdS8.png";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _h="170",wS=0,Kf=1,RS=2,pg=1,CS=2,bi=3,Oi=0,hn=1,si=2,ls=0,Sr=1,Yf=2,Zf=3,Jf=4,PS=5,Ls=100,LS=101,IS=102,DS=103,NS=104,US=200,OS=201,FS=202,BS=203,Qc=204,eu=205,kS=206,HS=207,VS=208,zS=209,GS=210,WS=211,XS=212,$S=213,jS=214,tu=0,nu=1,iu=2,Pr=3,su=4,ru=5,ou=6,au=7,mg=0,qS=1,KS=2,cs=0,YS=1,ZS=2,JS=3,QS=4,eM=5,tM=6,nM=7,Qf="attached",iM="detached",gg=300,Lr=301,Ir=302,lu=303,cu=304,bl=306,Dr=1e3,os=1001,tl=1002,on=1003,_g=1004,uo=1005,Sn=1006,Oa=1007,Ci=1008,Fi=1009,vg=1010,xg=1011,Fo=1012,vh=1013,Vs=1014,zn=1015,$o=1016,xh=1017,yh=1018,Nr=1020,yg=35902,Sg=1021,Mg=1022,Cn=1023,bg=1024,Eg=1025,Mr=1026,Ur=1027,Sh=1028,Mh=1029,Tg=1030,bh=1031,Eh=1033,Fa=33776,Ba=33777,ka=33778,Ha=33779,uu=35840,hu=35841,fu=35842,du=35843,pu=36196,mu=37492,gu=37496,_u=37808,vu=37809,xu=37810,yu=37811,Su=37812,Mu=37813,bu=37814,Eu=37815,Tu=37816,Au=37817,wu=37818,Ru=37819,Cu=37820,Pu=37821,Va=36492,Lu=36494,Iu=36495,Ag=36283,Du=36284,Nu=36285,Uu=36286,Bo=2300,ko=2301,Kl=2302,ed=2400,td=2401,nd=2402,sM=2500,rM=0,wg=1,Ou=2,oM=3200,aM=3201,Rg=0,lM=1,rs="",zt="srgb",ln="srgb-linear",El="linear",mt="srgb",Ys=7680,id=519,cM=512,uM=513,hM=514,Cg=515,fM=516,dM=517,pM=518,mM=519,Fu=35044,sd="300 es",Pi=2e3,nl=2001;class Ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rd=1234567;const Eo=Math.PI/180,Or=180/Math.PI;function Xn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function qt(n,e,t){return Math.max(e,Math.min(t,n))}function Th(n,e){return(n%e+e)%e}function gM(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function _M(n,e,t){return n!==e?(t-n)/(e-n):0}function To(n,e,t){return(1-t)*n+t*e}function vM(n,e,t,i){return To(n,e,1-Math.exp(-t*i))}function xM(n,e=1){return e-Math.abs(Th(n,e*2)-e)}function yM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function SM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function MM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function bM(n,e){return n+Math.random()*(e-n)}function EM(n){return n*(.5-Math.random())}function TM(n){n!==void 0&&(rd=n);let e=rd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function AM(n){return n*Eo}function wM(n){return n*Or}function RM(n){return(n&n-1)===0&&n!==0}function CM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function PM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function LM(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const IM={DEG2RAD:Eo,RAD2DEG:Or,generateUUID:Xn,clamp:qt,euclideanModulo:Th,mapLinear:gM,inverseLerp:_M,lerp:To,damp:vM,pingpong:xM,smoothstep:yM,smootherstep:SM,randInt:MM,randFloat:bM,randFloatSpread:EM,seededRandom:TM,degToRad:AM,radToDeg:wM,isPowerOfTwo:RM,ceilPowerOfTwo:CM,floorPowerOfTwo:PM,setQuaternionFromProperEuler:LM,normalize:dt,denormalize:Hn};class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,s,r,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],T=s[1],E=s[4],M=s[7],O=s[2],D=s[5],I=s[8];return r[0]=o*_+a*T+l*O,r[3]=o*m+a*E+l*D,r[6]=o*p+a*M+l*I,r[1]=c*_+u*T+h*O,r[4]=c*m+u*E+h*D,r[7]=c*p+u*M+h*I,r[2]=f*_+d*T+g*O,r[5]=f*m+d*E+g*D,r[8]=f*p+d*M+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yl.makeScale(e,t)),this}rotate(e){return this.premultiply(Yl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yl=new Ye;function Pg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ho(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function DM(){const n=Ho("canvas");return n.style.display="block",n}const od={};function ho(n){n in od||(od[n]=!0,console.warn(n))}function NM(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function UM(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function OM(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nt={enabled:!0,workingColorSpace:ln,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===mt&&(n.r=Di(n.r),n.g=Di(n.g),n.b=Di(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===mt&&(n.r=br(n.r),n.g=br(n.g),n.b=br(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===rs?El:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function br(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ad=[.64,.33,.3,.6,.15,.06],ld=[.2126,.7152,.0722],cd=[.3127,.329],ud=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hd=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt.define({[ln]:{primaries:ad,whitePoint:cd,transfer:El,toXYZ:ud,fromXYZ:hd,luminanceCoefficients:ld,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:ad,whitePoint:cd,transfer:mt,toXYZ:ud,fromXYZ:hd,luminanceCoefficients:ld,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}});let Zs;class FM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zs===void 0&&(Zs=Ho("canvas")),Zs.width=e.width,Zs.height=e.height;const i=Zs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ho("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Di(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Di(t[i]/255)*255):t[i]=Di(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BM=0;class Lg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zl(s[o].image)):r.push(Zl(s[o]))}else r=Zl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Zl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?FM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kM=0;class Vt extends Ws{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=os,s=os,r=Sn,o=Ci,a=Cn,l=Fi,c=Vt.DEFAULT_ANISOTROPY,u=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=Xn(),this.name="",this.source=new Lg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dr:e.x=e.x-Math.floor(e.x);break;case os:e.x=e.x<0?0:1;break;case tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dr:e.y=e.y-Math.floor(e.y);break;case os:e.y=e.y<0?0:1;break;case tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=gg;Vt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,M=(d+1)/2,O=(p+1)/2,D=(u+f)/4,I=(h+_)/4,P=(g+m)/4;return E>M&&E>O?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=D/i,r=I/i):M>O?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=D/s,r=P/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=I/r,s=P/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(f-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HM extends Ws{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Vt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zs extends HM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ig extends Vt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VM extends Vt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const O=Math.sqrt(E),D=Math.atan2(O,p*T);m=Math.sin(m*D)/O,a=Math.sin(a*D)/O}const M=a*T;if(l=l*m+f*M,c=c*m+d*M,u=u*m+g*M,h=h*m+_*M,m===1-a){const O=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=O,c*=O,u*=O,h*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jl.copy(this).projectOnVector(e),this.sub(Jl)}reflect(e){return this.sub(Jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jl=new V,fd=new ki;class ui{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ia.copy(i.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),sa.subVectors(this.max,Jr),Js.subVectors(e.a,Jr),Qs.subVectors(e.b,Jr),er.subVectors(e.c,Jr),Wi.subVectors(Qs,Js),Xi.subVectors(er,Qs),xs.subVectors(Js,er);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-xs.z,xs.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,xs.z,0,-xs.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-xs.y,xs.x,0];return!Ql(t,Js,Qs,er,sa)||(t=[1,0,0,0,1,0,0,0,1],!Ql(t,Js,Qs,er,sa))?!1:(ra.crossVectors(Wi,Xi),t=[ra.x,ra.y,ra.z],Ql(t,Js,Qs,er,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new V,new V,new V,new V,new V,new V,new V,new V],On=new V,ia=new ui,Js=new V,Qs=new V,er=new V,Wi=new V,Xi=new V,xs=new V,Jr=new V,sa=new V,ra=new V,ys=new V;function Ql(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ys.fromArray(n,r);const a=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),l=e.dot(ys),c=t.dot(ys),u=i.dot(ys);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zM=new ui,Qr=new V,ec=new V;class hi{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):zM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);const t=Qr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(ec)),this.expandByPoint(Qr.copy(e.center).sub(ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new V,tc=new V,oa=new V,$i=new V,nc=new V,aa=new V,ic=new V;class Tl{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){tc.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(tc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(oa),a=$i.dot(this.direction),l=-$i.dot(oa),c=$i.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(tc).addScaledVector(oa,f),d}intersectSphere(e,t){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),s=vi.dot(vi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,i,s,r){nc.subVectors(t,e),aa.subVectors(i,e),ic.crossVectors(nc,aa);let o=this.direction.dot(ic),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);const l=a*this.direction.dot(aa.crossVectors($i,aa));if(l<0)return null;const c=a*this.direction.dot(nc.cross($i));if(c<0||l+c>o)return null;const u=-a*$i.dot(ic);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),o=1/tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GM,e,WM)}lookAt(e,t,i){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ji.crossVectors(i,pn),ji.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ji.crossVectors(i,pn)),ji.normalize(),la.crossVectors(pn,ji),s[0]=ji.x,s[4]=la.x,s[8]=pn.x,s[1]=ji.y,s[5]=la.y,s[9]=pn.y,s[2]=ji.z,s[6]=la.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],T=i[3],E=i[7],M=i[11],O=i[15],D=s[0],I=s[4],P=s[8],v=s[12],x=s[1],C=s[5],N=s[9],H=s[13],J=s[2],ae=s[6],j=s[10],ee=s[14],W=s[3],ge=s[7],ye=s[11],Re=s[15];return r[0]=o*D+a*x+l*J+c*W,r[4]=o*I+a*C+l*ae+c*ge,r[8]=o*P+a*N+l*j+c*ye,r[12]=o*v+a*H+l*ee+c*Re,r[1]=u*D+h*x+f*J+d*W,r[5]=u*I+h*C+f*ae+d*ge,r[9]=u*P+h*N+f*j+d*ye,r[13]=u*v+h*H+f*ee+d*Re,r[2]=g*D+_*x+m*J+p*W,r[6]=g*I+_*C+m*ae+p*ge,r[10]=g*P+_*N+m*j+p*ye,r[14]=g*v+_*H+m*ee+p*Re,r[3]=T*D+E*x+M*J+O*W,r[7]=T*I+E*C+M*ae+O*ge,r[11]=T*P+E*N+M*j+O*ye,r[15]=T*v+E*H+M*ee+O*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,E=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,M=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,O=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,D=t*T+i*E+s*M+r*O;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return e[0]=T*I,e[1]=(_*f*r-h*m*r-_*s*d+i*m*d+h*s*p-i*f*p)*I,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*I,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*I,e[4]=E*I,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*I,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*I,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*I,e[8]=M*I,e[9]=(g*h*r-u*_*r-g*i*d+t*_*d+u*i*p-t*h*p)*I,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*p+t*a*p)*I,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*I,e[12]=O*I,e[13]=(u*_*s-g*h*s+g*i*f-t*_*f-u*i*m+t*h*m)*I,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*I,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,T=l*c,E=l*u,M=l*h,O=i.x,D=i.y,I=i.z;return s[0]=(1-(_+p))*O,s[1]=(d+M)*O,s[2]=(g-E)*O,s[3]=0,s[4]=(d-M)*D,s[5]=(1-(f+p))*D,s[6]=(m+T)*D,s[7]=0,s[8]=(g+E)*I,s[9]=(m-T)*I,s[10]=(1-(f+_))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=tr.set(s[0],s[1],s[2]).length();const o=tr.set(s[4],s[5],s[6]).length(),a=tr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Fn.copy(this);const c=1/r,u=1/o,h=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=h,Fn.elements[9]*=h,Fn.elements[10]*=h,t.setFromRotationMatrix(Fn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Pi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let d,g;if(a===Pi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===nl)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Pi){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,d=(i+s)*u;let g,_;if(a===Pi)g=(o+r)*h,_=-2*h;else if(a===nl)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const tr=new V,Fn=new Ge,GM=new V(0,0,0),WM=new V(1,1,1),ji=new V,la=new V,pn=new V,dd=new Ge,pd=new ki;class Yn{constructor(e=0,t=0,i=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pd.setFromEuler(this),this.setFromQuaternion(pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class Dg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let XM=0;const md=new V,nr=new ki,xi=new Ge,ca=new V,eo=new V,$M=new V,jM=new ki,gd=new V(1,0,0),_d=new V(0,1,0),vd=new V(0,0,1),xd={type:"added"},qM={type:"removed"},ir={type:"childadded",child:null},sc={type:"childremoved",child:null};class Tt extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new V,t=new Yn,i=new ki,s=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ye}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(gd,e)}rotateY(e){return this.rotateOnAxis(_d,e)}rotateZ(e){return this.rotateOnAxis(vd,e)}translateOnAxis(e,t){return md.copy(e).applyQuaternion(this.quaternion),this.position.add(md.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gd,e)}translateY(e){return this.translateOnAxis(_d,e)}translateZ(e){return this.translateOnAxis(vd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ca.copy(e):ca.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(eo,ca,this.up):xi.lookAt(ca,eo,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(xi),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xd),ir.child=e,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qM),sc.child=e,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xd),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,$M),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,jM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Tt.DEFAULT_UP=new V(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new V,yi=new V,rc=new V,Si=new V,sr=new V,rr=new V,yd=new V,oc=new V,ac=new V,lc=new V,cc=new lt,uc=new lt,hc=new lt;class Vn{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Bn.subVectors(e,t),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Bn.subVectors(s,t),yi.subVectors(i,t),rc.subVectors(e,t);const o=Bn.dot(Bn),a=Bn.dot(yi),l=Bn.dot(rc),c=yi.dot(yi),u=yi.dot(rc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return cc.setScalar(0),uc.setScalar(0),hc.setScalar(0),cc.fromBufferAttribute(e,t),uc.fromBufferAttribute(e,i),hc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(cc,r.x),o.addScaledVector(uc,r.y),o.addScaledVector(hc,r.z),o}static isFrontFacing(e,t,i,s){return Bn.subVectors(i,t),yi.subVectors(e,t),Bn.cross(yi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Bn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Vn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;sr.subVectors(s,i),rr.subVectors(r,i),oc.subVectors(e,i);const l=sr.dot(oc),c=rr.dot(oc);if(l<=0&&c<=0)return t.copy(i);ac.subVectors(e,s);const u=sr.dot(ac),h=rr.dot(ac);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(sr,o);lc.subVectors(e,r);const d=sr.dot(lc),g=rr.dot(lc);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(rr,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return yd.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(yd,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(sr,o).addScaledVector(rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},ua={h:0,s:0,l:0};function fc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=Th(e,1),t=qt(t,0,1),i=qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=fc(o,r,e+1/3),this.g=fc(o,r,e),this.b=fc(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=zt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const i=Ng[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return nt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(qt(Xt.r*255,0,255))*65536+Math.round(qt(Xt.g*255,0,255))*256+Math.round(qt(Xt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Xt.copy(this),t);const i=Xt.r,s=Xt.g,r=Xt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=zt){nt.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,i=Xt.g,s=Xt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(ua);const i=To(qi.h,ua.h,t),s=To(qi.s,ua.s,t),r=To(qi.l,ua.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new je;je.NAMES=Ng;let KM=0;class li extends Ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Xn(),this.name="",this.blending=Sr,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=eu,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qc&&(i.blendSrc=this.blendSrc),this.blendDst!==eu&&(i.blendDst=this.blendDst),this.blendEquation!==Ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==id&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ds extends li{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=mg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new V,ha=new it;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fu,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fu&&(e.usage=this.usage),e}}class Ug extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Og extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Dn extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let YM=0;const Tn=new Ge,dc=new Tt,or=new V,mn=new ui,to=new ui,Bt=new V;class Zn extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pg(e)?Og:Ug)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return dc.lookAt(e),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dn(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];to.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(mn.min,to.min),mn.expandByPoint(Bt),Bt.addVectors(mn.max,to.max),mn.expandByPoint(Bt)):(mn.expandByPoint(to.min),mn.expandByPoint(to.max))}mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(or.fromBufferAttribute(e,c),Bt.add(or)),s=Math.max(s,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new V,l[P]=new V;const c=new V,u=new V,h=new V,f=new it,d=new it,g=new it,_=new V,m=new V;function p(P,v,x){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,x),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,v),g.fromBufferAttribute(r,x),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),a[P].add(_),a[v].add(_),a[x].add(_),l[P].add(m),l[v].add(m),l[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,v=T.length;P<v;++P){const x=T[P],C=x.start,N=x.count;for(let H=C,J=C+N;H<J;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new V,M=new V,O=new V,D=new V;function I(P){O.fromBufferAttribute(s,P),D.copy(O);const v=a[P];E.copy(v),E.sub(O.multiplyScalar(O.dot(v))).normalize(),M.crossVectors(D,v);const C=M.dot(l[P])<0?-1:1;o.setXYZW(P,E.x,E.y,E.z,C)}for(let P=0,v=T.length;P<v;++P){const x=T[P],C=x.start,N=x.count;for(let H=C,J=C+N;H<J;H+=3)I(e.getX(H+0)),I(e.getX(H+1)),I(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new an(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sd=new Ge,Ss=new Tl,fa=new hi,Md=new V,da=new V,pa=new V,ma=new V,pc=new V,ga=new V,bd=new V,_a=new V;class sn extends Tt{constructor(e=new Zn,t=new Ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(pc.fromBufferAttribute(h,e),o?ga.addScaledVector(pc,u):ga.addScaledVector(pc.sub(t),u))}t.add(ga)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(fa.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(fa,Md)===null||Ss.origin.distanceToSquared(Md)>(e.far-e.near)**2))&&(Sd.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(Sd),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=T,O=E;M<O;M+=3){const D=a.getX(M),I=a.getX(M+1),P=a.getX(M+2);s=va(this,p,e,i,c,u,h,D,I,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),E=a.getX(m+1),M=a.getX(m+2);s=va(this,o,e,i,c,u,h,T,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=T,O=E;M<O;M+=3){const D=M,I=M+1,P=M+2;s=va(this,p,e,i,c,u,h,D,I,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,E=m+1,M=m+2;s=va(this,o,e,i,c,u,h,T,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function ZM(n,e,t,i,s,r,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Oi,a),l===null)return null;_a.copy(a),_a.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(_a);return c<t.near||c>t.far?null:{distance:c,point:_a.clone(),object:n}}function va(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,da),n.getVertexPosition(l,pa),n.getVertexPosition(c,ma);const u=ZM(n,e,t,i,da,pa,ma,bd);if(u){const h=new V;Vn.getBarycoord(bd,da,pa,ma,h),s&&(u.uv=Vn.getInterpolatedAttribute(s,a,l,c,h,new it)),r&&(u.uv1=Vn.getInterpolatedAttribute(r,a,l,c,h,new it)),o&&(u.normal=Vn.getInterpolatedAttribute(o,a,l,c,h,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new V,materialIndex:0};Vn.getNormal(da,pa,ma,f.normal),u.face=f,u.barycoord=h}return u}class Gs extends Zn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(u,3)),this.setAttribute("uv",new Dn(h,2));function g(_,m,p,T,E,M,O,D,I,P,v){const x=M/I,C=O/P,N=M/2,H=O/2,J=D/2,ae=I+1,j=P+1;let ee=0,W=0;const ge=new V;for(let ye=0;ye<j;ye++){const Re=ye*C-H;for(let Oe=0;Oe<ae;Oe++){const Qe=Oe*x-N;ge[_]=Qe*T,ge[m]=Re*E,ge[p]=J,c.push(ge.x,ge.y,ge.z),ge[_]=0,ge[m]=0,ge[p]=D>0?1:-1,u.push(ge.x,ge.y,ge.z),h.push(Oe/I),h.push(1-ye/P),ee+=1}}for(let ye=0;ye<P;ye++)for(let Re=0;Re<I;Re++){const Oe=f+Re+ae*ye,Qe=f+Re+ae*(ye+1),se=f+(Re+1)+ae*(ye+1),pe=f+(Re+1)+ae*ye;l.push(Oe,Qe,pe),l.push(Qe,se,pe),W+=6}a.addGroup(d,W,v),d+=W,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=Fr(n[t]);for(const s in i)e[s]=i[s]}return e}function JM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fg(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const QM={clone:Fr,merge:Zt};var eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class us extends li{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eb,this.fragmentShader=tb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=JM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Bg extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new V,Ed=new it,Td=new it;class tn extends Bg{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,Ed,Td),t.subVectors(Td,Ed)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Eo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ar=-90,lr=1;class nb extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(ar,lr,e,t);s.layers=this.layers,this.add(s);const r=new tn(ar,lr,e,t);r.layers=this.layers,this.add(r);const o=new tn(ar,lr,e,t);o.layers=this.layers,this.add(o);const a=new tn(ar,lr,e,t);a.layers=this.layers,this.add(a);const l=new tn(ar,lr,e,t);l.layers=this.layers,this.add(l);const c=new tn(ar,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class kg extends Vt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Lr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ib extends zs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new kg(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gs(5,5,5),r=new us({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:ls});r.uniforms.tEquirect.value=t;const o=new sn(s,r),a=t.minFilter;return t.minFilter===Ci&&(t.minFilter=Sn),new nb(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const mc=new V,sb=new V,rb=new Ye;class Cs{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=mc.subVectors(i,t).cross(sb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(mc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||rb.getNormalMatrix(e),s=this.coplanarPoint(mc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new hi,xa=new V;class Ah{constructor(e=new Cs,t=new Cs,i=new Cs,s=new Cs,r=new Cs,o=new Cs){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],T=s[13],E=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,m-d,M-p).normalize(),i[1].setComponents(l+r,f+c,m+d,M+p).normalize(),i[2].setComponents(l+o,f+u,m+g,M+T).normalize(),i[3].setComponents(l-o,f-u,m-g,M-T).normalize(),i[4].setComponents(l-a,f-h,m-_,M-E).normalize(),t===Pi)i[5].setComponents(l+a,f+h,m+_,M+E).normalize();else if(t===nl)i[5].setComponents(a,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){return Ms.center.set(0,0,0),Ms.radius=.7071067811865476,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(xa.x=s.normal.x>0?e.max.x:e.min.x,xa.y=s.normal.y>0?e.max.y:e.min.y,xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hg(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ob(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Al extends Zn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const T=p*f-o;for(let E=0;E<c;E++){const M=E*h-r;g.push(M,-T,0),_.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const E=T+c*p,M=T+c*(p+1),O=T+1+c*(p+1),D=T+1+c*p;d.push(E,M,D),d.push(M,O,D)}this.setIndex(d),this.setAttribute("position",new Dn(g,3)),this.setAttribute("normal",new Dn(_,3)),this.setAttribute("uv",new Dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.width,e.height,e.widthSegments,e.heightSegments)}}var ab=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lb=`#ifdef USE_ALPHAHASH
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
#endif`,cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,db=`#ifdef USE_AOMAP
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
#endif`,pb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mb=`#ifdef USE_BATCHING
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
#endif`,gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_b=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yb=`#ifdef USE_IRIDESCENCE
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
#endif`,Sb=`#ifdef USE_BUMPMAP
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
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ab=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pb=`#define PI 3.141592653589793
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
} // validated`,Lb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ib=`vec3 transformedNormal = objectNormal;
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
#endif`,Db=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ub=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ob=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kb=`#ifdef USE_ENVMAP
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
#endif`,Hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vb=`#ifdef USE_ENVMAP
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
#endif`,zb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
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
#endif`,Wb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$b=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qb=`#ifdef USE_GRADIENTMAP
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
}`,Kb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jb=`uniform bool receiveShadow;
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
#endif`,Qb=`#ifdef USE_ENVMAP
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
#endif`,eE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sE=`PhysicalMaterial material;
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
#endif`,rE=`struct PhysicalMaterial {
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
}`,oE=`
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
#endif`,aE=`#if defined( RE_IndirectDiffuse )
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
#endif`,lE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gE=`#if defined( USE_POINTS_UV )
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
#endif`,_E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ME=`#ifdef USE_MORPHTARGETS
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
#endif`,bE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,TE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CE=`#ifdef USE_NORMALMAP
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
#endif`,PE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,XE=`float getShadowMask() {
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
}`,$E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jE=`#ifdef USE_SKINNING
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
#endif`,qE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KE=`#ifdef USE_SKINNING
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
#endif`,YE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eT=`#ifdef USE_TRANSMISSION
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
#endif`,tT=`#ifdef USE_TRANSMISSION
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
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aT=`uniform sampler2D t2D;
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
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fT=`#include <common>
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
}`,dT=`#if DEPTH_PACKING == 3200
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
}`,pT=`#define DISTANCE
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
}`,mT=`#define DISTANCE
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
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_T=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`uniform float scale;
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
}`,xT=`uniform vec3 diffuse;
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
}`,yT=`#include <common>
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
}`,ST=`uniform vec3 diffuse;
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
}`,MT=`#define LAMBERT
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
}`,bT=`#define LAMBERT
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
}`,ET=`#define MATCAP
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
}`,TT=`#define MATCAP
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
}`,AT=`#define NORMAL
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
}`,wT=`#define NORMAL
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
}`,RT=`#define PHONG
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
}`,CT=`#define PHONG
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
}`,PT=`#define STANDARD
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
}`,LT=`#define STANDARD
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
}`,IT=`#define TOON
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
}`,DT=`#define TOON
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
}`,NT=`uniform float size;
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
}`,UT=`uniform vec3 diffuse;
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
}`,OT=`#include <common>
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
}`,FT=`uniform vec3 color;
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
}`,BT=`uniform float rotation;
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
}`,kT=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:ab,alphahash_pars_fragment:lb,alphamap_fragment:cb,alphamap_pars_fragment:ub,alphatest_fragment:hb,alphatest_pars_fragment:fb,aomap_fragment:db,aomap_pars_fragment:pb,batching_pars_vertex:mb,batching_vertex:gb,begin_vertex:_b,beginnormal_vertex:vb,bsdfs:xb,iridescence_fragment:yb,bumpmap_pars_fragment:Sb,clipping_planes_fragment:Mb,clipping_planes_pars_fragment:bb,clipping_planes_pars_vertex:Eb,clipping_planes_vertex:Tb,color_fragment:Ab,color_pars_fragment:wb,color_pars_vertex:Rb,color_vertex:Cb,common:Pb,cube_uv_reflection_fragment:Lb,defaultnormal_vertex:Ib,displacementmap_pars_vertex:Db,displacementmap_vertex:Nb,emissivemap_fragment:Ub,emissivemap_pars_fragment:Ob,colorspace_fragment:Fb,colorspace_pars_fragment:Bb,envmap_fragment:kb,envmap_common_pars_fragment:Hb,envmap_pars_fragment:Vb,envmap_pars_vertex:zb,envmap_physical_pars_fragment:Qb,envmap_vertex:Gb,fog_vertex:Wb,fog_pars_vertex:Xb,fog_fragment:$b,fog_pars_fragment:jb,gradientmap_pars_fragment:qb,lightmap_pars_fragment:Kb,lights_lambert_fragment:Yb,lights_lambert_pars_fragment:Zb,lights_pars_begin:Jb,lights_toon_fragment:eE,lights_toon_pars_fragment:tE,lights_phong_fragment:nE,lights_phong_pars_fragment:iE,lights_physical_fragment:sE,lights_physical_pars_fragment:rE,lights_fragment_begin:oE,lights_fragment_maps:aE,lights_fragment_end:lE,logdepthbuf_fragment:cE,logdepthbuf_pars_fragment:uE,logdepthbuf_pars_vertex:hE,logdepthbuf_vertex:fE,map_fragment:dE,map_pars_fragment:pE,map_particle_fragment:mE,map_particle_pars_fragment:gE,metalnessmap_fragment:_E,metalnessmap_pars_fragment:vE,morphinstance_vertex:xE,morphcolor_vertex:yE,morphnormal_vertex:SE,morphtarget_pars_vertex:ME,morphtarget_vertex:bE,normal_fragment_begin:EE,normal_fragment_maps:TE,normal_pars_fragment:AE,normal_pars_vertex:wE,normal_vertex:RE,normalmap_pars_fragment:CE,clearcoat_normal_fragment_begin:PE,clearcoat_normal_fragment_maps:LE,clearcoat_pars_fragment:IE,iridescence_pars_fragment:DE,opaque_fragment:NE,packing:UE,premultiplied_alpha_fragment:OE,project_vertex:FE,dithering_fragment:BE,dithering_pars_fragment:kE,roughnessmap_fragment:HE,roughnessmap_pars_fragment:VE,shadowmap_pars_fragment:zE,shadowmap_pars_vertex:GE,shadowmap_vertex:WE,shadowmask_pars_fragment:XE,skinbase_vertex:$E,skinning_pars_vertex:jE,skinning_vertex:qE,skinnormal_vertex:KE,specularmap_fragment:YE,specularmap_pars_fragment:ZE,tonemapping_fragment:JE,tonemapping_pars_fragment:QE,transmission_fragment:eT,transmission_pars_fragment:tT,uv_pars_fragment:nT,uv_pars_vertex:iT,uv_vertex:sT,worldpos_vertex:rT,background_vert:oT,background_frag:aT,backgroundCube_vert:lT,backgroundCube_frag:cT,cube_vert:uT,cube_frag:hT,depth_vert:fT,depth_frag:dT,distanceRGBA_vert:pT,distanceRGBA_frag:mT,equirect_vert:gT,equirect_frag:_T,linedashed_vert:vT,linedashed_frag:xT,meshbasic_vert:yT,meshbasic_frag:ST,meshlambert_vert:MT,meshlambert_frag:bT,meshmatcap_vert:ET,meshmatcap_frag:TT,meshnormal_vert:AT,meshnormal_frag:wT,meshphong_vert:RT,meshphong_frag:CT,meshphysical_vert:PT,meshphysical_frag:LT,meshtoon_vert:IT,meshtoon_frag:DT,points_vert:NT,points_frag:UT,shadow_vert:OT,shadow_frag:FT,sprite_vert:BT,sprite_frag:kT},Me={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ii={basic:{uniforms:Zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new je(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Zt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Zt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new je(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Zt([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Zt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Zt([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Zt([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Zt([Me.common,Me.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Zt([Me.lights,Me.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ii.physical={uniforms:Zt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const ya={r:0,b:0,g:0},bs=new Yn,HT=new Ge;function VT(n,e,t,i,s,r,o){const a=new je(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function _(T){let E=!1;const M=g(T);M===null?p(a,l):M&&M.isColor&&(p(M,1),E=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,E){const M=g(E);M&&(M.isCubeTexture||M.mapping===bl)?(u===void 0&&(u=new sn(new Gs(1,1,1),new us({name:"BackgroundCubeMaterial",uniforms:Fr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),bs.copy(E.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(HT.makeRotationFromEuler(bs)),u.material.toneMapped=nt.getTransfer(M.colorSpace)!==mt,(h!==M||f!==M.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new sn(new Al(2,2),new us({name:"BackgroundMaterial",uniforms:Fr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=nt.getTransfer(M.colorSpace)!==mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,E){T.getRGB(ya,Fg(n)),i.buffers.color.setClear(ya.r,ya.g,ya.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:_,addToRenderList:m}}function zT(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(x,C,N,H,J){let ae=!1;const j=h(H,N,C);r!==j&&(r=j,c(r.object)),ae=d(x,H,N,J),ae&&g(x,H,N,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,M(x,C,N,H),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,C,N){const H=N.wireframe===!0;let J=i[x.id];J===void 0&&(J={},i[x.id]=J);let ae=J[C.id];ae===void 0&&(ae={},J[C.id]=ae);let j=ae[H];return j===void 0&&(j=f(l()),ae[H]=j),j}function f(x){const C=[],N=[],H=[];for(let J=0;J<t;J++)C[J]=0,N[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:H,object:x,attributes:{},index:null}}function d(x,C,N,H){const J=r.attributes,ae=C.attributes;let j=0;const ee=N.getAttributes();for(const W in ee)if(ee[W].location>=0){const ye=J[W];let Re=ae[W];if(Re===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(Re=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(Re=x.instanceColor)),ye===void 0||ye.attribute!==Re||Re&&ye.data!==Re.data)return!0;j++}return r.attributesNum!==j||r.index!==H}function g(x,C,N,H){const J={},ae=C.attributes;let j=0;const ee=N.getAttributes();for(const W in ee)if(ee[W].location>=0){let ye=ae[W];ye===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(ye=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(ye=x.instanceColor));const Re={};Re.attribute=ye,ye&&ye.data&&(Re.data=ye.data),J[W]=Re,j++}r.attributes=J,r.attributesNum=j,r.index=H}function _(){const x=r.newAttributes;for(let C=0,N=x.length;C<N;C++)x[C]=0}function m(x){p(x,0)}function p(x,C){const N=r.newAttributes,H=r.enabledAttributes,J=r.attributeDivisors;N[x]=1,H[x]===0&&(n.enableVertexAttribArray(x),H[x]=1),J[x]!==C&&(n.vertexAttribDivisor(x,C),J[x]=C)}function T(){const x=r.newAttributes,C=r.enabledAttributes;for(let N=0,H=C.length;N<H;N++)C[N]!==x[N]&&(n.disableVertexAttribArray(N),C[N]=0)}function E(x,C,N,H,J,ae,j){j===!0?n.vertexAttribIPointer(x,C,N,J,ae):n.vertexAttribPointer(x,C,N,H,J,ae)}function M(x,C,N,H){_();const J=H.attributes,ae=N.getAttributes(),j=C.defaultAttributeValues;for(const ee in ae){const W=ae[ee];if(W.location>=0){let ge=J[ee];if(ge===void 0&&(ee==="instanceMatrix"&&x.instanceMatrix&&(ge=x.instanceMatrix),ee==="instanceColor"&&x.instanceColor&&(ge=x.instanceColor)),ge!==void 0){const ye=ge.normalized,Re=ge.itemSize,Oe=e.get(ge);if(Oe===void 0)continue;const Qe=Oe.buffer,se=Oe.type,pe=Oe.bytesPerElement,be=se===n.INT||se===n.UNSIGNED_INT||ge.gpuType===vh;if(ge.isInterleavedBufferAttribute){const k=ge.data,ce=k.stride,oe=ge.offset;if(k.isInstancedInterleavedBuffer){for(let de=0;de<W.locationSize;de++)p(W.location+de,k.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let de=0;de<W.locationSize;de++)m(W.location+de);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let de=0;de<W.locationSize;de++)E(W.location+de,Re/W.locationSize,se,ye,ce*pe,(oe+Re/W.locationSize*de)*pe,be)}else{if(ge.isInstancedBufferAttribute){for(let k=0;k<W.locationSize;k++)p(W.location+k,ge.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let k=0;k<W.locationSize;k++)m(W.location+k);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let k=0;k<W.locationSize;k++)E(W.location+k,Re/W.locationSize,se,ye,Re*pe,Re/W.locationSize*k*pe,be)}}else if(j!==void 0){const ye=j[ee];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(W.location,ye);break;case 3:n.vertexAttrib3fv(W.location,ye);break;case 4:n.vertexAttrib4fv(W.location,ye);break;default:n.vertexAttrib1fv(W.location,ye)}}}}T()}function O(){P();for(const x in i){const C=i[x];for(const N in C){const H=C[N];for(const J in H)u(H[J].object),delete H[J];delete C[N]}delete i[x]}}function D(x){if(i[x.id]===void 0)return;const C=i[x.id];for(const N in C){const H=C[N];for(const J in H)u(H[J].object),delete H[J];delete C[N]}delete i[x.id]}function I(x){for(const C in i){const N=i[C];if(N[x.id]===void 0)continue;const H=N[x.id];for(const J in H)u(H[J].object),delete H[J];delete N[x.id]}}function P(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:v,dispose:O,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function GT(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function WT(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Cn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const P=I===$o&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Fi&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==zn&&!P)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:O,maxSamples:D}}function XT(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Cs,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,E=T*4;let M=p.clippingState||null;l.value=M,M=u(g,f,E,d);for(let O=0;O!==E;++O)M[O]=t[O];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=d;E!==_;++E,M+=4)o.copy(h[E]).applyMatrix4(T,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function $T(n){let e=new WeakMap;function t(o,a){return a===lu?o.mapping=Lr:a===cu&&(o.mapping=Ir),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===lu||a===cu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ib(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class wh extends Bg{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gr=4,Ad=[.125,.215,.35,.446,.526,.582],Is=20,gc=new wh,wd=new je;let _c=null,vc=0,xc=0,yc=!1;const Ps=(1+Math.sqrt(5))/2,cr=1/Ps,Rd=[new V(-Ps,cr,0),new V(Ps,cr,0),new V(-cr,0,Ps),new V(cr,0,Ps),new V(0,Ps,-cr),new V(0,Ps,cr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Cd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,vc,xc),this._renderer.xr.enabled=yc,e.scissorTest=!1,Sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lr||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:$o,format:Cn,colorSpace:ln,depthBuffer:!1},s=Pd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pd(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jT(r)),this._blurMaterial=qT(r,e,t)}return s}_compileMaterial(e){const t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,gc)}_sceneToCubeUV(e,t,i,s){const a=new tn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(wd),u.toneMapping=cs,u.autoClear=!1;const d=new Ds({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new sn(new Gs,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(wd),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const E=this._cubeSize;Sa(s,T*E,p>2?E:0,E,E),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Lr||e.mapping===Ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Id()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ld());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new sn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Sa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,gc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Rd[(s-r-1)%Rd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new sn(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Is-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Is;m>Is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Is}`);const p=[];let T=0;for(let I=0;I<Is;++I){const P=I/_,v=Math.exp(-P*P/2);p.push(v),I===0?T+=v:I<m&&(T+=2*v)}for(let I=0;I<p.length;I++)p[I]=p[I]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const M=this._sizeLods[s],O=3*M*(s>E-gr?s-E+gr:0),D=4*(this._cubeSize-M);Sa(t,O,D,3*M,2*M),l.setRenderTarget(t),l.render(h,gc)}}function jT(n){const e=[],t=[],i=[];let s=n;const r=n-gr+1+Ad.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-gr?l=Ad[o-n+gr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),E=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let D=0;D<d;D++){const I=D%3*2/3-1,P=D>2?0:-1,v=[I,P,0,I+2/3,P,0,I+2/3,P+1,0,I,P,0,I+2/3,P+1,0,I,P+1,0];T.set(v,_*g*D),E.set(f,m*g*D);const x=[D,D,D,D,D,D];M.set(x,p*g*D)}const O=new Zn;O.setAttribute("position",new an(T,_)),O.setAttribute("uv",new an(E,m)),O.setAttribute("faceIndex",new an(M,p)),e.push(O),s>gr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Pd(n,e,t){const i=new zs(n,e,t);return i.texture.mapping=bl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function qT(n,e,t){const i=new Float32Array(Is),s=new V(0,1,0);return new us({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Ld(){return new us({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Id(){return new us({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Rh(){return`

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
	`}function KT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===lu||l===cu,u=l===Lr||l===Ir;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Cd(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Cd(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function YT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ho("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ZT(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let E=0,M=T.length;E<M;E+=3){const O=T[E+0],D=T[E+1],I=T[E+2];f.push(O,D,D,I,I,O)}}else if(g!==void 0){const T=g.array;_=g.version;for(let E=0,M=T.length/3-1;E<M;E+=3){const O=E+0,D=E+1,I=E+2;f.push(O,D,D,I,I,O)}}else return;const m=new(Pg(f)?Og:Ug)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function JT(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T]*_[T];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function QT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function eA(n,e,t){const i=new WeakMap,s=new lt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let v=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let E=0;d===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let M=a.attributes.position.count*E,O=1;M>e.maxTextureSize&&(O=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const D=new Float32Array(M*O*4*h),I=new Ig(D,M,O,h);I.type=zn,I.needsUpdate=!0;const P=E*4;for(let x=0;x<h;x++){const C=m[x],N=p[x],H=T[x],J=M*O*4*x;for(let ae=0;ae<C.count;ae++){const j=ae*P;d===!0&&(s.fromBufferAttribute(C,ae),D[J+j+0]=s.x,D[J+j+1]=s.y,D[J+j+2]=s.z,D[J+j+3]=0),g===!0&&(s.fromBufferAttribute(N,ae),D[J+j+4]=s.x,D[J+j+5]=s.y,D[J+j+6]=s.z,D[J+j+7]=0),_===!0&&(s.fromBufferAttribute(H,ae),D[J+j+8]=s.x,D[J+j+9]=s.y,D[J+j+10]=s.z,D[J+j+11]=H.itemSize===4?s.w:1)}}f={count:h,texture:I,size:new it(M,O)},i.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function tA(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Vg extends Vt{constructor(e,t,i,s,r,o,a,l,c,u=Mr){if(u!==Mr&&u!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Mr&&(i=Vs),i===void 0&&u===Ur&&(i=Nr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zg=new Vt,Dd=new Vg(1,1),Gg=new Ig,Wg=new VM,Xg=new kg,Nd=[],Ud=[],Od=new Float32Array(16),Fd=new Float32Array(9),Bd=new Float32Array(4);function Wr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Nd[s];if(r===void 0&&(r=new Float32Array(s),Nd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wl(n,e){let t=Ud[e];t===void 0&&(t=new Int32Array(e),Ud[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function nA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function iA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function sA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function rA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function oA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,i))return;Bd.set(i),n.uniformMatrix2fv(this.addr,!1,Bd),Ot(t,i)}}function aA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,i))return;Fd.set(i),n.uniformMatrix3fv(this.addr,!1,Fd),Ot(t,i)}}function lA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,i))return;Od.set(i),n.uniformMatrix4fv(this.addr,!1,Od),Ot(t,i)}}function cA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function uA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function hA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function fA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function dA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function pA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function mA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function gA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function _A(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Dd.compareFunction=Cg,r=Dd):r=zg,t.setTexture2D(e||r,s)}function vA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Wg,s)}function xA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Xg,s)}function yA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Gg,s)}function SA(n){switch(n){case 5126:return nA;case 35664:return iA;case 35665:return sA;case 35666:return rA;case 35674:return oA;case 35675:return aA;case 35676:return lA;case 5124:case 35670:return cA;case 35667:case 35671:return uA;case 35668:case 35672:return hA;case 35669:case 35673:return fA;case 5125:return dA;case 36294:return pA;case 36295:return mA;case 36296:return gA;case 35678:case 36198:case 36298:case 36306:case 35682:return _A;case 35679:case 36299:case 36307:return vA;case 35680:case 36300:case 36308:case 36293:return xA;case 36289:case 36303:case 36311:case 36292:return yA}}function MA(n,e){n.uniform1fv(this.addr,e)}function bA(n,e){const t=Wr(e,this.size,2);n.uniform2fv(this.addr,t)}function EA(n,e){const t=Wr(e,this.size,3);n.uniform3fv(this.addr,t)}function TA(n,e){const t=Wr(e,this.size,4);n.uniform4fv(this.addr,t)}function AA(n,e){const t=Wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function wA(n,e){const t=Wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function RA(n,e){const t=Wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function CA(n,e){n.uniform1iv(this.addr,e)}function PA(n,e){n.uniform2iv(this.addr,e)}function LA(n,e){n.uniform3iv(this.addr,e)}function IA(n,e){n.uniform4iv(this.addr,e)}function DA(n,e){n.uniform1uiv(this.addr,e)}function NA(n,e){n.uniform2uiv(this.addr,e)}function UA(n,e){n.uniform3uiv(this.addr,e)}function OA(n,e){n.uniform4uiv(this.addr,e)}function FA(n,e,t){const i=this.cache,s=e.length,r=wl(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||zg,r[o])}function BA(n,e,t){const i=this.cache,s=e.length,r=wl(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Wg,r[o])}function kA(n,e,t){const i=this.cache,s=e.length,r=wl(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Xg,r[o])}function HA(n,e,t){const i=this.cache,s=e.length,r=wl(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Gg,r[o])}function VA(n){switch(n){case 5126:return MA;case 35664:return bA;case 35665:return EA;case 35666:return TA;case 35674:return AA;case 35675:return wA;case 35676:return RA;case 5124:case 35670:return CA;case 35667:case 35671:return PA;case 35668:case 35672:return LA;case 35669:case 35673:return IA;case 5125:return DA;case 36294:return NA;case 36295:return UA;case 36296:return OA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return BA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return HA}}class zA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=SA(t.type)}}class GA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=VA(t.type)}}class WA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Sc=/(\w+)(\])?(\[|\.)?/g;function kd(n,e){n.seq.push(e),n.map[e.id]=e}function XA(n,e,t){const i=n.name,s=i.length;for(Sc.lastIndex=0;;){const r=Sc.exec(i),o=Sc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){kd(t,c===void 0?new zA(a,n,e):new GA(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new WA(a),kd(t,h)),t=h}}}class za{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);XA(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Hd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const $A=37297;let jA=0;function qA(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Vd=new Ye;function KA(n){nt._getMatrix(Vd,nt.workingColorSpace,n);const e=`mat3( ${Vd.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case El:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function zd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+qA(n.getShaderSource(e),o)}else return s}function YA(n,e){const t=KA(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ZA(n,e){let t;switch(e){case YS:t="Linear";break;case ZS:t="Reinhard";break;case JS:t="Cineon";break;case QS:t="ACESFilmic";break;case tM:t="AgX";break;case nM:t="Neutral";break;case eM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ma=new V;function JA(){nt.getLuminanceCoefficients(Ma);const n=Ma.x.toFixed(4),e=Ma.y.toFixed(4),t=Ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function ew(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function fo(n){return n!==""}function Gd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bu(n){return n.replace(nw,sw)}const iw=new Map;function sw(n,e){let t=Ze[e];if(t===void 0){const i=iw.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bu(t)}const rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xd(n){return n.replace(rw,ow)}function ow(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $d(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function aw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===CS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function lw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Lr:case Ir:e="ENVMAP_TYPE_CUBE";break;case bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ir:e="ENVMAP_MODE_REFRACTION";break}return e}function uw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case mg:e="ENVMAP_BLENDING_MULTIPLY";break;case qS:e="ENVMAP_BLENDING_MIX";break;case KS:e="ENVMAP_BLENDING_ADD";break}return e}function hw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function fw(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=aw(t),c=lw(t),u=cw(t),h=uw(t),f=hw(t),d=QA(t),g=ew(r),_=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fo).join(`
`),p.length>0&&(p+=`
`)):(m=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),p=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cs?"#define TONE_MAPPING":"",t.toneMapping!==cs?Ze.tonemapping_pars_fragment:"",t.toneMapping!==cs?ZA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,YA("linearToOutputTexel",t.outputColorSpace),JA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),o=Bu(o),o=Gd(o,t),o=Wd(o,t),a=Bu(a),a=Gd(a,t),a=Wd(a,t),o=Xd(o),a=Xd(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===sd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+m+o,M=T+p+a,O=Hd(s,s.VERTEX_SHADER,E),D=Hd(s,s.FRAGMENT_SHADER,M);s.attachShader(_,O),s.attachShader(_,D),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(C){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(O).trim(),J=s.getShaderInfoLog(D).trim();let ae=!0,j=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,O,D);else{const ee=zd(s,O,"vertex"),W=zd(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+ee+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(H===""||J==="")&&(j=!1);j&&(C.diagnostics={runnable:ae,programLog:N,vertexShader:{log:H,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(O),s.deleteShader(D),P=new za(s,_),v=tw(s,_)}let P;this.getUniforms=function(){return P===void 0&&I(this),P};let v;this.getAttributes=function(){return v===void 0&&I(this),v};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,$A)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=D,this}let dw=0;class pw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new mw(e),t.set(e,i)),i}}class mw{constructor(e){this.id=dw++,this.code=e,this.usedTimes=0}}function gw(n,e,t,i,s,r,o){const a=new Dg,l=new pw,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,x,C,N,H){const J=N.fog,ae=H.geometry,j=v.isMeshStandardMaterial?N.environment:null,ee=(v.isMeshStandardMaterial?t:e).get(v.envMap||j),W=ee&&ee.mapping===bl?ee.image.height:null,ge=g[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const ye=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Re=ye!==void 0?ye.length:0;let Oe=0;ae.morphAttributes.position!==void 0&&(Oe=1),ae.morphAttributes.normal!==void 0&&(Oe=2),ae.morphAttributes.color!==void 0&&(Oe=3);let Qe,se,pe,be;if(ge){const qe=ii[ge];Qe=qe.vertexShader,se=qe.fragmentShader}else Qe=v.vertexShader,se=v.fragmentShader,l.update(v),pe=l.getVertexShaderID(v),be=l.getFragmentShaderID(v);const k=n.getRenderTarget(),ce=n.state.buffers.depth.getReversed(),oe=H.isInstancedMesh===!0,de=H.isBatchedMesh===!0,Fe=!!v.map,Ie=!!v.matcap,w=!!ee,S=!!v.aoMap,X=!!v.lightMap,te=!!v.bumpMap,$=!!v.normalMap,K=!!v.displacementMap,fe=!!v.emissiveMap,ne=!!v.metalnessMap,b=!!v.roughnessMap,y=v.anisotropy>0,F=v.clearcoat>0,R=v.dispersion>0,L=v.iridescence>0,U=v.sheen>0,he=v.transmission>0,Y=y&&!!v.anisotropyMap,ue=F&&!!v.clearcoatMap,Le=F&&!!v.clearcoatNormalMap,le=F&&!!v.clearcoatRoughnessMap,me=L&&!!v.iridescenceMap,Ce=L&&!!v.iridescenceThicknessMap,He=U&&!!v.sheenColorMap,we=U&&!!v.sheenRoughnessMap,ze=!!v.specularMap,Ve=!!v.specularColorMap,et=!!v.specularIntensityMap,B=he&&!!v.transmissionMap,Se=he&&!!v.thicknessMap,ie=!!v.gradientMap,re=!!v.alphaMap,ve=v.alphaTest>0,Ee=!!v.alphaHash,$e=!!v.extensions;let At=cs;v.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(At=n.toneMapping);const Ft={shaderID:ge,shaderType:v.type,shaderName:v.name,vertexShader:Qe,fragmentShader:se,defines:v.defines,customVertexShaderID:pe,customFragmentShaderID:be,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:de,batchingColor:de&&H._colorsTexture!==null,instancing:oe,instancingColor:oe&&H.instanceColor!==null,instancingMorph:oe&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:k===null?n.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ln,alphaToCoverage:!!v.alphaToCoverage,map:Fe,matcap:Ie,envMap:w,envMapMode:w&&ee.mapping,envMapCubeUVHeight:W,aoMap:S,lightMap:X,bumpMap:te,normalMap:$,displacementMap:f&&K,emissiveMap:fe,normalMapObjectSpace:$&&v.normalMapType===lM,normalMapTangentSpace:$&&v.normalMapType===Rg,metalnessMap:ne,roughnessMap:b,anisotropy:y,anisotropyMap:Y,clearcoat:F,clearcoatMap:ue,clearcoatNormalMap:Le,clearcoatRoughnessMap:le,dispersion:R,iridescence:L,iridescenceMap:me,iridescenceThicknessMap:Ce,sheen:U,sheenColorMap:He,sheenRoughnessMap:we,specularMap:ze,specularColorMap:Ve,specularIntensityMap:et,transmission:he,transmissionMap:B,thicknessMap:Se,gradientMap:ie,opaque:v.transparent===!1&&v.blending===Sr&&v.alphaToCoverage===!1,alphaMap:re,alphaTest:ve,alphaHash:Ee,combine:v.combine,mapUv:Fe&&_(v.map.channel),aoMapUv:S&&_(v.aoMap.channel),lightMapUv:X&&_(v.lightMap.channel),bumpMapUv:te&&_(v.bumpMap.channel),normalMapUv:$&&_(v.normalMap.channel),displacementMapUv:K&&_(v.displacementMap.channel),emissiveMapUv:fe&&_(v.emissiveMap.channel),metalnessMapUv:ne&&_(v.metalnessMap.channel),roughnessMapUv:b&&_(v.roughnessMap.channel),anisotropyMapUv:Y&&_(v.anisotropyMap.channel),clearcoatMapUv:ue&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Le&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(v.sheenRoughnessMap.channel),specularMapUv:ze&&_(v.specularMap.channel),specularColorMapUv:Ve&&_(v.specularColorMap.channel),specularIntensityMapUv:et&&_(v.specularIntensityMap.channel),transmissionMapUv:B&&_(v.transmissionMap.channel),thicknessMapUv:Se&&_(v.thicknessMap.channel),alphaMapUv:re&&_(v.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&($||y),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ae.attributes.uv&&(Fe||re),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ce,skinning:H.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Oe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,decodeVideoTexture:Fe&&v.map.isVideoTexture===!0&&nt.getTransfer(v.map.colorSpace)===mt,decodeVideoTextureEmissive:fe&&v.emissiveMap.isVideoTexture===!0&&nt.getTransfer(v.emissiveMap.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===si,flipSided:v.side===hn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:$e&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&v.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function p(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)x.push(C),x.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(T(x,v),E(x,v),x.push(n.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function T(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function E(v,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),v.push(a.mask)}function M(v){const x=g[v.type];let C;if(x){const N=ii[x];C=QM.clone(N.uniforms)}else C=v.uniforms;return C}function O(v,x){let C;for(let N=0,H=u.length;N<H;N++){const J=u[N];if(J.cacheKey===x){C=J,++C.usedTimes;break}}return C===void 0&&(C=new fw(n,x,v,r),u.push(C)),C}function D(v){if(--v.usedTimes===0){const x=u.indexOf(v);u[x]=u[u.length-1],u.pop(),v.destroy()}}function I(v){l.remove(v)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:O,releaseProgram:D,releaseShaderCache:I,programs:u,dispose:P}}function _w(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function vw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||vw),i.length>1&&i.sort(f||jd),s.length>1&&s.sort(f||jd)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function xw(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new qd,n.set(i,[o])):s>=r.length?(o=new qd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function yw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new je};break;case"SpotLight":t={position:new V,direction:new V,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function Sw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Mw=0;function bw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ew(n){const e=new yw,t=Sw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,r=new Ge,o=new Ge;function a(c){let u=0,h=0,f=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,E=0,M=0,O=0,D=0,I=0;c.sort(bw);for(let v=0,x=c.length;v<x;v++){const C=c[v],N=C.color,H=C.intensity,J=C.distance,ae=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=N.r*H,h+=N.g*H,f+=N.b*H;else if(C.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(C.sh.coefficients[j],H);I++}else if(C.isDirectionalLight){const j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ee=C.shadow,W=t.get(C);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=ae,i.directionalShadowMatrix[d]=C.shadow.matrix,T++}i.directional[d]=j,d++}else if(C.isSpotLight){const j=e.get(C);j.position.setFromMatrixPosition(C.matrixWorld),j.color.copy(N).multiplyScalar(H),j.distance=J,j.coneCos=Math.cos(C.angle),j.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),j.decay=C.decay,i.spot[_]=j;const ee=C.shadow;if(C.map&&(i.spotLightMap[O]=C.map,O++,ee.updateMatrices(C),C.castShadow&&D++),i.spotLightMatrix[_]=ee.matrix,C.castShadow){const W=t.get(C);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=ae,M++}_++}else if(C.isRectAreaLight){const j=e.get(C);j.color.copy(N).multiplyScalar(H),j.halfWidth.set(C.width*.5,0,0),j.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=j,m++}else if(C.isPointLight){const j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),j.distance=C.distance,j.decay=C.decay,C.castShadow){const ee=C.shadow,W=t.get(C);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,W.shadowCameraNear=ee.camera.near,W.shadowCameraFar=ee.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=ae,i.pointShadowMatrix[g]=C.shadow.matrix,E++}i.point[g]=j,g++}else if(C.isHemisphereLight){const j=e.get(C);j.skyColor.copy(C.color).multiplyScalar(H),j.groundColor.copy(C.groundColor).multiplyScalar(H),i.hemi[p]=j,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==T||P.numPointShadows!==E||P.numSpotShadows!==M||P.numSpotMaps!==O||P.numLightProbes!==I)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+O-D,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=I,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=T,P.numPointShadows=E,P.numSpotShadows=M,P.numSpotMaps=O,P.numLightProbes=I,i.version=Mw++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const E=c[p];if(E.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(E.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Kd(n){const e=new Ew(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Tw(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Kd(n),e.set(s,[a])):r>=o.length?(a=new Kd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Aw extends li{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=oM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ww extends li{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cw=`uniform sampler2D shadow_pass;
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
}`;function Pw(n,e,t){let i=new Ah;const s=new it,r=new it,o=new lt,a=new Aw({depthPacking:aM}),l=new ww,c={},u=t.maxTextureSize,h={[Oi]:hn,[hn]:Oi,[si]:si},f=new us({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Rw,fragmentShader:Cw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Zn;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new sn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pg;let p=this.type;this.render=function(D,I,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const v=n.getRenderTarget(),x=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),N=n.state;N.setBlending(ls),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const H=p!==bi&&this.type===bi,J=p===bi&&this.type!==bi;for(let ae=0,j=D.length;ae<j;ae++){const ee=D[ae],W=ee.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ge=W.getFrameExtents();if(s.multiply(ge),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ge.x),s.x=r.x*ge.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ge.y),s.y=r.y*ge.y,W.mapSize.y=r.y)),W.map===null||H===!0||J===!0){const Re=this.type!==bi?{minFilter:on,magFilter:on}:{};W.map!==null&&W.map.dispose(),W.map=new zs(s.x,s.y,Re),W.map.texture.name=ee.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const ye=W.getViewportCount();for(let Re=0;Re<ye;Re++){const Oe=W.getViewport(Re);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),N.viewport(o),W.updateMatrices(ee,Re),i=W.getFrustum(),M(I,P,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===bi&&T(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,x,C)};function T(D,I){const P=e.update(_);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,d.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new zs(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(I,null,P,f,_,null),d.uniforms.shadow_pass.value=D.mapPass.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(I,null,P,d,_,null)}function E(D,I,P,v){let x=null;const C=P.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(C!==void 0)x=C;else if(x=P.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const N=x.uuid,H=I.uuid;let J=c[N];J===void 0&&(J={},c[N]=J);let ae=J[H];ae===void 0&&(ae=x.clone(),J[H]=ae,I.addEventListener("dispose",O)),x=ae}if(x.visible=I.visible,x.wireframe=I.wireframe,v===bi?x.side=I.shadowSide!==null?I.shadowSide:I.side:x.side=I.shadowSide!==null?I.shadowSide:h[I.side],x.alphaMap=I.alphaMap,x.alphaTest=I.alphaTest,x.map=I.map,x.clipShadows=I.clipShadows,x.clippingPlanes=I.clippingPlanes,x.clipIntersection=I.clipIntersection,x.displacementMap=I.displacementMap,x.displacementScale=I.displacementScale,x.displacementBias=I.displacementBias,x.wireframeLinewidth=I.wireframeLinewidth,x.linewidth=I.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=n.properties.get(x);N.light=P}return x}function M(D,I,P,v,x){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&x===bi)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,D.matrixWorld);const H=e.update(D),J=D.material;if(Array.isArray(J)){const ae=H.groups;for(let j=0,ee=ae.length;j<ee;j++){const W=ae[j],ge=J[W.materialIndex];if(ge&&ge.visible){const ye=E(D,ge,v,x);D.onBeforeShadow(n,D,I,P,H,ye,W),n.renderBufferDirect(P,null,H,ye,D,W),D.onAfterShadow(n,D,I,P,H,ye,W)}}}else if(J.visible){const ae=E(D,J,v,x);D.onBeforeShadow(n,D,I,P,H,ae,null),n.renderBufferDirect(P,null,H,ae,D,null),D.onAfterShadow(n,D,I,P,H,ae,null)}}const N=D.children;for(let H=0,J=N.length;H<J;H++)M(N[H],I,P,v,x)}function O(D){D.target.removeEventListener("dispose",O);for(const P in c){const v=c[P],x=D.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}const Lw={[tu]:nu,[iu]:ou,[su]:au,[Pr]:ru,[nu]:tu,[ou]:iu,[au]:su,[ru]:Pr};function Iw(n,e){function t(){let B=!1;const Se=new lt;let ie=null;const re=new lt(0,0,0,0);return{setMask:function(ve){ie!==ve&&!B&&(n.colorMask(ve,ve,ve,ve),ie=ve)},setLocked:function(ve){B=ve},setClear:function(ve,Ee,$e,At,Ft){Ft===!0&&(ve*=At,Ee*=At,$e*=At),Se.set(ve,Ee,$e,At),re.equals(Se)===!1&&(n.clearColor(ve,Ee,$e,At),re.copy(Se))},reset:function(){B=!1,ie=null,re.set(-1,0,0,0)}}}function i(){let B=!1,Se=!1,ie=null,re=null,ve=null;return{setReversed:function(Ee){if(Se!==Ee){const $e=e.get("EXT_clip_control");Se?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const At=ve;ve=null,this.setClear(At)}Se=Ee},getReversed:function(){return Se},setTest:function(Ee){Ee?k(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(Ee){ie!==Ee&&!B&&(n.depthMask(Ee),ie=Ee)},setFunc:function(Ee){if(Se&&(Ee=Lw[Ee]),re!==Ee){switch(Ee){case tu:n.depthFunc(n.NEVER);break;case nu:n.depthFunc(n.ALWAYS);break;case iu:n.depthFunc(n.LESS);break;case Pr:n.depthFunc(n.LEQUAL);break;case su:n.depthFunc(n.EQUAL);break;case ru:n.depthFunc(n.GEQUAL);break;case ou:n.depthFunc(n.GREATER);break;case au:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}re=Ee}},setLocked:function(Ee){B=Ee},setClear:function(Ee){ve!==Ee&&(Se&&(Ee=1-Ee),n.clearDepth(Ee),ve=Ee)},reset:function(){B=!1,ie=null,re=null,ve=null,Se=!1}}}function s(){let B=!1,Se=null,ie=null,re=null,ve=null,Ee=null,$e=null,At=null,Ft=null;return{setTest:function(qe){B||(qe?k(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(qe){Se!==qe&&!B&&(n.stencilMask(qe),Se=qe)},setFunc:function(qe,fn,Nn){(ie!==qe||re!==fn||ve!==Nn)&&(n.stencilFunc(qe,fn,Nn),ie=qe,re=fn,ve=Nn)},setOp:function(qe,fn,Nn){(Ee!==qe||$e!==fn||At!==Nn)&&(n.stencilOp(qe,fn,Nn),Ee=qe,$e=fn,At=Nn)},setLocked:function(qe){B=qe},setClear:function(qe){Ft!==qe&&(n.clearStencil(qe),Ft=qe)},reset:function(){B=!1,Se=null,ie=null,re=null,ve=null,Ee=null,$e=null,At=null,Ft=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,E=null,M=null,O=null,D=null,I=new je(0,0,0),P=0,v=!1,x=null,C=null,N=null,H=null,J=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ee=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(W)[1]),j=ee>=1):W.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),j=ee>=2);let ge=null,ye={};const Re=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),Qe=new lt().fromArray(Re),se=new lt().fromArray(Oe);function pe(B,Se,ie,re){const ve=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(B,Ee),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<ie;$e++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,re,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(Se+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return Ee}const be={};be[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(n.DEPTH_TEST),o.setFunc(Pr),te(!1),$(Kf),k(n.CULL_FACE),S(ls);function k(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function ce(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function oe(B,Se){return h[B]!==Se?(n.bindFramebuffer(B,Se),h[B]=Se,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Se),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function de(B,Se){let ie=d,re=!1;if(B){ie=f.get(Se),ie===void 0&&(ie=[],f.set(Se,ie));const ve=B.textures;if(ie.length!==ve.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,$e=ve.length;Ee<$e;Ee++)ie[Ee]=n.COLOR_ATTACHMENT0+Ee;ie.length=ve.length,re=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,re=!0);re&&n.drawBuffers(ie)}function Fe(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const Ie={[Ls]:n.FUNC_ADD,[LS]:n.FUNC_SUBTRACT,[IS]:n.FUNC_REVERSE_SUBTRACT};Ie[DS]=n.MIN,Ie[NS]=n.MAX;const w={[US]:n.ZERO,[OS]:n.ONE,[FS]:n.SRC_COLOR,[Qc]:n.SRC_ALPHA,[GS]:n.SRC_ALPHA_SATURATE,[VS]:n.DST_COLOR,[kS]:n.DST_ALPHA,[BS]:n.ONE_MINUS_SRC_COLOR,[eu]:n.ONE_MINUS_SRC_ALPHA,[zS]:n.ONE_MINUS_DST_COLOR,[HS]:n.ONE_MINUS_DST_ALPHA,[WS]:n.CONSTANT_COLOR,[XS]:n.ONE_MINUS_CONSTANT_COLOR,[$S]:n.CONSTANT_ALPHA,[jS]:n.ONE_MINUS_CONSTANT_ALPHA};function S(B,Se,ie,re,ve,Ee,$e,At,Ft,qe){if(B===ls){_===!0&&(ce(n.BLEND),_=!1);return}if(_===!1&&(k(n.BLEND),_=!0),B!==PS){if(B!==m||qe!==v){if((p!==Ls||M!==Ls)&&(n.blendEquation(n.FUNC_ADD),p=Ls,M=Ls),qe)switch(B){case Sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yf:n.blendFunc(n.ONE,n.ONE);break;case Zf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}T=null,E=null,O=null,D=null,I.set(0,0,0),P=0,m=B,v=qe}return}ve=ve||Se,Ee=Ee||ie,$e=$e||re,(Se!==p||ve!==M)&&(n.blendEquationSeparate(Ie[Se],Ie[ve]),p=Se,M=ve),(ie!==T||re!==E||Ee!==O||$e!==D)&&(n.blendFuncSeparate(w[ie],w[re],w[Ee],w[$e]),T=ie,E=re,O=Ee,D=$e),(At.equals(I)===!1||Ft!==P)&&(n.blendColor(At.r,At.g,At.b,Ft),I.copy(At),P=Ft),m=B,v=!1}function X(B,Se){B.side===si?ce(n.CULL_FACE):k(n.CULL_FACE);let ie=B.side===hn;Se&&(ie=!ie),te(ie),B.blending===Sr&&B.transparent===!1?S(ls):S(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const re=B.stencilWrite;a.setTest(re),re&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),fe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?k(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(B){x!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),x=B)}function $(B){B!==wS?(k(n.CULL_FACE),B!==C&&(B===Kf?n.cullFace(n.BACK):B===RS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),C=B}function K(B){B!==N&&(j&&n.lineWidth(B),N=B)}function fe(B,Se,ie){B?(k(n.POLYGON_OFFSET_FILL),(H!==Se||J!==ie)&&(n.polygonOffset(Se,ie),H=Se,J=ie)):ce(n.POLYGON_OFFSET_FILL)}function ne(B){B?k(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function b(B){B===void 0&&(B=n.TEXTURE0+ae-1),ge!==B&&(n.activeTexture(B),ge=B)}function y(B,Se,ie){ie===void 0&&(ge===null?ie=n.TEXTURE0+ae-1:ie=ge);let re=ye[ie];re===void 0&&(re={type:void 0,texture:void 0},ye[ie]=re),(re.type!==B||re.texture!==Se)&&(ge!==ie&&(n.activeTexture(ie),ge=ie),n.bindTexture(B,Se||be[B]),re.type=B,re.texture=Se)}function F(){const B=ye[ge];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function R(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function L(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function U(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(B){Qe.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Qe.copy(B))}function we(B){se.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),se.copy(B))}function ze(B,Se){let ie=c.get(Se);ie===void 0&&(ie=new WeakMap,c.set(Se,ie));let re=ie.get(B);re===void 0&&(re=n.getUniformBlockIndex(Se,B.name),ie.set(B,re))}function Ve(B,Se){const re=c.get(Se).get(B);l.get(Se)!==re&&(n.uniformBlockBinding(Se,re,B.__bindingPointIndex),l.set(Se,re))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ge=null,ye={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,E=null,M=null,O=null,D=null,I=new je(0,0,0),P=0,v=!1,x=null,C=null,N=null,H=null,J=null,Qe.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:k,disable:ce,bindFramebuffer:oe,drawBuffers:de,useProgram:Fe,setBlending:S,setMaterial:X,setFlipSided:te,setCullFace:$,setLineWidth:K,setPolygonOffset:fe,setScissorTest:ne,activeTexture:b,bindTexture:y,unbindTexture:F,compressedTexImage2D:R,compressedTexImage3D:L,texImage2D:me,texImage3D:Ce,updateUBOMapping:ze,uniformBlockBinding:Ve,texStorage2D:Le,texStorage3D:le,texSubImage2D:U,texSubImage3D:he,compressedTexSubImage2D:Y,compressedTexSubImage3D:ue,scissor:He,viewport:we,reset:et}}function Yd(n,e,t,i){const s=Dw(i);switch(t){case Sg:return n*e;case bg:return n*e;case Eg:return n*e*2;case Sh:return n*e/s.components*s.byteLength;case Mh:return n*e/s.components*s.byteLength;case Tg:return n*e*2/s.components*s.byteLength;case bh:return n*e*2/s.components*s.byteLength;case Mg:return n*e*3/s.components*s.byteLength;case Cn:return n*e*4/s.components*s.byteLength;case Eh:return n*e*4/s.components*s.byteLength;case Fa:case Ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ka:case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hu:case du:return Math.max(n,16)*Math.max(e,8)/4;case uu:case fu:return Math.max(n,8)*Math.max(e,8)/2;case pu:case mu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _u:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case yu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Su:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case bu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Tu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Au:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case wu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ru:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Cu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Pu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Va:case Lu:case Iu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ag:case Du:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Nu:case Uu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dw(n){switch(n){case Fi:case vg:return{byteLength:1,components:1};case Fo:case xg:case $o:return{byteLength:2,components:1};case xh:case yh:return{byteLength:2,components:4};case Vs:case vh:case zn:return{byteLength:4,components:1};case yg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Nw(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return d?new OffscreenCanvas(b,y):Ho("canvas")}function _(b,y,F){let R=1;const L=ne(b);if((L.width>F||L.height>F)&&(R=F/Math.max(L.width,L.height)),R<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const U=Math.floor(R*L.width),he=Math.floor(R*L.height);h===void 0&&(h=g(U,he));const Y=y?g(U,he):h;return Y.width=U,Y.height=he,Y.getContext("2d").drawImage(b,0,0,U,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+U+"x"+he+")."),Y}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(b,y,F,R,L=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let U=y;if(y===n.RED&&(F===n.FLOAT&&(U=n.R32F),F===n.HALF_FLOAT&&(U=n.R16F),F===n.UNSIGNED_BYTE&&(U=n.R8)),y===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(U=n.R8UI),F===n.UNSIGNED_SHORT&&(U=n.R16UI),F===n.UNSIGNED_INT&&(U=n.R32UI),F===n.BYTE&&(U=n.R8I),F===n.SHORT&&(U=n.R16I),F===n.INT&&(U=n.R32I)),y===n.RG&&(F===n.FLOAT&&(U=n.RG32F),F===n.HALF_FLOAT&&(U=n.RG16F),F===n.UNSIGNED_BYTE&&(U=n.RG8)),y===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(U=n.RG8UI),F===n.UNSIGNED_SHORT&&(U=n.RG16UI),F===n.UNSIGNED_INT&&(U=n.RG32UI),F===n.BYTE&&(U=n.RG8I),F===n.SHORT&&(U=n.RG16I),F===n.INT&&(U=n.RG32I)),y===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(U=n.RGB8UI),F===n.UNSIGNED_SHORT&&(U=n.RGB16UI),F===n.UNSIGNED_INT&&(U=n.RGB32UI),F===n.BYTE&&(U=n.RGB8I),F===n.SHORT&&(U=n.RGB16I),F===n.INT&&(U=n.RGB32I)),y===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(U=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(U=n.RGBA16UI),F===n.UNSIGNED_INT&&(U=n.RGBA32UI),F===n.BYTE&&(U=n.RGBA8I),F===n.SHORT&&(U=n.RGBA16I),F===n.INT&&(U=n.RGBA32I)),y===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(U=n.RGB9_E5),y===n.RGBA){const he=L?El:nt.getTransfer(R);F===n.FLOAT&&(U=n.RGBA32F),F===n.HALF_FLOAT&&(U=n.RGBA16F),F===n.UNSIGNED_BYTE&&(U=he===mt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(U=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(U=n.RGB5_A1)}return(U===n.R16F||U===n.R32F||U===n.RG16F||U===n.RG32F||U===n.RGBA16F||U===n.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function M(b,y){let F;return b?y===null||y===Vs||y===Nr?F=n.DEPTH24_STENCIL8:y===zn?F=n.DEPTH32F_STENCIL8:y===Fo&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Vs||y===Nr?F=n.DEPTH_COMPONENT24:y===zn?F=n.DEPTH_COMPONENT32F:y===Fo&&(F=n.DEPTH_COMPONENT16),F}function O(b,y){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==on&&b.minFilter!==Sn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function D(b){const y=b.target;y.removeEventListener("dispose",D),P(y),y.isVideoTexture&&u.delete(y)}function I(b){const y=b.target;y.removeEventListener("dispose",I),x(y)}function P(b){const y=i.get(b);if(y.__webglInit===void 0)return;const F=b.source,R=f.get(F);if(R){const L=R[y.__cacheKey];L.usedTimes--,L.usedTimes===0&&v(b),Object.keys(R).length===0&&f.delete(F)}i.remove(b)}function v(b){const y=i.get(b);n.deleteTexture(y.__webglTexture);const F=b.source,R=f.get(F);delete R[y.__cacheKey],o.memory.textures--}function x(b){const y=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(y.__webglFramebuffer[R]))for(let L=0;L<y.__webglFramebuffer[R].length;L++)n.deleteFramebuffer(y.__webglFramebuffer[R][L]);else n.deleteFramebuffer(y.__webglFramebuffer[R]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[R])}else{if(Array.isArray(y.__webglFramebuffer))for(let R=0;R<y.__webglFramebuffer.length;R++)n.deleteFramebuffer(y.__webglFramebuffer[R]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let R=0;R<y.__webglColorRenderbuffer.length;R++)y.__webglColorRenderbuffer[R]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[R]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=b.textures;for(let R=0,L=F.length;R<L;R++){const U=i.get(F[R]);U.__webglTexture&&(n.deleteTexture(U.__webglTexture),o.memory.textures--),i.remove(F[R])}i.remove(b)}let C=0;function N(){C=0}function H(){const b=C;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),C+=1,b}function J(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function ae(b,y){const F=i.get(b);if(b.isVideoTexture&&K(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const R=b.image;if(R===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(R.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(F,b,y);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+y)}function j(b,y){const F=i.get(b);if(b.version>0&&F.__version!==b.version){se(F,b,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+y)}function ee(b,y){const F=i.get(b);if(b.version>0&&F.__version!==b.version){se(F,b,y);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+y)}function W(b,y){const F=i.get(b);if(b.version>0&&F.__version!==b.version){pe(F,b,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+y)}const ge={[Dr]:n.REPEAT,[os]:n.CLAMP_TO_EDGE,[tl]:n.MIRRORED_REPEAT},ye={[on]:n.NEAREST,[_g]:n.NEAREST_MIPMAP_NEAREST,[uo]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Oa]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},Re={[cM]:n.NEVER,[mM]:n.ALWAYS,[uM]:n.LESS,[Cg]:n.LEQUAL,[hM]:n.EQUAL,[pM]:n.GEQUAL,[fM]:n.GREATER,[dM]:n.NOTEQUAL};function Oe(b,y){if(y.type===zn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Sn||y.magFilter===Oa||y.magFilter===uo||y.magFilter===Ci||y.minFilter===Sn||y.minFilter===Oa||y.minFilter===uo||y.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,ge[y.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ge[y.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ge[y.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ye[y.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ye[y.minFilter]),y.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Re[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===on||y.minFilter!==uo&&y.minFilter!==Ci||y.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Qe(b,y){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",D));const R=y.source;let L=f.get(R);L===void 0&&(L={},f.set(R,L));const U=J(y);if(U!==b.__cacheKey){L[U]===void 0&&(L[U]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),L[U].usedTimes++;const he=L[b.__cacheKey];he!==void 0&&(L[b.__cacheKey].usedTimes--,he.usedTimes===0&&v(y)),b.__cacheKey=U,b.__webglTexture=L[U].texture}return F}function se(b,y,F){let R=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(R=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(R=n.TEXTURE_3D);const L=Qe(b,y),U=y.source;t.bindTexture(R,b.__webglTexture,n.TEXTURE0+F);const he=i.get(U);if(U.version!==he.__version||L===!0){t.activeTexture(n.TEXTURE0+F);const Y=nt.getPrimaries(nt.workingColorSpace),ue=y.colorSpace===rs?null:nt.getPrimaries(y.colorSpace),Le=y.colorSpace===rs||Y===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let le=_(y.image,!1,s.maxTextureSize);le=fe(y,le);const me=r.convert(y.format,y.colorSpace),Ce=r.convert(y.type);let He=E(y.internalFormat,me,Ce,y.colorSpace,y.isVideoTexture);Oe(R,y);let we;const ze=y.mipmaps,Ve=y.isVideoTexture!==!0,et=he.__version===void 0||L===!0,B=U.dataReady,Se=O(y,le);if(y.isDepthTexture)He=M(y.format===Ur,y.type),et&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,He,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,He,le.width,le.height,0,me,Ce,null));else if(y.isDataTexture)if(ze.length>0){Ve&&et&&t.texStorage2D(n.TEXTURE_2D,Se,He,ze[0].width,ze[0].height);for(let ie=0,re=ze.length;ie<re;ie++)we=ze[ie],Ve?B&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,we.width,we.height,me,Ce,we.data):t.texImage2D(n.TEXTURE_2D,ie,He,we.width,we.height,0,me,Ce,we.data);y.generateMipmaps=!1}else Ve?(et&&t.texStorage2D(n.TEXTURE_2D,Se,He,le.width,le.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,me,Ce,le.data)):t.texImage2D(n.TEXTURE_2D,0,He,le.width,le.height,0,me,Ce,le.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ve&&et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,He,ze[0].width,ze[0].height,le.depth);for(let ie=0,re=ze.length;ie<re;ie++)if(we=ze[ie],y.format!==Cn)if(me!==null)if(Ve){if(B)if(y.layerUpdates.size>0){const ve=Yd(we.width,we.height,y.format,y.type);for(const Ee of y.layerUpdates){const $e=we.data.subarray(Ee*ve/we.data.BYTES_PER_ELEMENT,(Ee+1)*ve/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Ee,we.width,we.height,1,me,$e)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,we.width,we.height,le.depth,me,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,He,we.width,we.height,le.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,we.width,we.height,le.depth,me,Ce,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,He,we.width,we.height,le.depth,0,me,Ce,we.data)}else{Ve&&et&&t.texStorage2D(n.TEXTURE_2D,Se,He,ze[0].width,ze[0].height);for(let ie=0,re=ze.length;ie<re;ie++)we=ze[ie],y.format!==Cn?me!==null?Ve?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,we.width,we.height,me,we.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,He,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?B&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,we.width,we.height,me,Ce,we.data):t.texImage2D(n.TEXTURE_2D,ie,He,we.width,we.height,0,me,Ce,we.data)}else if(y.isDataArrayTexture)if(Ve){if(et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,He,le.width,le.height,le.depth),B)if(y.layerUpdates.size>0){const ie=Yd(le.width,le.height,y.format,y.type);for(const re of y.layerUpdates){const ve=le.data.subarray(re*ie/le.data.BYTES_PER_ELEMENT,(re+1)*ie/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,le.width,le.height,1,me,Ce,ve)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,me,Ce,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,le.width,le.height,le.depth,0,me,Ce,le.data);else if(y.isData3DTexture)Ve?(et&&t.texStorage3D(n.TEXTURE_3D,Se,He,le.width,le.height,le.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,me,Ce,le.data)):t.texImage3D(n.TEXTURE_3D,0,He,le.width,le.height,le.depth,0,me,Ce,le.data);else if(y.isFramebufferTexture){if(et)if(Ve)t.texStorage2D(n.TEXTURE_2D,Se,He,le.width,le.height);else{let ie=le.width,re=le.height;for(let ve=0;ve<Se;ve++)t.texImage2D(n.TEXTURE_2D,ve,He,ie,re,0,me,Ce,null),ie>>=1,re>>=1}}else if(ze.length>0){if(Ve&&et){const ie=ne(ze[0]);t.texStorage2D(n.TEXTURE_2D,Se,He,ie.width,ie.height)}for(let ie=0,re=ze.length;ie<re;ie++)we=ze[ie],Ve?B&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,me,Ce,we):t.texImage2D(n.TEXTURE_2D,ie,He,me,Ce,we);y.generateMipmaps=!1}else if(Ve){if(et){const ie=ne(le);t.texStorage2D(n.TEXTURE_2D,Se,He,ie.width,ie.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Ce,le)}else t.texImage2D(n.TEXTURE_2D,0,He,me,Ce,le);m(y)&&p(R),he.__version=U.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function pe(b,y,F){if(y.image.length!==6)return;const R=Qe(b,y),L=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const U=i.get(L);if(L.version!==U.__version||R===!0){t.activeTexture(n.TEXTURE0+F);const he=nt.getPrimaries(nt.workingColorSpace),Y=y.colorSpace===rs?null:nt.getPrimaries(y.colorSpace),ue=y.colorSpace===rs||he===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Le=y.isCompressedTexture||y.image[0].isCompressedTexture,le=y.image[0]&&y.image[0].isDataTexture,me=[];for(let re=0;re<6;re++)!Le&&!le?me[re]=_(y.image[re],!0,s.maxCubemapSize):me[re]=le?y.image[re].image:y.image[re],me[re]=fe(y,me[re]);const Ce=me[0],He=r.convert(y.format,y.colorSpace),we=r.convert(y.type),ze=E(y.internalFormat,He,we,y.colorSpace),Ve=y.isVideoTexture!==!0,et=U.__version===void 0||R===!0,B=L.dataReady;let Se=O(y,Ce);Oe(n.TEXTURE_CUBE_MAP,y);let ie;if(Le){Ve&&et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,ze,Ce.width,Ce.height);for(let re=0;re<6;re++){ie=me[re].mipmaps;for(let ve=0;ve<ie.length;ve++){const Ee=ie[ve];y.format!==Cn?He!==null?Ve?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,0,0,Ee.width,Ee.height,He,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,ze,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,0,0,Ee.width,Ee.height,He,we,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,ze,Ee.width,Ee.height,0,He,we,Ee.data)}}}else{if(ie=y.mipmaps,Ve&&et){ie.length>0&&Se++;const re=ne(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,ze,re.width,re.height)}for(let re=0;re<6;re++)if(le){Ve?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,me[re].width,me[re].height,He,we,me[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,me[re].width,me[re].height,0,He,we,me[re].data);for(let ve=0;ve<ie.length;ve++){const $e=ie[ve].image[re].image;Ve?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,0,0,$e.width,$e.height,He,we,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,ze,$e.width,$e.height,0,He,we,$e.data)}}else{Ve?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,He,we,me[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,He,we,me[re]);for(let ve=0;ve<ie.length;ve++){const Ee=ie[ve];Ve?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,0,0,He,we,Ee.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,ze,He,we,Ee.image[re])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),U.__version=L.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function be(b,y,F,R,L,U){const he=r.convert(F.format,F.colorSpace),Y=r.convert(F.type),ue=E(F.internalFormat,he,Y,F.colorSpace),Le=i.get(y),le=i.get(F);if(le.__renderTarget=y,!Le.__hasExternalTextures){const me=Math.max(1,y.width>>U),Ce=Math.max(1,y.height>>U);L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?t.texImage3D(L,U,ue,me,Ce,y.depth,0,he,Y,null):t.texImage2D(L,U,ue,me,Ce,0,he,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),$(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,R,L,le.__webglTexture,0,te(y)):(L===n.TEXTURE_2D||L>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,R,L,le.__webglTexture,U),t.bindFramebuffer(n.FRAMEBUFFER,null)}function k(b,y,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),y.depthBuffer){const R=y.depthTexture,L=R&&R.isDepthTexture?R.type:null,U=M(y.stencilBuffer,L),he=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=te(y);$(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,U,y.width,y.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,U,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,U,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,b)}else{const R=y.textures;for(let L=0;L<R.length;L++){const U=R[L],he=r.convert(U.format,U.colorSpace),Y=r.convert(U.type),ue=E(U.internalFormat,he,Y,U.colorSpace),Le=te(y);F&&$(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,ue,y.width,y.height):$(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,ue,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ue,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const R=i.get(y.depthTexture);R.__renderTarget=y,(!R.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ae(y.depthTexture,0);const L=R.__webglTexture,U=te(y);if(y.depthTexture.format===Mr)$(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,L,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,L,0);else if(y.depthTexture.format===Ur)$(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,L,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,L,0);else throw new Error("Unknown depthTexture format")}function oe(b){const y=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const R=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),R){const L=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,R.removeEventListener("dispose",L)};R.addEventListener("dispose",L),y.__depthDisposeCallback=L}y.__boundDepthTexture=R}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ce(y.__webglFramebuffer,b)}else if(F){y.__webglDepthbuffer=[];for(let R=0;R<6;R++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[R]),y.__webglDepthbuffer[R]===void 0)y.__webglDepthbuffer[R]=n.createRenderbuffer(),k(y.__webglDepthbuffer[R],b,!1);else{const L=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,U=y.__webglDepthbuffer[R];n.bindRenderbuffer(n.RENDERBUFFER,U),n.framebufferRenderbuffer(n.FRAMEBUFFER,L,n.RENDERBUFFER,U)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),k(y.__webglDepthbuffer,b,!1);else{const R=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,L=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,L),n.framebufferRenderbuffer(n.FRAMEBUFFER,R,n.RENDERBUFFER,L)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(b,y,F){const R=i.get(b);y!==void 0&&be(R.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&oe(b)}function Fe(b){const y=b.texture,F=i.get(b),R=i.get(y);b.addEventListener("dispose",I);const L=b.textures,U=b.isWebGLCubeRenderTarget===!0,he=L.length>1;if(he||(R.__webglTexture===void 0&&(R.__webglTexture=n.createTexture()),R.__version=y.version,o.memory.textures++),U){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let ue=0;ue<y.mipmaps.length;ue++)F.__webglFramebuffer[Y][ue]=n.createFramebuffer()}else F.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<y.mipmaps.length;Y++)F.__webglFramebuffer[Y]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(he)for(let Y=0,ue=L.length;Y<ue;Y++){const Le=i.get(L[Y]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&$(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<L.length;Y++){const ue=L[Y];F.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);const Le=r.convert(ue.format,ue.colorSpace),le=r.convert(ue.type),me=E(ue.internalFormat,Le,le,ue.colorSpace,b.isXRRenderTarget===!0),Ce=te(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,me,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),k(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(U){t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,y);for(let Y=0;Y<6;Y++)if(y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)be(F.__webglFramebuffer[Y][ue],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ue);else be(F.__webglFramebuffer[Y],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let Y=0,ue=L.length;Y<ue;Y++){const Le=L[Y],le=i.get(Le);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),Oe(n.TEXTURE_2D,Le),be(F.__webglFramebuffer,b,Le,n.COLOR_ATTACHMENT0+Y,n.TEXTURE_2D,0),m(Le)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Y=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,R.__webglTexture),Oe(Y,y),y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)be(F.__webglFramebuffer[ue],b,y,n.COLOR_ATTACHMENT0,Y,ue);else be(F.__webglFramebuffer,b,y,n.COLOR_ATTACHMENT0,Y,0);m(y)&&p(Y),t.unbindTexture()}b.depthBuffer&&oe(b)}function Ie(b){const y=b.textures;for(let F=0,R=y.length;F<R;F++){const L=y[F];if(m(L)){const U=T(b),he=i.get(L).__webglTexture;t.bindTexture(U,he),p(U),t.unbindTexture()}}}const w=[],S=[];function X(b){if(b.samples>0){if($(b)===!1){const y=b.textures,F=b.width,R=b.height;let L=n.COLOR_BUFFER_BIT;const U=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(b),Y=y.length>1;if(Y)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(L|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(L|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[ue]);const Le=i.get(y[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,F,R,0,0,F,R,L,n.NEAREST),l===!0&&(w.length=0,S.length=0,w.push(n.COLOR_ATTACHMENT0+ue),b.depthBuffer&&b.resolveDepthBuffer===!1&&(w.push(U),S.push(U),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,S)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,he.__webglColorRenderbuffer[ue]);const Le=i.get(y[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function te(b){return Math.min(s.maxSamples,b.samples)}function $(b){const y=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function K(b){const y=o.render.frame;u.get(b)!==y&&(u.set(b,y),b.update())}function fe(b,y){const F=b.colorSpace,R=b.format,L=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==ln&&F!==rs&&(nt.getTransfer(F)===mt?(R!==Cn||L!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function ne(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.setTexture2D=ae,this.setTexture2DArray=j,this.setTexture3D=ee,this.setTextureCube=W,this.rebindTextures=de,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=$}function Uw(n,e){function t(i,s=rs){let r;const o=nt.getTransfer(s);if(i===Fi)return n.UNSIGNED_BYTE;if(i===xh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vg)return n.BYTE;if(i===xg)return n.SHORT;if(i===Fo)return n.UNSIGNED_SHORT;if(i===vh)return n.INT;if(i===Vs)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===$o)return n.HALF_FLOAT;if(i===Sg)return n.ALPHA;if(i===Mg)return n.RGB;if(i===Cn)return n.RGBA;if(i===bg)return n.LUMINANCE;if(i===Eg)return n.LUMINANCE_ALPHA;if(i===Mr)return n.DEPTH_COMPONENT;if(i===Ur)return n.DEPTH_STENCIL;if(i===Sh)return n.RED;if(i===Mh)return n.RED_INTEGER;if(i===Tg)return n.RG;if(i===bh)return n.RG_INTEGER;if(i===Eh)return n.RGBA_INTEGER;if(i===Fa||i===Ba||i===ka||i===Ha)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uu||i===hu||i===fu||i===du)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===uu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===du)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pu||i===mu||i===gu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===pu||i===mu)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===gu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_u||i===vu||i===xu||i===yu||i===Su||i===Mu||i===bu||i===Eu||i===Tu||i===Au||i===wu||i===Ru||i===Cu||i===Pu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_u)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Su)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Eu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Au)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ru)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Va||i===Lu||i===Iu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Va)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Iu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ag||i===Du||i===Nu||i===Uu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Du)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Nr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Ow extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ns extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fw={type:"move"};class Mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ns;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Bw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kw=`
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

}`;class Hw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Vt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new us({vertexShader:Bw,fragmentShader:kw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new sn(new Al(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vw extends Ws{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new Hw,m=t.getContextAttributes();let p=null,T=null;const E=[],M=[],O=new it;let D=null;const I=new tn;I.viewport=new lt;const P=new tn;P.viewport=new lt;const v=[I,P],x=new Ow;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let pe=E[se];return pe===void 0&&(pe=new Mc,E[se]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(se){let pe=E[se];return pe===void 0&&(pe=new Mc,E[se]=pe),pe.getGripSpace()},this.getHand=function(se){let pe=E[se];return pe===void 0&&(pe=new Mc,E[se]=pe),pe.getHandSpace()};function H(se){const pe=M.indexOf(se.inputSource);if(pe===-1)return;const be=E[pe];be!==void 0&&(be.update(se.inputSource,se.frame,c||o),be.dispatchEvent({type:se.type,data:se.inputSource}))}function J(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ae);for(let se=0;se<E.length;se++){const pe=M[se];pe!==null&&(M[se]=null,E[se].disconnect(pe))}C=null,N=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,T=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ae),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0){const pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new zs(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let pe=null,be=null,k=null;m.depth&&(k=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=m.stencil?Ur:Mr,be=m.stencil?Nr:Vs);const ce={colorFormat:t.RGBA8,depthFormat:k,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(ce),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new zs(f.textureWidth,f.textureHeight,{format:Cn,type:Fi,depthTexture:new Vg(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(se){for(let pe=0;pe<se.removed.length;pe++){const be=se.removed[pe],k=M.indexOf(be);k>=0&&(M[k]=null,E[k].disconnect(be))}for(let pe=0;pe<se.added.length;pe++){const be=se.added[pe];let k=M.indexOf(be);if(k===-1){for(let oe=0;oe<E.length;oe++)if(oe>=M.length){M.push(be),k=oe;break}else if(M[oe]===null){M[oe]=be,k=oe;break}if(k===-1)break}const ce=E[k];ce&&ce.connect(be)}}const j=new V,ee=new V;function W(se,pe,be){j.setFromMatrixPosition(pe.matrixWorld),ee.setFromMatrixPosition(be.matrixWorld);const k=j.distanceTo(ee),ce=pe.projectionMatrix.elements,oe=be.projectionMatrix.elements,de=ce[14]/(ce[10]-1),Fe=ce[14]/(ce[10]+1),Ie=(ce[9]+1)/ce[5],w=(ce[9]-1)/ce[5],S=(ce[8]-1)/ce[0],X=(oe[8]+1)/oe[0],te=de*S,$=de*X,K=k/(-S+X),fe=K*-S;if(pe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(fe),se.translateZ(K),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),ce[10]===-1)se.projectionMatrix.copy(pe.projectionMatrix),se.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const ne=de+K,b=Fe+K,y=te-fe,F=$+(k-fe),R=Ie*Fe/b*ne,L=w*Fe/b*ne;se.projectionMatrix.makePerspective(y,F,R,L,ne,b),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function ge(se,pe){pe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(pe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let pe=se.near,be=se.far;_.texture!==null&&(_.depthNear>0&&(pe=_.depthNear),_.depthFar>0&&(be=_.depthFar)),x.near=P.near=I.near=pe,x.far=P.far=I.far=be,(C!==x.near||N!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,N=x.far),I.layers.mask=se.layers.mask|2,P.layers.mask=se.layers.mask|4,x.layers.mask=I.layers.mask|P.layers.mask;const k=se.parent,ce=x.cameras;ge(x,k);for(let oe=0;oe<ce.length;oe++)ge(ce[oe],k);ce.length===2?W(x,I,P):x.projectionMatrix.copy(I.projectionMatrix),ye(se,x,k)};function ye(se,pe,be){be===null?se.matrix.copy(pe.matrixWorld):(se.matrix.copy(be.matrixWorld),se.matrix.invert(),se.matrix.multiply(pe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(pe.projectionMatrix),se.projectionMatrixInverse.copy(pe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Or*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(se){l=se,f!==null&&(f.fixedFoveation=se),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=se)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Re=null;function Oe(se,pe){if(u=pe.getViewerPose(c||o),g=pe,u!==null){const be=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let k=!1;be.length!==x.cameras.length&&(x.cameras.length=0,k=!0);for(let oe=0;oe<be.length;oe++){const de=be[oe];let Fe=null;if(d!==null)Fe=d.getViewport(de);else{const w=h.getViewSubImage(f,de);Fe=w.viewport,oe===0&&(e.setRenderTargetTextures(T,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(T))}let Ie=v[oe];Ie===void 0&&(Ie=new tn,Ie.layers.enable(oe),Ie.viewport=new lt,v[oe]=Ie),Ie.matrix.fromArray(de.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(de.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),oe===0&&(x.matrix.copy(Ie.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),k===!0&&x.cameras.push(Ie)}const ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")){const oe=h.getDepthInformation(be[0]);oe&&oe.isValid&&oe.texture&&_.init(e,oe,s.renderState)}}for(let be=0;be<E.length;be++){const k=M[be],ce=E[be];k!==null&&ce!==void 0&&ce.update(k,pe,c||o)}Re&&Re(se,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),g=null}const Qe=new Hg;Qe.setAnimationLoop(Oe),this.setAnimationLoop=function(se){Re=se},this.dispose=function(){}}}const Es=new Yn,zw=new Ge;function Gw(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Fg(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,E,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),E=T.envMap,M=T.envMapRotation;E&&(m.envMap.value=E,Es.copy(M),Es.x*=-1,Es.y*=-1,Es.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),m.envMapRotation.value.setFromMatrix4(zw.makeRotationFromEuler(Es)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ww(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const M=E.program;i.uniformBlockBinding(T,M)}function c(T,E){let M=s[T.id];M===void 0&&(g(T),M=u(T),s[T.id]=M,T.addEventListener("dispose",m));const O=E.program;i.updateUBOMapping(T,O);const D=e.render.frame;r[T.id]!==D&&(f(T),r[T.id]=D)}function u(T){const E=h();T.__bindingPointIndex=E;const M=n.createBuffer(),O=T.__size,D=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,O,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const E=s[T.id],M=T.uniforms,O=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let D=0,I=M.length;D<I;D++){const P=Array.isArray(M[D])?M[D]:[M[D]];for(let v=0,x=P.length;v<x;v++){const C=P[v];if(d(C,D,v,O)===!0){const N=C.__offset,H=Array.isArray(C.value)?C.value:[C.value];let J=0;for(let ae=0;ae<H.length;ae++){const j=H[ae],ee=_(j);typeof j=="number"||typeof j=="boolean"?(C.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,N+J,C.__data)):j.isMatrix3?(C.__data[0]=j.elements[0],C.__data[1]=j.elements[1],C.__data[2]=j.elements[2],C.__data[3]=0,C.__data[4]=j.elements[3],C.__data[5]=j.elements[4],C.__data[6]=j.elements[5],C.__data[7]=0,C.__data[8]=j.elements[6],C.__data[9]=j.elements[7],C.__data[10]=j.elements[8],C.__data[11]=0):(j.toArray(C.__data,J),J+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,E,M,O){const D=T.value,I=E+"_"+M;if(O[I]===void 0)return typeof D=="number"||typeof D=="boolean"?O[I]=D:O[I]=D.clone(),!0;{const P=O[I];if(typeof D=="number"||typeof D=="boolean"){if(P!==D)return O[I]=D,!0}else if(P.equals(D)===!1)return P.copy(D),!0}return!1}function g(T){const E=T.uniforms;let M=0;const O=16;for(let I=0,P=E.length;I<P;I++){const v=Array.isArray(E[I])?E[I]:[E[I]];for(let x=0,C=v.length;x<C;x++){const N=v[x],H=Array.isArray(N.value)?N.value:[N.value];for(let J=0,ae=H.length;J<ae;J++){const j=H[J],ee=_(j),W=M%O,ge=W%ee.boundary,ye=W+ge;M+=ge,ye!==0&&O-ye<ee.storage&&(M+=O-ye),N.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=ee.storage}}}const D=M%O;return D>0&&(M+=O-D),T.__size=M,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Xw{constructor(e={}){const{canvas:t=DM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=cs,this.toneMappingExposure=1;const M=this;let O=!1,D=0,I=0,P=null,v=-1,x=null;const C=new lt,N=new lt;let H=null;const J=new je(0);let ae=0,j=t.width,ee=t.height,W=1,ge=null,ye=null;const Re=new lt(0,0,j,ee),Oe=new lt(0,0,j,ee);let Qe=!1;const se=new Ah;let pe=!1,be=!1;const k=new Ge,ce=new Ge,oe=new V,de=new lt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function w(){return P===null?W:1}let S=i;function X(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_h}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),S===null){const z="webgl2";if(S=X(z,A),S===null)throw X(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let te,$,K,fe,ne,b,y,F,R,L,U,he,Y,ue,Le,le,me,Ce,He,we,ze,Ve,et,B;function Se(){te=new YT(S),te.init(),Ve=new Uw(S,te),$=new WT(S,te,e,Ve),K=new Iw(S,te),$.reverseDepthBuffer&&f&&K.buffers.depth.setReversed(!0),fe=new QT(S),ne=new _w,b=new Nw(S,te,K,ne,$,Ve,fe),y=new $T(M),F=new KT(M),R=new ob(S),et=new zT(S,R),L=new ZT(S,R,fe,et),U=new tA(S,L,R,fe),He=new eA(S,$,b),le=new XT(ne),he=new gw(M,y,F,te,$,et,le),Y=new Gw(M,ne),ue=new xw,Le=new Tw(te),Ce=new VT(M,y,F,K,U,d,l),me=new Pw(M,U,$),B=new Ww(S,fe,$,K),we=new GT(S,te,fe),ze=new JT(S,te,fe),fe.programs=he.programs,M.capabilities=$,M.extensions=te,M.properties=ne,M.renderLists=ue,M.shadowMap=me,M.state=K,M.info=fe}Se();const ie=new Vw(M,S);this.xr=ie,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const A=te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(j,ee,!1))},this.getSize=function(A){return A.set(j,ee)},this.setSize=function(A,z,Z=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,ee=z,t.width=Math.floor(A*W),t.height=Math.floor(z*W),Z===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(j*W,ee*W).floor()},this.setDrawingBufferSize=function(A,z,Z){j=A,ee=z,W=Z,t.width=Math.floor(A*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(Re)},this.setViewport=function(A,z,Z,Q){A.isVector4?Re.set(A.x,A.y,A.z,A.w):Re.set(A,z,Z,Q),K.viewport(C.copy(Re).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(Oe)},this.setScissor=function(A,z,Z,Q){A.isVector4?Oe.set(A.x,A.y,A.z,A.w):Oe.set(A,z,Z,Q),K.scissor(N.copy(Oe).multiplyScalar(W).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(A){K.setScissorTest(Qe=A)},this.setOpaqueSort=function(A){ge=A},this.setTransparentSort=function(A){ye=A},this.getClearColor=function(A){return A.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(A=!0,z=!0,Z=!0){let Q=0;if(A){let G=!1;if(P!==null){const _e=P.texture.format;G=_e===Eh||_e===bh||_e===Mh}if(G){const _e=P.texture.type,Ae=_e===Fi||_e===Vs||_e===Fo||_e===Nr||_e===xh||_e===yh,De=Ce.getClearColor(),Ne=Ce.getClearAlpha(),We=De.r,Ke=De.g,Ue=De.b;Ae?(g[0]=We,g[1]=Ke,g[2]=Ue,g[3]=Ne,S.clearBufferuiv(S.COLOR,0,g)):(_[0]=We,_[1]=Ke,_[2]=Ue,_[3]=Ne,S.clearBufferiv(S.COLOR,0,_))}else Q|=S.COLOR_BUFFER_BIT}z&&(Q|=S.DEPTH_BUFFER_BIT),Z&&(Q|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),ue.dispose(),Le.dispose(),ne.dispose(),y.dispose(),F.dispose(),U.dispose(),et.dispose(),B.dispose(),he.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",xt),ie.removeEventListener("sessionend",Bh),ms.stop()};function re(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const A=fe.autoReset,z=me.enabled,Z=me.autoUpdate,Q=me.needsUpdate,G=me.type;Se(),fe.autoReset=A,me.enabled=z,me.autoUpdate=Z,me.needsUpdate=Q,me.type=G}function Ee(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $e(A){const z=A.target;z.removeEventListener("dispose",$e),At(z)}function At(A){Ft(A),ne.remove(A)}function Ft(A){const z=ne.get(A).programs;z!==void 0&&(z.forEach(function(Z){he.releaseProgram(Z)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Z,Q,G,_e){z===null&&(z=Fe);const Ae=G.isMesh&&G.matrixWorld.determinant()<0,De=S_(A,z,Z,Q,G);K.setMaterial(Q,Ae);let Ne=Z.index,We=1;if(Q.wireframe===!0){if(Ne=L.getWireframeAttribute(Z),Ne===void 0)return;We=2}const Ke=Z.drawRange,Ue=Z.attributes.position;let rt=Ke.start*We,St=(Ke.start+Ke.count)*We;_e!==null&&(rt=Math.max(rt,_e.start*We),St=Math.min(St,(_e.start+_e.count)*We)),Ne!==null?(rt=Math.max(rt,0),St=Math.min(St,Ne.count)):Ue!=null&&(rt=Math.max(rt,0),St=Math.min(St,Ue.count));const bt=St-rt;if(bt<0||bt===1/0)return;et.setup(G,Q,De,Z,Ne);let cn,ct=we;if(Ne!==null&&(cn=R.get(Ne),ct=ze,ct.setIndex(cn)),G.isMesh)Q.wireframe===!0?(K.setLineWidth(Q.wireframeLinewidth*w()),ct.setMode(S.LINES)):ct.setMode(S.TRIANGLES);else if(G.isLine){let Be=Q.linewidth;Be===void 0&&(Be=1),K.setLineWidth(Be*w()),G.isLineSegments?ct.setMode(S.LINES):G.isLineLoop?ct.setMode(S.LINE_LOOP):ct.setMode(S.LINE_STRIP)}else G.isPoints?ct.setMode(S.POINTS):G.isSprite&&ct.setMode(S.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ct.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))ct.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Be=G._multiDrawStarts,pi=G._multiDrawCounts,ut=G._multiDrawCount,Un=Ne?R.get(Ne).bytesPerElement:1,$s=ne.get(Q).currentProgram.getUniforms();for(let dn=0;dn<ut;dn++)$s.setValue(S,"_gl_DrawID",dn),ct.render(Be[dn]/Un,pi[dn])}else if(G.isInstancedMesh)ct.renderInstances(rt,bt,G.count);else if(Z.isInstancedBufferGeometry){const Be=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,pi=Math.min(Z.instanceCount,Be);ct.renderInstances(rt,bt,pi)}else ct.render(rt,bt)};function qe(A,z,Z){A.transparent===!0&&A.side===si&&A.forceSinglePass===!1?(A.side=hn,A.needsUpdate=!0,Yo(A,z,Z),A.side=Oi,A.needsUpdate=!0,Yo(A,z,Z),A.side=si):Yo(A,z,Z)}this.compile=function(A,z,Z=null){Z===null&&(Z=A),p=Le.get(Z),p.init(z),E.push(p),Z.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),A!==Z&&A.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const Q=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const _e=G.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const De=_e[Ae];qe(De,Z,G),Q.add(De)}else qe(_e,Z,G),Q.add(_e)}),E.pop(),p=null,Q},this.compileAsync=function(A,z,Z=null){const Q=this.compile(A,z,Z);return new Promise(G=>{function _e(){if(Q.forEach(function(Ae){ne.get(Ae).currentProgram.isReady()&&Q.delete(Ae)}),Q.size===0){G(A);return}setTimeout(_e,10)}te.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let fn=null;function Nn(A){fn&&fn(A)}function xt(){ms.stop()}function Bh(){ms.start()}const ms=new Hg;ms.setAnimationLoop(Nn),typeof self<"u"&&ms.setContext(self),this.setAnimationLoop=function(A){fn=A,ie.setAnimationLoop(A),A===null?ms.stop():ms.start()},ie.addEventListener("sessionstart",xt),ie.addEventListener("sessionend",Bh),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(z),z=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,z,P),p=Le.get(A,E.length),p.init(z),E.push(p),ce.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),se.setFromProjectionMatrix(ce),be=this.localClippingEnabled,pe=le.init(this.clippingPlanes,be),m=ue.get(A,T.length),m.init(),T.push(m),ie.enabled===!0&&ie.isPresenting===!0){const _e=M.xr.getDepthSensingMesh();_e!==null&&Il(_e,z,-1/0,M.sortObjects)}Il(A,z,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ge,ye),Ie=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ie&&Ce.addToRenderList(m,A),this.info.render.frame++,pe===!0&&le.beginShadows();const Z=p.state.shadowsArray;me.render(Z,A,z),pe===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,G=m.transmissive;if(p.setupLights(),z.isArrayCamera){const _e=z.cameras;if(G.length>0)for(let Ae=0,De=_e.length;Ae<De;Ae++){const Ne=_e[Ae];Hh(Q,G,A,Ne)}Ie&&Ce.render(A);for(let Ae=0,De=_e.length;Ae<De;Ae++){const Ne=_e[Ae];kh(m,A,Ne,Ne.viewport)}}else G.length>0&&Hh(Q,G,A,z),Ie&&Ce.render(A),kh(m,A,z);P!==null&&(b.updateMultisampleRenderTarget(P),b.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(M,A,z),et.resetDefaultState(),v=-1,x=null,E.pop(),E.length>0?(p=E[E.length-1],pe===!0&&le.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Il(A,z,Z,Q){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||se.intersectsSprite(A)){Q&&de.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ce);const Ae=U.update(A),De=A.material;De.visible&&m.push(A,Ae,De,Z,de.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||se.intersectsObject(A))){const Ae=U.update(A),De=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),de.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),de.copy(Ae.boundingSphere.center)),de.applyMatrix4(A.matrixWorld).applyMatrix4(ce)),Array.isArray(De)){const Ne=Ae.groups;for(let We=0,Ke=Ne.length;We<Ke;We++){const Ue=Ne[We],rt=De[Ue.materialIndex];rt&&rt.visible&&m.push(A,Ae,rt,Z,de.z,Ue)}}else De.visible&&m.push(A,Ae,De,Z,de.z,null)}}const _e=A.children;for(let Ae=0,De=_e.length;Ae<De;Ae++)Il(_e[Ae],z,Z,Q)}function kh(A,z,Z,Q){const G=A.opaque,_e=A.transmissive,Ae=A.transparent;p.setupLightsView(Z),pe===!0&&le.setGlobalState(M.clippingPlanes,Z),Q&&K.viewport(C.copy(Q)),G.length>0&&Ko(G,z,Z),_e.length>0&&Ko(_e,z,Z),Ae.length>0&&Ko(Ae,z,Z),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Hh(A,z,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new zs(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?$o:Fi,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const _e=p.state.transmissionRenderTarget[Q.id],Ae=Q.viewport||C;_e.setSize(Ae.z,Ae.w);const De=M.getRenderTarget();M.setRenderTarget(_e),M.getClearColor(J),ae=M.getClearAlpha(),ae<1&&M.setClearColor(16777215,.5),M.clear(),Ie&&Ce.render(Z);const Ne=M.toneMapping;M.toneMapping=cs;const We=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),pe===!0&&le.setGlobalState(M.clippingPlanes,Q),Ko(A,Z,Q),b.updateMultisampleRenderTarget(_e),b.updateRenderTargetMipmap(_e),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ue=0,rt=z.length;Ue<rt;Ue++){const St=z[Ue],bt=St.object,cn=St.geometry,ct=St.material,Be=St.group;if(ct.side===si&&bt.layers.test(Q.layers)){const pi=ct.side;ct.side=hn,ct.needsUpdate=!0,Vh(bt,Z,Q,cn,ct,Be),ct.side=pi,ct.needsUpdate=!0,Ke=!0}}Ke===!0&&(b.updateMultisampleRenderTarget(_e),b.updateRenderTargetMipmap(_e))}M.setRenderTarget(De),M.setClearColor(J,ae),We!==void 0&&(Q.viewport=We),M.toneMapping=Ne}function Ko(A,z,Z){const Q=z.isScene===!0?z.overrideMaterial:null;for(let G=0,_e=A.length;G<_e;G++){const Ae=A[G],De=Ae.object,Ne=Ae.geometry,We=Q===null?Ae.material:Q,Ke=Ae.group;De.layers.test(Z.layers)&&Vh(De,z,Z,Ne,We,Ke)}}function Vh(A,z,Z,Q,G,_e){A.onBeforeRender(M,z,Z,Q,G,_e),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(M,z,Z,Q,A,_e),G.transparent===!0&&G.side===si&&G.forceSinglePass===!1?(G.side=hn,G.needsUpdate=!0,M.renderBufferDirect(Z,z,Q,G,A,_e),G.side=Oi,G.needsUpdate=!0,M.renderBufferDirect(Z,z,Q,G,A,_e),G.side=si):M.renderBufferDirect(Z,z,Q,G,A,_e),A.onAfterRender(M,z,Z,Q,G,_e)}function Yo(A,z,Z){z.isScene!==!0&&(z=Fe);const Q=ne.get(A),G=p.state.lights,_e=p.state.shadowsArray,Ae=G.state.version,De=he.getParameters(A,G.state,_e,z,Z),Ne=he.getProgramCacheKey(De);let We=Q.programs;Q.environment=A.isMeshStandardMaterial?z.environment:null,Q.fog=z.fog,Q.envMap=(A.isMeshStandardMaterial?F:y).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",$e),We=new Map,Q.programs=We);let Ke=We.get(Ne);if(Ke!==void 0){if(Q.currentProgram===Ke&&Q.lightsStateVersion===Ae)return Gh(A,De),Ke}else De.uniforms=he.getUniforms(A),A.onBeforeCompile(De,M),Ke=he.acquireProgram(De,Ne),We.set(Ne,Ke),Q.uniforms=De.uniforms;const Ue=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=le.uniform),Gh(A,De),Q.needsLights=b_(A),Q.lightsStateVersion=Ae,Q.needsLights&&(Ue.ambientLightColor.value=G.state.ambient,Ue.lightProbe.value=G.state.probe,Ue.directionalLights.value=G.state.directional,Ue.directionalLightShadows.value=G.state.directionalShadow,Ue.spotLights.value=G.state.spot,Ue.spotLightShadows.value=G.state.spotShadow,Ue.rectAreaLights.value=G.state.rectArea,Ue.ltc_1.value=G.state.rectAreaLTC1,Ue.ltc_2.value=G.state.rectAreaLTC2,Ue.pointLights.value=G.state.point,Ue.pointLightShadows.value=G.state.pointShadow,Ue.hemisphereLights.value=G.state.hemi,Ue.directionalShadowMap.value=G.state.directionalShadowMap,Ue.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ue.spotShadowMap.value=G.state.spotShadowMap,Ue.spotLightMatrix.value=G.state.spotLightMatrix,Ue.spotLightMap.value=G.state.spotLightMap,Ue.pointShadowMap.value=G.state.pointShadowMap,Ue.pointShadowMatrix.value=G.state.pointShadowMatrix),Q.currentProgram=Ke,Q.uniformsList=null,Ke}function zh(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=za.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Gh(A,z){const Z=ne.get(A);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function S_(A,z,Z,Q,G){z.isScene!==!0&&(z=Fe),b.resetTextureUnits();const _e=z.fog,Ae=Q.isMeshStandardMaterial?z.environment:null,De=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ln,Ne=(Q.isMeshStandardMaterial?F:y).get(Q.envMap||Ae),We=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ke=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ue=!!Z.morphAttributes.position,rt=!!Z.morphAttributes.normal,St=!!Z.morphAttributes.color;let bt=cs;Q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(bt=M.toneMapping);const cn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ct=cn!==void 0?cn.length:0,Be=ne.get(Q),pi=p.state.lights;if(pe===!0&&(be===!0||A!==x)){const bn=A===x&&Q.id===v;le.setState(Q,A,bn)}let ut=!1;Q.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==pi.state.version||Be.outputColorSpace!==De||G.isBatchedMesh&&Be.batching===!1||!G.isBatchedMesh&&Be.batching===!0||G.isBatchedMesh&&Be.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Be.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Be.instancing===!1||!G.isInstancedMesh&&Be.instancing===!0||G.isSkinnedMesh&&Be.skinning===!1||!G.isSkinnedMesh&&Be.skinning===!0||G.isInstancedMesh&&Be.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Be.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Be.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Be.instancingMorph===!1&&G.morphTexture!==null||Be.envMap!==Ne||Q.fog===!0&&Be.fog!==_e||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==le.numPlanes||Be.numIntersection!==le.numIntersection)||Be.vertexAlphas!==We||Be.vertexTangents!==Ke||Be.morphTargets!==Ue||Be.morphNormals!==rt||Be.morphColors!==St||Be.toneMapping!==bt||Be.morphTargetsCount!==ct)&&(ut=!0):(ut=!0,Be.__version=Q.version);let Un=Be.currentProgram;ut===!0&&(Un=Yo(Q,z,G));let $s=!1,dn=!1,jr=!1;const Et=Un.getUniforms(),Jn=Be.uniforms;if(K.useProgram(Un.program)&&($s=!0,dn=!0,jr=!0),Q.id!==v&&(v=Q.id,dn=!0),$s||x!==A){K.buffers.depth.getReversed()?(k.copy(A.projectionMatrix),UM(k),OM(k),Et.setValue(S,"projectionMatrix",k)):Et.setValue(S,"projectionMatrix",A.projectionMatrix),Et.setValue(S,"viewMatrix",A.matrixWorldInverse);const Hi=Et.map.cameraPosition;Hi!==void 0&&Hi.setValue(S,oe.setFromMatrixPosition(A.matrixWorld)),$.logarithmicDepthBuffer&&Et.setValue(S,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Et.setValue(S,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,dn=!0,jr=!0)}if(G.isSkinnedMesh){Et.setOptional(S,G,"bindMatrix"),Et.setOptional(S,G,"bindMatrixInverse");const bn=G.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Et.setValue(S,"boneTexture",bn.boneTexture,b))}G.isBatchedMesh&&(Et.setOptional(S,G,"batchingTexture"),Et.setValue(S,"batchingTexture",G._matricesTexture,b),Et.setOptional(S,G,"batchingIdTexture"),Et.setValue(S,"batchingIdTexture",G._indirectTexture,b),Et.setOptional(S,G,"batchingColorTexture"),G._colorsTexture!==null&&Et.setValue(S,"batchingColorTexture",G._colorsTexture,b));const qr=Z.morphAttributes;if((qr.position!==void 0||qr.normal!==void 0||qr.color!==void 0)&&He.update(G,Z,Un),(dn||Be.receiveShadow!==G.receiveShadow)&&(Be.receiveShadow=G.receiveShadow,Et.setValue(S,"receiveShadow",G.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Jn.envMap.value=Ne,Jn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&z.environment!==null&&(Jn.envMapIntensity.value=z.environmentIntensity),dn&&(Et.setValue(S,"toneMappingExposure",M.toneMappingExposure),Be.needsLights&&M_(Jn,jr),_e&&Q.fog===!0&&Y.refreshFogUniforms(Jn,_e),Y.refreshMaterialUniforms(Jn,Q,W,ee,p.state.transmissionRenderTarget[A.id]),za.upload(S,zh(Be),Jn,b)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(za.upload(S,zh(Be),Jn,b),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Et.setValue(S,"center",G.center),Et.setValue(S,"modelViewMatrix",G.modelViewMatrix),Et.setValue(S,"normalMatrix",G.normalMatrix),Et.setValue(S,"modelMatrix",G.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const bn=Q.uniformsGroups;for(let Hi=0,Vi=bn.length;Hi<Vi;Hi++){const Wh=bn[Hi];B.update(Wh,Un),B.bind(Wh,Un)}}return Un}function M_(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function b_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,z,Z){ne.get(A.texture).__webglTexture=z,ne.get(A.depthTexture).__webglTexture=Z;const Q=ne.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=Z===void 0,Q.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){const Z=ne.get(A);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,Z=0){P=A,D=z,I=Z;let Q=!0,G=null,_e=!1,Ae=!1;if(A){const Ne=ne.get(A);if(Ne.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(S.FRAMEBUFFER,null),Q=!1;else if(Ne.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Ne.__hasExternalTextures)b.rebindTextures(A,ne.get(A.texture).__webglTexture,ne.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ue=A.depthTexture;if(Ne.__boundDepthTexture!==Ue){if(Ue!==null&&ne.has(Ue)&&(A.width!==Ue.image.width||A.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ae=!0);const Ke=ne.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[z])?G=Ke[z][Z]:G=Ke[z],_e=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?G=ne.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?G=Ke[Z]:G=Ke,C.copy(A.viewport),N.copy(A.scissor),H=A.scissorTest}else C.copy(Re).multiplyScalar(W).floor(),N.copy(Oe).multiplyScalar(W).floor(),H=Qe;if(K.bindFramebuffer(S.FRAMEBUFFER,G)&&Q&&K.drawBuffers(A,G),K.viewport(C),K.scissor(N),K.setScissorTest(H),_e){const Ne=ne.get(A.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ne.__webglTexture,Z)}else if(Ae){const Ne=ne.get(A.texture),We=z||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ne.__webglTexture,Z||0,We)}v=-1},this.readRenderTargetPixels=function(A,z,Z,Q,G,_e,Ae){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){K.bindFramebuffer(S.FRAMEBUFFER,De);try{const Ne=A.texture,We=Ne.format,Ke=Ne.type;if(!$.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Q&&Z>=0&&Z<=A.height-G&&S.readPixels(z,Z,Q,G,Ve.convert(We),Ve.convert(Ke),_e)}finally{const Ne=P!==null?ne.get(P).__webglFramebuffer:null;K.bindFramebuffer(S.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(A,z,Z,Q,G,_e,Ae){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){const Ne=A.texture,We=Ne.format,Ke=Ne.type;if(!$.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=A.width-Q&&Z>=0&&Z<=A.height-G){K.bindFramebuffer(S.FRAMEBUFFER,De);const Ue=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Ue),S.bufferData(S.PIXEL_PACK_BUFFER,_e.byteLength,S.STREAM_READ),S.readPixels(z,Z,Q,G,Ve.convert(We),Ve.convert(Ke),0);const rt=P!==null?ne.get(P).__webglFramebuffer:null;K.bindFramebuffer(S.FRAMEBUFFER,rt);const St=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await NM(S,St,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Ue),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,_e),S.deleteBuffer(Ue),S.deleteSync(St),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,z=null,Z=0){A.isTexture!==!0&&(ho("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1]);const Q=Math.pow(2,-Z),G=Math.floor(A.image.width*Q),_e=Math.floor(A.image.height*Q),Ae=z!==null?z.x:0,De=z!==null?z.y:0;b.setTexture2D(A,0),S.copyTexSubImage2D(S.TEXTURE_2D,Z,0,0,Ae,De,G,_e),K.unbindTexture()},this.copyTextureToTexture=function(A,z,Z=null,Q=null,G=0){A.isTexture!==!0&&(ho("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],z=arguments[2],G=arguments[3]||0,Z=null);let _e,Ae,De,Ne,We,Ke,Ue,rt,St;const bt=A.isCompressedTexture?A.mipmaps[G]:A.image;Z!==null?(_e=Z.max.x-Z.min.x,Ae=Z.max.y-Z.min.y,De=Z.isBox3?Z.max.z-Z.min.z:1,Ne=Z.min.x,We=Z.min.y,Ke=Z.isBox3?Z.min.z:0):(_e=bt.width,Ae=bt.height,De=bt.depth||1,Ne=0,We=0,Ke=0),Q!==null?(Ue=Q.x,rt=Q.y,St=Q.z):(Ue=0,rt=0,St=0);const cn=Ve.convert(z.format),ct=Ve.convert(z.type);let Be;z.isData3DTexture?(b.setTexture3D(z,0),Be=S.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(b.setTexture2DArray(z,0),Be=S.TEXTURE_2D_ARRAY):(b.setTexture2D(z,0),Be=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,z.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,z.unpackAlignment);const pi=S.getParameter(S.UNPACK_ROW_LENGTH),ut=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Un=S.getParameter(S.UNPACK_SKIP_PIXELS),$s=S.getParameter(S.UNPACK_SKIP_ROWS),dn=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,bt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,bt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ne),S.pixelStorei(S.UNPACK_SKIP_ROWS,We),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ke);const jr=A.isDataArrayTexture||A.isData3DTexture,Et=z.isDataArrayTexture||z.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Jn=ne.get(A),qr=ne.get(z),bn=ne.get(Jn.__renderTarget),Hi=ne.get(qr.__renderTarget);K.bindFramebuffer(S.READ_FRAMEBUFFER,bn.__webglFramebuffer),K.bindFramebuffer(S.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Vi=0;Vi<De;Vi++)jr&&S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,ne.get(A).__webglTexture,G,Ke+Vi),A.isDepthTexture?(Et&&S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,ne.get(z).__webglTexture,G,St+Vi),S.blitFramebuffer(Ne,We,_e,Ae,Ue,rt,_e,Ae,S.DEPTH_BUFFER_BIT,S.NEAREST)):Et?S.copyTexSubImage3D(Be,G,Ue,rt,St+Vi,Ne,We,_e,Ae):S.copyTexSubImage2D(Be,G,Ue,rt,St+Vi,Ne,We,_e,Ae);K.bindFramebuffer(S.READ_FRAMEBUFFER,null),K.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else Et?A.isDataTexture||A.isData3DTexture?S.texSubImage3D(Be,G,Ue,rt,St,_e,Ae,De,cn,ct,bt.data):z.isCompressedArrayTexture?S.compressedTexSubImage3D(Be,G,Ue,rt,St,_e,Ae,De,cn,bt.data):S.texSubImage3D(Be,G,Ue,rt,St,_e,Ae,De,cn,ct,bt):A.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,G,Ue,rt,_e,Ae,cn,ct,bt.data):A.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,G,Ue,rt,bt.width,bt.height,cn,bt.data):S.texSubImage2D(S.TEXTURE_2D,G,Ue,rt,_e,Ae,cn,ct,bt);S.pixelStorei(S.UNPACK_ROW_LENGTH,pi),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ut),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Un),S.pixelStorei(S.UNPACK_SKIP_ROWS,$s),S.pixelStorei(S.UNPACK_SKIP_IMAGES,dn),G===0&&z.generateMipmaps&&S.generateMipmap(Be),K.unbindTexture()},this.copyTextureToTexture3D=function(A,z,Z=null,Q=null,G=0){return A.isTexture!==!0&&(ho("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],z=arguments[3],G=arguments[4]||0),ho('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,z,Z,Q,G)},this.initRenderTarget=function(A){ne.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),K.unbindTexture()},this.resetState=function(){D=0,I=0,P=null,K.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class $w extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fu,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new V;class Ch{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Hn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ch(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Zd=new V,Jd=new lt,Qd=new lt,qw=new V,ep=new Ge,ba=new V,bc=new hi,tp=new Ge,Ec=new Tl;class Kw extends sn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qf,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ui),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ba),this.boundingBox.expandByPoint(ba)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ba),this.boundingSphere.expandByPoint(ba)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bc.copy(this.boundingSphere),bc.applyMatrix4(s),e.ray.intersectsSphere(bc)!==!1&&(tp.copy(s).invert(),Ec.copy(e.ray).applyMatrix4(tp),!(this.boundingBox!==null&&Ec.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ec)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===iM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Jd.fromBufferAttribute(s.attributes.skinIndex,e),Qd.fromBufferAttribute(s.attributes.skinWeight,e),Zd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Qd.getComponent(r);if(o!==0){const a=Jd.getComponent(r);ep.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(qw.copy(Zd).applyMatrix4(ep),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $g extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class jg extends Vt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=on,u=on,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const np=new Ge,Yw=new Ge;class Ph{constructor(e=[],t=[]){this.uuid=Xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ge;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Yw;np.multiplyMatrices(a,t[r]),np.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ph(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new jg(t,e,e,Cn,zn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new $g),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class ku extends an{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ur=new Ge,ip=new Ge,Ea=[],sp=new ui,Zw=new Ge,no=new sn,io=new hi;class Hu extends sn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ku(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Zw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ur),sp.copy(e.boundingBox).applyMatrix4(ur),this.boundingBox.union(sp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ur),io.copy(e.boundingSphere).applyMatrix4(ur),this.boundingSphere.union(io)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(no.geometry=this.geometry,no.material=this.material,no.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),io.copy(this.boundingSphere),io.applyMatrix4(i),e.ray.intersectsSphere(io)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ur),ip.multiplyMatrices(i,ur),no.matrixWorld=ip,no.raycast(e,Ea);for(let o=0,a=Ea.length;o<a;o++){const l=Ea[o];l.instanceId=r,l.object=this,t.push(l)}Ea.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ku(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new jg(new Float32Array(s*this.count),s,this.count,Sh,zn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class qg extends li{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const il=new V,sl=new V,rp=new Ge,so=new Tl,Ta=new hi,Tc=new V,op=new V;class Lh extends Tt{constructor(e=new Zn,t=new qg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)il.fromBufferAttribute(t,s-1),sl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=il.distanceTo(sl);e.setAttribute("lineDistance",new Dn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,e.ray.intersectsSphere(Ta)===!1)return;rp.copy(s).invert(),so.copy(e.ray).applyMatrix4(rp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),T=u.getX(_+1),E=Aa(this,e,so,l,p,T);E&&t.push(E)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Aa(this,e,so,l,_,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=Aa(this,e,so,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Aa(this,e,so,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Aa(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(il.fromBufferAttribute(o,s),sl.fromBufferAttribute(o,r),t.distanceSqToSegment(il,sl,Tc,op)>i)return;Tc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Tc);if(!(l<e.near||l>e.far))return{distance:l,point:op.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const ap=new V,lp=new V;class Jw extends Lh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ap.fromBufferAttribute(t,s),lp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ap.distanceTo(lp);e.setAttribute("lineDistance",new Dn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qw extends Lh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Kg extends li{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cp=new Ge,Vu=new Tl,wa=new hi,Ra=new V;class eR extends Tt{constructor(e=new Zn,t=new Kg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(s),wa.radius+=r,e.ray.intersectsSphere(wa)===!1)return;cp.copy(s).invert(),Vu.copy(e.ray).applyMatrix4(cp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Ra.fromBufferAttribute(h,m),up(Ra,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Ra.fromBufferAttribute(h,g),up(Ra,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function up(n,e,t,i,s,r,o){const a=Vu.distanceSqToPoint(n);if(a<t){const l=new V;Vu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ih extends Zn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new V,f=new V,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const T=[],E=p/i;let M=0;p===0&&o===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let O=0;O<=t;O++){const D=O/t;h.x=-e*Math.cos(s+D*r)*Math.sin(o+E*a),h.y=e*Math.cos(o+E*a),h.z=e*Math.sin(s+D*r)*Math.sin(o+E*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(D+M,1-E),T.push(c++)}u.push(T)}for(let p=0;p<i;p++)for(let T=0;T<t;T++){const E=u[p][T+1],M=u[p][T],O=u[p+1][T],D=u[p+1][T+1];(p!==0||o>0)&&d.push(E,M,D),(p!==i-1||l<Math.PI)&&d.push(M,O,D)}this.setIndex(d),this.setAttribute("position",new Dn(g,3)),this.setAttribute("normal",new Dn(_,3)),this.setAttribute("uv",new Dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ih(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Er extends li{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rg,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fi extends Er{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ca(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function tR(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function nR(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function hp(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Yg(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class jo{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class iR extends jo{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ed,endingEnd:ed}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case td:r=e,a=2*t-i;break;case nd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case td:o=e,l=2*i-t;break;case nd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,T=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,E=(-1-d)*m+(1.5+d)*_+.5*g,M=d*m-d*_;for(let O=0;O!==a;++O)r[O]=p*o[u+O]+T*o[c+O]+E*o[l+O]+M*o[h+O];return r}}class sR extends jo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class rR extends jo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class di{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ca(t,this.TimeBufferType),this.values=Ca(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ca(e.times,Array),values:Ca(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new rR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new iR(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bo:t=this.InterpolantFactoryMethodDiscrete;break;case ko:t=this.InterpolantFactoryMethodLinear;break;case Kl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return ko;case this.InterpolantFactoryMethodSmooth:return Kl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&tR(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Kl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=ko;class Xr extends di{constructor(e,t,i){super(e,t,i)}}Xr.prototype.ValueTypeName="bool";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=Bo;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Zg extends di{}Zg.prototype.ValueTypeName="color";class Br extends di{}Br.prototype.ValueTypeName="number";class oR extends jo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)ki.slerpFlat(r,0,o,c-a,o,c,l);return r}}class kr extends di{InterpolantFactoryMethodLinear(e){return new oR(this.times,this.values,this.getValueSize(),e)}}kr.prototype.ValueTypeName="quaternion";kr.prototype.InterpolantFactoryMethodSmooth=void 0;class $r extends di{constructor(e,t,i){super(e,t,i)}}$r.prototype.ValueTypeName="string";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=Bo;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;class Hr extends di{}Hr.prototype.ValueTypeName="vector";class aR{constructor(e="",t=-1,i=[],s=sM){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(cR(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(di.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=nR(l);l=hp(l,1,u),c=hp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Br(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];Yg(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let T=0;T!==f[g].morphTargets.length;++T){const E=f[g];m.push(E.time),p.push(E.morphTarget===_?1:0)}s.push(new Br(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";i(Hr,d+".position",f,"pos",s),i(kr,d+".quaternion",f,"rot",s),i(Hr,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function lR(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Br;case"vector":case"vector2":case"vector3":case"vector4":return Hr;case"color":return Zg;case"quaternion":return kr;case"bool":case"boolean":return Xr;case"string":return $r}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function cR(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=lR(n.type);if(n.times===void 0){const t=[],i=[];Yg(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const as={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class uR{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const hR=new uR;class Xs{constructor(e){this.manager=e!==void 0?e:hR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Xs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class fR extends Error{constructor(e,t){super(e),this.response=t}}class Dh extends Xs{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=as.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:i,onError:s});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Mi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){T();function T(){h.read().then(({done:E,value:M})=>{if(E)p.close();else{_+=M.byteLength;const O=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let D=0,I=u.length;D<I;D++){const P=u[D];P.onProgress&&P.onProgress(O)}p.enqueue(M),T()}},E=>{p.error(E)})}}});return new Response(m)}else throw new fR(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{as.add(e,c);const u=Mi[e];delete Mi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Mi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class dR extends Xs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=as.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ho("img");function l(){u(),as.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Jg extends Xs{constructor(e){super(e)}load(e,t,i,s){const r=new Vt,o=new dR(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Rl extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ac=new Ge,fp=new V,dp=new V;class Nh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ah,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;fp.setFromMatrixPosition(e.matrixWorld),t.position.copy(fp),dp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dp),t.updateMatrixWorld(),Ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pR extends Nh{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Or*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class mR extends Rl{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new pR}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const pp=new Ge,ro=new V,wc=new V;class gR extends Nh{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ro.setFromMatrixPosition(e.matrixWorld),i.position.copy(ro),wc.copy(i.position),wc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(wc),i.updateMatrixWorld(),s.makeTranslation(-ro.x,-ro.y,-ro.z),pp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pp)}}class Qg extends Rl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new gR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _R extends Nh{constructor(){super(new wh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vR extends Rl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new _R}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xR extends Rl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ao{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class yR extends Xs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=as.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return as.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),as.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});as.add(e,l),r.manager.itemStart(e)}}let Pa;class e_{static getContext(){return Pa===void 0&&(Pa=new(window.AudioContext||window.webkitAudioContext)),Pa}static setContext(e){Pa=e}}class SR extends Xs{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new Dh(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);e_.getContext().decodeAudioData(c,function(h){t(h)}).catch(a)}catch(c){a(c)}},i,s);function a(l){s?s(l):console.error(l),r.manager.itemError(e)}}}class t_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=mp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function mp(){return performance.now()}const Ts=new V,gp=new ki,MR=new V,As=new V;class bR extends Tt{constructor(){super(),this.type="AudioListener",this.context=e_.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new t_}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ts,gp,MR),As.set(0,0,-1).applyQuaternion(gp),t.positionX){const s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ts.x,s),t.positionY.linearRampToValueAtTime(Ts.y,s),t.positionZ.linearRampToValueAtTime(Ts.z,s),t.forwardX.linearRampToValueAtTime(As.x,s),t.forwardY.linearRampToValueAtTime(As.y,s),t.forwardZ.linearRampToValueAtTime(As.z,s),t.upX.linearRampToValueAtTime(i.x,s),t.upY.linearRampToValueAtTime(i.y,s),t.upZ.linearRampToValueAtTime(i.z,s)}else t.setPosition(Ts.x,Ts.y,Ts.z),t.setOrientation(As.x,As.y,As.z,i.x,i.y,i.z)}}class Rc extends Tt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Uh="\\[\\]\\.:\\/",ER=new RegExp("["+Uh+"]","g"),Oh="[^"+Uh+"]",TR="[^"+Uh.replace("\\.","")+"]",AR=/((?:WC+[\/:])*)/.source.replace("WC",Oh),wR=/(WCOD+)?/.source.replace("WCOD",TR),RR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),CR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),PR=new RegExp("^"+AR+wR+RR+CR+"$"),LR=["material","materials","bones","map"];class IR{constructor(e,t,i){const s=i||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class pt{constructor(e,t,i){this.path=t,this.parsedPath=i||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,i):new pt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ER,"")}static parseTrackName(e){const t=PR.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);LR.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=IR;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class DR extends Ws{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);const hr=new Yn(0,0,0,"YXZ"),fr=new V,NR={type:"change"},UR={type:"lock"},OR={type:"unlock"},_p=Math.PI/2;class FR extends DR{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=BR.bind(this),this._onPointerlockChange=kR.bind(this),this._onPointerlockError=HR.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;fr.setFromMatrixColumn(t.matrix,0),fr.crossVectors(t.up,fr),t.position.addScaledVector(fr,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;fr.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(fr,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function BR(n){if(this.enabled===!1||this.isLocked===!1)return;const e=n.movementX||n.mozMovementX||n.webkitMovementX||0,t=n.movementY||n.mozMovementY||n.webkitMovementY||0,i=this.object;hr.setFromQuaternion(i.quaternion),hr.y-=e*.002*this.pointerSpeed,hr.x-=t*.002*this.pointerSpeed,hr.x=Math.max(_p-this.maxPolarAngle,Math.min(_p-this.minPolarAngle,hr.x)),i.quaternion.setFromEuler(hr),this.dispatchEvent(NR)}function kR(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(UR),this.isLocked=!0):(this.dispatchEvent(OR),this.isLocked=!1)}function HR(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const VR="/assets/ground-4ICvYzm_.png",zR="/assets/wall-Dsmy-Flm.png";function vp(n,e){if(e===rM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Ou||e===wg){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Ou)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class Cc extends Xs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jR(t)}),this.register(function(t){return new qR(t)}),this.register(function(t){return new iC(t)}),this.register(function(t){return new sC(t)}),this.register(function(t){return new rC(t)}),this.register(function(t){return new YR(t)}),this.register(function(t){return new ZR(t)}),this.register(function(t){return new JR(t)}),this.register(function(t){return new QR(t)}),this.register(function(t){return new $R(t)}),this.register(function(t){return new eC(t)}),this.register(function(t){return new KR(t)}),this.register(function(t){return new nC(t)}),this.register(function(t){return new tC(t)}),this.register(function(t){return new WR(t)}),this.register(function(t){return new oC(t)}),this.register(function(t){return new aC(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ao.extractUrlBase(e);o=Ao.resolveURL(c,this.path)}else o=Ao.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Dh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===n_){try{o[Je.KHR_BINARY_GLTF]=new lC(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new SC(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Je.KHR_MATERIALS_UNLIT:o[h]=new XR;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[h]=new cC(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[h]=new uC;break;case Je.KHR_MESH_QUANTIZATION:o[h]=new hC;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function GR(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class WR{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new je(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],ln);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new vR(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Qg(u),c.distance=h;break;case"spot":c=new mR(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class XR{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return Ds}extendParams(e,t,i){const s=[];e.color=new je(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ln),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,zt))}return Promise.all(s)}}class $R{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class jR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new it(a,a)}return Promise.all(r)}}class qR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class KR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class YR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new je(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],ln)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,zt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class ZR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class JR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new je().setRGB(a[0],a[1],a[2],ln),Promise.all(r)}}class QR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class eC{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new je().setRGB(a[0],a[1],a[2],ln),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,zt)),Promise.all(r)}}class tC{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class nC{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class iC{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class sC{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rC{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class oC{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class aC{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==wn.TRIANGLES&&c.mode!==wn.TRIANGLE_STRIP&&c.mode!==wn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new Ge,m=new V,p=new ki,T=new V(1,1,1),E=new Hu(g.geometry,g.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&T.fromBufferAttribute(l.SCALE,M),E.setMatrixAt(M,_.compose(m,p,T));for(const M in l)if(M==="_COLOR_0"){const O=l[M];E.instanceColor=new ku(O.array,O.itemSize,O.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);Tt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),d.push(E)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const n_="glTF",oo=12,xp={JSON:1313821514,BIN:5130562};class lC{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,oo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==n_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-oo,r=new DataView(e,oo);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===xp.JSON){const c=new Uint8Array(e,oo+o,a);this.content=i.decode(c)}else if(l===xp.BIN){const c=oo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=zu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=zu[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],d=Tr[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,ln,f)})})}}class uC{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class hC{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class i_ extends jo{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,T=1-m,E=p-f+h;for(let M=0;M!==a;M++){const O=o[_+M+a],D=o[_+M+l]*u,I=o[g+M+a],P=o[g+M]*u;r[M]=T*O+E*D+m*I+p*P}return r}}const fC=new ki;class dC extends i_{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return fC.fromArray(r).normalize().toArray(r),r}}const wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Tr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yp={9728:on,9729:Sn,9984:_g,9985:Oa,9986:uo,9987:Ci},Sp={33071:os,33648:tl,10497:Dr},Pc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},pC={CUBICSPLINE:void 0,LINEAR:ko,STEP:Bo},Lc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mC(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Er({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Oi})),n.DefaultMaterial}function ws(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ti(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function gC(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function _C(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vC(n){let e;const t=n.extensions&&n.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ic(t.attributes):e=n.indices+":"+Ic(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Ic(n.targets[i]);return e}function Ic(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Gu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xC(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const yC=new Ge;class SC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new GR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new Jg(this.options.manager):this.textureLoader=new yR(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Dh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return ws(r,a,s),Ti(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Ao.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Pc[s.type],a=Tr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new an(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Pc[s.type],c=Tr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let E=t.cache.get(T);E||(_=new c(a,p*d,s.count*d/u),E=new jw(_,d/u),t.cache.add(T,E)),m=new Ch(E,l,f%d/u,g)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),m=new an(_,l,g);if(s.sparse!==void 0){const p=Pc.SCALAR,T=Tr[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,O=new T(o[1],E,s.sparse.count*p),D=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new an(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let I=0,P=O.length;I<P;I++){const v=O[I];if(m.setX(v,D[I*l]),l>=2&&m.setY(v,D[I*l+1]),l>=3&&m.setZ(v,D[I*l+2]),l>=4&&m.setW(v,D[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=yp[f.magFilter]||Sn,u.minFilter=yp[f.minFilter]||Ci,u.wrapS=Sp[f.wrapS]||Dr,u.wrapT=Sp[f.wrapT]||Dr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==on&&u.minFilter!==Sn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Vt(_);m.needsUpdate=!0,f(m)}),t.load(Ao.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Ti(h,o),h.userData.mimeType=o.mimeType||xC(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Kg,li.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new qg,li.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Er}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){const h=s[Je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new je(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],ln),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,zt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=si);const u=r.alphaMode||Lc.OPAQUE;if(u===Lc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Lc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ds&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new it(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Ds&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ds){const h=r.emissiveFactor;a.emissive=new je().setRGB(h[0],h[1],h[2],ln)}return r.emissiveTexture!==void 0&&o!==Ds&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,zt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Ti(h,r),t.associations.set(h,{materials:e}),r.extensions&&ws(s,h,r),h})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Mp(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=vC(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Mp(new Zn,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?mC(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const T=c[d];if(m.mode===wn.TRIANGLES||m.mode===wn.TRIANGLE_STRIP||m.mode===wn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Kw(_,T):new sn(_,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===wn.TRIANGLE_STRIP?p.geometry=vp(p.geometry,wg):m.mode===wn.TRIANGLE_FAN&&(p.geometry=vp(p.geometry,Ou));else if(m.mode===wn.LINES)p=new Jw(_,T);else if(m.mode===wn.LINE_STRIP)p=new Lh(_,T);else if(m.mode===wn.LINE_LOOP)p=new Qw(_,T);else if(m.mode===wn.POINTS)p=new eR(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&_C(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ti(p,r),m.extensions&&ws(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&ws(s,h[0],r),h[0];const f=new Ns;r.extensions&&ws(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new tn(IM.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new wh(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ti(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Ge;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ph(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,T=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",T)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let T=0,E=f.length;T<E;T++){const M=f[T],O=d[T],D=g[T],I=_[T],P=m[T];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const v=i._createAnimationTracks(M,O,D,I,P);if(v)for(let x=0;x<v.length;x++)p.push(v[x])}return new aR(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,yC)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new $g:c.length>1?u=new Ns:c.length===1?u=c[0]:u=new Tt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ti(u,r),r.extensions&&ws(i,u,r),r.matrix!==void 0){const h=new Ge;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Ns;i.name&&(r.name=s.createUniqueName(i.name)),Ti(r,i),i.extensions&&ws(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof li||f instanceof Vt)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Yi[r.path]===Yi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Yi[r.path]){case Yi.weights:c=Br;break;case Yi.rotation:c=kr;break;case Yi.position:case Yi.scale:c=Hr;break;default:switch(i.itemSize){case 1:c=Br;break;case 2:case 3:default:c=Hr;break}break}const u=s.interpolation!==void 0?pC[s.interpolation]:ko,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+Yi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Gu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof kr?dC:i_;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function MC(n,e,t){const i=e.attributes,s=new ui;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new V(l[0],l[1],l[2]),new V(c[0],c[1],c[2])),a.normalized){const u=Gu(Tr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new V,l=new V;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=Gu(Tr[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new hi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Mp(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=zu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return nt.workingColorSpace!==ln&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),Ti(n,e),MC(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?gC(n,e.targets,t):n})}const bC={class:"absolute z-50 top-0 flex justify-between w-full items-center p-8"},EC={id:"items",class:"ml-4 p-8 bg-black text-white border-2 border-white rounded-lg shadow-lg z-20 w-45 h-45"},TC={key:0},AC={key:1},wC={id:"hud",class:"hud absoute text-white font-bold"},RC={key:0,class:"flex gap-2"},CC={key:0,src:TS,alt:"Full Heart",width:"40",height:"40"},PC={key:1,src:AS,alt:"Empty Heart",width:"40",height:"40"},LC={key:1,class:"points text-lg mt-2"},IC={key:0,class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"},DC={class:"bg-white p-6 rounded-lg shadow-lg w-96"},NC={class:"text-2xl font-bold mb-4"},UC={flex:"","flex-col":"","gap-3":""},OC={class:"text-2xl font-bold mb-4"},Dc=2,FC=4,bp=1.5,BC=-9.8,kC=6,HC=15,VC=It({__name:"Game",setup(n){const e=Hs(),i=fh().params.id.toString();let s,r=0;const o=new Map,a=new Map,l=[];let c,u,h,f=!1,d=Dc;const g=ot(!1),_=ot(50),m=ot(50);let p=0,T=!1,E=!1,M=0;function O(){ye.lock(),ye.isLocked=!0}const D=_t(()=>{var L;const R=sessionStorage.getItem("myName");return(L=e.gameState.gamedata)==null?void 0:L.players.find(U=>U.name===R)}),I=_t(()=>{var U;const R=sessionStorage.getItem("myName")||"";if(!R)return null;const L=((U=e.gameState.gamedata)==null?void 0:U.characters[R])||null;return console.log("Current Character:",L),L}),P=_t(()=>{var R;return((R=I.value)==null?void 0:R.life)??0});Rn(()=>{var R;return(R=I.value)==null?void 0:R.life},(R,L)=>{R!==L&&console.log(`Life changed from ${L} to ${R}`)});const v=_t(()=>{var R;return((R=I.value)==null?void 0:R.maxLife)??0}),x=ot([]),C=_t(()=>e.gameState.gamedata.maxPointsSnackman),N=_t(()=>{var R;return((R=I.value)==null?void 0:R.currentPoints)??0});Rn(()=>{var R;return(R=I.value)==null?void 0:R.currentPoints},(R,L)=>{R!==L&&console.log(`Points changed from ${L} to ${R}`)});const H=ot([]);function J(){const R=new $w,L=new tn(75,window.innerWidth/window.outerWidth,.001,1e3);L.position.set(1,1,2);const U=new bR;L.add(U);const he=new Xw;he.setPixelRatio(window.devicePixelRatio),he.setSize(window.innerWidth,window.innerHeight),he.shadowMap.enabled=!0;const Y=new FR(L,he.domElement);Y.pointerSpeed=1;const ue=new t_;return{scene:R,camera:L,renderer:he,pointerLockControls:Y,clock:ue,listener:U}}function ae(R,L){L.domElement.addEventListener("click",U=>{L.domElement.requestPointerLock()}),R.addEventListener("resize",U=>{L.setPixelRatio(R.devicePixelRatio),L.setSize(R.innerWidth,R.innerHeight),W.aspect=R.innerWidth/R.innerHeight,W.updateProjectionMatrix()}),document.addEventListener("pointerlockchange",U=>{document.pointerLockElement?g.value=!1:g.value=!0,console.log(g)}),R.addEventListener("keydown",U=>{switch(U.code){case"ShiftLeft":d===Dc?d=FC:d=Dc;break;case"KeyW":c=!0;break;case"KeyA":h=!0;break;case"KeyS":u=!0;break;case"KeyD":f=!0;break;case"Space":T=!0;break}}),R.addEventListener("keyup",U=>{switch(console.log("Losgelasen: "+U.code),U.code){case"KeyW":c=!1;break;case"KeyA":h=!1;break;case"KeyS":u=!1;break;case"KeyD":f=!1;break;case"Space":T=!1;break}})}function j(){const R=new SR,L=[],U=new Rc(Oe),he=new URL("/assets/bg-music-CQGKg28I.mp3",import.meta.url).href;R.load(he,function(me){U.setBuffer(me),U.setLoop(!0),U.setVolume(_.value/100),U.play()}),L.push(U);const Y=new Rc(Oe),ue=new URL("/assets/walking-B-GBr6tw.mp3",import.meta.url).href;R.load(ue,function(me){Y.setBuffer(me),Y.setLoop(!0),Y.setVolume(m.value/100)}),L.push(Y);const Le=new Rc(Oe),le=new URL("/assets/hit-DR3qCVkF.mp3",import.meta.url).href;return R.load(le,function(me){Le.setBuffer(me),Le.setLoop(!0),Le.setVolume(m.value/100)}),L.push(Le),L}const{scene:ee,camera:W,renderer:ge,pointerLockControls:ye,clock:Re,listener:Oe}=J();Rn(ye,async(R,L)=>{console.log("CHANGE"),L.isLocked}),ae(window,ge);const[Qe,se,pe]=j();Rn(_,R=>Qe.setVolume(R/100)),Rn(m,R=>{se.setVolume(R/100),pe.setVolume(R/100)});const be=ot(null),k=new Ih(1,30,30),ce=new Er({color:16776960,metalness:0,roughness:0}),oe=new sn(k,ce);oe.position.y=2,oe.position.x=3,oe.position.z=-4,ee.add(oe);const de=new xR(4210752,10);ee.add(de);const Fe=new Qg(16777215,1e3,10);Fe.position.set(10,20,10),ee.add(Fe);function Ie(){setTimeout(function(){requestAnimationFrame(Ie)},1e3/60),l.forEach(L=>{L.rotation.y+=.01}),ge.render(ee,W);const R=Re.getDelta();S(R)}function w(R){T?(p+=R,p>=bp&&(p=0,T=!1,M=HC,E=!0,console.log(" Großer Sprung ausgelöst mit Geschwindigkeit:",M))):p>0&&p<bp&&!E&&(p=0,M=kC,E=!0,console.log("Kleiner Sprung ausgelöst mit Geschwindigkeit:",M))}function S(R){const L=new V;W.getWorldDirection(L),L.y=0,L.normalize();const U=new V(0,1,0);s=W.position.clone(),E&&(M+=BC*R,s.y+=M*R,X(s),W.position.y=s.y,s.y<=1&&(s.y=1,X(s),W.position.y=s.y,M=0,E=!1,p=0)),W.position.y=s.y,c||u||h||f?(se.isPlaying||se.play(),c?f?s.addScaledVector(L.applyAxisAngle(U,7*Math.PI/4),d*R):h?s.addScaledVector(L.applyAxisAngle(U,Math.PI/4),d*R):u||s.addScaledVector(L.applyAxisAngle(U,2*Math.PI),d*R):u?f?s.addScaledVector(L.applyAxisAngle(U,5*Math.PI/4),d*R):h?s.addScaledVector(L.applyAxisAngle(U,3*Math.PI/4),d*R):s.addScaledVector(L.applyAxisAngle(U,Math.PI),d*R):f?h||s.addScaledVector(L.applyAxisAngle(U,3*Math.PI/2),d*R):h&&s.addScaledVector(L.applyAxisAngle(U,Math.PI/2),d*R),X(s)):se.isPlaying&&se.pause(),E||w(R)}function X(R){const L=Date.now();L-r>10&&(co(`/topic/ingame/${i}/playerPosition`,{playerName:sessionStorage.getItem("myName"),posX:R.x,posY:R.z,posZ:R.y,angle:W.rotation.z}),r=L)}function te(){W.position.copy(s)}function $(R){R.traverse(L=>{L instanceof sn&&(L.geometry&&L.geometry.dispose(),L.material&&(Array.isArray(L.material)?L.material.forEach(U=>U.dispose()):L.material.dispose()))}),ee.remove(R)}function K(R){console.log("INSIDE RENDER: ",R);const L=new Cc,U=Math.PI;Array.from(o.keys()).filter(Y=>!R.map(ue=>ue.playerName).includes(Y)).forEach(Y=>{const ue=o.get(Y);if(ue){const Le=ee.getObjectById(ue);o.delete(Y),Le&&$(Le)}}),R.forEach(async Y=>{if(!o.has(Y.playerName)&&!a.get(Y.playerName)){const ue=new URL("/assets/snackman-DBG9Bl-Z.glb",import.meta.url).href;a.set(Y.playerName,!0),L.load(ue,Le=>{const le=Le.scene;le.scale.set(.5,.5,.5),o.set(Y.playerName,le.id),ee.add(le),le.position.set(Y.x,1,Y.y),le.rotation.y=Y.angle+U,a.delete(Y.playerName)})}else{const ue=o.get(Y.playerName);if(ue){const Le=ee.getObjectById(ue);if(Le){const le=new ui,me=new V;le.getSize(me),le.expandByObject(Le),Le.position.set(Y.x-me.x/2,Y.z,Y.y),Le.rotation.y=Y.angle+U}}}})}function fe(R){const L=new Cc;new URL("/assets/chicken-DGi-Wshb.gltf",import.meta.url).href,R.forEach(U=>{L.load("@/assets/game/realistic/chicken/chicken.gltf",he=>{const Y=he.scene;Y.position.set(U.x,1,U.y),Y.scale.set(.03,.03,.03),Y.rotateY(U.angle),ee.add(Y)})})}const ne=new Map;function b(R){if(ne.has(R))return ne.get(R);const L=new Jg().load(R);return ne.set(R,L),L}function y(R){const L=new Gs(1,1,1),U=new Gs(1,2,1),he=b(VR),Y=b(zR),ue=new Er({map:he}),Le=new Er({map:Y}),le=.5,me=new Hu(L,ue,R.length*R[0].length),Ce=new Hu(U,Le,R.length*R[0].length);let He=0,we=0;const ze=new Map;function Ve(et){return ze.has(et)||ze.set(et,new Promise((B,Se)=>{new Cc().load(et,ie=>B(ie.scene),void 0,ie=>Se(ie))})),ze.get(et)}R.forEach((et,B)=>{[...et].forEach((Se,ie)=>{const re=B+le,ve=ie+le;switch(Se){case"*":const Ee=new Ge().makeTranslation(re,1.5,ve);Ce.setMatrixAt(we++,Ee);break;case" ":const $e=new Ge().makeTranslation(re,0,ve);me.setMatrixAt(He++,$e);break;case"E":case"D":case"C":case"B":case"A":const At=new Ge().makeTranslation(re,0,ve);me.setMatrixAt(He++,At);const Ft={E:[new URL("/assets/strawberry_shortcake-CRiMLrd4.glb",import.meta.url),new URL("/assets/chocolate_bar-D_tfyEao.glb",import.meta.url)],D:[new URL("/assets/cottoncandy-CsV13UEF.glb",import.meta.url),new URL("/assets/popcorn-CskqXeha.glb",import.meta.url)],C:[new URL("/assets/candycane-CrPeXEn-.glb",import.meta.url),new URL("/assets/chips-6HuXgoW5.glb",import.meta.url)],B:[new URL("/assets/apple-CGoB8D_3.glb",import.meta.url),new URL("/assets/banana-C7BRwFBb.glb",import.meta.url)],A:[new URL("/assets/ginger_fixed-BtxAjIMb.glb",import.meta.url),new URL("/assets/lemon_remake-BvTXj1CQ.glb",import.meta.url)]},qe=new URL(Ft[Se][Math.random()>.5?0:1],import.meta.url).href;Ve(qe).then(Nn=>{const xt=Nn.clone();qe.includes("chocolate_bar")?(xt.position.set(re-2,.75,ve),xt.scale.set(.2,.2,.2)):qe.includes("strawberry_shortcake")?(xt.position.set(re-2,.5,ve),xt.scale.set(.5,.5,.5)):qe.includes("cotton_candy")?(xt.position.set(re-2,.5,ve),xt.scale.set(.2,.2,.2)):qe.includes("popcorn")?(xt.position.set(re-2,.5,ve),xt.scale.set(.5,.5,.5)):qe.includes("candy_cane")?(xt.position.set(re-2,.8,ve),xt.scale.set(.07,.07,.07)):qe.includes("chips")?(xt.position.set(re-2,.8,ve),xt.scale.set(.1,.1,.1)):qe.includes("apple")?(xt.position.set(re-2,.75,ve),xt.scale.set(.0015,.0015,.0015)):qe.includes("banana")?(xt.position.set(re-2,.75,ve),xt.scale.set(.07,.07,.07)):qe.includes("ginger_fixed")?(xt.position.set(re-2,.75,ve),xt.scale.set(.1,.1,.1),xt.rotateZ(Math.PI/1.5)):qe.includes("lemon_remake")&&(xt.position.set(re-2,.75,ve),xt.scale.set(.09,.09,.09),xt.rotateZ(Math.PI/1.5)),ee.add(xt),l.push(xt)});break;default:const fn=new Ge().makeTranslation(re,0,ve);me.setMatrixAt(He++,fn)}})}),me.instanceMatrix.needsUpdate=!0,Ce.instanceMatrix.needsUpdate=!0,ee.add(me),ee.add(Ce)}async function F(R){let L=[];R.forEach(U=>{sessionStorage.getItem("myName")!==U.name&&L.push({playerName:U.name,x:U.posX,y:U.posY,z:U.posZ,angle:U.angleInDegrees})}),K(L)}return oi(async()=>{var L;try{await e.fetchGameStatus()}catch(U){console.error("Error fetching game status:",U)}e.gameState.gamedata.chickens===null?(H.value=[],console.log("Keine Positionsdaten weil Chicken Array leer")):(H.value=e.gameState.gamedata.chickens,console.log("Chickens-Positionsdaten: "+H.value)),bo(`/ingame/playerPositions/${i}`,async U=>{switch(U.type){case"playerPosition":console.log("FROM PLAYER POSITON: ",U.feedback),await F(U.feedback);break}}),bo(`/ingame/${i}`,async U=>{switch(console.log(U.type),U.type){case"playerMoveValidation":U.feedback.playerName===sessionStorage.getItem("myName")&&te();break}}),be.value&&be.value.appendChild(ge.domElement);const R=(L=e.gameState.gamedata.playmap)==null?void 0:L.map;R?y(R):console.error("No map found"),fe(H.value),Ie()}),(R,L)=>{var U,he;return xe(),Pe(st,null,[q("div",{ref_key:"threeContainer",ref:be,id:"app",class:"gameContainer relative z-20"},null,512),q("div",bC,[q("div",EC,[x.value.length>0?(xe(),Pe("div",TC,gt(x.value.join(", ")),1)):(xe(),Pe("div",AC))]),q("div",wC,[((U=D.value)==null?void 0:U.playerrole)===Te(rn).SNACKMAN?(xe(),Pe("div",RC,[(xe(!0),Pe(st,null,ai(v.value,Y=>(xe(),Pe("div",{key:Y},[Y<=P.value?(xe(),Pe("img",CC)):(xe(),Pe("img",PC))]))),128))])):yt("",!0),((he=D.value)==null?void 0:he.playerrole)===Te(rn).SNACKMAN?(xe(),Pe("div",LC,[q("p",null,"Points: "+gt(N.value)+" / "+gt(C.value),1)])):yt("",!0)])]),g.value?(xe(),Pe("div",IC,[q("div",DC,[L[4]||(L[4]=q("h3",{class:"text-2xl font-bold mb-4"},"Lautstärke",-1)),L[5]||(L[5]=kt(" Musik ")),Gt(q("input",{type:"range",class:"form-control-range",id:"formControlRange","onUpdate:modelValue":L[0]||(L[0]=Y=>_.value=Y)},null,512),[[nn,_.value]]),kt(" "+gt(_.value)+"% ",1),L[6]||(L[6]=q("br",null,null,-1)),L[7]||(L[7]=kt(" Effekte ")),Gt(q("input",{type:"range",class:"form-control-range",id:"formControlRange","onUpdate:modelValue":L[1]||(L[1]=Y=>m.value=Y)},null,512),[[nn,m.value]]),kt(" "+gt(m.value)+"% ",1),L[8]||(L[8]=q("br",null,null,-1)),q("h2",NC,"Adjust Settings "+gt(g.value),1),q("button",{onClick:O,class:"mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"}," Close ")])])):yt("",!0),Lt(mh,null,{titel:qn(()=>L[9]||(L[9]=[q("h3",{class:"header-modal-adventure"},"Lautstärke",-1)])),content:qn(()=>[q("div",UC,[L[10]||(L[10]=kt(" Musik ")),Gt(q("input",{type:"range",class:"form-control-range",id:"formControlRange","onUpdate:modelValue":L[2]||(L[2]=Y=>_.value=Y)},null,512),[[nn,_.value]]),kt(" "+gt(_.value)+"% ",1),L[11]||(L[11]=q("br",null,null,-1)),L[12]||(L[12]=kt(" Effekte ")),Gt(q("input",{type:"range",class:"form-control-range",id:"formControlRange","onUpdate:modelValue":L[3]||(L[3]=Y=>m.value=Y)},null,512),[[nn,m.value]]),kt(" "+gt(m.value)+"% ",1),L[13]||(L[13]=q("br",null,null,-1)),q("h2",OC,"Adjust Settings "+gt(g.value),1),q("button",{onClick:O,class:"button-small-adventure"}," Close ")])]),_:1})],64)}}}),zC=["min","max"],GC=["min","max"],WC=["onClick","data-value"],XC=It({__name:"MapCreator",setup(n){const e=gh();return oi(async()=>{await e.fetchMaps(),console.log("Aktuelle Maps:",e.mapsDTD.maps)}),oi(async()=>{await e.fetchGridLimits(),console.log("grid min:",e.minGridSize),console.log("grid max:",e.maxGridSize)}),(t,i)=>(xe(),Pe(st,null,[q("div",null,[i[5]||(i[5]=q("h1",null,"Map Creator",-1)),i[6]||(i[6]=q("p",null,"Gib einen Namen für die Map ein:",-1)),Gt(q("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=s=>Te(e).mapName=s),placeholder:"Map Name"},null,512),[[nn,Te(e).mapName]]),i[7]||(i[7]=q("p",null,"Definiere die Größe des Spielfelds:",-1)),i[8]||(i[8]=q("p",null," Zeilen:",-1)),Gt(q("input",{type:"number","onUpdate:modelValue":i[1]||(i[1]=s=>Te(e).rows=s),placeholder:"Anzahl der Reihen",min:Te(e).minGridSize,max:Te(e).maxGridSize},null,8,zC),[[nn,Te(e).rows]]),i[9]||(i[9]=q("p",null,"Spalten:",-1)),Gt(q("input",{type:"number","onUpdate:modelValue":i[2]||(i[2]=s=>Te(e).cols=s),placeholder:"Anzahl der Spalten",min:Te(e).minGridSize,max:Te(e).maxGridSize},null,8,GC),[[nn,Te(e).cols]]),q("button",{class:"buttons-top-bottom",onClick:i[3]||(i[3]=(...s)=>Te(e).createGrid&&Te(e).createGrid(...s))},"Spielfeld erstellen")]),i[10]||(i[10]=q("br",null,null,-1)),i[11]||(i[11]=q("br",null,null,-1)),Te(e).grid.length>0?(xe(),Pe("div",{key:0,class:"grid-container",style:zr({gridTemplateColumns:`repeat(${Te(e).cols}, 50px)`,gridTemplateRows:`repeat(${Te(e).rows}, 50px)`})},[(xe(!0),Pe(st,null,ai(Te(e).grid.flat(),(s,r)=>(xe(),Pe("div",{key:"cell-"+r,class:"grid-cell",onClick:o=>Te(e).updateCell(Math.floor(r/Te(e).cols),r%Te(e).cols),"data-value":s},gt(s),9,WC))),128))],4)):yt("",!0),i[12]||(i[12]=q("br",null,null,-1)),i[13]||(i[13]=q("br",null,null,-1)),q("button",{class:"buttons-top-bottom",onClick:i[4]||(i[4]=(...s)=>Te(e).saveMap&&Te(e).saveMap(...s))},"Create")],64))}}),$C=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},jC=$C(XC,[["__scopeId","data-v-7b8408a2"]]),qC={key:0},KC={key:0,class:"h-screen bg-green-800 flex flex-col items-center justify-center"},YC={class:"text-3xl text-zinc-300 mb-8"},ZC={class:"font-bold"},JC={key:1,class:"h-screen bg-red-800 flex flex-col items-center justify-center"},QC={class:"text-3xl text-zinc-300 mb-8"},e1={class:"font-bold"},t1={key:1},n1={key:0,class:"h-screen bg-green-800 flex flex-col items-center justify-center"},i1={class:"text-3xl text-zinc-300 mb-8"},s1={class:"font-bold"},r1={key:1,class:"h-screen bg-red-800 flex flex-col items-center justify-center"},o1={class:"text-3xl text-zinc-300 mb-8"},a1={class:"font-bold"},l1=It({__name:"GameEnd",setup(n){const e=fh(),t=ot({name:"TestPlayer",email:"test@example.com",password:"testpassword123",playertype:Ml.GUEST,playerrole:rn.SNACKMAN}),i=ot({snackman:{life:0,nutriscore:100},ghost:{touchcount:0}});function s(){const c=e.params.id;c?rl.push({name:"lobbyWithId",params:{id:c}}):console.error("Lobby ID not found")}const r=_t(()=>i.value.snackman.life>0||i.value.snackman.nutriscore>=100),o=_t(()=>i.value.snackman.life<=0&&i.value.snackman.nutriscore<100),a=_t(()=>o.value),l=_t(()=>r.value);return(c,u)=>(xe(),Pe(st,null,[t.value.playerrole===Te(rn).GHOST?(xe(),Pe("div",qC,[a.value?(xe(),Pe("div",KC,[u[1]||(u[1]=q("h1",{class:"text-4xl font-bold text-white mb-6"},"Victory!",-1)),u[2]||(u[2]=q("p",{class:"text-3xl text-zinc-300 mb-4"}," As the Ghost, you won! The Snackman has no lives left. ",-1)),q("p",YC,[u[0]||(u[0]=kt(" Touchcount: ")),q("span",ZC,gt(i.value.ghost.touchcount),1)]),q("button",{class:"bg-yellow-500 text-zinc-900 px-6 py-3 rounded-lg hover:bg-yellow-600 transition",onClick:s}," Back to lobby ")])):yt("",!0),l.value?(xe(),Pe("div",JC,[u[4]||(u[4]=q("h1",{class:"text-4xl font-bold text-white mb-6"},"Defeat!",-1)),u[5]||(u[5]=q("p",{class:"text-3xl text-zinc-300 mb-4"}," As the Ghost, you lost! ",-1)),q("p",QC,[u[3]||(u[3]=kt(" Touchcount: ")),q("span",e1,gt(i.value.ghost.touchcount),1)]),q("button",{class:"bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition",onClick:s}," Back to lobby ")])):yt("",!0)])):yt("",!0),t.value.playerrole===Te(rn).SNACKMAN?(xe(),Pe("div",t1,[r.value?(xe(),Pe("div",n1,[u[7]||(u[7]=q("h1",{class:"text-4xl font-bold text-white mb-6"},"Victory!",-1)),u[8]||(u[8]=q("p",{class:"text-3xl text-zinc-300 mb-4"}," As the Snackman, you won! ",-1)),q("p",i1,[u[6]||(u[6]=kt(" Nutriscore: ")),q("span",s1,gt(i.value.snackman.nutriscore),1)]),q("button",{class:"bg-yellow-500 text-zinc-900 px-6 py-3 rounded-lg hover:bg-yellow-600 transition",onClick:s}," Back to lobby ")])):yt("",!0),o.value?(xe(),Pe("div",r1,[u[10]||(u[10]=q("h1",{class:"text-4xl font-bold text-white mb-6"},"Defeat!",-1)),u[11]||(u[11]=q("p",{class:"text-3xl text-zinc-300 mb-4"}," As the Snackman, you lost! Your lives have dropped to 0. ",-1)),q("p",o1,[u[9]||(u[9]=kt(" Nutriscore: ")),q("span",a1,gt(i.value.snackman.nutriscore),1)]),q("button",{class:"bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition",onClick:s}," Back to lobby ")])):yt("",!0)])):yt("",!0)],64))}}),c1={key:0},u1={key:1},h1=It({__name:"TestView",setup(n){const e=gh(),{mapsDTD:t}=vy(e);return oi(async()=>{console.log("Selected Map at Mount:",e.mapsDTD.selectedMap),e.mapsDTD.selectedMap?(await e.fetchMaps(),console.log("Map Data Fetched:",t.value)):console.error("No selected map.")}),(i,s)=>{var r;return xe(),Pe("div",null,[q("h1",null,"Selected Map: "+gt(Te(e).mapsDTD.selectedMap),1),Te(e).mapsDTD.maps.length>0?(xe(),Pe("div",c1,[s[0]||(s[0]=q("p",null,"Map Data:",-1)),q("ul",null,[(xe(!0),Pe(st,null,ai((r=Te(t).selectedMap)==null?void 0:r.map,(o,a)=>(xe(),Pe("li",{key:a},[(xe(!0),Pe(st,null,ai(o,(l,c)=>(xe(),Pe("div",{key:c},gt(l),1))),128))]))),128))])])):(xe(),Pe("p",u1,"No map data available"))])}}}),rl=ly({history:kx("/"),routes:[{path:"/",redirect:"/index"},{path:"/index",name:"index",component:Oy},{path:"/lobby/:id",name:"lobbyWithId",component:ES},{path:"/lobby",name:"lobbyList",component:Ky},{path:"/lobby/:id/ingame",name:"game",component:VC},{path:"/createmap",name:"createmap",component:jC},{path:"/:id/GameEnd",name:"GameEnd",component:l1},{path:"/test-view",name:"test-view",component:h1}]});var f1=Object.defineProperty,Ep=Object.getOwnPropertySymbols,d1=Object.prototype.hasOwnProperty,p1=Object.prototype.propertyIsEnumerable,Tp=(n,e,t)=>e in n?f1(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,s_=(n,e)=>{for(var t in e||(e={}))d1.call(e,t)&&Tp(n,t,e[t]);if(Ep)for(var t of Ep(e))p1.call(e,t)&&Tp(n,t,e[t]);return n},Cl=n=>typeof n=="function",Pl=n=>typeof n=="string",r_=n=>Pl(n)&&n.trim().length>0,m1=n=>typeof n=="number",Us=n=>typeof n>"u",Vo=n=>typeof n=="object"&&n!==null,g1=n=>ci(n,"tag")&&r_(n.tag),o_=n=>window.TouchEvent&&n instanceof TouchEvent,a_=n=>ci(n,"component")&&l_(n.component),_1=n=>Cl(n)||Vo(n),l_=n=>!Us(n)&&(Pl(n)||_1(n)||a_(n)),Ap=n=>Vo(n)&&["height","width","right","left","top","bottom"].every(e=>m1(n[e])),ci=(n,e)=>(Vo(n)||Cl(n))&&e in n,v1=(n=>()=>n++)(0);function Nc(n){return o_(n)?n.targetTouches[0].clientX:n.clientX}function wp(n){return o_(n)?n.targetTouches[0].clientY:n.clientY}var x1=n=>{Us(n.remove)?n.parentNode&&n.parentNode.removeChild(n):n.remove()},qo=n=>a_(n)?qo(n.component):g1(n)?It({render(){return n}}):typeof n=="string"?n:tt(Te(n)),y1=n=>{if(typeof n=="string")return n;const e=ci(n,"props")&&Vo(n.props)?n.props:{},t=ci(n,"listeners")&&Vo(n.listeners)?n.listeners:{};return{component:qo(n),props:e,listeners:t}},S1=()=>typeof window<"u",Fh=class{constructor(){this.allHandlers={}}getHandlers(n){return this.allHandlers[n]||[]}on(n,e){const t=this.getHandlers(n);t.push(e),this.allHandlers[n]=t}off(n,e){const t=this.getHandlers(n);t.splice(t.indexOf(e)>>>0,1)}emit(n,e){this.getHandlers(n).forEach(i=>i(e))}},M1=n=>["on","off","emit"].every(e=>ci(n,e)&&Cl(n[e])),_n;(function(n){n.SUCCESS="success",n.ERROR="error",n.WARNING="warning",n.INFO="info",n.DEFAULT="default"})(_n||(_n={}));var ol;(function(n){n.TOP_LEFT="top-left",n.TOP_CENTER="top-center",n.TOP_RIGHT="top-right",n.BOTTOM_LEFT="bottom-left",n.BOTTOM_CENTER="bottom-center",n.BOTTOM_RIGHT="bottom-right"})(ol||(ol={}));var vn;(function(n){n.ADD="add",n.DISMISS="dismiss",n.UPDATE="update",n.CLEAR="clear",n.UPDATE_DEFAULTS="update_defaults"})(vn||(vn={}));var Gn="Vue-Toastification",kn={type:{type:String,default:_n.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},c_={type:kn.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},Ga={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:kn.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},Wu={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},u_={transition:{type:[Object,String],default:`${Gn}__bounce`}},b1={position:{type:String,default:ol.TOP_RIGHT},draggable:kn.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:kn.trueBoolean,pauseOnHover:kn.trueBoolean,closeOnClick:kn.trueBoolean,timeout:Wu.timeout,hideProgressBar:Wu.hideProgressBar,toastClassName:kn.classNames,bodyClassName:kn.classNames,icon:c_.customIcon,closeButton:Ga.component,closeButtonClassName:Ga.classNames,showCloseButtonOnHover:Ga.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new Fh}},E1={id:{type:[String,Number],required:!0,default:0},type:kn.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},T1={container:{type:[Object,Function],default:()=>document.body},newestOnTop:kn.trueBoolean,maxToasts:{type:Number,default:20},transition:u_.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:n=>n},filterToasts:{type:Function,default:n=>n},containerClassName:kn.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},Ni={CORE_TOAST:b1,TOAST:E1,CONTAINER:T1,PROGRESS_BAR:Wu,ICON:c_,TRANSITION:u_,CLOSE_BUTTON:Ga},h_=It({name:"VtProgressBar",props:Ni.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${Gn}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function A1(n,e){return xe(),Pe("div",{style:zr(n.style),class:Pn(n.cpClass)},null,6)}h_.render=A1;var w1=h_,f_=It({name:"VtCloseButton",props:Ni.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?qo(this.component):"button"},classes(){const n=[`${Gn}__close-button`];return this.showOnHover&&n.push("show-on-hover"),n.concat(this.classNames)}}}),R1=kt(" × ");function C1(n,e){return xe(),yn(sh(n.buttonComponent),_l({"aria-label":n.ariaLabel,class:n.classes},n.$attrs),{default:qn(()=>[R1]),_:1},16,["aria-label","class"])}f_.render=C1;var P1=f_,d_={},L1={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},I1=q("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),D1=[I1];function N1(n,e){return xe(),Pe("svg",L1,D1)}d_.render=N1;var U1=d_,p_={},O1={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},F1=q("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),B1=[F1];function k1(n,e){return xe(),Pe("svg",O1,B1)}p_.render=k1;var Rp=p_,m_={},H1={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},V1=q("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),z1=[V1];function G1(n,e){return xe(),Pe("svg",H1,z1)}m_.render=G1;var W1=m_,g_={},X1={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},$1=q("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),j1=[$1];function q1(n,e){return xe(),Pe("svg",X1,j1)}g_.render=q1;var K1=g_,__=It({name:"VtIcon",props:Ni.ICON,computed:{customIconChildren(){return ci(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return Pl(this.customIcon)?this.trimValue(this.customIcon):ci(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return ci(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:l_(this.customIcon)?qo(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[_n.DEFAULT]:Rp,[_n.INFO]:Rp,[_n.SUCCESS]:U1,[_n.ERROR]:K1,[_n.WARNING]:W1}[this.type]},iconClasses(){const n=[`${Gn}__icon`];return this.hasCustomIcon?n.concat(this.customIconClass):n}},methods:{trimValue(n,e=""){return r_(n)?n.trim():e}}});function Y1(n,e){return xe(),yn(sh(n.component),{class:Pn(n.iconClasses)},{default:qn(()=>[kt(gt(n.customIconChildren),1)]),_:1},8,["class"])}__.render=Y1;var Z1=__,v_=It({name:"VtToast",components:{ProgressBar:w1,CloseButton:P1,Icon:Z1},inheritAttrs:!1,props:Object.assign({},Ni.CORE_TOAST,Ni.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const n=[`${Gn}__toast`,`${Gn}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&n.push("disable-transition"),this.rtl&&n.push(`${Gn}__toast--rtl`),n},bodyClasses(){return[`${Gn}__toast-${Pl(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return Ap(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:ci,getVueComponentFromObj:qo,closeToast(){this.eventBus.emit(vn.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const n=this.$el;n.addEventListener("touchstart",this.onDragStart,{passive:!0}),n.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const n=this.$el;n.removeEventListener("touchstart",this.onDragStart),n.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(n){this.beingDragged=!0,this.dragPos={x:Nc(n),y:wp(n)},this.dragStart=Nc(n),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(n){this.beingDragged&&(n.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:Nc(n),y:wp(n)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,Ap(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),J1=["role"];function Q1(n,e){const t=_o("Icon"),i=_o("CloseButton"),s=_o("ProgressBar");return xe(),Pe("div",{class:Pn(n.classes),style:zr(n.draggableStyle),onClick:e[0]||(e[0]=(...r)=>n.clickHandler&&n.clickHandler(...r)),onMouseenter:e[1]||(e[1]=(...r)=>n.hoverPause&&n.hoverPause(...r)),onMouseleave:e[2]||(e[2]=(...r)=>n.hoverPlay&&n.hoverPlay(...r))},[n.icon?(xe(),yn(t,{key:0,"custom-icon":n.icon,type:n.type},null,8,["custom-icon","type"])):yt("v-if",!0),q("div",{role:n.accessibility.toastRole||"alert",class:Pn(n.bodyClasses)},[typeof n.content=="string"?(xe(),Pe(st,{key:0},[kt(gt(n.content),1)],2112)):(xe(),yn(sh(n.getVueComponentFromObj(n.content)),_l({key:1,"toast-id":n.id},n.hasProp(n.content,"props")?n.content.props:{},Dv(n.hasProp(n.content,"listeners")?n.content.listeners:{}),{onCloseToast:n.closeToast}),null,16,["toast-id","onCloseToast"]))],10,J1),n.closeButton?(xe(),yn(i,{key:1,component:n.closeButton,"class-names":n.closeButtonClassName,"show-on-hover":n.showCloseButtonOnHover,"aria-label":n.accessibility.closeButtonLabel,onClick:sx(n.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):yt("v-if",!0),n.timeout?(xe(),yn(s,{key:2,"is-running":n.isRunning,"hide-progress-bar":n.hideProgressBar,timeout:n.timeout,onCloseToast:n.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):yt("v-if",!0)],38)}v_.render=Q1;var eP=v_,x_=It({name:"VtTransition",props:Ni.TRANSITION,emits:["leave"],methods:{hasProp:ci,leave(n){n instanceof HTMLElement&&(n.style.left=n.offsetLeft+"px",n.style.top=n.offsetTop+"px",n.style.width=getComputedStyle(n).width,n.style.position="absolute")}}});function tP(n,e){return xe(),yn(q0,{tag:"div","enter-active-class":n.transition.enter?n.transition.enter:`${n.transition}-enter-active`,"move-class":n.transition.move?n.transition.move:`${n.transition}-move`,"leave-active-class":n.transition.leave?n.transition.leave:`${n.transition}-leave-active`,onLeave:n.leave},{default:qn(()=>[Hc(n.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}x_.render=tP;var nP=x_,y_=It({name:"VueToastification",devtools:{hide:!0},components:{Toast:eP,VtTransition:nP},props:Object.assign({},Ni.CORE_TOAST,Ni.CONTAINER,Ni.TRANSITION),data(){return{count:0,positions:Object.values(ol),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const n=this.eventBus;n.on(vn.ADD,this.addToast),n.on(vn.CLEAR,this.clearToasts),n.on(vn.DISMISS,this.dismissToast),n.on(vn.UPDATE,this.updateToast),n.on(vn.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(n){Cl(n)&&(n=await n()),x1(this.$el),n.appendChild(this.$el)},setToast(n){Us(n.id)||(this.toasts[n.id]=n)},addToast(n){n.content=y1(n.content);const e=Object.assign({},this.defaults,n.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[n.type],n),t=this.defaults.filterBeforeCreate(e,this.toastArray);t&&this.setToast(t)},dismissToast(n){const e=this.toasts[n];!Us(e)&&!Us(e.onClose)&&e.onClose(),delete this.toasts[n]},clearToasts(){Object.keys(this.toasts).forEach(n=>{this.dismissToast(n)})},getPositionToasts(n){const e=this.filteredToasts.filter(t=>t.position===n).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(n){Us(n.container)||this.setup(n.container),this.defaults=Object.assign({},this.defaults,n)},updateToast({id:n,options:e,create:t}){this.toasts[n]?(e.timeout&&e.timeout===this.toasts[n].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[n],e))):t&&this.addToast(Object.assign({},{id:n},e))},getClasses(n){return[`${Gn}__container`,n].concat(this.defaults.containerClassName)}}});function iP(n,e){const t=_o("Toast"),i=_o("VtTransition");return xe(),Pe("div",null,[(xe(!0),Pe(st,null,ai(n.positions,s=>(xe(),Pe("div",{key:s},[Lt(i,{transition:n.defaults.transition,class:Pn(n.getClasses(s))},{default:qn(()=>[(xe(!0),Pe(st,null,ai(n.getPositionToasts(s),r=>(xe(),yn(t,_l({key:r.id},r),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}y_.render=iP;var sP=y_,Cp=(n={},e=!0)=>{const t=n.eventBus=n.eventBus||new Fh;e&&Gr(()=>{const r=Ym(sP,s_({},n)),o=r.mount(document.createElement("div")),a=n.onMounted;if(Us(a)||a(o,r),n.shareAppContext){const l=n.shareAppContext;l===!0?console.warn(`[${Gn}] App to share context with was not provided.`):(r._context.components=l._context.components,r._context.directives=l._context.directives,r._context.mixins=l._context.mixins,r._context.provides=l._context.provides,r.config.globalProperties=l.config.globalProperties)}});const i=(r,o)=>{const a=Object.assign({},{id:v1(),type:_n.DEFAULT},o,{content:r});return t.emit(vn.ADD,a),a.id};i.clear=()=>t.emit(vn.CLEAR,void 0),i.updateDefaults=r=>{t.emit(vn.UPDATE_DEFAULTS,r)},i.dismiss=r=>{t.emit(vn.DISMISS,r)};function s(r,{content:o,options:a},l=!1){const c=Object.assign({},a,{content:o});t.emit(vn.UPDATE,{id:r,options:c,create:l})}return i.update=s,i.success=(r,o)=>i(r,Object.assign({},o,{type:_n.SUCCESS})),i.info=(r,o)=>i(r,Object.assign({},o,{type:_n.INFO})),i.error=(r,o)=>i(r,Object.assign({},o,{type:_n.ERROR})),i.warning=(r,o)=>i(r,Object.assign({},o,{type:_n.WARNING})),i},rP=()=>{const n=()=>console.warn(`[${Gn}] This plugin does not support SSR!`);return new Proxy(n,{get(){return n}})};function oP(n){return S1()?M1(n)?Cp({eventBus:n},!1):Cp(n,!0):rP()}var aP=Symbol("VueToastification"),lP=new Fh,cP=(n,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=n);const t=oP(s_({eventBus:lP},e));n.provide(aP,t)},uP=cP;const hP=fy(),Ll=Ym(uy);Ll.use(hP);Ll.use(rl);Ll.use(uP);Ll.mount("#app");
