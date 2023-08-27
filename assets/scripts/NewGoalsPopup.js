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
    c = e("GameMgr"),
    l = e("PopupBase"),
    s = cc._decorator,
    u = s.ccclass,
    d = s.property,
    f = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.mask = null), (t.numLabel = null), (t.targetLabel = null), (t.awardBox = null), t;
        }
        return (
            n(t, e),
            (t.prototype.init = function () {
                var e = this;
                this.numLabel.string = "" + c.default.getInstance().levelCfg.clearance;
                var t = cc.find("Canvas/TopLayer/AwardBox");
                (cc.find("pic_target_number_title_bg/New Label", t).getComponent(cc.Label).string =
                    r.default.playerBaseData.curLevel + "关目标"),
                    (this.targetLabel.string = r.default.playerBaseData.curLevel + "关目标"),
                    (this.awardBox.scale = 0.1),
                    this.awardBox.setPosition(0, 0),
                    (this.mask.opacity = 0),
                    cc.tween(this.mask).to(0.1, {opacity: 175}).start(),
                    cc.tween(this.awardBox).to(0.1, {scale: 2}, {easing: "backOut"}).start(),
                    this.scheduleOnce(function () {
                        cc.tween(e.awardBox)
                            .to(0.3, {
                                position: e.node.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.v3(0, 0, 0))),
                                scale: 1
                            })
                            .call(function () {
                                cc.tween(e.mask)
                                    .to(0.3, {opacity: 0})
                                    .call(function () {
                                        e.hide(), (t.active = !0);
                                    })
                                    .start();
                            })
                            .start();
                    }, 1);
            }),
            i([d(cc.Node)], t.prototype, "mask", void 0),
            i([d(cc.Label)], t.prototype, "numLabel", void 0),
            i([d(cc.Label)], t.prototype, "targetLabel", void 0),
            i([d(cc.Node)], t.prototype, "awardBox", void 0),
            i([u], t)
        );
    })(l.default);
o.default = f;
