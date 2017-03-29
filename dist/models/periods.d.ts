import { Base } from './base';
/**
 * @description
 *  Period Class for defining period keywords
 *
 * @export
 * @class Period
 * @extends {Keyword}
 */
export declare class Period extends Base {
    main: string;
    alt: string[];
    value: number;
    constructor(main: string, alt: string[], value: number);
}
export declare const hourPeriod: Period;
export declare const dayPeriod: Period;
export declare const weekPeriod: Period;
