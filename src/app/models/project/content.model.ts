import { ColumnTextModel } from "./column-text.model";
import { TableModel } from "./table.model";
import { ContentTypeEnum } from "../content-type-enum";

export interface ContentModel {
    type: ContentTypeEnum;
    id: string;
    path: string;
    description: string;
    title: string;
    text: string[];
    columnText: ColumnTextModel;
    table: TableModel;
    content: ContentModel[];
}
