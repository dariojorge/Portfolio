export interface ProjectWrapperModel {
    secctions: SecctionModel;
    projects: ProjectModel[];
    personalProjects: ProjectModel[];
    otherProjects: ProjectModel[];
}

export interface ProjectModel {
    title: string;
    pageId: string;
    imgPath: string;
    subTitle: string;
    description: string;
    details: DetailModel;
}

export interface DetailModel {
    engine: string;
    studio: string;
}

export interface SecctionModel {
    introduction: ProjectModel;
    projects: ProjectModel;
    personalProjects: ProjectModel;
    otherProjects: ProjectModel;
}