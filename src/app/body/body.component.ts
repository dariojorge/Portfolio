import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
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
  offsetHeight: number = 40;

  constructor(private sharedDataService: SharedDataService, private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.sharedDataService.headerSize.subscribe((size: number) => {
        this.headerSize = size + this.offsetHeight;
        this.changeDetectorRef.detectChanges();
      });
    });
  }

  ngOnDestroy() {
    this.sharedDataService.headerSize.unsubscribe();
  }
}
