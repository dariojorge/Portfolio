import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { ContentComponent } from "../../../../fragments/content/content.component";
import { TextComponent } from "../../../../fragments/text/text.component";

@Component({
    selector: 'app-mechanics',
    imports: [ContentComponent, TextComponent],
    templateUrl: './mechanics.component.html',
    styleUrl: './mechanics.component.css',
    encapsulation: ViewEncapsulation.None
})
export class MechanicsComponent {
  mechanics = input.required<ProjectSecctionModel>();

}
