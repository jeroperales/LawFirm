import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Form, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientServices } from '../../services/client-services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-client',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-client.html',
  styleUrl: './form-client.css',
})
export class FormClient {
form: FormGroup;

@Output() clientAdded = new EventEmitter<void>();  //NOTIFYS FATHER (LIST), EVENT OCCURED (CLIENT ADDED)

  constructor(
    private fb: FormBuilder,
    private clientService: ClientServices //SERVICE CONNECTED TO CRUD
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address:[''],
      nationality:['']
    });
  }

  submit() {
    this.clientService.addClient(this.form.value).subscribe(() => {
      this.form.reset();
      this.clientAdded.emit(); //WHEN ADDED SENGS SIGNAL 
     console.log('CLIENT ADDED SUCCESFULLY');
    });
  }
}
