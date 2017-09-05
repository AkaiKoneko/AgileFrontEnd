/**
 * Created by Akai on 2017-05-31.
 */
/**
 * Created by Akai on 2017-05-29.
 */
import {Component, Input, OnChanges, OnInit} from '@angular/core';

import { Iteration} from '../../_models/index';
import { IterationService , ProjectService} from '../../_services/index';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/primeng';
import {AlertService} from "../../_services/alert.service";
import {TaskStatus} from "../../_models/taskStatus";


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
  items: MenuItem[];
  selectedIteration: Iteration;
  statues: TaskStatus[];

  constructor(private iterationService: IterationService , private  projectService: ProjectService, private router : Router, private alertService: AlertService) {}

  ngOnInit() {
    this.createIteration = false;
    this.items = [
      {label: 'Edit', icon: 'fa-refresh', command: () => {
        console.log('update' + this.selectedIteration.id);
      }},
      {label: 'Delete', icon: 'fa-trash', command: () => {
        this.delete();
      }},
    ];

  }
  private delete() {
    this.iterationService.deleteIteration(this.selectedIteration.id)
      .subscribe(() => {
        this.ngOnInit();
        this.alertService.success('Iteration removed', true);
      });
  }
  ngOnChanges() {
    this.loadProjectIteration(this.currentProject);
  }

  private loadProjectIteration(projectId: number) {
    this.iterationService.getProjectIterations(projectId).subscribe(iterations => {this.iterations = iterations;
      this.loadIterationAvailableTaskStatues();
    });

  }

  private loadIterationAvailableTaskStatues() {
    for (let iteration of this.iterations){
      this.iterationService.getIterationTaskStatuses(iteration.id).subscribe(statues => { iteration.statues = statues; })
    }
  }

 goToBoard(iterationId: number) {
   this.router.navigate(['/kanbanBoard', ], {queryParams: {iterationId: iterationId}});
 }

}
