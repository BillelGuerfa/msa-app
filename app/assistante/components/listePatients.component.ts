import { Component, OnInit, AfterViewInit,NgZone  } from 'angular2/core';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {Patient, PatientService} from "../services/patient.service";
import {EmployeService, Employe} from "../../users/users.barrel";
declare var $;
@Component({
    selector: 'liste-patients',
    templateUrl: 'app/assistante/views/listePatients.component.html'
})

export class ListePatientsComponent implements OnInit, AfterViewInit  {
    patients : Patient[];
    selectedPatient: Patient;
     employe:Employe = null;
    actions = {
        dossierMedical:{
            isActive: true,
            route: ""
        },
        ficheAnomalie:{
            isActive: false,
            route: "FicheAnomalieForm"
        },
        ficheSeance:{
            isActive: false,
            route: "FicheSeance"
        }
        
    }
    constructor(private _patientService: PatientService, private _employeService: EmployeService, private _ngZone: NgZone) { 
        this.patients = [];
    }

    ngOnInit() {
        if(this._employeService.employe){
            this.employe = this._employeService.employe;
            if(this.employe.poste === "ASSISTANTE"){
                this.actions.ficheAnomalie.isActive = true;
            }
            else if(this.employe.poste === "THERAPEUTE"){
                this.actions.ficheSeance.isActive = true;
            }
        }
     }
    selectPatient(id){
        this.selectedPatient = this.patients.filter((patient) => patient.idPatient === id)[0];
    }
    gotoDossier(id){
        
    }
    gotoFicheAnomalie(id){
        
    }
    gotoFicheSeance(id){
        
    }
    ngAfterViewInit(){
         
         this._patientService.getPatients()
                            .subscribe(patients => {
                                this.patients = patients;
                                this._ngZone.run(() => {
                                    setTimeout(() => {
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
                                            multiSelect: false,
                                            rowSelect: true,
                                            keepSelection: true
                                        }).on("selected.rs.jquery.bootgrid", (e, rows) =>
                                                {
                                                    this.selectPatient(rows[0].id);
                                                });
                                        });
                                    }, 1);//Timeout because async and bootgrid intialization
                                });
                            },
                            error => {
                                
                            });
         
        
    }
    
}