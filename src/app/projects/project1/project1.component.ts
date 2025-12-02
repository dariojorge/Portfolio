import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ProjectDetailWrapperModel } from 'src/app/models/project-detail-wrapper.model';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
    selector: 'app-project1',
    imports: [CommonModule],
    templateUrl: './project1.component.html',
    styleUrl: './project1.component.css'
})
export class Project1Component {
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
      this.sharedDataService.project1WrapperBehavior.subscribe((projectDetailWrapperModel: ProjectDetailWrapperModel) => {
        this.projectDetailWrapperModel = projectDetailWrapperModel;
        this.changeDetectorRef.detectChanges();
      });
    });
  }
}
