import { Injectable } from 'angular2/core';
import {Http , Response } from "angular2/http";
import {Devis} from "./devis.service";
import {Organisme} from "./organisme.service";
import {config} from "../../app.config";
import {Facture} from "./facture.service";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
@Injectable()
export class CommandeService {

    constructor(private _http:Http) { }
    
    getCommandes(): Observable<Commande[]>{
        return this._http.get(config.urls.agentPrestation.commandes)
                         .map(commandes => <Commande[]> commandes.json())
                         .catch(this.handleErrors);
    }
    handleErrors(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

}
export interface Commande{
    idCommande: number;
    devis: Devis;
    organisme: Organisme;
    facture: Facture;
}