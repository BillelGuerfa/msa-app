import { Injectable } from 'angular2/core';
import {Organisme} from "./organisme.service";
import {Commande} from "./commande.service";
import { Http, Response } from "angular2/http";
import {config} from "../../app.config";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
@Injectable()
export class FactureService {

    constructor(private _http: Http) { }
    
    getFacture() :Observable<Facture[]> {
        return this._http.get(config.urls.agentPrestation.factures)
                  .map(facturesSansCommandes => {
                      let factures : Facture[];
                      //TODO: get commandes here.
                      return factures;
                  })
                  .catch(this.handleErrors);
    }
    handleErrors(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

}
export interface Facture{
    idFacture: number;
    organisme: Organisme;
    listeCommande: Commande[];
}