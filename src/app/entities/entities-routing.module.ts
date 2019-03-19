import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityDashboardComponent } from './entity-dashboard/entity-dashboard.component';
import { EntityMenuComponent } from './entity-menu/entity-menu.component';
import { EntityListComponent } from './entity-list/entity-list.component';


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
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntitiesRoutingModule {}
