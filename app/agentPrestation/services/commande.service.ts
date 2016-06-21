import { Injectable } from 'angular2/core';
import {Http , Response, Headers, RequestOptions } from "angular2/http";
import {Devis} from "./devis.service";
import {Organisme} from "./organisme.service";
import {config} from "../../app.config";
import {Facture} from "./facture.service";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
@Injectable()
export class CommandeService {
    selectedCommande : Commande;
    constructor(private _http:Http) { }
    
    getCommandes(): Observable<Commande[]>{
        return this._http.get(config.urls.agentPrestation.commandes)
                         .map(commandes => {
                             return commandes.json();
                         })
                         .catch(this.handleErrors);
    }
    postCommande(commande: Commande): Observable<Commande>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(config.urls.agentPrestation.commandes,JSON.stringify(commande),options)
                                .map((commande)=>{
                                    return commande.json();
                                });

    }
    handleErrors(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
    getPrixTotal(commande:Commande){
        let total = 0;
        commande.devis.listeLigneDevis.forEach(ligneDevis => {
            total += ligneDevis.produit.prixUnitaire * ligneDevis.quantite;
        });
        return total;
    }

}
export interface Commande{
    idCommande: number;
    devis: Devis;
    organisme: Organisme;
    facture: Facture;
    etat: string;
    date: number;
}