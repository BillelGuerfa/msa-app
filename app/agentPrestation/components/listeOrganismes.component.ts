import { Component, OnInit, AfterViewInit,NgZone } from 'angular2/core';
import { OrganismeService, Organisme} from "../services/organisme.service";
declare var $;
@Component({
    selector: 'liste-organismes',
    templateUrl: 'app/agentPrestation/views/listeOrganismes.component.html'
})

export class ListeOrganismesComponent implements OnInit, AfterViewInit  {

    organismes : Organisme[];
    constructor(private _zone:NgZone,private _organismeService: OrganismeService ) { }

    ngOnInit() { 
        
    }
    ngAfterViewInit(){
        this._organismeService.getOrganismes().subscribe(organismes => {
            this.organismes = organismes;
            this._zone.run(()=>{
                setTimeout(() => {
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
                },0);
            
        });
        });
        
    }

}