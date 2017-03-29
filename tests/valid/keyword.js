"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
/**
 * @description
 *  Assertion with the keyword values
 *  Should pass!
 *
 * @export
 */
function default_1() {
    describe('Registered keywords', function () {
        //  More info
        var info = 'from registered keyword';
        var date = new Date().getTime();
        //  Periods
        var hour = 1000 * 60 * 60;
        var day = hour * 24;
        var week = day * 7;
        //  Test case I
        validate_1.default(info, new Date(date - week), 'last week');
        //  Test case II
        validate_1.default(info, new Date(date - week), 'lw');
        //  Test case III
        validate_1.default(info, new Date(date - day), 'past day');
        //  Test case IV
        validate_1.default(info, new Date(date - day), 'pd');
        //  Test case V
        validate_1.default(info, new Date(date - day), 'yesterday');
        //  Test case VI
        validate_1.default(info, new Date(date), 'today');
        //  Test case VII
        validate_1.default(info, new Date(date), 'now');
        //  Test case VIII
        validate_1.default(info, new Date(date + day), 'tmrw');
        //  Test case IX
        validate_1.default(info, new Date(date + day), 'future day');
        //  Test case X
        validate_1.default(info, new Date(date + week), 'next week');
        //  Test case XI
        validate_1.default(info, new Date(date + week), 'nw');
    });
}
exports.default = default_1;
//# sourceMappingURL=keyword.js.map