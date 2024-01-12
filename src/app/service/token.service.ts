import { Injectable } from '@angular/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private url = 'http://localhost:3001/';

  constructor() { }

  async getToken() {
    try {
      const response = await axios.post(this.url + 'generate-token');
      return response.data;
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
      throw error;
    }
  }

  async validateToken(token: any) {
    const url = `${this.url}validate-token`;
    try {
      const response = await axios.post(url, {token} );
      return response.data;
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
      throw error;
    }
  }
}
