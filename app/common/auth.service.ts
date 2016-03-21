
import {Cookie} from 'ng2-cookies';

import { Injectable, Component, provide, ElementRef, Injector,
    IterableDiffers, KeyValueDiffers, Renderer} from 'angular2/core';

import {ModalDialogInstance, ModalConfig, Modal, ICustomModal,
    YesNoModalContent, YesNoModal} from 'angular2-modal';

import {LoginWindow} from '../login/login.window'

@Injectable()
export class AuthService {
    
    
    constructor(private modal: Modal, private elementRef: ElementRef,
                private injector: Injector, private _renderer: Renderer) {}
    
    getAccessToken() : Promise<string> {

        return new Promise<string>((resolve, reject) => {

            var accessCookie = Cookie.getCookie('access-token');

            if (!!accessCookie)
                resolve(accessCookie);

            // user is not authenticated anymore
        
            this.promptForLogin().then(
                (resultPromise) => {
                    resultPromise.result.then((result) => {
                        Cookie.setCookie('access-token', result)
                        resolve(result);
                    });
                }, () => {
                    resolve(null);
                });


             });
    	
    }

    promptForLogin(element: any = null): Promise<ModalDialogInstance> {
        let dialog:  Promise<ModalDialogInstance>;
        let component =  LoginWindow
        
        let bindings = Injector.resolve([
            provide(ICustomModal, {useValue: {}})
        ]);

        if (element) {
            dialog = this.modal.openInside(
                <any>component,
                element,
                'myModal',
                bindings,
                new ModalConfig("lg", true, 27));
        } else{
            dialog = this.modal.open(
                <any>component,
                bindings,
                new ModalConfig("lg", true, 27));
        }

        return dialog;

    }
	
}