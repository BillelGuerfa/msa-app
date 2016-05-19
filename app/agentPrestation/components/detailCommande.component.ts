import { Component, OnInit } from 'angular2/core';
import {Router} from "angular2/router";
import {Commande, CommandeService} from "../services/commande.service";
import {Devis, DevisService} from "../services/devis.service";
import {DateService} from "../../shared/shared.barrel";
@Component({
    selector: 'detail-commande',
    templateUrl: 'app/agentPrestation/views/detailCommande.component.html'
})

export class DetailCommandeComponent implements OnInit {
    commande:Commande;
    constructor(private _commmandeService: CommandeService, 
                private _router:Router, 
                private _devisService:DevisService,
                private _dateService:DateService) { }

    ngOnInit() {
        if(!this._commmandeService.selectedCommande){
            this._router.navigate(["Commandes"]);
        }
        else{
            this.commande = this._commmandeService.selectedCommande;
            this._devisService.getLigneDevis(this.commande.devis).subscribe(devis => {
                this.commande.devis = devis;
            });
        }
     }
     displayDate(timestampDate: string) : string{
         return this._dateService.timestampToDate(+timestampDate);
     }

}