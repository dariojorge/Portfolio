export class ProjectWrapperModel {
    title?: string;
    pageId?: string;

    constructor(title: string, pageId: string) {
        this.title = title;
        this.pageId = pageId;
    }
}