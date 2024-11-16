import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { ImagesComponent } from "../../../../fragments/images/images.component";
import { TextComponent } from "../../../../fragments/text/text.component";

@Component({
  selector: 'app-game-concept',
  standalone: true,
  imports: [ImagesComponent, TextComponent],
  templateUrl: './game-concept.component.html',
  styleUrl: './game-concept.component.css',
  encapsulation: ViewEncapsulation.None
})
export class GameConceptComponent {
  gameConcept = input.required<ProjectSecctionModel>();

  constructor() {}
}
