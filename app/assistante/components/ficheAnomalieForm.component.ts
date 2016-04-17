import { Component, OnInit } from 'angular2/core';
import {AnomalieService, Anomalie} from "../services/anomalie.service";
@Component({
    selector: 'fiche-anomalie-form',
    templateUrl: 'app/assistante/views/ficheAnomalieForm.component.html'
})

export class FicheAnomalieFormComponent implements OnInit {
    anomalie: Anomalie;
    constructor(private _anomalieService: AnomalieService) {
        
     }
     sendAnomalie(){
         this._anomalieService.sendAnomalie(this.anomalie);
     }
    ngOnInit() { }

}