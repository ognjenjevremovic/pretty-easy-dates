"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Tests
var valid_1 = require("./valid");
var invalid_1 = require("./invalid");
//  Test - Invalid data type (Returns an instance Error class)
describe('Invalid parameter data type supplied', invalid_1.dataTypes);
//  Test - Invalid value (Returns an instance Error class)
describe('Invalid parameter value supplied', invalid_1.invalidValues);
//  Test - Valid parameter value (Returns an instance of CustomDate class)
describe('Valid parameter value supplied', valid_1.default);
//# sourceMappingURL=spec.js.map