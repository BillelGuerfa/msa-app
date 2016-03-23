import { Component, OnInit } from 'angular2/core';
import { HeaderComponent} from "./header.component";
@Component({
    selector: 'home',
    templateUrl: 'app/shared/views/home.component.html',
    directives: [HeaderComponent] 
})

export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}