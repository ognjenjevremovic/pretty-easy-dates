/**
 * @description
 *  Base Class for definining keywords
 *
 * @export
 * @abstract
 * @class Keyword
 */
export declare abstract class Base {
    protected main: string;
    protected alt: string[];
    protected value: number;
    constructor(main: string, alt: string[], value: number);
}
