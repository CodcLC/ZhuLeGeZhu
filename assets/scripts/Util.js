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
var n = cc._decorator,
    i = n.ccclass,
    r =
        (n.property,
        (function () {
            function e() {}
            var t;
            return (
                (t = e),
                (e.randomInt = function (e) {
                    return Math.floor(Math.random() * e);
                }),
                (e.randomInt1 = function (e, t) {
                    return Math.floor(e + Math.random() * (t - e));
                }),
                (e.randomInt2 = function (e, t) {
                    return Math.floor(e + Math.random() * (t - e + 1));
                }),
                (e.randomPlusOrMinusOne = function () {
                    return Math.random() < 0.5 ? 1 : -1;
                }),
                (e.arrayRandomNum = function (e, t) {
                    for (var o = []; o.length < t; ) {
                        var a = (Math.random() * e.length) >> 0;
                        o.push(e.splice(a, 1));
                    }
                    return o;
                }),
                (e.formatNumToString = function (e, t) {
                    return void 0 === t && (t = 1), e >= 1e5 ? (e / 1e4).toFixed(t) + "万" : e.toString();
                }),
                (e.formatNum2ToString = function (e, t) {
                    if ((void 0 === t && (t = 1), e >= 1e3)) {
                        var o = Math.floor(e / 1e3) + "",
                            a = 0;
                        return (
                            Math.floor((e % 1e3) / 100) > 0 && ((o += "/" + Math.floor((e % 1e3) / 100)), (a = 1)),
                            Math.floor(((e % 1e3) % 100) / 10) > 0 &&
                                (0 == a && (o += "/0"), (o += Math.floor(((e % 1e3) % 100) / 10))),
                            o + "."
                        );
                    }
                    return e.toString();
                }),
                (e.formatNum3ToString = function (e, t) {
                    if ((void 0 === t && (t = 1), e >= 1e3)) {
                        var o = Math.floor(e / 1e3) + "",
                            a = 0;
                        return (
                            Math.floor((e % 1e3) / 100) > 0 && ((o += "." + Math.floor((e % 1e3) / 100)), (a = 1)),
                            Math.floor(((e % 1e3) % 100) / 10) > 0 &&
                                (0 == a && (o += ".0"), (o += Math.floor(((e % 1e3) % 100) / 10))),
                            o + "k"
                        );
                    }
                    return e.toString();
                }),
                (e.getTimeString = function (e) {
                    var t = e,
                        o = Math.floor(t / 60),
                        a = Math.floor(o / 60);
                    return (
                        (a < 10 ? "0" : "") +
                        a +
                        ":" +
                        ((o -= 60 * a) < 10 ? "0" : "") +
                        o +
                        ":" +
                        ((t = t - 3600 * a - 60 * o) < 10 ? "0" : "") +
                        t
                    );
                }),
                (e.getTimeString2 = function (e) {
                    var t = e,
                        o = Math.floor(t / 60),
                        a = Math.floor(o / 60);
                    return (
                        (t = t - 3600 * a - 60 * (o -= 60 * a)),
                        a > 0
                            ? (a < 10 ? "0" : "") + a + ":" + (o < 10 ? "0" : "") + o
                            : (o < 10 ? "0" : "") + o + ":" + (t < 10 ? "0" : "") + t
                    );
                }),
                (e.dateIsToday = function (e) {
                    return !!e && new Date(e).toDateString() == new Date().toDateString();
                }),
                (e.dataIsWeek = function (e) {
                    var t = new Date(e).getTime() / 864e5,
                        o = new Date().getTime() / 864e5;
                    return Math.floor((t + 4) / 7) == Math.floor((o + 4) / 7);
                }),
                (e.loadLocalSpriteFrame = function (e, t, o) {
                    cc.loader.loadRes(e, cc.SpriteFrame, function (e, a) {
                        e ? (console.error(e), o.apply(t, [null])) : o.apply(t, [a]);
                    });
                }),
                (e.loadLocalTexure = function (e, t, o) {
                    cc.loader.loadRes(e, cc.Texture2D, function (e, a) {
                        e ? (console.error(e), o.apply(t, [null])) : o.apply(t, [a]);
                    });
                }),
                (e.loadLocalSpriteFrameToSprite = function (e, t, o, a) {
                    void 0 === o && (o = 1),
                        void 0 === a && (a = null),
                        cc.loader.loadRes(e, cc.SpriteFrame, function (e, o) {
                            e ? console.error(e) : t && ((t.spriteFrame = o), a && a());
                        });
                }),
                (e.loadLocalAtlasSpriteFrame = function (e, t, o, a) {
                    cc.loader.loadRes(e, cc.SpriteAtlas, function (e, n) {
                        e ? (console.error(e), a.apply(o, [null])) : a.apply(o, [n.getSpriteFrame(t)]);
                    });
                }),
                (e.loadLocalAtlasSpriteFrameToSprite = function (e, t, o) {
                    cc.loader.loadRes(e, cc.SpriteAtlas, function (e, a) {
                        e
                            ? (console.error(e), o && (o.spriteFrame = null))
                            : o && (o.spriteFrame = a.getSpriteFrame(t));
                    });
                }),
                (e.preloadSpriteFrame = function (e, t, o) {
                    cc.loader.loadResArray(e, cc.SpriteFrame, function (e) {
                        e && console.error(e), o.apply(t);
                    });
                }),
                (e.loadServerImageToSprite = function (e, t, o) {
                    //console.log(1,e,t,o)
                    cc.loader.load({url: e, type: "jpg"}, function (a, n) {
                        !a && n instanceof cc.Texture2D
                            ? (t && (t.spriteFrame = new cc.SpriteFrame(n)), o && o())
                            : a && (console.log("remoteUrl:", e), console.log(a));
                    });
                }),
                (e.preloadServerImages = function (e, t, o) {
                    //console.log(2,e,t,o)
                    cc.loader.load(e, function (e) {
                        if (e) return console.log(e), void o.apply(t, [!1]);
                        o.apply(t, [!0]);
                    });
                }),
                (e.loadServerImage = function (e, t, o) {
                    //console.log(3,e,t,o)
                    cc.loader.load(e, function (a, n) {
                        !a && n instanceof cc.Texture2D
                            ? o.apply(t, [!0, n])
                            : (a && (console.log("remoteUrl:", e), console.log(a)), o.apply(t, [!1]));
                    });
                }),
                (e.randomShakeNode = function (e, o, a) {
                    void 0 === o && (o = 1), void 0 === a && (a = 10);
                    for (var n = [], i = 0; i < o; i++) {
                        var r = cc.v2(t.randomInt2(-a, a), t.randomInt2(-a, a));
                        n.push(cc.moveBy(0.03, r)), n.push(cc.moveBy(0.03, r.neg()));
                    }
                    e.runAction(cc.sequence(n));
                }),
                (e.destroySceneNode = function (e, t, o) {
                    if (o) {
                        var a = o.getChildByName(e);
                        a && a.isValid && cc.isValid(a, !0) && (a.destroy(), cc.sys.garbageCollect());
                    }
                }),
                (e.getRotationAngle = function (e, t) {
                    var o = Math.atan2(t.y - e.y, t.x - e.x);
                    return o < 0 ? (o += 2 * Math.PI) : o > 2 * Math.PI && (o -= 2 * Math.PI), (180 * o) / Math.PI;
                }),
                (e.translateNodePosition = function (e, t) {
                    return e && e.parent && t && t.parent
                        ? e.parent.convertToNodeSpaceAR(t.parent.convertToWorldSpaceAR(t.position))
                        : (console.error("translateNodePosition null err"), null);
                }),
                (e.readLocalStoreStr = function (e, o) {
                    try {
                        var a;
                        if (null != (a = cc.sys.localStorage.getItem(t.gameName + e)) && "" != a) return a;
                    } catch (e) {
                        console.error(e);
                    }
                    return o;
                }),
                (e.writeLocalStoreStr = function (e, o) {
                    try {
                        cc.sys.localStorage.setItem(t.gameName + e, o);
                    } catch (e) {
                        console.error(e);
                    }
                }),
                (e.clearAllLocalStore = function () {
                    cc.sys.localStorage.clear();
                }),
                (e.getLabelStr = function (e) {
                    return e < 0 ? "" + e : "+" + e;
                }),
                (e.getLabelColor = function (e) {
                    return e < 0 ? cc.Color.RED : e > 0 ? cc.color(224, 194, 51, 255) : cc.Color.WHITE;
                }),
                (e.getQualityColor = function (e) {
                    return 2 == e
                        ? cc.color(56, 255, 56, 255)
                        : 3 == e
                        ? cc.color(55, 152, 255, 255)
                        : 4 == e
                        ? cc.color(240, 97, 255, 255)
                        : 5 == e
                        ? cc.color(255, 105, 64, 255)
                        : 6 == e
                        ? cc.color(255, 41, 36, 255)
                        : 7 == e
                        ? cc.color(255, 56, 137, 255)
                        : cc.Color.WHITE;
                }),
                (e.getWeightAwards = function (e, t) {
                    for (var o = [], a = 0; a < t && !(e.length <= 0); a++) {
                        for (var n = this.getWeightAward(e), i = 0; i < e.length; i++)
                            if (e[i].id == n.id) {
                                e.splice(i, 1);
                                break;
                            }
                        o.push(n);
                    }
                    return o;
                }),
                (e.getWeightAward = function (e) {
                    var t;
                    e.sort(function (e, t) {
                        return e.weight - t.weight;
                    });
                    var o = (t = this.arrWeightAdd(e))[t.length - 1].weight,
                        a = Math.random() * o;
                    return this.getRadomAward(a, t);
                }),
                (e.getRadomAward = function (e, t) {
                    if (1 == t.length) return t[0].id;
                    var o = 0;
                    if (e <= t[0].weight) return t[o];
                    if (e >= t[t.length - 1].weight) return t[(o = t.length - 1)];
                    for (var a = 0; a < t.length; a++)
                        if (e <= t[a].weight) o = a;
                        else {
                            if (e > t[a].weight && e <= t[a + 1].weight) {
                                o = a + 1;
                                break;
                            }
                            if (e > t[a].weight && e <= t[a + 1].weight) {
                                o = a + 1;
                                break;
                            }
                        }
                    return t[o];
                }),
                (e.arrWeightAdd = function (e) {
                    if (!e || e.length <= 0) return [];
                    for (var t = [], o = 0; o < e.length; o++)
                        0 == o ? (t[o] = e[o]) : ((t[o] = e[o]), (t[o].weight = t[o - 1].weight + e[o].weight));
                    return t;
                }),
                (e.getMapPosByNodePos = function (e, t, o) {
                    (e = null != e ? e : 0), (t = null != t ? t : 0), (e += 1536), (t += 2560);
                    var a = Math.floor(e / 30),
                        n = o - 1 - Math.floor(t / 30);
                    return cc.v2(a, n);
                }),
                (e.getCountDays = function (e) {
                    var t = new Date(e),
                        o = t.getMonth();
                    return t.setMonth(o + 1), t.setDate(0), t.getDate();
                }),
                (e.playShakeEffect = function (e) {
                    var t = e.position.x,
                        o = e.position.y;
                    cc.tween(e)
                        .to(0.02, {x: t + 5, y: o + 7})
                        .to(0.02, {x: t - 6, y: o + 7})
                        .to(0.02, {x: t - 13, y: o + 3})
                        .to(0.02, {x: t + 3, y: o - 6})
                        .to(0.02, {x: t - 5, y: o + 5})
                        .to(0.02, {x: t + 2, y: o - 8})
                        .to(0.02, {x: t - 8, y: o - 10})
                        .to(0.02, {x: t + 3, y: o + 10})
                        .to(0.02, {x: t, y: o})
                        .start();
                }),
                (e.boxItemAni = function (e) {
                    (e.scale = 0), cc.tween(e).to(0.2, {scale: 1}, {easing: "backOut"}).start();
                }),
                (e.getCircularPoint = function (e, t, o) {
                    for (var a = [], n = 0; n < o; n++) {
                        var i = (n * (360 / o) * Math.PI) / 180,
                            r = e[0] + t * Math.cos(i),
                            c = e[1] + t * Math.sin(i);
                        a.push([r, c]);
                    }
                    return a;
                }),
                (e.timestampToTime = function (e) {
                    var t = new Date(e);
                    return (
                        t.getFullYear() +
                        "年" +
                        (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) +
                        "月" +
                        (t.getDate() < 10 ? "0" + t.getDate() : t.getDate()) +
                        "日"
                    );
                }),
                (e.gameName = "SyntheticSandWarrior"),
                (t = a([i], e))
            );
        })());
o.default = r;
