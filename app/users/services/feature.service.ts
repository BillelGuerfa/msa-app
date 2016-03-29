import { Injectable } from 'angular2/core';

@Injectable()
export class FeatureService {
    features: Feature[];
    constructor() {
        this.features = [];
     }
    getFeatures(userType: string): Feature[]{
       
            switch (userType) {
                case "ASSISTANTE":{
                    this.features =  [
                        {
                            name: "Gestion des RDV",
                            route: "none",
                            subFeatures: [
                                {
                                    name: "Medecin",
                                    route: "Home",
                                    subFeatures: []
                                },
                                {
                                    name: "Stomathérapeut",
                                    route: "Home",
                                    subFeatures: []
                                }
                            ]
                        },
                        {
                            name: "Gestion des patients",
                            route: "none",
                            subFeatures: [
                                {
                                    name: "Liste patients",
                                    route: "Home",
                                    subFeatures: []
                                },
                                {
                                    name: "Fiche anomalie",
                                    route: "Home",
                                    subFeatures: []
                                }
                            ]
                        }
                    ];
                }break;
                case "AGENT_PRESTATION":{
                    this.features =  [
                        
                    ];
                }break;
                case "MEDECIN":{
                    this.features =  [
                        
                    ];
                }break;
                case "THERAPEUT":{
                    this.features =  [
                        
                    ];
                }break;
                case "MAGASINIER":{
                    this.features =  [
                        
                    ];
                }break;
                default: {
                    this.features =  [
                        
                    ];
                    }
                
            }
            return this.features;
    }

}

export interface Feature {
    name: string;
    route: string;
    subFeatures: Feature[];
}