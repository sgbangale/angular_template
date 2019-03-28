import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityDashboardComponent } from './entity-dashboard/entity-dashboard.component';
import { EntityMenuComponent } from './entity-menu/entity-menu.component';
import { EntityListComponent } from './entity-list/entity-list.component';
import { EntityDetailsComponent } from './entity-details/entity-details.component';
import { EntityAccessListComponent } from './entity-access-list/entity-access-list.component';
import { EntityCreateComponent } from './entity-create/entity-create.component';


const routes: Routes = [
    {
        path: '',
        component: EntityDashboardComponent,
        children: [
            {
                path: '',
                component: EntityMenuComponent
            },
            {
                path: 'entities',
                component: EntityListComponent
            },
            {
                path: 'entities/details/:id',
                component: EntityDetailsComponent

            },
            {
                path: 'entities/create',
                component: EntityCreateComponent

            },
            {
                path: 'accesses',
                component: EntityAccessListComponent

            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntitiesRoutingModule {}
