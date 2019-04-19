import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsRoutingModule } from './operations.routing.module';
import { OperationDashboardComponent } from './operation-dashboard/operation-dashboard.component';
import { OperationMenuComponent } from './operation-menu/operation-menu.component';
import { OperationListComponent } from './operation-list/operation-list.component';
import { BsComponentModule } from '../shared/bs-component/bs-component.module';

@NgModule({
  declarations: [OperationDashboardComponent, OperationMenuComponent, OperationListComponent],
  imports: [
    CommonModule,
    OperationsRoutingModule,
    BsComponentModule
  ]
})
export class OperationsModule { }
