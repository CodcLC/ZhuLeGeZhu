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
var r = e("DragItem"),
    c = cc._decorator,
    l = c.ccclass,
    s = c.property,
    u = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.itemBox1 = null), (t.itemBox2 = null), (t.ligthSp = null), t;
        }
        return (
            n(t, e),
            (t.prototype.play = function (e, t) {
                var o = this;
                (this.itemBox1.x = 0),
                    (this.itemBox2.x = 0),
                    this.itemBox1.getComponent(r.default).init(e),
                    this.itemBox2.getComponent(r.default).init(e),
                    cc
                        .tween(this.itemBox1)
                        .to(0.3, {x: -50}, {easing: "backOut"})
                        .call(function () {
                            o.ligthSp.setAnimation(0, "start", !1);
                        })
                        .delay(0.1)
                        .to(0.3, {x: 0}, {easing: "backOut"})
                        .call(function () {
                            t && t();
                        })
                        .start(),
                    cc
                        .tween(this.itemBox2)
                        .to(0.3, {x: 50}, {easing: "backOut"})
                        .delay(0.1)
                        .to(0.3, {x: 0}, {easing: "backOut"})
                        .start();
            }),
            i([s(cc.Node)], t.prototype, "itemBox1", void 0),
            i([s(cc.Node)], t.prototype, "itemBox2", void 0),
            i([s(sp.Skeleton)], t.prototype, "ligthSp", void 0),
            i([l], t)
        );
    })(cc.Component);
o.default = u;
