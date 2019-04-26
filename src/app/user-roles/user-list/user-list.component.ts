import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {


  public tableFilter: any = {
    request_data: {
      filters: {}, // this.filters,
      sortFields: '',
      removeColumns: '',
      first: 0,
      rows: 0
    }
  };

  details(id: string) {
    // this.router.navigate(['/settings/entities/create/${$event}'])
// this.router.navigate([`/settings/entities/create/${id}`]);
}
addEntity() {
  // this.router.navigate([`/settings/entities/create`]);
}
constructor(public service: ApiService) { }

  ngOnInit() {
  }

}
