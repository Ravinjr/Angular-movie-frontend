import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import path from 'node:path';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},//when there is no path 
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'movie',component:MovieComponent},
  {path:'**',component:LoginComponent}//when no path matches
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
