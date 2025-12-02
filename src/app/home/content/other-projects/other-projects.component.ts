import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { ContentComponent } from "../../../fragments/content/content.component";
import { TextComponent } from "../../../fragments/text/text.component";

@Component({
    selector: 'app-other-projects',
    imports: [ContentComponent, TextComponent],
    templateUrl: './other-projects.component.html',
    styleUrl: './other-projects.component.css',
    encapsulation: ViewEncapsulation.None
})
export class OtherProjectsComponent {
  otherProjects = input.required<ProjectSecctionModel>();

  constructor() { }
}
