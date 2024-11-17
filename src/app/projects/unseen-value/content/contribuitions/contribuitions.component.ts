import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { ContentComponent } from "../../../../fragments/content/content.component";

@Component({
  selector: 'app-contribuitions',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './contribuitions.component.html',
  styleUrl: './contribuitions.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ContribuitionsComponent {
  contributions = input.required<ProjectSecctionModel>();

  constructor() {}
}
