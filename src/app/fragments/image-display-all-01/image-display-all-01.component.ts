import { Component, input, ViewEncapsulation } from '@angular/core';
import { ContentModel } from 'src/app/models/project/content.model';

@Component({
    selector: 'app-image-display-all-01',
    imports: [],
    templateUrl: './image-display-all-01.component.html',
    styleUrl: './image-display-all-01.component.css',
    encapsulation: ViewEncapsulation.None
})
export class ImageDisplayAll01Component {
  images = input<ContentModel[]>();
  imageList: ContentModel[] = [];

  constructor() {}

  ngOnInit() {
    this.imageList = this.images()!;
  }
}
