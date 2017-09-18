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
const iteration_service_1 = require("../../_services/iteration.service");
const iteration_1 = require("../../_models/iteration");
let IterationDetailComponent = class IterationDetailComponent {
    constructor(iterationService, route, location) {
        this.iterationService = iterationService;
        this.route = route;
        this.location = location;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", iteration_1.Iteration)
], IterationDetailComponent.prototype, "iteration", void 0);
IterationDetailComponent = __decorate([
    core_1.Component({
        selector: 'iteration-detail',
        templateUrl: 'app/project/iterationDetails/details.component.html',
    }),
    __metadata("design:paramtypes", [iteration_service_1.IterationService,
        router_1.ActivatedRoute,
        common_1.Location])
], IterationDetailComponent);
exports.IterationDetailComponent = IterationDetailComponent;
//# sourceMappingURL=iteration-details.component.js.map