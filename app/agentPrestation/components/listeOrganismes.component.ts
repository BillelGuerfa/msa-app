import { Component, OnInit, AfterViewInit,NgZone } from 'angular2/core';
declare var $;
@Component({
    selector: 'liste-organismes',
    templateUrl: 'app/agentPrestation/views/listeOrganismes.component.html'
})

export class ListeOrganismesComponent implements OnInit, AfterViewInit  {
    constructor(private _zone:NgZone ) { }

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