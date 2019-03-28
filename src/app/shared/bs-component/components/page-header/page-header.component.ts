import { Component, OnInit, Input } from '@angular/core';
import { PageHeader } from 'src/app/shared/models/page-header.model';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
    @Input() heading: string;
    @Input() icon: string;
    @Input() inActiveBreadCrumb: Array<PageHeader> = [];
    constructor() {}

    ngOnInit() {}
}
