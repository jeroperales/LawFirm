import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/client.interface';
import { Case } from '../interfaces/case.interface';

@Injectable({
  providedIn: 'root',
})
export class CaseService {
private apiUrl = 'http://localhost:3000/cases';

 constructor(private http: HttpClient) {}

 //GET
getCases() {
    return this.http.get<Case[]>(this.apiUrl);
  }
//ADD
  addCase(newCase: Case) {
    return this.http.post<Case>(this.apiUrl, newCase);
  }

  //DELETE
  deleteCase(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);

  }
}

