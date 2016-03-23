import { Component, OnInit } from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES  } from "angular2/router";
import {LoginComponent} from "./users/components/login.component";
import {HeaderComponent} from "./shared/components/header.component";
@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html",
   directives: [ROUTER_DIRECTIVES , HeaderComponent]
})

@RouteConfig([
    //{ path: '/login', as: 'Login', component: LoginComponent, useAsDefault: true},
    //{ path: '/login', as: 'Login', component: LoginComponent , useAsDefault: true}
])
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}