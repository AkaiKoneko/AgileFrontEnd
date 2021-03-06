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
require("rxjs/add/operator/switchMap");
const task_service_1 = require("./_services/task.service");
const task_1 = require("./_models/task");
let TaskDetailComponent = class TaskDetailComponent {
    constructor(taskService, route, location) {
        this.taskService = taskService;
        this.route = route;
        this.location = location;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", task_1.Task)
], TaskDetailComponent.prototype, "task", void 0);
TaskDetailComponent = __decorate([
    core_1.Component({
        selector: 'task-detail',
        template: `
    <div *ngIf="task">
      <h2>{{task.name}} details!</h2>
      <div><label>id: </label>{{task.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="task.name" placeholder="name">
        <input [(ngModel)]="task.id" placeholder="id">
      </div>
    </div>
  `
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService,
        router_1.ActivatedRoute,
        common_1.Location])
], TaskDetailComponent);
exports.TaskDetailComponent = TaskDetailComponent;
//# sourceMappingURL=task-detail.component.js.map