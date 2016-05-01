import { Component, OnInit, AfterViewInit ,NgZone } from 'angular2/core';
import { Employe,EmployeService} from "../../users/users.barrel";
import {AutocompleteDirective} from "../../shared/shared.barrel";
@Component({
    selector: 'search-rdv',
    templateUrl: 'app/assistante/views/searchRdvs.component.html',
    directives: [AutocompleteDirective] 
})
export class SearchRdvsComponent implements OnInit {
    employe: Employe;
    dataSet;
    constructor(private _employeService: EmployeService, private _zone: NgZone) { }
    testDirective(object){
        console.log(object.idPatient);
        
    }
    ngOnInit() { 
        this.dataSet = [
    {
        "idPatient": "P22",
        "nom": "Guerfa",
        "prenom": "Billel",
        "numTelephone":  "0542765526" ,
        "dateNaissance": "22/07/1994",
        "natureStomie": "colostomie",
        "typeStomie": "colostomie",
        "adressMail": "cb_guerfa@esi.dz",
        "typePoche": "Moyenne",
        "gamme": "laGamme",
        "nombrepocheJ": 2,
        "referenceDossier": "P22",
        "nss" : "07523698542"
    },
    {
        "idPatient": "P39",
        "nom": "Guerfa",
        "prenom": "Billel",
        "numTelephone":  "0542765526" ,
        "dateNaissance": "22/07/1994",
        "natureStomie": "colostomie",
        "typeStomie": "colostomie",
        "adressMail": "cb_guerfa@esi.dz",
        "typePoche": "Moyenne",
        "gamme": "laGamme",
        "nombrepocheJ": 2,
        "referenceDossier": "P39",
        "nss" : "07523698542"
    },
    {
        "idPatient": "10",
        "nom": "Guerfa",
        "prenom": "Billel",
        "numTelephone":  "0542765526" ,
        "dateNaissance": "22/07/1994",
        "natureStomie": "colostomie",
        "typeStomie": "colostomie",
        "adressMail": "cb_guerfa@esi.dz",
        "typePoche": "Moyenne",
        "gamme": "laGamme",
        "nombrepocheJ": 2,
        "referenceDossier": "P10",
        "nss" : "07523698542"
    },
    {
        "idPatient": "P10",
        "nom": "Guerfa",
        "prenom": "Billel",
        "numTelephone":  "0542765526" ,
        "dateNaissance": "22/07/1994",
        "natureStomie": "colostomie",
        "typeStomie": "colostomie",
        "adressMail": "cb_guerfa@esi.dz",
        "typePoche": "Moyenne",
        "gamme": "laGamme",
        "nombrepocheJ": 2,
        "referenceDossier": "P10",
        "nss" : "07523698542"
    }
];
        
        
    }
    
    ngAfterViewInit(){
        
    }

}