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
const task_service_1 = require("../_services/task.service");
const user_service_1 = require("../_services/user.service");
let TaskComponent = class TaskComponent {
    constructor(taskService, userService) {
        this.taskService = taskService;
        this.userService = userService;
        this.title = 'Angular Tast';
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    getTasks() {
        this.taskService.getTasks(this.currentUser.id).subscribe(tasks => this.tasks = tasks);
    }
    onSelect(task) {
        this.selectedTask = task;
    }
    ngOnInit() {
        this.getTasks();
    }
};
TaskComponent = __decorate([
    core_1.Component({
        selector: 'my-tasks',
        providers: [task_service_1.TaskService],
        template: `
    <h1>{{title}}</h1>
    
    
    <h2>My Tasks</h2>
    <ul class="heroes">
      <li *ngFor="let task of tasks " 
          (click)="onSelect(task)" 
          [class.selected]="task === selectedTask">
        <span class="badge">{{task.id}}</span>{{task.name}}
      </li>
    </ul>
    
  <task-detail [task]="selectedTask"></task-detail>
    <p><a [routerLink]="['/']">Powrót</a></p>
    
  `,
        styleUrls: ['app/myTask/task.style.css'],
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService, user_service_1.UserService])
], TaskComponent);
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map