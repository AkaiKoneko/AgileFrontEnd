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
const index_1 = require("../../_services/index");
const project_1 = require("../../_models/project");
let EditProjectComponent = class EditProjectComponent {
    constructor(router, projectService, alertService) {
        this.router = router;
        this.projectService = projectService;
        this.alertService = alertService;
        this.onSubmit = new core_1.EventEmitter();
        this.model = {};
    }
    changeProject(f) {
        this.model = f.value;
        this.projectService.updateProject(this.model)
            .subscribe(() => {
            this.alertService.success('Project updated', true);
            this.onSubmit.emit(true);
        });
        this.edit = false;
        this.onSubmit.emit(true);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], EditProjectComponent.prototype, "edit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", project_1.Project)
], EditProjectComponent.prototype, "projectToEdit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditProjectComponent.prototype, "onSubmit", void 0);
EditProjectComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'edit-project',
        templateUrl: 'editProject.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.ProjectService,
        index_1.AlertService])
], EditProjectComponent);
exports.EditProjectComponent = EditProjectComponent;
/**
 * Created by Akai on 2017-09-05.
 */
//# sourceMappingURL=editProject.component.js.map