import {Component, OnInit} from 'angular2/core';
import {TopNavComponent} from '../layout/topnav.component'
import {HttpService} from '../common/http.service'

@Component({
    selector: 'home',
    templateUrl: 'home/home.component.html',
    directives: [TopNavComponent]
})
export class HomeComponent implements OnInit { 

	constructor(private httpService: HttpService ){

	}

	ngOnInit() {
		debugger;
		var res = this.httpService.get('users');
		console.log('hello');
	}
}