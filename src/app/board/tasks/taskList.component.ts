/**
 * Created by Akai on 2017-05-31.
 */
/**
 * Created by Akai on 2017-05-29.
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { Task } from '../../_models/index';
import {NgForm} from "@angular/forms";
import {AlertService} from "../../_services/alert.service";
import {TaskService} from "../../_services/task.service";
import {TaskStatus} from "../../_models/taskStatus";
import {SelectItem} from "primeng/primeng";


@Component({
  moduleId: module.id,
  templateUrl: 'taskList.component.html',
 // styleUrls : ['project.style.css'],
  selector : 'tasks',
})

export class TaskListComponent implements OnInit {
  @Input() tasks: Task[];
  @Input() statuses: TaskStatus[];
  @Output() onSubmit = new EventEmitter<Boolean>();

  statusesName: SelectItem[];
  editingTask: boolean = false;
  taskToEdit: Task;
  assign: boolean = false;
  constructor(private taskService: TaskService, private alertService: AlertService) {}

ngOnInit() {
    this.editingTask = false;
    this.taskToEdit = new Task;
    this.getStatusesName();
}

getStatusesName() {
    this.statusesName = [];

    for (let status of this.statuses){
      this.statusesName.push({label: status.name, value : status.name});
    }

}

  assignUser(task: Task) {
    this.assign = true;
    this.taskToEdit =  task;
  }

  editTask(task: Task) {
    this.editingTask = true;
    this.taskToEdit = task;
   // this.onSubmit.emit(true);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task)
      .subscribe(() => {
        this.onSubmit.emit(true);
        this.alertService.success('Task Deleted', true);

      });
  }

  submitTask() {
    this.taskService.updateTask(this.taskToEdit)
      .subscribe(() => {
        this.onSubmit.emit(true);
        this.alertService.success('Task Edited', true);
        this.editingTask = false;
      });
  }

}
