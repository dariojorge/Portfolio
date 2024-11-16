import { Component, input, ViewEncapsulation } from '@angular/core';
import { ColumnTextModel } from 'src/app/models/project/column-text.model';
import { ContentComponent } from "../content/content.component";

@Component({
  selector: 'app-column-text',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './column-text.component.html',
  styleUrl: './column-text.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ColumnTextComponent {
  columnText = input.required<ColumnTextModel>();

  constructor() {}
}
