import { Injectable } from '@angular/core';
import axios from 'axios';
import { Client } from '../model/Client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  createClient(data: Client): Observable<any> {
    const endpoint = 'client';
    return this.http.post(`${this.url}${endpoint}`, data);
  }
}
