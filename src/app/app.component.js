"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Task = (function () {
    function Task() {
    }
    return Task;
}());
exports.Task = Task;
var TASKS = [
    { id: 11, name: 'Zadanie 1', duration: 55 },
    { id: 12, name: 'Zadanie 2', duration: 22 },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular Tast';
        this.tasks = TASKS;
    }
    AppComponent.prototype.onSelect = function (task) {
        this.selectedTask = task;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    \n    \n    <h2>My Tasks</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let task of tasks \" \n          (click)=\"onSelect(task)\" \n          [class.selected]=\"task === selectedTask\">\n        <span class=\"badge\">{{task.id}}</span>{{task.name}}\n      </li>\n    </ul>\n    \n\n    <div *ngIf=\"selectedTask\">\n      <h2>{{selectedTask.name}} details!</h2>\n      <div><label>id: </label>{{selectedTask.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"selectedTask.name\" placeholder=\"name\">\n        <input [(ngModel)]=\"selectedTask.id\" placeholder=\"id\">\n      </div>\n    </div>\n  ",
        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map