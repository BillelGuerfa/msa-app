System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var NotificationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NotificationComponent = (function () {
                function NotificationComponent(_zone) {
                    this._zone = _zone;
                }
                NotificationComponent.prototype.ngOnInit = function () { };
                NotificationComponent.prototype.showModal = function () {
                    $("#" + this.id_notif).modal();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], NotificationComponent.prototype, "type", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], NotificationComponent.prototype, "contenu", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], NotificationComponent.prototype, "id_notif", void 0);
                NotificationComponent = __decorate([
                    core_1.Component({
                        selector: 'notification',
                        templateUrl: 'app/shared/views/notification.component.html'
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone])
                ], NotificationComponent);
                return NotificationComponent;
            }());
            exports_1("NotificationComponent", NotificationComponent);
        }
    }
});
//# sourceMappingURL=notification.component.js.map