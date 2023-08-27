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
var r = cc._decorator,
    c = r.ccclass,
    l =
        (r.property,
        (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.speed = 300), t;
            }
            return (
                n(t, e),
                (t.prototype.udpateLabel = function (e) {
                    (this.node.x = 0), (this.node.getComponent(cc.Label).string = e);
                }),
                (t.prototype.update = function (e) {
                    (this.node.x -= this.speed * e), this.node.x < -1e3 && (this.node.x = 1e3);
                }),
                i([c], t)
            );
        })(cc.Component));
o.default = l;
