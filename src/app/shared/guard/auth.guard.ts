import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private accountService: ApiService ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if (this.accountService.getSessionValues('token') != null) {
      return true;
      }
      this.router.navigate(['/login']);
      return false;
  }

}
