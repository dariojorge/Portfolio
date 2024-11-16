import { ContentTypeEnum } from "../content-type-enum";
import { ColumnTextModel } from "./column-text.model";
import { ContentModel } from "./content.model";
import { ImageModel } from "./image.model";
import { PlayButtonModel } from "./play-button.model";
import { PlayVideoModel } from "./play-video.model";

export interface ProjectSecctionModel {
    type: ContentTypeEnum;
    id: string;
    title: string,
    text: string[],
    images: ImageModel,
    columnText: ColumnTextModel,
    content: ContentModel[],
    playVideo: PlayVideoModel,
    playButton: PlayButtonModel,
}
