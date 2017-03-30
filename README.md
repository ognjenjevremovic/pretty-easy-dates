# pretty-easy-dates

&nbsp;

[![NPM Version][npm-image]][npm-url]
[![Build Status - Travis CI][travis-image]][travis-url]
[![Build Status - Appveyor][appveyor-image]][appveyor-url]
[![Tests][tests-image]][travis-url]
[![Dependancies][dependancy-image]][dependancy-url]

### *What is pretty-easy-dates?*
***pretty-easy-dates*** *is a simple NodeJS module for getting the desired date and time/timestamp values in a hash (JavaScript object notation like format)*.

&nbsp;

# Install
This is a [NodeJS](http://www.node.js) module available through the [npm](http://npmjs.org) registry. Installation is done using the **npm install** command:
```sh
$ npm install pretty-easy-dates --save
```
***--save*** *flag is used to save the module as a project dependancy in your package.json file.*

&nbsp;

# Usage
After installing the module (localy in your project directory), in order to use it in your file you first need to require it.
```javascript
let prettyDate = require('pretty-easy-dates');
```
&nbsp;

or if you use TypeScript
```typescript
import { default as prettyDate } from 'pretty-easy-dates';
```
&nbsp;

The module returns a function for you to call and supply it with a parameter that represents the desired date (as a String or instance of Date class data type) you'd like to be transformed in a JavaScript hash (or an instance of Error class if the invalid Date value was passed).
&nbsp;

#### ***Important :***
 * if a parameter passed is a string, it needs to be a valid representantion of a date; something in the line of :
   * '3.29.17',
   * '03.29.2017',
   * 'Mar 29 2017',
   * 'March 29 2017',
   * 'Wed Mar 29 2017',
   * 'Wed Mar 29 2017 15:33:51 GMT+0200 (CEST)'
&nbsp;
 * you can use one of the following symbols, as a MM DD YYYY separator:
   * **.** *(dot)*,
   * **,** *(comma)*,
   *  *(blank space)*,
   * **/** *(slash)*,
   * **-** *(dash)*,
   * **_** *(underscore)*
&nbsp;
 * month and date values can be passed as either one or two digit notation, whereas year value must be a four digit notation.

&nbsp;

## Examples

### Convert Date to JavaScript hash
```javascript
prettyDate(new Date());     //  from instance of Date class
prettyDate('03.29.2017.');  //  from String representation of date
```
&nbsp;

#### The module returns the hash with the following properties
```sh
{
  timestamp: 1490796199450,                     # timestamp (Number)
  dateObj: 2017-03-29T14:03:19.450Z,            # instance of Date class
  year: '2017',                                 # year      (String)
  month: '03',                                  # month     (String)
  day: '29',                                    # day       (String)
  hours: '16',                                  # hours     (String)
  minutes: '03',                                # minutes   (String)
  seconds: '19',                                # seconds   (String)
  date: '03.29.2017',                           # date      (String)
  time: '16:03:19',                             # time      (String)
  now: 'Date : 03.29.2017 - Time 16:03:19'      # now       (String) 
}
```

&nbsp;

### Consider the following
The module will return an instance of an Error class, if argument passed is not a valid date value, instead of throwing an error and terminating the Node process thus making it more dynamic and usable in production.

Having this in mind, I advise you to consider including a utility library to check the output data type, such as [pretty-easy-data-types](https://www.npmjs.com/package/pretty-easy-data-types).

```javascript
/*
*   Only import the checks you will be using,
*   instead of including the whole library
*/
const { 
    isError         //  check for instance of Error class
} = require('pretty-easy-data-types');
const prettyDate  = require('pretty-easy-dates');


//  You can pass any value/data type to a function
//  without causing your process to break
const isThisValidDate = prettyDate('this is not a valid date value!');

/*
*   After converting the date to its' corresponding hash
*   you should perform the check on the value returned to see
*   if the conversion was successful.
*
*   If the value returned is of type Object the conversion was successful
*   and in this example we're going to extract the date and time from it
*   else it is an instance of an Error class and we're just going to get it's message
*/
const dateAndTime = !isError(isThisValidDate) ? isThisValidDate.now : isThisValidDate.message;
```

&nbsp;

## Releases
The module follows the Semantic Versioning standard to communicate what kinds of changes are introduced in the new releases.

### Versioning
*Patch releases* : n.n.**X** -> Bug fixes, documentation updates, code cleanups, new test cases, optimization stuff and other minor changes that you should probably not be aware of;
&nbsp;

*Minor releases* : n.**X**.n -> New feature(s) which don't break the existing ones. These ofter refer to minor TypeScript API changes (mainly due to declarations; JavaScript code will not be affected by these changes), code refactoring, some under the sheet changes that you should not worry about too much;
&nbsp;

*Major releases* : **X**.n.n -> Changes that could *possibly* introduce the backwards compatibility issues. These are however very ***rare*** and could be relevant to you only in the case of an endpoint API change and the way you communicate with the module.

&nbsp;

## Changelogs

&nbsp;
**03/30** - *v1.0.1*
 * Documentation updates

**03/30** - *v1.0.0*
 * Initial release

&nbsp;

### Want to contribute?
**Great!**
Anyone can help make this project better - check out the [github](https://github.com/ognjenjevremovic/pretty-easy-dates) repository!

### Found a bug?
Please open a an [issue](https://github.com/ognjenjevremovic/pretty-easy-dates/issues).

### License
Copyright (c) 2017 [Ognjen Jevremović](https://github.com/ognjenjevremovic)

Licensed under the [MIT](https://github.com/ognjenjevremovic/pretty-easy-dates/blob/master/LICENSE) License.

[npm-image]: https://img.shields.io/npm/v/pretty-easy-dates.svg
[npm-url]: https://npmjs.org/package/pretty-easy-dates
[travis-image]: https://img.shields.io/travis/ognjenjevremovic/pretty-easy-dates/master.svg
[travis-url]: https://travis-ci.org/ognjenjevremovic/pretty-easy-dates
[appveyor-image]: https://ci.appveyor.com/api/projects/status/f1qc8vohax2in5m2?svg=true
[appveyor-url]: https://ci.appveyor.com/project/ognjenjevremovic/pretty-easy-dates
[tests-image]: https://img.shields.io/badge/test-passing-green.svg
[dependancy-image]: https://david-dm.org/ognjenjevremovic/pretty-easy-dates/status.svg
[dependancy-url]: https://david-dm.org/ognjenjevremovic/pretty-easy-dates
