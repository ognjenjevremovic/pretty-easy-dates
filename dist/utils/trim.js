"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description
 *  Removes the non word characters/numbers
 *  from the parameter passed, but preserve the first
 *  dash (as it indicates the negation)
 *
 * @param {string} param
 * @returns {string}
 */
exports.trim = function (param) { return param.toLocaleLowerCase().replace(/(?!^[-+])[-._,\/\\\s]+/g, ''); };
/**
 * @description
 *  Removes the digits, plus and minus signs
 *  as well as letter 's' for plurals
 *
 * @param {string} param
 * @returns {string}
 */
exports.getValue = function (param) { return param.replace(/[\ds+-]/g, ''); };
//# sourceMappingURL=trim.js.map