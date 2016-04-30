import { Component, OnInit, AfterViewInit,NgZone } from 'angular2/core';
declare var $;
@Component({
    selector: 'liste-devis',
    templateUrl: 'app/agentPrestation/views/listeDevis.component.html'
})

export class ListeDevisComponent implements OnInit, AfterViewInit  {
    constructor(private _zone:NgZone) { }

    ngOnInit() { }
    ngAfterViewInit(){
        this._zone.run(()=>{
            $("#data-table-selection").bootgrid({
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
            });
        });
    }
}