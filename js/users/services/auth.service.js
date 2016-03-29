System.register(['angular2/core', "angular2/http", "../../app.config", "rxjs/Observable", 'rxjs/Rx'], function(exports_1, context_1) {
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
    var AuthService;
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
            AuthService = (function () {
                function AuthService(_http) {
                    this._http = _http;
                    if (sessionStorage.getItem("session_id")) {
                        this.compte = {};
                        this.compte.session_id = sessionStorage.getItem("session_id");
                        this.compte.idCompte = sessionStorage.getItem("idCompte");
                        this.compte.nomUtilisateur = sessionStorage.getItem("nomUtilisateur");
                        this.logged = true;
                    }
                    else
                        this.logged = false;
                }
                AuthService.prototype.getCompte = function () {
                    if (this.compte)
                        return this.compte;
                };
                AuthService.prototype.login = function (compte) {
                    var _this = this;
                    //TODO replace get with post for production
                    return this._http.get(app_config_1.config.urls.login)
                        .map(function (res) {
                        _this.compte = res.json();
                        sessionStorage.setItem("session_id", _this.compte.session_id);
                        sessionStorage.setItem("idCompte", _this.compte.idCompte.toString());
                        sessionStorage.setItem("nomUtilisateur", _this.compte.nomUtilisateur);
                        return _this.compte;
                    })
                        .catch(this.handleErrors);
                };
                AuthService.prototype.isLogged = function () {
                    return this.logged;
                };
                AuthService.prototype.handleErrors = function (error) {
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=auth.service.js.map