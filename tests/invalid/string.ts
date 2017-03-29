//  Dependancies
import invalidParam_returnsError from './validate';


//  Random strings
export default function() {
    describe('Invalid string value', () => {

        //  More info
        const info: string = 'from random string value';

        //  Test case I
        invalidParam_returnsError(info, '');
        //  Test case II
        invalidParam_returnsError(info, '   ');
        //  Test case III
        invalidParam_returnsError(info, 'string');
        //  Test case IV
        invalidParam_returnsError(info, 'random string value');
        //  Test case V
        invalidParam_returnsError(info, '03292017');
        //  Test case VI
        invalidParam_returnsError(info, 'some other day');
        //  Test case VII
        invalidParam_returnsError(info, 'long before today');
    });
}