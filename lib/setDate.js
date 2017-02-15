//  Dependancies
const makeDate = require('./makeDate');
const keywords = require('./keywords');
const throwError = require('./throwError');
const { limits, now } = require('./values');
const { minDate, maxDate, minNum, maxNum } = limits;
const { currentDate } = now;

//  Array of supported keywords
const supportedKeywords = (() => {
  let supportedKeywords = [];
  for (let key in keywords) {
    supportedKeywords.push(...keywords[key]);
  }
  return supportedKeywords;
})();


function setDate(param) {
  'use strict';


  //  Define the date object
  let date;

  switch (param.constructor) {
    case Number:
      param = parseInt(param);
      date =  (param >= minNum && param <= maxNum) ? makeDate(parseInt(param)) : (param < minNum ? 'less than the minimum' : 'greater than the maximum');
      if (date.constructor !== Object) throwError(`number`, date);
      break;
    case Date:
      date =  (param >= minDate && param <= maxDate) ? makeDate(param) : (param < minDate ? `less than the minimum` : `greater than the maximum`);
      if (date.constructor !== Object) throwError(`date`, date);
      break;
    case String:
      param = param.toLowerCase();
      date = (supportedKeywords.includes(param)) ? makeDate(param) : param;
      if (date.constructor !== Object) throwError('string', date);
      break;
    case Array:
      date =  {};
      date.today = makeDate(currentDate);

      for (let value of param) {
        switch (value.constructor) {
          case Number:
            value = parseInt(value);
            if (value >= minNum && value <= maxNum) {
              if(value < 0 ) date[`pastDate_${value}`] =  makeDate(value);
              else if(value > 0) date[`futureDate_${value}`] = makeDate(value);
            }
            else {
              value = (value <= minNum) ? `less than the minimum` : `greater than the maximum`;
              throwError(`number`, value);
            }
            break;
          case String:
            let originalValue = value;
            value = value.toLowerCase().replace(/\s*/g, '');
            if(supportedKeywords.includes(value))
              date[value] =  makeDate(value);
            else
              throwError('string', originalValue);
            break;
          default:
            throwError('array', value.constructor);
        }
      }
      break;
    default:
      throwError('unsupported', param.constructor);
  }

  //  ==> return
  return date;
}


//  Export the module
module.exports =    setDate;
