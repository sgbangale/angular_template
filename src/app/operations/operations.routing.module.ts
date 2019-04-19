import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationDashboardComponent } from './operation-dashboard/operation-dashboard.component';
import { OperationMenuComponent } from './operation-menu/operation-menu.component';
import { OperationListComponent } from './operation-list/operation-list.component';

const routes: Routes = [
    {
        path: '',
        component: OperationDashboardComponent,
        children: [
             {
                 path: '',
                 component: OperationMenuComponent
             },
            {
                path: 'entity/:id',
                component: OperationListComponent
            },
            // {
            //     path: 'entities/create/:id',
            //     component: EntityCreateComponent

            // },
            // {
            //     path: 'entities/create',
            //     component: EntityCreateComponent

            // },
            // {
            //     path: 'accesses',
            //     component: EntityAccessListComponent

            // },
            // {
            //     path: 'accesses/create/:id',
            //     component: EntityAccessCreateComponent

            // },
            // {
            //     path: 'accesses/create',
            //     component: EntityAccessCreateComponent

            // },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OperationsRoutingModule {}
