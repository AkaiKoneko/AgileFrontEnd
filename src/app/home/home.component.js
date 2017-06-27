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
const index_1 = require("../_services/index");
const primeng_1 = require("primeng/primeng");
let HomeComponent = class HomeComponent {
    constructor(userService, confrimationService) {
        this.userService = userService;
        this.confrimationService = confrimationService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
        this.loadAllUsers();
    }
    deleteUser(id) {
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
    loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
};
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'home.component.html',
        providers: [primeng_1.ConfirmationService]
    }),
    __metadata("design:paramtypes", [index_1.UserService, primeng_1.ConfirmationService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map