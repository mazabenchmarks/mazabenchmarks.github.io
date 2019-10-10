module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("JkW7");


/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("WMsV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__("yY49");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_hooks__ = __webpack_require__("Mw+g");





var items = [];

var Filter = function Filter(_ref) {
	var filterValue = _ref.filterValue,
	    setFilterValue = _ref.setFilterValue,
	    setItemsFiltered = _ref.setItemsFiltered;

	var handleChange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_preact_hooks__["a" /* useCallback */])(function (e) {
		setFilterValue(e.target.value);
		setItemsFiltered(items.filter(function (item) {
			return (item[1] + ' ' + item[2]).toLocaleLowerCase().indexOf(e.target.value) !== -1;
		}));
	}, []);
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'div',
		null,
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { value: filterValue, onInput: handleChange, placeholder: 'Filter' })
	);
};

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br', null);

var Item = function Item(_ref2) {
	var item = _ref2.item;
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'div',
		null,
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'span',
			null,
			'Brand: ',
			item[1]
		),
		_ref3,
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'span',
			null,
			'Model: ',
			item[2]
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			null,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { src: 'http://lamptest.ru/images/photo/' + item[52] + '.jpg' })
		)
	);
};

var App = function App() {
	var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_preact_hooks__["b" /* useState */])([]),
	    itemsFiltered = _useState[0],
	    setItemsFiltered = _useState[1];

	var _useState2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_preact_hooks__["b" /* useState */])(null),
	    item = _useState2[0],
	    setItem = _useState2[1];

	var _useState3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_preact_hooks__["b" /* useState */])(''),
	    filterValue = _useState3[0],
	    setFilterValue = _useState3[1];

	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_preact_hooks__["c" /* useEffect */])(function () {
		var myHeaders = new Headers();
		myHeaders.append('Content-Type', 'text/csv; charset=windows-1251');

		fetch('https://lamptest.ru/led.php', myHeaders).then(function (response) {
			return response.text();
		}).then(function (response) {
			var itemsS = response.split('\n').map(function (item) {
				return item.split(';');
			}).slice(1);
			items = JSON.parse(JSON.stringify(itemsS));
			setItemsFiltered(JSON.parse(JSON.stringify(itemsS)));
		});
	}, []);

	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'div',
		{ 'class': 'table' },
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': 'sidebar' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Filter, { filterValue: filterValue, setFilterValue: setFilterValue, setItemsFiltered: setItemsFiltered }),
			itemsFiltered.map(function (item) {
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ 'class': 'sidebar-item', onClick: function onClick() {
							return setItem(item);
						} },
					item[1],
					' ',
					item[2]
				);
			})
		),
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': 'content' },
			item && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Item, { item: item })
		)
	);
};

if (typeof window !== 'undefined') {
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["render"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(App, null), document.body);
}

/***/ }),

/***/ "Mw+g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return c; });
/* unused harmony export useReducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return v; });
/* unused harmony export useLayoutEffect */
/* unused harmony export useRef */
/* unused harmony export useImperativeHandle */
/* unused harmony export useMemo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return s; });
/* unused harmony export useContext */
/* unused harmony export useDebugValue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("WMsV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
var t,
    r,
    u = [],
    i = __WEBPACK_IMPORTED_MODULE_0_preact__["options"].__r;__WEBPACK_IMPORTED_MODULE_0_preact__["options"].__r = function (n) {
  i && i(n), t = 0, (r = n.__c).__H && (r.__H.t = A(r.__H.t));
};var f = __WEBPACK_IMPORTED_MODULE_0_preact__["options"].diffed;__WEBPACK_IMPORTED_MODULE_0_preact__["options"].diffed = function (n) {
  f && f(n);var t = n.__c;if (t) {
    var r = t.__H;r && (r.u = (r.u.some(function (n) {
      n.ref && (n.ref.current = n.createHandle());
    }), []), r.i = A(r.i));
  }
};var o = __WEBPACK_IMPORTED_MODULE_0_preact__["options"].unmount;function e(t) {
  __WEBPACK_IMPORTED_MODULE_0_preact__["options"].__h && __WEBPACK_IMPORTED_MODULE_0_preact__["options"].__h(r);var u = r.__H || (r.__H = { o: [], t: [], i: [], u: [] });return t >= u.o.length && u.o.push({}), u.o[t];
}function c(n) {
  return a(q, n);
}function a(n, u, i) {
  var f = e(t++);return f.__c || (f.__c = r, f.v = [i ? i(u) : q(void 0, u), function (t) {
    var r = n(f.v[0], t);f.v[0] !== r && (f.v[0] = r, f.__c.setState({}));
  }]), f.v;
}function v(n, u) {
  var i = e(t++);h(i.m, u) && (i.v = n, i.m = u, r.__H.t.push(i), T(r));
}function m(n, u) {
  var i = e(t++);h(i.m, u) && (i.v = n, i.m = u, r.__H.i.push(i));
}function d(n) {
  return l(function () {
    return { current: n };
  }, []);
}function p(n, u, i) {
  var f = e(t++);h(f.m, i) && (f.m = i, r.__H.u.push({ ref: n, createHandle: u }));
}function l(n, r) {
  var u = e(t++);return h(u.m, r) ? (u.m = r, u.p = n, u.v = n()) : u.v;
}function s(n, t) {
  return l(function () {
    return n;
  }, t);
}function y(n) {
  var u = r.context[n.__c];if (!u) return n.__p;var i = e(t++);return null == i.v && (i.v = !0, u.sub(r)), u.props.value;
}function _(t, r) {
  __WEBPACK_IMPORTED_MODULE_0_preact__["options"].useDebugValue && __WEBPACK_IMPORTED_MODULE_0_preact__["options"].useDebugValue(r ? r(t) : t);
}__WEBPACK_IMPORTED_MODULE_0_preact__["options"].unmount = function (n) {
  o && o(n);var t = n.__c;if (t) {
    var r = t.__H;r && r.o.forEach(function (n) {
      return n.l && n.l();
    });
  }
};var T = function T() {};function g() {
  u.some(function (n) {
    n.s = !1, n.__P && (n.__H.t = A(n.__H.t));
  }), u = [];
}if ("undefined" != typeof window) {
  var w = __WEBPACK_IMPORTED_MODULE_0_preact__["options"].requestAnimationFrame;T = function T(t) {
    (!t.s && (t.s = !0) && 1 === u.push(t) || w !== __WEBPACK_IMPORTED_MODULE_0_preact__["options"].requestAnimationFrame) && (w = __WEBPACK_IMPORTED_MODULE_0_preact__["options"].requestAnimationFrame, (__WEBPACK_IMPORTED_MODULE_0_preact__["options"].requestAnimationFrame || function (n) {
      var t = function t() {
        clearTimeout(r), cancelAnimationFrame(u), setTimeout(n);
      },
          r = setTimeout(t, 100),
          u = requestAnimationFrame(t);
    })(g));
  };
}function A(n) {
  return n.forEach(E), n.forEach(F), [];
}function E(n) {
  n.l && n.l();
}function F(n) {
  var t = n.v();"function" == typeof t && (n.l = t);
}function h(n, t) {
  return !n || t.some(function (t, r) {
    return t !== n[r];
  });
}function q(n, t) {
  return "function" == typeof t ? t(n) : t;
}
//# sourceMappingURL=hooks.module.js.map

/***/ }),

/***/ "WMsV":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = W;for (i = arguments.length; i-- > 2;) {
      P.push(arguments[i]);
    }t && null != t.children && (P.length || P.push(t.children), delete t.children);while (P.length) {
      if ((o = P.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        P.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === W ? l = [o] : l.push(o), n = r;
    }var a = new T();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== M.vnode && M.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(e, t) {
    e && ("function" == typeof e ? e(t) : e.current = t);
  }function o(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == V.push(e) && (M.debounceRendering || D)(i);
  }function i() {
    var e;while (e = V.pop()) {
      e.__d && x(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function c(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function s(e, t, o, r, i) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n(o, null), n(r, e);else if ("class" !== t || i) {
      if ("style" === t) {
        if (r && "string" != typeof r && "string" != typeof o || (e.style.cssText = r || ""), r && "object" == typeof r) {
          if ("string" != typeof o) for (var l in o) {
            l in r || (e.style[l] = "");
          }for (var l in r) {
            e.style[l] = "number" == typeof r[l] && !1 === E.test(l) ? r[l] + "px" : r[l];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var a = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), r ? o || e.addEventListener(t, _, a) : e.removeEventListener(t, _, a), (e.__l || (e.__l = {}))[t] = r;
      } else if ("list" !== t && "type" !== t && !i && t in e) {
        try {
          e[t] = null == r ? "" : r;
        } catch (e) {}null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var u = i && t !== (t = t.replace(/^xlink:?/, ""));null == r || !1 === r ? u ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (u ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r));
      }
    } else e.className = r || "";
  }function _(e) {
    return this.__l[e.type](M.event && M.event(e) || e);
  }function f() {
    var e;while (e = A.shift()) {
      M.afterMount && M.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, B = null != e && !("__preactattr_" in e));var l = h(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (B = !1, i || f()), l;
  }function h(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return N(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = c(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0);
    }var p = i.firstChild,
        s = i.__preactattr_,
        _ = t.children;if (null == s) {
      s = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        s[f[d].name] = f[d].value;
      }
    }return !B && _ && 1 === _.length && "string" == typeof _[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != _[0] && (p.nodeValue = _[0]) : (_ && _.length || null != p) && m(i, _, n, o, B || null != s.dangerouslySetInnerHTML), y(i, t.attributes, s), R = l, i;
  }function m(e, t, n, o, r) {
    var i,
        a,
        u,
        c,
        s,
        _ = e.childNodes,
        f = [],
        d = {},
        m = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (m++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      c = t[C], s = null;var k = c.key;if (null != k) m && void 0 !== d[k] && (s = d[k], d[k] = void 0, m--);else if (b < g) for (i = b; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], c, r)) {
          s = a, f[i] = void 0, i === g - 1 && g--, i === b && b++;break;
        }
      }s = h(s, c, n, o), u = _[C], s && s !== e && s !== u && (null == u ? e.appendChild(s) : s === u.nextSibling ? p(u) : e.insertBefore(s, u));
    }if (m) for (var C in d) {
      void 0 !== d[C] && v(d[C], !1);
    }while (b <= g) {
      void 0 !== (s = f[g--]) && v(s, !1);
    }
  }function v(e, t) {
    var o = e._component;o ? k(o) : (null != e.__preactattr_ && n(e.__preactattr_.ref, null), !1 !== t && null != e.__preactattr_ || p(e), b(e));
  }function b(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;v(e, !0), e = t;
    }
  }function y(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || s(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || s(e, o, n[o], n[o] = t[o], R);
    }
  }function g(e, t, n) {
    var o,
        r = F.length;e.prototype && e.prototype.render ? (o = new e(t, n), U.call(o, t, n)) : (o = new U(t, n), o.constructor = e, o.render = w);while (r--) {
      if (F[r].constructor === e) return o.__b = F[r].__b, F.splice(r, 1), o;
    }return o;
  }function w(e, t, n) {
    return this.constructor(e, n);
  }function C(e, t, o, i, l) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || l ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, i)), i && i !== e.context && (e.__c || (e.__c = e.context), e.context = i), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== o && (1 !== o && !1 === M.syncComponentUpdates && e.base ? r(e) : x(e, 1, l)), n(e.__r, e));
  }function x(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          c = e.props,
          p = e.state,
          s = e.context,
          _ = e.__p || c,
          h = e.__s || p,
          m = e.__c || s,
          b = e.base,
          y = e.__b,
          w = b || y,
          N = e._component,
          U = !1,
          S = m;if (e.constructor.getDerivedStateFromProps && (p = t(t({}, p), e.constructor.getDerivedStateFromProps(c, p)), e.state = p), b && (e.props = _, e.state = h, e.context = m, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, p, s) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(c, p, s), e.props = c, e.state = p, e.context = s), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(c, p, s), e.getChildContext && (s = t(t({}, s), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(_, h));var L,
            T,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = u(i);l = N, l && l.constructor === P && W.key == l.__k ? C(l, W, 1, s, !1) : (L = l, e._component = l = g(P, W, s), l.__b = l.__b || y, l.__u = e, C(l, W, 0, s, !1), x(l, 1, o, !0)), T = l.base;
        } else a = w, L = N, L && (a = e._component = null), (w || 1 === n) && (a && (a._component = null), T = d(a, i, s, o || !b, w && w.parentNode, !0));if (w && T !== w && l !== N) {
          var D = w.parentNode;D && T !== D && (D.replaceChild(T, w), L || (w._component = null, v(w, !1)));
        }if (L && k(L), e.base = T, T && !r) {
          var E = e,
              V = e;while (V = V.__u) {
            (E = V).base = T;
          }T._component = E, T._componentConstructor = E.constructor;
        }
      }!b || o ? A.push(e) : U || (e.componentDidUpdate && e.componentDidUpdate(_, h, S), M.afterUpdate && M.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || f();
    }
  }function N(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        c = a,
        p = u(t);while (r && !c && (r = r.__u)) {
      c = r.constructor === t.nodeName;
    }return r && c && (!o || r._component) ? (C(r, p, 3, n, o), e = r.base) : (i && !a && (k(i), e = l = null), r = g(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), C(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, v(l, !1))), e;
  }function k(e) {
    M.beforeUnmount && M.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var o = e._component;o ? k(o) : t && (null != t.__preactattr_ && n(t.__preactattr_.ref, null), e.__b = t, p(t), F.push(e), b(t)), n(e.__r, null);
  }function U(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function S(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }function L() {
    return {};
  }var T = function T() {},
      M = {},
      P = [],
      W = [],
      D = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      E = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      V = [],
      A = [],
      H = 0,
      R = !1,
      B = !1,
      F = [];t(U.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), x(this, 2);
    }, render: function render() {} });var j = { h: e, createElement: e, cloneElement: o, createRef: L, Component: U, render: S, rerender: i, options: M }; true ? module.exports = j : self.preact = j;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "yY49":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map