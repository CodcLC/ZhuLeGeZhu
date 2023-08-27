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
    c = e("PopupBase"),
    l = e("PopupManager"),
    s = e("ByteDanceApi"),
    u = e("Util"),
    d = cc._decorator,
    f = d.ccclass,
    h = d.property,
    y = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.maskNode = null),
                (t.ticketNode = null),
                (t.itemsLayer = null),
                (t.tempDrawPoints = []),
                (t.polygonPointsList = []),
                (t.CALC_RECT_WIDTH = 40),
                (t.CLEAR_LINE_WIDTH = 40),
                (t.isGetState = 0),
                (t.totalGlod = 0),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.init = function () {
                this.reset(), this.initEvent();
            }),
            (t.prototype.initEvent = function () {
                this.ticketNode.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this),
                    this.ticketNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this),
                    this.ticketNode.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this),
                    this.ticketNode.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
            }),
            (t.prototype.removeEvent = function () {
                this.ticketNode.off(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this),
                    this.ticketNode.off(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this),
                    this.ticketNode.off(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this),
                    this.ticketNode.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
            }),
            (t.prototype.touchStartEvent = function (e) {
                var t = this.ticketNode.convertToNodeSpaceAR(e.getLocation());
                this.clearMask(t);
            }),
            (t.prototype.touchMoveEvent = function (e) {
                var t = this.ticketNode.convertToNodeSpaceAR(e.getLocation());
                this.clearMask(t);
            }),
            (t.prototype.touchEndEvent = function () {
                (this.tempDrawPoints = []), this.isGetState > 0 || this.calcProgress();
            }),
            (t.prototype.calcProgress = function () {
                var e = 0;
                if (
                    (this.polygonPointsList.forEach(function (t) {
                        t.isHit && (e += 1);
                    }),
                    console.log("已经刮开了 " + e / this.polygonPointsList.length),
                    e / this.polygonPointsList.length >= 0.75)
                ) {
                    this.isGetState = 1;
                    var t = {awardData: {id: 10, num: this.totalGlod}},
                        o = {mode: l.PopupCacheMode.Frequent, isNoHideCurrent: !0};
                    l.default.show("popups/CongratulationsPopup", t, o);
                }
            }),
            (t.prototype.clearMask = function (e) {
                var t = this.maskNode.getComponent(cc.Mask)._graphics,
                    o = this.tempDrawPoints.length;
                if ((this.tempDrawPoints.push(e), o <= 1))
                    t.circle(e.x, e.y, this.CLEAR_LINE_WIDTH / 2),
                        t.fill(),
                        this.polygonPointsList.forEach(function (t) {
                            if (!t.isHit) {
                                var o = e.x > t.rect.x && e.x < t.rect.x + t.rect.width,
                                    a = e.y > t.rect.y && e.y < t.rect.y + t.rect.height;
                                o && a && (t.isHit = !0);
                            }
                        });
                else {
                    var a = this.tempDrawPoints[o - 2],
                        n = this.tempDrawPoints[o - 1];
                    t.moveTo(a.x, a.y),
                        t.lineTo(n.x, n.y),
                        (t.lineWidth = this.CLEAR_LINE_WIDTH),
                        (t.lineCap = cc.Graphics.LineCap.ROUND),
                        (t.lineJoin = cc.Graphics.LineJoin.ROUND),
                        (t.strokeColor = cc.color(255, 255, 255, 255)),
                        t.stroke(),
                        this.polygonPointsList.forEach(function (e) {
                            e.isHit = e.isHit || cc.Intersection.lineRect(a, n, e.rect);
                        });
                }
            }),
            (t.prototype.videoReset = function () {
                var e = this;
                r.default.playEffect("click"),
                    s.default.playAdVideo(function () {
                        e.reset();
                    });
            }),
            (t.prototype.reset = function () {
                this.isGetState = 0;
                var e = this.maskNode.getComponent(cc.Mask);
                e._graphics && e._graphics.clear(), (this.tempDrawPoints = []), (this.polygonPointsList = []);
                for (var t = 0; t < this.ticketNode.width; t += this.CALC_RECT_WIDTH)
                    for (var o = 0; o < this.ticketNode.height; o += this.CALC_RECT_WIDTH)
                        this.polygonPointsList.push({
                            rect: cc.rect(
                                t - this.ticketNode.width / 2,
                                o - this.ticketNode.height / 2,
                                this.CALC_RECT_WIDTH,
                                this.CALC_RECT_WIDTH
                            ),
                            isHit: !1
                        });
                var a = [
                    {id: u.default.randomInt2(3, 7), num: 0},
                    {id: u.default.randomInt2(3, 7), num: 0},
                    {id: u.default.randomInt2(3, 7), num: 0},
                    {id: u.default.randomInt2(3, 7), num: 0},
                    {id: u.default.randomInt2(3, 7), num: 0},
                    {id: u.default.randomInt2(3, 7), num: 0},
                    {id: u.default.randomInt2(3, 7), num: 0},
                    {id: u.default.randomInt2(3, 7), num: 0},
                    {id: u.default.randomInt2(3, 7), num: 0}
                ];
                this.totalGlod = 0;
                var n = Math.random();
                n > 0.4 &&
                    (n > 0.4 && n <= 0.8
                        ? ((a[u.default.randomInt(a.length)] = {id: 2, num: 250}), (this.totalGlod = 250))
                        : ((a[u.default.randomInt(a.length)] = {id: 2, num: 500}), (this.totalGlod = 500)));
                var i = function (e, t) {
                        for (var o = 0; o < t; o++)
                            for (; a.length > 0; ) {
                                var n = u.default.randomInt(a.length);
                                if (a[n].id > 2) {
                                    a[n].id = e;
                                    break;
                                }
                            }
                    },
                    r = Math.random();
                r > 0.7 &&
                    (r > 0.7 && r <= 0.85
                        ? ((this.totalGlod += 500), i(1, 1))
                        : r > 0.85 && r <= 0.95
                        ? ((this.totalGlod += 5e3), i(1, 2))
                        : ((this.totalGlod += 5e4), i(1, 3))),
                    this.updateItems(a);
            }),
            (t.prototype.updateItems = function (e) {
                for (var t = 0; t < this.itemsLayer.childrenCount; t++) {
                    var o = this.itemsLayer.children[t];
                    u.default.loadLocalSpriteFrameToSprite("bit/icon_scraping_" + e[t].id, o.getComponent(cc.Sprite)),
                        e[t].num > 0
                            ? ((o.getChildByName("num").getComponent(cc.Label).string = e[t].num + ""),
                              (o.getChildByName("num").active = !0))
                            : (o.getChildByName("num").active = !1);
                }
            }),
            (t.prototype.hidePopup = function () {
                this.removeEvent(), this.hide();
            }),
            (t.prototype.onConfirmBtnClick = function () {
                r.default.playEffect("click"), this.hide();
            }),
            i([h(cc.Node)], t.prototype, "maskNode", void 0),
            i([h(cc.Node)], t.prototype, "ticketNode", void 0),
            i([h(cc.Node)], t.prototype, "itemsLayer", void 0),
            i([f], t)
        );
    })(c.default);
o.default = y;
