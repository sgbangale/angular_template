import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '..';


@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private router: Router, private accountService: ApiService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    // Apply the headers
    if (req.url.indexOf('/account') === -1) {
    req = req.clone({
      setHeaders: {
        'token':  this.accountService.getSessionValues('token')
      }
    });
    }
     return next.handle(req).pipe(
       catchError((err: any) => {
         this.router.navigate(['login']);
        return throwError(err);
       })

     );
  }
}
