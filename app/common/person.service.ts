import {Injectable} from 'angular2/core';
import {Personnes} from './person.model';

@Injectable()
export class PersonService {

    private personnes: Personnes[] = [
        {Firstname: 'Experiment 1', Lastname: 'This is an experiment', Email:'ahmed.b.ouezdou@gmail.com'},
        {Firstname: 'Experiment 2', Lastname: 'This is an experiment', Email:'ahmed.b.ouezdou@gmail.com'},
        {Firstname: 'Experiment 3', Lastname: 'This is an experiment', Email:'ahmed.b.ouezdou@gmail.com'}
    ];

    getPersons(): Personnes[] {
        console.log(this.personnes);
        return this.personnes;
    }

    addPersons(person: string[]): void {
        console.log(person);
        this.personnes.push(person);
    }

    getIdPersons(id: number): Personnes {
        return this.personnes[id];
    }
}