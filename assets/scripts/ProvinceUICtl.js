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
    l = e("ProvinceItem"),
    s = e("PersonalProfilePopup"),
    u = e("Https"),
    d = e("MainCtl"),
    f = cc._decorator,
    h = f.ccclass,
    y = f.property,
    g = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.content = null),
                (t.province = [
                    "北京",
                    "天津",
                    "上海",
                    "重庆",
                    "河北",
                    "山西",
                    "黑龙江",
                    "吉林",
                    "辽宁",
                    "江苏",
                    "浙江",
                    "安徽",
                    "福建",
                    "江西",
                    "山东",
                    "河南",
                    "湖北",
                    "湖南",
                    "广东",
                    "海南",
                    "四川",
                    "贵州",
                    "云南",
                    "陕西",
                    "甘肃",
                    "青海",
                    "台湾",
                    "内蒙古",
                    "广西",
                    "西藏",
                    "宁夏",
                    "新疆",
                    "香港",
                    "澳门"
                ]),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.onEnable = function () {
                this.udpateItem();
            }),
            (t.prototype.onHide = function () {
                r.default.playEffect("click"),
                    (this.node.active = !1),
                    this.node.parent.getComponent(s.default).updateTeam();
            }),
            (t.prototype.onDisable = function () {
                var e = {
                    openId: c.default.loginCode,
                    nickname: c.default.nikeName,
                    head: c.default.headIcon,
                    channel: c.default.channel,
                    province: c.default.myArea
                };
                u.default.sendPost("player/updateBase ", e, function (e) {
                    console.log("返回数据", JSON.stringify(e));
                }),
                    cc.find("Canvas/MainCtl").getComponent(d.default).updateLevel();
            }),
            (t.prototype.udpateItem = function () {
                for (var e = this, t = 0; t < this.province.length; t++) {
                    var o = this.content.children[t];
                    o &&
                        o.getComponent(l.default).init(this.province[t], function (t) {
                            e.itemCallback(t);
                        });
                }
                this.updateItemSelected();
            }),
            (t.prototype.itemCallback = function (e) {
                (c.default.myArea = e), this.updateItemSelected();
            }),
            (t.prototype.updateItemSelected = function () {
                for (var e = 0; e < this.content.childrenCount; e++) {
                    var t = this.content.children[e];
                    t.getComponent(l.default).itemValue == c.default.myArea
                        ? (t.color = cc.Color.GREEN)
                        : (t.color = cc.Color.WHITE);
                }
            }),
            i([y(cc.Node)], t.prototype, "content", void 0),
            i([h], t)
        );
    })(cc.Component);
o.default = g;
