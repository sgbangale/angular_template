import { Component, OnInit } from '@angular/core';
import { Alert } from 'src/app/shared/models/alerts.model';
import { AlertService} from 'src/app/shared';

@Component({
  selector: 'app-entity-dashboard',
  templateUrl: './entity-dashboard.component.html',
  styleUrls: ['./entity-dashboard.component.scss']
})
export class EntityDashboardComponent implements OnInit {
  alerts: Alert = null;
  constructor(private alertService: AlertService) {

  }

  ngOnInit() {
}
}
