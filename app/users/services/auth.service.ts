import { Injectable } from 'angular2/core';
import {Http, Response } from "angular2/http";
import {config} from "../../app.config";
import {Observable}     from 'rxjs/Observable';
@Injectable()
export class AuthService {
    
    session_id: number;
    constructor(private _http: Http) { 
        if(sessionStorage.getItem("session_id"))  this.session_id = sessionStorage.getItem("session_id");
    }
    login(compte: Compte){
        return this._http.post(config.urls.login,JSON.stringify(compte))
                          .map((res)=> res.json())
                          .catch(this.handleErrors);
    }
    isLogged(){
        return true;
    }
    handleErrors(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}
export interface Compte {
    idCompte?: number;
    nomUtilisateur: string;
    motDePasse: string;
}