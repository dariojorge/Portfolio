import { CommonModule } from '@angular/common';
import { Component, input, ViewEncapsulation } from '@angular/core';
import { ImagesModel } from 'src/app/models/project-detail-wrapper.model';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent {
  imageList = input.required<ImagesModel[]>();

  constructor() {}
}
