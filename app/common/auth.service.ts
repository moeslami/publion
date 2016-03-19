import {Injectable} from 'angular2/core';
import {Cookie} from 'ng2-cookies';
import {LoginService} from '../login/login.service'
@Injectable()
export class AuthService {
    
    constructor(private loginService : LoginService){
    	
    }
    
    getAccessToken(){
    	var accessCookie = Cookie.getCookie('access-token');
    	
    	if(!!accessCookie)
    		return accessCookie;
    	
    	// user is not authenticated anymore
    	
    	this.loginService.openDialog().then(
    		(resultPromise) => {
    			return resultPromise.result.then((result) => {
    				Cookie.setCookie('access-token', result)
    			});
    		}, () => {

    		});
    	
    }
	
}