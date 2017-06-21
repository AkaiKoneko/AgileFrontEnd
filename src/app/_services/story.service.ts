/**
 * Created by Akai on 2017-05-31.
 */

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Story } from '../_models/index'

@Injectable()
export class StoryService {
  constructor(private http: Http) { }


  getIterationStories(id: number) {
    return this.http.get('http://localhost:8080/api/storyList' + id, this.header()).map((response: Response) => response.json());
  }

  createStory(story: Story, iterationId: number) {
    return this.http.post('http://localhost:8080/api/story' + iterationId, story, this.header()).map((response: Response) => response.json());
  }
  private header() {
    // create authorization header
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      let headers = new Headers;
      headers.append('Authorization', 'Basic ' + btoa(currentUser.ssoId + ':' + currentUser.password));
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Content-Type', 'application/json');
      return new RequestOptions({headers: headers});
    }
  }
}
