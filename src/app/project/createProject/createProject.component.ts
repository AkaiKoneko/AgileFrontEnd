import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, ProjectService } from '../../_services/index';

@Component({
    moduleId: module.id,
    selector: 'create-project',
    templateUrl: 'createProject.component.html'
})

export class CreateProjectComponent {
  @Input() create: boolean;

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
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
