var e = require;
var t = module;
var o = exports;
var a,
    n =
        (this && this.__extends) ||
        ((a = function (e, t) {
            return (a =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (e, t) {
                        e.__proto__ = t;
                    }) ||
                function (e, t) {
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                })(e, t);
        }),
        function (e, t) {
            function o() {
                this.constructor = e;
            }
            a(e, t), (e.prototype = null === t ? Object.create(t) : ((o.prototype = t.prototype), new o()));
        }),
    r =
        (this && this.__decorate) ||
        function (e, t, o, a) {
            var n,
                i = arguments.length,
                r = i < 3 ? t : null === a ? (a = Object.getOwnPropertyDescriptor(t, o)) : a;
            if (
                "object" == ("undefined" == typeof Reflect ? "undefined" : typeof Reflect) &&
                "function" == typeof Reflect.decorate
            )
                r = Reflect.decorate(e, t, o, a);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (n = e[c]) && (r = (i < 3 ? n(r) : i > 3 ? n(t, o, r) : n(t, o)) || r);
            return i > 3 && r && Object.defineProperty(t, o, r), r;
        };
Object.defineProperty(o, "__esModule", {value: !0});
var c = e("LoadResMgr"),
    l = cc._decorator,
    s = l.ccclass,
    u =
        (l.property,
        (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._nodePoolTree = {}), t;
            }
            var o;
            return (
                n(t, e),
                (o = t),
                (t.getInstance = function () {
                    return null == o._instance && (o._instance = new o()), o._instance;
                }),
                (t.prototype.getPreafab = function (e) {
                    var t = null;
                    return (
                        this._nodePoolTree[e]
                            ? this._nodePoolTree[e].size() > 0 && (t = this._nodePoolTree[e].get())
                            : (this._nodePoolTree[e] = new cc.NodePool()),
                        null == t && (t = cc.instantiate(c.default.getInstance().getPrefab(e))),
                        t
                    );
                }),
                (t.prototype.recoverRole = function (e) {
                    e && this._nodePoolTree[e.name] && this._nodePoolTree[e.name].put(e);
                }),
                (t.prototype.boomEffPlay = function (e, t, o) {
                    var a = this,
                        n = this.getPreafab("BoomEffect");
                    (n.parent = o),
                        n.setPosition(t),
                        n.getComponent(sp.Skeleton).setAnimation(0, e, !1),
                        setTimeout(function () {
                            a.recoverRole(n);
                        }, 1500);
                }),
                (t._instance = null),
                (o = r([s], t))
            );
        })(cc.Component));
o.default = u;
