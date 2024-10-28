import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ImagesModel } from 'src/app/models/project-detail-wrapper.model';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  imageList = input.required<ImagesModel[]>();

  constructor() {}
}
