//  Dependancie
import { Base } from './base';
import {
    weekPeriod,
    dayPeriod,
    hourPeriod
} from './periods';


/**
 * @description
 *  Keyword Class for defining time keywords
 *
 * @export
 * @class Keyword
 * @extends {Base}
 */
export class Keyword extends Base {
    constructor(
        public main  : string,
        public alt   : string[],
        public value : number
    ) {
        super(main, alt, value);
    }
}


//  Keywords array
export const keywords : Keyword[] = [
    //  Past week
    new Keyword(
        'last week',
        [ 'lastweek', 'lweek', 'lw', 'pastweek', 'pweek', 'pw' ],
        Date.now() - weekPeriod.value
    ),
    //  Past day
    new Keyword(
        'yesterday',
        [ 'yesterday', 'yest', 'ystd', 'yd', 'lastday', 'lday', 'ld', 'pastday', 'pday', 'pd' ],
        Date.now() - dayPeriod.value
    ),
    //  Past hour
    new Keyword(
        'past hour',
        [ 'lasthour', 'lhour', 'lh', 'pasthour', 'phour', 'ph' ],
        Date.now() - hourPeriod.value
    ),
    //  Today
    new Keyword(
        'today',
        [ 'today', 'tday', 'td', 'now', 'n' ],
        Date.now()
    ),
    //  Next hour
    new Keyword(
        'next hour',
        [ 'nexthour', 'nhour', 'nh', 'futurehour', 'fhour', 'fh' ],
        Date.now() + hourPeriod.value
    ),
    //  Next day
    new Keyword(
        'tomorrow',
        [ 'tomorrow', 'tmrrw', 'tmrw', 'tr', 'nextday', 'nday', 'nd', 'futureday', 'fday', 'fd' ],
        Date.now() + dayPeriod.value
    ),
    //  Next week
    new Keyword(
        'next week',
        [ 'nextweek', 'nextw', 'nw', 'futureweek', 'fweek', 'fw' ],
        Date.now() + weekPeriod.value
    )
];
