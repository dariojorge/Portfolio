import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { ColumnTextComponent } from "../../../../fragments/column-text/column-text.component";

@Component({
  selector: 'app-contribuitions',
  standalone: true,
  imports: [ColumnTextComponent],
  templateUrl: './contribuitions.component.html',
  styleUrl: './contribuitions.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ContribuitionsComponent {
  contributions = input.required<ProjectSecctionModel>();

  constructor() {}
}
