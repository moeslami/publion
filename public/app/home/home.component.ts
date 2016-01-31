import {Component} from 'angular2/core';

interface Hero{
	id: number;
	name: string;
}
@Component({
    selector: 'home-comp',
    templateUrl: '/app/home/home.component.html'
})
export class HomeComponent { 
	public title = 'Tour of Heroes';
	public hero: Hero = {
		id: 1,
		name: 'Windstorm'
	}
}