import {Component, Input,EventEmitter} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {PersonService} from '../../common/person.service';


@Component({
    selector: 'modal-user',
    templateUrl: 'app/user/modalUser/modalUser.tmp.html',
    outputs: ['actionModal']
})

export class ModalUserComponent {

    @Input() person:string = [];
    actionModal: EventEmitter<any>;
    constructor(private _PersonService:PersonService) {

        this.actionModal= new EventEmitter();
    }

    actionSave():void {
        this._PersonService.addPersons(this.person);
        this.person = [];
        $('#myModal').modal('hide');
    }

    actionEditModal():void{
        console.log("coucou")
    }
}