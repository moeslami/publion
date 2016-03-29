import {Injectable}     from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {AppConstants} from '../common/constants';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class LoginService {
	
	constructor(private http: Http, private appConstants: AppConstants){
		
	}
	
	promptForLogin(){

	}
	
	getUsers(){
	    return this.http.get(this.appConstants.BaseApiUrl + '/users')
			.map(res => <any[]> res.json())
	    	.catch(this.handleError);
	}
	
	registerUser(user){
	
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post(this.appConstants.BaseApiUrl + '/users', JSON.stringify(user), {
			headers: headers
		})
		.map(res => <any> res.json())
		.subscribe(
			data => console.log(data + ' is returned from the server'),
			err => console.error(err),
			() => console.log('registration complete!')
		);
	}
	
	private handleError(error: Response){
		console.error(error);
    	return Observable.throw(error.json().error || 'Server error');
	}	
}