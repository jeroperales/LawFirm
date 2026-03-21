
import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Client } from '../interfaces/client.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ClientServices {
  
private apiUrl = 'http://localhost:3000/clients';

 constructor(private http: HttpClient) {}

//GET
    getClient(): Observable<Client[]>{
      return this.http.get<Client[]>(this.apiUrl);
    }


  //ADD
    addClient(client: Client): Observable<Client>{
      return this.http.post<Client>(this.apiUrl, client)
    }
  
    //DELETE
    deleteClient(id: number): Observable<void>{
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
  
}
