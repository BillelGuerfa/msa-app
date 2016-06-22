var hostname = "localhost:8080";
export var config = {
    urls: {
        login: "./app/data/users/compte.json",
        assistante: {
            //patients: "./app/data/assistante/patients.json",
            patients:"http://"+hostname+"/Patients",
            anomalie:"",
            rdvs:"./app/data/assistante/rdvs.json"
        },
        stomatherapeut:{
        },
        agentPrestation:{
            //organismes: "./app/data/agentPrestation/organismes.json",
            organismes: "http://"+hostname+"/Prestations/Organisme",
            //commandes : "./app/data/agentPrestation/commandes.json",
            commandes: "http://"+hostname+"/Prestations/Commande",
            //devis: "./app/data/agentPrestation/devis.json",
            devis:"http://"+hostname+"/Prestations/Devis",
            //lignesDevis : "./app/data/agentPrestation/lignesDevis.json",
            lignesDevis: "http://"+hostname+"/Prestations/ligneDevis",
            devisById: "./app/data/agentPrestation/devisById.json",
            factures: "./app/data/agentPrestation/factures.json"
            
        },
        medecin:{
            ordonances:"http://"+hostname+"/Patients/Ordonance",
            ordonance:"http://"+hostname+"/Patients/Ordonance",
            lignesOrdonance:"http://"+hostname+"/Patients/LigneOrdonance"
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
