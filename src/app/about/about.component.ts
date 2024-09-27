import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnDestroy {
  headerSize: number = 0;

  constructor(private sharedDataService: SharedDataService, private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.sharedDataService.headerSize.subscribe((size: number) => {
        this.headerSize = size + this.sharedDataService.offsetHeight;
        this.changeDetectorRef.detectChanges();
      });
    });
  }

  ngOnDestroy() {
    this.sharedDataService.headerSize.unsubscribe();
  }
}
