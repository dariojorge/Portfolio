import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { TextComponent } from "../../../../fragments/text/text.component";
import { ContentComponent } from "../../../../fragments/content/content.component";

@Component({
  selector: 'app-gameplay',
  standalone: true,
  imports: [TextComponent, ContentComponent],
  templateUrl: './gameplay.component.html',
  styleUrl: './gameplay.component.css',
  encapsulation: ViewEncapsulation.None
})
export class GameplayComponent {
  gameplay = input.required<ProjectSecctionModel>();

}
