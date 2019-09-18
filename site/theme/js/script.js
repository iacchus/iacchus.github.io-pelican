!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = "length"in a && a.length
          , c = ea.type(a);
        return "function" !== c && !ea.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
    }
    function d(a, b, c) {
        if (ea.isFunction(b))
            return ea.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return ea.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (ma.test(b))
                return ea.filter(b, a, c);
            b = ea.filter(b, a)
        }
        return ea.grep(a, function(a) {
            return ea.inArray(a, b) >= 0 !== c
        })
    }
    function e(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);return a
    }
    function f(a) {
        var b = ua[a] = {};
        return ea.each(a.match(ta) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    function g() {
        oa.addEventListener ? (oa.removeEventListener("DOMContentLoaded", h, !1),
        a.removeEventListener("load", h, !1)) : (oa.detachEvent("onreadystatechange", h),
        a.detachEvent("onload", h))
    }
    function h() {
        (oa.addEventListener || "load" === event.type || "complete" === oa.readyState) && (g(),
        ea.ready())
    }
    function i(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(za, "-$1").toLowerCase();
            if (c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : ya.test(c) ? ea.parseJSON(c) : c)
                } catch (e) {}
                ea.data(a, b, c)
            } else
                c = void 0
        }
        return c
    }
    function j(a) {
        var b;
        for (b in a)
            if (("data" !== b || !ea.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function k(a, b, c, d) {
        if (ea.acceptData(a)) {
            var e, f, g = ea.expando, h = a.nodeType, i = h ? ea.cache : a, j = h ? a[g] : a[g] && g;
            if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b)
                return j || (j = h ? a[g] = W.pop() || ea.guid++ : g),
                i[j] || (i[j] = h ? {} : {
                    toJSON: ea.noop
                }),
                ("object" == typeof b || "function" == typeof b) && (d ? i[j] = ea.extend(i[j], b) : i[j].data = ea.extend(i[j].data, b)),
                f = i[j],
                d || (f.data || (f.data = {}),
                f = f.data),
                void 0 !== c && (f[ea.camelCase(b)] = c),
                "string" == typeof b ? (e = f[b],
                null == e && (e = f[ea.camelCase(b)])) : e = f,
                e
        }
    }
    function l(a, b, c) {
        if (ea.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? ea.cache : a, h = f ? a[ea.expando] : ea.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    ea.isArray(b) ? b = b.concat(ea.map(b, ea.camelCase)) : b in d ? b = [b] : (b = ea.camelCase(b),
                    b = b in d ? [b] : b.split(" ")),
                    e = b.length;
                    for (; e--; )
                        delete d[b[e]];
                    if (c ? !j(d) : !ea.isEmptyObject(d))
                        return
                }
                (c || (delete g[h].data,
                j(g[h]))) && (f ? ea.cleanData([a], !0) : ca.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    function m() {
        return !0
    }
    function n() {
        return !1
    }
    function o() {
        try {
            return oa.activeElement
        } catch (a) {}
    }
    function p(a) {
        var b = Ka.split("|")
          , c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length; )
                c.createElement(b.pop());
        return c
    }
    function q(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== xa ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== xa ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [],
            c = a.childNodes || a; null != (d = c[e]); e++)
                !b || ea.nodeName(d, b) ? f.push(d) : ea.merge(f, q(d, b));
        return void 0 === b || b && ea.nodeName(a, b) ? ea.merge([a], f) : f
    }
    function r(a) {
        Ea.test(a.type) && (a.defaultChecked = a.checked)
    }
    function s(a, b) {
        return ea.nodeName(a, "table") && ea.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function t(a) {
        return a.type = (null !== ea.find.attr(a, "type")) + "/" + a.type,
        a
    }
    function u(a) {
        var b = Va.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function v(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            ea._data(c, "globalEval", !b || ea._data(b[d], "globalEval"))
    }
    function w(a, b) {
        if (1 === b.nodeType && ea.hasData(a)) {
            var c, d, e, f = ea._data(a), g = ea._data(b, f), h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h)
                    for (d = 0,
                    e = h[c].length; e > d; d++)
                        ea.event.add(b, c, h[c][d])
            }
            g.data && (g.data = ea.extend({}, g.data))
        }
    }
    function x(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(),
            !ca.noCloneEvent && b[ea.expando]) {
                e = ea._data(b);
                for (d in e.events)
                    ea.removeEvent(b, d, e.handle);
                b.removeAttribute(ea.expando)
            }
            "script" === c && b.text !== a.text ? (t(b).text = a.text,
            u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
            ca.html5Clone && a.innerHTML && !ea.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Ea.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    function y(b, c) {
        var d, e = ea(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : ea.css(e[0], "display");
        return e.detach(),
        f
    }
    function z(a) {
        var b = oa
          , c = _a[a];
        return c || (c = y(a, b),
        "none" !== c && c || ($a = ($a || ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = ($a[0].contentWindow || $a[0].contentDocument).document,
        b.write(),
        b.close(),
        c = y(a, b),
        $a.detach()),
        _a[a] = c),
        c
    }
    function A(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c)
                    return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    function B(a, b) {
        if (b in a)
            return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = mb.length; e--; )
            if (b = mb[e] + c,
            b in a)
                return b;
        return d
    }
    function C(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = ea._data(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && Ca(d) && (f[g] = ea._data(d, "olddisplay", z(d.nodeName)))) : (e = Ca(d),
            (c && "none" !== c || !e) && ea._data(d, "olddisplay", e ? c : ea.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function D(a, b, c) {
        var d = ib.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function E(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += ea.css(a, c + Ba[f], !0, e)),
            d ? ("content" === c && (g -= ea.css(a, "padding" + Ba[f], !0, e)),
            "margin" !== c && (g -= ea.css(a, "border" + Ba[f] + "Width", !0, e))) : (g += ea.css(a, "padding" + Ba[f], !0, e),
            "padding" !== c && (g += ea.css(a, "border" + Ba[f] + "Width", !0, e)));
        return g
    }
    function F(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = ab(a)
          , g = ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = bb(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            db.test(e))
                return e;
            d = g && (ca.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function G(a, b, c, d, e) {
        return new G.prototype.init(a,b,c,d,e)
    }
    function H() {
        return setTimeout(function() {
            nb = void 0
        }),
        nb = ea.now()
    }
    function I(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = Ba[e],
            d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function J(a, b, c) {
        for (var d, e = (tb[b] || []).concat(tb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function K(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && Ca(a), p = ea._data(a, "fxshow");
        c.queue || (h = ea._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        l.always(function() {
            l.always(function() {
                h.unqueued--,
                ea.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY],
        j = ea.css(a, "display"),
        k = "none" === j ? ea._data(a, "olddisplay") || z(a.nodeName) : j,
        "inline" === k && "none" === ea.css(a, "float") && (ca.inlineBlockNeedsLayout && "inline" !== z(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")),
        c.overflow && (n.overflow = "hidden",
        ca.shrinkWrapBlocks() || l.always(function() {
            n.overflow = c.overflow[0],
            n.overflowX = c.overflow[1],
            n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            pb.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d])
                        continue;
                    o = !0
                }
                m[d] = p && p[d] || ea.style(a, d)
            } else
                j = void 0;
        if (ea.isEmptyObject(m))
            "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden"in p && (o = p.hidden) : p = ea._data(a, "fxshow", {}),
            f && (p.hidden = !o),
            o ? ea(a).show() : l.done(function() {
                ea(a).hide()
            }),
            l.done(function() {
                var b;
                ea._removeData(a, "fxshow");
                for (b in m)
                    ea.style(a, b, m[b])
            });
            for (d in m)
                g = J(o ? p[d] : 0, d, l),
                d in p || (p[d] = g.start,
                o && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function L(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = ea.camelCase(c),
            e = b[d],
            f = a[c],
            ea.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = ea.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function M(a, b, c) {
        var d, e, f = 0, g = sb.length, h = ea.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = nb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: ea.extend({}, b),
            opts: ea.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: nb || H(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = ea.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (L(k, j.opts.specialEasing); g > f; f++)
            if (d = sb[f].call(j, a, k, j.opts))
                return d;
        return ea.map(k, J, j),
        ea.isFunction(j.opts.start) && j.opts.start.call(a, j),
        ea.fx.timer(ea.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function N(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(ta) || [];
            if (ea.isFunction(c))
                for (; d = f[e++]; )
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function O(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0,
            ea.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                e(j),
                !1)
            }),
            i
        }
        var f = {}
          , g = a === Rb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }
    function P(a, b) {
        var c, d, e = ea.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && ea.extend(!0, a, c),
        a
    }
    function Q(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
            i.shift(),
            void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function R(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; )
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a.throws)
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    function S(a, b, c, d) {
        var e;
        if (ea.isArray(b))
            ea.each(b, function(b, e) {
                c || Vb.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== ea.type(b))
            d(a, b);
        else
            for (e in b)
                S(a + "[" + e + "]", b[e], c, d)
    }
    function T() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function U() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    function V(a) {
        return ea.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
    }
    var W = []
      , X = W.slice
      , Y = W.concat
      , Z = W.push
      , $ = W.indexOf
      , _ = {}
      , aa = _.toString
      , ba = _.hasOwnProperty
      , ca = {}
      , da = "1.11.3"
      , ea = function(a, b) {
        return new ea.fn.init(a,b)
    }
      , fa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , ga = /^-ms-/
      , ha = /-([\da-z])/gi
      , ia = function(a, b) {
        return b.toUpperCase()
    };
    ea.fn = ea.prototype = {
        jquery: da,
        constructor: ea,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
        },
        pushStack: function(a) {
            var b = ea.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a, b) {
            return ea.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(ea.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Z,
        sort: W.sort,
        splice: W.splice
    },
    ea.extend = ea.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || ea.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e)
                    a = g[d],
                    c = e[d],
                    g !== c && (j && c && (ea.isPlainObject(c) || (b = ea.isArray(c))) ? (b ? (b = !1,
                    f = a && ea.isArray(a) ? a : []) : f = a && ea.isPlainObject(a) ? a : {},
                    g[d] = ea.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }
    ,
    ea.extend({
        expando: "jQuery" + (da + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === ea.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === ea.type(a)
        }
        ,
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !ea.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== ea.type(a) || a.nodeType || ea.isWindow(a))
                return !1;
            try {
                if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            if (ca.ownLast)
                for (b in a)
                    return ba.call(a, b);
            for (b in a)
                ;
            return void 0 === b || ba.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && ea.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            }
            )(b)
        },
        camelCase: function(a) {
            return a.replace(ga, "ms-").replace(ha, ia)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d),
                    e !== !1); f++)
                        ;
                else
                    for (f in a)
                        if (e = b.apply(a[f], d),
                        e === !1)
                            break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]),
                e !== !1); f++)
                    ;
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]),
                    e === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(fa, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? ea.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)),
            d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if ($)
                    return $.call(b, a, c);
                for (d = b.length,
                c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; )
                a[e++] = b[d++];
            if (c !== c)
                for (; void 0 !== b[d]; )
                    a[e++] = b[d++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h)
                for (; g > f; f++)
                    e = b(a[f], f, d),
                    null != e && i.push(e);
            else
                for (f in a)
                    e = b(a[f], f, d),
                    null != e && i.push(e);
            return Y.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (e = a[b],
            b = a,
            a = e),
            ea.isFunction(a) ? (c = X.call(arguments, 2),
            d = function() {
                return a.apply(b || this, c.concat(X.call(arguments)))
            }
            ,
            d.guid = a.guid = a.guid || ea.guid++,
            d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ca
    }),
    ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        _["[object " + b + "]"] = b.toLowerCase()
    });
    var ja = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b),
            b = b || G,
            c = c || [],
            h = b.nodeType,
            "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h)
                return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a)))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g),
                            !f || !f.parentNode)
                                return c;
                            if (f.id === g)
                                return c.push(f),
                                c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)
                            return c.push(f),
                            c
                    } else {
                        if (e[2])
                            return $.apply(c, b.getElementsByTagName(a)),
                            c;
                        if ((g = e[3]) && v.getElementsByClassName)
                            return $.apply(c, b.getElementsByClassName(g)),
                            c
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N,
                    o = b,
                    p = 1 !== h && a,
                    1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a),
                        (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n),
                        n = "[id='" + n + "'] ",
                        i = j.length; i--; )
                            j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b,
                        p = j.join(",")
                    }
                    if (p)
                        try {
                            return $.apply(c, o.querySelectorAll(p)),
                            c
                        } catch (q) {} finally {
                            l || b.removeAttribute("id")
                        }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d)
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()],
                a[c + " "] = d
            }
            var b = [];
            return a
        }
        function d(a) {
            return a[N] = !0,
            a
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--; )
                w.attrHandle[c[d]] = b
        }
        function g(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d)
                return d;
            if (c)
                for (; c = c.nextSibling; )
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function j(a) {
            return d(function(b) {
                return b = +b,
                d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; )
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        function l() {}
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function n(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d]; )
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d]; )
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    for (; b = b[d]; )
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}),
                            (h = i[d]) && h[0] === P && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j,
                            j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; )
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++)
                b(a, c[e], d);
            return d
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                j && b.push(h));
            return g
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)),
            f && !f[N] && (f = r(f, g)),
            d(function(d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i),
                e)
                    for (j = q(t, n),
                    e(j, [], h, i),
                    k = j.length; k--; )
                        (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [],
                            k = t.length; k--; )
                                (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--; )
                            (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else
                    t = q(t === g ? t.splice(o, t.length) : t),
                    f ? f(null, g, t, i) : $.apply(g, t)
            })
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b
            }, g, !0), j = n(function(a) {
                return aa(b, a) > -1
            }, g, !0), k = [function(a, c, d) {
                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null,
                e
            }
            ]; e > h; h++)
                if (c = w.relative[a[h].type])
                    k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches),
                    c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++)
                            ;
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }
        function t(a, c) {
            var e = c.length > 0
              , f = a.length > 0
              , g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++]; )
                            if (m(k, g, h)) {
                                i.push(k);
                                break
                            }
                        j && (P = u)
                    }
                    e && ((k = !m && k) && n--,
                    d && p.push(k))
                }
                if (n += o,
                e && o !== n) {
                    for (l = 0; m = c[l++]; )
                        m(p, r, g, h);
                    if (d) {
                        if (n > 0)
                            for (; o--; )
                                p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r)
                    }
                    $.apply(i, r),
                    j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (P = u,
                C = s),
                p
            };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date, O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
            return a === b && (E = !0),
            0
        }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, aa = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ea = da.replace("w", "w#"), fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]", ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)", ha = new RegExp(ca + "+","g"), ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$","g"), ja = new RegExp("^" + ca + "*," + ca + "*"), ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"), la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]","g"), ma = new RegExp(ga), na = new RegExp("^" + ea + "$"), oa = {
            ID: new RegExp("^#(" + da + ")"),
            CLASS: new RegExp("^\\.(" + da + ")"),
            TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + fa),
            PSEUDO: new RegExp("^" + ga),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)","i"),
            bool: new RegExp("^(?:" + ba + ")$","i"),
            needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)","i")
        }, pa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i, ra = /^[^{]+\{\s*\[native \w/, sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ta = /[+~]/, ua = /'|\\/g, va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)","ig"), wa = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, xa = function() {
            F()
        };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes),
            X[O.childNodes.length].nodeType
        } catch (ya) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b))
                }
                : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; )
                        ;
                    a.length = c - 1
                }
            }
        }
        v = b.support = {},
        y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }
        ,
        F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d,
            H = d.documentElement,
            c = d.defaultView,
            c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)),
            I = !y(d),
            v.attributes = e(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            v.getElementsByClassName = ra.test(d.getElementsByClassName),
            v.getById = e(function(a) {
                return H.appendChild(a).id = N,
                !d.getElementsByName || !d.getElementsByName(N).length
            }),
            v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }
            ,
            w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete w.find.ID,
            w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++]; )
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return I ? b.getElementsByClassName(a) : void 0
            }
            ,
            K = [],
            J = [],
            (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"),
                a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="),
                a.querySelectorAll(":checked").length || J.push(":checked"),
                a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }),
            e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                J.push(",.*:")
            })),
            (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"),
                L.call(a, "[s!='']:x"),
                K.push("!=", ga)
            }),
            J = J.length && new RegExp(J.join("|")),
            K = K.length && new RegExp(K.join("|")),
            b = ra.test(H.compareDocumentPosition),
            M = b || ra.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    for (; b = b.parentNode; )
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            U = b ? function(a, b) {
                if (a === b)
                    return E = !0,
                    0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return E = !0,
                    0;
                var c, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                if (!f || !h)
                    return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (f === h)
                    return g(a, b);
                for (c = a; c = c.parentNode; )
                    i.unshift(c);
                for (c = b; c = c.parentNode; )
                    j.unshift(c);
                for (; i[e] === j[e]; )
                    e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }
            ,
            d) : G
        }
        ,
        b.matches = function(a, c) {
            return b(a, null, null, c)
        }
        ,
        b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a),
            c = c.replace(la, "='$1']"),
            !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c)))
                try {
                    var d = L.call(a, c);
                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }
        ,
        b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a),
            M(a, b)
        }
        ,
        b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()]
              , d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }
        ,
        b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates,
            D = !v.sortStable && a.slice(0),
            a.sort(U),
            E) {
                for (; b = a[e++]; )
                    b === a[e] && (d = c.push(e));
                for (; d--; )
                    a.splice(c[d], 1)
            }
            return D = null,
            a
        }
        ,
        x = b.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += x(a)
                } else if (3 === e || 4 === e)
                    return a.nodeValue
            } else
                for (; b = a[d++]; )
                    c += x(b);
            return c
        }
        ,
        w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(va, wa),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : !c || (f += "",
                        "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p; ) {
                                    for (l = b; l = l[p]; )
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                for (k = q[N] || (q[N] = {}),
                                j = k[a] || [],
                                n = j[0] === P && j[1],
                                m = j[0] === P && j[2],
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); )
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)
                                m = j[1];
                            else
                                for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]),
                                l !== b)); )
                                    ;
                            return m -= e,
                            m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c],
                    w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; )
                            d = aa(a, e[g]),
                            a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }
                    ) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = []
                      , c = []
                      , e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--; )
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a,
                        e(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return a = a.replace(va, wa),
                    function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    }
                }),
                lang: d(function(a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a),
                    a = a.replace(va, wa).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !w.pseudos.empty(a)
                },
                header: function(a) {
                    return qa.test(a.nodeName)
                },
                input: function(a) {
                    return pa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        })
            w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos,
        w.setFilters = new l,
        z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k)
                return c ? 0 : k.slice(0);
            for (h = a,
            i = [],
            j = w.preFilter; h; ) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                d = !1,
                (e = ka.exec(h)) && (d = e.shift(),
                f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }),
                h = h.slice(d.length));
                for (g in w.filter)
                    !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(),
                    f.push({
                        value: d,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(d.length));
                if (!d)
                    break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }
        ,
        A = b.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)),
                c = b.length; c--; )
                    f = s(b[c]),
                    f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [],
            1 === l.length) {
                if (f = l[0] = l[0].slice(0),
                f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0],
                    !b)
                        return c;
                    j && (b = b.parentNode),
                    a = a.slice(f.shift().value.length)
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e],
                !w.relative[h = g.type]); )
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1),
                        a = d.length && m(f),
                        !a)
                            return $.apply(c, d),
                            c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b),
            c
        }
        ,
        v.sortStable = N.split("").sort(U).join("") === N,
        v.detectDuplicates = !!E,
        F(),
        v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }),
        e(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        v.attributes && e(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        b
    }(a);
    ea.find = ja,
    ea.expr = ja.selectors,
    ea.expr[":"] = ea.expr.pseudos,
    ea.unique = ja.uniqueSort,
    ea.text = ja.getText,
    ea.isXMLDoc = ja.isXML,
    ea.contains = ja.contains;
    var ka = ea.expr.match.needsContext
      , la = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , ma = /^.[^:#\[\.,]*$/;
    ea.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? ea.find.matchesSelector(d, a) ? [d] : [] : ea.find.matches(a, ea.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    ea.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)
                return this.pushStack(ea(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (ea.contains(d[b], this))
                            return !0
                }));
            for (b = 0; e > b; b++)
                ea.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? ea.unique(c) : c),
            c.selector = this.selector ? this.selector + " " + a : a,
            c
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && ka.test(a) ? ea(a) : a || [], !1).length
        }
    });
    var na, oa = a.document, pa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, qa = ea.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : pa.exec(a),
            !c || !c[1] && b)
                return !b || b.jquery ? (b || na).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof ea ? b[0] : b,
                ea.merge(this, ea.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : oa, !0)),
                la.test(c[1]) && ea.isPlainObject(b))
                    for (c in b)
                        ea.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (d = oa.getElementById(c[2]),
            d && d.parentNode) {
                if (d.id !== c[2])
                    return na.find(a);
                this.length = 1,
                this[0] = d
            }
            return this.context = oa,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : ea.isFunction(a) ? "undefined" != typeof na.ready ? na.ready(a) : a(ea) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        ea.makeArray(a, this))
    }
    ;
    qa.prototype = ea.fn,
    na = ea(oa);
    var ra = /^(?:parents|prev(?:Until|All))/
      , sa = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ea.extend({
        dir: function(a, b, c) {
            for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !ea(e).is(c)); )
                1 === e.nodeType && d.push(e),
                e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
    ea.fn.extend({
        has: function(a) {
            var b, c = ea(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (ea.contains(this, c[b]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = ka.test(a) || "string" != typeof a ? ea(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ea.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? ea.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? ea.inArray(this[0], ea(a)) : ea.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(ea.unique(ea.merge(this.get(), ea(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }),
    ea.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return ea.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return ea.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return ea.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return ea.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return ea.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return ea.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return ea.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return ea.sibling(a.firstChild)
        },
        contents: function(a) {
            return ea.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ea.merge([], a.childNodes)
        }
    }, function(a, b) {
        ea.fn[a] = function(c, d) {
            var e = ea.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = ea.filter(d, e)),
            this.length > 1 && (sa[a] || (e = ea.unique(e)),
            ra.test(a) && (e = e.reverse())),
            this.pushStack(e)
        }
    });
    var ta = /\S+/g
      , ua = {};
    ea.Callbacks = function(a) {
        a = "string" == typeof a ? ua[a] || f(a) : ea.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
            for (c = a.memory && f,
            d = !0,
            g = h || 0,
            h = 0,
            e = i.length,
            b = !0; i && e > g; g++)
                if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
            b = !1,
            i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
        }, l = {
            add: function() {
                if (i) {
                    var d = i.length;
                    !function b(c) {
                        ea.each(c, function(c, d) {
                            var e = ea.type(d);
                            "function" === e ? a.unique && l.has(d) || i.push(d) : d && d.length && "string" !== e && b(d)
                        })
                    }(arguments),
                    b ? e = i.length : c && (h = d,
                    k(c))
                }
                return this
            },
            remove: function() {
                return i && ea.each(arguments, function(a, c) {
                    for (var d; (d = ea.inArray(c, i, d)) > -1; )
                        i.splice(d, 1),
                        b && (e >= d && e--,
                        g >= d && g--)
                }),
                this
            },
            has: function(a) {
                return a ? ea.inArray(a, i) > -1 : !(!i || !i.length)
            },
            empty: function() {
                return i = [],
                e = 0,
                this
            },
            disable: function() {
                return i = j = c = void 0,
                this
            },
            disabled: function() {
                return !i
            },
            lock: function() {
                return j = void 0,
                c || l.disable(),
                this
            },
            locked: function() {
                return !j
            },
            fireWith: function(a, c) {
                return !i || d && !j || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                b ? j.push(c) : k(c)),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return l
    }
    ,
    ea.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", ea.Callbacks("once memory"), "resolved"], ["reject", "fail", ea.Callbacks("once memory"), "rejected"], ["notify", "progress", ea.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return ea.Deferred(function(c) {
                        ea.each(b, function(b, f) {
                            var g = ea.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && ea.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? ea.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            ea.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b, c, d, e = 0, f = X.call(arguments), g = f.length, h = 1 !== g || a && ea.isFunction(a.promise) ? g : 0, i = 1 === h ? a : ea.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this,
                    d[a] = arguments.length > 1 ? X.call(arguments) : e,
                    d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                }
            };
            if (g > 1)
                for (b = new Array(g),
                c = new Array(g),
                d = new Array(g); g > e; e++)
                    f[e] && ea.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f),
            i.promise()
        }
    });
    var va;
    ea.fn.ready = function(a) {
        return ea.ready.promise().done(a),
        this
    }
    ,
    ea.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? ea.readyWait++ : ea.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--ea.readyWait : !ea.isReady) {
                if (!oa.body)
                    return setTimeout(ea.ready);
                ea.isReady = !0,
                a !== !0 && --ea.readyWait > 0 || (va.resolveWith(oa, [ea]),
                ea.fn.triggerHandler && (ea(oa).triggerHandler("ready"),
                ea(oa).off("ready")))
            }
        }
    }),
    ea.ready.promise = function(b) {
        if (!va)
            if (va = ea.Deferred(),
            "complete" === oa.readyState)
                setTimeout(ea.ready);
            else if (oa.addEventListener)
                oa.addEventListener("DOMContentLoaded", h, !1),
                a.addEventListener("load", h, !1);
            else {
                oa.attachEvent("onreadystatechange", h),
                a.attachEvent("onload", h);
                var c = !1;
                try {
                    c = null == a.frameElement && oa.documentElement
                } catch (d) {}
                c && c.doScroll && !function a() {
                    if (!ea.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (b) {
                            return setTimeout(a, 50)
                        }
                        g(),
                        ea.ready()
                    }
                }()
            }
        return va.promise(b)
    }
    ;
    var wa, xa = "undefined";
    for (wa in ea(ca))
        break;
    ca.ownLast = "0" !== wa,
    ca.inlineBlockNeedsLayout = !1,
    ea(function() {
        var a, b, c, d;
        c = oa.getElementsByTagName("body")[0],
        c && c.style && (b = oa.createElement("div"),
        d = oa.createElement("div"),
        d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        c.appendChild(d).appendChild(b),
        typeof b.style.zoom !== xa && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        ca.inlineBlockNeedsLayout = a = 3 === b.offsetWidth,
        a && (c.style.zoom = 1)),
        c.removeChild(d))
    }),
    function() {
        var a = oa.createElement("div");
        if (null == ca.deleteExpando) {
            ca.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                ca.deleteExpando = !1
            }
        }
        a = null
    }(),
    ea.acceptData = function(a) {
        var b = ea.noData[(a.nodeName + " ").toLowerCase()]
          , c = +a.nodeType || 1;
        return (1 === c || 9 === c) && (!b || b !== !0 && a.getAttribute("classid") === b)
    }
    ;
    var ya = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , za = /([A-Z])/g;
    ea.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? ea.cache[a[ea.expando]] : a[ea.expando],
            !!a && !j(a)
        },
        data: function(a, b, c) {
            return k(a, b, c)
        },
        removeData: function(a, b) {
            return l(a, b)
        },
        _data: function(a, b, c) {
            return k(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return l(a, b, !0)
        }
    }),
    ea.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = ea.data(f),
                1 === f.nodeType && !ea._data(f, "parsedAttrs"))) {
                    for (c = g.length; c--; )
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = ea.camelCase(d.slice(5)),
                        i(f, d, e[d])));
                    ea._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                ea.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                ea.data(this, a, b)
            }) : f ? i(f, a, ea.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                ea.removeData(this, a)
            })
        }
    }),
    ea.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = ea._data(a, b),
            c && (!d || ea.isArray(c) ? d = ea._data(a, b, ea.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = ea.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = ea._queueHooks(a, b)
              , g = function() {
                ea.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return ea._data(a, c) || ea._data(a, c, {
                empty: ea.Callbacks("once memory").add(function() {
                    ea._removeData(a, b + "queue"),
                    ea._removeData(a, c)
                })
            })
        }
    }),
    ea.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? ea.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = ea.queue(this, a, b);
                ea._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && ea.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                ea.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = ea.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            for ("string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx"; g--; )
                c = ea._data(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var Aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Ba = ["Top", "Right", "Bottom", "Left"]
      , Ca = function(a, b) {
        return a = b || a,
        "none" === ea.css(a, "display") || !ea.contains(a.ownerDocument, a)
    }
      , Da = ea.access = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === ea.type(c)) {
            e = !0;
            for (h in c)
                ea.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        ea.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(ea(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , Ea = /^(?:checkbox|radio)$/i;
    !function() {
        var a = oa.createElement("input")
          , b = oa.createElement("div")
          , c = oa.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        ca.leadingWhitespace = 3 === b.firstChild.nodeType,
        ca.tbody = !b.getElementsByTagName("tbody").length,
        ca.htmlSerialize = !!b.getElementsByTagName("link").length,
        ca.html5Clone = "<:nav></:nav>" !== oa.createElement("nav").cloneNode(!0).outerHTML,
        a.type = "checkbox",
        a.checked = !0,
        c.appendChild(a),
        ca.appendChecked = a.checked,
        b.innerHTML = "<textarea>x</textarea>",
        ca.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue,
        c.appendChild(b),
        b.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        ca.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        ca.noCloneEvent = !0,
        b.attachEvent && (b.attachEvent("onclick", function() {
            ca.noCloneEvent = !1
        }),
        b.cloneNode(!0).click()),
        null == ca.deleteExpando) {
            ca.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                ca.deleteExpando = !1
            }
        }
    }(),
    function() {
        var b, c, d = oa.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            c = "on" + b,
            (ca[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"),
            ca[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var Fa = /^(?:input|select|textarea)$/i
      , Ga = /^key/
      , Ha = /^(?:mouse|pointer|contextmenu)|click/
      , Ia = /^(?:focusinfocus|focusoutblur)$/
      , Ja = /^([^.]*)(?:\.(.+)|)$/;
    ea.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ea._data(a);
            if (q) {
                for (c.handler && (i = c,
                c = i.handler,
                e = i.selector),
                c.guid || (c.guid = ea.guid++),
                (g = q.events) || (g = q.events = {}),
                (k = q.handle) || (k = q.handle = function(a) {
                    return typeof ea === xa || a && ea.event.triggered === a.type ? void 0 : ea.event.dispatch.apply(k.elem, arguments)
                }
                ,
                k.elem = a),
                b = (b || "").match(ta) || [""],
                h = b.length; h--; )
                    f = Ja.exec(b[h]) || [],
                    n = p = f[1],
                    o = (f[2] || "").split(".").sort(),
                    n && (j = ea.event.special[n] || {},
                    n = (e ? j.delegateType : j.bindType) || n,
                    j = ea.event.special[n] || {},
                    l = ea.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && ea.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, i),
                    (m = g[n]) || (m = g[n] = [],
                    m.delegateCount = 0,
                    j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))),
                    j.add && (j.add.call(a, l),
                    l.handler.guid || (l.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
                    ea.event.global[n] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ea.hasData(a) && ea._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(ta) || [""],
                j = b.length; j--; )
                    if (h = Ja.exec(b[j]) || [],
                    n = p = h[1],
                    o = (h[2] || "").split(".").sort(),
                    n) {
                        for (l = ea.event.special[n] || {},
                        n = (d ? l.delegateType : l.bindType) || n,
                        m = k[n] || [],
                        h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        i = f = m.length; f--; )
                            g = m[f],
                            !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1),
                            g.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ea.removeEvent(a, n, q.handle),
                        delete k[n])
                    } else
                        for (n in k)
                            ea.event.remove(a, n + b[j], c, d, !0);
                ea.isEmptyObject(k) && (delete q.handle,
                ea._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || oa], n = ba.call(b, "type") ? b.type : b, o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = k = d = d || oa,
            3 !== d.nodeType && 8 !== d.nodeType && !Ia.test(n + ea.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."),
            n = o.shift(),
            o.sort()),
            g = n.indexOf(":") < 0 && "on" + n,
            b = b[ea.expando] ? b : new ea.Event(n,"object" == typeof b && b),
            b.isTrigger = e ? 2 : 3,
            b.namespace = o.join("."),
            b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = d),
            c = null == c ? [b] : ea.makeArray(c, [b]),
            j = ea.event.special[n] || {},
            e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                if (!e && !j.noBubble && !ea.isWindow(d)) {
                    for (i = j.delegateType || n,
                    Ia.test(i + n) || (h = h.parentNode); h; h = h.parentNode)
                        m.push(h),
                        k = h;
                    k === (d.ownerDocument || oa) && m.push(k.defaultView || k.parentWindow || a)
                }
                for (l = 0; (h = m[l++]) && !b.isPropagationStopped(); )
                    b.type = l > 1 ? i : j.bindType || n,
                    f = (ea._data(h, "events") || {})[b.type] && ea._data(h, "handle"),
                    f && f.apply(h, c),
                    f = g && h[g],
                    f && f.apply && ea.acceptData(h) && (b.result = f.apply(h, c),
                    b.result === !1 && b.preventDefault());
                if (b.type = n,
                !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && ea.acceptData(d) && g && d[n] && !ea.isWindow(d)) {
                    k = d[g],
                    k && (d[g] = null),
                    ea.event.triggered = n;
                    try {
                        d[n]()
                    } catch (p) {}
                    ea.event.triggered = void 0,
                    k && (d[g] = k)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = ea.event.fix(a);
            var b, c, d, e, f, g = [], h = X.call(arguments), i = (ea._data(this, "events") || {})[a.type] || [], j = ea.event.special[a.type] || {};
            if (h[0] = a,
            a.delegateTarget = this,
            !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = ea.event.handlers.call(this, a, i),
                b = 0; (e = g[b++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = e.elem,
                    f = 0; (d = e.handlers[f++]) && !a.isImmediatePropagationStopped(); )
                        (!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d,
                        a.data = d.data,
                        c = ((ea.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h),
                        void 0 !== c && (a.result = c) === !1 && (a.preventDefault(),
                        a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [],
                        f = 0; h > f; f++)
                            d = b[f],
                            c = d.selector + " ",
                            void 0 === e[c] && (e[c] = d.needsContext ? ea(c, this).index(i) >= 0 : ea.find(c, this, null, [i]).length),
                            e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        fix: function(a) {
            if (a[ea.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ha.test(e) ? this.mouseHooks : Ga.test(e) ? this.keyHooks : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new ea.Event(f),
            b = d.length; b--; )
                c = d[b],
                a[c] = f[c];
            return a.target || (a.target = f.srcElement || oa),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || oa,
                e = d.documentElement,
                c = d.body,
                a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0),
                a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)),
                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== o() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === o() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ea.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return ea.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = ea.extend(new ea.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? ea.event.trigger(e, null, b) : ea.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    ea.removeEvent = oa.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
    : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === xa && (a[d] = null),
        a.detachEvent(d, c))
    }
    ,
    ea.Event = function(a, b) {
        return this instanceof ea.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? m : n) : this.type = a,
        b && ea.extend(this, b),
        this.timeStamp = a && a.timeStamp || ea.now(),
        void (this[ea.expando] = !0)) : new ea.Event(a,b)
    }
    ,
    ea.Event.prototype = {
        isDefaultPrevented: n,
        isPropagationStopped: n,
        isImmediatePropagationStopped: n,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = m,
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = m,
            a && (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = m,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    ea.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        ea.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !ea.contains(d, e)) && (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    ca.submitBubbles || (ea.event.special.submit = {
        setup: function() {
            return !ea.nodeName(this, "form") && void ea.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target
                  , c = ea.nodeName(b, "input") || ea.nodeName(b, "button") ? b.form : void 0;
                c && !ea._data(c, "submitBubbles") && (ea.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }),
                ea._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble,
            this.parentNode && !a.isTrigger && ea.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return !ea.nodeName(this, "form") && void ea.event.remove(this, "._submit")
        }
    }),
    ca.changeBubbles || (ea.event.special.change = {
        setup: function() {
            return Fa.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ea.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }),
            ea.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1),
                ea.event.simulate("change", this, a, !0)
            })),
            !1) : void ea.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Fa.test(b.nodeName) && !ea._data(b, "changeBubbles") && (ea.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || ea.event.simulate("change", this.parentNode, a, !0)
                }),
                ea._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return ea.event.remove(this, "._change"),
            !Fa.test(this.nodeName)
        }
    }),
    ca.focusinBubbles || ea.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            ea.event.simulate(b, a.target, ea.event.fix(a), !0)
        };
        ea.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = ea._data(d, b);
                e || d.addEventListener(a, c, !0),
                ea._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = ea._data(d, b) - 1;
                e ? ea._data(d, b, e) : (d.removeEventListener(a, c, !0),
                ea._removeData(d, b))
            }
        }
    }),
    ea.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b,
                b = void 0);
                for (f in a)
                    this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b,
            c = b = void 0) : null == d && ("string" == typeof b ? (d = c,
            c = void 0) : (d = c,
            c = b,
            b = void 0)),
            d === !1)
                d = n;
            else if (!d)
                return this;
            return 1 === e && (g = d,
            d = function(a) {
                return ea().off(a),
                g.apply(this, arguments)
            }
            ,
            d.guid = g.guid || (g.guid = ea.guid++)),
            this.each(function() {
                ea.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                ea(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b,
            b = void 0),
            c === !1 && (c = n),
            this.each(function() {
                ea.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                ea.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? ea.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Ka = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , La = / jQuery\d+="(?:null|\d+)"/g
      , Ma = new RegExp("<(?:" + Ka + ")[\\s/>]","i")
      , Na = /^\s+/
      , Oa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Pa = /<([\w:]+)/
      , Qa = /<tbody/i
      , Ra = /<|&#?\w+;/
      , Sa = /<(?:script|style|link)/i
      , Ta = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ua = /^$|\/(?:java|ecma)script/i
      , Va = /^true\/(.*)/
      , Wa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Xa = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ca.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , Ya = p(oa)
      , Za = Ya.appendChild(oa.createElement("div"));
    Xa.optgroup = Xa.option,
    Xa.tbody = Xa.tfoot = Xa.colgroup = Xa.caption = Xa.thead,
    Xa.th = Xa.td,
    ea.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = ea.contains(a.ownerDocument, a);
            if (ca.html5Clone || ea.isXMLDoc(a) || !Ma.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Za.innerHTML = a.outerHTML,
            Za.removeChild(f = Za.firstChild)),
            !(ca.noCloneEvent && ca.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ea.isXMLDoc(a)))
                for (d = q(f),
                h = q(a),
                g = 0; null != (e = h[g]); ++g)
                    d[g] && x(e, d[g]);
            if (b)
                if (c)
                    for (h = h || q(a),
                    d = d || q(f),
                    g = 0; null != (e = h[g]); g++)
                        w(e, d[g]);
                else
                    w(a, f);
            return d = q(f, "script"),
            d.length > 0 && v(d, !i && q(a, "script")),
            d = h = e = null,
            f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)
                if (f = a[o],
                f || 0 === f)
                    if ("object" === ea.type(f))
                        ea.merge(n, f.nodeType ? [f] : f);
                    else if (Ra.test(f)) {
                        for (h = h || m.appendChild(b.createElement("div")),
                        i = (Pa.exec(f) || ["", ""])[1].toLowerCase(),
                        k = Xa[i] || Xa._default,
                        h.innerHTML = k[1] + f.replace(Oa, "<$1></$2>") + k[2],
                        e = k[0]; e--; )
                            h = h.lastChild;
                        if (!ca.leadingWhitespace && Na.test(f) && n.push(b.createTextNode(Na.exec(f)[0])),
                        !ca.tbody)
                            for (f = "table" !== i || Qa.test(f) ? "<table>" !== k[1] || Qa.test(f) ? 0 : h : h.firstChild,
                            e = f && f.childNodes.length; e--; )
                                ea.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                        for (ea.merge(n, h.childNodes),
                        h.textContent = ""; h.firstChild; )
                            h.removeChild(h.firstChild);
                        h = m.lastChild
                    } else
                        n.push(b.createTextNode(f));
            for (h && m.removeChild(h),
            ca.appendChecked || ea.grep(q(n, "input"), r),
            o = 0; f = n[o++]; )
                if ((!d || -1 === ea.inArray(f, d)) && (g = ea.contains(f.ownerDocument, f),
                h = q(m.appendChild(f), "script"),
                g && v(h),
                c))
                    for (e = 0; f = h[e++]; )
                        Ua.test(f.type || "") && c.push(f);
            return h = null,
            m
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0, h = ea.expando, i = ea.cache, j = ca.deleteExpando, k = ea.event.special; null != (c = a[g]); g++)
                if ((b || ea.acceptData(c)) && (e = c[h],
                f = e && i[e])) {
                    if (f.events)
                        for (d in f.events)
                            k[d] ? ea.event.remove(c, d) : ea.removeEvent(c, d, f.handle);
                    i[e] && (delete i[e],
                    j ? delete c[h] : typeof c.removeAttribute !== xa ? c.removeAttribute(h) : c[h] = null,
                    W.push(e))
                }
        }
    }),
    ea.fn.extend({
        text: function(a) {
            return Da(this, function(a) {
                return void 0 === a ? ea.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oa).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = s(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = s(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? ea.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || ea.cleanData(q(c)),
                c.parentNode && (b && ea.contains(c.ownerDocument, c) && v(q(c, "script")),
                c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && ea.cleanData(q(a, !1)); a.firstChild; )
                    a.removeChild(a.firstChild);
                a.options && ea.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null != a && a,
            b = null == b ? a : b,
            this.map(function() {
                return ea.clone(this, a, b)
            })
        },
        html: function(a) {
            return Da(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(La, "") : void 0;
                if (!("string" != typeof a || Sa.test(a) || !ca.htmlSerialize && Ma.test(a) || !ca.leadingWhitespace && Na.test(a) || Xa[(Pa.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Oa, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (ea.cleanData(q(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode,
                ea.cleanData(q(this)),
                a && a.replaceChild(b, this)
            }),
            a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = Y.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], n = ea.isFunction(m);
            if (n || j > 1 && "string" == typeof m && !ca.checkClone && Ta.test(m))
                return this.each(function(c) {
                    var d = k.eq(c);
                    n && (a[0] = m.call(this, c, d.html())),
                    d.domManip(a, b)
                });
            if (j && (h = ea.buildFragment(a, this[0].ownerDocument, !1, this),
            c = h.firstChild,
            1 === h.childNodes.length && (h = c),
            c)) {
                for (f = ea.map(q(h, "script"), t),
                e = f.length; j > i; i++)
                    d = h,
                    i !== l && (d = ea.clone(d, !0, !0),
                    e && ea.merge(f, q(d, "script"))),
                    b.call(this[i], d, i);
                if (e)
                    for (g = f[f.length - 1].ownerDocument,
                    ea.map(f, u),
                    i = 0; e > i; i++)
                        d = f[i],
                        Ua.test(d.type || "") && !ea._data(d, "globalEval") && ea.contains(g, d) && (d.src ? ea._evalUrl && ea._evalUrl(d.src) : ea.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Wa, "")));
                h = c = null
            }
            return this
        }
    }),
    ea.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        ea.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = ea(a), g = f.length - 1; g >= d; d++)
                c = d === g ? this : this.clone(!0),
                ea(f[d])[b](c),
                Z.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var $a, _a = {};
    !function() {
        var a;
        ca.shrinkWrapBlocks = function() {
            if (null != a)
                return a;
            a = !1;
            var b, c, d;
            return c = oa.getElementsByTagName("body")[0],
            c && c.style ? (b = oa.createElement("div"),
            d = oa.createElement("div"),
            d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            c.appendChild(d).appendChild(b),
            typeof b.style.zoom !== xa && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            b.appendChild(oa.createElement("div")).style.width = "5px",
            a = 3 !== b.offsetWidth),
            c.removeChild(d),
            a) : void 0
        }
    }();
    var ab, bb, cb = /^margin/, db = new RegExp("^(" + Aa + ")(?!px)[a-z%]+$","i"), eb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (ab = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    }
    ,
    bb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || ab(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        c && ("" !== g || ea.contains(a.ownerDocument, a) || (g = ea.style(a, b)),
        db.test(g) && cb.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f)),
        void 0 === g ? g : g + ""
    }
    ) : oa.documentElement.currentStyle && (ab = function(a) {
        return a.currentStyle
    }
    ,
    bb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || ab(a),
        g = c ? c[b] : void 0,
        null == g && h && h[b] && (g = h[b]),
        db.test(g) && !eb.test(b) && (d = h.left,
        e = a.runtimeStyle,
        f = e && e.left,
        f && (e.left = a.currentStyle.left),
        h.left = "fontSize" === b ? "1em" : g,
        g = h.pixelLeft + "px",
        h.left = d,
        f && (e.left = f)),
        void 0 === g ? g : g + "" || "auto"
    }
    ),
    !function() {
        function b() {
            var b, c, d, e;
            c = oa.getElementsByTagName("body")[0],
            c && c.style && (b = oa.createElement("div"),
            d = oa.createElement("div"),
            d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            c.appendChild(d).appendChild(b),
            b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            f = g = !1,
            i = !0,
            a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(b, null) || {}).top,
            g = "4px" === (a.getComputedStyle(b, null) || {
                width: "4px"
            }).width,
            e = b.appendChild(oa.createElement("div")),
            e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            e.style.marginRight = e.style.width = "0",
            b.style.width = "1px",
            i = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight),
            b.removeChild(e)),
            b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            e = b.getElementsByTagName("td"),
            e[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            h = 0 === e[0].offsetHeight,
            h && (e[0].style.display = "",
            e[1].style.display = "none",
            h = 0 === e[0].offsetHeight),
            c.removeChild(d))
        }
        var c, d, e, f, g, h, i;
        c = oa.createElement("div"),
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        e = c.getElementsByTagName("a")[0],
        (d = e && e.style) && (d.cssText = "float:left;opacity:.5",
        ca.opacity = "0.5" === d.opacity,
        ca.cssFloat = !!d.cssFloat,
        c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        ca.clearCloneStyle = "content-box" === c.style.backgroundClip,
        ca.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing,
        ea.extend(ca, {
            reliableHiddenOffsets: function() {
                return null == h && b(),
                h
            },
            boxSizingReliable: function() {
                return null == g && b(),
                g
            },
            pixelPosition: function() {
                return null == f && b(),
                f
            },
            reliableMarginRight: function() {
                return null == i && b(),
                i
            }
        }))
    }(),
    ea.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
    ;
    var fb = /alpha\([^)]*\)/i
      , gb = /opacity\s*=\s*([^)]*)/
      , hb = /^(none|table(?!-c[ea]).+)/
      , ib = new RegExp("^(" + Aa + ")(.*)$","i")
      , jb = new RegExp("^([+-])=(" + Aa + ")","i")
      , kb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , lb = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , mb = ["Webkit", "O", "Moz", "ms"];
    ea.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = bb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: ca.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = ea.camelCase(b), i = a.style;
                if (b = ea.cssProps[h] || (ea.cssProps[h] = B(i, h)),
                g = ea.cssHooks[b] || ea.cssHooks[h],
                void 0 === c)
                    return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c,
                "string" === f && (e = jb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(ea.css(a, b)),
                f = "number"),
                null != c && c === c && ("number" !== f || ea.cssNumber[h] || (c += "px"),
                ca.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                !(g && "set"in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = c
                    } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = ea.camelCase(b);
            return b = ea.cssProps[h] || (ea.cssProps[h] = B(a.style, h)),
            g = ea.cssHooks[b] || ea.cssHooks[h],
            g && "get"in g && (f = g.get(a, !0, c)),
            void 0 === f && (f = bb(a, b, d)),
            "normal" === f && b in lb && (f = lb[b]),
            "" === c || c ? (e = parseFloat(f),
            c === !0 || ea.isNumeric(e) ? e || 0 : f) : f
        }
    }),
    ea.each(["height", "width"], function(a, b) {
        ea.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? hb.test(ea.css(a, "display")) && 0 === a.offsetWidth ? ea.swap(a, kb, function() {
                    return F(a, b, d)
                }) : F(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && ab(a);
                return D(a, c, d ? E(a, b, d, ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    ca.opacity || (ea.cssHooks.opacity = {
        get: function(a, b) {
            return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style
              , d = a.currentStyle
              , e = ea.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
              , f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === ea.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"),
            "" === b || d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
        }
    }),
    ea.cssHooks.marginRight = A(ca.reliableMarginRight, function(a, b) {
        return b ? ea.swap(a, {
            display: "inline-block"
        }, bb, [a, "marginRight"]) : void 0
    }),
    ea.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        ea.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + Ba[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        cb.test(a) || (ea.cssHooks[a + b].set = D)
    }),
    ea.fn.extend({
        css: function(a, b) {
            return Da(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (ea.isArray(b)) {
                    for (d = ab(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = ea.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? ea.style(a, b, c) : ea.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return C(this, !0)
        },
        hide: function() {
            return C(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Ca(this) ? ea(this).show() : ea(this).hide()
            })
        }
    }),
    ea.Tween = G,
    G.prototype = {
        constructor: G,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (ea.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = G.propHooks[this.prop];
            return a && a.get ? a.get(this) : G.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = G.propHooks[this.prop];
            return this.options.duration ? this.pos = b = ea.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : G.propHooks._default.set(this),
            this
        }
    },
    G.prototype.init.prototype = G.prototype,
    G.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ea.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                ea.fx.step[a.prop] ? ea.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ea.cssProps[a.prop]] || ea.cssHooks[a.prop]) ? ea.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    G.propHooks.scrollTop = G.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    ea.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    ea.fx = G.prototype.init,
    ea.fx.step = {};
    var nb, ob, pb = /^(?:toggle|show|hide)$/, qb = new RegExp("^(?:([+-])=|)(" + Aa + ")([a-z%]*)$","i"), rb = /queueHooks$/, sb = [K], tb = {
        "*": [function(a, b) {
            var c = this.createTween(a, b)
              , d = c.cur()
              , e = qb.exec(b)
              , f = e && e[3] || (ea.cssNumber[a] ? "" : "px")
              , g = (ea.cssNumber[a] || "px" !== f && +d) && qb.exec(ea.css(c.elem, a))
              , h = 1
              , i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do
                    h = h || ".5",
                    g /= h,
                    ea.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0,
            c.unit = f,
            c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }
        ]
    };
    ea.Animation = ea.extend(M, {
        tweener: function(a, b) {
            ea.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                tb[c] = tb[c] || [],
                tb[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? sb.unshift(a) : sb.push(a)
        }
    }),
    ea.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? ea.extend({}, a) : {
            complete: c || !c && b || ea.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !ea.isFunction(b) && b
        };
        return d.duration = ea.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ea.fx.speeds ? ea.fx.speeds[d.duration] : ea.fx.speeds._default,
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            ea.isFunction(d.old) && d.old.call(this),
            d.queue && ea.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    ea.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(Ca).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = ea.isEmptyObject(a)
              , f = ea.speed(b, c, d)
              , g = function() {
                var b = M(this, ea.extend({}, a), f);
                (e || ea._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = ea.timers
                  , g = ea._data(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && rb.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                (b || !c) && ea.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = ea._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = ea.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                ea.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    ea.each(["toggle", "show", "hide"], function(a, b) {
        var c = ea.fn[b];
        ea.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
        }
    }),
    ea.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        ea.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    ea.timers = [],
    ea.fx.tick = function() {
        var a, b = ea.timers, c = 0;
        for (nb = ea.now(); c < b.length; c++)
            a = b[c],
            a() || b[c] !== a || b.splice(c--, 1);
        b.length || ea.fx.stop(),
        nb = void 0
    }
    ,
    ea.fx.timer = function(a) {
        ea.timers.push(a),
        a() ? ea.fx.start() : ea.timers.pop()
    }
    ,
    ea.fx.interval = 13,
    ea.fx.start = function() {
        ob || (ob = setInterval(ea.fx.tick, ea.fx.interval))
    }
    ,
    ea.fx.stop = function() {
        clearInterval(ob),
        ob = null
    }
    ,
    ea.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ea.fn.delay = function(a, b) {
        return a = ea.fx ? ea.fx.speeds[a] || a : a,
        b = b || "fx",
        this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }
    ,
    function() {
        var a, b, c, d, e;
        b = oa.createElement("div"),
        b.setAttribute("className", "t"),
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        d = b.getElementsByTagName("a")[0],
        c = oa.createElement("select"),
        e = c.appendChild(oa.createElement("option")),
        a = b.getElementsByTagName("input")[0],
        d.style.cssText = "top:1px",
        ca.getSetAttribute = "t" !== b.className,
        ca.style = /top/.test(d.getAttribute("style")),
        ca.hrefNormalized = "/a" === d.getAttribute("href"),
        ca.checkOn = !!a.value,
        ca.optSelected = e.selected,
        ca.enctype = !!oa.createElement("form").enctype,
        c.disabled = !0,
        ca.optDisabled = !e.disabled,
        a = oa.createElement("input"),
        a.setAttribute("value", ""),
        ca.input = "" === a.getAttribute("value"),
        a.value = "t",
        a.setAttribute("type", "radio"),
        ca.radioValue = "t" === a.value
    }();
    var ub = /\r/g;
    ea.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = ea.isFunction(a),
            this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, ea(this).val()) : a,
                null == e ? e = "" : "number" == typeof e ? e += "" : ea.isArray(e) && (e = ea.map(e, function(a) {
                    return null == a ? "" : a + ""
                })),
                b = ea.valHooks[this.type] || ea.valHooks[this.nodeName.toLowerCase()],
                b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = ea.valHooks[e.type] || ea.valHooks[e.nodeName.toLowerCase()],
            b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
            "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c)) : void 0
        }
    }),
    ea.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = ea.find.attr(a, "value");
                    return null != b ? b : ea.trim(ea.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        !(!c.selected && i !== e || (ca.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ea.nodeName(c.parentNode, "optgroup"))) {
                            if (b = ea(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = ea.makeArray(b), g = e.length; g--; )
                        if (d = e[g],
                        ea.inArray(ea.valHooks.option.get(d), f) >= 0)
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        else
                            d.selected = !1;
                    return c || (a.selectedIndex = -1),
                    e
                }
            }
        }
    }),
    ea.each(["radio", "checkbox"], function() {
        ea.valHooks[this] = {
            set: function(a, b) {
                return ea.isArray(b) ? a.checked = ea.inArray(ea(a).val(), b) >= 0 : void 0
            }
        },
        ca.checkOn || (ea.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var vb, wb, xb = ea.expr.attrHandle, yb = /^(?:checked|selected)$/i, zb = ca.getSetAttribute, Ab = ca.input;
    ea.fn.extend({
        attr: function(a, b) {
            return Da(this, ea.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                ea.removeAttr(this, a)
            })
        }
    }),
    ea.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === xa ? ea.prop(a, b, c) : (1 === f && ea.isXMLDoc(a) || (b = b.toLowerCase(),
                d = ea.attrHooks[b] || (ea.expr.match.bool.test(b) ? wb : vb)),
                void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = ea.find.attr(a, b),
                null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                c) : void ea.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(ta);
            if (f && 1 === a.nodeType)
                for (; c = f[e++]; )
                    d = ea.propFix[c] || c,
                    ea.expr.match.bool.test(c) ? Ab && zb || !yb.test(c) ? a[d] = !1 : a[ea.camelCase("default-" + c)] = a[d] = !1 : ea.attr(a, c, ""),
                    a.removeAttribute(zb ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!ca.radioValue && "radio" === b && ea.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        }
    }),
    wb = {
        set: function(a, b, c) {
            return b === !1 ? ea.removeAttr(a, c) : Ab && zb || !yb.test(c) ? a.setAttribute(!zb && ea.propFix[c] || c, c) : a[ea.camelCase("default-" + c)] = a[c] = !0,
            c
        }
    },
    ea.each(ea.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = xb[b] || ea.find.attr;
        xb[b] = Ab && zb || !yb.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = xb[b],
            xb[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            xb[b] = f),
            e
        }
        : function(a, b, c) {
            return c ? void 0 : a[ea.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }),
    Ab && zb || (ea.attrHooks.value = {
        set: function(a, b, c) {
            return ea.nodeName(a, "input") ? void (a.defaultValue = b) : vb && vb.set(a, b, c)
        }
    }),
    zb || (vb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
            d.value = b += "",
            "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    },
    xb.id = xb.name = xb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }
    ,
    ea.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: vb.set
    },
    ea.attrHooks.contenteditable = {
        set: function(a, b, c) {
            vb.set(a, "" !== b && b, c)
        }
    },
    ea.each(["width", "height"], function(a, b) {
        ea.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"),
                c) : void 0
            }
        }
    })),
    ca.style || (ea.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var Bb = /^(?:input|select|textarea|button|object)$/i
      , Cb = /^(?:a|area)$/i;
    ea.fn.extend({
        prop: function(a, b) {
            return Da(this, ea.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = ea.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = void 0,
                    delete this[a]
                } catch (b) {}
            })
        }
    }),
    ea.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !ea.isXMLDoc(a),
                f && (b = ea.propFix[b] || b,
                e = ea.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = ea.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Bb.test(a.nodeName) || Cb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }),
    ca.hrefNormalized || ea.each(["href", "src"], function(a, b) {
        ea.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }),
    ca.optSelected || (ea.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
            null
        }
    }),
    ea.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ea.propFix[this.toLowerCase()] = this
    }),
    ca.enctype || (ea.propFix.enctype = "encoding");
    var Db = /[\t\r\n\f]/g;
    ea.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (ea.isFunction(a))
                return this.each(function(b) {
                    ea(this).addClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(ta) || []; i > h; h++)
                    if (c = this[h],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : " ")) {
                        for (f = 0; e = b[f++]; )
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = ea.trim(d),
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (ea.isFunction(a))
                return this.each(function(b) {
                    ea(this).removeClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(ta) || []; i > h; h++)
                    if (c = this[h],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : "")) {
                        for (f = 0; e = b[f++]; )
                            for (; d.indexOf(" " + e + " ") >= 0; )
                                d = d.replace(" " + e + " ", " ");
                        g = a ? ea.trim(d) : "",
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(ea.isFunction(a) ? function(c) {
                ea(this).toggleClass(a.call(this, c, this.className, b), b)
            }
            : function() {
                if ("string" === c)
                    for (var b, d = 0, e = ea(this), f = a.match(ta) || []; b = f[d++]; )
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else
                    (c === xa || "boolean" === c) && (this.className && ea._data(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : ea._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Db, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    }),
    ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        ea.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    ea.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Eb = ea.now()
      , Fb = /\?/
      , Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ea.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c, d = null, e = ea.trim(b + "");
        return e && !ea.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0),
            0 === d ? a : (c = e || b,
            d += !f - !e,
            "")
        })) ? Function("return " + e)() : ea.error("Invalid JSON: " + b)
    }
    ,
    ea.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b)
            return null;
        try {
            a.DOMParser ? (d = new DOMParser,
            c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"),
            c.async = "false",
            c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || ea.error("Invalid XML: " + b),
        c
    }
    ;
    var Hb, Ib, Jb = /#.*$/, Kb = /([?&])_=[^&]*/, Lb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nb = /^(?:GET|HEAD)$/, Ob = /^\/\//, Pb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Qb = {}, Rb = {}, Sb = "*/".concat("*");
    try {
        Ib = location.href
    } catch (Tb) {
        Ib = oa.createElement("a"),
        Ib.href = "",
        Ib = Ib.href
    }
    Hb = Pb.exec(Ib.toLowerCase()) || [],
    ea.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ib,
            type: "GET",
            isLocal: Mb.test(Hb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ea.parseJSON,
                "text xml": ea.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? P(P(a, ea.ajaxSettings), b) : P(ea.ajaxSettings, a)
        },
        ajaxPrefilter: N(Qb),
        ajaxTransport: N(Rb),
        ajax: function(a, b) {
            function c(a, b, c, d) {
                var e, k, r, s, u, w = b;
                2 !== t && (t = 2,
                h && clearTimeout(h),
                j = void 0,
                g = d || "",
                v.readyState = a > 0 ? 4 : 0,
                e = a >= 200 && 300 > a || 304 === a,
                c && (s = Q(l, v, c)),
                s = R(l, s, v, e),
                e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"),
                u && (ea.lastModified[f] = u),
                u = v.getResponseHeader("etag"),
                u && (ea.etag[f] = u)),
                204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state,
                k = s.data,
                r = s.error,
                e = !r)) : (r = w,
                (a || !w) && (w = "error",
                0 > a && (a = 0))),
                v.status = a,
                v.statusText = (b || w) + "",
                e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]),
                v.statusCode(q),
                q = void 0,
                i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]),
                p.fireWith(m, [v, w]),
                i && (n.trigger("ajaxComplete", [v, l]),
                --ea.active || ea.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a,
            a = void 0),
            b = b || {};
            var d, e, f, g, h, i, j, k, l = ea.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? ea(m) : ea.event, o = ea.Deferred(), p = ea.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!k)
                            for (k = {}; b = Lb.exec(g); )
                                k[b[1].toLowerCase()] = b[2];
                        b = k[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? g : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a,
                    r[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return t || (l.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return j && j.abort(b),
                    c(0, b),
                    this
                }
            };
            if (o.promise(v).complete = p.add,
            v.success = v.done,
            v.error = v.fail,
            l.url = ((a || l.url || Ib) + "").replace(Jb, "").replace(Ob, Hb[1] + "//"),
            l.type = b.method || b.type || l.method || l.type,
            l.dataTypes = ea.trim(l.dataType || "*").toLowerCase().match(ta) || [""],
            null == l.crossDomain && (d = Pb.exec(l.url.toLowerCase()),
            l.crossDomain = !(!d || d[1] === Hb[1] && d[2] === Hb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Hb[3] || ("http:" === Hb[1] ? "80" : "443")))),
            l.data && l.processData && "string" != typeof l.data && (l.data = ea.param(l.data, l.traditional)),
            O(Qb, l, b, v),
            2 === t)
                return v;
            i = ea.event && l.global,
            i && 0 === ea.active++ && ea.event.trigger("ajaxStart"),
            l.type = l.type.toUpperCase(),
            l.hasContent = !Nb.test(l.type),
            f = l.url,
            l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data,
            delete l.data),
            l.cache === !1 && (l.url = Kb.test(f) ? f.replace(Kb, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)),
            l.ifModified && (ea.lastModified[f] && v.setRequestHeader("If-Modified-Since", ea.lastModified[f]),
            ea.etag[f] && v.setRequestHeader("If-None-Match", ea.etag[f])),
            (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType),
            v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers)
                v.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            })
                v[e](l[e]);
            if (j = O(Rb, l, b, v)) {
                v.readyState = 1,
                i && n.trigger("ajaxSend", [v, l]),
                l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1,
                    j.send(r, c)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    c(-1, w)
                }
            } else
                c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return ea.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return ea.get(a, void 0, b, "script")
        }
    }),
    ea.each(["get", "post"], function(a, b) {
        ea[b] = function(a, c, d, e) {
            return ea.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            ea.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }),
    ea._evalUrl = function(a) {
        return ea.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    ea.fn.extend({
        wrapAll: function(a) {
            if (ea.isFunction(a))
                return this.each(function(b) {
                    ea(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = ea(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; )
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(ea.isFunction(a) ? function(b) {
                ea(this).wrapInner(a.call(this, b))
            }
            : function() {
                var b = ea(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            }
            )
        },
        wrap: function(a) {
            var b = ea.isFunction(a);
            return this.each(function(c) {
                ea(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ea.nodeName(this, "body") || ea(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    ea.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ca.reliableHiddenOffsets() && "none" === (a.style && a.style.display || ea.css(a, "display"))
    }
    ,
    ea.expr.filters.visible = function(a) {
        return !ea.expr.filters.hidden(a)
    }
    ;
    var Ub = /%20/g
      , Vb = /\[\]$/
      , Wb = /\r?\n/g
      , Xb = /^(?:submit|button|image|reset|file)$/i
      , Yb = /^(?:input|select|textarea|keygen)/i;
    ea.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = ea.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = ea.ajaxSettings && ea.ajaxSettings.traditional),
        ea.isArray(a) || a.jquery && !ea.isPlainObject(a))
            ea.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                S(c, a[c], b, e);
        return d.join("&").replace(Ub, "+")
    }
    ,
    ea.fn.extend({
        serialize: function() {
            return ea.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = ea.prop(this, "elements");
                return a ? ea.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !ea(this).is(":disabled") && Yb.test(this.nodeName) && !Xb.test(a) && (this.checked || !Ea.test(a))
            }).map(function(a, b) {
                var c = ea(this).val();
                return null == c ? null : ea.isArray(c) ? ea.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Wb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Wb, "\r\n")
                }
            }).get()
        }
    }),
    ea.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
    }
    : T;
    var Zb = 0
      , $b = {}
      , _b = ea.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in $b)
            $b[a](void 0, !0)
    }),
    ca.cors = !!_b && "withCredentials"in _b,
    _b = ca.ajax = !!_b,
    _b && ea.ajaxTransport(function(a) {
        if (!a.crossDomain || ca.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(), g = ++Zb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password),
                    a.xhrFields)
                        for (e in a.xhrFields)
                            f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null),
                    b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete $b[g],
                            b = void 0,
                            f.onreadystatechange = ea.noop,
                            e)
                                4 !== f.readyState && f.abort();
                            else {
                                j = {},
                                h = f.status,
                                "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }
                    ,
                    a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = $b[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    }),
    ea.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return ea.globalEval(a),
                a
            }
        }
    }),
    ea.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    }),
    ea.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = oa.head || ea("head")[0] || oa.documentElement;
            return {
                send: function(d, e) {
                    b = oa.createElement("script"),
                    b.async = !0,
                    a.scriptCharset && (b.charset = a.scriptCharset),
                    b.src = a.url,
                    b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null,
                        b.parentNode && b.parentNode.removeChild(b),
                        b = null,
                        c || e(200, "success"))
                    }
                    ,
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var ac = []
      , bc = /(=)\?(?=&|$)|\?\?/;
    ea.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = ac.pop() || ea.expando + "_" + Eb++;
            return this[a] = !0,
            a
        }
    }),
    ea.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (bc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = ea.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(bc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || ea.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            ac.push(e)),
            g && ea.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    ea.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || oa;
        var d = la.exec(a)
          , e = !c && [];
        return d ? [b.createElement(d[1])] : (d = ea.buildFragment([a], b, e),
        e && e.length && ea(e).remove(),
        ea.merge([], d.childNodes))
    }
    ;
    var cc = ea.fn.load;
    ea.fn.load = function(a, b, c) {
        if ("string" != typeof a && cc)
            return cc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = ea.trim(a.slice(h, a.length)),
        a = a.slice(0, h)),
        ea.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (f = "POST"),
        g.length > 0 && ea.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments,
            g.html(d ? ea("<div>").append(ea.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }
        ),
        this
    }
    ,
    ea.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        ea.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    ea.expr.filters.animated = function(a) {
        return ea.grep(ea.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    var dc = a.document.documentElement;
    ea.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = ea.css(a, "position"), l = ea(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = ea.css(a, "top"),
            i = ea.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && ea.inArray("auto", [f, i]) > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            ea.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
    ea.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    ea.offset.setOffset(this, a, b)
                });
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            return f ? (b = f.documentElement,
            ea.contains(b, e) ? (typeof e.getBoundingClientRect !== xa && (d = e.getBoundingClientRect()),
            c = V(f),
            {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === ea.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                ea.nodeName(a[0], "html") || (c = a.offset()),
                c.top += ea.css(a[0], "borderTopWidth", !0),
                c.left += ea.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - c.top - ea.css(d, "marginTop", !0),
                    left: b.left - c.left - ea.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || dc; a && !ea.nodeName(a, "html") && "static" === ea.css(a, "position"); )
                    a = a.offsetParent;
                return a || dc
            })
        }
    }),
    ea.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        ea.fn[a] = function(d) {
            return Da(this, function(a, d, e) {
                var f = V(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? ea(f).scrollLeft() : e, c ? e : ea(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }),
    ea.each(["top", "left"], function(a, b) {
        ea.cssHooks[b] = A(ca.pixelPosition, function(a, c) {
            return c ? (c = bb(a, b),
            db.test(c) ? ea(a).position()[b] + "px" : c) : void 0
        })
    }),
    ea.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        ea.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            ea.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Da(this, function(b, c, d) {
                    var e;
                    return ea.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? ea.css(b, c, g) : ea.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    ea.fn.size = function() {
        return this.length
    }
    ,
    ea.fn.andSelf = ea.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ea
    });
    var ec = a.jQuery
      , fc = a.$;
    return ea.noConflict = function(b) {
        return a.$ === ea && (a.$ = fc),
        b && a.jQuery === ea && (a.jQuery = ec),
        ea
    }
    ,
    typeof b === xa && (a.jQuery = a.$ = ea),
    ea
}),
!function(a) {
    "undefined" != typeof exports ? a(exports) : (window.hljs = a({}),
    "function" == typeof define && define.amd && define([], function() {
        return window.hljs
    }))
}(function(a) {
    function b(a) {
        return a.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }
    function c(a) {
        return a.nodeName.toLowerCase()
    }
    function d(a, b) {
        var c = a && a.exec(b);
        return c && 0 == c.index
    }
    function e(a) {
        var b = (a.className + " " + (a.parentNode ? a.parentNode.className : "")).split(/\s+/);
        return b = b.map(function(a) {
            return a.replace(/^lang(uage)?-/, "")
        }),
        b.filter(function(a) {
            return t(a) || /no(-?)highlight|plain|text/.test(a)
        })[0]
    }
    function f(a, b) {
        var c, d = {};
        for (c in a)
            d[c] = a[c];
        if (b)
            for (c in b)
                d[c] = b[c];
        return d
    }
    function g(a) {
        var b = [];
        return function a(d, e) {
            for (var f = d.firstChild; f; f = f.nextSibling)
                3 == f.nodeType ? e += f.nodeValue.length : 1 == f.nodeType && (b.push({
                    event: "start",
                    offset: e,
                    node: f
                }),
                e = a(f, e),
                c(f).match(/br|hr|img|input/) || b.push({
                    event: "stop",
                    offset: e,
                    node: f
                }));
            return e
        }(a, 0),
        b
    }
    function h(a, d, e) {
        function f() {
            return a.length && d.length ? a[0].offset != d[0].offset ? a[0].offset < d[0].offset ? a : d : "start" == d[0].event ? a : d : a.length ? a : d
        }
        function g(a) {
            function d(a) {
                return " " + a.nodeName + '="' + b(a.value) + '"'
            }
            k += "<" + c(a) + Array.prototype.map.call(a.attributes, d).join("") + ">"
        }
        function h(a) {
            k += "</" + c(a) + ">"
        }
        function i(a) {
            ("start" == a.event ? g : h)(a.node)
        }
        for (var j = 0, k = "", l = []; a.length || d.length; ) {
            var m = f();
            if (k += b(e.substr(j, m[0].offset - j)),
            j = m[0].offset,
            m == a) {
                l.reverse().forEach(h);
                do
                    i(m.splice(0, 1)[0]),
                    m = f();
                while (m == a && m.length && m[0].offset == j);l.reverse().forEach(g)
            } else
                "start" == m[0].event ? l.push(m[0].node) : l.pop(),
                i(m.splice(0, 1)[0])
        }
        return k + b(e.substr(j))
    }
    function i(a) {
        function b(a) {
            return a && a.source || a
        }
        function c(c, d) {
            return new RegExp(b(c),"m" + (a.cI ? "i" : "") + (d ? "g" : ""))
        }
        function d(e, g) {
            if (!e.compiled) {
                if (e.compiled = !0,
                e.k = e.k || e.bK,
                e.k) {
                    var h = {}
                      , i = function(b, c) {
                        a.cI && (c = c.toLowerCase()),
                        c.split(" ").forEach(function(a) {
                            var c = a.split("|");
                            h[c[0]] = [b, c[1] ? Number(c[1]) : 1]
                        })
                    };
                    "string" == typeof e.k ? i("keyword", e.k) : Object.keys(e.k).forEach(function(a) {
                        i(a, e.k[a])
                    }),
                    e.k = h
                }
                e.lR = c(e.l || /\b\w+\b/, !0),
                g && (e.bK && (e.b = "\\b(" + e.bK.split(" ").join("|") + ")\\b"),
                e.b || (e.b = /\B|\b/),
                e.bR = c(e.b),
                e.e || e.eW || (e.e = /\B|\b/),
                e.e && (e.eR = c(e.e)),
                e.tE = b(e.e) || "",
                e.eW && g.tE && (e.tE += (e.e ? "|" : "") + g.tE)),
                e.i && (e.iR = c(e.i)),
                void 0 === e.r && (e.r = 1),
                e.c || (e.c = []);
                var j = [];
                e.c.forEach(function(a) {
                    a.v ? a.v.forEach(function(b) {
                        j.push(f(a, b))
                    }) : j.push("self" == a ? e : a)
                }),
                e.c = j,
                e.c.forEach(function(a) {
                    d(a, e)
                }),
                e.starts && d(e.starts, g);
                var k = e.c.map(function(a) {
                    return a.bK ? "\\.?(" + a.b + ")\\.?" : a.b
                }).concat([e.tE, e.i]).map(b).filter(Boolean);
                e.t = k.length ? c(k.join("|"), !0) : {
                    exec: function() {
                        return null
                    }
                }
            }
        }
        d(a)
    }
    function j(a, c, e, f) {
        function g(a, b) {
            for (var c = 0; c < b.c.length; c++)
                if (d(b.c[c].bR, a))
                    return b.c[c]
        }
        function h(a, b) {
            if (d(a.eR, b)) {
                for (; a.endsParent && a.parent; )
                    a = a.parent;
                return a
            }
            return a.eW ? h(a.parent, b) : void 0
        }
        function l(a, b) {
            return !e && d(b.iR, a)
        }
        function m(a, b) {
            var c = w.cI ? b[0].toLowerCase() : b[0];
            return a.k.hasOwnProperty(c) && a.k[c]
        }
        function n(a, b, c, d) {
            var e = d ? "" : u.classPrefix
              , f = '<span class="' + e
              , g = c ? "" : "</span>";
            return f += a + '">',
            f + b + g
        }
        function o() {
            if (!y.k)
                return b(B);
            var a = ""
              , c = 0;
            y.lR.lastIndex = 0;
            for (var d = y.lR.exec(B); d; ) {
                a += b(B.substr(c, d.index - c));
                var e = m(y, d);
                e ? (C += e[1],
                a += n(e[0], b(d[0]))) : a += b(d[0]),
                c = y.lR.lastIndex,
                d = y.lR.exec(B)
            }
            return a + b(B.substr(c))
        }
        function p() {
            if (y.sL && !v[y.sL])
                return b(B);
            var a = y.sL ? j(y.sL, B, !0, z[y.sL]) : k(B);
            return y.r > 0 && (C += a.r),
            "continuous" == y.subLanguageMode && (z[y.sL] = a.top),
            n(a.language, a.value, !1, !0)
        }
        function q() {
            return void 0 !== y.sL ? p() : o()
        }
        function r(a, c) {
            var d = a.cN ? n(a.cN, "", !0) : "";
            a.rB ? (A += d,
            B = "") : a.eB ? (A += b(c) + d,
            B = "") : (A += d,
            B = c),
            y = Object.create(a, {
                parent: {
                    value: y
                }
            })
        }
        function s(a, c) {
            if (B += a,
            void 0 === c)
                return A += q(),
                0;
            var d = g(c, y);
            if (d)
                return A += q(),
                r(d, c),
                d.rB ? 0 : c.length;
            var e = h(y, c);
            if (e) {
                var f = y;
                f.rE || f.eE || (B += c),
                A += q();
                do
                    y.cN && (A += "</span>"),
                    C += y.r,
                    y = y.parent;
                while (y != e.parent);return f.eE && (A += b(c)),
                B = "",
                e.starts && r(e.starts, ""),
                f.rE ? 0 : c.length
            }
            if (l(c, y))
                throw new Error('Illegal lexeme "' + c + '" for mode "' + (y.cN || "<unnamed>") + '"');
            return B += c,
            c.length || 1
        }
        var w = t(a);
        if (!w)
            throw new Error('Unknown language: "' + a + '"');
        i(w);
        var x, y = f || w, z = {}, A = "";
        for (x = y; x != w; x = x.parent)
            x.cN && (A = n(x.cN, "", !0) + A);
        var B = ""
          , C = 0;
        try {
            for (var D, E, F = 0; y.t.lastIndex = F,
            D = y.t.exec(c),
            D; )
                E = s(c.substr(F, D.index - F), D[0]),
                F = D.index + E;
            for (s(c.substr(F)),
            x = y; x.parent; x = x.parent)
                x.cN && (A += "</span>");
            return {
                r: C,
                value: A,
                language: a,
                top: y
            }
        } catch (G) {
            if (-1 != G.message.indexOf("Illegal"))
                return {
                    r: 0,
                    value: b(c)
                };
            throw G
        }
    }
    function k(a, c) {
        c = c || u.languages || Object.keys(v);
        var d = {
            r: 0,
            value: b(a)
        }
          , e = d;
        return c.forEach(function(b) {
            if (t(b)) {
                var c = j(b, a, !1);
                c.language = b,
                c.r > e.r && (e = c),
                c.r > d.r && (e = d,
                d = c)
            }
        }),
        e.language && (d.second_best = e),
        d
    }
    function l(a) {
        return u.tabReplace && (a = a.replace(/^((<[^>]+>|\t)+)/gm, function(a, b) {
            return b.replace(/\t/g, u.tabReplace)
        })),
        u.useBR && (a = a.replace(/\n/g, "<br>")),
        a
    }
    function m(a, b, c) {
        var d = b ? w[b] : c
          , e = [a.trim()];
        return a.match(/\bhljs\b/) || e.push("hljs"),
        -1 === a.indexOf(d) && e.push(d),
        e.join(" ").trim()
    }
    function n(a) {
        var b = e(a);
        if (!/no(-?)highlight|plain|text/.test(b)) {
            var c;
            u.useBR ? (c = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
            c.innerHTML = a.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : c = a;
            var d = c.textContent
              , f = b ? j(b, d, !0) : k(d)
              , i = g(c);
            if (i.length) {
                var n = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
                n.innerHTML = f.value,
                f.value = h(i, g(n), d)
            }
            f.value = l(f.value),
            a.innerHTML = f.value,
            a.className = m(a.className, b, f.language),
            a.result = {
                language: f.language,
                re: f.r
            },
            f.second_best && (a.second_best = {
                language: f.second_best.language,
                re: f.second_best.r
            })
        }
    }
    function o(a) {
        u = f(u, a)
    }
    function p() {
        if (!p.called) {
            p.called = !0;
            var a = document.querySelectorAll("pre code");
            Array.prototype.forEach.call(a, n)
        }
    }
    function q() {
        addEventListener("DOMContentLoaded", p, !1),
        addEventListener("load", p, !1)
    }
    function r(b, c) {
        var d = v[b] = c(a);
        d.aliases && d.aliases.forEach(function(a) {
            w[a] = b
        })
    }
    function s() {
        return Object.keys(v)
    }
    function t(a) {
        return v[a] || v[w[a]]
    }
    var u = {
        classPrefix: "hljs-",
        tabReplace: null,
        useBR: !1,
        languages: void 0
    }
      , v = {}
      , w = {};
    return a.highlight = j,
    a.highlightAuto = k,
    a.fixMarkup = l,
    a.highlightBlock = n,
    a.configure = o,
    a.initHighlighting = p,
    a.initHighlightingOnLoad = q,
    a.registerLanguage = r,
    a.listLanguages = s,
    a.getLanguage = t,
    a.inherit = f,
    a.IR = "[a-zA-Z]\\w*",
    a.UIR = "[a-zA-Z_]\\w*",
    a.NR = "\\b\\d+(\\.\\d+)?",
    a.CNR = "\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    a.BNR = "\\b(0b[01]+)",
    a.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    a.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    },
    a.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [a.BE]
    },
    a.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [a.BE]
    },
    a.PWM = {
        b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
    },
    a.C = function(b, c, d) {
        var e = a.inherit({
            cN: "comment",
            b: b,
            e: c,
            c: []
        }, d || {});
        return e.c.push(a.PWM),
        e
    }
    ,
    a.CLCM = a.C("//", "$"),
    a.CBCM = a.C("/\\*", "\\*/"),
    a.HCM = a.C("#", "$"),
    a.NM = {
        cN: "number",
        b: a.NR,
        r: 0
    },
    a.CNM = {
        cN: "number",
        b: a.CNR,
        r: 0
    },
    a.BNM = {
        cN: "number",
        b: a.BNR,
        r: 0
    },
    a.CSSNM = {
        cN: "number",
        b: a.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    },
    a.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [a.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [a.BE]
        }]
    },
    a.TM = {
        cN: "title",
        b: a.IR,
        r: 0
    },
    a.UTM = {
        cN: "title",
        b: a.UIR,
        r: 0
    },
    a
}),
hljs.registerLanguage("apache", function(a) {
    var b = {
        cN: "number",
        b: "[\\$%]\\d+"
    };
    return {
        aliases: ["apacheconf"],
        cI: !0,
        c: [a.HCM, {
            cN: "tag",
            b: "</?",
            e: ">"
        }, {
            cN: "keyword",
            b: /\w+/,
            r: 0,
            k: {
                common: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
            },
            starts: {
                e: /$/,
                r: 0,
                k: {
                    literal: "on off all"
                },
                c: [{
                    cN: "sqbracket",
                    b: "\\s\\[",
                    e: "\\]$"
                }, {
                    cN: "cbracket",
                    b: "[\\$%]\\{",
                    e: "\\}",
                    c: ["self", b]
                }, b, a.QSM]
            }
        }],
        i: /\S/
    }
}),
hljs.registerLanguage("bash", function(a) {
    var b = {
        cN: "variable",
        v: [{
            b: /\$[\w\d#@][\w\d_]*/
        }, {
            b: /\$\{(.*?)}/
        }]
    }
      , c = {
        cN: "string",
        b: /"/,
        e: /"/,
        c: [a.BE, b, {
            cN: "variable",
            b: /\$\(/,
            e: /\)/,
            c: [a.BE]
        }]
    }
      , d = {
        cN: "string",
        b: /'/,
        e: /'/
    };
    return {
        aliases: ["sh", "zsh"],
        l: /-?[a-z\.]+/,
        k: {
            keyword: "if then else elif fi for while in do done case esac function",
            literal: "true false",
            built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
            operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
        },
        c: [{
            cN: "shebang",
            b: /^#![^\n]+sh\s*$/,
            r: 10
        }, {
            cN: "function",
            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            rB: !0,
            c: [a.inherit(a.TM, {
                b: /\w[\w\d_]*/
            })],
            r: 0
        }, a.HCM, a.NM, c, d, b]
    }
}),
hljs.registerLanguage("coffeescript", function(a) {
    var b = {
        keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
        literal: "true false null undefined yes no on off",
        reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",
        built_in: "npm require console print module global window document"
    }
      , c = "[A-Za-z$_][0-9A-Za-z$_]*"
      , d = {
        cN: "subst",
        b: /#\{/,
        e: /}/,
        k: b
    }
      , e = [a.BNM, a.inherit(a.CNM, {
        starts: {
            e: "(\\s*/)?",
            r: 0
        }
    }), {
        cN: "string",
        v: [{
            b: /'''/,
            e: /'''/,
            c: [a.BE]
        }, {
            b: /'/,
            e: /'/,
            c: [a.BE]
        }, {
            b: /"""/,
            e: /"""/,
            c: [a.BE, d]
        }, {
            b: /"/,
            e: /"/,
            c: [a.BE, d]
        }]
    }, {
        cN: "regexp",
        v: [{
            b: "///",
            e: "///",
            c: [d, a.HCM]
        }, {
            b: "//[gim]*",
            r: 0
        }, {
            b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
        }]
    }, {
        cN: "property",
        b: "@" + c
    }, {
        b: "`",
        e: "`",
        eB: !0,
        eE: !0,
        sL: "javascript"
    }];
    d.c = e;
    var f = a.inherit(a.TM, {
        b: c
    })
      , g = "(\\(.*\\))?\\s*\\B[-=]>"
      , h = {
        cN: "params",
        b: "\\([^\\(]",
        rB: !0,
        c: [{
            b: /\(/,
            e: /\)/,
            k: b,
            c: ["self"].concat(e)
        }]
    };
    return {
        aliases: ["coffee", "cson", "iced"],
        k: b,
        i: /\/\*/,
        c: e.concat([a.C("###", "###"), a.HCM, {
            cN: "function",
            b: "^\\s*" + c + "\\s*=\\s*" + g,
            e: "[-=]>",
            rB: !0,
            c: [f, h]
        }, {
            b: /[:\(,=]\s*/,
            r: 0,
            c: [{
                cN: "function",
                b: g,
                e: "[-=]>",
                rB: !0,
                c: [h]
            }]
        }, {
            cN: "class",
            bK: "class",
            e: "$",
            i: /[:="\[\]]/,
            c: [{
                bK: "extends",
                eW: !0,
                i: /[:="\[\]]/,
                c: [f]
            }, f]
        }, {
            cN: "attribute",
            b: c + ":",
            e: ":",
            rB: !0,
            rE: !0,
            r: 0
        }])
    }
}),
hljs.registerLanguage("cpp", function(a) {
    var b = {
        keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary intmax_t uintmax_t int8_t uint8_t int16_t uint16_t int32_t uint32_t  int64_t uint64_t int_least8_t uint_least8_t int_least16_t uint_least16_t int_least32_t uint_least32_t int_least64_t uint_least64_t int_fast8_t uint_fast8_t int_fast16_t uint_fast16_t int_fast32_t uint_fast32_t int_fast64_t uint_fast64_t intptr_t uintptr_t atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong atomic_wchar_t atomic_char16_t atomic_char32_t atomic_intmax_t atomic_uintmax_t atomic_intptr_t atomic_uintptr_t atomic_size_t atomic_ptrdiff_t atomic_int_least8_t atomic_int_least16_t atomic_int_least32_t atomic_int_least64_t atomic_uint_least8_t atomic_uint_least16_t atomic_uint_least32_t atomic_uint_least64_t atomic_int_fast8_t atomic_int_fast16_t atomic_int_fast32_t atomic_int_fast64_t atomic_uint_fast8_t atomic_uint_fast16_t atomic_uint_fast32_t atomic_uint_fast64_t",
        built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"
    };
    return {
        aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
        k: b,
        i: "</",
        c: [a.CLCM, a.CBCM, a.QSM, {
            cN: "string",
            b: "'\\\\?.",
            e: "'",
            i: "."
        }, {
            cN: "number",
            b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
        }, a.CNM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elif endif define undef warning error line pragma",
            c: [{
                b: /\\\n/,
                r: 0
            }, {
                b: 'include\\s*[<"]',
                e: '[>"]',
                k: "include",
                i: "\\n"
            }, a.CLCM]
        }, {
            b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            e: ">",
            k: b,
            c: ["self"]
        }, {
            b: a.IR + "::",
            k: b
        }, {
            bK: "new throw return else",
            r: 0
        }, {
            cN: "function",
            b: "(" + a.IR + "\\s+)+" + a.IR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: b,
            c: [{
                b: a.IR + "\\s*\\(",
                rB: !0,
                c: [a.TM],
                r: 0
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: b,
                r: 0,
                c: [a.CBCM]
            }, a.CLCM, a.CBCM]
        }]
    }
}),
hljs.registerLanguage("cs", function(a) {
    var b = "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield"
      , c = a.IR + "(<" + a.IR + ">)?";
    return {
        aliases: ["csharp"],
        k: b,
        i: /::/,
        c: [a.C("///", "$", {
            rB: !0,
            c: [{
                cN: "xmlDocTag",
                v: [{
                    b: "///",
                    r: 0
                }, {
                    b: "<!--|-->"
                }, {
                    b: "</?",
                    e: ">"
                }]
            }]
        }), a.CLCM, a.CBCM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elif endif define undef warning error line region endregion pragma checksum"
        }, {
            cN: "string",
            b: '@"',
            e: '"',
            c: [{
                b: '""'
            }]
        }, a.ASM, a.QSM, a.CNM, {
            bK: "class namespace interface",
            e: /[{;=]/,
            i: /[^\s:]/,
            c: [a.TM, a.CLCM, a.CBCM]
        }, {
            bK: "new return throw await",
            r: 0
        }, {
            cN: "function",
            b: "(" + c + "\\s+)+" + a.IR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: b,
            c: [{
                b: a.IR + "\\s*\\(",
                rB: !0,
                c: [a.TM],
                r: 0
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: b,
                r: 0,
                c: [a.ASM, a.QSM, a.CNM, a.CBCM]
            }, a.CLCM, a.CBCM]
        }]
    }
}),
hljs.registerLanguage("css", function(a) {
    var b = "[a-zA-Z-][a-zA-Z0-9_-]*"
      , c = {
        cN: "function",
        b: b + "\\(",
        rB: !0,
        eE: !0,
        e: "\\("
    }
      , d = {
        cN: "rule",
        b: /[A-Z\_\.\-]+\s*:/,
        rB: !0,
        e: ";",
        eW: !0,
        c: [{
            cN: "attribute",
            b: /\S/,
            e: ":",
            eE: !0,
            starts: {
                cN: "value",
                eW: !0,
                eE: !0,
                c: [c, a.CSSNM, a.QSM, a.ASM, a.CBCM, {
                    cN: "hexcolor",
                    b: "#[0-9A-Fa-f]+"
                }, {
                    cN: "important",
                    b: "!important"
                }]
            }
        }]
    };
    return {
        cI: !0,
        i: /[=\/|']/,
        c: [a.CBCM, d, {
            cN: "id",
            b: /\#[A-Za-z0-9_-]+/
        }, {
            cN: "class",
            b: /\.[A-Za-z0-9_-]+/,
            r: 0
        }, {
            cN: "attr_selector",
            b: /\[/,
            e: /\]/,
            i: "$"
        }, {
            cN: "pseudo",
            b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/
        }, {
            cN: "at_rule",
            b: "@(font-face|page)",
            l: "[a-z-]+",
            k: "font-face page"
        }, {
            cN: "at_rule",
            b: "@",
            e: "[{;]",
            c: [{
                cN: "keyword",
                b: /\S+/
            }, {
                b: /\s/,
                eW: !0,
                eE: !0,
                r: 0,
                c: [c, a.ASM, a.QSM, a.CSSNM]
            }]
        }, {
            cN: "tag",
            b: b,
            r: 0
        }, {
            cN: "rules",
            b: "{",
            e: "}",
            i: /\S/,
            r: 0,
            c: [a.CBCM, d]
        }]
    }
}),
hljs.registerLanguage("diff", function(a) {
    return {
        aliases: ["patch"],
        c: [{
            cN: "chunk",
            r: 10,
            v: [{
                b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/
            }, {
                b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
            }, {
                b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
            }]
        }, {
            cN: "header",
            v: [{
                b: /Index: /,
                e: /$/
            }, {
                b: /=====/,
                e: /=====$/
            }, {
                b: /^\-\-\-/,
                e: /$/
            }, {
                b: /^\*{3} /,
                e: /$/
            }, {
                b: /^\+\+\+/,
                e: /$/
            }, {
                b: /\*{5}/,
                e: /\*{5}$/
            }]
        }, {
            cN: "addition",
            b: "^\\+",
            e: "$"
        }, {
            cN: "deletion",
            b: "^\\-",
            e: "$"
        }, {
            cN: "change",
            b: "^\\!",
            e: "$"
        }]
    }
}),
hljs.registerLanguage("http", function(a) {
    return {
        aliases: ["https"],
        i: "\\S",
        c: [{
            cN: "status",
            b: "^HTTP/[0-9\\.]+",
            e: "$",
            c: [{
                cN: "number",
                b: "\\b\\d{3}\\b"
            }]
        }, {
            cN: "request",
            b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
            rB: !0,
            e: "$",
            c: [{
                cN: "string",
                b: " ",
                e: " ",
                eB: !0,
                eE: !0
            }]
        }, {
            cN: "attribute",
            b: "^\\w",
            e: ": ",
            eE: !0,
            i: "\\n|\\s|=",
            starts: {
                cN: "string",
                e: "$"
            }
        }, {
            b: "\\n\\n",
            starts: {
                sL: "",
                eW: !0
            }
        }]
    }
}),
hljs.registerLanguage("ini", function(a) {
    return {
        cI: !0,
        i: /\S/,
        c: [a.C(";", "$"), {
            cN: "title",
            b: "^\\[",
            e: "\\]"
        }, {
            cN: "setting",
            b: "^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",
            e: "$",
            c: [{
                cN: "value",
                eW: !0,
                k: "on off true false yes no",
                c: [a.QSM, a.NM],
                r: 0
            }]
        }]
    }
}),
hljs.registerLanguage("java", function(a) {
    var b = a.UIR + "(<" + a.UIR + ">)?"
      , c = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private"
      , d = "(\\b(0b[01_]+)|\\b0[xX][a-fA-F0-9_]+|(\\b[\\d_]+(\\.[\\d_]*)?|\\.[\\d_]+)([eE][-+]?\\d+)?)[lLfF]?"
      , e = {
        cN: "number",
        b: d,
        r: 0
    };
    return {
        aliases: ["jsp"],
        k: c,
        i: /<\//,
        c: [{
            cN: "javadoc",
            b: "/\\*\\*",
            e: "\\*/",
            r: 0,
            c: [{
                cN: "javadoctag",
                b: "(^|\\s)@[A-Za-z]+"
            }]
        }, a.CLCM, a.CBCM, a.ASM, a.QSM, {
            cN: "class",
            bK: "class interface",
            e: /[{;=]/,
            eE: !0,
            k: "class interface",
            i: /[:"\[\]]/,
            c: [{
                bK: "extends implements"
            }, a.UTM]
        }, {
            bK: "new throw return",
            r: 0
        }, {
            cN: "function",
            b: "(" + b + "\\s+)+" + a.UIR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: c,
            c: [{
                b: a.UIR + "\\s*\\(",
                rB: !0,
                r: 0,
                c: [a.UTM]
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: c,
                r: 0,
                c: [a.ASM, a.QSM, a.CNM, a.CBCM]
            }, a.CLCM, a.CBCM]
        }, e, {
            cN: "annotation",
            b: "@[A-Za-z]+"
        }]
    }
}),
hljs.registerLanguage("javascript", function(a) {
    return {
        aliases: ["js"],
        k: {
            keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as await",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
        },
        c: [{
            cN: "pi",
            r: 10,
            v: [{
                b: /^\s*('|")use strict('|")/
            }, {
                b: /^\s*('|")use asm('|")/
            }]
        }, a.ASM, a.QSM, {
            cN: "string",
            b: "`",
            e: "`",
            c: [a.BE, {
                cN: "subst",
                b: "\\$\\{",
                e: "\\}"
            }]
        }, a.CLCM, a.CBCM, {
            cN: "number",
            b: "\\b(0[xXbBoO][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
            r: 0
        }, {
            b: "(" + a.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [a.CLCM, a.CBCM, a.RM, {
                b: /</,
                e: />\s*[);\]]/,
                r: 0,
                sL: "xml"
            }],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [a.inherit(a.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            }), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: [a.CLCM, a.CBCM],
                i: /["'\(]/
            }],
            i: /\[|%/
        }, {
            b: /\$[(.]/
        }, {
            b: "\\." + a.IR,
            r: 0
        }, {
            bK: "import",
            e: "[;$]",
            k: "import from as",
            c: [a.ASM, a.QSM]
        }, {
            cN: "class",
            bK: "class",
            e: /[{;=]/,
            eE: !0,
            i: /[:"\[\]]/,
            c: [{
                bK: "extends"
            }, a.UTM]
        }]
    }
}),
hljs.registerLanguage("json", function(a) {
    var b = {
        literal: "true false null"
    }
      , c = [a.QSM, a.CNM]
      , d = {
        cN: "value",
        e: ",",
        eW: !0,
        eE: !0,
        c: c,
        k: b
    }
      , e = {
        b: "{",
        e: "}",
        c: [{
            cN: "attribute",
            b: '\\s*"',
            e: '"\\s*:\\s*',
            eB: !0,
            eE: !0,
            c: [a.BE],
            i: "\\n",
            starts: d
        }],
        i: "\\S"
    }
      , f = {
        b: "\\[",
        e: "\\]",
        c: [a.inherit(d, {
            cN: null
        })],
        i: "\\S"
    };
    return c.splice(c.length, 0, e, f),
    {
        c: c,
        k: b,
        i: "\\S"
    }
}),
hljs.registerLanguage("makefile", function(a) {
    var b = {
        cN: "variable",
        b: /\$\(/,
        e: /\)/,
        c: [a.BE]
    };
    return {
        aliases: ["mk", "mak"],
        c: [a.HCM, {
            b: /^\w+\s*\W*=/,
            rB: !0,
            r: 0,
            starts: {
                cN: "constant",
                e: /\s*\W*=/,
                eE: !0,
                starts: {
                    e: /$/,
                    r: 0,
                    c: [b]
                }
            }
        }, {
            cN: "title",
            b: /^[\w]+:\s*$/
        }, {
            cN: "phony",
            b: /^\.PHONY:/,
            e: /$/,
            k: ".PHONY",
            l: /[\.\w]+/
        }, {
            b: /^\t+/,
            e: /$/,
            r: 0,
            c: [a.QSM, b]
        }]
    }
}),
hljs.registerLanguage("xml", function(a) {
    var b = "[A-Za-z0-9\\._:-]+"
      , c = {
        b: /<\?(php)?(?!\w)/,
        e: /\?>/,
        sL: "php",
        subLanguageMode: "continuous"
    }
      , d = {
        eW: !0,
        i: /</,
        r: 0,
        c: [c, {
            cN: "attribute",
            b: b,
            r: 0
        }, {
            b: "=",
            r: 0,
            c: [{
                cN: "value",
                c: [c],
                v: [{
                    b: /"/,
                    e: /"/
                }, {
                    b: /'/,
                    e: /'/
                }, {
                    b: /[^\s\/>]+/
                }]
            }]
        }]
    };
    return {
        aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
        cI: !0,
        c: [{
            cN: "doctype",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [{
                b: "\\[",
                e: "\\]"
            }]
        }, a.C("<!--", "-->", {
            r: 10
        }), {
            cN: "cdata",
            b: "<\\!\\[CDATA\\[",
            e: "\\]\\]>",
            r: 10
        }, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {
                title: "style"
            },
            c: [d],
            starts: {
                e: "</style>",
                rE: !0,
                sL: "css"
            }
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {
                title: "script"
            },
            c: [d],
            starts: {
                e: "</script>",
                rE: !0,
                sL: ""
            }
        }, c, {
            cN: "pi",
            b: /<\?\w+/,
            e: /\?>/,
            r: 10
        }, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [{
                cN: "title",
                b: /[^ \/><\n\t]+/,
                r: 0
            }, d]
        }]
    }
}),
hljs.registerLanguage("markdown", function(a) {
    return {
        aliases: ["md", "mkdown", "mkd"],
        c: [{
            cN: "header",
            v: [{
                b: "^#{1,6}",
                e: "$"
            }, {
                b: "^.+?\\n[=-]{2,}$"
            }]
        }, {
            b: "<",
            e: ">",
            sL: "xml",
            r: 0
        }, {
            cN: "bullet",
            b: "^([*+-]|(\\d+\\.))\\s+"
        }, {
            cN: "strong",
            b: "[*_]{2}.+?[*_]{2}"
        }, {
            cN: "emphasis",
            v: [{
                b: "\\*.+?\\*"
            }, {
                b: "_.+?_",
                r: 0
            }]
        }, {
            cN: "blockquote",
            b: "^>\\s+",
            e: "$"
        }, {
            cN: "code",
            v: [{
                b: "`.+?`"
            }, {
                b: "^( {4}|\t)",
                e: "$",
                r: 0
            }]
        }, {
            cN: "horizontal_rule",
            b: "^[-\\*]{3,}",
            e: "$"
        }, {
            b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
            rB: !0,
            c: [{
                cN: "link_label",
                b: "\\[",
                e: "\\]",
                eB: !0,
                rE: !0,
                r: 0
            }, {
                cN: "link_url",
                b: "\\]\\(",
                e: "\\)",
                eB: !0,
                eE: !0
            }, {
                cN: "link_reference",
                b: "\\]\\[",
                e: "\\]",
                eB: !0,
                eE: !0
            }],
            r: 10
        }, {
            b: "^\\[.+\\]:",
            rB: !0,
            c: [{
                cN: "link_reference",
                b: "\\[",
                e: "\\]:",
                eB: !0,
                eE: !0,
                starts: {
                    cN: "link_url",
                    e: "$"
                }
            }]
        }]
    }
}),
hljs.registerLanguage("nginx", function(a) {
    var b = {
        cN: "variable",
        v: [{
            b: /\$\d+/
        }, {
            b: /\$\{/,
            e: /}/
        }, {
            b: "[\\$\\@]" + a.UIR
        }]
    }
      , c = {
        eW: !0,
        l: "[a-z/_]+",
        k: {
            built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
        },
        r: 0,
        i: "=>",
        c: [a.HCM, {
            cN: "string",
            c: [a.BE, b],
            v: [{
                b: /"/,
                e: /"/
            }, {
                b: /'/,
                e: /'/
            }]
        }, {
            cN: "url",
            b: "([a-z]+):/",
            e: "\\s",
            eW: !0,
            eE: !0,
            c: [b]
        }, {
            cN: "regexp",
            c: [a.BE, b],
            v: [{
                b: "\\s\\^",
                e: "\\s|{|;",
                rE: !0
            }, {
                b: "~\\*?\\s+",
                e: "\\s|{|;",
                rE: !0
            }, {
                b: "\\*(\\.[a-z\\-]+)+"
            }, {
                b: "([a-z\\-]+\\.)+\\*"
            }]
        }, {
            cN: "number",
            b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
        }, {
            cN: "number",
            b: "\\b\\d+[kKmMgGdshdwy]*\\b",
            r: 0
        }, b]
    };
    return {
        aliases: ["nginxconf"],
        c: [a.HCM, {
            b: a.UIR + "\\s",
            e: ";|{",
            rB: !0,
            c: [{
                cN: "title",
                b: a.UIR,
                starts: c
            }],
            r: 0
        }],
        i: "[^\\s\\}]"
    }
}),
hljs.registerLanguage("objectivec", function(a) {
    var b = {
        cN: "built_in",
        b: "(AV|CA|CF|CG|CI|MK|MP|NS|UI)\\w+"
    }
      , c = {
        keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",
        literal: "false true FALSE TRUE nil YES NO NULL",
        built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
    }
      , d = /[a-zA-Z@][a-zA-Z0-9_]*/
      , e = "@interface @class @protocol @implementation";
    return {
        aliases: ["m", "mm", "objc", "obj-c"],
        k: c,
        l: d,
        i: "</",
        c: [b, a.CLCM, a.CBCM, a.CNM, a.QSM, {
            cN: "string",
            v: [{
                b: '@"',
                e: '"',
                i: "\\n",
                c: [a.BE]
            }, {
                b: "'",
                e: "[^\\\\]'",
                i: "[^\\\\][^']"
            }]
        }, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            c: [{
                cN: "title",
                v: [{
                    b: '"',
                    e: '"'
                }, {
                    b: "<",
                    e: ">"
                }]
            }]
        }, {
            cN: "class",
            b: "(" + e.split(" ").join("|") + ")\\b",
            e: "({|$)",
            eE: !0,
            k: e,
            l: d,
            c: [a.UTM]
        }, {
            cN: "variable",
            b: "\\." + a.UIR,
            r: 0
        }]
    }
}),
hljs.registerLanguage("perl", function(a) {
    var b = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when"
      , c = {
        cN: "subst",
        b: "[$@]\\{",
        e: "\\}",
        k: b
    }
      , d = {
        b: "->{",
        e: "}"
    }
      , e = {
        cN: "variable",
        v: [{
            b: /\$\d/
        }, {
            b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
        }, {
            b: /[\$%@][^\s\w{]/,
            r: 0
        }]
    }
      , f = a.C("^(__END__|__DATA__)", "\\n$", {
        r: 5
    })
      , g = [a.BE, c, e]
      , h = [e, a.HCM, f, a.C("^\\=\\w", "\\=cut", {
        eW: !0
    }), d, {
        cN: "string",
        c: g,
        v: [{
            b: "q[qwxr]?\\s*\\(",
            e: "\\)",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\[",
            e: "\\]",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\{",
            e: "\\}",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\|",
            e: "\\|",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\<",
            e: "\\>",
            r: 5
        }, {
            b: "qw\\s+q",
            e: "q",
            r: 5
        }, {
            b: "'",
            e: "'",
            c: [a.BE]
        }, {
            b: '"',
            e: '"'
        }, {
            b: "`",
            e: "`",
            c: [a.BE]
        }, {
            b: "{\\w+}",
            c: [],
            r: 0
        }, {
            b: "-?\\w+\\s*\\=\\>",
            c: [],
            r: 0
        }]
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {
        b: "(\\/\\/|" + a.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        k: "split return print reverse grep",
        r: 0,
        c: [a.HCM, f, {
            cN: "regexp",
            b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
            r: 10
        }, {
            cN: "regexp",
            b: "(m|qr)?/",
            e: "/[a-z]*",
            c: [a.BE],
            r: 0
        }]
    }, {
        cN: "sub",
        bK: "sub",
        e: "(\\s*\\(.*?\\))?[;{]",
        r: 5
    }, {
        cN: "operator",
        b: "-\\w\\b",
        r: 0
    }];
    return c.c = h,
    d.c = h,
    {
        aliases: ["pl"],
        k: b,
        c: h
    }
}),
hljs.registerLanguage("php", function(a) {
    var b = {
        cN: "variable",
        b: "\\$+[a-zA-Z_-Ã¿][a-zA-Z0-9_-Ã¿]*"
    }
      , c = {
        cN: "preprocessor",
        b: /<\?(php)?|\?>/
    }
      , d = {
        cN: "string",
        c: [a.BE, c],
        v: [{
            b: 'b"',
            e: '"'
        }, {
            b: "b'",
            e: "'"
        }, a.inherit(a.ASM, {
            i: null
        }), a.inherit(a.QSM, {
            i: null
        })]
    }
      , e = {
        v: [a.BNM, a.CNM]
    };
    return {
        aliases: ["php3", "php4", "php5", "php6"],
        cI: !0,
        k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
        c: [a.CLCM, a.HCM, a.C("/\\*", "\\*/", {
            c: [{
                cN: "phpdoc",
                b: "\\s@[A-Za-z]+"
            }, c]
        }), a.C("__halt_compiler.+?;", !1, {
            eW: !0,
            k: "__halt_compiler",
            l: a.UIR
        }), {
            cN: "string",
            b: "<<<['\"]?\\w+['\"]?$",
            e: "^\\w+;",
            c: [a.BE]
        }, c, b, {
            b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
        }, {
            cN: "function",
            bK: "function",
            e: /[;{]/,
            eE: !0,
            i: "\\$|\\[|%",
            c: [a.UTM, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                c: ["self", b, a.CBCM, d, e]
            }]
        }, {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            i: /[:\(\$"]/,
            c: [{
                bK: "extends implements"
            }, a.UTM]
        }, {
            bK: "namespace",
            e: ";",
            i: /[\.']/,
            c: [a.UTM]
        }, {
            bK: "use",
            e: ";",
            c: [a.UTM]
        }, {
            b: "=>"
        }, d, e]
    }
}),
hljs.registerLanguage("python", function(a) {
    var b = {
        cN: "prompt",
        b: /^(>>>|\.\.\.) /
    }
      , c = {
        cN: "string",
        c: [a.BE],
        v: [{
            b: /(u|b)?r?'''/,
            e: /'''/,
            c: [b],
            r: 10
        }, {
            b: /(u|b)?r?"""/,
            e: /"""/,
            c: [b],
            r: 10
        }, {
            b: /(u|r|ur)'/,
            e: /'/,
            r: 10
        }, {
            b: /(u|r|ur)"/,
            e: /"/,
            r: 10
        }, {
            b: /(b|br)'/,
            e: /'/
        }, {
            b: /(b|br)"/,
            e: /"/
        }, a.ASM, a.QSM]
    }
      , d = {
        cN: "number",
        r: 0,
        v: [{
            b: a.BNR + "[lLjJ]?"
        }, {
            b: "\\b(0o[0-7]+)[lLjJ]?"
        }, {
            b: a.CNR + "[lLjJ]?"
        }]
    }
      , e = {
        cN: "params",
        b: /\(/,
        e: /\)/,
        c: ["self", b, d, c]
    };
    return {
        aliases: ["py", "gyp"],
        k: {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
            built_in: "Ellipsis NotImplemented"
        },
        i: /(<\/|->|\?)/,
        c: [b, d, c, a.HCM, {
            v: [{
                cN: "function",
                bK: "def",
                r: 10
            }, {
                cN: "class",
                bK: "class"
            }],
            e: /:/,
            i: /[${=;\n,]/,
            c: [a.UTM, e]
        }, {
            cN: "decorator",
            b: /@/,
            e: /$/
        }, {
            b: /\b(print|exec)\(/
        }]
    }
}),
hljs.registerLanguage("ruby", function(a) {
    var b = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"
      , c = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor"
      , d = {
        cN: "yardoctag",
        b: "@[A-Za-z]+"
    }
      , e = {
        cN: "value",
        b: "#<",
        e: ">"
    }
      , f = [a.C("#", "$", {
        c: [d]
    }), a.C("^\\=begin", "^\\=end", {
        c: [d],
        r: 10
    }), a.C("^__END__", "\\n$")]
      , g = {
        cN: "subst",
        b: "#\\{",
        e: "}",
        k: c
    }
      , h = {
        cN: "string",
        c: [a.BE, g],
        v: [{
            b: /'/,
            e: /'/
        }, {
            b: /"/,
            e: /"/
        }, {
            b: /`/,
            e: /`/
        }, {
            b: "%[qQwWx]?\\(",
            e: "\\)"
        }, {
            b: "%[qQwWx]?\\[",
            e: "\\]"
        }, {
            b: "%[qQwWx]?{",
            e: "}"
        }, {
            b: "%[qQwWx]?<",
            e: ">"
        }, {
            b: "%[qQwWx]?/",
            e: "/"
        }, {
            b: "%[qQwWx]?%",
            e: "%"
        }, {
            b: "%[qQwWx]?-",
            e: "-"
        }, {
            b: "%[qQwWx]?\\|",
            e: "\\|"
        }, {
            b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
        }]
    }
      , i = {
        cN: "params",
        b: "\\(",
        e: "\\)",
        k: c
    }
      , j = [h, e, {
        cN: "class",
        bK: "class module",
        e: "$|;",
        i: /=/,
        c: [a.inherit(a.TM, {
            b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
        }), {
            cN: "inheritance",
            b: "<\\s*",
            c: [{
                cN: "parent",
                b: "(" + a.IR + "::)?" + a.IR
            }]
        }].concat(f)
    }, {
        cN: "function",
        bK: "def",
        e: " |$|;",
        r: 0,
        c: [a.inherit(a.TM, {
            b: b
        }), i].concat(f)
    }, {
        cN: "constant",
        b: "(::)?(\\b[A-Z]\\w*(::)?)+",
        r: 0
    }, {
        cN: "symbol",
        b: a.UIR + "(\\!|\\?)?:",
        r: 0
    }, {
        cN: "symbol",
        b: ":",
        c: [h, {
            b: b
        }],
        r: 0
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {
        cN: "variable",
        b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
    }, {
        b: "(" + a.RSR + ")\\s*",
        c: [e, {
            cN: "regexp",
            c: [a.BE, g],
            i: /\n/,
            v: [{
                b: "/",
                e: "/[a-z]*"
            }, {
                b: "%r{",
                e: "}[a-z]*"
            }, {
                b: "%r\\(",
                e: "\\)[a-z]*"
            }, {
                b: "%r!",
                e: "![a-z]*"
            }, {
                b: "%r\\[",
                e: "\\][a-z]*"
            }]
        }].concat(f),
        r: 0
    }].concat(f);
    g.c = j,
    i.c = j;
    var k = "[>?]>"
      , l = "[\\w#]+\\(\\w+\\):\\d+:\\d+>"
      , m = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>"
      , n = [{
        b: /^\s*=>/,
        cN: "status",
        starts: {
            e: "$",
            c: j
        }
    }, {
        cN: "prompt",
        b: "^(" + k + "|" + l + "|" + m + ")",
        starts: {
            e: "$",
            c: j
        }
    }];
    return {
        aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
        k: c,
        c: f.concat(n).concat(j)
    }
}),
hljs.registerLanguage("sql", function(a) {
    var b = a.C("--", "$");
    return {
        cI: !0,
        i: /[<>]/,
        c: [{
            cN: "operator",
            bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke",
            e: /;/,
            eW: !0,
            k: {
                keyword: "abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",
                literal: "true false null",
                built_in: "array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"
            },
            c: [{
                cN: "string",
                b: "'",
                e: "'",
                c: [a.BE, {
                    b: "''"
                }]
            }, {
                cN: "string",
                b: '"',
                e: '"',
                c: [a.BE, {
                    b: '""'
                }]
            }, {
                cN: "string",
                b: "`",
                e: "`",
                c: [a.BE]
            }, a.CNM, a.CBCM, b]
        }, a.CBCM, b]
    }
}),
function(a) {
    "use strict";
    a.fn.fitVids = function(b) {
        var c = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var d = document.head || document.getElementsByTagName("head")[0]
              , e = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}"
              , f = document.createElement("div");
            f.innerHTML = '<p>x</p><style id="fit-vids-style">' + e + "</style>",
            d.appendChild(f.childNodes[1])
        }
        return b && a.extend(c, b),
        this.each(function() {
            var b = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            c.customSelector && b.push(c.customSelector);
            var d = ".fitvidsignore";
            c.ignore && (d = d + ", " + c.ignore);
            var e = a(this).find(b.join(","));
            e = e.not("object object"),
            e = e.not(d),
            e.each(function() {
                var b = a(this);
                if (!(b.parents(d).length > 0 || "embed" === this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length)) {
                    b.css("height") || b.css("width") || !isNaN(b.attr("height")) && !isNaN(b.attr("width")) || (b.attr("height", 9),
                    b.attr("width", 16));
                    var c = "object" === this.tagName.toLowerCase() || b.attr("height") && !isNaN(parseInt(b.attr("height"), 10)) ? parseInt(b.attr("height"), 10) : b.height()
                      , e = isNaN(parseInt(b.attr("width"), 10)) ? b.width() : parseInt(b.attr("width"), 10)
                      , f = c / e;
                    if (!b.attr("id")) {
                        var g = "fitvid" + Math.floor(999999 * Math.random());
                        b.attr("id", g)
                    }
                    b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * f + "%"),
                    b.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto),
"object" != typeof JSON && (JSON = {}),
function() {
    "use strict";
    function f(a) {
        return a < 10 ? "0" + a : a
    }
    function quote(a) {
        return escapable.lastIndex = 0,
        escapable.test(a) ? '"' + a.replace(escapable, function(a) {
            var b = meta[a];
            return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }
    function str(a, b) {
        var c, d, e, f, g, h = gap, i = b[a];
        switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)),
        "function" == typeof rep && (i = rep.call(b, a, i)),
        typeof i) {
        case "string":
            return quote(i);
        case "number":
            return isFinite(i) ? String(i) : "null";
        case "boolean":
        case "null":
            return String(i);
        case "object":
            if (!i)
                return "null";
            if (gap += indent,
            g = [],
            "[object Array]" === Object.prototype.toString.apply(i)) {
                for (f = i.length,
                c = 0; c < f; c += 1)
                    g[c] = str(c, i) || "null";
                return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]",
                gap = h,
                e
            }
            if (rep && "object" == typeof rep)
                for (f = rep.length,
                c = 0; c < f; c += 1)
                    "string" == typeof rep[c] && (d = rep[c],
                    e = str(d, i),
                    e && g.push(quote(d) + (gap ? ": " : ":") + e));
            else
                for (d in i)
                    Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i),
                    e && g.push(quote(d) + (gap ? ": " : ":") + e));
            return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}",
            gap = h,
            e
        }
    }
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(a) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }
    ,
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
        return this.valueOf()
    }
    );
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;
    "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
        var d;
        if (gap = "",
        indent = "",
        "number" == typeof c)
            for (d = 0; d < c; d += 1)
                indent += " ";
        else
            "string" == typeof c && (indent = c);
        if (rep = b,
        !b || "function" == typeof b || "object" == typeof b && "number" == typeof b.length)
            return str("", {
                "": a
            });
        throw new Error("JSON.stringify")
    }
    ),
    "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        function walk(a, b) {
            var c, d, e = a[b];
            if (e && "object" == typeof e)
                for (c in e)
                    Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c),
                    void 0 !== d ? e[c] = d : delete e[c]);
            return reviver.call(a, b, e)
        }
        var j;
        if (text = String(text),
        cx.lastIndex = 0,
        cx.test(text) && (text = text.replace(cx, function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        })),
        /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return j = eval("(" + text + ")"),
            "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
        throw new SyntaxError("JSON.parse")
    }
    )
}(),
function(a, b) {
    "use strict";
    var c = a.History = a.History || {}
      , d = a.jQuery;
    if ("undefined" != typeof c.Adapter)
        throw new Error("History.js Adapter has already been loaded...");
    c.Adapter = {
        bind: function(a, b, c) {
            d(a).bind(b, c)
        },
        trigger: function(a, b, c) {
            d(a).trigger(b, c)
        },
        extractEventData: function(a, c, d) {
            var e = c && c.originalEvent && c.originalEvent[a] || d && d[a] || b;
            return e
        },
        onDomLoad: function(a) {
            d(a)
        }
    },
    "undefined" != typeof c.init && c.init()
}(window),
function(a, b) {
    "use strict";
    var c = a.document
      , d = a.setTimeout || d
      , e = a.clearTimeout || e
      , f = a.setInterval || f
      , g = a.History = a.History || {};
    if ("undefined" != typeof g.initHtml4)
        throw new Error("History.js HTML4 Support has already been loaded...");
    g.initHtml4 = function() {
        return "undefined" == typeof g.initHtml4.initialized && (g.initHtml4.initialized = !0,
        g.enabled = !0,
        g.savedHashes = [],
        g.isLastHash = function(a) {
            var b, c = g.getHashByIndex();
            return b = a === c
        }
        ,
        g.isHashEqual = function(a, b) {
            return a = encodeURIComponent(a).replace(/%25/g, "%"),
            b = encodeURIComponent(b).replace(/%25/g, "%"),
            a === b
        }
        ,
        g.saveHash = function(a) {
            return !g.isLastHash(a) && (g.savedHashes.push(a),
            !0)
        }
        ,
        g.getHashByIndex = function(a) {
            var b = null;
            return b = "undefined" == typeof a ? g.savedHashes[g.savedHashes.length - 1] : a < 0 ? g.savedHashes[g.savedHashes.length + a] : g.savedHashes[a]
        }
        ,
        g.discardedHashes = {},
        g.discardedStates = {},
        g.discardState = function(a, b, c) {
            var d, e = g.getHashByState(a);
            return d = {
                discardedState: a,
                backState: c,
                forwardState: b
            },
            g.discardedStates[e] = d,
            !0
        }
        ,
        g.discardHash = function(a, b, c) {
            var d = {
                discardedHash: a,
                backState: c,
                forwardState: b
            };
            return g.discardedHashes[a] = d,
            !0
        }
        ,
        g.discardedState = function(a) {
            var b, c = g.getHashByState(a);
            return b = g.discardedStates[c] || !1
        }
        ,
        g.discardedHash = function(a) {
            var b = g.discardedHashes[a] || !1;
            return b
        }
        ,
        g.recycleState = function(a) {
            var b = g.getHashByState(a);
            return g.discardedState(a) && delete g.discardedStates[b],
            !0
        }
        ,
        g.emulated.hashChange && (g.hashChangeInit = function() {
            g.checkerFunction = null;
            var b, d, e, h, i = "", j = Boolean(g.getHash());
            return g.isInternetExplorer() ? (b = "historyjs-iframe",
            d = c.createElement("iframe"),
            d.setAttribute("id", b),
            d.setAttribute("src", "#"),
            d.style.display = "none",
            c.body.appendChild(d),
            d.contentWindow.document.open(),
            d.contentWindow.document.close(),
            e = "",
            h = !1,
            g.checkerFunction = function() {
                if (h)
                    return !1;
                h = !0;
                var b = g.getHash()
                  , c = g.getHash(d.contentWindow.document);
                return b !== i ? (i = b,
                c !== b && (e = c = b,
                d.contentWindow.document.open(),
                d.contentWindow.document.close(),
                d.contentWindow.document.location.hash = g.escapeHash(b)),
                g.Adapter.trigger(a, "hashchange")) : c !== e && (e = c,
                j && "" === c ? g.back() : g.setHash(c, !1)),
                h = !1,
                !0
            }
            ) : g.checkerFunction = function() {
                var b = g.getHash() || "";
                return b !== i && (i = b,
                g.Adapter.trigger(a, "hashchange")),
                !0
            }
            ,
            g.intervalList.push(f(g.checkerFunction, g.options.hashChangeInterval)),
            !0
        }
        ,
        g.Adapter.onDomLoad(g.hashChangeInit)),
        g.emulated.pushState && (g.onHashChange = function(b) {
            var c, d = b && b.newURL || g.getLocationHref(), e = g.getHashByUrl(d), f = null, h = null;
            return g.isLastHash(e) ? (g.busy(!1),
            !1) : (g.doubleCheckComplete(),
            g.saveHash(e),
            e && g.isTraditionalAnchor(e) ? (g.Adapter.trigger(a, "anchorchange"),
            g.busy(!1),
            !1) : (f = g.extractState(g.getFullUrl(e || g.getLocationHref()), !0),
            g.isLastSavedState(f) ? (g.busy(!1),
            !1) : (h = g.getHashByState(f),
            c = g.discardedState(f),
            c ? (g.getHashByIndex(-2) === g.getHashByState(c.forwardState) ? g.back(!1) : g.forward(!1),
            !1) : (g.pushState(f.data, f.title, encodeURI(f.url), !1),
            !0))))
        }
        ,
        g.Adapter.bind(a, "hashchange", g.onHashChange),
        g.pushState = function(b, c, d, e) {
            if (d = encodeURI(d).replace(/%25/g, "%"),
            g.getHashByUrl(d))
                throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
            if (e !== !1 && g.busy())
                return g.pushQueue({
                    scope: g,
                    callback: g.pushState,
                    args: arguments,
                    queue: e
                }),
                !1;
            g.busy(!0);
            var f = g.createStateObject(b, c, d)
              , h = g.getHashByState(f)
              , i = g.getState(!1)
              , j = g.getHashByState(i)
              , k = g.getHash()
              , l = g.expectedStateId == f.id;
            return g.storeState(f),
            g.expectedStateId = f.id,
            g.recycleState(f),
            g.setTitle(f),
            h === j ? (g.busy(!1),
            !1) : (g.saveState(f),
            l || g.Adapter.trigger(a, "statechange"),
            !g.isHashEqual(h, k) && !g.isHashEqual(h, g.getShortUrl(g.getLocationHref())) && g.setHash(h, !1),
            g.busy(!1),
            !0)
        }
        ,
        g.replaceState = function(b, c, d, e) {
            if (d = encodeURI(d).replace(/%25/g, "%"),
            g.getHashByUrl(d))
                throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
            if (e !== !1 && g.busy())
                return g.pushQueue({
                    scope: g,
                    callback: g.replaceState,
                    args: arguments,
                    queue: e
                }),
                !1;
            g.busy(!0);
            var f = g.createStateObject(b, c, d)
              , h = g.getHashByState(f)
              , i = g.getState(!1)
              , j = g.getHashByState(i)
              , k = g.getStateByIndex(-2);
            return g.discardState(i, f, k),
            h === j ? (g.storeState(f),
            g.expectedStateId = f.id,
            g.recycleState(f),
            g.setTitle(f),
            g.saveState(f),
            g.Adapter.trigger(a, "statechange"),
            g.busy(!1)) : g.pushState(f.data, f.title, f.url, !1),
            !0
        }
        ),
        g.emulated.pushState && g.getHash() && !g.emulated.hashChange && g.Adapter.onDomLoad(function() {
            g.Adapter.trigger(a, "hashchange")
        }),
        void 0)
    }
    ,
    "undefined" != typeof g.init && g.init()
}(window),
function(a, b) {
    "use strict";
    var c = a.console || b
      , d = a.document
      , e = a.navigator
      , f = a.sessionStorage || !1
      , g = a.setTimeout
      , h = a.clearTimeout
      , i = a.setInterval
      , j = a.clearInterval
      , k = a.JSON
      , l = a.alert
      , m = a.History = a.History || {}
      , n = a.history;
    try {
        f.setItem("TEST", "1"),
        f.removeItem("TEST")
    } catch (o) {
        f = !1
    }
    if (k.stringify = k.stringify || k.encode,
    k.parse = k.parse || k.decode,
    "undefined" != typeof m.init)
        throw new Error("History.js Core has already been loaded...");
    m.init = function(a) {
        return "undefined" != typeof m.Adapter && ("undefined" != typeof m.initCore && m.initCore(),
        "undefined" != typeof m.initHtml4 && m.initHtml4(),
        !0)
    }
    ,
    m.initCore = function(o) {
        if ("undefined" != typeof m.initCore.initialized)
            return !1;
        if (m.initCore.initialized = !0,
        m.options = m.options || {},
        m.options.hashChangeInterval = m.options.hashChangeInterval || 100,
        m.options.safariPollInterval = m.options.safariPollInterval || 500,
        m.options.doubleCheckInterval = m.options.doubleCheckInterval || 500,
        m.options.disableSuid = m.options.disableSuid || !1,
        m.options.storeInterval = m.options.storeInterval || 1e3,
        m.options.busyDelay = m.options.busyDelay || 250,
        m.options.debug = m.options.debug || !1,
        m.options.initialTitle = m.options.initialTitle || d.title,
        m.options.html4Mode = m.options.html4Mode || !1,
        m.options.delayInit = m.options.delayInit || !1,
        m.intervalList = [],
        m.clearAllIntervals = function() {
            var a, b = m.intervalList;
            if ("undefined" != typeof b && null !== b) {
                for (a = 0; a < b.length; a++)
                    j(b[a]);
                m.intervalList = null
            }
        }
        ,
        m.debug = function() {
            (m.options.debug || !1) && m.log.apply(m, arguments)
        }
        ,
        m.log = function() {
            var a, b, e, f, g, h = "undefined" != typeof c && "undefined" != typeof c.log && "undefined" != typeof c.log.apply, i = d.getElementById("log");
            for (h ? (f = Array.prototype.slice.call(arguments),
            a = f.shift(),
            "undefined" != typeof c.debug ? c.debug.apply(c, [a, f]) : c.log.apply(c, [a, f])) : a = "\n" + arguments[0] + "\n",
            b = 1,
            e = arguments.length; b < e; ++b) {
                if (g = arguments[b],
                "object" == typeof g && "undefined" != typeof k)
                    try {
                        g = k.stringify(g)
                    } catch (j) {}
                a += "\n" + g + "\n"
            }
            return i ? (i.value += a + "\n-----\n",
            i.scrollTop = i.scrollHeight - i.clientHeight) : h || l(a),
            !0
        }
        ,
        m.getInternetExplorerMajorVersion = function() {
            var a = m.getInternetExplorerMajorVersion.cached = "undefined" != typeof m.getInternetExplorerMajorVersion.cached ? m.getInternetExplorerMajorVersion.cached : function() {
                for (var a = 3, b = d.createElement("div"), c = b.getElementsByTagName("i"); (b.innerHTML = "<!--[if gt IE " + ++a + "]><i></i><![endif]-->") && c[0]; )
                    ;
                return a > 4 && a
            }();
            return a
        }
        ,
        m.isInternetExplorer = function() {
            var a = m.isInternetExplorer.cached = "undefined" != typeof m.isInternetExplorer.cached ? m.isInternetExplorer.cached : Boolean(m.getInternetExplorerMajorVersion());
            return a
        }
        ,
        m.options.html4Mode ? m.emulated = {
            pushState: !0,
            hashChange: !0
        } : m.emulated = {
            pushState: !Boolean(a.history && a.history.pushState && a.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),
            hashChange: Boolean(!("onhashchange"in a || "onhashchange"in d) || m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8)
        },
        m.enabled = !m.emulated.pushState,
        m.bugs = {
            setHash: Boolean(!m.emulated.pushState && "Apple Computer, Inc." === e.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
            safariPoll: Boolean(!m.emulated.pushState && "Apple Computer, Inc." === e.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
            ieDoubleCheck: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8),
            hashEscape: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 7)
        },
        m.isEmptyObject = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b))
                    return !1;
            return !0
        }
        ,
        m.cloneObject = function(a) {
            var b, c;
            return a ? (b = k.stringify(a),
            c = k.parse(b)) : c = {},
            c
        }
        ,
        m.getRootUrl = function() {
            var a = d.location.protocol + "//" + (d.location.hostname || d.location.host);
            return d.location.port && (a += ":" + d.location.port),
            a += "/"
        }
        ,
        m.getBaseHref = function() {
            var a = d.getElementsByTagName("base")
              , b = null
              , c = "";
            return 1 === a.length && (b = a[0],
            c = b.href.replace(/[^\/]+$/, "")),
            c = c.replace(/\/+$/, ""),
            c && (c += "/"),
            c
        }
        ,
        m.getBaseUrl = function() {
            var a = m.getBaseHref() || m.getBasePageUrl() || m.getRootUrl();
            return a
        }
        ,
        m.getPageUrl = function() {
            var a, b = m.getState(!1, !1), c = (b || {}).url || m.getLocationHref();
            return a = c.replace(/\/+$/, "").replace(/[^\/]+$/, function(a, b, c) {
                return /\./.test(a) ? a : a + "/"
            })
        }
        ,
        m.getBasePageUrl = function() {
            var a = m.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(a, b, c) {
                return /[^\/]$/.test(a) ? "" : a
            }).replace(/\/+$/, "") + "/";
            return a
        }
        ,
        m.getFullUrl = function(a, b) {
            var c = a
              , d = a.substring(0, 1);
            return b = "undefined" == typeof b || b,
            /[a-z]+\:\/\//.test(a) || (c = "/" === d ? m.getRootUrl() + a.replace(/^\/+/, "") : "#" === d ? m.getPageUrl().replace(/#.*/, "") + a : "?" === d ? m.getPageUrl().replace(/[\?#].*/, "") + a : b ? m.getBaseUrl() + a.replace(/^(\.\/)+/, "") : m.getBasePageUrl() + a.replace(/^(\.\/)+/, "")),
            c.replace(/\#$/, "")
        }
        ,
        m.getShortUrl = function(a) {
            var b = a
              , c = m.getBaseUrl()
              , d = m.getRootUrl();
            return m.emulated.pushState && (b = b.replace(c, "")),
            b = b.replace(d, "/"),
            m.isTraditionalAnchor(b) && (b = "./" + b),
            b = b.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
        }
        ,
        m.getLocationHref = function(a) {
            return a = a || d,
            a.URL === a.location.href ? a.location.href : a.location.href === decodeURIComponent(a.URL) ? a.URL : a.location.hash && decodeURIComponent(a.location.href.replace(/^[^#]+/, "")) === a.location.hash ? a.location.href : a.URL.indexOf("#") == -1 && a.location.href.indexOf("#") != -1 ? a.location.href : a.URL || a.location.href
        }
        ,
        m.store = {},
        m.idToState = m.idToState || {},
        m.stateToId = m.stateToId || {},
        m.urlToId = m.urlToId || {},
        m.storedStates = m.storedStates || [],
        m.savedStates = m.savedStates || [],
        m.normalizeStore = function() {
            m.store.idToState = m.store.idToState || {},
            m.store.urlToId = m.store.urlToId || {},
            m.store.stateToId = m.store.stateToId || {}
        }
        ,
        m.getState = function(a, b) {
            "undefined" == typeof a && (a = !0),
            "undefined" == typeof b && (b = !0);
            var c = m.getLastSavedState();
            return !c && b && (c = m.createStateObject()),
            a && (c = m.cloneObject(c),
            c.url = c.cleanUrl || c.url),
            c
        }
        ,
        m.getIdByState = function(a) {
            var b, c = m.extractId(a.url);
            if (!c)
                if (b = m.getStateString(a),
                "undefined" != typeof m.stateToId[b])
                    c = m.stateToId[b];
                else if ("undefined" != typeof m.store.stateToId[b])
                    c = m.store.stateToId[b];
                else {
                    for (; c = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""),
                    "undefined" != typeof m.idToState[c] || "undefined" != typeof m.store.idToState[c]; )
                        ;
                    m.stateToId[b] = c,
                    m.idToState[c] = a
                }
            return c
        }
        ,
        m.normalizeState = function(a) {
            var b, c;
            return a && "object" == typeof a || (a = {}),
            "undefined" != typeof a.normalized ? a : (a.data && "object" == typeof a.data || (a.data = {}),
            b = {},
            b.normalized = !0,
            b.title = a.title || "",
            b.url = m.getFullUrl(a.url ? a.url : m.getLocationHref()),
            b.hash = m.getShortUrl(b.url),
            b.data = m.cloneObject(a.data),
            b.id = m.getIdByState(b),
            b.cleanUrl = b.url.replace(/\??\&_suid.*/, ""),
            b.url = b.cleanUrl,
            c = !m.isEmptyObject(b.data),
            (b.title || c) && m.options.disableSuid !== !0 && (b.hash = m.getShortUrl(b.url).replace(/\??\&_suid.*/, ""),
            /\?/.test(b.hash) || (b.hash += "?"),
            b.hash += "&_suid=" + b.id),
            b.hashedUrl = m.getFullUrl(b.hash),
            (m.emulated.pushState || m.bugs.safariPoll) && m.hasUrlDuplicate(b) && (b.url = b.hashedUrl),
            b)
        }
        ,
        m.createStateObject = function(a, b, c) {
            var d = {
                data: a,
                title: b,
                url: c
            };
            return d = m.normalizeState(d)
        }
        ,
        m.getStateById = function(a) {
            a = String(a);
            var c = m.idToState[a] || m.store.idToState[a] || b;
            return c
        }
        ,
        m.getStateString = function(a) {
            var b, c, d;
            return b = m.normalizeState(a),
            c = {
                data: b.data,
                title: a.title,
                url: a.url
            },
            d = k.stringify(c)
        }
        ,
        m.getStateId = function(a) {
            var b, c;
            return b = m.normalizeState(a),
            c = b.id
        }
        ,
        m.getHashByState = function(a) {
            var b, c;
            return b = m.normalizeState(a),
            c = b.hash
        }
        ,
        m.extractId = function(a) {
            var b, c, d, e;
            return e = a.indexOf("#") != -1 ? a.split("#")[0] : a,
            c = /(.*)\&_suid=([0-9]+)$/.exec(e),
            d = c ? c[1] || a : a,
            b = c ? String(c[2] || "") : "",
            b || !1
        }
        ,
        m.isTraditionalAnchor = function(a) {
            var b = !/[\/\?\.]/.test(a);
            return b
        }
        ,
        m.extractState = function(a, b) {
            var c, d, e = null;
            return b = b || !1,
            c = m.extractId(a),
            c && (e = m.getStateById(c)),
            e || (d = m.getFullUrl(a),
            c = m.getIdByUrl(d) || !1,
            c && (e = m.getStateById(c)),
            !e && b && !m.isTraditionalAnchor(a) && (e = m.createStateObject(null, null, d))),
            e
        }
        ,
        m.getIdByUrl = function(a) {
            var c = m.urlToId[a] || m.store.urlToId[a] || b;
            return c
        }
        ,
        m.getLastSavedState = function() {
            return m.savedStates[m.savedStates.length - 1] || b
        }
        ,
        m.getLastStoredState = function() {
            return m.storedStates[m.storedStates.length - 1] || b
        }
        ,
        m.hasUrlDuplicate = function(a) {
            var b, c = !1;
            return b = m.extractState(a.url),
            c = b && b.id !== a.id
        }
        ,
        m.storeState = function(a) {
            return m.urlToId[a.url] = a.id,
            m.storedStates.push(m.cloneObject(a)),
            a
        }
        ,
        m.isLastSavedState = function(a) {
            var b, c, d, e = !1;
            return m.savedStates.length && (b = a.id,
            c = m.getLastSavedState(),
            d = c.id,
            e = b === d),
            e
        }
        ,
        m.saveState = function(a) {
            return !m.isLastSavedState(a) && (m.savedStates.push(m.cloneObject(a)),
            !0)
        }
        ,
        m.getStateByIndex = function(a) {
            var b = null;
            return b = "undefined" == typeof a ? m.savedStates[m.savedStates.length - 1] : a < 0 ? m.savedStates[m.savedStates.length + a] : m.savedStates[a]
        }
        ,
        m.getCurrentIndex = function() {
            var a = null;
            return a = m.savedStates.length < 1 ? 0 : m.savedStates.length - 1
        }
        ,
        m.getHash = function(a) {
            var b, c = m.getLocationHref(a);
            return b = m.getHashByUrl(c)
        }
        ,
        m.unescapeHash = function(a) {
            var b = m.normalizeHash(a);
            return b = decodeURIComponent(b)
        }
        ,
        m.normalizeHash = function(a) {
            var b = a.replace(/[^#]*#/, "").replace(/#.*/, "");
            return b
        }
        ,
        m.setHash = function(a, b) {
            var c, e;
            return b !== !1 && m.busy() ? (m.pushQueue({
                scope: m,
                callback: m.setHash,
                args: arguments,
                queue: b
            }),
            !1) : (m.busy(!0),
            c = m.extractState(a, !0),
            c && !m.emulated.pushState ? m.pushState(c.data, c.title, c.url, !1) : m.getHash() !== a && (m.bugs.setHash ? (e = m.getPageUrl(),
            m.pushState(null, null, e + "#" + a, !1)) : d.location.hash = a),
            m)
        }
        ,
        m.escapeHash = function(b) {
            var c = m.normalizeHash(b);
            return c = a.encodeURIComponent(c),
            m.bugs.hashEscape || (c = c.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")),
            c
        }
        ,
        m.getHashByUrl = function(a) {
            var b = String(a).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
            return b = m.unescapeHash(b)
        }
        ,
        m.setTitle = function(a) {
            var b, c = a.title;
            c || (b = m.getStateByIndex(0),
            b && b.url === a.url && (c = b.title || m.options.initialTitle));
            try {
                d.getElementsByTagName("title")[0].innerHTML = c.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
            } catch (e) {}
            return d.title = c,
            m
        }
        ,
        m.queues = [],
        m.busy = function(a) {
            if ("undefined" != typeof a ? m.busy.flag = a : "undefined" == typeof m.busy.flag && (m.busy.flag = !1),
            !m.busy.flag) {
                h(m.busy.timeout);
                var b = function() {
                    var a, c, d;
                    if (!m.busy.flag)
                        for (a = m.queues.length - 1; a >= 0; --a)
                            c = m.queues[a],
                            0 !== c.length && (d = c.shift(),
                            m.fireQueueItem(d),
                            m.busy.timeout = g(b, m.options.busyDelay))
                };
                m.busy.timeout = g(b, m.options.busyDelay)
            }
            return m.busy.flag
        }
        ,
        m.busy.flag = !1,
        m.fireQueueItem = function(a) {
            return a.callback.apply(a.scope || m, a.args || [])
        }
        ,
        m.pushQueue = function(a) {
            return m.queues[a.queue || 0] = m.queues[a.queue || 0] || [],
            m.queues[a.queue || 0].push(a),
            m
        }
        ,
        m.queue = function(a, b) {
            return "function" == typeof a && (a = {
                callback: a
            }),
            "undefined" != typeof b && (a.queue = b),
            m.busy() ? m.pushQueue(a) : m.fireQueueItem(a),
            m
        }
        ,
        m.clearQueue = function() {
            return m.busy.flag = !1,
            m.queues = [],
            m
        }
        ,
        m.stateChanged = !1,
        m.doubleChecker = !1,
        m.doubleCheckComplete = function() {
            return m.stateChanged = !0,
            m.doubleCheckClear(),
            m
        }
        ,
        m.doubleCheckClear = function() {
            return m.doubleChecker && (h(m.doubleChecker),
            m.doubleChecker = !1),
            m
        }
        ,
        m.doubleCheck = function(a) {
            return m.stateChanged = !1,
            m.doubleCheckClear(),
            m.bugs.ieDoubleCheck && (m.doubleChecker = g(function() {
                return m.doubleCheckClear(),
                m.stateChanged || a(),
                !0
            }, m.options.doubleCheckInterval)),
            m
        }
        ,
        m.safariStatePoll = function() {
            var b, c = m.extractState(m.getLocationHref());
            if (!m.isLastSavedState(c))
                return b = c,
                b || (b = m.createStateObject()),
                m.Adapter.trigger(a, "popstate"),
                m
        }
        ,
        m.back = function(a) {
            return a !== !1 && m.busy() ? (m.pushQueue({
                scope: m,
                callback: m.back,
                args: arguments,
                queue: a
            }),
            !1) : (m.busy(!0),
            m.doubleCheck(function() {
                m.back(!1)
            }),
            n.go(-1),
            !0)
        }
        ,
        m.forward = function(a) {
            return a !== !1 && m.busy() ? (m.pushQueue({
                scope: m,
                callback: m.forward,
                args: arguments,
                queue: a
            }),
            !1) : (m.busy(!0),
            m.doubleCheck(function() {
                m.forward(!1)
            }),
            n.go(1),
            !0)
        }
        ,
        m.go = function(a, b) {
            var c;
            if (a > 0)
                for (c = 1; c <= a; ++c)
                    m.forward(b);
            else {
                if (!(a < 0))
                    throw new Error("History.go: History.go requires a positive or negative integer passed.");
                for (c = -1; c >= a; --c)
                    m.back(b)
            }
            return m
        }
        ,
        m.emulated.pushState) {
            var p = function() {};
            m.pushState = m.pushState || p,
            m.replaceState = m.replaceState || p
        } else
            m.onPopState = function(b, c) {
                var d, e, f = !1, g = !1;
                return m.doubleCheckComplete(),
                d = m.getHash(),
                d ? (e = m.extractState(d || m.getLocationHref(), !0),
                e ? m.replaceState(e.data, e.title, e.url, !1) : (m.Adapter.trigger(a, "anchorchange"),
                m.busy(!1)),
                m.expectedStateId = !1,
                !1) : (f = m.Adapter.extractEventData("state", b, c) || !1,
                g = f ? m.getStateById(f) : m.expectedStateId ? m.getStateById(m.expectedStateId) : m.extractState(m.getLocationHref()),
                g || (g = m.createStateObject(null, null, m.getLocationHref())),
                m.expectedStateId = !1,
                m.isLastSavedState(g) ? (m.busy(!1),
                !1) : (m.storeState(g),
                m.saveState(g),
                m.setTitle(g),
                m.Adapter.trigger(a, "statechange"),
                m.busy(!1),
                !0))
            }
            ,
            m.Adapter.bind(a, "popstate", m.onPopState),
            m.pushState = function(b, c, d, e) {
                if (m.getHashByUrl(d) && m.emulated.pushState)
                    throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (e !== !1 && m.busy())
                    return m.pushQueue({
                        scope: m,
                        callback: m.pushState,
                        args: arguments,
                        queue: e
                    }),
                    !1;
                m.busy(!0);
                var f = m.createStateObject(b, c, d);
                return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f),
                m.expectedStateId = f.id,
                n.pushState(f.id, f.title, f.url),
                m.Adapter.trigger(a, "popstate")),
                !0
            }
            ,
            m.replaceState = function(b, c, d, e) {
                if (m.getHashByUrl(d) && m.emulated.pushState)
                    throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (e !== !1 && m.busy())
                    return m.pushQueue({
                        scope: m,
                        callback: m.replaceState,
                        args: arguments,
                        queue: e
                    }),
                    !1;
                m.busy(!0);
                var f = m.createStateObject(b, c, d);
                return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f),
                m.expectedStateId = f.id,
                n.replaceState(f.id, f.title, f.url),
                m.Adapter.trigger(a, "popstate")),
                !0
            }
            ;
        if (f) {
            try {
                m.store = k.parse(f.getItem("History.store")) || {}
            } catch (q) {
                m.store = {}
            }
            m.normalizeStore()
        } else
            m.store = {},
            m.normalizeStore();
        m.Adapter.bind(a, "unload", m.clearAllIntervals),
        m.saveState(m.storeState(m.extractState(m.getLocationHref(), !0))),
        f && (m.onUnload = function() {
            var a, b, c;
            try {
                a = k.parse(f.getItem("History.store")) || {}
            } catch (d) {
                a = {}
            }
            a.idToState = a.idToState || {},
            a.urlToId = a.urlToId || {},
            a.stateToId = a.stateToId || {};
            for (b in m.idToState)
                m.idToState.hasOwnProperty(b) && (a.idToState[b] = m.idToState[b]);
            for (b in m.urlToId)
                m.urlToId.hasOwnProperty(b) && (a.urlToId[b] = m.urlToId[b]);
            for (b in m.stateToId)
                m.stateToId.hasOwnProperty(b) && (a.stateToId[b] = m.stateToId[b]);
            m.store = a,
            m.normalizeStore(),
            c = k.stringify(a);
            try {
                f.setItem("History.store", c)
            } catch (e) {
                if (e.code !== DOMException.QUOTA_EXCEEDED_ERR)
                    throw e;
                f.length && (f.removeItem("History.store"),
                f.setItem("History.store", c))
            }
        }
        ,
        m.intervalList.push(i(m.onUnload, m.options.storeInterval)),
        m.Adapter.bind(a, "beforeunload", m.onUnload),
        m.Adapter.bind(a, "unload", m.onUnload)),
        m.emulated.pushState || (m.bugs.safariPoll && m.intervalList.push(i(m.safariStatePoll, m.options.safariPollInterval)),
        "Apple Computer, Inc." !== e.vendor && "Mozilla" !== (e.appCodeName || "") || (m.Adapter.bind(a, "hashchange", function() {
            m.Adapter.trigger(a, "popstate")
        }),
        m.getHash() && m.Adapter.onDomLoad(function() {
            m.Adapter.trigger(a, "hashchange")
        })))
    }
    ,
    (!m.options || !m.options.delayInit) && m.init()
}(window),
function(a, b) {
    "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.NProgress = b()
}(this, function() {
    function a(a, b, c) {
        return a < b ? b : a > c ? c : a
    }
    function b(a) {
        return 100 * (-1 + a)
    }
    function c(a, c, d) {
        var e;
        return e = "translate3d" === j.positionUsing ? {
            transform: "translate3d(" + b(a) + "%,0,0)"
        } : "translate" === j.positionUsing ? {
            transform: "translate(" + b(a) + "%,0)"
        } : {
            "margin-left": b(a) + "%"
        },
        e.transition = "all " + c + "ms " + d,
        e
    }
    function d(a, b) {
        var c = "string" == typeof a ? a : g(a);
        return c.indexOf(" " + b + " ") >= 0
    }
    function e(a, b) {
        var c = g(a)
          , e = c + b;
        d(c, b) || (a.className = e.substring(1))
    }
    function f(a, b) {
        var c, e = g(a);
        d(a, b) && (c = e.replace(" " + b + " ", " "),
        a.className = c.substring(1, c.length - 1))
    }
    function g(a) {
        return (" " + (a.className || "") + " ").replace(/\s+/gi, " ")
    }
    function h(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }
    var i = {};
    i.version = "0.1.6";
    var j = i.settings = {
        minimum: .08,
        easing: "ease",
        positionUsing: "",
        speed: 200,
        trickle: !0,
        trickleRate: .02,
        trickleSpeed: 800,
        showSpinner: !0,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    i.configure = function(a) {
        var b, c;
        for (b in a)
            c = a[b],
            void 0 !== c && a.hasOwnProperty(b) && (j[b] = c);
        return this
    }
    ,
    i.status = null,
    i.set = function(b) {
        var d = i.isStarted();
        b = a(b, j.minimum, 1),
        i.status = 1 === b ? null : b;
        var e = i.render(!d)
          , f = e.querySelector(j.barSelector)
          , g = j.speed
          , h = j.easing;
        return e.offsetWidth,
        k(function(a) {
            "" === j.positionUsing && (j.positionUsing = i.getPositioningCSS()),
            l(f, c(b, g, h)),
            1 === b ? (l(e, {
                transition: "none",
                opacity: 1
            }),
            e.offsetWidth,
            setTimeout(function() {
                l(e, {
                    transition: "all " + g + "ms linear",
                    opacity: 0
                }),
                setTimeout(function() {
                    i.remove(),
                    a()
                }, g)
            }, g)) : setTimeout(a, g)
        }),
        this
    }
    ,
    i.isStarted = function() {
        return "number" == typeof i.status
    }
    ,
    i.start = function() {
        i.status || i.set(0);
        var a = function() {
            setTimeout(function() {
                i.status && (i.trickle(),
                a())
            }, j.trickleSpeed)
        };
        return j.trickle && a(),
        this
    }
    ,
    i.done = function(a) {
        return a || i.status ? i.inc(.3 + .5 * Math.random()).set(1) : this
    }
    ,
    i.inc = function(b) {
        var c = i.status;
        return c ? ("number" != typeof b && (b = (1 - c) * a(Math.random() * c, .1, .95)),
        c = a(c + b, 0, .994),
        i.set(c)) : i.start()
    }
    ,
    i.trickle = function() {
        return i.inc(Math.random() * j.trickleRate)
    }
    ,
    function() {
        var a = 0
          , b = 0;
        i.promise = function(c) {
            return c && "resolved" != c.state() ? (0 == b && i.start(),
            a++,
            b++,
            c.always(function() {
                b--,
                0 == b ? (a = 0,
                i.done()) : i.set((a - b) / a)
            }),
            this) : this
        }
    }(),
    i.render = function(a) {
        if (i.isRendered())
            return document.getElementById("nprogress");
        e(document.documentElement, "nprogress-busy");
        var c = document.createElement("div");
        c.id = "nprogress",
        c.innerHTML = j.template;
        var d, f = c.querySelector(j.barSelector), g = a ? "-100" : b(i.status || 0), k = document.querySelector(j.parent);
        return l(f, {
            transition: "all 0 linear",
            transform: "translate3d(" + g + "%,0,0)"
        }),
        j.showSpinner || (d = c.querySelector(j.spinnerSelector),
        d && h(d)),
        k != document.body && e(k, "nprogress-custom-parent"),
        k.appendChild(c),
        c
    }
    ,
    i.remove = function() {
        f(document.documentElement, "nprogress-busy"),
        f(document.querySelector(j.parent), "nprogress-custom-parent");
        var a = document.getElementById("nprogress");
        a && h(a)
    }
    ,
    i.isRendered = function() {
        return !!document.getElementById("nprogress")
    }
    ,
    i.getPositioningCSS = function() {
        var a = document.body.style
          , b = "WebkitTransform"in a ? "Webkit" : "MozTransform"in a ? "Moz" : "msTransform"in a ? "ms" : "OTransform"in a ? "O" : "";
        return b + "Perspective"in a ? "translate3d" : b + "Transform"in a ? "translate" : "margin"
    }
    ;
    var k = function() {
        function a() {
            var c = b.shift();
            c && c(a)
        }
        var b = [];
        return function(c) {
            b.push(c),
            1 == b.length && a()
        }
    }()
      , l = function() {
        function a(a) {
            return a.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(a, b) {
                return b.toUpperCase()
            })
        }
        function b(a) {
            var b = document.body.style;
            if (a in b)
                return a;
            for (var c, d = e.length, f = a.charAt(0).toUpperCase() + a.slice(1); d--; )
                if (c = e[d] + f,
                c in b)
                    return c;
            return a
        }
        function c(c) {
            return c = a(c),
            f[c] || (f[c] = b(c))
        }
        function d(a, b, d) {
            b = c(b),
            a.style[b] = d
        }
        var e = ["Webkit", "O", "Moz", "ms"]
          , f = {};
        return function(a, b) {
            var c, e, f = arguments;
            if (2 == f.length)
                for (c in b)
                    e = b[c],
                    void 0 !== e && b.hasOwnProperty(c) && d(a, c, e);
            else
                d(a, f[1], f[2])
        }
    }();
    return i
}),
jQuery(function(a) {
    function b() {
        g.toggleClass("menu-active")
    }
    function c() {
        if (i.length >= 1) {
            var a = h.scrollTop();
            j = a > 0 ? Math.floor(.25 * a) : 0,
            i.css({
                "-webkit-transform": "translate3d(0, " + j + "px, 0)",
                transform: "translate3d(0, " + j + "px, 0)"
            }),
            h.scrollTop() < i.height() ? g.addClass("cover-active") : g.removeClass("cover-active")
        }
    }
    function d() {
        if (k.length >= 1) {
            var b = k.offset().top + k.height()
              , c = h.scrollTop() + h.height()
              , d = 100 - (b - c) / (b - h.height()) * 100;
            a(".progress-bar").css("width", d + "%"),
            d > 100 ? a(".progress-container").addClass("ready") : a(".progress-container").removeClass("ready")
        }
    }
    function e() {
        a("pre code").each(function(b, c) {
           /* hljs.highlightBlock(c);
            var d = a(this)
              , e = d.html().split(/\n/).length
              , f = [];
            for (b = 1; b < e; b++)
                f += '<span class="line">' + b + "</span>";
            d.parent().append('<div class="lines">' + f + "</div>")*/
        })
    }
    function f() {
        a("#wrapper").fitVids()
    }
    var g = (a("body"),
    a("html"))
      , h = a(window);
    a("#menu").on({
        click: function() {
            b()
        }
    }),
    a(".menu-button").on({
        click: function() {
            b()
        }
    }),
    a(".hidden-close").on({
        click: function() {
            b()
        }
    });
    var i = a(".cover")
      , j = 0;
    c(),
    h.on({
        scroll: function() {
            c()
        },
        resize: function() {
            c()
        },
        orientationchange: function() {
            c()
        }
    });
    var k = a(".post-content");
    d(),
    h.on({
        scroll: function() {
            d()
        },
        resize: function() {
            d()
        },
        orientationchange: function() {
            d()
        }
    }),
    e(),
    f(),
    "undefined" == typeof disqus ? a(".post-comments").css({
        display: "none"
    }) : a("#show-disqus").on("click", function() {
        a.ajax({
            type: "GET",
            url: "//" + disqus + ".disqus.com/embed.js",
            dataType: "script",
            cache: !0
        }),
        a(this).parent().addClass("activated")
    })
});

