System.register(["./components/login.component", "./services/auth.service", "./services/employe.service", "./services/feature.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (login_component_1_1) {
                exports_1({
                    "LoginComponent": login_component_1_1["LoginComponent"]
                });
            },
            function (auth_service_1_1) {
                exports_1({
                    "AuthService": auth_service_1_1["AuthService"],
                    "Compte": auth_service_1_1["Compte"]
                });
            },
            function (employe_service_1_1) {
                exports_1({
                    "EmployeService": employe_service_1_1["EmployeService"],
                    "Employe": employe_service_1_1["Employe"]
                });
            },
            function (feature_service_1_1) {
                exports_1({
                    "FeatureService": feature_service_1_1["FeatureService"],
                    "Feature": feature_service_1_1["Feature"]
                });
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=users.barrel.js.map