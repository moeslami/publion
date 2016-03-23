import {AppConstants} from './constants';
import {HTTP_PROVIDERS} from 'angular2/http';
import { Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {AuthService} from './auth.service';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

interface HttpCall{
    (accessToken: string): Observable<Response>
}

@Injectable()
export class HttpService{

    constructor(
        private http: Http, 
        private appConstants: AppConstants,
        private authService: AuthService){
            
        }

    get(resource: string, anonymous: boolean = false): Observable<Response>{
        
        return this.authenticateAndCall(anonymous, 
            (accessToken: string) => { 
                var url = this.appConstants.BaseApiUrl + '/' + resource;

                if (accessToken)
                    url = url + '?access-token=' + accessToken;

                var headers = new Headers();
                headers.append('Content-Type', 'application/json');

                return this.http.get(url,
                    { headers: headers }); 
        });
    }
    
    post(resource: string, data: any, anonymous: boolean = false) {

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.appConstants.BaseApiUrl + '/' + resource,
            JSON.stringify(data),
            { headers: headers });
    }
    
    put(resource: string, data: any, anonymous: boolean = false) {
        
    }
    
    delete(resource: string, id: any, anonymous: boolean = false) {
        
    }

    private authenticateAndCall(anonymouse: boolean, httpCall: HttpCall)
        : Observable<Response> {
        
        if(anonymouse)
            return httpCall('');

        return this.authService.getAccessToken().then(accessToken => {
            return httpCall(accessToken);
         });
    }
}