/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Vue = __webpack_require__(1);
	var VueRouter = __webpack_require__(2);
	
	Vue.use(VueRouter);
	
	console.log(Vue.version);
	
	$(function () {
	    __webpack_require__(3).start({}, "#app");
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*!
	 * Vue.js v1.0.26
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	!function (t, e) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t.Vue = e();
	}(undefined, function () {
	  "use strict";
	  function t(e, n, r) {
	    if (i(e, n)) return void (e[n] = r);if (e._isVue) return void t(e._data, n, r);var s = e.__ob__;if (!s) return void (e[n] = r);if (s.convert(n, r), s.dep.notify(), s.vms) for (var o = s.vms.length; o--;) {
	      var a = s.vms[o];a._proxy(n), a._digest();
	    }return r;
	  }function e(t, e) {
	    if (i(t, e)) {
	      delete t[e];var n = t.__ob__;if (!n) return void (t._isVue && (delete t._data[e], t._digest()));if (n.dep.notify(), n.vms) for (var r = n.vms.length; r--;) {
	        var s = n.vms[r];s._unproxy(e), s._digest();
	      }
	    }
	  }function i(t, e) {
	    return Oi.call(t, e);
	  }function n(t) {
	    return Ti.test(t);
	  }function r(t) {
	    var e = (t + "").charCodeAt(0);return 36 === e || 95 === e;
	  }function s(t) {
	    return null == t ? "" : t.toString();
	  }function o(t) {
	    if ("string" != typeof t) return t;var e = Number(t);return isNaN(e) ? t : e;
	  }function a(t) {
	    return "true" === t ? !0 : "false" === t ? !1 : t;
	  }function h(t) {
	    var e = t.charCodeAt(0),
	        i = t.charCodeAt(t.length - 1);return e !== i || 34 !== e && 39 !== e ? t : t.slice(1, -1);
	  }function l(t) {
	    return t.replace(Ni, c);
	  }function c(t, e) {
	    return e ? e.toUpperCase() : "";
	  }function u(t) {
	    return t.replace(ji, "$1-$2").toLowerCase();
	  }function f(t) {
	    return t.replace(Ei, c);
	  }function p(t, e) {
	    return function (i) {
	      var n = arguments.length;return n ? n > 1 ? t.apply(e, arguments) : t.call(e, i) : t.call(e);
	    };
	  }function d(t, e) {
	    e = e || 0;for (var i = t.length - e, n = new Array(i); i--;) {
	      n[i] = t[i + e];
	    }return n;
	  }function v(t, e) {
	    for (var i = Object.keys(e), n = i.length; n--;) {
	      t[i[n]] = e[i[n]];
	    }return t;
	  }function m(t) {
	    return null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t));
	  }function g(t) {
	    return Si.call(t) === Fi;
	  }function _(t, e, i, n) {
	    Object.defineProperty(t, e, { value: i, enumerable: !!n, writable: !0, configurable: !0 });
	  }function y(t, e) {
	    var i,
	        n,
	        r,
	        s,
	        o,
	        a = function h() {
	      var a = Date.now() - s;e > a && a >= 0 ? i = setTimeout(h, e - a) : (i = null, o = t.apply(r, n), i || (r = n = null));
	    };return function () {
	      return r = this, n = arguments, s = Date.now(), i || (i = setTimeout(a, e)), o;
	    };
	  }function b(t, e) {
	    for (var i = t.length; i--;) {
	      if (t[i] === e) return i;
	    }return -1;
	  }function w(t) {
	    var e = function i() {
	      return i.cancelled ? void 0 : t.apply(this, arguments);
	    };return e.cancel = function () {
	      e.cancelled = !0;
	    }, e;
	  }function C(t, e) {
	    return t == e || (m(t) && m(e) ? JSON.stringify(t) === JSON.stringify(e) : !1);
	  }function $(t) {
	    this.size = 0, this.limit = t, this.head = this.tail = void 0, this._keymap = Object.create(null);
	  }function k() {
	    var t,
	        e = en.slice(hn, on).trim();if (e) {
	      t = {};var i = e.match(vn);t.name = i[0], i.length > 1 && (t.args = i.slice(1).map(x));
	    }t && (nn.filters = nn.filters || []).push(t), hn = on + 1;
	  }function x(t) {
	    if (mn.test(t)) return { value: o(t), dynamic: !1 };var e = h(t),
	        i = e === t;return { value: i ? t : e, dynamic: i };
	  }function A(t) {
	    var e = dn.get(t);if (e) return e;for (en = t, ln = cn = !1, un = fn = pn = 0, hn = 0, nn = {}, on = 0, an = en.length; an > on; on++) {
	      if (sn = rn, rn = en.charCodeAt(on), ln) 39 === rn && 92 !== sn && (ln = !ln);else if (cn) 34 === rn && 92 !== sn && (cn = !cn);else if (124 === rn && 124 !== en.charCodeAt(on + 1) && 124 !== en.charCodeAt(on - 1)) null == nn.expression ? (hn = on + 1, nn.expression = en.slice(0, on).trim()) : k();else switch (rn) {case 34:
	          cn = !0;break;case 39:
	          ln = !0;break;case 40:
	          pn++;break;case 41:
	          pn--;break;case 91:
	          fn++;break;case 93:
	          fn--;break;case 123:
	          un++;break;case 125:
	          un--;}
	    }return null == nn.expression ? nn.expression = en.slice(0, on).trim() : 0 !== hn && k(), dn.put(t, nn), nn;
	  }function O(t) {
	    return t.replace(_n, "\\$&");
	  }function T() {
	    var t = O(An.delimiters[0]),
	        e = O(An.delimiters[1]),
	        i = O(An.unsafeDelimiters[0]),
	        n = O(An.unsafeDelimiters[1]);bn = new RegExp(i + "((?:.|\\n)+?)" + n + "|" + t + "((?:.|\\n)+?)" + e, "g"), wn = new RegExp("^" + i + "((?:.|\\n)+?)" + n + "$"), yn = new $(1e3);
	  }function N(t) {
	    yn || T();var e = yn.get(t);if (e) return e;if (!bn.test(t)) return null;for (var i, n, r, s, o, a, h = [], l = bn.lastIndex = 0; i = bn.exec(t);) {
	      n = i.index, n > l && h.push({ value: t.slice(l, n) }), r = wn.test(i[0]), s = r ? i[1] : i[2], o = s.charCodeAt(0), a = 42 === o, s = a ? s.slice(1) : s, h.push({ tag: !0, value: s.trim(), html: r, oneTime: a }), l = n + i[0].length;
	    }return l < t.length && h.push({ value: t.slice(l) }), yn.put(t, h), h;
	  }function j(t, e) {
	    return t.length > 1 ? t.map(function (t) {
	      return E(t, e);
	    }).join("+") : E(t[0], e, !0);
	  }function E(t, e, i) {
	    return t.tag ? t.oneTime && e ? '"' + e.$eval(t.value) + '"' : S(t.value, i) : '"' + t.value + '"';
	  }function S(t, e) {
	    if (Cn.test(t)) {
	      var i = A(t);return i.filters ? "this._applyFilters(" + i.expression + ",null," + JSON.stringify(i.filters) + ",false)" : "(" + t + ")";
	    }return e ? t : "(" + t + ")";
	  }function F(t, e, i, n) {
	    R(t, 1, function () {
	      e.appendChild(t);
	    }, i, n);
	  }function D(t, e, i, n) {
	    R(t, 1, function () {
	      B(t, e);
	    }, i, n);
	  }function P(t, e, i) {
	    R(t, -1, function () {
	      z(t);
	    }, e, i);
	  }function R(t, e, i, n, r) {
	    var s = t.__v_trans;if (!s || !s.hooks && !qi || !n._isCompiled || n.$parent && !n.$parent._isCompiled) return i(), void (r && r());var o = e > 0 ? "enter" : "leave";s[o](i, r);
	  }function L(t) {
	    if ("string" == typeof t) {
	      t = document.querySelector(t);
	    }return t;
	  }function H(t) {
	    if (!t) return !1;var e = t.ownerDocument.documentElement,
	        i = t.parentNode;return e === t || e === i || !(!i || 1 !== i.nodeType || !e.contains(i));
	  }function I(t, e) {
	    var i = t.getAttribute(e);return null !== i && t.removeAttribute(e), i;
	  }function M(t, e) {
	    var i = I(t, ":" + e);return null === i && (i = I(t, "v-bind:" + e)), i;
	  }function V(t, e) {
	    return t.hasAttribute(e) || t.hasAttribute(":" + e) || t.hasAttribute("v-bind:" + e);
	  }function B(t, e) {
	    e.parentNode.insertBefore(t, e);
	  }function W(t, e) {
	    e.nextSibling ? B(t, e.nextSibling) : e.parentNode.appendChild(t);
	  }function z(t) {
	    t.parentNode.removeChild(t);
	  }function U(t, e) {
	    e.firstChild ? B(t, e.firstChild) : e.appendChild(t);
	  }function J(t, e) {
	    var i = t.parentNode;i && i.replaceChild(e, t);
	  }function q(t, e, i, n) {
	    t.addEventListener(e, i, n);
	  }function Q(t, e, i) {
	    t.removeEventListener(e, i);
	  }function G(t) {
	    var e = t.className;return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (e = e.baseVal || ""), e;
	  }function Z(t, e) {
	    Mi && !/svg$/.test(t.namespaceURI) ? t.className = e : t.setAttribute("class", e);
	  }function X(t, e) {
	    if (t.classList) t.classList.add(e);else {
	      var i = " " + G(t) + " ";i.indexOf(" " + e + " ") < 0 && Z(t, (i + e).trim());
	    }
	  }function Y(t, e) {
	    if (t.classList) t.classList.remove(e);else {
	      for (var i = " " + G(t) + " ", n = " " + e + " "; i.indexOf(n) >= 0;) {
	        i = i.replace(n, " ");
	      }Z(t, i.trim());
	    }t.className || t.removeAttribute("class");
	  }function K(t, e) {
	    var i, n;if (it(t) && at(t.content) && (t = t.content), t.hasChildNodes()) for (tt(t), n = e ? document.createDocumentFragment() : document.createElement("div"); i = t.firstChild;) {
	      n.appendChild(i);
	    }return n;
	  }function tt(t) {
	    for (var e; e = t.firstChild, et(e);) {
	      t.removeChild(e);
	    }for (; e = t.lastChild, et(e);) {
	      t.removeChild(e);
	    }
	  }function et(t) {
	    return t && (3 === t.nodeType && !t.data.trim() || 8 === t.nodeType);
	  }function it(t) {
	    return t.tagName && "template" === t.tagName.toLowerCase();
	  }function nt(t, e) {
	    var i = An.debug ? document.createComment(t) : document.createTextNode(e ? " " : "");return i.__v_anchor = !0, i;
	  }function rt(t) {
	    if (t.hasAttributes()) for (var e = t.attributes, i = 0, n = e.length; n > i; i++) {
	      var r = e[i].name;if (Nn.test(r)) return l(r.replace(Nn, ""));
	    }
	  }function st(t, e, i) {
	    for (var n; t !== e;) {
	      n = t.nextSibling, i(t), t = n;
	    }i(e);
	  }function ot(t, e, i, n, r) {
	    function s() {
	      if (a++, o && a >= h.length) {
	        for (var t = 0; t < h.length; t++) {
	          n.appendChild(h[t]);
	        }r && r();
	      }
	    }var o = !1,
	        a = 0,
	        h = [];st(t, e, function (t) {
	      t === e && (o = !0), h.push(t), P(t, i, s);
	    });
	  }function at(t) {
	    return t && 11 === t.nodeType;
	  }function ht(t) {
	    if (t.outerHTML) return t.outerHTML;var e = document.createElement("div");return e.appendChild(t.cloneNode(!0)), e.innerHTML;
	  }function lt(t, e) {
	    var i = t.tagName.toLowerCase(),
	        n = t.hasAttributes();if (jn.test(i) || En.test(i)) {
	      if (n) return ct(t, e);
	    } else {
	      if (gt(e, "components", i)) return { id: i };var r = n && ct(t, e);if (r) return r;
	    }
	  }function ct(t, e) {
	    var i = t.getAttribute("is");if (null != i) {
	      if (gt(e, "components", i)) return t.removeAttribute("is"), { id: i };
	    } else if (i = M(t, "is"), null != i) return { id: i, dynamic: !0 };
	  }function ut(e, n) {
	    var r, s, o;for (r in n) {
	      s = e[r], o = n[r], i(e, r) ? m(s) && m(o) && ut(s, o) : t(e, r, o);
	    }return e;
	  }function ft(t, e) {
	    var i = Object.create(t || null);return e ? v(i, vt(e)) : i;
	  }function pt(t) {
	    if (t.components) for (var e, i = t.components = vt(t.components), n = Object.keys(i), r = 0, s = n.length; s > r; r++) {
	      var o = n[r];jn.test(o) || En.test(o) || (e = i[o], g(e) && (i[o] = wi.extend(e)));
	    }
	  }function dt(t) {
	    var e,
	        i,
	        n = t.props;if (Di(n)) for (t.props = {}, e = n.length; e--;) {
	      i = n[e], "string" == typeof i ? t.props[i] = null : i.name && (t.props[i.name] = i);
	    } else if (g(n)) {
	      var r = Object.keys(n);for (e = r.length; e--;) {
	        i = n[r[e]], "function" == typeof i && (n[r[e]] = { type: i });
	      }
	    }
	  }function vt(t) {
	    if (Di(t)) {
	      for (var e, i = {}, n = t.length; n--;) {
	        e = t[n];var r = "function" == typeof e ? e.options && e.options.name || e.id : e.name || e.id;r && (i[r] = e);
	      }return i;
	    }return t;
	  }function mt(t, e, n) {
	    function r(i) {
	      var r = Sn[i] || Fn;o[i] = r(t[i], e[i], n, i);
	    }pt(e), dt(e);var s,
	        o = {};if (e["extends"] && (t = "function" == typeof e["extends"] ? mt(t, e["extends"].options, n) : mt(t, e["extends"], n)), e.mixins) for (var a = 0, h = e.mixins.length; h > a; a++) {
	      var l = e.mixins[a],
	          c = l.prototype instanceof wi ? l.options : l;t = mt(t, c, n);
	    }for (s in t) {
	      r(s);
	    }for (s in e) {
	      i(t, s) || r(s);
	    }return o;
	  }function gt(t, e, i, n) {
	    if ("string" == typeof i) {
	      var r,
	          s = t[e],
	          o = s[i] || s[r = l(i)] || s[r.charAt(0).toUpperCase() + r.slice(1)];return o;
	    }
	  }function _t() {
	    this.id = Dn++, this.subs = [];
	  }function yt(t) {
	    Hn = !1, t(), Hn = !0;
	  }function bt(t) {
	    if (this.value = t, this.dep = new _t(), _(t, "__ob__", this), Di(t)) {
	      var e = Pi ? wt : Ct;e(t, Rn, Ln), this.observeArray(t);
	    } else this.walk(t);
	  }function wt(t, e) {
	    t.__proto__ = e;
	  }function Ct(t, e, i) {
	    for (var n = 0, r = i.length; r > n; n++) {
	      var s = i[n];_(t, s, e[s]);
	    }
	  }function $t(t, e) {
	    if (t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
	      var n;return i(t, "__ob__") && t.__ob__ instanceof bt ? n = t.__ob__ : Hn && (Di(t) || g(t)) && Object.isExtensible(t) && !t._isVue && (n = new bt(t)), n && e && n.addVm(e), n;
	    }
	  }function kt(t, e, i) {
	    var n = new _t(),
	        r = Object.getOwnPropertyDescriptor(t, e);if (!r || r.configurable !== !1) {
	      var s = r && r.get,
	          o = r && r.set,
	          a = $t(i);Object.defineProperty(t, e, { enumerable: !0, configurable: !0, get: function get() {
	          var e = s ? s.call(t) : i;if (_t.target && (n.depend(), a && a.dep.depend(), Di(e))) for (var r, o = 0, h = e.length; h > o; o++) {
	            r = e[o], r && r.__ob__ && r.__ob__.dep.depend();
	          }return e;
	        }, set: function set(e) {
	          var r = s ? s.call(t) : i;e !== r && (o ? o.call(t, e) : i = e, a = $t(e), n.notify());
	        } });
	    }
	  }function xt(t) {
	    t.prototype._init = function (t) {
	      t = t || {}, this.$el = null, this.$parent = t.parent, this.$root = this.$parent ? this.$parent.$root : this, this.$children = [], this.$refs = {}, this.$els = {}, this._watchers = [], this._directives = [], this._uid = Mn++, this._isVue = !0, this._events = {}, this._eventsCount = {}, this._isFragment = !1, this._fragment = this._fragmentStart = this._fragmentEnd = null, this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = !1, this._unlinkFn = null, this._context = t._context || this.$parent, this._scope = t._scope, this._frag = t._frag, this._frag && this._frag.children.push(this), this.$parent && this.$parent.$children.push(this), t = this.$options = mt(this.constructor.options, t, this), this._updateRef(), this._data = {}, this._callHook("init"), this._initState(), this._initEvents(), this._callHook("created"), t.el && this.$mount(t.el);
	    };
	  }function At(t) {
	    if (void 0 === t) return "eof";var e = t.charCodeAt(0);switch (e) {case 91:case 93:case 46:case 34:case 39:case 48:
	        return t;case 95:case 36:
	        return "ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:
	        return "ws";}return e >= 97 && 122 >= e || e >= 65 && 90 >= e ? "ident" : e >= 49 && 57 >= e ? "number" : "else";
	  }function Ot(t) {
	    var e = t.trim();return "0" === t.charAt(0) && isNaN(t) ? !1 : n(e) ? h(e) : "*" + e;
	  }function Tt(t) {
	    function e() {
	      var e = t[c + 1];return u === Xn && "'" === e || u === Yn && '"' === e ? (c++, n = "\\" + e, p[Bn](), !0) : void 0;
	    }var i,
	        n,
	        r,
	        s,
	        o,
	        a,
	        h,
	        l = [],
	        c = -1,
	        u = Jn,
	        f = 0,
	        p = [];for (p[Wn] = function () {
	      void 0 !== r && (l.push(r), r = void 0);
	    }, p[Bn] = function () {
	      void 0 === r ? r = n : r += n;
	    }, p[zn] = function () {
	      p[Bn](), f++;
	    }, p[Un] = function () {
	      if (f > 0) f--, u = Zn, p[Bn]();else {
	        if (f = 0, r = Ot(r), r === !1) return !1;p[Wn]();
	      }
	    }; null != u;) {
	      if (c++, i = t[c], "\\" !== i || !e()) {
	        if (s = At(i), h = er[u], o = h[s] || h["else"] || tr, o === tr) return;if (u = o[0], a = p[o[1]], a && (n = o[2], n = void 0 === n ? i : n, a() === !1)) return;if (u === Kn) return l.raw = t, l;
	      }
	    }
	  }function Nt(t) {
	    var e = Vn.get(t);return e || (e = Tt(t), e && Vn.put(t, e)), e;
	  }function jt(t, e) {
	    return It(e).get(t);
	  }function Et(e, i, n) {
	    var r = e;if ("string" == typeof i && (i = Tt(i)), !i || !m(e)) return !1;for (var s, o, a = 0, h = i.length; h > a; a++) {
	      s = e, o = i[a], "*" === o.charAt(0) && (o = It(o.slice(1)).get.call(r, r)), h - 1 > a ? (e = e[o], m(e) || (e = {}, t(s, o, e))) : Di(e) ? e.$set(o, n) : o in e ? e[o] = n : t(e, o, n);
	    }return !0;
	  }function St() {}function Ft(t, e) {
	    var i = vr.length;return vr[i] = e ? t.replace(lr, "\\n") : t, '"' + i + '"';
	  }function Dt(t) {
	    var e = t.charAt(0),
	        i = t.slice(1);return sr.test(i) ? t : (i = i.indexOf('"') > -1 ? i.replace(ur, Pt) : i, e + "scope." + i);
	  }function Pt(t, e) {
	    return vr[e];
	  }function Rt(t) {
	    ar.test(t), vr.length = 0;var e = t.replace(cr, Ft).replace(hr, "");return e = (" " + e).replace(pr, Dt).replace(ur, Pt), Lt(e);
	  }function Lt(t) {
	    try {
	      return new Function("scope", "return " + t + ";");
	    } catch (e) {
	      return St;
	    }
	  }function Ht(t) {
	    var e = Nt(t);return e ? function (t, i) {
	      Et(t, e, i);
	    } : void 0;
	  }function It(t, e) {
	    t = t.trim();var i = nr.get(t);if (i) return e && !i.set && (i.set = Ht(i.exp)), i;var n = { exp: t };return n.get = Mt(t) && t.indexOf("[") < 0 ? Lt("scope." + t) : Rt(t), e && (n.set = Ht(t)), nr.put(t, n), n;
	  }function Mt(t) {
	    return fr.test(t) && !dr.test(t) && "Math." !== t.slice(0, 5);
	  }function Vt() {
	    gr.length = 0, _r.length = 0, yr = {}, br = {}, wr = !1;
	  }function Bt() {
	    for (var t = !0; t;) {
	      t = !1, Wt(gr), Wt(_r), gr.length ? t = !0 : (Li && An.devtools && Li.emit("flush"), Vt());
	    }
	  }function Wt(t) {
	    for (var e = 0; e < t.length; e++) {
	      var i = t[e],
	          n = i.id;yr[n] = null, i.run();
	    }t.length = 0;
	  }function zt(t) {
	    var e = t.id;if (null == yr[e]) {
	      var i = t.user ? _r : gr;yr[e] = i.length, i.push(t), wr || (wr = !0, Yi(Bt));
	    }
	  }function Ut(t, e, i, n) {
	    n && v(this, n);var r = "function" == typeof e;if (this.vm = t, t._watchers.push(this), this.expression = e, this.cb = i, this.id = ++Cr, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new Ki(), this.newDepIds = new Ki(), this.prevError = null, r) this.getter = e, this.setter = void 0;else {
	      var s = It(e, this.twoWay);this.getter = s.get, this.setter = s.set;
	    }this.value = this.lazy ? void 0 : this.get(), this.queued = this.shallow = !1;
	  }function Jt(t, e) {
	    var i = void 0,
	        n = void 0;e || (e = $r, e.clear());var r = Di(t),
	        s = m(t);if ((r || s) && Object.isExtensible(t)) {
	      if (t.__ob__) {
	        var o = t.__ob__.dep.id;if (e.has(o)) return;e.add(o);
	      }if (r) for (i = t.length; i--;) {
	        Jt(t[i], e);
	      } else if (s) for (n = Object.keys(t), i = n.length; i--;) {
	        Jt(t[n[i]], e);
	      }
	    }
	  }function qt(t) {
	    return it(t) && at(t.content);
	  }function Qt(t, e) {
	    var i = e ? t : t.trim(),
	        n = xr.get(i);if (n) return n;var r = document.createDocumentFragment(),
	        s = t.match(Tr),
	        o = Nr.test(t),
	        a = jr.test(t);if (s || o || a) {
	      var h = s && s[1],
	          l = Or[h] || Or.efault,
	          c = l[0],
	          u = l[1],
	          f = l[2],
	          p = document.createElement("div");for (p.innerHTML = u + t + f; c--;) {
	        p = p.lastChild;
	      }for (var d; d = p.firstChild;) {
	        r.appendChild(d);
	      }
	    } else r.appendChild(document.createTextNode(t));return e || tt(r), xr.put(i, r), r;
	  }function Gt(t) {
	    if (qt(t)) return Qt(t.innerHTML);if ("SCRIPT" === t.tagName) return Qt(t.textContent);for (var e, i = Zt(t), n = document.createDocumentFragment(); e = i.firstChild;) {
	      n.appendChild(e);
	    }return tt(n), n;
	  }function Zt(t) {
	    if (!t.querySelectorAll) return t.cloneNode();var e,
	        i,
	        n,
	        r = t.cloneNode(!0);if (Er) {
	      var s = r;if (qt(t) && (t = t.content, s = r.content), i = t.querySelectorAll("template"), i.length) for (n = s.querySelectorAll("template"), e = n.length; e--;) {
	        n[e].parentNode.replaceChild(Zt(i[e]), n[e]);
	      }
	    }if (Sr) if ("TEXTAREA" === t.tagName) r.value = t.value;else if (i = t.querySelectorAll("textarea"), i.length) for (n = r.querySelectorAll("textarea"), e = n.length; e--;) {
	      n[e].value = i[e].value;
	    }return r;
	  }function Xt(t, e, i) {
	    var n, r;return at(t) ? (tt(t), e ? Zt(t) : t) : ("string" == typeof t ? i || "#" !== t.charAt(0) ? r = Qt(t, i) : (r = Ar.get(t), r || (n = document.getElementById(t.slice(1)), n && (r = Gt(n), Ar.put(t, r)))) : t.nodeType && (r = Gt(t)), r && e ? Zt(r) : r);
	  }function Yt(t, e, i, n, r, s) {
	    this.children = [], this.childFrags = [], this.vm = e, this.scope = r, this.inserted = !1, this.parentFrag = s, s && s.childFrags.push(this), this.unlink = t(e, i, n, r, this);var o = this.single = 1 === i.childNodes.length && !i.childNodes[0].__v_anchor;o ? (this.node = i.childNodes[0], this.before = Kt, this.remove = te) : (this.node = nt("fragment-start"), this.end = nt("fragment-end"), this.frag = i, U(this.node, i), i.appendChild(this.end), this.before = ee, this.remove = ie), this.node.__v_frag = this;
	  }function Kt(t, e) {
	    this.inserted = !0;var i = e !== !1 ? D : B;i(this.node, t, this.vm), H(this.node) && this.callHook(ne);
	  }function te() {
	    this.inserted = !1;var t = H(this.node),
	        e = this;this.beforeRemove(), P(this.node, this.vm, function () {
	      t && e.callHook(re), e.destroy();
	    });
	  }function ee(t, e) {
	    this.inserted = !0;var i = this.vm,
	        n = e !== !1 ? D : B;st(this.node, this.end, function (e) {
	      n(e, t, i);
	    }), H(this.node) && this.callHook(ne);
	  }function ie() {
	    this.inserted = !1;var t = this,
	        e = H(this.node);this.beforeRemove(), ot(this.node, this.end, this.vm, this.frag, function () {
	      e && t.callHook(re), t.destroy();
	    });
	  }function ne(t) {
	    !t._isAttached && H(t.$el) && t._callHook("attached");
	  }function re(t) {
	    t._isAttached && !H(t.$el) && t._callHook("detached");
	  }function se(t, e) {
	    this.vm = t;var i,
	        n = "string" == typeof e;n || it(e) && !e.hasAttribute("v-if") ? i = Xt(e, !0) : (i = document.createDocumentFragment(), i.appendChild(e)), this.template = i;var r,
	        s = t.constructor.cid;if (s > 0) {
	      var o = s + (n ? e : ht(e));r = Pr.get(o), r || (r = De(i, t.$options, !0), Pr.put(o, r));
	    } else r = De(i, t.$options, !0);this.linker = r;
	  }function oe(t, e, i) {
	    var n = t.node.previousSibling;if (n) {
	      for (t = n.__v_frag; !(t && t.forId === i && t.inserted || n === e);) {
	        if (n = n.previousSibling, !n) return;t = n.__v_frag;
	      }return t;
	    }
	  }function ae(t) {
	    var e = t.node;if (t.end) for (; !e.__vue__ && e !== t.end && e.nextSibling;) {
	      e = e.nextSibling;
	    }return e.__vue__;
	  }function he(t) {
	    for (var e = -1, i = new Array(Math.floor(t)); ++e < t;) {
	      i[e] = e;
	    }return i;
	  }function le(t, e, i, n) {
	    return n ? "$index" === n ? t : n.charAt(0).match(/\w/) ? jt(i, n) : i[n] : e || i;
	  }function ce(t, e, i) {
	    for (var n, r, s, o = e ? [] : null, a = 0, h = t.options.length; h > a; a++) {
	      if (n = t.options[a], s = i ? n.hasAttribute("selected") : n.selected) {
	        if (r = n.hasOwnProperty("_value") ? n._value : n.value, !e) return r;o.push(r);
	      }
	    }return o;
	  }function ue(t, e) {
	    for (var i = t.length; i--;) {
	      if (C(t[i], e)) return i;
	    }return -1;
	  }function fe(t, e) {
	    var i = e.map(function (t) {
	      var e = t.charCodeAt(0);return e > 47 && 58 > e ? parseInt(t, 10) : 1 === t.length && (e = t.toUpperCase().charCodeAt(0), e > 64 && 91 > e) ? e : is[t];
	    });return i = [].concat.apply([], i), function (e) {
	      return i.indexOf(e.keyCode) > -1 ? t.call(this, e) : void 0;
	    };
	  }function pe(t) {
	    return function (e) {
	      return e.stopPropagation(), t.call(this, e);
	    };
	  }function de(t) {
	    return function (e) {
	      return e.preventDefault(), t.call(this, e);
	    };
	  }function ve(t) {
	    return function (e) {
	      return e.target === e.currentTarget ? t.call(this, e) : void 0;
	    };
	  }function me(t) {
	    if (as[t]) return as[t];var e = ge(t);return as[t] = as[e] = e, e;
	  }function ge(t) {
	    t = u(t);var e = l(t),
	        i = e.charAt(0).toUpperCase() + e.slice(1);hs || (hs = document.createElement("div"));var n,
	        r = rs.length;if ("filter" !== e && e in hs.style) return { kebab: t, camel: e };for (; r--;) {
	      if (n = ss[r] + i, n in hs.style) return { kebab: rs[r] + t, camel: n };
	    }
	  }function _e(t) {
	    var e = [];if (Di(t)) for (var i = 0, n = t.length; n > i; i++) {
	      var r = t[i];if (r) if ("string" == typeof r) e.push(r);else for (var s in r) {
	        r[s] && e.push(s);
	      }
	    } else if (m(t)) for (var o in t) {
	      t[o] && e.push(o);
	    }return e;
	  }function ye(t, e, i) {
	    if (e = e.trim(), -1 === e.indexOf(" ")) return void i(t, e);for (var n = e.split(/\s+/), r = 0, s = n.length; s > r; r++) {
	      i(t, n[r]);
	    }
	  }function be(t, e, i) {
	    function n() {
	      ++s >= r ? i() : t[s].call(e, n);
	    }var r = t.length,
	        s = 0;t[0].call(e, n);
	  }function we(t, e, i) {
	    for (var r, s, o, a, h, c, f, p = [], d = Object.keys(e), v = d.length; v--;) {
	      s = d[v], r = e[s] || ks, h = l(s), xs.test(h) && (f = { name: s, path: h, options: r, mode: $s.ONE_WAY, raw: null }, o = u(s), null === (a = M(t, o)) && (null !== (a = M(t, o + ".sync")) ? f.mode = $s.TWO_WAY : null !== (a = M(t, o + ".once")) && (f.mode = $s.ONE_TIME)), null !== a ? (f.raw = a, c = A(a), a = c.expression, f.filters = c.filters, n(a) && !c.filters ? f.optimizedLiteral = !0 : f.dynamic = !0, f.parentPath = a) : null !== (a = I(t, o)) && (f.raw = a), p.push(f));
	    }return Ce(p);
	  }function Ce(t) {
	    return function (e, n) {
	      e._props = {};for (var r, s, l, c, f, p = e.$options.propsData, d = t.length; d--;) {
	        if (r = t[d], f = r.raw, s = r.path, l = r.options, e._props[s] = r, p && i(p, s) && ke(e, r, p[s]), null === f) ke(e, r, void 0);else if (r.dynamic) r.mode === $s.ONE_TIME ? (c = (n || e._context || e).$get(r.parentPath), ke(e, r, c)) : e._context ? e._bindDir({ name: "prop", def: Os, prop: r }, null, null, n) : ke(e, r, e.$get(r.parentPath));else if (r.optimizedLiteral) {
	          var v = h(f);c = v === f ? a(o(f)) : v, ke(e, r, c);
	        } else c = l.type !== Boolean || "" !== f && f !== u(r.name) ? f : !0, ke(e, r, c);
	      }
	    };
	  }function $e(t, e, i, n) {
	    var r = e.dynamic && Mt(e.parentPath),
	        s = i;void 0 === s && (s = Ae(t, e)), s = Te(e, s, t);var o = s !== i;Oe(e, s, t) || (s = void 0), r && !o ? yt(function () {
	      n(s);
	    }) : n(s);
	  }function ke(t, e, i) {
	    $e(t, e, i, function (i) {
	      kt(t, e.path, i);
	    });
	  }function xe(t, e, i) {
	    $e(t, e, i, function (i) {
	      t[e.path] = i;
	    });
	  }function Ae(t, e) {
	    var n = e.options;if (!i(n, "default")) return n.type === Boolean ? !1 : void 0;var r = n["default"];return m(r), "function" == typeof r && n.type !== Function ? r.call(t) : r;
	  }function Oe(t, e, i) {
	    if (!t.options.required && (null === t.raw || null == e)) return !0;var n = t.options,
	        r = n.type,
	        s = !r,
	        o = [];if (r) {
	      Di(r) || (r = [r]);for (var a = 0; a < r.length && !s; a++) {
	        var h = Ne(e, r[a]);o.push(h.expectedType), s = h.valid;
	      }
	    }if (!s) return !1;var l = n.validator;return !l || l(e);
	  }function Te(t, e, i) {
	    var n = t.options.coerce;return n && "function" == typeof n ? n(e) : e;
	  }function Ne(t, e) {
	    var i, n;return e === String ? (n = "string", i = (typeof t === "undefined" ? "undefined" : _typeof(t)) === n) : e === Number ? (n = "number", i = (typeof t === "undefined" ? "undefined" : _typeof(t)) === n) : e === Boolean ? (n = "boolean", i = (typeof t === "undefined" ? "undefined" : _typeof(t)) === n) : e === Function ? (n = "function", i = (typeof t === "undefined" ? "undefined" : _typeof(t)) === n) : e === Object ? (n = "object", i = g(t)) : e === Array ? (n = "array", i = Di(t)) : i = t instanceof e, { valid: i, expectedType: n };
	  }function je(t) {
	    Ts.push(t), Ns || (Ns = !0, Yi(Ee));
	  }function Ee() {
	    for (var t = document.documentElement.offsetHeight, e = 0; e < Ts.length; e++) {
	      Ts[e]();
	    }return Ts = [], Ns = !1, t;
	  }function Se(t, e, i, n) {
	    this.id = e, this.el = t, this.enterClass = i && i.enterClass || e + "-enter", this.leaveClass = i && i.leaveClass || e + "-leave", this.hooks = i, this.vm = n, this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null, this.justEntered = !1, this.entered = this.left = !1, this.typeCache = {}, this.type = i && i.type;var r = this;["enterNextTick", "enterDone", "leaveNextTick", "leaveDone"].forEach(function (t) {
	      r[t] = p(r[t], r);
	    });
	  }function Fe(t) {
	    if (/svg$/.test(t.namespaceURI)) {
	      var e = t.getBoundingClientRect();return !(e.width || e.height);
	    }return !(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
	  }function De(t, e, i) {
	    var n = i || !e._asComponent ? Ve(t, e) : null,
	        r = n && n.terminal || ri(t) || !t.hasChildNodes() ? null : qe(t.childNodes, e);return function (t, e, i, s, o) {
	      var a = d(e.childNodes),
	          h = Pe(function () {
	        n && n(t, e, i, s, o), r && r(t, a, i, s, o);
	      }, t);return Le(t, h);
	    };
	  }function Pe(t, e) {
	    e._directives = [];var i = e._directives.length;t();var n = e._directives.slice(i);n.sort(Re);for (var r = 0, s = n.length; s > r; r++) {
	      n[r]._bind();
	    }return n;
	  }function Re(t, e) {
	    return t = t.descriptor.def.priority || zs, e = e.descriptor.def.priority || zs, t > e ? -1 : t === e ? 0 : 1;
	  }function Le(t, e, i, n) {
	    function r(r) {
	      He(t, e, r), i && n && He(i, n);
	    }return r.dirs = e, r;
	  }function He(t, e, i) {
	    for (var n = e.length; n--;) {
	      e[n]._teardown();
	    }
	  }function Ie(t, e, i, n) {
	    var r = we(e, i, t),
	        s = Pe(function () {
	      r(t, n);
	    }, t);return Le(t, s);
	  }function Me(t, e, i) {
	    var n,
	        r,
	        s = e._containerAttrs,
	        o = e._replacerAttrs;return 11 !== t.nodeType && (e._asComponent ? (s && i && (n = ti(s, i)), o && (r = ti(o, e))) : r = ti(t.attributes, e)), e._containerAttrs = e._replacerAttrs = null, function (t, e, i) {
	      var s,
	          o = t._context;o && n && (s = Pe(function () {
	        n(o, e, null, i);
	      }, o));var a = Pe(function () {
	        r && r(t, e);
	      }, t);return Le(t, a, o, s);
	    };
	  }function Ve(t, e) {
	    var i = t.nodeType;return 1 !== i || ri(t) ? 3 === i && t.data.trim() ? We(t, e) : null : Be(t, e);
	  }function Be(t, e) {
	    if ("TEXTAREA" === t.tagName) {
	      var i = N(t.value);i && (t.setAttribute(":value", j(i)), t.value = "");
	    }var n,
	        r = t.hasAttributes(),
	        s = r && d(t.attributes);return r && (n = Xe(t, s, e)), n || (n = Ge(t, e)), n || (n = Ze(t, e)), !n && r && (n = ti(s, e)), n;
	  }function We(t, e) {
	    if (t._skip) return ze;var i = N(t.wholeText);if (!i) return null;for (var n = t.nextSibling; n && 3 === n.nodeType;) {
	      n._skip = !0, n = n.nextSibling;
	    }for (var r, s, o = document.createDocumentFragment(), a = 0, h = i.length; h > a; a++) {
	      s = i[a], r = s.tag ? Ue(s, e) : document.createTextNode(s.value), o.appendChild(r);
	    }return Je(i, o, e);
	  }function ze(t, e) {
	    z(e);
	  }function Ue(t, e) {
	    function i(e) {
	      if (!t.descriptor) {
	        var i = A(t.value);t.descriptor = { name: e, def: bs[e], expression: i.expression, filters: i.filters };
	      }
	    }var n;return t.oneTime ? n = document.createTextNode(t.value) : t.html ? (n = document.createComment("v-html"), i("html")) : (n = document.createTextNode(" "), i("text")), n;
	  }function Je(t, e) {
	    return function (i, n, r, o) {
	      for (var a, h, l, c = e.cloneNode(!0), u = d(c.childNodes), f = 0, p = t.length; p > f; f++) {
	        a = t[f], h = a.value, a.tag && (l = u[f], a.oneTime ? (h = (o || i).$eval(h), a.html ? J(l, Xt(h, !0)) : l.data = s(h)) : i._bindDir(a.descriptor, l, r, o));
	      }J(n, c);
	    };
	  }function qe(t, e) {
	    for (var i, n, r, s = [], o = 0, a = t.length; a > o; o++) {
	      r = t[o], i = Ve(r, e), n = i && i.terminal || "SCRIPT" === r.tagName || !r.hasChildNodes() ? null : qe(r.childNodes, e), s.push(i, n);
	    }return s.length ? Qe(s) : null;
	  }function Qe(t) {
	    return function (e, i, n, r, s) {
	      for (var o, a, h, l = 0, c = 0, u = t.length; u > l; c++) {
	        o = i[c], a = t[l++], h = t[l++];var f = d(o.childNodes);a && a(e, o, n, r, s), h && h(e, f, n, r, s);
	      }
	    };
	  }function Ge(t, e) {
	    var i = t.tagName.toLowerCase();if (!jn.test(i)) {
	      var n = gt(e, "elementDirectives", i);return n ? Ke(t, i, "", e, n) : void 0;
	    }
	  }function Ze(t, e) {
	    var i = lt(t, e);if (i) {
	      var n = rt(t),
	          r = { name: "component", ref: n, expression: i.id, def: Hs.component, modifiers: { literal: !i.dynamic } },
	          s = function s(t, e, i, _s2, o) {
	        n && kt((_s2 || t).$refs, n, null), t._bindDir(r, e, i, _s2, o);
	      };return s.terminal = !0, s;
	    }
	  }function Xe(t, e, i) {
	    if (null !== I(t, "v-pre")) return Ye;if (t.hasAttribute("v-else")) {
	      var n = t.previousElementSibling;if (n && n.hasAttribute("v-if")) return Ye;
	    }for (var r, s, o, a, h, l, c, u, f, p, d = 0, v = e.length; v > d; d++) {
	      r = e[d], s = r.name.replace(Bs, ""), (h = s.match(Vs)) && (f = gt(i, "directives", h[1]), f && f.terminal && (!p || (f.priority || Us) > p.priority) && (p = f, c = r.name, a = ei(r.name), o = r.value, l = h[1], u = h[2]));
	    }return p ? Ke(t, l, o, i, p, c, u, a) : void 0;
	  }function Ye() {}function Ke(t, e, i, n, r, s, o, a) {
	    var h = A(i),
	        l = { name: e, arg: o, expression: h.expression, filters: h.filters, raw: i, attr: s, modifiers: a, def: r };"for" !== e && "router-view" !== e || (l.ref = rt(t));var c = function c(t, e, i, n, r) {
	      l.ref && kt((n || t).$refs, l.ref, null), t._bindDir(l, e, i, n, r);
	    };return c.terminal = !0, c;
	  }function ti(t, e) {
	    function i(t, e, i) {
	      var n = i && ni(i),
	          r = !n && A(s);v.push({ name: t, attr: o, raw: a, def: e, arg: l, modifiers: c, expression: r && r.expression, filters: r && r.filters, interp: i, hasOneTime: n });
	    }for (var n, r, s, o, a, h, l, c, u, f, p, d = t.length, v = []; d--;) {
	      if (n = t[d], r = o = n.name, s = a = n.value, f = N(s), l = null, c = ei(r), r = r.replace(Bs, ""), f) s = j(f), l = r, i("bind", bs.bind, f);else if (Ws.test(r)) c.literal = !Is.test(r), i("transition", Hs.transition);else if (Ms.test(r)) l = r.replace(Ms, ""), i("on", bs.on);else if (Is.test(r)) h = r.replace(Is, ""), "style" === h || "class" === h ? i(h, Hs[h]) : (l = h, i("bind", bs.bind));else if (p = r.match(Vs)) {
	        if (h = p[1], l = p[2], "else" === h) continue;u = gt(e, "directives", h, !0), u && i(h, u);
	      }
	    }return v.length ? ii(v) : void 0;
	  }function ei(t) {
	    var e = Object.create(null),
	        i = t.match(Bs);if (i) for (var n = i.length; n--;) {
	      e[i[n].slice(1)] = !0;
	    }return e;
	  }function ii(t) {
	    return function (e, i, n, r, s) {
	      for (var o = t.length; o--;) {
	        e._bindDir(t[o], i, n, r, s);
	      }
	    };
	  }function ni(t) {
	    for (var e = t.length; e--;) {
	      if (t[e].oneTime) return !0;
	    }
	  }function ri(t) {
	    return "SCRIPT" === t.tagName && (!t.hasAttribute("type") || "text/javascript" === t.getAttribute("type"));
	  }function si(t, e) {
	    return e && (e._containerAttrs = ai(t)), it(t) && (t = Xt(t)), e && (e._asComponent && !e.template && (e.template = "<slot></slot>"), e.template && (e._content = K(t), t = oi(t, e))), at(t) && (U(nt("v-start", !0), t), t.appendChild(nt("v-end", !0))), t;
	  }function oi(t, e) {
	    var i = e.template,
	        n = Xt(i, !0);if (n) {
	      var r = n.firstChild,
	          s = r.tagName && r.tagName.toLowerCase();return e.replace ? (t === document.body, n.childNodes.length > 1 || 1 !== r.nodeType || "component" === s || gt(e, "components", s) || V(r, "is") || gt(e, "elementDirectives", s) || r.hasAttribute("v-for") || r.hasAttribute("v-if") ? n : (e._replacerAttrs = ai(r), hi(t, r), r)) : (t.appendChild(n), t);
	    }
	  }function ai(t) {
	    return 1 === t.nodeType && t.hasAttributes() ? d(t.attributes) : void 0;
	  }function hi(t, e) {
	    for (var i, n, r = t.attributes, s = r.length; s--;) {
	      i = r[s].name, n = r[s].value, e.hasAttribute(i) || Js.test(i) ? "class" === i && !N(n) && (n = n.trim()) && n.split(/\s+/).forEach(function (t) {
	        X(e, t);
	      }) : e.setAttribute(i, n);
	    }
	  }function li(t, e) {
	    if (e) {
	      for (var i, n, r = t._slotContents = Object.create(null), s = 0, o = e.children.length; o > s; s++) {
	        i = e.children[s], (n = i.getAttribute("slot")) && (r[n] || (r[n] = [])).push(i);
	      }for (n in r) {
	        r[n] = ci(r[n], e);
	      }if (e.hasChildNodes()) {
	        var a = e.childNodes;if (1 === a.length && 3 === a[0].nodeType && !a[0].data.trim()) return;r["default"] = ci(e.childNodes, e);
	      }
	    }
	  }function ci(t, e) {
	    var i = document.createDocumentFragment();t = d(t);for (var n = 0, r = t.length; r > n; n++) {
	      var s = t[n];!it(s) || s.hasAttribute("v-if") || s.hasAttribute("v-for") || (e.removeChild(s), s = Xt(s, !0)), i.appendChild(s);
	    }return i;
	  }function ui(t) {
	    function e() {}function n(t, e) {
	      var i = new Ut(e, t, null, { lazy: !0 });return function () {
	        return i.dirty && i.evaluate(), _t.target && i.depend(), i.value;
	      };
	    }Object.defineProperty(t.prototype, "$data", { get: function get() {
	        return this._data;
	      }, set: function set(t) {
	        t !== this._data && this._setData(t);
	      } }), t.prototype._initState = function () {
	      this._initProps(), this._initMeta(), this._initMethods(), this._initData(), this._initComputed();
	    }, t.prototype._initProps = function () {
	      var t = this.$options,
	          e = t.el,
	          i = t.props;e = t.el = L(e), this._propsUnlinkFn = e && 1 === e.nodeType && i ? Ie(this, e, i, this._scope) : null;
	    }, t.prototype._initData = function () {
	      var t = this.$options.data,
	          e = this._data = t ? t() : {};g(e) || (e = {});var n,
	          r,
	          s = this._props,
	          o = Object.keys(e);for (n = o.length; n--;) {
	        r = o[n], s && i(s, r) || this._proxy(r);
	      }$t(e, this);
	    }, t.prototype._setData = function (t) {
	      t = t || {};var e = this._data;this._data = t;var n, r, s;for (n = Object.keys(e), s = n.length; s--;) {
	        r = n[s], r in t || this._unproxy(r);
	      }for (n = Object.keys(t), s = n.length; s--;) {
	        r = n[s], i(this, r) || this._proxy(r);
	      }e.__ob__.removeVm(this), $t(t, this), this._digest();
	    }, t.prototype._proxy = function (t) {
	      if (!r(t)) {
	        var e = this;Object.defineProperty(e, t, { configurable: !0, enumerable: !0, get: function get() {
	            return e._data[t];
	          }, set: function set(i) {
	            e._data[t] = i;
	          } });
	      }
	    }, t.prototype._unproxy = function (t) {
	      r(t) || delete this[t];
	    }, t.prototype._digest = function () {
	      for (var t = 0, e = this._watchers.length; e > t; t++) {
	        this._watchers[t].update(!0);
	      }
	    }, t.prototype._initComputed = function () {
	      var t = this.$options.computed;if (t) for (var i in t) {
	        var r = t[i],
	            s = { enumerable: !0, configurable: !0 };"function" == typeof r ? (s.get = n(r, this), s.set = e) : (s.get = r.get ? r.cache !== !1 ? n(r.get, this) : p(r.get, this) : e, s.set = r.set ? p(r.set, this) : e), Object.defineProperty(this, i, s);
	      }
	    }, t.prototype._initMethods = function () {
	      var t = this.$options.methods;if (t) for (var e in t) {
	        this[e] = p(t[e], this);
	      }
	    }, t.prototype._initMeta = function () {
	      var t = this.$options._meta;if (t) for (var e in t) {
	        kt(this, e, t[e]);
	      }
	    };
	  }function fi(t) {
	    function e(t, e) {
	      for (var i, n, r, s = e.attributes, o = 0, a = s.length; a > o; o++) {
	        i = s[o].name, Qs.test(i) && (i = i.replace(Qs, ""), n = s[o].value, Mt(n) && (n += ".apply(this, $arguments)"), r = (t._scope || t._context).$eval(n, !0), r._fromParent = !0, t.$on(i.replace(Qs), r));
	      }
	    }function i(t, e, i) {
	      if (i) {
	        var r, s, o, a;for (s in i) {
	          if (r = i[s], Di(r)) for (o = 0, a = r.length; a > o; o++) {
	            n(t, e, s, r[o]);
	          } else n(t, e, s, r);
	        }
	      }
	    }function n(t, e, i, r, s) {
	      var o = typeof r === "undefined" ? "undefined" : _typeof(r);if ("function" === o) t[e](i, r, s);else if ("string" === o) {
	        var a = t.$options.methods,
	            h = a && a[r];h && t[e](i, h, s);
	      } else r && "object" === o && n(t, e, i, r.handler, r);
	    }function r() {
	      this._isAttached || (this._isAttached = !0, this.$children.forEach(s));
	    }function s(t) {
	      !t._isAttached && H(t.$el) && t._callHook("attached");
	    }function o() {
	      this._isAttached && (this._isAttached = !1, this.$children.forEach(a));
	    }function a(t) {
	      t._isAttached && !H(t.$el) && t._callHook("detached");
	    }t.prototype._initEvents = function () {
	      var t = this.$options;t._asComponent && e(this, t.el), i(this, "$on", t.events), i(this, "$watch", t.watch);
	    }, t.prototype._initDOMHooks = function () {
	      this.$on("hook:attached", r), this.$on("hook:detached", o);
	    }, t.prototype._callHook = function (t) {
	      this.$emit("pre-hook:" + t);var e = this.$options[t];if (e) for (var i = 0, n = e.length; n > i; i++) {
	        e[i].call(this);
	      }this.$emit("hook:" + t);
	    };
	  }function pi() {}function di(t, e, i, n, r, s) {
	    this.vm = e, this.el = i, this.descriptor = t, this.name = t.name, this.expression = t.expression, this.arg = t.arg, this.modifiers = t.modifiers, this.filters = t.filters, this.literal = this.modifiers && this.modifiers.literal, this._locked = !1, this._bound = !1, this._listeners = null, this._host = n, this._scope = r, this._frag = s;
	  }function vi(t) {
	    t.prototype._updateRef = function (t) {
	      var e = this.$options._ref;if (e) {
	        var i = (this._scope || this._context).$refs;t ? i[e] === this && (i[e] = null) : i[e] = this;
	      }
	    }, t.prototype._compile = function (t) {
	      var e = this.$options,
	          i = t;if (t = si(t, e), this._initElement(t), 1 !== t.nodeType || null === I(t, "v-pre")) {
	        var n = this._context && this._context.$options,
	            r = Me(t, e, n);li(this, e._content);var s,
	            o = this.constructor;e._linkerCachable && (s = o.linker, s || (s = o.linker = De(t, e)));var a = r(this, t, this._scope),
	            h = s ? s(this, t) : De(t, e)(this, t);this._unlinkFn = function () {
	          a(), h(!0);
	        }, e.replace && J(i, t), this._isCompiled = !0, this._callHook("compiled");
	      }
	    }, t.prototype._initElement = function (t) {
	      at(t) ? (this._isFragment = !0, this.$el = this._fragmentStart = t.firstChild, this._fragmentEnd = t.lastChild, 3 === this._fragmentStart.nodeType && (this._fragmentStart.data = this._fragmentEnd.data = ""), this._fragment = t) : this.$el = t, this.$el.__vue__ = this, this._callHook("beforeCompile");
	    }, t.prototype._bindDir = function (t, e, i, n, r) {
	      this._directives.push(new di(t, this, e, i, n, r));
	    }, t.prototype._destroy = function (t, e) {
	      if (this._isBeingDestroyed) return void (e || this._cleanup());var i,
	          n,
	          r = this,
	          s = function s() {
	        !i || n || e || r._cleanup();
	      };t && this.$el && (n = !0, this.$remove(function () {
	        n = !1, s();
	      })), this._callHook("beforeDestroy"), this._isBeingDestroyed = !0;var o,
	          a = this.$parent;for (a && !a._isBeingDestroyed && (a.$children.$remove(this), this._updateRef(!0)), o = this.$children.length; o--;) {
	        this.$children[o].$destroy();
	      }for (this._propsUnlinkFn && this._propsUnlinkFn(), this._unlinkFn && this._unlinkFn(), o = this._watchers.length; o--;) {
	        this._watchers[o].teardown();
	      }this.$el && (this.$el.__vue__ = null), i = !0, s();
	    }, t.prototype._cleanup = function () {
	      this._isDestroyed || (this._frag && this._frag.children.$remove(this), this._data && this._data.__ob__ && this._data.__ob__.removeVm(this), this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null, this._isDestroyed = !0, this._callHook("destroyed"), this.$off());
	    };
	  }function mi(t) {
	    t.prototype._applyFilters = function (t, e, i, n) {
	      var r, s, o, a, h, l, c, u, f;for (l = 0, c = i.length; c > l; l++) {
	        if (r = i[n ? c - l - 1 : l], s = gt(this.$options, "filters", r.name, !0), s && (s = n ? s.write : s.read || s, "function" == typeof s)) {
	          if (o = n ? [t, e] : [t], h = n ? 2 : 1, r.args) for (u = 0, f = r.args.length; f > u; u++) {
	            a = r.args[u], o[u + h] = a.dynamic ? this.$get(a.value) : a.value;
	          }t = s.apply(this, o);
	        }
	      }return t;
	    }, t.prototype._resolveComponent = function (e, i) {
	      var n;if (n = "function" == typeof e ? e : gt(this.$options, "components", e, !0)) if (n.options) i(n);else if (n.resolved) i(n.resolved);else if (n.requested) n.pendingCallbacks.push(i);else {
	        n.requested = !0;var r = n.pendingCallbacks = [i];n.call(this, function (e) {
	          g(e) && (e = t.extend(e)), n.resolved = e;for (var i = 0, s = r.length; s > i; i++) {
	            r[i](e);
	          }
	        }, function (t) {});
	      }
	    };
	  }function gi(t) {
	    function i(t) {
	      return JSON.parse(JSON.stringify(t));
	    }t.prototype.$get = function (t, e) {
	      var i = It(t);if (i) {
	        if (e) {
	          var n = this;return function () {
	            n.$arguments = d(arguments);var t = i.get.call(n, n);return n.$arguments = null, t;
	          };
	        }try {
	          return i.get.call(this, this);
	        } catch (r) {}
	      }
	    }, t.prototype.$set = function (t, e) {
	      var i = It(t, !0);i && i.set && i.set.call(this, this, e);
	    }, t.prototype.$delete = function (t) {
	      e(this._data, t);
	    }, t.prototype.$watch = function (t, e, i) {
	      var n,
	          r = this;"string" == typeof t && (n = A(t), t = n.expression);var s = new Ut(r, t, e, { deep: i && i.deep, sync: i && i.sync, filters: n && n.filters, user: !i || i.user !== !1 });return i && i.immediate && e.call(r, s.value), function () {
	        s.teardown();
	      };
	    }, t.prototype.$eval = function (t, e) {
	      if (Gs.test(t)) {
	        var i = A(t),
	            n = this.$get(i.expression, e);return i.filters ? this._applyFilters(n, null, i.filters) : n;
	      }return this.$get(t, e);
	    }, t.prototype.$interpolate = function (t) {
	      var e = N(t),
	          i = this;return e ? 1 === e.length ? i.$eval(e[0].value) + "" : e.map(function (t) {
	        return t.tag ? i.$eval(t.value) : t.value;
	      }).join("") : t;
	    }, t.prototype.$log = function (t) {
	      var e = t ? jt(this._data, t) : this._data;if (e && (e = i(e)), !t) {
	        var n;for (n in this.$options.computed) {
	          e[n] = i(this[n]);
	        }if (this._props) for (n in this._props) {
	          e[n] = i(this[n]);
	        }
	      }console.log(e);
	    };
	  }function _i(t) {
	    function e(t, e, n, r, s, o) {
	      e = i(e);var a = !H(e),
	          h = r === !1 || a ? s : o,
	          l = !a && !t._isAttached && !H(t.$el);return t._isFragment ? (st(t._fragmentStart, t._fragmentEnd, function (i) {
	        h(i, e, t);
	      }), n && n()) : h(t.$el, e, t, n), l && t._callHook("attached"), t;
	    }function i(t) {
	      return "string" == typeof t ? document.querySelector(t) : t;
	    }function n(t, e, i, n) {
	      e.appendChild(t), n && n();
	    }function r(t, e, i, n) {
	      B(t, e), n && n();
	    }function s(t, e, i) {
	      z(t), i && i();
	    }t.prototype.$nextTick = function (t) {
	      Yi(t, this);
	    }, t.prototype.$appendTo = function (t, i, r) {
	      return e(this, t, i, r, n, F);
	    }, t.prototype.$prependTo = function (t, e, n) {
	      return t = i(t), t.hasChildNodes() ? this.$before(t.firstChild, e, n) : this.$appendTo(t, e, n), this;
	    }, t.prototype.$before = function (t, i, n) {
	      return e(this, t, i, n, r, D);
	    }, t.prototype.$after = function (t, e, n) {
	      return t = i(t), t.nextSibling ? this.$before(t.nextSibling, e, n) : this.$appendTo(t.parentNode, e, n), this;
	    }, t.prototype.$remove = function (t, e) {
	      if (!this.$el.parentNode) return t && t();var i = this._isAttached && H(this.$el);i || (e = !1);var n = this,
	          r = function r() {
	        i && n._callHook("detached"), t && t();
	      };if (this._isFragment) ot(this._fragmentStart, this._fragmentEnd, this, this._fragment, r);else {
	        var o = e === !1 ? s : P;o(this.$el, this, r);
	      }return this;
	    };
	  }function yi(t) {
	    function e(t, e, n) {
	      var r = t.$parent;if (r && n && !i.test(e)) for (; r;) {
	        r._eventsCount[e] = (r._eventsCount[e] || 0) + n, r = r.$parent;
	      }
	    }t.prototype.$on = function (t, i) {
	      return (this._events[t] || (this._events[t] = [])).push(i), e(this, t, 1), this;
	    }, t.prototype.$once = function (t, e) {
	      function i() {
	        n.$off(t, i), e.apply(this, arguments);
	      }var n = this;return i.fn = e, this.$on(t, i), this;
	    }, t.prototype.$off = function (t, i) {
	      var n;if (!arguments.length) {
	        if (this.$parent) for (t in this._events) {
	          n = this._events[t], n && e(this, t, -n.length);
	        }return this._events = {}, this;
	      }if (n = this._events[t], !n) return this;if (1 === arguments.length) return e(this, t, -n.length), this._events[t] = null, this;for (var r, s = n.length; s--;) {
	        if (r = n[s], r === i || r.fn === i) {
	          e(this, t, -1), n.splice(s, 1);break;
	        }
	      }return this;
	    }, t.prototype.$emit = function (t) {
	      var e = "string" == typeof t;t = e ? t : t.name;var i = this._events[t],
	          n = e || !i;if (i) {
	        i = i.length > 1 ? d(i) : i;var r = e && i.some(function (t) {
	          return t._fromParent;
	        });r && (n = !1);for (var s = d(arguments, 1), o = 0, a = i.length; a > o; o++) {
	          var h = i[o],
	              l = h.apply(this, s);l !== !0 || r && !h._fromParent || (n = !0);
	        }
	      }return n;
	    }, t.prototype.$broadcast = function (t) {
	      var e = "string" == typeof t;if (t = e ? t : t.name, this._eventsCount[t]) {
	        var i = this.$children,
	            n = d(arguments);e && (n[0] = { name: t, source: this });for (var r = 0, s = i.length; s > r; r++) {
	          var o = i[r],
	              a = o.$emit.apply(o, n);a && o.$broadcast.apply(o, n);
	        }return this;
	      }
	    }, t.prototype.$dispatch = function (t) {
	      var e = this.$emit.apply(this, arguments);if (e) {
	        var i = this.$parent,
	            n = d(arguments);for (n[0] = { name: t, source: this }; i;) {
	          e = i.$emit.apply(i, n), i = e ? i.$parent : null;
	        }return this;
	      }
	    };var i = /^hook:/;
	  }function bi(t) {
	    function e() {
	      this._isAttached = !0, this._isReady = !0, this._callHook("ready");
	    }t.prototype.$mount = function (t) {
	      return this._isCompiled ? void 0 : (t = L(t), t || (t = document.createElement("div")), this._compile(t), this._initDOMHooks(), H(this.$el) ? (this._callHook("attached"), e.call(this)) : this.$once("hook:attached", e), this);
	    }, t.prototype.$destroy = function (t, e) {
	      this._destroy(t, e);
	    }, t.prototype.$compile = function (t, e, i, n) {
	      return De(t, this.$options, !0)(this, t, e, i, n);
	    };
	  }function wi(t) {
	    this._init(t);
	  }function Ci(t, e, i) {
	    return i = i ? parseInt(i, 10) : 0, e = o(e), "number" == typeof e ? t.slice(i, i + e) : t;
	  }function $i(t, e, i) {
	    if (t = Ks(t), null == e) return t;if ("function" == typeof e) return t.filter(e);e = ("" + e).toLowerCase();for (var n, r, s, o, a = "in" === i ? 3 : 2, h = Array.prototype.concat.apply([], d(arguments, a)), l = [], c = 0, u = t.length; u > c; c++) {
	      if (n = t[c], s = n && n.$value || n, o = h.length) {
	        for (; o--;) {
	          if (r = h[o], "$key" === r && xi(n.$key, e) || xi(jt(s, r), e)) {
	            l.push(n);break;
	          }
	        }
	      } else xi(n, e) && l.push(n);
	    }return l;
	  }function ki(t) {
	    function e(t, e, i) {
	      var r = n[i];return r && ("$key" !== r && (m(t) && "$value" in t && (t = t.$value), m(e) && "$value" in e && (e = e.$value)), t = m(t) ? jt(t, r) : t, e = m(e) ? jt(e, r) : e), t === e ? 0 : t > e ? s : -s;
	    }var _i2 = null,
	        n = void 0;t = Ks(t);var r = d(arguments, 1),
	        s = r[r.length - 1];"number" == typeof s ? (s = 0 > s ? -1 : 1, r = r.length > 1 ? r.slice(0, -1) : r) : s = 1;var o = r[0];return o ? ("function" == typeof o ? _i2 = function i(t, e) {
	      return o(t, e) * s;
	    } : (n = Array.prototype.concat.apply([], r), _i2 = function i(t, r, s) {
	      return s = s || 0, s >= n.length - 1 ? e(t, r, s) : e(t, r, s) || _i2(t, r, s + 1);
	    }), t.slice().sort(_i2)) : t;
	  }function xi(t, e) {
	    var i;if (g(t)) {
	      var n = Object.keys(t);for (i = n.length; i--;) {
	        if (xi(t[n[i]], e)) return !0;
	      }
	    } else if (Di(t)) {
	      for (i = t.length; i--;) {
	        if (xi(t[i], e)) return !0;
	      }
	    } else if (null != t) return t.toString().toLowerCase().indexOf(e) > -1;
	  }function Ai(i) {
	    function n(t) {
	      return new Function("return function " + f(t) + " (options) { this._init(options) }")();
	    }i.options = { directives: bs, elementDirectives: Ys, filters: eo, transitions: {}, components: {}, partials: {}, replace: !0 }, i.util = In, i.config = An, i.set = t, i["delete"] = e, i.nextTick = Yi, i.compiler = qs, i.FragmentFactory = se, i.internalDirectives = Hs, i.parsers = { path: ir, text: $n, template: Fr, directive: gn, expression: mr }, i.cid = 0;var r = 1;i.extend = function (t) {
	      t = t || {};var e = this,
	          i = 0 === e.cid;if (i && t._Ctor) return t._Ctor;var s = t.name || e.options.name,
	          o = n(s || "VueComponent");return o.prototype = Object.create(e.prototype), o.prototype.constructor = o, o.cid = r++, o.options = mt(e.options, t), o["super"] = e, o.extend = e.extend, An._assetTypes.forEach(function (t) {
	        o[t] = e[t];
	      }), s && (o.options.components[s] = o), i && (t._Ctor = o), o;
	    }, i.use = function (t) {
	      if (!t.installed) {
	        var e = d(arguments, 1);return e.unshift(this), "function" == typeof t.install ? t.install.apply(t, e) : t.apply(null, e), t.installed = !0, this;
	      }
	    }, i.mixin = function (t) {
	      i.options = mt(i.options, t);
	    }, An._assetTypes.forEach(function (t) {
	      i[t] = function (e, n) {
	        return n ? ("component" === t && g(n) && (n.name || (n.name = e), n = i.extend(n)), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
	      };
	    }), v(i.transition, Tn);
	  }var Oi = Object.prototype.hasOwnProperty,
	      Ti = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/,
	      Ni = /-(\w)/g,
	      ji = /([a-z\d])([A-Z])/g,
	      Ei = /(?:^|[-_\/])(\w)/g,
	      Si = Object.prototype.toString,
	      Fi = "[object Object]",
	      Di = Array.isArray,
	      Pi = "__proto__" in {},
	      Ri = "undefined" != typeof window && "[object Object]" !== Object.prototype.toString.call(window),
	      Li = Ri && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
	      Hi = Ri && window.navigator.userAgent.toLowerCase(),
	      Ii = Hi && Hi.indexOf("trident") > 0,
	      Mi = Hi && Hi.indexOf("msie 9.0") > 0,
	      Vi = Hi && Hi.indexOf("android") > 0,
	      Bi = Hi && /(iphone|ipad|ipod|ios)/i.test(Hi),
	      Wi = Bi && Hi.match(/os ([\d_]+)/),
	      zi = Wi && Wi[1].split("_"),
	      Ui = zi && Number(zi[0]) >= 9 && Number(zi[1]) >= 3 && !window.indexedDB,
	      Ji = void 0,
	      qi = void 0,
	      Qi = void 0,
	      Gi = void 0;if (Ri && !Mi) {
	    var Zi = void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend,
	        Xi = void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend;Ji = Zi ? "WebkitTransition" : "transition", qi = Zi ? "webkitTransitionEnd" : "transitionend", Qi = Xi ? "WebkitAnimation" : "animation", Gi = Xi ? "webkitAnimationEnd" : "animationend";
	  }var Yi = function () {
	    function t() {
	      n = !1;var t = i.slice(0);i = [];for (var e = 0; e < t.length; e++) {
	        t[e]();
	      }
	    }var e,
	        i = [],
	        n = !1;if ("undefined" == typeof MutationObserver || Ui) {
	      var r = Ri ? window : "undefined" != typeof global ? global : {};e = r.setImmediate || setTimeout;
	    } else {
	      var s = 1,
	          o = new MutationObserver(t),
	          a = document.createTextNode(s);o.observe(a, { characterData: !0 }), e = function e() {
	        s = (s + 1) % 2, a.data = s;
	      };
	    }return function (r, s) {
	      var o = s ? function () {
	        r.call(s);
	      } : r;i.push(o), n || (n = !0, e(t, 0));
	    };
	  }(),
	      Ki = void 0;"undefined" != typeof Set && Set.toString().match(/native code/) ? Ki = Set : (Ki = function Ki() {
	    this.set = Object.create(null);
	  }, Ki.prototype.has = function (t) {
	    return void 0 !== this.set[t];
	  }, Ki.prototype.add = function (t) {
	    this.set[t] = 1;
	  }, Ki.prototype.clear = function () {
	    this.set = Object.create(null);
	  });var tn = $.prototype;tn.put = function (t, e) {
	    var i,
	        n = this.get(t, !0);return n || (this.size === this.limit && (i = this.shift()), n = { key: t }, this._keymap[t] = n, this.tail ? (this.tail.newer = n, n.older = this.tail) : this.head = n, this.tail = n, this.size++), n.value = e, i;
	  }, tn.shift = function () {
	    var t = this.head;return t && (this.head = this.head.newer, this.head.older = void 0, t.newer = t.older = void 0, this._keymap[t.key] = void 0, this.size--), t;
	  }, tn.get = function (t, e) {
	    var i = this._keymap[t];if (void 0 !== i) return i === this.tail ? e ? i : i.value : (i.newer && (i === this.head && (this.head = i.newer), i.newer.older = i.older), i.older && (i.older.newer = i.newer), i.newer = void 0, i.older = this.tail, this.tail && (this.tail.newer = i), this.tail = i, e ? i : i.value);
	  };var en,
	      nn,
	      rn,
	      sn,
	      on,
	      an,
	      hn,
	      ln,
	      cn,
	      un,
	      fn,
	      pn,
	      dn = new $(1e3),
	      vn = /[^\s'"]+|'[^']*'|"[^"]*"/g,
	      mn = /^in$|^-?\d+/,
	      gn = Object.freeze({ parseDirective: A }),
	      _n = /[-.*+?^${}()|[\]\/\\]/g,
	      yn = void 0,
	      bn = void 0,
	      wn = void 0,
	      Cn = /[^|]\|[^|]/,
	      $n = Object.freeze({ compileRegex: T, parseText: N, tokensToExp: j }),
	      kn = ["{{", "}}"],
	      xn = ["{{{", "}}}"],
	      An = Object.defineProperties({ debug: !1, silent: !1, async: !0, warnExpressionErrors: !0, devtools: !1, _delimitersChanged: !0, _assetTypes: ["component", "directive", "elementDirective", "filter", "transition", "partial"], _propBindingModes: { ONE_WAY: 0, TWO_WAY: 1, ONE_TIME: 2 }, _maxUpdateCount: 100 }, { delimiters: { get: function get() {
	        return kn;
	      }, set: function set(t) {
	        kn = t, T();
	      }, configurable: !0, enumerable: !0 }, unsafeDelimiters: { get: function get() {
	        return xn;
	      }, set: function set(t) {
	        xn = t, T();
	      }, configurable: !0, enumerable: !0 } }),
	      On = void 0,
	      Tn = Object.freeze({ appendWithTransition: F, beforeWithTransition: D, removeWithTransition: P, applyTransition: R }),
	      Nn = /^v-ref:/,
	      jn = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i,
	      En = /^(slot|partial|component)$/i,
	      Sn = An.optionMergeStrategies = Object.create(null);Sn.data = function (t, e, i) {
	    return i ? t || e ? function () {
	      var n = "function" == typeof e ? e.call(i) : e,
	          r = "function" == typeof t ? t.call(i) : void 0;return n ? ut(n, r) : r;
	    } : void 0 : e ? "function" != typeof e ? t : t ? function () {
	      return ut(e.call(this), t.call(this));
	    } : e : t;
	  }, Sn.el = function (t, e, i) {
	    if (i || !e || "function" == typeof e) {
	      var n = e || t;return i && "function" == typeof n ? n.call(i) : n;
	    }
	  }, Sn.init = Sn.created = Sn.ready = Sn.attached = Sn.detached = Sn.beforeCompile = Sn.compiled = Sn.beforeDestroy = Sn.destroyed = Sn.activate = function (t, e) {
	    return e ? t ? t.concat(e) : Di(e) ? e : [e] : t;
	  }, An._assetTypes.forEach(function (t) {
	    Sn[t + "s"] = ft;
	  }), Sn.watch = Sn.events = function (t, e) {
	    if (!e) return t;if (!t) return e;var i = {};v(i, t);for (var n in e) {
	      var r = i[n],
	          s = e[n];r && !Di(r) && (r = [r]), i[n] = r ? r.concat(s) : [s];
	    }return i;
	  }, Sn.props = Sn.methods = Sn.computed = function (t, e) {
	    if (!e) return t;if (!t) return e;var i = Object.create(null);return v(i, t), v(i, e), i;
	  };var Fn = function Fn(t, e) {
	    return void 0 === e ? t : e;
	  },
	      Dn = 0;_t.target = null, _t.prototype.addSub = function (t) {
	    this.subs.push(t);
	  }, _t.prototype.removeSub = function (t) {
	    this.subs.$remove(t);
	  }, _t.prototype.depend = function () {
	    _t.target.addDep(this);
	  }, _t.prototype.notify = function () {
	    for (var t = d(this.subs), e = 0, i = t.length; i > e; e++) {
	      t[e].update();
	    }
	  };var Pn = Array.prototype,
	      Rn = Object.create(Pn);["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (t) {
	    var e = Pn[t];_(Rn, t, function () {
	      for (var i = arguments.length, n = new Array(i); i--;) {
	        n[i] = arguments[i];
	      }var r,
	          s = e.apply(this, n),
	          o = this.__ob__;switch (t) {case "push":
	          r = n;break;case "unshift":
	          r = n;break;case "splice":
	          r = n.slice(2);}return r && o.observeArray(r), o.dep.notify(), s;
	    });
	  }), _(Pn, "$set", function (t, e) {
	    return t >= this.length && (this.length = Number(t) + 1), this.splice(t, 1, e)[0];
	  }), _(Pn, "$remove", function (t) {
	    if (this.length) {
	      var e = b(this, t);return e > -1 ? this.splice(e, 1) : void 0;
	    }
	  });var Ln = Object.getOwnPropertyNames(Rn),
	      Hn = !0;bt.prototype.walk = function (t) {
	    for (var e = Object.keys(t), i = 0, n = e.length; n > i; i++) {
	      this.convert(e[i], t[e[i]]);
	    }
	  }, bt.prototype.observeArray = function (t) {
	    for (var e = 0, i = t.length; i > e; e++) {
	      $t(t[e]);
	    }
	  }, bt.prototype.convert = function (t, e) {
	    kt(this.value, t, e);
	  }, bt.prototype.addVm = function (t) {
	    (this.vms || (this.vms = [])).push(t);
	  }, bt.prototype.removeVm = function (t) {
	    this.vms.$remove(t);
	  };var In = Object.freeze({ defineReactive: kt, set: t, del: e, hasOwn: i, isLiteral: n, isReserved: r, _toString: s, toNumber: o, toBoolean: a, stripQuotes: h, camelize: l, hyphenate: u, classify: f, bind: p, toArray: d, extend: v, isObject: m, isPlainObject: g, def: _, debounce: y, indexOf: b, cancellable: w, looseEqual: C, isArray: Di, hasProto: Pi, inBrowser: Ri, devtools: Li, isIE: Ii, isIE9: Mi, isAndroid: Vi, isIos: Bi, iosVersionMatch: Wi, iosVersion: zi, hasMutationObserverBug: Ui, get transitionProp() {
	      return Ji;
	    }, get transitionEndEvent() {
	      return qi;
	    }, get animationProp() {
	      return Qi;
	    }, get animationEndEvent() {
	      return Gi;
	    }, nextTick: Yi, get _Set() {
	      return Ki;
	    }, query: L, inDoc: H, getAttr: I, getBindAttr: M, hasBindAttr: V, before: B, after: W, remove: z, prepend: U, replace: J, on: q, off: Q, setClass: Z, addClass: X, removeClass: Y, extractContent: K, trimNode: tt, isTemplate: it, createAnchor: nt, findRef: rt, mapNodeRange: st, removeNodeRange: ot, isFragment: at, getOuterHTML: ht, mergeOptions: mt, resolveAsset: gt, checkComponentAttr: lt, commonTagRE: jn, reservedTagRE: En, warn: On }),
	      Mn = 0,
	      Vn = new $(1e3),
	      Bn = 0,
	      Wn = 1,
	      zn = 2,
	      Un = 3,
	      Jn = 0,
	      qn = 1,
	      Qn = 2,
	      Gn = 3,
	      Zn = 4,
	      Xn = 5,
	      Yn = 6,
	      Kn = 7,
	      tr = 8,
	      er = [];er[Jn] = { ws: [Jn], ident: [Gn, Bn], "[": [Zn], eof: [Kn] }, er[qn] = { ws: [qn], ".": [Qn], "[": [Zn], eof: [Kn] }, er[Qn] = { ws: [Qn], ident: [Gn, Bn] }, er[Gn] = { ident: [Gn, Bn], 0: [Gn, Bn], number: [Gn, Bn], ws: [qn, Wn], ".": [Qn, Wn], "[": [Zn, Wn], eof: [Kn, Wn] }, er[Zn] = { "'": [Xn, Bn], '"': [Yn, Bn], "[": [Zn, zn], "]": [qn, Un], eof: tr, "else": [Zn, Bn] }, er[Xn] = { "'": [Zn, Bn], eof: tr, "else": [Xn, Bn] }, er[Yn] = { '"': [Zn, Bn], eof: tr, "else": [Yn, Bn] };var ir = Object.freeze({ parsePath: Nt, getPath: jt, setPath: Et }),
	      nr = new $(1e3),
	      rr = "Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",
	      sr = new RegExp("^(" + rr.replace(/,/g, "\\b|") + "\\b)"),
	      or = "break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,protected,static,interface,private,public",
	      ar = new RegExp("^(" + or.replace(/,/g, "\\b|") + "\\b)"),
	      hr = /\s/g,
	      lr = /\n/g,
	      cr = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g,
	      ur = /"(\d+)"/g,
	      fr = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,
	      pr = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g,
	      dr = /^(?:true|false|null|undefined|Infinity|NaN)$/,
	      vr = [],
	      mr = Object.freeze({ parseExpression: It, isSimplePath: Mt }),
	      gr = [],
	      _r = [],
	      yr = {},
	      br = {},
	      wr = !1,
	      Cr = 0;Ut.prototype.get = function () {
	    this.beforeGet();var t,
	        e = this.scope || this.vm;try {
	      t = this.getter.call(e, e);
	    } catch (i) {}return this.deep && Jt(t), this.preProcess && (t = this.preProcess(t)), this.filters && (t = e._applyFilters(t, null, this.filters, !1)), this.postProcess && (t = this.postProcess(t)), this.afterGet(), t;
	  }, Ut.prototype.set = function (t) {
	    var e = this.scope || this.vm;this.filters && (t = e._applyFilters(t, this.value, this.filters, !0));try {
	      this.setter.call(e, e, t);
	    } catch (i) {}var n = e.$forContext;if (n && n.alias === this.expression) {
	      if (n.filters) return;n._withLock(function () {
	        e.$key ? n.rawValue[e.$key] = t : n.rawValue.$set(e.$index, t);
	      });
	    }
	  }, Ut.prototype.beforeGet = function () {
	    _t.target = this;
	  }, Ut.prototype.addDep = function (t) {
	    var e = t.id;this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
	  }, Ut.prototype.afterGet = function () {
	    _t.target = null;for (var t = this.deps.length; t--;) {
	      var e = this.deps[t];this.newDepIds.has(e.id) || e.removeSub(this);
	    }var i = this.depIds;this.depIds = this.newDepIds, this.newDepIds = i, this.newDepIds.clear(), i = this.deps, this.deps = this.newDeps, this.newDeps = i, this.newDeps.length = 0;
	  }, Ut.prototype.update = function (t) {
	    this.lazy ? this.dirty = !0 : this.sync || !An.async ? this.run() : (this.shallow = this.queued ? t ? this.shallow : !1 : !!t, this.queued = !0, zt(this));
	  }, Ut.prototype.run = function () {
	    if (this.active) {
	      var t = this.get();if (t !== this.value || (m(t) || this.deep) && !this.shallow) {
	        var e = this.value;this.value = t;this.prevError;this.cb.call(this.vm, t, e);
	      }this.queued = this.shallow = !1;
	    }
	  }, Ut.prototype.evaluate = function () {
	    var t = _t.target;this.value = this.get(), this.dirty = !1, _t.target = t;
	  }, Ut.prototype.depend = function () {
	    for (var t = this.deps.length; t--;) {
	      this.deps[t].depend();
	    }
	  }, Ut.prototype.teardown = function () {
	    if (this.active) {
	      this.vm._isBeingDestroyed || this.vm._vForRemoving || this.vm._watchers.$remove(this);for (var t = this.deps.length; t--;) {
	        this.deps[t].removeSub(this);
	      }this.active = !1, this.vm = this.cb = this.value = null;
	    }
	  };var $r = new Ki(),
	      kr = { bind: function bind() {
	      this.attr = 3 === this.el.nodeType ? "data" : "textContent";
	    }, update: function update(t) {
	      this.el[this.attr] = s(t);
	    } },
	      xr = new $(1e3),
	      Ar = new $(1e3),
	      Or = { efault: [0, "", ""], legend: [1, "<fieldset>", "</fieldset>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"] };Or.td = Or.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"], Or.option = Or.optgroup = [1, '<select multiple="multiple">', "</select>"], Or.thead = Or.tbody = Or.colgroup = Or.caption = Or.tfoot = [1, "<table>", "</table>"], Or.g = Or.defs = Or.symbol = Or.use = Or.image = Or.text = Or.circle = Or.ellipse = Or.line = Or.path = Or.polygon = Or.polyline = Or.rect = [1, '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">', "</svg>"];var Tr = /<([\w:-]+)/,
	      Nr = /&#?\w+?;/,
	      jr = /<!--/,
	      Er = function () {
	    if (Ri) {
	      var t = document.createElement("div");return t.innerHTML = "<template>1</template>", !t.cloneNode(!0).firstChild.innerHTML;
	    }return !1;
	  }(),
	      Sr = function () {
	    if (Ri) {
	      var t = document.createElement("textarea");return t.placeholder = "t", "t" === t.cloneNode(!0).value;
	    }return !1;
	  }(),
	      Fr = Object.freeze({ cloneNode: Zt, parseTemplate: Xt }),
	      Dr = { bind: function bind() {
	      8 === this.el.nodeType && (this.nodes = [], this.anchor = nt("v-html"), J(this.el, this.anchor));
	    }, update: function update(t) {
	      t = s(t), this.nodes ? this.swap(t) : this.el.innerHTML = t;
	    }, swap: function swap(t) {
	      for (var e = this.nodes.length; e--;) {
	        z(this.nodes[e]);
	      }var i = Xt(t, !0, !0);this.nodes = d(i.childNodes), B(i, this.anchor);
	    } };Yt.prototype.callHook = function (t) {
	    var e, i;for (e = 0, i = this.childFrags.length; i > e; e++) {
	      this.childFrags[e].callHook(t);
	    }for (e = 0, i = this.children.length; i > e; e++) {
	      t(this.children[e]);
	    }
	  }, Yt.prototype.beforeRemove = function () {
	    var t, e;for (t = 0, e = this.childFrags.length; e > t; t++) {
	      this.childFrags[t].beforeRemove(!1);
	    }for (t = 0, e = this.children.length; e > t; t++) {
	      this.children[t].$destroy(!1, !0);
	    }var i = this.unlink.dirs;for (t = 0, e = i.length; e > t; t++) {
	      i[t]._watcher && i[t]._watcher.teardown();
	    }
	  }, Yt.prototype.destroy = function () {
	    this.parentFrag && this.parentFrag.childFrags.$remove(this), this.node.__v_frag = null, this.unlink();
	  };var Pr = new $(5e3);se.prototype.create = function (t, e, i) {
	    var n = Zt(this.template);return new Yt(this.linker, this.vm, n, t, e, i);
	  };var Rr = 700,
	      Lr = 800,
	      Hr = 850,
	      Ir = 1100,
	      Mr = 1500,
	      Vr = 1500,
	      Br = 1750,
	      Wr = 2100,
	      zr = 2200,
	      Ur = 2300,
	      Jr = 0,
	      qr = { priority: zr, terminal: !0, params: ["track-by", "stagger", "enter-stagger", "leave-stagger"], bind: function bind() {
	      var t = this.expression.match(/(.*) (?:in|of) (.*)/);if (t) {
	        var e = t[1].match(/\((.*),(.*)\)/);e ? (this.iterator = e[1].trim(), this.alias = e[2].trim()) : this.alias = t[1].trim(), this.expression = t[2];
	      }if (this.alias) {
	        this.id = "__v-for__" + ++Jr;var i = this.el.tagName;this.isOption = ("OPTION" === i || "OPTGROUP" === i) && "SELECT" === this.el.parentNode.tagName, this.start = nt("v-for-start"), this.end = nt("v-for-end"), J(this.el, this.end), B(this.start, this.end), this.cache = Object.create(null), this.factory = new se(this.vm, this.el);
	      }
	    }, update: function update(t) {
	      this.diff(t), this.updateRef(), this.updateModel();
	    }, diff: function diff(t) {
	      var e,
	          n,
	          r,
	          s,
	          o,
	          a,
	          h = t[0],
	          l = this.fromObject = m(h) && i(h, "$key") && i(h, "$value"),
	          c = this.params.trackBy,
	          u = this.frags,
	          f = this.frags = new Array(t.length),
	          p = this.alias,
	          d = this.iterator,
	          v = this.start,
	          g = this.end,
	          _ = H(v),
	          y = !u;for (e = 0, n = t.length; n > e; e++) {
	        h = t[e], s = l ? h.$key : null, o = l ? h.$value : h, a = !m(o), r = !y && this.getCachedFrag(o, e, s), r ? (r.reused = !0, r.scope.$index = e, s && (r.scope.$key = s), d && (r.scope[d] = null !== s ? s : e), (c || l || a) && yt(function () {
	          r.scope[p] = o;
	        })) : (r = this.create(o, p, e, s), r.fresh = !y), f[e] = r, y && r.before(g);
	      }if (!y) {
	        var b = 0,
	            w = u.length - f.length;for (this.vm._vForRemoving = !0, e = 0, n = u.length; n > e; e++) {
	          r = u[e], r.reused || (this.deleteCachedFrag(r), this.remove(r, b++, w, _));
	        }this.vm._vForRemoving = !1, b && (this.vm._watchers = this.vm._watchers.filter(function (t) {
	          return t.active;
	        }));var C,
	            $,
	            k,
	            x = 0;for (e = 0, n = f.length; n > e; e++) {
	          r = f[e], C = f[e - 1], $ = C ? C.staggerCb ? C.staggerAnchor : C.end || C.node : v, r.reused && !r.staggerCb ? (k = oe(r, v, this.id), k === C || k && oe(k, v, this.id) === C || this.move(r, $)) : this.insert(r, x++, $, _), r.reused = r.fresh = !1;
	        }
	      }
	    }, create: function create(t, e, i, n) {
	      var r = this._host,
	          s = this._scope || this.vm,
	          o = Object.create(s);o.$refs = Object.create(s.$refs), o.$els = Object.create(s.$els), o.$parent = s, o.$forContext = this, yt(function () {
	        kt(o, e, t);
	      }), kt(o, "$index", i), n ? kt(o, "$key", n) : o.$key && _(o, "$key", null), this.iterator && kt(o, this.iterator, null !== n ? n : i);var a = this.factory.create(r, o, this._frag);return a.forId = this.id, this.cacheFrag(t, a, i, n), a;
	    }, updateRef: function updateRef() {
	      var t = this.descriptor.ref;if (t) {
	        var e,
	            i = (this._scope || this.vm).$refs;this.fromObject ? (e = {}, this.frags.forEach(function (t) {
	          e[t.scope.$key] = ae(t);
	        })) : e = this.frags.map(ae), i[t] = e;
	      }
	    }, updateModel: function updateModel() {
	      if (this.isOption) {
	        var t = this.start.parentNode,
	            e = t && t.__v_model;e && e.forceUpdate();
	      }
	    }, insert: function insert(t, e, i, n) {
	      t.staggerCb && (t.staggerCb.cancel(), t.staggerCb = null);var r = this.getStagger(t, e, null, "enter");if (n && r) {
	        var s = t.staggerAnchor;s || (s = t.staggerAnchor = nt("stagger-anchor"), s.__v_frag = t), W(s, i);var o = t.staggerCb = w(function () {
	          t.staggerCb = null, t.before(s), z(s);
	        });setTimeout(o, r);
	      } else {
	        var a = i.nextSibling;a || (W(this.end, i), a = this.end), t.before(a);
	      }
	    }, remove: function remove(t, e, i, n) {
	      if (t.staggerCb) return t.staggerCb.cancel(), void (t.staggerCb = null);var r = this.getStagger(t, e, i, "leave");if (n && r) {
	        var s = t.staggerCb = w(function () {
	          t.staggerCb = null, t.remove();
	        });setTimeout(s, r);
	      } else t.remove();
	    }, move: function move(t, e) {
	      e.nextSibling || this.end.parentNode.appendChild(this.end), t.before(e.nextSibling, !1);
	    }, cacheFrag: function cacheFrag(t, e, n, r) {
	      var s,
	          o = this.params.trackBy,
	          a = this.cache,
	          h = !m(t);r || o || h ? (s = le(n, r, t, o), a[s] || (a[s] = e)) : (s = this.id, i(t, s) ? null === t[s] && (t[s] = e) : Object.isExtensible(t) && _(t, s, e)), e.raw = t;
	    }, getCachedFrag: function getCachedFrag(t, e, i) {
	      var n,
	          r = this.params.trackBy,
	          s = !m(t);if (i || r || s) {
	        var o = le(e, i, t, r);n = this.cache[o];
	      } else n = t[this.id];return n && (n.reused || n.fresh), n;
	    }, deleteCachedFrag: function deleteCachedFrag(t) {
	      var e = t.raw,
	          n = this.params.trackBy,
	          r = t.scope,
	          s = r.$index,
	          o = i(r, "$key") && r.$key,
	          a = !m(e);if (n || o || a) {
	        var h = le(s, o, e, n);this.cache[h] = null;
	      } else e[this.id] = null, t.raw = null;
	    }, getStagger: function getStagger(t, e, i, n) {
	      n += "Stagger";var r = t.node.__v_trans,
	          s = r && r.hooks,
	          o = s && (s[n] || s.stagger);return o ? o.call(t, e, i) : e * parseInt(this.params[n] || this.params.stagger, 10);
	    }, _preProcess: function _preProcess(t) {
	      return this.rawValue = t, t;
	    }, _postProcess: function _postProcess(t) {
	      if (Di(t)) return t;if (g(t)) {
	        for (var e, i = Object.keys(t), n = i.length, r = new Array(n); n--;) {
	          e = i[n], r[n] = { $key: e, $value: t[e] };
	        }return r;
	      }return "number" != typeof t || isNaN(t) || (t = he(t)), t || [];
	    }, unbind: function unbind() {
	      if (this.descriptor.ref && ((this._scope || this.vm).$refs[this.descriptor.ref] = null), this.frags) for (var t, e = this.frags.length; e--;) {
	        t = this.frags[e], this.deleteCachedFrag(t), t.destroy();
	      }
	    } },
	      Qr = { priority: Wr, terminal: !0, bind: function bind() {
	      var t = this.el;if (t.__vue__) this.invalid = !0;else {
	        var e = t.nextElementSibling;e && null !== I(e, "v-else") && (z(e), this.elseEl = e), this.anchor = nt("v-if"), J(t, this.anchor);
	      }
	    }, update: function update(t) {
	      this.invalid || (t ? this.frag || this.insert() : this.remove());
	    }, insert: function insert() {
	      this.elseFrag && (this.elseFrag.remove(), this.elseFrag = null), this.factory || (this.factory = new se(this.vm, this.el)), this.frag = this.factory.create(this._host, this._scope, this._frag), this.frag.before(this.anchor);
	    }, remove: function remove() {
	      this.frag && (this.frag.remove(), this.frag = null), this.elseEl && !this.elseFrag && (this.elseFactory || (this.elseFactory = new se(this.elseEl._context || this.vm, this.elseEl)), this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag), this.elseFrag.before(this.anchor));
	    }, unbind: function unbind() {
	      this.frag && this.frag.destroy(), this.elseFrag && this.elseFrag.destroy();
	    } },
	      Gr = { bind: function bind() {
	      var t = this.el.nextElementSibling;t && null !== I(t, "v-else") && (this.elseEl = t);
	    }, update: function update(t) {
	      this.apply(this.el, t), this.elseEl && this.apply(this.elseEl, !t);
	    }, apply: function apply(t, e) {
	      function i() {
	        t.style.display = e ? "" : "none";
	      }H(t) ? R(t, e ? 1 : -1, i, this.vm) : i();
	    } },
	      Zr = { bind: function bind() {
	      var t = this,
	          e = this.el,
	          i = "range" === e.type,
	          n = this.params.lazy,
	          r = this.params.number,
	          s = this.params.debounce,
	          a = !1;if (Vi || i || (this.on("compositionstart", function () {
	        a = !0;
	      }), this.on("compositionend", function () {
	        a = !1, n || t.listener();
	      })), this.focused = !1, i || n || (this.on("focus", function () {
	        t.focused = !0;
	      }), this.on("blur", function () {
	        t.focused = !1, t._frag && !t._frag.inserted || t.rawListener();
	      })), this.listener = this.rawListener = function () {
	        if (!a && t._bound) {
	          var n = r || i ? o(e.value) : e.value;t.set(n), Yi(function () {
	            t._bound && !t.focused && t.update(t._watcher.value);
	          });
	        }
	      }, s && (this.listener = y(this.listener, s)), this.hasjQuery = "function" == typeof jQuery, this.hasjQuery) {
	        var h = jQuery.fn.on ? "on" : "bind";jQuery(e)[h]("change", this.rawListener), n || jQuery(e)[h]("input", this.listener);
	      } else this.on("change", this.rawListener), n || this.on("input", this.listener);!n && Mi && (this.on("cut", function () {
	        Yi(t.listener);
	      }), this.on("keyup", function (e) {
	        46 !== e.keyCode && 8 !== e.keyCode || t.listener();
	      })), (e.hasAttribute("value") || "TEXTAREA" === e.tagName && e.value.trim()) && (this.afterBind = this.listener);
	    }, update: function update(t) {
	      t = s(t), t !== this.el.value && (this.el.value = t);
	    }, unbind: function unbind() {
	      var t = this.el;if (this.hasjQuery) {
	        var e = jQuery.fn.off ? "off" : "unbind";jQuery(t)[e]("change", this.listener), jQuery(t)[e]("input", this.listener);
	      }
	    } },
	      Xr = { bind: function bind() {
	      var t = this,
	          e = this.el;this.getValue = function () {
	        if (e.hasOwnProperty("_value")) return e._value;var i = e.value;return t.params.number && (i = o(i)), i;
	      }, this.listener = function () {
	        t.set(t.getValue());
	      }, this.on("change", this.listener), e.hasAttribute("checked") && (this.afterBind = this.listener);
	    }, update: function update(t) {
	      this.el.checked = C(t, this.getValue());
	    } },
	      Yr = { bind: function bind() {
	      var t = this,
	          e = this,
	          i = this.el;this.forceUpdate = function () {
	        e._watcher && e.update(e._watcher.get());
	      };var n = this.multiple = i.hasAttribute("multiple");this.listener = function () {
	        var t = ce(i, n);t = e.params.number ? Di(t) ? t.map(o) : o(t) : t, e.set(t);
	      }, this.on("change", this.listener);var r = ce(i, n, !0);(n && r.length || !n && null !== r) && (this.afterBind = this.listener), this.vm.$on("hook:attached", function () {
	        Yi(t.forceUpdate);
	      }), H(i) || Yi(this.forceUpdate);
	    }, update: function update(t) {
	      var e = this.el;e.selectedIndex = -1;for (var i, n, r = this.multiple && Di(t), s = e.options, o = s.length; o--;) {
	        i = s[o], n = i.hasOwnProperty("_value") ? i._value : i.value, i.selected = r ? ue(t, n) > -1 : C(t, n);
	      }
	    }, unbind: function unbind() {
	      this.vm.$off("hook:attached", this.forceUpdate);
	    } },
	      Kr = { bind: function bind() {
	      function t() {
	        var t = i.checked;return t && i.hasOwnProperty("_trueValue") ? i._trueValue : !t && i.hasOwnProperty("_falseValue") ? i._falseValue : t;
	      }var e = this,
	          i = this.el;this.getValue = function () {
	        return i.hasOwnProperty("_value") ? i._value : e.params.number ? o(i.value) : i.value;
	      }, this.listener = function () {
	        var n = e._watcher.value;if (Di(n)) {
	          var r = e.getValue();i.checked ? b(n, r) < 0 && n.push(r) : n.$remove(r);
	        } else e.set(t());
	      }, this.on("change", this.listener), i.hasAttribute("checked") && (this.afterBind = this.listener);
	    }, update: function update(t) {
	      var e = this.el;Di(t) ? e.checked = b(t, this.getValue()) > -1 : e.hasOwnProperty("_trueValue") ? e.checked = C(t, e._trueValue) : e.checked = !!t;
	    } },
	      ts = { text: Zr, radio: Xr, select: Yr, checkbox: Kr },
	      es = { priority: Lr, twoWay: !0, handlers: ts, params: ["lazy", "number", "debounce"], bind: function bind() {
	      this.checkFilters(), this.hasRead && !this.hasWrite;var t,
	          e = this.el,
	          i = e.tagName;if ("INPUT" === i) t = ts[e.type] || ts.text;else if ("SELECT" === i) t = ts.select;else {
	        if ("TEXTAREA" !== i) return;t = ts.text;
	      }e.__v_model = this, t.bind.call(this), this.update = t.update, this._unbind = t.unbind;
	    }, checkFilters: function checkFilters() {
	      var t = this.filters;if (t) for (var e = t.length; e--;) {
	        var i = gt(this.vm.$options, "filters", t[e].name);("function" == typeof i || i.read) && (this.hasRead = !0), i.write && (this.hasWrite = !0);
	      }
	    }, unbind: function unbind() {
	      this.el.__v_model = null, this._unbind && this._unbind();
	    } },
	      is = { esc: 27, tab: 9, enter: 13, space: 32, "delete": [8, 46], up: 38, left: 37, right: 39, down: 40 },
	      ns = { priority: Rr, acceptStatement: !0, keyCodes: is, bind: function bind() {
	      if ("IFRAME" === this.el.tagName && "load" !== this.arg) {
	        var t = this;this.iframeBind = function () {
	          q(t.el.contentWindow, t.arg, t.handler, t.modifiers.capture);
	        }, this.on("load", this.iframeBind);
	      }
	    }, update: function update(t) {
	      if (this.descriptor.raw || (t = function t() {}), "function" == typeof t) {
	        this.modifiers.stop && (t = pe(t)), this.modifiers.prevent && (t = de(t)), this.modifiers.self && (t = ve(t));var e = Object.keys(this.modifiers).filter(function (t) {
	          return "stop" !== t && "prevent" !== t && "self" !== t && "capture" !== t;
	        });e.length && (t = fe(t, e)), this.reset(), this.handler = t, this.iframeBind ? this.iframeBind() : q(this.el, this.arg, this.handler, this.modifiers.capture);
	      }
	    }, reset: function reset() {
	      var t = this.iframeBind ? this.el.contentWindow : this.el;this.handler && Q(t, this.arg, this.handler);
	    }, unbind: function unbind() {
	      this.reset();
	    } },
	      rs = ["-webkit-", "-moz-", "-ms-"],
	      ss = ["Webkit", "Moz", "ms"],
	      os = /!important;?$/,
	      as = Object.create(null),
	      hs = null,
	      ls = { deep: !0, update: function update(t) {
	      "string" == typeof t ? this.el.style.cssText = t : Di(t) ? this.handleObject(t.reduce(v, {})) : this.handleObject(t || {});
	    }, handleObject: function handleObject(t) {
	      var e,
	          i,
	          n = this.cache || (this.cache = {});for (e in n) {
	        e in t || (this.handleSingle(e, null), delete n[e]);
	      }for (e in t) {
	        i = t[e], i !== n[e] && (n[e] = i, this.handleSingle(e, i));
	      }
	    }, handleSingle: function handleSingle(t, e) {
	      if (t = me(t)) if (null != e && (e += ""), e) {
	        var i = os.test(e) ? "important" : "";i ? (e = e.replace(os, "").trim(), this.el.style.setProperty(t.kebab, e, i)) : this.el.style[t.camel] = e;
	      } else this.el.style[t.camel] = "";
	    } },
	      cs = "http://www.w3.org/1999/xlink",
	      us = /^xlink:/,
	      fs = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/,
	      ps = /^(?:value|checked|selected|muted)$/,
	      ds = /^(?:draggable|contenteditable|spellcheck)$/,
	      vs = { value: "_value", "true-value": "_trueValue", "false-value": "_falseValue" },
	      ms = { priority: Hr, bind: function bind() {
	      var t = this.arg,
	          e = this.el.tagName;t || (this.deep = !0);var i = this.descriptor,
	          n = i.interp;n && (i.hasOneTime && (this.expression = j(n, this._scope || this.vm)), (fs.test(t) || "name" === t && ("PARTIAL" === e || "SLOT" === e)) && (this.el.removeAttribute(t), this.invalid = !0));
	    }, update: function update(t) {
	      if (!this.invalid) {
	        var e = this.arg;this.arg ? this.handleSingle(e, t) : this.handleObject(t || {});
	      }
	    }, handleObject: ls.handleObject, handleSingle: function handleSingle(t, e) {
	      var i = this.el,
	          n = this.descriptor.interp;if (this.modifiers.camel && (t = l(t)), !n && ps.test(t) && t in i) {
	        var r = "value" === t && null == e ? "" : e;i[t] !== r && (i[t] = r);
	      }var s = vs[t];if (!n && s) {
	        i[s] = e;var o = i.__v_model;o && o.listener();
	      }return "value" === t && "TEXTAREA" === i.tagName ? void i.removeAttribute(t) : void (ds.test(t) ? i.setAttribute(t, e ? "true" : "false") : null != e && e !== !1 ? "class" === t ? (i.__v_trans && (e += " " + i.__v_trans.id + "-transition"), Z(i, e)) : us.test(t) ? i.setAttributeNS(cs, t, e === !0 ? "" : e) : i.setAttribute(t, e === !0 ? "" : e) : i.removeAttribute(t));
	    } },
	      gs = { priority: Mr, bind: function bind() {
	      if (this.arg) {
	        var t = this.id = l(this.arg),
	            e = (this._scope || this.vm).$els;i(e, t) ? e[t] = this.el : kt(e, t, this.el);
	      }
	    }, unbind: function unbind() {
	      var t = (this._scope || this.vm).$els;t[this.id] === this.el && (t[this.id] = null);
	    } },
	      _s = { bind: function bind() {} },
	      ys = { bind: function bind() {
	      var t = this.el;this.vm.$once("pre-hook:compiled", function () {
	        t.removeAttribute("v-cloak");
	      });
	    } },
	      bs = { text: kr, html: Dr, "for": qr, "if": Qr, show: Gr, model: es, on: ns, bind: ms, el: gs, ref: _s, cloak: ys },
	      ws = { deep: !0, update: function update(t) {
	      t ? "string" == typeof t ? this.setClass(t.trim().split(/\s+/)) : this.setClass(_e(t)) : this.cleanup();
	    }, setClass: function setClass(t) {
	      this.cleanup(t);for (var e = 0, i = t.length; i > e; e++) {
	        var n = t[e];n && ye(this.el, n, X);
	      }this.prevKeys = t;
	    }, cleanup: function cleanup(t) {
	      var e = this.prevKeys;if (e) for (var i = e.length; i--;) {
	        var n = e[i];(!t || t.indexOf(n) < 0) && ye(this.el, n, Y);
	      }
	    } },
	      Cs = { priority: Vr, params: ["keep-alive", "transition-mode", "inline-template"], bind: function bind() {
	      this.el.__vue__ || (this.keepAlive = this.params.keepAlive, this.keepAlive && (this.cache = {}), this.params.inlineTemplate && (this.inlineTemplate = K(this.el, !0)), this.pendingComponentCb = this.Component = null, this.pendingRemovals = 0, this.pendingRemovalCb = null, this.anchor = nt("v-component"), J(this.el, this.anchor), this.el.removeAttribute("is"), this.el.removeAttribute(":is"), this.descriptor.ref && this.el.removeAttribute("v-ref:" + u(this.descriptor.ref)), this.literal && this.setComponent(this.expression));
	    }, update: function update(t) {
	      this.literal || this.setComponent(t);
	    }, setComponent: function setComponent(t, e) {
	      if (this.invalidatePending(), t) {
	        var i = this;this.resolveComponent(t, function () {
	          i.mountComponent(e);
	        });
	      } else this.unbuild(!0), this.remove(this.childVM, e), this.childVM = null;
	    }, resolveComponent: function resolveComponent(t, e) {
	      var i = this;this.pendingComponentCb = w(function (n) {
	        i.ComponentName = n.options.name || ("string" == typeof t ? t : null), i.Component = n, e();
	      }), this.vm._resolveComponent(t, this.pendingComponentCb);
	    }, mountComponent: function mountComponent(t) {
	      this.unbuild(!0);var e = this,
	          i = this.Component.options.activate,
	          n = this.getCached(),
	          r = this.build();i && !n ? (this.waitingFor = r, be(i, r, function () {
	        e.waitingFor === r && (e.waitingFor = null, e.transition(r, t));
	      })) : (n && r._updateRef(), this.transition(r, t));
	    }, invalidatePending: function invalidatePending() {
	      this.pendingComponentCb && (this.pendingComponentCb.cancel(), this.pendingComponentCb = null);
	    }, build: function build(t) {
	      var e = this.getCached();if (e) return e;if (this.Component) {
	        var i = { name: this.ComponentName, el: Zt(this.el), template: this.inlineTemplate, parent: this._host || this.vm, _linkerCachable: !this.inlineTemplate, _ref: this.descriptor.ref, _asComponent: !0, _isRouterView: this._isRouterView, _context: this.vm, _scope: this._scope, _frag: this._frag };t && v(i, t);var n = new this.Component(i);return this.keepAlive && (this.cache[this.Component.cid] = n), n;
	      }
	    }, getCached: function getCached() {
	      return this.keepAlive && this.cache[this.Component.cid];
	    }, unbuild: function unbuild(t) {
	      this.waitingFor && (this.keepAlive || this.waitingFor.$destroy(), this.waitingFor = null);var e = this.childVM;return !e || this.keepAlive ? void (e && (e._inactive = !0, e._updateRef(!0))) : void e.$destroy(!1, t);
	    }, remove: function remove(t, e) {
	      var i = this.keepAlive;if (t) {
	        this.pendingRemovals++, this.pendingRemovalCb = e;var n = this;t.$remove(function () {
	          n.pendingRemovals--, i || t._cleanup(), !n.pendingRemovals && n.pendingRemovalCb && (n.pendingRemovalCb(), n.pendingRemovalCb = null);
	        });
	      } else e && e();
	    }, transition: function transition(t, e) {
	      var i = this,
	          n = this.childVM;switch (n && (n._inactive = !0), t._inactive = !1, this.childVM = t, i.params.transitionMode) {case "in-out":
	          t.$before(i.anchor, function () {
	            i.remove(n, e);
	          });break;case "out-in":
	          i.remove(n, function () {
	            t.$before(i.anchor, e);
	          });break;default:
	          i.remove(n), t.$before(i.anchor, e);}
	    }, unbind: function unbind() {
	      if (this.invalidatePending(), this.unbuild(), this.cache) {
	        for (var t in this.cache) {
	          this.cache[t].$destroy();
	        }this.cache = null;
	      }
	    } },
	      $s = An._propBindingModes,
	      ks = {},
	      xs = /^[$_a-zA-Z]+[\w$]*$/,
	      As = An._propBindingModes,
	      Os = { bind: function bind() {
	      var t = this.vm,
	          e = t._context,
	          i = this.descriptor.prop,
	          n = i.path,
	          r = i.parentPath,
	          s = i.mode === As.TWO_WAY,
	          o = this.parentWatcher = new Ut(e, r, function (e) {
	        xe(t, i, e);
	      }, { twoWay: s, filters: i.filters, scope: this._scope });if (ke(t, i, o.value), s) {
	        var a = this;t.$once("pre-hook:created", function () {
	          a.childWatcher = new Ut(t, n, function (t) {
	            o.set(t);
	          }, { sync: !0 });
	        });
	      }
	    }, unbind: function unbind() {
	      this.parentWatcher.teardown(), this.childWatcher && this.childWatcher.teardown();
	    } },
	      Ts = [],
	      Ns = !1,
	      js = "transition",
	      Es = "animation",
	      Ss = Ji + "Duration",
	      Fs = Qi + "Duration",
	      Ds = Ri && window.requestAnimationFrame,
	      Ps = Ds ? function (t) {
	    Ds(function () {
	      Ds(t);
	    });
	  } : function (t) {
	    setTimeout(t, 50);
	  },
	      Rs = Se.prototype;Rs.enter = function (t, e) {
	    this.cancelPending(), this.callHook("beforeEnter"), this.cb = e, X(this.el, this.enterClass), t(), this.entered = !1, this.callHookWithCb("enter"), this.entered || (this.cancel = this.hooks && this.hooks.enterCancelled, je(this.enterNextTick));
	  }, Rs.enterNextTick = function () {
	    var t = this;this.justEntered = !0, Ps(function () {
	      t.justEntered = !1;
	    });var e = this.enterDone,
	        i = this.getCssTransitionType(this.enterClass);this.pendingJsCb ? i === js && Y(this.el, this.enterClass) : i === js ? (Y(this.el, this.enterClass), this.setupCssCb(qi, e)) : i === Es ? this.setupCssCb(Gi, e) : e();
	  }, Rs.enterDone = function () {
	    this.entered = !0, this.cancel = this.pendingJsCb = null, Y(this.el, this.enterClass), this.callHook("afterEnter"), this.cb && this.cb();
	  }, Rs.leave = function (t, e) {
	    this.cancelPending(), this.callHook("beforeLeave"), this.op = t, this.cb = e, X(this.el, this.leaveClass), this.left = !1, this.callHookWithCb("leave"), this.left || (this.cancel = this.hooks && this.hooks.leaveCancelled, this.op && !this.pendingJsCb && (this.justEntered ? this.leaveDone() : je(this.leaveNextTick)));
	  }, Rs.leaveNextTick = function () {
	    var t = this.getCssTransitionType(this.leaveClass);if (t) {
	      var e = t === js ? qi : Gi;this.setupCssCb(e, this.leaveDone);
	    } else this.leaveDone();
	  }, Rs.leaveDone = function () {
	    this.left = !0, this.cancel = this.pendingJsCb = null, this.op(), Y(this.el, this.leaveClass), this.callHook("afterLeave"), this.cb && this.cb(), this.op = null;
	  }, Rs.cancelPending = function () {
	    this.op = this.cb = null;var t = !1;this.pendingCssCb && (t = !0, Q(this.el, this.pendingCssEvent, this.pendingCssCb), this.pendingCssEvent = this.pendingCssCb = null), this.pendingJsCb && (t = !0, this.pendingJsCb.cancel(), this.pendingJsCb = null), t && (Y(this.el, this.enterClass), Y(this.el, this.leaveClass)), this.cancel && (this.cancel.call(this.vm, this.el), this.cancel = null);
	  }, Rs.callHook = function (t) {
	    this.hooks && this.hooks[t] && this.hooks[t].call(this.vm, this.el);
	  }, Rs.callHookWithCb = function (t) {
	    var e = this.hooks && this.hooks[t];e && (e.length > 1 && (this.pendingJsCb = w(this[t + "Done"])), e.call(this.vm, this.el, this.pendingJsCb));
	  }, Rs.getCssTransitionType = function (t) {
	    if (!(!qi || document.hidden || this.hooks && this.hooks.css === !1 || Fe(this.el))) {
	      var e = this.type || this.typeCache[t];if (e) return e;var i = this.el.style,
	          n = window.getComputedStyle(this.el),
	          r = i[Ss] || n[Ss];if (r && "0s" !== r) e = js;else {
	        var s = i[Fs] || n[Fs];s && "0s" !== s && (e = Es);
	      }return e && (this.typeCache[t] = e), e;
	    }
	  }, Rs.setupCssCb = function (t, e) {
	    this.pendingCssEvent = t;var i = this,
	        n = this.el,
	        r = this.pendingCssCb = function (s) {
	      s.target === n && (Q(n, t, r), i.pendingCssEvent = i.pendingCssCb = null, !i.pendingJsCb && e && e());
	    };q(n, t, r);
	  };var Ls = { priority: Ir, update: function update(t, e) {
	      var i = this.el,
	          n = gt(this.vm.$options, "transitions", t);t = t || "v", e = e || "v", i.__v_trans = new Se(i, t, n, this.vm), Y(i, e + "-transition"), X(i, t + "-transition");
	    } },
	      Hs = { style: ls, "class": ws, component: Cs, prop: Os, transition: Ls },
	      Is = /^v-bind:|^:/,
	      Ms = /^v-on:|^@/,
	      Vs = /^v-([^:]+)(?:$|:(.*)$)/,
	      Bs = /\.[^\.]+/g,
	      Ws = /^(v-bind:|:)?transition$/,
	      zs = 1e3,
	      Us = 2e3;Ye.terminal = !0;var Js = /[^\w\-:\.]/,
	      qs = Object.freeze({ compile: De, compileAndLinkProps: Ie, compileRoot: Me, transclude: si, resolveSlots: li }),
	      Qs = /^v-on:|^@/;di.prototype._bind = function () {
	    var t = this.name,
	        e = this.descriptor;if (("cloak" !== t || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	      var i = e.attr || "v-" + t;this.el.removeAttribute(i);
	    }var n = e.def;if ("function" == typeof n ? this.update = n : v(this, n), this._setupParams(), this.bind && this.bind(), this._bound = !0, this.literal) this.update && this.update(e.raw);else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	      var r = this;this.update ? this._update = function (t, e) {
	        r._locked || r.update(t, e);
	      } : this._update = pi;var s = this._preProcess ? p(this._preProcess, this) : null,
	          o = this._postProcess ? p(this._postProcess, this) : null,
	          a = this._watcher = new Ut(this.vm, this.expression, this._update, { filters: this.filters, twoWay: this.twoWay, deep: this.deep, preProcess: s, postProcess: o, scope: this._scope });this.afterBind ? this.afterBind() : this.update && this.update(a.value);
	    }
	  }, di.prototype._setupParams = function () {
	    if (this.params) {
	      var t = this.params;this.params = Object.create(null);for (var e, i, n, r = t.length; r--;) {
	        e = u(t[r]), n = l(e), i = M(this.el, e), null != i ? this._setupParamWatcher(n, i) : (i = I(this.el, e), null != i && (this.params[n] = "" === i ? !0 : i));
	      }
	    }
	  }, di.prototype._setupParamWatcher = function (t, e) {
	    var i = this,
	        n = !1,
	        r = (this._scope || this.vm).$watch(e, function (e, r) {
	      if (i.params[t] = e, n) {
	        var s = i.paramWatchers && i.paramWatchers[t];s && s.call(i, e, r);
	      } else n = !0;
	    }, { immediate: !0, user: !1 });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(r);
	  }, di.prototype._checkStatement = function () {
	    var t = this.expression;if (t && this.acceptStatement && !Mt(t)) {
	      var e = It(t).get,
	          i = this._scope || this.vm,
	          n = function n(t) {
	        i.$event = t, e.call(i, i), i.$event = null;
	      };return this.filters && (n = i._applyFilters(n, null, this.filters)), this.update(n), !0;
	    }
	  }, di.prototype.set = function (t) {
	    this.twoWay && this._withLock(function () {
	      this._watcher.set(t);
	    });
	  }, di.prototype._withLock = function (t) {
	    var e = this;e._locked = !0, t.call(e), Yi(function () {
	      e._locked = !1;
	    });
	  }, di.prototype.on = function (t, e, i) {
	    q(this.el, t, e, i), (this._listeners || (this._listeners = [])).push([t, e]);
	  }, di.prototype._teardown = function () {
	    if (this._bound) {
	      this._bound = !1, this.unbind && this.unbind(), this._watcher && this._watcher.teardown();var t,
	          e = this._listeners;if (e) for (t = e.length; t--;) {
	        Q(this.el, e[t][0], e[t][1]);
	      }var i = this._paramUnwatchFns;if (i) for (t = i.length; t--;) {
	        i[t]();
	      }this.vm = this.el = this._watcher = this._listeners = null;
	    }
	  };var Gs = /[^|]\|[^|]/;xt(wi), ui(wi), fi(wi), vi(wi), mi(wi), gi(wi), _i(wi), yi(wi), bi(wi);var Zs = { priority: Ur, params: ["name"], bind: function bind() {
	      var t = this.params.name || "default",
	          e = this.vm._slotContents && this.vm._slotContents[t];e && e.hasChildNodes() ? this.compile(e.cloneNode(!0), this.vm._context, this.vm) : this.fallback();
	    }, compile: function compile(t, e, i) {
	      if (t && e) {
	        if (this.el.hasChildNodes() && 1 === t.childNodes.length && 1 === t.childNodes[0].nodeType && t.childNodes[0].hasAttribute("v-if")) {
	          var n = document.createElement("template");n.setAttribute("v-else", ""), n.innerHTML = this.el.innerHTML, n._context = this.vm, t.appendChild(n);
	        }var r = i ? i._scope : this._scope;this.unlink = e.$compile(t, i, r, this._frag);
	      }t ? J(this.el, t) : z(this.el);
	    }, fallback: function fallback() {
	      this.compile(K(this.el, !0), this.vm);
	    }, unbind: function unbind() {
	      this.unlink && this.unlink();
	    } },
	      Xs = { priority: Br, params: ["name"], paramWatchers: { name: function name(t) {
	        Qr.remove.call(this), t && this.insert(t);
	      } }, bind: function bind() {
	      this.anchor = nt("v-partial"), J(this.el, this.anchor), this.insert(this.params.name);
	    }, insert: function insert(t) {
	      var e = gt(this.vm.$options, "partials", t, !0);e && (this.factory = new se(this.vm, e), Qr.insert.call(this));
	    }, unbind: function unbind() {
	      this.frag && this.frag.destroy();
	    } },
	      Ys = { slot: Zs, partial: Xs },
	      Ks = qr._postProcess,
	      to = /(\d{3})(?=\d)/g,
	      eo = { orderBy: ki, filterBy: $i, limitBy: Ci, json: { read: function read(t, e) {
	        return "string" == typeof t ? t : JSON.stringify(t, null, arguments.length > 1 ? e : 2);
	      }, write: function write(t) {
	        try {
	          return JSON.parse(t);
	        } catch (e) {
	          return t;
	        }
	      } }, capitalize: function capitalize(t) {
	      return t || 0 === t ? (t = t.toString(), t.charAt(0).toUpperCase() + t.slice(1)) : "";
	    }, uppercase: function uppercase(t) {
	      return t || 0 === t ? t.toString().toUpperCase() : "";
	    }, lowercase: function lowercase(t) {
	      return t || 0 === t ? t.toString().toLowerCase() : "";
	    }, currency: function currency(t, e, i) {
	      if (t = parseFloat(t), !isFinite(t) || !t && 0 !== t) return "";e = null != e ? e : "$", i = null != i ? i : 2;var n = Math.abs(t).toFixed(i),
	          r = i ? n.slice(0, -1 - i) : n,
	          s = r.length % 3,
	          o = s > 0 ? r.slice(0, s) + (r.length > 3 ? "," : "") : "",
	          a = i ? n.slice(-1 - i) : "",
	          h = 0 > t ? "-" : "";return h + e + o + r.slice(s).replace(to, "$1,") + a;
	    }, pluralize: function pluralize(t) {
	      var e = d(arguments, 1),
	          i = e.length;if (i > 1) {
	        var n = t % 10 - 1;return n in e ? e[n] : e[i - 1];
	      }return e[0] + (1 === t ? "" : "s");
	    }, debounce: function debounce(t, e) {
	      return t ? (e || (e = 300), y(t, e)) : void 0;
	    } };return Ai(wi), wi.version = "1.0.26", setTimeout(function () {
	    An.devtools && Li && Li.emit("init", wi);
	  }, 0), wi;
	});
	//# sourceMappingURL=vue.min.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';
	
	  var babelHelpers = {};
	
	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }
	
	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;
	
	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }
	
	      this.matcher.add(this.path, target);
	
	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };
	
	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }
	
	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },
	
	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;
	
	      var match = generateMatch(path, matcher, delegate);
	
	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }
	
	      callback(match);
	    }
	  };
	
	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;
	
	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }
	
	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }
	
	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }
	
	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;
	
	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);
	
	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }
	
	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();
	
	    callback(generateMatch("", matcher, this.delegate));
	
	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }
	
	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
	
	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');
	
	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }
	
	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }
	
	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }
	
	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat
	
	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;
	
	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },
	
	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },
	
	    generate: function generate() {
	      return this.string;
	    }
	  };
	
	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },
	
	    regex: function regex() {
	      return "([^/]+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },
	
	    regex: function regex() {
	      return "(.+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };
	
	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }
	
	    var segments = route.split("/"),
	        results = [];
	
	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';
	
	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;
	
	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }
	
	    specificity.val = +specificity.val;
	
	    return results;
	  }
	
	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.
	
	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }
	
	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];
	
	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;
	
	        if (isEqual) {
	          return child;
	        }
	      }
	    },
	
	    put: function put(charSpec) {
	      var state;
	
	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }
	
	      // Make a new state for the character spec
	      state = new State(charSpec);
	
	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);
	
	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }
	
	      // Return the new state
	      return state;
	    },
	
	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;
	
	      // DEBUG "  " + debugState(this)
	      var returned = [];
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];
	
	        charSpec = child.charSpec;
	
	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }
	
	      return returned;
	    }
	
	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };
	
	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }
	
	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/
	
	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }
	
	  function recognizeChar(states, ch) {
	    var nextStates = [];
	
	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];
	
	      nextStates = nextStates.concat(state.match(ch));
	    }
	
	    return nextStates;
	  }
	
	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };
	
	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });
	
	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);
	
	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};
	
	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }
	
	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }
	
	    return result;
	  }
	
	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;
	
	      currentState = currentState.put(ch);
	    });
	
	    return currentState;
	  }
	
	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }
	
	  // The main interface
	
	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };
	
	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;
	
	      var isEmpty = true;
	
	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];
	
	        var segments = parse(route.path, names, specificity);
	
	        allSegments = allSegments.concat(segments);
	
	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];
	
	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }
	
	          isEmpty = false;
	
	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";
	
	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }
	
	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }
	
	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }
	
	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;
	
	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },
	
	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }
	
	      return result;
	    },
	
	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },
	
	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      var segments = route.segments;
	
	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];
	
	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }
	
	        output += "/";
	        output += segment.generate(params);
	      }
	
	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }
	
	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }
	
	      return output;
	    },
	
	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }
	
	      if (pairs.length === 0) {
	        return '';
	      }
	
	      return "?" + pairs.join("&");
	    },
	
	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },
	
	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;
	
	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }
	
	      path = tryDecode(path);
	      if (!path) return;
	
	      // DEBUG GROUP path
	
	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }
	
	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }
	
	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }
	
	      // END DEBUG GROUP
	
	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }
	
	      states = sortSolutions(solutions);
	
	      var state = solutions[0];
	
	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };
	
	  RouteRecognizer.prototype.map = map;
	
	  var genQuery = RouteRecognizer.prototype.generateQueryString;
	
	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */
	
	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }
	
	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */
	
	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }
	
	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */
	
	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }
	
	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */
	
	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }
	
	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */
	
	  var resolver = undefined;
	
	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }
	
	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */
	
	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};
	
	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }
	
	  var hashRE = /#.*$/;
	
	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);
	
	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }
	
	    HTML5History.prototype.start = function start() {
	      var _this = this;
	
	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };
	
	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };
	
	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };
	
	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };
	
	    return HTML5History;
	  })();
	
	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);
	
	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }
	
	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };
	
	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };
	
	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };
	
	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };
	
	    return HashHistory;
	  })();
	
	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);
	
	      this.onChange = onChange;
	      this.currentPath = '/';
	    }
	
	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };
	
	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };
	
	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };
	
	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };
	
	    return AbstractHistory;
	  })();
	
	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */
	
	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }
	
	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }
	
	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }
	
	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }
	
	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */
	
	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }
	
	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');
	
	    view.depth = depth;
	    view.activated = false;
	
	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);
	
	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;
	
	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);
	
	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);
	
	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });
	
	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }
	
	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };
	
	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };
	
	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };
	
	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };
	
	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }
	
	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */
	
	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }
	
	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */
	
	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }
	
	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */
	
	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }
	
	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */
	
	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */
	
	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);
	
	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }
	
	    /**
	     * Abort current transition and return to previous location.
	     */
	
	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };
	
	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */
	
	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };
	
	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;
	
	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();
	
	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });
	
	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }
	
	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase
	
	            // Update router current route
	            transition.router._onTransitionValidated(transition);
	
	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });
	
	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };
	
	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };
	
	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */
	
	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;
	
	      var transition = this;
	      var nextCalled = false;
	
	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };
	
	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };
	
	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };
	
	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };
	
	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };
	
	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };
	
	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };
	
	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }
	
	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };
	
	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */
	
	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;
	
	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };
	
	    return RouteTransition;
	  })();
	
	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }
	
	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;
	
	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */
	
	  var Route = function Route(path, router) {
	    var _this = this;
	
	    babelHelpers.classCallCheck(this, Route);
	
	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };
	
	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;
	
	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };
	
	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };
	
	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;
	
	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }
	
	  function View (Vue) {
	
	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);
	
	    // with some overrides
	    _.extend(viewDef, {
	
	      _isRouterView: true,
	
	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);
	
	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }
	
	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },
	
	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });
	
	    Vue.elementDirective('router-view', viewDef);
	  }
	
	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;
	
	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;
	
	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';
	
	    var activeId = 0;
	
	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;
	
	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });
	
	    Vue.directive('link', {
	      priority: onPriority - 2,
	
	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },
	
	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },
	
	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;
	
	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },
	
	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },
	
	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },
	
	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },
	
	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },
	
	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });
	
	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }
	
	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }
	
	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };
	
	  // late bind during install
	  var Vue = undefined;
	
	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */
	
	  var Router = (function () {
	    function Router() {
	      var _this = this;
	
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);
	
	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }
	
	      // Vue instances
	      this.app = null;
	      this._children = [];
	
	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();
	
	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];
	
	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;
	
	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;
	
	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;
	
	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';
	
	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });
	
	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }
	
	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */
	
	    // API ===================================================
	
	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */
	
	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };
	
	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */
	
	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };
	
	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */
	
	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };
	
	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */
	
	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };
	
	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */
	
	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }
	
	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }
	
	      this.history.start();
	    };
	
	    /**
	     * Stop listening to route changes.
	     */
	
	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };
	
	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */
	
	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };
	
	    // Internal methods ======================================
	
	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */
	
	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };
	
	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */
	
	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };
	
	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */
	
	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };
	
	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */
	
	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };
	
	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */
	
	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;
	
	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };
	
	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */
	
	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };
	
	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;
	
	      if (this._checkGuard(path)) {
	        return;
	      }
	
	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;
	
	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }
	
	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);
	
	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;
	
	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }
	
	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };
	
	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }
	
	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }
	
	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };
	
	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */
	
	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };
	
	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };
	
	    return Router;
	  })();
	
	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }
	
	  /* Installation */
	
	  Router.installed = false;
	
	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */
	
	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };
	
	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }
	
	  return Router;
	
	}));

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var VueRouter = __webpack_require__(2);
	
	var router = new VueRouter();
	
	router.map({
	    '/': {
	        component: __webpack_require__(4)
	    }
	});
	
	module.exports = router;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Vue = __webpack_require__(1);
	var loader = __webpack_require__(5);
	
	var _data = {
	    articles: []
	};
	
	var Component = Vue.extend({
	    template: __webpack_require__(6),
	    data: function data() {
	        return _data;
	    },
	    components: {
	        "wp-article": __webpack_require__(7)
	    },
	    created: function created() {
	        loader().then(function (articles) {
	            _data.articles = articles;
	        });
	    }
	});
	
	module.exports = Component;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var request = function request(api, page) {
	    return new Promise(function (resolve) {
	        var xhr = $.get(api, {
	            page: page,
	            per_page: 10
	        });
	        xhr.success(function (data) {
	            resolve(data);
	        });
	        xhr.fail(function () {
	            throw new Error();
	        });
	    });
	};
	
	var loading = function loading(minWait) {
	    return new Promise(function (resolve) {
	        setTimeout(function () {
	            resolve(null);
	        }, minWait);
	    });
	};
	
	module.exports = function () {
	    var api = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	    var page = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
	    var minWait = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	    return new Promise(function (resolve) {
	        api = api || "http://api.wp-app.org/wp-json/wp/v2/posts";
	        Promise.all([request(api, page), loading(minWait)]).then(function (_ref) {
	            var _ref2 = _slicedToArray(_ref, 2);
	
	            var data = _ref2[0];
	            var dummy = _ref2[1];
	
	            resolve(data);
	        });
	    });
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div>\n    <ul>\n        <wp-article v-for='article in articles', :article='article'></wp-article>\n    </ul>\n</div>\n";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Vue = __webpack_require__(1);
	
	var Component = Vue.extend({
	    template: __webpack_require__(8),
	    props: ["article"],
	    data: function data() {
	        return {};
	    }
	});
	
	module.exports = Component;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<li>\n    <h2>\n        <a :href=\"article.link\">{{ article.title.rendered }}</a>\n    </h2>\n    <div v-html=\"article.excerpt.rendered\"></div>\n</li>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=common.bundle.js.map