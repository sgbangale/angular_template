import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-entity-access-list',
  templateUrl: './entity-access-list.component.html',
  styleUrls: ['./entity-access-list.component.scss']
})
export class EntityAccessListComponent implements OnInit {
 public tableFilter = {
  'request_data'	: {
  'filters': {},
  'sortFields': 'entity_code',
  'removeColumns': '',
  'first': 0,
  'rows': 0
  }
  };

  constructor(private router: Router) {

  }
  ngOnInit() {}
  details(id: string) {
    this.router.navigate([`/settings/accesses/create/${id}`]);
  }
  addEntityAccess() {
    this.router.navigate([`/settings/accesses/create`]);
  }
}
