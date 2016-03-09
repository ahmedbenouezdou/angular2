import {Injectable} from 'angular2/core';
import {Personnes} from '../common/person.model';

@Injectable()
export class PersonService {

    private personnes: Personnes[] = [
        {Firstname: 'Firstname 1', Lastname: 'Lastname1', Email:'Firstname1@gmail.com'},
        {Firstname: 'Firstname 2', Lastname: 'Lastname2', Email:'Firstname2@gmail.com'},
        {Firstname: 'Firstname 3', Lastname: 'Lastname3', Email:'Firstname3@gmail.com'},
        {Firstname: 'Firstname 4', Lastname: 'Lastname4', Email:'Firstname4@gmail.com'}
    ];

    getPersons(): Personnes[] {
        return this.personnes;
    }

    addPersons(person: string[]): void {
        this.personnes.push(person);
    }

    getIdPersons(id: number): Personnes {
        return this.personnes[id];
    }
    
    removePersons(id:number):void{
      this.personnes.splice(id,1);
    }
}
