/**
 * @description
 *  Removes the non word characters/numbers
 *  from the parameter passed, but preserve the first
 *  dash (as it indicates the negation)
 *
 * @param {string} param
 * @returns {string}
 */
export declare const trim: (param: string) => string;
/**
 * @description
 *  Removes the digits, plus and minus signs
 *  as well as letter 's' for plurals
 *
 * @param {string} param
 * @returns {string}
 */
export declare const getValue: (param: string) => string;
