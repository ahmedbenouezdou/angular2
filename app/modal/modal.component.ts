import {Component, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {PersonService} from '../common/person.service';
import {Personnes} from '../common/person.model';


@Component({
    selector: 'modal',
    templateUrl: 'app/modal/modal.component.html'
})

export class ModalComponent {
    items:Personnes;
    @Input() person:string = [];

    ngOnInit() {
        console.log(this.items);
        this.items = this._PersonService.getPersons();
        console.log(this.items);
    }

    constructor(private _PersonService:PersonService) {
    }

    actionSave():void {
        this._PersonService.addPersons(this.person);
        this.person = [];
        $('#myModal').modal('hide');

    }

    actionEdit(index:number):void {
        console.log(index);
        this.person = this._PersonService.getIdPersons(index);
    }
}
