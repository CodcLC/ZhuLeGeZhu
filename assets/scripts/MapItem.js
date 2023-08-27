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
var c = e("AnimationCtl"),
    l = e("ShovelCtl"),
    s = e("AudioSystem"),
    u = e("Global"),
    d = e("EventMgr"),
    f = e("GameMgr"),
    h = e("LoadResMgr"),
    y = e("NodePoolMgr"),
    g = e("ByteDanceApi"),
    v = e("Util"),
    m = cc._decorator,
    b = m.ccclass,
    _ = m.property,
    S = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.icon1 = null),
                (t.icon2 = null),
                (t.itemData = null),
                (t.itemData2 = null),
                (t.lotHealth = 0),
                (t.damageState = 0),
                (t.flawNode = null),
                (t.mapType = 1),
                (t.mapType2 = 1),
                (t.propAnim = null),
                (t.isDie = !1),
                (t.mapPos = null),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.init = function (e, t) {
                (this.mapPos = t),
                    (this.itemData2 = null),
                    this.icon2 && (this.icon2.node.active = !1),
                    this.propAnim && (y.default.getInstance().recoverRole(this.propAnim), (this.propAnim = null)),
                    this.node.getChildByName("spnode").removeAllChildren(),
                    (this.isDie = !1),
                    (this.damageState = 0),
                    (this.mapType = e.type),
                    1 == this.mapType
                        ? ((this.itemData = h.default.getInstance().getMapItemCfg(e.id)),
                          9 == this.itemData.id
                              ? (this.lotHealth =
                                    Number(this.itemData.blood) *
                                    Number(f.default.getInstance().levelCfg.bloodAddition))
                              : (this.lotHealth = Number(this.itemData.blood)),
                          v.default.loadLocalSpriteFrameToSprite("mapIcons/" + this.itemData.picWay, this.icon1))
                        : 2 == this.mapType
                        ? ((this.itemData = h.default.getInstance().getMapItem2Cfg(e.id)),
                          (this.lotHealth = 1),
                          (this.icon1.spriteFrame = null),
                          (this.propAnim = y.default.getInstance().getPreafab("PropAnim")),
                          (this.propAnim.parent = this.node),
                          this.propAnim.setPosition(0, -10),
                          this.propAnim.getComponent(sp.Skeleton).setAnimation(0, this.itemData.breatheAnim, !0))
                        : 3 == this.mapType
                        ? ((this.itemData = h.default.getInstance().getMapItem3Cfg(e.id)),
                          (this.lotHealth = 1),
                          v.default.loadLocalSpriteFrameToSprite("shovel/" + this.itemData.picWay, this.icon1))
                        : 4 == this.mapType &&
                          ((this.itemData = e.id),
                          (this.lotHealth = 1),
                          v.default.loadLocalSpriteFrameToSprite("shovel/" + e.id, this.icon1)),
                    e.boxId &&
                        ((this.icon2.node.active = !0),
                        (this.mapType2 = e.boxType),
                        1 == this.mapType2
                            ? ((this.itemData2 = h.default.getInstance().getMapItemCfg(e.boxId)),
                              v.default.loadLocalSpriteFrameToSprite("mapIcons/" + this.itemData2.picWay, this.icon2))
                            : 2 == this.mapType2
                            ? ((this.itemData2 = h.default.getInstance().getMapItem2Cfg(e.boxId)),
                              (this.propAnim = y.default.getInstance().getPreafab("PropAnim")),
                              (this.propAnim.parent = this.node.getChildByName("spnode")),
                              this.propAnim.setPosition(0, -10),
                              this.propAnim.getComponent(sp.Skeleton).setAnimation(0, this.itemData2.breatheAnim, !0),
                              (this.icon2.node.active = !1))
                            : 3 == this.mapType2 &&
                              ((this.itemData2 = h.default.getInstance().getMapItem3Cfg(e.boxId)),
                              v.default.loadLocalSpriteFrameToSprite("shovel/" + this.itemData2.picWay, this.icon2))),
                    (this.flawNode = this.node.getChildByName("flaw")),
                    (this.flawNode.active = !1);
            }),
            (t.prototype.onCollisionEnter = function (e) {
                var t = e.node.getComponent(l.default);
                if (t) {
                    var o = t.attack;
                    if (((this.lotHealth -= o), this.lotHealth <= 0))
                        g.default.vibrateShort(), this.soilBlockDie(), this.itemData2 && this.itemData2Logic();
                    else {
                        var a = 0;
                        this.lotHealth <= Number(this.itemData.type_3)
                            ? (a = 3)
                            : this.lotHealth <= Number(this.itemData.type_2)
                            ? (a = 2)
                            : this.lotHealth <= Number(this.itemData.type_1) && (a = 1),
                            a != this.damageState &&
                                a > 0 &&
                                ((this.damageState = a),
                                v.default.loadLocalSpriteFrameToSprite(
                                    "mapIcons/block_breach_" + a,
                                    this.flawNode.getComponent(cc.Sprite)
                                ),
                                (this.flawNode.active = !0)),
                            e.node.getComponent(l.default).applyForce();
                    }
                }
            }),
            (t.prototype.soilBlockDie = function () {
                var e = this;
                if (!this.isDie)
                    if (((this.isDie = !0), 1 == this.mapType)) {
                        var t = (n = cc.find("Canvas/Game/EffectLayer")).convertToNodeSpaceAR(
                            this.node.convertToWorldSpaceAR(cc.v2(0, 0))
                        );
                        y.default.getInstance().boomEffPlay(this.itemData.tatteredAnim, t, n),
                            8 == this.itemData.id
                                ? ((u.default.tChestRecord[this.mapPos] = 1),
                                  cc
                                      .find("Canvas/AnimationCtl")
                                      .getComponent(c.default)
                                      .playObtainingClods(10, null, this.node))
                                : Number(this.itemData.coinAdd) > 0 &&
                                  f.default.getInstance().addGlod(Number(this.itemData.coinAdd)),
                            y.default.getInstance().recoverRole(this.node);
                    } else if (2 == this.mapType) {
                        var o = null;
                        if (1 == this.itemData.id)
                            (o = y.default.getInstance().getPreafab("Boom2")), s.default.playEffect("boom");
                        else if (2 == this.itemData.id) o = y.default.getInstance().getPreafab("Boom1");
                        else if (3 == this.itemData.id) {
                            y.default.getInstance().recoverRole(this.propAnim), (this.propAnim = null);
                            var a = {ordinaryGiftBox: 1};
                            return (
                                d.default.BroadCast.broadcast("addBoxOrShovelAward", a),
                                (u.default.tChestRecord[this.mapPos] = 1),
                                void u.default.saveTChestRecordData()
                            );
                        }
                        var n = cc.find("Canvas/Game/EffectLayer");
                        this.propAnim.parent = n;
                        var r = n.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                        this.propAnim.setPosition(r),
                            y.default.getInstance().recoverRole(this.node),
                            this.propAnim.getComponent(sp.Skeleton).setAnimation(0, this.itemData.startAnim, !1),
                            this.scheduleOnce(function () {
                                y.default.getInstance().recoverRole(e.propAnim), (e.propAnim = null);
                            }, 1),
                            o &&
                                ((o.parent = n),
                                o.setPosition(r),
                                setTimeout(function () {
                                    y.default.getInstance().recoverRole(o);
                                }, 500));
                    } else if (3 == this.mapType) {
                        (u.default.tChestRecord[this.mapPos] = 1), y.default.getInstance().recoverRole(this.node);
                        var p = y.default.getInstance().getPreafab("Shovel"),
                            h = cc.find("Canvas/Game");
                        (t = h.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)))),
                            p.getComponent(l.default).init(this.itemData2),
                            (p.parent = h),
                            p.setPosition(t),
                            f.default.getInstance().shovelList.push(p);
                    } else
                        4 == this.mapType &&
                            ((u.default.tChestRecord[this.mapPos] = 1),
                            (a = {}),
                            2e4 == this.itemData
                                ? (a.dragonBall = 1)
                                : 20002 == this.itemData
                                ? (a.drillBit = 1)
                                : 20004 == this.itemData && (a.scraping = 1),
                            d.default.BroadCast.broadcast("addBoxOrShovelAward", a),
                            y.default.getInstance().recoverRole(this.node));
            }),
            (t.prototype.itemData2Logic = function () {
                var e = this;
                if (2 == this.mapType2) {
                    var t = cc.find("Canvas/Game/EffectLayer");
                    this.propAnim.parent = t;
                    var o = t.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                    this.propAnim.setPosition(o),
                        y.default.getInstance().recoverRole(this.node),
                        this.propAnim.getComponent(sp.Skeleton).setAnimation(0, this.itemData2.startAnim, !1);
                    var a = null;
                    1 == this.itemData2.id
                        ? (this.scheduleOnce(function () {
                              y.default.getInstance().recoverRole(e.propAnim), (e.propAnim = null);
                          }, 1.5),
                          s.default.playEffect("boom"),
                          (a = y.default.getInstance().getPreafab("Boom2")))
                        : 2 == this.itemData2.id
                        ? (this.scheduleOnce(function () {
                              y.default.getInstance().recoverRole(e.propAnim), (e.propAnim = null);
                          }, 1.5),
                          (a = y.default.getInstance().getPreafab("Boom1")))
                        : 3 == this.itemData2.id &&
                          (this.scheduleOnce(function () {
                              y.default.getInstance().recoverRole(e.propAnim), (e.propAnim = null);
                          }),
                          d.default.BroadCast.broadcast("addBoxOrShovelAward", {ordinaryGiftBox: 1}),
                          (u.default.tChestRecord[this.mapPos] = 1),
                          u.default.saveTChestRecordData()),
                        a &&
                            ((a.parent = t),
                            a.setPosition(o),
                            setTimeout(function () {
                                y.default.getInstance().recoverRole(a);
                            }, 500));
                } else if (3 == this.mapType2) {
                    y.default.getInstance().recoverRole(this.node);
                    var n = y.default.getInstance().getPreafab("Shovel"),
                        r = cc.find("Canvas/Game"),
                        c = r.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                    n.getComponent(l.default).init(this.itemData2),
                        (n.parent = r),
                        n.setPosition(c),
                        f.default.getInstance().shovelList.push(n);
                }
            }),
            r([_(cc.Sprite)], t.prototype, "icon1", void 0),
            r([_(cc.Sprite)], t.prototype, "icon2", void 0),
            r([b], t)
        );
    })(cc.Component);
o.default = S;
