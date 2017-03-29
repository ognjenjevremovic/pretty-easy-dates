/**
 * @description
 *  Removes the non word characters/numbers
 *  from the parameter passed, but preserve the first
 *  dash (as it indicates the negation)
 *
 * @param {string} param
 * @returns {string}
 */
export const trim = (param : string) : string => param.toLocaleLowerCase().replace(/(?!^[-+])[-._,\/\\\s]+/g, '');


/**
 * @description
 *  Removes the digits, plus and minus signs
 *  as well as letter 's' for plurals
 *
 * @param {string} param
 * @returns {string}
 */
export const getValue = (param : string) => param.replace(/[\ds+-]/g, '');
