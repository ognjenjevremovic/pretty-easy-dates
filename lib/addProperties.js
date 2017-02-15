//  Add additional properties
function extendDate(date) {
    'use strict';

    if (date.hasOwnProperty('now')) {
        for (let period in date) {
            date[period] =  addDateProperties(date[period]);
            date[period] =  (period === 'now') ? addTimeProperties(date[period]) : date[period];
        }
    }
    else {
        date =  addDateProperties(date);
        date =  addTimeProperties(date);
    }

    ////////
    return date;
}

//  addValues properties
function addDateProperties(date) {
    date.year  =    date.dateObj.getFullYear();
    date.month =    date.dateObj.getMonth() + 1;
    date.day   =    date.dateObj.getDate();
    //  helper
    date.date = `${round(date.day)}.${round(date.month)}.${date.year}`;

    ////////
    return date;
}

//  addValues properties
function addTimeProperties(time) {
    time.hours   =  time.dateObj.getHours();
    time.minutes =  time.dateObj.getMinutes();
    time.seconds =  time.dateObj.getSeconds();
    //  helpers
    time.time = `${round(time.hours)}:${round(time.minutes)}:${round(time.seconds)}`;
    time.now  = `Date : ${time.date} - Time : ${time.time}`;

    ////////
    return time;
}

function round(num) {
    return (num.toString().length === 1) ? `0${num}` : num;
}


//  Export the module
module.exports  =   extendDate;
