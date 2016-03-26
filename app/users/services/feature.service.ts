import { Injectable } from 'angular2/core';

@Injectable()
export class FeatureService {

    constructor() { }
    getFeatures(userType: string){
       switch (userType) {
           case "ASSISTANTE":{
               return [
                   {
                       name: "Gestion des RDV",
                       route: "none",
                       subFeatures: [
                           {
                               name: "Medecin",
                               route: "RdvMedecins"
                           },
                           {
                               name: "Stomathérapeut",
                               route: "RdvTherapeuts"
                           }
                       ]
                   },
                   {
                       name: "Gestion des patients",
                       route: "none",
                       subFeatures: [
                           {
                               name: "Liste patients",
                               route: "ListePatients"
                           },
                           {
                               name: "Fiche anomalie",
                               route: "FicheAnomalie"
                           }
                       ]
                   }
               ];
           }
           case "AGENT_PRESTATION":{
               return [
                   
               ];
           }
           case "MEDECIN":{
               return [
                   
               ];
           }
           case "THERAPEUT":{
               return [
                   
               ];
           }
           case "MAGASINIER":{
               return [
                   
               ];
           }
           default: {
               return [
                   
               ];
            }
              
       }
        
    }

}

export interface Feature {
    name: string;
    route: string;
    subFeatures: Feature[];
}