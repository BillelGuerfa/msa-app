import { Component, OnInit, AfterViewInit,NgZone  } from 'angular2/core';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {PatientService, Patient} from "../services/patient.service";
declare var $;
@Component({
    selector: 'liste-patients',
    templateUrl: 'app/assistante/views/listePatients.component.html'
})

export class ListePatientsComponent implements OnInit, AfterViewInit  {
    patients : Patient[];
    constructor(private _patientService: PatientService, private _ngZone: NgZone) { 
        this.patients = [];
    }

    ngOnInit() {
         
     }
    gotoDossier(id){
        
    }
    gotoFicheAnomalie(id){
        
    }
    ngAfterViewInit(){
         
         this._patientService.getPatients()
                            .subscribe(patients => {
                                this.patients = patients;
                                this._ngZone.run(() => {
                                    setTimeout(function() {
                                        $(document).ready(() => {
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
                                        }).on("loaded.rs.jquery.bootgrid",()=>{
                                            
                                        });
                                        });
                                    }, 1000);
                                });
                                console.log(this.patients);
                            },
                            error => {
                                
                            });
         
        
    }
    
}