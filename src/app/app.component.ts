import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './home/home.component';

import {UserComponent} from './user/user.component';
import {PersonService} from './user/service/person.service';

import {ProfileComponent} from './profil/profil.component';
import {ProfileService} from './profil/service/profile.service';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [PersonService,ProfileService]
})

@RouteConfig([
    {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/user', name: 'User', component: UserComponent},
    {path: '/profile', name: 'Profile', component: ProfileComponent}
])

export class AppComponent {

}
