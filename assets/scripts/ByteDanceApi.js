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
    l = e("ByteDanceManager"),
    s = e("PopupManager"),
    u = e("Util"),
    d = cc._decorator,
    f = d.ccclass,
    h =
        (d.property,
        (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.vibrateShort = function () {
                    c.default.playerBaseData.effectSwitch &&
                        cc.sys.platform == cc.sys.BYTEDANCE_GAME &&
                        l.btMgr.tt.vibrateShort({
                            success: function (e) {
                                console.log(e);
                            },
                            fail: function (e) {
                                console.log("vibrateShort调用失败", e);
                            }
                        });
                }),
                (t.initDYVideo = function () {
                    var e = this;
                    cc.sys.platform == cc.sys.BYTEDANCE_GAME &&
                        ((this.videoAd = l.btMgr.tt.createRewardedVideoAd({
                            adUnitId: this.rewardIds[u.default.randomInt(this.rewardIds.length)],
                            success: function () {},
                            fail: function () {
                                console.log("视频加载失败~"), (this.isVideoIng = !1);
                            }
                        })),
                        this.videoAd.onLoad(function () {
                            l.btMgr.tt.hideLoading(), console.log("广告加载完成");
                        }),
                        this.videoAd.onError(function () {
                            l.btMgr.tt.hideLoading(), console.log("视频加载失败~"), (e.isVideoIng = !1);
                        }),
                        this.videoAd.onClose(function (t) {
                            t.isEnded
                                ? e.callBackFunc && e.callBackFunc(!0)
                                : (console.log("观看中断！无法获取奖励~"), e.callBackFunc && e.callBackFunc(!1)),
                                (e.isVideoIng = !1);
                        }),
                        this.videoAd.load());
                }),
                (t.playAdVideo = function (e) {
                    cc.sys.platform != cc.sys.BYTEDANCE_GAME || c.default.isNoAdvideo
                        ? e && e(!0)
                        : (l.btMgr.tt.showLoading(),
                          (this.isVideoIng = !0),
                          (this.callBackFunc = e),
                          this.videoAd.show());
                }),
                (t.restartGame = function () {
                    setTimeout(function () {
                        s.default.hideAll(), cc.director.loadScene("game");
                    }, 800);
                }),
                (t.checkShortcut = function (e) {
                    cc.sys.platform == cc.sys.BYTEDANCE_GAME &&
                        l.btMgr.tt.checkShortcut({
                            success: function (t) {
                                console.log("检查快捷方式", t.status), t.status.exist ? e && e(!0) : e && e(!1);
                            },
                            fail: function (t) {
                                console.log("检查快捷方式失败", t.errMsg), e && e(!1);
                            }
                        });
                }),
                (t.addShortcut = function () {
                    cc.sys.platform == cc.sys.BYTEDANCE_GAME &&
                        l.btMgr.tt.addShortcut({
                            success: function () {
                                console.log("添加桌面成功");
                            },
                            fail: function (e) {
                                console.log("添加桌面失败", e.errMsg);
                            }
                        });
                }),
                (t.on = function () {
                    l.btMgr.tt.onFavoriteStateChange(function (e) {
                        e ? console.log("收藏成功") : console.log("收藏失败");
                    });
                }),
                (t.showFavoriteGuide = function () {
                    cc.sys.platform == cc.sys.BYTEDANCE_GAME &&
                        l.btMgr.tt.showFavoriteGuide({
                            type: "customize",
                            success: function (e) {
                                console.log("isFavorited", e.isFavorited);
                            },
                            fail: function () {
                                console.log("自定义弹窗展示失败");
                            }
                        });
                }),
                (t.openAwemeUserProfile = function () {}),
                (t.setImRankData = function () {
                    cc.sys.platform == cc.sys.BYTEDANCE_GAME &&
                        l.btMgr.tt.setImRankData &&
                        l.btMgr.tt.setImRankData({
                            dataType: 0,
                            value: c.default.playerBaseData.curLevel + "",
                            priority: 0,
                            extra: "extra",
                            success: function (e) {
                                console.log("setImRankData success res: " + e);
                            },
                            fail: function (e) {
                                console.log("setImRankData fail res: " + e.errMsg);
                            }
                        });
                }),
                (t.showShareMenu = function () {
                    cc.sys.platform == cc.sys.BYTEDANCE_GAME &&
                        l.btMgr.tt.showShareMenu({
                            success: function () {
                                console.log("已成功显示转发按钮");
                            },
                            fail: function (e) {
                                console.log("showShareMenu 调用失败", e.errMsg);
                            },
                            complete: function () {
                                console.log("showShareMenu 调用完成");
                            }
                        });
                }),
                (t.getImRankList = function () {
                    cc.sys.platform == cc.sys.BYTEDANCE_GAME &&
                        l.btMgr.tt.getImRankList({
                            relationType: "all",
                            dataType: 0,
                            rankType: "day",
                            suffix: "关",
                            rankTitle: "等级排行榜",
                            success: function (e) {
                                console.log("getImRankData success res: " + e);
                            },
                            fail: function (e) {
                                console.log("getImRankData fail res: " + e.errMsg);
                            }
                        });
                }),
                (t.getLocation = function () {
                    cc.sys.platform == cc.sys.BYTEDANCE_GAME &&
                        l.btMgr.tt.getLocation({
                            success: function (e) {
                                console.log("经度" + e.longitude + "，维度" + e.latitude), console.log("城市" + e.city);
                            },
                            fail: function () {
                                console.log("getLocation调用失败");
                            }
                        });
                }),
                (t.videoAd = null),
                (t.callBackFunc = null),
                (t.isVideoIng = !1),
                (t.rewardIds = ["eyf9u8of664li8gkjd", "1kcfgoeh1d6csbwd22", "24crswxno3w5nc1ii0"]),
                r([f], t)
            );
        })(cc.Component));
o.default = h;
