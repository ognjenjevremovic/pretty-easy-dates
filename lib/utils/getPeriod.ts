//  Dependancies
import {
    hourPeriod,
    dayPeriod,
    weekPeriod,
    Period
} from '../models';
import { getValue as getPeriod } from './trim';


//  Known periods
const periods : Period[] = [ hourPeriod, dayPeriod, weekPeriod ];


/**
 * @description
 *  Check if the value is a known period
 *
 * @param {string} value
 * @returns {boolean}
 */
const stringPeriod = (value : string) : number => {
    for(const period of periods) {
        if(period.alt.indexOf(getPeriod(value)) > -1) return period.value;
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
export default function dateFromPeriod(period : string) : number {
    if(period !== '') return stringPeriod(period);

    return null;
}
