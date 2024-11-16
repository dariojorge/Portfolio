import { Component, input, ViewEncapsulation } from '@angular/core';
import { TableModel } from 'src/app/models/project/table.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent {
  table = input.required<TableModel>();

  constructor() {}
}
