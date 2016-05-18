import { Component, OnInit, AfterViewInit,NgZone, OnChanges  } from 'angular2/core';
import {Router } from "angular2/router";
import {AutocompleteDirective} from "../../shared/shared.barrel";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {PatientService, Patient} from "../../assistante/assistante.barrel";
import {OrdonanceService, Ordonance} from "../../medecin/medecin.barrel";
import {Produit} from "../../magasinier/magasinier.barrel";
import {DevisService, Devis, LigneDevis} from "../../agentPrestation/agentPrestation.barrel";
declare var $;
@Component({
    selector: 'liste-devis',
    templateUrl: 'app/agentPrestation/views/listeDevis.component.html',
    directives: [AutocompleteDirective],
    providers: [OrdonanceService]
})

export class ListeDevisComponent implements OnInit, AfterViewInit,OnChanges {
    patients : Observable<Patient[]>;
    patient : Patient;
    ordonancePatient : Ordonance;
    newDevis : Devis = {};
    constructor(private _zone:NgZone, private _router:Router,
     private _patientService:PatientService,
     private _ordonanceService:OrdonanceService) { }
    ngOnChanges(changes : any){
        //this.patient = changes.patient.currentValue;
        console.log(this.patient);
    }
    ngOnInit() {
        this.patient = {nom: "",prenom:""};
        
        this.patients = this._patientService.getPatients();
        
     }
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
            }).on("selected.rs.jquery.bootgrid", (e, rows) =>
                  {
                     //TODO: Select event here
                     this._router.navigate(["DetailDevis"]);
                     
             });
        });
    }
    selectPatient = (patient) => {
            this.patient = patient;
             this._ordonanceService.getOrdonance(this.patient).subscribe( ordonanceSansLignes => {
                 ordonanceSansLignes.subscribe(ordonance => {
                    this.ordonancePatient = ordonance;
                    this.newDevis.patient = this.patient;
                    this.newDevis.listeLigneDevis = [];
                    this.ordonancePatient.lignesOrdonance.forEach(ligneOrdonance => {
                        let ligneDevis : LigneDevis = {};
                        ligneDevis.quantite = 0;
                        ligneDevis.produit = ligneOrdonance.produit;
                        this.newDevis.listeLigneDevis.push(ligneDevis);
                    })
                    console.log(this.newDevis);
                 })
             });
            //console.log(this.patient);
    }
    changeQuantiteLigneDevis(ligneDevis : LigneDevis,signe: string){
        if(signe === "+"){
             ligneDevis.quantite++;
        }
        else if(signe ==="-"){
             if (ligneDevis.quantite > 0) ligneDevis.quantite--;
        }
    }
    newDevisTotal() : number{
        let total = 0;
        if(this.newDevis){
            this.newDevis.listeLigneDevis.forEach(ligne => {
                total += ligne.produit.prixUnitaire * ligne.quantite;
            })
        }        
        return total;
    }
}