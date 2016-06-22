import { Injectable } from 'angular2/core';
import {Http, Response } from "angular2/http";
import {config} from "../../app.config";
import {Observable} from "rxjs/Observable";
import {Employe} from "./employe.service";
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
        return this.login(this.compte);
    }
    login(compte: Compte){
        //TODO replace get with post for production
            return this._http.get(config.urls.login)
                          .map( res => {
                              let comptes = <Compte[]> res.json();
                              this.compte = comptes.filter((com)=>{
                                    return ((com.nomUtilisateur === compte.nomUtilisateur && com.motDePasse === compte.motDePasse) || (com.idCompte == compte.idCompte));
                              })[0];
                              
                              sessionStorage.setItem("session_id", this.compte.session_id);
                              sessionStorage.setItem("idCompte",this.compte.idCompte.toString());
                              sessionStorage.setItem("nomUtilisateur",this.compte.nomUtilisateur);
                              this.logged = true;
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
    employe: Employe;
}