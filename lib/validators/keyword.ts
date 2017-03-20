//  Dependancies
import { keywords } from '../models/keywords';


/**
 * @description Check to see if the value passed is a known keywords
 *
 * @param {string} value
 * @returns {boolean}
 */
function stringKeyword(value: string): boolean {
    let isKeyword: boolean = false;

    for(const keyword of keywords) {
        if(keyword.alt.includes(value)) isKeyword = true;
        //  break the loop
        if(isKeyword) return true;
    }

    //  Not keyword
    return false;
}


//  Module
export function isKeyword(value: string): boolean {
    if(typeof value === 'string' && value !== '')
        return stringKeyword(value);
    else
        return false;
}
