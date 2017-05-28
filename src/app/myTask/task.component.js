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
var core_1 = require("@angular/core");
var task_service_1 = require("../_services/task.service");
var user_service_1 = require("../_services/user.service");
var TaskComponent = (function () {
    function TaskComponent(taskService, userService) {
        this.taskService = taskService;
        this.userService = userService;
        this.title = 'Angular Tast';
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    TaskComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks(this.currentUser.id).subscribe(function (tasks) { return _this.tasks = tasks; });
    };
    TaskComponent.prototype.onSelect = function (task) {
        this.selectedTask = task;
    };
    TaskComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    return TaskComponent;
}());
TaskComponent = __decorate([
    core_1.Component({
        selector: 'my-tasks',
        providers: [task_service_1.TaskService],
        template: "\n    <h1>{{title}}</h1>\n    \n    \n    <h2>My Tasks</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let task of tasks \" \n          (click)=\"onSelect(task)\" \n          [class.selected]=\"task === selectedTask\">\n        <span class=\"badge\">{{task.id}}</span>{{task.name}}\n      </li>\n    </ul>\n    \n  <task-detail [task]=\"selectedTask\"></task-detail>\n    \n  ",
        styleUrls: ['app/myTask/task.style.css'],
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService, user_service_1.UserService])
], TaskComponent);
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map