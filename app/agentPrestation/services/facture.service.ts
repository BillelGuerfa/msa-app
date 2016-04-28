import { Injectable } from 'angular2/core';
import {Organisme} from "./organisme.service";
import {Commande} from "./commande.service"
@Injectable()
export class FactureService {

    constructor() { }

}
export interface Facture{
    idFacture: number;
    organisme: Organisme;
    listeCommande: Commande[];
}