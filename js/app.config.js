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
                        lignesDevis: "./app/data/agentPrestation/lignesDevis.json",
                        devisById: "./app/data/agentPrestation/devisById.json",
                        factures: "./app/data/agentPrestation/factures.json"
                    },
                    medecin: {
                        ordonances: "",
                        ordonance: "./app/data/medecin/ordonance.json",
                        lignesOrdonance: "./app/data/medecin/lignesOrdonance.json"
                    },
                    magasinier: {
                        produits: "./app/data/magasinier/produits.json"
                    },
                    users: {
                        employe: "./app/data/users/employe.json",
                        notifications: "./app/data/users/notifications.json"
                    }
                }
            });
        }
    }
});
//# sourceMappingURL=app.config.js.map