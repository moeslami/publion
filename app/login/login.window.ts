import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {Modal, ModalDialogInstance, ICustomModal, ICustomModalComponent} from 'angular2-modal';

@Component({
    selector: 'login-window',
    directives: [CORE_DIRECTIVES],
    templateUrl: 'login/login.window.html',
})
export class LoginWindow implements ICustomModalComponent {
    
    dialog: ModalDialogInstance;

    public accessToken: string;
    public errorMsg: string;

    constructor(dialog: ModalDialogInstance, modelContentData: ICustomModal) {
        this.dialog = dialog;
        this.accessToken = true;
    }
    
    login(){
        this.accessToken = "token goes here";
       
        this.dialog.close();
    }
    
    signup(){
        // register and then login automatically 
         this.accessToken = "token goes here";
        this.dialog.close();
    }
    
    cancel(){
        this.accessToken = '';
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
}