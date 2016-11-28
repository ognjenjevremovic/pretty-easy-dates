var datter  =   require('./index'),
    fs      =   require('fs');

var now         =   Date.now(),
    dayPeriod   =   1000*60*60*24;


//  1. Simple use (no parameters passed)
new Promise(function(resolve) {
    var date    =   datter();

    console.log('\nSimple use - no parameters passed');
    setTimeout(function() {
        // logIt(date);
        printIt(date);
        return resolve('Test passed!');
    }, 2000);
//  2.  Timestamp parameter passed
}).then(function(passed) {
    console.log(passed);
    return new Promise(promise_cb);

    function promise_cb(resolve) {
        var timeframe   =   now + (dayPeriod * -5),     // 5 days ago
            date        =   datter(timeframe);

        console.log('\nNumber (timestamp parameter) passed');
        setTimeout(function() {
            // logIt(date);
            printIt(date);
            return resolve('Test passed!');
        }, 2000);
    }
//  3. Array of strings
}).then(function(passed) {
    console.log(passed);
    return new Promise(promise_cb);

    function promise_cb(resolve) {
        var timeframes  =   [
            'lw',
            'ystd',
            'tomorrow',
            'next week'
        ],
            date    =   datter(timeframes);

        console.log('\nArray (of strings) passed');
        setTimeout(function() {
            printIt(date);
            for (var prop in date) {
                // logIt(date[prop]);
            }
            return resolve('Test passed!');
        }, 2000);
    }
//  4. Array of numbers
}).then(function(passed) {
    console.log(passed);
    return new Promise(promise_cb);

    function promise_cb(resolve) {
        var timeframes  =   [
            -12,
            -5,
            3,
            10
        ],
            date    =   datter(timeframes);

        console.log('\nArray (of numbers) passed');
        setTimeout(function() {
            printIt(date);
            for (var prop in date) {
                // logIt(date[prop]);
            }
            return resolve('Test passed!');
        }, 2000);
    }
//  5.  JavaScript object notation (with includes propertie === instanceof Array)
}).then(function(passed) {
    console.log(passed);
    return new Promise(promise_cb);

    function promise_cb(resolve) {
        var timeframes  =   {
            includes    :   [
                -10,
                'yesterday',
                3
            ]
        },
            date    =   datter(timeframes);

        console.log('\nJavaScript object notation passed with includes propertie (that accepts array of strings || numbers)');
        setTimeout(function() {
            printIt(date);
            for (var prop in date) {
                // logIt(date[prop]);
            }
            return resolve('Test passed!');
        }, 2000);
    }
//  6.  JavaScript object notation (with properties)
}).then(function(passed) {
    console.log(passed);
    return new Promise(promise_cb);

    function promise_cb(resolve) {
        var timeframes  =   {
            lastWeek    :   true,
            tomorrow    :   true
        },
            date    =   datter(timeframes);

        console.log('\nJavaScript object notation passed with timeframe properties (that accepts boolean)');
        setTimeout(function() {
            printIt(date);
            for (var prop in date) {
                // logIt(date[prop]);
            }
            return resolve('Test passed!');
        }, 2000);
    }
}).then(function(passed) {
    console.log(passed);
    console.log('\nTest over!\nFull test coverage can be found in \'' + __dirname + '\\.testCoverage.txt\' file.');
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
    fs.readFile('./.testCoverage.txt', function(err, data) {
        if (err && err.code === 'ENOENT') {
            return fs.writeFile('./.testCoverage.txt', (output + '\n\n'));
        }
        return fs.writeFile('./.testCoverage.txt', (data + output + '\n\n'));
    });
}
//  console output
function _output(prop, value) {
    return (prop + ' => ' + value + '\n');
}
