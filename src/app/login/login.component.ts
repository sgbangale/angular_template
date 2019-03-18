import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared';
import { LoginRequest } from '../shared/models/service.model';
import { alertType, Alert } from '../shared/models/alerts.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(
      public router: Router,
      private fb: FormBuilder,
      private service: ApiService

    ) {}
    alerts: Array<Alert> = [];
    formGroup: FormGroup;

    ngOnInit() {
        this.formGroup = this.fb.group({
            user_name: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    public onAlertClose(alert: any) {
      console.log(alert);
  }
    onLoggedin() {
        if (this.formGroup.valid) {
            const request: LoginRequest = Object.assign({}, this.formGroup.value);
            this.service.token(request).subscribe(data => {
              if (data.body.isSucess) {
                this.router.navigate(['/dashboard']).then(e => {console.log(e); });
              } else {
                this.alerts.push({ message: data.body.message, type: alertType.danger });
              }
            });
        }
    }
}
