import { Component, OnInit, AfterViewInit,NgZone} from 'angular2/core';
import {Commande} from "../services/commande.service";
declare var $;
@Component({
    selector: 'liste-commandes',
    templateUrl: 'app/agentPrestation/views/listeCommandes.component.html'
})
export class ListeCommandesComponent implements OnInit, AfterViewInit  {
    commandes: Commande[];
    constructor(private _zone:NgZone ) { }

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
                multiSelect: true,
                rowSelect: true,
                keepSelection: true
            });
        });
    }
}