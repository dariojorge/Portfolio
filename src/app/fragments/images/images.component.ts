import { Component, input, ViewEncapsulation } from '@angular/core';
import { ImageModel } from 'src/app/models/project/image.model';
import { ContentComponent } from "../content/content.component";

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './images.component.html',
  styleUrl: './images.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ImagesComponent {
  images = input.required<ImageModel>();

  constructor() {}
}
