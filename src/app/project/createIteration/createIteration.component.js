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
const iteration_service_1 = require("../../_services/iteration.service");
const iteration_1 = require("../../_models/iteration");
let CreateIterationComponent = class CreateIterationComponent {
    constructor(router, iterationService, alertService) {
        this.router = router;
        this.iterationService = iterationService;
        this.alertService = alertService;
        this.onSubmit = new core_1.EventEmitter();
        this.model = new iteration_1.Iteration();
        this.loading = false;
    }
    newIteration() {
        this.loading = true;
        this.iterationService.create(this.model, this.currentProject)
            .subscribe(data => {
            this.alertService.success('Iteration created', true);
            this.onSubmit.emit(true);
            this.createIteration = false;
        }, error => {
            this.alertService.error(error);
            this.loading = false;
        });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CreateIterationComponent.prototype, "createIteration", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CreateIterationComponent.prototype, "currentProject", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CreateIterationComponent.prototype, "onSubmit", void 0);
CreateIterationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'create-iteration',
        templateUrl: 'createIteration.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        iteration_service_1.IterationService,
        index_1.AlertService])
], CreateIterationComponent);
exports.CreateIterationComponent = CreateIterationComponent;
//# sourceMappingURL=createIteration.component.js.map