import { Component, OnInit, OnChanges ,Input } from 'angular2/core';
import {NavItemComponent} from "./navItem.component"
import {EmployeService, Employe} from "../../users/services/employe.service";
import {Feature,FeatureService} from "../../users/services/feature.service";
import {AuthService} from "../../users/services/auth.service";
@Component({
    selector: 'app-nav',
    templateUrl: 'app/shared/views/nav.component.html',
    
    directives: [NavItemComponent] 
})

export class NavComponent implements OnInit,OnChanges  {
    @Input() employe: Employe;
    features: Feature[];
    constructor(private _featureService:FeatureService) { }
    ngOnChanges(changes: any){
        this.employe = changes.employe.currentValue;
        if(this.employe){
            this.features = this._featureService.getFeatures(this.employe.poste);
        }
        
    }
    ngOnInit() { 
       console.log(this.employe);
       console.log(this.features);
    }

}