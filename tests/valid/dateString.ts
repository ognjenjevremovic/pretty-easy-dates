//  Dependancies
import validParam_returnsObject from './validate';


/**
 * @description
 *  Assertion with the Date string value
 *  Should pass!
 *
 * @export
 */
export default function() : void {
    describe('Date string ', () => {

        //  More info
        const info : string = 'from Date string';
        const date : Date   = new Date('3.29.17.');

        //  Test case I
        validParam_returnsObject(
            info, date,
            '3.29.17.'
        );
        //  Test case II
        validParam_returnsObject(
            info, date,
            '3/29/17'
        );
        //  Test case III
        validParam_returnsObject(
            info, date,
            '3-29-17'
        );
        //  Test case IV
        validParam_returnsObject(
            info, date,
            '03.29.2017.'
        );
        //  Test case V
        validParam_returnsObject(
            info, date,
            '03/29/2017'
        );
        //  Test case VI
        validParam_returnsObject(
            info, date,
            '03-29-2017'
        );
        //  Test case VII
        validParam_returnsObject(
            info, date,
            'Mar 29 17'
        );
        //  Test case VIII
        validParam_returnsObject(
            info, date,
            'March 29 2017'
        );
        //  Test case IX
        validParam_returnsObject(
            info, date,
            'Tue March 29 2017'
        );
        //  Test case X
        validParam_returnsObject(
            info, date,
            date.toString()
        );
    });
}
