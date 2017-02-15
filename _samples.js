const dates  =  require('./index');
const fs     =  require('fs');
// const Buffer =  require('Buffer');


//  1. Simple use (no parameters passed)
// print(dates());
//  2.  Number (timestamp) parameter passed
// print(dates(10));
// print(dates(-5));
// 3. Array of strings
// print(dates(['lw', 'nextweek', 'next year', 'ToDaY']));
// 4. Array of numbers
// print(dates([1, 8, -16]));
// 5.  Array of strings and numbers
// print(dates(['lAsTYEAr', -34, 'td', 12]));

function print(toPrint) {
    fs.readFile('./samples.txt', function(error, data) {
        if (error && (error.code === 'ENOENT')) {
            return fs.writeFile('./samples.txt', JSON.stringify(toPrint, null, 2));
        }
        if (!error && data) {
            data = data.toString('utf8');
            toPrint = toPrint.toString('utf8');
            return fs.writeFile('./samples.txt', data + toPrint, 'utf8');
        }
        if (error) {
            throw error;
        }
    });
}
