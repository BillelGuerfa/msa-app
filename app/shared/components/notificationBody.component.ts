import { Component, OnInit, Input } from 'angular2/core';
import {Notification} from "../services/notification.service";
@Component({
    selector: 'notification-body',
    templateUrl: 'app/shared/views/notificationBody.component.html'
})

export class NotificationBodyComponent implements OnInit {
    @Input() notification: Notification; 
    constructor() { }

    ngOnInit() { }

}