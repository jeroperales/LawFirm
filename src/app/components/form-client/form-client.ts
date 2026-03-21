import { Component } from '@angular/core';
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

  constructor(
    private fb: FormBuilder,
    private clientService: ClientServices
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address:[''],
      nationality:['']
    });
  }

//     formulario = this.fb.nonNullable.group(
//     {
//       id: [this.idGlobal as number],
//       name: ["", [Validators.required]],
//       fundYear: [0, [Validators.required]],
//       nick: [""],
//       location: ["", [Validators.required]],
//       stadium: ["", Validators.required],
//       imageUrl:[""],
//       league:  ["", [Validators.required]]   //dar opciones Premier, LPF, Laliga, serieA
//   }
// )

  submit() {
    this.clientService.addClient(this.form.value).subscribe(() => {
      this.form.reset();
      alert('Client added');
    });
  }
}
