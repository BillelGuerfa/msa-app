import { Component, OnInit, AfterViewInit  } from 'angular2/core';
import {ROUTER_DIRECTIVES,Router } from "angular2/router";
import {AuthService, Compte} from "../services/auth.service";
declare var jQuery;
declare var $;
@Component({
    selector: 'login',
    templateUrl: 'app/users/views/login.component.html',
    providers: [AuthService],
    directives: [ROUTER_DIRECTIVES] 
})

export class LoginComponent implements OnInit, AfterViewInit  {
    compte: Compte;
    error;
    constructor(private _authService: AuthService, private _router: Router) { 
        this.compte = {nomUtilisateur : "" , motDePasse: ""};
    }
    ngOnInit() { 
        
    }
    ngAfterViewInit(){
        
    }
    login(){
        this._authService.login(this.compte)
                         .subscribe( compte => {
                             this.compte = compte;
                             window.location.pathname = "/"
                         },
                         error =>  this.error = error);
    }
    forget(){
        
    }
    

}