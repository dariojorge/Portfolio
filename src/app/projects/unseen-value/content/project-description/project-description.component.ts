import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { TextComponent } from "../../../../fragments/text/text.component";
import { ColumnTextComponent } from "../../../../fragments/column-text/column-text.component";

@Component({
  selector: 'app-project-description',
  standalone: true,
  imports: [TextComponent, ColumnTextComponent],
  templateUrl: './project-description.component.html',
  styleUrl: './project-description.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProjectDescriptionComponent {
  projectDescription = input.required<ProjectSecctionModel>();

  constructor() {}
}
