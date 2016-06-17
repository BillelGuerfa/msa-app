import { Component, OnInit, Input,NgZone } from 'angular2/core';

declare var $;
@Component({
    selector: 'notification',
    templateUrl: 'app/shared/views/notification.component.html'
})

export class NotificationComponent implements OnInit {
    @Input() type: String;
    @Input() contenu: String;
    @Input() id_notif: String;
    constructor(private _zone:NgZone) { }

    ngOnInit() { }
    showModal(){
        $("#"+this.id_notif).modal();
    }
}