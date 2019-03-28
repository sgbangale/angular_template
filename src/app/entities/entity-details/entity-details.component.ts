import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared';

import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { activeEntitiyDetails, entityCreate } from 'src/app/shared/requests/entity.request';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-entity-details',
  templateUrl: './entity-details.component.html',
  styleUrls: ['./entity-details.component.scss']
})
export class EntityDetailsComponent implements OnInit {
  constructor(private service: ApiService, private route: ActivatedRoute, private fb: FormBuilder) {

    this.formGroup = fb.group({
      entity_code: ['', Validators.required],
      entity_name: ['', Validators.required],
      entity_access: [''],
      entity_active: ['', Validators.required],
      entity_schema : this.fb.array([ this.addGroup()])
    });
   }
  entityData: any;
  entityName: Observable<any>;
  formGroup: FormGroup;
  schemaFormGroup: FormGroup;

  saveEntity() {
    if (this.formGroup.valid) {
      entityCreate.request_data = this.formGroup.value;
      const schema = entityCreate.request_data.entity_schema as Array<any>;
      const db = {};
        schema.forEach((v) => {
        db[v.column_name] = { type : v.column_type};
        });

        entityCreate.request_data.entity_schema = db;
        this.service.request('entity__create', entityCreate).subscribe(data => {
          console.log(data.value.body);
        });
    }
  }
  addGroup() {
    return this.fb.group({
      column_name: ['', Validators.required],
      column_type: ['', Validators.required]

    });
  }

  addColumn() {
    (this.formGroup.get('entity_schema') as FormArray).push(this.addGroup());
  }

  ngOnInit() {
     this.route.params.subscribe(value => {
      activeEntitiyDetails.request_data.filters['_id'] = value.id;
      this.service.request('entity__view', activeEntitiyDetails).subscribe(data => {
        this.entityData = data.value.body.data[0];
        this.entityName = of(this.entityData.entity_code);
      });
    });

  }

}
