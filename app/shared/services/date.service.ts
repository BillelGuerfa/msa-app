import { Injectable } from 'angular2/core';
declare var moment;
@Injectable()
export class DateService {
    constructor() { }
    timestampToDate(timestamp : number) : string{
        return moment(timestamp).format();
    }
}