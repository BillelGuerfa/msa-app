import { Injectable } from 'angular2/core';
import {Devis} from "./devis.service";
import {Organisme} from "./organisme.service";
import {Facture} from "./facture.service";
@Injectable()
export class CommandeService {

    constructor() { }

}
export interface Commande{
    idCommande: number;
    devis: Devis;
    organisme: Organisme;
    facture: Facture;
}