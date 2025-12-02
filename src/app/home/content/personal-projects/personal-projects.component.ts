import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { TextComponent } from "../../../fragments/text/text.component";
import { ContentComponent } from "../../../fragments/content/content.component";

@Component({
    selector: 'app-personal-projects',
    imports: [TextComponent, ContentComponent],
    templateUrl: './personal-projects.component.html',
    styleUrl: './personal-projects.component.css',
    encapsulation: ViewEncapsulation.None
})
export class PersonalProjectsComponent {
  personalProjects = input.required<ProjectSecctionModel>();

  constructor() { }
}
