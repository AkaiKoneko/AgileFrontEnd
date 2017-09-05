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
/**
 * Created by Akai on 2017-05-31.
 */
/**
 * Created by Akai on 2017-05-29.
 */
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
let IterationService = class IterationService {
    constructor(http) {
        this.http = http;
    }
    /* getAll() {
     return this.http.get('http://localhost:8080/api/users', this.header()).map((response: Response) => response.json());
     }*/
    getProjectIterations(id) {
        return this.http.get('http://localhost:8080/api/iterationList' + id, this.header()).map((response) => response.json());
    }
    create(iteration, currentProject) {
        return this.http.post('http://localhost:8080/api/iteration' + currentProject, iteration, this.header()).map((response) => response.json());
    }
    deleteIteration(id) {
        return this.http.delete('http://localhost:8080/api/iteration' + id, this.header());
    }
    getIterationTaskStatuses(id) {
        return this.http.get('http://localhost:8080/api/iteration' + id + '/statuses', this.header()).map((response) => response.json());
    }
    /*
     update(project: Project) {
     return this.http.put('/api/users/' + project.id, project, this.header()).map((response: Response) => response.json());
     }
  */
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
IterationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], IterationService);
exports.IterationService = IterationService;
//# sourceMappingURL=iteration.service.js.map