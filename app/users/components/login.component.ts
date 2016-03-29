import { Component, OnInit } from 'angular2/core';
import {ROUTER_DIRECTIVES,Router } from "angular2/router";
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
    error;
    constructor(private _authService: AuthService, private _router: Router) { 
        this.compte = {nomUtilisateur : "" , motDePasse: ""};
    }
        
    ngOnInit() { 
        
    }
    login(){
        this._authService.login(this.compte)
                         .subscribe( compte => {
                             this.compte = compte;
                             console.log(compte);
                             this._router.navigate(['Home']);
                         },
                         error =>  this.error = error);
    }
    forget(){
        
    }

}