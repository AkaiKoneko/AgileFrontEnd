"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const app_component_1 = require("./app.component");
const task_detail_component_1 = require("./task-detail.component");
const project_details_component_1 = require("./project/projectDetails/project-details.component");
const task_component_1 = require("./myTask/task.component");
const task_service_1 = require("./_services/task.service");
const http_1 = require("@angular/http");
const app_routing_1 = require("./app.routing");
const index_1 = require("./_services/index");
const index_2 = require("./_directives/index");
const index_3 = require("./_guards/index");
const index_4 = require("./login/index");
const index_5 = require("./home/index");
const index_6 = require("./register/index");
const intex_1 = require("./project/intex");
const index_7 = require("./board/index");
const createProject_component_1 = require("./project/createProject/createProject.component");
const iteration_component_1 = require("./project/iteration/iteration.component");
const createIteration_component_1 = require("./project/createIteration/createIteration.component");
const taskList_component_1 = require("./board/tasks/taskList.component");
const newTask_component_1 = require("./board/newTask/newTask.component");
const primeng_1 = require("primeng/primeng");
const primeng_2 = require("primeng/primeng");
const primeng_3 = require("primeng/primeng");
const animations_1 = require("@angular/platform-browser/animations");
const editProject_component_1 = require("./project/editProject/editProject.component");
const iteration_details_component_1 = require("./project/iterationDetails/iteration-details.component");
const userAssign_component_1 = require("./board/users/userAssign.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.NoopAnimationsModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing,
            primeng_1.ButtonModule,
            primeng_1.ListboxModule,
            primeng_3.ConfirmDialogModule,
            primeng_2.DialogModule,
            primeng_2.CalendarModule,
            primeng_1.SplitButtonModule,
            primeng_3.TooltipModule,
            primeng_1.DropdownModule,
        ],
        providers: [
            task_service_1.TaskService,
            index_1.UserService,
            index_1.AlertService,
            index_1.AuthenticationService,
            index_1.ProjectService,
            index_1.IterationService,
            index_1.StoryService,
            index_3.AuthGuard,
            primeng_3.ConfirmationService,
        ],
        declarations: [
            app_component_1.AppComponent,
            index_2.AlertComponent,
            createProject_component_1.CreateProjectComponent,
            editProject_component_1.EditProjectComponent,
            task_detail_component_1.TaskDetailComponent,
            project_details_component_1.ProjectDetailComponent,
            iteration_details_component_1.IterationDetailComponent,
            task_component_1.TaskComponent,
            index_5.HomeComponent,
            index_4.LoginComponent,
            index_6.RegisterComponent,
            intex_1.ProjectComponent,
            iteration_component_1.IterationComponent,
            createIteration_component_1.CreateIterationComponent,
            index_7.BoardComponent,
            taskList_component_1.TaskListComponent,
            newTask_component_1.NewTaskComponent,
            userAssign_component_1.UserAssignComponent,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map