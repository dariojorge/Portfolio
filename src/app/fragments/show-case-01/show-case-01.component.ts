import { CommonModule } from '@angular/common';
import { Component, input, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContentModel } from 'src/app/models/project/content.model';
import { ContentComponent } from "../content/content.component";

@Component({
  selector: 'app-show-case-01',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, ContentComponent],
  templateUrl: './show-case-01.component.html',
  styleUrl: './show-case-01.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ShowCase01Component {
  contentList = input.required<ContentModel[]>();

  constructor() {}
}
