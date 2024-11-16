import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { TextComponent } from "../../../../fragments/text/text.component";
import { ImagesComponent } from "../../../../fragments/images/images.component";

@Component({
  selector: 'app-playstation-talents-award',
  standalone: true,
  imports: [TextComponent, ImagesComponent],
  templateUrl: './playstation-talents-award.component.html',
  styleUrl: './playstation-talents-award.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PlaystationTalentsAwardComponent {
  playstationTalentsAwards = input.required<ProjectSecctionModel>();

  constructor() {}
}
