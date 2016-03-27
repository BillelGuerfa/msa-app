import { Injectable } from 'angular2/core';
import {Http} from "angular2/http";
@Injectable()
export class PatientService {

    constructor() { }

}

export interface Patient{
    idPatient: string;
    nom: string;
    prenom: string;
    numTelephone: string;
    dateNaissance: string;
    natureStomie: string;
    typeStomie: string;
    adressMail: string;
    typePoche: string;
    gamme: string;
    nombrepocheJ: string;
    referenceDossier: string;
    nss? : string;
}