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
var c = e("AnimationCtl"),
    l = e("BitBulletCtl"),
    s = e("ShovelCtl"),
    u = e("AudioSystem"),
    d = e("Global"),
    f = e("EventMgr"),
    h = e("GameMgr"),
    y = e("LoadResMgr"),
    g = e("NodePoolMgr"),
    v = e("Util"),
    m = cc._decorator,
    b = m.ccclass,
    _ = m.property,
    S = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.boxSp = null), (t.isState = 0), t;
        }
        return (
            n(t, e),
            (t.prototype.init = function () {
                (this.isState = 0), this.boxSp.setAnimation(0, "normal", !0);
            }),
            (t.prototype.onCollisionEnter = function (e) {
                var t = e.node.getComponent(s.default);
                if (t) t.applyForce(1e3), this.pzlogic();
                else {
                    var o = e.node.getComponent(l.default);
                    o && (o.bulletOver(), this.pzlogic());
                }
            }),
            (t.prototype.pzlogic = function () {
                var e = this;
                0 == this.isState &&
                    ((this.isState = 1),
                    u.default.playEffect("bxtanchu"),
                    this.boxSp.setAnimation(0, "start", !1),
                    (h.default.getInstance().openTreasure += 1),
                    cc.find("Canvas/AnimationCtl").getComponent(c.default).playOpenTreasure(),
                    setTimeout(function () {
                        var t = Math.random();
                        if (t > 0.6) {
                            var o,
                                a = {};
                            if (1 == (o = t <= 0.8 ? 1 : t > 0.8 && t <= 0.85 ? 3 : t > 0.85 && t <= 0.9 ? 2 : 4))
                                (h.default.getInstance().ordinaryGiftBox += 1),
                                    (a.ordinaryGiftBox = 1),
                                    e.creatorBox(2);
                            else if (2 == o)
                                (h.default.getInstance().advancedGiftBox += 1),
                                    (a.advancedGiftBox = 1),
                                    e.creatorBox(3);
                            else if (3 == o) {
                                a.shovesBox = [];
                                var n = d.default.playerBaseData.maxShovelLevel - 4;
                                n < d.default.playerBaseData.generateShovelLV &&
                                    (n = d.default.playerBaseData.generateShovelLV);
                                var i = d.default.playerBaseData.maxShovelLevel - 12;
                                i < d.default.playerBaseData.generateShovelLV &&
                                    (i = d.default.playerBaseData.generateShovelLV);
                                var r = v.default.randomInt2(i, n);
                                a.shovesBox.push(r), e.creatorBox(1, r);
                            } else 4 == o && ((a.turntable = 1), e.creatorBox(4));
                            f.default.BroadCast.broadcast("addBoxOrShovelAward", a);
                        }
                    }, 500));
            }),
            (t.prototype.creatorBox = function (e, t) {
                void 0 === t && (t = 0);
                var o = g.default.getInstance().getPreafab("RdAward"),
                    a = o.getChildByName("icon").getComponent(cc.Sprite);
                if (1 == e) {
                    var n = y.default.getInstance().getShovelCfg(t);
                    v.default.loadLocalSpriteFrameToSprite("shovel/shovel_" + n.level, a);
                } else
                    2 == e
                        ? v.default.loadLocalSpriteFrameToSprite("public/icon_gifts_box", a)
                        : 3 == e
                        ? v.default.loadLocalSpriteFrameToSprite("public/icon_gifts_spbox", a)
                        : 4 == e && v.default.loadLocalSpriteFrameToSprite("public/icon_gifts_boxturntable", a);
                (o.parent = this.node),
                    o.setPosition(0, 50),
                    v.default.boxItemAni(o),
                    h.default.getInstance().awardList.push(o);
            }),
            r([_(sp.Skeleton)], t.prototype, "boxSp", void 0),
            r([b], t)
        );
    })(cc.Component);
o.default = S;
