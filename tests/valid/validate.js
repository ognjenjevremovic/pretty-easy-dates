"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancie
var assert = require("assert");
var __1 = require("../..");
var utils_1 = require("./utils");
//  Should return an Instance of CustomDate class
var shouldReturnString = 'Should return an Instance of CustomDate class, with the various date value properties ->';
/**
 * @description
 *  Check if the value returned is
 *  an instance of CustomDate class
 *  containing the right properties and values
 *
 * @param {string} info
 * @param {string|Date} value
 * @param {Date} equalityCheck
 * @returns {*}
 */
function validParam_returnsObject(info, equalityCheck, value) {
    var cstDate = __1.default(value);
    var date = utils_1.default(equalityCheck);
    it(shouldReturnString + " " + info, function () {
        assert.equal(cstDate.year, date.year);
        assert.equal(cstDate.month, date.month);
        assert.equal(cstDate.day, date.day);
        assert.equal(cstDate.hours, date.hours);
        assert.equal(cstDate.minutes, date.minutes);
        assert.equal(cstDate.seconds, date.seconds);
        assert.equal(cstDate.date, date.date);
        assert.equal(cstDate.time, date.time);
    });
}
exports.default = validParam_returnsObject;
//# sourceMappingURL=validate.js.map