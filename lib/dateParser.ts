import * as validator from './validators';
import { makeDateOfKeyword, makeDateOfPeriod } from './makeDate';
import {
    periods, keywords,
    Keyword, Period
} from './models';


/**
 * @description Determine the keyword passed
 *
 * @param {string} param
 * @returns {Keyword}
 */
function determineKeyword(param: string): Keyword {
    let keyword : Keyword;

    keywords.forEach((_keyword) => {
        if(keyword.alt.includes(param)) return keyword = _keyword;
    });
    if(keyword) return keyword ? keyword : null;
}

/**
 * @description Determine the period passed
 *
 * @param {string} param
 * @returns {Period}
 */
function determinePeriod(param: string): Period {
    let period  : Period;

    periods.map((_period) => {
        if(period.alt.includes(param)) return period = _period;
    });
    if(period) return period ? period : null;
}

export function dateParser(param?: string): number {
    //  is Keyword
    if(validator.isKeyword(param)) {
        const keyword: Keyword = determineKeyword(param);

        return keyword ? makeDateOfKeyword(keyword) : null;
    }

    //  is Period
    if(validator.isPeriod(param)) {
        const decoupled: string[] = param.toLocaleLowerCase().split(/(\-?\d|\+?\d)/g);

        let periodPassed : string;
        let time         : number;

        //  Extract the period and the value
        if(decoupled.length === 1) periodPassed = decoupled[0];
        else {
            periodPassed = decoupled[2];
            time = !isNaN(+decoupled[1]) ? +decoupled[1] : null;
        }

        const period: Period = determinePeriod(periodPassed);

        return period ? makeDateOfPeriod(period, time) : null;
    }
    else return null;
}
