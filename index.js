//  Dependancies
var methods =   require('./helpers'),

    setTime_date        =   methods.setTime_date,
    helpers             =   methods.helpers,
    defineTimeframes    =   methods.defineTimeframes;


//  Construct the object
function setDate(param) {
    "use strict";


    param = param || Date.now();
    var date_time   =   {};

    //  Helpers
    var dayPeriod   =   24*60*60*1000,
        now         =   Date.now(),
            ////////
        minDate     =   new Date(now - (dayPeriod*365*10 + dayPeriod*3)),       //  -10 years from today    (min date)
        maxDate     =   new Date(now + (dayPeriod*365*10 + dayPeriod*2));       //  +10 years from today    (max date)


    /**
    *   Params format:
    *       1.  number (timestamp) format
    *       2.  object
    *           2.1 instanceof Date
    *           2.2 !instanceof Date
    *               2.2.1   !object.includes
    *               2.2.2   object.includes && instanceof Array
    *                   2.2.2.1 === 'last week'     ||  === 'lw'
    *                   2.2.2.2 === 'yesterday'
    *                   2.2.2.3 === 'tomorrow'
    *                   2.2.2.4 === 'next week'     ||  === 'nw'
    *               2.2.3   JavaScript object notation
    *           2.* default
    *       *.  default
    */
    switch (typeof param) {
        //  1. timestamp
        case 'number':
            if ((param > minDate.getTime()) && (param < maxDate.getTime())) {
                date_time   =   setTime_date(param);
            } else {
                date_time   =   setTime_date(now);
            }
            break;
        //  2. object
        case 'object':
            //  2.1 instanceof Date
            if (param instanceof Date) {
                if ((param > minDate) && (param < maxDate)) {
                    date_time   =   setTime_date(param);
                } else {
                    date_time   =   setTime_date(now);
                }
            }
            //  2.2 !Date
            if (!(param instanceof Date)) {
                date_time.today =   setTime_date(now);
                var timeframes;

                //  2.2.1   Array
                if (param instanceof Array) {
                    timeframes  =   param;
                } else {
                //  2.2.2   param.includes instanceof Array
                    if (param.includes && (param.includes instanceof Array)) {
                        timeframes  =   param.includes;
                //  2.2.3   JavaScript object notation
                    } else {
                        timeframes  =   [];
                        //  Itterate over the object
                        for (var prop in param) {
                            timeframes.push(prop);
                        }
                    }
                }
                //  Itterate over the array
                for (var _index = 0; _index < timeframes.length; _index++) {
                    //  String value
                    if (typeof timeframes[_index] === 'string') {
                        date_time   =   defineTimeframes.string(timeframes[_index], date_time);
                    }
                    //  Number value
                    if (typeof timeframes[_index] === 'number') {
                        date_time   =   defineTimeframes.number(timeframes[_index], date_time);
                    }
                }

            }
            break;
        default:
            date_time   =   setTime_date(now);
    }

    // Return the appropriate date and time
    date_time   =   helpers.addValues(date_time);
    date_time   =   helpers.prettify(date_time);
    date_time   =   helpers.addMore(date_time);

    ////////
    return date_time;
}



//  Export the module
module.exports =    setDate;
