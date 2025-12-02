import { Component, input, ViewEncapsulation } from '@angular/core';
import { BoldPipe } from 'src/app/pipes/bold.pipe';

@Component({
    selector: 'app-text',
    imports: [BoldPipe],
    templateUrl: './text.component.html',
    styleUrl: './text.component.css',
    encapsulation: ViewEncapsulation.None
})
export class TextComponent {
  text = input.required<string[]>();

  constructor() {}
}
