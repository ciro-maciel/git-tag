module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/server.js")}({"./src/components/button.js":
/*!**********************************!*\
  !*** ./src/components/button.js ***!
  \**********************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r,a,o=n(/*! styled-components */"styled-components"),c=n.n(o),i=(r=["\n    color: #24292e;\n    background-color: #eff3f6;\n    background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);\n    position: relative;\n    display: inline-block;\n    padding: 2px 12px;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 20px;\n    white-space: nowrap;\n    vertical-align: middle;\n    cursor: pointer;\n    user-select: none;\n    background-repeat: repeat-x;\n    background-position: -1px -1px;\n    background-size: 110% 110%;\n    border: 1px solid rgba(27,31,35,0.2);\n    border-radius: 0.25em;\n    appearance: none;\n"],a=["\n    color: #24292e;\n    background-color: #eff3f6;\n    background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);\n    position: relative;\n    display: inline-block;\n    padding: 2px 12px;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 20px;\n    white-space: nowrap;\n    vertical-align: middle;\n    cursor: pointer;\n    user-select: none;\n    background-repeat: repeat-x;\n    background-position: -1px -1px;\n    background-size: 110% 110%;\n    border: 1px solid rgba(27,31,35,0.2);\n    border-radius: 0.25em;\n    appearance: none;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(a)}})));var s=c.a.div(i);t.default=s},"./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"react"),a=n.n(r),o=n(/*! rebass */"rebass"),c=n(/*! ../containers/i18n */"./src/containers/i18n/index.js");t.default=function(){return a.a.createElement(o.Flex,{width:1,pb:1,justifyContent:"center",alignItems:"center"},a.a.createElement(c.I18nOption,null))}},"./src/components/input.js":
/*!*********************************!*\
  !*** ./src/components/input.js ***!
  \*********************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r,a,o=n(/*! styled-components */"styled-components"),c=n.n(o),i=(r=["\n    height: 27px;\n    width: 100%;\n    font-size: 12px;\n    border: 1px solid #ccc;\n    padding: 3px 3px 3px 5px;\n    margin: 0 0 11px 0;\n    box-sizing: border-box;\n    outline: 0;\n    resize: none;\n"],a=["\n    height: 27px;\n    width: 100%;\n    font-size: 12px;\n    border: 1px solid #ccc;\n    padding: 3px 3px 3px 5px;\n    margin: 0 0 11px 0;\n    box-sizing: border-box;\n    outline: 0;\n    resize: none;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(a)}})));var s=c.a.input(i);t.default=s},"./src/components/link.js":
/*!********************************!*\
  !*** ./src/components/link.js ***!
  \********************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r,a,o=n(/*! react */"react"),c=n.n(o),i=n(/*! styled-components */"styled-components"),s=n.n(i),l=n(/*! react-router-dom */"react-router-dom"),u=(r=["\n\tcolor: palevioletred;\n\tfont-weight: bold;\n"],a=["\n\tcolor: palevioletred;\n\tfont-weight: bold;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(a)}})));var p=s()(function(e){var t=e.url,n=e.children;!function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}(e,["url","children"]);return c.a.createElement(l.Link,{to:t},n)})(u);t.default=p},"./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"react"),a=n.n(r),o=n(/*! styled-components */"styled-components"),c=n.n(o),i=n(/*! ./link */"./src/components/link.js"),s=f(["\n    display: flex;\n    flex-direction: column;\n    background-color: ",";\n    padding: 0.75rem;\n"],["\n    display: flex;\n    flex-direction: column;\n    background-color: ",";\n    padding: 0.75rem;\n"]),l=f(["\n    display: flex;\n    justify-content: center;\n    font-weight: bold;\n    font-size: 1.125rem;\n    margin-top: 0 !important;\n    margin-bottom: 1rem;\n    text-transform: uppercase;\n"],["\n    display: flex;\n    justify-content: center;\n    font-weight: bold;\n    font-size: 1.125rem;\n    margin-top: 0 !important;\n    margin-bottom: 1rem;\n    text-transform: uppercase;\n"]),u=f(["\n    padding: 5px;\n"],["\n    padding: 5px;\n"]),p=f(["\n    list-style-type: none;\n    padding-left: 0px;\n    margin: 0px;\n"],["\n    list-style-type: none;\n    padding-left: 0px;\n    margin: 0px;\n"]);function f(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d=c.a.div(s,function(e){return e.theme.background}),m=c.a.div(l),b=c.a.li(u),x=function(e){return e.items.map(function(e){return a.a.createElement(b,{key:e.display},a.a.createElement(i.default,{url:e.url},e.display))})},g=c.a.ul(p);t.default=function(e){var t=e.title,n=e.items;!function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}(e,["title","items"]);return a.a.createElement(d,null,a.a.createElement(m,null,t),a.a.createElement(g,null,a.a.createElement(x,{items:n})))}},"./src/components/table-user.js":
/*!**************************************!*\
  !*** ./src/components/table-user.js ***!
  \**************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r,a,o=n(/*! react */"react"),c=n.n(o),i=n(/*! styled-components */"styled-components"),s=n.n(i),l=(r=["\n    margin-top: 10px;\n    border-collapse: collapse;\n    border-spacing: 0;\n    max-width: 100%;\n    width: 100%;\n    empty-cells: show;\n    border: 1px solid rgba(0, 0, 0, 0.05);\n    line-height: 24px;\n    tr:nth-child(odd) td {\n        background: #f8f8f8;\n    }\n"],a=["\n    margin-top: 10px;\n    border-collapse: collapse;\n    border-spacing: 0;\n    max-width: 100%;\n    width: 100%;\n    empty-cells: show;\n    border: 1px solid rgba(0, 0, 0, 0.05);\n    line-height: 24px;\n    tr:nth-child(odd) td {\n        background: #f8f8f8;\n    }\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(a)}})));var u=s()(function(e){var t=e.items,n=e.className;!function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}(e,["items","className"]);return c.a.createElement("table",{className:n},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",null),c.a.createElement("td",null),c.a.createElement("td",null))),c.a.createElement("tbody",null,Object.keys(t).map(function(e,n){return c.a.createElement("tr",{key:t[e].id},c.a.createElement("td",null,c.a.createElement("img",{src:t[e].avatar_url,style:{width:"36px"}})),c.a.createElement("td",null,c.a.createElement("a",{href:t[e].html_url,target:"_blank"},t[e].login)),c.a.createElement("td",null,c.a.createElement("a",{href:t[e].repos_url,target:"_blank"},"Repositories")),c.a.createElement("td",null,c.a.createElement("a",{href:t[e].organizations_url,target:"_blank"},"Organizations")))})))})(l);t.default=u},"./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"react"),a=n.n(r),o=n(/*! react-redux */"react-redux"),c=n(/*! react-helmet */"react-helmet"),i=(n(/*! react-router-dom */"react-router-dom"),n(/*! react-intl */"react-intl")),s=n(/*! rebass */"rebass"),l=n(/*! marked */"marked"),u=n.n(l),p=n(/*! ../../components/footer */"./src/components/footer.js"),f=n(/*! ../../components/menu */"./src/components/menu.js"),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var m=new u.a.Renderer;m.link=function(e,t,n){return e.indexOf("#")>-1?"<a href=#/"+e+">"+n+"</a>":"<a href="+e+">"+n+"</a>"};var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),d(t,[{key:"createMarkup",value:function(e){return{__html:u()(e,{renderer:m})}}},{key:"render",value:function(){var e=this.props.intl;return a.a.createElement(s.Flex,{justifyContent:"center"},a.a.createElement(c.Helmet,null,a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("title",null,"@ciro-maciel/My version of React/Preact Application Boilerplate"),a.a.createElement("link",{rel:"canonical",href:"https://ciro-maciel.github.io/react-app-boilerplate/"})),a.a.createElement(s.Flex,{flexWrap:"wrap",width:1024},a.a.createElement(s.Flex,{flexWrap:"wrap",width:1},a.a.createElement(s.Box,{width:[1,.25],p:[1,2]},a.a.createElement(f.default,{title:e.formatMessage({id:"6592623"}),items:[{display:e.formatMessage({id:"71ef8f1"}),url:"/"},{display:e.formatMessage({id:"6871c58"}),url:"/users"}]})),a.a.createElement(s.Box,{width:[1,.75],p:[1,2]})),a.a.createElement(p.default,null)))}}]),t}();t.default=Object(o.connect)(function(e){return{i18n:e.i18n}},function(e){return{handleChange:function(t){return e(i18nChange(t))}}})(Object(i.injectIntl)(b))},"./src/containers/Users/actions.js":
/*!*****************************************!*\
  !*** ./src/containers/Users/actions.js ***!
  \*****************************************/
/*! exports provided: usersRequest, usersReceive, usersFailure */function(e,t,n){"use strict";n.r(t),n.d(t,"usersRequest",function(){return a}),n.d(t,"usersReceive",function(){return o}),n.d(t,"usersFailure",function(){return c});var r=n(/*! ./types */"./src/containers/Users/types.js");function a(e){return{type:r.USERS_REQUEST,payload:e}}function o(e){return{type:r.USERS_RECEIVE,payload:e}}function c(e){return{type:r.USERS_FAILURE,payload:e,error:!0}}},"./src/containers/Users/epic.js":
/*!**************************************!*\
  !*** ./src/containers/Users/epic.js ***!
  \**************************************/
/*! exports provided: users */function(e,t,n){"use strict";n.r(t),n.d(t,"users",function(){return i});var r=n(/*! ./types */"./src/containers/Users/types.js"),a=n(/*! ./actions */"./src/containers/Users/actions.js"),o=n(/*! rxjs/Rx */"rxjs/Rx"),c=process.env.API_URL,i=function(e,t){return o.Observable.merge(e.ofType(r.USERS_REQUEST).switchMap(function(e){var t,n=e.payload;return(t=n,o.Observable.ajax.get(c+"/search/users?q="+t+"&per_page=100",{"Content-Type":"text/plain"})).map(function(e){var t=e.response;return Object(a.usersReceive)(t)}).catch(function(e){var t=e.status;return o.Observable.of(Object(a.usersFailure)(t))})}))}},"./src/containers/Users/index.js":
/*!***************************************!*\
  !*** ./src/containers/Users/index.js ***!
  \***************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"react"),a=n.n(r),o=n(/*! react-redux */"react-redux"),c=n(/*! react-router-dom */"react-router-dom"),i=n(/*! react-helmet */"react-helmet"),s=n(/*! react-intl */"react-intl"),l=n(/*! rebass */"rebass"),u=(n(/*! ../i18n */"./src/containers/i18n/index.js"),n(/*! ../../components/footer */"./src/components/footer.js")),p=n(/*! ../../components/button */"./src/components/button.js"),f=(n(/*! ../../components/menu */"./src/components/menu.js"),n(/*! ../../components/input */"./src/components/input.js")),d=n(/*! ../../components/table-user */"./src/components/table-user.js"),m=n(/*! ./actions */"./src/containers/Users/actions.js"),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var x=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),b(t,[{key:"render",value:function(){var e=this,t=this.props,n=(t.intl,t.handleSearch),r=t.users;return a.a.createElement(l.Flex,{justifyContent:"center"},a.a.createElement(i.Helmet,null,a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("title",null,"@ciro-maciel/My version of React/Preact Application Boilerplate"),a.a.createElement("link",{rel:"canonical",href:"https://ciro-maciel.github.io/react-app-boilerplate/"})),a.a.createElement(l.Flex,{flexWrap:"wrap",width:1024},a.a.createElement(l.Flex,{flexWrap:"wrap",width:1},a.a.createElement(l.Box,{width:1,p:[1,2]},a.a.createElement(c.Link,{to:"/"},a.a.createElement(s.FormattedMessage,{id:"b4db309"})),a.a.createElement("h2",null," Pesquisa de Usuarios "),a.a.createElement(f.default,{type:"text",ref:function(t){e.textQuery=t}}),a.a.createElement(p.default,{onClick:function(){return n(e.textQuery.value)}},"Procurar"),r.found&&r.found.items&&a.a.createElement(d.default,{items:r.found.items}))),a.a.createElement(u.default,null)))}}]),t}();t.default=Object(o.connect)(function(e){return{users:e.users}},function(e){return{handleSearch:function(t){return e(Object(m.usersRequest)(t))}}})(Object(s.injectIntl)(x))},"./src/containers/Users/reducer.js":
/*!*****************************************!*\
  !*** ./src/containers/Users/reducer.js ***!
  \*****************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var r=n(/*! ./types */"./src/containers/Users/types.js"),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o={query:"",found:null,isRequesting:!1,isError:!1,errorMessage:""};function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case r.USERS_REQUEST:return a({},e,{query:t.payload,isRequesting:!0,isError:!1,errorMessage:""});case r.USERS_RECEIVE:return a({},e,{found:t.payload,isRequesting:!1});case r.USERS_FAILURE:return a({},e,{isRequesting:!1,isError:!0,errorMessage:t.payload});default:return e}}},"./src/containers/Users/types.js":
/*!***************************************!*\
  !*** ./src/containers/Users/types.js ***!
  \***************************************/
/*! exports provided: USERS_REQUEST, USERS_FAILURE, USERS_RECEIVE */function(e,t,n){"use strict";n.r(t),n.d(t,"USERS_REQUEST",function(){return r}),n.d(t,"USERS_FAILURE",function(){return a}),n.d(t,"USERS_RECEIVE",function(){return o});var r="USERS_REQUEST",a="USERS_FAILURE",o="USERS_RECEIVE"},"./src/containers/i18n/actions.js":
/*!****************************************!*\
  !*** ./src/containers/i18n/actions.js ***!
  \****************************************/
/*! exports provided: i18nChange */function(e,t,n){"use strict";n.r(t),n.d(t,"i18nChange",function(){return a});var r=n(/*! ./types */"./src/containers/i18n/types.js");function a(e){return{type:r.I18n_CHANGE,payload:e}}},"./src/containers/i18n/data/en-US.js":
/*!*******************************************!*\
  !*** ./src/containers/i18n/data/en-US.js ***!
  \*******************************************/
/*! no static exports found */function(e,t){e.exports={6592623:"Menu","71ef8f1":"Home","6871c58":"Users","3b17930":"Repositories",b4db309:"Return to Home"}},"./src/containers/i18n/data/pt-BR.js":
/*!*******************************************!*\
  !*** ./src/containers/i18n/data/pt-BR.js ***!
  \*******************************************/
/*! no static exports found */function(e,t){e.exports={6592623:"Menu","71ef8f1":"Home","6871c58":"Usuários","3b17930":"Repositórios",b4db309:"Retornar para a Home"}},"./src/containers/i18n/index.js":
/*!**************************************!*\
  !*** ./src/containers/i18n/index.js ***!
  \**************************************/
/*! exports provided: I18nProvider, I18nOption */function(e,t,n){"use strict";n.r(t),n.d(t,"I18nProvider",function(){return d}),n.d(t,"I18nOption",function(){return b});var r=n(/*! react */"react"),a=n.n(r),o=n(/*! react-redux */"react-redux"),c=n(/*! react-intl */"react-intl"),i=n(/*! ./actions */"./src/containers/i18n/actions.js"),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=function(e){function t(e){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return p(t,r["Component"]),s(t,[{key:"render",value:function(){var e=this.props,t=e.i18n,n=t.locale,r=t.messages,o=e.children;return a.a.createElement(c.IntlProvider,{locale:n,messages:r},o)}}]),t}(),d=Object(o.connect)(function(e){return{i18n:e.i18n}})(f),m=function(e){function t(e){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return p(t,r["Component"]),s(t,[{key:"render",value:function(){var e=this.props,t=e.i18n.locale,n=e.handleChange;return a.a.createElement("select",{onChange:function(e){return n(e.target.value)},value:t},a.a.createElement("option",{value:"en-US"},"English (US)"),a.a.createElement("option",{value:"pt-BR"},"Português (Brasil)"))}}]),t}(),b=Object(o.connect)(function(e){return{i18n:e.i18n}},function(e){return{handleChange:function(t){return e(Object(i.i18nChange)(t))}}})(m)},"./src/containers/i18n/reducer.js":
/*!****************************************!*\
  !*** ./src/containers/i18n/reducer.js ***!
  \****************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return E});var r=n(/*! ./types */"./src/containers/i18n/types.js"),a=n(/*! react-intl */"react-intl"),o=n(/*! react-intl/locale-data/pt */"react-intl/locale-data/pt"),c=n.n(o),i=n(/*! react-intl/locale-data/en */"react-intl/locale-data/en"),s=n.n(i),l=n(/*! ./data/pt-BR */"./src/containers/i18n/data/pt-BR.js"),u=n.n(l),p=n(/*! ./data/en-US */"./src/containers/i18n/data/en-US.js"),f=n.n(p),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function m(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var b={pt:u.a,"pt-BR":u.a,"en-US":f.a};Object(a.addLocaleData)([].concat(m(s.a),m(c.a)));var x="undefined"!=typeof window&&(navigator.languages&&navigator.languages[0]||navigator.language||navigator.usserLanguage)||"pt-BR",g="undefined"!=typeof window&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent("locale").replace(/[\\]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null,h=g||x,y={locale:h,messages:j(b[h])};function v(e){var t=(new Date).setDate((new Date).getDate()+360),n="undefined"!=typeof window&&"localhost"===window.location.hostname?"localhost":"@ciro-maciel";"undefined"!=typeof window&&(document.cookie=encodeURIComponent("locale")+"="+encodeURIComponent(e)+"; expires="+t+(n?"; domain="+n:"")+"; path=/")}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object.keys(e).reduce(function(n,r){var a=e[r],o=t?t+"."+r:r;return"string"==typeof a?n[o]=a:Object.assign(n,j(a,o)),n},{})}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments[1];switch(t.type){case r.I18n_CHANGE:var n=t.payload;return v(n),d({},e,{locale:n,messages:j(b[n])});default:return e}}v(h)},"./src/containers/i18n/types.js":
/*!**************************************!*\
  !*** ./src/containers/i18n/types.js ***!
  \**************************************/
/*! exports provided: I18n_CHANGE */function(e,t,n){"use strict";n.r(t),n.d(t,"I18n_CHANGE",function(){return r});var r="i18n_CHANGE"},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! react */"react"),a=n.n(r),o=n(/*! react-redux */"react-redux"),c=n(/*! ./middleware/routes */"./src/middleware/routes.js"),i=n(/*! ./middleware/store */"./src/middleware/store.js");t.default=function(){return a.a.createElement(o.Provider,{store:i.default},a.a.createElement(c.default,null))}},"./src/middleware/epics.js":
/*!*********************************!*\
  !*** ./src/middleware/epics.js ***!
  \*********************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! redux-observable */"redux-observable"),a=n(/*! ../containers/Users/epic */"./src/containers/Users/epic.js");t.default=Object(r.combineEpics)(a.users)},"./src/middleware/reducers.js":
/*!************************************!*\
  !*** ./src/middleware/reducers.js ***!
  \************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! redux */"redux"),a=n(/*! ../containers/i18n/reducer */"./src/containers/i18n/reducer.js"),o=n(/*! ../containers/Users/reducer */"./src/containers/Users/reducer.js");t.default=Object(r.combineReducers)({i18n:a.default,users:o.default})},"./src/middleware/routes.js":
/*!**********************************!*\
  !*** ./src/middleware/routes.js ***!
  \**********************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r,a,o=n(/*! react */"react"),c=n.n(o),i=n(/*! react-router */"react-router"),s=n(/*! react-router-dom */"react-router-dom"),l=n(/*! react-x-ray */"react-x-ray"),u=n.n(l),p=n(/*! rebass */"rebass"),f=n(/*! ../containers/i18n */"./src/containers/i18n/index.js"),d=n(/*! ../containers/Home */"./src/containers/Home/index.js"),m=n(/*! ../containers/Users */"./src/containers/Users/index.js"),b=n(/*! styled-components */"styled-components"),x=(r=['\n\thtml,\n\tbody, \n\t#container {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t} \n\n\thtml {\n\t\tcolor: #666665;\n\t\tfont-family: "lucida grande", tahoma, verdana, arial, sans-serif;\n\t\tfont-size: 12px;\n\t}\n'],a=['\n\thtml,\n\tbody, \n\t#container {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t} \n\n\thtml {\n\t\tcolor: #666665;\n\t\tfont-family: "lucida grande", tahoma, verdana, arial, sans-serif;\n\t\tfont-size: 12px;\n\t}\n'],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(a)}})));var g=Object(b.createGlobalStyle)(x),h=function(e){var t=e.code,n=e.children;return c.a.createElement(i.Route,{render:function(e){var r=e.staticContext;return r&&(r.status=t),n}})},y=function(){return c.a.createElement(h,{code:404},c.a.createElement(p.Flex,{justifyContent:"center",alignItems:"center",style:{height:"100%"}},c.a.createElement(p.Flex,{wrap:!0,width:1024},c.a.createElement(p.Box,{width:1,style:{textAlign:"center"}},c.a.createElement("h1",null,"Sorry, can’t find that."),c.a.createElement("p",null,"Go to ",c.a.createElement(s.Link,{to:"/"},"Home"))))))},v=function(){return c.a.createElement(i.Switch,null,c.a.createElement(i.Route,{exact:!0,path:"/",component:d.default}),c.a.createElement(i.Route,{exact:!0,path:"/users",component:m.default}),c.a.createElement(i.Route,{exact:!0,path:"/repository/:repositoryName",render:function(){return c.a.createElement("div",null,props.match.params.repositoryName)}}),c.a.createElement(i.Route,{component:y}))};t.default=function(){return c.a.createElement(f.I18nProvider,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(g,null),c.a.createElement(u.a,{disabled:!1,color:"#e5a87d",backgroundColor:"#004d84",style:{height:"100%"}},c.a.createElement(v,null))))}},"./src/middleware/store.js":
/*!*********************************!*\
  !*** ./src/middleware/store.js ***!
  \*********************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! redux */"redux"),a=n(/*! redux-observable */"redux-observable"),o=n(/*! ./reducers */"./src/middleware/reducers.js"),c=n(/*! ./epics */"./src/middleware/epics.js"),i=[Object(a.createEpicMiddleware)(c.default)],s=null,l=n(/*! redux-logger */"redux-logger").logger;i.push(l),s=Object(r.createStore)(o.default,r.applyMiddleware.apply(void 0,i)),console.log(s.getState()),t.default=s},"./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: handler */function(e,t,n){"use strict";n.r(t),n.d(t,"handler",function(){return y});var r=n(/*! fs */"fs"),a=n.n(r),o=n(/*! react */"react"),c=n.n(o),i=n(/*! react-dom/server */"react-dom/server"),s=n(/*! styled-components */"styled-components"),l=n(/*! react-router */"react-router"),u=n(/*! react-helmet */"react-helmet"),p=n.n(u),f=n(/*! ./index */"./src/index.js"),d=(n(/*! path */"path"),n(/*! express */"express")),m=n(/*! compression */"compression"),b=n(/*! aws-serverless-express */"aws-serverless-express"),x=n(/*! aws-serverless-express/middleware */"aws-serverless-express/middleware"),g=d();g.use(x.eventContext()),g.set("x-powered-by",!1),g.use(m()),g.get("/event",function(e,t){t.json(e.apiGateway.event)}),g.use("/assets",d.static("./www/assets")),g.get("**",function(e,t){var n={},r=new s.ServerStyleSheet,o=Object(i.renderToString)(r.collectStyles(c.a.createElement(l.StaticRouter,{location:e.url,context:n},c.a.createElement(f.default,null)))),u=p.a.renderStatic(),d=r.getStyleTags(),m=a.a.readFileSync("./www/index.html","utf8");m=(m=(m=(m=(m=m.replace("\x3c!--title--\x3e",u.title.toString())).replace("\x3c!--meta--\x3e",u.meta.toString())).replace("\x3c!--link--\x3e",u.link.toString())).replace("\x3c!--style--\x3e",d)).replace("\x3c!--html--\x3e",o),n.url?(t.writeHead(302,{Location:n.url}),t.end()):(t.writeHead(200,{"Content-Type":"text/html"}),t.write(m),t.end())});var h=b.createServer(g,null,["application/javascript","application/json","application/octet-stream","application/x-font-ttf","application/x-font-woff","application/font-woff","application/font-woff2","application/xml","font/eot","font/woff","font/opentype","font/otf","image/jpeg","image/png","image/svg+xml","image/x-icon","text/comma-separated-values","text/css","text/html","text/javascript","text/plain","text/text","text/xml"]),y=function(e,t){return b.proxy(h,e,t)}},"aws-serverless-express":
/*!*****************************************!*\
  !*** external "aws-serverless-express" ***!
  \*****************************************/
/*! no static exports found */function(e,t){e.exports=require("aws-serverless-express")},"aws-serverless-express/middleware":
/*!****************************************************!*\
  !*** external "aws-serverless-express/middleware" ***!
  \****************************************************/
/*! no static exports found */function(e,t){e.exports=require("aws-serverless-express/middleware")},compression:
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */function(e,t){e.exports=require("compression")},express:
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */function(e,t){e.exports=require("express")},fs:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */function(e,t){e.exports=require("fs")},marked:
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */function(e,t){e.exports=require("marked")},path:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */function(e,t){e.exports=require("path")},react:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */function(e,t){e.exports=require("react")},"react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */function(e,t){e.exports=require("react-dom/server")},"react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */function(e,t){e.exports=require("react-helmet")},"react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */function(e,t){e.exports=require("react-intl")},"react-intl/locale-data/en":
/*!********************************************!*\
  !*** external "react-intl/locale-data/en" ***!
  \********************************************/
/*! no static exports found */function(e,t){e.exports=require("react-intl/locale-data/en")},"react-intl/locale-data/pt":
/*!********************************************!*\
  !*** external "react-intl/locale-data/pt" ***!
  \********************************************/
/*! no static exports found */function(e,t){e.exports=require("react-intl/locale-data/pt")},"react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */function(e,t){e.exports=require("react-redux")},"react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */function(e,t){e.exports=require("react-router")},"react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */function(e,t){e.exports=require("react-router-dom")},"react-x-ray":
/*!******************************!*\
  !*** external "react-x-ray" ***!
  \******************************/
/*! no static exports found */function(e,t){e.exports=require("react-x-ray")},rebass:
/*!*************************!*\
  !*** external "rebass" ***!
  \*************************/
/*! no static exports found */function(e,t){e.exports=require("rebass")},redux:
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */function(e,t){e.exports=require("redux")},"redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */function(e,t){e.exports=require("redux-logger")},"redux-observable":
/*!***********************************!*\
  !*** external "redux-observable" ***!
  \***********************************/
/*! no static exports found */function(e,t){e.exports=require("redux-observable")},"rxjs/Rx":
/*!**************************!*\
  !*** external "rxjs/Rx" ***!
  \**************************/
/*! no static exports found */function(e,t){e.exports=require("rxjs/Rx")},"styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */function(e,t){e.exports=require("styled-components")}});
//# sourceMappingURL=server.js.map