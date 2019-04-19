import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/shared';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() entity_code: string;
  @Input() filters: any;
  filter = new FormControl('');
  observableData: Observable<any>;

  constructor(public service: ApiService, private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.entity_code);
    const tableFilter = {
      request_data: {
        filters: {}, // this.filters,
        sortFields: '',
        removeColumns: '',
        first: 0,
        rows: 0
      }
    };
    this.service.request(this.service.getAccessCode(this.entity_code), tableFilter).subscribe(data => {
      if (data.value.body) {
      this.observableData = of(data.value.body.data);
      }
   });
  }

  ngOnInit() {
    console.log(this.entity_code);
  }

}
