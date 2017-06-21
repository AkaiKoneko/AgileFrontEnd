import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html',
  providers: [ConfirmationService]
})

export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService , private confrimationService: ConfirmationService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.confrimationService.confirm({
      message: 'Czy jestes pewien że chcesz usunąć użytkownika ?',
      accept: () => {
        this.userService.delete(id).subscribe(() => {
          this.loadAllUsers();
        });
      },
      reject: () => {
        console.log('test');
      }
    });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }
}
