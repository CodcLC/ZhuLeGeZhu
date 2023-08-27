var e = require;
var t = module;
var o = exports;
Object.defineProperty(o, "__esModule", {value: !0});
var a,
    n = e("LoadResMgr");
!(function (e) {
    (e[(e.NewFieldStart = 1)] = "NewFieldStart"),
        (e[(e.NonQuotesField = 2)] = "NonQuotesField"),
        (e[(e.QuotesField = 3)] = "QuotesField"),
        (e[(e.FieldSeparator = 4)] = "FieldSeparator"),
        (e[(e.QuoteInQuotesField = 5)] = "QuoteInQuotesField"),
        (e[(e.RowSeparator = 6)] = "RowSeparator"),
        (e[(e.Error = 7)] = "Error");
})(a || (a = {}));
var i = (function () {
        function e() {
            (this.m_header = []), (this.m_values = []);
        }
        return (
            (e.prototype.push_back = function (e) {
                this.m_values.push(e);
            }),
            (e.prototype.setHeader = function (e) {
                this.m_header = e;
            }),
            (e.prototype.getSize = function () {
                return this.m_values.length;
            }),
            e
        );
    })(),
    r = (function () {
        function e() {
            (this.m_content = []),
                (this.m_header = []),
                (this.Fields = null),
                (this.strField = ""),
                (this.mStateType = a.NewFieldStart);
        }
        return (
            (e.getInstance = function () {
                return e.instace || (e.instace = new e()), e.instace;
            }),
            (e.prototype.loadCsv = function (e, t) {
                var o = this;
                (o.m_content = []),
                    (o.m_header = []),
                    (o.Fields = new i()),
                    (o.strField = ""),
                    (o.mStateType = a.NewFieldStart),
                    n.default.getInstance().configsBundle.load(e, function (e, n) {
                        if (e) cc.error(e.message, e);
                        else {
                            for (var r = n.toString(), c = 0, l = r.length; c < l; ++c) {
                                var s = r[c];
                                switch (o.mStateType) {
                                    case a.NewFieldStart:
                                        '"' == s
                                            ? (o.mStateType = a.QuotesField)
                                            : "," == s
                                            ? (o.Fields.push_back(""), (o.mStateType = a.FieldSeparator))
                                            : "\r" == s || "\n" == s
                                            ? (o.mStateType = a.Error)
                                            : ((o.strField += s), (o.mStateType = a.NonQuotesField));
                                        break;
                                    case a.NonQuotesField:
                                        "," == s
                                            ? (o.Fields.push_back(o.strField),
                                              (o.strField = ""),
                                              (o.mStateType = a.FieldSeparator))
                                            : "\r" == s
                                            ? (o.Fields.push_back(o.strField), (o.mStateType = a.RowSeparator))
                                            : (o.strField += s);
                                        break;
                                    case a.QuotesField:
                                        '"' == s ? (o.mStateType = a.QuoteInQuotesField) : (o.strField += s);
                                        break;
                                    case a.FieldSeparator:
                                        "," == s
                                            ? o.Fields.push_back("")
                                            : '"' == s
                                            ? ((o.strField = ""), (o.mStateType = a.QuotesField))
                                            : "\r" == s
                                            ? (o.Fields.push_back(""), (o.mStateType = a.RowSeparator))
                                            : ((o.strField += s), (o.mStateType = a.NonQuotesField));
                                        break;
                                    case a.QuoteInQuotesField:
                                        "," == s
                                            ? (o.Fields.push_back(o.strField),
                                              (o.strField = ""),
                                              (o.mStateType = a.FieldSeparator))
                                            : "\r" == s
                                            ? (o.Fields.push_back(o.strField), (o.mStateType = a.RowSeparator))
                                            : '"' == s
                                            ? ((o.strField += s), (o.mStateType = a.QuotesField))
                                            : (o.mStateType = a.Error);
                                        break;
                                    case a.RowSeparator:
                                        "\n" == s
                                            ? (o.m_content.push(o.Fields),
                                              (o.Fields = new i()),
                                              (o.strField = ""),
                                              (o.mStateType = a.NewFieldStart))
                                            : (o.mStateType = a.Error);
                                    case a.Error:
                                }
                            }
                            switch (o.mStateType) {
                                case a.NewFieldStart:
                                    break;
                                case a.NonQuotesField:
                                    o.Fields.push_back(o.strField), o.m_content.push(o.Fields);
                                    break;
                                case a.QuotesField:
                                    break;
                                case a.FieldSeparator:
                                    o.Fields.push_back(""), o.m_content.push(o.Fields);
                                    break;
                                case a.QuoteInQuotesField:
                                    o.Fields.push_back(o.strField), o.m_content.push(o.Fields);
                                case a.RowSeparator:
                                case a.Error:
                            }
                            o.setHeader(), (o.m_content = o.contentToJson(o.m_content)), t(n.name, o.m_content);
                        }
                    });
            }),
            (e.prototype.contentToJson = function (e) {
                for (var t = [], o = 2; o < e.length; ++o) {
                    for (var a = {}, n = e[o].m_header, i = e[o].m_values, r = 0; r < n.length; ++r)
                        a[n[r].replace('"', "")] = i[r].replace("\\n", "\n");
                    t.push(a);
                }
                return t;
            }),
            (e.prototype.setHeader = function () {
                this.m_header = [];
                for (var e = 0; e < this.m_content[0].m_values.length; e++)
                    this.m_header.push(this.m_content[0].m_values[e]);
                for (e = 0; e < this.m_content.length; e++) this.m_content[e].setHeader(this.m_header);
            }),
            (e.prototype.getHeader = function () {
                return this.m_header;
            }),
            (e.prototype.getRowCount = function () {
                return this.m_content.length;
            }),
            (e.prototype.getColumnCount = function () {
                return this.m_header.length;
            }),
            (e.prototype.isExistForKey = function (e) {
                for (var t = 0; t < this.m_header.length; ++t) if (this.m_header[t] === e) return !0;
                return !1;
            }),
            (e.instace = null),
            e
        );
    })();
o.default = r;
