import { Component } from '@angular/core';

export class Task {
  id: number;
  name: string;
  duration: number;
}

const TASKS: Task[] = [
  { id: 11, name: 'Zadanie 1', duration: 55},
  { id: 12, name: 'Zadanie 2', duration: 22 },

];


@Component({
  selector: 'my-app',
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
    

    <div *ngIf="selectedTask">
      <h2>{{selectedTask.name}} details!</h2>
      <div><label>id: </label>{{selectedTask.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedTask.name" placeholder="name">
        <input [(ngModel)]="selectedTask.id" placeholder="id">
      </div>
    </div>
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

export class AppComponent {
  title = 'Angular Tast';
  selectedTask: Task;
  tasks = TASKS;


  onSelect(task: Task) {
  this.selectedTask = task;
  }
}

