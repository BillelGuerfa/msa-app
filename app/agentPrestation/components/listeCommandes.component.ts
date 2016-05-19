import { Component, OnInit, AfterViewInit,NgZone} from 'angular2/core';
import {Router } from "angular2/router";
import {Commande, CommandeService} from "../services/commande.service";
import {Organisme,OrganismeService} from "../services/organisme.service";
import {DevisService, Devis} from "../services/devis.service";
import {Patient,PatientService} from "../../assistante/assistante.barrel";
import {AutocompleteDirective, DateService} from "../../shared/shared.barrel";
import {Observable} from "rxjs/Observable";
declare var $;

declare var moment;
@Component({
    selector: 'liste-commandes',
    templateUrl: 'app/agentPrestation/views/listeCommandes.component.html',
    directives: [AutocompleteDirective]
})
export class ListeCommandesComponent implements OnInit, AfterViewInit  {
    commandes: Commande[];
    organismes: Organisme[];
    selectedOrganisme : Organisme;
    selectedCommande: Commande;
    newCommande: Commande = {};
    patients : Observable<Patient[]>;
    patient: Patient = { nom : "", prenom:""};
    devisPatient :Devis[];
    selectedDevis: Devis;
    constructor(private _zone:NgZone, 
                private _router:Router, 
                private _commandesService: CommandeService, 
                private _devisService:DevisService, 
                private _patientService:PatientService, 
                private _organismeService: OrganismeService,
                private _dateService:DateService) { }

    selectCommande = (idCommande) => {
        this.selectedCommande = this.commandes.filter((commande) => commande.idCommande === idCommande)[0];
        this._commandesService.selectedCommande = this.selectedCommande;
        
    }
    selectPatient = (patient) => {
            this.patient = patient;
            this._devisService.getDevisByIdPatient(this.patient.idPatient).subscribe( devis => {
               this.devisPatient = devis;
               this._zone.run(()=>{
                    setTimeout(()=>{
                            $("#devisTable").bootgrid({
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
                                this.selectDevis(rows[0].id);
                                console.log(this.newCommande.devis);
                        });
                    },0);
                
                });
            });
            //console.log(this.patient);
    }
    selectOrganisme = (organisme) => {
        this.newCommande.organisme = JSON.parse(organisme);
        console.log(this.newCommande.organisme);
    }
    selectDevis = (idDevis) => {
        this.newCommande.devis = this.devisPatient.filter((devis) => devis.idDevis === idDevis)[0];
    }
    stringify(o : Object) : string {
        return JSON.stringify(o);
    }
    createCommande(){
        this.newCommande = {};
        this.newCommande.etat = "En attente de facturation";
        this.newCommande.date = moment().format("x");
        
    }
    displayDate(timestampDate : string) : string{
        return this._dateService.timestampToDate(+timestampDate);
    }
    ngOnInit() { 
        this.patients = this._patientService.getPatients();
        this._organismeService.getOrganismes().subscribe(organismes => {
           this.organismes = organismes; 
        });
    }
    ngAfterViewInit(){
        this._commandesService.getCommandes().subscribe(commandes => {
            this.commandes = commandes;
            this._zone.run(()=>{
                setTimeout(()=>{
                        $("#commandesTable").bootgrid({
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
                            this.selectCommande(rows[0].id);
                            this._router.navigate(["DetailCommande"]);
                            
                    });
                },0);
                
            });
        });
        
    }
}