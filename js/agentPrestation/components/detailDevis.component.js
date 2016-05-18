System.register(['angular2/core', "angular2/router", "../services/devis.service", "../../medecin/medecin.barrel"], function(exports_1, context_1) {
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
    var core_1, router_1, devis_service_1, medecin_barrel_1;
    var DetailDevisComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (devis_service_1_1) {
                devis_service_1 = devis_service_1_1;
            },
            function (medecin_barrel_1_1) {
                medecin_barrel_1 = medecin_barrel_1_1;
            }],
        execute: function() {
            DetailDevisComponent = (function () {
                function DetailDevisComponent(_router, _devisService, _ordonanceService) {
                    this._router = _router;
                    this._devisService = _devisService;
                    this._ordonanceService = _ordonanceService;
                }
                DetailDevisComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this._devisService.selectedDevis.idDevis) {
                        this._router.navigate(['Devis']);
                    }
                    this.devis = this._devisService.selectedDevis;
                    console.log(this.devis);
                    this._devisService.getLigneDevis(this.devis).subscribe(function (devis) {
                        _this.devis = devis;
                    });
                    this._ordonanceService.getOrdonance(this.devis.patient).subscribe(function (ordonanceSansLignes) {
                        ordonanceSansLignes.subscribe(function (ordonance) {
                            _this.ordonance = ordonance;
                        });
                    });
                };
                DetailDevisComponent.prototype.prixTotalDevis = function () {
                    return this._devisService.calculerPrixTotal(this.devis);
                };
                DetailDevisComponent = __decorate([
                    core_1.Component({
                        selector: 'detail-devis',
                        templateUrl: 'app/agentPrestation/views/detailDevis.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, devis_service_1.DevisService, medecin_barrel_1.OrdonanceService])
                ], DetailDevisComponent);
                return DetailDevisComponent;
            }());
            exports_1("DetailDevisComponent", DetailDevisComponent);
        }
    }
});
//# sourceMappingURL=detailDevis.component.js.map