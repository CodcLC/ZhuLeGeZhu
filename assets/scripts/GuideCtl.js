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
var r = e("Global"),
    c = e("BoxItem"),
    l = e("MainCtl"),
    s = e("SynthesisCtl"),
    u = cc._decorator,
    d = u.ccclass,
    f = u.property,
    h = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.maskNode = null), (t.clickBtn = null), (t.recet = null), (t.finger = null), (t.guideType = 1), t;
        }
        return (
            n(t, e),
            (t.prototype.showGuide = function () {
                this.finger.stopAllActions();
                var e = null;
                if (((this.maskNode.active = !0), (this.recet.active = !0), 1 == this.guideType)) {
                    if (0 == r.default.playerBaseData.guideIndex)
                        (this.clickBtn.active = !0),
                            (e = cc.find("Canvas/Main/bottomLayer/jryq")),
                            this.finger.getComponent(sp.Skeleton).setAnimation(0, "Trigger", !0);
                    else if (1 == r.default.playerBaseData.guideIndex)
                        (this.clickBtn.active = !0),
                            (e = cc.find("Canvas/Game/CenterLayer/boxLayer/btn_green_medium")),
                            this.finger.getComponent(sp.Skeleton).setAnimation(0, "Trigger", !0);
                    else {
                        if (2 == r.default.playerBaseData.guideIndex) {
                            (this.maskNode.active = !1), (this.clickBtn.active = !1), (this.recet.active = !1);
                            for (
                                var t = (l = cc.find("Canvas/Game/SynthesisLayer")).getComponent(s.default).totalBox,
                                    o = [],
                                    a = 0;
                                a < t;
                                a++
                            )
                                (u = l.children[a].getComponent(c.default).getData()) &&
                                    1 == u.level &&
                                    o.push(l.children[a]);
                            if (o.length >= 2) {
                                var n = this.node.parent.convertToNodeSpaceAR(o[1].convertToWorldSpaceAR(cc.v3(0, 0))),
                                    i = this.node.parent.convertToNodeSpaceAR(o[0].convertToWorldSpaceAR(cc.v3(0, 0)));
                                this.fingerMove(n, i);
                            } else this.node.parent = null;
                            return;
                        }
                        if (3 == r.default.playerBaseData.guideIndex)
                            (this.clickBtn.active = !0),
                                (e = cc.find("Canvas/Game/CenterLayer/btn_blue_big")),
                                this.finger.getComponent(sp.Skeleton).setAnimation(0, "Trigger", !0);
                        else if (4 == r.default.playerBaseData.guideIndex) {
                            var l;
                            for (
                                t = (l = cc.find("Canvas/Game/SynthesisLayer")).getComponent(s.default).totalBox, a = 0;
                                a < t;
                                a++
                            ) {
                                var u;
                                if ((u = l.children[a].getComponent(c.default).getData()) && (1e4 == u || 10001 == u)) {
                                    (this.maskNode.active = !1),
                                        (this.clickBtn.active = !1),
                                        (r.default.playerBaseData.guideIndex = 5),
                                        (e = l.children[a]),
                                        this.finger.getComponent(sp.Skeleton).setAnimation(0, "Trigger", !0);
                                    break;
                                }
                            }
                        }
                    }
                } else
                    0 == r.default.playerBaseData.guideEventIndex
                        ? ((this.clickBtn.active = !0),
                          (e = cc.find("Canvas/Game/homeBtn")),
                          this.finger.getComponent(sp.Skeleton).setAnimation(0, "Trigger", !0))
                        : 1 == r.default.playerBaseData.guideEventIndex
                        ? ((this.clickBtn.active = !0),
                          (e = cc.find("Canvas/Main/bottomLayer/xunbaoBtn")),
                          this.finger.getComponent(sp.Skeleton).setAnimation(0, "Trigger", !0))
                        : 2 == r.default.playerBaseData.guideEventIndex &&
                          ((this.maskNode.active = !1),
                          (this.clickBtn.active = !1),
                          (e = cc.find("Canvas/changan")),
                          this.finger.getComponent(sp.Skeleton).setAnimation(0, "Trigger", !0));
                if (e) {
                    (this.clickBtn.width = e.width),
                        (this.clickBtn.height = e.height),
                        (this.recet.width = e.width),
                        (this.recet.height = e.height);
                    var d = this.node.parent.convertToNodeSpaceAR(e.convertToWorldSpaceAR(cc.v3(0, 0)));
                    (this.clickBtn.position = d), (this.finger.position = d), (this.recet.position = d);
                } else this.node.parent = null;
            }),
            (t.prototype.fingerMove = function (e, t) {
                var o = this;
                (this.finger.position = e),
                    this.finger.getComponent(sp.Skeleton).setAnimation(0, "Activation", !1),
                    cc
                        .tween(this.finger)
                        .delay(0.2)
                        .to(0.6, {position: t})
                        .call(function () {
                            2 == r.default.playerBaseData.guideIndex ? o.showGuide() : (o.node.parent = null);
                        })
                        .start();
            }),
            (t.prototype.onClick = function () {
                var e = this;
                console.log("点击了"),
                    1 == this.guideType
                        ? 0 == r.default.playerBaseData.guideIndex
                            ? ((r.default.playerBaseData.guideIndex = 1),
                              cc.find("Canvas/MainCtl").getComponent(l.default).playGameClick(),
                              (this.node.parent = null))
                            : 1 == r.default.playerBaseData.guideIndex
                            ? ((r.default.playerBaseData.guideIndex = 2),
                              cc.find("Canvas/Game/SynthesisLayer").getComponent(s.default).radomShovel(),
                              this.scheduleOnce(function () {
                                  e.showGuide();
                              }, 0.2))
                            : 3 == r.default.playerBaseData.guideIndex &&
                              ((r.default.playerBaseData.guideIndex = 4),
                              cc.find("Canvas/Game/SynthesisLayer").getComponent(s.default).downStar(),
                              (this.node.parent = null))
                        : 0 == r.default.playerBaseData.guideEventIndex
                        ? ((r.default.playerBaseData.guideEventIndex = 1),
                          cc.find("Canvas/MainCtl").getComponent(l.default).backHomeClick(),
                          (this.node.parent = null))
                        : (1 == r.default.playerBaseData.guideEventIndex ||
                              1 == r.default.playerBaseData.guideEventIndex) &&
                          ((r.default.playerBaseData.guideEventIndex = 2),
                          cc.find("Canvas/MainCtl").getComponent(l.default).enterHaystack(),
                          (this.node.parent = null));
            }),
            i([f(cc.Node)], t.prototype, "maskNode", void 0),
            i([f(cc.Node)], t.prototype, "clickBtn", void 0),
            i([f(cc.Node)], t.prototype, "recet", void 0),
            i([f(cc.Node)], t.prototype, "finger", void 0),
            i([d], t)
        );
    })(cc.Component);
o.default = h;
