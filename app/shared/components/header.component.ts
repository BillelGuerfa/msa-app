import { Component, OnInit } from 'angular2/core';
import {NavComponent} from "./nav.component";
import {NotificationComponent} from "./notification.component";
import {NotificationBodyComponent} from "./notificationBody.component";

@Component({
    selector: 'app-header',
    templateUrl: 'app/shared/views/header.component.html',
    directives: [NavComponent, NotificationComponent, NotificationBodyComponent] 
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}