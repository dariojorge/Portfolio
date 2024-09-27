import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { ProjectWrapperModel } from '../models/project-wrapper.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  personalProjects: ProjectWrapperModel[] = [];
  projects: ProjectWrapperModel[] = [];
  @ViewChild('headContainerSize') elementView?: ElementRef;
  observer!: ResizeObserver;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.personalProjects.push(new ProjectWrapperModel("Personal Project 1", "personalProject1"));
    this.personalProjects.push(new ProjectWrapperModel("Personal Project 2", "personalProject2"));
    this.personalProjects.push(new ProjectWrapperModel("Personal Project 3", "personalProject3"));

    this.projects.push(new ProjectWrapperModel("Project 1", "project1"));
    this.projects.push(new ProjectWrapperModel("Project 2", "project2"));
    this.projects.push(new ProjectWrapperModel("Project 3", "project3"));
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
    this.sharedDataService.headerSize.next(element.offsetHeight);
  }

}
