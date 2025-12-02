import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { TextComponent } from "../../../../fragments/text/text.component";
import { ContentComponent } from "../../../../fragments/content/content.component";

@Component({
    selector: 'app-gameplay-narrative-progression',
    imports: [TextComponent, ContentComponent],
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
