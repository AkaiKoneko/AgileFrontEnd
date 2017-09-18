/**
 * Created by Akai on 2017-05-16.
 */

import { Component, Input ,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { IterationService } from '../../_services/iteration.service';

import {Project} from '../../_models/project';
import {Iteration} from "../../_models/iteration";

@Component({
  selector: 'iteration-detail',
  templateUrl: 'app/project/iterationDetails/details.component.html',
})



export class IterationDetailComponent {
  @Input() iteration: Iteration;

  constructor(private iterationService: IterationService,
              private route: ActivatedRoute,
              private location: Location) {
  }
}


