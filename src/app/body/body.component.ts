import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  title = 'portfolio';
  headerSize: number = 0;
  offsetHeight: number = 10;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.headerSize.subscribe((size: number) => {
      console.log("Why no update before: " + this.headerSize);
      this.headerSize = size + this.offsetHeight;
      console.log("Why no update after: " + this.headerSize);
    });
  }

  ngOnDestroy() {
    this.sharedDataService.headerSize.unsubscribe();
  }
}
