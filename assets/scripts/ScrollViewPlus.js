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
var r = e("ScrollViewPlusItem"),
    c = cc._decorator,
    l = c.ccclass,
    s = c.property,
    u = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.caculatePosition = !1), t;
        }
        var o;
        return (
            n(t, e),
            (o = t),
            (t.prototype.onEnable = function () {
                e.prototype.onEnable.call(this), this.node.on("scrolling", this._onScrollingDrawCallOpt, this);
            }),
            (t.prototype.onDisable = function () {
                e.prototype.onDisable.call(this), this.node.off("scrolling", this._onScrollingDrawCallOpt, this);
            }),
            (t.prototype._onScrollingDrawCallOpt = function () {
                0 != this.content.childrenCount && this.optDc();
            }),
            (t.prototype.optDc = function () {
                o.optDc(this, this.caculatePosition);
            }),
            (t.optDc = function (e, t) {
                var o = e.node.parent.convertToWorldSpaceAR(
                        cc.v2(e.node.x - e.node.anchorX * e.node.width, e.node.y - e.node.anchorY * e.node.height)
                    ),
                    a = cc.rect(o.x, o.y, e.node.width, e.node.height);
                e.content.children.forEach(function (e) {
                    var o = e.getComponent(r.default);
                    if (null != o) {
                        var n = e.getBoundingBoxToWorld();
                        n.intersects(a)
                            ? (o.isShowing || ((o.isShowing = !0), o.publishOnEnterScrollView()),
                              t &&
                                  o.isShowing &&
                                  o.publishOnPositionChange(
                                      (n.x - (a.x - n.width / 2)) / (n.width + a.width),
                                      (n.y - (a.y - n.height / 2)) / (n.height + a.height)
                                  ))
                            : o.isShowing && ((o.isShowing = !1), o.publishOnExitScrollView());
                    }
                });
            }),
            i(
                [s({tooltip: "是否计算在可视区域中Item的相对位置（可能会相对耗性能）"})],
                t.prototype,
                "caculatePosition",
                void 0
            ),
            (o = i([l], t))
        );
    })(cc.ScrollView);
o.default = u;
