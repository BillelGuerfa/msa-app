import { Injectable } from 'angular2/core';
import { Http, Response } from "angular2/http";
import {Employe} from '../../users/services/employe.service';
import {Produit} from '../../magasinier/services/produit.service';
import {Patient} from '../../assistante/services/patient.service';
import {config} from "../../app.config";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
@Injectable()
export class OrdonanceService {

    constructor(private _http:Http) { }
    
    getOrdonance(patient: Patient) : Observable<Observable<Ordonance>>{ 
        return this._http.get(config.urls.medecin.ordonance+"?idPatient="+patient.idPatient)
                      .map((ordonanceSansLignes) => {
                          let ordonance: Ordonance = ordonanceSansLignes.json();
                         return this._http.get(config.urls.medecin.lignesOrdonance)
                                    .map((lignesOrdonance )=>{
                                        ordonance.lignesOrdonance = lignesOrdonance.json();
                                        return ordonance;
                                    })
                                    .catch(this.handleErrors);
                      })
                      .catch(this.handleErrors);
    }
    
    handleErrors(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

}
export interface Ordonance{
    idOrdonance:number;
    date: number;
    medecin: Employe;
    patient: Patient;
    lignesOrdonance: LigneOrdonance[];
    
}
export interface LigneOrdonance{
    idLigneOrdonance: number;
    frequenceUtilisation: number;
    produit: Produit;
}