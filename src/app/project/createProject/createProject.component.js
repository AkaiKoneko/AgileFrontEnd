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
let CreateProjectComponent = class CreateProjectComponent {
    constructor(router, projectService, alertService) {
        this.router = router;
        this.projectService = projectService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    newProject() {
        this.loading = true;
        this.projectService.create(this.model)
            .subscribe(data => {
            this.alertService.success('Project created', true);
            this.router.navigate(['/myProjects']);
            // TODO emiter eventu odswieżenia widoku
        }, error => {
            this.alertService.error(error);
            this.loading = false;
        });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CreateProjectComponent.prototype, "create", void 0);
CreateProjectComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'create-project',
        templateUrl: 'createProject.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.ProjectService,
        index_1.AlertService])
], CreateProjectComponent);
exports.CreateProjectComponent = CreateProjectComponent;
//# sourceMappingURL=createProject.component.js.map