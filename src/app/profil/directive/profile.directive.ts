import {Directive, ElementRef,EventEmitter,Inject} from 'angular2/core';
@Directive({
    selector: '[afficheImage]',
    inputs: ['message'],
    host: {
        '(mouseenter)': 'onmouseEnter()',
        '(mouseleave)': 'onmouseLeave()',
        '(click)':'onClick($event)'

    }
})
export class Highlight {

}