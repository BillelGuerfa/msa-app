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
    var ListePatientsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ListePatientsComponent = (function () {
                function ListePatientsComponent() {
                }
                ListePatientsComponent.prototype.ngOnInit = function () { };
                ListePatientsComponent.prototype.ngAfterViewInit = function () {
                    $(document).ready(function () {
                        //Basic Example
                        $("#data-table-basic").bootgrid({
                            css: {
                                icon: 'zmdi icon',
                                iconColumns: 'zmdi-view-module',
                                iconDown: 'zmdi-expand-more',
                                iconRefresh: 'zmdi-refresh',
                                iconUp: 'zmdi-expand-less'
                            },
                        });
                        //Selection
                        $("#data-table-selection").bootgrid({
                            css: {
                                icon: 'zmdi icon',
                                iconColumns: 'zmdi-view-module',
                                iconDown: 'zmdi-expand-more',
                                iconRefresh: 'zmdi-refresh',
                                iconUp: 'zmdi-expand-less'
                            },
                            selection: true,
                            multiSelect: true,
                            rowSelect: true,
                            keepSelection: true
                        });
                        //Command Buttons
                        $("#data-table-command").bootgrid({
                            css: {
                                icon: 'zmdi icon',
                                iconColumns: 'zmdi-view-module',
                                iconDown: 'zmdi-expand-more',
                                iconRefresh: 'zmdi-refresh',
                                iconUp: 'zmdi-expand-less'
                            },
                            formatters: {
                                "commands": function (column, row) {
                                    return "<button type=\"button\" class=\"btn btn-icon command-edit waves-effect waves-circle\" data-row-id=\"" + row.id + "\"><span class=\"zmdi zmdi-edit\"></span></button> " +
                                        "<button type=\"button\" class=\"btn btn-icon command-delete waves-effect waves-circle\" data-row-id=\"" + row.id + "\"><span class=\"zmdi zmdi-delete\"></span></button>";
                                }
                            }
                        });
                    });
                };
                ListePatientsComponent = __decorate([
                    core_1.Component({
                        selector: 'liste-patients',
                        templateUrl: 'app/assistante/views/listePatients.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListePatientsComponent);
                return ListePatientsComponent;
            }());
            exports_1("ListePatientsComponent", ListePatientsComponent);
        }
    }
});
//# sourceMappingURL=listePatients.component.js.map