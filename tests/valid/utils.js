"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description
 *  Stringifies the number
 *
 * @param {number} value
 * @returns {string}
 */
var stringify = function (value) { return value.toString(); };
/**
 * @description
 *  Transforms the one digit numbers to two digit numbers
 *  by prepending the 0 and stringifies the output
 *
 * @param {number} value
 * @returns {string}
 */
var transform = function (value) { return stringify(value).length === 1 ? "0" + stringify(value) : stringify(value); };
/**
 * @description
 *  Transform the Date data value
 *  to the CustomDate class instance lookalike
 *
 * @export
 * @param {Date} value
 * @returns {CustomDate}
 */
function default_1(value) {
    var year = stringify(value.getFullYear());
    var month = transform(value.getMonth() + 1);
    var day = transform(value.getDate());
    var hours = transform(value.getHours());
    var minutes = transform(value.getMinutes());
    var seconds = transform(value.getSeconds());
    return {
        year: year, month: month, day: day,
        hours: hours, minutes: minutes, seconds: seconds,
        timestamp: value.getTime(),
        dateObj: value,
        date: month + "." + day + "." + year,
        time: hours + ":" + minutes + ":" + seconds,
        now: "Date : " + month + "." + day + "." + year + " - Time " + hours + ":" + minutes + ":" + seconds
    };
}
exports.default = default_1;
//# sourceMappingURL=utils.js.map