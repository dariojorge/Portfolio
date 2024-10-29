import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectContributionModel } from 'src/app/models/project-detail-wrapper.model';
import { BoldPipe } from 'src/app/pipes/bold.pipe';
import { TextListComponent } from "../text-list/text-list.component";
import { TextTypeEnum } from 'src/app/models/text-type-enum';

@Component({
  selector: 'app-project-contribution',
  standalone: true,
  imports: [BoldPipe, TextListComponent],
  templateUrl: './project-contribution.component.html',
  styleUrl: './project-contribution.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProjectContributionComponent {
  projectContribution = input.required<ProjectContributionModel>();
  TextTypeEnum = TextTypeEnum;

  constructor() {}
}
