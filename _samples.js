var dates  =   require('./index'),
    fs      =   require('fs'),

    ////////
    now         =   Date.now(),
    dayPeriod   =   1000*60*60*24;


//  1. Simple use (no parameters passed)
new Promise(function(resolve) {
    var date    =   dates();

    console.log('\nSimple use - no parameters supplied example');
    setTimeout(function() {
        logIt(date);
        printIt(date);
        return resolve();
    }, 2000);
//  2.  Number (timestamp) parameter passed
}).then(function() {
    return new Promise(promise_cb);

    function promise_cb(resolve) {
        var timeframe   =   now + (dayPeriod * -5),     // 5 days ago
            date        =   dates(timeframe);

        console.log('\nNumber (timestamp parameter) supplied example');
        setTimeout(function() {
            logIt(date);
            printIt(date);
            return resolve();
        }, 2000);
    }
//  3. Array of strings
}).then(function() {
    return new Promise(promise_cb);

    function promise_cb(resolve) {
        var timeframes  =   [ 'lw', 'tomorrow' ],
            date    =   dates(timeframes);

        console.log('\nArray (of strings) supplied example');
        setTimeout(function() {
            printIt(date);
            for (var prop in date) {
                logIt(date[prop]);
            }
            return resolve();
        }, 2000);
    }
//  4. Array of numbers
}).then(function() {
    return new Promise(promise_cb);

    function promise_cb(resolve) {
        var timeframes  =   [ -12, 3 ],
            date    =   dates(timeframes);

        console.log('\nArray (of numbers) supplied example');
        setTimeout(function() {
            printIt(date);
            for (var prop in date) {
                logIt(date[prop]);
            }
            return resolve();
        }, 2000);
    }
//  5.  JavaScript object notation (with includes propertie === instanceof Array)
}).then(function() {
    return new Promise(promise_cb);

    function promise_cb(resolve) {
        var timeframes  =   {
            includes    :   [ -10, 'yesterday' ]
        },
            date    =   dates(timeframes);

        console.log('\nJavaScript object notation supplied with includes propertie (that accepts array of strings || numbers) example');
        setTimeout(function() {
            printIt(date);
            for (var prop in date) {
                logIt(date[prop]);
            }
            return resolve();
        }, 2000);
    }
//  6.  JavaScript object notation (with properties)
}).then(function() {
    return new Promise(promise_cb);

    function promise_cb(resolve) {
        var timeframes  =   {
            lastWeek    :   true,
            tomorrow    :   true
        },
            date    =   dates(timeframes);

        console.log('\nJavaScript object notation passed with timeframe properties (that accepts boolean)');
        setTimeout(function() {
            printIt(date);
            for (var prop in date) {
                logIt(date[prop]);
            }
            return resolve();
        }, 2000);
    }
}).then(function() {
    console.log('\nFull example coverage can be found in the file \'' + __dirname + '\\.examples.txt\' file.');
});


//  log to the console
function logIt(dateObj) {
    console.log('\n\n\n');
    for (var timeframe in dateObj) {
        console.log(_output(timeframe, dateObj[timeframe]));
    }

}
//  print to file
function printIt(dateObj) {
    var output  =   '';
    console.log('\n');

    for (var timeframe in dateObj) {
        if (typeof dateObj[timeframe] === 'object' && !(dateObj[timeframe] instanceof Date)) {
            for (var _prop in dateObj[timeframe]) {
                output  +=  _output(_prop, dateObj[timeframe][_prop]);
            }
            output  +=  '\n';
        } else {
            output  +=   _output(timeframe, dateObj[timeframe]);
        }
    }
    fs.readFile('./.examples.txt', function(err, data) {
        if (err && err.code === 'ENOENT') {
            return fs.writeFile('./.examples.txt', (output + '\n\n'));
        }
        return fs.writeFile('./.examples.txt', (data + output + '\n\n'));
    });
}
//  console output
function _output(prop, value) {
    return (prop + ' => ' + value + '\n');
}
