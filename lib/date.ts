/**
 * @description This is the value that user gets back
 *
 * @class CustomDate
 */
export class CustomDate {
    timestamp   : number;
    dateObj     : Date;
    year        : number;
    month       : number;
    day         : number;
    hours       : number;
    minutes     : number;
    seconds     : number;
    date        : string;
    time        : string;
    now?        : string;

    constructor(param?: number) {
        const date  : Date | boolean = (param) ? new Date(param) : false;
        const now   : Date = new Date();

        this.timestamp  = (date) ? param : now.getTime();
        this.dateObj    = (date) ? date  : now;
        this.year       = (date) ? date.getFullYear() : now.getFullYear();
        this.month      = (date) ? date.getMonth() + 1 : now.getMonth() + 1;
        this.day        = (date) ? date.getDate() : now.getDate();
        this.hours      = (date) ? date.getHours() : now.getHours();
        this.minutes    = (date) ? date.getMinutes() : now.getMinutes();
        this.seconds    = (date) ? date.getSeconds() : now.getSeconds();
        this.date       = `${this.month}.${this.day}.${this.year}`;
        this.time       = `${this.hours}:${this.minutes}${this.seconds}`;
        this.now        = `Date : ${this.date} - Time ${this.time}`;
    }
}
