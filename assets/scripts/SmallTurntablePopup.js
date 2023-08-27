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
var c = e("Global"),
    l = e("LoadResMgr"),
    s = e("PopupBase"),
    u = e("PopupManager"),
    d = e("Util"),
    f = cc._decorator,
    h = f.ccclass,
    y = f.property,
    g = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.turnTable = null), (t.maxShovel = null), (t.maxLevel = null), (t.awardData = null), t;
        }
        return (
            n(t, e),
            (t.prototype.init = function () {
                var e = this;
                (this.turnTable.angle = 0),
                    d.default.loadLocalSpriteFrameToSprite(
                        "shovel/shovel_" + c.default.playerBaseData.maxShovelLevel,
                        this.maxShovel
                    ),
                    (this.maxLevel.string = c.default.playerBaseData.maxShovelLevel + ""),
                    this.scheduleOnce(function () {
                        e.startAwardClick();
                    }, 1);
            }),
            (t.prototype.startAwardClick = function () {
                this.getLuckDrawIndex();
            }),
            (t.prototype.getLuckDrawIndex = function () {
                this.awardData = null;
                for (
                    var e = l.default.getInstance().getDataConfig("turntable_rewards"),
                        t = 100 * Math.random(),
                        o = 0,
                        a = 0,
                        n = 0,
                        i = e.length;
                    n < i;
                    n++
                ) {
                    var r = a + Number(e[n].probability);
                    if (t >= a && t < r) {
                        (o = e[n].id), (this.awardData = this.getLotteryData(o));
                        break;
                    }
                    a = r;
                }
                0 != o && this.starTurnTable(o);
            }),
            (t.prototype.getLotteryData = function (e) {
                var t = {};
                return (
                    1 == e
                        ? ((t.id = 1), (t.icon = "icon_gifts_box"), (t.num = 1))
                        : 2 == e
                        ? ((t.id = 2), (t.icon = "icon_gifts_spbox"), (t.num = 1))
                        : 3 == e
                        ? ((t.id = 3), (t.icon = "pic_boxturntable_coin_500"), (t.num = 500))
                        : 4 == e
                        ? ((t.id = 4), (t.icon = "pic_boxturntable_coin_1000"), (t.num = 1e3))
                        : 5 == e && ((t.id = 5), (t.icon = c.default.playerBaseData.maxShovelLevel), (t.num = 1)),
                    t
                );
            }),
            (t.prototype.starTurnTable = function (e) {
                var t = 0;
                1 == e ? (t = 0) : 2 == e ? (t = 68) : 3 == e ? (t = 218) : 4 == e ? (t = 292) : 5 == e && (t = 143);
                var o = cc.rotateTo(3, -(1800 + t));
                o.easing(cc.easeSineOut());
                var a = cc.callFunc(
                    function () {
                        this.scheduleOnce(
                            function () {
                                var e = this;
                                if (this.awardData) {
                                    var t = {
                                            awardData: this.awardData,
                                            callback: function () {
                                                setTimeout(function () {
                                                    e.hide();
                                                }, 200);
                                            }
                                        },
                                        o = {mode: u.PopupCacheMode.Frequent, isNoHideCurrent: !0};
                                    u.default.show("popups/CongratulationsPopup", t, o);
                                }
                            }.bind(this),
                            0.2
                        );
                    }.bind(this)
                );
                this.turnTable.runAction(cc.sequence(o, a));
            }),
            r([y(cc.Node)], t.prototype, "turnTable", void 0),
            r([y(cc.Sprite)], t.prototype, "maxShovel", void 0),
            r([y(cc.Label)], t.prototype, "maxLevel", void 0),
            r([h], t)
        );
    })(s.default);
o.default = g;
