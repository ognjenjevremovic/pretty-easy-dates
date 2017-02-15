//  Dependancies
const keywords = require('./keywords.json');
const { periods } = require('./values');
const { currentTimestamp } = now;


function makeDate(param) {
  'use strict';

  let timestamp, dateObject;

  switch (param.constructor) {
    case Number:
      dateObject = new Date(currentTimestamp + param * 24 * 60 * 60 * 1000);
      timestamp = dateObject.getTime();
      break;
    case Date:
      dateObject = param;
      timestamp = param.getTime();
      break;
    case String:
      for (let period in keywords) {
        if (keywords[period].includes(param)) {
          dateObject = periods[period];
          timestamp = dateObject.getTime();
          break;
        }
      }
      break;
    default:
      //  handled already!
  }

  //  ==> return
  return { dateObject, timestamp };
}


//  Export the module
module.exports = makeDate;
