import { Component, OnInit } from 'angular2/core';
import {Commande} from "../services/commande.service";
@Component({
    selector: 'liste-commandes',
    templateUrl: 'app/agentPrestation/views/listeCommandes.component.html'
})

export class ListeCommandesComponent implements OnInit {
    commandes: Commande[];
    constructor() { }

    ngOnInit() { }

}