import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { TextComponent } from "../../../../fragments/text/text.component";
import { ContentComponent } from "../../../../fragments/content/content.component";

@Component({
    selector: 'app-game-concept',
    imports: [TextComponent, ContentComponent],
    templateUrl: './game-concept.component.html',
    styleUrl: './game-concept.component.css',
    encapsulation: ViewEncapsulation.None
})
export class GameConceptComponent {
  gameConcept = input.required<ProjectSecctionModel>();

  constructor() {}
}
