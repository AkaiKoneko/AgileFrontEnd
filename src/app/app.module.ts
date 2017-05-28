import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import{ TaskDetailComponent} from './task-detail.component';
import { TaskComponent } from './myTask/task.component';
import { TaskService } from './_services/task.service';

import {HttpModule} from '@angular/http';
import {routing} from './app.routing';

import { UserService , AlertService , AuthenticationService } from './_services/index';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { RegisterComponent } from './register/index';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [
    TaskService,
    UserService,
    AlertService,
    AuthenticationService,
    AuthGuard
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    TaskDetailComponent,
    TaskComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
