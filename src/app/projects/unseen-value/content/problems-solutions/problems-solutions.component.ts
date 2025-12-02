import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { ContentComponent } from "../../../../fragments/content/content.component";

@Component({
    selector: 'app-problems-solutions',
    imports: [ContentComponent],
    templateUrl: './problems-solutions.component.html',
    styleUrl: './problems-solutions.component.css',
    encapsulation: ViewEncapsulation.None
})
export class ProblemsSolutionsComponent {
  problemsSolutions = input.required<ProjectSecctionModel>();

  constructor() {}
}
