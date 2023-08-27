var e = require;
var t = module;
var o = exports;
var a =
        (this && this.__awaiter) ||
        function (e, t, o, a) {
            return new (o || (o = Promise))(function (n, i) {
                function r(e) {
                    try {
                        l(a.next(e));
                    } catch (e) {
                        i(e);
                    }
                }
                function c(e) {
                    try {
                        l(a.throw(e));
                    } catch (e) {
                        i(e);
                    }
                }
                function l(e) {
                    var t;
                    e.done
                        ? n(e.value)
                        : ((t = e.value),
                          t instanceof o
                              ? t
                              : new o(function (e) {
                                    e(t);
                                })).then(r, c);
                }
                l((a = a.apply(e, t || [])).next());
            });
        },
    c =
        (this && this.__generator) ||
        function (e, t) {
            var o,
                a,
                n,
                i,
                r = {
                    label: 0,
                    sent: function () {
                        if (1 & n[0]) throw n[1];
                        return n[1];
                    },
                    trys: [],
                    ops: []
                };
            return (
                (i = {next: c(0), throw: c(1), return: c(2)}),
                "function" == typeof Symbol &&
                    (i[Symbol.iterator] = function () {
                        return this;
                    }),
                i
            );
            function c(e) {
                return function (t) {
                    return l([e, t]);
                };
            }
            function l(i) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; r; )
                    try {
                        if (
                            ((o = 1),
                            a &&
                                (n =
                                    2 & i[0]
                                        ? a.return
                                        : i[0]
                                        ? a.throw || ((n = a.return) && n.call(a), 0)
                                        : a.next) &&
                                !(n = n.call(a, i[1])).done)
                        )
                            return n;
                        switch (((a = 0), n && (i = [2 & i[0], n.value]), i[0])) {
                            case 0:
                            case 1:
                                n = i;
                                break;
                            case 4:
                                return r.label++, {value: i[1], done: !1};
                            case 5:
                                r.label++, (a = i[1]), (i = [0]);
                                continue;
                            case 7:
                                (i = r.ops.pop()), r.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = r.trys).length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    r = 0;
                                    continue;
                                }
                                if (3 === i[0] && (!n || (i[1] > n[0] && i[1] < n[3]))) {
                                    r.label = i[1];
                                    break;
                                }
                                if (6 === i[0] && r.label < n[1]) {
                                    (r.label = n[1]), (n = i);
                                    break;
                                }
                                if (n && r.label < n[2]) {
                                    (r.label = n[2]), r.ops.push(i);
                                    break;
                                }
                                n[2] && r.ops.pop(), r.trys.pop();
                                continue;
                        }
                        i = t.call(e, r);
                    } catch (e) {
                        (i = [6, e]), (a = 0);
                    } finally {
                        o = n = 0;
                    }
                if (5 & i[0]) throw i[1];
                return {value: i[0] ? i[1] : void 0, done: !0};
            }
        };
Object.defineProperty(o, "__esModule", {value: !0}), (o.PopupParams = o.PopupShowResult = o.PopupCacheMode = void 0);
var l,
    s,
    u = e("PopupBase");
(function (e) {
    (e[(e.Once = 1)] = "Once"), (e[(e.Normal = 2)] = "Normal"), (e[(e.Frequent = 3)] = "Frequent");
})((l = o.PopupCacheMode || (o.PopupCacheMode = {}))),
    (function (e) {
        (e[(e.Done = 1)] = "Done"), (e[(e.Failed = 2)] = "Failed"), (e[(e.Waiting = 3)] = "Waiting");
    })((s = o.PopupShowResult || (o.PopupShowResult = {})));
var d = (function () {
    function e() {}
    return (
        Object.defineProperty(e, "prefabCache", {
            get: function () {
                return this._prefabCache;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e, "nodeCache", {
            get: function () {
                return this._nodeCache;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e, "current", {
            get: function () {
                return this._current;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e, "queue", {
            get: function () {
                return this._queue;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e, "suspended", {
            get: function () {
                return this._suspended;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e, "CacheMode", {
            get: function () {
                return l;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e, "ShowResult", {
            get: function () {
                return s;
            },
            enumerable: !1,
            configurable: !0
        }),
        (e.show = function (t, o, l, d) {
            var p = this;
            if (e.oldPopubPath != t || !e.popubLock || (l && (l.immediately || l.isNoHideCurrent)))
                return (
                    (e.popubLock = !0),
                    clearTimeout(e.timeRes),
                    (e.timeRes = setTimeout(function () {
                        e.popubLock = !1;
                    }, 2e3)),
                    new Promise(function (e) {
                        return a(p, void 0, void 0, function () {
                            var i,
                                r,
                                p,
                                f,
                                h = this;
                            return c(this, function (y) {
                                switch (y.label) {
                                    case 0:
                                        return (
                                            (l = this.parseParams(l)),
                                            this._current || this.locked
                                                ? l && (l.immediately || l.isNoHideCurrent)
                                                    ? ((this.locked = !1),
                                                      l.isNoHideCurrent ? [4, this.changeShow()] : [3, 2])
                                                    : [3, 5]
                                                : [3, 6]
                                        );
                                    case 1:
                                        return y.sent(), [3, 4];
                                    case 2:
                                        return [4, this.suspend()];
                                    case 3:
                                        y.sent(), (y.label = 4);
                                    case 4:
                                        return [3, 6];
                                    case 5:
                                        return [2];
                                    case 6:
                                        return (
                                            (this._current = {path: t, options: o, params: l}),
                                            (i = this.getNodeFromCache(t)),
                                            cc.isValid(i)
                                                ? [3, 8]
                                                : (this.loadStartCallback && this.loadStartCallback(),
                                                  [4, this.load(t)])
                                        );
                                    case 7:
                                        if (
                                            ((r = y.sent()),
                                            this.loadFinishCallback && this.loadFinishCallback(),
                                            !cc.isValid(r))
                                        )
                                            return (
                                                cc.warn("[PopupManager]", "弹窗加载失败", t),
                                                (this._current = null),
                                                e(s.Failed),
                                                [2]
                                            );
                                        ((i = cc.instantiate(r)).active = !1), (y.label = 8);
                                    case 8:
                                        return (p = i.getComponent(u.default))
                                            ? ((this._current.popup = p),
                                              (this._current.node = i),
                                              d
                                                  ? i.setParent(d)
                                                  : i.setParent(this.container || cc.Canvas.instance.node),
                                              i.setSiblingIndex(cc.macro.MAX_ZINDEX),
                                              (f = function (o) {
                                                  return a(h, void 0, void 0, function () {
                                                      var a = this;
                                                      return c(this, function (r) {
                                                          switch (r.label) {
                                                              case 0:
                                                                  return o
                                                                      ? [2]
                                                                      : ((this.locked =
                                                                            this._suspended.length > 0 ||
                                                                            this._queue.length > 0),
                                                                        this.recycle(t, i, l.mode),
                                                                        (this._current = null),
                                                                        e(s.Done),
                                                                        [
                                                                            4,
                                                                            new Promise(function (e) {
                                                                                cc.Canvas.instance.scheduleOnce(
                                                                                    e,
                                                                                    a.interval
                                                                                );
                                                                            })
                                                                        ]);
                                                              case 1:
                                                                  return r.sent(), this.next(l), [2];
                                                          }
                                                      });
                                                  });
                                              }),
                                              p.setFinishCallback(f),
                                              p.show(o),
                                              [2])
                                            : (cc.warn("[PopupManager]", "未找到弹窗组件", t),
                                              (this._current = null),
                                              e(s.Failed),
                                              [2]);
                                }
                            });
                        });
                    })
                );
        }),
        (e.hide = function () {
            this._current && this._current.popup && this._current.popup.hide();
        }),
        (e.hideAll = function () {
            for (; this._suspended.length > 0; ) {
                var e = this._suspended.shift();
                this.recycle(e.path, e.node, e.params.mode);
            }
            (this.locked = !1), (this._current = null);
        }),
        (e.getNodeFromCache = function (e) {
            var t = this._nodeCache;
            if (t.has(e)) {
                var o = t.get(e);
                if (cc.isValid(o)) return o;
                t.delete(e);
            }
            var a = this._prefabCache;
            if (a.has(e)) {
                var n = a.get(e);
                if (cc.isValid(n)) return cc.instantiate(n);
                a.delete(e);
            }
            return null;
        }),
        (e.next = function (e) {
            if (!(this._current || (0 === this._suspended.length && 0 === this._queue.length))) {
                var t = null;
                if (
                    ((t = this._suspended.length > 0 ? this._suspended.shift() : this._queue.shift()),
                    (this.locked = !1),
                    cc.isValid(t.popup))
                )
                    return (this._current = t), void (e.isNoHideCurrent || t.popup.show(t.options));
                e.isNoHideCurrent || this.show(t.path, t.options, t.params);
            }
        }),
        (e.push = function (e, t, o) {
            this._current || this.locked
                ? (this._queue.push({path: e, options: t, params: o}),
                  this._queue.sort(function (e, t) {
                      return e.params.priority - t.params.priority;
                  }))
                : this.show(e, t, o);
        }),
        (e.suspend = function () {
            return a(this, void 0, void 0, function () {
                var e;
                return c(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this._current
                                ? ((e = this._current), this._suspended.push(e), [4, e.popup.hide(!0)])
                                : [2];
                        case 1:
                            return t.sent(), (this._current = null), [2];
                    }
                });
            });
        }),
        (e.changeShow = function () {
            return a(this, void 0, void 0, function () {
                var e;
                return c(this, function () {
                    return this._current
                        ? ((e = this._current), this._suspended.push(e), (this._current = null), [2])
                        : [2];
                });
            });
        }),
        (e.recycle = function (e, t, o) {
            switch (o) {
                case l.Once:
                    t.destroy(), this._nodeCache.delete(e), this.release(e);
                    break;
                case l.Normal:
                    t.destroy(), this._nodeCache.delete(e);
                    break;
                case l.Frequent:
                    t.removeFromParent(!1), this._nodeCache.set(e, t);
            }
        }),
        (e.load = function (e) {
            var t = this;
            return new Promise(function (o) {
                var a = t._prefabCache;
                if (a.has(e)) {
                    var n = a.get(e);
                    if (cc.isValid(n)) return void o(n);
                    a.delete(e);
                }
                cc.resources.load(e, function (t, n) {
                    t ? o(null) : (a.set(e, n), n.addRef(), o(n));
                });
            });
        }),
        (e.release = function (e) {
            var t = this._nodeCache,
                o = t.get(e);
            o && (t.delete(e), cc.isValid(o) && o.destroy(), (o = null));
            var a = this._prefabCache,
                n = a.get(e);
            n && (a.delete(e), n.decRef(), (n = null));
        }),
        (e.parseParams = function (e) {
            return null == e
                ? new p()
                : "[object Object]" !== Object.prototype.toString.call(e)
                ? (cc.warn("[PopupManager]", "弹窗参数无效，使用默认参数"), new p())
                : (null == e.mode && (e.mode = l.Normal),
                  null == e.priority && (e.priority = 0),
                  null == e.immediately && (e.immediately = !1),
                  e);
        }),
        (e._prefabCache = new Map()),
        (e._nodeCache = new Map()),
        (e._current = null),
        (e._queue = []),
        (e._suspended = []),
        (e.locked = !1),
        (e.container = null),
        (e.interval = 0.05),
        (e.oldPopubPath = ""),
        (e.popubLock = !1),
        (e.timeRes = null),
        (e.loadStartCallback = null),
        (e.loadFinishCallback = null),
        e
    );
})();
o.default = d;
var p = function () {
    (this.mode = l.Normal), (this.priority = 0), (this.immediately = !1), (this.isNoHideCurrent = !1);
};
o.PopupParams = p;
