import { Component, OnInit } from 'angular2/core';
import {Router, RouteParams} from "angular2/router";
import {DevisService, Devis, LigneDevis} from "../services/devis.service";
import {OrdonanceService, Ordonance} from "../../medecin/medecin.barrel";
@Component({
    selector: 'detail-devis',
    templateUrl: 'app/agentPrestation/views/detailDevis.component.html'
})

export class DetailDevisComponent implements OnInit {
    devis:Devis;
    ordonance: Ordonance;
    constructor(private _router:Router, private _devisService:DevisService, private _ordonanceService:OrdonanceService) { }

    ngOnInit() { 
        if(!this._devisService.selectedDevis.idDevis){
            this._router.navigate(['Devis']);
        }
        this.devis = this._devisService.selectedDevis;
        console.log(this.devis);
        this._devisService.getLigneDevis(this.devis).subscribe(devis => {
            this.devis = devis;
        });
        this._ordonanceService.getOrdonance(this.devis.patient).subscribe(ordonanceSansLignes => {
            ordonanceSansLignes.subscribe(ordonance => {
                this.ordonance = ordonance;
            });
        })
    }
    prixTotalDevis() : number{
        return this._devisService.calculerPrixTotal(this.devis);
    }

}