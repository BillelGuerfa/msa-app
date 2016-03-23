import { Component, OnInit } from "angular2/core";
import {Router , RouteConfig } from "angular2/router";
@Component({
    selector: 'my-app',
    template: '<h1> Hello world</h1>'
})
@RouteConfig([
    { path: '/home', as: 'Home', component: AppComponent }
])
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}