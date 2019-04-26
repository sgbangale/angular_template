import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsComponentModule } from '../shared/bs-component/bs-component.module';
import { EntitiesRoutingModule } from './entities-routing.module';
import { EntityAccessListComponent } from './entity-access-list/entity-access-list.component';
import { EntityCreateComponent } from './entity-create/entity-create.component';
import { EntityDashboardComponent } from './entity-dashboard/entity-dashboard.component';
import { EntityListComponent } from './entity-list/entity-list.component';
import { EntityMenuComponent } from './entity-menu/entity-menu.component';
import { EntityAccessCreateComponent } from './entity-access-create/entity-access-create.component';
import { CodeEditorModule } from '../code-editor/code-editor.module';
import { OperationsModule } from '../operations/operations.module';
import { UserRolesModule } from '../user-roles/user-roles.module';



@NgModule({
  declarations: [EntityDashboardComponent, EntityListComponent,
    EntityMenuComponent, EntityAccessListComponent, EntityCreateComponent, EntityAccessCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EntitiesRoutingModule,
    BsComponentModule,
    NgbModule,
    CodeEditorModule,
    OperationsModule,
    UserRolesModule
  ]
})
export class EntitiesModule { }
