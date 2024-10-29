import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectMechanicsModel } from 'src/app/models/project-detail-wrapper.model';
import { BoldPipe } from 'src/app/pipes/bold.pipe';
import { TextListComponent } from "../text-list/text-list.component";
import { TextTypeEnum } from 'src/app/models/text-type-enum';

@Component({
  selector: 'app-project-mechanics',
  standalone: true,
  imports: [BoldPipe, TextListComponent],
  templateUrl: './project-mechanics.component.html',
  styleUrl: './project-mechanics.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProjectMechanicsComponent {
  projectMechanics = input.required<ProjectMechanicsModel>();
  TextTypeEnum = TextTypeEnum;

  constructor() {}
}
