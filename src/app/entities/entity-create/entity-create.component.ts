import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService, ApiService } from 'src/app/shared';
import { entityCreate, activeEntitiyDetails } from 'src/app/shared/requests/entity.request';

@Component({
  selector: 'app-entity-create',
  templateUrl: './entity-create.component.html',
  styleUrls: ['./entity-create.component.scss']
})
export class EntityCreateComponent implements OnInit {
  constructor(
    private alertService: AlertService,
    private service: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.formGroup = fb.group({
      _id: [''],
      entity_code: ['', Validators.required],
      entity_name: ['', Validators.required],
      entity_active: [true, Validators.required],
      entity_schema: this.fb.array([this.addGroup()])
    });
  }

  entityData: any;
  entityName: Observable<any>;
  formGroup: FormGroup;

  columnTypes = ['String', 'Number', 'Date', 'Boolean', 'Mixed'];

  get f() {
    return this.formGroup.controls;
  }

  hasError(control: AbstractControl) {
    return (control.dirty || control.touched) && control.errors;
  }

  saveEntity() {
    if (this.formGroup.valid) {
      entityCreate.request_data = this.formGroup.value;
      const schema = entityCreate.request_data.entity_schema as Array<any>;
      const db = {};
      schema.forEach(v => {
        db[v.column_name] = { type: v.column_type };
      });

      entityCreate.request_data.entity_schema = db;
      this.service.request('entity__create', entityCreate).subscribe(data => {
        // this.alertService.showAlert({message: data.value.body, type: data.value.isSucess ? alertType.info : alertType.danger  });
        // console.log(data.value.body);
        if (data.value.isSucess) {
          this.router.navigate(['/settings/entities']);
        }
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

  removeColumn(index: any) {
    (this.formGroup.get('entity_schema') as FormArray).removeAt(index);
  }

  ngOnInit() {
    this.route.params.subscribe(value => {
      if (value.id) {
        activeEntitiyDetails.request_data.filters['_id'] = value.id;
        this.service.request('entity__view', activeEntitiyDetails).subscribe(data => {
          this.entityData = data.value.body.data[0];
          const entity = {
            _id: value.id,
            entity_code: this.entityData.entity_code,
            entity_name: this.entityData.entity_name,
            entity_active: this.entityData.entity_active
          };
          this.formGroup.patchValue(entity);
          const schemaKeys = Object.keys(this.entityData.entity_schema);
          (this.formGroup.get('entity_schema') as FormArray).removeAt(0);
          for (let index = 0; index < schemaKeys.length; index++) {

            const indexElem = this.addGroup();
            indexElem.setValue({
              column_name: schemaKeys[index],
              column_type: this.entityData.entity_schema[schemaKeys[index]].type
            });
            (this.formGroup.get('entity_schema') as FormArray).push(indexElem);
          }
        });
      }
    });
  }
}
