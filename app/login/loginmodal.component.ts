import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {AppConstants} from '../common/constants';
import {HTTP_PROVIDERS} from 'angular2/http';
import {LoginService} from './login.service';

@Component({
    selector: 'login-modal',
    templateUrl: 'login/loginmodal.component.html',
    directives: [TAB_DIRECTIVES, CORE_DIRECTIVES],
    providers: [LoginService, HTTP_PROVIDERS, AppConstants]
})

export class LoginModalComponent implements OnInit {
	
	constructor(private loginService: LoginService){
	    
	}

	ngOnInit() { 
		this.getPersons(); 
	}

	getPersons(){
		this.loginService.getPersons()
			.subscribe(p => this.persons = p);
	}
	
	persons:any[];
	
}