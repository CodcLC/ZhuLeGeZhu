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
var r = e("CsvHelper"),
    c = cc._decorator,
    l = c.ccclass,
    s =
        (c.property,
        (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._loadCsvList = [
                        "block_config",
                        "shovel_config",
                        "barrier_dispose",
                        "prop_config",
                        "barrier_map",
                        "turntable_rewards"
                    ]),
                    (t._csvData = {}),
                    (t._prefabs = {}),
                    (t._index = 0),
                    (t._totoal = 0),
                    (t._spritFrameChache = {}),
                    (t.roleSpineList = {}),
                    (t.spineList = {}),
                    (t.mianFab = null),
                    (t.popupBundle = null),
                    (t.configsBundle = null),
                    (t._guideCsvData = {}),
                    t
                );
            }
            var o;
            return (
                n(t, e),
                (o = t),
                (t.getInstance = function () {
                    return null == o._instance && (o._instance = new o()), o._instance;
                }),
                (t.prototype.loadCSVCfg = function () {
                    var e = this;
                    (this._totoal = this._loadCsvList.length),
                        cc.assetManager.loadBundle("configs", function (t, o) {
                            if (t) return console.log(t), void e.loadCSVCfg();
                            (e.configsBundle = o), e.readCsvCfg();
                        }),
                        this.loadPrefabs();
                }),
                (t.prototype.readCsvCfg = function () {
                    var e = this;
                    r.default.getInstance().loadCsv(this._loadCsvList[this._index], function (t, o) {
                        "Data_Para" == t ? e.paraConfigInit(o) : (e._csvData[t] = o),
                            e._index++,
                            e._totoal > e._index && e.readCsvCfg();
                    });
                }),
                (t.prototype.loadPrefabs = function () {
                    var e = this;
                    cc.loader.loadResDir("gamePrefabs", function (t, o) {
                        for (var a = 0; a < o.length; a++) e._prefabs[o[a].name] = o[a].data;
                    });
                }),
                (t.prototype.getSpriteFrameCache = function (e) {
                    return this._spritFrameChache[e] || null;
                }),
                (t.prototype.getPrefab = function (e) {
                    return this._prefabs[e] || null;
                }),
                (t.prototype.getDataConfig = function (e) {
                    return this._csvData[e];
                }),
                (t.prototype.getShovelCfg = function (e) {
                    for (var t = this._csvData.shovel_config, o = 0; o < t.length; o++)
                        if (Number(t[o].level) == e) return t[o];
                    return null;
                }),
                (t.prototype.getMapItem2Cfg = function (e) {
                    for (var t = this._csvData.prop_config, o = 0; o < t.length; o++)
                        if (Number(t[o].id) == e) return t[o];
                    return null;
                }),
                (t.prototype.getMapItem3Cfg = function (e) {
                    for (var t = this._csvData.shovel_config, o = 0; o < t.length; o++)
                        if (Number(t[o].id) == e) return t[o];
                    return null;
                }),
                (t.prototype.getMapItemCfg = function (e) {
                    for (var t = this._csvData.block_config, o = 0; o < t.length; o++)
                        if (Number(t[o].id) == e) return t[o];
                    return null;
                }),
                (t.prototype.getLevelCfg = function (e) {
                    for (var t = this._csvData.barrier_dispose, o = 0; o < t.length; o++)
                        if (Number(t[o].id) == e) return t[o];
                    return null;
                }),
                (t.prototype.getMapDataCfg = function (e) {
                    for (var t = this._csvData.barrier_map, o = 0; o < t.length; o++)
                        if (Number(t[o].id) == e) return t[o];
                    return null;
                }),
                (t.prototype.getRoleSkeletonData = function (e, t, o) {
                    var a = this;
                    this.roleSpineList[e]
                        ? t && o && o.apply(t, [this.roleSpineList[e]])
                        : cc.loader.loadRes("character/" + e + "/" + e, sp.SkeletonData, function (n, i) {
                              if (n) return console.error(n), void (t && o && o.apply(t));
                              i && ((a.roleSpineList[i.name] = i), t && o && o.apply(t, [a.roleSpineList[e]]));
                          });
                }),
                (t.prototype.getSkeletonData = function (e, t, o) {
                    var a = this;
                    this.spineList[e]
                        ? t && o && o.apply(t, [this.spineList[e]])
                        : cc.loader.loadRes(e, sp.SkeletonData, function (n, i) {
                              if (n) return console.error(n), void (t && o && o.apply(t));
                              i && ((a.spineList[e] = i), t && o && o.apply(t, [a.spineList[e]]));
                          });
                }),
                (t.prototype.paraConfigInit = function (e) {
                    for (var t = 0; t < e.length; t++);
                }),
                (t._instance = null),
                (o = i([l], t))
            );
        })(cc.Component));
o.default = s;
