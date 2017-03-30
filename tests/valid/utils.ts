//  Dependancie
import CustomDate from '../../lib/customDate';


/**
 * @description
 *  Stringifies the number
 *
 * @param {number} value
 * @returns {string}
 */
const stringify = (value : number) : string => value.toString();

/**
 * @description
 *  Transforms the one digit numbers to two digit numbers
 *  by prepending the 0 and stringifies the output
 *
 * @param {number} value
 * @returns {string}
 */
const transform = (value : number) : string => stringify(value).length === 1 ? `0${stringify(value)}` : stringify(value);


/**
 * @description
 *  Transform the Date data value
 *  to the CustomDate class instance lookalike
 *
 * @export
 * @param {Date} value
 * @returns {CustomDate}
 */
export default function(
    value : Date
) : CustomDate {
    const year    = stringify(value.getFullYear());
    const month   = transform(value.getMonth() + 1);
    const day     = transform(value.getDate());
    const hours   = transform(value.getHours());
    const minutes = transform(value.getMinutes());
    const seconds = transform(value.getSeconds());

    return {
        year, month, day,
        hours, minutes, seconds,
        timestamp : value.getTime(),
        dateObj   : value,
        date      : `${month}.${day}.${year}`,
        time      : `${hours}:${minutes}:${seconds}`,
        now       : `Date : ${month}.${day}.${year} - Time ${hours}:${minutes}:${seconds}`
    };
}
