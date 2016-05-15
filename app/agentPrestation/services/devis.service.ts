import { Injectable } from 'angular2/core';
import {Produit} from '../../magasinier/services/produit.service';
import {Patient} from '../../assistante/services/patient.service';
import { Http, Response } from "angular2/http";
import {config} from "../../app.config";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
@Injectable()
export class DevisService {

    constructor(private _http: Http) { }
    
    getDevis() :  Observable<Devis[]>{
        return this._http.get(config.urls.agentPrestation.devis)
                         .map(devisSansLignes => {
                             let devis : Devis[]; 
                             devis = devisSansLignes.json();
                             devis.forEach(dev =>{
                                 this._http.get(config.urls.agentPrestation.lignesDevis+"?idDevis="+dev.idDevis)
                                 .map(lignesDevis => {
                                     dev.listeLigneDevis = lignesDevis.json();
                                 })
                             });
                             return devis;
                          })
                         .catch(this.handleErrors);
    }
    postDevis(devis : Devis) : Observable<Devis>{
        //TODO : Check stock before posting
        //TODO : don't forget to post lignes devis After devis...
        return this._http.post(config.urls.agentPrestation.devis,JSON.stringify(devis))
                            .map(devisReturned => {
                                //TODO: post lignes devis after cheking devis here.
                                if(devisReturned.json()){
                                    
                                    this._http.post(config.urls.agentPrestation.lignesDevis,JSON.stringify(devis.listeLigneDevis))
                                              .map(lignesDevis => {
                                                  
                                              })
                                }
                                return <Devis> devisReturned.json();
                            })
                            .catch(this.handleErrors);
    }
    
    handleErrors(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

}

export interface Devis{
    idDevis: number;
    datePrescription: number;
    dureValidation: number;
    modePayment: string;
    etat: string;
    patient: Patient;
    listeLigneDevis: LigneDevis[];
}
export interface LigneDevis{
    idLigneDevis: number;
    quantite: number;
    produit: Produit;
}