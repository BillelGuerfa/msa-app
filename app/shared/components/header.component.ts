import { Component, OnInit } from 'angular2/core';
import {NavComponent} from "./nav.component";
@Component({
    selector: 'appheader',
    templateUrl: 'app/shared/views/header.component.html',
    directives: [NavComponent] 
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}