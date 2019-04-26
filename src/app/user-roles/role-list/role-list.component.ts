import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  public tableFilter: any = {
    request_data: {
      filters: {}, // this.filters,
      sortFields: '',
      removeColumns: '',
      first: 0,
      rows: 0
    }
  };

  constructor(public service: ApiService) { }
  details(id: string) {
    // this.router.navigate(['/settings/entities/create/${$event}'])
// this.router.navigate([`/settings/entities/create/${id}`]);
}
addEntity() {
  // this.router.navigate([`/settings/entities/create`]);
}
  ngOnInit() {
  }

}
