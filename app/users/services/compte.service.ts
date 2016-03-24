import { Injectable } from 'angular2/core';
import {Http} from "angular2/http";
@Injectable()
export class CompteService {
    compte: Compte;
    constructor() { }
    getCompute(): Compte{
        return this.compte;
    }
}

export interface Compte {
    idCompte?: number;
    nomUtilisateur: string;
    motDePasse: string;
}