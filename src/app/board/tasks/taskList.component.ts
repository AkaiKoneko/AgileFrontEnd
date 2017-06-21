/**
 * Created by Akai on 2017-05-31.
 */
/**
 * Created by Akai on 2017-05-29.
 */
import {Component, EventEmitter, Input, Output,} from '@angular/core';

import { Task } from '../../_models/index';


@Component({
  moduleId: module.id,
  templateUrl: 'taskList.component.html',
 // styleUrls : ['project.style.css'],
  selector : 'tasks',
})

export class TaskListComponent {
  @Input() tasks: Task[];
  @Output() onSubmit = new EventEmitter<Task>()
  constructor() {}

  editTask(task: Task) {
    this.onSubmit.emit(task);
  }
}
