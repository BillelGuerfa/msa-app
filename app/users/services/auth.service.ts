import { Injectable } from 'angular2/core';
import {Http} from "angular2/http";
import {Compte} from "./compte.service";
@Injectable()
export class AuthService {
    
    
    constructor(public session_id) { 
        session_id = sessionStorage.getItem("session_id");
    }
    login(compte: Compte){
        return null;
    }
    isLogged(){
        return null;
    }
}