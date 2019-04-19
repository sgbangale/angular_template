import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/shared';
import { entityList, activeEntitiyDetails, entityAccessDetails, entityAccessBuild } from 'src/app/shared/requests/entity.request';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entity-access-create',
  templateUrl: './entity-access-create.component.html',
  styleUrls: ['./entity-access-create.component.scss']
})
export class EntityAccessCreateComponent implements OnInit {
  entity_codes: [any];
  entity_schema: any;
  formGroup: FormGroup;
  jsContent: string;
  constructor(private fb: FormBuilder, private service: ApiService, private route: ActivatedRoute, private router: Router) {}
  get f() {
    return this.formGroup.controls;
  }

  codeChanged(content) {
    this.formGroup.get('entity_access_js').setValue(content);
  }

  getEntityCodes() {
    this.service.list('entity__view', entityList).subscribe(data => {
      this.entity_codes = data.value;
    });
  }

  hasError(control: AbstractControl) {
    return (control.dirty || control.touched) && control.errors;
  }
  entityAccess_build() {
    entityAccessBuild.request_data.entityAccessId = this.f['_id'].value;
    this.service.request('entityaccess__build', entityAccessBuild).subscribe(data => {
      if (data.value.isSucess) {
        this.router.navigate(['/settings/accesses']);
      }
    });
  }

  saveEntity() {
    if (this.formGroup.valid) {
      const req = {'request_data' : this.formGroup.value};
      this.service.request('entityaccess__create', req).subscribe(data => {
        if (data.value.isSucess) {
          this.router.navigate(['/settings/accesses']);
        }
      });
    }
  }
  ngOnInit() {
    this.formGroup = this.fb.group({
      _id: [''],
      entity_access_code: ['', Validators.required],
      entity_code: ['', Validators.required],
      entity_access_active: [false, Validators.required],
      entity_access_js: ['', Validators.required],
      entity_schema_access: ['', Validators.required]
    });
    this.route.params.subscribe(value => {
      this.service.list('entity__view', entityList).subscribe(entitydata => {
        this.entity_codes = entitydata.value;
        if (value.id) {
          entityAccessDetails.request_data.filters['_id'] = value.id;
          this.service.request('entityaccess__view', entityAccessDetails).subscribe(data => {
            const entity = _.find(entitydata.value, { entity_code: this.formGroup.get('entity_code').value });
            if (entity) {
              this.entity_schema = Object.keys(entity['entity_schema']);
            }
            this.formGroup.patchValue(data.value.body.data[0]);
            this.jsContent = this.formGroup.get('entity_access_js').value;
          });
        }

        this.formGroup.get('entity_code').valueChanges.subscribe(data => {
          if (!value.id) {
          this.formGroup.get('entity_access_code').setValue(data + '__');
          }
          const changedEntity = _.find(entitydata.value, { entity_code: data });
          if (changedEntity) {
            this.entity_schema = Object.keys(changedEntity['entity_schema']);
          }
        });
        this.formGroup.get('entity_access_code').valueChanges.subscribe(data => {
          if (!value.id) {
            this.jsContent = `bal.${data}  = async (req)=>
          {
            //your code
          }`;
          }
        });
      });
    });
  }
}
