import { ContentTypeEnum } from "../content-type-enum";
import { ContentModel } from "./content.model";
import { PlayButtonModel } from "./play-button.model";
import { PlayVideoModel } from "./play-video.model";

export interface ProjectSecctionModel {
    type: ContentTypeEnum;
    id: string;
    title: string,
    text: string[],
    content: ContentModel[],
    playVideo: PlayVideoModel,
    playButton: PlayButtonModel,
}
