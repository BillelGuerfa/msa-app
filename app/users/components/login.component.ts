import { Component, OnInit } from 'angular2/core';
import {ROUTER_DIRECTIVES } from "angular2/router";
import {AuthService, Compte} from "../services/auth.service";
declare var jQuery;
@Component({
    selector: 'login',
    templateUrl: 'app/users/views/login.component.html',
    providers: [AuthService],
    directives: [ROUTER_DIRECTIVES] 
})

export class LoginComponent implements OnInit {
    compte: Compte;
    constructor(private _authService: AuthService) { }

    ngOnInit() { 
        
    }
    login(){
        this._authService.login(this.compte).subscribe();
    }
    forget(){
        
    }

}