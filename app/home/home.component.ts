import {Component} from 'angular2/core';
import {SiteHeader} from './siteheader.component'

interface Hero{
	id: number;
	name: string;
}
@Component({
    selector: 'home',
    templateUrl: 'home/home.component.html',
    directives: [SiteHeader]
})
export class HomeComponent { 
	public title = 'Tour of Heroes...';
	public hero: Hero = {
		id: 1,
		name: 'Windstorm'
	}
}