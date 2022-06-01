// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-msum@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var d=e,m=t,l=r.isPrimitive,f=s,p=n,u=i,j=o;var a=function e(t,r){var s,n,i;if(!m(t))throw new TypeError(j("0fV48",t));if(!l(r))throw new TypeError(j("0fV4I",r));return i=u(r),d(s={},"next",(function(){var e;if(n)return{done:!0};if((e=t.next()).done)return n=!0,{done:!0};e="number"==typeof e.value?i(e.value):i(NaN);return{value:e,done:!1}})),d(s,"return",(function(e){if(n=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),p&&f(t[p])&&d(s,p,(function(){return e(t[p](),r)})),s},h=a;export{h as default};
//# sourceMappingURL=index.mjs.map
