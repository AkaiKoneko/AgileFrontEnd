import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

import { Story } from '../_models/index';
import { StoryService } from '../_services/index';
import {ActivatedRoute, Params} from '@angular/router';
import {TaskService} from '../_services/task.service';
import {NgForm} from '@angular/forms';
import {Task} from "protractor/built/taskScheduler";



@Component({
  moduleId: module.id,
  templateUrl: 'board.component.html',
  encapsulation: ViewEncapsulation.None
})

export class BoardComponent implements OnInit {
  iterationId: number;

  createTask: boolean;
  createStory: boolean;
  stories: Story[] = [];

  taskToEdit: Task;


  model: any = {};

  constructor(private storyService: StoryService, private taskService: TaskService, private activatedRoute: ActivatedRoute ) {
  }

  ngOnInit() {
    this.createTask = true;  // bo zaraz zmienia na false
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.iterationId = params['iterationId'];
    });
    this.loadIterationStories(this.iterationId);
  }

fillStories() {
    for (let i = 0; i < this.stories.length; i++) {

      this.taskService.getStoryTasks(this.stories[i].id).subscribe(tasks => {this.stories[i].tasks = tasks; });

   }
}


  submitStory(f: NgForm) {
    this.model = f.value;
    console.log(this.model);
    this.storyService.createStory(this.model, this.iterationId)
      .subscribe(() => {this.ngOnInit(); });
    this.createStory = false;
  }

  private loadIterationStories(iterationId: number) {
    this.storyService.getIterationStories(iterationId).subscribe(stories => { this.stories = stories; this.fillStories(); });

  }
}
