import {Component} from 'angular2/core';
import {TopNavComponent} from '../shared/topnav.component'

interface Hero{
	id: number;
	name: string;
}
@Component({
    selector: 'home',
    templateUrl: 'home/home.component.html',
    directives: [TopNavComponent]
})
export class HomeComponent { 
	
}