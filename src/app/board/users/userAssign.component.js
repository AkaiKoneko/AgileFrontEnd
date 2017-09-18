/**
 * Created by Akai on 2017-05-16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const user_service_1 = require("../../_services/user.service");
const task_1 = require("../../_models/task");
let UserAssignComponent = class UserAssignComponent {
    constructor(userService, route, location) {
        this.userService = userService;
        this.route = route;
        this.location = location;
        this.users = [];
        this.display = false;
        this.display = true;
    }
    ngOnInit() {
        this.loadAllUsers();
    }
    loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; this.getData(); });
    }
    getData() {
        this.allUsers = [];
        for (let i = 0; i < this.users.length; i++) {
            this.allUsers.push({ label: this.users[i].lastName, value: this.users[i].id });
        }
    }
    sendData() {
        for (let j = 0; j < this.selectedUsers.length; j++) {
            console.log(j);
            this.userService.assignTask(this.selectedUsers[j], this.task).subscribe(() => {
                // this.alertService.success('Project updated', true);
            });
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", task_1.Task)
], UserAssignComponent.prototype, "task", void 0);
UserAssignComponent = __decorate([
    core_1.Component({
        selector: 'user-assign',
        templateUrl: 'app/board/users/userAssign.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute,
        common_1.Location])
], UserAssignComponent);
exports.UserAssignComponent = UserAssignComponent;
//# sourceMappingURL=userAssign.component.js.map