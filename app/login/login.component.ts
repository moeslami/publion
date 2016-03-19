import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {AppConstants} from '../common/constants';
import {HTTP_PROVIDERS} from 'angular2/http';
import {LoginService} from './login.service';
import {ModalDialogInstance, ModalConfig, Modal, ICustomModal,
    YesNoModalContent, YesNoModal} from 'angular2-modal';

@Component({
    selector: 'login',
    templateUrl: 'login/login.component.html',
    directives: [TAB_DIRECTIVES, CORE_DIRECTIVES],
    providers: [LoginService, HTTP_PROVIDERS, AppConstants]
})

export class LoginModalComponent implements OnInit {
	
	constructor(private loginService: LoginService){
	    
	}

	ngOnInit() { 
		
	}

    openDialog(type: string) {
    	
    let dialog:  Promise<ModalDialogInstance>;
    let component = (type === 'customWindow') ? AdditionCalculateWindow : YesNoModal;
    
    let bindings = Injector.resolve([
        provide(ICustomModal, {useValue: DemoPage.modalData[type]})
    ]);

    if (type === 'inElement') {
        dialog = this.modal.openInside(
            <any>component,
            this.mySampleElement,
            'myModal',
            bindings,
            DemoPage.modalConfigs[type]);
    } else
        dialog = this.modal.open(
            <any>component,
            bindings,
            DemoPage.modalConfigs[type]);


    dialog.then((resultPromise) => {
        return resultPromise.result.then((result) => {
            this.lastModalResult = result;
        }, () => this.lastModalResult = 'Rejected!');
    });
}
	
}