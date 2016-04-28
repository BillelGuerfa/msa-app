System.register(['angular2/core', "rxjs/Rx", "../services/patient.service"], function(exports_1, context_1) {
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
    var core_1, patient_service_1;
    var ListePatientsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (patient_service_1_1) {
                patient_service_1 = patient_service_1_1;
            }],
        execute: function() {
            ListePatientsComponent = (function () {
                function ListePatientsComponent(_patientService, _ngZone) {
                    this._patientService = _patientService;
                    this._ngZone = _ngZone;
                    this.patients = [];
                }
                ListePatientsComponent.prototype.ngOnInit = function () {
                };
                ListePatientsComponent.prototype.selectPatient = function (id) {
                    this.selectedPatient = this.patients.filter(function (patient) { return patient.idPatient === id; })[0];
                };
                ListePatientsComponent.prototype.gotoDossier = function (id) {
                };
                ListePatientsComponent.prototype.gotoFicheAnomalie = function (id) {
                };
                ListePatientsComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this._patientService.getPatients()
                        .subscribe(function (patients) {
                        _this.patients = patients;
                        _this._ngZone.run(function () {
                            setTimeout(function () {
                                $(document).ready(function () {
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
                                        multiSelect: false,
                                        rowSelect: true,
                                        keepSelection: true
                                    }).on("selected.rs.jquery.bootgrid", function (e, rows) {
                                        _this.selectPatient(rows[0].id);
                                    });
                                });
                            }, 200); //Timeout because async and bootgrid intialization
                        });
                    }, function (error) {
                    });
                };
                ListePatientsComponent = __decorate([
                    core_1.Component({
                        selector: 'liste-patients',
                        templateUrl: 'app/assistante/views/listePatients.component.html'
                    }), 
                    __metadata('design:paramtypes', [patient_service_1.PatientService, core_1.NgZone])
                ], ListePatientsComponent);
                return ListePatientsComponent;
            }());
            exports_1("ListePatientsComponent", ListePatientsComponent);
        }
    }
});
//# sourceMappingURL=listePatients.component.js.map