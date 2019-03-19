import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alert } from '../models/alerts.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor() {
    this.alerts = new BehaviorSubject(null);
  }

  private alerts: BehaviorSubject<Alert>;

  get getAlerts(): Observable<Alert>  {
    return this.alerts.asObservable();
  }

  showAlert(alert: Alert): void {
    this.alerts = new BehaviorSubject(null);
    this.alerts.next(alert);
  }


}
