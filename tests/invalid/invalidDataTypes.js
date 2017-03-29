"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
//  null
function nullValue() {
    describe('null value', function () {
        validate_1.default('from null value', null);
    });
}
exports.nullValue = nullValue;
//  boolean
function booleanValue() {
    describe('boolean value', function () {
        validate_1.default('from boolean value', true);
        validate_1.default('from boolean balue', false);
    });
}
exports.booleanValue = booleanValue;
//  number
function numberValue() {
    describe('number value', function () {
        validate_1.default('from number value', -30);
        validate_1.default('from number value', -.75);
        validate_1.default('from number value', -0.5);
        validate_1.default('from number value', 0);
        validate_1.default('from number value', .75);
        validate_1.default('from number value', 0.99);
        validate_1.default('from number value', 25);
    });
}
exports.numberValue = numberValue;
//  function
function functionValue() {
    describe('Function', function () {
        validate_1.default('from function', function () { });
        validate_1.default('from function', function () { return true; });
        validate_1.default('from function', function () { return 'this is a function'; });
    });
}
exports.functionValue = functionValue;
//  instance of Error class
function errorObjectValue() {
    describe('instance of Error class', function () {
        validate_1.default('from Error object', new Error('invalid value'));
    });
}
exports.errorObjectValue = errorObjectValue;
//  Array
function arrayValue() {
    describe('Array', function () {
        validate_1.default('from Array', []);
        validate_1.default('from Array', [new Date(), new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)]);
        validate_1.default('from Array', ['lw', 'tomorrow']);
    });
}
exports.arrayValue = arrayValue;
//  Object
function objectValue() {
    describe('Object', function () {
        validate_1.default('from Object', {});
        validate_1.default('from Object', { red: 'ff', green: 0, blue: 0 });
        validate_1.default('from Object', { red: 45, green: 79, blue: 'CC' });
    });
}
exports.objectValue = objectValue;
//# sourceMappingURL=invalidDataTypes.js.map