import { Injectable } from 'angular2/core';
import {Http, Response } from "angular2/http";
import {config} from "../../app.config";
import {Observable} from "rxjs/Observable";
import  'rxjs/Rx';
@Injectable()
export class AuthService {
    
    logged: boolean;
    compte: Compte;
    constructor(private _http: Http) { 
        
        if(sessionStorage.getItem("session_id"))  {
            this.compte = {};
            this.compte.session_id = sessionStorage.getItem("session_id");
            this.compte.idCompte = sessionStorage.getItem("idCompte");
            this.compte.nomUtilisateur = sessionStorage.getItem("nomUtilisateur");
            this.logged = true;
        }
        else this.logged = false;
    }
    getCompte() {
        if(this.compte) return this.compte;
    }
    login(compte: Compte){
        //TODO replace get with post for production
        return this._http.get(config.urls.login)
                          .map( res => {
                              this.compte = <Compte> res.json();
                              sessionStorage.setItem("session_id", this.compte.session_id);
                              sessionStorage.setItem("idCompte",this.compte.idCompte.toString());
                              sessionStorage.setItem("nomUtilisateur",this.compte.nomUtilisateur);
                              return this.compte;
                            })
                          .catch(this.handleErrors);
    }
    isLogged(){
        return this.logged;
    }
    handleErrors(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}
export interface Compte {
    idCompte?: number;
    session_id?:string;
    nomUtilisateur: string;
    motDePasse: string;
}