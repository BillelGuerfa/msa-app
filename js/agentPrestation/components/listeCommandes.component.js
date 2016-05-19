System.register(['angular2/core', "angular2/router", "../services/commande.service", "../services/organisme.service", "../services/devis.service", "../../assistante/assistante.barrel", "../../shared/shared.barrel"], function(exports_1, context_1) {
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
    var core_1, router_1, commande_service_1, organisme_service_1, devis_service_1, assistante_barrel_1, shared_barrel_1;
    var ListeCommandesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (commande_service_1_1) {
                commande_service_1 = commande_service_1_1;
            },
            function (organisme_service_1_1) {
                organisme_service_1 = organisme_service_1_1;
            },
            function (devis_service_1_1) {
                devis_service_1 = devis_service_1_1;
            },
            function (assistante_barrel_1_1) {
                assistante_barrel_1 = assistante_barrel_1_1;
            },
            function (shared_barrel_1_1) {
                shared_barrel_1 = shared_barrel_1_1;
            }],
        execute: function() {
            ListeCommandesComponent = (function () {
                function ListeCommandesComponent(_zone, _router, _commandesService, _devisService, _patientService, _organismeService, _dateService) {
                    var _this = this;
                    this._zone = _zone;
                    this._router = _router;
                    this._commandesService = _commandesService;
                    this._devisService = _devisService;
                    this._patientService = _patientService;
                    this._organismeService = _organismeService;
                    this._dateService = _dateService;
                    this.newCommande = {};
                    this.patient = { nom: "", prenom: "" };
                    this.selectCommande = function (idCommande) {
                        _this.selectedCommande = _this.commandes.filter(function (commande) { return commande.idCommande === idCommande; })[0];
                        _this._commandesService.selectedCommande = _this.selectedCommande;
                    };
                    this.selectPatient = function (patient) {
                        _this.patient = patient;
                        _this._devisService.getDevisByIdPatient(_this.patient.idPatient).subscribe(function (devis) {
                            _this.devisPatient = devis;
                            _this._zone.run(function () {
                                setTimeout(function () {
                                    $("#devisTable").bootgrid({
                                        css: {
                                            icon: 'zmdi icon',
                                            iconColumns: 'zmdi-view-module',
                                            iconDown: 'zmdi-expand-more',
                                            iconRefresh: 'zmdi-refresh',
                                            iconUp: 'zmdi-expand-less'
                                        },
                                        selection: true,
                                        rowSelect: true,
                                        keepSelection: true
                                    }).on("selected.rs.jquery.bootgrid", function (e, rows) {
                                        //TODO: Select event here
                                        _this.selectDevis(rows[0].id);
                                        console.log(_this.newCommande.devis);
                                    });
                                }, 0);
                            });
                        });
                        //console.log(this.patient);
                    };
                    this.selectOrganisme = function (organisme) {
                        _this.newCommande.organisme = JSON.parse(organisme);
                        console.log(_this.newCommande.organisme);
                    };
                    this.selectDevis = function (idDevis) {
                        _this.newCommande.devis = _this.devisPatient.filter(function (devis) { return devis.idDevis === idDevis; })[0];
                    };
                }
                ListeCommandesComponent.prototype.stringify = function (o) {
                    return JSON.stringify(o);
                };
                ListeCommandesComponent.prototype.createCommande = function () {
                    this.newCommande = {};
                    this.newCommande.etat = "En attente de facturation";
                    this.newCommande.date = moment().format("x");
                };
                ListeCommandesComponent.prototype.displayDate = function (timestampDate) {
                    return this._dateService.timestampToDate(+timestampDate);
                };
                ListeCommandesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.patients = this._patientService.getPatients();
                    this._organismeService.getOrganismes().subscribe(function (organismes) {
                        _this.organismes = organismes;
                    });
                };
                ListeCommandesComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this._commandesService.getCommandes().subscribe(function (commandes) {
                        _this.commandes = commandes;
                        _this._zone.run(function () {
                            setTimeout(function () {
                                $("#commandesTable").bootgrid({
                                    css: {
                                        icon: 'zmdi icon',
                                        iconColumns: 'zmdi-view-module',
                                        iconDown: 'zmdi-expand-more',
                                        iconRefresh: 'zmdi-refresh',
                                        iconUp: 'zmdi-expand-less'
                                    },
                                    selection: true,
                                    rowSelect: true,
                                    keepSelection: true
                                }).on("selected.rs.jquery.bootgrid", function (e, rows) {
                                    //TODO: Select event here
                                    _this.selectCommande(rows[0].id);
                                    _this._router.navigate(["DetailCommande"]);
                                });
                            }, 0);
                        });
                    });
                };
                ListeCommandesComponent = __decorate([
                    core_1.Component({
                        selector: 'liste-commandes',
                        templateUrl: 'app/agentPrestation/views/listeCommandes.component.html',
                        directives: [shared_barrel_1.AutocompleteDirective]
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone, router_1.Router, commande_service_1.CommandeService, devis_service_1.DevisService, assistante_barrel_1.PatientService, organisme_service_1.OrganismeService, shared_barrel_1.DateService])
                ], ListeCommandesComponent);
                return ListeCommandesComponent;
            }());
            exports_1("ListeCommandesComponent", ListeCommandesComponent);
        }
    }
});
//# sourceMappingURL=listeCommandes.component.js.map