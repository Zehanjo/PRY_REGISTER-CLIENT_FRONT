import { Injectable } from '@angular/core';
import axios from 'axios';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url = 'http://localhost:3000/';

  constructor() { }

  async createClient( data: Client) {
    const url = `${this.url}client`;
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
      throw error;
    }
  }
}
