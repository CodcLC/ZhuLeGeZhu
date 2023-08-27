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
var c = e("ScrollViewPlus"),
    l = e("AudioSystem"),
    s = e("Global"),
    u = e("ProvinceBox"),
    d = e("EventMgr"),
    f = e("GameMgr"),
    h = e("LoadResMgr"),
    y = e("PopupManager"),
    g = e("ByteDanceApi"),
    v = e("Https"),
    m = e("Util"),
    b = e("TipsCtl"),
    _ = cc._decorator,
    S = _.ccclass,
    C = _.property,
    B = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.scrollView = null),
                (t.content = null),
                (t.provinceBox = null),
                (t.goldLabel = null),
                (t.gemLabel = null),
                (t.buyShovelBtn = null),
                (t.buyShovelPro = null),
                (t.buyShovelLabel = null),
                (t.activeArea = null),
                (t.dingweiBtn = null),
                (t.tipsCtl = null),
                (t.curLevel = null),
                (t.curRank = null),
                (t.sdNode = null),
                (t.sdPostionYP = 0),
                (t.currnPos = null),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.onLoad = function () {
                var e = this;
                (f.default.getInstance().curBuyShovel = h.default
                    .getInstance()
                    .getShovelCfg(s.default.playerBaseData.generateShovelLV)),
                    (f.default.getInstance().maxShovelLVPro = f.default.getInstance().curBuyShovel.levelUp),
                    this.initEvent(),
                    this.updateResources(1),
                    this.updateResources(2),
                    this.udpateCreatorShovel(),
                    this.scheduleOnce(function () {
                        e.changeView(!0);
                    });
            }),
            (t.prototype.start = function () {}),
            (t.prototype.showMain = function () {
                0 == s.default.playerBaseData.guideIndex
                    ? f.default.getInstance().showGuideNode()
                    : 1 == s.default.playerBaseData.guideEventIndex &&
                      this.scheduleOnce(function () {
                          f.default.getInstance().showGuideNode(2);
                      }, 0.2);
            }),
            (t.prototype.initEvent = function () {
                d.default.BroadCast.on({key: "updateResources", listener: this.updateResources, context: this});
            }),
            (t.prototype.onDestroy = function () {
                d.default.BroadCast.off("updateResources", this.updateResources, this);
            }),
            (t.prototype.updateResources = function (e) {
                if (e)
                    if (1 == e)
                        (this.goldLabel.string = m.default.formatNumToString(s.default.playerBaseData.gold)),
                            this.udpateBtnVis();
                    else if (2 == e) this.gemLabel.string = m.default.formatNumToString(s.default.playerBaseData.brick);
                    else if (3 == e) {
                        this.buyShovelLabel.string =
                            m.default.formatNum3ToString(s.default.playerBaseData.shovelLVPro) +
                            "/" +
                            m.default.formatNum3ToString(f.default.getInstance().maxShovelLVPro);
                        var t = s.default.playerBaseData.shovelLVPro / f.default.getInstance().maxShovelLVPro;
                        t <= 0 && (t = 0.002), (this.buyShovelPro.progress = t);
                    } else 4 == e && this.udpateCreatorShovel();
            }),
            (t.prototype.udpateCreatorShovel = function () {
                var e = h.default.getInstance().getShovelCfg(s.default.playerBaseData.generateShovelLV);
                m.default.loadLocalSpriteFrameToSprite(
                    "shovel/shovel_" + e.level,
                    this.buyShovelBtn.node.getChildByName("icon").getComponent(cc.Sprite)
                ),
                    (this.buyShovelBtn.node.getChildByName("level").getComponent(cc.Label).string = e.level),
                    (this.buyShovelBtn.node
                        .getChildByName("gold")
                        .getChildByName("iconNum")
                        .getComponent(cc.Label).string = m.default.formatNum2ToString(Number(e.buyCoin)));
            }),
            (t.prototype.udpateBtnVis = function () {
                if (
                    (f.default.getInstance().curBuyShovel ||
                        (f.default.getInstance().curBuyShovel = h.default
                            .getInstance()
                            .getShovelCfg(s.default.playerBaseData.generateShovelLV)),
                    f.default.getInstance().curBuyShovel)
                ) {
                    var e = Number(f.default.getInstance().curBuyShovel.buyCoin);
                    s.default.playerBaseData.gold >= e
                        ? ((this.buyShovelBtn.node.getChildByName("gold").active = !0),
                          (this.buyShovelBtn.node.getChildByName("mianfei").active = !1))
                        : ((this.buyShovelBtn.node.getChildByName("gold").active = !1),
                          (this.buyShovelBtn.node.getChildByName("mianfei").active = !0));
                }
            }),
            (t.prototype.updateLevel = function () {
                var e = this;
                v.default.sendPost("rank/province", {page: 1, pagenum: 36}, function (t) {
                    e.udpateListView(t);
                }),
                    v.default.sendPost("rank/todaycaoduo", {}, function (t) {
                        e.tipsCtl.udpateLabel("今日贡献草垛" + t.data.count + "个");
                    }),
                    (this.curLevel.string = "第" + s.default.playerBaseData.curLevel + "关");
            }),
            (t.prototype.udpateListView = function (e) {
                var t = this,
                    o = e.data.ranks;
                o.sort(function (e, t) {
                    return t.caoduo - e.caoduo;
                });
                for (var a = 0; a < o.length; a++) {
                    var n = this.content.children[a + 1];
                    n || ((n = cc.instantiate(this.provinceBox)).parent = this.content),
                        n.getComponent(u.default).init(o[a], a + 1),
                        s.default.myArea == o[a].area &&
                            ((this.sdNode = n), (this.curRank.string = "第" + (a + 1) + "名"));
                }
                setTimeout(function () {
                    t.scrollView.optDc(), t.scrollUpdateBack();
                }, 300);
            }),
            (t.prototype.changeView = function (e) {
                f.default.getInstance().guideNode && (f.default.getInstance().guideNode.parent = null),
                    (cc.find("Canvas/Main").active = e),
                    (cc.find("Canvas/Game").active = !e),
                    e
                        ? (l.default.playBGMusic("mianbgm"),
                          (cc.find("Canvas/TopLayer/AwardBox").active = !1),
                          this.updateLevel(),
                          this.showMain())
                        : l.default.playBGMusic("gamebgm");
            }),
            (t.prototype.playGameClick = function () {
                l.default.playEffect("click"), this.changeView(!1);
            }),
            (t.prototype.backHomeClick = function () {
                l.default.playEffect("click"), this.changeView(!0);
            }),
            (t.prototype.clearCache = function () {
                m.default.writeLocalStoreStr("TChestRecordData", null),
                    m.default.writeLocalStoreStr("SyntheticMinerMapData", null),
                    m.default.writeLocalStoreStr("SyntheticMinerData", null);
            }),
            (t.prototype.openTurnTable = function () {
                l.default.playEffect("click");
                var e = {mode: y.PopupCacheMode.Frequent};
                y.default.show("popups/TurntablePopup", {}, e);
            }),
            (t.prototype.openSetUpPopup = function () {
                l.default.playEffect("click");
                var e = {mode: y.PopupCacheMode.Frequent};
                y.default.show("popups/SetUpPopup", {}, e);
            }),
            (t.prototype.onClickaddShortcut = function () {
                l.default.playEffect("click"), g.default.addShortcut();
            }),
            (t.prototype.onFavoriteStateChange = function () {
                l.default.playEffect("click"), g.default.showFavoriteGuide();
            }),
            (t.prototype.checkFollowAwemeState = function () {
                l.default.playEffect("click"), g.default.openAwemeUserProfile();
            }),
            (t.prototype.getImRankList = function () {
                l.default.playEffect("click"), g.default.getImRankList();
            }),
            (t.prototype.enterHaystack = function () {
                l.default.playEffect("click"), cc.director.loadScene("haystack");
            }),
            (t.prototype.scrollUpdateBack = function () {
                if (this.sdNode) {
                    var e = this.activeArea.getBoundingBoxToWorld(),
                        t = this.sdNode.getBoundingBoxToWorld();
                    e.intersects(t) ? (this.dingweiBtn.active = !1) : (this.dingweiBtn.active = !0);
                }
            }),
            (t.prototype.positioning = function () {
                l.default.playEffect("click"),
                    this.scrollView.scrollToOffset(cc.v2(0, Math.abs(this.sdNode.y) - cc.winSize.height / 2), 0.2);
            }),
            (t.prototype.openPersonalProfilePopup = function () {
                l.default.playEffect("click");
                var e = {mode: y.PopupCacheMode.Frequent};
                y.default.show("popups/PersonalProfilePopup", {}, e);
            }),
            r([C(c.default)], t.prototype, "scrollView", void 0),
            r([C(cc.Node)], t.prototype, "content", void 0),
            r([C(cc.Node)], t.prototype, "provinceBox", void 0),
            r([C(cc.Label)], t.prototype, "goldLabel", void 0),
            r([C(cc.Label)], t.prototype, "gemLabel", void 0),
            r([C(cc.Button)], t.prototype, "buyShovelBtn", void 0),
            r([C(cc.ProgressBar)], t.prototype, "buyShovelPro", void 0),
            r([C(cc.Label)], t.prototype, "buyShovelLabel", void 0),
            r([C(cc.Node)], t.prototype, "activeArea", void 0),
            r([C(cc.Node)], t.prototype, "dingweiBtn", void 0),
            r([C(b.default)], t.prototype, "tipsCtl", void 0),
            r([C(cc.Label)], t.prototype, "curLevel", void 0),
            r([C(cc.Label)], t.prototype, "curRank", void 0),
            r([S], t)
        );
    })(cc.Component);
o.default = B;
