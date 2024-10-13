export interface HeaderWrapperModel {
    name: string;
    position: string;
    secctions: SecctionModel[];
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

