"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var pretty_easy_data_types_1 = require("pretty-easy-data-types");
var pretty_easy_date_check_1 = require("pretty-easy-date-check");
var customDate_1 = require("./customDate");
var utils_1 = require("./utils");
/**
 * @description
 *  Returns an instance of CustomDate to the caller
 *  or the instance of Error if invalid value is supplied
 *
 * @export
 * @param {(string | Date)} [param]
 * @returns {(CustomDate | Error)}
 */
function default_1(param) {
    var customDate;
    //  No param passed
    if (!param)
        customDate = new customDate_1.default(Date.now());
    //  Valid parameter
    if (param && (pretty_easy_data_types_1.isString(param) || pretty_easy_data_types_1.isDate(param))) {
        //  Instance of Date class
        if (pretty_easy_data_types_1.isDate(param))
            customDate = new customDate_1.default(param.getTime());
        //  String Date; valid Date class parameter
        if (pretty_easy_data_types_1.isString(param) && pretty_easy_date_check_1.default(param))
            customDate = new customDate_1.default(new Date(param).getTime());
        //  Keyword
        if (pretty_easy_data_types_1.isString(param) && utils_1.dateFromKeyword(utils_1.trim(param))) {
            customDate = new customDate_1.default(utils_1.dateFromKeyword(utils_1.trim(param)));
        }
        //  Period
        if (pretty_easy_data_types_1.isString(param) && utils_1.dateFromPeriod(utils_1.trim(param))) {
            //  Extract the quantifier
            var quantifier = param.replace(/(?!^[\-\+])\D/g, '');
            quantifier = (quantifier === '-' || quantifier === '+') ? quantifier + "1" : quantifier;
            customDate = new customDate_1.default(Date.now() + +quantifier * utils_1.dateFromPeriod(utils_1.trim(param)));
        }
    }
    /**
     *  Return a new instance of Custom Date class
     *  if a no or valid parameter is passed
     *  else return a new instance of Error class
     */
    return customDate ? customDate : new Error("Invalid parameter value supplied -> " + param);
}
exports.default = default_1;
//# sourceMappingURL=defineDate.js.map