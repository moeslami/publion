import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Hero}           from './hero';
import {Observable}     from 'rxjs/Observable';
import {AppConstants} from '../common/constants';

@Injectable()
export class LoginService {
	
	constructor(private http: Http, private constants: AppConstants){
	    
	}
	
	private personsUrl = constants.apiBaseUrl + '/persons';
	
	getPersons(){
	    return this.http.get(this.personsUrl)
	    .map(res => < Hero[] > res.json().data)
	    .catch(this.handleError);
	}
	
	private handleError(error: Response){
		console.error(error);
    	return Observable.throw(error.json().error || 'Server error');
	}
	
}
//https://angular.io/docs/ts/latest/guide/server-communication.html