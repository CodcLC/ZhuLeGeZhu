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
var c = e("NodePoolMgr"),
    l = e("ByteDanceApi"),
    s = cc._decorator,
    u = s.ccclass,
    d =
        (s.property,
        (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.play = function () {
                    var e = this;
                    this.node.getChildByName("icon").active = !1;
                    var t = c.default.getInstance().getPreafab("HaystackAnim");
                    (t.parent = this.node),
                        (t.active = !0),
                        this.scheduleOnce(function () {
                            t.getComponent(sp.Skeleton).setAnimation(0, "start", !1);
                        }),
                        (t.y = -54),
                        (t.x = 2),
                        setTimeout(function () {
                            l.default.vibrateShort();
                        }, 300),
                        l.default.vibrateShort(),
                        setTimeout(function () {
                            (e.node.getChildByName("icon").active = !0),
                                (t.active = !1),
                                c.default.getInstance().recoverRole(t);
                        }, 600);
                }),
                r([u], t)
            );
        })(cc.Component));
o.default = d;
