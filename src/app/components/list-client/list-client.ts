import { Component } from '@angular/core';
import { Client } from '../../interfaces/client.interface';

@Component({
  selector: 'app-list-client',
  imports: [],
  templateUrl: './list-client.html',
  styleUrl: './list-client.css',
})
export class ListClient {


listClient: Client[] = [
  { name: 'Jeronimo',
    email:'jeronimo@gmail.com',
    phone: '123456789',
    address: '555 N 600 S',
  nationality: 'American'   
   }
];

}
