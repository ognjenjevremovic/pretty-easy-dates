//  Dependancie
import { Base } from './base';


/**
 * @description
 *  Period Class for defining period keywords
 *
 * @export
 * @class Period
 * @extends {Keyword}
 */
export class Period extends Base {
    constructor(
        public main  : string,
        public alt   : string[],
        public value : number
    ) {
        super(main, alt, value);
    }
}

//  Time constraints
const hour  : number = 60 * 60 * 1000;
const day   : number = 24 * hour;
const week  : number = 7 * day;


//  Export periods
export const hourPeriod : Period = new Period('hour', [ 'hour', 'h' ], hour);
export const dayPeriod  : Period = new Period('day',  [ 'day' , 'd' ], day );
export const weekPeriod : Period = new Period('week', [ 'week', 'w' ], week);
