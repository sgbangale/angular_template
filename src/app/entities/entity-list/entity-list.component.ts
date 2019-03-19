import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared';
import { activeEntities } from 'src/app/shared/requests/entity.request';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {

  constructor(private service: ApiService) { }

  ngOnInit() {
this.service.view('entity__view', activeEntities).subscribe(data => {
  console.log(data.value);
});
  }

}
