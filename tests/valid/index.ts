//  Tests
import dateObjectAssertion from './dateObject';
import dateStringAssertion from './dateString';
import keywordAssertion from './keyword';
import periodAssertion from './period';
import undefinedAssertion from './undefined';


/**
 * @description
 *  Tests should pass!
 *
 * @export
 */
export default function() {
    describe('Valid parameter supplied', () => {
        undefinedAssertion();
        dateObjectAssertion();
        dateStringAssertion();
        keywordAssertion();
        periodAssertion();
    });
}
