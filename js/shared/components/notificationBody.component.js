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
    var NotificationBodyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NotificationBodyComponent = (function () {
                function NotificationBodyComponent() {
                }
                NotificationBodyComponent.prototype.ngOnInit = function () { };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NotificationBodyComponent.prototype, "notification", void 0);
                NotificationBodyComponent = __decorate([
                    core_1.Component({
                        selector: 'notification-body',
                        templateUrl: 'app/shared/views/notificationBody.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], NotificationBodyComponent);
                return NotificationBodyComponent;
            }());
            exports_1("NotificationBodyComponent", NotificationBodyComponent);
        }
    }
});
//# sourceMappingURL=notificationBody.component.js.map