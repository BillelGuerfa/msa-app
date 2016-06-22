System.register(['angular2/core', "angular2/http", "../../app.config", "./feature.service", "rxjs/Observable", "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, http_1, app_config_1, feature_service_1, Observable_1;
    var EmployeService;
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
            function (feature_service_1_1) {
                feature_service_1 = feature_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            EmployeService = (function () {
                function EmployeService(_http, _featureService) {
                    this._http = _http;
                    this._featureService = _featureService;
                }
                EmployeService.prototype.getEmploye = function (idEmploye) {
                    var _this = this;
                    if (this.employe) {
                        return Observable_1.Observable.create(function (observer) {
                            observer.onNext(_this.employe);
                            observer.onCompleted();
                        });
                    }
                    else {
                        return this._http.get(app_config_1.config.urls.login)
                            .map(function (res) {
                            var comptes = res.json();
                            _this.employe = comptes.filter(function (compte) {
                                return (compte.employe.idEmploye === idEmploye);
                            })[0].employe;
                            return _this.employe;
                        })
                            .catch(this.handleErrors);
                    }
                };
                EmployeService.prototype.handleErrors = function (error) {
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                EmployeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, feature_service_1.FeatureService])
                ], EmployeService);
                return EmployeService;
            }());
            exports_1("EmployeService", EmployeService);
        }
    }
});
//# sourceMappingURL=employe.service.js.map