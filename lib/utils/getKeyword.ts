//  Dependancies
import { keywords as knownKeywords } from '../models';


/**
 * @description
 *  Find the matching keyword's value
 *
 * @param {string} value
 * @returns {boolean}
 */
const stringKeyword = (value : string) : number => {
    for(const keyword of knownKeywords) {
        if(keyword.alt.indexOf(value) > -1) return keyword.value;
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
export default function dateFromKeyword(keyword : string) : number {
    if(keyword !== '') return stringKeyword(keyword);

    return null;
}
