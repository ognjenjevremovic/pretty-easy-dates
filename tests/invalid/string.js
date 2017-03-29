"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
//  Random strings
function default_1() {
    describe('Invalid string value', function () {
        //  More info
        var info = 'from random string value';
        //  Test case I
        validate_1.default(info, '');
        //  Test case II
        validate_1.default(info, '   ');
        //  Test case III
        validate_1.default(info, 'string');
        //  Test case IV
        validate_1.default(info, 'random string value');
        //  Test case V
        validate_1.default(info, '03292017');
        //  Test case VI
        validate_1.default(info, 'some other day');
        //  Test case VII
        validate_1.default(info, 'long before today');
    });
}
exports.default = default_1;
//# sourceMappingURL=string.js.map