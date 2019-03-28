import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { entityCreate, activeEntitiyDetails } from 'src/app/shared/requests/entity.request';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-entity-create',
  templateUrl: './entity-create.component.html',
  styleUrls: ['./entity-create.component.scss']
})
export class EntityCreateComponent implements OnInit {

  constructor(private service: ApiService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.formGroup = fb.group({
      entity_code: ['', Validators.required],
      entity_name: ['', Validators.required],
      entity_active: [true, Validators.required],
      entity_schema : this.fb.array([ this.addGroup()])
    });
   }

  entityData: any;
  entityName: Observable<any>;
  formGroup: FormGroup;
  public model: any;
  isSubmit = false;

  columnTypes = ['String', 'Number', 'Date', 'Boolean', 'Mixed'];

  get f() { return this.formGroup.controls; }

  hasError(control: AbstractControl) {
    return (control.dirty || control.touched)  && control.errors && this.isSubmit;
  }

  saveEntity() {
    if (this.formGroup.valid) {
      this.isSubmit = true;
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


  removeColumn(index: any) {
    (this.formGroup.get('entity_schema') as FormArray).removeAt(index);
  }

  ngOnInit() {
  }
}
