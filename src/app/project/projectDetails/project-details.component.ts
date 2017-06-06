/**
 * Created by Akai on 2017-05-16.
 */

import { Component, Input ,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../../_services/project.service';

import {Project} from '../../_models/project';

@Component({
  selector: 'project-detail',
  templateUrl: 'app/project/projectDetails/details.component.html',
})



export class ProjectDetailComponent {
  @Input() project: Project;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private location: Location) {
  }
}


