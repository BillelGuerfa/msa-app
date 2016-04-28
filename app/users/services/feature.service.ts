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
                                    route: "Calendrier",
                                    subFeatures: [],
                                    icon:""
                                },
                                {
                                    name: "Stomathérapeut",
                                    route: "Calendrier",
                                    subFeatures: [],
                                    icon:""
                                }
                            ],
                            icon:"zmdi zmdi-calendar-note zmdi-hc-fw"
                        },
                        {
                            name: "Gestion des patients",
                            route: "none",
                            subFeatures: [
                                {
                                    name: "Liste patients",
                                    route: "Patients",
                                    subFeatures: [],
                                    icon:""
                                },
                                {
                                    name: "Fiche anomalie",
                                    route: "FicheAnomalieForm",
                                    subFeatures: [],
                                    icon:""
                                }
                            ],
                            icon:"zmdi zmdi-account-o zmdi-hc-fw"
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
    icon: string;
}