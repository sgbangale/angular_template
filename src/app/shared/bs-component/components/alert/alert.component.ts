import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alert } from '../../../../shared/models/alerts.model';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() alert: Alert = null;
  @Output() close: EventEmitter<Alert> = new EventEmitter<Alert>();
    constructor() {}

    ngOnInit() { }

    public closeAlert(alert: Alert) {
        this.close.emit(alert);
        this.alert = null;
    }
}
