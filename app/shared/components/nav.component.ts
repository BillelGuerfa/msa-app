import { Component, OnInit } from 'angular2/core';
import {NavItemComponent} from "./navItem.component"
import {EmployeService, Employe} from "../../users/services/employe.service";
import {Feature,FeatureService} from "../../users/services/feature.service";
import {AuthService} from "../../users/services/auth.service";
@Component({
    selector: 'appnav',
    templateUrl: 'app/shared/views/nav.component.html',
    
    directives: [NavItemComponent] 
})

export class NavComponent implements OnInit {
    employe: Employe;
    features: Feature[];
    constructor(private _employeService: EmployeService, private _featureService:FeatureService) { }

    ngOnInit() { 
       
    }

}