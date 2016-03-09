import {Component, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {PersonService} from './service/person.service';
import {Personnes} from '../common/person.model';
import {ModalUserComponent} from './modalUser/ModalUser.component';
import {UserPipe} from './pipe/user.pipe'

@Component({
    selector: 'user',
    templateUrl: 'app/user/user.html',
    directives:[ModalUserComponent],
    pipes:[UserPipe]
})

export class UserComponent {
    userList:Personnes;
    modaluser:ModalUserComponent
    ngOnInit() {
        this.userList = this._PersonService.getPersons();
    }

    constructor(private _PersonService:PersonService) {
    }

    actionEdit(index:number):void {
        console.log(index)
        this.modaluser.actionEditModal()
     //  this.userList = this._PersonService.getIdPersons(index);
    }

    actionRemove(index:number):void{
        this.userList = this._PersonService.removePersons(index);
    }
}