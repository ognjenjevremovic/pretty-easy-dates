//  Dependancies
import * as validator from './validators';
import { CustomDate } from './date';
import { dateParser as parseDate } from './dateParser';


/**
 * @description Makes a new instance of CustomDate, based on the parameter passed
 *
 * @param {string} param
 * @returns {CustomDate}
 */
function isValidParameter(param: string): CustomDate {

        //  Practicly a valid date
        if(validator.isDate(param)) return new CustomDate(new Date(param).getTime());

        //  Make a new date, out of keyword
        else if (validator.isKeyword(param)) return new CustomDate(parseDate(param));

        //  Make a new date, out of period
        else if (validator.isPeriod(param)) return new CustomDate(parseDate(param));

        //  Invalid value passed
        else {
            return null;
        }
}

/**
 * @description Removes the blank spaces and underscores from the parameter passed
 *
 * @param {string} param
 * @returns {string}
 */
function trim(param: string): string {
    return param.replace(/\s+|\_+/g, '');
}


/**
 * @description Returns an instance of CustomDate to the caller
 *
 * @param {(string | Array<string>)} [param]
 * @returns {(CustomDate | CustomDate[])}
 */
export function makeDate(param?: string | Array<string>): CustomDate | CustomDate[] {

    //  Trim parameter(s)
    if(typeof param === 'string') param = trim(param);
    else if (param instanceof Array) param = param.map((_param) => (typeof _param === 'string') ? trim(_param) : null);

    //  No param passed
    if(!param) return new CustomDate(Date.now());

    //  String
    if(!(param instanceof Array)) return isValidParameter(param);

    //  Array of strings
    else {
        return param.map((_param: string) => {
            return isValidParameter(_param);
        });
    }
}
