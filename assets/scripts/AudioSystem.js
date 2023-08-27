var e = require;
var t = module;
var o = exports;
var a =
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
var n = e("Global"),
    r = cc._decorator,
    c = r.ccclass,
    l =
        (r.property,
        (function () {
            function e() {}
            var t;
            return (
                (t = e),
                (e.loadAudioClip = function () {
                    cc.loader.loadResDir(t.filePrefix, cc.AudioClip, function (e, o, a) {
                        if (e) cc.log(e);
                        else {
                            for (var n = 0; n < a.length; n++) t.allAudioClips[a[n]] = o[n];
                            (t.audioClipsLoadFinish = !0), t.isPlayBgm && t.bgmName && t.playBGMusic(t.bgmName);
                        }
                    }),
                        (cc.sys.platform != cc.sys.ANDROID && cc.sys.os != cc.sys.OS_IOS) ||
                            (cc.game.on(cc.game.EVENT_HIDE, function () {
                                cc.audioEngine.pauseMusic(), cc.audioEngine.pauseAllEffects();
                            }),
                            cc.game.on(cc.game.EVENT_SHOW, function () {
                                cc.audioEngine.resumeMusic(), cc.audioEngine.resumeAllEffects();
                            }));
                }),
                (e.playEffect = function (e) {
                    var o = this;
                    if (n.default.playerBaseData.effectSwitch && !t.isHideStatus) {
                        if ("stshuikai" == e) {
                            if (this.isLock) return;
                            (this.isLock = !0),
                                setTimeout(function () {
                                    o.isLock = !1;
                                }, 200);
                        }
                        var a = t.filePrefix + e;
                        t.audioClipsLoadFinish &&
                            t.allAudioClips[a] &&
                            (t.effectAudioID = cc.audioEngine.play(t.allAudioClips[a], !1, 1));
                    }
                }),
                (e.playBGMusic = function (e) {
                    if (n.default.playerBaseData.musicSwitch) {
                        t.stopBGMusic(), (t.isPlayBgm = !0), (t.bgmName = e);
                        var o = t.filePrefix + e;
                        t.audioClipsLoadFinish &&
                            t.allAudioClips[o] &&
                            ((t.bgmAudioID = cc.audioEngine.playMusic(t.allAudioClips[o], !0)),
                            cc.audioEngine.setMusicVolume(1));
                    }
                }),
                (e.stopBGMusic = function () {
                    t.isPlayBgm = !1;
                    try {
                        null != t.bgmAudioID && (cc.audioEngine.stopMusic(), (t.bgmAudioID = null));
                    } catch (e) {
                        cc.log(e);
                    }
                }),
                (e.pauseBGMusic = function () {
                    try {
                        null != t.bgmAudioID && cc.audioEngine.pauseMusic();
                    } catch (e) {
                        cc.log(e);
                    }
                }),
                (e.resumeBGMusic = function () {
                    if (n.default.playerBaseData.musicSwitch)
                        try {
                            t.isPlayBgm && null != t.bgmAudioID && cc.audioEngine.resumeMusic();
                        } catch (e) {
                            cc.log(e);
                        }
                }),
                (e.onShow = function () {
                    (t.isHideStatus = !1), t.resumeBGMusic();
                }),
                (e.onHide = function () {
                    (t.isHideStatus = !0), t.pauseBGMusic();
                }),
                (e.allAudioClips = []),
                (e.audioClipsLoadFinish = !1),
                (e.isPlayBgm = !1),
                (e.bgmName = null),
                (e.bgmAudioID = 0),
                (e.isHideStatus = !1),
                (e.filePrefix = "sounds/"),
                (e.effectAudioID = -1),
                (e.isLock = !1),
                (t = a([c], e))
            );
        })());
o.default = l;
