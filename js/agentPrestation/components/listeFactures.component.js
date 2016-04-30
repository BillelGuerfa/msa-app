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
    var ListeFacturesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ListeFacturesComponent = (function () {
                function ListeFacturesComponent(_zone) {
                    this._zone = _zone;
                }
                ListeFacturesComponent.prototype.ngOnInit = function () { };
                ListeFacturesComponent.prototype.ngAfterViewInit = function () {
                    this._zone.run(function () {
                        var grid = $("#data-table-command").bootgrid({
                            css: {
                                icon: 'zmdi icon',
                                iconColumns: 'zmdi-view-module',
                                iconDown: 'zmdi-expand-more',
                                iconRefresh: 'zmdi-refresh',
                                iconUp: 'zmdi-expand-less'
                            },
                            formatters: {
                                "actions": function (column, row) {
                                    return "<button title=\"Confirmer\" class=\"btn btn-default btn-icon waves-effect waves-circle \"><i class=\"zmdi zmdi-check\"></i></button>" +
                                        "<button title=\"Annuler\" class=\"btn btn-default btn-icon waves-effect waves-circle \"><i class=\"zmdi zmdi-delete\"></i></button>" +
                                        "<button title=\"Editer\" class=\"btn btn-default btn-icon waves-effect waves-circle \"><i class=\"zmdi zmdi-edit\"></i></button>" +
                                        "<button title=\"Consulter\" class=\"btn btn-default btn-icon waves-effect waves-circle \"><i class=\"zmdi zmdi-eye\"></i></button>";
                                },
                                "link": function (column, row) {
                                    return "<a href=\"#\">" + column.id + ": " + row.id + "</a>";
                                }
                            }
                        });
                    });
                };
                ListeFacturesComponent = __decorate([
                    core_1.Component({
                        selector: 'liste-factures',
                        templateUrl: 'app/agentPrestation/views/listeFactures.component.html'
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone])
                ], ListeFacturesComponent);
                return ListeFacturesComponent;
            }());
            exports_1("ListeFacturesComponent", ListeFacturesComponent);
        }
    }
});
//# sourceMappingURL=listeFactures.component.js.map