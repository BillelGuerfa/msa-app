import { Injectable  } from 'angular2/core';
import {Produit} from '../../magasinier/services/produit.service';
import {Patient} from '../../assistante/services/patient.service';
import {Ordonance} from "../../medecin/medecin.barrel";
import { Http, Response, Headers, RequestOptions} from "angular2/http";
import {config} from "../../app.config";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
@Injectable()
export class DevisService {
    selectedDevis: Devis;
    constructor(private _http: Http) { }
    getDevis() :  Observable<Devis[]> {
        return this._http.get(config.urls.agentPrestation.devis)
                         .map(devisSansLignes => {
                             return devisSansLignes.json();
                          })
                         .catch(this.handleErrors);
    }
    getLigneDevis(devis: Devis) : Observable<Devis> {
            return this._http.get(config.urls.agentPrestation.lignesDevis + "/" + devis.idDevis)
                         .map(lignesDevis => {
                            devis.listeLigneDevis = lignesDevis.json();
                            return devis;
                          });

    }
    getDevisById(idDevis: any) {
        return this._http.get(config.urls.agentPrestation.devisById)
    }
    getDevisByIdPatient(idPatient: any) : Observable<Devis[]> {
        return this._http.get(config.urls.agentPrestation.devis + "?idPatient=" + idPatient)
                        .map(devis =>  <Devis[]>devis.json())
                        .catch(this.handleErrors);
    }
    postDevis(devis : Devis) : Observable<Devis> {
        //TODO : Check stock before posting
        //TODO : don't forget to post lignes devis After devis...
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(config.urls.agentPrestation.devis, JSON.stringify(devis),options)
                            .map(devisReturned => {
                                //TODO: post lignes devis after cheking devis here.
                                if (devisReturned.json()) {
                                    devis.listeLigneDevis.forEach((ligneDevis) =>{
                                        ligneDevis["devis"] = {"idDevis" : devis.idDevis};
                                        this._http.post(config.urls.agentPrestation.lignesDevis, JSON.stringify(ligneDevis),options)
                                              .map(ligneDevis => {

                                              }).subscribe(()=>{

                                              });
                                    });

                                }
                                return <Devis> devisReturned.json();
                            });
    }
    calculerPrixTotal(devis: Devis) {
        let total = 0;
        if (devis) {
            devis.listeLigneDevis.forEach(ligne => {
                total += ligne.produit.prixUnitaire * ligne.quantite;
            })
        }
        return total;
    }
    handleErrors(error: Response) {
        return Observable.throw('Server error');
    }

}

export interface Devis {
    idDevis: number;
    datePrescription: number;
    dureValidation: number;
    modePayment: string;
    etat: string;
    patient: Patient;
    listeLigneDevis: LigneDevis[];
    ordonnance: Ordonance;
}
export interface LigneDevis {
    idLigneDevis: number;
    quantite: number;
    produit: Produit;
}