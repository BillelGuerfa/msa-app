import { Component, OnInit, AfterViewInit,NgZone} from 'angular2/core';
import {Router } from "angular2/router";
import {Commande} from "../services/commande.service";
declare var $;
@Component({
    selector: 'liste-commandes',
    templateUrl: 'app/agentPrestation/views/listeCommandes.component.html'
})
export class ListeCommandesComponent implements OnInit, AfterViewInit  {
    commandes: Commande[];
    constructor(private _zone:NgZone, private _router:Router ) { }

    ngOnInit() { }
    ngAfterViewInit(){
        this._zone.run(()=>{
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
                     this._router.navigate(["DetailCommande"]);
                     
             });
        });
    }
}