!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r),r.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a.default(e,t,n[t])}))}return e};var u,a=(u=r("hKHmD"))&&u.__esModule?u:{default:u};var c=r("h6c0i"),l=document.querySelector(".form"),f={position:"center-top",distance:"20px",timeout:3500,pauseOnHover:!1};function s(e,t){return new Promise((function(n,o){Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}))}l.addEventListener("submit",(function(t){t.preventDefault();var n=t.currentTarget.elements,o=n.delay,r=n.step,u=n.amount,a=Number(r.value),l=Number(u.value),d=Number(o.value),p=1;l<=0?c.Notify.failure("Amount must be greater than 0",e(i)({},f,{timeout:3e3})):setTimeout((function(){s(p,d).then((function(e){var t=e.position,n=e.delay;c.Notify.success("Fulfilled promise ".concat(t," in ").concat(n,"ms"),f)})).catch((function(e){var t=e.position,n=e.delay;c.Notify.failure("Rejected promise ".concat(t," in ").concat(n,"ms"),f)})),setInterval((function(){if(p!==l){var e=d+=a;s(++p,e).then((function(e){var t=e.position,n=e.delay;c.Notify.success("Fulfilled promise ".concat(t," in ").concat(n,"ms"),f)})).catch((function(e){var t=e.position,n=e.delay;c.Notify.failure("Rejected promise ".concat(t," in ").concat(n,"ms"),f)}))}}),a)}),d)}))}();
//# sourceMappingURL=03-promises.444ac0f4.js.map
