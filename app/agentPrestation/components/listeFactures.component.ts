import { Component, OnInit, AfterViewInit,NgZone  } from 'angular2/core';
declare var $;
@Component({
    selector: 'liste-factures',
    templateUrl: 'app/agentPrestation/views/listeFactures.component.html'
})

export class ListeFacturesComponent implements OnInit, AfterViewInit  {
    constructor(private _zone:NgZone ) { }

    ngOnInit() { }
    ngAfterViewInit(){
        this._zone.run(() => {
            var grid = $("#data-table-command").bootgrid({
                css: {
                    icon: 'zmdi icon',
                    iconColumns: 'zmdi-view-module',
                    iconDown: 'zmdi-expand-more',
                    iconRefresh: 'zmdi-refresh',
                    iconUp: 'zmdi-expand-less'
                },
                formatters: {
                    "actions": function(column, row) {
                        return "<button title=\"Confirmer\" class=\"btn btn-default btn-icon waves-effect waves-circle \"><i class=\"zmdi zmdi-check\"></i></button>" +
                            "<button title=\"Consulter\" class=\"btn btn-default btn-icon waves-effect waves-circle \"><i class=\"zmdi zmdi-eye\"></i></button>";
                    },
                    "link": function(column, row) {
                        return "<a href=\"#\">" + column.id + ": " + row.id + "</a>";
                    }
                }
            });
        })
    }

}