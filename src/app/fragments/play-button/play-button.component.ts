import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';

@Component({
  selector: 'app-play-button',
  standalone: true,
  imports: [],
  templateUrl: './play-button.component.html',
  styleUrl: './play-button.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PlayButtonComponent {
  playButtonUrl = input.required<ProjectSecctionModel>();

  constructor() {}
}
