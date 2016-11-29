//  Pretty function
function pretty(param, timeframe) {
    //  Pretty the date
    if (timeframe === 'date') {
        return prettyDate(param);
    }
    //  Pretty the time
    if (timeframe === 'time') {
        return prettyTime(param);
    }
}

//  Pretty the date
function prettyDate(dateObj) {
    dateObj.month   =   (dateObj.month.length === 1) ? '0' + dateObj.month : dateObj.month;
    dateObj.day     =   (dateObj.day.length === 1)   ? '0' + dateObj.day   : dateObj.day;
    dateObj.month   =   parseInt(dateObj.month);
    dateObj.day     =   parseInt(dateObj.day);

    ////////
    return dateObj;
}

//  Pretty the time
function prettyTime(timeObj) {
    timeObj.hours   =   (timeObj.hours.length === 1)    ? '0' + timeObj.hours   : timeObj.hours;
    timeObj.minutes =   (timeObj.minutes.length === 1)  ? '0' + timeObj.minutes : timeObj.minutes;
    timeObj.seconds =   (timeObj.seconds.length === 1)  ? '0' + timeObj.seconds : timeObj.seconds;
    timeObj.hours   =   parseInt(timeObj.hours);
    timeObj.minutes =   parseInt(timeObj.minutes);
    timeObj.seconds =   parseInt(timeObj.seconds);

    ////////
    return timeObj;
}



//  Export the module
module.exports  =   pretty;
