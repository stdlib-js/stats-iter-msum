// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,a=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=c):r[t]=e.value),y="get"in e,p="set"in e,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r};var c=t;function l(r,t,e){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y=/./;function p(r){return"boolean"==typeof r}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(r,t){return null!=r&&d.call(r,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=v()?function(r){var t,e,n;if(null==r)return s.call(r);e=r[w],t=m(r,w);try{r[w]=void 0}catch(t){return s.call(r)}return n=s.call(r),t?r[w]=e:delete r[w],n}:function(r){return s.call(r)},_=Boolean.prototype.toString;var g=v();function h(r){return"object"==typeof r&&(r instanceof Boolean||(g?function(r){try{return _.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function S(r){return p(r)||h(r)}function A(){return new Function("return this;")()}l(S,"isPrimitive",p),l(S,"isObject",h);var N="object"==typeof self?self:null,E="object"==typeof window?window:null,O="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof O?O:null;var I=function(r){if(arguments.length){if(!p(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return A()}if(N)return N;if(E)return E;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),F=I.document&&I.document.childNodes,P=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;l(V,"REGEXP",x);var B=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function k(r){return null!==r&&"object"==typeof r}function C(r){var t,e,n,o;if(("Object"===(e=j(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=x.exec(n.toString()))return t[1]}return k(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(k,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!B(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(k));var G="function"==typeof y||"object"==typeof P||"function"==typeof F?function(r){return C(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?C(r).toLowerCase():t};function M(r){return"function"===G(r)}function L(r){return"number"==typeof r}var R=Number,U=R.prototype.toString;var Y=v();function X(r){return"object"==typeof r&&(r instanceof R||(Y?function(r){try{return U.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function q(r){return L(r)||X(r)}l(q,"isPrimitive",L),l(q,"isObject",X);var z=Number.POSITIVE_INFINITY,D=R.NEGATIVE_INFINITY,H=Math.floor;function J(r){return r<z&&r>D&&H(t=r)===t;var t}function K(r){return L(r)&&J(r)}function Q(r){return X(r)&&J(r.valueOf())}function W(r){return K(r)||Q(r)}function Z(r){return K(r)&&r>0}function $(r){return Q(r)&&r.valueOf()>0}function rr(r){return Z(r)||$(r)}l(W,"isPrimitive",K),l(W,"isObject",Q),l(rr,"isPrimitive",Z),l(rr,"isObject",$);var tr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function er(r){return r!=r}var nr="function"==typeof Float64Array;var or="function"==typeof Float64Array?Float64Array:null;var ur="function"==typeof Float64Array?Float64Array:void 0;var ir=function(){var r,t,e;if("function"!=typeof or)return!1;try{t=new or([1,3.14,-3.14,NaN]),e=t,r=(nr&&e instanceof Float64Array||"[object Float64Array]"===j(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ur:function(){throw new Error("not implemented")};function fr(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function ar(r,t){var e,n,o,u,i;if(i=typeof(u=r),null===u||"object"!==i&&"function"!==i||!M(u.next))throw new TypeError(fr("0fV48",r));if(!Z(t))throw new TypeError(fr("0fV4I",t));return o=function(r){var t,e,n,o;if(!Z(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return t=new ir(r),e=0,o=-1,n=0,function(u){var i;if(0===arguments.length)return 0===n?null:e;if(o=(o+1)%r,er(u))n=r,e=NaN;else if(n<r)n+=1,e+=u;else if(er(t[o])){for(n=1,e=u,i=0;i<r;i++)if(i!==o){if(er(t[i])){n=r,e=NaN;break}n+=1,e+=t[i]}}else!1===er(e)&&(e+=u-t[o]);return t[o]=u,e}}(t),l(e={},"next",(function(){var t;if(n)return{done:!0};if((t=r.next()).done)return n=!0,{done:!0};t="number"==typeof t.value?o(t.value):o(NaN);return{value:t,done:!1}})),l(e,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),tr&&M(r[tr])&&l(e,tr,(function(){return ar(r[tr](),t)})),e}export{ar as default};
//# sourceMappingURL=mod.js.map
