System.register(['angular2/core', "../services/organisme.service"], function(exports_1, context_1) {
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
    var core_1, organisme_service_1;
    var ListeOrganismesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (organisme_service_1_1) {
                organisme_service_1 = organisme_service_1_1;
            }],
        execute: function() {
            ListeOrganismesComponent = (function () {
                function ListeOrganismesComponent(_zone, _organismeService) {
                    this._zone = _zone;
                    this._organismeService = _organismeService;
                }
                ListeOrganismesComponent.prototype.ngOnInit = function () {
                };
                ListeOrganismesComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this._organismeService.getOrganismes().subscribe(function (organismes) {
                        _this.organismes = organismes;
                        _this._zone.run(function () {
                            setTimeout(function () {
                                $("#data-table-selection").bootgrid({
                                    css: {
                                        icon: 'zmdi icon',
                                        iconColumns: 'zmdi-view-module',
                                        iconDown: 'zmdi-expand-more',
                                        iconRefresh: 'zmdi-refresh',
                                        iconUp: 'zmdi-expand-less'
                                    },
                                    selection: true,
                                    rowSelect: true,
                                    keepSelection: true
                                });
                            }, 0);
                        });
                    });
                };
                ListeOrganismesComponent = __decorate([
                    core_1.Component({
                        selector: 'liste-organismes',
                        templateUrl: 'app/agentPrestation/views/listeOrganismes.component.html'
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone, organisme_service_1.OrganismeService])
                ], ListeOrganismesComponent);
                return ListeOrganismesComponent;
            }());
            exports_1("ListeOrganismesComponent", ListeOrganismesComponent);
        }
    }
});
//# sourceMappingURL=listeOrganismes.component.js.map