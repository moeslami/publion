import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'login-modal',
    templateUrl: 'shared/loginmodal.component.html',
    directives: [TAB_DIRECTIVES, CORE_DIRECTIVES]
})



export class LoginModalComponent {
	
}