import {Component} from 'angular2/core';

@Component({
    selector: 'top-nav',
    templateUrl: 'shared/topnav.component.html'
})
export class TopNavComponent { 
	public loginTitle = 'Welcome Mohammad!';
}