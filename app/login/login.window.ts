import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {HttpService} from '../common/http.service';

import {Modal, ModalDialogInstance, ICustomModal, ICustomModalComponent} from 'angular2-modal/angular2-modal';

@Component({
    selector: 'login-window',
    directives: [CORE_DIRECTIVES],
    templateUrl: 'login/login.window.html',
})



export class LoginWindow implements ICustomModalComponent {
    
    // dialog: ModalDialogInstance;

    // public accessToken: string;
    // public errorMsg: string;

    constructor(dialog: ModalDialogInstance, private httpService: HttpService) {
        this.dialog = dialog;
    }
    
    dialog: ModalDialogInstance;

    login(){


        var accessToken = "token goes here";
       
        this.dialog.close(accessToken);
    }
    
    signup(){
        debugger;
        this.httpService.post('users', this.user, true)
            .map(res => <any>res.json())
            .subscribe(
            data => {
                debugger;
                console.log(data + ' is returned from the server')
            },
            err => console.error(err),
            () => console.log('registration complete!')
            );
    }
    
    cancel(){
        //this.accessToken = '';
        this.dialog.close();
    }

    // onKeyUp(value) {
    //     /* tslint:disable */ this.wrongAnswer = value != 5;
    //     this.dialog.close();
    // }


    beforeDismiss(): boolean {
        return true;
    }

    beforeClose(): boolean {
        return true;
    }

    private user: User;
}

class User {
    email: string;
    password: string;
}