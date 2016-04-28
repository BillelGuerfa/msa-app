import { Injectable } from 'angular2/core';
import {Http, Response} from "angular2/http";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";
import {config} from "../../app.config";
@Injectable()
export class PatientService {
    
    constructor(private _http: Http) { }
    
    getPatients() : Observable <Patient[]> {
        return this._http.get(config.urls.assistante.patients)
                   .map(patients => <Patient[]> patients.json())
                   .catch(this.handleErrors);
    }
    getPatient() {
        //TODO get patient with name
    }
    handleErrors(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

}

export interface Patient{
    idPatient: string;
    nom: string;
    prenom: string;
    numTelephone: string;
    dateNaissance: string;
    natureStomie: string;
    typeStomie: string;
    adressMail: string;
    typePoche: string;
    gamme: string;
    nombrepocheJ: number;
    referenceDossier: string;
    nss? : string;
}