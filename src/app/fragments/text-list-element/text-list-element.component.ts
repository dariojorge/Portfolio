import { Component, input, ViewEncapsulation } from '@angular/core';
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
  text = input.required<string>();

  constructor() {}
}
