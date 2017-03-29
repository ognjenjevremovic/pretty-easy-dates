//  Dependancies
import validParam_returnsObject from './validate';


/**
 * @description
 *  Assertion with the keyword values
 *  Should pass!
 *
 * @export
 */
export default function() {
    describe('Registered keywords', () => {

        //  More info
        const info : string = 'from registered keyword';
        const date : number = new Date().getTime();

        //  Periods
        const hour  : number = 1000 * 60 * 60;
        const day   : number = hour * 24;
        const week  : number = day * 7;

        //  Test case I
        validParam_returnsObject(
            info, new Date(date - week),
            'last week'
        );
        //  Test case II
        validParam_returnsObject(
            info, new Date(date - week),
            'lw'
        );
        //  Test case III
        validParam_returnsObject(
            info, new Date(date - day),
            'past day'
        );
        //  Test case IV
        validParam_returnsObject(
            info, new Date(date - day),
            'pd'
        );
        //  Test case V
        validParam_returnsObject(
            info, new Date(date - day),
            'yesterday'
        );
        //  Test case VI
        validParam_returnsObject(
            info, new Date(date),
            'today'
        );
        //  Test case VII
        validParam_returnsObject(
            info, new Date(date),
            'now'
        );
        //  Test case VIII
        validParam_returnsObject(
            info, new Date(date + day),
            'tmrw'
        );
        //  Test case IX
        validParam_returnsObject(
            info, new Date(date + day),
            'future day'
        );
        //  Test case X
        validParam_returnsObject(
            info, new Date(date + week),
            'next week'
        );
        //  Test case XI
        validParam_returnsObject(
            info, new Date(date + week),
            'nw'
        );
    });
}
