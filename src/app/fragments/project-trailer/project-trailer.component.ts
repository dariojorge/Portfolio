import { Component, input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project-trailer',
  standalone: true,
  imports: [],
  templateUrl: './project-trailer.component.html',
  styleUrl: './project-trailer.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProjectTrailerComponent {
  urlSafe!: SafeResourceUrl;
  projectTrailer = input.required<string>();

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.projectTrailer());   
  }
}
