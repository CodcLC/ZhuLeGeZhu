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
    l = e("GameMgr"),
    s = e("LoadResMgr"),
    u = e("PopupBase"),
    d = e("PopupManager"),
    f = e("ByteDanceApi"),
    h = e("Util"),
    y = cc._decorator,
    g = y.ccclass,
    v = y.property,
    m = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.turnTable = null),
                (t.maxShovel = null),
                (t.awardIcon = null),
                (t.playGoBtn1 = null),
                (t.playGoBtn2 = null),
                (t.awardBox = null),
                (t.blueBox = null),
                (t.timeLabel = null),
                (t.maxLevel = null),
                (t.awardData = null),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.init = function () {
                var e = this;
                (this.turnTable.angle = 0),
                    (this.playGoBtn1.active = this.playGoBtn2.active = !0),
                    h.default.loadLocalSpriteFrameToSprite(
                        "shovel/shovel_" + c.default.playerBaseData.maxShovelLevel,
                        this.maxShovel
                    ),
                    (this.maxLevel.string = c.default.playerBaseData.maxShovelLevel + ""),
                    Date.now() - c.default.playerBaseData.turnTableStarTime > 72e5 &&
                        ((c.default.playerBaseData.turnTableNum = 0),
                        (c.default.playerBaseData.turnTableStarTime = Date.now())),
                    this.unscheduleAllCallbacks(),
                    this.udpateCd(),
                    this.schedule(function () {
                        e.udpateCd();
                    }, 1),
                    this.updateView();
            }),
            (t.prototype.udpateCd = function () {
                var e = 72e5 - (Date.now() - c.default.playerBaseData.turnTableStarTime);
                e <= 0
                    ? ((c.default.playerBaseData.turnTableNum = 0),
                      (c.default.playerBaseData.turnTableStarTime = Date.now()),
                      this.updateView())
                    : (this.timeLabel.string = h.default.getTimeString(Math.floor(e / 1e3)));
            }),
            (t.prototype.updateView = function () {
                for (var e = 0; e < this.blueBox.childrenCount; e++)
                    (this.blueBox.children[e].getChildByName("pic_check mark").active =
                        c.default.playerBaseData.turnTableNum > e),
                        (this.blueBox.children[e].getChildByName("icon_turntable").active = !(
                            c.default.playerBaseData.turnTableNum > e
                        ));
                c.default.playerBaseData.turnTableNum >= 5
                    ? ((this.playGoBtn2.getComponent(cc.Button).interactable = !1),
                      (this.playGoBtn1.getComponent(cc.Button).interactable = !1))
                    : (c.default.playerBaseData.gold >= 250
                          ? (this.playGoBtn1.getComponent(cc.Button).interactable = !0)
                          : (this.playGoBtn1.getComponent(cc.Button).interactable = !1),
                      (this.playGoBtn2.getComponent(cc.Button).interactable = !0));
            }),
            (t.prototype.glodAwardClick = function () {
                r.default.playEffect("click"),
                    (this.playGoBtn1.active = this.playGoBtn2.active = !1),
                    l.default.getInstance().addGlod(-250),
                    this.getLuckDrawIndex(),
                    this.updateView();
            }),
            (t.prototype.videoAwardClick = function () {
                r.default.playEffect("click"), (this.playGoBtn1.active = this.playGoBtn2.active = !1);
                var e = function (e) {
                    e ? this.getLuckDrawIndex() : (this.playGoBtn1.active = this.playGoBtn2.active = !0);
                }.bind(this);
                f.default.playAdVideo(e);
            }),
            (t.prototype.getLuckDrawIndex = function () {
                this.awardData = null;
                for (
                    var e = s.default.getInstance().getDataConfig("turntable_rewards"),
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
                0 != o && ((c.default.playerBaseData.turnTableNum += 1), this.updateView(), this.starTurnTable(o));
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
                        (this.playGoBtn1.active = this.playGoBtn2.active = !0),
                            5 == this.awardData.id
                                ? h.default.loadLocalSpriteFrameToSprite(
                                      "shovel/shovel_" + this.awardData.icon,
                                      this.awardIcon
                                  )
                                : h.default.loadLocalSpriteFrameToSprite(
                                      "public/" + this.awardData.icon,
                                      this.awardIcon
                                  ),
                            this.scheduleOnce(
                                function () {
                                    var e = this;
                                    if (this.awardData) {
                                        var t = {
                                                awardData: this.awardData,
                                                callback: function () {
                                                    e.updateView();
                                                }
                                            },
                                            o = {mode: d.PopupCacheMode.Frequent, isNoHideCurrent: !0};
                                        d.default.show("popups/CongratulationsPopup", t, o);
                                    }
                                }.bind(this),
                                0.2
                            );
                    }.bind(this)
                );
                this.turnTable.runAction(cc.sequence(o, a));
            }),
            (t.prototype.onConfirmBtnClick = function () {
                this.hide();
            }),
            i([v(cc.Node)], t.prototype, "turnTable", void 0),
            i([v(cc.Sprite)], t.prototype, "maxShovel", void 0),
            i([v(cc.Sprite)], t.prototype, "awardIcon", void 0),
            i([v(cc.Node)], t.prototype, "playGoBtn1", void 0),
            i([v(cc.Node)], t.prototype, "playGoBtn2", void 0),
            i([v(cc.Node)], t.prototype, "awardBox", void 0),
            i([v(cc.Node)], t.prototype, "blueBox", void 0),
            i([v(cc.Label)], t.prototype, "timeLabel", void 0),
            i([v(cc.Label)], t.prototype, "maxLevel", void 0),
            i([g], t)
        );
    })(u.default);
o.default = m;
