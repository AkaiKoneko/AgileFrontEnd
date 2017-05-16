/**
 * Created by Akai on 2017-05-16.
 */

import { Component, Input } from '@angular/core';

import {Task} from './task';

@Component({
  selector: 'task-detail',
  template: `
    <div *ngIf="task">
      <h2>{{task.name}} details!</h2>
      <div><label>id: </label>{{task.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="task.name" placeholder="name">
        <input [(ngModel)]="task.id" placeholder="id">
      </div>
    </div>
  `
})



export class TaskDetailComponent {
  @Input()task: Task;
}
