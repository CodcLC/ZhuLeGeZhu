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
    s = e("PopupManager"),
    u = cc._decorator,
    d = u.ccclass,
    f = u.property,
    h = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.soundOnOffBtn = null), (t.vibrateOnOffBtn = null), (t.musicOnOffBtn = null), t;
        }
        return (
            n(t, e),
            (t.prototype.init = function () {
                this.changeBtn(this.soundOnOffBtn, 1 == c.default.playerBaseData.effectSwitch),
                    this.changeBtn(this.musicOnOffBtn, 1 == c.default.playerBaseData.musicSwitch),
                    this.changeBtn(this.vibrateOnOffBtn, 1 == c.default.playerBaseData.vibrateSwitch);
            }),
            (t.prototype.changeBtn = function (e, t) {
                (e.getChildByName("btn_set_up_swich_on").active = t),
                    (e.getChildByName("btn_set_up_swich_off").active = !t),
                    (e.getChildByName("btn_set_up_swich").x = t ? 35 : -35);
            }),
            (t.prototype.onMuicClick = function () {
                r.default.playEffect("click"),
                    1 == c.default.playerBaseData.musicSwitch
                        ? ((c.default.playerBaseData.musicSwitch = 0), r.default.stopBGMusic())
                        : ((c.default.playerBaseData.musicSwitch = 1), r.default.playBGMusic("mianbgm")),
                    this.changeBtn(this.musicOnOffBtn, 1 == c.default.playerBaseData.musicSwitch);
            }),
            (t.prototype.onSoundClick = function () {
                r.default.playEffect("click"),
                    1 == c.default.playerBaseData.effectSwitch
                        ? (c.default.playerBaseData.effectSwitch = 0)
                        : (c.default.playerBaseData.effectSwitch = 1),
                    this.changeBtn(this.soundOnOffBtn, 1 == c.default.playerBaseData.effectSwitch);
            }),
            (t.prototype.onVibrateClick = function () {
                r.default.playEffect("click"),
                    1 == c.default.playerBaseData.vibrateSwitch
                        ? (c.default.playerBaseData.vibrateSwitch = 0)
                        : (c.default.playerBaseData.vibrateSwitch = 1),
                    this.changeBtn(this.vibrateOnOffBtn, 1 == c.default.playerBaseData.vibrateSwitch);
            }),
            (t.prototype.onOpenRemoveCache = function () {
                r.default.playEffect("click");
                var e = {mode: s.PopupCacheMode.Frequent, isNoHideCurrent: !0};
                s.default.show("popups/ConfirmResetPopup", {}, e);
            }),
            (t.prototype.onConfirmBtnClick = function () {
                r.default.playEffect("click"), this.hide();
            }),
            i([f(cc.Node)], t.prototype, "soundOnOffBtn", void 0),
            i([f(cc.Node)], t.prototype, "vibrateOnOffBtn", void 0),
            i([f(cc.Node)], t.prototype, "musicOnOffBtn", void 0),
            i([d], t)
        );
    })(l.default);
o.default = h;
