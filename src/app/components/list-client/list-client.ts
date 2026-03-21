import { Component, OnInit } from '@angular/core';
import { Client } from '../../interfaces/client.interface';
import { ClientServices } from '../../services/client-services';

@Component({
  selector: 'app-list-client',
  imports: [],
  templateUrl: './list-client.html',
  styleUrl: './list-client.css',
})
export class ListClient implements OnInit{



// clients: Client[] = [
//   { name: 'Jeronimo',
//     email:'jeronimo@gmail.com',
//     phone: '123456789',
//     address: '555 N 600 S',
//   nationality: 'American'   
//    }
// ];

 clients: Client[] = [];

  constructor(private clientService: ClientServices) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClient().subscribe(data => {
      this.clients = data;
    });
  }

  deleteClient(id: number) {
    this.clientService.deleteClient(id).subscribe(() => {
      this.loadClients();
    });
  }



}
