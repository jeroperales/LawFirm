import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Form, ReactiveFormsModule } from '@angular/forms';
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

  constructor(
    private fb: FormBuilder,
    private clientService: ClientServices
  ) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      address:[''],
      nationality:['']
    });
  }

  submit() {
    this.clientService.addClient(this.form.value).subscribe(() => {
      this.form.reset();
      alert('Client added');
    });
  }
}
