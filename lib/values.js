const
//  Initialize the current date && time values
currentDate = new Date(),
currentTimestamp = currentDate.getTime(),
now = { currentDate, currentTimestamp },

//  Timeframes (for performing calculations) - in miliseconds
timeframes = {
  day   : 86400000,
  week  : 604800000,
  month : 2592000000,
  year  : 31104000000
},

//  Boundries - minimum and maximum values for dates and days in the past/future
limits = {
  minDate :   new Date(currentTimestamp - timeframes.year * 10),
  maxDate :   new Date(currentTimestamp + timeframes.year * 10),
  minNum  :   -3650,
  maxNum  :   3650
},

//  Supported keyword periods
periods = {
  lastYear  : new Date(currentTimestamp - timeframes.year),
  lastMonth : new Date(currentTimestamp - timeframes.month),
  lastWeek  : new Date(currentTimestamp - timeframes.week),
  yesterday : new Date(currentTimestamp - timeframes.day),
  today     : currentDate,
  tomorrow  : new Date(currentTimestamp + timeframes.day),
  nextWeek  : new Date(currentTimestamp + timeframes.week),
  nextMonth : new Date(currentTimestamp + timeframes.month),
  nextYear  : new Date(currentTimestamp + timeframes.year),
};

//  Export the module
module.exports =  { now, timeframes, periods, limits };
