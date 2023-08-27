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
    l = r.property,
    s = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.spineSk = null),
                (t.timePro = null),
                (t.cdTime = 15),
                (t.curTime = 0),
                (t.callBack = null),
                (t.state = 0),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.play = function (e, t) {
                var o = this;
                (this.curTime = 0),
                    (this.cdTime = 15),
                    (this.callBack = t),
                    (this.state = 0),
                    this.scheduleOnce(function () {
                        o.spineSk.setSkin(e), o.spineSk.setAnimation(0, "loop", !0);
                    });
            }),
            (t.prototype.update = function (e) {
                if (!(this.state > 0)) {
                    this.curTime += e;
                    var t = this.curTime / this.cdTime;
                    t > 1 && ((this.state = 1), (t = 1), this.callBack && this.callBack()),
                        (this.timePro.getComponent(cc.Sprite).fillRange = 1 - t);
                }
            }),
            i([l(sp.Skeleton)], t.prototype, "spineSk", void 0),
            i([l(cc.Node)], t.prototype, "timePro", void 0),
            i([c], t)
        );
    })(cc.Component);
o.default = s;
