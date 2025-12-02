import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { PlayVideoComponent } from 'src/app/fragments/play-video/play-video.component';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { PlayButtonComponent } from "../../fragments/play-button/play-button.component";
import { ProjectModel } from 'src/app/models/project/project.model';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { ProjectDescriptionComponent } from "./content/project-description/project-description.component";
import { PlaystationTalentsAwardComponent } from "./content/playstation-talents-award/playstation-talents-award.component";
import { ContribuitionsComponent } from "./content/contribuitions/contribuitions.component";
import { GameplayComponent } from "./content/gameplay/gameplay.component";
import { MechanicsComponent } from "./content/mechanics/mechanics.component";
import { GameConceptComponent } from "./content/game-concept/game-concept.component";
import { GameplayNarrativeProgressionComponent } from "./content/gameplay-narrative-progression/gameplay-narrative-progression.component";
import { ProblemsSolutionsComponent } from "./content/problems-solutions/problems-solutions.component";
import { GuidanceComponent } from "./content/guidance/guidance.component";
import { PlayButtonModel } from 'src/app/models/project/play-button.model';

@Component({
    selector: 'app-unseen-value',
    imports: [CommonModule, PlayVideoComponent, PlayButtonComponent, ProjectDescriptionComponent, PlaystationTalentsAwardComponent, ContribuitionsComponent, GameplayComponent, MechanicsComponent, GameConceptComponent, GameplayNarrativeProgressionComponent, ProblemsSolutionsComponent, GuidanceComponent],
    templateUrl: './unseen-value.component.html',
    styleUrl: './unseen-value.component.css',
    encapsulation: ViewEncapsulation.None
})
export class UnseenValueComponent {
  headerSize: number = 0;
  projectModel!: ProjectModel;
  playVideo!: ProjectSecctionModel;
  playButton!: PlayButtonModel;
  projectDescription!: ProjectSecctionModel;
  playstationTalentsAwards!: ProjectSecctionModel;
  contributions!: ProjectSecctionModel;
  gameplay!: ProjectSecctionModel;
  mechanics!: ProjectSecctionModel;
  gameConcept!: ProjectSecctionModel;
  gameplayNarrativeProgression!: ProjectSecctionModel;
  problemsSolutions!: ProjectSecctionModel;
  guidance!: ProjectSecctionModel;

  constructor(private sharedDataService: SharedDataService, private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.sharedDataService.headerSizeBehavior.subscribe((size: number) => {
        this.headerSize = size + this.sharedDataService.offsetHeight;
        this.changeDetectorRef.detectChanges();
      });
    });
    Promise.resolve().then(() => {
      this.sharedDataService.projectWrapperBehavior.subscribe((projectModel: ProjectModel) => {
        this.projectModel = projectModel;
        this.playVideo = this.findSecctionById(projectModel, "play-video");
        this.playButton = this.findSecctionById(projectModel, "play-button").playButton;
        this.projectDescription = this.findSecctionById(projectModel, "project-description");
        this.playstationTalentsAwards = this.findSecctionById(projectModel, "playstation-talents-awards");
        this.contributions = this.findSecctionById(projectModel, "contributions");
        this.gameplay = this.findSecctionById(projectModel, "gameplay");
        this.mechanics = this.findSecctionById(projectModel, "mechanics");
        this.gameConcept = this.findSecctionById(projectModel, "game-concept");
        this.gameplayNarrativeProgression = this.findSecctionById(projectModel, "gameplay-narrative-progression");
        this.problemsSolutions = this.findSecctionById(projectModel, "problems-solutions");
        this.guidance = this.findSecctionById(projectModel, "guidance");
        this.changeDetectorRef.detectChanges();
      });
    });
  }

  findSecctionById(projectModel: ProjectModel, id: string): ProjectSecctionModel {
    return projectModel.secctions.find(secction => secction.id === id)!;
  }
}
