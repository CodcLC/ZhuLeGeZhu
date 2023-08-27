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
    i =
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
var r = e("MapItem"),
    c = e("GameMgr"),
    l = e("NodePoolMgr"),
    s = cc._decorator,
    u = s.ccclass,
    d =
        (s.property,
        (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.speedY = -2e3), (t.state = -1), t;
            }
            return (
                n(t, e),
                (t.prototype.init = function () {
                    this.state = 0;
                }),
                (t.prototype.update = function (e) {
                    0 == this.state && (this.node.y += e * this.speedY);
                }),
                (t.prototype.bulletOver = function () {
                    l.default.getInstance().recoverRole(this.node);
                    var e = c.default.getInstance().shovelList.indexOf(this.node);
                    e >= 0 && c.default.getInstance().shovelList.splice(e, 1), (this.state = -1);
                }),
                (t.prototype.onCollisionEnter = function (e) {
                    var t = e.node.getComponent(r.default);
                    t && t.soilBlockDie();
                }),
                i([u], t)
            );
        })(cc.Component));
o.default = d;
