import CustomDate from './customDate';
/**
 * @description
 *  Returns an instance of CustomDate to the caller
 *  or the instance of Error if invalid value is supplied
 *
 * @export
 * @param {(string | Date)} [param]
 * @returns {(CustomDate | Error)}
 */
export default function (param?: string | Date): CustomDate | Error;
