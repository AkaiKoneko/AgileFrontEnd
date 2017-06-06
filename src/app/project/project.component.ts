/**
 * Created by Akai on 2017-05-29.
 */
import { Component, OnInit } from '@angular/core';

import { User , Project } from '../_models/index';
import { UserService , ProjectService} from '../_services/index';


@Component({
  moduleId: module.id,
  templateUrl: 'project.component.html',
  styleUrls : ['project.style.css'],
})

export class ProjectComponent implements OnInit {
  currentUser: User;
  projects: Project[] = [];
  selectedProject: Project;
  create: boolean;

  constructor(private userService: UserService , private  projectService: ProjectService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadUserProjects();
  }


  private loadUserProjects() {
    this.projectService.getUserProjects(this.currentUser.id).subscribe(projects => { this.projects = projects; });
  }

  onSelect(project: Project) {
    this.selectedProject = project;
  }
}
