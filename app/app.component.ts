import { Component, OnInit } from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES  } from "angular2/router";
import {LoginComponent} from "./users/components/login.component";
import {HomeComponent} from "./shared/components/home.component";
@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html",
   directives: [ROUTER_DIRECTIVES , HomeComponent]
})

@RouteConfig([
    { path: '/', as: 'Home', component: HomeComponent, useAsDefault: true},
    //{ path: '/login', as: 'Login', component: LoginComponent , useAsDefault: true}
])
export class AppComponent implements OnInit {
    constructor() { }
    
    ngOnInit() { }

}