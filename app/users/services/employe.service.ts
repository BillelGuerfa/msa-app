import { Injectable } from 'angular2/core';
import {Http, Response } from "angular2/http";
import {config} from "../../app.config";
import {Feature, FeatureService} from "./feature.service";
import {Observable} from "rxjs/Observable";
import {Adresse} from "../../shared/shared.barrel";
import {Compte} from "./auth.service";
import "rxjs/Rx";
@Injectable()
export class EmployeService {
    employe: Employe;
    currentFeatures: Feature[];
    constructor(private _http: Http, private _featureService: FeatureService) {
     }
    getEmploye(idEmploye): Observable<Employe> {
            if(this.employe){
                return Observable.create(observer => {
                   observer.onNext(this.employe);
                   observer.onCompleted();
                });
            }else {
                return this._http.get(config.urls.login)
                             .map(res => {
                                 let comptes =  <Compte[]>res.json();
                                 this.employe = comptes.filter((compte)=>{
                                     return (compte.employe.idEmploye === idEmploye);
                                 })[0].employe;
                                 return this.employe;
                             })
                             .catch(this.handleErrors);
            }
    }
    handleErrors(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}

export interface Employe {
    idEmploye: number;
    nom: string;
    prenom: string;
    adresse: Adresse;
    dateNaissance: string;
    numeroTel: string;
    dateRecrutement: string;
    poste: string;
}

