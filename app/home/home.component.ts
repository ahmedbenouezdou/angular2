import {Component} from 'angular2/core';


@Component({
  selector: 'home',
  templateUrl: 'app/home/home.component.html'
})

export class HomeComponent {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';

  constructor() { }

}
