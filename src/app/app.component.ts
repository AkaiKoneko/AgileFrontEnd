import {Component, OnInit} from '@angular/core';
import { Task } from './task';
import  { TaskService } from './task.service';


@Component({
  selector: 'my-app',
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
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]

})

export class AppComponent implements OnInit {
  title = 'Angular Tast';
  selectedTask: Task;
  tasks: Task[];

  getTasks(): void {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }

  onSelect(task: Task) {
  this.selectedTask = task;
  }
  ngOnInit(): void {
    this.getTasks();
  }

  constructor(private  taskService: TaskService) {}
}

