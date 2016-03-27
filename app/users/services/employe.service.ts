import { Injectable } from 'angular2/core';
import {Http} from "angular2/http";
import {Feature, FeatureService} from "./feature.service";
@Injectable()
export class EmployeService {
    employe: Employe;
    currentFeatures: Feature[];
    constructor(private _featureService: FeatureService) { }
    getEmploye(id): Employe{
        return this.employe;
    }
}

export interface Employe {
    idEmploye: number;
    nom: string;
    prenom: string;
    adresse: string;
    dateNaissance: string;
    numeroTel: string;
    dateRecrutement: string;
    poste: string;
}

