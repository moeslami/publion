import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {AppConstants} from '../common/constants';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class LoginService {
	
	constructor(private http: Http, private appConstants: AppConstants){
	}
	
	private personsUrl = this.appConstants.BaseApiUrl + '/persons';
	
	getPersons(){
	    return this.http.get(this.personsUrl)
			.map(res => <any[]>res.json())
	    	.catch(this.handleError);
	}
	
	private handleError(error: Response){
		console.error(error);
    	return Observable.throw(error.json().error || 'Server error');
	}
	
}