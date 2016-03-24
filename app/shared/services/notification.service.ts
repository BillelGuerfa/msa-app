import { Injectable } from 'angular2/core';
import {Http} from "angular2/http";
@Injectable()
export class NotificationService {
    notifications: Notification[];
    constructor() { }
    getNotifications(): Notification[] {
        return this.notifications;
    }

}


export interface Notification{
    id_notif: number;
    contenu: number;
    typeNotification: number;
    dateEvenement?: string;
    dateDeclenchement: string;
}