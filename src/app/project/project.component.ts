/**
 * Created by Akai on 2017-05-29.
 */
import {Component, OnInit} from '@angular/core';

import { User , Project } from '../_models/index';
import { UserService , ProjectService} from '../_services/index';
import {MenuItem} from 'primeng/primeng';
import {AlertService} from '../_services/alert.service';
import {NgForm} from "@angular/forms";


@Component({
  moduleId: module.id,
  templateUrl: 'project.component.html',
  styleUrls : ['project.style.css'],
})

export class ProjectComponent implements OnInit {
  currentUser: User;
  projects: Project[] = [];
  selectedProject: Project = new Project;

  create: boolean;

  editProject: boolean;


  showDetails: boolean= false;
  showIteration: boolean;

  items: MenuItem[];
  model: any = {};

  constructor(private userService: UserService , private  projectService: ProjectService, private alertService: AlertService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadUserProjects();
    this.items = [
      {label: 'Edit', icon: 'fa-refresh', command: () => {
        this.editProject = true;
      }},
      {label: 'Delete', icon: 'fa-trash', command: () => {
        this.delete();
      }},
    ];
  }

  // troche głupię ale działa
  private delete() {
    this.projectService.deleteProject(this.selectedProject.id)
      .subscribe(() => {
        this.ngOnInit();
        this.alertService.success('Project removed', true);
      });
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
