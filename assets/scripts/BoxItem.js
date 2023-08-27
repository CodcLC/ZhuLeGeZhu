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
var r = e("AdTimeAward"),
    c = e("Global"),
    l = e("GameMgr"),
    s = e("NodePoolMgr"),
    u = e("Util"),
    d = cc._decorator,
    f = d.ccclass,
    h = d.property,
    y = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.shovelIcon = null),
                (t.levelLabel = null),
                (t.treasureChest = null),
                (t.light = null),
                (t.isHcIng = !1),
                (t.posIndex = 0),
                (t.isDragIng = !1),
                (t.itemData = null),
                (t.radomLevel = 0),
                (t.isLocked = !1),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.init = function (e) {
                e
                    ? ((this.isDragIng = !1),
                      (this.isHcIng = !1),
                      this.treasureChest.stopAllActions(),
                      (this.itemData = e),
                      l.default.isNoShovel(this.itemData) ||
                          ((this.treasureChest.active = !1),
                          u.default.loadLocalSpriteFrameToSprite(
                              "shovel/shovel_" + this.itemData.level,
                              this.shovelIcon
                          ),
                          (this.levelLabel.string = this.itemData.level + ""),
                          (c.default.playerBaseData.shovel[this.posIndex.toString()] = this.itemData.level),
                          (this.node.getChildByName("shovel").active = !0),
                          this.hideLight()))
                    : this.removeData();
            }),
            (t.prototype.initBox = function (e) {
                if (
                    (this.removeData(),
                    (c.default.playerBaseData.shovel[this.posIndex.toString()] = e),
                    (this.isDragIng = !1),
                    (this.shovelIcon.spriteFrame = null),
                    (this.itemData = e),
                    this.hideLight(),
                    1e4 == e)
                )
                    u.default.loadLocalSpriteFrameToSprite(
                        "public/icon_gifts_spbox",
                        this.treasureChest.getComponent(cc.Sprite)
                    );
                else if (10001 == e)
                    u.default.loadLocalSpriteFrameToSprite(
                        "public/icon_gifts_box",
                        this.treasureChest.getComponent(cc.Sprite)
                    );
                else {
                    if (10002 == e) return void this.initAdBox(1);
                    if (10003 == e) return void this.initShovel();
                    if (10004 == e)
                        u.default.loadLocalSpriteFrameToSprite(
                            "public/icon_gifts_boxturntable",
                            this.treasureChest.getComponent(cc.Sprite)
                        );
                    else {
                        if (10005 == e) return void this.initAdBox(2);
                        if (10006 == e) return void this.initAdBox(3);
                        if (10007 == e) return void this.initShovel2();
                        if (2e4 == e) return void this.initAdBox(4);
                        if (20001 == e)
                            u.default.loadLocalSpriteFrameToSprite(
                                "shovel/20000",
                                this.treasureChest.getComponent(cc.Sprite)
                            );
                        else {
                            if (20002 == e) return void this.initAdBox(5);
                            if (20003 == e)
                                return (
                                    u.default.loadLocalSpriteFrameToSprite(
                                        "shovel/20002",
                                        this.treasureChest.getComponent(cc.Sprite)
                                    ),
                                    void (this.treasureChest.active = !0)
                                );
                            if (20004 == e) return void this.initAdBox(6);
                            20005 == e &&
                                u.default.loadLocalSpriteFrameToSprite(
                                    "shovel/20004",
                                    this.treasureChest.getComponent(cc.Sprite)
                                );
                        }
                    }
                }
                (this.treasureChest.active = !0),
                    cc
                        .tween(this.treasureChest)
                        .repeatForever(cc.tween().to(1, {scale: 0.95}).to(1, {scale: 1.1}))
                        .start();
            }),
            (t.prototype.initAdBox = function (e) {
                var t = this,
                    o = s.default.getInstance().getPreafab("AdTimeAward");
                o.parent = this.node;
                var a = "gift_box_ordinary";
                1 == e
                    ? ((a = "gift_box_senior"), (l.default.isShowAdGJBox = !0))
                    : 3 == e
                    ? ((a = "gift_box_turntable"), (l.default.isShowAdTurnTable = !0))
                    : 2 == e
                    ? (l.default.isShowAdPTBox = !0)
                    : 4 == e
                    ? (a = "gift_dragon_ball")
                    : 5 == e
                    ? (a = "gift_bit")
                    : 6 == e && (a = "gift_scraping"),
                    o.getComponent(r.default).play(a, function () {
                        s.default.getInstance().recoverRole(o),
                            t.removeData(),
                            1 == e
                                ? (l.default.isShowAdGJBox = !1)
                                : 2 == e
                                ? (l.default.isShowAdPTBox = !1)
                                : 3 == e && (l.default.isShowAdTurnTable = !1);
                    }),
                    (o.getChildByName("level").active = !1);
            }),
            (t.prototype.initShovel = function () {
                var e = this;
                l.default.isShowAdShovel = !0;
                var t = s.default.getInstance().getPreafab("AdTimeAward");
                (t.parent = this.node),
                    (this.radomLevel = c.default.playerBaseData.maxShovelLevel - 2),
                    this.radomLevel < 1 && (this.radomLevel = 1),
                    t.getComponent(r.default).play("shovel_" + this.radomLevel, function () {
                        s.default.getInstance().recoverRole(t), e.removeData(), (l.default.isShowAdShovel = !1);
                    }),
                    (t.getChildByName("level").getChildByName("lable").getComponent(cc.Label).string =
                        this.radomLevel + ""),
                    (t.getChildByName("level").active = !0);
            }),
            (t.prototype.initShovel2 = function () {
                var e = this;
                l.default.isShowAdShovel2 = this.node;
                var t = s.default.getInstance().getPreafab("AdTimeAward");
                t.parent = this.node;
                var o = c.default.playerBaseData.maxShovelLevel - 5;
                o < c.default.playerBaseData.generateShovelLV && (o = c.default.playerBaseData.generateShovelLV),
                    (this.radomLevel = u.default.randomInt2(c.default.playerBaseData.generateShovelLV, o)),
                    t.getComponent(r.default).play("shovel_" + this.radomLevel, function () {
                        s.default.getInstance().recoverRole(t), e.removeData(), (l.default.isShowAdShovel2 = null);
                    }),
                    (t.getChildByName("level").getChildByName("lable").getComponent(cc.Label).string =
                        this.radomLevel + ""),
                    (t.getChildByName("level").active = !0);
            }),
            (t.prototype.getData = function () {
                return this.itemData;
            }),
            (t.prototype.iconHide = function () {
                (this.isDragIng = !0),
                    (this.treasureChest.active = !1),
                    (this.node.getChildByName("shovel").active = !1),
                    this.hideLight();
            }),
            (t.prototype.removeData = function () {
                (this.isDragIng = !1),
                    (this.treasureChest.active = !1),
                    (this.node.getChildByName("shovel").active = !1),
                    (this.itemData = null),
                    (c.default.playerBaseData.shovel[this.posIndex.toString()] = null);
                var e = this.node.getChildByName("AdTimeAward");
                e && s.default.getInstance().recoverRole(e);
            }),
            (t.prototype.hideShovel = function () {
                this.node.getChildByName("shovel").active = !1;
            }),
            (t.prototype.showLight = function () {
                this.light.active = !0;
            }),
            (t.prototype.hideLight = function () {
                this.light.active = !1;
            }),
            i([h(cc.Sprite)], t.prototype, "shovelIcon", void 0),
            i([h(cc.Label)], t.prototype, "levelLabel", void 0),
            i([h(cc.Node)], t.prototype, "treasureChest", void 0),
            i([h(cc.Node)], t.prototype, "light", void 0),
            i([f], t)
        );
    })(cc.Component);
o.default = y;
