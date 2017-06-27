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
const index_1 = require("../../_services/index");
const router_1 = require("@angular/router");
let IterationComponent = class IterationComponent {
    constructor(iterationService, projectService, router) {
        this.iterationService = iterationService;
        this.projectService = projectService;
        this.router = router;
        this.iterations = [];
    }
    ngOnInit() {
        this.loadProjectIteration(this.currentProject);
        this.createIteration = false;
    }
    // to dziala tak jak mysle
    ngOnChanges() {
        this.loadProjectIteration(this.currentProject);
    }
    loadProjectIteration(projectId) {
        this.iterationService.getProjectIterations(projectId).subscribe(iterations => { this.iterations = iterations; });
    }
    goToBoard(iterationId) {
        this.router.navigate(['/kanbanBoard',], { queryParams: { iterationId: iterationId } });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], IterationComponent.prototype, "currentProject", void 0);
IterationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'iteration.component.html',
        styleUrls: ['../project.style.css'],
        selector: 'iteration',
    }),
    __metadata("design:paramtypes", [index_1.IterationService, index_1.ProjectService, router_1.Router])
], IterationComponent);
exports.IterationComponent = IterationComponent;
//# sourceMappingURL=iteration.component.js.map