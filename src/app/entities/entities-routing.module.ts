import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityDashboardComponent } from './entity-dashboard/entity-dashboard.component';
import { EntityMenuComponent } from './entity-menu/entity-menu.component';
import { EntityListComponent } from './entity-list/entity-list.component';
import { EntityAccessListComponent } from './entity-access-list/entity-access-list.component';
import { EntityCreateComponent } from './entity-create/entity-create.component';
import { EntityAccessCreateComponent } from './entity-access-create/entity-access-create.component';


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
                path: 'entities/create/:id',
                component: EntityCreateComponent

            },
            {
                path: 'entities/create',
                component: EntityCreateComponent

            },
            {
                path: 'accesses',
                component: EntityAccessListComponent

            },
            {
                path: 'accesses/create/:id',
                component: EntityAccessCreateComponent

            },
            {
                path: 'accesses/create',
                component: EntityAccessCreateComponent

            },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntitiesRoutingModule {}
