//  Dependancies
import validParam_returnsObject from './validate';


/**
 * @description
 *  Assertion with the period values
 *  Should pass!
 *
 * @export
 */
export default function() {
    describe('Registered periods ', () => {

        //  More info
        const info : string = 'from registered period';
        const date : number = new Date().getTime();

        //  Periods
        const hour  : number = 1000 * 60 * 60;
        const day   : number = hour * 24;
        const week  : number = day * 7;

        //  Test case I
        validParam_returnsObject(
            info, new Date(date - 4 * week),
            '-4weeks'
        );
        //  Test case II
        validParam_returnsObject(
            info, new Date(date - 2 * week),
            '-2 weeks'
        );
        //  Test case III
        validParam_returnsObject(
            info, new Date(date - week),
            '-week'
        );
        //  Test case IV
        validParam_returnsObject(
            info, new Date(date + week),
            '+week'
        );
        //  Test case V
        validParam_returnsObject(
            info, new Date(date + 3 * week),
            '+3week'
        );
        //  Test case VI
        validParam_returnsObject(
            info, new Date(date + 6 * week),
            '6 week'
        );
        //  Test case VII
        validParam_returnsObject(
            info, new Date(date - 4 * day),
            '-4days'
        );
        //  Test case VIII
        validParam_returnsObject(
            info, new Date(date - 2 * day),
            '-2 days'
        );
        //  Test case IX
        validParam_returnsObject(
            info, new Date(date - day),
            '-day'
        );
        //  Test case X
        validParam_returnsObject(
            info, new Date(date + day),
            '+day'
        );
        //  Test case XI
        validParam_returnsObject(
            info, new Date(date + 3 * day),
            '+3day'
        );
        //  Test case XII
        validParam_returnsObject(
            info, new Date(date + 6 * day),
            '+6 day'
        );
        //  Test case XIII
        validParam_returnsObject(
            info, new Date(date - 4 * hour),
            '-4hours'
        );
        //  Test case XIV
        validParam_returnsObject(
            info, new Date(date - 2 * hour),
            '-2 hours'
        );
        //  Test case XV
        validParam_returnsObject(
            info, new Date(date - hour),
            '-hour'
        );
        //  Test case XVI
        validParam_returnsObject(
            info, new Date(date + hour),
            '+hour'
        );
        //  Test case XVII
        validParam_returnsObject(
            info, new Date(date + 3 * hour),
            '+3hour'
        );
        //  Test case XVIII
        validParam_returnsObject(
            info, new Date(date + 6 * hour),
            '+6 hour'
        );
    });
}
