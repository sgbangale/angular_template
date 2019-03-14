import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../services/view-model.model';
import { ApiService } from '../services/api-service.service';

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
    formGroup: FormGroup;

    ngOnInit() {
        this.formGroup = this.fb.group({
            user_name: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onLoggedin() {
        if (this.formGroup.valid) {
            const request: LoginRequest = Object.assign({}, this.formGroup.value);
            this.service.token(request).subscribe(data => {
              if (data.body.isSucess) {
                this.router.navigate(['/dashboard']);
              }
            });
        }
    }
}
