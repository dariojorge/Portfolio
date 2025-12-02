import { Component, input, ViewEncapsulation } from '@angular/core';
import { TextTypeEnum } from 'src/app/models/text-type-enum';
import { BoldPipe } from 'src/app/pipes/bold.pipe';

@Component({
    selector: 'app-text-list',
    imports: [BoldPipe],
    templateUrl: './text-list.component.html',
    styleUrl: './text-list.component.css',
    encapsulation: ViewEncapsulation.None
})
export class TextListComponent {
  textList = input.required<string[]>();
  textType = input.required<TextTypeEnum>();
  TextTypeEnum = TextTypeEnum;

  constructor() {}
}
