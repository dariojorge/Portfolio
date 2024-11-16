import { Component, input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ContentTypeEnum } from 'src/app/models/content-type-enum';
import { ContentModel } from 'src/app/models/project/content.model';
import { TextListElementComponent } from "../text-list-element/text-list-element.component";
import { ImageDisplayAll01Component } from "../image-display-all-01/image-display-all-01.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { TextComponent } from "../text/text.component";
import { ImageCalculatorDirective } from 'src/app/directives/image-calculator/image-calculator.directive';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [TextListElementComponent, ImageDisplayAll01Component, CarouselComponent, TextComponent, ImageCalculatorDirective],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ContentComponent {
  content = input<ContentModel>();
  contentList = input<ContentModel[]>();
  type = input.required<ContentTypeEnum>();
  contentTypeEnum = ContentTypeEnum;
  @ViewChild(ImageCalculatorDirective) getImageWidth: any;

  
  constructor() {}
}
