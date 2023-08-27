var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var a = e("Util"),
    n = (function () {
        function e() {}
        return (
            (e.initPlayerDataInfo = function () {
                (e.playerBaseData = {
                    gold: 50,
                    brick: 0,
                    curLevel: 1,
                    shovel: {7: 1},
                    maxShovelLevel: 1,
                    generateShovelLV: 1,
                    shovelLVPro: 0,
                    treasureChest: [],
                    storedItems: [],
                    musicSwitch: 1,
                    effectSwitch: 1,
                    vibrateSwitch: 1,
                    turnTableNum: 0,
                    turnTableStarTime: Date.now(),
                    myContribute: 0,
                    adJsBox: 0,
                    guideIndex: 0,
                    guideEventIndex: 0
                }),
                    (e.cuurentLevelMapData = {level: 0, row: 0, mapData: []}),
                    (e.tChestRecord = {});
            }),
            (e.getTChestRecordData = function () {
                var t = a.default.readLocalStoreStr("TChestRecordData", null);
                if (t)
                    try {
                        (t = JSON.parse(t)) && (e.tChestRecord = t);
                    } catch (e) {
                        console.log(e);
                    }
            }),
            (e.saveTChestRecordData = function () {
                try {
                    var t = JSON.stringify(e.tChestRecord);
                    a.default.writeLocalStoreStr("TChestRecordData", t);
                } catch (e) {
                    console.log(e);
                }
            }),
            (e.getMapData = function () {
                var t = a.default.readLocalStoreStr("SyntheticMinerMapData", null);
                if (t)
                    try {
                        (t = JSON.parse(t)) && (e.cuurentLevelMapData = t);
                    } catch (e) {
                        console.log(e);
                    }
            }),
            (e.saveMapData = function () {
                try {
                    var t = JSON.stringify(e.cuurentLevelMapData);
                    a.default.writeLocalStoreStr("SyntheticMinerMapData", t);
                } catch (e) {
                    console.log(e);
                }
            }),
            (e.getPlayerBaseData = function () {
                var t = a.default.readLocalStoreStr("SyntheticMinerData", null);
                if (t)
                    try {
                        for (var o in ((t = JSON.parse(t)) && (e.playerBaseData = t), e.playerBaseData.shovel))
                            (10002 != e.playerBaseData.shovel[o] &&
                                10003 != e.playerBaseData.shovel[o] &&
                                10005 != e.playerBaseData.shovel[o] &&
                                10006 != e.playerBaseData.shovel[o] &&
                                10007 != e.playerBaseData.shovel[o]) ||
                                (e.playerBaseData.shovel[o] = null);
                        e.playerBaseData.adJsBox || (e.playerBaseData.adJsBox = 0),
                            e.playerBaseData.guideIndex ||
                                0 == e.playerBaseData.guideIndex ||
                                (e.playerBaseData.guideIndex = 10),
                            e.playerBaseData.guideEventIndex ||
                                0 == e.playerBaseData.guideEventIndex ||
                                (e.playerBaseData.guideEventIndex = 10);
                    } catch (e) {
                        console.log(e);
                    }
                else this.initPlayerDataInfo();
            }),
            (e.savePlayerBaseData = function () {
                try {
                    var t = JSON.stringify(e.playerBaseData);
                    a.default.writeLocalStoreStr("SyntheticMinerData", t);
                } catch (e) {
                    console.log(e);
                }
            }),
            (e.version = "1.0.3"),
            (e.isNoAdvideo = !1),
            (e.tiledSize = cc.size(160, 160)),
            (e.myArea = "湖南"),
            (e.creatorTime = Date.now()),
            (e.totalContribute = 0),
            (e.headIcon = ""),
            (e.nikeName = "游客"),
            (e.loginCode = ""),
            (e.channel = 0),
            (e.playerBaseData = {
                gold: 50,
                brick: 0,
                curLevel: 1,
                shovel: {7: 1},
                maxShovelLevel: 1,
                generateShovelLV: 1,
                shovelLVPro: 0,
                myContribute: 0,
                adJsBox: 0,
                treasureChest: [],
                storedItems: [],
                musicSwitch: 1,
                effectSwitch: 1,
                vibrateSwitch: 1,
                turnTableNum: 0,
                turnTableStarTime: Date.now(),
                guideIndex: 0,
                guideEventIndex: 0
            }),
            (e.cuurentLevelMapData = {level: 0, row: 0, mapData: []}),
            (e.tChestRecord = {}),
            e
        );
    })();
o.default = n;
