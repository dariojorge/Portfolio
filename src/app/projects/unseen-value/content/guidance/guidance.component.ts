import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { TextComponent } from "../../../../fragments/text/text.component";
import { ContentComponent } from "../../../../fragments/content/content.component";

@Component({
  selector: 'app-guidance',
  standalone: true,
  imports: [TextComponent, ContentComponent],
  templateUrl: './guidance.component.html',
  styleUrl: './guidance.component.css',
  encapsulation: ViewEncapsulation.None
})
export class GuidanceComponent {
  guidance = input.required<ProjectSecctionModel>();

  constructor() {}
}
