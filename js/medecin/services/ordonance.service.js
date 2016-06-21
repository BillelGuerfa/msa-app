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
    var OrdonanceService;
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
            OrdonanceService = (function () {
                function OrdonanceService(_http) {
                    this._http = _http;
                }
                OrdonanceService.prototype.getOrdonance = function (patient) {
                    var _this = this;
                    return this._http.get(app_config_1.config.urls.medecin.ordonance + "/" + patient.idPatient)
                        .map(function (ordonanceSansLignes) {
                        var ordonance = ordonanceSansLignes.json()[0];
                        return _this._http.get(app_config_1.config.urls.medecin.lignesOrdonance + "/" + ordonance.idOrdonance)
                            .map(function (lignesOrdonance) {
                            ordonance.lignesOrdonance = lignesOrdonance.json();
                            return ordonance;
                        })
                            .catch(_this.handleErrors);
                    })
                        .catch(this.handleErrors);
                };
                OrdonanceService.prototype.handleErrors = function (error) {
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                OrdonanceService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], OrdonanceService);
                return OrdonanceService;
            }());
            exports_1("OrdonanceService", OrdonanceService);
        }
    }
});
//# sourceMappingURL=ordonance.service.js.map