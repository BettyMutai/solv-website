import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {MediaComponent} from "./media/media.component";
import {ReachUsComponent} from "./reach-us/reach-us.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'news', component: MediaComponent },
  { path: 'reach-us', component: ReachUsComponent},
  { path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
