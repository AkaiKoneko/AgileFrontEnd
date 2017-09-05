import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, ProjectService } from '../../_services/index';

@Component({
    moduleId: module.id,
    selector: 'create-project',
    templateUrl: 'createProject.component.html'
})

export class CreateProjectComponent {
  @Input() create: boolean
  @Output() onSubmit = new EventEmitter<Boolean>()

  model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private projectService: ProjectService,
        private alertService: AlertService) { }

    newProject() {
        this.loading = true;
        this.projectService.create(this.model)
            .subscribe(
                data => {
                  this.alertService.success('Project created', true);
                  this.create = false;
                  this.onSubmit.emit(true);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
