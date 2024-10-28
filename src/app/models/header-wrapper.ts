export interface HeaderWrapperModel {
    name: string;
    position: string;
    medias: MediaModel[];
    secctions: SecctionModel[];
}

export interface MediaModel {
    mediaImg: string;
    mediaLink: string;
}

export interface SecctionModel {
    title: string;
    pageId: string;
    pathSegment: string
    pages: ProjectModel[];
}

export interface ProjectModel {
    title: string;
    pageId: string;
}