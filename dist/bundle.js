(()=>{"use strict";var t={424:(t,e,n)=>{n.d(e,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([t.id,":root {\n    --main-background: #4666B1;\n    --primary-color: #4666B1;\n    --default-text-color: #ffffff;\n    --donate-item-text-color: #000000;\n    --default-border-color: #ffffff;\n    --button-disabled-backgound: #838383;\n}\n\n*, *::after, *::before {\n    box-sizing: border-box;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    color: var(--default-text-color);\n    background: var(--main-background);\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.app {\n    width: 100%;\n    max-width: 1200px;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto 1fr;\n\n    padding: 20px;\n    overflow: hidden;\n}\n\n.donates-container {\n    display: flex;\n    flex-direction: column;\n\n    list-style: none;\n    border-left: 10px solid var(--primary-color);\n    padding: 0;\n    max-height: 500px;\n    max-width: 500px;\n    overflow: hidden;\n}\n\n.donates-container .donate-item {\n    padding: 10px;\n}\n\n.donates-container .donate-item:nth-child(odd) {\n    background: #E1F1FF;\n}\n\n.donates-container .donate-item:nth-child(even) {\n    background: white;\n}\n\n.donate-item {\n    display: flex;\n    align-items: center;\n    color: var(--donate-item-text-color);\n}\n\n.donate-item .delete-button {\n    display: inline-block;\n    background-color: #ff5555;\n    color: #fff;\n    padding: 5px 10px;\n    border: none;\n    cursor: pointer;\n    margin-left: auto;\n}\n\n.donate-item .delete-button:hover {\n    background-color: #cc0000;\n}\n\n.donate-form {\n    display: flex;\n    flex-direction: column;\n    max-width: 400px;\n}\n\n.total-amount {\n    grid-column: 1 / 3;\n    font-size: 3rem;\n    line-height: 3rem;\n}\n\n.donate-form__donate-input {\n    font-size: 2rem;\n    line-height: 2rem;\n\n    background: var(--primary-color);\n    color: var(--default-border-color);\n    border: 2px solid var(--default-border-color);\n    border-radius: 5px;\n\n    margin-top: 5px;\n}\n\n.donate-form__input-label {\n    font-size: 2rem;\n    line-height: 2rem;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.donates-container__donates {\n    overflow: auto;\n    height: 100%;\n    flex-grow: 1;\n}\n\n.donate-form__submit-button {\n    font-size: 2rem;\n    line-height: 2.5rem;\n    cursor: pointer;\n\n    border: 2px solid var(--default-border-color);\n    border-radius: 5px;\n    color: var(--default-text-color);\n    background: none;\n    transition: 0.3s ease;\n    box-shadow: none;\n    \n    margin-top: 30px;\n}\n\n.donate-form__submit-button:hover {\n    color: var(--primary-color);\n    background: var(--default-text-color);\n}\n\n.donate-form__submit-button:focus {\n    box-shadow: 0 0 0 2px var(--default-border-color);\n}\n\n.donate-form__submit-button:disabled {\n    color: var(--default-text-color);\n    background: var(--button-disabled-backgound);\n    border-color: var(--button-disabled-backgound);\n    cursor: auto;\n}\n\n@media (max-width: 720px) {\n    body {\n        flex-direction: column;\n        align-items: center;\n        justify-content: initial;\n        flex-wrap: initial;\n        padding: 10px;\n    }\n\n    .donates-container,\n    .donate-form {\n        height: initial;\n        width: 80%;\n    }\n\n    .donates-container__title {\n        font-size: 2rem;\n        line-height: 2.5rem;\n    }\n\n    .total-amount {\n        font-size: 3.5rem;\n        line-height: 4rem;\n        text-align: center;\n    }\n\n    .donate-form__donate-input,\n    .donate-form__submit-button {\n        height: 50px;\n    }\n}",""]);const c=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},a=[],c=0;c<t.length;c++){var u=t[c],s=o.base?u[0]+o.base:u[0],l=i[s]||0,f="".concat(s," ").concat(l);i[s]=l+1;var d=n(f),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==d)e[d].references++,e[d].updater(p);else{var h=r(p,o);o.byIndex=c,e.splice(c,0,{identifier:f,updater:h,references:1})}a.push(f)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var u=o(t,r),s=0;s<i.length;s++){var l=n(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=u}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var o=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t(this,n),this.props=e,this.state={},this.$rootElement=null,this.constructor===n)throw new Error("Cannot instantiate abstract class");this.setup(e)}var o,r;return o=n,(r=[{key:"setup",value:function(){throw new Error("Method 'setup' must be implemented by derived classes")}}])&&e(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),n}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function u(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(d,t);var e,n,o,l,f=(o=d,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=s(o);if(l){var n=s(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return u(this,t)});function d(){return i(this,d),f.apply(this,arguments)}return e=d,(n=[{key:"setup",value:function(t){this.state={amount:""},this.$rootElement=document.createElement("form"),this.$rootElement.className="donate-form";var e=document.createElement("label");e.className="donate-form__input-label",e.textContent="Введите сумму в $",this.$rootElement.appendChild(e),this.$input=document.createElement("input"),this.$input.className="donate-form__donate-input",this.$input.setAttribute("name","amount"),this.$input.setAttribute("type","number"),this.$input.setAttribute("min","1"),this.$input.setAttribute("max","100"),this.$input.setAttribute("required",""),this.$button=document.createElement("button"),this.$button.className="donate-form__submit-button",this.$button.setAttribute("type","submit"),this.$button.textContent="Задонатить",e.appendChild(this.$input),this.$rootElement.appendChild(this.$button),this.$input.addEventListener("input",this.handleInput.bind(this)),this.$rootElement.addEventListener("submit",this.handleSubmit.bind(this))}},{key:"isValid",value:function(){return this.state.amount<=100&&this.state.amount>=1}},{key:"handleInput",value:function(t){var e=+t.target.value;this.state.amount=e,this.isValid()?this.$button.disabled=!1:this.$button.disabled=!0,console.log(r(e),e),console.log(this.isValid())}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.isValid()&&(this.props.onSubmit(+this.state.amount),this.state.amount="",this.$input.value="")}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),d}(o);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function m(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(o);if(r){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return m(this,t)});function a(){return d(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"setup",value:function(){this.$rootElement=document.createElement("div"),this.$rootElement.className="donates-container";var t=document.createElement("h2");t.className="donates-container__title",t.textContent="Список донатов",this.$donatesContainer=document.createElement("div"),this.$donatesContainer.className="donates-container__donates",this.$rootElement.append(t),this.$rootElement.append(this.$donatesContainer)}},{key:"addItem",value:function(t){this.$donatesContainer.appendChild(t.$rootElement)}},{key:"onRemove",value:function(t){this.$donatesContainer.removeChild(t)}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(o);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function x(t,e){return x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},x(t,e)}function E(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},$(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=$(o);if(r){var n=$(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return E(this,t)});function a(){return g(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"setup",value:function(t){var e=this;this.state={id:Date.now(),date:new Date,amount:this.props.amount},this.$rootElement=document.createElement("div"),this.$rootElement.className="donate-item",this.$rootElement.dataset.id=this.state.id,this.$rootElement.innerHTML="".concat(this.state.date.getDate(),"/").concat(this.state.date.getMonth()+1,"/").concat(this.state.date.getFullYear(),", ").concat(this.state.date.getHours(),":").concat(this.state.date.getMinutes(),":").concat(this.state.date.getSeconds()," - <b>").concat(this.state.amount,"$</b>"),this.$deleteBtn=document.createElement("button"),this.$deleteBtn.className="delete-button",this.$deleteBtn.textContent="Удалить",this.$deleteBtn.addEventListener("click",(function(){t.onRemove&&t.onRemove(e.state.id,e.state.amount)})),this.$rootElement.appendChild(this.$deleteBtn)}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(o);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function C(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function P(t,e){return P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},P(t,e)}function S(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(o);if(r){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return S(this,t)});function a(){return j(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"setup",value:function(t){this.state={sum:0,donates:[]},this.$rootElement=document.createElement("div"),this.$rootElement.className="app";var e=document.createElement("h1");e.className="total-amount",e.textContent="".concat(t.title),this.$span=document.createElement("span"),this.$span.textContent="".concat(this.state.sum),e.appendChild(this.$span),this.$rootElement.appendChild(e);var n=new l({onSubmit:this.onItemCreate.bind(this)});this.$rootElement.appendChild(n.$rootElement),this.$donateList=new y,this.$rootElement.appendChild(this.$donateList.$rootElement),this.onItemDelete=this.onItemDelete.bind(this)}},{key:"onItemCreate",value:function(t){var e=new _({amount:t,onRemove:this.onItemDelete});this.state.donates.push(e),this.state.sum+=t,this.$span.textContent="".concat(this.state.sum),this.$donateList.addItem(e),console.log(this.state.donates)}},{key:"onItemDelete",value:function(t,e){this.state.donates=this.state.donates.filter((function(e){return e.state.id!==t})),this.state.sum-=e,this.$span.textContent="".concat(this.state.sum);var n=this.$donateList.$donatesContainer.querySelector('.donate-item[data-id="'.concat(t,'"]'));console.log(n),n&&this.$donateList.onRemove(n)}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(o),T=n(379),I=n.n(T),B=n(795),N=n.n(B),D=n(569),L=n.n(D),M=n(565),A=n.n(M),z=n(216),F=n.n(z),Z=n(589),H=n.n(Z),V=n(424),q={};q.styleTagTransform=H(),q.setAttributes=A(),q.insert=L().bind(null,"head"),q.domAPI=N(),q.insertStyleElement=F(),I()(V.Z,q),V.Z&&V.Z.locals&&V.Z.locals,document.addEventListener("DOMContentLoaded",(function(){document.body.appendChild(new R({title:"Итого: $"}).$rootElement)}))})()})();