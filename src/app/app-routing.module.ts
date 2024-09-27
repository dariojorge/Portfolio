import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { Project1Component } from './projects/project1/project1.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'project/project1', component: Project1Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }