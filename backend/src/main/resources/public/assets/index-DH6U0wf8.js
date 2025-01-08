(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function su(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const it={},Ys=[],Wn=()=>{},jm=()=>!1,Ia=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ru=n=>n.startsWith("onUpdate:"),kt=Object.assign,ou=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},qm=Object.prototype.hasOwnProperty,ct=(n,e)=>qm.call(n,e),Be=Array.isArray,Zs=n=>vo(n)==="[object Map]",yr=n=>vo(n)==="[object Set]",nh=n=>vo(n)==="[object Date]",Xe=n=>typeof n=="function",Rt=n=>typeof n=="string",Nn=n=>typeof n=="symbol",mt=n=>n!==null&&typeof n=="object",wd=n=>(mt(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),Rd=Object.prototype.toString,vo=n=>Rd.call(n),Km=n=>vo(n).slice(8,-1),Cd=n=>vo(n)==="[object Object]",au=n=>Rt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Wr=su(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Da=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Ym=/-(\w)/g,xi=Da(n=>n.replace(Ym,(e,t)=>t?t.toUpperCase():"")),Zm=/\B([A-Z])/g,qi=Da(n=>n.replace(Zm,"-$1").toLowerCase()),Pd=Da(n=>n.charAt(0).toUpperCase()+n.slice(1)),Qa=Da(n=>n?`on${Pd(n)}`:""),sn=(n,e)=>!Object.is(n,e),aa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ld=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},va=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ih;const Na=()=>ih||(ih=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xo(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Rt(i)?tg(i):xo(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Rt(n)||mt(n))return n}const Jm=/;(?![^(]*\))/g,Qm=/:([^]+)/,eg=/\/\*[^]*?\*\//g;function tg(n){const e={};return n.replace(eg,"").split(Jm).forEach(t=>{if(t){const i=t.split(Qm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function _s(n){let e="";if(Rt(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=_s(n[t]);i&&(e+=i+" ")}else if(mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ng="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ig=su(ng);function Id(n){return!!n||n===""}function sg(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=yo(n[i],e[i]);return t}function yo(n,e){if(n===e)return!0;let t=nh(n),i=nh(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Nn(n),i=Nn(e),t||i)return n===e;if(t=Be(n),i=Be(e),t||i)return t&&i?sg(n,e):!1;if(t=mt(n),i=mt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!yo(n[o],e[o]))return!1}}return String(n)===String(e)}function lu(n,e){return n.findIndex(t=>yo(t,e))}const Dd=n=>!!(n&&n.__v_isRef===!0),Pt=n=>Rt(n)?n:n==null?"":Be(n)||mt(n)&&(n.toString===Rd||!Xe(n.toString))?Dd(n)?Pt(n.value):JSON.stringify(n,Nd,2):String(n),Nd=(n,e)=>Dd(e)?Nd(n,e.value):Zs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[el(i,r)+" =>"]=s,t),{})}:yr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>el(t))}:Nn(e)?el(e):mt(e)&&!Be(e)&&!Cd(e)?String(e):e,el=(n,e="")=>{var t;return Nn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kt;class Ud{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Od(n){return new Ud(n)}function Fd(){return Kt}function rg(n,e=!1){Kt&&Kt.cleanups.push(n)}let vt;const tl=new WeakSet;class Bd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Kt&&Kt.active&&Kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,tl.has(this)&&(tl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Hd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,sh(this),Vd(this);const e=vt,t=In;vt=this,In=!0;try{return this.fn()}finally{zd(this),vt=e,In=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hu(e);this.deps=this.depsTail=void 0,sh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?tl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Jl(this)&&this.run()}get dirty(){return Jl(this)}}let kd=0,Xr,$r;function Hd(n,e=!1){if(n.flags|=8,e){n.next=$r,$r=n;return}n.next=Xr,Xr=n}function cu(){kd++}function uu(){if(--kd>0)return;if($r){let e=$r;for($r=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Xr;){let e=Xr;for(Xr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Vd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function zd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),hu(i),og(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Jl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Gd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Gd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===no))return;n.globalVersion=no;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Jl(n)){n.flags&=-3;return}const t=vt,i=In;vt=n,In=!0;try{Vd(n);const s=n.fn(n._value);(e.version===0||sn(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{vt=t,In=i,zd(n),n.flags&=-3}}function hu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)hu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function og(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let In=!0;const Wd=[];function Ki(){Wd.push(In),In=!1}function Yi(){const n=Wd.pop();In=n===void 0?!0:n}function sh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=vt;vt=void 0;try{e()}finally{vt=t}}}let no=0;class ag{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ua{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!vt||!In||vt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==vt)t=this.activeLink=new ag(vt,this),vt.deps?(t.prevDep=vt.depsTail,vt.depsTail.nextDep=t,vt.depsTail=t):vt.deps=vt.depsTail=t,Xd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=vt.depsTail,t.nextDep=void 0,vt.depsTail.nextDep=t,vt.depsTail=t,vt.deps===t&&(vt.deps=i)}return t}trigger(e){this.version++,no++,this.notify(e)}notify(e){cu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{uu()}}}function Xd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Xd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const xa=new WeakMap,vs=Symbol(""),Ql=Symbol(""),io=Symbol("");function Gt(n,e,t){if(In&&vt){let i=xa.get(n);i||xa.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Ua),s.map=i,s.key=t),s.track()}}function ui(n,e,t,i,s,r){const o=xa.get(n);if(!o){no++;return}const a=l=>{l&&l.trigger()};if(cu(),e==="clear")o.forEach(a);else{const l=Be(n),c=l&&au(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===io||!Nn(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(io)),e){case"add":l?c&&a(o.get("length")):(a(o.get(vs)),Zs(n)&&a(o.get(Ql)));break;case"delete":l||(a(o.get(vs)),Zs(n)&&a(o.get(Ql)));break;case"set":Zs(n)&&a(o.get(vs));break}}uu()}function lg(n,e){const t=xa.get(n);return t&&t.get(e)}function Rs(n){const e=tt(n);return e===n?e:(Gt(e,"iterate",io),yn(n)?e:e.map(Wt))}function Oa(n){return Gt(n=tt(n),"iterate",io),n}const cg={__proto__:null,[Symbol.iterator](){return nl(this,Symbol.iterator,Wt)},concat(...n){return Rs(this).concat(...n.map(e=>Be(e)?Rs(e):e))},entries(){return nl(this,"entries",n=>(n[1]=Wt(n[1]),n))},every(n,e){return Qn(this,"every",n,e,void 0,arguments)},filter(n,e){return Qn(this,"filter",n,e,t=>t.map(Wt),arguments)},find(n,e){return Qn(this,"find",n,e,Wt,arguments)},findIndex(n,e){return Qn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Qn(this,"findLast",n,e,Wt,arguments)},findLastIndex(n,e){return Qn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Qn(this,"forEach",n,e,void 0,arguments)},includes(...n){return il(this,"includes",n)},indexOf(...n){return il(this,"indexOf",n)},join(n){return Rs(this).join(n)},lastIndexOf(...n){return il(this,"lastIndexOf",n)},map(n,e){return Qn(this,"map",n,e,void 0,arguments)},pop(){return wr(this,"pop")},push(...n){return wr(this,"push",n)},reduce(n,...e){return rh(this,"reduce",n,e)},reduceRight(n,...e){return rh(this,"reduceRight",n,e)},shift(){return wr(this,"shift")},some(n,e){return Qn(this,"some",n,e,void 0,arguments)},splice(...n){return wr(this,"splice",n)},toReversed(){return Rs(this).toReversed()},toSorted(n){return Rs(this).toSorted(n)},toSpliced(...n){return Rs(this).toSpliced(...n)},unshift(...n){return wr(this,"unshift",n)},values(){return nl(this,"values",Wt)}};function nl(n,e,t){const i=Oa(n),s=i[e]();return i!==n&&!yn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const ug=Array.prototype;function Qn(n,e,t,i,s,r){const o=Oa(n),a=o!==n&&!yn(n),l=o[e];if(l!==ug[e]){const h=l.apply(n,r);return a?Wt(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,Wt(h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function rh(n,e,t,i){const s=Oa(n);let r=t;return s!==n&&(yn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Wt(a),l,n)}),s[e](r,...i)}function il(n,e,t){const i=tt(n);Gt(i,"iterate",io);const s=i[e](...t);return(s===-1||s===!1)&&pu(t[0])?(t[0]=tt(t[0]),i[e](...t)):s}function wr(n,e,t=[]){Ki(),cu();const i=tt(n)[e].apply(n,t);return uu(),Yi(),i}const hg=su("__proto__,__v_isRef,__isVue"),$d=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Nn));function fg(n){Nn(n)||(n=String(n));const e=tt(this);return Gt(e,"has",n),e.hasOwnProperty(n)}class jd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Sg:Zd:r?Yd:Kd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!s){let l;if(o&&(l=cg[t]))return l;if(t==="hasOwnProperty")return fg}const a=Reflect.get(e,t,Mt(e)?e:i);return(Nn(t)?$d.has(t):hg(t))||(s||Gt(e,"get",t),r)?a:Mt(a)?o&&au(t)?a:a.value:mt(a)?s?Qd(a):Zi(a):a}}class qd extends jd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=Ms(r);if(!yn(i)&&!Ms(i)&&(r=tt(r),i=tt(i)),!Be(e)&&Mt(r)&&!Mt(i))return l?!1:(r.value=i,!0)}const o=Be(e)&&au(t)?Number(t)<e.length:ct(e,t),a=Reflect.set(e,t,i,Mt(e)?e:s);return e===tt(s)&&(o?sn(i,r)&&ui(e,"set",t,i):ui(e,"add",t,i)),a}deleteProperty(e,t){const i=ct(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ui(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Nn(t)||!$d.has(t))&&Gt(e,"has",t),i}ownKeys(e){return Gt(e,"iterate",Be(e)?"length":vs),Reflect.ownKeys(e)}}class dg extends jd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const pg=new qd,mg=new dg,gg=new qd(!0);const ec=n=>n,Ro=n=>Reflect.getPrototypeOf(n);function _g(n,e,t){return function(...i){const s=this.__v_raw,r=tt(s),o=Zs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?ec:e?tc:Wt;return!e&&Gt(r,"iterate",l?Ql:vs),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Co(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function vg(n,e){const t={get(s){const r=this.__v_raw,o=tt(r),a=tt(s);n||(sn(s,a)&&Gt(o,"get",s),Gt(o,"get",a));const{has:l}=Ro(o),c=e?ec:n?tc:Wt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Gt(tt(s),"iterate",vs),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=tt(r),a=tt(s);return n||(sn(s,a)&&Gt(o,"has",s),Gt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=tt(a),c=e?ec:n?tc:Wt;return!n&&Gt(l,"iterate",vs),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return kt(t,n?{add:Co("add"),set:Co("set"),delete:Co("delete"),clear:Co("clear")}:{add(s){!e&&!yn(s)&&!Ms(s)&&(s=tt(s));const r=tt(this);return Ro(r).has.call(r,s)||(r.add(s),ui(r,"add",s,s)),this},set(s,r){!e&&!yn(r)&&!Ms(r)&&(r=tt(r));const o=tt(this),{has:a,get:l}=Ro(o);let c=a.call(o,s);c||(s=tt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?sn(r,u)&&ui(o,"set",s,r):ui(o,"add",s,r),this},delete(s){const r=tt(this),{has:o,get:a}=Ro(r);let l=o.call(r,s);l||(s=tt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ui(r,"delete",s,void 0),c},clear(){const s=tt(this),r=s.size!==0,o=s.clear();return r&&ui(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=_g(s,n,e)}),t}function fu(n,e){const t=vg(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ct(t,s)&&s in i?t:i,s,r)}const xg={get:fu(!1,!1)},yg={get:fu(!1,!0)},Mg={get:fu(!0,!1)};const Kd=new WeakMap,Yd=new WeakMap,Zd=new WeakMap,Sg=new WeakMap;function bg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Eg(n){return n.__v_skip||!Object.isExtensible(n)?0:bg(Km(n))}function Zi(n){return Ms(n)?n:du(n,!1,pg,xg,Kd)}function Jd(n){return du(n,!1,gg,yg,Yd)}function Qd(n){return du(n,!0,mg,Mg,Zd)}function du(n,e,t,i,s){if(!mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=Eg(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function mi(n){return Ms(n)?mi(n.__v_raw):!!(n&&n.__v_isReactive)}function Ms(n){return!!(n&&n.__v_isReadonly)}function yn(n){return!!(n&&n.__v_isShallow)}function pu(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function mu(n){return!ct(n,"__v_skip")&&Object.isExtensible(n)&&Ld(n,"__v_skip",!0),n}const Wt=n=>mt(n)?Zi(n):n,tc=n=>mt(n)?Qd(n):n;function Mt(n){return n?n.__v_isRef===!0:!1}function st(n){return ep(n,!1)}function Tg(n){return ep(n,!0)}function ep(n,e){return Mt(n)?n:new Ag(n,e)}class Ag{constructor(e,t){this.dep=new Ua,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:Wt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||yn(e)||Ms(e);e=i?e:tt(e),sn(e,t)&&(this._rawValue=e,this._value=i?e:Wt(e),this.dep.trigger())}}function we(n){return Mt(n)?n.value:n}const wg={get:(n,e,t)=>e==="__v_raw"?n:we(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Mt(s)&&!Mt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function tp(n){return mi(n)?n:new Proxy(n,wg)}class Rg{constructor(e){this.__v_isRef=!0,this._value=void 0;const t=this.dep=new Ua,{get:i,set:s}=e(t.track.bind(t),t.trigger.bind(t));this._get=i,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function Cg(n){return new Rg(n)}function Pg(n){const e=Be(n)?new Array(n.length):{};for(const t in n)e[t]=np(n,t);return e}class Lg{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return lg(tt(this._object),this._key)}}class Ig{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Dg(n,e,t){return Mt(n)?n:Xe(n)?new Ig(n):mt(n)&&arguments.length>1?np(n,e,t):st(n)}function np(n,e,t){const i=n[e];return Mt(i)?i:new Lg(n,e,t)}class Ng{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ua(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=no-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&vt!==this)return Hd(this,!0),!0}get value(){const e=this.dep.track();return Gd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ug(n,e,t=!1){let i,s;return Xe(n)?i=n:(i=n.get,s=n.set),new Ng(i,s,t)}const Po={},ya=new WeakMap;let cs;function Og(n,e=!1,t=cs){if(t){let i=ya.get(t);i||ya.set(t,i=[]),i.push(n)}}function Fg(n,e,t=it){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=M=>s?M:yn(M)||s===!1||s===0?hi(M,1):hi(M);let u,h,f,d,g=!1,_=!1;if(Mt(n)?(h=()=>n.value,g=yn(n)):mi(n)?(h=()=>c(n),g=!0):Be(n)?(_=!0,g=n.some(M=>mi(M)||yn(M)),h=()=>n.map(M=>{if(Mt(M))return M.value;if(mi(M))return c(M);if(Xe(M))return l?l(M,2):M()})):Xe(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){Ki();try{f()}finally{Yi()}}const M=cs;cs=u;try{return l?l(n,3,[d]):n(d)}finally{cs=M}}:h=Wn,e&&s){const M=h,O=s===!0?1/0:s;h=()=>hi(M(),O)}const m=Fd(),p=()=>{u.stop(),m&&m.active&&ou(m.effects,u)};if(r&&e){const M=e;e=(...O)=>{M(...O),p()}}let E=_?new Array(n.length).fill(Po):Po;const T=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const O=u.run();if(s||g||(_?O.some((D,I)=>sn(D,E[I])):sn(O,E))){f&&f();const D=cs;cs=u;try{const I=[O,E===Po?void 0:_&&E[0]===Po?[]:E,d];l?l(e,3,I):e(...I),E=O}finally{cs=D}}}else u.run()};return a&&a(T),u=new Bd(h),u.scheduler=o?()=>o(T,!1):T,d=M=>Og(M,!1,u),f=u.onStop=()=>{const M=ya.get(u);if(M){if(l)l(M,4);else for(const O of M)O();ya.delete(u)}},e?i?T(!0):E=u.run():o?o(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function hi(n,e=1/0,t){if(e<=0||!mt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Mt(n))hi(n.value,e,t);else if(Be(n))for(let i=0;i<n.length;i++)hi(n[i],e,t);else if(yr(n)||Zs(n))n.forEach(i=>{hi(i,e,t)});else if(Cd(n)){for(const i in n)hi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&hi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mo(n,e,t,i){try{return i?n(...i):n()}catch(s){Fa(s,e,t)}}function $n(n,e,t,i){if(Xe(n)){const s=Mo(n,e,t,i);return s&&wd(s)&&s.catch(r=>{Fa(r,e,t)}),s}if(Be(n)){const s=[];for(let r=0;r<n.length;r++)s.push($n(n[r],e,t,i));return s}}function Fa(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||it;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){Ki(),Mo(r,null,10,[n,l,c]),Yi();return}}Bg(n,t,s,i,o)}function Bg(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Yt=[];let Hn=-1;const Js=[];let Ni=null,js=0;const ip=Promise.resolve();let Ma=null;function So(n){const e=Ma||ip;return n?e.then(this?n.bind(this):n):e}function kg(n){let e=Hn+1,t=Yt.length;for(;e<t;){const i=e+t>>>1,s=Yt[i],r=so(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function gu(n){if(!(n.flags&1)){const e=so(n),t=Yt[Yt.length-1];!t||!(n.flags&2)&&e>=so(t)?Yt.push(n):Yt.splice(kg(e),0,n),n.flags|=1,sp()}}function sp(){Ma||(Ma=ip.then(op))}function Hg(n){Be(n)?Js.push(...n):Ni&&n.id===-1?Ni.splice(js+1,0,n):n.flags&1||(Js.push(n),n.flags|=1),sp()}function oh(n,e,t=Hn+1){for(;t<Yt.length;t++){const i=Yt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Yt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function rp(n){if(Js.length){const e=[...new Set(Js)].sort((t,i)=>so(t)-so(i));if(Js.length=0,Ni){Ni.push(...e);return}for(Ni=e,js=0;js<Ni.length;js++){const t=Ni[js];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ni=null,js=0}}const so=n=>n.id==null?n.flags&2?-1:1/0:n.id;function op(n){try{for(Hn=0;Hn<Yt.length;Hn++){const e=Yt[Hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Mo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Hn<Yt.length;Hn++){const e=Yt[Hn];e&&(e.flags&=-2)}Hn=-1,Yt.length=0,rp(),Ma=null,(Yt.length||Js.length)&&op()}}let Nt=null,ap=null;function Sa(n){const e=Nt;return Nt=n,ap=n&&n.type.__scopeId||null,e}function ro(n,e=Nt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&mh(-1);const r=Sa(e);let o;try{o=n(...s)}finally{Sa(r),i._d&&mh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function un(n,e){if(Nt===null)return n;const t=Va(Nt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=it]=e[s];r&&(Xe(r)&&(r={mounted:r,updated:r}),r.deep&&hi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function es(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ki(),$n(l,t,8,[n.el,a,n,e]),Yi())}}const Vg=Symbol("_vte"),zg=n=>n.__isTeleport;function _u(n,e){n.shapeFlag&6&&n.component?(n.transition=e,_u(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function pn(n,e){return Xe(n)?kt({name:n.name},e,{setup:n}):n}function lp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ba(n,e,t,i,s=!1){if(Be(n)){n.forEach((g,_)=>ba(g,e&&(Be(e)?e[_]:e),t,i,s));return}if(Qs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ba(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Va(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===it?a.refs={}:a.refs,h=a.setupState,f=tt(h),d=h===it?()=>!1:g=>ct(f,g);if(c!=null&&c!==l&&(Rt(c)?(u[c]=null,d(c)&&(h[c]=null)):Mt(c)&&(c.value=null)),Xe(l))Mo(l,a,12,[o,u]);else{const g=Rt(l),_=Mt(l);if(g||_){const m=()=>{if(n.f){const p=g?d(l)?h[l]:u[l]:l.value;s?Be(p)&&ou(p,r):Be(p)?p.includes(r)||p.push(r):g?(u[l]=[r],d(l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,d(l)&&(h[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,cn(m,t)):m()}}}Na().requestIdleCallback;Na().cancelIdleCallback;const Qs=n=>!!n.type.__asyncLoader,cp=n=>n.type.__isKeepAlive;function Gg(n,e){up(n,"a",e)}function Wg(n,e){up(n,"da",e)}function up(n,e,t=Ft){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ba(e,i,t),t){let s=t.parent;for(;s&&s.parent;)cp(s.parent.vnode)&&Xg(i,e,t,s),s=s.parent}}function Xg(n,e,t,i){const s=Ba(e,n,i,!0);hp(()=>{ou(i[e],s)},t)}function Ba(n,e,t=Ft,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Ki();const a=bo(t),l=$n(e,t,n,o);return a(),Yi(),l});return i?s.unshift(r):s.push(r),r}}const Si=n=>(e,t=Ft)=>{(!co||n==="sp")&&Ba(n,(...i)=>e(...i),t)},$g=Si("bm"),gi=Si("m"),jg=Si("bu"),qg=Si("u"),Kg=Si("bum"),hp=Si("um"),Yg=Si("sp"),Zg=Si("rtg"),Jg=Si("rtc");function Qg(n,e=Ft){Ba("ec",n,e)}const e_=Symbol.for("v-ndc");function Gi(n,e,t,i){let s;const r=t,o=Be(n);if(o||Rt(n)){const a=o&&mi(n);let l=!1;a&&(l=!yn(n),n=Oa(n)),s=new Array(n.length);for(let c=0,u=n.length;c<u;c++)s[c]=e(l?Wt(n[c]):n[c],c,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(mt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function ah(n,e,t={},i,s){if(Nt.ce||Nt.parent&&Qs(Nt.parent)&&Nt.parent.ce)return e!=="default"&&(t.name=e),Ne(),ao(dt,null,[Bt("slot",t,i)],64);let r=n[e];r&&r._c&&(r._d=!1),Ne();const o=r&&fp(r(t)),a=t.key||o&&o.key,l=ao(dt,{key:(a&&!Nn(a)?a:`_${e}`)+""},o||[],o&&n._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function fp(n){return n.some(e=>lo(e)?!(e.type===$i||e.type===dt&&!fp(e.children)):!0)?n:null}const nc=n=>n?Dp(n)?Va(n):nc(n.parent):null,jr=kt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>nc(n.parent),$root:n=>nc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>pp(n),$forceUpdate:n=>n.f||(n.f=()=>{gu(n.update)}),$nextTick:n=>n.n||(n.n=So.bind(n.proxy)),$watch:n=>E_.bind(n)}),sl=(n,e)=>n!==it&&!n.__isScriptSetup&&ct(n,e),t_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(sl(i,e))return o[e]=1,i[e];if(s!==it&&ct(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&ct(c,e))return o[e]=3,r[e];if(t!==it&&ct(t,e))return o[e]=4,t[e];ic&&(o[e]=0)}}const u=jr[e];let h,f;if(u)return e==="$attrs"&&Gt(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==it&&ct(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,ct(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return sl(s,e)?(s[e]=t,!0):i!==it&&ct(i,e)?(i[e]=t,!0):ct(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==it&&ct(n,o)||sl(e,o)||(a=r[0])&&ct(a,o)||ct(i,o)||ct(jr,o)||ct(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ct(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ea(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}function n_(n,e){return!n||!e?n:Be(n)&&Be(e)?n.concat(e):kt({},Ea(n),Ea(e))}let ic=!0;function i_(n){const e=pp(n),t=n.proxy,i=n.ctx;ic=!1,e.beforeCreate&&lh(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:E,destroyed:T,unmounted:M,render:O,renderTracked:D,renderTriggered:I,errorCaptured:R,serverPrefetch:x,expose:v,inheritAttrs:C,components:B,directives:z,filters:ne}=e;if(c&&s_(c,i,null),o)for(const ee in o){const G=o[ee];Xe(G)&&(i[ee]=G.bind(t))}if(s){const ee=s.call(t,t);mt(ee)&&(n.data=Zi(ee))}if(ic=!0,r)for(const ee in r){const G=r[ee],oe=Xe(G)?G.bind(t,t):Xe(G.get)?G.get.bind(t,t):Wn,ce=!Xe(G)&&Xe(G.set)?G.set.bind(t):Wn,le=St({get:oe,set:ce});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>le.value,set:Ce=>le.value=Ce})}if(a)for(const ee in a)dp(a[ee],i,t,ee);if(l){const ee=Xe(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(G=>{la(G,ee[G])})}u&&lh(u,n,"c");function X(ee,G){Be(G)?G.forEach(oe=>ee(oe.bind(t))):G&&ee(G.bind(t))}if(X($g,h),X(gi,f),X(jg,d),X(qg,g),X(Gg,_),X(Wg,m),X(Qg,R),X(Jg,D),X(Zg,I),X(Kg,E),X(hp,M),X(Yg,x),Be(v))if(v.length){const ee=n.exposed||(n.exposed={});v.forEach(G=>{Object.defineProperty(ee,G,{get:()=>t[G],set:oe=>t[G]=oe})})}else n.exposed||(n.exposed={});O&&n.render===Wn&&(n.render=O),C!=null&&(n.inheritAttrs=C),B&&(n.components=B),z&&(n.directives=z),x&&lp(n)}function s_(n,e,t=Wn){Be(n)&&(n=sc(n));for(const i in n){const s=n[i];let r;mt(s)?"default"in s?r=Mn(s.from||i,s.default,!0):r=Mn(s.from||i):r=Mn(s),Mt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function lh(n,e,t){$n(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function dp(n,e,t,i){let s=i.includes(".")?wp(t,i):()=>t[i];if(Rt(n)){const r=e[n];Xe(r)&&ys(s,r)}else if(Xe(n))ys(s,n.bind(t));else if(mt(n))if(Be(n))n.forEach(r=>dp(r,e,t,i));else{const r=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(r)&&ys(s,r,n)}}function pp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Ta(l,c,o,!0)),Ta(l,e,o)),mt(e)&&r.set(e,l),l}function Ta(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Ta(n,r,t,!0),s&&s.forEach(o=>Ta(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=r_[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const r_={data:ch,props:uh,emits:uh,methods:kr,computed:kr,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:kr,directives:kr,watch:a_,provide:ch,inject:o_};function ch(n,e){return e?n?function(){return kt(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function o_(n,e){return kr(sc(n),sc(e))}function sc(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function jt(n,e){return n?[...new Set([].concat(n,e))]:e}function kr(n,e){return n?kt(Object.create(null),n,e):e}function uh(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:kt(Object.create(null),Ea(n),Ea(e??{})):e}function a_(n,e){if(!n)return e;if(!e)return n;const t=kt(Object.create(null),n);for(const i in e)t[i]=jt(n[i],e[i]);return t}function mp(){return{app:null,config:{isNativeTag:jm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let l_=0;function c_(n,e){return function(i,s=null){Xe(i)||(i=kt({},i)),s!=null&&!mt(s)&&(s=null);const r=mp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:l_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:X_,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Xe(u.install)?(o.add(u),u.install(c,...h)):Xe(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||Bt(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Va(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&($n(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=xs;xs=c;try{return u()}finally{xs=h}}};return c}}let xs=null;function la(n,e){if(Ft){let t=Ft.provides;const i=Ft.parent&&Ft.parent.provides;i===t&&(t=Ft.provides=Object.create(i)),t[n]=e}}function Mn(n,e,t=!1){const i=Ft||Nt;if(i||xs){const s=xs?xs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}function u_(){return!!(Ft||Nt||xs)}const gp={},_p=()=>Object.create(gp),vp=n=>Object.getPrototypeOf(n)===gp;function h_(n,e,t,i=!1){const s={},r=_p();n.propsDefaults=Object.create(null),xp(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Jd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function f_(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=tt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ka(n.emitsOptions,f))continue;const d=e[f];if(l)if(ct(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=xi(f);s[g]=rc(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{xp(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!ct(e,h)&&((u=qi(h))===h||!ct(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=rc(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!ct(e,h))&&(delete r[h],c=!0)}c&&ui(n.attrs,"set","")}function xp(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Wr(l))continue;const c=e[l];let u;s&&ct(s,u=xi(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ka(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=tt(t),c=a||it;for(let u=0;u<r.length;u++){const h=r[u];t[h]=rc(s,l,h,c[h],n,!ct(c,h))}}return o}function rc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=ct(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=bo(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===qi(t))&&(i=!0))}return i}const d_=new WeakMap;function yp(n,e,t=!1){const i=t?d_:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Xe(n)){const u=h=>{l=!0;const[f,d]=yp(h,e,!0);kt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return mt(n)&&i.set(n,Ys),Ys;if(Be(r))for(let u=0;u<r.length;u++){const h=xi(r[u]);hh(h)&&(o[h]=it)}else if(r)for(const u in r){const h=xi(u);if(hh(h)){const f=r[u],d=o[h]=Be(f)||Xe(f)?{type:f}:kt({},f),g=d.type;let _=!1,m=!0;if(Be(g))for(let p=0;p<g.length;++p){const E=g[p],T=Xe(E)&&E.name;if(T==="Boolean"){_=!0;break}else T==="String"&&(m=!1)}else _=Xe(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||ct(d,"default"))&&a.push(h)}}const c=[o,a];return mt(n)&&i.set(n,c),c}function hh(n){return n[0]!=="$"&&!Wr(n)}const Mp=n=>n[0]==="_"||n==="$stable",vu=n=>Be(n)?n.map(Vn):[Vn(n)],p_=(n,e,t)=>{if(e._n)return e;const i=ro((...s)=>vu(e(...s)),t);return i._c=!1,i},Sp=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Mp(s))continue;const r=n[s];if(Xe(r))e[s]=p_(s,r,i);else if(r!=null){const o=vu(r);e[s]=()=>o}}},bp=(n,e)=>{const t=vu(e);n.slots.default=()=>t},Ep=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},m_=(n,e,t)=>{const i=n.slots=_p();if(n.vnode.shapeFlag&32){const s=e._;s?(Ep(i,e,t),t&&Ld(i,"_",s,!0)):Sp(e,i)}else e&&bp(n,e)},g_=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=it;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Ep(s,e,t):(r=!e.$stable,Sp(e,s)),o=e}else e&&(bp(n,e),o={default:1});if(r)for(const a in s)!Mp(a)&&o[a]==null&&delete s[a]},cn=L_;function __(n){return v_(n)}function v_(n,e){const t=Na();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Wn,insertStaticContent:g}=n,_=(w,P,b,te=null,q=null,W=null,ie=void 0,he=null,Q=!!P.dynamicChildren)=>{if(w===P)return;w&&!Rr(w,P)&&(te=N(w),Ce(w,q,W,!0),w=null),P.patchFlag===-2&&(Q=!1,P.dynamicChildren=null);const{type:S,ref:y,shapeFlag:L}=P;switch(S){case Ha:m(w,P,b,te);break;case $i:p(w,P,b,te);break;case ol:w==null&&E(P,b,te,ie);break;case dt:B(w,P,b,te,q,W,ie,he,Q);break;default:L&1?O(w,P,b,te,q,W,ie,he,Q):L&6?z(w,P,b,te,q,W,ie,he,Q):(L&64||L&128)&&S.process(w,P,b,te,q,W,ie,he,Q,me)}y!=null&&q&&ba(y,w&&w.ref,W,P||w,!P)},m=(w,P,b,te)=>{if(w==null)i(P.el=a(P.children),b,te);else{const q=P.el=w.el;P.children!==w.children&&c(q,P.children)}},p=(w,P,b,te)=>{w==null?i(P.el=l(P.children||""),b,te):P.el=w.el},E=(w,P,b,te)=>{[w.el,w.anchor]=g(w.children,P,b,te,w.el,w.anchor)},T=({el:w,anchor:P},b,te)=>{let q;for(;w&&w!==P;)q=f(w),i(w,b,te),w=q;i(P,b,te)},M=({el:w,anchor:P})=>{let b;for(;w&&w!==P;)b=f(w),s(w),w=b;s(P)},O=(w,P,b,te,q,W,ie,he,Q)=>{P.type==="svg"?ie="svg":P.type==="math"&&(ie="mathml"),w==null?D(P,b,te,q,W,ie,he,Q):x(w,P,q,W,ie,he,Q)},D=(w,P,b,te,q,W,ie,he)=>{let Q,S;const{props:y,shapeFlag:L,transition:U,dirs:j}=w;if(Q=w.el=o(w.type,W,y&&y.is,y),L&8?u(Q,w.children):L&16&&R(w.children,Q,null,te,q,rl(w,W),ie,he),j&&es(w,null,te,"created"),I(Q,w,w.scopeId,ie,te),y){for(const xe in y)xe!=="value"&&!Wr(xe)&&r(Q,xe,null,y[xe],W,te);"value"in y&&r(Q,"value",null,y.value,W),(S=y.onVnodeBeforeMount)&&kn(S,te,w)}j&&es(w,null,te,"beforeMount");const $=x_(q,U);$&&U.beforeEnter(Q),i(Q,P,b),((S=y&&y.onVnodeMounted)||$||j)&&cn(()=>{S&&kn(S,te,w),$&&U.enter(Q),j&&es(w,null,te,"mounted")},q)},I=(w,P,b,te,q)=>{if(b&&d(w,b),te)for(let W=0;W<te.length;W++)d(w,te[W]);if(q){let W=q.subTree;if(P===W||Pp(W.type)&&(W.ssContent===P||W.ssFallback===P)){const ie=q.vnode;I(w,ie,ie.scopeId,ie.slotScopeIds,q.parent)}}},R=(w,P,b,te,q,W,ie,he,Q=0)=>{for(let S=Q;S<w.length;S++){const y=w[S]=he?Ui(w[S]):Vn(w[S]);_(null,y,P,b,te,q,W,ie,he)}},x=(w,P,b,te,q,W,ie)=>{const he=P.el=w.el;let{patchFlag:Q,dynamicChildren:S,dirs:y}=P;Q|=w.patchFlag&16;const L=w.props||it,U=P.props||it;let j;if(b&&ts(b,!1),(j=U.onVnodeBeforeUpdate)&&kn(j,b,P,w),y&&es(P,w,b,"beforeUpdate"),b&&ts(b,!0),(L.innerHTML&&U.innerHTML==null||L.textContent&&U.textContent==null)&&u(he,""),S?v(w.dynamicChildren,S,he,b,te,rl(P,q),W):ie||G(w,P,he,null,b,te,rl(P,q),W,!1),Q>0){if(Q&16)C(he,L,U,b,q);else if(Q&2&&L.class!==U.class&&r(he,"class",null,U.class,q),Q&4&&r(he,"style",L.style,U.style,q),Q&8){const $=P.dynamicProps;for(let xe=0;xe<$.length;xe++){const de=$[xe],ye=L[de],He=U[de];(He!==ye||de==="value")&&r(he,de,ye,He,q,b)}}Q&1&&w.children!==P.children&&u(he,P.children)}else!ie&&S==null&&C(he,L,U,b,q);((j=U.onVnodeUpdated)||y)&&cn(()=>{j&&kn(j,b,P,w),y&&es(P,w,b,"updated")},te)},v=(w,P,b,te,q,W,ie)=>{for(let he=0;he<P.length;he++){const Q=w[he],S=P[he],y=Q.el&&(Q.type===dt||!Rr(Q,S)||Q.shapeFlag&70)?h(Q.el):b;_(Q,S,y,null,te,q,W,ie,!0)}},C=(w,P,b,te,q)=>{if(P!==b){if(P!==it)for(const W in P)!Wr(W)&&!(W in b)&&r(w,W,P[W],null,q,te);for(const W in b){if(Wr(W))continue;const ie=b[W],he=P[W];ie!==he&&W!=="value"&&r(w,W,he,ie,q,te)}"value"in b&&r(w,"value",P.value,b.value,q)}},B=(w,P,b,te,q,W,ie,he,Q)=>{const S=P.el=w?w.el:a(""),y=P.anchor=w?w.anchor:a("");let{patchFlag:L,dynamicChildren:U,slotScopeIds:j}=P;j&&(he=he?he.concat(j):j),w==null?(i(S,b,te),i(y,b,te),R(P.children||[],b,y,q,W,ie,he,Q)):L>0&&L&64&&U&&w.dynamicChildren?(v(w.dynamicChildren,U,b,q,W,ie,he),(P.key!=null||q&&P===q.subTree)&&Tp(w,P,!0)):G(w,P,b,y,q,W,ie,he,Q)},z=(w,P,b,te,q,W,ie,he,Q)=>{P.slotScopeIds=he,w==null?P.shapeFlag&512?q.ctx.activate(P,b,te,ie,Q):ne(P,b,te,q,W,ie,Q):ue(w,P,Q)},ne=(w,P,b,te,q,W,ie)=>{const he=w.component=B_(w,te,q);if(cp(w)&&(he.ctx.renderer=me),H_(he,!1,ie),he.asyncDep){if(q&&q.registerDep(he,X,ie),!w.el){const Q=he.subTree=Bt($i);p(null,Q,P,b)}}else X(he,w,P,b,q,W,ie)},ue=(w,P,b)=>{const te=P.component=w.component;if(C_(w,P,b))if(te.asyncDep&&!te.asyncResolved){ee(te,P,b);return}else te.next=P,te.update();else P.el=w.el,te.vnode=P},X=(w,P,b,te,q,W,ie)=>{const he=()=>{if(w.isMounted){let{next:L,bu:U,u:j,parent:$,vnode:xe}=w;{const be=Ap(w);if(be){L&&(L.el=xe.el,ee(w,L,ie)),be.asyncDep.then(()=>{w.isUnmounted||he()});return}}let de=L,ye;ts(w,!1),L?(L.el=xe.el,ee(w,L,ie)):L=xe,U&&aa(U),(ye=L.props&&L.props.onVnodeBeforeUpdate)&&kn(ye,$,L,xe),ts(w,!0);const He=dh(w),ge=w.subTree;w.subTree=He,_(ge,He,h(ge.el),N(ge),w,q,W),L.el=He.el,de===null&&P_(w,He.el),j&&cn(j,q),(ye=L.props&&L.props.onVnodeUpdated)&&cn(()=>kn(ye,$,L,xe),q)}else{let L;const{el:U,props:j}=P,{bm:$,m:xe,parent:de,root:ye,type:He}=w,ge=Qs(P);ts(w,!1),$&&aa($),!ge&&(L=j&&j.onVnodeBeforeMount)&&kn(L,de,P),ts(w,!0);{ye.ce&&ye.ce._injectChildStyle(He);const be=w.subTree=dh(w);_(null,be,b,te,w,q,W),P.el=be.el}if(xe&&cn(xe,q),!ge&&(L=j&&j.onVnodeMounted)){const be=P;cn(()=>kn(L,de,be),q)}(P.shapeFlag&256||de&&Qs(de.vnode)&&de.vnode.shapeFlag&256)&&w.a&&cn(w.a,q),w.isMounted=!0,P=b=te=null}};w.scope.on();const Q=w.effect=new Bd(he);w.scope.off();const S=w.update=Q.run.bind(Q),y=w.job=Q.runIfDirty.bind(Q);y.i=w,y.id=w.uid,Q.scheduler=()=>gu(y),ts(w,!0),S()},ee=(w,P,b)=>{P.component=w;const te=w.vnode.props;w.vnode=P,w.next=null,f_(w,P.props,te,b),g_(w,P.children,b),Ki(),oh(w),Yi()},G=(w,P,b,te,q,W,ie,he,Q=!1)=>{const S=w&&w.children,y=w?w.shapeFlag:0,L=P.children,{patchFlag:U,shapeFlag:j}=P;if(U>0){if(U&128){ce(S,L,b,te,q,W,ie,he,Q);return}else if(U&256){oe(S,L,b,te,q,W,ie,he,Q);return}}j&8?(y&16&&_e(S,q,W),L!==S&&u(b,L)):y&16?j&16?ce(S,L,b,te,q,W,ie,he,Q):_e(S,q,W,!0):(y&8&&u(b,""),j&16&&R(L,b,te,q,W,ie,he,Q))},oe=(w,P,b,te,q,W,ie,he,Q)=>{w=w||Ys,P=P||Ys;const S=w.length,y=P.length,L=Math.min(S,y);let U;for(U=0;U<L;U++){const j=P[U]=Q?Ui(P[U]):Vn(P[U]);_(w[U],j,b,null,q,W,ie,he,Q)}S>y?_e(w,q,W,!0,!1,L):R(P,b,te,q,W,ie,he,Q,L)},ce=(w,P,b,te,q,W,ie,he,Q)=>{let S=0;const y=P.length;let L=w.length-1,U=y-1;for(;S<=L&&S<=U;){const j=w[S],$=P[S]=Q?Ui(P[S]):Vn(P[S]);if(Rr(j,$))_(j,$,b,null,q,W,ie,he,Q);else break;S++}for(;S<=L&&S<=U;){const j=w[L],$=P[U]=Q?Ui(P[U]):Vn(P[U]);if(Rr(j,$))_(j,$,b,null,q,W,ie,he,Q);else break;L--,U--}if(S>L){if(S<=U){const j=U+1,$=j<y?P[j].el:te;for(;S<=U;)_(null,P[S]=Q?Ui(P[S]):Vn(P[S]),b,$,q,W,ie,he,Q),S++}}else if(S>U)for(;S<=L;)Ce(w[S],q,W,!0),S++;else{const j=S,$=S,xe=new Map;for(S=$;S<=U;S++){const Me=P[S]=Q?Ui(P[S]):Vn(P[S]);Me.key!=null&&xe.set(Me.key,S)}let de,ye=0;const He=U-$+1;let ge=!1,be=0;const Fe=new Array(He);for(S=0;S<He;S++)Fe[S]=0;for(S=j;S<=L;S++){const Me=w[S];if(ye>=He){Ce(Me,q,W,!0);continue}let ze;if(Me.key!=null)ze=xe.get(Me.key);else for(de=$;de<=U;de++)if(Fe[de-$]===0&&Rr(Me,P[de])){ze=de;break}ze===void 0?Ce(Me,q,W,!0):(Fe[ze-$]=S+1,ze>=be?be=ze:ge=!0,_(Me,P[ze],b,null,q,W,ie,he,Q),ye++)}const Ve=ge?y_(Fe):Ys;for(de=Ve.length-1,S=He-1;S>=0;S--){const Me=$+S,ze=P[Me],We=Me+1<y?P[Me+1].el:te;Fe[S]===0?_(null,ze,b,We,q,W,ie,he,Q):ge&&(de<0||S!==Ve[de]?le(ze,b,We,2):de--)}}},le=(w,P,b,te,q=null)=>{const{el:W,type:ie,transition:he,children:Q,shapeFlag:S}=w;if(S&6){le(w.component.subTree,P,b,te);return}if(S&128){w.suspense.move(P,b,te);return}if(S&64){ie.move(w,P,b,me);return}if(ie===dt){i(W,P,b);for(let L=0;L<Q.length;L++)le(Q[L],P,b,te);i(w.anchor,P,b);return}if(ie===ol){T(w,P,b);return}if(te!==2&&S&1&&he)if(te===0)he.beforeEnter(W),i(W,P,b),cn(()=>he.enter(W),q);else{const{leave:L,delayLeave:U,afterLeave:j}=he,$=()=>i(W,P,b),xe=()=>{L(W,()=>{$(),j&&j()})};U?U(W,$,xe):xe()}else i(W,P,b)},Ce=(w,P,b,te=!1,q=!1)=>{const{type:W,props:ie,ref:he,children:Q,dynamicChildren:S,shapeFlag:y,patchFlag:L,dirs:U,cacheIndex:j}=w;if(L===-2&&(q=!1),he!=null&&ba(he,null,b,w,!0),j!=null&&(P.renderCache[j]=void 0),y&256){P.ctx.deactivate(w);return}const $=y&1&&U,xe=!Qs(w);let de;if(xe&&(de=ie&&ie.onVnodeBeforeUnmount)&&kn(de,P,w),y&6)pe(w.component,b,te);else{if(y&128){w.suspense.unmount(b,te);return}$&&es(w,null,P,"beforeUnmount"),y&64?w.type.remove(w,P,b,me,te):S&&!S.hasOnce&&(W!==dt||L>0&&L&64)?_e(S,P,b,!1,!0):(W===dt&&L&384||!q&&y&16)&&_e(Q,P,b),te&&Pe(w)}(xe&&(de=ie&&ie.onVnodeUnmounted)||$)&&cn(()=>{de&&kn(de,P,w),$&&es(w,null,P,"unmounted")},b)},Pe=w=>{const{type:P,el:b,anchor:te,transition:q}=w;if(P===dt){J(b,te);return}if(P===ol){M(w);return}const W=()=>{s(b),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(w.shapeFlag&1&&q&&!q.persisted){const{leave:ie,delayLeave:he}=q,Q=()=>ie(b,W);he?he(w.el,W,Q):Q()}else W()},J=(w,P)=>{let b;for(;w!==P;)b=f(w),s(w),w=b;s(P)},pe=(w,P,b)=>{const{bum:te,scope:q,job:W,subTree:ie,um:he,m:Q,a:S}=w;fh(Q),fh(S),te&&aa(te),q.stop(),W&&(W.flags|=8,Ce(ie,w,P,b)),he&&cn(he,P),cn(()=>{w.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},_e=(w,P,b,te=!1,q=!1,W=0)=>{for(let ie=W;ie<w.length;ie++)Ce(w[ie],P,b,te,q)},N=w=>{if(w.shapeFlag&6)return N(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const P=f(w.anchor||w.el),b=P&&P[Vg];return b?f(b):P};let ae=!1;const Z=(w,P,b)=>{w==null?P._vnode&&Ce(P._vnode,null,null,!0):_(P._vnode||null,w,P,null,null,null,b),P._vnode=w,ae||(ae=!0,oh(),rp(),ae=!1)},me={p:_,um:Ce,m:le,r:Pe,mt:ne,mc:R,pc:G,pbc:v,n:N,o:n};return{render:Z,hydrate:void 0,createApp:c_(Z)}}function rl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ts({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function x_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Tp(n,e,t=!1){const i=n.children,s=e.children;if(Be(i)&&Be(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ui(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Tp(o,a)),a.type===Ha&&(a.el=o.el)}}function y_(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Ap(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ap(e)}function fh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const M_=Symbol.for("v-scx"),S_=()=>Mn(M_);function b_(n,e){return xu(n,null,{flush:"sync"})}function ys(n,e,t){return xu(n,e,t)}function xu(n,e,t=it){const{immediate:i,deep:s,flush:r,once:o}=t,a=kt({},t),l=e&&i||!e&&r!=="post";let c;if(co){if(r==="sync"){const d=S_();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Wn,d.resume=Wn,d.pause=Wn,d}}const u=Ft;a.call=(d,g,_)=>$n(d,u,g,_);let h=!1;r==="post"?a.scheduler=d=>{cn(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():gu(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=Fg(n,e,a);return co&&(c?c.push(f):l&&f()),f}function E_(n,e,t){const i=this.proxy,s=Rt(n)?n.includes(".")?wp(i,n):()=>i[n]:n.bind(i,i);let r;Xe(e)?r=e:(r=e.handler,t=e);const o=bo(this),a=xu(s,r.bind(i),t);return o(),a}function wp(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function T_(n,e,t=it){const i=k_(),s=xi(e),r=qi(e),o=Rp(n,s),a=Cg((l,c)=>{let u,h=it,f;return b_(()=>{const d=n[s];sn(u,d)&&(u=d,c())}),{get(){return l(),t.get?t.get(u):u},set(d){const g=t.set?t.set(d):d;if(!sn(g,u)&&!(h!==it&&sn(d,h)))return;const _=i.vnode.props;_&&(e in _||s in _||r in _)&&(`onUpdate:${e}`in _||`onUpdate:${s}`in _||`onUpdate:${r}`in _)||(u=d,c()),i.emit(`update:${e}`,g),sn(d,g)&&sn(d,h)&&!sn(g,f)&&c(),h=d,f=g}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||it:a,done:!1}:{done:!0}}}},a}const Rp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${xi(e)}Modifiers`]||n[`${qi(e)}Modifiers`];function A_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||it;let s=t;const r=e.startsWith("update:"),o=r&&Rp(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Rt(u)?u.trim():u)),o.number&&(s=t.map(va)));let a,l=i[a=Qa(e)]||i[a=Qa(xi(e))];!l&&r&&(l=i[a=Qa(qi(e))]),l&&$n(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,$n(c,n,6,s)}}function Cp(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Xe(n)){const l=c=>{const u=Cp(c,e,!0);u&&(a=!0,kt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(mt(n)&&i.set(n,null),null):(Be(r)?r.forEach(l=>o[l]=null):kt(o,r),mt(n)&&i.set(n,o),o)}function ka(n,e){return!n||!Ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),ct(n,e[0].toLowerCase()+e.slice(1))||ct(n,qi(e))||ct(n,e))}function dh(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=n,m=Sa(n);let p,E;try{if(t.shapeFlag&4){const M=s||i,O=M;p=Vn(c.call(O,M,u,h,d,f,g)),E=a}else{const M=e;p=Vn(M.length>1?M(h,{attrs:a,slots:o,emit:l}):M(h,null)),E=e.props?a:w_(a)}}catch(M){qr.length=0,Fa(M,n,1),p=Bt($i)}let T=p;if(E&&_!==!1){const M=Object.keys(E),{shapeFlag:O}=T;M.length&&O&7&&(r&&M.some(ru)&&(E=R_(E,r)),T=rr(T,E,!1,!0))}return t.dirs&&(T=rr(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&_u(T,t.transition),p=T,Sa(m),p}const w_=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ia(t))&&((e||(e={}))[t]=n[t]);return e},R_=(n,e)=>{const t={};for(const i in n)(!ru(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function C_(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?ph(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!ka(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ph(i,o,c):!0:!!o;return!1}function ph(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!ka(t,r))return!0}return!1}function P_({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Pp=n=>n.__isSuspense;function L_(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):Hg(n)}const dt=Symbol.for("v-fgt"),Ha=Symbol.for("v-txt"),$i=Symbol.for("v-cmt"),ol=Symbol.for("v-stc"),qr=[];let hn=null;function Ne(n=!1){qr.push(hn=n?null:[])}function I_(){qr.pop(),hn=qr[qr.length-1]||null}let oo=1;function mh(n,e=!1){oo+=n,n<0&&hn&&e&&(hn.hasOnce=!0)}function Lp(n){return n.dynamicChildren=oo>0?hn||Ys:null,I_(),oo>0&&hn&&hn.push(n),n}function ke(n,e,t,i,s,r){return Lp(re(n,e,t,i,s,r,!0))}function ao(n,e,t,i,s){return Lp(Bt(n,e,t,i,s,!0))}function lo(n){return n?n.__v_isVNode===!0:!1}function Rr(n,e){return n.type===e.type&&n.key===e.key}const Ip=({key:n})=>n??null,ca=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Rt(n)||Mt(n)||Xe(n)?{i:Nt,r:n,k:e,f:!!t}:n:null);function re(n,e=null,t=null,i=0,s=null,r=n===dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ip(e),ref:e&&ca(e),scopeId:ap,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Nt};return a?(yu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Rt(t)?8:16),oo>0&&!o&&hn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&hn.push(l),l}const Bt=D_;function D_(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===e_)&&(n=$i),lo(n)){const a=rr(n,e,!0);return t&&yu(a,t),oo>0&&!r&&hn&&(a.shapeFlag&6?hn[hn.indexOf(n)]=a:hn.push(a)),a.patchFlag=-2,a}if(W_(n)&&(n=n.__vccOpts),e){e=N_(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=_s(a)),mt(l)&&(pu(l)&&!Be(l)&&(l=kt({},l)),e.style=xo(l))}const o=Rt(n)?1:Pp(n)?128:zg(n)?64:mt(n)?4:Xe(n)?2:0;return re(n,e,t,i,s,o,r,!0)}function N_(n){return n?pu(n)||vp(n)?kt({},n):n:null}function rr(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?U_(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ip(c),ref:e&&e.ref?t&&r?Be(r)?r.concat(ca(e)):[r,ca(e)]:ca(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==dt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&rr(n.ssContent),ssFallback:n.ssFallback&&rr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&_u(u,l.clone(u)),u}function ps(n=" ",e=0){return Bt(Ha,null,n,e)}function At(n="",e=!1){return e?(Ne(),ao($i,null,n)):Bt($i,null,n)}function Vn(n){return n==null||typeof n=="boolean"?Bt($i):Be(n)?Bt(dt,null,n.slice()):lo(n)?Ui(n):Bt(Ha,null,String(n))}function Ui(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:rr(n)}function yu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),yu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!vp(e)?e._ctx=Nt:s===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:Nt},t=32):(e=String(e),i&64?(t=16,e=[ps(e)]):t=8);n.children=e,n.shapeFlag|=t}function U_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=_s([e.class,i.class]));else if(s==="style")e.style=xo([e.style,i.style]);else if(Ia(s)){const r=e[s],o=i[s];o&&r!==o&&!(Be(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function kn(n,e,t,i=null){$n(n,e,7,[t,i])}const O_=mp();let F_=0;function B_(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||O_,r={uid:F_++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ud(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yp(i,s),emitsOptions:Cp(i,s),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=A_.bind(null,r),n.ce&&n.ce(r),r}let Ft=null;const k_=()=>Ft||Nt;let Aa,oc;{const n=Na(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Aa=e("__VUE_INSTANCE_SETTERS__",t=>Ft=t),oc=e("__VUE_SSR_SETTERS__",t=>co=t)}const bo=n=>{const e=Ft;return Aa(n),n.scope.on(),()=>{n.scope.off(),Aa(e)}},gh=()=>{Ft&&Ft.scope.off(),Aa(null)};function Dp(n){return n.vnode.shapeFlag&4}let co=!1;function H_(n,e=!1,t=!1){e&&oc(e);const{props:i,children:s}=n.vnode,r=Dp(n);h_(n,i,r,e),m_(n,s,t);const o=r?V_(n,e):void 0;return e&&oc(!1),o}function V_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,t_);const{setup:i}=t;if(i){Ki();const s=n.setupContext=i.length>1?G_(n):null,r=bo(n),o=Mo(i,n,0,[n.props,s]),a=wd(o);if(Yi(),r(),(a||n.sp)&&!Qs(n)&&lp(n),a){if(o.then(gh,gh),e)return o.then(l=>{_h(n,l)}).catch(l=>{Fa(l,n,0)});n.asyncDep=o}else _h(n,o)}else Np(n)}function _h(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:mt(e)&&(n.setupState=tp(e)),Np(n)}function Np(n,e,t){const i=n.type;n.render||(n.render=i.render||Wn);{const s=bo(n);Ki();try{i_(n)}finally{Yi(),s()}}}const z_={get(n,e){return Gt(n,"get",""),n[e]}};function G_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,z_),slots:n.slots,emit:n.emit,expose:e}}function Va(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(tp(mu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in jr)return jr[t](n)},has(e,t){return t in e||t in jr}})):n.proxy}function W_(n){return Xe(n)&&"__vccOpts"in n}const St=(n,e)=>Ug(n,e,co);function Up(n,e,t){const i=arguments.length;return i===2?mt(e)&&!Be(e)?lo(e)?Bt(n,null,[e]):Bt(n,e):Bt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&lo(t)&&(t=[t]),Bt(n,e,t))}const X_="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ac;const vh=typeof window<"u"&&window.trustedTypes;if(vh)try{ac=vh.createPolicy("vue",{createHTML:n=>n})}catch{}const Op=ac?n=>ac.createHTML(n):n=>n,$_="http://www.w3.org/2000/svg",j_="http://www.w3.org/1998/Math/MathML",li=typeof document<"u"?document:null,xh=li&&li.createElement("template"),q_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?li.createElementNS($_,n):e==="mathml"?li.createElementNS(j_,n):t?li.createElement(n,{is:t}):li.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>li.createTextNode(n),createComment:n=>li.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>li.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{xh.innerHTML=Op(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=xh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},K_=Symbol("_vtc");function Y_(n,e,t){const i=n[K_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const yh=Symbol("_vod"),Z_=Symbol("_vsh"),J_=Symbol(""),Q_=/(^|;)\s*display\s*:/;function ev(n,e,t){const i=n.style,s=Rt(t);let r=!1;if(t&&!s){if(e)if(Rt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ua(i,a,"")}else for(const o in e)t[o]==null&&ua(i,o,"");for(const o in t)o==="display"&&(r=!0),ua(i,o,t[o])}else if(s){if(e!==t){const o=i[J_];o&&(t+=";"+o),i.cssText=t,r=Q_.test(t)}}else e&&n.removeAttribute("style");yh in n&&(n[yh]=r?i.display:"",n[Z_]&&(i.display="none"))}const Mh=/\s*!important$/;function ua(n,e,t){if(Be(t))t.forEach(i=>ua(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=tv(n,e);Mh.test(t)?n.setProperty(qi(i),t.replace(Mh,""),"important"):n[i]=t}}const Sh=["Webkit","Moz","ms"],al={};function tv(n,e){const t=al[e];if(t)return t;let i=xi(e);if(i!=="filter"&&i in n)return al[e]=i;i=Pd(i);for(let s=0;s<Sh.length;s++){const r=Sh[s]+i;if(r in n)return al[e]=r}return e}const bh="http://www.w3.org/1999/xlink";function Eh(n,e,t,i,s,r=ig(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(bh,e.slice(6,e.length)):n.setAttributeNS(bh,e,t):t==null||r&&!Id(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Nn(t)?String(t):t)}function Th(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Op(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Id(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Fi(n,e,t,i){n.addEventListener(e,t,i)}function nv(n,e,t,i){n.removeEventListener(e,t,i)}const Ah=Symbol("_vei");function iv(n,e,t,i,s=null){const r=n[Ah]||(n[Ah]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=sv(e);if(i){const c=r[e]=av(i,s);Fi(n,a,c,l)}else o&&(nv(n,a,o,l),r[e]=void 0)}}const wh=/(?:Once|Passive|Capture)$/;function sv(n){let e;if(wh.test(n)){e={};let i;for(;i=n.match(wh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):qi(n.slice(2)),e]}let ll=0;const rv=Promise.resolve(),ov=()=>ll||(rv.then(()=>ll=0),ll=Date.now());function av(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;$n(lv(i,t.value),e,5,[i])};return t.value=n,t.attached=ov(),t}function lv(n,e){if(Be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Rh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,cv=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Y_(n,i,o):e==="style"?ev(n,t,i):Ia(e)?ru(e)||iv(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):uv(n,e,i,o))?(Th(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Eh(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Rt(i))?Th(n,xi(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Eh(n,e,i,o))};function uv(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Rh(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Rh(e)&&Rt(t)?!1:e in n}const or=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Be(e)?t=>aa(e,t):e};function hv(n){n.target.composing=!0}function Ch(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _i=Symbol("_assign"),Pn={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[_i]=or(s);const r=i||s.props&&s.props.type==="number";Fi(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=va(a)),n[_i](a)}),t&&Fi(n,"change",()=>{n.value=n.value.trim()}),e||(Fi(n,"compositionstart",hv),Fi(n,"compositionend",Ch),Fi(n,"change",Ch))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[_i]=or(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?va(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},fv={deep:!0,created(n,e,t){n[_i]=or(t),Fi(n,"change",()=>{const i=n._modelValue,s=uo(n),r=n.checked,o=n[_i];if(Be(i)){const a=lu(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(yr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Fp(n,r))})},mounted:Ph,beforeUpdate(n,e,t){n[_i]=or(t),Ph(n,e,t)}};function Ph(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(Be(e))s=lu(e,i.props.value)>-1;else if(yr(e))s=e.has(i.props.value);else{if(e===t)return;s=yo(e,Fp(n,!0))}n.checked!==s&&(n.checked=s)}const dv={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=yr(e);Fi(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?va(uo(o)):uo(o));n[_i](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,So(()=>{n._assigning=!1})}),n[_i]=or(i)},mounted(n,{value:e}){Lh(n,e)},beforeUpdate(n,e,t){n[_i]=or(t)},updated(n,{value:e}){n._assigning||Lh(n,e)}};function Lh(n,e){const t=n.multiple,i=Be(e);if(!(t&&!i&&!yr(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=uo(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=lu(e,a)>-1}else o.selected=e.has(a);else if(yo(uo(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function uo(n){return"_value"in n?n._value:n.value}function Fp(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const pv=kt({patchProp:cv},q_);let Ih;function mv(){return Ih||(Ih=__(pv))}const gv=(...n)=>{const e=mv().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=vv(i);if(!s)return;const r=e._component;!Xe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,_v(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function _v(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function vv(n){return Rt(n)?document.querySelector(n):n}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const qs=typeof document<"u";function Bp(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function xv(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Bp(n.default)}const lt=Object.assign;function cl(n,e){const t={};for(const i in e){const s=e[i];t[i]=Un(s)?s.map(n):n(s)}return t}const Kr=()=>{},Un=Array.isArray,kp=/#/g,yv=/&/g,Mv=/\//g,Sv=/=/g,bv=/\?/g,Hp=/\+/g,Ev=/%5B/g,Tv=/%5D/g,Vp=/%5E/g,Av=/%60/g,zp=/%7B/g,wv=/%7C/g,Gp=/%7D/g,Rv=/%20/g;function Mu(n){return encodeURI(""+n).replace(wv,"|").replace(Ev,"[").replace(Tv,"]")}function Cv(n){return Mu(n).replace(zp,"{").replace(Gp,"}").replace(Vp,"^")}function lc(n){return Mu(n).replace(Hp,"%2B").replace(Rv,"+").replace(kp,"%23").replace(yv,"%26").replace(Av,"`").replace(zp,"{").replace(Gp,"}").replace(Vp,"^")}function Pv(n){return lc(n).replace(Sv,"%3D")}function Lv(n){return Mu(n).replace(kp,"%23").replace(bv,"%3F")}function Iv(n){return n==null?"":Lv(n).replace(Mv,"%2F")}function ho(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Dv=/\/$/,Nv=n=>n.replace(Dv,"");function ul(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Bv(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:ho(o)}}function Uv(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Dh(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Ov(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&ar(e.matched[i],t.matched[s])&&Wp(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ar(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Wp(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Fv(n[t],e[t]))return!1;return!0}function Fv(n,e){return Un(n)?Nh(n,e):Un(e)?Nh(e,n):n===e}function Nh(n,e){return Un(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Bv(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Ti={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var fo;(function(n){n.pop="pop",n.push="push"})(fo||(fo={}));var Yr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Yr||(Yr={}));function kv(n){if(!n)if(qs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Nv(n)}const Hv=/^[^#]+#/;function Vv(n,e){return n.replace(Hv,"#")+e}function zv(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const za=()=>({left:window.scrollX,top:window.scrollY});function Gv(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=zv(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Uh(n,e){return(history.state?history.state.position-e:-1)+n}const cc=new Map;function Wv(n,e){cc.set(n,e)}function Xv(n){const e=cc.get(n);return cc.delete(n),e}let $v=()=>location.protocol+"//"+location.host;function Xp(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Dh(l,"")}return Dh(t,n)+i+s}function jv(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=Xp(n,location),g=t.value,_=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===g){o=null;return}m=_?f.position-_.position:0}else i(d);s.forEach(p=>{p(t.value,g,{delta:m,type:fo.pop,direction:m?m>0?Yr.forward:Yr.back:Yr.unknown})})};function l(){o=t.value}function c(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(lt({},f.state,{scroll:za()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Oh(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?za():null}}function qv(n){const{history:e,location:t}=window,i={value:Xp(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:$v()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=lt({},e.state,Oh(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=lt({},s.value,e.state,{forward:l,scroll:za()});r(u.current,u,!0);const h=lt({},Oh(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Kv(n){n=kv(n);const e=qv(n),t=jv(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=lt({location:"",base:n,go:i,createHref:Vv.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Yv(n){return typeof n=="string"||n&&typeof n=="object"}function $p(n){return typeof n=="string"||typeof n=="symbol"}const jp=Symbol("");var Fh;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Fh||(Fh={}));function lr(n,e){return lt(new Error,{type:n,[jp]:!0},e)}function ei(n,e){return n instanceof Error&&jp in n&&(e==null||!!(n.type&e))}const Bh="[^/]+?",Zv={sensitive:!1,strict:!1,start:!0,end:!0},Jv=/[.+*?^${}()[\]/\\]/g;function Qv(n,e){const t=lt({},Zv,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(Jv,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=f;r.push({name:g,repeatable:_,optional:m});const E=p||Bh;if(E!==Bh){d+=10;try{new RegExp(`(${E})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+M.message)}}let T=_?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;h||(T=m&&c.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),s+=T,d+=20,m&&(d+=-8),_&&(d+=-20),E===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(Un(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=Un(p)?p.join("/"):p;if(!E)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function ex(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function qp(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=ex(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(kh(i))return 1;if(kh(s))return-1}return s.length-i.length}function kh(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const tx={type:0,value:""},nx=/[a-zA-Z0-9_]/;function ix(n){if(!n)return[[]];if(n==="/")return[[tx]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:nx.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function sx(n,e,t){const i=Qv(ix(n.path),t),s=lt(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function rx(n,e){const t=[],i=new Map;e=Gh({strict:!1,end:!0,sensitive:!1},e);function s(h){return i.get(h)}function r(h,f,d){const g=!d,_=Vh(h);_.aliasOf=d&&d.record;const m=Gh(e,h),p=[_];if("alias"in h){const M=typeof h.alias=="string"?[h.alias]:h.alias;for(const O of M)p.push(Vh(lt({},_,{components:d?d.record.components:_.components,path:O,aliasOf:d?d.record:_})))}let E,T;for(const M of p){const{path:O}=M;if(f&&O[0]!=="/"){const D=f.record.path,I=D[D.length-1]==="/"?"":"/";M.path=f.record.path+(O&&I+O)}if(E=sx(M,f,m),d?d.alias.push(E):(T=T||E,T!==E&&T.alias.push(E),g&&h.name&&!zh(E)&&o(h.name)),Kp(E)&&l(E),_.children){const D=_.children;for(let I=0;I<D.length;I++)r(D[I],E,d&&d.children[I])}d=d||E}return T?()=>{o(T)}:Kr}function o(h){if($p(h)){const f=i.get(h);f&&(i.delete(h),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(h);f>-1&&(t.splice(f,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return t}function l(h){const f=lx(h,t);t.splice(f,0,h),h.record.name&&!zh(h)&&i.set(h.record.name,h)}function c(h,f){let d,g={},_,m;if("name"in h&&h.name){if(d=i.get(h.name),!d)throw lr(1,{location:h});m=d.record.name,g=lt(Hh(f.params,d.keys.filter(T=>!T.optional).concat(d.parent?d.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),h.params&&Hh(h.params,d.keys.map(T=>T.name))),_=d.stringify(g)}else if(h.path!=null)_=h.path,d=t.find(T=>T.re.test(_)),d&&(g=d.parse(_),m=d.record.name);else{if(d=f.name?i.get(f.name):t.find(T=>T.re.test(f.path)),!d)throw lr(1,{location:h,currentLocation:f});m=d.record.name,g=lt({},f.params,h.params),_=d.stringify(g)}const p=[];let E=d;for(;E;)p.unshift(E.record),E=E.parent;return{name:m,path:_,params:g,matched:p,meta:ax(p)}}n.forEach(h=>r(h));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Hh(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Vh(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:ox(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ox(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function zh(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function ax(n){return n.reduce((e,t)=>lt(e,t.meta),{})}function Gh(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function lx(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;qp(n,e[r])<0?i=r:t=r+1}const s=cx(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function cx(n){let e=n;for(;e=e.parent;)if(Kp(e)&&qp(n,e)===0)return e}function Kp({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function ux(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Hp," "),o=r.indexOf("="),a=ho(o<0?r:r.slice(0,o)),l=o<0?null:ho(r.slice(o+1));if(a in e){let c=e[a];Un(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Wh(n){let e="";for(let t in n){const i=n[t];if(t=Pv(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Un(i)?i.map(r=>r&&lc(r)):[i&&lc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function hx(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Un(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const fx=Symbol(""),Xh=Symbol(""),Ga=Symbol(""),Su=Symbol(""),uc=Symbol("");function Cr(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Oi(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(lr(4,{from:t,to:e})):f instanceof Error?l(f):Yv(f)?l(lr(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function hl(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Bp(l)){const u=(l.__vccOpts||l)[e];u&&r.push(Oi(u,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=xv(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&Oi(d,t,i,o,a,s)()}))}}return r}function $h(n){const e=Mn(Ga),t=Mn(Su),i=St(()=>{const l=we(n.to);return e.resolve(l)}),s=St(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(ar.bind(null,u));if(f>-1)return f;const d=jh(l[c-2]);return c>1&&jh(u)===d&&h[h.length-1].path!==d?h.findIndex(ar.bind(null,l[c-2])):f}),r=St(()=>s.value>-1&&_x(t.params,i.value.params)),o=St(()=>s.value>-1&&s.value===t.matched.length-1&&Wp(t.params,i.value.params));function a(l={}){if(gx(l)){const c=e[we(n.replace)?"replace":"push"](we(n.to)).catch(Kr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:St(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function dx(n){return n.length===1?n[0]:n}const px=pn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$h,setup(n,{slots:e}){const t=Zi($h(n)),{options:i}=Mn(Ga),s=St(()=>({[qh(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[qh(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&dx(e.default(t));return n.custom?r:Up("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),mx=px;function gx(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function _x(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Un(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function jh(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const qh=(n,e,t)=>n??e??t,vx=pn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Mn(uc),s=St(()=>n.route||i.value),r=Mn(Xh,0),o=St(()=>{let c=we(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=St(()=>s.value.matched[o.value]);la(Xh,St(()=>o.value+1)),la(fx,a),la(uc,s);const l=st();return ys(()=>[l.value,a.value,n.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!ar(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return Kh(t.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Up(f,lt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Kh(t.default,{Component:m,route:c})||m}}});function Kh(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Yp=vx;function xx(n){const e=rx(n.routes,n),t=n.parseQuery||ux,i=n.stringifyQuery||Wh,s=n.history,r=Cr(),o=Cr(),a=Cr(),l=Tg(Ti);let c=Ti;qs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=cl.bind(null,N=>""+N),h=cl.bind(null,Iv),f=cl.bind(null,ho);function d(N,ae){let Z,me;return $p(N)?(Z=e.getRecordMatcher(N),me=ae):me=N,e.addRoute(me,Z)}function g(N){const ae=e.getRecordMatcher(N);ae&&e.removeRoute(ae)}function _(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function p(N,ae){if(ae=lt({},ae||l.value),typeof N=="string"){const b=ul(t,N,ae.path),te=e.resolve({path:b.path},ae),q=s.createHref(b.fullPath);return lt(b,te,{params:f(te.params),hash:ho(b.hash),redirectedFrom:void 0,href:q})}let Z;if(N.path!=null)Z=lt({},N,{path:ul(t,N.path,ae.path).path});else{const b=lt({},N.params);for(const te in b)b[te]==null&&delete b[te];Z=lt({},N,{params:h(b)}),ae.params=h(ae.params)}const me=e.resolve(Z,ae),Oe=N.hash||"";me.params=u(f(me.params));const w=Uv(i,lt({},N,{hash:Cv(Oe),path:me.path})),P=s.createHref(w);return lt({fullPath:w,hash:Oe,query:i===Wh?hx(N.query):N.query||{}},me,{redirectedFrom:void 0,href:P})}function E(N){return typeof N=="string"?ul(t,N,l.value.path):lt({},N)}function T(N,ae){if(c!==N)return lr(8,{from:ae,to:N})}function M(N){return I(N)}function O(N){return M(lt(E(N),{replace:!0}))}function D(N){const ae=N.matched[N.matched.length-1];if(ae&&ae.redirect){const{redirect:Z}=ae;let me=typeof Z=="function"?Z(N):Z;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=E(me):{path:me},me.params={}),lt({query:N.query,hash:N.hash,params:me.path!=null?{}:N.params},me)}}function I(N,ae){const Z=c=p(N),me=l.value,Oe=N.state,w=N.force,P=N.replace===!0,b=D(Z);if(b)return I(lt(E(b),{state:typeof b=="object"?lt({},Oe,b.state):Oe,force:w,replace:P}),ae||Z);const te=Z;te.redirectedFrom=ae;let q;return!w&&Ov(i,me,Z)&&(q=lr(16,{to:te,from:me}),le(me,me,!0,!1)),(q?Promise.resolve(q):v(te,me)).catch(W=>ei(W)?ei(W,2)?W:ce(W):G(W,te,me)).then(W=>{if(W){if(ei(W,2))return I(lt({replace:P},E(W.to),{state:typeof W.to=="object"?lt({},Oe,W.to.state):Oe,force:w}),ae||te)}else W=B(te,me,!0,P,Oe);return C(te,me,W),W})}function R(N,ae){const Z=T(N,ae);return Z?Promise.reject(Z):Promise.resolve()}function x(N){const ae=J.values().next().value;return ae&&typeof ae.runWithContext=="function"?ae.runWithContext(N):N()}function v(N,ae){let Z;const[me,Oe,w]=yx(N,ae);Z=hl(me.reverse(),"beforeRouteLeave",N,ae);for(const b of me)b.leaveGuards.forEach(te=>{Z.push(Oi(te,N,ae))});const P=R.bind(null,N,ae);return Z.push(P),_e(Z).then(()=>{Z=[];for(const b of r.list())Z.push(Oi(b,N,ae));return Z.push(P),_e(Z)}).then(()=>{Z=hl(Oe,"beforeRouteUpdate",N,ae);for(const b of Oe)b.updateGuards.forEach(te=>{Z.push(Oi(te,N,ae))});return Z.push(P),_e(Z)}).then(()=>{Z=[];for(const b of w)if(b.beforeEnter)if(Un(b.beforeEnter))for(const te of b.beforeEnter)Z.push(Oi(te,N,ae));else Z.push(Oi(b.beforeEnter,N,ae));return Z.push(P),_e(Z)}).then(()=>(N.matched.forEach(b=>b.enterCallbacks={}),Z=hl(w,"beforeRouteEnter",N,ae,x),Z.push(P),_e(Z))).then(()=>{Z=[];for(const b of o.list())Z.push(Oi(b,N,ae));return Z.push(P),_e(Z)}).catch(b=>ei(b,8)?b:Promise.reject(b))}function C(N,ae,Z){a.list().forEach(me=>x(()=>me(N,ae,Z)))}function B(N,ae,Z,me,Oe){const w=T(N,ae);if(w)return w;const P=ae===Ti,b=qs?history.state:{};Z&&(me||P?s.replace(N.fullPath,lt({scroll:P&&b&&b.scroll},Oe)):s.push(N.fullPath,Oe)),l.value=N,le(N,ae,Z,P),ce()}let z;function ne(){z||(z=s.listen((N,ae,Z)=>{if(!pe.listening)return;const me=p(N),Oe=D(me);if(Oe){I(lt(Oe,{replace:!0,force:!0}),me).catch(Kr);return}c=me;const w=l.value;qs&&Wv(Uh(w.fullPath,Z.delta),za()),v(me,w).catch(P=>ei(P,12)?P:ei(P,2)?(I(lt(E(P.to),{force:!0}),me).then(b=>{ei(b,20)&&!Z.delta&&Z.type===fo.pop&&s.go(-1,!1)}).catch(Kr),Promise.reject()):(Z.delta&&s.go(-Z.delta,!1),G(P,me,w))).then(P=>{P=P||B(me,w,!1),P&&(Z.delta&&!ei(P,8)?s.go(-Z.delta,!1):Z.type===fo.pop&&ei(P,20)&&s.go(-1,!1)),C(me,w,P)}).catch(Kr)}))}let ue=Cr(),X=Cr(),ee;function G(N,ae,Z){ce(N);const me=X.list();return me.length?me.forEach(Oe=>Oe(N,ae,Z)):console.error(N),Promise.reject(N)}function oe(){return ee&&l.value!==Ti?Promise.resolve():new Promise((N,ae)=>{ue.add([N,ae])})}function ce(N){return ee||(ee=!N,ne(),ue.list().forEach(([ae,Z])=>N?Z(N):ae()),ue.reset()),N}function le(N,ae,Z,me){const{scrollBehavior:Oe}=n;if(!qs||!Oe)return Promise.resolve();const w=!Z&&Xv(Uh(N.fullPath,0))||(me||!Z)&&history.state&&history.state.scroll||null;return So().then(()=>Oe(N,ae,w)).then(P=>P&&Gv(P)).catch(P=>G(P,N,ae))}const Ce=N=>s.go(N);let Pe;const J=new Set,pe={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:M,replace:O,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:X.add,isReady:oe,install(N){const ae=this;N.component("RouterLink",mx),N.component("RouterView",Yp),N.config.globalProperties.$router=ae,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>we(l)}),qs&&!Pe&&l.value===Ti&&(Pe=!0,M(s.location).catch(Oe=>{}));const Z={};for(const Oe in Ti)Object.defineProperty(Z,Oe,{get:()=>l.value[Oe],enumerable:!0});N.provide(Ga,ae),N.provide(Su,Jd(Z)),N.provide(uc,l);const me=N.unmount;J.add(N),N.unmount=function(){J.delete(N),J.size<1&&(c=Ti,z&&z(),z=null,l.value=Ti,Pe=!1,ee=!1),me()}}};function _e(N){return N.reduce((ae,Z)=>ae.then(()=>x(Z)),Promise.resolve())}return pe}function yx(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>ar(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>ar(c,l))||s.push(l))}return[t,i,s]}function bu(){return Mn(Ga)}function Eu(n){return Mn(Su)}const Mx=pn({__name:"App",setup(n){return(e,t)=>(Ne(),ke(dt,null,[t[0]||(t[0]=re("header",null,[re("div",{class:"wrapper"})],-1)),Bt(we(Yp))],64))}});/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Zp;const Wa=n=>Zp=n,Jp=Symbol();function hc(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Zr;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Zr||(Zr={}));function Sx(){const n=Od(!0),e=n.run(()=>st({}));let t=[],i=[];const s=mu({install(r){Wa(s),s._a=r,r.provide(Jp,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return this._a?t.push(r):i.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Qp=()=>{};function Yh(n,e,t,i=Qp){n.push(e);const s=()=>{const r=n.indexOf(e);r>-1&&(n.splice(r,1),i())};return!t&&Fd()&&rg(s),s}function Cs(n,...e){n.slice().forEach(t=>{t(...e)})}const bx=n=>n(),Zh=Symbol(),fl=Symbol();function fc(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],s=n[t];hc(s)&&hc(i)&&n.hasOwnProperty(t)&&!Mt(i)&&!mi(i)?n[t]=fc(s,i):n[t]=i}return n}const Ex=Symbol();function Tx(n){return!hc(n)||!n.hasOwnProperty(Ex)}const{assign:Di}=Object;function Ax(n){return!!(Mt(n)&&n.effect)}function wx(n,e,t,i){const{state:s,actions:r,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=s?s():{});const u=Pg(t.state.value[n]);return Di(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=mu(St(()=>{Wa(t);const d=t._s.get(n);return o[f].call(d,d)})),h),{}))}return l=em(n,c,e,t,i,!0),l}function em(n,e,t={},i,s,r){let o;const a=Di({actions:{}},t),l={deep:!0};let c,u,h=[],f=[],d;const g=i.state.value[n];!r&&!g&&(i.state.value[n]={}),st({});let _;function m(R){let x;c=u=!1,typeof R=="function"?(R(i.state.value[n]),x={type:Zr.patchFunction,storeId:n,events:d}):(fc(i.state.value[n],R),x={type:Zr.patchObject,payload:R,storeId:n,events:d});const v=_=Symbol();So().then(()=>{_===v&&(c=!0)}),u=!0,Cs(h,x,i.state.value[n])}const p=r?function(){const{state:x}=t,v=x?x():{};this.$patch(C=>{Di(C,v)})}:Qp;function E(){o.stop(),h=[],f=[],i._s.delete(n)}const T=(R,x="")=>{if(Zh in R)return R[fl]=x,R;const v=function(){Wa(i);const C=Array.from(arguments),B=[],z=[];function ne(ee){B.push(ee)}function ue(ee){z.push(ee)}Cs(f,{args:C,name:v[fl],store:O,after:ne,onError:ue});let X;try{X=R.apply(this&&this.$id===n?this:O,C)}catch(ee){throw Cs(z,ee),ee}return X instanceof Promise?X.then(ee=>(Cs(B,ee),ee)).catch(ee=>(Cs(z,ee),Promise.reject(ee))):(Cs(B,X),X)};return v[Zh]=!0,v[fl]=x,v},M={_p:i,$id:n,$onAction:Yh.bind(null,f),$patch:m,$reset:p,$subscribe(R,x={}){const v=Yh(h,R,x.detached,()=>C()),C=o.run(()=>ys(()=>i.state.value[n],B=>{(x.flush==="sync"?u:c)&&R({storeId:n,type:Zr.direct,events:d},B)},Di({},l,x)));return v},$dispose:E},O=Zi(M);i._s.set(n,O);const I=(i._a&&i._a.runWithContext||bx)(()=>i._e.run(()=>(o=Od()).run(()=>e({action:T}))));for(const R in I){const x=I[R];if(Mt(x)&&!Ax(x)||mi(x))r||(g&&Tx(x)&&(Mt(x)?x.value=g[R]:fc(x,g[R])),i.state.value[n][R]=x);else if(typeof x=="function"){const v=T(x,R);I[R]=v,a.actions[R]=x}}return Di(O,I),Di(tt(O),I),Object.defineProperty(O,"$state",{get:()=>i.state.value[n],set:R=>{m(x=>{Di(x,R)})}}),i._p.forEach(R=>{Di(O,o.run(()=>R({store:O,app:i._a,pinia:i,options:a})))}),g&&r&&t.hydrate&&t.hydrate(O.$state,g),c=!0,u=!0,O}/*! #__NO_SIDE_EFFECTS__ */function Tu(n,e,t){let i,s;const r=typeof e=="function";typeof n=="string"?(i=n,s=r?t:e):(s=n,i=n.id);function o(a,l){const c=u_();return a=a||(c?Mn(Jp,null):null),a&&Wa(a),a=Zp,a._s.has(i)||(r?em(i,e,s,a):wx(i,s,a)),a._s.get(i)}return o.$id=i,o}function Rx(n){{const e=tt(n),t={};for(const i in e){const s=e[i];s.effect?t[i]=St({get:()=>n[i],set(r){n[i]=r}}):(Mt(s)||mi(s))&&(t[i]=Dg(n,i))}return t}}var Bi=(n=>(n[n.NEW_GAME=0]="NEW_GAME",n[n.JOIN_GAME=1]="JOIN_GAME",n))(Bi||{});const Hr={LF:`
`,NULL:"\0"};class ki{constructor(e){const{command:t,headers:i,body:s,binaryBody:r,escapeHeaderValues:o,skipContentLengthHeader:a}=e;this.command=t,this.headers=Object.assign({},i||{}),r?(this._binaryBody=r,this.isBinaryBody=!0):(this._body=s||"",this.isBinaryBody=!1),this.escapeHeaderValues=o||!1,this.skipContentLengthHeader=a||!1}get body(){return!this._body&&this.isBinaryBody&&(this._body=new TextDecoder().decode(this._binaryBody)),this._body||""}get binaryBody(){return!this._binaryBody&&!this.isBinaryBody&&(this._binaryBody=new TextEncoder().encode(this._body)),this._binaryBody}static fromRawFrame(e,t){const i={},s=r=>r.replace(/^\s+|\s+$/g,"");for(const r of e.headers.reverse()){r.indexOf(":");const o=s(r[0]);let a=s(r[1]);t&&e.command!=="CONNECT"&&e.command!=="CONNECTED"&&(a=ki.hdrValueUnEscape(a)),i[o]=a}return new ki({command:e.command,headers:i,binaryBody:e.binaryBody,escapeHeaderValues:t})}toString(){return this.serializeCmdAndHeaders()}serialize(){const e=this.serializeCmdAndHeaders();return this.isBinaryBody?ki.toUnit8Array(e,this._binaryBody).buffer:e+this._body+Hr.NULL}serializeCmdAndHeaders(){const e=[this.command];this.skipContentLengthHeader&&delete this.headers["content-length"];for(const t of Object.keys(this.headers||{})){const i=this.headers[t];this.escapeHeaderValues&&this.command!=="CONNECT"&&this.command!=="CONNECTED"?e.push(`${t}:${ki.hdrValueEscape(`${i}`)}`):e.push(`${t}:${i}`)}return(this.isBinaryBody||!this.isBodyEmpty()&&!this.skipContentLengthHeader)&&e.push(`content-length:${this.bodyLength()}`),e.join(Hr.LF)+Hr.LF+Hr.LF}isBodyEmpty(){return this.bodyLength()===0}bodyLength(){const e=this.binaryBody;return e?e.length:0}static sizeOfUTF8(e){return e?new TextEncoder().encode(e).length:0}static toUnit8Array(e,t){const i=new TextEncoder().encode(e),s=new Uint8Array([0]),r=new Uint8Array(i.length+t.length+s.length);return r.set(i),r.set(t,i.length),r.set(s,i.length+t.length),r}static marshall(e){return new ki(e).serialize()}static hdrValueEscape(e){return e.replace(/\\/g,"\\\\").replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/:/g,"\\c")}static hdrValueUnEscape(e){return e.replace(/\\r/g,"\r").replace(/\\n/g,`
`).replace(/\\c/g,":").replace(/\\\\/g,"\\")}}const Jh=0,Lo=10,Io=13,Cx=58;class Px{constructor(e,t){this.onFrame=e,this.onIncomingPing=t,this._encoder=new TextEncoder,this._decoder=new TextDecoder,this._token=[],this._initState()}parseChunk(e,t=!1){let i;if(typeof e=="string"?i=this._encoder.encode(e):i=new Uint8Array(e),t&&i[i.length-1]!==0){const s=new Uint8Array(i.length+1);s.set(i,0),s[i.length]=0,i=s}for(let s=0;s<i.length;s++){const r=i[s];this._onByte(r)}}_collectFrame(e){if(e!==Jh&&e!==Io){if(e===Lo){this.onIncomingPing();return}this._onByte=this._collectCommand,this._reinjectByte(e)}}_collectCommand(e){if(e!==Io){if(e===Lo){this._results.command=this._consumeTokenAsUTF8(),this._onByte=this._collectHeaders;return}this._consumeByte(e)}}_collectHeaders(e){if(e!==Io){if(e===Lo){this._setupCollectBody();return}this._onByte=this._collectHeaderKey,this._reinjectByte(e)}}_reinjectByte(e){this._onByte(e)}_collectHeaderKey(e){if(e===Cx){this._headerKey=this._consumeTokenAsUTF8(),this._onByte=this._collectHeaderValue;return}this._consumeByte(e)}_collectHeaderValue(e){if(e!==Io){if(e===Lo){this._results.headers.push([this._headerKey,this._consumeTokenAsUTF8()]),this._headerKey=void 0,this._onByte=this._collectHeaders;return}this._consumeByte(e)}}_setupCollectBody(){const e=this._results.headers.filter(t=>t[0]==="content-length")[0];e?(this._bodyBytesRemaining=parseInt(e[1],10),this._onByte=this._collectBodyFixedSize):this._onByte=this._collectBodyNullTerminated}_collectBodyNullTerminated(e){if(e===Jh){this._retrievedBody();return}this._consumeByte(e)}_collectBodyFixedSize(e){if(this._bodyBytesRemaining--===0){this._retrievedBody();return}this._consumeByte(e)}_retrievedBody(){this._results.binaryBody=this._consumeTokenAsRaw();try{this.onFrame(this._results)}catch(e){console.log("Ignoring an exception thrown by a frame handler. Original exception: ",e)}this._initState()}_consumeByte(e){this._token.push(e)}_consumeTokenAsUTF8(){return this._decoder.decode(this._consumeTokenAsRaw())}_consumeTokenAsRaw(){const e=new Uint8Array(this._token);return this._token=[],e}_initState(){this._results={command:void 0,headers:[],binaryBody:void 0},this._token=[],this._headerKey=void 0,this._onByte=this._collectFrame}}var fi;(function(n){n[n.CONNECTING=0]="CONNECTING",n[n.OPEN=1]="OPEN",n[n.CLOSING=2]="CLOSING",n[n.CLOSED=3]="CLOSED"})(fi=fi||(fi={}));var _n;(function(n){n[n.ACTIVE=0]="ACTIVE",n[n.DEACTIVATING=1]="DEACTIVATING",n[n.INACTIVE=2]="INACTIVE"})(_n=_n||(_n={}));class Zt{constructor(e){this.versions=e}supportedVersions(){return this.versions.join(",")}protocolVersions(){return this.versions.map(e=>`v${e.replace(".","")}.stomp`)}}Zt.V1_0="1.0";Zt.V1_1="1.1";Zt.V1_2="1.2";Zt.default=new Zt([Zt.V1_2,Zt.V1_1,Zt.V1_0]);function Lx(n,e){n.terminate=function(){const t=()=>{};this.onerror=t,this.onmessage=t,this.onopen=t;const i=new Date,s=Math.random().toString().substring(2,8),r=this.onclose;this.onclose=o=>{const a=new Date().getTime()-i.getTime();e(`Discarded socket (#${s})  closed after ${a}ms, with code/reason: ${o.code}/${o.reason}`)},this.close(),r==null||r.call(n,{code:4001,reason:`Quick discarding socket (#${s}) without waiting for the shutdown sequence.`,wasClean:!1})}}class Ix{constructor(e,t,i){this._client=e,this._webSocket=t,this._connected=!1,this._serverFrameHandlers={CONNECTED:s=>{this.debug(`connected to server ${s.headers.server}`),this._connected=!0,this._connectedVersion=s.headers.version,this._connectedVersion===Zt.V1_2&&(this._escapeHeaderValues=!0),this._setupHeartbeat(s.headers),this.onConnect(s)},MESSAGE:s=>{const r=s.headers.subscription,o=this._subscriptions[r]||this.onUnhandledMessage,a=s,l=this,c=this._connectedVersion===Zt.V1_2?a.headers.ack:a.headers["message-id"];a.ack=(u={})=>l.ack(c,r,u),a.nack=(u={})=>l.nack(c,r,u),o(a)},RECEIPT:s=>{const r=this._receiptWatchers[s.headers["receipt-id"]];r?(r(s),delete this._receiptWatchers[s.headers["receipt-id"]]):this.onUnhandledReceipt(s)},ERROR:s=>{this.onStompError(s)}},this._counter=0,this._subscriptions={},this._receiptWatchers={},this._partialData="",this._escapeHeaderValues=!1,this._lastServerActivityTS=Date.now(),this.debug=i.debug,this.stompVersions=i.stompVersions,this.connectHeaders=i.connectHeaders,this.disconnectHeaders=i.disconnectHeaders,this.heartbeatIncoming=i.heartbeatIncoming,this.heartbeatOutgoing=i.heartbeatOutgoing,this.splitLargeFrames=i.splitLargeFrames,this.maxWebSocketChunkSize=i.maxWebSocketChunkSize,this.forceBinaryWSFrames=i.forceBinaryWSFrames,this.logRawCommunication=i.logRawCommunication,this.appendMissingNULLonIncoming=i.appendMissingNULLonIncoming,this.discardWebsocketOnCommFailure=i.discardWebsocketOnCommFailure,this.onConnect=i.onConnect,this.onDisconnect=i.onDisconnect,this.onStompError=i.onStompError,this.onWebSocketClose=i.onWebSocketClose,this.onWebSocketError=i.onWebSocketError,this.onUnhandledMessage=i.onUnhandledMessage,this.onUnhandledReceipt=i.onUnhandledReceipt,this.onUnhandledFrame=i.onUnhandledFrame}get connectedVersion(){return this._connectedVersion}get connected(){return this._connected}start(){const e=new Px(t=>{const i=ki.fromRawFrame(t,this._escapeHeaderValues);this.logRawCommunication||this.debug(`<<< ${i}`),(this._serverFrameHandlers[i.command]||this.onUnhandledFrame)(i)},()=>{this.debug("<<< PONG")});this._webSocket.onmessage=t=>{if(this.debug("Received data"),this._lastServerActivityTS=Date.now(),this.logRawCommunication){const i=t.data instanceof ArrayBuffer?new TextDecoder().decode(t.data):t.data;this.debug(`<<< ${i}`)}e.parseChunk(t.data,this.appendMissingNULLonIncoming)},this._webSocket.onclose=t=>{this.debug(`Connection closed to ${this._webSocket.url}`),this._cleanUp(),this.onWebSocketClose(t)},this._webSocket.onerror=t=>{this.onWebSocketError(t)},this._webSocket.onopen=()=>{const t=Object.assign({},this.connectHeaders);this.debug("Web Socket Opened..."),t["accept-version"]=this.stompVersions.supportedVersions(),t["heart-beat"]=[this.heartbeatOutgoing,this.heartbeatIncoming].join(","),this._transmit({command:"CONNECT",headers:t})}}_setupHeartbeat(e){if(e.version!==Zt.V1_1&&e.version!==Zt.V1_2||!e["heart-beat"])return;const[t,i]=e["heart-beat"].split(",").map(s=>parseInt(s,10));if(this.heartbeatOutgoing!==0&&i!==0){const s=Math.max(this.heartbeatOutgoing,i);this.debug(`send PING every ${s}ms`),this._pinger=setInterval(()=>{this._webSocket.readyState===fi.OPEN&&(this._webSocket.send(Hr.LF),this.debug(">>> PING"))},s)}if(this.heartbeatIncoming!==0&&t!==0){const s=Math.max(this.heartbeatIncoming,t);this.debug(`check PONG every ${s}ms`),this._ponger=setInterval(()=>{const r=Date.now()-this._lastServerActivityTS;r>s*2&&(this.debug(`did not receive server activity for the last ${r}ms`),this._closeOrDiscardWebsocket())},s)}}_closeOrDiscardWebsocket(){this.discardWebsocketOnCommFailure?(this.debug("Discarding websocket, the underlying socket may linger for a while"),this.discardWebsocket()):(this.debug("Issuing close on the websocket"),this._closeWebsocket())}forceDisconnect(){this._webSocket&&(this._webSocket.readyState===fi.CONNECTING||this._webSocket.readyState===fi.OPEN)&&this._closeOrDiscardWebsocket()}_closeWebsocket(){this._webSocket.onmessage=()=>{},this._webSocket.close()}discardWebsocket(){typeof this._webSocket.terminate!="function"&&Lx(this._webSocket,e=>this.debug(e)),this._webSocket.terminate()}_transmit(e){const{command:t,headers:i,body:s,binaryBody:r,skipContentLengthHeader:o}=e,a=new ki({command:t,headers:i,body:s,binaryBody:r,escapeHeaderValues:this._escapeHeaderValues,skipContentLengthHeader:o});let l=a.serialize();if(this.logRawCommunication?this.debug(`>>> ${l}`):this.debug(`>>> ${a}`),this.forceBinaryWSFrames&&typeof l=="string"&&(l=new TextEncoder().encode(l)),typeof l!="string"||!this.splitLargeFrames)this._webSocket.send(l);else{let c=l;for(;c.length>0;){const u=c.substring(0,this.maxWebSocketChunkSize);c=c.substring(this.maxWebSocketChunkSize),this._webSocket.send(u),this.debug(`chunk sent = ${u.length}, remaining = ${c.length}`)}}}dispose(){if(this.connected)try{const e=Object.assign({},this.disconnectHeaders);e.receipt||(e.receipt=`close-${this._counter++}`),this.watchForReceipt(e.receipt,t=>{this._closeWebsocket(),this._cleanUp(),this.onDisconnect(t)}),this._transmit({command:"DISCONNECT",headers:e})}catch(e){this.debug(`Ignoring error during disconnect ${e}`)}else(this._webSocket.readyState===fi.CONNECTING||this._webSocket.readyState===fi.OPEN)&&this._closeWebsocket()}_cleanUp(){this._connected=!1,this._pinger&&(clearInterval(this._pinger),this._pinger=void 0),this._ponger&&(clearInterval(this._ponger),this._ponger=void 0)}publish(e){const{destination:t,headers:i,body:s,binaryBody:r,skipContentLengthHeader:o}=e,a=Object.assign({destination:t},i);this._transmit({command:"SEND",headers:a,body:s,binaryBody:r,skipContentLengthHeader:o})}watchForReceipt(e,t){this._receiptWatchers[e]=t}subscribe(e,t,i={}){i=Object.assign({},i),i.id||(i.id=`sub-${this._counter++}`),i.destination=e,this._subscriptions[i.id]=t,this._transmit({command:"SUBSCRIBE",headers:i});const s=this;return{id:i.id,unsubscribe(r){return s.unsubscribe(i.id,r)}}}unsubscribe(e,t={}){t=Object.assign({},t),delete this._subscriptions[e],t.id=e,this._transmit({command:"UNSUBSCRIBE",headers:t})}begin(e){const t=e||`tx-${this._counter++}`;this._transmit({command:"BEGIN",headers:{transaction:t}});const i=this;return{id:t,commit(){i.commit(t)},abort(){i.abort(t)}}}commit(e){this._transmit({command:"COMMIT",headers:{transaction:e}})}abort(e){this._transmit({command:"ABORT",headers:{transaction:e}})}ack(e,t,i={}){i=Object.assign({},i),this._connectedVersion===Zt.V1_2?i.id=e:i["message-id"]=e,i.subscription=t,this._transmit({command:"ACK",headers:i})}nack(e,t,i={}){return i=Object.assign({},i),this._connectedVersion===Zt.V1_2?i.id=e:i["message-id"]=e,i.subscription=t,this._transmit({command:"NACK",headers:i})}}class Dx{constructor(e={}){this.stompVersions=Zt.default,this.connectionTimeout=0,this.reconnectDelay=5e3,this.heartbeatIncoming=1e4,this.heartbeatOutgoing=1e4,this.splitLargeFrames=!1,this.maxWebSocketChunkSize=8*1024,this.forceBinaryWSFrames=!1,this.appendMissingNULLonIncoming=!1,this.discardWebsocketOnCommFailure=!1,this.state=_n.INACTIVE;const t=()=>{};this.debug=t,this.beforeConnect=t,this.onConnect=t,this.onDisconnect=t,this.onUnhandledMessage=t,this.onUnhandledReceipt=t,this.onUnhandledFrame=t,this.onStompError=t,this.onWebSocketClose=t,this.onWebSocketError=t,this.logRawCommunication=!1,this.onChangeState=t,this.connectHeaders={},this._disconnectHeaders={},this.configure(e)}get webSocket(){var e;return(e=this._stompHandler)==null?void 0:e._webSocket}get disconnectHeaders(){return this._disconnectHeaders}set disconnectHeaders(e){this._disconnectHeaders=e,this._stompHandler&&(this._stompHandler.disconnectHeaders=this._disconnectHeaders)}get connected(){return!!this._stompHandler&&this._stompHandler.connected}get connectedVersion(){return this._stompHandler?this._stompHandler.connectedVersion:void 0}get active(){return this.state===_n.ACTIVE}_changeState(e){this.state=e,this.onChangeState(e)}configure(e){Object.assign(this,e)}activate(){const e=()=>{if(this.active){this.debug("Already ACTIVE, ignoring request to activate");return}this._changeState(_n.ACTIVE),this._connect()};this.state===_n.DEACTIVATING?(this.debug("Waiting for deactivation to finish before activating"),this.deactivate().then(()=>{e()})):e()}async _connect(){if(await this.beforeConnect(),this._stompHandler){this.debug("There is already a stompHandler, skipping the call to connect");return}if(!this.active){this.debug("Client has been marked inactive, will not attempt to connect");return}this.connectionTimeout>0&&(this._connectionWatcher&&clearTimeout(this._connectionWatcher),this._connectionWatcher=setTimeout(()=>{this.connected||(this.debug(`Connection not established in ${this.connectionTimeout}ms, closing socket`),this.forceDisconnect())},this.connectionTimeout)),this.debug("Opening Web Socket...");const e=this._createWebSocket();this._stompHandler=new Ix(this,e,{debug:this.debug,stompVersions:this.stompVersions,connectHeaders:this.connectHeaders,disconnectHeaders:this._disconnectHeaders,heartbeatIncoming:this.heartbeatIncoming,heartbeatOutgoing:this.heartbeatOutgoing,splitLargeFrames:this.splitLargeFrames,maxWebSocketChunkSize:this.maxWebSocketChunkSize,forceBinaryWSFrames:this.forceBinaryWSFrames,logRawCommunication:this.logRawCommunication,appendMissingNULLonIncoming:this.appendMissingNULLonIncoming,discardWebsocketOnCommFailure:this.discardWebsocketOnCommFailure,onConnect:t=>{if(this._connectionWatcher&&(clearTimeout(this._connectionWatcher),this._connectionWatcher=void 0),!this.active){this.debug("STOMP got connected while deactivate was issued, will disconnect now"),this._disposeStompHandler();return}this.onConnect(t)},onDisconnect:t=>{this.onDisconnect(t)},onStompError:t=>{this.onStompError(t)},onWebSocketClose:t=>{this._stompHandler=void 0,this.state===_n.DEACTIVATING&&this._changeState(_n.INACTIVE),this.onWebSocketClose(t),this.active&&this._schedule_reconnect()},onWebSocketError:t=>{this.onWebSocketError(t)},onUnhandledMessage:t=>{this.onUnhandledMessage(t)},onUnhandledReceipt:t=>{this.onUnhandledReceipt(t)},onUnhandledFrame:t=>{this.onUnhandledFrame(t)}}),this._stompHandler.start()}_createWebSocket(){let e;if(this.webSocketFactory)e=this.webSocketFactory();else if(this.brokerURL)e=new WebSocket(this.brokerURL,this.stompVersions.protocolVersions());else throw new Error("Either brokerURL or webSocketFactory must be provided");return e.binaryType="arraybuffer",e}_schedule_reconnect(){this.reconnectDelay>0&&(this.debug(`STOMP: scheduling reconnection in ${this.reconnectDelay}ms`),this._reconnector=setTimeout(()=>{this._connect()},this.reconnectDelay))}async deactivate(e={}){var r;const t=e.force||!1,i=this.active;let s;if(this.state===_n.INACTIVE)return this.debug("Already INACTIVE, nothing more to do"),Promise.resolve();if(this._changeState(_n.DEACTIVATING),this._reconnector&&(clearTimeout(this._reconnector),this._reconnector=void 0),this._stompHandler&&this.webSocket.readyState!==fi.CLOSED){const o=this._stompHandler.onWebSocketClose;s=new Promise((a,l)=>{this._stompHandler.onWebSocketClose=c=>{o(c),a()}})}else return this._changeState(_n.INACTIVE),Promise.resolve();return t?(r=this._stompHandler)==null||r.discardWebsocket():i&&this._disposeStompHandler(),s}forceDisconnect(){this._stompHandler&&this._stompHandler.forceDisconnect()}_disposeStompHandler(){this._stompHandler&&this._stompHandler.dispose()}publish(e){this._checkConnection(),this._stompHandler.publish(e)}_checkConnection(){if(!this.connected)throw new TypeError("There is no underlying STOMP connection")}watchForReceipt(e,t){this._checkConnection(),this._stompHandler.watchForReceipt(e,t)}subscribe(e,t,i={}){return this._checkConnection(),this._stompHandler.subscribe(e,t,i)}unsubscribe(e,t={}){this._checkConnection(),this._stompHandler.unsubscribe(e,t)}begin(e){return this._checkConnection(),this._stompHandler.begin(e)}commit(e){this._checkConnection(),this._stompHandler.commit(e)}abort(e){this._checkConnection(),this._stompHandler.abort(e)}ack(e,t,i={}){this._checkConnection(),this._stompHandler.ack(e,t,i)}nack(e,t,i={}){this._checkConnection(),this._stompHandler.nack(e,t,i)}}const Nx=window.location.protocol==="http:"?"ws":"wss",Ct=new Dx({brokerURL:`${Nx}://${window.location.host}/ws`,connectHeaders:{},onConnect:()=>{console.log("Connected to STOMP")},onDisconnect:()=>{console.log("Disconnected from STOMP")},debug:n=>console.log(n)});function Jr(n,e){if(!n){console.error("Lobby ID is required to subscribe.");return}Ct.subscribe(`/topic${n}`,t=>{const i=JSON.parse(t.body);switch(i.type){default:e(i)}})}function Do(n,e){Ct.connected?Ct.publish({destination:n,body:JSON.stringify(e)}):console.error("WebSocket is not connected")}var Xa=(n=>(n.REGISTERED="REGISTERED",n.GUEST="GUEST",n))(Xa||{});const dl={ok:!1,gamedata:{id:"",players:[],chickens:[],gamemaster:null,started:!1,playmap:void 0,password:null}};var dn=(n=>(n.SNACKMAN="SNACKMAN",n.GHOST="GHOST",n))(dn||{});const Ss=Tu("gameStore",()=>{const n="/api/game",e="/topic/game",t=Zi(dl),i=Au(),s=bu();function r(){o()}function o(){t.ok=dl.ok,t.gamedata=dl.gamedata}function a(R){t.ok=!0,t.gamedata=R.feedback}async function l(R){if(!R.ok)throw new Error(`Error while fetching data with status: ${R.status}`);const x=await R.json();if(x.status==="error")throw new Error(x.feedback);return x}async function c(R){try{R.playerrole=dn.SNACKMAN,console.log("Erstelle Spiel mit: ",R);const x=await fetch(`${n}/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(R)}),v=await l(x);a(v),R.password&&(t.gamedata.password=R.password),Ct.onConnect=()=>{var C;(C=t.gamedata)!=null&&C.players&&Jr(`/game/${t.gamedata.id}`,B=>{D(B,()=>{})})},Ct.connected||Ct.activate(),sessionStorage.setItem("myName",R.name),sessionStorage.setItem("playerInfo",JSON.stringify(R)),R.password&&sessionStorage.setItem("password",R.password)}catch(x){r(),console.error("Error creating game:",x)}}function u(R,x){return new Promise(v=>{Ct.onConnect=()=>{var C;Ct.unsubscribe(`${e}/${R}`),(C=t.gamedata)!=null&&C.players&&(Jr(`/game/${R}`,B=>{D(B,v)}),Do(`${e}/${R}/join`,x),sessionStorage.setItem("myName",x.name))},Ct.connected||Ct.activate()})}async function h(R,x){const v=M();return v?new Promise(C=>{Ct.connected?(Do(`${e}/${t.gamedata.id}/start/${R}`,v),C({ok:!0,message:"Game started",data:null})):C({ok:!1,message:"WebSocket is not connected",data:null})}):new Promise(C=>C({ok:!1,message:"No acting player found",data:null}))}async function f(){try{const R=await fetch(`${n}/end/${t.gamedata.id}`,{method:"POST"}),x=await l(R);a(x)}catch(R){r(),console.error("Error ending game:",R)}}async function d(R,x,v){try{const C=await fetch(`${n}/move/${t.gamedata.id}/${R}/${x}/${v}`,{method:"POST"}),B=await l(C);return a(B),!0}catch(C){return console.error("Error moving player:",C),!1}}function g(R,x){return new Promise(v=>{try{let C=function(){console.log("Sending leave message for:",x.name),Do(`/topic/game/${R}/leave`,{name:x.name}),Jr(`/game/${R}`,B=>{if(B.status==="ok"){console.log(`${x.name} erfolgreich verlassen.`);const z=B.feedback;t.gamedata.players.splice(0,t.gamedata.players.length,...z),sessionStorage.getItem("myName")===x.name&&(sessionStorage.removeItem("myName"),s.push({name:"index"})),v(!0)}else console.error("Leave error:",B.feedback),v(!1)})};Ct.connected?C():(Ct.activate(),Ct.onConnect=()=>{C()})}catch(C){console.error("Error in leaveGame:",C)}})}async function _(){Ct.onDisconnect=()=>{window.closed&&Ct.connected&&(console.log("ich wurde gelöscht"),Ct.deactivate)}}async function m(R,x){try{const v=await fetch(`${n}/kick/${t.gamedata.id}/${R.name}/${x.name}`,{method:"POST"}),C=await l(v);a(C),await g(t.gamedata.id,x),console.log("User {} got kicked from {}",x,R)}catch(v){r(),console.error("Error kicking user:",v)}}async function p(R){try{const x=await fetch(`${n}/setChicken/${t.gamedata.id}/${R}`,{method:"POST"}),v=await l(x);a(v)}catch(x){r(),console.error("Error setting chicken count:",x)}}async function E(){try{const R=await fetch(`${n}/status/${t.gamedata.id}`),x=await l(R);a(x)}catch(R){r(),console.error("Error fetching game status:",R)}}async function T(R,x){try{const v=await fetch(`${n}/setRole/${t.gamedata.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:R,role:x})}),C=await l(v);a(C)}catch(v){r(),console.error("Error set user role:",v)}}function M(){var x,v;const R=sessionStorage.getItem("myName");return(v=(x=t.gamedata)==null?void 0:x.players)==null?void 0:v.find(C=>C.name===R)}function O(R,x,v){const C=M();return C?(console.log("Setting role of "+R+" to "+dn[x]),new Promise(B=>{Ct.connected?(Do(`${e}/${v}/setRole/${R}/${dn[x]}`,C),B({ok:!0,message:"Role set",data:null})):B({ok:!1,message:"WebSocket is not connected",data:null})})):new Promise(B=>B({ok:!1,message:"No acting player found",data:null}))}function D(R,x){if(console.log(R.feedback),R.status==="ok"){switch(i.setErrorMessage(""),R.type){case"playerJoin":t.gamedata.players=R.feedback;break;case"playerRole":t.gamedata.players=R.feedback;break;case"gameStart":t.gamedata=R.feedback;break;default:console.error("Unknown message type:",R.type)}x(!0)}else i.setErrorMessage(R.feedback),Ct.deactivate().then(v=>console.log("Deactivated stompClient:",v)),x(!1)}async function I(R){try{const v=await(await fetch(`${n}/${R}/isPrivate`)).json();if(v.status==="ok")return v.isPrivate;throw new Error(v.message)}catch(x){return console.error("Fehler beim Überprüfen, ob das Spiel privat ist:",x),!1}}return{gameState:t,createGame:c,startGameViaStomp:h,endGame:f,movePlayer:d,leaveGame:g,kickUser:m,joinLobby:u,setChickenCount:p,fetchGameStatus:E,setPlayerRole:T,setPlayerRoleViaStomp:O,closeTab:_,isGamePrivate:I}}),Au=Tu("modal",()=>{const n=st(!1),e=st(),t=st(),i=st(""),s=Ss(),r=bu(),o=st(!1),a=st(!1);function l(g,_,m){n.value=!0,e.value=g,t.value=_,a.value=m}function c(){n.value=!1}async function u(g){g.name?(await s.createGame(g),r.push(`/lobby/${s.gameState.gamedata.id}`)):i.value="Bitte einen Usernamen eingeben"}async function h(g){if(!g.name)i.value="Bitte einen Username eingeben";else{if(await s.joinLobby(t.value,g)){s.gameState.gamedata.id,r.push(`/lobby/${t.value}`);return}return}}function f(g){i.value=g}async function d(g){try{const _=await s.isGamePrivate(g);a.value=_,l(Bi.JOIN_GAME,g,_)}catch(_){console.error("Fehler beim Überprüfen des privaten Status:",_),i.value="Lobby konnte nicht überprüft werden."}}return{isModalOpen:n,openModal:l,closeModal:c,modalType:e,newGame:u,joinGame:h,setErrorMessage:f,inputErrorMessage:i,requirePassword:o,isGamePrivate:a,checkPrivateGame:d}}),Ux={class:"fixed insert-0 bg-black backdrop-blur-sm bg-opacity-70 flex items-center justify-center z-50 w-full h-full"},Ox={class:"bg-white space-y-4 rounded-lg bg-gray-200 p-16"},Fx={class:"space-y-4"},tm=pn({__name:"Modal",setup(n){return(e,t)=>(Ne(),ke("div",Ux,[re("div",Ox,[re("div",null,[ah(e.$slots,"titel")]),re("div",Fx,[ah(e.$slots,"content")])])]))}}),Bx="/assets/TestBackground1-Ug2U8KjB.jpg",kx={class:"font-bold text-3xl text-center"},Hx={key:0,class:"input-error-message"},Vx={key:1},zx={class:"mt-4 mb-4 mflex itmes-center space-x-2"},Gx={key:2},Wx={class:"flex space-x-4"},Xx={class:"form-container"},$x=pn({__name:"Index",setup(n){const e=Au();Ss();const t=st("");st("");const i=Zi({name:"",email:"",password:"",playertype:Xa.GUEST,playerrole:dn.GHOST});function s(){La.push({name:"createmap"})}return(r,o)=>(Ne(),ke(dt,null,[we(e).isModalOpen?(Ne(),ao(tm,{key:0},{titel:ro(()=>[re("h2",kx,Pt(we(e).modalType===we(Bi).JOIN_GAME?"Join Game":"New Game"),1)]),content:ro(()=>[un(re("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>i.name=a),type:"text",name:"name",id:"name",class:"block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",placeholder:"Username eingeben"},null,512),[[Pn,i.name]]),we(e).inputErrorMessage?(Ne(),ke("div",Hx,Pt(we(e).inputErrorMessage),1)):At("",!0),we(e).modalType===we(Bi).NEW_GAME?(Ne(),ke("div",Vx,[re("label",zx,[un(re("input",{type:"checkbox","onUpdate:modelValue":o[1]||(o[1]=a=>we(e).requirePassword=a),id:"requirePassword",class:"form-checkbox rounded shadow-sm hover:shadow-md transition-shadow duration-300"},null,512),[[fv,we(e).requirePassword]]),o[10]||(o[10]=re("span",null,"Privates Spiel",-1))]),we(e).requirePassword?un((Ne(),ke("input",{key:0,"onUpdate:modelValue":o[2]||(o[2]=a=>i.password=a),type:"text",id:"password",class:"block w-full rounded-md mt-2 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",placeholder:"Passwort eingeben"},null,512)),[[Pn,i.password]]):At("",!0)])):At("",!0),we(e).modalType===we(Bi).JOIN_GAME?(Ne(),ke("div",Gx,[we(e).isGamePrivate?un((Ne(),ke("input",{key:0,"onUpdate:modelValue":o[3]||(o[3]=a=>i.password=a),type:"text",id:"password",class:"block w-full rounded-md mt-2 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",placeholder:"Passwort eingeben"},null,512)),[[Pn,i.password]]):At("",!0)])):At("",!0),re("div",Wx,[re("button",{class:"rounded-lg bg-gray-300 hover:bg-gray-400 p-3",onClick:o[4]||(o[4]=a=>we(e).modalType===we(Bi).NEW_GAME?we(e).newGame(i):we(e).joinGame(i))},"Weiter"),re("button",{class:"rounded-lg bg-gray-300 hover:bg-gray-400 p-3",onClick:o[5]||(o[5]=a=>we(e).closeModal())},"Schließen")])]),_:1})):At("",!0),re("div",{class:"homeMenue",style:xo({backgroundImage:`url('${we(Bx)}')`})},[o[11]||(o[11]=re("h1",null,"Snackman",-1)),re("div",Xx,[re("button",{class:"buttons-top-bottom",onClick:o[6]||(o[6]=a=>we(e).openModal(we(Bi).NEW_GAME,"",!1))},"New Game"),re("div",null,[un(re("input",{type:"text","onUpdate:modelValue":o[7]||(o[7]=a=>t.value=a),placeholder:"Game Id eingeben",class:"gameid-input-field"},null,512),[[Pn,t.value]]),re("button",{class:"button-middle",onClick:o[8]||(o[8]=a=>we(e).checkPrivateGame(t.value))},"Join")]),re("button",{class:"buttons-top-bottom",onClick:o[9]||(o[9]=a=>we(La).push("/lobby"))},"Find Lobbies/Games"),re("button",{class:"buttons-top-bottom",onClick:s},"Map Creator")])],4)],64))}}),jx={class:"px-6 py-3 text-gray-600"},qx={class:"px-6 py-3 text-gray-600"},Kx={class:"px-6 py-3"},Yx=pn({__name:"LobbyTabellenZeile",props:{game:{}},setup(n){return Ss(),(e,t)=>{var i;return Ne(),ke(dt,null,[re("td",jx,[t[1]||(t[1]=re("span",{class:"font-medium px-6 py-3"},null,-1)),ps(" "+Pt(e.game.id),1)]),re("td",qx,[t[2]||(t[2]=re("span",{class:"font-medium px-6 py-3"},null,-1)),ps(" "+Pt(((i=e.game.gamemaster)==null?void 0:i.name)||"Unknown"),1)]),re("td",Kx,[re("button",{onClick:t[0]||(t[0]=s=>e.$emit("open-modal",we(Bi).JOIN_GAME,e.game.id)),class:"rounded-lg bg-gray-300 hover:bg-gray-400 p-3 px-6 py-3"}," Join ")])],64)}}}),Zx={key:0,class:"input-error-message"},Jx={class:"flex space-x-4"},Qx={class:"flex items-center justify-center min-h-screen bg-gray-100"},e0={class:"bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl"},t0={class:"table-auto w-full border-rounded-lg border-collapse border border-gray-300"},n0=["game"],i0="/api/game",s0=pn({__name:"LobbyList",setup(n){const e=Au(),t=st([]),i=Zi({name:"",email:"",password:"",playertype:Xa.GUEST,playerrole:dn.GHOST});async function s(){try{const o=await(await fetch(`${i0}/games`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();if(o.status=="ok")t.value=o.feedback;else throw new Error("Something went wrong, while receiving Games!")}catch{console.error("Error getting Games!")}}return gi(()=>{s()}),(r,o)=>(Ne(),ke(dt,null,[we(e).isModalOpen?(Ne(),ao(tm,{key:0},{titel:ro(()=>o[4]||(o[4]=[re("h2",{class:"font-bold text-3xl text-center"},"Join Game",-1)])),content:ro(()=>[un(re("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>i.name=a),type:"text",name:"name",id:"name",class:"block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",placeholder:"Username eingeben"},null,512),[[Pn,i.name]]),we(e).inputErrorMessage?(Ne(),ke("div",Zx,Pt(we(e).inputErrorMessage),1)):At("",!0),we(e).isGamePrivate?un((Ne(),ke("input",{key:1,"onUpdate:modelValue":o[1]||(o[1]=a=>i.password=a),type:"text",id:"password",class:"block w-full rounded-md mt-2 border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",placeholder:"Passwort eingeben"},null,512)),[[Pn,i.password]]):At("",!0),re("div",Jx,[re("button",{class:"rounded-lg bg-gray-300 hover:bg-gray-400 p-3",onClick:o[2]||(o[2]=a=>we(e).joinGame(i))},"Weiter"),re("button",{class:"rounded-lg bg-gray-300 hover:bg-gray-400 p-3",onClick:o[3]||(o[3]=a=>we(e).closeModal())},"Schließen")])]),_:1})):At("",!0),re("div",Qx,[re("div",e0,[re("table",t0,[o[5]||(o[5]=re("thead",null,[re("tr",{class:"bg-gray-100"},[re("th",{class:"px-6 py-3 text-gray-700"},"Lobby"),re("th",{class:"px-6 py-3 text-gray-700"},"Host"),re("th",{class:"px-6 py-3 text-gray-700"},"Action")])],-1)),re("tbody",null,[(Ne(!0),ke(dt,null,Gi(t.value,a=>(Ne(),ke("tr",{key:a.id,game:a},[Bt(Yx,{game:a,onOpenModal:l=>we(e).checkPrivateGame(a.id)},null,8,["game","onOpenModal"])],8,n0))),128))])])])])],64))}}),r0={class:"flex flex-col flex-grow"},o0={class:"text-lg font-semibold text-blue-600"},a0={class:"flex items-center space-x-2"},l0=["value"],c0=["value"],u0=pn({__name:"PlayerTile",props:n_({lobbyId:{type:String,required:!0}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const e=n,t=T_(n,"modelValue"),i=Ss(),{setPlayerRoleViaStomp:s,kickUser:r}=i;async function o(u){await s(u.name,u.playerrole,e.lobbyId).then(h=>{console.log(h)})}const a=Ss(),l=St(()=>{var f;const u=sessionStorage.getItem("myName"),h=(f=a.gameState.gamedata)==null?void 0:f.gamemaster;return(h==null?void 0:h.name)===u&&(h==null?void 0:h.playertype)});async function c(u){var f;const h=(f=i.gameState.gamedata)==null?void 0:f.gamemaster;if(!h){console.log("Gamemaster nicht gefunden!");return}try{await r(h,u)}catch(d){console.log(d)}}return(u,h)=>(Ne(),ke(dt,null,[re("div",r0,[h[3]||(h[3]=re("p",{class:"text-sm font-medium text-gray-900"},"Name",-1)),re("p",o0,Pt(t.value.name),1)]),re("p",{class:_s([{"text-gray-500 bg-darkgray border border-gray-300 px-4 py-2 rounded":!1,"text-green-500 bg-darkgray border border-green-500 px-4 py-2 rounded":!0},"transition text-center w-32"])},Pt("Ready")),re("div",a0,[un(re("select",{"onUpdate:modelValue":h[0]||(h[0]=f=>t.value.playerrole=f),onChange:h[1]||(h[1]=f=>o(t.value)),class:"w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[re("option",{value:we(dn).SNACKMAN},"Snackman",8,l0),re("option",{value:we(dn).GHOST},"Ghost",8,c0)],544),[[dv,t.value.playerrole]]),l.value?(Ne(),ke("button",{key:0,class:"px-2 py-1 text-sm font-small text-white bg-red-500 rounded hover:bg-red-600 transition",onClick:h[2]||(h[2]=f=>c(t.value))}," Kick ")):At("",!0)])],64))}}),wu=Tu("map",()=>{const n=st(0),e=st(0),t=st([]),i=st(""),s=st(0),r=st(0),o=st({maps:[],selectedMap:null});async function a(){try{const d=await(await fetch("/api/maps")).json();if(d.feedback&&typeof d.feedback=="object")o.value.maps=Object.keys(d.feedback).map((g,_)=>({id:_+1,name:g,map:d.feedback[g]}));else throw new Error("Invalid data format");console.log("Fetched Maps:",o.value.maps)}catch(f){console.error("Error fetching maps:",f)}}async function l(){try{const d=await(await fetch("/api/maps/grid-limits")).json();s.value=d.min,r.value=d.max}catch(f){console.error("Error fetching grid limits:",f)}}function c(){if(n.value<=0||e.value<=0){alert("Bitte gültige Werte für Reihen und Spalten eingeben.");return}t.value=Array.from({length:n.value},()=>Array.from({length:e.value},()=>"null"));for(let f=0;f<n.value;f++)for(let d=0;d<e.value;d++)(f===0||f===n.value-1||d===0||d===e.value-1)&&(t.value[f][d]="wall");console.log(`Erstelle ein Spielfeld mit ${n.value} Reihen und ${e.value} Spalten.`)}function u(f,d){f===0||f===n.value-1||d===0||d===e.value-1||(t.value[f][d]=t.value[f][d]==="wall"?"weg":"wall")}async function h(){if(!i.value.trim()){alert("Please Enter the a name for the Map!");return}//!rows.value||!cols.value|| !grid.value.length
let f=!1;for(let _ of t.value){for(let m of _)if(m=="null"){f=!0;break}if(f)break}if(f){alert("Pleas fill the Map at first!");return}await a();let d=!1;for(let _ of o.value.maps)_.name.trim().toLowerCase()===i.value.trim().toLowerCase()&&(d=!0);if(d){alert("The name is not available, please choose a different name.");return}const g={name:i.value,tiles:t.value.map(_=>_.join(""))};try{const _=await fetch("/api/maps",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)});if(!_.ok)throw new Error(await _.text());alert("Map erfolgreich gespeichert!"),await a()}catch(_){console.error("Somethink went Wrong :( ",_),alert("Somethink went Wrong :( ")}}return{mapName:i,rows:n,cols:e,grid:t,minGridSize:s,maxGridSize:r,mapsDTD:o,fetchMaps:a,saveMap:h,fetchGridLimits:l,createGrid:c,updateCell:u}}),h0={class:"h-screen bg-zinc-900"},f0={class:"max-w-lg mx-auto mt-0"},d0={class:"mb-4"},p0={class:"flex items-center space-x-2"},m0={key:0,class:"mb-4"},g0={class:"flex items-center space-x-2"},_0=["value"],v0={class:"bg-gray-800 shadow-lg rounded-lg divide-y divide-gray-900"},x0={class:"pr-4 pl-4 p-2 text-gray-500 flex items-center justify-between transition-colors"},y0={class:"flex items-center space-x-2 mt-3"},M0={class:"flex items-center space-x-2 mt-3"},S0={class:"w-50 p-2 bg-gray-800 shadow-lg rounded-lg text-blue-600"},b0={class:"text-sm text-gray-400 mt-2"},E0=["disabled"],T0={key:0,class:"fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"},A0={class:"bg-zinc-800 p-6 rounded-lg shadow-lg max-w-4xl w-full"},w0={class:"grid grid-cols-2 gap-4"},R0=["onClick"],C0=["id"],P0={class:"text-center text-zinc-200 font-semibold"},L0={class:"flex justify-between mt-4"},I0=7,D0=pn({__name:"GameLobbyView",setup(n){const e=Ss(),{setPlayerRoleViaStomp:t}=e,i=Eu(),s=bu(),r=wu(),o=st(!1),a=st(null),l=st(!0);st(!1);const c=i.params.id.toString(),u=St(()=>{var x;return((x=e.gameState.gamedata)==null?void 0:x.players)||[]}),h=St(()=>I0-u.value.length),f=St(()=>{var x;return((x=e.gameState.gamedata)==null?void 0:x.password)||null}),d=St({get:()=>{var x;return((x=e.gameState.gamedata)==null?void 0:x.chickens.length)||0},set:async x=>{await e.setChickenCount(x)}}),g=St(()=>{var C;const x=sessionStorage.getItem("myName"),v=(C=e.gameState.gamedata)==null?void 0:C.gamemaster;return(v==null?void 0:v.name)===x&&(v==null?void 0:v.name)});ys(()=>{var x;return(x=e.gameState.gamedata)==null?void 0:x.started},x=>{x&&s.push({name:"game"})});async function _(){const x=[dn.SNACKMAN,dn.GHOST];for(const v of u.value){const C=x[Math.floor(Math.random()*x.length)];v.playerrole=C,console.log(`Assigning random role ${C} to player ${v.name}`),await t(v.name,C,c).then(B=>{console.log(B)})}}async function m(){var x,v;try{if(!((x=r.mapsDTD.selectedMap)!=null&&x.map))throw new Error("No map selected!");await e.startGameViaStomp((v=r.mapsDTD.selectedMap)==null?void 0:v.name,c),console.log(e.gameState),console.log("playMap: ",e.gameState.gamedata.playmap)}catch(C){console.log(C)}}function p(){alert("Copied to Clipboard!"),navigator.clipboard.writeText(c)}async function E(x){try{const v=sessionStorage.getItem("myName");if(!v){console.error("nicht gefunden");return}const C=u.value.find(z=>z.name===v);if(!C){console.error("Spieler nicht in der Liste gefunden!");return}console.log("Lobby-Daten vor leaveGame:",u.value);const B=await e.leaveGame(x,C);console.log("Leaving Game succeeded:",B),console.log("Lobby-Daten nach leaveGame:",u.value)}catch(v){console.log("Fehler beim ausfueren des leaven",v)}}gi(async()=>{var x;try{await e.fetchGameStatus(),console.log("Passwort von gamestate",(x=e.gameState.gamedata)==null?void 0:x.password)}catch(v){console.error("Error fetching game status:",v)}}),gi(async()=>{try{await r.fetchMaps(),r.mapsDTD.maps.length>0&&(r.mapsDTD.selectedMap=r.mapsDTD.maps[0],a.value=r.mapsDTD.selectedMap,console.log("Default:",a.value.name))}catch(x){console.error("Error during setup:",x)}}),ys(()=>o.value,async x=>{x&&(console.log("Popup is now visible. Drawing maps..."),await So(),T())});async function T(){r.mapsDTD.maps.forEach(x=>{console.log(`Drawing map with ID: ${x.id}`),R(x)})}function M(){o.value=!0}function O(){o.value=!1}window.addEventListener("beforeunload",x=>{x.preventDefault();const v=sessionStorage.getItem("myName");v&&u.value.find(B=>B.name===v)&&E(c)}),gi(async()=>{try{await e.fetchGameStatus()}catch(x){console.error("Error fetching game status:",x)}});function D(){const x=r.mapsDTD.maps;if(x.length>0){const v=Math.floor(Math.random()*x.length),C=x[v];a.value=C,r.mapsDTD.selectedMap=C,console.log("Randomly selected map:",C.name)}else alert("No maps available to select.")}function I(x){a.value=x,r.mapsDTD.selectedMap=x}function R(x){const v=document.getElementById("mapCanvas-"+x.id);if(!v){console.error(`Canvas with ID 'mapCanvas-${x.id}' not found in the DOM.`);return}const C=v.getContext("2d");if(!C){console.error(`2D context for canvas 'mapCanvas-${x.id}' not available.`);return}const B=20,z=x.map.length,ne=x.map[0].length;v.width=ne*B,v.height=z*B;for(let ue=0;ue<z;ue++)for(let X=0;X<ne;X++){const ee=x.map[ue][X];C.fillStyle=ee==="*"?"black":"blue",C.fillRect(X*B,ue*B,B,B),C.strokeStyle="black",C.strokeRect(X*B,ue*B,B,B)}console.log(`Map ${x.id} drawn successfully.`)}return(x,v)=>{var C;return Ne(),ke(dt,null,[re("div",h0,[re("div",f0,[v[11]||(v[11]=re("h1",{class:"text-2xl font-semibold text-center text-zinc-200 mb-10"},"Game Lobby",-1)),re("div",d0,[v[9]||(v[9]=re("p",{class:"text-lg font-semibold text-zinc-200"},"Lobby Code:",-1)),re("div",p0,[un(re("input",{type:"text",class:"w-full p-3 bg-gray-800 shadow-lg rounded-lg text-zinc-300",disabled:"true","onUpdate:modelValue":v[0]||(v[0]=B=>Mt(c)?c.value=B:null)},null,512),[[Pn,we(c)]]),re("button",{class:"bg-yellow-500 text-zinc-900 p-3 rounded-lg hover:bg-yellow-600 transition",onClick:v[1]||(v[1]=B=>p())}," Copy ")])]),g.value?(Ne(),ke("div",m0,[v[10]||(v[10]=re("p",{class:"text-lg font-semibold text-zinc-200"},"Lobby Passwort:",-1)),re("div",g0,[re("input",{type:"text",class:"w-full p-3 bg-gray-800 shadow-lg rounded-lg text-zinc-300",value:f.value,disabled:"false"},null,8,_0)])])):At("",!0)]),re("ul",v0,[(Ne(!0),ke(dt,null,Gi(u.value,(B,z)=>(Ne(),ke("li",{key:B.name,class:"pr-4 pl-4 p-2 flex items-center space-x-4 transition-colors"},[Bt(u0,{modelValue:u.value[z],"onUpdate:modelValue":ne=>u.value[z]=ne,"lobby-id":we(c)},null,8,["modelValue","onUpdate:modelValue","lobby-id"])]))),128)),(Ne(!0),ke(dt,null,Gi(h.value,B=>(Ne(),ke("li",x0," Empty "))),256))]),re("div",y0,[v[12]||(v[12]=re("p",{class:"text-lg w-50 font-semibold text-zinc-200"}," Chickens: ",-1)),un(re("input",{type:"number","onUpdate:modelValue":v[2]||(v[2]=B=>d.value=B),class:"w-50 p-2 bg-gray-800 shadow-lg rounded-lg text-blue-600"},null,512),[[Pn,d.value]]),g.value?(Ne(),ke("button",{key:0,class:"w-80 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition",onClick:v[3]||(v[3]=B=>_())}," Randomize Roles ")):At("",!0)]),re("div",M0,[g.value?(Ne(),ke("button",{key:0,class:"w-50 p-2 bg-blue-800 shadow-lg rounded-lg text-white-600 hover:bg-gray-800",onClick:v[4]||(v[4]=B=>M())}," Select Map ")):At("",!0),re("div",S0,[re("p",b0,"Selected: "+Pt(((C=a.value)==null?void 0:C.name)||"None"),1)])]),re("button",{class:_s([{"bg-green-700 hover:bg-green-800 text-zinc-200":l.value,"bg-gray-600":!l.value},"w-full mt-5 px-6 py-3 text-lg font-semibold rounded-lg transition"]),disabled:!l.value,onClick:v[5]||(v[5]=B=>m())},Pt(l.value?"Start Game":"---"),11,E0),re("button",{class:_s([{"bg-red-700 hover:bg-red-800 text-zinc-200":l.value,"bg-gray-600":!l.value},"w-full mt-5 px-6 py-3 text-lg font-semibold rounded-lg transition"]),onClick:v[6]||(v[6]=B=>E(we(c)))}," leave ",2)]),o.value?(Ne(),ke("div",T0,[re("div",A0,[v[13]||(v[13]=re("h2",{class:"text-lg font-semibold text-zinc-200 mb-4"},"Select a Map",-1)),re("div",w0,[(Ne(!0),ke(dt,null,Gi(we(r).mapsDTD.maps,B=>{var z;return Ne(),ke("div",{key:B.id,class:_s(["p-4 rounded-lg shadow-lg transition cursor-pointer",B.id===((z=a.value)==null?void 0:z.id)?"bg-blue-700 border-blue-400":"bg-gray-800 hover:bg-gray-700"]),onClick:ne=>I(B)},[re("canvas",{id:"mapCanvas-"+B.id,class:"w-full h-40 border border-zinc-500 bg-blue-600"},null,8,C0),re("p",P0,Pt(B.name),1)],10,R0)}),128))]),re("div",L0,[re("button",{class:"bg-blue-600 hover:bg-blue-700 text-zinc-200 py-1 px-4 rounded-lg transition",onClick:v[7]||(v[7]=B=>D())}," Random Map "),re("button",{class:"bg-red-600 hover:bg-red-700 text-zinc-200 py-1 px-4 rounded-lg transition",onClick:v[8]||(v[8]=B=>O())}," OK ")])])])):At("",!0)],64)}}}),N0="/assets/herz-BDr62fbB.png",U0="/assets/emptyHerz-Nnh5wdS8.png";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ru="170",O0=0,Qh=1,F0=2,nm=1,B0=2,ai=3,yi=0,rn=1,Gn=2,Wi=0,er=1,ef=2,tf=3,nf=4,k0=5,fs=100,H0=101,V0=102,z0=103,G0=104,W0=200,X0=201,$0=202,j0=203,dc=204,pc=205,q0=206,K0=207,Y0=208,Z0=209,J0=210,Q0=211,ey=212,ty=213,ny=214,mc=0,gc=1,_c=2,cr=3,vc=4,xc=5,yc=6,Mc=7,im=0,iy=1,sy=2,Xi=0,ry=1,oy=2,ay=3,ly=4,cy=5,uy=6,hy=7,sf="attached",fy="detached",sm=300,ur=301,hr=302,Sc=303,bc=304,$a=306,fr=1e3,Vi=1001,wa=1002,Qt=1003,rm=1004,Vr=1005,fn=1006,ha=1007,di=1008,Mi=1009,om=1010,am=1011,po=1012,Cu=1013,bs=1014,Ln=1015,Eo=1016,Pu=1017,Lu=1018,dr=1020,lm=35902,cm=1021,um=1022,xn=1023,hm=1024,fm=1025,tr=1026,pr=1027,Iu=1028,Du=1029,dm=1030,Nu=1031,Uu=1033,fa=33776,da=33777,pa=33778,ma=33779,Ec=35840,Tc=35841,Ac=35842,wc=35843,Rc=36196,Cc=37492,Pc=37496,Lc=37808,Ic=37809,Dc=37810,Nc=37811,Uc=37812,Oc=37813,Fc=37814,Bc=37815,kc=37816,Hc=37817,Vc=37818,zc=37819,Gc=37820,Wc=37821,ga=36492,Xc=36494,$c=36495,pm=36283,jc=36284,qc=36285,Kc=36286,mo=2300,go=2301,pl=2302,rf=2400,of=2401,af=2402,dy=2500,py=0,mm=1,Yc=2,my=3200,gy=3201,gm=0,_y=1,Hi="",Ot="srgb",tn="srgb-linear",ja="linear",pt="srgb",Ps=7680,lf=519,vy=512,xy=513,yy=514,_m=515,My=516,Sy=517,by=518,Ey=519,Zc=35044,cf="300 es",pi=2e3,Ra=2001;class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uf=1234567;const Qr=Math.PI/180,mr=180/Math.PI;function Dn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function Xt(n,e,t){return Math.max(e,Math.min(t,n))}function Ou(n,e){return(n%e+e)%e}function Ty(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Ay(n,e,t){return n!==e?(t-n)/(e-n):0}function eo(n,e,t){return(1-t)*n+t*e}function wy(n,e,t,i){return eo(n,e,1-Math.exp(-t*i))}function Ry(n,e=1){return e-Math.abs(Ou(n,e*2)-e)}function Cy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Py(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ly(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Iy(n,e){return n+Math.random()*(e-n)}function Dy(n){return n*(.5-Math.random())}function Ny(n){n!==void 0&&(uf=n);let e=uf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uy(n){return n*Qr}function Oy(n){return n*mr}function Fy(n){return(n&n-1)===0&&n!==0}function By(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ky(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Hy(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Vy={DEG2RAD:Qr,RAD2DEG:mr,generateUUID:Dn,clamp:Xt,euclideanModulo:Ou,mapLinear:Ty,inverseLerp:Ay,lerp:eo,damp:wy,pingpong:Ry,smoothstep:Cy,smootherstep:Py,randInt:Ly,randFloat:Iy,randFloatSpread:Dy,seededRandom:Ny,degToRad:Uy,radToDeg:Oy,isPowerOfTwo:Fy,ceilPowerOfTwo:By,floorPowerOfTwo:ky,setQuaternionFromProperEuler:Hy,normalize:ht,denormalize:Rn};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,i,s,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],E=s[1],T=s[4],M=s[7],O=s[2],D=s[5],I=s[8];return r[0]=o*_+a*E+l*O,r[3]=o*m+a*T+l*D,r[6]=o*p+a*M+l*I,r[1]=c*_+u*E+h*O,r[4]=c*m+u*T+h*D,r[7]=c*p+u*M+h*I,r[2]=f*_+d*E+g*O,r[5]=f*m+d*T+g*D,r[8]=f*p+d*M+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ml.makeScale(e,t)),this}rotate(e){return this.premultiply(ml.makeRotation(-e)),this}translate(e,t){return this.premultiply(ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ml=new Ke;function vm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zy(){const n=_o("canvas");return n.style.display="block",n}const hf={};function zr(n){n in hf||(hf[n]=!0,console.warn(n))}function Gy(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Wy(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Xy(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qe={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(n.r=vi(n.r),n.g=vi(n.g),n.b=vi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(n.r=nr(n.r),n.g=nr(n.g),n.b=nr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Hi?ja:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ff=[.64,.33,.3,.6,.15,.06],df=[.2126,.7152,.0722],pf=[.3127,.329],mf=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gf=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[tn]:{primaries:ff,whitePoint:pf,transfer:ja,toXYZ:mf,fromXYZ:gf,luminanceCoefficients:df,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:ff,whitePoint:pf,transfer:pt,toXYZ:mf,fromXYZ:gf,luminanceCoefficients:df,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}});let Ls;class $y{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=_o("canvas")),Ls.width=e.width,Ls.height=e.height;const i=Ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_o("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vi(t[i]/255)*255):t[i]=vi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jy=0;class xm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Dn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gl(s[o].image)):r.push(gl(s[o]))}else r=gl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function gl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$y.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qy=0;class Ut extends As{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=Vi,s=Vi,r=fn,o=di,a=xn,l=Mi,c=Ut.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Dn(),this.name="",this.source=new xm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fr:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fr:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=sm;Ut.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,s=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,M=(d+1)/2,O=(p+1)/2,D=(u+f)/4,I=(h+_)/4,R=(g+m)/4;return T>M&&T>O?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=D/i,r=I/i):M>O?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=D/s,r=R/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=I/r,s=R/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ky extends As{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ut(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends Ky{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ym extends Ut{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yy extends Ut{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,E=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const O=Math.sqrt(T),D=Math.atan2(O,p*E);m=Math.sin(m*D)/O,a=Math.sin(a*D)/O}const M=a*E;if(l=l*m+f*M,c=c*m+d*M,u=u*m+g*M,h=h*m+_*M,m===1-a){const O=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=O,c*=O,u*=O,h*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_f.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_f.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _l.copy(this).projectOnVector(e),this.sub(_l)}reflect(e){return this.sub(_l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _l=new k,_f=new Ji;class jn{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),No.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),No.copy(i.boundingBox)),No.applyMatrix4(e.matrixWorld),this.union(No)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),Uo.subVectors(this.max,Pr),Is.subVectors(e.a,Pr),Ds.subVectors(e.b,Pr),Ns.subVectors(e.c,Pr),Ai.subVectors(Ds,Is),wi.subVectors(Ns,Ds),ns.subVectors(Is,Ns);let t=[0,-Ai.z,Ai.y,0,-wi.z,wi.y,0,-ns.z,ns.y,Ai.z,0,-Ai.x,wi.z,0,-wi.x,ns.z,0,-ns.x,-Ai.y,Ai.x,0,-wi.y,wi.x,0,-ns.y,ns.x,0];return!vl(t,Is,Ds,Ns,Uo)||(t=[1,0,0,0,1,0,0,0,1],!vl(t,Is,Ds,Ns,Uo))?!1:(Oo.crossVectors(Ai,wi),t=[Oo.x,Oo.y,Oo.z],vl(t,Is,Ds,Ns,Uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new k,new k,new k,new k,new k,new k,new k,new k],Tn=new k,No=new jn,Is=new k,Ds=new k,Ns=new k,Ai=new k,wi=new k,ns=new k,Pr=new k,Uo=new k,Oo=new k,is=new k;function vl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){is.fromArray(n,r);const a=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),l=e.dot(is),c=t.dot(is),u=i.dot(is);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Zy=new jn,Lr=new k,xl=new k;class qn{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zy.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Lr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(xl)),this.expandByPoint(Lr.copy(e.center).sub(xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new k,yl=new k,Fo=new k,Ri=new k,Ml=new k,Bo=new k,Sl=new k;class qa{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yl.copy(e).add(t).multiplyScalar(.5),Fo.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(yl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Fo),a=Ri.dot(this.direction),l=-Ri.dot(Fo),c=Ri.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(yl).addScaledVector(Fo,f),d}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),s=ni.dot(ni)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,i,s,r){Ml.subVectors(t,e),Bo.subVectors(i,e),Sl.crossVectors(Ml,Bo);let o=this.direction.dot(Sl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(Bo.crossVectors(Ri,Bo));if(l<0)return null;const c=a*this.direction.dot(Ml.cross(Ri));if(c<0||l+c>o)return null;const u=-a*Ri.dot(Sl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Us.setFromMatrixColumn(e,0).length(),r=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jy,e,Qy)}lookAt(e,t,i){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Ci.crossVectors(i,an),Ci.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ci.crossVectors(i,an)),Ci.normalize(),ko.crossVectors(an,Ci),s[0]=Ci.x,s[4]=ko.x,s[8]=an.x,s[1]=Ci.y,s[5]=ko.y,s[9]=an.y,s[2]=Ci.z,s[6]=ko.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],E=i[3],T=i[7],M=i[11],O=i[15],D=s[0],I=s[4],R=s[8],x=s[12],v=s[1],C=s[5],B=s[9],z=s[13],ne=s[2],ue=s[6],X=s[10],ee=s[14],G=s[3],oe=s[7],ce=s[11],le=s[15];return r[0]=o*D+a*v+l*ne+c*G,r[4]=o*I+a*C+l*ue+c*oe,r[8]=o*R+a*B+l*X+c*ce,r[12]=o*x+a*z+l*ee+c*le,r[1]=u*D+h*v+f*ne+d*G,r[5]=u*I+h*C+f*ue+d*oe,r[9]=u*R+h*B+f*X+d*ce,r[13]=u*x+h*z+f*ee+d*le,r[2]=g*D+_*v+m*ne+p*G,r[6]=g*I+_*C+m*ue+p*oe,r[10]=g*R+_*B+m*X+p*ce,r[14]=g*x+_*z+m*ee+p*le,r[3]=E*D+T*v+M*ne+O*G,r[7]=E*I+T*C+M*ue+O*oe,r[11]=E*R+T*B+M*X+O*ce,r[15]=E*x+T*z+M*ee+O*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,T=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,M=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,O=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,D=t*E+i*T+s*M+r*O;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return e[0]=E*I,e[1]=(_*f*r-h*m*r-_*s*d+i*m*d+h*s*p-i*f*p)*I,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*I,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*I,e[4]=T*I,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*I,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*I,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*I,e[8]=M*I,e[9]=(g*h*r-u*_*r-g*i*d+t*_*d+u*i*p-t*h*p)*I,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*p+t*a*p)*I,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*I,e[12]=O*I,e[13]=(u*_*s-g*h*s+g*i*f-t*_*f-u*i*m+t*h*m)*I,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*I,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,E=l*c,T=l*u,M=l*h,O=i.x,D=i.y,I=i.z;return s[0]=(1-(_+p))*O,s[1]=(d+M)*O,s[2]=(g-T)*O,s[3]=0,s[4]=(d-M)*D,s[5]=(1-(f+p))*D,s[6]=(m+E)*D,s[7]=0,s[8]=(g+T)*I,s[9]=(m-E)*I,s[10]=(1-(f+_))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Us.set(s[0],s[1],s[2]).length();const o=Us.set(s[4],s[5],s[6]).length(),a=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);const c=1/r,u=1/o,h=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,t.setFromRotationMatrix(An),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=pi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let d,g;if(a===pi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ra)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=pi){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,d=(i+s)*u;let g,_;if(a===pi)g=(o+r)*h,_=-2*h;else if(a===Ra)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Us=new k,An=new Ye,Jy=new k(0,0,0),Qy=new k(1,1,1),Ci=new k,ko=new k,an=new k,vf=new Ye,xf=new Ji;class On{constructor(e=0,t=0,i=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xf.setFromEuler(this),this.setFromQuaternion(xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Mm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eM=0;const yf=new k,Os=new Ji,ii=new Ye,Ho=new k,Ir=new k,tM=new k,nM=new Ji,Mf=new k(1,0,0),Sf=new k(0,1,0),bf=new k(0,0,1),Ef={type:"added"},iM={type:"removed"},Fs={type:"childadded",child:null},bl={type:"childremoved",child:null};class bt extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new k,t=new On,i=new Ji,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Ke}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Mf,e)}rotateY(e){return this.rotateOnAxis(Sf,e)}rotateZ(e){return this.rotateOnAxis(bf,e)}translateOnAxis(e,t){return yf.copy(e).applyQuaternion(this.quaternion),this.position.add(yf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mf,e)}translateY(e){return this.translateOnAxis(Sf,e)}translateZ(e){return this.translateOnAxis(bf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ho.copy(e):Ho.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Ir,Ho,this.up):ii.lookAt(Ho,Ir,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(ii),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ef),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(iM),bl.child=e,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ef),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,tM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,nM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}bt.DEFAULT_UP=new k(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new k,si=new k,El=new k,ri=new k,Bs=new k,ks=new k,Tf=new k,Tl=new k,Al=new k,wl=new k,Rl=new rt,Cl=new rt,Pl=new rt;class Cn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wn.subVectors(e,t),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){wn.subVectors(s,t),si.subVectors(i,t),El.subVectors(e,t);const o=wn.dot(wn),a=wn.dot(si),l=wn.dot(El),c=si.dot(si),u=si.dot(El),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Rl.setScalar(0),Cl.setScalar(0),Pl.setScalar(0),Rl.fromBufferAttribute(e,t),Cl.fromBufferAttribute(e,i),Pl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Rl,r.x),o.addScaledVector(Cl,r.y),o.addScaledVector(Pl,r.z),o}static isFrontFacing(e,t,i,s){return wn.subVectors(i,t),si.subVectors(e,t),wn.cross(si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),wn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Cn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Bs.subVectors(s,i),ks.subVectors(r,i),Tl.subVectors(e,i);const l=Bs.dot(Tl),c=ks.dot(Tl);if(l<=0&&c<=0)return t.copy(i);Al.subVectors(e,s);const u=Bs.dot(Al),h=ks.dot(Al);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Bs,o);wl.subVectors(e,r);const d=Bs.dot(wl),g=ks.dot(wl);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ks,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Tf.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Tf,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(Bs,o).addScaledVector(ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function Ll(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Qe.workingColorSpace){if(e=Ou(e,1),t=Xt(t,0,1),i=Xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ll(o,r,e+1/3),this.g=Ll(o,r,e),this.b=Ll(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=Ot){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const i=Sm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Qe.fromWorkingColorSpace(zt.copy(this),e),Math.round(Xt(zt.r*255,0,255))*65536+Math.round(Xt(zt.g*255,0,255))*256+Math.round(Xt(zt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(zt.copy(this),t);const i=zt.r,s=zt.g,r=zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Ot){Qe.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,s=zt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Vo);const i=eo(Pi.h,Vo.h,t),s=eo(Pi.s,Vo.s,t),r=eo(Pi.l,Vo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new $e;$e.NAMES=Sm;let sM=0;class Xn extends As{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Dn(),this.name="",this.blending=er,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=pc,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dc&&(i.blendSrc=this.blendSrc),this.blendDst!==pc&&(i.blendDst=this.blendDst),this.blendEquation!==fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ms extends Xn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=im,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new k,zo=new et;class en{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zc,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zo.fromBufferAttribute(this,t),zo.applyMatrix3(e),this.setXY(t,zo.x,zo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),e}}class bm extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Em extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Sn extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}}let rM=0;const gn=new Ye,Il=new bt,Hs=new k,ln=new jn,Dr=new jn,Dt=new k;class Fn extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vm(e)?Em:bm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Sn(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(ln.min,Dr.min),ln.expandByPoint(Dt),Dt.addVectors(ln.max,Dr.max),ln.expandByPoint(Dt)):(ln.expandByPoint(Dr.min),ln.expandByPoint(Dr.max))}ln.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(e,c),Dt.add(Hs)),s=Math.max(s,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new k,l[R]=new k;const c=new k,u=new k,h=new k,f=new et,d=new et,g=new et,_=new k,m=new k;function p(R,x,v){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,x),h.fromBufferAttribute(i,v),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,x),g.fromBufferAttribute(r,v),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),a[R].add(_),a[x].add(_),a[v].add(_),l[R].add(m),l[x].add(m),l[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let R=0,x=E.length;R<x;++R){const v=E[R],C=v.start,B=v.count;for(let z=C,ne=C+B;z<ne;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const T=new k,M=new k,O=new k,D=new k;function I(R){O.fromBufferAttribute(s,R),D.copy(O);const x=a[R];T.copy(x),T.sub(O.multiplyScalar(O.dot(x))).normalize(),M.crossVectors(D,x);const C=M.dot(l[R])<0?-1:1;o.setXYZW(R,T.x,T.y,T.z,C)}for(let R=0,x=E.length;R<x;++R){const v=E[R],C=v.start,B=v.count;for(let z=C,ne=C+B;z<ne;z+=3)I(e.getX(z+0)),I(e.getX(z+1)),I(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new en(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Af=new Ye,ss=new qa,Go=new qn,wf=new k,Wo=new k,Xo=new k,$o=new k,Dl=new k,jo=new k,Rf=new k,qo=new k;class Tt extends bt{constructor(e=new Fn,t=new ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){jo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Dl.fromBufferAttribute(h,e),o?jo.addScaledVector(Dl,u):jo.addScaledVector(Dl.sub(t),u))}t.add(jo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(r),ss.copy(e.ray).recast(e.near),!(Go.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Go,wf)===null||ss.origin.distanceToSquared(wf)>(e.far-e.near)**2))&&(Af.copy(r).invert(),ss.copy(e.ray).applyMatrix4(Af),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,O=T;M<O;M+=3){const D=a.getX(M),I=a.getX(M+1),R=a.getX(M+2);s=Ko(this,p,e,i,c,u,h,D,I,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),T=a.getX(m+1),M=a.getX(m+2);s=Ko(this,o,e,i,c,u,h,E,T,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,O=T;M<O;M+=3){const D=M,I=M+1,R=M+2;s=Ko(this,p,e,i,c,u,h,D,I,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=m,T=m+1,M=m+2;s=Ko(this,o,e,i,c,u,h,E,T,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function oM(n,e,t,i,s,r,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===yi,a),l===null)return null;qo.copy(a),qo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(qo);return c<t.near||c>t.far?null:{distance:c,point:qo.clone(),object:n}}function Ko(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Wo),n.getVertexPosition(l,Xo),n.getVertexPosition(c,$o);const u=oM(n,e,t,i,Wo,Xo,$o,Rf);if(u){const h=new k;Cn.getBarycoord(Rf,Wo,Xo,$o,h),s&&(u.uv=Cn.getInterpolatedAttribute(s,a,l,c,h,new et)),r&&(u.uv1=Cn.getInterpolatedAttribute(r,a,l,c,h,new et)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,l,c,h,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};Cn.getNormal(Wo,Xo,$o,f.normal),u.face=f,u.barycoord=h}return u}class Ts extends Fn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Sn(c,3)),this.setAttribute("normal",new Sn(u,3)),this.setAttribute("uv",new Sn(h,2));function g(_,m,p,E,T,M,O,D,I,R,x){const v=M/I,C=O/R,B=M/2,z=O/2,ne=D/2,ue=I+1,X=R+1;let ee=0,G=0;const oe=new k;for(let ce=0;ce<X;ce++){const le=ce*C-z;for(let Ce=0;Ce<ue;Ce++){const Pe=Ce*v-B;oe[_]=Pe*E,oe[m]=le*T,oe[p]=ne,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[m]=0,oe[p]=D>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(Ce/I),h.push(1-ce/R),ee+=1}}for(let ce=0;ce<R;ce++)for(let le=0;le<I;le++){const Ce=f+le+ue*ce,Pe=f+le+ue*(ce+1),J=f+(le+1)+ue*(ce+1),pe=f+(le+1)+ue*ce;l.push(Ce,Pe,pe),l.push(Pe,J,pe),G+=6}a.addGroup(d,G,x),d+=G,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=gr(n[t]);for(const s in i)e[s]=i[s]}return e}function aM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Tm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const lM={clone:gr,merge:qt};var cM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Xn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cM,this.fragmentShader=uM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=aM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Am extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new k,Cf=new et,Pf=new et;class Jt extends Am{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Cf,Pf),t.subVectors(Pf,Cf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vs=-90,zs=1;class hM extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Jt(Vs,zs,e,t);s.layers=this.layers,this.add(s);const r=new Jt(Vs,zs,e,t);r.layers=this.layers,this.add(r);const o=new Jt(Vs,zs,e,t);o.layers=this.layers,this.add(o);const a=new Jt(Vs,zs,e,t);a.layers=this.layers,this.add(a);const l=new Jt(Vs,zs,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Vs,zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class wm extends Ut{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ur,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fM extends Es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new wm(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ts(5,5,5),r=new ji({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Wi});r.uniforms.tEquirect.value=t;const o=new Tt(s,r),a=t.minFilter;return t.minFilter===di&&(t.minFilter=fn),new hM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Nl=new k,dM=new k,pM=new Ke;class us{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Nl.subVectors(i,t).cross(dM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Nl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pM.getNormalMatrix(e),s=this.coplanarPoint(Nl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new qn,Yo=new k;class Fu{constructor(e=new us,t=new us,i=new us,s=new us,r=new us,o=new us){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],E=s[13],T=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,m-d,M-p).normalize(),i[1].setComponents(l+r,f+c,m+d,M+p).normalize(),i[2].setComponents(l+o,f+u,m+g,M+E).normalize(),i[3].setComponents(l-o,f-u,m-g,M-E).normalize(),i[4].setComponents(l-a,f-h,m-_,M-T).normalize(),t===pi)i[5].setComponents(l+a,f+h,m+_,M+T).normalize();else if(t===Ra)i[5].setComponents(a,h,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Yo.x=s.normal.x>0?e.max.x:e.min.x,Yo.y=s.normal.y>0?e.max.y:e.min.y,Yo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function mM(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ka extends Fn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*f-o;for(let T=0;T<c;T++){const M=T*h-r;g.push(M,-E,0),_.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const T=E+c*p,M=E+c*(p+1),O=E+1+c*(p+1),D=E+1+c*p;d.push(T,M,D),d.push(M,O,D)}this.setIndex(d),this.setAttribute("position",new Sn(g,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var gM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_M=`#ifdef USE_ALPHAHASH
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
#endif`,vM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SM=`#ifdef USE_AOMAP
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
#endif`,bM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EM=`#ifdef USE_BATCHING
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
#endif`,TM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CM=`#ifdef USE_IRIDESCENCE
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
#endif`,PM=`#ifdef USE_BUMPMAP
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
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kM=`#define PI 3.141592653589793
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
} // validated`,HM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VM=`vec3 transformedNormal = objectNormal;
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
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$M="gl_FragColor = linearToOutputTexel( gl_FragColor );",jM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qM=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YM=`#ifdef USE_ENVMAP
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
#endif`,ZM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
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
#endif`,QM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iS=`#ifdef USE_GRADIENTMAP
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
}`,sS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aS=`uniform bool receiveShadow;
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
#endif`,lS=`#ifdef USE_ENVMAP
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
#endif`,cS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dS=`PhysicalMaterial material;
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
#endif`,pS=`struct PhysicalMaterial {
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
}`,mS=`
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
#endif`,gS=`#if defined( RE_IndirectDiffuse )
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
#endif`,_S=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ES=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TS=`#if defined( USE_POINTS_UV )
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
#endif`,AS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LS=`#ifdef USE_MORPHTARGETS
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
#endif`,IS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,US=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BS=`#ifdef USE_NORMALMAP
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
#endif`,kS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,XS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$S=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eb=`float getShadowMask() {
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
}`,tb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nb=`#ifdef USE_SKINNING
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
#endif`,ib=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sb=`#ifdef USE_SKINNING
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
#endif`,rb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ob=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ab=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cb=`#ifdef USE_TRANSMISSION
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
#endif`,ub=`#ifdef USE_TRANSMISSION
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
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gb=`uniform sampler2D t2D;
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
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`#include <common>
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
}`,Sb=`#if DEPTH_PACKING == 3200
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
}`,bb=`#define DISTANCE
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
}`,Eb=`#define DISTANCE
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
}`,Tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ab=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`uniform float scale;
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
}`,Rb=`uniform vec3 diffuse;
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
}`,Cb=`#include <common>
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
}`,Pb=`uniform vec3 diffuse;
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
}`,Lb=`#define LAMBERT
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
}`,Ib=`#define LAMBERT
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
}`,Db=`#define MATCAP
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
}`,Nb=`#define MATCAP
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
}`,Ub=`#define NORMAL
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
}`,Ob=`#define NORMAL
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
}`,Fb=`#define PHONG
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
}`,Bb=`#define PHONG
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
}`,kb=`#define STANDARD
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
}`,Hb=`#define STANDARD
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
}`,Vb=`#define TOON
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
}`,zb=`#define TOON
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
}`,Gb=`uniform float size;
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
}`,Wb=`uniform vec3 diffuse;
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
}`,Xb=`#include <common>
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
}`,$b=`uniform vec3 color;
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
}`,jb=`uniform float rotation;
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
}`,qb=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:gM,alphahash_pars_fragment:_M,alphamap_fragment:vM,alphamap_pars_fragment:xM,alphatest_fragment:yM,alphatest_pars_fragment:MM,aomap_fragment:SM,aomap_pars_fragment:bM,batching_pars_vertex:EM,batching_vertex:TM,begin_vertex:AM,beginnormal_vertex:wM,bsdfs:RM,iridescence_fragment:CM,bumpmap_pars_fragment:PM,clipping_planes_fragment:LM,clipping_planes_pars_fragment:IM,clipping_planes_pars_vertex:DM,clipping_planes_vertex:NM,color_fragment:UM,color_pars_fragment:OM,color_pars_vertex:FM,color_vertex:BM,common:kM,cube_uv_reflection_fragment:HM,defaultnormal_vertex:VM,displacementmap_pars_vertex:zM,displacementmap_vertex:GM,emissivemap_fragment:WM,emissivemap_pars_fragment:XM,colorspace_fragment:$M,colorspace_pars_fragment:jM,envmap_fragment:qM,envmap_common_pars_fragment:KM,envmap_pars_fragment:YM,envmap_pars_vertex:ZM,envmap_physical_pars_fragment:lS,envmap_vertex:JM,fog_vertex:QM,fog_pars_vertex:eS,fog_fragment:tS,fog_pars_fragment:nS,gradientmap_pars_fragment:iS,lightmap_pars_fragment:sS,lights_lambert_fragment:rS,lights_lambert_pars_fragment:oS,lights_pars_begin:aS,lights_toon_fragment:cS,lights_toon_pars_fragment:uS,lights_phong_fragment:hS,lights_phong_pars_fragment:fS,lights_physical_fragment:dS,lights_physical_pars_fragment:pS,lights_fragment_begin:mS,lights_fragment_maps:gS,lights_fragment_end:_S,logdepthbuf_fragment:vS,logdepthbuf_pars_fragment:xS,logdepthbuf_pars_vertex:yS,logdepthbuf_vertex:MS,map_fragment:SS,map_pars_fragment:bS,map_particle_fragment:ES,map_particle_pars_fragment:TS,metalnessmap_fragment:AS,metalnessmap_pars_fragment:wS,morphinstance_vertex:RS,morphcolor_vertex:CS,morphnormal_vertex:PS,morphtarget_pars_vertex:LS,morphtarget_vertex:IS,normal_fragment_begin:DS,normal_fragment_maps:NS,normal_pars_fragment:US,normal_pars_vertex:OS,normal_vertex:FS,normalmap_pars_fragment:BS,clearcoat_normal_fragment_begin:kS,clearcoat_normal_fragment_maps:HS,clearcoat_pars_fragment:VS,iridescence_pars_fragment:zS,opaque_fragment:GS,packing:WS,premultiplied_alpha_fragment:XS,project_vertex:$S,dithering_fragment:jS,dithering_pars_fragment:qS,roughnessmap_fragment:KS,roughnessmap_pars_fragment:YS,shadowmap_pars_fragment:ZS,shadowmap_pars_vertex:JS,shadowmap_vertex:QS,shadowmask_pars_fragment:eb,skinbase_vertex:tb,skinning_pars_vertex:nb,skinning_vertex:ib,skinnormal_vertex:sb,specularmap_fragment:rb,specularmap_pars_fragment:ob,tonemapping_fragment:ab,tonemapping_pars_fragment:lb,transmission_fragment:cb,transmission_pars_fragment:ub,uv_pars_fragment:hb,uv_pars_vertex:fb,uv_vertex:db,worldpos_vertex:pb,background_vert:mb,background_frag:gb,backgroundCube_vert:_b,backgroundCube_frag:vb,cube_vert:xb,cube_frag:yb,depth_vert:Mb,depth_frag:Sb,distanceRGBA_vert:bb,distanceRGBA_frag:Eb,equirect_vert:Tb,equirect_frag:Ab,linedashed_vert:wb,linedashed_frag:Rb,meshbasic_vert:Cb,meshbasic_frag:Pb,meshlambert_vert:Lb,meshlambert_frag:Ib,meshmatcap_vert:Db,meshmatcap_frag:Nb,meshnormal_vert:Ub,meshnormal_frag:Ob,meshphong_vert:Fb,meshphong_frag:Bb,meshphysical_vert:kb,meshphysical_frag:Hb,meshtoon_vert:Vb,meshtoon_frag:zb,points_vert:Gb,points_frag:Wb,shadow_vert:Xb,shadow_frag:$b,sprite_vert:jb,sprite_frag:qb},Se={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},zn={basic:{uniforms:qt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:qt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:qt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:qt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:qt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:qt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:qt([Se.points,Se.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:qt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:qt([Se.common,Se.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:qt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:qt([Se.sprite,Se.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:qt([Se.common,Se.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:qt([Se.lights,Se.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};zn.physical={uniforms:qt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Zo={r:0,b:0,g:0},os=new On,Kb=new Ye;function Yb(n,e,t,i,s,r,o){const a=new $e(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(E){let T=E.isScene===!0?E.background:null;return T&&T.isTexture&&(T=(E.backgroundBlurriness>0?t:e).get(T)),T}function _(E){let T=!1;const M=g(E);M===null?p(a,l):M&&M.isColor&&(p(M,1),T=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,T){const M=g(T);M&&(M.isCubeTexture||M.mapping===$a)?(u===void 0&&(u=new Tt(new Ts(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:gr(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),os.copy(T.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Kb.makeRotationFromEuler(os)),u.material.toneMapped=Qe.getTransfer(M.colorSpace)!==pt,(h!==M||f!==M.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Tt(new Ka(2,2),new ji({name:"BackgroundMaterial",uniforms:gr(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(M.colorSpace)!==pt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,T){E.getRGB(Zo,Tm(n)),i.buffers.color.setClear(Zo.r,Zo.g,Zo.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(E,T=1){a.set(E),l=T,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:m}}function Zb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(v,C,B,z,ne){let ue=!1;const X=h(z,B,C);r!==X&&(r=X,c(r.object)),ue=d(v,z,B,ne),ue&&g(v,z,B,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(ue||o)&&(o=!1,M(v,C,B,z),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function h(v,C,B){const z=B.wireframe===!0;let ne=i[v.id];ne===void 0&&(ne={},i[v.id]=ne);let ue=ne[C.id];ue===void 0&&(ue={},ne[C.id]=ue);let X=ue[z];return X===void 0&&(X=f(l()),ue[z]=X),X}function f(v){const C=[],B=[],z=[];for(let ne=0;ne<t;ne++)C[ne]=0,B[ne]=0,z[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:z,object:v,attributes:{},index:null}}function d(v,C,B,z){const ne=r.attributes,ue=C.attributes;let X=0;const ee=B.getAttributes();for(const G in ee)if(ee[G].location>=0){const ce=ne[G];let le=ue[G];if(le===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),ce===void 0||ce.attribute!==le||le&&ce.data!==le.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function g(v,C,B,z){const ne={},ue=C.attributes;let X=0;const ee=B.getAttributes();for(const G in ee)if(ee[G].location>=0){let ce=ue[G];ce===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(ce=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(ce=v.instanceColor));const le={};le.attribute=ce,ce&&ce.data&&(le.data=ce.data),ne[G]=le,X++}r.attributes=ne,r.attributesNum=X,r.index=z}function _(){const v=r.newAttributes;for(let C=0,B=v.length;C<B;C++)v[C]=0}function m(v){p(v,0)}function p(v,C){const B=r.newAttributes,z=r.enabledAttributes,ne=r.attributeDivisors;B[v]=1,z[v]===0&&(n.enableVertexAttribArray(v),z[v]=1),ne[v]!==C&&(n.vertexAttribDivisor(v,C),ne[v]=C)}function E(){const v=r.newAttributes,C=r.enabledAttributes;for(let B=0,z=C.length;B<z;B++)C[B]!==v[B]&&(n.disableVertexAttribArray(B),C[B]=0)}function T(v,C,B,z,ne,ue,X){X===!0?n.vertexAttribIPointer(v,C,B,ne,ue):n.vertexAttribPointer(v,C,B,z,ne,ue)}function M(v,C,B,z){_();const ne=z.attributes,ue=B.getAttributes(),X=C.defaultAttributeValues;for(const ee in ue){const G=ue[ee];if(G.location>=0){let oe=ne[ee];if(oe===void 0&&(ee==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),ee==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor)),oe!==void 0){const ce=oe.normalized,le=oe.itemSize,Ce=e.get(oe);if(Ce===void 0)continue;const Pe=Ce.buffer,J=Ce.type,pe=Ce.bytesPerElement,_e=J===n.INT||J===n.UNSIGNED_INT||oe.gpuType===Cu;if(oe.isInterleavedBufferAttribute){const N=oe.data,ae=N.stride,Z=oe.offset;if(N.isInstancedInterleavedBuffer){for(let me=0;me<G.locationSize;me++)p(G.location+me,N.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let me=0;me<G.locationSize;me++)m(G.location+me);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let me=0;me<G.locationSize;me++)T(G.location+me,le/G.locationSize,J,ce,ae*pe,(Z+le/G.locationSize*me)*pe,_e)}else{if(oe.isInstancedBufferAttribute){for(let N=0;N<G.locationSize;N++)p(G.location+N,oe.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let N=0;N<G.locationSize;N++)m(G.location+N);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let N=0;N<G.locationSize;N++)T(G.location+N,le/G.locationSize,J,ce,le*pe,le/G.locationSize*N*pe,_e)}}else if(X!==void 0){const ce=X[ee];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(G.location,ce);break;case 3:n.vertexAttrib3fv(G.location,ce);break;case 4:n.vertexAttrib4fv(G.location,ce);break;default:n.vertexAttrib1fv(G.location,ce)}}}}E()}function O(){R();for(const v in i){const C=i[v];for(const B in C){const z=C[B];for(const ne in z)u(z[ne].object),delete z[ne];delete C[B]}delete i[v]}}function D(v){if(i[v.id]===void 0)return;const C=i[v.id];for(const B in C){const z=C[B];for(const ne in z)u(z[ne].object),delete z[ne];delete C[B]}delete i[v.id]}function I(v){for(const C in i){const B=i[C];if(B[v.id]===void 0)continue;const z=B[v.id];for(const ne in z)u(z[ne].object),delete z[ne];delete B[v.id]}}function R(){x(),o=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:x,dispose:O,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Jb(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Qb(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==xn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const R=I===Eo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Mi&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ln&&!R)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:O,maxSamples:D}}function eE(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new us,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const E=r?0:i,T=E*4;let M=p.clippingState||null;l.value=M,M=u(g,f,T,d);for(let O=0;O!==T;++O)M[O]=t[O];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,M=d;T!==_;++T,M+=4)o.copy(h[T]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function tE(n){let e=new WeakMap;function t(o,a){return a===Sc?o.mapping=ur:a===bc&&(o.mapping=hr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Sc||a===bc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new fM(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Bu extends Am{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ks=4,Lf=[.125,.215,.35,.446,.526,.582],ds=20,Ul=new Bu,If=new $e;let Ol=null,Fl=0,Bl=0,kl=!1;const hs=(1+Math.sqrt(5))/2,Gs=1/hs,Df=[new k(-hs,Gs,0),new k(hs,Gs,0),new k(-Gs,0,hs),new k(Gs,0,hs),new k(0,hs,-Gs),new k(0,hs,Gs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Nf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ol=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ol,Fl,Bl),this._renderer.xr.enabled=kl,e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ur||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ol=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Eo,format:xn,colorSpace:tn,depthBuffer:!1},s=Uf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uf(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nE(r)),this._blurMaterial=iE(r,e,t)}return s}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,Ul)}_sceneToCubeUV(e,t,i,s){const a=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(If),u.toneMapping=Xi,u.autoClear=!1;const d=new ms({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new Tt(new Ts,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(If),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const T=this._cubeSize;Jo(s,E*T,p>2?T:0,T,T),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ur||e.mapping===hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Jo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ul)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Df[(s-r-1)%Df.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Tt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ds-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ds;m>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);const p=[];let E=0;for(let I=0;I<ds;++I){const R=I/_,x=Math.exp(-R*R/2);p.push(x),I===0?E+=x:I<m&&(E+=2*x)}for(let I=0;I<p.length;I++)p[I]=p[I]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-i;const M=this._sizeLods[s],O=3*M*(s>T-Ks?s-T+Ks:0),D=4*(this._cubeSize-M);Jo(t,O,D,3*M,2*M),l.setRenderTarget(t),l.render(h,Ul)}}function nE(n){const e=[],t=[],i=[];let s=n;const r=n-Ks+1+Lf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ks?l=Lf[o-n+Ks-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*d),T=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let D=0;D<d;D++){const I=D%3*2/3-1,R=D>2?0:-1,x=[I,R,0,I+2/3,R,0,I+2/3,R+1,0,I,R,0,I+2/3,R+1,0,I,R+1,0];E.set(x,_*g*D),T.set(f,m*g*D);const v=[D,D,D,D,D,D];M.set(v,p*g*D)}const O=new Fn;O.setAttribute("position",new en(E,_)),O.setAttribute("uv",new en(T,m)),O.setAttribute("faceIndex",new en(M,p)),e.push(O),s>Ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Uf(n,e,t){const i=new Es(n,e,t);return i.texture.mapping=$a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function iE(n,e,t){const i=new Float32Array(ds),s=new k(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ku(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Of(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Ff(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function ku(){return`

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
	`}function sE(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Sc||l===bc,u=l===ur||l===hr;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Nf(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Nf(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function rE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&zr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function oE(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let T=0,M=E.length;T<M;T+=3){const O=E[T+0],D=E[T+1],I=E[T+2];f.push(O,D,D,I,I,O)}}else if(g!==void 0){const E=g.array;_=g.version;for(let T=0,M=E.length/3-1;T<M;T+=3){const O=T+0,D=T+1,I=T+2;f.push(O,D,D,I,I,O)}}else return;const m=new(vm(f)?Em:bm)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function aE(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*_[E];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function lE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function cE(n,e,t){const i=new WeakMap,s=new rt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let x=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let T=0;d===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let M=a.attributes.position.count*T,O=1;M>e.maxTextureSize&&(O=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const D=new Float32Array(M*O*4*h),I=new ym(D,M,O,h);I.type=Ln,I.needsUpdate=!0;const R=T*4;for(let v=0;v<h;v++){const C=m[v],B=p[v],z=E[v],ne=M*O*4*v;for(let ue=0;ue<C.count;ue++){const X=ue*R;d===!0&&(s.fromBufferAttribute(C,ue),D[ne+X+0]=s.x,D[ne+X+1]=s.y,D[ne+X+2]=s.z,D[ne+X+3]=0),g===!0&&(s.fromBufferAttribute(B,ue),D[ne+X+4]=s.x,D[ne+X+5]=s.y,D[ne+X+6]=s.z,D[ne+X+7]=0),_===!0&&(s.fromBufferAttribute(z,ue),D[ne+X+8]=s.x,D[ne+X+9]=s.y,D[ne+X+10]=s.z,D[ne+X+11]=z.itemSize===4?s.w:1)}}f={count:h,texture:I,size:new et(M,O)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function uE(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Cm extends Ut{constructor(e,t,i,s,r,o,a,l,c,u=tr){if(u!==tr&&u!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===tr&&(i=bs),i===void 0&&u===pr&&(i=dr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Pm=new Ut,Bf=new Cm(1,1),Lm=new ym,Im=new Yy,Dm=new wm,kf=[],Hf=[],Vf=new Float32Array(16),zf=new Float32Array(9),Gf=new Float32Array(4);function Mr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=kf[s];if(r===void 0&&(r=new Float32Array(s),kf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ya(n,e){let t=Hf[e];t===void 0&&(t=new Int32Array(e),Hf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function dE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function pE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function mE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Gf.set(i),n.uniformMatrix2fv(this.addr,!1,Gf),It(t,i)}}function gE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;zf.set(i),n.uniformMatrix3fv(this.addr,!1,zf),It(t,i)}}function _E(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Vf.set(i),n.uniformMatrix4fv(this.addr,!1,Vf),It(t,i)}}function vE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function yE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function ME(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function SE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function EE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function TE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function AE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Bf.compareFunction=_m,r=Bf):r=Pm,t.setTexture2D(e||r,s)}function wE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Im,s)}function RE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Dm,s)}function CE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Lm,s)}function PE(n){switch(n){case 5126:return hE;case 35664:return fE;case 35665:return dE;case 35666:return pE;case 35674:return mE;case 35675:return gE;case 35676:return _E;case 5124:case 35670:return vE;case 35667:case 35671:return xE;case 35668:case 35672:return yE;case 35669:case 35673:return ME;case 5125:return SE;case 36294:return bE;case 36295:return EE;case 36296:return TE;case 35678:case 36198:case 36298:case 36306:case 35682:return AE;case 35679:case 36299:case 36307:return wE;case 35680:case 36300:case 36308:case 36293:return RE;case 36289:case 36303:case 36311:case 36292:return CE}}function LE(n,e){n.uniform1fv(this.addr,e)}function IE(n,e){const t=Mr(e,this.size,2);n.uniform2fv(this.addr,t)}function DE(n,e){const t=Mr(e,this.size,3);n.uniform3fv(this.addr,t)}function NE(n,e){const t=Mr(e,this.size,4);n.uniform4fv(this.addr,t)}function UE(n,e){const t=Mr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function OE(n,e){const t=Mr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function FE(n,e){const t=Mr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function BE(n,e){n.uniform1iv(this.addr,e)}function kE(n,e){n.uniform2iv(this.addr,e)}function HE(n,e){n.uniform3iv(this.addr,e)}function VE(n,e){n.uniform4iv(this.addr,e)}function zE(n,e){n.uniform1uiv(this.addr,e)}function GE(n,e){n.uniform2uiv(this.addr,e)}function WE(n,e){n.uniform3uiv(this.addr,e)}function XE(n,e){n.uniform4uiv(this.addr,e)}function $E(n,e,t){const i=this.cache,s=e.length,r=Ya(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Pm,r[o])}function jE(n,e,t){const i=this.cache,s=e.length,r=Ya(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Im,r[o])}function qE(n,e,t){const i=this.cache,s=e.length,r=Ya(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Dm,r[o])}function KE(n,e,t){const i=this.cache,s=e.length,r=Ya(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Lm,r[o])}function YE(n){switch(n){case 5126:return LE;case 35664:return IE;case 35665:return DE;case 35666:return NE;case 35674:return UE;case 35675:return OE;case 35676:return FE;case 5124:case 35670:return BE;case 35667:case 35671:return kE;case 35668:case 35672:return HE;case 35669:case 35673:return VE;case 5125:return zE;case 36294:return GE;case 36295:return WE;case 36296:return XE;case 35678:case 36198:case 36298:case 36306:case 35682:return $E;case 35679:case 36299:case 36307:return jE;case 35680:case 36300:case 36308:case 36293:return qE;case 36289:case 36303:case 36311:case 36292:return KE}}class ZE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=PE(t.type)}}class JE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YE(t.type)}}class QE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Hl=/(\w+)(\])?(\[|\.)?/g;function Wf(n,e){n.seq.push(e),n.map[e.id]=e}function eT(n,e,t){const i=n.name,s=i.length;for(Hl.lastIndex=0;;){const r=Hl.exec(i),o=Hl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wf(t,c===void 0?new ZE(a,n,e):new JE(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new QE(a),Wf(t,h)),t=h}}}class _a{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);eT(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Xf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const tT=37297;let nT=0;function iT(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const $f=new Ke;function sT(n){Qe._getMatrix($f,Qe.workingColorSpace,n);const e=`mat3( ${$f.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case ja:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function jf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+iT(n.getShaderSource(e),o)}else return s}function rT(n,e){const t=sT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function oT(n,e){let t;switch(e){case ry:t="Linear";break;case oy:t="Reinhard";break;case ay:t="Cineon";break;case ly:t="ACESFilmic";break;case uy:t="AgX";break;case hy:t="Neutral";break;case cy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qo=new k;function aT(){Qe.getLuminanceCoefficients(Qo);const n=Qo.x.toFixed(4),e=Qo.y.toFixed(4),t=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function cT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Gr(n){return n!==""}function qf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(n){return n.replace(hT,dT)}const fT=new Map;function dT(n,e){let t=Ze[e];if(t===void 0){const i=fT.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jc(t)}const pT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yf(n){return n.replace(pT,mT)}function mT(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function gT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===B0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function _T(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ur:case hr:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function xT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case im:e="ENVMAP_BLENDING_MULTIPLY";break;case iy:e="ENVMAP_BLENDING_MIX";break;case sy:e="ENVMAP_BLENDING_ADD";break}return e}function yT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function MT(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gT(t),c=_T(t),u=vT(t),h=xT(t),f=yT(t),d=lT(t),g=cT(r),_=s.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gr).join(`
`),p.length>0&&(p+=`
`)):(m=[Zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),p=[Zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Xi?oT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,rT("linearToOutputTexel",t.outputColorSpace),aT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),o=Jc(o),o=qf(o,t),o=Kf(o,t),a=Jc(a),a=qf(a,t),a=Kf(a,t),o=Yf(o),a=Yf(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=E+m+o,M=E+p+a,O=Xf(s,s.VERTEX_SHADER,T),D=Xf(s,s.FRAGMENT_SHADER,M);s.attachShader(_,O),s.attachShader(_,D),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(C){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(O).trim(),ne=s.getShaderInfoLog(D).trim();let ue=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ue=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,O,D);else{const ee=jf(s,O,"vertex"),G=jf(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+ee+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||ne==="")&&(X=!1);X&&(C.diagnostics={runnable:ue,programLog:B,vertexShader:{log:z,prefix:m},fragmentShader:{log:ne,prefix:p}})}s.deleteShader(O),s.deleteShader(D),R=new _a(s,_),x=uT(s,_)}let R;this.getUniforms=function(){return R===void 0&&I(this),R};let x;this.getAttributes=function(){return x===void 0&&I(this),x};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,tT)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=D,this}let ST=0;class bT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ET(e),t.set(e,i)),i}}class ET{constructor(e){this.id=ST++,this.code=e,this.usedTimes=0}}function TT(n,e,t,i,s,r,o){const a=new Mm,l=new bT,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,v,C,B,z){const ne=B.fog,ue=z.geometry,X=x.isMeshStandardMaterial?B.environment:null,ee=(x.isMeshStandardMaterial?t:e).get(x.envMap||X),G=ee&&ee.mapping===$a?ee.image.height:null,oe=g[x.type];x.precision!==null&&(d=s.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const ce=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,le=ce!==void 0?ce.length:0;let Ce=0;ue.morphAttributes.position!==void 0&&(Ce=1),ue.morphAttributes.normal!==void 0&&(Ce=2),ue.morphAttributes.color!==void 0&&(Ce=3);let Pe,J,pe,_e;if(oe){const ut=zn[oe];Pe=ut.vertexShader,J=ut.fragmentShader}else Pe=x.vertexShader,J=x.fragmentShader,l.update(x),pe=l.getVertexShaderID(x),_e=l.getFragmentShaderID(x);const N=n.getRenderTarget(),ae=n.state.buffers.depth.getReversed(),Z=z.isInstancedMesh===!0,me=z.isBatchedMesh===!0,Oe=!!x.map,w=!!x.matcap,P=!!ee,b=!!x.aoMap,te=!!x.lightMap,q=!!x.bumpMap,W=!!x.normalMap,ie=!!x.displacementMap,he=!!x.emissiveMap,Q=!!x.metalnessMap,S=!!x.roughnessMap,y=x.anisotropy>0,L=x.clearcoat>0,U=x.dispersion>0,j=x.iridescence>0,$=x.sheen>0,xe=x.transmission>0,de=y&&!!x.anisotropyMap,ye=L&&!!x.clearcoatMap,He=L&&!!x.clearcoatNormalMap,ge=L&&!!x.clearcoatRoughnessMap,be=j&&!!x.iridescenceMap,Fe=j&&!!x.iridescenceThicknessMap,Ve=$&&!!x.sheenColorMap,Me=$&&!!x.sheenRoughnessMap,ze=!!x.specularMap,We=!!x.specularColorMap,gt=!!x.specularIntensityMap,F=xe&&!!x.transmissionMap,Ee=xe&&!!x.thicknessMap,se=!!x.gradientMap,fe=!!x.alphaMap,Re=x.alphaTest>0,Te=!!x.alphaHash,je=!!x.extensions;let Et=Xi;x.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Et=n.toneMapping);const Ht={shaderID:oe,shaderType:x.type,shaderName:x.name,vertexShader:Pe,fragmentShader:J,defines:x.defines,customVertexShaderID:pe,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:me,batchingColor:me&&z._colorsTexture!==null,instancing:Z,instancingColor:Z&&z.instanceColor!==null,instancingMorph:Z&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:N===null?n.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:tn,alphaToCoverage:!!x.alphaToCoverage,map:Oe,matcap:w,envMap:P,envMapMode:P&&ee.mapping,envMapCubeUVHeight:G,aoMap:b,lightMap:te,bumpMap:q,normalMap:W,displacementMap:f&&ie,emissiveMap:he,normalMapObjectSpace:W&&x.normalMapType===_y,normalMapTangentSpace:W&&x.normalMapType===gm,metalnessMap:Q,roughnessMap:S,anisotropy:y,anisotropyMap:de,clearcoat:L,clearcoatMap:ye,clearcoatNormalMap:He,clearcoatRoughnessMap:ge,dispersion:U,iridescence:j,iridescenceMap:be,iridescenceThicknessMap:Fe,sheen:$,sheenColorMap:Ve,sheenRoughnessMap:Me,specularMap:ze,specularColorMap:We,specularIntensityMap:gt,transmission:xe,transmissionMap:F,thicknessMap:Ee,gradientMap:se,opaque:x.transparent===!1&&x.blending===er&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:Re,alphaHash:Te,combine:x.combine,mapUv:Oe&&_(x.map.channel),aoMapUv:b&&_(x.aoMap.channel),lightMapUv:te&&_(x.lightMap.channel),bumpMapUv:q&&_(x.bumpMap.channel),normalMapUv:W&&_(x.normalMap.channel),displacementMapUv:ie&&_(x.displacementMap.channel),emissiveMapUv:he&&_(x.emissiveMap.channel),metalnessMapUv:Q&&_(x.metalnessMap.channel),roughnessMapUv:S&&_(x.roughnessMap.channel),anisotropyMapUv:de&&_(x.anisotropyMap.channel),clearcoatMapUv:ye&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:He&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(x.sheenRoughnessMap.channel),specularMapUv:ze&&_(x.specularMap.channel),specularColorMapUv:We&&_(x.specularColorMap.channel),specularIntensityMapUv:gt&&_(x.specularIntensityMap.channel),transmissionMapUv:F&&_(x.transmissionMap.channel),thicknessMapUv:Ee&&_(x.thicknessMap.channel),alphaMapUv:fe&&_(x.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(W||y),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ue.attributes.uv&&(Oe||fe),fog:!!ne,useFog:x.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ae,skinning:z.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ce,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Et,decodeVideoTexture:Oe&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:he&&x.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gn,flipSided:x.side===rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:je&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&x.extensions.multiDraw===!0||me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function p(x){const v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)v.push(C),v.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(E(v,x),T(v,x),v.push(n.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function E(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function T(x,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),x.push(a.mask)}function M(x){const v=g[x.type];let C;if(v){const B=zn[v];C=lM.clone(B.uniforms)}else C=x.uniforms;return C}function O(x,v){let C;for(let B=0,z=u.length;B<z;B++){const ne=u[B];if(ne.cacheKey===v){C=ne,++C.usedTimes;break}}return C===void 0&&(C=new MT(n,v,x,r),u.push(C)),C}function D(x){if(--x.usedTimes===0){const v=u.indexOf(x);u[v]=u[u.length-1],u.pop(),x.destroy()}}function I(x){l.remove(x)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:O,releaseProgram:D,releaseShaderCache:I,programs:u,dispose:R}}function AT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function wT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Jf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||wT),i.length>1&&i.sort(f||Jf),s.length>1&&s.sort(f||Jf)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function RT(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Qf,n.set(i,[o])):s>=r.length?(o=new Qf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function CT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new $e};break;case"SpotLight":t={position:new k,direction:new k,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function PT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let LT=0;function IT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function DT(n){const e=new CT,t=PT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new Ye,o=new Ye;function a(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,E=0,T=0,M=0,O=0,D=0,I=0;c.sort(IT);for(let x=0,v=c.length;x<v;x++){const C=c[x],B=C.color,z=C.intensity,ne=C.distance,ue=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=B.r*z,h+=B.g*z,f+=B.b*z;else if(C.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(C.sh.coefficients[X],z);I++}else if(C.isDirectionalLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ee=C.shadow,G=t.get(C);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=ue,i.directionalShadowMatrix[d]=C.shadow.matrix,E++}i.directional[d]=X,d++}else if(C.isSpotLight){const X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(B).multiplyScalar(z),X.distance=ne,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,i.spot[_]=X;const ee=C.shadow;if(C.map&&(i.spotLightMap[O]=C.map,O++,ee.updateMatrices(C),C.castShadow&&D++),i.spotLightMatrix[_]=ee.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=ue,M++}_++}else if(C.isRectAreaLight){const X=e.get(C);X.color.copy(B).multiplyScalar(z),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=X,m++}else if(C.isPointLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const ee=C.shadow,G=t.get(C);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,G.shadowCameraNear=ee.camera.near,G.shadowCameraFar=ee.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=ue,i.pointShadowMatrix[g]=C.shadow.matrix,T++}i.point[g]=X,g++}else if(C.isHemisphereLight){const X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(z),X.groundColor.copy(C.groundColor).multiplyScalar(z),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==E||R.numPointShadows!==T||R.numSpotShadows!==M||R.numSpotMaps!==O||R.numLightProbes!==I)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=M+O-D,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=I,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=E,R.numPointShadows=T,R.numSpotShadows=M,R.numSpotMaps=O,R.numLightProbes=I,i.version=LT++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const T=c[p];if(T.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(T.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function ed(n){const e=new DT(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function NT(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ed(n),e.set(s,[a])):r>=o.length?(a=new ed(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class UT extends Xn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=my,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OT extends Xn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const FT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BT=`uniform sampler2D shadow_pass;
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
}`;function kT(n,e,t){let i=new Fu;const s=new et,r=new et,o=new rt,a=new UT({depthPacking:gy}),l=new OT,c={},u=t.maxTextureSize,h={[yi]:rn,[rn]:yi,[Gn]:Gn},f=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:FT,fragmentShader:BT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Fn;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nm;let p=this.type;this.render=function(D,I,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const x=n.getRenderTarget(),v=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Wi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const z=p!==ai&&this.type===ai,ne=p===ai&&this.type!==ai;for(let ue=0,X=D.length;ue<X;ue++){const ee=D[ue],G=ee.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const oe=G.getFrameExtents();if(s.multiply(oe),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/oe.x),s.x=r.x*oe.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/oe.y),s.y=r.y*oe.y,G.mapSize.y=r.y)),G.map===null||z===!0||ne===!0){const le=this.type!==ai?{minFilter:Qt,magFilter:Qt}:{};G.map!==null&&G.map.dispose(),G.map=new Es(s.x,s.y,le),G.map.texture.name=ee.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ce=G.getViewportCount();for(let le=0;le<ce;le++){const Ce=G.getViewport(le);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),B.viewport(o),G.updateMatrices(ee,le),i=G.getFrustum(),M(I,R,G.camera,ee,this.type)}G.isPointLightShadow!==!0&&this.type===ai&&E(G,R),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(x,v,C)};function E(D,I){const R=e.update(_);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,d.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Es(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(I,null,R,f,_,null),d.uniforms.shadow_pass.value=D.mapPass.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(I,null,R,d,_,null)}function T(D,I,R,x){let v=null;const C=R.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(C!==void 0)v=C;else if(v=R.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const B=v.uuid,z=I.uuid;let ne=c[B];ne===void 0&&(ne={},c[B]=ne);let ue=ne[z];ue===void 0&&(ue=v.clone(),ne[z]=ue,I.addEventListener("dispose",O)),v=ue}if(v.visible=I.visible,v.wireframe=I.wireframe,x===ai?v.side=I.shadowSide!==null?I.shadowSide:I.side:v.side=I.shadowSide!==null?I.shadowSide:h[I.side],v.alphaMap=I.alphaMap,v.alphaTest=I.alphaTest,v.map=I.map,v.clipShadows=I.clipShadows,v.clippingPlanes=I.clippingPlanes,v.clipIntersection=I.clipIntersection,v.displacementMap=I.displacementMap,v.displacementScale=I.displacementScale,v.displacementBias=I.displacementBias,v.wireframeLinewidth=I.wireframeLinewidth,v.linewidth=I.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const B=n.properties.get(v);B.light=R}return v}function M(D,I,R,x,v){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&v===ai)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,D.matrixWorld);const z=e.update(D),ne=D.material;if(Array.isArray(ne)){const ue=z.groups;for(let X=0,ee=ue.length;X<ee;X++){const G=ue[X],oe=ne[G.materialIndex];if(oe&&oe.visible){const ce=T(D,oe,x,v);D.onBeforeShadow(n,D,I,R,z,ce,G),n.renderBufferDirect(R,null,z,ce,D,G),D.onAfterShadow(n,D,I,R,z,ce,G)}}}else if(ne.visible){const ue=T(D,ne,x,v);D.onBeforeShadow(n,D,I,R,z,ue,null),n.renderBufferDirect(R,null,z,ue,D,null),D.onAfterShadow(n,D,I,R,z,ue,null)}}const B=D.children;for(let z=0,ne=B.length;z<ne;z++)M(B[z],I,R,x,v)}function O(D){D.target.removeEventListener("dispose",O);for(const R in c){const x=c[R],v=D.target.uuid;v in x&&(x[v].dispose(),delete x[v])}}}const HT={[mc]:gc,[_c]:yc,[vc]:Mc,[cr]:xc,[gc]:mc,[yc]:_c,[Mc]:vc,[xc]:cr};function VT(n,e){function t(){let F=!1;const Ee=new rt;let se=null;const fe=new rt(0,0,0,0);return{setMask:function(Re){se!==Re&&!F&&(n.colorMask(Re,Re,Re,Re),se=Re)},setLocked:function(Re){F=Re},setClear:function(Re,Te,je,Et,Ht){Ht===!0&&(Re*=Et,Te*=Et,je*=Et),Ee.set(Re,Te,je,Et),fe.equals(Ee)===!1&&(n.clearColor(Re,Te,je,Et),fe.copy(Ee))},reset:function(){F=!1,se=null,fe.set(-1,0,0,0)}}}function i(){let F=!1,Ee=!1,se=null,fe=null,Re=null;return{setReversed:function(Te){if(Ee!==Te){const je=e.get("EXT_clip_control");Ee?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);const Et=Re;Re=null,this.setClear(Et)}Ee=Te},getReversed:function(){return Ee},setTest:function(Te){Te?N(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(Te){se!==Te&&!F&&(n.depthMask(Te),se=Te)},setFunc:function(Te){if(Ee&&(Te=HT[Te]),fe!==Te){switch(Te){case mc:n.depthFunc(n.NEVER);break;case gc:n.depthFunc(n.ALWAYS);break;case _c:n.depthFunc(n.LESS);break;case cr:n.depthFunc(n.LEQUAL);break;case vc:n.depthFunc(n.EQUAL);break;case xc:n.depthFunc(n.GEQUAL);break;case yc:n.depthFunc(n.GREATER);break;case Mc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=Te}},setLocked:function(Te){F=Te},setClear:function(Te){Re!==Te&&(Ee&&(Te=1-Te),n.clearDepth(Te),Re=Te)},reset:function(){F=!1,se=null,fe=null,Re=null,Ee=!1}}}function s(){let F=!1,Ee=null,se=null,fe=null,Re=null,Te=null,je=null,Et=null,Ht=null;return{setTest:function(ut){F||(ut?N(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(ut){Ee!==ut&&!F&&(n.stencilMask(ut),Ee=ut)},setFunc:function(ut,bn,Zn){(se!==ut||fe!==bn||Re!==Zn)&&(n.stencilFunc(ut,bn,Zn),se=ut,fe=bn,Re=Zn)},setOp:function(ut,bn,Zn){(Te!==ut||je!==bn||Et!==Zn)&&(n.stencilOp(ut,bn,Zn),Te=ut,je=bn,Et=Zn)},setLocked:function(ut){F=ut},setClear:function(ut){Ht!==ut&&(n.clearStencil(ut),Ht=ut)},reset:function(){F=!1,Ee=null,se=null,fe=null,Re=null,Te=null,je=null,Et=null,Ht=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,T=null,M=null,O=null,D=null,I=new $e(0,0,0),R=0,x=!1,v=null,C=null,B=null,z=null,ne=null;const ue=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ee=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=ee>=1):G.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=ee>=2);let oe=null,ce={};const le=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),Pe=new rt().fromArray(le),J=new rt().fromArray(Ce);function pe(F,Ee,se,fe){const Re=new Uint8Array(4),Te=n.createTexture();n.bindTexture(F,Te),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<se;je++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(Ee+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return Te}const _e={};_e[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(n.DEPTH_TEST),o.setFunc(cr),q(!1),W(Qh),N(n.CULL_FACE),b(Wi);function N(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function ae(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Z(F,Ee){return h[F]!==Ee?(n.bindFramebuffer(F,Ee),h[F]=Ee,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ee),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function me(F,Ee){let se=d,fe=!1;if(F){se=f.get(Ee),se===void 0&&(se=[],f.set(Ee,se));const Re=F.textures;if(se.length!==Re.length||se[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,je=Re.length;Te<je;Te++)se[Te]=n.COLOR_ATTACHMENT0+Te;se.length=Re.length,fe=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,fe=!0);fe&&n.drawBuffers(se)}function Oe(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const w={[fs]:n.FUNC_ADD,[H0]:n.FUNC_SUBTRACT,[V0]:n.FUNC_REVERSE_SUBTRACT};w[z0]=n.MIN,w[G0]=n.MAX;const P={[W0]:n.ZERO,[X0]:n.ONE,[$0]:n.SRC_COLOR,[dc]:n.SRC_ALPHA,[J0]:n.SRC_ALPHA_SATURATE,[Y0]:n.DST_COLOR,[q0]:n.DST_ALPHA,[j0]:n.ONE_MINUS_SRC_COLOR,[pc]:n.ONE_MINUS_SRC_ALPHA,[Z0]:n.ONE_MINUS_DST_COLOR,[K0]:n.ONE_MINUS_DST_ALPHA,[Q0]:n.CONSTANT_COLOR,[ey]:n.ONE_MINUS_CONSTANT_COLOR,[ty]:n.CONSTANT_ALPHA,[ny]:n.ONE_MINUS_CONSTANT_ALPHA};function b(F,Ee,se,fe,Re,Te,je,Et,Ht,ut){if(F===Wi){_===!0&&(ae(n.BLEND),_=!1);return}if(_===!1&&(N(n.BLEND),_=!0),F!==k0){if(F!==m||ut!==x){if((p!==fs||M!==fs)&&(n.blendEquation(n.FUNC_ADD),p=fs,M=fs),ut)switch(F){case er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ef:n.blendFunc(n.ONE,n.ONE);break;case tf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ef:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case tf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,T=null,O=null,D=null,I.set(0,0,0),R=0,m=F,x=ut}return}Re=Re||Ee,Te=Te||se,je=je||fe,(Ee!==p||Re!==M)&&(n.blendEquationSeparate(w[Ee],w[Re]),p=Ee,M=Re),(se!==E||fe!==T||Te!==O||je!==D)&&(n.blendFuncSeparate(P[se],P[fe],P[Te],P[je]),E=se,T=fe,O=Te,D=je),(Et.equals(I)===!1||Ht!==R)&&(n.blendColor(Et.r,Et.g,Et.b,Ht),I.copy(Et),R=Ht),m=F,x=!1}function te(F,Ee){F.side===Gn?ae(n.CULL_FACE):N(n.CULL_FACE);let se=F.side===rn;Ee&&(se=!se),q(se),F.blending===er&&F.transparent===!1?b(Wi):b(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const fe=F.stencilWrite;a.setTest(fe),fe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),he(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?N(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(F){v!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),v=F)}function W(F){F!==O0?(N(n.CULL_FACE),F!==C&&(F===Qh?n.cullFace(n.BACK):F===F0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),C=F}function ie(F){F!==B&&(X&&n.lineWidth(F),B=F)}function he(F,Ee,se){F?(N(n.POLYGON_OFFSET_FILL),(z!==Ee||ne!==se)&&(n.polygonOffset(Ee,se),z=Ee,ne=se)):ae(n.POLYGON_OFFSET_FILL)}function Q(F){F?N(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function S(F){F===void 0&&(F=n.TEXTURE0+ue-1),oe!==F&&(n.activeTexture(F),oe=F)}function y(F,Ee,se){se===void 0&&(oe===null?se=n.TEXTURE0+ue-1:se=oe);let fe=ce[se];fe===void 0&&(fe={type:void 0,texture:void 0},ce[se]=fe),(fe.type!==F||fe.texture!==Ee)&&(oe!==se&&(n.activeTexture(se),oe=se),n.bindTexture(F,Ee||_e[F]),fe.type=F,fe.texture=Ee)}function L(){const F=ce[oe];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function U(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ve(F){Pe.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Pe.copy(F))}function Me(F){J.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),J.copy(F))}function ze(F,Ee){let se=c.get(Ee);se===void 0&&(se=new WeakMap,c.set(Ee,se));let fe=se.get(F);fe===void 0&&(fe=n.getUniformBlockIndex(Ee,F.name),se.set(F,fe))}function We(F,Ee){const fe=c.get(Ee).get(F);l.get(Ee)!==fe&&(n.uniformBlockBinding(Ee,fe,F.__bindingPointIndex),l.set(Ee,fe))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},oe=null,ce={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,T=null,M=null,O=null,D=null,I=new $e(0,0,0),R=0,x=!1,v=null,C=null,B=null,z=null,ne=null,Pe.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:N,disable:ae,bindFramebuffer:Z,drawBuffers:me,useProgram:Oe,setBlending:b,setMaterial:te,setFlipSided:q,setCullFace:W,setLineWidth:ie,setPolygonOffset:he,setScissorTest:Q,activeTexture:S,bindTexture:y,unbindTexture:L,compressedTexImage2D:U,compressedTexImage3D:j,texImage2D:be,texImage3D:Fe,updateUBOMapping:ze,uniformBlockBinding:We,texStorage2D:He,texStorage3D:ge,texSubImage2D:$,texSubImage3D:xe,compressedTexSubImage2D:de,compressedTexSubImage3D:ye,scissor:Ve,viewport:Me,reset:gt}}function td(n,e,t,i){const s=zT(i);switch(t){case cm:return n*e;case hm:return n*e;case fm:return n*e*2;case Iu:return n*e/s.components*s.byteLength;case Du:return n*e/s.components*s.byteLength;case dm:return n*e*2/s.components*s.byteLength;case Nu:return n*e*2/s.components*s.byteLength;case um:return n*e*3/s.components*s.byteLength;case xn:return n*e*4/s.components*s.byteLength;case Uu:return n*e*4/s.components*s.byteLength;case fa:case da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pa:case ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tc:case wc:return Math.max(n,16)*Math.max(e,8)/4;case Ec:case Ac:return Math.max(n,8)*Math.max(e,8)/2;case Rc:case Cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case kc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ga:case Xc:case $c:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pm:case jc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case qc:case Kc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zT(n){switch(n){case Mi:case om:return{byteLength:1,components:1};case po:case am:case Eo:return{byteLength:2,components:1};case Pu:case Lu:return{byteLength:2,components:4};case bs:case Cu:case Ln:return{byteLength:4,components:1};case lm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function GT(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return d?new OffscreenCanvas(S,y):_o("canvas")}function _(S,y,L){let U=1;const j=Q(S);if((j.width>L||j.height>L)&&(U=L/Math.max(j.width,j.height)),U<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const $=Math.floor(U*j.width),xe=Math.floor(U*j.height);h===void 0&&(h=g($,xe));const de=y?g($,xe):h;return de.width=$,de.height=xe,de.getContext("2d").drawImage(S,0,0,$,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+xe+")."),de}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){n.generateMipmap(S)}function E(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(S,y,L,U,j=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let $=y;if(y===n.RED&&(L===n.FLOAT&&($=n.R32F),L===n.HALF_FLOAT&&($=n.R16F),L===n.UNSIGNED_BYTE&&($=n.R8)),y===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&($=n.R8UI),L===n.UNSIGNED_SHORT&&($=n.R16UI),L===n.UNSIGNED_INT&&($=n.R32UI),L===n.BYTE&&($=n.R8I),L===n.SHORT&&($=n.R16I),L===n.INT&&($=n.R32I)),y===n.RG&&(L===n.FLOAT&&($=n.RG32F),L===n.HALF_FLOAT&&($=n.RG16F),L===n.UNSIGNED_BYTE&&($=n.RG8)),y===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&($=n.RG8UI),L===n.UNSIGNED_SHORT&&($=n.RG16UI),L===n.UNSIGNED_INT&&($=n.RG32UI),L===n.BYTE&&($=n.RG8I),L===n.SHORT&&($=n.RG16I),L===n.INT&&($=n.RG32I)),y===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&($=n.RGB8UI),L===n.UNSIGNED_SHORT&&($=n.RGB16UI),L===n.UNSIGNED_INT&&($=n.RGB32UI),L===n.BYTE&&($=n.RGB8I),L===n.SHORT&&($=n.RGB16I),L===n.INT&&($=n.RGB32I)),y===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&($=n.RGBA8UI),L===n.UNSIGNED_SHORT&&($=n.RGBA16UI),L===n.UNSIGNED_INT&&($=n.RGBA32UI),L===n.BYTE&&($=n.RGBA8I),L===n.SHORT&&($=n.RGBA16I),L===n.INT&&($=n.RGBA32I)),y===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),y===n.RGBA){const xe=j?ja:Qe.getTransfer(U);L===n.FLOAT&&($=n.RGBA32F),L===n.HALF_FLOAT&&($=n.RGBA16F),L===n.UNSIGNED_BYTE&&($=xe===pt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(S,y){let L;return S?y===null||y===bs||y===dr?L=n.DEPTH24_STENCIL8:y===Ln?L=n.DEPTH32F_STENCIL8:y===po&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===bs||y===dr?L=n.DEPTH_COMPONENT24:y===Ln?L=n.DEPTH_COMPONENT32F:y===po&&(L=n.DEPTH_COMPONENT16),L}function O(S,y){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Qt&&S.minFilter!==fn?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function D(S){const y=S.target;y.removeEventListener("dispose",D),R(y),y.isVideoTexture&&u.delete(y)}function I(S){const y=S.target;y.removeEventListener("dispose",I),v(y)}function R(S){const y=i.get(S);if(y.__webglInit===void 0)return;const L=S.source,U=f.get(L);if(U){const j=U[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&x(S),Object.keys(U).length===0&&f.delete(L)}i.remove(S)}function x(S){const y=i.get(S);n.deleteTexture(y.__webglTexture);const L=S.source,U=f.get(L);delete U[y.__cacheKey],o.memory.textures--}function v(S){const y=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(y.__webglFramebuffer[U]))for(let j=0;j<y.__webglFramebuffer[U].length;j++)n.deleteFramebuffer(y.__webglFramebuffer[U][j]);else n.deleteFramebuffer(y.__webglFramebuffer[U]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[U])}else{if(Array.isArray(y.__webglFramebuffer))for(let U=0;U<y.__webglFramebuffer.length;U++)n.deleteFramebuffer(y.__webglFramebuffer[U]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let U=0;U<y.__webglColorRenderbuffer.length;U++)y.__webglColorRenderbuffer[U]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[U]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const L=S.textures;for(let U=0,j=L.length;U<j;U++){const $=i.get(L[U]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(L[U])}i.remove(S)}let C=0;function B(){C=0}function z(){const S=C;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),C+=1,S}function ne(S){const y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function ue(S,y){const L=i.get(S);if(S.isVideoTexture&&ie(S),S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){const U=S.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(L,S,y);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+y)}function X(S,y){const L=i.get(S);if(S.version>0&&L.__version!==S.version){J(L,S,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+y)}function ee(S,y){const L=i.get(S);if(S.version>0&&L.__version!==S.version){J(L,S,y);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+y)}function G(S,y){const L=i.get(S);if(S.version>0&&L.__version!==S.version){pe(L,S,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+y)}const oe={[fr]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[wa]:n.MIRRORED_REPEAT},ce={[Qt]:n.NEAREST,[rm]:n.NEAREST_MIPMAP_NEAREST,[Vr]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[ha]:n.LINEAR_MIPMAP_NEAREST,[di]:n.LINEAR_MIPMAP_LINEAR},le={[vy]:n.NEVER,[Ey]:n.ALWAYS,[xy]:n.LESS,[_m]:n.LEQUAL,[yy]:n.EQUAL,[by]:n.GEQUAL,[My]:n.GREATER,[Sy]:n.NOTEQUAL};function Ce(S,y){if(y.type===Ln&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===fn||y.magFilter===ha||y.magFilter===Vr||y.magFilter===di||y.minFilter===fn||y.minFilter===ha||y.minFilter===Vr||y.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,oe[y.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,oe[y.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,oe[y.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ce[y.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ce[y.minFilter]),y.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,le[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Qt||y.minFilter!==Vr&&y.minFilter!==di||y.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Pe(S,y){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",D));const U=y.source;let j=f.get(U);j===void 0&&(j={},f.set(U,j));const $=ne(y);if($!==S.__cacheKey){j[$]===void 0&&(j[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),j[$].usedTimes++;const xe=j[S.__cacheKey];xe!==void 0&&(j[S.__cacheKey].usedTimes--,xe.usedTimes===0&&x(y)),S.__cacheKey=$,S.__webglTexture=j[$].texture}return L}function J(S,y,L){let U=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(U=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(U=n.TEXTURE_3D);const j=Pe(S,y),$=y.source;t.bindTexture(U,S.__webglTexture,n.TEXTURE0+L);const xe=i.get($);if($.version!==xe.__version||j===!0){t.activeTexture(n.TEXTURE0+L);const de=Qe.getPrimaries(Qe.workingColorSpace),ye=y.colorSpace===Hi?null:Qe.getPrimaries(y.colorSpace),He=y.colorSpace===Hi||de===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ge=_(y.image,!1,s.maxTextureSize);ge=he(y,ge);const be=r.convert(y.format,y.colorSpace),Fe=r.convert(y.type);let Ve=T(y.internalFormat,be,Fe,y.colorSpace,y.isVideoTexture);Ce(U,y);let Me;const ze=y.mipmaps,We=y.isVideoTexture!==!0,gt=xe.__version===void 0||j===!0,F=$.dataReady,Ee=O(y,ge);if(y.isDepthTexture)Ve=M(y.format===pr,y.type),gt&&(We?t.texStorage2D(n.TEXTURE_2D,1,Ve,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,Ve,ge.width,ge.height,0,be,Fe,null));else if(y.isDataTexture)if(ze.length>0){We&&gt&&t.texStorage2D(n.TEXTURE_2D,Ee,Ve,ze[0].width,ze[0].height);for(let se=0,fe=ze.length;se<fe;se++)Me=ze[se],We?F&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Me.width,Me.height,be,Fe,Me.data):t.texImage2D(n.TEXTURE_2D,se,Ve,Me.width,Me.height,0,be,Fe,Me.data);y.generateMipmaps=!1}else We?(gt&&t.texStorage2D(n.TEXTURE_2D,Ee,Ve,ge.width,ge.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge.width,ge.height,be,Fe,ge.data)):t.texImage2D(n.TEXTURE_2D,0,Ve,ge.width,ge.height,0,be,Fe,ge.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){We&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ve,ze[0].width,ze[0].height,ge.depth);for(let se=0,fe=ze.length;se<fe;se++)if(Me=ze[se],y.format!==xn)if(be!==null)if(We){if(F)if(y.layerUpdates.size>0){const Re=td(Me.width,Me.height,y.format,y.type);for(const Te of y.layerUpdates){const je=Me.data.subarray(Te*Re/Me.data.BYTES_PER_ELEMENT,(Te+1)*Re/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,Te,Me.width,Me.height,1,be,je)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Me.width,Me.height,ge.depth,be,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Ve,Me.width,Me.height,ge.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Me.width,Me.height,ge.depth,be,Fe,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Ve,Me.width,Me.height,ge.depth,0,be,Fe,Me.data)}else{We&&gt&&t.texStorage2D(n.TEXTURE_2D,Ee,Ve,ze[0].width,ze[0].height);for(let se=0,fe=ze.length;se<fe;se++)Me=ze[se],y.format!==xn?be!==null?We?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,Me.width,Me.height,be,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Ve,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?F&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Me.width,Me.height,be,Fe,Me.data):t.texImage2D(n.TEXTURE_2D,se,Ve,Me.width,Me.height,0,be,Fe,Me.data)}else if(y.isDataArrayTexture)if(We){if(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ve,ge.width,ge.height,ge.depth),F)if(y.layerUpdates.size>0){const se=td(ge.width,ge.height,y.format,y.type);for(const fe of y.layerUpdates){const Re=ge.data.subarray(fe*se/ge.data.BYTES_PER_ELEMENT,(fe+1)*se/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,ge.width,ge.height,1,be,Fe,Re)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,be,Fe,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,ge.width,ge.height,ge.depth,0,be,Fe,ge.data);else if(y.isData3DTexture)We?(gt&&t.texStorage3D(n.TEXTURE_3D,Ee,Ve,ge.width,ge.height,ge.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,be,Fe,ge.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,ge.width,ge.height,ge.depth,0,be,Fe,ge.data);else if(y.isFramebufferTexture){if(gt)if(We)t.texStorage2D(n.TEXTURE_2D,Ee,Ve,ge.width,ge.height);else{let se=ge.width,fe=ge.height;for(let Re=0;Re<Ee;Re++)t.texImage2D(n.TEXTURE_2D,Re,Ve,se,fe,0,be,Fe,null),se>>=1,fe>>=1}}else if(ze.length>0){if(We&&gt){const se=Q(ze[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Ve,se.width,se.height)}for(let se=0,fe=ze.length;se<fe;se++)Me=ze[se],We?F&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,be,Fe,Me):t.texImage2D(n.TEXTURE_2D,se,Ve,be,Fe,Me);y.generateMipmaps=!1}else if(We){if(gt){const se=Q(ge);t.texStorage2D(n.TEXTURE_2D,Ee,Ve,se.width,se.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Fe,ge)}else t.texImage2D(n.TEXTURE_2D,0,Ve,be,Fe,ge);m(y)&&p(U),xe.__version=$.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function pe(S,y,L){if(y.image.length!==6)return;const U=Pe(S,y),j=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+L);const $=i.get(j);if(j.version!==$.__version||U===!0){t.activeTexture(n.TEXTURE0+L);const xe=Qe.getPrimaries(Qe.workingColorSpace),de=y.colorSpace===Hi?null:Qe.getPrimaries(y.colorSpace),ye=y.colorSpace===Hi||xe===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const He=y.isCompressedTexture||y.image[0].isCompressedTexture,ge=y.image[0]&&y.image[0].isDataTexture,be=[];for(let fe=0;fe<6;fe++)!He&&!ge?be[fe]=_(y.image[fe],!0,s.maxCubemapSize):be[fe]=ge?y.image[fe].image:y.image[fe],be[fe]=he(y,be[fe]);const Fe=be[0],Ve=r.convert(y.format,y.colorSpace),Me=r.convert(y.type),ze=T(y.internalFormat,Ve,Me,y.colorSpace),We=y.isVideoTexture!==!0,gt=$.__version===void 0||U===!0,F=j.dataReady;let Ee=O(y,Fe);Ce(n.TEXTURE_CUBE_MAP,y);let se;if(He){We&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,ze,Fe.width,Fe.height);for(let fe=0;fe<6;fe++){se=be[fe].mipmaps;for(let Re=0;Re<se.length;Re++){const Te=se[Re];y.format!==xn?Ve!==null?We?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re,0,0,Te.width,Te.height,Ve,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re,ze,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re,0,0,Te.width,Te.height,Ve,Me,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re,ze,Te.width,Te.height,0,Ve,Me,Te.data)}}}else{if(se=y.mipmaps,We&&gt){se.length>0&&Ee++;const fe=Q(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,ze,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ge){We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,be[fe].width,be[fe].height,Ve,Me,be[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ze,be[fe].width,be[fe].height,0,Ve,Me,be[fe].data);for(let Re=0;Re<se.length;Re++){const je=se[Re].image[fe].image;We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re+1,0,0,je.width,je.height,Ve,Me,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re+1,ze,je.width,je.height,0,Ve,Me,je.data)}}else{We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ve,Me,be[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ze,Ve,Me,be[fe]);for(let Re=0;Re<se.length;Re++){const Te=se[Re];We?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re+1,0,0,Ve,Me,Te.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re+1,ze,Ve,Me,Te.image[fe])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),$.__version=j.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function _e(S,y,L,U,j,$){const xe=r.convert(L.format,L.colorSpace),de=r.convert(L.type),ye=T(L.internalFormat,xe,de,L.colorSpace),He=i.get(y),ge=i.get(L);if(ge.__renderTarget=y,!He.__hasExternalTextures){const be=Math.max(1,y.width>>$),Fe=Math.max(1,y.height>>$);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,$,ye,be,Fe,y.depth,0,xe,de,null):t.texImage2D(j,$,ye,be,Fe,0,xe,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),W(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,U,j,ge.__webglTexture,0,q(y)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,U,j,ge.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function N(S,y,L){if(n.bindRenderbuffer(n.RENDERBUFFER,S),y.depthBuffer){const U=y.depthTexture,j=U&&U.isDepthTexture?U.type:null,$=M(y.stencilBuffer,j),xe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=q(y);W(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,$,y.width,y.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,$,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,$,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,S)}else{const U=y.textures;for(let j=0;j<U.length;j++){const $=U[j],xe=r.convert($.format,$.colorSpace),de=r.convert($.type),ye=T($.internalFormat,xe,de,$.colorSpace),He=q(y);L&&W(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,He,ye,y.width,y.height):W(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He,ye,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ye,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const U=i.get(y.depthTexture);U.__renderTarget=y,(!U.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ue(y.depthTexture,0);const j=U.__webglTexture,$=q(y);if(y.depthTexture.format===tr)W(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(y.depthTexture.format===pr)W(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Z(S){const y=i.get(S),L=S.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==S.depthTexture){const U=S.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),U){const j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,U.removeEventListener("dispose",j)};U.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=U}if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");ae(y.__webglFramebuffer,S)}else if(L){y.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[U]),y.__webglDepthbuffer[U]===void 0)y.__webglDepthbuffer[U]=n.createRenderbuffer(),N(y.__webglDepthbuffer[U],S,!1);else{const j=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[U];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),N(y.__webglDepthbuffer,S,!1);else{const U=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,U,n.RENDERBUFFER,j)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(S,y,L){const U=i.get(S);y!==void 0&&_e(U.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Z(S)}function Oe(S){const y=S.texture,L=i.get(S),U=i.get(y);S.addEventListener("dispose",I);const j=S.textures,$=S.isWebGLCubeRenderTarget===!0,xe=j.length>1;if(xe||(U.__webglTexture===void 0&&(U.__webglTexture=n.createTexture()),U.__version=y.version,o.memory.textures++),$){L.__webglFramebuffer=[];for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer[de]=[];for(let ye=0;ye<y.mipmaps.length;ye++)L.__webglFramebuffer[de][ye]=n.createFramebuffer()}else L.__webglFramebuffer[de]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)L.__webglFramebuffer[de]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(xe)for(let de=0,ye=j.length;de<ye;de++){const He=i.get(j[de]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&W(S)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let de=0;de<j.length;de++){const ye=j[de];L.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[de]);const He=r.convert(ye.format,ye.colorSpace),ge=r.convert(ye.type),be=T(ye.internalFormat,He,ge,ye.colorSpace,S.isXRRenderTarget===!0),Fe=q(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,be,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,L.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),N(L.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,y);for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)_e(L.__webglFramebuffer[de][ye],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ye);else _e(L.__webglFramebuffer[de],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let de=0,ye=j.length;de<ye;de++){const He=j[de],ge=i.get(He);t.bindTexture(n.TEXTURE_2D,ge.__webglTexture),Ce(n.TEXTURE_2D,He),_e(L.__webglFramebuffer,S,He,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),m(He)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(de=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,U.__webglTexture),Ce(de,y),y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)_e(L.__webglFramebuffer[ye],S,y,n.COLOR_ATTACHMENT0,de,ye);else _e(L.__webglFramebuffer,S,y,n.COLOR_ATTACHMENT0,de,0);m(y)&&p(de),t.unbindTexture()}S.depthBuffer&&Z(S)}function w(S){const y=S.textures;for(let L=0,U=y.length;L<U;L++){const j=y[L];if(m(j)){const $=E(S),xe=i.get(j).__webglTexture;t.bindTexture($,xe),p($),t.unbindTexture()}}}const P=[],b=[];function te(S){if(S.samples>0){if(W(S)===!1){const y=S.textures,L=S.width,U=S.height;let j=n.COLOR_BUFFER_BIT;const $=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(S),de=y.length>1;if(de)for(let ye=0;ye<y.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ye=0;ye<y.length;ye++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);const He=i.get(y[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,He,0)}n.blitFramebuffer(0,0,L,U,0,0,L,U,j,n.NEAREST),l===!0&&(P.length=0,b.length=0,P.push(n.COLOR_ATTACHMENT0+ye),S.depthBuffer&&S.resolveDepthBuffer===!1&&(P.push($),b.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,b)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let ye=0;ye<y.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);const He=i.get(y[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function q(S){return Math.min(s.maxSamples,S.samples)}function W(S){const y=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ie(S){const y=o.render.frame;u.get(S)!==y&&(u.set(S,y),S.update())}function he(S,y){const L=S.colorSpace,U=S.format,j=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==tn&&L!==Hi&&(Qe.getTransfer(L)===pt?(U!==xn||j!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),y}function Q(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=ue,this.setTexture2DArray=X,this.setTexture3D=ee,this.setTextureCube=G,this.rebindTextures=me,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=W}function WT(n,e){function t(i,s=Hi){let r;const o=Qe.getTransfer(s);if(i===Mi)return n.UNSIGNED_BYTE;if(i===Pu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===om)return n.BYTE;if(i===am)return n.SHORT;if(i===po)return n.UNSIGNED_SHORT;if(i===Cu)return n.INT;if(i===bs)return n.UNSIGNED_INT;if(i===Ln)return n.FLOAT;if(i===Eo)return n.HALF_FLOAT;if(i===cm)return n.ALPHA;if(i===um)return n.RGB;if(i===xn)return n.RGBA;if(i===hm)return n.LUMINANCE;if(i===fm)return n.LUMINANCE_ALPHA;if(i===tr)return n.DEPTH_COMPONENT;if(i===pr)return n.DEPTH_STENCIL;if(i===Iu)return n.RED;if(i===Du)return n.RED_INTEGER;if(i===dm)return n.RG;if(i===Nu)return n.RG_INTEGER;if(i===Uu)return n.RGBA_INTEGER;if(i===fa||i===da||i===pa||i===ma)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ec||i===Tc||i===Ac||i===wc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rc||i===Cc||i===Pc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Rc||i===Cc)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lc||i===Ic||i===Dc||i===Nc||i===Uc||i===Oc||i===Fc||i===Bc||i===kc||i===Hc||i===Vc||i===zc||i===Gc||i===Wc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Lc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ic)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ga||i===Xc||i===$c)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ga)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pm||i===jc||i===qc||i===Kc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ga)return r.COMPRESSED_RED_RGTC1_EXT;if(i===jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class XT extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gs extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $T={type:"move"};class Vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($T)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const jT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qT=`
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

}`;class KT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ut,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ji({vertexShader:jT,fragmentShader:qT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YT extends As{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new KT,m=t.getContextAttributes();let p=null,E=null;const T=[],M=[],O=new et;let D=null;const I=new Jt;I.viewport=new rt;const R=new Jt;R.viewport=new rt;const x=[I,R],v=new XT;let C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let pe=T[J];return pe===void 0&&(pe=new Vl,T[J]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(J){let pe=T[J];return pe===void 0&&(pe=new Vl,T[J]=pe),pe.getGripSpace()},this.getHand=function(J){let pe=T[J];return pe===void 0&&(pe=new Vl,T[J]=pe),pe.getHandSpace()};function z(J){const pe=M.indexOf(J.inputSource);if(pe===-1)return;const _e=T[pe];_e!==void 0&&(_e.update(J.inputSource,J.frame,c||o),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function ne(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",ue);for(let J=0;J<T.length;J++){const pe=M[J];pe!==null&&(M[J]=null,T[J].disconnect(pe))}C=null,B=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,E=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",ue),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0){const pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new Es(d.framebufferWidth,d.framebufferHeight,{format:xn,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let pe=null,_e=null,N=null;m.depth&&(N=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=m.stencil?pr:tr,_e=m.stencil?dr:bs);const ae={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(ae),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Es(f.textureWidth,f.textureHeight,{format:xn,type:Mi,depthTexture:new Cm(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Pe.setContext(s),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ue(J){for(let pe=0;pe<J.removed.length;pe++){const _e=J.removed[pe],N=M.indexOf(_e);N>=0&&(M[N]=null,T[N].disconnect(_e))}for(let pe=0;pe<J.added.length;pe++){const _e=J.added[pe];let N=M.indexOf(_e);if(N===-1){for(let Z=0;Z<T.length;Z++)if(Z>=M.length){M.push(_e),N=Z;break}else if(M[Z]===null){M[Z]=_e,N=Z;break}if(N===-1)break}const ae=T[N];ae&&ae.connect(_e)}}const X=new k,ee=new k;function G(J,pe,_e){X.setFromMatrixPosition(pe.matrixWorld),ee.setFromMatrixPosition(_e.matrixWorld);const N=X.distanceTo(ee),ae=pe.projectionMatrix.elements,Z=_e.projectionMatrix.elements,me=ae[14]/(ae[10]-1),Oe=ae[14]/(ae[10]+1),w=(ae[9]+1)/ae[5],P=(ae[9]-1)/ae[5],b=(ae[8]-1)/ae[0],te=(Z[8]+1)/Z[0],q=me*b,W=me*te,ie=N/(-b+te),he=ie*-b;if(pe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(he),J.translateZ(ie),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ae[10]===-1)J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Q=me+ie,S=Oe+ie,y=q-he,L=W+(N-he),U=w*Oe/S*Q,j=P*Oe/S*Q;J.projectionMatrix.makePerspective(y,L,U,j,Q,S),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function oe(J,pe){pe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(pe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let pe=J.near,_e=J.far;_.texture!==null&&(_.depthNear>0&&(pe=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),v.near=R.near=I.near=pe,v.far=R.far=I.far=_e,(C!==v.near||B!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,B=v.far),I.layers.mask=J.layers.mask|2,R.layers.mask=J.layers.mask|4,v.layers.mask=I.layers.mask|R.layers.mask;const N=J.parent,ae=v.cameras;oe(v,N);for(let Z=0;Z<ae.length;Z++)oe(ae[Z],N);ae.length===2?G(v,I,R):v.projectionMatrix.copy(I.projectionMatrix),ce(J,v,N)};function ce(J,pe,_e){_e===null?J.matrix.copy(pe.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(pe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=mr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let le=null;function Ce(J,pe){if(u=pe.getViewerPose(c||o),g=pe,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let N=!1;_e.length!==v.cameras.length&&(v.cameras.length=0,N=!0);for(let Z=0;Z<_e.length;Z++){const me=_e[Z];let Oe=null;if(d!==null)Oe=d.getViewport(me);else{const P=h.getViewSubImage(f,me);Oe=P.viewport,Z===0&&(e.setRenderTargetTextures(E,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(E))}let w=x[Z];w===void 0&&(w=new Jt,w.layers.enable(Z),w.viewport=new rt,x[Z]=w),w.matrix.fromArray(me.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(me.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Z===0&&(v.matrix.copy(w.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),N===!0&&v.cameras.push(w)}const ae=s.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const Z=h.getDepthInformation(_e[0]);Z&&Z.isValid&&Z.texture&&_.init(e,Z,s.renderState)}}for(let _e=0;_e<T.length;_e++){const N=M[_e],ae=T[_e];N!==null&&ae!==void 0&&ae.update(N,pe,c||o)}le&&le(J,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),g=null}const Pe=new Rm;Pe.setAnimationLoop(Ce),this.setAnimationLoop=function(J){le=J},this.dispose=function(){}}}const as=new On,ZT=new Ye;function JT(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Tm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,T,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),T=E.envMap,M=E.envMapRotation;T&&(m.envMap.value=T,as.copy(M),as.x*=-1,as.y*=-1,as.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.envMapRotation.value.setFromMatrix4(ZT.makeRotationFromEuler(as)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function QT(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const M=T.program;i.uniformBlockBinding(E,M)}function c(E,T){let M=s[E.id];M===void 0&&(g(E),M=u(E),s[E.id]=M,E.addEventListener("dispose",m));const O=T.program;i.updateUBOMapping(E,O);const D=e.render.frame;r[E.id]!==D&&(f(E),r[E.id]=D)}function u(E){const T=h();E.__bindingPointIndex=T;const M=n.createBuffer(),O=E.__size,D=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,O,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,M),M}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const T=s[E.id],M=E.uniforms,O=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let D=0,I=M.length;D<I;D++){const R=Array.isArray(M[D])?M[D]:[M[D]];for(let x=0,v=R.length;x<v;x++){const C=R[x];if(d(C,D,x,O)===!0){const B=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let ne=0;for(let ue=0;ue<z.length;ue++){const X=z[ue],ee=_(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,B+ne,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,ne),ne+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,T,M,O){const D=E.value,I=T+"_"+M;if(O[I]===void 0)return typeof D=="number"||typeof D=="boolean"?O[I]=D:O[I]=D.clone(),!0;{const R=O[I];if(typeof D=="number"||typeof D=="boolean"){if(R!==D)return O[I]=D,!0}else if(R.equals(D)===!1)return R.copy(D),!0}return!1}function g(E){const T=E.uniforms;let M=0;const O=16;for(let I=0,R=T.length;I<R;I++){const x=Array.isArray(T[I])?T[I]:[T[I]];for(let v=0,C=x.length;v<C;v++){const B=x[v],z=Array.isArray(B.value)?B.value:[B.value];for(let ne=0,ue=z.length;ne<ue;ne++){const X=z[ne],ee=_(X),G=M%O,oe=G%ee.boundary,ce=G+oe;M+=oe,ce!==0&&O-ce<ee.storage&&(M+=O-ce),B.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=ee.storage}}}const D=M%O;return D>0&&(M+=O-D),E.__size=M,E.__cache={},this}function _(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class eA{constructor(e={}){const{canvas:t=zy(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=Xi,this.toneMappingExposure=1;const M=this;let O=!1,D=0,I=0,R=null,x=-1,v=null;const C=new rt,B=new rt;let z=null;const ne=new $e(0);let ue=0,X=t.width,ee=t.height,G=1,oe=null,ce=null;const le=new rt(0,0,X,ee),Ce=new rt(0,0,X,ee);let Pe=!1;const J=new Fu;let pe=!1,_e=!1;const N=new Ye,ae=new Ye,Z=new k,me=new rt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function P(){return R===null?G:1}let b=i;function te(A,H){return t.getContext(A,H)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ru}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Te,!1),b===null){const H="webgl2";if(b=te(H,A),b===null)throw te(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let q,W,ie,he,Q,S,y,L,U,j,$,xe,de,ye,He,ge,be,Fe,Ve,Me,ze,We,gt,F;function Ee(){q=new rE(b),q.init(),We=new WT(b,q),W=new Qb(b,q,e,We),ie=new VT(b,q),W.reverseDepthBuffer&&f&&ie.buffers.depth.setReversed(!0),he=new lE(b),Q=new AT,S=new GT(b,q,ie,Q,W,We,he),y=new tE(M),L=new sE(M),U=new mM(b),gt=new Zb(b,U),j=new oE(b,U,he,gt),$=new uE(b,j,U,he),Ve=new cE(b,W,S),ge=new eE(Q),xe=new TT(M,y,L,q,W,gt,ge),de=new JT(M,Q),ye=new RT,He=new NT(q),Fe=new Yb(M,y,L,ie,$,d,l),be=new kT(M,$,W),F=new QT(b,he,W,ie),Me=new Jb(b,q,he),ze=new aE(b,q,he),he.programs=xe.programs,M.capabilities=W,M.extensions=q,M.properties=Q,M.renderLists=ye,M.shadowMap=be,M.state=ie,M.info=he}Ee();const se=new YT(M,b);this.xr=se,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const A=q.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=q.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(X,ee,!1))},this.getSize=function(A){return A.set(X,ee)},this.setSize=function(A,H,K=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,ee=H,t.width=Math.floor(A*G),t.height=Math.floor(H*G),K===!0&&(t.style.width=A+"px",t.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(X*G,ee*G).floor()},this.setDrawingBufferSize=function(A,H,K){X=A,ee=H,G=K,t.width=Math.floor(A*K),t.height=Math.floor(H*K),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,H,K,Y){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,H,K,Y),ie.viewport(C.copy(le).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(Ce)},this.setScissor=function(A,H,K,Y){A.isVector4?Ce.set(A.x,A.y,A.z,A.w):Ce.set(A,H,K,Y),ie.scissor(B.copy(Ce).multiplyScalar(G).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(A){ie.setScissorTest(Pe=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){ce=A},this.getClearColor=function(A){return A.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(A=!0,H=!0,K=!0){let Y=0;if(A){let V=!1;if(R!==null){const ve=R.texture.format;V=ve===Uu||ve===Nu||ve===Du}if(V){const ve=R.texture.type,Ae=ve===Mi||ve===bs||ve===po||ve===dr||ve===Pu||ve===Lu,Le=Fe.getClearColor(),Ie=Fe.getClearAlpha(),Ge=Le.r,qe=Le.g,De=Le.b;Ae?(g[0]=Ge,g[1]=qe,g[2]=De,g[3]=Ie,b.clearBufferuiv(b.COLOR,0,g)):(_[0]=Ge,_[1]=qe,_[2]=De,_[3]=Ie,b.clearBufferiv(b.COLOR,0,_))}else Y|=b.COLOR_BUFFER_BIT}H&&(Y|=b.DEPTH_BUFFER_BIT),K&&(Y|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),ye.dispose(),He.dispose(),Q.dispose(),y.dispose(),L.dispose(),$.dispose(),gt.dispose(),F.dispose(),xe.dispose(),se.dispose(),se.removeEventListener("sessionstart",qu),se.removeEventListener("sessionend",Ku),Qi.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const A=he.autoReset,H=be.enabled,K=be.autoUpdate,Y=be.needsUpdate,V=be.type;Ee(),he.autoReset=A,be.enabled=H,be.autoUpdate=K,be.needsUpdate=Y,be.type=V}function Te(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function je(A){const H=A.target;H.removeEventListener("dispose",je),Et(H)}function Et(A){Ht(A),Q.remove(A)}function Ht(A){const H=Q.get(A).programs;H!==void 0&&(H.forEach(function(K){xe.releaseProgram(K)}),A.isShaderMaterial&&xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,K,Y,V,ve){H===null&&(H=Oe);const Ae=V.isMesh&&V.matrixWorld.determinant()<0,Le=Wm(A,H,K,Y,V);ie.setMaterial(Y,Ae);let Ie=K.index,Ge=1;if(Y.wireframe===!0){if(Ie=j.getWireframeAttribute(K),Ie===void 0)return;Ge=2}const qe=K.drawRange,De=K.attributes.position;let nt=qe.start*Ge,_t=(qe.start+qe.count)*Ge;ve!==null&&(nt=Math.max(nt,ve.start*Ge),_t=Math.min(_t,(ve.start+ve.count)*Ge)),Ie!==null?(nt=Math.max(nt,0),_t=Math.min(_t,Ie.count)):De!=null&&(nt=Math.max(nt,0),_t=Math.min(_t,De.count));const xt=_t-nt;if(xt<0||xt===1/0)return;gt.setup(V,Y,Le,K,Ie);let nn,ot=Me;if(Ie!==null&&(nn=U.get(Ie),ot=ze,ot.setIndex(nn)),V.isMesh)Y.wireframe===!0?(ie.setLineWidth(Y.wireframeLinewidth*P()),ot.setMode(b.LINES)):ot.setMode(b.TRIANGLES);else if(V.isLine){let Ue=Y.linewidth;Ue===void 0&&(Ue=1),ie.setLineWidth(Ue*P()),V.isLineSegments?ot.setMode(b.LINES):V.isLineLoop?ot.setMode(b.LINE_LOOP):ot.setMode(b.LINE_STRIP)}else V.isPoints?ot.setMode(b.POINTS):V.isSprite&&ot.setMode(b.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ot.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ue=V._multiDrawStarts,Jn=V._multiDrawCounts,at=V._multiDrawCount,En=Ie?U.get(Ie).bytesPerElement:1,ws=Q.get(Y).currentProgram.getUniforms();for(let on=0;on<at;on++)ws.setValue(b,"_gl_DrawID",on),ot.render(Ue[on]/En,Jn[on])}else if(V.isInstancedMesh)ot.renderInstances(nt,xt,V.count);else if(K.isInstancedBufferGeometry){const Ue=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Jn=Math.min(K.instanceCount,Ue);ot.renderInstances(nt,xt,Jn)}else ot.render(nt,xt)};function ut(A,H,K){A.transparent===!0&&A.side===Gn&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,wo(A,H,K),A.side=yi,A.needsUpdate=!0,wo(A,H,K),A.side=Gn):wo(A,H,K)}this.compile=function(A,H,K=null){K===null&&(K=A),p=He.get(K),p.init(H),T.push(p),K.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==K&&A.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const Y=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ve=V.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){const Le=ve[Ae];ut(Le,K,V),Y.add(Le)}else ut(ve,K,V),Y.add(ve)}),T.pop(),p=null,Y},this.compileAsync=function(A,H,K=null){const Y=this.compile(A,H,K);return new Promise(V=>{function ve(){if(Y.forEach(function(Ae){Q.get(Ae).currentProgram.isReady()&&Y.delete(Ae)}),Y.size===0){V(A);return}setTimeout(ve,10)}q.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let bn=null;function Zn(A){bn&&bn(A)}function qu(){Qi.stop()}function Ku(){Qi.start()}const Qi=new Rm;Qi.setAnimationLoop(Zn),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(A){bn=A,se.setAnimationLoop(A),A===null?Qi.stop():Qi.start()},se.addEventListener("sessionstart",qu),se.addEventListener("sessionend",Ku),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(H),H=se.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,H,R),p=He.get(A,T.length),p.init(H),T.push(p),ae.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),J.setFromProjectionMatrix(ae),_e=this.localClippingEnabled,pe=ge.init(this.clippingPlanes,_e),m=ye.get(A,E.length),m.init(),E.push(m),se.enabled===!0&&se.isPresenting===!0){const ve=M.xr.getDepthSensingMesh();ve!==null&&Ja(ve,H,-1/0,M.sortObjects)}Ja(A,H,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(oe,ce),w=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,w&&Fe.addToRenderList(m,A),this.info.render.frame++,pe===!0&&ge.beginShadows();const K=p.state.shadowsArray;be.render(K,A,H),pe===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const ve=H.cameras;if(V.length>0)for(let Ae=0,Le=ve.length;Ae<Le;Ae++){const Ie=ve[Ae];Zu(Y,V,A,Ie)}w&&Fe.render(A);for(let Ae=0,Le=ve.length;Ae<Le;Ae++){const Ie=ve[Ae];Yu(m,A,Ie,Ie.viewport)}}else V.length>0&&Zu(Y,V,A,H),w&&Fe.render(A),Yu(m,A,H);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(M,A,H),gt.resetDefaultState(),x=-1,v=null,T.pop(),T.length>0?(p=T[T.length-1],pe===!0&&ge.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ja(A,H,K,Y){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){Y&&me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ae);const Ae=$.update(A),Le=A.material;Le.visible&&m.push(A,Ae,Le,K,me.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){const Ae=$.update(A),Le=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),me.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),me.copy(Ae.boundingSphere.center)),me.applyMatrix4(A.matrixWorld).applyMatrix4(ae)),Array.isArray(Le)){const Ie=Ae.groups;for(let Ge=0,qe=Ie.length;Ge<qe;Ge++){const De=Ie[Ge],nt=Le[De.materialIndex];nt&&nt.visible&&m.push(A,Ae,nt,K,me.z,De)}}else Le.visible&&m.push(A,Ae,Le,K,me.z,null)}}const ve=A.children;for(let Ae=0,Le=ve.length;Ae<Le;Ae++)Ja(ve[Ae],H,K,Y)}function Yu(A,H,K,Y){const V=A.opaque,ve=A.transmissive,Ae=A.transparent;p.setupLightsView(K),pe===!0&&ge.setGlobalState(M.clippingPlanes,K),Y&&ie.viewport(C.copy(Y)),V.length>0&&Ao(V,H,K),ve.length>0&&Ao(ve,H,K),Ae.length>0&&Ao(Ae,H,K),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Zu(A,H,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Es(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?Eo:Mi,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ve=p.state.transmissionRenderTarget[Y.id],Ae=Y.viewport||C;ve.setSize(Ae.z,Ae.w);const Le=M.getRenderTarget();M.setRenderTarget(ve),M.getClearColor(ne),ue=M.getClearAlpha(),ue<1&&M.setClearColor(16777215,.5),M.clear(),w&&Fe.render(K);const Ie=M.toneMapping;M.toneMapping=Xi;const Ge=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),pe===!0&&ge.setGlobalState(M.clippingPlanes,Y),Ao(A,K,Y),S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve),q.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let De=0,nt=H.length;De<nt;De++){const _t=H[De],xt=_t.object,nn=_t.geometry,ot=_t.material,Ue=_t.group;if(ot.side===Gn&&xt.layers.test(Y.layers)){const Jn=ot.side;ot.side=rn,ot.needsUpdate=!0,Ju(xt,K,Y,nn,ot,Ue),ot.side=Jn,ot.needsUpdate=!0,qe=!0}}qe===!0&&(S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve))}M.setRenderTarget(Le),M.setClearColor(ne,ue),Ge!==void 0&&(Y.viewport=Ge),M.toneMapping=Ie}function Ao(A,H,K){const Y=H.isScene===!0?H.overrideMaterial:null;for(let V=0,ve=A.length;V<ve;V++){const Ae=A[V],Le=Ae.object,Ie=Ae.geometry,Ge=Y===null?Ae.material:Y,qe=Ae.group;Le.layers.test(K.layers)&&Ju(Le,H,K,Ie,Ge,qe)}}function Ju(A,H,K,Y,V,ve){A.onBeforeRender(M,H,K,Y,V,ve),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(M,H,K,Y,A,ve),V.transparent===!0&&V.side===Gn&&V.forceSinglePass===!1?(V.side=rn,V.needsUpdate=!0,M.renderBufferDirect(K,H,Y,V,A,ve),V.side=yi,V.needsUpdate=!0,M.renderBufferDirect(K,H,Y,V,A,ve),V.side=Gn):M.renderBufferDirect(K,H,Y,V,A,ve),A.onAfterRender(M,H,K,Y,V,ve)}function wo(A,H,K){H.isScene!==!0&&(H=Oe);const Y=Q.get(A),V=p.state.lights,ve=p.state.shadowsArray,Ae=V.state.version,Le=xe.getParameters(A,V.state,ve,H,K),Ie=xe.getProgramCacheKey(Le);let Ge=Y.programs;Y.environment=A.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(A.isMeshStandardMaterial?L:y).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Ge===void 0&&(A.addEventListener("dispose",je),Ge=new Map,Y.programs=Ge);let qe=Ge.get(Ie);if(qe!==void 0){if(Y.currentProgram===qe&&Y.lightsStateVersion===Ae)return eh(A,Le),qe}else Le.uniforms=xe.getUniforms(A),A.onBeforeCompile(Le,M),qe=xe.acquireProgram(Le,Ie),Ge.set(Ie,qe),Y.uniforms=Le.uniforms;const De=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=ge.uniform),eh(A,Le),Y.needsLights=$m(A),Y.lightsStateVersion=Ae,Y.needsLights&&(De.ambientLightColor.value=V.state.ambient,De.lightProbe.value=V.state.probe,De.directionalLights.value=V.state.directional,De.directionalLightShadows.value=V.state.directionalShadow,De.spotLights.value=V.state.spot,De.spotLightShadows.value=V.state.spotShadow,De.rectAreaLights.value=V.state.rectArea,De.ltc_1.value=V.state.rectAreaLTC1,De.ltc_2.value=V.state.rectAreaLTC2,De.pointLights.value=V.state.point,De.pointLightShadows.value=V.state.pointShadow,De.hemisphereLights.value=V.state.hemi,De.directionalShadowMap.value=V.state.directionalShadowMap,De.directionalShadowMatrix.value=V.state.directionalShadowMatrix,De.spotShadowMap.value=V.state.spotShadowMap,De.spotLightMatrix.value=V.state.spotLightMatrix,De.spotLightMap.value=V.state.spotLightMap,De.pointShadowMap.value=V.state.pointShadowMap,De.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=qe,Y.uniformsList=null,qe}function Qu(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=_a.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function eh(A,H){const K=Q.get(A);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function Wm(A,H,K,Y,V){H.isScene!==!0&&(H=Oe),S.resetTextureUnits();const ve=H.fog,Ae=Y.isMeshStandardMaterial?H.environment:null,Le=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:tn,Ie=(Y.isMeshStandardMaterial?L:y).get(Y.envMap||Ae),Ge=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,qe=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),De=!!K.morphAttributes.position,nt=!!K.morphAttributes.normal,_t=!!K.morphAttributes.color;let xt=Xi;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(xt=M.toneMapping);const nn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ot=nn!==void 0?nn.length:0,Ue=Q.get(Y),Jn=p.state.lights;if(pe===!0&&(_e===!0||A!==v)){const mn=A===v&&Y.id===x;ge.setState(Y,A,mn)}let at=!1;Y.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Jn.state.version||Ue.outputColorSpace!==Le||V.isBatchedMesh&&Ue.batching===!1||!V.isBatchedMesh&&Ue.batching===!0||V.isBatchedMesh&&Ue.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ue.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ue.instancing===!1||!V.isInstancedMesh&&Ue.instancing===!0||V.isSkinnedMesh&&Ue.skinning===!1||!V.isSkinnedMesh&&Ue.skinning===!0||V.isInstancedMesh&&Ue.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ue.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ue.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ue.instancingMorph===!1&&V.morphTexture!==null||Ue.envMap!==Ie||Y.fog===!0&&Ue.fog!==ve||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ge.numPlanes||Ue.numIntersection!==ge.numIntersection)||Ue.vertexAlphas!==Ge||Ue.vertexTangents!==qe||Ue.morphTargets!==De||Ue.morphNormals!==nt||Ue.morphColors!==_t||Ue.toneMapping!==xt||Ue.morphTargetsCount!==ot)&&(at=!0):(at=!0,Ue.__version=Y.version);let En=Ue.currentProgram;at===!0&&(En=wo(Y,H,V));let ws=!1,on=!1,Tr=!1;const yt=En.getUniforms(),Bn=Ue.uniforms;if(ie.useProgram(En.program)&&(ws=!0,on=!0,Tr=!0),Y.id!==x&&(x=Y.id,on=!0),ws||v!==A){ie.buffers.depth.getReversed()?(N.copy(A.projectionMatrix),Wy(N),Xy(N),yt.setValue(b,"projectionMatrix",N)):yt.setValue(b,"projectionMatrix",A.projectionMatrix),yt.setValue(b,"viewMatrix",A.matrixWorldInverse);const bi=yt.map.cameraPosition;bi!==void 0&&bi.setValue(b,Z.setFromMatrixPosition(A.matrixWorld)),W.logarithmicDepthBuffer&&yt.setValue(b,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&yt.setValue(b,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,on=!0,Tr=!0)}if(V.isSkinnedMesh){yt.setOptional(b,V,"bindMatrix"),yt.setOptional(b,V,"bindMatrixInverse");const mn=V.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),yt.setValue(b,"boneTexture",mn.boneTexture,S))}V.isBatchedMesh&&(yt.setOptional(b,V,"batchingTexture"),yt.setValue(b,"batchingTexture",V._matricesTexture,S),yt.setOptional(b,V,"batchingIdTexture"),yt.setValue(b,"batchingIdTexture",V._indirectTexture,S),yt.setOptional(b,V,"batchingColorTexture"),V._colorsTexture!==null&&yt.setValue(b,"batchingColorTexture",V._colorsTexture,S));const Ar=K.morphAttributes;if((Ar.position!==void 0||Ar.normal!==void 0||Ar.color!==void 0)&&Ve.update(V,K,En),(on||Ue.receiveShadow!==V.receiveShadow)&&(Ue.receiveShadow=V.receiveShadow,yt.setValue(b,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Bn.envMap.value=Ie,Bn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(Bn.envMapIntensity.value=H.environmentIntensity),on&&(yt.setValue(b,"toneMappingExposure",M.toneMappingExposure),Ue.needsLights&&Xm(Bn,Tr),ve&&Y.fog===!0&&de.refreshFogUniforms(Bn,ve),de.refreshMaterialUniforms(Bn,Y,G,ee,p.state.transmissionRenderTarget[A.id]),_a.upload(b,Qu(Ue),Bn,S)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(_a.upload(b,Qu(Ue),Bn,S),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&yt.setValue(b,"center",V.center),yt.setValue(b,"modelViewMatrix",V.modelViewMatrix),yt.setValue(b,"normalMatrix",V.normalMatrix),yt.setValue(b,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const mn=Y.uniformsGroups;for(let bi=0,Ei=mn.length;bi<Ei;bi++){const th=mn[bi];F.update(th,En),F.bind(th,En)}}return En}function Xm(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function $m(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,H,K){Q.get(A.texture).__webglTexture=H,Q.get(A.depthTexture).__webglTexture=K;const Y=Q.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=K===void 0,Y.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){const K=Q.get(A);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,K=0){R=A,D=H,I=K;let Y=!0,V=null,ve=!1,Ae=!1;if(A){const Ie=Q.get(A);if(Ie.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(b.FRAMEBUFFER,null),Y=!1;else if(Ie.__webglFramebuffer===void 0)S.setupRenderTarget(A);else if(Ie.__hasExternalTextures)S.rebindTextures(A,Q.get(A.texture).__webglTexture,Q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const De=A.depthTexture;if(Ie.__boundDepthTexture!==De){if(De!==null&&Q.has(De)&&(A.width!==De.image.width||A.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(A)}}const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ae=!0);const qe=Q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[H])?V=qe[H][K]:V=qe[H],ve=!0):A.samples>0&&S.useMultisampledRTT(A)===!1?V=Q.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?V=qe[K]:V=qe,C.copy(A.viewport),B.copy(A.scissor),z=A.scissorTest}else C.copy(le).multiplyScalar(G).floor(),B.copy(Ce).multiplyScalar(G).floor(),z=Pe;if(ie.bindFramebuffer(b.FRAMEBUFFER,V)&&Y&&ie.drawBuffers(A,V),ie.viewport(C),ie.scissor(B),ie.setScissorTest(z),ve){const Ie=Q.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ie.__webglTexture,K)}else if(Ae){const Ie=Q.get(A.texture),Ge=H||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ie.__webglTexture,K||0,Ge)}x=-1},this.readRenderTargetPixels=function(A,H,K,Y,V,ve,Ae){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){ie.bindFramebuffer(b.FRAMEBUFFER,Le);try{const Ie=A.texture,Ge=Ie.format,qe=Ie.type;if(!W.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Y&&K>=0&&K<=A.height-V&&b.readPixels(H,K,Y,V,We.convert(Ge),We.convert(qe),ve)}finally{const Ie=R!==null?Q.get(R).__webglFramebuffer:null;ie.bindFramebuffer(b.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(A,H,K,Y,V,ve,Ae){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){const Ie=A.texture,Ge=Ie.format,qe=Ie.type;if(!W.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=A.width-Y&&K>=0&&K<=A.height-V){ie.bindFramebuffer(b.FRAMEBUFFER,Le);const De=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,De),b.bufferData(b.PIXEL_PACK_BUFFER,ve.byteLength,b.STREAM_READ),b.readPixels(H,K,Y,V,We.convert(Ge),We.convert(qe),0);const nt=R!==null?Q.get(R).__webglFramebuffer:null;ie.bindFramebuffer(b.FRAMEBUFFER,nt);const _t=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Gy(b,_t,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,De),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ve),b.deleteBuffer(De),b.deleteSync(_t),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,H=null,K=0){A.isTexture!==!0&&(zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1]);const Y=Math.pow(2,-K),V=Math.floor(A.image.width*Y),ve=Math.floor(A.image.height*Y),Ae=H!==null?H.x:0,Le=H!==null?H.y:0;S.setTexture2D(A,0),b.copyTexSubImage2D(b.TEXTURE_2D,K,0,0,Ae,Le,V,ve),ie.unbindTexture()},this.copyTextureToTexture=function(A,H,K=null,Y=null,V=0){A.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1],H=arguments[2],V=arguments[3]||0,K=null);let ve,Ae,Le,Ie,Ge,qe,De,nt,_t;const xt=A.isCompressedTexture?A.mipmaps[V]:A.image;K!==null?(ve=K.max.x-K.min.x,Ae=K.max.y-K.min.y,Le=K.isBox3?K.max.z-K.min.z:1,Ie=K.min.x,Ge=K.min.y,qe=K.isBox3?K.min.z:0):(ve=xt.width,Ae=xt.height,Le=xt.depth||1,Ie=0,Ge=0,qe=0),Y!==null?(De=Y.x,nt=Y.y,_t=Y.z):(De=0,nt=0,_t=0);const nn=We.convert(H.format),ot=We.convert(H.type);let Ue;H.isData3DTexture?(S.setTexture3D(H,0),Ue=b.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(S.setTexture2DArray(H,0),Ue=b.TEXTURE_2D_ARRAY):(S.setTexture2D(H,0),Ue=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,H.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,H.unpackAlignment);const Jn=b.getParameter(b.UNPACK_ROW_LENGTH),at=b.getParameter(b.UNPACK_IMAGE_HEIGHT),En=b.getParameter(b.UNPACK_SKIP_PIXELS),ws=b.getParameter(b.UNPACK_SKIP_ROWS),on=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,xt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,xt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ie),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ge),b.pixelStorei(b.UNPACK_SKIP_IMAGES,qe);const Tr=A.isDataArrayTexture||A.isData3DTexture,yt=H.isDataArrayTexture||H.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Bn=Q.get(A),Ar=Q.get(H),mn=Q.get(Bn.__renderTarget),bi=Q.get(Ar.__renderTarget);ie.bindFramebuffer(b.READ_FRAMEBUFFER,mn.__webglFramebuffer),ie.bindFramebuffer(b.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Ei=0;Ei<Le;Ei++)Tr&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Q.get(A).__webglTexture,V,qe+Ei),A.isDepthTexture?(yt&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Q.get(H).__webglTexture,V,_t+Ei),b.blitFramebuffer(Ie,Ge,ve,Ae,De,nt,ve,Ae,b.DEPTH_BUFFER_BIT,b.NEAREST)):yt?b.copyTexSubImage3D(Ue,V,De,nt,_t+Ei,Ie,Ge,ve,Ae):b.copyTexSubImage2D(Ue,V,De,nt,_t+Ei,Ie,Ge,ve,Ae);ie.bindFramebuffer(b.READ_FRAMEBUFFER,null),ie.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else yt?A.isDataTexture||A.isData3DTexture?b.texSubImage3D(Ue,V,De,nt,_t,ve,Ae,Le,nn,ot,xt.data):H.isCompressedArrayTexture?b.compressedTexSubImage3D(Ue,V,De,nt,_t,ve,Ae,Le,nn,xt.data):b.texSubImage3D(Ue,V,De,nt,_t,ve,Ae,Le,nn,ot,xt):A.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,V,De,nt,ve,Ae,nn,ot,xt.data):A.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,V,De,nt,xt.width,xt.height,nn,xt.data):b.texSubImage2D(b.TEXTURE_2D,V,De,nt,ve,Ae,nn,ot,xt);b.pixelStorei(b.UNPACK_ROW_LENGTH,Jn),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,at),b.pixelStorei(b.UNPACK_SKIP_PIXELS,En),b.pixelStorei(b.UNPACK_SKIP_ROWS,ws),b.pixelStorei(b.UNPACK_SKIP_IMAGES,on),V===0&&H.generateMipmaps&&b.generateMipmap(Ue),ie.unbindTexture()},this.copyTextureToTexture3D=function(A,H,K=null,Y=null,V=0){return A.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Y=arguments[1]||null,A=arguments[2],H=arguments[3],V=arguments[4]||0),zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,H,K,Y,V)},this.initRenderTarget=function(A){Q.get(A).__webglFramebuffer===void 0&&S.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?S.setTextureCube(A,0):A.isData3DTexture?S.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?S.setTexture2DArray(A,0):S.setTexture2D(A,0),ie.unbindTexture()},this.resetState=function(){D=0,I=0,R=null,ie.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}class tA extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zc,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new k;class Hu{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const nd=new k,id=new rt,sd=new rt,iA=new k,rd=new Ye,ea=new k,zl=new qn,od=new Ye,Gl=new qa;class sA extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sf,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ea),this.boundingBox.expandByPoint(ea)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ea),this.boundingSphere.expandByPoint(ea)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zl.copy(this.boundingSphere),zl.applyMatrix4(s),e.ray.intersectsSphere(zl)!==!1&&(od.copy(s).invert(),Gl.copy(e.ray).applyMatrix4(od),!(this.boundingBox!==null&&Gl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fy?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;id.fromBufferAttribute(s.attributes.skinIndex,e),sd.fromBufferAttribute(s.attributes.skinWeight,e),nd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=sd.getComponent(r);if(o!==0){const a=id.getComponent(r);rd.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(iA.copy(nd).applyMatrix4(rd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Nm extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Um extends Ut{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Qt,u=Qt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ad=new Ye,rA=new Ye;class Vu{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ye;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:rA;ad.multiplyMatrices(a,t[r]),ad.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Vu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Um(t,e,e,xn,Ln);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Nm),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Qc extends en{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ws=new Ye,ld=new Ye,ta=[],cd=new jn,oA=new Ye,Nr=new Tt,Ur=new qn;class aA extends Tt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,oA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ws),cd.copy(e.boundingBox).applyMatrix4(Ws),this.boundingBox.union(cd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ws),Ur.copy(e.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(i),e.ray.intersectsSphere(Ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ws),ld.multiplyMatrices(i,Ws),Nr.matrixWorld=ld,Nr.raycast(e,ta);for(let o=0,a=ta.length;o<a;o++){const l=ta[o];l.instanceId=r,l.object=this,t.push(l)}ta.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Um(new Float32Array(s*this.count),s,this.count,Iu,Ln));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Om extends Xn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ca=new k,Pa=new k,ud=new Ye,Or=new qa,na=new qn,Wl=new k,hd=new k;class zu extends bt{constructor(e=new Fn,t=new Om){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ca.fromBufferAttribute(t,s-1),Pa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ca.distanceTo(Pa);e.setAttribute("lineDistance",new Sn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(s),na.radius+=r,e.ray.intersectsSphere(na)===!1)return;ud.copy(s).invert(),Or.copy(e.ray).applyMatrix4(ud);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),E=u.getX(_+1),T=ia(this,e,Or,l,p,E);T&&t.push(T)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=ia(this,e,Or,l,_,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=ia(this,e,Or,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=ia(this,e,Or,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ia(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(Ca.fromBufferAttribute(o,s),Pa.fromBufferAttribute(o,r),t.distanceSqToSegment(Ca,Pa,Wl,hd)>i)return;Wl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Wl);if(!(l<e.near||l>e.far))return{distance:l,point:hd.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const fd=new k,dd=new k;class lA extends zu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)fd.fromBufferAttribute(t,s),dd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+fd.distanceTo(dd);e.setAttribute("lineDistance",new Sn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cA extends zu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Fm extends Xn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pd=new Ye,eu=new qa,sa=new qn,ra=new k;class uA extends bt{constructor(e=new Fn,t=new Fm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,e.ray.intersectsSphere(sa)===!1)return;pd.copy(s).invert(),eu.copy(e.ray).applyMatrix4(pd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);ra.fromBufferAttribute(h,m),md(ra,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)ra.fromBufferAttribute(h,g),md(ra,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function md(n,e,t,i,s,r,o){const a=eu.distanceSqToPoint(n);if(a<t){const l=new k;eu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Gu extends Fn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new k,f=new k,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const E=[],T=p/i;let M=0;p===0&&o===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let O=0;O<=t;O++){const D=O/t;h.x=-e*Math.cos(s+D*r)*Math.sin(o+T*a),h.y=e*Math.cos(o+T*a),h.z=e*Math.sin(s+D*r)*Math.sin(o+T*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(D+M,1-T),E.push(c++)}u.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){const T=u[p][E+1],M=u[p][E],O=u[p+1][E],D=u[p+1][E+1];(p!==0||o>0)&&d.push(T,M,D),(p!==i-1||l<Math.PI)&&d.push(M,O,D)}this.setIndex(d),this.setAttribute("position",new Sn(g,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ir extends Xn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gm,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kn extends ir{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function oa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function hA(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function fA(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function gd(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Bm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class To{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class dA extends To{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rf,endingEnd:rf}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case of:r=e,a=2*t-i;break;case af:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case of:o=e,l=2*i-t;break;case af:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,E=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,T=(-1-d)*m+(1.5+d)*_+.5*g,M=d*m-d*_;for(let O=0;O!==a;++O)r[O]=p*o[u+O]+E*o[c+O]+T*o[l+O]+M*o[h+O];return r}}class pA extends To{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class mA extends To{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Yn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oa(t,this.TimeBufferType),this.values=oa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:oa(e.times,Array),values:oa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new mA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dA(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case mo:t=this.InterpolantFactoryMethodDiscrete;break;case go:t=this.InterpolantFactoryMethodLinear;break;case pl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return go;case this.InterpolantFactoryMethodSmooth:return pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&hA(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===pl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=go;class Sr extends Yn{constructor(e,t,i){super(e,t,i)}}Sr.prototype.ValueTypeName="bool";Sr.prototype.ValueBufferType=Array;Sr.prototype.DefaultInterpolation=mo;Sr.prototype.InterpolantFactoryMethodLinear=void 0;Sr.prototype.InterpolantFactoryMethodSmooth=void 0;class km extends Yn{}km.prototype.ValueTypeName="color";class _r extends Yn{}_r.prototype.ValueTypeName="number";class gA extends To{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ji.slerpFlat(r,0,o,c-a,o,c,l);return r}}class vr extends Yn{InterpolantFactoryMethodLinear(e){return new gA(this.times,this.values,this.getValueSize(),e)}}vr.prototype.ValueTypeName="quaternion";vr.prototype.InterpolantFactoryMethodSmooth=void 0;class br extends Yn{constructor(e,t,i){super(e,t,i)}}br.prototype.ValueTypeName="string";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=mo;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;class xr extends Yn{}xr.prototype.ValueTypeName="vector";class _A{constructor(e="",t=-1,i=[],s=dy){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(xA(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Yn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=fA(l);l=gd(l,1,u),c=gd(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new _r(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];Bm(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let E=0;E!==f[g].morphTargets.length;++E){const T=f[g];m.push(T.time),p.push(T.morphTarget===_?1:0)}s.push(new _r(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";i(xr,d+".position",f,"pos",s),i(vr,d+".quaternion",f,"rot",s),i(xr,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function vA(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _r;case"vector":case"vector2":case"vector3":case"vector4":return xr;case"color":return km;case"quaternion":return vr;case"bool":case"boolean":return Sr;case"string":return br}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function xA(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vA(n.type);if(n.times===void 0){const t=[],i=[];Bm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const zi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class yA{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const MA=new yA;class Er{constructor(e){this.manager=e!==void 0?e:MA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Er.DEFAULT_MATERIAL_NAME="__DEFAULT";const oi={};class SA extends Error{constructor(e,t){super(e),this.response=t}}class Hm extends Er{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=zi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(oi[e]!==void 0){oi[e].push({onLoad:t,onProgress:i,onError:s});return}oi[e]=[],oi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=oi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){E();function E(){h.read().then(({done:T,value:M})=>{if(T)p.close();else{_+=M.byteLength;const O=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let D=0,I=u.length;D<I;D++){const R=u[D];R.onProgress&&R.onProgress(O)}p.enqueue(M),E()}},T=>{p.error(T)})}}});return new Response(m)}else throw new SA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{zi.add(e,c);const u=oi[e];delete oi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=oi[e];if(u===void 0)throw this.manager.itemError(e),c;delete oi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class bA extends Er{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=zi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=_o("img");function l(){u(),zi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class tu extends Er{constructor(e){super(e)}load(e,t,i,s){const r=new Ut,o=new bA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Za extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Xl=new Ye,_d=new k,vd=new k;class Wu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fu,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;_d.setFromMatrixPosition(e.matrixWorld),t.position.copy(_d),vd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vd),t.updateMatrixWorld(),Xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class EA extends Wu{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=mr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class TA extends Za{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new EA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xd=new Ye,Fr=new k,$l=new k;class AA extends Wu{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Fr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Fr),$l.copy(i.position),$l.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt($l),i.updateMatrixWorld(),s.makeTranslation(-Fr.x,-Fr.y,-Fr.z),xd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xd)}}class Vm extends Za{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new AA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wA extends Wu{constructor(){super(new Bu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class RA extends Za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new wA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class CA extends Za{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class to{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class PA extends Er{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=zi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return zi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),zi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});zi.add(e,l),r.manager.itemStart(e)}}class LA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=yd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function yd(){return performance.now()}const Xu="\\[\\]\\.:\\/",IA=new RegExp("["+Xu+"]","g"),$u="[^"+Xu+"]",DA="[^"+Xu.replace("\\.","")+"]",NA=/((?:WC+[\/:])*)/.source.replace("WC",$u),UA=/(WCOD+)?/.source.replace("WCOD",DA),OA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$u),FA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$u),BA=new RegExp("^"+NA+UA+OA+FA+"$"),kA=["material","materials","bones","map"];class HA{constructor(e,t,i){const s=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ft{constructor(e,t,i){this.path=t,this.parsedPath=i||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,i):new ft(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(IA,"")}static parseTrackName(e){const t=BA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);kA.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=HA;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class VA extends As{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ru}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ru);const Xs=new On(0,0,0,"YXZ"),$s=new k,zA={type:"change"},GA={type:"lock"},WA={type:"unlock"},Md=Math.PI/2;class XA extends VA{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=$A.bind(this),this._onPointerlockChange=jA.bind(this),this._onPointerlockError=qA.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;$s.setFromMatrixColumn(t.matrix,0),$s.crossVectors(t.up,$s),t.position.addScaledVector($s,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;$s.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector($s,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function $A(n){if(this.enabled===!1||this.isLocked===!1)return;const e=n.movementX||n.mozMovementX||n.webkitMovementX||0,t=n.movementY||n.mozMovementY||n.webkitMovementY||0,i=this.object;Xs.setFromQuaternion(i.quaternion),Xs.y-=e*.002*this.pointerSpeed,Xs.x-=t*.002*this.pointerSpeed,Xs.x=Math.max(Md-this.maxPolarAngle,Math.min(Md-this.minPolarAngle,Xs.x)),i.quaternion.setFromEuler(Xs),this.dispatchEvent(zA)}function jA(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(GA),this.isLocked=!0):(this.dispatchEvent(WA),this.isLocked=!1)}function qA(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const KA="/assets/ground-4ICvYzm_.png",YA="/assets/wall-Dsmy-Flm.png";function Sd(n,e){if(e===py)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Yc||e===mm){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Yc)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class jl extends Er{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new tw(t)}),this.register(function(t){return new nw(t)}),this.register(function(t){return new hw(t)}),this.register(function(t){return new fw(t)}),this.register(function(t){return new dw(t)}),this.register(function(t){return new sw(t)}),this.register(function(t){return new rw(t)}),this.register(function(t){return new ow(t)}),this.register(function(t){return new aw(t)}),this.register(function(t){return new ew(t)}),this.register(function(t){return new lw(t)}),this.register(function(t){return new iw(t)}),this.register(function(t){return new uw(t)}),this.register(function(t){return new cw(t)}),this.register(function(t){return new JA(t)}),this.register(function(t){return new pw(t)}),this.register(function(t){return new mw(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=to.extractUrlBase(e);o=to.resolveURL(c,this.path)}else o=to.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Hm(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===zm){try{o[Je.KHR_BINARY_GLTF]=new gw(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Cw(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Je.KHR_MATERIALS_UNLIT:o[h]=new QA;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[h]=new _w(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[h]=new vw;break;case Je.KHR_MESH_QUANTIZATION:o[h]=new xw;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function ZA(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class JA{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new $e(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],tn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new RA(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vm(u),c.distance=h;break;case"spot":c=new TA(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class QA{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return ms}extendParams(e,t,i){const s=[];e.color=new $e(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],tn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Ot))}return Promise.all(s)}}class ew{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class tw{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new et(a,a)}return Promise.all(r)}}class nw{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class iw{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class sw{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],tn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ot)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class rw{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class ow{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(a[0],a[1],a[2],tn),Promise.all(r)}}class aw{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class lw{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(a[0],a[1],a[2],tn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Ot)),Promise.all(r)}}class cw{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class uw{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class hw{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class fw{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class dw{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class pw{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class mw{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==vn.TRIANGLES&&c.mode!==vn.TRIANGLE_STRIP&&c.mode!==vn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new Ye,m=new k,p=new Ji,E=new k(1,1,1),T=new aA(g.geometry,g.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&E.fromBufferAttribute(l.SCALE,M),T.setMatrixAt(M,_.compose(m,p,E));for(const M in l)if(M==="_COLOR_0"){const O=l[M];T.instanceColor=new Qc(O.array,O.itemSize,O.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);bt.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),d.push(T)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const zm="glTF",Br=12,bd={JSON:1313821514,BIN:5130562};class gw{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Br),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Br,r=new DataView(e,Br);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===bd.JSON){const c=new Uint8Array(e,Br+o,a);this.content=i.decode(c)}else if(l===bd.BIN){const c=Br+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class _w{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=nu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=nu[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],d=sr[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,tn,f)})})}}class vw{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class xw{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class Gm extends To{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,E=1-m,T=p-f+h;for(let M=0;M!==a;M++){const O=o[_+M+a],D=o[_+M+l]*u,I=o[g+M+a],R=o[g+M]*u;r[M]=E*O+T*D+m*I+p*R}return r}}const yw=new Ji;class Mw extends Gm{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return yw.fromArray(r).normalize().toArray(r),r}}const vn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ed={9728:Qt,9729:fn,9984:rm,9985:ha,9986:Vr,9987:di},Td={33071:Vi,33648:wa,10497:fr},ql={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Sw={CUBICSPLINE:void 0,LINEAR:go,STEP:mo},Kl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bw(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new ir({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),n.DefaultMaterial}function ls(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ci(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ew(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function Tw(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Aw(n){let e;const t=n.extensions&&n.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Yl(t.attributes):e=n.indices+":"+Yl(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Yl(n.targets[i]);return e}function Yl(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function iu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ww(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Rw=new Ye;class Cw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ZA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new tu(this.options.manager):this.textureLoader=new PA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Hm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return ls(r,a,s),ci(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(to.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=ql[s.type],a=sr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new en(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ql[s.type],c=sr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let T=t.cache.get(E);T||(_=new c(a,p*d,s.count*d/u),T=new nA(_,d/u),t.cache.add(E,T)),m=new Hu(T,l,f%d/u,g)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),m=new en(_,l,g);if(s.sparse!==void 0){const p=ql.SCALAR,E=sr[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,O=new E(o[1],T,s.sparse.count*p),D=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new en(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let I=0,R=O.length;I<R;I++){const x=O[I];if(m.setX(x,D[I*l]),l>=2&&m.setY(x,D[I*l+1]),l>=3&&m.setZ(x,D[I*l+2]),l>=4&&m.setW(x,D[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Ed[f.magFilter]||fn,u.minFilter=Ed[f.minFilter]||di,u.wrapS=Td[f.wrapS]||fr,u.wrapT=Td[f.wrapT]||fr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Qt&&u.minFilter!==fn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ut(_);m.needsUpdate=!0,f(m)}),t.load(to.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),ci(h,o),h.userData.mimeType=o.mimeType||ww(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Fm,Xn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Om,Xn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return ir}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){const h=s[Je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new $e(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],tn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ot)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Gn);const u=r.alphaMode||Kl.OPAQUE;if(u===Kl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Kl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ms&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new et(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==ms&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ms){const h=r.emissiveFactor;a.emissive=new $e().setRGB(h[0],h[1],h[2],tn)}return r.emissiveTexture!==void 0&&o!==ms&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ot)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),ci(h,r),t.associations.set(h,{materials:e}),r.extensions&&ls(s,h,r),h})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ad(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Aw(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Ad(new Fn,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?bw(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const E=c[d];if(m.mode===vn.TRIANGLES||m.mode===vn.TRIANGLE_STRIP||m.mode===vn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new sA(_,E):new Tt(_,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===vn.TRIANGLE_STRIP?p.geometry=Sd(p.geometry,mm):m.mode===vn.TRIANGLE_FAN&&(p.geometry=Sd(p.geometry,Yc));else if(m.mode===vn.LINES)p=new lA(_,E);else if(m.mode===vn.LINE_STRIP)p=new zu(_,E);else if(m.mode===vn.LINE_LOOP)p=new cA(_,E);else if(m.mode===vn.POINTS)p=new uA(_,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Tw(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ci(p,r),m.extensions&&ls(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&ls(s,h[0],r),h[0];const f=new gs;r.extensions&&ls(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Jt(Vy.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Bu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ci(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Ye;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Vu(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,E=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",E)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let E=0,T=f.length;E<T;E++){const M=f[E],O=d[E],D=g[E],I=_[E],R=m[E];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const x=i._createAnimationTracks(M,O,D,I,R);if(x)for(let v=0;v<x.length;v++)p.push(x[v])}return new _A(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Rw)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Nm:c.length>1?u=new gs:c.length===1?u=c[0]:u=new bt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ci(u,r),r.extensions&&ls(i,u,r),r.matrix!==void 0){const h=new Ye;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new gs;i.name&&(r.name=s.createUniqueName(i.name)),ci(r,i),i.extensions&&ls(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof Xn||f instanceof Ut)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Ii[r.path]===Ii.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ii[r.path]){case Ii.weights:c=_r;break;case Ii.rotation:c=vr;break;case Ii.position:case Ii.scale:c=xr;break;default:switch(i.itemSize){case 1:c=_r;break;case 2:case 3:default:c=xr;break}break}const u=s.interpolation!==void 0?Sw[s.interpolation]:go,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+Ii[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=iu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof vr?Mw:Gm;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Pw(n,e,t){const i=e.attributes,s=new jn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),a.normalized){const u=iu(sr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new k,l=new k;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=iu(sr[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new qn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Ad(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=nu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Qe.workingColorSpace!==tn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),ci(n,e),Pw(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Ew(n,e.targets,t):n})}const Lw={class:"absolute z-50 top-0 flex justify-between w-full items-center p-8"},Iw={id:"items",class:"ml-4 p-8 bg-black text-white border-2 border-white rounded-lg shadow-lg z-20 w-45 h-45"},Dw={key:0},Nw={key:1},Uw={id:"hud",class:"hud absoute text-white font-bold"},Ow={class:"flex gap-2"},Fw={key:0,src:N0,alt:"Full Heart",width:"40",height:"40"},Bw={key:1,src:U0,alt:"Empty Heart",width:"40",height:"40"},Zl=2,kw=4,Hw=pn({__name:"Game",setup(n){const e=Ss(),i=Eu().params.id.toString();let s;const r=new Map;let o,a,l,c=!1,u=Zl;const h=st(2),f=st(3),d=st([]);let g=st([]);function _(){const oe=new tA,ce=new Jt(75,window.innerWidth/window.outerWidth,.1,1e3);ce.position.set(1,1,2);const le=new eA;le.setPixelRatio(window.devicePixelRatio),le.setSize(window.innerWidth,window.innerHeight),le.shadowMap.enabled=!0;const Ce=new XA(ce,le.domElement);Ce.pointerSpeed=1;const Pe=new LA;return{scene:oe,camera:ce,renderer:le,pointerLockControls:Ce,clock:Pe}}function m(oe,ce){ce.domElement.addEventListener("click",le=>{ce.domElement.requestPointerLock()}),oe.addEventListener("resize",le=>{ce.setPixelRatio(oe.devicePixelRatio),ce.setSize(oe.innerWidth,oe.innerHeight),E.aspect=oe.innerWidth/oe.innerHeight,E.updateProjectionMatrix()}),oe.addEventListener("keydown",le=>{switch(le.code){case"ShiftLeft":u===Zl?u=kw:u=Zl;break;case"KeyW":o=!0;break;case"KeyA":l=!0;break;case"KeyS":a=!0;break;case"KeyD":c=!0;break}}),oe.addEventListener("keyup",le=>{switch(console.log("Losgelasen: "+le.code),le.code){case"KeyW":o=!1;break;case"KeyA":l=!1;break;case"KeyS":a=!1;break;case"KeyD":c=!1;break}})}const{scene:p,camera:E,renderer:T,pointerLockControls:M,clock:O}=_();m(window,T);const D=st(null),I=new Gu(1,30,30),R=new ir({color:16776960,metalness:0,roughness:0}),x=new Tt(I,R);x.position.y=2,x.position.x=3,x.position.z=-4,p.add(x);const v=new CA(4210752,10);p.add(v);const C=new Vm(16777215,1e3,10);C.position.set(10,20,10),p.add(C);function B(){setTimeout(function(){requestAnimationFrame(B)},1e3/60),T.render(p,E);const oe=O.getDelta();z(oe)}function z(oe){const ce=new k;E.getWorldDirection(ce),ce.y=0,ce.normalize();const le=new k(0,1,0);s=E.position.clone(),(o||a||l||c)&&(o?c?s.addScaledVector(ce.applyAxisAngle(le,7*Math.PI/4),u*oe):l?s.addScaledVector(ce.applyAxisAngle(le,Math.PI/4),u*oe):a||s.addScaledVector(ce.applyAxisAngle(le,2*Math.PI),u*oe):a?c?s.addScaledVector(ce.applyAxisAngle(le,5*Math.PI/4),u*oe):l?s.addScaledVector(ce.applyAxisAngle(le,3*Math.PI/4),u*oe):s.addScaledVector(ce.applyAxisAngle(le,Math.PI),u*oe):c?l||s.addScaledVector(ce.applyAxisAngle(le,3*Math.PI/2),u*oe):l&&s.addScaledVector(ce.applyAxisAngle(le,Math.PI/2),u*oe),E.position.y=2)}function ne(){E.position.copy(s)}function ue(oe){console.log("INSIDE RENDER: ",oe);const ce=new jl,le=Math.PI;Array.from(r.keys()).filter(Pe=>!oe.map(J=>J.playerName).includes(Pe)).forEach(Pe=>{const J=r.get(Pe);if(J){const pe=p.getObjectById(J);r.delete(Pe),pe&&p.remove(pe)}}),oe.forEach(Pe=>{if(r.has(Pe.playerName)){const J=r.get(Pe.playerName);if(J){const pe=p.getObjectById(J);if(pe){const _e=new jn,N=new k;_e.getSize(N),_e.expandByObject(pe),pe.position.set(Pe.x-N.x/2,1,Pe.y),pe.rotation.y=Pe.angle+le}}}else{const J=new URL("/assets/snackman-DBG9Bl-Z.glb",import.meta.url).href;ce.load(J,pe=>{const _e=pe.scene;_e.scale.set(.5,.5,.5),r.set(Pe.playerName,_e.id),p.add(_e),_e.position.set(Pe.x,1,Pe.y),_e.rotation.y=Pe.angle+le})}})}function X(oe){const ce=new jl;oe.forEach(le=>{ce.load("/src/assets/game/realistic/chicken/chicken.gltf",Ce=>{const Pe=Ce.scene;Pe.position.set(le.x,1,le.y),Pe.scale.set(.03,.03,.03),Pe.rotateY(le.angle),p.add(Pe)})})}function ee(oe){const ce=new Ts(1,1,1),le=new Ts(1,2,1),Ce=new tu().load(KA),Pe=new tu().load(YA),J=new ir({map:Ce}),pe=new ir({map:Pe}),_e=new jl;let N=0;oe.forEach(ae=>{for(let Z=0;Z<ae.length;Z++)switch(ae[Z]){case"*":const me=new Tt(le,pe);me.position.set(N,1.5,Z),p.add(me);break;case" ":const Oe=new Tt(ce,J);Oe.position.set(N,0,Z),p.add(Oe);break;case"E":const w=new Tt(ce,J);w.position.set(N,0,Z),p.add(w);const P=Math.random()>.5?"/src/assets/game/items/E/strawberry_shortcake/strawberry_shortcake.glb":"/src/assets/game/items/E/chocolate_bar/chocolate_bar.glb";_e.load(P,L=>{console.log("Model geladen:",P);const U=L.scene;P.includes("chocolate_bar")?(U.position.set(N-2,.75,Z),U.scale.set(.2,.2,.2)):(U.position.set(N-2,.5,Z),U.scale.set(.5,.5,.5)),p.add(U),console.log(`Modell (E) Position: x=${U.position.x}, y=${U.position.y}, z=${U.position.z}`)},void 0,L=>{console.error("Fehler beim Laden des Modells:",L)});break;case"D":const b=new Tt(ce,J);b.position.set(N,0,Z),p.add(b);const te=Math.random()>.5?"/src/assets/game/items/D/cotton_candy/cottoncandy.glb":"/src/assets/game/items/D/popcorn/popcorn.glb";_e.load(te,L=>{console.log("Model geladen:",te);const U=L.scene;te.includes("popcorn")?(U.position.set(N-2,.75,Z),U.scale.set(.2,.2,.2)):(U.position.set(N-2,.5,Z),U.scale.set(.5,.5,.5)),p.add(U),console.log(`Modell (D) Position: x=${U.position.x}, y=${U.position.y}, z=${U.position.z}`)},void 0,L=>{console.error("Fehler beim Laden des Modells:",L)});break;case"C":const q=new Tt(ce,J);q.position.set(N,0,Z),p.add(q);const W=Math.random()>.5?"/src/assets/game/items/C/candy_cane/candycane.glb":"/src/assets/game/items/C/chips/chips.glb";_e.load(W,L=>{console.log("Model geladen:",W);const U=L.scene;W.includes("candycane")?(U.position.set(N-2,1,Z),U.scale.set(.1,.1,.1)):(U.position.set(N-3,1,Z),U.scale.set(.5,.5,.3)),p.add(U),console.log(`Modell (C) Position: x=${U.position.x}, y=${U.position.y}, z=${U.position.z}`)},void 0,L=>{console.error("Fehler beim Laden des Modells:",L)});break;case"B":const ie=new Tt(ce,J);ie.position.set(N,0,Z),p.add(ie);const he=Math.random()>.5?"/src/assets/game/items/B/apple/apple.glb":"/src/assets/game/items/B/banana/banana.glb";_e.load(he,L=>{console.log("Model geladen:",he);const U=L.scene;he.includes("apple")?(U.position.set(N-3,.75,Z),U.scale.set(.005,.005,.005)):(U.position.set(N-3,.5,Z),U.scale.set(.2,.2,.2)),p.add(U),console.log(`Modell (B) Position: x=${U.position.x}, y=${U.position.y}, z=${U.position.z}`)},void 0,L=>{console.error("Fehler beim Laden des Modells:",L)});break;case"A":const Q=new Tt(ce,J);Q.position.set(N,0,Z),p.add(Q);const S=Math.random()>.5?"/src/assets/game/items/A/ginger/ginger.glb":"/src/assets/game/items/A/lemon/lemon.glb";_e.load(S,L=>{console.log("Model geladen:",S);const U=L.scene;S.includes("ginger")?(U.position.set(N-3,1,Z-1),U.scale.set(.2,.2,.2)):(U.position.set(N-3,1,Z),U.scale.set(.5,.5,.5)),p.add(U),console.log(`Modell (A) Position: x=${U.position.x}, y=${U.position.y}, z=${U.position.z}`)},void 0,L=>{console.error("Fehler beim Laden des Modells:",L)});break;default:const y=new Tt(ce,J);y.position.set(N,0,Z),p.add(y)}N++})}async function G(oe){let ce=[];oe.forEach(le=>{sessionStorage.getItem("myName")!==le.name&&ce.push({playerName:le.name,x:le.posX,y:le.posY,angle:le.angleInDegrees})}),ue(ce)}return gi(async()=>{var ce;try{await e.fetchGameStatus()}catch(le){console.error("Error fetching game status:",le)}e.gameState.gamedata.chickens===null?(g.value=[],console.log("Keine Positionsdaten weil Chicken Array leer")):(g.value=e.gameState.gamedata.chickens,console.log("Chickens-Positionsdaten: "+g.value)),Jr(`/ingame/playerPositions/${i}`,async le=>{switch(le.type){case"playerPosition":console.log("FROM PLAYER POSITON: ",le.feedback),await G(le.feedback);break}}),Jr(`/ingame/${i}`,async le=>{switch(le.type){case"playerMoveValidation":le.feedback.playerName===sessionStorage.getItem("myName")&&(console.log("FROM PLAYER MOVE VALIDATION: ",le.feedback),console.log("recevied validation"),ne());break}}),D.value&&D.value.appendChild(T.domElement);const oe=(ce=e.gameState.gamedata.playmap)==null?void 0:ce.map;oe?ee(oe):console.error("No map found"),X(g.value),B()}),(oe,ce)=>(Ne(),ke(dt,null,[re("div",{ref_key:"threeContainer",ref:D,id:"app",class:"gameContainer relative z-20"},null,512),re("div",Lw,[re("div",Iw,[d.value.length>0?(Ne(),ke("div",Dw,Pt(d.value.join(", ")),1)):(Ne(),ke("div",Nw))]),re("div",Uw,[re("div",Ow,[(Ne(!0),ke(dt,null,Gi(f.value,le=>(Ne(),ke("div",{key:le},[le<=h.value?(Ne(),ke("img",Fw)):(Ne(),ke("img",Bw))]))),128))])])])],64))}}),Vw=["min","max"],zw=["min","max"],Gw=["onClick","data-value"],Ww=pn({__name:"MapCreator",setup(n){const e=wu();return gi(async()=>{await e.fetchMaps(),console.log("Aktuelle Maps:",e.mapsDTD.maps)}),gi(async()=>{await e.fetchGridLimits(),console.log("grid min:",e.minGridSize),console.log("grid max:",e.maxGridSize)}),(t,i)=>(Ne(),ke(dt,null,[re("div",null,[i[5]||(i[5]=re("h1",null,"Map Creator",-1)),i[6]||(i[6]=re("p",null,"Gib einen Namen für die Map ein:",-1)),un(re("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=s=>we(e).mapName=s),placeholder:"Map Name"},null,512),[[Pn,we(e).mapName]]),i[7]||(i[7]=re("p",null,"Definiere die Größe des Spielfelds:",-1)),i[8]||(i[8]=re("p",null," Zeilen:",-1)),un(re("input",{type:"number","onUpdate:modelValue":i[1]||(i[1]=s=>we(e).rows=s),placeholder:"Anzahl der Reihen",min:we(e).minGridSize,max:we(e).maxGridSize},null,8,Vw),[[Pn,we(e).rows]]),i[9]||(i[9]=re("p",null,"Spalten:",-1)),un(re("input",{type:"number","onUpdate:modelValue":i[2]||(i[2]=s=>we(e).cols=s),placeholder:"Anzahl der Spalten",min:we(e).minGridSize,max:we(e).maxGridSize},null,8,zw),[[Pn,we(e).cols]]),re("button",{class:"buttons-top-bottom",onClick:i[3]||(i[3]=(...s)=>we(e).createGrid&&we(e).createGrid(...s))},"Spielfeld erstellen")]),i[10]||(i[10]=re("br",null,null,-1)),i[11]||(i[11]=re("br",null,null,-1)),we(e).grid.length>0?(Ne(),ke("div",{key:0,class:"grid-container",style:xo({gridTemplateColumns:`repeat(${we(e).cols}, 50px)`,gridTemplateRows:`repeat(${we(e).rows}, 50px)`})},[(Ne(!0),ke(dt,null,Gi(we(e).grid.flat(),(s,r)=>(Ne(),ke("div",{key:"cell-"+r,class:"grid-cell",onClick:o=>we(e).updateCell(Math.floor(r/we(e).cols),r%we(e).cols),"data-value":s},Pt(s),9,Gw))),128))],4)):At("",!0),i[12]||(i[12]=re("br",null,null,-1)),i[13]||(i[13]=re("br",null,null,-1)),re("button",{class:"buttons-top-bottom",onClick:i[4]||(i[4]=(...s)=>we(e).saveMap&&we(e).saveMap(...s))},"Create")],64))}}),Xw=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},$w=Xw(Ww,[["__scopeId","data-v-5a962335"]]),jw={key:0},qw={key:0,class:"h-screen bg-green-800 flex flex-col items-center justify-center"},Kw={class:"text-3xl text-zinc-300 mb-8"},Yw={class:"font-bold"},Zw={key:1,class:"h-screen bg-red-800 flex flex-col items-center justify-center"},Jw={class:"text-3xl text-zinc-300 mb-8"},Qw={class:"font-bold"},eR={key:1},tR={key:0,class:"h-screen bg-green-800 flex flex-col items-center justify-center"},nR={class:"text-3xl text-zinc-300 mb-8"},iR={class:"font-bold"},sR={key:1,class:"h-screen bg-red-800 flex flex-col items-center justify-center"},rR={class:"text-3xl text-zinc-300 mb-8"},oR={class:"font-bold"},aR=pn({__name:"GameEnd",setup(n){const e=Eu(),t=st({name:"TestPlayer",email:"test@example.com",password:"testpassword123",playertype:Xa.GUEST,playerrole:dn.SNACKMAN}),i=st({snackman:{life:0,nutriscore:100},ghost:{touchcount:0}});function s(){const c=e.params.id;c?La.push({name:"lobbyWithId",params:{id:c}}):console.error("Lobby ID not found")}const r=St(()=>i.value.snackman.life>0||i.value.snackman.nutriscore>=100),o=St(()=>i.value.snackman.life<=0&&i.value.snackman.nutriscore<100),a=St(()=>o.value),l=St(()=>r.value);return(c,u)=>(Ne(),ke(dt,null,[t.value.playerrole===we(dn).GHOST?(Ne(),ke("div",jw,[a.value?(Ne(),ke("div",qw,[u[1]||(u[1]=re("h1",{class:"text-4xl font-bold text-white mb-6"},"Victory!",-1)),u[2]||(u[2]=re("p",{class:"text-3xl text-zinc-300 mb-4"}," As the Ghost, you won! The Snackman has no lives left. ",-1)),re("p",Kw,[u[0]||(u[0]=ps(" Touchcount: ")),re("span",Yw,Pt(i.value.ghost.touchcount),1)]),re("button",{class:"bg-yellow-500 text-zinc-900 px-6 py-3 rounded-lg hover:bg-yellow-600 transition",onClick:s}," Back to lobby ")])):At("",!0),l.value?(Ne(),ke("div",Zw,[u[4]||(u[4]=re("h1",{class:"text-4xl font-bold text-white mb-6"},"Defeat!",-1)),u[5]||(u[5]=re("p",{class:"text-3xl text-zinc-300 mb-4"}," As the Ghost, you lost! ",-1)),re("p",Jw,[u[3]||(u[3]=ps(" Touchcount: ")),re("span",Qw,Pt(i.value.ghost.touchcount),1)]),re("button",{class:"bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition",onClick:s}," Back to lobby ")])):At("",!0)])):At("",!0),t.value.playerrole===we(dn).SNACKMAN?(Ne(),ke("div",eR,[r.value?(Ne(),ke("div",tR,[u[7]||(u[7]=re("h1",{class:"text-4xl font-bold text-white mb-6"},"Victory!",-1)),u[8]||(u[8]=re("p",{class:"text-3xl text-zinc-300 mb-4"}," As the Snackman, you won! ",-1)),re("p",nR,[u[6]||(u[6]=ps(" Nutriscore: ")),re("span",iR,Pt(i.value.snackman.nutriscore),1)]),re("button",{class:"bg-yellow-500 text-zinc-900 px-6 py-3 rounded-lg hover:bg-yellow-600 transition",onClick:s}," Back to lobby ")])):At("",!0),o.value?(Ne(),ke("div",sR,[u[10]||(u[10]=re("h1",{class:"text-4xl font-bold text-white mb-6"},"Defeat!",-1)),u[11]||(u[11]=re("p",{class:"text-3xl text-zinc-300 mb-4"}," As the Snackman, you lost! Your lives have dropped to 0. ",-1)),re("p",rR,[u[9]||(u[9]=ps(" Nutriscore: ")),re("span",oR,Pt(i.value.snackman.nutriscore),1)]),re("button",{class:"bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition",onClick:s}," Back to lobby ")])):At("",!0)])):At("",!0)],64))}}),lR={key:0},cR={key:1},uR=pn({__name:"TestView",setup(n){const e=wu(),{mapsDTD:t}=Rx(e);return gi(async()=>{console.log("Selected Map at Mount:",e.mapsDTD.selectedMap),e.mapsDTD.selectedMap?(await e.fetchMaps(),console.log("Map Data Fetched:",t.value)):console.error("No selected map.")}),(i,s)=>{var r;return Ne(),ke("div",null,[re("h1",null,"Selected Map: "+Pt(we(e).mapsDTD.selectedMap),1),we(e).mapsDTD.maps.length>0?(Ne(),ke("div",lR,[s[0]||(s[0]=re("p",null,"Map Data:",-1)),re("ul",null,[(Ne(!0),ke(dt,null,Gi((r=we(t).selectedMap)==null?void 0:r.map,(o,a)=>(Ne(),ke("li",{key:a},[(Ne(!0),ke(dt,null,Gi(o,(l,c)=>(Ne(),ke("div",{key:c},Pt(l),1))),128))]))),128))])])):(Ne(),ke("p",cR,"No map data available"))])}}}),La=xx({history:Kv("/"),routes:[{path:"/",redirect:"/index"},{path:"/index",name:"index",component:$x},{path:"/lobby/:id",name:"lobbyWithId",component:D0},{path:"/lobby",name:"lobbyList",component:s0},{path:"/lobby/:id/ingame",name:"game",component:Hw},{path:"/createmap",name:"createmap",component:$w},{path:"/:id/GameEnd",name:"GameEnd",component:aR},{path:"/test-view",name:"test-view",component:uR}]}),hR=Sx(),ju=gv(Mx);ju.use(hR);ju.use(La);ju.mount("#app");
