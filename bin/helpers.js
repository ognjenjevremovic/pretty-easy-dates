//  Dependancy
var pretty  =   require('./_pretty');


//  Add additional properties
function addValues(date_time) {
    if (date_time.today) {
        for (var timeframe in date_time) {
            date_time[timeframe]    =   _addValues_dateProperties(date_time[timeframe]);
            if (timeframe  === 'today') {
                date_time.today     =   _addValues_timeProperties(date_time.today);
            }
        }
    }
    if (!date_time.today) {
        date_time   =   _addValues_dateProperties(date_time);
        date_time   =   _addValues_timeProperties(date_time);
    }

    ////////
    return date_time;
}

//  Pretty the values
function prettify(date_time) {
    if (date_time.today) {
        for (var timeframe in date_time) {
            date_time[timeframe]    =   pretty(date_time[timeframe], 'date');
            if (timeframe  === 'today') {
                date_time.today     =   pretty(date_time.today, 'time');
            }
        }
    }
    if (!date_time.today) {
        date_time   =   pretty(date_time, 'date');
        date_time   =   pretty(date_time, 'time');
    }

    ////////
    return date_time;
}

//  Add more values
function addMore(date_time) {
    if (date_time.today) {
        for (var timeframe in date_time) {
            date_time[timeframe].date  = date_time[timeframe].day + "." + date_time[timeframe].month + "." + date_time[timeframe].year;
            if (timeframe === 'today') {
                date_time[timeframe].time  = date_time[timeframe].hours + ":" + date_time[timeframe].minutes + ":" + date_time[timeframe].seconds;
                date_time[timeframe].now   = "Date: " + date_time[timeframe].date + " - Time: " + date_time[timeframe].time;
            }
        }
    }
    if (!date_time.today) {
        date_time.date  = date_time.day + "." + date_time.month + "." + date_time.year;
        date_time.time  = date_time.hours + ":" + date_time.minutes + ":" + date_time.seconds;
        date_time.now   = "Date: " + date_time.date + " - Time: " + date_time.time;
    }

    ////////
    return date_time;
}


//  addValues properties
function _addValues_dateProperties(date) {
    date.year      =   (date.dateObj.getFullYear()).toString();
    date.month     =   (date.dateObj.getMonth() + 1).toString();
    date.day       =   (date.dateObj.getDate()).toString();

        ////////
    return date;
}
//  addValues properties
function _addValues_timeProperties(time) {
    time.hours     =   (time.dateObj.getHours()).toString();
    time.minutes   =   (time.dateObj.getMinutes()).toString();
    time.seconds   =   (time.dateObj.getSeconds()).toString();

        ////////
    return time;
}



//  Export the module
module.exports  =   {
    addValues   :   addValues,
    prettify    :   prettify,
    addMore     :   addMore
};
