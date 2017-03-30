//  Dependancies
import {
    isString,
    isDate
} from 'pretty-easy-data-types';
import { default as dateString } from 'pretty-easy-date-check';

import CustomDate from './customDate';
import {
    dateFromKeyword as getKeywordValue,
    dateFromPeriod as getPeriodValue,
    trim
 } from './utils';


/**
 * @description
 *  Returns an instance of CustomDate to the caller
 *  or the instance of Error if invalid value is supplied
 *
 * @export
 * @param {(string | Date)} [param]
 * @returns {(CustomDate | Error)}
 */
export default function(param? : string | Date) : CustomDate | Error {
    let customDate  : CustomDate;

    //  No param passed
    if(!param) customDate = new CustomDate(
        Date.now()
    );

    //  Valid parameter
    if(param && (isString(param) || isDate(param))) {

        //  Instance of Date class
        if(isDate(param)) customDate = new CustomDate(
            (param as Date).getTime()
        );

        //  String Date; valid Date class parameter
        if(isString(param) && dateString(param)) customDate = new CustomDate(
            new Date(param as string).getTime()
        );

        //  Keyword
        if(isString(param) && getKeywordValue(trim(param as string))) {
            customDate = new CustomDate(
                getKeywordValue(trim(param as string))
            );
        }

        //  Period
        if(isString(param) && getPeriodValue(trim(param as string))) {
            //  Extract the quantifier
            let quantifier : string = (param as string).replace(/(?!^[\-\+])\D/g, '');
            quantifier = (quantifier === '-' || quantifier === '+') ? `${quantifier}1` : quantifier;

            customDate = new CustomDate(Date.now() + +quantifier * getPeriodValue(trim(param as string)));
        }
    }

    /**
     *  Return a new instance of Custom Date class
     *  if a no or valid parameter is passed
     *  else return a new instance of Error class
     */
    return customDate ? customDate : new Error(`Invalid parameter value supplied -> ${param}`);
}
