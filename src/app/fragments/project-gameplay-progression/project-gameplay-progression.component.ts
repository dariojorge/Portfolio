import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectGameplayProgressionModel } from 'src/app/models/project-detail-wrapper.model';
import { BoldPipe } from 'src/app/pipes/bold.pipe';
import { CarouselComponent } from "../carousel/carousel.component";
import { TextListComponent } from "../text-list/text-list.component";
import { TextTypeEnum } from 'src/app/models/text-type-enum';

@Component({
  selector: 'app-project-gameplay-progression',
  standalone: true,
  imports: [BoldPipe, CarouselComponent, TextListComponent],
  templateUrl: './project-gameplay-progression.component.html',
  styleUrl: './project-gameplay-progression.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProjectGameplayProgressionComponent {
  projectGameplayProgression = input.required<ProjectGameplayProgressionModel>();
  TextTypeEnum = TextTypeEnum;

  constructor() {}
}
