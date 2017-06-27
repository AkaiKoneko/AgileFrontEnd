"use strict";
const router_1 = require("@angular/router");
const index_1 = require("./home/index");
const index_2 = require("./login/index");
const index_3 = require("./register/index");
const index_4 = require("./_guards/index");
const index_5 = require("./myTask/index");
const intex_1 = require("./project/intex");
const index_6 = require("./board/index");
const appRoutes = [
    { path: '', component: index_1.HomeComponent, canActivate: [index_4.AuthGuard] },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'register', component: index_3.RegisterComponent },
    { path: 'myTasks', component: index_5.TaskComponent, canActivate: [index_4.AuthGuard] },
    { path: 'myProjects', component: intex_1.ProjectComponent, canActivate: [index_4.AuthGuard] },
    { path: 'myProjects', component: intex_1.ProjectComponent, canActivate: [index_4.AuthGuard] },
    { path: 'kanbanBoard', component: index_6.BoardComponent, canActivate: [index_4.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map