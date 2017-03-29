"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Tests
var invalidDataTypes_1 = require("./invalidDataTypes");
var string_1 = require("./string");
/**
 * @description
 *  Tests should pass!
 *
 * @export
 */
function dataTypes() {
    describe('Value passed is of invalid data type', function () {
        invalidDataTypes_1.nullValue();
        invalidDataTypes_1.booleanValue();
        invalidDataTypes_1.numberValue();
        invalidDataTypes_1.functionValue();
        invalidDataTypes_1.errorObjectValue();
        invalidDataTypes_1.arrayValue();
        invalidDataTypes_1.objectValue();
    });
}
exports.dataTypes = dataTypes;
/**
 * @description
 *  Tests should pass!
 *
 * @export
 */
function invalidValues() {
    describe('Value passed is of invalid value', function () {
        string_1.default();
    });
}
exports.invalidValues = invalidValues;
//# sourceMappingURL=index.js.map