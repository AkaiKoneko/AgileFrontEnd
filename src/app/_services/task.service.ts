/**
 * Created by Akai on 2017-05-16.
 */

import { Injectable } from '@angular/core';
import { Http, Response , HttpModule , Headers , RequestOptions } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import{ Task } from '../_models/task';
import  { TASKS } from '../mock-task';

@Injectable()
export class TaskService {

  private taskUrl = 'http://localhost:8080/api/taskList';

  constructor(private http: Http) {}

  getTasks(id: number): Observable<Task[]> {
    console.log(id);
    return this.http.get(this.taskUrl + id)
      .map((response: Response) => <Task[]>response.json())
      .catch(this.handleError);
  }




  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  create(name: string): Observable<Task> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.taskUrl, { name }, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
}
