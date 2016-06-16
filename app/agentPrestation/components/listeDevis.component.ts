import { Component, OnInit, AfterViewInit, NgZone, OnChanges } from "angular2/core";
import {Router } from "angular2/router";
import {AutocompleteDirective, DateService} from "../../shared/shared.barrel";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {PatientService, Patient} from "../../assistante/assistante.barrel";
import {OrdonanceService, Ordonance} from "../../medecin/medecin.barrel";
import {Produit} from "../../magasinier/magasinier.barrel";
import {DevisService, Devis, LigneDevis} from "../services/devis.service";
declare var $, moment;
@Component({
    selector: "liste-devis",
    templateUrl: "app/agentPrestation/views/listeDevis.component.html",
    directives: [AutocompleteDirective]
})
export class ListeDevisComponent implements OnInit, AfterViewInit, OnChanges {
    patients : Observable<Patient[]>;
    patient : Patient;
    ordonancePatient : Ordonance;
    devis: Devis[];
    selectedDevis: Devis;
    newDevis : Devis = {};
    constructor(private _zone: NgZone,
                private _devisService: DevisService,
                private _router: Router,
                private _patientService: PatientService,
                private _ordonanceService: OrdonanceService,
                private _dateService: DateService
                ) { }
    ngOnChanges(changes : any) {
        // this.patient = changes.patient.currentValue;
        console.log(this.patient);
    }
    ngOnInit() {
        this.patient = {nom: "", prenom: ""};

        this.patients = this._patientService.getPatients();


     }
    ngAfterViewInit() {
        this._devisService.getDevis().subscribe(devis => {
            this.devis = devis;
            this._zone.run(() => {
                setTimeout(() => {
                    $("#data-table-selection").bootgrid({
                    css: {
                        icon: "zmdi icon",
                        iconColumns: "zmdi-view-module",
                        iconDown: "zmdi-expand-more",
                        iconRefresh: "zmdi-refresh",
                        iconUp: "zmdi-expand-less"
                    },
                    selection: true,
                    rowSelect: true,
                    keepSelection: true
                }).on("selected.rs.jquery.bootgrid", (e, rows) =>
                    {
                        // TODO: Select event here
                        this.selectDevis(rows[0].id);
                        this._router.navigate(["DetailDevis", {idDevis: rows[0].id}]);

                });
                }, 0);

            });
        });

        $(".date-picker").datetimepicker({
                format: "DD/MM/YYYY"
        }).on('dp.change',  (ev) =>{
             this.newDevis.dateExpiration = this._dateService.dateToTimestamp(ev.date.format("DD/MM/YYYY"),'DD/MM/YYYY');
        }); ;

    }
    selectDevis = (idDevis) => {
        this.selectedDevis = this.devis.filter((devis) => devis.idDevis === idDevis)[0];
        this._devisService.selectedDevis = this.selectedDevis;
    };
    selectPatient = (patient) => {
            this.patient = patient;
             this._ordonanceService.getOrdonance(this.patient).subscribe( ordonanceSansLignes => {
                 ordonanceSansLignes.subscribe(ordonance => {
                    this.ordonancePatient = ordonance;
                    this.newDevis = { };
                    this.newDevis.patient = this.patient;
                    this.newDevis.datePrescription = this._dateService.currentTimestamp();
                    this.newDevis.listeLigneDevis = [];
                    this.ordonancePatient.lignesOrdonance.forEach(ligneOrdonance => {
                        let ligneDevis : LigneDevis = {};
                        ligneDevis.quantite = 0;
                        ligneDevis.produit = ligneOrdonance.produit;
                        this.newDevis.listeLigneDevis.push(ligneDevis);
                    });
                    console.log(this.newDevis);
                 });
             });
            //console.log(this.patient);
    };
    setDateExpDevis(event) {
        this.newDevis.dateExpiration = this._dateService.dateToTimestamp(event, "DD/MM/YYYY");
        console.log(this.newDevis);
    }
    sendDevis() {
        console.log(this.newDevis);
    }
    changeQuantiteLigneDevis(ligneDevis: LigneDevis, signe: string) {
        if (signe === "+") {
             ligneDevis.quantite++;
        }
        else if (signe === "-") {
             if (ligneDevis.quantite > 0) ligneDevis.quantite--;
        }
    }
    newDevisTotal() : number {
        return this._devisService.calculerPrixTotal(this.newDevis);
    }
    displayDate(timestampDate : string) : string {
        return this._dateService.timestampToDate(+timestampDate);
    }
}