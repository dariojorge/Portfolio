export interface ProjectWrapperModel {
    introduction: IntroductionModel;
    secctions: SecctionModel[];
}

export interface IntroductionModel {
    title: string;
    description: string;
}

export interface SecctionModel {
    title: string;
    description: string;
    components: ProjectModel[];
}

export interface ProjectModel {
    title: string;
    pageId: string;
    imgPath: string;
    subTitle: string;
    details: DetailModel;
}

export interface DetailModel {
    engine: string;
    studio: string;
    description: string;
}

