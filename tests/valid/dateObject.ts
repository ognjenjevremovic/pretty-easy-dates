//  Dependancies
import validParam_returnsObject from './validate';


/**
 * @description
 *  Assertion with the instance of Date class
 *  Should pass!
 *
 * @export
 */
export default function() : void {
    describe('Date Object ', () => {

        //  More info
        const info : string = 'from instance of Date class';

        //  Test case I
        validParam_returnsObject(
            info, new Date(),
            new Date()
        );
        //  Test case II
        validParam_returnsObject(
            info, new Date('3.29.17'),
            new Date('03/29/17')
        );
        //  Test case III
        validParam_returnsObject(
            info, new Date('10.29.2016'),
            new Date('10/29/2016')
        );
        //  Test case IV
        validParam_returnsObject(
            info, new Date('Tue March 29 2017'),
            new Date('Mar 29 2017')
        );
    });
}
