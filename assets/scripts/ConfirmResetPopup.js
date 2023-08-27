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
var r = e("AudioSystem"),
    c = e("Global"),
    l = e("PopupBase"),
    s = e("ByteDanceApi"),
    u = e("Util"),
    d = cc._decorator,
    f = d.ccclass,
    h =
        (d.property,
        (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.init = function () {}),
                (t.prototype.onCancellationClick = function () {
                    r.default.playEffect("click"), this.hide();
                }),
                (t.prototype.onRemoveCacheClick = function () {
                    r.default.playEffect("click"),
                        u.default.writeLocalStoreStr("TChestRecordData", null),
                        u.default.writeLocalStoreStr("SyntheticMinerMapData", null),
                        u.default.writeLocalStoreStr("SyntheticMinerData", null),
                        c.default.initPlayerDataInfo(),
                        this.hide(),
                        s.default.restartGame();
                }),
                i([f], t)
            );
        })(l.default));
o.default = h;
