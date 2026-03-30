import { Component, Input } from '@angular/core';
import { Case } from '../../../interfaces/case.interface';

@Component({
  selector: 'app-list-case',
  imports: [],
  templateUrl: './list-case.html',
  styleUrl: './list-case.css',
})
export class ListCase {
@Input() cases: Case[] = [];

}
