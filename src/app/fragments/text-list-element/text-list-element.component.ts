import { Component, input, ViewEncapsulation } from '@angular/core';
import { ContentModel } from 'src/app/models/project/content.model';
import { BoldPipe } from 'src/app/pipes/bold.pipe';

@Component({
  selector: 'app-text-list-element',
  standalone: true,
  imports: [BoldPipe],
  templateUrl: './text-list-element.component.html',
  styleUrl: './text-list-element.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TextListElementComponent {
  content = input.required<ContentModel>();

  constructor() {}
}
