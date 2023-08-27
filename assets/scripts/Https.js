var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var a = (function () {
    function e() {}
    return (
        (e.sendGet = function (e, t) {
            e = this.ServerHost + e;
            var o = new XMLHttpRequest();
            (o.onreadystatechange = function () {
                if (4 == o.readyState && o.status >= 200 && o.status < 400) {
                    var e = o.response;
                    t && t(JSON.parse(e));
                }
            }),
                (o.ontimeout = function () {
                    t && t(null);
                }),
                (o.onerror = function (e) {
                    t && t(null), console.log(e);
                }),
                o.open("GET", e),
                o.setRequestHeader("Content-Type", "application/json"),
                (o.responseType = "json"),
                o.send();
        }),
        (e.sendPost = function (t, o, a) {
            void 0 === a && (a = null), (t = this.ServerHost + t);
            var n = JSON.stringify(o),
                i = window.CryptoJS.MD5("yuanzililiang"),
                r = window.CryptoJS.enc.Utf8.parse(n),
                c = window.CryptoJS.AES.encrypt(r, i, {
                    iv: i,
                    mode: window.CryptoJS.mode.CBC,
                    padding: window.CryptoJS.pad.Iso10126
                }),
                l = {params: (c = c.toString())};
            n = JSON.stringify(l);
            var s = new XMLHttpRequest();
            (s.onload = function () {
                200 == s.status ? a && a(s.response) : a && a(null);
            }),
                (s.ontimeout = function () {
                    a && a();
                }),
                (s.onerror = function (e) {
                    a && a(), console.log(e);
                }),
                s.open("POST", t),
                s.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
                s.setRequestHeader("X-TOKEN", e.Account),
                (s.responseType = "json"),
                s.send(n);
        }),
        (e.ServerHost = "https://game.yuanzililiang.cn/yangyang/"),
        (e.Account = ""),
        e
    );
})();
o.default = a;
