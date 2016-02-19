import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup,Control} from 'angular2/common';
import {ProfileService} from '../common/profile.service';
import {Personnes} from '../common/person.model';


@Component({
    selector: 'profil',
    templateUrl: 'app/profil/profil.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})


export class ProfileComponent {

    profileUser:Personnes;
    profilForm:ControlGroup;

    _ProfileService:ProfileService;

    constructor(builder:FormBuilder, private _ProfileService:ProfileService) {
        this.profileUser = this._ProfileService.getProfile();
        this.profilForm = <ControlGroup>builder.group(
            {
                Firstname: [""+this.profileUser.Firstname, Validators.required],
                Lastname: ["jknslgr", Validators.required],
                Email: [""],
                Age: ["", this.getControlValidAge(5, 100)]

            }
        );
    }

    getControlValidAge(min, max) {
        return function (c:Control):any {
            if (c.value) {
                var val = parseInt(c.value);
                //it's a number ?
                if (isNaN(val)) {
                    return {
                        number: true
                    }
                }
                //it's higher than min
                if (val < min) {
                    return {
                        min: true
                    }
                }
                //it's lower than max
                if (val > max) {
                    return {
                        max: true
                    }
                }
            }
            // Null means valid
            return null

        }
    }

}

