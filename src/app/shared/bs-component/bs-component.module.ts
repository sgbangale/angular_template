import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { AlertComponent } from './components/alert/alert.component';
import { ModalComponent } from './components/modal/modal.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PopOverComponent } from './components/pop-over/pop-over.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { RatingComponent } from './components/rating/rating.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TimepickerComponent } from './components/timepicker/timepicker.component';
import { StatComponent } from './components/stat/stat.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    exports: [
        ButtonsComponent,
        AlertComponent,
        ModalComponent,
        CollapseComponent,
        DatePickerComponent,
        DropdownComponent,
        PaginationComponent,
        PopOverComponent,
        ProgressbarComponent,
        TabsComponent,
        RatingComponent,
        TooltipComponent,
        TimepickerComponent,
        StatComponent,
        PageHeaderComponent,
        HeaderComponent,
        SidebarComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        TranslateModule
    ],
    declarations: [
        ButtonsComponent,
        AlertComponent,
        ModalComponent,
        CollapseComponent,
        DatePickerComponent,
        DropdownComponent,
        PaginationComponent,
        PopOverComponent,
        ProgressbarComponent,
        TabsComponent,
        RatingComponent,
        TooltipComponent,
        TimepickerComponent,
        StatComponent,
        PageHeaderComponent,
        HeaderComponent,
        SidebarComponent,
    ]
})
export class BsComponentModule {}
