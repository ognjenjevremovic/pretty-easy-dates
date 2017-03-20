import {
    Keyword, Period,
    week, day, hour
} from './models';

export function makeDateOfKeyword(keyword: Keyword): number {
    switch(keyword.main) {
        case 'last week' : return Date.now() - week;
        case 'yesterday' : return Date.now() - day;
        case 'past hour' : return Date.now() - hour;
        case 'today'     : return Date.now();
        case 'tomorrow'  : return Date.now() + day;
        case 'next hour' : return Date.now() + hour;
        case 'tomorrow'  : return Date.now() + day;
        case 'next week' : return Date.now() + week;
        default:
            return null;
    }
}

export function makeDateOfPeriod(period: Period, time: number): number {
    switch(period.main) {
        case 'hour' : return time ? Date.now() + (time * hour) : Date.now() + hour;
        case 'day'  : return time ? Date.now() + (time * day) : Date.now() + day;
        case 'week' : return time ? Date.now() + (time * week) : Date.now() + week;
        default:
            return null;
    }
}
