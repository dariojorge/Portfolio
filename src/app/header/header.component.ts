import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  personalProjects: string[] = [];
  projects: string[] = [];
  @ViewChild('headContainerSize') elementView?: ElementRef;
  observer!: ResizeObserver;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.personalProjects.push("Personal Project 1");
    this.personalProjects.push("Personal Project 2");
    this.personalProjects.push("Personal Project 3");

    this.projects.push("Project 1");
    this.projects.push("Project 2");
    this.projects.push("Project 3");
  }

  ngAfterViewInit() {
    this.setUpResizeObserver();
  }

  setUpResizeObserver(): void {
    this.observer = new ResizeObserver(() => {
      this.useNewSizes();
    });

    this.observer.observe(this.elementView?.nativeElement);
  }

  useNewSizes() {
    const element = this.elementView?.nativeElement;
    this.sharedDataService.headerSize.next(element.offsetHeight)
  }
}
