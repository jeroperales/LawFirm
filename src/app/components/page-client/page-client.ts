import { Component, OnInit } from '@angular/core';
import { ClientServices } from '../../services/client-services';
import { Client } from '../../interfaces/client.interface';
import { ReactiveFormsModule } from '@angular/forms';
import { FormClient } from "../form-client/form-client";
import { ListClient } from "../list-client/list-client";

@Component({
  selector: 'app-page-client',
  imports: [ReactiveFormsModule, FormClient, ListClient],
  templateUrl: './page-client.html',
  styleUrl: './page-client.css',
})
export class PageClient implements OnInit{

  listClients: Client [] = [];

  constructor (private clientService: ClientServices) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    this.clientService.getClient().subscribe({
      next: (clients: Client[]) =>{
        this.listClients = clients
      },
      error: (e: Error) => {
        console.log(e.message)
      }
    })
  }

  deleteCliente(id: number) {
    this.clientService.deleteClient(id).subscribe(() => {
      this.getClients();
    })
  }

}
