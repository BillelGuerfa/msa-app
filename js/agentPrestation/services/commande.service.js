System.register(['angular2/core', "angular2/http", "../../app.config", "rxjs/Observable", "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, http_1, app_config_1, Observable_1;
    var CommandeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            CommandeService = (function () {
                function CommandeService(_http) {
                    this._http = _http;
                }
                CommandeService.prototype.getCommandes = function () {
                    return this._http.get(app_config_1.config.urls.agentPrestation.commandes)
                        .map(function (commandes) {
                        return commandes.json();
                    })
                        .catch(this.handleErrors);
                };
                CommandeService.prototype.postCommande = function (commande) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post(app_config_1.config.urls.agentPrestation.commandes, JSON.stringify(commande), options)
                        .map(function (commande) {
                        return commande.json();
                    });
                };
                CommandeService.prototype.handleErrors = function (error) {
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                CommandeService.prototype.getPrixTotal = function (commande) {
                    var total = 0;
                    commande.devis.listeLigneDevis.forEach(function (ligneDevis) {
                        total += ligneDevis.produit.prixUnitaire * ligneDevis.quantite;
                    });
                    return total;
                };
                CommandeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CommandeService);
                return CommandeService;
            }());
            exports_1("CommandeService", CommandeService);
        }
    }
});
//# sourceMappingURL=commande.service.js.map