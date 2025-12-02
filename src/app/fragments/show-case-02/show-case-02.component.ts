import { Component, input, ViewEncapsulation } from '@angular/core';
import { ContentModel } from 'src/app/models/project/content.model';
import { ContentComponent } from "../content/content.component";

@Component({
    selector: 'app-show-case-02',
    imports: [ContentComponent],
    templateUrl: './show-case-02.component.html',
    styleUrl: './show-case-02.component.css',
    encapsulation: ViewEncapsulation.None
})
export class ShowCase02Component {
  content = input.required<ContentModel>();

  constructor() {}

}
