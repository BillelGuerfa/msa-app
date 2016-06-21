import { Injectable } from '@angular/core';

@Injectable()
export class AdresseService {

    constructor() { }

}

export interface Adresse{
    idAdresse:string;
    codePostale:number;
    wilaya:string;
    commune:string;
    rue:string;
    numRue:number;
}