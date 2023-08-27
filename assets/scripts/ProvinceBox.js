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
var r = e("GameMgr"),
    c = e("NodePoolMgr"),
    l = e("TTLoadingImg"),
    s = e("Util"),
    u = cc._decorator,
    d = u.ccclass,
    f = u.property,
    h = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.sheepLayer = null),
                (t.headerLayer = null),
                (t.titleLabel = null),
                (t.rankLabel = null),
                (t.sheepNumLabel = null),
                (t.isRestView = !1),
                (t.itemDatas = null),
                (t.slayers = null),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.onEnterSrcollView = function () {
                var e = this;
                if (0 == this.node.opacity) {
                    this.isRestView && this.udpateSheep(this.slayers);
                    for (
                        var t = function (t) {
                                o.scheduleOnce(function () {
                                    e.sheepLayer.children[t].stopAllActions(),
                                        (e.sheepLayer.children[t].scale = 0),
                                        (e.sheepLayer.children[t].active = !0),
                                        e.headerLayer.children[t] && (e.headerLayer.children[t].active = !0),
                                        cc.tween(e.sheepLayer.children[t]).to(0.2, {scale: 1.3}).start();
                                }, 0.02 * t);
                            },
                            o = this,
                            a = 0;
                        a < this.sheepLayer.childrenCount;
                        a++
                    )
                        t(a);
                }
                this.node.opacity = 255;
            }),
            (t.prototype.onExitScrollView = function () {
                if (255 == this.node.opacity)
                    for (var e = 0; e < this.sheepLayer.childrenCount; e++)
                        (this.sheepLayer.children[e].active = !1),
                            this.headerLayer.children[e] && (this.headerLayer.children[e].active = !1);
                this.node.opacity = 0;
            }),
            (t.prototype.init = function (e, t) {
                var o = this;
                (this.itemDatas = e),
                    (this.titleLabel.string = e.area + "队"),
                    (this.rankLabel.string = "第" + t + "名"),
                    (this.sheepNumLabel.string = s.default.formatNumToString(e.caoduo)),
                    (this.slayers = e.players),
                    (this.isRestView = !0),
                    this.scheduleOnce(function () {
                        o.isRestView && o.udpateSheep(o.slayers);
                    }, 1.2 * t);
            }),
            (t.prototype.udpateSheep = function (e) {
                this.isRestView = !1;
                for (
                    var t = r.default.getInstance().sheepPoints,
                        o = function (o) {
                            var n = a.sheepLayer.children[o];
                            n || ((n = c.default.getInstance().getPreafab("Sheep")).parent = a.sheepLayer);
                            var i = n.getChildByName("zhu").getComponent(sp.Skeleton);
                            a.scheduleOnce(function () {
                                
                                console.log("skin" + e[o].lv)
                                var ss = require("Util");
                                i.setSkin("skin" + ss.default.randomInt2(1,30).toString());
                            }),
                                n.setPosition(t[o][0], t[o][1]),
                                (n.zIndex = -(t[o][1] + t[o][1] - t[o][0]));
                            var r = a.headerLayer.children[o];
                            r || ((r = c.default.getInstance().getPreafab("Header")).parent = a.headerLayer),
                                r.setPosition(t[o][0], t[o][1] + 50);
                            var s = r.getChildByName("hIcon").getComponent(cc.Sprite);
                            "" != e[o].head && l.default.loadTTImageToSprite(e[o].head, s);
                        },
                        a = this,
                        n = 0;
                    n < e.length;
                    n++
                )
                    o(n);
            }),
            i([f(cc.Node)], t.prototype, "sheepLayer", void 0),
            i([f(cc.Node)], t.prototype, "headerLayer", void 0),
            i([f(cc.Label)], t.prototype, "titleLabel", void 0),
            i([f(cc.Label)], t.prototype, "rankLabel", void 0),
            i([f(cc.Label)], t.prototype, "sheepNumLabel", void 0),
            i([d], t)
        );
    })(cc.Component);
o.default = h;
