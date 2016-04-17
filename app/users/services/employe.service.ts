import { Injectable } from 'angular2/core';
import {Http, Response } from "angular2/http";
import {config} from "../../app.config";
import {Feature, FeatureService} from "./feature.service";
import {Observable} from "rxjs/Observable";
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
                return this._http.get(config.urls.users.employe+"?idEmploye="+idEmploye)
                             .map(res => {
                                 this.employe = <Employe> res.json();
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
    adresse: {};
    dateNaissance: string;
    numeroTel: string;
    dateRecrutement: string;
    poste: string;
}

