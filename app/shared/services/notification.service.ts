import { Injectable } from 'angular2/core';
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import{ EmployeService, Employe} from "../../users/users.barrel";
import "rxjs/Rx";
import {config} from "../../app.config";
@Injectable()
export class NotificationService {
    notifications: Notification[];
    constructor(private _http:Http, private _employeService:EmployeService) { }
    getNotifications(idEmploye): Observable<Notification[]> {
        return this._http.get(config.urls.users.notifications+"?idEmploye="+idEmploye).map( notifications => {
                return notifications.json();
        }).catch(this.handleErrors);
    }
    handleErrors(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

}


export interface Notification{
    id_notif: number;
    contenu: number;
    typeNotification: number;
    dateEvenement?: string;
    dateDeclenchement: string;
}