/**
 * Created by Akai on 2017-05-31.
 */
/**
 * Created by Akai on 2017-05-29.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Iteration } from '../_models/index';

@Injectable()
export class IterationService {
  constructor(private http: Http) { }

  /* getAll() {
   return this.http.get('http://localhost:8080/api/users', this.header()).map((response: Response) => response.json());
   }*/

  getProjectIterations(id: number) {
    return this.http.get('http://localhost:8080/api/iterationList' + id, this.header()).map((response: Response) => response.json());
  }

  create(iteration: Iteration, currentProject: number) {
    return this.http.post('http://localhost:8080/api/iteration' + currentProject,
      iteration, this.header()).map((response: Response) => response.json());

  }
  deleteIteration(id: number) {
    return this.http.delete('http://localhost:8080/api/iteration' + id, this.header());
  }

  getIterationTaskStatuses(id: number) {
    return this.http.get('http://localhost:8080/api/iteration' + id + '/statuses', this.header()).map((response: Response) => response.json());
  }
  /*
   update(project: Project) {
   return this.http.put('/api/users/' + project.id, project, this.header()).map((response: Response) => response.json());
   }
*/


  private header() {
    // create authorization header
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if ( currentUser) {
      let headers = new Headers;
      headers.append('Authorization', 'Basic ' + btoa(currentUser.ssoId + ':' + currentUser.password));
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Content-Type', 'application/json');
      return new RequestOptions({headers: headers});
    }
  }
}
