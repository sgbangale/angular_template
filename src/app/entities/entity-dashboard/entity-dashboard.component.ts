import { Component, OnInit } from '@angular/core';
import { Alert, alertType } from 'src/app/shared/models/alerts.model';
import { AlertService } from 'src/app/shared';

@Component({
  selector: 'app-entity-dashboard',
  templateUrl: './entity-dashboard.component.html',
  styleUrls: ['./entity-dashboard.component.scss']
})
export class EntityDashboardComponent implements OnInit {
  alerts: Array<Alert> = [];


  constructor(private alertService: AlertService) {
    this.alertService.getAlerts.subscribe(data => {
      if (data) {
          this.alerts.push(data);
      }
    });
   }

  ngOnInit() {
    this.alertService.showAlert({ message: 'data.body.message', type: alertType.danger });

  }


}
