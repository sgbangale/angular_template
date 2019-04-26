import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/shared';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import * as _ from 'lodash';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() entity_code: string;
  @Input() filters: any;
  @Output() actionEvent: EventEmitter<any> = new EventEmitter<any>();

  filter = new FormControl('');
  observableData: Observable<any>;
  isAdmin: Boolean = false;

  constructor(public service: ApiService, private router: Router) {}
  action(id: string) {
    this.actionEvent.emit(id);
  }
  ngOnChanges() {
    this.isAdmin = _.some(this.service.getSessionValues('admin_enities'), {entity_code : this.entity_code}) ;
    if (this.filter) {
      this.service.request(this.service.getAccessCode(this.entity_code, this.isAdmin),  this.filters).subscribe(data => {
        if (data.value.body) {
          this.observableData = of(data.value.body.data);
        }
      });
    }
  }
  ngOnInit() {}
}
