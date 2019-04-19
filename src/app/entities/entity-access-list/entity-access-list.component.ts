import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { entityAccess } from 'src/app/shared/requests/entity.request';
import * as _ from 'lodash';


@Component({
  selector: 'app-entity-access-list',
  templateUrl: './entity-access-list.component.html',
  styleUrls: ['./entity-access-list.component.scss']
})
export class EntityAccessListComponent implements OnInit {

  constructor(private service: ApiService, private router: Router) {}

  entityData: Array<any> = [];
  observableData: Observable<any>;
  totalcount: Observable<number>;
  filter = new FormControl('');

  columns(data: any): Array<any> {
    return _.find(this.service.getSessionValues('admin_enities'), x => x.entity_code === 'entityaccess').entity_schema_access;
  }
  ngOnInit() {
       this.service.request('entityaccess__view', entityAccess).subscribe(data => {
        this.observableData = of(data.value.body.data);
        this.totalcount = of(data.value.body.count);
     });
  }
details(id: string) {
  this.router.navigate([`/settings/accesses/create/${id}`]);
}
addEntityAccess() {
  this.router.navigate([`/settings/accesses/create`]);
}
}
