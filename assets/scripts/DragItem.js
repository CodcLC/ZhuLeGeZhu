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
var r = e("Util"),
    c = cc._decorator,
    l = c.ccclass,
    s = c.property,
    u = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.shovelIcon = null), (t.levelLabel = null), (t.itemData = null), t;
        }
        return (
            n(t, e),
            (t.prototype.init = function (e) {
                (this.itemData = e),
                    20003 == e
                        ? (r.default.loadLocalSpriteFrameToSprite("shovel/20002", this.shovelIcon),
                          (this.levelLabel.node.parent.active = !1))
                        : (r.default.loadLocalSpriteFrameToSprite("shovel/shovel_" + e.level, this.shovelIcon),
                          (this.levelLabel.string = e.level + ""),
                          (this.levelLabel.node.parent.active = !0));
            }),
            (t.prototype.getData = function () {
                return this.itemData;
            }),
            i([s(cc.Sprite)], t.prototype, "shovelIcon", void 0),
            i([s(cc.Label)], t.prototype, "levelLabel", void 0),
            i([l], t)
        );
    })(cc.Component);
o.default = u;
