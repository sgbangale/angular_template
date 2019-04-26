import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared';
import { entityActiveCount, activeEntityAccessCount } from 'src/app/shared/requests/entity.request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entity-menu',
  templateUrl: './entity-menu.component.html',
  styleUrls: ['./entity-menu.component.scss']
})
export class EntityMenuComponent implements OnInit {
  entityActiveCount: number;
  entityAccessActiveCount: number;

  constructor(public service: ApiService, private router: Router) {
    // this.service.request('entity__view',
    // entityActiveCount
    // ).subscribe(data => {
    //   this.entityActiveCount = data.value.body.count;
    // });
    // this.service.request('entityaccess__view',
    // activeEntityAccessCount
    // ).subscribe(data => {
    //   this.entityAccessActiveCount = data.value.body.count;
    // });

   }

   onViewDetails(data: any) {
     switch (data) {
       case 'entity':
       this.router.navigate(['/settings/entities']);
       break;
       case 'entityaccess':
       this.router.navigate(['/settings/accesses']);
       break;
       case 'role':
       this.router.navigate(['/settings/roles']);
       break;
       case 'user':
       this.router.navigate(['/settings/users']);
       break;
     }

   }

  ngOnInit() {
  }

}
