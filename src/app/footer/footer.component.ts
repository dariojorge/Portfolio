import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {
  year: number = 2024;
  name: string = "Dário Jorge";
  disclaimer: string = "All content and trademarks property of their respective owners.";
}
