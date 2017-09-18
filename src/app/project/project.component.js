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
 * Created by Akai on 2017-05-29.
 */
const core_1 = require("@angular/core");
const index_1 = require("../_models/index");
const index_2 = require("../_services/index");
const alert_service_1 = require("../_services/alert.service");
let ProjectComponent = class ProjectComponent {
    constructor(userService, projectService, alertService) {
        this.userService = userService;
        this.projectService = projectService;
        this.alertService = alertService;
        this.projects = [];
        this.selectedProject = new index_1.Project;
        this.showDetails = false;
        this.model = {};
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
        this.loadUserProjects();
        this.items = [
            { label: 'Edit', icon: 'fa-refresh', command: () => {
                    this.editProject = true;
                } },
            { label: 'Delete', icon: 'fa-trash', command: () => {
                    this.delete();
                } },
        ];
    }
    // troche głupię ale działa
    delete() {
        this.projectService.deleteProject(this.selectedProject.id)
            .subscribe(() => {
            this.ngOnInit();
            this.alertService.success('Project removed', true);
        });
    }
    loadUserProjects() {
        this.projectService.getUserProjects(this.currentUser.id).subscribe(projects => { this.projects = projects; });
    }
    showProjectDetails(project) {
        this.selectedProject = project;
        this.showDetails = true;
    }
    onSelect(project) {
        this.selectedProject = project;
        this.showIteration = true;
    }
};
ProjectComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'project.component.html',
        styleUrls: ['project.style.css'],
    }),
    __metadata("design:paramtypes", [index_2.UserService, index_2.ProjectService, alert_service_1.AlertService])
], ProjectComponent);
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map