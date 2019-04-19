import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ApiService } from 'src/app/shared';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.scss']
})
export class OperationListComponent implements OnInit {
  entity_code: String;
  constructor(private service: ApiService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(value => {
      if (value.id) {
        this.entity_code = value.id;
      }
    });
  }
}
