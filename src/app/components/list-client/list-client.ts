import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Client } from '../../interfaces/client.interface';
import { ClientServices } from '../../services/client-services';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-client',
  imports: [ReactiveFormsModule],
  templateUrl: './list-client.html',
  styleUrl: './list-client.css',
})
export class ListClient {

  @Input() clients: Client[] = [];

  @Output() deleteClient = new EventEmitter<number>();

  onDelete(id: number) {
    this.deleteClient.emit(id);
  }
}
