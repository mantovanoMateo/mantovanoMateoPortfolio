import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';

const routes: Routes = [
  {path: 'aboutMe', component: AboutMeComponent},
  {path:'proyects',component: ProyectsComponent},
  {path:'techStack',component: TechStackComponent},
  {path:'',redirectTo:'/aboutMe',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
