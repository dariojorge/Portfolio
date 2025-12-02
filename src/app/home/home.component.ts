import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

import { ProjectModel } from '../models/project/project.model';
import { ProjectSecctionModel } from '../models/project/project-secction.model';
import { ProfissionalProjectsComponent } from "./content/professional-projects/professional-projects.component";
import { PersonalProjectsComponent } from "./content/personal-projects/personal-projects.component";
import { OtherProjectsComponent } from "./content/other-projects/other-projects.component";
import { IntroComponent } from "./content/intro/intro.component";

@Component({
    selector: 'app-home',
    imports: [CommonModule, ProfissionalProjectsComponent, PersonalProjectsComponent, OtherProjectsComponent, IntroComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  headerSize: number = 0;
  projectModel!: ProjectModel;
  intro!: ProjectSecctionModel;
  professionalProjects!: ProjectSecctionModel;
  personalProjects!: ProjectSecctionModel;
  otherProjects!: ProjectSecctionModel;

  constructor(private sharedDataService: SharedDataService, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.sharedDataService.headerSizeBehavior.subscribe((size: number) => {
        this.headerSize = size + this.sharedDataService.offsetHeight;
        this.changeDetectorRef.detectChanges();
      });
      this.sharedDataService.homeWrapperBehavior.subscribe((projectModel: ProjectModel) => {
        this.projectModel = projectModel;
        this.intro = this.findSecctionById(projectModel, "intro");
        this.professionalProjects = this.findSecctionById(projectModel, "professional-projects");
        this.personalProjects = this.findSecctionById(projectModel, "personal-projects");
        this.otherProjects = this.findSecctionById(projectModel, "other-projects");
        this.changeDetectorRef.detectChanges();
      });
    });
  }

  findSecctionById(projectModel: ProjectModel, id: string): ProjectSecctionModel {
    return projectModel.secctions.find(secction => secction.id === id)!;
  }
}
