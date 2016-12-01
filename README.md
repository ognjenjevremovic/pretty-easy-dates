# **pretty-easy**

### **pretty-easy** is a pack (bundle) of NodeJS modules for common tasks, such as:
  - getting the **dates** [ [**Git repository**](https://github.com/ognjenjevremovic/pretty-easy-dates), [**npm module**](https://www.npmjs.com/package/pretty-easy-dates) ],
  - displaying **logs** to the console (*including writing them to files*) [ [**Git repository**](https://github.com/ognjenjevremovic/pretty-easy-logs), [**npm module**](https://www.npmjs.com/package/pretty-easy-logs) ],
  - setting and reading **environment variables** [(***in development***)],
  - **CRUD operations** using MongoDB database collections [(***in development***)],
  - **Crypting and decrypting** the data [(***planned for the later date***)],
  - easily **sending the mails** [(***planned for the later date***)]

&nbsp;

### *What is pretty-easy-dates?*
***pretty-easy-dates*** *is a simple NodeJS module for getting the desired date(s) and (current) time/timestamp in a string, number or JavaScript Date object format*.

### *Why use this module?*
I've created this module, mostly for myself to use, as I often find myself working with timestamps and human readable date formats when creating dynamic content or generating the token for the client side authentication and authorization purposes.
Applying the **DRY** *(don't repeat yourself!)* principle, I've decided to take my often repeated tasks and outline them in a simple module and make them available for everyone that finds themselves in the same situation as I often do, to use.

It's a minimalistic module that is able to serve dates in a string, number or JavaScript Date object format for you to use and store in your database alongside your blogposts, comments, tokens, users - you name it!

### *How to use this module?*
In it's simple use it just returns a JavaScript object notation with following parameters:
  - **timestamp** *< number >*,
  - **dateObj**   *< Date >*,
  - **day**       *< number >* 2 digit,
  - **month**     *< number >* 2 digit,
  - **year**      *< number >* 2 digit

It also includes time properties of a specific date, which includes:
  - **seconds** *< number >* 2 digit,
  - **minutes** *< number >* 2 digit,
  - **hours**   *< number >* 2 digit

There's also shortcut methods for displaying current date and time in string formats (useful for dynamic content, but not so great for *comparison purposes*; i.e. where you'd like to see if a token or a cookie expired or not). These are more *human readable*:
  - **date**,
  - **time**,
  - **now**

&nbsp;

# Install
This is a [NodeJS](http://www.node.js) module available through the [npm](http://npmjs.org) registry. Installation is done using the **npm install** command:
```sh
$ npm install pretty-easy-dates
```

&nbsp;

# Usage
After installing the module (localy in your project directory), in order to use it in your file you first need to require it.
```javascript
var dates = require('pretty-easy-dates');
```

The module returns a function for you to call (with optional parameter to be passed to a function call), which then returns a JavaScript object notation with properties outlined above.

#### dates([parameter])
Optional parameter to be passed can be one of the following:
  - **keyword** (predefined string value),
  - **timestamp** (number),
  - **Array** (of predefined keywords and/or number values),
  - **JavaScript object notation** (with specific key/value pairs)

For more information about the parameters, please refer to the examples below.

&nbsp;

## Examples

### 1. Simple usage (no parameter)
The most simplest use is to call the function returned by the module without supplying the function with any of the defined parameters, which will return the JavaScript object with key/value pairs representing the current date values.
```javascript
var now = dates();
```

The object returned will return the object with the format:
```sh
  timestamp: 1480343286502,
  dateObj: Mon Nov 28 2016 15:28:06 GMT+0100 (Central Europe Standard Time),
  year: 2016,
  month: 11,
  day: 28,
  hours: 15,
  minutes: 28,
  seconds: 06,
  date: 28.11.2016,
  time: 15:28:06,
  now: Date: 28.11.2016 - Time: 15:28:06
```
* The values will represent the current date if no parameters are passed!*.

### 2. Simple usage (string or number parameter)
If you'd like to get the same object output, but with the different values (representing the certain date and time in the past or in the future) you'll need to supply the function with the parameter in a JavaScript Date or timestamp format.
```javascript
var pastDate = 1463408291376,  // 16th of May 2016 16:18h
    now = dates(pastDate);
```
*Important:*
There's a limit of a maximum number of days in the past and future that you can traverse (this is mostly set due to "**why not** *reason*", as I assume no one is a time traveler here, right?).
The boundaries are set to 10 years in both directions; 10 years in back in time and 10 years to the *future*.

### 3. Array parameter supplied
If you'd like to get multiple outcomes for past or future dates, as well as the current date and time you can provide an array of values:
```javascript
var timeframes = ['last week', 'tomorrow'],
    times = dates(timeframes);
```

Which will result in an output:
```sh
today:
   { timestamp: 1480343889682,
     dateObj: Mon Nov 28 2016 15:38:09 GMT+0100 (Central Europe Standard Time),
     year: 2016,
     month: 11,
     day: 28,
     hours: 15,
     minutes: 38,
     seconds: 09,
     date: 28.11.2016,
     time: 15:38:09,
     now: 'Date: 28.11.2016 - Time: 15:38:09' },
lastWeek:
   { timestamp: 1479739089682,
     dateObj: Mon Nov 21 2016 15:38:09 GMT+0100 (Central Europe Standard Time),
     year: 2016,
     month: 11,
     day: 21,
     date: 21.11.2016 },
tomorrow:
   { timestamp: 1480430289682,
     dateObj: Tue Nov 29 2016 15:38:09 GMT+0100 (Central Europe Standard Time),
     year: 2016,
     month: 11,
     day: 29,
     date: '29.11.2016' }
```

The array parameter accepts the string and number values (number values can be negative or positive values, depending if you're traversing through time in the past or future directions *wink wink*).

There are predefined keywords that could be used, for a easy of use:
  - *last week* **||** *lastWeek* **||** *lw* - which returns the current date - 7 days
  - *yesterday* **||** *yst* - which return the current date - 24h
  - *tomorrow* **||** *tmrw* - which return the current date + 24h
  - *next week* **||** *nextWeek* **||** *nw* - which return the current date + 7 days

You could also supply number values to the array (both positive and negative values).
  - positive number values define the number of days (in the future) from the current date and will result in the value of **futureDate_x** key (where *x* is the number of days in the future),
  - negative number values define the number of days (in the past) from the current date and will result in the value of **pastDate_x** key (where *x* is the number of days in the past)

```javascript
var timeframes = [-22, -11, 16],
    times = dates(timeframes);
```

Which will result in an output:
```sh
today:
   { timestamp: 1480410829328,
     dateObj: Tue Nov 29 2016 10:13:49 GMT+0100 (Central Europe Standard Time),
     year: 2016,
     month: 11,
     day: 29,
     hours: 10,
     minutes: 13,
     seconds: 49,
     date: '29.11.2016',
     time: '10:13:49',
     now: 'Date: 29.11.2016 - Time: 10:13:49' },
  pastDate_22:
   { timestamp: 1478510029328,
     dateObj: Mon Nov 07 2016 10:13:49 GMT+0100 (Central Europe Standard Time),
     year: 2016,
     month: 11,
     day: 7,
     date: '7.11.2016' },
  pastDate_11:
   { timestamp: 1479460429328,
     dateObj: Fri Nov 18 2016 10:13:49 GMT+0100 (Central Europe Standard Time),
     year: 2016,
     month: 11,
     day: 18,
     date: '18.11.2016' },
  futureDate_16:
   { timestamp: 1481793229328,
     dateObj: Thu Dec 15 2016 10:13:49 GMT+0100 (Central Europe Standard Time),
     year: 2016,
     month: 12,
     day: 15,
     date: '15.12.2016' }
```

### 4. Object parameter supplied
Providing JavaScript object notation as an optional parameter has the same outcome as an array, with a few limitations.
The key value pairs you provide must follow a certain pattern.
Keys must be one of the predefined keywords and the value needs to be truthy *(it has the same output no matter if you provide a string with certain characters, number greater than 0 or a boolean value **true**)*.

```javascript
var timeframes = {
        yesterday : true,
        nextWeek  : true
    },
    times = dates(timeframes);
```

Which will result in an output:
```sh
today:                                                                                
   { timestamp: 1480411200263,                                                          
     dateObj: Tue Nov 29 2016 10:20:00 GMT+0100 (Central Europe Standard Time),         
     year: 2016,                                                                      
     month: 11,                                                                         
     day: 29,                                                                           
     hours: 10,                                                                         
     minutes: 20,                                                                       
     seconds: 0,                                                                        
     date: '29.11.2016',                                                                
     time: '10:20:0',                                                                   
     now: 'Date: 29.11.2016 - Time: 10:20:0' },                                         
  yesterday:                                                                            
   { timestamp: 1480324800263,                                                          
     dateObj: Mon Nov 28 2016 10:20:00 GMT+0100 (Central Europe Standard Time),         
     year: 2016,                                                                      
     month: 11,                                                                         
     day: 28,                                                                           
     date: '28.11.2016' },                                                              
  nextWeek:                                                                             
   { timestamp: 1481016000263,                                                          
     dateObj: Tue Dec 06 2016 10:20:00 GMT+0100 (Central Europe Standard Time),         
     year: 2016,                                                                      
     month: 12,                                                                         
     day: 6,                                                                            
     date: '6.12.2016' }                                                              
```

Another usage of JavaScript object notation, as parameter, is to define **includes** property that has an array as it's value pair.
This has the same outcome as if you provided an Array of keywords and/or number values (positive or negative) it just looks more *straight forward* then just by providing an array on it's own as a parameter to the function.
```javascript
var timeframe = {
        includes : [-30, 'lw', 2, 'nw']
    },
    now = dates(timeframe);
```

&nbsp;

### Want to contribute?
**Great!**
Anyone can help make this project better - check out the [github](https://github.com/ognjenjevremovic/pretty-easy-dates) repository!

&nbsp;

### License
Copyright (c) 2016 [Ognjen Jevremović](https://github.com/ognjenjevremovic)

Licensed under the [MIT](https://github.com/ognjenjevremovic/pretty-easy-dates/blob/master/LICENSE) License.
