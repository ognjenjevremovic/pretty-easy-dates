//  Set current time
function setTime_date(param) {
    var date_time   =   {};
    //  Check parameter
    if (param) {
        switch (typeof param) {
            //  timestamp provided
            case 'number':
                date_time.timestamp =   param;
                date_time.dateObj   =   new Date(param);
                break;
            //  date object
            case 'object':
                date_time.timestamp =   param.getTime();
                date_time.dateObj   =   param;
                break;
            default:
                date_time   =   _returnDate();
        }
    } else {
        date_time   =   _returnDate();
    }

    ////////
    return date_time;
}

//  Set current time and date
function _returnDate() {
    return {
        timestamp   :   Date.now(),
        dateObj     :   new Date()
    };
}



//  Export the module
module.exports  =   setTime_date;
