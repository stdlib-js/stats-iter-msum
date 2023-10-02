// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.1.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-msum@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function d(m,l){var p,u,v;if(!t(m))throw new TypeError(o("1LD3v,IA",m));if(!r(l))throw new TypeError(o("1LD45,IB",l));return v=i(l),e(p={},"next",(function(){var e;if(u)return{done:!0};if((e=m.next()).done)return u=!0,{done:!0};e="number"==typeof e.value?v(e.value):v(NaN);return{value:e,done:!1}})),e(p,"return",(function(e){if(u=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),n&&s(m[n])&&e(p,n,(function(){return d(m[n](),l)})),p}export{d as default};
//# sourceMappingURL=index.mjs.map
