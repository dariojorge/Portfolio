import { Component, input, ViewEncapsulation } from '@angular/core';
import { ContentModel } from 'src/app/models/project/content.model';
import { TextComponent } from "../text/text.component";

@Component({
  selector: 'app-upper-right-card',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './upper-right-card.component.html',
  styleUrl: './upper-right-card.component.css',
  encapsulation: ViewEncapsulation.None
})
export class UpperRightCardComponent {
  content = input.required<ContentModel>();

  constructor() {}
}
