!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire7bc7=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a.default(e,t,n[t])}))}return e};var u,a=(u=o("hKHmD"))&&u.__esModule?u:{default:u};var l=o("h6c0i"),c=document.querySelector(".form"),f={position:"center-top",distance:"20px",timeout:3500,pauseOnHover:!1};function s(e,t){return new Promise((function(n,r){var o=Math.random()>.3;setTimeout((function(){o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}c.addEventListener("submit",(function(t){t.preventDefault();var n=t.currentTarget.elements,r=n.delay,o=n.step,u=n.amount,a=Number(o.value),c=Number(u.value),d=Number(r.value);if(c<=0)l.Notify.failure("Amount must be greater than 0",e(i)({},f,{timeout:3e3}));else if(d<0||a<0)l.Notify.failure("Delay cannot be a negative number",e(i)({},f,{timeout:3e3}));else for(var p=1;p<=c;p++)s(p,d).then((function(e){var t=e.position,n=e.delay;l.Notify.success("Fulfilled promise ".concat(t," in ").concat(n,"ms"),f)})).catch((function(e){var t=e.position,n=e.delay;l.Notify.failure("Rejected promise ".concat(t," in ").concat(n,"ms"),f)})),d+=a}))}();
//# sourceMappingURL=03-promises.b47bbdb5.js.map
