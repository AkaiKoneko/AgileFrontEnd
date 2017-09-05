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
const index_1 = require("../../_models/index");
const task_service_1 = require("../../_services/task.service");
const alert_service_1 = require("../../_services/alert.service");
let NewTaskComponent = class NewTaskComponent {
    constructor(taskService, alertService) {
        this.taskService = taskService;
        this.alertService = alertService;
        this.onSubmit = new core_1.EventEmitter();
        this.model = new index_1.Task();
    }
    ngOnInit() {
    }
    submitTask(f) {
        this.model = f.value;
        console.log(this.model);
        this.taskService.createTask(this.model, this.storyId)
            .subscribe(() => {
            this.createTask = false;
            this.onSubmit.emit(true);
            this.alertService.success('Task Created', true);
        });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], NewTaskComponent.prototype, "storyId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NewTaskComponent.prototype, "onSubmit", void 0);
NewTaskComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'newTask.component.html',
        selector: 'taskForm'
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService, alert_service_1.AlertService])
], NewTaskComponent);
exports.NewTaskComponent = NewTaskComponent;
/**
 * Created by Akai on 2017-06-20.
 */
//# sourceMappingURL=newTask.component.js.map