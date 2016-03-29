import { Injectable } from 'angular2/core';
import {Http, Response } from "angular2/http";
import {config} from "../../app.config";
import {Feature, FeatureService} from "./feature.service";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
@Injectable()
export class EmployeService {
    employe: Employe;
    currentFeatures: Feature[];
    constructor(private _http: Http, private _featureService: FeatureService, private _authService: AuthService) {
        
     }
    getEmploye(): Observable<Employe> {
        if(this._authService.getCompte()){
            if(this.employe){
                return Observable.create(observer => {
                   observer.onNext(this.employe);
                   observer.onCompleted();
                });
            }else {
                return this._http.get(config.urls.users.employe+"?idEmploye="+this._authService.getCompte().idCompte)
                             .map(res => {
                                 this.employe = <Employe> res.json();
                                 return this.employe;
                             })
                             .catch(this.handleErrors);
            }
            
        }else{
            console.log('must login');
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
    adresse: string;
    dateNaissance: string;
    numeroTel: string;
    dateRecrutement: string;
    poste: string;
}

