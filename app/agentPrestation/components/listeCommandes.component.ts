import { Component, OnInit, AfterViewInit,NgZone} from 'angular2/core';
import {Router } from "angular2/router";
import {Commande, CommandeService} from "../services/commande.service";
import {DevisService} from "../services/devis.service";
declare var $;
@Component({
    selector: 'liste-commandes',
    templateUrl: 'app/agentPrestation/views/listeCommandes.component.html'
})
export class ListeCommandesComponent implements OnInit, AfterViewInit  {
    commandes: Commande[];
    selectedCommande: Commande;
    constructor(private _zone:NgZone, private _router:Router, private _commandesService: CommandeService,private _devisService:DevisService) { }

    selectCommande = (idCommande) => {
        this.selectedCommande = this.commandes.filter((commande) => commande.idCommande === idCommande)[0];
        this._commandesService.selectedCommande = this.selectedCommande;
    }
    ngOnInit() { }
    ngAfterViewInit(){
        this._commandesService.getCommandes().subscribe(commandes => {
            this.commandes = commandes;
            this._zone.run(()=>{
                setTimeout(()=>{
                        $(".data-table-selection").bootgrid({
                        css: {
                            icon: 'zmdi icon',
                            iconColumns: 'zmdi-view-module',
                            iconDown: 'zmdi-expand-more',
                            iconRefresh: 'zmdi-refresh',
                            iconUp: 'zmdi-expand-less'
                        },
                        selection: true,
                        rowSelect: true,
                        keepSelection: true
                    }).on("selected.rs.jquery.bootgrid", (e, rows) =>
                        {
                            //TODO: Select event here
                            this.selectCommande(rows[0].id);
                            this._router.navigate(["DetailCommande"]);
                            
                    });
                },0);
                
            });
        });
        
    }
}