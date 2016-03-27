import { Component, OnInit } from 'angular2/core';
import {NavItemComponent} from "./navItem.component"
import {EmployeService} from "../../users/services/employe.service";
@Component({
    selector: 'appnav',
    templateUrl: 'app/shared/views/nav.component.html',
    
    directives: [NavItemComponent] 
})

export class NavComponent implements OnInit {
    fullname: string = "Billel Guerfa";
    constructor() { }

    ngOnInit() { }

}