System.register(['angular2/core', "angular2/http", "rxjs/Observable", "../../users/users.barrel", "rxjs/Rx", "../../app.config"], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, users_barrel_1, app_config_1;
    var NotificationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (users_barrel_1_1) {
                users_barrel_1 = users_barrel_1_1;
            },
            function (_1) {},
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            }],
        execute: function() {
            NotificationService = (function () {
                function NotificationService(_http, _employeService) {
                    this._http = _http;
                    this._employeService = _employeService;
                }
                NotificationService.prototype.getNotifications = function (idEmploye) {
                    return this._http.get(app_config_1.config.urls.users.notifications + "?idEmploye=" + idEmploye).map(function (notifications) {
                        return notifications.json();
                    }).catch(this.handleErrors);
                };
                NotificationService.prototype.handleErrors = function (error) {
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                NotificationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, users_barrel_1.EmployeService])
                ], NotificationService);
                return NotificationService;
            }());
            exports_1("NotificationService", NotificationService);
        }
    }
});
//# sourceMappingURL=notification.service.js.map