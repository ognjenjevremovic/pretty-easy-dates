//  Dependancies
import { periods } from '../models/periods';


/**
 * @description Check if the parameter passed is a valid period
 *
 * @param {string} value
 * @returns {boolean}
 */
function stringPeriod(value: string): boolean {

    //  Split the parameter passed
    const passed : string[] = value.toLocaleLowerCase().split(/(\-?\d|\+?\d)/g);

    //  No timeframe passed, only period
    if(value.length === 1 && !passed[0]) return checkPeriod(passed[0]);

    //  Both timeframe and period passed
    return checkPeriod(passed[2]);
}

/**
 * @description Check if the parameter passed is a valid period
 *
 * @param {string} value
 * @returns {boolean}
 */
function checkPeriod(value: string): boolean {
    let isPeriod: boolean = false;

    for(const period of periods) {
        if(period.alt.includes(value)) isPeriod = true;
        //  break the loop
        if(isPeriod) return true;
    }

    //  Not period
    return false;
}


//  Module
export function isPeriod(value: string): boolean {
    if(typeof value === 'string' && value !== '')
        return stringPeriod(value);
    else
        return false;
}
