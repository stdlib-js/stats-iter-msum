// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,E=Array.isArray;function _(r){return r!=r}function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,o,a,u,f,l,s,p,g,d,y;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+m(y):m(y)+p)),u+=n.arg||"",f+=1}return u}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=A.exec(r);n;)(e=r.slice(i,A.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=A.lastIndex,n=A.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var I,N=Object.prototype,O=N.toString,V=N.__defineGetter__,P=N.__defineSetter__,C=N.__lookupGetter__,$=N.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(r,e,t.get),a&&P&&P.call(r,e,t.set),r};var L=I;function R(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=/./;function G(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;function X(r,e){return null!=r&&W.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof D?D.toStringTag:"";var z=Z()?function(r){var e,t,n;if(null==r)return U.call(r);t=r[Y],e=X(r,Y);try{r[Y]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return U.call(r)},q=Boolean,H=Boolean.prototype.toString;var J=Z();function K(r){return"object"==typeof r&&(r instanceof q||(J?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return G(r)||K(r)}R(Q,"isPrimitive",G),R(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},nr="object"==typeof tr?tr:null,ir="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!G(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ir)return ir;if(rr)return rr;if(er)return er;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=or.document&&or.document.childNodes,cr=Int8Array;function ur(){return/^\s*function\s*([^(]*)/i}var fr=/^\s*function\s*([^(]*)/i;R(ur,"REGEXP",fr);var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function sr(r){return null!==r&&"object"==typeof r}function pr(r){var e,t,n,i;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=fr.exec(n.toString()))return e[1]}return sr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}R(sr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(sr));var gr="function"==typeof B||"object"==typeof cr||"function"==typeof ar?function(r){return pr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?pr(r).toLowerCase():e};function dr(r){return"function"===gr(r)}function yr(r){return"number"==typeof r}var vr=Number,br=vr.prototype.toString;var hr=Z();function wr(r){return"object"==typeof r&&(r instanceof vr||(hr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function mr(r){return yr(r)||wr(r)}R(mr,"isPrimitive",yr),R(mr,"isObject",wr);var jr=Number.POSITIVE_INFINITY,Er=vr.NEGATIVE_INFINITY,_r=Math.floor;function Sr(r){return r<jr&&r>Er&&_r(e=r)===e;var e}function xr(r){return yr(r)&&Sr(r)}function Ar(r){return wr(r)&&Sr(r.valueOf())}function Tr(r){return xr(r)||Ar(r)}function kr(r){return xr(r)&&r>0}function Fr(r){return Ar(r)&&r.valueOf()>0}function Ir(r){return kr(r)||Fr(r)}R(Tr,"isPrimitive",xr),R(Tr,"isObject",Ar),R(Ir,"isPrimitive",kr),R(Ir,"isObject",Fr);var Nr="function"==typeof D&&"symbol"==typeof D("foo")&&X(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null;function Or(r){return r!=r}var Vr="function"==typeof Float64Array;var Pr="function"==typeof Float64Array?Float64Array:null;var Cr="function"==typeof Float64Array?Float64Array:void 0;var $r=function(){var r,e,t;if("function"!=typeof Pr)return!1;try{e=new Pr([1,3.14,-3.14,NaN]),t=e,r=(Vr&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Cr:function(){throw new Error("not implemented")};function Lr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}function Rr(r,e){var t,n,i,o,a;if(a=typeof(o=r),null===o||"object"!==a&&"function"!==a||!dr(o.next))throw new TypeError(Lr("1LD3v",r));if(!kr(e))throw new TypeError(Lr("1LD45",e));return i=function(r){var e,t,n,i;if(!kr(r))throw new TypeError(F("invalid argument. Must provide a positive integer. Value: `%s`.",r));return e=new $r(r),t=0,i=-1,n=0,function(o){var a;if(0===arguments.length)return 0===n?null:t;if(i=(i+1)%r,Or(o))n=r,t=NaN;else if(n<r)n+=1,t+=o;else if(Or(e[i])){for(n=1,t=o,a=0;a<r;a++)if(a!==i){if(Or(e[a])){n=r,t=NaN;break}n+=1,t+=e[a]}}else!1===Or(t)&&(t+=o-e[i]);return e[i]=o,t}}(e),R(t={},"next",(function(){var e;if(n)return{done:!0};if((e=r.next()).done)return n=!0,{done:!0};e="number"==typeof e.value?i(e.value):i(NaN);return{value:e,done:!1}})),R(t,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Nr&&dr(r[Nr])&&R(t,Nr,(function(){return Rr(r[Nr](),e)})),t}export{Rr as default};
//# sourceMappingURL=mod.js.map
