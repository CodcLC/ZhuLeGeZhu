var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var a = (function () {
    function e() {
        (this.keys = new Proxy(
            {},
            {
                get: function (e, t) {
                    return t;
                }
            }
        )),
            (this._valueMap = {}),
            (this._unuseHandlers = []);
    }
    return (
        (e.prototype.on = function (e, t, o, a, n) {
            if ("string" == typeof e) {
                if (!t) return;
                this._addHandler(this._getHandler(e, t, o, a, n));
            } else if (this._isArr(e)) for (var i = e, r = 0; r < i.length; r++) this._addHandler(i[r]);
            else this._addHandler(e);
        }),
        (e.prototype.has = function (e) {
            return this._handlerMap && !!this._handlerMap[e];
        }),
        (e.prototype.offAllByContext = function (e) {
            var t = this._handlerMap;
            if (e && t) for (var o in t) t[o] && this.off(o, null, e);
        }),
        (e.prototype.offAll = function (e) {
            if (!this._isStringNull(e)) {
                var t = this._handlerMap,
                    o = this._stickHandlersMap,
                    a = this._valueMap;
                if ((o && (o[e] = void 0), t)) {
                    var n = t[e];
                    if (this._isArr(n)) for (var i = 0; i < n.length; i++) this._recoverHandler(n[i]);
                    else this._recoverHandler(n);
                    t[e] = void 0;
                }
                a && (a[e] = void 0);
            }
        }),
        (e.prototype.off = function (e, t, o, a) {
            if (!this._isStringNull(e)) {
                var n = this._handlerMap;
                if (!n || !n[e]) return this;
                var i = n[e];
                if (null != i) {
                    var r = void 0;
                    if (this._isArr(i)) {
                        for (var c = (r = i).length - 1, l = c; l >= 0; l--)
                            !(i = r[l]) ||
                                (o && i.context !== o) ||
                                (null != t && i.listener !== t) ||
                                (a && !i.once) ||
                                (l !== (c = r.length - 1) && ((i = r[c]), (r[c] = r[l]), (r[l] = i)),
                                this._recoverHandler(r.pop()));
                        r.length || (n[e] = void 0);
                    } else
                        (o && i.context !== o) ||
                            (null != t && i.listener !== t) ||
                            (a && !i.once) ||
                            (this._recoverHandler(i), (n[e] = void 0));
                }
                return this;
            }
        }),
        (e.prototype.broadcast = function (t, o, a, n) {
            var i = this._handlerMap;
            if (i) {
                var r = i[t];
                if (n) {
                    var c = this._valueMap;
                    c || ((c = {}), (this._valueMap = c)), (c[t] = o);
                }
                if (r)
                    if (this._isArr(r)) {
                        for (var l = r, s = ((d = void 0), l.length - 1), u = s; u >= 0; u--)
                            (d = l[u]),
                                o ? e._runHandlerWithData(d, o, a) : e._runHandler(d, a),
                                d.once &&
                                    ((d = l[(s = l.length - 1)]),
                                    (l[s] = l[u]),
                                    (l[u] = d),
                                    this._recoverHandler(l.pop()));
                        l.length || (this._handlerMap[t] = void 0);
                    } else {
                        var d = r;
                        o ? e._runHandlerWithData(d, o, a) : e._runHandler(d, a),
                            d.once && (this._recoverHandler(d), (this._handlerMap[t] = void 0));
                    }
            }
        }),
        (e.prototype.stickyBroadcast = function (e, t, o, a) {
            if (!this._isStringNull(e)) {
                var n = this._handlerMap;
                if (n && n[e]) this.broadcast(e, t, o, a);
                else {
                    var i = this._stickHandlersMap;
                    i || ((i = {}), (this._stickHandlersMap = i));
                    var r = i[e],
                        c = {key: e, value: t, callback: o, persistence: a};
                    r ? r.push(c) : (i[e] = [c]);
                }
            }
        }),
        (e.prototype._isStringNull = function (e) {
            return !e || "" === e.trim();
        }),
        (e.prototype._isArr = function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
        }),
        (e._runHandlerWithData = function (e, t, o) {
            if (null == e.listener) return null;
            var a;
            if (null == t) {
                var n = e.args ? e.args.unshift(o) : [o];
                a = e.listener.apply(e.context, n);
            } else
                a =
                    (e.args || t.unshift) && e.args
                        ? e.listener.apply(e.context, [t, o].concat(e.args))
                        : e.listener.apply(e.context, [t, o]);
            return a;
        }),
        (e._runHandler = function (e, t) {
            if (null == e.listener) return null;
            var o = e.args ? e.args.unshift(t) : [t];
            return e.listener.apply(e.context, o);
        }),
        (e.prototype._recoverHandler = function (e) {
            (e.args = void 0),
                (e.context = void 0),
                (e.listener = void 0),
                (e.key = void 0),
                this._unuseHandlers.push(e);
        }),
        (e.prototype._getHandler = function (e, t, o, a, n) {
            var i,
                r = this._unuseHandlers;
            return (
                ((i = r.length ? r.pop() : {}).key = e),
                (i.listener = t),
                (i.context = o),
                (i.once = a),
                (i.args = n),
                i
            );
        }),
        (e.prototype._addHandler = function (e) {
            var t = this._handlerMap;
            e.once && this.off(e.key, e.listener, e.context, e.once), t || ((t = {}), (this._handlerMap = t));
            var o = t[e.key];
            o ? (this._isArr(o) ? o.push(e) : (t[e.key] = [o, e])) : (t[e.key] = e);
            var a = this._stickHandlersMap;
            if (a) {
                var n = a[e.key];
                if (n) {
                    for (var i, r = 0; r < n.length; r++)
                        (i = n[r]), this.broadcast(i.key, i.value, i.callback, i.persistence);
                    a[i.key] = void 0;
                }
            }
            e.key !== this.keys.onListenerOn && this.broadcast(this.keys.onListenerOn, e.key);
        }),
        (e.prototype.value = function (e) {
            return this._valueMap && this._valueMap[e];
        }),
        (e.prototype.dispose = function () {
            (this._handlerMap = void 0), (this._stickHandlersMap = void 0), (this._valueMap = void 0);
        }),
        e
    );
})();
o.Broadcast = a;
