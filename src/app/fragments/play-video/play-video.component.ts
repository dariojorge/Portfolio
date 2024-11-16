import { Component, input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ProjectSecctionModel } from 'src/app/models/project/project-secction.model';

@Component({
  selector: 'app-play-video',
  standalone: true,
  imports: [],
  templateUrl: './play-video.component.html',
  styleUrl: './play-video.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PlayVideoComponent {
  urlSafe!: SafeResourceUrl;
  playVideo = input.required<ProjectSecctionModel>();

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.playVideo().playVideo.video);   
  }
}
