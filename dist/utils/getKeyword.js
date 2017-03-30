"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var models_1 = require("../models");
/**
 * @description
 *  Find the matching keyword's value
 *
 * @param {string} value
 * @returns {boolean}
 */
var stringKeyword = function (value) {
    for (var _i = 0, knownKeywords_1 = models_1.keywords; _i < knownKeywords_1.length; _i++) {
        var keyword = knownKeywords_1[_i];
        if (keyword.alt.indexOf(value) > -1)
            return keyword.value;
    }
};
/**
 * @description
 *  Check if the value supplied is one
 *  of definied keywords in the array
 *
 * @param {string} value
 * @returns {boolean}
 */
function dateFromKeyword(keyword) {
    if (keyword !== '')
        return stringKeyword(keyword);
    return null;
}
exports.default = dateFromKeyword;
//# sourceMappingURL=getKeyword.js.map