import { Injectable } from 'angular2/core';

@Injectable()
export class ProduitService {

    constructor() { }

}

export interface Produit{
    idProduit: number;
    libelle: string;
    gamme: string;
    prixUnitaire: number;
    ttv:number;
    
}