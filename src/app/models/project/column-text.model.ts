import { ContentTypeEnum } from "../content-type-enum";
import { ContentModel } from "./content.model";

export interface ColumnTextModel {
    type: ContentTypeEnum;
    content: ContentModel[];
}
