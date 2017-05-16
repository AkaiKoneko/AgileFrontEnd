/**
 * Created by Akai on 2017-05-16.
 */

import { Injectable } from '@angular/core';

import{ Task } from './task';
import  { TASKS } from './mock-task';

@Injectable()
export class TaskService {
  getTasks(): Promise<Task[]> {
    return Promise.resolve(TASKS);
  }
}
