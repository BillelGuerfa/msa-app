import { Injectable } from 'angular2/core';
import {Http} from "angular2/http";
import {config} from "../../app.config";
@Injectable()
export class NotificationService {
    notifications: Notification[];
    constructor(private _http:Http) { }
    getNotifications(): Notification[] {
        return this._http.get(config.urls.users);
    }

}


export interface Notification{
    id_notif: number;
    contenu: number;
    typeNotification: number;
    dateEvenement?: string;
    dateDeclenchement: string;
}