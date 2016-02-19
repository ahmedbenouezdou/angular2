import {Injectable} from 'angular2/core';
import {Personnes} from './person.model';

@Injectable()
export class ProfileService {

    private personne:Personnes;

    getProfile():Personnes {
        this.personne={
            Firstname :"Firstname 1",
            Lastname : "Lastname1",
            Email : "Firstname1@gmail.com"
        }
        console.log("dans l'object",this.personne)
         return this.personne;
    }

    updateProfile():void {

    }
}
