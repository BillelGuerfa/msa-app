System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FeatureService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FeatureService = (function () {
                function FeatureService() {
                    this.features = [];
                }
                FeatureService.prototype.getFeatures = function (userType) {
                    switch (userType) {
                        case "ASSISTANTE":
                            {
                                this.features = [
                                    {
                                        name: "Gestion des RDV",
                                        route: "none",
                                        subFeatures: [
                                            {
                                                name: "Medecin",
                                                route: "SearchRdvs",
                                                subFeatures: [],
                                                icon: ""
                                            },
                                            {
                                                name: "Stomathérapeut",
                                                route: "SearchRdvs",
                                                subFeatures: [],
                                                icon: ""
                                            }
                                        ],
                                        icon: "zmdi zmdi-calendar-note zmdi-hc-fw"
                                    },
                                    {
                                        name: "Gestion des patients",
                                        route: "none",
                                        subFeatures: [
                                            {
                                                name: "Liste patients",
                                                route: "Patients",
                                                subFeatures: [],
                                                icon: ""
                                            },
                                            {
                                                name: "Fiche anomalie",
                                                route: "FicheAnomalieForm",
                                                subFeatures: [],
                                                icon: ""
                                            }
                                        ],
                                        icon: "zmdi zmdi-account-o zmdi-hc-fw"
                                    }
                                ];
                            }
                            break;
                        case "AGENT_PRESTATION":
                            {
                                this.features = [
                                    {
                                        name: "Devis",
                                        route: "Devis",
                                        subFeatures: [],
                                        icon: "zmdi zmdi-assignment zmdi-hc-fw"
                                    },
                                    {
                                        name: "Commandes",
                                        route: "Commandes",
                                        subFeatures: [],
                                        icon: "zmdi zmdi-labels zmdi-hc-fw"
                                    },
                                    {
                                        name: "Factures",
                                        route: "Factures",
                                        subFeatures: [],
                                        icon: "zmdi zmdi-receipt zmdi-hc-fw"
                                    },
                                    {
                                        name: "Mouvements",
                                        route: "none",
                                        subFeatures: [],
                                        icon: "zmdi zmdi-swap zmdi-hc-fw"
                                    },
                                    {
                                        name: "Organismes",
                                        route: "Organismes",
                                        subFeatures: [],
                                        icon: "zmdi zmdi-local-store zmdi-hc-fw"
                                    }
                                ];
                            }
                            break;
                        case "MEDECIN":
                            {
                                this.features = [];
                            }
                            break;
                        case "THERAPEUTE":
                            {
                                this.features = [
                                    {
                                        name: "Gestion des RDV",
                                        route: "Calendrier",
                                        subFeatures: [],
                                        icon: "zmdi zmdi-calendar-note zmdi-hc-fw"
                                    },
                                    {
                                        name: "Gestion des patients",
                                        route: "none",
                                        subFeatures: [
                                            {
                                                name: "Liste patients",
                                                route: "Patients",
                                                subFeatures: [],
                                                icon: ""
                                            },
                                            {
                                                name: "Historique des visites",
                                                route: "HistoriqueVisites",
                                                subFeatures: [],
                                                icon: ""
                                            }
                                        ],
                                        icon: "zmdi zmdi-account-o zmdi-hc-fw"
                                    }
                                ];
                            }
                            break;
                        case "MAGASINIER":
                            {
                                this.features = [];
                            }
                            break;
                        case "MANAGER":
                            {
                                this.features = [];
                            }
                            break;
                        default: {
                            this.features = [];
                        }
                    }
                    return this.features;
                };
                FeatureService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FeatureService);
                return FeatureService;
            }());
            exports_1("FeatureService", FeatureService);
        }
    }
});
//# sourceMappingURL=feature.service.js.map