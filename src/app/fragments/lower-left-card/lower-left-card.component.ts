import { Component, input, ViewEncapsulation } from '@angular/core';
import { ContentModel } from 'src/app/models/project/content.model';
import { TextComponent } from "../text/text.component";

@Component({
    selector: 'app-lower-left-card',
    imports: [],
    templateUrl: './lower-left-card.component.html',
    styleUrl: './lower-left-card.component.css',
    encapsulation: ViewEncapsulation.None
})
export class LowerLeftCardComponent {
  content = input.required<ContentModel>();

  constructor() {}
}
