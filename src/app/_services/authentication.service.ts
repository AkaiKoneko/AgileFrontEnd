import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
      let headers: Headers = new Headers;
      headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
      headers.append('Access-Control-Allow-Origin', '*');
      // headers.append('Access-Control-Allow-Credentials', 'true');
      headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/api/login', JSON.stringify({ ssoId: username}), {headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
               // if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
              //  }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
