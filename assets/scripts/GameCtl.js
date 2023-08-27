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
var c = e("AudioSystem"),
    l = e("Global"),
    s = e("AwardBox"),
    u = e("BoxItem"),
    d = e("MapItem"),
    f = e("ByteDanceManager"),
    h = e("EventMgr"),
    y = e("GameMgr"),
    g = e("LoadResMgr"),
    v = e("NodePoolMgr"),
    m = e("PopupManager"),
    b = e("ByteDanceApi"),
    _ = e("Util"),
    S = e("AnimationCtl"),
    C = e("SynthesisCtl"),
    B = cc._decorator,
    w = B.ccclass,
    P = B.property,
    D = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.mapLayer = null),
                (t.caramer = null),
                (t.automaticSynBtn = null),
                (t.bottomTreasureLayer = null),
                (t.maxBottomY = 0),
                (t.maxCamaraY = 0),
                (t.isInit = !1),
                (t.cDtime = 0),
                (t.isPlaying = !1),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.onLoad = function () {
                (this.caramer.width = cc.view.getCanvasSize().width),
                    (this.caramer.height = cc.view.getCanvasSize().height);
            }),
            (t.prototype.start = function () {
                h.default.BroadCast.broadcast("updateResources", 3);
            }),
            (t.prototype.onEnable = function () {
                (cc.find("Canvas/Game/homeBtn").active = !0),
                    cc.find("Canvas/Game/SynthesisLayer").getComponent(C.default).updateShovel(),
                    (cc.find("Canvas/Game/CenterLayer").active = !0),
                    this.updateLevelData(),
                    (cc.find("Canvas/TopLayer/AwardBox").active = !1),
                    this.showNewPopups(),
                    f.btMgr.startRecord(function () {}),
                    (1 != l.default.playerBaseData.guideIndex && 2 != l.default.playerBaseData.guideIndex) ||
                        this.scheduleOnce(function () {
                            y.default.getInstance().showGuideNode();
                        }, 1);
            }),
            (t.prototype.onDisable = function () {
                (this.bottomTreasureLayer.active = !1), f.btMgr.stopRecord(function () {});
            }),
            (t.prototype.nextLevel = function () {
                this.updateLevelData(),
                    l.default.savePlayerBaseData(),
                    (cc.find("Canvas/TopLayer/AwardBox").active = !1),
                    this.showNewPopups();
            }),
            (t.prototype.updateLevelData = function () {
                (this.bottomTreasureLayer.active = !1),
                    (y.default.getInstance().levelCfg = g.default
                        .getInstance()
                        .getLevelCfg(l.default.playerBaseData.curLevel)),
                    (cc.find("Canvas/TopLayer/AwardBox/num").getComponent(cc.Label).string =
                        y.default.getInstance().levelCfg.clearance),
                    (this.caramer.y = 0),
                    this.updateLevelMap();
            }),
            (t.prototype.updateLevelMap = function () {
                for (y.default.getInstance().initData(); this.mapLayer.childrenCount > 0; )
                    v.default.getInstance().recoverRole(this.mapLayer.children[0]);
                0 == l.default.cuurentLevelMapData.level ||
                l.default.cuurentLevelMapData.level != l.default.playerBaseData.curLevel
                    ? ((l.default.tChestRecord = {}), this.radomLevelMap())
                    : this.updateMapItems(l.default.cuurentLevelMapData.mapData, l.default.cuurentLevelMapData.row),
                    (4 != l.default.playerBaseData.guideIndex && 5 != l.default.playerBaseData.guideIndex) ||
                        ((l.default.playerBaseData.guideIndex = 4),
                        this.scheduleOnce(function () {
                            y.default.getInstance().showGuideNode();
                        }, 0.5));
            }),
            (t.prototype.radomLevelMap = function () {
                console.log("刷新了地图数据");
                for (
                    var e = g.default.getInstance().getMapDataCfg(l.default.playerBaseData.curLevel),
                        t = this.getAreaArray(e.area1, e.area1Id, e.area1Number),
                        o = this.getAreaArray(e.area2, e.area2Id, e.area2Number),
                        a = this.getAreaArray(e.area3, e.area3Id, e.area3Number),
                        n = this.getAreaArray(e.area4, e.area4Id, e.area4Number),
                        i = o.concat(a),
                        r = [],
                        c = Number(e.glass),
                        s = 0;
                    s < c;
                    s++
                ) {
                    for (var u = [], d = 0; d < i.length; d++) 9 != i[d].id && u.push(d);
                    u.length > 0 &&
                        ((i[(P = u[_.default.randomInt(u.length)])].id = 9), Math.random() >= 0.55 && r.push(P));
                }
                var p = Number(e.brick);
                for (s = 0; s < p; s++) {
                    for (u = [], d = 0; d < i.length; d++) 8 != i[d].id && 9 != i[d].id && u.push(d);
                    u.length > 0 && (i[(P = u[_.default.randomInt(u.length)])].id = 8);
                }
                var f = [],
                    h = Number(e.giftbox),
                    y = Number(e.shovelProp),
                    v = Number(e.drillProp),
                    m = Number(e.bombProp);
                for (s = 0; s < h; s++) f.push({type: 2, id: 3});
                for (s = 0; s < y; s++) {
                    var b = l.default.playerBaseData.maxShovelLevel - 12;
                    b < 1 && (b = 1);
                    var S = l.default.playerBaseData.maxShovelLevel - 4,
                        C = _.default.randomInt2(S, b);
                    C < 1 && (C = _.default.randomInt2(1, l.default.playerBaseData.maxShovelLevel)),
                        f.push({type: 3, id: C});
                }
                for (s = 0; s < v; s++) f.push({type: 2, id: 2});
                for (s = 0; s < m; s++) f.push({type: 2, id: 1});
                for (s = 0; s < r.length; s++)
                    for (var B = 0; B < f.length; B++)
                        if (3 == f[s].type) {
                            if (Math.random() < 0.1) {
                                (i[r[s]].boxId = f[s].id), (i[r[s]].boxType = f[s].type);
                                break;
                            }
                        } else {
                            var w = 0;
                            if (
                                (1 == f[s].id || 2 == f[s].id ? (w = 0.1) : 3 == f[s].id && (w = 0.15),
                                Math.random() < w)
                            ) {
                                (i[r[s]].boxId = f[s].id), (i[r[s]].boxType = f[s].type);
                                break;
                            }
                        }
                for (s = 0; s < f.length; s++) {
                    var P;
                    for (u = [], d = 0; d < i.length; d++) 9 != i[d].id && 8 != i[d].id && u.push(d);
                    u.length > 0 && ((i[(P = u[_.default.randomInt(u.length)])].id = f[s].id), (i[P].type = f[s].type));
                }
                var D = Math.random();
                if (D < 0.75) {
                    var x = _.default.randomInt(i.length);
                    (i[x].id = D >= 0.6 ? 2e4 : D >= 0.4 && D < 0.6 ? 20002 : 20004), (i[x].type = 4);
                }
                var I = [
                    {pos: 0, id: 1, type: 1},
                    {pos: 1, id: 2, type: 1},
                    {pos: 2, id: 3, type: 1},
                    {pos: 3, id: 4, type: 1},
                    {pos: 4, id: 5, type: 1}
                ].concat(t, i, n);
                this.updateMapItems(I, Number(e.row)),
                    (l.default.cuurentLevelMapData.level = l.default.playerBaseData.curLevel),
                    (l.default.cuurentLevelMapData.row = Number(e.row)),
                    (l.default.cuurentLevelMapData.mapData = I),
                    l.default.saveMapData();
            }),
            (t.prototype.updateMapItems = function (e, t) {
                for (var o = 0; o < e.length; o++)
                    if (-1 != e[o].id && !l.default.tChestRecord[e[o].pos]) {
                        var a = v.default.getInstance().getPreafab("MapItem");
                        a.parent = this.mapLayer;
                        var n = e[o].pos;
                        a.setPosition((n % 5) * 120 - 240, -(115 * Math.floor(n / 5) + 70)),
                            (a.zIndex = a.y),
                            a.getComponent(d.default).init(e[o], n);
                    }
                var i = 120 * t + 720;
                (this.maxCamaraY = -(i - 600)), (this.isPlaying = !1), this.updateBottom(i), this.optimizeShowMap();
            }),
            (t.prototype.getAreaArray = function (e, t, o) {
                for (
                    var a = [],
                        n = e.split("_"),
                        i = t.split("_"),
                        r = o.split("_"),
                        c = Number(n[0]),
                        l = Number(n[1]),
                        s = c;
                    s <= l;
                    s++
                )
                    for (var u = 0; u < 5; u++) a.push({pos: 5 * (s - 1) + u, id: -1, type: 1});
                for (s = 0; s < i.length; s++)
                    if (0 != i[s]) {
                        var d = r[s];
                        for (u = 0; u < d; u++) {
                            for (var p = [], f = 0; f < a.length; f++) -1 == a[f].id && p.push(f);
                            if (0 == p.length) break;
                            a[p[_.default.randomInt(p.length)]].id = Number(i[s]);
                        }
                    }
                return a;
            }),
            (t.prototype.updateBottom = function (e) {
                (this.isPlaying = !1),
                    (y.default.getInstance().openTreasure = 0),
                    this.bottomTreasureLayer.setPosition(0, -e),
                    (this.maxBottomY = 500 - e);
                for (var t = 0; t < this.bottomTreasureLayer.childrenCount; t++)
                    this.bottomTreasureLayer.children[t].getComponent(s.default).init(null);
                this.bottomTreasureLayer.active = !0;
            }),
            (t.prototype.testClick = function () {
                var e = cc.find("Canvas/TopLayer/GlodBox/icon_coin");
                cc.find("Canvas/AnimationCtl").getComponent(S.default).playGetCoinAni(e);
            }),
            (t.prototype.zidonghecheng = function () {
                var e = this;
                y.default.getInstance().synCountdown > 0 ||
                    (c.default.playEffect("click"),
                    b.default.playAdVideo(function (t) {
                        t &&
                            ((y.default.getInstance().synCountdown = 90),
                            (e.automaticSynBtn.getChildByName("icon_advertising_bordered").active = !1),
                            (cc.find("stateLabel", e.automaticSynBtn).getComponent(cc.Label).string =
                                y.default.getInstance().synCountdown + "s"));
                    }));
            }),
            (t.prototype.showNewPopups = function () {
                var e = {mode: m.PopupCacheMode.Frequent};
                m.default.show("popups/NewGoalsPopup", null, e);
            }),
            (t.prototype.lateUpdate = function () {
                1 == y.default.gameState && this.optimizeShowMap();
            }),
            (t.prototype.optimizeShowMap = function () {
                var e = this.caramer.parent.convertToWorldSpaceAR(
                        cc.v2(
                            this.caramer.x - this.caramer.anchorX * this.caramer.width,
                            this.caramer.y - this.caramer.anchorY * this.caramer.height
                        )
                    ),
                    t = cc.rect(e.x, e.y, this.caramer.width, this.caramer.height);
                this.mapLayer.children.forEach(function (e) {
                    e.getBoundingBoxToWorld().intersects(t) ? (e.opacity = 255) : (e.opacity = 0);
                });
            }),
            (t.prototype.update = function (e) {
                var t = this;
                if (1 == y.default.gameState)
                    if (0 != y.default.getInstance().shovelList.length) {
                        if (!this.isPlaying) {
                            if (this.maxBottomY >= this.caramer.y) {
                                if (((this.caramer.y = this.maxBottomY), (this.cDtime += e), this.cDtime < 0.5)) return;
                                for (var o = 0, a = 0; a < y.default.getInstance().shovelList.length; a++)
                                    o > y.default.getInstance().shovelList[a].y &&
                                        (o = y.default.getInstance().shovelList[a].y);
                                if (Math.abs(this.maxBottomY) - Math.abs(o) < cc.view.getVisibleSize().height / 2)
                                    return;
                                return (
                                    (this.isPlaying = !0),
                                    void cc
                                        .tween(this.caramer)
                                        .to(0.2, {y: o})
                                        .call(function () {
                                            t.isPlaying = !1;
                                        })
                                        .start()
                                );
                            }
                            this.cDtime = 0;
                            var n = this.caramer.y;
                            for (a = 0; a < y.default.getInstance().shovelList.length; a++)
                                n > y.default.getInstance().shovelList[a].y &&
                                    (n = y.default.getInstance().shovelList[a].y);
                            this.maxBottomY > n && (n = this.maxBottomY), (this.caramer.y = n);
                        }
                    } else {
                        y.default.gameState = 0;
                        var r = Number(y.default.getInstance().levelCfg.clearance);
                        y.default.getInstance().openTreasure >= r
                            ? setTimeout(function () {
                                  c.default.playEffect("jiesuan");
                                  var e = {
                                          data: null,
                                          confirmCallback: function () {
                                              t.backLevel(!0);
                                          }
                                      },
                                      o = {mode: m.PopupCacheMode.Frequent};
                                  m.default.show("popups/SettlementInterfacePopup", e, o);
                              }, 1e3)
                            : (setTimeout(function () {
                                  t.backLevel(!1);
                              }, 1e3),
                              Math.random() < 0.5 &&
                                  (y.default.isShowAdShovel2 &&
                                      y.default.isShowAdShovel2.getComponent(u.default).removeData(),
                                  h.default.BroadCast.broadcast("addBoxOrShovelAward", {adGiftShovelLose: 1})));
                    }
            }),
            (t.prototype.backLevel = function (e) {
                var t = this;
                (this.bottomTreasureLayer.active = !1), (cc.find("Canvas/Game/homeBtn").active = !0);
                var o = Math.abs(this.caramer.y / 2e3);
                cc.tween(this.caramer)
                    .to(o, {y: 0}, {easing: "backOut"})
                    .call(function () {
                        cc.find("Canvas/Game/SynthesisLayer").getComponent(C.default).updateShovel(),
                            (cc.find("Canvas/Game/CenterLayer").active = !0),
                            e ? t.nextLevel() : t.updateLevelMap(),
                            0 == l.default.playerBaseData.guideEventIndex &&
                                l.default.playerBaseData.brick >= 10 &&
                                y.default.getInstance().showGuideNode(2);
                    })
                    .start();
            }),
            (t.prototype.playVideoADAward = function () {
                b.default.playAdVideo(function (e) {
                    if (e) {
                        var t = {ordinaryGiftBox: _.default.randomInt2(1, 5)};
                        h.default.BroadCast.broadcast("addBoxOrShovelAward", t);
                    }
                });
            }),
            r([P(cc.Node)], t.prototype, "mapLayer", void 0),
            r([P(cc.Node)], t.prototype, "caramer", void 0),
            r([P(cc.Node)], t.prototype, "automaticSynBtn", void 0),
            r([P(cc.Node)], t.prototype, "bottomTreasureLayer", void 0),
            r([w], t)
        );
    })(cc.Component);
o.default = D;
