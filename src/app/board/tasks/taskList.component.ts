/**
 * Created by Akai on 2017-05-31.
 */
/**
 * Created by Akai on 2017-05-29.
 */
import {Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';

import { Task } from '../../_models/index';
import {NgForm} from "@angular/forms";
import {AlertService} from "../../_services/alert.service";
import {TaskService} from "../../_services/task.service";


@Component({
  moduleId: module.id,
  templateUrl: 'taskList.component.html',
 // styleUrls : ['project.style.css'],
  selector : 'tasks',
})

export class TaskListComponent implements OnInit{
  @Input() tasks: Task[];
  @Output() onSubmit = new EventEmitter<Boolean>()
  editingTask: boolean = false;
  taskToEdit: Task;
  constructor(private taskService: TaskService, private alertService: AlertService) {}

ngOnInit() {
    this.editingTask = false;
    this.taskToEdit = new Task;
}

  editTask(task: Task) {
    this.editingTask = true;
    this.taskToEdit = task;
   // this.onSubmit.emit(true);
  }

  submitTask(f: NgForm) {
    this.taskToEdit = f.value;
    console.log(this.taskToEdit);
    this.taskService.updateTask(this.taskToEdit)
      .subscribe(() => {
        this.onSubmit.emit(true);
        this.alertService.success('Task Edited', true);
      });
  }

}
