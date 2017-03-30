"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancie
var assert = require("assert");
var __1 = require("../..");
//  Should return an Error
var shouldReturnError = 'Should return an instance of Error ->';
/**
 * @description
 *  Check if the value returns
 *  a new instance of Error
 *  and does not throw it
 *
 * @param {string} info
 * @param {any} value
 * @returns {*}
 */
function invalidParam_returnsError(info, value) {
    it(shouldReturnError + " " + info, function () {
        //  Does not throw an error
        assert.doesNotThrow(function () { return __1.default(value); }, Error);
        //  But returns an instance of Error class
        assert.deepEqual(function () { return __1.default(value); }, new Error('error'));
    });
}
exports.default = invalidParam_returnsError;
//# sourceMappingURL=validate.js.map