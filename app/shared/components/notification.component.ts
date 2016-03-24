import { Component, OnInit, Input } from 'angular2/core';

@Component({
    selector: 'notification',
    templateUrl: 'app/shared/views/notification.component.html'
})

export class NotificationComponent implements OnInit {
    @Input() type: String;
    @Input() contenu: String;
    
    constructor() { }

    ngOnInit() { }

}