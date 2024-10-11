import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { ProjectModel, ProjectWrapperModel } from '../models/project-wrapper.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  personalProjects: ProjectModel[] = [];
  projects: ProjectModel[] = [];
  @ViewChild('headContainerSize') elementView?: ElementRef;
  observer!: ResizeObserver;

  constructor(private sharedDataService: SharedDataService, private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.setUpResizeObserver();
    Promise.resolve().then(() => {
      this.sharedDataService.projectWrapperBehavior.subscribe((projectWrapper: ProjectWrapperModel) => {
        this.personalProjects = projectWrapper.personalProjects;
        this.projects = projectWrapper.projects;
        this.changeDetectorRef.detectChanges();
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
