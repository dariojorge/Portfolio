export interface ProjectDetailWrapperModel {
    projectTrailer: string;
    projectInfo: ProjectInfoModel;
    projectContribution: ProjectContributionModel;
    projectGameplay: ProjectGameplayModel;
    projectMechanics: ProjectMechanicsModel
    projectGameplayProgression: ProjectGameplayProgressionModel
}

export interface ProjectInfoModel {
    intro: ComponentModel;
    info: string[];
    images: string[];
}

export interface ProjectContributionModel {
    title: string;
    gameplayDesign: ContributionModel;
    productOwner: ContributionModel;
    other: ContributionModel;
}

export interface ProjectGameplayModel {
    intro: ComponentModel;
    image: string;
    content: ComponentModel;
}

export interface ProjectMechanicsModel {
    intro: ComponentModel;
    mechanics: ComponentModel[];
    gameConcept: ComponentModel;
}

export interface ProjectGameplayProgressionModel {
    intro: ComponentModel;
    details: ComponentModel;
    guidance: ComponentModel;
}

export interface ContributionModel {
    title: string;
    list: string[];
}

export interface ComponentModel {
    title: string;
    images: ImagesModel[];
    text: string[];
    list: string[];
}

export interface ImagesModel {
    id: string;
    path: string;
}