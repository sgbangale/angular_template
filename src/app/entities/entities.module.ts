import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesRoutingModule } from './entities-routing.module';
import { EntityDashboardComponent } from './entity-dashboard/entity-dashboard.component';
import { BsComponentModule } from '../layout/bs-component/bs-component.module';
import { PageHeaderModule, StatModule } from '../shared';
import { EntityListComponent } from './entity-list/entity-list.component';
import { EntityMenuComponent } from './entity-menu/entity-menu.component';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EntityDetailsComponent } from './entity-details/entity-details.component';
import { EntityAccessListComponent } from './entity-access-list/entity-access-list.component';
import { EntityCreateComponent } from './entity-create/entity-create.component';



@NgModule({
  declarations: [EntityDashboardComponent, EntityListComponent,
    EntityMenuComponent, EntityDetailsComponent, EntityAccessListComponent, EntityCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EntitiesRoutingModule,
    BsComponentModule,
    PageHeaderModule,
    StatModule,
    NgbModule,
    NgbTypeaheadModule
  ]
})
export class EntitiesModule { }
