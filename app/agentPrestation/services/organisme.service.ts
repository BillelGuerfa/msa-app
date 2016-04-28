import { Injectable } from 'angular2/core';

@Injectable()
export class OrganismeService {

    constructor() { }

}

export interface Organisme{
    idOrganisme: number;
    nom:string;
    email: string;
    numTelephone: string;
    adresse:{};
}