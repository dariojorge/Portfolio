import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectInfoModel } from 'src/app/models/project-detail-wrapper.model';
import { BoldPipe } from 'src/app/pipes/bold.pipe';
import { TextListComponent } from "../text-list/text-list.component";
import { TextTypeEnum } from 'src/app/models/text-type-enum';

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [BoldPipe, TextListComponent],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProjectInfoComponent {
  projectInfo = input.required<ProjectInfoModel>();
  TextTypeEnum = TextTypeEnum;

  constructor() {}
}