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
    h = d.property,
    y = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.icon = null),
                (t.speed = 800),
                (t.speedY = -500),
                (t.isPlayAngle = !1),
                (t.state = 0),
                (t.attack = 0),
                (t.durability = 0),
                (t.speedYBuff = 0),
                (t.smokeAni = null),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.start = function () {}),
            (t.prototype.init = function (e) {
                var t = this;
                e &&
                    (this.node.stopAllActions(),
                    (this.attack = Number(e.atk)),
                    (this.durability = Number(e.durable)),
                    u.default.loadLocalSpriteFrameToSprite(
                        "shovel/shovel_" + e.level,
                        this.icon.getComponent(cc.Sprite)
                    ),
                    (this.speedYBuff = 0),
                    (this.icon.angle = 0),
                    (this.isPlayAngle = !1),
                    (this.state = 0),
                    (this.smokeAni = s.default.getInstance().getPreafab("SmokeAnim")),
                    (this.smokeAni.parent = this.node),
                    (this.smokeAni.zIndex = -999),
                    this.smokeAni.setPosition(0, 0),
                    this.smokeAni.getComponent(sp.Skeleton).setAnimation(0, "start", !1),
                    setTimeout(function () {
                        t.smokeAni.getComponent(sp.Skeleton).setAnimation(0, "loop", !0);
                    }, 300));
            }),
            (t.prototype.update = function (e) {
                0 == this.state &&
                    ((this.speedYBuff += 18 * e * -1), (this.node.y += e * this.speedY + this.speedYBuff)),
                    this.isPlayAngle && (this.icon.angle += e * this.speed);
            }),
            (t.prototype.applyForce = function (e) {
                var t = this;
                void 0 === e && (e = 1), (this.durability -= e), c.default.playEffect("czzj");
                var o = s.default.getInstance().getPreafab("Shovellmpac");
                if (
                    ((o.parent = this.node.parent),
                    o.getComponent(cc.Animation).play(),
                    o.setPosition(this.node.position.x, this.node.position.y),
                    setTimeout(function () {
                        s.default.getInstance().recoverRole(o);
                    }, 800),
                    this.durability <= 0)
                ) {
                    var a = s.default.getInstance().getPreafab("ShovelCrush");
                    (a.parent = this.node.parent),
                        a.getComponent(sp.Skeleton).setAnimation(0, "start", !1),
                        a.setPosition(this.node.position.x, this.node.position.y),
                        setTimeout(function () {
                            s.default.getInstance().recoverRole(a);
                        }, 800),
                        s.default.getInstance().recoverRole(this.node);
                    var n = l.default.getInstance().shovelList.indexOf(this.node);
                    n >= 0 && l.default.getInstance().shovelList.splice(n, 1);
                } else {
                    this.isPlayAngle ||
                        (this.smokeAni.getComponent(sp.Skeleton).setAnimation(0, "over", !1),
                        setTimeout(function () {
                            s.default.getInstance().recoverRole(t.smokeAni), (t.smokeAni = null);
                        }, 500)),
                        (this.isPlayAngle = !0),
                        (this.speedYBuff = 0),
                        (this.state = 1);
                    var r = this.node.y,
                        u = this.node.y + 130;
                    cc.tween(this.node)
                        .to(0.3, {y: u}, {easing: cc.easing.quadOut})
                        .to(0.3, {y: r}, {easing: cc.easing.quadIn})
                        .call(function () {
                            t.state = 0;
                        })
                        .start();
                }
            }),
            r([h(cc.Node)], t.prototype, "icon", void 0),
            r([f], t)
        );
    })(cc.Component);
o.default = y;
