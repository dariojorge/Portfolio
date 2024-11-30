import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { TextComponent } from "../../../fragments/text/text.component";

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
  encapsulation: ViewEncapsulation.None
})
export class IntroComponent {
  intro = input.required<ProjectSecctionModel>();

  constructor() { }
}
