System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var config;
    return {
        setters:[],
        execute: function() {
            exports_1("config", config = {
                urls: {
                    login: "./app/data/compte.json",
                    assistante: {
                        patients: "./app/data/patients.json",
                        anomalie: ""
                    },
                    stomatherapeut: {},
                    agentPrestation: {},
                    users: {
                        employe: "./app/data/employe.json"
                    }
                }
            });
        }
    }
});
//# sourceMappingURL=app.config.js.map