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
    l = e("GameMgr"),
    s = e("NodePoolMgr"),
    u = e("Util"),
    d = cc._decorator,
    f = d.ccclass,
    h =
        (d.property,
        (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.showRate = null), t;
            }
            return (
                n(t, e),
                (t.prototype.start = function () {
                    this.node.zIndex = 9999;
                }),
                (t.prototype.playGetCoinAni = function (e) {
                    void 0 === e && (e = null), e || (e = cc.find("Canvas/TopLayer/GlodBox/icon_coin"));
                    for (
                        var t = this.node.convertToNodeSpaceAR(e.convertToWorldSpaceAR(cc.v2(0, 0))),
                            o = u.default.randomInt1(20, 30),
                            a = function () {
                                var o = s.default.getInstance().getPreafab("Glod");
                                (o.parent = n.node),
                                    o.setPosition(0, 0),
                                    cc
                                        .tween(o)
                                        .to(
                                            0.2,
                                            {
                                                position: cc.v3(
                                                    u.default.randomInt1(-150, 150),
                                                    u.default.randomInt1(-150, 150)
                                                )
                                            },
                                            {easing: "cubicOut"}
                                        )
                                        .delay(0.1)
                                        .to(0.3, {position: cc.v3(t.x, t.y)}, {easing: "cubicIn"})
                                        .call(function () {
                                            cc.tween(e).to(0.2, {scale: 1.2}).to(0.2, {scale: 1}).start(),
                                                s.default.getInstance().recoverRole(o);
                                        })
                                        .start();
                            },
                            n = this,
                            i = 0;
                        i < o;
                        i++
                    )
                        a();
                }),
                (t.prototype.playObtainingCoin = function (e, t, o, a) {
                    void 0 === t && (t = null),
                        void 0 === o && (o = null),
                        void 0 === a && (a = 1),
                        t || (t = cc.find("Canvas/TopLayer/GlodBox/icon_coin"));
                    var n = this.node.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.v2(0, 0))),
                        i = 10;
                    1 == a ? (i = u.default.randomInt2(3, 6)) : 2 == a && (i = u.default.randomInt2(5, 12));
                    for (var r = e % i, c = Math.floor(e / i), l = 0; l < i; l++)
                        0 == l &&
                            (1 == a ? this.creatroPlayCoin(r, n, o, t) : 2 == a && this.creatroPlayCoin2(r, n, o, t)),
                            1 == a ? this.creatroPlayCoin(c, n, o, t) : 2 == a && this.creatroPlayCoin2(c, n, o, t);
                }),
                (t.prototype.creatroPlayCoin = function (e, t, o, a) {
                    var n = s.default.getInstance().getPreafab("Coin");
                    n.parent = this.node;
                    var i = cc.v2(0, 0);
                    if (o) {
                        var r = cc.find("Canvas/Camera2").y;
                        (i = this.node.convertToNodeSpaceAR(o.convertToWorldSpaceAR(cc.v2(0, 0)))).y -= r;
                    }
                    n.setPosition(i);
                    var c = 1;
                    Math.random() > 0.5 && (c = -1);
                    var d = u.default.randomInt2(350, 500) * c,
                        p = cc.v2(i.x + d, t.y / 2);
                    cc.tween(n)
                        .bezierTo(0.8, i, p, t)
                        .call(function () {
                            cc.tween(a).to(0.2, {scale: 1.2}).to(0.2, {scale: 1}).start(),
                                e > 0 && l.default.getInstance().addGlod(e),
                                s.default.getInstance().recoverRole(n);
                        })
                        .start();
                }),
                (t.prototype.creatroPlayCoin2 = function (e, t, o, a) {
                    var n = s.default.getInstance().getPreafab("Coin");
                    n.parent = this.node;
                    var i = cc.v2(0, 0);
                    if (o) {
                        var r = cc.find("Canvas/Camera2").y;
                        (i = this.node.convertToNodeSpaceAR(o.convertToWorldSpaceAR(cc.v2(0, 0)))).y -= r;
                    }
                    n.setPosition(i);
                    var c = 1;
                    Math.random() > 0.5 && (c = -1);
                    var d = u.default.randomInt2(20, 150) * c,
                        p = cc.v2(i.x + d, t.y / 2);
                    cc.tween(n)
                        .bezierTo(0.3, i, p, t)
                        .call(function () {
                            cc.tween(a).to(0.2, {scale: 1.2}).to(0.2, {scale: 1}).start(),
                                l.default.getInstance().addGlod(e),
                                s.default.getInstance().recoverRole(n);
                        })
                        .start();
                }),
                (t.prototype.playObtainingClods = function (e, t, o) {
                    void 0 === t && (t = null),
                        void 0 === o && (o = null),
                        t || (t = cc.find("Canvas/TopLayer/BrickBox/icon_brick"));
                    for (
                        var a = this.node.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.v2(0, 0))),
                            n = u.default.randomInt2(3, 6),
                            i = e % n,
                            r = Math.floor(e / n),
                            c = 0;
                        c < n;
                        c++
                    )
                        0 == c && this.creatroObtainingClods(i, a, o, t), this.creatroObtainingClods(r, a, o, t);
                }),
                (t.prototype.creatroObtainingClods = function (e, t, o, a) {
                    var n = s.default.getInstance().getPreafab("Clod");
                    (n.scale = 0.6), (n.parent = this.node);
                    var i = cc.v2(0, 0);
                    if (o) {
                        var r = cc.find("Canvas/Camera2").y;
                        (i = this.node.convertToNodeSpaceAR(o.convertToWorldSpaceAR(cc.v2(0, 0)))).y -= r;
                    }
                    n.setPosition(i);
                    var c = 1;
                    Math.random() > 0.5 && (c = -1);
                    var d = u.default.randomInt2(350, 500) * c,
                        p = cc.v2(i.x + d, t.y / 2);
                    cc.tween(n)
                        .bezierTo(0.8, i, p, t)
                        .call(function () {
                            cc.tween(a).to(0.2, {scale: 0.6}).to(0.2, {scale: 0.5}).start(),
                                l.default.getInstance().addBrick(e),
                                s.default.getInstance().recoverRole(n);
                        })
                        .start();
                }),
                (t.prototype.playOpenTreasure = function () {
                    var e = this;
                    this.showRate &&
                        (this.showRate.stopAllActions(), s.default.getInstance().recoverRole(this.showRate)),
                        (this.showRate = s.default.getInstance().getPreafab("Rate")),
                        (this.showRate.parent = this.node),
                        this.showRate
                            .getComponent(sp.Skeleton)
                            .setAnimation(0, "start_" + l.default.getInstance().openTreasure, !1),
                        c.default.playEffect("rate_" + l.default.getInstance().openTreasure),
                        setTimeout(function () {
                            s.default.getInstance().recoverRole(e.showRate);
                        }, 1500);
                }),
                r([f], t)
            );
        })(cc.Component));
o.default = h;
