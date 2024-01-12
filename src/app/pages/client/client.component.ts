import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../../model/Client';
import { TokenService } from '../../service/token.service';
import { ClientService } from '../../service/client.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
})
export class ClientComponent {
  clientAdd: Client = new Client();
  showRegistrationForm = true;
  token = '';
  constructor(
    private apiTokenService: TokenService,
    private apiClientService: ClientService,
    private router:Router
  ) {}

  async clientRegister() {
      this.apiTokenService.getToken().subscribe((response) => {
        console.log('Token obtenido:', response.token);
          this.token = response.token;
      });
    this.showRegistrationForm = false;
  }

  validateToken() {
    this.clientAdd.token = this.token;
    console.log('es valido agregando datos', this.clientAdd);
    this.apiClientService.createClient(this.clientAdd).subscribe((data) => {
      console.log('Datos obtenidos:', data);
      if (data.success) {
        console.log("entro");
        Swal.fire({
          icon: "success",
          title: "Registrado Correctamente"
        });
      }else {
        Swal.fire({
          icon: "error",
          title: "Token Invalido",
          text: "Intentelo nuevamente",
        });

      }
      this.showRegistrationForm = true;
      this.clientAdd = new Client();
      this.token = '';
    });
  }
}
