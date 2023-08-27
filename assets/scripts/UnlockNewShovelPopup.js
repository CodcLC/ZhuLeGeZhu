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
    s = e("Util"),
    u = cc._decorator,
    d = u.ccclass,
    f = u.property,
    h = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.levelLabel = null), (t.shovelIcon = null), t;
        }
        return (
            n(t, e),
            (t.prototype.init = function (e) {
                r.default.playEffect("yangyangjiesuo"),
                    (this.levelLabel.string = "Lv." + e.data.level),
                    s.default.loadLocalSpriteFrameToSprite("shovel/shovel_" + e.data.level, this.shovelIcon);
                var t = this.shovelIcon.node;
                t.stopAllActions(),
                    (t.angle = 0),
                    cc.tween(t).to(0.8, {angle: -720}).start(),
                    2 == c.default.playerBaseData.guideIndex && (c.default.playerBaseData.guideIndex = 3);
            }),
            (t.prototype.onConfirmBtnClick = function () {
                r.default.playEffect("click"),
                    this.hide(),
                    this.options.confirmCallback && this.options.confirmCallback();
            }),
            i([f(cc.Label)], t.prototype, "levelLabel", void 0),
            i([f(cc.Sprite)], t.prototype, "shovelIcon", void 0),
            i([d], t)
        );
    })(l.default);
o.default = h;
