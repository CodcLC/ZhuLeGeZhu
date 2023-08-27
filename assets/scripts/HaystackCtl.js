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
var r = e("AudioSystem"),
    c = e("Global"),
    l = e("GameMgr"),
    s = e("NodePoolMgr"),
    u = e("Https"),
    d = e("Util"),
    f = e("CuoDuoCtl"),
    h = cc._decorator,
    y = h.ccclass,
    g = h.property,
    v = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.content = null),
                (t.chanAnBtn = null),
                (t.caoduoLabel = null),
                (t.myAreaLabel = null),
                (t.totalContribute = null),
                (t.myContribute = null),
                (t.myRankLabel = null),
                (t.maskNode = null),
                (t.total = 0),
                (t.isTouchStart = !1),
                (t.cdTime = 0),
                (t.creatorTotal = 0),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.start = function () {
                (this.maskNode = cc.find("Canvas/view/mask").getBoundingBoxToWorld()),
                    2 == c.default.playerBaseData.guideEventIndex &&
                        this.scheduleOnce(function () {
                            l.default.getInstance().showGuideNode(2);
                        }, 0.3);
            }),
            (t.prototype.onEnable = function () {
                this.registerEvent(), this.updateRank(), this.initView();
            }),
            (t.prototype.onDisable = function () {
                for (this.removeEvent(); this.content.childrenCount > 0; )
                    s.default.getInstance().recoverRole(this.content.children[0]);
            }),
            (t.prototype.registerEvent = function () {
                this.chanAnBtn.on(cc.Node.EventType.TOUCH_START, this.onTouchStartCallback, this),
                    this.chanAnBtn.on(cc.Node.EventType.TOUCH_END, this.onTouchEndCallback, this),
                    this.chanAnBtn.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEndCallback, this);
            }),
            (t.prototype.removeEvent = function () {
                this.chanAnBtn.off(cc.Node.EventType.TOUCH_START, this.onTouchStartCallback, this),
                    this.chanAnBtn.off(cc.Node.EventType.TOUCH_END, this.onTouchEndCallback, this),
                    this.chanAnBtn.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEndCallback, this);
            }),
            (t.prototype.initView = function () {
                (this.myAreaLabel.string = c.default.myArea + "队"),
                    (this.isTouchStart = !1),
                    (c.default.totalContribute = 56546),
                    (this.total = 0);
                for (var e = 0; e < 35; e++) {
                    var t = s.default.getInstance().getPreafab("CaoDuo");
                    (t.parent = this.content),
                        t.setPosition((this.total % 5) * 120 - 240, 120 * Math.floor(this.total / 5)),
                        (t.getChildByName("icon").active = !0),
                        this.total++;
                }
                var o = Math.ceil(this.total / 5) - 5;
                o > 0 && (this.content.y = -(445 + 120 * o)), this.udpateCaoduo();
            }),
            (t.prototype.updateRank = function () {
                var e = this;
                u.default.sendPost("rank/caoduo ", {}, function (t) {
                    t &&
                        ((c.default.totalContribute = Number(t.data.count)),
                        (e.totalContribute.string = d.default.formatNumToString(c.default.totalContribute, 2)),
                        (e.myRankLabel.string = "我的排名：" + t.data.myrank));
                });
            }),
            (t.prototype.udpateCaoduo = function () {
                (this.caoduoLabel.string = c.default.playerBaseData.brick + ""),
                    (this.totalContribute.string = c.default.totalContribute + ""),
                    (this.myContribute.string = "我的贡献：" + c.default.playerBaseData.myContribute),
                    (this.chanAnBtn.getComponent(cc.Button).interactable = c.default.playerBaseData.brick > 0);
            }),
            (t.prototype.onTouchStartCallback = function () {
                var e = this;
                this.unscheduleAllCallbacks(),
                    (this.chanAnBtn.scale = 1.1),
                    this.creatorCaoDuo(),
                    this.scheduleOnce(function () {
                        e.isTouchStart = !0;
                    }, 0.2);
            }),
            (t.prototype.onTouchEndCallback = function () {
                (this.chanAnBtn.scale = 1), this.unscheduleAllCallbacks(), (this.isTouchStart = !1);
            }),
            (t.prototype.update = function (e) {
                this.isTouchStart &&
                    ((this.cdTime += e), this.cdTime > 0.05 && ((this.cdTime = 0), this.creatorCaoDuo()));
            }),
            (t.prototype.sendPost = function () {
                l.default
                    .getInstance()
                    .sendPost(
                        {2: c.default.playerBaseData.brick, 10: c.default.playerBaseData.myContribute},
                        function () {}
                    ),
                    c.default.savePlayerBaseData();
            }),
            (t.prototype.creatorCaoDuo = function () {
                var e = this;
                if (
                    (2 == c.default.playerBaseData.guideEventIndex &&
                        ((c.default.playerBaseData.guideEventIndex = 3),
                        (l.default.getInstance().guideNode.parent = null)),
                    !(c.default.playerBaseData.brick > 0))
                )
                    return (this.chanAnBtn.scale = 1), void this.unscheduleAllCallbacks();
                c.default.playerBaseData.brick--,
                    c.default.playerBaseData.myContribute++,
                    c.default.totalContribute++,
                    this.udpateCaoduo(),
                    this.creatorTotal++,
                    8 == this.creatorTotal && this.sendPost(),
                    this.creatorTotal >= 10 && ((this.creatorTotal = 0), this.updateRank());
                var t = s.default.getInstance().getPreafab("CaoDuo");
                (t.parent = this.content),
                    t.setPosition((this.total % 5) * 120 - 240, 120 * Math.floor(this.total / 5)),
                    t.getComponent(f.default).play(),
                    r.default.playEffect("caoduo"),
                    this.total++;
                var o = Math.ceil(this.total / 5) - 5;
                o > 0 &&
                    (this.content.stopAllActions(),
                    cc
                        .tween(this.content)
                        .to(0.2, {y: -(445 + 120 * o)})
                        .call(function () {
                            for (; !e.content.children[0].getBoundingBoxToWorld().intersects(e.maskNode); )
                                s.default.getInstance().recoverRole(e.content.children[0]);
                        })
                        .start());
            }),
            (t.prototype.onClickBackHome = function () {
                cc.director.loadScene("game"), this.sendPost();
            }),
            i([g(cc.Node)], t.prototype, "content", void 0),
            i([g(cc.Node)], t.prototype, "chanAnBtn", void 0),
            i([g(cc.Label)], t.prototype, "caoduoLabel", void 0),
            i([g(cc.Label)], t.prototype, "myAreaLabel", void 0),
            i([g(cc.Label)], t.prototype, "totalContribute", void 0),
            i([g(cc.Label)], t.prototype, "myContribute", void 0),
            i([g(cc.Label)], t.prototype, "myRankLabel", void 0),
            i([y], t)
        );
    })(cc.Component);
o.default = v;
