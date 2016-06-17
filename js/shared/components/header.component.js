System.register(['angular2/core', "./nav.component", "./notification.component", "./notificationBody.component", "../services/notification.service"], function(exports_1, context_1) {
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
    var core_1, nav_component_1, notification_component_1, notificationBody_component_1, notification_service_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            },
            function (notification_component_1_1) {
                notification_component_1 = notification_component_1_1;
            },
            function (notificationBody_component_1_1) {
                notificationBody_component_1 = notificationBody_component_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(_notificationService) {
                    this._notificationService = _notificationService;
                }
                HeaderComponent.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    this.employe = changes.employe.currentValue;
                    if (this.employe) {
                        this._notificationService.getNotifications(this.employe.idEmploye).subscribe(function (notifications) {
                            _this.notifications = notifications;
                        });
                    }
                };
                HeaderComponent.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], HeaderComponent.prototype, "employe", void 0);
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'app-header',
                        templateUrl: 'app/shared/views/header.component.html',
                        directives: [nav_component_1.NavComponent, notification_component_1.NotificationComponent, notificationBody_component_1.NotificationBodyComponent]
                    }), 
                    __metadata('design:paramtypes', [notification_service_1.NotificationService])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.component.js.map