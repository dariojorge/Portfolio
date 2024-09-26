import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  personalProjects: string[] = [];
  projects: string[] = [];

  ngOnInit() {
    this.personalProjects.push("Personal Project 1");
    this.personalProjects.push("Personal Project 2");
    this.personalProjects.push("Personal Project 3");

    this.projects.push("Project 1");
    this.projects.push("Project 2");
    this.projects.push("Project 3");
  }
}
