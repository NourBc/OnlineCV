import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomepageComponent } from './Homepage/homepage.component';
import {AboutComponent } from './About/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path:'homepage', component:HomepageComponent },
  {path:'about', component:AboutComponent},
  {path:'resume', component:ResumeComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'contact', component:ContactComponent},
  {path:'',component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
