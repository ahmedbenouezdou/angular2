import{Pipe} from "angular2/core"
import {Personnes} from '../common/person.model';


@Pipe({
    name: "userFilter"
})

export class UserPipe {
    transform(input:Object[], args:string[]): Object[] {
        let query = args[0];
        if (query) {
            query = query.toLowerCase();
            return input.filter((userList) => {
                const Firstname = userList.Firstname.toLowerCase();
                return Firstname.indexOf(query) >= 0;
            });
        } else {
            return input;
        }
    }
}