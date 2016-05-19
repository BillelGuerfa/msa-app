System.register(['angular2/core', "angular2/router", "../../shared/shared.barrel", "rxjs/Rx", "../../assistante/assistante.barrel", "../../medecin/medecin.barrel", "../services/devis.service"], function(exports_1, context_1) {
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
    var core_1, router_1, shared_barrel_1, assistante_barrel_1, medecin_barrel_1, devis_service_1;
    var ListeDevisComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (shared_barrel_1_1) {
                shared_barrel_1 = shared_barrel_1_1;
            },
            function (_1) {},
            function (assistante_barrel_1_1) {
                assistante_barrel_1 = assistante_barrel_1_1;
            },
            function (medecin_barrel_1_1) {
                medecin_barrel_1 = medecin_barrel_1_1;
            },
            function (devis_service_1_1) {
                devis_service_1 = devis_service_1_1;
            }],
        execute: function() {
            ListeDevisComponent = (function () {
                function ListeDevisComponent(_zone, _devisService, _router, _patientService, _ordonanceService, _dateService) {
                    var _this = this;
                    this._zone = _zone;
                    this._devisService = _devisService;
                    this._router = _router;
                    this._patientService = _patientService;
                    this._ordonanceService = _ordonanceService;
                    this._dateService = _dateService;
                    this.newDevis = {};
                    this.selectDevis = function (idDevis) {
                        _this.selectedDevis = _this.devis.filter(function (devis) { return devis.idDevis === idDevis; })[0];
                        _this._devisService.selectedDevis = _this.selectedDevis;
                    };
                    this.selectPatient = function (patient) {
                        _this.patient = patient;
                        _this._ordonanceService.getOrdonance(_this.patient).subscribe(function (ordonanceSansLignes) {
                            ordonanceSansLignes.subscribe(function (ordonance) {
                                _this.ordonancePatient = ordonance;
                                _this.newDevis.patient = _this.patient;
                                _this.newDevis.listeLigneDevis = [];
                                _this.ordonancePatient.lignesOrdonance.forEach(function (ligneOrdonance) {
                                    var ligneDevis = {};
                                    ligneDevis.quantite = 0;
                                    ligneDevis.produit = ligneOrdonance.produit;
                                    _this.newDevis.listeLigneDevis.push(ligneDevis);
                                });
                                console.log(_this.newDevis);
                            });
                        });
                        //console.log(this.patient);
                    };
                }
                ListeDevisComponent.prototype.ngOnChanges = function (changes) {
                    //this.patient = changes.patient.currentValue;
                    console.log(this.patient);
                };
                ListeDevisComponent.prototype.ngOnInit = function () {
                    this.patient = { nom: "", prenom: "" };
                    this.patients = this._patientService.getPatients();
                };
                ListeDevisComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this._devisService.getDevis().subscribe(function (devis) {
                        _this.devis = devis;
                        _this._zone.run(function () {
                            setTimeout(function () {
                                $("#data-table-selection").bootgrid({
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
                                    _this._router.navigate(["DetailDevis", { idDevis: rows[0].id }]);
                                });
                            }, 0);
                        });
                    });
                };
                ListeDevisComponent.prototype.changeQuantiteLigneDevis = function (ligneDevis, signe) {
                    if (signe === "+") {
                        ligneDevis.quantite++;
                    }
                    else if (signe === "-") {
                        if (ligneDevis.quantite > 0)
                            ligneDevis.quantite--;
                    }
                };
                ListeDevisComponent.prototype.newDevisTotal = function () {
                    return this._devisService.calculerPrixTotal(this.newDevis);
                };
                ListeDevisComponent.prototype.displayDate = function (timestampDate) {
                    return this._dateService.timestampToDate(+timestampDate);
                };
                ListeDevisComponent = __decorate([
                    core_1.Component({
                        selector: 'liste-devis',
                        templateUrl: 'app/agentPrestation/views/listeDevis.component.html',
                        directives: [shared_barrel_1.AutocompleteDirective]
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone, devis_service_1.DevisService, router_1.Router, assistante_barrel_1.PatientService, medecin_barrel_1.OrdonanceService, shared_barrel_1.DateService])
                ], ListeDevisComponent);
                return ListeDevisComponent;
            }());
            exports_1("ListeDevisComponent", ListeDevisComponent);
        }
    }
});
//# sourceMappingURL=listeDevis.component.js.map