"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var task_detail_component_1 = require("./task-detail.component");
var project_details_component_1 = require("./project/projectDetails/project-details.component");
var task_component_1 = require("./myTask/task.component");
var task_service_1 = require("./_services/task.service");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var index_1 = require("./_services/index");
var index_2 = require("./_directives/index");
var index_3 = require("./_guards/index");
var index_4 = require("./login/index");
var index_5 = require("./home/index");
var index_6 = require("./register/index");
var intex_1 = require("./project/intex");
var index_7 = require("./board/index");
var createProject_component_1 = require("./project/createProject/createProject.component");
var iteration_component_1 = require("./project/projectDetails/iteration/iteration.component");
var taskList_component_1 = require("./board/tasks/taskList.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing,
        ],
        providers: [
            task_service_1.TaskService,
            index_1.UserService,
            index_1.AlertService,
            index_1.AuthenticationService,
            index_1.ProjectService,
            index_1.IterationService,
            index_1.StoryService,
            index_3.AuthGuard
        ],
        declarations: [
            app_component_1.AppComponent,
            index_2.AlertComponent,
            createProject_component_1.CreateProjectComponent,
            task_detail_component_1.TaskDetailComponent,
            project_details_component_1.ProjectDetailComponent,
            task_component_1.TaskComponent,
            index_5.HomeComponent,
            index_4.LoginComponent,
            index_6.RegisterComponent,
            intex_1.ProjectComponent,
            iteration_component_1.IterationComponent,
            index_7.BoardComponent,
            taskList_component_1.TaskListComponent,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map