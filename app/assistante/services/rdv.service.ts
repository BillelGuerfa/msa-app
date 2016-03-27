import { Injectable } from 'angular2/core';
import {Patient} from "./patient.service";
import {Employe} from "../../users/services/employe.service";
@Injectable()
export class RdvService {

    constructor() { }
    
    getRdvMedecin(idMedecin){
        
    }
    getRdvTherapeut(idTherapeut){
        
    }
}
export interface Rdv{
    idRdv: number;
    patient: Patient;
    employe: Employe;
    date: string;
}