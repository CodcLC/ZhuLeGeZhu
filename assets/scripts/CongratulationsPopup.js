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
var r = e("AnimationCtl"),
    c = e("AudioSystem"),
    l = e("Global"),
    s = e("EventMgr"),
    u = e("GameMgr"),
    d = e("PopupBase"),
    f = e("ByteDanceApi"),
    h = e("Util"),
    y = cc._decorator,
    g = y.ccclass,
    v = y.property,
    m = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.awardIcon = null), (t.numLabel = null), (t.awardData = null), t;
        }
        return (
            n(t, e),
            (t.prototype.init = function (e) {
                c.default.playEffect("turntable"),
                    (this.awardData = e.awardData),
                    (this.numLabel.active = !1),
                    5 == this.awardData.id
                        ? ((this.awardIcon.node.scale = 1.5),
                          h.default.loadLocalSpriteFrameToSprite(
                              "shovel/shovel_" + this.awardData.icon,
                              this.awardIcon
                          ))
                        : 10 == this.awardData.id
                        ? ((this.awardIcon.node.scale = 1),
                          h.default.loadLocalSpriteFrameToSprite("bit/icon_scraping_2", this.awardIcon),
                          (this.numLabel.getComponent(cc.Label).string = this.awardData.num + ""),
                          (this.numLabel.active = !0))
                        : ((this.awardIcon.node.scale = 1.5),
                          h.default.loadLocalSpriteFrameToSprite("public/" + this.awardData.icon, this.awardIcon));
            }),
            (t.prototype.putongClick = function () {
                c.default.playEffect("click"),
                    this.getAward(1),
                    this.options.callback && this.options.callback(),
                    this.hide();
            }),
            (t.prototype.doubleClick = function () {
                var e = this;
                c.default.playEffect("click"),
                    f.default.playAdVideo(function (t) {
                        t && (e.getAward(2), e.hide(), e.options.callback && e.options.callback());
                    });
            }),
            (t.prototype.getAward = function (e) {
                if (1 == this.awardData.id) {
                    if (cc.find("Canvas/Game").active)
                        ((o = {}).ordinaryGiftBox = 1 * e), s.default.BroadCast.broadcast("addBoxOrShovelAward", o);
                    else for (var t = 0; t < e; t++) l.default.playerBaseData.storedItems.push(10001);
                } else if (2 == this.awardData.id) {
                    if (cc.find("Canvas/Game").active)
                        ((o = {}).advancedGiftBox = 1 * e), s.default.BroadCast.broadcast("addBoxOrShovelAward", o);
                    else for (t = 0; t < e; t++) l.default.playerBaseData.storedItems.push(1e4);
                } else if (3 == this.awardData.id || 4 == this.awardData.id || 10 == this.awardData.id)
                    cc.find("Canvas/AnimationCtl").getComponent(r.default).playGetCoinAni(),
                        u.default.getInstance().addGlod(this.awardData.num * e);
                else if (5 == this.awardData.id) {
                    var o;
                    if (cc.find("Canvas/Game").active)
                        (o = {shovesBox: []}).shovesBox.push(l.default.playerBaseData.maxShovelLevel),
                            s.default.BroadCast.broadcast("addBoxOrShovelAward", o);
                    else
                        for (t = 0; t < e; t++)
                            l.default.playerBaseData.storedItems.push(l.default.playerBaseData.maxShovelLevel);
                }
                l.default.savePlayerBaseData();
            }),
            i([v(cc.Sprite)], t.prototype, "awardIcon", void 0),
            i([v(cc.Node)], t.prototype, "numLabel", void 0),
            i([g], t)
        );
    })(d.default);
o.default = m;
