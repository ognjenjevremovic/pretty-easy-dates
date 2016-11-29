//  Dependancies
var setTime_date    =   require('./setTime');


//  Helpers
var dayPeriod   =   24*60*60*1000,
    now         =   Date.now();


//  Timeframe (number parameter)
function str_timeframe(strParam, date_time) {
    switch (strParam) {
        case 'last week':
        case 'lastWeek':
        case 'lw':
            date_time.lastWeek  =   setTime_date(now - dayPeriod * 7);
            break;
        case 'yesterday':
        case 'ystd':
            date_time.yesterday =   setTime_date(now - dayPeriod);
            break;
        case 'tomorrow':
        case 'tmrw':
            date_time.tomorrow  =   setTime_date(now + dayPeriod);
            break;
        case 'next week':
        case 'nextWeek':
        case 'nw':
            date_time.nextWeek  =   setTime_date(now + dayPeriod * 7);
            break;
        default:
            //  do nothing!
    }
    return date_time;
}

//  Timeframe (string parameter)
function num_timeframe(numParam, date_time) {
    var _date    =   setTime_date(now + dayPeriod * numParam);
    if (numParam < 0) {
        date_time['pastDate_' + numParam*-1]    =   _date;
    }
    if (numParam > 0) {
        date_time['futureDate_' + numParam]  =   _date;
    }

    ////////
    return date_time;
}



//  Module to export
var timeframes  =   {
    number  :   num_timeframe,
    string  :   str_timeframe
};



//  Export the module
module.exports  =   timeframes;
