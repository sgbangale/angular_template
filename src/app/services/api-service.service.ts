import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { LoginRequest, Token } from './view-model.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getSessionValues(sessionKey: string) {
    const sessionValue = localStorage.getItem(sessionKey);
    if (sessionKey === 'accessible_operations' || sessionKey === 'accessible_entities') {
      return JSON.parse(sessionValue);
    } else {
      return sessionValue;
    }
  }

  token(tokenReq: LoginRequest): Observable<any> {
    const req = new HttpRequest<LoginRequest>('POST', `${environment.rootUrl}account/`, tokenReq, this.httpOptions);
    return this.http.request<Token>(req).pipe(
      filter(data => data instanceof HttpResponse), // filter out the unknown response.
      map(data => {
        const resp = data as HttpResponse<any>;
        if (resp.ok && resp.body.isSucess) {
          localStorage.clear();
          Object.keys(resp.body.body).map(key => localStorage.setItem(key, resp.body.body[key]));
        }
        return resp.clone() as HttpResponse<any>;
      })
    );
  }
}
