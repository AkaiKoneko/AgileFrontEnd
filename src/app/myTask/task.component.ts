import {Component, OnInit} from '@angular/core';
import { Task } from '../_models/task';
import { User } from '../_models/user';
import  { TaskService } from '../_services/task.service';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'my-tasks',
  providers: [TaskService],
  template: `
    <div class="row">
      <div class="col-sm-2">
        MENU
        <p><a [routerLink]="['/myTasks']">User Info</a></p>
        <p><a [routerLink]="['/myTasks']">My Tasks</a></p>
        <p><a [routerLink]="['/myProjects']">My Projects</a></p>
        <p><a [routerLink]="['/login']">Logout</a></p>
      </div>
      <div  class="col-md-8">
    <h1>{{title}}</h1>
    <p>Name :{{currentUser.firstName}}
    <p>Last name  :{{currentUser.lastName}}
    <p>Email :{{currentUser.email}}
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
      </div>
    </div>
  `,
  styleUrls : ['app/myTask/task.style.css'],
})

export class TaskComponent implements OnInit {
  title = 'User Info';

  currentUser: User;
  selectedTask: Task;
  tasks: Task[];

  getTasks(): void {
    this.taskService.getTasks(this.currentUser.id).subscribe(tasks => this.tasks = tasks);
  }

  onSelect(task: Task) {
  this.selectedTask = task;
  }
  ngOnInit(): void {
    this.getTasks();
  }



  constructor(private  taskService: TaskService, private userService: UserService)
  {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}

