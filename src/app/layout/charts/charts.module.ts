import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { BsComponentModule } from 'src/app/shared/bs-component/bs-component.module';

@NgModule({
    imports: [CommonModule, Ng2Charts, ChartsRoutingModule, BsComponentModule],
    declarations: [ChartsComponent]
})
export class ChartsModule {}
