import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ProjectWrapperModel } from '../models/project-wrapper.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  headerSize: number = 0;
  projectWrapper!: ProjectWrapperModel;

  constructor(private sharedDataService: SharedDataService, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.sharedDataService.headerSizeBehavior.subscribe((size: number) => {
        this.headerSize = size + this.sharedDataService.offsetHeight;
        this.changeDetectorRef.detectChanges();
      });
      this.sharedDataService.projectWrapperBehavior.subscribe((projectWrapper: ProjectWrapperModel) => {
        this.projectWrapper = projectWrapper;
        this.changeDetectorRef.detectChanges();
      });
    });
  }

  onClick($event: MouseEvent) {
    throw new Error('Method not implemented.');
  }
}
