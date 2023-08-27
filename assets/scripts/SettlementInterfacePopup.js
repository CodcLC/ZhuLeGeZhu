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
    l = e("AudioSystem"),
    s = e("Global"),
    u = e("ByteDanceManager"),
    d = e("EventMgr"),
    f = e("GameMgr"),
    h = e("PopupBase"),
    y = e("ByteDanceApi"),
    g = e("Util"),
    v = cc._decorator,
    m = v.ccclass,
    b = v.property,
    _ = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.levelLabel = null),
                (t.getBtn1 = null),
                (t.getBtn2 = null),
                (t.getBtn3 = null),
                (t.awardLayer = null),
                (t.effectSp = null),
                (t.shareView = null),
                (t.advancedGiftBox = 0),
                (t.awardGlod = 0),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.init = function () {
                f.default.getInstance().openTreasure >= 3 ? this.openShareView() : (this.shareView.active = !1),
                    3 == f.default.getInstance().levelCfg.label
                        ? (this.awardGlod = 200 * f.default.getInstance().openTreasure)
                        : (this.awardGlod = 100 * f.default.getInstance().openTreasure),
                    (this.levelLabel.string = "关卡" + s.default.playerBaseData.curLevel + "完成"),
                    (s.default.playerBaseData.curLevel += 1),
                    y.default.setImRankData(),
                    (this.advancedGiftBox = 0);
                for (var e = 0; e < this.awardLayer.childrenCount; e++) this.awardLayer.children[e].active = !1;
                var t,
                    o = 0;
                if (this.awardGlod > 0) {
                    var a = (t = this.awardLayer.children[o]).getChildByName("icon").getComponent(cc.Sprite);
                    g.default.loadLocalSpriteFrameToSprite("public/icon_coin", a),
                        (t.getChildByName("num").getComponent(cc.Label).string = "x" + this.awardGlod),
                        (t.active = !0),
                        o++;
                }
                1 == f.default.getInstance().levelCfg.labelSpe && (this.advancedGiftBox = 1),
                    f.default.getInstance().advancedGiftBox > 0 &&
                        ((a = (t = this.awardLayer.children[o]).getChildByName("icon").getComponent(cc.Sprite)),
                        g.default.loadLocalSpriteFrameToSprite("public/icon_gifts_spbox", a),
                        (t.getChildByName("num").getComponent(cc.Label).string =
                            "x" + f.default.getInstance().advancedGiftBox),
                        (t.active = !0),
                        o++),
                    f.default.getInstance().ordinaryGiftBox > 0 &&
                        ((a = (t = this.awardLayer.children[o]).getChildByName("icon").getComponent(cc.Sprite)),
                        g.default.loadLocalSpriteFrameToSprite("public/icon_gifts_box", a),
                        (t.getChildByName("num").getComponent(cc.Label).string =
                            "x" + f.default.getInstance().ordinaryGiftBox),
                        (t.active = !0),
                        o++),
                    (this.getBtn1.active = this.getBtn2.active = this.getBtn3.active = !0),
                    this.effectSp.setAnimation(0, "start", !1),
                    u.btMgr.stopRecord(function () {});
            }),
            (t.prototype.doubleClick = function () {
                var e = this;
                l.default.playEffect("click"),
                    y.default.playAdVideo(function (t) {
                        t && (e.backHome(2), (e.getBtn1.active = e.getBtn2.active = e.getBtn3.active = !1));
                    });
            }),
            (t.prototype.putongClick = function () {
                l.default.playEffect("click"),
                    this.backHome(1),
                    (this.getBtn1.active = this.getBtn2.active = this.getBtn3.active = !1);
            }),
            (t.prototype.backHome = function (e) {
                var t = this;
                this.awardGlod &&
                    (cc.find("Canvas/AnimationCtl").getComponent(c.default).playGetCoinAni(),
                    f.default.getInstance().addGlod(this.awardGlod * e),
                    setTimeout(function () {
                        t.hide(), t.options.confirmCallback && t.options.confirmCallback();
                    }, 500));
                var o = {advancedGiftBox: this.advancedGiftBox * e};
                d.default.BroadCast.broadcast("addBoxOrShovelAward", o), s.default.savePlayerBaseData();
            }),
            (t.prototype.onConfirmBtnClick = function () {
                this.hide(),
                    this.options.confirmCallback && this.options.confirmCallback(),
                    s.default.savePlayerBaseData();
            }),
            (t.prototype.shareApp = function () {
                var e = this;
                console.log("是否完成", u.btMgr.videoHasStop),
                    u.btMgr.shareRecordVideo(function () {
                        e.backHome(2);
                    });
            }),
            (t.prototype.openShareView = function () {
                (this.shareView.active = !0),
                    (this.shareView.scale = 0.1),
                    cc.tween(this.shareView).to(0.2, {scale: 1}).start();
            }),
            (t.prototype.hideShareView = function () {
                l.default.playEffect("click"), (this.shareView.active = !1);
            }),
            (t.prototype.shareAwardClick = function () {
                var e = this;
                l.default.playEffect("click"),
                    u.default.instance().shareAppFunc(
                        "猪猪也疯狂",
                        "",
                        function () {
                            d.default.BroadCast.broadcast("addBoxOrShovelAward", {ordinaryGiftBox: 5}),
                                (e.shareView.active = !1);
                        },
                        function () {}
                    );
            }),
            r([b(cc.Label)], t.prototype, "levelLabel", void 0),
            r([b(cc.Node)], t.prototype, "getBtn1", void 0),
            r([b(cc.Node)], t.prototype, "getBtn2", void 0),
            r([b(cc.Node)], t.prototype, "getBtn3", void 0),
            r([b(cc.Node)], t.prototype, "awardLayer", void 0),
            r([b(sp.Skeleton)], t.prototype, "effectSp", void 0),
            r([b(cc.Node)], t.prototype, "shareView", void 0),
            r([m], t)
        );
    })(h.default);
o.default = _;
