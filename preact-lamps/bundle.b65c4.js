!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=0)}({0:function(t,e,n){t.exports=n("pwNi")},JkW7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("WMsV"),r=(n.n(o),n("yY49")),i=(n.n(r),n("Mw+g")),u=[],l=function(t){var e=t.filterValue,r=t.setFilterValue,l=t.setItemsFiltered,c=n.i(i.a)(function(t){console.log(u),r(t.target.value),l(u.filter(function(e){return-1!==(e[1]+" "+e[2]).toLocaleLowerCase().indexOf(t.target.value)}))},[]);return n.i(o.h)("div",null,n.i(o.h)("input",{value:e,onInput:c,placeholder:"Filter"}))},c=n.i(o.h)("br",null),a=function(t){var e=t.item;return n.i(o.h)("div",null,n.i(o.h)("span",null,"Brand: ",e[1]),c,n.i(o.h)("span",null,"Model: ",e[2]),n.i(o.h)("div",null,n.i(o.h)("img",{src:"http://lamptest.ru/images/photo/"+e[52]+".jpg"})))},s=function(){var t=n.i(i.b)([]),e=t[0],r=t[1],c=n.i(i.b)(null),s=c[0],f=c[1],p=n.i(i.b)(""),_=p[0],d=p[1];return n.i(i.c)(function(){var t=new Headers;t.append("Content-Type","text/csv; charset=windows-1251"),fetch("https://lamptest.ru/led.php",t).then(function(t){return t.text()}).then(function(t){var e=t.split("\n").map(function(t){return t.split(";")}).slice(1);u=JSON.parse(JSON.stringify(e)),r(JSON.parse(JSON.stringify(e)))})},[]),n.i(o.h)("div",{class:"table"},n.i(o.h)("div",{class:"sidebar"},n.i(o.h)(l,{filterValue:_,setFilterValue:d,setItemsFiltered:r}),e.map(function(t){return n.i(o.h)("div",{class:"sidebar-item",onClick:function(){return f(t)}},t[1]," ",t[2])})),n.i(o.h)("div",{class:"content"},s&&n.i(o.h)(a,{item:s})))};"undefined"!=typeof window&&n.i(o.render)(n.i(o.h)(s,null),document.body)},"Mw+g":function(t,e,n){"use strict";function o(t){m.options.__h&&m.options.__h(h);var e=h.__H||(h.__H={o:[],t:[],i:[],u:[]});return t>=e.o.length&&e.o.push({}),e.o[t]}function r(t){return i(d,t)}function i(t,e,n){var r=o(v++);return r.__c||(r.__c=h,r.v=[n?n(e):d(void 0,e),function(e){var n=t(r.v[0],e);r.v[0]!==n&&(r.v[0]=n,r.__c.setState({}))}]),r.v}function u(t,e){var n=o(v++);_(n.m,e)&&(n.v=t,n.m=e,h.__H.t.push(n),x(h))}function l(t,e){var n=o(v++);return _(n.m,e)?(n.m=e,n.p=t,n.v=t()):n.v}function c(t,e){return l(function(){return t},e)}function a(){b.some(function(t){t.s=!1,t.__P&&(t.__H.t=s(t.__H.t))}),b=[]}function s(t){return t.forEach(f),t.forEach(p),[]}function f(t){t.l&&t.l()}function p(t){var e=t.v();"function"==typeof e&&(t.l=e)}function _(t,e){return!t||e.some(function(e,n){return e!==t[n]})}function d(t,e){return"function"==typeof e?e(t):e}n.d(e,"b",function(){return r}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return c});var v,h,m=n("WMsV"),b=(n.n(m),[]),y=m.options.__r;m.options.__r=function(t){y&&y(t),v=0,(h=t.__c).__H&&(h.__H.t=s(h.__H.t))};var g=m.options.diffed;m.options.diffed=function(t){g&&g(t);var e=t.__c;if(e){var n=e.__H;n&&(n.u=(n.u.some(function(t){t.ref&&(t.ref.current=t.createHandle())}),[]),n.i=s(n.i))}};var w=m.options.unmount;m.options.unmount=function(t){w&&w(t);var e=t.__c;if(e){var n=e.__H;n&&n.o.forEach(function(t){return t.l&&t.l()})}};var x=function(){};if("undefined"!=typeof window){var N=m.options.requestAnimationFrame;x=function(t){(!t.s&&(t.s=!0)&&1===b.push(t)||N!==m.options.requestAnimationFrame)&&(N=m.options.requestAnimationFrame,(m.options.requestAnimationFrame||function(t){var e=function(){clearTimeout(n),cancelAnimationFrame(o),setTimeout(t)},n=setTimeout(e,100),o=requestAnimationFrame(e)})(a))}}},WMsV:function(t){!function(){"use strict";function e(t,e){var n,o,r,i,u=V;for(i=arguments.length;i-- >2;)F.push(arguments[i]);for(e&&null!=e.children&&(F.length||F.push(e.children),delete e.children);F.length;)if((o=F.pop())&&void 0!==o.pop)for(i=o.length;i--;)F.push(o[i]);else"boolean"==typeof o&&(o=null),(r="function"!=typeof t)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(r=!1)),r&&n?u[u.length-1]+=o:u===V?u=[o]:u.push(o),n=r;var l=new U;return l.nodeName=t,l.children=u,l.attributes=null==e?void 0:e,l.key=null==e?void 0:e.key,void 0!==T.vnode&&T.vnode(l),l}function n(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e){t&&("function"==typeof t?t(e):t.current=e)}function r(t,o){return e(t.nodeName,n(n({},t.attributes),o),arguments.length>2?[].slice.call(arguments,2):t.children)}function i(t){!t.__d&&(t.__d=!0)&&1==A.push(t)&&(T.debounceRendering||L)(u)}function u(){for(var t;t=A.pop();)t.__d&&C(t)}function l(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&c(t,e.nodeName):n||t._componentConstructor===e.nodeName}function c(t,e){return t.__n===e||t.nodeName.toLowerCase()===e.toLowerCase()}function a(t){var e=n({},t.attributes);e.children=t.children;var o=t.nodeName.defaultProps;if(void 0!==o)for(var r in o)void 0===e[r]&&(e[r]=o[r]);return e}function s(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.__n=t,n}function f(t){var e=t.parentNode;e&&e.removeChild(t)}function p(t,e,n,r,i){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)o(n,null),o(r,t);else if("class"!==e||i)if("style"===e){if(r&&"string"!=typeof r&&"string"!=typeof n||(t.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var u in n)u in r||(t.style[u]="");for(var u in r)t.style[u]="number"==typeof r[u]&&!1===P.test(u)?r[u]+"px":r[u]}}else if("dangerouslySetInnerHTML"===e)r&&(t.innerHTML=r.__html||"");else if("o"==e[0]&&"n"==e[1]){var l=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),r?n||t.addEventListener(e,_,l):t.removeEventListener(e,_,l),(t.__l||(t.__l={}))[e]=r}else if("list"!==e&&"type"!==e&&!i&&e in t){try{t[e]=null==r?"":r}catch(t){}null!=r&&!1!==r||"spellcheck"==e||t.removeAttribute(e)}else{var c=i&&e!==(e=e.replace(/^xlink:?/,""));null==r||!1===r?c?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof r&&(c?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),r):t.setAttribute(e,r))}else t.className=r||""}function _(t){return this.__l[t.type](T.event&&T.event(t)||t)}function d(){for(var t;t=E.shift();)T.afterMount&&T.afterMount(t),t.componentDidMount&&t.componentDidMount()}function v(t,e,n,o,r,i){O++||(j=null!=r&&void 0!==r.ownerSVGElement,D=null!=t&&!("__preactattr_"in t));var u=h(t,e,n,o,i);return r&&u.parentNode!==r&&r.appendChild(u),--O||(D=!1,i||d()),u}function h(t,e,n,o,r){var i=t,u=j;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||r)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),b(t,!0))),i.__preactattr_=!0,i;var l=e.nodeName;if("function"==typeof l)return k(t,e,n,o);if(j="svg"===l||"foreignObject"!==l&&j,l+="",(!t||!c(t,l))&&(i=s(l,j),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),b(t,!0)}var a=i.firstChild,f=i.__preactattr_,p=e.children;if(null==f){f=i.__preactattr_={};for(var _=i.attributes,d=_.length;d--;)f[_[d].name]=_[d].value}return!D&&p&&1===p.length&&"string"==typeof p[0]&&null!=a&&void 0!==a.splitText&&null==a.nextSibling?a.nodeValue!=p[0]&&(a.nodeValue=p[0]):(p&&p.length||null!=a)&&m(i,p,n,o,D||null!=f.dangerouslySetInnerHTML),g(i,e.attributes,f),j=u,i}function m(t,e,n,o,r){var i,u,c,a,s,p=t.childNodes,_=[],d={},v=0,m=0,y=p.length,g=0,w=e?e.length:0;if(0!==y)for(var x=0;x<y;x++){var N=p[x],C=N.__preactattr_,k=w&&C?N._component?N._component.__k:C.key:null;null!=k?(v++,d[k]=N):(C||(void 0!==N.splitText?!r||N.nodeValue.trim():r))&&(_[g++]=N)}if(0!==w)for(var x=0;x<w;x++){a=e[x],s=null;var k=a.key;if(null!=k)v&&void 0!==d[k]&&(s=d[k],d[k]=void 0,v--);else if(m<g)for(i=m;i<g;i++)if(void 0!==_[i]&&l(u=_[i],a,r)){s=u,_[i]=void 0,i===g-1&&g--,i===m&&m++;break}s=h(s,a,n,o),c=p[x],s&&s!==t&&s!==c&&(null==c?t.appendChild(s):s===c.nextSibling?f(c):t.insertBefore(s,c))}if(v)for(var x in d)void 0!==d[x]&&b(d[x],!1);for(;m<=g;)void 0!==(s=_[g--])&&b(s,!1)}function b(t,e){var n=t._component;n?S(n):(null!=t.__preactattr_&&o(t.__preactattr_.ref,null),!1!==e&&null!=t.__preactattr_||f(t),y(t))}function y(t){for(t=t.lastChild;t;){var e=t.previousSibling;b(t,!0),t=e}}function g(t,e,n){var o;for(o in n)e&&null!=e[o]||null==n[o]||p(t,o,n[o],n[o]=void 0,j);for(o in e)"children"===o||"innerHTML"===o||o in n&&e[o]===("value"===o||"checked"===o?t[o]:n[o])||p(t,o,n[o],n[o]=e[o],j)}function w(t,e,n){var o,r=J.length;for(t.prototype&&t.prototype.render?(o=new t(e,n),M.call(o,e,n)):(o=new M(e,n),o.constructor=t,o.render=x);r--;)if(J[r].constructor===t)return o.__b=J[r].__b,J.splice(r,1),o;return o}function x(t,e,n){return this.constructor(t,n)}function N(t,e,n,r,u){t.__x||(t.__x=!0,t.__r=e.ref,t.__k=e.key,delete e.ref,delete e.key,void 0===t.constructor.getDerivedStateFromProps&&(!t.base||u?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,r)),r&&r!==t.context&&(t.__c||(t.__c=t.context),t.context=r),t.__p||(t.__p=t.props),t.props=e,t.__x=!1,0!==n&&(1!==n&&!1===T.syncComponentUpdates&&t.base?i(t):C(t,1,u)),o(t.__r,t))}function C(t,e,o,r){if(!t.__x){var i,u,l,c=t.props,s=t.state,f=t.context,p=t.__p||c,_=t.__s||s,h=t.__c||f,m=t.base,y=t.__b,g=m||y,x=t._component,k=!1,M=h;if(t.constructor.getDerivedStateFromProps&&(s=n(n({},s),t.constructor.getDerivedStateFromProps(c,s)),t.state=s),m&&(t.props=p,t.state=_,t.context=h,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(c,s,f)?k=!0:t.componentWillUpdate&&t.componentWillUpdate(c,s,f),t.props=c,t.state=s,t.context=f),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!k){i=t.render(c,s,f),t.getChildContext&&(f=n(n({},f),t.getChildContext())),m&&t.getSnapshotBeforeUpdate&&(M=t.getSnapshotBeforeUpdate(p,_));var W,H,U=i&&i.nodeName;if("function"==typeof U){var F=a(i);u=x,u&&u.constructor===U&&F.key==u.__k?N(u,F,1,f,!1):(W=u,t._component=u=w(U,F,f),u.__b=u.__b||y,u.__u=t,N(u,F,0,f,!1),C(u,1,o,!0)),H=u.base}else l=g,W=x,W&&(l=t._component=null),(g||1===e)&&(l&&(l._component=null),H=v(l,i,f,o||!m,g&&g.parentNode,!0));if(g&&H!==g&&u!==x){var V=g.parentNode;V&&H!==V&&(V.replaceChild(H,g),W||(g._component=null,b(g,!1)))}if(W&&S(W),t.base=H,H&&!r){for(var L=t,P=t;P=P.__u;)(L=P).base=H;H._component=L,H._componentConstructor=L.constructor}}for(!m||o?E.push(t):k||(t.componentDidUpdate&&t.componentDidUpdate(p,_,M),T.afterUpdate&&T.afterUpdate(t));t.__h.length;)t.__h.pop().call(t);O||r||d()}}function k(t,e,n,o){for(var r=t&&t._component,i=r,u=t,l=r&&t._componentConstructor===e.nodeName,c=l,s=a(e);r&&!c&&(r=r.__u);)c=r.constructor===e.nodeName;return r&&c&&(!o||r._component)?(N(r,s,3,n,o),t=r.base):(i&&!l&&(S(i),t=u=null),r=w(e.nodeName,s,n),t&&!r.__b&&(r.__b=t,u=null),N(r,s,1,n,o),t=r.base,u&&t!==u&&(u._component=null,b(u,!1))),t}function S(t){T.beforeUnmount&&T.beforeUnmount(t);var e=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?S(n):e&&(null!=e.__preactattr_&&o(e.__preactattr_.ref,null),t.__b=e,f(e),J.push(t),y(e)),o(t.__r,null)}function M(t,e){this.__d=!0,this.context=e,this.props=t,this.state=this.state||{},this.__h=[]}function W(t,e,n){return v(n,t,{},!1,e,!1)}function H(){return{}}var U=function(){},T={},F=[],V=[],L="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,P=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,A=[],E=[],O=0,j=!1,D=!1,J=[];n(M.prototype,{setState:function(t,e){this.__s||(this.__s=this.state),this.state=n(n({},this.state),"function"==typeof t?t(this.state,this.props):t),e&&this.__h.push(e),i(this)},forceUpdate:function(t){t&&this.__h.push(t),C(this,2)},render:function(){}});var q={h:e,createElement:e,cloneElement:r,createRef:H,Component:M,render:W,rerender:u,options:T};t.exports=q}()},pwNi:function(t,e,n){"use strict";var o=n("WMsV");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register("/sw.js");var r=function(t){return t&&t.default||t};if("function"==typeof r(n("JkW7"))){var i=document.body.firstElementChild,u=function(){var t=r(n("JkW7"));i=(0,o.render)((0,o.h)(t),document.body,i)};u()}},yY49:function(){}});
//# sourceMappingURL=bundle.b65c4.js.map