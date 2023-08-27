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
var r = e("GuideCtl"),
    c = e("Global"),
    l = e("Https"),
    s = e("Util"),
    u = e("EventMgr"),
    d = e("LoadResMgr"),
    f = e("NodePoolMgr"),
    h = cc._decorator,
    y = h.ccclass,
    g =
        (h.property,
        (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.shovelList = []),
                    (t.synCountdown = 0),
                    (t.levelCfg = null),
                    (t.openTreasure = 0),
                    (t.maxShovelLVPro = 0),
                    (t.curBuyShovel = null),
                    (t.advancedGiftBox = 0),
                    (t.ordinaryGiftBox = 0),
                    (t.awardList = []),
                    (t.sheepPoints = []),
                    (t.guideNode = null),
                    t
                );
            }
            var o;
            return (
                n(t, e),
                (o = t),
                (t.getInstance = function () {
                    return null == o._instance && (o._instance = new o()), o._instance;
                }),
                (t.prototype.showGuideNode = function (e) {
                    void 0 === e && (e = 1),
                        this.guideNode
                            ? o.getInstance().guideNode.parent ||
                              ((o.getInstance().guideNode.parent = cc.find("Canvas")),
                              (o.getInstance().guideNode.getComponent(r.default).guideType = e),
                              o.getInstance().guideNode.getComponent(r.default).showGuide())
                            : cc.resources.load("prefabes/GuideNode", function (t, a) {
                                  t ||
                                      ((o.getInstance().guideNode = cc.instantiate(a)),
                                      (o.getInstance().guideNode.parent = cc.find("Canvas")),
                                      (o.getInstance().guideNode.getComponent(r.default).guideType = e),
                                      o.getInstance().guideNode.getComponent(r.default).showGuide());
                              });
                }),
                (t.prototype.initSheepPoints = function () {
                    var e = s.default.getCircularPoint([0, 0], 120, 6),
                        t = s.default.getCircularPoint([0, 0], 200, 12),
                        o = s.default.getCircularPoint([0, 0], 290, 17);
                    this.sheepPoints = e.concat(t, o);
                }),
                (t.prototype.initData = function () {
                    (this.advancedGiftBox = 0), (this.ordinaryGiftBox = 0);
                    for (var e = 0; e < this.awardList.length; e++)
                        f.default.getInstance().recoverRole(this.awardList[e]);
                    this.awardList = [];
                }),
                (t.prototype.addGlod = function (e) {
                    (c.default.playerBaseData.gold += e),
                        c.default.playerBaseData.gold < 0 && (c.default.playerBaseData.gold = 0),
                        u.default.BroadCast.broadcast("updateResources", 1);
                }),
                (t.prototype.addBrick = function (e) {
                    (c.default.playerBaseData.brick += e),
                        c.default.playerBaseData.brick < 0 && (c.default.playerBaseData.brick = 0),
                        u.default.BroadCast.broadcast("updateResources", 2);
                }),
                (t.prototype.addShovelPro = function (e) {
                    (c.default.playerBaseData.shovelLVPro += e),
                        c.default.playerBaseData.shovelLVPro >= o.getInstance().maxShovelLVPro &&
                            ((c.default.playerBaseData.shovelLVPro -= o.getInstance().maxShovelLVPro),
                            (c.default.playerBaseData.generateShovelLV += 1),
                            (this.curBuyShovel = d.default
                                .getInstance()
                                .getShovelCfg(c.default.playerBaseData.generateShovelLV)),
                            (o.getInstance().maxShovelLVPro = this.curBuyShovel.levelUp),
                            u.default.BroadCast.broadcast("updateResources", 4)),
                        u.default.BroadCast.broadcast("updateResources", 3);
                }),
                (t.isNoShovel = function (e) {
                    return (
                        1e4 == e ||
                        10001 == e ||
                        10002 == e ||
                        10003 == e ||
                        10004 == e ||
                        10005 == e ||
                        10006 == e ||
                        10007 == e ||
                        2e4 == e ||
                        20001 == e ||
                        20002 == e ||
                        20003 == e ||
                        20004 == e ||
                        20005 == e
                    );
                }),
                (t.prototype.sendPost = function (e, t) {
                    l.default.sendPost("player/updateProps ", e, function (e) {
                        t && t(e);
                    });
                }),
                (t.gameState = 0),
                (t.isShowAdPTBox = !1),
                (t.isShowAdGJBox = !1),
                (t.isShowAdTurnTable = !1),
                (t.isShowAdShovel = !1),
                (t.isShowAdShovel2 = null),
                (t._instance = null),
                (o = i([y], t))
            );
        })(cc.Component));
o.default = g;
