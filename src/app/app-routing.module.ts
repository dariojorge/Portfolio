import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { Project1Component } from './projects/project1/project1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnseenValueComponent } from './projects/unseen-value/unseen-value.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'project/project1', component: Project1Component },
    { path: 'project/unseen-value', component: UnseenValueComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }