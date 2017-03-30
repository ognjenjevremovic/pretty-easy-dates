//  Dependancie
import * as assert from 'assert';

import { default as customDate } from '../..';


//  Should return an Error
const shouldReturnError: string = 'Should return an instance of Error ->';


/**
 * @description
 *  Check if the value returns
 *  a new instance of Error
 *  and does not throw it
 *
 * @param {string} info
 * @param {any} value
 * @returns {*}
 */
export default function invalidParam_returnsError(
    info    : string,
    value?  : any
) : void {
    it(`${shouldReturnError} ${info}`, () => {
        //  Does not throw an error
        assert.doesNotThrow(() => customDate(value) as Error, Error);
        //  But returns an instance of Error class
        assert.deepEqual(() => customDate(value) as Error, new Error('error'));
    });
}
