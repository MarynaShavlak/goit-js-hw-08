!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,m=Math.min,y=function(){return s.Date.now()};function b(e,t,n){var r,i,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function h(e){return l=e,a=setTimeout(w,t),d?b(e):f}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function w(){var e=y();if(O(e))return S(e);a=setTimeout(w,function(e){var n=t-(e-c);return s?m(n,u-(e-l)):n}(e))}function S(e){return a=void 0,v&&r?b(e):(r=i=void 0,f)}function T(){var e=y(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===a)return h(c);if(s)return a=setTimeout(w,t),b(c)}return void 0===a&&(a=setTimeout(w,t)),f}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?p(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},T.flush=function(){return void 0===a?f:S(y())},T}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||a.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var h=document.querySelector(".feedback-form"),O={},w="feedback-form-state";!function(){try{var e=JSON.parse(localStorage.getItem(w));if(null===e)return;for(var t in e)h.elements[t].value=e[t]}catch(e){console.log(e)}}(),h.addEventListener("input",e(t)((function(e){var t=e.target,n=t.name,r=t.value;O[n]=r,localStorage.setItem(w,JSON.stringify(O))}),500)),h.addEventListener("submit",(function(e){console.log(O),e.preventDefault(),h.reset(),localStorage.removeItem(w)}))}();
//# sourceMappingURL=03-feedback.54e54143.js.map
