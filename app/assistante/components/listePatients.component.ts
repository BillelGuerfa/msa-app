import { Component, OnInit, AfterViewInit  } from 'angular2/core';
declare var $;
@Component({
    selector: 'liste-patients',
    templateUrl: 'app/assistante/views/listePatients.component.html'
})

export class ListePatientsComponent implements OnInit, AfterViewInit  {
    constructor() { }

    ngOnInit() { }
    
    ngAfterViewInit(){
         $(document).ready(function() {
            //Selection
            $("#data-table-selection").bootgrid({
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