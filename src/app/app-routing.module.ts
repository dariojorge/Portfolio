import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { Project1Component } from './projects/project1/project1.component';

const routes: Routes = [
    { path: '', redirectTo: 'Portfolio/home', pathMatch: 'full' },
    { path: 'Portfolio/home', component: HomeComponent },
    { path: 'Portfolio/resume', component: ResumeComponent },
    { path: 'Portfolio/about', component: AboutComponent },
    { path: 'Portfolio/project/project1', component: Project1Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }