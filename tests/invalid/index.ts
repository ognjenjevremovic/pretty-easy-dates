//  Tests
import {
    nullValue,
    booleanValue,
    numberValue,
    functionValue,
    errorObjectValue,
    arrayValue,
    objectValue
} from './invalidDataTypes';
import invalidStringValue from './string';


/**
 * @description
 *  Tests should pass!
 *
 * @export
 */
export function dataTypes() {
    describe('Value passed is of invalid data type', () => {
        nullValue();
        booleanValue();
        numberValue();
        functionValue();
        errorObjectValue();
        arrayValue();
        objectValue();
    });
}

/**
 * @description
 *  Tests should pass!
 *
 * @export
 */
export function invalidValues() {
    describe('Value passed is of invalid value', () => {
        invalidStringValue();
    });
}
