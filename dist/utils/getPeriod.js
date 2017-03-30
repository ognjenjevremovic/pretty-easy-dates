"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var models_1 = require("../models");
var trim_1 = require("./trim");
//  Known periods
var periods = [models_1.hourPeriod, models_1.dayPeriod, models_1.weekPeriod];
/**
 * @description
 *  Check if the value is a known period
 *
 * @param {string} value
 * @returns {boolean}
 */
var stringPeriod = function (value) {
    for (var _i = 0, periods_1 = periods; _i < periods_1.length; _i++) {
        var period = periods_1[_i];
        if (period.alt.indexOf(trim_1.getValue(value)) > -1)
            return period.value;
    }
};
/**
 * @description
 *  Check if the value supplied is one
 *  of definied keywords in the array
 *
 * @param {string} value
 * @returns {boolean}
 */
function dateFromPeriod(period) {
    if (period !== '')
        return stringPeriod(period);
    return null;
}
exports.default = dateFromPeriod;
//# sourceMappingURL=getPeriod.js.map