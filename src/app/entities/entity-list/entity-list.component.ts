import { Component, OnInit, OnDestroy, QueryList } from '@angular/core';
import { ApiService } from 'src/app/shared';
import { activeEntities } from 'src/app/shared/requests/entity.request';
import { Observable, Subscription, observable, of } from 'rxjs';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit, OnDestroy {
  constructor(private service: ApiService, private router: Router) {}

  entityData: Array<any> = [];
  observableData: Observable<any>;
  totalcount: Observable<number>;
  filter = new FormControl('');
  addEntity() {
    this.router.navigate([`/settings/entities/create`]);
  }
  ngOnDestroy(): void {
  }
columns(data: any): Array<any> {
  return _.find(this.service.getSessionValues('admin_enities'), x => x.entity_code === 'entity').entity_schema_access;
}
  ngOnInit() {
       this.service.request('entity__view', activeEntities).subscribe(data => {
        this.observableData = of(data.value.body.data);
        this.totalcount = of(data.value.body.count);
     });
  }
details(id: string) {
  this.router.navigate([`/settings/entities/create/${id}`]);
}

}
