import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { TextComponent } from "../../../../fragments/text/text.component";
import { ContentComponent } from "../../../../fragments/content/content.component";

@Component({
    selector: 'app-playstation-talents-award',
    imports: [TextComponent, ContentComponent],
    templateUrl: './playstation-talents-award.component.html',
    styleUrl: './playstation-talents-award.component.css',
    encapsulation: ViewEncapsulation.None
})
export class PlaystationTalentsAwardComponent {
  playstationTalentsAwards = input.required<ProjectSecctionModel>();

  constructor() {}
}
