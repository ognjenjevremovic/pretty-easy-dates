/**
 * @description
 *  Base Class for definining keywords
 *
 * @export
 * @abstract
 * @class Keyword
 */
export abstract class Base {
    constructor(
        protected main  : string,
        protected alt   : string[],
        protected value : number
    ) { }
}
