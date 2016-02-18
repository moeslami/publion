import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {AppConstants} from '../common/constants';
import {Http, Response} from 'angular2/http';

@Component({
    selector: 'login-modal',
    templateUrl: 'login/loginmodal.component.html',
    directives: [TAB_DIRECTIVES, CORE_DIRECTIVES]
})

export class LoginModalComponent {
	
	constructor(private http: Http, private constants: AppConstants){
	    
	}
	
	private personsUrl = constants.apiBaseUrl + '/persons';
	
	Persons: any[];
	
	getPersons(){
	    return this.http.get(this.personsUrl)
	    .map(res => <any[]> res.json().data)
	    .catch(this.handleError);
	}
	
	ngOnInit() {
	    
	}
}