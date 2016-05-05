System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var config;
    return {
        setters:[],
        execute: function() {
            exports_1("config", config = {
                urls: {
                    login: "./app/data/users/compte.json",
                    assistante: {
                        patients: "./app/data/assistante/patients.json",
                        anomalie: "",
                        rdvs: "./app/data/assistante/rdvs.json"
                    },
                    stomatherapeut: {},
                    agentPrestation: {
                        organismes: "./app/data/agentPrestation/organismes.json",
                        commandes: "./app/data/agentPrestation/commandes.json",
                        devis: "./app/data/agentPrestation/devis.json",
                        factures: "./app/data/agentPrestation/factures.json"
                    },
                    users: {
                        employe: "./app/data/users/employe.json"
                    }
                }
            });
        }
    }
});
//# sourceMappingURL=app.config.js.map