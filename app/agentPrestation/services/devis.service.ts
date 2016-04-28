import { Injectable } from 'angular2/core';
import {Produit} from '../../magasinier/services/produit.service';
import {Patient} from '../../assistante/services/patient.service';
@Injectable()
export class DevisService {

    constructor() { }

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