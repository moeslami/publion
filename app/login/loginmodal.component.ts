import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {AppConstants} from '../common/constants';
import {HTTP_PROVIDERS} from 'angular2/http';
import {LoginService} from '../common/login.service';

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
		
	}

	// getUsers(){
	// 	this.loginService.getUsers()
	// 		.subscribe(users => this.users = users);
	// }
	
	login(){
		
	}
	
	register(){
		this.loginService.registerUser(this.currentUser);
	}
	
	users:any[];
	currentUser:any = {};
	
}