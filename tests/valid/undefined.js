"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
/**
 * @description
 *  Assertion with the undefined value
 *  Should pass!
 *
 * @export
 */
function default_1() {
    describe('undefined', function () {
        //  More info
        var info = 'from undefined value';
        validate_1.default(info, new Date());
        validate_1.default(info, new Date(), undefined);
    });
}
exports.default = default_1;
//# sourceMappingURL=undefined.js.map