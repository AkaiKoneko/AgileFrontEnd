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
const index_1 = require("../_models/index");
const index_2 = require("../_services/index");
const router_1 = require("@angular/router");
const task_service_1 = require("../_services/task.service");
const alert_service_1 = require("../_services/alert.service");
const iteration_service_1 = require("../_services/iteration.service");
let BoardComponent = class BoardComponent {
    constructor(storyService, taskService, iterationService, activatedRoute, alertService) {
        this.storyService = storyService;
        this.taskService = taskService;
        this.iterationService = iterationService;
        this.activatedRoute = activatedRoute;
        this.alertService = alertService;
        this.storyToEdit = new index_1.Story;
        this.stories = [];
        this.model = {};
    }
    ngOnInit() {
        this.createTask = true; // bo zaraz zmienia na false
        this.activatedRoute.queryParams.subscribe((params => {
            this.iterationId = +params['iterationId'];
        }));
        this.loadIterationStories(this.iterationId);
        this.getStatues();
    }
    deleteStory(id) {
        this.storyService.deleteStory(id)
            .subscribe(() => {
            this.ngOnInit();
            this.alertService.success('Story Removed', true);
        });
    }
    getStatues() {
        this.iterationService.getIterationTaskStatuses(this.iterationId).subscribe(statuses => { this.statuses = statuses; });
    }
    fillStories() {
        for (let i = 0; i < this.stories.length; i++) {
            this.taskService.getStoryTasks(this.stories[i].id).subscribe(tasks => { this.stories[i].tasks = tasks; });
        }
    }
    changeStory(f) {
        this.model = f.value;
        this.storyService.updateStory(this.model)
            .subscribe(() => {
            this.ngOnInit();
            this.alertService.success('Story edited', true);
        });
        this.editStory = false;
    }
    submitStory(f) {
        this.model = f.value;
        this.storyService.createStory(this.model, this.iterationId)
            .subscribe(() => {
            this.ngOnInit();
            this.alertService.success('Story Created', true);
        });
        this.createStory = false;
    }
    loadIterationStories(iterationId) {
        this.storyService.getIterationStories(iterationId).subscribe(stories => { this.stories = stories; this.fillStories(); });
    }
};
BoardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'board.component.html',
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [index_2.StoryService, task_service_1.TaskService, iteration_service_1.IterationService, router_1.ActivatedRoute, alert_service_1.AlertService])
], BoardComponent);
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map