import { ProjectSecctionModel } from "./project-secction.model";

export interface ProjectModel {
    id: string,
    secctions: ProjectSecctionModel[]
}
