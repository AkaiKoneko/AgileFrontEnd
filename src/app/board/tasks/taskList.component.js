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
const index_1 = require("../../_models/index");
const alert_service_1 = require("../../_services/alert.service");
const task_service_1 = require("../../_services/task.service");
let TaskListComponent = class TaskListComponent {
    constructor(taskService, alertService) {
        this.taskService = taskService;
        this.alertService = alertService;
        this.onSubmit = new core_1.EventEmitter();
        this.editingTask = false;
    }
    ngOnInit() {
        this.editingTask = false;
        this.taskToEdit = new index_1.Task;
        this.getStatusesName();
    }
    getStatusesName() {
        this.statusesName = [];
        for (let status of this.statuses) {
            console.log(status.name);
            this.statusesName.push({ label: status.name, value: status.name });
        }
    }
    editTask(task) {
        this.editingTask = true;
        this.taskToEdit = task;
        // this.onSubmit.emit(true);
    }
    deleteTask(task) {
        this.taskService.deleteTask(task)
            .subscribe(() => {
            this.onSubmit.emit(true);
            this.alertService.success('Task Deleted', true);
        });
    }
    submitTask() {
        this.taskService.updateTask(this.taskToEdit)
            .subscribe(() => {
            this.onSubmit.emit(true);
            this.alertService.success('Task Edited', true);
            this.editingTask = false;
        });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TaskListComponent.prototype, "tasks", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TaskListComponent.prototype, "statuses", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TaskListComponent.prototype, "onSubmit", void 0);
TaskListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'taskList.component.html',
        // styleUrls : ['project.style.css'],
        selector: 'tasks',
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService, alert_service_1.AlertService])
], TaskListComponent);
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=taskList.component.js.map