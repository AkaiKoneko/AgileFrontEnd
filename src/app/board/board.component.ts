import {Component, Input, OnInit} from '@angular/core';

import { Story } from '../_models/index';
import { StoryService } from '../_services/index';
import {ActivatedRoute, Params} from '@angular/router';
import {TaskService} from "../_services/task.service";

@Component({
  moduleId: module.id,
  templateUrl: 'board.component.html'
})

export class BoardComponent implements OnInit {
  iterationId: number;
  currentStory: Story;
  stories: Story[] = [];
  constructor(private storyService: StoryService, private taskService: TaskService, private activatedRoute: ActivatedRoute ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.iterationId = params['iterationId'];
    });
    this.loadIterationStories(this.iterationId);
  }

  private fillStories() {
    console.log(this.stories.length);
    for (let i = 0; i < this.stories.length; i++) {

      this.taskService.getStoryTasks(this.stories[i].id).subscribe(tasks => {this.stories[i].tasks = tasks; });

   }
}


  private loadIterationStories(iterationId: number) {
    this.storyService.getIterationStories(iterationId).subscribe(stories => { this.stories = stories; this.fillStories(); });

  }
}
