import { Component, input } from '@angular/core';
import { TextTypeEnum } from 'src/app/models/text-type-enum';
import { BoldPipe } from 'src/app/pipes/bold.pipe';

@Component({
  selector: 'app-text-list',
  standalone: true,
  imports: [BoldPipe],
  templateUrl: './text-list.component.html',
  styleUrl: './text-list.component.css'
})
export class TextListComponent {
  textList = input.required<string[]>();
  textType = input.required<TextTypeEnum>();
  TextTypeEnum = TextTypeEnum;

  constructor() {}
}
