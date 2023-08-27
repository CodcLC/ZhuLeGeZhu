var e = require;
var t = module;
window.CryptoJS.pad.Iso10126 = {
    pad: function (e, t) {
        var o = (o = 4 * t) - (e.sigBytes % o);
        e.concat(CryptoJS.lib.WordArray.random(o - 1)).concat(CryptoJS.lib.WordArray.create([o << 24], 1));
    },
    unpad: function (e) {
        e.sigBytes -= 255 & e.words[(e.sigBytes - 1) >>> 2];
    }
};
