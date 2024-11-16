import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';

@Component({
  selector: 'app-guidance',
  standalone: true,
  imports: [],
  templateUrl: './guidance.component.html',
  styleUrl: './guidance.component.css',
  encapsulation: ViewEncapsulation.None
})
export class GuidanceComponent {
  guidance = input.required<ProjectSecctionModel>();

  constructor() {}
}
