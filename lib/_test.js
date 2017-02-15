const Logs  =   require('pretty-easy-logs');
const dates =   require('./index');
const info  =   new Logs(1);

let date =  dates(10);
let fromDate =  new Date(date.timestamp);

info(date);
// for (let period in date) {
//     console.log(period);
//     info(date[period]);
// }
