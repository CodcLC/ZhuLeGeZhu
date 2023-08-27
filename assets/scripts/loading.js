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
    l = e("ByteDanceManager"),
    s = e("EventMgr"),
    u = e("GameMgr"),
    d = e("LoadResMgr"),
    f = e("ByteDanceApi"),
    h = e("Https"),
    y = e("TTLoadingImg"),
    g = e("Util"),
    v = cc._decorator,
    m = v.ccclass,
    b = v.property,
    _ = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.pro = null),
                (t.proBox = null),
                (t.loginBtn = null),
                (t.proNum = 0),
                (t.cdTime = 4.5),
                (t.ctime = 0),
                (t.isStartGame = !1),
                (t.isSubSucess = !1),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.start = function () {
                var e = this;
                if (
                    (r.default.loadAudioClip(),
                    y.default.registerHeadImgLoader(),
                    (cc.director.getCollisionManager().enabled = !0),
                    c.default.getPlayerBaseData(),
                    c.default.getMapData(),
                    c.default.getTChestRecordData(),
                    u.default.getInstance().initSheepPoints(),
                    s.default.init(),
                    (this.pro.width = 0.01),
                    cc.director.preloadScene("game"),
                    d.default.getInstance().loadCSVCfg(),
                    l.btMgr.init(),
                    f.default.initDYVideo(),
                    f.default.showShareMenu(),
                    cc.sys.platform == cc.sys.BYTEDANCE_GAME)
                ) {
                    var t = this;
                    l.btMgr.tt.checkSession({
                        success: function () {
                            console.log("session 未过期"), t.loginStart();
                        },
                        fail: function () {
                            (t.loginBtn.active = !0), (t.proBox.active = !1);
                        }
                    }),
                        (this.isSubSucess = !0),
                        this.downSubpackage("resources", function () {
                            e.downSubpackage("spines", function () {
                                e.downSubpackage("ui", function () {
                                    e.isSubSucess = !1;
                                });
                            });
                        });
                } else
                    h.default.sendPost(
                        "player/login",
                        {openId: "fdasfsaf123123111", nickname: "游客", head: "", channel: 0},
                        function (t) {
                            e.loginBackRes(t);
                        }
                    ),
                        (this.isStartGame = !0);
            }),
            (t.prototype.downSubpackage = function (e, t) {
                l.btMgr.tt.loadSubpackage({
                    name: e,
                    success: function () {
                        t && t();
                    },
                    fail: function () {
                        this.downSubpackage(e, t);
                    }
                });
            }),
            (t.prototype.loginStart = function () {
                var e = this;
                (c.default.loginCode = ""),
                                e.getUserInfo(),
                                (e.proBox.active = !0),
                                (e.isStartGame = !0),
                                (e.loginBtn.active = !1);
                // cc.sys.platform == cc.sys.BYTEDANCE_GAME &&
                //     l.btMgr.tt.login({
                //         success: function (t) {
                //             console.log("登录成功", t),
                //                 (c.default.loginCode = t.code),
                //                 e.getUserInfo(),
                //                 (e.proBox.active = !0),
                //                 (e.isStartGame = !0),
                //                 (e.loginBtn.active = !1);
                //         },
                //         fail: function (t) {
                //             console.log("登录失败", t),
                //                 e.radomPlayData(),
                //                 (e.proBox.active = !0),
                //                 (e.isStartGame = !0),
                //                 (e.loginBtn.active = !1);
                //         }
                //     });
            }),
            (t.prototype.radomPlayData = function () {}),
            (t.prototype.loginBtnClick = function () {
                this.loginStart();
            }),
            (t.prototype.getUserInfo = function () {
                var e = 0;
                c.default.loginCode ? (e = 2) : (c.default.loginCode = "fdsafdsafdsfe23" + g.default.randomInt(1e11)),
                    (c.default.channel = e);
                var t = this;
                l.btMgr.tt.getUserInfo({
                    success: function (o) {
                        console.log("getUserInfo 调用成功", o.userInfo),
                            (c.default.nikeName = o.userInfo.nickName),
                            (c.default.headIcon = o.userInfo.avatarUrl);
                        var a = {
                            openId: c.default.loginCode,
                            nickname: c.default.nikeName,
                            head: c.default.headIcon,
                            channel: e
                        };
                        h.default.sendPost("player/login", a, function (e) {
                            t.loginBackRes(e);
                        });
                    },
                    fail: function (o) {
                        console.log("getUserInfo 调用失败", o.errMsg);
                        var a = {openId: c.default.loginCode, nickname: "游客", head: "", channel: e};
                        h.default.sendPost("player/login", a, function (e) {
                            t.loginBackRes(e);
                        });
                    }
                });
            }),
            (t.prototype.loginBackRes = function (e) {
                console.log("登陆成功返回", e),
                    (h.default.Account = e.data.base.token),
                    (c.default.myArea = e.data.base.province),
                    (c.default.creatorTime = e.data.base.createTime),
                    e.data.props &&
                        e.data.props[10] &&
                        (c.default.playerBaseData.myContribute = Number(e.data.props[10]));
            }),
            (t.prototype.update = function (e) {
                this.isStartGame &&
                    ((this.ctime += e),
                    (this.proNum = this.ctime * (1 / this.cdTime)),
                    this.proNum >= 1
                        ? ((this.proNum = 1),
                          (this.pro.width = 614 * this.proNum),
                          this.isSubSucess ||
                              cc.director.loadScene("game", function () {
                                  console.log("进入游戏~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                              }))
                        : (this.pro.width = 614 * this.proNum));
            }),
            i([b(cc.Node)], t.prototype, "pro", void 0),
            i([b(cc.Node)], t.prototype, "proBox", void 0),
            i([b(cc.Node)], t.prototype, "loginBtn", void 0),
            i([m], t)
        );
    })(cc.Component);
o.default = _;
