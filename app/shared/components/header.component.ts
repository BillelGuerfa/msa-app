import { Directive ,Component, OnInit , OnChanges,Input} from 'angular2/core';
import {NavComponent} from "./nav.component";
import {NotificationComponent} from "./notification.component";
import {NotificationBodyComponent} from "./notificationBody.component";
import {NotificationService, Notification} from "../services/notification.service";
import {Employe} from "../../users/users.barrel";
import {Observable} from "rxjs/Observable";
@Component({
    selector: 'app-header',
    templateUrl: 'app/shared/views/header.component.html',
    directives: [NavComponent, NotificationComponent, NotificationBodyComponent] 
})
export class HeaderComponent implements OnInit, OnChanges {
    notifications: Notification[];
    @Input() employe:Employe;
    constructor(private _notificationService:NotificationService) {

     }

    ngOnChanges(changes: any){
        this.employe = changes.employe.currentValue;
        if(this.employe){
            this._notificationService.getNotifications(this.employe.idEmploye).subscribe(notifications=>{
                this.notifications = notifications;
            });
        }
        
    }
    ngOnInit() {
        
     }

}
