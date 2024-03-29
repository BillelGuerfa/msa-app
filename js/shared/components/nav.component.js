System.register(['angular2/core', "angular2/router", "./navItem.component", "../../users/services/feature.service"], function(exports_1, context_1) {
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
    var core_1, router_1, navItem_component_1, feature_service_1;
    var NavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navItem_component_1_1) {
                navItem_component_1 = navItem_component_1_1;
            },
            function (feature_service_1_1) {
                feature_service_1 = feature_service_1_1;
            }],
        execute: function() {
            NavComponent = (function () {
                function NavComponent(_featureService) {
                    this._featureService = _featureService;
                }
                NavComponent.prototype.ngOnChanges = function (changes) {
                    this.employe = changes.employe.currentValue;
                    if (this.employe) {
                        this.features = this._featureService.getFeatures(this.employe.poste);
                    }
                };
                NavComponent.prototype.ngOnInit = function () {
                };
                NavComponent.prototype.deco = function () {
                    sessionStorage.clear();
                    window.location.pathname = "/";
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NavComponent.prototype, "employe", void 0);
                NavComponent = __decorate([
                    core_1.Component({
                        selector: 'app-nav',
                        templateUrl: 'app/shared/views/nav.component.html',
                        directives: [navItem_component_1.NavItemComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [feature_service_1.FeatureService])
                ], NavComponent);
                return NavComponent;
            }());
            exports_1("NavComponent", NavComponent);
        }
    }
});
//# sourceMappingURL=nav.component.js.map