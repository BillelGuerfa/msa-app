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
                         .map(devis => <Devis[]> devis.json())
                         .catch(this.handleErrors);
    }
    postDevis(devis : Devis) : Observable<Devis>{
        return this._http.post(config.urls.agentPrestation.devis,JSON.stringify(devis))
                            .map(devis => <Devis> devis.json())
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