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
var c = e("SynthesisAni"),
    l = e("AudioSystem"),
    s = e("Global"),
    u = e("BoxItem"),
    d = e("DragItem"),
    f = e("EventMgr"),
    h = e("GameMgr"),
    y = e("LoadResMgr"),
    g = e("NodePoolMgr"),
    v = e("PopupManager"),
    m = e("ByteDanceApi"),
    b = e("Util"),
    _ = e("AnimationCtl"),
    S = e("BitBulletCtl"),
    C = e("ShovelCtl"),
    B = cc._decorator,
    w = B.ccclass,
    P = B.property,
    D = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.synthesisLayer = null),
                (t.dragBox = null),
                (t.remove = null),
                (t.storedItem = null),
                (t.adFastLokedBox = null),
                (t.automaticSynLabel = null),
                (t.curSelectBox = null),
                (t.unLockedLevel = 0),
                (t.totalBox = 10),
                (t.isRadomr = !1),
                (t.cdTime = 0),
                (t.isStopZdHc = !1),
                (t.isHeChengIng = !1),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.start = function () {
                this.registerEvent(), (this.remove.opacity = 155), this.updateStoredItems();
            }),
            (t.prototype.initBox = function () {
                var e = this;
                this.adFastLokedBox.active = !1;
                for (var t = 0; t < this.totalBox; t++)
                    this.synthesisLayer.children[t]
                        ? ((this.synthesisLayer.children[t].getComponent(u.default).posIndex = t),
                          (this.synthesisLayer.children[t].getComponent(u.default).isLocked = !0))
                        : (((a = g.default.getInstance().getPreafab("BoxItem")).parent = this.synthesisLayer),
                          (a.active = !0),
                          (a.getComponent(u.default).posIndex = t),
                          (a.getComponent(u.default).isLocked = !0));
                if (this.totalBox <= 20) {
                    var o = this.totalBox + 5;
                    for (t = this.totalBox; t < o; t++) {
                        var a;
                        this.synthesisLayer.children[t] ||
                            (((a = g.default.getInstance().getPreafab("BoxItem")).parent = this.synthesisLayer),
                            (a.active = !0),
                            (a.getComponent(u.default).posIndex = t),
                            (a.getComponent(u.default).isLocked = !1));
                    }
                    this.adFastLokedBox.active ||
                        (this.scheduleOnce(function () {
                            e.adFastLokedBox.y = 103 + e.synthesisLayer.height / 2 - 60;
                        }),
                        (this.adFastLokedBox.active = !0));
                }
                this.updateShovel(), (this.isStopZdHc = !1);
            }),
            (t.prototype.getTotalBox = function () {
                this.remove.y = 290;
                var e = 0,
                    t = Math.floor(s.default.playerBaseData.curLevel / 10);
                return (
                    s.default.playerBaseData.adJsBox > 0 &&
                        s.default.playerBaseData.adJsBox > s.default.playerBaseData.curLevel &&
                        (t = Math.floor(s.default.playerBaseData.adJsBox / 10)),
                    (this.unLockedLevel = 10 + 10 * t),
                    (e = t > 0 ? 5 * t + 10 : 10) <= 20
                        ? ((this.unLockedLevel = 10 * (t + 1)),
                          (this.adFastLokedBox.getChildByName("level").getComponent(cc.Label).string =
                              "通过" + this.unLockedLevel + "关解锁"),
                          (this.remove.y = 290 + 60 * (t + 1)))
                        : ((this.remove.y = 290 + 60 * t), e > 25 && ((e = 25), (this.remove.y = 470))),
                    e
                );
            }),
            (t.prototype.adUnlockedBox = function () {
                var e = this;
                m.default.playAdVideo(function (t) {
                    t &&
                        ((s.default.playerBaseData.adJsBox = e.unLockedLevel + 1),
                        e.initBox(),
                        s.default.savePlayerBaseData());
                });
            }),
            (t.prototype.updateShovel = function () {
                if (
                    ((this.isRadomr = !1),
                    this.updateStoredItems(),
                    (this.isHeChengIng = !1),
                    (h.default.gameState = 0),
                    0 != this.synthesisLayer.childrenCount)
                ) {
                    var e = this.getTotalBox();
                    if (e != this.totalBox) return (this.totalBox = e), void this.initBox();
                    for (var t in s.default.playerBaseData.shovel)
                        if (s.default.playerBaseData.shovel[t] < 1e4) {
                            var o = y.default.getInstance().getShovelCfg(s.default.playerBaseData.shovel[t]);
                            o && this.synthesisLayer.children[Number(t)].getComponent(u.default).init(o);
                        } else {
                            if (
                                10002 == s.default.playerBaseData.shovel[t] ||
                                10003 == s.default.playerBaseData.shovel[t] ||
                                10005 == s.default.playerBaseData.shovel[t] ||
                                10006 == s.default.playerBaseData.shovel[t] ||
                                10007 == s.default.playerBaseData.shovel[t]
                            )
                                continue;
                            this.synthesisLayer.children[Number(t)]
                                .getComponent(u.default)
                                .initBox(s.default.playerBaseData.shovel[t]);
                        }
                } else this.initBox();
            }),
            (t.prototype.registerEvent = function () {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStartCallback, this),
                    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoveCallback, this),
                    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEndCallback, this),
                    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEndCallback, this),
                    f.default.BroadCast.on({
                        key: "addBoxOrShovelAward",
                        listener: this.addBoxOrShovelAward,
                        context: this
                    });
            }),
            (t.prototype.onDestroy = function () {
                f.default.BroadCast.off("addBoxOrShovelAward", this.addBoxOrShovelAward, this),
                    this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStartCallback, this),
                    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoveCallback, this),
                    this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEndCallback, this),
                    this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEndCallback, this);
            }),
            (t.prototype.onTouchStartCallback = function (e) {
                var t = this;
                if (
                    ((this.curSelectBox = this.getItemBox(e.getLocation())),
                    this.curSelectBox && this.curSelectBox.getComponent(u.default).isHcIng)
                )
                    this.curSelectBox = null;
                else if (this.curSelectBox) {
                    var o = this.curSelectBox.getComponent(u.default).getData();
                    if (o) {
                        if (1e4 == o) {
                            l.default.playEffect("kaiqilipinghe"),
                                (p = s.default.playerBaseData.maxShovelLevel - 1) <
                                    s.default.playerBaseData.generateShovelLV &&
                                    (p = s.default.playerBaseData.generateShovelLV);
                            var a = s.default.playerBaseData.generateShovelLV;
                            s.default.playerBaseData.maxShovelLevel > 9 &&
                                (a = s.default.playerBaseData.maxShovelLevel - 5);
                            var n = b.default.randomInt2(a, p),
                                i = y.default.getInstance().getShovelCfg(n);
                            return (
                                this.curSelectBox.getComponent(u.default).init(i),
                                void (
                                    5 == s.default.playerBaseData.guideIndex &&
                                    ((s.default.playerBaseData.guideIndex = 6),
                                    (h.default.getInstance().guideNode.parent = null))
                                )
                            );
                        }
                        if (10001 == o)
                            return (
                                l.default.playEffect("kaiqilipinghe"),
                                (p = s.default.playerBaseData.maxShovelLevel - 6) <
                                    s.default.playerBaseData.generateShovelLV &&
                                    (p = s.default.playerBaseData.generateShovelLV),
                                (a = s.default.playerBaseData.generateShovelLV),
                                (n = 1),
                                (n = b.default.randomInt2(a, p)),
                                (i = y.default.getInstance().getShovelCfg(n)),
                                this.curSelectBox.getComponent(u.default).init(i),
                                void (
                                    5 == s.default.playerBaseData.guideIndex &&
                                    ((s.default.playerBaseData.guideIndex = 6),
                                    (h.default.getInstance().guideNode.parent = null))
                                )
                            );
                        if (10002 == o)
                            return void m.default.playAdVideo(function (e) {
                                e &&
                                    ((h.default.isShowAdGJBox = !1),
                                    t.curSelectBox.getComponent(u.default).removeData(),
                                    t.curSelectBox.getComponent(u.default).initBox(1e4));
                            });
                        if (10003 == o)
                            return void m.default.playAdVideo(function (e) {
                                if (e) {
                                    (h.default.isShowAdShovel = !1),
                                        t.curSelectBox.getComponent(u.default).removeData();
                                    var o = t.curSelectBox.getComponent(u.default).radomLevel,
                                        a = y.default.getInstance().getShovelCfg(o);
                                    t.curSelectBox.getComponent(u.default).init(a),
                                        b.default.boxItemAni(t.curSelectBox.getChildByName("shovel"));
                                }
                            });
                        if (10004 == o) {
                            this.curSelectBox.getComponent(u.default).removeData();
                            var r = {},
                                c = {mode: v.PopupCacheMode.Frequent};
                            return void v.default.show("popups/SmallTurntablePopup", r, c);
                        }
                        if (10005 == o)
                            return void m.default.playAdVideo(function (e) {
                                e &&
                                    ((h.default.isShowAdPTBox = !1),
                                    t.curSelectBox.getComponent(u.default).removeData(),
                                    t.curSelectBox.getComponent(u.default).initBox(10001));
                            });
                        if (10006 == o)
                            return void m.default.playAdVideo(function (e) {
                                e &&
                                    ((h.default.isShowAdTurnTable = !1),
                                    t.curSelectBox.getComponent(u.default).removeData(),
                                    t.curSelectBox.getComponent(u.default).initBox(10004));
                            });
                        if (10007 == o)
                            return void m.default.playAdVideo(function (e) {
                                if (e) {
                                    (h.default.isShowAdShovel = !1),
                                        t.curSelectBox.getComponent(u.default).removeData();
                                    var o = t.curSelectBox.getComponent(u.default).radomLevel,
                                        a = y.default.getInstance().getShovelCfg(o);
                                    t.curSelectBox.getComponent(u.default).init(a),
                                        b.default.boxItemAni(t.curSelectBox.getChildByName("shovel"));
                                }
                            });
                        if (2e4 == o)
                            return void m.default.playAdVideo(function (e) {
                                e &&
                                    (t.curSelectBox.getComponent(u.default).removeData(),
                                    t.curSelectBox.getComponent(u.default).initBox(20001));
                            });
                        var p;
                        if (20001 == o)
                            return (
                                (a = s.default.playerBaseData.maxShovelLevel - 2) <
                                    s.default.playerBaseData.generateShovelLV &&
                                    (a = s.default.playerBaseData.generateShovelLV),
                                (p = s.default.playerBaseData.maxShovelLevel + 1) > 30 && (p = 30),
                                (n = 1),
                                (n = b.default.randomInt2(a, p)),
                                (i = y.default.getInstance().getShovelCfg(n)),
                                void this.curSelectBox.getComponent(u.default).init(i)
                            );
                        if (20002 == o)
                            return void m.default.playAdVideo(function (e) {
                                e &&
                                    (t.curSelectBox.getComponent(u.default).removeData(),
                                    t.curSelectBox.getComponent(u.default).initBox(20003));
                            });
                        if (20004 == o)
                            return void m.default.playAdVideo(function (e) {
                                e &&
                                    (t.curSelectBox.getComponent(u.default).removeData(),
                                    t.curSelectBox.getComponent(u.default).initBox(20005));
                            });
                        if (20005 == o)
                            return (
                                this.curSelectBox.getComponent(u.default).removeData(),
                                (r = {}),
                                (c = {mode: v.PopupCacheMode.Frequent}),
                                void v.default.show("popups/ScrapingMusicPopup", r, c)
                            );
                        if (20003 == o)
                            return (
                                this.dragBox.getComponent(d.default).init(o),
                                this.dragBox.setPosition(this.dragBox.parent.convertToNodeSpaceAR(e.getLocation())),
                                (this.dragBox.active = !0),
                                void this.curSelectBox.getComponent(u.default).iconHide()
                            );
                        (this.remove.opacity = 255),
                            this.dragBox.getComponent(d.default).init(o),
                            this.dragBox.setPosition(this.dragBox.parent.convertToNodeSpaceAR(e.getLocation())),
                            (this.dragBox.active = !0),
                            this.allLevelLight(o),
                            this.curSelectBox.getComponent(u.default).iconHide();
                    }
                }
            }),
            (t.prototype.allLevelLight = function (e) {
                for (var t = 0; t < this.synthesisLayer.childrenCount; t++) {
                    var o = this.synthesisLayer.children[t].getComponent(u.default),
                        a = o.getData();
                    a && a.level == e.level && o.showLight();
                }
            }),
            (t.prototype.hideAllLight = function () {
                for (var e = 0; e < this.synthesisLayer.childrenCount; e++)
                    this.synthesisLayer.children[e].getComponent(u.default).hideLight();
            }),
            (t.prototype.onTouchMoveCallback = function (e) {
                this.dragBox.active &&
                    this.curSelectBox &&
                    this.dragBox.setPosition(this.dragBox.parent.convertToNodeSpaceAR(e.getLocation()));
            }),
            (t.prototype.onTouchEndCallback = function (e) {
                var t = this;
                if ((this.hideAllLight(), (this.remove.opacity = 155), this.dragBox.active && this.curSelectBox)) {
                    this.curSelectBox.getComponent(u.default).removeData(), (this.dragBox.active = !1);
                    var o = this.getItemBox(e.getLocation()),
                        a = this.dragBox.getComponent(d.default).getData();
                    if (o && "remove" == o.name)
                        cc.find("Canvas/AnimationCtl")
                            .getComponent(_.default)
                            .playObtainingCoin(Number(a.delCoin), null, o, 2);
                    else if (!o || o.getComponent(u.default).isLocked) {
                        if (o && !o.getComponent(u.default).isHcIng) {
                            var n = o.getComponent(u.default).getData();
                            if (n) {
                                if (a == n && Number(a.level) < 30) {
                                    (this.isHeChengIng = !0),
                                        (o.getComponent(u.default).isHcIng = !0),
                                        o.getComponent(u.default).hideShovel();
                                    var i = g.default.getInstance().getPreafab("SynthesisAni");
                                    (i.parent = this.node.parent),
                                        i.setPosition(
                                            this.node.parent.convertToNodeSpaceAR(o.convertToWorldSpaceAR(cc.v2(0, 0)))
                                        ),
                                        i.getComponent(c.default).play(a, function () {
                                            l.default.playEffect("hecheng");
                                            var e = Number(a.level) + 1,
                                                n = y.default.getInstance().getShovelCfg(e);
                                            o.getComponent(u.default).init(n),
                                                b.default.boxItemAni(o.getChildByName("shovel")),
                                                g.default.getInstance().recoverRole(i),
                                                t.machineMaxLevel(e, n),
                                                (t.isHeChengIng = !1),
                                                t.radomShowAdBox();
                                        });
                                } else
                                    h.default.isNoShovel(a)
                                        ? this.curSelectBox.getComponent(u.default).initBox(a)
                                        : this.curSelectBox.getComponent(u.default).init(a);
                            } else
                                h.default.isNoShovel(a)
                                    ? o.getComponent(u.default).initBox(a)
                                    : o.getComponent(u.default).init(a);
                        } else
                            h.default.isNoShovel(a)
                                ? this.curSelectBox.getComponent(u.default).initBox(a)
                                : this.curSelectBox.getComponent(u.default).init(a);
                    } else
                        h.default.isNoShovel(a)
                            ? this.curSelectBox.getComponent(u.default).initBox(a)
                            : this.curSelectBox.getComponent(u.default).init(a);
                }
            }),
            (t.prototype.radomShowAdBox = function () {
                var e = this;
                if (!this.isRadomr) {
                    (this.isRadomr = !0),
                        setTimeout(function () {
                            e.isRadomr = !1;
                        }, 500);
                    var t = Math.random();
                    if (t < 0.4)
                        if (t < 0.2 && !h.default.isShowAdPTBox) {
                            var o = {adGiftPTBox: 1};
                            this.addBoxOrShovelAward(o);
                        } else
                            t >= 0.2 && t < 0.25 && !h.default.isShowAdGJBox
                                ? ((o = {adGiftGJBox: 1}), this.addBoxOrShovelAward(o))
                                : t >= 0.25 && t < 0.35 && !h.default.isShowAdShovel
                                ? ((o = {adGiftShovel: 1}), this.addBoxOrShovelAward(o))
                                : t >= 0.35 &&
                                  !h.default.isShowAdTurnTable &&
                                  ((o = {adTurnTable: 1}), this.addBoxOrShovelAward(o));
                }
            }),
            (t.prototype.machineMaxLevel = function (e, t) {
                var o = this;
                if (s.default.playerBaseData.maxShovelLevel < e) {
                    (this.isStopZdHc = !0), (s.default.playerBaseData.maxShovelLevel = e);
                    var a = {
                            data: t,
                            confirmCallback: function () {
                                (o.isStopZdHc = !1),
                                    3 == s.default.playerBaseData.guideIndex && h.default.getInstance().showGuideNode();
                            }
                        },
                        n = {mode: v.PopupCacheMode.Frequent};
                    v.default.show("popups/UnlockNewShovelPopup", a, n);
                }
                s.default.savePlayerBaseData();
            }),
            (t.prototype.getItemBox = function (e) {
                var t = this.remove.parent.convertToNodeSpaceAR(e);
                if (this.remove.getBoundingBox().contains(t)) return this.remove;
                for (
                    var o = this.synthesisLayer.convertToNodeSpaceAR(e), a = 0;
                    a < this.synthesisLayer.childrenCount;
                    a++
                )
                    if (this.synthesisLayer.children[a].getBoundingBox().contains(o))
                        return this.synthesisLayer.children[a];
                return null;
            }),
            (t.prototype.radomShovel = function () {
                for (var e = this, t = [], o = 0; o < this.totalBox; o++)
                    null == this.synthesisLayer.children[o].getComponent(u.default).getData() && t.push(o);
                if (0 != t.length && 1 != h.default.gameState) {
                    l.default.playEffect("dianjizhaohuan");
                    var a = t[b.default.randomInt(t.length)];
                    if (
                        (h.default.getInstance().curBuyShovel ||
                            (h.default.getInstance().curBuyShovel = y.default
                                .getInstance()
                                .getShovelCfg(s.default.playerBaseData.generateShovelLV)),
                        h.default.getInstance().curBuyShovel)
                    ) {
                        var n = Number(h.default.getInstance().curBuyShovel.buyCoin);
                        if (s.default.playerBaseData.gold >= n) {
                            h.default.getInstance().addGlod(-n),
                                (s.default.playerBaseData.shovel[a] = s.default.playerBaseData.generateShovelLV);
                            var i = this.synthesisLayer.children[Number(a)];
                            i.getComponent(u.default).init(h.default.getInstance().curBuyShovel),
                                b.default.boxItemAni(i.getChildByName("shovel")),
                                h.default.getInstance().addShovelPro(1);
                        } else
                            m.default.playAdVideo(function (t) {
                                if (t) {
                                    s.default.playerBaseData.shovel[a] = s.default.playerBaseData.generateShovelLV;
                                    var o = e.synthesisLayer.children[Number(a)];
                                    o.getComponent(u.default).init(h.default.getInstance().curBuyShovel),
                                        b.default.boxItemAni(o.getChildByName("shovel")),
                                        h.default.getInstance().addShovelPro(1);
                                }
                            });
                    }
                }
            }),
            (t.prototype.addBoxOrShovelAward = function (e) {
                if (e.advancedGiftBox)
                    for (var t = 0; t < e.advancedGiftBox; t++)
                        this.addItemBox(1e4, 1) || s.default.playerBaseData.storedItems.push(1e4);
                if (e.ordinaryGiftBox)
                    for (t = 0; t < e.ordinaryGiftBox; t++)
                        this.addItemBox(10001, 1) || s.default.playerBaseData.storedItems.push(10001);
                if (e.shovesBox)
                    for (t = 0; t < e.shovesBox.length; t++) {
                        var o = y.default.getInstance().getShovelCfg(e.shovesBox[t]);
                        this.addItemBox(o, 2) || s.default.playerBaseData.storedItems.push(e.shovesBox[t]);
                    }
                if (e.adGiftGJBox) for (t = 0; t < e.adGiftGJBox; t++) this.addItemBox(10002, 1);
                if (e.adGiftShovel) for (t = 0; t < e.adGiftShovel; t++) this.addItemBox(10003, 1);
                if (e.turntable)
                    for (t = 0; t < e.turntable; t++)
                        this.addItemBox(10004, 1) || s.default.playerBaseData.storedItems.push(10004);
                if (e.adGiftPTBox) for (t = 0; t < e.adGiftPTBox; t++) this.addItemBox(10005, 1);
                if (e.adTurnTable) for (t = 0; t < e.adTurnTable; t++) this.addItemBox(10006, 1);
                if (e.adGiftShovelLose) for (t = 0; t < e.adGiftShovelLose; t++) this.addItemBox(10007, 1);
                if (e.dragonBall)
                    for (t = 0; t < e.dragonBall; t++)
                        this.addItemBox(2e4, 1) || s.default.playerBaseData.storedItems.push(2e4);
                if (e.drillBit)
                    for (t = 0; t < e.drillBit; t++)
                        this.addItemBox(20002, 1) || s.default.playerBaseData.storedItems.push(20002);
                if (e.scraping)
                    for (t = 0; t < e.scraping; t++)
                        this.addItemBox(20004, 1) || s.default.playerBaseData.storedItems.push(20004);
                this.updateStoredItems();
            }),
            (t.prototype.clickStroedItems = function () {
                l.default.playEffect("click");
                var e = s.default.playerBaseData.storedItems[0];
                if (1e4 == e || 10001 == e || 10004 == e || 2e4 == e || 20002 == e || 20004 == e)
                    this.addItemBox(e, 1) && s.default.playerBaseData.storedItems.splice(0, 1);
                else {
                    var t = y.default.getInstance().getShovelCfg(e);
                    this.addItemBox(t, 2) && s.default.playerBaseData.storedItems.splice(0, 1);
                }
                this.updateStoredItems();
            }),
            (t.prototype.updateStoredItems = function () {
                if (s.default.playerBaseData.storedItems.length > 0) {
                    this.storedItem.getChildByName("num").getComponent(cc.Label).string =
                        s.default.playerBaseData.storedItems.length + "";
                    var e = this.storedItem.getChildByName("icon").getComponent(cc.Sprite),
                        t = s.default.playerBaseData.storedItems[0];
                    if (1e4 == t) b.default.loadLocalSpriteFrameToSprite("public/icon_gifts_spbox", e);
                    else if (10001 == t) b.default.loadLocalSpriteFrameToSprite("public/icon_gifts_box", e);
                    else if (10004 == t) b.default.loadLocalSpriteFrameToSprite("public/icon_gifts_boxturntable", e);
                    else if (2e4 == t) b.default.loadLocalSpriteFrameToSprite("shovel/20000", e);
                    else if (20002 == t) b.default.loadLocalSpriteFrameToSprite("shovel/20002", e);
                    else if (20004 == t) b.default.loadLocalSpriteFrameToSprite("shovel/20004", e);
                    else {
                        var o = y.default.getInstance().getShovelCfg(t);
                        b.default.loadLocalSpriteFrameToSprite("shovel/shovel_" + o.level, e);
                    }
                    this.storedItem.active = !0;
                } else this.storedItem.active = !1;
            }),
            (t.prototype.addItemBox = function (e, t) {
                for (var o = [], a = 0; a < this.totalBox; a++)
                    null == this.synthesisLayer.children[a].getComponent(u.default).getData() && o.push(a);
                if (0 == o.length) return !1;
                var n = o[b.default.randomInt(o.length)],
                    i = this.synthesisLayer.children[Number(n)];
                return (
                    (s.default.playerBaseData.shovel[n] = e),
                    1 == t ? i.getComponent(u.default).initBox(e) : i.getComponent(u.default).init(e),
                    !0
                );
            }),
            (t.prototype.downStar = function () {
                if ((l.default.playEffect("click"), !this.isHeChengIng && !m.default.isVideoIng)) {
                    (cc.find("Canvas/Game/CenterLayer").active = !1), (h.default.getInstance().shovelList = []);
                    for (var e = cc.find("Canvas/Game"), t = 0; t < this.synthesisLayer.childrenCount; t++) {
                        var o = this.synthesisLayer.children[t],
                            a = o.getComponent(u.default).getData();
                        if (a) {
                            if (20003 == a) {
                                o.getComponent(u.default).removeData();
                                var n = g.default.getInstance().getPreafab("BitBullet"),
                                    i = e.convertToNodeSpaceAR(o.convertToWorldSpaceAR(cc.v2(0, 0)));
                                n.getComponent(S.default).init(a),
                                    (n.parent = e),
                                    n.setPosition(i),
                                    h.default.getInstance().shovelList.push(n);
                                continue;
                            }
                            if (h.default.isNoShovel(a)) continue;
                            o.getComponent(u.default).hideShovel();
                            var r = g.default.getInstance().getPreafab("Shovel"),
                                c = e.convertToNodeSpaceAR(o.convertToWorldSpaceAR(cc.v2(0, 0)));
                            r.getComponent(C.default).init(a),
                                (r.parent = e),
                                r.setPosition(c),
                                h.default.getInstance().shovelList.push(r);
                        }
                    }
                    (cc.find("Canvas/Game/homeBtn").active = !1),
                        l.default.playEffect("yangchongci"),
                        (h.default.gameState = 1);
                }
            }),
            (t.prototype.update = function (e) {
                1 != h.default.gameState &&
                    (this.isStopZdHc ||
                        (h.default.getInstance().synCountdown > 0 &&
                            ((this.cdTime += e),
                            this.cdTime >= 1 &&
                                ((this.cdTime = 0),
                                (h.default.getInstance().synCountdown -= 1),
                                h.default.getInstance().synCountdown <= 0
                                    ? ((this.automaticSynLabel.string = "自动合成"),
                                      (cc.find(
                                          "Canvas/Game/CenterLayer/btn_automatic_synthesis/icon_advertising_bordered"
                                      ).active = !0),
                                      (this.isStopZdHc = !1))
                                    : (this.automaticSynLabel.string = h.default.getInstance().synCountdown + "s"),
                                this.heChengSuc()))));
            }),
            (t.prototype.heChengSuc = function () {
                var e = this,
                    t = {};
                for (var o in s.default.playerBaseData.shovel)
                    if (s.default.playerBaseData.shovel[o]) {
                        var a = s.default.playerBaseData.shovel[o];
                        if (a >= 30) continue;
                        if ((t[a] || (t[a] = []), h.default.isNoShovel(a))) continue;
                        t[a].push(o);
                    }
                for (var o in t)
                    if (t[o].length >= 2)
                        for (
                            var n,
                                i = t[o],
                                r = function (t) {
                                    if (i[t + 1]) {
                                        var o = p.synthesisLayer.children[Number(i[t])],
                                            a = o.getComponent(u.default).getData();
                                        if (Number(a.level) >= s.default.playerBaseData.maxShovelLevel)
                                            return (n = t), "continue";
                                        var r = p.synthesisLayer.children[Number(i[t + 1])];
                                        if (o.getComponent(u.default).isDragIng || r.getComponent(u.default).isDragIng)
                                            return (n = t), "continue";
                                        (p.isHeChengIng = !0), (o.getComponent(u.default).isHcIng = !0);
                                        var f = r.getComponent(u.default).getData(),
                                            h = g.default.getInstance().getPreafab("dragItem");
                                        (h.parent = p.node.parent),
                                            h.setPosition(
                                                p.node.parent.convertToNodeSpaceAR(r.convertToWorldSpaceAR(cc.v3(0, 0)))
                                            ),
                                            h.getComponent(d.default).init(f),
                                            r.getComponent(u.default).removeData();
                                        var v = p.node.parent.convertToNodeSpaceAR(
                                            o.convertToWorldSpaceAR(cc.v3(0, 0, 0))
                                        );
                                        cc.tween(h)
                                            .to(0.2, {position: v})
                                            .call(function () {
                                                o.getComponent(u.default).hideShovel(),
                                                    g.default.getInstance().recoverRole(h);
                                                var t = g.default.getInstance().getPreafab("SynthesisAni");
                                                (t.parent = e.node.parent),
                                                    t.setPosition(v),
                                                    t.getComponent(c.default).play(a, function () {
                                                        l.default.playEffect("hecheng");
                                                        var n = Number(a.level) + 1,
                                                            i = y.default.getInstance().getShovelCfg(n);
                                                        o.getComponent(u.default).init(i),
                                                            e.machineMaxLevel(n, i),
                                                            b.default.boxItemAni(o.getChildByName("shovel")),
                                                            g.default.getInstance().recoverRole(t),
                                                            (e.isHeChengIng = !1),
                                                            (o.getComponent(u.default).isHcIng = !1),
                                                            e.radomShowAdBox();
                                                    });
                                            })
                                            .start();
                                    }
                                    n = ++t;
                                },
                                p = this,
                                f = 0;
                            f < i.length;
                            f++
                        )
                            r(f), (f = n);
            }),
            r([P(cc.Node)], t.prototype, "synthesisLayer", void 0),
            r([P(cc.Node)], t.prototype, "dragBox", void 0),
            r([P(cc.Node)], t.prototype, "remove", void 0),
            r([P(cc.Node)], t.prototype, "storedItem", void 0),
            r([P(cc.Node)], t.prototype, "adFastLokedBox", void 0),
            r([P(cc.Label)], t.prototype, "automaticSynLabel", void 0),
            r([w], t)
        );
    })(cc.Component);
o.default = D;
