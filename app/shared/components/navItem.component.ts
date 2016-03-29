import { Component, OnInit, Input } from 'angular2/core';
import {ROUTER_DIRECTIVES } from "angular2/router";
import {Feature} from "../../users/services/feature.service";
@Component({
    selector: '.nav-item',
    templateUrl: 'app/shared/views/navItem.component.html',
    directives: [ROUTER_DIRECTIVES] 
})

export class NavItemComponent implements OnInit {
    @Input() feature: Feature;
    constructor() { }

    ngOnInit() { }

}