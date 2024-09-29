import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { ProjectWrapperModel } from '../models/project-wrapper.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  headerSize: number = 0;
  projects: ProjectWrapperModel[] = [];
  personalProjects: ProjectWrapperModel[] = [];

  constructor(private sharedDataService: SharedDataService, private changeDetectorRef: ChangeDetectorRef) {
    this.projects.push(this.createProject("Project 1", "project1", "image-not-found-icon.svg"));
    this.projects.push(this.createProject("Project 2", "project2", "image-not-found-icon.svg"));
    this.projects.push(this.createProject("Project 3", "project3", "image-not-found-icon.svg"));

    this.personalProjects.push(this.createProject("Personal Project 1", "personalProject1", "image-not-found-icon.svg"));
    this.personalProjects.push(this.createProject("Personal Project 2", "personalProject2", "image-not-found-icon.svg"));
    this.personalProjects.push(this.createProject("Personal Project 3", "personalProject3", "image-not-found-icon.svg"));
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.sharedDataService.headerSize.subscribe((size: number) => {
        this.headerSize = size + this.sharedDataService.offsetHeight;
        this.changeDetectorRef.detectChanges();
      });
    });
  }

  createProject(title: string, pageId: string, imgPath: string): ProjectWrapperModel {
    let proj = new ProjectWrapperModel(title, pageId);
    proj.imgPath = imgPath;
    return proj;
  }
}
