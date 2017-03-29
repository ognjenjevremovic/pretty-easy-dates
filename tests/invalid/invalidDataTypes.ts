//  Dependancies
import invalidParam_returnsError from './validate';


//  null
export function nullValue() {
    describe('null value', () => {
        invalidParam_returnsError('from null value', null);
    });
}

//  boolean
export function booleanValue() {
    describe('boolean value', () => {
        invalidParam_returnsError('from boolean value', true);
        invalidParam_returnsError('from boolean balue', false);
    });
}

//  number
export function numberValue() {
    describe('number value', () => {
        invalidParam_returnsError('from number value', -30);
        invalidParam_returnsError('from number value', -.75);
        invalidParam_returnsError('from number value', -0.5);
        invalidParam_returnsError('from number value', 0);
        invalidParam_returnsError('from number value', .75);
        invalidParam_returnsError('from number value', 0.99);
        invalidParam_returnsError('from number value', 25);
    });
}

//  function
export function functionValue() {
    describe('Function', () => {
        invalidParam_returnsError('from function', () => { });
        invalidParam_returnsError('from function', () => true);
        invalidParam_returnsError('from function', () => 'this is a function');
    });
}

//  instance of Error class
export function errorObjectValue() {
    describe('instance of Error class', () => {
        invalidParam_returnsError('from Error object', new Error('invalid value'));
    });
}

//  Array
export function arrayValue() {
    describe('Array', () => {
        invalidParam_returnsError('from Array', []);
        invalidParam_returnsError('from Array', [new Date(), new Date(Date.now() + 1000*60*60*24*7)]);
        invalidParam_returnsError('from Array', ['lw', 'tomorrow']);
    });
}

//  Object
export function objectValue() {
    describe('Object', () => {
        invalidParam_returnsError('from Object', { });
        invalidParam_returnsError('from Object', { red: 'ff', green:  0, blue:   0 });
        invalidParam_returnsError('from Object', { red:   45, green: 79, blue: 'CC'});
    });
}
