import { Injectable } from 'angular2/core';
import {Http} from "angular2/http";
@Injectable()
export class EmployeService {
    employe: Employe;
    constructor() { }
    getEmploye(): Employe{
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
}