System.register(['angular2/core', "angular2/router", "../services/commande.service", "../services/devis.service", "../../shared/shared.barrel"], function(exports_1, context_1) {
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
    var core_1, router_1, commande_service_1, devis_service_1, shared_barrel_1;
    var DetailCommandeComponent;
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
            function (devis_service_1_1) {
                devis_service_1 = devis_service_1_1;
            },
            function (shared_barrel_1_1) {
                shared_barrel_1 = shared_barrel_1_1;
            }],
        execute: function() {
            DetailCommandeComponent = (function () {
                function DetailCommandeComponent(_commmandeService, _router, _devisService, _dateService) {
                    this._commmandeService = _commmandeService;
                    this._router = _router;
                    this._devisService = _devisService;
                    this._dateService = _dateService;
                }
                DetailCommandeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this._commmandeService.selectedCommande) {
                        this._router.navigate(["Commandes"]);
                    }
                    else {
                        this.commande = this._commmandeService.selectedCommande;
                        this._devisService.getLigneDevis(this.commande.devis).subscribe(function (devis) {
                            _this.commande.devis = devis;
                        });
                    }
                };
                DetailCommandeComponent.prototype.displayDate = function (timestampDate) {
                    return this._dateService.timestampToDate(+timestampDate);
                };
                DetailCommandeComponent.prototype.prixTotalCommande = function () {
                    return this._commmandeService.getPrixTotal(this.commande);
                };
                DetailCommandeComponent = __decorate([
                    core_1.Component({
                        selector: 'detail-commande',
                        templateUrl: 'app/agentPrestation/views/detailCommande.component.html'
                    }), 
                    __metadata('design:paramtypes', [commande_service_1.CommandeService, router_1.Router, devis_service_1.DevisService, shared_barrel_1.DateService])
                ], DetailCommandeComponent);
                return DetailCommandeComponent;
            }());
            exports_1("DetailCommandeComponent", DetailCommandeComponent);
        }
    }
});
//# sourceMappingURL=detailCommande.component.js.map