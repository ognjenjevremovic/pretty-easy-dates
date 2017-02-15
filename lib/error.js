//  Dependancy
const errors = require('./errors.json');


function throwError(caused, info, moreInfo) {
  let error = errors[caused].replace('$', info);
  if(moreInfo) error.replace('%', moreInfo);
  throw new Error(error);
}


//  Export the module
module.exports = throwError;
