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
                                    route: "SearchRdvs",
                                    subFeatures: [],
                                    icon:""
                                },
                                {
                                    name: "Stomathérapeut",
                                    route: "SearchRdvs",
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
                        {
                            name: "Devis",
                            route: "Devis",
                            subFeatures: [
                                
                            ],
                            icon:"zmdi zmdi-assignment zmdi-hc-fw"
                        },
                        {
                            name: "Commandes",
                            route: "Commandes",
                            subFeatures: [
                                
                            ],
                            icon:"zmdi zmdi-labels zmdi-hc-fw"
                        },
                        {
                            name: "Factures",
                            route: "Factures",
                            subFeatures: [
                                
                            ],
                            icon:"zmdi zmdi-receipt zmdi-hc-fw"
                        },
                        {
                            name: "Mouvements",
                            route: "none",
                            subFeatures: [
                                
                            ],
                            icon:"zmdi zmdi-swap zmdi-hc-fw"
                        },
                        {
                            name: "Organismes",
                            route: "Organismes",
                            subFeatures: [
                                
                            ],
                            icon:"zmdi zmdi-local-store zmdi-hc-fw"
                        }
                        
                    ];
                }break;
                case "MEDECIN":{
                    this.features =  [
                        
                    ];
                }break;
                case "THERAPEUTE":{
                    this.features =  [
                        {
                            name: "Gestion des RDV",
                            route: "Calendrier",
                            subFeatures: [
                                
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
                                    name: "Historique des visites",
                                    route: "HistoriqueVisites",
                                    subFeatures: [],
                                    icon:""
                                }
                            ],
                            icon:"zmdi zmdi-account-o zmdi-hc-fw"
                        }
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