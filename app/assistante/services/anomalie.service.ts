import { Injectable } from 'angular2/core';
import {Http} from "angular2/http";
import {Patient} from "./patient.service.ts";
import {config} from "../../app.config";
@Injectable()
export class AnomalieService {

    constructor(private _http:Http) { }
    
    sendAnomalie(anomalie: Anomalie) {
        
    }

}

export interface Anomalie{
    idAnomalie: number;
    date: string;
    description: string;
    patient: Patient;
    listeTypes: TypeAnomalie[];
}

interface TypeAnomalie{
    idTypeAnomalie:number;
    designation: string;
}