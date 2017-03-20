//  Keyword constructor
export class Keyword {
    constructor(
        public main: string,
        public alt : string[]
    ) { }
}

//  Keywords array
export const keywords: Keyword[] = [
    new Keyword('last week', ['lastweek', 'last-week', 'lweek', 'lw', 'pastweek', 'past-week', 'pweek', 'pw', '-week']),
    new Keyword('yesterday', ['yest', 'ystd', 'yd', 'pastday', 'past-day', 'pday', 'pd', '-day']),
    new Keyword('past hour', ['pasthour', 'past-hour', 'phour', 'ph', 'lasthour', 'last-hour', 'lhour', 'lh', '-hour']),
    new Keyword('today',     ['tday', 'td', 'now', 'n']),
    new Keyword('next hour', ['nexthour', 'next-hour', 'nhour', 'nh', '+hour']),
    new Keyword('tomorrow',  ['tmrrw', 'tmrw', 'tr', 'nextday', 'next-day', 'nday', 'nd', '+day']),
    new Keyword('next week', ['nextweek', 'next-week', 'nextw', 'nw', '+week'])
];
