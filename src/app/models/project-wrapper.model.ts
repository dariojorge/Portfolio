export class ProjectWrapperModel {
    title?: string;
    pageId?: string;
    imgPath?: string;

    constructor(title: string, pageId: string) {
        this.title = title;
        this.pageId = pageId;
    }
}