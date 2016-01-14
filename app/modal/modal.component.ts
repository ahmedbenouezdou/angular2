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
        this.items = this._PersonService.getPersons();
    }

    constructor(private _PersonService:PersonService) {
    }

    actionSave():void {
        this._PersonService.addPersons(this.person);
        this.person = [];
        $('#myModal').modal('hide');

    }

    actionEdit(index:number):void {
        this.person = this._PersonService.getIdPersons(index);
    }
    
    actionRemove(index:number):void{
      this.items = this._PersonService.removePersons(index);
    }
}
