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
    var DevisService;
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
            DevisService = (function () {
                function DevisService(_http) {
                    this._http = _http;
                }
                DevisService.prototype.getDevis = function () {
                    return this._http.get(app_config_1.config.urls.agentPrestation.devis)
                        .map(function (devisSansLignes) {
                        return devisSansLignes.json();
                    })
                        .catch(this.handleErrors);
                };
                DevisService.prototype.getLigneDevis = function (devis) {
                    return this._http.get(app_config_1.config.urls.agentPrestation.lignesDevis + "/" + devis.idDevis)
                        .map(function (lignesDevis) {
                        devis.listeLigneDevis = lignesDevis.json();
                        return devis;
                    });
                };
                DevisService.prototype.getDevisById = function (idDevis) {
                    return this._http.get(app_config_1.config.urls.agentPrestation.devisById);
                };
                DevisService.prototype.getDevisByIdPatient = function (idPatient) {
                    return this._http.get(app_config_1.config.urls.agentPrestation.devis + "/Patient/" + idPatient)
                        .map(function (devis) { return devis.json(); })
                        .catch(this.handleErrors);
                };
                DevisService.prototype.postDevis = function (devis) {
                    var _this = this;
                    //TODO : Check stock before posting
                    //TODO : don't forget to post lignes devis After devis...
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post(app_config_1.config.urls.agentPrestation.devis, JSON.stringify(devis), options)
                        .map(function (devisReturned) {
                        //TODO: post lignes devis after cheking devis here.
                        if (devisReturned.json()) {
                            devis.listeLigneDevis.forEach(function (ligneDevis) {
                                ligneDevis["devis"] = { "idDevis": devis.idDevis };
                                _this._http.post(app_config_1.config.urls.agentPrestation.lignesDevis, JSON.stringify(ligneDevis), options)
                                    .map(function (ligneDevis) {
                                }).subscribe(function () {
                                });
                            });
                        }
                        return devisReturned.json();
                    });
                };
                DevisService.prototype.calculerPrixTotal = function (devis) {
                    var total = 0;
                    if (devis) {
                        devis.listeLigneDevis.forEach(function (ligne) {
                            total += ligne.produit.prixUnitaire * ligne.quantite;
                        });
                    }
                    return total;
                };
                DevisService.prototype.handleErrors = function (error) {
                    return Observable_1.Observable.throw('Server error');
                };
                DevisService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DevisService);
                return DevisService;
            }());
            exports_1("DevisService", DevisService);
        }
    }
});
//# sourceMappingURL=devis.service.js.map