import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsComponentModule } from '../shared/bs-component/bs-component.module';
import { UserListComponent } from './user-list/user-list.component';
import { RoleListComponent } from './role-list/role-list.component';

@NgModule({
  exports: [UserListComponent, RoleListComponent],
  declarations: [UserListComponent, RoleListComponent],
  imports: [
    CommonModule,
    BsComponentModule
  ]
})
export class UserRolesModule { }
