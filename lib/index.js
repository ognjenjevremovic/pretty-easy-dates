//  Dependancies
const setDate = require('./setDate');
const addProperties = require('./addProperties');


//  TODO: Construct the object
function defineReturn(param = new Date()) {

  let date;

  date =  setDate(param);
  date =  addProperties(date);

  // ==> return
  return date;
}


//  Export the module
module.exports =    defineReturn;
