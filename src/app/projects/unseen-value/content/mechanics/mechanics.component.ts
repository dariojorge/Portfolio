import { Component, input, ViewEncapsulation } from '@angular/core';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';
import { TextComponent } from "../../../../fragments/text/text.component";
import { ColumnTextComponent } from "../../../../fragments/column-text/column-text.component";

@Component({
  selector: 'app-mechanics',
  standalone: true,
  imports: [TextComponent, ColumnTextComponent],
  templateUrl: './mechanics.component.html',
  styleUrl: './mechanics.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MechanicsComponent {
  mechanics = input.required<ProjectSecctionModel>();

}
