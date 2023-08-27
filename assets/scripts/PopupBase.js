var e = require;
var t = module;
var o = exports;
var a,
    i =
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
var c = cc._decorator,
    l = c.ccclass,
    s = c.property,
    u = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.background = null),
                (t.main = null),
                (t.animDuration = 0.3),
                (t.blocker = null),
                (t.options = null),
                (t.finishCallback = null),
                t
            );
        }
        return (
            i(t, e),
            (t.prototype.show = function (e, t) {
                var o = this;
                return (
                    void 0 === t && (t = this.animDuration),
                    new Promise(function (a) {
                        o.options = e;
                        try {
                            o.init(o.options);
                        } catch (e) {
                            console.error(e);
                        }
                        if (!o.node.active) {
                            var n = o.background,
                                i = o.main;
                            (o.node.active = !0),
                                null != n &&
                                    ((n.active = !0),
                                    (n.opacity = 0),
                                    cc
                                        .tween(n)
                                        .to(0.8 * t, {opacity: 200})
                                        .start()),
                                o.updateDisplay(o.options),
                                null != i
                                    ? ((i.active = !0),
                                      (i.scale = 0.5),
                                      (i.opacity = 0),
                                      cc
                                          .tween(i)
                                          .to(t, {scale: 1, opacity: 255}, {easing: "backOut"})
                                          .call(function () {
                                              o.onShow && o.onShow(), a();
                                          })
                                          .start())
                                    : (o.onShow && o.onShow(), a());
                        }
                    })
                );
            }),
            (t.prototype.hide = function (e, t) {
                var o = this;
                return (
                    void 0 === e && (e = !1),
                    void 0 === t && (t = this.animDuration),
                    new Promise(function (a) {
                        var n = o.node;
                        if (n) {
                            if (0 !== t) {
                                var i = o.blocker;
                                i ||
                                    ((i = o.blocker = new cc.Node("blocker")).addComponent(cc.BlockInputEvents),
                                    i.setParent(n),
                                    i.setContentSize(n.getContentSize())),
                                    (i.active = !0);
                            }
                            null != o.background &&
                                cc
                                    .tween(o.background)
                                    .delay(0.2 * t)
                                    .to(0.8 * t, {opacity: 0})
                                    .start(),
                                null != o.main
                                    ? cc
                                          .tween(o.main)
                                          .to(t, {scale: 0.5, opacity: 0}, {easing: "backIn"})
                                          .call(function () {
                                              o.blocker && (o.blocker.active = !1),
                                                  (n.active = !1),
                                                  o.onHide && o.onHide(e),
                                                  a(),
                                                  o.finishCallback && o.finishCallback(e);
                                          })
                                          .start()
                                    : (o.blocker && (o.blocker.active = !1),
                                      (n.active = !1),
                                      o.onHide && o.onHide(e),
                                      a(),
                                      o.finishCallback && o.finishCallback(e));
                        }
                    })
                );
            }),
            (t.prototype.init = function () {}),
            (t.prototype.updateDisplay = function () {}),
            (t.prototype.onShow = function () {}),
            (t.prototype.onHide = function () {}),
            (t.prototype.setFinishCallback = function (e) {
                this.finishCallback = e;
            }),
            r([s({type: cc.Node})], t.prototype, "background", void 0),
            r([s({type: cc.Node})], t.prototype, "main", void 0),
            r([l], t)
        );
    })(cc.Component);
o.default = u;
