import { Router } from '@angular/router';
import * as _ from 'lodash';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/shared';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements  OnDestroy {

  public tableFilter: any = {
    request_data: {
      filters: {}, // this.filters,
      sortFields: '',
      removeColumns: '',
      first: 0,
      rows: 0
    }
  };

  constructor(public router: Router) {}

  addEntity() {
    this.router.navigate([`/settings/entities/create`]);
  }
  ngOnDestroy(): void {
  }

  details(id: string) {
    // this.router.navigate(['/settings/entities/create/${$event}'])
 this.router.navigate([`/settings/entities/create/${id}`]);
}

}
