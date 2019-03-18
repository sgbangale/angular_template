import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesRoutingModule } from './entities-routing.module';
import { EntityDashboardComponent } from './entity-dashboard/entity-dashboard.component';
import { BsComponentModule } from '../layout/bs-component/bs-component.module';


@NgModule({
  declarations: [EntityDashboardComponent],
  imports: [
    CommonModule,
    EntitiesRoutingModule,
    BsComponentModule
  ]
})
export class EntitiesModule { }
