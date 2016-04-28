import { Injectable } from 'angular2/core';
import {Employe} from '../../users/services/employe.service';
import {Produit} from '../../magasinier/services/produit.service';
import {Patient} from '../../assistante/services/patient.service';
@Injectable()
export class OrdonanceService {

    constructor() { }

}
export interface Ordonance{
    idOrdonance:number;
    date: number;
    medecin: Employe;
    patient: Patient;
    
}
export interface LigneOrdonance{
    idLigneOrdonance: number;
    frequenceUtilisation: number;
    produit: Produit;
}