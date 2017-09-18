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
const alert_service_1 = require("../../_services/alert.service");
let IterationComponent = class IterationComponent {
    constructor(iterationService, projectService, router, alertService) {
        this.iterationService = iterationService;
        this.projectService = projectService;
        this.router = router;
        this.alertService = alertService;
        this.iterations = [];
        this.showDetails = false;
    }
    ngOnInit() {
        this.createIteration = false;
        this.items = [
            { label: 'Details', icon: 'fa-cog', command: () => {
                    this.showDetails = true;
                } },
            { label: 'Edit', icon: 'fa-refresh', command: () => {
                    console.log('update' + this.selectedIteration.id);
                } },
            { label: 'Delete', icon: 'fa-trash', command: () => {
                    this.delete();
                } },
        ];
    }
    delete() {
        this.iterationService.deleteIteration(this.selectedIteration.id)
            .subscribe(() => {
            this.ngOnInit();
            this.alertService.success('Iteration removed', true);
        });
    }
    ngOnChanges() {
        this.loadProjectIteration(this.currentProject);
    }
    loadProjectIteration(projectId) {
        this.iterationService.getProjectIterations(projectId).subscribe(iterations => {
            this.iterations = iterations;
            this.loadIterationAvailableTaskStatues();
        });
    }
    loadIterationAvailableTaskStatues() {
        for (let iteration of this.iterations) {
            this.iterationService.getIterationTaskStatuses(iteration.id).subscribe(statues => { iteration.statues = statues; });
        }
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
    __metadata("design:paramtypes", [index_1.IterationService, index_1.ProjectService, router_1.Router, alert_service_1.AlertService])
], IterationComponent);
exports.IterationComponent = IterationComponent;
//# sourceMappingURL=iteration.component.js.map