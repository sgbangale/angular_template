import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alert } from '../../../../shared/models/alerts.model';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() alerts: Array<Alert> = [];
  @Output() close: EventEmitter<Alert> = new EventEmitter<Alert>();
    constructor() {}

    ngOnInit() { }

    public closeAlert(alert: Alert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
        this.close.emit(alert);
    }
}
