import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-project1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project1.component.html',
  styleUrl: './project1.component.css'
})
export class Project1Component implements OnDestroy {
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
