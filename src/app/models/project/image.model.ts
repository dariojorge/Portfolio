import { ContentTypeEnum } from "../content-type-enum";
import { ContentModel } from "./content.model";

export interface ImageModel {
    type: ContentTypeEnum;
    content: ContentModel[];
}
