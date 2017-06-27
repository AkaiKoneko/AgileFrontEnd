/**
 * Created by Akai on 2017-05-31.
 */
/**
 * Created by Akai on 2017-05-29.
 */
import {Component, Input, OnChanges, OnInit} from '@angular/core';

import { Iteration , Project } from '../../_models/index';
import { IterationService , ProjectService} from '../../_services/index';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'iteration.component.html',
  styleUrls : ['../project.style.css'],
  selector : 'iteration',

})

export class IterationComponent implements OnInit, OnChanges {
  @Input() currentProject: number;
  iterations: Iteration[] = [];
  createIteration: boolean;

  constructor(private iterationService: IterationService , private  projectService: ProjectService, private router : Router) {}

  ngOnInit() {
    this.loadProjectIteration(this.currentProject);
    this.createIteration = false;
  }
  // to dziala tak jak mysle
  ngOnChanges() {
    this.loadProjectIteration(this.currentProject);
  }

  private loadProjectIteration(projectId: number) {
    this.iterationService.getProjectIterations(projectId).subscribe(iterations => { this.iterations = iterations; });
  }

 goToBoard(iterationId: number) {
   this.router.navigate(['/kanbanBoard', ], {queryParams: {iterationId: iterationId}});
 }

}
