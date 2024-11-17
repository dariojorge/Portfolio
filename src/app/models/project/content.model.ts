import { TableModel } from "./table.model";
import { ContentTypeEnum } from "../content-type-enum";

export interface ContentModel {
    type: ContentTypeEnum;
    id: string;
    path: string;
    description: string;
    title: string;
    text: string[];
    table: TableModel;
    content: ContentModel[];
}
