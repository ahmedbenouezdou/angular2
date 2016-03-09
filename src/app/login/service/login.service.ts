import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Injectable()
export class LoginService {
    http:Http;

    constructor(http:Http) {
        this.http = http;
    }

    getProfile():void {
        this.http.get('jsonConfig/profile.json')
            .map(res => res.json())
            .subscribe(people => this.people = people);
    }
}
