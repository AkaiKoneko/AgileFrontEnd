/**
 * Created by Akai on 2017-05-16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
let TaskService = class TaskService {
    constructor(http) {
        this.http = http;
        this.taskUrl = 'http://localhost:8080/api/taskList';
    }
    getTasks(id) {
        return this.http.get(this.taskUrl + id)
            .map((response) => response.json())
            .catch(this.handleError);
    }
    getStoryTasks(id) {
        console.log('s');
        return this.http.get('http://localhost:8080/api/storyTasks' + id, this.header()).map((response) => response.json());
    }
    createTask(task, storyNumber) {
        return this.http.post('http://localhost:8080/api/task' + storyNumber + '/' + task.status, task, this.header()).map((response) => response.json());
    }
    updateTask(task) {
        return this.http.put('http://localhost:8080/api/task', task, this.header()).map((response) => response.json());
    }
    extractData(res) {
        let body = res.json();
        return body.data || {};
    }
    handleError(error) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg;
        if (error instanceof http_1.Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    }
    create(name) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.taskUrl, { name }, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    header() {
        // create authorization header
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            let headers = new http_1.Headers;
            headers.append('Authorization', 'Basic ' + btoa(currentUser.ssoId + ':' + currentUser.password));
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Content-Type', 'application/json');
            return new http_1.RequestOptions({ headers: headers });
        }
    }
};
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map