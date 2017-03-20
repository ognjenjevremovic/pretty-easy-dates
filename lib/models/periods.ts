//  Keyword constructor
export class Period {
    constructor(
        public main : string,
        public alt  : string[]
    ) { }
}

//  Time constraints
export const hour  : number = 60 * 60 * 1000;
export const day   : number = 24 * hour;
export const week  : number = 7 * day;


//  Periods array
export const periods :  Period[] =[
    new Period('hour', ['hour', 'h']),
    new Period('day',  ['day', 'd']),
    new Period('week', ['week', 'w'])
];
