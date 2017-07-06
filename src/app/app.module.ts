import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import{ TaskDetailComponent} from './task-detail.component';
import{ ProjectDetailComponent } from './project/projectDetails/project-details.component';
import { TaskComponent } from './myTask/task.component';
import { TaskService } from './_services/task.service';

import {HttpModule} from '@angular/http';
import {routing} from './app.routing';

import { UserService , AlertService , AuthenticationService , ProjectService , IterationService , StoryService} from './_services/index';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { RegisterComponent } from './register/index';
import { ProjectComponent } from  './project/intex';
import { BoardComponent } from  './board/index';
import {CreateProjectComponent} from './project/createProject/createProject.component';
import { IterationComponent } from './project/iteration/iteration.component';
import { CreateIterationComponent } from './project/createIteration/createIteration.component'
import { TaskListComponent } from './board/tasks/taskList.component';
import { NewTaskComponent } from './board/editTask/newTask.component'


import {ButtonModule, SplitButtonModule} from 'primeng/primeng';
import {DialogModule , CalendarModule} from 'primeng/primeng';
import {ConfirmDialogModule, ConfirmationService , TooltipModule} from 'primeng/primeng';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    HttpModule,
    routing,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    CalendarModule,
    SplitButtonModule,
    TooltipModule,


  ],
  providers: [
    TaskService,
    UserService,
    AlertService,
    AuthenticationService,
    ProjectService,
    IterationService,
    StoryService,
    AuthGuard,
    ConfirmationService,
  ],
  declarations: [

    AppComponent,
    AlertComponent,
    CreateProjectComponent,
    TaskDetailComponent,
    ProjectDetailComponent,
    TaskComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProjectComponent,
    IterationComponent,
    CreateIterationComponent,
    BoardComponent,
    TaskListComponent,
    NewTaskComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
