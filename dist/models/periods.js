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
/**
 * @description
 *  Period Class for defining period keywords
 *
 * @export
 * @class Period
 * @extends {Keyword}
 */
var Period = (function (_super) {
    __extends(Period, _super);
    function Period(main, alt, value) {
        var _this = _super.call(this, main, alt, value) || this;
        _this.main = main;
        _this.alt = alt;
        _this.value = value;
        return _this;
    }
    return Period;
}(base_1.Base));
exports.Period = Period;
//  Time constraints
var hour = 60 * 60 * 1000;
var day = 24 * hour;
var week = 7 * day;
//  Export periods
exports.hourPeriod = new Period('hour', ['hour', 'h'], hour);
exports.dayPeriod = new Period('day', ['day', 'd'], day);
exports.weekPeriod = new Period('week', ['week', 'w'], week);
//# sourceMappingURL=periods.js.map