import { Component, OnInit } from "angular2/core";
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES  } from "angular2/router";
import {LoginComponent} from "./users/login.component";
@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html",
   directives: [ROUTER_DIRECTIVES ] ,
    providers: [ROUTER_PROVIDERS ]
})
@RouteConfig([
    { path: '/login', as: 'Login', component: LoginComponent, useAsDefault: true},
    //{ path: '/login', as: 'Login', component: LoginComponent , useAsDefault: true}
])
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}