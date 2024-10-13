import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { ProjectModel, ProjectWrapperModel } from '../models/project-wrapper.model';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderWrapperModel } from '../models/header-wrapper';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  headerWrapper!: HeaderWrapperModel;
  @ViewChild('headContainerSize') elementView?: ElementRef;
  observer!: ResizeObserver;

  constructor(private sharedDataService: SharedDataService, private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.sharedDataService.headerWrapperBehavior.subscribe((headerWrapper: HeaderWrapperModel) => {
        this.headerWrapper = headerWrapper;
        this.changeDetectorRef.detectChanges();
        this.setUpResizeObserver();
      });
    });
  }

  setUpResizeObserver(): void {
    this.observer = new ResizeObserver(() => {
      this.useNewSizes();
    });

    this.observer.observe(this.elementView?.nativeElement);
  }

  useNewSizes() {
    const element = this.elementView?.nativeElement;
    this.sharedDataService.headerSizeBehavior.next(element.offsetHeight);
  }

}
