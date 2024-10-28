import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ProjectContributionComponent } from 'src/app/fragments/project-contribution/project-contribution.component';
import { ProjectGameplayProgressionComponent } from 'src/app/fragments/project-gameplay-progression/project-gameplay-progression.component';
import { ProjectGameplayComponent } from 'src/app/fragments/project-gameplay/project-gameplay.component';
import { ProjectInfoComponent } from 'src/app/fragments/project-info/project-info.component';
import { ProjectMechanicsComponent } from 'src/app/fragments/project-mechanics/project-mechanics.component';
import { ProjectTrailerComponent } from 'src/app/fragments/project-trailer/project-trailer.component';
import { ProjectDetailWrapperModel } from 'src/app/models/project-detail-wrapper.model';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-unseen-value',
  standalone: true,
  imports: [CommonModule, ProjectInfoComponent, ProjectTrailerComponent, ProjectContributionComponent, ProjectGameplayComponent, ProjectMechanicsComponent, ProjectGameplayProgressionComponent],
  templateUrl: './unseen-value.component.html',
  styleUrl: './unseen-value.component.css'
})
export class UnseenValueComponent {
  headerSize: number = 0;
  projectDetailWrapperModel!: ProjectDetailWrapperModel;

  constructor(private sharedDataService: SharedDataService, private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.sharedDataService.headerSizeBehavior.subscribe((size: number) => {
        this.headerSize = size + this.sharedDataService.offsetHeight;
        this.changeDetectorRef.detectChanges();
      });
    });
    Promise.resolve().then(() => {
      this.sharedDataService.unseenValueWrapperBehavior.subscribe((projectDetailWrapperModel: ProjectDetailWrapperModel) => {
        this.projectDetailWrapperModel = projectDetailWrapperModel;
        this.changeDetectorRef.detectChanges();
      });
    });
  }
}
