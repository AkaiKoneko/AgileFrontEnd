import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';

import { AlertService} from '../../_services/index';
import {IterationService} from '../../_services/iteration.service';
import {Iteration} from '../../_models/iteration';
import {Project} from "../../_models/project";

@Component({
    moduleId: module.id,
    selector: 'create-iteration',
    templateUrl: 'createIteration.component.html'
})

export class CreateIterationComponent {
  @Input() createIteration: boolean;
  @Input() currentProject: number;


  model: Iteration = new Iteration();
  loading = false;

  constructor(
    private router: Router,
    private iterationService: IterationService,
    private alertService: AlertService) { }

  newIteration() {
        this.loading = true;
        this.iterationService.create(this.model, this.currentProject)
            .subscribe(
                data => {
                    this.alertService.success('Iteration created', true);
                    this.router.navigate(['/myProjects']);
                    // TODO emiter eventu odswieżenia widoku
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
