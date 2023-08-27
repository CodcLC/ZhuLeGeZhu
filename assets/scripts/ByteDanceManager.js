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
Object.defineProperty(o, "__esModule", {value: !0}), (o.btMgr = void 0);
var r = cc._decorator,
    s = r.ccclass,
    u =
        (r.property,
        (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.tt = null),
                    (t.videoHasStop = !1),
                    (t.videoHasEnd = !1),
                    (t.gameRecorder = null),
                    (t.totalRecord = 300),
                    (t.recordTime = 0),
                    (t.recordTimer = null),
                    (t.videoPath = ""),
                    (t.recentAdTime = new Date()),
                    t
                );
            }
            var o;
            return (
                n(t, e),
                (o = t),
                (t.instance = function () {
                    return o._instance || (o._instance = new o()), o._instance;
                }),
                (t.prototype.init = function () {
                    cc.sys.platform == cc.sys.BYTEDANCE_GAME
                        ? (this.tt = window.tt)
                        : cc.sys.platform == cc.sys.WECHAT_GAME && (this.tt = window.wx);
                }),
                (t.prototype.shareGame = function () {}),
                (t.prototype.shareAppFunc = function (e, t, o, a) {
                    this.tt.shareAppMessage({
                        title: e,
                        imageUrl: t,
                        success: function () {
                            o && o();
                        },
                        fail: function () {
                            a && a();
                        }
                    });
                }),
                (t.prototype.shareRecordVideo = function (e) {
                    var t = this;
                    this.tt.shareAppMessage({
                        title: "猪猪也疯狂",
                        channel: "video",
                        extra: {videoTopics: [], hashtag_list: [], videoPath: this.videoPath, withVideoId: !0},
                        success: function () {
                            e && e();
                        },
                        fail: function () {
                            t.checkAppName() && e && e();
                        }
                    });
                }),
                (t.prototype.checkAppName = function () {
                    var e = !1;
                    return (
                        this.tt.getSystemInfo({
                            success: function (t) {
                                "ios" === t.platform && "Toutiao" === t.appName && (e = !0);
                            },
                            fail: function (e) {
                                console.log("getSystemInfo fail: ", e);
                            }
                        }),
                        e
                    );
                }),
                (t.prototype.startRecord = function (e) {
                    // var t = this;
                    // this.tt
                    //     ? (this.gameRecorder, //|| (this.gameRecorder = this.tt.getGameRecorderManager()),
                    //       (this.videoHasEnd = !1),
                    //       (this.videoHasStop = !1),
                    //       this.gameRecorder.start({duration: this.totalRecord}),
                    //       this.gameRecorder.onStart(function () {
                    //           (t.recordTime = 0),
                    //               (t.recordTimer = setInterval(function () {
                    //                   t.recordTime++;
                    //               }, 1e3)),
                    //               e && e();
                    //       }),
                    //       this.gameRecorder.onResume(function () {
                    //           t.recordTimer = setInterval(function () {
                    //               t.recordTime++;
                    //           }, 1e3);
                    //       }),
                    //       this.gameRecorder.onPause(function () {
                    //           clearInterval(t.recordTimer);
                    //       }),
                    //       this.gameRecorder.onStop(function (e) {
                    //           (t.videoHasEnd = !0),
                    //               (t.videoPath = e.videoPath),
                    //               console.log("this.videoPath：", t.videoPath),
                    //               clearInterval(t.recordTimer),
                    //               (t.recordTime = 0);
                    //       }),
                    //       this.gameRecorder.onError(function (e) {
                    //           console.log("gameRecord error: ", e);
                    //       }))
                    //     : e && e();
                }),
                (t.prototype.resumeRecord = function (e) {
                    // this.tt &&
                    //     (this.gameRecorder
                    //         ? (this.gameRecorder.resume(), e && e())
                    //         : console.log("gameRecorder is null, resumeRecord fail"));
                }),
                (t.prototype.pauseRecord = function (e) {
                    // this.tt &&
                    //     (this.gameRecorder
                    //         ? (this.gameRecorder.pause(), e && e())
                    //         : console.log("gameRecorder is null, pauseRecord fail"));
                }),
                (t.prototype.stopRecord = function (e) {
                    // this.tt &&
                    //     (this.gameRecorder
                    //         ? (this.gameRecorder.stop(), e && e())
                    //         : console.log("gameRecorder is null, stopRecord fail"));
                }),
                (t.prototype.getVideoPath = function () {
                    return this.videoPath;
                }),
                (t.prototype.onShareFunc = function (e, t, o) {
                    var a = "";
                    this.tt.getSystemInfo({
                        success: function (e) {
                            console.log("getSystemInfo success: ", e),
                                (a = "Douyin" === e.appName ? "invite" : "Toutiao" === e.appName ? "article" : "");
                        },
                        fail: function (e) {
                            console.log("getSystemInfo fail: ", e), (a = "");
                        }
                    }),
                        this.tt.shareAppMessage({
                            title: e,
                            channel: a,
                            imageUrl: t,
                            success: function () {
                                o && o();
                            },
                            fail: function () {
                                o && o();
                            },
                            complete: function () {}
                        });
                }),
                (t._instance = null),
                (o = i([s], t))
            );
        })(cc.Component));
(o.default = u), (o.btMgr = u.instance());
