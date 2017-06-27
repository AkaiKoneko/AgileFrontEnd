import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

import { Story } from '../_models/index';
import { StoryService } from '../_services/index';
import {ActivatedRoute, Params} from '@angular/router';
import {TaskService} from '../_services/task.service';
import {NgForm} from '@angular/forms';
import {Task} from '../_models/index';
import {AlertService} from '../_services/alert.service';



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

  constructor(private storyService: StoryService, private taskService: TaskService, private activatedRoute: ActivatedRoute, private alertService: AlertService) {
  }

  ngOnInit() {
    this.createTask = true;  // bo zaraz zmienia na false
    this.activatedRoute.queryParams.subscribe((params => {
      this.iterationId = +params['iterationId'];

    }));
    this.loadIterationStories(this.iterationId);
  }

fillStories() {
    for (let i = 0; i < this.stories.length; i++) {

      this.taskService.getStoryTasks(this.stories[i].id).subscribe(tasks => {this.stories[i].tasks = tasks; });

   }
}


  submitStory(f: NgForm) {
    this.model = f.value;
    this.storyService.createStory(this.model, this.iterationId)
      .subscribe(() => {
      this.ngOnInit();
      this.alertService.success('Story Created', true);
    });
    this.createStory = false;
  }

  private loadIterationStories(iterationId: number) {
    this.storyService.getIterationStories(iterationId).subscribe(stories => { this.stories = stories; this.fillStories(); });

  }
}
