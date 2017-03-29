/**
 * @description
 *  Custom date class object
 *  instance of the class is the
 *  return value of the module
 *
 * @export
 * @class CustomDate
 */
export default class CustomDate {
    timestamp: number;
    dateObj: Date;
    year: string;
    month: string;
    day: string;
    hours: string;
    minutes: string;
    seconds: string;
    date: string;
    time: string;
    now: string;
    constructor(param?: number);
}
