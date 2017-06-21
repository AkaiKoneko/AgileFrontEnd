import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { Task} from '../../_models/index';
import { StoryService } from '../../_services/index';
import {ActivatedRoute, Params} from '@angular/router';
import {TaskService} from '../../_services/task.service';
import {NgForm} from '@angular/forms';



@Component({
  moduleId: module.id,
  templateUrl: 'editTask.component.html',
  selector : 'taskForm'
})

export class EditTaskComponent implements OnInit {
  // iterationId: number;
  @Input() storyId: number;
  @Output() onSubmit = new EventEmitter<boolean>()

  createTask: boolean;
  editTask: boolean;
  model: Task = new Task();

  constructor(private taskService: TaskService) {

  }

  ngOnInit() {

  }


  submitTask(f: NgForm) {
    this.model = f.value;
    console.log(this.model);
    this.taskService.createTask(this.model, this.storyId)
      .subscribe(() => {this.createTask = false; this.onSubmit.emit(true); });

  }

}
/**
 * Created by Akai on 2017-06-20.
 */
