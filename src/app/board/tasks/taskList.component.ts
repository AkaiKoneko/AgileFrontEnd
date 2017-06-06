/**
 * Created by Akai on 2017-05-31.
 */
/**
 * Created by Akai on 2017-05-29.
 */
import {Component, Input, } from '@angular/core';

import { Task } from '../../_models/index';


@Component({
  moduleId: module.id,
  templateUrl: 'taskList.component.html',
 // styleUrls : ['project.style.css'],
  selector : 'tasks',
})

export class TaskListComponent {
  @Input() tasks: Task[];

  constructor() {}

droped() {
    console.log('drop');
}
}
