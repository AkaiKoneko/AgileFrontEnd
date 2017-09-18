import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, ProjectService } from '../../_services/index';
import {NgForm} from "@angular/forms";
import {Project} from "../../_models/project";

@Component({
  moduleId: module.id,
  selector: 'edit-project',
  templateUrl: 'editProject.component.html'
})

export class EditProjectComponent {
  @Input() edit: boolean;
  @Input() projectToEdit: Project;
  @Output() onSubmit = new EventEmitter<Boolean>();

  model: any = {};

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private alertService: AlertService) { }

  changeProject(f: NgForm) {
    this.model = f.value;
    this.projectService.updateProject(this.model)
      .subscribe(() => {
        this.alertService.success('Project updated', true);
        this.onSubmit.emit(true);
      });
    this.edit = false;
    this.onSubmit.emit(true);
  }
}
/**
 * Created by Akai on 2017-09-05.
 */
