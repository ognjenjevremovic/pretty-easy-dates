"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
/**
 * @description
 *  Assertion with the period values
 *  Should pass!
 *
 * @export
 */
function default_1() {
    describe('Registered periods ', function () {
        //  More info
        var info = 'from registered period';
        var date = new Date().getTime();
        //  Periods
        var hour = 1000 * 60 * 60;
        var day = hour * 24;
        var week = day * 7;
        //  Test case I
        validate_1.default(info, new Date(date - 4 * week), '-4weeks');
        //  Test case II
        validate_1.default(info, new Date(date - 2 * week), '-2 weeks');
        //  Test case III
        validate_1.default(info, new Date(date - week), '-week');
        //  Test case IV
        validate_1.default(info, new Date(date + week), '+week');
        //  Test case V
        validate_1.default(info, new Date(date + 3 * week), '+3week');
        //  Test case VI
        validate_1.default(info, new Date(date + 6 * week), '6 week');
        //  Test case VII
        validate_1.default(info, new Date(date - 4 * day), '-4days');
        //  Test case VIII
        validate_1.default(info, new Date(date - 2 * day), '-2 days');
        //  Test case IX
        validate_1.default(info, new Date(date - day), '-day');
        //  Test case X
        validate_1.default(info, new Date(date + day), '+day');
        //  Test case XI
        validate_1.default(info, new Date(date + 3 * day), '+3day');
        //  Test case XII
        validate_1.default(info, new Date(date + 6 * day), '+6 day');
        //  Test case XIII
        validate_1.default(info, new Date(date - 4 * hour), '-4hours');
        //  Test case XIV
        validate_1.default(info, new Date(date - 2 * hour), '-2 hours');
        //  Test case XV
        validate_1.default(info, new Date(date - hour), '-hour');
        //  Test case XVI
        validate_1.default(info, new Date(date + hour), '+hour');
        //  Test case XVII
        validate_1.default(info, new Date(date + 3 * hour), '+3hour');
        //  Test case XVIII
        validate_1.default(info, new Date(date + 6 * hour), '+6 hour');
    });
}
exports.default = default_1;
//# sourceMappingURL=period.js.map