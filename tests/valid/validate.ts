//  Dependancie
import * as assert from 'assert';

import { default as customDate } from '../..';
import mockIt from './utils';
import CustomDate from '../../dist/customDate';


//  Should return an Instance of CustomDate class
const shouldReturnString: string = 'Should return an Instance of CustomDate class, with the various date value properties ->';


/**
 * @description
 *  Check if the value returned is
 *  an instance of CustomDate class
 *  containing the right properties and values
 *
 * @param {string} info
 * @param {string|Date} value
 * @param {Date} equalityCheck
 * @returns {*}
 */
export default function validParam_returnsObject(
    info    : string,
    equalityCheck : Date,
    value?  : string | Date
) : void {
    const cstDate = customDate(value) as CustomDate;
    const date    = mockIt(equalityCheck);

    it(`${shouldReturnString} ${info}`, () => {
        assert.equal(cstDate.year, date.year);
        assert.equal(cstDate.month, date.month);
        assert.equal(cstDate.day, date.day);
        assert.equal(cstDate.hours, date.hours);
        assert.equal(cstDate.minutes, date.minutes);
        assert.equal(cstDate.seconds, date.seconds);
        assert.equal(cstDate.date, date.date);
        assert.equal(cstDate.time, date.time);
    });
}
