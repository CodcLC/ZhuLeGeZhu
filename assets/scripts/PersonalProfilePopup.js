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
    s = e("TTLoadingImg"),
    u = e("Util"),
    d = cc._decorator,
    f = d.ccclass,
    h = d.property,
    y = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.nikeName = null),
                (t.creatorTime = null),
                (t.teamLabel = null),
                (t.headIcon = null),
                (t.gongxianLabel = null),
                (t.chengjiLabel = null),
                (t.provinceUI = null),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.init = function () {
                (this.nikeName.string = c.default.nikeName),
                    "" != c.default.headIcon && s.default.loadTTImageToSprite(c.default.headIcon, this.headIcon),
                    (this.gongxianLabel.string = c.default.playerBaseData.myContribute + ""),
                    (this.creatorTime.string = "于" + u.default.timestampToTime(c.default.creatorTime) + "诞生"),
                    this.updateTeam();
            }),
            (t.prototype.updateTeam = function () {
                this.teamLabel.string = c.default.myArea + "队";
            }),
            (t.prototype.onClickOpenProvinceUI = function () {
                r.default.playEffect("click"), (this.provinceUI.active = !0);
            }),
            (t.prototype.onConfirmBtnClick = function () {
                r.default.playEffect("click"), this.hide();
            }),
            i([h(cc.Label)], t.prototype, "nikeName", void 0),
            i([h(cc.Label)], t.prototype, "creatorTime", void 0),
            i([h(cc.Label)], t.prototype, "teamLabel", void 0),
            i([h(cc.Sprite)], t.prototype, "headIcon", void 0),
            i([h(cc.Label)], t.prototype, "gongxianLabel", void 0),
            i([h(cc.Label)], t.prototype, "chengjiLabel", void 0),
            i([h(cc.Node)], t.prototype, "provinceUI", void 0),
            i([f], t)
        );
    })(l.default);
o.default = y;
