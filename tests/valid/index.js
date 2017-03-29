"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Tests
var dateObject_1 = require("./dateObject");
var dateString_1 = require("./dateString");
var keyword_1 = require("./keyword");
var period_1 = require("./period");
var undefined_1 = require("./undefined");
/**
 * @description
 *  Tests should pass!
 *
 * @export
 */
function default_1() {
    describe('Valid parameter supplied', function () {
        undefined_1.default();
        dateObject_1.default();
        dateString_1.default();
        keyword_1.default();
        period_1.default();
    });
}
exports.default = default_1;
//# sourceMappingURL=index.js.map