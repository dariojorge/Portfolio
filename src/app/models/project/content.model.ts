import { TableModel } from "./table.model";
import { ContentTypeEnum } from "../content-type-enum";
import { PlayButtonModel } from "./play-button.model";

export interface ContentModel {
    type: ContentTypeEnum;
    id: string;
    path: string;
    description: string;
    title: string;
    text: string[];
    table: TableModel;
    content: ContentModel[];
    pageId: string;
    playButton: PlayButtonModel;
}
