import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>',
    directives: [CoursesComponent]
})
export class AppComponent { } 