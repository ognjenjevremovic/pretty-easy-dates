import { Base } from './base';
/**
 * @description
 *  Keyword Class for defining time keywords
 *
 * @export
 * @class Keyword
 * @extends {Base}
 */
export declare class Keyword extends Base {
    main: string;
    alt: string[];
    value: number;
    constructor(main: string, alt: string[], value: number);
}
export declare const keywords: Keyword[];
