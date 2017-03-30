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
 *  Custom date class object
 *  instance of the class is the
 *  return value of the module
 *
 * @export
 * @class CustomDate
 */
var CustomDate = (function () {
    function CustomDate(param) {
        var date = new Date(param);
        this.timestamp = param;
        this.dateObj = date;
        this.year = stringify(date.getFullYear());
        this.month = transform(date.getMonth() + 1);
        this.day = transform(date.getDate());
        this.hours = transform(date.getHours());
        this.minutes = transform(date.getMinutes());
        this.seconds = transform(date.getSeconds());
        this.date = this.month + "." + this.day + "." + this.year;
        this.time = this.hours + ":" + this.minutes + ":" + this.seconds;
        this.now = "Date : " + this.date + " - Time " + this.time;
    }
    return CustomDate;
}());
exports.default = CustomDate;
//# sourceMappingURL=customDate.js.map