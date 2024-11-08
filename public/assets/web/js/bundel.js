    /*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
      , r = Object.getPrototypeOf
      , s = t.slice
      , g = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , v = n.hasOwnProperty
      , a = v.toString
      , l = a.call(Object)
      , y = {}
      , m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , x = function(e) {
        return null != e && e === e.window
    }
      , E = C.document
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.5.1"
      , S = function(e, t) {
        return new S.fn.init(e,t)
    };
    function p(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || m(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), D = function(e, t) {
            return e === t && (l = !0),
            0
        }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+","g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            T()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes),
            t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && (T(e),
            e = e || C,
            E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)),
                        o = (l = h(t)).length;
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[S] = !0,
            e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
              , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ve(a) {
            return le(function(o) {
                return o = +o,
                le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
        i = se.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
            E = !i(C),
            p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            d.scope = ce(function(e) {
                return a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            d.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = K.test(C.getElementsByClassName),
            d.getById = ce(function(e) {
                return a.appendChild(e).id = S,
                !C.getElementsByName || !C.getElementsByName(S).length
            }),
            d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            v = [],
            (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                (t = C.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", F)
            }),
            v = v.length && new RegExp(v.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = K.test(a.compareDocumentPosition),
            y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (T(e),
            d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    N(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != C && T(e),
            y(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates,
            u = !d.sortStable && e.slice(0),
            e.sort(D),
            l) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += o(t);
            return n
        }
        ,
        (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l])
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && p) {
                                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2],
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [k, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                            !1 === d)
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]),
                                    a === e))
                                        break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = []
                      , i = []
                      , s = f(e.replace($, "$1"));
                    return s[S] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(te, ne).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve(function() {
                    return [0]
                }),
                last: ve(function(e, t) {
                    return [t - 1]
                }),
                eq: ve(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)),
            y && !y[S] && (y = Ce(y, e)),
            le(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r),
                v) {
                    i = Te(p, u),
                    v(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [],
                            o = p.length;
                            while (o--)
                                (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)
                            (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = Te(p === t ? p.splice(l, p.length) : p),
                    y ? y(null, t, p, r) : H.apply(t, p)
            })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
        b.setFilters = new me,
        h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = z.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace($, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }
        ,
        f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                t || (t = h(e)),
                n = t.length;
                while (n--)
                    (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o,
                m = 0 < (y = i).length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument == C || (T(o),
                            n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = y[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h,
                    w = p),
                    c
                }
                ,
                m ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && xe(o)))
                            return H.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = S.split("").sort(D).join("") === S,
        d.detectDuplicates = !!l,
        T(),
        d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(C);
    S.find = d,
    S.expr = d.selectors,
    S.expr[":"] = S.expr.pseudos,
    S.uniqueSort = S.unique = d.uniqueSort,
    S.text = d.getText,
    S.isXMLDoc = d.isXML,
    S.contains = d.contains,
    S.escapeSelector = d.escape;
    var h = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && S(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , T = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    S.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(S(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (S.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || j,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t,
                S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                N.test(r[1]) && S.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }
    ).prototype = S.fn,
    j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/
      , H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length && (H[r] || S.uniqueSort(n),
            L.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }),
        n) : S.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    S.each(e, function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return S.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = S.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < S.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    S.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return S.Deferred(function(r) {
                        S.each(o, function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++,
                                    t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== M && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return S.Deferred(function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                        o[1][3].add(l(0, e, m(t) ? t : R)),
                        o[2][3].add(l(0, e, m(n) ? n : M))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? S.extend(e, a) : a
                }
            }
              , s = {};
            return S.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = S.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then)))
                return o.then();
            while (t--)
                I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = S.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }),
        this
    }
    ,
    S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }),
    S.ready.then = F.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B),
    C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
            n)
                $(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(S(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , _ = /^-ms-/
      , z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1,
    G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[X(t)] = n;
            else
                for (r in t)
                    i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(P) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G
      , Q = new G
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o),
                1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                        Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }),
    S.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Y.get(e, t),
                n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                S.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = E.documentElement
      , ie = function(e) {
        return S.contains(e.ownerDocument, e)
    }
      , oe = {
        composed: !0
    };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };
    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return S.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                S.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            S.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = Y.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = S.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ue[s] = u)))) : "none" !== n && (l[c] = "none",
            Y.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ce.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
    ce.innerHTML = "<option></option>",
    y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    S.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r))
                i && i.push(o);
            else if (l = ie(o),
            a = ve(f.appendChild(o), "script"),
            l && ye(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    var be = /^key/
      , we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Te = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0
    }
    function Ee() {
        return !1
    }
    function Se(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Ee;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return S().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = S.guid++)),
        e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }
    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1),
        S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    Y.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n.value
                } else
                    r.length && (Y.set(this, i, {
                        value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && S.find.matchesSelector(re, i),
                n.guid || (n.guid = S.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(P) || [""]).length;
                while (l--)
                    d = g = (s = Te.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = S.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = S.event.special[d] || {},
                    c = S.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && S.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = S.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
            for (s[0] = u,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l),
                t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    S.Event = function(e, t) {
        if (!(this instanceof S.Event))
            return new S.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && S.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[S.expando] = !0
    }
    ,
    S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp),
    S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Ae(this, e, Se),
                !1
            },
            trigger: function() {
                return Ae(this, e),
                !0
            },
            delegateType: t
        }
    }),
    S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    S.fn.extend({
        on: function(e, t, n, r) {
            return ke(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Ee),
            this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<script|<style|<link/i
      , De = /checked\s*(?:[^=]|=\s*.checked.)/i
      , je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }
    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[i].length; n < r; n++)
                        S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e),
            a = S.extend({}, o),
            Q.set(t, a))
        }
    }
    function Pe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                Pe(t, r, i, o)
            });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
                u = e,
                c !== p && (u = S.clone(u, !0, !0),
                s && S.merge(a, ve(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                S.map(a, He),
                c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : b(u.textContent.replace(je, ""), u, l))
        }
        return n
    }
    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(ve(r)),
            r.parentNode && (n && ie(r) && ye(ve(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c),
                r = 0,
                i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Oe(o[r], a[r]);
                else
                    Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    S.fn.extend({
        detach: function(e) {
            return Re(this, e, !0)
        },
        remove: function(e) {
            return Re(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Pe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (S.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                S(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , Ie = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , We = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , Fe = new RegExp(ne.join("|"),"i");
    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)),
        !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function $e(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top,
                s = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                l.style.position = "absolute",
                i = 12 === t(l.offsetWidth / 3),
                re.removeChild(u),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        y.clearCloneStyle = "content-box" === l.style.backgroundClip,
        S.extend(y, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                s
            },
            scrollboxSize: function() {
                return e(),
                i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"),
                t = E.createElement("tr"),
                n = E.createElement("div"),
                e.style.cssText = "position:absolute;left:-11111px",
                t.style.height = "1px",
                n.style.height = "9px",
                re.appendChild(e).appendChild(t).appendChild(n),
                r = C.getComputedStyle(t),
                a = 3 < parseInt(r.height),
                re.removeChild(e)),
                a
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"]
      , ze = E.createElement("div").style
      , Ue = {};
    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return t || (e in ze ? e : Ue[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = _e.length;
            while (n--)
                if ((e = _e[n] + t)in ze)
                    return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/
      , Ge = /^--/
      , Ye = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Qe = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
            r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i),
            "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function Ze(e, t, n) {
        var r = Ie(e)
          , i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r)
          , o = i
          , a = Be(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function et(e, t, n, r, i) {
        return new et.prototype.init(e,t,n,r,i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Ge.test(t), l = e.style;
                if (u || (t = Xe(s)),
                a = S.cssHooks[t] || S.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Ge.test(t) || (t = Xe(s)),
            (a = S.cssHooks[t] || S.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Be(e, t, r)),
            "normal" === i && t in Qe && (i = Qe[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function() {
                        return Ze(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Ie(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)),
                s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = S.css(e, u)),
                Je(0, t, s)
            }
        }
    }),
    S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (S.cssHooks[i + o].set = Je)
    }),
    S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((S.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || S.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : et.propHooks._default.set(this),
            this
        }
    }).init.prototype = et.prototype,
    (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    S.fx = et.prototype.init,
    S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval),
        S.fx.tick())
    }
    function ut() {
        return C.setTimeout(function() {
            tt = void 0
        }),
        tt = Date.now()
    }
    function lt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function ft(o, e, t) {
        var n, a, r = 0, i = ft.prefilters.length, s = S.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: tt || ut(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = X(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = S.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return S.map(c, ct, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e,
            e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                ft.tweeners[n] = ft.tweeners[n] || [],
                ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    S.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                ot.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = Y.get(e, "display")),
                "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0),
                l = e.style.display || l,
                c = S.css(e, "display"),
                le([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && le([e], !0),
                    p.done(function() {
                        for (r in g || le([e]),
                        Y.remove(e, "fxshow"),
                        d)
                            S.style(e, r, d[r])
                    })),
                    u = ct(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }),
    S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            m(r.old) && r.old.call(this),
            r.queue && S.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t)
              , o = S.speed(e, n, r)
              , a = function() {
                var e = ft(this, S.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = S.timers
                  , r = Y.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }),
    S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    S.timers = [],
    S.fx.tick = function() {
        var e, t = 0, n = S.timers;
        for (tt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(),
        tt = void 0
    }
    ,
    S.fx.timer = function(e) {
        S.timers.push(e),
        S.fx.start()
    }
    ,
    S.fx.interval = 13,
    S.fx.start = function() {
        nt || (nt = !0,
        st())
    }
    ,
    S.fx.stop = function() {
        nt = null
    }
    ,
    S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    rt = E.createElement("input"),
    it = E.createElement("select").appendChild(E.createElement("option")),
    rt.type = "checkbox",
    y.checkOn = "" !== rt.value,
    y.optSelected = it.selected,
    (rt = E.createElement("input")).value = "t",
    rt.type = "radio",
    y.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }),
    S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)),
                void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    pt = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o],
            dt[o] = r,
            r = null != a(e, t, n) ? o : null,
            dt[o] = i),
            r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i
      , gt = /^(?:a|area)$/i;
    function vt(e) {
        return (e.match(P) || []).join(" ")
    }
    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }),
    S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                i = S.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }),
    S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).addClass(t.call(this, e, yt(this)))
                });
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).removeClass(t.call(this, e, yt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " "))
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, yt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0,
                    n = S(this),
                    r = mt(i);
                    while (e = r[t++])
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else
                    void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }),
    S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        },
        y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    y.focusin = "onfocusin"in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/
      , wt = function(e) {
        e.stopPropagation()
    };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[S.expando] ? e : new S.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : S.makeArray(t, [e]),
            c = S.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                    bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                S.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, wt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, wt),
                S.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }),
    S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return S.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r);
                t || e.addEventListener(n, i, !0),
                Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Y.remove(e, r))
            }
        }
    });
    var Tt = C.location
      , Ct = {
        guid: Date.now()
    }
      , Et = /\?/;
    S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e),
        t
    }
    ;
    var St = /\[\]$/
      , kt = /\r?\n/g
      , At = /^(?:submit|button|image|reset|file)$/i
      , Nt = /^(?:input|select|textarea|keygen)/i;
    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function(e, t) {
                r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                Dt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
            S.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                Dt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var jt = /%20/g
      , qt = /#.*$/
      , Lt = /([?&])_=[^&]*/
      , Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ot = /^(?:GET|HEAD)$/
      , Pt = /^\/\//
      , Rt = {}
      , Mt = {}
      , It = "*/".concat("*")
      , Wt = E.createElement("a");
    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Bt(t, i, o, a) {
        var s = {}
          , u = t === Mt;
        function l(e) {
            var r;
            return s[e] = !0,
            S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function $t(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r),
        e
    }
    Wt.href = Tt.href,
    S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = Ht.exec(p))
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""],
            null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)),
            Bt(Rt, v, t, T),
            h)
                return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Ot.test(v.type),
            f = v.url.replace(qt, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(Lt, "$1"),
            o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o),
            v.url = f + o),
            v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
            S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (u = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, T, n)),
                !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}
                ),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g && (m.trigger("ajaxComplete", [T, v]),
                --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }),
    S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n,
            n = t,
            t = void 0),
            S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }),
    S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }
    ,
    S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])),
            t = S(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }
    ,
    S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var _t = {
        0: 200,
        1223: 204
    }
      , zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials"in zt,
    y.ajax = zt = !!zt,
    S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || zt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e),
                e
            }
        }
    }),
    S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = S("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    E.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Ut, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0,
            e
        }
    }),
    S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || S.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? S(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Xt.push(r)),
                o && m(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Ut.childNodes.length),
    S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
        t.head.appendChild(r)) : t = E),
        o = !n && [],
        (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o),
        o && o.length && S(o).remove(),
        S.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    S.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)),
        e = e.slice(0, s)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = S.css(e, "top"),
            u = S.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            m(t) && (t = t.call(e, n, S.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"),
            "number" == typeof f.left && (f.left += "px"),
            c.css(f))
        }
    },
    S.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    S.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === S.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                    i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position"))
                    e = e.offsetParent;
                return e || re
            })
        }
    }),
    S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = $e(y.pixelPosition, function(e, t) {
            if (t)
                return t = Be(e, n),
                Me.test(t) ? S(e).position()[n] + "px" : t
        })
    }),
    S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        m(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || S.guid++,
            i
    }
    ,
    S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }
    ,
    S.isArray = Array.isArray,
    S.parseJSON = JSON.parse,
    S.nodeName = A,
    S.isFunction = m,
    S.isWindow = x,
    S.camelCase = X,
    S.type = w,
    S.now = Date.now,
    S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Yt = C.jQuery
      , Qt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Qt),
        e && C.jQuery === S && (C.jQuery = Yt),
        S
    }
    ,
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
});
/*! Bootstrap v4.4.1 (https://getbootstrap.com/)*/
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, g, u) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function s(t, e, n) {
        return e && i(t.prototype, e),
        n && i(t, n),
        t
    }
    function e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
    }
    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? e(Object(r), !0).forEach(function(t) {
                var e, n, i;
                e = o,
                i = r[n = t],
                n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach(function(t) {
                Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return o
    }
    g = g && g.hasOwnProperty("default") ? g.default : g,
    u = u && u.hasOwnProperty("default") ? u.default : u;
    var n = "transitionend";
    function o(t) {
        var e = this
          , n = !1;
        return g(this).one(_.TRANSITION_END, function() {
            n = !0
        }),
        setTimeout(function() {
            n || _.triggerTransitionEnd(e)
        }, t),
        this
    }
    var _ = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            for (; t += ~~(1e6 * Math.random()),
            document.getElementById(t); )
                ;
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t)
                return 0;
            var e = g(t).css("transition-duration")
              , n = g(t).css("transition-delay")
              , i = parseFloat(e)
              , o = parseFloat(n);
            return i || o ? (e = e.split(",")[0],
            n = n.split(",")[0],
            1e3 * (parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            g(t).trigger(n)
        },
        supportsTransitionEnd: function() {
            return Boolean(n)
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i]
                      , r = e[i]
                      , s = r && _.isElement(r) ? "element" : (a = r,
                    {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s))
                        throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                }
            var a
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" != typeof t.getRootNode)
                return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        },
        jQueryDetection: function() {
            if ("undefined" == typeof g)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = g.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0])
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    _.jQueryDetection(),
    g.fn.emulateTransitionEnd = o,
    g.event.special[_.TRANSITION_END] = {
        bindType: n,
        delegateType: n,
        handle: function(t) {
            if (g(t.target).is(this))
                return t.handleObj.handler.apply(this, arguments)
        }
    };
    var r = "alert"
      , a = "bs.alert"
      , c = "." + a
      , h = g.fn[r]
      , f = {
        CLOSE: "close" + c,
        CLOSED: "closed" + c,
        CLICK_DATA_API: "click" + c + ".data-api"
    }
      , d = "alert"
      , m = "fade"
      , p = "show"
      , v = function() {
        function i(t) {
            this._element = t
        }
        var t = i.prototype;
        return t.close = function(t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, a),
            this._element = null
        }
        ,
        t._getRootElement = function(t) {
            var e = _.getSelectorFromElement(t)
              , n = !1;
            return e && (n = document.querySelector(e)),
            n = n || g(t).closest("." + d)[0]
        }
        ,
        t._triggerCloseEvent = function(t) {
            var e = g.Event(f.CLOSE);
            return g(t).trigger(e),
            e
        }
        ,
        t._removeElement = function(e) {
            var n = this;
            if (g(e).removeClass(p),
            g(e).hasClass(m)) {
                var t = _.getTransitionDurationFromElement(e);
                g(e).one(_.TRANSITION_END, function(t) {
                    return n._destroyElement(e, t)
                }).emulateTransitionEnd(t)
            } else
                this._destroyElement(e)
        }
        ,
        t._destroyElement = function(t) {
            g(t).detach().trigger(f.CLOSED).remove()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this)
                  , e = t.data(a);
                e || (e = new i(this),
                t.data(a, e)),
                "close" === n && e[n](this)
            })
        }
        ,
        i._handleDismiss = function(e) {
            return function(t) {
                t && t.preventDefault(),
                e.close(this)
            }
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]),
        i
    }();
    g(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', v._handleDismiss(new v)),
    g.fn[r] = v._jQueryInterface,
    g.fn[r].Constructor = v,
    g.fn[r].noConflict = function() {
        return g.fn[r] = h,
        v._jQueryInterface
    }
    ;
    var y = "button"
      , E = "bs.button"
      , C = "." + E
      , T = ".data-api"
      , b = g.fn[y]
      , S = "active"
      , D = "btn"
      , I = "focus"
      , w = '[data-toggle^="button"]'
      , A = '[data-toggle="buttons"]'
      , N = '[data-toggle="button"]'
      , O = '[data-toggle="buttons"] .btn'
      , k = 'input:not([type="hidden"])'
      , P = ".active"
      , L = ".btn"
      , j = {
        CLICK_DATA_API: "click" + C + T,
        FOCUS_BLUR_DATA_API: "focus" + C + T + " blur" + C + T,
        LOAD_DATA_API: "load" + C + T
    }
      , H = function() {
        function n(t) {
            this._element = t
        }
        var t = n.prototype;
        return t.toggle = function() {
            var t = !0
              , e = !0
              , n = g(this._element).closest(A)[0];
            if (n) {
                var i = this._element.querySelector(k);
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && this._element.classList.contains(S))
                            t = !1;
                        else {
                            var o = n.querySelector(P);
                            o && g(o).removeClass(S)
                        }
                    else
                        "checkbox" === i.type ? "LABEL" === this._element.tagName && i.checked === this._element.classList.contains(S) && (t = !1) : t = !1;
                    t && (i.checked = !this._element.classList.contains(S),
                    g(i).trigger("change")),
                    i.focus(),
                    e = !1
                }
            }
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)),
            t && g(this._element).toggleClass(S))
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, E),
            this._element = null
        }
        ,
        n._jQueryInterface = function(e) {
            return this.each(function() {
                var t = g(this).data(E);
                t || (t = new n(this),
                g(this).data(E, t)),
                "toggle" === e && t[e]()
            })
        }
        ,
        s(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]),
        n
    }();
    g(document).on(j.CLICK_DATA_API, w, function(t) {
        var e = t.target;
        if (g(e).hasClass(D) || (e = g(e).closest(L)[0]),
        !e || e.hasAttribute("disabled") || e.classList.contains("disabled"))
            t.preventDefault();
        else {
            var n = e.querySelector(k);
            if (n && (n.hasAttribute("disabled") || n.classList.contains("disabled")))
                return void t.preventDefault();
            H._jQueryInterface.call(g(e), "toggle")
        }
    }).on(j.FOCUS_BLUR_DATA_API, w, function(t) {
        var e = g(t.target).closest(L)[0];
        g(e).toggleClass(I, /^focus(in)?$/.test(t.type))
    }),
    g(window).on(j.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(O)), e = 0, n = t.length; e < n; e++) {
            var i = t[e]
              , o = i.querySelector(k);
            o.checked || o.hasAttribute("checked") ? i.classList.add(S) : i.classList.remove(S)
        }
        for (var r = 0, s = (t = [].slice.call(document.querySelectorAll(N))).length; r < s; r++) {
            var a = t[r];
            "true" === a.getAttribute("aria-pressed") ? a.classList.add(S) : a.classList.remove(S)
        }
    }),
    g.fn[y] = H._jQueryInterface,
    g.fn[y].Constructor = H,
    g.fn[y].noConflict = function() {
        return g.fn[y] = b,
        H._jQueryInterface
    }
    ;
    var R = "carousel"
      , x = "bs.carousel"
      , F = "." + x
      , U = ".data-api"
      , W = g.fn[R]
      , q = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , M = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , K = "next"
      , Q = "prev"
      , B = "left"
      , V = "right"
      , Y = {
        SLIDE: "slide" + F,
        SLID: "slid" + F,
        KEYDOWN: "keydown" + F,
        MOUSEENTER: "mouseenter" + F,
        MOUSELEAVE: "mouseleave" + F,
        TOUCHSTART: "touchstart" + F,
        TOUCHMOVE: "touchmove" + F,
        TOUCHEND: "touchend" + F,
        POINTERDOWN: "pointerdown" + F,
        POINTERUP: "pointerup" + F,
        DRAG_START: "dragstart" + F,
        LOAD_DATA_API: "load" + F + U,
        CLICK_DATA_API: "click" + F + U
    }
      , z = "carousel"
      , X = "active"
      , $ = "slide"
      , G = "carousel-item-right"
      , J = "carousel-item-left"
      , Z = "carousel-item-next"
      , tt = "carousel-item-prev"
      , et = "pointer-event"
      , nt = ".active"
      , it = ".active.carousel-item"
      , ot = ".carousel-item"
      , rt = ".carousel-item img"
      , st = ".carousel-item-next, .carousel-item-prev"
      , at = ".carousel-indicators"
      , lt = "[data-slide], [data-slide-to]"
      , ct = '[data-ride="carousel"]'
      , ht = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , ut = function() {
        function r(t, e) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(e),
            this._element = t,
            this._indicatorsElement = this._element.querySelector(at),
            this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints,
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
            this._addEventListeners()
        }
        var t = r.prototype;
        return t.next = function() {
            this._isSliding || this._slide(K)
        }
        ,
        t.nextWhenVisible = function() {
            !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next()
        }
        ,
        t.prev = function() {
            this._isSliding || this._slide(Q)
        }
        ,
        t.pause = function(t) {
            t || (this._isPaused = !0),
            this._element.querySelector(st) && (_.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        t.cycle = function(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        t.to = function(t) {
            var e = this;
            this._activeElement = this._element.querySelector(it);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                    g(this._element).one(Y.SLID, function() {
                        return e.to(t)
                    });
                else {
                    if (n === t)
                        return this.pause(),
                        void this.cycle();
                    var i = n < t ? K : Q;
                    this._slide(i, this._items[t])
                }
        }
        ,
        t.dispose = function() {
            g(this._element).off(F),
            g.removeData(this._element, x),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, q, {}, t),
            _.typeCheckConfig(R, t, M),
            t
        }
        ,
        t._handleSwipe = function() {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
                var e = t / this.touchDeltaX;
                (this.touchDeltaX = 0) < e && this.prev(),
                e < 0 && this.next()
            }
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            this._config.keyboard && g(this._element).on(Y.KEYDOWN, function(t) {
                return e._keydown(t)
            }),
            "hover" === this._config.pause && g(this._element).on(Y.MOUSEENTER, function(t) {
                return e.pause(t)
            }).on(Y.MOUSELEAVE, function(t) {
                return e.cycle(t)
            }),
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        t._addTouchEventListeners = function() {
            var e = this;
            if (this._touchSupported) {
                var n = function(t) {
                    e._pointerEvent && ht[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                }
                  , i = function(t) {
                    e._pointerEvent && ht[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                    e._handleSwipe(),
                    "hover" === e._config.pause && (e.pause(),
                    e.touchTimeout && clearTimeout(e.touchTimeout),
                    e.touchTimeout = setTimeout(function(t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval))
                };
                g(this._element.querySelectorAll(rt)).on(Y.DRAG_START, function(t) {
                    return t.preventDefault()
                }),
                this._pointerEvent ? (g(this._element).on(Y.POINTERDOWN, function(t) {
                    return n(t)
                }),
                g(this._element).on(Y.POINTERUP, function(t) {
                    return i(t)
                }),
                this._element.classList.add(et)) : (g(this._element).on(Y.TOUCHSTART, function(t) {
                    return n(t)
                }),
                g(this._element).on(Y.TOUCHMOVE, function(t) {
                    return function(t) {
                        t.originalEvent.touches && 1 < t.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                    }(t)
                }),
                g(this._element).on(Y.TOUCHEND, function(t) {
                    return i(t)
                }))
            }
        }
        ,
        t._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName))
                switch (t.which) {
                case 37:
                    t.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    t.preventDefault(),
                    this.next()
                }
        }
        ,
        t._getItemIndex = function(t) {
            return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(ot)) : [],
            this._items.indexOf(t)
        }
        ,
        t._getItemByDirection = function(t, e) {
            var n = t === K
              , i = t === Q
              , o = this._getItemIndex(e)
              , r = this._items.length - 1;
            if ((i && 0 === o || n && o === r) && !this._config.wrap)
                return e;
            var s = (o + (t === Q ? -1 : 1)) % this._items.length;
            return -1 == s ? this._items[this._items.length - 1] : this._items[s]
        }
        ,
        t._triggerSlideEvent = function(t, e) {
            var n = this._getItemIndex(t)
              , i = this._getItemIndex(this._element.querySelector(it))
              , o = g.Event(Y.SLIDE, {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n
            });
            return g(this._element).trigger(o),
            o
        }
        ,
        t._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
                var e = [].slice.call(this._indicatorsElement.querySelectorAll(nt));
                g(e).removeClass(X);
                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                n && g(n).addClass(X)
            }
        }
        ,
        t._slide = function(t, e) {
            var n, i, o, r = this, s = this._element.querySelector(it), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), h = Boolean(this._interval);
            if (o = t === K ? (n = J,
            i = Z,
            B) : (n = G,
            i = tt,
            V),
            l && g(l).hasClass(X))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                this._isSliding = !0,
                h && this.pause(),
                this._setActiveIndicatorElement(l);
                var u = g.Event(Y.SLID, {
                    relatedTarget: l,
                    direction: o,
                    from: a,
                    to: c
                });
                if (g(this._element).hasClass($)) {
                    g(l).addClass(i),
                    _.reflow(l),
                    g(s).addClass(n),
                    g(l).addClass(n);
                    var f = parseInt(l.getAttribute("data-interval"), 10);
                    f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                    this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval;
                    var d = _.getTransitionDurationFromElement(s);
                    g(s).one(_.TRANSITION_END, function() {
                        g(l).removeClass(n + " " + i).addClass(X),
                        g(s).removeClass(X + " " + i + " " + n),
                        r._isSliding = !1,
                        setTimeout(function() {
                            return g(r._element).trigger(u)
                        }, 0)
                    }).emulateTransitionEnd(d)
                } else
                    g(s).removeClass(X),
                    g(l).addClass(X),
                    this._isSliding = !1,
                    g(this._element).trigger(u);
                h && this.cycle()
            }
        }
        ,
        r._jQueryInterface = function(i) {
            return this.each(function() {
                var t = g(this).data(x)
                  , e = l({}, q, {}, g(this).data());
                "object" == typeof i && (e = l({}, e, {}, i));
                var n = "string" == typeof i ? i : e.slide;
                if (t || (t = new r(this,e),
                g(this).data(x, t)),
                "number" == typeof i)
                    t.to(i);
                else if ("string" == typeof n) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                } else
                    e.interval && e.ride && (t.pause(),
                    t.cycle())
            })
        }
        ,
        r._dataApiClickHandler = function(t) {
            var e = _.getSelectorFromElement(this);
            if (e) {
                var n = g(e)[0];
                if (n && g(n).hasClass(z)) {
                    var i = l({}, g(n).data(), {}, g(this).data())
                      , o = this.getAttribute("data-slide-to");
                    o && (i.interval = !1),
                    r._jQueryInterface.call(g(n), i),
                    o && g(n).data(x).to(o),
                    t.preventDefault()
                }
            }
        }
        ,
        s(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return q
            }
        }]),
        r
    }();
    g(document).on(Y.CLICK_DATA_API, lt, ut._dataApiClickHandler),
    g(window).on(Y.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(ct)), e = 0, n = t.length; e < n; e++) {
            var i = g(t[e]);
            ut._jQueryInterface.call(i, i.data())
        }
    }),
    g.fn[R] = ut._jQueryInterface,
    g.fn[R].Constructor = ut,
    g.fn[R].noConflict = function() {
        return g.fn[R] = W,
        ut._jQueryInterface
    }
    ;
    var ft = "collapse"
      , dt = "bs.collapse"
      , gt = "." + dt
      , _t = g.fn[ft]
      , mt = {
        toggle: !0,
        parent: ""
    }
      , pt = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , vt = {
        SHOW: "show" + gt,
        SHOWN: "shown" + gt,
        HIDE: "hide" + gt,
        HIDDEN: "hidden" + gt,
        CLICK_DATA_API: "click" + gt + ".data-api"
    }
      , yt = "show"
      , Et = "collapse"
      , Ct = "collapsing"
      , Tt = "collapsed"
      , bt = "width"
      , St = "height"
      , Dt = ".show, .collapsing"
      , It = '[data-toggle="collapse"]'
      , wt = function() {
        function a(e, t) {
            this._isTransitioning = !1,
            this._element = e,
            this._config = this._getConfig(t),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(It)), i = 0, o = n.length; i < o; i++) {
                var r = n[i]
                  , s = _.getSelectorFromElement(r)
                  , a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                    return t === e
                });
                null !== s && 0 < a.length && (this._selector = s,
                this._triggerArray.push(r))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var t = a.prototype;
        return t.toggle = function() {
            g(this._element).hasClass(yt) ? this.hide() : this.show()
        }
        ,
        t.show = function() {
            var t, e, n = this;
            if (!this._isTransitioning && !g(this._element).hasClass(yt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Dt)).filter(function(t) {
                return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(Et)
            })).length && (t = null),
            !(t && (e = g(t).not(this._selector).data(dt)) && e._isTransitioning))) {
                var i = g.Event(vt.SHOW);
                if (g(this._element).trigger(i),
                !i.isDefaultPrevented()) {
                    t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"),
                    e || g(t).data(dt, null));
                    var o = this._getDimension();
                    g(this._element).removeClass(Et).addClass(Ct),
                    this._element.style[o] = 0,
                    this._triggerArray.length && g(this._triggerArray).removeClass(Tt).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var r = "scroll" + (o[0].toUpperCase() + o.slice(1))
                      , s = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, function() {
                        g(n._element).removeClass(Ct).addClass(Et).addClass(yt),
                        n._element.style[o] = "",
                        n.setTransitioning(!1),
                        g(n._element).trigger(vt.SHOWN)
                    }).emulateTransitionEnd(s),
                    this._element.style[o] = this._element[r] + "px"
                }
            }
        }
        ,
        t.hide = function() {
            var t = this;
            if (!this._isTransitioning && g(this._element).hasClass(yt)) {
                var e = g.Event(vt.HIDE);
                if (g(this._element).trigger(e),
                !e.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                    _.reflow(this._element),
                    g(this._element).addClass(Ct).removeClass(Et).removeClass(yt);
                    var i = this._triggerArray.length;
                    if (0 < i)
                        for (var o = 0; o < i; o++) {
                            var r = this._triggerArray[o]
                              , s = _.getSelectorFromElement(r);
                            if (null !== s)
                                g([].slice.call(document.querySelectorAll(s))).hasClass(yt) || g(r).addClass(Tt).attr("aria-expanded", !1)
                        }
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    var a = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, function() {
                        t.setTransitioning(!1),
                        g(t._element).removeClass(Ct).addClass(Et).trigger(vt.HIDDEN)
                    }).emulateTransitionEnd(a)
                }
            }
        }
        ,
        t.setTransitioning = function(t) {
            this._isTransitioning = t
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, dt),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        t._getConfig = function(t) {
            return (t = l({}, mt, {}, t)).toggle = Boolean(t.toggle),
            _.typeCheckConfig(ft, t, pt),
            t
        }
        ,
        t._getDimension = function() {
            return g(this._element).hasClass(bt) ? bt : St
        }
        ,
        t._getParent = function() {
            var t, n = this;
            _.isElement(this._config.parent) ? (t = this._config.parent,
            "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
            var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
              , i = [].slice.call(t.querySelectorAll(e));
            return g(i).each(function(t, e) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
            }),
            t
        }
        ,
        t._addAriaAndCollapsedClass = function(t, e) {
            var n = g(t).hasClass(yt);
            e.length && g(e).toggleClass(Tt, !n).attr("aria-expanded", n)
        }
        ,
        a._getTargetFromElement = function(t) {
            var e = _.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null
        }
        ,
        a._jQueryInterface = function(i) {
            return this.each(function() {
                var t = g(this)
                  , e = t.data(dt)
                  , n = l({}, mt, {}, t.data(), {}, "object" == typeof i && i ? i : {});
                if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                e || (e = new a(this,n),
                t.data(dt, e)),
                "string" == typeof i) {
                    if ("undefined" == typeof e[i])
                        throw new TypeError('No method named "' + i + '"');
                    e[i]()
                }
            })
        }
        ,
        s(a, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return mt
            }
        }]),
        a
    }();
    g(document).on(vt.CLICK_DATA_API, It, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = g(this)
          , e = _.getSelectorFromElement(this)
          , i = [].slice.call(document.querySelectorAll(e));
        g(i).each(function() {
            var t = g(this)
              , e = t.data(dt) ? "toggle" : n.data();
            wt._jQueryInterface.call(t, e)
        })
    }),
    g.fn[ft] = wt._jQueryInterface,
    g.fn[ft].Constructor = wt,
    g.fn[ft].noConflict = function() {
        return g.fn[ft] = _t,
        wt._jQueryInterface
    }
    ;
    var At = "dropdown"
      , Nt = "bs.dropdown"
      , Ot = "." + Nt
      , kt = ".data-api"
      , Pt = g.fn[At]
      , Lt = new RegExp("38|40|27")
      , jt = {
        HIDE: "hide" + Ot,
        HIDDEN: "hidden" + Ot,
        SHOW: "show" + Ot,
        SHOWN: "shown" + Ot,
        CLICK: "click" + Ot,
        CLICK_DATA_API: "click" + Ot + kt,
        KEYDOWN_DATA_API: "keydown" + Ot + kt,
        KEYUP_DATA_API: "keyup" + Ot + kt
    }
      , Ht = "disabled"
      , Rt = "show"
      , xt = "dropup"
      , Ft = "dropright"
      , Ut = "dropleft"
      , Wt = "dropdown-menu-right"
      , qt = "position-static"
      , Mt = '[data-toggle="dropdown"]'
      , Kt = ".dropdown form"
      , Qt = ".dropdown-menu"
      , Bt = ".navbar-nav"
      , Vt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
      , Yt = "top-start"
      , zt = "top-end"
      , Xt = "bottom-start"
      , $t = "bottom-end"
      , Gt = "right-start"
      , Jt = "left-start"
      , Zt = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }
      , te = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }
      , ee = function() {
        function c(t, e) {
            this._element = t,
            this._popper = null,
            this._config = this._getConfig(e),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var t = c.prototype;
        return t.toggle = function() {
            if (!this._element.disabled && !g(this._element).hasClass(Ht)) {
                var t = g(this._menu).hasClass(Rt);
                c._clearMenus(),
                t || this.show(!0)
            }
        }
        ,
        t.show = function(t) {
            if (void 0 === t && (t = !1),
            !(this._element.disabled || g(this._element).hasClass(Ht) || g(this._menu).hasClass(Rt))) {
                var e = {
                    relatedTarget: this._element
                }
                  , n = g.Event(jt.SHOW, e)
                  , i = c._getParentFromElement(this._element);
                if (g(i).trigger(n),
                !n.isDefaultPrevented()) {
                    if (!this._inNavbar && t) {
                        if ("undefined" == typeof u)
                            throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                        var o = this._element;
                        "parent" === this._config.reference ? o = i : _.isElement(this._config.reference) && (o = this._config.reference,
                        "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])),
                        "scrollParent" !== this._config.boundary && g(i).addClass(qt),
                        this._popper = new u(o,this._menu,this._getPopperConfig())
                    }
                    "ontouchstart"in document.documentElement && 0 === g(i).closest(Bt).length && g(document.body).children().on("mouseover", null, g.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    g(this._menu).toggleClass(Rt),
                    g(i).toggleClass(Rt).trigger(g.Event(jt.SHOWN, e))
                }
            }
        }
        ,
        t.hide = function() {
            if (!this._element.disabled && !g(this._element).hasClass(Ht) && g(this._menu).hasClass(Rt)) {
                var t = {
                    relatedTarget: this._element
                }
                  , e = g.Event(jt.HIDE, t)
                  , n = c._getParentFromElement(this._element);
                g(n).trigger(e),
                e.isDefaultPrevented() || (this._popper && this._popper.destroy(),
                g(this._menu).toggleClass(Rt),
                g(n).toggleClass(Rt).trigger(g.Event(jt.HIDDEN, t)))
            }
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, Nt),
            g(this._element).off(Ot),
            this._element = null,
            (this._menu = null) !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        t.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            g(this._element).on(jt.CLICK, function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e.toggle()
            })
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, this.constructor.Default, {}, g(this._element).data(), {}, t),
            _.typeCheckConfig(At, t, this.constructor.DefaultType),
            t
        }
        ,
        t._getMenuElement = function() {
            if (!this._menu) {
                var t = c._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(Qt))
            }
            return this._menu
        }
        ,
        t._getPlacement = function() {
            var t = g(this._element.parentNode)
              , e = Xt;
            return t.hasClass(xt) ? (e = Yt,
            g(this._menu).hasClass(Wt) && (e = zt)) : t.hasClass(Ft) ? e = Gt : t.hasClass(Ut) ? e = Jt : g(this._menu).hasClass(Wt) && (e = $t),
            e
        }
        ,
        t._detectNavbar = function() {
            return 0 < g(this._element).closest(".navbar").length
        }
        ,
        t._getOffset = function() {
            var e = this
              , t = {};
            return "function" == typeof this._config.offset ? t.fn = function(t) {
                return t.offsets = l({}, t.offsets, {}, e._config.offset(t.offsets, e._element) || {}),
                t
            }
            : t.offset = this._config.offset,
            t
        }
        ,
        t._getPopperConfig = function() {
            var t = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (t.modifiers.applyStyle = {
                enabled: !1
            }),
            l({}, t, {}, this._config.popperConfig)
        }
        ,
        c._jQueryInterface = function(e) {
            return this.each(function() {
                var t = g(this).data(Nt);
                if (t || (t = new c(this,"object" == typeof e ? e : null),
                g(this).data(Nt, t)),
                "string" == typeof e) {
                    if ("undefined" == typeof t[e])
                        throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }
        ,
        c._clearMenus = function(t) {
            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                for (var e = [].slice.call(document.querySelectorAll(Mt)), n = 0, i = e.length; n < i; n++) {
                    var o = c._getParentFromElement(e[n])
                      , r = g(e[n]).data(Nt)
                      , s = {
                        relatedTarget: e[n]
                    };
                    if (t && "click" === t.type && (s.clickEvent = t),
                    r) {
                        var a = r._menu;
                        if (g(o).hasClass(Rt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
                            var l = g.Event(jt.HIDE, s);
                            g(o).trigger(l),
                            l.isDefaultPrevented() || ("ontouchstart"in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                            e[n].setAttribute("aria-expanded", "false"),
                            r._popper && r._popper.destroy(),
                            g(a).removeClass(Rt),
                            g(o).removeClass(Rt).trigger(g.Event(jt.HIDDEN, s)))
                        }
                    }
                }
        }
        ,
        c._getParentFromElement = function(t) {
            var e, n = _.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)),
            e || t.parentNode
        }
        ,
        c._dataApiKeydownHandler = function(t) {
            if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(Qt).length)) : Lt.test(t.which)) && (t.preventDefault(),
            t.stopPropagation(),
            !this.disabled && !g(this).hasClass(Ht))) {
                var e = c._getParentFromElement(this)
                  , n = g(e).hasClass(Rt);
                if (n || 27 !== t.which)
                    if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                        var i = [].slice.call(e.querySelectorAll(Vt)).filter(function(t) {
                            return g(t).is(":visible")
                        });
                        if (0 !== i.length) {
                            var o = i.indexOf(t.target);
                            38 === t.which && 0 < o && o--,
                            40 === t.which && o < i.length - 1 && o++,
                            o < 0 && (o = 0),
                            i[o].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var r = e.querySelector(Mt);
                            g(r).trigger("focus")
                        }
                        g(this).trigger("click")
                    }
            }
        }
        ,
        s(c, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Zt
            }
        }, {
            key: "DefaultType",
            get: function() {
                return te
            }
        }]),
        c
    }();
    g(document).on(jt.KEYDOWN_DATA_API, Mt, ee._dataApiKeydownHandler).on(jt.KEYDOWN_DATA_API, Qt, ee._dataApiKeydownHandler).on(jt.CLICK_DATA_API + " " + jt.KEYUP_DATA_API, ee._clearMenus).on(jt.CLICK_DATA_API, Mt, function(t) {
        t.preventDefault(),
        t.stopPropagation(),
        ee._jQueryInterface.call(g(this), "toggle")
    }).on(jt.CLICK_DATA_API, Kt, function(t) {
        t.stopPropagation()
    }),
    g.fn[At] = ee._jQueryInterface,
    g.fn[At].Constructor = ee,
    g.fn[At].noConflict = function() {
        return g.fn[At] = Pt,
        ee._jQueryInterface
    }
    ;
    var ne = "modal"
      , ie = "bs.modal"
      , oe = "." + ie
      , re = g.fn[ne]
      , se = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , ae = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , le = {
        HIDE: "hide" + oe,
        HIDE_PREVENTED: "hidePrevented" + oe,
        HIDDEN: "hidden" + oe,
        SHOW: "show" + oe,
        SHOWN: "shown" + oe,
        FOCUSIN: "focusin" + oe,
        RESIZE: "resize" + oe,
        CLICK_DISMISS: "click.dismiss" + oe,
        KEYDOWN_DISMISS: "keydown.dismiss" + oe,
        MOUSEUP_DISMISS: "mouseup.dismiss" + oe,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + oe,
        CLICK_DATA_API: "click" + oe + ".data-api"
    }
      , ce = "modal-dialog-scrollable"
      , he = "modal-scrollbar-measure"
      , ue = "modal-backdrop"
      , fe = "modal-open"
      , de = "fade"
      , ge = "show"
      , _e = "modal-static"
      , me = ".modal-dialog"
      , pe = ".modal-body"
      , ve = '[data-toggle="modal"]'
      , ye = '[data-dismiss="modal"]'
      , Ee = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , Ce = ".sticky-top"
      , Te = function() {
        function o(t, e) {
            this._config = this._getConfig(e),
            this._element = t,
            this._dialog = t.querySelector(me),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        var t = o.prototype;
        return t.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        ,
        t.show = function(t) {
            var e = this;
            if (!this._isShown && !this._isTransitioning) {
                g(this._element).hasClass(de) && (this._isTransitioning = !0);
                var n = g.Event(le.SHOW, {
                    relatedTarget: t
                });
                g(this._element).trigger(n),
                this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                g(this._element).on(le.CLICK_DISMISS, ye, function(t) {
                    return e.hide(t)
                }),
                g(this._dialog).on(le.MOUSEDOWN_DISMISS, function() {
                    g(e._element).one(le.MOUSEUP_DISMISS, function(t) {
                        g(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(function() {
                    return e._showElement(t)
                }))
            }
        }
        ,
        t.hide = function(t) {
            var e = this;
            if (t && t.preventDefault(),
            this._isShown && !this._isTransitioning) {
                var n = g.Event(le.HIDE);
                if (g(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = g(this._element).hasClass(de);
                    if (i && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    g(document).off(le.FOCUSIN),
                    g(this._element).removeClass(ge),
                    g(this._element).off(le.CLICK_DISMISS),
                    g(this._dialog).off(le.MOUSEDOWN_DISMISS),
                    i) {
                        var o = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function(t) {
                            return e._hideModal(t)
                        }).emulateTransitionEnd(o)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        t.dispose = function() {
            [window, this._element, this._dialog].forEach(function(t) {
                return g(t).off(oe)
            }),
            g(document).off(le.FOCUSIN),
            g.removeData(this._element, ie),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        t.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, se, {}, t),
            _.typeCheckConfig(ne, t, ae),
            t
        }
        ,
        t._triggerBackdropTransition = function() {
            var t = this;
            if ("static" === this._config.backdrop) {
                var e = g.Event(le.HIDE_PREVENTED);
                if (g(this._element).trigger(e),
                e.defaultPrevented)
                    return;
                this._element.classList.add(_e);
                var n = _.getTransitionDurationFromElement(this._element);
                g(this._element).one(_.TRANSITION_END, function() {
                    t._element.classList.remove(_e)
                }).emulateTransitionEnd(n),
                this._element.focus()
            } else
                this.hide()
        }
        ,
        t._showElement = function(t) {
            var e = this
              , n = g(this._element).hasClass(de)
              , i = this._dialog ? this._dialog.querySelector(pe) : null;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            g(this._dialog).hasClass(ce) && i ? i.scrollTop = 0 : this._element.scrollTop = 0,
            n && _.reflow(this._element),
            g(this._element).addClass(ge),
            this._config.focus && this._enforceFocus();
            function o() {
                e._config.focus && e._element.focus(),
                e._isTransitioning = !1,
                g(e._element).trigger(r)
            }
            var r = g.Event(le.SHOWN, {
                relatedTarget: t
            });
            if (n) {
                var s = _.getTransitionDurationFromElement(this._dialog);
                g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(s)
            } else
                o()
        }
        ,
        t._enforceFocus = function() {
            var e = this;
            g(document).off(le.FOCUSIN).on(le.FOCUSIN, function(t) {
                document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus()
            })
        }
        ,
        t._setEscapeEvent = function() {
            var e = this;
            this._isShown && this._config.keyboard ? g(this._element).on(le.KEYDOWN_DISMISS, function(t) {
                27 === t.which && e._triggerBackdropTransition()
            }) : this._isShown || g(this._element).off(le.KEYDOWN_DISMISS)
        }
        ,
        t._setResizeEvent = function() {
            var e = this;
            this._isShown ? g(window).on(le.RESIZE, function(t) {
                return e.handleUpdate(t)
            }) : g(window).off(le.RESIZE)
        }
        ,
        t._hideModal = function() {
            var t = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                g(document.body).removeClass(fe),
                t._resetAdjustments(),
                t._resetScrollbar(),
                g(t._element).trigger(le.HIDDEN)
            })
        }
        ,
        t._removeBackdrop = function() {
            this._backdrop && (g(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        t._showBackdrop = function(t) {
            var e = this
              , n = g(this._element).hasClass(de) ? de : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = ue,
                n && this._backdrop.classList.add(n),
                g(this._backdrop).appendTo(document.body),
                g(this._element).on(le.CLICK_DISMISS, function(t) {
                    e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition()
                }),
                n && _.reflow(this._backdrop),
                g(this._backdrop).addClass(ge),
                !t)
                    return;
                if (!n)
                    return void t();
                var i = _.getTransitionDurationFromElement(this._backdrop);
                g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
                g(this._backdrop).removeClass(ge);
                var o = function() {
                    e._removeBackdrop(),
                    t && t()
                };
                if (g(this._element).hasClass(de)) {
                    var r = _.getTransitionDurationFromElement(this._backdrop);
                    g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                } else
                    o()
            } else
                t && t()
        }
        ,
        t._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        t._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        t._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = t.left + t.right < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        t._setScrollbar = function() {
            var o = this;
            if (this._isBodyOverflowing) {
                var t = [].slice.call(document.querySelectorAll(Ee))
                  , e = [].slice.call(document.querySelectorAll(Ce));
                g(t).each(function(t, e) {
                    var n = e.style.paddingRight
                      , i = g(e).css("padding-right");
                    g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                }),
                g(e).each(function(t, e) {
                    var n = e.style.marginRight
                      , i = g(e).css("margin-right");
                    g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                });
                var n = document.body.style.paddingRight
                  , i = g(document.body).css("padding-right");
                g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
            }
            g(document.body).addClass(fe)
        }
        ,
        t._resetScrollbar = function() {
            var t = [].slice.call(document.querySelectorAll(Ee));
            g(t).each(function(t, e) {
                var n = g(e).data("padding-right");
                g(e).removeData("padding-right"),
                e.style.paddingRight = n || ""
            });
            var e = [].slice.call(document.querySelectorAll("" + Ce));
            g(e).each(function(t, e) {
                var n = g(e).data("margin-right");
                "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right")
            });
            var n = g(document.body).data("padding-right");
            g(document.body).removeData("padding-right"),
            document.body.style.paddingRight = n || ""
        }
        ,
        t._getScrollbarWidth = function() {
            var t = document.createElement("div");
            t.className = he,
            document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t),
            e
        }
        ,
        o._jQueryInterface = function(n, i) {
            return this.each(function() {
                var t = g(this).data(ie)
                  , e = l({}, se, {}, g(this).data(), {}, "object" == typeof n && n ? n : {});
                if (t || (t = new o(this,e),
                g(this).data(ie, t)),
                "string" == typeof n) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n](i)
                } else
                    e.show && t.show(i)
            })
        }
        ,
        s(o, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return se
            }
        }]),
        o
    }();
    g(document).on(le.CLICK_DATA_API, ve, function(t) {
        var e, n = this, i = _.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var o = g(e).data(ie) ? "toggle" : l({}, g(e).data(), {}, g(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var r = g(e).one(le.SHOW, function(t) {
            t.isDefaultPrevented() || r.one(le.HIDDEN, function() {
                g(n).is(":visible") && n.focus()
            })
        });
        Te._jQueryInterface.call(g(e), o, this)
    }),
    g.fn[ne] = Te._jQueryInterface,
    g.fn[ne].Constructor = Te,
    g.fn[ne].noConflict = function() {
        return g.fn[ne] = re,
        Te._jQueryInterface
    }
    ;
    var be = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , Se = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , De = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
      , Ie = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function we(t, r, e) {
        if (0 === t.length)
            return t;
        if (e && "function" == typeof e)
            return e(t);
        for (var n = (new window.DOMParser).parseFromString(t, "text/html"), s = Object.keys(r), a = [].slice.call(n.body.querySelectorAll("*")), i = function(t) {
            var e = a[t]
              , n = e.nodeName.toLowerCase();
            if (-1 === s.indexOf(e.nodeName.toLowerCase()))
                return e.parentNode.removeChild(e),
                "continue";
            var i = [].slice.call(e.attributes)
              , o = [].concat(r["*"] || [], r[n] || []);
            i.forEach(function(t) {
                !function(t, e) {
                    var n = t.nodeName.toLowerCase();
                    if (-1 !== e.indexOf(n))
                        return -1 === be.indexOf(n) || Boolean(t.nodeValue.match(De) || t.nodeValue.match(Ie));
                    for (var i = e.filter(function(t) {
                        return t instanceof RegExp
                    }), o = 0, r = i.length; o < r; o++)
                        if (n.match(i[o]))
                            return !0;
                    return !1
                }(t, o) && e.removeAttribute(t.nodeName)
            })
        }, o = 0, l = a.length; o < l; o++)
            i(o);
        return n.body.innerHTML
    }
    var Ae = "tooltip"
      , Ne = "bs.tooltip"
      , Oe = "." + Ne
      , ke = g.fn[Ae]
      , Pe = "bs-tooltip"
      , Le = new RegExp("(^|\\s)" + Pe + "\\S+","g")
      , je = ["sanitize", "whiteList", "sanitizeFn"]
      , He = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
    }
      , Re = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , xe = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: Se,
        popperConfig: null
    }
      , Fe = "show"
      , Ue = "out"
      , We = {
        HIDE: "hide" + Oe,
        HIDDEN: "hidden" + Oe,
        SHOW: "show" + Oe,
        SHOWN: "shown" + Oe,
        INSERTED: "inserted" + Oe,
        CLICK: "click" + Oe,
        FOCUSIN: "focusin" + Oe,
        FOCUSOUT: "focusout" + Oe,
        MOUSEENTER: "mouseenter" + Oe,
        MOUSELEAVE: "mouseleave" + Oe
    }
      , qe = "fade"
      , Me = "show"
      , Ke = ".tooltip-inner"
      , Qe = ".arrow"
      , Be = "hover"
      , Ve = "focus"
      , Ye = "click"
      , ze = "manual"
      , Xe = function() {
        function i(t, e) {
            if ("undefined" == typeof u)
                throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = t,
            this.config = this._getConfig(e),
            this.tip = null,
            this._setListeners()
        }
        var t = i.prototype;
        return t.enable = function() {
            this._isEnabled = !0
        }
        ,
        t.disable = function() {
            this._isEnabled = !1
        }
        ,
        t.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        t.toggle = function(t) {
            if (this._isEnabled)
                if (t) {
                    var e = this.constructor.DATA_KEY
                      , n = g(t.currentTarget).data(e);
                    n || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                    g(t.currentTarget).data(e, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (g(this.getTipElement()).hasClass(Me))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        t.dispose = function() {
            clearTimeout(this._timeout),
            g.removeData(this.element, this.constructor.DATA_KEY),
            g(this.element).off(this.constructor.EVENT_KEY),
            g(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
            this.tip && g(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        t.show = function() {
            var e = this;
            if ("none" === g(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var t = g.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                g(this.element).trigger(t);
                var n = _.findShadowRoot(this.element)
                  , i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                if (t.isDefaultPrevented() || !i)
                    return;
                var o = this.getTipElement()
                  , r = _.getUID(this.constructor.NAME);
                o.setAttribute("id", r),
                this.element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && g(o).addClass(qe);
                var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement
                  , a = this._getAttachment(s);
                this.addAttachmentClass(a);
                var l = this._getContainer();
                g(o).data(this.constructor.DATA_KEY, this),
                g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l),
                g(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new u(this.element,o,this._getPopperConfig(a)),
                g(o).addClass(Me),
                "ontouchstart"in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
                var c = function() {
                    e.config.animation && e._fixTransition();
                    var t = e._hoverState;
                    e._hoverState = null,
                    g(e.element).trigger(e.constructor.Event.SHOWN),
                    t === Ue && e._leave(null, e)
                };
                if (g(this.tip).hasClass(qe)) {
                    var h = _.getTransitionDurationFromElement(this.tip);
                    g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h)
                } else
                    c()
            }
        }
        ,
        t.hide = function(t) {
            function e() {
                n._hoverState !== Fe && i.parentNode && i.parentNode.removeChild(i),
                n._cleanTipClass(),
                n.element.removeAttribute("aria-describedby"),
                g(n.element).trigger(n.constructor.Event.HIDDEN),
                null !== n._popper && n._popper.destroy(),
                t && t()
            }
            var n = this
              , i = this.getTipElement()
              , o = g.Event(this.constructor.Event.HIDE);
            if (g(this.element).trigger(o),
            !o.isDefaultPrevented()) {
                if (g(i).removeClass(Me),
                "ontouchstart"in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                this._activeTrigger[Ye] = !1,
                this._activeTrigger[Ve] = !1,
                this._activeTrigger[Be] = !1,
                g(this.tip).hasClass(qe)) {
                    var r = _.getTransitionDurationFromElement(i);
                    g(i).one(_.TRANSITION_END, e).emulateTransitionEnd(r)
                } else
                    e();
                this._hoverState = ""
            }
        }
        ,
        t.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        t.addAttachmentClass = function(t) {
            g(this.getTipElement()).addClass(Pe + "-" + t)
        }
        ,
        t.getTipElement = function() {
            return this.tip = this.tip || g(this.config.template)[0],
            this.tip
        }
        ,
        t.setContent = function() {
            var t = this.getTipElement();
            this.setElementContent(g(t.querySelectorAll(Ke)), this.getTitle()),
            g(t).removeClass(qe + " " + Me)
        }
        ,
        t.setElementContent = function(t, e) {
            "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = we(e, this.config.whiteList, this.config.sanitizeFn)),
            t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text())
        }
        ,
        t.getTitle = function() {
            var t = this.element.getAttribute("data-original-title");
            return t = t || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
        }
        ,
        t._getPopperConfig = function(t) {
            var e = this;
            return l({}, {
                placement: t,
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                        element: Qe
                    },
                    preventOverflow: {
                        boundariesElement: this.config.boundary
                    }
                },
                onCreate: function(t) {
                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                },
                onUpdate: function(t) {
                    return e._handlePopperPlacementChange(t)
                }
            }, {}, this.config.popperConfig)
        }
        ,
        t._getOffset = function() {
            var e = this
              , t = {};
            return "function" == typeof this.config.offset ? t.fn = function(t) {
                return t.offsets = l({}, t.offsets, {}, e.config.offset(t.offsets, e.element) || {}),
                t
            }
            : t.offset = this.config.offset,
            t
        }
        ,
        t._getContainer = function() {
            return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container)
        }
        ,
        t._getAttachment = function(t) {
            return Re[t.toUpperCase()]
        }
        ,
        t._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(t) {
                if ("click" === t)
                    g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                        return i.toggle(t)
                    });
                else if (t !== ze) {
                    var e = t === Be ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN
                      , n = t === Be ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                    g(i.element).on(e, i.config.selector, function(t) {
                        return i._enter(t)
                    }).on(n, i.config.selector, function(t) {
                        return i._leave(t)
                    })
                }
            }),
            this._hideModalHandler = function() {
                i.element && i.hide()
            }
            ,
            g(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
            this.config.selector ? this.config = l({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        t._fixTitle = function() {
            var t = typeof this.element.getAttribute("data-original-title");
            !this.element.getAttribute("title") && "string" == t || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        t._enter = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            g(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusin" === t.type ? Ve : Be] = !0),
            g(e.getTipElement()).hasClass(Me) || e._hoverState === Fe ? e._hoverState = Fe : (clearTimeout(e._timeout),
            e._hoverState = Fe,
            e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                e._hoverState === Fe && e.show()
            }, e.config.delay.show) : e.show())
        }
        ,
        t._leave = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            g(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusout" === t.type ? Ve : Be] = !1),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = Ue,
            e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                e._hoverState === Ue && e.hide()
            }, e.config.delay.hide) : e.hide())
        }
        ,
        t._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        ,
        t._getConfig = function(t) {
            var e = g(this.element).data();
            return Object.keys(e).forEach(function(t) {
                -1 !== je.indexOf(t) && delete e[t]
            }),
            "number" == typeof (t = l({}, this.constructor.Default, {}, e, {}, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            _.typeCheckConfig(Ae, t, this.constructor.DefaultType),
            t.sanitize && (t.template = we(t.template, t.whiteList, t.sanitizeFn)),
            t
        }
        ,
        t._getDelegateConfig = function() {
            var t = {};
            if (this.config)
                for (var e in this.config)
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }
        ,
        t._cleanTipClass = function() {
            var t = g(this.getTipElement())
              , e = t.attr("class").match(Le);
            null !== e && e.length && t.removeClass(e.join(""))
        }
        ,
        t._handlePopperPlacementChange = function(t) {
            var e = t.instance;
            this.tip = e.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement))
        }
        ,
        t._fixTransition = function() {
            var t = this.getTipElement()
              , e = this.config.animation;
            null === t.getAttribute("x-placement") && (g(t).removeClass(qe),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = e)
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this).data(Ne)
                  , e = "object" == typeof n && n;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this,e),
                g(this).data(Ne, t)),
                "string" == typeof n)) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return xe
            }
        }, {
            key: "NAME",
            get: function() {
                return Ae
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Ne
            }
        }, {
            key: "Event",
            get: function() {
                return We
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Oe
            }
        }, {
            key: "DefaultType",
            get: function() {
                return He
            }
        }]),
        i
    }();
    g.fn[Ae] = Xe._jQueryInterface,
    g.fn[Ae].Constructor = Xe,
    g.fn[Ae].noConflict = function() {
        return g.fn[Ae] = ke,
        Xe._jQueryInterface
    }
    ;
    var $e = "popover"
      , Ge = "bs.popover"
      , Je = "." + Ge
      , Ze = g.fn[$e]
      , tn = "bs-popover"
      , en = new RegExp("(^|\\s)" + tn + "\\S+","g")
      , nn = l({}, Xe.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , on = l({}, Xe.DefaultType, {
        content: "(string|element|function)"
    })
      , rn = "fade"
      , sn = "show"
      , an = ".popover-header"
      , ln = ".popover-body"
      , cn = {
        HIDE: "hide" + Je,
        HIDDEN: "hidden" + Je,
        SHOW: "show" + Je,
        SHOWN: "shown" + Je,
        INSERTED: "inserted" + Je,
        CLICK: "click" + Je,
        FOCUSIN: "focusin" + Je,
        FOCUSOUT: "focusout" + Je,
        MOUSEENTER: "mouseenter" + Je,
        MOUSELEAVE: "mouseleave" + Je
    }
      , hn = function(t) {
        function i() {
            return t.apply(this, arguments) || this
        }
        !function(t, e) {
            t.prototype = Object.create(e.prototype),
            (t.prototype.constructor = t).__proto__ = e
        }(i, t);
        var e = i.prototype;
        return e.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        e.addAttachmentClass = function(t) {
            g(this.getTipElement()).addClass(tn + "-" + t)
        }
        ,
        e.getTipElement = function() {
            return this.tip = this.tip || g(this.config.template)[0],
            this.tip
        }
        ,
        e.setContent = function() {
            var t = g(this.getTipElement());
            this.setElementContent(t.find(an), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(ln), e),
            t.removeClass(rn + " " + sn)
        }
        ,
        e._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        e._cleanTipClass = function() {
            var t = g(this.getTipElement())
              , e = t.attr("class").match(en);
            null !== e && 0 < e.length && t.removeClass(e.join(""))
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this).data(Ge)
                  , e = "object" == typeof n ? n : null;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this,e),
                g(this).data(Ge, t)),
                "string" == typeof n)) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return nn
            }
        }, {
            key: "NAME",
            get: function() {
                return $e
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Ge
            }
        }, {
            key: "Event",
            get: function() {
                return cn
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Je
            }
        }, {
            key: "DefaultType",
            get: function() {
                return on
            }
        }]),
        i
    }(Xe);
    g.fn[$e] = hn._jQueryInterface,
    g.fn[$e].Constructor = hn,
    g.fn[$e].noConflict = function() {
        return g.fn[$e] = Ze,
        hn._jQueryInterface
    }
    ;
    var un = "scrollspy"
      , fn = "bs.scrollspy"
      , dn = "." + fn
      , gn = g.fn[un]
      , _n = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , mn = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , pn = {
        ACTIVATE: "activate" + dn,
        SCROLL: "scroll" + dn,
        LOAD_DATA_API: "load" + dn + ".data-api"
    }
      , vn = "dropdown-item"
      , yn = "active"
      , En = '[data-spy="scroll"]'
      , Cn = ".nav, .list-group"
      , Tn = ".nav-link"
      , bn = ".nav-item"
      , Sn = ".list-group-item"
      , Dn = ".dropdown"
      , In = ".dropdown-item"
      , wn = ".dropdown-toggle"
      , An = "offset"
      , Nn = "position"
      , On = function() {
        function n(t, e) {
            var n = this;
            this._element = t,
            this._scrollElement = "BODY" === t.tagName ? window : t,
            this._config = this._getConfig(e),
            this._selector = this._config.target + " " + Tn + "," + this._config.target + " " + Sn + "," + this._config.target + " " + In,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            g(this._scrollElement).on(pn.SCROLL, function(t) {
                return n._process(t)
            }),
            this.refresh(),
            this._process()
        }
        var t = n.prototype;
        return t.refresh = function() {
            var e = this
              , t = this._scrollElement === this._scrollElement.window ? An : Nn
              , o = "auto" === this._config.method ? t : this._config.method
              , r = o === Nn ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                var e, n = _.getSelectorFromElement(t);
                if (n && (e = document.querySelector(n)),
                e) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height)
                        return [g(e)[o]().top + r, n]
                }
                return null
            }).filter(function(t) {
                return t
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).forEach(function(t) {
                e._offsets.push(t[0]),
                e._targets.push(t[1])
            })
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, fn),
            g(this._scrollElement).off(dn),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        t._getConfig = function(t) {
            if ("string" != typeof (t = l({}, _n, {}, "object" == typeof t && t ? t : {})).target) {
                var e = g(t.target).attr("id");
                e || (e = _.getUID(un),
                g(t.target).attr("id", e)),
                t.target = "#" + e
            }
            return _.typeCheckConfig(un, t, mn),
            t
        }
        ,
        t._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        t._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        t._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        t._process = function() {
            var t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            n <= t) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (var o = this._offsets.length; o--; ) {
                    this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }
        }
        ,
        t._activate = function(e) {
            this._activeTarget = e,
            this._clear();
            var t = this._selector.split(",").map(function(t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            })
              , n = g([].slice.call(document.querySelectorAll(t.join(","))));
            n.hasClass(vn) ? (n.closest(Dn).find(wn).addClass(yn),
            n.addClass(yn)) : (n.addClass(yn),
            n.parents(Cn).prev(Tn + ", " + Sn).addClass(yn),
            n.parents(Cn).prev(bn).children(Tn).addClass(yn)),
            g(this._scrollElement).trigger(pn.ACTIVATE, {
                relatedTarget: e
            })
        }
        ,
        t._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                return t.classList.contains(yn)
            }).forEach(function(t) {
                return t.classList.remove(yn)
            })
        }
        ,
        n._jQueryInterface = function(e) {
            return this.each(function() {
                var t = g(this).data(fn);
                if (t || (t = new n(this,"object" == typeof e && e),
                g(this).data(fn, t)),
                "string" == typeof e) {
                    if ("undefined" == typeof t[e])
                        throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }
        ,
        s(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return _n
            }
        }]),
        n
    }();
    g(window).on(pn.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(En)), e = t.length; e--; ) {
            var n = g(t[e]);
            On._jQueryInterface.call(n, n.data())
        }
    }),
    g.fn[un] = On._jQueryInterface,
    g.fn[un].Constructor = On,
    g.fn[un].noConflict = function() {
        return g.fn[un] = gn,
        On._jQueryInterface
    }
    ;
    var kn = "bs.tab"
      , Pn = "." + kn
      , Ln = g.fn.tab
      , jn = {
        HIDE: "hide" + Pn,
        HIDDEN: "hidden" + Pn,
        SHOW: "show" + Pn,
        SHOWN: "shown" + Pn,
        CLICK_DATA_API: "click" + Pn + ".data-api"
    }
      , Hn = "dropdown-menu"
      , Rn = "active"
      , xn = "disabled"
      , Fn = "fade"
      , Un = "show"
      , Wn = ".dropdown"
      , qn = ".nav, .list-group"
      , Mn = ".active"
      , Kn = "> li > .active"
      , Qn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
      , Bn = ".dropdown-toggle"
      , Vn = "> .dropdown-menu .active"
      , Yn = function() {
        function i(t) {
            this._element = t
        }
        var t = i.prototype;
        return t.show = function() {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Rn) || g(this._element).hasClass(xn))) {
                var t, i, e = g(this._element).closest(qn)[0], o = _.getSelectorFromElement(this._element);
                if (e) {
                    var r = "UL" === e.nodeName || "OL" === e.nodeName ? Kn : Mn;
                    i = (i = g.makeArray(g(e).find(r)))[i.length - 1]
                }
                var s = g.Event(jn.HIDE, {
                    relatedTarget: this._element
                })
                  , a = g.Event(jn.SHOW, {
                    relatedTarget: i
                });
                if (i && g(i).trigger(s),
                g(this._element).trigger(a),
                !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    o && (t = document.querySelector(o)),
                    this._activate(this._element, e);
                    var l = function() {
                        var t = g.Event(jn.HIDDEN, {
                            relatedTarget: n._element
                        })
                          , e = g.Event(jn.SHOWN, {
                            relatedTarget: i
                        });
                        g(i).trigger(t),
                        g(n._element).trigger(e)
                    };
                    t ? this._activate(t, t.parentNode, l) : l()
                }
            }
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, kn),
            this._element = null
        }
        ,
        t._activate = function(t, e, n) {
            function i() {
                return o._transitionComplete(t, r, n)
            }
            var o = this
              , r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Mn) : g(e).find(Kn))[0]
              , s = n && r && g(r).hasClass(Fn);
            if (r && s) {
                var a = _.getTransitionDurationFromElement(r);
                g(r).removeClass(Un).one(_.TRANSITION_END, i).emulateTransitionEnd(a)
            } else
                i()
        }
        ,
        t._transitionComplete = function(t, e, n) {
            if (e) {
                g(e).removeClass(Rn);
                var i = g(e.parentNode).find(Vn)[0];
                i && g(i).removeClass(Rn),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            if (g(t).addClass(Rn),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            _.reflow(t),
            t.classList.contains(Fn) && t.classList.add(Un),
            t.parentNode && g(t.parentNode).hasClass(Hn)) {
                var o = g(t).closest(Wn)[0];
                if (o) {
                    var r = [].slice.call(o.querySelectorAll(Bn));
                    g(r).addClass(Rn)
                }
                t.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this)
                  , e = t.data(kn);
                if (e || (e = new i(this),
                t.data(kn, e)),
                "string" == typeof n) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]),
        i
    }();
    g(document).on(jn.CLICK_DATA_API, Qn, function(t) {
        t.preventDefault(),
        Yn._jQueryInterface.call(g(this), "show")
    }),
    g.fn.tab = Yn._jQueryInterface,
    g.fn.tab.Constructor = Yn,
    g.fn.tab.noConflict = function() {
        return g.fn.tab = Ln,
        Yn._jQueryInterface
    }
    ;
    var zn = "toast"
      , Xn = "bs.toast"
      , $n = "." + Xn
      , Gn = g.fn[zn]
      , Jn = {
        CLICK_DISMISS: "click.dismiss" + $n,
        HIDE: "hide" + $n,
        HIDDEN: "hidden" + $n,
        SHOW: "show" + $n,
        SHOWN: "shown" + $n
    }
      , Zn = "fade"
      , ti = "hide"
      , ei = "show"
      , ni = "showing"
      , ii = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , oi = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , ri = '[data-dismiss="toast"]'
      , si = function() {
        function i(t, e) {
            this._element = t,
            this._config = this._getConfig(e),
            this._timeout = null,
            this._setListeners()
        }
        var t = i.prototype;
        return t.show = function() {
            var t = this
              , e = g.Event(Jn.SHOW);
            if (g(this._element).trigger(e),
            !e.isDefaultPrevented()) {
                this._config.animation && this._element.classList.add(Zn);
                var n = function() {
                    t._element.classList.remove(ni),
                    t._element.classList.add(ei),
                    g(t._element).trigger(Jn.SHOWN),
                    t._config.autohide && (t._timeout = setTimeout(function() {
                        t.hide()
                    }, t._config.delay))
                };
                if (this._element.classList.remove(ti),
                _.reflow(this._element),
                this._element.classList.add(ni),
                this._config.animation) {
                    var i = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, n).emulateTransitionEnd(i)
                } else
                    n()
            }
        }
        ,
        t.hide = function() {
            if (this._element.classList.contains(ei)) {
                var t = g.Event(Jn.HIDE);
                g(this._element).trigger(t),
                t.isDefaultPrevented() || this._close()
            }
        }
        ,
        t.dispose = function() {
            clearTimeout(this._timeout),
            this._timeout = null,
            this._element.classList.contains(ei) && this._element.classList.remove(ei),
            g(this._element).off(Jn.CLICK_DISMISS),
            g.removeData(this._element, Xn),
            this._element = null,
            this._config = null
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, oi, {}, g(this._element).data(), {}, "object" == typeof t && t ? t : {}),
            _.typeCheckConfig(zn, t, this.constructor.DefaultType),
            t
        }
        ,
        t._setListeners = function() {
            var t = this;
            g(this._element).on(Jn.CLICK_DISMISS, ri, function() {
                return t.hide()
            })
        }
        ,
        t._close = function() {
            function t() {
                e._element.classList.add(ti),
                g(e._element).trigger(Jn.HIDDEN)
            }
            var e = this;
            if (this._element.classList.remove(ei),
            this._config.animation) {
                var n = _.getTransitionDurationFromElement(this._element);
                g(this._element).one(_.TRANSITION_END, t).emulateTransitionEnd(n)
            } else
                t()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this)
                  , e = t.data(Xn);
                if (e || (e = new i(this,"object" == typeof n && n),
                t.data(Xn, e)),
                "string" == typeof n) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n](this)
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return ii
            }
        }, {
            key: "Default",
            get: function() {
                return oi
            }
        }]),
        i
    }();
    g.fn[zn] = si._jQueryInterface,
    g.fn[zn].Constructor = si,
    g.fn[zn].noConflict = function() {
        return g.fn[zn] = Gn,
        si._jQueryInterface
    }
    ,
    t.Alert = v,
    t.Button = H,
    t.Carousel = ut,
    t.Collapse = wt,
    t.Dropdown = ee,
    t.Modal = Te,
    t.Popover = hn,
    t.Scrollspy = On,
    t.Tab = Yn,
    t.Toast = si,
    t.Tooltip = Xe,
    t.Util = _,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
/*! WOW - v1.1.3 - 2016-05-06*/
(function() {
    var a, b, c, d, e, f = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, g = [].indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++)
            if (b in this && this[b] === a)
                return b;
        return -1
    }
    ;
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b)
                d = b[c],
                null == a[c] && (a[c] = d);
            return a
        }
        ,
        a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }
        ,
        a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1),
            null == c && (c = !1),
            null == d && (d = null),
            null != document.createEvent ? (e = document.createEvent("CustomEvent"),
            e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(),
            e.eventType = a) : e.eventName = a,
            e
        }
        ,
        a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }
        ,
        a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }
        ,
        a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }
        ,
        a.prototype.innerHeight = function() {
            return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
        }
        ,
        a
    }(),
    c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [],
            this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys,
            b = d = 0,
            e = f.length; e > d; b = ++d)
                if (c = f[b],
                c === a)
                    return this.values[b]
        }
        ,
        a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys,
            c = e = 0,
            f = g.length; f > e; c = ++e)
                if (d = g[c],
                d === a)
                    return void (this.values[c] = b);
            return this.keys.push(a),
            this.values.push(b)
        }
        ,
        a
    }()),
    a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0,
        a.prototype.observe = function() {}
        ,
        a
    }()),
    d = this.getComputedStyle || function(a, b) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"),
            e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }),
            (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }
        ,
        this
    }
    ,
    e = /(\-([a-z]){1})/g,
    this.WOW = function() {
        function e(a) {
            null == a && (a = {}),
            this.scrollCallback = f(this.scrollCallback, this),
            this.scrollHandler = f(this.scrollHandler, this),
            this.resetAnimation = f(this.resetAnimation, this),
            this.start = f(this.start, this),
            this.scrolled = !0,
            this.config = this.util().extend(a, this.defaults),
            null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)),
            this.animationNameCache = new c,
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        },
        e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement,
            "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        }
        ,
        e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1,
            this.boxes = function() {
                var a, c, d, e;
                for (d = this.element.querySelectorAll("." + this.config.boxClass),
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.all = function() {
                var a, c, d, e;
                for (d = this.boxes,
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.boxes.length)
                if (this.disabled())
                    this.resetStyle();
                else
                    for (e = this.boxes,
                    c = 0,
                    d = e.length; d > c; c++)
                        b = e[c],
                        this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().addEvent(window, "resize", this.scrollHandler),
            this.interval = setInterval(this.scrollCallback, 50)),
            this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [],
                    c = 0,
                    d = b.length; d > c; c++)
                        f = b[c],
                        g.push(function() {
                            var a, b, c, d;
                            for (c = f.addedNodes || [],
                            d = [],
                            a = 0,
                            b = c.length; b > a; a++)
                                e = c[a],
                                d.push(this.doSync(e));
                            return d
                        }
                        .call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }
        ,
        e.prototype.stop = function() {
            return this.stopped = !0,
            this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
        }
        ,
        e.prototype.sync = function(b) {
            return a.notSupported ? this.doSync(this.element) : void 0
        }
        ,
        e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element),
            1 === a.nodeType) {
                for (a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length; d > c; c++)
                    b = e[c],
                    g.call(this.all, b) < 0 ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0),
                    f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }
        ,
        e.prototype.show = function(a) {
            return this.applyStyle(a),
            a.className = a.className + " " + this.config.animateClass,
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
        }
        ,
        e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"),
            c = a.getAttribute("data-wow-delay"),
            e = a.getAttribute("data-wow-iteration"),
            this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }
        ,
        e.prototype.animate = function() {
            return "requestAnimationFrame"in window ? function(a) {
                return window.requestAnimationFrame(a)
            }
            : function(a) {
                return a()
            }
        }(),
        e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes,
            e = [],
            b = 0,
            c = d.length; c > b; b++)
                a = d[b],
                e.push(a.style.visibility = "visible");
            return e
        }
        ,
        e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement,
            b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }
        ,
        e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a),
            a.style.visibility = b ? "hidden" : "visible",
            c && this.vendorSet(a.style, {
                animationDuration: c
            }),
            d && this.vendorSet(a.style, {
                animationDelay: d
            }),
            e && this.vendorSet(a.style, {
                animationIterationCount: e
            }),
            this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }),
            a
        }
        ,
        e.prototype.vendors = ["moz", "webkit"],
        e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b)
                e = b[c],
                a["" + c] = e,
                d.push(function() {
                    var b, d, g, h;
                    for (g = this.vendors,
                    h = [],
                    b = 0,
                    d = g.length; d > b; b++)
                        f = g[b],
                        h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                    return h
                }
                .call(this));
            return d
        }
        ,
        e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a),
            g = h.getPropertyCSSValue(b),
            f = this.vendors,
            c = 0,
            e = f.length; e > c; c++)
                i = f[c],
                g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }
        ,
        e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }
        ,
        e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }
        ,
        e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }
        ,
        e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1,
            this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes,
                e = [],
                b = 0,
                c = d.length; c > b; b++)
                    a = d[b],
                    a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }
            .call(this),
            this.boxes.length || this.config.live) ? void 0 : this.stop()
        }
        ,
        e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop; )
                a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent; )
                b += a.offsetTop;
            return b
        }
        ,
        e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset,
            f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
            e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c,
            d = this.offsetTop(a),
            b = d + a.clientHeight,
            e >= d && b >= f
        }
        ,
        e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }
        ,
        e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }
        ,
        e
    }()
}
).call(this);
/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event
          , h = i.call(arguments, 1)
          , j = 0
          , l = 0
          , m = 0
          , n = 0
          , o = 0
          , p = 0;
        if (b = a.event.fix(g),
        b.type = "mousewheel",
        "detail"in g && (m = -1 * g.detail),
        "wheelDelta"in g && (m = g.wheelDelta),
        "wheelDeltaY"in g && (m = g.wheelDeltaY),
        "wheelDeltaX"in g && (l = -1 * g.wheelDeltaX),
        "axis"in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m,
        m = 0),
        j = 0 === m ? l : m,
        "deltaY"in g && (m = -1 * g.deltaY,
        j = m),
        "deltaX"in g && (l = g.deltaX,
        0 === m && (j = -1 * l)),
        0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q,
                m *= q,
                l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r,
                m *= r,
                l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)),
            (!f || f > n) && (f = n,
            d(g, n) && (f /= 40)),
            d(g, n) && (j /= 40,
            l /= 40,
            m /= 40),
            j = Math[j >= 1 ? "floor" : "ceil"](j / f),
            l = Math[l >= 1 ? "floor" : "ceil"](l / f),
            m = Math[m >= 1 ? "floor" : "ceil"](m / f),
            k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left,
                p = b.clientY - s.top
            }
            return b.deltaX = l,
            b.deltaY = m,
            b.deltaFactor = f,
            b.offsetX = o,
            b.offsetY = p,
            b.deltaMode = 0,
            h.unshift(b, j, l, m),
            e && clearTimeout(e),
            e = setTimeout(c, 200),
            (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }
    function c() {
        f = null
    }
    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j; )
            a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c; )
                    this.addEventListener(h[--c], b, !1);
            else
                this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
            a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c; )
                    this.removeEventListener(h[--c], b, !1);
            else
                this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"),
            a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b)
              , d = c["offsetParent"in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")),
            parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event
          , h = i.call(arguments, 1)
          , j = 0
          , l = 0
          , m = 0
          , n = 0
          , o = 0
          , p = 0;
        if (b = a.event.fix(g),
        b.type = "mousewheel",
        "detail"in g && (m = -1 * g.detail),
        "wheelDelta"in g && (m = g.wheelDelta),
        "wheelDeltaY"in g && (m = g.wheelDeltaY),
        "wheelDeltaX"in g && (l = -1 * g.wheelDeltaX),
        "axis"in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m,
        m = 0),
        j = 0 === m ? l : m,
        "deltaY"in g && (m = -1 * g.deltaY,
        j = m),
        "deltaX"in g && (l = g.deltaX,
        0 === m && (j = -1 * l)),
        0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q,
                m *= q,
                l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r,
                m *= r,
                l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)),
            (!f || f > n) && (f = n,
            d(g, n) && (f /= 40)),
            d(g, n) && (j /= 40,
            l /= 40,
            m /= 40),
            j = Math[j >= 1 ? "floor" : "ceil"](j / f),
            l = Math[l >= 1 ? "floor" : "ceil"](l / f),
            m = Math[m >= 1 ? "floor" : "ceil"](m / f),
            k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left,
                p = b.clientY - s.top
            }
            return b.deltaX = l,
            b.deltaY = m,
            b.deltaFactor = f,
            b.offsetX = o,
            b.offsetY = p,
            b.deltaMode = 0,
            h.unshift(b, j, l, m),
            e && clearTimeout(e),
            e = setTimeout(c, 200),
            (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }
    function c() {
        f = null
    }
    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j; )
            a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c; )
                    this.addEventListener(h[--c], b, !1);
            else
                this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
            a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c; )
                    this.removeEventListener(h[--c], b, !1);
            else
                this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"),
            a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b)
              , d = c["offsetParent"in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")),
            parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
/* jquery.mCustomScrollbar */
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function(e) {
    !function(t) {
        var o = "function" == typeof define && define.amd
          , a = "undefined" != typeof module && module.exports
          , n = "https:" == document.location.protocol ? "https:" : "http:"
          , i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
        o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))),
        t()
    }(function() {
        var t, o = "mCustomScrollbar", a = "mCS", n = ".mCustomScrollbar", i = {
            setTop: 0,
            setLeft: 0,
            axis: "y",
            scrollbarPosition: "inside",
            scrollInertia: 950,
            autoDraggerLength: !0,
            alwaysShowScrollbar: 0,
            snapOffset: 0,
            mouseWheel: {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                deltaFactor: "auto",
                disableOver: ["select", "option", "keygen", "datalist", "textarea"]
            },
            scrollButtons: {
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            keyboard: {
                enable: !0,
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            contentTouchScroll: 25,
            documentTouchScroll: !0,
            advanced: {
                autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                updateOnContentResize: !0,
                updateOnImageLoad: "auto",
                autoUpdateTimeout: 60
            },
            theme: "light",
            callbacks: {
                onTotalScrollOffset: 0,
                onTotalScrollBackOffset: 0,
                alwaysTriggerOffsets: !0
            }
        }, r = 0, l = {}, s = window.attachEvent && !window.addEventListener ? 1 : 0, c = !1, d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"], u = {
            init: function(t) {
                var t = e.extend(!0, {}, i, t)
                  , o = f.call(this);
                if (t.live) {
                    var s = t.liveSelector || this.selector || n
                      , c = e(s);
                    if ("off" === t.live)
                        return void m(s);
                    l[s] = setTimeout(function() {
                        c.mCustomScrollbar(t),
                        "once" === t.live && c.length && m(s)
                    }, 500)
                } else
                    m(s);
                return t.setWidth = t.set_width ? t.set_width : t.setWidth,
                t.setHeight = t.set_height ? t.set_height : t.setHeight,
                t.axis = t.horizontalScroll ? "x" : p(t.axis),
                t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia,
                "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    preventDefault: !1,
                    deltaFactor: "auto",
                    normalizeDelta: !1,
                    invert: !1
                }),
                t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount,
                t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta,
                t.scrollButtons.scrollType = g(t.scrollButtons.scrollType),
                h(t),
                e(o).each(function() {
                    var o = e(this);
                    if (!o.data(a)) {
                        o.data(a, {
                            idx: ++r,
                            opt: t,
                            scrollRatio: {
                                y: null,
                                x: null
                            },
                            overflowed: null,
                            contentReset: {
                                y: null,
                                x: null
                            },
                            bindEvents: !1,
                            tweenRunning: !1,
                            sequential: {},
                            langDir: o.css("direction"),
                            cbOffsets: null,
                            trigger: null,
                            poll: {
                                size: {
                                    o: 0,
                                    n: 0
                                },
                                img: {
                                    o: 0,
                                    n: 0
                                },
                                change: {
                                    o: 0,
                                    n: 0
                                }
                            }
                        });
                        var n = o.data(a)
                          , i = n.opt
                          , l = o.data("mcs-axis")
                          , s = o.data("mcs-scrollbar-position")
                          , c = o.data("mcs-theme");
                        l && (i.axis = l),
                        s && (i.scrollbarPosition = s),
                        c && (i.theme = c,
                        h(i)),
                        v.call(this),
                        n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this),
                        e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]),
                        u.update.call(null, o)
                    }
                })
            },
            update: function(t, o) {
                var n = t || f.call(this);
                return e(n).each(function() {
                    var t = e(this);
                    if (t.data(a)) {
                        var n = t.data(a)
                          , i = n.opt
                          , r = e("#mCSB_" + n.idx + "_container")
                          , l = e("#mCSB_" + n.idx)
                          , s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                        if (!r.length)
                            return;
                        n.tweenRunning && Q(t),
                        o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this),
                        t.hasClass(d[3]) && t.removeClass(d[3]),
                        t.hasClass(d[4]) && t.removeClass(d[4]),
                        l.css("max-height", "none"),
                        l.height() !== t.height() && l.css("max-height", t.height()),
                        _.call(this),
                        "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)),
                        n.overflowed = y.call(this),
                        M.call(this),
                        i.autoDraggerLength && S.call(this),
                        b.call(this),
                        T.call(this);
                        var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                        "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }),
                        n.contentReset.y = null) : (B.call(this),
                        "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }))),
                        "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }),
                        n.contentReset.x = null) : (B.call(this),
                        "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }))),
                        o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)),
                        N.call(this)
                    }
                })
            },
            scrollTo: function(t, o) {
                if ("undefined" != typeof t && null != t) {
                    var n = f.call(this);
                    return e(n).each(function() {
                        var n = e(this);
                        if (n.data(a)) {
                            var i = n.data(a)
                              , r = i.opt
                              , l = {
                                trigger: "external",
                                scrollInertia: r.scrollInertia,
                                scrollEasing: "mcsEaseInOut",
                                moveDragger: !1,
                                timeout: 60,
                                callbacks: !0,
                                onStart: !0,
                                onUpdate: !0,
                                onComplete: !0
                            }
                              , s = e.extend(!0, {}, l, o)
                              , c = Y.call(this, t)
                              , d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                            c[0] = X.call(this, c[0], "y"),
                            c[1] = X.call(this, c[1], "x"),
                            s.moveDragger && (c[0] *= i.scrollRatio.y,
                            c[1] *= i.scrollRatio.x),
                            s.dur = ne() ? 0 : d,
                            setTimeout(function() {
                                null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y",
                                s.overwrite = "all",
                                G(n, c[0].toString(), s)),
                                null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x",
                                s.overwrite = "none",
                                G(n, c[1].toString(), s))
                            }, s.timeout)
                        }
                    })
                }
            },
            stop: function() {
                var t = f.call(this);
                return e(t).each(function() {
                    var t = e(this);
                    t.data(a) && Q(t)
                })
            },
            disable: function(t) {
                var o = f.call(this);
                return e(o).each(function() {
                    var o = e(this);
                    if (o.data(a)) {
                        o.data(a);
                        N.call(this, "remove"),
                        k.call(this),
                        t && B.call(this),
                        M.call(this, !0),
                        o.addClass(d[3])
                    }
                })
            },
            destroy: function() {
                var t = f.call(this);
                return e(t).each(function() {
                    var n = e(this);
                    if (n.data(a)) {
                        var i = n.data(a)
                          , r = i.opt
                          , l = e("#mCSB_" + i.idx)
                          , s = e("#mCSB_" + i.idx + "_container")
                          , c = e(".mCSB_" + i.idx + "_scrollbar");
                        r.live && m(r.liveSelector || e(t).selector),
                        N.call(this, "remove"),
                        k.call(this),
                        B.call(this),
                        n.removeData(a),
                        $(this, "mcs"),
                        c.remove(),
                        s.find("img." + d[2]).removeClass(d[2]),
                        l.replaceWith(s.contents()),
                        n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
                    }
                })
            }
        }, f = function() {
            return "object" != typeof e(this) || e(this).length < 1 ? n : this
        }, h = function(t) {
            var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]
              , a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]
              , n = ["minimal", "minimal-dark"]
              , i = ["minimal", "minimal-dark"]
              , r = ["minimal", "minimal-dark"];
            t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength,
            t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar,
            t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable,
            t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar,
            t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
        }, m = function(e) {
            l[e] && (clearTimeout(l[e]),
            $(l, e))
        }, p = function(e) {
            return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
        }, g = function(e) {
            return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
        }, v = function() {
            var t = e(this)
              , n = t.data(a)
              , i = n.opt
              , r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : ""
              , l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"]
              , s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical"
              , c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0]
              , u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : ""
              , f = i.autoHideScrollbar ? " " + d[6] : ""
              , h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
            i.setWidth && t.css("width", i.setWidth),
            i.setHeight && t.css("height", i.setHeight),
            i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft,
            t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>");
            var m = e("#mCSB_" + n.idx)
              , p = e("#mCSB_" + n.idx + "_container");
            "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)),
            "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"),
            t.css("overflow", "visible"),
            m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c),
            p.wrap(u)),
            w.call(this);
            var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
            g[0].css("min-height", g[0].height()),
            g[1].css("min-width", g[1].width())
        }, x = function(t) {
            var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() {
                return e(this).outerWidth(!0)
            }).get())]
              , a = t.parent().width();
            return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%"
        }, _ = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = e("#mCSB_" + o.idx + "_container");
            if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
                i.css({
                    width: "auto",
                    "min-width": 0,
                    "overflow-x": "scroll"
                });
                var r = Math.ceil(i[0].scrollWidth);
                3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({
                    width: r,
                    "min-width": "100%",
                    "overflow-x": "inherit"
                }) : i.css({
                    "overflow-x": "inherit",
                    position: "absolute"
                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                    width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
                    "min-width": "100%",
                    position: "relative"
                }).unwrap()
            }
        }, w = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = e(".mCSB_" + o.idx + "_scrollbar:first")
              , r = oe(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : ""
              , l = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />"]
              , s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
            n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])
        }, S = function() {
            var t = e(this)
              , o = t.data(a)
              , n = e("#mCSB_" + o.idx)
              , i = e("#mCSB_" + o.idx + "_container")
              , r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")]
              , l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)]
              , c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())]
              , d = s && c[1] < c[0] ? c[0] : c[1]
              , u = s && c[3] < c[2] ? c[2] : c[3];
            r[0].css({
                height: d,
                "max-height": r[0].parent().height() - 10
            }).find(".mCSB_dragger_bar").css({
                "line-height": c[0] + "px"
            }),
            r[1].css({
                width: u,
                "max-width": r[1].parent().width() - 10
            })
        }, b = function() {
            var t = e(this)
              , o = t.data(a)
              , n = e("#mCSB_" + o.idx)
              , i = e("#mCSB_" + o.idx + "_container")
              , r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")]
              , l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()]
              , s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
            o.scrollRatio = {
                y: s[0],
                x: s[1]
            }
        }, C = function(e, t, o) {
            var a = o ? d[0] + "_expanded" : ""
              , n = e.closest(".mCSB_scrollTools");
            "active" === t ? (e.toggleClass(d[0] + " " + a),
            n.toggleClass(d[1]),
            e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]),
            n.removeClass(d[1])) : (e.addClass(d[0]),
            n.addClass(d[1])))
        }, y = function() {
            var t = e(this)
              , o = t.data(a)
              , n = e("#mCSB_" + o.idx)
              , i = e("#mCSB_" + o.idx + "_container")
              , r = null == o.overflowed ? i.height() : i.outerHeight(!1)
              , l = null == o.overflowed ? i.width() : i.outerWidth(!1)
              , s = i[0].scrollHeight
              , c = i[0].scrollWidth;
            return s > r && (r = s),
            c > l && (l = c),
            [r > n.height(), l > n.width()]
        }, B = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = e("#mCSB_" + o.idx)
              , r = e("#mCSB_" + o.idx + "_container")
              , l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
            if (Q(t),
            ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0),
            G(t, "_resetY")),
            "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
                var s = dx = 0;
                "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1),
                dx = Math.abs(s / o.scrollRatio.x)),
                r.css("left", s),
                l[1].css("left", dx),
                G(t, "_resetX")
            }
        }, T = function() {
            function t() {
                r = setTimeout(function() {
                    e.event.special.mousewheel ? (clearTimeout(r),
                    W.call(o[0])) : t()
                }, 100)
            }
            var o = e(this)
              , n = o.data(a)
              , i = n.opt;
            if (!n.bindEvents) {
                if (I.call(this),
                i.contentTouchScroll && D.call(this),
                E.call(this),
                i.mouseWheel.enable) {
                    var r;
                    t()
                }
                P.call(this),
                U.call(this),
                i.advanced.autoScrollOnFocus && H.call(this),
                i.scrollButtons.enable && F.call(this),
                i.keyboard.enable && q.call(this),
                n.bindEvents = !0
            }
        }, k = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = a + "_" + o.idx
              , r = ".mCSB_" + o.idx + "_scrollbar"
              , l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a")
              , s = e("#mCSB_" + o.idx + "_container");
            n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)),
            n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)),
            o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i),
            l.each(function() {
                e(this).unbind("." + i)
            }),
            clearTimeout(t[0]._focusTimeout),
            $(t[0], "_focusTimeout"),
            clearTimeout(o.sequential.step),
            $(o.sequential, "step"),
            clearTimeout(s[0].onCompleteTimeout),
            $(s[0], "onCompleteTimeout"),
            o.bindEvents = !1)
        }, M = function(t) {
            var o = e(this)
              , n = o.data(a)
              , i = n.opt
              , r = e("#mCSB_" + n.idx + "_container_wrapper")
              , l = r.length ? r : e("#mCSB_" + n.idx + "_container")
              , s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")]
              , c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
            "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"),
            l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"),
            l.removeClass(d[10])) : (s[0].css("display", "none"),
            l.addClass(d[10])),
            l.addClass(d[8]))),
            "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"),
            l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"),
            l.removeClass(d[11])) : (s[1].css("display", "none"),
            l.addClass(d[11])),
            l.addClass(d[9]))),
            n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5])
        }, O = function(t) {
            var o = t.type
              , a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null
              , n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
            switch (o) {
            case "pointerdown":
            case "MSPointerDown":
            case "pointermove":
            case "MSPointerMove":
            case "pointerup":
            case "MSPointerUp":
                return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
            case "touchstart":
            case "touchmove":
            case "touchend":
                var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0]
                  , r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
            default:
                return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1]
            }
        }, I = function() {
            function t(e, t, a, n) {
                if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0,
                o.attr("id") === f[1])
                    var i = "x"
                      , s = (o[0].offsetLeft - t + n) * l.scrollRatio.x;
                else
                    var i = "y"
                      , s = (o[0].offsetTop - e + a) * l.scrollRatio.y;
                G(r, s.toString(), {
                    dir: i,
                    drag: !0
                })
            }
            var o, n, i, r = e(this), l = r.data(a), d = l.opt, u = a + "_" + l.idx, f = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"], h = e("#mCSB_" + l.idx + "_container"), m = e("#" + f[0] + ",#" + f[1]), p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m, g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);
            m.bind("contextmenu." + u, function(e) {
                e.preventDefault()
            }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function(t) {
                if (t.stopImmediatePropagation(),
                t.preventDefault(),
                ee(t)) {
                    c = !0,
                    s && (document.onselectstart = function() {
                        return !1
                    }
                    ),
                    L.call(h, !1),
                    Q(r),
                    o = e(this);
                    var a = o.offset()
                      , l = O(t)[0] - a.top
                      , u = O(t)[1] - a.left
                      , f = o.height() + a.top
                      , m = o.width() + a.left;
                    f > l && l > 0 && m > u && u > 0 && (n = l,
                    i = u),
                    C(o, "active", d.autoExpandScrollbar)
                }
            }).bind("touchmove." + u, function(e) {
                e.stopImmediatePropagation(),
                e.preventDefault();
                var a = o.offset()
                  , r = O(e)[0] - a.top
                  , l = O(e)[1] - a.left;
                t(n, i, r, l)
            }),
            e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function(e) {
                if (o) {
                    var a = o.offset()
                      , r = O(e)[0] - a.top
                      , l = O(e)[1] - a.left;
                    if (n === r && i === l)
                        return;
                    t(n, i, r, l)
                }
            }).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function() {
                o && (C(o, "active", d.autoExpandScrollbar),
                o = null),
                c = !1,
                s && (document.onselectstart = null),
                L.call(h, !0)
            })
        }, D = function() {
            function o(e) {
                if (!te(e) || c || O(e)[2])
                    return void (t = 0);
                t = 1,
                b = 0,
                C = 0,
                d = 1,
                y.removeClass("mCS_touch_action");
                var o = I.offset();
                u = O(e)[0] - o.top,
                f = O(e)[1] - o.left,
                z = [O(e)[0], O(e)[1]]
            }
            function n(e) {
                if (te(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(),
                e.stopImmediatePropagation(),
                (!C || b) && d)) {
                    g = K();
                    var t = M.offset()
                      , o = O(e)[0] - t.top
                      , a = O(e)[1] - t.left
                      , n = "mcsLinearOut";
                    if (E.push(o),
                    W.push(a),
                    z[2] = Math.abs(O(e)[0] - z[0]),
                    z[3] = Math.abs(O(e)[1] - z[1]),
                    B.overflowed[0])
                        var i = D[0].parent().height() - D[0].height()
                          , r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * z[3] < z[2] || "yx" === T.axis);
                    if (B.overflowed[1])
                        var l = D[1].parent().width() - D[1].width()
                          , h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === T.axis);
                    r || h ? (U || e.preventDefault(),
                    b = 1) : (C = 1,
                    y.addClass("mCS_touch_action")),
                    U && e.preventDefault(),
                    w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null],
                    I[0].idleTimer = 250,
                    B.overflowed[0] && s(w[0], R, n, "y", "all", !0),
                    B.overflowed[1] && s(w[1], R, n, "x", L, !0)
                }
            }
            function i(e) {
                if (!te(e) || c || O(e)[2])
                    return void (t = 0);
                t = 1,
                e.stopImmediatePropagation(),
                Q(y),
                p = K();
                var o = M.offset();
                h = O(e)[0] - o.top,
                m = O(e)[1] - o.left,
                E = [],
                W = []
            }
            function r(e) {
                if (te(e) && !c && !O(e)[2]) {
                    d = 0,
                    e.stopImmediatePropagation(),
                    b = 0,
                    C = 0,
                    v = K();
                    var t = M.offset()
                      , o = O(e)[0] - t.top
                      , a = O(e)[1] - t.left;
                    if (!(v - g > 30)) {
                        _ = 1e3 / (v - p);
                        var n = "mcsEaseOut"
                          , i = 2.5 > _
                          , r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0];
                        x = i ? [o - r[0], a - r[1]] : [o - h, a - m];
                        var u = [Math.abs(x[0]), Math.abs(x[1])];
                        _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _];
                        var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];
                        w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null],
                        S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
                        var y = parseInt(T.contentTouchScroll) || 0;
                        w[0] = u[0] > y ? w[0] : 0,
                        w[1] = u[1] > y ? w[1] : 0,
                        B.overflowed[0] && s(w[0], S[0], n, "y", L, !1),
                        B.overflowed[1] && s(w[1], S[1], n, "x", L, !1)
                    }
                }
            }
            function l(e, t) {
                var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
                return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3]
            }
            function s(e, t, o, a, n, i) {
                e && G(y, e.toString(), {
                    dur: t,
                    scrollEasing: o,
                    dir: a,
                    overwrite: n,
                    drag: i
                })
            }
            var d, u, f, h, m, p, g, v, x, _, w, S, b, C, y = e(this), B = y.data(a), T = B.opt, k = a + "_" + B.idx, M = e("#mCSB_" + B.idx), I = e("#mCSB_" + B.idx + "_container"), D = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")], E = [], W = [], R = 0, L = "yx" === T.axis ? "none" : "all", z = [], P = I.find("iframe"), H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k], U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
            I.bind(H[0], function(e) {
                o(e)
            }).bind(H[1], function(e) {
                n(e)
            }),
            M.bind(H[0], function(e) {
                i(e)
            }).bind(H[2], function(e) {
                r(e)
            }),
            P.length && P.each(function() {
                e(this).bind("load", function() {
                    A(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function(e) {
                        o(e),
                        i(e)
                    }).bind(H[1], function(e) {
                        n(e)
                    }).bind(H[2], function(e) {
                        r(e)
                    })
                })
            })
        }, E = function() {
            function o() {
                return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
            }
            function n(e, t, o) {
                d.type = o && i ? "stepped" : "stepless",
                d.scrollAmount = 10,
                j(r, e, t, "mcsLinearOut", o ? 60 : null)
            }
            var i, r = e(this), l = r.data(a), s = l.opt, d = l.sequential, u = a + "_" + l.idx, f = e("#mCSB_" + l.idx + "_container"), h = f.parent();
            f.bind("mousedown." + u, function() {
                t || i || (i = 1,
                c = !0)
            }).add(document).bind("mousemove." + u, function(e) {
                if (!t && i && o()) {
                    var a = f.offset()
                      , r = O(e)[0] - a.top + f[0].offsetTop
                      , c = O(e)[1] - a.left + f[0].offsetLeft;
                    r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)),
                    "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)))
                }
            }).bind("mouseup." + u + " dragend." + u, function() {
                t || (i && (i = 0,
                n("off", null)),
                c = !1)
            })
        }, W = function() {
            function t(t, a) {
                if (Q(o),
                !z(o, t.target)) {
                    var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100
                      , d = i.scrollInertia;
                    if ("x" === i.axis || "x" === i.mouseWheel.axis)
                        var u = "x"
                          , f = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)]
                          , h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0]
                          , m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft)
                          , p = c[1][0].offsetLeft
                          , g = c[1].parent().width() - c[1].width()
                          , v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX;
                    else
                        var u = "y"
                          , f = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)]
                          , h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0]
                          , m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop)
                          , p = c[0][0].offsetTop
                          , g = c[0].parent().height() - c[0].height()
                          , v = t.deltaY || a;
                    "y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v),
                    i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1),
                    (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(),
                    t.preventDefault()),
                    t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (h = t.deltaFactor,
                    d = 17),
                    G(o, (m - v * h).toString(), {
                        dir: u,
                        dur: d
                    }))
                }
            }
            if (e(this).data(a)) {
                var o = e(this)
                  , n = o.data(a)
                  , i = n.opt
                  , r = a + "_" + n.idx
                  , l = e("#mCSB_" + n.idx)
                  , c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")]
                  , d = e("#mCSB_" + n.idx + "_container").find("iframe");
                d.length && d.each(function() {
                    e(this).bind("load", function() {
                        A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function(e, o) {
                            t(e, o)
                        })
                    })
                }),
                l.bind("mousewheel." + r, function(e, o) {
                    t(e, o)
                })
            }
        }, R = new Object, A = function(t) {
            var o = !1
              , a = !1
              , n = null;
            if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")),
            a !== !1 && void 0 !== R[a])
                return R[a];
            if (t) {
                try {
                    var i = t.contentDocument || t.contentWindow.document;
                    n = i.body.innerHTML
                } catch (r) {}
                o = null !== n
            } else {
                try {
                    var i = top.document;
                    n = i.body.innerHTML
                } catch (r) {}
                o = null !== n
            }
            return a !== !1 && (R[a] = o),
            o
        }, L = function(e) {
            var t = this.find("iframe");
            if (t.length) {
                var o = e ? "auto" : "none";
                t.css("pointer-events", o)
            }
        }, z = function(t, o) {
            var n = o.nodeName.toLowerCase()
              , i = t.data(a).opt.mouseWheel.disableOver
              , r = ["select", "textarea"];
            return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"))
        }, P = function() {
            var t, o = e(this), n = o.data(a), i = a + "_" + n.idx, r = e("#mCSB_" + n.idx + "_container"), l = r.parent(), s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
            s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function(o) {
                c = !0,
                e(o.target).hasClass("mCSB_dragger") || (t = 1)
            }).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function() {
                c = !1
            }).bind("click." + i, function(a) {
                if (t && (t = 0,
                e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) {
                    Q(o);
                    var i = e(this)
                      , s = i.find(".mCSB_dragger");
                    if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
                        if (!n.overflowed[1])
                            return;
                        var c = "x"
                          , u = a.pageX > s.offset().left ? -1 : 1
                          , f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width())
                    } else {
                        if (!n.overflowed[0])
                            return;
                        var c = "y"
                          , u = a.pageY > s.offset().top ? -1 : 1
                          , f = Math.abs(r[0].offsetTop) - u * (.9 * l.height())
                    }
                    G(o, f.toString(), {
                        dir: c,
                        scrollEasing: "mcsEaseInOut"
                    })
                }
            })
        }, H = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = a + "_" + o.idx
              , r = e("#mCSB_" + o.idx + "_container")
              , l = r.parent();
            r.bind("focusin." + i, function() {
                var o = e(document.activeElement)
                  , a = r.find(".mCustomScrollBox").length
                  , i = 0;
                o.is(n.advanced.autoScrollOnFocus) && (Q(t),
                clearTimeout(t[0]._focusTimeout),
                t[0]._focusTimer = a ? (i + 17) * a : 0,
                t[0]._focusTimeout = setTimeout(function() {
                    var e = [ae(o)[0], ae(o)[1]]
                      , a = [r[0].offsetTop, r[0].offsetLeft]
                      , s = [a[0] + e[0] >= 0 && a[0] + e[0] < l.height() - o.outerHeight(!1), a[1] + e[1] >= 0 && a[0] + e[1] < l.width() - o.outerWidth(!1)]
                      , c = "yx" !== n.axis || s[0] || s[1] ? "all" : "none";
                    "x" === n.axis || s[0] || G(t, e[0].toString(), {
                        dir: "y",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: c,
                        dur: i
                    }),
                    "y" === n.axis || s[1] || G(t, e[1].toString(), {
                        dir: "x",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: c,
                        dur: i
                    })
                }, t[0]._focusTimer))
            })
        }, U = function() {
            var t = e(this)
              , o = t.data(a)
              , n = a + "_" + o.idx
              , i = e("#mCSB_" + o.idx + "_container").parent();
            i.bind("scroll." + n, function() {
                0 === i.scrollTop() && 0 === i.scrollLeft() || e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden")
            })
        }, F = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = o.sequential
              , r = a + "_" + o.idx
              , l = ".mCSB_" + o.idx + "_scrollbar"
              , s = e(l + ">a");
            s.bind("contextmenu." + r, function(e) {
                e.preventDefault()
            }).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(a) {
                function r(e, o) {
                    i.scrollAmount = n.scrollButtons.scrollAmount,
                    j(t, e, o)
                }
                if (a.preventDefault(),
                ee(a)) {
                    var l = e(this).attr("class");
                    switch (i.type = n.scrollButtons.scrollType,
                    a.type) {
                    case "mousedown":
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                        if ("stepped" === i.type)
                            return;
                        c = !0,
                        o.tweenRunning = !1,
                        r("on", l);
                        break;
                    case "mouseup":
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseout":
                    case "pointerout":
                    case "MSPointerOut":
                        if ("stepped" === i.type)
                            return;
                        c = !1,
                        i.dir && r("off", l);
                        break;
                    case "click":
                        if ("stepped" !== i.type || o.tweenRunning)
                            return;
                        r("on", l)
                    }
                }
            })
        }, q = function() {
            function t(t) {
                function a(e, t) {
                    r.type = i.keyboard.scrollType,
                    r.scrollAmount = i.keyboard.scrollAmount,
                    "stepped" === r.type && n.tweenRunning || j(o, e, t)
                }
                switch (t.type) {
                case "blur":
                    n.tweenRunning && r.dir && a("off", null);
                    break;
                case "keydown":
                case "keyup":
                    var l = t.keyCode ? t.keyCode : t.which
                      , s = "on";
                    if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
                        if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1])
                            return;
                        "keyup" === t.type && (s = "off"),
                        e(document.activeElement).is(u) || (t.preventDefault(),
                        t.stopImmediatePropagation(),
                        a(s, l))
                    } else if (33 === l || 34 === l) {
                        if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(),
                        t.stopImmediatePropagation()),
                        "keyup" === t.type) {
                            Q(o);
                            var f = 34 === l ? -1 : 1;
                            if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0])
                                var h = "x"
                                  , m = Math.abs(c[0].offsetLeft) - f * (.9 * d.width());
                            else
                                var h = "y"
                                  , m = Math.abs(c[0].offsetTop) - f * (.9 * d.height());
                            G(o, m.toString(), {
                                dir: h,
                                scrollEasing: "mcsEaseInOut"
                            })
                        }
                    } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(),
                    t.stopImmediatePropagation()),
                    "keyup" === t.type)) {
                        if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0])
                            var h = "x"
                              , m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
                        else
                            var h = "y"
                              , m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                        G(o, m.toString(), {
                            dir: h,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                }
            }
            var o = e(this)
              , n = o.data(a)
              , i = n.opt
              , r = n.sequential
              , l = a + "_" + n.idx
              , s = e("#mCSB_" + n.idx)
              , c = e("#mCSB_" + n.idx + "_container")
              , d = c.parent()
              , u = "input,textarea,select,datalist,keygen,[contenteditable='true']"
              , f = c.find("iframe")
              , h = ["blur." + l + " keydown." + l + " keyup." + l];
            f.length && f.each(function() {
                e(this).bind("load", function() {
                    A(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function(e) {
                        t(e)
                    })
                })
            }),
            s.attr("tabindex", "0").bind(h[0], function(e) {
                t(e)
            })
        }, j = function(t, o, n, i, r) {
            function l(e) {
                u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);
                var o = "stepped" !== f.type
                  , a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60
                  , n = e ? o ? 7.5 : 40 : 2.5
                  , s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)]
                  , d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x]
                  , m = "x" === f.dir[0] ? s[1] + f.dir[1] * (d[1] * n) : s[0] + f.dir[1] * (d[0] * n)
                  , v = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount)
                  , x = "auto" !== f.scrollAmount ? v : m
                  , _ = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"
                  , w = !!e;
                return e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]),
                G(t, x.toString(), {
                    dir: f.dir[0],
                    scrollEasing: _,
                    dur: a,
                    onComplete: w
                }),
                e ? void (f.dir = !1) : (clearTimeout(f.step),
                void (f.step = setTimeout(function() {
                    l()
                }, a)))
            }
            function s() {
                clearTimeout(f.step),
                $(f, "step"),
                Q(t)
            }
            var c = t.data(a)
              , u = c.opt
              , f = c.sequential
              , h = e("#mCSB_" + c.idx + "_container")
              , m = "stepped" === f.type
              , p = u.scrollInertia < 26 ? 26 : u.scrollInertia
              , g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
            switch (o) {
            case "on":
                if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1],
                Q(t),
                oe(n) && "stepped" === f.type)
                    return;
                l(m);
                break;
            case "off":
                s(),
                (m || c.tweenRunning && f.dir) && l(!0)
            }
        }, Y = function(t) {
            var o = e(this).data(a).opt
              , n = [];
            return "function" == typeof t && (t = t()),
            t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t,
            n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t),
            "function" == typeof n[0] && (n[0] = n[0]()),
            "function" == typeof n[1] && (n[1] = n[1]()),
            n
        }, X = function(t, o) {
            if (null != t && "undefined" != typeof t) {
                var n = e(this)
                  , i = n.data(a)
                  , r = i.opt
                  , l = e("#mCSB_" + i.idx + "_container")
                  , s = l.parent()
                  , c = typeof t;
                o || (o = "x" === r.axis ? "x" : "y");
                var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height()
                  , f = "x" === o ? l[0].offsetLeft : l[0].offsetTop
                  , h = "x" === o ? "left" : "top";
                switch (c) {
                case "function":
                    return t();
                case "object":
                    var m = t.jquery ? t : e(t);
                    if (!m.length)
                        return;
                    return "x" === o ? ae(m)[1] : ae(m)[0];
                case "string":
                case "number":
                    if (oe(t))
                        return Math.abs(t);
                    if (-1 !== t.indexOf("%"))
                        return Math.abs(d * parseInt(t) / 100);
                    if (-1 !== t.indexOf("-="))
                        return Math.abs(f - parseInt(t.split("-=")[1]));
                    if (-1 !== t.indexOf("+=")) {
                        var p = f + parseInt(t.split("+=")[1]);
                        return p >= 0 ? 0 : Math.abs(p)
                    }
                    if (-1 !== t.indexOf("px") && oe(t.split("px")[0]))
                        return Math.abs(t.split("px")[0]);
                    if ("top" === t || "left" === t)
                        return 0;
                    if ("bottom" === t)
                        return Math.abs(s.height() - l.outerHeight(!1));
                    if ("right" === t)
                        return Math.abs(s.width() - l.outerWidth(!1));
                    if ("first" === t || "last" === t) {
                        var m = l.find(":" + t);
                        return "x" === o ? ae(m)[1] : ae(m)[0]
                    }
                    return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t),
                    void u.update.call(null, n[0]))
                }
            }
        }, N = function(t) {
            function o() {
                return clearTimeout(f[0].autoUpdate),
                0 === l.parents("html").length ? void (l = null) : void (f[0].autoUpdate = setTimeout(function() {
                    return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(),
                    s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n,
                    void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth,
                    s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n,
                    void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length,
                    s.poll.img.n === s.poll.img.o) ? void ((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n,
                    void f.find("img").each(function() {
                        n(this)
                    }))
                }, c.advanced.autoUpdateTimeout))
            }
            function n(t) {
                function o(e, t) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
                function a() {
                    this.onload = null,
                    e(t).addClass(d[2]),
                    r(2)
                }
                if (e(t).hasClass(d[2]))
                    return void r();
                var n = new Image;
                n.onload = o(n, a),
                n.src = t.src
            }
            function i() {
                c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
                var e = 0
                  , t = f.find(c.advanced.updateOnSelectorChange);
                return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function() {
                    e += this.offsetHeight + this.offsetWidth
                }),
                e
            }
            function r(e) {
                clearTimeout(f[0].autoUpdate),
                u.update.call(null, l[0], e)
            }
            var l = e(this)
              , s = l.data(a)
              , c = s.opt
              , f = e("#mCSB_" + s.idx + "_container");
            return t ? (clearTimeout(f[0].autoUpdate),
            void $(f[0], "autoUpdate")) : void o()
        }, V = function(e, t, o) {
            return Math.round(e / t) * t - o
        }, Q = function(t) {
            var o = t.data(a)
              , n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
            n.each(function() {
                Z.call(this)
            })
        }, G = function(t, o, n) {
            function i(e) {
                return s && c.callbacks[e] && "function" == typeof c.callbacks[e]
            }
            function r() {
                return [c.callbacks.alwaysTriggerOffsets || w >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= w]
            }
            function l() {
                var e = [h[0].offsetTop, h[0].offsetLeft]
                  , o = [x[0].offsetTop, x[0].offsetLeft]
                  , a = [h.outerHeight(!1), h.outerWidth(!1)]
                  , i = [f.height(), f.width()];
                t[0].mcs = {
                    content: h,
                    top: e[0],
                    left: e[1],
                    draggerTop: o[0],
                    draggerLeft: o[1],
                    topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
                    leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
                    direction: n.dir
                }
            }
            var s = t.data(a)
              , c = s.opt
              , d = {
                trigger: "internal",
                dir: "y",
                scrollEasing: "mcsEaseOut",
                drag: !1,
                dur: c.scrollInertia,
                overwrite: "all",
                callbacks: !0,
                onStart: !0,
                onUpdate: !0,
                onComplete: !0
            }
              , n = e.extend(d, n)
              , u = [n.dur, n.drag ? 0 : n.dur]
              , f = e("#mCSB_" + s.idx)
              , h = e("#mCSB_" + s.idx + "_container")
              , m = h.parent()
              , p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0]
              , g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
            if (s.trigger = n.trigger,
            0 === m.scrollTop() && 0 === m.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"),
            m.scrollTop(0).scrollLeft(0)),
            "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]),
            s.contentReset.y = 1),
            "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]),
            s.contentReset.x = 1),
            "_resetY" !== o && "_resetX" !== o) {
                if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]),
                s.contentReset.x = null),
                !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]),
                s.contentReset.x = null),
                c.snapAmount) {
                    var v = c.snapAmount instanceof Array ? "x" === n.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                    o = V(o, v, c.snapOffset)
                }
                switch (n.dir) {
                case "x":
                    var x = e("#mCSB_" + s.idx + "_dragger_horizontal")
                      , _ = "left"
                      , w = h[0].offsetLeft
                      , S = [f.width() - h.outerWidth(!1), x.parent().width() - x.width()]
                      , b = [o, 0 === o ? 0 : o / s.scrollRatio.x]
                      , y = p[1]
                      , B = g[1]
                      , T = y > 0 ? y / s.scrollRatio.x : 0
                      , k = B > 0 ? B / s.scrollRatio.x : 0;
                    break;
                case "y":
                    var x = e("#mCSB_" + s.idx + "_dragger_vertical")
                      , _ = "top"
                      , w = h[0].offsetTop
                      , S = [f.height() - h.outerHeight(!1), x.parent().height() - x.height()]
                      , b = [o, 0 === o ? 0 : o / s.scrollRatio.y]
                      , y = p[0]
                      , B = g[0]
                      , T = y > 0 ? y / s.scrollRatio.y : 0
                      , k = B > 0 ? B / s.scrollRatio.y : 0
                }
                b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0],
                t[0].mcs || (l(),
                i("onInit") && c.callbacks.onInit.call(t[0])),
                clearTimeout(h[0].onCompleteTimeout),
                J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing),
                !s.tweenRunning && (0 === w && b[0] >= 0 || w === S[0] && b[0] <= S[0]) || J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, {
                    onStart: function() {
                        n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(),
                        c.callbacks.onScrollStart.call(t[0])),
                        s.tweenRunning = !0,
                        C(x),
                        s.cbOffsets = r())
                    },
                    onUpdate: function() {
                        n.callbacks && n.onUpdate && i("whileScrolling") && (l(),
                        c.callbacks.whileScrolling.call(t[0]))
                    },
                    onComplete: function() {
                        if (n.callbacks && n.onComplete) {
                            "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
                            var e = h[0].idleTimer || 0;
                            h[0].onCompleteTimeout = setTimeout(function() {
                                i("onScroll") && (l(),
                                c.callbacks.onScroll.call(t[0])),
                                i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(),
                                c.callbacks.onTotalScroll.call(t[0])),
                                i("onTotalScrollBack") && b[1] <= k && s.cbOffsets[1] && (l(),
                                c.callbacks.onTotalScrollBack.call(t[0])),
                                s.tweenRunning = !1,
                                h[0].idleTimer = 0,
                                C(x, "hide")
                            }, e)
                        }
                    }
                })
            }
        }, J = function(e, t, o, a, n, i, r) {
            function l() {
                S.stop || (x || m.call(),
                x = K() - v,
                s(),
                x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1,
                S.time < x + 1 && (S.time = x + 1)),
                S.time < a ? S.id = h(l) : g.call())
            }
            function s() {
                a > 0 ? (S.currVal = u(S.time, _, b, a, n),
                w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px",
                p.call()
            }
            function c() {
                f = 1e3 / 60,
                S.time = x + f,
                h = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
                    return s(),
                    setTimeout(e, .01)
                }
                ,
                S.id = h(l)
            }
            function d() {
                null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id),
                S.id = null)
            }
            function u(e, t, o, a, n) {
                switch (n) {
                case "linear":
                case "mcsLinear":
                    return o * e / a + t;
                case "mcsLinearOut":
                    return e /= a,
                    e--,
                    o * Math.sqrt(1 - e * e) + t;
                case "easeInOutSmooth":
                    return e /= a / 2,
                    1 > e ? o / 2 * e * e + t : (e--,
                    -o / 2 * (e * (e - 2) - 1) + t);
                case "easeInOutStrong":
                    return e /= a / 2,
                    1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--,
                    o / 2 * (-Math.pow(2, -10 * e) + 2) + t);
                case "easeInOut":
                case "mcsEaseInOut":
                    return e /= a / 2,
                    1 > e ? o / 2 * e * e * e + t : (e -= 2,
                    o / 2 * (e * e * e + 2) + t);
                case "easeOutSmooth":
                    return e /= a,
                    e--,
                    -o * (e * e * e * e - 1) + t;
                case "easeOutStrong":
                    return o * (-Math.pow(2, -10 * e / a) + 1) + t;
                case "easeOut":
                case "mcsEaseOut":
                default:
                    var i = (e /= a) * e
                      , r = i * e;
                    return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e)
                }
            }
            e._mTween || (e._mTween = {
                top: {},
                left: {}
            });
            var f, h, r = r || {}, m = r.onStart || function() {}
            , p = r.onUpdate || function() {}
            , g = r.onComplete || function() {}
            , v = K(), x = 0, _ = e.offsetTop, w = e.style, S = e._mTween[t];
            "left" === t && (_ = e.offsetLeft);
            var b = o - _;
            S.stop = 0,
            "none" !== i && d(),
            c()
        }, K = function() {
            return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
        }, Z = function() {
            var e = this;
            e._mTween || (e._mTween = {
                top: {},
                left: {}
            });
            for (var t = ["top", "left"], o = 0; o < t.length; o++) {
                var a = t[o];
                e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id),
                e._mTween[a].id = null,
                e._mTween[a].stop = 1)
            }
        }, $ = function(e, t) {
            try {
                delete e[t]
            } catch (o) {
                e[t] = null
            }
        }, ee = function(e) {
            return !(e.which && 1 !== e.which)
        }, te = function(e) {
            var t = e.originalEvent.pointerType;
            return !(t && "touch" !== t && 2 !== t)
        }, oe = function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, ae = function(e) {
            var t = e.parents(".mCSB_container");
            return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
        }, ne = function() {
            function e() {
                var e = ["webkit", "moz", "ms", "o"];
                if ("hidden"in document)
                    return "hidden";
                for (var t = 0; t < e.length; t++)
                    if (e[t] + "Hidden"in document)
                        return e[t] + "Hidden";
                return null
            }
            var t = e();
            return t ? document[t] : !1
        };
        e.fn[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }
        ,
        e[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }
        ,
        e[o].defaults = i,
        window[o] = !0,
        e(window).bind("load", function() {
            e(n)[o](),
            e.extend(e.expr[":"], {
                mcsInView: e.expr[":"].mcsInView || function(t) {
                    var o, a, n = e(t), i = n.parents(".mCSB_container");
                    if (i.length)
                        return o = i.parent(),
                        a = [i[0].offsetTop, i[0].offsetLeft],
                        a[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1)
                }
                ,
                mcsInSight: e.expr[":"].mcsInSight || function(t, o, a) {
                    var n, i, r, l, s = e(t), c = s.parents(".mCSB_container"), d = "exact" === a[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
                    if (c.length)
                        return n = [s.outerHeight(!1), s.outerWidth(!1)],
                        r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]],
                        i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth],
                        l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]],
                        r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0
                }
                ,
                mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
                    var o = e(t).data(a);
                    if (o)
                        return o.overflowed[0] || o.overflowed[1]
                }
            })
        })
    })
});
/*jquery.form.js*/
!function(C) {
    "use strict";
    var g = {};
    function r(e) {
        var t = e.data;
        e.isDefaultPrevented() || (e.preventDefault(),
        C(this).ajaxSubmit(t))
    }
    function a(e) {
        var t = e.target
          , r = C(t);
        if (!r.is("[type=submit],[type=image]")) {
            var a = r.closest("[type=submit]");
            if (0 === a.length)
                return;
            t = a[0]
        }
        var n, o = this;
        "image" == (o.clk = t).type && (void 0 !== e.offsetX ? (o.clk_x = e.offsetX,
        o.clk_y = e.offsetY) : "function" == typeof C.fn.offset ? (n = r.offset(),
        o.clk_x = e.pageX - n.left,
        o.clk_y = e.pageY - n.top) : (o.clk_x = e.pageX - t.offsetLeft,
        o.clk_y = e.pageY - t.offsetTop)),
        setTimeout(function() {
            o.clk = o.clk_x = o.clk_y = null
        }, 100)
    }
    function _() {
        var e;
        C.fn.ajaxSubmit.debug && (e = "[jquery.form] " + Array.prototype.join.call(arguments, ""),
        window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e))
    }
    g.fileapi = void 0 !== C("<input type='file'/>").get(0).files,
    g.formdata = void 0 !== window.FormData,
    C.fn.ajaxSubmit = function(M) {
        if (!this.length)
            return _("ajaxSubmit: skipping submit process - no element selected"),
            this;
        var F, e, t, O = this;
        "function" == typeof M && (M = {
            success: M
        }),
        F = this.attr("method"),
        t = (t = (t = "string" == typeof (e = this.attr("action")) ? C.trim(e) : "") || window.location.href || "") && (t.match(/^([^#]+)/) || [])[1],
        M = C.extend(!0, {
            url: t,
            success: C.ajaxSettings.success,
            type: F || "GET",
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, M);
        var r = {};
        if (this.trigger("form-pre-serialize", [this, M, r]),
        r.veto)
            return _("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),
            this;
        if (M.beforeSerialize && !1 === M.beforeSerialize(this, M))
            return _("ajaxSubmit: submit aborted via beforeSerialize callback"),
            this;
        var a = M.traditional;
        void 0 === a && (a = C.ajaxSettings.traditional);
        var n, X = [], o = this.formToArray(M.semantic, X);
        if (M.data && (M.extraData = M.data,
        n = C.param(M.data, a)),
        M.beforeSubmit && !1 === M.beforeSubmit(o, this, M))
            return _("ajaxSubmit: submit aborted via beforeSubmit callback"),
            this;
        if (this.trigger("form-submit-validate", [o, this, M, r]),
        r.veto)
            return _("ajaxSubmit: submit vetoed via form-submit-validate trigger"),
            this;
        var i = C.param(o, a);
        n && (i = i ? i + "&" + n : n),
        "GET" == M.type.toUpperCase() ? (M.url += (0 <= M.url.indexOf("?") ? "&" : "?") + i,
        M.data = null) : M.data = i;
        var s, u = [];
        M.resetForm && u.push(function() {
            O.resetForm()
        }),
        M.clearForm && u.push(function() {
            O.clearForm(M.includeHidden)
        }),
        !M.dataType && M.target ? (s = M.success || function() {}
        ,
        u.push(function(e) {
            var t = M.replaceTarget ? "replaceWith" : "html";
            C(M.target)[t](e).each(s, arguments)
        })) : M.success && u.push(M.success),
        M.success = function(e, t, r) {
            for (var a = M.context || this, n = 0, o = u.length; n < o; n++)
                u[n].apply(a, [e, t, r || O, O])
        }
        ;
        var l = 0 < C('input[type=file]:enabled[value!=""]', this).length
          , c = "multipart/form-data"
          , f = O.attr("enctype") == c || O.attr("encoding") == c
          , m = g.fileapi && g.formdata;
        _("fileAPI :" + m);
        var d, p = (l || f) && !m;
        !1 !== M.iframe && (M.iframe || p) ? M.closeKeepAlive ? C.get(M.closeKeepAlive, function() {
            d = v(o)
        }) : d = v(o) : d = (l || f) && m ? function(e) {
            for (var r = new FormData, t = 0; t < e.length; t++)
                r.append(e[t].name, e[t].value);
            if (M.extraData) {
                var a = function(e) {
                    var t, r, a = C.param(e).split("&"), n = a.length, o = {};
                    for (t = 0; t < n; t++)
                        r = a[t].split("="),
                        o[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
                    return o
                }(M.extraData);
                for (var n in a)
                    a.hasOwnProperty(n) && r.append(n, a[n])
            }
            M.data = null;
            var o = C.extend(!0, {}, C.ajaxSettings, M, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: F || "POST"
            });
            M.uploadProgress && (o.xhr = function() {
                var e = jQuery.ajaxSettings.xhr();
                return e.upload && (e.upload.onprogress = function(e) {
                    var t = 0
                      , r = e.loaded || e.position
                      , a = e.total;
                    e.lengthComputable && (t = Math.ceil(r / a * 100)),
                    M.uploadProgress(e, r, a, t)
                }
                ),
                e
            }
            );
            o.data = null;
            var i = o.beforeSend;
            return o.beforeSend = function(e, t) {
                t.data = r,
                i && i.call(this, e, t)
            }
            ,
            C.ajax(o)
        }(o) : C.ajax(M),
        O.removeData("jqxhr").data("jqxhr", d);
        for (var h = 0; h < X.length; h++)
            X[h] = null;
        return this.trigger("form-submit-notify", [this, M]),
        this;
        function v(e) {
            var t, r, c, f, n, m, d, p, a, o, h, v, i = O[0], s = !!C.fn.prop, g = C.Deferred();
            if (C("[name=submit],[id=submit]", i).length)
                return alert('Error: Form elements must not have name or id of "submit".'),
                g.reject(),
                g;
            if (e)
                for (r = 0; r < X.length; r++)
                    t = C(X[r]),
                    s ? t.prop("disabled", !1) : t.removeAttr("disabled");
            if ((c = C.extend(!0, {}, C.ajaxSettings, M)).context = c.context || c,
            n = "jqFormIO" + (new Date).getTime(),
            c.iframeTarget ? (o = (m = C(c.iframeTarget)).attr("name")) ? n = o : m.attr("name", n) : (m = C('<iframe name="' + n + '" src="' + c.iframeSrc + '" />')).css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            }),
            d = m[0],
            p = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(e) {
                    var t = "timeout" === e ? "timeout" : "aborted";
                    if (_("aborting upload... " + t),
                    this.aborted = 1,
                    d.contentWindow.document.execCommand)
                        try {
                            d.contentWindow.document.execCommand("Stop")
                        } catch (e) {}
                    m.attr("src", c.iframeSrc),
                    p.error = t,
                    c.error && c.error.call(c.context, p, t, e),
                    f && C.event.trigger("ajaxError", [p, c, t]),
                    c.complete && c.complete.call(c.context, p, t)
                }
            },
            (f = c.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
            f && C.event.trigger("ajaxSend", [p, c]),
            c.beforeSend && !1 === c.beforeSend.call(c.context, p, c))
                return c.global && C.active--,
                g.reject(),
                g;
            if (p.aborted)
                return g.reject(),
                g;
            (a = i.clk) && (o = a.name) && !a.disabled && (c.extraData = c.extraData || {},
            c.extraData[o] = a.value,
            "image" == a.type && (c.extraData[o + ".x"] = i.clk_x,
            c.extraData[o + ".y"] = i.clk_y));
            var x = 1
              , b = 2;
            function y(e) {
                return e.contentWindow ? e.contentWindow.document : e.contentDocument ? e.contentDocument : e.document
            }
            var u = C("meta[name=csrf-token]").attr("content")
              , l = C("meta[name=csrf-param]").attr("content");
            function T() {
                var e = O.attr("target")
                  , t = O.attr("action");
                i.setAttribute("target", n),
                F || i.setAttribute("method", "POST"),
                t != c.url && i.setAttribute("action", c.url),
                c.skipEncodingOverride || F && !/post/i.test(F) || O.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }),
                c.timeout && (v = setTimeout(function() {
                    h = !0,
                    D(x)
                }, c.timeout));
                var r = [];
                try {
                    if (c.extraData)
                        for (var a in c.extraData)
                            c.extraData.hasOwnProperty(a) && (C.isPlainObject(c.extraData[a]) && c.extraData[a].hasOwnProperty("name") && c.extraData[a].hasOwnProperty("value") ? r.push(C('<input type="hidden" name="' + c.extraData[a].name + '">').attr("value", c.extraData[a].value).appendTo(i)[0]) : r.push(C('<input type="hidden" name="' + a + '">').attr("value", c.extraData[a]).appendTo(i)[0]));
                    c.iframeTarget || (m.appendTo("body"),
                    d.attachEvent ? d.attachEvent("onload", D) : d.addEventListener("load", D, !1)),
                    setTimeout(function e() {
                        try {
                            var t = y(d).readyState;
                            _("state = " + t),
                            t && "uninitialized" == t.toLowerCase() && setTimeout(e, 50)
                        } catch (e) {
                            _("Server abort: ", e, " (", e.name, ")"),
                            D(b),
                            v && clearTimeout(v),
                            v = void 0
                        }
                    }, 15),
                    i.submit()
                } finally {
                    i.setAttribute("action", t),
                    e ? i.setAttribute("target", e) : O.removeAttr("target"),
                    C(r).remove()
                }
            }
            l && u && (c.extraData = c.extraData || {},
            c.extraData[l] = u),
            c.forceSync ? T() : setTimeout(T, 10);
            var j, w, S, k = 50;
            function D(t) {
                if (!p.aborted && !S) {
                    try {
                        w = y(d)
                    } catch (e) {
                        _("cannot access response document: ", e),
                        t = b
                    }
                    if (t === x && p)
                        return p.abort("timeout"),
                        void g.reject(p, "timeout");
                    if (t == b && p)
                        return p.abort("server abort"),
                        void g.reject(p, "error", "server abort");
                    if (w && w.location.href != c.iframeSrc || h) {
                        d.detachEvent ? d.detachEvent("onload", D) : d.removeEventListener("load", D, !1);
                        var e, r = "success";
                        try {
                            if (h)
                                throw "timeout";
                            var a = "xml" == c.dataType || w.XMLDocument || C.isXMLDoc(w);
                            if (_("isXml=" + a),
                            !a && window.opera && (null === w.body || !w.body.innerHTML) && --k)
                                return _("requeing onLoad callback, DOM not available"),
                                void setTimeout(D, 250);
                            var n = w.body ? w.body : w.documentElement;
                            p.responseText = n ? n.innerHTML : null,
                            p.responseXML = w.XMLDocument ? w.XMLDocument : w,
                            a && (c.dataType = "xml"),
                            p.getResponseHeader = function(e) {
                                return {
                                    "content-type": c.dataType
                                }[e]
                            }
                            ,
                            n && (p.status = Number(n.getAttribute("status")) || p.status,
                            p.statusText = n.getAttribute("statusText") || p.statusText);
                            var o, i, s, u = (c.dataType || "").toLowerCase(), l = /(json|script|text)/.test(u);
                            l || c.textarea ? (o = w.getElementsByTagName("textarea")[0]) ? (p.responseText = o.value,
                            p.status = Number(o.getAttribute("status")) || p.status,
                            p.statusText = o.getAttribute("statusText") || p.statusText) : l && (i = w.getElementsByTagName("pre")[0],
                            s = w.getElementsByTagName("body")[0],
                            i ? p.responseText = i.textContent ? i.textContent : i.innerText : s && (p.responseText = s.textContent ? s.textContent : s.innerText)) : "xml" == u && !p.responseXML && p.responseText && (p.responseXML = A(p.responseText));
                            try {
                                j = E(p, u, c)
                            } catch (t) {
                                r = "parsererror",
                                p.error = e = t || r
                            }
                        } catch (t) {
                            _("error caught: ", t),
                            r = "error",
                            p.error = e = t || r
                        }
                        p.aborted && (_("upload aborted"),
                        r = null),
                        p.status && (r = 200 <= p.status && p.status < 300 || 304 === p.status ? "success" : "error"),
                        "success" === r ? (c.success && c.success.call(c.context, j, "success", p),
                        g.resolve(p.responseText, "success", p),
                        f && C.event.trigger("ajaxSuccess", [p, c])) : r && (void 0 === e && (e = p.statusText),
                        c.error && c.error.call(c.context, p, r, e),
                        g.reject(p, "error", e),
                        f && C.event.trigger("ajaxError", [p, c, e])),
                        f && C.event.trigger("ajaxComplete", [p, c]),
                        f && !--C.active && C.event.trigger("ajaxStop"),
                        c.complete && c.complete.call(c.context, p, r),
                        S = !0,
                        c.timeout && clearTimeout(v),
                        setTimeout(function() {
                            c.iframeTarget || m.remove(),
                            p.responseXML = null
                        }, 100)
                    }
                }
            }
            var A = C.parseXML || function(e, t) {
                return window.ActiveXObject ? ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
                t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"),
                t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
            }
              , L = C.parseJSON || function(e) {
                return window.eval("(" + e + ")")
            }
              , E = function(e, t, r) {
                var a = e.getResponseHeader("content-type") || ""
                  , n = "xml" === t || !t && 0 <= a.indexOf("xml")
                  , o = n ? e.responseXML : e.responseText;
                return n && "parsererror" === o.documentElement.nodeName && C.error && C.error("parsererror"),
                r && r.dataFilter && (o = r.dataFilter(o, t)),
                "string" == typeof o && ("json" === t || !t && 0 <= a.indexOf("json") ? o = L(o) : ("script" === t || !t && 0 <= a.indexOf("javascript")) && C.globalEval(o)),
                o
            };
            return g
        }
    }
    ,
    C.fn.ajaxForm = function(e) {
        if ((e = e || {}).delegation = e.delegation && C.isFunction(C.fn.on),
        e.delegation || 0 !== this.length)
            return e.delegation ? (C(document).off("submit.form-plugin", this.selector, r).off("click.form-plugin", this.selector, a).on("submit.form-plugin", this.selector, e, r).on("click.form-plugin", this.selector, e, a),
            this) : this.ajaxFormUnbind().bind("submit.form-plugin", e, r).bind("click.form-plugin", e, a);
        var t = {
            s: this.selector,
            c: this.context
        };
        return !C.isReady && t.s ? (_("DOM not ready, queuing ajaxForm"),
        C(function() {
            C(t.s, t.c).ajaxForm(e)
        })) : _("terminating; zero elements found by selector" + (C.isReady ? "" : " (DOM not ready)")),
        this
    }
    ,
    C.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }
    ,
    C.fn.formToArray = function(e, t) {
        var r = [];
        if (0 === this.length)
            return r;
        var a, n, o, i, s, u, l, c, f, m = this[0], d = e ? m.getElementsByTagName("*") : m.elements;
        if (!d)
            return r;
        for (a = 0,
        s = d.length; a < s; a++)
            if (f = (i = d[a]).name)
                if (e && m.clk && "image" == i.type)
                    i.disabled || m.clk != i || (r.push({
                        name: f,
                        value: C(i).val(),
                        type: i.type
                    }),
                    r.push({
                        name: f + ".x",
                        value: m.clk_x
                    }, {
                        name: f + ".y",
                        value: m.clk_y
                    }));
                else if ((o = C.fieldValue(i, !0)) && o.constructor == Array)
                    for (t && t.push(i),
                    n = 0,
                    u = o.length; n < u; n++)
                        r.push({
                            name: f,
                            value: o[n]
                        });
                else if (g.fileapi && "file" == i.type && !i.disabled) {
                    t && t.push(i);
                    var p = i.files;
                    if (p.length)
                        for (n = 0; n < p.length; n++)
                            r.push({
                                name: f,
                                value: p[n],
                                type: i.type
                            });
                    else
                        r.push({
                            name: f,
                            value: "",
                            type: i.type
                        })
                } else
                    null != o && (t && t.push(i),
                    r.push({
                        name: f,
                        value: o,
                        type: i.type,
                        required: i.required
                    }));
        return e || !m.clk || (f = (c = (l = C(m.clk))[0]).name) && !c.disabled && "image" == c.type && (r.push({
            name: f,
            value: l.val()
        }),
        r.push({
            name: f + ".x",
            value: m.clk_x
        }, {
            name: f + ".y",
            value: m.clk_y
        })),
        r
    }
    ,
    C.fn.formSerialize = function(e) {
        return C.param(this.formToArray(e))
    }
    ,
    C.fn.fieldSerialize = function(n) {
        var o = [];
        return this.each(function() {
            var e = this.name;
            if (e) {
                var t = C.fieldValue(this, n);
                if (t && t.constructor == Array)
                    for (var r = 0, a = t.length; r < a; r++)
                        o.push({
                            name: e,
                            value: t[r]
                        });
                else
                    null != t && o.push({
                        name: this.name,
                        value: t
                    })
            }
        }),
        C.param(o)
    }
    ,
    C.fn.fieldValue = function(e) {
        for (var t = [], r = 0, a = this.length; r < a; r++) {
            var n = this[r]
              , o = C.fieldValue(n, e);
            null == o || o.constructor == Array && !o.length || (o.constructor == Array ? C.merge(t, o) : t.push(o))
        }
        return t
    }
    ,
    C.fieldValue = function(e, t) {
        var r = e.name
          , a = e.type
          , n = e.tagName.toLowerCase();
        if (void 0 === t && (t = !0),
        t && (!r || e.disabled || "reset" == a || "button" == a || ("checkbox" == a || "radio" == a) && !e.checked || ("submit" == a || "image" == a) && e.form && e.form.clk != e || "select" == n && -1 == e.selectedIndex))
            return null;
        if ("select" != n)
            return C(e).val();
        var o = e.selectedIndex;
        if (o < 0)
            return null;
        for (var i = [], s = e.options, u = "select-one" == a, l = u ? o + 1 : s.length, c = u ? o : 0; c < l; c++) {
            var f = s[c];
            if (f.selected) {
                var m = (m = f.value) || (f.attributes && f.attributes.value && !f.attributes.value.specified ? f.text : f.value);
                if (u)
                    return m;
                i.push(m)
            }
        }
        return i
    }
    ,
    C.fn.clearForm = function(e) {
        return this.each(function() {
            C("input,select,textarea", this).clearFields(e)
        })
    }
    ,
    C.fn.clearFields = C.fn.clearInputs = function(r) {
        var a = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var e = this.type
              , t = this.tagName.toLowerCase();
            a.test(e) || "textarea" == t ? this.value = "" : "checkbox" == e || "radio" == e ? this.checked = !1 : "select" == t ? this.selectedIndex = -1 : r && (!0 === r && /hidden/.test(e) || "string" == typeof r && C(this).is(r)) && (this.value = "")
        })
    }
    ,
    C.fn.resetForm = function() {
        return this.each(function() {
            "function" != typeof this.reset && ("object" != typeof this.reset || this.reset.nodeType) || this.reset()
        })
    }
    ,
    C.fn.enable = function(e) {
        return void 0 === e && (e = !0),
        this.each(function() {
            this.disabled = !e
        })
    }
    ,
    C.fn.selected = function(r) {
        return void 0 === r && (r = !0),
        this.each(function() {
            var e, t = this.type;
            "checkbox" == t || "radio" == t ? this.checked = r : "option" == this.tagName.toLowerCase() && (e = C(this).parent("select"),
            r && e[0] && "select-one" == e[0].type && e.find("option").selected(!1),
            this.selected = r)
        })
    }
    ,
    C.fn.ajaxSubmit.debug = !1
}(jQuery);
/*! jQuery Validation Plugin - v1.14.0 - 6/30/2015*/
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length)
                return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"),
            c = new a.validator(b,this[0]),
            a.data(this[0], "validator", c),
            c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
                c.settings.submitHandler && (c.submitButton = b.target),
                a(this).hasClass("cancel") && (c.cancelSubmit = !0),
                void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
            }),
            this.on("submit.validate", function(b) {
                function d() {
                    var d, e;
                    return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),
                    e = c.settings.submitHandler.call(c, c.currentForm, b),
                    c.submitButton && d.remove(),
                    void 0 !== e ? e : !1) : !0
                }
                return c.settings.debug && b.preventDefault(),
                c.cancelSubmit ? (c.cancelSubmit = !1,
                d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0,
                !1) : d() : (c.focusInvalid(),
                !1)
            })),
            c)
        },
        valid: function() {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [],
            b = !0,
            c = a(this[0].form).validate(),
            this.each(function() {
                b = c.element(this) && b,
                d = d.concat(c.errorList)
            }),
            c.errorList = d),
            b
        },
        rules: function(b, c) {
            var d, e, f, g, h, i, j = this[0];
            if (b)
                switch (d = a.data(j.form, "validator").settings,
                e = d.rules,
                f = a.validator.staticRules(j),
                b) {
                case "add":
                    a.extend(f, a.validator.normalizeRule(c)),
                    delete f.messages,
                    e[j.name] = f,
                    c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                    break;
                case "remove":
                    return c ? (i = {},
                    a.each(c.split(/\s/), function(b, c) {
                        i[c] = f[c],
                        delete f[c],
                        "required" === c && a(j).removeAttr("aria-required")
                    }),
                    i) : (delete e[j.name],
                    f)
                }
            return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j),
            g.required && (h = g.required,
            delete g.required,
            g = a.extend({
                required: h
            }, g),
            a(j).attr("aria-required", "true")),
            g.remote && (h = g.remote,
            delete g.remote,
            g = a.extend(g, {
                remote: h
            })),
            g
        }
    }),
    a.extend(a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + a(b).val())
        },
        filled: function(b) {
            return !!a.trim("" + a(b).val())
        },
        unchecked: function(b) {
            return !a(b).prop("checked")
        }
    }),
    a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b),
        this.currentForm = c,
        this.init()
    }
    ,
    a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b),
            a.validator.format.apply(this, c)
        }
        : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)),
        c.constructor !== Array && (c = [c]),
        a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}","g"), function() {
                return c
            })
        }),
        b)
    }
    ,
    a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a,
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(b, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b === this.lastElement) && this.element(b)
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    var c = a.data(this.form, "validator")
                      , d = "on" + b.type.replace(/^validate/, "")
                      , e = c.settings;
                    e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm),
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function(b, c) {
                    "string" == typeof c && (c = c.split(/\s/)),
                    a.each(c, function(a, c) {
                        d[c] = b
                    })
                }),
                c = this.settings.rules,
                a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }),
                a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b),
                this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler),
                a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(),
                a.extend(this.submitted, this.errorMap),
                this.invalid = a.extend({}, this.errorMap),
                this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++)
                    this.check(b[a]);
                return this.valid()
            },
            element: function(b) {
                var c = this.clean(b)
                  , d = this.validationTargetFor(c)
                  , e = !0;
                return this.lastElement = d,
                void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d),
                this.currentElements = a(d),
                e = this.check(d) !== !1,
                e ? delete this.invalid[d.name] : this.invalid[d.name] = !0),
                a(b).attr("aria-invalid", !e),
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                e
            },
            showErrors: function(b) {
                if (b) {
                    a.extend(this.errorMap, b),
                    this.errorList = [];
                    for (var c in b)
                        this.errorList.push({
                            message: b[c],
                            element: this.findByName(c)[0]
                        });
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(),
                this.submitted = {},
                this.lastElement = null,
                this.prepareForm(),
                this.hideErrors();
                var b, c = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                if (this.settings.unhighlight)
                    for (b = 0; c[b]; b++)
                        this.settings.unhighlight.call(this, c[b], this.settings.errorClass, "");
                else
                    c.removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b, c = 0;
                for (b in a)
                    c++;
                return c
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(a) {
                a.not(this.containers).text(""),
                this.addWrapper(a).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function() {
                var b = this
                  , c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0,
                    !0)
                })
            },
            clean: function(b) {
                return a(b)[0]
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            reset: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = a([]),
                this.toHide = a([]),
                this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset(),
                this.toHide = this.errorsFor(a)
            },
            elementValue: function(b) {
                var c, d = a(b), e = b.type;
                return "radio" === e || "checkbox" === e ? this.findByName(b.name).filter(":checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(),
                "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(), g = a.map(f, function(a, b) {
                    return b
                }).length, h = !1, i = this.elementValue(b);
                for (d in f) {
                    e = {
                        method: d,
                        parameters: f[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters),
                        "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue
                        }
                        if (h = !1,
                        "pending" === c)
                            return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c)
                            return this.formatAndAdd(b, e),
                            !1
                    } catch (j) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j),
                        j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."),
                        j
                    }
                }
                if (!h)
                    return this.objectLength(f) && this.successList.push(b),
                    !0
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a])
                        return arguments[a];
                return void 0
            },
            defaultMessage: function(b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            },
            formatAndAdd: function(b, c) {
                var d = this.defaultMessage(b, c.method)
                  , e = /\$?\{(\d+)\}/g;
                "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
                this.errorList.push({
                    message: d,
                    element: b,
                    method: c.method
                }),
                this.errorMap[b.name] = d,
                this.submitted[b.name] = d
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))),
                a
            },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++)
                    c = this.errorList[a],
                    this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (a = 0; this.successList[a]; a++)
                        this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0,
                    b = this.validElements(); b[a]; a++)
                        this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(b, c) {
                var d, e, f, g = this.errorsFor(b), h = this.idOrName(b), i = a(b).attr("aria-describedby");
                g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""),
                d = g,
                this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b),
                g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"),
                i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f,
                a(b).attr("aria-describedby", i),
                e = this.groups[b.name],
                e && a.each(this.groups, function(b, c) {
                    c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"))
                }))),
                !c && this.settings.success && (g.text(""),
                "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)),
                this.toShow = this.toShow.add(g)
            },
            errorsFor: function(b) {
                var c = this.idOrName(b)
                  , d = a(b).attr("aria-describedby")
                  , e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + d.replace(/\s+/g, ", #")),
                this.errors().filter(e)
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(b) {
                return this.checkable(b) && (b = this.findByName(b.name)),
                a(b).not(this.settings.ignore)[0]
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + b + "']")
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                case "select":
                    return a("option:selected", c).length;
                case "input":
                    if (this.checkable(c))
                        return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function(a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(b, c) {
                    return !!a(b, c.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function(a) {
                this.pending[a.name] || (this.pendingRequest++,
                this.pending[a.name] = !0)
            },
            stopRequest: function(b, c) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[b.name],
                c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(),
                this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, "remote")
                })
            },
            destroy: function() {
                this.resetForm(),
                a(this.currentForm).off(".validate").removeData("validator")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
            var c = {}
              , d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }),
            c
        },
        normalizeAttributeRule: function(a, b, c, d) {
            /min|max/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d),
            isNaN(d) && (d = void 0)),
            d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
        },
        attributeRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods)
                "required" === c ? (d = b.getAttribute(c),
                "" === d && (d = !0),
                d = !!d) : d = f.attr(c),
                this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength,
            e
        },
        dataRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods)
                d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()),
                this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function(b) {
            var c = {}
              , d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
            c
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1)
                    return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                    case "string":
                        f = !!a(e.depends, c.form).length;
                        break;
                    case "function":
                        f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
                }
            }),
            a.each(b, function(d, e) {
                b[d] = a.isFunction(e) ? e(c) : e
            }),
            a.each(["minlength", "maxlength"], function() {
                b[this] && (b[this] = Number(b[this]))
            }),
            a.each(["rangelength", "range"], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                b[this] = [Number(c[0]), Number(c[1])]))
            }),
            a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max],
            delete b.min,
            delete b.max),
            null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength],
            delete b.minlength,
            delete b.maxlength)),
            b
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0
                }),
                b = c
            }
            return b
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c,
            a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b],
            c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c))
                    return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            creditcard: function(a, b) {
                if (this.optional(b))
                    return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(a))
                    return !1;
                var c, d, e = 0, f = 0, g = !1;
                if (a = a.replace(/\D/g, ""),
                a.length < 13 || a.length > 19)
                    return !1;
                for (c = a.length - 1; c >= 0; c--)
                    d = a.charAt(c),
                    f = parseInt(d, 10),
                    g && (f *= 2) > 9 && (f -= 9),
                    e += f,
                    g = !g;
                return e % 10 === 0
            },
            minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d
            },
            maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || d >= e
            },
            rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function(a, b, c) {
                return this.optional(b) || c >= a
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.off(".validate-equalTo").on("blur.validate-equalTo", function() {
                    a(c).valid()
                }),
                b === e.val()
            },
            remote: function(b, c, d) {
                if (this.optional(c))
                    return "dependency-mismatch";
                var e, f, g = this.previousValue(c);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}),
                g.originalMessage = this.settings.messages[c.name].remote,
                this.settings.messages[c.name].remote = g.message,
                d = "string" == typeof d && {
                    url: d
                } || d,
                g.old === b ? g.valid : (g.old = b,
                e = this,
                this.startRequest(c),
                f = {},
                f[c.name] = b,
                a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: f,
                    context: e.currentForm,
                    success: function(d) {
                        var f, h, i, j = d === !0 || "true" === d;
                        e.settings.messages[c.name].remote = g.originalMessage,
                        j ? (i = e.formSubmitted,
                        e.prepareElement(c),
                        e.formSubmitted = i,
                        e.successList.push(c),
                        delete e.invalid[c.name],
                        e.showErrors()) : (f = {},
                        h = d || e.defaultMessage(c, "remote"),
                        f[c.name] = g.message = a.isFunction(h) ? h(b) : h,
                        e.invalid[c.name] = !0,
                        e.showErrors(f)),
                        g.valid = j,
                        e.stopRequest(c, j)
                    }
                }, d)),
                "pending")
            }
        }
    });
    var b, c = {};
    a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(),
        c[e] = d)
    }) : (b = a.ajax,
    a.ajax = function(d) {
        var e = ("mode"in d ? d : a.ajaxSettings).mode
          , f = ("port"in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(),
        c[f] = b.apply(this, arguments),
        c[f]) : b.apply(this, arguments)
    }
    )
});
/*Owl Carousel v2.2.1*/
!function(a, b, c, d) {
    function e(b, c) {
        this.settings = null,
        this.options = a.extend({}, e.Defaults, c),
        this.$element = a(b),
        this._handlers = {},
        this._plugins = {},
        this._supress = {},
        this._current = null,
        this._speed = null,
        this._coordinates = [],
        this._breakpoint = null,
        this._width = null,
        this._items = [],
        this._clones = [],
        this._mergers = [],
        this._widths = [],
        this._invalidated = {},
        this._pipe = [],
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        },
        this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        },
        a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)),
        a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)),
        a.each(e.Workers, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)),
        this.setup(),
        this.initialize()
    }
    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    },
    e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    },
    e.Type = {
        Event: "event",
        State: "state"
    },
    e.Plugins = {},
    e.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this.settings.margin || ""
              , c = !this.settings.autoWidth
              , d = this.settings.rtl
              , e = {
                width: "auto",
                "margin-left": d ? b : "",
                "margin-right": d ? "" : b
            };
            !c && this.$stage.children().css(e),
            a.css = e
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin
              , c = null
              , d = this._items.length
              , e = !this.settings.autoWidth
              , f = [];
            for (a.items = {
                merge: !1,
                width: b
            }; d--; )
                c = this._mergers[d],
                c = this.settings.mergeFit && Math.min(c, this.settings.items) || c,
                a.items.merge = c > 1 || a.items.merge,
                f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var b = []
              , c = this._items
              , d = this.settings
              , e = Math.max(2 * d.items, 4)
              , f = 2 * Math.ceil(c.length / 2)
              , g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0
              , h = ""
              , i = "";
            for (g /= 2; g--; )
                b.push(this.normalize(b.length / 2, !0)),
                h += c[b[b.length - 1]][0].outerHTML,
                b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
                i = c[b[b.length - 1]][0].outerHTML + i;
            this._clones = b,
            a(h).addClass("cloned").appendTo(this.$stage),
            a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; )
                d = f[c - 1] || 0,
                e = this._widths[this.relative(c)] + this.settings.margin,
                f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a = this.settings.stagePadding
              , b = this._coordinates
              , c = {
                width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                "padding-left": a || "",
                "padding-right": a || ""
            };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this._coordinates.length
              , c = !this.settings.autoWidth
              , d = this.$stage.children();
            if (c && a.items.merge)
                for (; b--; )
                    a.css.width = this._widths[this.relative(b)],
                    d.eq(b).css(a.css);
            else
                c && (a.css.width = a.items.width,
                d.css(a.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0,
            a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)),
            this.reset(a.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
            for (c = 0,
            d = this._coordinates.length; c < d; c++)
                a = this._coordinates[c - 1] || 0,
                b = Math.abs(this._coordinates[c]) + f * e,
                (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"),
            this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
            this.settings.center && (this.$stage.children(".center").removeClass("center"),
            this.$stage.children().eq(this.current()).addClass("center"))
        }
    }],
    e.prototype.initialize = function() {
        if (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading")) {
            var b, c, e;
            b = this.$element.find("img"),
            c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d,
            e = this.$element.children(c).width(),
            b.length && e <= 0 && this.preloadAutoWidthImages(b)
        }
        this.$element.addClass(this.options.loadingClass),
        this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'),
        this.$element.append(this.$stage.parent()),
        this.replace(this.$element.children().not(this.$stage.parent())),
        this.$element.is(":visible") ? this.refresh() : this.invalidate("width"),
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized")
    }
    ,
    e.prototype.setup = function() {
        var b = this.viewport()
          , c = this.options.responsive
          , d = -1
          , e = null;
        c ? (a.each(c, function(a) {
            a <= b && a > d && (d = Number(a))
        }),
        e = a.extend({}, this.options, c[d]),
        "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
        delete e.responsive,
        e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s","g"), "$1" + d))) : e = a.extend({}, this.options),
        this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }),
        this._breakpoint = d,
        this.settings = e,
        this.invalidate("settings"),
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }
    ,
    e.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1,
        this.settings.merge = !1)
    }
    ,
    e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)),
        this.trigger("prepared", {
            content: c.data
        }),
        c.data
    }
    ,
    e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
            return this[a]
        }, this._invalidated), e = {}; b < c; )
            (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e),
            b++;
        this._invalidated = {},
        !this.is("valid") && this.enter("valid")
    }
    ,
    e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
        case e.Width.Inner:
        case e.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }
    ,
    e.prototype.refresh = function() {
        this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed")
    }
    ,
    e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer),
        this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }
    ,
    e.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"),
        !1) : (this.invalidate("width"),
        this.refresh(),
        this.leave("resizing"),
        void this.trigger("resized")))))
    }
    ,
    e.prototype.registerEventHandlers = function() {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
        this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
        this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
        this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })),
        this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)),
        this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }
    ,
    e.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","),
        d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(),
        d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }),
        this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
        this.invalidate("position")),
        this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
        this.speed(0),
        this._drag.time = (new Date).getTime(),
        this._drag.target = a(b.target),
        this._drag.stage.start = d,
        this._drag.stage.current = d,
        this._drag.pointer = this.pointer(b),
        a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
        a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)),
            Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(),
            this.enter("dragging"),
            this.trigger("drag"))
        }, this)))
    }
    ,
    e.prototype.onDragMove = function(a) {
        var b = null
          , c = null
          , d = null
          , e = this.difference(this._drag.pointer, this.pointer(a))
          , f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(),
        this.settings.loop ? (b = this.coordinates(this.minimum()),
        c = this.coordinates(this.maximum() + 1) - b,
        f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()),
        c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
        d = this.settings.pullDrag ? -1 * e.x / 5 : 0,
        f.x = Math.max(Math.min(f.x, b + d), c + d)),
        this._drag.stage.current = f,
        this.animate(f.x))
    }
    ,
    e.prototype.onDragEnd = function(b) {
        var d = this.difference(this._drag.pointer, this.pointer(b))
          , e = this._drag.stage.current
          , f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
        this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
        this.invalidate("position"),
        this.update(),
        this._drag.direction = f,
        (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })),
        this.is("dragging") && (this.leave("dragging"),
        this.trigger("dragged"))
    }
    ,
    e.prototype.closest = function(b, c) {
        var d = -1
          , e = 30
          , f = this.width()
          , g = this.coordinates();
        return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) {
            return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a),
            d === -1
        }, this)),
        this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())),
        d
    }
    ,
    e.prototype.animate = function(b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
        c && (this.enter("animating"),
        this.trigger("translate")),
        a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : c ? this.$stage.animate({
            left: b + "px"
        }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: b + "px"
        })
    }
    ,
    e.prototype.is = function(a) {
        return this._states.current[a] && this._states.current[a] > 0
    }
    ,
    e.prototype.current = function(a) {
        if (a === d)
            return this._current;
        if (0 === this._items.length)
            return d;
        if (a = this.normalize(a),
        this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)),
            this._current = a,
            this.invalidate("position"),
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }
    ,
    e.prototype.invalidate = function(b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0,
        this.is("valid") && this.leave("valid")),
        a.map(this._invalidated, function(a, b) {
            return b
        })
    }
    ,
    e.prototype.reset = function(a) {
        a = this.normalize(a),
        a !== d && (this._speed = 0,
        this._current = a,
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(a)),
        this.release(["translate", "translated"]))
    }
    ,
    e.prototype.normalize = function(a, b) {
        var c = this._items.length
          , e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2),
        a
    }
    ,
    e.prototype.relative = function(a) {
        return a -= this._clones.length / 2,
        this.normalize(a, !0)
    }
    ,
    e.prototype.maximum = function(a) {
        var b, c, d, e = this.settings, f = this._coordinates.length;
        if (e.loop)
            f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) {
            for (b = this._items.length,
            c = this._items[--b].width(),
            d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin,
            !(c > d)); )
                ;
            f = b + 1
        } else
            f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2),
        Math.max(f, 0)
    }
    ,
    e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }
    ,
    e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0),
        this._items[a])
    }
    ,
    e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0),
        this._mergers[a])
    }
    ,
    e.prototype.clones = function(b) {
        var c = this._clones.length / 2
          , e = c + this._items.length
          , f = function(a) {
            return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
        };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }
    ,
    e.prototype.speed = function(a) {
        return a !== d && (this._speed = a),
        this._speed
    }
    ,
    e.prototype.coordinates = function(b) {
        var c, e = 1, f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1,
        f = b + 1),
        c = this._coordinates[b],
        c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0,
        c = Math.ceil(c))
    }
    ,
    e.prototype.duration = function(a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }
    ,
    e.prototype.to = function(a, b) {
        var c = this.current()
          , d = null
          , e = a - this.relative(c)
          , f = (e > 0) - (e < 0)
          , g = this._items.length
          , h = this.minimum()
          , i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g),
        a = c + e,
        d = ((a - h) % g + g) % g + h,
        d !== a && d - e <= i && d - e > 0 && (c = d - e,
        a = d,
        this.reset(c))) : this.settings.rewind ? (i += 1,
        a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.$element.is(":visible") && this.update()
    }
    ,
    e.prototype.next = function(a) {
        a = a || !1,
        this.to(this.relative(this.current()) + 1, a)
    }
    ,
    e.prototype.prev = function(a) {
        a = a || !1,
        this.to(this.relative(this.current()) - 1, a)
    }
    ,
    e.prototype.onTransitionEnd = function(a) {
        if (a !== d && (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)))
            return !1;
        this.leave("animating"),
        this.trigger("translated")
    }
    ,
    e.prototype.viewport = function() {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."),
        d
    }
    ,
    e.prototype.replace = function(b) {
        this.$stage.empty(),
        this._items = [],
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
        b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b),
            this.$stage.append(b),
            this._items.push(b),
            this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)),
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
        this.invalidate("items")
    }
    ,
    e.prototype.add = function(b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0),
        b = b instanceof jQuery ? b : a(b),
        this.trigger("add", {
            content: b,
            position: c
        }),
        b = this.prepare(b),
        0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b),
        0 !== this._items.length && this._items[c - 1].after(b),
        this._items.push(b),
        this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b),
        this._items.splice(c, 0, b),
        this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate("items"),
        this.trigger("added", {
            content: b,
            position: c
        })
    }
    ,
    e.prototype.remove = function(a) {
        a = this.normalize(a, !0),
        a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate("items"),
        this.trigger("removed", {
            content: null,
            position: a
        }))
    }
    ,
    e.prototype.preloadAutoWidthImages = function(b) {
        b.each(a.proxy(function(b, c) {
            this.enter("pre-loading"),
            c = a(c),
            a(new Image).one("load", a.proxy(function(a) {
                c.attr("src", a.target.src),
                c.css("opacity", 1),
                this.leave("pre-loading"),
                !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }
    ,
    e.prototype.destroy = function() {
        this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        a(c).off(".owl.core"),
        this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer),
        this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins)
            this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s","g"), "")).removeData("owl.carousel")
    }
    ,
    e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
        case "<":
            return d ? a > c : a < c;
        case ">":
            return d ? a < c : a > c;
        case ">=":
            return d ? a <= c : a >= c;
        case "<=":
            return d ? a >= c : a <= c
        }
    }
    ,
    e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
    ,
    e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }
    ,
    e.prototype.trigger = function(b, c, d, f, g) {
        var h = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }
          , i = a.camelCase(a.grep(["on", b, d], function(a) {
            return a
        }).join("-").toLowerCase())
          , j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
            relatedTarget: this
        }, h, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(j)
        }),
        this.register({
            type: e.Type.Event,
            name: b
        }),
        this.$element.trigger(j),
        this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
        j
    }
    ,
    e.prototype.enter = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++
        }, this))
    }
    ,
    e.prototype.leave = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b]--
        }, this))
    }
    ,
    e.prototype.register = function(b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}),
            !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) {
                    return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }
                ,
                a.event.special[b.name].owl = !0
            }
        } else
            b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags,
            this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
                return a.inArray(c, this._states.tags[b.name]) === d
            }, this)))
    }
    ,
    e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }
    ,
    e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }
    ,
    e.prototype.pointer = function(a) {
        var c = {
            x: null,
            y: null
        };
        return a = a.originalEvent || a || b.event,
        a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a,
        a.pageX ? (c.x = a.pageX,
        c.y = a.pageY) : (c.x = a.clientX,
        c.y = a.clientY),
        c
    }
    ,
    e.prototype.isNumeric = function(a) {
        return !isNaN(parseFloat(a))
    }
    ,
    e.prototype.difference = function(a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y
        }
    }
    ,
    a.fn.owlCarousel = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this)
              , f = d.data("owl.carousel");
            f || (f = new e(this,"object" == typeof b && b),
            d.data("owl.carousel", f),
            a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }),
                f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]),
                    f[c].apply(this, [].slice.call(arguments, 1)),
                    this.release([c]))
                }, f))
            })),
            "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }
    ,
    a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._interval = null,
        this._visible = null,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    },
    e.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"),
        this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }
    ,
    e.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible,
        this._core.$element.toggleClass("owl-hidden", !this._visible),
        this._visible && this._core.invalidate("width") && this._core.refresh())
    }
    ,
    e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._loaded = [],
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) {
                        this.load(b)
                    }, this); f++ < e; )
                        this.load(h / 2 + this._core.relative(g)),
                        h && a.each(this._core.clones(this._core.relative(g)), i),
                        g++
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        lazyLoad: !1
    },
    e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c)
          , e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"),
            f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1),
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : (e = new Image,
            e.onload = a.proxy(function() {
                f.css({
                    "background-image": 'url("' + g + '")',
                    opacity: "1"
                }),
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this),
            e.src = g)
        }, this)),
        this._loaded.push(d.get(0)))
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers)
            this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    },
    e.prototype.update = function() {
        var b = this._core._current
          , c = b + this._core.settings.items
          , d = this._core.$stage.children().toArray().slice(b, c)
          , e = []
          , f = 0;
        a.each(d, function(b, c) {
            e.push(a(c).height())
        }),
        f = Math.max.apply(null, e),
        this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._videos = {},
        this._playing = null,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"),
                    this.fetch(c, a(b.content)))
                }
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    },
    e.prototype.fetch = function(a, b) {
        var c = function() {
            return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
        }()
          , d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id")
          , e = a.attr("data-width") || this._core.settings.videoWidth
          , f = a.attr("data-height") || this._core.settings.videoHeight
          , g = a.attr("href");
        if (!g)
            throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),
        d[3].indexOf("youtu") > -1)
            c = "youtube";
        else if (d[3].indexOf("vimeo") > -1)
            c = "vimeo";
        else {
            if (!(d[3].indexOf("vzaar") > -1))
                throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6],
        this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        },
        b.attr("data-video", g),
        this.thumbnail(a, this._videos[g])
    }
    ,
    e.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function(a) {
            e = '<div class="owl-video-play-icon"></div>',
            d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>',
            b.after(d),
            b.after(e)
        };
        if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
        this._core.settings.lazyLoad && (i = "data-src",
        j = "owl-lazy"),
        h.length)
            return l(h.attr(i)),
            h.remove(),
            !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg",
        l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large,
                l(f)
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a.framegrab_url,
                l(f)
            }
        })
    }
    ,
    e.prototype.stop = function() {
        this._core.trigger("stop", null, "video"),
        this._playing.find(".owl-video-frame").remove(),
        this._playing.removeClass("owl-video-playing"),
        this._playing = null,
        this._core.leave("playing"),
        this._core.trigger("stopped", null, "video")
    }
    ,
    e.prototype.play = function(b) {
        var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass), f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"),
        this._core.trigger("play", null, "video"),
        e = this._core.items(this._core.relative(e.index())),
        this._core.reset(e.index()),
        "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'),
        a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")),
        this._playing = e.addClass("owl-video-playing"))
    }
    ,
    e.prototype.isInFullScreen = function() {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b,
        this.core.options = a.extend({}, e.Defaults, this.core.options),
        this.swapping = !0,
        this.previous = d,
        this.next = d,
        this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(),
                this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this),
            "translate.owl.carousel": a.proxy(function(a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        },
        this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    },
    e.prototype.swap = function() {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
            d.one(a.support.animation.end, c).css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g)),
            f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
        }
    }
    ,
    e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
        this.core.onTransitionEnd()
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers)
            this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._timeout = null,
        this._paused = !1,
        this._handlers = {
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                a.namespace && this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function(a) {
                a.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        },
        this._core.$element.on(this._handlers),
        this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    },
    e.prototype.play = function(a, b) {
        this._paused = !1,
        this._core.is("rotating") || (this._core.enter("rotating"),
        this._setAutoPlayInterval())
    }
    ,
    e.prototype._getNextTimeout = function(d, e) {
        return this._timeout && b.clearTimeout(this._timeout),
        b.setTimeout(a.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
        }, this), d || this._core.settings.autoplayTimeout)
    }
    ,
    e.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    }
    ,
    e.prototype.stop = function() {
        this._core.is("rotating") && (b.clearTimeout(this._timeout),
        this._core.leave("rotating"))
    }
    ,
    e.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        this._core = b,
        this._initialized = !1,
        this._pages = [],
        this._controls = {},
        this._templates = [],
        this.$element = this._core.$element,
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        },
        this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                this.initialize(),
                this.update(),
                this.draw(),
                this._initialized = !0,
                this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                this.update(),
                this.draw(),
                this._core.trigger("refreshed", null, "navigation"))
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    },
    e.prototype.initialize = function() {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.prev(c.navSpeed)
        }, this)),
        this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.next(c.navSpeed)
        }, this)),
        c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
        this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$absolute.on("click", "div", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(),
            this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides)
            this._core[b] = a.proxy(this[b], this)
    }
    ,
    e.prototype.destroy = function() {
        var a, b, c, d;
        for (a in this._handlers)
            this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
            this._controls[b].remove();
        for (d in this.overides)
            this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null)
    }
    ,
    e.prototype.update = function() {
        var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0), g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
        g.dots || "page" == g.slideBy)
            for (this._pages = [],
            a = d,
            b = 0,
            c = 0; a < e; a++) {
                if (b >= h || 0 === b) {
                    if (this._pages.push({
                        start: Math.min(f, a - d),
                        end: a - d + h - 1
                    }),
                    Math.min(f, a - d) === f)
                        break;
                    b = 0,
                    ++c
                }
                b += this._core.mergers(this._core.relative(a))
            }
    }
    ,
    e.prototype.draw = function() {
        var b, c = this._core.settings, d = this._core.items().length <= c.items, e = this._core.relative(this._core.current()), f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d),
        c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)),
        this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
        this._controls.$absolute.toggleClass("disabled", !c.dots || d),
        c.dots && (b = this._pages.length - this._controls.$absolute.children().length,
        c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(),
        this._controls.$absolute.find(".active").removeClass("active"),
        this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }
    ,
    e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    }
    ,
    e.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function(a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }
    ,
    e.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages),
        d = this._pages.length,
        b ? ++c : --c,
        c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()),
        d = this._core.items().length,
        b ? c += e.slideBy : c -= e.slideBy),
        c
    }
    ,
    e.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }
    ,
    e.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }
    ,
    e.prototype.to = function(b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length,
        a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        this._core = c,
        this._hashes = {},
        this.$element = this._core.$element,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c)
                        return;
                    this._hashes[c] = b.content
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current()))
                      , e = a.map(this._hashes, function(a, b) {
                        return a === d ? b : null
                    }).join();
                    if (!e || b.location.hash.slice(1) === e)
                        return;
                    b.location.hash = e
                }
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this.$element.on(this._handlers),
        a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
            var c = b.location.hash.substring(1)
              , e = this._core.$stage.children()
              , f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {
        URLhashListener: !1
    },
    e.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers)
            this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
            "function" != typeof this[d] && (this[d] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) {
        var e = !1
          , f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
            if (g[b] !== d)
                return e = !c || b,
                !1
        }),
        e
    }
    function f(a) {
        return e(a, !0)
    }
    var g = a("<support>").get(0).style
      , h = "Webkit Moz O ms".split(" ")
      , i = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }
      , j = {
        csstransforms: function() {
            return !!e("transform")
        },
        csstransforms3d: function() {
            return !!e("perspective")
        },
        csstransitions: function() {
            return !!e("transition")
        },
        cssanimations: function() {
            return !!e("animation")
        }
    };
    j.csstransitions() && (a.support.transition = new String(f("transition")),
    a.support.transition.end = i.transition.end[a.support.transition]),
    j.cssanimations() && (a.support.animation = new String(f("animation")),
    a.support.animation.end = i.animation.end[a.support.animation]),
    j.csstransforms() && (a.support.transform = new String(f("transform")),
    a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
/*International Telephone Input v15.1.2*/
!function() {
    var t = function(f, v, p) {
        "use strict";
        return function() {
            var o = [["Afghanistan (‫افغانستان‬‎)", "af", "93"], ["Albania (Shqipëri)", "al", "355"], ["Algeria (‫الجزائر‬‎)", "dz", "213"], ["American Samoa", "as", "1", 5, ["684"]], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1", 6, ["264"]], ["Antigua and Barbuda", "ag", "1", 7, ["268"]], ["Argentina", "ar", "54"], ["Armenia (Հայաստան)", "am", "374"], ["Aruba", "aw", "297"], ["Australia", "au", "61", 0], ["Austria (Österreich)", "at", "43"], ["Azerbaijan (Azərbaycan)", "az", "994"], ["Bahamas", "bs", "1", 8, ["242"]], ["Bahrain (‫البحرين‬‎)", "bh", "973"], ["Bangladesh (বাংলাদেশ)", "bd", "880"], ["Barbados", "bb", "1", 9, ["246"]], ["Belarus (Беларусь)", "by", "375"], ["Belgium (België)", "be", "32"], ["Belize", "bz", "501"], ["Benin (Bénin)", "bj", "229"], ["Bermuda", "bm", "1", 10, ["441"]], ["Bhutan (འབྲུག)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1", 11, ["284"]], ["Brunei", "bn", "673"], ["Bulgaria (България)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (កម្ពុជា)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]], ["Cayman Islands", "ky", "1", 12, ["345"]], ["Central African Republic (République centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (中国)", "cn", "86"], ["Christmas Island", "cx", "61", 2], ["Cocos (Keeling) Islands", "cc", "61", 1], ["Colombia", "co", "57"], ["Comoros (‫جزر القمر‬‎)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus (Κύπρος)", "cy", "357"], ["Czech Republic (Česká republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1", 13, ["767"]], ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (‫مصر‬‎)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (Føroyar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane française)", "gf", "594"], ["French Polynesia (Polynésie française)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (საქართველო)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (Ελλάδα)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1", 14, ["473"]], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1", 15, ["671"]], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]], ["Guinea (Guinée)", "gn", "224"], ["Guinea-Bissau (Guiné Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (香港)", "hk", "852"], ["Hungary (Magyarország)", "hu", "36"], ["Iceland (Ísland)", "is", "354"], ["India (भारत)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (‫ایران‬‎)", "ir", "98"], ["Iraq (‫العراق‬‎)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]], ["Israel (‫ישראל‬‎)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1", 4, ["876", "658"]], ["Japan (日本)", "jp", "81"], ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]], ["Jordan (‫الأردن‬‎)", "jo", "962"], ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (‫الكويت‬‎)", "kw", "965"], ["Kyrgyzstan (Кыргызстан)", "kg", "996"], ["Laos (ລາວ)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (‫لبنان‬‎)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (‫ليبيا‬‎)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (澳門)", "mo", "853"], ["Macedonia (FYROM) (Македонија)", "mk", "389"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (‫موريتانيا‬‎)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1, ["269", "639"]], ["Mexico (México)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (Монгол)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1", 16, ["664"]], ["Morocco (‫المغرب‬‎)", "ma", "212", 0], ["Mozambique (Moçambique)", "mz", "258"], ["Myanmar (Burma) (မြန်မာ)", "mm", "95"], ["Namibia (Namibië)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (नेपाल)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"], ["Northern Mariana Islands", "mp", "1", 17, ["670"]], ["Norway (Norge)", "no", "47", 0], ["Oman (‫عُمان‬‎)", "om", "968"], ["Pakistan (‫پاکستان‬‎)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (‫فلسطين‬‎)", "ps", "970"], ["Panama (Panamá)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Perú)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (‫قطر‬‎)", "qa", "974"], ["Réunion (La Réunion)", "re", "262", 0], ["Romania (România)", "ro", "40"], ["Russia (Россия)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]], ["Saint Lucia", "lc", "1", 19, ["758"]], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"], ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"], ["Senegal (Sénégal)", "sn", "221"], ["Serbia (Србија)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1", 21, ["721"]], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (대한민국)", "kr", "82"], ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"], ["Spain (España)", "es", "34"], ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"], ["Sudan (‫السودان‬‎)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]], ["Swaziland", "sz", "268"], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (‫سوريا‬‎)", "sy", "963"], ["Taiwan (台灣)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (ไทย)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1", 22, ["868"]], ["Tunisia (‫تونس‬‎)", "tn", "216"], ["Turkey (Türkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1", 23, ["649"]], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1", 24, ["340"]], ["Uganda", "ug", "256"], ["Ukraine (Україна)", "ua", "380"], ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (Oʻzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Città del Vaticano)", "va", "39", 1, ["06698"]], ["Venezuela", "ve", "58"], ["Vietnam (Việt Nam)", "vn", "84"], ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"], ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, ["5288", "5289"]], ["Yemen (‫اليمن‬‎)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1, ["18"]]];
            for (var t = 0; t < o.length; t++) {
                var e = o[t];
                o[t] = {
                    name: e[0],
                    iso2: e[1],
                    dialCode: e[2],
                    priority: e[3] || 0,
                    areaCodes: e[4] || null
                }
            }
            "use strict";
            function s(t, e) {
                if (!(t instanceof e)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }
            function n(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value"in n)
                        n.writable = true;
                    Object.defineProperty(t, n.key, n)
                }
            }
            function i(t, e, i) {
                if (e)
                    n(t.prototype, e);
                if (i)
                    n(t, i);
                return t
            }
            f.intlTelInputGlobals = {
                getInstance: function t(e) {
                    var i = e.getAttribute("data-intl-tel-input-id");
                    return f.intlTelInputGlobals.instances[i]
                },
                instances: {}
            };
            var r = 0;
            var l = {
                allowDropdown: true,
                autoHideDialCode: true,
                autoPlaceholder: "polite",
                customContainer: "",
                customPlaceholder: null,
                dropdownContainer: null,
                excludeCountries: [],
                formatOnDisplay: true,
                geoIpLookup: null,
                hiddenInput: "",
                initialCountry: "",
                localizedCountries: null,
                nationalMode: true,
                onlyCountries: [],
                placeholderNumberType: "MOBILE",
                preferredCountries: ["us", "gb"],
                separateDialCode: false,
                utilsScript: ""
            };
            var u = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"];
            f.addEventListener("load", function() {
                f.intlTelInputGlobals.windowLoaded = true
            });
            var d = function t(e, i) {
                var n = Object.keys(e);
                for (var a = 0; a < n.length; a++) {
                    i(n[a], e[n[a]])
                }
            };
            var h = function t(e) {
                d(f.intlTelInputGlobals.instances, function(t) {
                    f.intlTelInputGlobals.instances[t][e]()
                })
            };
            var a = function() {
                function a(t, e) {
                    var i = this;
                    s(this, a);
                    this.id = r++;
                    this.telInput = t;
                    this.activeItem = null;
                    this.highlightedItem = null;
                    var n = e || {};
                    this.options = {};
                    d(l, function(t, e) {
                        i.options[t] = n.hasOwnProperty(t) ? n[t] : e
                    });
                    this.hadInitialPlaceholder = Boolean(t.getAttribute("placeholder"))
                }
                i(a, [{
                    key: "_init",
                    value: function t() {
                        var i = this;
                        if (this.options.nationalMode)
                            this.options.autoHideDialCode = false;
                        if (this.options.separateDialCode) {
                            this.options.autoHideDialCode = this.options.nationalMode = false
                        }
                        this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                        if (this.isMobile) {
                            v.body.classList.add("iti-mobile");
                            if (!this.options.dropdownContainer)
                                this.options.dropdownContainer = v.body
                        }
                        if (typeof Promise !== "undefined") {
                            var e = new Promise(function(t, e) {
                                i.resolveAutoCountryPromise = t;
                                i.rejectAutoCountryPromise = e
                            }
                            );
                            var n = new Promise(function(t, e) {
                                i.resolveUtilsScriptPromise = t;
                                i.rejectUtilsScriptPromise = e
                            }
                            );
                            this.promise = Promise.all([e, n])
                        } else {
                            this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function() {}
                            ;
                            this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function() {}
                        }
                        this.selectedCountryData = {};
                        this._processCountryData();
                        this._generateMarkup();
                        this._setInitialState();
                        this._initListeners();
                        this._initRequests()
                    }
                }, {
                    key: "_processCountryData",
                    value: function t() {
                        this._processAllCountries();
                        this._processCountryCodes();
                        this._processPreferredCountries();
                        if (this.options.localizedCountries)
                            this._translateCountriesByLocale();
                        if (this.options.onlyCountries.length || this.options.localizedCountries) {
                            this.countries.sort(this._countryNameSort)
                        }
                    }
                }, {
                    key: "_addCountryCode",
                    value: function t(e, i, n) {
                        if (i.length > this.dialCodeMaxLen) {
                            this.dialCodeMaxLen = i.length
                        }
                        if (!this.countryCodes.hasOwnProperty(i)) {
                            this.countryCodes[i] = []
                        }
                        for (var a = 0; a < this.countryCodes[i].length; a++) {
                            if (this.countryCodes[i][a] === e)
                                return
                        }
                        var s = n !== p ? n : this.countryCodes[i].length;
                        this.countryCodes[i][s] = e
                    }
                }, {
                    key: "_processAllCountries",
                    value: function t() {
                        if (this.options.onlyCountries.length) {
                            var e = this.options.onlyCountries.map(function(t) {
                                return t.toLowerCase()
                            });
                            this.countries = o.filter(function(t) {
                                return e.indexOf(t.iso2) > -1
                            })
                        } else if (this.options.excludeCountries.length) {
                            var i = this.options.excludeCountries.map(function(t) {
                                return t.toLowerCase()
                            });
                            this.countries = o.filter(function(t) {
                                return i.indexOf(t.iso2) === -1
                            })
                        } else {
                            this.countries = o
                        }
                    }
                }, {
                    key: "_translateCountriesByLocale",
                    value: function t() {
                        for (var e = 0; e < this.countries.length; e++) {
                            var i = this.countries[e].iso2.toLowerCase();
                            if (this.options.localizedCountries.hasOwnProperty(i)) {
                                this.countries[e].name = this.options.localizedCountries[i]
                            }
                        }
                    }
                }, {
                    key: "_countryNameSort",
                    value: function t(e, i) {
                        return e.name.localeCompare(i.name)
                    }
                }, {
                    key: "_processCountryCodes",
                    value: function t() {
                        this.dialCodeMaxLen = 0;
                        this.countryCodes = {};
                        for (var e = 0; e < this.countries.length; e++) {
                            var i = this.countries[e];
                            this._addCountryCode(i.iso2, i.dialCode, i.priority)
                        }
                        for (var n = 0; n < this.countries.length; n++) {
                            var a = this.countries[n];
                            if (a.areaCodes) {
                                var s = this.countryCodes[a.dialCode][0];
                                for (var o = 0; o < a.areaCodes.length; o++) {
                                    var r = a.areaCodes[o];
                                    for (var l = 1; l < r.length; l++) {
                                        var u = a.dialCode + r.substr(0, l);
                                        this._addCountryCode(s, u);
                                        this._addCountryCode(a.iso2, u)
                                    }
                                    this._addCountryCode(a.iso2, a.dialCode + r)
                                }
                            }
                        }
                    }
                }, {
                    key: "_processPreferredCountries",
                    value: function t() {
                        this.preferredCountries = [];
                        for (var e = 0; e < this.options.preferredCountries.length; e++) {
                            var i = this.options.preferredCountries[e].toLowerCase();
                            var n = this._getCountryData(i, false, true);
                            if (n)
                                this.preferredCountries.push(n)
                        }
                    }
                }, {
                    key: "_createEl",
                    value: function t(e, i, n) {
                        var a = v.createElement(e);
                        if (i)
                            d(i, function(t, e) {
                                return a.setAttribute(t, e)
                            });
                        if (n)
                            n.appendChild(a);
                        return a
                    }
                }, {
                    key: "_generateMarkup",
                    value: function t() {
                        this.telInput.setAttribute("autocomplete", "off");
                        var e = "iti";
                        if (this.options.allowDropdown)
                            e += " iti--allow-dropdown";
                        if (this.options.separateDialCode)
                            e += " iti--separate-dial-code";
                        if (this.options.customContainer) {
                            e += " ";
                            e += this.options.customContainer
                        }
                        var i = this._createEl("div", {
                            class: e
                        });
                        this.telInput.parentNode.insertBefore(i, this.telInput);
                        this.flagsContainer = this._createEl("div", {
                            class: "iti__flag-container"
                        }, i);
                        i.appendChild(this.telInput);
                        this.selectedFlag = this._createEl("div", {
                            class: "iti__selected-flag",
                            role: "combobox",
                            "aria-owns": "country-listbox"
                        }, this.flagsContainer);
                        this.selectedFlagInner = this._createEl("div", {
                            class: "iti__flag"
                        }, this.selectedFlag);
                        if (this.options.separateDialCode) {
                            this.selectedDialCode = this._createEl("div", {
                                class: "iti__selected-dial-code"
                            }, this.selectedFlag)
                        }
                        if (this.options.allowDropdown) {
                            this.selectedFlag.setAttribute("tabindex", "0");
                            this.dropdownArrow = this._createEl("div", {
                                class: "iti__arrow"
                            }, this.selectedFlag);
                            this.countryList = this._createEl("ul", {
                                class: "iti__country-list iti__hide",
                                id: "country-listbox",
                                "aria-expanded": "false",
                                role: "listbox"
                            });
                            if (this.preferredCountries.length) {
                                this._appendListItems(this.preferredCountries, "iti__preferred");
                                this._createEl("li", {
                                    class: "iti__divider",
                                    role: "separator",
                                    "aria-disabled": "true"
                                }, this.countryList)
                            }
                            this._appendListItems(this.countries, "iti__standard");
                            if (this.options.dropdownContainer) {
                                this.dropdown = this._createEl("div", {
                                    class: "iti iti--container"
                                });
                                this.dropdown.appendChild(this.countryList)
                            } else {
                                this.flagsContainer.appendChild(this.countryList)
                            }
                        }
                        if (this.options.hiddenInput) {
                            var n = this.options.hiddenInput;
                            var a = this.telInput.getAttribute("name");
                            if (a) {
                                var s = a.lastIndexOf("[");
                                if (s !== -1)
                                    n = "".concat(a.substr(0, s), "[").concat(n, "]")
                            }
                            this.hiddenInput = this._createEl("input", {
                                type: "hidden",
                                name: n
                            });
                            i.appendChild(this.hiddenInput)
                        }
                    }
                }, {
                    key: "_appendListItems",
                    value: function t(e, i) {
                        var n = "";
                        for (var a = 0; a < e.length; a++) {
                            var s = e[a];
                            n += "<li class='iti__country ".concat(i, "' tabIndex='-1' id='iti-item-").concat(s.iso2, "' role='option' data-dial-code='").concat(s.dialCode, "' data-country-code='").concat(s.iso2, "'>");
                            n += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(s.iso2, "'></div></div>");
                            n += "<span class='iti__country-name'>".concat(s.name, "</span>");
                            n += "<span class='iti__dial-code'>+".concat(s.dialCode, "</span>");
                            n += "</li>"
                        }
                        this.countryList.insertAdjacentHTML("beforeend", n)
                    }
                }, {
                    key: "_setInitialState",
                    value: function t() {
                        var e = this.telInput.value;
                        var i = this._getDialCode(e);
                        var n = this._isRegionlessNanp(e);
                        var a = this.options
                          , s = a.initialCountry
                          , o = a.nationalMode
                          , r = a.autoHideDialCode
                          , l = a.separateDialCode;
                        if (i && !n) {
                            this._updateFlagFromNumber(e)
                        } else if (s !== "auto") {
                            if (s) {
                                this._setFlag(s.toLowerCase())
                            } else {
                                if (i && n) {
                                    this._setFlag("us")
                                } else {
                                    this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2;
                                    if (!e) {
                                        this._setFlag(this.defaultCountry)
                                    }
                                }
                            }
                            if (!e && !o && !r && !l) {
                                this.telInput.value = "+".concat(this.selectedCountryData.dialCode)
                            }
                        }
                        if (e)
                            this._updateValFromNumber(e)
                    }
                }, {
                    key: "_initListeners",
                    value: function t() {
                        this._initKeyListeners();
                        if (this.options.autoHideDialCode)
                            this._initBlurListeners();
                        if (this.options.allowDropdown)
                            this._initDropdownListeners();
                        if (this.hiddenInput)
                            this._initHiddenInputListener()
                    }
                }, {
                    key: "_initHiddenInputListener",
                    value: function t() {
                        var e = this;
                        this._handleHiddenInputSubmit = function() {
                            e.hiddenInput.value = e.getNumber()
                        }
                        ;
                        if (this.telInput.form)
                            this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit)
                    }
                }, {
                    key: "_getClosestLabel",
                    value: function t() {
                        var e = this.telInput;
                        while (e && e.tagName !== "LABEL") {
                            e = e.parentNode
                        }
                        return e
                    }
                }, {
                    key: "_initDropdownListeners",
                    value: function t() {
                        var i = this;
                        this._handleLabelClick = function(t) {
                            if (i.countryList.classList.contains("iti__hide"))
                                i.telInput.focus();
                            else
                                t.preventDefault()
                        }
                        ;
                        var e = this._getClosestLabel();
                        if (e)
                            e.addEventListener("click", this._handleLabelClick);
                        this._handleClickSelectedFlag = function() {
                            if (i.countryList.classList.contains("iti__hide") && !i.telInput.disabled && !i.telInput.readOnly) {
                                i._showDropdown()
                            }
                        }
                        ;
                        this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag);
                        this._handleFlagsContainerKeydown = function(t) {
                            var e = i.countryList.classList.contains("iti__hide");
                            if (e && ["ArrowUp", "ArrowDown", " ", "Enter"].indexOf(t.key) !== -1) {
                                t.preventDefault();
                                t.stopPropagation();
                                i._showDropdown()
                            }
                            if (t.key === "Tab")
                                i._closeDropdown()
                        }
                        ;
                        this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown)
                    }
                }, {
                    key: "_initRequests",
                    value: function t() {
                        var e = this;
                        if (this.options.utilsScript && !f.intlTelInputUtils) {
                            if (f.intlTelInputGlobals.windowLoaded) {
                                f.intlTelInputGlobals.loadUtils(this.options.utilsScript)
                            } else {
                                f.addEventListener("load", function() {
                                    f.intlTelInputGlobals.loadUtils(e.options.utilsScript)
                                })
                            }
                        } else
                            this.resolveUtilsScriptPromise();
                        if (this.options.initialCountry === "auto")
                            this._loadAutoCountry();
                        else
                            this.resolveAutoCountryPromise()
                    }
                }, {
                    key: "_loadAutoCountry",
                    value: function t() {
                        if (f.intlTelInputGlobals.autoCountry) {
                            this.handleAutoCountry()
                        } else if (!f.intlTelInputGlobals.startedLoadingAutoCountry) {
                            f.intlTelInputGlobals.startedLoadingAutoCountry = true;
                            if (typeof this.options.geoIpLookup === "function") {
                                this.options.geoIpLookup(function(t) {
                                    f.intlTelInputGlobals.autoCountry = t.toLowerCase();
                                    setTimeout(function() {
                                        return h("handleAutoCountry")
                                    })
                                }, function() {
                                    return h("rejectAutoCountryPromise")
                                })
                            }
                        }
                    }
                }, {
                    key: "_initKeyListeners",
                    value: function t() {
                        var e = this;
                        this._handleKeyupEvent = function() {
                            if (e._updateFlagFromNumber(e.telInput.value)) {
                                e._triggerCountryChange()
                            }
                        }
                        ;
                        this.telInput.addEventListener("keyup", this._handleKeyupEvent);
                        this._handleClipboardEvent = function() {
                            setTimeout(e._handleKeyupEvent)
                        }
                        ;
                        this.telInput.addEventListener("cut", this._handleClipboardEvent);
                        this.telInput.addEventListener("paste", this._handleClipboardEvent)
                    }
                }, {
                    key: "_cap",
                    value: function t(e) {
                        var i = this.telInput.getAttribute("maxlength");
                        return i && e.length > i ? e.substr(0, i) : e
                    }
                }, {
                    key: "_initBlurListeners",
                    value: function t() {
                        var e = this;
                        this._handleSubmitOrBlurEvent = function() {
                            e._removeEmptyDialCode()
                        }
                        ;
                        if (this.telInput.form)
                            this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent);
                        this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent)
                    }
                }, {
                    key: "_removeEmptyDialCode",
                    value: function t() {
                        if (this.telInput.value.charAt(0) === "+") {
                            var e = this._getNumeric(this.telInput.value);
                            if (!e || this.selectedCountryData.dialCode === e) {
                                this.telInput.value = ""
                            }
                        }
                    }
                }, {
                    key: "_getNumeric",
                    value: function t(e) {
                        return e.replace(/\D/g, "")
                    }
                }, {
                    key: "_trigger",
                    value: function t(e) {
                        var i = v.createEvent("Event");
                        i.initEvent(e, true, true);
                        this.telInput.dispatchEvent(i)
                    }
                }, {
                    key: "_showDropdown",
                    value: function t() {
                        this.countryList.classList.remove("iti__hide");
                        this.countryList.setAttribute("aria-expanded", "true");
                        this._setDropdownPosition();
                        if (this.activeItem) {
                            this._highlightListItem(this.activeItem, false);
                            this._scrollTo(this.activeItem, true)
                        }
                        this._bindDropdownListeners();
                        this.dropdownArrow.classList.add("iti__arrow--up");
                        this._trigger("open:countrydropdown")
                    }
                }, {
                    key: "_toggleClass",
                    value: function t(e, i, n) {
                        if (n && !e.classList.contains(i))
                            e.classList.add(i);
                        else if (!n && e.classList.contains(i))
                            e.classList.remove(i)
                    }
                }, {
                    key: "_setDropdownPosition",
                    value: function t() {
                        var e = this;
                        if (this.options.dropdownContainer) {
                            this.options.dropdownContainer.appendChild(this.dropdown)
                        }
                        if (!this.isMobile) {
                            var i = this.telInput.getBoundingClientRect();
                            var n = f.pageYOffset || v.documentElement.scrollTop;
                            var a = i.top + n;
                            var s = this.countryList.offsetHeight;
                            var o = a + this.telInput.offsetHeight + s < n + f.innerHeight;
                            var r = a - s > n;
                            this._toggleClass(this.countryList, "iti__country-list--dropup", !o && r);
                            if (this.options.dropdownContainer) {
                                var l = !o && r ? 0 : this.telInput.offsetHeight;
                                this.dropdown.style.top = "".concat(a + l, "px");
                                this.dropdown.style.left = "".concat(i.left + v.body.scrollLeft, "px");
                                this._handleWindowScroll = function() {
                                    return e._closeDropdown()
                                }
                                ;
                                f.addEventListener("scroll", this._handleWindowScroll)
                            }
                        }
                    }
                }, {
                    key: "_getClosestListItem",
                    value: function t(e) {
                        var i = e;
                        while (i && i !== this.countryList && !i.classList.contains("iti__country")) {
                            i = i.parentNode
                        }
                        return i === this.countryList ? null : i
                    }
                }, {
                    key: "_bindDropdownListeners",
                    value: function t() {
                        var i = this;
                        this._handleMouseoverCountryList = function(t) {
                            var e = i._getClosestListItem(t.target);
                            if (e)
                                i._highlightListItem(e, false)
                        }
                        ;
                        this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList);
                        this._handleClickCountryList = function(t) {
                            var e = i._getClosestListItem(t.target);
                            if (e)
                                i._selectListItem(e)
                        }
                        ;
                        this.countryList.addEventListener("click", this._handleClickCountryList);
                        var e = true;
                        this._handleClickOffToClose = function() {
                            if (!e)
                                i._closeDropdown();
                            e = false
                        }
                        ;
                        v.documentElement.addEventListener("click", this._handleClickOffToClose);
                        var n = "";
                        var a = null;
                        this._handleKeydownOnDropdown = function(t) {
                            t.preventDefault();
                            if (t.key === "ArrowUp" || t.key === "ArrowDown")
                                i._handleUpDownKey(t.key);
                            else if (t.key === "Enter")
                                i._handleEnterKey();
                            else if (t.key === "Escape")
                                i._closeDropdown();
                            else if (/^[a-zA-ZÀ-ÿ ]$/.test(t.key)) {
                                if (a)
                                    clearTimeout(a);
                                n += t.key.toLowerCase();
                                i._searchForCountry(n);
                                a = setTimeout(function() {
                                    n = ""
                                }, 1e3)
                            }
                        }
                        ;
                        v.addEventListener("keydown", this._handleKeydownOnDropdown)
                    }
                }, {
                    key: "_handleUpDownKey",
                    value: function t(e) {
                        var i = e === "ArrowUp" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
                        if (i) {
                            if (i.classList.contains("iti__divider")) {
                                i = e === "ArrowUp" ? i.previousElementSibling : i.nextElementSibling
                            }
                            this._highlightListItem(i, true)
                        }
                    }
                }, {
                    key: "_handleEnterKey",
                    value: function t() {
                        if (this.highlightedItem)
                            this._selectListItem(this.highlightedItem)
                    }
                }, {
                    key: "_searchForCountry",
                    value: function t(e) {
                        for (var i = 0; i < this.countries.length; i++) {
                            if (this._startsWith(this.countries[i].name, e)) {
                                var n = this.countryList.querySelector("#iti-item-".concat(this.countries[i].iso2));
                                this._highlightListItem(n, false);
                                this._scrollTo(n, true);
                                break
                            }
                        }
                    }
                }, {
                    key: "_startsWith",
                    value: function t(e, i) {
                        return e.substr(0, i.length).toLowerCase() === i
                    }
                }, {
                    key: "_updateValFromNumber",
                    value: function t(e) {
                        var i = e;
                        if (this.options.formatOnDisplay && f.intlTelInputUtils && this.selectedCountryData) {
                            var n = !this.options.separateDialCode && (this.options.nationalMode || i.charAt(0) !== "+");
                            var a = intlTelInputUtils.numberFormat
                              , s = a.NATIONAL
                              , o = a.INTERNATIONAL;
                            var r = n ? s : o;
                            i = intlTelInputUtils.formatNumber(i, this.selectedCountryData.iso2, r)
                        }
                        i = this._beforeSetNumber(i);
                        this.telInput.value = i
                    }
                }, {
                    key: "_updateFlagFromNumber",
                    value: function t(e) {
                        var i = e;
                        var n = this.selectedCountryData.dialCode === "1";
                        if (i && this.options.nationalMode && n && i.charAt(0) !== "+") {
                            if (i.charAt(0) !== "1")
                                i = "1".concat(i);
                            i = "+".concat(i)
                        }
                        var a = this._getDialCode(i);
                        var s = this._getNumeric(i);
                        var o = null;
                        if (a) {
                            var r = this.countryCodes[this._getNumeric(a)];
                            var l = r.indexOf(this.selectedCountryData.iso2) !== -1 && s.length <= a.length - 1;
                            var u = this.selectedCountryData.dialCode === "1" && this._isRegionlessNanp(s);
                            if (!u && !l) {
                                for (var d = 0; d < r.length; d++) {
                                    if (r[d]) {
                                        o = r[d];
                                        break
                                    }
                                }
                            }
                        } else if (i.charAt(0) === "+" && s.length) {
                            o = ""
                        } else if (!i || i === "+") {
                            o = this.defaultCountry
                        }
                        if (o !== null) {
                            return this._setFlag(o)
                        }
                        return false
                    }
                }, {
                    key: "_isRegionlessNanp",
                    value: function t(e) {
                        var i = this._getNumeric(e);
                        if (i.charAt(0) === "1") {
                            var n = i.substr(1, 3);
                            return u.indexOf(n) !== -1
                        }
                        return false
                    }
                }, {
                    key: "_highlightListItem",
                    value: function t(e, i) {
                        var n = this.highlightedItem;
                        if (n)
                            n.classList.remove("iti__highlight");
                        this.highlightedItem = e;
                        this.highlightedItem.classList.add("iti__highlight");
                        if (i)
                            this.highlightedItem.focus()
                    }
                }, {
                    key: "_getCountryData",
                    value: function t(e, i, n) {
                        var a = i ? o : this.countries;
                        for (var s = 0; s < a.length; s++) {
                            if (a[s].iso2 === e) {
                                return a[s]
                            }
                        }
                        if (n) {
                            return null
                        }
                        throw new Error("No country data for '".concat(e, "'"))
                    }
                }, {
                    key: "_setFlag",
                    value: function t(e) {
                        var i = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                        this.selectedCountryData = e ? this._getCountryData(e, false, false) : {};
                        if (this.selectedCountryData.iso2) {
                            this.defaultCountry = this.selectedCountryData.iso2
                        }
                        this.selectedFlagInner.setAttribute("class", "iti__flag iti__".concat(e));
                        var n = e ? "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : "Unknown";
                        this.selectedFlag.setAttribute("title", n);
                        if (this.options.separateDialCode) {
                            var a = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
                            this.selectedDialCode.innerHTML = a;
                            var s = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
                            this.telInput.style.paddingLeft = "".concat(s + 6, "px")
                        }
                        this._updatePlaceholder();
                        if (this.options.allowDropdown) {
                            var o = this.activeItem;
                            if (o) {
                                o.classList.remove("iti__active");
                                o.setAttribute("aria-selected", "false")
                            }
                            if (e) {
                                var r = this.countryList.querySelector("#iti-item-".concat(e));
                                r.setAttribute("aria-selected", "true");
                                r.classList.add("iti__active");
                                this.activeItem = r;
                                this.countryList.setAttribute("aria-activedescendant", r.getAttribute("id"))
                            }
                        }
                        return i.iso2 !== e
                    }
                }, {
                    key: "_getHiddenSelectedFlagWidth",
                    value: function t() {
                        var e = this.telInput.parentNode.cloneNode();
                        e.style.visibility = "hidden";
                        v.body.appendChild(e);
                        var i = this.selectedFlag.cloneNode(true);
                        e.appendChild(i);
                        var n = i.offsetWidth;
                        e.remove();
                        return n
                    }
                }, {
                    key: "_updatePlaceholder",
                    value: function t() {
                        var e = this.options.autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && this.options.autoPlaceholder === "polite";
                        if (f.intlTelInputUtils && e) {
                            var i = intlTelInputUtils.numberType[this.options.placeholderNumberType];
                            var n = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, i) : "";
                            n = this._beforeSetNumber(n);
                            if (typeof this.options.customPlaceholder === "function") {
                                n = this.options.customPlaceholder(n, this.selectedCountryData)
                            }
                            this.telInput.setAttribute("placeholder", n)
                        }
                    }
                }, {
                    key: "_selectListItem",
                    value: function t(e) {
                        var i = this._setFlag(e.getAttribute("data-country-code"));
                        this._closeDropdown();
                        this._updateDialCode(e.getAttribute("data-dial-code"), true);
                        this.telInput.focus();
                        var n = this.telInput.value.length;
                        this.telInput.setSelectionRange(n, n);
                        if (i) {
                            this._triggerCountryChange()
                        }
                    }
                }, {
                    key: "_closeDropdown",
                    value: function t() {
                        this.countryList.classList.add("iti__hide");
                        this.countryList.setAttribute("aria-expanded", "false");
                        this.dropdownArrow.classList.remove("iti__arrow--up");
                        v.removeEventListener("keydown", this._handleKeydownOnDropdown);
                        v.documentElement.removeEventListener("click", this._handleClickOffToClose);
                        this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList);
                        this.countryList.removeEventListener("click", this._handleClickCountryList);
                        if (this.options.dropdownContainer) {
                            if (!this.isMobile)
                                f.removeEventListener("scroll", this._handleWindowScroll);
                            if (this.dropdown.parentNode)
                                this.dropdown.parentNode.removeChild(this.dropdown)
                        }
                        this._trigger("close:countrydropdown")
                    }
                }, {
                    key: "_scrollTo",
                    value: function t(e, i) {
                        var n = this.countryList;
                        var a = f.pageYOffset || v.documentElement.scrollTop;
                        var s = n.offsetHeight;
                        var o = n.getBoundingClientRect().top + a;
                        var r = o + s;
                        var l = e.offsetHeight;
                        var u = e.getBoundingClientRect().top + a;
                        var d = u + l;
                        var h = u - o + n.scrollTop;
                        var c = s / 2 - l / 2;
                        if (u < o) {
                            if (i)
                                h -= c;
                            n.scrollTop = h
                        } else if (d > r) {
                            if (i)
                                h += c;
                            var p = s - l;
                            n.scrollTop = h - p
                        }
                    }
                }, {
                    key: "_updateDialCode",
                    value: function t(e, i) {
                        var n = this.telInput.value;
                        var a = "+".concat(e);
                        var s;
                        if (n.charAt(0) === "+") {
                            var o = this._getDialCode(n);
                            if (o) {
                                s = n.replace(o, a)
                            } else {
                                s = a
                            }
                        } else if (this.options.nationalMode || this.options.separateDialCode) {
                            return
                        } else {
                            if (n) {
                                s = a + n
                            } else if (i || !this.options.autoHideDialCode) {
                                s = a
                            } else {
                                return
                            }
                        }
                        this.telInput.value = s
                    }
                }, {
                    key: "_getDialCode",
                    value: function t(e) {
                        var i = "";
                        if (e.charAt(0) === "+") {
                            var n = "";
                            for (var a = 0; a < e.length; a++) {
                                var s = e.charAt(a);
                                if (!isNaN(parseInt(s, 10))) {
                                    n += s;
                                    if (this.countryCodes[n]) {
                                        i = e.substr(0, a + 1)
                                    }
                                    if (n.length === this.dialCodeMaxLen) {
                                        break
                                    }
                                }
                            }
                        }
                        return i
                    }
                }, {
                    key: "_getFullNumber",
                    value: function t() {
                        var e = this.telInput.value.trim();
                        var i = this.selectedCountryData.dialCode;
                        var n;
                        var a = this._getNumeric(e);
                        if (this.options.separateDialCode && e.charAt(0) !== "+" && i && a) {
                            n = "+".concat(i)
                        } else {
                            n = ""
                        }
                        return n + e
                    }
                }, {
                    key: "_beforeSetNumber",
                    value: function t(e) {
                        var i = e;
                        if (this.options.separateDialCode) {
                            var n = this._getDialCode(i);
                            if (n) {
                                n = "+".concat(this.selectedCountryData.dialCode);
                                var a = i[n.length] === " " || i[n.length] === "-" ? n.length + 1 : n.length;
                                i = i.substr(a)
                            }
                        }
                        return this._cap(i)
                    }
                }, {
                    key: "_triggerCountryChange",
                    value: function t() {
                        this._trigger("countrychange")
                    }
                }, {
                    key: "handleAutoCountry",
                    value: function t() {
                        if (this.options.initialCountry === "auto") {
                            this.defaultCountry = f.intlTelInputGlobals.autoCountry;
                            if (!this.telInput.value) {
                                this.setCountry(this.defaultCountry)
                            }
                            this.resolveAutoCountryPromise()
                        }
                    }
                }, {
                    key: "handleUtils",
                    value: function t() {
                        if (f.intlTelInputUtils) {
                            if (this.telInput.value) {
                                this._updateValFromNumber(this.telInput.value)
                            }
                            this._updatePlaceholder()
                        }
                        this.resolveUtilsScriptPromise()
                    }
                }, {
                    key: "destroy",
                    value: function t() {
                        var e = this.telInput.form;
                        if (this.options.allowDropdown) {
                            this._closeDropdown();
                            this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag);
                            this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
                            var i = this._getClosestLabel();
                            if (i)
                                i.removeEventListener("click", this._handleLabelClick)
                        }
                        if (this.hiddenInput && e)
                            e.removeEventListener("submit", this._handleHiddenInputSubmit);
                        if (this.options.autoHideDialCode) {
                            if (e)
                                e.removeEventListener("submit", this._handleSubmitOrBlurEvent);
                            this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent)
                        }
                        this.telInput.removeEventListener("keyup", this._handleKeyupEvent);
                        this.telInput.removeEventListener("cut", this._handleClipboardEvent);
                        this.telInput.removeEventListener("paste", this._handleClipboardEvent);
                        this.telInput.removeAttribute("data-intl-tel-input-id");
                        var n = this.telInput.parentNode;
                        n.parentNode.insertBefore(this.telInput, n);
                        n.parentNode.removeChild(n);
                        delete f.intlTelInputGlobals.instances[this.id]
                    }
                }, {
                    key: "getExtension",
                    value: function t() {
                        if (f.intlTelInputUtils) {
                            return intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2)
                        }
                        return ""
                    }
                }, {
                    key: "getNumber",
                    value: function t(e) {
                        if (f.intlTelInputUtils) {
                            var i = this.selectedCountryData.iso2;
                            return intlTelInputUtils.formatNumber(this._getFullNumber(), i, e)
                        }
                        return ""
                    }
                }, {
                    key: "getNumberType",
                    value: function t() {
                        if (f.intlTelInputUtils) {
                            return intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2)
                        }
                        return -99
                    }
                }, {
                    key: "getSelectedCountryData",
                    value: function t() {
                        return this.selectedCountryData
                    }
                }, {
                    key: "getValidationError",
                    value: function t() {
                        if (f.intlTelInputUtils) {
                            var e = this.selectedCountryData.iso2;
                            return intlTelInputUtils.getValidationError(this._getFullNumber(), e)
                        }
                        return -99
                    }
                }, {
                    key: "isValidNumber",
                    value: function t() {
                        var e = this._getFullNumber().trim();
                        var i = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
                        return f.intlTelInputUtils ? intlTelInputUtils.isValidNumber(e, i) : null
                    }
                }, {
                    key: "setCountry",
                    value: function t(e) {
                        var i = e.toLowerCase();
                        if (!this.selectedFlagInner.classList.contains("iti__".concat(i))) {
                            this._setFlag(i);
                            this._updateDialCode(this.selectedCountryData.dialCode, false);
                            this._triggerCountryChange()
                        }
                    }
                }, {
                    key: "setNumber",
                    value: function t(e) {
                        var i = this._updateFlagFromNumber(e);
                        this._updateValFromNumber(e);
                        if (i) {
                            this._triggerCountryChange()
                        }
                    }
                }, {
                    key: "setPlaceholderNumberType",
                    value: function t(e) {
                        this.options.placeholderNumberType = e;
                        this._updatePlaceholder()
                    }
                }]);
                return a
            }();
            f.intlTelInputGlobals.getCountryData = function() {
                return o
            }
            ;
            var c = function t(e, i, n) {
                var a = v.createElement("script");
                a.onload = function() {
                    h("handleUtils");
                    if (i)
                        i()
                }
                ;
                a.onerror = function() {
                    h("rejectUtilsScriptPromise");
                    if (n)
                        n()
                }
                ;
                a.className = "iti-load-utils";
                a.async = true;
                a.src = e;
                v.body.appendChild(a)
            };
            f.intlTelInputGlobals.loadUtils = function(i) {
                if (!f.intlTelInputUtils && !f.intlTelInputGlobals.startedLoadingUtilsScript) {
                    f.intlTelInputGlobals.startedLoadingUtilsScript = true;
                    if (typeof Promise !== "undefined") {
                        return new Promise(function(t, e) {
                            return c(i, t, e)
                        }
                        )
                    }
                    c(i)
                }
                return null
            }
            ;
            f.intlTelInputGlobals.defaults = l;
            f.intlTelInputGlobals.version = "15.1.2";
            return function(t, e) {
                var i = new a(t,e);
                i._init();
                t.setAttribute("data-intl-tel-input-id", i.id);
                f.intlTelInputGlobals.instances[i.id] = i;
                return i
            }
        }()
    }(window, document);
    "object" == typeof module && module.exports ? module.exports = t : window.intlTelInput = t
}();
/*! nouislider - 13.1.5 - 4/24/2019 */
!function(t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : window.noUiSlider = t()
}(function() {
    "use strict";
    var ut = "13.1.5";
    function ct(t) {
        t.parentElement.removeChild(t)
    }
    function s(t) {
        return null != t
    }
    function pt(t) {
        t.preventDefault()
    }
    function i(t) {
        return "number" == typeof t && !isNaN(t) && isFinite(t)
    }
    function ft(t, e, r) {
        0 < r && (mt(t, e),
        setTimeout(function() {
            gt(t, e)
        }, r))
    }
    function dt(t) {
        return Math.max(Math.min(t, 100), 0)
    }
    function ht(t) {
        return Array.isArray(t) ? t : [t]
    }
    function e(t) {
        var e = (t = String(t)).split(".");
        return 1 < e.length ? e[1].length : 0
    }
    function mt(t, e) {
        t.classList ? t.classList.add(e) : t.className += " " + e
    }
    function gt(t, e) {
        t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)","gi"), " ")
    }
    function vt(t) {
        var e = void 0 !== window.pageXOffset
          , r = "CSS1Compat" === (t.compatMode || "");
        return {
            x: e ? window.pageXOffset : r ? t.documentElement.scrollLeft : t.body.scrollLeft,
            y: e ? window.pageYOffset : r ? t.documentElement.scrollTop : t.body.scrollTop
        }
    }
    function c(t, e) {
        return 100 / (e - t)
    }
    function p(t, e) {
        return 100 * e / (t[1] - t[0])
    }
    function f(t, e) {
        for (var r = 1; t >= e[r]; )
            r += 1;
        return r
    }
    function r(t, e, r) {
        if (r >= t.slice(-1)[0])
            return 100;
        var n, i, o = f(r, t), a = t[o - 1], s = t[o], l = e[o - 1], u = e[o];
        return l + (i = r,
        p(n = [a, s], n[0] < 0 ? i + Math.abs(n[0]) : i - n[0]) / c(l, u))
    }
    function n(t, e, r, n) {
        if (100 === n)
            return n;
        var i, o, a = f(n, t), s = t[a - 1], l = t[a];
        return r ? (l - s) / 2 < n - s ? l : s : e[a - 1] ? t[a - 1] + (i = n - t[a - 1],
        o = e[a - 1],
        Math.round(i / o) * o) : n
    }
    function o(t, e, r) {
        var n;
        if ("number" == typeof e && (e = [e]),
        !Array.isArray(e))
            throw new Error("noUiSlider (" + ut + "): 'range' contains invalid value.");
        if (!i(n = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t)) || !i(e[0]))
            throw new Error("noUiSlider (" + ut + "): 'range' value isn't numeric.");
        r.xPct.push(n),
        r.xVal.push(e[0]),
        n ? r.xSteps.push(!isNaN(e[1]) && e[1]) : isNaN(e[1]) || (r.xSteps[0] = e[1]),
        r.xHighestCompleteStep.push(0)
    }
    function a(t, e, r) {
        if (e)
            if (r.xVal[t] !== r.xVal[t + 1]) {
                r.xSteps[t] = p([r.xVal[t], r.xVal[t + 1]], e) / c(r.xPct[t], r.xPct[t + 1]);
                var n = (r.xVal[t + 1] - r.xVal[t]) / r.xNumSteps[t]
                  , i = Math.ceil(Number(n.toFixed(3)) - 1)
                  , o = r.xVal[t] + r.xNumSteps[t] * i;
                r.xHighestCompleteStep[t] = o
            } else
                r.xSteps[t] = r.xHighestCompleteStep[t] = r.xVal[t]
    }
    function l(t, e, r) {
        var n;
        this.xPct = [],
        this.xVal = [],
        this.xSteps = [r || !1],
        this.xNumSteps = [!1],
        this.xHighestCompleteStep = [],
        this.snap = e;
        var i = [];
        for (n in t)
            t.hasOwnProperty(n) && i.push([t[n], n]);
        for (i.length && "object" == typeof i[0][0] ? i.sort(function(t, e) {
            return t[0][0] - e[0][0]
        }) : i.sort(function(t, e) {
            return t[0] - e[0]
        }),
        n = 0; n < i.length; n++)
            o(i[n][1], i[n][0], this);
        for (this.xNumSteps = this.xSteps.slice(0),
        n = 0; n < this.xNumSteps.length; n++)
            a(n, this.xNumSteps[n], this)
    }
    l.prototype.getMargin = function(t) {
        var e = this.xNumSteps[0];
        if (e && t / e % 1 != 0)
            throw new Error("noUiSlider (" + ut + "): 'limit', 'margin' and 'padding' must be divisible by step.");
        return 2 === this.xPct.length && p(this.xVal, t)
    }
    ,
    l.prototype.toStepping = function(t) {
        return t = r(this.xVal, this.xPct, t)
    }
    ,
    l.prototype.fromStepping = function(t) {
        return function(t, e, r) {
            if (100 <= r)
                return t.slice(-1)[0];
            var n, i = f(r, e), o = t[i - 1], a = t[i], s = e[i - 1], l = e[i];
            return n = [o, a],
            (r - s) * c(s, l) * (n[1] - n[0]) / 100 + n[0]
        }(this.xVal, this.xPct, t)
    }
    ,
    l.prototype.getStep = function(t) {
        return t = n(this.xPct, this.xSteps, this.snap, t)
    }
    ,
    l.prototype.getDefaultStep = function(t, e, r) {
        var n = f(t, this.xPct);
        return (100 === t || e && t === this.xPct[n - 1]) && (n = Math.max(n - 1, 1)),
        (this.xVal[n] - this.xVal[n - 1]) / r
    }
    ,
    l.prototype.getNearbySteps = function(t) {
        var e = f(t, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[e - 2],
                step: this.xNumSteps[e - 2],
                highestStep: this.xHighestCompleteStep[e - 2]
            },
            thisStep: {
                startValue: this.xVal[e - 1],
                step: this.xNumSteps[e - 1],
                highestStep: this.xHighestCompleteStep[e - 1]
            },
            stepAfter: {
                startValue: this.xVal[e],
                step: this.xNumSteps[e],
                highestStep: this.xHighestCompleteStep[e]
            }
        }
    }
    ,
    l.prototype.countStepDecimals = function() {
        var t = this.xNumSteps.map(e);
        return Math.max.apply(null, t)
    }
    ,
    l.prototype.convert = function(t) {
        return this.getStep(this.toStepping(t))
    }
    ;
    var u = {
        to: function(t) {
            return void 0 !== t && t.toFixed(2)
        },
        from: Number
    };
    function d(t) {
        if ("object" == typeof (e = t) && "function" == typeof e.to && "function" == typeof e.from)
            return !0;
        var e;
        throw new Error("noUiSlider (" + ut + "): 'format' requires 'to' and 'from' methods.")
    }
    function h(t, e) {
        if (!i(e))
            throw new Error("noUiSlider (" + ut + "): 'step' is not numeric.");
        t.singleStep = e
    }
    function m(t, e) {
        if ("object" != typeof e || Array.isArray(e))
            throw new Error("noUiSlider (" + ut + "): 'range' is not an object.");
        if (void 0 === e.min || void 0 === e.max)
            throw new Error("noUiSlider (" + ut + "): Missing 'min' or 'max' in 'range'.");
        if (e.min === e.max)
            throw new Error("noUiSlider (" + ut + "): 'range' 'min' and 'max' cannot be equal.");
        t.spectrum = new l(e,t.snap,t.singleStep)
    }
    function g(t, e) {
        if (e = ht(e),
        !Array.isArray(e) || !e.length)
            throw new Error("noUiSlider (" + ut + "): 'start' option is incorrect.");
        t.handles = e.length,
        t.start = e
    }
    function v(t, e) {
        if ("boolean" != typeof (t.snap = e))
            throw new Error("noUiSlider (" + ut + "): 'snap' option must be a boolean.")
    }
    function b(t, e) {
        if ("boolean" != typeof (t.animate = e))
            throw new Error("noUiSlider (" + ut + "): 'animate' option must be a boolean.")
    }
    function S(t, e) {
        if ("number" != typeof (t.animationDuration = e))
            throw new Error("noUiSlider (" + ut + "): 'animationDuration' option must be a number.")
    }
    function x(t, e) {
        var r, n = [!1];
        if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]),
        !0 === e || !1 === e) {
            for (r = 1; r < t.handles; r++)
                n.push(e);
            n.push(!1)
        } else {
            if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1)
                throw new Error("noUiSlider (" + ut + "): 'connect' option doesn't match handle count.");
            n = e
        }
        t.connect = n
    }
    function w(t, e) {
        switch (e) {
        case "horizontal":
            t.ort = 0;
            break;
        case "vertical":
            t.ort = 1;
            break;
        default:
            throw new Error("noUiSlider (" + ut + "): 'orientation' option is invalid.")
        }
    }
    function y(t, e) {
        if (!i(e))
            throw new Error("noUiSlider (" + ut + "): 'margin' option must be numeric.");
        if (0 !== e && (t.margin = t.spectrum.getMargin(e),
        !t.margin))
            throw new Error("noUiSlider (" + ut + "): 'margin' option is only supported on linear sliders.")
    }
    function E(t, e) {
        if (!i(e))
            throw new Error("noUiSlider (" + ut + "): 'limit' option must be numeric.");
        if (t.limit = t.spectrum.getMargin(e),
        !t.limit || t.handles < 2)
            throw new Error("noUiSlider (" + ut + "): 'limit' option is only supported on linear sliders with 2 or more handles.")
    }
    function C(t, e) {
        if (!i(e) && !Array.isArray(e))
            throw new Error("noUiSlider (" + ut + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        if (Array.isArray(e) && 2 !== e.length && !i(e[0]) && !i(e[1]))
            throw new Error("noUiSlider (" + ut + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        if (0 !== e) {
            if (Array.isArray(e) || (e = [e, e]),
            !(t.padding = [t.spectrum.getMargin(e[0]), t.spectrum.getMargin(e[1])]) === t.padding[0] || !1 === t.padding[1])
                throw new Error("noUiSlider (" + ut + "): 'padding' option is only supported on linear sliders.");
            if (t.padding[0] < 0 || t.padding[1] < 0)
                throw new Error("noUiSlider (" + ut + "): 'padding' option must be a positive number(s).");
            if (100 < t.padding[0] + t.padding[1])
                throw new Error("noUiSlider (" + ut + "): 'padding' option must not exceed 100% of the range.")
        }
    }
    function N(t, e) {
        switch (e) {
        case "ltr":
            t.dir = 0;
            break;
        case "rtl":
            t.dir = 1;
            break;
        default:
            throw new Error("noUiSlider (" + ut + "): 'direction' option was not recognized.")
        }
    }
    function U(t, e) {
        if ("string" != typeof e)
            throw new Error("noUiSlider (" + ut + "): 'behaviour' must be a string containing options.");
        var r = 0 <= e.indexOf("tap")
          , n = 0 <= e.indexOf("drag")
          , i = 0 <= e.indexOf("fixed")
          , o = 0 <= e.indexOf("snap")
          , a = 0 <= e.indexOf("hover")
          , s = 0 <= e.indexOf("unconstrained");
        if (i) {
            if (2 !== t.handles)
                throw new Error("noUiSlider (" + ut + "): 'fixed' behaviour must be used with 2 handles");
            y(t, t.start[1] - t.start[0])
        }
        if (s && (t.margin || t.limit))
            throw new Error("noUiSlider (" + ut + "): 'unconstrained' behaviour cannot be used with margin or limit");
        t.events = {
            tap: r || o,
            drag: n,
            fixed: i,
            snap: o,
            hover: a,
            unconstrained: s
        }
    }
    function k(t, e) {
        if (!1 !== e)
            if (!0 === e) {
                t.tooltips = [];
                for (var r = 0; r < t.handles; r++)
                    t.tooltips.push(!0)
            } else {
                if (t.tooltips = ht(e),
                t.tooltips.length !== t.handles)
                    throw new Error("noUiSlider (" + ut + "): must pass a formatter for all handles.");
                t.tooltips.forEach(function(t) {
                    if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to))
                        throw new Error("noUiSlider (" + ut + "): 'tooltips' must be passed a formatter or 'false'.")
                })
            }
    }
    function P(t, e) {
        d(t.ariaFormat = e)
    }
    function A(t, e) {
        d(t.format = e)
    }
    function V(t, e) {
        if ("boolean" != typeof (t.keyboardSupport = e))
            throw new Error("noUiSlider (" + ut + "): 'keyboardSupport' option must be a boolean.")
    }
    function M(t, e) {
        t.documentElement = e
    }
    function O(t, e) {
        if ("string" != typeof e && !1 !== e)
            throw new Error("noUiSlider (" + ut + "): 'cssPrefix' must be a string or `false`.");
        t.cssPrefix = e
    }
    function L(t, e) {
        if ("object" != typeof e)
            throw new Error("noUiSlider (" + ut + "): 'cssClasses' must be an object.");
        if ("string" == typeof t.cssPrefix)
            for (var r in t.cssClasses = {},
            e)
                e.hasOwnProperty(r) && (t.cssClasses[r] = t.cssPrefix + e[r]);
        else
            t.cssClasses = e
    }
    function bt(e) {
        var r = {
            margin: 0,
            limit: 0,
            padding: 0,
            animate: !0,
            animationDuration: 300,
            ariaFormat: u,
            format: u
        }
          , n = {
            step: {
                r: !1,
                t: h
            },
            start: {
                r: !0,
                t: g
            },
            connect: {
                r: !0,
                t: x
            },
            direction: {
                r: !0,
                t: N
            },
            snap: {
                r: !1,
                t: v
            },
            animate: {
                r: !1,
                t: b
            },
            animationDuration: {
                r: !1,
                t: S
            },
            range: {
                r: !0,
                t: m
            },
            orientation: {
                r: !1,
                t: w
            },
            margin: {
                r: !1,
                t: y
            },
            limit: {
                r: !1,
                t: E
            },
            padding: {
                r: !1,
                t: C
            },
            behaviour: {
                r: !0,
                t: U
            },
            ariaFormat: {
                r: !1,
                t: P
            },
            format: {
                r: !1,
                t: A
            },
            tooltips: {
                r: !1,
                t: k
            },
            keyboardSupport: {
                r: !0,
                t: V
            },
            documentElement: {
                r: !1,
                t: M
            },
            cssPrefix: {
                r: !0,
                t: O
            },
            cssClasses: {
                r: !0,
                t: L
            }
        }
          , i = {
            connect: !1,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: !0,
            cssPrefix: "noUi-",
            cssClasses: {
                target: "target",
                base: "base",
                origin: "origin",
                handle: "handle",
                handleLower: "handle-lower",
                handleUpper: "handle-upper",
                touchArea: "touch-area",
                horizontal: "horizontal",
                vertical: "vertical",
                background: "background",
                connect: "connect",
                connects: "connects",
                ltr: "ltr",
                rtl: "rtl",
                draggable: "draggable",
                drag: "state-drag",
                tap: "state-tap",
                active: "active",
                tooltip: "tooltip",
                pips: "pips",
                pipsHorizontal: "pips-horizontal",
                pipsVertical: "pips-vertical",
                marker: "marker",
                markerHorizontal: "marker-horizontal",
                markerVertical: "marker-vertical",
                markerNormal: "marker-normal",
                markerLarge: "marker-large",
                markerSub: "marker-sub",
                value: "value",
                valueHorizontal: "value-horizontal",
                valueVertical: "value-vertical",
                valueNormal: "value-normal",
                valueLarge: "value-large",
                valueSub: "value-sub"
            }
        };
        e.format && !e.ariaFormat && (e.ariaFormat = e.format),
        Object.keys(n).forEach(function(t) {
            if (!s(e[t]) && void 0 === i[t]) {
                if (n[t].r)
                    throw new Error("noUiSlider (" + ut + "): '" + t + "' is required.");
                return !0
            }
            n[t].t(r, s(e[t]) ? e[t] : i[t])
        }),
        r.pips = e.pips;
        var t = document.createElement("div")
          , o = void 0 !== t.style.msTransform
          , a = void 0 !== t.style.transform;
        r.transformRule = a ? "transform" : o ? "msTransform" : "webkitTransform";
        return r.style = [["left", "top"], ["right", "bottom"]][r.dir][r.ort],
        r
    }
    function z(t, f, o) {
        var l, u, a, c, i, s, e, p, d = window.navigator.pointerEnabled ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup"
        } : window.navigator.msPointerEnabled ? {
            start: "MSPointerDown",
            move: "MSPointerMove",
            end: "MSPointerUp"
        } : {
            start: "mousedown touchstart",
            move: "mousemove touchmove",
            end: "mouseup touchend"
        }, h = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function() {
            var t = !1;
            try {
                var e = Object.defineProperty({}, "passive", {
                    get: function() {
                        t = !0
                    }
                });
                window.addEventListener("test", null, e)
            } catch (t) {}
            return t
        }(), y = t, E = f.spectrum, m = [], g = [], v = [], b = 0, S = {}, x = t.ownerDocument, w = f.documentElement || x.documentElement, C = x.body, N = -1, U = 0, k = 1, P = 2, A = "rtl" === x.dir || 1 === f.ort ? 0 : 100;
        function V(t, e) {
            var r = x.createElement("div");
            return e && mt(r, e),
            t.appendChild(r),
            r
        }
        function M(t, e) {
            var r = V(t, f.cssClasses.origin)
              , n = V(r, f.cssClasses.handle);
            return V(n, f.cssClasses.touchArea),
            n.setAttribute("data-handle", e),
            f.keyboardSupport && (n.setAttribute("tabindex", "0"),
            n.addEventListener("keydown", function(t) {
                return function(t, e) {
                    if (L() || z(e))
                        return !1;
                    var r = ["Left", "Right"]
                      , n = ["Down", "Up"];
                    f.dir && !f.ort ? r.reverse() : f.ort && !f.dir && n.reverse();
                    var i = t.key.replace("Arrow", "")
                      , o = i === n[0] || i === r[0]
                      , a = i === n[1] || i === r[1];
                    if (!o && !a)
                        return !0;
                    t.preventDefault();
                    var s = o ? 0 : 1
                      , l = lt(e)[s];
                    if (null === l)
                        return !1;
                    !1 === l && (l = E.getDefaultStep(g[e], o, 10));
                    return l = Math.max(l, 1e-7),
                    l *= o ? -1 : 1,
                    at(e, m[e] + l, !0),
                    !1
                }(t, e)
            })),
            n.setAttribute("role", "slider"),
            n.setAttribute("aria-orientation", f.ort ? "vertical" : "horizontal"),
            0 === e ? mt(n, f.cssClasses.handleLower) : e === f.handles - 1 && mt(n, f.cssClasses.handleUpper),
            r
        }
        function O(t, e) {
            return !!e && V(t, f.cssClasses.connect)
        }
        function r(t, e) {
            return !!f.tooltips[e] && V(t.firstChild, f.cssClasses.tooltip)
        }
        function L() {
            return y.hasAttribute("disabled")
        }
        function z(t) {
            return u[t].hasAttribute("disabled")
        }
        function j() {
            i && (G("update.tooltips"),
            i.forEach(function(t) {
                t && ct(t)
            }),
            i = null)
        }
        function H() {
            j(),
            i = u.map(r),
            $("update.tooltips", function(t, e, r) {
                if (i[e]) {
                    var n = t[e];
                    !0 !== f.tooltips[e] && (n = f.tooltips[e].to(r[e])),
                    i[e].innerHTML = n
                }
            })
        }
        function F(e, i, o) {
            var a = x.createElement("div")
              , s = [];
            s[U] = f.cssClasses.valueNormal,
            s[k] = f.cssClasses.valueLarge,
            s[P] = f.cssClasses.valueSub;
            var l = [];
            l[U] = f.cssClasses.markerNormal,
            l[k] = f.cssClasses.markerLarge,
            l[P] = f.cssClasses.markerSub;
            var u = [f.cssClasses.valueHorizontal, f.cssClasses.valueVertical]
              , c = [f.cssClasses.markerHorizontal, f.cssClasses.markerVertical];
            function p(t, e) {
                var r = e === f.cssClasses.value
                  , n = r ? s : l;
                return e + " " + (r ? u : c)[f.ort] + " " + n[t]
            }
            return mt(a, f.cssClasses.pips),
            mt(a, 0 === f.ort ? f.cssClasses.pipsHorizontal : f.cssClasses.pipsVertical),
            Object.keys(e).forEach(function(t) {
                !function(t, e, r) {
                    if ((r = i ? i(e, r) : r) !== N) {
                        var n = V(a, !1);
                        n.className = p(r, f.cssClasses.marker),
                        n.style[f.style] = t + "%",
                        U < r && ((n = V(a, !1)).className = p(r, f.cssClasses.value),
                        n.setAttribute("data-value", e),
                        n.style[f.style] = t + "%",
                        n.innerHTML = o.to(e))
                    }
                }(t, e[t][0], e[t][1])
            }),
            a
        }
        function D() {
            c && (ct(c),
            c = null)
        }
        function T(t) {
            D();
            var m, g, v, b, e, r, S, x, w, n = t.mode, i = t.density || 1, o = t.filter || !1, a = function(t, e, r) {
                if ("range" === t || "steps" === t)
                    return E.xVal;
                if ("count" === t) {
                    if (e < 2)
                        throw new Error("noUiSlider (" + ut + "): 'values' (>= 2) required for mode 'count'.");
                    var n = e - 1
                      , i = 100 / n;
                    for (e = []; n--; )
                        e[n] = n * i;
                    e.push(100),
                    t = "positions"
                }
                return "positions" === t ? e.map(function(t) {
                    return E.fromStepping(r ? E.getStep(t) : t)
                }) : "values" === t ? r ? e.map(function(t) {
                    return E.fromStepping(E.getStep(E.toStepping(t)))
                }) : e : void 0
            }(n, t.values || !1, t.stepped || !1), s = (m = i,
            g = n,
            v = a,
            b = {},
            e = E.xVal[0],
            r = E.xVal[E.xVal.length - 1],
            x = S = !1,
            w = 0,
            (v = v.slice().sort(function(t, e) {
                return t - e
            }).filter(function(t) {
                return !this[t] && (this[t] = !0)
            }, {}))[0] !== e && (v.unshift(e),
            S = !0),
            v[v.length - 1] !== r && (v.push(r),
            x = !0),
            v.forEach(function(t, e) {
                var r, n, i, o, a, s, l, u, c, p, f = t, d = v[e + 1], h = "steps" === g;
                if (h && (r = E.xNumSteps[e]),
                r || (r = d - f),
                !1 !== f && void 0 !== d)
                    for (r = Math.max(r, 1e-7),
                    n = f; n <= d; n = (n + r).toFixed(7) / 1) {
                        for (u = (a = (o = E.toStepping(n)) - w) / m,
                        p = a / (c = Math.round(u)),
                        i = 1; i <= c; i += 1)
                            b[(s = w + i * p).toFixed(5)] = [E.fromStepping(s), 0];
                        l = -1 < v.indexOf(n) ? k : h ? P : U,
                        !e && S && (l = 0),
                        n === d && x || (b[o.toFixed(5)] = [n, l]),
                        w = o
                    }
            }),
            b), l = t.format || {
                to: Math.round
            };
            return c = y.appendChild(F(s, o, l))
        }
        function R() {
            var t = l.getBoundingClientRect()
              , e = "offset" + ["Width", "Height"][f.ort];
            return 0 === f.ort ? t.width || l[e] : t.height || l[e]
        }
        function B(n, i, o, a) {
            var e = function(t) {
                return !!(t = function(t, e, r) {
                    var n, i, o = 0 === t.type.indexOf("touch"), a = 0 === t.type.indexOf("mouse"), s = 0 === t.type.indexOf("pointer");
                    0 === t.type.indexOf("MSPointer") && (s = !0);
                    if (o) {
                        var l = function(t) {
                            return t.target === r || r.contains(t.target)
                        };
                        if ("touchstart" === t.type) {
                            var u = Array.prototype.filter.call(t.touches, l);
                            if (1 < u.length)
                                return !1;
                            n = u[0].pageX,
                            i = u[0].pageY
                        } else {
                            var c = Array.prototype.find.call(t.changedTouches, l);
                            if (!c)
                                return !1;
                            n = c.pageX,
                            i = c.pageY
                        }
                    }
                    e = e || vt(x),
                    (a || s) && (n = t.clientX + e.x,
                    i = t.clientY + e.y);
                    return t.pageOffset = e,
                    t.points = [n, i],
                    t.cursor = a || s,
                    t
                }(t, a.pageOffset, a.target || i)) && (!(L() && !a.doNotReject) && (e = y,
                r = f.cssClasses.tap,
                !((e.classList ? e.classList.contains(r) : new RegExp("\\b" + r + "\\b").test(e.className)) && !a.doNotReject) && (!(n === d.start && void 0 !== t.buttons && 1 < t.buttons) && ((!a.hover || !t.buttons) && (h || t.preventDefault(),
                t.calcPoint = t.points[f.ort],
                void o(t, a))))));
                var e, r
            }
              , r = [];
            return n.split(" ").forEach(function(t) {
                i.addEventListener(t, e, !!h && {
                    passive: !0
                }),
                r.push([t, e])
            }),
            r
        }
        function q(t) {
            var e, r, n, i, o, a, s = 100 * (t - (e = l,
            r = f.ort,
            n = e.getBoundingClientRect(),
            i = e.ownerDocument,
            o = i.documentElement,
            a = vt(i),
            /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (a.x = 0),
            r ? n.top + a.y - o.clientTop : n.left + a.x - o.clientLeft)) / R();
            return s = dt(s),
            f.dir ? 100 - s : s
        }
        function X(t, e) {
            "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && _(t, e)
        }
        function Y(t, e) {
            if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty)
                return _(t, e);
            var r = (f.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
            Z(0 < r, 100 * r / e.baseSize, e.locations, e.handleNumbers)
        }
        function _(t, e) {
            e.handle && (gt(e.handle, f.cssClasses.active),
            b -= 1),
            e.listeners.forEach(function(t) {
                w.removeEventListener(t[0], t[1])
            }),
            0 === b && (gt(y, f.cssClasses.drag),
            et(),
            t.cursor && (C.style.cursor = "",
            C.removeEventListener("selectstart", pt))),
            e.handleNumbers.forEach(function(t) {
                J("change", t),
                J("set", t),
                J("end", t)
            })
        }
        function I(t, e) {
            if (e.handleNumbers.some(z))
                return !1;
            var r;
            1 === e.handleNumbers.length && (r = u[e.handleNumbers[0]].children[0],
            b += 1,
            mt(r, f.cssClasses.active));
            t.stopPropagation();
            var n = []
              , i = B(d.move, w, Y, {
                target: t.target,
                handle: r,
                listeners: n,
                startCalcPoint: t.calcPoint,
                baseSize: R(),
                pageOffset: t.pageOffset,
                handleNumbers: e.handleNumbers,
                buttonsProperty: t.buttons,
                locations: g.slice()
            })
              , o = B(d.end, w, _, {
                target: t.target,
                handle: r,
                listeners: n,
                doNotReject: !0,
                handleNumbers: e.handleNumbers
            })
              , a = B("mouseout", w, X, {
                target: t.target,
                handle: r,
                listeners: n,
                doNotReject: !0,
                handleNumbers: e.handleNumbers
            });
            n.push.apply(n, i.concat(o, a)),
            t.cursor && (C.style.cursor = getComputedStyle(t.target).cursor,
            1 < u.length && mt(y, f.cssClasses.drag),
            C.addEventListener("selectstart", pt, !1)),
            e.handleNumbers.forEach(function(t) {
                J("start", t)
            })
        }
        function n(t) {
            t.stopPropagation();
            var n, i, o, e = q(t.calcPoint), r = (n = e,
            o = !(i = 100),
            u.forEach(function(t, e) {
                if (!z(e)) {
                    var r = Math.abs(g[e] - n);
                    (r < i || 100 === r && 100 === i) && (o = e,
                    i = r)
                }
            }),
            o);
            if (!1 === r)
                return !1;
            f.events.snap || ft(y, f.cssClasses.tap, f.animationDuration),
            rt(r, e, !0, !0),
            et(),
            J("slide", r, !0),
            J("update", r, !0),
            J("change", r, !0),
            J("set", r, !0),
            f.events.snap && I(t, {
                handleNumbers: [r]
            })
        }
        function W(t) {
            var e = q(t.calcPoint)
              , r = E.getStep(e)
              , n = E.fromStepping(r);
            Object.keys(S).forEach(function(t) {
                "hover" === t.split(".")[0] && S[t].forEach(function(t) {
                    t.call(s, n)
                })
            })
        }
        function $(t, e) {
            S[t] = S[t] || [],
            S[t].push(e),
            "update" === t.split(".")[0] && u.forEach(function(t, e) {
                J("update", e)
            })
        }
        function G(t) {
            var n = t && t.split(".")[0]
              , i = n && t.substring(n.length);
            Object.keys(S).forEach(function(t) {
                var e = t.split(".")[0]
                  , r = t.substring(e.length);
                n && n !== e || i && i !== r || delete S[t]
            })
        }
        function J(r, n, i) {
            Object.keys(S).forEach(function(t) {
                var e = t.split(".")[0];
                r === e && S[t].forEach(function(t) {
                    t.call(s, m.map(f.format.to), n, m.slice(), i || !1, g.slice())
                })
            })
        }
        function K(t, e, r, n, i, o) {
            return 1 < u.length && !f.events.unconstrained && (n && 0 < e && (r = Math.max(r, t[e - 1] + f.margin)),
            i && e < u.length - 1 && (r = Math.min(r, t[e + 1] - f.margin))),
            1 < u.length && f.limit && (n && 0 < e && (r = Math.min(r, t[e - 1] + f.limit)),
            i && e < u.length - 1 && (r = Math.max(r, t[e + 1] - f.limit))),
            f.padding && (0 === e && (r = Math.max(r, f.padding[0])),
            e === u.length - 1 && (r = Math.min(r, 100 - f.padding[1]))),
            !((r = dt(r = E.getStep(r))) === t[e] && !o) && r
        }
        function Q(t, e) {
            var r = f.ort;
            return (r ? e : t) + ", " + (r ? t : e)
        }
        function Z(t, n, r, e) {
            var i = r.slice()
              , o = [!t, t]
              , a = [t, !t];
            e = e.slice(),
            t && e.reverse(),
            1 < e.length ? e.forEach(function(t, e) {
                var r = K(i, t, i[t] + n, o[e], a[e], !1);
                !1 === r ? n = 0 : (n = r - i[t],
                i[t] = r)
            }) : o = a = [!0];
            var s = !1;
            e.forEach(function(t, e) {
                s = rt(t, r[t] + n, o[e], a[e]) || s
            }),
            s && e.forEach(function(t) {
                J("update", t),
                J("slide", t)
            })
        }
        function tt(t, e) {
            return f.dir ? 100 - t - e : t
        }
        function et() {
            v.forEach(function(t) {
                var e = 50 < g[t] ? -1 : 1
                  , r = 3 + (u.length + e * t);
                u[t].style.zIndex = r
            })
        }
        function rt(t, e, r, n) {
            return !1 !== (e = K(g, t, e, r, n, !1)) && (function(t, e) {
                g[t] = e,
                m[t] = E.fromStepping(e);
                var r = "translate(" + Q(tt(e, 0) - A + "%", "0") + ")";
                u[t].style[f.transformRule] = r,
                nt(t),
                nt(t + 1)
            }(t, e),
            !0)
        }
        function nt(t) {
            if (a[t]) {
                var e = 0
                  , r = 100;
                0 !== t && (e = g[t - 1]),
                t !== a.length - 1 && (r = g[t]);
                var n = r - e
                  , i = "translate(" + Q(tt(e, n) + "%", "0") + ")"
                  , o = "scale(" + Q(n / 100, "1") + ")";
                a[t].style[f.transformRule] = i + " " + o
            }
        }
        function it(t, e) {
            return null === t || !1 === t || void 0 === t ? g[e] : ("number" == typeof t && (t = String(t)),
            t = f.format.from(t),
            !1 === (t = E.toStepping(t)) || isNaN(t) ? g[e] : t)
        }
        function ot(t, e) {
            var r = ht(t)
              , n = void 0 === g[0];
            e = void 0 === e || !!e,
            f.animate && !n && ft(y, f.cssClasses.tap, f.animationDuration),
            v.forEach(function(t) {
                rt(t, it(r[t], t), !0, !1)
            }),
            v.forEach(function(t) {
                rt(t, g[t], !0, !0)
            }),
            et(),
            v.forEach(function(t) {
                J("update", t),
                null !== r[t] && e && J("set", t)
            })
        }
        function at(t, e, r) {
            if (!(0 <= (t = Number(t)) && t < v.length))
                throw new Error("noUiSlider (" + ut + "): invalid handle number, got: " + t);
            rt(t, it(e, t), !0, !0),
            J("update", t),
            r && J("set", t)
        }
        function st() {
            var t = m.map(f.format.to);
            return 1 === t.length ? t[0] : t
        }
        function lt(t) {
            var e = g[t]
              , r = E.getNearbySteps(e)
              , n = m[t]
              , i = r.thisStep.step
              , o = null;
            if (f.snap)
                return [n - r.stepBefore.startValue || null, r.stepAfter.startValue - n || null];
            !1 !== i && n + i > r.stepAfter.startValue && (i = r.stepAfter.startValue - n),
            o = n > r.thisStep.startValue ? r.thisStep.step : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep,
            100 === e ? i = null : 0 === e && (o = null);
            var a = E.countStepDecimals();
            return null !== i && !1 !== i && (i = Number(i.toFixed(a))),
            null !== o && !1 !== o && (o = Number(o.toFixed(a))),
            [o, i]
        }
        return mt(e = y, f.cssClasses.target),
        0 === f.dir ? mt(e, f.cssClasses.ltr) : mt(e, f.cssClasses.rtl),
        0 === f.ort ? mt(e, f.cssClasses.horizontal) : mt(e, f.cssClasses.vertical),
        l = V(e, f.cssClasses.base),
        function(t, e) {
            var r = V(e, f.cssClasses.connects);
            u = [],
            (a = []).push(O(r, t[0]));
            for (var n = 0; n < f.handles; n++)
                u.push(M(e, n)),
                v[n] = n,
                a.push(O(r, t[n + 1]))
        }(f.connect, l),
        (p = f.events).fixed || u.forEach(function(t, e) {
            B(d.start, t.children[0], I, {
                handleNumbers: [e]
            })
        }),
        p.tap && B(d.start, l, n, {}),
        p.hover && B(d.move, l, W, {
            hover: !0
        }),
        p.drag && a.forEach(function(t, e) {
            if (!1 !== t && 0 !== e && e !== a.length - 1) {
                var r = u[e - 1]
                  , n = u[e]
                  , i = [t];
                mt(t, f.cssClasses.draggable),
                p.fixed && (i.push(r.children[0]),
                i.push(n.children[0])),
                i.forEach(function(t) {
                    B(d.start, t, I, {
                        handles: [r, n],
                        handleNumbers: [e - 1, e]
                    })
                })
            }
        }),
        ot(f.start),
        f.pips && T(f.pips),
        f.tooltips && H(),
        $("update", function(t, e, a, r, s) {
            v.forEach(function(t) {
                var e = u[t]
                  , r = K(g, t, 0, !0, !0, !0)
                  , n = K(g, t, 100, !0, !0, !0)
                  , i = s[t]
                  , o = f.ariaFormat.to(a[t]);
                r = E.fromStepping(r).toFixed(1),
                n = E.fromStepping(n).toFixed(1),
                i = E.fromStepping(i).toFixed(1),
                e.children[0].setAttribute("aria-valuemin", r),
                e.children[0].setAttribute("aria-valuemax", n),
                e.children[0].setAttribute("aria-valuenow", i),
                e.children[0].setAttribute("aria-valuetext", o)
            })
        }),
        s = {
            destroy: function() {
                for (var t in f.cssClasses)
                    f.cssClasses.hasOwnProperty(t) && gt(y, f.cssClasses[t]);
                for (; y.firstChild; )
                    y.removeChild(y.firstChild);
                delete y.noUiSlider
            },
            steps: function() {
                return v.map(lt)
            },
            on: $,
            off: G,
            get: st,
            set: ot,
            setHandle: at,
            reset: function(t) {
                ot(f.start, t)
            },
            __moveHandles: function(t, e, r) {
                Z(t, e, g, r)
            },
            options: o,
            updateOptions: function(e, t) {
                var r = st()
                  , n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
                n.forEach(function(t) {
                    void 0 !== e[t] && (o[t] = e[t])
                });
                var i = bt(o);
                n.forEach(function(t) {
                    void 0 !== e[t] && (f[t] = i[t])
                }),
                E = i.spectrum,
                f.margin = i.margin,
                f.limit = i.limit,
                f.padding = i.padding,
                f.pips ? T(f.pips) : D(),
                f.tooltips ? H() : j(),
                g = [],
                ot(e.start || r, t)
            },
            target: y,
            removePips: D,
            removeTooltips: j,
            pips: T
        }
    }
    return {
        __spectrum: l,
        version: ut,
        create: function(t, e) {
            if (!t || !t.nodeName)
                throw new Error("noUiSlider (" + ut + "): create requires a single element, got: " + t);
            if (t.noUiSlider)
                throw new Error("noUiSlider (" + ut + "): Slider was already initialized.");
            var r = z(t, bt(e), e);
            return t.noUiSlider = r
        }
    }
});
/*infinite-scroll.pkgd.min.js*/
!function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";
    function i(i, r, l) {
        function a(t, e, n) {
            var o, r = "$()." + i + '("' + e + '")';
            return t.each(function(t, a) {
                var h = l.data(a, i);
                if (!h)
                    return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var c = h[e];
                if (!c || "_" == e.charAt(0))
                    return void s(r + " is not a valid method");
                var u = c.apply(h, n);
                o = void 0 === o ? u : o
            }),
            void 0 !== o ? o : t
        }
        function h(t, e) {
            t.each(function(t, n) {
                var o = l.data(n, i);
                o ? (o.option(e),
                o._init()) : (o = new r(n,e),
                l.data(n, i, o))
            })
        }
        l = l || e || t.jQuery,
        l && (r.prototype.option || (r.prototype.option = function(t) {
            l.isPlainObject(t) && (this.options = l.extend(!0, this.options, t))
        }
        ),
        l.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return a(this, t, e)
            }
            return h(this, t),
            this
        }
        ,
        n(l))
    }
    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice
      , r = t.console
      , s = "undefined" == typeof r ? function() {}
    : function(t) {
        r.error(t)
    }
    ;
    return n(e || t.jQuery),
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , n = i[t] = i[t] || [];
            return n.indexOf(e) == -1 && n.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}
              , n = i[t] = i[t] || {};
            return n[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return n != -1 && i.splice(n, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0),
            e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var r = i[o]
                  , s = n && n[r];
                s && (this.off(t, r),
                delete n[r]),
                r.apply(this, e)
            }
            return this
        }
    }
    ,
    e.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i]
              , o = n + "MatchesSelector";
            if (t[o])
                return o
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    ,
    i.modulo = function(t, e) {
        return (t % e + e) % e
    }
    ;
    var n = Array.prototype.slice;
    i.makeArray = function(t) {
        if (Array.isArray(t))
            return t;
        if (null === t || void 0 === t)
            return [];
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? n.call(t) : [t]
    }
    ,
    i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }
    ,
    i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode,
            e(t, i))
                return t
    }
    ,
    i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n)
                    return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                    o.push(i[r])
            }
        }),
        o
    }
    ,
    i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var n = t.prototype[e]
          , o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            clearTimeout(t);
            var e = arguments
              , r = this;
            this[o] = setTimeout(function() {
                n.apply(r, e),
                delete r[o]
            }, i)
        }
    }
    ,
    i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }
    ,
    i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    ;
    var o = t.console;
    return i.htmlInit = function(e, n) {
        i.docReady(function() {
            var r = i.toDashed(n)
              , s = "data-" + r
              , l = document.querySelectorAll("[" + s + "]")
              , a = document.querySelectorAll(".js-" + r)
              , h = i.makeArray(l).concat(i.makeArray(a))
              , c = s + "-options"
              , u = t.jQuery;
            h.forEach(function(t) {
                var i, r = t.getAttribute(s) || t.getAttribute(c);
                try {
                    i = r && JSON.parse(r)
                } catch (l) {
                    return void (o && o.error("Error parsing " + s + " on " + t.className + ": " + l))
                }
                var a = new e(t,i);
                u && u.data(t, n, a)
            })
        })
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/core", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("fizzy-ui-utils")) : t.InfiniteScroll = e(t, t.EvEmitter, t.fizzyUIUtils)
}(window, function(t, e, i) {
    function n(t, e) {
        var s = i.getQueryElement(t);
        if (!s)
            return void console.error("Bad element for InfiniteScroll: " + (s || t));
        if (t = s,
        t.infiniteScrollGUID) {
            var l = r[t.infiniteScrollGUID];
            return l.option(e),
            l
        }
        this.element = t,
        this.options = i.extend({}, n.defaults),
        this.option(e),
        o && (this.$element = o(this.element)),
        this.create()
    }
    var o = t.jQuery
      , r = {};
    n.defaults = {},
    n.create = {},
    n.destroy = {};
    var s = n.prototype;
    i.extend(s, e.prototype);
    var l = 0;
    s.create = function() {
        var t = this.guid = ++l;
        this.element.infiniteScrollGUID = t,
        r[t] = this,
        this.pageIndex = 1,
        this.loadCount = 0,
        this.updateGetPath();
        var e = this.getPath && this.getPath();
        if (!e)
            return void console.error("Disabling InfiniteScroll");
        this.updateGetAbsolutePath(),
        this.log("initialized", [this.element.className]),
        this.callOnInit();
        for (var i in n.create)
            n.create[i].call(this)
    }
    ,
    s.option = function(t) {
        i.extend(this.options, t)
    }
    ,
    s.callOnInit = function() {
        var t = this.options.onInit;
        t && t.call(this, this)
    }
    ,
    s.dispatchEvent = function(t, e, i) {
        this.log(t, i);
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n),
        o && this.$element) {
            t += ".infiniteScroll";
            var r = t;
            if (e) {
                var s = o.Event(e);
                s.type = t,
                r = s
            }
            this.$element.trigger(r, i)
        }
    }
    ;
    var a = {
        initialized: function(t) {
            return "on " + t
        },
        request: function(t) {
            return "URL: " + t
        },
        load: function(t, e) {
            return (t.title || "") + ". URL: " + e
        },
        error: function(t, e) {
            return t + ". URL: " + e
        },
        append: function(t, e, i) {
            return i.length + " items. URL: " + e
        },
        last: function(t, e) {
            return "URL: " + e
        },
        history: function(t, e) {
            return "URL: " + e
        },
        pageIndex: function(t, e) {
            return "current page determined to be: " + t + " from " + e
        }
    };
    s.log = function(t, e) {
        if (this.options.debug) {
            var i = "[InfiniteScroll] " + t
              , n = a[t];
            n && (i += ". " + n.apply(this, e)),
            console.log(i)
        }
    }
    ,
    s.updateMeasurements = function() {
        this.windowHeight = t.innerHeight;
        var e = this.element.getBoundingClientRect();
        this.top = e.top + t.pageYOffset
    }
    ,
    s.updateScroller = function() {
        var e = this.options.elementScroll;
        if (!e)
            return void (this.scroller = t);
        if (this.scroller = e === !0 ? this.element : i.getQueryElement(e),
        !this.scroller)
            throw "Unable to find elementScroll: " + e
    }
    ,
    s.updateGetPath = function() {
        var t = this.options.path;
        if (!t)
            return void console.error("InfiniteScroll path option required. Set as: " + t);
        var e = typeof t;
        if ("function" == e)
            return void (this.getPath = t);
        var i = "string" == e && t.match("{{#}}");
        return i ? void this.updateGetPathTemplate(t) : void this.updateGetPathSelector(t)
    }
    ,
    s.updateGetPathTemplate = function(t) {
        this.getPath = function() {
            var e = this.pageIndex + 1;
            return t.replace("{{#}}", e)
        }
        .bind(this);
        var e = t.replace(/(\\\?|\?)/, "\\?").replace("{{#}}", "(\\d\\d?\\d?)")
          , i = new RegExp(e)
          , n = location.href.match(i);
        n && (this.pageIndex = parseInt(n[1], 10),
        this.log("pageIndex", [this.pageIndex, "template string"]))
    }
    ;
    var h = [/^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/, /^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/, /(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/];
    return s.updateGetPathSelector = function(t) {
        var e = document.querySelector(t);
        if (!e)
            return void console.error("Bad InfiniteScroll path option. Next link not found: " + t);
        for (var i, n, o = e.getAttribute("href"), r = 0; o && r < h.length; r++) {
            n = h[r];
            var s = o.match(n);
            if (s) {
                i = s.slice(1);
                break
            }
        }
        return i ? (this.isPathSelector = !0,
        this.getPath = function() {
            var t = this.pageIndex + 1;
            return i[0] + t + i[2]
        }
        .bind(this),
        this.pageIndex = parseInt(i[1], 10) - 1,
        void this.log("pageIndex", [this.pageIndex, "next link"])) : void console.error("InfiniteScroll unable to parse next link href: " + o)
    }
    ,
    s.updateGetAbsolutePath = function() {
        var t = this.getPath()
          , e = t.match(/^http/) || t.match(/^\//);
        if (e)
            return void (this.getAbsolutePath = this.getPath);
        var i = location.pathname
          , n = t.match(/^\?/);
        if (n)
            return void (this.getAbsolutePath = function() {
                return i + this.getPath()
            }
            );
        var o = i.substring(0, i.lastIndexOf("/"));
        this.getAbsolutePath = function() {
            return o + "/" + this.getPath()
        }
    }
    ,
    n.create.hideNav = function() {
        var t = i.getQueryElement(this.options.hideNav);
        t && (t.style.display = "none",
        this.nav = t)
    }
    ,
    n.destroy.hideNav = function() {
        this.nav && (this.nav.style.display = "")
    }
    ,
    s.destroy = function() {
        this.allOff();
        for (var t in n.destroy)
            n.destroy[t].call(this);
        delete this.element.infiniteScrollGUID,
        delete r[this.guid],
        o && this.$element && o.removeData(this.element, "infiniteScroll")
    }
    ,
    n.throttle = function(t, e) {
        e = e || 200;
        var i, n;
        return function() {
            var o = +new Date
              , r = arguments
              , s = function() {
                i = o,
                t.apply(this, r)
            }
            .bind(this);
            i && o < i + e ? (clearTimeout(n),
            n = setTimeout(s, e)) : s()
        }
    }
    ,
    n.data = function(t) {
        t = i.getQueryElement(t);
        var e = t && t.infiniteScrollGUID;
        return e && r[e]
    }
    ,
    n.setJQuery = function(t) {
        o = t
    }
    ,
    i.htmlInit(n, "infinite-scroll"),
    s._init = function() {}
    ,
    o && o.bridget && o.bridget("infiniteScroll", n),
    n
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/page-load", ["./core"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./core")) : e(t, t.InfiniteScroll)
}(window, function(t, e) {
    function i(t) {
        for (var e = document.createDocumentFragment(), i = 0; t && i < t.length; i++)
            e.appendChild(t[i]);
        return e
    }
    function n(t) {
        for (var e = t.querySelectorAll("script"), i = 0; i < e.length; i++) {
            var n = e[i]
              , r = document.createElement("script");
            o(n, r),
            r.innerHTML = n.innerHTML,
            n.parentNode.replaceChild(r, n)
        }
    }
    function o(t, e) {
        for (var i = t.attributes, n = 0; n < i.length; n++) {
            var o = i[n];
            e.setAttribute(o.name, o.value)
        }
    }
    function r(t, e, i, n, o) {
        var r = new XMLHttpRequest;
        r.open("GET", t, !0),
        r.responseType = e || "",
        r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        r.onload = function() {
            if (200 == r.status)
                i(r.response);
            else if (204 == r.status)
                o(r.response);
            else {
                var t = new Error(r.statusText);
                n(t)
            }
        }
        ,
        r.onerror = function() {
            var e = new Error("Network error requesting " + t);
            n(e)
        }
        ,
        r.send()
    }
    var s = e.prototype;
    return e.defaults.loadOnScroll = !0,
    e.defaults.checkLastPage = !0,
    e.defaults.responseType = "document",
    e.create.pageLoad = function() {
        this.canLoad = !0,
        this.on("scrollThreshold", this.onScrollThresholdLoad),
        this.on("load", this.checkLastPage),
        this.options.outlayer && this.on("append", this.onAppendOutlayer)
    }
    ,
    s.onScrollThresholdLoad = function() {
        this.options.loadOnScroll && this.loadNextPage()
    }
    ,
    s.loadNextPage = function() {
        if (!this.isLoading && this.canLoad) {
            var t = this.getAbsolutePath();
            this.isLoading = !0;
            var e = function(e) {
                this.onPageLoad(e, t)
            }
            .bind(this)
              , i = function(e) {
                this.onPageError(e, t)
            }
            .bind(this)
              , n = function(e) {
                this.lastPageReached(e, t)
            }
            .bind(this);
            r(t, this.options.responseType, e, i, n),
            this.dispatchEvent("request", null, [t])
        }
    }
    ,
    s.onPageLoad = function(t, e) {
        return this.options.append || (this.isLoading = !1),
        this.pageIndex++,
        this.loadCount++,
        this.dispatchEvent("load", null, [t, e]),
        this.appendNextPage(t, e),
        t
    }
    ,
    s.appendNextPage = function(t, e) {
        var n = this.options.append
          , o = "document" == this.options.responseType;
        if (o && n) {
            var r = t.querySelectorAll(n)
              , s = i(r)
              , l = function() {
                this.appendItems(r, s),
                this.isLoading = !1,
                this.dispatchEvent("append", null, [t, e, r])
            }
            .bind(this);
            this.options.outlayer ? this.appendOutlayerItems(s, l) : l()
        }
    }
    ,
    s.appendItems = function(t, e) {
        t && t.length && (e = e || i(t),
        n(e),
        this.element.appendChild(e))
    }
    ,
    s.appendOutlayerItems = function(i, n) {
        var o = e.imagesLoaded || t.imagesLoaded;
        return o ? void o(i, n) : (console.error("[InfiniteScroll] imagesLoaded required for outlayer option"),
        void (this.isLoading = !1))
    }
    ,
    s.onAppendOutlayer = function(t, e, i) {
        this.options.outlayer.appended(i)
    }
    ,
    s.checkLastPage = function(t, e) {
        var i = this.options.checkLastPage;
        if (i) {
            var n = this.options.path;
            if ("function" == typeof n) {
                var o = this.getPath();
                if (!o)
                    return void this.lastPageReached(t, e)
            }
            var r;
            if ("string" == typeof i ? r = i : this.isPathSelector && (r = n),
            r && t.querySelector) {
                var s = t.querySelector(r);
                s || this.lastPageReached(t, e)
            }
        }
    }
    ,
    s.lastPageReached = function(t, e) {
        this.canLoad = !1,
        this.dispatchEvent("last", null, [t, e])
    }
    ,
    s.onPageError = function(t, e) {
        return this.isLoading = !1,
        this.canLoad = !1,
        this.dispatchEvent("error", null, [t, e]),
        t
    }
    ,
    e.create.prefill = function() {
        if (this.options.prefill) {
            var t = this.options.append;
            if (!t)
                return void console.error("append option required for prefill. Set as :" + t);
            this.updateMeasurements(),
            this.updateScroller(),
            this.isPrefilling = !0,
            this.on("append", this.prefill),
            this.once("error", this.stopPrefill),
            this.once("last", this.stopPrefill),
            this.prefill()
        }
    }
    ,
    s.prefill = function() {
        var t = this.getPrefillDistance();
        this.isPrefilling = t >= 0,
        this.isPrefilling ? (this.log("prefill"),
        this.loadNextPage()) : this.stopPrefill()
    }
    ,
    s.getPrefillDistance = function() {
        return this.options.elementScroll ? this.scroller.clientHeight - this.scroller.scrollHeight : this.windowHeight - this.element.clientHeight
    }
    ,
    s.stopPrefill = function() {
        this.log("stopPrefill"),
        this.off("append", this.prefill)
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/scroll-watch", ["./core", "fizzy-ui-utils/utils"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils)
}(window, function(t, e, i) {
    var n = e.prototype;
    return e.defaults.scrollThreshold = 400,
    e.create.scrollWatch = function() {
        this.pageScrollHandler = this.onPageScroll.bind(this),
        this.resizeHandler = this.onResize.bind(this);
        var t = this.options.scrollThreshold
          , e = t || 0 === t;
        e && this.enableScrollWatch()
    }
    ,
    e.destroy.scrollWatch = function() {
        this.disableScrollWatch()
    }
    ,
    n.enableScrollWatch = function() {
        this.isScrollWatching || (this.isScrollWatching = !0,
        this.updateMeasurements(),
        this.updateScroller(),
        this.on("last", this.disableScrollWatch),
        this.bindScrollWatchEvents(!0))
    }
    ,
    n.disableScrollWatch = function() {
        this.isScrollWatching && (this.bindScrollWatchEvents(!1),
        delete this.isScrollWatching)
    }
    ,
    n.bindScrollWatchEvents = function(e) {
        var i = e ? "addEventListener" : "removeEventListener";
        this.scroller[i]("scroll", this.pageScrollHandler),
        t[i]("resize", this.resizeHandler)
    }
    ,
    n.onPageScroll = e.throttle(function() {
        var t = this.getBottomDistance();
        t <= this.options.scrollThreshold && this.dispatchEvent("scrollThreshold")
    }),
    n.getBottomDistance = function() {
        return this.options.elementScroll ? this.getElementBottomDistance() : this.getWindowBottomDistance()
    }
    ,
    n.getWindowBottomDistance = function() {
        var e = this.top + this.element.clientHeight
          , i = t.pageYOffset + this.windowHeight;
        return e - i
    }
    ,
    n.getElementBottomDistance = function() {
        var t = this.scroller.scrollHeight
          , e = this.scroller.scrollTop + this.scroller.clientHeight;
        return t - e
    }
    ,
    n.onResize = function() {
        this.updateMeasurements()
    }
    ,
    i.debounceMethod(e, "onResize", 150),
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/history", ["./core", "fizzy-ui-utils/utils"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils)
}(window, function(t, e, i) {
    var n = e.prototype;
    e.defaults.history = "replace";
    var o = document.createElement("a");
    return e.create.history = function() {
        if (this.options.history) {
            o.href = this.getAbsolutePath();
            var t = o.origin || o.protocol + "//" + o.host
              , e = t == location.origin;
            return e ? void (this.options.append ? this.createHistoryAppend() : this.createHistoryPageLoad()) : void console.error("[InfiniteScroll] cannot set history with different origin: " + o.origin + " on " + location.origin + " . History behavior disabled.")
        }
    }
    ,
    n.createHistoryAppend = function() {
        this.updateMeasurements(),
        this.updateScroller(),
        this.scrollPages = [{
            top: 0,
            path: location.href,
            title: document.title
        }],
        this.scrollPageIndex = 0,
        this.scrollHistoryHandler = this.onScrollHistory.bind(this),
        this.unloadHandler = this.onUnload.bind(this),
        this.scroller.addEventListener("scroll", this.scrollHistoryHandler),
        this.on("append", this.onAppendHistory),
        this.bindHistoryAppendEvents(!0)
    }
    ,
    n.bindHistoryAppendEvents = function(e) {
        var i = e ? "addEventListener" : "removeEventListener";
        this.scroller[i]("scroll", this.scrollHistoryHandler),
        t[i]("unload", this.unloadHandler)
    }
    ,
    n.createHistoryPageLoad = function() {
        this.on("load", this.onPageLoadHistory)
    }
    ,
    e.destroy.history = n.destroyHistory = function() {
        var t = this.options.history && this.options.append;
        t && this.bindHistoryAppendEvents(!1)
    }
    ,
    n.onAppendHistory = function(t, e, i) {
        if (i && i.length) {
            var n = i[0]
              , r = this.getElementScrollY(n);
            o.href = e,
            this.scrollPages.push({
                top: r,
                path: o.href,
                title: t.title
            })
        }
    }
    ,
    n.getElementScrollY = function(t) {
        return this.options.elementScroll ? this.getElementElementScrollY(t) : this.getElementWindowScrollY(t)
    }
    ,
    n.getElementWindowScrollY = function(e) {
        var i = e.getBoundingClientRect();
        return i.top + t.pageYOffset
    }
    ,
    n.getElementElementScrollY = function(t) {
        return t.offsetTop - this.top
    }
    ,
    n.onScrollHistory = function() {
        for (var t, e, i = this.getScrollViewY(), n = 0; n < this.scrollPages.length; n++) {
            var o = this.scrollPages[n];
            if (o.top >= i)
                break;
            t = n,
            e = o
        }
        t != this.scrollPageIndex && (this.scrollPageIndex = t,
        this.setHistory(e.title, e.path))
    }
    ,
    i.debounceMethod(e, "onScrollHistory", 150),
    n.getScrollViewY = function() {
        return this.options.elementScroll ? this.scroller.scrollTop + this.scroller.clientHeight / 2 : t.pageYOffset + this.windowHeight / 2
    }
    ,
    n.setHistory = function(t, e) {
        var i = this.options.history
          , n = i && history[i + "State"];
        n && (history[i + "State"](null, t, e),
        this.options.historyTitle && (document.title = t),
        this.dispatchEvent("history", null, [t, e]))
    }
    ,
    n.onUnload = function() {
        var e = this.scrollPageIndex;
        if (0 !== e) {
            var i = this.scrollPages[e]
              , n = t.pageYOffset - i.top + this.top;
            this.destroyHistory(),
            scrollTo(0, n)
        }
    }
    ,
    n.onPageLoadHistory = function(t, e) {
        this.setHistory(t.title, e)
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/button", ["./core", "fizzy-ui-utils/utils"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils)
}(window, function(t, e, i) {
    function n(t, e) {
        this.element = t,
        this.infScroll = e,
        this.clickHandler = this.onClick.bind(this),
        this.element.addEventListener("click", this.clickHandler),
        e.on("request", this.disable.bind(this)),
        e.on("load", this.enable.bind(this)),
        e.on("error", this.hide.bind(this)),
        e.on("last", this.hide.bind(this))
    }
    return e.create.button = function() {
        var t = i.getQueryElement(this.options.button);
        if (t)
            return void (this.button = new n(t,this))
    }
    ,
    e.destroy.button = function() {
        this.button && this.button.destroy()
    }
    ,
    n.prototype.onClick = function(t) {
        t.preventDefault(),
        this.infScroll.loadNextPage()
    }
    ,
    n.prototype.enable = function() {
        this.element.removeAttribute("disabled")
    }
    ,
    n.prototype.disable = function() {
        this.element.disabled = "disabled"
    }
    ,
    n.prototype.hide = function() {
        this.element.style.display = "none"
    }
    ,
    n.prototype.destroy = function() {
        this.element.removeEventListener("click", this.clickHandler)
    }
    ,
    e.Button = n,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/status", ["./core", "fizzy-ui-utils/utils"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils)
}(window, function(t, e, i) {
    function n(t) {
        r(t, "none")
    }
    function o(t) {
        r(t, "block")
    }
    function r(t, e) {
        t && (t.style.display = e)
    }
    var s = e.prototype;
    return e.create.status = function() {
        var t = i.getQueryElement(this.options.status);
        t && (this.statusElement = t,
        this.statusEventElements = {
            request: t.querySelector(".infinite-scroll-request"),
            error: t.querySelector(".infinite-scroll-error"),
            last: t.querySelector(".infinite-scroll-last")
        },
        this.on("request", this.showRequestStatus),
        this.on("error", this.showErrorStatus),
        this.on("last", this.showLastStatus),
        this.bindHideStatus("on"))
    }
    ,
    s.bindHideStatus = function(t) {
        var e = this.options.append ? "append" : "load";
        this[t](e, this.hideAllStatus)
    }
    ,
    s.showRequestStatus = function() {
        this.showStatus("request")
    }
    ,
    s.showErrorStatus = function() {
        this.showStatus("error")
    }
    ,
    s.showLastStatus = function() {
        this.showStatus("last"),
        this.bindHideStatus("off")
    }
    ,
    s.showStatus = function(t) {
        o(this.statusElement),
        this.hideStatusEventElements();
        var e = this.statusEventElements[t];
        o(e)
    }
    ,
    s.hideAllStatus = function() {
        n(this.statusElement),
        this.hideStatusEventElements()
    }
    ,
    s.hideStatusEventElements = function() {
        for (var t in this.statusEventElements) {
            var e = this.statusEventElements[t];
            n(e)
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["infinite-scroll/js/core", "infinite-scroll/js/page-load", "infinite-scroll/js/scroll-watch", "infinite-scroll/js/history", "infinite-scroll/js/button", "infinite-scroll/js/status"], e) : "object" == typeof module && module.exports && (module.exports = e(require("./core"), require("./page-load"), require("./scroll-watch"), require("./history"), require("./button"), require("./status")))
}(window, function(t) {
    return t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function n(t) {
        if (Array.isArray(t))
            return t;
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? h.call(t) : [t]
    }
    function o(t, e, r) {
        if (!(this instanceof o))
            return new o(t,e,r);
        var s = t;
        return "string" == typeof t && (s = document.querySelectorAll(t)),
        s ? (this.elements = n(s),
        this.options = i({}, this.options),
        "function" == typeof e ? r = e : i(this.options, e),
        r && this.on("always", r),
        this.getImages(),
        l && (this.jqDeferred = new l.Deferred),
        void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || t))
    }
    function r(t) {
        this.img = t
    }
    function s(t, e) {
        this.url = t,
        this.element = e,
        this.img = new Image
    }
    var l = t.jQuery
      , a = t.console
      , h = Array.prototype.slice;
    o.prototype = Object.create(e.prototype),
    o.prototype.options = {},
    o.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    o.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t),
        this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && c[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = t.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    }
    ;
    var c = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n; ) {
                var o = n && n[2];
                o && this.addBackground(o, t),
                n = i.exec(e.backgroundImage)
            }
    }
    ,
    o.prototype.addImage = function(t) {
        var e = new r(t);
        this.images.push(e)
    }
    ,
    o.prototype.addBackground = function(t, e) {
        var i = new s(t,e);
        this.images.push(i)
    }
    ,
    o.prototype.check = function() {
        function t(t, i, n) {
            setTimeout(function() {
                e.progress(t, i, n)
            })
        }
        var e = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach(function(e) {
            e.once("progress", t),
            e.check()
        }) : void this.complete()
    }
    ,
    o.prototype.progress = function(t, e, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded,
        this.emitEvent("progress", [this, t, e]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && a && a.log("progress: " + i, t, e)
    }
    ,
    o.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(t, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }
    ,
    r.prototype = Object.create(e.prototype),
    r.prototype.check = function() {
        var t = this.getIsImageComplete();
        return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    r.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }
    ,
    r.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.img, e])
    }
    ,
    r.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    r.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    r.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    s.prototype = Object.create(r.prototype),
    s.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url;
        var t = this.getIsImageComplete();
        t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    s.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.element, e])
    }
    ,
    o.makeJQueryPlugin = function(e) {
        e = e || t.jQuery,
        e && (l = e,
        l.fn.imagesLoaded = function(t, e) {
            var i = new o(this,t,e);
            return i.jqDeferred.promise(l(this))
        }
        )
    }
    ,
    o.makeJQueryPlugin(),
    o
});
/*sweetalert.min.js*/
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.swal = e() : t.swal = e()
}(this, function() {
    return function(t) {
        function e(o) {
            if (n[o])
                return n[o].exports;
            var r = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t[o].call(r.exports, r, r.exports, e),
            r.l = !0,
            r.exports
        }
        var n = {};
        return e.m = t,
        e.c = n,
        e.d = function(t, n, o) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }
        ,
        e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return e.d(n, "a", n),
            n
        }
        ,
        e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        e.p = "",
        e(e.s = 8)
    }([function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = "swal-button";
        e.CLASS_NAMES = {
            MODAL: "swal-modal",
            OVERLAY: "swal-overlay",
            SHOW_MODAL: "swal-overlay--show-modal",
            MODAL_TITLE: "swal-title",
            MODAL_TEXT: "swal-text",
            ICON: "swal-icon",
            ICON_CUSTOM: "swal-icon--custom",
            CONTENT: "swal-content",
            FOOTER: "swal-footer",
            BUTTON_CONTAINER: "swal-button-container",
            BUTTON: o,
            CONFIRM_BUTTON: o + "--confirm",
            CANCEL_BUTTON: o + "--cancel",
            DANGER_BUTTON: o + "--danger",
            BUTTON_LOADING: o + "--loading",
            BUTTON_LOADER: o + "__loader"
        },
        e.default = e.CLASS_NAMES
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.getNode = function(t) {
            var e = "." + t;
            return document.querySelector(e)
        }
        ,
        e.stringToNode = function(t) {
            var e = document.createElement("div");
            return e.innerHTML = t.trim(),
            e.firstChild
        }
        ,
        e.insertAfter = function(t, e) {
            var n = e.nextSibling;
            e.parentNode.insertBefore(t, n)
        }
        ,
        e.removeNode = function(t) {
            t.parentElement.removeChild(t)
        }
        ,
        e.throwErr = function(t) {
            throw t = t.replace(/ +(?= )/g, ""),
            "SweetAlert: " + (t = t.trim())
        }
        ,
        e.isPlainObject = function(t) {
            if ("[object Object]" !== Object.prototype.toString.call(t))
                return !1;
            var e = Object.getPrototypeOf(t);
            return null === e || e === Object.prototype
        }
        ,
        e.ordinalSuffixOf = function(t) {
            var e = t % 10
              , n = t % 100;
            return 1 === e && 11 !== n ? t + "st" : 2 === e && 12 !== n ? t + "nd" : 3 === e && 13 !== n ? t + "rd" : t + "th"
        }
    }
    , function(t, e, n) {
        "use strict";
        function o(t) {
            for (var n in t)
                e.hasOwnProperty(n) || (e[n] = t[n])
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        o(n(25));
        var r = n(26);
        e.overlayMarkup = r.default,
        o(n(27)),
        o(n(28)),
        o(n(29));
        var i = n(0)
          , a = i.default.MODAL_TITLE
          , s = i.default.MODAL_TEXT
          , c = i.default.ICON
          , l = i.default.FOOTER;
        e.iconMarkup = '\n  <div class="' + c + '"></div>',
        e.titleMarkup = '\n  <div class="' + a + '"></div>\n',
        e.textMarkup = '\n  <div class="' + s + '"></div>',
        e.footerMarkup = '\n  <div class="' + l + '"></div>\n'
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(1);
        e.CONFIRM_KEY = "confirm",
        e.CANCEL_KEY = "cancel";
        var r = {
            visible: !0,
            text: null,
            value: null,
            className: "",
            closeModal: !0
        }
          , i = Object.assign({}, r, {
            visible: !1,
            text: "Cancel",
            value: null
        })
          , a = Object.assign({}, r, {
            text: "OK",
            value: !0
        });
        e.defaultButtonList = {
            cancel: i,
            confirm: a
        };
        var s = function(t) {
            switch (t) {
            case e.CONFIRM_KEY:
                return a;
            case e.CANCEL_KEY:
                return i;
            default:
                var n = t.charAt(0).toUpperCase() + t.slice(1);
                return Object.assign({}, r, {
                    text: n,
                    value: t
                })
            }
        }
          , c = function(t, e) {
            var n = s(t);
            return !0 === e ? Object.assign({}, n, {
                visible: !0
            }) : "string" == typeof e ? Object.assign({}, n, {
                visible: !0,
                text: e
            }) : o.isPlainObject(e) ? Object.assign({
                visible: !0
            }, n, e) : Object.assign({}, n, {
                visible: !1
            })
        }
          , l = function(t) {
            for (var e = {}, n = 0, o = Object.keys(t); n < o.length; n++) {
                var r = o[n]
                  , a = t[r]
                  , s = c(r, a);
                e[r] = s
            }
            return e.cancel || (e.cancel = i),
            e
        }
          , u = function(t) {
            var n = {};
            switch (t.length) {
            case 1:
                n[e.CANCEL_KEY] = Object.assign({}, i, {
                    visible: !1
                });
                break;
            case 2:
                n[e.CANCEL_KEY] = c(e.CANCEL_KEY, t[0]),
                n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t[1]);
                break;
            default:
                o.throwErr("Invalid number of 'buttons' in array (" + t.length + ").\n      If you want more than 2 buttons, you need to use an object!")
            }
            return n
        };
        e.getButtonListOpts = function(t) {
            var n = e.defaultButtonList;
            return "string" == typeof t ? n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t) : Array.isArray(t) ? n = u(t) : o.isPlainObject(t) ? n = l(t) : !0 === t ? n = u([!0, !0]) : !1 === t ? n = u([!1, !1]) : void 0 === t && (n = e.defaultButtonList),
            n
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(1)
          , r = n(2)
          , i = n(0)
          , a = i.default.MODAL
          , s = i.default.OVERLAY
          , c = n(30)
          , l = n(31)
          , u = n(32)
          , f = n(33);
        e.injectElIntoModal = function(t) {
            var e = o.getNode(a)
              , n = o.stringToNode(t);
            return e.appendChild(n),
            n
        }
        ;
        var d = function(t) {
            t.className = a,
            t.textContent = ""
        }
          , p = function(t, e) {
            d(t);
            var n = e.className;
            n && t.classList.add(n)
        };
        e.initModalContent = function(t) {
            var e = o.getNode(a);
            p(e, t),
            c.default(t.icon),
            l.initTitle(t.title),
            l.initText(t.text),
            f.default(t.content),
            u.default(t.buttons, t.dangerMode)
        }
        ;
        var m = function() {
            var t = o.getNode(s)
              , e = o.stringToNode(r.modalMarkup);
            t.appendChild(e)
        };
        e.default = m
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(3)
          , r = {
            isOpen: !1,
            promise: null,
            actions: {},
            timer: null
        }
          , i = Object.assign({}, r);
        e.resetState = function() {
            i = Object.assign({}, r)
        }
        ,
        e.setActionValue = function(t) {
            if ("string" == typeof t)
                return a(o.CONFIRM_KEY, t);
            for (var e in t)
                a(e, t[e])
        }
        ;
        var a = function(t, e) {
            i.actions[t] || (i.actions[t] = {}),
            Object.assign(i.actions[t], {
                value: e
            })
        };
        e.setActionOptionsFor = function(t, e) {
            var n = (void 0 === e ? {} : e).closeModal
              , o = void 0 === n || n;
            Object.assign(i.actions[t], {
                closeModal: o
            })
        }
        ,
        e.default = i
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(1)
          , r = n(3)
          , i = n(0)
          , a = i.default.OVERLAY
          , s = i.default.SHOW_MODAL
          , c = i.default.BUTTON
          , l = i.default.BUTTON_LOADING
          , u = n(5);
        e.openModal = function() {
            o.getNode(a).classList.add(s),
            u.default.isOpen = !0
        }
        ;
        var f = function() {
            o.getNode(a).classList.remove(s),
            u.default.isOpen = !1
        };
        e.onAction = function(t) {
            void 0 === t && (t = r.CANCEL_KEY);
            var e = u.default.actions[t]
              , n = e.value;
            if (!1 === e.closeModal) {
                var i = c + "--" + t;
                o.getNode(i).classList.add(l)
            } else
                f();
            u.default.promise.resolve(n)
        }
        ,
        e.getState = function() {
            var t = Object.assign({}, u.default);
            return delete t.promise,
            delete t.timer,
            t
        }
        ,
        e.stopLoading = function() {
            for (var t = document.querySelectorAll("." + c), e = 0; e < t.length; e++) {
                t[e].classList.remove(l)
            }
        }
    }
    , function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0,
            eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }
    , function(t, e, n) {
        (function(e) {
            t.exports = e.sweetAlert = n(9)
        }
        ).call(e, n(7))
    }
    , function(t, e, n) {
        (function(e) {
            t.exports = e.swal = n(10)
        }
        ).call(e, n(7))
    }
    , function(t, e, n) {
        "undefined" != typeof window && n(11),
        n(16);
        var o = n(23).default;
        t.exports = o
    }
    , function(t, e, n) {
        var o = n(12);
        "string" == typeof o && (o = [[t.i, o, ""]]);
        var r = {
            insertAt: "top"
        };
        r.transform = void 0;
        n(14)(o, r);
        o.locals && (t.exports = o.locals)
    }
    , function(t, e, n) {
        e = t.exports = n(13)(void 0),
        e.push([t.i, '.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}', ""])
    }
    , function(t, e) {
        function n(t, e) {
            var n = t[1] || ""
              , r = t[3];
            if (!r)
                return n;
            if (e && "function" == typeof btoa) {
                var i = o(r);
                return [n].concat(r.sources.map(function(t) {
                    return "/*# sourceURL=" + r.sourceRoot + t + " */"
                })).concat([i]).join("\n")
            }
            return [n].join("\n")
        }
        function o(t) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
        }
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map(function(e) {
                    var o = n(e, t);
                    return e[2] ? "@media " + e[2] + "{" + o + "}" : o
                }).join("")
            }
            ,
            e.i = function(t, n) {
                "string" == typeof t && (t = [[null, t, ""]]);
                for (var o = {}, r = 0; r < this.length; r++) {
                    var i = this[r][0];
                    "number" == typeof i && (o[i] = !0)
                }
                for (r = 0; r < t.length; r++) {
                    var a = t[r];
                    "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                    e.push(a))
                }
            }
            ,
            e
        }
    }
    , function(t, e, n) {
        function o(t, e) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n]
                  , r = m[o.id];
                if (r) {
                    r.refs++;
                    for (var i = 0; i < r.parts.length; i++)
                        r.parts[i](o.parts[i]);
                    for (; i < o.parts.length; i++)
                        r.parts.push(u(o.parts[i], e))
                } else {
                    for (var a = [], i = 0; i < o.parts.length; i++)
                        a.push(u(o.parts[i], e));
                    m[o.id] = {
                        id: o.id,
                        refs: 1,
                        parts: a
                    }
                }
            }
        }
        function r(t, e) {
            for (var n = [], o = {}, r = 0; r < t.length; r++) {
                var i = t[r]
                  , a = e.base ? i[0] + e.base : i[0]
                  , s = i[1]
                  , c = i[2]
                  , l = i[3]
                  , u = {
                    css: s,
                    media: c,
                    sourceMap: l
                };
                o[a] ? o[a].parts.push(u) : n.push(o[a] = {
                    id: a,
                    parts: [u]
                })
            }
            return n
        }
        function i(t, e) {
            var n = v(t.insertInto);
            if (!n)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var o = w[w.length - 1];
            if ("top" === t.insertAt)
                o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild),
                w.push(e);
            else {
                if ("bottom" !== t.insertAt)
                    throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(e)
            }
        }
        function a(t) {
            if (null === t.parentNode)
                return !1;
            t.parentNode.removeChild(t);
            var e = w.indexOf(t);
            e >= 0 && w.splice(e, 1)
        }
        function s(t) {
            var e = document.createElement("style");
            return t.attrs.type = "text/css",
            l(e, t.attrs),
            i(t, e),
            e
        }
        function c(t) {
            var e = document.createElement("link");
            return t.attrs.type = "text/css",
            t.attrs.rel = "stylesheet",
            l(e, t.attrs),
            i(t, e),
            e
        }
        function l(t, e) {
            Object.keys(e).forEach(function(n) {
                t.setAttribute(n, e[n])
            })
        }
        function u(t, e) {
            var n, o, r, i;
            if (e.transform && t.css) {
                if (!(i = e.transform(t.css)))
                    return function() {}
                    ;
                t.css = i
            }
            if (e.singleton) {
                var l = h++;
                n = g || (g = s(e)),
                o = f.bind(null, n, l, !1),
                r = f.bind(null, n, l, !0)
            } else
                t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(e),
                o = p.bind(null, n, e),
                r = function() {
                    a(n),
                    n.href && URL.revokeObjectURL(n.href)
                }
                ) : (n = s(e),
                o = d.bind(null, n),
                r = function() {
                    a(n)
                }
                );
            return o(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                        return;
                    o(t = e)
                } else
                    r()
            }
        }
        function f(t, e, n, o) {
            var r = n ? "" : o.css;
            if (t.styleSheet)
                t.styleSheet.cssText = x(e, r);
            else {
                var i = document.createTextNode(r)
                  , a = t.childNodes;
                a[e] && t.removeChild(a[e]),
                a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
            }
        }
        function d(t, e) {
            var n = e.css
              , o = e.media;
            if (o && t.setAttribute("media", o),
            t.styleSheet)
                t.styleSheet.cssText = n;
            else {
                for (; t.firstChild; )
                    t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }
        function p(t, e, n) {
            var o = n.css
              , r = n.sourceMap
              , i = void 0 === e.convertToAbsoluteUrls && r;
            (e.convertToAbsoluteUrls || i) && (o = y(o)),
            r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var a = new Blob([o],{
                type: "text/css"
            })
              , s = t.href;
            t.href = URL.createObjectURL(a),
            s && URL.revokeObjectURL(s)
        }
        var m = {}
          , b = function(t) {
            var e;
            return function() {
                return void 0 === e && (e = t.apply(this, arguments)),
                e
            }
        }(function() {
            return window && document && document.all && !window.atob
        })
          , v = function(t) {
            var e = {};
            return function(n) {
                return void 0 === e[n] && (e[n] = t.call(this, n)),
                e[n]
            }
        }(function(t) {
            return document.querySelector(t)
        })
          , g = null
          , h = 0
          , w = []
          , y = n(15);
        t.exports = function(t, e) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
                throw new Error("The style-loader cannot be used in a non-browser environment");
            e = e || {},
            e.attrs = "object" == typeof e.attrs ? e.attrs : {},
            e.singleton || (e.singleton = b()),
            e.insertInto || (e.insertInto = "head"),
            e.insertAt || (e.insertAt = "bottom");
            var n = r(t, e);
            return o(n, e),
            function(t) {
                for (var i = [], a = 0; a < n.length; a++) {
                    var s = n[a]
                      , c = m[s.id];
                    c.refs--,
                    i.push(c)
                }
                if (t) {
                    o(r(t, e), e)
                }
                for (var a = 0; a < i.length; a++) {
                    var c = i[a];
                    if (0 === c.refs) {
                        for (var l = 0; l < c.parts.length; l++)
                            c.parts[l]();
                        delete m[c.id]
                    }
                }
            }
        }
        ;
        var x = function() {
            var t = [];
            return function(e, n) {
                return t[e] = n,
                t.filter(Boolean).join("\n")
            }
        }()
    }
    , function(t, e) {
        t.exports = function(t) {
            var e = "undefined" != typeof window && window.location;
            if (!e)
                throw new Error("fixUrls requires window.location");
            if (!t || "string" != typeof t)
                return t;
            var n = e.protocol + "//" + e.host
              , o = n + e.pathname.replace(/\/[^\/]*$/, "/");
            return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
                var r = e.trim().replace(/^"(.*)"$/, function(t, e) {
                    return e
                }).replace(/^'(.*)'$/, function(t, e) {
                    return e
                });
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))
                    return t;
                var i;
                return i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""),
                "url(" + JSON.stringify(i) + ")"
            })
        }
    }
    , function(t, e, n) {
        var o = n(17);
        "undefined" == typeof window || window.Promise || (window.Promise = o),
        n(21),
        String.prototype.includes || (String.prototype.includes = function(t, e) {
            "use strict";
            return "number" != typeof e && (e = 0),
            !(e + t.length > this.length) && -1 !== this.indexOf(t, e)
        }
        ),
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(t, e) {
                if (null == this)
                    throw new TypeError('"this" is null or not defined');
                var n = Object(this)
                  , o = n.length >>> 0;
                if (0 === o)
                    return !1;
                for (var r = 0 | e, i = Math.max(r >= 0 ? r : o - Math.abs(r), 0); i < o; ) {
                    if (function(t, e) {
                        return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
                    }(n[i], t))
                        return !0;
                    i++
                }
                return !1
            }
        }),
        "undefined" != typeof window && function(t) {
            t.forEach(function(t) {
                t.hasOwnProperty("remove") || Object.defineProperty(t, "remove", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function() {
                        this.parentNode.removeChild(this)
                    }
                })
            })
        }([Element.prototype, CharacterData.prototype, DocumentType.prototype])
    }
    , function(t, e, n) {
        (function(e) {
            !function(n) {
                function o() {}
                function r(t, e) {
                    return function() {
                        t.apply(e, arguments)
                    }
                }
                function i(t) {
                    if ("object" != typeof this)
                        throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof t)
                        throw new TypeError("not a function");
                    this._state = 0,
                    this._handled = !1,
                    this._value = void 0,
                    this._deferreds = [],
                    f(t, this)
                }
                function a(t, e) {
                    for (; 3 === t._state; )
                        t = t._value;
                    if (0 === t._state)
                        return void t._deferreds.push(e);
                    t._handled = !0,
                    i._immediateFn(function() {
                        var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                        if (null === n)
                            return void (1 === t._state ? s : c)(e.promise, t._value);
                        var o;
                        try {
                            o = n(t._value)
                        } catch (t) {
                            return void c(e.promise, t)
                        }
                        s(e.promise, o)
                    })
                }
                function s(t, e) {
                    try {
                        if (e === t)
                            throw new TypeError("A promise cannot be resolved with itself.");
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var n = e.then;
                            if (e instanceof i)
                                return t._state = 3,
                                t._value = e,
                                void l(t);
                            if ("function" == typeof n)
                                return void f(r(n, e), t)
                        }
                        t._state = 1,
                        t._value = e,
                        l(t)
                    } catch (e) {
                        c(t, e)
                    }
                }
                function c(t, e) {
                    t._state = 2,
                    t._value = e,
                    l(t)
                }
                function l(t) {
                    2 === t._state && 0 === t._deferreds.length && i._immediateFn(function() {
                        t._handled || i._unhandledRejectionFn(t._value)
                    });
                    for (var e = 0, n = t._deferreds.length; e < n; e++)
                        a(t, t._deferreds[e]);
                    t._deferreds = null
                }
                function u(t, e, n) {
                    this.onFulfilled = "function" == typeof t ? t : null,
                    this.onRejected = "function" == typeof e ? e : null,
                    this.promise = n
                }
                function f(t, e) {
                    var n = !1;
                    try {
                        t(function(t) {
                            n || (n = !0,
                            s(e, t))
                        }, function(t) {
                            n || (n = !0,
                            c(e, t))
                        })
                    } catch (t) {
                        if (n)
                            return;
                        n = !0,
                        c(e, t)
                    }
                }
                var d = setTimeout;
                i.prototype.catch = function(t) {
                    return this.then(null, t)
                }
                ,
                i.prototype.then = function(t, e) {
                    var n = new this.constructor(o);
                    return a(this, new u(t,e,n)),
                    n
                }
                ,
                i.all = function(t) {
                    var e = Array.prototype.slice.call(t);
                    return new i(function(t, n) {
                        function o(i, a) {
                            try {
                                if (a && ("object" == typeof a || "function" == typeof a)) {
                                    var s = a.then;
                                    if ("function" == typeof s)
                                        return void s.call(a, function(t) {
                                            o(i, t)
                                        }, n)
                                }
                                e[i] = a,
                                0 == --r && t(e)
                            } catch (t) {
                                n(t)
                            }
                        }
                        if (0 === e.length)
                            return t([]);
                        for (var r = e.length, i = 0; i < e.length; i++)
                            o(i, e[i])
                    }
                    )
                }
                ,
                i.resolve = function(t) {
                    return t && "object" == typeof t && t.constructor === i ? t : new i(function(e) {
                        e(t)
                    }
                    )
                }
                ,
                i.reject = function(t) {
                    return new i(function(e, n) {
                        n(t)
                    }
                    )
                }
                ,
                i.race = function(t) {
                    return new i(function(e, n) {
                        for (var o = 0, r = t.length; o < r; o++)
                            t[o].then(e, n)
                    }
                    )
                }
                ,
                i._immediateFn = "function" == typeof e && function(t) {
                    e(t)
                }
                || function(t) {
                    d(t, 0)
                }
                ,
                i._unhandledRejectionFn = function(t) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                }
                ,
                i._setImmediateFn = function(t) {
                    i._immediateFn = t
                }
                ,
                i._setUnhandledRejectionFn = function(t) {
                    i._unhandledRejectionFn = t
                }
                ,
                void 0 !== t && t.exports ? t.exports = i : n.Promise || (n.Promise = i)
            }(this)
        }
        ).call(e, n(18).setImmediate)
    }
    , function(t, e, n) {
        function o(t, e) {
            this._id = t,
            this._clearFn = e
        }
        var r = Function.prototype.apply;
        e.setTimeout = function() {
            return new o(r.call(setTimeout, window, arguments),clearTimeout)
        }
        ,
        e.setInterval = function() {
            return new o(r.call(setInterval, window, arguments),clearInterval)
        }
        ,
        e.clearTimeout = e.clearInterval = function(t) {
            t && t.close()
        }
        ,
        o.prototype.unref = o.prototype.ref = function() {}
        ,
        o.prototype.close = function() {
            this._clearFn.call(window, this._id)
        }
        ,
        e.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId),
            t._idleTimeout = e
        }
        ,
        e.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId),
            t._idleTimeout = -1
        }
        ,
        e._unrefActive = e.active = function(t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                t._onTimeout && t._onTimeout()
            }, e))
        }
        ,
        n(19),
        e.setImmediate = setImmediate,
        e.clearImmediate = clearImmediate
    }
    , function(t, e, n) {
        (function(t, e) {
            !function(t, n) {
                "use strict";
                function o(t) {
                    "function" != typeof t && (t = new Function("" + t));
                    for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++)
                        e[n] = arguments[n + 1];
                    var o = {
                        callback: t,
                        args: e
                    };
                    return l[c] = o,
                    s(c),
                    c++
                }
                function r(t) {
                    delete l[t]
                }
                function i(t) {
                    var e = t.callback
                      , o = t.args;
                    switch (o.length) {
                    case 0:
                        e();
                        break;
                    case 1:
                        e(o[0]);
                        break;
                    case 2:
                        e(o[0], o[1]);
                        break;
                    case 3:
                        e(o[0], o[1], o[2]);
                        break;
                    default:
                        e.apply(n, o)
                    }
                }
                function a(t) {
                    if (u)
                        setTimeout(a, 0, t);
                    else {
                        var e = l[t];
                        if (e) {
                            u = !0;
                            try {
                                i(e)
                            } finally {
                                r(t),
                                u = !1
                            }
                        }
                    }
                }
                if (!t.setImmediate) {
                    var s, c = 1, l = {}, u = !1, f = t.document, d = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    d = d && d.setTimeout ? d : t,
                    "[object process]" === {}.toString.call(t.process) ? function() {
                        s = function(t) {
                            e.nextTick(function() {
                                a(t)
                            })
                        }
                    }() : function() {
                        if (t.postMessage && !t.importScripts) {
                            var e = !0
                              , n = t.onmessage;
                            return t.onmessage = function() {
                                e = !1
                            }
                            ,
                            t.postMessage("", "*"),
                            t.onmessage = n,
                            e
                        }
                    }() ? function() {
                        var e = "setImmediate$" + Math.random() + "$"
                          , n = function(n) {
                            n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && a(+n.data.slice(e.length))
                        };
                        t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n),
                        s = function(n) {
                            t.postMessage(e + n, "*")
                        }
                    }() : t.MessageChannel ? function() {
                        var t = new MessageChannel;
                        t.port1.onmessage = function(t) {
                            a(t.data)
                        }
                        ,
                        s = function(e) {
                            t.port2.postMessage(e)
                        }
                    }() : f && "onreadystatechange"in f.createElement("script") ? function() {
                        var t = f.documentElement;
                        s = function(e) {
                            var n = f.createElement("script");
                            n.onreadystatechange = function() {
                                a(e),
                                n.onreadystatechange = null,
                                t.removeChild(n),
                                n = null
                            }
                            ,
                            t.appendChild(n)
                        }
                    }() : function() {
                        s = function(t) {
                            setTimeout(a, 0, t)
                        }
                    }(),
                    d.setImmediate = o,
                    d.clearImmediate = r
                }
            }("undefined" == typeof self ? void 0 === t ? this : t : self)
        }
        ).call(e, n(7), n(20))
    }
    , function(t, e) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }
        function o() {
            throw new Error("clearTimeout has not been defined")
        }
        function r(t) {
            if (u === setTimeout)
                return setTimeout(t, 0);
            if ((u === n || !u) && setTimeout)
                return u = setTimeout,
                setTimeout(t, 0);
            try {
                return u(t, 0)
            } catch (e) {
                try {
                    return u.call(null, t, 0)
                } catch (e) {
                    return u.call(this, t, 0)
                }
            }
        }
        function i(t) {
            if (f === clearTimeout)
                return clearTimeout(t);
            if ((f === o || !f) && clearTimeout)
                return f = clearTimeout,
                clearTimeout(t);
            try {
                return f(t)
            } catch (e) {
                try {
                    return f.call(null, t)
                } catch (e) {
                    return f.call(this, t)
                }
            }
        }
        function a() {
            b && p && (b = !1,
            p.length ? m = p.concat(m) : v = -1,
            m.length && s())
        }
        function s() {
            if (!b) {
                var t = r(a);
                b = !0;
                for (var e = m.length; e; ) {
                    for (p = m,
                    m = []; ++v < e; )
                        p && p[v].run();
                    v = -1,
                    e = m.length
                }
                p = null,
                b = !1,
                i(t)
            }
        }
        function c(t, e) {
            this.fun = t,
            this.array = e
        }
        function l() {}
        var u, f, d = t.exports = {};
        !function() {
            try {
                u = "function" == typeof setTimeout ? setTimeout : n
            } catch (t) {
                u = n
            }
            try {
                f = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (t) {
                f = o
            }
        }();
        var p, m = [], b = !1, v = -1;
        d.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
            m.push(new c(t,e)),
            1 !== m.length || b || r(s)
        }
        ,
        c.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        d.title = "browser",
        d.browser = !0,
        d.env = {},
        d.argv = [],
        d.version = "",
        d.versions = {},
        d.on = l,
        d.addListener = l,
        d.once = l,
        d.off = l,
        d.removeListener = l,
        d.removeAllListeners = l,
        d.emit = l,
        d.prependListener = l,
        d.prependOnceListener = l,
        d.listeners = function(t) {
            return []
        }
        ,
        d.binding = function(t) {
            throw new Error("process.binding is not supported")
        }
        ,
        d.cwd = function() {
            return "/"
        }
        ,
        d.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }
        ,
        d.umask = function() {
            return 0
        }
    }
    , function(t, e, n) {
        "use strict";
        n(22).polyfill()
    }
    , function(t, e, n) {
        "use strict";
        function o(t, e) {
            if (void 0 === t || null === t)
                throw new TypeError("Cannot convert first argument to object");
            for (var n = Object(t), o = 1; o < arguments.length; o++) {
                var r = arguments[o];
                if (void 0 !== r && null !== r)
                    for (var i = Object.keys(Object(r)), a = 0, s = i.length; a < s; a++) {
                        var c = i[a]
                          , l = Object.getOwnPropertyDescriptor(r, c);
                        void 0 !== l && l.enumerable && (n[c] = r[c])
                    }
            }
            return n
        }
        function r() {
            Object.assign || Object.defineProperty(Object, "assign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: o
            })
        }
        t.exports = {
            assign: o,
            polyfill: r
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(24)
          , r = n(6)
          , i = n(5)
          , a = n(36)
          , s = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            if ("undefined" != typeof window) {
                var n = a.getOpts.apply(void 0, t);
                return new Promise(function(t, e) {
                    i.default.promise = {
                        resolve: t,
                        reject: e
                    },
                    o.default(n),
                    setTimeout(function() {
                        r.openModal()
                    })
                }
                )
            }
        };
        s.close = r.onAction,
        s.getState = r.getState,
        s.setActionValue = i.setActionValue,
        s.stopLoading = r.stopLoading,
        s.setDefaults = a.setDefaults,
        e.default = s
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(1)
          , r = n(0)
          , i = r.default.MODAL
          , a = n(4)
          , s = n(34)
          , c = n(35)
          , l = n(1);
        e.init = function(t) {
            o.getNode(i) || (document.body || l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),
            s.default(),
            a.default()),
            a.initModalContent(t),
            c.default(t)
        }
        ,
        e.default = e.init
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(0)
          , r = o.default.MODAL;
        e.modalMarkup = '\n  <div class="' + r + '" role="dialog" aria-modal="true"></div>',
        e.default = e.modalMarkup
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(0)
          , r = o.default.OVERLAY
          , i = '<div \n    class="' + r + '"\n    tabIndex="-1">\n  </div>';
        e.default = i
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(0)
          , r = o.default.ICON;
        e.errorIconMarkup = function() {
            var t = r + "--error"
              , e = t + "__line";
            return '\n    <div class="' + t + '__x-mark">\n      <span class="' + e + " " + e + '--left"></span>\n      <span class="' + e + " " + e + '--right"></span>\n    </div>\n  '
        }
        ,
        e.warningIconMarkup = function() {
            var t = r + "--warning";
            return '\n    <span class="' + t + '__body">\n      <span class="' + t + '__dot"></span>\n    </span>\n  '
        }
        ,
        e.successIconMarkup = function() {
            var t = r + "--success";
            return '\n    <span class="' + t + "__line " + t + '__line--long"></span>\n    <span class="' + t + "__line " + t + '__line--tip"></span>\n\n    <div class="' + t + '__ring"></div>\n    <div class="' + t + '__hide-corners"></div>\n  '
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(0)
          , r = o.default.CONTENT;
        e.contentMarkup = '\n  <div class="' + r + '">\n\n  </div>\n'
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(0)
          , r = o.default.BUTTON_CONTAINER
          , i = o.default.BUTTON
          , a = o.default.BUTTON_LOADER;
        e.buttonMarkup = '\n  <div class="' + r + '">\n\n    <button\n      class="' + i + '"\n    ></button>\n\n    <div class="' + a + '">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(4)
          , r = n(2)
          , i = n(0)
          , a = i.default.ICON
          , s = i.default.ICON_CUSTOM
          , c = ["error", "warning", "success", "info"]
          , l = {
            error: r.errorIconMarkup(),
            warning: r.warningIconMarkup(),
            success: r.successIconMarkup()
        }
          , u = function(t, e) {
            var n = a + "--" + t;
            e.classList.add(n);
            var o = l[t];
            o && (e.innerHTML = o)
        }
          , f = function(t, e) {
            e.classList.add(s);
            var n = document.createElement("img");
            n.src = t,
            e.appendChild(n)
        }
          , d = function(t) {
            if (t) {
                var e = o.injectElIntoModal(r.iconMarkup);
                c.includes(t) ? u(t, e) : f(t, e)
            }
        };
        e.default = d
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(2)
          , r = n(4)
          , i = function(t) {
            navigator.userAgent.includes("AppleWebKit") && (t.style.display = "none",
            t.offsetHeight,
            t.style.display = "")
        };
        e.initTitle = function(t) {
            if (t) {
                var e = r.injectElIntoModal(o.titleMarkup);
                e.textContent = t,
                i(e)
            }
        }
        ,
        e.initText = function(t) {
            if (t) {
                var e = document.createDocumentFragment();
                t.split("\n").forEach(function(t, n, o) {
                    e.appendChild(document.createTextNode(t)),
                    n < o.length - 1 && e.appendChild(document.createElement("br"))
                });
                var n = r.injectElIntoModal(o.textMarkup);
                n.appendChild(e),
                i(n)
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(1)
          , r = n(4)
          , i = n(0)
          , a = i.default.BUTTON
          , s = i.default.DANGER_BUTTON
          , c = n(3)
          , l = n(2)
          , u = n(6)
          , f = n(5)
          , d = function(t, e, n) {
            var r = e.text
              , i = e.value
              , d = e.className
              , p = e.closeModal
              , m = o.stringToNode(l.buttonMarkup)
              , b = m.querySelector("." + a)
              , v = a + "--" + t;
            if (b.classList.add(v),
            d) {
                (Array.isArray(d) ? d : d.split(" ")).filter(function(t) {
                    return t.length > 0
                }).forEach(function(t) {
                    b.classList.add(t)
                })
            }
            n && t === c.CONFIRM_KEY && b.classList.add(s),
            b.textContent = r;
            var g = {};
            return g[t] = i,
            f.setActionValue(g),
            f.setActionOptionsFor(t, {
                closeModal: p
            }),
            b.addEventListener("click", function() {
                return u.onAction(t)
            }),
            m
        }
          , p = function(t, e) {
            var n = r.injectElIntoModal(l.footerMarkup);
            for (var o in t) {
                var i = t[o]
                  , a = d(o, i, e);
                i.visible && n.appendChild(a)
            }
            0 === n.children.length && n.remove()
        };
        e.default = p
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(3)
          , r = n(4)
          , i = n(2)
          , a = n(5)
          , s = n(6)
          , c = n(0)
          , l = c.default.CONTENT
          , u = function(t) {
            t.addEventListener("input", function(t) {
                var e = t.target
                  , n = e.value;
                a.setActionValue(n)
            }),
            t.addEventListener("keyup", function(t) {
                if ("Enter" === t.key)
                    return s.onAction(o.CONFIRM_KEY)
            }),
            setTimeout(function() {
                t.focus(),
                a.setActionValue("")
            }, 0)
        }
          , f = function(t, e, n) {
            var o = document.createElement(e)
              , r = l + "__" + e;
            o.classList.add(r);
            for (var i in n) {
                var a = n[i];
                o[i] = a
            }
            "input" === e && u(o),
            t.appendChild(o)
        }
          , d = function(t) {
            if (t) {
                var e = r.injectElIntoModal(i.contentMarkup)
                  , n = t.element
                  , o = t.attributes;
                "string" == typeof n ? f(e, n, o) : e.appendChild(n)
            }
        };
        e.default = d
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(1)
          , r = n(2)
          , i = function() {
            var t = o.stringToNode(r.overlayMarkup);
            document.body.appendChild(t)
        };
        e.default = i
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(5)
          , r = n(6)
          , i = n(1)
          , a = n(3)
          , s = n(0)
          , c = s.default.MODAL
          , l = s.default.BUTTON
          , u = s.default.OVERLAY
          , f = function(t) {
            t.preventDefault(),
            v()
        }
          , d = function(t) {
            t.preventDefault(),
            g()
        }
          , p = function(t) {
            if (o.default.isOpen)
                switch (t.key) {
                case "Escape":
                    return r.onAction(a.CANCEL_KEY)
                }
        }
          , m = function(t) {
            if (o.default.isOpen)
                switch (t.key) {
                case "Tab":
                    return f(t)
                }
        }
          , b = function(t) {
            if (o.default.isOpen)
                return "Tab" === t.key && t.shiftKey ? d(t) : void 0
        }
          , v = function() {
            var t = i.getNode(l);
            t && (t.tabIndex = 0,
            t.focus())
        }
          , g = function() {
            var t = i.getNode(c)
              , e = t.querySelectorAll("." + l)
              , n = e.length - 1
              , o = e[n];
            o && o.focus()
        }
          , h = function(t) {
            t[t.length - 1].addEventListener("keydown", m)
        }
          , w = function(t) {
            t[0].addEventListener("keydown", b)
        }
          , y = function() {
            var t = i.getNode(c)
              , e = t.querySelectorAll("." + l);
            e.length && (h(e),
            w(e))
        }
          , x = function(t) {
            if (i.getNode(u) === t.target)
                return r.onAction(a.CANCEL_KEY)
        }
          , _ = function(t) {
            var e = i.getNode(u);
            e.removeEventListener("click", x),
            t && e.addEventListener("click", x)
        }
          , k = function(t) {
            o.default.timer && clearTimeout(o.default.timer),
            t && (o.default.timer = window.setTimeout(function() {
                return r.onAction(a.CANCEL_KEY)
            }, t))
        }
          , O = function(t) {
            t.closeOnEsc ? document.addEventListener("keyup", p) : document.removeEventListener("keyup", p),
            t.dangerMode ? v() : g(),
            y(),
            _(t.closeOnClickOutside),
            k(t.timer)
        };
        e.default = O
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(1)
          , r = n(3)
          , i = n(37)
          , a = n(38)
          , s = {
            title: null,
            text: null,
            icon: null,
            buttons: r.defaultButtonList,
            content: null,
            className: null,
            closeOnClickOutside: !0,
            closeOnEsc: !0,
            dangerMode: !1,
            timer: null
        }
          , c = Object.assign({}, s);
        e.setDefaults = function(t) {
            c = Object.assign({}, s, t)
        }
        ;
        var l = function(t) {
            var e = t && t.button
              , n = t && t.buttons;
            return void 0 !== e && void 0 !== n && o.throwErr("Cannot set both 'button' and 'buttons' options!"),
            void 0 !== e ? {
                confirm: e
            } : n
        }
          , u = function(t) {
            return o.ordinalSuffixOf(t + 1)
        }
          , f = function(t, e) {
            o.throwErr(u(e) + " argument ('" + t + "') is invalid")
        }
          , d = function(t, e) {
            var n = t + 1
              , r = e[n];
            o.isPlainObject(r) || void 0 === r || o.throwErr("Expected " + u(n) + " argument ('" + r + "') to be a plain object")
        }
          , p = function(t, e) {
            var n = t + 1
              , r = e[n];
            void 0 !== r && o.throwErr("Unexpected " + u(n) + " argument (" + r + ")")
        }
          , m = function(t, e, n, r) {
            var i = typeof e
              , a = "string" === i
              , s = e instanceof Element;
            if (a) {
                if (0 === n)
                    return {
                        text: e
                    };
                if (1 === n)
                    return {
                        text: e,
                        title: r[0]
                    };
                if (2 === n)
                    return d(n, r),
                    {
                        icon: e
                    };
                f(e, n)
            } else {
                if (s && 0 === n)
                    return d(n, r),
                    {
                        content: e
                    };
                if (o.isPlainObject(e))
                    return p(n, r),
                    e;
                f(e, n)
            }
        };
        e.getOpts = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            var n = {};
            t.forEach(function(e, o) {
                var r = m(0, e, o, t);
                Object.assign(n, r)
            });
            var o = l(n);
            n.buttons = r.getButtonListOpts(o),
            delete n.button,
            n.content = i.getContentOpts(n.content);
            var u = Object.assign({}, s, c, n);
            return Object.keys(u).forEach(function(t) {
                a.DEPRECATED_OPTS[t] && a.logDeprecation(t)
            }),
            u
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(1)
          , r = {
            element: "input",
            attributes: {
                placeholder: ""
            }
        };
        e.getContentOpts = function(t) {
            var e = {};
            return o.isPlainObject(t) ? Object.assign(e, t) : t instanceof Element ? {
                element: t
            } : "input" === t ? r : null
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.logDeprecation = function(t) {
            var n = e.DEPRECATED_OPTS[t]
              , o = n.onlyRename
              , r = n.replacement
              , i = n.subOption
              , a = n.link
              , s = o ? "renamed" : "deprecated"
              , c = 'SweetAlert warning: "' + t + '" option has been ' + s + ".";
            if (r) {
                c += " Please use" + (i ? ' "' + i + '" in ' : " ") + '"' + r + '" instead.'
            }
            var l = "https://sweetalert.js.org";
            c += a ? " More details: " + l + a : " More details: " + l + "/guides/#upgrading-from-1x",
            console.warn(c)
        }
        ,
        e.DEPRECATED_OPTS = {
            type: {
                replacement: "icon",
                link: "/docs/#icon"
            },
            imageUrl: {
                replacement: "icon",
                link: "/docs/#icon"
            },
            customClass: {
                replacement: "className",
                onlyRename: !0,
                link: "/docs/#classname"
            },
            imageSize: {},
            showCancelButton: {
                replacement: "buttons",
                link: "/docs/#buttons"
            },
            showConfirmButton: {
                replacement: "button",
                link: "/docs/#button"
            },
            confirmButtonText: {
                replacement: "button",
                link: "/docs/#button"
            },
            confirmButtonColor: {},
            cancelButtonText: {
                replacement: "buttons",
                link: "/docs/#buttons"
            },
            closeOnConfirm: {
                replacement: "button",
                subOption: "closeModal",
                link: "/docs/#button"
            },
            closeOnCancel: {
                replacement: "buttons",
                subOption: "closeModal",
                link: "/docs/#buttons"
            },
            showLoaderOnConfirm: {
                replacement: "buttons"
            },
            animation: {},
            inputType: {
                replacement: "content",
                link: "/docs/#content"
            },
            inputValue: {
                replacement: "content",
                link: "/docs/#content"
            },
            inputPlaceholder: {
                replacement: "content",
                link: "/docs/#content"
            },
            html: {
                replacement: "content",
                link: "/docs/#content"
            },
            allowEscapeKey: {
                replacement: "closeOnEsc",
                onlyRename: !0,
                link: "/docs/#closeonesc"
            },
            allowClickOutside: {
                replacement: "closeOnClickOutside",
                onlyRename: !0,
                link: "/docs/#closeonclickoutside"
            }
        }
    }
    ])
});
/*!
 * dist/jquery.inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2019 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.0-beta.280
 */
!function webpackUniversalModuleDefinition(root, factory) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = factory(require("jquery"));
    else if ("function" == typeof define && define.amd)
        define(["jquery"], factory);
    else {
        var a = "object" == typeof exports ? factory(require("jquery")) : factory(root.jQuery);
        for (var i in a)
            ("object" == typeof exports ? exports : root)[i] = a[i]
    }
}(window, function(__WEBPACK_EXTERNAL_MODULE__3__) {
    return modules = [function(module) {
        module.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17}')
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        function _typeof(obj) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj
            }
            : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            }
            ,
            _typeof(obj)
        }
        var $ = __webpack_require__(2)
          , window = __webpack_require__(4)
          , document = window.document
          , generateMaskSet = __webpack_require__(5).generateMaskSet
          , analyseMask = __webpack_require__(5).analyseMask
          , maskScope = __webpack_require__(8);
        function Inputmask(alias, options, internal) {
            if (!(this instanceof Inputmask))
                return new Inputmask(alias,options,internal);
            this.el = void 0,
            this.events = {},
            this.maskset = void 0,
            this.refreshValue = !1,
            !0 !== internal && ($.isPlainObject(alias) ? options = alias : (options = options || {},
            alias && (options.alias = alias)),
            this.opts = $.extend(!0, {}, this.defaults, options),
            this.noMasksCache = options && void 0 !== options.definitions,
            this.userOptions = options || {},
            resolveAlias(this.opts.alias, options, this.opts),
            this.isRTL = this.opts.numericInput)
        }
        function resolveAlias(aliasStr, options, opts) {
            var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
            return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, void 0, opts),
            $.extend(!0, opts, aliasDefinition),
            $.extend(!0, opts, options),
            !0) : (null === opts.mask && (opts.mask = aliasStr),
            !1)
        }
        function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
            function importOption(option, optionData) {
                optionData = void 0 !== optionData ? optionData : npt.getAttribute(dataAttribute + "-" + option),
                null !== optionData && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = window[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)),
                userOptions[option] = optionData)
            }
            if (!0 === opts.importDataAttributes) {
                var attrOptions = npt.getAttribute(dataAttribute), option, dataoptions, optionData, p;
                if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(/'/g, '"'),
                dataoptions = JSON.parse("{" + attrOptions + "}")),
                dataoptions)
                    for (p in optionData = void 0,
                    dataoptions)
                        if ("alias" === p.toLowerCase()) {
                            optionData = dataoptions[p];
                            break
                        }
                for (option in importOption("alias", optionData),
                userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts),
                opts) {
                    if (dataoptions)
                        for (p in optionData = void 0,
                        dataoptions)
                            if (p.toLowerCase() === option.toLowerCase()) {
                                optionData = dataoptions[p];
                                break
                            }
                    importOption(option, optionData)
                }
            }
            return $.extend(!0, opts, userOptions),
            "rtl" !== npt.dir && !opts.rightAlign || (npt.style.textAlign = "right"),
            "rtl" !== npt.dir && !opts.numericInput || (npt.dir = "ltr",
            npt.removeAttribute("dir"),
            opts.isRTL = !0),
            Object.keys(userOptions).length
        }
        Inputmask.prototype = {
            dataAttribute: "data-inputmask",
            defaults: {
                placeholder: "_",
                optionalmarker: ["[", "]"],
                quantifiermarker: ["{", "}"],
                groupmarker: ["(", ")"],
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                regex: null,
                oncomplete: $.noop,
                onincomplete: $.noop,
                oncleared: $.noop,
                repeat: 0,
                greedy: !1,
                autoUnmask: !1,
                removeMaskOnSubmit: !1,
                clearMaskOnLostFocus: !0,
                insertMode: !0,
                clearIncomplete: !1,
                alias: null,
                onKeyDown: $.noop,
                onBeforeMask: null,
                onBeforePaste: function onBeforePaste(pastedValue, opts) {
                    return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue
                },
                onBeforeWrite: null,
                onUnMask: null,
                showMaskOnFocus: !0,
                showMaskOnHover: !0,
                onKeyValidation: $.noop,
                skipOptionalPartCharacter: " ",
                numericInput: !1,
                rightAlign: !1,
                undoOnEscape: !0,
                radixPoint: "",
                _radixDance: !1,
                groupSeparator: "",
                keepStatic: null,
                positionCaretOnTab: !0,
                tabThrough: !1,
                supportsInputType: ["text", "tel", "url", "password", "search"],
                ignorables: [8, 9, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
                isComplete: null,
                preValidation: null,
                postValidation: null,
                staticDefinitionSymbol: void 0,
                jitMasking: !1,
                nullable: !0,
                inputEventOnly: !1,
                noValuePatching: !1,
                positionCaretOnClick: "lvp",
                casing: null,
                inputmode: "verbatim",
                importDataAttributes: !0,
                shiftPositions: !0
            },
            definitions: {
                9: {
                    validator: "[0-9\uff11-\uff19]",
                    definitionSymbol: "*"
                },
                a: {
                    validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                    definitionSymbol: "*"
                },
                "*": {
                    validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
                }
            },
            aliases: {},
            masksCache: {},
            mask: function mask(elems) {
                var that = this;
                return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)),
                elems = elems.nodeName ? [elems] : elems,
                $.each(elems, function(ndx, el) {
                    var scopedOpts = $.extend(!0, {}, that.opts);
                    if (importAttributeOptions(el, scopedOpts, $.extend(!0, {}, that.userOptions), that.dataAttribute)) {
                        var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                        void 0 !== maskset && (void 0 !== el.inputmask && (el.inputmask.opts.autoUnmask = !0,
                        el.inputmask.remove()),
                        el.inputmask = new Inputmask(void 0,void 0,!0),
                        el.inputmask.opts = scopedOpts,
                        el.inputmask.noMasksCache = that.noMasksCache,
                        el.inputmask.userOptions = $.extend(!0, {}, that.userOptions),
                        el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput,
                        el.inputmask.el = el,
                        el.inputmask.maskset = maskset,
                        $.data(el, "_inputmask_opts", scopedOpts),
                        maskScope.call(el.inputmask, {
                            action: "mask"
                        }))
                    }
                }),
                elems && elems[0] && elems[0].inputmask || this
            },
            option: function option(options, noremask) {
                return "string" == typeof options ? this.opts[options] : "object" === _typeof(options) ? ($.extend(this.userOptions, options),
                this.el && !0 !== noremask && this.mask(this.el),
                this) : void 0
            },
            unmaskedvalue: function unmaskedvalue(value) {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache),
                maskScope.call(this, {
                    action: "unmaskedvalue",
                    value: value
                })
            },
            remove: function remove() {
                return maskScope.call(this, {
                    action: "remove"
                })
            },
            getemptymask: function getemptymask() {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache),
                maskScope.call(this, {
                    action: "getemptymask"
                })
            },
            hasMaskedValue: function hasMaskedValue() {
                return !this.opts.autoUnmask
            },
            isComplete: function isComplete() {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache),
                maskScope.call(this, {
                    action: "isComplete"
                })
            },
            getmetadata: function getmetadata() {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache),
                maskScope.call(this, {
                    action: "getmetadata"
                })
            },
            isValid: function isValid(value) {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache),
                maskScope.call(this, {
                    action: "isValid",
                    value: value
                })
            },
            format: function format(value, metadata) {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache),
                maskScope.call(this, {
                    action: "format",
                    value: value,
                    metadata: metadata
                })
            },
            setValue: function setValue(value) {
                this.el && $(this.el).trigger("setvalue", [value])
            },
            analyseMask: analyseMask
        },
        Inputmask.extendDefaults = function(options) {
            $.extend(!0, Inputmask.prototype.defaults, options)
        }
        ,
        Inputmask.extendDefinitions = function(definition) {
            $.extend(!0, Inputmask.prototype.definitions, definition)
        }
        ,
        Inputmask.extendAliases = function(alias) {
            $.extend(!0, Inputmask.prototype.aliases, alias)
        }
        ,
        Inputmask.format = function(value, options, metadata) {
            return Inputmask(options).format(value, metadata)
        }
        ,
        Inputmask.unmask = function(value, options) {
            return Inputmask(options).unmaskedvalue(value)
        }
        ,
        Inputmask.isValid = function(value, options) {
            return Inputmask(options).isValid(value)
        }
        ,
        Inputmask.remove = function(elems) {
            "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)),
            elems = elems.nodeName ? [elems] : elems,
            $.each(elems, function(ndx, el) {
                el.inputmask && el.inputmask.remove()
            })
        }
        ,
        Inputmask.setValue = function(elems, value) {
            "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)),
            elems = elems.nodeName ? [elems] : elems,
            $.each(elems, function(ndx, el) {
                el.inputmask ? el.inputmask.setValue(value) : $(el).trigger("setvalue", [value])
            })
        }
        ;
        var escapeRegexRegex = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")","gim");
        Inputmask.escapeRegex = function(str) {
            return str.replace(escapeRegexRegex, "\\$1")
        }
        ,
        Inputmask.dependencyLib = $,
        window.Inputmask = Inputmask,
        module.exports = Inputmask
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var jquery = __webpack_require__(3);
        if (void 0 === jquery)
            throw "jQuery not loaded!";
        module.exports = jquery
    }
    , function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__3__
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var __WEBPACK_AMD_DEFINE_RESULT__;
        function _typeof(obj) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj
            }
            : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            }
            ,
            _typeof(obj)
        }
        __WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return "undefined" != typeof window ? window : new (eval("require('jsdom').JSDOM"))("").window
        }
        .call(exports, __webpack_require__, exports, module),
        void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var $ = __webpack_require__(2);
        function generateMaskSet(opts, nocache) {
            var ms;
            function generateMask(mask, metadata, opts) {
                var regexMask = !1, masksetDefinition, maskdefKey;
                if (null !== mask && "" !== mask || (regexMask = null !== opts.regex,
                mask = regexMask ? (mask = opts.regex,
                mask.replace(/^(\^)(.*)(\$)$/, "$2")) : (regexMask = !0,
                ".*")),
                1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = ""),
                0 < opts.repeat || "*" === opts.repeat || "+" === opts.repeat) {
                    var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;
                    mask = opts.groupmarker[0] + mask + opts.groupmarker[1] + opts.quantifiermarker[0] + repeatStart + "," + opts.repeat + opts.quantifiermarker[1]
                }
                return maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask,
                !1 !== opts.keepStatic && (maskdefKey = "ks_" + maskdefKey),
                void 0 === Inputmask.prototype.masksCache[maskdefKey] || !0 === nocache ? (masksetDefinition = {
                    mask: mask,
                    maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
                    validPositions: {},
                    _buffer: void 0,
                    buffer: void 0,
                    tests: {},
                    excludes: {},
                    metadata: metadata,
                    maskLength: void 0,
                    jitOffset: {}
                },
                !0 !== nocache && (Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition,
                masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))) : masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]),
                masksetDefinition
            }
            if ($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)),
            $.isArray(opts.mask)) {
                if (1 < opts.mask.length) {
                    if (null === opts.keepStatic) {
                        opts.keepStatic = "auto";
                        for (var i = 0; i < opts.mask.length; i++)
                            if (opts.mask[i].charAt(0) !== opts.mask[0].charAt(0)) {
                                opts.keepStatic = !0;
                                break
                            }
                    }
                    var altMask = opts.groupmarker[0];
                    return $.each(opts.isRTL ? opts.mask.reverse() : opts.mask, function(ndx, msk) {
                        1 < altMask.length && (altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]),
                        void 0 === msk.mask || $.isFunction(msk.mask) ? altMask += msk : altMask += msk.mask
                    }),
                    altMask += opts.groupmarker[1],
                    generateMask(altMask, opts.mask, opts)
                }
                opts.mask = opts.mask.pop()
            }
            return null === opts.keepStatic && (opts.keepStatic = !1),
            ms = opts.mask && void 0 !== opts.mask.mask && !$.isFunction(opts.mask.mask) ? generateMask(opts.mask.mask, opts.mask, opts) : generateMask(opts.mask, opts.mask, opts),
            ms
        }
        function analyseMask(mask, regexMask, opts) {
            var tokenizer = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, escaped = !1, currentToken = new MaskToken, match, m, openenings = [], maskTokens = [], openingToken, currentOpeningToken, alternator, lastMatch, closeRegexGroup = !1;
            function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                this.matches = [],
                this.openGroup = isGroup || !1,
                this.alternatorGroup = !1,
                this.isGroup = isGroup || !1,
                this.isOptional = isOptional || !1,
                this.isQuantifier = isQuantifier || !1,
                this.isAlternator = isAlternator || !1,
                this.quantifier = {
                    min: 1,
                    max: 1
                }
            }
            function insertTestDefinition(mtoken, element, position) {
                position = void 0 !== position ? position : mtoken.matches.length;
                var prevMatch = mtoken.matches[position - 1];
                if (regexMask)
                    0 === element.indexOf("[") || escaped && /\\d|\\s|\\w]/i.test(element) || "." === element ? mtoken.matches.splice(position++, 0, {
                        fn: new RegExp(element,opts.casing ? "i" : ""),
                        static: !1,
                        optionality: !1,
                        newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== element,
                        casing: null,
                        def: element,
                        placeholder: void 0,
                        nativeDef: element
                    }) : (escaped && (element = element[element.length - 1]),
                    $.each(element.split(""), function(ndx, lmnt) {
                        prevMatch = mtoken.matches[position - 1],
                        mtoken.matches.splice(position++, 0, {
                            fn: /[a-z]/i.test(opts.staticDefinitionSymbol || lmnt) ? new RegExp("[" + (opts.staticDefinitionSymbol || lmnt) + "]",opts.casing ? "i" : "") : null,
                            static: !0,
                            optionality: !1,
                            newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== lmnt && !0 !== prevMatch.static,
                            casing: null,
                            def: opts.staticDefinitionSymbol || lmnt,
                            placeholder: void 0 !== opts.staticDefinitionSymbol ? lmnt : void 0,
                            nativeDef: (escaped ? "'" : "") + lmnt
                        })
                    })),
                    escaped = !1;
                else {
                    var maskdef = (opts.definitions ? opts.definitions[element] : void 0) || Inputmask.prototype.definitions[element];
                    maskdef && !escaped ? mtoken.matches.splice(position++, 0, {
                        fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator,opts.casing ? "i" : "") : new function() {
                            this.test = maskdef.validator
                        }
                        : new RegExp("."),
                        static: !1,
                        optionality: !1,
                        newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
                        casing: maskdef.casing,
                        def: maskdef.definitionSymbol || element,
                        placeholder: maskdef.placeholder,
                        nativeDef: element
                    }) : (mtoken.matches.splice(position++, 0, {
                        fn: /[a-z]/i.test(opts.staticDefinitionSymbol || element) ? new RegExp("[" + (opts.staticDefinitionSymbol || element) + "]",opts.casing ? "i" : "") : null,
                        static: !0,
                        optionality: !1,
                        newBlockMarker: void 0 === prevMatch ? "master" : prevMatch.def !== element && !0 !== prevMatch.static,
                        casing: null,
                        def: opts.staticDefinitionSymbol || element,
                        placeholder: void 0 !== opts.staticDefinitionSymbol ? element : void 0,
                        nativeDef: (escaped ? "'" : "") + element
                    }),
                    escaped = !1)
                }
            }
            function verifyGroupMarker(maskToken) {
                maskToken && maskToken.matches && $.each(maskToken.matches, function(ndx, token) {
                    var nextToken = maskToken.matches[ndx + 1];
                    (void 0 === nextToken || void 0 === nextToken.matches || !1 === nextToken.isQuantifier) && token && token.isGroup && (token.isGroup = !1,
                    regexMask || (insertTestDefinition(token, opts.groupmarker[0], 0),
                    !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker[1]))),
                    verifyGroupMarker(token)
                })
            }
            function defaultCase() {
                if (0 < openenings.length) {
                    if (currentOpeningToken = openenings[openenings.length - 1],
                    insertTestDefinition(currentOpeningToken, m),
                    currentOpeningToken.isAlternator) {
                        alternator = openenings.pop();
                        for (var mndx = 0; mndx < alternator.matches.length; mndx++)
                            alternator.matches[mndx].isGroup && (alternator.matches[mndx].isGroup = !1);
                        0 < openenings.length ? (currentOpeningToken = openenings[openenings.length - 1],
                        currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator)
                    }
                } else
                    insertTestDefinition(currentToken, m)
            }
            function reverseTokens(maskToken) {
                function reverseStatic(st) {
                    return st === opts.optionalmarker[0] ? st = opts.optionalmarker[1] : st === opts.optionalmarker[1] ? st = opts.optionalmarker[0] : st === opts.groupmarker[0] ? st = opts.groupmarker[1] : st === opts.groupmarker[1] && (st = opts.groupmarker[0]),
                    st
                }
                for (var match in maskToken.matches = maskToken.matches.reverse(),
                maskToken.matches)
                    if (Object.prototype.hasOwnProperty.call(maskToken.matches, match)) {
                        var intMatch = parseInt(match);
                        if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                            var qt = maskToken.matches[match];
                            maskToken.matches.splice(match, 1),
                            maskToken.matches.splice(intMatch + 1, 0, qt)
                        }
                        void 0 !== maskToken.matches[match].matches ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = reverseStatic(maskToken.matches[match])
                    }
                return maskToken
            }
            function groupify(matches) {
                var groupToken = new MaskToken(!0);
                return groupToken.openGroup = !1,
                groupToken.matches = matches,
                groupToken
            }
            function closeGroup() {
                if (openingToken = openenings.pop(),
                openingToken.openGroup = !1,
                void 0 !== openingToken)
                    if (0 < openenings.length) {
                        if (currentOpeningToken = openenings[openenings.length - 1],
                        currentOpeningToken.matches.push(openingToken),
                        currentOpeningToken.isAlternator) {
                            alternator = openenings.pop();
                            for (var mndx = 0; mndx < alternator.matches.length; mndx++)
                                alternator.matches[mndx].isGroup = !1,
                                alternator.matches[mndx].alternatorGroup = !1;
                            0 < openenings.length ? (currentOpeningToken = openenings[openenings.length - 1],
                            currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator)
                        }
                    } else
                        currentToken.matches.push(openingToken);
                else
                    defaultCase()
            }
            function groupQuantifier(matches) {
                var lastMatch = matches.pop();
                return lastMatch.isQuantifier && (lastMatch = groupify([matches.pop(), lastMatch])),
                lastMatch
            }
            for (regexMask && (opts.optionalmarker[0] = void 0,
            opts.optionalmarker[1] = void 0); match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask); ) {
                if (m = match[0],
                regexMask)
                    switch (m.charAt(0)) {
                    case "?":
                        m = "{0,1}";
                        break;
                    case "+":
                    case "*":
                        m = "{" + m + "}";
                        break;
                    case "|":
                        if (0 === openenings.length) {
                            var altRegexGroup = groupify(currentToken.matches);
                            altRegexGroup.openGroup = !0,
                            openenings.push(altRegexGroup),
                            currentToken.matches = [],
                            closeRegexGroup = !0
                        }
                        break
                    }
                if (escaped)
                    defaultCase();
                else
                    switch (m.charAt(0)) {
                    case "(?=":
                        break;
                    case "(?!":
                        break;
                    case "(?<=":
                        break;
                    case "(?<!":
                        break;
                    case opts.escapeChar:
                        escaped = !0,
                        regexMask && defaultCase();
                        break;
                    case opts.optionalmarker[1]:
                    case opts.groupmarker[1]:
                        closeGroup();
                        break;
                    case opts.optionalmarker[0]:
                        openenings.push(new MaskToken(!1,!0));
                        break;
                    case opts.groupmarker[0]:
                        openenings.push(new MaskToken(!0));
                        break;
                    case opts.quantifiermarker[0]:
                        var quantifier = new MaskToken(!1,!1,!0);
                        m = m.replace(/[{}]/g, "");
                        var mqj = m.split("|")
                          , mq = mqj[0].split(",")
                          , mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0])
                          , mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                        "*" !== mq0 && "+" !== mq0 || (mq0 = "*" === mq1 ? 0 : 1),
                        quantifier.quantifier = {
                            min: mq0,
                            max: mq1,
                            jit: mqj[1]
                        };
                        var matches = 0 < openenings.length ? openenings[openenings.length - 1].matches : currentToken.matches;
                        if (match = matches.pop(),
                        match.isAlternator) {
                            matches.push(match),
                            matches = match.matches;
                            var groupToken = new MaskToken(!0)
                              , tmpMatch = matches.pop();
                            matches.push(groupToken),
                            matches = groupToken.matches,
                            match = tmpMatch
                        }
                        match.isGroup || (match = groupify([match])),
                        matches.push(match),
                        matches.push(quantifier);
                        break;
                    case opts.alternatormarker:
                        if (0 < openenings.length) {
                            currentOpeningToken = openenings[openenings.length - 1];
                            var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
                            lastMatch = currentOpeningToken.openGroup && (void 0 === subToken.matches || !1 === subToken.isGroup && !1 === subToken.isAlternator) ? openenings.pop() : groupQuantifier(currentOpeningToken.matches)
                        } else
                            lastMatch = groupQuantifier(currentToken.matches);
                        if (lastMatch.isAlternator)
                            openenings.push(lastMatch);
                        else if (lastMatch.alternatorGroup ? (alternator = openenings.pop(),
                        lastMatch.alternatorGroup = !1) : alternator = new MaskToken(!1,!1,!1,!0),
                        alternator.matches.push(lastMatch),
                        openenings.push(alternator),
                        lastMatch.openGroup) {
                            lastMatch.openGroup = !1;
                            var alternatorGroup = new MaskToken(!0);
                            alternatorGroup.alternatorGroup = !0,
                            openenings.push(alternatorGroup)
                        }
                        break;
                    default:
                        defaultCase()
                    }
            }
            for (closeRegexGroup && closeGroup(); 0 < openenings.length; )
                openingToken = openenings.pop(),
                currentToken.matches.push(openingToken);
            return 0 < currentToken.matches.length && (verifyGroupMarker(currentToken),
            maskTokens.push(currentToken)),
            (opts.numericInput || opts.isRTL) && reverseTokens(maskTokens[0]),
            maskTokens
        }
        module.exports = {
            generateMaskSet: generateMaskSet,
            analyseMask: analyseMask
        }
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        __webpack_require__(7),
        __webpack_require__(9),
        __webpack_require__(10),
        module.exports = __webpack_require__(1)
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var Inputmask = __webpack_require__(1);
        Inputmask.extendDefinitions({
            A: {
                validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                casing: "upper"
            },
            "&": {
                validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                casing: "upper"
            },
            "#": {
                validator: "[0-9A-Fa-f]",
                casing: "upper"
            }
        });
        var ipValidatorRegex = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
        function ipValidator(chrs, maskset, pos, strict, opts) {
            return chrs = -1 < pos - 1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs,
            -1 < pos - 2 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : "00" + chrs,
            ipValidatorRegex.test(chrs)
        }
        Inputmask.extendAliases({
            cssunit: {
                regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
            },
            url: {
                regex: "(https?|ftp)//.*",
                autoUnmask: !1
            },
            ip: {
                mask: "i[i[i]].j[j[j]].k[k[k]].l[l[l]]",
                definitions: {
                    i: {
                        validator: ipValidator
                    },
                    j: {
                        validator: ipValidator
                    },
                    k: {
                        validator: ipValidator
                    },
                    l: {
                        validator: ipValidator
                    }
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    return maskedValue
                },
                inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: !1,
                casing: "lower",
                onBeforePaste: function onBeforePaste(pastedValue, opts) {
                    return pastedValue = pastedValue.toLowerCase(),
                    pastedValue.replace("mailto:", "")
                },
                definitions: {
                    "*": {
                        validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                    },
                    "-": {
                        validator: "[0-9A-Za-z-]"
                    }
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    return maskedValue
                },
                inputmode: "email"
            },
            mac: {
                mask: "##:##:##:##:##:##"
            },
            vin: {
                mask: "V{13}9{4}",
                definitions: {
                    V: {
                        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                        casing: "upper"
                    }
                },
                clearIncomplete: !0,
                autoUnmask: !0
            }
        }),
        module.exports = Inputmask
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        function _typeof(obj) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj
            }
            : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            }
            ,
            _typeof(obj)
        }
        var $ = __webpack_require__(2)
          , window = __webpack_require__(4)
          , document = window.document
          , ua = window.navigator && window.navigator.userAgent || ""
          , ie = 0 < ua.indexOf("MSIE ") || 0 < ua.indexOf("Trident/")
          , mobile = "ontouchstart"in window
          , iemobile = /iemobile/i.test(ua)
          , iphone = /iphone/i.test(ua) && !iemobile
          , keyCode = __webpack_require__(0);
        module.exports = function maskScope(actionObj, maskset, opts) {
            maskset = maskset || this.maskset,
            opts = opts || this.opts;
            var inputmask = this, el = this.el, isRTL = this.isRTL || (this.isRTL = opts.numericInput), undoValue, $el, skipKeyPressEvent = !1, skipInputEvent = !1, validationEvent = !1, ignorable = !1, maxLength, mouseEnter = !1, originalPlaceholder = void 0;
            function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
                var greedy = opts.greedy;
                clearOptionalTail && (opts.greedy = !1),
                minimalPos = minimalPos || 0;
                var maskTemplate = [], ndxIntlzr, pos = 0, test, testPos;
                do {
                    if (!0 === baseOnInput && maskset.validPositions[pos])
                        testPos = clearOptionalTail && !0 === maskset.validPositions[pos].match.optionality && void 0 === maskset.validPositions[pos + 1] && (!0 === maskset.validPositions[pos].generatedInput || maskset.validPositions[pos].input == opts.skipOptionalPartCharacter && 0 < pos) ? determineTestTemplate(pos, getTests(pos, ndxIntlzr, pos - 1)) : maskset.validPositions[pos],
                        test = testPos.match,
                        ndxIntlzr = testPos.locator.slice(),
                        maskTemplate.push(!0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder(pos, test));
                    else {
                        testPos = getTestTemplate(pos, ndxIntlzr, pos - 1),
                        test = testPos.match,
                        ndxIntlzr = testPos.locator.slice();
                        var jitMasking = !0 !== noJit && (!1 !== opts.jitMasking ? opts.jitMasking : test.jit);
                        (!1 === jitMasking || void 0 === jitMasking || "number" == typeof jitMasking && isFinite(jitMasking) && pos < jitMasking) && maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder(pos, test))
                    }
                    "auto" === opts.keepStatic && test.newBlockMarker && !0 !== test.static && (opts.keepStatic = pos - 1),
                    pos++
                } while ((void 0 === maxLength || pos < maxLength) && (!0 !== test.static || "" !== test.def) || pos < minimalPos);
                return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(),
                !1 === includeMode && void 0 !== maskset.maskLength || (maskset.maskLength = pos - 1),
                opts.greedy = greedy,
                maskTemplate
            }
            function resetMaskSet(soft) {
                maskset.buffer = void 0,
                !0 !== soft && (maskset.validPositions = {},
                maskset.p = 0)
            }
            function getLastValidPosition(closestTo, strict, validPositions) {
                var before = -1
                  , after = -1
                  , valids = validPositions || maskset.validPositions;
                for (var posNdx in void 0 === closestTo && (closestTo = -1),
                valids) {
                    var psNdx = parseInt(posNdx);
                    valids[psNdx] && (strict || !0 !== valids[psNdx].generatedInput) && (psNdx <= closestTo && (before = psNdx),
                    closestTo <= psNdx && (after = psNdx))
                }
                return -1 === before || before == closestTo ? after : -1 == after ? before : closestTo - before < after - closestTo ? before : after
            }
            function getDecisionTaker(tst) {
                var decisionTaker = tst.locator[tst.alternation];
                return "string" == typeof decisionTaker && 0 < decisionTaker.length && (decisionTaker = decisionTaker.split(",")[0]),
                void 0 !== decisionTaker ? decisionTaker.toString() : ""
            }
            function getLocator(tst, align) {
                var locator = (null != tst.alternation ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
                if ("" !== locator)
                    for (; locator.length < align; )
                        locator += "0";
                return locator
            }
            function determineTestTemplate(pos, tests) {
                pos = 0 < pos ? pos - 1 : 0;
                for (var altTest = getTest(pos), targetLocator = getLocator(altTest), tstLocator, closest, bestMatch, ndx = 0; ndx < tests.length; ndx++) {
                    var tst = tests[ndx];
                    tstLocator = getLocator(tst, targetLocator.length);
                    var distance = Math.abs(tstLocator - targetLocator);
                    (void 0 === closest || "" !== tstLocator && distance < closest || bestMatch && !opts.greedy && bestMatch.match.optionality && "master" === bestMatch.match.newBlockMarker && (!tst.match.optionality || !tst.match.newBlockMarker) || bestMatch && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) && (closest = distance,
                    bestMatch = tst)
                }
                return bestMatch
            }
            function getTestTemplate(pos, ndxIntlzr, tstPs) {
                return maskset.validPositions[pos] || determineTestTemplate(pos, getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs))
            }
            function getTest(pos, tests) {
                return maskset.validPositions[pos] ? maskset.validPositions[pos] : (tests || getTests(pos))[0]
            }
            function positionCanMatchDefinition(pos, testDefinition, opts) {
                for (var valid = !1, tests = getTests(pos), defProp = opts.shiftPositions ? "def" : "nativeDef", tndx = 0; tndx < tests.length; tndx++)
                    if (tests[tndx].match && tests[tndx].match[defProp] === testDefinition.match[defProp]) {
                        valid = !0;
                        break
                    }
                return !1 === valid && void 0 !== maskset.jitOffset[pos] && (valid = positionCanMatchDefinition(pos + maskset.jitOffset[pos], testDefinition, opts)),
                valid
            }
            function getTests(pos, ndxIntlzr, tstPs) {
                var maskTokens = maskset.maskToken, testPos = ndxIntlzr ? tstPs : 0, ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0], matches = [], insertStop = !1, latestMatch, cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";
                function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
                    function handleMatch(match, loopNdx, quantifierRecurse) {
                        function isFirstMatch(latestMatch, tokenGroup) {
                            var firstMatch = 0 === $.inArray(latestMatch, tokenGroup.matches);
                            return firstMatch || $.each(tokenGroup.matches, function(ndx, match) {
                                if (!0 === match.isQuantifier ? firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]) : Object.prototype.hasOwnProperty.call(match, "matches") && (firstMatch = isFirstMatch(latestMatch, match)),
                                firstMatch)
                                    return !1
                            }),
                            firstMatch
                        }
                        function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                            var bestMatch, indexPos;
                            if ((maskset.tests[pos] || maskset.validPositions[pos]) && $.each(maskset.tests[pos] || [maskset.validPositions[pos]], function(ndx, lmnt) {
                                if (lmnt.mloc[alternateNdx])
                                    return bestMatch = lmnt,
                                    !1;
                                var alternation = void 0 !== targetAlternation ? targetAlternation : lmnt.alternation
                                  , ndxPos = void 0 !== lmnt.locator[alternation] ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                                (void 0 === indexPos || ndxPos < indexPos) && -1 !== ndxPos && (bestMatch = lmnt,
                                indexPos = ndxPos)
                            }),
                            bestMatch) {
                                var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation]
                                  , locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
                                return locator.slice((void 0 !== targetAlternation ? targetAlternation : bestMatch.alternation) + 1)
                            }
                            return void 0 !== targetAlternation ? resolveNdxInitializer(pos, alternateNdx) : void 0
                        }
                        function isSubsetOf(source, target) {
                            function expand(pattern) {
                                for (var expanded = [], start = -1, end, i = 0, l = pattern.length; i < l; i++)
                                    if ("-" === pattern.charAt(i))
                                        for (end = pattern.charCodeAt(i + 1); ++start < end; )
                                            expanded.push(String.fromCharCode(start));
                                    else
                                        start = pattern.charCodeAt(i),
                                        expanded.push(pattern.charAt(i));
                                return expanded.join("")
                            }
                            return source.match.def === target.match.nativeDef || !(!(opts.regex || source.match.fn instanceof RegExp && target.match.fn instanceof RegExp) || !0 === source.match.static || !0 === target.match.static) && -1 !== expand(target.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(expand(source.match.fn.toString().replace(/[[\]/]/g, "")))
                        }
                        function staticCanMatchDefinition(source, target) {
                            return !0 === source.match.static && !0 !== target.match.static && target.match.fn.test(source.match.def, maskset, pos, !1, opts, !1)
                        }
                        function setMergeLocators(targetMatch, altMatch) {
                            if (void 0 === altMatch || targetMatch.alternation === altMatch.alternation && -1 === targetMatch.locator[targetMatch.alternation].toString().indexOf(altMatch.locator[altMatch.alternation])) {
                                targetMatch.mloc = targetMatch.mloc || {};
                                var locNdx = targetMatch.locator[targetMatch.alternation];
                                if (void 0 !== locNdx) {
                                    if ("string" == typeof locNdx && (locNdx = locNdx.split(",")[0]),
                                    void 0 === targetMatch.mloc[locNdx] && (targetMatch.mloc[locNdx] = targetMatch.locator.slice()),
                                    void 0 !== altMatch) {
                                        for (var ndx in altMatch.mloc)
                                            "string" == typeof ndx && (ndx = ndx.split(",")[0]),
                                            void 0 === targetMatch.mloc[ndx] && (targetMatch.mloc[ndx] = altMatch.mloc[ndx]);
                                        targetMatch.locator[targetMatch.alternation] = Object.keys(targetMatch.mloc).join(",")
                                    }
                                    return !0
                                }
                                targetMatch.alternation = void 0
                            }
                            return !1
                        }
                        if (500 < testPos && void 0 !== quantifierRecurse)
                            throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + maskset.mask;
                        if (testPos === pos && void 0 === match.matches)
                            return matches.push({
                                match: match,
                                locator: loopNdx.reverse(),
                                cd: cacheDependency,
                                mloc: {}
                            }),
                            !0;
                        if (void 0 !== match.matches) {
                            if (match.isGroup && quantifierRecurse !== match) {
                                if (match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx, quantifierRecurse),
                                match)
                                    return !0
                            } else if (match.isOptional) {
                                var optionalToken = match
                                  , mtchsNdx = matches.length;
                                if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse),
                                match) {
                                    if ($.each(matches, function(ndx, mtch) {
                                        mtchsNdx <= ndx && (mtch.match.optionality = !0)
                                    }),
                                    latestMatch = matches[matches.length - 1].match,
                                    void 0 !== quantifierRecurse || !isFirstMatch(latestMatch, optionalToken))
                                        return !0;
                                    insertStop = !0,
                                    testPos = pos
                                }
                            } else if (match.isAlternator) {
                                var alternateToken = match, malternateMatches = [], maltMatches, currentMatches = matches.slice(), loopNdxCnt = loopNdx.length, altIndex = 0 < ndxInitializer.length ? ndxInitializer.shift() : -1;
                                if (-1 === altIndex || "string" == typeof altIndex) {
                                    var currentPos = testPos, ndxInitializerClone = ndxInitializer.slice(), altIndexArr = [], amndx;
                                    if ("string" == typeof altIndex)
                                        altIndexArr = altIndex.split(",");
                                    else
                                        for (amndx = 0; amndx < alternateToken.matches.length; amndx++)
                                            altIndexArr.push(amndx.toString());
                                    if (void 0 !== maskset.excludes[pos]) {
                                        for (var altIndexArrClone = altIndexArr.slice(), i = 0, el = maskset.excludes[pos].length; i < el; i++)
                                            altIndexArr.splice(altIndexArr.indexOf(maskset.excludes[pos][i].toString()), 1);
                                        0 === altIndexArr.length && (delete maskset.excludes[pos],
                                        altIndexArr = altIndexArrClone)
                                    }
                                    (!0 === opts.keepStatic || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) && (altIndexArr = altIndexArr.slice(0, 1));
                                    for (var unMatchedAlternation = !1, ndx = 0; ndx < altIndexArr.length; ndx++) {
                                        amndx = parseInt(altIndexArr[ndx]),
                                        matches = [],
                                        ndxInitializer = "string" == typeof altIndex && resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(),
                                        alternateToken.matches[amndx] && handleMatch(alternateToken.matches[amndx], [amndx].concat(loopNdx), quantifierRecurse) ? match = !0 : 0 === ndx && (unMatchedAlternation = !0),
                                        maltMatches = matches.slice(),
                                        testPos = currentPos,
                                        matches = [];
                                        for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                            var altMatch = maltMatches[ndx1]
                                              , dropMatch = !1;
                                            altMatch.match.jit = altMatch.match.jit || unMatchedAlternation,
                                            altMatch.alternation = altMatch.alternation || loopNdxCnt,
                                            setMergeLocators(altMatch);
                                            for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                                var altMatch2 = malternateMatches[ndx2];
                                                if ("string" != typeof altIndex || void 0 !== altMatch.alternation && -1 !== $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr)) {
                                                    if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                                                        dropMatch = !0,
                                                        setMergeLocators(altMatch2, altMatch);
                                                        break
                                                    }
                                                    if (isSubsetOf(altMatch, altMatch2)) {
                                                        setMergeLocators(altMatch, altMatch2) && (dropMatch = !0,
                                                        malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                                                        break
                                                    }
                                                    if (isSubsetOf(altMatch2, altMatch)) {
                                                        setMergeLocators(altMatch2, altMatch);
                                                        break
                                                    }
                                                    if (staticCanMatchDefinition(altMatch, altMatch2)) {
                                                        setMergeLocators(altMatch, altMatch2) && (dropMatch = !0,
                                                        malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                                                        break
                                                    }
                                                }
                                            }
                                            dropMatch || malternateMatches.push(altMatch)
                                        }
                                    }
                                    matches = currentMatches.concat(malternateMatches),
                                    testPos = pos,
                                    insertStop = 0 < matches.length,
                                    match = 0 < malternateMatches.length,
                                    ndxInitializer = ndxInitializerClone.slice()
                                } else
                                    match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);
                                if (match)
                                    return !0
                            } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1])
                                for (var qt = match, qndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                                    var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                                    if (match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup),
                                    match) {
                                        if (latestMatch = matches[matches.length - 1].match,
                                        latestMatch.optionalQuantifier = qndx >= qt.quantifier.min,
                                        latestMatch.jit = (qndx || 1) * tokenGroup.matches.indexOf(latestMatch) >= qt.quantifier.jit,
                                        latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
                                            insertStop = !0,
                                            testPos = pos;
                                            break
                                        }
                                        return latestMatch.jit && (maskset.jitOffset[pos] = tokenGroup.matches.length - tokenGroup.matches.indexOf(latestMatch)),
                                        !0
                                    }
                                }
                            else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse),
                            match)
                                return !0
                        } else
                            testPos++
                    }
                    for (var tndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++)
                        if (!0 !== maskToken.matches[tndx].isQuantifier) {
                            var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
                            if (match && testPos === pos)
                                return match;
                            if (pos < testPos)
                                break
                        }
                }
                function mergeLocators(pos, tests) {
                    var locator = [];
                    return $.isArray(tests) || (tests = [tests]),
                    0 < tests.length && (void 0 === tests[0].alternation || !0 === opts.keepStatic ? (locator = determineTestTemplate(pos, tests.slice()).locator.slice(),
                    0 === locator.length && (locator = tests[0].locator.slice())) : $.each(tests, function(ndx, tst) {
                        if ("" !== tst.def)
                            if (0 === locator.length)
                                locator = tst.locator.slice();
                            else
                                for (var i = 0; i < locator.length; i++)
                                    tst.locator[i] && -1 === locator[i].toString().indexOf(tst.locator[i]) && (locator[i] += "," + tst.locator[i])
                    })),
                    locator
                }
                if (-1 < pos && (void 0 === maxLength || pos < maxLength)) {
                    if (void 0 === ndxIntlzr) {
                        for (var previousPos = pos - 1, test; void 0 === (test = maskset.validPositions[previousPos] || maskset.tests[previousPos]) && -1 < previousPos; )
                            previousPos--;
                        void 0 !== test && -1 < previousPos && (ndxInitializer = mergeLocators(previousPos, test),
                        cacheDependency = ndxInitializer.join(""),
                        testPos = previousPos)
                    }
                    if (maskset.tests[pos] && maskset.tests[pos][0].cd === cacheDependency)
                        return maskset.tests[pos];
                    for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                        var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
                        if (match && testPos === pos || pos < testPos)
                            break
                    }
                }
                return 0 !== matches.length && !insertStop || matches.push({
                    match: {
                        fn: null,
                        static: !0,
                        optionality: !1,
                        casing: null,
                        def: "",
                        placeholder: ""
                    },
                    locator: [],
                    mloc: {},
                    cd: cacheDependency
                }),
                void 0 !== ndxIntlzr && maskset.tests[pos] ? $.extend(!0, [], matches) : (maskset.tests[pos] = $.extend(!0, [], matches),
                maskset.tests[pos])
            }
            function getBufferTemplate() {
                return void 0 === maskset._buffer && (maskset._buffer = getMaskTemplate(!1, 1),
                void 0 === maskset.buffer && (maskset.buffer = maskset._buffer.slice())),
                maskset._buffer
            }
            function getBuffer(noCache) {
                return void 0 !== maskset.buffer && !0 !== noCache || (maskset.buffer = getMaskTemplate(!0, getLastValidPosition(), !0),
                void 0 === maskset._buffer && (maskset._buffer = maskset.buffer.slice())),
                maskset.buffer
            }
            function refreshFromBuffer(start, end, buffer) {
                var i, p, skipOptionalPartCharacter = opts.skipOptionalPartCharacter;
                if (opts.skipOptionalPartCharacter = "",
                !0 === start)
                    resetMaskSet(),
                    maskset.tests = {},
                    start = 0,
                    end = buffer.length;
                else
                    for (i = start; i < end; i++)
                        delete maskset.validPositions[i];
                for (p = start,
                i = start; i < end; i++) {
                    var valResult = isValid(p, buffer[i], !0, !0);
                    !1 !== valResult && (p = void 0 !== valResult.caret && valResult.caret > valResult.pos ? valResult.caret : valResult.pos + 1)
                }
                opts.skipOptionalPartCharacter = skipOptionalPartCharacter
            }
            function casing(elem, test, pos) {
                switch (opts.casing || test.casing) {
                case "upper":
                    elem = elem.toUpperCase();
                    break;
                case "lower":
                    elem = elem.toLowerCase();
                    break;
                case "title":
                    var posBefore = maskset.validPositions[pos - 1];
                    elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(keyCode.SPACE) ? elem.toUpperCase() : elem.toLowerCase();
                    break;
                default:
                    if ($.isFunction(opts.casing)) {
                        var args = Array.prototype.slice.call(arguments);
                        args.push(maskset.validPositions),
                        elem = opts.casing.apply(this, args)
                    }
                }
                return elem
            }
            function checkAlternationMatch(altArr1, altArr2, na) {
                for (var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = void 0 !== na ? na.split(",") : [], naNdx, i = 0; i < naArr.length; i++)
                    -1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);
                for (var alndx = 0; alndx < altArr1.length; alndx++)
                    if (-1 !== $.inArray(altArr1[alndx], altArrC)) {
                        isMatch = !0;
                        break
                    }
                return isMatch
            }
            function alternate(maskPos, c, strict, fromIsValid, rAltPos, selection) {
                var validPsClone = $.extend(!0, {}, maskset.validPositions), tstClone = $.extend(!0, {}, maskset.tests), lastAlt, alternation, isValidRslt = !1, returnRslt = !1, altPos, prevAltPos, i, validPos, decisionPos, lAltPos = void 0 !== rAltPos ? rAltPos : getLastValidPosition(), nextPos, input, begin, end;
                if (selection && (begin = selection.begin,
                end = selection.end,
                selection.begin > selection.end && (begin = selection.end,
                end = selection.begin)),
                -1 === lAltPos && void 0 === rAltPos)
                    lastAlt = 0,
                    prevAltPos = getTest(lastAlt),
                    alternation = prevAltPos.alternation;
                else
                    for (; 0 <= lAltPos; lAltPos--)
                        if (altPos = maskset.validPositions[lAltPos],
                        altPos && void 0 !== altPos.alternation) {
                            if (prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation])
                                break;
                            lastAlt = lAltPos,
                            alternation = maskset.validPositions[lastAlt].alternation,
                            prevAltPos = altPos
                        }
                if (void 0 !== alternation) {
                    decisionPos = parseInt(lastAlt),
                    maskset.excludes[decisionPos] = maskset.excludes[decisionPos] || [],
                    !0 !== maskPos && maskset.excludes[decisionPos].push(getDecisionTaker(prevAltPos));
                    var validInputs = []
                      , resultPos = -1;
                    for (i = decisionPos; i < getLastValidPosition(void 0, !0) + 1; i++)
                        -1 === resultPos && maskPos <= i && void 0 !== c && (validInputs.push(c),
                        resultPos = validInputs.length - 1),
                        validPos = maskset.validPositions[i],
                        validPos && !0 !== validPos.generatedInput && (void 0 === selection || i < begin || end <= i) && validInputs.push(validPos.input),
                        delete maskset.validPositions[i];
                    for (-1 === resultPos && void 0 !== c && (validInputs.push(c),
                    resultPos = validInputs.length - 1); void 0 !== maskset.excludes[decisionPos] && maskset.excludes[decisionPos].length < 10; ) {
                        for (maskset.tests[decisionPos] = void 0,
                        resetMaskSet(!0),
                        isValidRslt = !0,
                        i = 0; i < validInputs.length && (nextPos = isValidRslt.caret || getLastValidPosition(void 0, !0) + 1,
                        input = validInputs[i],
                        isValidRslt = isValid(nextPos, input, !1, fromIsValid, !0)); i++)
                            i === resultPos && (returnRslt = isValidRslt),
                            1 == maskPos && isValidRslt && (returnRslt = {
                                caretPos: i
                            });
                        if (isValidRslt)
                            break;
                        if (resetMaskSet(),
                        prevAltPos = getTest(decisionPos),
                        maskset.validPositions = $.extend(!0, {}, validPsClone),
                        maskset.tests = $.extend(!0, {}, tstClone),
                        !maskset.excludes[decisionPos]) {
                            returnRslt = alternate(maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                            break
                        }
                        var decisionTaker = getDecisionTaker(prevAltPos);
                        if (-1 !== maskset.excludes[decisionPos].indexOf(decisionTaker)) {
                            returnRslt = alternate(maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                            break
                        }
                        for (maskset.excludes[decisionPos].push(decisionTaker),
                        i = decisionPos; i < getLastValidPosition(void 0, !0) + 1; i++)
                            delete maskset.validPositions[i]
                    }
                }
                return returnRslt && !1 === opts.keepStatic || delete maskset.excludes[decisionPos],
                returnRslt
            }
            function isValid(pos, c, strict, fromIsValid, fromAlternate, validateOnly) {
                function isSelection(posObj) {
                    return isRTL ? 1 < posObj.begin - posObj.end || posObj.begin - posObj.end == 1 : 1 < posObj.end - posObj.begin || posObj.end - posObj.begin == 1
                }
                strict = !0 === strict;
                var maskPos = pos;
                function processCommandObject(commandObj) {
                    if (void 0 !== commandObj) {
                        if (void 0 !== commandObj.remove && ($.isArray(commandObj.remove) || (commandObj.remove = [commandObj.remove]),
                        $.each(commandObj.remove.sort(function(a, b) {
                            return b.pos - a.pos
                        }), function(ndx, lmnt) {
                            revalidateMask({
                                begin: lmnt,
                                end: lmnt + 1
                            })
                        }),
                        commandObj.remove = void 0),
                        void 0 !== commandObj.insert && ($.isArray(commandObj.insert) || (commandObj.insert = [commandObj.insert]),
                        $.each(commandObj.insert.sort(function(a, b) {
                            return a.pos - b.pos
                        }), function(ndx, lmnt) {
                            "" !== lmnt.c && isValid(lmnt.pos, lmnt.c, void 0 === lmnt.strict || lmnt.strict, void 0 !== lmnt.fromIsValid ? lmnt.fromIsValid : fromIsValid)
                        }),
                        commandObj.insert = void 0),
                        commandObj.refreshFromBuffer && commandObj.buffer) {
                            var refresh = commandObj.refreshFromBuffer;
                            refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, commandObj.buffer),
                            commandObj.refreshFromBuffer = void 0
                        }
                        void 0 !== commandObj.rewritePosition && (maskPos = commandObj.rewritePosition,
                        commandObj = !0)
                    }
                    return commandObj
                }
                function _isValid(position, c, strict) {
                    var rslt = !1;
                    return $.each(getTests(position), function(ndx, tst) {
                        var test = tst.match;
                        if (getBuffer(!0),
                        rslt = null != test.fn ? test.fn.test(c, maskset, position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {
                            c: getPlaceholder(position, test, !0) || test.def,
                            pos: position
                        },
                        !1 !== rslt) {
                            var elem = void 0 !== rslt.c ? rslt.c : c
                              , validatedPos = position;
                            return elem = elem === opts.skipOptionalPartCharacter && !0 === test.static ? getPlaceholder(position, test, !0) || test.def : elem,
                            rslt = processCommandObject(rslt),
                            !0 !== rslt && void 0 !== rslt.pos && rslt.pos !== position && (validatedPos = rslt.pos),
                            !0 !== rslt && void 0 === rslt.pos && void 0 === rslt.c ? !1 : (!1 === revalidateMask(pos, $.extend({}, tst, {
                                input: casing(elem, test, validatedPos)
                            }), fromIsValid, validatedPos) && (rslt = !1),
                            !1)
                        }
                    }),
                    rslt
                }
                void 0 !== pos.begin && (maskPos = isRTL ? pos.end : pos.begin);
                var result = !0
                  , positionsClone = $.extend(!0, {}, maskset.validPositions);
                if (!1 === opts.keepStatic && void 0 !== maskset.excludes[maskPos] && !0 !== fromAlternate && !0 !== fromIsValid)
                    for (var i = maskPos; i < (isRTL ? pos.begin : pos.end); i++)
                        void 0 !== maskset.excludes[i] && (maskset.excludes[i] = void 0,
                        delete maskset.tests[i]);
                if ($.isFunction(opts.preValidation) && !0 !== fromIsValid && !0 !== validateOnly && !0 !== fromAlternate && (result = opts.preValidation(getBuffer(), maskPos, c, isSelection(pos), opts, maskset, pos, strict),
                result = processCommandObject(result)),
                !0 === result) {
                    if (void 0 === maxLength || maskPos < maxLength) {
                        if (result = _isValid(maskPos, c, strict),
                        (!strict || !0 === fromIsValid) && !1 === result && !0 !== validateOnly) {
                            var currentPosValid = maskset.validPositions[maskPos];
                            if (!currentPosValid || !0 !== currentPosValid.match.static || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {
                                if (opts.insertMode || void 0 === maskset.validPositions[seekNext(maskPos)] || pos.end > maskPos) {
                                    var skip = !1;
                                    if (maskset.jitOffset[maskPos] && void 0 === maskset.validPositions[seekNext(maskPos)] && (result = isValid(maskPos + maskset.jitOffset[maskPos], c, !0),
                                    !1 !== result && (!0 !== fromAlternate && (result.caret = maskPos),
                                    skip = !0)),
                                    pos.end > maskPos && (maskset.validPositions[maskPos] = void 0),
                                    !skip && !isMask(maskPos, !0))
                                        for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++)
                                            if (result = _isValid(nPos, c, strict),
                                            !1 !== result) {
                                                result = trackbackPositions(maskPos, void 0 !== result.pos ? result.pos : nPos) || result,
                                                maskPos = nPos;
                                                break
                                            }
                                }
                            } else
                                result = {
                                    caret: seekNext(maskPos)
                                }
                        }
                    } else
                        result = !1;
                    !1 !== result || !1 !== opts.keepStatic && !isComplete(getBuffer()) && 0 !== maskPos || strict || !0 === fromAlternate ? isSelection(pos) && maskset.tests[maskPos] && 1 < maskset.tests[maskPos].length && !0 === opts.keepStatic && !strict && !0 !== fromAlternate && (result = alternate(!0)) : result = alternate(maskPos, c, strict, fromIsValid, void 0, pos),
                    !0 === result && (result = {
                        pos: maskPos
                    })
                }
                if ($.isFunction(opts.postValidation) && !1 !== result && !0 !== fromIsValid && !0 !== validateOnly) {
                    var postResult = opts.postValidation(getBuffer(!0), void 0 !== pos.begin ? isRTL ? pos.end : pos.begin : pos, result, opts, maskset, strict);
                    void 0 !== postResult && (result = !0 === postResult ? result : postResult)
                }
                result && void 0 === result.pos && (result.pos = maskPos),
                !1 === result || !0 === validateOnly ? (resetMaskSet(!0),
                maskset.validPositions = $.extend(!0, {}, positionsClone)) : trackbackPositions(void 0, maskPos, !0);
                var endResult = processCommandObject(result);
                return endResult
            }
            function trackbackPositions(originalPos, newPos, fillOnly) {
                if (void 0 === originalPos)
                    for (originalPos = newPos - 1; 0 < originalPos && !maskset.validPositions[originalPos]; originalPos--)
                        ;
                for (var ps = originalPos; ps < newPos; ps++)
                    if (void 0 === maskset.validPositions[ps] && !isMask(ps, !0)) {
                        var vp = 0 == ps ? getTest(ps) : maskset.validPositions[ps - 1];
                        if (vp) {
                            var tests = getTests(ps).slice();
                            "" === tests[tests.length - 1].match.def && tests.pop();
                            var bestMatch = determineTestTemplate(ps, tests), np;
                            if (bestMatch && (!0 !== bestMatch.match.jit || "master" === bestMatch.match.newBlockMarker && (np = maskset.validPositions[ps + 1]) && !0 === np.match.optionalQuantifier) && (bestMatch = $.extend({}, bestMatch, {
                                input: getPlaceholder(ps, bestMatch.match, !0) || bestMatch.match.def
                            }),
                            bestMatch.generatedInput = !0,
                            revalidateMask(ps, bestMatch, !0),
                            !0 !== fillOnly)) {
                                var cvpInput = maskset.validPositions[newPos].input;
                                return maskset.validPositions[newPos] = void 0,
                                isValid(newPos, cvpInput, !0, !0)
                            }
                        }
                    }
            }
            function revalidateMask(pos, validTest, fromIsValid, validatedPos) {
                function IsEnclosedStatic(pos, valids, selection) {
                    var posMatch = valids[pos];
                    if (void 0 === posMatch || !0 !== posMatch.match.static || !0 === posMatch.match.optionality || void 0 !== valids[0] && void 0 !== valids[0].alternation)
                        return !1;
                    var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && !0 === valids[pos - 1].match.static && valids[pos - 1] : valids[pos - 1]
                      , nextMatch = selection.end > pos + 1 ? valids[pos + 1] && !0 === valids[pos + 1].match.static && valids[pos + 1] : valids[pos + 1];
                    return prevMatch && nextMatch
                }
                var offset = 0
                  , begin = void 0 !== pos.begin ? pos.begin : pos
                  , end = void 0 !== pos.end ? pos.end : pos;
                if (pos.begin > pos.end && (begin = pos.end,
                end = pos.begin),
                void 0 === validTest && !1 === opts.insertMode && end < maskset.maskLength && (0 === begin && 0 === end || (begin += 1,
                end += 1)),
                validatedPos = void 0 !== validatedPos ? validatedPos : begin,
                begin !== end || opts.insertMode && void 0 !== maskset.validPositions[validatedPos] && void 0 === fromIsValid || void 0 === validTest) {
                    var positionsClone = $.extend(!0, {}, maskset.validPositions), lvp = void 0 === validTest && !1 === opts.insertMode ? 1 < end ? end - 1 : end : getLastValidPosition(void 0, !0), i;
                    for (maskset.p = begin,
                    i = lvp; begin <= i; i--)
                        delete maskset.validPositions[i],
                        void 0 === validTest && delete maskset.tests[i + 1];
                    var valid = !0, j = validatedPos, posMatch = j, t;
                    if (i = j,
                    validTest && (maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest),
                    posMatch++,
                    j++,
                    begin < end && i++),
                    validTest || opts.insertMode)
                        for (; i <= lvp; i++) {
                            if (void 0 !== (t = positionsClone[i]) && !0 !== t.generatedInput && (end <= i || begin <= i && IsEnclosedStatic(i, positionsClone, {
                                begin: begin,
                                end: end
                            }))) {
                                for (; "" !== getTest(posMatch).match.def; ) {
                                    if (positionCanMatchDefinition(posMatch, t, opts) || "+" === t.match.def) {
                                        "+" === t.match.def && getBuffer(!0);
                                        var result = isValid(posMatch, t.input, "+" !== t.match.def, "+" !== t.match.def);
                                        if (valid = !1 !== result,
                                        j = (result.pos || posMatch) + 1,
                                        !valid)
                                            break
                                    } else
                                        valid = !1;
                                    if (valid) {
                                        void 0 === validTest && t.match.static && i === pos.begin && offset++;
                                        break
                                    }
                                    if (!valid && posMatch > maskset.maskLength)
                                        break;
                                    posMatch++
                                }
                                "" == getTest(posMatch).match.def && (valid = !1),
                                posMatch = j
                            }
                            if (!valid)
                                break
                        }
                    if (!valid)
                        return maskset.validPositions = $.extend(!0, {}, positionsClone),
                        resetMaskSet(!0),
                        !1
                } else
                    validTest && (maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest));
                return resetMaskSet(!0),
                offset
            }
            function isMask(pos, strict, fuzzy) {
                var test = getTestTemplate(pos).match;
                if ("" === test.def && (test = getTest(pos).match),
                !0 !== test.static)
                    return test.fn;
                if (!0 === fuzzy && void 0 !== maskset.validPositions[pos] && !0 !== maskset.validPositions[pos].generatedInput)
                    return !0;
                if (!0 !== strict && -1 < pos) {
                    var tests = getTests(pos);
                    return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)
                }
                return !1
            }
            function seekNext(pos, newBlock) {
                for (var position = pos + 1; "" !== getTest(position).match.def && (!0 === newBlock && (!0 !== getTest(position).match.newBlockMarker || !isMask(position, void 0, !0)) || !0 !== newBlock && !isMask(position, void 0, !0)); )
                    position++;
                return position
            }
            function seekPrevious(pos, newBlock) {
                var position = pos, tests;
                if (position <= 0)
                    return 0;
                for (; 0 < --position && (!0 === newBlock && !0 !== getTest(position).match.newBlockMarker || !0 !== newBlock && !isMask(position, void 0, !0) && (tests = getTests(position),
                tests.length < 2 || 2 === tests.length && "" === tests[1].match.def)); )
                    ;
                return position
            }
            function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
                if (event && $.isFunction(opts.onBeforeWrite)) {
                    var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
                    if (result) {
                        if (result.refreshFromBuffer) {
                            var refresh = result.refreshFromBuffer;
                            refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer),
                            buffer = getBuffer(!0)
                        }
                        void 0 !== caretPos && (caretPos = void 0 !== result.caret ? result.caret : caretPos)
                    }
                }
                if (void 0 !== input && (input.inputmask._valueSet(buffer.join("")),
                void 0 === caretPos || void 0 !== event && "blur" === event.type || caret(input, caretPos),
                !0 === triggerEvents)) {
                    var $input = $(input)
                      , nptVal = input.inputmask._valueGet();
                    skipInputEvent = !0,
                    $input.trigger("input"),
                    setTimeout(function() {
                        nptVal === getBufferTemplate().join("") ? $input.trigger("cleared") : !0 === isComplete(buffer) && $input.trigger("complete")
                    }, 0)
                }
            }
            function getPlaceholder(pos, test, returnPL) {
                if (test = test || getTest(pos).match,
                void 0 !== test.placeholder || !0 === returnPL)
                    return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
                if (!0 !== test.static)
                    return opts.placeholder.charAt(pos % opts.placeholder.length);
                if (-1 < pos && void 0 === maskset.validPositions[pos]) {
                    var tests = getTests(pos), staticAlternations = [], prevTest;
                    if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0))
                        for (var i = 0; i < tests.length; i++)
                            if (!0 !== tests[i].match.optionality && !0 !== tests[i].match.optionalQuantifier && (!0 === tests[i].match.static || void 0 === prevTest || !1 !== tests[i].match.fn.test(prevTest.match.def, maskset, pos, !0, opts)) && (staticAlternations.push(tests[i]),
                            !0 === tests[i].match.static && (prevTest = tests[i]),
                            1 < staticAlternations.length && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def)))
                                return opts.placeholder.charAt(pos % opts.placeholder.length)
                }
                return test.def
            }
            function HandleNativePlaceholder(npt, value) {
                if (ie) {
                    if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || "" === npt.placeholder)) {
                        var buffer = getBuffer().slice()
                          , nptValue = npt.inputmask._valueGet();
                        if (nptValue !== value) {
                            var lvp = getLastValidPosition();
                            -1 === lvp && nptValue === getBufferTemplate().join("") ? buffer = [] : -1 !== lvp && clearOptionalTail(buffer),
                            writeBuffer(npt, buffer)
                        }
                    }
                } else
                    npt.placeholder !== value && (npt.placeholder = value,
                    "" === npt.placeholder && npt.removeAttribute("placeholder"))
            }
            function determineNewCaretPosition(selectedCaret, tabbed) {
                function doRadixFocus(clickPos) {
                    if ("" !== opts.radixPoint && 0 !== opts.digits) {
                        var vps = maskset.validPositions;
                        if (void 0 === vps[clickPos] || vps[clickPos].input === getPlaceholder(clickPos)) {
                            if (clickPos < seekNext(-1))
                                return !0;
                            var radixPos = $.inArray(opts.radixPoint, getBuffer());
                            if (-1 !== radixPos) {
                                for (var vp in vps)
                                    if (vps[vp] && radixPos < vp && vps[vp].input !== getPlaceholder(vp))
                                        return !1;
                                return !0
                            }
                        }
                    }
                    return !1
                }
                if (tabbed && (isRTL ? selectedCaret.end = selectedCaret.begin : selectedCaret.begin = selectedCaret.end),
                selectedCaret.begin === selectedCaret.end)
                    switch (opts.positionCaretOnClick) {
                    case "none":
                        break;
                    case "select":
                        return {
                            begin: 0,
                            end: getBuffer().length
                        };
                    case "ignore":
                        return seekNext(getLastValidPosition());
                    case "radixFocus":
                        if (doRadixFocus(selectedCaret.begin)) {
                            var radixPos = getBuffer().join("").indexOf(opts.radixPoint);
                            return opts.numericInput ? seekNext(radixPos) : radixPos
                        }
                    default:
                        var clickPosition = selectedCaret.begin
                          , lvclickPosition = getLastValidPosition(clickPosition, !0)
                          , lastPosition = seekNext(-1 !== lvclickPosition || isMask(0) ? lvclickPosition : 0);
                        if (clickPosition < lastPosition)
                            return isMask(clickPosition, !0) || isMask(clickPosition - 1, !0) ? clickPosition : seekNext(clickPosition);
                        var lvp = maskset.validPositions[lvclickPosition]
                          , tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : void 0, lvp)
                          , placeholder = getPlaceholder(lastPosition, tt.match);
                        if ("" !== placeholder && getBuffer()[lastPosition] !== placeholder && !0 !== tt.match.optionalQuantifier && !0 !== tt.match.newBlockMarker || !isMask(lastPosition, opts.keepStatic) && tt.match.def === placeholder) {
                            var newPos = seekNext(lastPosition);
                            (newPos <= clickPosition || clickPosition === lastPosition) && (lastPosition = newPos)
                        }
                        return lastPosition
                    }
            }
            var EventRuler = {
                on: function on(input, eventName, eventHandler) {
                    var ev = function ev(e) {
                        e = e.originalEvent || e;
                        var that = this, args;
                        if (void 0 === that.inputmask && "FORM" !== this.nodeName) {
                            var imOpts = $.data(that, "_inputmask_opts");
                            imOpts ? new Inputmask(imOpts).mask(that) : EventRuler.off(that)
                        } else {
                            if ("setvalue" === e.type || "FORM" === this.nodeName || !(that.disabled || that.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === opts.tabThrough && e.keyCode === keyCode.TAB))) {
                                switch (e.type) {
                                case "input":
                                    if (!0 === skipInputEvent || e.inputType && "insertCompositionText" === e.inputType)
                                        return skipInputEvent = !1,
                                        e.preventDefault();
                                    if (mobile)
                                        return args = arguments,
                                        setTimeout(function() {
                                            eventHandler.apply(that, args),
                                            caret(that, that.inputmask.caretPos, void 0, !0)
                                        }, 0),
                                        !1;
                                    break;
                                case "keydown":
                                    skipKeyPressEvent = !1,
                                    skipInputEvent = !1;
                                    break;
                                case "keypress":
                                    if (!0 === skipKeyPressEvent)
                                        return e.preventDefault();
                                    skipKeyPressEvent = !0;
                                    break;
                                case "click":
                                case "focus":
                                    return validationEvent ? (validationEvent = !1,
                                    input.blur(),
                                    HandleNativePlaceholder(input, (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("")),
                                    setTimeout(function() {
                                        input.focus()
                                    }, 3e3)) : (args = arguments,
                                    setTimeout(function() {
                                        eventHandler.apply(that, args)
                                    }, 0)),
                                    !1
                                }
                                var returnVal = eventHandler.apply(that, arguments);
                                return !1 === returnVal && (e.preventDefault(),
                                e.stopPropagation()),
                                returnVal
                            }
                            e.preventDefault()
                        }
                    };
                    input.inputmask.events[eventName] = input.inputmask.events[eventName] || [],
                    input.inputmask.events[eventName].push(ev),
                    -1 !== $.inArray(eventName, ["submit", "reset"]) ? null !== input.form && $(input.form).on(eventName, ev) : $(input).on(eventName, ev)
                },
                off: function off(input, event) {
                    var events;
                    input.inputmask && input.inputmask.events && (event ? (events = [],
                    events[event] = input.inputmask.events[event]) : events = input.inputmask.events,
                    $.each(events, function(eventName, evArr) {
                        for (; 0 < evArr.length; ) {
                            var ev = evArr.pop();
                            -1 !== $.inArray(eventName, ["submit", "reset"]) ? null !== input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev)
                        }
                        delete input.inputmask.events[eventName]
                    }))
                }
            }, EventHandlers = {
                keydownEvent: function keydownEvent(e) {
                    var input = this
                      , $input = $(input)
                      , k = e.keyCode
                      , pos = caret(input)
                      , kdResult = opts.onKeyDown.call(this, e, getBuffer(), pos, opts);
                    if (void 0 !== kdResult)
                        return kdResult;
                    if (k === keyCode.BACKSPACE || k === keyCode.DELETE || iphone && k === keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === keyCode.X && !("oncut"in input))
                        e.preventDefault(),
                        handleRemove(input, k, pos),
                        writeBuffer(input, getBuffer(!0), maskset.p, e, input.inputmask._valueGet() !== getBuffer().join(""));
                    else if (k === keyCode.END || k === keyCode.PAGE_DOWN) {
                        e.preventDefault();
                        var caretPos = seekNext(getLastValidPosition());
                        caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, !0)
                    } else
                        k === keyCode.HOME && !e.shiftKey || k === keyCode.PAGE_UP ? (e.preventDefault(),
                        caret(input, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === keyCode.ESCAPE || 90 === k && e.ctrlKey) && !0 !== e.altKey ? (checkVal(input, !0, !1, undoValue.split("")),
                        $input.trigger("click")) : !0 === opts.tabThrough && k === keyCode.TAB ? (!0 === e.shiftKey ? (!0 === getTest(pos.begin).match.static && (pos.begin = seekNext(pos.begin)),
                        pos.end = seekPrevious(pos.begin, !0),
                        pos.begin = seekPrevious(pos.end, !0)) : (pos.begin = seekNext(pos.begin, !0),
                        pos.end = seekNext(pos.begin, !0),
                        pos.end < maskset.maskLength && pos.end--),
                        pos.begin < maskset.maskLength && (e.preventDefault(),
                        caret(input, pos.begin, pos.end))) : e.shiftKey || !1 === opts.insertMode && (k === keyCode.RIGHT ? setTimeout(function() {
                            var caretPos = caret(input);
                            caret(input, caretPos.begin)
                        }, 0) : k === keyCode.LEFT && setTimeout(function() {
                            var caretPos_begin = translatePosition(input.inputmask.caretPos.begin)
                              , caretPos_end = translatePosition(input.inputmask.caretPos.end);
                            caret(input, isRTL ? caretPos_begin + (caretPos_begin === maskset.maskLength ? 0 : 1) : caretPos_begin - (0 === caretPos_begin ? 0 : 1))
                        }, 0));
                    ignorable = -1 !== $.inArray(k, opts.ignorables)
                },
                keypressEvent: function keypressEvent(e, checkval, writeOut, strict, ndx) {
                    var input = this
                      , $input = $(input)
                      , k = e.which || e.charCode || e.keyCode;
                    if (!(!0 === checkval || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable))
                        return k === keyCode.ENTER && undoValue !== getBuffer().join("") && (undoValue = getBuffer().join(""),
                        setTimeout(function() {
                            $input.trigger("change")
                        }, 0)),
                        skipInputEvent = !0,
                        !0;
                    if (k) {
                        46 === k && !1 === e.shiftKey && "" !== opts.radixPoint && (k = opts.radixPoint.charCodeAt(0));
                        var pos = checkval ? {
                            begin: ndx,
                            end: ndx
                        } : caret(input), forwardPosition, c = String.fromCharCode(k);
                        maskset.writeOutBuffer = !0;
                        var valResult = isValid(pos, c, strict);
                        if (!1 !== valResult && (resetMaskSet(!0),
                        forwardPosition = void 0 !== valResult.caret ? valResult.caret : seekNext(valResult.pos.begin ? valResult.pos.begin : valResult.pos),
                        maskset.p = forwardPosition),
                        forwardPosition = opts.numericInput && void 0 === valResult.caret ? seekPrevious(forwardPosition) : forwardPosition,
                        !1 !== writeOut && (setTimeout(function() {
                            opts.onKeyValidation.call(input, k, valResult, opts)
                        }, 0),
                        maskset.writeOutBuffer && !1 !== valResult)) {
                            var buffer = getBuffer();
                            writeBuffer(input, buffer, forwardPosition, e, !0 !== checkval)
                        }
                        if (e.preventDefault(),
                        checkval)
                            return !1 !== valResult && (valResult.forwardPosition = forwardPosition),
                            valResult
                    }
                },
                pasteEvent: function pasteEvent(e) {
                    var input = this, inputValue = this.inputmask._valueGet(!0), caretPos = caret(this), tempValue;
                    isRTL && (tempValue = caretPos.end,
                    caretPos.end = caretPos.begin,
                    caretPos.begin = tempValue);
                    var valueBeforeCaret = inputValue.substr(0, caretPos.begin)
                      , valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
                    if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""),
                    valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("") && (valueAfterCaret = ""),
                    window.clipboardData && window.clipboardData.getData)
                        inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;
                    else {
                        if (!e.clipboardData || !e.clipboardData.getData)
                            return !0;
                        inputValue = valueBeforeCaret + e.clipboardData.getData("text/plain") + valueAfterCaret
                    }
                    var pasteValue = inputValue;
                    if ($.isFunction(opts.onBeforePaste)) {
                        if (pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts),
                        !1 === pasteValue)
                            return e.preventDefault();
                        pasteValue = pasteValue || inputValue
                    }
                    return checkVal(this, !1, !1, pasteValue.toString().split("")),
                    writeBuffer(this, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join("")),
                    e.preventDefault()
                },
                inputFallBackEvent: function inputFallBackEvent(e) {
                    function ieMobileHandler(input, inputValue, caretPos) {
                        if (iemobile) {
                            var inputChar = inputValue.replace(getBuffer().join(""), "");
                            if (1 === inputChar.length) {
                                var iv = inputValue.split("");
                                iv.splice(caretPos.begin, 0, inputChar),
                                inputValue = iv.join("")
                            }
                        }
                        return inputValue
                    }
                    function analyseChanges(inputValue, buffer, caretPos) {
                        for (var frontPart = inputValue.substr(0, caretPos.begin).split(""), backPart = inputValue.substr(caretPos.begin).split(""), frontBufferPart = buffer.substr(0, caretPos.begin).split(""), backBufferPart = buffer.substr(caretPos.begin).split(""), fpl = frontPart.length >= frontBufferPart.length ? frontPart.length : frontBufferPart.length, bpl = backPart.length >= backBufferPart.length ? backPart.length : backBufferPart.length, bl, i, action = "", data = [], marker = "~", placeholder; frontPart.length < fpl; )
                            frontPart.push("~");
                        for (; frontBufferPart.length < fpl; )
                            frontBufferPart.push("~");
                        for (; backPart.length < bpl; )
                            backPart.unshift("~");
                        for (; backBufferPart.length < bpl; )
                            backBufferPart.unshift("~");
                        var newBuffer = frontPart.concat(backPart)
                          , oldBuffer = frontBufferPart.concat(backBufferPart);
                        for (i = 0,
                        bl = newBuffer.length; i < bl; i++)
                            switch (placeholder = getPlaceholder(translatePosition(i)),
                            action) {
                            case "insertText":
                                i = bl;
                                break;
                            case "insertReplacementText":
                                "~" === newBuffer[i] ? caretPos.end++ : i = bl;
                                break;
                            case "deleteContentBackward":
                                "~" === newBuffer[i] ? caretPos.end++ : i = bl;
                                break;
                            default:
                                newBuffer[i] !== oldBuffer[i] && (oldBuffer[i] === placeholder && "~" === oldBuffer[i + 1] || "~" === oldBuffer[i] ? (action = "insertText",
                                data.push(newBuffer[i]),
                                caretPos.begin--,
                                caretPos.end--) : "~" === oldBuffer[i + 1] && oldBuffer[i] === newBuffer[i + 1] ? (action = "insertText",
                                data.push(newBuffer[i]),
                                caretPos.begin--,
                                caretPos.end--) : newBuffer[i] !== placeholder && "~" !== newBuffer[i] && ("~" === newBuffer[i + 1] || oldBuffer[i] !== newBuffer[i] && oldBuffer[i + 1] === newBuffer[i + 1]) ? (action = "insertReplacementText",
                                data.push(newBuffer[i]),
                                caretPos.begin--) : "~" === newBuffer[i] ? (action = "deleteContentBackward",
                                isMask(translatePosition(i), !0) && caretPos.end++) : i = bl);
                                break
                            }
                        return {
                            action: action,
                            data: data,
                            caret: caretPos
                        }
                    }
                    var input = this
                      , inputValue = input.inputmask._valueGet(!0)
                      , buffer = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("")
                      , caretPos = caret(input, void 0, void 0, !0);
                    if (buffer !== inputValue) {
                        inputValue = ieMobileHandler(input, inputValue, caretPos);
                        var changes = analyseChanges(inputValue, buffer, caretPos);
                        switch (document.activeElement !== input && input.focus(),
                        writeBuffer(input, getBuffer()),
                        caret(input, caretPos.begin, caretPos.end, !0),
                        changes.action) {
                        case "insertText":
                        case "insertReplacementText":
                            $.each(changes.data, function(ndx, entry) {
                                var keypress = new $.Event("keypress");
                                keypress.which = entry.charCodeAt(0),
                                ignorable = !1,
                                EventHandlers.keypressEvent.call(input, keypress)
                            });
                            break;
                        case "deleteContentBackward":
                            var keydown = new $.Event("keydown");
                            keydown.keyCode = keyCode.BACKSPACE,
                            EventHandlers.keydownEvent.call(input, keydown);
                            break;
                        default:
                            applyInputValue(input, inputValue);
                            break
                        }
                        e.preventDefault()
                    }
                },
                compositionendEvent: function compositionendEvent(e) {
                    $el.trigger("input")
                },
                setValueEvent: function setValueEvent(e, argument_1, argument_2) {
                    var input = this
                      , value = e && e.detail ? e.detail[0] : argument_1;
                    void 0 === value && (value = this.inputmask._valueGet(!0)),
                    applyInputValue(this, value),
                    (e.detail && void 0 !== e.detail[1] || void 0 !== argument_2) && caret(this, e.detail ? e.detail[1] : argument_2)
                },
                focusEvent: function focusEvent(e) {
                    var input = this
                      , nptValue = this.inputmask._valueGet();
                    opts.showMaskOnFocus && nptValue !== getBuffer().join("") && writeBuffer(this, getBuffer(), seekNext(getLastValidPosition())),
                    !0 !== opts.positionCaretOnTab || !1 !== mouseEnter || isComplete(getBuffer()) && -1 !== getLastValidPosition() || EventHandlers.clickEvent.apply(this, [e, !0]),
                    undoValue = getBuffer().join("")
                },
                invalidEvent: function invalidEvent(e) {
                    validationEvent = !0
                },
                mouseleaveEvent: function mouseleaveEvent() {
                    var input = this;
                    mouseEnter = !1,
                    opts.clearMaskOnLostFocus && document.activeElement !== this && HandleNativePlaceholder(this, originalPlaceholder)
                },
                clickEvent: function clickEvent(e, tabbed) {
                    var input = this;
                    if (document.activeElement === this) {
                        var newCaretPosition = determineNewCaretPosition(caret(this), tabbed);
                        void 0 !== newCaretPosition && caret(this, newCaretPosition)
                    }
                },
                cutEvent: function cutEvent(e) {
                    var input = this
                      , pos = caret(this)
                      , clipboardData = window.clipboardData || e.clipboardData
                      , clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
                    clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join("")),
                    document.execCommand && document.execCommand("copy"),
                    handleRemove(this, keyCode.DELETE, pos),
                    writeBuffer(this, getBuffer(), maskset.p, e, undoValue !== getBuffer().join(""))
                },
                blurEvent: function blurEvent(e) {
                    var $input = $(this)
                      , input = this;
                    if (this.inputmask) {
                        HandleNativePlaceholder(this, originalPlaceholder);
                        var nptValue = this.inputmask._valueGet()
                          , buffer = getBuffer().slice();
                        "" !== nptValue && (opts.clearMaskOnLostFocus && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer)),
                        !1 === isComplete(buffer) && (setTimeout(function() {
                            $input.trigger("incomplete")
                        }, 0),
                        opts.clearIncomplete && (resetMaskSet(),
                        buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())),
                        writeBuffer(this, buffer, void 0, e)),
                        undoValue !== getBuffer().join("") && (undoValue = getBuffer().join(""),
                        $input.trigger("change"))
                    }
                },
                mouseenterEvent: function mouseenterEvent() {
                    var input = this;
                    mouseEnter = !0,
                    document.activeElement !== this && (null == originalPlaceholder && this.placeholder !== originalPlaceholder && (originalPlaceholder = this.placeholder),
                    opts.showMaskOnHover && HandleNativePlaceholder(this, (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("")))
                },
                submitEvent: function submitEvent() {
                    undoValue !== getBuffer().join("") && $el.trigger("change"),
                    opts.clearMaskOnLostFocus && -1 === getLastValidPosition() && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("") && el.inputmask._valueSet(""),
                    opts.clearIncomplete && !1 === isComplete(getBuffer()) && el.inputmask._valueSet(""),
                    opts.removeMaskOnSubmit && (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0),
                    setTimeout(function() {
                        writeBuffer(el, getBuffer())
                    }, 0))
                },
                resetEvent: function resetEvent() {
                    el.inputmask.refreshValue = !0,
                    setTimeout(function() {
                        applyInputValue(el, el.inputmask._valueGet(!0))
                    }, 0)
                }
            }, valueBuffer;
            function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
                var inputmask = this || input.inputmask
                  , inputValue = nptvl.slice()
                  , charCodes = ""
                  , initialNdx = -1
                  , result = void 0;
                function isTemplateMatch(ndx, charCodes) {
                    if (opts.regex)
                        return !1;
                    for (var targetTemplate = getMaskTemplate(!0, 0, !1).slice(ndx, seekNext(ndx)).join("").replace(/'/g, ""), charCodeNdx = targetTemplate.indexOf(charCodes); 0 < charCodeNdx && " " === targetTemplate[charCodeNdx - 1]; )
                        charCodeNdx--;
                    var match = 0 === charCodeNdx && !isMask(ndx) && (getTest(ndx).match.nativeDef === charCodes.charAt(0) || !0 === getTest(ndx).match.static && getTest(ndx).match.nativeDef === "'" + charCodes.charAt(0) || " " === getTest(ndx).match.nativeDef && (getTest(ndx + 1).match.nativeDef === charCodes.charAt(0) || !0 === getTest(ndx + 1).match.static && getTest(ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)));
                    return !match && 0 < charCodeNdx && (inputmask.caretPos = {
                        begin: seekNext(charCodeNdx)
                    }),
                    match
                }
                resetMaskSet(),
                maskset.tests = {},
                initialNdx = opts.radixPoint ? determineNewCaretPosition(0) : 0,
                maskset.p = initialNdx,
                inputmask.caretPos = {
                    begin: initialNdx
                };
                var staticMatches = [], prevCaretPos = inputmask.caretPos, sndx, validPos, nextValid;
                if ($.each(inputValue, function(ndx, charCode) {
                    if (void 0 !== charCode)
                        if (void 0 === maskset.validPositions[ndx] && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, !0) && !1 === isValid(ndx, inputValue[ndx], !0, void 0, void 0, !0))
                            maskset.p++;
                        else {
                            var keypress = new $.Event("_checkval");
                            keypress.which = charCode.toString().charCodeAt(0),
                            charCodes += charCode;
                            var lvp = getLastValidPosition(void 0, !0);
                            isTemplateMatch(initialNdx, charCodes) ? result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, lvp + 1) : (result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, inputmask.caretPos.begin),
                            result && (initialNdx = inputmask.caretPos.begin + 1,
                            charCodes = "")),
                            result ? (void 0 !== result.pos && maskset.validPositions[result.pos] && !0 === maskset.validPositions[result.pos].match.static && (staticMatches.push(result.pos),
                            isRTL || (result.forwardPosition = result.pos + 1)),
                            writeBuffer(void 0, getBuffer(), result.forwardPosition, keypress, !1),
                            inputmask.caretPos = {
                                begin: result.forwardPosition,
                                end: result.forwardPosition
                            },
                            prevCaretPos = inputmask.caretPos) : inputmask.caretPos = prevCaretPos
                        }
                }),
                0 < staticMatches.length)
                    if (!isComplete(getBuffer()) || staticMatches.length < seekNext(0)) {
                        for (; void 0 !== (sndx = staticMatches.pop()); )
                            if (sndx !== staticMatches.length) {
                                var keypress = new $.Event("_checkval")
                                  , nextSndx = sndx + 1;
                                for (validPos = maskset.validPositions[sndx],
                                validPos.generatedInput = !0,
                                keypress.which = validPos.input.charCodeAt(0); (nextValid = maskset.validPositions[nextSndx]) && nextValid.input === validPos.input; )
                                    nextSndx++;
                                result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, nextSndx),
                                result && void 0 !== result.pos && result.pos !== sndx && maskset.validPositions[result.pos] && !0 === maskset.validPositions[result.pos].match.static && staticMatches.push(result.pos)
                            }
                    } else
                        for (; sndx = staticMatches.pop(); )
                            validPos = maskset.validPositions[sndx],
                            validPos && (validPos.generatedInput = !0);
                writeOut && writeBuffer(input, getBuffer(), result ? result.forwardPosition : void 0, initiatingEvent || new $.Event("checkval"), initiatingEvent && "input" === initiatingEvent.type)
            }
            function unmaskedvalue(input) {
                if (input) {
                    if (void 0 === input.inputmask)
                        return input.value;
                    input.inputmask && input.inputmask.refreshValue && applyInputValue(input, input.inputmask._valueGet(!0))
                }
                var umValue = []
                  , vps = maskset.validPositions;
                for (var pndx in vps)
                    vps[pndx] && vps[pndx].match && 1 != vps[pndx].match.static && umValue.push(vps[pndx].input);
                var unmaskedValue = 0 === umValue.length ? "" : (isRTL ? umValue.reverse() : umValue).join("");
                if ($.isFunction(opts.onUnMask)) {
                    var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
                    unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts)
                }
                return unmaskedValue
            }
            function translatePosition(pos) {
                return !isRTL || "number" != typeof pos || opts.greedy && "" === opts.placeholder || !el || (pos = el.inputmask._valueGet().length - pos),
                pos
            }
            function caret(input, begin, end, notranslate) {
                var range;
                if (void 0 === begin)
                    return "selectionStart"in input && "selectionEnd"in input ? (begin = input.selectionStart,
                    end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0),
                    range.commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset,
                    end = range.endOffset)) : document.selection && document.selection.createRange && (range = document.selection.createRange(),
                    begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length),
                    end = begin + range.text.length),
                    !1 === opts.insertMode && begin === end - 1 && end--,
                    {
                        begin: notranslate ? begin : translatePosition(begin),
                        end: notranslate ? end : translatePosition(end)
                    };
                if ($.isArray(begin) && (end = isRTL ? begin[0] : begin[1],
                begin = isRTL ? begin[1] : begin[0]),
                void 0 !== begin.begin && (end = isRTL ? begin.begin : begin.end,
                begin = isRTL ? begin.end : begin.begin),
                "number" == typeof begin) {
                    begin = notranslate ? begin : translatePosition(begin),
                    end = notranslate ? end : translatePosition(end),
                    end = "number" == typeof end ? end : begin;
                    var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                    if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0,
                    input.inputmask.caretPos = {
                        begin: begin,
                        end: end
                    },
                    !1 === opts.insertMode && begin === end && end++,
                    input === document.activeElement)
                        if ("setSelectionRange"in input)
                            input.setSelectionRange(begin, end);
                        else if (window.getSelection) {
                            if (range = document.createRange(),
                            void 0 === input.firstChild || null === input.firstChild) {
                                var textNode = document.createTextNode("");
                                input.appendChild(textNode)
                            }
                            range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length),
                            range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length),
                            range.collapse(!0);
                            var sel = window.getSelection();
                            sel.removeAllRanges(),
                            sel.addRange(range)
                        } else
                            input.createTextRange && (range = input.createTextRange(),
                            range.collapse(!0),
                            range.moveEnd("character", end),
                            range.moveStart("character", begin),
                            range.select())
                }
            }
            function determineLastRequiredPosition(returnDefinition) {
                var buffer = getMaskTemplate(!0, getLastValidPosition(), !0, !0), bl = buffer.length, pos, lvp = getLastValidPosition(), positions = {}, lvTest = maskset.validPositions[lvp], ndxIntlzr = void 0 !== lvTest ? lvTest.locator.slice() : void 0, testPos;
                for (pos = lvp + 1; pos < buffer.length; pos++)
                    testPos = getTestTemplate(pos, ndxIntlzr, pos - 1),
                    ndxIntlzr = testPos.locator.slice(),
                    positions[pos] = $.extend(!0, {}, testPos);
                var lvTestAlt = lvTest && void 0 !== lvTest.alternation ? lvTest.locator[lvTest.alternation] : void 0;
                for (pos = bl - 1; lvp < pos && (testPos = positions[pos],
                (testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && 1 != testPos.match.static || !0 === testPos.match.static && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== getTests(pos)[0].def)) && buffer[pos] === getPlaceholder(pos, testPos.match)); pos--)
                    bl--;
                return returnDefinition ? {
                    l: bl,
                    def: positions[bl] ? positions[bl].match : void 0
                } : bl
            }
            function clearOptionalTail(buffer) {
                buffer.length = 0;
                for (var template = getMaskTemplate(!0, 0, !0, void 0, !0), lmnt; void 0 !== (lmnt = template.shift()); )
                    buffer.push(lmnt);
                return buffer
            }
            function isComplete(buffer) {
                if ($.isFunction(opts.isComplete))
                    return opts.isComplete(buffer, opts);
                if ("*" !== opts.repeat) {
                    var complete = !1
                      , lrp = determineLastRequiredPosition(!0)
                      , aml = seekPrevious(lrp.l);
                    if (void 0 === lrp.def || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                        complete = !0;
                        for (var i = 0; i <= aml; i++) {
                            var test = getTestTemplate(i).match;
                            if (!0 !== test.static && void 0 === maskset.validPositions[i] && !0 !== test.optionality && !0 !== test.optionalQuantifier || !0 === test.static && buffer[i] !== getPlaceholder(i, test)) {
                                complete = !1;
                                break
                            }
                        }
                    }
                    return complete
                }
            }
            function handleRemove(input, k, pos, strict, fromIsValid) {
                if ((opts.numericInput || isRTL) && (k === keyCode.BACKSPACE ? k = keyCode.DELETE : k === keyCode.DELETE && (k = keyCode.BACKSPACE),
                isRTL)) {
                    var pend = pos.end;
                    pos.end = pos.begin,
                    pos.begin = pend
                }
                var offset;
                if (k === keyCode.BACKSPACE || k === keyCode.DELETE && !1 === opts.insertMode ? pos.end - pos.begin < 1 && (pos.begin = seekPrevious(pos.begin),
                void 0 !== maskset.validPositions[pos.begin] && maskset.validPositions[pos.begin].input === opts.groupSeparator && pos.begin--) : k === keyCode.DELETE && pos.begin === pos.end && (pos.end = isMask(pos.end, !0, !0) ? pos.end + 1 : seekNext(pos.end) + 1,
                void 0 !== maskset.validPositions[pos.begin] && maskset.validPositions[pos.begin].input === opts.groupSeparator && pos.end++),
                !1 !== (offset = revalidateMask(pos))) {
                    if (!0 !== strict && !1 !== opts.keepStatic || null !== opts.regex && -1 !== getTest(pos.begin).match.def.indexOf("|")) {
                        var result = alternate(!0);
                        if (result) {
                            var newPos = void 0 !== result.caret ? result.caret : result.pos ? seekNext(result.pos.begin ? result.pos.begin : result.pos) : getLastValidPosition(-1, !0);
                            (k !== keyCode.DELETE || pos.begin > newPos) && pos.begin
                        }
                    }
                    var lvp = getLastValidPosition(pos.end, !0);
                    lvp < pos.begin ? maskset.p = !1 === opts.insertMode ? seekPrevious(lvp + 1) : seekNext(lvp) : !0 !== strict && (maskset.p = k === keyCode.DELETE ? pos.begin + offset : pos.begin,
                    !1 === opts.insertMode && k === keyCode.DELETE && (maskset.p = pos.end + 1,
                    void 0 === maskset.validPositions[maskset.p] && getLastValidPosition(maskset.maskLength, !0) < maskset.p && (maskset.p = seekPrevious(lvp + 1))))
                }
            }
            function applyInputValue(input, value) {
                input.inputmask.refreshValue = !1,
                $.isFunction(opts.onBeforeMask) && (value = opts.onBeforeMask.call(inputmask, value, opts) || value),
                value = value.toString().split(""),
                checkVal(input, !0, !1, value),
                undoValue = getBuffer().join(""),
                (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("") && -1 === getLastValidPosition() && input.inputmask._valueSet("")
            }
            function mask(elem) {
                function isElementTypeSupported(input, opts) {
                    function patchValueProperty(npt) {
                        var valueGet, valueSet;
                        function patchValhook(type) {
                            if ($.valHooks && (void 0 === $.valHooks[type] || !0 !== $.valHooks[type].inputmaskpatch)) {
                                var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function(elem) {
                                    return elem.value
                                }
                                  , valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function(elem, value) {
                                    return elem.value = value,
                                    elem
                                }
                                ;
                                $.valHooks[type] = {
                                    get: function get(elem) {
                                        if (elem.inputmask) {
                                            if (elem.inputmask.opts.autoUnmask)
                                                return elem.inputmask.unmaskedvalue();
                                            var result = valhookGet(elem);
                                            return -1 !== getLastValidPosition(void 0, void 0, elem.inputmask.maskset.validPositions) || !0 !== opts.nullable ? result : ""
                                        }
                                        return valhookGet(elem)
                                    },
                                    set: function set(elem, value) {
                                        var result = valhookSet(elem, value);
                                        return elem.inputmask && applyInputValue(elem, value),
                                        result
                                    },
                                    inputmaskpatch: !0
                                }
                            }
                        }
                        function getter() {
                            return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition() || !0 !== opts.nullable ? document.activeElement === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "" : valueGet.call(this)
                        }
                        function setter(value) {
                            valueSet.call(this, value),
                            this.inputmask && applyInputValue(this, value)
                        }
                        function installNativeValueSetFallback(npt) {
                            EventRuler.on(npt, "mouseenter", function() {
                                var input = this
                                  , value = this.inputmask._valueGet(!0);
                                value !== (isRTL ? getBuffer().reverse() : getBuffer()).join("") && applyInputValue(this, value)
                            })
                        }
                        if (!npt.inputmask.__valueGet) {
                            if (!0 !== opts.noValuePatching) {
                                if (Object.getOwnPropertyDescriptor) {
                                    "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === _typeof("test".__proto__) ? function(object) {
                                        return object.__proto__
                                    }
                                    : function(object) {
                                        return object.constructor.prototype
                                    }
                                    );
                                    var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : void 0;
                                    valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get,
                                    valueSet = valueProperty.set,
                                    Object.defineProperty(npt, "value", {
                                        get: getter,
                                        set: setter,
                                        configurable: !0
                                    })) : "input" !== npt.tagName.toLowerCase() && (valueGet = function valueGet() {
                                        return this.textContent
                                    }
                                    ,
                                    valueSet = function valueSet(value) {
                                        this.textContent = value
                                    }
                                    ,
                                    Object.defineProperty(npt, "value", {
                                        get: getter,
                                        set: setter,
                                        configurable: !0
                                    }))
                                } else
                                    document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"),
                                    valueSet = npt.__lookupSetter__("value"),
                                    npt.__defineGetter__("value", getter),
                                    npt.__defineSetter__("value", setter));
                                npt.inputmask.__valueGet = valueGet,
                                npt.inputmask.__valueSet = valueSet
                            }
                            npt.inputmask._valueGet = function(overruleRTL) {
                                return isRTL && !0 !== overruleRTL ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el)
                            }
                            ,
                            npt.inputmask._valueSet = function(value, overruleRTL) {
                                valueSet.call(this.el, null == value ? "" : !0 !== overruleRTL && isRTL ? value.split("").reverse().join("") : value)
                            }
                            ,
                            void 0 === valueGet && (valueGet = function valueGet() {
                                return this.value
                            }
                            ,
                            valueSet = function valueSet(value) {
                                this.value = value
                            }
                            ,
                            patchValhook(npt.type),
                            installNativeValueSetFallback(npt))
                        }
                    }
                    "textarea" !== input.tagName.toLowerCase() && opts.ignorables.push(keyCode.ENTER);
                    var elementType = input.getAttribute("type")
                      , isSupported = "input" === input.tagName.toLowerCase() && -1 !== $.inArray(elementType, opts.supportsInputType) || input.isContentEditable || "textarea" === input.tagName.toLowerCase();
                    if (!isSupported)
                        if ("input" === input.tagName.toLowerCase()) {
                            var el = document.createElement("input");
                            el.setAttribute("type", elementType),
                            isSupported = "text" === el.type,
                            el = null
                        } else
                            isSupported = "partial";
                    return !1 !== isSupported ? patchValueProperty(input) : input.inputmask = void 0,
                    isSupported
                }
                EventRuler.off(elem);
                var isSupported = isElementTypeSupported(elem, opts);
                if (!1 !== isSupported && (el = elem,
                $el = $(el),
                originalPlaceholder = el.placeholder,
                maxLength = void 0 !== el ? el.maxLength : void 0,
                -1 === maxLength && (maxLength = void 0),
                "inputMode"in el && null === el.getAttribute("inputmode") && (el.inputMode = opts.inputmode,
                el.setAttribute("inputmode", opts.inputmode)),
                !0 === isSupported && (opts.showMaskOnFocus = opts.showMaskOnFocus && -1 === ["cc-number", "cc-exp"].indexOf(el.autocomplete),
                EventRuler.on(el, "submit", EventHandlers.submitEvent),
                EventRuler.on(el, "reset", EventHandlers.resetEvent),
                EventRuler.on(el, "blur", EventHandlers.blurEvent),
                EventRuler.on(el, "focus", EventHandlers.focusEvent),
                EventRuler.on(el, "invalid", EventHandlers.invalidEvent),
                EventRuler.on(el, "click", EventHandlers.clickEvent),
                EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent),
                EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent),
                EventRuler.on(el, "paste", EventHandlers.pasteEvent),
                EventRuler.on(el, "cut", EventHandlers.cutEvent),
                EventRuler.on(el, "complete", opts.oncomplete),
                EventRuler.on(el, "incomplete", opts.onincomplete),
                EventRuler.on(el, "cleared", opts.oncleared),
                mobile || !0 === opts.inputEventOnly ? el.removeAttribute("maxLength") : (EventRuler.on(el, "keydown", EventHandlers.keydownEvent),
                EventRuler.on(el, "keypress", EventHandlers.keypressEvent)),
                EventRuler.on(el, "input", EventHandlers.inputFallBackEvent),
                EventRuler.on(el, "compositionend", EventHandlers.compositionendEvent)),
                EventRuler.on(el, "setvalue", EventHandlers.setValueEvent),
                undoValue = getBufferTemplate().join(""),
                "" !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || document.activeElement === el)) {
                    applyInputValue(el, el.inputmask._valueGet(!0), opts);
                    var buffer = getBuffer().slice();
                    !1 === isComplete(buffer) && opts.clearIncomplete && resetMaskSet(),
                    opts.clearMaskOnLostFocus && document.activeElement !== el && (-1 === getLastValidPosition() ? buffer = [] : clearOptionalTail(buffer)),
                    (!1 === opts.clearMaskOnLostFocus || opts.showMaskOnFocus && document.activeElement === el || "" !== el.inputmask._valueGet(!0)) && writeBuffer(el, buffer),
                    document.activeElement === el && caret(el, seekNext(getLastValidPosition()))
                }
            }
            if (void 0 !== actionObj)
                switch (actionObj.action) {
                case "isComplete":
                    return el = actionObj.el,
                    isComplete(getBuffer());
                case "unmaskedvalue":
                    return void 0 !== el && void 0 === actionObj.value || (valueBuffer = actionObj.value,
                    valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer).split(""),
                    checkVal.call(this, void 0, !1, !1, valueBuffer),
                    $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite.call(inputmask, void 0, getBuffer(), 0, opts)),
                    unmaskedvalue(el);
                case "mask":
                    mask(el);
                    break;
                case "format":
                    return valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value).split(""),
                    checkVal.call(this, void 0, !0, !1, valueBuffer),
                    actionObj.metadata ? {
                        value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                        metadata: maskScope.call(this, {
                            action: "getmetadata"
                        }, maskset, opts)
                    } : isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");
                case "isValid":
                    actionObj.value ? (valueBuffer = ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value).split(""),
                    checkVal.call(this, void 0, !0, !1, valueBuffer)) : actionObj.value = isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");
                    for (var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1; rl < lmib && !isMask(lmib); lmib--)
                        ;
                    return buffer.splice(rl, lmib + 1 - rl),
                    isComplete(buffer) && actionObj.value === (isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""));
                case "getemptymask":
                    return getBufferTemplate().join("");
                case "remove":
                    if (el && el.inputmask) {
                        $.data(el, "_inputmask_opts", null),
                        $el = $(el);
                        var cv = opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(opts.autoUnmask), valueProperty;
                        cv !== getBufferTemplate().join("") ? el.inputmask._valueSet(cv, opts.autoUnmask) : el.inputmask._valueSet(""),
                        EventRuler.off(el),
                        Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? (valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value"),
                        valueProperty && el.inputmask.__valueGet && Object.defineProperty(el, "value", {
                            get: el.inputmask.__valueGet,
                            set: el.inputmask.__valueSet,
                            configurable: !0
                        })) : document.__lookupGetter__ && el.__lookupGetter__("value") && el.inputmask.__valueGet && (el.__defineGetter__("value", el.inputmask.__valueGet),
                        el.__defineSetter__("value", el.inputmask.__valueSet)),
                        el.inputmask = void 0
                    }
                    return el;
                case "getmetadata":
                    if ($.isArray(maskset.metadata)) {
                        var maskTarget = getMaskTemplate(!0, 0, !1).join("");
                        return $.each(maskset.metadata, function(ndx, mtdt) {
                            if (mtdt.mask === maskTarget)
                                return maskTarget = mtdt,
                                !1
                        }),
                        maskTarget
                    }
                    return maskset.metadata
                }
        }
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        function _typeof(obj) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj
            }
            : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            }
            ,
            _typeof(obj)
        }
        var Inputmask = __webpack_require__(1)
          , $ = Inputmask.dependencyLib
          , keyCode = __webpack_require__(0)
          , formatCode = {
            d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
            dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                return pad(Date.prototype.getDate.call(this), 2)
            }
            ],
            ddd: [""],
            dddd: [""],
            m: ["[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                return Date.prototype.getMonth.call(this) + 1
            }
            ],
            mm: ["0[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                return pad(Date.prototype.getMonth.call(this) + 1, 2)
            }
            ],
            mmm: [""],
            mmmm: [""],
            yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                return pad(Date.prototype.getFullYear.call(this), 2)
            }
            ],
            yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                return pad(Date.prototype.getFullYear.call(this), 4)
            }
            ],
            h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
            hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                return pad(Date.prototype.getHours.call(this), 2)
            }
            ],
            hx: [function(x) {
                return "[0-9]{".concat(x, "}")
            }
            , Date.prototype.setHours, "hours", Date.prototype.getHours],
            H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
            HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                return pad(Date.prototype.getHours.call(this), 2)
            }
            ],
            Hx: [function(x) {
                return "[0-9]{".concat(x, "}")
            }
            , Date.prototype.setHours, "hours", Date.prototype.getHours],
            M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
            MM: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                return pad(Date.prototype.getMinutes.call(this), 2)
            }
            ],
            s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
            ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                return pad(Date.prototype.getSeconds.call(this), 2)
            }
            ],
            l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return pad(Date.prototype.getMilliseconds.call(this), 3)
            }
            ],
            L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return pad(Date.prototype.getMilliseconds.call(this), 2)
            }
            ],
            t: ["[ap]"],
            tt: ["[ap]m"],
            T: ["[AP]"],
            TT: ["[AP]M"],
            Z: [""],
            o: [""],
            S: [""]
        }
          , formatAlias = {
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };
        function formatcode(match) {
            var dynMatches = new RegExp("\\d+$").exec(match[0]);
            if (dynMatches && void 0 !== dynMatches[0]) {
                var fcode = formatCode[match[0][0] + "x"].slice("");
                return fcode[0] = fcode[0](dynMatches[0]),
                fcode
            }
            if (formatCode[match[0]])
                return formatCode[match[0]]
        }
        function getTokenizer(opts) {
            if (!opts.tokenizer) {
                var tokens = []
                  , dyntokens = [];
                for (var ndx in formatCode)
                    if (ndx.endsWith("x")) {
                        var dynToken = ndx[0] + "\\d+";
                        -1 === dyntokens.indexOf(dynToken) && dyntokens.push(dynToken)
                    } else
                        -1 === tokens.indexOf(ndx[0]) && tokens.push(ndx[0]);
                opts.tokenizer = "(" + (0 < dyntokens.length ? dyntokens.join("|") + "|" : "") + tokens.join("+|") + ")+?|.",
                opts.tokenizer = new RegExp(opts.tokenizer,"g")
            }
            return opts.tokenizer
        }
        function isValidDate(dateParts, currentResult) {
            return (!isFinite(dateParts.rawday) || "29" == dateParts.day && !isFinite(dateParts.rawyear) || new Date(dateParts.date.getFullYear(),isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1,0).getDate() >= dateParts.day) && currentResult
        }
        function isDateInRange(dateParts, opts) {
            var result = !0;
            if (opts.min) {
                if (dateParts.rawyear) {
                    var rawYear = dateParts.rawyear.replace(/[^0-9]/g, "")
                      , minYear = opts.min.year.substr(0, rawYear.length);
                    result = minYear <= rawYear
                }
                dateParts.year === dateParts.rawyear && opts.min.date.getTime() == opts.min.date.getTime() && (result = opts.min.date.getTime() <= dateParts.date.getTime())
            }
            return result && opts.max && opts.max.date.getTime() == opts.max.date.getTime() && (result = opts.max.date.getTime() >= dateParts.date.getTime()),
            result
        }
        function parse(format, dateObjValue, opts, raw) {
            var mask = "", match, fcode;
            for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(format); )
                if (void 0 === dateObjValue)
                    if (fcode = formatcode(match))
                        mask += "(" + fcode[0] + ")";
                    else
                        switch (match[0]) {
                        case "[":
                            mask += "(";
                            break;
                        case "]":
                            mask += ")?";
                            break;
                        default:
                            mask += Inputmask.escapeRegex(match[0])
                        }
                else if (fcode = formatcode(match))
                    if (!0 !== raw && fcode[3]) {
                        var getFn = fcode[3];
                        mask += getFn.call(dateObjValue.date)
                    } else
                        fcode[2] ? mask += dateObjValue["raw" + fcode[2]] : mask += match[0];
                else
                    mask += match[0];
            return mask
        }
        function pad(val, len) {
            for (val = String(val),
            len = len || 2; val.length < len; )
                val = "0" + val;
            return val
        }
        function analyseMask(maskString, format, opts) {
            var dateObj = {
                date: new Date(1,0,1)
            }, targetProp, mask = maskString, match, dateOperation;
            function extendProperty(value) {
                var correctedValue = value.replace(/[^0-9]/g, "0");
                return correctedValue
            }
            function setValue(dateObj, value, opts) {
                dateObj[targetProp] = extendProperty(value),
                dateObj["raw" + targetProp] = value,
                void 0 !== dateOperation && dateOperation.call(dateObj.date, "month" == targetProp ? parseInt(dateObj[targetProp]) - 1 : dateObj[targetProp])
            }
            if ("string" == typeof mask) {
                for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(format); ) {
                    var value = mask.slice(0, match[0].length);
                    formatCode.hasOwnProperty(match[0]) && (targetProp = formatCode[match[0]][2],
                    dateOperation = formatCode[match[0]][1],
                    setValue(dateObj, value, opts)),
                    mask = mask.slice(value.length)
                }
                return dateObj
            }
            if (mask && "object" === _typeof(mask) && mask.hasOwnProperty("date"))
                return mask
        }
        Inputmask.extendAliases({
            datetime: {
                mask: function mask(opts) {
                    return formatCode.S = opts.i18n.ordinalSuffix.join("|"),
                    opts.inputFormat = formatAlias[opts.inputFormat] || opts.inputFormat,
                    opts.displayFormat = formatAlias[opts.displayFormat] || opts.displayFormat || opts.inputFormat,
                    opts.outputFormat = formatAlias[opts.outputFormat] || opts.outputFormat || opts.inputFormat,
                    opts.placeholder = "" !== opts.placeholder ? opts.placeholder : opts.inputFormat.replace(/[[\]]/, ""),
                    opts.regex = parse(opts.inputFormat, void 0, opts),
                    null
                },
                placeholder: "",
                inputFormat: "isoDateTime",
                displayFormat: void 0,
                outputFormat: void 0,
                min: null,
                max: null,
                skipOptionalPartCharacter: "",
                i18n: {
                    dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    ordinalSuffix: ["st", "nd", "rd", "th"]
                },
                preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
                    if (strict)
                        return !0;
                    var calcPos = 0, targetMatch, match;
                    if (isNaN(c) && buffer[pos] !== c) {
                        for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(opts.inputFormat); )
                            if (calcPos += match[0].length,
                            pos <= calcPos) {
                                targetMatch = match,
                                match = getTokenizer(opts).exec(opts.inputFormat);
                                break
                            }
                        if (match && match[0] === c && 1 < targetMatch[0].length)
                            return buffer[pos] = buffer[pos - 1],
                            buffer[pos - 1] = "0",
                            {
                                fuzzy: !0,
                                buffer: buffer,
                                refreshFromBuffer: {
                                    start: pos - 1,
                                    end: pos + 1
                                },
                                pos: pos + 1
                            }
                    }
                    return !0
                },
                postValidation: function postValidation(buffer, pos, currentResult, opts, maskset, strict) {
                    if (strict)
                        return !0;
                    opts.min = analyseMask(opts.min, opts.inputFormat, opts),
                    opts.max = analyseMask(opts.max, opts.inputFormat, opts),
                    currentResult.fuzzy && (buffer = currentResult.buffer,
                    pos = currentResult.pos);
                    var calcPos = 0, match;
                    for (getTokenizer(opts).lastIndex = 0; (match = getTokenizer(opts).exec(opts.inputFormat)) && (calcPos += match[0].length,
                    !(pos < calcPos)); )
                        ;
                    if (match && match[0] && void 0 !== formatCode[match[0]]) {
                        var validator = formatCode[match[0]][0]
                          , part = buffer.slice(match.index, match.index + match[0].length);
                        !1 === new RegExp(validator).test(part.join("")) && 2 === match[0].length && maskset.validPositions[match.index] && maskset.validPositions[match.index + 1] && (maskset.validPositions[match.index + 1].input = "0")
                    }
                    var result = currentResult
                      , dateParts = analyseMask(buffer.join(""), opts.inputFormat, opts);
                    return result && dateParts.date.getTime() == dateParts.date.getTime() && (result = isValidDate(dateParts, result),
                    result = result && isDateInRange(dateParts, opts)),
                    pos && result && currentResult.pos !== pos ? {
                        buffer: parse(opts.inputFormat, dateParts, opts).split(""),
                        refreshFromBuffer: {
                            start: pos,
                            end: currentResult.pos
                        }
                    } : result
                },
                onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
                    var input = this;
                    if (e.ctrlKey && e.keyCode === keyCode.RIGHT) {
                        var today = new Date, match, date = "";
                        for (getTokenizer(opts).lastIndex = 0; match = getTokenizer(opts).exec(opts.inputFormat); )
                            "d" === match[0].charAt(0) ? date += pad(today.getDate(), match[0].length) : "m" === match[0].charAt(0) ? date += pad(today.getMonth() + 1, match[0].length) : "yyyy" === match[0] ? date += today.getFullYear().toString() : "y" === match[0].charAt(0) && (date += pad(today.getYear(), match[0].length));
                        this.inputmask._valueSet(date),
                        $(this).trigger("setvalue")
                    }
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    return unmaskedValue ? parse(opts.outputFormat, analyseMask(maskedValue, opts.inputFormat, opts), opts, !0) : unmaskedValue
                },
                casing: function casing(elem, test, pos, validPositions) {
                    return 0 == test.nativeDef.indexOf("[ap]") ? elem.toLowerCase() : 0 == test.nativeDef.indexOf("[AP]") ? elem.toUpperCase() : elem
                },
                insertMode: !1,
                shiftPositions: !1,
                keepStatic: !1
            }
        }),
        module.exports = Inputmask
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var Inputmask = __webpack_require__(1)
          , $ = Inputmask.dependencyLib
          , keyCode = __webpack_require__(0);
        function autoEscape(txt, opts) {
            for (var escapedTxt = "", i = 0; i < txt.length; i++)
                Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker.start === txt.charAt(i) || opts.optionalmarker.end === txt.charAt(i) || opts.quantifiermarker.start === txt.charAt(i) || opts.quantifiermarker.end === txt.charAt(i) || opts.groupmarker.start === txt.charAt(i) || opts.groupmarker.end === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? escapedTxt += "\\" + txt.charAt(i) : escapedTxt += txt.charAt(i);
            return escapedTxt
        }
        function alignDigits(buffer, digits, opts, force) {
            if (0 < digits && (!opts.digitsOptional || force)) {
                var radixPosition = $.inArray(opts.radixPoint, buffer);
                -1 === radixPosition && (buffer.push(opts.radixPoint),
                radixPosition = buffer.length - 1);
                for (var i = 1; i <= digits; i++)
                    buffer[radixPosition + i] = buffer[radixPosition + i] || "0"
            }
            return buffer
        }
        function findValidator(symbol, maskset) {
            var posNdx = 0;
            if ("+" === symbol) {
                for (posNdx in maskset.validPositions)
                    ;
                posNdx = parseInt(posNdx)
            }
            for (var tstNdx in maskset.tests)
                if (tstNdx = parseInt(tstNdx),
                posNdx <= tstNdx)
                    for (var ndx = 0, ndxl = maskset.tests[tstNdx].length; ndx < ndxl; ndx++)
                        if ((void 0 === maskset.validPositions[tstNdx] || "-" === symbol) && maskset.tests[tstNdx][ndx].match.def === symbol)
                            return tstNdx + (void 0 !== maskset.validPositions[tstNdx] && "-" !== symbol ? 1 : 0);
            return posNdx
        }
        function findValid(symbol, maskset) {
            var ret = -1;
            return $.each(maskset.validPositions, function(ndx, tst) {
                if (tst && tst.match.def === symbol)
                    return ret = parseInt(ndx),
                    !1
            }),
            ret
        }
        function parseMinMaxOptions(opts) {
            void 0 === opts.parseMinMaxOptions && (null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator),"g"), ""),
            "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, ".")),
            opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN,
            isNaN(opts.min) && (opts.min = Number.MIN_VALUE)),
            null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator),"g"), ""),
            "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, ".")),
            opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN,
            isNaN(opts.max) && (opts.max = Number.MAX_VALUE)),
            opts.parseMinMaxOptions = "done")
        }
        function genMask(opts) {
            opts.repeat = 0,
            opts.groupSeparator === opts.radixPoint && opts.digits && "0" !== opts.digits && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""),
            " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = void 0),
            1 < opts.placeholder.length && (opts.placeholder = opts.placeholder.charAt(0)),
            "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && (opts.positionCaretOnClick = "lvp");
            var decimalDef = "0";
            !0 === opts.numericInput && void 0 === opts.__financeInput ? (decimalDef = "1",
            opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick,
            isNaN(opts.digits) && (opts.digits = 2),
            opts._radixDance = !1) : (opts.__financeInput = !1,
            opts.numericInput = !0);
            var mask = "[+]", altMask;
            if (mask += autoEscape(opts.prefix, opts),
            "" !== opts.groupSeparator ? mask += opts._mask(opts) : mask += "9{+}",
            void 0 !== opts.digits && 0 !== opts.digits) {
                var dq = opts.digits.toString().split(",");
                isFinite(dq[0]) && dq[1] && isFinite(dq[1]) ? mask += opts.radixPoint + decimalDef + "{" + opts.digits + "}" : (isNaN(opts.digits) || 0 < parseInt(opts.digits)) && (opts.digitsOptional ? (altMask = mask + opts.radixPoint + decimalDef + "{0," + opts.digits + "}",
                opts.keepStatic = !0) : mask += opts.radixPoint + decimalDef + "{" + opts.digits + "}")
            }
            return mask += autoEscape(opts.suffix, opts),
            mask += "[-]",
            altMask && (mask = [altMask + autoEscape(opts.suffix, opts) + "[-]", mask]),
            opts.greedy = !1,
            parseMinMaxOptions(opts),
            mask
        }
        function hanndleRadixDance(pos, c, radixPos, opts) {
            return opts._radixDance && opts.numericInput && c !== opts.negationSymbol.back && pos <= radixPos && (0 < radixPos || c == opts.radixPoint) && (pos -= 1),
            pos
        }
        function decimalValidator(chrs, maskset, pos, strict, opts) {
            var radixPos = maskset.buffer ? maskset.buffer.indexOf(opts.radixPoint) : -1
              , result = -1 !== radixPos && new RegExp("[0-9\uff11-\uff19]").test(chrs);
            return opts._radixDance && result && null == maskset.validPositions[radixPos] ? {
                insert: {
                    pos: radixPos === pos ? radixPos + 1 : radixPos,
                    c: opts.radixPoint
                },
                pos: pos
            } : result
        }
        function checkForLeadingZeroes(buffer, opts) {
            try {
                var numberMatches = new RegExp("(^" + ("" !== opts.negationSymbol.front ? Inputmask.escapeRegex(opts.negationSymbol.front) + "?" : "") + Inputmask.escapeRegex(opts.prefix) + ")(.*)(" + Inputmask.escapeRegex(opts.suffix) + ("" != opts.negationSymbol.back ? Inputmask.escapeRegex(opts.negationSymbol.back) + "?" : "") + "$)").exec(buffer.slice().reverse().join(""))
                  , number = numberMatches ? numberMatches[2] : ""
                  , leadingzeroes = !1;
                return number && (number = number.split(opts.radixPoint.charAt(0))[0],
                leadingzeroes = new RegExp("^[0" + opts.groupSeparator + "]*").exec(number)),
                !(!leadingzeroes || !(1 < leadingzeroes[0].length || 0 < leadingzeroes[0].length && leadingzeroes[0].length < number.length)) && leadingzeroes
            } catch (e) {
                console.log(buffer.slice().reverse().join(""))
            }
        }
        Inputmask.extendAliases({
            numeric: {
                mask: genMask,
                _mask: function _mask(opts) {
                    return "(" + opts.groupSeparator + "999){+|1}"
                },
                digits: "*",
                digitsOptional: !0,
                enforceDigitsOnBlur: !1,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                _radixDance: !0,
                groupSeparator: "",
                allowMinus: !0,
                negationSymbol: {
                    front: "-",
                    back: ""
                },
                prefix: "",
                suffix: "",
                min: null,
                max: null,
                step: 1,
                unmaskAsNumber: !1,
                roundingFN: Math.round,
                inputmode: "numeric",
                shortcuts: {
                    k: "000",
                    m: "000000"
                },
                placeholder: "0",
                greedy: !1,
                rightAlign: !0,
                insertMode: !0,
                autoUnmask: !1,
                skipOptionalPartCharacter: "",
                definitions: {
                    0: {
                        validator: decimalValidator
                    },
                    1: {
                        validator: decimalValidator,
                        definitionSymbol: "*"
                    },
                    "+": {
                        validator: function validator(chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && ("-" === chrs || chrs === opts.negationSymbol.front)
                        }
                    },
                    "-": {
                        validator: function validator(chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && chrs === opts.negationSymbol.back
                        }
                    }
                },
                preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
                    if (!1 !== opts.__financeInput && c === opts.radixPoint)
                        return !1;
                    var pattern;
                    if (pattern = opts.shortcuts && opts.shortcuts[c]) {
                        if (1 < pattern.length)
                            for (var inserts = [], i = 0; i < pattern.length; i++)
                                inserts.push({
                                    pos: pos + i,
                                    c: pattern[i],
                                    strict: !1
                                });
                        return {
                            insert: inserts
                        }
                    }
                    var radixPos = $.inArray(opts.radixPoint, buffer);
                    if (pos = hanndleRadixDance(pos, c, radixPos, opts),
                    "-" !== c && c !== opts.negationSymbol.front)
                        return !!strict || (-1 !== radixPos && !0 === opts._radixDance && !1 === isSelection && c === opts.radixPoint && void 0 !== opts.digits && (isNaN(opts.digits) || 0 < parseInt(opts.digits)) && radixPos !== pos ? {
                            caret: opts._radixDance && pos === radixPos - 1 ? radixPos + 1 : radixPos
                        } : {
                            rewritePosition: isSelection && opts.digitsOptional ? caretPos.end : pos
                        });
                    if (!0 !== opts.allowMinus)
                        return !1;
                    var isNegative = !1
                      , front = findValid("+", maskset)
                      , back = findValid("-", maskset);
                    return -1 !== front && (isNegative = [front, back]),
                    !1 !== isNegative ? {
                        remove: isNegative,
                        caret: pos < radixPos ? pos + 1 : pos
                    } : {
                        insert: [{
                            pos: findValidator("+", maskset),
                            c: opts.negationSymbol.front,
                            fromIsValid: !0
                        }, {
                            pos: findValidator("-", maskset),
                            c: opts.negationSymbol.back,
                            fromIsValid: void 0
                        }],
                        caret: pos < radixPos ? pos + 1 : pos
                    }
                },
                postValidation: function postValidation(buffer, pos, currentResult, opts, maskset, strict) {
                    if (strict)
                        return !0;
                    if (null !== opts.min || null !== opts.max) {
                        var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {
                            unmaskAsNumber: !0
                        }));
                        if (null !== opts.min && unmasked < opts.min && (unmasked.toString().length >= opts.min.toString().length || unmasked < 0))
                            return {
                                refreshFromBuffer: !0,
                                buffer: alignDigits(opts.min.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                            };
                        if (null !== opts.max && unmasked > opts.max)
                            return {
                                refreshFromBuffer: !0,
                                buffer: alignDigits(opts.max.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                            }
                    }
                    return currentResult
                },
                onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                    if ("" === unmaskedValue && !0 === opts.nullable)
                        return unmaskedValue;
                    var processValue = maskedValue.replace(opts.prefix, "");
                    return processValue = processValue.replace(opts.suffix, ""),
                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator),"g"), ""),
                    "" !== opts.placeholder.charAt(0) && (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0),"g"), "0")),
                    opts.unmaskAsNumber ? ("" !== opts.radixPoint && -1 !== processValue.indexOf(opts.radixPoint) && (processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".")),
                    processValue = processValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-"),
                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""),
                    Number(processValue)) : processValue
                },
                isComplete: function isComplete(buffer, opts) {
                    var maskedValue = (opts.numericInput ? buffer.slice().reverse() : buffer).join("");
                    return maskedValue = maskedValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-"),
                    maskedValue = maskedValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""),
                    maskedValue = maskedValue.replace(opts.prefix, ""),
                    maskedValue = maskedValue.replace(opts.suffix, ""),
                    maskedValue = maskedValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator) + "([0-9]{3})","g"), "$1"),
                    "," === opts.radixPoint && (maskedValue = maskedValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".")),
                    isFinite(maskedValue)
                },
                onBeforeMask: function onBeforeMask(initialValue, opts) {
                    var radixPoint = opts.radixPoint || ",";
                    "number" != typeof initialValue && "number" !== opts.inputType || "" === radixPoint || (initialValue = initialValue.toString().replace(".", radixPoint));
                    var valueParts = initialValue.split(radixPoint)
                      , integerPart = valueParts[0].replace(/[^\-0-9]/g, "")
                      , decimalPart = 1 < valueParts.length ? valueParts[1].replace(/[^0-9]/g, "") : ""
                      , forceDigits = 1 < valueParts.length;
                    initialValue = integerPart + ("" !== decimalPart ? radixPoint + decimalPart : decimalPart);
                    var digits = 0;
                    if ("" !== radixPoint && (digits = decimalPart.length,
                    "" !== decimalPart)) {
                        var digitsFactor = Math.pow(10, digits || 1);
                        isFinite(opts.digits) && (digits = parseInt(opts.digits),
                        digitsFactor = Math.pow(10, digits)),
                        initialValue = initialValue.replace(Inputmask.escapeRegex(radixPoint), "."),
                        isFinite(initialValue) && (initialValue = opts.roundingFN(parseFloat(initialValue) * digitsFactor) / digitsFactor),
                        initialValue = initialValue.toString().replace(".", radixPoint)
                    }
                    if (0 === opts.digits && -1 !== initialValue.indexOf(Inputmask.escapeRegex(radixPoint)) && (initialValue = initialValue.substring(0, initialValue.indexOf(Inputmask.escapeRegex(radixPoint)))),
                    null !== opts.min || null !== opts.max) {
                        var numberValue = initialValue.toString().replace(radixPoint, ".");
                        null !== opts.min && numberValue < opts.min ? initialValue = opts.min.toString().replace(".", radixPoint) : null !== opts.max && numberValue > opts.max && (initialValue = opts.max.toString().replace(".", radixPoint))
                    }
                    return alignDigits(initialValue.toString().split(""), digits, opts, forceDigits).join("")
                },
                onBeforeWrite: function onBeforeWrite(e, buffer, caretPos, opts) {
                    function stripBuffer(buffer, stripRadix) {
                        if (!1 !== opts.__financeInput || stripRadix) {
                            var position = $.inArray(opts.radixPoint, buffer);
                            -1 !== position && buffer.splice(position, 1)
                        }
                        if ("" !== opts.groupSeparator)
                            for (; -1 !== (position = buffer.indexOf(opts.groupSeparator)); )
                                buffer.splice(position, 1);
                        return buffer
                    }
                    var result, leadingzeroes = checkForLeadingZeroes(buffer, opts);
                    if (leadingzeroes) {
                        var buf = buffer.slice().reverse()
                          , caretNdx = buf.join("").indexOf(leadingzeroes[0]);
                        buf.splice(caretNdx, leadingzeroes[0].length);
                        var newCaretPos = buf.length - caretNdx;
                        stripBuffer(buf),
                        result = {
                            refreshFromBuffer: !0,
                            buffer: buf.reverse(),
                            caret: caretPos < newCaretPos ? caretPos : newCaretPos
                        }
                    }
                    if (e)
                        switch (e.type) {
                        case "blur":
                        case "checkval":
                            if (null !== opts.min) {
                                var unmasked = opts.onUnMask(buffer.slice().reverse().join(""), void 0, $.extend({}, opts, {
                                    unmaskAsNumber: !0
                                }));
                                if (null !== opts.min && unmasked < opts.min)
                                    return {
                                        refreshFromBuffer: !0,
                                        buffer: alignDigits(opts.min.toString().replace(".", opts.radixPoint).split(""), opts.digits, opts).reverse()
                                    }
                            }
                            if ("" !== opts.radixPoint && buffer[0] === opts.radixPoint)
                                result && result.buffer ? result.buffer.shift() : (buffer.shift(),
                                result = {
                                    refreshFromBuffer: !0,
                                    buffer: stripBuffer(buffer)
                                });
                            else if (buffer[buffer.length - 1] === opts.negationSymbol.front) {
                                var nmbrMtchs = new RegExp("(^" + ("" != opts.negationSymbol.front ? Inputmask.escapeRegex(opts.negationSymbol.front) + "?" : "") + Inputmask.escapeRegex(opts.prefix) + ")(.*)(" + Inputmask.escapeRegex(opts.suffix) + ("" != opts.negationSymbol.back ? Inputmask.escapeRegex(opts.negationSymbol.back) + "?" : "") + "$)").exec(stripBuffer(buffer.slice(), !0).reverse().join(""))
                                  , number = nmbrMtchs ? nmbrMtchs[2] : "";
                                0 == number && (result = {
                                    refreshFromBuffer: !0,
                                    buffer: [0]
                                })
                            }
                        }
                    return result
                },
                onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
                    var $input = $(this), bffr;
                    if (e.ctrlKey)
                        switch (e.keyCode) {
                        case keyCode.UP:
                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)),
                            $input.trigger("setvalue"),
                            !1;
                        case keyCode.DOWN:
                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)),
                            $input.trigger("setvalue"),
                            !1
                        }
                    if (!e.shiftKey && (e.keyCode === keyCode.DELETE || e.keyCode === keyCode.BACKSPACE || e.keyCode === keyCode.BACKSPACE_SAFARI)) {
                        if (buffer[e.keyCode === keyCode.DELETE ? caretPos.begin - 1 : caretPos.end] === opts.negationSymbol.front)
                            return bffr = buffer.slice().reverse(),
                            "" !== opts.negationSymbol.front && bffr.shift(),
                            "" !== opts.negationSymbol.back && bffr.pop(),
                            $input.trigger("setvalue", [bffr.join(""), caretPos.begin]),
                            !1;
                        if (!0 === opts._radixDance) {
                            var radixPos = $.inArray(opts.radixPoint, buffer);
                            if (opts.digitsOptional) {
                                if (0 === radixPos)
                                    return bffr = buffer.slice().reverse(),
                                    bffr.pop(),
                                    $input.trigger("setvalue", [bffr.join(""), caretPos.begin >= bffr.length ? bffr.length : caretPos.begin]),
                                    !1
                            } else if (-1 !== radixPos && (caretPos.begin < radixPos || caretPos.end < radixPos || e.keyCode === keyCode.DELETE && caretPos.begin === radixPos))
                                return caretPos.begin !== caretPos.end || e.keyCode !== keyCode.BACKSPACE && e.keyCode !== keyCode.BACKSPACE_SAFARI || caretPos.begin++,
                                bffr = buffer.slice().reverse(),
                                bffr.splice(bffr.length - caretPos.begin, caretPos.begin - caretPos.end + 1),
                                bffr = alignDigits(bffr, opts.digits, opts).join(""),
                                $input.trigger("setvalue", [bffr, caretPos.begin >= bffr.length ? radixPos + 1 : caretPos.begin]),
                                !1
                        }
                    }
                }
            },
            currency: {
                prefix: "$ ",
                groupSeparator: ",",
                alias: "numeric",
                digits: 2,
                digitsOptional: !1
            },
            decimal: {
                alias: "numeric"
            },
            integer: {
                alias: "numeric",
                digits: 0
            },
            percentage: {
                alias: "numeric",
                min: 0,
                max: 100,
                suffix: " %",
                digits: 0,
                allowMinus: !1
            },
            indianns: {
                alias: "numeric",
                _mask: function _mask(opts) {
                    return "(" + opts.groupSeparator + "99){*|1}(" + opts.groupSeparator + "999){1|1}"
                },
                groupSeparator: ",",
                radixPoint: ".",
                placeholder: "0",
                digits: 2,
                digitsOptional: !1
            }
        }),
        module.exports = Inputmask
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        function _typeof(obj) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj
            }
            : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            }
            ,
            _typeof(obj)
        }
        var $ = __webpack_require__(3)
          , Inputmask = __webpack_require__(1);
        void 0 === $.fn.inputmask && ($.fn.inputmask = function(fn, options) {
            var nptmask, input = this[0];
            if (void 0 === options && (options = {}),
            "string" == typeof fn)
                switch (fn) {
                case "unmaskedvalue":
                    return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();
                case "remove":
                    return this.each(function() {
                        this.inputmask && this.inputmask.remove()
                    });
                case "getemptymask":
                    return input && input.inputmask ? input.inputmask.getemptymask() : "";
                case "hasMaskedValue":
                    return !(!input || !input.inputmask) && input.inputmask.hasMaskedValue();
                case "isComplete":
                    return !input || !input.inputmask || input.inputmask.isComplete();
                case "getmetadata":
                    return input && input.inputmask ? input.inputmask.getmetadata() : void 0;
                case "setvalue":
                    Inputmask.setValue(input, options);
                    break;
                case "option":
                    if ("string" != typeof options)
                        return this.each(function() {
                            if (void 0 !== this.inputmask)
                                return this.inputmask.option(options)
                        });
                    if (input && void 0 !== input.inputmask)
                        return input.inputmask.option(options);
                    break;
                default:
                    return options.alias = fn,
                    nptmask = new Inputmask(options),
                    this.each(function() {
                        nptmask.mask(this)
                    })
                }
            else {
                if (Array.isArray(fn))
                    return options.alias = fn,
                    nptmask = new Inputmask(options),
                    this.each(function() {
                        nptmask.mask(this)
                    });
                if ("object" == _typeof(fn))
                    return nptmask = new Inputmask(fn),
                    void 0 === fn.mask && void 0 === fn.alias ? this.each(function() {
                        if (void 0 !== this.inputmask)
                            return this.inputmask.option(fn);
                        nptmask.mask(this)
                    }) : this.each(function() {
                        nptmask.mask(this)
                    });
                if (void 0 === fn)
                    return this.each(function() {
                        nptmask = new Inputmask(options),
                        nptmask.mask(this)
                    })
            }
        }
        )
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var im = __webpack_require__(6)
          , jQuery = __webpack_require__(3);
        im.dependencyLib === jQuery && __webpack_require__(11),
        module.exports = im
    }
    ],
    installedModules = {},
    __webpack_require__.m = modules,
    __webpack_require__.c = installedModules,
    __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        })
    }
    ,
    __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(exports, "__esModule", {
            value: !0
        })
    }
    ,
    __webpack_require__.t = function(value, mode) {
        if (1 & mode && (value = __webpack_require__(value)),
        8 & mode)
            return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule)
            return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns),
        Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }),
        2 & mode && "string" != typeof value)
            for (var key in value)
                __webpack_require__.d(ns, key, function(key) {
                    return value[key]
                }
                .bind(null, key));
        return ns
    }
    ,
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module.default
        }
        : function getModuleExports() {
            return module
        }
        ;
        return __webpack_require__.d(getter, "a", getter),
        getter
    }
    ,
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property)
    }
    ,
    __webpack_require__.p = "",
    __webpack_require__(__webpack_require__.s = 12);
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId])
            return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__),
        module.l = !0,
        module.exports
    }
    var modules, installedModules
});
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 */
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function() {
    return o = {},
    r.m = n = [function(t, e) {
        t.exports = function(t) {
            var e;
            if ("SELECT" === t.nodeName)
                t.focus(),
                e = t.value;
            else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                var n = t.hasAttribute("readonly");
                n || t.setAttribute("readonly", ""),
                t.select(),
                t.setSelectionRange(0, t.value.length),
                n || t.removeAttribute("readonly"),
                e = t.value
            } else {
                t.hasAttribute("contenteditable") && t.focus();
                var o = window.getSelection()
                  , r = document.createRange();
                r.selectNodeContents(t),
                o.removeAllRanges(),
                o.addRange(r),
                e = o.toString()
            }
            return e
        }
    }
    , function(t, e) {
        function n() {}
        n.prototype = {
            on: function(t, e, n) {
                var o = this.e || (this.e = {});
                return (o[t] || (o[t] = [])).push({
                    fn: e,
                    ctx: n
                }),
                this
            },
            once: function(t, e, n) {
                var o = this;
                function r() {
                    o.off(t, r),
                    e.apply(n, arguments)
                }
                return r._ = e,
                this.on(t, r, n)
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++)
                    n[o].fn.apply(n[o].ctx, e);
                return this
            },
            off: function(t, e) {
                var n = this.e || (this.e = {})
                  , o = n[t]
                  , r = [];
                if (o && e)
                    for (var i = 0, a = o.length; i < a; i++)
                        o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                return r.length ? n[t] = r : delete n[t],
                this
            }
        },
        t.exports = n,
        t.exports.TinyEmitter = n
    }
    , function(t, e, n) {
        var d = n(3)
          , h = n(4);
        t.exports = function(t, e, n) {
            if (!t && !e && !n)
                throw new Error("Missing required arguments");
            if (!d.string(e))
                throw new TypeError("Second argument must be a String");
            if (!d.fn(n))
                throw new TypeError("Third argument must be a Function");
            if (d.node(t))
                return s = e,
                f = n,
                (u = t).addEventListener(s, f),
                {
                    destroy: function() {
                        u.removeEventListener(s, f)
                    }
                };
            if (d.nodeList(t))
                return a = t,
                c = e,
                l = n,
                Array.prototype.forEach.call(a, function(t) {
                    t.addEventListener(c, l)
                }),
                {
                    destroy: function() {
                        Array.prototype.forEach.call(a, function(t) {
                            t.removeEventListener(c, l)
                        })
                    }
                };
            if (d.string(t))
                return o = t,
                r = e,
                i = n,
                h(document.body, o, r, i);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            var o, r, i, a, c, l, u, s, f
        }
    }
    , function(t, n) {
        n.node = function(t) {
            return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
        }
        ,
        n.nodeList = function(t) {
            var e = Object.prototype.toString.call(t);
            return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length"in t && (0 === t.length || n.node(t[0]))
        }
        ,
        n.string = function(t) {
            return "string" == typeof t || t instanceof String
        }
        ,
        n.fn = function(t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        }
    }
    , function(t, e, n) {
        var a = n(5);
        function i(t, e, n, o, r) {
            var i = function(e, n, t, o) {
                return function(t) {
                    t.delegateTarget = a(t.target, n),
                    t.delegateTarget && o.call(e, t)
                }
            }
            .apply(this, arguments);
            return t.addEventListener(n, i, r),
            {
                destroy: function() {
                    t.removeEventListener(n, i, r)
                }
            }
        }
        t.exports = function(t, e, n, o, r) {
            return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)),
            Array.prototype.map.call(t, function(t) {
                return i(t, e, n, o, r)
            }))
        }
    }
    , function(t, e) {
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var n = Element.prototype;
            n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
        }
        t.exports = function(t, e) {
            for (; t && 9 !== t.nodeType; ) {
                if ("function" == typeof t.matches && t.matches(e))
                    return t;
                t = t.parentNode
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(0)
          , r = n.n(o)
          , i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        function a(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
            }
        }
        function c(t) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, c),
            this.resolveOptions(t),
            this.initSelection()
        }
        var l = (function(t, e, n) {
            return e && a(t.prototype, e),
            n && a(t, n),
            t
        }(c, [{
            key: "resolveOptions",
            value: function(t) {
                var e = 0 < arguments.length && void 0 !== t ? t : {};
                this.action = e.action,
                this.container = e.container,
                this.emitter = e.emitter,
                this.target = e.target,
                this.text = e.text,
                this.trigger = e.trigger,
                this.selectedText = ""
            }
        }, {
            key: "initSelection",
            value: function() {
                this.text ? this.selectFake() : this.target && this.selectTarget()
            }
        }, {
            key: "selectFake",
            value: function() {
                var t = this
                  , e = "rtl" == document.documentElement.getAttribute("dir");
                this.removeFake(),
                this.fakeHandlerCallback = function() {
                    return t.removeFake()
                }
                ,
                this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                this.fakeElem = document.createElement("textarea"),
                this.fakeElem.style.fontSize = "12pt",
                this.fakeElem.style.border = "0",
                this.fakeElem.style.padding = "0",
                this.fakeElem.style.margin = "0",
                this.fakeElem.style.position = "absolute",
                this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                var n = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = n + "px",
                this.fakeElem.setAttribute("readonly", ""),
                this.fakeElem.value = this.text,
                this.container.appendChild(this.fakeElem),
                this.selectedText = r()(this.fakeElem),
                this.copyText()
            }
        }, {
            key: "removeFake",
            value: function() {
                this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback),
                this.fakeHandler = null,
                this.fakeHandlerCallback = null),
                this.fakeElem && (this.container.removeChild(this.fakeElem),
                this.fakeElem = null)
            }
        }, {
            key: "selectTarget",
            value: function() {
                this.selectedText = r()(this.target),
                this.copyText()
            }
        }, {
            key: "copyText",
            value: function() {
                var e = void 0;
                try {
                    e = document.execCommand(this.action)
                } catch (t) {
                    e = !1
                }
                this.handleResult(e)
            }
        }, {
            key: "handleResult",
            value: function(t) {
                this.emitter.emit(t ? "success" : "error", {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                })
            }
        }, {
            key: "clearSelection",
            value: function() {
                this.trigger && this.trigger.focus(),
                document.activeElement.blur(),
                window.getSelection().removeAllRanges()
            }
        }, {
            key: "destroy",
            value: function() {
                this.removeFake()
            }
        }, {
            key: "action",
            set: function(t) {
                var e = 0 < arguments.length && void 0 !== t ? t : "copy";
                if (this._action = e,
                "copy" !== this._action && "cut" !== this._action)
                    throw new Error('Invalid "action" value, use either "copy" or "cut"')
            },
            get: function() {
                return this._action
            }
        }, {
            key: "target",
            set: function(t) {
                if (void 0 !== t) {
                    if (!t || "object" !== (void 0 === t ? "undefined" : i(t)) || 1 !== t.nodeType)
                        throw new Error('Invalid "target" value, use a valid Element');
                    if ("copy" === this.action && t.hasAttribute("disabled"))
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled")))
                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                    this._target = t
                }
            },
            get: function() {
                return this._target
            }
        }]),
        c)
          , u = n(1)
          , s = n.n(u)
          , f = n(2)
          , d = n.n(f)
          , h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , p = function(t, e, n) {
            return e && y(t.prototype, e),
            n && y(t, n),
            t
        };
        function y(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
            }
        }
        var m = (function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(v, s.a),
        p(v, [{
            key: "resolveOptions",
            value: function(t) {
                var e = 0 < arguments.length && void 0 !== t ? t : {};
                this.action = "function" == typeof e.action ? e.action : this.defaultAction,
                this.target = "function" == typeof e.target ? e.target : this.defaultTarget,
                this.text = "function" == typeof e.text ? e.text : this.defaultText,
                this.container = "object" === h(e.container) ? e.container : document.body
            }
        }, {
            key: "listenClick",
            value: function(t) {
                var e = this;
                this.listener = d()(t, "click", function(t) {
                    return e.onClick(t)
                })
            }
        }, {
            key: "onClick",
            value: function(t) {
                var e = t.delegateTarget || t.currentTarget;
                this.clipboardAction && (this.clipboardAction = null),
                this.clipboardAction = new l({
                    action: this.action(e),
                    target: this.target(e),
                    text: this.text(e),
                    container: this.container,
                    trigger: e,
                    emitter: this
                })
            }
        }, {
            key: "defaultAction",
            value: function(t) {
                return b("action", t)
            }
        }, {
            key: "defaultTarget",
            value: function(t) {
                var e = b("target", t);
                if (e)
                    return document.querySelector(e)
            }
        }, {
            key: "defaultText",
            value: function(t) {
                return b("text", t)
            }
        }, {
            key: "destroy",
            value: function() {
                this.listener.destroy(),
                this.clipboardAction && (this.clipboardAction.destroy(),
                this.clipboardAction = null)
            }
        }], [{
            key: "isSupported",
            value: function(t) {
                var e = 0 < arguments.length && void 0 !== t ? t : ["copy", "cut"]
                  , n = "string" == typeof e ? [e] : e
                  , o = !!document.queryCommandSupported;
                return n.forEach(function(t) {
                    o = o && !!document.queryCommandSupported(t)
                }),
                o
            }
        }]),
        v);
        function v(t, e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, v);
            var n = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this));
            return n.resolveOptions(e),
            n.listenClick(t),
            n
        }
        function b(t, e) {
            var n = "data-clipboard-" + t;
            if (e.hasAttribute(n))
                return e.getAttribute(n)
        }
        e.default = m
    }
    ],
    r.c = o,
    r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                r.d(n, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return n
    }
    ,
    r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return r.d(e, "a", e),
        e
    }
    ,
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    r.p = "",
    r(r.s = 6).default;
    function r(t) {
        if (o[t])
            return o[t].exports;
        var e = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return n[t].call(e.exports, e, e.exports, r),
        e.l = !0,
        e.exports
    }
    var n, o
});