import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Case } from '../../../interfaces/case.interface';
import { CaseService } from '../../../services/case-service';
import { Client } from '../../../interfaces/client.interface';
@Component({
  selector: 'app-form-case',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-case.html',
  styleUrl: './form-case.css',
})
export class FormCase {
caseForm: FormGroup;

@Output() caseAdded = new EventEmitter<void>();

clients: Client[] = [];
constructor(
  private fb: FormBuilder,
  private caseService: CaseService
) {

this.caseForm = this.fb.group({
  title: ['', Validators.required],
  caseNumber: ['', Validators.required],
  description: [''],
  status: ['OPEN'],
  priority: ['MEDIUM'],
  type: [''],
  startDate: ['', Validators.required],
  clientIds: [[]]
});

}

submit() {
  if (this.caseForm.invalid) return;

  const formValue = this.caseForm.value;

  // Convert clientIds to number[]
  formValue.clientIds = formValue.clientIds.map((id: string) => Number(id));

  this.caseService.addCase(formValue).subscribe(() => {
    console.log('CASE ADDED SUCCESSFULLY');
    this.caseForm.reset();
    this.caseAdded.emit();
  });
}
}






