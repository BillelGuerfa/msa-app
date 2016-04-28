import { Injectable } from 'angular2/core';
import {Http, Response } from "angular2/http";
import {Patient} from "./patient.service";
import {Employe} from "../../users/services/employe.service";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";
import {config} from "../../app.config";
@Injectable()
export class RdvService {

    constructor(private _http:Http) { }
    
    getRdvMedecin(idMedecin){
       this._http.get(config.urls.assistante.rdvs)
                 .map(rdvs => <Rdv[]> rdvs.json() )
                 .catch(this.handleErrors);
    }
    getRdvTherapeut(idTherapeut){
        
    }
    handleErrors(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}
export interface Rdv{
    idRdv: number;
    patient: Patient;
    employe: Employe;
    date: string;
}