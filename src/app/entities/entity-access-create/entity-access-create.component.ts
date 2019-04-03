import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ApiService } from 'src/app/shared';
import { entityList } from 'src/app/shared/requests/entity.request';
import * as _ from 'lodash';

@Component({
  selector: 'app-entity-access-create',
  templateUrl: './entity-access-create.component.html',
  styleUrls: ['./entity-access-create.component.scss']
})
export class EntityAccessCreateComponent implements OnInit {
  entity_codes: [any];
  entity_schema: any;
  formGroup: FormGroup;
  constructor(private fb: FormBuilder, private service: ApiService) {}
  get f() {
    return this.formGroup.controls;
  }

  getEntityCodes() {
    this.service.list('entity__view', entityList).subscribe(data => {
      this.entity_codes = data.value;
      console.log(this.entity_codes);
    });
  }

  hasError(control: AbstractControl) {
    return (control.dirty || control.touched) && control.errors;
  }

  saveEntity() {
console.log(this.formGroup);
  }
  ngOnInit() {
    this.getEntityCodes();
    this.formGroup = this.fb.group({
      entity_access_code: ['', Validators.required],
      entity_code: ['', Validators.required],
      entity_access_active: [false, Validators.required],
      entity_access_js: ['', Validators.required],
      entity_schema_access: ['', Validators.required]
    });

    this.formGroup.get('entity_code').valueChanges.subscribe(data => {
      this.formGroup.get('entity_access_code').setValue(data + '__');
      const entity = _.find(this.entity_codes, { entity_code: data });
      this.entity_schema = Object.keys(entity['entity_schema']);
    });
  }
}
