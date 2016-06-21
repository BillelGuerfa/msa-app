export var config = {
    urls: {
        login: "./app/data/users/compte.json",
        assistante: {
            //patients: "./app/data/assistante/patients.json",
            patients:"http://localhost:8080/Patients",
            anomalie:"",
            rdvs:"./app/data/assistante/rdvs.json"
        },
        stomatherapeut:{
        },
        agentPrestation:{
            organismes: "./app/data/agentPrestation/organismes.json",
            commandes : "./app/data/agentPrestation/commandes.json",
            //devis: "./app/data/agentPrestation/devis.json",
            devis:"http://localhost:8080/Prestations/Devis",
            //lignesDevis : "./app/data/agentPrestation/lignesDevis.json",
            lignesDevis: "http://localhost:8080/Prestations/ligneDevis",
            devisById: "./app/data/agentPrestation/devisById.json",
            factures: "./app/data/agentPrestation/factures.json"
            
        },
        medecin:{
            ordonances:"http://localhost:8080/Patients/Ordonance",
            ordonance:"http://localhost:8080/Patients/Ordonance",
            lignesOrdonance:"http://localhost:8080/Patients/LigneOrdonance"
        },
        magasinier:{
            produits:"./app/data/magasinier/produits.json"
        },
        users:{
            employe: "./app/data/users/employe.json",
            notifications: "./app/data/users/notifications.json"
        }
    }
};
