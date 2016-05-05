import { Injectable } from 'angular2/core';
import { Http, Response } from "angular2/http";
import {config} from "../../app.config";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
@Injectable()
export class OrganismeService {

    constructor(private _http: Http) { }
    
    getOrganismes() : Observable<Organisme[]>{
        return this._http.get(config.urls.agentPrestation.organismes)
                  .map(organismes => <Organisme[]> organismes.json())
                  .catch(this.handleErrors);
    }
    handleErrors(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}

export interface Organisme{
    idOrganisme: number;
    nom:string;
    email: string;
    numTelephone: string;
    adresse:{};
}