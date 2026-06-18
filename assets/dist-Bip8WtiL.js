import{r as qf}from"./rolldown-runtime-km5iIlDX.js";import{br as Yf}from"./r3f-D0ioaigO.js";import{n as Gf,t as zf}from"./hls-ex_9fZ9R.js";import{n as Nn,t as Qf}from"./dist-_ONsYpPL.js";var li=qf(Yf(),1),Zf=Object.create,Lm=Object.defineProperty,jf=Object.getOwnPropertyDescriptor,Xf=Object.getOwnPropertyNames,Jf=Object.getPrototypeOf,eE=Object.prototype.hasOwnProperty,Cm=function(e,t){return function(){return e&&(t=e(e=0)),t}},Ye=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},tE=function(e,t,i,a){if(t&&typeof t=="object"||typeof t=="function")for(var r=Xf(t),n=0,s=r.length,o;n<s;n++)o=r[n],!eE.call(e,o)&&o!==i&&Lm(e,o,{get:function(l){return t[l]}.bind(null,o),enumerable:!(a=jf(t,o))||a.enumerable});return e},ut=function(e,t,i){return i=e!=null?Zf(Jf(e)):{},tE(t||!e||!e.__esModule?Lm(i,"default",{value:e,enumerable:!0}):i,e)},Zt=Ye(function(e,t){var i;typeof window<"u"?i=window:typeof global<"u"?i=global:typeof self<"u"?i=self:i={},t.exports=i});function ha(e,t){return t!=null&&typeof Symbol<"u"&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):ha(e,t)}var ma=Cm(function(){ma()});function Dm(e){"@swc/helpers - typeof";return e&&typeof Symbol<"u"&&e.constructor===Symbol?"symbol":typeof e}var Mm=Cm(function(){}),xm=Ye(function(e,t){var i=Array.prototype.slice;t.exports=a;function a(r,n){for(("length"in r)||(r=[r]),r=i.call(r);r.length;){var s=r.shift(),o=n(s);if(o)return o;s.childNodes&&s.childNodes.length&&(r=i.call(s.childNodes).concat(r))}}}),iE=Ye(function(e,t){ma(),t.exports=i;function i(a,r){if(!ha(this,i))return new i(a,r);this.data=a,this.nodeValue=a,this.length=a.length,this.ownerDocument=r||null}i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),aE=Ye(function(e,t){ma(),t.exports=i;function i(a,r){if(!ha(this,i))return new i(a);this.data=a||"",this.length=this.data.length,this.ownerDocument=r||null}i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(a,r,n){var s=this.data,o=s.substring(0,a),l=s.substring(a+r,s.length);this.data=o+n+l,this.length=this.data.length}}),Om=Ye(function(e,t){t.exports=i;function i(a){var r=this,n=a.type;a.target||(a.target=r),r.listeners||(r.listeners={});var s=r.listeners[n];if(s)return s.forEach(function(o){a.currentTarget=r,typeof o=="function"?o(a):o.handleEvent(a)});r.parentNode&&r.parentNode.dispatchEvent(a)}}),Nm=Ye(function(e,t){t.exports=i;function i(a,r){var n=this;n.listeners||(n.listeners={}),n.listeners[a]||(n.listeners[a]=[]),n.listeners[a].indexOf(r)===-1&&n.listeners[a].push(r)}}),Pm=Ye(function(e,t){t.exports=i;function i(a,r){var n=this;if(n.listeners&&n.listeners[a]){var s=n.listeners[a],o=s.indexOf(r);o!==-1&&s.splice(o,1)}}}),rE=Ye(function(e,t){Mm(),t.exports=a;var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(d){switch(d.nodeType){case 3:return p(d.data);case 8:return"<!--"+d.data+"-->";default:return r(d)}}function r(d){var h=[],v=d.tagName;return d.namespaceURI==="http://www.w3.org/1999/xhtml"&&(v=v.toLowerCase()),h.push("<"+v+u(d)+o(d)),i.indexOf(v)>-1?h.push(" />"):(h.push(">"),d.childNodes.length?h.push.apply(h,d.childNodes.map(a)):d.textContent||d.innerText?h.push(p(d.textContent||d.innerText)):d.innerHTML&&h.push(d.innerHTML),h.push("</"+v+">")),h.join("")}function n(d,h){var v=Dm(d[h]);return h==="style"&&Object.keys(d.style).length>0?!0:d.hasOwnProperty(h)&&(v==="string"||v==="boolean"||v==="number")&&h!=="nodeName"&&h!=="className"&&h!=="tagName"&&h!=="textContent"&&h!=="innerText"&&h!=="namespaceURI"&&h!=="innerHTML"}function s(d){if(typeof d=="string")return d;var h="";return Object.keys(d).forEach(function(v){var T=d[v];v=v.replace(/[A-Z]/g,function(b){return"-"+b.toLowerCase()}),h+=v+":"+T+";"}),h}function o(d){var h=d.dataset,v=[];for(var T in h)v.push({name:"data-"+T,value:h[T]});return v.length?l(v):""}function l(d){var h=[];return d.forEach(function(v){var T=v.name,b=v.value;T==="style"&&(b=s(b)),h.push(T+'="'+m(b)+'"')}),h.length?" "+h.join(" "):""}function u(d){var h=[];for(var v in d)n(d,v)&&h.push({name:v,value:d[v]});for(var T in d._attributes)for(var b in d._attributes[T]){var _=d._attributes[T][b],y=(_.prefix?_.prefix+":":"")+b;h.push({name:y,value:_.value})}return d.className&&h.push({name:"class",value:d.className}),h.length?l(h):""}function p(d){var h="";return typeof d=="string"?h=d:d&&(h=d.toString()),h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function m(d){return p(d).replace(/"/g,"&quot;")}}),Um=Ye(function(e,t){ma();var i=xm(),a=Om(),r=Nm(),n=Pm(),s=rE(),o="http://www.w3.org/1999/xhtml";t.exports=l;function l(u,p,m){if(!ha(this,l))return new l(u);var d=m===void 0?o:m||null;this.tagName=d===o?String(u).toUpperCase():u,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=p||null,this.namespaceURI=d,this._attributes={},this.tagName==="INPUT"&&(this.type="text")}l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(u){return u.parentNode&&u.parentNode.removeChild(u),this.childNodes.push(u),u.parentNode=this,u},l.prototype.replaceChild=function(u,p){u.parentNode&&u.parentNode.removeChild(u);var m=this.childNodes.indexOf(p);return p.parentNode=null,this.childNodes[m]=u,u.parentNode=this,p},l.prototype.removeChild=function(u){var p=this.childNodes.indexOf(u);return this.childNodes.splice(p,1),u.parentNode=null,u},l.prototype.insertBefore=function(u,p){u.parentNode&&u.parentNode.removeChild(u);var m=p==null?-1:this.childNodes.indexOf(p);return m>-1?this.childNodes.splice(m,0,u):this.childNodes.push(u),u.parentNode=this,u},l.prototype.setAttributeNS=function(u,p,m){var d=null,h=p,v=p.indexOf(":");if(v>-1&&(d=p.substr(0,v),h=p.substr(v+1)),this.tagName==="INPUT"&&p==="type")this.type=m;else{var T=this._attributes[u]||(this._attributes[u]={});T[h]={value:m,prefix:d}}},l.prototype.getAttributeNS=function(u,p){var m=this._attributes[u],d=m&&m[p]&&m[p].value;return this.tagName==="INPUT"&&p==="type"?this.type:typeof d!="string"?null:d},l.prototype.removeAttributeNS=function(u,p){var m=this._attributes[u];m&&delete m[p]},l.prototype.hasAttributeNS=function(u,p){var m=this._attributes[u];return!!m&&p in m},l.prototype.setAttribute=function(u,p){return this.setAttributeNS(null,u,p)},l.prototype.getAttribute=function(u){return this.getAttributeNS(null,u)},l.prototype.removeAttribute=function(u){return this.removeAttributeNS(null,u)},l.prototype.hasAttribute=function(u){return this.hasAttributeNS(null,u)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(u){var p=u.split(" "),m=[];return i(this,function(d){if(d.nodeType===1){var h=(d.className||"").split(" ");p.every(function(v){return h.indexOf(v)!==-1})&&m.push(d)}}),m},l.prototype.getElementsByTagName=function(u){u=u.toLowerCase();var p=[];return i(this.childNodes,function(m){m.nodeType===1&&(u==="*"||m.tagName.toLowerCase()===u)&&p.push(m)}),p},l.prototype.contains=function(u){return i(this,function(p){return u===p})||!1}}),nE=Ye(function(e,t){ma();var i=Um();t.exports=a;function a(r){if(!ha(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=r||null}a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(r){return String(r)}).join("")}}),sE=Ye(function(e,t){t.exports=i;function i(a){}i.prototype.initEvent=function(a,r,n){this.type=a,this.bubbles=r,this.cancelable=n},i.prototype.preventDefault=function(){}}),oE=Ye(function(e,t){ma();var i=xm(),a=iE(),r=aE(),n=Um(),s=nE(),o=sE(),l=Om(),u=Nm(),p=Pm();t.exports=m;function m(){if(!ha(this,m))return new m;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}var d=m.prototype;d.createTextNode=function(h){return new r(h,this)},d.createElementNS=function(h,v){var T=h===null?null:String(h);return new n(v,this,T)},d.createElement=function(h){return new n(h,this)},d.createDocumentFragment=function(){return new s(this)},d.createEvent=function(h){return new o(h)},d.createComment=function(h){return new a(h,this)},d.getElementById=function(h){return h=String(h),i(this.childNodes,function(v){if(String(v.id)===h)return v})||null},d.getElementsByClassName=n.prototype.getElementsByClassName,d.getElementsByTagName=n.prototype.getElementsByTagName,d.contains=n.prototype.contains,d.removeEventListener=p,d.addEventListener=u,d.dispatchEvent=l}),lE=Ye(function(e,t){t.exports=new(oE())}),$m=Ye(function(e,t){var i=typeof global<"u"?global:typeof window<"u"?window:{},a=lE(),r;typeof document<"u"?r=document:(r=i["__GLOBAL_DOCUMENT_CACHE@4"],r||(r=i["__GLOBAL_DOCUMENT_CACHE@4"]=a)),t.exports=r});function dE(e){if(Array.isArray(e))return e}function uE(e,t){var i=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(i!=null){var a=[],r=!0,n=!1,s,o;try{for(i=i.call(e);!(r=(s=i.next()).done)&&(a.push(s.value),!(t&&a.length===t));r=!0);}catch(l){n=!0,o=l}finally{try{!r&&i.return!=null&&i.return()}finally{if(n)throw o}}return a}}function cE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bl(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function Hm(e,t){if(e){if(typeof e=="string")return Bl(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(i);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Bl(e,t)}}function mi(e,t){return dE(e)||uE(e,t)||Hm(e,t)||cE()}var nn=ut(Zt()),Qc=ut(Zt()),hE=ut(Zt()),Le={now:function(){var e=hE.default.performance,t=e&&e.timing,i=t&&t.navigationStart,a=typeof i=="number"&&typeof e.now=="function"?i+e.now():Date.now();return Math.round(a)}},_n=function(){var e,t,i;if(typeof((e=Qc.default.crypto)===null||e===void 0?void 0:e.getRandomValues)=="function"){i=new Uint8Array(32),Qc.default.crypto.getRandomValues(i);for(var a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=Math.random()*16|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(l){var u=l==="x"?i[n]:i[n]&3|8;return n++,u.toString(16)});var s=Le.now(),o=s?.toString(16).substring(3);return o?t.substring(0,28)+o:t},Bm=function(){return("000000"+(Math.random()*Math.pow(36,6)<<0).toString(36)).slice(-6)},vt=function(e){if(e&&typeof e.nodeName<"u")return e.muxId||(e.muxId=Bm()),e.muxId;var t;try{t=document.querySelector(e)}catch{}return t&&!t.muxId&&(t.muxId=e),t?.muxId||e},po=function(e){var t;e&&typeof e.nodeName<"u"?(t=e,e=vt(t)):t=document.querySelector(e);var i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function mE(e){if(Array.isArray(e))return Bl(e)}function pE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function vE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ft(e){return mE(e)||pE(e)||Hm(e)||vE()}var ea={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},fE=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,i,a,r,n,s,o=e?[console,e]:[console],l=(i=console.trace).bind.apply(i,ft(o)),u=(a=console.info).bind.apply(a,ft(o)),p=(r=console.debug).bind.apply(r,ft(o)),m=(n=console.warn).bind.apply(n,ft(o)),d=(s=console.error).bind.apply(s,ft(o)),h=t;return{trace:function(){for(var v=arguments.length,T=new Array(v),b=0;b<v;b++)T[b]=arguments[b];if(!(h>ea.TRACE))return l.apply(void 0,ft(T))},debug:function(){for(var v=arguments.length,T=new Array(v),b=0;b<v;b++)T[b]=arguments[b];if(!(h>ea.DEBUG))return p.apply(void 0,ft(T))},info:function(){for(var v=arguments.length,T=new Array(v),b=0;b<v;b++)T[b]=arguments[b];if(!(h>ea.INFO))return u.apply(void 0,ft(T))},warn:function(){for(var v=arguments.length,T=new Array(v),b=0;b<v;b++)T[b]=arguments[b];if(!(h>ea.WARN))return m.apply(void 0,ft(T))},error:function(){for(var v=arguments.length,T=new Array(v),b=0;b<v;b++)T[b]=arguments[b];if(!(h>ea.ERROR))return d.apply(void 0,ft(T))},get level(){return h},set level(v){v!==this.level&&(h=v??t)}}},ee=fE("[mux]"),El=ut(Zt());function Wl(){return(El.default.doNotTrack||El.default.navigator&&El.default.navigator.doNotTrack)==="1"}function P(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}ma();function pe(e,t){if(!ha(e,t))throw new TypeError("Cannot call a class as a function")}function Zc(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ct(e,t,i){return t&&Zc(e.prototype,t),i&&Zc(e,i),e}function w(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function or(e){return or=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},or(e)}function EE(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=or(e),e!==null););return e}function ts(e,t,i){return typeof Reflect<"u"&&Reflect.get?ts=Reflect.get:ts=function(a,r,n){var s=EE(a,r);if(s){var o=Object.getOwnPropertyDescriptor(s,r);return o.get?o.get.call(n||a):o.value}},ts(e,t,i||e)}function Fl(e,t){return Fl=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},Fl(e,t)}function _E(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Fl(e,t)}function gE(e,t){if(e==null)return{};var i={},a=Object.keys(e),r,n;for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&(i[r]=e[r]);return i}function bE(e,t){if(e==null)return{};var i=gE(e,t),a,r;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function yE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}Mm();function TE(e,t){return t&&(Dm(t)==="object"||typeof t=="function")?t:P(e)}function AE(e){var t=yE();return function(){var i=or(e),a;if(t){var r=or(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return TE(this,a)}}var At=function(e){return gn(e)[0]},gn=function(e){if(typeof e!="string"||e==="")return["localhost"];var t=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4],i;return t&&(i=(t.match(/[^\.]+\.[^\.]+$/)||[])[0]),[t,i]},_l=ut(Zt()),vo={exists:function(){var e=_l.default.performance;return(e&&e.timing)!==void 0},domContentLoadedEventEnd:function(){var e=_l.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=_l.default.performance,t=e&&e.timing;return t&&t.navigationStart}};function ke(e,t,i){i=i===void 0?1:i,e[t]=e[t]||0,e[t]+=i}function bn(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{},a=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable}))),a.forEach(function(r){w(e,r,i[r])})}return e}function kE(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),i.push.apply(i,a)}return i}function su(e,t){return t=t??{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):kE(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var wE=["x-cdn","content-type"],Wm=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],SE=wE.concat(Wm);function ou(e){e=e||"";var t={};return e.trim().split(/[\r\n]+/).forEach(function(i){if(i){var a=i.split(": "),r=a.shift();r&&(SE.indexOf(r.toLowerCase())>=0||r.toLowerCase().indexOf("x-litix-")===0)&&(t[r]=a.join(": "))}}),t}function fo(e){if(e){var t=Wm.find(function(i){return e[i]!==void 0});return t?e[t]:void 0}}var IE=function(e){var t={};for(var i in e){var a=e[i];if(a["DATA-ID"].search("io.litix.data.")!==-1){var r=a["DATA-ID"].replace("io.litix.data.","");t[r]=a.VALUE}}return t},Fm=IE,Pn=function(e){if(!e)return{};var t=vo.navigationStart(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},br=function(e){if(!(!e||typeof e.getAllResponseHeaders!="function"))return ou(e.getAllResponseHeaders())},RE=function(e,t,i){arguments.length>3&&arguments[3]!==void 0&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(b){var _=parseInt(a.version),y;return _===1&&b.programDateTime!==null&&(y=b.programDateTime),_===0&&b.pdt!==null&&(y=b.pdt),y};if(!vo.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(b,_){return e.emit(t,b,_)},l=function(b,_){var y=_.levels,g=_.audioTracks,S=_.url,C=_.stats,N=_.networkDetails,$=_.sessionData,q={},Y={};y.forEach(function(ve,$e){q[$e]={width:ve.width,height:ve.height,bitrate:ve.bitrate,attrs:ve.attrs}}),g.forEach(function(ve,$e){Y[$e]={name:ve.name,language:ve.lang,bitrate:ve.bitrate}});var U=Pn(C),le=U.bytesLoaded,Pe=U.requestStart,Ge=U.responseStart,ze=U.responseEnd;o("requestcompleted",su(bn({},Fm($)),{request_event_type:b,request_bytes_loaded:le,request_start:Pe,request_response_start:Ge,request_response_end:ze,request_type:"manifest",request_hostname:At(S),request_response_headers:br(N),request_rendition_lists:{media:q,audio:Y,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var u=function(b,_){var y=_.details,g=_.level,S=_.networkDetails,C=_.stats,N=Pn(C),$=N.bytesLoaded,q=N.requestStart,Y=N.responseStart,U=N.responseEnd,le=y.fragments[y.fragments.length-1],Pe=s(le)+n(le.duration);o("requestcompleted",{request_event_type:b,request_bytes_loaded:$,request_start:q,request_response_start:Y,request_response_end:U,request_current_level:g,request_type:"manifest",request_hostname:At(y.url),request_response_headers:br(S),video_holdback:y.holdBack&&n(y.holdBack),video_part_holdback:y.partHoldBack&&n(y.partHoldBack),video_part_target_duration:y.partTarget&&n(y.partTarget),video_target_duration:y.targetduration&&n(y.targetduration),video_source_is_live:y.live,player_manifest_newest_program_time:isNaN(Pe)?void 0:Pe})};i.on(a.Events.LEVEL_LOADED,u);var p=function(b,_){var y=_.details,g=_.networkDetails,S=_.stats,C=Pn(S),N=C.bytesLoaded,$=C.requestStart,q=C.responseStart,Y=C.responseEnd;o("requestcompleted",{request_event_type:b,request_bytes_loaded:N,request_start:$,request_response_start:q,request_response_end:Y,request_type:"manifest",request_hostname:At(y.url),request_response_headers:br(g)})};i.on(a.Events.AUDIO_TRACK_LOADED,p);var m=function(b,_){var y=_.stats,g=_.networkDetails,S=_.frag;y=y||S.stats;var C=Pn(y),N=C.bytesLoaded,$=C.requestStart,q=C.responseStart,Y=C.responseEnd,U=g?br(g):void 0,le={request_event_type:b,request_bytes_loaded:N,request_start:$,request_response_start:q,request_response_end:Y,request_hostname:g?At(g.responseURL):void 0,request_id:U?fo(U):void 0,request_response_headers:U,request_media_duration:S.duration,request_url:g?.responseURL};S.type==="main"?(le.request_type="media",le.request_current_level=S.level,le.request_video_width=(i.levels[S.level]||{}).width,le.request_video_height=(i.levels[S.level]||{}).height,le.request_labeled_bitrate=(i.levels[S.level]||{}).bitrate):le.request_type=S.type,o("requestcompleted",le)};i.on(a.Events.FRAG_LOADED,m);var d=function(b,_){var y=_.frag,g=y.start;o("fragmentchange",{currentFragmentPDT:s(y),currentFragmentStart:n(g)})};i.on(a.Events.FRAG_CHANGED,d);var h=function(b,_){var y=_.type,g=_.details,S=_.response,C=_.fatal,N=_.frag,$=_.networkDetails,q=N?.url||_.url||"",Y=$?br($):void 0;if((g===a.ErrorDetails.MANIFEST_LOAD_ERROR||g===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||g===a.ErrorDetails.FRAG_LOAD_ERROR||g===a.ErrorDetails.FRAG_LOAD_TIMEOUT||g===a.ErrorDetails.LEVEL_LOAD_ERROR||g===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||g===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||g===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||g===a.ErrorDetails.SUBTITLE_LOAD_ERROR||g===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||g===a.ErrorDetails.KEY_LOAD_ERROR||g===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:g,request_url:q,request_hostname:At(q),request_id:Y?fo(Y):void 0,request_type:g===a.ErrorDetails.FRAG_LOAD_ERROR||g===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":g===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||g===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":g===a.ErrorDetails.SUBTITLE_LOAD_ERROR||g===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":g===a.ErrorDetails.KEY_LOAD_ERROR||g===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:S?.code,request_error_text:S?.text}),C){var U;o("error",{player_error_code:y,player_error_message:g,player_error_context:"".concat(q?"url: ".concat(q,`
`):"")+"".concat(S&&(S.code||S.text)?"response: ".concat(S.code,", ").concat(S.text,`
`):"")+"".concat(_.reason?"failure reason: ".concat(_.reason,`
`):"")+"".concat(_.level?"level: ".concat(_.level,`
`):"")+"".concat(_.parent?"parent stream controller: ".concat(_.parent,`
`):"")+"".concat(_.buffer?"buffer length: ".concat(_.buffer,`
`):"")+"".concat(_.error?"error: ".concat(_.error,`
`):"")+"".concat(_.event?"event: ".concat(_.event,`
`):"")+"".concat(_.err?"error message: ".concat((U=_.err)===null||U===void 0?void 0:U.message,`
`):"")})}};i.on(a.Events.ERROR,h);var v=function(b,_){var y=_.frag,g=y&&y._url||"";o("requestcanceled",{request_event_type:b,request_url:g,request_type:"media",request_hostname:At(g)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v);var T=function(b,_){var y=_.level,g=i.levels[y];if(g&&g.attrs&&g.attrs.BANDWIDTH){var S=g.attrs.BANDWIDTH,C,N=parseFloat(g.attrs["FRAME-RATE"]);isNaN(N)||(C=N),S?o("renditionchange",{video_source_fps:C,video_source_bitrate:S,video_source_width:g.width,video_source_height:g.height,video_source_rendition_name:g.name,video_source_codec:g?.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,T),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,u),i.off(a.Events.AUDIO_TRACK_LOADED,p),i.off(a.Events.FRAG_LOADED,m),i.off(a.Events.FRAG_CHANGED,d),i.off(a.Events.ERROR,h),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v),i.off(a.Events.LEVEL_SWITCHED,T),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},LE=function(e){e&&typeof e._stopMuxMonitor=="function"&&e._stopMuxMonitor()},jc=function(e,t){if(!e||!e.requestEndDate)return{};var i=At(e.url),a=e.url,r=e.bytesLoaded,n=new Date(e.requestStartDate).getTime(),s=new Date(e.firstByteDate).getTime(),o=new Date(e.requestEndDate).getTime(),l=isNaN(e.duration)?0:e.duration,u=typeof t.getMetricsFor=="function"?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType),p;u.length>0&&(p=ou(u[u.length-1]._responseHeaders||""));var m=p?fo(p):void 0;return{requestStart:n,requestResponseStart:s,requestResponseEnd:o,requestBytesLoaded:r,requestResponseHeaders:p,requestMediaDuration:l,requestHostname:i,requestUrl:a,requestId:m}},CE=function(e,t){if(typeof t.getCurrentRepresentationForType=="function"){var i=t.getCurrentRepresentationForType(e);return i?{currentLevel:i.absoluteIndex,renditionWidth:i.width||null,renditionHeight:i.height||null,renditionBitrate:i.bandwidth}:{}}var a=t.getQualityFor(e),r=t.getCurrentTrackFor(e).bitrateList;return r?{currentLevel:a,renditionWidth:r[a].width||null,renditionHeight:r[a].height||null,renditionBitrate:r[a].bandwidth}:{}},DE=function(e){var t;return(t=e.match(/.*codecs\*?="(.*)"/))===null||t===void 0?void 0:t[1]},ME=function(e){try{var t,i;return(i=e.getVersion)===null||i===void 0||(t=i.call(e))===null||t===void 0?void 0:t.split(".").map(function(a){return parseInt(a)})[0]}catch{return!1}},xE=function(e,t,i){arguments.length>3&&arguments[3]!==void 0&&arguments[3];var a=e.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=ME(i),n=function(y,g){return e.emit(t,y,g)},s=function(y){var g=y.type,S=(y.data||{}).url;n("requestcompleted",{request_event_type:g,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:At(S),request_url:S})};i.on("manifestLoaded",s);var o={},l=function(y){if(typeof y.getRequests!="function")return null;var g=y.getRequests({state:"executed"});return g.length===0?null:g[g.length-1]},u=function(y){var g=y.type,S=y.fragmentModel,C=y.chunk;p({type:g,request:l(S),chunk:C})},p=function(y){var g=y.type,S=y.chunk,C=y.request,N=(S||{}).mediaInfo||{},$=N.type,q=N.bitrateList;q=q||[];var Y={};q.forEach(function(Qe,we){Y[we]={},Y[we].width=Qe.width,Y[we].height=Qe.height,Y[we].bitrate=Qe.bandwidth,Y[we].attrs={}}),$==="video"?o.video=Y:$==="audio"?o.audio=Y:o.media=Y;var U=jc(C,i),le=U.requestStart,Pe=U.requestResponseStart,Ge=U.requestResponseEnd,ze=U.requestResponseHeaders,ve=U.requestMediaDuration,$e=U.requestHostname,It=U.requestUrl,He=U.requestId;n("requestcompleted",{request_event_type:g,request_start:le,request_response_start:Pe,request_response_end:Ge,request_bytes_loaded:-1,request_type:$+"_init",request_response_headers:ze,request_hostname:$e,request_id:He,request_url:It,request_media_duration:ve,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",p):i.on("initFragmentLoaded",u);var m=function(y){var g=y.type,S=y.fragmentModel,C=y.chunk;d({type:g,request:l(S),chunk:C})},d=function(y){var g=y.type,S=y.chunk,C=y.request,N=S||{},$=N.mediaInfo,q=N.start,Y=($||{}).type,U=jc(C,i),le=U.requestStart,Pe=U.requestResponseStart,Ge=U.requestResponseEnd,ze=U.requestBytesLoaded,ve=U.requestResponseHeaders,$e=U.requestMediaDuration,It=U.requestHostname,He=U.requestUrl,Qe=U.requestId,we=CE(Y,i),jt=we.currentLevel,Ue=we.renditionWidth,Be=we.renditionHeight,pa=we.renditionBitrate;n("requestcompleted",{request_event_type:g,request_start:le,request_response_start:Pe,request_response_end:Ge,request_bytes_loaded:ze,request_type:Y,request_response_headers:ve,request_hostname:It,request_id:Qe,request_url:He,request_media_start_time:q,request_media_duration:$e,request_current_level:jt,request_labeled_bitrate:pa,request_video_width:Ue,request_video_height:Be})};r>=4?i.on("mediaFragmentLoaded",d):i.on("mediaFragmentLoaded",m);var h={video:void 0,audio:void 0,totalBitrate:void 0},v=function(){if(h.video&&typeof h.video.bitrate=="number"){if(!(h.video.width&&h.video.height)){a.warn("have bitrate info for video but missing width/height");return}var y=h.video.bitrate;if(h.audio&&typeof h.audio.bitrate=="number"&&(y+=h.audio.bitrate),y!==h.totalBitrate)return h.totalBitrate=y,{video_source_bitrate:y,video_source_height:h.video.height,video_source_width:h.video.width,video_source_codec:DE(h.video.codec)}}},T=function(y,g,S){var C=y.mediaType;if(C==="audio"||C==="video"){var N;if(typeof i.getRepresentationsByType=="function")if(y.newRepresentation)N={bitrate:y.newRepresentation.bandwidth,width:y.newRepresentation.width,height:y.newRepresentation.height,qualityIndex:y.newRepresentation.absoluteIndex};else{var $=i.getRepresentationsByType(C);if($&&typeof y.newQuality=="number"){var q=$.find(function(U){return U.absoluteIndex===y.newQuality||U.index===y.newQuality});q&&(N={bitrate:q.bandwidth,width:q.width,height:q.height,qualityIndex:y.newQuality})}}else{if(typeof y.newQuality!="number"){a.warn("missing evt.newQuality in qualityChangeRendered event",y);return}N=i.getBitrateInfoListFor(C).find(function(U){return U.qualityIndex===y.newQuality})}if(!(N&&typeof N.bitrate=="number")){a.warn("missing bitrate info for ".concat(C));return}h[C]=su(bn({},N),{codec:i.getCurrentTrackFor(C).codec});var Y=v();Y&&n("renditionchange",Y)}};i.on("qualityChangeRendered",T);var b=function(y){var g=y.request,S=y.mediaType;g=g||{},n("requestcanceled",{request_event_type:g.type+"_"+g.action,request_url:g.url,request_type:S,request_hostname:At(g.url)})};i.on("fragmentLoadingAbandoned",b);var _=function(y){var g=y.error,S,C,N=(g==null||(S=g.data)===null||S===void 0?void 0:S.request)||{},$=(g==null||(C=g.data)===null||C===void 0?void 0:C.response)||{};g?.code===27&&n("requestfailed",{request_error:N.type+"_"+N.action,request_url:N.url,request_hostname:At(N.url),request_type:N.mediaType,request_error_code:$.status,request_error_text:$.statusText});var q="".concat(N!=null&&N.url?"url: ".concat(N.url,`
`):"")+"".concat($!=null&&$.status||$!=null&&$.statusText?"response: ".concat($?.status,", ").concat($?.statusText,`
`):"");n("error",{player_error_code:g?.code,player_error_message:g?.message,player_error_context:q})};i.on("error",_),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",p),i.off("mediaFragmentLoaded",d),i.off("qualityChangeRendered",T),i.off("error",_),i.off("fragmentLoadingAbandoned",b),delete i._stopMuxMonitor}},OE=function(e){e&&typeof e._stopMuxMonitor=="function"&&e._stopMuxMonitor()},Xc=0,NE=(function(){"use strict";function e(){pe(this,e),w(this,"_listeners",void 0)}return ct(e,[{key:"on",value:function(t,i,a){return i._eventEmitterGuid=i._eventEmitterGuid||++Xc,this._listeners=this._listeners||{},this._listeners[t]=this._listeners[t]||[],a&&(i=i.bind(a)),this._listeners[t].push(i),i}},{key:"off",value:function(t,i){var a=this._listeners&&this._listeners[t];a&&a.forEach(function(r,n){r._eventEmitterGuid===i._eventEmitterGuid&&a.splice(n,1)})}},{key:"one",value:function(t,i,a){var r=this;i._eventEmitterGuid=i._eventEmitterGuid||++Xc;var n=function(){r.off(t,n),i.apply(a||this,arguments)};n._eventEmitterGuid=i._eventEmitterGuid,this.on(t,n)}},{key:"emit",value:function(t,i){var a=this;if(this._listeners){i=i||{};var r=this._listeners["before"+t]||[],n=this._listeners["before*"]||[],s=this._listeners[t]||[],o=this._listeners["after"+t]||[],l=function(u,p){u=u.slice(),u.forEach(function(m){m.call(a,{type:t},p)})};l(r,i),l(n,i),l(s,i),l(o,i)}}}]),e})(),gl=ut(Zt()),PE=(function(){"use strict";function e(t){var i=this;pe(this,e),w(this,"_playbackHeartbeatInterval",void 0),w(this,"_playheadShouldBeProgressing",void 0),w(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){i._playbackHeartbeatInterval!==null&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(a,r){i._playbackHeartbeatInterval!==null&&(gl.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:r.viewer_time}),i._playbackHeartbeatInterval=null)})}return ct(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var t=this;this._playbackHeartbeatInterval===null&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=gl.default.setInterval(function(){t.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,this._playbackHeartbeatInterval!==null&&(gl.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e})(),UE=function e(t){"use strict";var i=this;pe(this,e),w(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(a,r){try{var n=t.errorTranslator({player_error_code:r.player_error_code,player_error_message:r.player_error_message,player_error_context:r.player_error_context,player_error_severity:r.player_error_severity,player_error_business_exception:r.player_error_business_exception});n&&(t.data.player_error_code=n.player_error_code||r.player_error_code,t.data.player_error_message=n.player_error_message||r.player_error_message,t.data.player_error_context=n.player_error_context||r.player_error_context,t.data.player_error_severity=n.player_error_severity||r.player_error_severity,t.data.player_error_business_exception=n.player_error_business_exception||r.player_error_business_exception,i.viewErrored=!0)}catch(s){t.mux.log.warn("Exception in error translator callback.",s),i.viewErrored=!0}}),t.on("aftererror",function(){var a,r,n,s,o;(a=t.data)===null||a===void 0||delete a.player_error_code,(r=t.data)===null||r===void 0||delete r.player_error_message,(n=t.data)===null||n===void 0||delete n.player_error_context,(s=t.data)===null||s===void 0||delete s.player_error_severity,(o=t.data)===null||o===void 0||delete o.player_error_business_exception})},$E=(function(){"use strict";function e(t){pe(this,e),w(this,"_watchTimeTrackerLastCheckedTime",void 0),w(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return ct(e,[{key:"_updateWatchTime",value:function(t,i){var a=i.viewer_time;this._watchTimeTrackerLastCheckedTime===null&&(this._watchTimeTrackerLastCheckedTime=a),ke(this.pm.data,"view_watch_time",a-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=a}},{key:"_clearWatchTimeState",value:function(t,i){this._updateWatchTime(t,i),this._watchTimeTrackerLastCheckedTime=null}}]),e})(),HE=(function(){"use strict";function e(t){var i=this;pe(this,e),w(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),w(this,"_lastTime",void 0),w(this,"_isAdPlaying",void 0),w(this,"_callbackUpdatePlaybackTime",void 0),w(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=Le.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,t.on("viewinit",function(){i.pm.data.view_playing_time_ms_cumulative=0});var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a);var r=function(){i.pm.data.player_is_paused||a()};t.on("seeked",r),t.on("rebufferend",r);var n=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",n),t.on("seeking",n),t.on("rebufferstart",n),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=Le.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return ct(e,[{key:"_startPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime===null&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=Le.now(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var t=this.pm.data.player_playhead_time||0,i=Le.now(),a=i-this._lastTime,r=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&t>this._playbackTimeTrackerLastPlayheadPosition?r=t-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(r=a),r>0&&r<=1e3&&ke(this.pm.data,"view_content_playback_time",r),this._callbackUpdatePlaybackTime!==null&&a>0&&a<=1e3&&(this._isAdPlaying&&ke(this.pm.data,"ad_playing_time_ms_cumulative",a),ke(this.pm.data,"view_playing_time_ms_cumulative",a)),this._playbackTimeTrackerLastPlayheadPosition=t,this._lastTime=i}}]),e})(),BE=(function(){"use strict";function e(t){pe(this,e),w(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return ct(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=typeof this.pm.data.view_max_playhead_position>"u"?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(t,i){var a=this,r=function(){a.pm.currentFragmentPDT&&a.pm.currentFragmentStart&&(a.pm.data.player_program_time=a.pm.currentFragmentPDT+a.pm.data.player_playhead_time-a.pm.currentFragmentStart)};if(i&&i.player_playhead_time)this.pm.data.player_playhead_time=i.player_playhead_time,r(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var n=this.pm.getPlayheadTime();typeof n<"u"&&(this.pm.data.player_playhead_time=n,r(),this._updateMaxPlayheadPosition())}}}]),e})(),Jc=300*1e3,WE=function e(t){"use strict";if(pe(this,e),!t.disableRebufferTracking){var i,a=function(n,s){r(s),i=void 0},r=function(n){if(i){var s=n.viewer_time-i;ke(t.data,"view_rebuffer_duration",s),i=n.viewer_time,t.data.view_rebuffer_duration>Jc&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(Jc,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(n,s){return r(s)}),t.on("rebufferstart",function(n,s){i||(ke(t.data,"view_rebuffer_count",1),i=s.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},FE=(function(){"use strict";function e(t){var i=this;pe(this,e),w(this,"_lastCheckedTime",void 0),w(this,"_lastPlayheadTime",void 0),w(this,"_lastPlayheadTimeUpdatedTime",void 0),w(this,"_rebuffering",void 0),w(this,"pm",void 0),this.pm=t,!(t.disableRebufferTracking||t.disablePlayheadRebufferTracking)&&(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:Le.now()})}))}return ct(e,[{key:"_checkIfRebuffering",value:function(t,i){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(t,i);return}if(this._lastCheckedTime===null){this._prepareRebufferTrackerState(i.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(t,i,!0);return}var a=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.sustainedRebufferThreshold=="number"&&a>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=i.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(t){this._lastCheckedTime=t,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=t}},{key:"_cleanupRebufferTracker",value:function(t,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:i.viewer_time});else{if(this._lastCheckedTime===null)return;var r=this.pm.data.player_playhead_time-this._lastPlayheadTime,n=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.minimumRebufferDuration=="number"&&r>0&&n-r>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+n-r}))}a?this._prepareRebufferTrackerState(i.viewer_time):this._clearRebufferTrackerState()}}]),e})(),KE=(function(){"use strict";function e(t){var i=this;pe(this,e),w(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var a=t.data,r=a.view_id;if(!a.view_program_changed){var n=function(s,o){var l=o.viewer_time;(s.type==="playing"&&typeof t.data.view_time_to_first_frame>"u"||s.type==="adplaying"&&(typeof t.data.view_time_to_first_frame>"u"||i._inPrerollPosition()))&&i.calculateTimeToFirstFrame(l||Le.now(),r)};t.one("playing",n),t.one("adplaying",n),t.one("viewend",function(){t.off("playing",n),t.off("adplaying",n)})}})}return ct(e,[{key:"_inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(t,i){i===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:t}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),e})(),VE=function e(t){"use strict";var i=this;pe(this,e),w(this,"_lastPlayerHeight",void 0),w(this,"_lastPlayerWidth",void 0),w(this,"_lastPlayheadPosition",void 0),w(this,"_lastSourceHeight",void 0),w(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"].forEach(function(a){t.on(a,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var r=t.data.player_playhead_time-i._lastPlayheadPosition;if(r<0){i._lastPlayheadPosition=-1;return}var n=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),s=Math.max(0,n-1),o=Math.max(0,1-n);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,s),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,o),ke(t.data,"view_total_content_playback_time",r),ke(t.data,"view_total_upscaling",s*r),ke(t.data,"view_total_downscaling",o*r)}i._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange","playbackmodechange"].forEach(function(a){t.on(a,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},qE=2e3,YE=function e(t){"use strict";var i=this;pe(this,e),w(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var n=Le.now(),s=(t.data.viewer_time||n)-(a||n);ke(t.data,"view_seek_duration",s),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,s),i.isSeeking=!1,a=-1};t.on("seeking",function(n,s){if(Object.assign(t.data,s),i.isSeeking&&s.viewer_time-a<=qE){a=s.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=s.viewer_time,ke(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},eh=function(e,t){e.push(t),e.sort(function(i,a){return i.viewer_time-a.viewer_time})},GE=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],zE=(function(){"use strict";function e(t){var i=this;pe(this,e),w(this,"_adHasPlayed",void 0),w(this,"_adRequests",void 0),w(this,"_adResponses",void 0),w(this,"_currentAdRequestNumber",void 0),w(this,"_currentAdResponseNumber",void 0),w(this,"_prerollPlayTime",void 0),w(this,"_wouldBeNewAdPlay",void 0),w(this,"isAdBreak",void 0),w(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),GE.forEach(function(r){return t.on(r,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},n),eh(i._adRequests,n),ke(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||ke(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},n),eh(i._adResponses,n);var s=i.findAdRequest(n.ad_request_id);s&&ke(t.data,"view_ad_request_time",Math.max(0,n.viewer_time-s.viewer_time))}),t.on("adplay",function(r,n){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,ke(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,n.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,n.viewer_time-t.data.view_start)),i._prerollPlayTime=n.viewer_time)}),t.on("adplaying",function(r,n){i.inPrerollPosition()&&typeof t.data.view_preroll_load_time>"u"&&typeof i._prerollPlayTime<"u"&&(t.data.view_preroll_load_time=n.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=n.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(r,n){i._wouldBeNewAdPlay||ke(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(r,n){i._wouldBeNewAdPlay||ke(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return ct(e,[{key:"inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(t){for(var i=0;i<this._adRequests.length;i++)if(this._adRequests[i].ad_request_id===t)return this._adRequests[i]}},{key:"_updateAdData",value:function(t,i){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&i.ad_tag_url){var a=mi(gn(i.ad_tag_url),2),r=a[0],n=a[1];this.pm.data.view_preroll_ad_tag_domain=n,this.pm.data.view_preroll_ad_tag_hostname=r}if(!this.pm.data.view_preroll_ad_asset_hostname&&i.ad_asset_url){var s=mi(gn(i.ad_asset_url),2),o=s[0],l=s[1];this.pm.data.view_preroll_ad_asset_domain=l,this.pm.data.view_preroll_ad_asset_hostname=o}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=i?.ad_asset_url,this.pm.data.ad_tag_url=i?.ad_tag_url,this.pm.data.ad_creative_id=i?.ad_creative_id,this.pm.data.ad_id=i?.ad_id,this.pm.data.ad_universal_id=i?.ad_universal_id,i!=null&&i.ad_type&&(this.pm.data.ad_type=i?.ad_type)}}]),e})(),QE=function e(t){"use strict";var i=this;pe(this,e),w(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=Le.now(),t.on("before*",r)},r=function(n){var s=Le.now(),o=i.lastWallClockTime;i.lastWallClockTime=s,s-o>3e4&&(t.emit("devicesleep",{viewer_time:o}),Object.assign(t.data,{viewer_time:o}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:s}),Object.assign(t.data,{viewer_time:s}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},bl=ut(Zt()),Km=(function(e){return e()})(function(){var e=function(){for(var i=0,a={};i<arguments.length;i++){var r=arguments[i];for(var n in r)a[n]=r[n]}return a};function t(i){function a(r,n,s){var o;if(typeof document<"u"){if(arguments.length>1){if(s=e({path:"/"},a.defaults,s),typeof s.expires=="number"){var l=new Date;l.setMilliseconds(l.getMilliseconds()+s.expires*864e5),s.expires=l}try{o=JSON.stringify(n),/^[\{\[]/.test(o)&&(n=o)}catch{}return i.write?n=i.write(n,r):n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),r=encodeURIComponent(String(r)),r=r.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),r=r.replace(/[\(\)]/g,escape),document.cookie=[r,"=",n,s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}r||(o={});for(var u=document.cookie?document.cookie.split("; "):[],p=/(%[0-9A-Z]{2})+/g,m=0;m<u.length;m++){var d=u[m].split("="),h=d.slice(1).join("=");h.charAt(0)==='"'&&(h=h.slice(1,-1));try{var v=d[0].replace(p,decodeURIComponent);if(h=i.read?i.read(h,v):i(h,v)||h.replace(p,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch{}if(r===v){o=h;break}r||(o[v]=h)}catch{}}return o}}return a.set=a,a.get=function(r){return a.call(a,r)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(r,n){a(r,"",e(n,{expires:-1}))},a.withConverter=t,a}return t(function(){})}),Vm="muxData",ZE=function(e){return Object.entries(e).map(function(t){var i=mi(t,2),a=i[0],r=i[1];return"".concat(a,"=").concat(r)}).join("&")},jE=function(e){return e.split("&").reduce(function(t,i){var a=mi(i.split("="),2),r=a[0],n=a[1],s=+n;return t[r]=n&&s==n?s:n,t},{})},qm=function(){var e;try{e=jE(Km.get(Vm)||"")}catch{e={}}return e},Ym=function(e){try{Km.set(Vm,ZE(e),{expires:365})}catch{}},XE=function(){var e=qm();return e.mux_viewer_id=e.mux_viewer_id||_n(),e.msn=e.msn||Math.random(),Ym(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},JE=function(){var e=qm(),t=Le.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=_n(),e.sst=t),e.sex=t+1500*1e3,Ym(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}};function e_(e,t){var i=t.beaconCollectionDomain,a=t.beaconDomain;if(i)return(/localhost(?::\d+)?$/.test(i)?"http://":"https://")+i;e=e||"inferred";var r=a||"litix.io";return e.match(/^[a-z0-9]+$/)?"https://"+e+"."+r:"https://img.litix.io/a.gif"}var t_=Gm({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),th=Gm({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",lw:"low",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function Gm(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function Kl(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&e[a]!==void 0){var n=a.split("_"),s=n[0],o=t_[s];o||(ee.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(l){l==="url"&&(r=!0),th[l]?o+=th[l]:Number.isInteger(Number(l))?o+=l:(ee.info("Data key word `"+l+"` not expected in "+a),o+="_"+l+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var ia=ut(Zt()),i_=ut($m()),a_={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},r_=56*1024,n_=["hb","requestcompleted","requestfailed","requestcanceled"],s_="https://img.litix.io",pi=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this._beaconUrl=e||s_,this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},a_,t)};pi.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return this._eventQueue.length<=this._options.maxQueueLength||e==="eventrateexceeded"?(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):!1};pi.prototype.flushEvents=function(){if(arguments.length>0&&arguments[0]!==void 0&&arguments[0]&&this._eventQueue.length===1){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()};pi.prototype.destroy=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),ia.default.clearTimeout(this._sendTimeout)};pi.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],Kl({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);zm(this._beaconUrl,i,!0,function(){})};pi.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=Le.now();zm(this._beaconUrl,i,!1,function(r,n){n?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,ee.info("Error sending beacon: "+n)):e._failureCount=0,e._roundTripTime=Le.now()-a,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})};pi.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return e=e*Math.random(),(1+e)*this._options.baseTimeBetweenBeacons};pi.prototype._startBeaconSending=function(){var e=this;ia.default.clearTimeout(this._sendTimeout),!this.destroyed&&(this._sendTimeout=ia.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))};pi.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(Le.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){a=JSON.stringify({metadata:i,events:r||e}),n=a.length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(ee.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(l){return n_.indexOf(l.e)===-1}),s()),o()||(ee.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(l){for(var u in l){var p=l[u],m=50*1024;typeof p=="string"&&p.length>m&&(l[u]=p.substring(0,m))}}),s()),a};var o_=typeof i_.default.exitPictureInPicture=="function"?function(e){return e.length<=r_}:function(e){return!1},zm=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t)){a();return}if(ia.default.fetch){ia.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:o_(t)}).then(function(n){return a(null,n.ok?null:"Error")}).catch(function(n){return a(null,n)});return}if(ia.default.XMLHttpRequest){var r=new ia.default.XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===4)return a(null,r.status!==200?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},l_=pi,d_=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],u_=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],c_=["ad_id","ad_creative_id","ad_universal_id"],h_=["viewstart","error","ended","viewend"],m_=600*1e3,p_=(function(){"use strict";function e(t,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};pe(this,e);var r,n,s,o,l,u,p,m,d,h,v,T;w(this,"mux",void 0),w(this,"envKey",void 0),w(this,"options",void 0),w(this,"eventQueue",void 0),w(this,"sampleRate",void 0),w(this,"disableCookies",void 0),w(this,"respectDoNotTrack",void 0),w(this,"previousBeaconData",void 0),w(this,"lastEventTime",void 0),w(this,"rateLimited",void 0),w(this,"pageLevelData",void 0),w(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=a,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new l_(e_(this.envKey,this.options));var b;this.sampleRate=(b=this.options.sampleRate)!==null&&b!==void 0?b:1;var _;this.disableCookies=(_=this.options.disableCookies)!==null&&_!==void 0?_:!1;var y;this.respectDoNotTrack=(y=this.options.respectDoNotTrack)!==null&&y!==void 0?y:!1,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:(r=this.options.platform)===null||r===void 0?void 0:r.name,viewer_application_version:(n=this.options.platform)===null||n===void 0?void 0:n.version,viewer_application_engine:(s=this.options.platform)===null||s===void 0?void 0:s.layout,viewer_device_name:(o=this.options.platform)===null||o===void 0?void 0:o.product,viewer_device_category:"",viewer_device_manufacturer:(l=this.options.platform)===null||l===void 0?void 0:l.manufacturer,viewer_os_family:(p=this.options.platform)===null||p===void 0||(u=p.os)===null||u===void 0?void 0:u.family,viewer_os_architecture:(d=this.options.platform)===null||d===void 0||(m=d.os)===null||m===void 0?void 0:m.architecture,viewer_os_version:(v=this.options.platform)===null||v===void 0||(h=v.os)===null||h===void 0?void 0:h.version,page_url:bl.default===null||bl.default===void 0||(T=bl.default.location)===null||T===void 0?void 0:T.href},this.viewerData=this.disableCookies?{}:XE()}return ct(e,[{key:"send",value:function(t,i){if(!(!t||!(i!=null&&i.view_id))){if(this.respectDoNotTrack&&Wl())return ee.info("Not sending `"+t+"` because Do Not Track is enabled");if(!i||typeof i!="object")return ee.error("A data object was expected in send() but was not provided");var a=this.disableCookies?{}:JE(),r=su(bn({},this.pageLevelData,i,a,this.viewerData),{event:t,env_key:this.envKey});r.user_id&&(r.viewer_user_id=r.user_id,delete r.user_id);var n,s=((n=r.mux_sample_number)!==null&&n!==void 0?n:0)>=this.sampleRate,o=Kl(this._deduplicateBeaconData(t,r));if(this.lastEventTime=this.mux.utils.now(),s)return ee.info("Not sending event due to sample rate restriction",t,r,o);if(this.envKey||ee.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",t,r,o),!this.rateLimited)if(ee.info("Sending event",t,r,o),this.rateLimited=!this.eventQueue.queueEvent(t,o),this.mux.WINDOW_UNLOADING&&t==="viewend")this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&t==="hb")this.eventQueue.flushEvents(!0);else if(h_.indexOf(t)>=0){if(t==="error"&&i.player_error_severity==="warning")return;this.eventQueue.flushEvents()}if(this.rateLimited)return r.event="eventrateexceeded",o=Kl(r),this.eventQueue.queueEvent(r.event,o),ee.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(t,i){var a=this,r={},n=i.view_id;if(n==="-1"||t==="viewstart"||t==="viewend"||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=m_)r=bn({},i),n&&(this.previousBeaconData=r),n&&t==="viewend"&&(this.previousBeaconData=null);else{var s=t.indexOf("request")===0;Object.entries(i).forEach(function(o){var l=mi(o,2),u=l[0],p=l[1];a.previousBeaconData&&(p!==a.previousBeaconData[u]||d_.indexOf(u)>-1||a.objectHasChanged(s,u,p,a.previousBeaconData[u])||a.eventRequiresKey(t,u))&&(r[u]=p,a.previousBeaconData[u]=p)})}return r}},{key:"objectHasChanged",value:function(t,i,a,r){return!t||i.indexOf("request_")!==0?!1:i==="request_response_headers"||typeof a!="object"||typeof r!="object"?!0:Object.keys(a||{}).length!==Object.keys(r||{}).length}},{key:"eventRequiresKey",value:function(t,i){return!!(t==="renditionchange"&&i.indexOf("video_source_")===0||c_.includes(i)&&u_.includes(t)||t==="playbackmodechange"&&i.indexOf("player_playback_mode")===0)}}]),e})(),v_=function e(t){"use strict";pe(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0,u=function(d,h){var v=h.request_start,T=h.request_response_start,b=h.request_response_end,_=h.request_bytes_loaded;n++;var y,g;if(T?(y=T-(v??0),g=(b??0)-T):g=(b??0)-(v??0),g>0&&_&&_>0){var S=_/g*8e3;s++,a+=_,r+=g,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,S),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,y>0&&(i+=y,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,y),t.data.view_average_request_latency=i/s)}},p=function(d,h){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o},m=function(d,h){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l};t.on("requestcompleted",u),t.on("requestfailed",p),t.on("requestcanceled",m)},f_=3600*1e3,E_=function e(t){"use strict";var i=this;pe(this,e),w(this,"_lastEventTime",void 0),t.on("before*",function(a,r){var n=r.viewer_time,s=Le.now(),o=i._lastEventTime;if(i._lastEventTime=s,o&&s-o>f_){var l=Object.keys(t.data).reduce(function(p,m){return m.indexOf("video_")===0?Object.assign(p,w({},m,t.data[m])):p},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var u=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:n},l)),t.playbackHeartbeat._playheadShouldBeProgressing=u,t.playbackHeartbeat._playheadShouldBeProgressing&&a.type!=="play"&&a.type!=="adbreakstart"&&(t.emit("play",{viewer_time:n}),a.type!=="playing"&&t.emit("playing",{viewer_time:n}))}})},__=function e(t){"use strict";pe(this,e);var i=function(o){var l=g_(o),u=b_(o);if(l!=null&&!ih(l,n)&&s<=u){n=l,s=u;var p={video_cdn:l};t.emit("cdnchange",p)}},a=null,r=null,n=null,s=0;t.on("viewinit",function(){a=null,r=null,n=null,s=0}),t.on("beforecdnchange",function(o,l){var u=l?.video_cdn;u&&(typeof l.video_previous_cdn>"u"||l.video_previous_cdn===null)&&(ih(u,r)?l.video_previous_cdn=a??void 0:(l.video_previous_cdn=r??void 0,a=r,r=u))}),t.on("requestcompleted",function(o,l){i(l)})};function ih(e,t){return e?.toLowerCase()===t?.toLowerCase()}function g_(e){var t;return e!=null&&e.request_type&&(e.request_type==="media"||e.request_type==="video")&&!((t=e.request_response_headers)===null||t===void 0)&&t["x-cdn"]?e.request_response_headers["x-cdn"]:e!=null&&e.video_cdn?e.video_cdn:null}function b_(e){return e!=null&&e.request_start?e.request_start:e!=null&&e.viewer_time?e.viewer_time:Date.now()}var y_=__,T_=function(e){try{return JSON.parse(e),!0}catch{return!1}},A_=function e(t){"use strict";var i=this;pe(this,e),w(this,"_emittingAutomaticEvent",!1),w(this,"_hasInitialized",!1),w(this,"_currentMode","standard"),t.on("viewstart",function(){i._hasInitialized||(i._hasInitialized=!0,i._currentMode=t.data.player_playback_mode||"standard",i._emittingAutomaticEvent=!0,t.emit("playbackmodechange",{player_playback_mode:i._currentMode,player_playback_mode_data:"{}"}),i._emittingAutomaticEvent=!1)}),t.on("viewend",function(){i._hasInitialized=!1}),t.on("playbackmodechange",function(a,r){i._emittingAutomaticEvent||(r.player_playback_mode_data?T_(r.player_playback_mode_data)||(t.mux.log.warn("Invalid JSON string for player_playback_mode_data"),r.player_playback_mode_data="{}"):r.player_playback_mode_data="{}",t.data.player_playback_mode_data=r.player_playback_mode_data,t.data.player_playback_mode=r.player_playback_mode,i._currentMode=r.player_playback_mode)})},k_=(function(){"use strict";function e(t){pe(this,e),w(this,"pm",void 0),w(this,"_currentRangeStart",void 0),w(this,"_lastPlayheadTime",void 0),this.pm=t,this._currentRangeStart=null,this._lastPlayheadTime=null,t.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),t.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return ct(e,[{key:"_updateLastRangeEnd",value:function(){var t=this.pm.data.video_playback_ranges;if(t&&t.length>0){var i=this.pm.data.player_playhead_time||0;t[t.length-1][1]=i}}},{key:"_updatePlaybackRange",value:function(){var t,i=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&!((t=this.pm.adTracker)===null||t===void 0)&&t.isAdBreak&&this._lastPlayheadTime!==null&&i<this._lastPlayheadTime)){if(this._lastPlayheadTime!==null&&this._currentRangeStart!==null&&Math.abs(i-this._lastPlayheadTime)>1e3){var a=this.pm.data.video_playback_ranges;a&&a.length>0&&(a[a.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}if(this._currentRangeStart===null){var r=this.pm.data.video_playback_ranges||[];r.length>0&&r[r.length-1][1]===i?this._currentRangeStart=r[r.length-1][0]:(this._currentRangeStart=i,r.push([i,i])),this.pm.data.video_playback_ranges=r}else this._updateLastRangeEnd();this._lastPlayheadTime=i}}},{key:"_endPlaybackRange",value:function(){this._currentRangeStart!==null&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),e})(),Bt=Object.freeze({CELLULAR:"cellular",WIFI:"wifi",WIRED:"wired",OTHER:"other",NO_CONNECTION:"no_connection",UNKNOWN:"unknown"}),w_=function(e){if(!e)return Bt.UNKNOWN;switch(e){case"cellular":case"wimax":return Bt.CELLULAR;case"wifi":return Bt.WIFI;case"ethernet":return Bt.WIRED;case"none":return Bt.NO_CONNECTION;case"bluetooth":case"other":return Bt.OTHER;case"unknown":return Bt.UNKNOWN;default:return Bt.OTHER}},S_=function(e){return typeof e=="object"&&"connection"in e&&typeof e.connection=="object"},Wi=ut(Zt()),I_=(function(){"use strict";function e(t){var i=this;pe(this,e),w(this,"pm",void 0),w(this,"lastType",void 0),w(this,"lastLowDataMode",void 0),this.pm=t,this.pm.one("viewinit",function(){var a,r=i.emit.bind(i);r(),Wi.default.addEventListener("online",r),Wi.default.addEventListener("offline",r),(a=e.connection)===null||a===void 0||a.addEventListener("change",r),i.pm.on("destroy",function(){var n;(n=e.connection)===null||n===void 0||n.removeEventListener("change",r),Wi.default.removeEventListener("online",r),Wi.default.removeEventListener("offline",r)})})}return ct(e,[{key:"type",get:function(){var t,i;return((t=Wi.default.navigator)===null||t===void 0?void 0:t.onLine)===!1?Bt.NO_CONNECTION:!((i=e.connection)===null||i===void 0)&&i.type?w_(e.connection.type):Bt.UNKNOWN}},{key:"lowDataMode",get:function(){var t;return(t=e.connection)===null||t===void 0?void 0:t.saveData}},{key:"emit",value:function(){var t=this.type,i=this.lowDataMode;t===this.lastType&&i===this.lastLowDataMode||(this.lastType=t,this.lastLowDataMode=i,this.pm.emit("networkchange",bn({viewer_connection_type:t},i!==void 0&&{viewer_connection_low_data_mode:i})))}}],[{key:"connection",get:function(){return S_(Wi.default.navigator)?Wi.default.navigator.connection:null}}]),e})(),R_=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","networkchange","cdnchange","playbackmodechange"],L_=new Set(["requestcompleted","requestfailed","requestcanceled"]),C_=(function(e){"use strict";_E(i,e);var t=AE(i);function i(a,r,n){pe(this,i);var s=t.call(this);w(P(s),"pageLoadEndTime",void 0),w(P(s),"pageLoadInitTime",void 0),w(P(s),"_destroyed",void 0),w(P(s),"_heartBeatTimeout",void 0),w(P(s),"adTracker",void 0),w(P(s),"dashjs",void 0),w(P(s),"data",void 0),w(P(s),"disablePlayheadRebufferTracking",void 0),w(P(s),"disableRebufferTracking",void 0),w(P(s),"disableAdPlaybackRangeFiltering",void 0),w(P(s),"errorTracker",void 0),w(P(s),"errorTranslator",void 0),w(P(s),"emitTranslator",void 0),w(P(s),"getAdData",void 0),w(P(s),"getPlayheadTime",void 0),w(P(s),"getStateData",void 0),w(P(s),"stateDataTranslator",void 0),w(P(s),"hlsjs",void 0),w(P(s),"id",void 0),w(P(s),"longResumeTracker",void 0),w(P(s),"minimumRebufferDuration",void 0),w(P(s),"mux",void 0),w(P(s),"playbackEventDispatcher",void 0),w(P(s),"playbackHeartbeat",void 0),w(P(s),"playbackHeartbeatTime",void 0),w(P(s),"playheadTime",void 0),w(P(s),"seekingTracker",void 0),w(P(s),"sustainedRebufferThreshold",void 0),w(P(s),"watchTimeTracker",void 0),w(P(s),"currentFragmentPDT",void 0),w(P(s),"currentFragmentStart",void 0),s.pageLoadInitTime=vo.navigationStart(),s.pageLoadEndTime=vo.domContentLoadedEventEnd(),s.mux=a,s.id=r,n!=null&&n.beaconDomain&&s.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),n=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(m){return m},emitTranslator:function(){for(var m=arguments.length,d=new Array(m),h=0;h<m;h++)d[h]=arguments[h];return d},stateDataTranslator:function(m){return m}},n),n.data=n.data||{},n.data.property_key&&(n.data.env_key=n.data.property_key,delete n.data.property_key),ee.level=n.debug?ea.DEBUG:ea.WARN,s.getPlayheadTime=n.getPlayheadTime,s.getStateData=n.getStateData||function(){return{}},s.getAdData=n.getAdData||function(){},s.minimumRebufferDuration=n.minimumRebufferDuration,s.sustainedRebufferThreshold=n.sustainedRebufferThreshold,s.playbackHeartbeatTime=n.playbackHeartbeatTime,s.disableRebufferTracking=n.disableRebufferTracking,s.disableRebufferTracking&&s.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),s.disablePlayheadRebufferTracking=n.disablePlayheadRebufferTracking,s.disableAdPlaybackRangeFiltering=n.disableAdPlaybackRangeFiltering,s.errorTranslator=n.errorTranslator,s.emitTranslator=n.emitTranslator,s.stateDataTranslator=n.stateDataTranslator,s.playbackEventDispatcher=new p_(a,n.data.env_key,n),s.data={player_instance_id:_n(),mux_sample_rate:n.sampleRate,beacon_domain:n.beaconCollectionDomain||n.beaconDomain},s.data.view_sequence_number=1,s.data.player_sequence_number=1;var o=function(){typeof this.data.view_start>"u"&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}.bind(P(s));if(s.on("viewinit",function(m,d){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,d),this._initializeViewData(),this.one("play",o),this.one("adbreakstart",o)}),s.on("videochange",function(m,d){this._resetView(d)}),s.on("programchange",function(m,d){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(d,{view_program_changed:!0})),o(),this.emit("play"),this.emit("playing")}),s.on("fragmentchange",function(m,d){this.currentFragmentPDT=d.currentFragmentPDT,this.currentFragmentStart=d.currentFragmentStart}),s.on("destroy",s.destroy),typeof window<"u"&&typeof window.addEventListener=="function"&&typeof window.removeEventListener=="function"){var l=function(){var m=typeof s.data.view_start<"u";s.mux.WINDOW_HIDDEN=document.visibilityState==="hidden",m&&s.mux.WINDOW_HIDDEN&&(s.data.player_is_paused||s.emit("hb"))};window.addEventListener("visibilitychange",l,!1);var u=function(m){m.persisted||s.destroy()};window.addEventListener("pagehide",u,!1),s.on("destroy",function(){window.removeEventListener("visibilitychange",l),window.removeEventListener("pagehide",u)})}s.on("playerready",function(m,d){Object.assign(this.data,d)}),R_.forEach(function(m){s.on(m,function(d,h){m.indexOf("ad")!==0&&this._updateStateData(),Object.assign(this.data,h),this._sanitizeData()}),s.on("after"+m,function(){(m!=="error"||this.errorTracker.viewErrored)&&this.send(m)})}),s.on("viewend",function(m,d){Object.assign(s.data,d)});var p=function(m){var d=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=d-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time};return s.one("playerready",p),s.longResumeTracker=new E_(P(s)),s.errorTracker=new UE(P(s)),new QE(P(s)),s.seekingTracker=new YE(P(s)),s.playheadTime=new BE(P(s)),s.playbackHeartbeat=new PE(P(s)),new VE(P(s)),s.watchTimeTracker=new $E(P(s)),new HE(P(s)),new k_(P(s)),s.adTracker=new zE(P(s)),new FE(P(s)),new WE(P(s)),new KE(P(s)),new v_(P(s)),new y_(P(s)),new A_(P(s)),new I_(P(s)),n.hlsjs&&s.addHLSJS(n),n.dashjs&&s.addDashJS(n),s.emit("viewinit",n.data),s}return ct(i,[{key:"emit",value:function(a,r){var n,s=Object.assign({viewer_time:this.mux.utils.now()},r),o=[a,s];if(this.emitTranslator)try{o=this.emitTranslator(a,s)}catch(l){this.mux.log.warn("Exception in emit translator callback.",l)}o!=null&&o.length&&(n=ts(or(i.prototype),"emit",this)).call.apply(n,[this].concat(ft(o)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,typeof this.data.view_start<"u"&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(a){if(this.data.view_id){var r=Object.assign({},this.data);if(r.video_source_is_live===void 0&&(r.player_source_duration===1/0||r.video_source_duration===1/0?r.video_source_is_live=!0:(r.player_source_duration>0||r.video_source_duration>0)&&(r.video_source_is_live=!1)),r.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(o){r[o]=void 0}),r.video_source_url=r.video_source_url||r.player_source_url,r.video_source_url){var n=mi(gn(r.video_source_url),2),s=n[0];r.video_source_domain=n[1],r.video_source_hostname=s}delete r.ad_request_id,r.video_playback_ranges&&(r.video_playback_range=JSON.stringify(r.video_playback_ranges.filter(function(o){return o[0]!==o[1]}).map(function(o){return"".concat(o[0],":").concat(o[1])})),delete r.video_playback_ranges),this.playbackEventDispatcher.send(a,r),this.data.view_sequence_number++,this.data.player_sequence_number++,L_.has(a)||this._restartHeartBeat(),a==="viewend"&&delete this.data.view_id}}},{key:"_resetView",value:function(a){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",a)}},{key:"_updateStateData",value:function(){var a,r=this.getStateData();if(typeof this.stateDataTranslator=="function")try{r=this.stateDataTranslator(r)}catch(n){this.mux.log.warn("Exception in stateDataTranslator translator callback.",n)}!((a=this.data)===null||a===void 0)&&a.video_cdn&&r!=null&&r.video_cdn&&(r.video_cdn,r=bE(r,["video_cdn"])),Object.assign(this.data,r),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var a=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(r){var n=parseInt(a.data[r],10);a.data[r]=isNaN(n)?void 0:n}),["player_source_url","video_source_url"].forEach(function(r){if(a.data[r]){var n=a.data[r].toLowerCase();(n.indexOf("data:")===0||n.indexOf("blob:")===0)&&(a.data[r]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("video_")===0&&delete a.data[r]})}},{key:"_resetViewData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("view_")===0&&delete a.data[r]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var a=this,r=this.data.view_id=_n(),n=function(){r===a.data.view_id&&ke(a.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",n):n()}},{key:"_restartHeartBeat",value:function(){var a=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){a.data.player_is_paused||a.emit("hb")},1e4)}},{key:"addHLSJS",value:function(a){if(!a.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=a.hlsjs,RE(this.mux,this.id,a.hlsjs,{},a.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(LE(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(a){if(!a.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=a.dashjs,xE(this.mux,this.id,a.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(OE(this.dashjs),this.dashjs=void 0)}}]),i})(NE),yr=ut($m());function yl(){return yr.default&&!!(yr.default.fullscreenElement||yr.default.webkitFullscreenElement||yr.default.mozFullScreenElement||yr.default.msFullscreenElement)}var D_=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],M_={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};function x_(e,t,i){var a=mi(po(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,u=e.utils.secondsToMs,p={automaticErrorTracking:!0};if(r){if(s!=="video"&&s!=="audio")return o.error("The element of `"+n+"` was not a media element.")}else return o.error("No element was found with the `"+n+"` query selector.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),i=Object.assign(p,i,{getPlayheadTime:function(){return u(r.currentTime)},getStateData:function(){var d,h,v,T=((d=(h=this).getPlayheadTime)===null||d===void 0?void 0:d.call(h))||u(r.currentTime),b=this.hlsjs&&this.hlsjs.url,_=this.dashjs&&typeof this.dashjs.getSource=="function"&&this.dashjs.getSource(),y={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:yl(),video_poster_url:r.poster,video_source_url:b||_||r.currentSrc,video_source_duration:u(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:r==null||(v=r.getVideoPlaybackQuality)===null||v===void 0?void 0:v.call(r).droppedVideoFrames};if(r.getStartDate&&T>0){var g=r.getStartDate();if(g&&typeof g.getTime=="function"&&g.getTime()){var S=g.getTime();y.player_program_time=S+T,r.seekable.length>0&&(y.player_live_edge_program_time=S+r.seekable.end(r.seekable.length-1))}}return y}}),i.data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(d,h){e.emit(n,d,h)},r.mux.updateData=function(d){r.mux.emit("hb",d)};var m=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(d){r.removeEventListener(d,r.mux.listeners[d],!1)}),delete r.mux.listeners,r.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1),delete r.mux.fullscreenChangeListener),r.mux.destroy=m,r.mux.swapElement=m,r.mux.emit=m,r.mux.addHLSJS=m,r.mux.addDashJS=m,r.mux.removeHLSJS=m,r.mux.removeDashJS=m,r.mux.updateData=m,r.mux.setEmitTranslator=m,r.mux.setStateDataTranslator=m,r.mux.setGetPlayheadTime=m,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(d){var h=mi(po(d),3),v=h[0],T=h[1],b=h[2];if(v){if(b!=="video"&&b!=="audio")return e.log.error("The element of `"+T+"` was not a media element.")}else return e.log.error("No element was found with the `"+T+"` query selector.");v.muxId=r.muxId,delete r.muxId,v.mux=v.mux||{},v.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(v.mux.listeners).forEach(function(_){r.removeEventListener(_,v.mux.listeners[_],!1),v.addEventListener(_,v.mux.listeners[_],!1)}),v.mux.fullscreenChangeListener=r.mux.fullscreenChangeListener,delete r.mux.fullscreenChangeListener,v.mux.swapElement=r.mux.swapElement,v.mux.destroy=r.mux.destroy,delete r.mux,r=v},r.mux.addHLSJS=function(d){e.addHLSJS(n,d)},r.mux.addDashJS=function(d){e.addDashJS(n,d)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(d){e.setEmitTranslator(n,d)},r.mux.setStateDataTranslator=function(d){e.setStateDataTranslator(n,d)},r.mux.setGetPlayheadTime=function(d){d||(d=i.getPlayheadTime),e.setGetPlayheadTime(n,d)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},D_.forEach(function(d){d==="error"&&!i.automaticErrorTracking||(r.mux.listeners[d]=function(){var h={};if(d==="error"){if(!r.error||r.error.code===1)return;h.player_error_code=r.error.code,h.player_error_message=M_[r.error.code]||r.error.message}e.emit(n,d,h)},r.addEventListener(d,r.mux.listeners[d],!1))}),r.mux.listeners.enterpictureinpicture=function(){e.emit(n,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},r.mux.listeners.leavepictureinpicture=function(){var d=yl()?"fullscreen":"standard";e.emit(n,"playbackmodechange",{player_playback_mode:d,player_playback_mode_data:"{}"})},r.addEventListener("enterpictureinpicture",r.mux.listeners.enterpictureinpicture,!1),r.addEventListener("leavepictureinpicture",r.mux.listeners.leavepictureinpicture,!1),r.mux.fullscreenChangeListener=function(){var d=yl(),h=document.fullscreenElement;if(d&&(h===r||h!=null&&h.contains(r)))e.emit(n,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!d){var v=document.pictureInPictureElement===r?"pip":"standard";e.emit(n,"playbackmodechange",{player_playback_mode:v,player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1)}function O_(e,t,i,a){var r=a;if(e&&typeof e[t]=="function")try{r=e[t].apply(e,i)}catch(n){ee.info("safeCall error",n)}return r}var sn=ut(Zt()),Aa;sn.default&&sn.default.WeakMap&&(Aa=new WeakMap);function N_(e,t){if(!e||!t||!sn.default||typeof sn.default.getComputedStyle!="function")return"";var i;return Aa&&Aa.has(e)&&(i=Aa.get(e)),i||(i=sn.default.getComputedStyle(e,null),Aa&&Aa.set(e,i)),i.getPropertyValue(t)}function P_(e){return Math.floor(e*1e3)}var Fi={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},Go=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};Go.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf(`
`);t>-1;t=this.buffer.indexOf(`
`))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)};Go.prototype.processLine=function(e){var t=B_(e,e.indexOf(":")),i=t[0],a=t.length===2?lu(t[1]):void 0;if(i[0]!=="#")this.currentUri.uri=i,this.manifest.segments.push(this.currentUri),this.manifest.targetDuration&&!("duration"in this.currentUri)&&(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(i){case Fi.TARGET_DURATION:if(!isFinite(a)||a<0)return;this.manifest.targetDuration=a,this.setHoldBack();break;case Fi.PART_INF:Tl(this.manifest,t),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case Fi.SERVER_CONTROL:Tl(this.manifest,t),this.setHoldBack();break;case Fi.INF:a===0?this.currentUri.duration=.01:a>0&&(this.currentUri.duration=a);break;case Fi.PROGRAM_DATE_TIME:var r=a,n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case Fi.VERSION:Tl(this.manifest,t);break;case Fi.SESSION_DATA:var s=Fm(W_(t[1]));Object.assign(this.manifest.sessionData,s)}};Go.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&i*3,o=a&&a*2;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=a*3),a&&t[n]<o&&(t[n]=o)}};var Tl=function(e,t){var i=Qm(t[0].replace("#EXT-X-","")),a;H_(t[1])?(a={},a=Object.assign($_(t[1]),a)):a=lu(t[1]),e[i]=a},Qm=function(e){return e.toLowerCase().replace(/-(\w)/g,function(t){return t[1].toUpperCase()})},lu=function(e){if(e.toLowerCase()==="yes"||e.toLowerCase()==="no")return e.toLowerCase()==="yes";var t=e.indexOf(":")!==-1?e:parseFloat(e);return isNaN(t)?e:t},U_=function(e){var t={},i=e.split("=");if(i.length>1){var a=Qm(i[0]);t[a]=lu(i[1])}return t},$_=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++){var r=t[a],n=U_(r);i=Object.assign(n,i)}return i},H_=function(e){return e.indexOf("=")>-1},B_=function(e,t){return t===-1?[e]:[e.substring(0,t),e.substring(t+1)]},W_=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(a,r){for(var n=a.replace(/['"]+/g,"").split("="),s=0;s<n.length;s++)n[s]==="DATA-ID"&&(t["DATA-ID"]=n[1-s]),n[s]==="VALUE"&&(t.VALUE=n[1-s])}),{data:t}}},F_={safeCall:O_,safeIncrement:ke,getComputedStyle:N_,secondsToMs:P_,assign:Object.assign,headersStringToObject:ou,cdnHeadersToRequestId:fo,extractHostnameAndDomain:gn,extractHostname:At,manifestParser:Go,generateShortID:Bm,generateUUID:_n,now:Le.now,findMediaElement:po},K_={PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",NETWORK_CHANGE:"networkchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},V_="mux-embed",q_="5.18.0",Y_="2.1",fe={},Pi=function(e){var t=arguments;typeof e=="string"?Pi.hasOwnProperty(e)?nn.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),Pi[e].apply(null,t)},0):ee.warn("`"+e+"` is an unknown task"):typeof e=="function"?nn.default.setTimeout(function(){e(Pi)},0):ee.warn("`"+e+"` is invalid.")},G_={loaded:Le.now(),NAME:V_,VERSION:q_,API_VERSION:Y_,PLAYER_TRACKED:!1,monitor:function(e,t){return x_(Pi,e,t)},destroyMonitor:function(e){var t=mi(po(e),1)[0];t&&t.mux&&typeof t.mux.destroy=="function"?t.mux.destroy():ee.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=vt(e);fe[i]?fe[i].addHLSJS(t):ee.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=vt(e);fe[i]?fe[i].addDashJS(t):ee.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=vt(e);fe[t]?fe[t].removeHLSJS():ee.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=vt(e);fe[t]?fe[t].removeDashJS():ee.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){Wl()&&t&&t.respectDoNotTrack&&ee.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=vt(e);fe[i]=new C_(Pi,i,t)},emit:function(e,t,i){var a=vt(e);fe[a]?(fe[a].emit(t,i),t==="destroy"&&delete fe[a]):ee.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=vt(e);fe[i]?fe[i].emit("hb",t):ee.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=vt(e);fe[i]?fe[i].emitTranslator=t:ee.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=vt(e);fe[i]?fe[i].stateDataTranslator=t:ee.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=vt(e);fe[i]?fe[i].getPlayheadTime=t:ee.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:Wl,log:ee,utils:F_,events:K_,WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(Pi,G_);typeof nn.default<"u"&&typeof nn.default.addEventListener=="function"&&nn.default.addEventListener("pagehide",function(e){e.persisted||(Pi.WINDOW_UNLOADING=!0)},!1);var du=Pi,F=Gf,Z={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},x={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},zo=e=>e===Z.VIDEO?"playback":e,_i=class Mr extends Error{constructor(t,i=Mr.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=a??(i>=Mr.MEDIA_ERR_NETWORK&&i<=Mr.MEDIA_ERR_ENCRYPTED),this.message||(this.message=(n=Mr.defaultMessages[this.code])!=null?n:"")}};_i.MEDIA_ERR_ABORTED=1,_i.MEDIA_ERR_NETWORK=2,_i.MEDIA_ERR_DECODE=3,_i.MEDIA_ERR_SRC_NOT_SUPPORTED=4,_i.MEDIA_ERR_ENCRYPTED=5,_i.MEDIA_ERR_CUSTOM=100,_i.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var I=_i,z_=e=>e==null,uu=(e,t)=>z_(t)?!1:e in t,Vl={ANY:"any",MUTED:"muted"},Q={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},Vt={MSE:"mse",NATIVE:"native"},xr={HEADER:"header",QUERY:"query",NONE:"none"},Eo=Object.values(xr),ui={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},ql={HLS:ui.M3U8},zA=Object.keys(ql),QA=[...Object.values(ui),"hls","HLS"],ZA={upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},jA={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},XA={DESCENDING:"desc"};var Yl={code:"en"},Te=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})};function Q_(e,t,i){t&&i>t&&(i=t);for(let a=0;a<e.length;a++)if(e.start(a)<=i&&e.end(a)>=i)return!0;return!1}var cu=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},Qo=e=>{let{type:t}=e;if(t){let i=t.toUpperCase();return uu(i,ql)?ql[i]:t}return Z_(e)},Zm=e=>e==="VOD"?Q.ON_DEMAND:Q.LIVE,jm=e=>e==="EVENT"?Number.POSITIVE_INFINITY:e==="VOD"?NaN:0,Z_=e=>{let{src:t}=e;if(!t)return"";let i="";try{i=new URL(t).pathname}catch{console.error("invalid url")}let a=i.lastIndexOf(".");if(a<0)return X_(e)?ui.M3U8:"";let r=i.slice(a+1).toUpperCase();return uu(r,ui)?ui[r]:""},j_="mux.com",X_=({src:e,customDomain:t=j_})=>{let i;try{i=new URL(`${e}`)}catch{return!1}let a=i.protocol==="https:",r=i.hostname===`stream.${t}`.toLowerCase(),n=i.pathname.split("/"),s=n.length===2,o=!(n!=null&&n[1].includes("."));return a&&r&&s&&o},Xa=e=>{let t=(e??"").split(".")[1];if(t)try{let i=t.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(i).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}catch{return}},J_=({exp:e},t=Date.now())=>!e||e*1e3<t,eg=({sub:e},t)=>e!==t,tg=({aud:e},t)=>!e,ig=({aud:e},t)=>e!==t,Xm="en";function M(e,t=!0){var i,a;return new ag(t&&(a=(i=Yl)==null?void 0:i[e])!=null?a:e,t?Yl.code:Xm)}var ag=class{constructor(e,t=(i=>(i=Yl)!=null?i:Xm)()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return(a=e[i])!=null?a:""})}toString(){return this.message}},rg=Object.values(Vl),ah=e=>typeof e=="boolean"||typeof e=="string"&&rg.includes(e),ng=(e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=ah(a)?a:!!a,o=()=>{r||Te(t,"playing",()=>{r=!0},{once:!0})};if(o(),Te(t,"loadstart",()=>{r=!1,o(),Al(t,s)},{once:!0}),Te(t,"loadstart",()=>{i||(e.streamType&&e.streamType!==Q.UNKNOWN?n=e.streamType===Q.LIVE:n=!Number.isFinite(t.duration)),Al(t,s)},{once:!0}),i&&i.once(F.Events.LEVEL_LOADED,(l,u)=>{var p;e.streamType&&e.streamType!==Q.UNKNOWN?n=e.streamType===Q.LIVE:n=(p=u.details.live)!=null?p:!1}),!s){let l=()=>{!n||Number.isFinite(e.startTime)||(i!=null&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&Te(t,"play",()=>{t.preload==="metadata"?i.once(F.Events.LEVEL_UPDATED,l):l()},{once:!0})}return l=>{r||(s=ah(l)?l:!!l,Al(t,s))}},Al=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case Vl.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case Vl.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{});break}},sg=({preload:e,src:t},i,a)=>{let r=m=>{m!=null&&["","none","metadata","auto"].includes(m)?i.setAttribute("preload",m):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,u=m=>{r(m);let d=m??i.preload;s||d==="none"||(d==="metadata"?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),p())},p=()=>{!n&&t&&(n=!0,a.loadSource(t))};return Te(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,p()},{once:!0}),u(e),u};function og(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(F.Events.MANIFEST_PARSED,function(u,p){l();let m=e.addVideoTrack("main");m.selected=!0;for(let[d,h]of p.levels.entries()){let v=m.addRendition(h.url[0],h.width,h.height,h.videoCodec,h.bitrate);a.set(h,`${d}`),v.id=`${d}`}}),t.on(F.Events.AUDIO_TRACKS_UPDATED,function(u,p){o();for(let m of p.audioTracks){let d=m.default?"main":"alternative",h=e.addAudioTrack(d,m.name,m.lang);h.id=`${m.id}`,m.default&&(h.enabled=!0)}});let r=()=>{var u;let p=+((u=[...e.audioTracks].find(d=>d.enabled))==null?void 0:u.id),m=t.audioTracks.map(d=>d.id);p!=t.audioTrack&&m.includes(p)&&(t.audioTrack=p)};e.audioTracks.addEventListener("change",r),t.on(F.Events.LEVELS_UPDATED,function(u,p){var m;let d=e.videoTracks[(m=e.videoTracks.selectedIndex)!=null?m:0];if(!d)return;let h=p.levels.map(v=>a.get(v));for(let v of e.videoRenditions)v.id&&!h.includes(v.id)&&d.removeRendition(v)});let n=u=>{let p=u.target.selectedIndex;p!=t.nextLevel&&(t.nextLevel=p)};(i=e.videoRenditions)==null||i.addEventListener("change",n);let s=()=>{for(let u of e.videoTracks)e.removeVideoTrack(u)},o=()=>{for(let u of e.audioTracks)e.removeAudioTrack(u)},l=()=>{s(),o()};t.once(F.Events.DESTROYING,()=>{var u,p;l(),(u=e.audioTracks)==null||u.removeEventListener("change",r),(p=e.videoRenditions)==null||p.removeEventListener("change",n)})}var kl=e=>"time"in e?e.time:e.startTime;function lg(e,t){t.on(F.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(r,{tracks:n})=>{n.forEach(s=>{var o,l;let u=(o=s.subtitleTrack)!=null?o:s.closedCaptions,p=t.subtitleTracks.findIndex(({lang:d,name:h,type:v})=>d==u?.lang&&h===s.label&&v.toLowerCase()===s.kind),m=((l=s._id)!=null?l:s.default)?"default":`${s.kind}${p}`;hu(e,s.kind,s.label,u?.lang,m,s.default)})});let i=()=>{if(!t.subtitleTracks.length)return;let r=Array.from(e.textTracks).find(o=>o.id&&o.mode==="showing"&&["subtitles","captions"].includes(o.kind));if(!r)return;let n=t.subtitleTracks[t.subtitleTrack],s=n?n.default?"default":`${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}`:void 0;(t.subtitleTrack<0||r?.id!==s)&&(t.subtitleTrack=t.subtitleTracks.findIndex(({lang:o,name:l,type:u,default:p})=>r.id==="default"&&p||o==r.language&&l===r.label&&u.toLowerCase()===r.kind)),r?.id===s&&r.cues&&Array.from(r.cues).forEach(o=>{r.addCue(o)})};e.textTracks.addEventListener("change",i),t.on(F.Events.CUES_PARSED,(r,{track:n,cues:s})=>{let o=e.textTracks.getTrackById(n);if(!o)return;let l=o.mode==="disabled";l&&(o.mode="hidden"),s.forEach(u=>{var p;(p=o.cues)!=null&&p.getCueById(u.id)||o.addCue(u)}),l&&(o.mode="disabled")}),t.once(F.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",i),e.querySelectorAll("track[data-removeondestroy]").forEach(r=>{r.remove()})});let a=()=>{Array.from(e.textTracks).forEach(r=>{var n,s;if(!["subtitles","caption"].includes(r.kind)&&(r.label==="thumbnails"||r.kind==="chapters")){if(!((n=r.cues)!=null&&n.length)){let o="track";r.kind&&(o+=`[kind="${r.kind}"]`),r.label&&(o+=`[label="${r.label}"]`);let l=e.querySelector(o),u=(s=l?.getAttribute("src"))!=null?s:"";l?.removeAttribute("src"),setTimeout(()=>{l?.setAttribute("src",u)},0)}r.mode!=="hidden"&&(r.mode="hidden")}})};t.once(F.Events.MANIFEST_LOADED,a),t.once(F.Events.MEDIA_ATTACHED,a)}function hu(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function dg(e,t){Array.prototype.find.call(e.querySelectorAll("track"),i=>i.track===t)?.remove()}function xn(e,t,i){var a;return(a=Array.from(e.querySelectorAll("track")).find(r=>r.track.label===t&&r.track.kind===i))==null?void 0:a.track}async function Jm(e,t,i,a){let r=xn(e,i,a);return r||(r=hu(e,a,i),r.mode="hidden",await new Promise(n=>setTimeout(()=>n(void 0),0))),r.mode!=="hidden"&&(r.mode="hidden"),[...t].sort((n,s)=>kl(s)-kl(n)).forEach(n=>{var s,o;let l=n.value,u=kl(n);if("endTime"in n&&n.endTime!=null)r?.addCue(new VTTCue(u,n.endTime,a==="chapters"?l:JSON.stringify(l??null)));else{let p=Array.prototype.findIndex.call(r?.cues,v=>v.startTime>=u),m=(s=r?.cues)==null?void 0:s[p],d=m?m.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,h=(o=r?.cues)==null?void 0:o[p-1];h&&(h.endTime=u),r?.addCue(new VTTCue(u,d,a==="chapters"?l:JSON.stringify(l??null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var mu="cuepoints",ep=Object.freeze({label:mu});async function tp(e,t,i=ep){return Jm(e,t,i.label,"metadata")}var Gl=e=>({time:e.startTime,value:JSON.parse(e.text)});function ug(e,t={label:mu}){let i=xn(e,t.label,"metadata");return i!=null&&i.cues?Array.from(i.cues,a=>Gl(a)):[]}function ip(e,t={label:mu}){var i,a;let r=xn(e,t.label,"metadata");if(!((i=r?.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return Gl(r.activeCues[0]);let{currentTime:n}=e;return Gl(Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:s,endTime:o})=>s<=n&&o>n)||r.activeCues[0])}async function cg(e,t=ep){return new Promise(i=>{Te(e,"loadstart",async()=>{let a=await tp(e,[],t);Te(e,"cuechange",()=>{let r=ip(e);if(r){let n=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:r});e.dispatchEvent(n)}},{},a),i(a)})})}var pu="chapters",ap=Object.freeze({label:pu}),zl=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function rp(e,t,i=ap){return Jm(e,t,i.label,"chapters")}function hg(e,t={label:pu}){var i;let a=xn(e,t.label,"chapters");return(i=a?.cues)!=null&&i.length?Array.from(a.cues,r=>zl(r)):[]}function np(e,t={label:pu}){var i,a;let r=xn(e,t.label,"chapters");if(!((i=r?.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return zl(r.activeCues[0]);let{currentTime:n}=e;return zl(Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:s,endTime:o})=>s<=n&&o>n)||r.activeCues[0])}async function mg(e,t=ap){return new Promise(i=>{Te(e,"loadstart",async()=>{let a=await rp(e,[],t);Te(e,"cuechange",()=>{let r=np(e);if(r){let n=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:r});e.dispatchEvent(n)}},{},a),i(a)})})}function pg(e,t){if(t){let i=t.playingDate;if(i!=null)return new Date(i.getTime()-e.currentTime*1e3)}return typeof e.getStartDate=="function"?e.getStartDate():new Date(NaN)}function vg(e,t){if(t&&t.playingDate)return t.playingDate;if(typeof e.getStartDate=="function"){let i=e.getStartDate();return new Date(i.getTime()+e.currentTime*1e3)}return new Date(NaN)}var on={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},fg=e=>{if(e===Z.VIDEO)return on.VIDEO;if(e===Z.DRM)return on.DRM},Eg=(e,t)=>{var i,a;let r=zo(e),n=`${r}Token`;return(i=t.tokens)!=null&&i[r]?(a=t.tokens)==null?void 0:a[r]:uu(n,t)?t[n]:void 0},_o=(e,t,i,a,r=!1,n=!(s=>(s=globalThis.navigator)==null?void 0:s.onLine)())=>{var s,o;if(n){let _=M("Your device appears to be offline",r),y,g=I.MEDIA_ERR_NETWORK,S=new I(_,g,!1,y);return S.errorCategory=t,S.muxCode=x.NETWORK_OFFLINE,S.data=e,S}let l="status"in e?e.status:e.code,u=Date.now(),p=I.MEDIA_ERR_NETWORK;if(l===200)return;let m=zo(t),d=Eg(t,i),h=fg(t),[v]=cu((s=i.playbackId)!=null?s:"");if(!l||!v)return;let T=Xa(d);if(d&&!T){let _=new I(M("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:m}),p,!0,M("Compact JWT string: {token}",r).format({token:d}));return _.errorCategory=t,_.muxCode=x.NETWORK_TOKEN_MALFORMED,_.data=e,_}if(l>=500){let _=new I("",p,a??!0);return _.errorCategory=t,_.muxCode=x.NETWORK_UNKNOWN_ERROR,_}if(l===403)if(T){if(J_(T,u)){let _={timeStyle:"medium",dateStyle:"medium"},y=new I(M("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:m}),p,!0,M("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",_).format((o=T.exp)!=null?o:0),currentDate:new Intl.DateTimeFormat("en",_).format(u)}));return y.errorCategory=t,y.muxCode=x.NETWORK_TOKEN_EXPIRED,y.data=e,y}if(eg(T,v)){let _=new I(M("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:m}),p,!0,M("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:m,playbackId:v,tokenPlaybackId:T.sub}));return _.errorCategory=t,_.muxCode=x.NETWORK_TOKEN_SUB_MISMATCH,_.data=e,_}if(tg(T,h)){let _=new I(M("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:m}),p,!0,M("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:m,expectedAud:h}));return _.errorCategory=t,_.muxCode=x.NETWORK_TOKEN_AUD_MISSING,_.data=e,_}if(ig(T,h)){let _=new I(M("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:m}),p,!0,M("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:m,expectedAud:h,aud:T.aud}));return _.errorCategory=t,_.muxCode=x.NETWORK_TOKEN_AUD_MISMATCH,_.data=e,_}}else{let _=M("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:m,category:t}),y=M("Specified playback ID: {playbackId}",r).format({playbackId:v}),g=new I(_,p,a??!0,y);return g.errorCategory=t,g.muxCode=x.NETWORK_TOKEN_MISSING,g.data=e,g}if(l===412){let _=M("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),y=M("Specified playback ID: {playbackId}",r).format({playbackId:v}),g=new I(_,p,a??!0,y);return g.errorCategory=t,g.muxCode=x.NETWORK_NOT_READY,g.streamType=i.streamType===Q.LIVE?"live":i.streamType===Q.ON_DEMAND?"on-demand":"unknown",g.data=e,g}if(l===404){let _=M("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),y=M("Specified playback ID: {playbackId}",r).format({playbackId:v}),g=new I(_,p,a??!0,y);return g.errorCategory=t,g.muxCode=x.NETWORK_NOT_FOUND,g.data=e,g}if(l===400){let _=M("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),y=M("Specified playback ID: {playbackId}",r).format({playbackId:v}),g=new I(_,p,a??!0,y);return g.errorCategory=t,g.muxCode=x.NETWORK_INVALID_URL,g.data=e,g}let b=new I("",p,a??!0);return b.errorCategory=t,b.muxCode=x.NETWORK_UNKNOWN_ERROR,b.data=e,b},rh=F.DefaultConfig.capLevelController,_g={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400};function gg(e){return _g[e.toLowerCase().trim()]}var Ql=class Or extends rh{constructor(t){super(t)}static setMaxAutoResolution(t,i){i?Or.maxAutoResolution.set(t,i):Or.maxAutoResolution.delete(t)}getMaxAutoResolution(){var t;let i=this.hls;return(t=Or.maxAutoResolution.get(i))!=null?t:void 0}get levels(){var t;return(t=this.hls.levels)!=null?t:[]}getValidLevels(t){return this.levels.filter((i,a)=>this.isLevelAllowed(i)&&a<=t)}getMaxLevelCapped(t){let i=this.getValidLevels(t),a=this.getMaxAutoResolution();if(!a)return super.getMaxLevel(t);let r=gg(a);if(!r)return super.getMaxLevel(t);let n=i.filter(l=>l.width*l.height<=r),s=n.findIndex(l=>l.width*l.height===r);if(s!==-1){let l=n[s];return i.findIndex(u=>u===l)}if(n.length===0)return 0;let o=n[n.length-1];return i.findIndex(l=>l===o)}getMaxLevel(t){if(this.getMaxAutoResolution()!==void 0)return this.getMaxLevelCapped(t);let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=Or.minMaxResolution;return r>=n?i:rh.getMaxLevelByMediaSize(a,n*(16/9),n)}};Ql.minMaxResolution=720,Ql.maxAutoResolution=new WeakMap;var Zl=Ql,bg="com.apple.fps.1_0",yg="application/vnd.apple.mpegurl",Tg=({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in e)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let d=new I(M("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),I.MEDIA_ERR_ENCRYPTED,!0);return d.errorCategory=Z.DRM,d.muxCode=x.ENCRYPTED_CDM_ERROR,a(e,d),()=>{}}let n=e,s=t(),o=null,l=d=>{(async()=>{try{n.webkitKeys||u();let h=await s;if(d.initData===null||h==null)return;p(Ag(d.initData,h))}catch(h){console.error("Could not start encrypted playback due to exception",h),a(n,h)}})()},u=()=>{try{let d=new WebKitMediaKeys(bg);n.webkitSetMediaKeys(d),r()}catch{let d=new I("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",I.MEDIA_ERR_ENCRYPTED,!0);throw d.errorCategory=Z.DRM,d.muxCode=x.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,d}},p=d=>{let h=n.webkitKeys.createSession(yg,d),v=async _=>{try{let y=_.message,g=await i(y);h.update(g)}catch(y){console.error("Error on FairPlay session message",y),a(e,y)}},T=_=>{let y=_.target.error;if(!y)return;console.error(`Internal Webkit Key Session Error - sysCode: ${y.systemCode} code: ${y.code}`);let g=new I(M("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),I.MEDIA_ERR_ENCRYPTED,!0);g.errorCategory=Z.DRM,g.muxCode=x.ENCRYPTED_CDM_ERROR,a(e,g)},b=()=>{h.removeEventListener("webkitkeymessage",v),h.removeEventListener("webkitkeyerror",T),e.removeEventListener("teardown",b),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",b),o=null;try{h.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",b,{once:!0}),h.addEventListener("webkitkeymessage",v),h.addEventListener("webkitkeyerror",T),e.addEventListener("teardown",b),o=b},m=()=>{e.removeEventListener("webkitneedkey",l),e.removeEventListener("teardown",m),o?.();try{n.webkitSetMediaKeys(null)}catch{}};return e.addEventListener("webkitneedkey",l),e.addEventListener("teardown",m,{once:!0}),m},Ag=(e,t)=>{let i=wg(kg(e)),a=new Uint8Array(e),r=new Uint8Array(i),n=new Uint8Array(t),s=a.byteLength+4+n.byteLength+4+r.byteLength,o=new Uint8Array(s),l=0,u=m=>{o.set(m,l),l+=m.byteLength},p=m=>{let d=new DataView(o.buffer),h=m.byteLength;d.setUint32(l,h,!0),l+=4,u(m)};return u(a),p(r),p(n),o},kg=e=>new TextDecoder("utf-16le").decode(e).replace("skd://","").slice(1);function wg(e){let t=new ArrayBuffer(e.length*2),i=new DataView(t);for(let a=0;a<e.length;a++)i.setUint16(a*2,e.charCodeAt(a),!0);return t}var Sg=({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async m=>{try{let d=m.initDataType;if(d!=="skd"){console.error(`Received unexpected initialization data type "${d}"`);return}e.mediaKeys||await l(d);let h=m.initData;if(h==null){console.error(`Could not start encrypted playback due to missing initData in ${m.type} event`);return}await u(d,h)}catch(d){a(e,d);return}},l=async m=>{let d=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[m],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(v=>(r(),v)).catch(()=>{let v=new I(M("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),I.MEDIA_ERR_ENCRYPTED,!0);v.errorCategory=Z.DRM,v.muxCode=x.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,a(e,v)});if(!d)return;let h=await d.createMediaKeys();try{let v=await t();await h.setServerCertificate(v).catch(()=>{let T=new I(M("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),I.MEDIA_ERR_ENCRYPTED,!0);return T.errorCategory=Z.DRM,T.muxCode=x.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(T)})}catch(v){a(e,v);return}await e.setMediaKeys(h)},u=async(m,d)=>{let h=e.mediaKeys.createSession(),v=async _=>{let y=_.message,g=await i(y);try{await h.update(g)}catch{let S=new I(M("Failed to update DRM license. This may be an issue with the player or your protected content."),I.MEDIA_ERR_ENCRYPTED,!0);S.errorCategory=Z.DRM,S.muxCode=x.ENCRYPTED_UPDATE_LICENSE_FAILED,a(e,S)}},T=()=>{let _=y=>{let g;y==="internal-error"?(g=new I(M("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),I.MEDIA_ERR_ENCRYPTED,!0),g.errorCategory=Z.DRM,g.muxCode=x.ENCRYPTED_CDM_ERROR):(y==="output-restricted"||y==="output-downscaled")&&(g=new I(M("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),I.MEDIA_ERR_ENCRYPTED,!1),g.errorCategory=Z.DRM,g.muxCode=x.ENCRYPTED_OUTPUT_RESTRICTED),g&&a(e,g)};h.keyStatuses.forEach(y=>_(y))};h.addEventListener("keystatuseschange",T),h.addEventListener("message",v);let b=async()=>{h.removeEventListener("keystatuseschange",T),h.removeEventListener("message",v),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",b),e.removeEventListener("teardown",b),await h.close().catch(_=>{console.warn("There was an error when closing EME session",_)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",b,{once:!0}),e.addEventListener("teardown",b,{once:!0}),s=b,await h.generateRequest(m,d).catch(async _=>{if(_.name==="NotSupportedError"&&"webkitCurrentPlaybackTargetIsWireless"in e&&e.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),n?.();else{let y=new I(M("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),I.MEDIA_ERR_ENCRYPTED,!0);return y.errorCategory=Z.DRM,y.muxCode=x.ENCRYPTED_GENERATE_REQUEST_FAILED,console.error("Failed to generate license request",_),Promise.reject(y)}})},p=async()=>{e.removeEventListener("encrypted",o),e.removeEventListener("teardown",p),s&&await s(),await e.setMediaKeys(null).catch(()=>{})};return e.addEventListener("encrypted",o),e.addEventListener("teardown",p,{once:!0}),p},is={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},Ig=e=>{if(e.includes("fps"))return is.FAIRPLAY;if(e.includes("playready"))return is.PLAYREADY;if(e.includes("widevine"))return is.WIDEVINE},Rg=e=>{let t=e.split(`
`).find((i,a,r)=>a&&r[a-1].startsWith("#EXT-X-STREAM-INF"));return fetch(t).then(i=>i.status!==200?Promise.reject(i):i.text())},Lg=e=>{let t=e.split(`
`).filter(a=>a.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let i={};for(let a of t){let r=Dg(a),n=r["DATA-ID"];n&&(i[n]={...r})}return{sessionData:i}},Cg=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;function Dg(e){let t=[...e.matchAll(Cg)];return Object.fromEntries(t.map(([,i,a])=>[i,a]))}var Mg=e=>{var t,i,a;let r=e.split(`
`),n=(i=((t=r.find(u=>u.startsWith("#EXT-X-PLAYLIST-TYPE")))!=null?t:"").split(":")[1])==null?void 0:i.trim(),s=Zm(n),o=jm(n),l;if(s===Q.LIVE){let u=r.find(p=>p.startsWith("#EXT-X-PART-INF"));if(u)l=+u.split(":")[1].split("=")[1]*2;else{let p=r.find(d=>d.startsWith("#EXT-X-TARGETDURATION")),m=(a=p?.split(":"))==null?void 0:a[1];l=+(m??6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}},xg=async(e,t)=>{if(t===ui.MP4)return{streamType:Q.ON_DEMAND,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===ui.M3U8){let i=await fetch(e);if(!i.ok)return Promise.reject(i);let a=await i.text(),r=await Rg(a);return{...Lg(a),...Mg(r)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},Og=async(e,t,i=Qo({src:e}))=>{var a,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:u,sessionData:p}=await xg(e,i),m=p?.["com.apple.hls.chapters"];(m!=null&&m.URI||m!=null&&m.VALUE.toLocaleLowerCase().startsWith("http"))&&vu((a=m.URI)!=null?a:m.VALUE,t),((r=se.get(t))!=null?r:{}).liveEdgeStartOffset=u,((n=se.get(t))!=null?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((s=se.get(t))!=null?s:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},vu=async(e,t)=>{var i,a;try{let r=await fetch(e);if(!r.ok)throw new Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!((i=n?.[0])!=null&&i.metadata))return;for(let l of n[0].metadata)l.key&&l.value&&(s[l.key]=l.value);((a=se.get(t))!=null?a:{}).metadata=s;let o=new CustomEvent("muxmetadata");t.dispatchEvent(o)}catch(r){console.error(r)}},Ng=e=>{var t;let i=e.type,a=Zm(i),r=jm(i),n,s=!!((t=e.partList)!=null&&t.length);return a===Q.LIVE&&(n=s?e.partTarget*2:e.targetduration*3),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},Pg=(e,t,i)=>{var a,r,n,s,o,l,u,p;let{streamType:m,targetLiveWindow:d,liveEdgeStartOffset:h,lowLatency:v}=Ng(e);if(m===Q.LIVE){v?(i.config.backBufferLength=(a=i.userConfig.backBufferLength)!=null?a:4,i.config.maxFragLookUpTolerance=(r=i.userConfig.maxFragLookUpTolerance)!=null?r:.001,i.config.abrBandWidthUpFactor=(n=i.userConfig.abrBandWidthUpFactor)!=null?n:i.config.abrBandWidthFactor):i.config.backBufferLength=(s=i.userConfig.backBufferLength)!=null?s:8;let T=Object.freeze({get length(){return t.seekable.length},start(b){return t.seekable.start(b)},end(b){var _;return b>this.length||b<0||Number.isFinite(t.duration)?t.seekable.end(b):(_=i.liveSyncPosition)!=null?_:t.seekable.end(b)}});((o=se.get(t))!=null?o:{}).seekable=T}((l=se.get(t))!=null?l:{}).liveEdgeStartOffset=h,((u=se.get(t))!=null?u:{}).targetLiveWindow=d,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((p=se.get(t))!=null?p:{}).streamType=m,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},nh,sh,sp=(sh=(nh=globalThis?.navigator)==null?void 0:nh.userAgent)!=null?sh:"",oh,lh,dh,Ug=(dh=(lh=(oh=globalThis?.navigator)==null?void 0:oh.userAgentData)==null?void 0:lh.platform)!=null?dh:"",$g=sp.toLowerCase().includes("android")||["x11","android"].some(e=>Ug.toLowerCase().includes(e)),Hg=e=>/^((?!chrome|android).)*safari/i.test(sp)&&!!e.canPlayType("application/vnd.apple.mpegurl"),se=new WeakMap,ci="mux.com",uh,ch,op=(ch=(uh=F).isSupported)==null?void 0:ch.call(uh),Bg=e=>$g||!Hg(e),fu=()=>{if(typeof window<"u")return du.utils.now()},Wg=du.utils.generateUUID,jl=({playbackId:e,customDomain:t=ci,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:u,tokens:{playback:p=u}={},extraSourceParams:m={}}={})=>{if(!e)return;let[d,h=""]=cu(e),v=new URL(`https://stream.${t}/${d}.m3u8${h}`);return p||v.searchParams.has("token")?(v.searchParams.forEach((T,b)=>{b!="token"&&v.searchParams.delete(b)}),p&&v.searchParams.set("token",p)):(i&&v.searchParams.set("max_resolution",i),a&&(v.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&v.searchParams.set("rendition_order",r),n&&v.searchParams.set("program_start_time",`${n}`),s&&v.searchParams.set("program_end_time",`${s}`),o&&v.searchParams.set("asset_start_time",`${o}`),l&&v.searchParams.set("asset_end_time",`${l}`),Object.entries(m).forEach(([T,b])=>{b!=null&&v.searchParams.set(T,b)})),v.toString()},Zo=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},Eu=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},Fg=e=>{var t,i,a;return(t=e?.metadata)!=null&&t.video_id?e.metadata.video_id:fp(e)&&(a=(i=Zo(e.playbackId))!=null?i:Eu(e.src))!=null?a:e.src},lp=e=>{var t;return(t=se.get(e))==null?void 0:t.error},Kg=e=>{var t;return(t=se.get(e))==null?void 0:t.metadata},Xl=e=>{var t,i;return(i=(t=se.get(e))==null?void 0:t.streamType)!=null?i:Q.UNKNOWN},Vg=e=>{var t,i;return(i=(t=se.get(e))==null?void 0:t.targetLiveWindow)!=null?i:NaN},_u=e=>{var t,i;return(i=(t=se.get(e))==null?void 0:t.seekable)!=null?i:e.seekable},qg=e=>{var t;let i=(t=se.get(e))==null?void 0:t.liveEdgeStartOffset;if(typeof i!="number")return NaN;let a=_u(e);return a.length?a.end(a.length-1)-i:NaN},Yg=e=>{var t;return(t=se.get(e))==null?void 0:t.coreReference},gu=.034,Gg=(e,t,i=gu)=>Math.abs(e-t)<=i,dp=(e,t,i=gu)=>e>t||Gg(e,t,i),zg=(e,t=gu)=>e.paused&&dp(e.currentTime,e.duration,t),up=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?(a=(i=t.levels)==null?void 0:i[t.currentLevel])==null?void 0:a.details:(r=t.levels.find(m=>!!m.details))==null?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(s!=null&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,u=e.buffered.start(e.buffered.length-1),p=e.buffered.end(e.buffered.length-1);return l>u&&l<p},cp=(e,t)=>e.ended||e.loop?e.ended:t&&up(e,t)?!0:zg(e),hp=(e,t,i)=>{mp(t,i,e);let{metadata:a={}}=e,{view_session_id:r=Wg()}=a,n=Fg(e);a.view_session_id=r,a.video_id=n,e.metadata=a;let s=m=>{var d;(d=t.mux)==null||d.emit("hb",{view_drm_type:m})};e.drmTypeCb=s,e.fallbackToWebkitFairplay=async()=>{var m;let d=!t.paused,h=t.currentTime;e.useWebkitFairplay=!0;let v=e.muxDataKeepSession;e.muxDataKeepSession=!0,hp(e,t,(m=se.get(t))==null?void 0:m.coreReference),e.muxDataKeepSession=v,e.useWebkitFairplay=!1,d&&await t.play().then(()=>{t.currentTime=h}).catch(()=>{}),t.currentTime=h},se.set(t,{retryCount:0});let o=Qg(e,t),l=sg(e,t,o);e!=null&&e.muxDataKeepSession&&t!=null&&t.mux&&!t.mux.deleted?o&&t.mux.addHLSJS({hlsjs:o,Hls:o?F:void 0}):ib(e,t,o),ab(e,t,o),cg(t),mg(t);let u={engine:o,setAutoplay:ng(e,t,o),setPreload:l},p=se.get(t);return p&&(p.coreReference=u),u},mp=(e,t,i)=>{let a=t?.engine;e!=null&&e.mux&&!e.mux.deleted&&(i!=null&&i.muxDataKeepSession?a&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),a&&(a.detachMedia(),a.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",_p),e.removeEventListener("error",Jl),e.removeEventListener("durationchange",Ep),se.delete(e),e.dispatchEvent(new Event("teardown")))};function pp(e,t){var i;let a=Qo(e);if(a!==ui.M3U8)return!0;let r=!a||((i=t.canPlayType(a))!=null?i:!0),{preferPlayback:n}=e,s=n===Vt.MSE,o=n===Vt.NATIVE,l=op&&(s||Bg(t));return r&&(o||!l)}var Qg=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l}=e,u=Qo(e)===ui.M3U8,p=pp(e,t);if(u&&!p&&op){let m={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0},d=Zg(a),h=jg(e),v=[xr.QUERY,xr.HEADER].includes(s)?{useHeaders:s===xr.HEADER,sessionId:n?.view_session_id,contentId:n?.video_id}:void 0,T=tb(e,o),b=new F({debug:i,startPosition:r,cmcd:v,xhrSetup:(_,y)=>{var g,S;if(s&&s!==xr.QUERY)return;let C=new URL(y);if(!C.searchParams.has("CMCD"))return;let N=((S=(g=C.searchParams.get("CMCD"))==null?void 0:g.split(","))!=null?S:[]).filter($=>$.startsWith("sid")||$.startsWith("cid")).join(",");C.searchParams.set("CMCD",N),_.open("GET",C)},...m,...T,...d,...h,...o});return T.capLevelController===Zl&&l!==void 0&&Zl.setMaxAutoResolution(b,l),b.on(F.Events.MANIFEST_PARSED,async function(_,y){var g,S;let C=(g=y.sessionData)==null?void 0:g["com.apple.hls.chapters"];(C!=null&&C.URI||C!=null&&C.VALUE.toLocaleLowerCase().startsWith("http"))&&vu((S=C?.URI)!=null?S:C?.VALUE,t)}),b}},Zg=e=>e===Q.LIVE?{backBufferLength:8}:{},jg=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=Zo(i);return!t||!r?{}:{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:as(e,"fairplay"),serverCertificateUrl:vp(e,"fairplay")},"com.widevine.alpha":{licenseUrl:as(e,"widevine")},"com.microsoft.playready":{licenseUrl:as(e,"playready")}},requestMediaKeySystemAccessFunc:(n,s)=>(n==="com.widevine.alpha"&&(s=[...s.map(o=>{var l;let u=(l=o.videoCapabilities)==null?void 0:l.map(p=>({...p,robustness:"HW_SECURE_ALL"}));return{...o,videoCapabilities:u}}),...s]),navigator.requestMediaKeySystemAccess(n,s).then(o=>{let l=Ig(n);return a?.(l),o}))}},Xg=async e=>{let t=await fetch(e);return t.status!==200?Promise.reject(t):await t.arrayBuffer()},Jg=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});if(i.status!==200)return Promise.reject(i);let a=await i.arrayBuffer();return new Uint8Array(a)},eb=(e,t)=>{let i={mediaEl:t,getAppCertificate:()=>Xg(vp(e,"fairplay")).catch(a=>{if(a instanceof Response){let r=_o(a,Z.DRM,e);return console.error("mediaError",r?.message,r?.context),r?Promise.reject(r):Promise.reject(new Error("Unexpected error in app cert request"))}return Promise.reject(a)}),getLicenseKey:a=>Jg(a,as(e,"fairplay")).catch(r=>{if(r instanceof Response){let n=_o(r,Z.DRM,e);return console.error("mediaError",n?.message,n?.context),n?Promise.reject(n):Promise.reject(new Error("Unexpected error in license key request"))}return Promise.reject(r)}),saveAndDispatchError:Mi,drmTypeCb:()=>{var a;(a=e.drmTypeCb)==null||a.call(e,is.FAIRPLAY)}};if(e.useWebkitFairplay)Tg(i);else{let a=Sg({fallbackToWebkitFairplay:async()=>{var r;await a(),(r=e.fallbackToWebkitFairplay)==null||r.call(e)},...i})}},as=({playbackId:e,tokens:{drm:t}={},customDomain:i=ci},a)=>{let r=Zo(e);return`https://license.${i.toLocaleLowerCase().endsWith(ci)?i:ci}/license/${a}/${r}?token=${t}`},vp=({playbackId:e,tokens:{drm:t}={},customDomain:i=ci},a)=>{let r=Zo(e);return`https://license.${i.toLocaleLowerCase().endsWith(ci)?i:ci}/appcert/${a}/${r}?token=${t}`},fp=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if(typeof t!="string")return!1;let a=window?.location.href,r=new URL(t,a).hostname.toLocaleLowerCase();return r.includes(ci)||!!i&&r.includes(i.toLocaleLowerCase())},tb=(e,t)=>{let i={};return i.capLevelToPlayerSize=e.capRenditionToPlayerSize,i.capLevelToPlayerSize==null?(i.capLevelController=Zl,i.capLevelToPlayerSize=!0):i.capLevelController=zf,i},ib=(e,t,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=du,muxDataSDKOptions:o={}}=e,l=fp(e);if(!n&&(r||l)){let{playerInitTime:u,playerSoftwareName:p,playerSoftwareVersion:m,beaconCollectionDomain:d,debug:h,disableCookies:v}=e,T={...e.metadata,video_title:((a=e?.metadata)==null?void 0:a.video_title)||void 0},b=_=>typeof _.player_error_code=="string"?!1:typeof e.errorTranslator=="function"?e.errorTranslator(_):_;s.monitor(t,{debug:h,beaconCollectionDomain:d,hlsjs:i,Hls:i?F:void 0,automaticErrorTracking:!1,errorTranslator:b,disableCookies:v,...o,data:{...r?{env_key:r}:{},player_software_name:p,player_software:p,player_software_version:m,player_init_time:u,...T}})}},ab=(e,t,i)=>{var a,r;let n=pp(e,t),{src:s,customDomain:o=ci}=e,l=()=>{t.ended||e.disablePseudoEnded||!cp(t,i)||(up(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},u,p,m=()=>{let d=_u(t),h,v;d.length>0&&(h=d.start(0),v=d.end(0)),(p!==v||u!==h)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),u=h,p=v};if(Te(t,"durationchange",m),t&&n){let d=Qo(e);if(typeof s=="string"){if(s.endsWith(".mp4")&&s.includes(o)){let T=Eu(s);vu(new URL(`https://stream.${o}/${T}/metadata.json`).toString(),t)}let h=()=>{if(Xl(t)!==Q.LIVE||Number.isFinite(t.duration))return;let T=setInterval(m,1e3);t.addEventListener("teardown",()=>{clearInterval(T)},{once:!0}),Te(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(T)})},v=async()=>Og(s,t,d).then(h).catch(T=>{if(T instanceof Response){let b=_o(T,Z.VIDEO,e);if(b){Mi(t,b);return}}else T instanceof Error});if(t.preload==="none"){let T=()=>{v(),t.removeEventListener("loadedmetadata",b)},b=()=>{v(),t.removeEventListener("play",T)};Te(t,"play",T,{once:!0}),Te(t,"loadedmetadata",b,{once:!0})}else v();(a=e.tokens)!=null&&a.drm?eb(e,t):Te(t,"encrypted",()=>{let T=new I(M("Attempting to play DRM-protected content without providing a DRM token."),I.MEDIA_ERR_ENCRYPTED,!0);T.errorCategory=Z.DRM,T.muxCode=x.ENCRYPTED_MISSING_TOKEN,Mi(t,T)},{once:!0}),t.setAttribute("src",s),e.startTime&&(((r=se.get(t))!=null?r:{}).startTime=e.startTime,t.addEventListener("durationchange",Ep,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",_p),t.addEventListener("error",Jl),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(h=>{h.remove()})},{once:!0}),Te(t,"pause",l),Te(t,"seeked",l),Te(t,"play",()=>{t.ended||dp(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else i&&s?(i.once(F.Events.LEVEL_LOADED,(d,h)=>{Pg(h.details,t,i),m(),Xl(t)===Q.LIVE&&!Number.isFinite(t.duration)&&(i.on(F.Events.LEVEL_UPDATED,m),Te(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(F.Events.LEVELS_UPDATED,m)}))}),i.on(F.Events.ERROR,(d,h)=>{var v,T;let b=rb(h,e);if(b.muxCode===x.NETWORK_NOT_READY){let _=(v=se.get(t))!=null?v:{},y=(T=_.retryCount)!=null?T:0;if(y<6){let g=y===0?5e3:6e4,S=new I(`Retrying in ${g/1e3} seconds...`,b.code,b.fatal);Object.assign(S,b),Mi(t,S);let C=setTimeout(()=>{_.retryCount=y+1,h.details==="manifestLoadError"&&h.url&&i.loadSource(h.url)},g);t.addEventListener("teardown",()=>clearTimeout(C),{once:!0});return}else{_.retryCount=0;let g=new I('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',b.code,b.fatal);Object.assign(g,b),Mi(t,g);return}}Mi(t,b)}),i.on(F.Events.MANIFEST_LOADED,()=>{let d=se.get(t);d&&d.error&&(d.error=null,d.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",Jl),Te(t,"waiting",l),og(e,i),lg(t,i),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function Ep(e){var t;let i=e.target,a=(t=se.get(i))==null?void 0:t.startTime;if(a&&Q_(i.seekable,i.duration,a)){let r=i.preload==="auto";r&&(i.preload="none"),i.currentTime=a,r&&(i.preload="auto")}}async function _p(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(t!=null&&t.error))return;let{message:i,code:a}=t.error,r=new I(i,a);if(t.src&&a===I.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var n;let s=(n=lp(t))!=null?n:t.error;s?.code===I.MEDIA_ERR_SRC_NOT_SUPPORTED&&Mi(t,r)},500);return}if(t.src&&(a!==I.MEDIA_ERR_DECODE||a!==void 0))try{let{status:n}=await fetch(t.src);r.data={response:{code:n}}}catch{}Mi(t,r)}function Mi(e,t){var i;t.fatal&&(((i=se.get(e))!=null?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function Jl(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof I))return;let a=e.target,r=e.detail;!r||!r.fatal||(((t=se.get(a))!=null?t:{}).error=r,(i=a.mux)==null||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var rb=(e,t)=>{var i,a,r;e.fatal?console.error("getErrorFromHlsErrorData()",e):t.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",e);let n={[F.ErrorTypes.NETWORK_ERROR]:I.MEDIA_ERR_NETWORK,[F.ErrorTypes.MEDIA_ERROR]:I.MEDIA_ERR_DECODE,[F.ErrorTypes.KEY_SYSTEM_ERROR]:I.MEDIA_ERR_ENCRYPTED},s=p=>[F.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,F.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(p.details)?I.MEDIA_ERR_NETWORK:n[p.type],o=p=>{if(p.type===F.ErrorTypes.KEY_SYSTEM_ERROR)return Z.DRM;if(p.type===F.ErrorTypes.NETWORK_ERROR)return Z.VIDEO},l,u=s(e);if(u===I.MEDIA_ERR_NETWORK&&e.response){let p=(i=o(e))!=null?i:Z.VIDEO;l=(a=_o(e.response,p,t,e.fatal))!=null?a:new I("",u,e.fatal)}else u===I.MEDIA_ERR_ENCRYPTED?e.details===F.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?(l=new I(M("Attempting to play DRM-protected content without providing a DRM token."),I.MEDIA_ERR_ENCRYPTED,e.fatal),l.errorCategory=Z.DRM,l.muxCode=x.ENCRYPTED_MISSING_TOKEN):e.details===F.ErrorDetails.KEY_SYSTEM_NO_ACCESS?(l=new I(M("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),I.MEDIA_ERR_ENCRYPTED,e.fatal),l.errorCategory=Z.DRM,l.muxCode=x.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM):e.details===F.ErrorDetails.KEY_SYSTEM_NO_SESSION?(l=new I(M("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),I.MEDIA_ERR_ENCRYPTED,!0),l.errorCategory=Z.DRM,l.muxCode=x.ENCRYPTED_GENERATE_REQUEST_FAILED):e.details===F.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?(l=new I(M("Failed to update DRM license. This may be an issue with the player or your protected content."),I.MEDIA_ERR_ENCRYPTED,e.fatal),l.errorCategory=Z.DRM,l.muxCode=x.ENCRYPTED_UPDATE_LICENSE_FAILED):e.details===F.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?(l=new I(M("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),I.MEDIA_ERR_ENCRYPTED,e.fatal),l.errorCategory=Z.DRM,l.muxCode=x.ENCRYPTED_UPDATE_SERVER_CERT_FAILED):e.details===F.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?(l=new I(M("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),I.MEDIA_ERR_ENCRYPTED,e.fatal),l.errorCategory=Z.DRM,l.muxCode=x.ENCRYPTED_CDM_ERROR):e.details===F.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?(l=new I(M("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),I.MEDIA_ERR_ENCRYPTED,!1),l.errorCategory=Z.DRM,l.muxCode=x.ENCRYPTED_OUTPUT_RESTRICTED):(l=new I(e.error.message,I.MEDIA_ERR_ENCRYPTED,e.fatal),l.errorCategory=Z.DRM,l.muxCode=x.ENCRYPTED_ERROR):l=new I("",u,e.fatal);return l.context||(l.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${(r=e.err)==null?void 0:r.message}
`:""}`),l.data=e,l},gp=e=>{throw TypeError(e)},bu=(e,t,i)=>t.has(e)||gp("Cannot "+i),Ee=(e,t,i)=>(bu(e,t,"read from private field"),i?i.call(e):t.get(e)),it=(e,t,i)=>t.has(e)?gp("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),bt=(e,t,i,a)=>(bu(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Un=(e,t,i)=>(bu(e,t,"access private method"),i),nb=()=>{try{return"0.30.5"}catch{}return"UNKNOWN"},sb=nb(),ob=()=>sb,lb=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,E={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size"},db=Object.values(E),hh=ob(),mh="mux-video",Nr,rs,Pr,ns,ss,os,ls,ds,Ur,us,nt,zi,cs,$r,ub=class extends Nn{constructor(){super(),it(this,nt),it(this,Nr),it(this,rs),it(this,Pr,{}),it(this,ns,{}),it(this,ss),it(this,os),it(this,ls),it(this,ds),it(this,Ur,""),it(this,us,e=>{var t;let i=Kg(this.nativeEl),a=(t=this.metadata)!=null?t:{};this.metadata={...i,...a},i?.["com.mux.video.branding"]==="mux-free-plan"&&(bt(this,Ur,"default"),this.updateLogo())}),it(this,cs),bt(this,rs,fu())}static get NAME(){return mh}static get VERSION(){return hh}static get observedAttributes(){var e;return[...db,...(e=Nn.observedAttributes)!=null?e:[]]}static getLogoHTML(e){return!e||e==="false"?"":e==="default"?lb:`<img part="logo" src="${e}" />`}static getTemplateHTML(e={}){var t;return`
      ${Nn.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML((t=e[E.LOGO])!=null?t:"")}
      </slot>
    `}get preferCmcd(){var e;return(e=this.getAttribute(E.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?Eo.includes(e)?this.setAttribute(E.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${Eo.join()}`):this.removeAttribute(E.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(E.PLAYER_INIT_TIME)?+this.getAttribute(E.PLAYER_INIT_TIME):Ee(this,rs)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(E.PLAYER_INIT_TIME):this.setAttribute(E.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=Ee(this,ls))!=null?e:mh}set playerSoftwareName(e){bt(this,ls,e)}get playerSoftwareVersion(){var e;return(e=Ee(this,os))!=null?e:hh}set playerSoftwareVersion(e){bt(this,os,e)}get _hls(){var e;return(e=Ee(this,nt,zi))==null?void 0:e.engine}get mux(){var e;return(e=this.nativeEl)==null?void 0:e.mux}get error(){var e;return(e=lp(this.nativeEl))!=null?e:null}get errorTranslator(){return Ee(this,ds)}set errorTranslator(e){bt(this,ds,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(e==null?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return(e=this.getAttribute(E.TYPE))!=null?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(E.TYPE,e):this.removeAttribute(E.TYPE))}get preload(){let e=this.getAttribute("preload");return e===""?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return this.getAttribute(E.DEBUG)!=null}set debug(e){e!==this.debug&&(e?this.setAttribute(E.DEBUG,""):this.removeAttribute(E.DEBUG))}get disableTracking(){return this.hasAttribute(E.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(E.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(E.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(E.DISABLE_COOKIES,""):this.removeAttribute(E.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(E.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(E.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(E.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(E.START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(e==null?this.removeAttribute(E.START_TIME):this.setAttribute(E.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(E.PLAYBACK_ID)?this.getAttribute(E.PLAYBACK_ID):(e=Eu(this.src))!=null?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(E.PLAYBACK_ID,e):this.removeAttribute(E.PLAYBACK_ID))}get maxResolution(){var e;return(e=this.getAttribute(E.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(E.MAX_RESOLUTION,e):this.removeAttribute(E.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(E.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(E.MIN_RESOLUTION,e):this.removeAttribute(E.MIN_RESOLUTION))}get maxAutoResolution(){var e;return(e=this.getAttribute(E.MAX_AUTO_RESOLUTION))!=null?e:void 0}set maxAutoResolution(e){e==null?this.removeAttribute(E.MAX_AUTO_RESOLUTION):this.setAttribute(E.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return(e=this.getAttribute(E.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(E.RENDITION_ORDER,e):this.removeAttribute(E.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(E.PROGRAM_START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){e==null?this.removeAttribute(E.PROGRAM_START_TIME):this.setAttribute(E.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(E.PROGRAM_END_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){e==null?this.removeAttribute(E.PROGRAM_END_TIME):this.setAttribute(E.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(E.ASSET_START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){e==null?this.removeAttribute(E.ASSET_START_TIME):this.setAttribute(E.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(E.ASSET_END_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){e==null?this.removeAttribute(E.ASSET_END_TIME):this.setAttribute(E.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return(e=this.getAttribute(E.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(E.CUSTOM_DOMAIN,e):this.removeAttribute(E.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return((e=this._hlsConfig)==null?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:Ee(this,cs)}set capRenditionToPlayerSize(e){bt(this,cs,e)}get drmToken(){var e;return(e=this.getAttribute(E.DRM_TOKEN))!=null?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(E.DRM_TOKEN,e):this.removeAttribute(E.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(E.PLAYBACK_TOKEN))return(e=this.getAttribute(E.PLAYBACK_TOKEN))!=null?e:void 0;if(this.hasAttribute(E.PLAYBACK_ID)){let[,r]=cu((t=this.playbackId)!=null?t:"");return(i=new URLSearchParams(r).get("token"))!=null?i:void 0}if(this.src)return(a=new URLSearchParams(this.src).get("token"))!=null?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(E.PLAYBACK_TOKEN,e):this.removeAttribute(E.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(E.PLAYBACK_TOKEN),t=this.getAttribute(E.DRM_TOKEN);return{...Ee(this,ns),...e!=null?{playback:e}:{},...t!=null?{drm:t}:{}}}set tokens(e){bt(this,ns,e??{})}get ended(){return cp(this.nativeEl,this._hls)}get envKey(){var e;return(e=this.getAttribute(E.ENV_KEY))!=null?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(E.ENV_KEY,e):this.removeAttribute(E.ENV_KEY))}get beaconCollectionDomain(){var e;return(e=this.getAttribute(E.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(E.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(E.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return(e=this.getAttribute(E.STREAM_TYPE))!=null?e:Xl(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(E.STREAM_TYPE,e):this.removeAttribute(E.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(E.TARGET_LIVE_WINDOW)?+this.getAttribute(E.TARGET_LIVE_WINDOW):Vg(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(e==null?this.removeAttribute(E.TARGET_LIVE_WINDOW):this.setAttribute(E.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(E.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=(e=this.nativeEl.seekable.end(0))!=null?e:0,r=(t=this.nativeEl.seekable.start(0))!=null?t:0;return Math.max(r,a-i)}return qg(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(E.LIVE_EDGE_OFFSET))return+this.getAttribute(E.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(e==null?this.removeAttribute(E.LIVE_EDGE_OFFSET):this.setAttribute(E.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return _u(this.nativeEl)}async addCuePoints(e){return tp(this.nativeEl,e)}get activeCuePoint(){return ip(this.nativeEl)}get cuePoints(){return ug(this.nativeEl)}async addChapters(e){return rp(this.nativeEl,e)}get activeChapter(){return np(this.nativeEl)}get chapters(){return hg(this.nativeEl)}getStartDate(){return pg(this.nativeEl,this._hls)}get currentPdt(){return vg(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(E.PREFER_PLAYBACK);if(e===Vt.MSE||e===Vt.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===Vt.MSE||e===Vt.NATIVE?this.setAttribute(E.PREFER_PLAYBACK,e):this.removeAttribute(E.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![E.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return i!=null&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...Ee(this,Pr)}}set metadata(e){bt(this,Pr,e??{}),this.mux&&this.mux.emit("hb",Ee(this,Pr))}get _hlsConfig(){return Ee(this,ss)}set _hlsConfig(e){bt(this,ss,e)}get logo(){var e;return(e=this.getAttribute(E.LOGO))!=null?e:Ee(this,Ur)}set logo(e){e?this.setAttribute(E.LOGO,e):this.removeAttribute(E.LOGO)}load(){hp(this,this.nativeEl,Ee(this,nt,zi))}unload(){mp(this.nativeEl,Ee(this,nt,zi),this)}attributeChangedCallback(e,t,i){var a,r;switch(Nn.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case E.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=i??void 0;break;case E.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=i??void 0;break;case"src":{let n=!!t,s=!!i;!n&&s?Un(this,nt,$r).call(this):n&&!s?this.unload():n&&s&&(this.unload(),Un(this,nt,$r).call(this));break}case"autoplay":if(i===t)break;(a=Ee(this,nt,zi))==null||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;(r=Ee(this,nt,zi))==null||r.setPreload(i);break;case E.PLAYBACK_ID:case E.CUSTOM_DOMAIN:case E.MAX_RESOLUTION:case E.MIN_RESOLUTION:case E.RENDITION_ORDER:case E.PROGRAM_START_TIME:case E.PROGRAM_END_TIME:case E.ASSET_START_TIME:case E.ASSET_END_TIME:case E.PLAYBACK_TOKEN:this.src=jl(this);break;case E.DEBUG:{let n=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=n);break}case E.METADATA_URL:i&&fetch(i).then(n=>n.json()).then(n=>this.metadata=n).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case E.STREAM_TYPE:(i==null||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case E.TARGET_LIVE_WINDOW:(i==null||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case E.LOGO:(i==null||i!==t)&&this.updateLogo();break;case E.DISABLE_TRACKING:if(i==null||i!==t){let n=this.currentTime,s=this.paused;this.unload(),Un(this,nt,$r).call(this).then(()=>{this.currentTime=n,s||this.play()})}break;case E.DISABLE_COOKIES:(i==null||i!==t)&&this.disableCookies&&document.cookie.split(";").forEach(n=>{n.trim().startsWith("muxData")&&(document.cookie=n.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))});break;case E.CAP_RENDITION_TO_PLAYER_SIZE:(i==null||i!==t)&&(this.capRenditionToPlayerSize=i!=null?!0:void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');e&&(e.innerHTML=this.constructor.getLogoHTML(Ee(this,Ur)||this.logo))}connectedCallback(){var e,t;(e=super.connectedCallback)==null||e.call(this),(t=this.nativeEl)==null||t.addEventListener("muxmetadata",Ee(this,us)),this.nativeEl&&this.src&&!Ee(this,nt,zi)&&Un(this,nt,$r).call(this)}disconnectedCallback(){var e,t;(e=this.nativeEl)==null||e.removeEventListener("muxmetadata",Ee(this,us)),this.unload(),(t=super.disconnectedCallback)==null||t.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};Nr=new WeakMap,rs=new WeakMap,Pr=new WeakMap,ns=new WeakMap,ss=new WeakMap,os=new WeakMap,ls=new WeakMap,ds=new WeakMap,Ur=new WeakMap,us=new WeakMap,nt=new WeakSet,zi=function(){return Yg(this.nativeEl)},cs=new WeakMap,$r=async function(){Ee(this,Nr)||(await bt(this,Nr,Promise.resolve()),bt(this,Nr,null),this.load())};var Ui=new WeakMap,wl=class extends Error{},cb=class extends Error{},hb=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"],mb=globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{const i=t.deref();i&&e(i)})}}:Set;function pb(e){globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?e():customElements.whenDefined("google-cast-button").then(e):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(e)}}function vb(){return globalThis.chrome}function fb(){const e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;const t=document.createElement("script");t.src=e,document.head.append(t)}function Oi(){return globalThis.cast?.framework?.CastContext.getInstance()}function yu(){return Oi()?.getCurrentSession()}function Tu(){return yu()?.getSessionObj().media[0]}function Eb(e){return new Promise((t,i)=>{Tu().editTracksInfo(e,t,i)})}function _b(e){return new Promise((t,i)=>{Tu().getStatus(e,t,i)})}function ph(e){return Oi().setOptions({...bp(),...e})}function bp(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function gb(e){if(!e)return;const t=e.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return t?t[1]:null}function bb(e){const t=e.split(`
`),i=[];for(let a=0;a<t.length;a++)if(t[a].trim().startsWith("#EXT-X-STREAM-INF")){const r=t[a+1]?t[a+1].trim():"";r&&!r.startsWith("#")&&i.push(r)}return i}function yb(e){return e.split(`
`).find(t=>!t.trim().startsWith("#")&&t.trim()!=="")}async function Tb(e){try{const t=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return hb.some(i=>t===i)}catch(t){return console.error("Error while trying to get the Content-Type of the manifest",t),!1}}async function Ab(e){try{const t=await(await fetch(e)).text();let i=t;const a=bb(t);if(a.length>0){const r=new URL(a[0],e).toString();i=await(await fetch(r)).text()}return gb(yb(i))}catch(t){console.error("Error while trying to parse the manifest playlist",t);return}}var hs=new mb,Xt=new WeakSet,ye;pb(()=>{if(!globalThis.chrome?.cast?.isAvailable){console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable);return}ye||(ye=cast.framework,Oi().addEventListener(ye.CastContextEventType.CAST_STATE_CHANGED,e=>{hs.forEach(t=>Ui.get(t).onCastStateChanged?.(e))}),Oi().addEventListener(ye.CastContextEventType.SESSION_STATE_CHANGED,e=>{hs.forEach(t=>Ui.get(t).onSessionStateChanged?.(e))}),hs.forEach(e=>Ui.get(e).init?.()))});var vh=0,kb=class extends EventTarget{#t;#r;#i;#a;#e="disconnected";#n=!1;#o=new Set;#h=new WeakMap;#l=()=>this.#c();constructor(e){super(),this.#t=e,hs.add(this),Ui.set(this,{init:()=>this.#u(),onCastStateChanged:()=>this.#d(),onSessionStateChanged:()=>this.#v(),getCastPlayer:()=>this.#s}),this.#u()}destroy(){this.#t?.textTracks?.removeEventListener("change",this.#l),this.#a&&this.#i?.controller&&Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.removeEventListener(e,t)}),this.#t&&Xt.delete(this.#t),this.#r=!1}get#s(){if(Xt.has(this.#t))return this.#i}get state(){return this.#e}async watchAvailability(e){if(this.#t.disableRemotePlayback)throw new wl("disableRemotePlayback attribute is present.");return this.#h.set(e,++vh),this.#o.add(e),queueMicrotask(()=>e(this.#p())),vh}async cancelWatchAvailability(e){if(this.#t.disableRemotePlayback)throw new wl("disableRemotePlayback attribute is present.");e?this.#o.delete(e):this.#o.clear()}async prompt(){if(this.#t.disableRemotePlayback)throw new wl("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new cb("The RemotePlayback API is disabled on this platform.");const e=Xt.has(this.#t);Xt.add(this.#t),ph(this.#t.castOptions),Object.entries(this.#a).forEach(([t,i])=>{this.#i.controller.addEventListener(t,i)});try{await Oi().requestSession()}catch(t){if(e||Xt.delete(this.#t),t==="cancel")return;throw new Error(t)}Ui.get(this.#t)?.loadOnPrompt?.()}#m(){Xt.has(this.#t)&&(Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.removeEventListener(e,t)}),Xt.delete(this.#t),this.#t.muted=this.#i.isMuted,this.#t.currentTime=this.#i.savedPlayerState.currentTime,this.#i.savedPlayerState.isPaused===!1&&this.#t.play())}#p(){const e=Oi()?.getCastState();return e&&e!=="NO_DEVICES_AVAILABLE"}#d(){const e=Oi().getCastState();if(Xt.has(this.#t)&&e==="CONNECTING"&&(this.#e="connecting",this.dispatchEvent(new Event("connecting"))),!this.#n&&e?.includes("CONNECT")){this.#n=!0;for(let t of this.#o)t(!0)}else if(this.#n&&(!e||e==="NO_DEVICES_AVAILABLE")){this.#n=!1;for(let t of this.#o)t(!1)}}async#v(){const{SESSION_RESUMED:e}=ye.SessionState;if(Oi().getSessionState()===e&&this.#t.castSrc===Tu()?.media.contentId){Xt.add(this.#t),Object.entries(this.#a).forEach(([t,i])=>{this.#i.controller.addEventListener(t,i)});try{await _b(new chrome.cast.media.GetStatusRequest)}catch(t){console.error(t)}this.#a[ye.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#a[ye.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#u(){!ye||this.#r||(this.#r=!0,ph(this.#t.castOptions),this.#t.textTracks.addEventListener("change",this.#l),this.#d(),this.#i=new ye.RemotePlayer,new ye.RemotePlayerController(this.#i),this.#a={[ye.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{e===!0?(this.#e="connected",this.dispatchEvent(new Event("connect"))):(this.#m(),this.#e="disconnected",this.dispatchEvent(new Event("disconnect")))},[ye.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#t.dispatchEvent(new Event("durationchange"))},[ye.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#t.dispatchEvent(new Event("volumechange"))},[ye.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#t.dispatchEvent(new Event("volumechange"))},[ye.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#s?.isMediaLoaded&&this.#t.dispatchEvent(new Event("timeupdate"))},[ye.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#t.dispatchEvent(new Event("resize"))},[ye.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#t.dispatchEvent(new Event(this.paused?"pause":"play"))},[ye.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#s?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#t.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#s?.playerState]))},[ye.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#s?.isMediaLoaded&&(await Promise.resolve(),this.#f())}})}#f(){this.#c()}async#c(){if(!this.#s)return;const e=(this.#i.mediaInfo?.tracks??[]).filter(({type:l})=>l===chrome.cast.media.TrackType.TEXT),t=[...this.#t.textTracks].filter(({kind:l})=>l==="subtitles"||l==="captions"),i=e.map(({language:l,name:u,trackId:p})=>{const{mode:m}=t.find(d=>d.language===l&&d.label===u)??{};return m?{mode:m,trackId:p}:!1}).filter(Boolean),a=i.filter(({mode:l})=>l!=="showing").map(({trackId:l})=>l),r=i.find(({mode:l})=>l==="showing"),n=yu()?.getSessionObj().media[0]?.activeTrackIds??[];let s=n;if(n.length&&(s=s.filter(l=>!a.includes(l))),r?.trackId&&(s=[...s,r.trackId]),s=[...new Set(s)],!((l,u)=>l.length===u.length&&l.every(p=>u.includes(p)))(n,s))try{await Eb(new chrome.cast.media.EditTracksInfoRequest(s))}catch(l){console.error(l)}}},wb=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#t={paused:!1};#r=bp();#i;#a;get remote(){return this.#a?this.#a:vb()?this.isConnected?(this.disableRemotePlayback||fb(),Ui.set(this,{loadOnPrompt:()=>this.#n()}),this.#a=new kb(this)):void 0:super.remote}get#e(){return Ui.get(this.remote)?.getCastPlayer?.()}disconnectedCallback(){this.#a?.destroy(),this.#a=null,Ui.delete(this),super.disconnectedCallback?.()}attributeChangedCallback(i,a,r){if(super.attributeChangedCallback(i,a,r),i==="cast-receiver"&&r){this.#r.receiverApplicationId=r;return}if(this.#e)switch(i){case"cast-stream-type":case"cast-src":this.load();break}}async#n(){this.#t.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(i){console.error(i)}}async load(){if(!this.#e)return super.load();const i=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);i.customData=this.castCustomData;const a=[...this.querySelectorAll("track")].filter(({kind:o,src:l})=>l&&(o==="subtitles"||o==="captions")),r=[];let n=0;if(a.length&&(i.tracks=a.map(o=>{const l=++n;r.length===0&&o.track.mode==="showing"&&r.push(l);const u=new chrome.cast.media.Track(l,chrome.cast.media.TrackType.TEXT);return u.trackContentId=o.src,u.trackContentType="text/vtt",u.subtype=o.kind==="captions"?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,u.name=o.label,u.language=o.srclang,u})),this.castStreamType==="live"?i.streamType=chrome.cast.media.StreamType.LIVE:i.streamType=chrome.cast.media.StreamType.BUFFERED,i.metadata=new chrome.cast.media.GenericMediaMetadata,i.metadata.title=this.title,i.metadata.images=[{url:this.poster}],Tb(this.castSrc)){const o=await Ab(this.castSrc);o?.includes("m4s")||o?.includes("mp4")?(i.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,i.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):o?.includes("ts")&&(i.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,i.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.TS)}const s=new chrome.cast.media.LoadRequest(i);s.currentTime=super.currentTime??0,s.autoplay=!this.#t.paused,s.activeTrackIds=r,await yu()?.loadMedia(s),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#e){this.#e.isPaused&&this.#e.controller?.playOrPause();return}return super.play()}pause(){if(this.#e){this.#e.isPaused||this.#e.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#r}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(i){this.castReceiver!=i&&this.setAttribute("cast-receiver",`${i}`)}get castSrc(){return this.getAttribute("cast-src")??this.querySelector("source")?.src??this.currentSrc}set castSrc(i){this.castSrc!=i&&this.setAttribute("cast-src",`${i}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(i){this.setAttribute("cast-content-type",`${i}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(i){this.setAttribute("cast-stream-type",`${i}`)}get castCustomData(){return this.#i}set castCustomData(i){const a=typeof i;if(!["object","undefined"].includes(a)){console.error(`castCustomData must be nullish or an object but value was of type ${a}`);return}this.#i=i}get readyState(){if(this.#e)switch(this.#e.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#e?this.#e.isPaused:super.paused}get muted(){return this.#e?this.#e?.isMuted:super.muted}set muted(i){if(this.#e){(i&&!this.#e.isMuted||!i&&this.#e.isMuted)&&this.#e.controller?.muteOrUnmute();return}super.muted=i}get volume(){return this.#e?this.#e?.volumeLevel??1:super.volume}set volume(i){if(this.#e){this.#e.volumeLevel=+i,this.#e.controller?.setVolumeLevel();return}super.volume=i}get duration(){return this.#e&&this.#e?.isMediaLoaded?this.#e?.duration??NaN:super.duration}get currentTime(){return this.#e&&this.#e?.isMediaLoaded?this.#e?.currentTime??0:super.currentTime}set currentTime(i){if(this.#e){this.#e.currentTime=i,this.#e.controller?.seek();return}super.currentTime=i}},yp=e=>{throw TypeError(e)},Tp=(e,t,i)=>t.has(e)||yp("Cannot "+i),Ap=(e,t,i)=>(Tp(e,t,"read from private field"),i?i.call(e):t.get(e)),kp=(e,t,i)=>t.has(e)?yp("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),wp=(e,t,i,a)=>(Tp(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),jo=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class e extends jo{}globalThis.DocumentFragment=e}var Au=class extends jo{},Sb=class extends jo{},Ib={get(e){},define(e,t,i){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Au)}},ms,Rb=class{constructor(e,t={}){kp(this,ms),wp(this,ms,t?.detail)}get detail(){return Ap(this,ms)}initCustomEvent(){}};ms=new WeakMap;function Lb(e,t){return new Au}var Sp={document:{createElement:Lb},DocumentFragment,customElements:Ib,CustomEvent:Rb,EventTarget:jo,HTMLElement:Au,HTMLVideoElement:Sb},Ip=typeof window>"u"||typeof globalThis.customElements>"u",Sl=Ip?Sp:globalThis;Ip?Sp.document:globalThis.document;var ps,fh=class extends wb(Qf(ub)){constructor(){super(...arguments),kp(this,ps)}get autoplay(){let e=this.getAttribute("autoplay");return e===null?!1:e===""?!0:e}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay",typeof e=="string"?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return(e=Ap(this,ps))!=null?e:this.muxCastCustomData}set castCustomData(e){wp(this,ps,e)}};ps=new WeakMap;Sl.customElements.get("mux-video")||(Sl.customElements.define("mux-video",fh),Sl.MuxVideoElement=fh);var L={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},z={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},Rp={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},Lp=Object.entries(Rp),c=Lp.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),Qt=Lp.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"}),ek=Object.entries(Qt).reduce((e,[t,i])=>{const a=c[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"}),Cb=Object.entries(c).reduce((e,[t,i])=>{const a=Qt[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),Gt={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},Ja={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},Il={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},je={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},ni={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},Db={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};function Mb(e){return e?.map(Ob).join(" ")}function xb(e){return e?.split(/\s+/).map(Nb)}function Ob(e){if(e){const{id:t,width:i,height:a}=e;return[t,i,a].filter(r=>r!=null).join(":")}}function Nb(e){if(e){const[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function Pb(e){return e?.map($b).join(" ")}function Ub(e){return e?.split(/\s+/).map(Hb)}function $b(e){if(e){const{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(n=>n!=null).join(":")}}function Hb(e){if(e){const[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function Bb(e){return e.replace(/[-_]([a-z])/g,(t,i)=>i.toUpperCase())}function ku(e){return typeof e=="number"&&!Number.isNaN(e)&&Number.isFinite(e)}function Cp(e){return typeof e!="string"?!1:!isNaN(e)&&!isNaN(parseFloat(e))}var Dp=e=>new Promise(t=>setTimeout(t,e)),Wb={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."},Eh,Rl={en:Wb},ed=((Eh=globalThis.navigator)==null?void 0:Eh.language)||"en",Fb=e=>{ed=e},Kb=e=>{var t,i,a;const[r]=ed.split("-");return((t=Rl[ed])==null?void 0:t[e])||((i=Rl[r])==null?void 0:i[e])||((a=Rl.en)==null?void 0:a[e])||e},R=(e,t={})=>Kb(e).replace(/\{(\w+)\}/g,(i,a)=>a in t?String(t[a]):`{${a}}`),_h=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],Vb=(e,t)=>`${e} ${R(e===1?_h[t].singular:_h[t].plural)}`,ln=e=>{if(!ku(e))return"";const t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((n,s)=>n&&Vb(n,s)).filter(n=>n).join(", ");return i?R("{time} remaining",{time:r}):r};function $i(e,t){let i=!1;e<0&&(i=!0,e=0-e),e=e<0?0:e;let a=Math.floor(e%60),r=Math.floor(e/60%60),n=Math.floor(e/3600);const s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),n=n>0||o>0?n+":":"",r=((n||s>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+n+r+a}var tk=Object.freeze({length:0,start(e){const t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){const t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),Mp=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},xp=class extends Mp{},gh=class extends xp{constructor(){super(...arguments),this.role=null}},qb=class{observe(){}unobserve(){}disconnect(){}},Op={createElement:function(){return new yn.HTMLElement},createElementNS:function(){return new yn.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(e){return!1}},yn={ResizeObserver:qb,document:Op,Node:xp,Element:gh,HTMLElement:class extends gh{constructor(){super(...arguments),this.innerHTML=""}get content(){return new yn.DocumentFragment}},DocumentFragment:class extends Mp{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(e){return null},setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(e){return{matches:!1,media:e}},DOMParser:class{parseFromString(t,i){return{body:{textContent:t}}}}},Np="global"in globalThis&&globalThis?.global===globalThis||typeof window>"u"||typeof window.customElements>"u",Pp=Object.keys(yn).every(e=>e in globalThis),f=Np&&!Pp?yn:globalThis,ge=Np&&!Pp?Op:globalThis.document,bh=new WeakMap,wu=e=>{let t=bh.get(e);return t||bh.set(e,t=new Set),t},Up=new f.ResizeObserver(e=>{for(const t of e)for(const i of wu(t.target))i(t)});function lr(e,t){wu(e).add(t),Up.observe(e)}function dr(e,t){const i=wu(e);i.delete(t),i.size||Up.unobserve(e)}function tt(e){const t={};for(const i of e)t[i.name]=i.value;return t}function qe(e){var t;return(t=td(e))!=null?t:pr(e,"media-controller")}function td(e){var t;const{MEDIA_CONTROLLER:i}=z,a=e.getAttribute(i);if(a)return(t=Xo(e))==null?void 0:t.getElementById(a)}var $p=(e,t,i=".value")=>{const a=e.querySelector(i);a&&(a.textContent=t)},Yb=(e,t)=>{const i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},Hp=(e,t)=>Yb(e,t)[0],vi=(e,t)=>!e||!t?!1:e?.contains(t)?!0:vi(e,t.getRootNode().host),pr=(e,t)=>{if(!e)return null;const i=e.closest(t);return i||pr(e.getRootNode().host,t)};function Su(e=document){var t;const i=e?.activeElement;return i?(t=Su(i.shadowRoot))!=null?t:i:null}function Xo(e){var t;const i=(t=e?.getRootNode)==null?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function Bp(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){const n=getComputedStyle(r);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,t--}return!0}function Gb(e,t,i,a){const r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;if(s===0)return 0;const o=((e-i.x)*r+(t-i.y)*n)/s;return Math.max(0,Math.min(1,o))}function Ae(e,t){const i=zb(e,a=>a===t);return i||Iu(e,t)}function zb(e,t){var i,a;let r;for(r of(i=e.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const s of n??[])if(t(s.selectorText))return s}}function Iu(e,t){var i,a;const r=(i=e.querySelectorAll("style:not([media])"))!=null?i:[],n=r?.[r.length-1];if(!n?.sheet)return console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};const s=n?.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length);return(a=n.sheet.cssRules)==null?void 0:a[s]}function ie(e,t,i=NaN){const a=e.getAttribute(t);return a!=null?+a:i}function ce(e,t,i){const a=+i;if(i==null||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}ie(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function K(e,t){return e.hasAttribute(t)}function V(e,t,i){if(i==null){e.hasAttribute(t)&&e.removeAttribute(t);return}K(e,t)!=i&&e.toggleAttribute(t,i)}function oe(e,t,i=null){var a;return(a=e.getAttribute(t))!=null?a:i}function ae(e,t,i){if(i==null){e.hasAttribute(t)&&e.removeAttribute(t);return}const a=`${i}`;oe(e,t,void 0)!==a&&e.setAttribute(t,a)}var Wp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},pt=(e,t,i)=>(Wp(e,t,"read from private field"),i?i.call(e):t.get(e)),Qb=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},$n=(e,t,i,a)=>(Wp(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),xe;function Zb(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}var Jo=class extends f.HTMLElement{constructor(){if(super(),Qb(this,xe,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[z.MEDIA_CONTROLLER,c.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===z.MEDIA_CONTROLLER&&(t&&((r=(a=pt(this,xe))==null?void 0:a.unassociateElement)==null||r.call(a,this),$n(this,xe,null)),i&&this.isConnected&&($n(this,xe,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(o=(s=pt(this,xe))==null?void 0:s.associateElement)==null||o.call(s,this)))}connectedCallback(){var e,t;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),$n(this,xe,jb(this)),this.getAttribute(z.MEDIA_CONTROLLER)&&((t=(e=pt(this,xe))==null?void 0:e.associateElement)==null||t.call(e,this)),pt(this,xe)&&(pt(this,xe).addEventListener("pointerdown",this),pt(this,xe).addEventListener("click",this),pt(this,xe).hasAttribute("tabindex")||(pt(this,xe).tabIndex=0))}disconnectedCallback(){var e,t,i,a;this.getAttribute(z.MEDIA_CONTROLLER)&&((t=(e=pt(this,xe))==null?void 0:e.unassociateElement)==null||t.call(e,this)),(i=pt(this,xe))==null||i.removeEventListener("pointerdown",this),(a=pt(this,xe))==null||a.removeEventListener("click",this),$n(this,xe,null)}handleEvent(e){var t;const i=(t=e.composedPath())==null?void 0:t[0];if(["video","media-controller"].includes(i?.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:a,clientY:r}=e,{left:n,top:s,width:o,height:l}=this.getBoundingClientRect(),u=a-n,p=r-s;if(u<0||p<0||u>o||p>l||o===0&&l===0)return;const m=this._pointerType||"mouse";if(this._pointerType=void 0,m===Il.TOUCH){this.handleTap(e);return}else if(m===Il.MOUSE||m===Il.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return K(this,c.MEDIA_PAUSED)}set mediaPaused(e){V(this,c.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const t=this.mediaPaused?L.MEDIA_PLAY_REQUEST:L.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new f.CustomEvent(t,{composed:!0,bubbles:!0}))}};xe=new WeakMap;Jo.shadowRootOptions={mode:"open"};Jo.getTemplateHTML=Zb;function jb(e){var t;const i=e.getAttribute(z.MEDIA_CONTROLLER);return i?(t=e.getRootNode())==null?void 0:t.getElementById(i):pr(e,"media-controller")}f.customElements.get("media-gesture-receiver")||f.customElements.define("media-gesture-receiver",Jo);var yh=Jo,Ru=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},he=(e,t,i)=>(Ru(e,t,"read from private field"),i?i.call(e):t.get(e)),We=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Et=(e,t,i,a)=>(Ru(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),wt=(e,t,i)=>(Ru(e,t,"access private method"),i),Hr,go,ka,ur,Ga,id,wa,vs,ad,Fp,rd,Kp,Tn,el,tl,Lu,cr,An,gi,fs,O={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function Xb(e){return`
    <style>
      
      :host([${c.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${O.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${O.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${O.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${O.AUDIO}])[${O.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${O.AUDIO}])[${O.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${O.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${O.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${O.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${O.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${O.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${O.USER_INACTIVE}]:not([${c.MEDIA_PAUSED}]):not([${c.MEDIA_IS_AIRPLAYING}]):not([${c.MEDIA_IS_CASTING}]):not([${O.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${O.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${O.USER_INACTIVE}]:not([${O.NO_AUTOHIDE}]):not([${c.MEDIA_PAUSED}]):not([${c.MEDIA_IS_CASTING}]):not([${O.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${O.USER_INACTIVE}][${O.AUTOHIDE_OVER_CONTROLS}]:not([${O.NO_AUTOHIDE}]):not([${c.MEDIA_PAUSED}]):not([${c.MEDIA_IS_CASTING}]):not([${O.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${O.AUDIO}])[${c.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${yh.shadowRootOptions.mode}">
          ${yh.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}var Jb=Object.values(c),e0="sm:384 md:576 lg:768 xl:960";function t0(e){Vp(e.target,e.contentRect.width)}function Vp(e,t){var i;if(!e.isConnected)return;const a=i0((i=e.getAttribute(O.BREAKPOINTS))!=null?i:e0),r=a0(a,t);let n=!1;if(Object.keys(a).forEach(s=>{if(r.includes(s)){e.hasAttribute(`breakpoint${s}`)||(e.setAttribute(`breakpoint${s}`,""),n=!0);return}e.hasAttribute(`breakpoint${s}`)&&(e.removeAttribute(`breakpoint${s}`),n=!0)}),n){const s=new CustomEvent(Qt.BREAKPOINTS_CHANGE,{detail:r});e.dispatchEvent(s)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(Qt.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function i0(e){const t=e.split(/\s+/);return Object.fromEntries(t.map(i=>i.split(":")))}function a0(e,t){return Object.keys(e).filter(i=>t>=parseInt(e[i]))}var il=class extends f.HTMLElement{constructor(){if(super(),We(this,ad),We(this,rd),We(this,Tn),We(this,tl),We(this,cr),We(this,Hr,void 0),We(this,go,0),We(this,ka,null),We(this,ur,null),We(this,Ga,void 0),this.breakpointsComputed=!1,We(this,id,e=>{const t=this.media;for(const i of e){if(i.type!=="childList")continue;const a=i.removedNodes;for(const r of a){if(r.slot!="media"||i.target!=this)continue;let n=i.previousSibling&&i.previousSibling.previousElementSibling;if(!n||!t)this.mediaUnsetCallback(r);else{let s=n.slot!=="media";for(;(n=n.previousSibling)!==null;)n.slot=="media"&&(s=!1);s&&this.mediaUnsetCallback(r)}}if(t)for(const r of i.addedNodes)r===t&&this.handleMediaUpdated(t)}}),We(this,wa,!1),We(this,vs,e=>{he(this,wa)||(setTimeout(()=>{t0(e),Et(this,wa,!1)},0),Et(this,wa,!0))}),We(this,gi,void 0),We(this,fs,()=>{if(!he(this,gi).assignedElements({flatten:!0}).length){he(this,ka)&&this.mediaUnsetCallback(he(this,ka));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tt(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}Et(this,Hr,new MutationObserver(he(this,id)))}static get observedAttributes(){return[O.AUTOHIDE,O.GESTURES_DISABLED].concat(Jb).filter(e=>![c.MEDIA_RENDITION_LIST,c.MEDIA_AUDIO_TRACK_LIST,c.MEDIA_CHAPTERS_CUES,c.MEDIA_WIDTH,c.MEDIA_HEIGHT,c.MEDIA_ERROR,c.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==O.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return e?.nodeName=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(Et(this,ka,e),e.localName.includes("-")&&await f.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;he(this,Hr).observe(this,{childList:!0,subtree:!0}),lr(this,he(this,vs));const t=this.getAttribute(O.AUDIO)!=null?R("audio player"):R("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(O.USER_INACTIVE,""),Vp(this,this.getBoundingClientRect().width);const i=this.querySelector(":scope > slot[slot=media]");i&&(Et(this,gi,i),he(this,gi).addEventListener("slotchange",he(this,fs))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=f.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;dr(this,he(this,vs)),clearTimeout(he(this,ur)),he(this,Hr).disconnect(),this.media&&this.mediaUnsetCallback(this.media),(e=f.window)==null||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),he(this,gi)&&(he(this,gi).removeEventListener("slotchange",he(this,fs)),Et(this,gi,null)),Et(this,wa,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){Et(this,ka,null)}handleEvent(e){switch(e.type){case"pointerdown":Et(this,go,e.timeStamp);break;case"pointermove":wt(this,ad,Fp).call(this,e);break;case"pointerup":wt(this,rd,Kp).call(this,e);break;case"mouseleave":wt(this,Tn,el).call(this);break;case"mouseup":this.removeAttribute(O.KEYBOARD_CONTROL);break;case"keyup":wt(this,cr,An).call(this),this.setAttribute(O.KEYBOARD_CONTROL,"");break}}set autohide(e){const t=Number(e);Et(this,Ga,isNaN(t)?0:t)}get autohide(){return(he(this,Ga)===void 0?2:he(this,Ga)).toString()}get breakpoints(){return oe(this,O.BREAKPOINTS)}set breakpoints(e){ae(this,O.BREAKPOINTS,e)}get audio(){return K(this,O.AUDIO)}set audio(e){V(this,O.AUDIO,e)}get gesturesDisabled(){return K(this,O.GESTURES_DISABLED)}set gesturesDisabled(e){V(this,O.GESTURES_DISABLED,e)}get keyboardControl(){return K(this,O.KEYBOARD_CONTROL)}set keyboardControl(e){V(this,O.KEYBOARD_CONTROL,e)}get noAutohide(){return K(this,O.NO_AUTOHIDE)}set noAutohide(e){V(this,O.NO_AUTOHIDE,e)}get autohideOverControls(){return K(this,O.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){V(this,O.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return K(this,O.USER_INACTIVE)}set userInteractive(e){V(this,O.USER_INACTIVE,e)}};Hr=new WeakMap;go=new WeakMap;ka=new WeakMap;ur=new WeakMap;Ga=new WeakMap;id=new WeakMap;wa=new WeakMap;vs=new WeakMap;ad=new WeakSet;Fp=function(e){if(e.pointerType!=="mouse"&&e.timeStamp-he(this,go)<250)return;wt(this,tl,Lu).call(this),clearTimeout(he(this,ur));const t=this.hasAttribute(O.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&wt(this,cr,An).call(this)};rd=new WeakSet;Kp=function(e){if(e.pointerType==="touch"){const t=!this.hasAttribute(O.USER_INACTIVE);[this,this.media].includes(e.target)&&t?wt(this,Tn,el).call(this):wt(this,cr,An).call(this)}else e.composedPath().some(t=>["media-play-button","media-fullscreen-button"].includes(t?.localName))&&wt(this,cr,An).call(this)};Tn=new WeakSet;el=function(){if(he(this,Ga)<0||this.hasAttribute(O.USER_INACTIVE))return;this.setAttribute(O.USER_INACTIVE,"");const e=new f.CustomEvent(Qt.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)};tl=new WeakSet;Lu=function(){if(!this.hasAttribute(O.USER_INACTIVE))return;this.removeAttribute(O.USER_INACTIVE);const e=new f.CustomEvent(Qt.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)};cr=new WeakSet;An=function(){wt(this,tl,Lu).call(this),clearTimeout(he(this,ur));const e=parseInt(this.autohide);e<0||Et(this,ur,setTimeout(()=>{wt(this,Tn,el).call(this)},e*1e3))};gi=new WeakMap;fs=new WeakMap;il.shadowRootOptions={mode:"open"};il.getTemplateHTML=Xb;f.customElements.get("media-container")||f.customElements.define("media-container",il);var qp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Re=(e,t,i)=>(qp(e,t,"read from private field"),i?i.call(e):t.get(e)),Tr=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Hn=(e,t,i,a)=>(qp(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Sa,Ia,bo,aa,ti,bi,Cu=class{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){Tr(this,ti),Tr(this,Sa,void 0),Tr(this,Ia,void 0),Tr(this,bo,void 0),Tr(this,aa,new Set),Hn(this,Sa,e),Hn(this,Ia,t),Hn(this,bo,new Set(i))}[Symbol.iterator](){return Re(this,ti,bi).values()}get length(){return Re(this,ti,bi).size}get value(){var e;return(e=[...Re(this,ti,bi)].join(" "))!=null?e:""}set value(e){var t;e!==this.value&&(Hn(this,aa,new Set),this.add(...(t=e?.split(" "))!=null?t:[]))}toString(){return this.value}item(e){return[...Re(this,ti,bi)][e]}values(){return Re(this,ti,bi).values()}forEach(e,t){Re(this,ti,bi).forEach(e,t)}add(...e){var t,i;e.forEach(a=>Re(this,aa).add(a)),!(this.value===""&&!((t=Re(this,Sa))!=null&&t.hasAttribute(`${Re(this,Ia)}`)))&&((i=Re(this,Sa))==null||i.setAttribute(`${Re(this,Ia)}`,`${this.value}`))}remove(...e){var t;e.forEach(i=>Re(this,aa).delete(i)),(t=Re(this,Sa))==null||t.setAttribute(`${Re(this,Ia)}`,`${this.value}`)}contains(e){return Re(this,ti,bi).has(e)}toggle(e,t){return typeof t<"u"?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}};Sa=new WeakMap;Ia=new WeakMap;bo=new WeakMap;aa=new WeakMap;ti=new WeakSet;bi=function(){return Re(this,aa).size?Re(this,aa):Re(this,bo)};var r0=(e="")=>e.split(/\s+/),Yp=(e="")=>{const[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:t==="cc"?Gt.CAPTIONS:Gt.SUBTITLES,language:i,label:r}},al=(e="",t={})=>r0(e).map(i=>{const a=Yp(i);return{...t,...a}}),Gp=e=>e?Array.isArray(e)?e.map(t=>typeof t=="string"?Yp(t):t):typeof e=="string"?al(e):[e]:[],nd=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${e==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,kn=(e=[])=>Array.prototype.map.call(e,nd).join(" "),n0=(e,t)=>i=>i[e]===t,zp=e=>{const t=Object.entries(e).map(([i,a])=>n0(i,a));return i=>t.every(a=>a(i))},dn=(e,t=[],i=[])=>{const a=Gp(i).map(zp),r=n=>a.some(s=>s(n));Array.from(t).filter(r).forEach(n=>{n.mode=e})},rl=(e,t=()=>!0)=>{if(!e?.textTracks)return[];const i=typeof t=="function"?t:zp(t);return Array.from(e.textTracks).filter(i)},Qp=e=>{var t;return!!((t=e.mediaSubtitlesShowing)!=null&&t.length)||e.hasAttribute(c.MEDIA_SUBTITLES_SHOWING)},s0=e=>{var t;const{media:i,fullscreenElement:a}=e;try{const r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const n=(t=a[r])==null?void 0:t.call(a);if(n instanceof Promise)return n.catch(()=>{})}else i?.webkitEnterFullscreen?i.webkitEnterFullscreen():i?.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},Th="exitFullscreen"in ge?"exitFullscreen":"webkitExitFullscreen"in ge?"webkitExitFullscreen":"webkitCancelFullScreen"in ge?"webkitCancelFullScreen":void 0,o0=e=>{var t;const{documentElement:i}=e;if(Th){const a=(t=i?.[Th])==null?void 0:t.call(i);if(a instanceof Promise)return a.catch(()=>{})}},Br="fullscreenElement"in ge?"fullscreenElement":"webkitFullscreenElement"in ge?"webkitFullscreenElement":void 0,l0=e=>{const{documentElement:t,media:i}=e,a=t?.[Br];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===Db.FULLSCREEN?i:a},d0=e=>{var t;const{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;const n=l0(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let s=n.shadowRoot;if(!(Br in s))return vi(n,r);for(;s?.[Br];){if(s[Br]===r)return!0;s=(t=s[Br])==null?void 0:t.shadowRoot}}return!1},u0="fullscreenEnabled"in ge?"fullscreenEnabled":"webkitFullscreenEnabled"in ge?"webkitFullscreenEnabled":void 0,c0=e=>{const{documentElement:t,media:i}=e;return!!t?.[u0]||i&&"webkitSupportsFullscreen"in i},Bn,Du=()=>{var e,t;return Bn||(Bn=(t=(e=ge)==null?void 0:e.createElement)==null?void 0:t.call(e,"video"),Bn)},h0=async(e=Du())=>{if(!e)return!1;const t=e.volume;e.volume=t/2+.1;const i=new AbortController,a=await Promise.race([m0(e,i.signal),p0(e,t)]);return i.abort(),a},m0=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),p0=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await Dp(10)}return e.volume!==t},v0=/.*Version\/.*Safari\/.*/.test(f.navigator.userAgent),Zp=(e=Du())=>f.matchMedia("(display-mode: standalone)").matches&&v0?!1:typeof e?.requestPictureInPicture=="function",jp=(e=Du())=>c0({documentElement:ge,media:e}),f0=jp(),E0=Zp(),_0=!!f.WebKitPlaybackTargetAvailabilityEvent,g0=!!f.chrome,yo=e=>rl(e.media,t=>[Gt.SUBTITLES,Gt.CAPTIONS].includes(t.kind)).sort((t,i)=>t.kind>=i.kind?1:-1),Xp=e=>rl(e.media,t=>t.mode===Ja.SHOWING&&[Gt.SUBTITLES,Gt.CAPTIONS].includes(t.kind)),Jp=(e,t)=>{const i=yo(e),a=Xp(e),r=!!a.length;if(i.length){if(t===!1||r&&t!==!0)dn(Ja.DISABLED,i,a);else if(t===!0||!r&&t!==!1){let n=i[0];const{options:s}=e;if(!s?.noSubtitlesLangPref){const p=f.localStorage.getItem("media-chrome-pref-subtitles-lang"),m=p?[p,...f.navigator.languages]:f.navigator.languages,d=i.filter(h=>m.some(v=>h.language.toLowerCase().startsWith(v.split("-")[0]))).sort((h,v)=>m.findIndex(T=>h.language.toLowerCase().startsWith(T.split("-")[0]))-m.findIndex(T=>v.language.toLowerCase().startsWith(T.split("-")[0])));d[0]&&(n=d[0])}const{language:o,label:l,kind:u}=n;dn(Ja.DISABLED,i,a),dn(Ja.SHOWING,i,[{language:o,label:l,kind:u}])}}},Mu=(e,t)=>e===t?!0:e==null||t==null||typeof e!=typeof t?!1:typeof e=="number"&&Number.isNaN(e)&&Number.isNaN(t)?!0:typeof e!="object"?!1:Array.isArray(e)?b0(e,t):Object.entries(e).every(([i,a])=>i in t&&Mu(a,t[i])),b0=(e,t)=>{const i=Array.isArray(e),a=Array.isArray(t);return i!==a?!1:i||a?e.length!==t.length?!1:e.every((r,n)=>Mu(r,t[n])):!0},y0=Object.values(ni),To,T0=h0().then(e=>(To=e,To)),A0=async(...e)=>{await Promise.all(e.filter(t=>t).map(async t=>{if(!("localName"in t&&t instanceof f.HTMLElement))return;const i=t.localName;if(!i.includes("-"))return;const a=f.customElements.get(i);a&&t instanceof a||(await f.customElements.whenDefined(i),f.customElements.upgrade(t))}))},k0=new f.DOMParser,w0=e=>e&&(k0.parseFromString(e,"text/html").body.textContent||e),Wr={mediaError:{get(e,t){const{media:i}=e;if(t?.type!=="playing")return i?.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;const{media:a}=e;if(t?.type!=="playing")return(i=a?.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;const{media:r}=e;if(t?.type!=="playing")return(a=(i=r?.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;const{media:i}=e;return(t=i?.videoWidth)!=null?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;const{media:i}=e;return(t=i?.videoHeight)!=null?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;const{media:i}=e;return(t=i?.paused)!=null?t:!0},set(e,t){var i;const{media:a}=t;a&&(e?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){const{media:i}=e;return i?t?t.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;const{media:i}=e;return(t=i?.ended)!=null?t:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;const{media:i}=e;return(t=i?.playbackRate)!=null?t:1},set(e,t){const{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;const{media:i}=e;return(t=i?.muted)!=null?t:!1},set(e,t){const{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{const r=f.localStorage.getItem("media-chrome-pref-muted")!==null,n=i.hasAttribute("muted");if(a){r&&f.localStorage.removeItem("media-chrome-pref-muted");return}if(n&&!r)return;f.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(r){console.debug("Error setting muted pref",r)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{const{options:{noMutedPref:i}}=t,{media:a}=t;if(!(!a||a.muted||i))try{const r=f.localStorage.getItem("media-chrome-pref-muted")==="true";Wr.mediaMuted.set(r,t),e(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaLoop:{get(e){const{media:t}=e;return t?.loop},set(e,t){const{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;const{media:i}=e;return(t=i?.volume)!=null?t:1},set(e,t){const{media:i,options:{noVolumePref:a}={}}=t;if(i){try{e==null?f.localStorage.removeItem("media-chrome-pref-volume"):!i.hasAttribute("muted")&&!a&&f.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(r){console.debug("Error setting volume pref",r)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{const{options:{noVolumePref:i}}=t;if(!i)try{const{media:a}=t;if(!a)return;const r=f.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;Wr.mediaVolume.set(+r,t),e(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(e){const{media:t}=e;return typeof t?.volume>"u"?"high":t.muted||t.volume===0?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;const{media:i}=e;return(t=i?.currentTime)!=null?t:0},set(e,t){const{media:i}=t;!i||!ku(e)||(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){const{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(t?.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){const{media:t}=e;return t?.readyState<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;const{media:i}=e;if(!((t=i?.seekable)!=null&&t.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;const{media:i}=e,a=(t=i?.buffered)!=null?t:[];return Array.from(a).map((r,n)=>[Number(a.start(n).toFixed(3)),Number(a.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){const{media:t,options:{defaultStreamType:i}={}}=e,a=[ni.LIVE,ni.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;const{streamType:r}=t;if(y0.includes(r))return r===ni.UNKNOWN?a:r;const n=t.duration;return n===1/0?ni.LIVE:Number.isFinite(n)?ni.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){const{media:t}=e;if(!t)return NaN;const{targetLiveWindow:i}=t,a=Wr.mediaStreamType.get(e);return(i==null||Number.isNaN(i))&&a===ni.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){const{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if(typeof t.liveEdgeStart=="number")return Number.isNaN(t.liveEdgeStart)?!1:t.currentTime>=t.liveEdgeStart;if(Wr.mediaStreamType.get(e)!==ni.LIVE)return!1;const a=t.seekable;if(!a)return!0;if(!a.length)return!1;const r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(e){return yo(e).map(({kind:t,label:i,language:a})=>({kind:t,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(e){return Xp(e).map(({kind:t,label:i,language:a})=>({kind:t,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;const{media:r,options:n}=t;if(!r)return;const s=o=>{var l;n.defaultSubtitles&&(o&&![Gt.CAPTIONS,Gt.SUBTITLES].includes((l=o?.track)==null?void 0:l.kind)||Jp(t,!0))};return r.addEventListener("loadstart",s),(i=r.textTracks)==null||i.addEventListener("addtrack",s),(a=r.textTracks)==null||a.addEventListener("removetrack",s),()=>{var o,l;r.removeEventListener("loadstart",s),(o=r.textTracks)==null||o.removeEventListener("addtrack",s),(l=r.textTracks)==null||l.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;const{media:i}=e;if(!i)return[];const[a]=rl(i,{kind:Gt.CHAPTERS});return Array.from((t=a?.cues)!=null?t:[]).map(({text:r,startTime:n,endTime:s})=>({text:w0(r),startTime:n,endTime:s}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),n=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r?.addEventListener("load",e),n?.addEventListener("load",e),()=>{r?.removeEventListener("load",e),n?.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;const{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(t=a.localName)!=null&&t.includes("-")?vi(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let n=r.pictureInPictureElement.shadowRoot;for(;n?.pictureInPictureElement;){if(n.pictureInPictureElement===a)return!0;n=(i=n.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(e,t){const{media:i}=t;if(i)if(e){if(!ge.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const n=()=>{i.removeEventListener("loadedmetadata",s),i.preload="none"},s=()=>{i.requestPictureInPicture().catch(a),n()};i.addEventListener("loadedmetadata",s),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),n()},1e3)}else throw r}else throw r})}else ge.pictureInPictureElement&&ge.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;const{media:i}=e;return[...(t=i?.videoRenditions)!=null?t:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;const{media:r}=e;return(a=(i=r?.videoRenditions)==null?void 0:i[(t=r.videoRenditions)==null?void 0:t.selectedIndex])==null?void 0:a.id},set(e,t){const{media:i}=t;if(!i?.videoRenditions){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=e,r=Array.prototype.findIndex.call(i.videoRenditions,n=>n.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;const{media:i}=e;return[...(t=i?.audioTracks)!=null?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;const{media:a}=e;return(i=[...(t=a?.audioTracks)!=null?t:[]].find(r=>r.enabled))==null?void 0:i.id},set(e,t){const{media:i}=t;if(!i?.audioTracks){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=e;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(e){return d0(e)},set(e,t,i){var a,r;e?(s0(t),i.detail&&!((a=t.media)!=null&&a.inert)&&((r=t.media)==null||r.focus())):o0(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;const{media:i}=e;return!i?.remote||((t=i.remote)==null?void 0:t.state)==="disconnected"?!1:!!i.remote.state},set(e,t){var i,a;const{media:r}=t;if(r&&!(e&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!e&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(e,t){const{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&f.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){const{media:t}=e;if(!f0||!jp(t))return je.UNSUPPORTED}},mediaPipUnavailable:{get(e){const{media:t}=e;if(!E0||!Zp(t))return je.UNSUPPORTED;if(t?.disablePictureInPicture)return je.UNAVAILABLE}},mediaVolumeUnavailable:{get(e){const{media:t}=e;if(To===!1||t?.volume==null)return je.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{To==null&&T0.then(t=>e(t?void 0:je.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;const{media:a}=e;if(!g0||!((i=a?.remote)!=null&&i.state))return je.UNSUPPORTED;if(!(t==null||t==="available"))return je.UNAVAILABLE},stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(r=>{e({availability:r?"available":"not-available"})}).catch(r=>{r.name==="NotSupportedError"?e({availability:null}):e({availability:"not-available"})}),()=>{var r;(r=a?.remote)==null||r.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get(e,t){if(!_0)return je.UNSUPPORTED;if(t?.availability==="not-available")return je.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(r=>{e({availability:r?"available":"not-available"})}).catch(r=>{r.name==="NotSupportedError"?e({availability:null}):e({availability:"not-available"})}),()=>{var r;(r=a?.remote)==null||r.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;const{media:i}=e;if(!i?.videoRenditions)return je.UNSUPPORTED;if(!((t=i.videoRenditions)!=null&&t.length))return je.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;const{media:a}=e;if(!a?.audioTracks)return je.UNSUPPORTED;if(((i=(t=a.audioTracks)==null?void 0:t.length)!=null?i:0)<=1)return je.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){const{options:{mediaLang:t}={}}=e;return t??"en"}}},S0={[L.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;const{media:s}=t,o=i??void 0;let l,u;if(s&&o!=null){const[d]=rl(s,{kind:Gt.METADATA,label:"thumbnails"}),h=Array.prototype.find.call((a=d?.cues)!=null?a:[],(v,T,b)=>T===0?v.endTime>o:T===b.length-1?v.startTime<=o:v.startTime<=o&&v.endTime>o);if(h){const v=/'^(?:[a-z]+:)?\/\//i.test(h.text)||(r=s?.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,T=new URL(h.text,v);u=new URLSearchParams(T.hash).get("#xywh").split(",").map(b=>+b),l=T.href}}const p=e.mediaDuration.get(t);let m=(n=e.mediaChaptersCues.get(t).find((d,h,v)=>h===v.length-1&&p===d.endTime?d.startTime<=o&&d.endTime>=o:d.startTime<=o&&d.endTime>o))==null?void 0:n.text;return i!=null&&m==null&&(m=""),{mediaPreviewTime:o,mediaPreviewImage:l,mediaPreviewCoords:u,mediaPreviewChapter:m}},[L.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[L.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;const s="mediaPaused",l=e.mediaStreamType.get(t)===ni.LIVE,u=!((i=t.options)!=null&&i.noAutoSeekToLive),p=e.mediaTargetLiveWindow.get(t)>0;if(l&&u&&!p){const m=(a=e.mediaSeekable.get(t))==null?void 0:a[1];if(m){const d=m-((n=(r=t.options)==null?void 0:r.seekToLiveOffset)!=null?n:0);e.mediaCurrentTime.set(d,t)}}e[s].set(!1,t)},[L.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){const a="mediaPlaybackRate",r=i;e[a].set(r,t)},[L.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[L.MEDIA_UNMUTE_REQUEST](e,t){const i="mediaMuted";e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e[i].set(!1,t)},[L.MEDIA_LOOP_REQUEST](e,t,{detail:i}){const a="mediaLoop",r=!!i;return e[a].set(r,t),{mediaLoop:r}},[L.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){const a="mediaVolume",r=i;r&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e[a].set(r,t)},[L.MEDIA_SEEK_REQUEST](e,t,{detail:i}){const a="mediaCurrentTime",r=i;e[a].set(r,t)},[L.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;const n="mediaCurrentTime",s=(i=e.mediaSeekable.get(t))==null?void 0:i[1];if(Number.isNaN(Number(s)))return;const o=s-((r=(a=t.options)==null?void 0:a.seekToLiveOffset)!=null?r:0);e[n].set(o,t)},[L.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;const{options:r}=t,n=yo(t),s=Gp(i),o=(a=s[0])==null?void 0:a.language;o&&!r.noSubtitlesLangPref&&f.localStorage.setItem("media-chrome-pref-subtitles-lang",o),dn(Ja.SHOWING,n,s)},[L.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){const a=yo(t),r=i??[];dn(Ja.DISABLED,a,r)},[L.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){Jp(t,i)},[L.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){const a="mediaRenditionSelected",r=i;e[a].set(r,t)},[L.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){const a="mediaAudioTrackEnabled",r=i;e[a].set(r,t)},[L.MEDIA_ENTER_PIP_REQUEST](e,t){const i="mediaIsPip";e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e[i].set(!0,t)},[L.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[L.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){const a="mediaIsFullscreen";e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e[a].set(!0,t,i)},[L.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[L.MEDIA_ENTER_CAST_REQUEST](e,t){const i="mediaIsCasting";e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e[i].set(!0,t)},[L.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[L.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}},I0=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=Wr,requestMap:r=S0,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{const o=[],l={options:{...n}};let u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const p=T=>{T!=null&&(Mu(T,u)||(u=Object.freeze({...u,...T}),o.forEach(b=>b(u))))},m=()=>{p(Object.entries(a).reduce((T,[b,{get:_}])=>(T[b]=_(l),T),{}))},d={};let h;const v=async(T,b)=>{var _,y,g,S,C,N,$,q,Y,U,le,Pe,Ge,ze,ve,$e;const It=!!h;if(h={...l,...h??{},...T},It)return;await A0(...Object.values(T));const He=o.length>0&&b===0&&s,Qe=l.media!==h.media,we=((_=l.media)==null?void 0:_.textTracks)!==((y=h.media)==null?void 0:y.textTracks),jt=((g=l.media)==null?void 0:g.videoRenditions)!==((S=h.media)==null?void 0:S.videoRenditions),Ue=((C=l.media)==null?void 0:C.audioTracks)!==((N=h.media)==null?void 0:N.audioTracks),Be=(($=l.media)==null?void 0:$.remote)!==((q=h.media)==null?void 0:q.remote),pa=l.documentElement!==h.documentElement,Pc=!!l.media&&(Qe||He),Uc=!!((Y=l.media)!=null&&Y.textTracks)&&(we||He),$c=!!((U=l.media)!=null&&U.videoRenditions)&&(jt||He),Hc=!!((le=l.media)!=null&&le.audioTracks)&&(Ue||He),Bc=!!((Pe=l.media)!=null&&Pe.remote)&&(Be||He),Wc=!!l.documentElement&&(pa||He),fl=Pc||Uc||$c||Hc||Bc||Wc,va=o.length===0&&b===1&&s,Fc=!!h.media&&(Qe||va),Kc=!!((Ge=h.media)!=null&&Ge.textTracks)&&(we||va),Vc=!!((ze=h.media)!=null&&ze.videoRenditions)&&(jt||va),qc=!!((ve=h.media)!=null&&ve.audioTracks)&&(Ue||va),Yc=!!(($e=h.media)!=null&&$e.remote)&&(Be||va),Gc=!!h.documentElement&&(pa||va),zc=Fc||Kc||Vc||qc||Yc||Gc;if(!(fl||zc)){Object.entries(h).forEach(([j,gr])=>{l[j]=gr}),m(),h=void 0;return}Object.entries(a).forEach(([j,{get:gr,mediaEvents:$f=[],textTracksEvents:Hf=[],videoRenditionsEvents:Bf=[],audioTracksEvents:Wf=[],remoteEvents:Ff=[],rootEvents:Kf=[],stateOwnersUpdateHandlers:Vf=[]}])=>{d[j]||(d[j]={});const Ze=te=>{const De=gr(l,te);p({[j]:De})};let Se;Se=d[j].mediaEvents,$f.forEach(te=>{Se&&Pc&&(l.media.removeEventListener(te,Se),d[j].mediaEvents=void 0),Fc&&(h.media.addEventListener(te,Ze),d[j].mediaEvents=Ze)}),Se=d[j].textTracksEvents,Hf.forEach(te=>{var De,mt;Se&&Uc&&((De=l.media.textTracks)==null||De.removeEventListener(te,Se),d[j].textTracksEvents=void 0),Kc&&((mt=h.media.textTracks)==null||mt.addEventListener(te,Ze),d[j].textTracksEvents=Ze)}),Se=d[j].videoRenditionsEvents,Bf.forEach(te=>{var De,mt;Se&&$c&&((De=l.media.videoRenditions)==null||De.removeEventListener(te,Se),d[j].videoRenditionsEvents=void 0),Vc&&((mt=h.media.videoRenditions)==null||mt.addEventListener(te,Ze),d[j].videoRenditionsEvents=Ze)}),Se=d[j].audioTracksEvents,Wf.forEach(te=>{var De,mt;Se&&Hc&&((De=l.media.audioTracks)==null||De.removeEventListener(te,Se),d[j].audioTracksEvents=void 0),qc&&((mt=h.media.audioTracks)==null||mt.addEventListener(te,Ze),d[j].audioTracksEvents=Ze)}),Se=d[j].remoteEvents,Ff.forEach(te=>{var De,mt;Se&&Bc&&((De=l.media.remote)==null||De.removeEventListener(te,Se),d[j].remoteEvents=void 0),Yc&&((mt=h.media.remote)==null||mt.addEventListener(te,Ze),d[j].remoteEvents=Ze)}),Se=d[j].rootEvents,Kf.forEach(te=>{Se&&Wc&&(l.documentElement.removeEventListener(te,Se),d[j].rootEvents=void 0),Gc&&(h.documentElement.addEventListener(te,Ze),d[j].rootEvents=Ze)});const On=d[j].stateOwnersUpdateHandlers;if(On&&fl&&(Array.isArray(On)?On:[On]).forEach(te=>{typeof te=="function"&&te()}),zc){const te=Vf.map(De=>De(Ze,h)).filter(De=>typeof De=="function");d[j].stateOwnersUpdateHandlers=te.length===1?te[0]:te}else fl&&(d[j].stateOwnersUpdateHandlers=void 0)}),Object.entries(h).forEach(([j,gr])=>{l[j]=gr}),m(),h=void 0};return v({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(T){const{type:b,detail:_}=T;if(r[b]&&u.mediaErrorCode==null){p(r[b](a,l,T));return}b==="mediaelementchangerequest"?v({media:_}):b==="fullscreenelementchangerequest"?v({fullscreenElement:_}):b==="documentelementchangerequest"?v({documentElement:_}):b==="optionschangerequest"&&(Object.entries(_??{}).forEach(([y,g])=>{l.options[y]=g}),m())},getState(){return u},subscribe(T){return v({},o.length+1),o.push(T),T(u),()=>{const b=o.indexOf(T);b>=0&&(v({},o.length-1),o.splice(b,1))}}}},xu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},D=(e,t,i)=>(xu(e,t,"read from private field"),i?i.call(e):t.get(e)),at=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},_t=(e,t,i,a)=>(xu(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Ar=(e,t,i)=>(xu(e,t,"access private method"),i),si,Fr,W,qt,Kr,Mt,Es,Vr,_s,sd,oa,gs,od,ld,ev,tv=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],Ah=10,kh=.025,wh=.25,R0=.25,L0=2,k={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"},iv=class extends il{constructor(){super(),at(this,_s),at(this,gs),at(this,ld),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,at(this,si,new Cu(this,k.HOTKEYS)),at(this,Fr,void 0),at(this,W,void 0),at(this,qt,null),at(this,Kr,void 0),at(this,Mt,void 0),at(this,Es,t=>{var i;(i=D(this,W))==null||i.dispatch(t)}),at(this,Vr,void 0),at(this,oa,t=>{const{key:i,shiftKey:a}=t;if(!(a&&(i==="/"||i==="?")||tv.includes(i))){this.removeEventListener("keyup",D(this,oa));return}this.keyboardShortcutHandler(t)}),this.associateElement(this);let e={};_t(this,Kr,t=>{Object.entries(t).forEach(([i,a])=>{if(i in e&&e[i]===a)return;this.propagateMediaState(i,a);const r=i.toLowerCase(),n=new f.CustomEvent(Cb[r],{composed:!0,detail:a});this.dispatchEvent(n)}),e=t})}static get observedAttributes(){return super.observedAttributes.concat(k.NO_HOTKEYS,k.HOTKEYS,k.DEFAULT_STREAM_TYPE,k.DEFAULT_SUBTITLES,k.DEFAULT_DURATION,k.NO_MUTED_PREF,k.NO_VOLUME_PREF,k.LANG,k.LOOP,k.LIVE_EDGE_OFFSET,k.SEEK_TO_LIVE_OFFSET,k.NO_AUTO_SEEK_TO_LIVE)}get mediaStore(){return D(this,W)}set mediaStore(e){var t,i;if(D(this,W)&&((t=D(this,Mt))==null||t.call(this),_t(this,Mt,void 0)),_t(this,W,e),!D(this,W)&&!this.hasAttribute(k.NO_DEFAULT_STORE)){Ar(this,_s,sd).call(this);return}_t(this,Mt,(i=D(this,W))==null?void 0:i.subscribe(D(this,Kr)))}get fullscreenElement(){var e;return(e=D(this,Fr))!=null?e:this}set fullscreenElement(e){var t;this.hasAttribute(k.FULLSCREEN_ELEMENT)&&this.removeAttribute(k.FULLSCREEN_ELEMENT),_t(this,Fr,e),(t=D(this,W))==null||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return K(this,k.DEFAULT_SUBTITLES)}set defaultSubtitles(e){V(this,k.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return oe(this,k.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){ae(this,k.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return ie(this,k.DEFAULT_DURATION)}set defaultDuration(e){ce(this,k.DEFAULT_DURATION,e)}get noHotkeys(){return K(this,k.NO_HOTKEYS)}set noHotkeys(e){V(this,k.NO_HOTKEYS,e)}get keysUsed(){return oe(this,k.KEYS_USED)}set keysUsed(e){ae(this,k.KEYS_USED,e)}get liveEdgeOffset(){return ie(this,k.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){ce(this,k.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return K(this,k.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){V(this,k.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return K(this,k.NO_VOLUME_PREF)}set noVolumePref(e){V(this,k.NO_VOLUME_PREF,e)}get noMutedPref(){return K(this,k.NO_MUTED_PREF)}set noMutedPref(e){V(this,k.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return K(this,k.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){V(this,k.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return K(this,k.NO_DEFAULT_STORE)}set noDefaultStore(e){V(this,k.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,t,i){var a,r,n,s,o,l,u,p,m,d,h,v;if(super.attributeChangedCallback(e,t,i),e===k.NO_HOTKEYS)i!==t&&i===""?(this.hasAttribute(k.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&i===null&&this.enableHotkeys();else if(e===k.HOTKEYS)D(this,si).value=i;else if(e===k.DEFAULT_SUBTITLES&&i!==t)(a=D(this,W))==null||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(k.DEFAULT_SUBTITLES)}});else if(e===k.DEFAULT_STREAM_TYPE)(n=D(this,W))==null||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(r=this.getAttribute(k.DEFAULT_STREAM_TYPE))!=null?r:void 0}});else if(e===k.LIVE_EDGE_OFFSET&&i!==t)(s=D(this,W))==null||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(k.LIVE_EDGE_OFFSET)?+this.getAttribute(k.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(k.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(k.SEEK_TO_LIVE_OFFSET):this.hasAttribute(k.LIVE_EDGE_OFFSET)?+this.getAttribute(k.LIVE_EDGE_OFFSET):void 0}});else if(e===k.SEEK_TO_LIVE_OFFSET&&i!==t)(o=D(this,W))==null||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(k.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(k.SEEK_TO_LIVE_OFFSET):this.hasAttribute(k.LIVE_EDGE_OFFSET)?+this.getAttribute(k.LIVE_EDGE_OFFSET):void 0}});else if(e===k.NO_AUTO_SEEK_TO_LIVE)(l=D(this,W))==null||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(k.NO_AUTO_SEEK_TO_LIVE)}});else if(e===k.FULLSCREEN_ELEMENT){const T=i?(u=this.getRootNode())==null?void 0:u.getElementById(i):void 0;_t(this,Fr,T),(p=D(this,W))==null||p.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===k.LANG&&i!==t?(Fb(i),(m=D(this,W))==null||m.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===k.LOOP&&i!==t?(d=D(this,W))==null||d.dispatch({type:L.MEDIA_LOOP_REQUEST,detail:i!=null}):e===k.NO_VOLUME_PREF&&i!==t?(h=D(this,W))==null||h.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(k.NO_VOLUME_PREF)}}):e===k.NO_MUTED_PREF&&i!==t&&((v=D(this,W))==null||v.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(k.NO_MUTED_PREF)}}))}connectedCallback(){var e,t,i;this.associateElement(this),!D(this,W)&&!this.hasAttribute(k.NO_DEFAULT_STORE)&&Ar(this,_s,sd).call(this),(e=D(this,W))==null||e.dispatch({type:"documentelementchangerequest",detail:ge}),(t=D(this,W))==null||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),D(this,W)&&!D(this,Mt)&&_t(this,Mt,(i=D(this,W))==null?void 0:i.subscribe(D(this,Kr))),D(this,Vr)!==void 0&&D(this,W)&&this.media&&setTimeout(()=>{var a,r,n;(r=(a=this.media)==null?void 0:a.textTracks)!=null&&r.length&&((n=D(this,W))==null||n.dispatch({type:L.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:D(this,Vr)}))},0),this.hasAttribute(k.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a,r,n;if((e=super.disconnectedCallback)==null||e.call(this),this.disableHotkeys(),D(this,W)){const s=D(this,W).getState();_t(this,Vr,!!((t=s.mediaSubtitlesShowing)!=null&&t.length)),(i=D(this,W))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),(a=D(this,W))==null||a.dispatch({type:"documentelementchangerequest",detail:void 0}),(r=D(this,W))==null||r.dispatch({type:L.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}D(this,Mt)&&((n=D(this,Mt))==null||n.call(this),_t(this,Mt,void 0)),this.unassociateElement(this),D(this,qt)&&(D(this,qt).remove(),_t(this,qt,null))}mediaSetCallback(e){var t;super.mediaSetCallback(e),(t=D(this,W))==null||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),(t=D(this,W))==null||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){Rh(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:t}=this;if(t.has(e))return;const i=N0(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(L).forEach(a=>{e.addEventListener(a,D(this,Es))}),t.set(e,i)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(L).forEach(i=>{e.removeEventListener(i,D(this,Es))}))}registerMediaStateReceiver(e){if(!e)return;const t=this.mediaStateReceivers;t.indexOf(e)>-1||(t.push(e),D(this,W)&&Object.entries(D(this,W).getState()).forEach(([i,a])=>{Rh([e],i,a)}))}unregisterMediaStateReceiver(e){const t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",Ar(this,gs,od))}disableHotkeys(){this.removeEventListener("keydown",Ar(this,gs,od)),this.removeEventListener("keyup",D(this,oa))}get hotkeys(){return D(this,si)}set hotkeys(e){ae(this,k.HOTKEYS,e)}keyboardShortcutHandler(e){var t,i,a,r,n,s,o,l,u;const p=e.target;if(((a=(i=(t=p.getAttribute(k.KEYS_USED))==null?void 0:t.split(" "))!=null?i:p?.keysUsed)!=null?a:[]).map(v=>v==="Space"?" ":v).filter(Boolean).includes(e.key))return;let m,d,h;if(!D(this,si).contains(`no${e.key.toLowerCase()}`)&&!(e.key===" "&&D(this,si).contains("nospace"))&&!(e.shiftKey&&(e.key==="/"||e.key==="?")&&D(this,si).contains("noshift+/")))switch(e.key){case" ":case"k":m=D(this,W).getState().mediaPaused?L.MEDIA_PLAY_REQUEST:L.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new f.CustomEvent(m,{composed:!0,bubbles:!0}));break;case"m":m=this.mediaStore.getState().mediaVolumeLevel==="off"?L.MEDIA_UNMUTE_REQUEST:L.MEDIA_MUTE_REQUEST,this.dispatchEvent(new f.CustomEvent(m,{composed:!0,bubbles:!0}));break;case"f":m=this.mediaStore.getState().mediaIsFullscreen?L.MEDIA_EXIT_FULLSCREEN_REQUEST:L.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new f.CustomEvent(m,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new f.CustomEvent(L.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{const v=this.hasAttribute(k.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(k.KEYBOARD_BACKWARD_SEEK_OFFSET):Ah;d=Math.max(((r=this.mediaStore.getState().mediaCurrentTime)!=null?r:0)-v,0),h=new f.CustomEvent(L.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:d}),this.dispatchEvent(h);break}case"ArrowRight":case"l":{const v=this.hasAttribute(k.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(k.KEYBOARD_FORWARD_SEEK_OFFSET):Ah;d=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)+v,0),h=new f.CustomEvent(L.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:d}),this.dispatchEvent(h);break}case"ArrowUp":{const v=this.hasAttribute(k.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(k.KEYBOARD_UP_VOLUME_STEP):kh;d=Math.min(((s=this.mediaStore.getState().mediaVolume)!=null?s:1)+v,1),h=new f.CustomEvent(L.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:d}),this.dispatchEvent(h);break}case"ArrowDown":{const v=this.hasAttribute(k.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(k.KEYBOARD_DOWN_VOLUME_STEP):kh;d=Math.max(((o=this.mediaStore.getState().mediaVolume)!=null?o:1)-v,0),h=new f.CustomEvent(L.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:d}),this.dispatchEvent(h);break}case"<":{const v=(l=this.mediaStore.getState().mediaPlaybackRate)!=null?l:1;d=Math.max(v-wh,R0).toFixed(2),h=new f.CustomEvent(L.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:d}),this.dispatchEvent(h);break}case">":{const v=(u=this.mediaStore.getState().mediaPlaybackRate)!=null?u:1;d=Math.min(v+wh,L0).toFixed(2),h=new f.CustomEvent(L.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:d}),this.dispatchEvent(h);break}case"/":case"?":e.shiftKey&&Ar(this,ld,ev).call(this);break;case"p":m=this.mediaStore.getState().mediaIsPip?L.MEDIA_EXIT_PIP_REQUEST:L.MEDIA_ENTER_PIP_REQUEST,h=new f.CustomEvent(m,{composed:!0,bubbles:!0}),this.dispatchEvent(h);break;default:break}}};si=new WeakMap;Fr=new WeakMap;W=new WeakMap;qt=new WeakMap;Kr=new WeakMap;Mt=new WeakMap;Es=new WeakMap;Vr=new WeakMap;_s=new WeakSet;sd=function(){var e;this.mediaStore=I0({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(k.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(k.DEFAULT_DURATION)?+this.getAttribute(k.DEFAULT_DURATION):void 0,defaultStreamType:(e=this.getAttribute(k.DEFAULT_STREAM_TYPE))!=null?e:void 0,liveEdgeOffset:this.hasAttribute(k.LIVE_EDGE_OFFSET)?+this.getAttribute(k.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(k.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(k.SEEK_TO_LIVE_OFFSET):this.hasAttribute(k.LIVE_EDGE_OFFSET)?+this.getAttribute(k.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(k.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(k.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(k.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(k.NO_SUBTITLES_LANG_PREF)}})};oa=new WeakMap;gs=new WeakSet;od=function(e){var t;const{metaKey:i,altKey:a,key:r,shiftKey:n}=e,s=n&&(r==="/"||r==="?");if(s&&((t=D(this,qt))!=null&&t.open)){this.removeEventListener("keyup",D(this,oa));return}if(i||a||!s&&!tv.includes(r)){this.removeEventListener("keyup",D(this,oa));return}const o=e.target,l=o instanceof HTMLElement&&(o.tagName.toLowerCase()==="media-volume-range"||o.tagName.toLowerCase()==="media-time-range");[" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)&&!(D(this,si).contains(`no${r.toLowerCase()}`)||r===" "&&D(this,si).contains("nospace"))&&!l&&e.preventDefault(),this.addEventListener("keyup",D(this,oa),{once:!0})};ld=new WeakSet;ev=function(){D(this,qt)||(_t(this,qt,ge.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(D(this,qt))),D(this,qt).open=!0};var C0=Object.values(c),D0=Object.values(Rp),av=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&((t=e.nodeName)!=null&&t.includes("-"))&&(f.customElements.upgrade(e),{observedAttributes:n}=e.constructor);const s=(r=(a=(i=e?.getAttribute)==null?void 0:i.call(e,z.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(o=>C0.includes(o)):[]},M0=e=>{var t,i;return(t=e.nodeName)!=null&&t.includes("-")&&f.customElements.get((i=e.nodeName)==null?void 0:i.toLowerCase())&&!(e instanceof f.customElements.get(e.nodeName.toLowerCase()))&&f.customElements.upgrade(e),D0.some(a=>a in e)},dd=e=>M0(e)||!!av(e).length,Sh=e=>{var t;return(t=e?.join)==null?void 0:t.call(e,":")},Ih={[c.MEDIA_SUBTITLES_LIST]:kn,[c.MEDIA_SUBTITLES_SHOWING]:kn,[c.MEDIA_SEEKABLE]:Sh,[c.MEDIA_BUFFERED]:e=>e?.map(Sh).join(" "),[c.MEDIA_PREVIEW_COORDS]:e=>e?.join(" "),[c.MEDIA_RENDITION_LIST]:Mb,[c.MEDIA_AUDIO_TRACK_LIST]:Pb},x0=async(e,t,i)=>{var a,r;if(e.isConnected||await Dp(0),typeof i=="boolean"||i==null)return V(e,t,i);if(typeof i=="number")return ce(e,t,i);if(typeof i=="string")return ae(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);const n=(r=(a=Ih[t])==null?void 0:a.call(Ih,i))!=null?r:i;return e.setAttribute(t,n)},O0=e=>{var t;return!!((t=e.closest)!=null&&t.call(e,'*[slot="media"]'))},Qi=(e,t)=>{if(O0(e))return;const i=(r,n)=>{var s,o;dd(r)&&n(r);const{children:l=[]}=r??{},u=(o=(s=r?.shadowRoot)==null?void 0:s.children)!=null?o:[];[...l,...u].forEach(p=>Qi(p,n))},a=e?.nodeName.toLowerCase();if(a.includes("-")&&!dd(e)){f.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},Rh=(e,t,i)=>{e.forEach(a=>{if(t in a){a[t]=i;return}const r=av(a),n=t.toLowerCase();r.includes(n)&&x0(a,n,i)})},N0=(e,t,i)=>{Qi(e,t);const a=p=>{var m;t((m=p?.composedPath()[0])!=null?m:p.target)},r=p=>{var m;i((m=p?.composedPath()[0])!=null?m:p.target)};e.addEventListener(L.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(L.UNREGISTER_MEDIA_STATE_RECEIVER,r);const n=p=>{p.forEach(m=>{const{addedNodes:d=[],removedNodes:h=[],type:v,target:T,attributeName:b}=m;v==="childList"?(Array.prototype.forEach.call(d,_=>Qi(_,t)),Array.prototype.forEach.call(h,_=>Qi(_,i))):v==="attributes"&&b===z.MEDIA_CHROME_ATTRIBUTES&&(dd(T)?t(T):i(T))})};let s=[];const o=p=>{const m=p.target;m.name!=="media"&&(s.forEach(d=>Qi(d,i)),s=[...m.assignedElements({flatten:!0})],s.forEach(d=>Qi(d,t)))};e.addEventListener("slotchange",o);const l=new MutationObserver(n);return l.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{Qi(e,i),e.removeEventListener("slotchange",o),l.disconnect(),e.removeEventListener(L.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(L.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};f.customElements.get("media-controller")||f.customElements.define("media-controller",iv);var P0=iv,fa={PLACEMENT:"placement",BOUNDS:"bounds"};function U0(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}var nl=class extends f.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!Bp(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const t=this.placement;if(t==="left"||t==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const i=getComputedStyle(this),a=(e=pr(this,"#"+this.bounds))!=null?e:qe(this);if(!a)return;const{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=s+o,u=r+n,p=i.getPropertyValue("--media-tooltip-offset-x"),m=p?parseFloat(p.replace("px","")):0,d=i.getPropertyValue("--media-tooltip-container-margin"),h=d?parseFloat(d.replace("px","")):0,v=s-r+m-h,T=l-u+m+h;if(v<0){this.style.setProperty("--media-tooltip-offset-x",`${v}px`);return}if(T>0){this.style.setProperty("--media-tooltip-offset-x",`${T}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[fa.PLACEMENT,fa.BOUNDS]}get placement(){return oe(this,fa.PLACEMENT)}set placement(e){ae(this,fa.PLACEMENT,e)}get bounds(){return oe(this,fa.BOUNDS)}set bounds(e){ae(this,fa.BOUNDS,e)}};nl.shadowRootOptions={mode:"open"};nl.getTemplateHTML=U0;f.customElements.get("media-tooltip")||f.customElements.define("media-tooltip",nl);var Lh=nl,Ou=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},_e=(e,t,i)=>(Ou(e,t,"read from private field"),i?i.call(e):t.get(e)),Ea=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Wn=(e,t,i,a)=>(Ou(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),$0=(e,t,i)=>(Ou(e,t,"access private method"),i),xt,za,xi,Ra,bs,ud,rv,fi={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function H0(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${Lh.shadowRootOptions.mode}">
          ${Lh.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `}function B0(e,t){return`
    <slot></slot>
  `}function W0(){return""}var Ce=class extends f.HTMLElement{constructor(){if(super(),Ea(this,ud),Ea(this,xt,void 0),this.preventClick=!1,this.tooltipEl=null,Ea(this,za,e=>{this.preventClick||this.handleClick(e),setTimeout(_e(this,xi),0)}),Ea(this,xi,()=>{var e,t;(t=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||t.call(e)}),Ea(this,Ra,e=>{const{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",_e(this,Ra));return}this.preventClick||this.handleClick(e)}),Ea(this,bs,e=>{const{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",_e(this,Ra));return}this.addEventListener("keyup",_e(this,Ra),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tt(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",fi.TOOLTIP_PLACEMENT,z.MEDIA_CONTROLLER,c.MEDIA_LANG]}enable(){this.addEventListener("click",_e(this,za)),this.addEventListener("keydown",_e(this,bs)),this.tabIndex=0}disable(){this.removeEventListener("click",_e(this,za)),this.removeEventListener("keydown",_e(this,bs)),this.removeEventListener("keyup",_e(this,Ra)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===z.MEDIA_CONTROLLER?(t&&((r=(a=_e(this,xt))==null?void 0:a.unassociateElement)==null||r.call(a,this),Wn(this,xt,null)),i&&this.isConnected&&(Wn(this,xt,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(o=(s=_e(this,xt))==null?void 0:s.associateElement)==null||o.call(s,this))):e==="disabled"&&i!==t?i==null?this.enable():this.disable():e===fi.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===c.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),_e(this,xi).call(this)}connectedCallback(){var e,t,i;const{style:a}=Ae(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const r=this.getAttribute(z.MEDIA_CONTROLLER);r&&(Wn(this,xt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(i=(t=_e(this,xt))==null?void 0:t.associateElement)==null||i.call(t,this)),f.customElements.whenDefined("media-tooltip").then(()=>$0(this,ud,rv).call(this))}disconnectedCallback(){var e,t;this.disable(),(t=(e=_e(this,xt))==null?void 0:e.unassociateElement)==null||t.call(e,this),Wn(this,xt,null),this.removeEventListener("mouseenter",_e(this,xi)),this.removeEventListener("focus",_e(this,xi)),this.removeEventListener("click",_e(this,za))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return oe(this,fi.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){ae(this,fi.TOOLTIP_PLACEMENT,e)}get mediaController(){return oe(this,z.MEDIA_CONTROLLER)}set mediaController(e){ae(this,z.MEDIA_CONTROLLER,e)}get disabled(){return K(this,fi.DISABLED)}set disabled(e){V(this,fi.DISABLED,e)}get noTooltip(){return K(this,fi.NO_TOOLTIP)}set noTooltip(e){V(this,fi.NO_TOOLTIP,e)}handleClick(e){}};xt=new WeakMap;za=new WeakMap;xi=new WeakMap;Ra=new WeakMap;bs=new WeakMap;ud=new WeakSet;rv=function(){this.addEventListener("mouseenter",_e(this,xi)),this.addEventListener("focus",_e(this,xi)),this.addEventListener("click",_e(this,za));const e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)};Ce.shadowRootOptions={mode:"open"};Ce.getTemplateHTML=H0;Ce.getSlotTemplateHTML=B0;Ce.getTooltipContentHTML=W0;f.customElements.get("media-chrome-button")||f.customElements.define("media-chrome-button",Ce);var Ch=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function F0(e){return`
    <style>
      :host([${c.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${c.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${c.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Ch}</slot>
      <slot name="exit">${Ch}</slot>
    </slot>
  `}function K0(){return`
    <slot name="tooltip-enter">${R("start airplay")}</slot>
    <slot name="tooltip-exit">${R("stop airplay")}</slot>
  `}var Dh=e=>{const t=e.mediaIsAirplaying?R("stop airplay"):R("start airplay");e.setAttribute("aria-label",t)},Nu=class extends Ce{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_IS_AIRPLAYING,c.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Dh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===c.MEDIA_IS_AIRPLAYING&&Dh(this)}get mediaIsAirplaying(){return K(this,c.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){V(this,c.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return oe(this,c.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){ae(this,c.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new f.CustomEvent(L.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}};Nu.getSlotTemplateHTML=F0;Nu.getTooltipContentHTML=K0;f.customElements.get("media-airplay-button")||f.customElements.define("media-airplay-button",Nu);var V0=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,q0=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function Y0(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${V0}</slot>
      <slot name="off">${q0}</slot>
    </slot>
  `}function G0(){return`
    <slot name="tooltip-enable">${R("Enable captions")}</slot>
    <slot name="tooltip-disable">${R("Disable captions")}</slot>
  `}var Mh=e=>{e.setAttribute("aria-checked",Qp(e).toString())},Pu=class extends Ce{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_SUBTITLES_LIST,c.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",R("closed captions")),Mh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===c.MEDIA_SUBTITLES_SHOWING&&Mh(this)}get mediaSubtitlesList(){return xh(this,c.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Oh(this,c.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return xh(this,c.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Oh(this,c.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new f.CustomEvent(L.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}};Pu.getSlotTemplateHTML=Y0;Pu.getTooltipContentHTML=G0;var xh=(e,t)=>{const i=e.getAttribute(t);return i?al(i):[]},Oh=(e,t,i)=>{if(!i?.length){e.removeAttribute(t);return}const a=kn(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};f.customElements.get("media-captions-button")||f.customElements.define("media-captions-button",Pu);var z0='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',Q0='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function Z0(e){return`
    <style>
      :host([${c.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${c.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${c.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${z0}</slot>
      <slot name="exit">${Q0}</slot>
    </slot>
  `}function j0(){return`
    <slot name="tooltip-enter">${R("Start casting")}</slot>
    <slot name="tooltip-exit">${R("Stop casting")}</slot>
  `}var Nh=e=>{const t=e.mediaIsCasting?R("stop casting"):R("start casting");e.setAttribute("aria-label",t)},Uu=class extends Ce{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_IS_CASTING,c.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Nh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===c.MEDIA_IS_CASTING&&Nh(this)}get mediaIsCasting(){return K(this,c.MEDIA_IS_CASTING)}set mediaIsCasting(e){V(this,c.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return oe(this,c.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){ae(this,c.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?L.MEDIA_EXIT_CAST_REQUEST:L.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new f.CustomEvent(e,{composed:!0,bubbles:!0}))}};Uu.getSlotTemplateHTML=Z0;Uu.getTooltipContentHTML=j0;f.customElements.get("media-cast-button")||f.customElements.define("media-cast-button",Uu);var $u=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},la=(e,t,i)=>($u(e,t,"read from private field"),i?i.call(e):t.get(e)),Jt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Hu=(e,t,i,a)=>($u(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Ki=(e,t,i)=>($u(e,t,"access private method"),i),Ao,wn,ca,ys,cd,hd,nv,md,sv,pd,ov,vd,lv,fd,dv;function X0(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `}function J0(e){return`
    <slot id="content"></slot>
  `}var kr={OPEN:"open",ANCHOR:"anchor"},vr=class extends f.HTMLElement{constructor(){super(),Jt(this,ys),Jt(this,hd),Jt(this,md),Jt(this,pd),Jt(this,vd),Jt(this,fd),Jt(this,Ao,!1),Jt(this,wn,null),Jt(this,ca,null)}static get observedAttributes(){return[kr.OPEN,kr.ANCHOR]}get open(){return K(this,kr.OPEN)}set open(e){V(this,kr.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":Ki(this,pd,ov).call(this,e);break;case"focusout":Ki(this,vd,lv).call(this,e);break;case"keydown":Ki(this,fd,dv).call(this,e);break}}connectedCallback(){Ki(this,ys,cd).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,t,i){Ki(this,ys,cd).call(this),e===kr.OPEN&&i!==t&&(this.open?Ki(this,hd,nv).call(this):Ki(this,md,sv).call(this))}focus(){Hu(this,wn,Su());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));e||t||this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]')?.focus()}get keysUsed(){return["Escape","Tab"]}};Ao=new WeakMap;wn=new WeakMap;ca=new WeakMap;ys=new WeakSet;cd=function(){if(!la(this,Ao)&&(Hu(this,Ao,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const e=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{const{style:t}=Ae(this.shadowRoot,":host");t.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};hd=new WeakSet;nv=function(){var e;(e=la(this,ca))==null||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};md=new WeakSet;sv=function(){var e;(e=la(this,ca))==null||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};pd=new WeakSet;ov=function(e){Hu(this,ca,e.relatedTarget),vi(this,e.relatedTarget)||(this.open=!this.open)};vd=new WeakSet;lv=function(e){var t;vi(this,e.relatedTarget)||((t=la(this,wn))==null||t.focus(),la(this,ca)&&la(this,ca)!==e.relatedTarget&&this.open&&(this.open=!1))};fd=new WeakSet;dv=function(e){var t,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:u}=e;o||l||u||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),s==="Tab"?(e.shiftKey?(i=(t=this.previousElementSibling)==null?void 0:t.focus)==null||i.call(t):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):s==="Escape"&&((n=la(this,wn))==null||n.focus(),this.open=!1))};vr.shadowRootOptions={mode:"open"};vr.getTemplateHTML=X0;vr.getSlotTemplateHTML=J0;f.customElements.get("media-chrome-dialog")||f.customElements.define("media-chrome-dialog",vr);var Bu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},de=(e,t,i)=>(Bu(e,t,"read from private field"),i?i.call(e):t.get(e)),Me=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},yi=(e,t,i,a)=>(Bu(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),yt=(e,t,i)=>(Bu(e,t,"access private method"),i),Ot,sl,Ts,As,Tt,ko,ks,ws,Ss,Wu,uv,Is,Ed,Rs,_d,wo,Fu,gd,cv,bd,hv,yd,mv,Td,pv;function e1(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `}function t1(e){return""}var fr=class extends f.HTMLElement{constructor(){if(super(),Me(this,Wu),Me(this,Is),Me(this,Rs),Me(this,wo),Me(this,gd),Me(this,bd),Me(this,yd),Me(this,Td),Me(this,Ot,void 0),Me(this,sl,void 0),Me(this,Ts,void 0),Me(this,As,void 0),Me(this,Tt,{}),Me(this,ko,[]),Me(this,ks,()=>{if(this.range.matches(":focus-visible")){const{style:e}=Ae(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),Me(this,ws,()=>{const{style:e}=Ae(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),Me(this,Ss,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tt(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),yi(this,Ts,this.shadowRoot.querySelector("#startpoint")),yi(this,As,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",z.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===z.MEDIA_CONTROLLER?(t&&((r=(a=de(this,Ot))==null?void 0:a.unassociateElement)==null||r.call(a,this),yi(this,Ot,null)),i&&this.isConnected&&(yi(this,Ot,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(o=(s=de(this,Ot))==null?void 0:s.associateElement)==null||o.call(s,this))):(e==="disabled"||e==="aria-disabled"&&t!==i)&&(i==null?(this.range.removeAttribute(e),yt(this,Is,Ed).call(this)):(this.range.setAttribute(e,i),yt(this,Rs,_d).call(this)))}connectedCallback(){var e,t,i;const{style:a}=Ae(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),de(this,Tt).pointer=Ae(this.shadowRoot,"#pointer"),de(this,Tt).progress=Ae(this.shadowRoot,"#progress"),de(this,Tt).thumb=Ae(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),de(this,Tt).activeSegment=Ae(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const r=this.getAttribute(z.MEDIA_CONTROLLER);r&&(yi(this,Ot,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(i=(t=de(this,Ot))==null?void 0:t.associateElement)==null||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",de(this,ks)),this.shadowRoot.addEventListener("focusout",de(this,ws)),yt(this,Is,Ed).call(this),lr(this.container,de(this,Ss))}disconnectedCallback(){var e,t;yt(this,Rs,_d).call(this),(t=(e=de(this,Ot))==null?void 0:e.unassociateElement)==null||t.call(e,this),yi(this,Ot,null),this.shadowRoot.removeEventListener("focusin",de(this,ks)),this.shadowRoot.removeEventListener("focusout",de(this,ws)),dr(this.container,de(this,Ss))}updatePointerBar(e){var t;(t=de(this,Tt).pointer)==null||t.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,t;const i=this.range.valueAsNumber*100;(e=de(this,Tt).progress)==null||e.style.setProperty("width",`${i}%`),(t=de(this,Tt).thumb)==null||t.style.setProperty("left",`${i}%`)}updateSegments(e){const t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!e?.length),!e?.length)return;const i=[...new Set([+this.range.min,...e.flatMap(r=>[r.start,r.end]),+this.range.max])];yi(this,ko,[...i]);const a=i.pop();for(const[r,n]of i.entries()){const[s,o]=[r===0,r===i.length-1],l=s?"calc(var(--segments-gap) / -1)":`${n*100}%`,u=`calc(${((o?a:i[r+1])-n)*100}%${s||o?"":" - var(--segments-gap)"})`,p=ge.createElementNS("http://www.w3.org/2000/svg","rect"),m=Iu(this.shadowRoot,`#segments-clipping rect:nth-child(${r+1})`);m.style.setProperty("x",l),m.style.setProperty("width",u),t.append(p)}}getPointerRatio(e){return Gb(e.clientX,e.clientY,de(this,Ts).getBoundingClientRect(),de(this,As).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":yt(this,Td,pv).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":yt(this,gd,cv).call(this,e);break;case"pointerdown":yt(this,wo,Fu).call(this,e);break;case"pointerup":yt(this,bd,hv).call(this);break;case"pointerleave":yt(this,yd,mv).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}};Ot=new WeakMap;sl=new WeakMap;Ts=new WeakMap;As=new WeakMap;Tt=new WeakMap;ko=new WeakMap;ks=new WeakMap;ws=new WeakMap;Ss=new WeakMap;Wu=new WeakSet;uv=function(e){const t=de(this,Tt).activeSegment;if(!t)return;const i=this.getPointerRatio(e),a=`#segments-clipping rect:nth-child(${de(this,ko).findIndex((r,n,s)=>{const o=s[n+1];return o!=null&&i>=r&&i<=o})+1})`;(t.selectorText!=a||!t.style.transform)&&(t.selectorText=a,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};Is=new WeakSet;Ed=function(){this.hasAttribute("disabled")||!this.isConnected||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};Rs=new WeakSet;_d=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),(e=f.window)==null||e.removeEventListener("pointerup",this),(t=f.window)==null||t.removeEventListener("pointermove",this)};wo=new WeakSet;Fu=function(e){var t;yi(this,sl,e.composedPath().includes(this.range)),(t=f.window)==null||t.addEventListener("pointerup",this,{once:!0})};gd=new WeakSet;cv=function(e){var t;e.pointerType!=="mouse"&&yt(this,wo,Fu).call(this,e),this.addEventListener("pointerleave",this,{once:!0}),(t=f.window)==null||t.addEventListener("pointermove",this)};bd=new WeakSet;hv=function(){var e;(e=f.window)==null||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};yd=new WeakSet;mv=function(){var e,t;this.removeEventListener("pointerleave",this),(e=f.window)==null||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(t=de(this,Tt).activeSegment)==null||t.style.removeProperty("transform")};Td=new WeakSet;pv=function(e){e.pointerType==="pen"&&e.buttons===0||(this.toggleAttribute("dragging",e.buttons===1||e.pointerType!=="mouse"),this.updatePointerBar(e),yt(this,Wu,uv).call(this,e),this.dragging&&(e.pointerType!=="mouse"||!de(this,sl))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))};fr.shadowRootOptions={mode:"open"};fr.getTemplateHTML=e1;fr.getContainerTemplateHTML=t1;f.customElements.get("media-chrome-range")||f.customElements.define("media-chrome-range",fr);var vv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Fn=(e,t,i)=>(vv(e,t,"read from private field"),i?i.call(e):t.get(e)),i1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Kn=(e,t,i,a)=>(vv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Nt;function a1(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}var Ku=class extends f.HTMLElement{constructor(){if(super(),i1(this,Nt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[z.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===z.MEDIA_CONTROLLER&&(t&&((r=(a=Fn(this,Nt))==null?void 0:a.unassociateElement)==null||r.call(a,this),Kn(this,Nt,null)),i&&this.isConnected&&(Kn(this,Nt,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(o=(s=Fn(this,Nt))==null?void 0:s.associateElement)==null||o.call(s,this)))}connectedCallback(){var e,t,i;const a=this.getAttribute(z.MEDIA_CONTROLLER);a&&(Kn(this,Nt,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(i=(t=Fn(this,Nt))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=Fn(this,Nt))==null?void 0:e.unassociateElement)==null||t.call(e,this),Kn(this,Nt,null)}};Nt=new WeakMap;Ku.shadowRootOptions={mode:"open"};Ku.getTemplateHTML=a1;f.customElements.get("media-control-bar")||f.customElements.define("media-control-bar",Ku);var fv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Vn=(e,t,i)=>(fv(e,t,"read from private field"),i?i.call(e):t.get(e)),r1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},qn=(e,t,i,a)=>(fv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Pt;function n1(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `}function s1(e,t){return`
    <slot></slot>
  `}var Hi=class extends f.HTMLElement{constructor(){if(super(),r1(this,Pt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[z.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===z.MEDIA_CONTROLLER&&(t&&((r=(a=Vn(this,Pt))==null?void 0:a.unassociateElement)==null||r.call(a,this),qn(this,Pt,null)),i&&this.isConnected&&(qn(this,Pt,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(o=(s=Vn(this,Pt))==null?void 0:s.associateElement)==null||o.call(s,this)))}connectedCallback(){var e,t,i;const{style:a}=Ae(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const r=this.getAttribute(z.MEDIA_CONTROLLER);r&&(qn(this,Pt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(i=(t=Vn(this,Pt))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=Vn(this,Pt))==null?void 0:e.unassociateElement)==null||t.call(e,this),qn(this,Pt,null)}};Pt=new WeakMap;Hi.shadowRootOptions={mode:"open"};Hi.getTemplateHTML=n1;Hi.getSlotTemplateHTML=s1;f.customElements.get("media-text-display")||f.customElements.define("media-text-display",Hi);var Ev=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ph=(e,t,i)=>(Ev(e,t,"read from private field"),i?i.call(e):t.get(e)),o1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},l1=(e,t,i,a)=>(Ev(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),qr;function d1(e,t){return`
    <slot>${$i(t.mediaDuration)}</slot>
  `}var _v=class extends Hi{constructor(){var e;super(),o1(this,qr,void 0),l1(this,qr,this.shadowRoot.querySelector("slot")),Ph(this,qr).textContent=$i((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===c.MEDIA_DURATION&&(Ph(this,qr).textContent=$i(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return ie(this,c.MEDIA_DURATION)}set mediaDuration(e){ce(this,c.MEDIA_DURATION,e)}};qr=new WeakMap;_v.getSlotTemplateHTML=d1;f.customElements.get("media-duration-display")||f.customElements.define("media-duration-display",_v);var u1={2:R("Network Error"),3:R("Decode Error"),4:R("Source Not Supported"),5:R("Encryption Error")},c1={2:R("A network error caused the media download to fail."),3:R("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:R("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:R("The media is encrypted and there are no keys to decrypt it.")},Vu=e=>{var t,i;return e.code===1?null:{title:(t=u1[e.code])!=null?t:`Error ${e.code}`,message:(i=c1[e.code])!=null?i:e.message}},gv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},h1=(e,t,i)=>(gv(e,t,"read from private field"),i?i.call(e):t.get(e)),m1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},p1=(e,t,i,a)=>(gv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Ls;function v1(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${bv({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `}function f1(e){return e.code&&Vu(e)!==null}function bv(e){var t;const{title:i,message:a}=(t=Vu(e))!=null?t:{};let r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}var Uh=[c.MEDIA_ERROR_CODE,c.MEDIA_ERROR_MESSAGE],ol=class extends vr{constructor(){super(...arguments),m1(this,Ls,null)}static get observedAttributes(){return[...super.observedAttributes,...Uh]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!Uh.includes(e))return;const r=(a=this.mediaError)!=null?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=f1(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r),!this.hasAttribute("aria-label"))){const{title:n}=Vu(r);n&&this.setAttribute("aria-label",n)}}get mediaError(){return h1(this,Ls)}set mediaError(e){p1(this,Ls,e)}get mediaErrorCode(){return ie(this,"mediaerrorcode")}set mediaErrorCode(e){ce(this,"mediaerrorcode",e)}get mediaErrorMessage(){return oe(this,"mediaerrormessage")}set mediaErrorMessage(e){ae(this,"mediaerrormessage",e)}};Ls=new WeakMap;ol.getSlotTemplateHTML=v1;ol.formatErrorMessage=bv;f.customElements.get("media-error-dialog")||f.customElements.define("media-error-dialog",ol);var yv=ol,E1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ei=(e,t,i)=>(E1(e,t,"read from private field"),i?i.call(e):t.get(e)),$h=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},La,Ca;function _1(e){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${g1()}
    </slot>
  `}function g1(){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:e,description:t})=>`
      <tr>
        <td>
          <div class="key-combo">${e.map((i,a)=>a>0?`<span class="key-separator">or</span><span class="key">${i}</span>`:`<span class="key">${i}</span>`).join("")}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `).join("")}</table>
  `}var Tv=class extends vr{constructor(){super(...arguments),$h(this,La,e=>{var t;if(!this.open)return;const i=(t=this.shadowRoot)==null?void 0:t.querySelector("#content");if(!i)return;const a=e.composedPath(),r=a[0]===this||a.includes(this),n=a.includes(i);r&&!n&&(this.open=!1)}),$h(this,Ca,e=>{if(!this.open)return;const t=e.shiftKey&&(e.key==="/"||e.key==="?");(e.key==="Escape"||t)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",Ei(this,La)),document.addEventListener("keydown",Ei(this,Ca)))}disconnectedCallback(){this.removeEventListener("click",Ei(this,La)),document.removeEventListener("keydown",Ei(this,Ca))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="open"&&(this.open?(this.addEventListener("click",Ei(this,La)),document.addEventListener("keydown",Ei(this,Ca))):(this.removeEventListener("click",Ei(this,La)),document.removeEventListener("keydown",Ei(this,Ca))))}};La=new WeakMap;Ca=new WeakMap;Tv.getSlotTemplateHTML=_1;f.customElements.get("media-keyboard-shortcuts-dialog")||f.customElements.define("media-keyboard-shortcuts-dialog",Tv);var Av=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},b1=(e,t,i)=>(Av(e,t,"read from private field"),i?i.call(e):t.get(e)),y1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},T1=(e,t,i,a)=>(Av(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Cs,A1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,k1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function w1(e){return`
    <style>
      :host([${c.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${c.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${c.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${A1}</slot>
      <slot name="exit">${k1}</slot>
    </slot>
  `}function S1(){return`
    <slot name="tooltip-enter">${R("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${R("Exit fullscreen mode")}</slot>
  `}var Hh=e=>{const t=e.mediaIsFullscreen?R("exit fullscreen mode"):R("enter fullscreen mode");e.setAttribute("aria-label",t)},qu=class extends Ce{constructor(){super(...arguments),y1(this,Cs,null)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_IS_FULLSCREEN,c.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Hh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===c.MEDIA_IS_FULLSCREEN&&Hh(this)}get mediaFullscreenUnavailable(){return oe(this,c.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){ae(this,c.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return K(this,c.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){V(this,c.MEDIA_IS_FULLSCREEN,e)}handleClick(e){T1(this,Cs,e);const t=b1(this,Cs)instanceof PointerEvent,i=this.mediaIsFullscreen?new f.CustomEvent(L.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new f.CustomEvent(L.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(i)}};Cs=new WeakMap;qu.getSlotTemplateHTML=w1;qu.getTooltipContentHTML=S1;f.customElements.get("media-fullscreen-button")||f.customElements.define("media-fullscreen-button",qu);var{MEDIA_TIME_IS_LIVE:Ds,MEDIA_PAUSED:un}=c,{MEDIA_SEEK_TO_LIVE_REQUEST:I1,MEDIA_PLAY_REQUEST:R1}=L,L1='<svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg>';function C1(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${Ds}]:not([${un}])) slot[name=indicator] > *,
      :host([${Ds}]:not([${un}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${Ds}]:not([${un}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${L1}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${R("live")}</slot>
  `}var Bh=e=>{var t;const i=e.mediaPaused||!e.mediaTimeIsLive,a=R(i?"seek to live":"playing live");e.setAttribute("aria-label",a);const r=(t=e.shadowRoot)==null?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=R("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")},kv=class extends Ce{static get observedAttributes(){return[...super.observedAttributes,Ds,un]}connectedCallback(){super.connectedCallback(),Bh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),Bh(this)}get mediaPaused(){return K(this,c.MEDIA_PAUSED)}set mediaPaused(e){V(this,c.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return K(this,c.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){V(this,c.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new f.CustomEvent(I1,{composed:!0,bubbles:!0})),this.hasAttribute(un)&&this.dispatchEvent(new f.CustomEvent(R1,{composed:!0,bubbles:!0})))}};kv.getSlotTemplateHTML=C1;f.customElements.get("media-live-button")||f.customElements.define("media-live-button",kv);var wv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},wr=(e,t,i)=>(wv(e,t,"read from private field"),i?i.call(e):t.get(e)),Wh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Sr=(e,t,i,a)=>(wv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Ut,Ms,Yn={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},Sv=500,D1=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function M1(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${Sv}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${c.MEDIA_LOADING}]:not([${c.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${c.MEDIA_LOADING}]:not([${c.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${c.MEDIA_LOADING}]:not([${c.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${D1}</slot>
    <div id="status" role="status" aria-live="polite">${R("media loading")}</div>
  `}var Yu=class extends f.HTMLElement{constructor(){if(super(),Wh(this,Ut,void 0),Wh(this,Ms,Sv),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[z.MEDIA_CONTROLLER,c.MEDIA_PAUSED,c.MEDIA_LOADING,Yn.LOADING_DELAY]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===Yn.LOADING_DELAY&&t!==i?this.loadingDelay=Number(i):e===z.MEDIA_CONTROLLER&&(t&&((r=(a=wr(this,Ut))==null?void 0:a.unassociateElement)==null||r.call(a,this),Sr(this,Ut,null)),i&&this.isConnected&&(Sr(this,Ut,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(o=(s=wr(this,Ut))==null?void 0:s.associateElement)==null||o.call(s,this)))}connectedCallback(){var e,t,i;const a=this.getAttribute(z.MEDIA_CONTROLLER);a&&(Sr(this,Ut,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(i=(t=wr(this,Ut))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=wr(this,Ut))==null?void 0:e.unassociateElement)==null||t.call(e,this),Sr(this,Ut,null)}get loadingDelay(){return wr(this,Ms)}set loadingDelay(e){Sr(this,Ms,e);const{style:t}=Ae(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return K(this,c.MEDIA_PAUSED)}set mediaPaused(e){V(this,c.MEDIA_PAUSED,e)}get mediaLoading(){return K(this,c.MEDIA_LOADING)}set mediaLoading(e){V(this,c.MEDIA_LOADING,e)}get mediaController(){return oe(this,z.MEDIA_CONTROLLER)}set mediaController(e){ae(this,z.MEDIA_CONTROLLER,e)}get noAutohide(){return K(this,Yn.NO_AUTOHIDE)}set noAutohide(e){V(this,Yn.NO_AUTOHIDE,e)}};Ut=new WeakMap;Ms=new WeakMap;Yu.shadowRootOptions={mode:"open"};Yu.getTemplateHTML=M1;f.customElements.get("media-loading-indicator")||f.customElements.define("media-loading-indicator",Yu);var x1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,Fh=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,O1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function N1(e){return`
    <style>
      :host(:not([${c.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${c.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${c.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${c.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${c.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${c.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${c.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${x1}</slot>
      <slot name="low">${Fh}</slot>
      <slot name="medium">${Fh}</slot>
      <slot name="high">${O1}</slot>
    </slot>
  `}function P1(){return`
    <slot name="tooltip-mute">${R("Mute")}</slot>
    <slot name="tooltip-unmute">${R("Unmute")}</slot>
  `}var Kh=e=>{const t=e.mediaVolumeLevel==="off"?R("unmute"):R("mute");e.setAttribute("aria-label",t)},Gu=class extends Ce{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),Kh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===c.MEDIA_VOLUME_LEVEL&&Kh(this)}get mediaVolumeLevel(){return oe(this,c.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){ae(this,c.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?L.MEDIA_UNMUTE_REQUEST:L.MEDIA_MUTE_REQUEST;this.dispatchEvent(new f.CustomEvent(e,{composed:!0,bubbles:!0}))}};Gu.getSlotTemplateHTML=N1;Gu.getTooltipContentHTML=P1;f.customElements.get("media-mute-button")||f.customElements.define("media-mute-button",Gu);var Vh=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function U1(e){return`
    <style>
      :host([${c.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${c.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${c.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${c.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Vh}</slot>
      <slot name="exit">${Vh}</slot>
    </slot>
  `}function $1(){return`
    <slot name="tooltip-enter">${R("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${R("Exit picture in picture mode")}</slot>
  `}var qh=e=>{const t=e.mediaIsPip?R("exit picture in picture mode"):R("enter picture in picture mode");e.setAttribute("aria-label",t)},zu=class extends Ce{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_IS_PIP,c.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),qh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===c.MEDIA_IS_PIP&&qh(this)}get mediaPipUnavailable(){return oe(this,c.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){ae(this,c.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return K(this,c.MEDIA_IS_PIP)}set mediaIsPip(e){V(this,c.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?L.MEDIA_EXIT_PIP_REQUEST:L.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new f.CustomEvent(e,{composed:!0,bubbles:!0}))}};zu.getSlotTemplateHTML=U1;zu.getTooltipContentHTML=$1;f.customElements.get("media-pip-button")||f.customElements.define("media-pip-button",zu);var H1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},_a=(e,t,i)=>(H1(e,t,"read from private field"),i?i.call(e):t.get(e)),B1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ti,Ll={RATES:"rates"},Iv=[1,1.2,1.5,1.7,2];function W1(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `}function F1(){return R("Playback rate")}var Qu=class extends Ce{constructor(){var e;super(),B1(this,Ti,new Cu(this,Ll.RATES,{defaultValue:Iv})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(e=this.mediaPlaybackRate)!=null?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PLAYBACK_RATE,Ll.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===Ll.RATES&&(_a(this,Ti).value=i),e===c.MEDIA_PLAYBACK_RATE){const a=i?+i:NaN,r=Number.isNaN(a)?1:a;this.container.innerHTML=`${r}x`,this.setAttribute("aria-label",R("Playback rate {playbackRate}",{playbackRate:r}))}}get rates(){return _a(this,Ti)}set rates(e){e?Array.isArray(e)?_a(this,Ti).value=e.join(" "):typeof e=="string"&&(_a(this,Ti).value=e):_a(this,Ti).value=""}get mediaPlaybackRate(){return ie(this,c.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ce(this,c.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;const i=Array.from(_a(this,Ti).values(),n=>+n).sort((n,s)=>n-s),a=(t=(e=i.find(n=>n>this.mediaPlaybackRate))!=null?e:i[0])!=null?t:1,r=new f.CustomEvent(L.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}};Ti=new WeakMap;Qu.getSlotTemplateHTML=W1;Qu.getTooltipContentHTML=F1;f.customElements.get("media-playback-rate-button")||f.customElements.define("media-playback-rate-button",Qu);var K1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,V1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function q1(e){return`
    <style>
      :host([${c.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${c.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${c.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${c.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${K1}</slot>
      <slot name="pause">${V1}</slot>
    </slot>
  `}function Y1(){return`
    <slot name="tooltip-play">${R("Play")}</slot>
    <slot name="tooltip-pause">${R("Pause")}</slot>
  `}var Yh=e=>{const t=e.mediaPaused?R("play"):R("pause");e.setAttribute("aria-label",t)},Zu=class extends Ce{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PAUSED,c.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),Yh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===c.MEDIA_PAUSED||e===c.MEDIA_LANG)&&Yh(this)}get mediaPaused(){return K(this,c.MEDIA_PAUSED)}set mediaPaused(e){V(this,c.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?L.MEDIA_PLAY_REQUEST:L.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new f.CustomEvent(e,{composed:!0,bubbles:!0}))}};Zu.getSlotTemplateHTML=q1;Zu.getTooltipContentHTML=Y1;f.customElements.get("media-play-button")||f.customElements.define("media-play-button",Zu);var Rt={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function G1(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}var z1=e=>{e.style.removeProperty("background-image")},Q1=(e,t)=>{e.style["background-image"]=`url('${t}')`},ju=class extends f.HTMLElement{static get observedAttributes(){return[Rt.PLACEHOLDER_SRC,Rt.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===Rt.SRC&&(i==null?this.image.removeAttribute(Rt.SRC):this.image.setAttribute(Rt.SRC,i)),e===Rt.PLACEHOLDER_SRC&&(i==null?z1(this.image):Q1(this.image,i))}get placeholderSrc(){return oe(this,Rt.PLACEHOLDER_SRC)}set placeholderSrc(e){ae(this,Rt.SRC,e)}get src(){return oe(this,Rt.SRC)}set src(e){ae(this,Rt.SRC,e)}};ju.shadowRootOptions={mode:"open"};ju.getTemplateHTML=G1;f.customElements.get("media-poster-image")||f.customElements.define("media-poster-image",ju);var Rv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Z1=(e,t,i)=>(Rv(e,t,"read from private field"),i?i.call(e):t.get(e)),j1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},X1=(e,t,i,a)=>(Rv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),xs,J1=class extends Hi{constructor(){super(),j1(this,xs,void 0),X1(this,xs,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PREVIEW_CHAPTER,c.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===c.MEDIA_PREVIEW_CHAPTER||e===c.MEDIA_LANG)&&i!==t&&i!=null)if(Z1(this,xs).textContent=i,i!==""){const a=R("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",a)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return oe(this,c.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){ae(this,c.MEDIA_PREVIEW_CHAPTER,e)}};xs=new WeakMap;f.customElements.get("media-preview-chapter-display")||f.customElements.define("media-preview-chapter-display",J1);var Lv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Gn=(e,t,i)=>(Lv(e,t,"read from private field"),i?i.call(e):t.get(e)),ey=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},zn=(e,t,i,a)=>(Lv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),$t;function ty(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}var ll=class extends f.HTMLElement{constructor(){if(super(),ey(this,$t,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[z.MEDIA_CONTROLLER,c.MEDIA_PREVIEW_IMAGE,c.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;const a=this.getAttribute(z.MEDIA_CONTROLLER);a&&(zn(this,$t,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(i=(t=Gn(this,$t))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=Gn(this,$t))==null?void 0:e.unassociateElement)==null||t.call(e,this),zn(this,$t,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[c.MEDIA_PREVIEW_IMAGE,c.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===z.MEDIA_CONTROLLER&&(t&&((r=(a=Gn(this,$t))==null?void 0:a.unassociateElement)==null||r.call(a,this),zn(this,$t,null)),i&&this.isConnected&&(zn(this,$t,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(o=(s=Gn(this,$t))==null?void 0:s.associateElement)==null||o.call(s,this)))}get mediaPreviewImage(){return oe(this,c.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){ae(this,c.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(c.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(t=>+t)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(c.MEDIA_PREVIEW_COORDS);return}this.setAttribute(c.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;const[i,a,r,n]=e,s=t.split("#")[0],o=getComputedStyle(this),{maxWidth:l,maxHeight:u,minWidth:p,minHeight:m}=o,d=o.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain";let h,v;if(d==="fill"){const S=parseInt(l)/r,C=parseInt(u)/n,N=parseInt(p)/r,$=parseInt(m)/n;h=S<1?S:Math.max(S,N),v=C<1?C:Math.max(C,$)}else{const S=Math.min(parseInt(l)/r,parseInt(u)/n),C=Math.max(parseInt(p)/r,parseInt(m)/n),N=S<1?S:C>1?C:1;h=N,v=N}const{style:T}=Ae(this.shadowRoot,":host"),b=Ae(this.shadowRoot,"img").style,_=this.shadowRoot.querySelector("img"),y=Math.min(h,v)<1?"min":"max";T.setProperty(`${y}-width`,"initial","important"),T.setProperty(`${y}-height`,"initial","important"),T.width=`${r*h}px`,T.height=`${n*v}px`;const g=()=>{b.width=`${this.imgWidth*h}px`,b.height=`${this.imgHeight*v}px`,b.display="block"};_.src!==s&&(_.onload=()=>{this.imgWidth=_.naturalWidth,this.imgHeight=_.naturalHeight,g(),_.onload=null},_.src=s,g()),g(),b.transform=`translate(-${i*h}px, -${a*v}px)`}};$t=new WeakMap;ll.shadowRootOptions={mode:"open"};ll.getTemplateHTML=ty;f.customElements.get("media-preview-thumbnail")||f.customElements.define("media-preview-thumbnail",ll);var Gh=ll,Cv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},zh=(e,t,i)=>(Cv(e,t,"read from private field"),i?i.call(e):t.get(e)),iy=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ay=(e,t,i,a)=>(Cv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Yr,ry=class extends Hi{constructor(){super(),iy(this,Yr,void 0),ay(this,Yr,this.shadowRoot.querySelector("slot")),zh(this,Yr).textContent=$i(0)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===c.MEDIA_PREVIEW_TIME&&i!=null&&(zh(this,Yr).textContent=$i(parseFloat(i)))}get mediaPreviewTime(){return ie(this,c.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){ce(this,c.MEDIA_PREVIEW_TIME,e)}};Yr=new WeakMap;f.customElements.get("media-preview-time-display")||f.customElements.define("media-preview-time-display",ry);var ga={SEEK_OFFSET:"seekoffset"},Cl=30,ny=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${e}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function sy(e,t){return`
    <slot name="icon">${ny(t.seekOffset)}</slot>
  `}var oy=(e,t)=>{e.setAttribute("aria-label",R("seek back {seekOffset} seconds",{seekOffset:t}))};function ly(){return R("Seek backward")}var dy=0,Xu=class extends Ce{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_CURRENT_TIME,ga.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=ie(this,ga.SEEK_OFFSET,Cl)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),oy(this,this.seekOffset),e===ga.SEEK_OFFSET&&(this.seekOffset=ie(this,ga.SEEK_OFFSET,Cl))}get seekOffset(){return ie(this,ga.SEEK_OFFSET,Cl)}set seekOffset(e){ce(this,ga.SEEK_OFFSET,e),this.setAttribute("aria-label",R("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),$p(Hp(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ie(this,c.MEDIA_CURRENT_TIME,dy)}set mediaCurrentTime(e){ce(this,c.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new f.CustomEvent(L.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}};Xu.getSlotTemplateHTML=sy;Xu.getTooltipContentHTML=ly;f.customElements.get("media-seek-backward-button")||f.customElements.define("media-seek-backward-button",Xu);var ba={SEEK_OFFSET:"seekoffset"},Dl=30,uy=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${e}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function cy(e,t){return`
    <slot name="icon">${uy(t.seekOffset)}</slot>
  `}var hy=(e,t)=>{e.setAttribute("aria-label",R("seek forward {seekOffset} seconds",{seekOffset:t}))};function my(){return R("Seek forward")}var py=0,Ju=class extends Ce{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_CURRENT_TIME,ba.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=ie(this,ba.SEEK_OFFSET,Dl)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),hy(this,this.seekOffset),e===ba.SEEK_OFFSET&&(this.seekOffset=ie(this,ba.SEEK_OFFSET,Dl))}get seekOffset(){return ie(this,ba.SEEK_OFFSET,Dl)}set seekOffset(e){ce(this,ba.SEEK_OFFSET,e),this.setAttribute("aria-label",R("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),$p(Hp(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ie(this,c.MEDIA_CURRENT_TIME,py)}set mediaCurrentTime(e){ce(this,c.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,t=new f.CustomEvent(L.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}};Ju.getSlotTemplateHTML=cy;Ju.getTooltipContentHTML=my;f.customElements.get("media-seek-forward-button")||f.customElements.define("media-seek-forward-button",Ju);var ec=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},kt=(e,t,i)=>(ec(e,t,"read from private field"),i?i.call(e):t.get(e)),Vi=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tc=(e,t,i,a)=>(ec(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Ri=(e,t,i)=>(ec(e,t,"access private method"),i),Da,zt,dl,ic,Dv,So,ac,Gr,Os,Ns,Ad,Ai={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},Qh=[...Object.values(Ai),c.MEDIA_CURRENT_TIME,c.MEDIA_DURATION,c.MEDIA_SEEKABLE],Mv=["Enter"," "],vy="&nbsp;/&nbsp;",kd=(e,{timesSep:t=vy}={})=>{var i,a;const r=(i=e.mediaCurrentTime)!=null?i:0,[,n]=(a=e.mediaSeekable)!=null?a:[];let s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);const o=e.remaining?$i(0-(s-r)):$i(r);return e.showDuration?`${o}${t}${$i(s)}`:o},fy=e=>{var t;const i=e.mediaCurrentTime,[,a]=(t=e.mediaSeekable)!=null?t:[];let r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){e.setAttribute("aria-valuetext",R("video not loaded, unknown time."));return}const n=e.remaining?ln(0-(r-i)):ln(i);if(!e.showDuration){e.setAttribute("aria-valuetext",n);return}const s=R("{currentTime} of {totalTime}",{currentTime:n,totalTime:ln(r)});e.setAttribute("aria-valuetext",s)};function Ey(e,t){return`
    <slot>${kd(t)}</slot>
  `}var _y=e=>{e.setAttribute("aria-label",R("playback time"))},xv=class extends Hi{constructor(){super(),Vi(this,ic),Vi(this,So),Vi(this,Gr),Vi(this,Ns),Vi(this,Da,void 0),Vi(this,zt,null),Vi(this,dl,e=>{const{metaKey:t,altKey:i,key:a}=e;if(t||i||!Mv.includes(a)){this.removeEventListener("keyup",kt(this,zt));return}this.addEventListener("keyup",kt(this,zt))}),tc(this,Da,this.shadowRoot.querySelector("slot")),kt(this,Da).innerHTML=`${kd(this)}`}static get observedAttributes(){return[...super.observedAttributes,...Qh,"disabled"]}connectedCallback(){const{style:e}=Ae(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",R("playback time")),Ri(this,Gr,Os).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),Ri(this,So,ac).call(this),super.disconnectedCallback()}attributeChangedCallback(e,t,i){_y(this),Qh.includes(e)?this.update():e==="disabled"&&i!==t?i==null?Ri(this,Gr,Os).call(this):Ri(this,Ns,Ad).call(this):e===Ai.NO_TOGGLE&&i!==t&&(this.noToggle?Ri(this,Ns,Ad).call(this):Ri(this,Gr,Os).call(this)),super.attributeChangedCallback(e,t,i)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return K(this,Ai.REMAINING)}set remaining(e){V(this,Ai.REMAINING,e)}get showDuration(){return K(this,Ai.SHOW_DURATION)}set showDuration(e){V(this,Ai.SHOW_DURATION,e)}get noToggle(){return K(this,Ai.NO_TOGGLE)}set noToggle(e){V(this,Ai.NO_TOGGLE,e)}get mediaDuration(){return ie(this,c.MEDIA_DURATION)}set mediaDuration(e){ce(this,c.MEDIA_DURATION,e)}get mediaCurrentTime(){return ie(this,c.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){ce(this,c.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(c.MEDIA_SEEKABLE);if(e)return e.split(":").map(t=>+t)}set mediaSeekable(e){if(e==null){this.removeAttribute(c.MEDIA_SEEKABLE);return}this.setAttribute(c.MEDIA_SEEKABLE,e.join(":"))}update(){const e=kd(this);fy(this),e!==kt(this,Da).innerHTML&&(kt(this,Da).innerHTML=e)}};Da=new WeakMap;zt=new WeakMap;dl=new WeakMap;ic=new WeakSet;Dv=function(){kt(this,zt)||(tc(this,zt,e=>{const{key:t}=e;if(!Mv.includes(t)){this.removeEventListener("keyup",kt(this,zt));return}this.toggleTimeDisplay()}),this.addEventListener("keydown",kt(this,dl)),this.addEventListener("click",this.toggleTimeDisplay))};So=new WeakSet;ac=function(){kt(this,zt)&&(this.removeEventListener("keyup",kt(this,zt)),this.removeEventListener("keydown",kt(this,dl)),this.removeEventListener("click",this.toggleTimeDisplay),tc(this,zt,null))};Gr=new WeakSet;Os=function(){!this.noToggle&&!this.hasAttribute("disabled")&&(this.setAttribute("role","button"),this.enable(),Ri(this,ic,Dv).call(this))};Ns=new WeakSet;Ad=function(){this.removeAttribute("role"),this.disable(),Ri(this,So,ac).call(this)};xv.getSlotTemplateHTML=Ey;f.customElements.get("media-time-display")||f.customElements.define("media-time-display",xv);var Ov=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ie=(e,t,i)=>(Ov(e,t,"read from private field"),i?i.call(e):t.get(e)),Lt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Xe=(e,t,i,a)=>(Ov(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),gy=(e,t,i,a)=>({set _(r){Xe(e,t,r,i)},get _(){return Ie(e,t,a)}}),Ma,Ps,xa,zr,Us,$s,Hs,Oa,Zi,Bs,by=class{constructor(e,t,i){Lt(this,Ma,void 0),Lt(this,Ps,void 0),Lt(this,xa,void 0),Lt(this,zr,void 0),Lt(this,Us,void 0),Lt(this,$s,void 0),Lt(this,Hs,void 0),Lt(this,Oa,void 0),Lt(this,Zi,0),Lt(this,Bs,(a=performance.now())=>{Xe(this,Zi,requestAnimationFrame(Ie(this,Bs))),Xe(this,zr,performance.now()-Ie(this,xa));const r=1e3/this.fps;if(Ie(this,zr)>r){Xe(this,xa,a-Ie(this,zr)%r);const n=1e3/((a-Ie(this,Ps))/++gy(this,Us)._),s=(a-Ie(this,$s))/1e3/this.duration;let o=Ie(this,Hs)+s*this.playbackRate;o-Ie(this,Ma).valueAsNumber>0?Xe(this,Oa,this.playbackRate/this.duration/n):(Xe(this,Oa,.995*Ie(this,Oa)),o=Ie(this,Ma).valueAsNumber+Ie(this,Oa)),this.callback(o)}}),Xe(this,Ma,e),this.callback=t,this.fps=i}start(){Ie(this,Zi)===0&&(Xe(this,xa,performance.now()),Xe(this,Ps,Ie(this,xa)),Xe(this,Us,0),Ie(this,Bs).call(this))}stop(){Ie(this,Zi)!==0&&(cancelAnimationFrame(Ie(this,Zi)),Xe(this,Zi,0))}update({start:e,duration:t,playbackRate:i}){const a=e-Ie(this,Ma).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),Xe(this,Hs,e),Xe(this,$s,performance.now()),this.duration=t,this.playbackRate=i}};Ma=new WeakMap;Ps=new WeakMap;xa=new WeakMap;zr=new WeakMap;Us=new WeakMap;$s=new WeakMap;Hs=new WeakMap;Oa=new WeakMap;Zi=new WeakMap;Bs=new WeakMap;var rc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ne=(e,t,i)=>(rc(e,t,"read from private field"),i?i.call(e):t.get(e)),be=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},st=(e,t,i,a)=>(rc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dt=(e,t,i)=>(rc(e,t,"access private method"),i),Na,Li,Io,cn,Ro,Ws,Sn,In,Pa,Ua,Qr,wd,Nv,Sd,Lo,nc,Co,sc,Do,oc,Id,Pv,Rn,Mo,Rd,Uv,yy=e=>{const t=e.range,i=ln(+$v(e)),a=ln(+e.mediaSeekableEnd),r=i&&a?R("{currentTime} of {totalTime}",{currentTime:i,totalTime:a}):R("video not loaded, unknown time.");t.setAttribute("aria-valuetext",r)};function Ty(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${c.MEDIA_PREVIEW_IMAGE}], [${c.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${c.MEDIA_PREVIEW_IMAGE}], [${c.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${c.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${c.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${c.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${c.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${c.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${c.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${c.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${c.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${c.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${c.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${c.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${c.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${Gh.shadowRootOptions.mode}">
            ${Gh.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}var Qn=(e,t=e.mediaCurrentTime)=>{const i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(t-i)/(a-i);return Math.max(0,Math.min(r,1))},$v=(e,t=e.range.valueAsNumber)=>{const i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i},lc=class extends fr{constructor(){super(),be(this,wd),be(this,Lo),be(this,Co),be(this,Do),be(this,Id),be(this,Rn),be(this,Rd),be(this,Na,null),be(this,Li,void 0),be(this,Io,void 0),be(this,cn,void 0),be(this,Ro,void 0),be(this,Ws,void 0),be(this,Sn,void 0),be(this,In,void 0),be(this,Pa,void 0),be(this,Ua,void 0),be(this,Qr,()=>{dt(this,wd,Nv).call(this)?ne(this,Li).start():ne(this,Li).stop()}),be(this,Sd,t=>{this.dragging||(ku(t)&&(this.range.valueAsNumber=t),ne(this,Ua)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),st(this,Io,this.shadowRoot.querySelectorAll('[part~="box"]')),st(this,Ro,this.shadowRoot.querySelector('[part~="preview-box"]')),st(this,Ws,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);st(this,Sn,parseInt(e.getPropertyValue("--media-box-padding-left"))),st(this,In,parseInt(e.getPropertyValue("--media-box-padding-right"))),st(this,Li,new by(this.range,ne(this,Sd),60))}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PAUSED,c.MEDIA_DURATION,c.MEDIA_SEEKABLE,c.MEDIA_CURRENT_TIME,c.MEDIA_PREVIEW_IMAGE,c.MEDIA_PREVIEW_TIME,c.MEDIA_PREVIEW_CHAPTER,c.MEDIA_BUFFERED,c.MEDIA_PLAYBACK_RATE,c.MEDIA_LOADING,c.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",R("seek")),ne(this,Qr).call(this),st(this,Na,this.getRootNode()),(e=ne(this,Na))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),ne(this,Li).stop(),(e=ne(this,Na))==null||e.removeEventListener("transitionstart",this),st(this,Na,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===c.MEDIA_CURRENT_TIME||e===c.MEDIA_PAUSED||e===c.MEDIA_ENDED||e===c.MEDIA_LOADING||e===c.MEDIA_DURATION||e===c.MEDIA_SEEKABLE?(ne(this,Li).update({start:Qn(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),ne(this,Qr).call(this),yy(this)):e===c.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===c.MEDIA_DURATION||e===c.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=ne(this,Pa),this.updateBar()))}get mediaChaptersCues(){return ne(this,Pa)}set mediaChaptersCues(e){var t;st(this,Pa,e),this.updateSegments((t=ne(this,Pa))==null?void 0:t.map(i=>({start:Qn(this,i.startTime),end:Qn(this,i.endTime)})))}get mediaPaused(){return K(this,c.MEDIA_PAUSED)}set mediaPaused(e){V(this,c.MEDIA_PAUSED,e)}get mediaLoading(){return K(this,c.MEDIA_LOADING)}set mediaLoading(e){V(this,c.MEDIA_LOADING,e)}get mediaDuration(){return ie(this,c.MEDIA_DURATION)}set mediaDuration(e){ce(this,c.MEDIA_DURATION,e)}get mediaCurrentTime(){return ie(this,c.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){ce(this,c.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return ie(this,c.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ce(this,c.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(c.MEDIA_BUFFERED);return e?e.split(" ").map(t=>t.split(":").map(i=>+i)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(c.MEDIA_BUFFERED);return}const t=e.map(i=>i.join(":")).join(" ");this.setAttribute(c.MEDIA_BUFFERED,t)}get mediaSeekable(){const e=this.getAttribute(c.MEDIA_SEEKABLE);if(e)return e.split(":").map(t=>+t)}set mediaSeekable(e){if(e==null){this.removeAttribute(c.MEDIA_SEEKABLE);return}this.setAttribute(c.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,t=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return t}get mediaSeekableStart(){var e;const[t=0]=(e=this.mediaSeekable)!=null?e:[];return t}get mediaPreviewImage(){return oe(this,c.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){ae(this,c.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return ie(this,c.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){ce(this,c.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return K(this,c.MEDIA_ENDED)}set mediaEnded(e){V(this,c.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const t=this.mediaBuffered;if(!t.length)return;let i;if(this.mediaEnded)i=1;else{const r=this.mediaCurrentTime,[,n=this.mediaSeekableStart]=(e=t.find(([s,o])=>s<=r&&r<=o))!=null?e:[];i=Qn(this,n)}const{style:a}=Ae(this.shadowRoot,"#buffered");a.setProperty("width",`${i*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const e=Ae(this.shadowRoot,"#current-rail"),t=Ae(this.shadowRoot,'[part~="current-box"]'),i=dt(this,Lo,nc).call(this,ne(this,Ws)),a=dt(this,Co,sc).call(this,i,this.range.valueAsNumber),r=dt(this,Do,oc).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":dt(this,Rd,Uv).call(this);break;case"pointermove":dt(this,Id,Pv).call(this,e);break;case"pointerup":ne(this,Ua)&&st(this,Ua,!1);break;case"pointerdown":st(this,Ua,!0);break;case"pointerleave":dt(this,Rn,Mo).call(this,null);break;case"transitionstart":vi(e.target,this)&&setTimeout(()=>ne(this,Qr).call(this),0);break}}};Na=new WeakMap;Li=new WeakMap;Io=new WeakMap;cn=new WeakMap;Ro=new WeakMap;Ws=new WeakMap;Sn=new WeakMap;In=new WeakMap;Pa=new WeakMap;Ua=new WeakMap;Qr=new WeakMap;wd=new WeakSet;Nv=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&Bp(this)};Sd=new WeakMap;Lo=new WeakSet;nc=function(e){var t;const i=((t=this.getAttribute("bounds")?pr(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth;return{box:{width:r,min:-(a.left-i.left-r/2),max:i.right-a.left-r/2},bounds:i,range:a}};Co=new WeakSet;sc=function(e,t){let i=`${t*100}%`;const{width:a,min:r,max:n}=e.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(n)){const s=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${s})`}return i};Do=new WeakSet;oc=function(e,t){const{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+ne(this,Sn)){const s=e.range.left-e.bounds.left-ne(this,Sn);return`${n-i/2+s}px`}if(n>r-ne(this,In)){const s=e.bounds.right-e.range.right-ne(this,In);return`${n+i/2-s-e.range.width}px`}return 0};Id=new WeakSet;Pv=function(e){const t=[...ne(this,Io)].some(p=>e.composedPath().includes(p));if(!this.dragging&&(t||!e.composedPath().includes(this))){dt(this,Rn,Mo).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=Ae(this.shadowRoot,"#preview-rail"),r=Ae(this.shadowRoot,'[part~="preview-box"]'),n=dt(this,Lo,nc).call(this,ne(this,Ro));let s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));const o=dt(this,Co,sc).call(this,n,s),l=dt(this,Do,oc).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`);const u=Math.round(ne(this,cn))-Math.round(s*i);Math.abs(u)<1&&s>.01&&s<.99||(st(this,cn,s*i),dt(this,Rn,Mo).call(this,ne(this,cn)))};Rn=new WeakSet;Mo=function(e){this.dispatchEvent(new f.CustomEvent(L.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))};Rd=new WeakSet;Uv=function(){ne(this,Li).stop();const e=$v(this);this.dispatchEvent(new f.CustomEvent(L.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))};lc.shadowRootOptions={mode:"open"};lc.getContainerTemplateHTML=Ty;f.customElements.get("media-time-range")||f.customElements.define("media-time-range",lc);var Ay=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Zh=(e,t,i)=>(Ay(e,t,"read from private field"),i?i.call(e):t.get(e)),ky=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Fs,wy=1,Sy=e=>e.mediaMuted?0:e.mediaVolume,Iy=e=>`${Math.round(e*100)}%`,Ry=class extends fr{constructor(){super(...arguments),ky(this,Fs,()=>{const e=this.range.value,t=new f.CustomEvent(L.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_VOLUME,c.MEDIA_MUTED,c.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",R("volume")),this.range.addEventListener("input",Zh(this,Fs))}disconnectedCallback(){this.range.removeEventListener("input",Zh(this,Fs)),super.disconnectedCallback()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===c.MEDIA_VOLUME||e===c.MEDIA_MUTED)&&(this.range.valueAsNumber=Sy(this),this.range.setAttribute("aria-valuetext",Iy(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return ie(this,c.MEDIA_VOLUME,wy)}set mediaVolume(e){ce(this,c.MEDIA_VOLUME,e)}get mediaMuted(){return K(this,c.MEDIA_MUTED)}set mediaMuted(e){V(this,c.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return oe(this,c.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){ae(this,c.MEDIA_VOLUME_UNAVAILABLE,e)}};Fs=new WeakMap;f.customElements.get("media-volume-range")||f.customElements.define("media-volume-range",Ry);function Ly(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${c.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `}function Cy(){return R("Loop")}var dc=class extends Ce{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=((e=this.shadowRoot)==null?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=R("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===c.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return K(this,c.MEDIA_LOOP)}set mediaLoop(e){V(this,c.MEDIA_LOOP,e)}handleClick(){const e=!this.mediaLoop,t=new f.CustomEvent(L.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}};dc.getSlotTemplateHTML=Ly;dc.getTooltipContentHTML=Cy;f.customElements.get("media-loop-button")||f.customElements.define("media-loop-button",dc);var Hv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},B=(e,t,i)=>(Hv(e,t,"read from private field"),i?i.call(e):t.get(e)),Ft=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},di=(e,t,i,a)=>(Hv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),$a,Ks,ji,Zr,ki,wi,Si,Xi,Ha,Vs,gt,jh=1,Xh=0,Dy=1,My={processCallback(e,t,i){if(i){for(const[a,r]of t)if(a in i){const n=i[a];typeof n=="boolean"&&r instanceof St&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof St?r.element[r.attributeName]=n:r.value=n}}}},ul=class extends f.DocumentFragment{constructor(e,t,i=My){var a;super(),Ft(this,$a,void 0),Ft(this,Ks,void 0),this.append(e.content.cloneNode(!0)),di(this,$a,Bv(this)),di(this,Ks,i),(a=i.createCallback)==null||a.call(i,this,B(this,$a),t),i.processCallback(this,B(this,$a),t)}update(e){B(this,Ks).processCallback(this,B(this,$a),e)}};$a=new WeakMap;Ks=new WeakMap;var Bv=(e,t=[])=>{let i,a;for(const r of e.attributes||[])if(r.value.includes("{{")){const n=new Oy;for([i,a]of em(r.value))if(!i)n.append(a);else{const s=new St(e,r.name,r.namespaceURI);n.append(s),t.push([a,s])}r.value=n.toString()}for(const r of e.childNodes)if(r.nodeType===jh&&!(r instanceof HTMLTemplateElement))Bv(r,t);else{const n=r.data;if(r.nodeType===jh||n.includes("{{")){const s=[];if(n)for([i,a]of em(n))if(!i)s.push(new Text(a));else{const o=new Er(e);s.push(o),t.push([a,o])}else if(r instanceof HTMLTemplateElement){const o=new Kv(e,r);s.push(o),t.push([o.expression,o])}r.replaceWith(...s.flatMap(o=>o.replacementNodes||[o]))}}return t},Jh={},em=e=>{let t="",i=0,a=Jh[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)n==="{"&&e[r+1]==="{"&&e[r-1]!=="\\"&&e[r+2]&&++i==1?(t&&a.push([Xh,t]),t="",r++):n==="}"&&e[r+1]==="}"&&e[r-1]!=="\\"&&!--i?(a.push([Dy,t.trim()]),t="",r++):t+=n||"";return t&&a.push([Xh,(i>0?"{{":"")+t]),Jh[e]=a},xy=11,Wv=class{get value(){return""}set value(e){}toString(){return this.value}},Fv=new WeakMap,Oy=class{constructor(){Ft(this,ji,[])}[Symbol.iterator](){return B(this,ji).values()}get length(){return B(this,ji).length}item(e){return B(this,ji)[e]}append(...e){for(const t of e)t instanceof St&&Fv.set(t,this),B(this,ji).push(t)}toString(){return B(this,ji).join("")}};ji=new WeakMap;var St=class extends Wv{constructor(e,t,i){super(),Ft(this,Xi),Ft(this,Zr,""),Ft(this,ki,void 0),Ft(this,wi,void 0),Ft(this,Si,void 0),di(this,ki,e),di(this,wi,t),di(this,Si,i)}get attributeName(){return B(this,wi)}get attributeNamespace(){return B(this,Si)}get element(){return B(this,ki)}get value(){return B(this,Zr)}set value(e){B(this,Zr)!==e&&(di(this,Zr,e),!B(this,Xi,Ha)||B(this,Xi,Ha).length===1?e==null?B(this,ki).removeAttributeNS(B(this,Si),B(this,wi)):B(this,ki).setAttributeNS(B(this,Si),B(this,wi),e):B(this,ki).setAttributeNS(B(this,Si),B(this,wi),B(this,Xi,Ha).toString()))}get booleanValue(){return B(this,ki).hasAttributeNS(B(this,Si),B(this,wi))}set booleanValue(e){if(!B(this,Xi,Ha)||B(this,Xi,Ha).length===1)this.value=e?"":null;else throw new DOMException("Value is not fully templatized")}};Zr=new WeakMap;ki=new WeakMap;wi=new WeakMap;Si=new WeakMap;Xi=new WeakSet;Ha=function(){return Fv.get(this)};var Er=class extends Wv{constructor(e,t){super(),Ft(this,Vs,void 0),Ft(this,gt,void 0),di(this,Vs,e),di(this,gt,t?[...t]:[new Text])}get replacementNodes(){return B(this,gt)}get parentNode(){return B(this,Vs)}get nextSibling(){return B(this,gt)[B(this,gt).length-1].nextSibling}get previousSibling(){return B(this,gt)[0].previousSibling}get value(){return B(this,gt).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){const t=e.flat().flatMap(i=>i==null?[new Text]:i.forEach?[...i]:i.nodeType===xy?[...i.childNodes]:i.nodeType?[i]:[new Text(i)]);t.length||t.push(new Text),di(this,gt,Ny(B(this,gt)[0].parentNode,B(this,gt),t,this.nextSibling))}};Vs=new WeakMap;gt=new WeakMap;var Kv=class extends Er{constructor(e,t){const i=t.getAttribute("directive")||t.getAttribute("type");let a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}};function Ny(e,t,i,a=null){let r=0,n,s,o,l=i.length,u=t.length;for(;r<l&&r<u&&t[r]==i[r];)r++;for(;r<l&&r<u&&i[l-1]==t[u-1];)a=i[--u,--l];if(r==u)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<u;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}var tm={string:e=>String(e)},Vv=class{constructor(e){this.template=e,this.state=void 0}},ra=new WeakMap,na=new WeakMap,Ld={partial:(e,t)=>{t[e.expression]=new Vv(e.template)},if:(e,t)=>{var i;if(qv(e.expression,t))if(ra.get(e)!==e.template){ra.set(e,e.template);const a=new ul(e.template,t,uc);e.replace(a),na.set(e,a)}else(i=na.get(e))==null||i.update(t);else e.replace(""),ra.delete(e),na.delete(e)}},Py=Object.keys(Ld),uc={processCallback(e,t,i){var a,r;if(i)for(const[n,s]of t){if(s instanceof Kv){if(!s.directive){const l=Py.find(u=>s.template.hasAttribute(u));l&&(s.directive=l,s.expression=s.template.getAttribute(l))}(a=Ld[s.directive])==null||a.call(Ld,s,i);continue}let o=qv(n,i);if(o instanceof Vv){ra.get(s)!==o.template?(ra.set(s,o.template),o=new ul(o.template,o.state,uc),s.value=o,na.set(s,o)):(r=na.get(s))==null||r.update(o.state);continue}o?(s instanceof St&&s.attributeName.startsWith("aria-")&&(o=String(o)),s instanceof St?typeof o=="boolean"?s.booleanValue=o:typeof o=="function"?s.element[s.attributeName]=o:s.value=o:(s.value=o,ra.delete(s),na.delete(s))):s instanceof St?s.value=void 0:(s.value=void 0,ra.delete(s),na.delete(s))}}},im={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>e??t,"|":(e,t)=>{var i;return(i=tm[t])==null?void 0:i.call(tm,e)}};function Uy(e){return $y(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:t})=>t!=="ws")}function qv(e,t={}){var i,a,r,n,s,o,l;const u=Uy(e);if(u.length===0||u.some(({type:p})=>!p))return Ir(e);if(((i=u[0])==null?void 0:i.token)===">"){const p=t[(a=u[1])==null?void 0:a.token];if(!p)return Ir(e);const m={...t};p.state=m;const d=u.slice(2);for(let h=0;h<d.length;h+=3){const v=(r=d[h])==null?void 0:r.token,T=(n=d[h+1])==null?void 0:n.token,b=(s=d[h+2])==null?void 0:s.token;v&&T==="="&&(m[v]=Rr(b,t))}return p}if(u.length===1)return Zn(u[0])?Rr(u[0].token,t):Ir(e);if(u.length===2){const p=im[(o=u[0])==null?void 0:o.token];return!p||!Zn(u[1])?Ir(e):p(Rr(u[1].token,t))}if(u.length===3){const p=(l=u[1])==null?void 0:l.token,m=im[p];if(!m||!Zn(u[0])||!Zn(u[2]))return Ir(e);const d=Rr(u[0].token,t);return p==="|"?m(d,u[2].token):m(d,Rr(u[2].token,t))}}function Ir(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function Zn({type:e}){return["number","boolean","string","param"].includes(e)}function Rr(e,t){const i=e[0],a=e.slice(-1);return e==="true"||e==="false"?e==="true":i===a&&["'",'"'].includes(i)?e.slice(1,-1):Cp(e)?parseFloat(e):t[e]}function $y(e,t){let i,a,r;const n=[];for(;e;){r=null,i=e.length;for(const s in t)a=t[s].exec(e),a&&a.index<i&&(r={token:a[0],type:s,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n}var cc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ii=(e,t,i)=>(cc(e,t,"read from private field"),i?i.call(e):t.get(e)),qi=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oi=(e,t,i,a)=>(cc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Ml=(e,t,i)=>(cc(e,t,"access private method"),i),er,qs,tr,Ba,Cd,Yv,Ys,Dd,jr,xl={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},Gv=ge.createElement("template");Gv.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;var cl=class extends f.HTMLElement{constructor(){super(),qi(this,Cd),qi(this,Ys),qi(this,er,void 0),qi(this,qs,void 0),qi(this,tr,void 0),qi(this,Ba,void 0),qi(this,jr,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),oi(this,Ba,new MutationObserver(e=>{var t;this.mediaController&&!((t=this.mediaController)!=null&&t.breakpointsComputed)||e.some(i=>{const a=i.target;return a===this?!0:a.localName!=="media-controller"?!1:!!(xl[i.attributeName]||i.attributeName.startsWith("breakpoint"))})&&this.render()})),oi(this,jr,this.render.bind(this)),Ml(this,Cd,Yv).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return(e=Ii(this,er))!=null?e:this.constructor.template}set template(e){if(e===null){this.removeAttribute("template");return}typeof e=="string"?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(oi(this,er,e),oi(this,tr,null),this.createRenderer())}get props(){var e,t,i;const a=[...Array.from((t=(e=this.mediaController)==null?void 0:e.attributes)!=null?t:[]).filter(({name:n})=>xl[n]||n.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(const n of a){const s=(i=xl[n.name])!=null?i:Bb(n.name);let{value:o}=n;o!=null?(Cp(o)&&(o=parseFloat(o)),r[s]=o===""?!0:o):r[s]=!1}return r}attributeChangedCallback(e,t,i){e==="template"&&t!=i&&Ml(this,Ys,Dd).call(this)}connectedCallback(){this.addEventListener(Qt.BREAKPOINTS_COMPUTED,Ii(this,jr)),Ii(this,Ba).observe(this,{attributes:!0}),Ii(this,Ba).observe(this.renderRoot,{attributes:!0,subtree:!0}),Ml(this,Ys,Dd).call(this)}disconnectedCallback(){this.removeEventListener(Qt.BREAKPOINTS_COMPUTED,Ii(this,jr)),Ii(this,Ba).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==Ii(this,qs)&&(oi(this,qs,this.template),this.renderer=new ul(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(Gv.content.cloneNode(!0),this.renderer))}render(){var e;(e=this.renderer)==null||e.update(this.props)}};er=new WeakMap;qs=new WeakMap;tr=new WeakMap;Ba=new WeakMap;Cd=new WeakSet;Yv=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}};Ys=new WeakSet;Dd=function(){var e;const t=this.getAttribute("template");if(!t||t===Ii(this,tr))return;const i=this.getRootNode(),a=(e=i?.getElementById)==null?void 0:e.call(i,t);if(a){oi(this,tr,t),oi(this,er,a),this.createRenderer();return}Hy(t)&&(oi(this,tr,t),By(t).then(r=>{const n=ge.createElement("template");n.innerHTML=r,oi(this,er,n),this.createRenderer()}).catch(console.error))};jr=new WeakMap;cl.observedAttributes=["template"];cl.processor=uc;function Hy(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;const t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch{return!1}return!0}async function By(e){const t=await fetch(e);if(t.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}f.customElements.get("media-theme")||f.customElements.define("media-theme",cl);function Wy({anchor:e,floating:t,placement:i}){const{x:a,y:r}=Vy(Fy({anchor:e,floating:t}),i);return{x:a,y:r}}function Fy({anchor:e,floating:t}){return{anchor:Ky(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}function Ky(e,t){var i;const a=e.getBoundingClientRect(),r=(i=t?.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}function Vy({anchor:e,floating:t},i){const a=qy(i)==="x"?"y":"x",r=a==="y"?"height":"width",n=zv(i),s=e.x+e.width/2-t.width/2,o=e.y+e.height/2-t.height/2,l=e[r]/2-t[r]/2;let u;switch(n){case"top":u={x:s,y:e.y-t.height};break;case"bottom":u={x:s,y:e.y+e.height};break;case"right":u={x:e.x+e.width,y:o};break;case"left":u={x:e.x-t.width,y:o};break;default:u={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":u[a]-=l;break;case"end":u[a]+=l;break}return u}function zv(e){return e.split("-")[0]}function qy(e){return["top","bottom"].includes(zv(e))?"y":"x"}var hc=class extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}},Yy=class extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}},mc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},G=(e,t,i)=>(mc(e,t,"read from private field"),i?i.call(e):t.get(e)),X=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ot=(e,t,i,a)=>(mc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),J=(e,t,i)=>(mc(e,t,"access private method"),i),Ht,Ni,hi,Gs,Xr,da,Ln,Md,Qv,xo,pc,Oo,zs,xd,Od,Zv,Nd,jv,Pd,Xv,ir,ar,rr,Cn,No,vc,Ud,Jv,fc,ef,$d,tf,Ec,af,Hd,rf,Bd,nf,hn,Po,Wd,sf,mn,Uo,Qs,Fd;function hr({type:e,text:t,value:i,checked:a}){const r=ge.createElement("media-chrome-menu-item");r.type=e??"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;const n=ge.createElement("span");return n.textContent=t,r.append(n),r}function ua(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if(i?.nodeName=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}function Gy(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `}var Yi={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"},ht=class extends f.HTMLElement{constructor(){if(super(),X(this,Md),X(this,xo),X(this,zs),X(this,Od),X(this,Nd),X(this,Pd),X(this,rr),X(this,No),X(this,Ud),X(this,fc),X(this,$d),X(this,Ec),X(this,Hd),X(this,Bd),X(this,hn),X(this,Wd),X(this,mn),X(this,Qs),X(this,Ht,null),X(this,Ni,null),X(this,hi,null),X(this,Gs,new Set),X(this,Xr,void 0),X(this,da,!1),X(this,Ln,null),X(this,Oo,()=>{const e=G(this,Gs),t=new Set(this.items);for(const i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(const i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));ot(this,Gs,t)}),X(this,ir,()=>{J(this,rr,Cn).call(this),J(this,No,vc).call(this,!1)}),X(this,ar,()=>{J(this,rr,Cn).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),ot(this,Xr,new MutationObserver(G(this,Oo)))}static get observedAttributes(){return[Yi.DISABLED,Yi.HIDDEN,Yi.STYLE,Yi.ANCHOR,z.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":J(this,Md,Qv).call(this,e);break;case"invoke":J(this,Od,Zv).call(this,e);break;case"click":J(this,Ud,Jv).call(this,e);break;case"toggle":J(this,$d,tf).call(this,e);break;case"focusout":J(this,Hd,rf).call(this,e);break;case"keydown":J(this,Bd,nf).call(this,e);break}}connectedCallback(){var e,t;G(this,Xr).observe(this.defaultSlot,{childList:!0}),ot(this,Ln,Iu(this.shadowRoot,":host")),J(this,zs,xd).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),ot(this,Ht,td(this)),(t=(e=G(this,Ht))==null?void 0:e.associateElement)==null||t.call(e,this),this.hidden||(lr(Dn(this),G(this,ir)),lr(this,G(this,ar))),J(this,xo,pc).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,t;G(this,Xr).disconnect(),dr(Dn(this),G(this,ir)),dr(this,G(this,ar)),this.disable(),(t=(e=G(this,Ht))==null?void 0:e.unassociateElement)==null||t.call(e,this),ot(this,Ht,null),ot(this,Ni,null),ot(this,hi,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,t,i){var a,r,n,s;e===Yi.HIDDEN&&i!==t?(G(this,da)||ot(this,da,!0),this.hidden?J(this,Pd,Xv).call(this):J(this,Nd,jv).call(this),this.dispatchEvent(new Yy({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===z.MEDIA_CONTROLLER?(t&&((r=(a=G(this,Ht))==null?void 0:a.unassociateElement)==null||r.call(a,this),ot(this,Ht,null)),i&&this.isConnected&&(ot(this,Ht,td(this)),(s=(n=G(this,Ht))==null?void 0:n.associateElement)==null||s.call(n,this))):e===Yi.DISABLED&&i!==t?i==null?this.enable():this.disable():e===Yi.STYLE&&i!==t&&J(this,zs,xd).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?(e=Xo(this))==null?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(zy)}get radioGroupItems(){return this.items.filter(e=>e.role==="menuitemradio")}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return(t=(e=this.checkedItems[0])==null?void 0:e.value)!=null?t:""}set value(e){const t=this.items.find(i=>i.value===e);t&&J(this,Qs,Fd).call(this,t)}focus(){if(ot(this,Ni,Su()),this.items.length){J(this,mn,Uo).call(this,this.items[0]),this.items[0].focus();return}this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]')?.focus()}handleSelect(e){var t;const i=J(this,hn,Po).call(this,e);i&&(J(this,Qs,Fd).call(this,i,i.type==="checkbox"),G(this,hi)&&!this.hidden&&((t=G(this,Ni))==null||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;const{key:a}=e,r=this.items,n=(i=(t=J(this,hn,Po).call(this,e))!=null?t:J(this,Wd,sf).call(this))!=null?i:r[0],s=r.indexOf(n);let o=Math.max(0,s);a==="ArrowDown"?o++:a==="ArrowUp"?o--:e.key==="Home"?o=0:e.key==="End"&&(o=r.length-1),o<0&&(o=r.length-1),o>r.length-1&&(o=0),J(this,mn,Uo).call(this,r[o]),r[o].focus()}};Ht=new WeakMap;Ni=new WeakMap;hi=new WeakMap;Gs=new WeakMap;Xr=new WeakMap;da=new WeakMap;Ln=new WeakMap;Md=new WeakSet;Qv=function(e){const t=e.target;for(const i of t.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();["header","title"].includes(t.name)&&J(this,xo,pc).call(this),t.name||G(this,Oo).call(this)};xo=new WeakSet;pc=function(){const e=this.shadowRoot.querySelector('slot[name="header"]');e.hidden=this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length===0&&e.assignedNodes().length===0};Oo=new WeakMap;zs=new WeakSet;xd=function(){var e;const t=this.shadowRoot.querySelector("#layout-row"),i=(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:e.trim();t.setAttribute("media",i==="row"?"":"width:0")};Od=new WeakSet;Zv=function(e){ot(this,hi,e.relatedTarget),vi(this,e.relatedTarget)||(this.hidden=!this.hidden)};Nd=new WeakSet;jv=function(){var e;(e=G(this,hi))==null||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),lr(Dn(this),G(this,ir)),lr(this,G(this,ar))};Pd=new WeakSet;Xv=function(){var e;(e=G(this,hi))==null||e.setAttribute("aria-expanded","false"),dr(Dn(this),G(this,ir)),dr(this,G(this,ar))};ir=new WeakMap;ar=new WeakMap;rr=new WeakSet;Cn=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:t,y:i}=Wy({anchor:this.anchorElement,floating:this,placement:"top-start"});e??=this.offsetWidth;const a=Dn(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=G(this,Ln);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);const o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),u=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${u}px`)};No=new WeakSet;vc=function(e){const t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=t?.querySelector('[role="menu"]'),{style:a}=G(this,Ln);if(e||a.setProperty("--media-menu-transition-in","none"),i){const r=i.offsetHeight,n=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),J(this,rr,Cn).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),J(this,rr,Cn).call(this);a.removeProperty("--media-menu-transition-in")};Ud=new WeakSet;Jv=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(G(this,fc,ef))){(t=G(this,Ni))==null||t.focus(),this.hidden=!0;return}const i=J(this,hn,Po).call(this,e);!i||i.hasAttribute("disabled")||(J(this,mn,Uo).call(this,i),this.handleSelect(e))};fc=new WeakSet;ef=function(){var e;return(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:e.find(t=>t.matches('button[part~="back"]'))};$d=new WeakSet;tf=function(e){if(e.target===this)return;J(this,Ec,af).call(this);const t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of t)i.invokeTargetElement!=e.target&&e.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new hc({relatedTarget:i}));for(const i of t)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);J(this,No,vc).call(this,!0)};Ec=new WeakSet;af=function(){const e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)};Hd=new WeakSet;rf=function(e){var t;vi(this,e.relatedTarget)||(G(this,da)&&((t=G(this,Ni))==null||t.focus()),G(this,hi)&&G(this,hi)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))};Bd=new WeakSet;nf=function(e){var t,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:u}=e;if(!(o||l||u)&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),s==="Tab"){if(G(this,da)){this.hidden=!0;return}e.shiftKey?(i=(t=this.previousElementSibling)==null?void 0:t.focus)==null||i.call(t):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()}else s==="Escape"?((n=G(this,Ni))==null||n.focus(),G(this,da)&&(this.hidden=!0)):s==="Enter"||s===" "?this.handleSelect(e):this.handleMove(e)};hn=new WeakSet;Po=function(e){return e.composedPath().find(t=>["menuitemradio","menuitemcheckbox"].includes(t.role))};Wd=new WeakSet;sf=function(){return this.items.find(e=>e.tabIndex===0)};mn=new WeakSet;Uo=function(e){for(const t of this.items)t.tabIndex=t===e?0:-1};Qs=new WeakSet;Fd=function(e,t){const i=[...this.checkedItems];e.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((a,r)=>a!=i[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};ht.shadowRootOptions={mode:"open"};ht.getTemplateHTML=Gy;function zy(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(e?.role)}function Dn(e){var t;return(t=e.getAttribute("bounds")?pr(e,`#${e.getAttribute("bounds")}`):qe(e)||e.parentElement)!=null?t:e}f.customElements.get("media-chrome-menu")||f.customElements.define("media-chrome-menu",ht);var _c=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Fe=(e,t,i)=>(_c(e,t,"read from private field"),i?i.call(e):t.get(e)),ei=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ol=(e,t,i,a)=>(_c(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Qa=(e,t,i)=>(_c(e,t,"access private method"),i),Zs,pn,Kd,of,$o,gc,bc,lf,Yt,Wa,Vd,js,qd;function Qy(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `}function Zy(e){return""}var rt={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"},Bi=class extends f.HTMLElement{constructor(){if(super(),ei(this,Kd),ei(this,$o),ei(this,bc),ei(this,js),ei(this,Zs,!1),ei(this,pn,void 0),ei(this,Yt,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const i=this.shadowRoot.querySelector('slot[name="description"]'),a=(e=this.submenuElement.checkedItems)==null?void 0:e[0],r=(t=a?.dataset.description)!=null?t:a?.text,n=ge.createElement("span");n.textContent=r??"",i.replaceChildren(n)}),ei(this,Wa,e=>{const{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",Fe(this,Wa));return}this.handleClick(e)}),ei(this,Vd,e=>{const{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",Fe(this,Wa));return}this.addEventListener("keyup",Fe(this,Wa),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=tt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rt.TYPE,rt.DISABLED,rt.CHECKED,rt.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),Lr(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":Qa(this,Kd,of).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":Fe(this,Vd).call(this,e);break;case"keyup":Fe(this,Wa).call(this,e);break}}attributeChangedCallback(e,t,i){e===rt.CHECKED&&Lr(this)&&!Fe(this,Zs)?this.setAttribute("aria-checked",i!=null?"true":"false"):e===rt.TYPE&&i!==t?this.role="menuitem"+i:e===rt.DISABLED&&i!==t&&(i==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(rt.DISABLED)||this.enable(),this.role="menuitem"+this.type,Ol(this,pn,Yd(this,this.parentNode)),Qa(this,js,qd).call(this),this.submenuElement&&Qa(this,$o,gc).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),Qa(this,js,qd).call(this),Ol(this,pn,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=Xo(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return(e=this.getAttribute(rt.TYPE))!=null?e:""}set type(e){this.setAttribute(rt.TYPE,`${e}`)}get value(){var e;return(e=this.getAttribute(rt.VALUE))!=null?e:this.text}set value(e){this.setAttribute(rt.VALUE,e)}get text(){var e;return((e=this.textContent)!=null?e:"").trim()}get checked(){if(Lr(this))return this.getAttribute("aria-checked")==="true"}set checked(e){Lr(this)&&(Ol(this,Zs,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){Lr(this)||this.invokeTargetElement&&vi(this,e.target)&&this.invokeTargetElement.dispatchEvent(new hc({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}};Zs=new WeakMap;pn=new WeakMap;Kd=new WeakSet;of=function(e){const t=e.target;if(!t?.name)for(const i of t.assignedNodes({flatten:!0}))i instanceof Text&&i.textContent.trim()===""&&i.remove();t.name==="submenu"&&(this.submenuElement?Qa(this,$o,gc).call(this):Qa(this,bc,lf).call(this))};$o=new WeakSet;gc=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",Fe(this,Yt)),this.submenuElement.addEventListener("addmenuitem",Fe(this,Yt)),this.submenuElement.addEventListener("removemenuitem",Fe(this,Yt)),Fe(this,Yt).call(this)};bc=new WeakSet;lf=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",Fe(this,Yt)),this.submenuElement.removeEventListener("addmenuitem",Fe(this,Yt)),this.submenuElement.removeEventListener("removemenuitem",Fe(this,Yt)),Fe(this,Yt).call(this)};Yt=new WeakMap;Wa=new WeakMap;Vd=new WeakMap;js=new WeakSet;qd=function(){var e;const t=(e=Fe(this,pn))==null?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=t[0]);for(const a of t)a.setAttribute("aria-checked","false");i?.setAttribute("aria-checked","true")};Bi.shadowRootOptions={mode:"open"};Bi.getTemplateHTML=Qy;Bi.getSuffixSlotInnerHTML=Zy;function Lr(e){return e.type==="radio"||e.type==="checkbox"}function Yd(e,t){if(!e)return null;const{host:i}=e.getRootNode();return!t&&i?Yd(e,i):t?.items?t:Yd(t,t?.parentNode)}f.customElements.get("media-chrome-menu-item")||f.customElements.define("media-chrome-menu-item",Bi);function jy(e){return`
    ${ht.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `}var df=class extends ht{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:qe(this).querySelector("media-settings-menu-button")}};df.getTemplateHTML=jy;f.customElements.get("media-settings-menu")||f.customElements.define("media-settings-menu",df);function Xy(e){return`
    ${Bi.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function Jy(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}var hl=class extends Bi{};hl.shadowRootOptions={mode:"open"};hl.getTemplateHTML=Xy;hl.getSuffixSlotInnerHTML=Jy;f.customElements.get("media-settings-menu-item")||f.customElements.define("media-settings-menu-item",hl);var _r=class extends Ce{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=Xo(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;(e=this.invokeTargetElement)==null||e.dispatchEvent(new hc({relatedTarget:this}))}};f.customElements.get("media-chrome-menu-button")||f.customElements.define("media-chrome-menu-button",_r);function eT(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `}function tT(){return R("Settings")}var yc=class extends _r{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",R("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:qe(this).querySelector("media-settings-menu")}};yc.getSlotTemplateHTML=eT;yc.getTooltipContentHTML=tT;f.customElements.get("media-settings-menu-button")||f.customElements.define("media-settings-menu-button",yc);var Tc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uf=(e,t,i)=>(Tc(e,t,"read from private field"),i?i.call(e):t.get(e)),jn=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Gd=(e,t,i,a)=>(Tc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Xn=(e,t,i)=>(Tc(e,t,"access private method"),i),Jr,Ho,Xs,zd,Js,Qd,iT=class extends ht{constructor(){super(...arguments),jn(this,Xs),jn(this,Js),jn(this,Jr,[]),jn(this,Ho,void 0)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_AUDIO_TRACK_LIST,c.MEDIA_AUDIO_TRACK_ENABLED,c.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===c.MEDIA_AUDIO_TRACK_ENABLED&&t!==i?this.value=i:e===c.MEDIA_AUDIO_TRACK_LIST&&t!==i&&(Gd(this,Jr,Ub(i??"")),Xn(this,Xs,zd).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Xn(this,Js,Qd))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Xn(this,Js,Qd))}get anchorElement(){var e;return this.anchor!=="auto"?super.anchorElement:(e=qe(this))==null?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return uf(this,Jr)}set mediaAudioTrackList(e){Gd(this,Jr,e),Xn(this,Xs,zd).call(this)}get mediaAudioTrackEnabled(){var e;return(e=oe(this,c.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){ae(this,c.MEDIA_AUDIO_TRACK_ENABLED,e)}};Jr=new WeakMap;Ho=new WeakMap;Xs=new WeakSet;zd=function(){if(uf(this,Ho)===JSON.stringify(this.mediaAudioTrackList))return;Gd(this,Ho,JSON.stringify(this.mediaAudioTrackList));const e=this.mediaAudioTrackList;this.defaultSlot.textContent="",e.sort((t,i)=>t.id.localeCompare(i.id,void 0,{numeric:!0}));for(const t of e){const i=hr({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});i.prepend(ua(this,"checked-indicator")),this.defaultSlot.append(i)}};Js=new WeakSet;Qd=function(){if(this.value==null)return;const e=new f.CustomEvent(L.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};f.customElements.get("media-audio-track-menu")||f.customElements.define("media-audio-track-menu",iT);var aT=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function rT(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${aT}</slot>
  `}function nT(){return R("Audio")}var am=e=>{const t=R("Audio");e.setAttribute("aria-label",t)},Ac=class extends _r{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_AUDIO_TRACK_ENABLED,c.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),am(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===c.MEDIA_LANG&&am(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=qe(this))==null?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return(e=oe(this,c.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){ae(this,c.MEDIA_AUDIO_TRACK_ENABLED,e)}};Ac.getSlotTemplateHTML=rT;Ac.getTooltipContentHTML=nT;f.customElements.get("media-audio-track-menu-button")||f.customElements.define("media-audio-track-menu-button",Ac);var kc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sT=(e,t,i)=>(kc(e,t,"read from private field"),i?i.call(e):t.get(e)),Nl=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oT=(e,t,i,a)=>(kc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Jn=(e,t,i)=>(kc(e,t,"access private method"),i),Bo,eo,Zd,to,jd,lT=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function dT(e){return`
    ${ht.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${lT}</slot>
  `}var cf=class extends ht{constructor(){super(...arguments),Nl(this,eo),Nl(this,to),Nl(this,Bo,void 0)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_SUBTITLES_LIST,c.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===c.MEDIA_SUBTITLES_LIST&&t!==i?Jn(this,eo,Zd).call(this):e===c.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i||"",Jn(this,eo,Zd).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Jn(this,to,jd))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Jn(this,to,jd))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:qe(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return rm(this,c.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){nm(this,c.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return rm(this,c.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){nm(this,c.MEDIA_SUBTITLES_SHOWING,e)}};Bo=new WeakMap;eo=new WeakSet;Zd=function(){var e;const t=sT(this,Bo)!==JSON.stringify(this.mediaSubtitlesList),i=this.value!==this.getAttribute(c.MEDIA_SUBTITLES_SHOWING);if(!t&&!i)return;oT(this,Bo,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const a=!this.value,r=hr({type:"radio",text:this.formatMenuItemText(R("Off")),value:"off",checked:a});r.prepend(ua(this,"checked-indicator")),this.defaultSlot.append(r);const n=this.mediaSubtitlesList;for(const s of n){const o=hr({type:"radio",text:this.formatMenuItemText(s.label,s),value:nd(s),checked:this.value==nd(s)});o.prepend(ua(this,"checked-indicator")),((e=s.kind)!=null?e:"subs")==="captions"&&o.append(ua(this,"captions-indicator")),this.defaultSlot.append(o)}};to=new WeakSet;jd=function(){const e=this.mediaSubtitlesShowing,t=this.getAttribute(c.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if(e?.length&&i&&this.dispatchEvent(new f.CustomEvent(L.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;const a=new f.CustomEvent(L.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};cf.getTemplateHTML=dT;var rm=(e,t)=>{const i=e.getAttribute(t);return i?al(i):[]},nm=(e,t,i)=>{if(!i?.length){e.removeAttribute(t);return}const a=kn(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};f.customElements.get("media-captions-menu")||f.customElements.define("media-captions-menu",cf);var uT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,cT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function hT(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${uT}</slot>
      <slot name="off">${cT}</slot>
    </slot>
  `}function mT(){return R("Captions")}var sm=e=>{e.setAttribute("data-captions-enabled",Qp(e).toString())},om=e=>{e.setAttribute("aria-label",R("closed captions"))},wc=class extends _r{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_SUBTITLES_LIST,c.MEDIA_SUBTITLES_SHOWING,c.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),om(this),sm(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===c.MEDIA_SUBTITLES_SHOWING?sm(this):e===c.MEDIA_LANG&&om(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=qe(this))==null?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return lm(this,c.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){dm(this,c.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return lm(this,c.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){dm(this,c.MEDIA_SUBTITLES_SHOWING,e)}};wc.getSlotTemplateHTML=hT;wc.getTooltipContentHTML=mT;var lm=(e,t)=>{const i=e.getAttribute(t);return i?al(i):[]},dm=(e,t,i)=>{if(!i?.length){e.removeAttribute(t);return}const a=kn(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};f.customElements.get("media-captions-menu-button")||f.customElements.define("media-captions-menu-button",wc);var hf=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Fa=(e,t,i)=>(hf(e,t,"read from private field"),i?i.call(e):t.get(e)),Pl=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ya=(e,t,i)=>(hf(e,t,"access private method"),i),Ci,Ka,en,io,Xd,Ul={RATES:"rates"},pT=class extends ht{constructor(){super(),Pl(this,Ka),Pl(this,io),Pl(this,Ci,new Cu(this,Ul.RATES,{defaultValue:Iv})),ya(this,Ka,en).call(this)}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PLAYBACK_RATE,Ul.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===c.MEDIA_PLAYBACK_RATE&&t!=i?(this.value=i,ya(this,Ka,en).call(this)):e===Ul.RATES&&t!=i&&(Fa(this,Ci).value=i,ya(this,Ka,en).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ya(this,io,Xd))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ya(this,io,Xd))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:qe(this).querySelector("media-playback-rate-menu-button")}get rates(){return Fa(this,Ci)}set rates(e){e?Array.isArray(e)?Fa(this,Ci).value=e.join(" "):typeof e=="string"&&(Fa(this,Ci).value=e):Fa(this,Ci).value="",ya(this,Ka,en).call(this)}get mediaPlaybackRate(){return ie(this,c.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ce(this,c.MEDIA_PLAYBACK_RATE,e)}};Ci=new WeakMap;Ka=new WeakSet;en=function(){this.defaultSlot.textContent="";const e=this.mediaPlaybackRate,t=new Set(Array.from(Fa(this,Ci)).map(a=>Number(a)));e>0&&!t.has(e)&&t.add(e);const i=Array.from(t).sort((a,r)=>a-r);for(const a of i){const r=hr({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a.toString(),checked:e===a});r.prepend(ua(this,"checked-indicator")),this.defaultSlot.append(r)}};io=new WeakSet;Xd=function(){if(!this.value)return;const e=new f.CustomEvent(L.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};f.customElements.get("media-playback-rate-menu")||f.customElements.define("media-playback-rate-menu",pT);function vT(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `}function fT(){return R("Playback rate")}var Sc=class extends _r{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(e=this.mediaPlaybackRate)!=null?e:1}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===c.MEDIA_PLAYBACK_RATE){const a=i?+i:NaN,r=Number.isNaN(a)?1:a;this.container.innerHTML=`${r}x`,this.setAttribute("aria-label",R("Playback rate {playbackRate}",{playbackRate:r}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:qe(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return ie(this,c.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ce(this,c.MEDIA_PLAYBACK_RATE,e)}};Sc.getSlotTemplateHTML=vT;Sc.getTooltipContentHTML=fT;f.customElements.get("media-playback-rate-menu-button")||f.customElements.define("media-playback-rate-menu-button",Sc);var Ic=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tn=(e,t,i)=>(Ic(e,t,"read from private field"),i?i.call(e):t.get(e)),es=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},um=(e,t,i,a)=>(Ic(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),Ta=(e,t,i)=>(Ic(e,t,"access private method"),i),an,Za,Va,rn,ao,Jd,ET=class extends ht{constructor(){super(...arguments),es(this,Va),es(this,ao),es(this,an,[]),es(this,Za,{})}static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_RENDITION_LIST,c.MEDIA_RENDITION_SELECTED,c.MEDIA_RENDITION_UNAVAILABLE,c.MEDIA_HEIGHT]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){const i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){const a=e.bitrate/1e6;return`${i} (${`${a.toFixed(a<1?1:0)} Mbps`})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?((i=t.bitrate)!=null?i:0)-((a=e.bitrate)!=null?a:0):t.height-e.height}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===c.MEDIA_RENDITION_SELECTED&&t!==i?(this.value=i??"auto",Ta(this,Va,rn).call(this)):e===c.MEDIA_RENDITION_LIST&&t!==i?(um(this,an,xb(i)),Ta(this,Va,rn).call(this)):e===c.MEDIA_HEIGHT&&t!==i&&Ta(this,Va,rn).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Ta(this,ao,Jd))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Ta(this,ao,Jd))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:qe(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return tn(this,an)}set mediaRenditionList(e){um(this,an,e),Ta(this,Va,rn).call(this)}get mediaRenditionSelected(){return oe(this,c.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){ae(this,c.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return ie(this,c.MEDIA_HEIGHT)}set mediaHeight(e){ce(this,c.MEDIA_HEIGHT,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}};an=new WeakMap;Za=new WeakMap;Va=new WeakSet;rn=function(){if(tn(this,Za).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&tn(this,Za).mediaHeight===this.mediaHeight)return;tn(this,Za).mediaRenditionList=JSON.stringify(this.mediaRenditionList),tn(this,Za).mediaHeight=this.mediaHeight;const e=this.mediaRenditionList.sort(this.compareRendition.bind(this)),t=e.find(s=>s.id===this.mediaRenditionSelected);for(const s of e)s.selected=s===t;this.defaultSlot.textContent="";const i=!this.mediaRenditionSelected;for(const s of e){const o=hr({type:"radio",text:this.formatRendition(s,{showBitrate:this.showRenditionBitrate(s)}),value:`${s.id}`,checked:s.selected&&!i});o.prepend(ua(this,"checked-indicator")),this.defaultSlot.append(o)}const a=t&&this.showRenditionBitrate(t),r=i?t?this.formatMenuItemText(`${R("Auto")} • ${this.formatRendition(t,{showBitrate:a})}`,t):this.formatMenuItemText(`${R("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(R("Auto")),n=hr({type:"radio",text:r,value:"auto",checked:i});n.dataset.description=r,n.prepend(ua(this,"checked-indicator")),this.defaultSlot.append(n)};ao=new WeakSet;Jd=function(){if(this.value==null)return;const e=new f.CustomEvent(L.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};f.customElements.get("media-rendition-menu")||f.customElements.define("media-rendition-menu",ET);var _T=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function gT(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${_T}</slot>
  `}function bT(){return R("Quality")}var Rc=class extends _r{static get observedAttributes(){return[...super.observedAttributes,c.MEDIA_RENDITION_SELECTED,c.MEDIA_RENDITION_UNAVAILABLE,c.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",R("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:qe(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return oe(this,c.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){ae(this,c.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return ie(this,c.MEDIA_HEIGHT)}set mediaHeight(e){ce(this,c.MEDIA_HEIGHT,e)}};Rc.getSlotTemplateHTML=gT;Rc.getTooltipContentHTML=bT;f.customElements.get("media-rendition-menu-button")||f.customElements.define("media-rendition-menu-button",Rc);var Lc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Wt=(e,t,i)=>(Lc(e,t,"read from private field"),i?i.call(e):t.get(e)),Ct=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},mf=(e,t,i,a)=>(Lc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lt=(e,t,i)=>(Lc(e,t,"access private method"),i),mr,Mn,ml,ta,ja,Cc,pf,ro,eu,no,tu,vf,Wo,Fo,so;function yT(e){return`
      ${ht.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `}var ff=class extends ht{constructor(){super(),Ct(this,Mn),Ct(this,ta),Ct(this,Cc),Ct(this,ro),Ct(this,tu),Ct(this,mr,!1),Ct(this,no,e=>{const t=e.target,i=t?.nodeName==="VIDEO",a=lt(this,ro,eu).call(this,t);(i||a)&&(Wt(this,mr)?lt(this,ta,ja).call(this):lt(this,tu,vf).call(this,e))}),Ct(this,Wo,e=>{const t=e.target,i=this.contains(t),a=e.button===2,r=t?.nodeName==="VIDEO",n=lt(this,ro,eu).call(this,t);i||a&&(r||n)||lt(this,ta,ja).call(this)}),Ct(this,Fo,e=>{e.key==="Escape"&&lt(this,ta,ja).call(this)}),Ct(this,so,e=>{var t,i;const a=e.target;if((t=a.matches)!=null&&t.call(a,'button[invoke="copy"]')){const r=(i=a.closest("media-context-menu-item"))==null?void 0:i.querySelector('input[slot="copy"]');r&&navigator.clipboard.writeText(r.value)}lt(this,ta,ja).call(this)}),this.setAttribute("noautohide",""),lt(this,Mn,ml).call(this)}connectedCallback(){super.connectedCallback(),qe(this).addEventListener("contextmenu",Wt(this,no)),this.addEventListener("click",Wt(this,so))}disconnectedCallback(){super.disconnectedCallback(),qe(this).removeEventListener("contextmenu",Wt(this,no)),this.removeEventListener("click",Wt(this,so)),document.removeEventListener("mousedown",Wt(this,Wo)),document.removeEventListener("keydown",Wt(this,Fo))}};mr=new WeakMap;Mn=new WeakSet;ml=function(){this.hidden=!Wt(this,mr)};ta=new WeakSet;ja=function(){mf(this,mr,!1),lt(this,Mn,ml).call(this)};Cc=new WeakSet;pf=function(){document.querySelectorAll("media-context-menu").forEach(e=>{var t;e!==this&&lt(t=e,ta,ja).call(t)})};ro=new WeakSet;eu=function(e){return e?e.hasAttribute("slot")&&e.getAttribute("slot")==="media"?!0:e.nodeName.includes("-")&&e.tagName.includes("-")?e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline"):!1:!1};no=new WeakMap;tu=new WeakSet;vf=function(e){e.preventDefault(),lt(this,Cc,pf).call(this),mf(this,mr,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,lt(this,Mn,ml).call(this),document.addEventListener("mousedown",Wt(this,Wo),{once:!0}),document.addEventListener("keydown",Wt(this,Fo),{once:!0})};Wo=new WeakMap;Fo=new WeakMap;so=new WeakMap;ff.getTemplateHTML=yT;f.customElements.get("media-context-menu")||f.customElements.define("media-context-menu",ff);function TT(e){return`
    ${Bi.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `}var Dc=class extends Bi{};Dc.shadowRootOptions={mode:"open"};Dc.getTemplateHTML=TT;f.customElements.get("media-context-menu-item")||f.customElements.define("media-context-menu-item",Dc);var Ef=e=>{throw TypeError(e)},Mc=(e,t,i)=>t.has(e)||Ef("Cannot "+i),H=(e,t,i)=>(Mc(e,t,"read from private field"),i?i.call(e):t.get(e)),Ne=(e,t,i)=>t.has(e)?Ef("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Ve=(e,t,i,a)=>(Mc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),me=(e,t,i)=>(Mc(e,t,"access private method"),i),pl=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class e extends pl{}globalThis.DocumentFragment=e}var xc=class extends pl{},AT=class extends pl{},kT={get(e){},define(e,t,i){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(xc)}},oo,wT=class{constructor(e,t={}){Ne(this,oo),Ve(this,oo,t?.detail)}get detail(){return H(this,oo)}initCustomEvent(){}};oo=new WeakMap;function ST(e,t){return new xc}var _f={document:{createElement:ST},DocumentFragment,customElements:kT,CustomEvent:wT,EventTarget:pl,HTMLElement:xc,HTMLVideoElement:AT},gf=typeof window>"u"||typeof globalThis.customElements>"u",Kt=gf?_f:globalThis,Ko=gf?_f.document:globalThis.document;function IT(e){let t="";return Object.entries(e).forEach(([i,a])=>{a!=null&&(t+=`${iu(i)}: ${a}; `)}),t?t.trim():void 0}function iu(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function bf(e){return e.replace(/[-_]([a-z])/g,(t,i)=>i.toUpperCase())}function Je(e){if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}function yf(e){let t=RT(e).toString();return t?"?"+t:""}function RT(e){let t={};for(let i in e)e[i]!=null&&(t[i]=e[i]);return new URLSearchParams(t)}var Tf=(e,t)=>!e||!t?!1:e.contains(t)?!0:Tf(e,t.getRootNode().host),Af="mux.com",LT=()=>{try{return"3.11.7"}catch{}return"UNKNOWN"},CT=LT(),kf=()=>CT,DT=(e,{token:t,customDomain:i=Af,thumbnailTime:a,programTime:r}={})=>{var n;let s=t==null?a:void 0,{aud:o}=(n=Xa(t))!=null?n:{};if(!(t&&o!=="t"))return`https://image.${i}/${e}/thumbnail.webp${yf({token:t,time:s,program_time:r})}`},MT=(e,{token:t,customDomain:i=Af,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=(n=Xa(t))!=null?n:{};if(!(t&&s!=="s"))return`https://image.${i}/${e}/storyboard.vtt${yf({token:t,format:"webp",program_start_time:a,program_end_time:r})}`},Oc=e=>{if(e){if([Q.LIVE,Q.ON_DEMAND].includes(e))return e;if(e!=null&&e.includes("live"))return Q.LIVE}},xT={crossorigin:"crossOrigin",playsinline:"playsInline"};function OT(e){var t;return(t=xT[e])!=null?t:bf(e)}var qa,Ya,Ke,NT=class{constructor(e,t){Ne(this,qa),Ne(this,Ya),Ne(this,Ke,[]),Ve(this,qa,e),Ve(this,Ya,t)}[Symbol.iterator](){return H(this,Ke).values()}get length(){return H(this,Ke).length}get value(){var e;return(e=H(this,Ke).join(" "))!=null?e:""}set value(e){var t;e!==this.value&&(Ve(this,Ke,[]),this.add(...(t=e?.split(" "))!=null?t:[]))}toString(){return this.value}item(e){return H(this,Ke)[e]}values(){return H(this,Ke).values()}keys(){return H(this,Ke).keys()}forEach(e){H(this,Ke).forEach(e)}add(...e){var t,i;e.forEach(a=>{this.contains(a)||H(this,Ke).push(a)}),!(this.value===""&&!((t=H(this,qa))!=null&&t.hasAttribute(`${H(this,Ya)}`)))&&((i=H(this,qa))==null||i.setAttribute(`${H(this,Ya)}`,`${this.value}`))}remove(...e){var t;e.forEach(i=>{H(this,Ke).splice(H(this,Ke).indexOf(i),1)}),(t=H(this,qa))==null||t.setAttribute(`${H(this,Ya)}`,`${this.value}`)}contains(e){return H(this,Ke).includes(e)}toggle(e,t){return typeof t<"u"?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};qa=new WeakMap,Ya=new WeakMap,Ke=new WeakMap;var wf=`[mux-player ${kf()}]`;function ii(...e){console.warn(wf,...e)}function et(...e){console.error(wf,...e)}function cm(e){var t;let i=(t=e.message)!=null?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${M("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),ii(i)}var Oe={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},Di={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"};({...Oe,...Di});var hm=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),PT=Object.values(Oe).filter(e=>Oe.PLAYSINLINE!==e),UT=Object.values(Di),$T=[...PT,...UT],HT=class extends Kt.HTMLElement{static get observedAttributes(){return $T}constructor(){super()}attributeChangedCallback(e,t,i){var a,r;switch(e){case Di.MUTED:this.media&&(this.media.muted=i!=null,this.media.defaultMuted=i!=null);return;case Di.VOLUME:{let n=(a=Je(i))!=null?a:1;this.media&&(this.media.volume=n);return}case Di.PLAYBACKRATE:{let n=(r=Je(i))!=null?r:1;this.media&&(this.media.playbackRate=n,this.media.defaultPlaybackRate=n);return}}}play(){var e,t;return(t=(e=this.media)==null?void 0:e.play())!=null?t:Promise.reject()}pause(){var e;(e=this.media)==null||e.pause()}load(){var e;(e=this.media)==null||e.load()}get media(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return(t=(e=this.media)==null?void 0:e.paused)!=null?t:!0}get duration(){var e,t;return(t=(e=this.media)==null?void 0:e.duration)!=null?t:NaN}get ended(){var e,t;return(t=(e=this.media)==null?void 0:e.ended)!=null?t:!1}get buffered(){var e,t;return(t=(e=this.media)==null?void 0:e.buffered)!=null?t:hm}get seekable(){var e,t;return(t=(e=this.media)==null?void 0:e.seekable)!=null?t:hm}get readyState(){var e,t;return(t=(e=this.media)==null?void 0:e.readyState)!=null?t:0}get videoWidth(){var e,t;return(t=(e=this.media)==null?void 0:e.videoWidth)!=null?t:0}get videoHeight(){var e,t;return(t=(e=this.media)==null?void 0:e.videoHeight)!=null?t:0}get currentSrc(){var e,t;return(t=(e=this.media)==null?void 0:e.currentSrc)!=null?t:""}get currentTime(){var e,t;return(t=(e=this.media)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return(t=(e=this.media)==null?void 0:e.volume)!=null?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return(t=(e=this.media)==null?void 0:e.playbackRate)!=null?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return(e=Je(this.getAttribute(Di.PLAYBACKRATE)))!=null?e:1}set defaultPlaybackRate(e){e!=null?this.setAttribute(Di.PLAYBACKRATE,`${e}`):this.removeAttribute(Di.PLAYBACKRATE)}get crossOrigin(){return Cr(this,Oe.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(Oe.CROSSORIGIN,`${e}`)}get autoplay(){return Cr(this,Oe.AUTOPLAY)!=null}set autoplay(e){e?this.setAttribute(Oe.AUTOPLAY,typeof e=="string"?e:""):this.removeAttribute(Oe.AUTOPLAY)}get loop(){return Cr(this,Oe.LOOP)!=null}set loop(e){e?this.setAttribute(Oe.LOOP,""):this.removeAttribute(Oe.LOOP)}get muted(){var e,t;return(t=(e=this.media)==null?void 0:e.muted)!=null?t:!1}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return Cr(this,Oe.MUTED)!=null}set defaultMuted(e){e?this.setAttribute(Oe.MUTED,""):this.removeAttribute(Oe.MUTED)}get playsInline(){return Cr(this,Oe.PLAYSINLINE)!=null}set playsInline(e){et("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(Oe.PRELOAD,e):this.removeAttribute(Oe.PRELOAD)}};function Cr(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var mm=HT,BT=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,Dr=new WeakMap,WT=class Sf{constructor(t,i){this.element=t,this.type=i,this.element.addEventListener(this.type,this);let a=Dr.get(this.element);a&&a.set(this.type,this)}set(t){if(typeof t=="function")this.handleEvent=t.bind(this.element);else if(typeof t=="object"&&typeof t.handleEvent=="function")this.handleEvent=t.handleEvent.bind(t);else{this.element.removeEventListener(this.type,this);let i=Dr.get(this.element);i&&i.delete(this.type)}}static for(t){Dr.has(t.element)||Dr.set(t.element,new Map);let i=t.attributeName.slice(2),a=Dr.get(t.element);return a&&a.has(i)?a.get(i):new Sf(t.element,i)}};function FT(e,t){return e instanceof St&&e.attributeName.startsWith("on")?(WT.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),!0):!1}function KT(e,t){return t instanceof If&&e instanceof Er?(t.renderInto(e),!0):!1}function VT(e,t){return t instanceof DocumentFragment&&e instanceof Er?(t.childNodes.length&&e.replace(...t.childNodes),!0):!1}function qT(e,t){if(e instanceof St){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t)),!0}return e.value=String(t),!0}function YT(e,t){if(e instanceof St&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1}function GT(e,t){if(typeof t=="boolean"&&e instanceof St){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}function zT(e,t){return t===!1&&e instanceof Er?(e.replace(""),!0):!1}function QT(e,t){YT(e,t)||GT(e,t)||FT(e,t)||zT(e,t)||KT(e,t)||VT(e,t)||qT(e,t)}var $l=new Map,pm=new WeakMap,vm=new WeakMap,If=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("")}get template(){if($l.has(this.stringsKey))return $l.get(this.stringsKey);{let e=Ko.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((i,a,r)=>i+a+(r<t?`{{ ${r} }}`:""),""),$l.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(pm.get(e)!==i){pm.set(e,i);let r=new ul(i,this.values,this.processor);vm.set(e,r),e instanceof Er?e.replace(...r.children):e.appendChild(r);return}let a=vm.get(e);(t=a?.update)==null||t.call(a,this.values)}},ZT={processCallback(e,t,i){var a;if(i)for(let[r,n]of t)r in i&&QT(n,(a=i[r])!=null?a:"")}};function lo(e,...t){return new If(e,t,ZT)}function jT(e,t){e.renderInto(t)}var XT=e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},JT=e=>lo`
  <style>
    ${XT(e)}
    ${BT}
  </style>
  ${iA(e)}
`,eA=e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return Oc(e.streamType)==="live"&&(t+=" noarrowleft noarrowright"),t},tA=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),iA=e=>{var t,i,a,r,n,s,o,l,u,p,m,d,h,v,T,b,_,y,g,S,C,N,$,q,Y,U,le,Pe,Ge,ze,ve,$e,It,He,Qe,we,jt,Ue,Be;return lo`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${(t=e.defaultStreamType)!=null?t:!1}"
    hotkeys="${eA(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||!1}"
    noautoseektolive="${!!((i=e.streamType)!=null&&i.includes(Q.LIVE))&&e.targetLiveWindow!==0}"
    novolumepref="${e.novolumepref||!1}"
    nomutedpref="${e.nomutedpref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${(a=e.audio)!=null?a:!1}"
    style="${(r=IT({"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor,"--media-accent-color":e.accentColor}))!=null?r:!1}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${(n=e.forwardSeekOffset)!=null?n:!1}"
    backwardseekoffset="${(s=e.backwardSeekOffset)!=null?s:!1}"
    playbackrates="${(o=e.playbackRates)!=null?o:!1}"
    defaultshowremainingtime="${(l=e.defaultShowRemainingTime)!=null?l:!1}"
    defaultduration="${(u=e.defaultDuration)!=null?u:!1}"
    hideduration="${(p=e.hideDuration)!=null?p:!1}"
    title="${(m=e.title)!=null?m:!1}"
    videotitle="${(d=e.videoTitle)!=null?d:!1}"
    proudlydisplaymuxbadge="${(h=e.proudlyDisplayMuxBadge)!=null?h:!1}"
    exportparts="${tA}"
    onclose="${e.onCloseErrorDialog}"
    onfocusin="${e.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${(v=e.noHotKeys)!=null?v:!1}"
      target-live-window="${(T=e.targetLiveWindow)!=null?T:!1}"
      stream-type="${(b=Oc(e.streamType))!=null?b:!1}"
      crossorigin="${(_=e.crossOrigin)!=null?_:""}"
      playsinline
      autoplay="${(y=e.autoplay)!=null?y:!1}"
      muted="${(g=e.muted)!=null?g:!1}"
      loop="${(S=e.loop)!=null?S:!1}"
      preload="${(C=e.preload)!=null?C:!1}"
      debug="${(N=e.debug)!=null?N:!1}"
      prefer-cmcd="${($=e.preferCmcd)!=null?$:!1}"
      disable-tracking="${(q=e.disableTracking)!=null?q:!1}"
      disable-cookies="${(Y=e.disableCookies)!=null?Y:!1}"
      prefer-playback="${(U=e.preferPlayback)!=null?U:!1}"
      start-time="${e.startTime!=null?e.startTime:!1}"
      beacon-collection-domain="${(le=e.beaconCollectionDomain)!=null?le:!1}"
      player-init-time="${(Pe=e.playerInitTime)!=null?Pe:!1}"
      player-software-name="${(Ge=e.playerSoftwareName)!=null?Ge:!1}"
      player-software-version="${(ze=e.playerSoftwareVersion)!=null?ze:!1}"
      env-key="${(ve=e.envKey)!=null?ve:!1}"
      custom-domain="${($e=e.customDomain)!=null?$e:!1}"
      src="${e.src?e.src:e.playbackId?jl(e):!1}"
      cast-src="${e.src?e.src:e.playbackId?jl(e):!1}"
      cast-receiver="${(It=e.castReceiver)!=null?It:!1}"
      drm-token="${(Qe=(He=e.tokens)==null?void 0:He.drm)!=null?Qe:!1}"
      exportparts="video"
      disable-pseudo-ended="${(we=e.disablePseudoEnded)!=null?we:!1}"
      max-auto-resolution="${(jt=e.maxAutoResolution)!=null?jt:!1}"
      cap-rendition-to-player-size="${(Ue=e.capRenditionToPlayerSize)!=null?Ue:!1}"
    >
      ${e.storyboard?lo`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:lo``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${e.poster?e.poster:!1}"
        placeholdersrc="${(Be=e.placeholder)!=null?Be:!1}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},Rf=e=>e.charAt(0).toUpperCase()+e.slice(1),aA=(e,t=!1)=>{var i,a;if(e.muxCode){let r=Rf((i=e.errorCategory)!=null?i:"video"),n=zo((a=e.errorCategory)!=null?a:Z.VIDEO);if(e.muxCode===x.NETWORK_OFFLINE)return M("Your device appears to be offline",t);if(e.muxCode===x.NETWORK_TOKEN_EXPIRED)return M("{category} URL has expired",t).format({category:r});if([x.NETWORK_TOKEN_SUB_MISMATCH,x.NETWORK_TOKEN_AUD_MISMATCH,x.NETWORK_TOKEN_AUD_MISSING,x.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return M("{category} URL is formatted incorrectly",t).format({category:r});if(e.muxCode===x.NETWORK_TOKEN_MISSING)return M("Invalid {categoryName} URL",t).format({categoryName:n});if(e.muxCode===x.NETWORK_NOT_FOUND)return M("{category} does not exist",t).format({category:r});if(e.muxCode===x.NETWORK_NOT_READY){let s=e.streamType==="live"?"Live stream":"Video";return M("{mediaType} is not currently available",t).format({mediaType:s})}}if(e.code){if(e.code===I.MEDIA_ERR_NETWORK)return M("Network Error",t);if(e.code===I.MEDIA_ERR_DECODE)return M("Media Error",t);if(e.code===I.MEDIA_ERR_SRC_NOT_SUPPORTED)return M("Source Not Supported",t)}return M("Error",t)},rA=(e,t=!1)=>{var i,a;if(e.muxCode){let r=Rf((i=e.errorCategory)!=null?i:"video"),n=zo((a=e.errorCategory)!=null?a:Z.VIDEO);return e.muxCode===x.NETWORK_OFFLINE?M("Check your internet connection and try reloading this video.",t):e.muxCode===x.NETWORK_TOKEN_EXPIRED?M("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):e.muxCode===x.NETWORK_TOKEN_SUB_MISMATCH?M("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):e.muxCode===x.NETWORK_TOKEN_MALFORMED?M("{category} URL is formatted incorrectly",t).format({category:r}):[x.NETWORK_TOKEN_AUD_MISMATCH,x.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?M("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[x.NETWORK_TOKEN_MISSING,x.NETWORK_INVALID_URL].includes(e.muxCode)?M("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):e.muxCode===x.NETWORK_NOT_FOUND?"":e.message}return e.code&&(e.code===I.MEDIA_ERR_NETWORK||e.code===I.MEDIA_ERR_DECODE||(e.code,I.MEDIA_ERR_SRC_NOT_SUPPORTED)),e.message},nA=(e,t=!1)=>({title:aA(e,t).toString(),message:rA(e,t).toString()}),sA=e=>{if(e.muxCode){if(e.muxCode===x.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(e.muxCode===x.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([x.NETWORK_TOKEN_AUD_MISMATCH,x.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return"403-incorrect-aud-value.md";if(e.muxCode===x.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(e.muxCode===x.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(e.muxCode===x.NETWORK_NOT_FOUND)return"404-not-found.md";if(e.muxCode===x.NETWORK_NOT_READY)return"412-not-playable.md"}if(e.code){if(e.code===I.MEDIA_ERR_NETWORK)return"";if(e.code===I.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===I.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},Lf=(e,t)=>{let i=sA(e);return{message:e.message,context:e.context,file:i}},oA=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,au=Ko.createElement("template");"innerHTML"in au&&(au.innerHTML=oA);var fm,Em,Cf=class extends cl{};Cf.template=(Em=(fm=au.content)==null?void 0:fm.children)==null?void 0:Em[0];Kt.customElements.get("media-theme-gerwig")||Kt.customElements.define("media-theme-gerwig",Cf);var lA="gerwig",ai={SRC:"src",POSTER:"poster"},A={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},ru=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"];function dA(e,t){var i,a,r;return{src:!e.playbackId&&e.src,playbackId:e.playbackId,hasSrc:!!e.playbackId||!!e.src||!!e.currentSrc,poster:e.poster,storyboard:((i=e.media)==null?void 0:i.currentSrc)&&e.storyboard,storyboardSrc:e.getAttribute(A.STORYBOARD_SRC),fullscreenElement:e.getAttribute(A.FULLSCREEN_ELEMENT),placeholder:e.getAttribute("placeholder"),themeTemplate:cA(e),thumbnailTime:!e.tokens.thumbnail&&e.thumbnailTime,autoplay:e.autoplay,crossOrigin:e.crossOrigin,loop:e.loop,noHotKeys:e.hasAttribute(A.NOHOTKEYS),hotKeys:e.getAttribute(A.HOTKEYS),muted:e.muted,paused:e.paused,preload:e.preload,envKey:e.envKey,preferCmcd:e.preferCmcd,debug:e.debug,disableTracking:e.disableTracking,disableCookies:e.disableCookies,tokens:e.tokens,beaconCollectionDomain:e.beaconCollectionDomain,maxResolution:e.maxResolution,minResolution:e.minResolution,maxAutoResolution:e.maxAutoResolution,programStartTime:e.programStartTime,programEndTime:e.programEndTime,assetStartTime:e.assetStartTime,assetEndTime:e.assetEndTime,renditionOrder:e.renditionOrder,metadata:e.metadata,playerInitTime:e.playerInitTime,playerSoftwareName:e.playerSoftwareName,playerSoftwareVersion:e.playerSoftwareVersion,startTime:e.startTime,preferPlayback:e.preferPlayback,audio:e.audio,defaultStreamType:e.defaultStreamType,targetLiveWindow:e.getAttribute(E.TARGET_LIVE_WINDOW),streamType:Oc(e.getAttribute(E.STREAM_TYPE)),primaryColor:e.getAttribute(A.PRIMARY_COLOR),secondaryColor:e.getAttribute(A.SECONDARY_COLOR),accentColor:e.getAttribute(A.ACCENT_COLOR),forwardSeekOffset:e.forwardSeekOffset,backwardSeekOffset:e.backwardSeekOffset,defaultHiddenCaptions:e.defaultHiddenCaptions,defaultDuration:e.defaultDuration,defaultShowRemainingTime:e.defaultShowRemainingTime,hideDuration:hA(e),playbackRates:e.getAttribute(A.PLAYBACK_RATES),customDomain:(a=e.getAttribute(E.CUSTOM_DOMAIN))!=null?a:void 0,title:e.getAttribute(A.TITLE),videoTitle:(r=e.getAttribute(A.VIDEO_TITLE))!=null?r:e.getAttribute(A.TITLE),novolumepref:e.hasAttribute(A.NO_VOLUME_PREF),nomutedpref:e.hasAttribute(A.NO_MUTED_PREF),proudlyDisplayMuxBadge:e.hasAttribute(A.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:e.castReceiver,disablePseudoEnded:e.hasAttribute(A.DISABLE_PSEUDO_ENDED),capRenditionToPlayerSize:e.capRenditionToPlayerSize,...t,extraSourceParams:e.extraSourceParams}}var uA=yv.formatErrorMessage;yv.formatErrorMessage=e=>{var t,i;if(e instanceof I){let a=nA(e,!1);return`
      ${a!=null&&a.title?`<h3>${a.title}</h3>`:""}
      ${a!=null&&a.message||a!=null&&a.linkUrl?`<p>
        ${a?.message}
        ${a!=null&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(t=a.linkText)!=null?t:""} ${M("(opens in a new window)")}"
              >${(i=a.linkText)!=null?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return uA(e)};function cA(e){var t,i;let a=e.theme;if(a){let r=(i=(t=e.getRootNode())==null?void 0:t.getElementById)==null?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=Kt.customElements.get(a);if(n!=null&&n.template)return n.template}}function hA(e){var t;let i=(t=e.mediaController)==null?void 0:t.querySelector("media-time-display");return i&&getComputedStyle(i).getPropertyValue("--media-duration-display-display").trim()==="none"}function _m(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(i=>i.startsWith("metadata-")).reduce((i,a)=>{let r=e.getAttribute(a);return r!==null&&(i[a.replace(/^metadata-/,"").replace(/-/g,"_")]=r),i},t)}var mA=Object.values(E),pA=Object.values(ai),vA=Object.values(A),gm=kf(),bm="mux-player",ym={isDialogOpen:!1},fA={redundant_streams:!0},uo,vn,co,Ji,ho,fn,Vo,qo,nr,En,sr,Yo,ue,ri,Df,nu,sa,Tm,Am,km,wm,EA=class extends mm{constructor(){super(),Ne(this,ue),Ne(this,uo),Ne(this,vn,!1),Ne(this,co,{}),Ne(this,Ji,!0),Ne(this,ho,new NT(this,"hotkeys")),Ne(this,fn),Ne(this,Vo,()=>me(this,ue,sa).call(this)),Ne(this,qo,()=>me(this,ue,sa).call(this)),Ne(this,nr,()=>me(this,ue,sa).call(this)),Ne(this,En),Ne(this,sr,{...ym,onCloseErrorDialog:e=>{var t;((t=e.composedPath()[0])==null?void 0:t.localName)==="media-error-dialog"&&me(this,ue,nu).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;((t=e.composedPath()[0])==null?void 0:t.localName)==="media-error-dialog"&&(Tf(this,Ko.activeElement)||e.preventDefault())}}),Ne(this,Yo,e=>{var t;let i=(t=this.media)==null?void 0:t.error;if(!(i instanceof I)){let{message:r,code:n}=i??{};i=new I(r,n)}if(!(i!=null&&i.fatal)){ii(i),i.data&&ii(`${i.name} data:`,i.data);return}let a=Lf(i,!1);a.message&&cm(a),et(i),i.data&&et(`${i.name} data:`,i.data),me(this,ue,nu).call(this,{isDialogOpen:!0})}),Ve(this,uo,fu()),this.attachShadow({mode:"open"}),me(this,ue,Df).call(this),this.isConnected&&me(this,ue,ri).call(this)}static get NAME(){return bm}static get VERSION(){return gm}static get observedAttributes(){var e;return[...(e=mm.observedAttributes)!=null?e:[],...pA,...mA,...vA]}get mediaTheme(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return(t=(e=this.mediaTheme)==null?void 0:e.shadowRoot)==null?void 0:t.querySelector("media-controller")}connectedCallback(){me(this,ue,ri).call(this);let e=this.media;e&&(e.metadata=_m(this))}disconnectedCallback(){var e,t,i,a,r,n,s,o;(e=H(this,fn))==null||e.disconnect(),(t=this.media)==null||t.removeEventListener("streamtypechange",H(this,Vo)),(i=this.media)==null||i.removeEventListener("loadstart",H(this,qo)),this.removeEventListener("error",H(this,Yo)),this.media&&(this.media.errorTranslator=void 0),(r=(a=this.media)==null?void 0:a.textTracks)==null||r.removeEventListener("addtrack",H(this,nr)),(s=(n=this.media)==null?void 0:n.textTracks)==null||s.removeEventListener("removetrack",H(this,nr)),(o=H(this,En))==null||o.call(this),Ve(this,En,void 0),Ve(this,vn,!1)}attributeChangedCallback(e,t,i){switch(me(this,ue,ri).call(this),super.attributeChangedCallback(e,t,i),e){case A.HOTKEYS:H(this,ho).value=i;break;case A.THUMBNAIL_TIME:i!=null&&this.tokens.thumbnail&&ii(M("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case A.THUMBNAIL_TOKEN:if(i){let a=Xa(i);if(a){let{aud:r}=a,n=on.THUMBNAIL;r!==n&&ii(M("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"thumbnail"}))}}break;case A.STORYBOARD_TOKEN:if(i){let a=Xa(i);if(a){let{aud:r}=a,n=on.STORYBOARD;r!==n&&ii(M("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"storyboard"}))}}break;case A.DRM_TOKEN:if(i){let a=Xa(i);if(a){let{aud:r}=a,n=on.DRM;r!==n&&ii(M("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"drm"}))}}break;case E.PLAYBACK_ID:i!=null&&i.includes("?token")&&et(M("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case E.STREAM_TYPE:i&&![Q.LIVE,Q.ON_DEMAND,Q.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:cm({file:"invalid-stream-type.md",message:M("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===Q.LIVE?this.getAttribute(A.TARGET_LIVE_WINDOW)??(this.targetLiveWindow=0):this.targetLiveWindow=NaN;break;case A.FULLSCREEN_ELEMENT:if(i!=null||i!==t){let a=Ko.getElementById(i),r=a?.querySelector("mux-player");this.mediaController&&a&&r&&(this.mediaController.fullscreenElement=a)}break;case E.CAP_RENDITION_TO_PLAYER_SIZE:(i==null||i!==t)&&(this.capRenditionToPlayerSize=i!=null?!0:void 0);break}[E.PLAYBACK_ID,ai.SRC,A.PLAYBACK_TOKEN].includes(e)&&t!==i&&Ve(this,sr,{...H(this,sr),...ym}),me(this,ue,sa).call(this,{[OT(e)]:i})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(c.MEDIA_IS_FULLSCREEN)))return(t=this.mediaController)==null||t.dispatchEvent(new Kt.CustomEvent(L.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((i,a)=>{var r;(r=this.mediaController)==null||r.addEventListener(Qt.MEDIA_IS_FULLSCREEN,()=>i(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(c.MEDIA_IS_FULLSCREEN)))return(e=this.mediaController)==null||e.dispatchEvent(new Kt.CustomEvent(L.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((t,i)=>{var a;(a=this.mediaController)==null||a.addEventListener(Qt.MEDIA_IS_FULLSCREEN,()=>t(),{once:!0})})}get preferCmcd(){var e;return(e=this.getAttribute(E.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?Eo.includes(e)?this.setAttribute(E.PREFER_CMCD,e):ii(`Invalid value for preferCmcd. Must be one of ${Eo.join()}`):this.removeAttribute(E.PREFER_CMCD))}get hasPlayed(){var e,t;return(t=(e=this.mediaController)==null?void 0:e.hasAttribute(c.MEDIA_HAS_PLAYED))!=null?t:!1}get inLiveWindow(){var e;return(e=this.mediaController)==null?void 0:e.hasAttribute(c.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return(e=this.media)==null?void 0:e._hls}get mux(){var e;return(e=this.media)==null?void 0:e.mux}get theme(){var e;return(e=this.getAttribute(A.THEME))!=null?e:lA}set theme(e){this.setAttribute(A.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(ru.includes(i))continue;let a=e.getAttribute(i);t[bf(i)]=a===""?!0:a}return t}set themeProps(e){var t,i;me(this,ue,ri).call(this);let a={...this.themeProps,...e};for(let r in a){if(ru.includes(r))continue;let n=e?.[r];typeof n=="boolean"||n==null?(t=this.mediaTheme)==null||t.toggleAttribute(iu(r),!!n):(i=this.mediaTheme)==null||i.setAttribute(iu(r),n)}}get playbackId(){var e;return(e=this.getAttribute(E.PLAYBACK_ID))!=null?e:void 0}set playbackId(e){e?this.setAttribute(E.PLAYBACK_ID,e):this.removeAttribute(E.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?(e=Gi(this,ai.SRC))!=null?e:void 0:(t=this.getAttribute(ai.SRC))!=null?t:void 0}set src(e){e?this.setAttribute(ai.SRC,e):this.removeAttribute(ai.SRC)}get poster(){var e;let t=this.getAttribute(ai.POSTER);if(t!=null)return t;let{tokens:i}=this;if(i.playback&&!i.thumbnail){ii("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return DT(this.playbackId,{customDomain:this.customDomain,thumbnailTime:(e=this.thumbnailTime)!=null?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(e){e||e===""?this.setAttribute(ai.POSTER,e):this.removeAttribute(ai.POSTER)}get storyboardSrc(){var e;return(e=this.getAttribute(A.STORYBOARD_SRC))!=null?e:void 0}set storyboardSrc(e){e?this.setAttribute(A.STORYBOARD_SRC,e):this.removeAttribute(A.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;if(this.storyboardSrc&&!e.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[Q.LIVE,Q.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard))return MT(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(A.AUDIO)}set audio(e){if(!e){this.removeAttribute(A.AUDIO);return}this.setAttribute(A.AUDIO,"")}get hotkeys(){return H(this,ho)}get nohotkeys(){return this.hasAttribute(A.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(A.NOHOTKEYS);return}this.setAttribute(A.NOHOTKEYS,"")}get thumbnailTime(){return Je(this.getAttribute(A.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(A.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return(t=(e=this.getAttribute(A.VIDEO_TITLE))!=null?e:this.getAttribute(A.TITLE))!=null?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(A.VIDEO_TITLE,e):this.removeAttribute(A.VIDEO_TITLE))}get placeholder(){var e;return(e=Gi(this,A.PLACEHOLDER))!=null?e:""}set placeholder(e){this.setAttribute(A.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(A.PRIMARY_COLOR);if(i!=null||this.mediaTheme&&(i=(t=(e=Kt.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_primary-color"))==null?void 0:t.trim(),i))return i}set primaryColor(e){this.setAttribute(A.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(A.SECONDARY_COLOR);if(i!=null||this.mediaTheme&&(i=(t=(e=Kt.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_secondary-color"))==null?void 0:t.trim(),i))return i}set secondaryColor(e){this.setAttribute(A.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(A.ACCENT_COLOR);if(i!=null||this.mediaTheme&&(i=(t=(e=Kt.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_accent-color"))==null?void 0:t.trim(),i))return i}set accentColor(e){this.setAttribute(A.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(A.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(A.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(A.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(A.PLAYBACK_RATES))return this.getAttribute(A.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(A.PLAYBACK_RATES);return}this.setAttribute(A.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return(e=Je(this.getAttribute(A.FORWARD_SEEK_OFFSET)))!=null?e:10}set forwardSeekOffset(e){this.setAttribute(A.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return(e=Je(this.getAttribute(A.BACKWARD_SEEK_OFFSET)))!=null?e:10}set backwardSeekOffset(e){this.setAttribute(A.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(A.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(A.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(A.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return Je(this.getAttribute(A.DEFAULT_DURATION))}set defaultDuration(e){e==null?this.removeAttribute(A.DEFAULT_DURATION):this.setAttribute(A.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(E.PLAYER_INIT_TIME)?Je(this.getAttribute(E.PLAYER_INIT_TIME)):H(this,uo)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(E.PLAYER_INIT_TIME):this.setAttribute(E.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=this.getAttribute(E.PLAYER_SOFTWARE_NAME))!=null?e:bm}get playerSoftwareVersion(){var e;return(e=this.getAttribute(E.PLAYER_SOFTWARE_VERSION))!=null?e:gm}get beaconCollectionDomain(){var e;return(e=this.getAttribute(E.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(E.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(E.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return(e=this.getAttribute(E.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(E.MAX_RESOLUTION,e):this.removeAttribute(E.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(E.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(E.MIN_RESOLUTION,e):this.removeAttribute(E.MIN_RESOLUTION))}get maxAutoResolution(){var e;return(e=this.getAttribute(E.MAX_AUTO_RESOLUTION))!=null?e:void 0}set maxAutoResolution(e){e==null?this.removeAttribute(E.MAX_AUTO_RESOLUTION):this.setAttribute(E.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return(e=this.getAttribute(E.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(E.RENDITION_ORDER,e):this.removeAttribute(E.RENDITION_ORDER))}get programStartTime(){return Je(this.getAttribute(E.PROGRAM_START_TIME))}set programStartTime(e){e==null?this.removeAttribute(E.PROGRAM_START_TIME):this.setAttribute(E.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return Je(this.getAttribute(E.PROGRAM_END_TIME))}set programEndTime(e){e==null?this.removeAttribute(E.PROGRAM_END_TIME):this.setAttribute(E.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return Je(this.getAttribute(E.ASSET_START_TIME))}set assetStartTime(e){e==null?this.removeAttribute(E.ASSET_START_TIME):this.setAttribute(E.ASSET_START_TIME,`${e}`)}get assetEndTime(){return Je(this.getAttribute(E.ASSET_END_TIME))}set assetEndTime(e){e==null?this.removeAttribute(E.ASSET_END_TIME):this.setAttribute(E.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(A.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(A.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):fA}set extraSourceParams(e){e==null?this.removeAttribute(A.EXTRA_SOURCE_PARAMS):this.setAttribute(A.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return(e=this.getAttribute(E.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(E.CUSTOM_DOMAIN,e):this.removeAttribute(E.CUSTOM_DOMAIN))}get envKey(){var e;return(e=Gi(this,E.ENV_KEY))!=null?e:void 0}set envKey(e){this.setAttribute(E.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(A.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(A.NO_VOLUME_PREF,""):this.removeAttribute(A.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(A.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(A.NO_MUTED_PREF,""):this.removeAttribute(A.NO_MUTED_PREF)}get debug(){return Gi(this,E.DEBUG)!=null}set debug(e){e?this.setAttribute(E.DEBUG,""):this.removeAttribute(E.DEBUG)}get disableTracking(){return Gi(this,E.DISABLE_TRACKING)!=null}set disableTracking(e){this.toggleAttribute(E.DISABLE_TRACKING,!!e)}get disableCookies(){return Gi(this,E.DISABLE_COOKIES)!=null}set disableCookies(e){e?this.setAttribute(E.DISABLE_COOKIES,""):this.removeAttribute(E.DISABLE_COOKIES)}get streamType(){var e,t,i;return(i=(t=this.getAttribute(E.STREAM_TYPE))!=null?t:(e=this.media)==null?void 0:e.streamType)!=null?i:Q.UNKNOWN}set streamType(e){this.setAttribute(E.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return(i=(t=this.getAttribute(A.DEFAULT_STREAM_TYPE))!=null?t:(e=this.mediaController)==null?void 0:e.getAttribute(A.DEFAULT_STREAM_TYPE))!=null?i:Q.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(A.DEFAULT_STREAM_TYPE,e):this.removeAttribute(A.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(A.TARGET_LIVE_WINDOW)?+this.getAttribute(A.TARGET_LIVE_WINDOW):(t=(e=this.media)==null?void 0:e.targetLiveWindow)!=null?t:NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(e==null?this.removeAttribute(A.TARGET_LIVE_WINDOW):this.setAttribute(A.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return(e=this.media)==null?void 0:e.liveEdgeStart}get startTime(){return Je(Gi(this,E.START_TIME))}set startTime(e){this.setAttribute(E.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(E.PREFER_PLAYBACK);if(e===Vt.MSE||e===Vt.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===Vt.MSE||e===Vt.NATIVE?this.setAttribute(E.PREFER_PLAYBACK,e):this.removeAttribute(E.PREFER_PLAYBACK))}get metadata(){var e;return(e=this.media)==null?void 0:e.metadata}set metadata(e){if(me(this,ue,ri).call(this),!this.media){et("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={..._m(this),...e}}get _hlsConfig(){var e;return(e=this.media)==null?void 0:e._hlsConfig}set _hlsConfig(e){if(me(this,ue,ri).call(this),!this.media){et("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=e}async addCuePoints(e){var t;if(me(this,ue,ri).call(this),!this.media){et("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return(t=this.media)==null?void 0:t.addCuePoints(e)}get activeCuePoint(){var e;return(e=this.media)==null?void 0:e.activeCuePoint}get cuePoints(){var e,t;return(t=(e=this.media)==null?void 0:e.cuePoints)!=null?t:[]}addChapters(e){var t;if(me(this,ue,ri).call(this),!this.media){et("underlying media element missing when trying to addChapters. chapters will not be added.");return}return(t=this.media)==null?void 0:t.addChapters(e)}get activeChapter(){var e;return(e=this.media)==null?void 0:e.activeChapter}get chapters(){var e,t;return(t=(e=this.media)==null?void 0:e.chapters)!=null?t:[]}getStartDate(){var e;return(e=this.media)==null?void 0:e.getStartDate()}get currentPdt(){var e;return(e=this.media)==null?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(A.PLAYBACK_TOKEN),t=this.getAttribute(A.DRM_TOKEN),i=this.getAttribute(A.THUMBNAIL_TOKEN),a=this.getAttribute(A.STORYBOARD_TOKEN);return{...H(this,co),...e!=null?{playback:e}:{},...t!=null?{drm:t}:{},...i!=null?{thumbnail:i}:{},...a!=null?{storyboard:a}:{}}}set tokens(e){Ve(this,co,e??{})}get playbackToken(){var e;return(e=this.getAttribute(A.PLAYBACK_TOKEN))!=null?e:void 0}set playbackToken(e){this.setAttribute(A.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return(e=this.getAttribute(A.DRM_TOKEN))!=null?e:void 0}set drmToken(e){this.setAttribute(A.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return(e=this.getAttribute(A.THUMBNAIL_TOKEN))!=null?e:void 0}set thumbnailToken(e){this.setAttribute(A.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return(e=this.getAttribute(A.STORYBOARD_TOKEN))!=null?e:void 0}set storyboardToken(e){this.setAttribute(A.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=(r=this.media)==null?void 0:r.nativeEl;if(n)return hu(n,e,t,i,a)}removeTextTrack(e){var t;let i=(t=this.media)==null?void 0:t.nativeEl;if(i)return dg(i,e)}get textTracks(){var e;return(e=this.media)==null?void 0:e.textTracks}get castReceiver(){var e;return(e=this.getAttribute(A.CAST_RECEIVER))!=null?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(A.CAST_RECEIVER,e):this.removeAttribute(A.CAST_RECEIVER))}get castCustomData(){var e;return(e=this.media)==null?void 0:e.castCustomData}set castCustomData(e){if(!this.media){et("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(A.NO_TOOLTIPS)}set noTooltips(e){if(!e){this.removeAttribute(A.NO_TOOLTIPS);return}this.setAttribute(A.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(A.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(A.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(A.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var e;return(e=this.media)==null?void 0:e.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){if(!this.media){et("underlying media element missing when trying to set capRenditionToPlayerSize");return}this.media.capRenditionToPlayerSize=e}};uo=new WeakMap,vn=new WeakMap,co=new WeakMap,Ji=new WeakMap,ho=new WeakMap,fn=new WeakMap,Vo=new WeakMap,qo=new WeakMap,nr=new WeakMap,En=new WeakMap,sr=new WeakMap,Yo=new WeakMap,ue=new WeakSet,ri=function(){var e,t,i,a;if(!H(this,vn)){Ve(this,vn,!0),me(this,ue,sa).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof Kt.HTMLElement))throw""}catch{et("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{et("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof P0))throw""}catch{et("<media-controller> failed to upgrade!")}me(this,ue,Tm).call(this),me(this,ue,Am).call(this),me(this,ue,km).call(this),Ve(this,Ji,(t=(e=this.mediaController)==null?void 0:e.hasAttribute(O.USER_INACTIVE))!=null?t:!0),me(this,ue,wm).call(this),(i=this.media)==null||i.addEventListener("streamtypechange",H(this,Vo)),(a=this.media)==null||a.addEventListener("loadstart",H(this,qo))}},Df=function(){var e,t;try{(e=window?.CSS)==null||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),(t=window?.CSS)==null||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},nu=function(e){Object.assign(H(this,sr),e),me(this,ue,sa).call(this)},sa=function(e={}){jT(JT(dA(this,{...H(this,sr),...e})),this.shadowRoot)},Tm=function(){let e=t=>{var i,a;if(!(t!=null&&t.startsWith("theme-")))return;let r=t.replace(/^theme-/,"");if(ru.includes(r))return;let n=this.getAttribute(t);n!=null?(i=this.mediaTheme)==null||i.setAttribute(r,n):(a=this.mediaTheme)==null||a.removeAttribute(r)};Ve(this,fn,new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)})),H(this,fn).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},Am=function(){this.addEventListener("error",H(this,Yo)),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!(((t=this.media)==null?void 0:t.error)instanceof I))return e;let r=Lf((i=this.media)==null?void 0:i.error,!1);return{player_error_code:(a=this.media)==null?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}})},km=function(){var e,t,i,a;(t=(e=this.media)==null?void 0:e.textTracks)==null||t.addEventListener("addtrack",H(this,nr)),(a=(i=this.media)==null?void 0:i.textTracks)==null||a.addEventListener("removetrack",H(this,nr))},wm=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===Q.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(u,p,m=!1)=>{r()||Array.from(u&&u.activeCues||[]).forEach(d=>{if(!(!d.snapToLines||d.line<-5||d.line>=0&&d.line<10))if(!p||this.paused){let h=d.text.split(`
`).length,v=-3;this.streamType===Q.LIVE&&(v=-2);let T=v-h;if(d.line===T&&!m)return;a.has(d)||a.set(d,d.line),d.line=T}else setTimeout(()=>{d.line=a.get(d)||"auto"},500)})},s=()=>{var u,p;n(i,(p=(u=this.mediaController)==null?void 0:u.hasAttribute(O.USER_INACTIVE))!=null?p:!1)},o=()=>{var u,p;let m=Array.from(((p=(u=this.mediaController)==null?void 0:u.media)==null?void 0:p.textTracks)||[]).filter(d=>["subtitles","captions"].includes(d.kind)&&d.mode==="showing")[0];m!==i&&i?.removeEventListener("cuechange",s),i=m,i?.addEventListener("cuechange",s),n(i,H(this,Ji))};o(),(e=this.textTracks)==null||e.addEventListener("change",o),(t=this.textTracks)==null||t.addEventListener("addtrack",o);let l=()=>{var u,p;let m=(p=(u=this.mediaController)==null?void 0:u.hasAttribute(O.USER_INACTIVE))!=null?p:!0;H(this,Ji)!==m&&(Ve(this,Ji,m),n(i,H(this,Ji)))};this.addEventListener("userinactivechange",l),Ve(this,En,()=>{var u,p;i?.removeEventListener("cuechange",s),(u=this.textTracks)==null||u.removeEventListener("change",o),(p=this.textTracks)==null||p.removeEventListener("addtrack",o),this.removeEventListener("userinactivechange",l)})};function Gi(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var Sm=EA,Mf=e=>{throw TypeError(e)},xf=(e,t,i)=>t.has(e)||Mf("Cannot "+i),_A=(e,t,i)=>(xf(e,t,"read from private field"),i?i.call(e):t.get(e)),gA=(e,t,i)=>t.has(e)?Mf("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),bA=(e,t,i,a)=>(xf(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),vl=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class e extends vl{}globalThis.DocumentFragment=e}var Nc=class extends vl{},yA=class extends vl{},TA={get(e){},define(e,t,i){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Nc)}},mo,AA=class{constructor(e,t={}){gA(this,mo),bA(this,mo,t?.detail)}get detail(){return _A(this,mo)}initCustomEvent(){}};mo=new WeakMap;function kA(e,t){return new Nc}var Of={document:{createElement:kA},DocumentFragment,customElements:TA,CustomEvent:AA,EventTarget:vl,HTMLElement:Nc,HTMLVideoElement:yA},Nf=typeof window>"u"||typeof globalThis.customElements>"u",Hl=Nf?Of:globalThis;Nf?Of.document:globalThis.document;Hl.customElements.get("mux-player")||(Hl.customElements.define("mux-player",Sm),Hl.MuxPlayerElement=Sm);var Pf=parseInt("19.2.4")>=19,Im={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},wA=e=>e==null,SA=(e,t)=>wA(t)?!1:e in t,IA=e=>e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),RA=(e,t)=>{if(!(!Pf&&typeof t=="boolean"&&!t)){if(SA(e,Im))return Im[e];if(typeof t<"u")return/[A-Z]/.test(e)?IA(e):e}},LA=(e,t)=>!Pf&&typeof e=="boolean"?"":e,CA=(e={})=>{let{ref:t,...i}=e;return Object.entries(i).reduce((a,[r,n])=>{let s=RA(r,n);return s&&(a[s]=LA(n,r)),a},{})};function Rm(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function DA(...e){return t=>{let i=!1,a=e.map(r=>{let n=Rm(r,t);return!i&&typeof n=="function"&&(i=!0),n});if(i)return()=>{for(let r=0;r<a.length;r++){let n=a[r];typeof n=="function"?n():Rm(e[r],null)}}}}function MA(...e){return li.useCallback(DA(...e),e)}var xA=Object.prototype.hasOwnProperty,OA=(e,t)=>{if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(Array.isArray(e))return!Array.isArray(t)||e.length!==t.length?!1:e.some((r,n)=>t[n]===r);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let r=0;r<i.length;r++)if(!xA.call(t,i[r])||!Object.is(e[i[r]],t[i[r]]))return!1;return!0},Uf=(e,t,i)=>!OA(t,e[i]),NA=(e,t,i)=>{e[i]=t},PA=(e,t,i,a=NA,r=Uf)=>(0,li.useEffect)(()=>{let n=i?.current;n&&r(n,t,e)&&a(n,t,e)},[i?.current,t]),Dt=PA,UA=()=>{try{return"3.11.7"}catch{}return"UNKNOWN"},$A=UA(),HA=()=>$A,re=(e,t,i)=>(0,li.useEffect)(()=>{let a=t?.current;if(!a||!i)return;let r=e,n=i;return a.addEventListener(r,n),()=>{a.removeEventListener(r,n)}},[t?.current,i,e]),BA=li.forwardRef(({children:e,...t},i)=>li.createElement("mux-player",{suppressHydrationWarning:!0,...CA(t),ref:i},e)),WA=(e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:u,onDurationChange:p,onVolumeChange:m,onRateChange:d,onResize:h,onWaiting:v,onPlay:T,onPlaying:b,onTimeUpdate:_,onPause:y,onSeeking:g,onSeeked:S,onStalled:C,onSuspend:N,onEnded:$,onError:q,onCuePointChange:Y,onChapterChange:U,metadata:le,tokens:Pe,paused:Ge,playbackId:ze,playbackRates:ve,currentTime:$e,themeProps:It,extraSourceParams:He,castCustomData:Qe,_hlsConfig:we,...jt}=t;return Dt("tokens",Pe,e),Dt("playbackId",ze,e),Dt("playbackRates",ve,e),Dt("metadata",le,e),Dt("extraSourceParams",He,e),Dt("_hlsConfig",we,e),Dt("themeProps",It,e),Dt("castCustomData",Qe,e),Dt("paused",Ge,e,(Ue,Be)=>{Be!=null&&(Be?Ue.pause():Ue.play())},(Ue,Be,pa)=>Ue.hasAttribute("autoplay")&&!Ue.hasPlayed?!1:Uf(Ue,Be,pa)),Dt("currentTime",$e,e,(Ue,Be)=>{Be!=null&&(Ue.currentTime=Be)}),re("abort",e,i),re("canplay",e,a),re("canplaythrough",e,r),re("emptied",e,n),re("loadstart",e,s),re("loadeddata",e,o),re("loadedmetadata",e,l),re("progress",e,u),re("durationchange",e,p),re("volumechange",e,m),re("ratechange",e,d),re("resize",e,h),re("waiting",e,v),re("play",e,T),re("playing",e,b),re("timeupdate",e,_),re("pause",e,y),re("seeking",e,g),re("seeked",e,S),re("stalled",e,C),re("suspend",e,N),re("ended",e,$),re("error",e,q),re("cuepointchange",e,Y),re("chapterchange",e,U),[jt]},FA=HA(),KA="mux-player-react",nk=li.forwardRef((e,t)=>{var i;let a=(0,li.useRef)(null),r=MA(a,t),[n]=WA(a,e),[s]=(0,li.useState)((i=e.playerInitTime)!=null?i:fu());return li.createElement(BA,{ref:r,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:KA,playerSoftwareVersion:FA,playerInitTime:s,...n})});export{ZA as MaxResolution,I as MediaError,jA as MinResolution,XA as RenditionOrder,nk as default,fu as generatePlayerInitTime,KA as playerSoftwareName,FA as playerSoftwareVersion};
