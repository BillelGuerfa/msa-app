System.register(['angular2/core', "angular2/router", "../services/commande.service", "../services/devis.service"], function(exports_1, context_1) {
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
    var core_1, router_1, commande_service_1, devis_service_1;
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
            function (devis_service_1_1) {
                devis_service_1 = devis_service_1_1;
            }],
        execute: function() {
            ListeCommandesComponent = (function () {
                function ListeCommandesComponent(_zone, _router, _commandesService, _devisService) {
                    this._zone = _zone;
                    this._router = _router;
                    this._commandesService = _commandesService;
                    this._devisService = _devisService;
                }
                ListeCommandesComponent.prototype.ngOnInit = function () { };
                ListeCommandesComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this._zone.run(function () {
                        $(".data-table-selection").bootgrid({
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
                            _this._router.navigate(["DetailCommande"]);
                        });
                    });
                };
                ListeCommandesComponent = __decorate([
                    core_1.Component({
                        selector: 'liste-commandes',
                        templateUrl: 'app/agentPrestation/views/listeCommandes.component.html'
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone, router_1.Router, commande_service_1.CommandeService, devis_service_1.DevisService])
                ], ListeCommandesComponent);
                return ListeCommandesComponent;
            }());
            exports_1("ListeCommandesComponent", ListeCommandesComponent);
        }
    }
});
//# sourceMappingURL=listeCommandes.component.js.map