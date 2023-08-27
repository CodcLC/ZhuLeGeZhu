var e = require;
var t = module;
var o = exports;
var u = e("Util");
Object.defineProperty(o, "__esModule", {value: !0}), (o.headImgExt = void 0), (o.headImgExt = ".head");
var a = (function () {
    function e() {}
    return (
        (e.registerHeadImgLoader = function () {
            cc.assetManager.downloader.register(o.headImgExt, function (e, t, o) {
                o(null, e);
            }),
                cc.assetManager.parser.register(o.headImgExt, this.downloadDomImage),
                cc.assetManager.factory.register(o.headImgExt, function (e, t, o, a) {
                    var n = null,
                        i = null;
                    try {
                        ((n = new cc.Texture2D())._uuid = e), (n._nativeUrl = e), (n._nativeAsset = t);
                    } catch (e) {
                        i = e;
                    }
                    a && a(i, n);
                });
        }),
        (e.downloadDomImage = function (e, t, o) {
            var a = new Image();
            function n() {
                a.removeEventListener("load", n), a.removeEventListener("error", i), o && o(null, a);
            }
            function i() {
                a.removeEventListener("load", n), a.removeEventListener("error", i), o && o(new Error(e));
            }
            return (
                "file:" !== window.location.protocol && (a.crossOrigin = "anonymous"),
                a.addEventListener("load", n),
                a.addEventListener("error", i),
                (a.src = e),
                a
            );
        }),
        (e.loadTTImageToSprite = function (e, t, a) {
            var randNum = u.default.randomInt2(1,168)
            var imgPath = '/headImage/' + 'headImage' + randNum.toString() +'.JPG'
            // console.log(imgPath)
            cc.loader.loadRes(imgPath, cc.SpriteFrame, function (o, n) {
                n
                    ? (t && (t.spriteFrame = n), a && a())
                    : o && (console.log(imgPath), console.log(o));
            });
            // cc.assetManager.loadRemote(e, {ext: o.headImgExt}, function (o, n) {
            //     n
            //         ? (t && (t.spriteFrame = new cc.SpriteFrame(n)), a && a())
            //         : o && (console.log("remoteUrl:", e), console.log(o));
            // });
        }),
        e
    );
})();
o.default = a;
