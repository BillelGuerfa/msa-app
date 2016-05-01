import { Component, OnInit,AfterViewInit , NgZone } from 'angular2/core';
declare var $;
@Component({
    selector: 'historique-visites',
    templateUrl: 'app/therapeute/views/historiqueVisites.component.html'
})
export class HistoriqueVisitesComponent implements OnInit , AfterViewInit{
    constructor(private _zone: NgZone) { }

    ngOnInit() { }
    
    ngAfterViewInit(){
        this._zone.run(() => {
            //Basic Example
            $("#data-table-basic").bootgrid({
                css: {
                    icon: 'zmdi icon',
                    iconColumns: 'zmdi-view-module',
                    iconDown: 'zmdi-expand-more',
                    iconRefresh: 'zmdi-refresh',
                    iconUp: 'zmdi-expand-less'
                },
            });

        })
    }

}