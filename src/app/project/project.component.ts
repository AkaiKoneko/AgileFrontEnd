/**
 * Created by Akai on 2017-05-29.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import { User , Project } from '../_models/index';
import { UserService , ProjectService} from '../_services/index';
import {MenuItem} from 'primeng/primeng';


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
  showDetails: boolean;
  showIteration: boolean;

  items: MenuItem[];

  constructor(private userService: UserService , private  projectService: ProjectService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadUserProjects();
    this.items = [
      {label: 'Update', icon: 'fa-refresh', command: () => {
        console.log('update');
      }},
      {label: 'Delete', icon: 'fa-close', command: () => {
        console.log('Delete');
      }},
      {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
      {label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']}
    ];
  }


  private loadUserProjects() {
    this.projectService.getUserProjects(this.currentUser.id).subscribe(projects => { this.projects = projects; });
  }

  showProjectDetails(project: Project) {
    this.selectedProject = project;
    this.showDetails  = true;
  }

  onSelect(project: Project) {
    this.selectedProject = project;
    this.showIteration = true;
  }
}
