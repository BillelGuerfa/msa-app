import { Component, OnInit } from 'angular2/core';
import { HeaderComponent} from "./header.component";
import { FooterComponent} from "./footer.component";
import {CalendrierComponent} from "../../assistante/components/calendrier.component";
@Component({
    selector: 'home',
    templateUrl: 'app/shared/views/home.component.html',
    directives: [HeaderComponent, FooterComponent, CalendrierComponent] 
})

export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}