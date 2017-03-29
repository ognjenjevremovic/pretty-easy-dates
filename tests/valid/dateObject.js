"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
/**
 * @description
 *  Assertion with the instance of Date class
 *  Should pass!
 *
 * @export
 */
function default_1() {
    describe('Date Object ', function () {
        //  More info
        var info = 'from instance of Date class';
        //  Test case I
        validate_1.default(info, new Date(), new Date());
        //  Test case II
        validate_1.default(info, new Date('3.29.17'), new Date('03/29/17'));
        //  Test case III
        validate_1.default(info, new Date('10.29.2016'), new Date('10/29/2016'));
        //  Test case IV
        validate_1.default(info, new Date('Tue March 29 2017'), new Date('Mar 29 2017'));
    });
}
exports.default = default_1;
//# sourceMappingURL=dateObject.js.map