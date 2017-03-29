"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
/**
 * @description
 *  Assertion with the Date string value
 *  Should pass!
 *
 * @export
 */
function default_1() {
    describe('Date string ', function () {
        //  More info
        var info = 'from Date string';
        var date = new Date('3.29.17.');
        //  Test case I
        validate_1.default(info, date, '3.29.17.');
        //  Test case II
        validate_1.default(info, date, '3/29/17');
        //  Test case III
        validate_1.default(info, date, '3-29-17');
        //  Test case IV
        validate_1.default(info, date, '03.29.2017.');
        //  Test case V
        validate_1.default(info, date, '03/29/2017');
        //  Test case VI
        validate_1.default(info, date, '03-29-2017');
        //  Test case VII
        validate_1.default(info, date, 'Mar 29 17');
        //  Test case VIII
        validate_1.default(info, date, 'March 29 2017');
        //  Test case IX
        validate_1.default(info, date, 'Tue March 29 2017');
        //  Test case X
        validate_1.default(info, date, date.toString());
    });
}
exports.default = default_1;
//# sourceMappingURL=dateString.js.map