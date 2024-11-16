import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { TextComponent } from "../../../../fragments/text/text.component";
import { ImagesComponent } from "../../../../fragments/images/images.component";

@Component({
  selector: 'app-guidance',
  standalone: true,
  imports: [TextComponent, ImagesComponent],
  templateUrl: './guidance.component.html',
  styleUrl: './guidance.component.css',
  encapsulation: ViewEncapsulation.None
})
export class GuidanceComponent {
  guidance = input.required<ProjectSecctionModel>();

  constructor() {}
}
