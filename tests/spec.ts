//  Tests
import validValues from './valid';
import {
    invalidValues,
    dataTypes as invalidDataTypes
} from './invalid';


//  Test - Invalid data type (Returns an instance Error class)
describe('Invalid parameter data type supplied', invalidDataTypes);

//  Test - Invalid value (Returns an instance Error class)
describe('Invalid parameter value supplied', invalidValues);

//  Test - Valid parameter value (Returns an instance of CustomDate class)
describe('Valid parameter value supplied', validValues);
