import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectGameplayModel } from 'src/app/models/project-detail-wrapper.model';
import { BoldPipe } from 'src/app/pipes/bold.pipe';
import { TextListComponent } from "../text-list/text-list.component";
import { TextTypeEnum } from 'src/app/models/text-type-enum';

@Component({
  selector: 'app-project-gameplay',
  standalone: true,
  imports: [BoldPipe, TextListComponent],
  templateUrl: './project-gameplay.component.html',
  styleUrl: './project-gameplay.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProjectGameplayComponent {
  projectGameplay = input.required<ProjectGameplayModel>();
  TextTypeEnum = TextTypeEnum;

  constructor() {}
}
