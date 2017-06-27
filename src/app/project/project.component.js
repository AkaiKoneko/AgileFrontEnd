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
const index_1 = require("../_services/index");
let ProjectComponent = class ProjectComponent {
    constructor(userService, projectService) {
        this.userService = userService;
        this.projectService = projectService;
        this.projects = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
        this.loadUserProjects();
        this.items = [
            { label: 'Update', icon: 'fa-refresh', command: () => {
                    console.log('update');
                } },
            { label: 'Delete', icon: 'fa-close', command: () => {
                    console.log('Delete');
                } },
            { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming'] }
        ];
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
    __metadata("design:paramtypes", [index_1.UserService, index_1.ProjectService])
], ProjectComponent);
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map