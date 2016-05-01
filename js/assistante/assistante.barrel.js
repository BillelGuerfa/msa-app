System.register(["./components/calendrier.component", "./components/ficheAnomalieForm.component", "./components/listePatients.component", "./components/searchRdvs.component", "./services/anomalie.service", "./services/patient.service", "./services/rdv.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (calendrier_component_1_1) {
                exports_1({
                    "CalendrierComponent": calendrier_component_1_1["CalendrierComponent"]
                });
            },
            function (ficheAnomalieForm_component_1_1) {
                exports_1({
                    "FicheAnomalieFormComponent": ficheAnomalieForm_component_1_1["FicheAnomalieFormComponent"]
                });
            },
            function (listePatients_component_1_1) {
                exports_1({
                    "ListePatientsComponent": listePatients_component_1_1["ListePatientsComponent"]
                });
            },
            function (searchRdvs_component_1_1) {
                exports_1({
                    "SearchRdvsComponent": searchRdvs_component_1_1["SearchRdvsComponent"]
                });
            },
            function (anomalie_service_1_1) {
                exports_1({
                    "AnomalieService": anomalie_service_1_1["AnomalieService"]
                });
            },
            function (patient_service_1_1) {
                exports_1({
                    "PatientService": patient_service_1_1["PatientService"]
                });
            },
            function (rdv_service_1_1) {
                exports_1({
                    "RdvService": rdv_service_1_1["RdvService"]
                });
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=assistante.barrel.js.map