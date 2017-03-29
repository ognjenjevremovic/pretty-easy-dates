"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancie
var base_1 = require("./base");
var periods_1 = require("./periods");
/**
 * @description
 *  Keyword Class for defining time keywords
 *
 * @export
 * @class Keyword
 * @extends {Base}
 */
var Keyword = (function (_super) {
    __extends(Keyword, _super);
    function Keyword(main, alt, value) {
        var _this = _super.call(this, main, alt, value) || this;
        _this.main = main;
        _this.alt = alt;
        _this.value = value;
        return _this;
    }
    return Keyword;
}(base_1.Base));
exports.Keyword = Keyword;
//  Keywords array
exports.keywords = [
    //  Past week
    new Keyword('last week', ['lastweek', 'lweek', 'lw', 'pastweek', 'pweek', 'pw'], Date.now() - periods_1.weekPeriod.value),
    //  Past day
    new Keyword('yesterday', ['yesterday', 'yest', 'ystd', 'yd', 'lastday', 'lday', 'ld', 'pastday', 'pday', 'pd'], Date.now() - periods_1.dayPeriod.value),
    //  Past hour
    new Keyword('past hour', ['lasthour', 'lhour', 'lh', 'pasthour', 'phour', 'ph'], Date.now() - periods_1.hourPeriod.value),
    //  Today
    new Keyword('today', ['today', 'tday', 'td', 'now', 'n'], Date.now()),
    //  Next hour
    new Keyword('next hour', ['nexthour', 'nhour', 'nh', 'futurehour', 'fhour', 'fh'], Date.now() + periods_1.hourPeriod.value),
    //  Next day
    new Keyword('tomorrow', ['tomorrow', 'tmrrw', 'tmrw', 'tr', 'nextday', 'nday', 'nd', 'futureday', 'fday', 'fd'], Date.now() + periods_1.dayPeriod.value),
    //  Next week
    new Keyword('next week', ['nextweek', 'nextw', 'nw', 'futureweek', 'fweek', 'fw'], Date.now() + periods_1.weekPeriod.value)
];
//# sourceMappingURL=keywords.js.map