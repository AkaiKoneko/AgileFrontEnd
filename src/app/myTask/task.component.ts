import {Component, OnInit} from '@angular/core';
import { Task } from '../_models/task';
import { User } from '../_models/user';
import  { TaskService } from '../_services/task.service';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'my-tasks',
  providers: [TaskService],
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
    
  `,
  styleUrls : ['app/myTask/task.style.css'],
})

export class TaskComponent implements OnInit {
  title = 'Angular Tast';

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

