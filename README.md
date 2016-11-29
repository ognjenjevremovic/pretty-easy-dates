# **pretty-easy**

### **pretty-easy** is a pack (bundle) of NodeJS modules for common tasks, such as:
  - displaying **dates**
  - **logs** and outputs to the console,
  - setting and reading **environment variables**,
  - **CRUD operations** using MongoDB database collections.

### *What is pretty-easy-dates?*
***pretty-easy-dates** is a simple NodeJS module for getting the desired date(s) and (current) time/timestamp, in a string, number or JavaScript Date object notation like format*.

### *Why use this module?*
I've created this module, mostly for myself to use, as I often find myself working with timestamps and human readable date formats when creating dymanic content or generating the token for the client side authentication and authorazation purposes.
Applying the **DRY** *(don't repeat yourself!)* principle, I've decided to take my often repeated tasks and outline them in a simple module and make them available for everyone, that finds themselves in the same situation as I often do, to use.

It's a minimalistic module that is able to serve dates in a string, number or JavaScript Date object notation format for you to use and store in your database alongside your blogposts, comments, tokens, users - you name it!

### *How to use this module?*
In it's simple use it just returns a JavaScript object notation with following parameters:
  - **timestamp**   *(number)*,
  - **dateObj**     *(instanceof Date)*,
  - **day**         *(2 digit number)*,
  - **month**       *(2 digit number)*,
  - **year**        *(2 digit number)*

It also includes time properties of a specific date, which includes:
  - **seconds** *(2 digit number)*,
  - **minutes** *(2 digit number)*,
  - **hours**   *(2 digit number)*

There's also string value date and time shortcut formats (useful for dynamic content, but not so great for *'comparison purposes'*; i.e. where you'd like to see if a token or a cookie expired or not):
  - **date**,
  - **time**,
  - **now**

# Install
This is a [nodejs.org](http://www.node.js) module available through the [npm](http://npmjs.org) registry. Installation is done using the **npm install** command:
```sh
$ npm install pretty-easy-dates
```

# Usage
After installing the module (localy in your project directory), in order to use it in your file you first need to require it.
```javascript
var dates = require('pretty-easy-dates');
```

The module returns a function for you to call (with optional parameter to be passed to a function call), which then returns a JavaScript object notation with properties outlined above.

##### dates([parameter])
Optional parameter to be passed can be one of the following:
  - one of the predefined keywords (string),
  - timestamp (number),
  - Array (of predefined keywords and/or numbers),
  - JavaScript object notation with certain properties

For more information about the parameters, please refer to the examples below.


## Examples

### 1. Simple usage (no parameter)
The most simplest use is to call the function returned by the module without supplying the function with parameter, which will return the JavaScript object with key value pairs representing the current date values.
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
*\* The values will represent the current date if no parameters are passed!*.

### 2. Simple usage (string or number parameter)
If you'd like to get the object representing the certain date (and time) in the past or in the future you'll need to pass the parameter in a JavaScript Date object or timestamp representation of a date .
```javascript
var pastDate = 1463408291376,  // 16th of May 2016 16:18h
    now = dates(pastDate);
```
*\* Important:*
There's a limit of a maximum number of days in the past and future that you can traverse (this is mostly set due to *why not, reason*, as I assume no one is a timetraveler here, right?) The boundries are set to 10 years in both directions; 10 years in back in time and 10 years to the *future*.

### 3. Array parameter supplied
If you'd like to get multiple outcomes for past or future dates, aswell as the current date and time you can provide an array:
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

The array parameter accepts the string and number values (number values can be negative or positive values, depending if you're traving through time in the past o future *wink wink*).

There are predefined keywords that could be used, for a easy of use:
  - *last week **||** lastWeek **||** lw* - which return the current date - 7 days
  - *yesterday **||** yst* - which return the current date - 24h
  - *tomorrow **||** tmrw* - which return the current date + 24h
  - *next week **||** nextWeek **||** nw - which return the current date + 7 days

You could also supply number parameters (both positive and negative values).
  - positive number values define the number of days (in the future) from the current date and will result in the value of *futureDate_x* key (where x is the number of days in the future),
  - negative number values define the number of days (in the past) from the current date and will result in the value of *pastDate_x* key (where x is the number of days in the past)
  -
```javascript
var timeframes = [-22, -11, 16],
    times = dates(timeframes);
```

Which will result in an output:
```sh
today:
   { timestamp: 1480410829328,
     dateObj: Tue Nov 29 2016 10:13:49 GMT+0100 (Central Europe Standard Time),
     year: '2016',
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
     year: '2016',
     month: 11,
     day: 7,
     date: '7.11.2016' },
  pastDate_11:
   { timestamp: 1479460429328,
     dateObj: Fri Nov 18 2016 10:13:49 GMT+0100 (Central Europe Standard Time),
     year: '2016',
     month: 11,
     day: 18,
     date: '18.11.2016' },
  futureDate_16:
   { timestamp: 1481793229328,
     dateObj: Thu Dec 15 2016 10:13:49 GMT+0100 (Central Europe Standard Time),
     year: '2016',
     month: 12,
     day: 15,
     date: '15.12.2016' }
```

### 4. Object parameter supplied
Providing JavaScript object notation as a optional parameter has the same outcome as an array, with a few limitations.
The key value pairs you provide, must fallow a certain pattern.

Keys must be one of the predefined keywords and the value needs to be truthy (it has the same output no matter if you provide a string with certain characters, number greater than 0 or a boolean value **true**).

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
     year: '2016',                                                                      
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
     year: '2016',                                                                      
     month: 11,                                                                         
     day: 28,                                                                           
     date: '28.11.2016' },                                                              
  nextWeek:                                                                             
   { timestamp: 1481016000263,                                                          
     dateObj: Tue Dec 06 2016 10:20:00 GMT+0100 (Central Europe Standard Time),         
     year: '2016',                                                                      
     month: 12,                                                                         
     day: 6,                                                                            
     date: '6.12.2016' }                                                              
```

Another usage of JavaScript object notation, as parameter, is to include include propertie (*only!*) that has an array as it's value.
Which, of course, has the same outcome as if you provided an Array of keywrods and/or number values (positive or negative).
Just looks more *straight forward* then just by providing an array on it's own.
```javascript
var timeframe = {
        includes : [-30, 'lw', 2, 'nw']
    },
    now = dates(timeframe);
```

### Want to contribute?
**Great!**
Anyone can help make this project better - check out the [github](https://github.com/ognjenjevremovic/pretty-easy-dates) repository!

### License
Copyright (c) 2016 [Ognjen Jevremović](https://github.com/ognjenjevremovic)
Licensed under the [MIT](https://github.com/ognjenjevremovic/pretty-easy-dates/blob/master/LICENSE) License.
