import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-page-not-found',
    imports: [CommonModule],
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
  headerSize: number = 0;
  

  constructor(private sharedDataService: SharedDataService, private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.sharedDataService.headerSizeBehavior.subscribe((size: number) => {
        this.headerSize = size + this.sharedDataService.offsetHeight;
        this.changeDetectorRef.detectChanges();
      });
    });
  }
}
