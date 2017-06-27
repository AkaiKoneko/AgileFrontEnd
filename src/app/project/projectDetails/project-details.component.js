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
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const project_service_1 = require("../../_services/project.service");
const project_1 = require("../../_models/project");
let ProjectDetailComponent = class ProjectDetailComponent {
    constructor(projectService, route, location) {
        this.projectService = projectService;
        this.route = route;
        this.location = location;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", project_1.Project)
], ProjectDetailComponent.prototype, "project", void 0);
ProjectDetailComponent = __decorate([
    core_1.Component({
        selector: 'project-detail',
        templateUrl: 'app/project/projectDetails/details.component.html',
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService,
        router_1.ActivatedRoute,
        common_1.Location])
], ProjectDetailComponent);
exports.ProjectDetailComponent = ProjectDetailComponent;
//# sourceMappingURL=project-details.component.js.map