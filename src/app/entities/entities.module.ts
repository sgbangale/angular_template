import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesRoutingModule } from './entities-routing.module';
import { EntityDashboardComponent } from './entity-dashboard/entity-dashboard.component';
import { BsComponentModule } from '../layout/bs-component/bs-component.module';
import { PageHeaderModule, StatModule } from '../shared';
import { EntityListComponent } from './entity-list/entity-list.component';
import { EntityMenuComponent } from './entity-menu/entity-menu.component';



@NgModule({
  declarations: [EntityDashboardComponent, EntityListComponent, EntityMenuComponent],
  imports: [
    CommonModule,
    EntitiesRoutingModule,
    BsComponentModule,
    PageHeaderModule,
    StatModule
  ]
})
export class EntitiesModule { }
