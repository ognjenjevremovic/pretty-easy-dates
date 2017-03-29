//  Dependancies
import validParam_returnsObject from './validate';


/**
 * @description
 *  Assertion with the undefined value
 *  Should pass!
 *
 * @export
 */
export default function() : void {
    describe('undefined', () => {

        //  More info
        const info : string = 'from undefined value';

        validParam_returnsObject(info, new Date());
        validParam_returnsObject(info, new Date(), undefined);
    });
}
