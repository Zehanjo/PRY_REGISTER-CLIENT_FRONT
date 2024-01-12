import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private url = 'http://localhost:3001/';

  constructor(private http: HttpClient) {}

  getToken(): Observable<any> {
    const endpoint = 'generate-token';
    return this.http.post(`${this.url}${endpoint}`, {});
  }

  validateToken(token: any): Observable<any> {
    const endpoint = 'validate-token';
    return this.http.post(`${this.url}${endpoint}`, { token });
  }
}
