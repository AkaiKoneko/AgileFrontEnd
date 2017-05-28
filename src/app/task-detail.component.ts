/**
 * Created by Akai on 2017-05-16.
 */

import { Component, Input ,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { TaskService } from './_services/task.service';

import {Task} from './_models/task';

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
  @Input() task: Task;

  constructor(private taskService: TaskService,
              private route: ActivatedRoute,
              private location: Location) {
  }
}


