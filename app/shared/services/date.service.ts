import { Injectable } from 'angular2/core';
declare var moment;
@Injectable()
export class DateService {
    constructor() { }
    timestampToDate(timestamp : number) : string{
        return moment(timestamp).format("DD/MM/YYYY HH:mm");
    }
    currentTimestamp() : number {
        return +moment().format("x");
    }
    dateToTimestamp(date: string,dateFormat:string) : number{
        return +moment(date,dateFormat).format("x");
    }
}