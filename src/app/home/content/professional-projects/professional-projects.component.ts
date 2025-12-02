import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { TextComponent } from "../../../fragments/text/text.component";
import { ContentComponent } from "../../../fragments/content/content.component";

@Component({
    selector: 'app-professional-projects',
    imports: [TextComponent, ContentComponent],
    templateUrl: './professional-projects.component.html',
    styleUrl: './professional-projects.component.css',
    encapsulation: ViewEncapsulation.None
})
export class ProfissionalProjectsComponent {
  profissionalProjects = input.required<ProjectSecctionModel>();

  constructor() { }
}
