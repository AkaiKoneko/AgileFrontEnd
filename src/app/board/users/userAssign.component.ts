/**
 * Created by Akai on 2017-05-16.
 */

import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../_services/user.service';
import {Task} from "../../_models/task";
import {User} from "../../_models/user";
import {SelectItem} from "primeng/primeng";


@Component({
  selector: 'user-assign',
  templateUrl: 'app/board/users/userAssign.component.html',
})



export class UserAssignComponent implements OnInit{
  @Input() task: Task;
  allUsers: SelectItem[];
  selectedUsers: number[];
  users: User[] = [];
  display: boolean = false;
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private location: Location) {
    this.display = true;
  }

  ngOnInit() {
    this.loadAllUsers();



  }


  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; this.getData(); });
  }

  getData() {
    this.allUsers = [];
    for (let i = 0; i < this.users.length; i++) {

      this.allUsers.push({label: this.users[i].lastName , value: this.users[i].id});
    }

  }

  sendData() {

    for (let j = 0; j < this.selectedUsers.length; j++) {
      console.log(j);
      this.userService.assignTask(this.selectedUsers[j] , this.task).subscribe(() => {
        // this.alertService.success('Project updated', true);
      });
    }
  }
}


