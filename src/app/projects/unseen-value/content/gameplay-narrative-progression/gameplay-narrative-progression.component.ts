import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { TextComponent } from "../../../../fragments/text/text.component";
import { ImagesComponent } from "../../../../fragments/images/images.component";

@Component({
  selector: 'app-gameplay-narrative-progression',
  standalone: true,
  imports: [TextComponent, ImagesComponent],
  templateUrl: './gameplay-narrative-progression.component.html',
  styleUrl: './gameplay-narrative-progression.component.css',
  encapsulation: ViewEncapsulation.None
})
export class GameplayNarrativeProgressionComponent {
  gameplayNarrativeProgression = input.required<ProjectSecctionModel>();

  constructor() {}

  ngOnInit() {
    
  }
}
